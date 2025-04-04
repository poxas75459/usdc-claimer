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
    "4hdsv4iuHeDBHpgtUUHKUi2rzkTbxJQUS6mBfJHW6sxGe91DCQDW4EszbJ6Xy2VAWxwnCuF4uFjGrGVnmLsTpcfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J7AJTToHFGmQTmM4fWUSPWefyEWauq6D3qpmzEsDoMQwggaEPGy3b3HZUpGQT88XzFRhEBp1uga2Q2hZm36dK5z",
  "key1": "2J3srP6iT47fBgF9G38icNps3mQV131iJbJexZG7HZVnfdyPqoy8RWVyQ9iuUAUEZdhootny6bTyjthJXgGcxiNJ",
  "key2": "4SywVDz6Cw6NY1dBSvvXoEA8kSBc559oZkiKGLfu6wSK9FnEdx5jP611z7gdKCzh3jKPVw7uafVzwdcoSTGURwT5",
  "key3": "nmaTihHFhsfPihD2fGDYCQUHZXpkrw4tKmbtJBMu3zErNvV4A5obDrFeqKkURGzs1ziz4ZkaaNmmC8MY3ZdNHR6",
  "key4": "3TEh5jS7iHx9UPFkEF2BPYxL6m3pqdnPsoR2Wnrunc2iPq9BC9WLDeoXVX9L4NNUPDhSotbKSGQ2C9i52zarhMaR",
  "key5": "1HQZ9ZPpsR5x15EJay8XuMjnCocjxKxyyVZNME1t5YdYUmWFc7gPdA8S2Lc2FLzcYFZWnugGAApBENwErFhTdDX",
  "key6": "fv28ruLE9CFrK32aM4R4wcKvgejpE6mMd9hHdFfb7UBbvaEDZMtF4SVrd6EgdWucFRPV5yNw1F2cHHFDPkgChxC",
  "key7": "3tz1yf6ocNtNDHddbtL1gbwzJub9DRxoi4xH4wSYJDa8dwQ44SyDLrtTdMyCGzzGt8mHq1uVGggXU8uodvxKNfUg",
  "key8": "2cGs89BVNWGoW7zQ5svk73qJZkabPJ6SppJu7L1t96nqkSkAV2QJn32xCRGUicmLUurMDuBk8x8GBnN7Jy2uEoz",
  "key9": "38Hy2GfDnsA6jiC8PX7svDb1qBw45Rz3XHh5off61Eip9raSs2EkR3VZAyJA2eEf2BYskMkJiutpTGnTwFGE2f9F",
  "key10": "4qzgp3JL34LwFfL8riEctZebXASngAr33J1nk2YW65LJi5doDJSgSWaXoARBmryeUchiRpfiMgVtwbrgGsSefo59",
  "key11": "5DwrPH2dDE4Z6m1PNXVrkwTHcGLXiZrsqcHsWEpV3EywfbwhbySSNqQkLnk8C3oa1miazYVUERnqkfCpr1kA5Cj6",
  "key12": "53tgWLzfvNNJfNYBpyMbbtbYxUaQrXhB4pStafxCozGVmUNupTc3JnFA7EkoBfuUHBUZa6811sqwhdKQCR8QDwvB",
  "key13": "4Envtskx2wEXB2CV7dhixgNNe6MADdYgSUafN32vvVnQc2DHR4fyuYDvFb8jci29k6xZvTQb6aAAfGkjyidUTMTr",
  "key14": "3uQNbkeFpk7s2s4LRfvZCyg1wTZPpvghx6o8RxQbUFAin8tLe1GMgczUtHNp681tdNQNECPpMnVdMBr1bE4dd7wR",
  "key15": "4QKhnErPtdeh1oMRr6waM4GmmREgfWbWLN8AGwy3wDqCVNRPJMVK5mf2pQuJW3FG1ciTCMEd3MbkcxRp1JxsSqZ8",
  "key16": "4mBVD6rFdvC5WR6iiMSjmLoadjTxW2Wz2ApAyUwTcQWkbNDGChEAyhnY4UcrCv93pLPxMXD7REahH5p8HAqZbMKW",
  "key17": "41ZEPrZNmS4KP42e2YLEv7QGxVTLAJHAFsrUqyLh96PuU1Ymy69aA7rBesVKxSd8zyUoAvKKXEcZbWvasG8DH2HX",
  "key18": "2ACck1AJAZrZhja9Y3TSy4jnfYDCT6sPq52pFHXv2JR9tAhER7C5Drn1gCCLJwerayiaArbGsPQpWXBwTued9XGT",
  "key19": "kztgLXUv8fKpJymsG4TYUzNkAbZ2HqVdEewv4KRoM9sPphNBTxLyR4VGNdpnpGUVvKqkpix2bf73We5XEMeYuzE",
  "key20": "PXiEkHmiB7HVnA5WUGTK8HPBtxZKkoLvPZDQ9bfhmhgunHCLUej6Wgb9PWGtmX7djzWsGM6dvn5j4MbnTqgYj9e",
  "key21": "23AqCzHjPHD4buboecUCex4MiGCmVftozp1mS4zrypinqjcKqgHnjjSqj4iWf7aSYMEQkye1GX2ufZrQmRVB1eNk",
  "key22": "SxUZ62MyYfd6g3XZ6E5fDKYJh4Q6bbFcCKarDsrs1oHYnvoyRBDnVQyWkosdJuZcwzt7h9Wdgd2gwnc8SL8XsXG",
  "key23": "48zpPXGmKV9scquFm815ZDcPBTQJQv9khXmv6oKJ4QFaYnRQWSuGpqghkHsT4MT555reVkdPTp7aeR5kASWLCoKC",
  "key24": "3mFDMM9EoXBRXrgS84GYD3uGns9uTWRSMXfzCnCkH6TDjLM6oRQpVQzLQwWvKBVQRGinGzeh2XTAFML3vtzN4nQ9",
  "key25": "4E5HhiQ96YmuPzzEnsJaQNBRff19Rw3R5N6sHLSFkCHE2pgZLHVNPgVpbXD6zdbEKTmWBU4aU4T7q9hAFf3LQSdo",
  "key26": "2EDBvq9a9EhKwFJRrr4uHYYtGqmpbqayeUyKg4C39HNaNSfaaProQYVbtFvFe79RkhCY5wPoTuCxN5yUC1bxsSy2",
  "key27": "3KZ1ek9D3x8zmdUiikeRnb4zWryYugBSKfLXNLyFGSSATopeozMDP1xtkdUzqzK3t7hdsoWgy8zkX45GE8759vZV",
  "key28": "5vsJYQUrKSBng81LqZhJE3km2wPvZoet77gsTkhtzQD3bvn93TMgZ4KixFAK6rwCXXBXuaywApvrnaNdQVaaPyk7",
  "key29": "3sVnAbLFRUZXsXgNjqXQzSQY4tRFTHcYiqCzSsG5YH8b17BXdRP5FptSudF5xd2Nsyajx4g7pzRPnhKzAJ7V2evb",
  "key30": "5CQCvUCVGNicj3ehzUscNJ6Mi1tYV92LVFxzwG1WQyGLR1ZFCR1VpmeJ9Yka4nPdskCp6GBX4MunA54ShSsBRpcu",
  "key31": "5DUSA4zbLnjRxfvdUoEmwFmJ8y3WXGFu3HCET7w6cXtFbSWax5aJ8kCdDczFVP3P3oytTVViD6BLQ1yTEehxB7y",
  "key32": "3D7qQ448Py8snd9tB6BVcy1YMuoSgTMEBXtAE1g2PJMt5iMk5v6BuZgqkfpAwQxd5BNaKNrvQwZj5X398nim3n1N",
  "key33": "3iFJfLvjGFrLoAR7jiPYavv7n8ukZjaBBZhHBxAjZWMdvP3Rn4YBWaNPnhDPWDvkvviYiBbwQbZaEQSUS9uXzhFq"
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
