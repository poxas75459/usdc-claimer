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
    "5CLwjPWmhnR1YQySYNhGbXMvEPR4qudJDSp7az1mtd2Vv1FwaFfq8m5aAHfuf8jAVAgzCrmV89f7R2omybhk3XJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oS7YDfnaeC81BfyqaK1SKi3RrdPWhoLJxqwpKyimjSdLfpPxMuJXnmvSyU2gTjeumMESssuEbVUf4Ew7EqBjFxM",
  "key1": "297fx5wkrkBLBCidV5QRP8FkcMuCt67GFm5LAUUBd47rexMNbcVNjW43vuo6nMAer6d6xXuDVyLT7C6cLea8cZT3",
  "key2": "KSJufQAyANkt5QgYD1NVocH6r8nBr4y63NsPeE55ojCfogSFnTnEKFxmqfBzuFnEnDTQdQJdhDMo712fQa2jQHF",
  "key3": "3V6UKovY5g8kfsuBjWdXqRhNQS1A1GXHC2JxTsmnqDHwfcy3xU6YYJqS2NwFXi6S7SedwqxmX1veiYKr1LkWg1ix",
  "key4": "5dJWb3jrqzixt2honjb78SoQQF1zEDpwUzW19YmbFETESnYtzbdsxCn3UP9MLon1KeW5X2LhS59QgvwjoCr7KQ6C",
  "key5": "5jVko2TPpBwM2C3NYeAFRW4zCNN1KXrmwPQzkd8dLSgy8eZbzRyugiHmcPwjS2B5R96UNXcag2yVUDjGUKgSXsF3",
  "key6": "cgiPGMsFkNXmUXMixNUeqGCuan1SchrxXqMYjdjWauoXQfsthFg2sZVeLvg9Q377FhXmgLe3ZMPSKTT3jin8Zss",
  "key7": "5QNYphGd6AgaRVbxRfpQc7wshHYvWE8aoENCnCNSf9LKmmdkfzZDhgw7BbhmY5hhcHcPCP29ZXPCuwE73rKrpFz4",
  "key8": "5FR5NrQF97BTRoPYt2jw4jiLW1f386xVWM3TnAXZ6ZoWBb93t4CsNzFuMjrWsM3Sv6Pd1NspxTbpJ5V6gMDG47cV",
  "key9": "63ESHLHjTGDAcfC7Nb7XxraJSBVBgfWJUpquBbwFh2EozczTjw2FsVqwzgWq6tvcbcJE3XSef79Ji6V2peDykexb",
  "key10": "2v2kutWUEUqw8reXyviCAz6KniKV8wd1KVBqCse17DbKEimiS7w3bQYFxXrprUzfadLxPqwLCwKXMZLTc4SsSv1e",
  "key11": "5MBBrFKBbLy5fVf5KBG8e3nhsmYENRvUW2nDoi2vGKJBvvPwaePmbyyLcAvD6cp65ikUUNMg7vSMjLqwfGuV8drv",
  "key12": "4W32ritPMbTRZocUR9c6mWXr8F1ec2pMMbsjMc3FoBJcuWNuH3WMVD46kmUqnttv8Ppz2dte4JLM56QtpkFVHAFq",
  "key13": "5oECtwWbz9gy2gCv4ZE5nCK3nrp6jjWWyeU6YBQtC4WN5vvpQSnxWSwAdP63GzzXusXV224L9Fw8PkVSyQxzRxPB",
  "key14": "2KWELvwJKibLB9mGZFx6MWMyqRPdiQAEaQXdnzughZ1Cs2b8XHyEEBteLo6Ux5HDM5uBqHZSDnw3wZrUT21QFV7V",
  "key15": "3h6gt5wTuQuef9BJbtpSUFvjgbt9TfUbKVnuz3Zh25VyaYmdi6qGtWnrKP8mE6ig4k5iFtSwrPvWWzwzjMUEjzLS",
  "key16": "FZh1hjpt7FNQikAHxcosnFputqpGQr2RK7mCaX3Kaeou87XHP1dZxK5jxwmQW6mZNRcFRmupucPYh4aWcR4hjXP",
  "key17": "3JgC3QBYmR1MTLyoaD66ExSDQFY1wVHgdXbXiksd6gdHZSitxUG9H1doJYjkQco5pdPodbMHe1JvDGEh7yuG8Few",
  "key18": "3x3weJi5Qwu5ASxbwe4BtHyuJdxsR63aM377AgsWmmE6y8FugkRA8DNKyLuqnrvuFhCUbsETwHt3o3D6MujNZRW5",
  "key19": "3J4VrBiTA26SooiCacay7yDhp2431LQbVJ5e6wmph94c9NWW418ayyHJ3xFHQTAqJW35L7MzDVZ8xAv1C7XsbxAX",
  "key20": "5qGfqaRvr2krRHfNt5HFtNdhDyXgkUqBMH1LsLukPpVT2mFczAhHedepN7BoNNBs99bu4SxwTmPSrGTQR4DsXmGm",
  "key21": "23T3ovuDXY2ouvX5nCSjLhYPW7JoQ8r3CPbbz1E6xZC2eivYrrhEQXY4FDVNBmcDvTmyKcpSr1tZFQXkToNyCa6K",
  "key22": "2tqzKv8uyMjDfScpU8C9uXgQys6gLzDBiMhn5LNZNGZa7VYDnX6qg74p32mVFp7451jivRUmZQ5Nq73nWTm7MPzH",
  "key23": "v838HgbbhyoqiXWve6JRCjDUfSYnKqbZnp9kUzXRzWnAH86kem8vBA3bP5harZS5a9fuxwEXM7bGxoq2hFuz24R",
  "key24": "2LzddNomZq1Cs15WoMWqn6DgqHkY9SSkZfFEJiHpYkwmQVdYFLweLjBPuvZGECYQdTdnmdJAvWwSwD22StgwPLrL",
  "key25": "3v8mPu2Fxqzxm9k9vtGuDVjqDiq4sgn2moLFDRw1TzJSJfCRg1eNsT88bBCAZKHM2agm1CR4BXM9bxfAXN77tMoV"
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
