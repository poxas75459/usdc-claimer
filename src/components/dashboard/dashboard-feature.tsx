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
    "4sExpPCvYzFeXD5W57LWtwnjYAi6fcWyx5aZX6gLZctvgH52oBuGFukuk5qBanKfusfPT9qN9dRDavNpPKV5N9Fw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JZUissgfNZSpmEEUH4v1yKEzFbdS7QdHFmyfCsrRo12giwf1wH1FeVzqN7gfEaABX69tjJtZxZ4AHojzmw3my2M",
  "key1": "7sPWhcGutqYZyVZcgNFcSEZ6YGSyLBNLEN9fSUXzveVYhL4oE417QwPh2Eq4BkiudKXuAZD1s5LkrVkoZXwyAie",
  "key2": "3VpYoDd17RdwfJTZnGuirrdaNRcNbhyeoNnDPoXc5W4DadJmkmYVxiSgXonFyx4wZkWh5KpocNrEngTK1zwjDmhx",
  "key3": "2SLxsAZrEuadK9VJNB8TpqP7sqvZTPn7JChb239BYkmZ9JZ96sotFY15kkVYJ3NCMhpE8qC1Kgs21Te611DecACe",
  "key4": "3G4JVMhnJc7Ahnva3JHCyHSJHLLp5QHiaUa35B9ubxmPP9N6V3o1DqD7sf2dHGJj15zgWnZzwme48yTY2pWVJJxd",
  "key5": "2w63dEedYMr1QtRjPAh7EcnnwsazVHee9TjhcYyGdg85BD3UZgwEJqQUZTd3gFCbWNemNYerEExqQLPDTicuXvtm",
  "key6": "ag8cfMVhSY3YufShc4N1Y15bDppUEnykJBKV5v44nawgfTDNZcjbbekxuVELNGjeqyCovvhjTcFMbfCNfBng878",
  "key7": "fw86Y3Pig3mJnFRVxrSYfaBTC6ZF7tmq8Rkk2pgV9Xo5316xFFLVf57BGh55N5AZ6uJwMaFwU3NaFC8bzFv21F8",
  "key8": "ZUJLM8m8f75wA5UG4azmwirQh3EVfFdrDG4C7V618tGfqhqSBS4dTW7CY8kPhPNwpkd2efq2WsPes98RjGksC8U",
  "key9": "eWdNrgqVsaudmyaukrnqAcxrwawcZPsFL1QDwsjvjLDRg6WzUgUFg9jWvvjiGZ6pMcg6u3vRSto1SeSVt7DBf3u",
  "key10": "4YHXVdETS1NbE3zV41sBAtSSLk3T4skKwBUDuU7hTfzXZ7iMYrbB4vGwAV2vm6xdQv3vNkMtsqjtPgikP5z3tdSb",
  "key11": "3zUy9G7fKtrprs2wBcCh8rWZXfrw4sHHD8jKSLCz9r2K96Sd27aBCTDCf9yvse67bjPyG3xvV4M5dsN3XRL3m3TT",
  "key12": "5voMhCfbqQhPrUL91w5iWixWByKaTc8bwBgNg4cEp8BsMvRoE1ejyzYwLUhsKemDV3wCiaEiuskYBKR1n3eE4CmY",
  "key13": "4PPWsucLZizo4hK4Zy5zE7i69ThpJyLGf28bFVB4Zs1SGYSrfCJpKVdMF55kXvGXLdLtmbvKAubZdEKLgzwDSG3M",
  "key14": "3ZfDRHvgQn9S79N1CA1iGizHmEATZWXJmSAbHLvmoarfPtwhkSNNQXxYrYYjVdYNyDUsRFVYkR3JT7ASLbzDgkhM",
  "key15": "5CaPBmEL4mDpU1w6ngpkhnFuwDc5z9SdGieRiHp5Vd9JRMFihqDBDZfL9Lu27hir77GeDxgQzXyB2YCxFKFYSbY4",
  "key16": "67C6yaZkLTRf6oXupdHijtqtoojTiggvTk3jk5xpN2skatxY17DJLeoenoskXgWYoHiANA9auGPCmmgqjft6AKF5",
  "key17": "2yYfnJkeWrBGHrHD9aCH9k4x1uLXTTkq6PrqcBezcF2uKYk749S7AQ7BGXjXoAtJgW8eChz5J7iTGFyMZE5Zdiy7",
  "key18": "2jZbXg82z6ATZc18QkPK6eUXvaLF5UURZg4TvgbkNFDdfoQ3cTEGPG3bWgifRziadrpJVbXfuk7KrNtxTWnaweJB",
  "key19": "ETcL2FgtcAn1v38DY5f4vnc13fKZrH36iGgBBLsDjWk95YKefg61X1R6uvCQFL5sZ1wPsPvsg1baGA7rpGhMoH9",
  "key20": "WZ8KRpz8VZcuFwQ6MQFhFtVZSfWCjieLwgVfnr1VGYwtgX4hw75rsQbx5ek9Pvx4S3AXB3wHzSJy68d9v1aC6aa",
  "key21": "3N1WpkYz4NfvbgpWfKkqnn6qMSxXrd3JaR9cqtRggpX8eGK134f6BT4h9Mphv8qfBPwCCa8N2V3jDCLpU7fTSKX5",
  "key22": "2ZXHt1RQgbex9rJNSbmz4LSWKouAQYThUR1rB9RhhPW6DoWDMpePTX88ut5A7t748MZvFcRfJjV7rTrBDLTnWgKE",
  "key23": "fqVo6yaKLKazzurENg6Yvwb9xpYTcqWHZNcBs3PvGNgptRuLk35dX8WtQoJzPnQPmMFBbB6CgTzEPtfe4dDk25G",
  "key24": "23KAAKzM3pYxBdVTv2T6hc4X73o65GFgqscszuNDsmqNKkCUhZbHabpd2vJJ8VBJ9gDBqJZ1B6gHHaXCDB2fcoQA",
  "key25": "2UyUqWRXDHQFKXMDzavdah7D82WTPKSv7bL16r9Dqu5NJvDeuWbR6TByYTzkHHPFMQsgVSp65cbEjUUQhaMKKQbi",
  "key26": "XB5ytgNRsRMXsmSoKCLeE3j6kSteK2vEqJ4zewYHGC9bB3yYoLbMDM3aVvhSSUaPDZbS6wdPL65XgVayvvZ23Q4",
  "key27": "4QvfdcBanABWtsYQw15BPt3eLT2hzFqXCZQjjsF8E8oXKQeWniMyxEn99WKQpwsCwer77FXcsph87tvhW6KX3KQJ",
  "key28": "2e7cFN3wQuERxLWAmb6WUjziE5TRoqph4XUNtxsqa4HKbvjtArwttqy2LGoiL4YC5Ji7fQCFJ3diymKY69oKu4dt",
  "key29": "4BygDT4EXB13vjezjBwSwz77gM9dmYn9VZPvNGAti28LeKd5rmKRMynWmMEebTar3RtG28pqrFT1FhL1K5cbBhY8",
  "key30": "egn1Acxf8nL7wcrC7C48W6y324BPhCPEeKxg1i41FQk3ePvatRH9afRCb9k1hVT5tgg2t7H653SmDNY9kPp9P28"
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
