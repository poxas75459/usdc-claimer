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
    "4JJx4qoS3ARKaSPEPimLWGN4oLwXAu7JEbvJsCwyKQX84gwe4SzYZkAb6t8kU6EoDstmeXF1Rnct9xuMEtyA7Zv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s1uW7BiJn8xNBX8ZRv3xMwjf2mX9riaPhmY3C5U5tx62ASQQsdikHwRrUT43vN46vBQByqE6WQATcXML5XQToka",
  "key1": "KEj9SKthSh1t1pAsdwvtaUfLLXJUyGG9A1AkXAibP5wkgcuPnykNhzNf513ZauzQ68xSs3RybhighWUg7FHfWT6",
  "key2": "35q5AZj7mUX1eLfq8wUFuP2nYEJBRfjKqoRbirXppVkHdPcPMBxuhPNsAQ2nA3Gw1XkpRnfSuv7rNaAYC2ch6bni",
  "key3": "5sdWoN5qFGxJMBxbutJ5KpcPHJT3yi6HL39zpbBHRd9UU31eLoVvhEiio3P35Ko3HF2aRr6kmZasbTtNAgMjt57b",
  "key4": "3M8RHHoreBJ6cxMuxhB5hvbfpJ4s1KnH9941mAGpwLCDqYYgy3PNPm3PpiDx3K7W9dAQ1TfCtv2DzJN5A32k83Uz",
  "key5": "4zHHTnJoFawJXGS33q1XgKmYC2HrzEEUpkWp7o2Uyk42pJDxtDHt3fEfsNM61Q1XNwQia5zPvwbFc3x1q6BgyFwP",
  "key6": "5kdCgLJwHCQd2Uij62ym6YE4WVHMJnCFyWkMrscurCoyE1avjpQV9rsRhoiTAjE2Ffeyc4QG5xU7PpGAnR23e5Nc",
  "key7": "5vg4bUerve4q8o56jRpjxR8DfKJcYn3E6wesAvBVbbv4E4EGBqhcs5ZKyaidT5W9WUeho9Fzwuby9NsUNPMRxjjE",
  "key8": "MTAXgPD2Y3239BUgfCzm8KKxcSYuRn5qCnXWrkyAKuPS1RJba3ZAkeF97JqeHCwd1mb1UVRuicya3PWHqHp7eqd",
  "key9": "2DpPvtB81AmS3HugkeVGzeRNR18XZjCtohXep4X2y55j5N6wq1iMGNor4gzktaeWjp6M1dtu1T6qad5mkH2fN1XF",
  "key10": "4jfah5ihARACeJbQ24PweNhVQofcgHbGe8LvBmtfvupcXkSEhCfpZKC9ks4HBQ5JJsTfjsdiQVSjEVbtU8prm839",
  "key11": "iieDtCcN3ou8a6mDezYG76EVxsYGKBTqe7DAoR8U2Gdak8ovP97bjs6xKgcEhZmXnV5EyTQS5iv3JqBMEQzU1t5",
  "key12": "2ZumBQx2QvWM9dTCkRoye7b8RKsJd6Ea6vUCPuDt5H8uBxvoWaVFBRJRKsn2ZSfFsp4QJKUqkGjKyUHAwrQQyydu",
  "key13": "4LhrRyEkUF1S2J2qypmySwzCXYDQKsYE2qhPF4qrPXQWoDoLEVNUN7dY5sePvJdR6XLkezZGgeiNVMG77YXB3xjf",
  "key14": "2d3bxZ282hkC8avFyYMiaEWa4YYShvjSSuLfAfSL8xkWEsufhRTvakHDKxag4oqYj8KTZXKd7nbnXiSLA537gwjq",
  "key15": "3W3u2Ee3gFPQaXATtYDeGByryAHX7jq8K8BK2MM2f9cpTzkwP1yomLaqAf9NxY6fXsiFaD35hhs1QMZ5cGumtmCu",
  "key16": "avu87Wu6NYqb9bdWm7Ef1NrJideGLZubHSwSLHznLgDG4Bg1ZNrpMQpRv1CePJyni6KpiuF131AqXvaC8Uy5T5L",
  "key17": "4VeyCufLUmjn4CpBA9JXfi9ozNWViarLnQF3mMyLMd2ca3WHn5ZpbCgL5Ez7kTFRQnj7rfr2UUtnNyRXtp2i8q68",
  "key18": "qwgqT6BN2cfF6yWLQBFLJbrQKerCRdyAvXyK5pmVuepuKKQuQPGhV77m1diZVcCjj3gRtJysb5fe4fzSeZd1f8U",
  "key19": "kSMZT7xBKXkG6LSuaQZnb8FJfHCShHUhmFUF1WQJEvNP7Aum1i7FfCxEaN3ENg72DR7oLhDjx154Vts1PqYYrgm",
  "key20": "3WiPix3phnLtcoA5DQGRWbgBahjDX2vr5JZgPiaD96Bg1vWrNaBnhg8p97BJw8hSmQbAYu4HEUy35D9dq98uc35T",
  "key21": "wgeyEXZdtNUeLTECtcE7ZmanmdbffgBQXiNMFyuMHRCQYdD1FgTTN3UC7YYtCp5XFUH1SVH4k1LZVGCVSM44TEf",
  "key22": "26DJzPsNduYQsxzBRKxTytwWmrphziziUsoBoHgU8Yp6QyYBF6azG2yhSCEYkhAUwNeuJa1oiZxfiXkTjYVWFqp7",
  "key23": "4j7zyZndRv4yfTEuGvSnugZj6i9aBqgAhijAwkmtCGQMWWWCxQWykGV12gyAAAgQGgZMWgLt6w1YH2HyukwegqTF",
  "key24": "5WZtZAHpG52Dv8h4SrPfCE6derhKjoZKwBPSTENWNp1vFFn13qmz75jawJnQAnjbBXRU2cDZrnnE9G23k8wPWMvi",
  "key25": "5Zp8LXuasBq95r2XokfKUPkTyshz6GjxqU5uuATrCFmerLWkEinV5rP77fvbEaSVVxtRCKDeKLbNHK8d457ExKZd",
  "key26": "3KsmXUQ6LPqW9thZRC6Uxw3DbbDAuYJVFegrKdonFy4fMs2pJCRREimPZEYwvAgY8SvHErVKMhabPifNVuHrivvA",
  "key27": "57wJCHTnAqNwN2kZQgGTJaRWxMttr7SHsq9h5ykkMBF5wK9mc1kEqbUckgGdCgSi23Ly4wnMDRHSXCu5xT6ehNqX",
  "key28": "2y5oxofZjJsQHFSmdPzkYuovRLS3daVQxhdkGTxYL4XPQB121SzUKxTSqMm8qovLdukEQQt1V59cLsdHFVrN512X",
  "key29": "2ujM3tPQNQGQEXMD45xWgydXAckw7vbdEcVwjDwjUyuAw7GLV6eXfeuQrTXwftW9MM5mRapFqY4f37HCGTimT9Ju",
  "key30": "2pv2L3kX7e6VRaFZsUUL7axsCDKWwLb28LscMYEgvKG2xB6eES7Q4dyAo237MPCaWsSuxtXUExga3CRDZbf2kPjj",
  "key31": "59V9bWavx3X5HQghD9etM6uDcZVAa2EnUnhNAuto6D8rpVm1WExu9StMirRympo1q71MCVCzmK35eD3Lw8zUAPRX",
  "key32": "otatkVF3PLDR3inCCCPA1G5qetFWtWt4NkYT7QqT7MEXnbi692qY2BL1q2kdq85kgmQtznfVSVX6AqMwNb9xBG2",
  "key33": "3SLxWq7kVHpALLEbKrDsMnLbbyCrZ6ZQJVxf9umne8c5nrkjZ3y5hZb68QHs7VM5WBuQjpbRZLQ8xQchR4Gt5Tgx",
  "key34": "5U8q6iLtudg76skoz3R3AvGPbPEoDyVyMcd55UrTESjA8v1sDGykhtmUoFuowybqQAocxKRNNaUK4nAcY3Lb1K6m",
  "key35": "FVDzykvWWfT45VSSJKxwA56jL7AZoBmyXYYTU6zuKtFDZVAEUWjnYFWUty8cBsaiHCpgZi2mZ25u9dbxnaCrhSd",
  "key36": "2dJDiXHCuF2wcQEGMcErZUm4mbLqsu9ZjSE5SP43Y5nEhqiK7bxgj8sxaAcPuhzVKKhnWJo64k7YK5YGbj9r9mbb",
  "key37": "dEh5J71WG5JcPTw1Rh9sFbkALMXHd8UfAc8od39fX8JCLVQCgMC4Cweoz2rg4fuyDxoADaaprjr8yL1ar5R2j1U",
  "key38": "HAWtNvw5hdn85b2JYPdiQ6R8QyggzVbGHaKzivj2uaKJVxAKGWDudn3ma6w8NJ86qVxdwfSW51NH4RDouusQUEF"
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
