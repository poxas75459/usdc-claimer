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
    "NtLihriioSfL3zuXwUvsi86XuiaV2uLLgou8zowD2rE1wWKzA1fLq3Qz4HmGrGcx86nBVKcnCh78XNhW5C7LXWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46MdR5dPuuY4BBQg3m3H2UeFeZuDwpQ6KxJ4DaPZwaMAGB8z6wUcnzyURpvPKuYefyvPGf1iqJb8cq9n7NtCjMyC",
  "key1": "xCXsGDSd3KXpssuucgx9GkCr4es7Lc7eK2zrovcPdhWMHvJrdCArFotbwb4KiBtewufi5QK2igV5pJLeZ5RuudK",
  "key2": "5GduYz4Goipx655ExYmAxV6GKawkTBDvhtLseXPLBokMHrfuJHRNww6aH7NZCdjCBqGcTqX7scxrY8h2CXVtEswW",
  "key3": "4LyGhaXcCEFVYFpKZZsdcydri1YRThh7kgGsbHqobazuMzEBGoAXUWDHWLDKJYhK1G9yqYkckiHKDnD9ex9XwejY",
  "key4": "2Nmc98NbCuvZBTMnKWb2qqy6Yf7FBsfZUmcYvoqevjMLuqqmAK8mCvRhwGzgcezvyDCCmUrapFokbWbnfY5i28nm",
  "key5": "x3Uhzrp3BeLKQfJbAr46vkeWqRCH8jVyYB9rZVVZrLmvgTFeAZkbTv3LaUGxrz5HiaAuZ3JBxaXacmcg2xwYRNQ",
  "key6": "5igVSBZgKs4RBKoyYgsQAPo4uHvmPJVjSUKsBsYLhxDPexK6STW3qGMSxnRxrWuWRUUHh6BvEitJSFAYA2WbHe5L",
  "key7": "2gBfN51yqiEneNxLHvoRyyWvQBrDnrzTjPD1F6iWoonBYSwV8H1W7zky9K81ZD58gLsm3vroodHqGYvS4WSjUS3k",
  "key8": "vUHwE9wj7YpqkD4Ea8cFCqXER5Rf96zjaV9JQ6ruXeeEmcWupQzdBgRM3znULSCSLjJE1LPP2FocXsoKdniiW5t",
  "key9": "JcAmjCF3UJjb5ArBDLn43G7CQMrFyUNtPtbgBydWyvESQFq2FsqrnAvrFoQBZgmU6yWwT3z5At8pKe1EoGcGojz",
  "key10": "5jpPe2CnR1KL8sP7UvVNytqzkamocod6MDtwPLY3Qch48b5F1rjjHv4wT13gD6VXhtu4ujQFrbEXxiuniJ6Lw5aH",
  "key11": "GdztNryLSZfkz3qr4pyVhqajSpYdsfYp6JxGP5jN3PcsdP7iBgJSC19bhdnvW88y5ShMja5cin7B5rAnxXedqMs",
  "key12": "3weXCghQAY15faVWk7h4Ko4UfvPQdVCZutCyXsockDxaLPp29LqXdENvPn8y8MkQ2HbZNz9rqVoYv91z6S9LbYj5",
  "key13": "sKWppjXumuST7JXgV6gFDmJn2WCpz33XDbFtrsJt29j9P8P4xutUJNyyU91bQZMrXUEZc9BZ3ynVn2HpE2WfeSm",
  "key14": "3JfVWBGttkwt67VUA2HoxsAubiHNEPvtEpxjsomfZhjAeLXBDLCPWU5sSLHavw3LwZTgn8TcU53C18eTWYmo7Bfe",
  "key15": "4sgwsdG7a4etavzG5of7TV2tYCu3ft6Ci4nPXDbQdWtFxtvdJzgueTmaxfrZGoKv4oBs1N2ZTeJQk9oCVcZQ2Gft",
  "key16": "vSnfeyfVBUAfs9gP3G1xtMMrizRYedhNy2CMRS9vxmHdQDL46tM17AnDsmqVvTSf2ND5eGJoYP9W7Mb3ZpFKbc7",
  "key17": "2zHj3g5QzjcpnWREqeC7UucCxkueMfRVoHe8XF85WiZ9KWxv9Cf2xXTv4UVTTqbhmQXHXNsvVsHtsuwJJkYSNp9w",
  "key18": "31TQXPutYSd9AzaLS1TSQUSGn1iiANp3Le8PtgWmGLRtmXe4KikgmYsfER5QBcPtpfGxaq1svrMugFQpyPiDY7Y7",
  "key19": "5D7CxPpEQ8TofiugJ6YJRDZn8tQcSuBL9Rm4siA1Dw6qVrKQkHQjDNmf2VRMyARZshf2QVToXTzrGzB9Up1jgfvs",
  "key20": "4YJYtV7BHsusEYNVDYFZx9TKuSeUs4KdioPWYLAYGRoCccScA3KNZT2ZbJTyjKaoK24QyWKVJCh8dy7K9V9w1A8W",
  "key21": "5MF3vKSUQb3GmWdmUVCVjSCjwogpVQaSp6aCRBd6m5f4g9VUuchHq1DsQSxG9a3xR51oaWXtPpQ88bsdAX7xh1py",
  "key22": "4Z9PL8Zr5hN9QyMnDGQmErKBjm8jJ429uPNyBrKwH45E68PwnqL6Qs7fCAdbRQkY6aYxkmmZFJYz1dXiP9CXrGQS",
  "key23": "3Y4FviuFECpkNVzw2wAmwnaqg9REHnKcJweRWwKmMTDsUFFHou2PtCSrBVE4CgaVqTUhEECdUZScoWLRCypPKuHD",
  "key24": "3CbqtiQYNdTfMo8erdT9bErQJVuiaHazSujkQC1Bab71fLbqnwKjxaXBKP5hPZzqDzmKCBi9EVhv1aP7AP93k6y1",
  "key25": "3hzVoLisU6cfpA6phuxtsxQewoYsdKpLuyhpVYSRwL1adM9ndistqtugEj9gMfXzAeAwaj1fiW3rHvhRvb1N4y7b",
  "key26": "4KVmD3sQBqDSH7G6josngFP8XAgqrtBTG9V7HFwpGWA5bPHzMQ3qMKoU4AuUCJJ33sAez43RKpwcyukAR8koVuLY",
  "key27": "2v3pUkk9pMZikrNREsrG7m7u8m5H9EdCCz6x8sv2fnVdqgGK3Qzm8BCQiTxSFy565mWG75Ltvw2HDZpR7dgEjZLs",
  "key28": "48NiPLuxCnfbKpUafQkosfFApbWTG11heaAjfwZB9fg6JEeBiDT7aMMy2ucuZBJe5AFc2yqgcWoKBsTUYfwJbb1f",
  "key29": "crtvMg1JboJzhLQQMoLL9H7iecWMrH9Xtddhr2nL8fEYW9Zpyf89n51ta4F39RgNjyYi7XtqmaKdYGWvjsmDEQH",
  "key30": "5oi3cnyHNS8Z14GpgivvNLs8jHaYwM6jr5orXrSpF61T6m6uHSZRVwTpXH2HDU7V7h6DMfJdC6vtvfDSFU5iiEei",
  "key31": "4VYen3c2w1EQFSXQXTjbDBuuN4MJbbAjXnzb5Vyym762M3m86yVE3QBbnyiNYZDQzEi2v6oKXUEpLMDbhFhEobdJ",
  "key32": "5h7wAJHp2g1kDZnfKd3kHVErDNLBSzbLpArwsB5pWn5PynisVBX9hzfrPvxpQVQhywQfXhPXbx5nQUPykS6wBcD1"
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
