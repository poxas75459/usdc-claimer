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
    "41JFALp9GMQ3jSL6qUuhvbtNyu9LxquqbhxRqzbsn46UcGWPbAUQD1EwFh2gavrikRzXGtstdhUrDqYH81uUF8ke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63aeQ87XPb7xw4GmmitoudZRu7rGckqktfriW6b1TcWzdRd7FURSE1FqJbfaYRkQEmWcZ8YVi8SdUJzZc5dkmNPD",
  "key1": "4z1h1gAAHjJ3pn6mK8YfjmS5TbDrmqF1JFnC5Cp8qSVB2TkzHG5yX1sdYo8T58JXRturJdaaTm2cASiY6CSXfrmN",
  "key2": "3i1xAJhruXHAn5bgxLfjk9486LHwusfqQHCRzUkg4WiHYgfhDkwf6kR8ubuRaNq3eM6DupNHboZKrAECAdxa9SdY",
  "key3": "37roqkt3Z5U7yX1r9tJwTqQg25pjYi6qo73g9kngrGZWPNoypSuPudNq5jZC5aeZH5VcdwsW3fMbXoAQPyXq6m4L",
  "key4": "4cQ3ji7LtAJKtcw7mgPU2j5MnRLfePhehnsYzsebpYdyAd14JDGrpDudaV7nA9XjSHrp6zdRXhUkFrEz577zc3bm",
  "key5": "3s1QcBa5WusftyTaK8ER95WAjG8bERaD55YJvYvXuCvmbrhRmhA9xYdieMgkVbaXQhvGbiikREJtjRRR6yU8PZgB",
  "key6": "5Mh9kfcWZpVmK2J67QE17FDbMZZ6MgDkgM7M4vRx5tt1vPeFcBb9DnZwhGf2upBteg7XxLXM8C9E8nHbgwBUNaFj",
  "key7": "247yVMDt9e58nHtZCZYcW18tMKe4Ru1LBENSt2kpBSyrcADWsSM3BDSX1W55LuNCPFmJYA2Yw6uGhvTgeVunNis4",
  "key8": "5trkN47gcn7CRSJiSsoxoZ8b4ajwzSmn2cxuW3dhZ9YZ6nh9Kvn8kJU6DoRsKtRje7YHDxwQPSBnRwdRDkBu1Dfo",
  "key9": "2seo465N4rVhPpAzgryJRB2aFok6gCCeuv2CEwyE5zLK7eFw3mPDsJngxRhnE82be2oSP1LWdRKbdg5tvaVYBm6C",
  "key10": "dn5SoJcEwnfyEAgJNDcX6XNkXXasXAcNUNuc29hbZfkBHh5Aj511rfE7e5aZRDm1v6CvE4FrKZJSeFBnfDk7jrd",
  "key11": "2tjVQMv4NBR8NZMPTer3jPL5rJ5c3HnmcNmaY66Wytjx3QfiFAmzdETV9yxkXit6XZS45PPrqZ5bBincHKZn5NzU",
  "key12": "5As689KZTJF2WBKftVDrYJbwtMZMvxMqnhMcnkhCAEEiRgN7vQaKur2WpXUvcAw7X8AtfboRdy7GTvvHg1mBU4q8",
  "key13": "22QffLYGgdeyJoGF2bgAZjJupXXMmWb2BEavRNp3FbjPZ1uWUPCC1KWNNQJ7nA7bbZbZyE8cCRxzreboUCiDUC5K",
  "key14": "4Ci2ipbkqcrbXWFARDDv2yso2MQegtddvjm3S8pEcUQnPSiCtddLW1BvcvfNCcdt5MHRoWfaZ5ys8xZkBkxiZjaN",
  "key15": "5U9YX1tSN1L3Khy71SXcwUgYYVZg3R8fPoDB6HYcMNhEY7jQm9QjqF9k9hZvc8zg4krN6zNPNQ4THxurbcVdRLVz",
  "key16": "4ZAZ5GUJGJdrSbzmMEZUB4X5LpTv13wtMXekqjQUeVhHWPmakLc5RFgYYNxFcGW5F8bQYAoi6z3HNN5hTYSZvrEf",
  "key17": "5S7JCATvbtwg7jQTGvx2MBrD48HxXYTVNBLiriMBW7QzoXT2vMDTg1Y6JjEdSVpqjHtcYAvuFRw1q3pAsGXP1g9E",
  "key18": "4uxhEE3X8feS3HQqN2iKXyR1gyByk9WBoZcJZBbnA3qR7C8haHrzo7o1pnoornKytavJ1dHsgSBaE2TMESeGPkGd",
  "key19": "2nAJEwtiAib7yyXSDif57Fnhzofs96CBGup66LpVnyDiQ4p9TcuH382FvbW6MbLzGknZxP675kkd1waQWW7ecGhp",
  "key20": "rDfmbPWnt3jZz1qc31qgcm7BW1qyzA5LPdvC4F8TPDUAB3kvP6G5Yy2cBDY5y5z7YuBWp5eSH1e7oUrBLPaQqdQ",
  "key21": "4DYQGJNfJVMqCuogyoN6uJJwQn8xnLWwAteVWJUCt9shN9L39pPRp1HJ83uMpGs2bkQU6kzY3YvHCuUoLZ28g694",
  "key22": "2VjEATsv41ZEvzN7afF5x1s38BFiMjyhmshS54kC7hMpNrdND4ghJUBpurZrVaMQUn2pJZpJQmmAGDDMhbmpEpkG",
  "key23": "5ze8x38pJ3Skck3kavESUvpM14YeppN7pAEeEBfuaRvKfoMkqKx8U2KWbbv7sBoi2JAXhudmMN1LKmcNW9tCLusN",
  "key24": "5WXTbN3ciwFN58fQUtNA32Dp8hyCxvEL1v6Z2kWLiXBYviJkBvYHDdiHJQYLFgZPWDkd8Qep9fAWJA8X4Q4FAtBV",
  "key25": "KVwahXfbk5vbcXyQ517q8AYiU7tK8qhAARtuPjcpYVTcvGFQockgphqvHbLnUTgBVabZoYHA5ZKeb82wDER4AGG",
  "key26": "59QuMMmbyhgViCnrbiocoNTtnWV3TMMGWBvAuQhpQhg3VFvcrnXZWMNWzumAi8yLtYrf5KPBGKojfNsVq5mQ51gS",
  "key27": "PhKJSmF588o2TJxVK13qD61DHtmav3rN2xKpWHsUAz8AfbYnJjPgQ8JuhWigHyzWd9AmnBDNag8xSkxViMoHbrL",
  "key28": "35eMyfeCgryuB8FPJSUi7Q6sLsemwKSnqSdGPRzYbe4nL43U8s2hPGhpH4gXE3RqXsCBuP6WSgk6Kyb5ZJa7yXz8",
  "key29": "6F7F6hTKebdud9HLe2ofZQWHdj6FRmH9G3QJrBM1jtCCtzVaxZxxeLeRTjY3Kc8HgCw9BM4o4MfoJ89a347GgFu"
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
