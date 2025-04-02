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
    "2PMfo2bKYrQapYwj77UoveRQT3YihC4NfYMJvKCk65vs38Guvd8btAQj7SD1VbCLhz2jEMjuYD6W5Q61cojtTZcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41JLsKE1EBD53T1pbXo5ihAghGdvxR2HCgK7LnvBLaiUATFA9TG3FnBWG8j8r8Ei7bwRTWo9Uu4LwreD6p1eym7v",
  "key1": "3SVfAg42D1VsrfzAfhuadqHGsWnLpW8RzbwGrNmcMLQmBnF4PGWBFTR3NtF9JSvsyk2aqj3W5k97D2U8N8djgtdj",
  "key2": "5s8vGtrVYSYe4sVHwLSuUzTvxhRduAJurAJ1C9Qq3VwkUvrDaR6P28hVZsZYCsVED56g13GhaYX9cQ2PzR4oVhaC",
  "key3": "642h8L6XhsA1k1NjRpBkXxn2VMVSNYaj5UmupHNVDgm6AA2ahxLpyFhkryR9xhqvHSzT2WvZsobShBGVCCPGbbEo",
  "key4": "5BEeu7nBr4V6bs2XyZ6PjpuW39xQZSn8eTR5qyEXQos1zLdBY7cMoyNuDd9YX6VJQMVTzJTjsBbPdYVpka7E294g",
  "key5": "5oiTnAcgDkWNGtBLUgjxHqCYZL3jxbt48FiyDdPEW3Y8ZyMNgnnbkEk5Cf3dzeEEtEq5fEgh5gc217Dd6qYzthEp",
  "key6": "NTP4fxvYDs19TewwM3oDMTTf6pSzVhfegoHiizUu1woj9bb2f2vhdYS3AksPFaCdf4cywi5Np3Tu3UJQqiKNKTD",
  "key7": "2b7L8kpmrJm6WjdrzGENkoFindW4atKPFJzyTgxMrzP8bvz7xW8PvDNqtXGGx1HSEpWuFSWqDbNhF8jRrJ1qAUsr",
  "key8": "2jaWHU9w87c1gXCfgHXFUU4UP6zjAkofqdnKKAvBw3KKxraHBPgGa9bAwKESizvZwwgLcvp9SXYCRyNp6mUqvqt6",
  "key9": "5SoyhobEhQ8fsLdEi6eVZKcj4Ra4YWeY6KdkkkhbCdnx8dKB2pNCfQoW9Paj6XrZvMSuc2mXKsTGkQJEt84y9e19",
  "key10": "2GEFa7RzJWshMyqRM7L8xSGUVeHADj9DQCfpHzQ5ve97GX8bv1gXsm4JqJT8fnFaLCbaBBLKEQXhPygCFTGLrLFF",
  "key11": "5BgR5JuuJPNW8kJSWg9WYMK9KHtBb8SEZ2fh1fh6DfXm6t3Yuj6bfYUeQATpPybUfsnAs8r8XcaXg7bQ69mvoPHj",
  "key12": "5HZMF4UVQx5BCFrEp9zbyVVXtzzPWQ7DPseHxeAqXoS9FR7Q2Vnt6tVA66tixWwTvehoXXrKPaySrh3q1vowNMLm",
  "key13": "31ABuGq2nDnSkqSqL3NKmrJGHoEkSV9rN6DukpHGcDnAT9dARfFLfWmZvNxPMpY1SK2waxJEKGVUrszrNkg8ixo4",
  "key14": "62j7Ksruaqw7DLor1nEkRKV1rmk6eyBGJ1xGwfYLMv4QCL6RUAkwWBAg7Mf8uGczxoazyHVu4EtH5H9QyRQQYQKT",
  "key15": "2n8X53iMB6G4AkFRdXXDutKY4WwPuc9MorgWLPvi8iU12ZDqWQFqRoeCZViGExzgGmaXr9iZEG36L1RSbuDzEBNy",
  "key16": "2vZodBbPJFmrAQogGdvo4oJ1A7X9DC2afwZPtSCRqEFHbvFjDW1bfcsD96Pt4T2a23zTZGAawJrHkBsxtCMo3Cdt",
  "key17": "4ej8MPKNhVx9fxWBesxqytBUM6EUbAFvnX2hhxDodWhYCoopCQTe8FYbwPdvhDcQkdg1wApSVsdSLqme3uf8MSxY",
  "key18": "4zr9LzXFv2cayYW2eTTNwUrrDjARNjeKDGboAVzmVSMdZfr2ufPYFTuQVveKc9ABLYeTWf6J3t5neGdcyXnp1mGk",
  "key19": "4hxosJXDyR7tGVzmCYGGFYmFecFRz9bK8cybE7dGkisinQYMqf74N8y3Cp6TMFn1HbFYHCBvyfNGmn3u3JdSiFwA",
  "key20": "3vsKSuj71E7F5LT85JLprYXwTryQ8pTYP33Xy8wg8S1kpr9oAsoLTHf64hQNdjYEvD5RKo8iZSq6L1cyT4GDRqR8",
  "key21": "4o7JXrqxKaDCwx8qSti6HrygX1sbjESNx6zhwb5F5xhyW7VHMxRGAw5FYv4XoHrZX3Vyb99XywKu6gPnTkBknQ4A",
  "key22": "ybAZKFAsHQs5SH1Q3b6zsqrdb59Efpms3ADWngVwr9ZXDL19KBpfkQ65HZPZPQqRFtjJY8qjrqpWWq7d1X4KDAr",
  "key23": "5DUMgsFwCLA3jJ1nWmdrDMT2NcfehAvc2mhyUGWBdFdSvep2NnX5eBKE6q58FCHd4AhrwRDeXGZKqxfdkPKTChUC",
  "key24": "3FobQUy8PZ2XFpTAFBegUhBSdGQ3yzrVRh13BSpsyKRPgSC3UB4jiVSFWHL9PxezK7pKLsVU6fVmK9pNvV2zATi3",
  "key25": "7s9Fwzphx8rrcUUc47RZAnuBEbpmvthDCLUVe5kXZVQKFQigmBEPUmw5ymNzVfad4pTGvu54hb18M4BYKgSqSg6",
  "key26": "4BNuzMWJVZCxjG7arW2nWLGR7QBJZD5NuEkbZit269vzMA3SfGNAxNqm1xmD6TNeSxcwxUnTsUdm2F42YEGQgez3",
  "key27": "34jkooH3SuAA2JaRPUJmC3CdJG3B4WfuS6EyYzXWSHuM4nV71HJfpst3je8ykaK3ChYjjUiwyKvHMyYk4aQ4T6iL"
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
