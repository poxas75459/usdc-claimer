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
    "3ov8KstGJ4Vivm78jnJTToBMgdkfWFhVCjhdhKLd7yPAGzZeVe11GwNL59aTk6pgharxcZ8MqS1XjyebCxbzWJxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FKmnj5dvLey8vqS2cfxayNz4cKdHgPhYFw1d7cr5AcrhcKLvjjqkZYQVaK4oiiCJQD7muKfAZLH1vbwpfgWX6ui",
  "key1": "fPSDfgXQZAm9RiidBrq96kELtQxrcRP922BY39NXQXk3yUjzUujFaU6YJ3NG9MjNUgXWqkuQJt8ruPpfTZMLg8P",
  "key2": "4TzH9r47PAgWVSsNpUcRZbzerQVcXyxfbW2YWmJ6cSWm1BZrwWD7VupHwwpYyxDWHoyENjhn76MkcLgv68dEXUos",
  "key3": "3AxD6ivoWoGkCgUcww6YFRgffy8GywP4LeSfX8omWPW41CG8hay4MM1AY4KHTz9wtwPUBUGchJzKshFSdET3fytK",
  "key4": "4G9yRfZJP8V9aGBi4MLsxsGKqX1HSWWH1aMqD9Fd8FJkwyADKMcYL8Ng1r37Qn7P8N1fuhb6wZLq3i9eFn482Qsd",
  "key5": "26JPwsxUDgSVR3kDpq3f2jd6MDazyvvPCSrchShY6QHmiwPfLNBCUGtfRdKDzQK2nH2ctXVfUr5hysdvERXR3xsv",
  "key6": "3B6oys7w6XV8sMKPH73VSVeapGFhPGuXvrgtLKXJ6HbhoiyATExbcHFe8YRBwv68exv5QEpritKkTeCG1chqHHYH",
  "key7": "2FK9G815NjgKpNwCHXpMp9vKiXzyyLPBSSPRGSPbqBKLJsR6Lu6wx8Nr4RMcVZP1uD7xpWp8uWbxdeAWNAkBWMct",
  "key8": "3uPAnBbXwUDtMcjshc7Qra8Yu27m27MWG5B95vvjWyyW2AyAo1knxumpCG31jGfWLX3oLQR419EuQsq4T6udWW2W",
  "key9": "3Sb8JKZxwM6fvRLSbcaxhwGF24FWXEBTyP6QEPmk7kBD1eeahx5ka3VYp7gxVNW5QJ4RksVaKuxkWtnVvnCsku9m",
  "key10": "83exP9f7yuyeAAXZ7nN6e95jU2UAXYcgYQJntkV2KdjV6zFytqJHjgumpcBER4158vcswRy5Qe5HTrsmi9iz57b",
  "key11": "2VvhTJtYXbRjw5mj6UCA654fcSSB2k4rAawfWozyVqS87tEztnQLo3E3BELD5AVa7sYLsc8vJAjM4pADiFK1p4Bb",
  "key12": "5aLjs8gt6wc1XZ7FHjnEVQSDaFgRHdLwZs1eUDHm7BPW2SdhKze8TrfyMXTs3BCLwMBrUXXy1mgKPA5vFkrpjAVV",
  "key13": "4q8V7KcEzrcG8FwTjotesmrqD6JiFJWPMiumwN8U6cPdNgUvpTokuduhrD2TnT3TvmzuHh47DfNnXsvYhuhSDQi8",
  "key14": "2oTZTiPGpuMeeWbKhSsYqZRUwPaEnnaz1DNBzdwvTuNvsyzVHmc7zXuxS1kVzkoi29Sa9rfPdH9kFVaZvyTKSF9m",
  "key15": "2D3vTj79d3PMKvGHjcZ3UMaJBuUXZGovTQeiWUyURvxT3wFVk2WBFytg86GjCWLWwzgbbGeGdDRt52G3F6ucoLAM",
  "key16": "5gW4HKyXbhQ6myex224oAxScvVqxswm7fKgk3RDkA3V6qSX5qwNp2NF4fmNJ6dq1rpNhyyrMZzzuRpHr73PhjAWK",
  "key17": "4HxKMe6L7TGB7ngNtLrVy17wtV2X2okKFrCiFDF1Jehn23iP9RKPVMJbj13tYRPjrSE5bRXF9wLj5fqVb1ukritQ",
  "key18": "4JG9PzkrRqep5GpWowVbqxtiJsdXuzApW69KKGfBzMw7pwF6RLBDWjuYyNxKYJtACf8WjmjNvSBX8x6rAu1kyJhC",
  "key19": "4dZwnBbKMd4xsLU3X7HGuChDGzbrKo1mckBgsizChvZkMzZjcHR7x2gGaj2Ge5sBkCS2hW9FnNiEsXcDNVLMyetA",
  "key20": "2bddtdUVLLQVJ8C5fYHJLwJv2Gt8hTNEgJQ3yAa7AKaL2fQ5GFcjYagsxrN49MobH3fAEsFLx1dbQJf1GxnowYsH",
  "key21": "3BYRPyQyGNHwnvMDZdGb5ANDSmsWCj6yYxozd2TeNefvhYFxMT2JXHPZR3owtVPX44UaDpLH4Z9WTCURuVHPX5LH",
  "key22": "5UP1BUeJfy9bvDAKqKQSBiZ1SS41hR4CQFo1pcZFgbi5o8A8u3aMNKCNe5W5VijhK8asTbP6vPU7qkGjYJmtFKdf",
  "key23": "5zZS3SHKeUiGmiTFSFJauBkqQhGmHF3GHaBhKp9u6ceDCySDWdog9urfuHUeHEo6wf2qq1J6JrMrQUYpw2BsbStK",
  "key24": "4BHjiFr5cvGArecXcMiSqW4srEjZbW2Hn4bioPznssv1pa7Tjpj8CkTN5buvR4G1mK7DH25HfNzzhJ8r8oahwAb3",
  "key25": "4dr8MBQKWEVz5Am5iPHjTQBCcJodxuxi9C53hESvwkuCJvm8HnnarbpkHx6HV2qH1a4udcaTgTBkKGuB2sFgKPZE",
  "key26": "3WXZDobvjYNh619G5krTx6Qy2ypyFPAbAiDuHtSrMmagvjDrDtm5qKoEywd8HgTmi4cgAGZ2L8idGYVFgqrH1f9x",
  "key27": "4BVsWz3WBDhPRwoYChibAQUfxAYc8oFBuCGuXganQH7Wg1hBRQT6LUjiqmBZUNannXy44DKnfjJTETg8X23MBUt8",
  "key28": "47cnxE2fNE6PvhcnzRbHKk1n58LJoQVnxpbudeJKeNWewpJKLYMfFqNB7DkKQ47KXC2WkXHKfow4PiZjTMVqQHEP",
  "key29": "5kXuEMiW2viyVjfFyuYEMZAPQN9RMh1871x651GwT8fWhZJ9pymYaAdxK1Guf8cEQQ5xcxfJEqnvLxT8tvf153XE",
  "key30": "5gqe3x5t4m6qeGXkfcVNLDSUyRNigc6z8iR4uC3DKbSaZZQR1cocpVPpyVGXue1ubcm7eEYZJnBHZHbDFg3rofvW",
  "key31": "44XuRgV5Z9rhjbTA2xcVyM6rg5SX779TjEpHSkPs3bRoyQzSVMCtQWpTwbLmiC2ZnueK1myD4n8M2EBhm3skLUuE",
  "key32": "5N5qKhvzBAvuhqp4sXvyfRCv4kqhqCGVKVTYnNd7a29FjUfrAAsUZ4hoS4Ph8jjSNjuJLR6nBZAQ6cMuU3Mk9ohR",
  "key33": "5AeSB5q9MjU6C8HzZhmPwyNTE8zmc1cwgR6Gk9eHo79tFachtJ4wFMt7cimNxTeZgnDgrRq92ebCj7QBhKtWNXSA",
  "key34": "412fJzZg59YhJ1o4aKeHKk1YK1CVRwy9gvwwLZY2KXF1iJJAyWcuKwAJdQZnw3U6wyGDSXd8dwgReXrhKirC3jst",
  "key35": "3oGpzFse6jZsVWQzjvYH41zv2ziqKdDuT6M5mfW8dDiZ88CQkxVjUyNFJojdYQjnmwAtTpteLMww8SfCZbQ8y356",
  "key36": "3sMcYLhBvtxP5qoKQPCBB94VNasbohKLdL2wvz8zUKknRnKnLYngwViFZx25eoLxpUso43ph19HR3ovzByBnq4Bi",
  "key37": "R8cCJ5PLjhQ7pcJpbzX3EcNjbyPy39yyHnKrksdRrvFsm6yvM5DBLLGBR2GhKi4Dx1PEnqeNoebdghbLeYQNX8S",
  "key38": "3JBmCWKpYK5QNwDXu3W7yMCBSx5BwwuZCF1Qp1CnxQzQJQ64BsH2B7Za9MFczLR9rUUGNY5H6t66qcA8H6Xr9QWY",
  "key39": "42vs5X4Pu9TQfvG3ChD8JH63gWknDBhSDFmoySgL5undLstMJ6nAhpM6TepFhsK2XZvv2VQ4vuEFeiWSgeQp3Zu9",
  "key40": "5qQoXw4vkdZCzjZFXgqMrNMNMzUvn9hArDDsccY662taKpmz2YbRXZX4esPysbyuh7d8vApBYxN6fumPsgy1Zypt",
  "key41": "3hu6rrbv9sTJvCC5wJvawrDzPNM9TjWvd2xAttphMjvxrCcMPn5Pv8Nj34aTTRL2Ucy7ijrCT4G9sBa8JCjEWEPE",
  "key42": "3AkJSgL8zUNeRXL89j1hJTxtoWs5JDCwaiAGGp46LbZppFZe3CtHM8CtbA2CDfVqSNWKBFwq58yp8Cg4cjZbiPgw"
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
