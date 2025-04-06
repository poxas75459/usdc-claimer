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
    "3pcbnBrzrqhd4d2ciy34qUEmQdLK9Y3KJgzM1LVqrpe3R78MAy71gqSVUwyWunHfLg3Sf3BWS5J2LJqk8221EDPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KNCQ5VeLcPYr8ZmRfsqbo8gcVZYPxy9G685ngm43aCHizBWeKzT9Y3EAGngEgdX1u18RR5zwVhFkaSfcSp6UiS9",
  "key1": "3PqoXxu9sL6Q5yoHcBwgo5qkwg3B1emh9bEZHZHGE7vDnq5vBoTGjTVGD69cbiutwd2yXT35BQS5kd8WuiiscuCc",
  "key2": "53EYGNGa1zPDgA2JCW3grTM3GNS8XWEZQ6zEW9kwhGioEFQYV9B1hCLNH2YNViRsmTEw3RpjfiueyNcAsUbgXnH8",
  "key3": "2TfsnewghyUe4U5KUyvebAx3Fqxa8gcPSt6PcoN8Ee2cz6YzLyd6M3rEuDYrTNkAdzmCg8XJ1yoAxDRnyRAgdtUP",
  "key4": "64m53z7zff9aus2VvnmpvM7xqSwBBQqykHuTbdnxuFAnVhfS63ttadmkV3BKxnnjwwHnQ7Z8AgWDgPC1FziRA842",
  "key5": "5e61ZMxvYuVzhapxN6JZfEBSMPrkzJAaK8VKa8uRZsCcMLPUvt7js1LpvvDokeZRg78PjykKyGh8SQc83vh9DJYo",
  "key6": "3HRBbHJdRPr29GnPLxntzts2jMpyRYabA7tcErfrM22dh42EduBNRf1jR8eqZawXNDDrRDFGXRgGiT2sorJswxCo",
  "key7": "2EN6U31e9N5t91KrQXFJw776Ru2PHqGH6eQemJADuHVkLUgXnHVub6QNFMW4Bjct6Mmw9n9ojHjuBkpL1Y7ESfZc",
  "key8": "2XE6LyJJJQXEWGRuwwsimtDNHdF88jMtDQDAXewAD292evDxzoyCUNQC2Tr4Ji8jvCEa44CNhJvxTxRdkXcuoHnz",
  "key9": "55YgwKeW2bFoW98RY9JbEkErgA3v12nsAqgXSVRXzD3YjYDaJ1CBhj6EmrmywzBiZxSgdbxT6mbNuwG2t1N4rTzM",
  "key10": "5qvh1Xcpby8ZWDXV5ssAQRyLo8pZeu4udqwanfk3R2QmpjwL71oW4jC6JFuQ4swG89Z42B2uGS41tZFawegHfmk3",
  "key11": "24bVKSGU2axaioeZzkRZ7L4mit5DhRNUWtRySiyyRHJVt4WLymNDvAnLmAm3QJvjBX9c8z2DAZazisuAWZF77dVK",
  "key12": "XJES1tKExr729CNEtKZC3p6LHqP42KZdUHSjhTnprBzJ3rsL622hBysggBM52sUCSCZ2ttF5e7TKzPhnXKpxFxX",
  "key13": "276FndjCREsESKesAUUegxZVP32ii4hudw64VVmmDsXy2cFiGU4KMYFU719X5fbDyhX59trYFqj8P3r13ijcfX2W",
  "key14": "M5vMiQvEqi2ipUbQSNFFQp48N8NDcUGE5NEohRd5sCYwSfLHGfvFfGxkYsTJ7EbrQwHkRTf6uLY6BCj3keqi26r",
  "key15": "4RJyWoNFWUsADdB8wXYvTo7VhwQahhuRo6QauCK5BpM9sz6ND54fnWZvDZsqkeKpwimvedXXvXd5CfEFJ5oi97Qb",
  "key16": "3PMuSNy1KSBM6YrXva9m1oaQccz8zU93pLXSJ8TahgURa2fWoneZ8aEDMNXaZhjDifyqTUXSsNkQr9kV9YhEaLP4",
  "key17": "5qky6KKWAa2j8oNDEHnX85zMMGfmjgHjvbT1pjDf2HzDEB43dM3AFgtnXLCxaanvLRAkBuu49sPfmEMXS6hFdV1P",
  "key18": "36mTy8fBdBsBdi9SGkRssdvBWwgpGWJQ1Hu3uKycPBZY3Dk3tVEiXLax2U7GkgLc5DCZMWEfKGw1SwP6ZX9GU6au",
  "key19": "G4GC5DSkLehFNLBDXCUNECx89sSgiaXFjUEUV3kQWmniPsTrKjZDPiBBF1a15UCWosqeDsK53k8xMGLLtjiU9wz",
  "key20": "5ckAkSZibpkp517gU1gZse3W4LVyRGDF1LgkHsjf16QhJRVAz68RqJ1vpWxquj1TfA22N7EVscV7yChWKMMra7Qq",
  "key21": "5zFWsC1NWxsSPT1MVboZE7XTVdegA7vMpnhToKPfSyHJAuEVv4nFVdXmV4i6ZvT77r42jRXpzxq94U6zvjB7VHDv",
  "key22": "4kNEuM5VHi7pDAUoKDn7AfF5G9it1RSFzUSfV8AFEyZSYWDP4RJdrpzqdVp6pf9MEtuYZu9BDQVi7K7BZdSqvDJ5",
  "key23": "2fD9dCB48DmbHo1aNsB21SS26icbmXJge6X8PcwELyP6rfYoYuWGBLmWpfPacCvyYESvp2vyWAB2Y6PuptMjC8Vm",
  "key24": "61aHDq2pNrN1mVuRvS2wrpXJtgTSaRZLGueYkeBkM1Fs3QhY26uVDRE2BT2gXaTFEmnjQMFnACdAWnxkEMWsPQXx",
  "key25": "58hP6MjEC9FCv9iSvbUEtE2YmV4RT4TiEv1FFz43qE4zrQCr9MsutSrhMxPthGUpmdNWSM2LZVcgbwrFAmZJzhPc",
  "key26": "33HEzjssQwcKqbkTZgUUrQyCGnvgmXY4UVa3Pn6LLei2ZK63syE27R24CvpRBbQwyqffAzLUSbV1sRzYKoPwbXYm",
  "key27": "3qkcyNM9nNHFpQ4CFHpVqStBfxjRRyZV5As7cu4SPDRstZmPnCtA5P1mJaZyvka7dpQjKqnVK2r6RoxbpphQsyLb",
  "key28": "3X8w4dvWKzTmbUYKCfUnd2myQu2RfjQLtDhWtwuHhhFkBt22FrWUdkr4kmhJF2Cw9S86WvusECXFJQJYhhVZh6Fa",
  "key29": "5tYsSpdPT6sAXjsiN3fDEkfRML5EVjWadJ69BBpgFsJuHzFDHphrMTsMgqEcu1eKk1Uat3xE6AQx5KqEYPCDNSQH",
  "key30": "2iimX87L3G81puCunwGXpEej8ugNNDGvSN5cuxX13wFczX3CwsytEFf2zwe32UirozFKGTCt4RmZPq5WfZ5DSZHA",
  "key31": "4cY7kbmKeFCpD9VcvAoBLfhLDHSYgSiANV26uoMRNJnSmyhCdExfyFYHRPHs6bfaYSaKKQRZDMj6Y6qpjU1HyTVX",
  "key32": "2EiL3tn4GYbyu13ungeEZCAorgAsbDdEdeixnipgPMjhSMrYQyoBGvaWwQAKQCXVHpZkrzM1deWpeohtMmQDgadA",
  "key33": "3Kr5uZMKFdS3MHwuEMyk3ncwfBwJPa6a1Mi863K8auA7CATCq5xu6wxN2qPo6o1rhFf9ZWEG29fcBKQpS8hHvjoy",
  "key34": "2E7mivAgzxARnQ5yk1PMFf94daLkXUpWDJkDtaEGkZSHZoREeoyVbaT15cuSxF9g88a5qk45Skhy8947F39qXkKE",
  "key35": "5n8PHDVsLUUCnAEJKNz4xsfB8i51GACj8Edrj3KrDEDQG5icuB4EN3NWWehhgnw4cFtAyvAyTZ7J8YgZmRdoHw9t",
  "key36": "g9fwzMwqGMLVaGYLSL3URepRFa1TJ7GXGodS5uZBFLugC2vxeyXr2sJfb6Wj4tZYUUDmZ3pwVyA4kuQfUADPmY1",
  "key37": "zHLeC5aSvCiKQxB3pqmWYpqj4Zj6wnxquBktQq2tfgi42GDJdhrb8ZBUJxyYxZRTLWHtLhZT41zxGF1w46dWPcS",
  "key38": "3rfbMMoZEWxBDyZorqnuXHL9yKv8EMrC5rqYy4TvwxDNfX17eGprcQ2C3gMkKDmdxewsiot1vwq7qZPUhf5pLf62",
  "key39": "nobJgZ3Y74S2fZkzDU5x6wuDrpDkkagT4mbzcbYEReJv3BEFUxGcXAKdbB7XFpMVNprVhFz3XbyA8ci8aXPG2Ce",
  "key40": "4tEMSrNb2TowHrjya5jzwaAUZJotJaSudaoBg7v1f9L8GvwStWB7Ff6UujQrwKvFifGJ1yPa16K6M5ei95pVqNUV",
  "key41": "2ZKayaVx1BWjrAqLv4GMHozHvNV4tNCe2c9Qg55W1bRNE9KeFrxRuq6wFh8zLP9REvg4opBS5MgdAu4Ph6qpBwxw",
  "key42": "46RutEXQtcjKRThjxT6cPAKqQapYkAVkmCPvvZZmnLsoF4EcojgnQsx7bPh9DgV5NceNDpQDyrNwuTa9nijiVQpt",
  "key43": "4gBsQ3WdaDTMG1o9GM4NxHQYXbtF44kG9JisUEaKqh9UMQbBVsjgMQxFanwbkeTxPQ4HdjAteFQMMZ7AKHa8KmFZ",
  "key44": "4cYXWziaVTPQ4vtm95f7WeKFiNJ2XbR9znvmztWBAsdwMbVGSMx4uL4WVABiBpj2UL12tJNcu4EMK4wsk65GpRmS"
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
