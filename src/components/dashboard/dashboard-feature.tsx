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
    "22mYh5QZAjTgGDU4SVVoTFs548noaawiJ7cVHq8pnTHFqZGzh78B5W64JV4R2XDQDWArZvzVhSPXfxRVCTW3jYSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xmNiTfC9DdRX8m3cVnPTF95AihTdWXPX3j2jdeG3K3dvdoK8MU8K7Nk9Y82vKDBCqiAgEiSNBsNted9wfzWxuZT",
  "key1": "3UB2trQG6e8qCuxtnCGveUoRmW7akNxnihdF7zbgpFGBey38TDa563L4mqJNgnbnLEM4JB7Doyf6ASs4DkZzb85D",
  "key2": "3yJE73nDT2Gu8SFyt7jB1XK9cXCBiZ46Vr5gEVzuaPZ8NoSQmTkrGgcStSVkipVKyLhqaiWc8xncJpENYQGQxavi",
  "key3": "3BYkB7kqNMFw24iAMH6DpbytVHx7St68aW5N7YbhLrQPaehvy19YQhG1MXMEvjT4oVg43QGXG4mWUStbaLzdw8xs",
  "key4": "4ZokDJaBqdxB5v8zCnLoLRadP8gyAmynTuimys4kLdnqM6B2M5f3r7baVy3ZEanVLiwWyMatvEjTBZz5si2EUzH8",
  "key5": "5zaxjJJPPTDm2qyMJ2PRf4wbxyNR5xwABHb6joocN3vCi4MuXXp19uxKgjNJ6H4nNK6vKG76a7tudjKX8qJjM5PX",
  "key6": "5M8C4LkTb8WmRNoCh9LRNkkCKfUqsVEZA56xrZmki4q3GL8yiTg7fF96RVc2xDv9wSRxD1VmEMFnHuvFkiVT8xKp",
  "key7": "4foGYhp7cjfns9vxKgcvyzprcwyFGaXppNXagJFrnFE7N7JBmRuXmH55Dp43kxUg19Bqz2dSbR6KsD7j2r7jNMBF",
  "key8": "39QCoaEQSToGEHE2wUNXhkJnb1M64Xpu2d28LUqmPbfbWEs6qpcMyVjuuW3EY9vX41GTvnbgV4gs3n9YY8SuWNqW",
  "key9": "4s6iFNht4EWaWSiWuovL6fGwg77uMgP1VdVxCyJ6biqrEj2pLdFiMWFnjPrCySL77o5q1Y25aW6o4nGQgmkc6R3w",
  "key10": "5YzcQwXwdPZLU5mKbqz4tt3UXqiNp9capAH416Ld4DWCUcDLMqw36MGPsqaV4AENqUn2BXkUY34YWUgYDytKZya3",
  "key11": "5XMhUuAftKaWwTa2LSLEeA3fzJcSVjLBgaRoPW4TQK4UJCGXQcxNBG1ovvdGXBTL7noXw5MWLxVuxMqgNmEuhevo",
  "key12": "2xiu2xZbMz7XTSe3seY9weGgABN8x6pzzQDxDejDJNp8VKuV7wfo1QGJrXJRVrC5eN3gvonWRmNNYti7PNU3LWdu",
  "key13": "5GNkYYpAERdF9LQA3knTHUrPBCDcieJiGeTYGuAMiQNNXfqP2FeWSPKjS1J1Ar8HmEMLWsgi1sqmWA4ScUTApmLF",
  "key14": "GRthm3queRbqDkNpCFDREsxot62xivbh7HF6jsQCSBgqtbrYCF8WfQ4U2u2TndQLmTQS8xirVuYzKGupjrmhVDG",
  "key15": "Z7snUh1uAXvmrAdWbLTtzdZNdoAn8vBDoZo71LaryUwnE9pXTsQxQvpenKDgaAGtPuqFemvTrLT28sqdJcw8qt7",
  "key16": "589KzT3k2PrMocynXUdwuNVPvTVdR6iDJK2GaHPWVN4hcuPsPmYZJ4LHbV8GZqnqEhsJyStx6jNLGUXpnEcHtHP6",
  "key17": "5W2ydEQUa1eqmsmYXgZJ8pmV4BsR9PGxKz1nDRTwDyDwqXheba6RyLwX6Lz6ji7Rhg2bmPoqz5UzVyRMF3DgnY5m",
  "key18": "4uy3mWioaEmBb2A4QJGt3nZ7MB25zeigDUhBtxRTjrL9W8HhxQfomfvQWyBsbEmPdE1m9kdAWdmPkb61XfXADo5j",
  "key19": "3oNUudJtnCDi3J1PBUknQtDBtw9JqqLgx6BH8ANBLVma9UssvVDvYdjDQaP3n89vY3GCiQHt2pD996GWdPz4gHnr",
  "key20": "5yifBcmqS5KtZyWh2Q1JPMVoXpgUxPZtPb7j55LzLMyxz9bWsnqcBKUSvenfxoWmghyWVCk1iFZdFkVoMYebo5SA",
  "key21": "2983QmGvCDdLKKpJppDcn59wVykZK4wpzM1Uo6mS14KPhw1ngs1iDwMBRuMNrspTPeexcKUtZSF5Cyr8D2CF8FaT",
  "key22": "3whpYn6wemccLrJG9YSigEAV6aqTKY7NaKvDzk1dzaB17w7iLmAWvct5tSHnyVn7rZ9Z3mrF53DKcXbD4pyhmjE6",
  "key23": "YA1gDfbM799uLv5C8veHhLxt8c6Z8pB7GJFzPDYtQ6w5fjuG7EEb5ngeN3DKzSgXsum2gVooF4YmTjoCv6BZdnp",
  "key24": "R3wLtVehhnsHKr3X2gN6hEFhsxrGF9LBDp3thkWvMGv6oLo4zj5Nydip8kabMCV5AXbasMgR4SJUFHwg4oD6DGo",
  "key25": "3k7nVNF6ehaEMWGtq7HtJTsyGhZ33CdcVdVog99mtfQEmb5DfUHPZiBu47TLh6889dKVn6hZDRRnb3mjduVuE2J7",
  "key26": "5aLQ87dQY4gx815gSzaQnoCAC7dxyZ5zMjHPvn5BFSwRfKbZjZzzmYJJ16xHHtHQTbNroTLDH2ijEpGHaZaHBgZ9",
  "key27": "2JFGCqKDoHfpKoSo5E9SqTA7xUwGUQMUdd8xE3rpASAUrzpQrGhfaE8UQV1sBKtYp7mmrc6roDSVCnE6eJfY5MxS",
  "key28": "5NiZqLLwpLWbWSpKRtESVKqQKReZPQJ6GYZHXiL2y88vUV8weTrFofapMzrFqyzBXcSZuJ6crseWkC8fTsXV4q3u",
  "key29": "2D2ce4L6zezWTzT8tCowJVUeji7R9h1B3d3LWkF3sozuDMpLh53cRAM93ErdDzJEQ9LMY4er2zCLiJYBtoMtEPw6"
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
