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
    "4z41UmRbab6mxSz3uTSjAh3xY4aaRyceXFU6fXJAYy7F96dRqhiCcmaTEHSPyXKw4sufinRKdVYJ3im5ns9VcCtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CS3cqw54ff68A3EcPCT1qPbWXEUxPojccWBgAqo6xT2raAHVBZmc8sUzrVKf8VC1BYM3MvhV3psaKT81i9aDgVd",
  "key1": "nmeQF61gsuP3kBFScVEgfT7rkynxE9htqAsUKKUqvUqmgqEBnneS8DzQYvgBL2nMr6dgozVNfhSHU6hKdp1k5fz",
  "key2": "2Pi1fJY5rTq2QNpZ9wnErvcaf4RTqhZ9tSPgmVHcMVbLkYHDtaXPJztuYS6vh5qS3csdc1xymvCLZjNywC1pZhzk",
  "key3": "4EkKEnftVS74nyor5iy4Mw36SsnLrmvbeLLSHWhWqvSkprAwdoqyBySqcKVkk978BGVaRGkgJHNYBfiFSr5nNwzY",
  "key4": "58ZthNNwYTqPPUUDwdLCADLdGSxgHp6pM4YaczsTMLxnzJtEGsxAVwkahxeRuJWZUV7XBkPC5LJQW65vYsEFsNYV",
  "key5": "2nKu1RPNNSJZ3PDv6zd1onRuceB5wGWQWNi13BPjjzfaAE5Wk2HfAz9BMb2w6uRax76g2D2yVW5DiBS9bFPHvMep",
  "key6": "4dj3aoUr7rCBouFg2aaQUoEa4kbMQVqLNf9mYhzmLuF3sHiDtVpNeG8N4CMc8NTNJgV5G1CXR966SFMHSh7dyZKb",
  "key7": "3u7w3UE6rvvYJJBCCXMi1TGgyV1mRuMB4nAj97HFQua232A2WN3c8GoUQJBPQiQ71sC9zH2tB8zjFGPrtPKRpJ5W",
  "key8": "2fMu9meb3DvNLgdMXDZcFudXbg643w5pKz24rRNTwCAUQHXPzYzRL4j8CAPP2ekkWZnhUmPXVBi4jiE37kepXLnx",
  "key9": "XU9fnEp1nSV2WZAfZ9LkQVszyXP59c4ZXFNCgLpjJ8HJw913xb13r8z2e7QiwX6hRhrkANzaBF4VRWFgs18M13Q",
  "key10": "5Y4HGTaYNVe9qAcoXkXAJmgdJM5W1U46oVUUxM6moqaFY2U8Lef3FtNDtXUwhsTbLjHMoXs1HxdwhU4anjDsphzL",
  "key11": "3D84MwYeQ6ckKAPtVwknfST8CDFKHKUAoyFyiP5Do5WUEiL1irkh4oynYngfZmuJwxk3qHWueH4y5eYi1WQPEpnM",
  "key12": "446JuGszza7xxxd6gLosu3YFP4v4h1tDUdoeHpwsSZQdAKy6iEs4RTwdaygFMbDRyJEmEEeRVi7hgMwPjZx2KkZ2",
  "key13": "238vwYHjezJkFM1uVqUq4FfWa2nay8CeK7LWcvC1GsSwt982afRHwZU6Z9vcLTyXzsMAnU4MBMTrU1xu7V1ULBcq",
  "key14": "3KxobJdDrxT85swnirGrqvqdBkNpFb5EVhDLyGuPMqUd992LkCjdHYs86sCHt9UZuvfeyR7FRU7Jeuiuk2hpgALx",
  "key15": "5F5ZTXyKDQY7A82ECfQSztKuHacRAPWdcT8dyTmYTRy57T1mG7H9KqyJjomXFAs6FNy6zzF5Wh24CSfGyW71oJ56",
  "key16": "29Syv9CEAFsLB3YhY4WoBiHeJN5CyZrJYugUaFqRT8PBjZudiDkPJ3LhN84vCfhV5RksHXEqFSGmALRX2ZnozbcN",
  "key17": "58psn7nSaVczzuQHii9e5e9RQVC4udy5UVyX1dN4GoZb3Xqon5gMz3xey5Ji9eamQhDoxhGFLLPVCCpaZRY8S223",
  "key18": "3Zq9dw5hCbMzX98um64vuA93qeEmwwRaALkXaCptFf4jWHepvfgQUjz8XF4yyNKk6K9b9Kth7PMuSGdeJzKBeV55",
  "key19": "4a6U9YJ3BQomBLRjTmcHormdsFsK5TttFMfRHPRkPRG6SUg5dWWBfuwpgLrAehTfyV5CJTkrvbSvK9tnkz7zcQGF",
  "key20": "5zQkGc7PCrUza9zQrKtRawvb9FgshUGe96Q3yVkUt1b5KCWBsgVtELs14Wh7nZhvJ71hmJoo9Xko32fYMi7zHWjk",
  "key21": "3TEcGqjYY8ZwXpHkFb4CENfarzn9RbCPfByc1EAka1bKvyN3dS4cbKzKKYNQzayRkLeJRpkU17Gj6WjVk3CuM86J",
  "key22": "ZBxWwWsiKWpqPtKo2z4aEv2nocA3dYHRndgjGicBvkLtebUN39neGsCuffNNNS1o1nuxq9Y417AYxHfMgkAcxoS",
  "key23": "nF7yo2pS8szRZE6STyqy4oWeUTDXT2j4cWZRLqButzmPqzEaxFKuPeLmhivpj8iRqBteV5ydZ5rsTwfVBhNzNPj",
  "key24": "NGWVbYSrpYFgnsiGNxPL8iqJdg4Apb76orizWGgT4o2dAW982BCLd1tx7Nrsn7sdikQwMkenzsSooJysDVY36Mq",
  "key25": "3yiZ5UMGF6LjkMsjT9u2Q6wRWRCXvogwJgT4n9nJHxv3wDnvdUr7TYNTnFzsi88imkPrHtzGYjmK46ucfR1dkGjt",
  "key26": "5drCJ43oGS61W99VinUxhMYaApwNNYKjfFsWXFByqEhZkB9ZtA3M1rtaQKDK2QeQmGF5cxx6eXL9WWMsbEPAscRn",
  "key27": "4wEfQYhy4kiphaa6MPLABXw8zTWTeXimmJS6oiHFMJjFDhUPXf1MHUhXfvu3sHpbMfGjSBZmB3FCXBhvdJTWKELc",
  "key28": "2xp39hZw6T9cZtiiRtSPYLUvVGBbJsJ5gPXBoMyWRRNJfMy81s1eyaRHdzFzeAkRH73AyuugFcARvenwy5Gfep4A",
  "key29": "55gJub1Qb8VWwz8RAANkc2aw2ifazyG8jocjgy9VkZ8vFQiGVSR3UXGFTtQHJowgtVYBYEa3D182E5ymoUKpxwMW",
  "key30": "5VVZXZiKVDbPx2dynDbqnapGnmdMDb9xC2jFtMthZyrw8nbSA8UTfCci3L66e1tjA182toU44NLAdokmA4fusbKu",
  "key31": "3aCwwyPrHZqb5NEpRUKJaKEByCGN4xnLQJLYSMZenuQdnf3CBRLaQAykoYYRyFemUVdYpCcA9rPEE6X3qermmPSX",
  "key32": "4MaY3Rzz9oJxUWAiPJqi6t54Tv1JkHmQzZoVeob5QV8DV1JyCDgqeqx97HsqVmK4Z8dFWqHFVMJYNVfNiHgaebZ",
  "key33": "oTBTBQW1TLs68qYvfTrfRcw8oPeSeife9yx9bAPBATRhTYcMrEGtujA6MuUHixD2XoqhKkMXRytAnU5Xhcvc6U5",
  "key34": "3vDd95PrZRw3vLH8Yxrc5o7PRrz2mCZFAXTUF3KgwHGu2hxur8Mn28s38rpXHVJE8jTMTGJzcwshqPE72NYyEpSq",
  "key35": "2MwU8jxuxbWSB2y5fsV6StMHmEhjGXdz9GAuW31hYwaYe99fptjSHfKmKSM1PchifQLroct9TR5hyDhm3VCBMiiK",
  "key36": "5EWwj1qjFWUZoaZctHrctVBN8X3y9a2Xxm2Jj9bbJ2zmDPxQHeaqURspSene792ju8fSEQEvpgUcaqftMy9kih2P",
  "key37": "4p2g8xVGcJoNGvVdM94E98KGSvUErDMmgnexKzddq7QgMwQtp8Y8stXoNXEhmdEEfPM8vQXbUGUZ3zdWeueHXZpk",
  "key38": "3js1vjqCGMimaymseRQSoTcTjRtoZbPnzn8ZfjqLTNLZ4XjoyojYhieRLSgUQXDpAoUXhXq6TKm24qiKFgKDi7E4",
  "key39": "2finj78c4ZtwLz3jdNnkQfTX7GzQm9W9PPprRv24ez3Wyj4DrH59C32EStkaJ85wbzhe5WyQ3Ri9A76JWsZuxgtn",
  "key40": "i7niQaqWuYUbUCxgBmTPrdsK5Lhy9wWhKKRSZ54fZpJdwG2UtmeeJACMfNdTaxWyZNJyJigei4qYav7MfoiCbLg",
  "key41": "4J4mGYcRUupcqttsbUWdmHnBmEqf1ZQy3syyYT7qCcougAddDJKbHE9caZQSBfpgshoUYr6nwh5mP6gdCXYrLo3D",
  "key42": "2pGJ8DWNHaRXEtMzZmTAKgYaKzARh4CvjHgRqZyjhwWJjEev1F2RYim9by9aXFGfSHpfon2zn6NL2qpLyRpcdNMv",
  "key43": "46MP3cUGECuyR3HT73WMUktfyKSXQdGbZuEijHhV4LY4UoVE8QsjYdiueeRv4xLPFcqMvn79GFzyfQeM9wkdkc32",
  "key44": "587ZT9prCCqHP2DqRZJWzrUmz7XcEoHQSvwF6vMRnzeD3eG5R9GCHeF1mQmqeENMwd7JmC64zcnyNUcf6ZekoySQ",
  "key45": "2jLx5KnXcXvG44Z7VzmTRtWcDdpr7FdcsTyiwJbxqLmivnLwTuDB6ArsikCi9hoZJdXBpYTcQdCpb4Yd31np2VsD",
  "key46": "2URPABST9zL8bpfs1dY6j7ZfsFSYgEELepkbAuoDfeCKamrWDQGzt5niCn5eHChJ16E8Kxf4GmqKGFenbrvvQvs4"
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
