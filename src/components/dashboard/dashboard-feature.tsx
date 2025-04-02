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
    "3pLYWSvD5dQSVZCRaWgQnShuH94PnzzAsAUvHRUKBDkFxr93iZ44KqBgTtSiSu42NHnGgcyKSrUmtyzdWccyLVHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43KXzfi1cPyizyFP1AwhsxZTxk1DwFiwGCgk5QzAMmLc6H76XX3Bs2hKuesyT2RGsYrGNsUBUrPHVLRLp4UKw6S8",
  "key1": "4MATQ69pzBjMVuC3wXboToo1863UNoWtf1jRRDuRu4yFfHqDJz3e4NdwTFpKwoVyqpBvV4GAx1sCQj4wagFdoNqS",
  "key2": "3ktyNZLqJrR67BFFQogobXQmeqnuAzCmJoZKP8xbtWmeT8EfseDwCE3ctjhUMtKuGK1HABc27QUbaDz2NrFCmddz",
  "key3": "5mL6s8quE66CQxi4NSuMDTrYU1FrQXcYLrJZNqHyCnNwiRgCXwUQFCSiBvPjpwPyS2LuRcUnM8aqnr8XzbxDUX1A",
  "key4": "5hRu676xgshCq36aNP7rQS8gLBUJ1DUrKCQYPqUVH3yuWTuZXXPdYknH6puft73NjuCWq6QccKVBzNJW8PWjymis",
  "key5": "5AUQuLCfaczmLnMwC4yrMiAXvvKPprUusDdPiiEYRcoFtx1va6Z1eTUk7pgntbUR7NubqEwQvGp9jv7cdW8gucYE",
  "key6": "4LGmATmxSX8ETwZdFw3WRD15xrppnLYFHMjqGprVERDfqxo7Wd9eLsmdsdj1bBFyrReJQNpj9VgDpYSiqEictAXs",
  "key7": "3HAp8Hp16kLSeWdR3t9VcgZFhcnCprToitQi6b3Dm78JsdBovb33pz4kcmCNKC9bLiXMP9M6Cz2eLrEkkt1SjPV2",
  "key8": "5ivApPPrD2L5hcpoesk1TyhQ4P2KDxXP2QWEsaZ9dtiizPUG7f2RnTmF6CCDN3pZ6HUhnLCiVtLtpSN256JKQe3w",
  "key9": "4LrHqAGZfgCveoowbavU1teRMByrkNGXdm638nnLf65j1mWWYV3JdiKRcgcHc361Vw7iLuE23p3GD2EJLVsLzKad",
  "key10": "31AQuRuyRb2hPKgLQFwvRhmwqeo61YfUFN1HfrZQ7HA6N1xmgQNxV2v4GCPKPd5ACbsiDJVTkM2RhmqLradgggce",
  "key11": "5UrC2rVCHTtDKtbGgi7ZVWERytvnNMAPJiVGcKZaCf6Qdtr4vF91ypp2NudYYuKfqijfkcPGMnHaaCLmsCR9xmxC",
  "key12": "43kytogiNZMbXR227mz1YXnmz8QUbhHKGyPtyuf3bwywEpuTR5UAuC9MLH2Bzr3rkPH65i4zqiJvKyoMMbzpWibM",
  "key13": "5yJqR47VTVJ8H8W5BEQ4XiSBfDVGvHmnVy7rFPsxzFpDuMK7mVQHC9mVdaGZAEkZ9DsvXYQ3twLbJJvq1fPkooUF",
  "key14": "2nyXmA2GBLT91GNPqFahtDZerxUz3fCbbDh8QTVa3e8zJY63J6vNvKbDP8iNTNY8nZ1gGrRSEikxadJ37Ku9GiSn",
  "key15": "5CyekiMcDLjzd1dvcek2qWZFrLbotSF32xqeYZnyxrVHpLxpZuvLFgsj5XYcHAmTUCxs5sveY1ojzEfzSBGoJAfb",
  "key16": "3VWUpybuv3t9kE46L5iLwtsxA9hAksYBnCsQ1qpRYcsY5djeeSzorq1cD1kvvUcPuKrCzR2pH1VmMzNoj1ntfYFG",
  "key17": "3j5D5Jnj7x5cj9UjGGK7fa5B5bLDHFzqsJHmWXH9kYLRsubM6KT7EDUPau6taYi7UzPrb9AXsZfCzKTSbgQS2mov",
  "key18": "6BM5RySvVMHx5rajewoEcowP9xnXpnXyxeH4LZUHKZT9WBw9PqRpfhzcZUQq559Ucs3KSQQwJvikgCXRVL8GXg6",
  "key19": "3yaPV72L2ydGr4P4PyaFey6uq7DezApEY72Be8Vt2y5w6bqCxjQUahkxGU5Ngmb2DyaMo6rBuk2ssFU27tFL1zN8",
  "key20": "4FUWP8RtaUkj5YcK3M8XhARCBFRr49s2RuHDezmdaZ2DiEsNbHrXrGUgLTWguPt3EXM1Csg4YFT3VJ3SzcTuYHLq",
  "key21": "3VUpfkdjdLhd8WHLkJsDbmzZNLtDVkHdzdWJZqifTuatTsYjitE1dhPFQUWepZozT881Cx1WnyGfUEmjSiV15dze",
  "key22": "58761jCKLb8v9V41bbYpVG6Yf2NfCsu73nKSSwsgtGzVtmb5ztMvm4S9YQZ62NoQpaQdwyqK7VxVBHHrUz5GiWNG",
  "key23": "Tci1pwyToyQaW6d7LGwDfV2nj4NvPaeqb9HBNjcNLYcuitBiyY3fhtCTBWN5XNFEq3b7evbSbkvfVryjZuMcmNE",
  "key24": "5Rs8xpSUEMy1KeHugXZHGQbF2qN73dNqmBAgqnRv7Cn1aHgdeVDP2UrQGqXc3QXixVU3nMUf3Fyjc2Cb9genw99K"
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
