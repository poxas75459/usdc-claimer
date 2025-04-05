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
    "47KLgbcxWVv4DS75nJyREoNrSCgXFZHypPvKGbUqByxSpRAbefXDGBvuuiQiNimtSpEt9WFohwPYjGtGsVRTi6JP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rkQQLWVA5NDjC3GuioJdCACh6ZXrKx4Lrj4XxariAioyfjFKdYFtMpePLCD7eD5ir2K4xVd9gDMFwE61FzPtSgv",
  "key1": "4EvJyPqUbwDPKmGx39irzufP2HGXeqhBBAfjUu5BvHtukypXAA1jjoBXDsRzNsy6ZBcFYsCdEm8dwbBGjb2Qe5QJ",
  "key2": "8MLB9hYVUsEjNcKmYbb5cf6H5viizVMUiAcQAiNGV9SbmDfvshbs4BZYqcoKxwvry3nRfBKumMP49iNrHEMXhFZ",
  "key3": "2hhqHiZjH13biUHVRdMYN4Yz2AetkGyfSbiRaVJVWaDP8uduS5nmF1eavcDXs3CRdxC2GNHmR31XStFCaWC1VGEA",
  "key4": "5fKnZ8QPU5YbCRc6jN3dGjXPSD6VYFxEtUwrtbJYqpr9jvrPDuTzZwwvAJGXCUcMA3Pc53SKiKWHeysWrVdtYdUe",
  "key5": "2r3E8Zvr18Uq1WhzBDtVsfLc2YxP3xyZbeqskjRezrj4jLC9C4jtiQhewssmdkKi1w4V9F9karNcLm3AaAZiJrzU",
  "key6": "3BoE3nfhjzMegdrapuZcdHAaAfB6b4VkV4JMH3FHWLYFZqNfSH9c2EbYeZkBmdLNwKsNHno4FXrDe6wERDBbkiSu",
  "key7": "d13rj4ZPN445R37r49A7CWCXs4AeeWsVFQesbidSgVV6bYrwPLwX8WbKVm5vvF5QKPa2cZXGruNAZ6renYfvkmQ",
  "key8": "ga5RPHFuPoDYUkTLc95KCCEHfn6VVYyyuXwhryRUk3cUDZNzYYxKauGboYE2mPSKatQyeVCR9JbixB5za9pvmmp",
  "key9": "4cyhcronYGGBcEjcazr9oTSS3sQ1ygxCWxf56pWnwHnLXhF1T6mtkFb36Qvru2fLwi8cmnyc3Wb6NAA9DUUqN7N5",
  "key10": "5FpBTY4yxbmiGQYWPp6rQ88YJvxjiC7F8qba5zwqxvUrYFNyJT951AyLCbxc9QCRkwY7tECDcVyAEW2MNEqpLGqA",
  "key11": "2Fqx4WXk55dfimgqQX1Tv58YNxShZ6pZeqxYuHXY8UDAEEDnFvX4c5hr3LhXAvD2Q5ofWY8XYaeNcTqp7LAVfsqu",
  "key12": "3thNf7iGnov7EA7sc1z8uGws8KgzKxSgmdGKiQooPZe8c8u5XKMdfQbpGBwbZ3DgP6EtzoHsUzxJan2VtBTEsBoY",
  "key13": "AUDM4ESYB38PrEGexTbErharN5ANPbawavTxGCgjxzCKxsCLq7rRrTUT4f7Zi6gRDJTT9uUUJf7Cj5ygMbR9sp1",
  "key14": "22Uv4hR9giXVcLEVLgzNXMQG1yyACJRvhB7yxwTomemAF7gCdjF96ApJR35LT3LARRQN1B8dWW1jB6nN8MQuZgy5",
  "key15": "372iXZ7Pyjy3NB6pVUbwfABbp5Cs74DXQq9nWkz5YiiYci87kpHUr4zJkCvof9jD34dcEFQoBvDSP85Mu4sr3jSp",
  "key16": "RmtkfdgjYRrULjCfwfVsSxdkw43SSFJk3g13dq3dDK6PuQcBRreSs7x9XGwQ2QQsRGJGqn4MVLvCy7aoPmtiS75",
  "key17": "4p2QviToVUBftg1dCakEAaAvDr3F2pYEGyhkAZyG2mLXFMnmAcE8uRa3jXQKSrQDm7YLXF5PX6P2Na593WE1BzRe",
  "key18": "bnTz7isYSGciZoGZkAfe5gmGKXQXjzNDN1vLqADNysTjvsKF2k6Z811E7utBtAa8eQfsTCop9FE8eAUfZGUKj7s",
  "key19": "3AaCT1XXewsPV9vQLR1YPKBxGdq1jqXB75AEvZrXF6HX1vG8McERgcpUsfdoyyXL7TtEHg6ebfhv8aaMUxEyoE1e",
  "key20": "RhcWqXBcec7ULJFt6h9hUU6buDVD3geNgvgBpZKP9W3iFt3qu36ETERhxNmen8ZCMpNtVypX3rnkD5cvKPBnkC7",
  "key21": "2Ctosbcc7k4jFgJXjouWG8S9CcyPP4JiMeUBwBpLWcGqDfp8xKRfw1yh65885A4xHjmaSQbkqcvUrbHJyy4ggnAM",
  "key22": "2957aqfq7x7Vh9yTivV598hMaXZZXvgoicSFK51Cr3Y37Z84vnvUMcYv2xVNbS8yfJHtYkeb2D6ZJKCaw5nV8Znb",
  "key23": "4gKSVmZ4UqDiuj2NUsPvPcJSEwWHNpocs55jFK8aytqT8JhTp83vfiqZvHKSXyjYww3N9rGBzT7hJH2SuazRMxjh",
  "key24": "5yxx28janLgnR8T2EdcQAcYqw2MEkpRFHfHn228fSsAKF6tjC2mtvA1q3jo4Neq6FWSq6uwpzdJg7BmtyMz4tCG1",
  "key25": "RfPMMnAmypREth16pAUKT8kKnmQKQaDyv2QR3cTmqr2unjg6gdYnWEzMGmN46CrfKDx7bvXnLP5bAmnotewUVaJ",
  "key26": "4qE5Gz8dEZKYvD4J1nH3h9J1oJQVJP7scy2gPgoPKAyqFe1F6nEdbNB7NZo5bWhDgkCZARMD8zWqJ8zzxY5QxNDa",
  "key27": "5N8W9cXKYRmkYibu6JtCLfQBqxRDC6naXsw5SwA75P2ABSkZimq6jysSsGGdf4RhCn2YNyLHcyzSfSy9JVj1HoVR",
  "key28": "2RSVvDSGWB2vm1DmkMCoREPnX8JbLsqoGZVYGc961eGQKFdTxKigjok8civQWxFqDLan2ngyDBQsxpaNLefegKyo",
  "key29": "MUcjyB372MYnNNZKkCg3yotFUpENHiz6WN2VbPc3QgPeUUgZ5XJKr5SuoFv5uF48ZHWL7uRmbtKSEMkYDiP5bZK",
  "key30": "2sVqJm6Z5XJhVx7gKUnsgQU8JmjaQ3Br172642rPrWsPQCdGmYwBFkVAdwYCzaNe4uN2ByZeXSG8WFbdNnWEfkyx",
  "key31": "L7WXRh5wYU6k5K8zy6PPethoq9z3ezNjc2XqDeVeqNnwUGSYzDmYec63kMV6kcPdnjYHP3PcdYiM93FHbMzwrp2",
  "key32": "5rQP5ybtfpzj25RjrWdNXwJfqFWW66hdndaXhzAFCAeMKiWPpQ1kY5whFTNWeaMAnekVXcVtNKZWRFBdrorbBkw9",
  "key33": "5Prwhc7oLu1h2yCK9vMT7snEYUGpR29wuMeeswd4BNkeVKxSSkaq6wNoAVWUq5DRDbqQuUJPbKrce3PVTwGXLRWa",
  "key34": "22Q67jjrHNRsLH5Pi3pSC12cqhjU7htSdhGLG6XHwQojRHQGfYYy3yqUKcTNg9qLNk9VSsQeEwnVa1sngFKLgF7S"
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
