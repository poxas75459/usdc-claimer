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
    "33wcDviyriamTq6Np5dFYmE3GrHGf5N5N8A5wB36wUjaJsP2a3379amZkKpwBvXu3PNEva8qusSuxo12qadobjRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F8qYYHHxMLAvjRNTcX66ZuNopYr9qyVRBC5pDUMasg3oEUqXWUziEGhwVM3aHSYnNoNqutGXbwzWZNx6PiX4qYy",
  "key1": "4Lx5nm1BnhE1zc4efCCCVu2ng8c36jKbdQiEMox3jaR93eSokk41vHptPKKCTLkrTe2BaqGGuHibWLdwVLHhAGSX",
  "key2": "5QzaTUN9kGrzHwJi2LNDHrd8bwYofJWLWc4s1Gc4HcpDpcXuzYbp8gmnK2xa61uj9o7s8WL6RL45yaSgR9GPXJeH",
  "key3": "5U9XJoAHL6RfG4TyP9YhDACte4JV2Pjkkqkj74ocjwydyz577MBbhP9xjpQCpBkfPLVLHuUoCGGFur5Rq7bwLEsW",
  "key4": "41bw2tBus8wFkqVq694rFgjtjMAbCeyzwCzVAXAC5rKnwdy2957Lf16Awd7J6ggy8AxJfg2TuMkD94f9utsn8KNy",
  "key5": "5oBSydFzyyCQBGTQZPpTM1rC7qpUCj9y7ov8XfNhvvdkXnqS4mG1uRePb1iBLDrCeBqCSPSzQueooCFeTjX3JEXi",
  "key6": "3GShPqabuCguGvwwhpv6QnzN4ghejRBUFrDnywYo16hwY6ZqJLcAD4GofdGhmE3QPaZVPKyYTn6c25bav7riZFk5",
  "key7": "3vx156x8pStAjRizFQLXJY8MeLfVpBGFdtqrYhzX2fDvG27etvY5qjatbbMhwMBmJgQJZyEtDkNHm7nLZj8qe1ji",
  "key8": "5or2GzYMqeA9fi9QzT9Hi58Q2CQNFdxPM1A7DdPz4N1NwUdpb9PN5BsDbsAT8sHkKvWS96qV4e3aTupJo4qXCR4X",
  "key9": "2WEHMfqxhteuVE5zTdqR1XGohKgzkJyqjTUk6hMxgQbgNrghXeGTejZD12z4TB7Wz7Tibvvr2XYL1mM9BWqRLd5v",
  "key10": "2ASspR1eQaREEqzf9m24GhU9wthcQsk4aXzeSagJ4wJRnYPEiwUKCga38xAgteqk3yxDADTk2c7j3Rwktdn7BG2i",
  "key11": "2hVJ9RG5iHDiHtLT3otgi8Ljfx4qcVXXqjNeGAwrEYSk4EGbzmwhHEhGAauF4DixqdpXPA4BohRL8r38caYFQHrw",
  "key12": "4AGec1jSmca8afWwnujRMyFQZv3Ut9HixQ7Cqds2gtAgvtQ3bhr71jv2Pt2FDNZLEVRdg8RdLUvA7r8wxBR6QHGa",
  "key13": "3HTqb7yEc6uzjUBoXG859NxqE2XGhbdafkGYtKrSMP5P6rLLDtDvUdca4xBZduoRZC4ToRWYjASVskgbcRKpSxcB",
  "key14": "4aX4ADBxTHmvKJyf7KAAtS5YtavQmj3sh1UkY3eEaucUGKKuSTb5eFeC29989QKecmFj5PxRyLMgP95yE6TkY1JC",
  "key15": "4trJmQKnG6YJSUSYWjFudvBxUwLRJYfpSrKsQAi8MBxLon9AytD2udWs6iGKMfq2hDHS2gXKYwYc7niyYg6f8Cvm",
  "key16": "5kNHP7me2272pjRM7TDuGEJgqhRkjBtXw4CzAoYLpziozGexXKEZNFZBudqdd9nPap7zNir347P6cv5oixnUTczN",
  "key17": "3rWdEDhPfvtMiWRFhJdvjkWRaqUPrHvJkBhKzc3ZLjrjYP7eTf3QZtTgx5pp6hDoNy2xVx6Rx7HRbt8hmoM859CY",
  "key18": "2Jvotp78aPCiCmP24fX5yCb6fwQ5kyoADjygYi4BrjK23cMv18fLZ5nqnUAY8W8VgN44VYBY1c8qvLUUPEhMnBc9",
  "key19": "tdXGEF2N7PBbBt3fMwMWRMPSw81eSysfyRJyEj6iaiMpuxDkXcbtjf6V3VCMvjtsnNj5eP4vnagaKGTLcvvsWfb",
  "key20": "KNuttJxPvNCv62bG7Tv3zQucmC9UgQRN3bY5nTgqMmhmUN1zh3X5YbELxiPeBVYNTEuasoSiysztURWVkayrrTM",
  "key21": "2b8ndF9SABqgA8RCtHkE1CyV2XVrRhE7LzhbevxzxM7FX6wobtJkypzRrsLjpAUHusSzzd1QzAg1VCQyhFRbCvyQ",
  "key22": "5TpWnrsRtJc66gJuF1FNysNLnF9p9idtnc8JHy55JnWh7RPPfhzdpUMu454v3WHNtvVRyCujCk2p2bJQRoSyo98o",
  "key23": "42XRDH8K7P969BZzRjiDUrGdxY5f2KZMraqmyHz72Giz4bC6AjCKK6tJBRXhPk7ZgZJQqe2x3tkJV5XRqKrcbqCe",
  "key24": "BskaMszQxztDoWgFcQAFxteUvmAz8sTFS1M1DwkhGLiyjQiLe2xiJqmWrEVcTe8wCH9Sm3EC7vmecPuoYeX41xJ",
  "key25": "7jiWaLgZoKYiXWSEajgfDCoJSxszCrb63PqSbbP5WpJWzogo44o5Ck4nPksr4BWeFhCrzo2cSxPGfjojJ75Z1tw",
  "key26": "2s6qkMPnrUrxwoaiHTp787ZxzkejmXoVYqPSvgv1mLun7jyGvkWaQhagU2Vh5aiuSocjch5C4vYhurex8kEsJJ1W",
  "key27": "Mof6diTqU33ehRZmtv12x5dQqm4A33iVFCqf1rHffKbACyKJ3wtuujkgxijL7CXjCBf7JdWXADb5UaRLSzbPJQd",
  "key28": "33rFEooprqgwoc3TsqJ2K1ZFgprCCjsda1d4oU2UAhcWBWiLzVjsSvv2hZuWaAfZmuKGCdbhpLPXkWv5BbvwQm32",
  "key29": "zQKaakPGjtcsVuyNKZmmziUzFsp6VpdBCMHisKRAvyzHe8bipZyrAaN3u65vKXAkjRmfcnRM3wKWXyXePfioxtq",
  "key30": "4FCuhghqKXWnyTFjgnRYMEEpSaHd4HfMxQpcHZh5Uvzxh5XZxgLy6p5cGki9WKZUbG3pmRR1ANppAQ6riBtHwvbM",
  "key31": "3z5bDmjxXpJzwgP42CHdL9rWnbDS797KHoQAmD2vMCjinYQExYF2y675jeyKZWSys7kHvDJbWPVAmre9csNqUecW",
  "key32": "8dXmTbBdtgDECepBYM8xAtPeKR1hA1qqX9m8udxhRMqAoaLc91v1NGqjyLmho4XSnvAmNvpzh5Vjr5USeexheEK",
  "key33": "3nSFJMdKxJKsBn17RrdkAjAUXkCgJiRs6udMpfiYtLTH5GMezjrAU1uBg6h11tfbPMMrPVuk49xZfrVyHeqRmYW9",
  "key34": "ty7jUmi6fs2N5VTpVXUWJdPGNqYZNxxepvZsErkkUXtA5G5as5Zhqn22e2rt4wXBzrX1XKbi49VmQXtZtMfvZQi",
  "key35": "xQxpqix9B4H9BnpG8FkxZati16NwbdvoX5dfHrBYtfbega1vC4oX4WFGb81RF8pbvKVZtdQxhkNwvh4hs4A6rxa",
  "key36": "KnUo5tjU1NxoVy8x6Hta9W1AJEcp9yhWxkwLopU2woD8QwRRERnfcSGPj3JaPvea56E5i7cJKgrbeTnpceVm8hz",
  "key37": "4CZwGsUdLWit17Bnao1qu7XfBZzWte7AFx2A74JPepYnHfCmvfideXo75QVZZxe8mNtaSwY7jn5e2iwRCZgaawAn",
  "key38": "RSioCmaPBCK9modmofR7jwBUN4JHwWVJwp58pPZGw4ovYzAJVumjEcBPSx5QdG4St2XLGRr8k5curuABAmT39A8",
  "key39": "ufA65VWdjdUjcD6vUAupjK6FzMs5a2DoXmgkL8NSzcG82J41YGiFPGk9HUc7eDtAinYEZPGMWJf7hKuoDoiWwrN"
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
