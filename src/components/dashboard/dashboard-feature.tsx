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
    "2vvdzGtEvfqypGcR7y4d681qgUvfDi9JvjbMX5tizn8PVsbdkT4n7AXR72QUfsAcfAKGSX5nQ5motXmVjdnr6Q29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KUhThTEUseG9cYgQAuxX6wxrZjPmfVR9dfiURgzkmQULJeet7LxjEnf64X719EBKRWZcQHMJZ6MeS5Gy7dJ164E",
  "key1": "33EamCgPDhuqnLYtNY5BaUuVvJEXyC8BMKKF9JMQv8kJhown1NsSe9HFXDsFZWPcaqx5ikqk9ESM1tDcCsstm2ry",
  "key2": "3QErJkPF4majp3PR1SnFuwQebb1sWox66GJwFWAvWA3uj9B2R5xrZYLVpW56rEPZyJHoWKHehXefT57jinAYzXjJ",
  "key3": "4Gr5uUnVhwbFEnUBe8MYRhVzoJwwaB8tpa9BssKP22pKp1sVFw22WKNNjuNfkQP4rpkEVD1rCo4nEQh1QNSsibZH",
  "key4": "4UBqPaXgwyi7acz4v568yJAvnW4AP3jeWhgayM1Jfs6fskM9Rwea1mszgLk87EAQHnxQzWHhY4bgTUDvWBtwH53f",
  "key5": "2dVcbvC8XBmQSmf6ntz3W11vLUZKAufDThhWbWTgSP3wtwa4AbrjppgfZqdmz7NRdzFJWwtSYrQnYitxHDQdxCiA",
  "key6": "UKB7xQZh71ssHoJnfm7sbeWVewJMwC4sUWLo9bEPGS1jwFMiNsNwkeRq8ex7t8cQSqZbWfbh8Fy9Lqb45ZesfgQ",
  "key7": "5HiQiSCQaGG8TXtTQqGmQHJ3aXfoT5cArbCqifStU4g2YM6L5HzAnJ514jBUqzKWcFuufSR3FyrbtDym1fes1bg",
  "key8": "Kk1S3G9UTkdY9ddC2kFxbbtHdBRB39wbNUrMzGi1S8q8qhTSJyZ3vBpcfxumywNy1fvdpVCH2VQo3mqA3FepzBD",
  "key9": "2nSjEcz1ivUwe2vGw1TUJdd94Mh4zkja1d1bZuLK3JPupvrGAfxTv5fN1YbyGk161i2ShkRcKuRVTXVjzMQ1Bb35",
  "key10": "3QWNDhCt7opr3Pr5cUosUqkTie6G6JxwRSD7bkKw4p4q1YxUzdVSNLnZxWzwj3oYAjFBfsey59mAQNY1qVbx1k5",
  "key11": "oKn5po6PNp166BXZupFYAtyYqnCXbLuHqRueYWAtfR6S5FiLfszXsd3aJATwYLE3dqK8FdVBLfKfAp5B48wPu6g",
  "key12": "65uBvv3Mvo9o6sHfwKezKfYVneXcBwtCLrboEuz4uKd4YN5GnBELZEhTytLZPMLN5jyrPaUxssAbdCPHU6kqVicr",
  "key13": "2AKevAoKHdh9YjeP8t2WaVu5QJX5Pt9rZxncYybPs6Nh6zmDpBR6xhKuerQ52aDetCnGxs1pa1Rf96zzV1GAsf8U",
  "key14": "sffvgAa6FRGc9GQgV9A6Z3cGNxXfLgygxzbqcB4Pex2tXPMRpb2rieMqY86bBhScFpesQvxuPsDGC3p96RTr3Ax",
  "key15": "3bzAywQX1yZ3K1eZoBroN7U36y9Peb9dptcJEnPwGGuiXenDX16LwtYJ9t3wHVNErDLBU7VCBvUX2RrWoLJ5vQUm",
  "key16": "2NhimzsqseS6V6DRDjujrY79kuK4kpiGGbnHJsYgLdaUtDCQfUVW1pg5dmg7mPUHgineKc7JFkLkeCK6fr8eza9P",
  "key17": "5mySN4ur6L8JUwQsGNTSFGxjBTknmf1eCbpRzJUVZT9FwRLje61CV4316eKkRdTDWLb7Wttrpjy688kSV5FqtTmU",
  "key18": "4gJ7ZEgEeMFDobfwJoyEAqVU1mjtPTAU21LjSqPcSA6MgmCw4xCoFUrUu9wKM4soawvuUT5hqLPiUVY2SEoUjuKQ",
  "key19": "2sFqHrAHFgpTLxoLE4pUVEmzQtXMhGEoUozaVbYMyjLjdu7Q3mUTzbBGwucPGh3UbjiYa7MpC4m7Y1b3phXGpo3W",
  "key20": "3zQ1qdXmT5xCg4mvXMzvAos9WvFXG6sw33eSD56K5AkinHp6PPKCS3z1eQ5FhB7DJMAmyfM6Kmvzq8bfjEZtR7M4",
  "key21": "4u6d1pwEHjX8tqzJvmQUP3HDZAYrf8XB9wDUFTbCPqjiLBMvGwfveK5kQgfULGgHYqqnZ8AXFW7Xz63PivyYE7EY",
  "key22": "3LhFEELrVVmps2JjgSnWSGHrP3w3nCexjMHn1qPvQZENDetRhxmXJBqUV8Kk3me4hnKqqnnSR6FxrVtCctZXGQaG",
  "key23": "3HkrC2Y7wEBgofsGXh33SigrjvDhxqAQVJ8jLpnz5AzdG44UJpsTWA2WBz1zrdAbnjuhxhVKHC21mKPSZLh2W4Gr",
  "key24": "YJ4GznHHNs9TLAS6PgvHa1tVm1UBUFZf8ZaWaNwf3DMqLMHs3PDa3pYxmSEkvB2tqCdb5evZqgH813DcGXZKfY2",
  "key25": "2VZeAiLdcf8RJPdeX51AjChbQLDAgTLnBfFBxAiaKzAAKpSGxGSeo3CG4pePY2fqNwSB3dpy1HT6SGSN8K1tNVzr",
  "key26": "5geTQGbTLjhycJfihZPKBC4hgKktNzXGRMg84vmzuL1uLy1kcSanmcAZxYxW2u5vtqCcQBFDZxBSEL78wrffVLV8"
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
