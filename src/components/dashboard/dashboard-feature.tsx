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
    "2fMiSaSqT3QddFtpzF5GmxpadePxNXH51WPJQY4rS7TmwqPaeGZSHTYHqMw8BmEGkDymbMuzgzX7hHt3ETSanTzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36pu1Hkhiu1Q8sVwj5Tdady44yv6TkgSYqpFknxomhcU9bouLwHYisJJxFAGqqQHXzQtxi6Vrit4fAk5Yoyk6KxN",
  "key1": "4GKJxfTzF9btN54bThw1ex9hs6QPkBdGHhqUBdCPdjZugCrkjEWLhsK1MvcUoEHKTsAq77fBN125paKYxMLv49pv",
  "key2": "2JwJmQ435WGApRhXMR5X8W7QDE3qYbVyKCSX6UzBr6us8dHMFwNUqjvS8hQ9uaGjrKkXAB2Ke2XEwkjm1rneHvdC",
  "key3": "5VxpRe7Z3WnCNNkmV6AZDGbHvHT97586NVbJmUvMoFYK5wH6NVxx75xJhK2SFZfs9fyMTDWRkAbv5reaUKvhRkmS",
  "key4": "23AXbAhPfrzLqANam1Ec93QWYEyT44jgQuhrRs6GM7yjajhUdQQB4LC1Z9atMcZ1Xauwxq54orAbkiezdRMLW6jy",
  "key5": "4y1K4hw2QDT2Mf5WPQ8oxrUxk5ZQ9EiiLX4sRheVx2HzMH87M8gQmbSRs1quKKGXFTDESQfLnhT2V89reTxFjs1r",
  "key6": "4CiPuhpRemhQYScuE6GqDrJKYW77JcMtYLhtx8YBbRjcmZLmKGwa4t2oJPzbWGw2gcQAgGYSYpxMnxeGq89ZYNk",
  "key7": "HFb7VFM5X2Rpz7JwQN3m3Q8yD1KpJutTjy8KCZNpPU9ajHHrjqmDz2H8UPdo4nGG2AAMUexzZbUMg9oxM3eqDfq",
  "key8": "3m9rx4UCqhzUpT81AxKU7ro1j1asscecrXLymBtvAueWzugzmU7xLKJLX4tuWnQQhNucka4bKTqTfnUejRhWJbXC",
  "key9": "3fWu8k3yedWcAHYFZm18DXy2oRtMT3BuQZqQnQphN3ug5qB8kkrcRAgxQkKFjBLUx7wKcfnQXmUketsVBjxirxtm",
  "key10": "C57AVzFw6AZwSnhQfi73ghVA96UwTbSfrzYdrBnseZhcJjNjfdjaEdUy4dd3XkA9KxUZERWSVaNNbKv9wuoPjDW",
  "key11": "59SDfn4YmVhk5inyxKbFD7wyhxVi1WRniLgT56xcvW9dZWECHefzzhwSWV9bqGTPQKTUBjSFgsULPSrjeqpFyD1s",
  "key12": "5VMJD6vdHNVpaVAdnFHnn5G4mWVLbdyETo9TBGVW8wqm81esQEoKKqa8w4R3zaA2YTQU2W3N4xgSqbSs4LbpDcdt",
  "key13": "5uHgLNMog3nmTud3WA16p38WXXuYr8SFdkMMdTWnenWww5co9U3PyKYDzxotxAuvpFWTEzSHdgJmqe1bUE5JsgbD",
  "key14": "3a5sRFSN1FipHcERZus5kobfsUrtMHYPDhFG31ZfmxKWW8uw3FGQcom9ahir6wiRjmFX42DZriq4qjtfEbgG7Mwy",
  "key15": "2ndQTw9BH8d6tcFacFoMam86hUmdUVpb6U7dRBUUhwxGWGdxNHAv95vSeMsikDL9zA4ju7WxyhieTS9VaAyg1rJC",
  "key16": "2usiWy3ZYxaxWxTHv2RxBnjKKc4Y95Zwbdcurna8GAYnp6yN4M8BzFeFo5qMx53sdDQ1o7DTP26Kn7amuF21MzWH",
  "key17": "2QXX8x69BGvAUyPtEgaa7XpiGHMmRBNcfygFHnyfQXGQjyb1eaZmXuPn7KHPcdAx4RqXfLYedMknC8xFXTQoU4DM",
  "key18": "5YXP5mUT5Dvu9Eac5m9dDrgssaapnhyRzTFnLBHNLBStj4LTc8cKL2iuUHSQ8s715gMFVUENvEQNi6KPhiuk7L8m",
  "key19": "3upypHSLPRbc9VtNeBcfeFj3JGbNXhVueDCVGeY1CQrpLEQr4HVHZH8Yq6QSLBNqJb6TucuFzxiJYYZGeKHSCjFR",
  "key20": "36Vna4HFvh7Utxg5qdGBvf7mqbzugsBGZuCSorcDWN54YBv7zvyPEG2L1kAC2S64pUKXjgwJoxJcphFCQDJTEKGz",
  "key21": "2WCw5CHKZJRXVZVyXF9xdpk5GrjQ2YHvWCHdLpEotfbempPgT22ejuHWBcQg1V6LAVVvG9RNgVfxVDEDUevptVch",
  "key22": "2spgaASBYshfFcZDU3CQvutUPTnmAUBa4gb6Y9ZaxVJCPFMf139FT7ea5PrvFbiJSsAXWuKTBoJNrY5i4oriYxEQ",
  "key23": "26Bt63zR41UvhLhDJVYQrJr9cgYKoXCyFh3uV4pBDtjfqWyHhQXNP13izdBZ7EieJqneUgXyrAvY3vBoEfBKKFus",
  "key24": "fCBCS7GZMNxbbcxMKAYXgdMRKJEyZihdzEEEMRsw5d59e2JyhweUDEB2rTzoVezYrPoMkiiBYzF3Gnkris7ywHa"
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
