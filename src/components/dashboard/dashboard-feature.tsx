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
    "2q4ebZunnvd27UTix4RDdhf2heMY1PyLAXd3DS8YwwEGCZEmLPC1PCQn3A85MYAbjv5BymEcoDB1HiWmeQzEE91j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fv4METBfLGTuMJxGgC8Aae6TUptY8zdmxVPFAeXrSwr1rDX6B1M3UickonK3XVkZP7Q536irbjtbEV1Xsn6VpUu",
  "key1": "4DPA68FAEsdtPuZhyGgBaTUvC7LYdBc9CQC8LTWDfAfNU3QEdRaMpcMyJYcHkrLrKNgY7ZJ4eNZG1h1KpNQDzbV1",
  "key2": "4HSxuNxT4i4TMNeF6vJyYmDCkCKG1jXRb9HuVKFf4qJSNXzLmSenA93HBKqYDa3vNa3gLNwmgMyTB2Gd86NMggtE",
  "key3": "2NuZBqkPnThvKo2Xc45yhAp6WfSqqZPM1HLVMLTmHkB1DSGvUAAD77nqunvBU5KNqb1XjFSfGSmhiiB3WLoLNTYu",
  "key4": "23KMSYVzNw5tmyVRAVi9WZY2ccnSm3gtx8gAW4VhSgn85hLczctXeN2WuQ9XdT2Pqwnt8RQkQEqpP69ijapMKbT1",
  "key5": "4LajK3rMuWM5K2bZeN1YgzKHFKUdvT37ZMzWV9rBPANHynPptnByc4Vj6HA5hAXvgeZNZRD6bNosVfbRDJokEBwS",
  "key6": "FMWoYXjq7tybUidjv5qcbj6PhMBZiHykqdudN78uLwCE9GKhGwi931LcUN976osYV37j8yZy6Cdyf4yuMG9bcUV",
  "key7": "rWr8T5GNHF3yAizeBKSbyCjBDnJMdb7gaeQR8a6Y2nzAJGtUFooQs47MjFU9XyS8miMkSkH4kL2ZL2WEMpFSBLF",
  "key8": "4LivumoAJ9du6rvtQMcbytjrPcNVwcKa9VxHzvuNkbBkoAGQXVDtMWGhEQ437jKYgR8bkH41HL5kcRb3jEoiSSbU",
  "key9": "5CsAUq1X6iHfRvxHmUJsHQt37vc28tjZhmWTXUwH2Mz5ZfAmUrWykmtbiDUVCKPy2BZYq3bNmkkxNSKQc1idvgyw",
  "key10": "2L5mz9mXJMAkopU44dYhYYY6QgAEu1UArQQTSHVLBCz2HojZ5g3eNpZzkpfyJJXZkaZcjuveYbLGW56FtoNgseCF",
  "key11": "5ajTQyCp2JRSavmPREPoVxF1acgm4osxe2dmbTJc4gw2WErr5rAsN4MYL9oskQdjrBPgHi5KYmWNNpgEA7SP64Lp",
  "key12": "3NGtJsDBz4jpBDUGzboiK2XFc2MBS5PHtXiypF7nbBe1gR69FA7du2gD2MZnWrQTgLV9vV3Y5sbUDhjFQJUkwrBv",
  "key13": "5P2GDH4LdgMM4UqmbJ77Q8AaD4xQfm7PoGh2zSZ2QwHm63GzFD6fQJ4YgrRyeNhZr149VEZzuZptbwK1F4nwXGHF",
  "key14": "3r8SJBQnMVbcV7n7sfYWwT7Nd61qZi9x37CmvSKqYrcxrbE8mnn81opKQ1GkNTQTeHcNCRdiUx9pXMbWwqUDqScP",
  "key15": "tbbk35ZRkXXzNyZEyCz8JAwHHf2HQAVmWD2whro7rqpH7UKidBQuJCdEXct5rzJCixF4YLq6Fmi5VdhcivmRZsq",
  "key16": "86Wbym4Symmgv8X8Ecnut8KzPnAhQ5q1GD8ENLCYNhVrX9GwQrPydtSEPedwEHZGAgt43yftUCSrXEyZA2sBgBs",
  "key17": "62PMsozutWaNX9KStQHF5FHFAq4qRgCMD4ua7Xgo4E3SdG78GfNLD3UL3NHNWU31YonzPtJqkYyg8WSSNTXJe8Cr",
  "key18": "2Chr2y95TMfAqU9vW9Fx73J2ZXC8YUjzSCeszFDy4qC1mNhyc9Gc7ptkSk3mA8uEgb7XgHpisXRG75fpDPpu3WiA",
  "key19": "66ao6SAPmuxKQRPHiXGngsHivwoua3A31zDFwJgK9ozA7RYgJV6iZu8ihm81Fp4dnLyLdDRvrCXKc6zXJnXyU6T5",
  "key20": "2LHb9x2hxaCzrx9TJzakCGHZjuUjWJUYrXKHg8acQH6DhPjwRe9LuWRvdbDrWvDPYnexz4WdDxPFD9EKf1owkG2z",
  "key21": "5LH1z1T929YBdwtJHcU7tbWb3gkNBuViwdXvsoRwXoLf1Z1xP2Dtqcq8TbtYrqyTnDc9wpD9CKG3FLnskXgd2rjH",
  "key22": "3xYaCS7DU3wsUxmCg1bA2rzgFZmq9dd8N2EmAPeSzbAnkAqP3qRr9YrYmXzaSUXUcW5TyrHXqUnCFfq84ZnzNwkc",
  "key23": "2F3UEnaoYMzMLxPc6v4PpyCUheciYmHe9qGthHaRMgBq8U5gKLDwjMkTNwQCxRozCuLw4spwGW9n2myNwDHMK3TN",
  "key24": "4Em5pkrSeHtiDNsF8idxdif8SpjeAiDZAwofWdobZs1qEHzv7JHiXNrd7g3FGvJHc46L3H6P6KxGrpvWU6sCSLAr",
  "key25": "34B8E4Q3Qa75iuFtVgPcWCUnTW4h5bKSCZXRnn4C4bPtHi3BbzHEr2jt8Zrx4YRVpv1RiATmtHt4rVKnRYsSgrsL",
  "key26": "5cSJsDJ1ksrL6Qw1qx1UN28jBRzBKqoN1KaHDvdrSDU2ZwhyEtjctdHe22FzRzuh6viUCJsEWKV8kztYUWtWbuoi",
  "key27": "2bME6XAhM3TWHrHhtTQqVfFvtuhPC5U6ZMojdTZARiPJQsLufcViXvFVYMb74g6zPE8zM4dpsLXa7v5U1vTgby7o",
  "key28": "3amhjurqNbKqrBvhiNq2K4nJW8i6KBkLk4UBx1an7xNhVxSM3Vqt9zdoW4NX3FR3eKcdJEoYAF8FDiYDxhp1zBVX",
  "key29": "4fKyBEHpAYZoN9Qj5EEpqzpwpLPBNt5e6SnMJAZVWS495sC2ZgihLV7cxGGmoHURahKr1nucd8tadQA7uThDPCTa",
  "key30": "4zdfpoAFVTQSm8o8KZMBmr7hM8BSyoj1bvbaHYESutWXAXwWEesKfQNYQFuSkRuRsVLu84QCasNHgKB9ob6J3aB9",
  "key31": "3wkYSczgC3sVE7HVuQr2PYT1XE2Tm6VfPFEr3Pr52kvktpa5pq5C9V3nuYPNSbcXpXRJ9EznNVmNNtPcsfymKqhx",
  "key32": "3M7oBmW65tsQHRSRnhtiYRyKTzyZtCZUzyqvsgJjB8ZkkQYg14efkvBLtiDECNrcsPq8zJ6dhEuYtmiiHsj14eyU",
  "key33": "2En1RAWLxKcS7XLnPQkeuLfQRokACw7cGZUoFYrmNG1DBQeu9JsWnmV2YM3Ho6o95aiAxN4u15dQSHvziwguFYkS",
  "key34": "546ZbTmfpnGfDT8jAXWkR89mTNKq1n2JWLycZU8YP4qUFmV4YvWuECc3aE6zncivht1pjqb8UEjSx1HhVuoVLtKw",
  "key35": "4fZa58ussJARPjXJXxdGfUKvDDJ2dpDKjVNFUicNmhtr5pN5MCbdLE1j5Cx74XpHK37gFYSvWfwWAi71MSnrVhFf",
  "key36": "gAGraDgmGkF211NAMGVpCFWAtZaHDCWx5AMcKzwwitfBk6cqUBL9g4UsiguZx3YCCmjG73vnV7Sh3QnLa7vvNkW",
  "key37": "3pMvV18YGQgXWToDrMEgpXyV2VqPLobydHQZrKoBRXTfX8DRB7jRmyddQeMZWm4QVViFfEE2TSP5s2duBmTBD1je",
  "key38": "AmgFHtQyuzyCL5ZMDg3hYFTHQPCXYWYFqcdkAb8o2XfcTmC8rBHpDgBdZEEKaGbgSTWiYk2dbHUFBiv5SbVewZt",
  "key39": "5kRjP1kWNLME3TQ11szZMJrcuBDqkQ3pmNj2V9mkwSQZxhgT1NzocjAxad99qFizWDP3enHzU6knpVVj3s1pc4xv",
  "key40": "2dwL7We6vTipNrCRiU9tXsLkdwrwgiYMVL1FoYxB2zstniuqaW5Vk4LK8UhBrRZA29nP4uAVtQddHzeQvRVHthME",
  "key41": "gR9MmEMTaXp99u2KFzVp7ounQTXyJaueKJwGAf6h2M3Fzb3YV8Rh1ZJSgyLysG9PtA4rAUjYe77Ppp9rffeuB8H",
  "key42": "3ecAKuKhqL4rSmjCFGhxpxhcAn7L63kWCVBxmzHukGxGgVqfkPPToHHLuQX3NVUC4TFqVWY8tsDyQceYYxf5Zmqy",
  "key43": "4gGsZjXkgoWvud3j8DaF4hdVa5PdX5coaKmFQuj4ZGfSGwb9uorFamRqvQAqoefrFkqT4rg9Fv4dsKV1aMFYBmwz",
  "key44": "4BmGqmPTc9rYvW3ESEULi6N4Y41tJqY4gPHZ4s9tdcUztG2iyssAEurv5yyLiBqgGA5fK48d1aTmrNYjusRrR1M8"
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
