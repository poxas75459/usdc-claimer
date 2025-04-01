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
    "4aR1CBQE7rHDac6QMjstRufURjUQh4RnaB9Gbb5zo4cKpRgqm5FS9TFHYSZeaMXxC4ryYa8S9pRTmQCFBn8Mh6nR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LmXe8xdB4KdeQQx5kUfvnP1TNfiZsbKUQsTbJV62x6kPkNVMtj4dGudhn7VqYjDNH2i7nhmFCvdGUeLTSaJvSsJ",
  "key1": "4yKMvnRvDKd77oZ6jXYaiCyMmF1dnqxSUYopocKzmUpPyRcKNBtPX4k2SVhCMwwEREbBSFmKT7pyAGztSAd7ViJk",
  "key2": "4ZM2ZLEzpFJu7rV9tuYRQ9VeYXUSGzW8k3UPfa84k5DBQyhsAWM6D6KbcdSAtj8YG1iX3NfbTxnfRAvfzGbMnV6f",
  "key3": "3bmfiKWP6fhoxUTGMALkChtHByRYHsVDX7G9Q8QkuZptaYDyvxiMrHcLNZNhHMyCAUVNPoPwrWXhejk8CYHctF9c",
  "key4": "57nAF5HhDjFySS6eX1U3raPPn62sptGj4ooQudHLUqmtAvwXWvDbf74MWF2xvtCgjCNJRMm1QLgXvRrFasx2wJKJ",
  "key5": "4edf1qhQNdD5wGjhJFm3b7QFfkVJ3RNPLgTVjKP7aXxAtLCcg5rDG8EDJKNTMPmfUnP8im1Mm4AicoZPTeGBLCAW",
  "key6": "fMFVkadMdZhu8TQuW4GETMMn4fwAocspYHVHeVEje4AqG41NdocyDfcKJK5964MqTxftSvK4pSkkMS3QS7AUhsp",
  "key7": "3u9EJ5xLHgn6ya4jewGjZtsr2u2TdaWNwviWX7vEH2WhBeLKUADkExuoK7dnXmrEBMdmbrZQytahLKxg4RiSVQqC",
  "key8": "2X35vbDZEYeYBFDZrJZMimPMjoNvdscey6QNCGKXyGWxtXJ8soWyJghmyszvcW85v3zi4NuP27K1QNGQ7Dh78YGx",
  "key9": "65rXjZsXnPnBvAZ7H1jmewuvZtp4H5G7mDnG2QesktLM8R2YVgLVx6yxe1hXgnSccbfcycsYf77imGYAymhoHsFG",
  "key10": "4XZnJkcXedPHoqf6Ui9t127rGc5kWKrRrxodKmiyVdkQoUVseFdAYQwcNkpkXEJANpNfH2Zm9ey2TxvKoVNWm9wj",
  "key11": "Efmod2B89iZkiiHeVxUTs2XYS1DP3b6z2cGikBp9Gjnj695TqG2LnLssJ6SMpQgkwXHDX8zihAR595QsiqALCpU",
  "key12": "hsCQd7XQDsrjoMjKmQXH5Vdff1sXrqtrfiWQ1S9WvCP6j2rdUWQVrw8EhyoQjXzmyCjWjr7wqgFvn1jYZkhZDht",
  "key13": "MwprcjwPbpF4oZNUFpSR2BYgLDgFZW629PxaBZ4s3iSNfAHy64APZPTCDCSu8Ux6cQLZsNR8HXuW2KWjEefa1Qi",
  "key14": "25FpXKrdyscYd8mxt5kvwg7rViJdERWx1uYvvF4H6H8kzkQiKDid121ZtGGtaR5jENgGjBDhHbBAWXxvRzKsQcEr",
  "key15": "3vtH5vUBw3s3YAYNdc8Cv4Q4uydV9GLYws7kj5wP2RM4Rc4eZkhTSzQQwducJEBZLqPVfxYRTXK5C9LanDPenfQi",
  "key16": "5PafDJQAkB2vEx4JYEgb3VCZngQVrJ3YwxQ9SspER7efqEU8SbKxGzK7EMvuCkzyjmtY7WFV9o5LtRSDNCNvFBwf",
  "key17": "5XG2dhnE8iz41omamfRA3S5GQPhFPi1a8udhjFJvrFehRSUaf1nBnwnoqydN2mvfk9JxqDxeN3tyDjUBekXTEHzh",
  "key18": "4fthE4bfjkDQBQivS464XXKMftf443rcMMC95ne7JJj6RPS7AFDLHAnZju5mo77nXo4iHHZGDBpzKFcoMe95Xsud",
  "key19": "4XGjXFtGwzKcJRsrfWYHfLu2sZXuzSmcano4bCU18fg2V2VtW6nUqxoRu7XxG174PZ5gRNBjjme5H9TPjZFYCSpN",
  "key20": "QYekqyMUF36KWGRQXWDojjw2hfAmbWyPSKEBfMLfvg7eKdYHRo4ymTgQ6yNhWiyafV9zUjhupYTbUnh3FxJgqCy",
  "key21": "26WP6UyxVRGMbiEGreFs46dExXz1XDDt2v8uGcTfkkpXroJqHm6dXMqtgFrFxmL9EKuehsFSCrgn9RoRYbkpvg1c",
  "key22": "2oRD1LP9RyfLFq84SoRPiSUvuY9oRawnXBPw8BCQeV4Wc5SqtLU9Y4hKXKvuioREeMBp2jFLdd2dUyAJ1UKsxr1g",
  "key23": "2NEAeauQQDve5ymCUKhKtN76iSvZAttfLAqRTDVN6Z1WVNwgA2pa4XabWULtoQb1oKiTbcy6XZLLEHrMVVPeUU8T",
  "key24": "4boLiNZNAPDZTGvHQU3ZBkDqTS3Qt8iH7LSdLvjXK9N8XwjELMc2TQYDLeEZLD4j2XMnzkjpz5deUjc3SpxNh5TG",
  "key25": "417mc38YBm5DejsAjgAqa12KVCjMkSPLdQY7hNqJtWnDqRiLZYd8CrR5A1xKbHH8wj2vVeKioaropmarrudfWr7b"
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
