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
    "39MdyvKu65wWt2Entcw2rLiLgNmSPBqBmAaG9qmcPgWhebKubiBeCTVUHN5YUCvE9Y4ig1FuTopX759UFfqcpVm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oXQWEexPVN5egsLTTVFtxkrEprK5MxTMWeHdvwFWYQNCBgWQampQhriL3VKK3i5UwFeRHhQSJWKwUfzk2nS7S6c",
  "key1": "2bZtfEsuqqCodYjP4meCRfJ2XiTRTmVA5sCgnFe9Ee6ZWuJKBEUYzgjJsfX8ynxEiSev2Eojn2nf5TDU91YjRvBq",
  "key2": "5FtTLzLaG9qAbm4GnjQK8ecQCBBKNVW7ixarKqoXkgwA57s1cBiaqR3auyCjQhxncAUbPzKjxCMnEstA8qxHB6Zh",
  "key3": "2yhc9xjyc1ezjgfHsd8KqAQzPYD2SE2ocaJrZ4kAkwLXk1jJgZH57DyKaeK9wDXpMVquTiPfBeKWvj1Ke4dRk3x9",
  "key4": "4d6ZStgcYW5ZCcPqe3GGx7DQAA6oNh73NxH6nx3EufUx2bNESBBt97WkAjyKasWefoWJjCEGhu8aT7WBhKzfnJMX",
  "key5": "3q5n9khtXdpxVW75V5bPbmx2Y3VCPENJci8DwVrAd98U2FBq6FBh8BxzkbhjEsR8wZR6TuH9wkWwEhxnzzqFyxYC",
  "key6": "4puVY8HJGRopq7evgu8M57b4joRYy1WJygF97MMMHBAWTkYYDA9k3kX3aDWsvgp3LzdcstZPPXKBPM6m3R6UqDHr",
  "key7": "bA29dZeVGPdVdrcJoh8E492646tXqSpr9LQ5WDk8wdjDspNkWQjK6TKm78gysmn6YBFWM7SCspm46NXCXxXbHRW",
  "key8": "4KgqHPY1CHroNDKeMTZx1GgpjxMuUpDSo4EyW9Rryss3pgGXMzQNSZkcYvxXdeTy2k5AaPimVKjyHAnbP9LPK2PQ",
  "key9": "29kgtm7k4GEzecYYJwouw1rYsHDDgDnjqDB4Qr5P37q8AGGA6BGpbVQ8tfLKokiPLWmg1KcBkPk5DQCKhaRqQUDN",
  "key10": "4PQpUgxj1tqApm8unjj6PwBfqxtAiXYPAeY8DEaXdjbm4uFSdrMmgHjB7a4yBsuJkkbUY4QpkxbpBQnvbVJCZWxr",
  "key11": "4KbgHvRVB1jJvaXPbur6k2nDnK1jspDQ7pQEfiK7hVDmgtoaEAuyKrkQgiFr7edEFpqyNPaXpGwsJzN1BUsDwLQg",
  "key12": "2AfjGYD1kMo49mmbRoeB3XziTnABZYwnigZbLsiNFytuq8jJzV5kKD8eitUKduLHeRBjd58F4UGteCyhiZd5aiHb",
  "key13": "3fFMCkCMT3ndh92dTvhs4de6vCEUaBdTA3PtCg68zpPGKNifHGQddPbeNNmwoxBoTrRTtX8K6ky2EnKauUHS8ixS",
  "key14": "2EnnUUAdFEyjTx5D8ndJsYKZgTNjA47JiA7c7NHGtay1ksDr2VScnFESkZCaVTkgHwQiPpbLkJFKTMxwUDwDpeyJ",
  "key15": "3pDBiUJRjTatjXRnrdvD9YuSvB2YYSMi34ZeQQ5K8y2Hb2j65xkiPQxsQsyatS56GjCerT8NX1DDB6wdSdJVGpC6",
  "key16": "6KjKDaiBTtUMVf8GKS3cMFHf7UqV3qrDeVZm1Hn1RLQR7Lh8wHwdtN1io5G5nnXAD4VTM11ZSCN9WTLJ2cRDa2y",
  "key17": "5MguGejofqAYN8UfZ8EsZUUkH7q138fEj4RBB6VgUAgKw8yNwZKGesiRpVbYB44wQcDtS6BrA1QUye8T39hk9NQ7",
  "key18": "2VCimveMGj39ZmUzfr4xw8UAWNUXbHrvat66xmanaEtsBrVZ5yKrV6rLbH1iz4nsAcJCNtATchA7gZzgd7xkBn59",
  "key19": "2tfUvtwuaijTGG5AUt1nV2pg1ZMEDwEmUBT7WBChp8CCXtoQhR8z82frUHR5Be97rFMZ9kX57B98yDxgArSKycfr",
  "key20": "62oUobmd5yLyLkhiZgXooDjyofSNQQTAhcCZKiNGMKAf8zZvGaaq8rYCt5koFw9RH3g7BZEEQyi7X3KzbataJ4gF",
  "key21": "3nJr4aHAMh1seaKJWmZMtMPtDMuXqsbqEpNXaZ6etgpycBJPXnjPriHEZoTBzX7f869CdGgwTVZ97nP1ZhdLqu5z",
  "key22": "2FHbt9jVfkhwUPEmsuJuWXKDUkAMUA6HgfCMKQ54cdFh3Ec63cNNJqm5VS1PYr7jgRY3T6xVC7NNNmdb6qukntM",
  "key23": "2bdbDyg5NVtAkidJfkqJNLFXqZCy5aTYS5VPLJ8YgvQ13i1Psst4KG9BDAqZw5LZ5U4kvvDXJVVhJgujEGNE7qay",
  "key24": "5RQLAJFTHLdbay2HQDB6N9Vp3CKevd2zfdEyWewdqWkvXz5LoBSZfpJ8VLN6PFK3txcBWzdYKWbswwtATjW64vTE",
  "key25": "3uW5dFty3m1fj3txFVwx72CEPBYtTS1jXTq4h8AYNNigRutGg4B8CZXXSLanG9xo57WWtPLF3uFXDxLbhKksaiaU",
  "key26": "AhcXH82Z1vguBYFvhCHkg9UvJYjc6BAYMnyPQ2ktz9ohYC6fTRFWBTEpRYRJ3sVLp54AqfNaAXqwhXqnm1TbdfL",
  "key27": "2FsnNzF5sLXJ8vzchTLQfr5teVcHTskmtUgV8HVj2eqAbWijiHjDAWru6H8ZpkPya5xWUYaVSfYKmcVkAcb8eKiw",
  "key28": "ucwMFPCzrk1v2mhM4B7kfPLiTQoFzSqZyQKKFA69sniD4KfccWbzRWTMEibk8aXFz571Fq1nPHzx2RTwqwdwob7",
  "key29": "2tX31aGLfd3uBzMTeQ2ZA8dr59Sx2h3hZBJ1HT4X8LvuNzW7jnbMWPj2AT3UpgCKzEXHRSYtoZ4d3LUewq2o6owT",
  "key30": "4EVA1rjrn9hyFnwwy8JhWWP3jZEscg165C3z7treDHQJ7MMsTcg79HDes1XXFgVvPEo3bfXdUuJ4AaooQickVpJW",
  "key31": "2DLG1qmxaBaaHnTfpCvpT7yFXzNz5ajVFBbwPu3JmXEbNR9Mz1PJRyyjPHfpkyB3tC45FtkkESkaHrz86zqEV8aq",
  "key32": "39jygnxsLTk8rCDThGQ3PFLnqS5X5jEFX6RUXrt4BDGXLdVisXird8ZmXUY1mHisydxAwDHdBKFV4ySjnbp7xiSH",
  "key33": "5a233cu489UfN1UXdWPrNuLKbrnrB5kTDkU6ZyuRMHBVufuyDbNZVZ5UD5EF7ABac56SDcRjvF39wWd4wymQeHws",
  "key34": "2je75UeZRpcsLnVHMivkA63FxPBMcdJLkkjF7aeUuPLF1GAEELRbFomSzS2cf7sxda7QABDk2TmaGzLjgDyMCqsu",
  "key35": "3skYiFB5SH82vhdhS692xKDjrL7tKTFz6tfXg5bmYSH8cMnftYB7q4baRzuoEmuQi8KhyHFYoggffSddJJ3JenYE",
  "key36": "5x8c1LdNumvX8JhWtFD61bSeyQWVGfupMvqUMf79W1nHSjQSPHA8V6R1f9x4556P8rMVi8rCvoZavaxuCFxontC5",
  "key37": "3AkZDbiRzvmnSM6KPDwrUCYw2xmAUpPV1hPf2ZdJ7jDoPzpMPTB6TGda9rXmJyneYsc6w13JYxzoH4JUw9nXnTxp",
  "key38": "4uikLnW4yNuAZqSUrwUcsH1ftmotkXDnA57fEVs3Ay4RBnmsAThWBt28exEDHHgGmMEi7w4BXc3jUwjrXt2JjkKZ",
  "key39": "5nuBtqqdQHcmmrGzrb86bZTvGdHhaKd4ZLcyQ4foT6zUSgCZC1Bvu2M7HinGTLe2qeUQbYyvtUvVshZLe7CPa9YA"
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
