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
    "2RCndVDYH45wPR4PuLW9YTxPZTdmahvzxaCnkycXstboWkAqteANQWLynSRZYPzNtZvdfgcz9m1WRhQZT77weY2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uHJ1T1fgPWQ4WRmDH5Wqt3uSk8AdR3RAPmHe4GZe7TUXteniSD7EBpQ7HzHRhRefMWWk233Kjspkj7Zx2dAg2yh",
  "key1": "3wLt9SQN5z3YCTP5VV7JWk3KAx11usb3uBo9ehahrTLnWbqFCVdfrJYWb657PywsjFT8FQKyqoSLjV22PssFnTz1",
  "key2": "LEXnMsXATGtWA2Ag3YrHNDFNTe3p5xGjpz5MJfHkSpxcmZq892FQ4dzBwfJMUQUxFtMaQ8SzzDYnpFgXW7J5R4z",
  "key3": "4dFUv8Uvkf6FjJc7iwRou8bGBj4jFxJAo6vW8njrAfxU5evdZRfaTDbnHHDQd42bpYBCLiwXk65NnRucxYjBSCs3",
  "key4": "4QqqmtWjDxj7vjRX2srf4qYhbXnoXqR1TN6VDTY2w1GnCVbvp8DPhe7YxgqvTZZiJRV61Zp4kHwRMJJpRCMXV1zh",
  "key5": "2wS2EVbkizikFLDNxdvsCK5DA1ZyVRVYKfnBugQddMocQ2hTDkHWvbyY8C5w5SsjagWoB9F2q1QuuztPh5Bsgp17",
  "key6": "4UoRp2tsPYS8JHNtxgf23z88Mg5A8KViU8izL8LjoVbx9s12iJnKAJr62ScJ8CXkSeHNX8AsZ81RWpYxk8Tiffp",
  "key7": "5v5qjBg1FyixKvyto6CY4fBzmcM5krKvkWjeZjLyAH5JcG7gBuJpeHjUXSLywhccS4Spx5t8kgYnpDsqu8fH5WH",
  "key8": "2ffc3MoYNGWJ5qe6b1Pdvqi9MGKhbhjViKBaVWJAK97K8qStyWYugXL4gSi2CbLDBzwNW9cMjs8EL998ThqvP7Bp",
  "key9": "4MnFNTWPXRjNp81baf9hq7ZpE7GKnpix6ULjKdGmUCzsa7b4eXkbWPCmvbQPEBJVRDvJHtno5G9BGUVUR4kssuPL",
  "key10": "QFxBLZ6KuDBmah7YqbErry32f6xGF73ZXJiwHSV96yuGPsZNcF1rTLoYFdioew1CXe8rArmSUrk9KyjqPQAcdgS",
  "key11": "3kjmkHGBDSt5WMgKhoLA7hiRQGhkk84tABynnxLdc4dJTF7ZopLTfTuNeU71tSe3J3S3Ti6WN5AttdyxXiozsujR",
  "key12": "4rER1BEFGfaKdWrDQdvUZaQzseM6YvH5k8XUdeokEzXQCmMtQCvh3VFvWLbU3QE6dzzGmkNFxmGNYNvCGCkEKSWV",
  "key13": "2srS1bBE1BENHtbQJ1dAkpcqPAJrxZE7XscnTn9FA73R2bkmXgxPQpLQVMyJ23dJKrqJpKU5pZhnEHdn5pdyvZuB",
  "key14": "TDeKVeUK5rWC2g388UgxQRx3yuVtWT9pJQADhZTD1Rthd1KU2WXQShwqbwbihgBm5Rtz9vgnPLtGukU5RKSZgFx",
  "key15": "4nVUHUBN2Z54LAkWyYhHZ7fyiD8tNBMhi2f6MVNxD8nz9BZjtoaKE71H3u65HB94eMRu2fJg3e9dCg6uwT422xJt",
  "key16": "NRjNg7q5TkX35iNC6XtSJNmLGiSNR5QYpxuZLNiHeqC5NVa42nkbfFEmSTvBd7yLsxjPNZRMn7s7Vpw5ABA3k52",
  "key17": "45oTQToFeUp2DvuUjYii434SjDKuYW1cxdSvFiWiAkyNzhx7fSS6XNRod7ZQjdMShq6hbvBiAiV4Z7oWx3GEhdD6",
  "key18": "f5StN8vegDQowSBMbadG4KBGcacokEoNoCT1AAmA2QL9Tkyso3dHBxZUNfvUZNKzQSm2tU3NQYyXnJcTRE9ajmy",
  "key19": "4qewzdZ7WkeiMZQQrusNrKzY59tvDKrNFoW9tfUkbPzf22JLFwvw8R2FtrmcxqGvcmD4vbr5rLVN58ZJiiQKpc1N",
  "key20": "5ufx3wskpBKdz93u1HtToxsyNVTnxN6ETQhryzbB6MfUoxrMGTbY4JGub1HrXNX7sMrN5SUB3cz98ivzqptmuRZo",
  "key21": "4e3sEHCb2ebNYdSEku7epCgaoiPQQSrYbjUKQPMpiS5YYZ8ZYy6p9WjjMv1VU8KytsBLxRpANoaGprWtqJdNe2WX",
  "key22": "DbLA4jgLX5G1wnnZ6yKuFuH5eNR8btFH1yZRbcd7r43c3LzwM8WFk9qGwwkUCBBpm5qU3sZM327PbPF5jzWfb3q",
  "key23": "2HLEr6zpeNKXLSENrmAnaXf2e63h19riYYQxWXz2ySsk9xsdD542egBw186MGQMZJ5FfJyvCURLro2FSYPaPsxkG",
  "key24": "665WjZPpLuVtZqPU39TASytds4w8n6JojkQhMQNpsUcQSC4i5jK3HcCWVi8qxJRLxvtisBjK951auVVD4U28fo7F",
  "key25": "4vMLaF6iFNZexZahWVNyYcXFLEowWwrcSw3vCqNzQvwHFqgSSBu5N2fcp2f92SdmXHJ4itjjWBAVsJ84vhxcyKUM",
  "key26": "2J1x8E9fctpde1hAGVt4U6p4P4GRZFUywH3dDxobQkBggyrXqjpAGAS5d5FPheBA2MjPt5niTT2NTyMSLrjnWEVQ",
  "key27": "4iYws6H9B5ZyFvbHvMMhtTM9PEBBD5QV1nbS1tcEBFzA8yyehuj4D9YHPAiE817N3PQrGP3YHbrBbmc2pJ6EEnKx",
  "key28": "5jNchzk4ETvrZD4crN2HFYpV6Mrz1waAGp96MQqoeFpcKUvyN7njUYziqNn8YqX9SnYi938kQMSC7GwvXrruNBQB",
  "key29": "4EzzFh6NyXeeoNgLJ6qE2jotz7FuiA7QHcjrPEmdAn7mbYcXBdWFihDySEWCCBXDPFxheYe6qqRetSiN3WDkiz7t",
  "key30": "2BZsssiaZmr5kDJdJhTxQ6hSQ1snrJV7CbuWAeiikqvZodVUocvc3huhUfsSgjrE98rT1pABWSPhsojNuza4Vd6C",
  "key31": "41KgfJa6qWiAA17dLKsqe9fhwHFu8Hg6swbiwbZCsyuJYhsP9XoZrxPvBz2NyG7NoFdPDY6w9JLjWk1SUC4NEryk",
  "key32": "Rf6UjJ4YsHxFAJXNTLswBrrtqrMjwRUdJEmfhhjvqVJdmagiUuqqen4F1hLbbgyTyz6XDk2Ebvaqehx1qSgBB3M",
  "key33": "CFHeuNX62qgE9TgBeF49aCu8UyfgLM2osUMnr3Zzzi3jsqYWuzmB1GSqeeqQDuUeH1ZdyLbWai1EBSrob4stcVt",
  "key34": "2oF3xzCmYY6sEYHCpFamc5jz2YtrXnRSNwSoS8wHr9dhSEmfwNAhLKbZFCmZ3jcgqFN5bYZzmaCF3QUQFLxqixRh",
  "key35": "m5GD5ehQim6Wt5En9YkuJPTtyNAjdMrYiMZp7K8RB1JWiMyb2QPYq4RgN5nFm9sHc2dcNFV16DQB3QzQFUWKvYi",
  "key36": "21czgcyxHdiZWYRhvqV4vbjuZRRA8frxmTFRz1UKob7y8eVQXEGS9z1Jmm8B91QoEbyK8AEqfcyVW3PaqAuuwNDi"
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
