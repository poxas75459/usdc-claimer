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
    "5Xz5itQoLQi5tpftX5G4MS8CqPfRYS4wHSckLQ28HYTWtqZxrQyXBL7Py18bEKjM5BZkPVJNPGih8i9PYD1sEyLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2unABu9L8zy9W5ZCFbVFQkA2hQzdjMoMz5fuxeGwsR3a2FK2vMHdfPsACvTxgwyyxLEFLU2Vbc8peg636VisgneX",
  "key1": "3c8drj3b5QHMzUBfuWLTEYQveMNxXfys5vnoVRPypf8gDkpjpcDAN4q91gckTHU4vo4HiCqYWNmWDnG2zTnXz88t",
  "key2": "2frHvAMtLVEUUVfqx6WfGYTQ6gjwX6ihKK5WPPBSJixADn6vHbLMvUC68vrTqqdakQYpytRKMbgWcS2eDEK3xBEz",
  "key3": "HMfYmSvhiKtSRQnb2PDgjxkXaEsYYwg1j3jCKW5zKeFaydxe1GipxpRXL5s6uC867uqAN2mw3uJREckC7BM57aW",
  "key4": "3WKyut8B2x9Xj1cjAFXXb8kPq2Ugw7UE4VShBPWQpeC5BozHF6UboZyTxd51GGwEeSpK3hKwtQoTs52NiDqUgqNU",
  "key5": "3waNgAqwYaUhx4kNyfLse6KxnQXGw8NuuTNbQoWYhA4yF2wZWRgeY9k7wGCUGgTUXrm9Nw8vnTiFGTcoy2zaYWG1",
  "key6": "5wXqy9rF4TFNLT38ETWwBFpoURBHxbvuC68pX99DWnCDmFd9fSjH1uFz66YThbZhZYh5A4arate2nebzQ5YpPR7N",
  "key7": "4orusj6cfH8XX79KVvXpWSrBKF5KcmBBFVjWXyYKa7MbwCrzJ7UsHEaEJ143yDtVxxxyzTZuASDMvtQX2gR72U6G",
  "key8": "3URPCmfXG2pD6tdyVy2bkkCF8VHBst485ANpB1iMoMhsjhs6bRwVUcG14eeKfrNpnaVf1BepU8GSeKRwr5TLKBE",
  "key9": "49BmYfwVHZBeBugTkRQ7oPv2cRHXNwZQGLiHEKN99woYGY7iF5pr5DKyAyn2YZkAyMTc63EVmj9kEKMGfDMF6Aqg",
  "key10": "5x5dexoxbpWRD3hga6Lboig84Hy4zyHtPt6n2ibpY1q4rTZYjDJKTRGdLLx4b1Y26uFiWME5aotBQY6QqFT4uXqJ",
  "key11": "2Y3hRsX4vJ85pKTBMAW1xDzBN1jWSp8sQMn2RzwaV2pkebqoHYGTQH1Gayw9msE3ZdX7uftp6iJSNqFC4FqBFB2y",
  "key12": "3axjEgs7xdvtjBvpKDSimyXeowhjcp2an6PDxFiVPERSk9q15yeHyGaM3A2TvhCGj9YRAVisYhaoUgqQFCg6APQV",
  "key13": "4T9pQjRaGSFjnvVnnuJRGCZXfzdTJmUwKuFfgjVCQEMbiqqAAfhQnWe1XY69RNELyFMjcTSBMybbw7WZzvFRSfEU",
  "key14": "5VrJw7Mb5J4YB6hP41rvJBmsUgo59ttMy27zjgAWAYHyNzgWNrSFATYoCUUynW5QuYRzffSgdh5p5rwNPNGeydeL",
  "key15": "4wPbQCnbPac8MLKc4uVBB8VoomLphiEdxjzPksc9UJdAgSGcZV2z295GVKoCZkxd75pU5MWy5iiSDwmdbYH3P2Jv",
  "key16": "bgBBjSvgF3Y6i4VzSEfaqfAYB8ET5bzcujTsXMwxNauJaRJSe7S4jxZJ1PjxFKAgwyQtdSXGLk2Q1HDS4pz8QVV",
  "key17": "ZitnoMzWQQq3PWf7bqm1TagqgtwgbZJAGbBKKKJKMkUxqnyQGzDe2RLzWjuzsJvB5Cpr2siZu8uzq9bWCHM773W",
  "key18": "24DwxiaKS6MzGeVBnmK4fAqhAiJ4gNX7rxa5wbc6DssZ9iwirAespwoTYBnYNuZ1fH7PF5MVZ6jwPaQHAavuqWWw",
  "key19": "cJxLVEkpEsafVu6i3Sn4V6WngoEp4Q2rnqz1pFeU1ooN9NeSYkMKdcCKfH7vof2XM72hrNjvEoVeQrEqavt3jec",
  "key20": "61vkXBcF26HvBERLkXy3tpWFBNjJr82Amvrd9pU89nJc1Nque53LAQK1owpfgMQrNqbyAgVxyLXmud55VshruG4Q",
  "key21": "4qUovCaGBb1rhizzn6cZ89dSP8uvaPFaZ2PhjhkfsALvCWCMS9zbLiTkBLDyQCe3gyJacsVejJJGBC7v5wUNJhKo",
  "key22": "3DSAmmBw91NXffEEVguEJLVpdY4x4tJ6fhyTG3tQWhqDyBoAJ4HGrXwqHNwgxtQm1Bc8xxCjjW1or7LzGbC9949g",
  "key23": "26CqJ3b88rd8Un5peqpM1DNfP2ZRGMQeKMTVxsdrE5vA1ddmqZ7Mg4FwwyL9TwjzYM9vXhSQJLT9P2yiZFUoYdMw",
  "key24": "t85heX4vLdY5VnkQaJAQB1SNeGbAQ9PWmh1gxYQoZnM7hNWe3XfPeSnfCs9zpXZH9kT9WrHqkR9p28wT8MPPDVa",
  "key25": "5FpyxXdXhR3LrDxLbcF8PWdSV3mhHVe7YfR6uv2u46Kwo3DJZUYKUff5rYs7oyDhChMh8AdkoYcRZLUNYWjshMdq",
  "key26": "2WBzcGGiG2a3Xc1zGTmb9DgSALw6LEtz8V7s73z7GKQam7Gh8MoaNq7fLgoLYJUZjfrWvZeqLdzyP6RiGAGach2Z",
  "key27": "21VmtepqKihvFA4ebQmzjqJVyG5CXcXNRVjsoWJxS42XHZvDHCDuFbKiPqN811tmGSfSghdLKM2m4BUii7FJ4xND",
  "key28": "9x99vfp7QbCpj6nzceLeUbtuksj2Xa9QRkwfkn9USqyCEV35diNyv7KeNFnYUeprDWFWRXLriSMEsUA9iTY2VXW",
  "key29": "gANEDsgVQZPBYjR8JwGzki9aiXaYSBD8J7XLzHK4yHHfSewcgypEwAyEnYX2UEHQ4DY7pYQtEMjgEsU2sf2Q1Ej",
  "key30": "3UpP31P5WD4nvBCknQrfxyQQeBptWukJqeLkHciiVPd274GYCsRzgagAYNMY9zDKVMBoffDEFTWsiz9P6c1ZnrSX",
  "key31": "4NaGQ9MBWLXdT9KwKsZqTwLaPsasDzefJNBWjkW4wSrXvHn2YecX5jJPFGh65zWg5NYZHbsXZU2enW8emobrmHY6",
  "key32": "597gD8SVJLbmUZC1twV1ByUZTgaEFkKpDJCwyCJPraTFwowVm95CZUjRTUQSV2Y3MgDdoE7Cz4nrPEJkZmG6P5Gz",
  "key33": "2bxyzSzbrsVHJ4TpcW3JnzqMBUMdG2Lt19CQKX9pqLkKadu9opfeEeQkFSoQNPGuth7hFg7ZhcF422Tc9rSkQPRE",
  "key34": "4twMj1A2mhmqQgu6xshaZ8o8xixViHtaau3AL4muagVnqd4BhxVp8UfaGDdBkcbThPm3RfWwessmwvroFpwTs7hX",
  "key35": "5AiiqjzM2MT8ycRyk8koJ9FYYD2eBgV4m6wNqSsU6brhEng1rudeWAaFPkfYMvE2TBXehbmraztQCnUjfKPwoDok",
  "key36": "2ULFBpz6xSbyhXtCJdws7qGw45eyGDGY4DBDPbCDeDzMXATS6SAxifizKNf8Bh77LqTqg842ZgxQ622gP3znTgmW",
  "key37": "51ehL3GzS3CZtgkcZKQuiuwxHSWH2dXtrgPxFULr2WRa8KuXXYmPxcHP9GKViacfKZJ1HhmALinFgQyJnDvW49Fb",
  "key38": "r63GimX5EXob1ifmX2saCefAfRst937fJq1k7iADfgacKyN83aPsAAKBrSZmK4KLP24Xq9cNH9VwrGSYtGqJsUM",
  "key39": "65KcdAM3bWW8AC8tzphCey6H9MxwGsvVpM8n5PJh1neimSPTwUDXWhHEMfmCVEpcFozRwmTeVNeQ4DMFhD8EQHAz"
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
