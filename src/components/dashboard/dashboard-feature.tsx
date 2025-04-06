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
    "2k5isUxgXQDo3UhWLw21m6tNsmQR3Qe3XUqZdSz7JGuJz4r73sHuZVqGHcXvVk4MdQsyZxpbeDmca8G18hBBvwGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DxjCm5PHxv8JU9cxKZc2xVTZt3HhLj1AiFpfJYgxBdw3we1gyvigfZ3FErsJ7rCoaTkaF14Ke6WpxYWvkb8jXfc",
  "key1": "2kedLCyRbTqtjFxyFFgb8vBxNQv5Xbkpe2z3ZtV5z1i2D6Hh9vs5XZSqGYghpcR8Z9WrWfQTcQbp2dCiKyuNmTRc",
  "key2": "48DGc6k5w1Hj7R6tCZWVSTpQBasHwF7kYx71gw5t9oqEpetQwHkSqQiAuyT5ybwknhUMUysDB9vCJq5k1DGyAUeZ",
  "key3": "3aJQr87333qNFasMvZhfK7cU4hSwbFs9hQHaqUWPCArWKiMkjUV2q7gnpyfjQG1T9eqUNDDkJWkRfrw53EbjVdu7",
  "key4": "bAkF7QXXf7Rizt157AhHw4vhFcZwfxFq535SjRwC67k45KRDf1JyQLM1MyiRi6Tdkq73eHgT55wz5AZQe8VsyjQ",
  "key5": "5WBY3xduc2wpDZGKM4tMeHusZbuNsAHrsibiQfHnmQEVMPPsyeVZff9zuAHA9ebB37iDtfSj7zJHWw2MWVLC8zMg",
  "key6": "3AUanF8rxatTc8jSATrFZ5biWxTPhkPDFfDr2iLaGaZ1LxWhaW5N4jhNfNH2PEABumkwk8uLKXzPUTCJrMr81hqm",
  "key7": "3Y91GHfXBMt4KoUYhg5WdZD1YEFh6RuHgUuf3BCkSfMdYigCANGGVPyjreRjajghinCiUEBE38897Kq7KVHQTAx5",
  "key8": "2Jtd7cv6CWjy855B81jTPVcEFtmTLTxT7YPhnKHnoBBsZBUZRCavYChiVt4P2RqDnPcmANeLNk2gXxskbVox2Yp3",
  "key9": "4EW44hkkFoqgpDf28UzM75dwRJoECGzmD685SdoZYAAcBtGjr4eSuXML7o1mkpwWLCfnuD4zEbiVaC3GK53f5N1u",
  "key10": "5GqKCzbf1YhiribZBgt72vKqX69ZBtujf13k1KQPnHiqc7Py95tNktFk1Xjt4UYQVQ4gTsLF7XCShEc9ZfZAr5JQ",
  "key11": "3YG95ZjH7NSuW2wHUgpqmaiFp779LXC9vJShGjn6EaAusmu2MvXxRGnqHZpKkbnrBSjTM5qQ5cqSVxAeYonzd8Ks",
  "key12": "4NgtJWjQ99xhsDPzUH7A4Gp23uvDDEvWNY4XJPcELTERfUgJbxZVa2SP73mDKW5nnMAskKTdhGkAYcPXPaYXH298",
  "key13": "4643ZWC9WEvE3jJC4XKuFCLvTiPHRPKa7gkmGEoPKYwq176dJopWC2PJvurVw1U297TJ8gZxmTTnHBQFpCQrYCVL",
  "key14": "2Z6Hvn2D4Ft5fb3bHJ5561FWpBuxyfuXkdAF55mHJ1C1uYj2tn9mLwjR6suqTqCKtXrkCDAu9p7uvFBqDxRLQNM4",
  "key15": "2m85Aqfw3za5MPoegvdpTd5PJxw6s9keAJunvMWhWC9HX2UDFG25v2Hp9nr41Lb5arS5618UjmThcLpN1sdVpYHq",
  "key16": "3T4W6Y2tT2QJoNXSoFnTgHq21ShDJhzQzayQxXPC1bpUym3GuN8Cp5cLYgmUdfA3pnsMkhhqBNGj1KMrs6frpaj7",
  "key17": "39TsKcxe4obo83vNLcdEcHuk2qdCxNAQ69Uek44HdRYsGKuF8xho8S35uKMcujzkXXQhPFiK43whWx25rLdL6wvT",
  "key18": "2qWgSVY5g2MQEJ5RKE9kq1aBV6HZBLkt2BsPpGnz5GtXegxRH5QpcX3DAQsN2bhDHzT2ctXPVs1HdQMk5pQKx4cu",
  "key19": "5bDZsbAbKECwfDTi8ormKDd8YMyDHCN7TQFTY8pkvE3yi9yy93SBHY3hZUDJPYqTzjgPyyGmPQVQoMwwGzdhBARz",
  "key20": "2PF2d6dQyHNj7nPcsWHPaZCnHGAHv5AwZZBQh2AHHUZ8HGv69sFbR1mRzBTKVwaRZhsiviT8RLekwSYJf6LpzEe3",
  "key21": "2k1BapKW9cGxHKmxRBoBsPcHJjhWeHm2AUFWfPbnwaGNHgoZbL23eFLUbzTtvNbmgd4XBhLi9BebMn5JpMdS2ho",
  "key22": "4cXG2GP7jSLswdjuHWJgnmiUm98epJjfz3xNNUUAQH74XdodwaNtydsanGmZ6CXRXTgK62DLDbp3c2JwTqYLuPr1",
  "key23": "4BYveDdDUst4GCZjWZXNM9exnrkzsvLizJJovfJSnEAVgJ2ZNVdbYxdd6fwtJV2Ujcq9rxCuSrUTxvpXUq9zBNti",
  "key24": "3eKNwDDBzfbPEuM4QztooTjakB6Dk1u5BPkbjJUncenjxnCsupB1qeDzpUPRnmcJMiL2gWwBeqY5XBMazHq6uv84",
  "key25": "41268AESt97UyeWbAs6MsFygY8LA1G9s4EY17Qq9xXmAUYrZDGDifo3CfD3qrkagkxATzU3mSB1jzg3C4nD8Kcmy",
  "key26": "3Ba4UUVK4dcvrS7yayfoZvMhdzKtSSyQZ7Q1prgjfdMwc3Ta1AH5d55YS95SXHYjJJUhckxbpTQpAKsMAvowRYTC",
  "key27": "3f9VqS5ogG1RgBV3UWqfohw5MexCkPngnXzFUqzBN5iPsWLiL1ngce25kAvHoFRH9YPxBextaLd3z4QGRxY7SQFq",
  "key28": "bCrNQdo6oFrkmm2DYM4GdgoX2somgU3fWjDipZn6Gm784mJeGy2cwnQZwSQoAGeMc1HpN3kP2ZgzUmkML486DYd",
  "key29": "5jbQqNiq718Nim7ZeYrbJijBsFbcaS6nAqXtuLyUk2BG4WreqmGQoxzdP6NLnvtvEvrCN1Tu8Wdg5kzYeo7dsfDF",
  "key30": "5HwrZFWH1qAE2M1xtFJ1zwfn26iwBf8xV1ZqN2jd51i1SW1Nyg5YH1QmVtj3CkANw7b5Vv8KDFsgam3mPWEkvHmK",
  "key31": "5Adwqk2kghoWV5A22Ntc6GVSvPKdMjXPBJWCNNFs9DFxtLjXaAf6BYd34jrXRGu7zs84217dh7KyvKr5ZvyM9ZCM",
  "key32": "3RhiXkoErBSdVh2Nk1sMMHex1ExMKcbwqv8nKdDnj3GyaB3rtBj84Pke7qBP1mhsUfULaZ2AfNMHA6szgP1QTKCf",
  "key33": "3CJTukXWsKRbRjCXkcKaKrE6b5jugLvtMmphtDb8SbiNC7zEYmYJvW2vy4gZuJFWeZQG7WRnvCSZhqhV8vZxZuZp",
  "key34": "6q8KegfjLKLy86Zvpj4EbtttB3NsvRz8CV67FxoeQaTcJFfCpnzgpHYm7gJ4qeo3DFmwdX4iMsWbjs9iidUi9ZZ",
  "key35": "xJHGZdue8SkGzEG7anRzHkgTnyeJJp5nagtqPJyAfQMpCF1SFVYuDsEywte5TgfABKLqHcFDJcm4bJ5BEpioDhA",
  "key36": "2VaBQBi8wMcMwj5EPBSAKfPMEwV7Gm45UE4GdWhUuTvrW6MHP19a31EoE9v9kLzGMcSkMCkVWJyxNJRbMJfNdT3P",
  "key37": "4hRUxqgKBaGFED8Kk55Qw4wzs22W4UxfUmdKYyfjAc6gVBpN3YFAXSs2bZia2rrJx5R2nedZuhkDNg3SaGNPNvb6",
  "key38": "2M8oUSunMrMv4rb9eu7ivNjoq1mwGryd8vRSUdrWikFXGxYRpeWyhnbdXyjb24fvTuYMrfGYRywffUPwhPSocUts",
  "key39": "j6meuudu8tGfoLuCQbisRh8EZ8J78irW7sM8CaxB1UJpXz391J79MaFnKGsWVyhFUZ7SwdZPjKNUd2gYcW2wSrF",
  "key40": "4B6m8zf1ki6s7EqbfeUizwFCeZEdU3wCZWV1iCQxfPi7X5VQph4dStdEaFS1DbUvk7VQnQhniTGVrGAPAPYrFcvf"
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
