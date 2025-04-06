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
    "2WKKxPEmNJVXbGAgQyAGCLYT62DGWVwcks2TXxtJaXM8tyyYFp5xHLKbc9hbqwxVPhjD9wT3tPxgHFxyjsky4oJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29xNyzs1W35RhX89EWuZaCNbus9NFUo7jRHL2Dw2jnTSAFYMgPSyhncZaJmeMc1T3UvLRd13Ld1Pb7gvAHSPXDNP",
  "key1": "4p1ySj24nHXH8oCWzyFeHPQUDHuXyNb2Dgyp1Arfs7vFnY6BmLeTzuxAf6wWubJEKKNmbtSRxQVVH3CrjQWgCMzE",
  "key2": "4T85JMXgU4VtFNdiKYMPrKAErbBRCrzjceQz6qUbFhwb3XrLCcGEPs71qh4LFY3QXAFp4wAY7p3PrUaBU2LigM9R",
  "key3": "338eerZdFbzhFsDzD2wqWdcQek9BwiuncQxPzLnMLSTJYXYVj1zvAr1AmBhTBGVDcAXAqGwDztcZPRbxQvDa4LTE",
  "key4": "4nsJ3RVGWAGy1SGUXMDsEAjwcdpzTeGJo9kNRL5nneMfwoQopTxfpnhbM7ULiRVKiwGiPQG5k13nn5AvyMiJmACP",
  "key5": "5MBHN8z2GVX5wk6eRxrZbcUWFXPRsngNmKgdBhiQDFNcfbghkN6fcC61uFBT1pcB96KAvnhVzrebFNoVzRWm3Fc5",
  "key6": "5UuRRrSJ6ASFJZmmYY9sNmVBk9vZF62DDy28YY5F65meF3uMc8aAiEMJ6ejbgSyUkcZ1EPgXDrueCW37NnY17p6a",
  "key7": "66228fpc4nkwHaXQLCw3mCcJ5oyEaRt6LMirmp7M3Vzszuz1jJaZu1SBL83CsWMS37zNy4UZ2dch5KSUxFze2LFQ",
  "key8": "577Sb7byird2eH1p1nFHCiFdCgypSzPwA2niyiDMo6GHTbg4iSfX3MWWvsQtZ5swWzRhqTD9tWvLFmq1asECRigr",
  "key9": "3Vp5adm15YR1WieJAYZSjU6Tc3n65inYQsQqnXdoNKtf67UWceFKWvxAR8XVhCZ9cNVAFanA668P6UzaJF7Hz51Y",
  "key10": "3ej9KbPv8rLNojeggANdEyHJzYdWi72P73CkMMtWjzg9zNUQyxf4QURXqr3kxQnPqYcSjPhtZLvYTuN5qQg1iC9N",
  "key11": "5ddf4921YSTgYwTYybVGvnNMjkBT8uYRzc9Lx81239t1McHJLhoC6VRJofgvoECthsX1ha3F7vupYmsX4Fj8kP2W",
  "key12": "2KvWxiXgsbwXpxUttSikmxicH6nudzKschKSL3SBwrSf1unCA76Kt11FYuzHxZgfAaqE45GGNd7ttSP2sS1YVFab",
  "key13": "2Geq4azNqvRUGHBo85LyC3XKeQohzbonT7zScRT3o9UGhuMsvWZZ48YmWEvSxMYAjSmsNN9imBvPahEF6nijoMN3",
  "key14": "4K5emdWbAJfGDA28vvn5UdVGzr6JQg5abpYConUiVxK7HRs7C8gAT7HMuJcNpYQ9M612X1aknRQMQR6VUEGwgBN9",
  "key15": "41GSESvYE2YbNPzvCsqpy4PVJ2SCBZVigimHXXBZvTKKipt7T85JSJ7stHiuwPQvxdAh8zgJNSLpPYNACUSVDygj",
  "key16": "5Ar5DAMkifLCFw7pFjNj9dfxvcHdWeAgPhGjCR3DtUJq3Mqq9PKd6aqAEKgqfXNE7EbwSwayoVC6pNakmkyNEFrS",
  "key17": "4jrFMP79iKHWHUNpyEAjZQEUigKGP3htLtdzuaeE2nCsjgUkbK1yzVqsuSkJEGuXL8ZpvVMR7RnaTkDcRdZ5AiV6",
  "key18": "4Du5SeuWD2eWKhw8ZVHgv8hTwFBM9S8cD8rzrds2Fg9ndQ1i9uReJJ3kg8EUsW1KCKyCKjeftMbNj2hYBN66ZT6b",
  "key19": "55zKzAC6jrVRTujyyJfAYbi99ACgSwV2sMTdPk8M2xxCLQgxqRFNXjsKmALjfWBdzhVS66GH1BGgdMZVbUQzP8Fv",
  "key20": "4a6e3jruVvguU4Kn556ezR69WcU2JunnBDBKhsXjxQQEfhRFYuZHA7QxcY1sJPdqDLSemcHcn16bNgVddsPVxjZR",
  "key21": "xuzrf27MJQMMLkcUeUfMQieJYp6Hix38BSZaV8xWFXzYfw8ph5k1V1jZuBAK2cvCGKmdyq77SEpRX5xqmnmTrq9",
  "key22": "2W83XMEtcHjVNcq6UYZBhvoNaYCE1H948Vx1Cp7VXQ9dtffMjiEofBzgYcumgnnu1hFad5H3jvpwwPXwmJdCmYKQ",
  "key23": "3Doas5qeTwVEahKwLUdySkyM9JrRKytU7nFDVRisdE1sKLJZzXFhAUC189c3tDx3YNM2DXYa5G5yCzEN7Hh8zWee",
  "key24": "p9ATUzPPQXhXJLcm2KXQRXCfPfVgifbfqY3is4dWv2LKVg5Hnn4kUoZLxEdo2Ux5DvscniFpvQ6tgxtqBuL3DbX",
  "key25": "32W68sfv83abCXF3tqL8J3mBiCwMmPp6WhzQWgu4xZRmrnfoyAisyESdNaRQAtZjq98J63wq5ZddabBUbmwqBLxu",
  "key26": "2UvqV95fCTp3dw9F6x6w1kV9Q8CS9X6227T3p9GfvcciHxonfjmXuEGMrrCSRPxtjuryCT8W3hMqKbMYQZ5C1k8N",
  "key27": "YgA1imW5PCH42UfoWxzG3k3exYF1DP1QZwcGckegoUmbiE48zsRvyiKhCqt7wnVDBahxPs5mUfyZ2dMqWURJhTp",
  "key28": "4QjBDwua7W9htVwpbFyLyKw2NKY5rzgJPue3UUtBnLotd5ikUcZ3g1EtRnjD3sF2ofB3C3q4fuuJfpqbneS9mbpu",
  "key29": "2pXFPy5zZ1BLC9LzCKgc2xfYXWnod67KQyVdw65MGS4acu8PLx3EAHR5KV2JmhHfvBbfH2HimKoXY8jE8VQFQe8E",
  "key30": "4wSVx69iyo5iaRdHoSgdLaSrC1sveJbCz5ouUBMnSDJbHeabecwDki9u3qBZdetXXAF47WpDmiHMVfZg3WrNa3fv",
  "key31": "5o68UEazFjRwdEayNvNsg3sRvjAkk5oeoNzmajMDeseanDGijE6k6cU8kmCh5AryibqnuTWeXt8zhpZ8JdBqA3ak",
  "key32": "4M8vF7GEPBdgwzPyi98aW32dD3P8WwkmRfoKoPjMXbdKvsKrcb2PeNmh3rtZ7m8Kuq8YeXNrPod6DVdLdTbR5A2g",
  "key33": "CUsXHiUvmcAU2dcDtfQc3uMN2x1yFAUkgrBSbdf1DH1npbx8ujGfbfUjn2AnL2fT1jcoqFbBjRiXxi2eLADCf5d",
  "key34": "4bN9nb86v748HwD3ykZ3wimUe1cLnRHwjFbxKXFr6VpHLZ9mrtZshfQjLnJ1EAbrS9VWdvZTfPjUzB4LtbtGnocc",
  "key35": "3fguy11zsaqac7NkENdifrqSNcTtHS9wViJ6iyyTCG8iXdgQpzbiV2PFcx6eMi6MApD5WTPpix1k9Me34BJYQNLz",
  "key36": "5KdvVLwcjU2GQy21QnuZfCme6r9EjarKXraLf7bKQ6hrro64vrmLJoxKG6ny1yVb27XGrAZgbvRwA5cfQnqQh1PS",
  "key37": "2yUAyZwoakgfu7onXLpN2rDsurwbQyWV5A4V4QMHFRDi3v85e8QN9JEf5dGZ1oUvfxaPXMQN3P5miH3VQckeCW4v",
  "key38": "3T6jxpGFLFAJMLv57ypMNbyDuKD6VgQSiWPSuxZbetaBKfn3MxXWhKbrZBGFG68gH6tpmxWzrGMaHAGZSi3Za5Lp",
  "key39": "5ytpgoECNw4aQ1PgCJS1jBnSCVupm6nDs1vtwD3uMFJ8gkVNwX7Wq1T96h5ZL13UtTuVtvfQQnUx7juyJ45nz7C3",
  "key40": "b4fEtoNsrt5DpWtYgKwL2KbExfVUiX1eMgTNMskhA9rD9EEsXhxHqxNXP9XfyCeSenPp4Fq262Up7k5LZt9S51B",
  "key41": "61V7CdE5HTUTrnQhuZA235QAXvf4MtdysGkk54jWy3ZuYLYEfWSLzsp9mSZ69hpbUGsDfESmbgfCg6wHxZBzqCEN"
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
