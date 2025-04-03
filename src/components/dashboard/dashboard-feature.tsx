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
    "5WPFeXxfyvE52hscrJm74iUbJvZtyj6DWqmq7pcHYh2wWwMrE48fUXkGAKiKNUyZX49wYYXHSsdjnRNnjQLwMd8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tp2T4XWHrPrSLivGMoVoNoXug2G9EMT89d1KSWnKM5h9HMs7T8RNkbFn2f9nngARxeXVgDV14ZS2uuKizbDxVpX",
  "key1": "guoUhAMSUeVrqKnmNn6bty4b3jWKKbGJC7nJXSZFGYSSEYQhokW9zkXxPc3GLBy4eXah2864FyiizRf8fuHtBAH",
  "key2": "5Cjnox9rm1iWj4skWKstmFjTkjbo3fggZbENqD6g7E5QJSCs93vS4oZi5bMvwXFHrmM3JvtdjmejRRNcybvoQTu",
  "key3": "3ASUkHwwKzchqRWXhDFpP2HLUpcaBWRq6YXYj1PLSmjkA4EmwbaBozKr9ti2LrBe2ggZ5NNgMMpBt1urKP7fZHN",
  "key4": "3UkPtGz2e7295pjKDNQ4T4Pk8vqgGZFQjPe6y9Uq8Z7xCKC87cDcM9M7JcbFHi5nG5FsAVKf8uq8LJ1gqpBHAyjA",
  "key5": "uPgo9CvMGTQMWK3nhNZua252sWDH7zEtaAw7s1p9oZdzU8wSoJBHBNQc6tV1X3UByUw3RPjv6aG4g4ArSH7k29Z",
  "key6": "2SFwNjpRCtEowMfhCpAu3TWNwj96opZ8t5TyueTHTGP92BGepFQCo4Wb51ZhMBbiB5W1LvMPqh2dxTcBS29XDWt6",
  "key7": "3xBLBCCyRv4ZMbRuxsGPF1KToFtjKehLFA2XP7ZPvhjTNqzUcxuBW1CNzo6KNVv68srjGq2WrqWEqK2kjXEtMGLV",
  "key8": "4ai4V1K5FaGrQEEtQvCGTfk4h3pSbAYs4gtSvgr6Vho9LnLsCionMMNFdsLPQBd7xjppxHfA2uZuCjYbzySo6JkB",
  "key9": "2817o9RSVuBf5Zr6EEFuVu1oF1hzh1C9fu4ACDS2Q2Pn6bbi596CknhbUNeYLh8U3qNpGqFobwuk6ckQwC4T1cfZ",
  "key10": "67r53eheZFzbV56Pqnt16b2mxrKtauYYeYwNNHSMMdpb2ijwuh4ADfLNfTvg658JgKDw2u9XXT2QYn7HqpGPEXwY",
  "key11": "4MhhSmmn3EsZHTpYGPhSwNZ8xXehJNr4sd462ywMtvAD35aq4cK5kLFMvHvpN2BJRjj4XYdSv9mRuKc8Rx8SRJc9",
  "key12": "2BECFpubvdjoWAMdirSHGRD9XWkLKfuSH9FDwYntB5reiqVSwVKRRkEfQ7qXv8s96AwTityaTN7e9Aq7peGvqqrh",
  "key13": "4P5DkkNK4FCo1q37LeoPvG6c6mLcJV2vjKXrSnk63y4poZCBkGtUSJ5Vv1FBxokoNVdgJtYkwW4CAzgD82pCdoFU",
  "key14": "uRW4K9m4DJZC4Hh8UEZEF874kNGUe4x5scZvNXnJrcYKj2dDtEouJ4dhc4g8aUX823e5HJAYGM3XCjPMa9DSuwf",
  "key15": "2ArE2yxBrx4oKKFqvvwW57kwNTKTFmg7Vav8FyZPD2c4j8DzQMSrkq2kDvUSwb2cEMKqhyzNd7YQmmDELGqKiHZq",
  "key16": "3Ty3YGbYm6R5Esc8UBqMFZNvMyRHYiYASFYhmSibMJ9kh4uFjpLwAKoSZBQtr6VdY1QMfiZ1NUmNp4Ek2VU32ybP",
  "key17": "eDUGnYrYrSodusUTLSvDmgupBmCzWPfJAThXQPumxuLFZX6Y7JpBqALmxMzTHiCHEDhq6qVqaFeegZhFwprS4D1",
  "key18": "afvb2u2wAmfRPDKVoQDNdZbGJfQYqcL2wtwnhDKeBTKRtZe7B5GS5mJizuQWdpAUjMXeotT7pTRVxGAg2TH8v2R",
  "key19": "2NGRbQnM5tQjEF76KQySPhUrimfuZVo1bGnRpjsqpUwfDmQhAvDaAwgvpdw31XRNyJvLwwRqfNFvSPYM7byZbCh9",
  "key20": "3DhUCfePHtvbfabJYB7cttftqWT4SfWBTKYwANz2UzqLKk3f6NvnVLPuSu5zxvCeubn7j8Eyz9UibBKAV81RJ8vA",
  "key21": "4n1iHdQiCKqqw2Fjj9btF5D7AH5CiWv4nGo4CuvNEhdDtmJkJ4ArAiNxqaVnJ6oGQKaYqCzko9LQ8j33pQBLcd9S",
  "key22": "3wJdffSrVBWr4612S4oZh9r8X6exNszJsf4bXGYVcx2qVQ3zTstpMfakiT2ztuV5anFr8MjoCjwmkbVjoSDJWq5Z",
  "key23": "22AjF9vzMS8eNqztLY2RoPZY4W8za6PKvDisXgHeykeucgpzhf5V7hqj498B6yGVx73CMqKD1UjHaQJZLnsdQ4Mi",
  "key24": "67UEydxLpHSydifUgYsyn12SgtAeuAiWrcf7QTaX93z9aXy3yNn5R8j3DRMnWjHuny5FMu5b4fo1KrUKwbMNDKSx",
  "key25": "wwEohghJqdy7YsdKSP64Zf1zpgLdbveWhwtnXVL15248kHYkrMMzwBC7LzMJ6rk1gfzA3zVHP16qAWW76d8JrgX",
  "key26": "36JctN4igsRMx8HW3VsuLwd7tYv4mPe6hxQAgKv4ggN2FbZ3E6KoRbM6F8TFGRVmgEa8wnESUaU1Z4ns92nHktzj",
  "key27": "3JopmtyuJMFp5YbUQCLP98jGUzr2qnLjMKvd8qH91xdnV2ikMp6xaZYZuZncmiUhk9MPjJZ7eU2H7McTNJyxDe6H",
  "key28": "4B3Z1i7kNADYTowL2F9jhQweMGzJe2Lb2e8rXxoCD3Mn2Z2TudntdvrksLGpjAv9ehzghzbJsCk3tQJgF5VL2tZ6"
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
