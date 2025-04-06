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
    "4xcMrxzFtsNE8WqpbsYMGW8xw838BqYgw8CsxfE1HLNpqDo9LSJG12t96kuQG4G1btSdnEdmcoy4Nvybds1rXMsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zguG53yGpEofhfQ375otdVYFpK35xJaT49HZcraYjpuBaU9T8pMQSkDcz6giLj8c9UhVAgUGh2n6z5jWZYEjoxD",
  "key1": "5jFxvsPuGua6u5NvGZsCJjHGgmzUXCp7FvnYgdwtjck7WELCxZoPUjG5Lfr1LMuBpdM5LzWvyQDPUBPx1BRdTiJ5",
  "key2": "5PQGNyB8mevqUxHXamxxrJLDwdowUprhJbx8wzPeCgTthv94eRJDJerV7EnMGehfRq8B1VT4SpnRCwaYzJxAScby",
  "key3": "61u7CyAi6BsLRfAMesvjLCwgHa5cKjes14LaoX6BwzrHxvY2aRmVxG8XsZcom8Pe7BzCeYQmyJ9tb4opweLJjHww",
  "key4": "5he61aSkPTb5gAa5DWDuA4T1zVkG9yGxBNQF8toV5Ygn61oWjpKAvqNkC85qLv2g4hQPG4SzYCYyBsuTYX4R4q8c",
  "key5": "2GHo1VX7JaVpNvmoJ7fzbWoGgLMEPYt7uDYsceRqcMaLG2eyyuyQr9X5s9bDTzyX3kyT5wEK9nQuXKKq9AptXpyu",
  "key6": "4szwYE1oxVtPwuPi3UDQoihgazgL2WFs8DgX4wWf6HArJtCcEtUfXGBXytwQHBWGrSPybh6KSJDNuubRdfprV899",
  "key7": "5Bnzu12STmkLEk9D9ZnUPqqr5QctWbTFyLiocCViepQAXarVADpqtgwBmQFUHiU7QKjBjSVW5sqQLR3Y2Py6DRwZ",
  "key8": "4Xidg1Xo3xEjc9fbhjarXb7GKPbUDZVCKvL8tQt5Ky142UvsqAhQus5Wfk8nYEN5qYvNHPxv2aE853oNUtawqfEL",
  "key9": "49i23KziwYoiLkSydDRuQ6Wico5MP3SmkhPgx6oTUGGdJkPQxHrGYAqJUibTLjn67LAvbzoZJc2e1LscBBajaSxS",
  "key10": "2MAAaJpFUBFQJHAsgBznGBdFmo46BkmMzgCroF5zdAyDUvXnoCtBBqq3aDVzsMA84XjZnbw5SHFGfVYH823gEuPL",
  "key11": "56DaeFBA2aHsZ42ph4gW8AM4j1S88rovr8duAcBH8EZvJnA7oLQWtVjapiy4oXSP5gsoEWNqx4rJGujYY3trdaGH",
  "key12": "5STMiQ2feF7QChrqnxrR3fMNMLquCyTHXVJMXYdvfDHbonNgcfAQvrYwAepwHoPnD3CMxpUYPP2wKcqpvRLEdjXk",
  "key13": "CvEMN7dnt8vFHFonVXJh2D5oduwjpRCWP74cEtsJMLJVq7U6LzGYzJaYvWwvhrN7YtLR1z6BXMKd4hK3Xie5B44",
  "key14": "5WawhY4LVuYpuXmerUbx9UVLuqZGMLrGCtBfbbuR4J4BRMYSePgie2iWJBCyCjRMZ9EBHXaniLTXCH4RMdXmP3M1",
  "key15": "TewjJ92oDHXqPkNueAwwHWMpFVGNtwh251Ksi8kNHnnqYoDfEs3XbfVdKp44yq9WGynLCNwYhtiscYQwV78fiYR",
  "key16": "5tfPv8UoESEBjyMQMYBXUQ24zvQMs4ackKAbvNGy8kWwmxTccBMRXwvizmNQesrEiBQPTX6rpXP96sbZJCLmsi9G",
  "key17": "zWg26YHekHqtUyuW6dFy3YtViQ8UrQaYPQwUsQUz9sjvXU4DVrj1eo8DK2QvHfDmNQUHWCKmgsye74ciY1yDbv6",
  "key18": "58QFs82UHNe5DAiYJhg5cWSYFxq2ZzMqP4YteSshVqGC9HAz6ynByhx2XMZDY1uMqkGKxKBn4JY9fDf8HUxr8jmD",
  "key19": "7xL7CmuhgVZpWmRmy8hYvohyKi8qcLKkHhR1RaXQnFMdmt9j7kovGtXomjnpwSrxwdKnu3LZHFMcJZDdGWY1sox",
  "key20": "3Jj2b1ixsSbhV697N7z6k6Uqe7HHfNpGMXVorLgLxaTWsTbAM5FKnhDAatj5h8nSjktUZWkgsgSfgaLYD796KJWB",
  "key21": "4cXfAwANpnAsUjB6a7QcMDebv2hzDsoMF6tGC5ApQLVnUmkbma1KznvzN3Q3TVfogfor6nUEZEpNz75HmD4eAgrg",
  "key22": "2K6gcV9nRs5aNjspxihWN8zZQnJbNyRd2SSxytUJdDAuGarZsSnUJFxHBv1Rujo2Hd63AeqB8uDKf4kpgGxh37va",
  "key23": "sGLaCB5hJ4k5nAog4x2jz5reD2fP6VptivcfWRyXXZ6LxdNGVq82vjqxnGtM8XEZBaFD5maA1Sdv6GGGr4PVoD1",
  "key24": "3TiqPhQ74UzQeXbivcYd1XcwhuaE2Dkb1xbuK6FzwFRt7Nyv8UYHx2yzxgrJm1NNdFhSU5KH7dxjckFextvBe9MZ",
  "key25": "4QNVc3CXWF3cBZE1XcMB5w1s6WdohX7hpeMAAjF69VdFZrZZv1tW59TPKBUxFU77gis7LgUwUHw3CndHjEdh2BA4",
  "key26": "3qyTYtprez9jP8mTuEaJjNwTyyMDmRYZUpuwNUuxoe5LZvYbWNDk1mDVipzF1EV4D8gKdYpjwDSk5QiWT3KJPws",
  "key27": "4o3SEGKFBemrK221R7pEu7N1wrCD2FWqivybsULxXmyZZCJcscTRofFpRVgRwxwmgxiYRQg2i2yMDpCagbZCge7",
  "key28": "57ry81JXkqjGv94iZ63joMU1uLQf4BwdSwTpjLdjiL3QQeffD4U5koi59gCCqUSfWRBVSKF75LhtWFfmV5nfUgNK",
  "key29": "5Ux2LtjEHnbscK9HCZHhhAu8AhxirjxwLNLV9j3i1MGhYMYVm141D7kqYxBU59Mauyxo8BKGLghNsonkAuvxRdBz",
  "key30": "2aJNBV9j678VoaGt42qjxo6pMb8Y4YTKFFxHiLDAn2gNQ4qA1rex97kTY3AbGdP64KmE7mkTrnjqEMBzZtLF1xTe",
  "key31": "2YEx3Hm9kgrYozEfaT3WicG8GScyrGQX6ULfLvGLRErwzPmjPhAsJ2PW2zPKAV9dnBUY8CL2zW4Ad1juCN3z2AFm",
  "key32": "LJrQmKK1mhweDRwYdmgGYbTN9Af1TpJG4uYBh8Ghuop3q3jooxV8UWmGEDiijS6fzPM1K5FCoskD4raZsFzRMyU",
  "key33": "59BH4EjqQU2jsJqQDtAZUoUPJRMueZdGsftPYntCUNd4uoW99zTSCehkN5EtNyP87ZviUG2jmySzFtD2Hw3oUDDb",
  "key34": "3auzwLxnD4HDJDMt28feWVpDXg357P7dfMfBWLDHCwnzfZE8Y9wPSvsEU1g8S89JUGUTDvwsrZX9ZoNJ6CNAwkmi",
  "key35": "rXfpnS4z6cRNj6dc9drQdhuiFSdPdvL74amamqK1K7DPZsswYmRh1GHKQGkwSUYVhRh41t58JU5qk5cHxuDEuat",
  "key36": "48Rbmri677wuvRxZ8ZNWmTDVyeFGhSy2CSTh1Rgxxx4gFQ5d7Ljdpcd1nwd1KMLcYmdzdu3fcJ6NKGY3ruW5mdWT",
  "key37": "3iCtorC5BnQsvN7NzQpLAPuaHytcDtkMPdt3B8WWkzi8EBUdj6aHa5RLGRDvnbYSvWsisQ756roaCD8e9wSFEB5e",
  "key38": "3GMK7pt6EJYCsN9MrjMJbt2uvxH5qid6DqCrXqoLPAVBDmWZ49aXZQQxwE7SiWcPWnc6ZpS3DrPYZzkef2ymyW6Y",
  "key39": "3N4VikfZwfWfYQ9KjSrJVy9TifLrjFj98WiXwmp2mE4L7mqQM6s6mhZo64K4T12DyDNThVcRSTCBwu17FeqqeV4F",
  "key40": "URXQ87GxLFSXFgcYB6yJBecWn5ssZ5oaXMXSQ6fjwzv94jBB5wGNwNJwQDrNQ5JkFXBtLFTBw3JjpL68PNbwjvz",
  "key41": "57Pr3hcfJ1xfbc6kHV23MjzJJrwzVbNVF4SDVyTi3DzjWx8pLdJfggqJvYwsUYYHdrGSw8iwsds1udvZW25ymZJk",
  "key42": "3Vj8BJhMWffDFDm69eU2NgsegfzzAfrYUe22yo8H9CNiZPjm3r16hfcGc7pEB3dW3sUr9WkwEoypGryAUNMougbP",
  "key43": "5NjPZUsjk7b778NVMk3JmbcvFEW6ZHkKzde7siL421Xdc4dDBPqj2cM2EStpkXhDwZwe5VzR4sC2dUpVEien9Se6",
  "key44": "5rz7Yf3X2nHiT8U55BUWKnePUHEbPPQvRRvzxVigEzgZ54PCk3kvifRHguo3tLuMvop5AB9dE1jghg9yJhvxR52V",
  "key45": "2gYktqATd5EKFUgPFD8YJmkuzbjnGJ1AEZ6Kv2FwnXPe86ecoHbLcndBUPVnBSTTYDmQtxb46k3jGGPx5C5ky5cb",
  "key46": "omnd1RrT7YfSWBBmUHZT1BhqipW7HWnoDmnj34v7xcFQWnHjF8VEit7yEZaRcQuzimTQT2SEv2EN2K6qyEC3ZWQ",
  "key47": "2Ha1DyqgF9nwqkBCnYFwXDgHuktjoTBw5vwGCPfzWroqnjXyaDACFARsGahTLsCQ6GLFm9eNEAkcFCvCXrE18Dnm"
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
