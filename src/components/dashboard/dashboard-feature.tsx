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
    "43TDfHFcZXfcuZcXViAdvSGnhzuGeSieQSvfPXaYNuRzjnBBvGNarXxReuWnCrUm1b3YFyBJUxp5rekLh9VtKR9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ECBo23bU73dF9DpAMaLy3zzaAAYUeqSxdPG5QTksnyvBkdXaWMDcdZF8wmq54ycA6fApkYU1hz3kcP9JMm5WLk",
  "key1": "3i7ac7v3eQNgzjzF2i5Va9gCsZ7Zv2fXVXyAq3WeTQ1L2PJhdqjugZZ7mocGVTqY8fcztFkv3qeetsy23QeSCjz4",
  "key2": "252Ly7h4XGd8hNCM13wdzr3anZLseL5MRmuYnqo2e2VPRkqiLVkfmE7zqphwcFQkynsJYBQyFR7HQWzMb1Hnoafu",
  "key3": "3TcvkHruo34mAsrm7FeyygK5yAwZkym5PjHTYu6gYidoZfrPd2pQJRowxvPytt7jafSqcURNEXBQ2wMDaAbX5V8Y",
  "key4": "5fihN9Wed2ugm63VVhLBdGedbk6fvmuzBoa6rTmZB5i6AgoSsFEUGCcivtEjU3PBjoAB4xSp2Ttid8xXTqfEYYZe",
  "key5": "9ZeX7RSfF9PHtAHvfD8aUqrSHdA3eeJ4s7fwYYPtKoftn5zCjdk7NxM63PwQUhQ1eVaYbcpuQrjKiS3z2jQZJA1",
  "key6": "4oLn5a1d1cxiSZPnGUXJ15dddzouoK9n9B6thXQ24RP5b6f35RWejeicjzaqZ3Q6w2HQyT8rnLQ3VSxEvrdc2bCS",
  "key7": "5H5aL1ZA6VLZ4zJhPLmP53YgAChTxeHoAdu1pCo35rhNPjpzjd3Mjtt1QgBaPbZLWKkZRzTXxbV8K1LbEMXznVVJ",
  "key8": "3EBWDS3KouYEAXRR1me1iF9pM8aynDGRxwP6KJFev7ddTPJT7bt2Hk6hbGdRRxydCLAap8cRLHYbXowZNMyxKubr",
  "key9": "2UG62yh2iub9foKi2pvUSxbuUUvQjXEk5NnWHV88Y7ZS7VEe3BChzDeqF6AGS8RkbJTxET9dwV2XqbWPKVHP8Ve9",
  "key10": "hpEbtzUGtcZavHEBotyPedycc7zS39VaUtoaczEYHjczxM79jVRWR9fkdVt9QL7dmaR9h9GQwSngez3vqW4Xmw6",
  "key11": "5vy9NJfSJS2LC2GGbZSzGcJDQ972pXDyYx8YJ2wC2xEiL8mHbrh2RLWFyUHrxBJgRGyAktfLfACsN9aYS2v7exu3",
  "key12": "2jugBuKbd9QzmwzUw66g1Ai9jBqFkgmN1jowczf2NCw344dxuhhf8d1W9rnuzLrSgJMoDdHkMFu9xh3io1vPGYRQ",
  "key13": "3dyfxXYAXX9sPVLdiz7VNRREpPavVjdEayn5SotP6wxaZRUjaC66vy9izKD2Y8T68BMPDrecSqVMSh8pY3Y95eQy",
  "key14": "4UGtVFxNUQDj1RhkjaeJhsY8NX5eoWSjaKNQhWszGPX3Y629SDxaHfBdnnmpf8bqpEV5V15XSuuRQpZ2kL8KthSV",
  "key15": "5XKmsbQSmWvKRX1pRZEL9eAE1opZC8WegEwt7QKVefyQa52VRkK1Aubvp1PZ1JEpCF2BWiM2K7b3tYQZaFpbcoXA",
  "key16": "5QS9vqJ4VozBAFzmK1v1woQj6LTEuefCjoK157VQDz7TAcbTcBfsrRN4MK5Ygp5jLe44vecwksRXTEHRKDegfjz6",
  "key17": "4ai99kUprzDfjJtshwM7PDJpEqCupdLj254vhv71pfXBxNKbBptayU9dxuv1tkbLF6mJmsWBm925o2fpVu6x42v5",
  "key18": "39uNWjnooipBUBTao21fXRk6PD3ogndEvUMoaTivU8whpypgGWxxGwVnPdu4Zz6BHBGo4w3YNhhHSJYM6XxLvYh7",
  "key19": "2Wx1eTCeT1rvcNuihaoVsoo2jw4BcQpfbDEWSzbRmqk8EfRY64ACRstBZeViTmGTYzvBTeYpEKDFamufkmLS1ioG",
  "key20": "3QTt91aX8b7SHsUaNthqQZJTa121AoigHWNtZdjSss8sUZtLBPLN3VhjzyL7kQYPioFTibUsVgEKphxG9XpyrpmQ",
  "key21": "5CEaXpTFUSW8R4tGmDtL1eewBjzM7SBXy9hiDbATFSNb1kKWvNHVKnrZemk7CToosmutwsHKsNZ12b4HQ4PTJf9d",
  "key22": "gHGmFZYh4LEnTq2j37HxRHgpVd2HUnAFZa5tPneB9ApZZfFmGKQQiGTbD5MJUuX7WN9jeicX6rQTmxudEkDehbU",
  "key23": "3AUi84FsjFVvWNrTyiTBbtaM7TN2z9cNo1BWNyYjbFs8PF72tDMtRSUtBn5f3U2sweyAf7jdkrcRkhF7dXB3Ac6V",
  "key24": "2sBEqGpD99qJuiFY6LCqbHWjrn2qgY2B8FQ564KojQuDvceqrZmkaJ2D3wm3EJEu9TsP7zL2Gk4shW3f1UaTK4SF",
  "key25": "4V7zMc3GvqLgim9Ft2Ewxrc1CeeEYuShVRV6c7sDoRbYhCMRjEvyEpHoaGQLbZLtCxXvijmB77gi9vmEcgt9cKtg",
  "key26": "5Sbh2jDWoAPySGEnKdJmyF4Ppg2p5fsKjBDxB9VB4zupZrmR1KohBpMy6sRV66jtLExpfBAyg3pmVL9BdHPn85Vg",
  "key27": "2GkMToy55Pfkgg9nyM44uX48ZgRHPQjG9aJA6mRz8hJChRXPfSaAgWV6jxgvceaN6XYYDtVqgxX82aZsLw9apd3m",
  "key28": "v5cuoNf9H8EBsM33zfoXrTjqbh6WuW86p2rLV8Q5FSDk87FrvdKF3xrHncfBfUf6yzZ4BNcai1Tv2R6p7ir2q2B",
  "key29": "5anq9A2aYkggTnNoNkaC6qEbtt5M18CoMqMNU9H1QGGZi9j4a2mMQHQSUeHgdVdWpWifpUjAzRVh18V8HKdFv5MQ",
  "key30": "2rsbe4smtvvbcT6NXjQkENnkqqCVFn275ERKcGqrv7stYJPTK3wh917ocHfRedfo8MwHR6rfbuwS8aRRTiiwYQoA",
  "key31": "2N5y8pDSFrCpRVBUAYz7dTS5YWXc63MJw1zFFj9xmyfJpS6Xx17hPrEXgPpuDQWpzAuwakLWfwaYc8d8hzLKGcvt",
  "key32": "7kgKSDPgLrGaCKCpj3ctX237k6U82xnjgZe64NpZbFvxSRmfJTmGGn5183x4GuR7YZcbbr9dhxfYrRBkf9QADgH",
  "key33": "nqkojGyPJ53wmjzkPiFNTanwXz1KMZTVwXixJaDPZGG9RmTmu1XeTh5r9dkUj6S8ohYT37EQnJwRMGnhat2aowU",
  "key34": "5gJRanGYy68PSibzJunsDYF8jGgVBpMWxVxEm6QFhGbt1YKxcGwooM22XLDqqArGrzKNucfzBBsELc6djBAgh8jy",
  "key35": "51YAbVKhUQ2oLq6NjjABwoUS6PMYPnF2iw9TF4m1eDr551gtehkpB6iRydS9xk7nruBCiRhJ4xpY24uNPVjeddG4",
  "key36": "2oTWQpFHRDxhdvY4UMXVAA6dEJwJubD59UjDfJnwGQ2M94yxWGxSeASv9VaCbNhNYfzk8bpnofHo9vdoxDyQdtUy",
  "key37": "dHNCmrjophN4cTeAX1BrdLsCszP5tZgZBTJc2XJAQ7WrcvvNrjdt9odp889daP5LFReJ8rX8S4M3evyWf8EonFD",
  "key38": "4o1dRU4oL1HCu3Y32AFWEMdQZfda91F8RdTR3k4aL8KRJtCDaQfGn9cb4oUBjBaHwP8bVcCK5RtFXp41rrUVFwpg",
  "key39": "672cdKzXfDP7GNvELoSDm7QMScygFTb5J569VkwMUWDsXfF3fer7GttWnQ9ZcfUeobSkigN2TTwBV7UGnV7GUn2Y",
  "key40": "SrAiW21ca6dzJQEtYio3H86ZuXaUJvMzfzkgDxiqJPbSUz9uVBXnE4vrURhebGdc9kFYg4qh8frRDFSxV3i69MG"
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
