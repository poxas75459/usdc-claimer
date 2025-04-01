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
    "3Nx21kpjWdgFzu9kG7xMYEsFAvzPAJ2xZrErHbVRZ88JEjmsukQYkDrWMJ9qjdMwqvxUmrgyYnK8D5oCNS37dFZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FGzpmvwNRkXduV2PcrJVHcR8wZTJ7a6PRADTgAfSYx7pmptagHbcdE8nfqy8Q5xCxtCsx3dSpx6W1FhHgtxsfy4",
  "key1": "3hTPo9g6nr1X8c7uswS9Wh2g42DVVXboQLm9A6H5UEMuSz4dhVCevHe3T3AN6T5kn8unEw8DE1F9wNwkTbeS4yUi",
  "key2": "X34JjNEDsZ82ZhSf7vwxno3XgAnZn86mTCqJdWaoVtw4zXSf8g5iEetCDqMDtLVD2a9GwpFxaSpKuREVqFjjxoP",
  "key3": "55kj8PMLU2U9WNtm1u5nWrPFbGPhD5QaTayk9M9V4WDqAWJQxdSJGuFoFB6WwcDGZGFRbUWSe1j2YhbTnfuyfXSe",
  "key4": "645ic7uY9n6Xy5vd1YfCwG7HZ4BwLdok4cBwYDh7oVN3ASSo1WZj7pFgp4JNyDszDAAKc6ZyiBqN7fJ8QC8V4w8T",
  "key5": "fPm396JHScwf3DzsFboccbhXsiMStJhUEwCBbmDKdJcaYXEBzPTxZtF9YTVQqNCKcJ5gJGwfJcqv9CnJoPjXgtD",
  "key6": "4xQsUHcN9EFEZUJRXtCwWUmjqgSY3SieVQMb3KLFzsAc7Ajxhf54WUzBiBCKwejfXUSm2nMkF4UXAm1Z3m72xU5X",
  "key7": "4ngUhcBKMdQjqaFqq2ea57cujPDebWgAR8YxbQHRzq2trxKm8Y4knzAJp29DCew55xP2R1HEEKzUV2JBjR4wUUPt",
  "key8": "5spXKg5XUu1LXSF6p8TT7ovBUYcvzBzBM6d4dB16iMAMdvm7Up2wy9u5ewtsDSbHjQsUXazJKdxKRnPahJ8AjA35",
  "key9": "3htvqRC99TqYpfciYZev3zp1UzML8qCAdvTYUtYGjGkzpsmjGEVqnGWGQUJjJLXmma5sMrmUMXqN9pGiJMuNsv9d",
  "key10": "5JuGiBjCMCztrCwiacAEQo6KwVHUy76BoddJpiEmd1uZGMoVaf3e37aTjeZtMcN2xJE9m75ujtQXHXW3jQBFtxVi",
  "key11": "2n1DnGvyCXBHpZjhfADSntcFF5dDy7HJfS2mTaMtKyjHetpzAhwT1V7yDsfATs9u7XpvKaXLmsdjbKZUBLAERZn",
  "key12": "4chZ1nWV9GVbiUk1StZ6izHQpvdxj7LSCsdSwrn2MeQgqBrTyAkKEmfY6qaaSpGDeX3qCEtfihjaE5guJVnAv4wY",
  "key13": "4SN4knKnGdya5eQxA9MmTkRtfw3vq9yVdVeBtHzCXJuPTeasLTYGrvpNEmAFuXz31ej7cyg1zyPiWxs4uzSVGpcF",
  "key14": "v9L8mDghYgDRCeves1zDgXHARd5wDiGq26UH7VmaRrD81Ry1jTNPbTHGuVVs9iX6X9U1AxsftMBAcGzd6UzFvvm",
  "key15": "45jhTpattcmNmT1UiMG9tAWJZPJzmVgAsP433kHybyRwYYjgGRdWntqbAe9y8BrX5kxPMe8zUGbUPa2TFQMQSLA5",
  "key16": "2CPJFLcCKxnHjPoCMUX1xSzW5jugDP4oV3WzZ7FNLEGXJYNoNrvyPJVa5VSk5yGmBsRf8MQNPreDng8zHheDN72k",
  "key17": "5bBDdeDuXjRDKkWnBoge8bUCgWT4RXXmCuQMB4kFYjtaJADGPSczN3m96Fwoytonbx4dVpQhTSMKzSKmwoSpenaZ",
  "key18": "2ZR4kx7tMrqr9jsDstkChM8NebFd4AB7m3gDkjpmYwkQWHAnmqaujR8Dfs68GVyvZ99qLqnou4sjn97rqNkfweCu",
  "key19": "4ZyomMVZ8v7CVsmGyVV1zfRiq4Dkm6DUzfCx5PyjmHjNYtejNq7o2t9NNLfwDpoQewVRr3B9Qq1hCukrh8g1t8FL",
  "key20": "5Xfi3vhsQ4tSwrijoBMeyokffoTgxXpcgEtAgsQugnEbo3GFjRQvpiHpvE4f8gPqeFdpFZX2xC87imWKk3UBbDsd",
  "key21": "2SAaArrcbKbjEMtty5bf23Kv78b4Sf4pus31Hmq7qm5ea1AhM6HzyERgvnCvEfeV7GarN3LpZMneiur6ucFYVSQy",
  "key22": "h4pAsKi8hSNP3eK3FxBpgAhGShYyk558yEMvuqt9JjABnVJwC6zJ8iGjhz2gEUBARPaiqD76QcCRzVDjxqZdt7C",
  "key23": "2xEWrprnrnVnxVWjT9TqoDHVQ6eAcvKkZaf1iKKXfRrbq7v3unurxMHHhaLKywLSW7k4MFzHyaW1z6Y3j96hN6Vo",
  "key24": "3vyy6JkmLS4C49RrstcMQ2dMAqNkPgmcVtBZ4c779nywDkZdnpy3SzuQvcUcspHBYTvvcgKyFqKpRqxLzXWLWwRX",
  "key25": "FGLgF9PAHy5ibtSfCtH9CyjwaKovL6dSjZrsnKwXaM1RUP7DaYF1PJsCQUhmcTKdmCe45jgzZ46xTosoyAcLvYA",
  "key26": "4exsJd9prXjC1sJmvdmmN4qD1m7Z16zvazvPe5ht4Ka6dNee5ahgyEmv1ZGayzYfFS5DQMGDYUuGrk2zguFSVxC7",
  "key27": "54CwNRaHfgL1D3WxV4Diea424fyYko8LGVyzzrahHrRQcEpvj9WiY4o1ptSGjL73VRyn4pHHpbc96y4byXxvJj9o",
  "key28": "3u3Bd4KqcU4wp7Lvb5rL5gvKoGDik8NJhVV7GKqqeWubGVqXJ76PHE8pLnY7C3PPkL3ZdYtYpSdmJSEy84GXqVhm",
  "key29": "nab5ok18MHt9i5aDin6bcNzLBLhAELNmqTrePErMZfuL9JmtmtYda2zm7fFLkPsxXeUpEibFWVNxkqY1NZ76T5A",
  "key30": "uxSPwjnQeeTPGpKXMvZwC3mDnCjPgAcYMfNh2K8T2uw9t3xH9TQCJ6PWRbiZ76Mdvm4Y2TGrTxXU5aVT5NDBYuX",
  "key31": "4zNLVDoNcDzD8VJ21F9yjh9KaNy6bnLeMckvm9P8ewBwNBYQo2LKpZR5DGWXgwqUxtHrJBXqPQo2Gt7aPiSz48W1",
  "key32": "2Xe9fpx2GNNDYfmkcB95UakkGDz3JaaxVNHohUB8yfG9XAU1n3W3AKFhtUsRbBbdHvwLHYWboJdtwWSDVMwvduKo",
  "key33": "2YMfB3So3FiDXtrnx8hG9CcmtP66sDH5xc3Ed22Fr3MgKQSSuqLptrYKTXCmM6dpbFWfZ6zATwDfCo8ksdqFmYy4",
  "key34": "3Vmj2r87QPSZdCSaKXbW61g13tXW395GT8UiskykYShu6jfWo7ZZPYuTVPyqRrKzYyrpXTrHb7AbKMnfdbNaqB9H",
  "key35": "4GH8SkbZ3ousTJKumnKKfftqmUFnpyvZWqiZwNCJpxUQRbabs39tYMcenyaSDoPHPTFfrsbvPrTCPjcLJkSwMx9J",
  "key36": "5iUDm7YXMnoi6GQLWbZFh6VQGXDSR4iWUCb4SDPqULJaC7wwGcV19hjmqhnSG6StfX8MpYULQVZyZmcWXjcuWpJu",
  "key37": "4eDbnVETVYd9vzEeXSK27wMQgPJprZzez5U4WvLKpGS1sqwFFwCEd4Jre6MdYYVvSbdFacL4zmcVX8n8o4B5jwAH",
  "key38": "3HjPnW5NMKvXshEC4E2aTmoUwifmBnLkPvrs8WvxnWkstQDc6yQ4SBz5vYmagCRrv1ooSVMgjKzrunWPfv2rM616",
  "key39": "3gvFRNSbuatd3p16e2fWU4hvJAub8RHh5M1LGNrDrRBfhoUkCnFTWX5WiiGhJPyWv6shu9ix8iwgee35LJZsTyF4",
  "key40": "2f2hFDAEgK21rLDB45xQHjsweuP3ttXMp44DyjKu2daXWwkuNaHDWsUtTy1Avr6qsnFvtLYtf1prqPk2tqpVVwe9",
  "key41": "4A2zkUbEV6Xf3DGkFdRnVZZWdfLjArM4VoU3nRcHHrPCKUWgFn7ENhP4cDLHJcJtWw51WAWFrxKXMWn6NvnQ7vaK",
  "key42": "4BpGqBc2LKG8oZ9mqDkDgTQXD6TXzpJky6JkzPZnAQb1eYwRy77YDGJyG8zvR4s1SrUNC71Cwibju3G4ErLYHpcw",
  "key43": "pNzth343d3oB59fV33PSNzT8uWeJscptn5G3b2N1DFkknnMW18DiDYvkwrAjSJnTsXMCUSChGVYyXHyq2zjKVbZ",
  "key44": "3bgYph7GHZ7zrHbh17ZWomjDyjkhWkVExhEHqH7XK59TAbZyiJHbyiP48aYL3EFkrPZQZTeoAAxuAJypdfiz2PCY",
  "key45": "5ypUfjXHrBkHN5zB8RL4ZDvNrGh8aFj5mLsUd7i8RS7T5LMuELoK7mhEAVC1jaaqJv1JimJiKwNrXB4J6RnrDBek",
  "key46": "4pZn3EwzBsGtnQiDFDRbD6ULBqMURcjFNkuhfBHA8thkZhUPHhVnWi5gcUxpA3iRfR86t7cqEJvQ5RFmr7bhimfW",
  "key47": "5Bi7mamqFfjNMG8iiUyUXNohAwGDAos2Kv1i5YHuFd5D7bHdpruwYUG7arRaDVAqkujE3eHFjmRBAHu1W4aUQ6Bh",
  "key48": "g4qWvYBQ4DnTLx4cEhkZEMQPjxSFURZGYFEX7i7R9Uq6b5Um9LnZWwVkW5ET6sizxambSqSYe6CkY9t9BJ8jAXF",
  "key49": "3MJguK9GpfNydHFkLfkt8qQirECa7JtPBXaXhLDY3LPPe6ps9veqTj385skTWuWaAfMjEwSyHYR3ASUgYbmUUcFi"
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
