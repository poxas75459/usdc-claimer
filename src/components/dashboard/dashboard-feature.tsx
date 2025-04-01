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
    "2aMcJMuRpDFwsc65eaJdwv8BWCjAcd1NSwM1AQdWTDAMMDTpt86zvYmP8h2bNdjk3M7GHwSekYKNz82ELPuWXXDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YszzYWhvUhckQx8EiVaeAv3ADTwMzguPKsfezgiVY2mgSricXZb9zkuDr9aZeLtHSW9ziJehJLeNSiQCKbM9iBf",
  "key1": "4FdPBsyMQ9sgNC2JTwLTTR425PSPjPRp9RTD9iYaALh3rAfjdZ56Q7ea3FcZCPCgAGBGJ3rRcswnbf58kbCisici",
  "key2": "2uEhQPGPdiZxgr3Zj485na75dzsvyBY77eKdetrye3HfwjUZsxhauXgpkXPFU1MMDJjbeRz8LdstzuH2WfYGWzs",
  "key3": "CK1Qw4jUMRUCaunT9iD87CnRgtJ9uB697KvZFpg5QxpXLtWdsYfs4AFc5qh3GhMJ4Qurc4DqZEmnpJ1Gu4PK3M9",
  "key4": "2g7UKkRQaHD7LheVvEqp1fRhCQUXQ5wWtEwQEBqB5UnQGgsUSnw9wdr9ik6TwgdpbvaUdrnbFE3KonbbMZNFgAaR",
  "key5": "3YZ2hSgssSMSDoE8te4srvSukxgSSThwbZzArPtyXHrCgyBzjVvWaRJ5kWGUAj3m3u2BRAtzJya5iYHpvbwVW4Ws",
  "key6": "2vboSLjeGz8wDUG4vXUh8vvT5QWXT79b5DLpCvYUDxoFSWFSaVfgiRJUcHwGpkpQFX8NycJc222b3vFmQF8y86dQ",
  "key7": "5Uezxdsx2AgpTXhCJfeMwSr4FhZcoBknve2B6eEtShMwcYGVdZMjP2N9TpXWeoGHeFfBgU6huujb6sEvSG5wDtXF",
  "key8": "4Nrzv9zQVstnV2rF2Th8G8WYNmeSKVjC1Q7fuPurt6NSUuB6qs1Cd7yiY3UnaasD8JFTyUktf91J1w6YpMYW1UvJ",
  "key9": "dbmK98mVj47u8zzTrtLZ7Z8FSvvpXoVK2FUbGDtsWo3zJaB3vf9sxXYJyCr6f8q5hF9b9qNM4PZmhrqtSxg9zjN",
  "key10": "3cgWaaRjDmYBZCVrAHxC7k8cpsjksJ3LrL66kS485xS7S4ABWwvncth35hTki91HxBsXc2CTGjGDFzUaDYwJdETa",
  "key11": "5gU4QUVxM9oooEcPptjnRm6Du4UjPbnh5fKkPhV4GD7GYEF1Zzee7FMMYPBnkZzYS3nhHgh92gH1mnHhbGmouQvk",
  "key12": "4jg1dooLJaTWX8sNTvpfUcN1UXRhYpf7Bp6VT2XiftjqeyZr7dez4nZsFJsTjL9PtnKJxqNgK4Zzd9WrZNFDpppi",
  "key13": "3CK7WKd5RGDi5oPB5uc7miSSVpopTFizXGwE9e6ZFS1FBK49YXDbnnCajpjyWVMf8wm2DTQuCtFdf7u1SYvF2ZdV",
  "key14": "3drUhxHEoiqMJgY7HGTGNjMsHCzAbGe7UpA4HQBkDRuD75cRMPDzboCkbzAuB1GB9edpUpznRrs5ftNH73ZjDerh",
  "key15": "4PAwkEbHkGVh52uQAb39kaqk9pZMeumr64ZsaJCrN9THxLvW7HL56wTZdf44xyCjZtCB8XGugUZ9MMhkMC6kiXnC",
  "key16": "4C2gNdY69bKLCERqZSYTX99jv3Qr87BxQ12pRsFz6ybEFb9cxgFvV2SbwxKoiHqM9W97TyZgHHtdUjZ5pfV6E64P",
  "key17": "5Vu2sXGMjtpw36S51JoHgZ3GwrLbeYDNNFLMnSFBJ7pLQsawEMyqj8FKTQM5gGTz8JhB76cDNhE19n3wwbN2d17o",
  "key18": "V9aL1eCi5KiVy7cZVGSoDURsNnLNfNL1HUbcxc5ngeXoSmE6VJsu3TZwazQmQvSZ2BMDtFzU2hcpw3RMtZ6rzdc",
  "key19": "43XscSbA8UwB6Xq4w7658u9ygJh7AnA1oy2Mbn6jVhC2C6iQnKYT2je48wjQxMhcmKPS5oS6dTvnWvRDznCYhLTr",
  "key20": "3nS3x13KRFCoTPZmJ88Ea5uGMZUnnWYPsLn9j4cYGWAWaCXCyheKxWWvcB68j6rbuDJ8BU9V7gXHsEmVezj1Dfkm",
  "key21": "4GF6L8EK5uULLb32dAX3zrJQ1BkzD2kUwXPnLvBcXaF4ENEmtoqsDRhhanZnspL5aMtYArFMwn2VFvp3ffd6gzVW",
  "key22": "2YsPJmiVFZUm1aKv1fXK5Vp7qNKQ3ika8zkPF7jpo3bK4oa3ACubLEKduoNzi39DP6T7z4vX1hHgYpC6RtTuYR6E",
  "key23": "2anC4ZGZvVRht5curY9RAk5HpYz9B7sTQ626KmLL6u8hSWj77RDpqtKuyvEbk9U8FStfYeb6mY7nMzgA5aNV9aUQ",
  "key24": "NZ23ZM1AFVz96v956YsXQTL9UrfRhanAUUM9Tf9sPPiZgbCSfToGkgjt9YU9k82MrN19Dect3RMHsVMFy39kJBd",
  "key25": "2CzFcSsLX76ebMEocBZCTQpRjA6PdhiZVMrRnD7YBFVVAFSVmAzH3F3cTyri7fPMcYMMBdHb4oyWMchfq6qBXFP9",
  "key26": "3JqaDJwDpAxVmEjYoY1cQ1V6kLPf21mwX38TuDQtriE2CxYG6ZkyfLGedDa46S2hbXvgjHeLaPeDTrnC5856ArAf",
  "key27": "fSQuEpMJa4b2KkM7WsYJjbNZibZdAyG5o8KKkw52BWBHHcdW6g5ZPqmAxYTeczA8FrSiXHmU9x63jnmcVFfUxoZ",
  "key28": "2NBENhPFVZT3r7KboL59HTEnCdiL4WDBXdYCTePRy4qtVxdnsQh1FfBxZ4RNa4YUabJuUJEo9jgapEwtKgKXGCdT"
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
