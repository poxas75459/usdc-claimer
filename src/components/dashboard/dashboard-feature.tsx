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
    "4Fvhk2439uxzrf4so43883Qqbt8GrnekTFfrut5mQtPrevcoGLzMVuQPQtGEL6n11RMSbfPZmvDTP2WX5GSqqBfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HHdtJ9EXTtXA55L2G5bJtCSK46r8MAf7AcXRhwHv5zD5iziLEN4zdemhhZuZFc6gKWPuUpnz3mHQB9kxe9WjCQy",
  "key1": "CsjnCAdaJM9n4EwoGHMv5ddT4n91AHmsHdpft4aUuRFfAVyRTD4TrLB6warXejKH3Ngtooqhb3ue2buAoGAWYW4",
  "key2": "26ASzzWXY7oZtizMiF9zTrqG5bUdoAfXiUCns9XZNQYQo7d3wXw82y2bsZaje4AE5ogVhLCVqHQUTCFx8hisi2U9",
  "key3": "4TbZVPg6YZFNh1smYMFkf5h1ZB128qhnsFC5jDccj9oWzjcpd9Anhgr8h1KhFvvZcGtbrH2wAM6WVt5b4vGDUBeD",
  "key4": "2FUHrMGeTAA2kWrfwTfBmVWwRg8ZBeHLUcFz6m9V43xAqn5jRKKnjMYobuFK6RL6ggV6hhnruENaCMi97RDx4HMj",
  "key5": "34qZtP64BKyTgyVjhAi4P1pEbJCQ6GAJXUQfL1rUn56WpC3BHJ6EKi6hp9ipXANSKZouUZ47HHNRsi4U76juQKmg",
  "key6": "5U2r1UeKu1ik2dJf25jbecNjU3CUz7SKYuYLUioRLtaKXpUpPRSThG7XwpU43BBjXbAqEgRqCCcgqB3VrtL7sA3m",
  "key7": "2GYVctSDhSBB6imYiy5GbGifjMYx1ZdExuH4ULLuamiNYmKXh7f5cwKaKtcoq8jVLGovragk65ZVRweZB11fkSEX",
  "key8": "2GhEkRidbAwdeR7Pf45JCKsstwrGqb3Q9bV4h5morpqub24GAMK4N8SfFdEugKwXJdFVcayTMKyXrDfG7CJKXw7t",
  "key9": "3G7f5ELPHkvNrRenXydhkmjVqTWp2pdVfqRcsabmRh8sjXcB4kqbvV8MGjEMbkju7ATiYt8qjDitLLYDTDDyNBnM",
  "key10": "2usmyWBajLjbxYMDBvvaQ99UXVcXBSPPyW7CijTfMrQ8QwnXqw6MC2ofjPjYwapjTrDUXzzgUsc6X7pFZ8gD2z3p",
  "key11": "kWXRKNQZSn1e6SGaYoc5uxcSiq55Knw41g3fpEtsY8J8b7nQ1XRjcAaCbx5Xt3i4MwyDFwJo3YwyLBSB3R8hCeq",
  "key12": "WPz2U1SbVK8UxCALmFxRCLKXxtZPs1HtHJCZQRtBpcoQc8o98M9iJey7QZkr3eFeZhrTYJ4VZKdnfdtm6XF8GHj",
  "key13": "2PMeDCac3wAZbB4b7Lr8cGEGPWSQ2EdLiSXmPgSBXH5V3nvKjRCPbUNAnPECwkiJN9hRg1ThCATExUvwGdRJhP8D",
  "key14": "3tQXctZzRkEeyufkXimrduR7YcVWTuob6r9vVKNHkcehfdZJCYpu6U376CiGwtFX5mWNBZPyCfcVyNMAAZMgr2sJ",
  "key15": "qd7z7fgSxc4reJeqSZ2YVMMzkP6djcCFavWZNLYzRZ6gHnBefEWUVFk8Usjbf4kQcf36tuHrM1iJrK6xjt4ue1u",
  "key16": "2Dbw8DTuJEkcJYp6M9esFeFxqrANYM7is7z1zu3MXDArk8gJpVm1z3R9JtkmpqWidf2GvYgtFjz1PNG3Qn1mH7yE",
  "key17": "4wAJvsq1tMXDYzBA1sQYjn7uhxr5UM5NAjfBq6iUKHZiMPm9QYR6ozFfhN6fewoBfGzSKJsXGu5DEJmcfrVQMjNe",
  "key18": "45uWc3Qa6HJ4Q9vvUSzAeLvumsGN7StBdm4WYrBAYfMyY8hgtZvJpMzhUJB3164TRxvgsnFMp1CNfJ5JPannhJfD",
  "key19": "EQs9kxu82WtprnFor9bFmC4doTyBTXMkjj4YNFBtpDaV9NKjXQKHpyQ6uyWFqSSkR9Br5NaUoDF6KYuu28juqQn",
  "key20": "2uxfvGdXKH3KKVeNgwY5ma9mZtaYcAZb5MsbM1UZJs3h6i6cjpyLV86i2g9LcZ3a4jUodcLRHyDoANYL2ieDTdvp",
  "key21": "3sVZFjNpxGVuPL2g7J6xTENPQb9TSj6HZZQPXjHPsR7S7BJzR2KTGWqjJc7R6dFmAmh5Dj9CJ8YMjgEWaJQmZzf4",
  "key22": "8KFG3eLjRZtUdd5SyRRSeDQ9PEPQCDNVLewgcUGZxH1ernxkdsZ5PDUQGpao63PDCuB9HuaYdDDJ4pczLrzxoud",
  "key23": "MrxuvEmefNuQZ4s9NsjXnGiFgojNbuVhS9h8aQhsnR1H8fUggypSFMkQexVjEaUETsyvee1gYhdg6AJQfeYLCVT",
  "key24": "3SGxVHHRtYdXh3E9XY8U3YwMcxtEySjkAPAzMpseVGBTBzALKNWBgBqnWV8BocLysqvkgyGmC5ijmJy4GxsUnrEr"
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
