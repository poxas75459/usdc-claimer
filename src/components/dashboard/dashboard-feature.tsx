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
    "66PQJnve5sQGfiikLJ84VANxB9kLsFTSxF7Yad5EMKp4ceoi7UPpLkDkEGUVFqez2dGadi2ATUgFsnKzZJkQtQtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kcYdNZzZC2XxbCRhehQ1DJpJ6UxfwXqFNcAx9XVZyJpwaCggGSBsk5yuPruw3KrmHqg7jouFcEsYVHWank9dr34",
  "key1": "3Z68pB5Vw6QvznMSHFBs71QmcTgjmRgBeSMKwvJfHG7Dme1ns7rhBA4bndUUb63rbE1Yh9FzEuUEN91SPqD8yzMQ",
  "key2": "3KHNNyjz3PgiueundEw5LNCmyK1Xx6QqgPudTbr2ZK6j1WfH4rS243NnHiyCFWVDUMnQdMTvahozEBAwEntFTEfT",
  "key3": "3vkunuW6PooeKSvSjXze5n8zEDWK83SptKXSwvMTa1Lp6xVkTVPUP4fY4uLEJ3REhYaW5TryBaRETzbUb8Gzwsjh",
  "key4": "GyEe5XmbfYNF47GZFg3GNUNEMSYQu9ATCq9iuNqETunmTfzgwAT8QRAPYVyoc4e1NqVZpbXnQu776FuGYmB2tLa",
  "key5": "Qn4gtDL6PqxWs7UHr9TZB2FYU2JrEwiCGF5SU4bGxTja385xoQ2V8xgXdnuXWsRFfqtRRN4RgW7EPsyWsWZGHs6",
  "key6": "26a71p17LBvJpZaE3HZyvRaWTsTRE4PqJX63jWGWmdYKh9GyuQ1g8hezjJUMQjABFz1RLhsvijhKGqZrXADogVSa",
  "key7": "3k1wT8KLZVttWxGhbb9hdPHMwoUJAv2AozwFvo5jVTM89KjW6pHfpn36MbuWcGemrQriXhYQu5yx8UJWLLvgWonA",
  "key8": "4amwXszE4vSGJN5ADzjFMeJRysTxQyr2LJhoTU68uoECqanLUnmaZH1t8iin7nxNwLyXCkeLQZbJMzBzr1kpSo7B",
  "key9": "2veL5oysEhBayEPEaZZRetqTrPW1zLoMYoLVRM9LFKcLNEs3KxyxoUPNWWLUnvVo1d9eoYHic4gp6mWwqxECLDk6",
  "key10": "2eKA1ZNmdiS6HWtWif4QxFhCLWWev5U9NLrPLJbhSEivRTHpjdGpTx4L8HaqBxs3agFb4WUHEyytF6sd5UsEFTEM",
  "key11": "2cesn36TGYzHgbdseKR6KEyPRizVxGQn9fT7ZZZRTrThrzyiP2ytDzfjjmjzVgPqNQjFDmmE3hyCrUL43ALUvTxM",
  "key12": "2JXvxKpnVAe9GbpWvPYyo6ruFGCFD41WLGzbs9rnV7UPEHDQeJX49F5ERXzPiBDqggUwx9zTrwkBz18SMQEUN2Lj",
  "key13": "M96Fwp2dstiQYA3urbh4XsjRaWKSwAxVdSc96vABB79BvKK4caSmAxQZKh8xJ5WmrhPcT1E4AC2Kp5gkktntsP9",
  "key14": "3JqUE75JD1U9zFCPqEpqAWN88dhyZ48G54N4BxThuGbwTjs3tcTRiLQhUmQ6bFh68eNMYmfeKmrdWP3EamR8QrLU",
  "key15": "3rr55fL5qKvL15NfKhjJef3MxhzBcsQeoq8YUZcuWtrevMAN6Mnqzp1DD4PetrtHZgJsn1yoVR9R9vM8xJkzdmxt",
  "key16": "2wyKzPdBn4tHqXRCzAA6bTMoquzNXJvGc3hmeDwoZzKVbXzUwjfpbnrAsrsd8gsw8j6BMxdYhRyiVL8hKkhkWuqi",
  "key17": "3FEXuxnXUsCpwzaX4HMAQD13vVinseH8wS2VCapKMxbGg5PSTFp63EtfQQrigNHQYg2d7TLfoiF6NVouU2XCVdJj",
  "key18": "5RQLbKG1aomHaJYtthzbN1nx8B7sxgJnDkP4KjSk55KWxGmt6SCDMBaE7mB3UUZRpMs1dgBkR3tZRuzCbQBogruZ",
  "key19": "CvrwpyUyErVHGtRx5Z64E8jezoUXQwsW5oWV4bibJ13zEEV2NkStPEyLiCTp3h4aAwiM7LAiPWLubPG4jJiCSXr",
  "key20": "55nVyFHzf7FsWPmkMr2QufuKo76HmwmCpc9AKvwyWtTJhwEbqeG5p2WEHHyvGHYh7oJQFJdcstauW3smEF9ya3qT",
  "key21": "3DhivWH1C5DkVNVGNBEGNdn1skfEPXfrQtsJRsBZbwVk5mjajLgKjxYaSXjsdQp2Zgyo2fQ2Jc4c56CKZq8saDQf",
  "key22": "57BgvKAccvDWkLk4vHK1kZx5DnFEztL42veanHqNAugEL9ZSZSWYUoCjfnYrqMDVJiPJiLAGa2Lxi7fcofSv2js4",
  "key23": "1boR2p9efF75foM4KZUPkgk5oZK7k6nWuYJCrvKbjQrh8CMigTgjT6m9hDvvBBLtAfsL6FZuquXm5ZZGgUdkPgv",
  "key24": "2MFbiVxrtrX7hmXTgNkgdDzQ2KoAmgLfXFsWNayNKdyHVipLX2wZ3GSFYE52erbtf2Z1DMGMa8kkQA7ELiA3dwno"
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
