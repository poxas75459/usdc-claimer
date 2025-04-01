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
    "3kFChLkXnc6mjuifcxmkKfb3NQsD4fC3mcn1e2eW4ZFoKrPZPMS8XHrNAEiFyTvCgtkxNU2zTeYGRvHNdPwWnKpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fsZoTBfKd5TGDrHEvZx67DhTSuZJPfT52GL5WS6HhNusuVcjXdd2mN26P8kmN8XycsRx9VK6Rr2bH4x7zcRnEHr",
  "key1": "2Y5bSXjwGZpoE3nqAHzxdBvSXw8vz8KCSAcpd7MAXNDkEgamgcTTWdCApFxomx8ahXTeeSqfZSyFqxKMXidW3dPL",
  "key2": "2LkJazicytCHdaPMYTqXgx4MBtebsJQiDkXmcNoq8Mkx7xAk8vCrej48QqMXwW3Z6ZM8oXmGa1YK7nLeX2Mhm9Lf",
  "key3": "43BxzjQ2jBUzXoHd2bSfmnu4bb4XwHcnfLLRzG9RnoxKm87kWEzyGLiKa59pF7STJSZZTwAKiMvppDW19KnVzvw5",
  "key4": "2PKE4MgTj6JPgaKUabA3Tomo91EpuM7mEDPhDG2DApfzuxXqzTmRGBXd4TgaeS8UfesQL9HTcucFfnEj9S9zpa5B",
  "key5": "5vbcCzJVPVvuyP5ZV5JJYpMTRg8pp4hbqc7veQ4umici2E1pQoLU4zwYyv8QZ1gjp2EMQVZmrx8X6wqVJYzVaXSQ",
  "key6": "5ehQESQJLT32tYo8dQzaRnf9QikGtpee8Ei85nP9TEqukweCfZcoUjHC1dr4cPei4SkfV1E3dbbuSDZEmaEvkhrj",
  "key7": "4wfriNAuKQetdwvGWH9ARbXein3GexvJkVaRxSZ53Mg9JErCmK86Eg8SRL3VaWaZe6wygEed2hx89KDYTTYqLfAd",
  "key8": "j2roABrj6L1WTmEgygVsAkaxfk21edrh52s1Jqgw2KQ4Uw2bQw3JHobEsGUb1oJwRycSh7ei3nTTiwekLrgyZCS",
  "key9": "CjhJVuhDHwq2S4Ce2ujDgYQUxEVgTQDbLYxBHqZvH9ffJH3q4yy8QotcVG5bLLnneEL4i9xZ8ANLXVhjb1gcf4x",
  "key10": "a1FZLwgXc2VsU6UiCWqSyNF2uci5p4uGwaehdWgfw4zi5LDss8ruBqreMLG9XKJJjvJPi6JBWjSfTBP2jUV2CAR",
  "key11": "3LfST8Dh9M2Qsv2fyHPeSa1q7h9qD4NBkiuJSqhJdkVwYDkRb8LfksJYEU9yH3NGk8moezL8WZ2i7L5TRfZXpEpd",
  "key12": "4KygSCSQfigKxe6rbSAvNmh4iqT781PLwHXSmUPBq3SwebobaA5kjUbQrvdy4EjJjAqgzjjNbR46wb7QhKX5jSGw",
  "key13": "NgQJUHM7d1N7kAWYiAETGJBmi1EZAi4xb5ktcgWRoe7vp8V8s9DsQ1QetyeMsmkDTjGvXgrEs2HdWBuhj2qLmkC",
  "key14": "5ayhKozGDmc5k836KjBJFJM3Ds7ghn17bVSd8dMSqxu9ybo7FY89GpsiejQP6vk5nAPN3mkWCaxqkBPCZHtjX5ii",
  "key15": "36hEyqDEz34L2WmgZMeUcFxWYZwxu1pjocfuLetN41JwR2LEfY8oj47M5AYLpN4AizKEse7ymiwHuBM7NiADEuzZ",
  "key16": "5kUuQ4BJJxq9rfMV5cz4xoQ3FRsjvYmdFntzjXw5PmiJ3App7Lan86t2ycoRryUDmGAme9LXJkV7kxSkNTwGzUxF",
  "key17": "3Lw6ESD2nWcdUuK4L8TD9JvhpdePDZXf6sHU2iMSTQ12NnJQeKo31U8iBBVfh3UTjjaFkenU254KHgx83YzFHMq4",
  "key18": "3r57ArnC2JrisayKXLpM5JCp6NrXsqbxnDo9mtLSFAsm4LxdN7v8rdfPDkQefUPEp8S2BjAgKDJqBZhKoNxnSvdv",
  "key19": "43eUiyWhsh5mxZmbX9DteefemYbweMoJ4yKtgS82hcnj5FuEjZ18VN9c6w4tMAdU5Jq6gJkpaWU9yspHmtf6GTww",
  "key20": "2eBTRi6tznRTMKVjY9UcyjNab7Dbbkkr8TGbx9oZBY7R65coE1LT3EXfHokrhaH1YE8oVFzMMmTaeuRBJJju7KpK",
  "key21": "5UUMsedAQFJCQPfHK46fbpm7hq4aywZgVTmncUBLuLV7RAkttENoznSrguuaN2q8JNZuuzEZofSRjNFEmheroEke",
  "key22": "2v3MLuiKugCQZShaXyG38jMJ8EM1nzX1xDX4KzkcxUXkHhBYreJFiAYZCbuo9m6fKfvg2Dv4S3MJXot5HyeXMcZJ",
  "key23": "5a6sgHwTMeSxmyp5NM727ubFYzS3hdoi5MNaht4Um484CPyvKc7kyTUPPauQfwp5nK4YRnZSK9p23yk4NiX9sfte",
  "key24": "3ihi3JhFGEYqkQNRJzjo32n11aUa6Jgx7ZVuwmr6XwLN97kS6i9ycjfeMDCvx2nb2DC5vrNze5paevwHf1G8ERBt",
  "key25": "vWBi9R4Mn5ufMheHEsDpetrkeZmHBeFo4ZpcFoCcXNa4KdC5Me5ZPxZcs2rDKeHnW5Dfw7NFgNqCZNBCo2ofxoN",
  "key26": "pLJNX4Bgy7GFQgX5YTVbtxWLsCbY6gXJ6PEpSGbMyeR2VCgf94fompKpzSTS9HjS61GxAmM6fSYuPLwV9jqzPfb",
  "key27": "59Szsxc5hnRUf6srUnAubwHMc2z1Gis3TdD3CLxzp8LV1Vp7wUgJdnbNAmKkTa3SCT7VmH357rA1r66ujk42RztY",
  "key28": "Vkg1bSfz9ACn2B4zEP9W1VdP7g1eSSkZeif5antYUnm87i5R25YTCCetWXbQMcvtgyS66kaiq5sh69LkMtuvtoQ",
  "key29": "aJaAitt3wxLdVGUbLvTptcfUB5rR77UEwf8tBMTKRZzKZus1b41JkbZmZZUQVtipppX4wtuy4uyw34sMDp8HbmJ",
  "key30": "Dk3M5SPC3Deqwaw9W4EWuJgidrbqATEGu8763k5Uk5wmkES2DXZHAqXHeyHcE18ndiprUF1WEF6iGNcKNoZAeeD"
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
