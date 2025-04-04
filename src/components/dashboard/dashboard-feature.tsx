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
    "5Ce9eV939Cuuu9autgmjGXA4P86hZXdnfG8y7BYb5swgneBBuQCoFgEwkySkjrDkBzwKGSfMgMw91f24vVg6Sjof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HqjNLqkFoRQ5Yc8ND6VYd4wY8UTx3je88HeLwMBEEdqgyTXPfrEJvnwCe1huULg9MziS1d4bV4ChuBdbJ4yFwfb",
  "key1": "3Rm9h72vkDEKYF4cpvtNGphLUxpeaUSWNfikUZUVjtpd9YwX6qHcjnxBVNnwuJF6PxL8Pca9LbF7z4V2RSvEqXjj",
  "key2": "38zLeC1HBEpqUeVL2NhEEXzgtJWAUH19MdjfttKhFkMVuUhwyC4Bz4MXqyfJFZhLkgiZevqshXYTd7KrKS7Qj8kc",
  "key3": "5pYfFzrdT1RYkheJFpBXjgwm613ut2aRttFUFBLquTs1oxdc7v9RC8Bf1coixCVjatkuoXjwbX76AYprNKYoJxjS",
  "key4": "5ibPBUvXXq8UxAni8FConPJznCAmroKiiauJuaGSiCvq8cV7sicMgcpVNwP5ZpXtBEZEAUsGMmLRA9ZDiKi3QZAj",
  "key5": "46B5izcxZd1LQhqmYTR8JCAYM56WLLbNBH8QQBbzMW6wY4SubR4uQbSY9nnwcCCXX6nuRmdJSNHo6h7omdqy4f3R",
  "key6": "5re3SeBqfzDn3CMFtSjU1qHMFDuwe1N3DMUUiXwgoNW2UHQvdYoCnE34N9rapW96pTv19FVgBoBcCYrxfttNmFs",
  "key7": "3sZofcWrDnSVbWpeXcYU9j92aqPPFPHcQuEKDCzBhE6vxG7D7bJ878oQqLZEPSro73eGE6Hg93ZNAZBJNM36wMQM",
  "key8": "5NCFjm17vG9TuefLuepZnht6fd61o3BQgEJaHZJbfggof7SzFbxZnXSEW5668nr5kG95UqvB2VNkP2HApqBriGTy",
  "key9": "4AeNAtdmUo9XG8sGLx8nNkNatADTZSckTQQvtAY8BiVhw2L6weQ2g1o9oaHpnezJGNmUWCRxH34VDzcVJHKX1hjF",
  "key10": "42JNBdvRa2tvvETxYyiRv1QgDZzqNiQyN2Pmn9zfapCYnmy4zanpzmCZdvjs8DZis4xAniLqDZLox1yF8b4fwCF6",
  "key11": "2BHU3RSYjFPYkYcKbVm11m31grc6QHSgx9SUbbEd4KbdgLX9zEvLvPJXqAzT5DHeE58BC45y3L1ADRbGErUNGbwc",
  "key12": "5ot99y3zyCkoGDw4Qsob2suXnbMKtmKpFz5mCPsNrVMumf9aNWkVYtyHQzcBNPoQEvCiuUZzPH9YsfWunVT6NhZy",
  "key13": "2y28sdvxntWgg3RLLdBgiMrJ7EjHbTVJTpETwYG9qp8jU17Ze2Tf6zKuFvSiDT1NYeNAM3rcXJDAUye7WWFFRcq5",
  "key14": "4BREp6u6szVdRXPn5Rgx1j64Fp1GwihbNTm9g2Tbi97whd5B3NvBPZKzypUFC1uupYEMVqtVhh3ERDrzdhGKimQu",
  "key15": "2wdfCyMb7GbV681Ub6grcdKPMXzvcefZVSYN99uSXgE7VpHDV6RvGdLQHgnvMnC1nso1hLkypowRvnVvwKB34aaQ",
  "key16": "4yGeQbzENXXhVTXuoNmRbAQFryoG1n2jCz55WZfFRVX3SRq25gsSgbm5QogtQ45yU7MQkQBDwCKEhQUwjyVQ673Z",
  "key17": "2q1mA6kPBYRF4vn5pbWXx4HMtjY4bcWHfL1C7FAhTyUUHDZ2B1ixNfN7426RNuNySobqgMi6jr1QeG6MgPSYdVsc",
  "key18": "LAhxGaC62VHjWpisXXRewSoshuBjt2Hyirm7iCugwRMDmKhAAo7XmLNYQG6TCGCyyRiGYf8mpmBAXA5KRMMozJQ",
  "key19": "5K36QvdQGrsa93tC2KdC39a4tsQztrd2UmCoF6URremfSdBjJSz1FhozkRMzS9W5XBf6FjaSCfBddBGBUP8SR6cZ",
  "key20": "4jotn1sP6TvzmiLMqCgm37SwCsqA7UrwcY9UVHGF6ocw5BUYREPMQhYrBWY9S52dpDLbDGLLZJepGMCkJ1nV8Zsu",
  "key21": "X19UXFZcPeK7cYTJtQLz7cUfj93MD5n5ja3vMPs4foAPfXLJ45nyevxaqjyZUUyVV6b8nGd1wL4Qo3zGt9vHATY",
  "key22": "4BfUxm941kTMiFcbBth7MiR26NxLMw4NW2N5PnAHiXhAUCgGLqcerMDDMak1yYXZZHjK6R7jjDeWkFYdccLgFEfL",
  "key23": "Rp4YSGsYrkDhj7QgsDLEkDVHAbE5CnfrEo5Rid8tdM55cz2YwogCVoSDSYwSi9fiuW2DJC21UjtNct9REX4Vymb",
  "key24": "4u442ADDX1v7o6ihUyvttwWTTyCy4qzY3XpBfDS6rjz5eeX6ePLozxqEXYDSLJkdnC6x9rpHRvF4ccU6uQLmy7iP",
  "key25": "odbos6tZ8Et12wsNpDbRUi56AyErb8LatQYgvFm3Qr6zBa6Hv4huxcnJzz3XfKtTNDZdodMUwwZLHEHAojDnc7N",
  "key26": "5kWABC4qRwDF1wcjCcUyeqxPSr1EvRdYCEGjDqNRL5aYjUosgPSHX83AmnEmfMrvFDWGNzy6LihzNjKWFK7y6HRs",
  "key27": "2FkQxsQEmrzKsrFGvorYBzFQ64JLki2rdu4SZR8PdbEBKL5CxtLHXWVzteP6SJHvn1QA1f9dEtBra1h1n8E4RBBD",
  "key28": "5AtaFpDn5r3X19kaLqNaSWLrrbpaEjzNnxwfbVQ691LAr2vyASEhLUwEWs5omjB2aQvXbABHiaAZ9CDPVf6p3swY",
  "key29": "5pZqfNU8fnGSgUCiUZTnbcGHZeFwCoAAGxi3LAgmh7zs9zjBGybcZek7WmzQt2QbKdefvvdVhCVRv8DPRbqbio6v",
  "key30": "4E6rdVxquXKDhcMKwh3AXiPpKdwjHj94AYCaLevt2BsYyqbGq6LU1D5Tqgv3zus3KqTZ5YCmBR3icMhUBHdXKajd",
  "key31": "5aBCoNVvmV2rfPUsb7Y33qvsskCXRg4xEXgmSckArdhV2SuUJvBEfXek6L7Xqc7CahDSGBWdkrvJiA2xV2SgpZds"
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
