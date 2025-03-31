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
    "4Xyxe8qeMKNmahwZqntyeRA7u8Q1VwynyJpgepMeQXERA1GiD7tLLxhp2Am6hECyju6dskmyZgtZgh8kWGkSDWqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o2wd4rCSuBwFPNLnzREfsrjc9FHS3UNUHvAT5DhNnKkstRUS7xs2M1s14e2EcEN5E6FuYLWUwA5ncKtWt48Wzxc",
  "key1": "35C3HRgfSzAn2dfeWXAyU4NedaYZwUTYckoypc8WJNLtYfT87HJHXjVQN1pw8Tr3y5zdK7fQQqJdDE4gMJmTZPVo",
  "key2": "63QPwPaTn8wRTz7a6ifGFsCKK2w3ybkgoamFStsL9g8B3n4YuU2YhUg5vr8Fq2N2CRiP5DEyNUav636Fk3sZmdwQ",
  "key3": "3Pk9mq2zuncgsP3QBot5wJUKnxV73j3JYx7eRwLVM97JdJV5cQfMaLiCsSLY4LYQzKR6e5zptmh3PAZp61MdUdtS",
  "key4": "5vjBncGXGETU5gPMDNosTtB3n2Vftdsw6wGM4KZELwAAVKGvUvfuU3zaYdGhCGNVGEMu8YVH1UAtuTBjADGLUmqG",
  "key5": "EpxH9Pd8WTAMZeL6BZCHQFrrayfgXrfqmVLwwhbTbtUcTZuenEoTV5qrkwcNFjojduGSXHAwughFqgnGU4zgQjq",
  "key6": "SoAuXPWFzbMacAHaDFtvWevDDxB6sV2JpeUCeeaph6Q6nXKp7KPLFhUiceGnbcN1stMacgzQutpLzTyStEM3TJb",
  "key7": "2CXPpgNxptcq14Rv29Bs2HmYEhBAeuEQfj5ksLqyQWnEjHGxbsSPZbfyv2zdcihCRDCWsefSRouNN2LUh84By2gv",
  "key8": "rBQMkHx8dGNHLiiqqgy5ZkGwHgeWBBinQ1LdUyNcpPy9MyN3bLKgtcjWcteK8tCMQ6hgnjdZqBFPcZ8qev7Lu8d",
  "key9": "3BasYh2HwnDMTetzkjSSfJXPZNeR9KibXw9cWdnkRRkqurExzeriwWGmCTjFhj4QyBm1iRfZkMLmrxjQhWAxiqWA",
  "key10": "66B6VtTQmxkb1zb8KmREswFucbBspyg2QaMBz1eEY47SpmUCondZ8N6e4MYU3YN3oFrCWcaexdzZWQLBKucExX7s",
  "key11": "2EGuPbAUJR79HthvtXZALNWd2cc9S1iwGB5isYc5TDuHiNa643xzKee3Q7A8bQNeRno91W1AVVzM1NcLEeE96EPe",
  "key12": "2wYo7Ro6c65RKwJ9uzBkRXsu5LLnZdg8ndzrFrM34wq5cFsVqSzu5p51PNdVbJbJSpciuc78yYVgqbQ1Vwkvwpai",
  "key13": "394Z7qGzF5W9hG6DfkUkcRHLszubK4ivwD8wW7yLUDf1DYHCHb1onq9SuvM6XnRqn5iTkRXv9wviLzzXua3DeEcS",
  "key14": "4D4CZ4a5ThBLMmdTkMJYcxvv5LY61xC2GXDLtg9hmk6hcMfGj7U8b9y7E3S5NdaFLxgAcd3ynVHWsLCoyvXWwQAA",
  "key15": "4JAEEHf9PGnhvbYC3Asjt3BEYLPwStrKF4w6sm8aHLzRQkRbc96Uj1rRgbirK71iUXg3hc4Wr2WZf89hdnXw2ixE",
  "key16": "FaymQZLx6dwWbHHaMyjj1xR51k6oeCPRuSRMioU3iS5tfMgAbvm1HVp6yCkPDTc7uwbbDC6cGcmM4PPFadD9Y49",
  "key17": "4kMT8KwjVQ4MAkGk9pg38sw6yY8dnnZ1txTrnsZGSCAzDS6SAFh1MiekmDEF9JwWwtiQ91L6ZyZrXCrN61PJpmxj",
  "key18": "vGcpuoze8eELFsXohJK4v64y3VhvvxEEznYhZoFkeLpMAuv5eo9L84UCkUrARRDFZsSf8ecwUEQnndz4R3soSkQ",
  "key19": "NfgdNumQxoS6HPgQD2zHyrwtSJomJs4DT3RANtymdgZ7aXbqzDASm6FtQHd4HxBn4Wy9tR6mdDMpH4EM3uoHDvo",
  "key20": "5Z9yY3KhJPmWxqorvK9ohqLUNrduXzxvuDqs8ZEdvqbGvL1qGGnL8fjwFDnxKibJB4NaLyVRDX7TpMq9BBrNsoHd",
  "key21": "5WsvPVxXKQ6JDnR2oGFBxyU7BHGhbr5aR6iUkDRYg39Vr7g73S5PuAVe64BRa8wV3EYpnjMfL4DKYMKshyJKtRBD",
  "key22": "5fTxELiho5tbgajRcXjScz4WirCmnM3kK9hnM9upsLTEGdSE5PBGqxsWwzwx4bCVg7FGMpnEioxpfREVvUebnr9",
  "key23": "KsViojRpXNSoZNzTVvgGtJVTEuTvpaXYXAi7YnKE9M4ecSBRWb7SSf3BXYtxyBKyhWm2hRX9aQ4w9NSwqBqAs3Z",
  "key24": "3V5Jr1kizZrwSfp7hHhqBywbbB6VVv6CE7sxEbiQJHBm7rHrWTNjneizy5WEtVDPHnqh9MwVNh4iba6PQ1vwSqfp",
  "key25": "67foLHypKyq7BeUtydz9aPzQaXL6PWXouddqJ3caUMfPjDEPyfoMkmLT7norTv4yfG39td4ed2FiRLpYyA7xQFNy",
  "key26": "2zsCoU3UvEjkHKrbBCyF8KPBEAMpMqGCqXGtTdyQ5UBYaaKrZqMzetdHztuaK9K2EKbNNtfxyyjZvbU1zPiRw7Ac",
  "key27": "3zC8jEX4KTLoVeepTRVMFC1P2SRzfBjcaf8cntJ4CiUc41YeQfVcgdzFBQeKFuHLdC1BuXSqVe2WWazYmyrC3Y9u"
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
