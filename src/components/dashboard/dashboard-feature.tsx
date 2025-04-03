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
    "34PbiaVJKmFsRUtCTHihYJHuWiJ8yVeGuHNszWSHwqLK41srTMtq6G2f5bCKmhRWb8gnEy6C7QMX5Wzi1yDrAUjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v5jxcqFZVu3gHzSDQaaBMEPd8LstXGxkfRtStGXkT8z6wvwHzPchRRiHQwzxaph5NoQW3j6kU1EahBcwJzYrgR8",
  "key1": "21px7xtzDsM5Ff19rQNRkLUd8sSHfbPpgZb17zsaN1izEE4m2Kzu3bjLx6FksCzgJtqdfipe7jjgBqkJ4ypvNkgA",
  "key2": "4Qr5YZsgBBFwbiGq6g8d9GVUWperWQo3bUJAkBLn86fudGNYb7PcXK3QtdMQ4AEBPkTSFnbSRfp52SiZSbBWETbd",
  "key3": "3yHchYtmWpcYw1pp12JseBTGHqk34iWCBPeTbkd3itbqjE7zJS3yFwVVgboERWMjYMWtfVALpKSrsc3TFo3kRnyD",
  "key4": "4KG53C9ZvRcwpBaMbeqYRwhP1X5qkUERyjFkCTwMfdRw8xKrNEpQZHcwD5NEumRCCwaACDTSEGCrrvc3PCdWJeoM",
  "key5": "4EGhoq8UwNgNebzBGswgUgzZoo4ScYdGgzV3tsuaYNG1c8FhapeaaGPZRXa8NPQtSC9HU39sGxMPozCQLi91kygK",
  "key6": "2sxxeSgPGZToRb6dUciwPAvfQZMq9iJ7pH2qDmBW4S8STyvFQ3XBcfx7BEuhfW1cHvuwqaV3H2VKxqJPrJsxyjAD",
  "key7": "2PFrchDnnWVgPYn54PL663Bdpz8Z3JbStGbrtY1rcTiKWMNgaFdLcbWFxfohE2rYeK7oTk3raQdhPdicoJWtnPAE",
  "key8": "576muHiz1wt5P3ZqxLfHvUZqdmqKPdoXrdyWXCD75notNpp6vnZbgTJU1xtzpk95fYXSpQKe6uGdgA43GEASHUGU",
  "key9": "3BVG6pGXwmZwPqMKwMLsbwpckGbeffqjfdCJ8swyo9sziCPYmepe7MLcvtHWjrMtYmj2DjQovMuJcMbfzLLbvqEu",
  "key10": "2CpfB7QoNtJt2n78RZ6T8ihNhAwr2YQDSocyopcsNKny1D9ZQnXa6paD9XgKbzN9dHKuFewzjqH9SxNxTBRqtsjJ",
  "key11": "3xgyGpHPopocKLY5YJ42a5UzVTwjHdBH5QhehHQhaGBFYEVWXNGn81xgax99DNqGgEFiQpeqVVV2XVj7UScyGcwB",
  "key12": "3ksAn3h7CtYqVnbpcnMyp1nAQ7bPuaxU7cDK9cPdbbJrTNZnsaoRUcJcNx2Pt7mQDVXBMt6ve14vBDi4boSCtDrm",
  "key13": "2Ss4fZX3KWh2YyiT4H9LNBen7weH386hKsgWDo1Zm9DKzYLAf3i9c7iwWtVNNWciaDnH2i5nvzsnwptVmfJEgvtc",
  "key14": "46a4bD4w2CbdXfpXjWDdYSKVxcLtFc2cM2FpTpAhMKTEMxrHm9jYqAUhfoA9xtb3PnSAJxN9bzgDb6F9J63n3pC5",
  "key15": "3F6Di5nH13rEc9UFCiKoBM6dBEEsh2vtsxzmF24U1uENLuhu1vktK1oRgQVvf3k5g4MmjtJwpWdc1xgGS5ZoX3hg",
  "key16": "5t83nEwpvFBZS5pewjngXioaE3MtrFTzSTTr2u6XspgLiP1oDA8GcKXon2byHWMs9X1Chd8JBmXT8B58qNtvFBNw",
  "key17": "4wxguDvdvmoucMbCcQjtdheYedMarKKt4PJBqx1quM8iettEzXdYEEjEAq7s464S2wbq6a3qhGoo6EC93uCen8wD",
  "key18": "2pYe8jm7LNtcXJiuEpStCTTY5tFQid4ueK7KfhRmT3DNfQfpdZDM7HCTmry5CxMV8jE9VcgLrfedzXG1PxEodd4a",
  "key19": "5wRjNYTQi8bxtmC89PJPXj6QFbMWcH8DrfRPg9ekMcD5YrPMitbc323A7qyVcp1qCFzqwECDUdB45ohsYiMW3wVM",
  "key20": "rzF1NhooyW2wZMsqncPAiagfNt88avWHHeT6usSJq1cqyYGGkftKHdNf7hZs7kYePgfNLoznTHJvDZcUua9ne9N",
  "key21": "2gKmdJDrasHEkcLcFrLabeHqH55RZHf24QbkSAiQM4msTesHxNuG4rRhMRWtywaXQW2SXDY8iMc3FcnEbH6iejwc",
  "key22": "5eT4KX8Beh5yRLVYT1LXCp48NL9xhXVFDHeC7PNg1JxB4bmSBBAwxx9Sizt4sNpeeK5GjNU5NpM2Qd5E7Wfv1Qsw",
  "key23": "63pYEwqUu6vQDaD9jvyDSWXjYLsnDTKCqXtw6zphy7RAwr438yANwwZcrnbyF3UGAocLwgnTaGXmx2w7kgmKnDbd",
  "key24": "3SdNV5maznXbz7xR4V51vinoqAStPmSF95gpBNBz8rbaFYq789pVw8MVPCTgkSpHY5hdAvQQxC15NkWG9cVkR2s1",
  "key25": "21xjBd3VRAcwPd8EZ933qC5A6ikzdxEZSd8gvZSQLNjTr9KYDQxwvPqUKSAezv2qSfuYjPVE5Y2VwgRWryPiq9x6",
  "key26": "4btbt9H919t5b4m1uhXXT9xAWLzyDLzcnqybiMQt2aL6Xqm5vrsnuY6gEHwwXchVrFe1uiBEzywfxoYYkURjkEBH",
  "key27": "3LdQ8ZfzND3xWmKq4PNey1szhJmqF84fvNFUGS82V3484rRHZS4pj2EjfQFbpvpfM9oYRLbY3BzRNYN5jJoTcakr",
  "key28": "5hfsa6rWfWMUSXY9P4DfsjTgxapBdhKRnUPZKEjW7C4BATgtj5F1JLMLouGTQK2XgjnE2CCzsMh3PvzC7omENcAu",
  "key29": "4mAHYqhvLrZqnYmZs5dwHG2veh1a1K7wePtTNjgjS5dtjNydmJJF4q5CPheE8wE3hR3XWremEsA74qGkhHKU224i",
  "key30": "4B7Xo9xVZocx5UGxkSWFZhipsG1LE6Ve7qtjGS4mVaiVz1G3NsuFxdoTfjRKicgTmQARZ3963iUET8PT3X89NhNG",
  "key31": "33foyazPhjQzJpch4nZhGf74417xh2tbTRy8keMuY4JWsAZgoJLcT6m88GzFqRFVdvEkZtApDZKDcbpMs692n5RL",
  "key32": "4qDipTs9WqwzUKy49QPRzyf57kXDUP4RHGaCPTDko8y1uagRRitrNd4L3EGrtu5TSe6V5AeK9ufpi5zWKSTiL76J",
  "key33": "41vKVUPEdnoDo72WdUrQsMbLDV7HhWctJoWyuYJh6AWuUe5zuTqqiNCWZ49PEZnBuLQL8GaxFBdvDU8UbcS1y2nf",
  "key34": "E3ihjs9YmKAr4v12Bzcc7jpSBQKZDcntU5QtqrCCN9hfmckNV3NtnncXTTKCneeuJif2o3mnQhKnGtdLYCE7Mon",
  "key35": "3QViNyitdrCR7rGy5YJtBoNHATcjkbM9vZVvbPTr423m3hWWcrvEMokxUJcALCbQ4k5ZjqTVwiN6Gq21jRwZy6DS",
  "key36": "5BUjdZZWEmo9YRSneUhzzj1XKZPHXBEBmmoFMN7RdBQyHdYQy8tVVs2zgbFPdJ4e8f2aboUWREyJ4KSpT38VcWvw",
  "key37": "2Y8LdS3CebekPR57UvH7Rro1P83EbGjL2kzK7nfk6r2L7ejJc7xdsapTYash19J4dYLjzoTtE4YYsDdQW8VuvsiN"
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
