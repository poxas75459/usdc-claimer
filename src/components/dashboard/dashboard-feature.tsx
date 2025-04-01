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
    "2j5ZLPhvwocp16k7LXF6UfYRRbX7NR1axJHM9Pp9vxkhdsx45pDDDGNEYAVpr4UqpHxBJZoMt42TcVJnnBBeXR1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MwzPw6evjZNQnvjLFcAtptCWvdrYdtTL82nHNMAvziMw7YZRF47LXsfzZNExU93u2LFxhqHd8tZwJYAhhU6r4kJ",
  "key1": "aMjRTFf6D7a1eArGj4NHqEqkF196tK4dQFDHv7w5L9tV7B1TrkQjARF54qHhEttg6n88HNfKkQgmuqy2vEF23PU",
  "key2": "3hi43PxYS96jLE49AQX7Cx9V2MVYrpgbU1uWXCrKv5QKra7mg4VsDVbqWRGnrqbe722Aqj8XcQr3vSXbrccbSML2",
  "key3": "4NqYq9Vpujjr16C24HxEU3ecUtzocG6Lt2d9FeDhNAiw3Mog9AMjRXDJiYersJ2JqMKqCXTNjzoB2gi2oa1RFhKa",
  "key4": "5CXks9A9SNThtnBWFry9ky1cMJB6xFtjFAPgWVm5tAuWmQA3pi6wW9unZnne5w5QWAgME7GkVHYPoC4Q9AqNmBAW",
  "key5": "2jVtCjzVZPGGY5mNH8n7gDyeZRnah3zTsz8VptNEes4CumP78ahK2REgL4ZYn5t3h6vTei68aDWomQVpVjfNAXTT",
  "key6": "5wPrCz4Krtfxi7EzycdAfy9oURyjr2XvZiCwEQhiBRCQYUy1KWzbitf3aYqL6WJ4pk1cMZDvzEjUdVXzMLHL3Hc",
  "key7": "2dabQ4ronEGf6iZqD65vCvWXJ25GpY8NbR9xG2YBQgGdVoCdk45x36q9DqtR1fi5YWBigGPYn9qaYgqWuy9sY7YN",
  "key8": "4aYyaxRG2L9L4b2nr6j6L2Sg2RQQgqmmezcWLVTqLnwHrmgzMCHJTnpeXEAVpwhhCA3JKiGZdPCu1hQsL2wj6v33",
  "key9": "2xTULJGsbvoP5Nx2bVzDJm9hj2NtywDZdYyvukpYNUMnZ1cCktqUzT2QAUKiXw2kEF3HCZrFCAax6LhNAXS2TPVD",
  "key10": "31avCvBc1jxsNSV2uaaLxVapMLUCESzhtACKP8ui1KsCUnUihmjzk4z5mBwWQAWAtZExRfhC5dnSZBQ51Fm2BqtU",
  "key11": "2fFhVLkvfS3GQ5tCydPZspaXd5PygtT6GzWQbPtEoTzo8MgkHBKU3q4ETokBvnRUY5C47r47pbRmR4KUJwG37jsE",
  "key12": "29Pu15bniEoGbnyU92S6LXoaBrJQ3pQSFikmHPDKhBPNYreFwmhdBCVEDDKG35AuuRNZxm6pSiFUtDVTSnG874Qj",
  "key13": "3tE8NVzcvFpcE1xmA4iQEZCeCguCt7d87f6muZYpdbsuErqynmDgPuGLdxWftAmZ4k5PRhKCUd9UoDodEbo8Hcv",
  "key14": "pPTtUnvN2g4va1CLRKzE86gzm7nDVvc9ZS4xvaoEc2NDqhNK5WC4726bqsaJNW23BaqxYw2SU7Gm5hpXXhTgQd1",
  "key15": "j3ftUyapoTM9S42gFPTKuEj2JmrZY7ULqLwyRcfSYmEoG868GuvjqTsognXyc2ZBLraKGqabi61z7UooHLxR1PB",
  "key16": "5u5eZgHtr6oDHkjcN9ShvwYeDfeFrfZcaa8GCBsYXRDEVSdys8E1tG7rfyxZyJp8Pw86dyiyGiqeovCJ6AYCixso",
  "key17": "3JiygX3Rdrb5mjDg6Gonjuw9azjvE3NYZ3iATtdBvWrfQPWoihnYry1s37oUxFtcw4Q4tBVnjwyRRbkYRmNwAEHU",
  "key18": "RdusLu4C8dRBioMRyBsPcRyLYVoPQmeyXTiPsEemeyshRZXHp8AS9zGeWf8NJYcqueK4zpfWwp6LTXfnhP4kAFS",
  "key19": "5spTVH5f2JTzgikMgq2wN4odbBksFdKrZ1xrGUoPZdN94zifKKXHcfdaPscsg9vjJ1Mt8Xnmpwgf3jpJUDczA4f9",
  "key20": "3ZEC47CkqFCW22Mde9knSR2HSAwHTgTWG6Vf1dZpMZ9HdyKFTdewMmvqiX7MGXTdzDMYu7vLPig7qhKGAWg33HKr",
  "key21": "tLVxzTEMTKYYN5MCH3sZDoPF8NzFuBQe97efn9CAgD6oGPumGkdKM8AoBoqUMikmg2XQEBdsHmEKVcGVMLgyTbH",
  "key22": "2F7oxfMeef6pCQvMcoUzmorpVBAyBHerYkeEJ5d4bnCU53EVkj2p4NfkyawijP3hAqtEaYoqUzB45ujG7ngWbFA6",
  "key23": "5VcQJZorm4kFSnHovVKVDLEx61oAvnJJfSeLfd4eZhqpE8TQ7Hefa4asFVSy3jceBzo66nakMCppwkjpRdAKWn1a",
  "key24": "3zxa7fENpEmj3UHGnSzD5ChRahBQZPTiBbg5VBZ1MxLL7mfH3HHcudgDS3jUuBXkCtgpevirmLmfoqpc4grjxSNB",
  "key25": "4R3w9cqaBertUJnRPxcXBeT5eHRiuehpcMJhvPSqnVumWYkPEn91DrjwfemyEZwSXXRPyJmckuQLTnP82hWg9YLM",
  "key26": "3o5nDKtEEGQVgTdHwK4xaXCcDvrqNNxzjiBHcvev78cuXs21FruxQtCTzYFRwLLKDHLisnfN25rQjQn3t9TKw7tW",
  "key27": "5eGHXN8yWGGs8mCVUiVdgmDhM6BHjrwR3S4wbMTUvt6sVTRAFvFq3THRrXbNDYmW4JDGAAPdkneUDovNHH8q6XUg"
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
