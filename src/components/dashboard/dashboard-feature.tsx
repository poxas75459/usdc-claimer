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
    "SHebn3MGPUNqBrKmU2Gyz4oh2Eb3uC9JMYqUwSB9qdxG5TfbykL5inWVQ7hbHaaDKCpPGEqHM5he4gckk3oWYiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46F6ShVsZnckFCeQf9KebvvUx6xhFrAsed1GEu33gAZHGRN2B9qoP1GfqjMaEJnk9f4QsSaBCWcf9RHphtJxe3jJ",
  "key1": "2pXsCEyejiej3gvgUkKBL4krPmLLwhHjPRCQc3pptPmd3UqZdRX3V2ooERH7jc9mLGzVHK2SKf9gRoWD2NrDdVqq",
  "key2": "2r6ua2tEEw2e9H5F6S5864UY4tTvymzi3tAfUuuAtCmFqm7Pe8KRkWnVWt8wuGP2Q8AHWAYKe1JrguFLLD6TKbDm",
  "key3": "36cXAAUCJdBbN3dthw4QGUhqn3QNHMmZt6RJj1KbTFEGMXMfTxvtk539NHtgv84sgfzrjBE5A4JfKb3y1PAwDqCS",
  "key4": "36xvXZmafxNeSfxD4rEtWhphPcHRxWvQEtmQjWTYoHrCox34Gj352Tv1vLoSp37UnafB4gx8sXZ1PXvnMUpcp63Z",
  "key5": "5c4i49DbVesrwe9Yam5NGytsjcrLCgkfGpFCipTg83YuyMPGV5Q7QapKurcU4kpE6e6dizQFjPLmkBm5fAMNMTqN",
  "key6": "m3xp1AKcGXKDML5Kx1wvnu3NYx4SWJtgAMrmDgg5f6MGYYqHdr6KZ98vfSrEEEtTuC9Rpk78W7YmVfw5H91dXYM",
  "key7": "3xLgRRLYwUMWnfe7PvJNxvYbreCmfqWnJyD9f6Yjj1effoQgHM5ssMZKshXaix75BvVQVx7c2B32DQzHY24QE33F",
  "key8": "5KgairuywWsr9iFULsn7hkX7kx21dcVZbXdYoM4SYxYGKkoN4yhPFRaspt52EBS6HZJ7Qq16puoskaYZMjxCzC3o",
  "key9": "5X5HuUTExBQbfC83SF5fTmsugeasmL22UWhz7KGSGQ7XaaR6GHxJmQQkUQBZjkB67DFYEYM4j25YQ5hJbXUgBWCm",
  "key10": "2JPo1SoxVFyVacMxco7vypn7iiycHMKfgRymWtXbmA34WRGMQBJ3QFSQ2rkXWfGCCybBJobnZWkYMtD3SyiqWtw6",
  "key11": "3GyKyFezG1LTuCJX2AZBok77H6wwJo5Tp7wncBp5rJZGEEc16hKgjj4U3bkkAkAy5GvWZoJDRcezRerWaCk82ebM",
  "key12": "4BFJh2d88PmgsvJ4ZgdWVKN7jiF2uhfE7ptWZLPyDvDwkwVJmabWk5x7bLeVnzizcDzuAvFq82w4exzvJqotDfZ2",
  "key13": "2NJPCoA1qt78m9kSC1reqsMjSnFVbA4AkZ3kn7T52iWxvRkWHDHYSbMtn3fycAmQfMKPm9K1oMH9W15uJgGVmaGx",
  "key14": "q3CP7LDy4RigtAMqXMUK2G4fdtWc7xQkcjPc39MywsXxibKh4rEMkESFCaLfNvCCio6ZsX9nYnJok2ouPhv5V69",
  "key15": "5w1CvpKFQfqgJgm1PcBQvxnqUDJQN5jkVq58iKtyZNsR1Anhwu3Nt7h544hVBdySeQkH1kMHupvKK4Hkq8fCwPzr",
  "key16": "jFDQwdRHLEa5hf8raojNxGhGZUwC6LYN33W8wHzCBk5CPH8r47hQU9S1kUhf6tx12oLiWXyGVQJfs6jYMPC7ojA",
  "key17": "op2ET9ZtReq787M9EyVnZm8NawjTXf81bjySm5srfGtaowdnUAMS9urGh4qgYTc9grkGbjWmtbXDPDJPXcfadGM",
  "key18": "5YsjRUiV9H9whtWVLXvAeYaJya5mnTcDAQFb28jdpxHndtp3bBDRKzrcTNsDwtM8Wi7FdbNRozEWwSps6aXYy4qx",
  "key19": "5jg4wiv5DSoHJfPxVYUZrrcLwRqyDqESvxEeyU6SLzgUv1n5AzKyWF2sfMgvwSFt811e6TzvLKUZ7neLe5LLBNPC",
  "key20": "5rxaK52QACUu3JLvDafpUugSLLbmpVuGdw18fBYZZoJrV67hNF7UsvtRa6SF8XRT8A3uECgytAktJDuF2XhR3DUM",
  "key21": "2fCqXZNGwFCY7Ygfys1f1a1dDNheGskpKS4yJoMrPgRFaTUkxD7C76DPntcHGXiCpLQ4gSfEEyunGzaGBr2fckJf",
  "key22": "Qv2csxNnWiyAgi4TGddy9GyZ2SsjRuYyDVRWgPxohdc5BFL3Y7zHMPcbc8ypgGx3PQvD5Mrp4QGWVyivNiJQofc",
  "key23": "5HcPqNApoHUuqTMJEU445VLNfZk21tbScRD8GvVQE3g3eEZDPPm87ruapYbNDFi8jbM2QnUD9tugAZCFQWuitdA5",
  "key24": "5gJAPbF4eHAYbjeaEUdU6xiFZ5KGoG7G4GoMBoWVcCFU86v5bkVXkToyePmsrmVdyF4bJcsWVCzDxoRChraWNReZ",
  "key25": "38VVZAfuKRfRTSVjAMFVJu1kBJVJuipgAkYTWv4Vg5iz17YxyVp5MFtHmvtC7XmoDCKY6S6vrdgv276T98XKS2qK"
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
