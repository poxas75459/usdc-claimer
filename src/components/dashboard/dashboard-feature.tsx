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
    "55qk2nwT19GhUXutVrkKCYBVjVBAs9J6cCpNQHEBXSvmTwgGXNju3JrqQUfkwByEUAV3evrSuBqSfQ59BmouRsfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BdXobBPQdSjtSkSeiuYrkZnPKiBomsbePoczjJnmMBHJmMJvFY58BvJh2mH6R1oSGiFGv7maY8mq58nXsvsXUtC",
  "key1": "5GyfvX4SaSEPXRVKxpxJx5YqMcWet4YCzeRnpo6rmLV2iHggtEA7Sph9gszgJwDrq1xSBNrxGTL8DcCZY2xxrxr9",
  "key2": "2dtJep25XaKTtEt1FWQbhS7zKnYXgaf5wzoDjoirRwfWwue1Wkv6oGABgqqRZDG9SbhP95QWeVoHwei7bQZNCFoW",
  "key3": "28mx37dbrR1gkoqFwXAbMBadjt7wtHdmMCKSMPWKYWRWRTi2PvFBf1TBbS8yCcoc84xqdoR565ANaFLzRgz9Eh25",
  "key4": "5xsjSoqWRqDCHjzZxXm5pkX6N7pw2TZMSnxRBDDCVWm87xxx9LrVDwZWaCMCmJK1nfFen7J7LSJb7mSp8SgmV6gi",
  "key5": "63tx6pzyDbHti9rmrrvX8f9m435UbDe5qhg8LZdC2afSUTLMRKzyS8k8Y2qWBuBMUeyMHLCK1MSHniL1vmSrH397",
  "key6": "2oUeE7pqCPkpW3EuFfUUhUS22nGBgxPHUURJNRTQazf1GtDrWrCqo5PFbjn44mgsxqBKUNhaKgq49m1DJTu61jQ3",
  "key7": "3o3CeQ63tyiXzgByZqtBNjm4GGieRhXZSbzq1FZMVPhmr3TWA3fb8ADSS4XCJf5bSUFs86J1zNgCRz8buEjiU8t7",
  "key8": "3J6bQsFFbzxvRsy7y4ZPUMByE2v7VAuitNMEXigpFWzbkWNcQGxpLzx3CSp7RHDguTfnCccMP6htVaD8Qcoiqb1p",
  "key9": "4sDTXtgjRBaMB448kt26A1jrgASycYMtgaa3NHKDEWwDwc2zw89VpM62XYqmo1TMFhVNNV2ko9w1QRZUvtemHCFE",
  "key10": "2pJnC6emhup3K5K5PcZWyxK7zYf5vgjxgBDagY6fiJXMYChRevaRhjMJpim6x7ATfe9NCUrwRt3pMyz2o46e8SSS",
  "key11": "2GafEAdoSSTDP1YSfW6oZj1FMZmSJaQXjQxJouBzLyyBbYn1HLLgSv7KbzpFoYsULMEvKaY2dWZj8XeAR2VfP85G",
  "key12": "5P6hQHw7gtCJyWywWqgNq5Yxu7kufPq9rG6typHeZgwremENsuHTMJQZcvJmEo97PCvAXqHNV6VqyZz3kbp5uJBY",
  "key13": "2eFrcaNVcWF539USvvSb38rss9pwctKgjs8miTHHXpMbVt9hU1YFLrpCjR3iPMA54mMYFxbP69Rao3fqHxbJxSWA",
  "key14": "4ZA7F8vsUKSpk2L3tj28QthudqkaTymEFdLxhxEfxjwnGWXKsM96oZp6VKTyFVYx2gCL1tKb9izM1C5rZ3g1zdgR",
  "key15": "5F62ZpervmW1KpsvPFrPkkibEDh8hKLzqkm2E9xxefqg5QgHeHYzgz1eXj5aHbPst2qojD8Qsj81kTs64ZDN7XEw",
  "key16": "2aVfZytxAVBwgQu9C4uV43296L3rqE8LgtaF8H56fMbbnTSF7jcAxh9XgRBDoAw9TquBqwzTHfavP8Jg8kCPdKxM",
  "key17": "5vhCePj5VgUQ44hpjkEjq29qnrnA4ZefmeGALBKz78PUEvTbJDWzy7eATCybBf2MKDrPWvuDov4tmve5QCQkReD3",
  "key18": "2Ss8hgwdLixW7a8NiiyrQnrRN6f12QNKA4uGtU7qSb8gjsbm7GRJ61nJFjt9UjaVzkhQ7tBQHC8xuYPKo4JXr3Ct",
  "key19": "3v947Fd84Xt5KW3iWE9WkLteApE8xHB1F5sVqXxdHs4cbcJ63J2x7XZwV6ihJ7wHFz31Ro3S4jKj1NPXgJjGN7TN",
  "key20": "2FsSTgSHbxLwjiP636WRvJGsg2J1vBU23cFg7LUbY6C8zrD12bTzgFLFMR7eqrm1zpPUrd1DWcsXaCVjDhQKT47o",
  "key21": "4MejPuCrSfpm62aUUSYo8seDpvZuFm27BaWZkvUALgf3ZyskbAhGKGc7cGrqjpYdLFDDAM8YANqQinxr9dGHbn6M",
  "key22": "56xDaTBZ8o9iHyyBv5xJRxZCKAs9M7Zr52U1PKJuJG77nUFFjHZhbeAutwcRa5Qzgza6imFJnVFDitGF6CBsXTXY",
  "key23": "5aaUeWGo5CFjCVSD7PbDFGsojuPLgACmxCeSD6QwNT9npgv6U1oyPhWkDgW128cb3gcWWdfnKQa4daJbYJxQ2EkA",
  "key24": "a4F27QSZUUNBwUZjaEd921Q4GDqcE8RcF19XXSqS6ywUaE2whmAbYK7KEpARf5mkt3mtf9XwG5ZVUiwApPC93C5",
  "key25": "kARqDZwM7xRSBhuVPvRVV8vH2roPBq2LqgZwh5JQ4vV9cGELBZMm5TsoPjpS79AdidBRQS7uVfqiGsvvfV4Eosq",
  "key26": "3oDZDbXm4xsrKUxTHANWThzDc27FkckYAwEWojzUY8AsGFM6UTj8GrnLDh5F2TV7NRFetsunZ1Pk2esSo61WwDvx",
  "key27": "5gdZRXGMSAZFZYC9VH4EoE4LUgapoWCh337TXEeevXCSGdh87SFpmvhTr9vJERNvAMAv5i16jVC8kqEWmskpNWLd",
  "key28": "3sqL4HmLUdgjYcmDJ8KBLBcPxFNFXFAKybuMbhv2JhRTZvFSY5tiibNQ3bXeoQZftbubmLWHqhJLc5zPvRQakFzw",
  "key29": "4wSAVj4QdkRRB17qWHhmZpuSxiwQoCsYLRNp2y7cDsrN7sgvypdL72ZevPaXsFrU6KPHjFRivLzfWU6mQ1bfRKKT",
  "key30": "5Hh9uaoXSu92FPEZBTeA9tKdyhHB2E8dG16BCTcFHcZckJAv5nq7vPueAzGL1R2QbAPceEbX1nxPmKq5zAWDxCzo",
  "key31": "VhtTWz87LkPeYAdAzvXTG283J2dzcK4E91XwRDQowyUUfhqcnH6t8ez4iCiUiJDwftcDMWpmF1yuvySefReHXiD"
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
