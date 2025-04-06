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
    "3avPRZh2du9Mg8oA4xtBLP5tGRa3gAmqPJHkdK8sJ563hikkQJNbKw8bcb8J8Z7DLXTes9Wg4JiHFK5oxg2HLnYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uW2BjZXbRQu4kfKa3jbLRiUi6VTZ8ZFfsrzqJeSsNWZHBpBrAhrq581drCMjBeXeaWh8FdBgAVBE4r6BRHxiWm4",
  "key1": "iviRLLWUaZAf39Yfpwmm2eP8X73grfwV6t4D3fgjVS8FUdRoHAno7ProCudwREhAdyp8YGeXYAJBMGCaf99EV9C",
  "key2": "25V5n4pD6hEDomNXYQ2Rh633fXMMA8ATvthZrWfDa5CV3vtqtdGD9UcZQ5emdN7ryCJsDfRoPBNuA9VpgD5pXmJ6",
  "key3": "2DT3pVhQ22LPVKEw8LFS8kg9jwZk19r34J8DbWr1S1V61LiDwyiyv5d2ofxT5LeUaweHyt4UTu6mYxmi4CiUN5FM",
  "key4": "4G6RJGJqmUGDbDKj7at8q2neu38GTwKyq9kLKqKwgn2k2x1qJkbGyLGee7WbcWKHS8wzGXM5vQouzt9KWFzqoAQb",
  "key5": "4ocVtE5j8rZ3WAoSuaSzMNpRKbUbknLXRdZV2rDgoUzwmwhbfYyiiCwvoTvPXTBeKcMWn1CSLJR7PKGsLvg8qEEu",
  "key6": "3sQRrEUvFKHuC9YmSQgYAXaX26H5MGg7SKbtdcbrPPzYGeNmL8F3GHFpJZqPjr7CY76LdA2xjftXPNQXxLw62hPS",
  "key7": "3QAUcoMS187oeV8Fz5R6JQzb3AQAYsiE6yaSDi8ixAWw29HZP3SuuhsXzR9ZZAqiVPDrvj4CprdLowRgJvYbyGFL",
  "key8": "2Zn9UZxPRjNNoEA8F4k43cbitcUk3YE45JtQscSrbEnnDVwahC8XzGPVon4ywTUienvRCgh4urqZXyRYUxWeFAMP",
  "key9": "CLMggtLvETVUCKksStm2aTMHr3jKdnXiTBtzSj3JweBp6zPD6Q3mYChtNTJHvjiXrPf634ntu1dyaoCxtE7k6em",
  "key10": "54U49BCkrb2Ea2M7HNeMfM3BNEn8FdfNzfuWDJCzz1JMFo3Z2Rj592mGaC1FAb3vbtizZvbYHpBC4TCc7FtdH5oC",
  "key11": "5gPL98e7maTKRBeQN2iXWqvsW5co53iyQiAJXfmyQkqYMooak6MShGg7AeRWYmby4dp6euREGapwJ3KddTvc1SZR",
  "key12": "6giuy6PoohNh2sjdm9rEig2g8mgMqZb7xpCf2nhpdeN8xkXDC1oHhnyZ5kLB9Epcy6nvhYh2CX51Xcym5ETbYwW",
  "key13": "hQU169yCGvCVpJXy5txoFRiaE4tePjU8uoYBsh93e2Aiv9tVgbUGD7W6jLTJ8oofmTFrK4FTVwkv698fS6qDKns",
  "key14": "3BwuNjjuWTXZWAPt24udmYYuLdgehvtyzE2cxFZ2mxep1TnGzMq3sZ5KjbzfCpckz829ukWpsamUXD1XrjfUmHUx",
  "key15": "32eZXH8gZoiW4pfyTqULH5oNJidd8ULWzkh2yujX3DzrFaaPCn624Eq4uzKrrnaxE4JjVhh2RZvVUyMRuRdrVWDq",
  "key16": "25EwXgnz75MMKNXtogYGYdeqLEjvCCYp6c9B5XZ7k1t7NNRC4jKyZBFdVtoiL69iJbogRmAZJryaa6xZqFqrdywV",
  "key17": "4LB2c8nXUwBv7Fqjg17vFsBCs6JbMC7m8MB8Z5PCZA4rCQpXjd9XrYvTBAG3SJ1ppHbfRcE9yMFqFzS6V6L3FGS1",
  "key18": "52MdaFpbns9H2f9zcJXzrzfwokwwG9jYvzi646pHuBcMqEMRc8aogyJFKh9VtRz5MRPVQ8sBaWZXS5QFFqTwWBNe",
  "key19": "5SMi9EooLmB8p2hqTtZeAkb49iZ9XnwuAJP8sHSLgLtDh1ggFjk9EhGFmxjwCcEGzN1oycicPp3zTe8nxNmjfzWx",
  "key20": "24j2Exu6uFH8TATVUaAC6jnaT5YRVNHk9wdXy7ZdcfjRaSwBoYkWZGiFYMPETrtwP4wiW9LLrGcvKLvQ8vBJwjqC",
  "key21": "4q3bPodcZosr43wkPtEoa7jAXy5EJjdARGtyjVoiBL1XdRVghCqekEnNjQfbderXHbrfSJCGGWpN8hUY5kpBaHMZ",
  "key22": "5GsQVN6WhxcYQAdXAigeGdMwHzqadkK4VDtM8pkvHjAqbRrh2VkSsk3Tvf6QaRx8K7TKTcNdFcEaSk2PByy6azhM",
  "key23": "Xg4rWMMNDLy9j7ejFD6wcAo8qoj4A85ZdijXnHWDuRqffhFwrTXsNyCPNFqfK8JUtRoB4yKJpgWScvANdGUQ6dG",
  "key24": "5BQGffxqFnPbMTktXXujqxxDc5GoLJY5UgDmZkpeX3qjFb6NNnTPHhnoPzEBkTHRtVV2PuWwH4SnnKDgUVevQK6g",
  "key25": "xEc5nYVXiWimpLSoQTRdBEnPMpm93jYAU5ZWvwZB5uZ2Qep3STmeHJ43kbxjh6BovqYk6f4jYbueuJLw5gFx1cN",
  "key26": "PZDYQZ3akyrC4WCxxbBK7Pum1qmn98iXPwRhbp8H68tbphUSJ62zfvECqjJuXc7PAzfDKUBYKY6wD5ubsUAR331",
  "key27": "51EU2rrc3XEquayu2acdTPtp22CarWbLfd6PaZdimzk9zXcXhnDP8omRg1aJLqVCS3d5mXrporAfBoNivVgm1sNZ",
  "key28": "2QmjpdELd1zJXFqFfBo82Pbh3YKMp9MrG2C9zf8AYg58UQUtshG7eC5NM5kLKbqSWai5VsdtXKfcgDrQdr9YdpSr",
  "key29": "492mVCFR3dpJWeGRuwyS7k9rCvivEk6tkTHYpKYDBQt93cX2VmTsjAxYVjSdpLb5Zew3SefLSGfTNhULvCJxocWW",
  "key30": "3uyJQEUp4B8KusWBJgUc3sdJSTA1D1oM9s8pTBt1eCcf6BkM5KANcJUtktuuuxxJwqGieeYxnFhAPeSs8hz5gAs6",
  "key31": "2xsG1MK521xCQy52zUgUjzHaLqyfg1eHnYRsERUAqRmN7C72wANnP9rvSiBTSTH8NpUxnay7MtqEaNCXuBFqiaSf",
  "key32": "5UC8489AHAusQmhTZgTV2qcwL2xKzdg4Dp7ZfJDPHjuBmZjDAto2woCnXApgH1MpmD6tdB8BvxAQm2VQFBgdBJu9",
  "key33": "5tery8kNfSE2p233KdeBqkmzRS8M7uNJ5xkqsbshwqSFXsL3B8QzsnZ9Qu7x8gcexhyKK9dicAdJaUGXgsVHAJAA",
  "key34": "4AaemCHGobLP4LJSQHezP4ULfkZLSfNyd3CRDwoksYxN52oHYW4BVhBQRpwcpJEoZgevuqEzjgCYDiU3D6DPnx62"
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
