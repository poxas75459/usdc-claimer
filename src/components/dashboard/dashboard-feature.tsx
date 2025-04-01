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
    "63eNaAiXCaqGQ3tjBLNCRQN9UfLCYQxQx7Lcm3uBTvi1a8GHYbnrfs2onGRHdy79pUiKrnRznHqysQTxhuxAooGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B7CpM2DS515PNZeR6bHSvyFqZXmW7vLH3FzLnP6X6wp4AC99XV8pN8aXi6yvT7g5bCUBtugpH7sBX1b2St2Vx7N",
  "key1": "5UhRA5rdobquGuY7zHZ8saq5bhf3zA7kuLbyk4EoDnLApR3bpabqbRUp1pH58w35hjaEksFcqSyaADQxuU17ZyzP",
  "key2": "5yupQZkTYt8cPG2JEHYjvbqxo7fPYh4TDkkFEfixbfgZRweXVRVCdT7BtPESysqQSQSS3V4kgs4R9f49o9287cDP",
  "key3": "8sta1rzewpgfA9AfqYhNDkmB295AyKR33q7xGa3ziKjdFRZjP98f42iDhaTKzhk4MtdhnGsyNdXE9dyR88YYNMT",
  "key4": "2Q3cK4Ges7VSh1cvRNUQLgSH544c58G5D5A8gao9eH3KtQLbFsUZZMWQbYPPgMAscbrdnZ1LFVJz4TFdkhnq9jdb",
  "key5": "3EZSYULYHNRw1NawrGAH4hdB7xvnn3axyKnSvKbyPnZ8edQevSGBCQLD8CFcoJEqtbqSExfyRmKKN6pSgyYuzBPC",
  "key6": "4pwcoeTnEQnATGYutfqgcSoQ93qvG8DjRAmvSWsZigc21LKt1xqDyY6UByth9oqBCZnwxAX7AC3LWW52xZXiFTSW",
  "key7": "3J28TZHiFxhT7DNegsh43xT69dQ6pkW6ndUGCUUs7Tt75E8p9CAQcH6YTCCk9bCwa3o53atQAvEX6oLiPf5g1pDj",
  "key8": "xRf4sgkhm5dNDzu9QN4NLtE69UwmdBXhuQKHFqXDx4RYAK1j8skHhipPk4bvgy7ZrxjXmWBdeTodJYDD6VXS3Qv",
  "key9": "j4avaGapdBGeHtDnzjzbFnS9VKTZfrjasWqQgvb9gv4BUmuwT77c69SiSA83jn4PnLGzSq79MdBk8ciCyPqKMA1",
  "key10": "5tdkSNWHvTv9yRhCQvJ3BiP8gPu37UGFUXGiqBhtpbTXsQCF7fAkNmhD89kK46RrUddCxmtPT4NvTxp2XCLhoXRh",
  "key11": "4LJzRNGuLgSSkhWjfLgDEApyTi8cacGHeL9D6Q9HJizbknDHDYds8uqmh29eR5GBeqy1t4CMRX9AxhSQwNPay8Nv",
  "key12": "UPnPg25pzqbBSSWkrcDAKRWmg3xiWAidJPbwMMvfW4tR4GAVfJ8dp1u8R5p94kFfJw6MKM3WYm3k99Jvjk41PPM",
  "key13": "3Fm2jQCU4d9n2d2BqTDqTWQ5jEVxspmCh4Gq8M4tVFyfQ883VtamVrHiPL4JwUtTCGRHA2hbhgQ3EVqNxF3iTNTt",
  "key14": "61oWaJy3KmpYf6UD9yg6R5qSGmLLrqUnw9HWBrFSbVa8UiQmepMmQTp2CKEWxZy8N5poUUoP6YGVvBX7jMvawDu3",
  "key15": "3YspLAD8Tjd2p3mZKiH2RBUCYXjVit3vVuRjauu77DEgGzxRR1Q1V86ewry8Y8uVjSBvRWb5Zi45YvSs11F9pE5B",
  "key16": "2dAGDn87Cj1TJDvY869wjf4jJ2vJ48VchcCj2kYkCH1qigqCYKhM74wXo5m5AHftosYmewYjTdqPSthJdY5XGjfZ",
  "key17": "SWBZjUGYyFQQZC7oeX26bwkoivdgbXEYnD7d8C5Nzyf45NTkXNwqJyL6d2nhdn8wypBa5Qe3skr71vwEmpZMUDH",
  "key18": "5PC41iVGmNxXr5RE5L1WsBdnDBMsVCPmmgpJzKUJqHSwf6S6ASyhY9mvd6wkpbR4EDH8GU3kphEXLEUwG1Ebs7AN",
  "key19": "2Q3y5gLaUG9ELbiBsPd45UMqiN4XKovaG41V5fYNU5yrV5qFrAmopvESdpGUgqsXAQFX6C2FG1exetgLxm8VZnyy",
  "key20": "3tVS1xmXRtGRDfyZMB2kCra4JhD11PbE7QoQX61PKDXTJqmG5i9VBaX7ZM8meH1dueBkZ5vKVBPQV6SPtrMs4T9W",
  "key21": "4rhyPwKMKxgYPy1rNQYnESNNyipuXTRLBXcfCVDKahE6TFLLnRcu4BqouWfp5qWUDGdUk5t8MTmYm2ttyv1DbDK7",
  "key22": "5Sqq6HXPqVWVGa6tnco9V3RsSfRvGnnSZrTqkCkjARfLcYVkTXziwS4SzKAUTQNWgQeoEqGU5VEJTGrgcfjQLvrf",
  "key23": "4C3xwtdZsGZEpdQ9ypZQca7K8DHvkMRY1rntZwp9wV1xvUndDwt3mVPbwyjTLyiay4E5enyn2fC4RAgYCns5Lpqy",
  "key24": "4TCkPgpaFuxh3AD5WgksZzSZbBGh5KwAKESfRWXYsSiEVm5p997SWqSyv3C5QMyxfCgRjE1BrLF2mS2id6MLEoJw",
  "key25": "5nYT2xVwudovsfm9ctSm4QKri9vrZxUvhdapWLjvryMgzaP3Toz7C544BpoZWyfjYWcJKxFCfHKN2BoUtR2bytNG",
  "key26": "rgH1HL8AXvHNJRUwDQzH453gUhYzUcmXr7GXej9NWsMrFMcHpD7TjZEhGJp4UCD9RUNhXivnGA53EWiPeLGXJFc",
  "key27": "4jRYTWJ2XyuztA3WGquF3hJmpYm59LcLj2dXtTSkSPk6k7jpn3txK3rkDN1KwqDCamrSjVik6d584cMSqKovq4PV",
  "key28": "2k2KoQUJ95VCuXuKseqANyKyaesgoQLQTeYMvvuJxbQbrZ1PLbanwNL3R9XuC76PbpiGGYrN5uNT9t8BmPNMPzSo",
  "key29": "5HH5ewxMLEK6dbq4UobJWJMu5EYsJbgTH7rMWe2QNtuGLkvDp2fhkmRMFtRfR2CZcKiTypgUidFC2eTWJhboZTZs",
  "key30": "3vNbmeafBSvddff1knFvqcVGnpiD7ijy7pEAi4ir5eCZjRUUWKWyt2Hxwmzf9DbG5T1LuJ4q5JfAJxmQAxDJioYz",
  "key31": "3hWhB6hwc741vtXAVLLvutuBh7stNsQFSmP98xPv5X69pAHBpthUhqdkWFERgxZeWEFcgCX8SzM95pZzsA7H3jZf"
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
