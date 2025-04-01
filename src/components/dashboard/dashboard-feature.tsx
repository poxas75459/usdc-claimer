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
    "4cLtdGEvfhXe9uj8cwYf2ikov6TNKm6iVzoP8kY5QzPUvokr1kWU6koC4fDRgp5FodkfJL56U1gKKVRRsxf9AebE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mxmaPta3yLPNzNBLZQqimFxQxCjNvCeFQS8yMM1oaLTDAULSQwo3fRndjbb7kJQTTSQXYt3XYFAYhaTHfDtWMrM",
  "key1": "5Tvx43VsC99FUpwNbWgNb3jnymztrEtwZm5BQA3Z24P7RBTpPPgxb7Jj1DYj7QVJQVbTKRDKhyt6kndNnJMLmL4z",
  "key2": "3vSKjRh51k5CQdRbrPPPaJcTSYksDdHjXn7RoNao3AXvZvb9zPFth74gvkurFFpraPaWuwwJmWY4ajE7hKx76w1A",
  "key3": "2UTdwzZTS4o4xoTD7ZsA3NCDAf82DozUfbGvYrJ7qDxV8fsE2gyrVMKUojzDVcgyQ8Fm3ph5WtwBj9kXE5NVzAru",
  "key4": "5f4HwVk9mcw6qmXCh5hrfaHmmqqVViQ9VfnNRz7P8EnHCFXmcwDDQPWKQkQsLqXhsAmeChCPrtMZjn1eKiU1ztVC",
  "key5": "KS4eTvoK9xJYDE6uEwwb7juhp1YgTce3cyacwFwe9mFWTu1nq148AXNH284r1SGg9Xa1ajXDqbJkS9bvpRwdHNA",
  "key6": "2CHsa5mr84WRSBAmwFZCQQKovnP8cJov6t1mHuQvFQj3cSsF93ULk1MVnFT9wq9jSViLfyJdASHrsQWgZCRGT8fj",
  "key7": "uvnoYQPFnnwLLTcFNCbbLtUdP5EB8VEmFcaUW9wKpb8zfmwg8YecX6c9Ed1aaUUu8eKppnUiHWPUjFQAPAmR8QJ",
  "key8": "5FBLnvzVwenc1DJ4su7WdsejCr3xkszW6g9FJZmJpki6wHVRrSaF7JfEe6DCUcF2zpteNP5nPhCTmvV2iF1XWYp9",
  "key9": "3Edaj8XF1sx3JAGseRFkz6TciSDG8wroiSpLmnNQjFn7NACjjsFZrWja9WUmpmr45Lpiqr83Nv8r7EQK3Dfc4bqU",
  "key10": "2Zu7BwxU7HN3ye3g7wjnxgZk7mxRYHr2J4pxoAjW7zZtcSjGJ5kV7vzHg7bzM85Ap7W4UuzDJEMEJj8kG7xCbBA5",
  "key11": "FYCL2XcpjoxqUacRFan1zQyhJ2N8FJdf6Vg7ntPV1wQ9YTfGhFBgRhCKE42pEbs3Fi3wGhaaA1P5Rnw9LwWrhUm",
  "key12": "2ej7f3d3kZfgo3eD1MMbcWcLsTEtbyJdpBK15UqP6veCuhMx37rnWxXWRNzHs7rBCHyqbQBoWByPfdn8x1Ls7P5o",
  "key13": "3EYkBZCu2G5BNPUXPBbx9LcNuAsNMiLsgSz1XuEyF5jnU2gMRT26zbJtsDZferwQVcqeLT12NnUpoFzAunEoE6N6",
  "key14": "2Tkotj4uQhrwU271navZgJ93pq5dQZPkQFNEPqziTm1C2gm3SKcB4KHo41K6JSj6vyKnszNojq4hfAfdxC9zWACv",
  "key15": "4NCNayuJNmzscQLs3nEGdz72MNFQmSqmbwFxLbQYFM7sMAhwy7kfbPY4MdxiFHhoSCJAhKW84ogtXEAs8mu1mz1w",
  "key16": "2SfdPEkE8D4vujX1mp3AHxCwth2g58CVb9JmkpJ3ayqwCYFRR3Bkg28PNHHWEam7Xzm4H9Nbd8rh4xZy5Lch87K4",
  "key17": "2v9cx1q1d7CEPT8SQ4YTqPsjj22DJzQykRJb1eoFitnPCtPaDdpj1Fsw7hP9oaokxZWaTqt6r1a1G4jMPowNS9qb",
  "key18": "3W1aMmsqkBrQ5jMoGJjEe7kp9k3b7S7Ea7UAN5dGvuQPGBZ3h71BH9dDCWnHhoFHYd2v5EmYBq55Ni7A2BodZFFd",
  "key19": "2kohyRX6EW4AkwoaKWvyn2AporsVYSrYDTzQRynfv3oz3qb7yoHaAE9RqCfEcwtzPUSPXZj2Cr3nQ43bERMvyRnj",
  "key20": "5SrD2xvLzYKfgY6GeM44pRB9DEVKv4DxL1cFx8UF88QPAcowT8zxMkhiTenqNWXyBMQwQemoJmP5fvheeLYB6drB",
  "key21": "3r39UcGS7hiLtob73ZBknGx7sftG6N7MBiM9qjPwnJDCKaoMS8G4GHXhxMhyujJcj5Yw27cgpyKfmLLAk9UzPYBr",
  "key22": "5WcoG6qWKqzcYNT8e3n8CkCc3wQuHw5x6Bssx8ouarFCeW4AxeLdNKp3kWpunbKghKw9P7Qq2pMRWwwomUXR2HcK",
  "key23": "3rtmn8xmZmhKt3rUkt4rm2iA8NbTXyEvC454WubmQ8x7EcDpCzy2oyn3TQYPNUZfXzu1HwJQs3aJM47G6hs1doRZ",
  "key24": "3gHuoSCj4o21CvVk9sFsWj6CjNmBDrbD6t7VNe9MMPGAb5BTnLKaS2PFCSPfz1BfdRoo775xg6dqtqgAUrQVciUw",
  "key25": "5jVg6HuXQypeKHMQeZMjSWhS9GL2Yh8mzz36Rr9s2kFbA28nvcRNAA6nyVWABKNfVZw2inticfooSt74GetbEgh6",
  "key26": "4eFxgnJVPrq4DAHnx3JHzfbJHQZqe1CuuAML1hWshq2SB25eqTS6buyBXHJRMst9raBmrRkMEPtsRFcbReVfciMo",
  "key27": "3C4KS4WyhFFSkn3ZzPU4U5zSZFfZoNhDrtderYeL4K7WxWhoP26nFVmGCyrByqk6x6hzhP2ykSnY9ji3i6FZa38E",
  "key28": "3QPQescpVC4pGo3bHUtrogcUoHsqkgXeqBSePU3CDc5zA8gGUQdnzm4pJYhYVvu17zGoS81yXJYZ5T1dKSTTqP33",
  "key29": "2uNaTr5kpYqGWEUU2165bFMCZCindti58C79azXne2G2i4enwX1BySruqrDgUtcMmTzpYEyuGyQK1xMuwwLSsJZg",
  "key30": "3X8QPB3DBEQqeyrm4tCXvMX2hANfyAeCUXBMF9uXjr6PUXiQ1S8614qSXFgikhvb4Jwr8zAiTc4o8DdtcioR9bNW",
  "key31": "2CBQAJqnAnWRkYyV9qocbhvdJBAXAxJwut8fLRPMiH4e6a6PakJZDpUepQTJxLXy5HN2cq9Z2iCbDPB7KGnh8xn6",
  "key32": "67rcg2RkrZEShkyy2SLEwUQWmZeHU3dCTYFZ6tzFMpMU1Rku1bFprJCaGG3XNwnR3zQSQGg9j3GnCfNWt67vEpdr",
  "key33": "4mMCyF5abyHUxFhsGX8uLegE2EHUTpPvwJeQVyofTZHbfi8A9ui8q59j3CyLkDQWW7oa4w4THLtgNcFvb1x573zc",
  "key34": "4J8LUi6utBVHpvLheyhzjwcgNFXFmDexER7r7iBqp2uwhtuxtiGsi4jSGbhaCyHrLHKC7d6Wn17igPaRg4g3Wps5",
  "key35": "5xahdGqb2Lveu7iM5YtDgjYZAXMeuiQYYm8zmXTgjhLufqzz336Afe148QHHWpvqUYzMprstLeSz8WVqfAAqdakA",
  "key36": "4sh9DBvsAeyr3PCUY24YjLYZicxWoVNwJGJdKz2tEBhddo394Ax1oZv4kJXroCCRmyeJRSNurrq2dwhbKTUaU1Uu",
  "key37": "CXgkJtwwSBWDjifctd4eDeK4rST7UZi8ajBQvnv8SkDtU7ir5Tin5h9HeHtGUCU4786YoM2tMdfendt6LBrrdkm",
  "key38": "3EifRExysULMpiWvLycy7w5XCDv4KnySSxQuvkm69ki9uTj52fcT7KuJYMRk4fiHkEHEEu7nfhhWu2aX2cUuYS9z",
  "key39": "3YFxwWiaxHW9sSndEh9w8FwTg7X5Z3GvMdxx4haZxV6SddCJ493qk5PxAnDrcVNCdh3aA29oTBRoaZjrd9AeSUPn",
  "key40": "5rNL8cDPpXYS7jo9ktK3pNBeicBp98org5aLrndfPpi6BnG7KrDVMHaF59rLJwjtXjL8vdEVNNAnmcjNm7CeAU2r",
  "key41": "JcMdVuCgtnuqbzAvgqDacFvPuxBgEzeyC711ytEcbKVjrbyjfJAdpmzoUonprTRoag3YCNoEauSzegm8NP3EwP7",
  "key42": "3fpMmpro5tXRVgVJzVTbkbuF5kZEcRzs3qMRU7oNnvjCokJM1W7Rsw9LwcgqGQwEF2P1WvHdGYomzUQxtzLJeBoj",
  "key43": "4Y4ymsRk5yesfExHV1XgsvNNRS8JxMeA8fUUi5iLxX6jLUtXud6ULp4DbZMRxtKRt5feccUcgMb8L4W3ZjTErFWs",
  "key44": "2FzRdobGSKWirFiP2Zo3VshE1XtXeF5dvtyjquaiBepBxQ713imTjR88UMqUqC14oAjD688wjB2L7qqY7ZekPXG2",
  "key45": "5XwcCqjeyxQBbXgAX6fVEvnPH9uuix37uavViCJoujTCdoEH4FwpvbvbmXfnvgL51fgnKGYdX8aMEYPpWn8v11vC",
  "key46": "3AThbjJNxFQ5vBRxgv9Ye4URt2opSVrDcUZDsQPgT73sPBgTmKdt5SBv33muHrf4XhZKtf4yPFY1C3nvHMAT6FGh",
  "key47": "45raHu2YkR9UMZ3ufnjU1FsPzXdFT5xXC1praY2qMgkwogdc2TVNDfrZti4qi5ZaatSexC1wmBwpKGpxAkgtnjQw",
  "key48": "3iDqdPxJchdwKJwo5yWTrYF79MsL3ghgdXXZrhLyodXr6RbBYFAfkZoRhYBATK4aJEjHYLtEuQqFXwrGaKkdixU8",
  "key49": "3dyLyGaABBcZ4yfr25yXHBEnkcm1UYqujURBCm1YMekGVKaREU5GjpTicHT9sBqjBfLeVBHjbbSFc1onyd6mDZ4L"
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
