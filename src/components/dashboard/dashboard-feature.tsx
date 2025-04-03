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
    "pGdaP4xJLE5msDTDgjz88EMzJqLMgCnGLkDgmz7b4WwzXQcQWAzznB7LgE7EAdsFUjJ6NrJL6zioSFERsLBn71c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X44ENRYxaVFdEmP47kEGqTFvEmuF1Kt8ukJWScRTN2D9Zni1sytkkQjC8nvDP1LjqJszJYWWAuyxe8CfZ6XyV3j",
  "key1": "58fYiVUy8KCfGZyxjrq5spz4kntVV8nGByt49HKxpeXvtUmBgtXAbbjS58nGkNWTgBy9HhFkp8M1rL6AjiBj1hNA",
  "key2": "3TDu2jiEFc9AN4sbk4F8vUgm9vn3NE5iWR4zfH8K8buuUpvxFCki4PeMoZbAC5uLCazRht5KGwLoHiLPbXosnxLL",
  "key3": "42HQ7ibWu4ADvti82eAXZQkhrs5txjd2wM3rqkPPdHt1cdyoUvdigFE5B7Cc2GTMjK8zF5rXVFXqR5fwFWsknJR8",
  "key4": "39av9Bh5pUhCCawJYwP7vuew3j61dFrQT72n6eQ6V1kBmA2KQc4dkkteguWD9cb8Ut1dVLQwP8J7vDpJEVrDz7ZB",
  "key5": "65wxoH73Af1Q1wUmee4ZfXniyTkC8tEpgBotQnEionjGUJgFFnJUdPAqyywHb12FhA41u2e7A2oGr2GeBNai47Eo",
  "key6": "5Sik8fFmfb5btsMsubMBSvTBq9LuXvLMDkTA65CeNYm2Zp2fLQGry819Wqh2gXoKRCrrAEpr1wT86dMU4PkJYm9m",
  "key7": "XKE6Lnp3J87sdvP2X9w3mcVp1BcqnSe7nkSLuFtnrhadwd57hzZjJWZzJeaWb3QYAKesvvfrQSzJsszYSpZT3C4",
  "key8": "2YUfpvyPhoSMsfeRzYvvj6FRvqa9EHcYnaqy1fsY9bAVZeDNa1KKDLXa86KhvrY79s99JVWubZwJC23T8GYpkSNu",
  "key9": "5vgMuis4Q9oVz8hvUqkEssvd8R6uFzLHHpGayA8WL4s7QXA1UU15Sgs4yVePTqWbtjpHBTtGHP7JXWEjydRPpVmA",
  "key10": "2cYzr8bhY96oQqMFxWVg9oW2iAdkUTNA21E9E9pLeXd4ZBw4TL8ZpUEMuEdhLpatTpv2pLYvbizR69WnbcK1GV6P",
  "key11": "5SHFsz5P9AQeU7CiHjnrRuhMkrGsr31uSEohFqWRWYTPYnVW2VKZc8i4ZchZN7gyRQ752J3ff1YmXUwPC7Uo9oYv",
  "key12": "3oMjVLActoNXhzcQ4W9fagpBU8PgNb6iBvot5QwxJeXxkKx8h5SUuCRzSrbCxXiemjKb7HytcDKU6thJwUL4AgaU",
  "key13": "5ZCNviEWnz1Ajncgs2xvRfrf9NW4Y7uK4LxfPBW8y9mcGpBWgGNKvNDposHdMmu6U64YpErprT26WonxjLtuiG8z",
  "key14": "3WABR2ZxbSUTCzVxrMCPnCasXVQn5wXfJJCM4nVp7zncMWvVQhZrCQBFETchmr1PUbj1v3P2o2hZF6t3Pne1mvEe",
  "key15": "5vYx64K34vgd9hdefh5gMR8K4bM27zQohL8y3ixannJo23d3xMhnzTHUQMBMVZpaTyqrFQavKKabhEyfPRUjKR6i",
  "key16": "5WkPijCeeHDC3XN1QGTaxxnVHz6oEdRanKXH2DfaufUgw4fc3NBTc5dsS3GyWEqrVGbZVm9NDbMBRtwXb862FLyU",
  "key17": "Y8pDvp3MTc9Zt5TSGEdip1UAfyDZUwGuu3RVcqphccTJRzhd3Z3jn9A7dHiUdEVJH4Sz82Ug6HxSujmcgbqoumN",
  "key18": "5HbfMgbn32hTQrnGonTTJFdUaVuEvJ9EWxhBdchhwmTSqG8kUMyokPYyTmMiboJhhtXS32zi7NNbZazGtnLhYqBX",
  "key19": "4G2iaqXbkhyP1qTzQzzxsTMCJmVsqUDGsvmGGdGTNX7idix5eyTu61nWcRjbagmcdWomJ77HVwX2pA7eRJw8DUgY",
  "key20": "29tSkmyvifNTUm7p7iW1SLM6oFyVaP4RqF7Q5JGNrwaNdXGq9dy7uKXwYM3PUCxsFEt6AK8LXGyPbRxHPwRXfqF5",
  "key21": "4j6JKokwGFRn2jX8BhSTd34kMu68Kh8JXjQC6xSDp357Hbiz4XN2idc2QnNycrgyRnXFX847hcEvBwkSnUeCh4QZ",
  "key22": "TWZkbPQZnG24d3EJ7LFftdewys7SXFcH9SJdHPvTBCkDwD4i7EeYhiHHj6mKtLg3Z5uyrdSFcFRWmLbF6p4nBg8",
  "key23": "3vMZP3ACNYxVAEfyXyhVU69YE3yGYoekzcYUskq3KaUYtv25E1i7sY9ohr73UBc3Y8igKmFQNqmCMHkbjvEHp23u",
  "key24": "4F22JoRHBpRAuXHEjGX1qHbLnHQ91DsQA6cHn7A6XqVFyKkvCTnWQD5jNKrDmqy1DFMJM28WrS8tkN4asMEZxnyn",
  "key25": "2kASXwL9Ct8ZHHw4g2hw55caDLE4vDA75ZiHiyWMZCka5jK4M6sB2gYdAMYpQBKDPKem62seDES5htqw94Dwe19Z",
  "key26": "2PuGu83TJAv5EeKtfwJZmUZjByX71Zc9HcsbUJkeXwnjKBtHQP8R4yyxNXyknxBxRraqwvtVgWngBP5CQ5qUdB85",
  "key27": "5oxSyFRrBAVLCgfbu6BXM85JFnJeWGoU2BWAKQyNkqR3GJNJHgGvvKKDb7JehzjhDwGGwz8cvNaX5m2WAm9BmUxF",
  "key28": "267S27ejpD5CAog4zuEq9T4XAmUggtUcPHHXMRMYUoRcvLFWVCZZPdw69Gp2uSiX39NaN62vdGQvZ1s8cdtFMug1",
  "key29": "2vEdpWbfUvjvfDAvBu5DWQjswKFqpPBJvAsP2ugQyn86TwEMGsD7bFxC9pPZbgibWEhfjvVQ4UsxAhzNHWYdsYph",
  "key30": "UBRxEQUe4gwKXSyYAcQfCDHcNrdZBTaFwLMsAtS9Kzpp3uRiG5ciXeHe13qqCDsoatsyyCSeY8VhpZu223MCWan"
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
