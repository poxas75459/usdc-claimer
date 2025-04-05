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
    "2bhGfebX1ESjC7oYko1DWQKk4h8MwdesfmjwdkjadJdkuFbPrtCwrDS9PXy6kV8s1pMhiZFPq5yUN6Yb1chYnYoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vu6w2Y7JukypGjdFN8YyeSVHSbNZeyy5iS7pBTWoSf2V5BEPVyVEPMGXWx4r7kqp9htz9RJBhPLkk2ZLEBiaSBh",
  "key1": "2QzJtLjU6aUiYRWxdZXCh8DPDvrjWMHUW7rB6Ue7cFuuNuvrzze5peo1bJy4MeuEzFwMfz5w489eAifqYEPhQHs4",
  "key2": "5AfXWT2pvf76QGk56J361LXPgGGv4b2W8ZKgNZeSXu2MtSUsmjRSWGUmESEePvjQgzcxUu83Sge8CUSuUP86Lkkz",
  "key3": "32m6bz1BdVR2dRi6hke5oMLrs9NQfR2PMpHyF54ifM4MbrNEGkTEkFnbkEJRP2UUNxhToNfVtHCqXquQYH2cb85i",
  "key4": "353nEbPF9Ae8K3GavKK8LeFLr2hGKFkNVwsA1CkBvCJKxWMYvWuDSaPcbXp4Fn69boUfeWQG4hpYsTU4djCQEWa7",
  "key5": "38GTrSkzGGd1n73tGLxyQ5AusD3KXkeCatfabTFn2b1GGH7se1ZsKFUhZhsM8J5tMj3mr3Xw1RCeUAQyqDA1amNa",
  "key6": "33js725zUiFGVpxhYuieByUjvDkP9YeA1kUFgiV8LjSk4PakAKiifYMQHx54A8yDhspUToj2P2ZHxKTu4W9P5n9V",
  "key7": "2e5CSbYCs556qB96x72vgy3o3qV4xbMY9AadyyLZuzzgMpHR9opkdnfrYerJgsyUGwBYrLwWZXbBQfa1RNwUNoUR",
  "key8": "226N3xmSg1rWpZNAsqv1TuZADTWDJZ26tc1fctxtxQJ6XuxdkebNsDqjRampXpNF4dFGWWRWnZ81QuGZw3vZ3D9k",
  "key9": "2ng3hQ9Gg4DLHEs5asBA4urrQDXkUdaPLfh75a2MFeZHEcdrbKynXVvE9yYpkHVYzLCa59HFPRQBu3EdP9TUec4U",
  "key10": "48DmQiX1MvJc4ZdhGTbRMcVwiYpHoxNnVcaSGHXe8ijqGwBmmKS8CBDxrv9fjrPqjypBzJ6iohJ5Kt2XjFrSYAxJ",
  "key11": "3ekoTvBcJtpiuzfXgFAQVB18Qv3eMmagS9vKe6NX9wsgQHYxkbofQo4ozgvwmvzRwKcUT6fxWSjn5ee4pgcEgV5A",
  "key12": "HnohRmZoUxinyW7nkVyM5hmqwSznjyUDMKodt8aa3SkUTnRtvfGFSKTpXPEkPPPwbpR3r96WWz9cwyKhpnEbf7S",
  "key13": "2SQjvrRqKt4vLmriHNNnwhFkrU1iSPsYw7pdVF9xM2mCLZUtFS3ZNBYT2gEgB5NfUv6z97bkCqGxbyTznsbJMpaS",
  "key14": "23qjmHKcAoQECxyY6egxQUceHMDJPufXLLmfiANxdnArXc8xanhM87qP9gpxxriiHjJknktrAR2erSGdmjodFKwP",
  "key15": "2zdL7beYyp5yeA97zWZZTprjhPtDwZx68d2iDZbPm8DcCVk2oryNsT1kEwCqtFb8QEUxFkoaMkwC3waPn3Ayi5D7",
  "key16": "33ihcswuqJVtmSZTkNFTnELKDjibTmknCP2XcGiL67EawQCaLrZJuCs3iKHsUDffMWyd8m3cpynuM38H2ShsxSDj",
  "key17": "4CveByA6UwgN8ysm8VugozcdwFpsPFuXcFiLZ1j3cwqQg9n1UwqdLGLU4q5QdSHye6ZpWrLnnZrAJdmukadQk5Sh",
  "key18": "4wVoBQe8HVZ6oJMX8hG28ZJMbMr27abGvNW8JtdP8JbkZw8ztEm1T8GtiCdoik6eWDzASndudDBzB5nom4YMBZ4N",
  "key19": "2utMfePvFUwEy7813rd3bebXJ3A6NKBCYgjnhmSWvfUgQ3UgMGvvWp8uB8RJKys4yNgrJDhk5kAZygb1QHXF3rtf",
  "key20": "4HZrZRySVA8kNWtoYTBCCbgjtB7KzV2o8aGdT6G1Naw824fN9SQVA1anzL4giyWhsyCo8ZHeYwm99U8UoMYjAVwp",
  "key21": "MwPuX2u6ws7ezHvxQNshNoMxUxEhoviZD1A7ttoYakyKn45V3LnFcUTgg9g15hXrnJFetVVYVGu6sa67DGHyiYa",
  "key22": "49E8Nc6BXvsmmXFVD7sRfB3cnn5rfns5hNwB2RDMz3TkrYzrhRaeJhq4e9xPgEzUzxydXrTQpksMnJ4iXvovhi6L",
  "key23": "32BYJK77shF9KFpvHZ2MS4UMSM8yYCdL4eCwu8uvL7hYEk7RHjSbx9QfRmnAw5pTMA5hbf1EEiwdFsR1bNqmx9bh",
  "key24": "4FFcvEKXdDG9MZa6Eo72MsHp4EYhQ3dVYSrHYTi7NJJBAcvBSobS1UBQqhnHtoQHwgDBLD2QLSHWGKa38Vq5eKZa",
  "key25": "2iD5oEDDvvefv4BhVGyottgtqvJxTCHp2er2wSfodNmAse9hyJZL4azssFxtqsT7Vx5zpaHMWXrw96ruTGLgH7so",
  "key26": "43E27z2S7WTgYLAJEVonY82TYm8y5wCY7oZqkCWAP4LJT1Qe5v5MMFfBmU67H77HApsmvskmd6H7XmArhar8jsRs",
  "key27": "4gmv5QumjLDcE3KM2ma4DJpkvcDNVgovS5RvQoAQ6wZqML5WMUXuCRFv5P39Bn1HBKJnpv7f1Yt9EqtHC7rc13aC",
  "key28": "2RsjgbHGecViaNBznGpfh57ALqv3RyA6rPUFPKhwX6Cqr6BdC6VC4iRE9MdsXEURBqwp1AUasYuo5j2sZVayB4bu",
  "key29": "Hv1fzHW4Dhn7o8LJx59F2atUnKaSdLPZ52QW9iTgTQQHux1E571FRXbYCPZX2LQwPmQLbaKYBL1RC8TbmpSemkX",
  "key30": "5w5Y3MJEaCfLarnDZiSsRopqPainx9pMdtcS4S1ipTaxvzYWJ3oyaCiiUxfHGKLjDJkRtR428SrdNLqBZwebnU1h",
  "key31": "5S7GXZ2HJbSyrQhE5HxuYfe8WNYwkuQZAmSSyBaAmnG578GsK64u1mrLKtqcBVfY1TKxLPoHFFnJABBSouZS7S5Y",
  "key32": "3U6TL1uxxVhWGaFmLiidTvRQvXddW1YMaYixjnKFTzvdAM8kcM5Y3WFC7Y9z1pSWfWC4x2FdjzfzkNFf3C1ZY88s",
  "key33": "22dum7Sb75m4pFHXG9SSoYKheysBgpULfWHCHSnfVj7RyrRnF7iyqrvDFi1iByNajVTC1UHgKe94QcpXq38hyWAh",
  "key34": "3uTFiF8UmieykgmVn1GCTktbtyA6Mh5PKPqYk1WpfLvB54rfatG3a4vQ7BjKPoetnZbKQUzsaJziitoDN5Y9ouP8",
  "key35": "4Tz5F1MZ6nnDwBjN4mS5SpzVDyNm3FCSW1Ru3JdmwDhzTykqStGnZ1T5rUtzkSYyQQ3Db8xFUeRFMnUq6UVTnuo7",
  "key36": "AsJeGzcQzvfA5UnkcvdFvrPkUR2xNiaqxF4SLAbrgCRuLKL334RoNMgVrDn3NaG3wMAhwrfGBBAaUQPZNugv48L",
  "key37": "4ukRrwbfphXcXuLvyw4BDpKjEou2LaEFuDDvWxKDHiAwHdjKPev2Dzu92bLfiRdehPq4AGTJc6Byv8AskbTPEE5o",
  "key38": "4TjeEH5x1LT2P4xfegFgytfbj5peQTtxiTpcxxHLNVC4ZaNia4bJ9UZw7NmvzZgHC3TeQQexREFyfW292UNNuwsM",
  "key39": "4giqF9WjirnP3JR3ZaxavgQ9pJjBhDVp7deXPHwPbJJXt27fmfn9h6xT55hKmGsCBpVZT8o7pFbNjoHkqfrK1Frc",
  "key40": "2niKkVudQBsBNwx5jH8TUzUj7JeW6zaeVsnyPb5jwoiK4aRPhzDW1vHfWBqbg5kjPQGgTUsvajSRbviEfE87FuzL",
  "key41": "f3yYb6Y53BvMGvxqQ13Px8Vf6Mrrw9BdasWuEHLagRiVSYVSGB69mBsLxU9AHySccE2k5F9SQwEMtzLDqXTx3D5",
  "key42": "3mQim7TyGNQxpPUms2gsdrSMR43mR2PZmPA8SBWfxq15RKDanBbGRKum9fpjJPXmQJ2fGKLGFJs6Cy9oRJWV4ZzK",
  "key43": "2KNd2ocAZqc394RmgdSFDHWUQmXuA4pnN9qXAtLG6RTKob4988hzdmC8T9s7fL6FFXpQQHx1N1Ns1wg8mbemrTvu",
  "key44": "hApUjxpf4WrzdnjHw3gmXSra9FBXnRSBrwVkUxGFyFAeFALh7Vt3dhdSKDCPVZdZoNNPetTpzehU4uyu36Sy1tv",
  "key45": "5kWwDDxDfqFWYgC6CqLcfPmUh1KJtrAZm2ktiYXE1pE5LQ81rT8LUAkbqmLhR3iW9bsgT4L1AZKS7CCGXZPRmLeE",
  "key46": "5Kvrt6oyXCA9iXTaV7mE6kDmr7iHsoYHsdn79SVneVBCH7TPKSzondSTi7SZpGeiNBJEGPehzVgm4Wd7tq6oYoE"
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
