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
    "5YXCRX8rzZofu1BTuo5vds4ZhFPmtgP8NuWyRFda1MPqzE6TJ1jaq9XxiFq5LqtKWUg3dG3mR1ZuEtvQZhVwMcm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23uPZaZgVHWoMYDn1vn88MdPLgR9Qs27N8AMvL15uuQzHo6xDXn7SJmzdjd3vqaxmehaGfgEf1Y8R61w1vavtSZA",
  "key1": "4RjxiVBTX88ixT7FnQgudvWyGPcph3wegnwF6jV3LbEEyTuT91cBj2i5LH1g4KMoPyr7AADrcbKZbeLaZFx9tRkr",
  "key2": "5R2KYtbNJRZxFVuTvH9rXyEt4sa8zWSk3DVyCctn4W6vKiarjZ3CdyPTd7tp5DHrPop2LbUG3bG55D4BjDFmXb9G",
  "key3": "2X6itaozBQ3vpg5NSBo1ZLPQPHHruvnPh8bduuQw7rV9jK7CrUyEZU2gdbhy6RLUh6uXtvBiMkDTsvLkpGEKmExV",
  "key4": "2QkMmqZFvzt1bAyQmjn7EmAiUU6XLhC4W3CSoG4t3m9Sgf6MpSajUbxLogsNn5BtJfiVi1rMoeVot5hnwc65Cf1q",
  "key5": "3xYxzBBDwx75KLaV2TGBMGuepMeqg6jHzHxdpBK8gp569Qrnn87GZep7V6fepNhV9J4CNtLzeuw8Dce4SrEYBtLL",
  "key6": "4r1d8yZoUQc9Z2Sce6pF9JuAFa3rmVoinWnTn138Tr3aCQUCVWc2teURukU7yaae27R7675HmbAB1zhM2mpsNbHu",
  "key7": "2qcuc6a3AJwAkZJt57QHQSV28tPwLjrDC4XoomgfPDaJ3TCtu659pdXR5SeyYD7BeZ62a1pHUTCUJu68Gn6TgwDn",
  "key8": "2GzEqSGScTjkDgbYob35GANr3UXNMsSqrx2SYgNay4rBbKpDkSL9qk5B9ZjfrqKaTsGwV3fKsCQPs1sMmFLTE5pQ",
  "key9": "2XKfNKU2KTSeEd3wATMQcScMQKxFjVNYB6yzwQbCBoG6yooZjxRxuD5LoEKUGVeaeamo4Y2qe8eLAqtS8zFt8GMz",
  "key10": "22CPEz7YyGMTQLTGr3U1JBPBxQjLTGD8RSZ5cooaQVq1FdMr5jnmAh9wByuug34YazKwnc3WMaWu7SqBQRFFQHyD",
  "key11": "5URsYwbURVGMmshVBBGXJTdJDw6HjovFqGsJdayKKuneAerVhWybMHk9c8AiasNAqRAM7b8x13yxEfwT5G5erzGc",
  "key12": "5fN16pZUQanPoa9m881655otsv5NDHYsH1rNwH8k3KJ2rPqViHsf4ZqPvVDJKax1wMrYCtPpR49X2fLCYyFqN6zx",
  "key13": "22r86GnEJRw5QJjY1AYLtX43ZvtfJhDwD38C5CrAuw9ZovHPiJYezDDxXwEBkKoyRHcDUAB5bhgA7pSchP8b5ZDn",
  "key14": "2xRmxzHMeuKBNDZqMmfvzz9X98DvetSuMxD7Jya6uVSuv8hJJ79Eb2HLLVwvgGFaBvgvS2pac4eUEXoaqG3GypTD",
  "key15": "2mLSwyhep89pycHtDzaxVkAFDQhZ6B8gLkK1HP6tqxnU9zTMBK6hxCKFGkw76tcX94Hmq15faReVubBMJKwLB37V",
  "key16": "mLrBUpZ1AxuWtdy5FdCno9LySuJJSxnB12x7Xai8U1TUPjK5a38BSesCzVYSEU2XLp4nBEDDBjpPfQwNPhrjV7t",
  "key17": "2TxDQB1wukaHS3WApqahFqaybR1D26ZNCr4U9242cfUK9vWbf8ALKaEw29sFrXfZeWiDhaCD6DqxyYVxDkX39eRT",
  "key18": "65ETQqCiuQKbKc41Krg9sVRWZZftYdrbYZ4B8KGpuR8yXsSKwiND6znst7qRs4SxqR18igVonnLC4kW5dNe9hWm8",
  "key19": "oEpveUFFW6pqdpCEyrrKw3c6tVgnbhTA8E3tC53fG6nQFCHU1wxfoTvL68A2xL4nv9RikMA76pN9GQjXRP7FGqV",
  "key20": "DpU3uWrQBqnCEnr6nofJvrtAmLLZ8XNuye9XoMQJNb4ihngGatTx7buuY9wtkRhsM7VREDKnUXnAc3iTArEcTdT",
  "key21": "52cvV9Raj5LdEzyq2CsKAUYMVx42uo7zMRxpMpbgWvvFihrMwtUUQfTmF5UsDAEFBJSqTap8PuLFzYwb3Ysp7Gpa",
  "key22": "5QVVfeyLNq7J9kwjXuWD1PFt5HtKGtsrJV9c2pmjMdJRw2abQMKa1owtJeiMKZLnrFptMjp1EuvTckzn9FAN5HAG",
  "key23": "3PT2hyshimwTsgfpHexLLQ91mhgoyNkySVWTGj9bqbEuj14UYt4344a71aymmPp4G3qnFQk5wTCrhE1vXFrbUoPU",
  "key24": "25EE7BH73nY9LUfogMMWTMwC6kuYVGFmvujc3rtbk85g8ZpKNBTWdZ3N9ZvUwo1jS7wcVFfbwVCVeB1ckTLDgN21"
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
