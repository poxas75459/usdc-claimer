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
    "3JN1JtKoDPEoFMUNi49kByL9i59FDGreuXEdZW9zMuuDxydhh27pBEbibQovg3REDisdn2FWWnhA5pdT4DDaPKKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VP1pK2o6W6bErH44J8PRXKTmuDo7CUzqqr8hzgEGLxee9GJTiwyZY9y66B3CFcLvTGpZq5foBxCohkLeEseXLND",
  "key1": "2Qm3BnykqetxaGgtLXMWrUoRf5J1H3ddPwTBQPPvhSRAG5aTVCgS9Vi5jHQBNCj66F9BPKZxyS4KZoj5eYSM6YzV",
  "key2": "2eS8hhqANDYxHuN9MwUxZJi3AmQwVhfBg63C7uSMi46h3oX5haR5q1XfWUHDFSiZaUGHqC1VqYXaXWhbGGMHnoAY",
  "key3": "3fPNi3Lu4hmvSpPJYskmPYyA3A1pZoeQ9c9aoDH1T3PqciDyUnnH3CAJUrxnCnFaPdfYzb6xVFhiWeopFdog6mLz",
  "key4": "2ykWE6WxA43zBj6KV8g5z6Ha2mrv36j5vX9LGYCZknDxrvWhzeFphpxSr7pXvr3HdUZT4MNUUGXuxSC7yGrpdq9R",
  "key5": "4njUdZEUJwrbVFbPYdDJMjmpLWoLg6mS9qgxbNy6MjdsWd3jvPonV4theZMe1wakr5rWnTaXfWEBQyvrKJFoygfH",
  "key6": "5V92BUdQqBY4m4VcWDH1x7hzz8NQLiBxYK8wsxetp8Lf4tPdbLNKbxkvLtELo2Ht4J2MKLyht9cGYbcv2SDbB9Vs",
  "key7": "4QUsNA98f6DW7GGHsKC16VDd2kJUoonkMkmJt4JtKiW9n9wexHCsqJ2PEvHCTko2rr2kvxkKET8p3YKCfWxmPGoS",
  "key8": "2zHaiwaE1cY4BeKEhLRBDjizMUEby2ruZTJwkNkmBJCBoGaDaXfk253UZFCJHjjLtVDiN7YLr8mLRUDgGBR2xo1d",
  "key9": "8xtzgQzuYTttS9gWkP387CMSQB5cAz5Cjq4LSEmiGNCjHBstXV5f9iF9xDgjGNnFJF2HQYE31ZAtPi89sSY1vss",
  "key10": "5se7SUiWsMJrb4GMprGig1yCbmUw6gtqpZFceqHojnRPXAXbj49tyTUEtryfUKSnrxkCHDvSzJS2nKgPJ3GnBd7c",
  "key11": "5ey4fbqWtcsE8b4qdx7YhfRCbKfDAGDAfRn6AD4CSjdQ45RsmLtnWyY7fmoDsbvxKb7J6tEFb8KW6tD1u4kz4kPs",
  "key12": "334iTRt733Kj4zoGhkDaaLyBMSnhqxcMBjR2JgVRLGkSCTpggVTJ6GNfEKwd19mynvfg9DpXQeGxwQGshzVFAy5j",
  "key13": "5SZ9ir3bvpN1nLKv8Qyczkt79hKr2azuLr3B42krGp4RXaZBa6T1JdMN7WEMjEajZRVxB6sL1CqUzzw8kh4ZiBN2",
  "key14": "63Rh3LmbFL289UU6b89bmGbuKSYbYxpDd1Xzw2Veth4CUHKpU1U4vJQDdZZ5tArcA4TowmxmWg6TmVRvdLFqBxYs",
  "key15": "5PHnxvxYELDbyFMptsSfMo8VesM6Qpe9WUhjGTLko7ukp5r62378SGYCVYJ4HFPeyf5nuEPC87Y345odVnYyPYBQ",
  "key16": "4Uut6BCNdebpKXzNp3wF9m4CgYNtPKiUVkQPRhQFgDe1j65x3BuQfJPV8dcFRUUMJqdFkfo8xQaje2y3Cb6EtThw",
  "key17": "2VNDJrVueEHCcvChctuBBgGJy16CxsbhLmJP2njSBjL245qK67vVEXTGSQWgSMpJP6cc8qUskgNM6H94WZM7xGBS",
  "key18": "26RTyDBUfS4er2R84G13AN43uHuk4qmD3bfNnWNmzBxiDP19MJ2SvwxDAeD7GKy6HwrZcZQ6zFbM7JK5p19uPkuZ",
  "key19": "5L3LvScgqwHrD3vWt59wC9s528sTuUPGS5GU5HsGGUjk5zSA1qb6Yxfw3T6V2GvvaRD8C4gJ8DvoPAANMP68qRp9",
  "key20": "53fJvpHGnDnHkRixg2eusk73XGtNMQpNvU8gGV9MvoqeKcxZqy2otWPSXiMq5Awe4ccuAHDngEdwjNV2WLDQRJa8",
  "key21": "2hDKWA2rZDqvaH1tMH4sT48F5mZ8f16sFEbr9JztYC3Y1ewRaktNyi5XhFYCSLXzPLAYhLV8K9R4nUCdiijkUq2u",
  "key22": "2t1b2xh9HNorAN1gMGzQD1CJ9t3R96yRkuYD6nGpiVafhJYyNBkn3HEjbUBs8MzRxTLBw1Sn9GprP7gXf1hahZ4h",
  "key23": "3W5u1URzEXbrbsQkTsKMqGbkqU7Kr6mCbgQQT4C9EHheaqLPuhSEsHpLSDFhg1dcBr6f6ifjW9gwrpCTLoxHP4GS",
  "key24": "zzzrZQCrhQoGSwRWZviCSx1r75GUfVodPsPF61tkhdKwx278ytmtvscPp86r42ircWNkU3UAB98jg7DufAfYimM",
  "key25": "2Fky6AbtUyLUmGFu7FGk5pQ9BF5aHXcqDbxnvnfsYgP5J5MEFNvoeKEBkDaRMgod6aBp81TKBK8qS9DVtPJW2W3c",
  "key26": "3FFJq1ABirzaS8ZVcNDYc4Q4mzArpUQfsyGYY2JGgQofkL7RemLQtJEGBVkeb33UnAPUeQWTEjvi3x3cEFdCfEvP",
  "key27": "42m2Ro8pHhoF55Us7gYg2sHr4KAekPs6V4qo9PDPvJ5EZwdJyeaZ6npEEBmaciD1YfdXpsSL9eBqcygLF5pgMSJM",
  "key28": "VL8RGtJqa46EVcW6r9rAj9x5jqtkb7mnmKmZGytXpm2eeKUGiY7hG8AgCj3SFukEmRpGciK7HzFq48uv6mjCEXB",
  "key29": "3iDrSeFDDn2tcQSC7dPQpFA6YDz7iQbWYQtZWYbK93TUCCyetAuXumoVm5vyanHLkXyyUiiJ6gorP45bCsmgd842",
  "key30": "2bTpog2es3twoBhJMZm3joP61VoxHfWWT31rCy6RWJmdoMJt5hk34LZV58MrECxPqifrYxhiqPPZt5hGwHTc8Mtd",
  "key31": "FGoCYsPCsJzyp7jUo9ZHChdiMAcvMnaQWdgthiAGj7pugP8xmE7HhtZ2eHAv4W5PRmAGABxDca75xHKfhMuB2pG"
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
