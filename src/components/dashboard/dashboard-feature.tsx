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
    "3Ygr3THwSz4hCnhbVzurBm9TixgGpaucKwMebK1pTTmenQmqE3UR414JmFyjxgbEyiH23x8x42WE5tf3iZz2wpb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47RvoFmfvUPVqUbSfgUAKh9s3Ko1DZiGnJnJVtkQsAdvSrE6PHBKQKiwHAbF9z67jA4DudW5rWj5mAGtZRD7SjcU",
  "key1": "4tLvMCed64L41BUJRActoNtzWeedzyrEK5LhwLwztpirF3EC2eBqBgzgJwHG5kMWTcrrX8TLECFEhEA5MTcaLqWQ",
  "key2": "GUwuwVGeAy5fSToxwMZHSax7suH4A5nN73URi6D2dsVBCGymmRg5LbqMhr2j7mXDg1gGHiVdZMiyZCUcwP27gU3",
  "key3": "4fCW5FUP79sZMWftfjUUuS1EpdbieemQDss3DfGizsTUPNCHN1Yh1zWEaRdZAMMzTtTWDBvwr5aPZCWXvXmpx9jC",
  "key4": "3HMwbfLsepDLzjhVf56haCrDop63Gup4xQuSdeCQAtSjPwbRtf8X6btGV7QvcUiGbrpe71vHdx4UDJERGgUxmaDu",
  "key5": "5hfQCHdRXR9K5sXwKnSbAnbbqMnRFfbUSWXJaRH1QZSBCvVRpPxD838t4KfjYqCHdmBBEq3ZPrChaY9bdve2Nufs",
  "key6": "2RK7p3rj9tSAgzbGEzz2SuEvZUoJmLpZYjJMjA3LoKYxDkTSxXvhVqe6k2Ht97NuqDvExiRYGKp5Hp4eivDBhnvK",
  "key7": "5nVBNktJpry1XBoQrgcFwSXQCcjLrudNT6rjxCwD6rjiAVkhw9i3ody5rThzE1hVaxSCjuRMYRrWCiZ6rPiJ5xQ5",
  "key8": "2ds9JjzZrrAVDKq6rnSoY3eD4SNU64pnUPqyF1pQ8shkWp8ZQoyf869VnQFf8vqXydJeYyWJtVPB7iXzyDwAkxXQ",
  "key9": "5CRXjxkwboJbVCo8yLWcq9efxgTur5Gt4neeRUjZmJ1Gpftjkj7QCYZzJcDptsvbmtYNhv3hCpsR518bicoeBaa",
  "key10": "2wXRZTs2qNpoYtbRKkrnc2aETDLZuy5mLqvRsiWdp8UQJqxQ6RqmbCPtZ64EH3pQifL5z4pLpeDzNwcdk2GfJMHU",
  "key11": "4FDfUTbDS6BMcGSTmSvevJD3aKL1Ly5cJX2QS6N4xKt8SdpwULNbC9fYqc6jz7FLNJtRQLm8zsyeAMVy6fcPPp7x",
  "key12": "2EJ6rVn3XKg9brBbrWkU14z4132ttRJLqE8WVx8LDPTx43JRtTKLqSG2aphNvsZQhUco4eqH1WdMyBv83WbNAx3X",
  "key13": "3T44wVxwh1Yy6mGNrqHkyvmRRKJPTzRN4LgeudwT7tcifFPZBUGYNvR3P1dty8qJMyDs9UqGiMLtHUx1gtmMxJAV",
  "key14": "4x1pZ5x1FLEKNh2e8hsJuY5KbHQFTHQUEmnACM8oP4wMPuhTRbCLU1u65bHYVtvS1BYdoWD4wfEswJ7g2peXSS95",
  "key15": "4mvGK63JaUd8DoMyBRq4hBeQDmoyHxnLhFqk6N3F6dj35YYhggBP9vDiTNnhghanysn8BbJToJZHQKTv5jrnrB8b",
  "key16": "5xdAT6BVF5nWtHEMD495BiwgXhMX4bnXUMfLXry6nakZzhxR3FcUp1wFS6sRDCYERn3saZ9dGjr838ruyK1nMd9W",
  "key17": "M3HoS4A8gWoE68udxWo8TKDgiizgeVSakvYKzQQdfq49WEQXtHGkkz2jGauPDPD9wVyYsh3BT6snyHepQLhWyK8",
  "key18": "48bGRt1YfVoDiCjHfMuNRt3k7QsbuhKQFx6hXLv2Xzys8RZ8A6cWK6o17f4vT8PRRf1H2rXH1uibFz2oiKQLDe5p",
  "key19": "27xJikY1HbVQgreBb2u5AvsvdjinJK4aBwXR4iab1fmjD35AFEpdLZT6zNswn8FjyEDGyRvav2PQdPDbu1qS8V8t",
  "key20": "3AustBMwLrWcGZ9y2EE4zqR1Gifuie9MH5YLYZsJ9V7EtRwmXi2DcdWDCrcTU9fw8efLQt6D3ehVwJmJfS6Qjy8Z",
  "key21": "3wxHhNYSRMWvM9ruSwtF1H1S8YBWDmMsC42Zf1kP6ecmCDXCr6YrgSJsp5f32i6Lii6aH2Sgj9ZtQcCPP9EVM2rL",
  "key22": "4Qna4vUi1seW1eruueWnYKLSUXdE78wdXXn64gryo1Rbkx95J1RRhiurhQzV9pqert3fEX8HM55uzmkwAy7M3f7",
  "key23": "3sbYpZ3WKQ4RPWAvQAjA2vjRa1VqbtAzg3SpsNypk6td9ujG6XqPKTUyTsGJBTPvZBQb7MrJq7W6vZTu7EsFLk8h",
  "key24": "4JAkznUcYUATHkDAYQnqr1pQkbtGJrhH31dR4dWYPjRajQDrh1RY2HquG7eD81NiHVtEeEddtNHfxtUGM4G9am18",
  "key25": "5gQUGnJPpwYAG8uYgB5XsxX3YfdCwpxRLTVahSdc9prmDADzYxkRGTNS5uQBwaKWgWpEbbmsF3Nvvk8VbKrFpJNq",
  "key26": "23CEGSBD1kps2Mu8o4Mi49qjJkYShmhGurjtMnnHcx4Nf3aqxo8yZd7JfJUeEhcihBZrnTccQfHgzndo2xDtmViQ",
  "key27": "3vMYYvQE3dL7McXaEjDF7NvyL3n7SzpUKNGdsKpDv3qVXVKeLZE8NTrL35qi4FmT1aP9X1jQZNfSFSCtSy9FeTeL",
  "key28": "Azzn6R8dLnTSH4CGquUikWsBWAJKGza8bJ5MR4iKVNr53oZA2AUgbAmGxLoh8LzaLLqDJB26wegKvMJdTTtceL6"
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
