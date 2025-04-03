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
    "4Nz7DaG4KQdXByKgLZtpxoQgjFauvCAKTPRVuCN39ot1iH2ycuHkkJNha1jsLMWD88xQdVzXrXuxmaj6iaCfWvbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HxSRABn3mbNSnpWFzPyvkUC6Xw2Rrz9CUFSRpzW5UY7DBGPCqJsGiQEsjRF4fV75J8KCeq96N1qLNpaY9pAwsHq",
  "key1": "4fKPLzcJrisHg3h5bfbVbn3Darz6SJjbCBn3uQTTT6LQBapauMTdiRJTeWaiKt24CzJCbvN5HtdmJzMWbALmirSH",
  "key2": "5VadB5BZgEysAdsRVBQmkRA64XHi4XHiRAvfPcLq4ViBV4Yg8PE13Z9MK8nEaTmZk1coiUwQPQDUTyHkwBc3cxSQ",
  "key3": "CswBvsbyugLCHUxFG8tkN3oVaBmCJzi1MWtEXgkwdjYd49Qs6ZP2P5Jyq6NtUrVMAEm3K6onAZb7G36QxCMEfps",
  "key4": "21Sxh3HnLJox3xs3fCqtHs525ZyM3T6JHNmDNnbayu1jqs9s9RMNxyHbdC96uDp8HXHi8mijSpfpmndGLpZDpwVL",
  "key5": "3zwXRxQK3zSWuFJt6zo8V2eh5JAV9cPofzF5m3oG1gVZ49tfVK3QGenvie8oFGWwweLnRu2trrPqL5eoqTnh13hh",
  "key6": "3BjAPR1MMVVs35xVjgQroJMtq1qzpvDh9LNFmgz3bqjSFumKUw1bhp9nPVyVycgAUopYa53yiNyBns9nWSm5J4f6",
  "key7": "2GcfLtUAgBxweZgJdTPU7jTbpC66gRE4xWZTTyKSXmBKfhtVg5X8iQ8PLN5YU2sGyNvKPvz3UKAA2JVJysFhGXcd",
  "key8": "2uQUkTH7VgVwZunthBn5M6GBZCh5NKCeeCBZqiKrBwBKEvGoh4C9U9xjizzDCwRzKS99YjoG75pvNaDwQdKASfyR",
  "key9": "5itpAW3bUE5yjtfUeQW1chExrh54YRxo33wvPqh8ZaJsdx7qYaFL2sxVdhAiwHaxiZ8kboSFHUo6eSmya5TB91it",
  "key10": "5HWm71VJJyf4xNPxffdmnvpihQqLywKwJGK9g3rpdwPLFVMt1WQEcL3BTtpF8Wg1Vbvwt2evaduysksukajk32LT",
  "key11": "3SaQhezGR2NZWJKEnK9KqqLuHy3hMDbVnRQWK1CEoeZZVyGtSiJ5fSopuWAxSDWhJBxfyoJ9kyBKAuZ1L8DrSA7R",
  "key12": "5Y4uZZt3WgMM2aPWHqaccs7ywuiRqhu2wDZZFdn6phrdEJzatr6NSSEKVonjLY9kuEbbfrQMuQVudiyBVd6Fqx51",
  "key13": "25KwvE7NsCnbgfZDzThkV2LkfdU2PVnfxKffaXahvYRkaFLmaxn1X6jXAjmCZWoaiGPipw93fdPVj7vdR37GLN7S",
  "key14": "5BxfffFRkbUtMQyEHWTFaRajaevPa93WXsk3M5MRsm5n8Y4sFrcNPzPPEZ4x6uLxWikCvmo5rrJVN6eVM4tbpdJa",
  "key15": "5W1c1huE6pbGNh9G4iKi35AV1stihLZECuE39qtFZCxNnCdLcryHv6SyAVF9QxpM4K6riTGVBKaTWnQMvCWjB8wD",
  "key16": "5cBktPvY1z3DFW6jsfPJQ5p9meF9QVxbf9UfLLhHzF7uHcYdaFsHN8G2Qw5YdNdx38MjuhePK1BhXJTLx7cnJVRD",
  "key17": "3PsjP8pa76QQ6qdYKYY8Xa8udtaagUCMt7AK6dxnmvpGiyv3Wz33dF3im3hLTScBeLyja4pw71rFpwhaJiAM2Gwi",
  "key18": "4uuBwwk8PCFCbf6CuA3aRfP8m94wTZiRHnCkQ82LDEWAnBSaSFfhgGa8YS9nnQmC3R4mna1bWsuyxmnzjFpU3MAx",
  "key19": "4QDFmPVdAN2cxbdf3m7wBv2uRH9EqWhH1ZN4UuDkRn1PwiLxWjvusC4iygahhvT2wyS43xZGgK4q5cgD2XuEFhyF",
  "key20": "53XwDLQP6jyL1VZrVdMAnJAVd3SWNHCY9m1uD1ZGwK7Vu7sLqVMUSP63JhHdMbedHpDr4Eu5vT9jN4zX8v6jXqZ6",
  "key21": "3A3oq2xsfcdwyxJpRajn8RCQJR2Ep7izHiWGfVR38r5BbfLvrQW3h7oy7xwLwTvJt5JoP479cai7bPpAep4v7mBb",
  "key22": "aY3F3C1sNYWxs34MGMT6WXfAdu1Q5gcyqtcHZadxk7e4V5e4yofAkoVLEqmy3RuArRCjcFXmk9Pyi1wuNSid2KR",
  "key23": "4ikWZKiXgt6f8Qj37c4RKCauK3fcBKfY9vuCxNqgUw5pdMrEBh1zh2YttFGbmZMpZFpNPHzU2UYD9LTeDQUfW6Lb",
  "key24": "3t2wCyTCW8yD1iNGs8aq9jgB1UZuFWmWeZqgVqhrXZMQ4hTiHCrLKvK69wEZwJ2mP8NMzCbXQU3umYRR2dd9YpW8",
  "key25": "b6EYdswP9SBbiDdrTT5wsv3iYvDsDKrHBZEDwUgnvUaQGH7jsnXppPpajmYyyFdRoVRtxiK9PwppuVEx24XJnfo"
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
