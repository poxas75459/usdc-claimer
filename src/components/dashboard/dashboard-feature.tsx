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
    "5WY8NsqJaQpQCrhuqJwJ3eR4XbuGNsqZiQVVbyNGTWMvEFAMETrXGDj3UkeZvwrSPk8mCHq6AoUjjGxRJsKN2XSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zTdWaDhq1r53ahep4SPcxqrvFUXSdToaZxtudhD3Cqzu2w2Nrh5NHQkdK3S1NVERtUn15aPhXRCKzJmNJPDz2U8",
  "key1": "3jjy6FcyksjchXWQCuUqGXLGNBRDSQyizvcV5s2z1LKQsA8n3XdHmqBE2icV4hdeMPmAmqxXowP5LVZu1bg7d4Fn",
  "key2": "ZUBp8KdvfMJ7PC6dPxsoMdqgn6taaw2MAxtxRu3CsPk9bu5FtjnaaiMxLSwg3nwxt5GEeZRubwUmNycxH8kBgNN",
  "key3": "22wHGNzAL9nhkTh3dsrPMQjSFJdqvSe6JQ2Rk6rVs6b9s59uxbf8oKwvePKjRBh135MjKqjk9bsdnz7Vp5f6KeqN",
  "key4": "5PwtZuuCifNGdT3o9sUbKoMMaF83MqzaAfBSQ8bpRxCnSLLohTtxXzCDCyozmBtFHMmxCDZcRbMrKQsrqkXi7o4i",
  "key5": "3QZae3H2ByDaUhXj6F6vF6agjcFGntXv9vpARx6b29dqNDbEi6rWTfT7XYWYY1BGTtu2ufh9112nJeyBBoh6Gyoc",
  "key6": "4Nv7PnhzuahQSGoSeLDra3AAasvkJJdGgXfBbpkwSSeuqCgTDtWaPMHs2FfVEMFyfnHmFo6eKuJb8MbgYFdyBaRh",
  "key7": "5eFDy5LLuQSdCqEaG9jx9YrBn5urN1MEgyzChpuQzF6kTr3Lc2RV3FwNUz6HXkdbvHAXWabPV7t7ZCcApKb1Geh5",
  "key8": "4sTsMpQ3oEG1kPHnoXtbQZgE1wAVG7AsAZfQUT3Pb4QhKnBJhAzpyjsAvo8TrvY4oEsMwePeo4GnghsMCCzqqdtD",
  "key9": "3qvyw9K4WSsu8WhuatKCzFUsAF2N25fs7K2JuXKCuxTdh1dAiWHBft15mMRU6cYvCH55TrJWBKqM6bKP5CTkkM2N",
  "key10": "38EpDuyjRGkkWafzAqdYc3mmTcHg99bdqS6vaBUk3u9z5rVaxQi3i3wCSddoSpp1kbN1wFj4rWNub9rQ56E8SsZ1",
  "key11": "2tS12rVwQN6dGQJM27YaM5cJ3jtRmKQFb7UEX2JLLJGX9cmi4BiPgNmH5cjWJtm9nNGtdJBwqcR7knHWGNWqK1S6",
  "key12": "57CrmuJJs2RDFc3uhV49womWKmdvNW7wPjyiyenBiR5kx42rj5kfaMsD4aUYK8aRbNSmJ3oxyM77dMuHPbrPhLvy",
  "key13": "3wLvp7XPBMHwYwv2fMZTg3Tx9Z7YT8G5NVP2WKLg3oGKZuPpuQXiZ6r5QZVcV2tbRKr7gZ8JJDQ7nyrrgg4eN68",
  "key14": "5GJimKbaw3KskkuNaqLQRkhEd6uGx3FegFWRqUqFjfDD55P5RGotD55b2eUfzg83kRXqm9kWK8Ncv28jMtDRsWGr",
  "key15": "3eCgbSbmiARQM54ZTvV9P69FW3Jba65KnEa4U39Q9JRbq2FW5Wsix6zTWpTZJHYn8oJR4Ji4pTG8HK6CSLBKBRqS",
  "key16": "4CcfKSdZEA2KQyqv2Ksinvv2qk5YtGBDQxa4qCvHyHi5Jw7gT1YZP1Vsk7nYDgeJhPgoP8ydDP5bp8hN7gSoyZM7",
  "key17": "45sNmxLfLyWigPqkxmiEMCZvyY6TnuzXoM747CXVwDhiUUaL985UjjVGeqzhU6LYfVVRu361mwpBzKReVVVca9JF",
  "key18": "4e2N2EqnWw8nPA1Ab8XG1g2hM2koNY4jgS4DZHxYqDR7GMg28CrBaY6GQrqEFiSaWxqdr8AjTsYd8ajwfhg6ugvQ",
  "key19": "3f9EUVaoxGmWeQd2MRgc3nngFzQVTG7V378Cuh2Bp9eGRVKcdXW53h4DmNp6gzF47GSho79ZDTGubTtq6o9vTrjv",
  "key20": "3B6H13Hec8dwZEwcHU7FQZRpXxMyVqjgpXZbRN7ooFcJU8SgyzM19vxadVMzjQRFf3LZGQXD7UrSYhFcXUkvko7M",
  "key21": "41EAHDEX6Mm9VYCWhiZGwkX7hvHWyrUX5kzvD7qKiovXpSjPvHz4g1wjhibtQiFWgR9TbuiPUfsWe1arrXBRGKXJ",
  "key22": "21wbbisqrTRHcn4UChMpwarJC8o8ntHY459APsbtXVrjdxA6MVkEpJfEn1JHMhmaAvC9YiJDbnoNeJFjP2Qvijkb",
  "key23": "5Cop4xuCCasLNXLF6FD6YLmdY6dD1KJ5q8mghQG7ngTdbfhYqBcqNwwL9aivVWabwyRv5dCoH6uPP3NpQHTMFu2G",
  "key24": "3uEHJ1vhFnfQ4uBdUT6DLq8EBcvzBiLv7eqzNw2uNWVkjej9Hx54bjJYhuHYmaqKFmZcVDmSKjLnpaUE8SMFHC3z",
  "key25": "2mx5Gpy1HuKo4ErsFeU54DUdmau9UU3u8MCF1wK9cVjtNo5R9ihNwPhbWXon7PJHRFG7KXYHY5dBn5FV9Fd1AcWZ",
  "key26": "MweEqdgyMVnh8puLyipUicVAhknH6mLPDC5Mbr1DH6iQ8EG6ixFmCzb7en43v6zwPopWfxne2Anp1FgAcWfgbwe",
  "key27": "5nKJNJ4qh5khrSQEs73dcaQUWqJeNjK3mobJL9Mhib9yxKNNxjvdBFjkVanijmV1Jmhg3ZrfLruLNa2qnDZ2gPb",
  "key28": "cB28oVCTEqwyLDGuJUWpogHEUFnTw51CG7UzpN7r9A4R4nPwnj4nKGVrR5LqwqadhwihSM9vF9EdE6ki1orn9Vq",
  "key29": "3T2xUNi36711MeUua7RkvyA2e5MHtmzGYsnQaLCrnMpCk8J2aLZb9nvTFvk4EvFP7zhDM3Hk5tvD8bQGdQzMqTQf",
  "key30": "xpZWCoD1xQwyzQb7nPKG8mCcKpkMsHEf3w6YqGNyvL7SfXakJnNjEjy9F7xutNZtQmzyTinvwHnMbRrM4Cimuhb",
  "key31": "25W4og2x2fvdMG53vKVMLzVxY9KVUQBoHWwrLUMj6w6JGkUJQzYXne7KBzhfggqGb2go2jVD3pEiD5xf8XsUJhCp",
  "key32": "5ndeReBDXGamjNzQtLRypK1mg9Fx3urwsuhmaczP1MdMU8ckSP2Stnxm89rr8gLf6uA9nawCJqGWJoha4kUbrDwb",
  "key33": "22MEKyy48yqxSruxVNcHcxEJZido5GVgxeg4aqUj648E3U6tscwBacSxMVTukPjoWScCmFKB35vyELjoQ7sVME7h",
  "key34": "5iCxbETiyJf31ymWUPBF7fjAqLN5QUNdarYKrSqe9Wf9CJV3yPB5poEFSz87DbQiZkRLn8qExWuYGYxkkhhwnKKY",
  "key35": "2TmFtrdKUURxDrPBJgMAEWifNjNW89KZnrNhrbwGd6WEXpSVYrJFZMQxaDL9txoGVCNwqoTv3Pt4dgbFdm3Tz7gX",
  "key36": "4DswjJa9VmqCjeVizy3rZwaertTrK6TvnLZpEUU1FbXNJJiqvbsPN1qCDrXHKBU6uhwUq97n6rDt94nq1D475Rxq",
  "key37": "5hgXRwgtDvSPEg9kMTCKqRxxxn2rgVv7gwZqS5naw87sLZfPZ3pUVzrXiK2qAmx9gbTKQmHSeYDxgWqFDxiKQxU3",
  "key38": "3yi2ubMyyGvAEML2VG94MAGbvgVp8YH4DKdCapKtDP9aMf2DuF3DWBeknWacGsQya2HG4KQphFAc1Tx6fAZcDWd4",
  "key39": "3oLD1QvQMs25YMKEVd4RShBxUGC2uPyAwLqVnU5JvXvm8HpipQS2s3tthzfPrZRv1htzvxLii65eZXFiKCehsXQj",
  "key40": "5LWsQi6atGnjgfxqdjZAo9CHknY1VqDzEMcJS5hNQjQBT8udqM3aKvQBQ9VztUpwkaniiqAcJvmsvcDqfN7SjmaC",
  "key41": "f9DZqy1SjLKhA7qBBXZi4eqogxd7oi7Z1jAGyFdXnhEe3DUG2SUBZF1oPEHQQTzBp5s2NKLgGCfgNu9jBNMjoLK",
  "key42": "X6C3Fbbq8wc8cYvKn1R2nmndqzhSmUnDw1DF1YWy5ndauiPsvJcjN9QHDpQuHafiF28nHpEsHwrmiDZip3GongM",
  "key43": "4hXPDSgvDcrcaUUhvr9MasZY4QHHpJ9PRmsy6dNkU9e6UKHBY3VohfzgPDnVp8qFPd8ZTDwJKPQZDwnvkidS5yuz"
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
