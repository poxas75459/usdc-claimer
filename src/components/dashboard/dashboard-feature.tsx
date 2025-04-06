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
    "3Jx9zjgLLeL5JnaVyB3ovVBBcSxuzCaFFUniEERpAWfL48eY3hCKQ3pUXtgMiqCTKaVaxTgRQJsePndWDJVsS12W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qtrVpTf45TpCB5vcbMDsDRxpXdBMc9HG2fnjV1UVDDBrK6V3ygpScXRXnTgrDKspDv926ZtS9aqvj17yGt2iq1C",
  "key1": "54B6EtSK3h6XaN4LVkYmdXx3mQnNHs3mJsGRd62kyzYBmFnDDWMkTAwP8diXkyqkeyXotcqnJoUkbSj6aZF5nDK5",
  "key2": "hcuTpdXb3GRyCqcMqVWPEBo7pQHwoFgPx2WU8LpRADaTaWZU9dcQgJAjGTcJhv5U8petxrBPVi1dN7JQEYw1hLU",
  "key3": "5DozpdxN6xDd79iSD7eN7GL2VRLCabJN6kVYaBLUzAJkpb1SfhrzCoBVPqp1WUHmLpbUCZ2KNgmZWTPs9mghq2Hn",
  "key4": "564cXwd49L8yw2dugYgKGrzX9ZaTzyKrzXYa2PzZbSq51xyzjdGYcsPMr3di2NkHrUwzLUtNxZ9ziSJS5pJ3UnLa",
  "key5": "62UoHtmt7ByVkpyuKXPwMYZQ1WYvdUYBXfHhqgWeWTsH9DWMjbhGF9wM5miuV58dAe7RPtXAMEzaHZ4o6vwS7ywf",
  "key6": "2gWTDqnKrHZFGsndZsosecN4WuBG9bgGG9HmKLD6yeT49DKVnNLQJXCg4de5PeHaChLNHXepCuF8Dck6cFS4qaQu",
  "key7": "LsRXSiEm1q2Ypcx4movDfceVaLQjjXaP9APuhjLZcUmuBEt1MHFBeqQLmVz75AXMFvJQ13Zci68pQMYj3GgnifC",
  "key8": "59D5Kra8QsKEiBB7oLZn8fnMDmHQ857kLFU521iEa7JQN6G2Cvk9JVqcwhcDJAHRyof3fm8QpnjA3i3463ZjQsUZ",
  "key9": "2nTDPsQqNL9UG8HPJ2eL3tZQE8pj8KEWhF9v6KUr7yyDBiW1Wh6hAd4Jyk8VmPLsynJzMSnA3GhoQC13naUciR8t",
  "key10": "Gg91hx1CaxJxf1mZJFEkKyvBsCGpVJRoZTTk4fUszoH9PHwHqkLZpay83xZBrQBCenufdiNuqLWqbRVsxvDxDKt",
  "key11": "4aaidHo5NCG8hNj93kQuz49t1ZoRF413qfFG8kfXkqmUBKGX58EybpXuje8TD6opd1j4QcnXX3vKv9vuWjmQaemM",
  "key12": "26Y7Z78kGXwDr9AEQAiPbWBu9yDZo5EZLchtubXBMCjVDnDegBfgj8BANK1THGxNy7Ex4kKofcC7A7uAZwrpuC7v",
  "key13": "3jBcqg1pM86BF2vzfp4QTnGnr3XD9pEDLw99tJSWba6nFupuD4sDGQRSfKN5CwPXt9tcSEviLWzadVTFNW5PjNip",
  "key14": "5HkDd9Zf7gpY1pTEgMtjNFYvPFdKe3MAL2v9LvFgE8AdXLKgxbi2KQPPtgJTHP6w2deD6vgSf6grUUG87ofnACEs",
  "key15": "28xjqhicfBVrE9HZViAH2rAmozsNuGwAQwDqscfYZZk4J9ED9Cj41rHbngy8iouUCYbriijg3Ja4M79d8ejTsNy3",
  "key16": "4fMnqM2s7KnQCWnnSoBPTh1PSH7ZA5AoXhxgq1iNJ19zMkvQ5yXZLSW2fFNPxqjp9kwGAxHrkJoqW2asTWZJWJ7D",
  "key17": "qcEGxUVxrxpt3YDe9NtCG3FPeMSSkRMHW34eBDWqo8GXVGhrstHwv74xiUfaa94MoqUYHGJDaqGJ5fYbkTuPdaZ",
  "key18": "5RuZRNxiMa7LSL7AsCrYcQrj9ViEL6d41fAhJ1ZYmUakEtffHHj9RyfNg8RhFY6jbvsc4t8i4FpMeGo5hfhpXhsb",
  "key19": "zL8aFZGyxQcfhvU7FZKaXiRoWaHeDYMF34XsKjKPCojuGUSjZ3j7TCNh47458KAow82iKQxXofbPg1c1SUanFFS",
  "key20": "5j7cFzq6hzyrraWHxXRHG3XGfmKrcZNypusAexHvHhnatkEPUm5ZptdSQmds3CkXer3LHbmAt5GKiWmAtrW9rr6F",
  "key21": "dYZiRpvVLDnDDNrukvUU3rGjcwZ593P94A4tvnTVa1Bid5BPbUDGeYAtZm5VRebBSAtNXeXGhVa1vYuWWYmNKMd",
  "key22": "5p6GszLMkDQAn6X9kaSzhzySLy1zKgVWYX1Fifzdu7tdU411p9J6YJokwPpzwv6YJoUv2y851Ecddg7q5Pgbimpa",
  "key23": "5Xt1ZXN8gW5xnC3LxGqMVhUr748Lif7Rgbzif2hJnsLiooqq4R8Uo6tKxVeBHGgZAneZq3k63dwwmLPym9cMXRqT",
  "key24": "3d882bbwCrkeqbB9jYx2xkuXc4Fzqz37zJscYh5GchNdLLb5GnNCvHogqec8bgRVDcNqDcixAbBHTmwUWpAVF9dH",
  "key25": "3zNfhmnYxVC1tDqpR6oBQRkineqeJ5regUoXjtAF6VVz2FoYHF8kXovTeQLjE2bzfgedvYaMGKBeyi4SfEuTus7a",
  "key26": "5WDsYZuAhVXdpzaQPTUppvrzBRiwYrLpNTe79GT48FhE7bCEiRNovhnkPe8CunzkMTktUrxTc2ETxN81W2NV8idr",
  "key27": "67U4Ys26y4fV4rtxMdgj5g4LwqC9jq2jfcvSsPmB7SNb8VQprxToY2qWmin2nYx9bCUK895qJ4JSLWZxa4SxhFUM",
  "key28": "2HQLEzJNJmkjHUbU9mNw2jdSffk22R9mCMJN32rrExuTWRjo1qt18EfNzPqAn2MSyV658uGKsJrCoAN7Eba6zFKo",
  "key29": "3vhhWicu35araw1BafjGD8qBCG2634RJEVYkrqg4NNYgCC5eojCaaNpz4sLSCXEXCx3k7FZhpoUxZEgT5d4H51QJ",
  "key30": "59HdfxYe4qZ7CK4XUPPVVhya84ePYKF8aSskAVa46acqFgDfeUvnkTFRPXNWHL2KUBEdYa7MCJ5VVHS5SFmggxLk",
  "key31": "C5ogjxQ11XDdHWqjATpTnW5Uz8bReit29KzUK1R7x2uLejcFkrCjc5JcActgZvKpXZ2zHtNoqmGp5WUwt2zWn7w",
  "key32": "2MJjEXY5eSPigrpYuW29CvMH1t9Dzm6HSS7AtdiarYPA6WaSmgoQATZoqVfBF8T8fb6UrkHwTVw4PC4hstXsC1sh",
  "key33": "2oz3gvFv2a2HPqZXeVMfJ818f65JJrMcknkzKGyyT68xXBWS4cVgUzq4TDLxauSFZpMubMbnT9EEbAAdPHHSdUe5",
  "key34": "4jJmh7etPQtsA3gAtBGTKpPNa7dNzEwkqbZdtKDn4RGgT5Sw5TwG3PHv1nCvi2tKUadeDirET1ghaFcfXkahrUiC",
  "key35": "Xwxo9sEyBisNHEgy6mjP43DicXiCNxfdXHn273ca3a4ARgLFG5bUnJWJcjbFDKzCnVnW7peoR2VSW4XarmEUFK6",
  "key36": "5WWVXSpHKfgKWUqZFwSybCj8bwYuSzE85vey6ETNJVihcvib6eM3BBsY5acFLkkZwqWJ3ADoH9oQktbjavReSutJ",
  "key37": "AfATUvuZfrDSQxSVi2fj5ucDZQ2i3MfPpZZ8mcdAdb8i9LQ2rSM2LLAVxpnt6bvcN9ZFmttkidUQCFBxNKAP1jt",
  "key38": "fGxm3V5swRV29RGLv425FudB6S75zMVD78Pd2WY1RXh16GwguzpJbBMRGspdwXJHyakCVuEwCfe5Mzb9MH9Kj6Y",
  "key39": "4qiSRMiayibnyMwCEM1KD2mX5cQypjfmACGhvMSqFnp336HfDFHDxGij22BMRkWXhcx7pSN2cdn5FS6pGxxEa44d",
  "key40": "12FY9SXzPq1Y1vWVmDZNq7ERUcPkqmC3nMpMhUKUarWCjgyLAB9D8QuFkaGyiia7hJvyoQn824BunwfryWyu4Sr",
  "key41": "3yy7bxG1W47uF7UDmpV2EkNYaj5MV3uSn8f7t8UKAveKzeBYDGkhM1z3KKmXxZNhd5g6DfcV5zC3ypU7k174CnDL",
  "key42": "21Y9jE7ZhKSZUiX881FDV7ZCZfsNvn42sqVxxSwmtKRJBGw427xF62vpoauSuysfjCtJP9PAczfYRdj7zFDjDSqC",
  "key43": "hKgRfca7GYaNNMmC77K9VK6KHWx76vNzbcFq4nA6VHig6aJiMCjB9Q9oc6BUp3pJqhfqX5P6sjKfmirKQ9Lh3Eu",
  "key44": "4pWnFK8Tt2YvRyHhmXwSfJnDf9eq9pKfd4iQvdMBE6JxLULxtxamaQCvW8vkFRqpHbYM4rHYswaLRcx62cmjT8Le"
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
