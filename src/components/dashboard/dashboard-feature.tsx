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
    "4WzSZg61wymk9bd9Dqu6Hy4GqPje8SGQx5khQJoRwFwiXrrv96SrN9KazgvWnXR8PZRRTt5GWQuFYGBoBWiPwedj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JLUHGEargnjAYy1XoWQyJq7LYtEh4VZjsoPrYPRB5Vo5G9rk7GaHkXJo9JQ2TnWZ9hruNA596krjwNThsNQAiqH",
  "key1": "59wMQ3TYYcuiktpTZejdo2TvYAWsbcRhVwtAPGTrYkawuckjKubfAErCDrHDtyuzPpZ9RLvTL8C3YcS9jpFygYXW",
  "key2": "5NdsA85xdzHTERW964BVbj6d1HzCEkCzidYY4TzgcaaTENGSoqp4jdKGLoBZBNbGk7bhcB6UHYq4NxnaiAgwERoh",
  "key3": "5yHto9wSssvYQFxBzazPYmFTtnrRMsBjN57dk2zd7AKQEhj8afRFqiFiMzdE9okrfgb3ykFueD4WWTHhDxqMbSMo",
  "key4": "2ipMeGDbkhUsedB22dzTK5HBf9ireEta3i5yd6c7ZY39paC1astTjmegBe934n53dJAJJTqaBisSjM21k5YRVvk",
  "key5": "ZgrVJ93Sru2p9LBSBFsxeJk6NnFHTGNycFtC3CBgsjTUcQvabB9PZ57jC2UCJainGFBPZxDJfz1rK3eRF6xWc1r",
  "key6": "fKM8RZWwnpZTRYAJRmBGsqKe1WBdVJhWsmbPHWU7uoUAVcmdp2PukmK1JWV2rAM6KA7SQ9mEx3KQwHUNqS4JQWh",
  "key7": "4t4KakxmGVwLcaLWEV2YiYc1cu66XHiGr7JzL5gU2JbrBkbQNPFE4qoF537nMTxRQtdErNpFzkSqn8RHWjRn556o",
  "key8": "2snXeDkKoaJr4WgP9FoZCJ8ZoHtQxykN7fBW1hr7RBE5U99mnDrGNYKyadvwpCCRgkfgQv3293kUppUgQTxRnaVF",
  "key9": "4ytSNkHsrTvkoPYhMhycbD5QJ2FHiJi6BBK1wWgupE8dMAg326AzGovLRzvjVamB7tgmsqXW2WPWub5p1oFsgafR",
  "key10": "4qq3oGv6nvPKgFGjp2ZWfvaczUkfHw73YKVJ2nxvFMUe58efcM14Z2yGjaN5PS9gdkkJHKpKjjRBvSBcuHwKmCQC",
  "key11": "4DVLNcYfZ2fBJbjkeucHd7rws6m7EPn8cXyGk5hsn5L3oy6m99A1Ercdm4GE54ntEasLkj4FKtG2HiS7UgbjahQ6",
  "key12": "5QyH6DSeMS9F6z3ZS5y9DFeXQZ3F8TSr7hFGBqE76DvsXsTAsgEqEvysbsoN13GNFFNBH6H2VyZ5VsnaUKwZKTZg",
  "key13": "42z3fUUHSSgMAjogCKDG41qkdKiBQs1sxHuXb9Z83xcZTDU3rYuWfskbG57EWJ5nfbwS1hfTiqjtR6hPZKPa5HGz",
  "key14": "3RG32hmdSP3LEAkQpf3eWSxEpT1SdESv9yv167SogreZL3cE4867D3PR9R4Uphuiutn9L1KeeBoEwFJG7bjUwDM",
  "key15": "5Ujx6zj3DiF2rriSWk7f4sjf1ubVnzRaU8tL2BAtj53GMZfRbUfQL6mkSGQLYmWzFU7KgJBSjMJiYMUUFGnZdP5P",
  "key16": "32F1QkYUu8o9qfwY9BNBe45LHed4jnidVtAnFyknrjBcpK5rg76WugY8BM3krgShyuqvkCnG4SnAtaXuUXoRB7G4",
  "key17": "34r4pAsPRmQnsdUw1ERrt7s4fHwQQpVXdrAX97qGAJTfCwft7mtnL3EytG74YU1cjxWguUi4HySDCd1vPmbk8u23",
  "key18": "4yXVusya7XXo922dFsHxUps7MUcZQcsyUfzcfAqWzncD8bP6jsupLSAFRrNWLrn1NjsxHHzCr72xopaRWkq5B7v2",
  "key19": "3PCZdWKUEgn1irAZhe8EWSyFZwVCmrkDWwVr3s7F188MzSwPZRjHV2acoHfpWnHk7Z7Xz8N4XGuDoiySuBtNqusC",
  "key20": "66VM1XtjaNF6VWb2rCS38VwxbSo24J4QpAmEJ94wgBFgTYjhSZ8zMg8rRiAg6JAKY73VMEhWRinWzD784voNEGpS",
  "key21": "3sAat8wqp9KK2ZMaoLYmsYMPUgWGDfhDpapZb2xZVVzUdywb5C71424tYJJa21xfS7SAQVQdoenKbWq8ui9dSsay",
  "key22": "4xquhAmdQP1VbgpcSFVdDjz78Zd9W7o8xEZqHHFJX1xrn37DFFCasLGWJy2WJVvrbfVBgZ6EvvE3BkbMubP56CKp",
  "key23": "QzFvEG9sVadYLcPbvn8qRJRYtMGuxhMWY8y4eqtU2wSsHHeobmvko5rc6uek2DC33pvs8LXZJ6HjsGLnvQjcq6Z",
  "key24": "Tu69137gf9aA9CtG44mQUC3acxkWbkH6NDymX9eQM8o9ZMvdvUKH6TaBvpretqCL2BUd8XKkLWAmERxiKj6eg18",
  "key25": "NdjgdNn7cGrnbtSL9Nb51yH4ScRhG1YNPaRxWKYX9zRJZqJjc9PTvCGkbzLfURSn1Q7aAFZYhvnSHHZbkop5qDP",
  "key26": "KAwJff2dZ7w6Pv4PVKLY9oCeFDB5A8nWG6w2K6paXF9Xt7CP1SQ59Yta9oMSQ1uyveqLfRgb4LYZbzo6rur5KXZ",
  "key27": "3iaqKoFoKMyzRKd3LEfb61ySUn1jHRu2jMPEHzmHDYHJqZRNsBVpc7zUBRYK7FcK47jjE9oy2mDBQynjNqWhQ3NF",
  "key28": "5PzZ4HfJGPCvKfn8Xn3pfUHsPco9bcMwr7KnNZoGUXuWnrcwrBuaViGYLnL6c7UCiMQqickwKhhLE7GcvdNVjhR7",
  "key29": "rhrGxSw6M7LDp1yrAr38V4zAbwxdbYqEXLNaeFbkEi3JYiJDRr22RVFSDmyUmGYqYhTdZQP1y9hFcyiTGjjrxcy",
  "key30": "3WLV6fwN6nFX47NAxo8DSwmcAwMEPEsL8jEPkfpcQv26oYt1QSbu2BdTt33eUTDrWa6MLchmeuJQQypypeSJUBd1"
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
