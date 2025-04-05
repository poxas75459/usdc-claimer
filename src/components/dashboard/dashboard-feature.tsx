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
    "2HdYY4L7MRT2Y3S3LoeTdh3YQT4wsnCp7BSiRJP2LDq7dctpBCfUJGL7Fa1fwXXRa2izSYpSk1JLZanbGFveaJac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jzhG1GuGwNCV3JEpt2tkjQfWwKpYxcRdzW9u2h9zDdxNqU1MR4nGExw5MNTkyhyp1P1B61zmw9JG7BBh1CgxPDC",
  "key1": "2mApAhKM3grx6C7LX27Jj878VSyqd1w2gjY8VnQcM2Gro6GFVHibPa3pJL2E2Rabf9ob9QVagdWBuhHngh4HPcMo",
  "key2": "3s6utAYpCPcpsxbtNB2PTfcRYL9uLHMj9EYHhs92aafUK6pioP5Rd7URpd3nS9JpZKzG6WJcPYEZphp6ZmycuoUU",
  "key3": "zpCPtz7AWvocqd7sdFjUA79cDS7QZbsuHhz193vgkx2UzTnj3vWEydi6aagohoVGsvpP4aaL8iGa5YbTgVu3SFF",
  "key4": "5FZsPk73vbtfmXxAdts1qTUma77rCMcCazuhdCvJzUu131CrENeujdY9FJMr4gvaKXPh4gMUZ8LRQZ7cUMwTwBFV",
  "key5": "342te7uu3tjDeWwfHnUG1DB7r7ZVd72NXAXKEqaZZcJUCRvnodAG7HDo7s9PtJZWhWBTjSy87uUy5QezHMC7CjVy",
  "key6": "8MS5Umoavy4o5b5rkMCwhjNdDGg37tEzzh6zjPehKEcAeBH5eHxDnXu3vo7DyVyTYabbeCNBhnMyVUgN8sgMxkT",
  "key7": "2pYtu2vwDYu523JZR2UP5aSAcNQX8xjScaKJRSGmq1Vgw63RLxnC5Cgstzxo1YRJJoMud6t4kWKxr1DtLkWy48Xg",
  "key8": "51FMLPZLmerwKndWX7xqWXaSKsM7PC4NxLQUYm4MDdRUnUrkYY1o7xyUYoF2pxZ2REizMjUY9mPZciZADqCtPL9q",
  "key9": "4t3JAa69bzqrmqjzerqC7EtU1ZSRjoQN1QanDjnrL8WVFiFerNSfuVZBs8gg1X46niYPcChiCkvDt3Da26P5qP9D",
  "key10": "2Jb9cqhGYr9SPxQEVX82waxoCLz9xo8pEDLLBxSvhUNCFA4757cptwhiy2iutUXKnXh5sMFEcm2ofqW3KZCfqnKL",
  "key11": "38DsBrN1bUYqSBeXkcQ4SuHxU3osEkEjepb5UJZE1oTp5k5YszMXHdviEGYWhkXeU1B3NRyqqkqSsRYeecR6HBEr",
  "key12": "JFHYfY4J44cxkRVFpvaDGPbFpSvWuVjCyCcfufWDFimabVq6cAYz98WbWZv5jhg2YszpHyTXwPdBeQdAdKY9TU7",
  "key13": "4jFSQATRfac1LqjBtrn6foKTubrscartvGqYeiESrLvyPbCs1erJoW4mSFFUFKEVXbW5rUwpzsQgCfYjhZCXdi66",
  "key14": "4fx6xZw1QuQPdWEK7bVDySrhT3Vj3z9maZPug7yPsRdvaZJMxVzCxJhHSgvcrv7Biudpq5azhxasSTZsAXG3qEa5",
  "key15": "5V4xAPX8BC8CcGLuwgPQXsgmGakwz9TcEXTMkFBVhoL2Cnxe95qBz229mkoFWmPLB1e37p5XbnenwAbdMxBPppui",
  "key16": "4tkZXTwTbMKxSQ4bc5Foqhh5rzFXM1yVoopiKqxrbYsGKYDydRPWbEtgFyAg5Jg8dikwatYA2RDas5hkToo9WxCn",
  "key17": "5kLWFygmDkJ9LSuBqM1Hhb5m5PCKxJWDr5wFdxzxoLSEpPpVuq1o54Pa5N68tGxsbZVuUTgxpT3HVRoXyc1yb879",
  "key18": "vubNv8Ev4dTs5kLR2AUhCoZ1zxncyxQjd8Z7um39bE385vyDNN6X9BkzipPB3scuKHHbZPsBz3Qg6Ya6VxQSTmn",
  "key19": "245RdiBgvWGza5zzFpYPLWRduWUGcdM2H2YtwUDGY1qkBsFh8mTD6MavuLh5bNGeLx7ngFhyqUZCpug6rxESSNLa",
  "key20": "5HccjWisZBWAJsY88bkhJDmgxWM2waGjuSjzhQCr126ddPs7obitghtC6Ly4sHqZQt4wSzWkfky2PdYXUmBvZen4",
  "key21": "5NBdwBRQjgAgmgioq1DBw2C5rqJM5MZQyBvYHZY7j6igGza5sWkCQsqFspjoYebog9wNweiJjMAXYT9n2aDkuVdT",
  "key22": "58ZGeiYipy79hcBeesUoyKkeYidR8NbByrSRDCmJrzDvLam5MsDVZdiwLgdpfngMPgM6GqszMEk4gUBsZSGArXg6",
  "key23": "4MjWiAzJW7twSUyqAJLxgxUcxTUQDvZFqVHUjGbjQY4uLt1vkwhkdY9sJoUhy1BBW2nrMQccWxYk8JQ4Wva64UrH",
  "key24": "oArUPfDVUqL6bXdpVheWdeJaxyzKkfrviGMeVK6yfp5iFWupG3jXZjPXUxDefH3qNf2c3aqx5M9nt9yvhEKMjtS"
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
