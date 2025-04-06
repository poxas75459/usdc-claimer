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
    "3mNvw7PqhemBTNZvtWiJXDr9Kps45DQ9Vd519DjM4LWxVXSYUj7RSTddS3Zw2MqiKBJgSZJjA32ndAr2661HFfwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k5GzrbbWWUCoiUmZirpMPvsw7n5eQUpwAQFyWk5qSLokgkPSprvKWQBrS3oqHA7mBA3Ju8xj8Zc7KzHtQVUgy6d",
  "key1": "2bbk5ZgEkZQr2iFxFHarMnEv31yit2bGUd3xwh9sLaNjBoTZy7Tbiy6sksore23Lze9VuPUe3DP9bmzTw1ioZXW",
  "key2": "44UUwrxQzckoBvJGAE5mAnb5ogTwq3p5MupwndyqdU2h44EimErsTRu8gyvmBc8YEHkBpLRfHEd2uoq8dAXKBzbb",
  "key3": "87FhtxP9sYUf5SPQXnUfFkiEM1NKmkKGGVzm4kPRaGir2oLhnNhpuRKJfDf48edJs86cXiMsKvNP5mNnfnxt7mu",
  "key4": "5CVcejp6v18kTQpUYYvDQf4Rc885Xhqk9FXd28i8Kbym8hqtfQsfbD6Mye1z6PZVDzDw854fs3nMTRTwpJKxDasD",
  "key5": "4devGpm7rrsZJyMDve6okyYgQNudvktnvASn8RZ72Dik7oJaGB8f1X6hcoJUWEhvEwwUvxqsLiFwG7EoCERkfkEa",
  "key6": "5T8eMUmBBedxjYLng6JaCdVhMs68KvH1u4m5vEqwdzVLG2vgEgNYmPs8EAxgvTkPetPvXZHMvJhht6SDiRHAbUhd",
  "key7": "5eQryFdKghx3N2rGoKtgsvWyRCo1tijMS4wddGwQ9nEaUwfahWrR7xMxckEg4APLJvkhJwubDDJEzyJGXj69WWXf",
  "key8": "3n7AeZ62A6QS3PNo2cRhB27HG1Usu9WnDBSWSH8uPHGUonqFZxiMoMhCdW5pCegBHn9vwBLo8UBTrFyjQFfcYg8w",
  "key9": "KSrY96S7gqaPaeWwf2YM9uZuE9Sx31335aR9C7Tb31uU6xCBhFYY23RC7rcff5Eap9bPKdq31tNp3qzanvXWQ5c",
  "key10": "2wyWL4mQPwAPm4VuBDQ31cidWfa8mMmwKyBm5y2HNUpTxzPEyY8im44JVdfFexj5AWHBt7Jo4xedY6WnoZBeyXa9",
  "key11": "s8vPAJDDq2yyKuMaSivrASqgwti87rGhCNFTHzqoDnptE9sxTGBgn7ggCUVJJMTqjpgA4edyqFd7MkBXPDYjYpu",
  "key12": "2ahJ1ptU5G4aTD7tGxV9E6TKQnN4WtwmTsQSch2gZiV79CbgK4AfQmhEVT4HE8fwm1bm1P9z7SpQcKMtv7TFciiQ",
  "key13": "2wbnZUR8T1yBcgsm3qWNqPHZ1GG2RVqPtx4Cp2UW8sKSW9tvskbkmXSmhMsVjvCZUE8WAZrjHXadxRANJD9VYZHC",
  "key14": "5Dys3GNYjmhybr5gZPr32vwxcR7NxpU4SwSNS4XHwF3FkbsDDSDVuNqe2yyHJBpS4ZkdDNbUDhHrkZHkzeBYmnAT",
  "key15": "5Tgfo27RKdDNtzq5hi8EkHyUpZnKa5o6ZMNHcq8oZnrXoacJicyfwxo3HHTDcLCbdDzwKPmiDKfhhzxzinvCurz8",
  "key16": "2dZ6ba4dLxp6AbSHv3EYcY2d4GvYaoE9N9UcVKtKeKJsWbC9JV43QykFKvSZueTmmRhGMhRgniMY6FVncuhMZFLZ",
  "key17": "24Ckrmo4B5PtTKSqCSotpPpoiJ8xNwPk1hHjLH3u2pzyrJEi8tvc11JYACmJMNbatcRyZAhYYnWUSWexdtvEzon8",
  "key18": "HyQygMCB6EVw7RT2YFgiy6KuxXyKKhkB7iZrYBKJNcdnx77NLLYMU5r8DEC9LRo1Usevqg4bPz3T148etHanC79",
  "key19": "kDkWPWMDY3zUYrJWnSGLDML5Pe3QqqTYQuEHAjPwGktYzvwB4S43bXDWr4V8mjAvui4VEnhAhJtQcGwH1iT9YXq",
  "key20": "3j4hd7TE5DS9QCPNjPxUCCFcd3gJ2bcWusRtXfdVqfpTXrmEdtodPAy1YFriokxfLj55zrZga2oThZce9JfxF6rx",
  "key21": "4NR18qhUdcgknhFT1o5S2nQK3Dp1z3LSjX3YHasWygNbt7nSQQhXrp7KPLuzZ6AgxW5pwCpeQnSGJA1hetuddgwC",
  "key22": "7Gkv5t9N55aKA4FufejgtnXh3SJ1ZHpnLEkUwzUYUEfqMSqFDwb7vDBW9SYa91dBpMicTf5T8pM64Rut6Bj8xt3",
  "key23": "BU8hiSDjuQhxGnYVyCA4JdTf1jZnezngv4Sw1hkE2aPHsWurvW5qzZBemgYFo4qBBc6e9FtnZXaugkkhfzVQZux",
  "key24": "5Wu6QJbq1jBHSMwf1gjyxWjMmSDVjuuLgi6FUn61QnfUeaNYCpGqtTovR2YSv3oCQTZM5mM8PkgLc8J4aARoYucy",
  "key25": "3jy2HnEyN9gKZtwkFiJ3JxVh1hYiGTzzVUDs3xVDscQs5omEi8XXTD9X3KB36Smi5YhEpA7ckC1horECJzRRUYG4",
  "key26": "3aZyyeSK4Zdwcqg5dxt8uzmEZij62LLxxeGFxPVqrmbvKjiWqaScPDHfxTpP3pM2ZWKK5zZuQ8jJ3J78GAbqhfCS",
  "key27": "5hekS6H3rjJDyEFf2NwiYt4DaJTnEaAFvLDWzt19MuwmmdjHtB1kUkFMx4X6S6cda5xWv47q3yX9i9AePy5qVKya",
  "key28": "92Sv7gdmdT9odTUR1WVu1fxC4mjmVLUn9KKaF5wQo6ufJt1E65WSANNYeEAXRp6vtoWgd256hf97idzx3VYniS5"
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
