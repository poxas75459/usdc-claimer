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
    "4V18riwb6vByFbVD9GXdG91qdtVJpDqHJfR2f8s9oiVfTNcBDyx3TmiVUS5cnFS1TCMoeZVvqUpj58c6xMYxGvWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vHRraeJQZHJ6isUMWf7pnWXTCe4FMfeBAfwXCr4oScFLmYe7oTVDkH9C1vycPS8dUj12JCBhsSumgLXXmvQKTwn",
  "key1": "szFu4tkX5zHXfGxEV4uL9UeAnkUV95qEEc8AtS6hUstrctCyL7ZdrWdG9y8Ga6UH9U5mfTGHYiBam31Ki1RDuoG",
  "key2": "BJ8FkNeuZXtW9DMQjD4Y8HRdKZgq4kPDZ9mJMwVUD2bBq1x1eqxfAekiZ8uVpt1HTAU8TiqmvwNsSfTxRs4RuDK",
  "key3": "3q25wfQ67mV7BgiDx3UcvueZM2MudH1MGwh7QRJ2MBPYd5g6DvGjETwBxsj9nKToUuBzdgx1UWozCthTnXZWJymR",
  "key4": "5AsELmzVmYMEf7cqqBdmw1CPts24ydDF7VMJUCxMFeBL4uJSNyMm9TtJMSwwtENXqYdknT2e7uUSZVaqAYTFPv64",
  "key5": "2YdbhX3yj4oNXuhvfmXRUay58YYiM3GUJEDF5kBUBF9B1v5FVBLqqUrBMpaU8AWHzhPLjNtsQDz2F61mvPthuyQY",
  "key6": "2f7FeVmfn9hqUqMwxX9UqrJmqAYUuT2iEtWid5N314XkvVb2vFdsVW7MeNyDMMGJkjuf2N8BwpbyUVULJ3E5vDnj",
  "key7": "e8dimWU41gheWGH2knuedQVB7NEmk5xHuXArq2YKZxwQxV4hfgt6y8FeTwGXztoahgp7cViCPeS2fY3pajLnKVC",
  "key8": "57qVTtDg7okKqJhyHhiyhLfaG4VRVYwkuu7sYDeiUEt6N5StUAmLzdFHk1Ek1Ss3dtRc14RzLzbcTivZdBCzRvzM",
  "key9": "5ntcy8mi8dcoXoa3G7fEtwRxTtmnQu5S49tL4w9K5ZpS7FLD7Hfm3YCjMtF5pGY4Z8JUzWSuousCwvJzqv8VeyTA",
  "key10": "2TgNSHoy6jni7LUuv8g1NN19dQTfK5wshA4YtwxVkne7dg66W7seqw22AtmdmfGwGt24E8zXu1UsLtrCf9LXchEN",
  "key11": "5Ccz69SF6n9UkGHMkTok2dfqQtkDBXpvkQVxJJsGdH9YfaxBKYjkrALaB5eEKNSLyMdSkNwqmLUm1K7c8DgHzJqW",
  "key12": "3KEWdTxDp2MUi6NbtTfdNvq3ZmodSvjvhn2ZtWqzqtZ5DZzUGPHzUMZzJPssjdxUENFw4VSxCQmMvLeYoB61zVAU",
  "key13": "dEbTZ7DXKo3bihMjucrRz3RdCc9mAB6WHvyuGSq4DLM6eoAVEuzjrJBh9jTUQZmVJrXqyu98jKNSvwpPnK4nPFr",
  "key14": "61NT2gpzCt4Vd916hLbHdpP665bP61cGkdLJGSCYshgsrGp56zYgGUUfeKRyig6VFLNWMwnWkE9VwBqCqhYg5wbe",
  "key15": "xgHEUJjwgsNzSuxjyD6kRZQ4Yy34KRvUiz1BGkPm5jPwnrwchcxopigxqBGyS5wEk9qDP9Sn7HCiDpDjmeJ7tam",
  "key16": "NTvxjgoaechxnJMNyEhQN2cz7RcyrMZqKjXXUi3xEXegfYK2ZPeHNeuXfas6rwGJuAKXvs9xp9UE8mjyZtQo9vT",
  "key17": "5C4wjNKpkgaqFoWpWKrb1PRRkGM8yNwDLU496BTmGKTftz7PbfNTtGr2JyD3NX6MepcdR8cpb5QjbvHq44Ap28WY",
  "key18": "58fxKjaxhMifZqrJHLTTU1h9z4YqU64eG3PZMuoZdwS8aeCqg2AfeEzAuzzwvZoxik4Mdp2FESaEqh8jJRUGzSys",
  "key19": "R62CfSL44uwYZDRcUefEhoxZGauq4dRo6K7M9M2Y7Cc1LgJFQim9yjD1BLPtCwkvMWWvTRUTWePBYy8pEyazxBw",
  "key20": "295uDjULAMEuq8Vrm4a2KKePUPj4ZaroCYg8nq88MhhTGynh7A2KPzpnV5bQ6sxLJgGb8Xv1GanMXrrDT4cVmFDK",
  "key21": "4oBJ6TpRayboFFud6E3LvGCJPsxUUzJddMkqkimdQgiNQcJP4HvhUgsQB8VDqvARC3zDz6KDe5oBeDHNXBkYULQF",
  "key22": "3ZNWqB3WZyXCt2RwieBye53ru2i5s7CYogDVxrRVraFn2v7Ad4MvGCQ3Jh6PtptRKX6sgwER49KjjRdbHiTY7W1u",
  "key23": "54k6W98tphQjuSiH4ra1CrViyzu8crWEP8SmucCZAHRvmcKsrvVXnGcjRGeHdNwCiFms2mCNYMQtrYcPYdRJhNN",
  "key24": "5x2YmCs7i3UNmNKe7U3WDr3bQt4YT18VubxwmSikRRH5q8EAiXghWBr7nJpu1ghAbf9jXwais2tR9F8xE5jfB11t",
  "key25": "obTamE85uA4CCLUoJNrdxbKh5zu3iPkE3qPVqwBzPirkPCpT72jLwVwiiwWH1AuNHuZpV1vuTDH4QzKD6JM6pvg",
  "key26": "4rYoGHHivmfP6wYYVm7wKbLknhQW5w4F6LWG4UFJre6hyqszZcXbiWabU1Wy9AhEZXkFEXa4TRgeRQvTghZe5Nth",
  "key27": "4UTXGqcFvQcQHcxjqNA1boE83TymTcNVhfeet8x7aUp3TXQw8m2WpiqSb8Hqhv9Y211gd51DbSbJhiLW9kPSpCVW",
  "key28": "246ANkLuPVmqRA7wi4TB5wqNQrNVfqNPVSXCj3XMhjWaX3Sngxdnqt9vjPiGZ9M8aNWtYmTab2dBoWxtfE18JxyA",
  "key29": "4vP2PkKZ5UqWjJFMFSZhmHZuGuJEDAV8b9wFSskQG4gpU4gjnbj5SnsQc5d7i5dDm2Tcehot4hJwXNGyqqi3psPw",
  "key30": "5HgXfK32GucWo8mtBBwMQRRpceNnxaWxdw15gmfxwEbPnxYJZxExAFvgUWEUnVT7f5Harc62ZRRLdEue1ioorGpt",
  "key31": "3mDsVBR7pmK4KW8HoEzNiWi96PLKA6s3yaLDD9kSajfcc6VMZXgipWoeuYmLpBbJGcw2WWiXUaSsCSCZUigPQW9T",
  "key32": "RK8oDF1LiBzDKtfxj64VZUhWJuMxngCot2Y6HHNHxHTHo8Spc2gozjsLoaMASFcUNn5D1bXE6vRSuL15SgDPmCv",
  "key33": "61cLHer6KVPjcXpSHFK7ge61bjyvVdg3JKcv64R1kSYN2onj3NyMSW9SrNGt7HePLvddVGarcwfhWh4eJVvmEKmu"
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
