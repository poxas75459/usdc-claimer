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
    "4N8HDin1fRapfmCcLr1f7RwuRyKpjbwr96tBZaYcU8VKkRdywwHTGwBNGa8FvTZ6Y9CuTk1sYLhaSL1EshNxa4MD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q62QNmtd9c2SUTQxdijKxWEszNfNWCVCfECYEnXXqcYg2WLW2WEz7hTmy9Lh589d1Y7MJ7KJTkdPcJpN1HtQD9s",
  "key1": "3obYhAm4vZPXTo7LPZ9LP4N2uyYqjpm876KVM1S4WiPyXWAziThxsFE5VgbPb6ySKo9yP174TXYmV5ZooEmssjA8",
  "key2": "3P6W2n9JTdPQRt7fHarD5WKDsTpjCAFFtwu3oFkhob4o5Tu9CD6QVtbQQXiRpzWa2hYzqhbBEdvU2f6swJdi5t4n",
  "key3": "WHCtXiahNpmjCtV8GHXeCqNxapq7CLpNJFRRCCT37Mre9cSxuzMUpG3ntfgNmrqydwhfKshSyCL12yDbLbqsrsp",
  "key4": "22xSguDQ7rYSCnYMMUfgVxQckuxrPHnW8DeQ53bw8dvkteGQB2hfPYN17vQTV3SjeiwSHg6koidHzybbK52eXEQ5",
  "key5": "5ncAhJxMfT2ohV9ypY8iSEzjnUbwrmX83Q22zHJoTDMWn6QHnZeFKuz1LLy4thovN8seEZSvQzTL6Y6g65ujCvKu",
  "key6": "4JbEBT7a4cQGkzEUL4UcVuZRz3A716FzgCWxT5T6HvgnZNVQwxAC1YkeLunfVfYAt6t3oF9fKKa7h4pRaSvmVf6U",
  "key7": "2yuuKDyhNCEfAgmGBSrBY9MYpEkfaRbDs7eo2efxFmrZbkHaGv9dkrJe2diBdTRRByTehRKhhSU45CahmHu58EG1",
  "key8": "5aUysLZar6UmvxaQ9XqLNdq3CBzLMApX4wZGbn12w4mf9J47PhG9fjocgLkGyinntF8pwJPYffBfxjYQayi51aag",
  "key9": "2qYjd7ws49paCs8X93dmf9ozTRFAAVKZgoFHpAoHxfYY78F2xTDANU1M9jVtAcP3xewRGKqBoZKMaRpPbA4crwrK",
  "key10": "44U9mfhe8MVBQ5vrcdA22XbkGsvW55KUPMA5TcXPjaayRDLLmwCHwxg7d3jt9xdrSCQ8oyLRaWFkciiF3kS3RZX1",
  "key11": "5uxWeQKEvWJ9K2Vso62yQqxQj9qMbuip56sGykJ4kGJ3GCDGH924BK63ZvmN1PWhch2yjxxgyngpqsZFuRxrUScD",
  "key12": "2ppA4j3Smj4niuvtv5F2mPLmnPqu8M4ceiMjF4nQtYoHefciAni4f1HsL4WFdeDujYgKzjwkTnVT73EUBPLPwitz",
  "key13": "4ptLNedKUfuTTu5pvi4vJ8ve5kvyf9DeZBzzxtHWAseP82ttY9y4PeuVySnv2yMbE1iEdRpVjVPPnAwaLEMn74ah",
  "key14": "3eh6fnLGSeDfNKzTV2nyxSLPt2gjovvEwG9a2suCh4BtKDvFKyrZyX438KA6NRE4XMptHx7wYjawWASWqaEyQKVr",
  "key15": "2siDYPPYS676UZ1zeudwyvAfnFfWin3dy5dwWwuWb7TbeL8YGiMxsUz5qaVH51f6cA24xCzXiY14nfJWL27Yog5Q",
  "key16": "2KF5N8GTEWPj1VmDzb5orKYTVGJ76UtQA3uCH14tYtsspGsutxsYAcxGVWVUEE7y1EFEHcVsfqx18Z2ntzAKdjDz",
  "key17": "3QcCnhDnp47ijGh27vpaXgRLJHvJ4v9WhGugKu1wkPQrcvrR9MMoHMuxgN16i918ksmG7finbpQ3zxD2w993aiHT",
  "key18": "5uTY4Cbdo65mHk75A3GhiGxa22MJH9c5zqMHscVkZyCtpzbuwhc9yB9DqnYMwNr8HhZ1gH3HD2dX4r8mJwNVorU6",
  "key19": "5XZvSLkPySZ4iK2stkoBxDibwRA56KnYh2sKXjcJjjnaVZcV7P9L1udoAAqBjxVX6baLAYXeK12oLKrjx6Lf434B",
  "key20": "xbF5xNp7LVSoqFzDo2WVYFi9sqFswDMohFCAT6Zd2FNcUfUtcfA8ejGAWywdUEjE3d45Zsrnox2JzgKjyUMz1YE",
  "key21": "2BbRmd144y8F8uUmTRa8UEWbHLagpXbP6WP35Xo5VfKCgrGXfkruRBjWP1y43YCFkz13iG5WwkTb6S73ujAXLmtU",
  "key22": "15Fmqubu12uyxkaZgvGhK9oFCGrqQQu6DxCT5PfrDGDoKAhPkMoBQo3neZ2UfBqAQSQeVpKL6FVhrkzgRPswsZi",
  "key23": "3QZmkJJMMTeR8GuFSF3ShEhJSueZfvzbFXGp4RNSG9kq2qAMRgHvcJe2McWnrgCbWaWtAo6NJni9mjwoefwiKRqA",
  "key24": "5rvnGQMtBn86ZJpyGBt3qzyK2vQjGp3wDqPGCiF8f3MUYD78PKoc7E1UDZmF2izzuSyezL7gVJT9cBRAFU9LwcDa",
  "key25": "3QhnuMThegcnScLoPY7R4pDqmZu58vb1ZMzQVETtmcq8J4cvNyXV4E9GzXxqshxKRbo9sG3FpptBPx7TMeniSFhg",
  "key26": "4trRkjnwtwJFMwYFFuSTvWwasQM8fjKh7yHptTL8qJM6GdbApoCZAZ6c9NEz2ETh324ok8aF964mnaq53vtAqrnu",
  "key27": "52bAuSASypbXAJTHiVCVkXqcmyzWNcjnm1BTvu8UQ3WXR8DF697Fs1bXRHpMwAPh3MMbJziFRo5s65ZtBN5pYjeV"
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
