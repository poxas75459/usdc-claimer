/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2T6QaeiidM8sD1D7J1owk76jERqHFDmwrjAbrLgBSvz5cwwiho7MndTefQcoku3iWAsmoMSeKYpfz44AZn99zsEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s375Ru2uYrZq6E7xUb3QWeggZ88hCm85Zh28tcxFkEST2rk8w5JeANQzUstVuFyjKuPEzgr23htkvHJFJPEn7VX",
  "key1": "3ctVwiDoNf5KweshpFaM25dZqrSLuEp8nDBn2XtySG9WsBsgXdivRJuPCQ1MeMrkfKnUDBqPMjYA8n1VCzEqsusv",
  "key2": "2qGKDThWmTG5PvmteWT9VEekHaRGPTXxsZz3Uei7vANnkKaPQ2abwkG1T9CWoKhuGKuffCpJbsHKv8WeSJY5gZsK",
  "key3": "2v2urbvV9XKo13uspHhS7WUWBR9nEJryduxYAj6AzFjoXxqe4ZWEi8qs7sft8rXL4j8CrGsZVXuiXgZ4wGvzCXBK",
  "key4": "5ESxp4zHRTDUePKKNTBqcg3zJ9e7SvWQz8bFY5KcTEEi4xaDHP5uBDo5XZPVCdKRxnKD7CKxS2AMTGHYDiqthusi",
  "key5": "3aTseok1NH49xtT713aFq8pJA95sbAvPLQDUDuYiQZ7CrRYM1mKmUP9EtDPFZ5RPnw5iNCa9VN3LpaCFDioXLvsu",
  "key6": "2RGHoVS3uo9uaKkxDjaWBVHy8M5SUwJ5MQM3wYdXVKfMNp8MSj8Z1uCom4pT17a4ETHsR1tKCywS4euQYcPkrtTM",
  "key7": "45yHT2WtRr8kb27VPA2fCTkkgQZkvuSFPyM255giMRXkWNUgiFSx3TGsXb4ZqiRegdCBmp4kE7WiN5cJFvBNMJ1k",
  "key8": "3aVXeWfWVzMYwezWESZfqz6nawvrEACNBh6AQFLWAtTvCDXy6ve4ZdhNFiPy2kf8TAeRaTdzcYYQrSuLss6nMSKw",
  "key9": "3zexwNVw6X2gT1Dvb1AA4eC3tn845J9nhdDAsqVdF9GuTfv5gtTcHFHoed49Ugp2vGrzoK8HrVnGX7UN6jbbPRi",
  "key10": "41HRddBsJ8jgJDsnazwJBnqdhh7snn1yzqSRvRRzgfS6naXhEGg5YJbpBSmxQ1mNSM8otnfVeHaLDYumjF2T5ei7",
  "key11": "3s6Sw9FuBJeb5Vq9wCu8x3g8rA1heVMWJetimRM9Wf4VjQkdb6wEMQxEYdeFCGebQbXFy7wty7EiRnaindkZLRB7",
  "key12": "4WMKZyhrnFkgwfQswKXAnaf8ZZ6afjcDJPxytNQyTMyaEu6diH94QEf6F1YutrF4ZeDYCuBHsRdMxQs1ePMxo89k",
  "key13": "51CPWMx8kPbbQzyRv7b2oroMspKrZ7bocZ9nr55QxHgzzCHiHmSg1Ebu9fGQJtybM48cMgXLs72QBN6VV9XTRbJY",
  "key14": "45MzgdGwwRGQZNfMXTT6A1M2S6T55LLeL5TLJvSCDfhLsDHr41YMkvfHvipEVp7TAmG7CxrmS9ExuNXfSPXpjjPW",
  "key15": "5yPR9YfzWNhW1WJkKSBJiLGs7DEVxNLjZNacx1VcDkcT3NFiqXWaWixsQHd2swvXvo6K8JACk4x59hBJ8DiPF7dP",
  "key16": "2y6STD41NJc63hAT1sf9T4MoUuHs9fRnDJknPYGiBWv79E8UZoqsCPcTEJCCfuaLa739wHuShA4sz2293Q1RpDrs",
  "key17": "6756KhukQaH78r6aJ4tYbrWEAa2PUhxDePDyfDMdX9STdnWbSf8QBRprQTUvvAUHjurzi6FQcgsvt5cPLE6vGxbw",
  "key18": "S1sVLn3f9j7VwdVr9T1sqNoU6bFCqYV9SnS7F8RWJy1He1Si8FvbzUnqCbkjVzdZWH1z7w2ZfDVw6S2vDjaKEBr",
  "key19": "1kYzfDH9dBEojYjfkpcep4CXHEvksyCWq2ggofZFsZTbdDwcCHSC91u2jsuWZkuD2JWfoxBxwZR5dwKfpt9StHX",
  "key20": "3p2cnmsYFcrr2DUAZdzv9fV3kreUsjSRKU9SMfbzFvanz6aSTiywnLDjNYePaAmo8Xp3BdczSeNtMs2NwE2rkAPs",
  "key21": "3UWPUXjrmbZkXc7U1r9no29uW2ETnEVWpuTdaousjX5aAUAPnHUAj2yNbPCn1Zp9BCNLc8GAqmq8daDZLH5pwtVV",
  "key22": "3PU7HL5SUhrpxhrGPJddeH6PgT9ykLg3ZTHHNiivLJz2yAKqE7BTMD8V1qJEGkFp8yDxP33izXKxMfsSudtChURU",
  "key23": "X4E1p39dvS17Miq7h5WvD4zsRvHKR7cEzXhvu9mUv9b3k3oXz3MPNbcUEWpWhUHmVeBEaSoh6EGvWMvjTQjvTgy",
  "key24": "3AY7eM3u9f426WhoVLqLhe1oYKZaFnbHk3Xh59JfQgMWNnpNpVHaWBr3RovjHijfUcfSedKEpAEjM5cUxTuc1Lp",
  "key25": "FzGSrRe92r1rWf9kCYirBaGiXzniVPNngV6zQSTsbfMdxoMdD545EbRymFvrJzB9GzUZbseWtBHJnLXFKvDAz5f",
  "key26": "2UrFFQJSwFfygG3T1XqG5D5ipCuCW2de7ZmFiiPwRBLgV388cVKWnXf74YqPGQ96eJnuAPHcN966coou69mMPqZv",
  "key27": "4yPuZ51QSMa1bunDpCcaLpyhZ3iYmvf4c5StXPvwSfbX9kDmrCRZaUKx7oXCsiwTMxoxDdAu32zx1JiJVXuiaEgY",
  "key28": "4fAr9b328Lvae6M4NcdahriDxMo5UCCMy5eLR9hiKaHf16DY5qjywUeqVivTER644YRhKnSewVmeFyAsg2UsYFQH",
  "key29": "4yBYgBDL49weH4dM3WZALZnhqcbxwH5j3t55CJxnP8JSyxufRrHhnrDdKVU6CJEJkRRW8J1b5f3vh559o8PkvfXU",
  "key30": "h9X8Z9sBuPkfKhuTBP4TuyNxmLm5VDD89oN2zydPMwG2dtbMbrLUeJgExRkZhdXkh2nMbBgBLPhkDZTEkgYiv9p",
  "key31": "GXePhFB7XKXjTAHnvmtVx7eUr6eiKtWZLA4EYy38CyLJbbg8Rw1pnAAUdA3QzbtCpJL1LsTnMKjJcSM7Qr48Txd",
  "key32": "5ovpJQPKmYoFHghcWpVooLMVnpoR2Jvw6UFbRgTsixABvtdfVYAaq9Tokfjqk978KTeNWQb3gGGAsx2XxoPRwfRH",
  "key33": "2yBoks8ZwKB5RDFR9nYkb7gVwbe4cuy4dix5ZehbYPndZb7Pm6m1AyUvWe3FWKFDFFWsZ5PGXEKeJd2Hut4iaG3z",
  "key34": "4H8PaED91uJL9gr98AjHwVTBjhW4nQzQXGipXaJqqC51RVbBuPDp6Yf6RrCVvXE9XtktyVrnqyb7Pz7bw9q7tdr7",
  "key35": "22fn5Yapebf3r9vSXkpcFNBHUgD8MVKimhRfjbL1PwuZMkrF7YDsj74uf4fkzJv9pJZQ6Zm1uR6UiqBvwdKxeVgS",
  "key36": "tUgwr3ec6T3mrGSavipH7KBiEuncMBHP8jWUPdZnv4LBsnq36asBi9CPmL9tLCWhMD5aV9dV5WBiPtKb48Lqp6R",
  "key37": "2zXqA7DyiBku6XSZBYEqp3mhdxPhctww6KEWN91aMogZyaPc5s4ybENCf8z6aG2yKgPPPEdURph7EufZeebu8TmB",
  "key38": "y5yCboDMWCRj9EUb31LRLrSEzXaV6LroyRnokrY8oUaCEzJAxhzkSFVXvtZ77m52VVdD9QAoRznRAsujMTiYFhW",
  "key39": "4k4iPsYzzpiNSt3HZz2iQa89Bc8KkznNkgpwyo72qjsmChRGjgz7Fnudv1YRrtcsjFHtpZeeQYKcgfWA2EgcMnYm",
  "key40": "4q284AmG9ec71QkuaRPJ97y6GW97zTaPnHiJPwPry4f5AE33L4CkjMATdcMchRAkMYbQ3et7bdbysucZ2GgVZWzz",
  "key41": "43Jk8ntkYTtnjxswDHqEQ5AP8VDqxA2kWUnbyrn78ZwRJet5AMSEXie3ifriwfeiAUJDC6g81Ar6wgP2V586uq8Z",
  "key42": "3c7eruGN5GgVRwyUyfFoAGYX7hmsTpyr8rszc45LQDcEATKqC2GJn3g8WQ4aNp89zHwRLZju4dtrPNZRQVkfHPp6"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
