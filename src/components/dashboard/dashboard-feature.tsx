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
    "29QT6w65vapUhFXwicb5b3vwxvthE8x1hVvP1uavaAZmBxzVkS7W3RoYwoqRGf8SkuiWnVPMPmNg6uwes2u1QshU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66kichpE23FYYDA715Z8GeSZAnsUKpaiByZjrLMnaUy7bzJakVrSDVM6RoWqFAkP4iAbkgL72FTSMTpvUYgNTnLQ",
  "key1": "3xNeMkXdrg4q8q6d3xKJXsj2tjpoCvBhtDD4yEvcyypFGgMdLyc8mWX8GxA4FTUhL8Shjb9cN3DqYFtTEteThjC8",
  "key2": "5yuemB9GtBKf7BuBqMBFG7wQXRLeaRr7LZTWYyCZw9ZFkR6paxd4MNiitPLjUYr13CovvoWKx4R8V4YqXgarnx8y",
  "key3": "vApczve3r7o9aqSEVZLVtxQ5xKCuFoBoYLCwbxRLbbP86whXcPnpnKKTRJAadYXMj7T9eVNAz4sifuT6u7Abog8",
  "key4": "5yLUnnmkkTKrwtLQEWQyL7ZtqaourFTmCTs9BWQq4ceZVgtvy3eT9gEa5F1FS83TjtR6i5P3VzjNWrNG6H7JMVLC",
  "key5": "2JDag4pWPPWCP2s1fCKNav8jgg4p757tVMGntqLrthJAAnRy5ywPmfCnjLwhg4hqRZSrihhtAW7bHndLgZsCzjZe",
  "key6": "3LBw8iKs9pqCo1hJusY6sXJMiBTMpkgvpkHjpEhb4yFEwJJJZiUa616jPq9r5N42cGGG23Mte2btrPBXLDa9LDpg",
  "key7": "5o4N5AJrw1X9Qtwr2Z9pG6UobZtxPa7wrn3PdvPmwWRSkRvw7f4Hm9rSzP9P7EAwjcHr223BMhZudmiTNMQZqYqb",
  "key8": "3zabwsW3DgKVXt1442M82YpVrNybTR4GDwCZYMbpVNXku7cmSNYGWEs3X3UizbynGKQV5YSvrghciGXfBmjceuZa",
  "key9": "323Ngj2D8cSkkWnb8pgj9ZQcQPpJiCUbs6suj2XoWjbZycRNqwp3whJf3Mw73g5zDBef46MwoTCp4cwtCHN3xUMH",
  "key10": "EkKhpj4Yo4YqqRVdBKFtPKw2PzeCEojua67dv6oXvMu2YPeKTKgF8CbeSZro2baB7FrphuDq4CuhBmyHqA9dWzC",
  "key11": "3hH4gY9svyyG37xgdiqdKunnp7iysrqgS3D1SDJ4CedqWK1Zubh6D32iJGFTy2c5PW5ozUE1gpsyGLqtDnBQPZMK",
  "key12": "3LzdXdwRou9CVUeQYXQLC2Rsn3xASP8xYxn43GZafX2m3QgKe3vu1qmeyC94ExyBAfMynmmBZhM1JTXL3En9DQMC",
  "key13": "SfQHygSSRZmTUm6gLXay1mAZW6rxBiHs6KHtEYHTuWoBye16xGUvseQ4kmGueqsPB9YVpN3VpFeFsmG8bVvLty1",
  "key14": "9cyDB7qNwTVNdajCs6rRSMbXFuy3gneQBpHihf9F3tfUmLbTTV9pS9iBqq3fpBrb2VQiGmnAVznTK7TKadEEtRC",
  "key15": "4a6ZTfZvhVbpSKBxywZQz4ra4cyVa7NARw6RXHjPTjTci168NqCdZUKPWVot34Giwp2w9u6Exbbr8TzJRa7r3HzU",
  "key16": "2VZ1HkrZUttcvGc64GLg3hEqHH5rwqKVkKLkCDh8Je3egXuorjUW5eoBmg8WBziPm6UtDeXD4YtxVQ4Ju9unGST3",
  "key17": "5vyGetXrnZYqpdjX1Bz6UPEyNzXRr3S7FWnh21fYHjHC7QZDgP5XsY9PXcY9S6TnN25q1kyVn59xpUEAVk1eT7o5",
  "key18": "BVXcxpgwJzjQGLAeHH3YegReJquEiGNcJiGvViwyhRq1sGVobbm3cEzLcvgTwYNAHX7XXNRPdYgy8fwZVFQVy9a",
  "key19": "26AjFMkosvdtQPdJtw4jjBjm6vD1GV5i8Vm5iJnpnajLY1qNQksnRjR2inH36xpuf3kZ9eN4Z5Y7zdWKTySBhwy1",
  "key20": "4inx93RFJuQu3EUDEE6S3jGyheSa98oeWtCrZSRQQsNcdxWNLFxjKcL1P2W4DQrwZFUhbJEpA635wbq8uHjfnuUt",
  "key21": "5JVCnYv2rGsTp9A2o1jj3To1Co5hLC27aWvT3MWS9iAfECKaj8ZbCjWgkWLUHD2ww9mwFitEtkBpc7Ct87kMiFaW",
  "key22": "XFhTFwAhBHR4wjKWgS5GUuKnojn9hpQqvwxiBqSmE5Xi9W5rtn6sZNm6SGjrrp8djqstj8cFW9iQJQoTLwRmtA3",
  "key23": "38yd76B7i7VoYiJ4tHHq11qtP7FhsFdGJibW9FRDu8DnYQyRbJ9TkPAXojN1Pgrn1sKftsjGpz1Y6gfEthm7HTv8",
  "key24": "4ExMNHarhYmD1MFkBjyreTSK1asKUibeE42rLqjzrsZSNTSUFcH4pFMMnaQ3uFMpGmYGccAQPNkGpkvJJUtRtDr6",
  "key25": "5nhUaBAGi9RtnqGQHtHLFZnAXfbCTh39Mfj4bFMHxPYvRwZniSXUu6ruxDr52XeVDPhahdqRtAe3Tk7MaC8Nn3di",
  "key26": "sccF4hHGP8nht9GQLEQe41MGcRcWuoKFMT7PkRnEZKDVk4iXhFChBNsigLMVyzDajAcFzbRrWL881y6fgcgaeUW",
  "key27": "2wHjd3pCgVg9EL3MFH8ZkGuKd1ZD9bmV7GeBcdvwzeoaMECWQYiTMZdNrHDosJGWFGMKhfr3jmtm63c29rcA1qFw",
  "key28": "27Zg4aGNaGgGJbGp7hS1xKPzmNxFiqKvqusiLpUrxbPg1DVYHkCgj8d8jbCpC5q927iNUCscRi8rhVoJTAG4ZP9E",
  "key29": "336EDhweeiyBVm4bn4TYc9VuDmnYimUueBDjL2voQ3ZxBkKcJXtnTX2LYTo3qkbmc6TMooEu7d9WvygUJgADrWBb",
  "key30": "5aCfsHF5K4xSkNG7Fn7Ddk9XYkG1L1Bk7Wy4tBqLYJzroQg6JjMS1a5ZYM1xPtP5AjHmoSe8SH5zYEuWoSdWZzaN"
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
