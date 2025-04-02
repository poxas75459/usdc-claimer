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
    "3bY4ytErzE1tZFX91PbX4r9e15KsvzHzZmtEJtuH9UUyz554WRMFFzHj347wGZCWUA5V24UH6myY2CR6McwsN1VJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x5B32n86RSAT1WKLD6VTELwj1rTLUy7yQvQZ7oZkLSrDhwWkYHsfWZ3sf8ssrnFeys6URRD9MjbTFcsGZQVK3v2",
  "key1": "28iN8yafqCdQmtCGTkqdwtuUqHBnQwEVoWcYiPo2RH3tRtTcg7p5uhHrti7AtTqr6qrk9F33N4u3E22MkKVrLxmz",
  "key2": "5MZYwu57vgeUmqy6BDdeZHR5RdtXhteC6DvfvVjUzDMhr28a9nniy2Q5fSPh5111XVmRyXQGHFfH7GVtTSEFmPoG",
  "key3": "2oKs3yXUZDMxsC4ZMwNWJS3RzuJQMRhrK1wbZQsvK9dFDhRxp9dFmu12DpXwT4DKoMsvhdx1RcybZYZ8uH7fsbCU",
  "key4": "3miimsipoXyqMBM6rC1W19Gfn1DKtUmd33MBAweWHuAsPZUsC9yxz9VBuGpqTPU56Ztn9Gp72ZRF3prvJAjAQ8r4",
  "key5": "4C5dtTabG6mPLYguiYghVaPYdZi4L9f5z7Bw7ejLzCgadqiEzc7rSCvSeHYGqtir7Suz48YVKEQpUPtsZF2vj59a",
  "key6": "24LAshR73eUogWe1AEYdWXMc9M4KgYJu3ciKbZkus2qpJVmNhZAWM6VshyBDUmdPtXkkE8hHvtWhN6Jmt5ZMMXPb",
  "key7": "2BtuFigfgzqM78yrHUXcdgCZNsdasSbB3ACkAdnupZjBzLNSWvWZ5L38s6qqJrDpZPQNNLRw1DVi9cz9nqYiqwuB",
  "key8": "2irveXxEreitEaGypG1uUQe9H4D8WXzHAQStcci7vgzBFikk7ohEEYRbxJL1169hvyzWLbhRC2XK6xN74jzJTbkU",
  "key9": "2a5o2DnsvyaC5DnodvyGHzfXqunUb4xDgfaqVHnY8cpTDJkeRcNEgZnhkGqUcM6eRi61a2XzJG4rdYxYr8pxwYSD",
  "key10": "42bS2Zy4zXDisNLQk95bR21nYe5cDB6ZHc37DiMzatQbyu11iuMB6ETWe8sLTH6HanEHbUSHcabkkrfHbJqmWest",
  "key11": "2X1oEdb57GUuFY6tYQnNE5wyi2Gsa4nrnbxChDukjDAW96S95J5amB5MhgNQCUTazw6fHrQuVyBRMSwPTv6HxK7d",
  "key12": "5ietJnVYxY6dcWYmygtqEy6cessaEZwyPyagEJdkeK3gEAg38yB7K8uhJ7XfhR3PAisKX63Hac8EjvC4hZmyCsEY",
  "key13": "4Ag9uwEyxEJXagifiCcS13xPDDLrz88JMze6AnkFfLTe757fHraLeM6QHkVsv8HYS9wbuzwqfghKro3Cy4Lh4kQh",
  "key14": "A1KHanTvyGY3uhXu3jf6k4gDoHrsko4zttJG5DA1fLv9oAnY5ZehxNNHv1nXEsz6timKkuXLmh3bHaYHBoyYz45",
  "key15": "64DKPcosj8DEcAKneCkvh8oUPSZmnn3JUhTVEpjr4Lv5ijYVpts12Q9beVGEZx8ER6KBSzGdPBCiEGScK9Fp5p8m",
  "key16": "33TcCNNKpmUPczLm2NC4sruDQfazNbRcFnBuAtEwCsvmEGQjrckBRfKGazgYBLraKhy8XtkgWWmxAxTfNm8VHPtj",
  "key17": "4o8f48vBUA7Sq25wwGkhZtxnQ8WoS4xkKMAEvCoCm33PranrFrsyNPk1KNomuFUBEaUfDR8MKsYCj5gWHyWyucAc",
  "key18": "5WWpJVuFKfzt2dDd44WospPUwzFZK1AJSkvdNepVHkrxo3VWH2ZX1PCtcB1e7sFaKV6GpuMNQBB23TCv2gkuG6qV",
  "key19": "2A7Dh8niyg8WVSQjdN4bZjFiFWmaiyYycaKQMvg2GY6fkpv3GizqXCMppTK1oii8tiHEUyNsMsCmTjgwaJ9FBgDe",
  "key20": "3ggvboCFsdHi1PSgRec6RNdcnK2yaUaWpTWYcZ3Bx1y5at6kqPsPkx997wrjp4hgmmgbWuYTfXPxwaok95AwCVxV",
  "key21": "WiXs3HwEG1B6puJxzZsBcyB7SoXqqQvDmhQ7SeTwcEx2PFXX5S41N3Vurm1v2Y1wUoNAFEs5cGLzvVnbVJ9FEZD",
  "key22": "2jZLFEJ4WKF8RfxwHY8b7pg2bHBNtajLeCkuNi7u43yCCqqjcsuzkqgMhxTgtf6Xgo9VXECb3q5PS8e4VhgC6qqu",
  "key23": "32YQ5U61b9fKZPMFsmEVpRPEdNf76sKXKNkQc72R2TPPsAysjPykcaBkT3VbyeqBnekzavdW6G9tupKAo9mhDaHz",
  "key24": "5DfSpwMx3xjcAEt1bTCTHSk4GoDsw8AiLv3hUR5F5GguwsTuCWjdVuy7SZfkVkyT3zQmp3UuSqagrvcMUEYPyF9u",
  "key25": "3detd3zrB7xBmhd5N7HV5twTAnQFerLNDfKZ5CSPNAn6FkRpbfZqNDxjFbTDnnP5JZpKHKw7naJJSoJLCHXLug8Q",
  "key26": "4cnzy8z2UCkrQe8qoJ6UtRuJ9KKakRueKrTXV5f7Pv7zy2V4eAywtnXgQkrYoF29HozVAWomCDkPPyZWsbMEyPPb",
  "key27": "3Gg4HeMzXMZAgsquvXWCQwcwD9aVJtJ5C5EzyVWuFNCSeJiUkq1HEtuBEg829y8Bro5B7q6QPXxCJHgeXQ53rJua",
  "key28": "32VJJVDYJ1wX9zg4o16w96R91Bzo7EGdQEAn2nMvtXYFj5uWybMPvAZZbfLHLuyMG8jKih6q6Yizgft7ufMehfot",
  "key29": "3PitjUQh4JJp5K7964Q4cxYoBARZWoELm5p9gJG1eYHBDr7ZntQ5T3pHDPU875AiBb1nTpBFubpwAx5Ege6bjtVg",
  "key30": "27V1veTv48eB6sfMiqYpFpjiVugqTkLq3CczoF3EXBvpW7oX9pMYYgNYSe42jb43JLidAoLt2o5kgRcF1SPRrCSG",
  "key31": "4nd3zpohebob66F1KswwbFfUt4zDc7ijf6itc3W4rceHmR1KPxq34yBqveJW6PUGsya8WC93GjfW7KydzVyyBSja",
  "key32": "647paG6Xr9j7cot18t1XCpBswZM628thJC4YGbpVGspLdHhbSbxq9L3LKyAEu49xnbjVgyU3p7X7UfjrYx5VNLwx",
  "key33": "21voHmrBh6GXj4AxBWgEh33iyY4z91zxdemEwHXQGKFjzMtp79z2WBLjKU9bp3svBZRHcDPP7wtjNbXnNecUPhWH",
  "key34": "2RsiFDRcp6GnmEBdQ5c54VZkK2ToL8rWw1qqyBD5eeXaTBZ7NLVJrLaRgvvxNbNEeJWFTDnGf4RyeaH1j7NZ6aFn",
  "key35": "GPmu55mgfL6RezSHYLfPk9CCxzaJWbt6pwg3hFX68M4mL7pxsoXVpakdooNPUbiHPAXPXW2FNoJRBqPkDBrHXJe",
  "key36": "3V4hu6mPYtw94VWvjvK9bV2JKZY6Fj4CwVreiu95jF1QEvrXUv2Q31gxKKPRSxpnkxgZn4BQSzzKa3HkW6XUgeKr",
  "key37": "5Sz8t9p5ESsqKgj5Lqds9PAkpgEDr43WadwM3r5FwFEK1CHR6cjZUAQpNgLz8b5wbgpdLFdi5i8gfTKtavz7Ri3q",
  "key38": "ehfDFs8FXDWUnmQTYq6e4FexScSZnzDaAXJtyYSVmthCzwzMYsvSshdnWXySpfjEyEVpqLbhKWhVVeofKMwjjgg"
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
