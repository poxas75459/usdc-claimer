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
    "HDotkJwAKcnURn5y87u85TahqNVauiiy2w1m8MwDH85sC5spG9xv3F1qsctdkj2K31qWXQvzaMFRuB3wAWCP2sD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bHVLDCoxfxnSXekMxpGWS9KKSUD8eA9dxsMT2Wn1hEsTo5GCh17Kj5C9nfgTTtHXGhxnukck9wf3CstfGe4fbMu",
  "key1": "4H5K9RKEXqMAsYDfyPrtoxQVpWZUKhnAD6x51CJZzNsKSq8NY18VWhmxCpa6YfFBcSzrXuCRUAkhWrgyw4PTHyRa",
  "key2": "3myaDE8YtT83xCramDMc2bu5LYjxKmCztptSgrzjLc67gCydddHGdk1uXmkRagi2jwf9nSHWBAzMECdAovAVvj7j",
  "key3": "hF1hDEXHxD8KmzKSGwhfTMrh5sbvFZ8ETFjDJEJVA1JuQoCZTWLxTqEj7VPxi1L36tYHVhHpNeqHfDvCVXrWnyw",
  "key4": "3wiJuMNwCSW24Nq3VvvEUemz6Z88TDrs428A5DSMEB3i9zy71qGREf8K4UYUbvNdNnUotByXvED6DAQnaRf5NKEF",
  "key5": "2jkCHPJUUHTmK51kD1VErzGkMV2gZyShULDKSWuvHkj9SxMLaKw4fnzHTxsoBjUCGngdoDovsVkKP3ACNM4dmRSG",
  "key6": "2uubG3bsnaNjEWJVmHH8yxu3wTUdyxazWo1GFmZqGG6rVPk9fe69zvk7mNRzBr5AkdTq8XzLgbhP4PzmLkLwXWZU",
  "key7": "2B5H2GmcfELVNMgk1PS2JDEFHppQeaHKFpvrcnZm7ZiEdF9GWqZeqX5YBwVBY6uJwUrzbCAzcg8k8xRRysVkemsb",
  "key8": "3zpwAy1ZUrJPxiJ7yhdu9jRNG9vTjkC2hBvvCUs9ox33rkBmfE2hRPjYe1euTcQQ4agPCi9wrGwKGYjNtpSebnPJ",
  "key9": "SAhc9xZR5aL5aMhUK9QM3rFm474bUj5wKRtYjpYiKGRNsqihxKgticeCANYbQCoRgXnBAToRrJJaMcroEo3zk84",
  "key10": "5grGeDSmWF3EFHgHtEDMvXJtfGKgD8vHcS7HiJxTrw4T6Yr4FWYiN8EGJJ7meVcFBLyc3uyfGbCRwTvJpzCufzS8",
  "key11": "58z9DccP9RQVAMRT2opCz26sJmyRbvW7uZ9znbPcXkLAJwuDEiSPErcC6k1PceMfxghTRsohYRsGVTw32GwgPpB8",
  "key12": "5jK2cPUwUcqU9JoyxsbumEmKuedVFZgwpcVVyPWyLCYiWtHs8fkqj1GWYW65tCSM9uPxZCiG7xjQLDfh22AfwEGP",
  "key13": "2wk7p1k21urXuShuWtT3VvSnbCPpTuagX6vZVgwVyqZgJ6soUq7FYZ94BU1N9S451UVUmn9UhVdVxeRTUNSEZs5i",
  "key14": "RC9MbrmSnUuYBvgMdaqFoNbF7v6QhL2MrV6fHFLyPjUYQWMYJR9HZMih8M4hBE355ihuZXa7t7ax7NGbKbPzHx2",
  "key15": "5n5ZfcVfottS2AE8gbKSdB7EcSYWq5MYLQcdPh5QhwHBZpmtGfnFwZPSvbPVpTQTy17MBYVWu3A1xpyxiVLqaZ2c",
  "key16": "2C66koGJEskYQetyq88JhgNVKb973V4nm8fxYk9debfyM26bFUXRUP8vmQgusmgBnUtHp4C8WN9P14DxDjBvzHoW",
  "key17": "4Dzm2buhetysqYKsDXocyXRjWPJ8dkxrzsAfRZzQ3xNN5ezNew7jPuPkSjwoeA6EyYnCZ7nEgUXUeaRLd7x3yLwo",
  "key18": "3hNgQZys8cmiZLdjUCF2dQoPT93MBJd4CBXGCEiz2bpi7DAzejPgjx7WjBiyQme6xPQhJjWu9uS66PG8TBiWHy2G",
  "key19": "5rNVnZzdd2E3xCwKhaanc4dgYbUMGQRwVULkxWmV68b9GJjRHi7X6e4QuE7kmHMtgY32YP1fMejaJQ8rankr7bg7",
  "key20": "5ipXkhoj3doyNZhFAj7mLKjfeYUuegVTyiSWCDngaDFHDwZKZvG4N33E1EEfSt5MopJSpVhxP3v8jDnFNbHfdnCN",
  "key21": "5jfkJdpimmPRtEPMT5Mq3ca49oYsLJGpd6vwWpeU1pk9g2o5hcHGfTjkRibZbm2DnfN7B6SjTBVGChz1PYzFaVgo",
  "key22": "42QfszCxj449tK1wncGxbA7vCGc8pgg1LZND3XUbSjFovxVjMTqu8L225RN3RFqQfXj1Uyoc5NKq2dVsYTMEhxPH",
  "key23": "p3fssMpoWJVhYNaaGqTVH9TP79WhFczEboEsbsAtW42SYjJQxQBb5n4kqYm8h9c6p2eqEhEJvmCsdHNrx2bydR4",
  "key24": "4hFgwX4DNQweUAnJgxrFm6Z9T1B8hthvzKWkb6Wh1NciiJmBKbCw3GDjbwSX4MTdigUe888nq8Y5cF5znyUTcwm2",
  "key25": "2mwkmxMbP1QcYYUFun3Pf7DuVYeeKLh4NkFbktMERR3f54PfsqpqmiJfwKY3Y4nmDdXjHDi6StCEFrNJu6YGzzcb",
  "key26": "5rrm3dgdSjP5EnWw2PNjyovWuYq5C1khptdLWeeLN9ijrL5N3AnqgAcJsNrycHRsZQuvy8EeEfMUu9KeQeSvLgEc",
  "key27": "VppZEA2gKrdS8EVXLMwta4uypjL8899VHCH8g3rF3XkjBG6AZMjnsir1frhamPcAvVGgQ3mR8yUFVGEojnHYpG7"
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
