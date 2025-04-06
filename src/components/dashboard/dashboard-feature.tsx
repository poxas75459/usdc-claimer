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
    "3DJKe164r51qtkKUSCr8jkfCj5bW22wi6B1QTWRPPvt7AFPVdFrDf9qQzMoYRwV5rzpJ4b2e7ZD2VL4GadmS87gU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wUog8fJ6ndruj2Zc12e2ZJJ8eK3No7hP5gPuxs7CeG9UpPBnqYvQ9ULyPbj1YDLAoVXk9WAmWF4qoYwePDdBvQU",
  "key1": "KDyyjXCZTb3D62jAur3TjavmRj4ZyUhDYezZS9HZr5eqeA5eiA73FQGP2XptekowbtePhL6jrNjm8TyV7fs8LWj",
  "key2": "ZK3UmV1fdjBZbTGq4tiFfiWt8VA2FFFWyDBZ6eQq2vr6pimZy4UC1Cv47bAKpcmBoydd6VGBPDrrjbaMVxVxZrR",
  "key3": "3gadysjtwdp8RiiDTQdEP4bsn2qezbVtFRA3Az9bHXXCySp1WNNsRKJTCTxYpVDkhqhBt1HJc9ezsqJ7Cn9UFre2",
  "key4": "6WYSPvbc5MWjFp2aRxvFEKJufrQjYbhQi227KAspABTBmCZ7eCAFxDySDghrwHkSPnnNvgLJLLQeHkpPixDquo8",
  "key5": "4JyZAFrxznMAJaACAyhULiNuqY9Ki6VVoD6fSMjzJgXn6jLtAmyDaXuzPyJSV3g2LRE2jGcQpF2Eu2EASmtkkHod",
  "key6": "3fXRQwitSXAKuFT3mywiZYj7818XztTBTMv1TPimXivtX6ysJg85YXWtUETUtBcyejMz2cA2JbDgzYyJwhjpGjck",
  "key7": "3H7nV2gvwgD52ST4jBixB26eEDriH8yycsxcJsqHW4Tv3keRpRTMwcBbcbMNAskAxoQ8waGVkkQMdvUdPsFzkMwv",
  "key8": "53SarwwkuYSbcqBM5Pwsf57J2xfCQH9dcSZcB1XxxKveK8tm6drfKAkQXuzRYjCf4XoF52xD2mFfFLw6rF7G7UT5",
  "key9": "46DHpKFdQ6GVMnT1CE7PhJeB2StFM2EKZpoehVAHfboSZGY9nRjj7CgpZMGooLtNHcrtqREu3kXNziWjN63knexa",
  "key10": "4qs3JZTkc8foGcjpgyapXYsKuyjLx7rdtX6hEbBYoCgNVRgiHvRG9osYyzyRuwpthT2CCvPJMkHUGfqapEtNcoBn",
  "key11": "2UHpYcGtcbnANm9zKAuGmwDLoNMUoRKfkx3mYD8WFG4nLR45uacE34hJrkR1JJH2fqNiVKsYdYrJ7yw1d1PGAKWz",
  "key12": "3DPmcEjVHBkPpTQvYcteHHVEG38AtEsrY5kbbCDBu16r789Gxu3ucJnCNNHEs31QrLofMQnFC2wE7s1DF6hk7grw",
  "key13": "3F53YX6h1MPEHNbtcq8gUNBrEC7Q4jEfbuk5dk5wp8ZpSGvUxXtMJVAdYHuDPQbEPJRbWkVDtLR8oA2FwN2dzrRM",
  "key14": "2tXCGxpZAchk8FmGgekh2srWFMei2FX4dWN7sNn8UGVmMtPWJynnTQj3YJaPNZdKXMkStkbPsnqgmCQvZBLR62og",
  "key15": "CCnLdgb246xCrrr7GxWEHd21dhBFofoLvM2c7kmnpxAJMasCv89NvjqLSuRC5H1tbgyRQ9UiX4qtfcJamz2LAXN",
  "key16": "48h64tE36Vw5hBsz1PuaiQGxBhbNxxVPMjQPQYEohgxs6oWqkHWRx6X4nFz2kxuweFEHugpvEXWJkGcWYqcKmHaD",
  "key17": "2DFz7RFNcQPtcU2w2wNrYMD2P3qSmGpM1sTNVv5wKo98HmuEeZzyAv2XkEEPYxekmwyvAREZtAuw1GThAnzxVtVm",
  "key18": "43WLX6epacZgwG12W5umCm1PZSF1HwNV2sAvDtn5F9bfLqNEUvnHuzjbftgLgMVigLPCpk3APATvSdTRBJxChKmF",
  "key19": "5bQ6Kbm7TvFhxwuBBm1E3gTfnb7HuU2FRgvBD831FPAi5g5AuvPUmHhLP7yxW5RwSb7c3bt43L5NVpeoZbmxbuGu",
  "key20": "4rAutgCppJt9UaQefAUzc6vtQAeK4GbC7v8UA8MXfMmdgxTgLjoY8byUD9HT7S6aj1rBu3ZQ95oVH8X3frC5ujUm",
  "key21": "Lu2wEVW9SUp1Tm3Vv5kgfNRkrJVzg469FFp34PpdLfhiE79Tr2YGRqKtF97wKV7CYRGZCPuXjA9Smvqe6w3NqFE",
  "key22": "Pb3RXmdBas81bNJYThAFaJqGo5riEawQnNPXN8kJ5EuYWJWXDykDDwZ9ydoX4smqzR3Dsyw6K4amV6PWTNvzEKa",
  "key23": "3PNFQEjgSnT3NH1Jao1K1xUnCJBZFFp4vYtoaJwG4WiTGY1hEtRmo2wyhFwbjTseU1dmBoGPu4mLnoPATY6eyzvk",
  "key24": "2arg9PHxVFXMGCZFMi9taupaNWFipLLyEY9g7nLX3rSQFvadECAxkwTcTDndhyJSg3tggJRMFk9xpzn74i1Ppfn1",
  "key25": "VjnT98fqpWJFviKCQp5syjPjcsXZ6sbzCKE1EmKQknrt7dZuCkmBRrWWnyeRmDzmjv1Y3HZNJx2rHC1XvKA43Ap",
  "key26": "9B7B3mFpG2ByMG2e2rdqhTvTPctPLsdYEZR4ufRhYDu8Ap6QzNe7eNe4h223RY1aXtXCT11izFo3iCqpwDe8nBL",
  "key27": "5Xs2cwDtf15qYXn4uoBe5u4iPKp4SQhAd67hdJLKPvCRsJ5tEUQ3jVQSonbjRqzR2a3pRvsD2rZCNAwceX8jmeb3",
  "key28": "2tckNmqd7WNHWoc8d8B1bYZj7mpDh3Em7shK9eyhxH1HTBiTNmxNGvF9mgfBp6afEsv4rPFx43LxrC9qUdGRzyzF",
  "key29": "5A4iFcSdxE2B2mhQNqeoUDxxgWpbffXNXG1C4PSTnrfNaJ1S9NEuqFT658fb5dcYeHRKo5vrDQugBpCYPsGYGA3b",
  "key30": "46YKgGzod7trt7SsSUQSuL4Gs2QorfARXFhNcetM5of7fucpeDVwKR6gBeSv6Lwr2iu2oVf9rXsa12L2e2AwHoCf"
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
