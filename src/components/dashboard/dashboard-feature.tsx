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
    "2gwkATeaS9QriowDeZ6Btct8Kq7rFt4t6ESaosCqZv95yCnyvswwcK2rxhCQdZ6LzQNwHqHJiCA4JaqbTyGWFuX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YeCxjeGdSTgeTFP6r1DroxyfVaNKadzF4cfi7Uq3LKhZjrxCUmr4PQNDjubsCyf7FF493DfksrqomXCkw6rzDL7",
  "key1": "fvmwbx2rmhwShjXKeZfHQ7edGifDMb1pUxKSCNmxBUwgqz6wiQZLvJGs9PB9HqNsEwT5yF7UNYjeRAumGJsWMo8",
  "key2": "2VZC3Gdiwq1YtCzsFAQ2PvMQjPqXNzXpv57KRsv4EEJDvfbBa1Kq8DBPfVPBgNzkUMbJvqDkSaWZrAydnVPXBdku",
  "key3": "2vVo8vBWX7EKoNWT755gkhAkR8wzpQWsWc9hwm9fNThZgbD5L8Lk9uVYJY3SzByr8Qc7nMAYc5Nj2u9MVKTZ6a1F",
  "key4": "31boMdBaXJfvEp784m7vvRzYgL3jmL2UZrwUSyrbWbifwGuLUReqSKUK1vkujaTJ7oUxGg85u5YcvroEJbXZ5s6H",
  "key5": "2PsqpYECr4QVJbFmg2hwdG1gMR7F6T5xpR3DDWiojLaMLpLXfEQwys3b9bi9qPWvkve9M7Xp9EZycNpC3yWD12bt",
  "key6": "4ic66dNfCPN8nZTsriLu2iXVUkMzU5Z7wmW3sKqEqmBYrgKvocNZi7t55wjFECPh9wy76oyimRRm6xFQwQnCEMnJ",
  "key7": "3U15NYbbFY9jrAAWD63P7VzUmhiTyZgFH9D47zq73MMRipPNFv5jFupoxwKj3tz8yjrpdBjmUxfCA7rwABWXM7X",
  "key8": "C3hb8iF91sX8S4jMrk3MeJXV8vm7rptobHL3qpasmBz5NqPj9sVhXzAypY4DQp6EGM2ps28mp9oXowTCfHFwB9X",
  "key9": "3pbYvd23utJt9qSazjbdRsckUPxe16BiJhNygcEFi16jyvvb5JjwkNFirjHFQxHGsu3AYDmbocS6zzT48RsQBQjo",
  "key10": "4ZRH5kiZjHXnDPybgapkm283xajx8ZLYWFPHXPboVaRbd7WFvsGCQfXqHcnJfixTfM5k2Czi8YGa8bJjtBAgTfQh",
  "key11": "4wHUssZv6uJzpKvAyQ4LuZpzGDo7xc71DdPFJpRAtXUE74ozMvm1FbaCKn5UKQdBk5KS6kyfLjeMaT3LTVdVSVZm",
  "key12": "4oUKBpXuGS3KahX6q7ApVqh8M61XqhZLDeZgAhLuavavesKJtk7yuWb5N3h5kP62nNdgTHLase4Nvce6E4UzCQRF",
  "key13": "5rsthe3oAqmCT8MsYTaXf39VxqoWBpWgBek1KYy8dMDVswbAu1cwdFXz4y1DPehkbVVEGq4K3Wo9Y7GcTBm7RZ12",
  "key14": "3buKxq3KUzrFtTtCMKtG7TZmXR9JoGDzF7PPrcGTHJBx38AYYbXSHMEkyzGZSBtg5j1gF2pkp864zA92AukgSaG4",
  "key15": "2yVNfDu1xPuXnkSQiciGhojCEeNfTYvAdbjZoy7RqJJry6VRAQXfnV67B9WNpR7C724gewV5AXsk8tEAFLrv45SQ",
  "key16": "2eLc1KCRmnAzn7bptxz1CNYu8iwiwpR9HCKtK27LLpmumLc5KqTmxyQoNERToQBNf2fuindCY9dUkRqWqq7tbq59",
  "key17": "HePWitK1j6iqGKfMHfdDncZxENFy5niSStwTFXZiVBtgcXNgwj6Kvz1NNS7Mn7EH6258P2GoMgn8w57CupuxQFc",
  "key18": "248cieQyfVd4SqQxVwzKeaXuz5e1pcGarFYbvQ4G9zjAtHua46S6JzcnVGHk8csCBvVnQrWfmcyZhdENeASwLRSo",
  "key19": "3Jb4uN9mz3T5rMnDVr4t4D4nREm8ostHGzGcSK9NAfmfyS8QYrTtWHh5v9c8miLDSwU6qWMtkyHs1vpYzezFQJd7",
  "key20": "4jRNzjM9qerCYidXd6ZyqQ77hyRTfKbXwGvS71rGYSz8dtXhnLVjDQ1eBPSDEg8aAGzADnrTSHK89T2TKgTt3e94",
  "key21": "4qdLrzazELA9UmWoygNTEnykTwAUAhMrUWRkW3CAXgKf64oHdr7zRGUYLanMj65xwfQBg3aoV84hZj7QmJyiRSRA",
  "key22": "qK9fvH7jWvDtBqGRScANYH67msFXzz4v26NxvkwieLq9JT8CHdRpvP54YPFcdWE4zgPvAXnPz3duoB4wbmgYYvN",
  "key23": "2v5NHM2YE3dWyz3y71AgTgX6qrkDabSug2qSxnQEStxeMnN2SyXmZFTzHHRMGbfj9LFdwmcZdTUpoVsYkFTPHsU6",
  "key24": "5CzxG4KTm7a6Q9UZwoKx6kTHhowuYXE3xpFSV9ia9A3qM9UY7rXUUPM2n5pK2dhiR1qzYKgG7EgdKEqALwzoAyYN",
  "key25": "65zCZAucHwKdyRFQAbM4bTxwd6B6LiCmx3SVVTurJm8STA28L13RKSYb7oR7KowNHteMmEsyU6EZap76EjBHNPay",
  "key26": "59AXCQAHaSDBXXkcAQNfGUdYWmdTEy2egVzmhg3ZVCtsGuyjySsxfUMWYBt3Z8ELPqcNKjmJrwvm4v5nbMaMR9Wc",
  "key27": "5A38coDXzM7oBsLFKMoouyaAid5KuiPkuuvm2xD1NhrtWixAbDvcWhYmG25StLumiEVYwxTwgsepkwqEnBqYqb2W",
  "key28": "5hv1HqHRhs8bqWA29K74TV8AdFKs3kBESXC4KrMN5rmLWUE4TBK7rVKH6YqzAr7G6KzaEsGWHHqRcqvJHYCGSQkA",
  "key29": "haS1azzbK3UxBpAbxKR2gayRHajoMr6hoAca9NUM4xAuFLwVXSSf4GT73gzijgRUPZQVBmdbUvQjZfuMzg67MrU",
  "key30": "oAg4U6ZphAVfNa5S16EgAmrybv51Mvws4eg4c1CqSBQNKXrn7isVTReAmpYNUJpmvhn9KUh9qce2pVmpSjCHj3z",
  "key31": "4dCHrfoXmZa5gvYe1Nce1hBTZSNJchujsWTqSrPK7iDCkDG7afNx6H9fDJostN3krpGU8EfFQ8FfbyieoRTPXBeW",
  "key32": "3NqPwWzEWUUmHeMkcHfA7THLEKT5mTGv95Vt1ahzHeZjVZL9EQMfdj74p5Ftd6xiRbkmRVtS4iDH9PcerSNXoegR",
  "key33": "5gYe7WwzfWBzPs59ZbJaSTb8bcr3ii5KcXpnnbkW7i2JJCSzYFStrCMuNKA73RHarHLKRtd1jKNkGAfnjNvTddmo"
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
