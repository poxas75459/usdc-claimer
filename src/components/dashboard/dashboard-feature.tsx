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
    "ZkaWZSofjcb3EWRo55R4pNYpMD2kDDNBz2Sjxe9HNzPmK69RGbpgAN731i5GrKVvV8YxUGSS2pr9LHjNitmZbRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jCJHRNMxjTcCiXt8uRB2idhqYmKBjsYxQgijUysdFvcDGZDkJA8uqzPkX3bhBR6TFU4fyQEbvGs3oGvnwuCu9wW",
  "key1": "kWYmSMSqnWiG752WWUg4tLgPHB9iR8Cb2WVsPavRU3CtgFbDuQrmekuTrx88JjggkWDLAvsdWtXsWVaipa4y4Db",
  "key2": "3KdxEgGEWhoz26UdyuLdSp29UkseaJF2yJUw91UGFpUAgV2hpjtGWR5mdWiiRgH6d1oY8EUChjFnzmrGr4mFXcVY",
  "key3": "3KRnLV6PSzWNtwUbzKmyBUhvAkNA3srU89yAjD86QhH1zxC3BqfPv8gE8hSTQje5pLtfojMemd69qsbv1zxijRTB",
  "key4": "3BpwtzMkNHFXRSjjyCny5GuY4Bb9exFvk1A8655NNTzQXqNbr9tRg56ufpzkj3DREoJPhmEL1X9hsWhZ89wrvt5F",
  "key5": "3e84UFmTThEUV2XYA5KPReGnAkFJ9E5LsHdCGF73zuwLEBdaN1sfRTjkgnwwCaWmMJUHgt2AcJdjsjchh5zbXnV",
  "key6": "4VXrNh1QHwavC1EERUaUfcyMzfbybCrRRwjuewtBCGmANqEAtajaihMnbifYVr7enhCy3hPVqbV2QnXZb9mrAGfN",
  "key7": "62EwdefvrDDEYAhrVrj1dQeqQkkwkQh9xyWjyBFxaZpPc3NPF3wyCiGKW2Nymg1TXEkiwR16vZTNUAnouj9c8Yzn",
  "key8": "3tt2v9eYJp8XZucmvhuDhWj1RuWQoyZAzuW7JZJTkUpGPAtBGjrXdiXSSEgXu3EizNJi8JSjoyowMGej2ahHEjXr",
  "key9": "5mnqJxZz7xUrDMvZx2FnuZ7KLV8nUfwqZWRteb3xMys9ruX1aUC1mieoJez8vhPyHUHxNEU2dMXNvAYDBsZ7MhFL",
  "key10": "QcJyyeKpCqJ8kLcJuGFnTxEW7UGNksvwzEMdkhTmXNi6HRkpw7qeiDp3YFudPt1BkRnzRiFT6wKHsZu4Jw11jGW",
  "key11": "vSrxp5EPbdg2iwWfPJiNhXJh71VDziecSYekGtGCBYX4enAERuwZNFqaX4ESo6BzanvuidZksyLtZy5rXiNvQL2",
  "key12": "5cCe2FNWaHryzd9JFEBDipHkf9tfpVAbdXEy5E7dapEiJtUfksKuCW82NMZ5QuwaNy71XvLodaui1Szt7GzNTQpv",
  "key13": "2Gmzi27ekhHVjoLNstVYmVRFNXVQCS7HzQtbPUhHR4FQrHgjeGBThhMHxsuZR342jZdt9vK6EFRFV91XYQSMFf6N",
  "key14": "5ZWtUNBqbmgSU5j5xkk6m2JrcJEtR56ahXauFmYqMEJb324adSNXMds8w8Y9WxYTxb8t5cxbSFzhMy7ZhZRJ8ZZJ",
  "key15": "4ZUrEiCWSQAMN885D1H2kMVxG496vnBZVBSYr5k8FuRjVNfnPei88Y95ovXftU5E9pXmeJ8mwY5Wa8efQnMsJkHq",
  "key16": "pVgkwxmtniShaCMpbad4JwUmgLqVtqqwxo9mTJkkbXmhQUughbZLQ8uUA5KQcfego1qkkVqfQAE2cQZ8XmNF9s2",
  "key17": "5f1jszmm8to4Qrc6yJQFoRx1wLm5DGfqNwgQX6dwyRgqNDB7iaqS83NqyMJM7B9mDYGWTqG8Y5YayRBei1YDZhkh",
  "key18": "2QWj5W6Z4yVvZHEbxC35NZim9uYtpB4nxDVDZHt49WaLo9tjKwtbokfFTtDrZswfT7K8yCwqufR6qAyYQsXcs8YH",
  "key19": "Bqh8KMB6Kp2EVW6hM7xHQNevEYGfnei1JEx5SENNsy2efMZh5gEYKj7fYGK1ffYi9BDPUzTU9KnnDWjnkqb6WXg",
  "key20": "3wpGTqQCJnEmYAY3Z8tFoNaxDuc7MBeZoEcarRABRcyarTqB5rYbcdqLECvi1JckFYinSkRvHR1pXGPD5otciPJ",
  "key21": "3MvSkuvUdUgTciXLbUVNVD54LRXL4MTwoKSkFFYwBrRLj5rh3aoNi7a1eYxDBLrZmwD9oDh63KRAjkY92oamooX5",
  "key22": "CqMPxuqvXYk2CctJom66eicUFsGdvsqiVbaomqifuGauRVucg1q37zgcdrBCw1cU6eZDYpmRU829kseosNfbvv8",
  "key23": "8Q1C85rfbVkEZYXzA5zh1qsh3JP6rMc2gkYoPXTAHq6jPdUK8DsLHTnf9Ke3vUXeLGXPKAZcc6AinT5akTw5CRj",
  "key24": "5GUdtBggVWy1FKxye7bCbpUhioK6EhfYGohiY2wUMVPAXxCAPH8QdnSYfx18hfXUwSWQ1YCpndMRLXCXMPViZAQG"
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
