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
    "3nMufAXP1eaBUEpHmvBjzzbFhJ6GbFrJkPdP8P2wBYBrZu3r9CEaoPvatwnxwUQqhoDcvD5ZMF5TKvUsLv6neZSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sDWAEHbJXP8obwaBcB2wjhtxXRACNCu6JPeXwkDT4ZvufH4xzX4JxKoxJmYA2R7scaHJKwu36qfoMHJjgzL7h4D",
  "key1": "3CR5ozUd63gYvhwFzWeNJPGycWEEtxzNzJ3qsFnee5iqAEKMSsbZ2ib2iH4sofSYW8mYdnr6gQUBEQipvQwktDtR",
  "key2": "2ti6vvciepZhxuBf2TXTTAp7Uhf2bUsvbWYabU4vKpNBZfJ2o7mJZy4ThXX49iozLBsEMjdZDMCed2stNdNMfnPx",
  "key3": "5Yteg9gwWhBrPfvwfNpgs7sMF5SzNzmZkfhi9taGrsUEXobgE9VM419bF99xjcoog3vJupNMqQJwESPej9yTB9Fe",
  "key4": "41fLmHLp1S4xH8kb6Fyj6BmLdKfiYbqGbJAWwe7LtKtn2HNnWKBhUAf7w9i14gLrvu9FzMTUmKHnCH8KnxuPpXQe",
  "key5": "GuNY3Bqt6cCyzz4Vr5L5iuCVNaf5pn3YFQ682mMz5t2pDxA74t1jKmmYS3Z9jAsam1dR6sswRF5FTeix1gRXKBr",
  "key6": "6hJQi2CaSnNfRersRtJiwukyMuiiZznBjCwNns92ZFdrdukp7gudWQVGDP9AmSdBDKGjuRhMM1RdcNc1xiB7EyD",
  "key7": "5w6GEgf2y3avidavWrorE3PYmiKpxe5q2BXFmEUnZ5tmADMpxmq4ZfVYh3WdBDQLnTyRFdeLb5nJEuy6TqLx8T2B",
  "key8": "2tCcwA3MPWpQAY5T8GnixFzmA6oeSQCMeu6bAAV5EMjSm1aHmynhCVn8xpKsSwcwh2Ki6GRPZxvtUU1FHPgoK3C8",
  "key9": "3V7TYbkVWEPQH6fAwvV96YQa8FYGJ6MQfBDLdNUrvDCR4zYF54fhptbFAEt9PDsGCofxKp48Wviu5qSnR56W1L7s",
  "key10": "5mNp2tf8fELDzTdBaekfpkAKdKjHaXYiJ3k8YC8So2yryJsaS9ahKdGuzchjfYEh7LSZhBte2pSuwJZC7sgRxooT",
  "key11": "1GasEbHFkqPbncfMmL4w2j4cEdKUw8GgAFR1TeMiLumgucDtbi59XvCgo12XJEWmtRaMRMDaEiFdmAvEBfwoD28",
  "key12": "3UxuzBwg2STcJeGYszwC7h9KprE3mmzuWgMUujt5CrX5aAzQxKGYAeyMynJbMkz5rLr3s9zAtYP7djywYmNhQaXQ",
  "key13": "3GeKrYCLy6PFp4YeFD6BKptSkKtqhWsaN2KYr7dVyZ7oQXyVmQdBr5ZTnQmpdmVxuqvbVnQ3AU7VKMjqob2Y26uu",
  "key14": "4Udv4n2Sa995p8rrB5JBEgMJkbC8GVehcnhgtuyhwLH9FMb1LExpPAmqfY6KyrFx7oZKvQ3a9FzWPi5a5bo8K8za",
  "key15": "2ewRUHZdPKYbuuq7yVbg1tYNutAEbWW3se2HaCENB5wsuwwnZzWPcSSecC2aaJhGN6zyi7yQ9UhNE2FtyvRvusi1",
  "key16": "2MSojQwST5s8n3nCFn3Ud8xGUUdpFZjRLzUDPvLRfZXPW7Eq7CcKvrNPuUfLRRu2ahHaJLmXYpaVuXjuuTpJ29fE",
  "key17": "5fbpiE8tnJEPixXbppWkXRAUZCX7yTmcdJQTeUbhi7Zf7tvEcnLbxGGWsubQ7SSBUjkgBAHuxPWsPDiRCwDKGRrk",
  "key18": "48ChjhR83KgWJ3FXT3riZKgENRn2a8QM2tSCVY3ygULegP7MdCvwATQPaGe6knaJnp3LNiNs8pK5iGpq6bVnMR5X",
  "key19": "2Es2JwbMSJMVkAnKZzHvbj4fS1w8fea6xJQxEKusKvwNLJGoCSh3EKumrnDS7xa89EPQcpP9ocDBBSexSdhEr6m5",
  "key20": "Uzjah6h9RSqGcoJFfYvNBQycBSh56m4TN235a7DyiYmr87LhLfiTxxDRHTyjk1bJPrLgPbLbZub2EDG55dLFAz5",
  "key21": "gpFQjTRZ88FDQf8akuV6joodPxHpsTHaV3NQnGDHbVqqNbgGjrwa8fxWHXSuWWZVE1Mbvupa1UJJb5sEU7T7i8r",
  "key22": "6UQdZAVatVH55njzdwswuLvS5WwLkLLfVWaj8k2hpxkTcCSGQ8bBCMyd6bL3xEn5RA74nzYWWDyhmk5wU4Lh3n7",
  "key23": "CMVdwFEusV2YNZnWeQ51UPcrhYWDDwkZjPxuUsgNnpvDd7GgzrdXo4VWdZXNCiNGp1xJs5xmemjR6atas7VGXUS",
  "key24": "5sTY6PwiTx8tXzZTNa6YibrTBvCpir28dr3Dz5FGfrUVXKtNtzSiBMUGBBhAsPv2tN6Tb9zZN1znP9EDW6HE9uJq",
  "key25": "azWghvCa8HDKAmC3S3q7vsVb64TSqaPYTNg45hpiUdQrL8h7JSxLC3bLQ9vJSjiwM1Lb96L8k8TwLvCUNV6pJ5F",
  "key26": "2sLA8114oECnhwNsMQ11yQNguPxLEqHkuSTKraWBQVhUrkerQ8kHJkUQg12yPvcexho2JUXJYTWPxDUMdu92Mcwz",
  "key27": "3s5FzMFGMgz9P7xFkEdeN7r6bP2HXKuw7oCHDQHhZatoVPnRBaAKRgPAfWSasneha6cX6VrVsWuaq7CgsKZe9Zff",
  "key28": "2hrMNmnkJnnteEUKp78tgbaiTknZUoJzu7U5B1LVeqQYD64x146MBkuLCMAtJBAnXad4kLQJyRCSkf65sYqviTcY"
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
