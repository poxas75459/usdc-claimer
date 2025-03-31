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
    "4S2sUtpLXVaNaXqW5LSNXwn9Hit4bYcfPY7LNW1UTVpLLz9GGzpb5Yp3dJA15wtviGy333g9WXL3U8KLJJJDVRVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eh5Qh1HxVpiYb1wLzWQmGm4SxcbDAcjCMWfJ8NPHydkCodvedEfFDFP4UL6sFAPpmyYYC3s92qMCuS4PhoZmHB8",
  "key1": "5i2x9U51Arpu6NDghVBD5tS8DgPreiRPXRSs5z4sjhG8yowBRFXvVRkSzRxAMV4Ap3G4sCrRH6m6bDCCv6u6qFKd",
  "key2": "2pZ1KfmAaxyTfvXuZ2cs39rmvUwY8QtiD6QnWMcdn5knCYh22cQCXYgSsTVnK1Ks4NbTyrtemPr52fGn4feegrGF",
  "key3": "2N5dmusydvSQ6TB4QFste11mk8SbFzGNSjrpBm1HbFYqhjJ1jDTDm17FCbBpRsNPsHPX5Cgc5M2dcbnzdnbvd7cu",
  "key4": "5rLixD7hfsFJG4MsoTP1UxRphwGMGT9CyH6A7jQW8UWSYfSYJGYD3XC9TwV92HB1wq7BmyR2joHe9yy4nzKZFGvF",
  "key5": "2gG5oRuoDngUhsJqQZoJrZkhYcHH9pNKczxr3wvAjmgsyqCiRDuEYuYZLfCkQwLtGSE6X5SVVo62PqfY5RhUhyB2",
  "key6": "uRRQEjV7joLv8dGjnoFUKpcEJFUTT13tcdSJYfGFf9EpGPkG3ePiCnCwJngjKydhD6MHjczd2RgiLAQY4Symnnn",
  "key7": "5EwcSHbZMh8Rjywpj2ypQLfpkiqTCRs5Ln6E7CC8YoGXgzirKHk8SBCNNgxVee4DsSqKax68614RowVE7KASPRGg",
  "key8": "5sYvwC2A9aMqi968TpnPYCrWaSCqc2ZCBZATqGbkRy6abgApfj4JvwjXPNC89tFaZUibN8rJnDuQuUVo7AmrUPdu",
  "key9": "4zxBfW22aCozyhvXwQ2ncb7oaHvErfFCY6WqoBW7fqZecCejTGewZ73ATzp9eSXxK3ncSVWG59tDsKzZFZE719hN",
  "key10": "5HW3Q1rqTUGxkTWqeEmxYu8rkC4kZeLNruuVm6rbxDgiAijtVYuy7PoEJTxDQkJa9hgbdkPPHNJWatoaLcKdhpo1",
  "key11": "3hn42GxrwzTtJjAo2a9iQTnMfvhLrgiJCmHvem4tfywvumQU7xpZmeFT9yEMC4pnEt9AzUk1ubAX2yJ3VnMwvGsc",
  "key12": "ThYhpJuLpNKrwHakMoz1Liam5gsx4xfiNtaZUQsVZN8cfDVKZWzXpVVdgSntq2cfe2TDGfiN7aheosmw3nugQZM",
  "key13": "2JARpfWjuVETn72xzj8f5dC9bNQHNokuJGohMZi5bbP7R8zCvszPoJXBMpaoN8csY2D71D8YerXFNZeHGuD3o2L3",
  "key14": "5eHLbjGwxibngJemUpdvAXxPZu4Axbqm1YaiwczYZKLJdSU9eAFqBDdzZqYtEb53SYA5gAZmALXdSmyZESgFTrVd",
  "key15": "KhwAoAh7npZs1Y7ooCH8iFGgQkkeAHJU3tgHX3D7W2c8x3812RVRanRSqsNwEjcAnnkg7mfEN9waPP9Y22LaFSE",
  "key16": "2zK2SXtBnTGQMAmC4yuMmNQuUjLxVyvQ8NP8t2Tmsu8HPPpWcBmT6ahCzGRTnRVz8qsURgBbhM8SC7WwTV2DPoSd",
  "key17": "2jSm6sJZTkFTb1SjeNbKkFnwcWmqFD4J4kh3ZQG9BemA8ZWSzBxQXce62AAHtMkSBQNbZJapDct8xs1KR94Dxetz",
  "key18": "52XNMZQhp2R5usbs8tr1L8knFzSXwzFbP5PEP5cN7AtMeDKMP1CQHTRKgWAynqyPVcJAzAVuP3poCBSA5mSQdstj",
  "key19": "5JhBKzrAeUe3V1xZjNhLPMXphE3zMxhdrrt4k1VauZxeJk3ZDR4NBfziPkAVWcGcAvYdZ3YU94M7G6B5Vz7t82Dw",
  "key20": "5VT39KVohEP3ikPgzgwoGvEDrPfSNGDKxinHHPcH7arKHQk267adYUCNP6NN5jBabrHHwDxxmA3KZAJYE7L8x7ic",
  "key21": "3GghFxRvi23TWaCAuADbCJ28s9gac7ePRSUrL34NwSv1mZpStsK4WYzWb6Es1A9421FL7rNwdLbeg8YoVfAUzx9X",
  "key22": "5KjAssc96dk9rzvHT5FzoqgbKQtY34kAxRitkCSBJxnb88wihzQpNFSc4x6CDwTtSGkrC3fEqwnXUTzQuhpZANvA",
  "key23": "66oM7aWXcU33fjfwDgMpXM71oTxXcsyyN7GmJaWeBkEeQArHVw6RRcmWexnDwuyJvjxiN2VXYwoDptVUzhGtNt1G",
  "key24": "3gbeUBTjdzRUYFXdeP6sdrE4EtCLuCjDXmumPvCdhCBtN1U2pmun4WvxcZ9oRZEt6nCTX4q5udcApipCpkU6wTtn"
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
