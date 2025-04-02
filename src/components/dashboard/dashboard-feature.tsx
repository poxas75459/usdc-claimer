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
    "4osgiv89EDu7KkVdBbEUPt1sLFu57x1X7f1McacJHbsUW3wHX9e19iJ3uH9AqhcZzoR5cSSYA2pUqCmn9vp3zPnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bLucjnXyRrwWGiMqdiP9baPyAAnpGSmQocUvMp4sn3e93gWk7kpooKmHsCruLAZoDYm9B95ckuXhXWnrwPKSgSB",
  "key1": "3GgvDTZCmzcMcUazmDtqF5nccmwj1HzWzeyWmvSBXTK9GjC3LVy1rDGwK1VLFdWV89NUvtagkTjz7t3P46TjfsoQ",
  "key2": "2MJgKFipLaD3XfGQX2DDy1ZESzm5Hgyb9HTPxiVj3tQaN3gyjWNYCGXxAH2JxoA5q993hEatDekTKCNUFVKXkVii",
  "key3": "t99HEYYRY4UL7NF9XRuacqEwDcwGzQSkowgPQBthNjQNu7bD6uTDNgqULtL2oEh65UHjQpsqLmV3QHGaVvuHrhp",
  "key4": "5oTfWJvjoArq1525gUw6rqDZqzju6976oLKCxCutEEAZ4gy5MW4guCTxwrUtCCUFhREhVJpb1C641iWd7qMJWe4C",
  "key5": "37cJLY1x2xgKxhVj5TieR6cNWGAKZF9LQE1AZmDPPYmpJJP6PUdyLL77hBSqMY9apNKBWjaNmz1QWs3R8mkFjegP",
  "key6": "5MgkbFFWHEdvWBZ4tSLMnhWDZX2XDiS9v7y5M6Ta46uF6XRkzZcsVxJsgYCY8GoxKiJc1Bok8MmUCHr6NunmAcu5",
  "key7": "6mXd8Hz2uuiAv8FFdShwZDuRbdU1LnkrZF8pkSgj39ZpeN2fqT2A8qNrZdfe9cZVRsed84HJnAWRdJQSfSbmxe1",
  "key8": "2YxAXBURmSuRaVEZmPvcJbw4rtDgtJy8j3DgCGXiBxoXs6oBuV9ARMQUfxAkEzfSniYii9i3hNVtQ1c1TSV85dCr",
  "key9": "4pVfS9HFpnzmz1GP8JRUAbdAJUeUeU7i3TC4pitZVVs5o4n7mGXSkS6SxpoU1Jt15RdBG9vkyatUfXLrU3UhjBLs",
  "key10": "4Dk7TN5rrBVqnJyJPy5o346sC36Upo94mo8m1uf5ftEMLDCuTYmwTSbKnTz17hHYnvaW5VQC9QeSCxjz1C2YqwDd",
  "key11": "5Ej63QEQpB76GKWCCQEmEpE8t96iDERoiXS9YXMU3jMnyLB8dPYqHxafTYZKRKEsZ7wRx5qWCcfqiPNfEYqmYm19",
  "key12": "5UhQnRqjT5raqv72DR3beE91C5vT3ifgkgBizcG8iZEQrS569xTQcHibumMb9cZui8bNZTYhC3YF5dCcvUkyii7n",
  "key13": "bFcomyQ5Ujznot3HMdys9DczVXw6ja8PBJoqJCWMYSPfLSGF5n3F82dqkBxFSeBmx5NZseL3WKRmw4uDHb9tkoV",
  "key14": "39RBNY3oGpLgHTYZST6VXagJAQP4ps6qjouK1bKEVySMtC24mvs3GPcP3kTcLYNmzeKEzcKY37YgBEaMenbLADKJ",
  "key15": "33mkvWdRNkskjy1Eqkvoem6usHaEBKNrYcuqimCByJ9fd5vgQxt6RYEKDmhzyNJKLSgqFR3yR5efjqFUuFTBY6Di",
  "key16": "3fSPRkWYPAip9Crvj8Nrde2AnsKKqoodZPkn4zHeddpFLN8pUcs7QUQXnKWUZqxBdtYiKUKpzN8dkTiDCpBnPcLe",
  "key17": "3s3GRD2M8c1x3CBBcsNfBXgMpZLqsyavm59F1mrWSYFQrUG3zPBfvPJyveDGPE6M75DFQ61Dd976jQPJegFgA7uq",
  "key18": "5xG5H8yeJN7cBkjQskW8TfcF8LCgDQFNGVdXEFzR1ZUkQx6KomsmuAwbRBQBULBPMqH4UqpNLSdZS9KZUg7Hi1x2",
  "key19": "5FAXfGYhHPzs5Sp7Q5q3dgwNtAodhDoJYDq81z55bzSFSM6oGExzVBgxmy7nLPisoHikpzDx9B9SjQS19cLodwiM",
  "key20": "2KFaR9mLszaGknGtnjXzLr18BPL9A5dzaMazFM6SBp83SPm4seRTrBjG2dfKR3G1PtWYKVyfuNhRc9YnHaMpx3PC",
  "key21": "2jgmeugrga6m2VXPvC5Uf6dccU2iLANxZL6nJQyvpvi4MPjpN38jdrPzHeapD6m1VJUZUqpvfoQdUuxrJvDcaF98",
  "key22": "4zurdbQYJSAbxtUmbUavaJDLtR9JtjEh23dZGTV3WbNA3g4Mk2TWWxnmaCiHcpgbBxDE7CPMx9FDZtWZ8HpUZFyu",
  "key23": "2qryvX6hareUSTNoWdnqCJMeeNA1vtgVaikXzJdspcxxMGXocYNAR1oH8R3rc6Nmi1pL8YNy3oqoArjRrYhYYoH5",
  "key24": "qj5c4gwGJSTU9RhfiFDT37vjfquQc9WSU9D5BYiAxKffF1DUXqVNU5DRpNioAjmUdHn3Mro74vLFc7GwC2h9fuJ",
  "key25": "2biKdbwmaE6JUerYiT4KAM9oLkMx3MePyFL3X92YxqoMPnrnHnzMbcFtCVPJUZZB9y6SujKH6sqkKCB2uPPEUJbM",
  "key26": "64XyeE1q4rSJD1diJYvCpXsPX5A9ztEipJfaiSEEhzpwxghe7orLruyjcqNtwj8DFT9gaP5rcppWpKrxuifsAPas",
  "key27": "4mTveBd3MHyS7CQ8toMrVP8QjVrBrotZUApcsg8sbBAoJ1Ho5rwH5nz9STt76ShgUSX25mM7zm9Y3N4tkCXX63WQ",
  "key28": "5tBtbiPhvRqzdTPKsnBbV3tUud2GhzbobczqUrQ8psyFGpGTkyouDpe9hQ8AFWhgb9irktrqEbcMPgH8aUQRAXpx",
  "key29": "3MWKGuGU8m2YDD4uc2ySgMhhDErPNpicaEZku5YRwFeDtdbE8gJhyXs1kQdt19Z9VVMBsaGXuHTVFNvLFLkkSvg9",
  "key30": "W7zHW83Jqc2ccMhVyhkZu8WV5yfJv4dhNX829rbM6FrXvXSZszwCMu51bCswMzF62dkZj7vuHPoJVEaQCx7kLgJ",
  "key31": "3c3WxpCRCysDE7SsLmXtjLJui7Jh7V2NYPLQfwMk293CYoHw9jShzrxx6t7YucxLLcXTzgsktDU8o9nPbDFh1AhK",
  "key32": "p6NWHTDqbFoEi8y9dBzxRU4Z2zCs7TTz7rzm5y2LaGXqyfvH88peDvyraCxfMjsaoCNUkYKcnyYBqJTi7wJvwXb"
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
