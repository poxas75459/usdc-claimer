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
    "2cEQzjx7XhFNRPK7tTikFG1Q491AiAzSi477zrcZrxbsHi7xjfDs5q89LYSqcrLuhdQSd3mCF3H2JpTBppsHMBgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52E7m8AwLVeFcZCSDbVMtVPENh2E7tR9v73vhMXsJkj4J7GFEmg8JEkgtecNjiduVhdfMSURcJtD2o26jfp6Nckm",
  "key1": "5xuoeoRsov9J3sda5AhqpUtLxZAwUruaJXGuCMgm6cQFShLviJJnBJbUmXRUafpgJgMLbFkstaf1WCJVgabvZC3t",
  "key2": "3EPmoPTXr99U9ZrXZvosqCnesBjkjn4kR4n8ufHuAepk8veznT5QLFXADH3uaakTvoLYKdadooN67Fn6KGQye1fs",
  "key3": "5dAJGgtfGTCXFZZw3G3JWALnrUd2dSpxmkZCYa4rVBQLTQWi9SRmusYfWKAkxCq28x4j2sHX1s8YdiW8Pv2Dikug",
  "key4": "4auLiBJzgpBG638VFexGBWHyzjsYRVAELsPjnZwfsauZZqnMMMzkqneNBSBSJupzi7RMibhAfmeVb7rPGn4CRDcR",
  "key5": "48WgaQXhw1zJvhN3CdiHi7UB4qZDu8FiFs6xZU8DMoKwZXki2nHJi1RhDSNjA7AHuqVMLbKoMjURS9qfpG4nGRJ2",
  "key6": "3GHL5URAcTtsEj9AuWNVhmA7ov5hCN8j2JqNYzp3hsecs85typtbMJkBjt1PuFUN65PQuu2Tb1Y3siUwXSKhPaHo",
  "key7": "2rmKZoAcNtJ4eNrfvfn8n87bCCkDKm49UiQHGvXHLpYtU87s88pNnM2ics5iD9XNC6wXqDZktMZHvLAibbbybTn9",
  "key8": "35eBSH9RC8ntQ38mMFQV1ETVGPFP842GCyJnXZKKJM91oZnLhpbc9g8cCZgNnGQJ6jwq2AXusNJBV546nsBEwKHh",
  "key9": "4UUap9VtFKXPyKcEhhfBBGJaKeSAz31q2PqpQBPfLLHG1ef9e2qozs5AR6EF27FrD1s9fC619ukP8cQoxWwHzaQU",
  "key10": "5u34vnZyg6yGSNt1yzKYGwSqngue3nkjgaXiajpSYgdz89W8yHkukgRPs6jDtAA564BbekUMviAq17nBoFTc219h",
  "key11": "SGiGMC8PiyVziEgWrBqhJTGQ1XHDJ2RnRereto7xDt8LEBsVZCYKBF2HiX7iNZ9KMNiCHjijTmWL1rTuat5dQQ9",
  "key12": "HQ1KGL7EtH4U5WY75T3gLNSiGVVVYsC2co5gvbuF7baCdvQGymt156eez7QMXG4APRSE56bef88EWm3ZyaNuLz2",
  "key13": "3pHUquBdeYKPuVKtDTSQpT6jmkdNyzNtouCavXW34MRn9zMKuise4VDYsrX2TmsDgV6booweowdB1TA1rF5EPJss",
  "key14": "2HgsRLFCckCT8UhR8FoezgSg2WPXP4GjUPnTrjE2GbHKqL8mdxoKFiuc3L1VPqNrUWHTKYAYcxq8XRGTJVeaJfdh",
  "key15": "V55oZMWpKcsEm7yKJUPKDtPrGMq38aH83FrBaGMVdsrpXbcM1jku98A2yuhRueyo3JTF9RsnkA4uTS5VP7Y34dV",
  "key16": "5QdSQJChFqoTvbpCX25QUYbBZkHiVAsNauogYoHD3bdk7d8kiYpR96T9zPMzpoB1Aif43xahpoxMHBZkFKC9DKjA",
  "key17": "5W1YLXUtHaQ4coaGkgF9xLj7ThQWhKo4t2oMDHMFWQzNZgKbu2W1TnLny6zr5zGyggoTCGBvE3S9r9o4BCBbyyh7",
  "key18": "5adbPaQNXQjijauBv2JfXmMqQbaeJTSL65vYqvBQctXQVMBGPbAPcTLFTBiZxpwvm9A2Xtug6dtuxmeT9Es4NG7U",
  "key19": "4Jtoxwb8bDzyWwYkZRwJjWz8MoaSCz6GKNRjbYr3HJZ2VpjigoWXqAimS7hjrtLq6iKjFwWD93s82ULGhErgZWPF",
  "key20": "4rFh2K4zZFVnDREcNvpDMLJjeLGSZ7LXDQikvG8qwoKAZMDSzZrQcmzqvFYNjbHTkz8JpJF9obQdwPHMuVzdJB3S",
  "key21": "4RZufgVGDqLMhFbHKkbt9yGYEg9V2gzkRrgnNKifQNncTBUtLiHvkfhaWRTnJLvdkBwiRhow4ua8pWfykXFGTLYV",
  "key22": "2v2NnXEmXVXB12ebC8RAYTyucjkgN8FMUhKv7AFcRBo3UMCbiPsS5ohTLVTEMmsm1upfNJ6zxz8VHjb9jF3asgha",
  "key23": "3setakJdxWTUW3FjxidRgf5DKsU7r6NxyA8T4ws13SaNEw3ASLHVtrh37HmKh8xPcbxWfnzhXGqYLD41k8YrKrYj",
  "key24": "4rg2QNsrdEgSoDAE8omsC6U6WMmYg4P2Hx6hmZ7zjAE1K7SPsS6BBtGpydANuUWgQm619R276kThvTT45Lezhqg8",
  "key25": "3qnUprQAwKjSY2XQVQ1cq1BQ7me37zEBdZ6oQwdkFPZtr5p32LwEF5DLWxpXvUoVGTsXo1Z1J5cWn5mjP7ioV36L",
  "key26": "5Zp3k6zXCi9pWerMSRPtrNWz9K9mWtFgfytwRFtqpEUyqjcBxDbA3cUvWYv1BhzyHNvrU21Cfb1gM75W7L5frkgC",
  "key27": "2uUjsBG91JpZX9FS3nn8ojAVpyPw9Snk1d4AGHGN6jn7jEBbZi3jgqXQGp1GHMEAeMTYi6FnhbR2M5J28TKcK2c2",
  "key28": "2iurNvreabuqNDzxcM543ZVrR8cxRnG5KziMA5FTcvf45V8SdMUZKnLMv2DF7S8AjP9qA4wx3ByQjvv6VuC78EFA",
  "key29": "442WsoYZrBrJnBTxn4NfFxJ1ELjkVuBHHFy9M6emHy4paigvzLBFoje2yHmAP1NXGs5y8iMLkw2PQeDxb6dhc65V",
  "key30": "3gZA8FWZaRQZt6KBAzxjtxYZbjMfDS5WsXzy4ht7jRgCsrTDVwqBdnQsvzDeK4GTYVLk6qb98cCinj3H5mfKc5NP",
  "key31": "5tfwPQPifvdcvEYkbF3ptRmy8BTdXoCHpRn4ukYaondG5nSfS4HiSC6h5evWzmyKUjUFpTJtLEQyi24V23YLBvEs",
  "key32": "dvC2cufD9Noe8saV8kNwkyzEfPW3VG4zYHLDHRGhKpMj3bHuFKD1AN9G8GhQSZ8quZqg6ncn9A7nnSbzAzqe4kh",
  "key33": "3zhEHmCdWMjcVjgopyH6g9nhaK9MGHD4qww1DPd3K2YjXnPKSWgjZ1qtR59ZiaEi9SfUEwBzpu98DjfJo83Ni9mC",
  "key34": "iJDLQa1L1LybFFexw3JeCB1AW5u2MgmVDd5eJKicqSMMq9YTcuroX65yuNUFELxHoiDRNAuJKh4CNBJqN5hvV9Y",
  "key35": "34vb94b2zkauBFBp1cZsoXjxQ72Ec36PKLfXp3gD42YuM2yatX4iiokbENdt9DSq5TAR9y1JFoCLPfTy7ENJ5Q9g",
  "key36": "5PmsM6Ksi5q8AiV4dgeYGUfqDhW7a8BLyDokJwx4yU5gguhg1BXBXo3sGvfcweZTVBe5iYXaWsWgfys9YgLZeENk",
  "key37": "272dbySJWTSdCyWJJPDjRiygcRjNCD3kjyG2Cmj7EtRqManmcrGydx6tRugJpwqp3gTSqY1SSb4bb92NxuodNtop",
  "key38": "4g4ZjPWs9PDphpDFpcJvfxZN2YfQzvDsq47Eaas1dumegz5J4Lyndj7dQ98WgHwDTYu8uwtVDFyEYLuKQvLbhvmT",
  "key39": "5fManLfSWL6AUbBSH8wD5DNFusn5E6R7oEw5VRUjKgLe4CG8YP9yokBchb8WcA4HXxLN3iYWgUuTg2DcQCG8cMxg",
  "key40": "4QeMCMBbH9Hf59exgjd8Pb6hxSq3wRdbsPEHzVeUXWAddz3AZxa9obSehRNJmDwu8JqezBji1p9gfasKiCpYDDV7"
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
