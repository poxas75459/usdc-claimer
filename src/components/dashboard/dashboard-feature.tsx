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
    "5an8Cxbn1pGAtguCocfRaR2NosRt5vsoLAcK1tqpc9f1H3Rgb9XVBKZdEnprqTenoFpUCuavUHVRsbd3YmPxWCTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63MCx1WzYc9kbiqEjfPe5omiJ6CRXNh16boK2FeMsQtgzaqr613qkCzcPzVHatYMXkhFAVvjC1uYVRykV9Vzh3VV",
  "key1": "5PrYeeMex97rqxRuEzaXKQoAByQd1LoYJ7V2v8tNUh3JYAT5gv4auTXmjdBg1ps7i53AArNSPVwbNBkPqRCDLUtz",
  "key2": "4YhSey1UXadGqPKBvivFJ5uosrEcvr3hHtLu2U4E1Q8fp7Z5oiHMVBKetfacdmipMFre2gc9sm1CRhJcLRzf2nxa",
  "key3": "3zTLK2rYnG5CBz2mbGzrehpPnmMRTxQjMEzqUB8jCcARPtjBcxLsrX5Bmf1ZRVLR8EyyqB2UePaon2U6TAZurBVp",
  "key4": "4fNTpf5ai7EpR3s5ER2hAYkRYfq2DoLZ1YHUkQX7r3WhteEYabZSSLMLmgaCoKwYYZYqYFTa8jVTtCg5kaxA6P7C",
  "key5": "57FpTBDa8uQeX2GAgSJjPAVRVXzYaP9rhGAtxsTMcnZkmkMVcFicLMWMqc92FKvGQx1cur8HAvEncvn4bc3okP8t",
  "key6": "47xN8Dz7BPvJLG9xoE7P49sdN3oCQQb9bbxmfU6Pb9wSG4nALGUQGigVtuZGYwDfkSthS3oUsg6FqRRGwHWgXcf2",
  "key7": "49DVShtnmPvLZgvseRyA9M8Ao9CKb1Spmm1HuQSfdf5xybJA928cyRyW7yZYf5WNknX55nndaUqAbubrWo4iv6aL",
  "key8": "5HMwqLKGR4PpXPbZiwYqgNdUcyoPDxrcskTQZFDWGg9vTbL3QpNSiQPCW9uEphPNJwjPH3D2Vkg5L4i6bDjFd1Vz",
  "key9": "2QnR4MFFiZ9MojMtnn1eWW8mFnsj7itdLVtJbzU7U2B7QPeEwtYWvbCmd2FcLGK6Vs8Li9nAhBm3HKWnHVa95BZk",
  "key10": "3zXxQvGdi3iCECQaGGMiN96vHBowV8qkZGHnvFMRxeQWiUZPQNVz8YwubXtx9j963MdMi2enBC9hQFXwtJxxLs5x",
  "key11": "4yHKWUZ4hTwqbG3kXiuzYetefgZKmZBHfq9fZ92zC6YY5LiX2KgYHKEe6ddiccBPz7hA2f1BqWejNk9c8Nb1tXAK",
  "key12": "4hiNU6nmS3faauhT4h3gRJo4muK9Dmc3btwS1RKiE8nNR5oXKHuc1xYYG4W2Hody9ZrACXyHkLjMiFTp628eui5K",
  "key13": "2dWeUjnKCv4v2qz6Dy4et9JQxL3u9C1UXXomUv7mXfjSoD2TXsQuh75ZLXawxtUUmLQucw7LEy3nnVz3W1WrucbD",
  "key14": "tgJ1prpRsNsqLj2Rdf3dJn9CxoQDbDfkQHV2Bcvg4d44dVbsa4Uy7Zkyf1xSbvvZP6cbtMH1g2NhTpMES53Wgq3",
  "key15": "21Ryg7vSpofusFRkcqd7KSFm9peazXRKA4h8qQZck11QZM8SMLZMnf2jEzFmTntB4XgwobQHEeJ39up8uS8xfuxF",
  "key16": "58kdn1BYTyop355E9kbEsJMMDqWyRso4cD5cGrqfVDS7xCkMbRE1D2dP3vKetdXPSFse6RCMC9FahkE4NKGNR25h",
  "key17": "3vui5w67tg2KdqZt9KKJCgbLx9J1bQYhrCAvYB6WByMLZZLJWJ8yUWAgm3LVBG2EE8wdtcDmfwCnWNe1ZD2xuqME",
  "key18": "66gbHKpoaCEMmjJA8YyzCQvBhWVho15K9bpG7LP5AJNUbyQiz8zHBkMd236ZsDN6ksy26QuwcZsBfyeoUePtTxyT",
  "key19": "4D82LYQicrBh4joKhHZAPVhBbP9ij2b6ZoDtZHXcT2eGgFLsdxLDbiNZ4SD6odV9tfKoLhSjBadnYP2sDr4mZgTe",
  "key20": "mHMTCCAwvJ1e1py4d1FUPoB28bLC8HNAYcdGe88v2Q5LEYtA7RPqzeb9SNDSopNPe542AdfRFE7FsfqS46i9n5D",
  "key21": "2X6qSXaqJRfdU7yqGRVAWKDtDwf36utNvMdRjCyaTEcBx8JgT45YYCgUyACBaU7FBnC7AFmqENWZyNeJrDWf5hvu",
  "key22": "2LHjkJ4tK92aL6tMdJjTDBupCnmaFq3aYFR6f7n3Kpe8v6VvRRKL7vsi5iD9MWtYB7Z12pkscNAjyWL6NBDciPjy",
  "key23": "3WravwSPKUHrmrsA6Y6G4oxahf2F6uw9dDeadkk26sXd7FEHHAZ61WLN6eUjefE1Uf3oxBdiBzKnP77u3hiTt7EG",
  "key24": "4xJeZuZxNV8HSC1mqKfDt6BibcLHK6MZtqHYK8BBP2U2w2GVXVZcn4wcjZbt3mixWmrm8zRd6qUDz5bh92pBHMik",
  "key25": "59Mtid1UDCo223wkzDxT8xFrWbq7VhyRYMY7ZLKxA6FxTmjFN98Jx8PBn76B3m8idZ7hZ7fDeHtC7sJijSBdCDTe",
  "key26": "5Nc4XQjkpWtVVf7daUMskgo2XTrcyxLBbwrXGCiddkAK6f7Rix85zZLut6aLP7RhCvh3k5wnzCLS8rPAapQd1sE3",
  "key27": "4iJNyVE2KDHLRphJofMX5xoBNNPHkndP6x5LZKiB77GQtMJAPrv7VzYTb5K8TRwZuYQsoMgYxyY4wAqQxXUEMX6q",
  "key28": "54mpjh8sZ4d1WPjTAVqnLxKzmGQMorLC26Ho7SXAFKgrb2WCswdyA38thCrPVWQmhjZGbNintosQntHs78zS1Lu7",
  "key29": "2EfoNrWsvkstCz21ScwN2srRnRLXVU7P5M2rxUqUV3M5pTqEQvmkeEUQZDY7dquoHvRrMeotii9sEPBwouxaz3iy",
  "key30": "4zbUeiCofu54DWxfMXMTPFDsgiWtUe1JPCRJFCnqJq48FJdfRoM4HShRZ77d3vnqeWQKPiznQp4cCsDeibu6jyHH",
  "key31": "59Lm626azM48pQSzXV5LAW1H1PsKDxbp7NHz36BaJtF3SXNnQqKdipeKWLBg3oGv4NmGSbJ9bXneQdAwr6xgrUj6",
  "key32": "3rkgWV9kFMrx4V71nfwFG9c34YLqhp8qMgzjnnvyuNnhsdbFvnTBW3o7wep94psgKQJNEQfbpDeoh9jE8r5mw251"
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
