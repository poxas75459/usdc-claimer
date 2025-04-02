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
    "2nHTY29v7yrpBW3KXkbQxfyxA1hgct9rLVCiwkVMFCHNdruUfqSGLkNRVPCkNtgRVapr59tASr5n728ne3HZDskx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2992jkpNvaXaMr7S7FagvwKSgGFEXhkK1fHShs5yAHc6fVzQXqHayLXBN5ofwMukc2g9wwMv99UdSiCw1h1zZucN",
  "key1": "3GNonJAq9DaFyj7eSDghYarJasbgr8wN72eiQz8sQfdXz8NdoEDUvjK6rDCgaBM9USzkE53n5GoReLYS19ZhZvK2",
  "key2": "4tBpVJMbiZismsSM3DnDjU35tuLuitBzphXHjypy1rEH5CEFi7KfkeK3wKdzsQcqzNgR5QxsLuSYd3QKmDeGEWCZ",
  "key3": "v9w3AnYwvTen5L52684KJQfEt6XvHPpWTSNH28JRvoj8mKYUkwAQ9GuLdoqe5QhXTmwJV6ePLptRXHpMtj11yCJ",
  "key4": "5Ck5zH3W2k93uMez1cZh9agRH5dtKPzn1UGVT6NGuUejLe2tFJWEvy8zV5wrdGZeJw9w8N96BZjCgZcKBrUnXJN2",
  "key5": "3EmWMxxZvQyAzxnUamABfNqY4KoQFoYn6WPJ4LKkWyLetPGtgNu8nEe1aNBZ3dvKcCcbqt6X99giDe6cEj8Hxubk",
  "key6": "b4Y2A3kATR5sJa3tk7Dt8QUmE6cUp7Qf1BFuwMgMr2v8oQL7WPZaoQggeeyq7obBZoaegHuEsgLXkCE1f8EZVEM",
  "key7": "2NHTJHy2FiyeobrkUrANsDfoHhwExyuQUpwKrzazGEEU7XWqieH1qGMVCVoTHzvWvs64tuScUkrHrSDEKnQSJtyW",
  "key8": "5ACFexay1tiDmTyiB8T5Tb2qPd4hfGvPWdDa9392ngpEExkqaVoZhUS65vgJ6YWzUVEBao9Dk4zF74Zp2KhZVxDU",
  "key9": "29q9RWQmue1MubRcq6vDfCPVjLEV2eNy3LAq7vQh52ozVPXagg3J4BkhfAKBimQtGnN8srzgybpQTv1mSqUo1M1t",
  "key10": "5bX6D6JVErKrCTmf7jsY4mgRz5VnntPRZjes9CRLVBqwGrn2Zfsm3M6C15uz5dHQt341GmxcoSXhDXsjBhNYDhSe",
  "key11": "4Eh59jfHfmycWC4WrCnRt6gRSweLPuVKAre8EPgMtSktPjXgS3UHx5ETp3KYLRXPsQ9sQrZdbq6gA9wzUt264YjT",
  "key12": "5R4khaJtGYNfyVHjHGdQmcUwwDJ1WNMAjByBpoSc3sJMUSTpDKTbSMb9ws3HFLiuWb3nMrBscxooiZmZaEEttCYE",
  "key13": "3ZCmYWeAmDAzMTfE4Q2XgG2YAwmyEAcJddFUzJH478fe9q4D8qgz8HJixawFBbNLofzVo2ZdRptzX97aNEodVhot",
  "key14": "h6GtHjUbSiF3247THVtKBoqgdNzqA3Wuexf8mx7UcqLTuKPAcq3pPowZQHdGdjyte2uSgTcCPwPzM1SG5HnGrFZ",
  "key15": "2Hca7oAhwQxmoxjQt3t4Thwj1cnr4q8uJjUB9hKmdC8fGnSdUEFiHc3pE7eJpxuaoPL8fRtGhTUwSZuLVgM4v1tH",
  "key16": "3oEaaYKLoKGs3XkfuCNRQTZQzzcwrxabMqEaZ4aPxWxofEML2ayYK5X2oGc9zUQnH282fG9QhZqevdtBAFYyMCGU",
  "key17": "4yZ7fnVbuefemuDJMSstvMcKTaJ25ezmV2VFf1LvDfgLpc6A5V7wbPw9w53bWJhkSdbqbTsZw2Mvb6Q3jC9sk1Pf",
  "key18": "5WKQRfUHjJqQzJMUtHRpBKp3cjnnay8q79K6EYkzR2JhjMXfwg7xFbjQXNVzfvnWnBR6KvCpkARK4jrbBFqbdzQ",
  "key19": "2NQTK86feY5UvDospwyuCZpkkEQGy8W7iUymGJ94MX1aPXese9GxpPcnF71nc7cMPFpaUDai5BNmRRApDJDSWJtX",
  "key20": "2QraWRvTGjsAbJ2HugX91DUHr1yZv8BKCMSq7N6pqsVwW4CUXJs2dVfdgbUT1nbBdKKsQXQGyV8857wmpA5oBMJb",
  "key21": "3Q3V5yJbJhr8VjeDjrucbkihHU1ytSVidzRjv9ANBeUhTangLrdHMzjk2dB86B4KyQuRCvokTcX7q25Cy5M1k9rW",
  "key22": "3y4ToDpnV5PpHqhaxbHTzWyypLFnhvq7jjJmhZusBiVJjh3nN5NEhYQuncFpSUtQC8JAV9gtrGxhKMXjpELPsUpN",
  "key23": "2DmKy682dbdB9oFoVT6owK6hBYpDPV1EHWFqb9HZCmKC8LF6tK1gkxpHyFKEoaQSFFB9ysqZ7c8HfjptaXSiMXBd",
  "key24": "2CCaMPX18unEBNXJnFgE2xCX9fV2jBVMyCgHRWG9zFcwu4QL1C5oCTzX6hNaHdKyeQzmYRRj97JJHoSVe8fsPwti",
  "key25": "5GpFYY4R3q7umKZLLtbXMRN8az1EUN1MyYkTev6yBjNCwgWjafcjKmqUDBfsAhE7gj6rxpaF4Rs44LJh6kxvEMM",
  "key26": "5C3rxk2fJh9pXWMWSXTxefgXF8zmrA2wgPhinWeL2gvQXUC8RuZGgozAq5ZDVv4AoudadpT9xMHpgpL6UFjSx71G",
  "key27": "4Z75TJUqMkNRSQLk7GZxbJyDGLYBQJkn9fTH9TQEu3edyjY4cJQki6L6ZXaacXQK9so5yrNtMRsZXJPTiVPLfQHn",
  "key28": "5pDdoSXhZMReJ3U3x23Dhm8K1d75iKS1aFJM1ZmRfv9fXEh41wZSWoVLKYxWYXkcEBGPXPe1FySf1WRP3BRucToS",
  "key29": "4AVCHVVUJF2ugFBEoDTFgq5BrLomouWBQuvCtC5KVnMTLo5z1U18tD86ymmbNjzwmMoCZ2iTpmniNAnNvvhdT688",
  "key30": "2cY7xP4cdftpXAJwyttTCnu9rzN9D4oWtyWeKLJDPmQ5mUsqFMrgnY3pVvoNogf6xwxsTKzDUmzVePhWHKDYJvVw",
  "key31": "3kd6B6WqhrVke6ngS4Puy6FsAnb9hM9utCJpnCifBApGKXEed2SaazqJjwFFWufFfWz6D65zN9oF4NahTvoE9a3F",
  "key32": "3JasqniuXendeLHp3Ghjumyhb6J2MD1RpKReVyfLxW2MraoDkgsQ9GxQszptTTGfeFJiN972x3sWCsZsoRBTyPXY",
  "key33": "43Hd7NbqM4VuG4n77TBLKj5zQAiUr9xmL6smN5o75GFuB6KKYd3obCMpB5dffVHyNkLsiPfZU846tA6UjdzzkFgq",
  "key34": "2idopVQyt5sN2yxgnNG8CX1rUaWe67Hu8CYxVS9Xdxfpp8bZ3DSs1v4gFqPAp28DhcfQuckiD4cTfko62KDhmiwp",
  "key35": "cPP1SFvUghZcdEpipokWhqkAoUcFrPDcLLWCnMsq3dsoLY9nNbCyE9UTH7Skfy4itugzG4Z2fMDB3rd9sCp1mfq"
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
