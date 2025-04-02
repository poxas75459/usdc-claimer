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
    "2KaGWPrt3UFxEgntcefsH8EhBbGA2GocbbWTzFshXaFC5xM4Z5TS1KdMx3znvrdUVgdD5Vrb27s481STdw21CJer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YpANh1nEjFqPdhasYDt9qqRus27XqXDwKSV3SnXeK3bGCJfpneKGx3CrdR4EGQv7TGFfA8oQ3naih38Z1XeGLow",
  "key1": "4Ck3Gck72vCWToaRbhATKJvu6ErLoAbqQzKWUPU2cTupRFnY6VmZsWkQ7jZbEQMKfJjW66h6sdVFS7FMjHBMB6S5",
  "key2": "4iWegnCo4rGMCvjbP1a5CT7qPWa7QJB19s5Yx4MmXYcPVQSZmpqqRFUgnnQBNt8aqTfG6M9BsXWeSDEf8aFngDjH",
  "key3": "3qWcc6cXrGrjtFfTZaat5ueKkUfCTYU5jBdpoLQsmQtDEgUDPxLnZer3kKwssbq8kpKfJxjA8gh2ZQ76TBvJX1QJ",
  "key4": "4PL7NaLZpN8wGZLkQQkiukZk8N7LhWgfu85m7N7HW3nfXXWEC6XfUe1cebn4hWKrguT9iacvwPfbbbTzznxbDvtE",
  "key5": "2xdXGvzuCRWyUVG9uyREFFXywv66tN5EZ6CraHv535ZT9XaAabZN3PyvSc3F16VBqsU5QaYSZ9WBZTLb73myXNeJ",
  "key6": "2QWmYRgUityGjeW8JpnYU7szE9UdnKN33SESZmhWmjvQhxxsYuzDTAQXXrei4Y3Fu7iwUiBVnfGgMcA5zJaWBhzo",
  "key7": "2hXtzv7bcZ5QMcdMynUpbhD4LFsMDWirp9uQnzDicfwRNM3CGBSHj5iwWaXpu6VNHPZUvMTyV3dXEWz6YrRYajyi",
  "key8": "55qB16XzfWemnPC6Dw4nNdK6sZCkabsyYGUyaspUgCLeuHpe1XQGLrLkVQR9oPChTYYV2WdQ1nsrpwDK327Z8Lzb",
  "key9": "3XvxQxZazVn7KjJZMidkiKbETjxrsJs4HXgcguqec9bQ3v8ks6zmuAfH2MQmAR2Wvc5H8qT61CNCG3eypnxFMnqv",
  "key10": "2n1CjZfih1kLPbwEMrMJo5YKLuVWTdLMB9PycpfehhSQ4p3uYzcizNDbProNCA3K7J5rD48nz7yrtq9GcXWJ4WSs",
  "key11": "5azrXNhaMk3E7huyTtTLaWDHbzjSfubw6UXTEEhBj9UM1XiirwQNzt1MgFyFPxxThPs4hUUVT3mznWm43SCnP5NL",
  "key12": "4JyqVkcjVrpdUtB7p3dxLgvPTw787kKX6enJCZhL97Jh3Jxc33R3Fu3jW9mvUpYJcGxek8dmqoVcU3U5iCwa1v9F",
  "key13": "5KUpmh2LD7bJeynLn43RY9AyquLTGu3tJVtqsvgrakPogwu8Hft3KcitWWNB5n2bk2mDwmG6AzFoScJTneoDoy1F",
  "key14": "5N8ALbWAZfM7FzkFj5FV9Tq8AiyQmTJdgDcKdfAoas54cQVVh4i4KnFRAyLHfYrPKdCzsMxXzeY2TgKhxrvutaMT",
  "key15": "221BXHWkH9Vzd7zvN5kpDXanggZFaX9fbEJk3sQsdbuGvA5mFe5T6X36FAuW9putnq21n6oT2TUj8cKWnLR8oLax",
  "key16": "3Uz43kj88b2vzqvj6WWBaMQwWtDX5bSXmHaaER2G2bRJoMPg3BYAP3866JBw4r5MY7tEVQYHHmr6Cg6my9TA2BQp",
  "key17": "5hMZKhgECrzDQCkRYhAo4stbGyi9ayopnH9h3mpWeAjg67tEY159hXLtEddHcdXYNh3zqaisfpsFVyFHxuCQSoHY",
  "key18": "5zQMxKNp4enmcBWwnkMR91SCuPcRzf66muCDS7QbuevGXTaMFWWNjnW5MydJ6JWYCLUeyyNWBhWb88s6EJAkRaHR",
  "key19": "4wc3RvRz25GKKWaRsjHWN8UCwZbcFQhLPqfubukdJBDu2u44y8pk3enNjBdcRFm4iHKjVNLGjGoXSWxXqVoHyxo5",
  "key20": "3uo8FWjHssyTSU3GbegZyYPgZBsYUQp68Wps62oB8HBQWDjoyccAoFKUTTTSt6ZZaaKp7FZU3bx1CbcDCAQZc3sw",
  "key21": "2a6KRjzmA3thn3Bco7XUPzZtKjC7gVhRG6MCAQnFqSWWgVLeH6q79EPUq5PLpKajzz68Mm4qzWs3xjhSehdrikVM",
  "key22": "46bkCxzSMw21s1oWBAETAZgQKCLrTh15snw4bfPxfXWEp61sMGMVNq9wn3RYbFL7Jzasw1jeUyHJMW1yaQxygebK",
  "key23": "3xHHxFmKt8bBGqT1rDb3y3qWygcBoThmZdLM7aXEk24gSR7bTvmrtoCkFJAik5Hg2ervRNyXXWHwE4cutM2vPa74",
  "key24": "2YQS23YArkxw9essZNYV6zVuShp18UGh9c98S3fvUdLhQ9r5xHgaNhX7BGTMp37j9tSx1XojTEJUwWWmwe4yhFqe",
  "key25": "2aeoDNrGkPDSuWcXU8cVjbEDknV9xY9LB5E1nZXg7vSQ71HcaSpju57jNVDdT2rQWbjTSn2FtXej9jCsiwFtWecH",
  "key26": "2mZgjJPAn93Rb66EyxQLmHreLQPioHSjj2s3zoaa2FDnxzAA9L99dxZ3dg52wqW7bY7DqsGX9sYeiLcweG9Hbam1",
  "key27": "2cZRH1B44U1ZFcBEdXZ2raMo2tk6kqMXQFy5AMFuzkjViE5pxX86nYtC7kohvqiEp4ezLdMSbGBE7gNbifq5ZPz5",
  "key28": "3kn747GXAVqs8gbxH645wWBRmNBXBxF787j5TDBQs37kBuaPNzPLuY7YX5K7LaPSEz71UhAm11kjMXJDMPTqe1Kq",
  "key29": "3SmTNVec8wpZgc1fCfqNK11tj163L2WtmpF1q6h2ANfytdoXDjB7gjMRSBHPMmvGFjCrF6tokDGZnT3b9q5jZD9q",
  "key30": "36SQXuuHbWAE9bu54XsEWCBjrZtrPq4VgWVPTsbQPNdfcrzqyaSCm9cNpRohv7Rao29Du5FVdcQqMjrcLibWjtzU"
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
