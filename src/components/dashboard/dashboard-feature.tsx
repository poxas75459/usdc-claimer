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
    "27ib4EEvFPNv49qRFkuSqo1pJRkLyB9h4YpHvDdaVBv8NFTyBnp2r5Pz6uG2r8HATWA8c1C857qWLSbo7ecYed6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wUo2cH8tigTtmumH48nEL65RXsErVK9aK5y7EpMgHPUVfRR1E5KDn6c88JB1Zchko35giKRQDf1Hw3SzP5LkRii",
  "key1": "3JnYvqNcpYLAiaQwgyYTTuY5UyzhK7RzF66WM3asXnm8osY1fzYLLoPrxH91hvsi87UvxMHTd3BidezNHtEgJL9x",
  "key2": "2eKoJC8YQds4tVALwdAm5hc9z1TGJZ1BRBRgARNJW3wjHgrTREQA1H6TV67hFNFB6suArKV4UqBMKoRDWixUaEtv",
  "key3": "3sbh28U3KetxoSPrhXBQjWdc3W5WV5KxxjEyRSg1qqgqLKRLV4zkx7iDmjnPRxzqD6UVKzhMWNFVhQJuUKhngQqF",
  "key4": "23DD5pY1RRdSRCdn85j9WH4N21KazgMBFDDYTrwRwdpkgn36ZvkJS9CpDbJKTJ1QVwxXczvPyaVftTjzxCSGudn6",
  "key5": "3hyChpPtcco758g6Ze9Dea7a75H2sbKjTusYPsj7fgZx8VowxGb8NjKHibCpX239tctDnuH9UCEcrowMgvydJAww",
  "key6": "67jbKbodwEvDibbEBwxkds4Ka1GD6fUkzykesZgavG83qAsFNixcaHMxojufM6pqzAKXoMAd45aoKMGubBXtCYTY",
  "key7": "ukphQ9hxxWDVFpreFdXqoiTA5wgg2y7fnXQkogK4msJYw4ossB7RsCmS9D8MNnqryXbL2xT8oYQF1berz4ETL7S",
  "key8": "3N9a6zyuKJJh2vcZ4eQb7ZasBQAWUzXpq8sHMkGSgpg8EjT2vcEUa9WSGfNujtNvsxgmaxMAC9psrDTTPg1amqQH",
  "key9": "2NxTNTMJCpvQ6FHbJGhumwKekKe5KY8UAyuyDqWq9iSJQPAP7RuzfT1TLqKLsqph4S2x4dobqNQB9Qm5T4Y9DB7G",
  "key10": "5U4jsMkhENXMjXZKyiZvF9iyfVspLVyXSvVpAu2nWXzrGHjUuz2yauxfa32cbkBJL74RcPVZR9pMXUfFEdbP5etz",
  "key11": "5dyhBpLyJet3XJfz5kBtLrKJL45MqeSYfgBFoPaZ2yyKAiydzvZ4pkXJFhfdhVhuhUnKbLHWT85R62FLMM2uRwFR",
  "key12": "57VVx6xGCFDEDXPjjB7sHVJPH2V1v5cPfKUiA6i4JBUteFu3zDYyrWAjPcuHtgaBR9GQBykBJ9MkxjiufN7JxjUD",
  "key13": "5bipchq7P8HJ3fqtdbzSxhwgWbJ9B8n9cFRDm9o8DM3VWRFDFNWTzApozWJmeXVeRUgq1MxatqnDqHYdiQ6prsQ8",
  "key14": "4dZpuht7WzmdEbudkqm6uByzQYV8hLhDBgDsdFH12swV88XLvSH5JoZUzSKMuuEQCNzFBES5RhCGZS93fkhedrPj",
  "key15": "w4eDeev3Q1ATyPfsTukpEYMc7WcBEDh2oRhJFkLsQGab6s5yvnBE2SpNVYwXstnFCcYyDDdeNrJABRcPRJuCvMx",
  "key16": "4LBitCzFgHkUGyb2thAhGwr1ViWn1WTqrhFAWDU14Y6Wh3NuVjCcZ1B3LD6cYMFZmfbtLVgdmiaUdThRqZStBqq1",
  "key17": "49Ckwej8ZbXb1dKmY1YLwpXLK6J9YXBKk1TLRBF7pSjVso63cvtmvrdr1W1h7bAwDwoybzqb53965hrSkrsdkNYw",
  "key18": "2uw9SjZHR99T62JAcrjsDzfzStWjNboAWy1gYgDYbMM2DP3YEYsXFiHvqYr3GfZ23aMwJd6Czt4ajBxkw1JoLbU9",
  "key19": "5xzzChknAezb8GjjSscYaE6Uy4j8MXazvuaqrExvZfLTiCWUkhuFbdY3uouQ5wHbezFPZt6ZeQWZdg9zf9dGuVR2",
  "key20": "5BSFmqDCZ9sBqC67q8s2HbqjBKPUy3but8oUhNnxHtVMDY2PWLHuZhSPyn9jbKYumHaLpbFZi5eUe4YFkgDTy3bh",
  "key21": "4Ht37y3iFQ1pwLDu5ZRozz1sVvFKffzh5Jwb2YsaAyWNjSeAZC7N83A3RHgHjqJDT2sYJYSLcJwxRiA8kJ1Hav93",
  "key22": "3KWnCwBCnk9g7Liso3NBpPzsZEcvjtMtFPYcDo9PnP4btzGLpKdqPHeH3QywrvU7ruUw5Mibc6s1j7Tf8zDRTmon",
  "key23": "2Qfypt6eNjwUXtc15hSERxRHxBboqfG88gocuDStvUPHY5b5dj4d658Sy4vzCSeYChX49WZHo2Yec9UF49AefRJB",
  "key24": "3X6jvd3dCCC8X1TR2qndtvX7oJ9pms5VhuDKqtffTLhCpGDKVHCz6snHRudSQEv6NaYNPs3GG15PbAp2EeVYY8bD",
  "key25": "34ES2GrzLD4b1xZfJrjSaWjApuAZdqfsxoBqrj8vTEvTrqc8fq2h67ghhKxB446SEVCgGgc2Z9nEeoYDR4UPEPWF",
  "key26": "4LUkXx4eAzNGLxFZ7sWwZQgNBAH3U51nEkjU1D1L1oc5AjHv3XdpWHSBEq2Q5szzQyvpQWWazp62xmDGDyW5ydv4",
  "key27": "42mDZdbq1Kh7pvmtcQP17k7cQ6SVsySzmK3kw2rRdYZ7qQb2dUqH9neuxet2HVtvMFYxQA86eCvSQJDVkBThwZ4e",
  "key28": "2zYPrk4DWKvr57nHWyNSCMHw1wd6Bu4XqRgNKztnbz4hC5NeQBuhjkjYngARHNVA3jrkFqVL2b6oCBRPzcKcmeU1",
  "key29": "2LkBSm8njrLKDYcXYhaETctuxMwU9ibbtuddHsfptkng4v1h13jsLpWSt42Fg84DbyKzpnztbDqkxR6dk2pPXQzC",
  "key30": "3QP88r2Zqdws4BhhzbCxYYYvW3DqdGmM4n5t5cYbPhFmp9VYc5nWLfD9VJ2Y2ZXhCZdSkpkXFWWWabnCmfzuSy5y",
  "key31": "4AmNbTkyyyhmcfApzvc4M5RD3EF5RYwFpsr1q29M4kZ1ToKnYkhkC79UQ2YiGJ1FXEJpBg7PaPpjBkYHAGKxgTR5",
  "key32": "3HYAQ7Xc4D6HhMuhZ4yDyHgZSmD7eP8tizai2dkFxcHsooHdm5qZXHYp3wwLRVr4Cix3f2itAiasWaJ1TBSbb75x",
  "key33": "RFjZdnBoEKfG4sB9xsPTS3Cwqz7uoHw96JdR6kRa1s1nMrAfX1Tj4jiWVufoptY3WknHXt84hb8uxSXpRnQNfch",
  "key34": "P94RcgdTPb8VEHF6jzT2YuNY9qi9WAUzYhr9JjLy6cTRdzWxLby7DzxnTwos79DLj37AGEoNQpVZTL5AxbHMCw1"
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
