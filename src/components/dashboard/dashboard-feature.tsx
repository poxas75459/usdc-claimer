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
    "5FcvXLpi5wce9BZwJzzcVLCeS5zDkLMtQ1Uz2dffGdQRvYfoZZkosQq2zWEgWTtn3hzDkK3BfuJuVCfd7EcxB3FU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jDgxTh6q27hTLKQBYoYbeAsiLLiUgbtdZUj1zmEBrgmpcB76jiSJ7B5YZhLNPQMLcr51TaiWW4fwvAufRyDwGnW",
  "key1": "2m7NFpXM3dcBduXVuxLKCayHKRjxFK32yM8r67zxD7dzpb2QpyE2qj7CtxBNsFp1mNrMMAYUvjDjPtTGkeasmwKj",
  "key2": "4cNLXgqsPC3hPPuqMxHNWN4pu83VxMSGKJtmkFZVNjnqUYKKn66NByeCdeB1yC112tVAwBUzAiVhbtHoW9hTb6sk",
  "key3": "3FnHSPhDqYnTbsdf2UhGChonaYQpinKpfukokqinb6RoTXWq4v9ETN5uBPZwTxNzerELpRjjJkH98rKfga4nbbPU",
  "key4": "5cSZkgdq74yWcW9WkCLWKAQeHpCGdG6gUU93cacracXQWTBdRTFQnww7gvRcBc23PUsg3ZMUeQ9kh6bLu41PFiS4",
  "key5": "4uASPQ9j1Zs6bPDnTt7t2TXGzpvbWiqhm1LWzminukAsjQAt332hyXioTYXqWu9mPJkzATdJN7xxrfLnaTJ8Ad3",
  "key6": "2C3ZdgCGDKVudAszbybRa51mebyGfMa8j8ZBPqbrGnKcMWUNCQ8GW5CS9T2eVdNSGWMfH8EDcMK4fncVq1ANYoA4",
  "key7": "64reshKqLSmfK5jnPvPqWBg9Jv5SuFAnHas9wEtrMXaR8cSCHAeJwjTdDoacSa7dLH297DspQYo7HnUoPA8DaLg9",
  "key8": "4jBgV7LS5TRsxessxk1uxqJZ37uj4E5U35sYbycaQSHT2dyxqRrksqSZ4S6HGAPwYNKxssEaFwERCoQmvgLJK1fn",
  "key9": "2qNPGALv96A9Q5Kvikc5nyv6GNMZvVgDMNqBHJSig3RkyFdNei6Tr7vJQTn73hexusFsPEA5wAp2AdhqDCUXqXuG",
  "key10": "5ueJC7JmzGUsxqqdSdsGkRxyP8Qi2eY6n4Gv7ySL7vzzguFVQLicsAzF6BrxRPhpa9icrVc72HN8gi2x1pEjEYFv",
  "key11": "482QF8RmNuUGSadZdgnF1FUqQRDABrM4hCSVQFSSMW8tGPbnwWKTmbAyx3MZMY4hNxBArSnXBzUTh7tqsVt6wo7i",
  "key12": "5S38TJXqBhQBW95NXaxA1tsjdemggxuucRxBtwub8cgs7g6DrGfF77WUwro342XyuxgKDK6zFLidCGD7eHgLhgJT",
  "key13": "2bQxRFv3BTgyjg183eTHC4SVG4m5Cdb3LQ5ygDvMF9quRAGZuYzD58A9TR2DqwDRaBD7i2QuM1Cq5gF21T8Wesav",
  "key14": "4Abg23HhKWPh1awD6vgHGQCuN6o1Sdrse6gZgnEw6KSZh6vqjkAt77omzTB7DSySiFqKu6KbbcAG3GYR8AwmKN16",
  "key15": "2Aqr1Yrywe2pRmuokSPsRrLscrrMY9RtyHpTbgDK2Wk7asDa23CYWu1tvTKmSkjaPab7oVfqF96q3eiJVsK6JWWS",
  "key16": "33NhNPR6bMN4gGThBZJLBSnktyLF6ejqKPXhYChpGd1KXh8vkmaZxHntRq7eHBFs1Sb3vpjEUjmLhmwdFUQX1sMv",
  "key17": "4qTYSWNkgW2QDUwc1m7x5fB2974QiU3ZTscq4ECGEDZgPEKhTKmqFWHz54zjZDxDg6j6e43H7D1CatTUjfQTNFsq",
  "key18": "3n8oNJRWpQmkNtMb5TK5sJm33291J1wxrTYHYAmNS4X9Z1AaF1can7HsNfqPsbcLigzymNucEtRKwHVeNDwN71ni",
  "key19": "H9LzrZrqAmonRVUrnrQzs1XrYxZ2BSh65FZqu75T9uNUqZGgjNQDgLzxq8f4g5Pn4V5RqhoWX2XPd58hK3UpqCa",
  "key20": "3pNKGReUUHuMKshoD1EvaZXbR4f9aLF3xfL9JWkCqSDBBgytKPggvLKdCaakj7HmBG7natrcyFzwNmBQpqc5xe6Z",
  "key21": "618s1QsLCc9Nc6K2yqbAWo7om52sJvFgMuC8vAMHxDYzDUz1u8RWHNNSnvnQKanpfCFkoJaH39wMMH49jMp9dmvs",
  "key22": "29rU7Xwwfbfna2bqbfh64RTv3orj6MtSMBvbsZGD2qMRf9v6JsDv1YpR3hkRQYDge3prJ59xtWUc1tCS6NSBDi1n",
  "key23": "5Xhs3VkgBv1SGTmbHMDGDL4ZA2npz64pyDbAwzMHhQmfzwrKq5a8GoDKeBd1B4h27LjSwQ7pHA19xWS1N79jd2yn",
  "key24": "5MgCVXRAwpEW1KkkpWKYeEdoCPdH52UT6ju8iNEhEwmdCZfs3msf4WHzzSFfYAqT79eTtJjCHhD9U2dtAhJ8TZ87",
  "key25": "9jcWL7rdU1jXacJixGcv4qwKDn6Q2puJzBa7bRFN9Kn5J6MYpqohqxCgPks2H7MnSPDvmGvwXJR3htbUgqrHmaX",
  "key26": "61Gxto3sRKF4D14QDevSMGkAj6nPZb4S4o8aTuAv961JK2U7JGgCK5D1Q3gHRT8irBpGyQ56YZRSKKeM9sYN7D8K",
  "key27": "44gzKgdu9fUkXoVBfetYrcPkwRiegTG5YNuR3CwG8fNzB2rjnKKkZ3E3CywoFZV8JDo3bDQxBHKDRhmp2rbqAqUW",
  "key28": "2tsmhFaVuc686nEGA3mHezJYDssJYfiTK6ftsXsa1vXUYrGDFv2m5smVBKNRvoJ17saiR4V8HJz5BCMzsKZBVjJu",
  "key29": "TfiqwJ4tyBK84Q96uFSgajzQDJFs8Gxhg8rWTmd2tGFteKTcXTsiCn1aEMSNktVp8tmc3tRBLzAWNhyDBEd3bbr"
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
