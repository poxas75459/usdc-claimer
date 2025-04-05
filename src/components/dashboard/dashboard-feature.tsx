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
    "eND6dofRvNCXoUx2jox3G9b8Y2xgQRadGSmGqvubD4HoNGcsMZyyp46J3eKczBqcqnpX65LAVswvt5Rfr2HdnhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QHYTqKwfmhf8yzeBP9TZoutuTYDtHUjyTFnUvjvV2KRp6KzUbXa4kwH6hDFG27ZciriK8qGnZxx7NrfKJeDukHh",
  "key1": "koYG1HFa4t6qvA8J5RaaFwsiaiDDKHwdQ1B1d61DGqkiHXZrskFJxZ4WGof4qU7Gkm2j3ZyfpEAvySykyUo2WtG",
  "key2": "3i8Yuaf7Hnu3aa4wbgjQkXkyUYoh7UCYLgE8mGgFUP9j7stZeDTTkaXmv1CCJouDG3vtKEATbmen81g3H5e7U3RY",
  "key3": "3r7spwz68JTN1qeiGoXBvJMtprVuWTgA7WfJzg61zrR4tinzmgjkoHejJgjrYRzaxrEB7J5W1kwW5H1rXw1EFzDj",
  "key4": "ArH6Y3nuDvAKibLYk2YfRQ1YgKxNniBB4ePuo8vMPSBBmS7ZfajRZJB8RcMFJH5CBV3vwYHb9tnnxpVSs9eCtTt",
  "key5": "34MxEbBBGivrSDB4vmEDtVJXbxnd2PfgGLCQYXWFong54g38zzcJe8ZLNDMaU8fcah6nN1j96shHg2vHfuEMtxhV",
  "key6": "4SBUaozMWVLw4prcBxX3dGMm3hgXFpzp5zXkRgdzvWC3eQVZN87exw77yENcMnL6JZjG4Ey41EuWd3VA2Ngx34aa",
  "key7": "53vg3GsYYQ5dFqYibhxSd3LGjR26JQUxp5dBkVsUuhwehccnzsZdTbJGYFwZjnfS27qYGVcFxWFsuHFqpMbVeiWx",
  "key8": "ubGpuCSBZLJjYaAV4utPKQL94dnCKNHPdwG4QJnoHqgnNKWuj1G7xUCMJPtnTvfRP3o7oYpPgLCvPZViHrkKkPt",
  "key9": "v4LdrqsUHQW4hjhJJ7pXka5XMrv5HaGqdL6to1TXEyZ1ojapwnA2f1F99pWxPxxXRLDn5sWC3FkBGN9Exk7Y7RN",
  "key10": "vRsV9ZnWTbvL12wCkjA6y3H9d3XxHsBUDF84kq7MA94iJremHLvG38XAQtToBZZHWmo8QthMmrbrmVEKh1LZC5r",
  "key11": "5tSsYKdpiGKifQtvyBTc61wQhcgtKphd52SZxEDdtWc8J4tESM6MRyFmj5j772gUg8HBXAx6VbF8hv18eonshRgQ",
  "key12": "3pT2DDTKFiMqQjsm5ExNqrX5NvqE6pbv47hRKBZbgK5Y76mYrp1pHA5t8EEMDmFjVMDw2ABmSpzcFJo6Y2gB34ym",
  "key13": "3mPuKeqrnqbWBJop6rugKgXbPEkrQjtGTbvwTftxgPtCaSFUpnCH7Q98Z47CXUEYqgopBpR3MLaK2NLufQQNJMvR",
  "key14": "AePxCXRyprcVYA7Gbpm2ga4KqQfrPBZE65HrWXseXAL6P473tVvhr9X1G1Fxq64wpwPgRgfcxPazRvRjgccsbhw",
  "key15": "5TjiW2JsqwBLKLP1DNaHuKyEErkCM4sEd9uv6jrFanBexWvDZpyqDwH2tES9STXbdfgzVuY8nSngMEAs9imzXaqz",
  "key16": "RfSLCmXSpsUZbva978hi5BLCVHxjsgfZF7taCjkQyFiDmrc86gWxJddRyZR6ikAHtJnaMwLCf572MEX6ZvwzekK",
  "key17": "3a8qWu84pGKvNjSzMLAphDtxtdGFi2SKe2tstaofufugTbU3ph37MSXQrbu7X9ocRVVqJtLc7x5zJxRf7k21bYEG",
  "key18": "5LSEnwZRXydn67jUb9GTogv7B5RupkzjBicNs1b38jzZk1gBuGbkkACUSscZxo3rXcgRXuKfvZGwhqRdGQbwTWfF",
  "key19": "4WP6Mz3qp1vgSqRbSkVYs6bEENRtMnWEKnoY9bDJF2ihEfa9fgsPhHngHU5ngjVGYaNvAqWKAUgvabXomA5jBKnG",
  "key20": "wzueNwLeevdJoNZYGUfHDgj3MdUmKvC7LkzjEH41zssvB5Q4jjHZFgrECvtWU1YUi2i5pgx9nFekUoGteuw9M4w",
  "key21": "f5SfmhVitiHs3gHSu1ha8Ghgyqb9PT6LSychLx3ACBu7qaTmWJTyT6sHAMfgwedPrUcVxvjqTa4xWHfja6eLnJK",
  "key22": "3FKgjSkG6sbbT1qFdo6CLQRZocjw9JgPuUvLruqg6kqtWXoBM3FhST9y5TjUzCSaAr5uNq48CyjupzBTfTRfQrBh",
  "key23": "3HMb4HTRTqzagg7z2J8HTvn9TZjvpxJjawXPwRVhnhW2jXTFy1AaRVMBvrSedMqCB6JqJzj17SYhkHdqRWB6vpBg",
  "key24": "39GDEoFug3baHBUdiBHfdfeX8oszMFPyPCc8es3NmT9SUG6HY9Y4VSt6RVrYEU9vdWdcA3kEuEzccqZc1rphjMVp",
  "key25": "5dCyUSkzooCvcG5u5Bxxqo8aQXwt9bjTydLx2d3Fny1eoCB4A1VSrDBPhMRJGhnLLGdTzbnYa1ebpDWot4gADCWr",
  "key26": "9A3aYeCm7xemserZ5a8wQaoJEdtXWmrsRPC41oUfVU8VRLkHya9ss2dtaJSj9VKzApVFjn1wmQLCwKVnGb3GGUQ",
  "key27": "5V6sRWJTpZNyKx1s9pGcLcXoxpQaQGWt6VCXDEWpFvMKn2ye1RS2Aw6iJGj28N95R8TFcBDNHP7Rfkb4H4PHKcuR",
  "key28": "3raaJ4nMUjfWhRtHGPLn99qjLZ8R9Z8xXpFmcaCXKZTJ4EGk445uaijjFf91LDdktXCQM2Ldqg86BWw6TjSXkkN1",
  "key29": "2sCNWeM3fUJRsn7ZFmidNJ2GtRwk1TEwhveU7yX5TJ5DW8Y8pLeghugmNQ9oPKw1fbMka1tjYAqogn1ozRzZq2EA",
  "key30": "ox1vniKKchwYaazTbJ2wjAMr7W24G4zSAGYWB5eAMVFyzDzPVj9qmMAvqvV54myafGwHYrCgEPc62cy2ifzRn2v",
  "key31": "3E588Bkfhi9K9zXmgXRnx91LexgzLsTfqVZz2dwifatxyfyS4CSetqZX8KkdiwpGJ4vx52nwmxBcrdeCvnj12yGV",
  "key32": "4hV6M6eqHfYivbkGhJffXjuey4PcSrNsMFPNPazuU9zDAGPb1G6twAuRPQYcrxFff3CgP2Pjq6Ujp8ttmf6ATEsG",
  "key33": "7Pfi62ZjJtogAdwmMFtGydPLNxhFVn7RV99k1UaSRbK9Awacp44aMFaBY7Q6ueEL4wh1eEngVWTP2LydTLqYfRT",
  "key34": "4v8kejRsSWVScavoA9KWuiHQuwP3AFSS545YvC4dwoi4BFuxFXWHHn3uoJf6XLWta22thYaQQrEEGy54fa1kgSMk",
  "key35": "A7ympGWPB1gdxieogb6YtP7zZVaCA4LpLELU2ZMmQ1J6Ptjp7boFCHq4kvRjFa4FiNDFR6q3tUatQbogW12Aosh",
  "key36": "2qbAeHQHh4dstfzeMpHcZ7fPnffmS68jyt1PUrv2B5WMc5dAxK96vMmSeMQArKneyCGkmQSD5ShMffj3bgZczdiL",
  "key37": "2WgMUHk5RepbfU7KsBX9eyDX7G32cTfs7XdZj72HcpELs4FvYJZmzAdww5p76HniZxCRv7hBGsJ9u475vkh8Ujr1",
  "key38": "213nosB5QrvPfxadhGPN1BuW2jhwwaKqxkXZQkH4mSY5jBnBZPJNWYiGizDaFnbfn3EpUhLDQzPedALu8SC6yp64"
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
