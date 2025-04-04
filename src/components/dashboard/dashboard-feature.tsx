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
    "7brBFNVFyNrdr2fUTJnNeWAzwkUHE1bNuASsCewFVLFqxHVuaAajFR6AqVHJfPDVLw3uQFnvvniQCq5r6poLuNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CxJXit2QFLyFDdkH4d23zsLLhQPtE3MZCcGHZ1B3TqBbKMsfFBH4V3AfWGVTJxh9gPTXyoBVrvnVCRUe3itzihj",
  "key1": "2ZRgcnEaCQMvRw2onVYUgPL3jQ8JdGKzSMwJqMNsw46SpUNwpaJuSkCf4MYzHtBvefigfrYMNbcxQS8b1jkFVc27",
  "key2": "2c7FLzTqMSPy9x2rQtn69EuUZDVrnvHxwWvaXQSDEK3Jn4iWRXaup14BAw9B3egaXjpGFKw4X3kzKbBT3Z5ihH7k",
  "key3": "33A439N8LvgN5iXwxJGsU3dkHVKJabsNusN8BszwSHME6c2n37L2tu1178SwnZDHZwunzzHNZcbd5uPZtaZNCuSi",
  "key4": "4oVMrZxGcHhQ5HtVNgApKWbxNguhvvFNX3fJwRsHRXTWnvNW6agjJid44LrdxDDVJsACweDHSo2WStZBQy6zeW8r",
  "key5": "3WcLEU4K17hDB83JACaDrPe75gGyFoeykdYUCUkK78BvrXEDFpqXqrZiZa8rhJqbCgsE713BTj8bysi4zztNfMuT",
  "key6": "2SW7RwiMSKmj9pCAfVSnfm4tJfiSdt5Ss9Tamy4rgkx7Pwf1e3smXCfrW1qt3F9ySaZgT8aKgABL1qrATT1AnDEc",
  "key7": "3BgiydUf7Ng37zTCciDpdS93PFC7gCxfPxpmsguGhdv1cMUjxB1rLSUALFffcFoyc8Li2awzuZb8kYyNoTLMQ6Yi",
  "key8": "5oPZPyj5C1623jgb1YU3M1ABL2vujwoqkBgGBiGTkJ9JEQ1Si7ga3duKiHRQ2woaV9kUnGXHwezectmsg8Q2NRjV",
  "key9": "2Au3EmAV5Wj5wmUmWJrhQosYer9iWHd2myUNUzqBcW91xnRov2k1tbrLr7nAgxFpkTDuDFFfRc6G8iR1EXcRxurX",
  "key10": "2ufxBNLqBaD6zPWx5GEwdN3o4PKeNYAxW5QWPJppZ2VwJ8PPgZ4DhxDVLdrKjDaFBuWeaQcsHQJzKSa837UdvdEX",
  "key11": "4RkQjAJ5bu9HwcnbtCdYiPq8STrdzrbbaHiZy2cmu9mpKWwWTv9KXLzJqTh5qzL84gfLz6HheMdyugwiaMoboAAZ",
  "key12": "nLJfcR9tKtwv3nycR7yHNoi8KbQnNfiWQDZ3uXLyGcF9PhRAvhDMa7iNCivegqnAH94T2awHrmtf9xWAaY67PCd",
  "key13": "5fJpZy5uCKTJCkuy2ojiE8mhppQf4sLyNriN8wxVPvuZ25Fh6xumodLteRxBdXZTxMwSLZP7mMtb1yNAa2HJfcM9",
  "key14": "2zLa6P8G75WCPbrAkZGP5WsmBNFE5ciFujABSXAr9BRGfwjJMtQs4gEif3H7jjFi6TrS6X1wT2naBQdXTRs82azr",
  "key15": "31jXh1wUtuFcJ8V2jqxcyd7Ud7snSURX5ZvFaf1YV5NKWN9MTzGQoiUZQY2toiKzihaPgmTpoh9mqLxD1HUMf4Fq",
  "key16": "3suUTPEGh7eLASLB8hqf7wM7Vg38qGeFQNXC9ZuQyYz34LKVk1NRepxzLePFPNfCsH6s53ZZ1vPYnqGRuUEZkaE7",
  "key17": "27gTkXtZMGiT7ttGgdaWYeNNzstDawQZxKrUGnp3W9nHZV9VHVoWxeCtwmwTeSeVxMSShBVAbXxLsDuX8LKpDaNC",
  "key18": "3bD2HkbSBXBKLS9Cyr8QwrRRgJAUJ792pm91DEbJfxrAUJCmSWDsxo4aYB4irRW8wAJVrEmUC4XUzyA5r8NsoBE4",
  "key19": "3BwEc52nPg6AVdGChDQe1eeFFboBLLeGSAPiYxBVtd97W7JvugGVP8UZdi7Ag9AxGd9xYJjxfLYfKiwkJiMZwfQv",
  "key20": "HPgdHH5e3a4WGUyDeMANLbywKdWBkfNHsCPiwyFJgKfYUf7vKyn97DUaF4Hup6mfxQAfw58U1vf1HHnRyYsKLsb",
  "key21": "3QGaFY2wRbhhBQChja4W3FuD4Jm74rAnNgh9jqnwBgi6Tb3PerpAT6GAY9NqXmTAFfXMpafW4Km7joJrpLS7FhKW",
  "key22": "51djjhNsPaFmyhY5uN3We16pJ7sbJttQT1okrmK7wbiijBChJcsJvR8n3shyZxTniMu5zxYn7RYJxTVRiTDf9onZ",
  "key23": "2BboVCZvG6gYQ9DCsPKv3kx8NzsPir5CwFTM7x2zZg4KW2F1z9gub1dvNkhjDud86z4miTRq8T6KQ5sTEVh5aKCB",
  "key24": "3EEYE5M8wnBdb79ZX5MzqDaPgoyYLLAF4Qg1x6uMwCrcWFYTA6rCStoqAuPJPVU3nf5CXNwJy5Fr94LkpvHtt6KQ",
  "key25": "5MXRFrqJkLjy6w9dqs4zMzmJW4Uv8kHea4UwUMx81M4irBVScRPPVjrLLBQATqzqQSJNthNjyb9oYioFLRov12em",
  "key26": "3C2aJ3EVP8QB3cV51eMy44xa6AsLbkvtmDcm3U3yk8m4XRw5dHgdfJQ2oQSzARomyXWzGX2EvUmYuVFPR13LLKdX",
  "key27": "5TBxqQ3X3Q6kxRhfNv7sZmeGRZLnN77b7esRSG1hDcZoXRKzTVJsffpJZiV6VJ8qdLwF5wMyKJqx4nDjRu7LGLqy",
  "key28": "4TdtoHKNYxXuiVNYBZQbd4aTDNsAgYbinjXsF1wwn5hwohmnTHpMLpkzeyKeqeD1WjxUjteUBBr6wegwjKpc5TkK",
  "key29": "5wVweveHoqLNbr4yypuC8AUzpckS5JMwWWq4S8iF2s1TRWVyN9yZjoPMyCorjmhXpE6jBmMnL6giPicF8q9U6zv8",
  "key30": "yNRKTyhSZefyagTTei4VaCSM1zmHVeeAGjJdZaToLcTjiNuC3dVUQHx1PPm6DDdaCBWbUoKWDwuPCviWdWjfkHc",
  "key31": "5sbh3yq4sDH4wd25TqNhiA7sRoa3ztrKAZKUv8xNyEPRJpXBkoesNNCn8prMYdScAzqcnMRihzfPYG3bPHVQ5Pp8",
  "key32": "4jnYE8ADwnh7nuaoi3qL9RRykxp1ttNw8d2DNSaVfZokPoJaEioeX8rkjZhzjYBJZxiiVKoUQEBmqkwHJzfxWcpe",
  "key33": "274Do8FmTJx4JoKkubRwHDfAapcsA9iEDFiQCPud1bJv1VoqaHfByxBhhbVhMQrw3Y6tjxDKSWkGffYgJW4Wm8v3",
  "key34": "mKS59eZBaPDoorYENrzvZ8G7bvznitVqFyhDTjjtiRTCjyR5i49v6miRCv8GtrdmfeP9NVmeYbfN5crnSxCYM3k",
  "key35": "5qf5YDEJecUwGHFETQ2CxoSvhNEivBmT6zwNjL4W4RnJrw39D4TLt7rF2RXmf5RjrasSLP3JX7EU8Uv2NPrtXPUh",
  "key36": "3d44jcYCBPjjzUFBcHFPVHaeyzPpZJWv7KPJjYP9FzuUmckNphCoL3X9ufRxNbJCCtYn89nEhhDwXcszhy7YuuJn",
  "key37": "T4SGmWdpADtZ6vjkEs7akg2hLr36ZxJ5U95QhSvTsWL4bwxcFhFiucaxPmxtXXmStPsN3wT7wooW3gP6QLrvoiy",
  "key38": "u1h7iaze4XLJ43Wx6eUM5VSFHqAxe5pbAyM6w8jjy9mQhzFHUKApMKSdf7WJfjAexM3jzLPngQCkq9zQcBERzyA",
  "key39": "KrScxbR4EsaDpYkmco7y1gvTPPe4DvVtbr5CegWv1DrB9GLYgGyViVcxxRovCCHuM3BecAEwbTyAfLxXATqE7Ae",
  "key40": "4SCckm9vEhxJK96HkUfpZ2rMxQNB4HV6Ho4rbsMEpN4n28PRvCve88GQmjhZ3m2MTQLofoTCxA88K4Av29Z2PhG5",
  "key41": "N3XyqjKsG5VN4u7WSs6tGfqXEQdSB3kQ5yNFDwg4mG8PNqkHVyPhNw1iUBVkNpHZWvsrzHN3uFRBuy7iSETt2Fi",
  "key42": "4WLAezgAx45wTN77u3nF4QAbqT2rH2gnnHL3VKWbAqoiVuXXR85DHv9pUJEZZ8qEFemHQ4e7ZS7Qjk6pcqphLSkj",
  "key43": "2TzWU6HGxo1xgtQD4xJsqpxQTVJdKNk4gr6xjBHtMVNT2Y8Th6hvcHzetzYD3xsGYnn39GZMFu9cw8VvV8WV8GEP",
  "key44": "32bTxUk7GFwH3z9Ez6xzbaL5EkwCkV7JJJCh3tofYbch1nERDYmePa8VfT89bsDRf4WKpDXYT9ajnaP4drgmXUsg",
  "key45": "48mC9HgBQ6M8GHQaDTEfLtW8YZXxhDAmVnCAWn2RWgMtuDPbWjhqhTPCLbhKwKr9DqMyFKwj8abe6Wwt2HqbPfRa"
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
