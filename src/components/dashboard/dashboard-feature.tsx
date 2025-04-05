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
    "5pM3TRT5yBoXz7Kp8zuh8U95Xvysoekuds7U28iribWifZ4wiwSfsKjUjYRhMVP4tAKePcSuN3mJaKVd1UcFyZWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RQLgXU7YtcJHYYTpq8LwHunwdK3TH9QLeAAAb1jvEMPHRWo6twGhRawxaShY2SrenjUd3VUoQ17YZuZsxmbKe4J",
  "key1": "2AG1Z1kR5ttJmTpC4htPn3NbCz1WsPXNJCt5agj4vXm2p9cek4b3qEEwzqWTrALvvoooGRbBmKwXLEeg8Cm2LGj3",
  "key2": "61wWtp1H66gYuCeGLsCZ5w8NKZmFCAj5KRCde2WKWyC1oco79HTTN5gKcPZQLtYx49bRV8niT7G8MnGvL9oYyyhE",
  "key3": "4Zw4keUSSJdreb7zGTA7Yx1BtD1c5x1FNhBRaXnUoptdUjwkpVATmq2PkyMp8Qnfs43n19Pv7CX5ao1nhgBeT4tr",
  "key4": "4ec61ZjEdQD8Q7dshxcZQkLBBbmTM1x59p9DbJCdHy7oUFvkdBaTbkQLLyQo2jVDG7MXihEMommb3iLtkiFZeHSc",
  "key5": "5SBxw67dxQaKvWJHXBVTUgVbj4SgVcW56to9T3gM2Sw9fYva8j6V2SjGE9Ahv8MpQdp8WXdPEgmhXnh6fFNGS6XS",
  "key6": "2uMENbzrHyAD7WoZMYumLtC3GBciKTdsAgyitV1uwGsVqaQK83mMz2ULDauu4hA3rrfLNF72Hqk8rhpqTcKmj1RB",
  "key7": "5Bsa7Vu7MTr5H7fhjVptQCkdApjx8C9VzRjYU19seim79aTUyH2SendjFN6C2XTSZt9rbBTVDWeK6vM8E8vbcWgd",
  "key8": "3LLwM6g22SqBHArzF3Cpt6rvJRR3947c8SJM9TNd9j1jaFKZrZUUtKQ8qB9nKAhjemGmHUm9LDWws1f1RVNe6xqz",
  "key9": "5WSv6PqZXQs8ARhSWCXjYjUW1XFAVECYNN1svGetnVEsMGwacDYTw5yJZCgahNj7cWU2kkiGXvuCYWWVgb3JJsPP",
  "key10": "aqK8QY6CKixtuJJGexr5FYzP3cz3wacUafCoAztCem2ErVbPwmx7VKB17uzLd4GpFqn5JmdJAqAFaRpLv4hxNRK",
  "key11": "m59S7adZx2BpeFFE1vZXBqqFH7ij3SBvX3MATPrNPKzJ5mPKoTPvitYj1kd2zWuQF3vzQAcQY3NY2QgeUcuDD8B",
  "key12": "2p3JLXnMNScVkV8vykKvbdji5aAXnEsaM6E95xi59NpijM5j2ZjT7KJxaXEiXCeQHfm4Uz5gMkcgousaQMqTvozE",
  "key13": "Lki3pd9ZwMRi6WzaShj12YDRjAazbjozzpjhLxiGZLg44pPcZ5RCeSYsTQGL5XAmNtd8Gby161FnUZvqwqiqTAW",
  "key14": "3btPUcyvatgyBopiqcVhvs74UENKiepTj2YwqwwKt7tKTCyX6CQvrHTqsZRj9WTYDPsdd7j8dhetcnxbrqmnj6dc",
  "key15": "2DrZ9VneSe3qyDtype5Aw3zWPNtHdX6fK4B92gPUt1vtV5reJm7dykv6AsciHPWQNp6kkbMbKPdFLXdzhjqkVkjJ",
  "key16": "BPU3nTPVfBwuZ4B1Nhu1m5tL7MDL7faqwJBoGCza7yYRLdqikRYMdyL2QQvtXYHEd8wgNauqzg37CUx6yzfGY9T",
  "key17": "2GPW3awRsmC4BmaoyHzr2Q8TqTmxSmzLfibUNtUvbk7v11TFThqKSpsaUTJunu5xHAv9BYdWMuTyYhJkCJ34fe7h",
  "key18": "2oNBuYuRKgk3QiAeSpWywt7mPJogD1R6DzVHLfSHVK5QmJk5UEJNubFXqVjX9t5jYtxRUYDrsrYqJXWFyZrivLMN",
  "key19": "5hH5rwjCsi53YqpoNykLBh8N8nzN6uFmCgoa8weVWKqdNerw8QEEUMDGRGP3wyf4pERp6KJm2ZzhsXQ43kp1ojLw",
  "key20": "4FjQ2KSu6dbnsrR7NppK6eUDMLHQh3Pn8trkbYzVYkZjdcDsJno6TLSK6AbWv9JH55DDWH29GRjqTLLiteK5eeNs",
  "key21": "3xAeKkMEjVfcdaHiB5YLUYDZcz7LrowWnLZ7L7SpHAcgFqcgeHeaVNX1YmKfgQpzCQghMFiEohATTXEoHrNYjYjz",
  "key22": "9c2DUmM8k6rnUic8BkZ6mhsM6kYEEkvr9nwhrcSxeFeiDmHBKdFJxk8gZ9WUftzCDD8z8USoywXw3UebaVpUUQa",
  "key23": "58UJVDoxYavmv1gkqoCX7JNQJqkaSC1Ef47F57aioVw1dxPjE5yGnWPU3XEi3KPARNJmQNkhzWDb8srPkk1Vk21e",
  "key24": "3N48xL2h89VuCL6fnf28pXBGukCNzYRz982WJemuLKhZLfphNfK7PfgXYqhrzyj2oyWzN3DcBQoARvWtbYH8sEdZ",
  "key25": "5oP2nVtxJCd8CDXejQkU5o3ARoTFrgbum3WiSm91EiR5kbHBjB3sao3uYiP7UoVrzAK1h8wzV5gSg9oAES9myCp2",
  "key26": "2y6pXtmYFPJNGZGHaQevU8G1dUSh2odEUsuQMf55aLTTxoZTMcSwXvjh7ng2FT6hQJc8j4DPmTVgpEQcqosx7Ypo",
  "key27": "5ujfWb6jko5FY14j3fUJeuNaUnuiCb51nSjv4CnZyHoKETQvuJZWpDjT1adjmG7bzW22AiWeT9aSLRJtN4oiTUsZ",
  "key28": "3eN4L7kTqz24nPAoY1CiCzLQb3mCzCdc2RNPnXTgsKRdxj3XDgmJMqnuXwTNpsKDKYoUPHbGSvDDKGZaAr9NdjJw",
  "key29": "4V2groZkeTjzYpi6b3ax9LDJ8Kabe6cgQDi9AEn9K77FvJrTTwb5WXTEESDkK66NhR9syczyDMfiAdERUjVrDv8f",
  "key30": "4Trj9GXspVTRoToiNbtsKtHnnFVVt5bTQY2EQ3rZnnLPuEQBtgnDPsL11NUePNQrvApPUG2vwaEdhymwjthdgxdA",
  "key31": "31af81R1bftAbCqf7SmAz1hSNkvyv8SG7qHc4N1stzAyrBFWK6Vrgxbx4DH3Nsd7fdJg2UvRyyr9ss8jg6t13ddM",
  "key32": "3Sc9Se1FQXnDaCAhZ2S8JjC8H8EDiELUfPomumLrLC3kYFjS4BEgsL9PweUT8JaSR3bfFHqxbvZzjE8Udqr1cL71",
  "key33": "ks2s9Pb1fXkuuZj6ivTaUFk14GXUKvsaZyb5ssfx9J6EV9EvYM4fMdNiWC4zqNrXV9f98azgzx1WAfSQYgvDx6X",
  "key34": "4jjq4dCHj1mJy3bTy59yLwufSBTqxtEKDXLnnSkb3Nwn1aBLhDAgnDEn7ETKsveKEFmquhdLdQzdvJjxgTgm9pBa",
  "key35": "47cynPThS2eqZTLpuTgJBncXSHBbDpA6KZ4PkRTzea6Uath6GtSygS2WraLHitrZ1AWfzDuuKuSSeQdZqFt9HsHL",
  "key36": "2xsAeQKtevxJNnHKrXhRbTj8JvHZpzP5GjJcEzJ4hdPwrSGa5QyfEu2Za28eZRpFnQ3JYoKZduvFDUw1sYHMYJVt",
  "key37": "5jDwUcYhbX8e55xaYfXdx7BtRY65fnFmYUz6tqE7ZYwkm4b7FcYNYoXkukk29ySmU4QKB8eWky6UvXNMRLToki7Q",
  "key38": "24KD77zK8EEZqL2DNMKeJKskj1SVPhLqCVE5qctuT5GZpBWtdFoUdqB7kMmZiLKGrgVsBaxsoKb5dnL4gfe1LcqA",
  "key39": "RgFCGQCTJQ1UMmv4H3VJEpqpdRpV33tCP6W8MdTc3iNFAa33oPEsLxhzsKH3ueHaJ9qwDNy4TJTBYoAuDvKvGwn",
  "key40": "4Vne3rKGuQQgwi2QWqGHGkqNPuEyCzeavosU2scRfNJVxYephEF8PeepevasGM3oAG1Zt9YxY7r6NM238AzR3s56"
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
