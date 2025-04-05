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
    "2b2kKes5qgqDB4Psvdiyu2B8WyW7J2VZpMpsxZe38eQdiaYm31nJJWakLRX3LHrA4WNfEKgE8tY4uhQneqS5iHQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GF65Du8dwrSRoq9YD2oHiyV6e4kihhpz7uBc8nN4wF2NJ8AEWUt24W4xjX2VN77UQuJodPq21fGSCHzbkFmrk1X",
  "key1": "3PEZGUrbRRBS3TvKbuRAfdtMLBzAeKtrNjBdtTWqULZXv9sbLFLz9aMdiBQUQD6EyaXbyA9GH7Wmy7EZr7dCPCw6",
  "key2": "3FZDGwUvdmyTPcsMCZTRsajtys8THMCg8gfb6csKtE3i7MgzxfxMSpPnAAC9bzZZHENmQFKfxj1KnkXcELLgYHUE",
  "key3": "5djFeDr4ZWRXFB8vt6gHfBf2F5Wkai8dZ7ex8waBkV9mgknm6ShWKeGwzdYBKscFo3FDRS4qjcBGD413XhX2m6o2",
  "key4": "JDm25PWNopHs6Wa5ocPRKwKjuP8PYR5qgMmZWpuWZcfcWqtd9TxQuGzmiUKfE7ct5nNAkokGahskPgF5ETynZNY",
  "key5": "3pHjnfFyAUcgaajbpBbBME9FCgwT36WGB9mwKJfkS12QXNP3co5wzevyrH367QFjdxepARtYmh9nobJUjMzu2HWt",
  "key6": "3vMXJdP3PNcZFwXDPTP3LMe3jGF59oEqZnQepdZ21jBovV9Fq2Y2oyZY5LhyQyGpeD8mNJzNiMHrifJvtmw6KmvD",
  "key7": "2LyoCApMV3f87rkmvGyYSUEnpzR7fPEfW8g79LzU9sqzGFEtJE4owrZTH1YyUd2hbNR6ixH4YDRCFnjJzDHHES2m",
  "key8": "4fGAF4y2ypSB4MCTXGZVRuT3iZGMXAtN2WL1LsiDB4fQPoB617MHfJ7b7ryJo2aSwNY3TN2FDdXR5NW6r5fGhNYR",
  "key9": "2iWdtXPHdJJoSakcwvkJEJhyjUv5LSTwvysG2VrSGyGetwuwU8HgtYchAomaZYLNvYY79L4A19UPsTMHUdEY1K7F",
  "key10": "5GC73vJrcvup9VyWDqx5yD6xUkXrACyoBYR4fhy1tiwchWNoqoD4YDM7SuKZBXLWWge5wpLUbKw8oZooi7Utup5s",
  "key11": "3phvsMv966jnpvfZxXA3yjuBG361oQ65bC5KfzJXcGU82ysz5so1oHbCZjS95fsF3ESn4WvkArHsqDwhnxnj3TAg",
  "key12": "5c3BrrNGwR7kfVfFeYPJihgtEZsv3e6pWVPFedukfhKFPcnVatSpuwF69tPZwuvY2tqfq3HQYxpk6GRtzQ7S5f2u",
  "key13": "CTL6DTWNFPmvTv9YzAYcMp3f1hwRtWNxqs7TcaarrQCp2pKMeKhsUz654zFAXKDQHUVL8mcSHrfxT8FokxzxGq1",
  "key14": "4QBmkAmcQ79uYXSd4wwBCsavfU5P28uNyV1aYkwsDFT4ickBuVJ8heZgUPd6ju9irtunEDLzjAa914BatAFjMRai",
  "key15": "4zdwgQids644PsGvS95yhPi51xSzzzkZJUSee41V5HN5ZpBpKbLxPCDvez1qxt4QqvRJDNMR2Lycsom6WXbcCdDB",
  "key16": "4W3Pmj7bu8FHWdNKUUNqeEDnA3xyzqe7Mt3q3fB1WrMy5rukZ1eTTk8wM2ms3w6wRQ1DFDULtvWVcqArKCdh4da7",
  "key17": "xb71qK1V8RNADJb5Y2pBX42MgpqsmTidVdAvkrbtE7tVXRWLKWgUVMVBCs8ss8F2M5xDG5Vj5hvDjuX4xpqMAxw",
  "key18": "XwjpxyZzpUaXbTffrmo3pLifcFrKVviYEe5os18MqjR6DSmMxTypMgxCEH18vKdKAtTMFsCefeJtwTmTAFC7pdz",
  "key19": "axbTycYapCtVtEDAzPrj2S2ZwiF31Rm7UsFVVmxiNFmg7PZbRccn5261gVh72ZqDHvGHxqFVKyQFGdd5B9nTeKP",
  "key20": "2X7UvHiXRQTcNAkbjHE3TwyQKgfz43w7cZMmxRDEfLMkQjdYDRwJmcoBkaxzk3FHqAdozbizJ6iYgD4skzaRYME7",
  "key21": "Ps7oarvFt6LSAuSzUTxT13AVrzRyD2BvhWMh8QjeXaKo9UwDT8F28d7WUnXJ6HRR5SK5QWmQX31gUje2vNTfYSp",
  "key22": "4X5uu9MJnk9gJ6oRtBNr4DfVHW9WTtf5jPUesu4aWEHPzFVYsSg2pndUsd7uixrRXDQNTJ7k8LFnwAa61MyBWj2a",
  "key23": "4HZAa9YDd5T4EmrnQRd3b9Xo1tPJQFdVGSSUBgaFxnQasshWbNRZCFxLt9wiT3E88TVfsav23WsR7Ya42JJzh1FZ",
  "key24": "SS1yuw6xV7g2Whyx4C6Rewoc6X6ikqnHQf2U2Ex17shPFwXhcMgHYwkoa86gUPhfmg52nCxLtfW43b6tjh23JSU",
  "key25": "5Sa5shWgkBd7zgLQjbrNEGeH3CBTiU7R5mb3q1BntxWY8uhskMhMhzQhD4JbC5zUsXcMPBnWnHtbUUEARf2XyM1c",
  "key26": "2PkK71aQ9qmxCEN34MQ8kPNsEQs4ko5mC3EDhUaETAL5jpY2FCPm4vHdZEK9jj5MVFFggvgJ35fxuGTqRXHLZVS9",
  "key27": "4iLtstGMJr7GHF3F7LqbcwkMxXeZoCGizQVQpDuspSYvshn1mPApkVHvDrEvsUsAzo16nSCM9Jg7NSy3YSx2rHuf",
  "key28": "4HWK2KfsMiGS4NJ3cbiRAC6AJ6ccsztwXWVQLNjKpadwpvbyg67LG51P5QqcHGrN7D9kACCqDCvVKfMuXXMfLhpS"
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
