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
    "5J6ypr6xDjtt36mjCJdyv811VKLVfejPbJfVHV9B6nKYseGpxrr6TK452G7W7UakWNTZoK8wYYh2x7LJYsZS8Uhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qL4RL79i5goR7uXDuRTS3VJUTTMLtxkFSqnNHUwCGAvkHZKeydXviMfsbBGrtBu56wRgZZtJQ1CzKsB2uTexrwZ",
  "key1": "3jrM6ciBZ7k444SBVr7NrYzMRWdXT9MgZNfAGpyAJt3mE9j7GTZcNLERssoNxUqiDYNvjCkb8iwJs1Mak4pgaLWr",
  "key2": "3MCW2E3mbZhwGmpVG3nwk68qUzuq4Fnaz3Ny4hkaSzgUPx227BRwkGgp3LKcYMWaUf1REfJkNT2vK1xhdzwLwiBR",
  "key3": "5HxMiXmTY3QVUFnRhaXAj7jDLL5PMJcc3Z2HbUBUBuMEPCxfYhSBseYm6oFir229r1frqRbywZioq7AN4JaCtpwE",
  "key4": "2SmHfYfHUV3y3fE3mmyDeSrVxZcA9PZTnX9tJHVW83SDJKnouRq9neh47t52WHPvGa8eiSDG5tcha2y9rDEL4wQx",
  "key5": "2SkYXf44eX7PnSsv9F2AQNoAkdbwkR1gc9Xg8notRXCi8oGHCag49qmJoaY3NEhzY9NrcPTxr6TNUJsSyTDw2w7V",
  "key6": "gr3ah2vawATP6Zm5UTjMWiYpFCj2XdEtLB9C9zFb8JFqHATzRBGq6H6Kn4C7HSxUAQxTq4bEeRFtdWVkCbsN8vw",
  "key7": "2Jn7Yf2WVDMHWiVZryhHRiVg7UMJDJnCGk2E9BDNxiT3zVHgeQEwbEd5JYBGNL4RCJRbHya86DzP7tTgaLwfBirj",
  "key8": "3SUaN9srDAns3RLmYqFngvjq7t122ydHsrDburzixMYpiXyD22wEdLn3BZtYZ63EWX29tCdM3fbvuTw1YVFZdHzY",
  "key9": "51p2UWd4vH29CHJU3h34fVYzgRvkanHFuLRnuwXv1bKdKNT3E6MXCYEPZcxkedPECgwC5vU8gujNZxoYEN6wwz5S",
  "key10": "3QUNgfo8YmDKDiMbyvFgm55husgnEyBwyM9oSNxgk7E83Zwm2QgXGoAifBXDouDNJHy3GAmdLdgo1PDThpjmgiV6",
  "key11": "xQ2VPWcbbjCQZxw157xpLoJ2Q36KCjMaHWxXvxtxHPMuNMMMBtXfNn78BjLkRD5EVbJG4HrSnUZkTLH6iSYhHdK",
  "key12": "38xknc52ev7tJJzF4shd9h6VxB7ok1azJjki7qvmgPpXWTt3LBRfQVqBQRv8omdQph8myQc68aQiTV5em3zAwkxE",
  "key13": "24A9ptz5AghaJVWE3fVDpAAGT2mgDficZydwRJx4dgeMQxfmcGAyv1ckomDtKJVe4DAFuHb2Ur71H7LZYdqYmMjm",
  "key14": "53KDA5CrC39Mc6Hq3ZRSegcSLtCjMhpvhRddarawm7DfF4iDaqsxXen6qPcnXT9AoMfDHdfAF9Rr1tFJKfKi6Gtb",
  "key15": "5zYLJKbQCFNx6MY9Agq98KcP743pVVw4LoNEzMLhxFrdNthq75G1b69gYUZauPXqHqUoD1tC8pDLAkSd1G68KjRu",
  "key16": "5HAfpFTSyayhKMYyi5tjvMpWsBtn5QoiTMuRU7bxW6TfngYtEG93oPhdq7Fg36BAwTqWrQ2Xwt4QEj3ZsszTFQFW",
  "key17": "2CZkggFeSWjvtEGMAWuPCcM4YR4HymUoTq8iQgBpmaXij8NAPiPP68hZqegq5V381VuqLFFsrMaZrXrejFPVgTUT",
  "key18": "33PdLybngp3i1KCZhiKJWrUnYKGQsQwKpFB7ho8cZzidGnjdDSxdDDHcbN8VUwUfU4VK11EegDfvFbyHqwwaSFSy",
  "key19": "4CaRintEd4fr8ENT1XiDJBPPQ24wSq3Pd1o9SM4k9ZkJmbR9qN5qhFqDh5acjnzP8rPHVh9ekMiWMcnkfS4X9r67",
  "key20": "4Nzm5GLC6UsDdvgYmBhnDBMBVX9PLz8iG3xH5XCo9WmdPLfm2xo2ZLNLDMN14xFex2bZiMvRtfmibCiyT683QU7M",
  "key21": "4JNmkf6B3QJa9TjZA1UB6qhLCJW7Q51xfiUpEq3U3wAuWSTcWHEzM7J1yJQzEnaTK2iGdje177pN2pqbSVTHkHJ7",
  "key22": "FhdY4CrPSTts3CDL623fNQKo9uCVEiTG6fNU1ZzAfJbmWbXWP5LE6jjiJCLDmTc5nQSvVakZAnsyZkasxznhjdd",
  "key23": "3uhbqGEJYKBE6HQpt4A6Uyd8jjrknyuzPbumxjC7m1fLaVSLLhNiGkC1PaN781i8FthCKtQkLu7CFQL6N5EQphDY",
  "key24": "4tidS2HkhD7CZuVV3e417mJ7yeMd9Sp88WfZUxw3TB5vd4feRVrQrQMmsg517Z1BhyhzaGfQQpRf7XNUKNpDzSgx",
  "key25": "PfgocPFjg3K39kh12zSKa23X7zzW4jYkvcdxpQxrFcSG9Liw1xKiGGUtw3AcAQA2FDTPyCuSG9hincvttoL9Hjn",
  "key26": "tb1zLR6J5Nso579esgd9rTBS9qEfhCiNUL4Cx82sMP3a1t2JeuYPhR5nK1QKv6LnQhTiLoih628ZkSqFJS3zc9q",
  "key27": "gYb4DC229HRAr3ZJhjmV7vDkqjyaL3CfGRNz8pCrCZ5AArUpvnYcvhn4x8H1ZjuYYyUz7HrfuPvTzvnuuwq5aqX",
  "key28": "5jK6M9YwQYJJfuocgKP4shn1V8aeorR9cCexX6KW2ZGUzAvv2iVNgcyuZgzYcJBSvsefvtAFs3gXJTur9YS5a9Rh",
  "key29": "4CT9e7v6BKSwNoS7b7EidwaCQhawhf1zQdq9yTwsMS8Qn1muyfbKbwmCvy5K6Hr5v5ZWAJcYSpavpbg7JraQMcUG",
  "key30": "3yLtcvfAx7CLLbekbdmKjZEHcbsH3gFfwJ2Q3tj4N6rPFCqdZXhFSQYZ24gDxSd7dgtF7FjkUmiK35SF1dv8Ew7j",
  "key31": "5meouB32jVkyJCaXKgkmZUTGChN7hXemfQpZhw6Yu5Nh2Ep5buiGopTgGdVezGhnWs5J7EcPBNVkkvXPzPntz9d6",
  "key32": "3AUh6mFdLv16RpMdrBqgzgmHhMJpWQWjtYqdd1mM19nTzyrwfCtt8ehE4pGzaVXYoWDWmLYmnsBpgYpE7Z3e41r"
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
