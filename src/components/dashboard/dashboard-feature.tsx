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
    "3rQ3i2feYtyLGLBMvvAEa5jyYA3pTMd98g5Rf3UrCGqtAJXrzYGmqhxkq6deMc3nARY7KgkLmFh8Qefz2VnMoHw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V1B5tQpPUHnY8VEXAAf5xFsMstHX9iU2VNUsshQ1JGo1APzi7WtYUGAkgzoauNtZDAJdSiwd33QFs3kF8VTtjQy",
  "key1": "5A5TY4GG9qScnRvK8bUWSLaMEY2Tr8c4i4bTEBx6QYMv5hqJA6kwyLP523JT5zFabj89aagCKeT7atzpEWvizNnF",
  "key2": "4qo7mZm9j6JZ2g1n8Lwb9jDTAzGJYcXNHCdHhActAYVXsntUB3nLsnjQzGg8MbGtdvHWVk2R9yaCebYemDmADz6j",
  "key3": "pmGVMYAXB7E4t4D8cnhiRtFRbWHpCVtLL6EoKjBReERrExGnLq8HkvW1jL9w6WAYVky8jsxFxeKoFeCken9ZnjY",
  "key4": "51D42TaGEji4WUa8Ze3H3ToXqgrkVh9bBpjHxq9u86qz7P2F6Xpn75cQKGZcXUWRvsYixtJW6DUAob5SZA6XBCTx",
  "key5": "67bSwmhgd8cSQRWS6cZFpLLSFdwvtmuJa2TQ3LPVYvhhw7F9LqKQDsixBer7tcNjCWP7Yr28Y1PQSwjQrwnJX6D7",
  "key6": "3GrA5eE5o9usbWrwWQcZxgMmWjSppYwsjm8Uk7mPMVCfKhatXWVsSZEJJvsAdn9ydbpDArKr24AGfStxq9WnZagB",
  "key7": "5iahpR3vNBmSVQKgmQT2GFR6gb6Xw8rkbSgpmTdY55nFUaYAKqaZdu8NYQxqvK83mhVAJoqVq4JGsUJkchHkrx6s",
  "key8": "5rZHZDoox49dP8qUDDzXG4m7LVaV2vLRS7KspM7EyVyNeUYfLRo8QU6QRBEjHsEVksaaAMdRkVDZLtQ11J35EHxw",
  "key9": "2KZupAgd21rUopQ46ZND2aH2jfLGHEW2MLjBELYYDta6L9YpZWzvsvfVF9auDdeoU7kQLkTwvgw1wtmYyDkX4QE7",
  "key10": "2hQAFKvU6zHNhPVAeNwyFhxL5rrgSRfMegTTzbSb11oSjkCVhrQ2X7NZmxWic6cMK8H9iw6zctWUYNJyYmZeU51T",
  "key11": "3kcA4GQJZm9AqPP8sbhm2DjU75R3oDNzByG2mJYmoHM8y3TDYp3WWK5JFkYbesj1Yq3XhQb5GSnNezNTg9WG5Yh",
  "key12": "2AcSRosNUG84bcdfeQrAzgSXU6sfhnQ6eUrbqxZvTHrkGfBaZXqeUArKfewXvhboUkRH4Sj38SWAs9gQEeZvk9U8",
  "key13": "3woDH5QycXfZqtB4BNaAF87BgHHXPbhQnj3RHJadhPZo3GFzEWbRKhcF8YScG4Q5wa6xAV5QCGwMUVcUBJ9W5rad",
  "key14": "4TF7ntR37vMUTtwtYmWkvDbEepTpboZSm7sdgybdNQMQKDYGKNLo5UVJ7ZjR1VD8UAvY6s8j2pziwMWyoGr4vmXX",
  "key15": "5A8UFgUEpn6jczobwyP5x3yQEeX8F1zH7z14LYPo6f6Qa3sXYD62Y8iHdLxjZXMRHtEeDCyy4EdbCUuyiyxbiwwv",
  "key16": "Gdqe5DPRzmwHZiquvddCTmzQbRUVo4Uvey8xjcERm3oPKEdTTYSRuYBYUxEho3KppFvxKytmL942daXyHccYN9B",
  "key17": "5fwprHxcAbVX1B14roTYZCu46sYc8sseMYaWnbWoZ92gao5rShZcavWci62ME8iEjiYVSw7hqn5jh8xW6SV6RW14",
  "key18": "5wvwPZthFaUxYhLa5Ta7zoT8Tm2YHCThnmGimTYx9pu9c3dNnN5p3PFq3MeXJRiNkkrV13yJsJeYQy9py8gSL2LE",
  "key19": "47FsPbVUGUgkMUcznFbdxZguB5TFdj2vJSYYSButTeBQpHPgZstugbrCbK8QB9H9MLQ9JA9tfuNCsyR7aRcvDLXe",
  "key20": "2GJZwmJN1ZVfoKDK5QDQx35Y6wMu4UKFMhXb5vUfRAmAKDw6Gait7VyR9uMxF4CwL6HDs19E173399216mhb1FA9",
  "key21": "4EmpkNtSdGmnjkqZXs1ZGxNzWiosr7NysfVnpjEDhbgPwqqAsxriDj2ErzZKoW2JGFELJB1rBwBaUva1XgZ8EayK",
  "key22": "wdujWynWjMXfrheAhirGcFd7VfcLfMqmLwYRGRTVkzT47iTocngqTfCJkEJmmSsB4NUYF94AHMkPe6FUredK9pd",
  "key23": "4p2uz8PiMFxSxp7zMeYAVJuCoWqcpJ1arroBsQAvQjE1YeJyGbNxv8CKuVjMGWFsTK35JzLzHt7PoBfD3ZrdyCHp",
  "key24": "41SgE36ZXQqfeLT1DGvCdB9fLWznU1D896greGrZCU5smEbzH3qecAwGkg4NRUaUSf2nrt5vDQFcqywRMsudCrqy",
  "key25": "38yHPjzrX6NXbuHTrRhbDBDufTCyLzWJsESh43qpbTAEJxa5ptTmeFgirygxZsQVc1uFiWrNKBDsXmodV1ZVH7sL",
  "key26": "4UE2op7UJkQo9S2Nnkh7QdYE2mKS65eh1Cxgo4r3qcyJSWxxo8Ny4KWVmbA18h38AGNraLfwqdw9YMWWz5GnTb7d",
  "key27": "5o2BcLKRJwjfKtTJHV6GiiZNMRRgMsHdRKpsF6cmVHexXAw95iQX79Yjc1ZmH1fbP8Dariax5umRuZiN7grcnxih"
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
