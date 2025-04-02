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
    "344YG8hgy54uS3NNWXDPCxzFypuQM5E5KchocuTGVdcHHJts1gYep9ecbfo6X3AsykUuN3iWuj97SWJH7UGnMtde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fSBctgBtQYvzRF5RrzX7aXnBTWNADT3c6DZjRCEzNq9QbBV8ZASinvvSVB9492scQ9gqGKNr8Am3jGbwQxxMeex",
  "key1": "52qaquueocEwWheXPSYUQzMXxDMTuoZ2rYxirybQRuiBT7MaM7NYS2tLXCnguM1fk6YiagKkSG9nHvKFnp5as9rp",
  "key2": "3tWhvV4AYS1xTGX1ngZgTWHyd2ePScLw4bKEK6ZK4RQtDiFQQYUU4SvwiK5SUm6NZaoGzAJ2a3uDXtV5uj6gSZuv",
  "key3": "2xPosYqh6bFHfVHHxLRep6g1McNMsV5DaX8K9B49jDroGTL747t8rMvqCdqZ4gc65qk3pArhXxrQAeZb5DTqdvbu",
  "key4": "5zaYZVS3Lr6GYcCE4bXCNfHTM5Wq3Mx8mpXxUdMaNYaU6XGR9dbyrZUZ71e1EAFAmH8aUSXbGFmb8N5kRMheQx2p",
  "key5": "23YsEt8Gb87YvBtRKYzVqHuV48tjix5ZiCZr9vDZbkNEyUFNJwJ4bUfaU1rhcDnZiffaFtP8Zg7d88FeVuk19vqv",
  "key6": "G58tdBMhooq8q8AiLqpMGLCZDnt3PD8BH9WdxD83VFrbXYugLhJebK1Ci64T7AqhLn77HQ5hrPH7k8tqkeKWhhm",
  "key7": "ndkc4Y6zGmq5S7AXPYV6RNtWo9hc5e4xTWszbrETiDnniDiWLmUeng26PuMtYeMuv7mnoBEFL9TXuDH8VnvaiSF",
  "key8": "4zpk8RTkSnwGX3CmUJntQCmb38eizz7KshXdJ6Mta8fArkdmCfNw5QikHj99AbZjLudazxnDDX952PZZ3fdxB1Fp",
  "key9": "2nrCkbWULZPEznS7BqbJHV9e7DMJX7T6R4MowSLYKXYBQuiJm6J1RWR4XD25WQGCmKYb3oxyDDMDZJFKp37pmyGb",
  "key10": "3m4xhd22wBqDg1aHduKT1AqCWDNq1HXacxzFgQJRjxoXHaWsUYVKGEfCi7YCy8cCsJL3tWZ2tqMzEfBifPr9T1CF",
  "key11": "4Z8nAQvm3JBwsPomRUxVDZmM6RL1sQPmRUyuK4y6w86YGiDFSmSwSySrABBT28fHY9vxCsQagpwcXSmeb9cnKSsZ",
  "key12": "5qnkUYhVKViSG1AVf8g7rKVzBj8XXg2BbwumFntAZ3xbZKimCKXABUGJg8igC9xqbGNdMzDpT6z7PDd6QLYhiXUT",
  "key13": "2usuu4VvUqkq4x8hXima9vhVc1t9QXU4ZsPKmrwEmxjbSEEtTF3AQ26fY5mEBqnpcav7XX9ZxKMFjiWCR5AsSVmp",
  "key14": "2iqSruXLnZNxp5XQ3ZvGGc5gvDV1KTcn3qNE8ZU3eKXKXUAW6XfKfuP113UiFUwFJNacLdhJBrzyNvtmEBidwkFZ",
  "key15": "5Tu1CkPvoEaVSqFzgdRQL8xMFMG84UqnEZEBQZtGuoMtfdjy65w3zLuTK3wAmkZ7irSa8eDTVrTT75Pkm2B1nubP",
  "key16": "4X6Jxyp4jeHFrhARdvDeou2R3iyfEhjpwNxPRT5TfiHZMRJ36H3yKAm9mdtDRaNJCLKP2MgfmYRQYRhkH9CgX2rj",
  "key17": "4YFkBYa9b9ZptBmNQDFWsKCL6QhGgLwVzx11b8pkxkX3TmyuAhkCJkBuDNsDzoXWAT1dqzrRTZBPPFrbBnyuFr42",
  "key18": "4RnqagogMHteNkUtgqjdGxHrVhyxk9JXpL7Bpo8K6X32GSL5rmF9SbBtbqfV8rcej33KURR4VNfasJYRP8D5k7Ux",
  "key19": "4EaMToWAs1Sk7omvLRuwVi9QvMJdb6DHPeRZERxDe8gXdrqY9iUGzuBnuM4EYV2aY4MmJTpwHtkbrrzrQxVRYXbf",
  "key20": "41mbQWeDXCwPHHQ4DGFHmmzXEGVEs2XyVgapNfAEatoe6angfUuQTdZAVxt81TT2eSuA1TV7jeHU99VLZYVQNXuj",
  "key21": "51ag1vQyYwjLXje7SX3zqwB8WP3cyMfTrYUAyZiSn2iDhBCVZoadFyNeiXxxJqdhsMq3ervvp3H6DiDx6yoLmpo4",
  "key22": "2Hcq7RG7o79Giv4eYKJ1s7ngNGtPxJUUkqbqYoq41sDv2GUX9QfboY4JTxL1G1oAbpVJHtQahy2NSeXyNgfArRxH",
  "key23": "Qq3qQR514z9BaoTNB8pT313gJC691GD2F496unqcx7WmarJ6rKDunsGdRxPhKcR38jrkEdjrei4G14WLsaaWwRm",
  "key24": "2JH32iyJBqBaGBFaGM6rMSoPXP3ZhZW6EXLoFf4g8JR6cexfQxjcfpjDbRQZ7tEc66oDqy8xV7nJsZeYFfV7kMW6",
  "key25": "h7a8DAp5s5vjj1i9QsCgNuhes2fxvuzy1asL3eAvGmvTDAShTqF7p7wbQXduFEFuTLbypLWa2L5kzc3nf1hnovF",
  "key26": "213FyGK7ZmdQUYgwQN5Df5abWbF9wfjzcxdbYHVZAHJZ9Umzsxhdo1Kz5LEU527mS1Az4tVN6ebWoCW1EXRPb1Q9",
  "key27": "5ATByVyiNHVn2xGFPHqBHppvQKFBhxmZUzWxBjDKs4HSZoEgJzqwu6iVtZRcVqQbbBXRCs2KHwTxczHZU8t5CXBP",
  "key28": "2JmFXLMcnbaR6DsqqNYkKx58weSfxDF22Vce6vGrFJRt3aD9E5ydkaM1YkhJ7KqNDkAtfd5WzHPjt2s414fCrxvK",
  "key29": "5MSzgtL7Jrzj51AcDeHbZECJ74n2cxayEZJDqFG88xn617dp9qSM48Lw75GrfBLLzRkvH5y6MR5MJBY417KqVMVK",
  "key30": "4JUAgDdUtjYTwid2jKduPrnppHZx6FYoNzA2X4HFn5LzFcSFw4APdDgJ7ZbpJCXKNqcA2hnarxe8pJ8jGYDTfP1X",
  "key31": "2HU4ohMwEZ6VEzQRCLpNJjwDY4jigtvpJwwL6ki7WGcTA95dmSZTdKCvNUyiKCDTiqdKi9vdB4tXkNtffkcTBfYG",
  "key32": "2VUPcQabYoptQUEWTjrtWJg7EGXWMwPNVE4r3udutfFsNGKPMbyZdcQrLuZ1rNykyRFQuS7z8Cz9cqMzYpFB1oYp",
  "key33": "5DugdeF4Usa3Yj5sD6MztkkvwCi6GfMDxnWCDebLryQ9fHuFmhb3cifCxSs2DkizVRp1hkzKPmWhtmANC2nxgkjN"
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
