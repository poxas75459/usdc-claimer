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
    "3ZhnNqPrX7QFEZDfQzBqVhWBGHQqZHN68r5dYSu8c4VPTeSuvhDfPKHiWhHNsqHebtVLpTP6SCS1J7GzvNqeLGAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ixo1zb2LhVgEzmcsVLAtpQoKXquYyLH2rTFtiq5R8JFpgL1gyAw9255cKbX47vYiCDCDr7twH9mipatrU1Ahhd",
  "key1": "eE3B28x39juue8ZvNfvnvgaTiydx6jgiVPuWrpWApn2V3yLJMqTp53vk18Pxp7X2zjPfvx4RxwQ6rJPERiFJ6QA",
  "key2": "2oKFngnuPQ8EjcD2TCN1p1dB3NRzNP2LqiXxFi6nFbixQyR4YwHkAxXYiR7cHPZ4Qo3BVBfTG1S8spxBQnns5t5j",
  "key3": "5KJFXV3JvJTuV9LQTpVjXEz8N2Qtr2nsaUKhx2kqxn1Rsmk4dUGbzzZ7fSKZMMKRZ3Y7pnJmDD5Rh44xCiTSBwFR",
  "key4": "2KEVQ1zXEyLXnDNGcWBcVod4MWwFSKMgvp8F9dQtyvcASoeBVaTn7GQBkb4MYDTk7G8uGm5baAeVYmhRJDoj6dH6",
  "key5": "4Z9Qmnk7KzSuDdp2yGAaL6vMYEPuWcBQDZXaZHWrWX2M8pqiwF828SDVM3t1WuNw8FRet2nKxGayrVsq2rWmPNb4",
  "key6": "cwyLpG8SHmWiDCXsujXBKZrRRXtntECrV9DFYHKt6uAWpetW2KJVtGsYbGwWLryDKX6A6RP9Hf1yY2J6iXu346L",
  "key7": "2RXa2E9yfamMKhnF77jEyNXkWKkXXnnWvoxXoc7eD7KtsWgYJnEd6Bnvkjr9RSyum9FyaQnEU25ZSx2RLSMheSTW",
  "key8": "Qpco1e9VfmBGXTvuL8FH2bqePQs7sraEodFLFyjdrh9yUZvd1wr6bRArZ6WECuqVQfoEaHWER9mFCZwpBD8TqY9",
  "key9": "ucWJvf37CyjtJRraVVGt9YMFKaC7zYaAYLuMgfcFtmkQ4FF8w3B8ueMyJrFbDWXN5aBTh8kvTFPwiGxfgpJmKxA",
  "key10": "4LnfK6i3CsASkFNQB8Q86dMEXGy1TY1SKeQAyoeepwXLNqMLP3g6R8dDyt8u5WvGSGN8pDSbUfH5bouZxcMZMvox",
  "key11": "V3fGTPUTPkmkyn6AnekzWmPw1PYbEfQXfeBuTocXZbqBsAGQLTTgu4fVekuV9iBPjqcaezHBhd4oxycZ6hcHtd8",
  "key12": "GscCGJ2dbJKpVUzpqRLBFJ9ZhBqTaaarMfE4N5GMMgbrVzkatM4vW8FwTwRtgMkXZfStAsHc61mpadDSqoPLj1u",
  "key13": "2mTy9sSeBrCSNuoxdDairBJAWhWzjJocaDwFEAk252cyWqviBUXGiBZhSDtK8mFW74AyVtSACbNkZ2ChoCEWgAdW",
  "key14": "4ioE59izNGRPb27fhYTn5KSC8FMZ9XdajX4gpgpC5GfVSKnf9rwANdJ76asLLgM8ss2ZesvZjRF9xrWuwEQwxwbC",
  "key15": "3GHJ8hEnUr9H2JWfkff4G9YynGi95E9gfBN9D4kC1ZNW6vk2AnxV5K6ZQg4Tuvyk6SzHt21odHtHkCx845kVTGbc",
  "key16": "4qmiRo8TWjfxx8qRVCqEmmEzT3hiKQohY8zHigx1Eybq3y1PrcrmRrQa6w4SFtoMLzPXdJY45VemSZQTRAGA997r",
  "key17": "5vSwV8VmNWqe8w8C2LZ5AwZnvEgx9dEPzB54Y776shHkNdyz8SRytELEQo2doz9kUMpDyKcnqVi8UAjpq8xFBnDr",
  "key18": "oBkfbsv8VNwjtH3xJpL9oJG9bMeL5ExnEwurCnVSDYJcr45Lm5ssoMKJs5GVYp8RdgVbkDTgeYBLM23HRbnshdG",
  "key19": "3mWxGxR196bPmgRUn1Gz8oedRzF9MK5T6G8Xj2mXdQN774zX8m6KtaMg6HAARmKGtaakZ1iFCy3wBrQ1hUvAKDNP",
  "key20": "4uu5TK2fqB7cJJUpBUWrgjM8qdhCATVdmiK5YvWhujdD3Ff6PWDUbZXMyA5mvbneg43m94JR6GfPKBfsgfFUGQ7m",
  "key21": "3cNKfNE9BL6oi5FbAkmnK6AerZfj92hpaZR3LU9DxcEEXatG4J5N7RXYGX6Zq1vB6U91p6ckbj8cxXU1uL1Wdv7T",
  "key22": "5W7LCkeUADDHH1e5SyL1tkf9198x8HDd2pgRf754aisJLsowx8Dzk4XZDfugLf88KWSmoLDxTEGrByEH1tjAM3qn",
  "key23": "5zfJ1WbBvV2bhyKbFRJBfDTkxSNGJ4YWVV1n6zBXWaekokqKjvX6B15asfCusGLnoU4bV6NxZqmgC3U4oexhADGZ",
  "key24": "5EdLKarktkH7rqFFoDmPSV546FrZSCKo5F11o8hMptDLaGv57BH3gG4sMrhEXK6DhAwqkkTDLNCuueQcG7nHprug",
  "key25": "4zZzFPTq9o4rr3QzEAm7msttktBYeTeMxQkq7MPcoA1vdSz7NEvQ3LLtumLHfQjH5ezfo51HRLkya6yxPevoi7GV",
  "key26": "5CKqe3gvNzfuLpskpgqtVyortxPcgbKsdBpWTAhDQtJoQbrTRibuFawvqPB1Xkc94FKcnL8udiy4BBYuVfpXDizC",
  "key27": "3TDJEsJeoKJV2WsmCsQzaF7cK3PUzpK8dbRGN7MbXuuE1YUv66D4zKSjZE4fypFk9VSzxXSndtHBNxBjH8QF69Rw",
  "key28": "RJgpNgMF9GUCaxfx9cPzquHTcDE2b9BepSVnspBppjz9BXj4eYH1b8bocvpwKexcqNVEqZU9JBDfW8r62f4Mah9",
  "key29": "svCyJxmLJ3398zooc1mxAPJsLexcJu6BqLt959V87YUhDomGi3FyaE4tQ3w6qe8xvLBh3FSXLCDuCSg9GTgtB4t",
  "key30": "5gYVJUjZsMn7ZEMZAakJRFAYyVGP2HowwCYTgJF7iMVefYgq68KGAxs2BrK7HoQnbhBq9H8hbNq8GNHoLNiFT5H5",
  "key31": "3XXfDh4m34WUVZUcEZXvogVypdBEaqkRWT2D8Xj1XNyERvp4q8ACVkwCBFGHpttdrH62UGnBFWThSw79MBV7Bidm",
  "key32": "2P7qUbbRp4H3Y55rByr1szgqHapvS2vx9yNDvYqkDogD81TZjLz7sh4kJwzeyaPExS2TVw156pZjAUZ6tZtNbZd3",
  "key33": "3gNPGDpzCLTAtgJeUP3sTBBMETu1oByTmcy8Uon5BqCjen9E9Ck8NqBJExwjo9EZGUERetzmEysqCvRyRfeaeQzd",
  "key34": "e4X6kznegr8vNXd9S3hqkf6y2kBRiA2s9JNQMrbZQeY1Biuu37RwJ1KysF8M1m1VzdXZzWEjM7LxNSEiPc2aMn3",
  "key35": "7p5W3J46PRx89MGYMUkb9p1vKtStFWCtbTeorYzcKuk68PhbCoseRuuWkXhtkgBi4i79hYgDXmxuM49uY7jwDFk",
  "key36": "379QdCoanCY3TN7N2yza6uZ7fzuBd2DxH14AHbHhcEbZKEBBSwXoKRGoEAShwySKm8qrezZhSbkhifT1rSXCB8iD",
  "key37": "5CvdNKyURTMMfAbYVZdhRpwePjdjWuQfyMPyUP7CsZUgnjbY18mvptHXe6g383nHMWFRQrhRL8EW5BNB7PZrtBZF",
  "key38": "3KQS9Mf92qpAuiTWnVUSfmhaGEFrTuB8VHEcmDFnHxRt9Trta7L8ue6kNMnQHzvcYqK88Lu2AuiPB9VcTJgB17HF",
  "key39": "JRVCrwCTHQTx1USv4YqW6uFKNjk2jXTQLkFkBqpgAABrRU6ungXLDSK7Xwb7AhauGHnU85VZ4SoZCbMJkNf5sw1",
  "key40": "2SKVs97yPRUVA4YqWQXCAMibxCgX4X4mDZ6KRnP1owbEoa8e13GaUM89sPgeMur1tWEk1TBuRazTeT1eTgpgKdbz",
  "key41": "5jD99pQwhtUy5cE53v1tcdDJutrXzTGJ6WKrcTxCce7xhj69mqVXx7SRsHJ3FHbk1q7XkwEUWdR4ncwMJPYqpmHa",
  "key42": "27VeGuknatBRfKQTc7M9bp9YRmVKweqwg7WmYqo9A1JLGG3VM79R2RX1M7DF5MMQPd84AXYwnGsv72LAcxRjj942",
  "key43": "21yt7E8jEq7Ep4K8CrAYDVckAD1kYvmymiWZBiLab6XDfrx2Ev3aY22DKMrTFBx7dS5F9giHD1LBccKBuukteTPH"
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
