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
    "3Gxaf3MsrfNkcF7mxhKKNy8VnxEpR3YrdMfZFroCCVhLYCvcThKLQHr5x1vBBq9HN638bEbhDBaxNBYYXkSVzvcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FmWv6omZoedgkwTU5CvaB2R8t9NGq1uwDkKHYneKg8EMrETKgcRgLCzDBzvkma7BmzUkLzJikWf7AjRHkvpX83f",
  "key1": "5Z6ArHZ5dD9mA2ZdiDb9DoL6uSeMptMhEXf9a5ENbpyKcEMg16m9bStbyuR9Xd8uzdEVp6TcJeMwUxzamhrJ7wyR",
  "key2": "4SQBCJPJcFpzHTj15cpfzegTeHMWynXnEcJtfCqNTAH2psAos6w6kn1KRx39ZAqvLLfhH3GsNjU4bf3R2NyMbWVX",
  "key3": "3SaSn6FusQDJ71Na3gonQjwvaqLoXPLXzo3uLfW5foNaoWeDrddkAdk2nFWktgwruyJN9YpXnJjsvtjGhdDjcqUc",
  "key4": "5ZWRaDTZ5TumqhdTwz17QFC24dnpUv7UaTeB4pZ4XvdB58mjT55quTLe5JzjgXYBSVJ4PJRmCyz67Krw3MjHeJxA",
  "key5": "4TBeKMkwp8Cybd46YC2iPP1vSJSeoX6Y8YxCbBhcZt4KB7wrwego4vTEGWvJ2T8wjNM2b3zMEb5dSHNc9AeYZkBv",
  "key6": "5MvfYKEGmkQpEvScmcVgp8wTLXxuX5nBwtWZfqmCcdgYr6xEpz6FqQuzz5H4qZEigJCih2K2JtuBXWLrsJJKd9Mm",
  "key7": "4FFWAuAgsTUBv8y5eZV3GFtve7MuU9VUK9SUhNn3GaCi27T7sf2Vpi3kWFjaVvhJDGYTicpwvYXMSqaeEs1tt9VG",
  "key8": "4eCxfrxLkLH1PDAfZxcU5qtSR6c6xyDnGgAo32NrgDeDxnb2UZ4XzXKt8GNKadetg3Vz25oXMgio7po52NZRWwbq",
  "key9": "SfjqmeUhu7Rh5aj4qmGFTptBKWC9Jta24AnFMveqmMmktrH5eP5y19Vg5CetsA6jHTmz3C4vPs2W47fo7Ds8w84",
  "key10": "2cTyHtFxSFDKa8JduDFbHAj8d1JAx5WMXeKz7qfLUDo5CAucBh4DAARfa3YTTLSPCHZc67xYcoUK5MYE31a6EA4Z",
  "key11": "4CL5y3Ngg5GNyFnXjR3BugvvnKqnzmdYRqq9z5AnUxMCK3jNXEXxKvhF72MuqdjWKfz7xFUyATXocAhcDr7cF9ro",
  "key12": "hxj5nNBQd8K4nSZewJhU1Yw6g4YGa7B2UY1A7BoHRTzCBusinJhSc4pakEoupUrqRFwaiHWAFajZsMoULw1fZTX",
  "key13": "5pVTkv7XV6pCXKPpSmLGazRMnHKuqcLuSYb64izELjBj9mEo83vN4gCtfksRpyUhRTJFF7JP62mxrh8sPgC9CvFm",
  "key14": "2naAtMA2NVFLXVF6NzvShVNHUyTLMJjqejUTRrZeM13etBB7XEsbbAn4iVH7nuxf5sKHixppGSg6JncWmC92DvJa",
  "key15": "2ViVK7JTvPnXiTrfyUjd3kHWBoKTVrPowoMSTdZyE7eohd5GWgqwyTBUUuUGofbMatKDsS1Qg8FZ6HNjm14VG3W4",
  "key16": "ojsPKuu22V3taf1neZrH9v6htzPCqnBmUTjGobcSN3voFf4e3mJmw9vqG8RwL1Z4uQKFti7Xi4yZRKEC1Kiqx47",
  "key17": "2ZGgYVarYbLz6XSohJXbYnhYXXdQaNRXiWtMrBPWSF7mzZ2DPrJivSEv92V6SmAijdi6uCQDnYgWNwmGfw5yS3x2",
  "key18": "aQioxbtiTYwekzBRfai3WDfkCjD5q6PKCgNq5XVwQRT2XYadaTzQqYNpcYgSAhVhNEExQqGvhXwDfYRjV2LK1nA",
  "key19": "3zvWQJTST6MJ22RQAfD9T7rNcGVwFUwwv3T7Wm46vNpg3PWvdCJMVuBZDN16XCV4pUxw3szEdVVC64EEPuow4hRJ",
  "key20": "3UcMu9Y9tNy65QnQTnbyKUxeeKUkQUXeLgyUt6ubM6H198NRs1NGfhf3z2rxPGyQzwsV59rsnKg6fvy7o3zKumhL",
  "key21": "5ZsRGpnsQbaq3dXYHM3ayVZuqufcRDUut4S1ZX4aCQEEsXPWjw5YkvkJAgknYaPPqQGRZCMpSKxarFRmGsJkq9q5",
  "key22": "5q4VxBn2cWAjE4jdwnXeirbgfxuYEF1r6o6Huq6b9JZ2FxFLaqjuS6rRokTGUVFbxXeV76zyygL84pao4wutA7Yq",
  "key23": "5jLitUpX9Ufxy7Y2xTX6auQPD6TsQCirSbg8HQAtfbHjvBVhAdBqrX1S4Ak3jV6CSKSDv8D61Bnue6HB8vX8LNt5",
  "key24": "5PTSePupURCCYLWLH1y3TrCahquaYUvsXyRkp3JbBgJJkHLgjTRVwx3tcagK9HsEjh3Z7iYM6Dv2j9grfsbGx1h1",
  "key25": "5dorYCXsaNgf3fUnQcMUwKdSzxvywEfCw8M8GaTCKfrgPfBQ4hZeUsCVmAf57K1fdoenvtBUwKHTCW4uUb5NTD3U",
  "key26": "5Ct6zcBBJBkNbjEnZ1gxWJbuwmtHzk7rt2hqPPTuu2xNoi4Y3oLFkqJYgypAf4WXUZD1M8kRvg7KmrNKNJCcyiM9",
  "key27": "51uosD9utVBLzLLxxbHYRUeQV8HGFiwwQfBpumjAXpJgbLLYhtyG2pcWVjcgpxtN9cFPLEreUBxsRbFojUFLmBFj",
  "key28": "216nRRofR9B6KDr5N3DjHHNEy2Hc2fW2jE4f9Z271v6dsSSwm6U23Cdd7dFaxmixq8ZUiSt3VCMaC6onnaugo6Us",
  "key29": "4U1ZrafKQ4j5wi3JJGJG7UTw6wiNjXtrRGxxappGmzU3PDhghzd4SvT3CFUS5GCEv8RaCVGkZP8T3KgwwoLqXPZg",
  "key30": "C9dN6XA5EEChLK6id5LRXFfcNAw4VFLgR7Ktj2ApWJ5yUBjUosp3s1EpyKaBJemB8k6toYb74CgdhLGiBEMRRdP",
  "key31": "Gz1345ZQAt3CrcUdtbJXhbu7pnxS7Wtch5S1eEKhfKJWk58GLHQcEtVvvdS7teHnvAUzmGG6s2fuphxFEHwrDuD",
  "key32": "2ma5Rkj2kZjdjErc1YzoJ4Af56zAL7FV1nytNyn152HLyNkG9YzkfVHcxJv1MiKB5XfbjndkjhdtiCF7Gf6axAYu",
  "key33": "2g9aid8xfRQ5ckohx9voxtKz9WqSxXuNiuFMTDEHLnUut1KSDQXx2r5tD134Xv9iuW4ikZYDoyrTTcRrtKWehZbq",
  "key34": "1G2oeoPnHR6qkwyJVq4LtxNfPxshWZxqrRoF62TmgLzGCMP3Ukv91AzuBXnKyp13hxnaJFhHbasZ1G1Fs8sXVxv",
  "key35": "4Eh82pz9EhzXmthvZ75KnrPGGUKV69rzy658Y4FxmTfvtCfX65vNTsa3bZ6NZk8CcSEsZuwrRRVQTfHBPZ3acEAM",
  "key36": "5WeygXZMuf5AFwiaVmrHecQQbd9fsqF3fHiCnq1fXfSPpqLGR23TCBsdsQ4SAGFkeSfBGA61sQXBM7BW4ssC5YWL",
  "key37": "2A8i2P2xwXpVRUroTDyhA8KFoKwYKe9BmZRfe9qgFtFGKjqgCLzBUeHzbQkDuzVapLdjvjtf7v7JfMK24F6DuxEx",
  "key38": "Bqqv4ju6JJHm8or4Wo8ZpsmHFcAAJnTJH91YJ1BMheHBjgeRgGrfbBJLM1KwBd7WVSBNbi8m1NRt1UwXe9tkTWo",
  "key39": "3186bazPKpCERNNw6qQmGP9raDUSpdkeEKQFNs5bwCyvbddmB3JJkpbLnm6cQw2Qj1NbV9RFoVpmNryVuxKPasJC",
  "key40": "5oKR9B1EjiVL8zX7eYgJTD8wnbKebeThKMWX76rSPZEc5ZNjqhivXGnpuQjhM9iBG1anDEfzVTc4fowCc12fJDLX",
  "key41": "2GSTLjS2LL4fELUykzzF91bEmc36RyeEadPySeYi9pD7dtxDexnPHCJQza3yZ21nr7yDmeZaoLvWcmjqG5jMDCdv",
  "key42": "gsNacFjYcNKuJUzjQbGXJkPrfKCtCD6onMtKimLEriwKe97V6GUPVyzfSN9RxNLXUsmEFFZR1Bbxyz136VJbtTg",
  "key43": "4s1WyjJstmrs9HWS19WKt2p2a582bbePqkab9A3vj5dGZ62ptRtxySDfrMMvwQVTgJrruHhAiFWToGfrgxKDD2jJ",
  "key44": "2n4kCticitEmCcj769D3GcPfcn7E29dCD8nknpovZLyM2vKdSHPJrqhqxrmKEn3Ygjwe3s2k1RTT3BugAgVfupvU"
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
