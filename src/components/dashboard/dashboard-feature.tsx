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
    "45gEiu1U2UktgKZzojkgm1pymvU958hUM4fJ3hUVWP23HUEC8WScZmw8xbVKaipcB2PmDfQVpVgZjgWtBisaDN9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hhMjHQbZemsF92PfQugy8x2pJe5TXhRWg7CWYhFnvkxc63XRTggf7iNYxJY9Z1GxjBrBEU9KFZCJ7Xbc3ZUP4Uh",
  "key1": "2E6CqtrquH9XxUq2zytEfFWqDWb7MZdbEFYCTqgLDNyJqW99rktQkitHWfh5CEoTouCHAgapxK2AiaxHCdAS24QU",
  "key2": "5Rb5ihQszxRK6DWHsXgwL5uEwHnXpivBjrRXmRZfTenXdbYMYQwwvuWRuiDXufUqst1BzXt18LynzfwCZnce8akd",
  "key3": "5HopdrHE8cEdtenDgVskAK3TJc2sGvUTPUXUHsKDorLoKL2qptHidUsjVxw7yp6dFtwa9jNtvsWdRmC4496SwZfz",
  "key4": "4vjaPoQ93kXUA23QVsguVkRA9b8KsZxRJgoMA3ZeN4HFW4hTffQ9PfmGgZYCU593oVSYKZBobUsAuY2LYq5mXD6v",
  "key5": "5SBZf3trFyh596W2bv3XZzuUrxYxBzmn6hv4oxsLGzSLMi2LCd1B4RUanuuVc8tQLvfs4X61ofFoh44j4fKcDcox",
  "key6": "39CUS7pFtRtneP6YShGe5GUPBdUfxnprJs1fnsuppx8igwjvGPZ7aU6AjwKF6Ntu3S6mXDzwPvuwMHuE88Cv3GZ3",
  "key7": "9B7vu1Gt8uf4Q6jXyk866mMe5MMMqufrY2VjzeTSV5enLChzs1je6Je21FVmXFjHV8GkqYuSBo35qfAPMJZZQME",
  "key8": "4TCoiXSKhzwR7Fc4SwXb5kLHbVwMR2ycN1U6hzUmvupLE8xn9NXr7mBCUwGaj58HgiREtWcwhZXXHc6JY9MLB3Y3",
  "key9": "3Yr4VZhgjye9bUPvTAiCss8ftznKFDJVMDzTJAsqBhSg6pgrxQYDrTZ9Ht8kjrWy7hFAFvYo357h96jh62yExtgT",
  "key10": "67an2v2XNihGPhBt1BAL4X86t3y2zWAsdZEWK5W3CGL8DeVRUxKfHam8pFETjSTo4BoSxkR9qWuXg5D2HKjGQyhR",
  "key11": "UmiaUgEn8wAqfNcaQtxVdTGTssNhuHwNq7htCxSQmGRMmwAQmre2WHMAbGhU9UrXXyoFV7EaNSvLvEgQUzzb7M4",
  "key12": "2PmHbKGLNNtNeCkiArZeT51DBxZBrLn1Rq8sKYFyNYmR2h2q255o9J2voNYsqSvzLcFbmfZq8wtuXjvANf6HNS5m",
  "key13": "63fy2E462nqm7VcyTVBkPDujVJqJUsosXf3DcJEgMR7zWy7CSFhn1vRZh5oyvmd2zkqHGumBQ6VqZprXShBNRFCr",
  "key14": "5Z9U6938JuDshbEYRt3PAMEtnTr5DxFrBiEiGF1Ls1Nrmiqkpow5qCjT6Ra4hyo4LLGGKuFv5ZGzzbNd95w13tn5",
  "key15": "64dSB691Qq2pJr7zVM4jq3b53tR5QbSpVDsAKgR7MKj1Q9k5wQvutq8VqYnUuuQUdoYND4NSF5Rg5ZT42R1dAzK9",
  "key16": "2315SiJfPMdSY2spG63C59Z7rNUE77XW59vNCSewac2pvwHNtidBBYnQwxQj4Qno5arPfRrv4dMa84R8BAM1BxX1",
  "key17": "4cKmuLZbpvW8hJ2o9Sknkx1AApn9mfkNeWEjfQ9Uw2RbujAy4x8J7wQGRDSyC3avK2M1Dm4HJ22vVTmmf44BGwPn",
  "key18": "564BXTm93tjZYYUnd6XnQ8q4LidrSE7DquDixandL7nAuN6fNWwJoNUXnVetV4qsYgKQJsesAMx6oACJo2MRdRTW",
  "key19": "5koDDbhHRqwfhkmryry4FQcqiMbZH7EhwqfDkX5ZoHJ7VPGiwjMKfsahfCMmm8KF29MQNwHu2eTWB3c2GDyAjC6b",
  "key20": "33WsUsefYQUqi27shumn4qXBDAUA5osXc9pjAma7JFz6bBhnuxyEYSLCcvQF7SVCXfvoz8wauKJVK9tP1EkWLza4",
  "key21": "5oZtH37t8nCDsCbnvX6oZe9ydh1YNh3wDjDcrf3xBF8tmp84LPeeaFaAjrDQyhRBipSX69DYkQDBrykdfmukHqTA",
  "key22": "2Sp3FCowvWNFUgnryWFrRShxScrfXDmLi9tKfvMMJ9q24Fq9cq9e9mikNxRPztdNgZc2KDVw7KqbmNkPzVZG5AmC",
  "key23": "2jSXY46mkhXnWuhBR1TxpoCdashUrmYNR8bBFJmrUAMYfUuxJV8fVF1zYfz5GsEmCxjQ1P729zda6FThk1xLPX21",
  "key24": "5A87da6yJmrAVkKSAvwkdpe8cqiE6bpnuJNWrAgqqJDr63MsTxoJqVE9a8EUh8a8jFQiVnKd6md8jsB9Ng5waLay",
  "key25": "cwHHWa8mcxr33uUSzq63pKKaXr7tJ81s4SgTzQVMyUaF9PzJaisZAsg4QAj2wRvRBKii3z5y6b9ju1EBM8ui3q5",
  "key26": "2a4idcR4J6uUsTtqiNcDPzJWQwKosoWpgnYaoc2McuVMnBiLbjLrxNhNZxxpAgC2BcdXc9vQCaYP3zynqrRXUkAf",
  "key27": "2tfJxZ2LkX4wYGbBdwrbdZGaUM36WADsDYrmGEbQEFtmMTEh2zfKntSzoJJvdUGe3FS8NUvBdUUaKrdtSh3pDgjv",
  "key28": "3vAYzhJ6eN6deZt5axhJkxA8rEikcz8BzRHLQoiCNBMDoGtjuQ5R1W3G7DzwG2xpFkbijhGCt4MCH5k8ktEa1NJS",
  "key29": "3yyCLkPHVTacyNKyVSt9LjCoxsb3ugmtpPGguAUS8ytPzDmwSCvT5attDB7r1fThfN8HwiysEY8nMoXwKJ2aNsNP",
  "key30": "3MKTxKaiFNeXDacvtWEvT4MAiJBJHZzdrcGrTYw1L6wUd2hTdg7bnf6WMVEen4kvPM6qjPw3yKh3hjq5Yj2nPBeF",
  "key31": "47ST3cM1gMAPVF2BU9aXZbdrQAN2nZmpZutaBstmCMcdtykWqVm3gi4t62T634zBYNGGSbHmbssQ4Pr3rADxac46",
  "key32": "43nTdkBPJE47KF1c3pf44E2WVXP1uHfVbNyJFuXV8r8CyARCnaZq9W4ebSUmNfH3YENnkHiHufyL2hqtn7w4ysbT",
  "key33": "5U1vPkAWtbaazZfVNnKCHojBHB3BjCr7Xvu3JPxwHsoZRRQ1q3y4mJBmSyx2M1dsqojJiGax2Exesg7b6AdyT8zF",
  "key34": "5eKx6s6trEH2JS923UXvEKHBkEookiMCZryPoWL2d9dcV2cLdNYY3DgPTPyBBWkUVtovD9xv1KZ7qbEDZHEgYJEd",
  "key35": "4V9pEWPXVDR99U94J8HX5UvRCrpMFU5qxnCz1RHRm8Vgwt1kumrAMMg1HCuK7HH59yLjqT97pXo293dSaxyKK2aY"
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
