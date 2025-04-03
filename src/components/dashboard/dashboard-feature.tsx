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
    "3CLoLoWyguHv3iXPKXufsNFwXzaRBNbziirjkKizHL2iU3JC4ggSHNyAxbv8pBN3BYkLKfYWVxwJ4r1csva2sB2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HQ5nhUyXV3WyKw8BfLyaJzprSMoA6Qj4mP959gATgjxL8i7Zb7dKfNTryEFqsb8FyYRkBSYxCY77Kwnq6xBigVL",
  "key1": "4VNv6keq3TG7wngxnULoRiP6AfPkWrb3NNMQkfrT5oWWoMMeg18gcoNJNw16iSemtwDc9E9ncywkXjEDqV4UaNqH",
  "key2": "5ZaWBHs2JxENYgWNHUbobqbMbeFsXojcgRSWn5JmGorXpnh1TnCLu8Kp29Bc8nMrYoSEywtPUWqrHA7w7jqLs9g6",
  "key3": "5HJMDXRLp4m8WdDpYuH48iBfoqDEY7YPRje1839fkYtn3veXxLCH8dbWBFFtenuFJTDjTumxYy2hs2D4iX89uNrL",
  "key4": "5DX4jw5SCX1aZZF1Piq6KVcCJhmKLAWg9srnu9NEAv56LH88Q4da64NrXZfxqpUZFzacWrZxpBgu86R1uYG1W35n",
  "key5": "66iAtRBPgkweJvMr7z8Pu27Dya7Zm27hNk58iqpgGygYWkWipoDYanQzGvkV8KWwHPt87LJ9Tf2vTYSuhi7dFVJC",
  "key6": "5LgWoMebdqi9JZb29V2rKs77JNVBk5LJGJ17ug9xHRWchkr4Zi2t4D3USgdcwdGQvoSv3kuPNjX3nKgZ5cR2Upim",
  "key7": "3v1kMLanSAFcgG82YbgiLAWKC3v2k9jwi1BpYhVwDQyY1T1RGQ1Khssyg9UGkiJsNYf7uSHVtNUZurx713n8zeAV",
  "key8": "42vWCL61xyYW2wwaFmLVHRk3XTNGHvQcTmEafApQwZQc53UZmEVGu63ND86QaJTubYNT26Y5aVXcT4UbtSoGgEtB",
  "key9": "5ywckVXuXZGs37fPhSQcwx3f2pCPTqyCRLeR4zZZbaquLGLzMhGcatMrmHU8N9JF7RBTni9uBM85sbHtWjfLcQfT",
  "key10": "3MptmTVvMpsLfeXZSHGdYoQftZBB16hh7rE8dRawSEDiijrAHrkVRRPLbA3PAqqXXnzzvsq68Rk67rvbAyDSeoMb",
  "key11": "2xWf3qedU7EQfo4t6SLmZxUbBKWj8Vu7Q9VPhDicoYLs4JgPNQbHRTLyNdX2R57b2oTRkMAcAnvwg8VjzQanf8KA",
  "key12": "pi6WM93ryRq4ZaKKRcgY5MVmBbRu9Fi93egjgbQumNcm5waMQihBdBJ49yCm6L6J4vmFXUfLK3fzat2JdSUSRjc",
  "key13": "5ZWq19frexXXw3JXn9ywCG96RNs6A9wUMywgdjizhuGDj5KGVrJX75FC2hmfZreag4WeS24dNzK28txcK6wMa1jK",
  "key14": "3VAXcAuUdJGdTB9ng98BiXRA8EQwU1FvFdKv4zbXxtxb6HxLnnp7gtirV9e1t5MCu8FsYJ1hXT9VcjfnWc6AkwBN",
  "key15": "5EZxG9DAcGwmV5wZutU6otKRbi8jqyQ4zWvjNnGuDSz1rSQjvg28Zyjz9TFbWqb229a13HA4VouSM7hB6fcV9cAc",
  "key16": "5kD7JHWmNHbtURccXsUfXWZ51oXrMaHwicmy5Nacpo9PNZH6ZcybJBTCRmQ2cF34vBAEa8xJ1pYgNuzWB9KTjALd",
  "key17": "4RGAGmRpc5HSxBrPYzNnPG9mZXfhqTVzW37Cca9p1kZDE4hrpZx2fqQVLiLmAyFLxHPuoAwXxWwCbrcxLhNbL5Ms",
  "key18": "4f1QCeggpNYqJYU5mA5sRKWMVujvXMfKPVQi3efySsPW3LDTAbNdgmtbHVnDMAVQAXeiQhEhephtXfueA9cXNkVa",
  "key19": "2B3gSptZN4Qw1C59p3eTut2BfkYLFCKxf7r4FDw1J8JBg265KntwQ9qsZ3Ufp1EQijBiZtqayrVrKhE3T5YLqoJ3",
  "key20": "mNvaVRC7Pqp1L3JVTcNTbfE37Syzo8wYrRnaimS2DxgfvwZc2an4kjcC4hJU9upNFxcGukiMUwktivHv1pEHqMF",
  "key21": "4sxMPRVJ3pdCn9vjL7Zj6sxxxvD5MmnKfyZwX5cmg2rdZQn1YC1XCZjDycyavaFnwmQdj2KeHPcaV5B2AxkGLr6u",
  "key22": "zmoVQ5spRfnkGtUPi2WAuerxwwBFeGE7CMwUD16VvP54drXtg8y2A1psdheNiwayTnA2SWd1BbG8n1UBy2oWkrz",
  "key23": "3FyUpichwaLewDNAuwQkbL76b3AzrsW5R254AwTge2tXDpSxzqtHknZHeKK79QDZdcCUzFGABSNApnCtq7VTsG1j",
  "key24": "38c5LCsV9pAcM72mm6Ln1uAHYyGLFEsUEhsXffUFkfpKHieMdWZdruhZV1mWLoiHYFFy8NtT5SHqqbvcZ7otPzU5",
  "key25": "2LZAp2PhuSLuavdEndwx7sgeGittyUW2o6VdbewehSB4XsnPBwE3RzREgZYuFN4kAzoGTdMy3SqxRN9iD8oiHNGi",
  "key26": "5Hqy1nD9kXrkebCyVKHtuegpchy3SHJFtLCnYrnA9sKT1Kc1TZwLeKhjW6mx2Cp9aGsitNkWPJWPac9HDTuiL8rN",
  "key27": "4J8VFwtvpthZqNpkMKodhYJaiP7yWp2hDiiLXeWmJq5zfVYGN9Ytw125qc7mb74CxfAxA755gqHmYpD1LcYMqkry",
  "key28": "5RvAxYEjojSDZoWtLL2Pkmc4hH5JWNyjGqqhmNbCJPhz1Yrr3FsWvEQAwp4F4NgafaCRt1igLfBm2yXUiuAFgW8U",
  "key29": "5Q61qQuf1baJZAgeJbZM49cC4ctuMZsWe3EQnrMcjKbnNMH6fbEoRFnpgJbvLPEfUJGh51q8EKxgPVmeqPe2gBfm"
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
