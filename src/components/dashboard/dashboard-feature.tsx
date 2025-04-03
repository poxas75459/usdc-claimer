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
    "mAb4r6tHpDNGkRBrru97BwZ9tzS3Fd1wqe3QM8WWCnZGrHTN6zXwm3JPUqrZSDi6nRcs8nm9XDt7hc3hWdzFwom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f8h1XFwSdVXoSXCHHMH93R1fmUqHQKTPS4UZPBEkE7uVw23wL7H9ZJydCtVDR2Coj8hSCRBcDvq46hUUyToVkZ3",
  "key1": "8BJaGKzEtudVTfntJSM9Essdt8BYgHpZF3BzdFgJZTGwFdRGwyTp1Yod6R1e3dd9XWPxUMLJEDgDmrQUBWc7PyJ",
  "key2": "5HdyVEpsv5WedpBtpoDTfPbsVNQBLCL15eHD9B4uF3MjN4E8nEcjDnty2U7BQsSRbEEY75kyRmRbN4ar36vgqncd",
  "key3": "cg92XeS813JuNNuXYqcLJqbkAXJLH416yNQeEBLU9CsvrhwymFtDvxToXZGtvT3v78uTmy8WQxYFZnPPRo2hh2V",
  "key4": "2j5EGU6jQyqypgWx8CkKXzgjKgthBhJ4sNZViC5jZhvqprXMtGfvUnLyMNtV6CvyMyZZsA3JAayb8UCWFdYYXL2E",
  "key5": "t58EUoxJ4Mx97ogQbVi3UB7QsWySNRkx9uNcepFVJ7bCQZ7xbjzzR4arai1iBJTKxYodZb2mXJA9JsvVpr7GBzc",
  "key6": "dCsCbH6N5aQ4aoD6N1CAgysKcYyVgYSR1QnpgadzTUAbtCMy3K6gCs1tF4DjWRuXT6iEio2n6MtApc9VU3aVzoM",
  "key7": "2bi7EUGWm3dDJ4d6m7QenXwXvKzLpAVqmLigTrEuuXoZgA4EfqKBfNrerj4jDxYq8YqXiALK8njLoqP1MSzSaq7E",
  "key8": "5LnVWxrQKLZLHEWYbJD1brBE1ojFWAt4WiKkxaL1s7V8JxCgWYdi6Bu7qGVdDCFNTwqbUVLkeJUSaZZ8Z6XAnWMo",
  "key9": "5etN43zaDV4RnRqMWDgpJvRx9trnFE9eNuxARsm74bjBqek8Bu9fJ9wL4DGj9PHt2x1sxvMEpzz42JDNCwdSvk59",
  "key10": "2T4w8bbNbkmjt4K5XqowLKRan9eFEETQMe2Gjnp8kSoVZuKw1jVt5ZWkRKe3M31fJwWcQ7483X3S65Cp38rNWUuM",
  "key11": "5CM9YxNy2N1GVeu3mn1of8zb8F4MZo7Z2RVsLVJEUhbJV2ceDLjW2HvZy4gLyYb7KDavY3LZMGydojuLx8nhQAeu",
  "key12": "5E8AqhJPp7umvZGTZcctJC3hpp7vVt2De24D2UJBtAR7jC7QtXjBp3sazZQr8v1CDttUs8VE1kNqgm8Z2fyrDNmE",
  "key13": "5R1Lmvg32szT3yyn5ciKUHziyFmHGfNzXSH7jo8i6ypEWV6MMbi9Rk63M1gp8WQrdZJnMSeT43zZdrwq1RTYf8uM",
  "key14": "56KpdmY7qMpTGGNu1f2pKugEMi3wzXsKPpGfGDouXszq67U93R2Eq4ZgA8KkXfxJz1QAEQmmT2WtxF16PNhkNiq3",
  "key15": "2zmtEZmJv94M1feyMPkzp48M1QPyfGHJLBi4cJcAT58Na6rHFt7zsdgL8U3bjTZP5Ep2Hcvf9cScb4hooNF84pX1",
  "key16": "4G9rjSYXtGFQZu2vsbDWGKerK1E4kZcsUo8FysXZuq86rC9As5yTYLNKovkUHr9ExEcCbAhiAifYBCRLky7seh1n",
  "key17": "Mfpcr62XG3C9TLZGFrrRpfuMDU1EF8bDK6s6c3UUBanDmicH9AExoqMX9w8u4QqkAz8LWMQEUBMgxc3ct1JHS1o",
  "key18": "34QNPqUkboB7DHvG3N5S5Ka8ZykPahXzErg26JbTyMeGAyZHdJyrzqGFd6s446LY5dfA176QxQhXRLoCo4cy5k7U",
  "key19": "2vDuCcxFxbsPcivHkkXYm1u2quNbGoJXKE8G9pKUSfBrXQwDR8aujaYGhvSryxntAhFp4PKejTz3SpVJDprmqEzc",
  "key20": "5t814e7VK9cvBnGNBjRZsMTEZcT12RXhyqDgbkEaCKxVXJn9ENJXnj7MnHcP9x2h2rcEHGLpYZrvCMtPawcUFiBP",
  "key21": "5HA9PbhyvfkzCW2YVJEP9QmtWu7Nu4xUMzYp2xyiMsnyGtiifvWh2Fr1xBUGxxpzrhKRDNRUu2okTMYgAqeugZKw",
  "key22": "4YdsnH4iM9jXrM9hh5cRJc3QM5RKjbHsF3ATrhQsswnBG6EiqPdshD9892Fkkfn5S1SuLc4cSKGJXp2ySCyuSFzt",
  "key23": "5w1VwxHtFXdoRDjrjHpq9aCEeEByAthw9gFdNBGwNactocWpHLChqgzPkEwbCMKJ6b7p9tJktEsXPb14sfXRzaVc",
  "key24": "3aacibHXR1ksmeGWTNL6WNYQtP2yKnASqmwt8T1Smg8Sb4Yogq48K6qC8WLi2g22GripYUf1SYpTJ3WyXmPXi4iD",
  "key25": "4c75tUaobuP3hjRhjt4TLuELjCFmaNrgXPWkSvPbLHUiFxE7uPP941qvRFzNzydbv9ugeTLtDMzZ8NfRsJWajyrJ",
  "key26": "2jbCXfUhwMui8APY9S4bJCpGL6k8Eay5xzEZnuyGRpqpmCfPzB4QoZUz5jjQqJh6o3taKFRdY3ixzYme7KqZFyrU",
  "key27": "5V49PXbpxqoYiTbpWWcpSdgdz4WAjikMmhKPxXRcmJWri2H5ciqQFW2xQLtnrH3ytVwGXgCGzRfJXwHZyUkbJQUH",
  "key28": "4g87RdeSH7us2Daig3whDiJ3wsmpx2s5B4CgCDtZvQYTB2zYdTfARNbhGCig1BBvKcoiVgzhH3k4ko4M9RTZZYkF",
  "key29": "CKKYi7MbXDN54ZQXy7QcCdVne1WD6L3LrFanyYCiiWju1yyySiiUQT8dzyRTUhJgwJ5KCV9CLpvDpYWCNDhJLkf",
  "key30": "3o49neG6UAW2i7i5gfxo7UppXqMo9dbmouJEurkGFugw8786Z7hznnXwizC1uPRtapjq9qMNmeTmYB5QRcdoogre"
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
