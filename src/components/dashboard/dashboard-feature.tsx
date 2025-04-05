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
    "3KnxDUmMdxwPE7YaUFQdHH7uwyQiA8KDfj3FJMD6XB5xGaeAHBQpTrwCLABh7CaxqLyGNtQdwepTzwoc375TgVqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sdbWcwQvdKnJTBqMpEKb839Pa1FWjVc5VZ1Xt56rV2d34Ts44Zg2F9QvqTjb2JzqCrt98SmPScebQee4VSD6mmG",
  "key1": "4hJyVR36G1jchYGvPBoTC9s6uzKWiymcC4nEDmKf4n83ttDtx4e4di94tZnz11GZSRtywUkAMMiiU9zLwxb1NrYj",
  "key2": "5qbBZbPPWKDc243gB1wpXBMtMCKbaAE9WCSZnrZMdVmiwq8Nt3XPi7UeexsgX8uJnvaTXBSFfPPiViYHmh34FJ3j",
  "key3": "44uB9aK88hCtvbSeZUEw9SHiMmG4cpFZLicSn2RVwdXFvrsStMR5XTjnxV2HroR657VWsuo3arQeXSFMngCDqFuL",
  "key4": "3hdpxSyG6kPEeJ2nV7u6NbzL62bp6Ny57gZHyhSADnGk4TYPAbt1kcW233XgyBFnGb97BLhihgPfVJCNVR3trnYU",
  "key5": "34bEYgsodo8QjAgiz4TNiqeX1PiCVnQfMaKhH7WYXvvZxGFKVKxEmAKc7ZWEuV5W9yKukWJfDbwzxoc4ZuGSTaN9",
  "key6": "46taRokHZisoC5hyUzgNB7bUpjGwAudbUw8pKq2EaeVPhPMVqW7x2x9CiGS25JYK7vHceysjB3uHNpvD6Vn1T8Ln",
  "key7": "5R4dSbJ41XegFEnBL5aB2R5Z24RTiWdTLYwsswn1foVXcJzfuzpwQytDiiYqQPJ9YPv8vMC3SN8EEpkKoVHWfrGz",
  "key8": "4U8ytUqXBh52VwfkHWzWvbAqThEz1Fkr9RFjirh7m762vxvTnGSYNQ6HT3G8tymujZ88EHkMSvDLR5nexhqGDHYK",
  "key9": "DAGLocuzJc9e8bpsGT3GVJJq4Bw4dr5RhCEPgMioThv5uC9xv57EYZS5XPvnSJM781WDGQQwANr79QG8f4LXDk4",
  "key10": "2m9mBuWvzX8zMHhD5G4tmyBe8NSV191gUyJJ3vqrz6GwUnp2spRducfug91HCa2AZpqyaTBZb7fCGhNHnEifBeG5",
  "key11": "A9pWUqxLJGXrZnSDhaESvrgdSc1pdehuunCVnQY7cZknMPg7BKYFjzitDutmn47xFu1hJ9SknCv7ydL3qwBfxvd",
  "key12": "1FCaKtovEUr88g2B5h3rtWXGuz3uxWPR6bpbTFHot7iwbzyVUW7Zxck5zucFJreQXdHbgFnLedo5c3aZi2k4Hsj",
  "key13": "35PF76hnUSwVb7p7gk1z4bqPhwvRD738rRNZLTmkdnjNmb4YRXPcBrUc7KXGPnqYfdXp8baZgn6E7dV6so3cAYhF",
  "key14": "5DsKySsbvypFDzE2P28VnGc6dnnnpbab37sX8TPwVxzMZCvsHVHm7DFjpYNscwCtH9ey1RTqUJuU2XFY67VVa9om",
  "key15": "2qvnGYmjuA8gRKbsGTm18GiNEvZmMBMm4yyWz9SRegv2k83HiPF1MUycTatN8q7Sp5pLtJGq1XP1fY1UD8ppnsK5",
  "key16": "3TVUkcppixf2Q2HD6dnfp4J3Jn4CR3WztoAtQMwFuZmoKQQKQSstZFhzK1H2RMgpFyEC1RreBDdWxsjjEytsMtXn",
  "key17": "2ULLMdT1ANmjRiT1wpp14gBSWNW2tkmjdpRmqQYC1ixXvA8RaQvrV54ddRALB5h5MxfRKrJe2vokngoh8nUTW1vz",
  "key18": "3kEeaYXBbv6T8tCFDGtKcMjJhYXLnPqGnNUZK68QYUWQzoYRTUDx9SzDEeAkuVAmrud5CmkCYc8iZQ2GnF6L9aKE",
  "key19": "22kwEFqTaLBooESxLDXVmWPUUDNkaqBiHKdYpYfFhv9SrA6kW5kq6oSy3Qtpuhe7M6jesr9mXaWoA95DGTmkZmRh",
  "key20": "2AfMqkqVR5UM8ygrJbEWPxxAWnnJ1TVcCsMtt1jUcPGj7Ds33k2FvoDcuDLXwG1bLpHCPLwegtnAHJUBCBwbVT4q",
  "key21": "emYnZvZhkkqQhCf8mwNbumDsbMDneTHgxvgC2mYTnbRynwqiSRfaJhuZzDJQccTQVZfgnvkqwCX1hHNWYf24Jzg",
  "key22": "vqFxLkL4z4tBvP75tMpJQKow69hfkymRL27XyL3X6W3N7zDWwcRhhnuYYpTB3UvrTrRd9mwciu6Adu7FzB3B3qa",
  "key23": "2i1GU2ao3SiNLYcx73tAUJCPtfPwRxwhPrkk6tFvzsMokntxZDmCGgsNNwc9H3P6cPh96rkEAz9SZYaszB2TNLhR",
  "key24": "CKDUJipr9jHN9Pks9hLu9kb3BsKY8FKKXEAhgkBKfNvTdYZbZPEfJDgaJDxV3AibgNZk6LnNfSEA9UFE1jHeJ9c",
  "key25": "K2cpK1nvmbfqTKD57nh2mPFgf4bg8kpKCiz6nCrn2xbarBFZHL445ZtxL6Xdsn8RuQgaE223eeZsYjfKcVRAiys",
  "key26": "3PtJ2uaaTMV7v95wnXa7j66vMC2AvYXqqzLdVKYx9sPv33ezmbewenmX7y5rBeHFH22aXMjBei25SoQ3DhJueYTp",
  "key27": "5wzaHg4RGUpGvq2WYVnxG4QYnHf1fUQxszwakA2CADwXwMqbNwGt7L4vckWWefkJp7aM1qbFyvGQcCbGVAYD7eeZ",
  "key28": "uEPgePgtddCrYpDC43bdKLYJ7SWhhKRVzp7xMoyHsna6uF7GmP5JWdkjWFtaR9PRt7mvedEvtBsRYiPb8H2UHUb",
  "key29": "2JkRugx7BReThMAwqmFUvTsWPbESWzLt9DrZbFrzdGa8AERS2hK8aKyepNjUba9A8EpinAXySZwAVMrPr6foJAgJ",
  "key30": "46AXLSVRPzYthxvZLQg8mu2TZ3ydsXuMz8h3zoeWmFjbPZHsGdM7BBmLtVKQoc2muVjFsDkG4gsXddqq9YHDeqWb",
  "key31": "5ERiRD2PpHJA5EWzuJmkJC9zZ3po8YZoiWbqKTcAMntSaTWctZodN7oKtek9W7AkkyDXWXdf7jwBTZGWMz9BD9BR",
  "key32": "4TeWhZ29G2uTZ3DtSgyjXk4akt4kvkoVU2Hs7RdUTMY2KFptzdYNJASGQCYg82kNzMjxJvBqDDDG2xNhZsepfvb",
  "key33": "2K6BAMBKBtrDmvRao8GN77daiSZ23zVsmsq65929QcaSo7JFKFWSwR7fpzHks3rMvnbZ4HjcfYGFdRfy8XXQoLFL",
  "key34": "3EqrQRarD7k2uP6Pe5mz3yLDLos31CfGQgWkTEy5McDFYpnaTEUjXBxTMSz9VwiNmsUE5iRk53BQXhoBKY5nu8H6",
  "key35": "oGmt1uUtKc6MTChGro6WMvKCr1Ks5HXsx3N1h9drUr1PE61EkXaNRdw8vHpn6fN7buncZWig5yXkM5TvQ3qm6md",
  "key36": "3DX1VQoW1obPXsVKqNA4xC1RDZABUYUmdNFb6nntzbfXZX2XXNLURv44uSpwnCRKTomcZchEqxg7dyxUnysShupV"
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
