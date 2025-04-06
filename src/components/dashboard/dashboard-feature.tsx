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
    "63kQWc5GweQQb2D5mQfb2TscWzyE6qqMEZjH6r4yf9M8zsAz7qUE938GUaDEeCz7LHYaWkV7T1yuxzRd66bhBVYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ngoHY9amYpdP5e78Zdr16JdgQxNdrixuM1ga1Ek7Jg4YrTqqzvc5kRcr3Wbv9PsKRNbuaEwWqTkD3RAN7CNFRoX",
  "key1": "AgtjeabwBxEFJjWPfKmxhy3W9ESUcUwQcBU3u6uqVt3sPHPCb1MQ3i7BBf2PxTHq1tZNHuh4oUJvyTjLH4SXeu2",
  "key2": "2eNGCpmtXVwM3bjjSXKSxdmtFe8gsXtDA1UNZQYYf9iz7EP7bAhkaQmsywmbcNCSRNQMDG8w2zPbd4jv7meuUpnC",
  "key3": "4tskTNMm4CPDK2fgzjBwqi65UtxgduTBZqqFJZTWCKcBE5crvo3qYscCWeDm3fRDrTXazpinQLxN4ThzNbrSxbPH",
  "key4": "4QDF2RKo1FK1XpiEAM1WqRw1H5uUTnDRG2WJ55dCC7BS3xnq4SKGkV8LQz1QNawDdh8fiAgSf3XHhWPJQNV1hvqT",
  "key5": "2unUem7nQk3hoa62ovagJL4j9RSk7SmroMzkqBmoa2EYKpDmbSNeZQUjKmnP11ACpWUgXwoqQLHTkiPewMR4JLkf",
  "key6": "AKynHmzW6c7Jsaw5tk2y1edjdk5GWoqbZbLwDzVBakTTB5dAAehiNaLNJBqA9Ao59eP8mDjrC7CNhxmJGBAK8tm",
  "key7": "2NMz9MM6RhXiSg4dP7i6qcqhLbWSqrKfv1gkVUBM7JdcAvqrZHxjTwEMKM9Wk82pyZgroqCbGW7p86wHriYZYV2r",
  "key8": "5BLD9KoinH5wyCskjY2cnU2Ajx2upxpTeKp6o3t9UEMmLVYgG9apVih4zE8f78rRToLNJUKQN1M29RBWLb4Vc6Jz",
  "key9": "3Fdrujyesv4tt9Q23DBjuxqjobyPVrsneeVM29zyNdvMcfzaijzXYAu4fpN4XQjL53VZU8G7MMiPQm7CMdPX8tiJ",
  "key10": "uuuW2kiRgB59kSt1vUjCWqSNgHEHc1YnSXAZ2FFgMhpDBdhi6NvbSMtk634UWVt6T5ddDRrraGtzms9BhTkwEq3",
  "key11": "2fbkkBDaU8ofJxw4AgPeG29PzFJ36LgT4oVbSbLLw2eiFmHLMLCGTrEww2yYpytaynD2h1tLEMsAozde41CqTQ28",
  "key12": "4nWA3wrJgmtBozAvW6yxUpRfS3Q6xNqh5xJYnMgxGerAuuuUkhQx3PuDFQzH8d6TT1xonyefLkoMVAktRDBYZaHS",
  "key13": "2hgpn4RzEds17XF4EFzENSrdZw8R6B3bxxYXEaY7VMDp4AVwdrvKEeRfZApiwTstapztvJS69rSfZuJSEusksHnm",
  "key14": "5VLMFJAupFEqxPft5s6hBTeq5C2ufFqVstr8Xn9BQ4g32VwWRPT9feiDj9Xs8WMP494DMnBCAifNx2N1pPyeLCqK",
  "key15": "4Up9xJWkJy6gmA92pmvSD3QWexXZ9h5xeJq2TUPi9kxCaqb5X1Edqbsuf3WUQWTzcS922Ymd4u9GQrAnbL7udiNb",
  "key16": "SQdHw4Aq3eG24ayN9KkbzW8uZaQuVgrQKvXXHCpKwCYYfg79ycSG7ZzDiLkBjryNjB5sGqfZ2ALXJmPyNpfzT7F",
  "key17": "2J8dkmMXFxEEPnV9ov2Rk1HRNm8Cxyzzuem3RFSvfEQt5o4RgWuZAg3dmgWJ3jZkw1mYZgcC4YgH44VfK3dn3CeP",
  "key18": "4cuh2Vz69KvpiTb88rxuQ86UPXxLvQGNrUhnE9veDQ7M35CAu7T3MR7iA84tjAjzjbmz3Pxk7XN3sam1CZkWNnTs",
  "key19": "3o3A2thFfSwP3vhygJDCPEt8JXkJZmGmbmU98Xc6keWuRFeKxWqDKSnsYSqWLoXxZtQNRK589pGoFKycoF1i2uzb",
  "key20": "3QewmfCJ6b5VC5smrhEkWaGwaS2iG4r6fRn5vX6UxDisnmWppGEcG9CtzXj5SpsZwEtbjHutbgDGPrZEdE8HZ5re",
  "key21": "5FyDLGjsT8e9ubZDKVxRu3B6GYyMLNrLK7PYv7YXfLfq6GHH6oPYzkvz2ZR5yPpCDgVpDZH9bwPKbSgCETeUPEyQ",
  "key22": "5qfbaArdKm5wmfnB7nFGsK1gVMvKjSYxKLHo2W1HQkNTrdKXzhvzPViXo4DgbjgbpJY2wA6xq6QytR2G7oQox6Dt",
  "key23": "42y1ihZwUidehwBTBYt72vrFWEXrL3CX3h9PnVcri7vAvKz7bigi3xGxH9oAPg1ue2xqYoK6ijqRCewhSYtve5HG",
  "key24": "3N17HRkijoe1fTY4K8Vbc98qbUbMogMEAwXEgnVYK59S9mUES95obko9Dm9vYPsFuiw2TrS3aWf1nq2peXE4GjY",
  "key25": "r3bfThCHezGNzAb7KnrgCZx3Wukqj4LZM7oyMGoguFCe3RpqKcLCXP8WutcL3R26iC4445YtRQmkJZLJsbX1GG4",
  "key26": "CVuVriXufFCT8AkhshUusEawKWxFE295Azjy2b8zH5wKJunTVuQArjhk7STDrr79ycZUgMNQLh5y8TAPHAXHqK1",
  "key27": "4kWQnRJHF8QqU1ak55LMP3TNEv8zfbaD77rrnbBwjvSVVxgwaCvCx4WmEF5zcnG2AZYfrgkbi5y16t9cNfaqQVp1",
  "key28": "5iwA65JbF2sno9Eh6V2WUEi2xfdoBTzgzsSMuvBRkPTiWXV2uu51i6EmzUridGUw7boERjboS8kj8cQVzVUjNoM9",
  "key29": "3xAxTiP4ArxuKZvciUMPN1n1iC1TBfUVAXPz7CnU7aJCf1ppyrnuWZDXnTac61xsSSaJq5AWNAD5ejvJNsZzNpPZ",
  "key30": "2g5YsuBJTPhCimi68JKxz8oPgHbNLvP4qdfuu3befDgj5a3H8fS5tojrTnkBgD1XASC49ScVCMMthXLbMUbnBShg",
  "key31": "2FLS5E9CGTy2AEx4nhrboLzEQPki3rpBkSkmT8hJniyWGyXtPdoKfGhknANvSDZYBBMvUTF1g1BV7CH1S1NrVu9i",
  "key32": "nhcnBUcVrq9vDLSoeL5F7zRPp8oUNuY5uE37qtatr9iNAJkLRh2gRacSEhF6KzAhxXW84SYnvt53cAbNcAG5ged",
  "key33": "dvWyL7iyKGMoLoTePo1XxKJCNhVeHB6uxjxEcEFqUnAsJXLwWqYm2aJE749uWbnGjw3uNEjeDMCXayPzc3EjiTh",
  "key34": "3wEa2ASJokbMR7NKHnBapPRGV52oSEZu1Lf2P2QaUe7DVvEbxoMswn1J2e8ZCxu3jwRXhFbzKH85wzfKcsZdaxfi"
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
