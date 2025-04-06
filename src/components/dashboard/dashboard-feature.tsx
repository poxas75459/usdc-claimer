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
    "3C93o8PgpKVAdVPpU2gMNyD5PDhneCHvdkx9ynwgRM27pwxdwVzvHzqh1QGneS8xYbcYiDT1TREXhRPD8zW1j3Tm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39CdMZKMAAbmo5ibgpep1wbD7bJjX9tkUxskyEcfzTakiDJWVcCHid3JBZwLjmBmbyZ4BJBoaAiHYbQhiFPcNdie",
  "key1": "2HZd4RH3Y12ZmXv6HKtJVPi6tT4zvJivoRb4GnMmYJCeHVegARLNvaaSWLZ6XEi4XwBDqRqgQWx79fzHn1ES8Gc4",
  "key2": "4CUHtx7ShC6v7fCrc7EERTBWan2cPS2Fxy5r2xaAC8aNCUgSDKwWMHDuTkAPHivo8D6T2T8pXMa8Y2fZcYbJr9js",
  "key3": "2UFZJFieye7VpKaHzPLZjh9f5AiatFGygRFvGu7am5zc8PqNHMNL3xgBX11kpgGjMtG225tC9nmNfNT6tGmyVcnY",
  "key4": "47vtYFFMrkpANuBHS8KSMD2jGPffrQfaChmGMLBnoCrvhcqUjbSLk1mV7zqwVtwbx6P4837PGzMxcArmpJgt3uh4",
  "key5": "48jEa5QywBwTs2JkAsgzyLJR2tb7LaSXWYkfJodY2ch6pkxDFNxvUK6KZa1dzk2Ahr1jgt3a9XqczNZdfiE1otdd",
  "key6": "271HMpyVQVCHv75JAbPVh88WiC3Q3G1ux58nfYarcTz2z8m3CGZZbUq2PXxveYaw99VScJV8pDUXHxytonYbCQPZ",
  "key7": "642HS3nS1uthqLsNDB6Dn6qRWqGpvWjMbbz25H7FJ4y1swJRXQ18HXmqdZ4xjbWx6U5cJ94xfMhyxDC51VAmvqsk",
  "key8": "E3XXLCpAxgaKQG3oovwHu8QyYsVCctFuYTmLtKJvAzMGayWSkH2EE6nfCmkLMrKXZCpqqqdogWsCWa8nQdJeHhU",
  "key9": "2ZMQmbM2vMZNVbnJEbske1JE1j8qJNaViTeGv4V6scRDgQpAwrgMvjM8HhNhDMKKxXiecbg2avmLYTCXFLMFr7xR",
  "key10": "62XvkqirKXRkgACVLz5kokpiuTCcVYAjtA9xQRKNRCqbNdy2ip8GusNY3HbVsESFdGAs9W7PkmxBunEo98vgWyGn",
  "key11": "3egwA3JhUP4mQbqfFGsB8F3NnTqzbAu7ovYd8x7Tyi5HbYNBefFwSioRCzF6K6aLHprcFacxRYfjVfxgUSsdh1Eq",
  "key12": "65Sx9QjTbrUmXmBPecuUv4ioEHweVdLnBNZUBAey4mQGfDVj8prNcrupX4XCHsPcu83VjRcY2bJgW99F6C8jZCiu",
  "key13": "3Z8bJR925Gzp3NemG2411coCJ4ekzang2ue3LQmiwhucdyVcjTFSsu3wCd2JZch3b1cg6Lj3XKTfZJYECRZdtBpK",
  "key14": "3HftKLZUEn4gNS2ZCut6N8tavwoV8HcgUC5BgmX8og4hMJ1AFYfsE9GgFhWXAUdRNsRbKsxDc8HhVfDHyDCF8MXz",
  "key15": "5z1PFkck7HLPNdZ7zBVYG6Dq46ugX6n9jU5h1PnKa2FnUkugYvbDXxDCNseyEaG2NZJ9KgJu4DPW6L2RRrq1uxzj",
  "key16": "5Wnv8yD9vCTd3NHqEuqk1MuwHxHLeJ1BntvFk4iFZDjgBJDzcqGsbETKLSBwEEdrLxXKZzeDwjt75Wm2qxJfZMnc",
  "key17": "5o2AP5Qtn8s4i6Bamkc6SMj5aiXYEx1DFDTWkpRbhAfHaW5WBFXuwotGVnumzhYY87YxLuNRar34hueqeQZvSrb1",
  "key18": "4DK6xVFRZw1NsqtXr88nnxG4GS7qRk4MhXYcNdnDALCAaXqZLTHQSaZwYSXgLrmFMQNoQchJv9UERrC695wP6mQ8",
  "key19": "4F6ZYhdupGk14J5v5cPz4EeyfgXrpnBZsAW6zW93NHfQvUqpZqAs6BwxZdnAQf3P9UK9k7eKy2vAtGpzAaVm6us5",
  "key20": "2b9A4MUmWNToWk61JnUvWxQAYqHeLsgJrsbCV6oUCpp7Qr89J8XRcekKjwuhQX72Cy92P17oLkpCPqDMh3K9pyUP",
  "key21": "33BHc1ofTBPTkK7EKmJMsrXtNGKLEa8wykWKEztuv8sxsx35QsVQ4cfupLY2wj3zJv7e131XMVhtPE7sGTDA914H",
  "key22": "4cbbehpde8cgmVK7snS5qq3jwjFFAny4jPMJLwCpX2FVEFVkQtCPTo2rDRn6GkF6688rY8SXXApk8BykKa6SWiww",
  "key23": "5mhutqMxkcoqMxDSvH1UzPVnkxJeM5UvJ5mFDmRMEUa15so3zF8ZPasWcWpp8sTvqj4rRhb6snbqB78gMPXsbVKS",
  "key24": "36dtERNnzxVGwDemGkLfJNcEPMzMLrwwC8VSYBHB9szYN3D9hZ8zUGU5pBUpBSa2vx6d9CNXYmKyebLYxVYSSG3L",
  "key25": "2b1X2LACr87EVQ7coqiDMmDnfW2gQ9eyiidq6ZeaNUci6dfomtqbTMPBY1GnHvuZAfMafLbazbcw8ppSQafUUBuj",
  "key26": "i1gM4MTHvGKswbZv5L8e1xvQ5GbQxso7vfcK1fm9WkzGR8NmveC7f9HvoZ481aakiuy8d9JrBGGCSs5945ihyCA",
  "key27": "5P3TNwfNLvHzG1DdiNbK8YoubXLMh6eXGJkJu9rWZhUAG4dKa6wu75x3Uhz8vFad5R7iEpWqFVfPupDHFmrFQ6Z6",
  "key28": "5iJkMmC4VsgSqrqdMcSGpS3DDie5nh1fK2Pjdp59UYu9yvrMJFceEDjmT1MrCuUHiYxNKa8RCK26akcnd8CR4m3h",
  "key29": "2W39JKQeqe7qVQRHbLRVXmabhfmSqPQsbVdvmhG1hQjFmfLN7Mf3kWThWYHnYGPEcbvMESDy7PR8RkCcAamB7uCD"
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
