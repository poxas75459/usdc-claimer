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
    "24rfqg4ctvuS9Ui7hTuwV5KdzZe9TbqBpJbhDt1fpbcu9G9s3zrgFc6bXWyfyMbCrVbZX4MaTBaN7a9HCAAjFTq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Pz783ekB3sD1K6Hvk1Lb48jht4PVwwYsKi6jZDDzY5yLACbzNCBktzhfDQe2QgvstTaQMrBgDFCnzwHu1ScT8Q",
  "key1": "fYcS1qeDAZPFF4nuW7QyhgndsZm1ifbTNxsFvRVQJxVnzwWzVwNunwMTUfHcjva7iEM4pjZFNDrboJ8cGJaHGyA",
  "key2": "3Qj3PTZH8VZvVbuDSPqK8EE4dBUKXB4YMJQTGHa7EhszMh9KxriHnGHQGBGRgQ5qbWFuKHgUno9vxH7WjnPtFZ3t",
  "key3": "2DRp189wjmzUxsVvCzpUMZCtqocf5iduhZYbmVtB2LsdxQmp6EFL7Kz5LKQyJp15G9iQWAKodZrycpks1bwH6UTp",
  "key4": "5pnVfbz7dPMguFn3yJfioei7t4YfyaEwgHX9kJ3su2PMVdVHy25m77T21X7JHBYA6r67GFnqPsLBtm5Qpoave5Ym",
  "key5": "3urA343YD23uR9Ec6Yx9Hti1BH8GNVGNfP9hfqCbXiD7ubDB3f7Zp2QAcjBBNsZhB6C9bHKzic41mG2TvZZkbL9t",
  "key6": "2J3bZ5GHbctxoLJEAS79De5jkTmSuGaLai8XKNeqT7V8WF28HcNLfiCr7dvYkAS2BGDuHQPV8pA7fnnJetU57gHn",
  "key7": "4QTsuXWzkM4ejD6sp4JoYG2z56ywoegrkJgyNyMBagB7LtQisA1gnHsUN5uBZxXEBS2JF6ihLRbEbDjASHhpdYc9",
  "key8": "2J6wTm9S7JvBM5p4TdVrw15bG9zA1k5rVnXHFi4AtHycEa1oG4ZDNgESy8hFNjn4DizuGwPrpmbwmGx1KmXBQSjQ",
  "key9": "23K1wSGaWcZg7J9ebRh1z8GfwCCGAo5nEi6ZDTkNCQU6ewrTe6BFMZTn5aVS7mVyzDbxuwLAWMSnzuSHAVuBuZBe",
  "key10": "4QnQwL7NBCVySYKyFwcpgEhaCdK9rchMs27hDnLCH2ypzFbVcQstmjMHiDRLWeDEL628VR411s5FZ6XyfuwjqnHJ",
  "key11": "4VwWhY5y73AgXGgU2u7RdwrqBaG9wzA6LHv4LB2JtRCXn2rf7mxA1K3FpB5finXUV8jAuggeGiCY4Kt7S2wxMrkA",
  "key12": "5PvNtF9oqPs6z3yUctQwAV51Bhwu1ZKMWtVLQZFAdEYkncGWUcpLsqiPMfUeYpA8fRNThrbrGumvM53i88BJszMw",
  "key13": "5AyYkVparRAiGyRTKS84QvthcW5ULn1LuLokZFiGzWpcSE4n2w4mYiWdGCjT8PYq1HwdQ4CETEvaobtBzhP2mpfJ",
  "key14": "MJ5yqymdwtDfDB3spWcFh49Ahj51V4RX4D42ZCpqeHvH5R8qW6E4yQ8s6LSk1HD9BbYdet51G2GSjTBUx5uS4kC",
  "key15": "p43ezzrfpXA7ckuKGcbXALnZVHsc5dqCSb5rKX7bYqSMoXjWThfL7L2AFacXz7HKWM96VXm2oTEt9KQ9T5Z9Y9D",
  "key16": "57TjGN49vtdvZdXPPAdSMhBq7bE89yajAxTQRycL4tnoyfUSiXFtxyrhSrK317BPteHLnctFAmMUpTrFFPa8sX6s",
  "key17": "4c7zjbbMiehuufiGmqyLce6mnPER3QEJaETSJqg4DHYiP4mBuLKG7MQ9CGsBvZFVkrSk2noSFn66ru2qZgw9inpU",
  "key18": "4Q9LzmVP321i1t4k9Mb2yxEnPDFFXcudBP9X6ujhp583hygsWybV5scu1sGcCht5fHXTt9kM9rZXTKDYP29vwc6V",
  "key19": "26DHEDcxRDkYTJdChi2TA88VXXv9naEHfTrvbhxrn5WAjXNyhQnwthFBQ1ZrixhhqhpRxxSrmtgH8oihZqYWxVZv",
  "key20": "4EaneZFcsuSjQfTLfSjKLn7qygT3uaqFvgQnS9UyWKA6LW56NRVQ7bJjZGtGUczui7ouKbwDQN3N6NeGG5vTxff7",
  "key21": "21TG9pQvhpW995fixoYZ1LzmVLs3gQpKRx3jYXra8enKqzcpGfLAxYgJ5UsW78xGecCtF3367tidh9tFdPsUieD1",
  "key22": "38TbScXVKhxCY4BVSzoDXkaLdWY1EmWxw8whTzRrcGftgGWJY3KrVkxcj9iBfPgyaGDpBWvoU4BAuC5kFJ2byJBk",
  "key23": "4g9yrGX8wgCHZvJymCnFGApkmVhkTeh8beti8zW3ZLtp7yijKVrjHtGUK8Up3NR9BnNwLiT4HKrqpM2xRFcGFYae",
  "key24": "5aCSQkQRnTxqN77FKjnSzY77pyViuWYSLZC8ryfEj9TK7Ew9Dou8vXkcuqZrrdPBNWNHCpyNheg6CBZGK8vFVWCp",
  "key25": "3WTVh1KatfC7ftrzGqTEDHxCuHshLgqHDiJ3EK4jiAe5W6jpQPz6xt486GASJkMMMPRuYSfgSVRZXPjsDYZjE3na",
  "key26": "2nXKq64piDfS3eMpesnxyacWbiTsmbVLNbkGiTwMjPgt3QgeL77bYXMNGmJWedcuTXV71CDsJ68Gz6pRvqR1JysB",
  "key27": "2b9bBM8xn9bmBpjJmN6NXsYNrkpwXHgULVDHiJpp4F92zgvabaNwLNGB3vH4TSDtydF9U8n8WSyUaN1aDCXqeQFT",
  "key28": "rpTz3ofFPuH5jmsgP9oEx3wfpoFvd7CPGPNmw4j5buNpaA8HXBMtoZ2HEYY3w88iuMe1jypouiDhvGEmXZH8Xue",
  "key29": "3unFva7uL3pNf4Cz5eHjyQvPwWJKUPBhKWFAmJBAugQhN8qnMCeMrevg1fHPKNYgN2e32iZqW9wjsxX1NuLtZ3dT",
  "key30": "5PPJdTFht7i1edP9dzScnbDHTzqYY2q32asN6Fgf1zP5WdNki8y6yRo89JtHsQb7TFmxMRgFLt1wVPWE3dFUqxVD",
  "key31": "51BqpoM5yujedcpdYkJuFQS8TTQop8GrjjKGzMETazYvKR8uvcXvymxg6oKkyEFsh71eNZbgkKnZ41aZm5uSqUV4",
  "key32": "3TixW8E4KErnXUmKHo4mL7nsA7s8AVuUuYw2d8UVz5Yth4KNHm6bnBLYYMcnye1s6ocgNhNrWcWAFQi3dzFcNX99",
  "key33": "Niep7A2GTwxtQZuTe92NWEkN1fxz6dGaitYYWRRnF4KyHoBjnwP3L1G8SLo8UT66zd7ZadPAtLzfydSrj1V8avo",
  "key34": "4ZNHgLzC47w8LLoehPd16WnoT5eRJvg9f8SS2PRrchwc1kzmBT8B51aWbu4gN7Wch5NXfDNPDJkB2kLU8YDaHwse",
  "key35": "2XthdVciMjxC9EyGLtEaKrfpCbsrMwggaGWa88oah4eRJLxWSJxP8wkwW7kxqUZAVjBagJCNQdH1jmuXQpkT8Sqb",
  "key36": "4zuJ2utM5neakQCuC6HJdeum9h9coMiP7Xn8thr9Fj3sqkaz7VEh9znqThTeLCyapesW7Lb9im7trnb1pSWUZ7NT",
  "key37": "5j4WscCz28Du88t4dLRtZbNsQRC9NwxS1fgJuwVEkjXEfBzjficPYoCAzYVCR2evkwNfX2hNNbo8SULUBtgesPks",
  "key38": "996wnc7hMge6LSjtgqV5k2zUnpdoiYqdvXBRpaHrL45JfeSpg8Bsn3miz1DdpXS9ZicBLvzaXQqRQmk8Ykw8BGc"
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
