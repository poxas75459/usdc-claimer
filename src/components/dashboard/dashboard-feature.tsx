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
    "2jfkYT8CNQ46wxNiD1BxV9gnmJJGKCHwZ9NaFcHPfGzMpdsxeuiHq5v9XdP3Jzd6qDQnAKbcuKV4sM75Yu4vJUQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vZbVzxQHCfWm1wF6UfWLmFBG6roZSyrSSaY57eBHeVaMX7UfBZdekgkxhahkxbWHq7efUbaJidiHQBHSHbEyzPa",
  "key1": "4KB2p93MxmBex42JrWNpihLrJYcTJiqwLQvj4sdyBsfzMBRrVEzE9JTDEYhPsFCcdrx7bZGZ8gqkukDQNuVHHq4v",
  "key2": "4eDP2fMseP1mqiLteSdg35D6F5D7ZNK6GCv7yws4QXw8YJjUiX4oDT5nKtx2SyJZEsJNwQbNkCnJi3YpfRfeMoqu",
  "key3": "43UNna5QxukoQmsdHjgkBS1QGc2ipibUE4pMeDYFUhdo9YAeZAuMbtXxLHgd64xDAKLueTmrBaEhw6LWo4qrfU3t",
  "key4": "LdFpAr9VFd14UgLS4UxoRUd9CY1PDAwziHE8uCGfru2cWsZ75ARS5fqNhCNDeTgWJnC6KK2iWDNaCdMbLsrk3gB",
  "key5": "n4tMKdLXV1YtR7JnLgnmjySnCgT466Qv8s28DWb6WvoMHhVowprdeJShRwk9AS8GJHFBWHzKmygtCVS117ns5vf",
  "key6": "2oHwa2VGUVNG1XSes4GzpwQkTFftsZDQV9z7a7QNHAwF5kHtQ51YC1ysNko6CDJHmX5W6kmTscb82Up4R1UmvfyJ",
  "key7": "48arBxkSqa6YpEGDcrfs7u4aQjQ9cGnsUdY7ag4YKkxSyiCwXHyt81bgVDPMgZTYPa9RMwfsVV6RCvXvbpSF6b3G",
  "key8": "2rssDeEF3EHsYngEE9hUvHymtJzxqhEHuYKrBDYa1WyJoTZuq2wr2AmdGVecc7Pr9LmEz3zvsRMLyAdyD8pNpvtb",
  "key9": "4jGfkmK7YhfPqvUdHYQhxLBaGGDVkQYYYkPYx5zh5JEAmHGtkx7f3BFWS3cXx39tPfuuFhP9pyFh986pteVCpDyD",
  "key10": "42wTTjvJHgd1yXha3PYAEYKBBya1ykqGt2Cc4suZFjzys8mpcqAjG4WHKqA9wb6AAMv3Z5JeeybJcVctqzTcmN3u",
  "key11": "2SiFv7QyUUzjLk9PXovdnZ9oy128k4wfmVQVhByGGaqv24oXsU54YpJC8escFHLihoQ7UHRrGmZxcq17WUBAAfRC",
  "key12": "4czYNJTFfRPNi34vCiEEpkqxzat4dg7wYAad1HFqBsBZU3rHS5ZhYKYfcPpUPm5ewp21evRzFhpsW6kGdCa1QebP",
  "key13": "4zV1ZHKi5i3yWMuvzHXkAz3dLdfWCedf59QVjCfoDCMnCSsUNxnzyQ8CxkzMtKNvb894tfv7VQWu8TwXwP9Ztzf2",
  "key14": "kcecyu1SA6nhxaxEm9VfnRew8aaqsiK7URmev4qFMUtjAFa2QjTQj8q3h9HEhKjbiX58NPLoaP4miGx1f6pqx4x",
  "key15": "2b3bNYbxn7iFNBRMXVYwgtUmyMeD32UH5HgJkHkRBrX6qC1YUmnnm3zwmNgAhfPmrtA2SYZxCfUwTN2hG7A5G2CT",
  "key16": "37q6C7wNDhmrP3C19WiGFXfvJtKK1rfCuJaPANESNm4apb4bMfVs4HLRXGRLnuUqnYSuQ3pSgV9S3mYgFGPnMxAv",
  "key17": "32rxJ921nauY6T2kVfeB26W5DYeS4N5f9y9stuz8fYKGWn8wBaqZutrWNeMy9UNzyncJK5x8Kgs7JDGJS5JJLPDK",
  "key18": "radjfWgMzvxhTyRK1eVoSJQrgbAN6ACv1upxm8oxaDdY8KFUTjT8hSr7PJWmMSu9thEaKfsgg8e7bN4z6YVYm1E",
  "key19": "4zp2ReqFP16TM2Qov39SQtFzFn1spjRDR8emB2xpCkVbd3KRdhuBk7MvvPUYz2CoJ9j5e3FXNAJSpwwXrqLspRSB",
  "key20": "2LBLSfGMepjuU22SYouk6f6V9cJYydJJJ96fC7SM4BDNxJYx6C239JfRFE5XrezpxBEnLaLVP1CxSi55z98iSUp3",
  "key21": "3kDdhKhyeQZLmXLnPdYWc1z1cB9pC6a38kH1UdabWnYeUiq6mtatH93VQ7qmCWCRfZecobDt1cKg7hLtty9ms1XB",
  "key22": "67enyyCn1Ek4bH6hAvWQTmbsGZQ41UNc8ajVowwMseLKsWLCywR6baMthjehf26FEC8CCD6W3TavAorosx38xscW",
  "key23": "2VYWJLeAtPfnuDPBjF94BiRXj6FegtkjsoVM8zDuF7Q1jCQ7uFkCWYTLsQd4WD2aj399jRpMuuAQ6EUz3x62Pjbs",
  "key24": "5wAJD9chKDqhksCJvdcSNNVyGhvgyfPRj1qjnfL2MbYskbwGuRbYCSjwwhS25mkSMYGCN2MFRVArsw6Y4edC5dtx",
  "key25": "42F24bRqKZGgrad8fwzzdpbQewCrxy2N2DYxRm8VeRUzxqaio8Yw8rpJrLya3irAgntoKMjcYtnb4kwJZkZv52Tp",
  "key26": "2BXY1xoQvLCjNbA4bejc3rS5a9ZgYpy6C4sCH9AHp8d4j5vLK9fRMWP6Jr9Bj1tmkfAfvFgkqGkSAoDmJcqzU4wm",
  "key27": "aaJfoRodVNtrybG8yzADyox91mwEDxzR52jA94Skom2aAsvB8j3c37PBkixohNoBYLA2EmAMvHp1b3oG53vYrzS",
  "key28": "2h57TNEL3gEZ7zjPQEFyoCwCqEvykxZng2oU6tFuTEoVj8y8nGCcEK9XKYNwXmQVApJ8nedZV99dXGSUo4ykCvd4"
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
