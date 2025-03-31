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
    "6RjC7cbfteag34ZGmY2DFrCFy36Cbnipfucc8gwYLGKi252LwsXDQqENiaf8NCdmDzEG7Q1dGXCtKAnndSZgya5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TctVeogFek81n9f3q8vmrgMbtdqYeGw6YoAruPAeGX4SgjQHzLLA2tbquFanguhQN8EGnQuUFhe8rNuREWh4xiM",
  "key1": "4tfHnC8jpvnBvs8qGyQxKTPFQuEBbKXW8bfz2dz4jPNu1w7sjJv724Ust95ofaN54do6fPsGjmF2geLmQcbwBthb",
  "key2": "5BTMrUqY6Xnze2NXrPb5mvaL9oocddXhtrUTZL1zcB9itA3rBwndfUTv7vA1E4NAveUe5DUYJfC16pwYGcqFJtR6",
  "key3": "64FCvNd37xyL2AqcuTEndfTHo8k6fTnJE33U1odZpD1SoCbsrKsLGY18Mfq2D9AEr5hYnhNLVs9p4XbiE7Y5DdTx",
  "key4": "xRfLxDDg3oTznCayZyyf8QRmULY2M2Jh6jubDggYMKjLT7uSbGwt4fVfBzS6XTtGwRjAX8YaetYVoiQedRKer97",
  "key5": "52ohNz79antQsQvbEAi5RXXQ5tY8S7r7fJGCVyYcyjsg2kehxbSDesimaMECeRZ2PNU4GX3PHvbZzexsVtS1xQv2",
  "key6": "4eC1CySYZgtadr4BYKWyrPZjTrncLyU3nDzS292nxD47D9a64vyCEP1zxZVTdJvDV7ProcGLbWhWGFLnbTC1HWCz",
  "key7": "2Tgj6uSCX69gkeWZjj8NhnMuVbnUnrqVTtDMHWuTW4QHgc5YsGTWJcnZiPv6EfACjVY6Tq6H6jkQ7WCB1iy4hxdj",
  "key8": "4JPeC94L4cvP42kMUAsb9MVPsx95peYjTRRW1MHP8FVCJAJ3LirvkYRJPjfxRNCqXhHRzrxjftX2WYbh1p4wDuxK",
  "key9": "2yGkAmsGQXKH5hriEaUS9T2s71hBT3m6imKVi9f5iuthdV1z8zHgYEuaS5AqqKBE7jaq3aG1jdkqKvw58JjJYvb3",
  "key10": "5LCpv46Wcc6teLNc7MMNB8avd42fc5x2a2TjjokEJhwD1EpkDTh4ho1BqtsyrfN2C4VE3JwD3EDyg4Maaxt8JZFk",
  "key11": "5eR6qfMr9UWDxRx2D3Ve98RQmKcaKAEJPLCCHRvKwMTif6LrsvsHwqKRMDwr4yEhmP7nB8WKboKgeFK4LquAoeu6",
  "key12": "1EkoKEC3QnYVGARwofup4dTLQqkWr5UUr4Gd2YTPsowPkZ97wmJ1tw8raicgne22kz5qL1VJoEEAyK3yH1sfcCW",
  "key13": "MYfBGBfJiH3hdFJLAxPHHcy2qJ2KggWPDWNuBATWBu6kiJU92fQoe4KRAasZ4jasmS8cGyKNedJAGqzvvoc3Ydw",
  "key14": "21BkigqbGQGaUjQvk9nHt2hWgB5WpH5qBAHjJkXuhkd3k55Jv5gUAGRStH7RV93xLzQiz3ukNA7dZxjHd9M1EJJ3",
  "key15": "R33di4zPANBiecbS4FFn8cqUB9apquYdhUibfdDH7EL2xmN6UTGKArsk7SEFspNi57zbaEvHQY6brmen9E8RJmC",
  "key16": "3UemSv35AezQ2KSUgPFq4cpVkJ9eYHBMxYrTnXJaahoSpEoQ6wowfdJS9Er4v5TdcJF3zwQMS11yogpK2unoLz4k",
  "key17": "4qdNkBM4swRbxfHx8ku1pQV1E7rFLJ3zLxrA5Uy381GT2enqA4eZtTKx3GP2p2m5XbhAEwiPGsqtiGJrkejsoZP9",
  "key18": "3szYw5hhq1tXKfeZrVeAKAvkDdBxEDJETho8y1qUdMarAvuKwLEXhshxyYasvmKRsp2Jq2sFhAjdX1EAyCf2i43L",
  "key19": "2vj8RvAx7nMQRwuVX48FgVumGH7ZmD9BV8cETVUJ5EdkQidjszeoD4cZ2stGMxFrvpiRxeJFKC75umdc2iZwc2vS",
  "key20": "4xdKvgvdLB1vnYuBRWQQchzEfPH64CBeo8cuD3V6RLaXbUBtbBGCigTipnLV22RYoGZs2ECu5rG8jimkJY6PPR7k",
  "key21": "AXJ22oaM6H6y8kEoc4henPTZZiEozP7SW2dWLRhZTT9FoCSFyTWsVfpthJJax1oQD8fQxnzzJft6UMs37xr4zBh",
  "key22": "531o8XaFS2Ve3QqcDgGSHhDGQREaQEaEtconhEPp3Qoh2b3NipXc5AHuRkqR2y2ufqy59DRXqJSqrspjQNfKpWY",
  "key23": "GEAen3XMstBai5ZiWmqrtFjLhndh1KwaMzzikbJ7VjtpG2UA6K2WhpLXkpemafqVyY6gPhSkJu1XdhgpTTDdKEF",
  "key24": "22A5QqsAZNyqZWJRWBAqBq7EeC32kdgmMaARbTEW7GVUPCPrPTT9jdgbp2tciMeQMeLCXrdLfV3FmGn8FvVK9Sq5",
  "key25": "JytDqqBRfUvqZwQjm6VEcTSHZCNzCnY5X5Fja9oU1acUseBrxYafN3ZtSJmHYmR3jNjda1BQsmjfQvWjgoXL2E8",
  "key26": "8tyarfhhUhoTHvh8WsNMDBrwq11SV3m9iGy77we7SGbrNXj1oMxSHHqEJg1AanSy6CkBVFgQQxdZbgAq3mmQ4s6",
  "key27": "22MrbpEvjfshMHYniWjB5j3Pn2NCNFBaVBwFSj4uenLyeLr3eUEL1bqrinZ5Nmnq59zFAA5tNEJckhSab5jjxVmE",
  "key28": "2vAo7snD5wLhjbP7m8u7SV9xx8fLyCfTjNzuJnsW2PztPa7bfsqubujiGxvXMinjAV964epXBY9RfQfNpatdoNbZ",
  "key29": "4gR3QFHXdKaauFZC2ygs4TqNsEgUAUimKjid9hd4DRJh4hdUE5m5m9TMmLE8944mWjxjmiz3gKMmSbwisDMrka4x",
  "key30": "5D1zgxmsM4Vad5E3Dcvce73NBzQa981VwL78v6ocHyjkKu1RJvs8GfiNBedbdz7gZ75UfmZ7Gz3zHMLWBkaxopA9",
  "key31": "2Q9fcRmpwh3nfWR4gUuvyGGZ4w1nyCDcTVfaFBHVkMeYg8ZitkKfbRoNtMo9rQfYz3cRQEfvRZMTRBuYAWFC2e2v",
  "key32": "3wW9uePN37S9w1vpnpHG49owa4t91TwpPoxqX9zR8vsosP44wQUD2ex792v8bAH6ikKU7hnbVoFPe629m6Jzi7Rz",
  "key33": "5sMzGuW3DcZUA9sm1RE66fpHptnUZRMasY5Gdf8yUd9b3XGy6MFmtBKT4XCg7A6rW9poRE45mggkjNKyk848DYnQ",
  "key34": "39m7wW4Rr6SyjxXQ3wCj4eagx3wx3NhAVDJdBg3jC7JyQJ3r2QiWQYpQQ6kSjbzsEswB9iGFZAgU88Yy33MpAH83",
  "key35": "2U2qzKsUwkCfqF8rcsfB19bUo5E4Ft7AFTT85AhqGUEq5Ru8pHzFn4xyLhegC4jDhzv65vLq9ank3qjtfqp7WeW8",
  "key36": "4uDXW1pyfUGAxdtYWFX4MWaFJkyiFPah6XMsi3bcJWLhMAoHkSaxZjnCeRkMPfhUuPaPNN4xKKQvfQCGRjenSunA",
  "key37": "4obJeWgxBpdBZRseWXwz7CbSRkJsfyKxdSQDXbAknzzTftTobSVycAx23ESjPLHpHYaZsXHU1UAAnQDLR6tZJQSp",
  "key38": "2BLPfUbJxJeMSNm2HKaub231Y2sMqUjYiqvngnGKHHJQ87geQjmQ64B6m6fYAzeQq3KvxiTdPj6aV3WndATHy6en",
  "key39": "NPSXNSHd99nxjvsHVJYnRHc7Nar9WfTUgC1YzmakVc9XHTQKDgA99X2uBWcTakRUromaDMC9TNGogNGDiwjgZgA",
  "key40": "4TzGRDSiAwwK6vfcTNDvgE9TtoQM6xEUFDg6BTpGjzwMDoMXMvTLebhgouCgGWkhmDQdAw9dpe9GuSXAvui4J185",
  "key41": "28357Kr2PukZDSqMUzbhibiagGaR5x4b1DBDMum962UjBiHv7wgo4BioPLJdGuEC8Ff5HnyX16E7ckHLQD88EXyL",
  "key42": "VUAjij9dwtQxzmFtUcf5GndGkvSVYVTx18ZaHXicL7LS4GpeXbcHnVmypbrxeMbvjwpYqs3mT8wxbwD9NJBsjZ4"
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
