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
    "5f4wmhBLc2fhZauPkYBsPcNtgShzv6AU7RMTtDLPohD87nd98fDUeBZbVgVhV6GiMnqksy1JErq5Bp1NMqvP1Rz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zk3c8DSzDrmeeSsKJ3eiJ7UDN9NigTJqk28rhuRbNj3yTmpkptNVSVZw69G69bXrmtB3VsMwNwthEScdtzGkwcj",
  "key1": "ndhrToR8XgEgPBnbsQ1sJy9VmqffM77rpWAt5xaNyUvf8pEkPmQPoSUqg9AgdYZNwmyEhU2HfiuAivBn7BCEgt8",
  "key2": "5jjd2W5yguQyqfL4mvZb5W7tsEPXBLDS1eHuhURzmCyWp3hbZjdKXHp1WXKFZEj1KvHTF8AfWLRUwrnZpGvSK2EU",
  "key3": "35LVCL8d1rdFQj5ZAJfNv1hNhNA53sF6ANW9PLg96tz6gR31GTdoYXbJKA2BiekRuh59WZijntMBc3TodQ9zgWxF",
  "key4": "3QgviBARp3LTiSNbFe8F7axitUbW1wUs6JWeuCvB8bi9aAbHitB7wsZyKKUoy5g5b1YqYrbxrTxmoa9CnafRY7JV",
  "key5": "2i69znj47SivZjDrtSeKoqtc5gjxWJfWxKqPLA6pZ1p8Qx8ms9dmb5Z1MM8ue3ooWWGnvjk5g6MngvVWt1NnMHnr",
  "key6": "4EZNMZKJZyb9rerfaEiRYT2jcXSktPt19id7P2QsycRjVayo6g6skbLzREV7sNswz3FvABfLgNmRCAhumd1ogRSn",
  "key7": "3pp59NEfoEyJRJT1cqMUD7Usu6uE9oiiM7a8VFyfQXaYbQ5gRwcoWvaWX3U2irYx74V5big1sNvBMCMCAHiH5wf3",
  "key8": "2DzzSp7i6JWVzhPNYH76WNE82vmzSGTZkgd1YATVTXGfYYpkKfEJrmSKGMQpwmBMLgpsaApbgKKqnrTS8y4HoJyk",
  "key9": "3RLQGGsFNvqAr2Nss4yHY2eYsSTLxJvBvFwr1mpJtLhrAnNReh6uEFm3KSunFuFn6CABuHhYLcvNLnVBaEuPaFJF",
  "key10": "2CSm32FP3izLuVh18jXb1aJugnL3MAce33PuaxbE9YxvcHpvvE7ScwxjPrr8L333zR4Pyu4VodBxVPAc2cu4pzwQ",
  "key11": "QCRmq1chyGwUof4rqKQqoWt6W2pZhY9qZ6T5NLp1uPksfx19BwidiSs1ud7TYzS1Q74S3ELVC7Bz17myM61pct2",
  "key12": "4xe2pbdkxo5Eh8JV39BFHPVhbzx7A4arkKaotVpng6MdtG7rNnouSdk4TNDzeR2U2bjqqqRLnDNiSguw8DM9w8zX",
  "key13": "4Q1TvMDaRc2k7wgaeYh9JQq2PgF9mRN5W1pMkGKSqTZ7KYqkCUEnJ3gXfhQiy2GRP8QipS1gUsKboLSkSnUVQZcj",
  "key14": "4dtPfWJaJNDtvpXz7yboPyGDJu8YwZNnxM39wUGQogvQ15M8VP47jKRtHAUPfM3Mf8cPzh91HYe6BrXtDVW31jy7",
  "key15": "43yHvZ83KBJ1Cwu2YHqCb5Qo2kNHjGKJR6aLhoBDge6inb5oCUfcwUStYoxSgFWNAaPZutRpV7D3cBswjyssnux",
  "key16": "2Hz4Tx7h3W6EZMh1RMePTRMttrjhfJodSKhaNJSk6FDcXdtA9xdZdYNFuYmaFe1E31bQNz2aGKKhn6g5uyR4BC7h",
  "key17": "4XP4kub4rNsyE69oHoVMjLyqtuSQQBRSypA6mWsBncMNtgaSwp1T6wpD9W3cydBnsw5yuL7cJVWyuhu255AshKQy",
  "key18": "4nXYbQcLCg8LaXPAfejeWPRFBdYfdHUnTrPTfyYb8ZeeBK1Re4jeE72BWh7y5cCtt9nJWNbM6AWMochA2CFK4i9u",
  "key19": "5cMXdnacBYqHhDfdDnkxHAkZG9tm1uFWgZx2uFVW8KjovegwbH3WLnzaPhynZQ8Y32UPzCqPNCxoEJLcYC6S7hqt",
  "key20": "3FWzS4r5U6SPGrRpLR2oFNHxmVns4Zo9g3DAHy8bqioAKuj3DDZqV3t3XzGqUtLautETFigcduxkhpamv2pxjmio",
  "key21": "5ftKVmyzj4qzK5P8WfoLDxEfYRfaUyVmPu6oUZZvMzAFwPpEnM91bnWvMDHSg2qKwWyaFqFquf3VMgvaWitBzBuq",
  "key22": "3E6DHhDvJTfQqDQXq5TUh1yHhtosgXGS8xnVu3wGAzYXCtvDxsCqP9M8bRdwK8cmhpNMQh3ggALBgJyFZXfxUnrB",
  "key23": "D96afgv8XvKtuz2JTGMBaAMNvcphsB5QvHd1UZd53vqWSyERVFsxrwsdYu6WqrjoYrTpdQUw2suy4GZyMi7kCUv",
  "key24": "2aZrHxB8GVjssc3XNGFh5x73MyfZ3iuc4XY79RH41Z2gTo1hLtdwfuLAaawwzWALM8RJB1HJ8gmeQmrJJNp5Pu5n",
  "key25": "42RqMegJDX5rNdWuwWyE33k8h2MPEMhAuwTvozeKZLz5T39eYryFP43v9o5ZRokjHsvP3YmUkSxZo4d3w3fd5m5r",
  "key26": "Lp5VhG9a3CjGN6rraX2sxvhNgn15uovS6Bg9Xz3bS4JJoHDMoiwxRUXzSYhojG8oAHYyDD2i1xdZBZ4kCQMF18r",
  "key27": "5xiLCQ3k7NZCYGLb3tw8amguXGP2pV6or7ZBk5RY64htCtvxzGohirFoxYzw7RzNxtqjyThdCKkA3DyXzJP1WAjq",
  "key28": "3B6yQqQdffg9Co44dYSS4AGqPg1oKaEykyMDz3L1UDwEhxXBe15acZRVmCyn6eCAmXvha6yiQRLF7YqGhzRWB2cF",
  "key29": "234mpKvMyeZECdZTabqbuAhjMD1hZNnEwKajvGCaQDuPwBuydWajpqqktci9Y7CywCbCCz17XSzFxQNmct6zVUZs",
  "key30": "2z3m1gTwrpLdANAjccEmWeGhnTC6xtNpo8TgPgDXGWNafc4maRtuU64iqDGgbEa8yysHDRY3TkzyfWMbC55wAuV3",
  "key31": "5i8vHi1Cjpp6nUddWkhn347ZABMCQ8qRsBQe8cYzqtif4mT2fXrsFx3ZkuygFVww5MCAgFp4MFYTWv8dXMkqqPZN",
  "key32": "5T2A4XVnUnmX3ySr5B8nSwVXmJ2EP8pN7o3gxNbwLkdeyhQJPbtrfNR1pxVWitjKi6egVPTM4wSj96FFSxArJ7cE",
  "key33": "DsqSXrEvSBpU7WcFRn1wgz2mFuc5UyUmNbdVAEJeLmLWVfmrsBagqNxUuokS3zaM8365HAm8ccUVoWLjVczXUzd",
  "key34": "Bon62zcgBvbWoAJUDDhvNavfsenPVJb18wfM4s9yj5ZeeRQQxdKuUn8HrLuYzikjr4HPWHuCTkC2fSysCQY8ku3",
  "key35": "3jxuo4V8wLiY5cnFZf8nMgDBYyBN6XeMZmhTbrD99az2aKrgyzS7c7LEMappN8fKT8Y2C7Q1zrXbDeYp2SiKpYx1",
  "key36": "2MFuhfh5tUoGysoEvuEczD1rmWfYfqoNQG1y9Nmkj2xkkE6q5vsSdpC4zKq1xe3uL1ghnjbUuQw2ziA8z41wd4aW",
  "key37": "4QaaxM6ThR9TYYogFoits7yRGamzDzrTVXYd5axWdasM4s9yrAAXEbRgKdyBdZcHTgCr9qDUFVScHjKg1dmdBnE4"
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
