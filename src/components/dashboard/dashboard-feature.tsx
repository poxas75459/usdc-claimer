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
    "3DeSwuECpSjLPMSozpNA5xrSXmuZeGc979mupNkkuRjccAuuoZn86F4noayH9MuYUUMgrfb4S589VAF2bNmc9b66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y3nTDHk4qbLUrtcg8ZQtBizciYDLqu7v1CGihessEzreDLysvkDzLr2bZeyg8QXJNkkvyzibxi9d3SvNFxGg9G1",
  "key1": "Vit4tsJ9Zesrq6SNwPUm2oCj9bbFsx8YYgUXVRcyfLkMxaJQNG55w3qPw5HUY1KS9wGhJVp9syoQNfU88UK4PLR",
  "key2": "4nFYetfCCD7sM7WpCcweammH9Yxy7aYqtMMgKDc9ffps7622k6yk6UxCpL7dCDm1zJxUZYn1LZVXZWeieY3SXdFC",
  "key3": "5ujMGmSiEkLD9T3AYzUUBCV97VXwrshBBMUuHEwHy7UY1CPnn3XHgdWwWGeXbhSgworUdhAUsKJPjaidMHQFwhd4",
  "key4": "bmwnYr7ix9PmxPZvwqgc5jTfRTzjPSTMqAsnTktXr9tY3CJCFLgJUydnnfy8iJQ45R35iKxfsXYzsDjwcyT7TXz",
  "key5": "2Y4avqwfZKBxaCXm2g4vDaK3LPY5Fwhh2tmfzkiaN6bB51xaD9RX82A39q5H4HqvgxHDwcpW9iijBBnDaNYMTUsY",
  "key6": "27sxZdXJ2p3xRNDoLiY2vFrVQq1SGEyHzbUgwhp64aEAxZMFG1P9585qm8g4xCS5PASuEtx9ipcNqN8mtWxVc4Kw",
  "key7": "3ujSLY9kDEzMoXNP25rMq5kyhBWUJaKQwSxFtyBrujAb75HZJh4t8LqTa6T3BMd5udQbfGfRbcr5Q1GC9PtD2zyU",
  "key8": "4HgggPg8f6gqM1QimTHWmRnc9PW7CxqLXodD1q3pffVqa9Nmkgrzr1BwutpAsveYYoYzhMuM2xMUBrZrYWtfbHfQ",
  "key9": "9ZeuhqX3SbGRrxdZF3SJMyaMfqP7gwrDhQsE6JGh7ePggvcpdNygGyFPVtEBZpdmxDz2qhDPgJVhSQgX5pcdo4t",
  "key10": "2rc2kj3jFUNbTVHYDSwXUhkxJFQ3Y748X8eesT1AKYzWBRSXVTvWSAvWHSKDXMxptb4BgoVaB6uvUq3jwdtAay6b",
  "key11": "3QbXLFaqpq8UPx19DGxgzp6apLApzxYUD1xK6SMiKFxrpLVsS8rjeYKbNWRmq26bBrA5N5s7W3gP2D1qkifVrkW3",
  "key12": "3Jc2NahaxPsGvDAaHor7KRbHFF4jBXWWwXCcxWvER99YrmyLKE7wSh65KY2xTfAbgsdn57Lw8AtYcBxGWHHpARvS",
  "key13": "46VVXLCiuqFqWAXZ7e7insmUEkqDe4TrjVeYg9hnhq64gCAtcy36nmcHFqMhgCEdK9WMVdTEghPop83GxmoojStZ",
  "key14": "v15Qj6xMy5ZPKV4Z2SKyHrYgmS6oantSsJr4iLKF4XC9NHQvaafNgXwuishvyvzLfzUE7HdLhyNMuaAyc4Xo1bm",
  "key15": "4f18Ut6GEWKgzNBXcbVV2FNcQgS1B3NbMo3Gn9LBYB6TkKkUhWvnBK1ZeMgSYpcViMymAQoUhzeBgaU1dhK4kyYW",
  "key16": "4PpdveY9qCXm14wBxL3ZCfHqbDiEYS15bWCh5bGaB8FaCf6wCws7GPaQQJLrMZ9oLA23a5LPD31ViJNbEapvYLRD",
  "key17": "JzTU214EL6G3fdmbSxbd1NFv2g715NUaX1mtHyVcD6ZnywYmqsKoLQkdbiGrmjBSDBGnm4Ywp11X8QdRG44oiEM",
  "key18": "25JnAYMH7LF7Gq9WniGhPasuzEMD3GgRDHAqeGavM15q7yq8oRF6LimD1N6FugCLbVX4B4epCH4hpa9Tg8b3F2rR",
  "key19": "BcACJhZteHYHUWaFv69Jd87Te27WVSjpwtHxh9TQNCiKHPUSM86m5J2Xx367nsq2aaE3YmSZDhu3BxArASjcid1",
  "key20": "2z3NiPtKLSV7fuBMnjWgsyQsS4M1VhjqxssoehidVjLeyGYe9QDHZfCCfA8WY7gpK4syz5h5dPCkxg6gerPvK4f3",
  "key21": "2jt8RM1MYRefv8SrPJUJLLMzgQsSV3P6NN5J8PAQQkddgXusjpdA5pGAttFaYSokPP2ktmTnPNmiwMbPDQs5ZG3P",
  "key22": "3HRsoPHCKCCS7J4psxjotPncaitVYF8WnoSXSSvPxbG2kvhL757hxQeWKnwpRVUfgfrXZzxuWk7pdGJ2LZrffYFQ",
  "key23": "2k6RefiyYszS8JAYzXhwaJcmBSwbGuDMirk6ndYG7EjZtovZC7euE5QVdiTXgDTMH7EWFm8T9CL5vk9REjvuTLvB",
  "key24": "dYsDt3VeihL6bCCcttb4muYMmn3oJr4mnk8PyaJ1KS4aigxuYEB6vFprzcyDwN98fyfqP7u8riSCdvuohgXeM8H",
  "key25": "5TK5Ambvw556ejtqYsLuhyje4wk75Toi4mvLZgThDtG76Kdr1RhVgCk2kHuaNXic1WY4zfeqNhoRsn1GnHNZYEyq",
  "key26": "2qLE7TE9seYh2o8q7ToLK9QCUHmN2YxCetWgjkLpWTxadSkhYPYurqn43hUp9msRzU6Ahnr6t72FjfDsuZwx4aL",
  "key27": "4aFYRfotbiTgqx32RC5DXAyQY8UPn9Y8ejPZ7GexsnpkssWGyfx1Wk3e7qvAj4UtUnWFfwULEb8JSgxS2Rsn6YPP",
  "key28": "64RdoQLjsamgiAdX963pXHxMTHkzUS4CjgdWdeMjcrF87Zb5HBkZtwGkQCc1ukDYJJcESR7tskNDWD5yvt19U4ce",
  "key29": "4phkxLDKhZfhpmLT8r9hwS3UdHdEBVp4nnMyX52LwerwhownZEWHTen767yDi7n1S9SzK8KTWQzjRcykXGWG33KL",
  "key30": "47HPR3mt7x9Fac9XhPuYzwY1y94dwieZoPpN9G4bMWyJYFvFtthVHXuzmhTLgzEjbkVugzMh3rnL8fGmZd9kqNU2",
  "key31": "4DQJFiFQhJUy2u8jnqh7hS1i3vhnqpxaXneK5AP1QrTGna4teskLvAxojE6PyDiQiVbZJF5V7pqwaJyWm6E65s7W",
  "key32": "5Nv9ZfUk3pm8tNjYAXzGrfViCigRZ6C4HbeNGAFHC9WmBW12hyz3n2j5tMRpWLEteoxE7yRDg4yEf1wdDdMrQnay",
  "key33": "5oVHTKa6rx7tPESZTJTthwBZuu5SocDWzUVx6rxYyudphUAf2vs3AJmVwd3v6MuYmFHtxPjshqMg8zSq3YjV4aW7",
  "key34": "3US2JSPET8YGk3n3KATxtsAXSgjY2vMQJhSqKSUdX6kRvyk6zBq7eYPVbFjTRNy9bJJk8Qp6LmCaAWCcyvCbV7RZ",
  "key35": "26eQmWkQ9GJo97kS4sZHW88sjk4wwezLgtybJDcWX8EVkSzwG9f2gCWq5hVYfv2WKg6VGasACLJjoJkNCqtSENZ5",
  "key36": "4KJi7eu3FUhuFXw25GLongQaJtYKuh3rvY97MJTaqXDtrovc5BctszFq8gE1v2CBZyySR42z6TnuzsjZJ1xU6aQ4"
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
