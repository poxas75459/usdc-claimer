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
    "5s7bsYiHYC9HjciL6pGvJKmT9ZeitmirqkUpAP1jhKo25hzq7kGgzgyHPezaJoPLAFpyY2fUJT2xxwUhfebMW8R4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t3fVZViVYsN4SDoeNrRwp9Y4WCKTp7mbQubL5wMvc5D9pz4ch5JzcVLKSAjjCp21Q9zSvqH9hNhz9X4oo9up5ZD",
  "key1": "58NuikyCdNyG2AA2tt6D8MjGaY72RaZnshVo2tpmzGAyparLbhjG4ZwCBWoRp3htMPP6u5dEmrsDUR7xkyXGFaDC",
  "key2": "4Q6M1vzWfSiG5aNWj9xPjyvVDXioGdKWUYwj7hWcHH4sjpEuFRLUHV15WCmNNDEZvCfvBMqRSDc5eJnfv4f84bJi",
  "key3": "gwdCK1gADm4jk4tm3Ao5PuYcYDJJZN2fGRyo1ZrTWhJ3uLQV1YqJkEcQ24y2hbhQ3cUb4NaChE6bcHpPqophSJU",
  "key4": "5Fw2Y8pC44aunfbJV1DZDmUX8WmjYpVZV2VqfAHHPnAK76yusqJk3BX7DP36Cr4s32YE5Q8E1o45T5HpLyNjoNKL",
  "key5": "9QaoBqUYPQDB6jBdaJw1aivRsqUS2kB7D7FSajMqkmCVr9aXikWifNT5mZrGcRYFx9J99covp9ncgE83BmNMZeb",
  "key6": "2tjeKm8cunY2x88BDhfTeuDXLD9K5Z3bZkTthj1Q3XPXwgZdPoNCXmdAGcSYfpw6Mq5G7xFVQng8gi9TpWemzLLv",
  "key7": "4cP24s6eNN4HGBAARaxnRDUwp5ytDGpr3m2ZvzLrzW21gbyQbykSMbnZVHm2nqnQ2shd9zyhPKs43y7iheDf1Cjb",
  "key8": "4Sw3TgejtnZRVZaon4bQ9YUVVzZKbr1pziim55bn8QUGhzkzUGGSpHn5P6cmcrtAJkQXjU6o4x9ZwyqC1WfvBA6e",
  "key9": "2qg9rH77gNY7T49iwhS1MVUTjdrrLEiC5EnDXj9SFJiWf1xrTdogRAoAK4Ynyoh3paX3enmYLFe1WxT1nwiXVr5d",
  "key10": "3UGsYvLj7MRqEF65XYRcD8RKqMaMJhKYCN4hZVXrtKaHgYtBC4kS5ueoMWdoMu1yJfekCvTxCUurwTAzKEpdFEJe",
  "key11": "gNzp35VYHwt49wSdAGX8kTi25iXgUxbqbgB1L5Npk5qwwQAPYLhHitiuEWVuK9r2Z1fs8RN6c5jzmCQsxrE843W",
  "key12": "4R74FXehQDiRMqgA3LX3mReEFidkTMCiU6ReK5D6BnHMy1Sw2DcahxiiUrd1wqyfYzS4EV7VkX6M9qojLopHWqhv",
  "key13": "2LhEsrtGvPCSF4GZedPQRnPRf1YrccoMEp8B4e68dDw1CbEyCZR4kWBAn4F9rXULZcrnrtMip7qMrKhcH7othsmg",
  "key14": "2ukSvn16QfyF5SYiE8yoWCEjhZ7Jz2MZH2zvzguPtryu3xjvh8b4ivK5UxLfBjz5xYMV4L62dMqS4wdcPdiQXsQs",
  "key15": "5zZkaYYPgFVEFJgBEGp6Me69i26GDKfKkN6ASvS78oLw8QDQsP67aByApa57xiUad79YGncvku1LU8bsWTL68zk9",
  "key16": "4MStkWdoNPUiybiyjvxmfzWmHkEm7okFmcLN8egSEqXxpnizAtCwRzmU4Fa9s8rWYRwif2vA1VYXRcHNofKavnLT",
  "key17": "eeEafXNHsq54mRhxyDDPUo9XagXas56ZBTYVmwjtk4Gz3hBuLQzuNrxNpeHcNoY8R9hTU9n44uppXFRfkcAkQPd",
  "key18": "35YZPU1gACMby5nMH7PAuEPwHzv7DQhCae3rLHfmipD1cLq4njmBnrF5KrVrSeDGnfQTqYRKV76LpcvrZThJgFWs",
  "key19": "U1WZsPZBVNX1ViSSoNs1Peq38h8HKw59aHT3YGFi1EjDExPZ2atwNvC4Kh36Zwun1V8VcbeQ7JxGGBxmooYZF17",
  "key20": "eqtwSVjrxWpRNYU31Az3xQ8Z4Bxez8xCCN6foohEpNfqbHC7Bt1ekMHCB6knqBPxmQKuEvE3X3WvPQd93BKiYqi",
  "key21": "4cTSHmCfkdJDTZJKRKX1cVyF2otWukyEoowLzz9bRFZc1SGcepYmGhgvGYMEvXHYghW5vhd6wxLr3HmDVWhyQbiK",
  "key22": "3KCcztzBz3Hvf4ZBfp26V4BefpSXJ1cXT6tuhKyv21ZdtwEhsynNttuon1FLQAcfhyMLHdBj9QRoXWJiAhaEBo6D",
  "key23": "4WqcVYQaMxUGJ2CL9ByEFeFuHYDaE7QehJUmJUDi4J1QvD2Wb6bcbD9wZ72u3S9XewJ9nZU3jPXmJEm2CUnu2P2p",
  "key24": "SRgodhzQfy5vnTjNFifMje3eVEssFeimfqn3nmApcnpzfaPUXvKUp5S5vch55kfazMzxQphQ1krM6tNxes5aV3x",
  "key25": "4AUWVnfpMZYomiW5eLKoqorGHFGnVh64ckNvUsjqg8ifnyACu1nNEtfBChfsK3tMafdLY11C1kuaGtcFbg2vDbkK",
  "key26": "2bjG8GGXb9sj5R4XCQxrjqcCFUKudhaAZpZuKGs7vB2mngZiQppwEJixut7VoUPb47axrJhuMpSFYTqBqiLtAwNK",
  "key27": "5SCLdG1obrbo5vGWQsS6XnUiuEX6wWpZP9ncawuZempqM4TNU5kdb912D3CNrZ74cNEQDifPhrgApZ4tEqZeaXDE"
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
