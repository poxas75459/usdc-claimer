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
    "5Qt15o8ocQGbvKYqWHvvm4mA6dWndmL8duWGp6QRGAE6t1vVxfAqPMR6hn2QqMnkpNUMd5A74sUcamGmaywLUCqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sN59H1MNvVrKfxKZcE2Bm4sZVLXz8pTwDYNPYMQ5yPvjbZY6KXaJ8bNUa53ApRTe9NSG7ggcAPbWT9o8YRZjpNa",
  "key1": "3Bxu3GKp7XkWC3VvSeAep8GMJdWu2mUi2EgFPb7zLNVAeyq5L5WcpRVFXtaSsmVJmHE8SkKQ1nioPofxn9VHW7Mp",
  "key2": "2K6pwuQgo8C4wEXuNfvNiXz5qcJaDo98aGED6JUR89Hux67iwe2oF5aG239ZsH9ddEF73mdXRS2uhdQQQcXWbENV",
  "key3": "3hqfuuAde7cCQ1PMHhDTZd3B2iwXihqZj4263e9ourigN2MSTkrWpeegtH5nrSFyWTxYKbT8Yr94ZFtPCpZzAJaa",
  "key4": "5NRgDr7huaNDsTXfDpxVVgzVJAPjT1zFCgQC1pDfuhivfEoPygCbGhz87rZLWeW8KcqXD9XQxaGRnSjuFdQ9Ar1",
  "key5": "2t6S8pkrBhZJSj4afYWUTXSq7m3WW9rbFMfR6JPGGQ52XnzXKi61xm1v9LuM3GYanDvrqbv2ikaQE9Tr6wxHrMrn",
  "key6": "2B41B7fhKJ3phC2R71sPsDFsMobvByuWXZc8aKoTu7vpLbSavFSDJ7CpjuqmhRFbHFDiGwn4UfcvxPBsw2fwPNvL",
  "key7": "cJqzWtHRrwdfJxYzGnakGks14awVapyQUhi6jYGJziwzEuzPCYxxwtVg6JXpxGcCsPB3w8R6dvQESuGCGfstzYL",
  "key8": "3Efj5eskVVfEKaxhtPtXvs9ry4uacDMgjfdYTAMsfVdmzEnyN3xrtuJsjLMeAB2f91i6gweQ9q3HFeUnWTAPnXML",
  "key9": "46NryYjNHSPSHHGByZ37M3bzVJXssARqzd9gAagutpTaQqatzb4dWrz8mjHQtQC6Am7M1mbjVGRhUWGaGigfGSd7",
  "key10": "4vJe5dEndNCbThsViVjrMANTdU76PR8SP3xmNK4dXpsUbJS1uG1DjUZwGGU8zoKXg6pqUZsbxsWbjW4VEyzfcTMf",
  "key11": "3ophCV8vCKgNKus9MTrvoGr1DokeLmxkUv2djnZe4su7nm6jDm1AJAFnAm9QS5sqAYhsFknYXJRWv2umaRMVgazd",
  "key12": "2zfNLK7J7ZvXy4iYQjqd7NZwcsBgimLwwixUcY3jGrjWkZKhJ85cc74ffcQYySmSr57X94EqCqEdmvhCUFUNTePG",
  "key13": "5bz4yWv4pTP5kCpdLEZT5BBT4jrJ2Y2ygpNjA7sTpaJVsmKpYG2k9Kc6yDJwU2eKuC3T6VPMPMgyMMCCUS83ifMX",
  "key14": "4Eh52qyts3WBDyALsYHzUZXr7V5eQXk997vmRFPaJ53VBZtNwAfJEUywpe4SVt1n7TxsYcYJr3tPCYhrq2v4Btdj",
  "key15": "5UeTeRyqyXAKhEU9A2LnJgv4sqSYP1uSL5qSEm1yCcGNQ2pS1XnERbwj7Dm6uEPnWECAa9sDoQwj4usuEehbeTN4",
  "key16": "2aWax2AdxsEY7S6UtmqXuaedkEVpQZ1BFXjjhZFmj8xoBLmZKENguEvCejPNk3HZJQuCnbScerwpDrWqXt7HKH2w",
  "key17": "G6g9PP2F8yQYEwtG4biGupiEfXvrRLHzMn4gwRpTJYTpNJ2WqhUf2xFXrCGoz8u7YXEhWmyRpMyNm52NBWTiECe",
  "key18": "34AyLCr9Jjk2M1en91NbamEM5GKi399kdMXK6w3MRreHqEFCfVmY1cL2VRMRmMj2C6VENSqfN5RFtoXnij6wYw8N",
  "key19": "4fCztBhEQ6PDK1PKXms3YGW6TuTV94uU9X7bW4wGJ6MSS2ReusWqDwMGVhtkm38Nxe4JjKL711aNFgHuBVyVHfAX",
  "key20": "3X2KfuUC1zeL75GF42NnpeA6ZB1FV7kZyK9p97NudHHwBrNpf8P1mmRnsx9usPaSuov2FMWsC7cdwpN2ghBzyNKm",
  "key21": "pgUh2PU9KF3cGWbJVg1yZ3RiqSXHzi272Fvr9ZKqXsCdhortsCiV6DGNxFuE53gaSeBFAM7Yv9mP4Zem5CAh9TJ",
  "key22": "YYVeBuZxtSULKF6e56x4hq9NEPaYuEhj9qRui4hqgAHtjA6wYK1p4W7NHF6FDWcqcCcDR2qNMV9rbWSrPyKkoHj",
  "key23": "4rw5prBXheiq7Q8pHCFocANMNdDTFCrGpDLGVZyN54nhHE63koQ7yzr3RsKHtMa75AF11o54Y4cmBD65VXV6AiNU",
  "key24": "4oyF4txh3tEgHjFz8qhCwgTbjQEEtYeFTyZBKZDS76is6St1jgsvvxBQQ5ukUYrhmL9kPBGye9dW47zmsjia2zoG"
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
