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
    "3JnAu5rpyPrLDoLdnkGFaaeixDNEwMbsDfq7DB2MfsSNKmTEUhPxz4Xn2rEWqdcbwS2kgd7xceB9uH7EqJ7x29zY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oJ1vhfTYYYQtCiBTyBjGfyrrLDMFqsAMhr5yZNfqYNtTo68rdjAVfsAvjxPwfZwDGduMxcJQtneqMWCVhMtmcsx",
  "key1": "5AqUGGNe3Eh3n99B3yVspaY3aiDVN6XerjoQYEf8eZBfcvz6xERq35taaeiY5GZ3i5dTHdpPwEomGfoPf45khFzj",
  "key2": "3T4xMBQfXipfFNpoYyBsQqg2CqdHLpZ7ced97VPCtu9ZcvVnyeJ6aeZRX5T1RNPr9H6XoiFA7ZtisTdib3iNoo1N",
  "key3": "2x2MQysoEYjPBLwjxyBSc39mqkXpeEVuSGP2R6d1q2mAJmedDYhbcRKrVa5mypuaimQXKuUxaoWfTssApykh67j4",
  "key4": "5o1RnuUX51RRixwDc3ZXjJooa4nTnP2t1JFQBXyJgYCSPN1mcdqiVX48z4sKtePxaxpuUQYT3vkE5hd92uMZbZN2",
  "key5": "xoPYTzHYqr6q1fKWYuSHk9QzYUDDsXkqe2KP1xXyGJ5u9CH35qbNW9PEznHf86n6MY384GcDGkVHZsLFJTzhem3",
  "key6": "2jBAQpa4AHzAQb52NdfPXXDjh8i3xdZ2tLt7oY87y12KByW92VjRqreMAWr34VLtbtYmeAZ4NxSg6JsNHLfs5pxC",
  "key7": "jsDcZ66SS2U9pqMbqx7tWLknEMMqb6YCach9sziPmtAQGwp6a3Don2Jo4zUGX3Wmx61XkXXBKvh7z7BktXWmckG",
  "key8": "3ZDtcTqkrcR3u7QdofGBQXiCCkXbFPaVErK4FU2GePurKYKq8WkTW5jGm3J1zYF44YvFT4CAp8jLWqGftNdxFv4W",
  "key9": "3LAN4ku3LWuc9FUSLDiwsVPv5g2d6uN4zKpcfCvoRujq34U5cQHhmLURrjKqd7JiqYF2b7gR72x9JGDwJx8WrJTH",
  "key10": "5h4ZMRt9bzJLxhQL9c259bMSmJ3vhSJqwakLqKDUyGWUdggz52aJgdkJvn7xnqvrCjwhYzHfzuhFZZ9FkJ57bgaw",
  "key11": "5H8i1kxQKossPByEY5brzyRKw6RRjkNPKryQmBwKvabEAjQSd8R1hSeoi5hd7Me87LGgviRZCFKRLQddd5Zpyjhy",
  "key12": "4NfaZdCnJuHkNJktPB3jdmg2BiTqyNEhMrXbMp5kHZnM9u8ta7wV8evruew1p95UZtkmauSNkX2rsUCTmz3HwQV6",
  "key13": "3M3hdSehADq9hiUdG8SZBqmNTSkubD3AoFh8uy8GJEu8oYmLVaPoYSNRbiJF3NaXDxM6CZh5kaGohVrjQiCQbmmP",
  "key14": "31aSS68KcCn98enKf2gqQrmumr7Ejn9DB39eGYg89HoLbEPAkwmC8bxSG7GQmtQovwcR7gFzjHUhJYa2CXzCy27V",
  "key15": "2n1sXDNfzDFcxGCr6QzHkKY2YNJa9L3oTEj5e8K5JpKdZj72bojnpuPE8x9fCj14PPzTcosCeD2xunxWmDiBn4A8",
  "key16": "F8ULiT766wKtmXyMMcHHTcM2QbfCx81Q6BNgimy9gFJHXcqJrKgrJpmDRd9dBBZEB4eALDDVZTgrF4zeZgQ1dkA",
  "key17": "2rWkNTaieoDHXYKHtxGxKQGQa52K7W5FfSELTLnCz3pCHkzsxt35EtBRDneebc6E1BhLwAvf5dbG9ReU1Jpwpdte",
  "key18": "jRsRkRHmXXZUpNJqVpHNmxbyiady6PHu1XDNr6HD8xdUncnUTkwnLPePfFiWrf7QLLHc3bmRgfZRiRp4KamCdcN",
  "key19": "5jrvqYwGvrGGfCgGuEZzc1qURrtCiFnajnuBnYbDLKMtEcwUPKi5ed9YdNwFsCX2xQ3h4aUSs6r1NMo4zDPnB1Lo",
  "key20": "h3LSEn3Evh4ftziJLwxRWQ7iMQCN5JHRCasKEAL8BzegAi4Pt15142jaFtAE7UwZsAMqS3ofPrH52HBseRdsEfZ",
  "key21": "24R6uRsiq2kfJHRrGJakm3vuZK9hKUJhMWk87AAEkn1eeFTwLq6mqzuG8rNAzDsB5xEnLLccuK3qAtswMufvCMbu",
  "key22": "4Wv5EDbqj5zCY2LhgB3THY5av9zByB36oU9fBEzYdRVPHu1DFYTawwYJLyMTVQeTAWPS2zZBM9gVaJkezCEWQrSS",
  "key23": "4Q4EgQ77axmgQZKUN9j2eZvVRUKTsUHLS6fAz2uudB6wJdbd7ydYFMLhc7o3zGiZeZujZpYpfLm1VAiLUpxVVPfa",
  "key24": "2SGkUnPRkua74fRL4zdHMoA13oiexDUrPCexMZEsL1a6Qjufk3fWQvNGjiUNnyvaZ6EYKQfKk2HCQinGp8okcarJ"
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
