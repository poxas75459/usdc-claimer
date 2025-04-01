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
    "5KS5AaBXqrPLzDqC3gqgbxPwGZvavn6y8rH5WoPwovzBKVcBiHXrp8TThA41ac7YzoP4GzyYZ9boogpjQcHymUFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XeiEV5Dfze6iSSy63E5B5NuHNoVLwvdWDVbV3DtjWz3njCCzvfuATpvXMSJrzPANGgYU5h1FuNySjaJvuen1y2i",
  "key1": "4u2HcRfr1CWLpUKCYS7jMsTCMLTzJ6axQoaHRRyZ7MSuv5r4BSGqh3qZ9qQ59eZszGEWR3UNKv2Hj8vyoJo7pYxk",
  "key2": "246oRpChEWcbzx8YyMkSTL8cpYZuytuRRstQBhiXnfW56XMLApocSvhkScR9m6syJT239CYgXFpyx2tCGM11fT9V",
  "key3": "3LimYRBgpcNek8ygwzZ5WQ4rzW5RXcZEyHDmShGZwLuVdKvakKdr3AkPFBCD5USKpZSyWKTL5dfZAMqM4mf2Pq9c",
  "key4": "39VgFJtqcCyNdozdbqUrHUuDkmuupJuDRrM8ACCaATpiBCyHrpmqJo5vhTcXRkLfMJpJeAKDmcr6jHmNBsaexe52",
  "key5": "21tDZSjmFkry4wa7eVu2Mfop7kZk5yAVPWzRkLZp5hW7gXsuUgLtY1UPRN36TUK4snV98SzMXDZBBQbk8zLR1bXj",
  "key6": "2439yUbCHWGqNzo3iBBAMCStU9pYRVdmXUzfLEwUW4N6apptUywMkhryAfqiQgajeAExGAJWV2U22ozg4CGCENAF",
  "key7": "4U9smwgGRZRSapdKjDzFxwgmxhwXPTV6iZsigxiPnqpm518SggaNXK1B66hwZTk19z9HhQDxRGNNVD1iMA9Yxx5d",
  "key8": "5KSq6LPyYgzkdRrzvMxNAzh9Sc1HLbuAowwSN151X5SQRi9LdTSW5SJNDR11fAowWQGPa6ebARTPSBaA45GGcTuz",
  "key9": "VUoQdHE7VP2kva4hYgErTT4kDAX6Dur4oDHPxxiHRfXmtL86Xt4xWR3vpSymNgTpUfPW57BWwEaW57kQgFgQYjf",
  "key10": "5MnApV6KUqgv7aSb6PkuhkWTNZRB8iWRsVPMFK7MQz715HZrtU7RF9zHzJSgCd6R1gJFaNpDqhBgynCunE1dDmWr",
  "key11": "P1QQ4hsPfCTVo11xmP8bL14kQdeUAmf5qDvcB5Uh1pAwBkskQHh2r39uvfGBFWQWYiwcHKFqWssRx2h1XjawFCq",
  "key12": "DtvHtU2fkeg5DKP48XUzBGkRCbjLbmwEuvYB5mkfSvjPgeUGSzV6h2uLfZWTDMa4puMYvD7uMmSzWcjGQg12ntB",
  "key13": "4qM7GnQ2FahU6atEr7okvGMhVQKkuEg1mYaDU3kMqNkUMbyeFkfGNGxk9jQkqCbQqTPR1zvzQGSf4zwGRwNSfaHk",
  "key14": "yjEgit9hsRhoKm1Gihng6L754nGEBcyTXLpE3WS4L4h6f6FisZ62vZ9QA7MgbRBkmgnqBRtZwrsQ5egvnvQYMj5",
  "key15": "2ytbwVAFsALNUh4JVsYUjuosqjwC3VgMVBQ8UpiJVx6naxF9JFvghydq2PgQ9kAvwep41TCFYYm4KxjBRHNwyxtW",
  "key16": "2coGfK5ZHA5u4x97zbgnUxtDgZxNHKiqMFzfKBPafKVvqrs3qrH8VeckzcydyC3JWMFQ3xaoi72NbNVvbdtscJ6o",
  "key17": "A39reBvDQLzLiiYQSnYB9hKyS1EoJ7NXQsnggqHG967ND9mX5JJC4c23sQ69G2UvL5nWTsiVA6PaK9P5h5psu5j",
  "key18": "Ri1RakYHsa1LUtENBwsQn8UC9UeiwRJJKH2nXATtMdc4mjtGSgssYobxm2P3jYwB4jd7u5JQimF4iuubRZ7W35B",
  "key19": "4Kdh8WbcXDPQtauHTpjfd3FWs7r7TXo4PP6vGWfNxBYRttKJa9uVD91qJ4VsBNpTQ7M3KyJaJzuGBUYeo1tQHMoB",
  "key20": "4ErNz2bDVqtVR1x2sZxWH3r3Sk5fKMrSwW9TR8Q6TmTYTm2RyP1RzRQrsKbE72GP1WAzyRZcBH5pvnKyG2FWJUR4",
  "key21": "5SbLBmMHBtdstoSMW451NKwBVepTJZMWaLFJ8VAdbwPEk3rSntuif14qdDzzyjZAUTDrZfzGvKy1zjY1XomaV13J",
  "key22": "2EEfn3h4kZ9ArSwUtWutQmzSB85ZhB9GoGyvPXPgJ2CrpauRCJtmddm3784iGbtbrwomUtBBWq2Ak79ARguWSd1v",
  "key23": "zuCh1XYx8YN5ShFRH5P49XooGRhbfKACgDkLybJeSH1QcMykP253dmTUC9WKuvBh8tKG4kdPdJWWvcnnBxYuCGJ",
  "key24": "36wLDiUPH1L3cH9XraL2eTz4pPQs4osm99eZYyowTDATcw6tSbdjz4YNyUM9gJTEevMNu4525aTJUezTu54dXvDh",
  "key25": "3uN1GHvsS8e1BEsU6BN5kKU6n7sL4cRDTjyLEXZrs6ukup5145aj76QQCY4RTt5mhojAm7WuJqdPtqdZXeuLwpPp",
  "key26": "4Bp3oDBMVXwtwGMuy79JiPzaiiP6M9RD8MHetGSY624xPPQRvUhxnFtyac7DS6L8GLC54Dojf1QYSR6K4YyNtG6r",
  "key27": "2aXmaKyCVqLdwhUvzTxdBn1ZjeKq31roYs7KLF3BLoaS1Rs4syicbWim9QCyxwj4DfypNJKo7V3bm42daUcZ7mwp",
  "key28": "4WLphBf65esbReSADERRojehxriBMrZYKh3XxEu8iCC2LfvFjCud6YjSWvqASBb53MxnttzHqeoypjvkBfm9FiD5"
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
