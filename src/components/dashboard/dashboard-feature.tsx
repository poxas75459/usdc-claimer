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
    "4WeK45xCQ88uYaR9psBVTN7dSBPRca4gAFY4tCvSaWM98i5qneshV5XXvmrKSVuquS5HvypnJXEYSFmtqsq4JVAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qbeD3YDuazENNpzSvEWqx1svAZgsxmx7y1mUyqLtgAT3s6yNrozALJCNkeBit5a3mSLAZyB9U4RKb2CXa1LPa4j",
  "key1": "2PX7W65uAb8nsVNNqhLer7YYhh9Qu2Z9LqaYXFHVTurgrUsxfJb534UXotoArSGuaL6NvjUGJ9w6HGmCiPBrRRXs",
  "key2": "2c9yZicv9AyucRh9MD7usX4ZvzKgtiyhxipLMsQdHBGwPoL6FXirjcTd4J8kAeh6FC51fBuy3yzpUn9fLT3ivBhe",
  "key3": "2Mpk5Ui5fHnz6HbW3P2ojEaKWbrZP16UsBT4tARjJMBpirtuYGXpZzGaAycbKN9AE71JR5LXNg2fy5jKJwA9Q95k",
  "key4": "2ywz5HckraFeBkPPhpaQEU9PhuNu48t4o7AYujiSBPHQg9EA4fwVJtGnQy8HQDo8LCC28S2snkSDQZGNyarZkkjQ",
  "key5": "3SYuhu59qczNA6Q886YBw36ZcYMccByfQdJFJ6eyoAZSvxadEwAPc2zamTeZU6C7BUJsoErEvMhB1RVrUzJ9LvEs",
  "key6": "2gn1ZunH5r9wbb2SskvDiPGWZBCPEJ61HExFZAyzERcu3mameUic8rZXoiyahzw7qBKdtjTbbk6Au2LLXsra6dS5",
  "key7": "5vA6aMB21oWQSLjGphxtKxL821gYsRqoBC6CrCsfbuxvfZEbr9LiCbnc6ygCUc3ALqrsHZQzH3qN5NLnuLF3fq2N",
  "key8": "5RD4ffUq7mWq1gXBcJgmJB4nTS8ewLAED3QfpNWYApizSeVxDBTDGE3UJdBuBhUUB3SLFf4ikoo7HX8n3SRjkG1u",
  "key9": "TnaKnkAWX6DekzM8rhRr47PM6A99g4APVqpBsa9GXhfNC3WSjEWUTtSLHVTjWtv453zYfRSN7aGASMn6oqmF9yb",
  "key10": "5mi9SRkNMY8oxEvZk1RwS6fwmJS7VBokwLztoejrcC41KGagtdVuUdEnBKnJ9xC1mekWuae3L3kvsV8SFPC4HA3R",
  "key11": "NEusXp6A7Rz68vWRWGDgPtJvEU74FC41nhRs6pmcCpLfBGdgEfu4z3xDvBQHL41ozwKMZTQVzBAm2rWQqWLh7pK",
  "key12": "5Lm339UNGFfnoyHPTCN6VvrqV6WhrTVzRdPXgzfqLKA7kF9p6xwjkGxQRtrS8enNZSovPNEQaRZu1UxEZo6crSem",
  "key13": "2ymbQPtYPS1mbqJQ9t7xZoZTPjzZKRwqammUD75KhzqrrM8bn9xymmRKA4X4GMzqbxpo9EBZJfxs2PiFx88jwPSC",
  "key14": "2BszUQ8jF33Mty5A73kfdDMtvsfUWtjxE97oiYxNVJzSa4TsMNWzXFevc71fqLjrDE7rKCJGPsdFCwUNxZZLXqb5",
  "key15": "oM4xnhDkJPihfPbvvgNq3qtozAiveVhsSEVpGTdJngFhTvrqUaW51oLQDwwwoZrn1AzzLWtudZWG9Sq1TyzGbRS",
  "key16": "2qteZWzGiWXQf5pbbGgKN3fa4fwxu7UkasANiRhuT35anRudUEcs5SArMgQxqs8zunwzhVmH8SGNZn9xupktpQNi",
  "key17": "64Eb3ZkMWB74G2tDavs3AsJScTunRw5ezSa4DX3chToMomXSMhB7ipoveapgyFWH5SKemC2X4wBUgsFhjZKinoTt",
  "key18": "aoFf5F3si45Jqnko6rGb2LpPcRYF9ZAsyXvrL9wot4xfMeJ4xVsvnZtHAHbF9qRqim7gfMwyyZqBUgJoe93APAR",
  "key19": "2pQRDM5S6h45ZfajwsaKujnhkGThjWRbWMVuZfS6xkLxbEKK97LjKk6uxZKAw4q3HHss8dWsPLUyUDMdvpytHvJ5",
  "key20": "4kRHkA4iX8mJHnCbYdHoxniDB8VzicAZcMDTc6pwuDwzTUmkBLJ2jxFp7QBJUtGv1nqJvmHAa2eCZpne1P8wgMDm",
  "key21": "bJmtpwoEWzomhhJf7zdj7i8Z99hq7PQSsq9Kwmr5fCUEKRVhSkQdBUoQDEGjChUtkaH9vCbuvDiDYVYshvivPqT",
  "key22": "5qiKUwSieoefmjfLcagdAaiCxPaogf3tbLXz18tsMsxjyFKxD5aLrPqsXr6kACkKyymkXofLY6bg11qFGpj8YHcH",
  "key23": "3tkFrH4mSssDB9dgsxpwAnAXhvVcP2ZB8aa4pockXoH4XhfPxP9Pk1s4iGGWJWv3dEc5K2zMnUsjrRq9pN7rgUGG",
  "key24": "4FUvznP8AAhpY11o42bV1q9ehxHWAXSnkcLwYPkV4ETLutfxxu9KdNZPTVZ213zJ9hyr2PN3g6FTAoRAZN2Wza2R",
  "key25": "5nU6gbSN3FAhaLW2WfYuLnqzcYNEGD3uMTup2T3knNkjMsTjsLco42nr6dd2FtB3ttNswFugGdjbiK3xnhKfESPD",
  "key26": "5VHyGkALGYXhLSfK4ApG6V97N5pjxV5HjiiM2Qo1We5W517AiERphRmodt5uHUED4ypUBjoJEaNijMuCsRVNGMFn"
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
