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
    "64EM1paGYimj4LExcWkDjZXD8NzSYzh1vDGnxu5hXXsAg3XeuBUr47KnDX4LJYRkzVS2oqjJmPBoEsAMNzkndF6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZvmBgN336L7uxxGAUQoitkypNSLwLsdZJ6BNTegxuBxoNt1H79hWqNsevMNyWDx4UT7H9MEFVkjG4MXTa9TzgLp",
  "key1": "hXwmcQCDjrRxL1smXf7AS14CHkHSAZKw6RCzEU7voD1uTeCckdiSPZ9n7FsXo6vyjS6wA5RS1vNpztYnKxMdMwd",
  "key2": "GQ7pPQ7oprqSMM9mJqoxwgNhKW2A4MHigz7Bh8UACa4ACjx63rGuxBRLGsmfpaPNgUfszen5hvurqAGQD49xwv3",
  "key3": "mJgyjYuK5C2rD6zMt7vU17rZ39Z5gUShWP1zqVhJkXfqZJmVPk5kUBUJLxzEWTYwyBGgSnAK1myPyCTiqZau2Lb",
  "key4": "5PSGSLRz6vvPRgUka6dzLWwEutKxidE5ji68pjT6jXvcWqxFpYdL4AhiqUfRWtEckquwcjPe7U1Tc5JSYNYwDmhB",
  "key5": "3LY39UNY8a3yzY7Ey6DYnMQ17zYHGXiSCFyhACUrKFp2q1YnF1VcBVqUdZFfzQzQBj4EN74Udoht5nn5t9u9Gxn",
  "key6": "HEP1US9uQ5vCbedMp2GsNs8vUz5Y5rE2i9rEtiqWP6u9YZz5LRkKrsugaqMqpNHSwTrSahwHgdov5T8Qw1h9Zmt",
  "key7": "4Sdwh9xd8BhQA44a9wr3tMTHkGuY7rxd7Z4pnykTCy3d2namiSvPQ7wzFPp9yC25ViM1EM4P1uLcLAZ1BKni8FLt",
  "key8": "63FHBiSmdNNMdv4SG3mAvLLSLjRVhdcXKWdgw8nLPghiSn9BaQGSmQr5jfNH6sspeWHdggc3tBSyEZU5GC6j4qf8",
  "key9": "qpi8LaXNxk1Vi279eqfkiXd3CHc3N5F5zHoFPKu24yCMgWAyYH8guyk3nbd81QJtMV6xkizDL3bhcaR1zcy93vF",
  "key10": "5nKWzY2GZKSrZA9qZesfGh6WLvgkKBM5F95G6mJ8VzCPaVDT5fZqj4BuL8J9GxPUyZUtkrLBQ9QQfRcvR4KNzPJN",
  "key11": "xQs9cFN7QRNSVAKRLPT3PX64ei7YH8vCf2cTY7EDVViagg7Fpb3grgJwpx1kQLJ85ehyDnTFwhKkcqh8KcWGqEh",
  "key12": "h9zKMHikGnU6wUQCH5MGJA7jenmZcG1EcXy8aDMiig53EAsLoxMoCfc5VQcCuoFp5uULzQ7nvQMSiGnndTQQT4f",
  "key13": "5HeFc5oRYfHUD3smyxP4cAkMxFBKHUXsX5S6AkD9uMW1WFaTRZsoarX5qAQpy1J1qTuA8Zw76gWhbgJvtxAgCrSv",
  "key14": "7Ui839wpEC9DCeEtaAfB3vVS6E4wP1nMVuC8Gs2XqrTWeUe6SfmsY2QEA2ZVLdVBr35ChNauVNaQnX52NRYLvPe",
  "key15": "5Go5Ja8N28JNpVgY2rswnqmEHuCX7iom9oHgpkhnhZykBtom1864VfJRG92hsP4ojdunLX7jkza1fBjhC35mRt2a",
  "key16": "3Zb4HEQYGzcEid9LuZQo6d6zRPPbT7xmP9HeRp8ziLaVein4b1cmoziPy94qGmoG29FFNFE2LUNJYZ42H77MCnJm",
  "key17": "72Vbhe64ubduvJJGk9PanEhdS2xmdWw4MrdnTUmZHkYKfgjvg5byWAjszv4KUYewzR5HTbtRkSWiPk1nbuWSfix",
  "key18": "4jZFkyJWdY3TRm3Czwroakfp8rp6z4TpW6PdvkUUFcs6XxuQ2nafwu5btXLNELX1SNX1dGT7sNx6JLk28Y2KQFsC",
  "key19": "43vPuyjywnbWgXrS1LaMgKnqHV9sZ3U4xjMy3XGua3rneBgMbeaNsYgbuHBovWHixNqj5VnCv4bGbVhDF19PN9RG",
  "key20": "CJNe7wHjkpxp7evdsTvSRFM9KKrmKqXupxVWkTPbPZE6APhBhwAeKiZztxjkTvdqEw7fDb4bBeRB6KnovEin98q",
  "key21": "2jkGZbDeiSMJ1Q5WhQgRkrmCNmw5sgQYgFnrJQN1e9ikWvwdxBC9PiCd2L74vXfSdgj5qah1JDfzsATsLQsKWc9v",
  "key22": "4nSsm1VLhdZeujeTW6wetHoZD2woGUS5ghoKGTFtjsnTgKJvcvd7zyc41xN6ksVDgFgXZRhJzp6ErvZmiCbi5JEa",
  "key23": "325rMEVo4ecjMkaDCFc1MZW2ou5WR9LamMtYZFdde7fzzNieojJxrpkQdP8NwL9GpVNzM8SdJ6m3vGeyGtZeZM6h",
  "key24": "smhppe71dUJUXGe6cve9TRAL5EHfh6BdSCv2dTRQeyAtbfQpbCff6Ebh5BU53G8TEbWQbMRoq79PSHcdA4w8yY6",
  "key25": "2GpjEesxHYvEh4VRe7WzcbU9nRhmL2AYHgke1HZz3p4JGBRH4cXFC9s28x3zFW9hz4YCVmsZq7KamLSkDJGo4B6E"
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
