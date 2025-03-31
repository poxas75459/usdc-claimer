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
    "43T7iidn3wvh16SsHQeVm18C11qAaHXvoGMDWPznYFvyoBFq6WnRboQLKcfg4pQDWTvPGGypieFrFBbu88R5yXow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yZaszinoaT4YX6deRixAu8nC8zt8KU9DFteT1RjA6JVe24wboVsY98gGDuoU8mKG1m3ZmYq9j3Wh7UtD8SrMoNU",
  "key1": "59dcUqft8TREghu2NJ6jmnokf2VzeZMWxEr6FxsTRu3XC4uqwQMeSiv3XnTdzfyYiJvrv6zvttVSPov63G6eky9g",
  "key2": "WPjmU2nUp2gHm64ffUaM11kwvnCJiASLgADBBHFt4f6ySL4mqLDuoF3NkDhEVUuJ5c4tTx8bgTdBUMYKHDzoQ2Y",
  "key3": "4f9cCU3KfSN3vwXWnF7aAzGH5gAsAmuJMXygJBKBsDP1FpgVmW8UqPxVoqrbyFFVQoCSRfjnh4fTp8YcbtAvHcQ",
  "key4": "285zqic4fYjAkjyKZv3CMdy76tDr9N8tWsZUPdGK7UfdhMTEDKmmMv87X99wb3WtRwcxnHvL8wVfLyLyUBZJ9538",
  "key5": "c4FiRvS6Z2TEYaN8aufyZcwGPi4zqnP5vrrpJRZ1tpimhvaoBmw8zd82b3rj1uRr7fyoqafkZbBUPCvyCP3s9RJ",
  "key6": "5n9ct1T8WtcQhF98gf3rsavqV54KCJPfnYEwrmP3ZESMXYQEApSURk3L2tQAM4W9bB6ByJ6H4nfu4ki8Xms53zTx",
  "key7": "4mSU7pfvhLCMhtGWpfkMRUzzYW12dHC24n9jraESxmTbZAPPTK9V4JFjmPqwcL8p6RntxiE3FPeiKtJBfiWWAo1V",
  "key8": "53nYA4qQkMpYA6MMkguJTfqhU37ePLv4vxQWsnL8KTpSjqx1DMJWHearWiLuB8n8brbP2EqgVYwFrSp5ZFVxrz2r",
  "key9": "2kfxssjfy5ELPjus65RmWFYgzJsySY5do6GH6JZE5vkQ1Nn5Sujzs4bbqWfXe2LnemuPFFLPs2qquJoP7PgXGJhJ",
  "key10": "25ndg2KmDFaaggke652bGU95ed2awBboUbgXG5Sz2N22B6ZzdKrFh9zDuJqhrreUG6zcrZJYDJnskwkGeYbkHWaQ",
  "key11": "2mpDMqo6qrUemp4i54qahh2bZz4cRWf17MDT2HJSHZUKLmNgpZs2U47D1wa1LWtHfK2xUmBqVhdSMXR5PqKZoi3N",
  "key12": "5gjgn9mVPBc9bBYHZN9zyNDTjsg5ztFKvJyuK2sgRDhDXZ5zRCpAMF4JFaMeXBeoRKf1kMB9wM6s9PGManzboEPU",
  "key13": "wY71bYFuWiczQ6ad6C3xpHWZyp1zb1BxnkM9R3NVuzUFHgJTpSBZiEybp6yHJ1H4hWPQqKbjcQm2iRBbwKBCcni",
  "key14": "2iUexLacbKZ137gAkZAirNEmqAwYJVmKL2MxrowVHbbrgpndktotoW2vzy3nMsqabgQHiUdrwxhXx84oggz5cLL4",
  "key15": "3CmtKgkVYgQ97NmjzYDkEibrbJSFJ1EaMz2i3H884ZmDbfbrTQA7cvJMrwavJqvBp7jxuXLFifKTHqpw2J4UaGQN",
  "key16": "3htBTbxTXuduMPhSAUFVgAhQC8RExNv7pxSmZE9Vu27gXbcyVDGEEjo3CppDAwiF3Fseuj82U2xCQnydRaJA1ApQ",
  "key17": "22hrUfG8atRornZyEpux7XMhvvBtWxHtscKMNFURtWmLiRjVQM679rGhHSqaxu7UQqUwSHz2BkpajuH5x1yEL5bB",
  "key18": "2oErQEvb14ZSjJwRXddrpsK6HXi1ZTVL1uZDMqg1dQWB7fbvwELm6C2foBU2QEGaXM7ne5J6mMCQq4zKTyhFHKfL",
  "key19": "46QefHiHGaWmLctYcNCf4Scxz8wsFHoQWgRZrMWM9AZnVRKD3cUW9yH4sRUDc2gajM1fRpBa5BCaSvNGZ1Kaw3HT",
  "key20": "5wRSSceo68sQibseBeJagQ34dEd7uguTbcVphtijsQKMk2Rwqr9EqtSsneCn2E8YjCBgBZJW4vRfFWLmhuwqmeDS",
  "key21": "3U2hSaNSzxWedtFTUv6vyAfyJ5XB2i9e5G4Jew6CEpWB1oHxyHf3kbNPGkG46etC5TMV8cC95PSE3P1PEGN5pr52",
  "key22": "3RES2RNxpuf66qBfiza5hSGSr6LNiUc4X8X7BSFRGQWQDAnBeNcEubiHKfcSjakEsnQYKgJjw1qFDxp4UEe3bF1V",
  "key23": "2eiRtm8VQarwwc3N15St3TgavVQWZRBA4kbhRdiKWQ9A2bu78HQrnHN5zkVT5WsrkBRhtDq1MPC2cjjG7Fq1QAPC",
  "key24": "29x6wqCwnhyLodPBSPrFKRw6UTCrfCD74XrfYZcKb81uuRpY7judAfb6sBP5pwX61HqPp5UeKgYVzJGo9ZBxTFup"
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
