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
    "3v5TGAyBE88KVmqEL7vV6ypkdBUH6WfyxyN1oqdVZVACUABNeQYavPeKGrrboszRTz5Dy2d44X6Zxhkx2o8DKm5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dbhZammryPvD7jtRzF7omwScc3NecVNbzvfxJYr8HpX9WsBMzzwFy3KxAgwt6bnoQCUbDve8jNv1im4uduwjgn9",
  "key1": "4R8Qn4NcstF5GbVeuZc1iAGALkxbqgoF2v11QNEun1GrP8jBRTA2mRm93jpma9jRnqUb2fc93SvTKuGVoK7HH1af",
  "key2": "53DgWUtCpAnoJ9Qr1SnS2ucqXVw4hqFN9fcgCLAQrGqM6nEwcvKq39f1iNGonEA1aHknd7GDn6f7715DvJFgTx2S",
  "key3": "4R3bVZKUTyD4zPmZeLW9dk3u91mgKVpB8vTD8L6FCUNQ6jjQ951euJqx5zZGSTgWTRSf2Q57cTY5bAvVXKj5WEUh",
  "key4": "3ZbNWVeMqyWMFpryRaZCZGGkvNW3CMGjAKLgEZ3Pt93NHPQmGpuyMwN4kjcJLVLowAQr3iaxxJzeQxoqMoKiDhJo",
  "key5": "56Bco2ALtQNXVgomek3J3MhvdELgKy7ajGpikhxfX9Zv4iek2TX3oP3MNCZH9SQBDnT7z2RXVBJPLC6PCMdx24ex",
  "key6": "3q3WotDfJQKqmPbxNVQEQfPxUZssje3s3LVKNrixdv6Tz2ZAd4JQWhidG4A5RNUhY39xmP8bJKAgbW9ACmkG1eXi",
  "key7": "4L7ijQBWC5RAbyHARSKGMYC2vSSdojereXcmjWSbvyfD1BBa47hGJVMbGgLQuocGWoebih78facVrdbF6Q4zCbwr",
  "key8": "iU9JiTGMXscWwfJiu9g2brReHTeNANSwz6cE2vPF6cP8KUs8FXdHXx8H6JTNtdzRsyhsczaWxnhp2fYTrKjLV9C",
  "key9": "4oFkJFC1RD5KGboH7DYhC9zYdan3Gi2g6xGuZkr5x516tFtzkETg5bcwwsts4Luy8CfrKss1bChtFyQvgbwKbUbV",
  "key10": "29uYFkrvNvpcRn32MXY6ji2S8B8fhGcxxCZnNCF3AbdCvrRQ83WroNvU6udAkFHMWtGwS76rnxRqSbG72MB7mHeB",
  "key11": "5A3CEaAxxqrWLzJQ66eykP8Me9QCuFJSRYVBfNMDH4AUhCrYeEykbcJGzix3jHeN71zotNTkAtPorB1euJqMNw4P",
  "key12": "52LM3ppseu2HrRnR2S1uy4G86VakXfFMRtH2si74oZBFmN6xXz9DzyC6j1gzvG5n8WNCtYZBbCU4x6U6V46zcvmj",
  "key13": "gftPiDwyEfNtgn3V4SBkM9TJZ4UAkCuNRKdwmmQrpSEKPLrhGHWnPfvnxq2od4u2VoSZA2mmoqJqpGtNiEb9PD3",
  "key14": "hPxLA9R3dNUTw5FNBJWVzFQYPU53rw61YZZdSn2SADXSgTNjctZhuNswEqo8yMH2hKga86T66Y6ftwBAiC6GWna",
  "key15": "2QdC38TMaTSt3aq8ssLfwC1Cg75aCQQitpGWKULfhTb51EVDdb2Vh3nCXntdhrydbxT96AzjCLeQeQi53fQruVXN",
  "key16": "ggJxZyzcvMzdCmM8dD4vUScedkLvarzTw16PLFG9NkeRXs3nEodnqjifch6ugdobTHK3TrzDsbUf44gNngMR8Ah",
  "key17": "5GRNXjFdamHZHfLWMpwfckkvZRByHfjfw4PQdueDSABY9owStSuPqnbNgCYpB285diS8adfD9gMXfVZ7CXxwcuAx",
  "key18": "5pYJ3AKAAqjToF7KZK2yMDSCytywaZh49p2YhYDDvR6PbSig7oRFAf7Y3sUziTNmgAQwYp17RbnZ7R2iXqCfUMdh",
  "key19": "3BBvBSMA31s9YWt5rkXNxAfW3o2P5Yqt4r1VzLim7drKtKbwYSAWmVYzXNS1iyEwSMa3dndatn5JasEVk2RtDLgW",
  "key20": "5xAGTcpPSY86bmvgeT3nxipmntLQeUsqjzXXRbTqS4M3mv2rKBwt3AWznJnAbhCzaJLwrwmSFY2QNr4dzhF2M6W7",
  "key21": "i17kawB9zqTG7dsDpj4ELzNnQxC2XLZyZZC3MP59XjdfpqyyRWUdZZ8yuiJzGHCcS13gV84ZKQvdbd7o5dDNNDk",
  "key22": "3AS1RuEp7PwbfC9CjctowR6fAWwKEXEg7ei8NWtZGvKxkVQCcWmgNgYNFKArecQ7DQDBuZYUkaBmnG2BAQsEN5Br",
  "key23": "3pcfMka3L22roAFXFrXNTE6oyNzyQyC3jSoeuRknsw8zJc6igBB5cdYMX7JHLTX3NQtNuTMBcNE58DswcKxpsQWS",
  "key24": "33VLzwQPVcJTThFuDuVB1dsJ6EBPS8bQr1UcRPeoDLi6Ns7WAKHM3m9aU8cUSopb121Xy1iCg9x33PbYhSqpmUHU",
  "key25": "5xWbwVdDUDJ3cUnVYVAiLBx5JTBBfH341wX3w8jW1UEyvPbPrTHtybkmJsXP1mjXCJjw9AbEzRWRxds4XZvARoKE",
  "key26": "5dQDdgB1GWkRJMnnTix4woCczQB1W26oDDKd6HVbXSZz3Mcy7PqzMkrAA5Mopb35sQqMNhVVioBeT1aCdqqVQ6kg",
  "key27": "WmqXZ3S6SjGZGFJB27qAjZtbYK5wjQmPdoVwLNJ8km4Wvw4qLUx7DEYzbCWgWxyAaF2oMHUwxnu1o9JgXbJG6J9",
  "key28": "47nrZJigrPoWu74B9UfxDRQs1GgKR1Z2BMZ5W42aq1qs25F4fiXBQm7mFTSvz9E4PwkjH4SRXuCPq7KAWkM3smWs",
  "key29": "CRVrSJ7h9LfKK7b2UA5DsqhV4Zkyu4oA4zz7v45BDGrb3g9XwMCPiLjSC1bhFWGfxmPPQ7zR9i9aQKKJXYv3UJ3",
  "key30": "2epmfQQ5hHGoZgAxoyYXPHLocSMuRXWdtE83pTNL9adXN7QeGBCe23erPGb8h4t6b9kiGjxez6YE1oFLQwYMM9nn",
  "key31": "4ue6vSnbtdEtbsheM7UnWtwjGTwNfFSZ2JkGsKmMmEgY18xdmuCtkUYheR2pLKQC71wZeyJ2e8y5ccKjoSmtDhsw",
  "key32": "5Z9ebRnVdZcfw3qh5zBKwqK3oLXubygeW37CKSprL52Y7jgaciB14piiFxWXghrenRCUXkztyViRT51V7ry2P3V6",
  "key33": "2UzopRRoNLpB3VzUvJnMzyyTB42oios1oSwbcG29BCo86MU9AoqFJNzWhNV3EopKW1CX1Zu93K6ENBXrd6j8pxFy",
  "key34": "5A3azRpeAVGvorNdBDqntGGBWz8gbLuW3YPVWBqhgywG1KJjomsPSiLakE8EMxto9w5GXTMh4NoFjSv3E196GP37",
  "key35": "2Dc2ZCeBdRqkEdV8CQHdM6gS95bLMgA5obeTqdJ7pnP4oUHyJSWCzuQGS6gQi6CDpF7RXZbvSXUvBHy83PVHe8dp",
  "key36": "3BN1PHJXnpUj5tiKYjHCAJa6ZZpAphDqNzs9qHPHUPiYh2qj6AGyZZVocvZVvzNpMxzm3N5RjhjUjAkjFyPDmcTh"
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
