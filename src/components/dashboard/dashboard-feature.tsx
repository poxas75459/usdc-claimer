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
    "3ckyBbAK8vQ4Y5quR7Xm3uqKLenBgMjmdAjRhWsZG2Su7w5By7VtEP4Efot2TWrWqdwxvwq2NVJ1twFep6PDiWBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Zzi78TjAqiSAW9Vm46Fhuoe6mFUnrL5L3NfHrJ157kYCtY3msSmJHM7B1gkn6M4x8R7wie1vJyiemTB9xNF3Mi",
  "key1": "3gPKWHnqWvG3dQcjPYHHCKtedAYP4CAawVLTWLgd6JgFM9ousT82efA9ML9rVEJf14WHcKMyZu4oJKph8FRcEMo",
  "key2": "5aYdAU9rdMhSFdcvRKeFqs5iHGRY7L3ysU1FwTjqR9FXHxtRqUTq4gdrWNf7qW6z4iyZeFN8m8ZrPd92vwuBdMwT",
  "key3": "5KWAfSNwiv6tTVAJZCVkxBE4L9Sy1VsK4hJXnFNUS8R3j4etUpHDJbkz4sQ7DphYdbHuhjXscYL6KNgCRQQJ6oo2",
  "key4": "66nCBZKkoL13cvGJWMiUqXWnZDK41gxa4UzL2whxLwcmkCDjAAc7dxLQwWtWws5SUPdC2PRj77rQFkzEkDb6R8wJ",
  "key5": "MVDQzz6rcKHcu4nPXG6nw6D9BmAYpfEmT4bKukXMCYDmrsBV6MYGzGUB79tkYNTz7q7nvNys5MXbookUdu8B33k",
  "key6": "24owBB1xrqAHdNh9mhKMiMtrGNVmNXTKuWciC8XgBnecFfjWmpbvbQxPQ6kG4gatj4KPjbGsjuQXUuHMCNcDqnq7",
  "key7": "38dmGVMmQxXgLsAEXd616mG8UoJtLeGd6k8i8ZpDx7kJoFFYy63DhJsDR1XFrVn2cyLZG5KyfzVGr1NPipiBsFg3",
  "key8": "5feqNwsbQfBW36nH5Z1HpEeaH9tdbZdhb3kNuvv6bK63TYvDQKPwaNoZLVQrT1oeaSPwDT63pYntFe9UXpizqHM",
  "key9": "2Aed8egZN61x6JeQqWQ8AidUjCxvJJAfNFVS9E7UgB75qmACtocUZwsvAFyLYS6Adv4T4REAR4n7ehVRob2cMuNt",
  "key10": "25BQE9SrdX5ER6F5dq6jpBQyYQgfmAFfGbY7gw8L3QHLpHzLM5fHGGVDHEqKabeBGSHy2XE3XWMCqAqZsHZxfMbe",
  "key11": "5EPejqC6eCBvyVAgXf7UiEsrkAfy4BBVofC8D7wF4JnSpcovxdpVhbTVKSpCBMkKxn3jvPdiJSBrgYUf7e227Nsm",
  "key12": "3RTFj5F5skpV4gDVwpbYf63YLG2KXfVtkubj5pxkdomineVChXnAnMiC214LwyXnG8ndAhb1Lf7BX5UBMHMgrzcg",
  "key13": "5QCrscp5mUB1rPY7KAofsUofbQr4i33W1ri7S6CmH7qYdoysQu2HX7HvuKYkjW8QTm3Z4jofFew1gJU87yAcEbEn",
  "key14": "62WnrG5hfDMfihLzkoMKeDMM991A5qhXwc4a3vi32mgMumYygLJzaXxh5QC5KbmNeGXqJMvZ2aJpskoaFXdHMFrd",
  "key15": "5icqYt2vC5NjBayDVbpYZavArPJgSXm75ykp3Y6RHixKNUf5bXfUeJVjLEe3LbyW1izg9WAMv3Gmg7U7d2jApm47",
  "key16": "4AGtXuiethPEjUsmPQWos25i1wXJrRtsTMHRAKyLCFUaEvSDJuV6Bi71LD2nM4w6GPF3GnJEu59emaJQy9kVJKdD",
  "key17": "2BoyxhGresiBQm25DwAPowyh6na4p3k3Jqq86yy7XkY4bDmqWGWCwyju5K6scVzHMCA7zZogg53pYe8TS64teoFe",
  "key18": "52Qvj6Bu2Z28YjtGYSX6bELC6VCYWE4rkwLL9cCt947Vf2Du4nYJ9KYw2Hq5dePEBH5grEvNBHNUigoxbL5qvcKq",
  "key19": "2RPkFvyiRij1Ue4xyZZxfs8AQQ42HjQcwR4oKhdmmAKJU2tffxkJAgB9wLGeTHgYtxuc2sLPdT3Q5jf3doXpvYL7",
  "key20": "3uNdocfvfNLuVhorkzsGFikvakQKVnukfMbTCFQDyWL836JgRFJ4iXZRzEDUJHBWCtAu6WJeEroUrJ8eJ1uoiyUd",
  "key21": "6K63gTMbE5SY4eT66pNEnvhS1TdMBwS67cUYxgbjJhvugsPhVWQb6YDUoBnsDv2sQmjGE9dm7c2gB4oiX1GELKk",
  "key22": "mMmisR1p9akhUNT7d3Gq5SX7nPYdT3hvzvLphMzqKNPEmuWbB6ETvUjeDCcH9XryGS2ywL4tXHMpEBMb5TNvE43",
  "key23": "3VDmxGNKZzEiDYGEi5XKqRLarZeWeMJsXL7gsNNhGe7QT6HoJT3v4A4RZHjrTbXLpMJ2kfQeJPdecKbfUSpYJX2T",
  "key24": "2Yb9E8RVcDN1rQqRe8x6iMuWDAC1ZuUNG8W73QEoj9mDtmyVdyNFw74MNvMtZQkNwRHR5Sebq94NYyjR4tMcnWLQ",
  "key25": "4hFLbuj1yKiEgt55SDiGkb63J1Z6zUJLygzmNnh7eHkmzPYhEDWpNRac6W1QfrwV58soHmeaxheSg9vZsgDo6Zrq",
  "key26": "4Ha5oD5WogZcjCaUq9nurfufdAMbXbocG2YW5FuQgc1jpavxxsRMFBP4KZ88bUmCJA6nP2GSWcAaCyw8xpDMkWet",
  "key27": "39nkQ32nJBQotRMNUCwUq68WJdNq41pzSk8L8N1TwNqqojjdqY6bgZUxGgfPy9Xm39o5cNcYeoHvnooLF2f12AdR",
  "key28": "3Y4MxMLT5xTs3qmf65Es6K4kN4ESyNdjG9hxkHPSmvxauzoSiVU6P6P3yWop9CDMcMH4BLnyBDuaqmmbebP8FUTn",
  "key29": "52gaxSdwAbEv7oh2ibuLBu3oHVHMMwPNf1qyF3W7S1WhqqEUVFF9znogyWxcav7j7fyYb2dLZg9UxMH4TKUA54jr",
  "key30": "2xjEgXGJd6uJ6QP7DtP6S5saQrZ8Dj1f9EU7kC1knH22NS6QRQYgsMa3zbRbsVwRyqob7pYatZFe26muChedy74Y",
  "key31": "2AsDeuuwBHdhA6pZ6z6rL32U9iuRzD9Dzba3VoTZ7oaoRPv1k5rEayEgVPa7AW4ekTZ4iu9fHt2kjNandnskcAYc",
  "key32": "63R8kGex79jND9nbMS2xdgjp77DxdtY8RLNrttqYbgAajqkn5psDGR4dS3uQpYTnoBoW7X6gVLC6Dkt151xpvaJ5",
  "key33": "7381ou3XN54dyAY5qqQ6hdayxrgsom6tqFQDFuG9o1wUqGDaHmoY7nefqUJBPxCXVzVYwFJ8M6bPAyq6P2rqkGE",
  "key34": "4AsJuVikELSTeRWqGnPLtk6hsZiHEigRvPtqLGUd3qojKBSr6Eug74TMMND3N3jTcsU6tV7MBuY9j6k283B8EfBZ",
  "key35": "2DdHgwTpCNhiR3SAxNz9XTFzkERWZ8CwkdzYt3oMNSVZreARkTggnYu5cqgaP2CT4gpRG1d4SFNPVD44QWxKJ3Jh",
  "key36": "5zGBke2j6vfwc3mZVYVKiYhUEeKhNVyiVX3Dk6EWsABmb2tj3Xa17xHs2HKA9wk2AkR5RvCYw5JiGyZ2eoFbP74x",
  "key37": "TiDcA1n2Vu51wu29cdhEnHapG5SqfnbW6hkgZPzMJ58yupxChztD48jbGb4wnKnCaKLJomTFHn9DxvocjH9bUHu",
  "key38": "5dqMJdaDhyJZbVm1aCTQN3vNwu4v7qbtW74knTTpjDkFRheNz6nUCU8XxjGYTc5uXzHicuNoa1n3vSW9b87NDYow",
  "key39": "5B6mh4rd4FQLCXsyHy2LjjeWF4aCYEweozGyYXHTXcRFaSyhapPXHDsDDzNytYPhqmc4fxFZoNYE7Y8KQY37yasD",
  "key40": "65jMVJoTfuFzYeYqHPpTcFAQLLPwMhtb763U84U9yRNXdG5esQdDVXxq3hJ9zjzeYMaPqUferTMUCsE64cZp3uZz"
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
