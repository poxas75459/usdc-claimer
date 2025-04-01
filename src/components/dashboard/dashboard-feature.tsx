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
    "5kEqNWRQ1SLtnJVX9tNT8wAqLw2oMc5PEf1mTzyE5yVv8DJRysWUMoK5Dembbkis7Ndba5hbDdGREqs54hKfcvBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wC7oVNrKvx6rRCzv4hV6GcoySMYMdHE7ezRrzuBKa9pKPnCfJ3i2KMVRAdVVpDavFrGDXyVt7WuTYKwAqmT3YX4",
  "key1": "oWDtvyBSjNyeP38QreJWw6JpVZ5Fy5ZwPmAhgMkxe2GwkinMGWnpKTALU75EDoTjuSKYT1tBce8ZrDRFg25pvt2",
  "key2": "51qxR8SPt3TwvDPNZYbDHfTQgJGF7yQf7DfY3Vazeo24Bjy3UihDTaJpZeYZbznj4xHTJV4GXoBK8bqcjAYRSN9v",
  "key3": "2Jg4mcExUaXL22KzgnfXnaWu9SzJGdABnGMF9DXPxsR91yZ1dwgnjUSWUpK6oN9aAvYnUed9hRnFavT3YkkZ5rJb",
  "key4": "5oEwU7m9ckFgArGVbA9D31MMYdbmTxUspme9YXF29gYLAGdQMrf1Fw4Tg2fWfPm4qx7J64H57DF4emg29cQADhwG",
  "key5": "4KKYvFbYgdnyD7PfihoH8tEFLuhVGPUkXf7a87BD2xW2BjEVDmo1M4ZTTyeG3fZLtkeFZRphcEJLfvNk8p8k4sJb",
  "key6": "5M3EbNhxfUECepANtpRxPwQVf3iTgZAYz3bDBJWwqbJHSXbsrF5WEBvPVU3ZHYp9kEq7pnKeTLcg3STtUYdprXJP",
  "key7": "22BPQR3a8LRVnT2jqMEGLLop6suNRyNUwC28yCKpBSBQcnXJ6LwR37MQrLT6inn4gqzEkDtNuEhP1Eh3WYcGLQor",
  "key8": "5NrqfKtLQa1Uhf7sHWwcoTuFUzAVR28SSFDXRcjXDFH5sjCqz194L1co9xFA33EchEKNpVjAcVQhg7Pdh2FqZq59",
  "key9": "4MDSamTL5U7kLRbWq4U2AGkh2Kh6UEm19DxJ3m9G1xxyYhi981kMYuwTB7tdWJZR4RZYzeo7CTMeA1pdi88KEDcH",
  "key10": "2sU5eRyqG14ATpKEsiixSBjCxLfwE3rTZANG3rePhtNMHixZUg6v1DrYmtNMZtd24aJt1ZN5JbxEczEqgkKYjg9h",
  "key11": "2XYb4AdVXR1ar1r8yFs2U3CYB4c4vSpqtUPhX1t9KcPpbdikxTCi26CCnXSRz6UVfem9JeuXwrT19buu3Bn86hUe",
  "key12": "527pncNsDCe376crvJJkz92sMxd9JWa3NYRPXkSXGSiojgyWZS4mgVbkjMyHjfRjgWDyiqZfcXgAgZ8pz3cExEMw",
  "key13": "tqY11vV9rxae97haXgrVognrzhze6qXr52P5WyPoFrCti4GwYWGKCxrSKJEG1A4mgSEuvPLmcAavgRS69GRW3vu",
  "key14": "2mkwgbYu4gsR5NQTPKQV6ZjP34RQpJJKVxMWsAt2qNCxpqixkvfHwTs4YkvaVLv5UUGvWZuFNpdJ6SVGAAKnZBzi",
  "key15": "5KYgJX5R3SPJfCM1pGnSs2h5qSfmD3VEfNYLEnVSYziRKmTRAaErYd9ggf1fiPRckaL4ZkPRdn1gjaH3uX5UJpM7",
  "key16": "4bG1yhMn1nVGUaaFqgkQ4a3J9y8ywHXCXaDheiD7nqtNyQghHZXGN4yxMsxCMM9AHfYfPamodnoDhUqAPY5RHRCy",
  "key17": "5uK6jNSc5Hrv2DTTFBhkTNz4ZF8i6fa6TD6LuADijPLWQuEEWRG1ZH9pm8g4pkKuc1uqNWWPDXZjRraBDVNqMvPV",
  "key18": "3pQyBPt4gUmwGgLXzNa4eo3bi3H6LNPFsHLb2XTPwZupi9JCtX48tMxyMbQnujqFtFbBZaeq4gJNR2Gi8t6cQyXX",
  "key19": "2WGvi4zLjb43pW1UgCTE2zczZb17QsHbS3UUErdK3LBAYzfJ4vnXwBewJ44LMxDMvTFFtke99QtYrzeBArr1NGRa",
  "key20": "5gQZj3BDyFBJBbgA7WSVF18B6j5AQfbHZwvcnEp5jhCjRmGobdLvCPCX5WBebsyuXmuzezXs87YqByAmRkbVyD89",
  "key21": "5FwFmE6Ew83wSfxKgCXpdDDvPJt2xvn9d9SWZ6jcMvSK5QBpLfehX9sb3zSqJDrLk8Vdd4pUoyQZbj8cUCvJyGaP",
  "key22": "iysk4tfnVDqxSZVkpq1juFqpti3zJuf4LDptsgepwcUdyzhCre3kyfcmCHdnqfhQk9Zv1siTqbtDSNJcBugY8Nx",
  "key23": "4cS8F4StmGDew9gr2N7LoZiWXvnN2RSYHC43tN5tpqSCNUZWS2ZVRSjuWYKiuRSBeYhHFgh1U7oeXxgqWSqnuLLV",
  "key24": "5vQ5m9zPpknrKwvfMUKX6ihcdM7Tb4DLCskLG6C2YWjERvJeCVsUrjNk64Xokz58vhuTdXr9647Gmwv6AaHnqDT4",
  "key25": "2RTToxcLCvJ8M5qUaie57SR9tubVWVYwahjXMW8CJ7HPVZ71xd2VPCokxu6Ep2pSjwYSupypqWEJGQow1AcHacbp",
  "key26": "384ugmzaiJJvZQ3CxBfTvhMJmqZ6zXzHXih7vQbSFRF7QYdBdoYKLm5VU9bAFi2dfqvuZfP5iQR3qcee9VHpsHvd"
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
