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
    "2q3vXhcMzaHR2M4fbTbGGHE8efz3hRFd2WpUkju8AJzd3hWMmB1zyMaH3m9rxNqk4Wp8tFcKrFGuwiCuVvwhS6EC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1x3K9RxVw2pMrNw5gWhJvjvze7PBsiYuYVTFSQZtd7vRpCS27nEbN5C3yUHGP5UgWDkQV6oQNqRhaTDLCG3qzF7",
  "key1": "5zhuJdpJotAW2uoe3jLYHK4FbRVjL8pUNzt2JwsLhBczHqV3YKhdpugJp72ndXnXqUoHfEkeJkKQdorBynBQGwpd",
  "key2": "KavCu3JCSdBX6DtAyLtbLwG838arhzBiymRMweVn2qHaCBvVdQyvUhTkV7LPBLDocgMg8KSxzGYJpJ4SP8NG3gM",
  "key3": "3kywtmFb2rCj5rnK1LcGfB8GE9xn94aUbKaaraypuT3qurLhAT789YBKPXF9B1gUgBQyFQUXP2U1HEqVPULq1cHz",
  "key4": "3bNjJAjA7SkyDPGdPUhcT8Noc2DJB3nuocoQcctCw6xtVwqiqoBwaudKcKSuUjoPf3EvfVZtmDqSgmQsQFxkUoAh",
  "key5": "2vd2u2Uj4pDfuvFw7Hmj4ou9fGaZ8z1uXmGuAHnADiz7MdoQMFxKju7ATpEjkNJfmPokRcDgmZJLmJ8u1bFtdeLr",
  "key6": "5JvwonNN6AW9AYpEGnsHQ1j5vbUa6UqVMRsgEErz1tG7wyheM5Rn9azHJJvy1no7XoXhHN7WVHFURhfPLtztWKdE",
  "key7": "59RJNe2PKbznsTfKXqVapKn21V2SFg75f6bGs8AdfqvwHzyQmcNfSPdde4iVPGb464sELGnHe4wcbWjcDSyYLVUd",
  "key8": "3kDSkfopEnXvV8414yZhyGmAZ4dS1wvzmXYZne2zcDoTNTMqYWQFPir6oHdm6w2Q6852npQsZmevb1NaLf7GvAxd",
  "key9": "3mV3ft1UMpyojTumnXHG2Ey9DjfwphqE7bP2DBPzYmkyo7n8h97fpA4DFbZHGDaT3rNmiBy9w7BAyJrd3etCmr9W",
  "key10": "4b1yjpoQ37L7RYNqwdrUME1pd7iQKb7h5V25oCEP95zau41VFBpbXhDUDZbetfMHEnyQT8oWXtHuqydyLbmde4DS",
  "key11": "3wF7p9D3PTUEgWVXy8NVKpLa6irZBwPxTmC67EyQAc41EZUHiigwzKFibxTMiyS7w1CWAXY6u1js9GHU6TJykShC",
  "key12": "2akecdwnRsyiwQwRHd2Uj4bngmSrPJyeYG6qR5wLfZACcuCJbeFx2o3KkAzVrAiaFQyyMLZNiy9Ejy3Y213oiHmV",
  "key13": "3btXer85Nh4ChAbkhnzuNkK9fnJMGppUDu267pYspwgDSHVNwLDj876LHRSDDCuAMui88mgzYFovdsQ81TGK2hSh",
  "key14": "3ghdnrT5aMqisW3dLrw7g6nFUhg7PjjTw6ki4KvESNNyE3z9UosjQLEL6823Ug2f56xJkozwkjhgGLCWXz5cpQvJ",
  "key15": "3saosAz6AkNzfqELJaLqB9189b5jeYE1SA6d2pMrYEnJ9DhoXbVA4eJsWmG5wBR8VwH5DpbBBEmoAY5zXdYkgTQF",
  "key16": "3xC7ASabUWU6CHQKjYafWu8RBWXF7LiuYsbRFwB8G1wVodZEdh65XnNEYFbg5iCzLUTAxSzH8t8pXPNKHcSVdzRc",
  "key17": "4VK9PFfsLuqqTSAcF45FgsPfQCU4gP5D3aij4Feggj2isJVSmNLXVW15NTKMC1yCB58PuPoWfGgRqU7BB9oiJMrT",
  "key18": "3sdeAuSNJ4pYsqGjt88znxx2cew7WZWC8QDioGYL1ciGLps7epBoPR5WfbKi7cHXc3Ji4VnKip55E3ZMHJL5HhDF",
  "key19": "sNd7LaedsMLC3Y7mpVwuFKvQWM6jKXXVyCwQDVXuCobjyW3zFxgjVpUycZ5QGcivuuy4Bk6kCMzoPR1ysMrXR7j",
  "key20": "4DWfpFKv62cDP4Ust4sAuzFH7mJ1TRLmoPNaNayV8WA4xvJFojqWx56gGvwRYHUdeSyU2k5vWPHkpe8hXMxpckZ4",
  "key21": "2FY7NijDqwnw1LhkR1MWr6GKF3wgbXxC1vY9yRiKpABvHU92rmQA3P3K99RbbXiUQjLNCBrFHbywDk5vYkhRfokV",
  "key22": "4dmbMc9KyGxB29hd88d5D7hqRVrEDvCcJrEJ9Y4sYjLSmGRXvfBCsXshiZ1aj3wNAkQjn2BLsyzCoJ6QxEA4kqgD",
  "key23": "o4vrAqRLucVHJbLP8U2K3oGyXh7VeBwfEn1QRGG1V9SzVzh2MH12XshQjxpXzN3fxrox9r42Emr3mffzGqrkCqY",
  "key24": "4sGS3UJYYcsZ6yyk8HHds9T59m3dhckvbpjddm9KGTjnLDvoAQDSA9khsd4SFnb4WoNxoL4RXB2ToMVYMRayG3DM",
  "key25": "3hNd118c6axnew4KpDy1cK2VYXQPr3tKDq6uVmqfniQ8CwngMhzsTWhCs12BuJZ1k9N41zDdcFA1QRiS6b5co9ys",
  "key26": "CbZ4BrGLPyxfe8of5FWEFuYWRV1HTxysGGH4BxXUzYiCeMQJz4vz5ZHrQU1a1RCaWbzf5HaySANovigsQiG4jAQ",
  "key27": "3Wzipjo37T9UNGtCd5MfL3EZp3g1ymRpbhe7nbM48kpa6MZS8KbA7x3AfLhvi52LhBqd2DBnNiHyKnyV7Efdk8x1"
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
