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
    "5AniVVbxgoiNdnNYzLrGsvcoQYA8KwYpTmyiSny96U5orKHxKVh2MKLNaRS8zLhfJ36eUvtM3mob9p87zTrzZ79b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FNrXSKL4pFnKM1DPkXFw4Vck17mHgNMhGM4n7K4uxsXN8UXMMhNg6vYksShAFKTZ461bAkuJeyXcCK9JNozsDtR",
  "key1": "37hzcun9tmsE8QZAxi6DvyjyYcPSouWgg2NzE6ncoXdGVNHbjH5wgbibcJG2zshFybPT6ccpG1H5THnuiFHjVJNg",
  "key2": "54WmG14tXcbaDwBfgzKVU8LYVWx8Lx95Gaj38M8NDTpgNfFz7wctCaxayYhd6XP4LBs34vDm7i1EGNT61bN4hPNz",
  "key3": "3TuEu3fpxsmsK5wr8yaMs1T4xGMCpLrZL24VBgV6iex4wic16eaEqtCfyENRSxExwbZnJMc5QB9DkqsV91yc9BLc",
  "key4": "52HdFAkSgyfKTzu1Gf9SqZUf7y8uHdAZzAoxMcWqEo8YDbQFL3v6EK6mwkahC3tkujWGQdzKC76dcJNW5zARei2q",
  "key5": "5mdQT2f5gNrEYEFptB5eraAqY4GoJ4LSqfLU4FTU7q4q9HgVuUApQjBGqvpqaUKTDY6XRiWRvFZk3YokVDkXQcSs",
  "key6": "5L7FmgDVDTF9ziSQJtbtriQSEaCnv313GY825KJMsWcPzS59ez837nreCxBLFEmevzh3PLtdGkBrHR2N1u4hkrnD",
  "key7": "4sLR3p2NxkTP9TAXJsGssKUFshckB1NJh7aW8fiQzLqYZGjdiHJpq4hZpu6ZUKxuhwxF6CVDSP5H57NHXeUH3Ygc",
  "key8": "4drr6QpAECub7bqNH7xrG19k2xq7Y9CtzkTbEFqdNtovr5qn7g2DQPz6pBynrzWf6vQeT2L54Q2KaVeTVTqNb9bP",
  "key9": "4515BEn4AZrBBhNQnuengKKSuAy4Q3TtFTC7So8h69a3WV9HWnWCDpJwwLyiVjPioEgNzB35Xkkkft7YcsQNNcar",
  "key10": "3CyY6L9k5CZ2KuryG7LBa2Jho5FV23SdyZsSDKKAqgkRCLTHvK2Nv7pyaQ2iEtmPJgoKozKQudRUsmPCxQJxW7eL",
  "key11": "vy4JYmAyA1aRtdiQz9kecR38Qu4cpDSJ165zfq6rE2ihZ9AxKUbUv4ZhGFB6qwSfwbFfJBPJnxGHkYJBZiVw6hz",
  "key12": "ko5vsxbYmaZWKhoprM8519YVBc2FaAPoJK58MBJGJV6cAn53ZnaUjGCd1aX4wbg1pY9cakm3o3bvEkbquRP2Ahf",
  "key13": "5kZXWB8YMnC5TKVtwCMw5FY7GU8TT8bTAtp7a5wwXBHPP4yUbjgVgmbFVhfrtGqRgRUnKYcBndWzE2wzB6EqSio9",
  "key14": "3o7WdiTXvgkCKaZNNXV4gRPS5PrNTk9UUMoqmTUMoXSRyPmMbNGtJMRw5VWgx7eeezZRLC7t9enKTqd3XDafLn4d",
  "key15": "3xLBkgnUtLVZ1pAt6PkRt8daozVaJxsQbR4JGVNV1DzXLorkiY2nRRXWUYRnD9rtfb7sMR1dUm7dmNPLtUGnuBxH",
  "key16": "yVtR96GHyP2znhtE8jyS9Wy9QwTpWEKkWpJpynucBSmygy32hnP2q3t9gt5H5icVBxDVsvQxK6U6N3ZCH2kscFk",
  "key17": "wNyK7CgTzDP8GabtDw3WNPS8wu97FNjoTfE5VnGxZcPJL5AceomNYwic6Ftz7j826bDEzjSLPvcb32qGdSxuasC",
  "key18": "4kkaugKtp3QSDNuCv1HCtvW7NG28XxuQqm9eQbptifMshHVuagaNJritc5BcRxnJ8fANb4QL6BE9ZJrrwx4Sv1kD",
  "key19": "2XfHa9EtBvdTYJqqtXe1qFgAc4eZpguECJnUK3E8HH6MYHpHpPFZn1hHWxkkeKjy8uFD2j37XM2qPuEHHnHAGvY2",
  "key20": "6UbH5STQ3Q1s1fBfym3zZBJZBHnVn2ESadaD73YApCYXbsAeYdnZ5tmLFX1Hvt5VqfvgxHn8PKbYVxJwu2sxA2i",
  "key21": "5tXVbX2Mds9mGBz6kbJjSRWsoBLsNaQdpUbnXEo1JvZYsQjsrxvEZmr4KVqtEpVpQ8eR9NMghGmvZRHrVs41MfRJ",
  "key22": "5pWx14LAjr1Ud9a1fo97pEFg7HgMYND2mPpYo2u1w4ZRBGXmbtEyHcBhhKXgYUcq3Zp3zMCuWgqFce8bGTzuYvVg",
  "key23": "29p3M6suwS6Gtqpv6ACzjfV1m2S7dASsBRu52Cx3AEvpfX22aqsMHRWNYfrD1mtgLr2vNKZDfsms14BrKhc6ycoK",
  "key24": "2L7SGeDSPcGaDYyioTLWnKZpdHjY3m1uN4cCfpoBBevJPAwjftXfxosn7Hw1oy1LrpFV61E6JcBiEoHym1GqaDJM",
  "key25": "3JpSMuQpaz5cw1vCnm1o3mknChY7A3jxdSGVnwSVpkHnXopjpfZwkH18F4t9Z7YhDQXaaVbELoZoHDDh4ANf8Jc6",
  "key26": "L23fRM2AG8r2uGE7g8TKijoqRoPuLEwdhGAfDzqG1GSLyPgDKBF9Kp9ME8GGGk4f1gdBx3Wep8dkHYwJQ5QYatP"
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
