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
    "N4JZhSs3YxH5EJiCbYb4JdLQoHN4qDk8RQ7PMtngRmpUtFbSSS9P1YxrQh7bZe7pigzByjJnkwXJzPxRvfNw9mp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F8WbHRPU9wS2jvoP2u8DD7SCYjH1aMfgYoS4Q7B6SvsUZ75kSh37QGWNTxZrQRu2fzwFMy6nbh2AquX3r2674bU",
  "key1": "2inSkqnFCjVfy9NTFsBNovTrnuwWAf21cgqqKcG2pHkDBGGSPUzY2i1MjncW6dbkasWS2pVmtKKc8kkxwTaiXToL",
  "key2": "3aCVH3G53kST9zsxdsVwLSJFD4nQPPqfAcodzd4StMVLQcp3XuPf1jytKfnuyPTTEKHMF1ruLfVSVVy4AtNrzy3L",
  "key3": "61RHf46e7i92vwt5aGesThRK8m7eVjKQMx1pko5WgAzr9c9HbyHZHw8wNxLaNYwfTE1NoCLJNjj4axxcvnM4qvsG",
  "key4": "2puprKv4NG6sFTq3jBRZjbAhTn5UqSBtmPVytrRyea8zaFqM1R13oS8NfMQ7vBgFA9jmKDwJRX7NQNRRn1AXKukL",
  "key5": "4QtT3Y2qBg7TmptsQDSCnTEBPg3MfsAXhFR1UYbggNt52nbE3gzRd9kiuDBsQB6GBvr6wnWisFZky5cgdPwX1CQ3",
  "key6": "JKTuhHcUmBZVKouEykZW3b9b3sZ9jAaXgJP1tbmZhZmgyj3xB33HeekZZ8BaoGzucLESYNSaFdX5Z3fmn1ZaCgC",
  "key7": "SnCYQerUL1hhGhdc2TqJZafe8hnymVFgYYM6LnED78YLT1XY4a7FaUa6y3hTKweEGCA51ssBHGpw3jg3NjiuwXU",
  "key8": "jodyuPV2gHQchhASKS9jhLArCpdT8cjZ3Y2FQcBc4FwitK8XvBi8xwZe2yC3ErYVGpCyNYP2cC3c6h3LAXxKKmW",
  "key9": "zihbZq8p9sYsEHFuuK5JG78vknueFw5qvXCqtRDbTQnqk1W5VMiKJ8XWhQCUDDoBj3dgddGFMRnQjnyGiwnAsDK",
  "key10": "3EZifTURKmhf27vXfSKh39oKtVKYz9NLnrZWAJriHFgwV1WXWvoq9PJPVa8prUUghirkB3i55aGkWXxogyjQTBSv",
  "key11": "4eNin4PikBAq1vuSGErvgRKQeeke29AYRCmznvRJH1wdersjnPPmQitmPzJT6Y8WkWZuKhs1QibszE4K6aTqSqmb",
  "key12": "3P9fSnZDF27MwTDcLG6AfuS9YWdoWVFkYKSzNYdTm4Hc67osX2ovc7dVCgF1RpvPho6FVkhn53tEujNooUTeJ68k",
  "key13": "3HYS89B95LcckK9V7gZCqvEtysoZbLe1yrNNgaiU11DDMcVwS8WGqysN9sndk2jz8r8vfsVEUUwp61nBJNnHXYxZ",
  "key14": "3gT8a8dQtUKoWdpPne9hxisA5s2pYj4Z2YL1jwSTsC8F7XFzfThi9KzDJsrgEU8hR7r9aigKrxeznZ66bNjQHw5d",
  "key15": "XpLhs83ZBDpq1Wo1nLP5ScvxmtQtteWUPAM7FLh9Au4mUgDugT6BMkGryxRRoGW5FPM3j1Au5SHXn8tFzus715d",
  "key16": "3eUjSNNG2x5MtyQKo9Vp5pK3b9wYErRsyDG9q67FycVdraZk5UcRx9ydMNthy5m45wNcTBVJFj8qVDNnYcJVws9W",
  "key17": "2SnFmvrBcqb2Y2iaCB22ZuuPvnYJHLtcwZWqS126oYnS95sCgHvZqii3XUpYQdTJqCtaNEotnG4QoxKo7RmyGhrG",
  "key18": "UDXJp4ApuZZRD7gaPWHcLXvvhcu6U95kGmxnndFP1oGbL4Yk3Lm6M55EteDbQi7MTGW1BZdic4tYMJKVeqiuwNM",
  "key19": "4zRhkdXExq6z5NngKWSZGH1ALE1ja2yU9a771RtDvJpgAvAhdz8JSmDxT1CAQejZWyHa5Uyy5TMZ5LW5hSWgXNFs",
  "key20": "5g7jpmUVmh9nDdgari9e4dgmd2t9S4hAt5AdbZLSr2jWzMr11indBbuBK9yRjwP7oH86dKhcqyLG717wrDwGS757",
  "key21": "38N8cUca7uawWe9Hq8LP7NWHgdCjDcA8SEQYZaJXTg3xyMVp4cq19wdAf5F3zaVGgAtrQrww7Z6t2zCP9QkHzYJE",
  "key22": "5dHDV1k4RkscSXPaCHk6ZY95Fo3YjHsJsw2uHt1vFbB6UV6ZWJFgf3qrTmgooFBNBGfjUrxffBvfBNu1kE7dr3Cv",
  "key23": "5gLgYGGBNWr5Qfisx75ThDCxHB38AGJqpxyaVSUiKCnN34XaE6a4VnURPPGTreE8tL8ktE1nGhT1BYzyu9HJDefT",
  "key24": "5hXg2w1VjxX7kP77tFRPbmEyu4RLybfsPbsfsMTGekAUaZcfA76gbMrNCEQRyQChmbfXVxBHWtD84M8waxKRS1Dt",
  "key25": "5QfPTogi3LuYtrD3b8SnFB96AWRCrDN294iuKjCjTDsyuX879tKtZW6PRAqUkydCEgqjuiGcfbq6DyACDjZgqr2H",
  "key26": "4JD3pcHaDoXH5LxWxjUnKfLswUnAMTSibbwMn8QjZbvQCptdSGLbQe65nkCqJsvUkAZrfQNgQCoBNiQx4WMn7a88"
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
