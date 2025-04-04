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
    "67WZJTxGN1UNj26B4dXoDkAU5UmUtYZQd9mZ5LjKxRxKCXeoCohFprwGgbrynvdN44errXUDcjWBBCxNBmVaT1YB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f4s6TSZoUqicqNaXkQqnV3WkZXZdCoPPNyZEYBpDye31LhASgKxgJLc9Eu2JG8aaw7gxbURHuMXboZmD7ev3MuM",
  "key1": "3ZAUDRVEFW38SNmVSY9ucvntaQSSJfvCXq5kYCFx6HVjxJFNzTrUpj9gPTiZo6AA6jA9TooPv6XdLq8C2KQiCCzE",
  "key2": "5fxLXRy7EJTj4uqSnS7eJspqLjohXfy4L7b7NLELAVmawfZo24P47NfNeTVU9GW7Z9tPh7BupQ3APLoyDjg9pSR9",
  "key3": "3dbYysK22WmLwsfgquGyQ1Tw91APtQkL459MjS8p6jBaauCQvALDEmfXYUhSLNHCZcDuQc5TU2CGLbYRjFdRX9X5",
  "key4": "253TeWtRbbNvhM9dj8c4uVp2wFh82J2dLJjMYL6T9iT43daMUJRsyB3WukWNraPXgnNwwdX7vsx4RQ7ao87L87g2",
  "key5": "5icZKjEbkkWP4NnciHkPfi3iiJghjw6uFb7WNtcoYfZwoMzpGMzvbnhDTr2eLWPTuximb8gFWQta6piqvSDjUoxv",
  "key6": "38rqY5EdCAm2UpgikgZWZC12b369UEii2wktSmgnje43oNPDzE8p5J1pQmxzQxPeZEDJUewwNgqZePZzKvHYjKt5",
  "key7": "449bZumXTihx2Rw54wSbSKbfkayFizVayj6KMU5TWn5Df5K6AZPCownAH3j67ijDkxhUduQVzjmWfzYgtA7TEJ3L",
  "key8": "4FdqPyMSvoS5PKcsZUwJG8jpXJrPUJmk7NJRz1yTCGJJKrETs5hvGvjxSAq3axeCidckAYxMLZKt9zBKoH3EJuPU",
  "key9": "2mZQFYHg372VU6zPX8z5kzeL5dRHCGxk5pgAyk9ufjgnrmFDfEAeJeVzbhvhYh7JqLhLV6GC7iGGb8WjAn1rc7NB",
  "key10": "5GT1ForWJowVpSwE7ZgNbcHYS3b8N9XeWmoDopSGmhL6Lm8dRdYVNUSzT7prb5gtLCuXtVHg3PUX9ibCn5DppTf7",
  "key11": "2gS2qy43vGHTkANxF7GdNJK8GmWe7VwuRPfjhmv3asFyzmrB16sWT1yq4NdFecGeocbrDquwMVAHzkKAjdUc9mwT",
  "key12": "2pZRqQASgm5qpSpqEEpKDCkYeiv6zsRa9CsYfofypWVhCfuAbpsnacfKT3nbyeESQdJpp4e8vxpshr9ChQ956dmm",
  "key13": "2aokzUYz4tngNowq8mrT2HnzuYqDwKDksSsDypGfWr29iUFTUTedxihtGANSYuaE5nhgC3hfqe1DG7aHJ1GCht2H",
  "key14": "2oDxj6CSQEtbvG3tm8jQxUrrGfUtqRFTs4hf7BFo5rCnnpLbWD2n9sS7Xu72n9paE4hzdXRN7tFg5W5sEeT2P5QT",
  "key15": "2ZTyU6eNU8UwYzaUNcfjp58ERhQ2E4QpNa5SQuhVY8LWZLrVkLTt316kXrBrfhQef7XNAKfG5LSqPuTZ3K3Yhjjy",
  "key16": "3mhiEaDZqaxtSZBoDkF2bdYYaPwhnqkBWkk3ZCxjwqZkHJvxx6veZbCBBVXvr7zqyZnDRq2nUBgf8TKAM1Gy5Zcb",
  "key17": "2sD8agVDu9E35UPTyZXHrDneqHqWXyejgwQQ2UYSNXwdSWqUQBnn39tDP16ZkJHafDhD7shPwcui7rqkD8vrXKTX",
  "key18": "2yKL19RbebvQtkhPNBCWzNLkH5MRExsQAPaEFpzNDoqmoDr1KKJzKPBS9GVG3hAHoH5AyEGXp64pzdzQdRL9bHSD",
  "key19": "3QBVsNhKfBedbrVUMiUkqKt4FuaW7mjr5VVirgeqDPUFkUCyFNYVKGnRKFkFrGavTiAGSWBBJtFxWUaDYw3Hj5dw",
  "key20": "4sm1ja3gJASfV6eyDquAj5ipiYtHdoJMa1HiSanc73muxgVEHLqDzfTUi7cViPADAveFk52cZwhfUms3B9GFgBrt",
  "key21": "5ErUe8Gz4E2CedS97fC4qqcSNQj3Q8jWVptMQDWcCeoVDZ81wFc8p6BTyRrXV8bT46enrTGEck6dba99afQWqN64",
  "key22": "4HGbbudtQzvqwWUitZBpdGtZnjM3PQAFR6MHGu3au65h7fCnkKp6KNUNUbPQvMppdtNswNvo2BTXYuA92BeTZYkG",
  "key23": "2MB5NWR6veckXrm625KSPapqX9cUDLmpazbnqBWD9ykTN5PgEpDSDVfFFQPWVAEwZH3WsvedRsoRehXfKtpeEhYt",
  "key24": "45tM76kvshjZxtJxdZgBXs2j43XCjmkYSqy1fBkQBnvuK2qjyQWTcgw9ksd9kXDeUmrVcrTLfYM5yBfGcDsSWAym",
  "key25": "5Bo9YAWTzmQEVcRPkdeuaok4Rzog3uZu9fj1HpMmuT4u6qgKirG4tTf4ZqHXF2DAEbYEiKY4aJZTA5noM37A1Xg3"
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
