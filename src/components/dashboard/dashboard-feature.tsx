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
    "6B3smzfowtz1bZv81SxD2YLTqt7s7iExV5HQB1cYUhMmqnJ7b8iJpnp8w2XgYn8RZvaCQa3HfHbvgSr4sr17gub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qFsUFiC1yzmwcxktAncSFkgvd8Skh3MZFewL5Xfz7JTCwPh2d1WzEAbkYpNM6sQV61ddDrf5CD2iGmruj7TLtqj",
  "key1": "4YpUjCyczhEXhhy1FpqtjWE5iCgDRsCkEEjWUz7WVpyE2hkLpG2Zoxh7hBrtmZUFaLfGCaofkMAZsNXLUpGAco6c",
  "key2": "NqNVkYQJMzip2rkE8VWgEJSAHsCtxpCzGbDmfZam19gmeoF2NyiMWSS1c2XBauFHRoZDPMcE5wAts5nWyGes8eW",
  "key3": "9Bgy8ztGYyaq6y5RMLwAaWn2awjiLwibbeA9GeUV6DqDcwmGoY1W4YRF4dyaDZBzqe67SfQvTm9rb7BdtXtZWng",
  "key4": "3DYQ95TLL3whPjTYGYcqujfVb1PLLFvQNrxbmYmHbgaBgapYofPojzZQgRUjgPxkswhnZ2nHnLgP2m8npL2kZaY",
  "key5": "5EL4yx1xwm5axAsMQsGk3A3HTQ9SaJbhmSYSsRV9iTXMxG1r4U1BdMpCEHdH8Ka4ya7mAB2uaAFHHqUwLBQ4dbBG",
  "key6": "YTRnmtZAuBqWvJubrWfDzaZRnaWN5oHR1yMzr7hs2wcUBKpyDysS2o3gH43prE85rue5N4q9SUhSLFTKizF4h5P",
  "key7": "3j5B4BMATj9C2v7rjgusFKru2kuivuCFAjYKZUvxtEQs3mES6PjDMxvMD27q28qULdgPysRWWmdrPVXSVGTD98mF",
  "key8": "3PZCxN7CwdWCMDFQ5Qy2jBogJfuxY7pPpsfbME3RxwYzdzy4tCYMnNH8wmHCR2kN1KNAKnHSL5Lmv58GzM32fyAJ",
  "key9": "352Nm2UyCGVvXTgViUAGrKsrgtFzzZW8hhs8s9VPTfSVJzk4KChKVYwDrtmv9Pqk78XcicnY9HN5V33jaacVBU2F",
  "key10": "52uZgvne24s5nikzYUNUkKX9w1oH88uV3aAVcNSB2rWDw9Ae3trbv8NC1uGTDN5FuVRMA9KQ1dxcrV2U4KJKpC1F",
  "key11": "5rt6xCpFqFvWXtwTBHT171xB6eGDx9Z4a9wWAs2HYbiBMzwnfUyARQhoAvae7igpwVPUi2njpriS1S3iKuAviwip",
  "key12": "4d8VGAUKudhinwkFxt53you6WDFvhAEbACwCirukPGqDJXY3xXMyFMefXdQ4LesJB5fkN9hPjB5M1S4AMqYSkPtY",
  "key13": "5giySipgCM36JHQuLHof9Qiw8mcVZNtveJSz9juGMKbTEPTfhyZD42gXhGs2dUXUmaApgFGcqatJzrqkGgp9vZtD",
  "key14": "5W5B2Mtk6Zicu6ebxmwnXj2FSPRALgeTHHRFB8pCHS8DUHiUjthbb5LVjacFofKyou63M4YnjzgzRwtWW6vFfUmj",
  "key15": "3bwJRcqvLfwLvfDeHwLJHn2YN41HUhsZzktaQ6tPDZHpe2AtTnTVL5ydmwc6SMoy1eBEiXFX9wrGRiJM6TJKc9E7",
  "key16": "4UzRrsXPN2sf3qsBNdhdhPwj4ik2Kb9jcDkwuHkpgziJCD3pxj8KDJ2nCPYfgijxABTD8Cu9iKvqfyEFAX627phE",
  "key17": "5kmjmL1rBxPnK93uQPerYCX343ad2Dt25kQEmXjH6NqjdYsvTrt48FRzNwVoWjMczg5hrTqXLVbN27jPjh8jNymf",
  "key18": "5nX9mduptwLY8yYfSf8w5NmAMmRAYqZvW8uP1CpD2iC2k8ZWd6hfukv61Pn1AVbaKT7DT9dRF39MuYJwFyZrKCrS",
  "key19": "3S7t4fo6s95ESFqo3kSBVCAiCgc1dKZp11LUMQ5ZNbGE859smRRyJuuqEjvMJWs8wC1jKm1PSx8PazC2ZXZekuB2",
  "key20": "3oH7Rh85Rj7KLSsD7W9VDttW4qBxKQMdgcZD5nCGdd9aPp7hLhGggHYfPJEQ2k4SPKaHC8m1zR38YZDi5VnSxddK",
  "key21": "3c3TYVPhSWhQCSb8qVp9PLVbSUVV8CcXoKx8E6c6eNUB8u3KTXrdg6YKzRWBxC3m3gUSYyRoSWbee7d5pQZFna8y",
  "key22": "5McFKRvrv6xAq5eVCMpTVzi9QVewjwPnjomyGgofwB5UmwmdVLmQNnivHeuQSx1p9zkDRogk73CXLrJFmqV2oXSw",
  "key23": "WVf6fRwjhpgkRxSFQsukykjucWTMPffdSSsyPtTSycPYY3X6CLG2Y1w9U1F5sj5LGJgnyfJdQhg3wKW3xx4RUVE",
  "key24": "2XeSygJ17o5Dn8gKC9GrRQhPuNw9E9Z2uDS3avtUi2rQrhwXZCTH5VnJwJwRahoBNvgmZPv8gfZdQ5JtB38JvUoA",
  "key25": "bu8ea1M5K74Lo6Ky4fZsXYkYQGSYNmZ38weuUCxTKdDeZUnnre8n4zW22muYKH1us4zwh5ehV6Lw9md7oLrrVFr"
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
