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
    "qDWcGuCQ3SrHTQVVMFtGRDd2rXmn54NzYsqWCxEU3ftyLPtwVN8Nu7YqfH2KNsyDcbm3FtneJVDxbpY32qywzoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rSN72Q2E7t9vLVyoAF2tiPfWiNKNtaC3cnzCJnb1USZfhYF1bfHVPLZ6LNhWJAGH3dnHP1aV1csw6SkVZ85oA6w",
  "key1": "4KriM1VZLXq1wDUCKyeG8qvUpXQJu9jQxwJzS1JAzEdCuSjZkCT8PBkfsALrTDHXRqxRHbHQB1kxVBkcyLCCT7m7",
  "key2": "wrrfveRjenTnFwqS2gikJMfzaVcYhCZ9Q8FGSk9D23k8NGU2G7p4QsFEyToVQ7zVd9qbA3FKCt6MS822VUY6yyd",
  "key3": "2zjyfGr2ZTFZ3NZML53Z4rRt1hQ1FQDX1Sz1etivTEqptXwrpHuZdf2gT3MWHdhupApnXuxQUbdywaXADFtPF2Kn",
  "key4": "4eYtWLbhseNDnLD3xU9MtCAbXcdwxyjSRq92sLmYxciREuk7vqiWGG9RDjNG3PfEPnvvCr9hE1pijnjLXbGV7CYT",
  "key5": "2qDDy4vdcAiwKEqzwAMWTjJidNzQed8AFSNeHcTEKHbuXmvMD9CV3rJdWGYTXF9pwKXhaP2x4pSULkwiRmw6DNd8",
  "key6": "4uTuMszUcCK1TENvVrUdytr4UFAxW5PwvZVghn6orpTNoN2Db1SmeLbh7e7i7T4LefJvybgXN975eUDuKmnBYgV8",
  "key7": "c9zs4X7YpPjqqYRM3dUjsBE9zwTKPJ7VduWsBn9eyfqDTaYxVjKXXEquFujF3MYHKhBFrNL3ixR6mq1JdfrW7zx",
  "key8": "4ZMkAd9KMhat3BrRuCb5HMhBtWNqgiWULa1CmuYPy1RXeNbiNYNvqCWBzff2M4Mh9FyrDNDkYfcHfMcPJVdZRcwe",
  "key9": "3NQfp6iEAj4zEsPcgR23oyRbadj3DfBaZAGxwoaLthRCKGcjTF1msDvtprwbF39BNps8j7krD4SmCYipvYjuwf58",
  "key10": "3uJxbz8QLRkcVoyXtMZNEJao29BYrfgw5P1od761GBQA4gQYW3rFSgfoqH1WTG7AMzfibA2tP35HHYsjuBm1Fa5R",
  "key11": "4BCYt2LjrvjY6cU93DqBN1sSsyGZdbEEbJziohokFy6xsbuaVjWcwdeqybvNHV5xRzZZGehrnQCaSzf1oRXXkomH",
  "key12": "UPCAWH5ubh634QPgaEhCM8icTNUHHLP5KphRQhCBmkbYGXjyasXjo9nerPs7s1uQ3WAAHgep5LrWPgoVkJhJkVf",
  "key13": "3PRmK8g5iYfRcAiD5BvsPshur6PMB46uZ2kBnvw4MV3aAMSsUkwczj92hzojmkKKefa7pmkpPJSwVF6eek8tKiaj",
  "key14": "2Qj5Cz1ky3ZKGijJ5Ztcsu2pejrusjiF1ncqvskB8Lm4KVLk6L2hLmMRCQbqKowTLQDVySaoZgYt8pxGktEfpLD5",
  "key15": "dPgUf4aCbuAEztEGCjKSqRxZigoC39fv1fEBXfvktVbchL7nfQVdXwMsNUBviCHaVudzJU6Wyhm4Pg15Tioetvq",
  "key16": "61Xa3TT3UtKXiPhvZgysxu9YNedD4mWem2n9MunJRKBnKJppg856uNk6T7iWp7S71hsarinp2uWAA4rEgaRcSa6b",
  "key17": "4ctkNnGZp4QRGfWUyfqftmADEhjyKtnug7h4FYhDtbx3yGs5FziWQRY7fSm5z27J7gNWLoS5bKQiQU2s2UPByPFY",
  "key18": "3v95Mn6YVtbb8C2iPxQgkwVwSRyuXtcV7fZ4LRaxWdYkeWHT6M6nyB8E9sW2zc85PNCRbSm9okafTy35vVCjopBk",
  "key19": "5GXorQWuedsZSJ3bsWPxie3Mw3AoFg7RhCbNLaapezxnucXQtPsmBrcihMPCEsnvnLAozWsN779uYJSLBqhV268D",
  "key20": "2taXDYNxLUzvJeuaPb8okLVj6gXfwPtH1E1tC5E7bWH7mXFiqb4ZaNz7kqEH2QdRrt8nYbsq8eAccQKDSAxPTrPj",
  "key21": "3ZHdZQiaULKbgk7JY4fUd37SEd6emBb5NRHqMAHzrjWaVQN6kUZ3pBJgo6RDuY647EcgTdzcjt7DpMWuZNjyc4hK",
  "key22": "4sgYyYAqrqC49m9nZ24apcgBQst3qpMocG6A2uwGyq4qUre1N8m2aWLnjvrch7tEhc7a5tVLfcShp9Eg3MQtn6P2",
  "key23": "3yyzETigVTszaRgQcWFhujRAfVcY3JRUzgqMtfTQK3dXzQkZZZ1VnivKTm25y4R7mX6SEf1uTk1qBNyJ1kxCASBP",
  "key24": "5mtw2zGdbuQ9Rmo8faTZPDtASpYJSV4FQZP7EPRj1FyeV6jnqmH5wmd36WQk1UALrxfVF6TRM8Vk6s6pVyEMAUmS",
  "key25": "1sQDC9TZCsksbSJ7k8FoK9dM3DqcNmR51hd2pzadTzpUVvS3D31xPH5AoAdR54NFy1EY3cAvUwnMZugfcP6tK3a"
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
