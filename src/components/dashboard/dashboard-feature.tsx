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
    "5LoSiodXekMGiYJaw2hVhJPczsGp8S7ah9yr4C7k9pTh3fXyQ8oUaeLP74nZNSQpUgLNhxV1hpdQmfq6zHNniRsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JNUAS9Zu93FUpKmecXpbWTr5wLQVbdNfZimrNUhgivRn7ZcYqQHzVZrT2Z4juksGF7hBwtEf7M5gU3Rqx5LrJth",
  "key1": "5Rb7yYeyT6w2PnpWd9CpijbntTT35ahq7i1LDpgEHPFzpXmUikK1aJfXqMdijZ9m1gsrZGQ8FYGpY2SYMLeAr2De",
  "key2": "4SadEqVnnvcchgDSmnKf6aeM8BuMe6Xco9mHf4JP8j4H18k6Ptde9TBt53buUQUW849yyU1PUR2RyrQVSpDmfsXK",
  "key3": "3uCAdqx1nRNSYnwxoyLj9Po9yFPWRkPbZADxkex5j2k4Cw5AE7F1dGuu5kpxCLjRjwCyULxmSdHc89daUn2hVsdp",
  "key4": "BdWwrx5tS59iqqzsC9gLHVBsBsRDPDrjCm3z3Su8Cfke1EjSocqXQmQUTeGKEdgfNnLQ1G7tfkGrmu8xo6D2QF5",
  "key5": "3ysoKKEhUKrKmCJH6DwTsZQGHng38tqQtmELwM4JYNttRTgoBfw6S23wYn4M2Zk8a8gRhMocGKadNYn9k6irDeyE",
  "key6": "5QDzacxGRqj23wqkpaUVNLuv8LqXNqjaDgeTDCBYK5KVuf98sf15xsqoLYq4amVHP3QjSReLM9VCqxAx2KyGXT3Y",
  "key7": "5CXEnLwQ9zHdyRkb75xoF72JMrkFQDNtvSCJ4RAogNFaQATu3NXrVTuy3uDws8SdPKV6ZTnSHEtLLptCz1Cw31aQ",
  "key8": "5VsbqB5tyqtuBACsvpSW9wSB9dMYSKh9j9mTmyYSXawwkbawLPnS4kctZPHpPtTVV9bXMVXCxUSFUb4gSVW7nWkN",
  "key9": "32BU7rhvQDveQewsNBeyvPVhkNBVZJ9JrkhbjZ4pMFrBoBwaKhQzrFfMWiQrYBh1FwhrGN2b9Xud7suWrifygc73",
  "key10": "dVeXoU4FXm4r9u2eGmk6CZ6NPJFbPpxtu8xFkoEQ924jvreWdxyBLJ4mB1rtWf3gwC5ux7Xg6ebwPKN3zsBuFcV",
  "key11": "5FAKi6eUUgvFH8WR7j8vkogLEAnmGoYfjyCqZJ1v9KFmKAizsHyM6UfTCQ6ZVujffA5eCQZeQBzWTjatbLuvgbP8",
  "key12": "2fWaBkvhSXDdpDdRkAjohRmzn54187BP3mYfJzL44AKpmqQ21vyXyq5xmGDVN6hvxicE6FiKs8So868ahx53Rocr",
  "key13": "64Xw5yUdRrLSebAQR3KsjjmHBMnN9wtar8m14f5AoyRDMnafo1sNkPXuBGHzRoGENLEbrK7jnKZAqS9iTHk1hkfF",
  "key14": "4CQ8j1WsKj4gMKmocRQ6753DTrSGwvoe63ubWn5gFyB4RuWHsFBwny8Tm1hpQQkKmg27S9pE3SRqg8MGNTcrGa5H",
  "key15": "4yqsT6FCVVVnDJtbu9nM5e7HUptV8bnSPTpgZk7ydqsFfedBeNZYLuXD2E1eXqDnzJzMUL6LVRbP2LB63FYJet1",
  "key16": "kB5UvsYzM2CiWABxYMXaMESnRRDBm9qkbGCMDtru5SJEoUxtDWNCUJCYhe5j9C7Gp7QpQinq5kANcEck4TRXva9",
  "key17": "34pUivzUVPHvau84VGWPwjoWg2AJyjsNUHwnmqt14Kep7XFJBZu3S1QZrtJDUqhMQwUdZEopiFN7YULjN7QaDtgK",
  "key18": "5XejqvnJgVCoXndDVsiiz96NFQUrLieJqbNNb4sq4ftkEmBhjuYzp9yPaTLPejJFFSnNpXVEd3Noqbhy1vZyNyeQ",
  "key19": "cnaYsWYwmcKHo2dE9iG8j193V3pvBG9SG5kkvWFkSVscPpggzAL8GtpSX6zSgYrbdw3tDCegwEHe76ai6FrnhJ8",
  "key20": "1jw1fxbs6SWf3MxnWEd9oxWWaHz5gS4KV6iwVwThB5CQcRQNBiRkiVhsEVAbv5hWCNtqYfX3CYCsK1MZzj9WNuz",
  "key21": "5KL66kctEDPs8ZC4CX3PTQBuTaeoqy8ZmtEao2pFN3oDtuAJS2i6Wt8LcnfL6UGS5NwvFexkJZ39ycUp6y2dCTZq",
  "key22": "yqKQchwzpEqhtfQ1c2yVeUQvegATeS42j3m5ZZVVB7NxLjyP7zyKr5mrGjif6boRorcjVqGMvBDMyWp3j93ctwv",
  "key23": "4VNdgJf6hzj9mgNnBjBaMWpE4jN7RhX6QndefQfoeu2ZdbDesE1VB3RsXay2PNBaRUNYuLFihAh4GBLpNQpEsxWF",
  "key24": "4vK2mh9eLP3MoorxvTNWyYSQozFB69yja8mqRPCtnwzFpQaZkPZubdDiBdSA6UQEZHmNdo48bPkx4VWnn8eQc4qx",
  "key25": "2gQY7DX7JLRwQYrs9rsjP9BEbrQGS231jrBzP39zKU49NEWNaVLFQSxedBDEHiNKfVV8YTsWR3FcACET68VRzfhS"
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
