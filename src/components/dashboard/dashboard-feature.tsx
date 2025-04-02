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
    "xnhzA7JLArDDpjc5Rh8cwUbTzJKNMeCaXh3QUTNDe2sbo2QyT2py4iWaSGE323LHXynGA4ueRVfAQ67jeud8XvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D4xTJ6aPRgwQS3ACqqEPeyqzFgZHPcbRsnaY6kdwXChC1iDW9zsqrQ5tvHLfkVfgUU6Q9jHEcBcWxeRnxXZaSMg",
  "key1": "2Qe3W4RrRdyRvSJQeZGChuDrJ3Y5t7WfuGaVjYtdCBiFx6agJZGJsKsKhhWWka2oXiK7pu2P7maJGHNZMsL2qMMG",
  "key2": "3dzwZwoc7xeiDiTqfkyNC58PzW9Wx1hrKsPDiXGA3BEmKWAuB7rRGK7LYHWFZtXGzx96PCrwd2pVLXFHyDHRaM12",
  "key3": "2iAQymDGbPg6WDCqhQc6o1MAgReKeZtZXd7sctMjtYeEytgPFXpdVxNs52vayTYiUGzcHLYDeAxTfSyMSKVW5sNR",
  "key4": "JQbpYvDpdJx58fYD4n52ht1W11ifkmifvyAgrrncAVqy8nMgTF75ueF8Qqo7VEgsZN83Kc81vxTnZmJkb8jUhHp",
  "key5": "CCrtohNShMe8shW7h2sn1yDQMao6LREx3gvipbt3RmZby8nnFKTa4V2wczWQnRqAdE5CbRbpSXkWvrvYmffJDRL",
  "key6": "3qh4mYHeEg8N6hgrW9tqmd6banUdShHNDLXy5cEyJS4iLL9QjzDVJrBHssbfxAR7xZwxLXm9x7T7ZERjGB6ieesq",
  "key7": "2AbHMCXfmGE4jGwzLCKsUFTvA2q3prFLa8WNp2RYuPkZ4ydzSXMge3NXeKuvZPSk7xY1PJFCDBhK4mGGwgrVSnPB",
  "key8": "4Q45oBnENxLZGy3imUzQ8LudXL4MkaFNPScUQooPrLDDAenBbosnt9C4hsC2Ska1J8VJBqBCurErXJt3s3ULTvRm",
  "key9": "4N1xPQ3r3zQb3V3ehh1GPFEKioNFTTrTzgA8Mb4eyRfP9NGaPAzRGUYivvzSP5wMEFcSxUDmPTA3rC27aPfEgcDk",
  "key10": "4PnBsUwX5UV3tgdYvLf5fiksm3NSymw22YQjHY17FNpvUSMA9YPMFi7JexWBCGkAVMpNXeHkz3fMDkrEiVMRY6p2",
  "key11": "5kV9xDcZtLQYdSG6wwDUJVw8zPDhhrukop56w1GW54fMANfaKtAueoysyeC5wXoRq3hSJiy5JqSZpsG5pY6A6JLK",
  "key12": "4EnrVS9FfDoteEZibJuFULoL3aoBpjhJxx8aKaccYMHtZMesvSL2CwNRXYX7rHnoBwS9Bd944ouAF5FsKP4apkqJ",
  "key13": "5vXHxebHSaWXtqLZa36UiAK2H5xfKkzeQw3aYBsdAmXNxFEK9Dh3aLZUApgLXwskrdkK5AwjmGdd654G86b5nRVy",
  "key14": "hdTarrDF4bNqfkHTuDvyFzGoAqEUrXbDAAL7zKrVvPVUPcfs1xwHANNbtGNK5jFW5UbcaHdPWifzHzjZrEAiwGd",
  "key15": "63zmK6Eb8L36ZaveyTTHLVW2VtADhMBWEEYz9zXE25jQNEreaBVGHGGVd8Ux3ievE94zKuwcDK2E24mSh8VKegcK",
  "key16": "2vdg4vYJauB5qAds6tAkZe4cyfN7iQdPgDUEFB6Vj7z2ULvrVtbe8qJ6Yu6wUSkmujAosmY7ieidrf8Zv7AXBpCF",
  "key17": "LMtkesNBNMjKytqD72VY8bSfkZ2BBQFQfkUEQ66GecCGeLDqkyhPRKXmBWXWT5vy6w4YEBq1w9pdZWw8MbvAXnS",
  "key18": "2r7G7yHApANo8HT8sywLWCMyQL4v8yT4Mfusz18Yh5bc1vkiyukYPrqpKGarGhWT7suceCfpESCESpsoVW9Qx3eR",
  "key19": "ZXF24XapofokiiPdiNCto57FbuHhYju4Mk5DKjbtr2crnw9Qf6CdatPzk1F62N6ELo9TJrX6kjD3NHQc8SXt5pF",
  "key20": "3U9pjLJCyk4DryguaqRXKwfyAUQsrKXnhspMNaMLR3UbXVDCFKPnyhd9rcfnM6jJpzvm9R6bh9quKYqMXoMm4S4m",
  "key21": "pUAmcNEwq1saGRMnbdLwFZbNZAJ1ffbT3DcaMscJphmeZ5kGmJ1XjFYn34R3HMs68fCsJREumJGALLH6rR4UXA2",
  "key22": "66Uc82kxSiyr3v4AvB7uNURUwBahbQSSkRRhtxFnqk2B28C2c17RqVJQcWTFj3jyjGvteasdeXMQxZTW6S1poKm2",
  "key23": "4b2QWa1fP7B6KuRbftcwv5hyjDuHSRT15PbqtiijNYrVP7Cg2EqdvWCoE4VTnpRsb56wP4Qoagv4RaxqS4JHSCUt",
  "key24": "5iSpMzC46qNVYuzjq3eg9Jcpx3Vri8wuceNzG9JNyCSSrQZdsXo7Jm6iDmxGfZ3CW9atGUzj3QH7UJLSh1FSNyoa",
  "key25": "5TqTRm7z8KF8HyvHCziH7ZnLAZ8bCXtMGBJ72nSNrfDGsgBdUzoksZVFN3YoJE9SETkWGd77CnSAMR9cKh8jVzKi"
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
