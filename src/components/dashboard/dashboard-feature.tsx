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
    "3yVugxCfq6SCPYm4r74kVR8UoTH78jeoCZahDU1L9dWKpz4jXu4EoTL7tsoCNhLnv2zYeFXWX4pZJsaiJhcwSQ3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32yww1mZ9QKKCpTXHaTckXY17XXD6iiKmmy4hZ8fWQxJeW9bvtcUYpmeJnxXaeFQhtMEaE5SVcdkNT2UZWZSPLca",
  "key1": "svhiSZYPmoronHTiZ82WpohrWuzGLg7mw1Hoz3YDSZCGHnEySB3BBGCR9v9b9bjwKGDgApuMR9trZZrrUcLf33W",
  "key2": "3tKNPoWeYPcaZnBZsNaosPo69SEGFJjGrjpuiQ6fsVzsSCujdddYTThWt1jinoa9SakJzB4YeB3ExZiE1ocbV76F",
  "key3": "3kFuGR5MkTNB73dzSsP5WQuFzEDbXYFTDB377rEvdDVPivpedE4qJ6C31hXd3hJwh9xyLFSh5w3LVUmBuJc93RKU",
  "key4": "Z6RrAnnAziVxv9YK6PiTuPEhk3Sr9sxBuqz5akoCB1Wktor24XSrbc5V7vd8YxPjv5gJQSXFMWdoeT8DjgM35TF",
  "key5": "6nabUFVyNyf3scf7yFrduJvjNdhNcoFkniEDwqVwwFP7R2gqYawXS5o3C65e5HStc87AeZSM3x2uwuLYFFwfevJ",
  "key6": "3hQAJkrojRpYiY7aL6szVDLnqM2m6dd2P2qPd1W4Pj4cQN47cWLCgSPKiY4RUtz9p6svG4aThtYoAJ6MgRCpLjtw",
  "key7": "41uJPnJyncCkHhXEVqhUVnDcxCyNdYWTLndRtWWYH5LrHpWzFHBj5xqH3myFXusxb3UfzaWUu6B4iQhqjtb6ji9R",
  "key8": "5dEfsaiwtks2M32ef4KhYCWaSdNhMTBnRxUTEjEoZ7jvaLdpDojvSvgggNYDQ1KtEANcBKNi196SLzGfRFDRGoYu",
  "key9": "Dvg8vNqWsSy9G8qFsPS6svLR4LXdUJmjGUGumo9Cewocyrh6fZjY8eTCAG52yuVPT1TizFVwgSXd4ciT2CNpHvw",
  "key10": "4szz2UnTrVj1FcQqg39MfwBqHuxi2TN66yLBoWM7JtCeBjC5udfutJLzgLDiM1hwWp6UcR3x5H5XRYuEZ3ZfiehN",
  "key11": "5UuhsBEAswJ6rFvNcCJer7i3s9r7tQGTt2vKakiQ6Ca6bzEA5SZqLgMH6EDXSyS4bgt3o2Ed9Sg1b2NiS4sj3PWj",
  "key12": "Fay59SE9jbq5sKkQMvFL31XqrEkRDGo57AxRQCeRnjL38BLBKdvdMy8qHav1XRouqLvtrj6sfqZcnGSiUEapnTb",
  "key13": "4yv3YYas9tCEMYisBxL5y4jbPLFW192o1egfeFDuuB5sf1Wq9DqGEUa8myEfGiUqBjCVLhTdUHidEbb6PjzHUfBZ",
  "key14": "38Sioj7bEkRvv1FsWZRyZiSnqEFrSEHN1JeR62idqrN5E9n62ouMPzrJarL3FboCfwsuqRSdJyUbUCRqcdjpqLdx",
  "key15": "3X48DoQUbBVhsQXhrGG4XX8A7R3jZa8iQ9TWeAnTxqjbBhypMDAmpsVKjRxPYsJhZ8SkDjcAF5TUbG592eysTuEr",
  "key16": "5YRQkSHT2rAvrfiL7rnJoEmc9kLpt2uXJcvdr8JJfeQHczv4gNRFjXZ44eD1VQ8xEG8pe1q2vL8rxvr9u4wvZrFN",
  "key17": "mSARxJPyRjxPZJvZWMmzggDAEud3PZ1cLTbhDC3S7TftPFAynUTUEHsj6xfnaxXbFNZFZmEzo4bxAN1Kt9DPmXE",
  "key18": "4SNsQNN4rTx5pLJEpnPM1mrV26P6CQaecDNiQTdx9iY73wGrJHAw3gWpKAmv71FKeqehsishSEchwZVFgXNUW1L9",
  "key19": "2tTczAxE8UK9GuzCSwtsL8U7mXL31FseyEEG5oSZLeg6fGGsFJUTnXDkuf5eGbmkfosr4bm2KxnDHKtvAQeQoi7X",
  "key20": "3JzqcCKkgBNm9jgyA2FE6mUB2Z1xKuapQQ3Wmx1nZGmZRXmWVfWoYdQStAHRaBDNAXCcDnwFLm43NWuBgRtiQ5Lj",
  "key21": "4xwh41oFQugBVMvFaQhkxmDkamsFwPWrb9U8d6CXeKSdBVSJH99cWNDCnxR2ULHEEH4kBaAr6Cvu57soH1NURCDm",
  "key22": "39YjiDvJx4M7DEnrMnn81hnQCAiZyb3wUWHvMh5VuyNbwdSeF8rAmLpDazCKTnPs2WkjGVz2t46qcgu4M9L3PiSK",
  "key23": "MTX3wdnE3BCoMipWKDwEzQYz2T4mHTGxhQYjdLfB34i2ovvPd714S3i4rq2NbzyduHm284BsPxrxzUcBEb5UbJD",
  "key24": "4T2LQSa361EbosB2movEBu1eoU4dCq1WGmV2MQWWSWFFdcPEmdjkJfpW7Y6LsMALPssVNYcz6GVyzD82tNVL9JnR",
  "key25": "dNC9jLpxzzFaRqrLgRzFfMKNBxfDXnHHxBM5DZ8AfJyxRKTYebg4n6z1NhDhgp4dterf1Mnp1NN7MGkNwGHtTev",
  "key26": "421aEGEFyaza2LQCSVkkStZ559WAYmStmp5QjBKThiDhiXwaQsF93AzFMcXYBuSBRtN4cQdyjLytBEEwpUqEpkxe",
  "key27": "2wuWDvEb5mJ5MsFLJEoCECwjvPjyojUtLpQnqMMdUePCQcawTGowmQU14PJkV1FtDzbdWnz68byVUBob5wDm5yez"
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
