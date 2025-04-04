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
    "4ntLmg4V71RPJF4eZfzecHjCA1zyEzZfZYfYNGrf1yqxrKKpqFxb2c1o6o3YguBHzy2SmryR5iqCogizEnpw629w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rZ7pbRegh2UkvogUHL6ZHtDtHFkzKdvcKfxJHzUGt73P6kCMaeLRLffSSDeY1BtbQQGEmpbFn66Gb4TaD7UQKmh",
  "key1": "37Uep12FKUXaGCNExWMzSo1Pxn9x6BV4KPt1K9C5VadmZyq7JAXQcVcvYfqQtvHgFPWzVNL3vReyRXCGgXqLh1Dt",
  "key2": "4eNpYbEhT5to4k5Pr3f3sLB2iY5sL3mjUnMjXU8Rqg9ENAKCTnvwAFbmwMRFgG369L1S5GV5TCLmrZw42kny9Tcj",
  "key3": "4g9RR9SP72HuB413macewYEVW9Dd2GSA7Tfi4hVPnf1hhoEDzGnG18kA6jyAZ8Gj66Nd2wSXPkLPrxoRQLT3bPFK",
  "key4": "2mpsf7QSXXu2rXWvxDo1xYDXqbFLv8voux1sVC6zQE2CkWmKyhKT8JVWCLuxmgmFfppdFZAQSWopAFwNMXHYNCju",
  "key5": "2z7jqiv7HCwoBhjALQzt8kzs1sC1x4WZqvjrG9kYg75QjmU6XPdie2wLZxoZLb8MoEPdJ5Q699MRNuiPrUbTPzE8",
  "key6": "5fda5XfgTXT7yxc52xdwPCZpH5ALB5iM42jBpB48uH7rCE9GQFMJXvXZZw5kPLKrtMJCHVvmcZAgcY3orv1sLHhZ",
  "key7": "HhuvNKPdC3XUiRtMibXTx1ef1siM8ftnr8cmqokkSQqVTv3xGSow4pMBe5SGeH4qEfYjRyCnuN6ZvtoQjZQ9QLN",
  "key8": "4SEa8TH1EJjte2mgJxU2aVfwYMmMTMmTaYfqkcfDsm6kyA4zSXSoXNNHjoovHT4tvtKZd1Sy42ZZ8VGDn6VdQbrY",
  "key9": "4sLUDGaqozkFAA6G1UFiArvoowDnhqPpbPuwWutcJgLzWmKdo2wWumyaZoycyWrJbWiEsJ74n3axzT8UfW74Wpqs",
  "key10": "5e4VqE6Wd3VYUpxj1oBWPhpU5UAEKyMgfdJfxw7yXduEaUUgCH1AbryujHhJHkEUz1iizXjtypnWTZXLpnuY98Qj",
  "key11": "27iAhCKXQyThw6pVJ6vmief6y5wVPQ3GvB3C7xao3rnFvR1D7bVC2YGT5Mn4RNgVwvSToHJW5hjDAKajh5i4zCEc",
  "key12": "67KeCNwYepaSh3ZqL134q9uKo2UUJZc1VPWpJFwGFxLyymoSA3XqNWU4LFAySaBTQ57S6T2KdUCWsVmaJzDjQJCX",
  "key13": "2gxWbs4omNYRzbusdH84bMoiz3kpDrMxPwcTYSijUotcXTYAJWDwNP7FDV4Vh1FubmF2EMX7HcZAk58RTXANZyAC",
  "key14": "2DEMQ4V7u7R1Lcop2fHUmz7X12WREEkZZcs5pSCwdvGDDdKV6gqfN9QzYXrhYwpjPJEZf3BA68Fzk7UjuZVp6Vu2",
  "key15": "4zMya7JXw8koCZ5woCPBY3YzBqrrrDg1kySYz6e7qvaM3uLRTiy5jNqkCffSdjTSC9ZiEPx4ceRnkEpP4prRZag1",
  "key16": "3Juq7rXt45dr5PuCvTzPAbUKvVu6x35v8vA5obKSkotxqBQyh9s3naZwfJP4MhQQThrLb8F4czWjgnUYFHc3W9yp",
  "key17": "59cDQKkHR2VpRoZox234FouqTsqTx95cvUc68TyZQe9DzUdVL4eovskwzc3aknstHyyB8Uhv2aEeqdCB9uYAUSD4",
  "key18": "5CoXHkX7wEwbLFV2UUWrZSttWyUNoGjxYZoeiEGbHaf641CJ9mFzmqbUqTy7VGQQPGWobJMxignHXzvjm8y1ojXW",
  "key19": "3dpdfVVtzqGpNhmohXHsjpsCLL2ZmkRrNrQdJKvRrWxHCGpJTqvPeTfMtTQYPqXFnwZVmEjKmybQnR9QieJyFt13",
  "key20": "23Pkz8ysq4KT8xXtRGwJmca89ZoxCjTGXPsZoAEt1kTgYMDFpS8WppfxkmGsF3GAmQZV2GhrgkrKKHcZgDzQfFxh",
  "key21": "2YcMx4LLTditthpEXBpjqY4chhhNLiZWRmCsLXJRMkeKofXDrAtqPFsjCT5oy85BvP2mWE1jSQnjanepVU2EA9x4",
  "key22": "5cS6XornhBSugLFnc6rJchBVMTw81o6UR9NQFYtbWsPAAk5Ljhk7vgqaHN1WjFyeoif4CWzmVnMxLG7mcUFpEJS",
  "key23": "2z4yayfmyAKEbn8isFqKRjzVXvW5TGrNXwMRzChb1hedaLkr1GA63mXcjddqKesnjaMQYRZxP38Aa8DRYoShCRhj",
  "key24": "2QVUNXkF36rxCw6nxZ1C29qmPSUrQRfhQ1y1XnqyNL4UYGWnoGAWG3ynNjfdvbAMHb2pWULrdpRU7N35JBLUP5Fy"
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
