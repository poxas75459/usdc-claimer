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
    "52HVf6DJmq3yn27HGYrXdT3oggMhTTDJqagpZLJzKBsVUKP2AU7f5A8GRko7XFDxr5peJEvr6p53H3Xj5t7b3Azb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oKJXt8qZXmtWm4Zug9AyVpzcHBJZdYxKJ3vJjPGNYBD5S7ihyb8TkjNFk9D6QmKkd7K8rbWMiLcZvhEjjVC6mAa",
  "key1": "4pNAufzy2ATD8y38HZFvZouKX9ARqP9FBKcE3HUaySBU7wWfG7hsyFCGNeC2Wj9YwGmSjBMMMDB68FcsGTfpgV4i",
  "key2": "buaP5odWdnvDRF9uwjjv6eaAPWqdSJ2A1TD8kBYUuHvXR8DC852i6cMDhj4JPP8sTc11b7EMUo4AMQcwEgcQJ2P",
  "key3": "5coSNngae14HYKJ46EWYpo9oZVHgFdNBEpDauiZ2pkFVi3ytWFu8HKcTWcEeyPZRgXVzzge7hVfp9fruAqBEhyG6",
  "key4": "3shvXRdLMGQpjRdhxjn29GLmkjUWDAh5bHmMw6ZjSy5r9zDgenr8VxkopNzJC7AVgRxJzot3wHPZG9VKgk1L5A7t",
  "key5": "2jURhv4xEtRDuhKstFbXhMubEWymRkK7xwpyPnSQpwuQaawiPgMY9pNVPKidhfSozayhfSgR9gkTqeyQoAajsKSh",
  "key6": "395hfBB58YuUBURRGzPLYWDYh62CdkdKLmBWNSaQG4DTSk4buom53NSE4mMFiigTsJzyivieT5nPBpp2uiyd7jVb",
  "key7": "56YXJy1YKz6AbSLjDMbpXpXwBjNU7TxVsrHASYEUPZePxz8gCb46psmySy5Zm5ppobM75dauZGgCFURcYJqxXkvT",
  "key8": "3P2GjRmvMvRy4YsVhLyLmWebQ5CEWJJxbZQRXrMbrH9rjraKEuM7tmevXgXM9BvXJELoMCwR4MkeuN2eUVssyput",
  "key9": "2WRWMJdE781SUL65kNBpvUsjCJmR1Ma7AsvteQ88RFpKEYW3iTewFMboeWj2wnivtfxWh2YKehVamJycvCoVKT4j",
  "key10": "4nWwwPiMGBzmoNcevDaCp2NaKaYGdHz9SWhhiY8w8wLSLwUrjSkXfnbZRT629miQ7zWaZXkeV3sZ1nujcQq9oxpC",
  "key11": "37AuJUnDVUndTi9k8h4VhDh2b1NTWAZfZKZPSduEmsiKWGy3Uyhs3ZQFiWxkp28XybcH1J5XsQ6ayU5o59GU3JUk",
  "key12": "3q1arFbhVZf1hBazwBgK9vDTHmEMUzuJnaYBqWiNLEkRnMgrvtNqpfuzTcd9hxCXFeabHqWyiPyZmfquBCEdhwCV",
  "key13": "dsP8BjCwtp1xFWCmWHBMwuUm3oaZLETxbNhZTtxt9iuAyhVG1HAU3eVrJuiLrGcDUJaERU4cyTzfKNUL9KGonVG",
  "key14": "3TruXV6DG99MQGxytyMvEpDy5qYctxpV9DgYxgASuBWUUaNtgSTdzKDU11jVXgFDV4ToxWAuJStEaeVG6gEEDFtA",
  "key15": "4LPmFB77g65Q3Der4CQgprFdqXFp3kUCKBeSDo9SzyMd54iK8wi91YCXDceXCKP7uEABUaiZhiniMLryPTC1VoBg",
  "key16": "4PbsVGCTB83NjQrTDsPzaZY2xb4M9a1jU2yZYwZGGrVKohwsQgtmVbgiXzjd9ZyQFczcQKtz21gTDfLwbBZvDnLj",
  "key17": "2axSLATaN1drHfbTG6RHPBR7cvJudaLHpyEfScYSozsj6rMRhbz6aSuFxKSg4XxkyFkYbAFfwfa9vUpauCi8r4Ed",
  "key18": "5L4Sg9hCt42cwng3XDTDNwnFuEmk6DtyJATUW9Tv7U58nJAtBReNbSFXnhmeJmfprjz79iyHdM2EnkPC3vwXcA3z",
  "key19": "3Kx3QK2hb8VgEwTAj9t7wqgUAuqydnKibPgXhRRpKDmtUaTqNAU1CdfqvjsN24icJi1dQZmxgbrCuFmbSHemxr3Y",
  "key20": "3oUVSqvhF7pdptRLYi57PUh2okfJHm7aChpuCzvGZ5JbBJLTHoZvNFxirx2eNY6RCXxYnZabWjqTtqxEjWG4ASCb",
  "key21": "3wTWTzg25iFhwchKwFmppFPgAJs8CepQm4Bu7E8oqqy2YhRc1BrMYuvVzWTJXHR9m2pGP9VToszbnmWeBNooUgVV",
  "key22": "h47TFi7DVu4DgGg8CFG1Pgfo5wqK8sBwWBsU8vZNz9QVgxfrDwNHExbGYiwewpQdTPVdrVodQFajUKs8uzY4h9P",
  "key23": "nXmwVkHd7iPSWK5rbktA3eczAyfVUS5y3qKpTTvJNBGdLrVRoGWWeo4MdEB8SXEd2a9fx2yTiaJ2gdSCveik1aN",
  "key24": "PgitzV284GNZm23S4iLu7HL7mQSgaDRphSJ5VC2ADihZ2LvAu5925RFezW51L17ZYKKJfvmwUeBWaqzSXgU63Sp",
  "key25": "5NZMX16hJA5WQ2Urx2kWZnuvSx1VbusVm7qPXTh1V9CsAwJjgUWb1dE9449LacbFq1eVCzxWL4Hfj3VpLK1a1apH",
  "key26": "4NdQva96xgHyvPGQncK5BLw6hp91ZLwTuZ8fGMu29vuxiNykZ9KKMVsHUD8Y9CeL3U1cXfu2L6cvXXsT4qL1otce",
  "key27": "3gFSHFcYikFGUJZ4nYRWiqcM16Y7sHJNPSBbbwDZuzRYXyQ4eJpRqgNFuRN6JRJ6bQFxEmLzKSPqc35WbWLT13EP",
  "key28": "2YinhrKgSsNGnmnPTycHCQjd5t5LDk5rv1sbv5RBixXAq4DSjDCMWne8515Q3a1W7rCBoo13ERVkGunu15ijjQD2",
  "key29": "prh41a3eSWjD8AhEpQvpGzZSEgNmcdPHPyfZ9WzF1xH8Zz11GVR6iWd7W36PXdZtyrmv5a7yDNTeTJpRqj4CgWg",
  "key30": "4aeZWbQ1KtJ2mBWKr79BAtAwb489eJhZV7PuGPEzUV1qN5Jx9GqLamnVkrbtZjjmvVT3w3KGp4v8V3qhHM1s2sn",
  "key31": "4dw33DXhYSf7hkmjvbCNRudrtmzjBHeWzPjWdN7Fdx6XghMtWABroZerZo6KaKvFWDGfGEAFTLPqzA19n3dHnLKo",
  "key32": "5qrNHioz4XBdmfYiKR4taHFSKHfuf2jMypqENi9UN5VcTaUbHTwkd4zL8yNXWz1GDkvUAThoP2ASwTWKKw2EDKih",
  "key33": "5hAEKtkVCDuLcxjphk6VCdVgaywB7AY5pjWiqZEQvUqr9JWg6LuUN8GajQg4Z5puWU2PWU9UtJgz4j7WbuQQ1WCd"
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
