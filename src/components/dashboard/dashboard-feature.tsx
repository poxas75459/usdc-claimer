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
    "6hDwQscMPdy7WFsDbPPpKm3D6wdGef5MZ5vUdwFFhxPmWUeqhFPcLGHQ7QxRzSNzgE1ma34iwSrvuq58sjz85pf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eiasTBtEvBCLCiL5xcpZnHvB4KgJgdBZWmbyS7P9SyPCeVXLU6EE1b5fxDkXKfMKWA8HbwVeEZG3xcY6CmcgYJq",
  "key1": "2RtrGiWhvegD2mBvwbFtFvnfAHvLDRS6WRdNPU3PJuVVLmqxMhtJEuyUhabv7XLg3hiUqkqzRcro6t8VzA8F3VKg",
  "key2": "3QoS2iTiQfe6zgj12b999vGXNPFNuo8Y7GBka75Rgo6XmLY17orJNGsJQq6N5x9pmiaPJCcwd1KeD2MMHFfmX6nh",
  "key3": "3noMdGvbm4obkDj2qNLdWpNwSK2cn24CNZTCNGfFd7KVkhvfx1rN55V732XeGfNQLK9frKo4z71QRetAVdqJ6vth",
  "key4": "5fEYNBSHPDr3QZZXUAQcrEUgtCfcJGsTerPLAnEQ71LYNdfZE8TK1EdwiiB6Yuw1LnAXcZhCfMiQwB96JSbcB4iS",
  "key5": "ZG3fsfzqKXmZUEKNRDipBVeFapjfuXeVGiacAuqkz3u2JJV4vw389inUXCrw7NkAXRb2kkuDHKCsiamTcVfvKX6",
  "key6": "4c8JAudBCqnzihQya1nqhVfjgiiyuwmXcwDGrzgmgNipTqCWeQijB4nNpCtQpb9ea83GDxBqGZyMGZiQo2zLLrEs",
  "key7": "4j8fTPqugo3FTbCNxw9reK8CAUbLyisfwpnvztJokWUFhSsqE14d67qqf4D4n4c5VSJfyNm3aGRMdSW3ggHz7KTy",
  "key8": "2A9KDX6ezPWJ4AUX8dVmhK1yBmdTC5gmT67gwhPDMd9UrRJeRKdAhA7FUb1YqpSJt1xnp1xdfjm8eSQ4AmFEZ15J",
  "key9": "3c3XD5Abzc2kDeMYRE6dM4fDHCowgBPpdARPtoT44ywEyHNht2c8zXJTPxks5BQE4agjYKaVb2obsRKhaGXmVQna",
  "key10": "5iRZKMXS95hx9JvT1ftb78KXrnfNzxwoGVuMQhV9zPv9djJztmcJh8jeUBUmp8j1JTmYDCGhL1R7RcMfpukLgfeG",
  "key11": "21sJWLTA9LuqakMq2mzRqx1LEcNXDeNypS72UgWD3S7DzeUHm8PoyWFqiBmpNBzJeCpPuSEw7y9GRSszaDcNWbiH",
  "key12": "4xCMrdkhUYQ4DGyVUaGA6R6iKsKzvRNEJcDf27iy1jk3rTAbCcAsp1eAatGHjhnxphZmSfSYmxnZr2B9WLh48qgp",
  "key13": "3yVahHqNaZ8B5zKDrh8MftkfPqgUsa49fmWrFPsDCw8gDc2ggKKv7mM4n2455UmzHTpdigRbwGvq9qCM5Km4RajS",
  "key14": "32W8R1zdZVqFzibpqWZPxFdMwhZZpP6AjLqYCvuxL1S7yKHf77VUunNZT22N1r5WX24FQaDJufp5mNAYmUfEpZdB",
  "key15": "2HVbYGteNiYv7KVbyWm7BWvN31KEH5kB7Vt8x3VnFYZPc2nNL4VYk7Rrvt7krwjLp7nhQD1mcU9U38FZ15pnVqP8",
  "key16": "5pRWA5tNzDdM4zR3szuySLnDc3h6eViNYtEG6ttd8i1UHa1vYtZDqkrdnrSbKkCCkgvt1CzYbyovN7YD7aBvcRPf",
  "key17": "fHfSX1V6nGDphRbjvDEE17VTfFsCbYyu4ytiCAbUiXSp1MK58mH9y9Ari7Y3SKMM53ZMRoCfpNeWqfbibDWfab5",
  "key18": "4uA81dEiZK8bBnu13QLWCcvjYJaWZXVJiNBLTfRYoJu7NotUk9tZ46kfTkTXQ8NZFLJJMZdmnqr2KoGr4k6Wh24k",
  "key19": "2cbAuWVg77fB2VTvfwnHrBrUF9YQZ1DUvd9tgWpfe2MzVdiorL6a9oB59hC77669MFCFqSia8UDiHF1vxQed159L",
  "key20": "4RR6CQKgS2eMQwS4v2EvxAFidBhrK4hRhR6NRMfYHae7hZCbthJubZ8zAH9fATbShCPsXz17PkPBbMsyhAGoQoz8",
  "key21": "4icvDX96zcL3dQWtPCQcz1SfC5qDwut4hirCy7WatdiffwHVj3bTZANru25y29RZvqaLdkgYATFzWJVRqP6nXQjz",
  "key22": "3eQoN5MkNikm88QY4gKD8zjPiQaaLMHqc6JAMVoizrsZ52t3tfpHB5uPi7zjbNb5ZhATNKokvpNqMZjy5PaDhkcP",
  "key23": "4g1XxCfByfUgb9zwuV2NeUC9ihxoTPSNwCtLsrjuZg9rhmHQoHbWmEMvUd8MtdohNUKmjxeRscvLZX5sEzuoZJSy",
  "key24": "FPBRZf6qD31sGeQPfm75YR2cYrV7L8Ptu6nzPuHXDer1iErRC1q5FRETS15xAJJiNhDJB8oSdvezZSHXp9u2SxT",
  "key25": "4uWhnxT1Gpdqk4YmnxH6Yysy5xbyEgtxsyywz8VCQ7G18jd5uLRxY7QpmRxSRBkC57mBqMsk1bcFhWMX5HqKZkQh",
  "key26": "5jH11nH8iEDR5wsf9HKuMKpUsqAwNhJuATB79VTCYgn8uAjdcvXyynDWu5GKhk1c6dCRzTo922cv2AB19EuczDGy",
  "key27": "3muRy2SxDZWperqExCmBjvCsu1qhdpGVkHeqKnpTN1mKdj6ZZaoooGLcyjtEY7vSKj8hGYY1Fx7kVutmCNjiuCeD",
  "key28": "okdpiJaVzZgtfWnaEAZa19LYcqzJ8CRKVhzTffTd7LnWFYBAnFCmC74gsCj4cFxPTQEjwBohEemMVrhzFj3eMvn",
  "key29": "22p8Q4C5xaLJgfrttrMkabJPV6hww7MuxtZ4nk6aVZewQCJgt3FVTPccqL554a6ToC8nULex7xL7rH13k61Tnp3P",
  "key30": "35QLYawRhE56w2oRWXqvNkzL8hZMuKdSYs6Voz594uj5CX45Yu8tNj1aNfd6J3He1akQdWrBVHZcMnb7e54UYeGc",
  "key31": "5MLGDM26w5H6hj3oGQtjYBe45vTeWDPnKHvLWGWsU2QFSdQwG4WgCAMbSY24vKqMAHxxHfbwjRtMmMCRgimUqpf5",
  "key32": "MJTPqzvwoENnAazj5yt5cM3j7qBPcmw9Ha1a8fVaDwX67XTxUZkkm3ysMu2pjJrPEuARKFXBrB2Z5DeYJ9sx7i6",
  "key33": "2SGN6LNHFud728X2sweqDANdtzW3cRjuvqxytQ1D9qxpoFyHTEtXc2u4NsLVXvoz3RgjqKHVPnZhVUFjGpBpJt17",
  "key34": "323YfD8hCu4EPe8i4Pgn3MuZYLqA7hZ8na4NQHrfrEnHq7sBQKWE9XhFLxahH2WoXw8s9qBW89FNrAxrGvtmb9HW",
  "key35": "3ArUcRuyyaYL6Cf1hn9SVShRgxYHmsDbB9b1wTHBQJjmzj4CAbgx212wVA9FBtV25ftQTD4ZFH6yckAWEzid6vZG",
  "key36": "5mGdNbnkomnLSZDg1oSX5XVy8CknSgPHN3k9ADHfhjdWAs7Gavbj2YdvXiryDaJqW8EozKGCK9wRyXBnW1uXvwgr",
  "key37": "46t9XdteG4UR9DMB6mqz9knad8RBiMYCmdfVTaV44Rti68rAyCWP7UsNoeNW2jSaYWehnP6UNJpfYadWeMzUjCVY"
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
