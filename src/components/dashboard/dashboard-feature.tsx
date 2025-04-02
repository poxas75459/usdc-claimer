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
    "mXBnP9DykH2pDN65YsojG23bXxKTA6XGU1gwqxZwgBWpvZquGETqf7uUJixD3STXS6kFvtcXhrBdJuMHbtwVgYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "277q3Z1ARkqRfkSkBfo2tJAfDQm6jDU1WwDgm6Df6zEBb6ShfRiWc3tZo2FiApjsppfoUHDuCqVncioBgK7naQYr",
  "key1": "VCbsiVdp8LpJF2ETniavcdnUUue4kKvBaNTfofoVwkPdmsX5ariAF12ruNeMCo56LHn4EwVmFBG5qeg9Lbt4yCv",
  "key2": "5e1hxaRQqb33pUzziWswYTD7jbxzDfNfLesCfu5T5N8GVtHVuWVnUCWnFJHhqWG6hhnpDyJkXfD2GfSFmbWuzXUD",
  "key3": "5LcnUHckWNpd7bE8QFSEyAWHEGhpoDmYKgiyvpp9Z5Cibc17p6YkqqoUFsVxZyWcx57CReEr1JvAQujruFqim4E9",
  "key4": "58zJ3j96P3QEvXhGtupUHMwgaYHGNNksBjQCbVVMNatdX3byyGpHbGBofwbkuvjbboqhTM4ogu8Zt2sdsbT9Do2L",
  "key5": "4X27Bc2Jvbys3LxmeSPvneSBCF7LWDUpQqRAV5d4wQSipQRrYP6AX7FFyjuzso73YNcosWbSft57MALmzcVcF7bL",
  "key6": "52oUV5SWDL7Ro1354ymSgFt3wMuzFgVRxG8Thsq8L36joM9eCGMqBuCm1sCAACnx44XM21daH6QgzamGq4NY6Xbk",
  "key7": "2oq29cUC5joyR1ik5zVFe3DbQQTe3dpJPRAPLR4mDwEpTjRRPyXLx86v47etn73d8vKGDqKsUqzeh9KkpJ9ScRAG",
  "key8": "5amrDzB6vmWPFQz8ZZRuLSHjQ3MvD3Gi46jUYLzR9tutS6o23dKL5uaeiK1XTMVqPkk3dnEZwg31Z9CQVxwuHW57",
  "key9": "58vUhWuiNryLv698PWB9zuaCMBpLBYGs9vLQGrmNW6a7Ti6vf5oKdRgvMd1tUKSLkpPoJZhPkuzdSE5b9VpCZtFV",
  "key10": "FQQaE6uZTdRJSFp7DVZxVmfEb6UtYEiskekHvRyeY2LqHNviNjd28VHfTND9LhynGQgcMFQSJhzw9XsSYGPj9jm",
  "key11": "5DF66GuTpREwYdqcMobyGCATKMihq38VEtSUaaPwV2YFCGQMZ39o7axsG4uRaW4kjCigrcC9QobpvntTeCC3dDbd",
  "key12": "42RSgGEkBtF5jRMZkSLQad983pNwpfux9SnKDU3wKQHw8eoReosQTtA8PZSnXb6bcHUzsj5SVPRFvdAa7PdPtifK",
  "key13": "3CNKYdqj2gbmGb1CWm1muZNKRAtBVwrqmijW9boQyBm4ZDEJr9NjR8EqGSAwHzN3XTnP8Ubsj1mL8CT5WxtZJBv6",
  "key14": "4raxPiBeGAb2vSHUajWFUvWB24Z1s7a4v9Nytr8iWToVvyPxWXoEUZGscURWXpqsZ6JAHvte6jtrFjtXDjYjT7od",
  "key15": "cuZKR2VbveoCEzkv8L64iwJMpTKGKvq52bU18KYzdZPQyqW1e1ytebnN8c83aSK4UGsifsWZkR3XfQZeGkhAa8S",
  "key16": "JDBcnUUrYtUJ8EV2BSeB8Hxez27cEKgq1Z7QBA4XBfCMXVL9TByFBUJ7Sft8yjESyvkfrUXyxS4vTRtFN9gQmXo",
  "key17": "56DBpWe9ci3ZBwLUSVAicYM1E3ndc8CcreEnMkhuK3XjXHGZJwdhyREU2yHB74NUcgss1qFKtwxyWYy72RvH3w3M",
  "key18": "4aVxqj94N3vJPZpkjyBsq2nyn96fjhxYvC8jEPcx3fdViUVNwQ5MCdHiMKZWKfM7KZrZUewbHRJ45MNXr8HAqg4J",
  "key19": "3zb8LQX4A41pPgyT1VhycmjsstFXPYcJTsUxeGquoQrdh4zs1udfBNxijQjQCyE1gmQhD7s7gyi4KQfvN1ocQNQi",
  "key20": "5taV2YJvf3AF6jBYLpzemqqzZSJcpbEheB1dbXrFrq2kbYBe2nyi7yeGdfvdSTSkSfNuuMP6mvPPYpSJ48bqEAUp",
  "key21": "39iAwaQnq597QN4v7RSmK2TwMG6T9A9bfeYTH57CN4UUSYnQa5UHPCVQrpdD385Fo3zT9jTPmPjHKvJGzn5zVaEN",
  "key22": "5xcmgi2MSXEuTGMa5sEygV2mtf7TzHqzC8CCVNb5KSjHP3PRzZLM2rt92rVKQhkSJ7ryz3nu7dEc8QTdVwWJbppb",
  "key23": "Y1MkLtYwyxiwa4XhZpdLox8WY182VJqJuwSzhq1fswbh1WSK9mHo557vD3Z3VRXcTMTgXzPuM3UBTCgFsxhMrhe",
  "key24": "zdvkUZTDaRCAAvx1Danh4rrqBgu2c3DYLUDemo4GUpsegDpfdzLZKwfpJeBkFvnFZSsv2nzPj1LZdEhGnxn73tL",
  "key25": "3DAwukG48CZgwvJTXa6vuenrZE2FE2tHFKqMsegbVJPX9pc4T3bhdpLcCFjspXJv6j5BLr5ShqFtk1aCiatg63UX",
  "key26": "3FpJ4kzJdSNKyc3N9fYKc6HJ2Lymy7zX5siMN4wLDVmc41tg45JV2WwAJ8HVkKg9q2KnAUm9BthtLsPthNhDRprp",
  "key27": "3PzF8yT21u9YXzTs1zYraNdD57GN8fZckMT2Ugqc5Xu751UqS8x6kHMK3XrhmPfy1oJaSAsBaxABVciG6hXgi2EB",
  "key28": "3sbueibUHF3n6ykMnMyJtyNKgPbHhvvP1DvD8fwbMHz46QdBGg4U6fbQcUy5LkiL9mMJhbaevtzTdRjo1xxZP39Y",
  "key29": "3udWXQMcrkVFKmc6gxeBJ2XJerH6uxvCGmJKyVTr5NR3UQ424dUbJpcEJBvCVkM8SM9Z64br9AcSHcDAwuaFXjCh",
  "key30": "4hzWptBbjWc3jLoT1JYKf2PAcLfZZt1w2sFfyTWZ4tZzFPMZEgNCe7pxYqMt4ujZ5RndtvcA2jBr13DHo8z22dRJ",
  "key31": "4ie9A6e4nmY7ZABqindF64p1vM7T2Y6UatR29acvpAU12v9Bafyi1ekc2KB4unqvywe2qkdtdCXDhn85D83gV51o",
  "key32": "pofMRyei3whMMGrRFJfiejLTTeHeWsbzVBE5rMwpPCjkYnoSaWEYe7QhPUP8sXjWzNzbcwwsZE4DFtPmTmuuF5K"
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
