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
    "5cV2S68vNZQ9639SEBA7ExWFgNSvmB8ww4iLJ5njGSkzqQpzujaoogu36QKFwxmexC8LgwvKvWUEJ8q5BnS9iQzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iSzxYmzCZSLu9hfCrWfUJJ7AsXbuBGyZ43isMwa9VChgnCXTQ8o53AM1qNkS5tiPJAukAoeYYMHLCh4eb2H4phM",
  "key1": "521E1aeB4dCsGJFuS3LLQUeZME6wti6petMbQqZdCkoQw2MifssdgQr7N33Z9gdm8ERzHdkNZsBAA2xTk5Fc8SxP",
  "key2": "4mFxVjsc1gFxB2R9D6yvKHa3sezmZ1kGyjNfLgwNDgeeGJbv4n2TT7ve9Z5MAsS9o3yKVWEkha4RUa2j15w8N9N4",
  "key3": "fzWT3xfGPkEs4hTrCRFiqdTWXB1Ptf2tgsJ4ym6ovr5BQ3HEcyKpXVgYdxAbrHJkV8XMSCs7N3XibZRKiLFMxNA",
  "key4": "3qqRestJBQZAEFMjGF5YvCLutjYLcFxvC6etuWJ6C1GX2UCwpv4UWoJa2NeLdVSZ2vjRkco63KPp7fYNhUWQX8Ek",
  "key5": "SogsAAXtxsPJRcoQYhQM4G83MQyz43GvZs8ipUZkiib3LeJvR2jCr3MFBL5go3oeLKe4Z8d3TgboYWA4x5SWPYb",
  "key6": "oVcZt8pdEz3AGG6YFgFoBFvdELb32HCpCGf4SyKRxfMwAJ8mHrQKyV9i3bGWDH3iMHoBGW6LHBHJ3MkuKJPxwRP",
  "key7": "aS4QGhzRzPL3ftwMaixQANUHQp5CTj7dGGgJrw9AJCHSzsA2ARP6Zb4Y6FMKsVBTYfcFrWyhGaVFo3B7F1X1bP3",
  "key8": "JxTqzZCZ5Fc4Wfa7J8sRF5k9RaAn6dPTeK4xLmAixPk1gqmXN7FNS8DaLcFLgnMXdYrfuttqFyshDSecA8Qm3Y9",
  "key9": "3RnJPSgb3qKurktRU49Eyo1a1p5tYVcdMnED8yXPomHRRskYYLA5B2ECHHgHkSks4uV7eyuqsKpoesNa12XWjzqe",
  "key10": "2NukB6YegFhh2qvEgqv9rMPNhwRT2T58KqwTVAuFa8M3jHwqE1T4QbpxnEz8LUDetJjTwKJxdYSxHcHmwtKmFrsm",
  "key11": "22kYD6X6B8kFEJhkHC6RAnia868ioffACsMZLbKyvPNdigjTscRGaj9YTSpgBctFgpTFpWW5Bjvcy4ekH1BXmvye",
  "key12": "5T14JrAfFUDZZmpGZL8ddy66Y9ydhBwPhUAmBqWpHNsSQVEtrd82GB2ChRnn45g67PhaLWSyxGja4FwT1QNNus1B",
  "key13": "562rbYe28C6DwyUy5XGSwMUJV7XLrbM8onvvkU7QF9gj4xX9mfaR1Z5SjJLdWnjmcFCg4nx7MwPMNbGgtbfztPP7",
  "key14": "33FyooVQ8KjZAY2TD8xKVWN4Gq2wJtrdabF771ZTpWJNmskw8diCaFfMQgyw6DdStCQtxkAPd4QXwWDCNiqdjELP",
  "key15": "34r5dm6xHdAeNjJrR5DVxMEvNx6g9Hbfd83Wwd6JuFFrEpXUGRbzsH1Bc76RfUvKyiGyB8ggxiNtXhRh1h8nCyYM",
  "key16": "3C1NF24hMgbJgBqWNoBR2beQUyQzUpDV6UjdwkjFh28ycqUpcvRnszfzQ4WtvAZvo4qd1rjkRKpwcseX7nxR1XEz",
  "key17": "3vjAfrt2EmmCFYYvRsh3nNr7FK1b1kGrbS3iMn2RygMbBNXAYWDi2WMWsEVq3admtKKzqcGtpLzmprk39kkVmgT7",
  "key18": "4Lo1QPRmN9d9P6qVz7mJo4PLdRwPhqC3BbL7v5FQ74Xr4ynEXmz6dQiXTnyQ1pPw8TAMyGsZz4r3usWXhitkFz6",
  "key19": "4g6F9yv7ThFWp4pTZcRpmA6Z8Xc3FD7Uy5uT3LyKWuon557Zi736KWz7RjHJNPE6HGwznVz5Q3zdYv9BWakxriBg",
  "key20": "4jFKkFSq6qvdFjUdHjtPPgFGUdxw3t4kj5gP9ebBdoszsaTxwfuzxzrFrykEDHamXzZV2xQsFgsLgAHCQR3nEL5a",
  "key21": "4HKNYYsKc3VNYvPWeanB5vbnYvvqhNEQDoe1u2kncfKpDR2exojzC868u9htwfyYw34ZJess2bjBUjTmcsUSznh2",
  "key22": "5DY2EQHswecbJ2xjoZLMwopo8m1jVzNGKpHaZFCPHnHjeDv2ztPX2CoYcCcwLtrJbQC7hnzCFLfcV8gR9aYTR15P",
  "key23": "4YW1y2oz4pFN3h8b9tPRRKMvNz79Qt9Kb4gXMEGnWNkx5hGqxYGdmgoZKcqa1dHms8ijiQqzJcvAGQ5MPKuhKZkg",
  "key24": "ciySosyq1MqXDxt9qSmRoR43QJA45AEhhtD6Q5geoMSC9c9YBDdHNpXuf1DNHmJT4W3oTgqonBDqCXnJEL8zBZ3",
  "key25": "56gwBjrhr2h6Gd5LcVQEsdB4GFTscD5dcshq11RxnGoZzjbGy8n8WdeqzxBt1h8wCfKjj2dvTQ21P5WAvscytwzh",
  "key26": "oi8NTBh6mK9Tx5nyyyU2NHTBdkv5tAdZpjabpFL1ePf6mJqPsHBV5NKvvRCJg68PMb1PC37AzWS8xYmjQpGEas1",
  "key27": "5BqBSLyFGQUwrqK8xay13XoJXRn9bg527maDFdWsUikUcKz18psRf5u5psXUvRwqqeU2zUCsvA9wBMeGowjNgRLH",
  "key28": "2GwTQQR6E4ydTuxz9YvAyGZGWBpGkMEuKUNPzXGN7Tkf7DmyEjJJevicTJBtVhwB5AFFUAoEdqSrgAcBb2ehsRZp",
  "key29": "5TYrMJFWmCz7gNSmQ6qQ4sZ9XB1T2GwNKkGkX2B1hPtahWHWbaRHUM7ekCEBdmoWXqkQZVUPUUpAuMVeZkjUrfyi",
  "key30": "2Z35qceBqYrLT73kWviBB964uXpGzwVjpbztFHK2QvKwY51LYhg3xzqKuYmkCZUYq2PCZjRDBCe6fmNs8abBmPuh",
  "key31": "42reN7SBJJob9cDHZSUAwPXcnJ5hoc2v5u1s11gtPeRuSYv6BEzb8wR7X1dNBUp5YK2JzAqdxcjF8uXJo4YZkBYR",
  "key32": "344C3EAo3KEm7VKp2zAdYW2Tj4gY84Y4Yf1ywzxHwCrdsE3FCVj8CJWL7FuzQHdrH7cyoLR9RxqxEJ2T123p2CKD",
  "key33": "3eM7JXKb8oC84dLgdsiUcncvGQJRkXWnJmy8whwrHZSt3w4GizGMx6dqo7TPw16RaRANNSCH7MGjnWWZc1VR5o6G",
  "key34": "2rZrSDK3zvNEkAfW5EmEji32rpDpwf74jg9R28HXmjnZD8i8z6GCEaZrmJtet4kx2vGnFVbkgjTMmbgW3FQ8p9WA",
  "key35": "557LhAtiq2FYevPMYrN9CEJzUbFzgEb93fNVk6p2sQJRCyRUBaQz8zgmTUu4eR2EnrgvZ4jknWbTumAmyzBKAi6w",
  "key36": "2cCBtrTEiXzqMmmtWT2acDVSVrLAvFhvfGaU6CZh23Dn4SnVNwczHr5PCT1423RyGch9wPWoEQbsZpos5XQWba6x",
  "key37": "5UvCt7xb84QNmhuUFkNNGLfHsrAuVCc3E6uyacwUS3tv49sMCQygkUnYnkFze5PToa294ZPVx9ahzNqcZ2C9nk1r",
  "key38": "3mQXTt7QXQseKwoBoNwPE2ioiPhTxvaRfeoJXY86hKcgebVB9goSeQMuMhwB2BMCuUpMLbh75VYd5ZATSzhzxpRX",
  "key39": "3HoaYG3C94h1FRAF25tnsneHTMqvSzXKdNdtghVxgyq9okGFyNZ6po53UTgbFpFiUcsK87CyV2TBan9V8F9pEag8",
  "key40": "2keNrQQBnGeuq28njuKvRPB2iuHLjnXCfvSPF7jCWWRJ72bn4gnoFpED6hxgfaqEvrmAdTQZ4J84haUFVr8RdUSf",
  "key41": "DWTb2NtCs4NXJ5CdgeNv6b6DvytScn6V5k4x8Vr1pG36JGmpQTFtro6KE6x4x33Aq998YErimHQcEKNB6NuxmmM",
  "key42": "AdRtaTaZyCm8BdeSaaKtheyGcwx2WVX9FfFWhTBPbx3CT1tAnie55UuCQoQkB7FpEBacNmGKFQVZLAsv4XhY4Mf",
  "key43": "5BFXgqCdUxQcVS84XkFfSr9nV6Zhzo3Ps7EqA2riqoRX8icfkcscwK9LMNyRn2CReGSmzK1eoUWAokK7LSnteA9Z",
  "key44": "4ofmbG67ZWvm51qY3AoCekgKsSyESE7RojnFEJFQaZdBLc1TUo2m1LCeMG34HrV5zgkwwPD9E38YfswjmDJPmEci",
  "key45": "SxU2GRgiZW9MZyXMLHmVM93nkAvH8UfdJ1zzs6c81xEUWKHatMU8zXdjApgCNjfC6pEpXMHgbciu6JJ3hwFDHKk",
  "key46": "5LZxou3ZoMvTNeNEEcut4X9WgwvPrJfMKaJzXAaXapWCXdL7rEmrXYPkNjo3fyW7JUXJTMhJCQmQw5aV2DdniaHp",
  "key47": "37Gy4mwzEkHL7FNXFcavWL5WH1aSUDbn5uSCqLa4mxtXZKhQk9X3EFN89t8KAnCrmcgN4YX1CDrekAGU5YciSWwY"
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
