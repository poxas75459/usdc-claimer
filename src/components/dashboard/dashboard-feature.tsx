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
    "4E4RkPPrpji1r4renvc6PNdxcqQQC8ZrDFky6Ra62w15y2ygK1UAg7D1Wh3ETQCkoGpYS6hmiY2H6wSotAbWtLpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o6JtEbKw9ed9ckrJzS1GAkuZfFDXknFeUWg4HkqekC2wpLcor77RP1jmGoG7Vt88SCcMKr6V9iF3DtmQiFpUJhJ",
  "key1": "29UraKd2gYM4CDWHD192vUsfnCVDgHk3fs5u87qGJ4DN1DpCaGa6KaZdY6ybWSdobw6iVjT4yDhoqayAA3tGXVfp",
  "key2": "31fF7Qg9htqK9UwmwXUixar9oGDTHSivZhvbostwRnoSTHCXEwCjVQ82EBwnzEFifZ8XedTbRrYC1GLYdTkf1ZUL",
  "key3": "4ivTJ5reUJMvZuTt6jm13NqumcQZQZDPN6xqBX1EytuWotJLx1rRQKUrGw3V6bh2xdBeVc2kPr4ineQbD1a8p4f8",
  "key4": "2Hs944SDAr25RKqkFbbXVPP1iQn5LHunPi5DbumFGp4yyKvTvBn1KbMrzmPPZ5s1rjchFJEqifwLp9Q4mSZPfNPj",
  "key5": "2Hyx1fR4YZH4m5oyV6KU5WivVL4jAXyCrmVjZ9LUtmEcKnarkrMT4DrdNb9jsy49QGijAbi4z6cXcyskPSrtmQeg",
  "key6": "2cj1FdtwZnFQo6ZVPXfRXoWtBCHBFsPXhbk8XArBzKSiQ8JDT3RF5FtbsHmYodxLu3WqXU9zAPx5n4YdH29skHta",
  "key7": "4LmR4Jcz3uKbyq9dAv2jmpgVfeRsgw3mUPppNMcSU4MwUHjtMcqptX6ZDUsh9uqnAjeoLdBD4comW5RP8kEWz6rA",
  "key8": "5iUnunLuKfy8WgEMEwBGsMqEdDKomjAL3xFQD4gRHud3isr8wCPMqoyeqwW4aizKY8Zt4VEKv1uK3DUDcUMvfDLk",
  "key9": "4o7wSiijf98NkFYdCdZgXtvrj46sD2H6KWBXhSLEnniAkEcZpCeDVnFy92LtGNGJJcL4B4RNwc4GbnaQy1JTqrXN",
  "key10": "2DjXCGkbZ1kvBa4AmhUQZoU9TJtzRmWqX4aT6iDvoZ3RPVfMMU7h9bbTU1tvRtEqMMJFrTLDTCVhCKaq1u9hQG9D",
  "key11": "2EcHSYHL3G98iW5LE7uaL14ARLfASaa8sQf1aLTCqNfwkitYKJA1mjbywxmaZds6oWUoV2MnCmScwQ9mtu5Px5Dn",
  "key12": "4ffdZzybzsdVMRkxRxHWPrUGKGnzUkViqmYxKZanrLLUiYm7ZAGL9BvPfHZB2jW6sbMLZGBPcLkZ1Ev4QWtR2tMJ",
  "key13": "sPTBvdVMsLM3kAPt2tWsyEb848cKn5jMTCL3QLHij5PUF16wbqjoEW2Y3zXrrNA8DTrU2z21JJPMPiGGZwF4pz1",
  "key14": "2qFBeCbeYTDKngNHzNE2fUvRoV9FXRPD9PJnFXWQs8YGygacAbq26HFx9TRx2mNxHpYDhYfysJ7EzxaTBmQDq22b",
  "key15": "5wyGt2jpD9PsTXrNqunhHueSuddFqodpbpRwMGRjLfQC6W7tGcq3cKjdzYzFcBNvhhdfSdvv9KEZCwF42h8D553i",
  "key16": "2b2ZMDGHbtNAmhQwGbuvT6PUhu2mtfmXHemu5MReEt2dFLodcQD4KpVyM9TrevRytEYKsdnNymn1YL3K1LEAu7hH",
  "key17": "35M6ZWRN2bk3SeSkm7JTdvLsQ3HWiZyxQ4RYLgD7E1iiBihRzHMPTzcUjAU86ruQdUx8X9vENKA57n1jkoWkeJvo",
  "key18": "uEY6xE45iV7cCqWwDEqyQ5DkQABjGLgxz2c9eUW4TLSmdEcne4nNmPGJXWF24aR4FGt9MPBGCMV4ZK8YL7oZNoL",
  "key19": "SADC5ueDRkQqS8zxFwwyqDEWEuKMxa9yZrjaVqgaAexsgA79bT3hZj1iMogSasFpLVdQ5C32NhWjBxB7syrgn6c",
  "key20": "4kHCWTqWSEArQnJKsiHLh6JgyHHqXVz4Ru6qqK1KyQpigymB11RY6PUxd3KbmuodcvLpznXpCurFWvbKuvmqvvDF",
  "key21": "35hTT134M619y7N9kmd8B1yWhoVisZVPrLJ5wjAcgWfF61rmHkrzNwZs36noXdyDyk2bzTMwjnuG34bsRW5NbfQE",
  "key22": "5zVBhTuaBZ3Ca9FGMJLL5acvinFK7P6HCTPdYwBvr7ijBS4HysLyGQTvGKiC6y6Gpd2kE1LopNF8GiMVUzWPGzrB",
  "key23": "5y1RLorQGyXjCe3i8fEfWBzMWH6PGMFmtMj7vSDoVCEQPKLBWE8knKHbm7iuvYKSmyWMYJiU7WndKaCYbmFKqxmF",
  "key24": "61GwGyo7k4mwV3Am9rEKDYNDRxbGQCeNwnhMBL9sKbeVVEERU8Dga1eEwhy2pZBuvQQkZymhFFigBDoABCXTiVC8",
  "key25": "Zpq7Ewf8wmTunGq2yUTWwPVwDxN1cruk3TdqAF73ius8F1a9Ww943b4K7tMHiZWs4KFGSRTnjwBCwAwYKESWaG6",
  "key26": "4SzLeyrDiLXqUpb7EREJ3XBCkuFbVYaL2ZXwQSdPVWZcJGVrpiYQKnsHzG3SzoZonyNLZcKdRqciLULVaDsAvbgv",
  "key27": "4xWDrJKG3e32HHYaDAEbTjuggV8kHCEV7d9HMNb6sLp6Vt84wAkUJE2cayYFJtQYJCQKBtbGJyzYPzoaopPAi9V9"
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
