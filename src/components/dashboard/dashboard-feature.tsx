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
    "5Ty1MQE1BPRokLyPDohLTVSaDwyyLnyoAvDw4XH4qwceNn8U3tUQKWqM4ot5hu5mYPYQzgggDK9tFvwT7QSmqxdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H74LwdFoifjy2PBou8Y4J84qDCUy7G2nwE1Y33rK431XAUQJSMLCf1YLAWYzWYxzr7ak6KSyQePnpDpbYi1V7Jn",
  "key1": "4MThq7UQgaM4wP7JB4Dg3awkTJaRprNioqZJDQb1denZkwT3G9nUMFDk5cPkzJAC5JSofmSZaad1Q5QMyRuUhhTE",
  "key2": "3npYGd4wXsfDer8dmdjpnd7SUc5DzmUQVJtSseg3DdHqJQmnGoCQzijGQttcVgGKXRsKdnqRGpju1H2vP3pF3ngW",
  "key3": "4aiarBDDsrFsVe3ZkuAXgPmKUtr98w4mnDXDGqwAFsuvShcPtsPRHSC3V5JuK5XkNbGpo6WCeGZ2MxGXJnskNkiE",
  "key4": "2ZtayGSwav2SF66ZmcFWHRrM6Z2n4YVHeD2XKm7zfiGrFTpHBJT84RW9jRCLnA23bNKLBAn5gQgXzKrZZySPYs8A",
  "key5": "2CyW3aGuTNGJXPwvEUNixccYdU3h5UX7LwLxbTxktR6tQhV5o5WnEcXDg6nWvuJFTRqgTu4LqnpFQ2Ns2kPycrfd",
  "key6": "59dWfGbLTn7bk5hfGxbwZog7cd2Nw8eg5YEv6ZtW9pf9AzEQtbRdUR8V6VvCyHXVai7B9frQkQXjiCqg56pC3dfQ",
  "key7": "2QUhJio2c7vGTPZ2p2auzo9cVYD1aozA33reWWebPN6SX9eroXgayAkd9VWQaN1UEyKqFmJwzxzpbbptwDfk1UY6",
  "key8": "2xWn1vqbjrzDZRF9SXJaUXSX9MEgVtV11UVt7ckdb6mSFBotRn1jDGg7zQGoy287LNtT4jMBiqohoGM1rnzEQcoo",
  "key9": "5gZAVrAnCNRSdaSEEudAmjrqELjzQxXASQN1K3iu1fTVT62txzf81J4VFGS43cMdgyqQ3niBG72Nqwk2zd4yBY49",
  "key10": "3EbSbdHWX1qxR1EUGaSZHrEuqhua3qyHZrCwBgwNevSimVNn121kmnioRHY14hp1EAN3pHL4MeoaX4gKAHDigXYh",
  "key11": "45KEtH9jsVF4YBSqLXNetnudnEBgDBa8F9EybZtR1hZch5zUtitE6CzpFK46XZxZZqZuyMmMwHHaE8HwkzCjJ2s1",
  "key12": "3BkGZ5XSqz3e5XK21TK5pv7NvQoaeU5865LBGSXRLdEU7t2vQWBxmZcTza88VQXfJvtjTNb6q7tTfxYm7ZBCXyvc",
  "key13": "4ddXxqv8NpNoRvmzjgez15rEvo4ZjYMx8qabJWbGGSxyCs1duXkJfCNi8ewe6TY93mkcnQV3C2BQ4MAvFYtBwjpp",
  "key14": "2WaTpLrDb7gZxpGz1hQxJeswcGvbZkess7V6cVZWVLPjfErXipZ27DwzfrTBPA8NtXEk4NDwqZp2XzNY5vcY3c58",
  "key15": "655SQ7AMF9aGahzvALwfQno1bbzcJurXAGH3gW8GnXiPsfvPWUGS7jMM72SfxVptdbR13iezCkc1QyBGMerkVbmk",
  "key16": "PEADZk3csAAMJqvECM8cTNyVVAmbmCgxZWVfZFee3s1qYKs2Y2QKAk6xqxq6xM4C89h8BzhKT4cBqp2XsoCmkZx",
  "key17": "5Z8nybbZNBW1gn6gB8VnUey96KrZrWwbfCQy4GTVoALfqKxhuUcoiLNLd6GcE6Uq1Dsxv2WFpdKeLrtDtGbPgX5m",
  "key18": "5j4P13BHRm4qYkxDFpmq7FdGbVzDiEvBS7n7obENnxNdR48LhLdvnC2GC2GiA1fAN64CPSiifTaHWf6NkQpBEEEg",
  "key19": "29EsVkvVGanKyMngLugbSLAveo94DVe7mTJJvzmQTSD8jYLZ7GhuamLsRTWJ7RWkNzjM4uoHDKdTajrrtrzrnnwM",
  "key20": "28nfcUxSvZjVKnNZKoambdq4nca5jmGaFSguECUnbzkrvsPsHCwZUStcNmioxq1AFvyVNqwFQm4i7FGykP4o6pSQ",
  "key21": "45TTXuGvvdreoPU7tH6WoMe2ytLCcrC9nQi46ZDWK6JnUtnDSP2uFyXemvNpJFi1hg6Q82tHQ62rVC2GstX5BAha",
  "key22": "43Hrbv5fgvSCGgEsK4LqpDmczsaNKDUieCDjeztmkHKHofRJyg7KzjnemERVTg8uGyMw6KBiZT3xTcVaUUTBn7uy",
  "key23": "3UPPpokPhVNVC6Bmee71v5DiuwuXWk6UAnMz62ZZeYyJvCKc4DSWgVS349mWW1S4uWkz8oUQymKQzsfaD3A6kTx3",
  "key24": "285EizPzdnx9KpLzJkJ9bkuSKcLumV7awLSEJwM2useEVuZgyW7H9oR3qM5cZ2dK4J5HcVFE9VuiQWvfbxudNVLy",
  "key25": "6FYWpLQUzzRUkUeRCBfU2YPkimKXj2DgvWhTABEvRXJF9ZjZQXsWXfWFpFxkckKBNTq6CtMDKEixcmjyCyH16t7",
  "key26": "5aeBKDqXiUxJZFioUqMFJuE6epxEhnCT3GFXg7eyd2op99nN9ckDCSsCAckgyXyBMurd6er7tceXR89DcnfdApSJ",
  "key27": "qEmkwHZKq9rSbEaT5fXUnfnH7crEGJoDo9ozbNFNVu6Tftxhg2asmobqdk3mfLNsWka1Qiw2r1NNJetWjn4cguE"
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
