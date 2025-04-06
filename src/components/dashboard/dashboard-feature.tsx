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
    "4NgtiXdT6GFpGUGU3hvnK4PBU9sWFM1PmKD3x23Zss8eKsnaqn8MfsZiR9jfAXFZcXANemhR2VUeMVBaVGojXiFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TGJPJGnAvdfvGrg41JYURr8ZXd5CQ7JQv3XXHmxvS5qSJoDS6cA3eHdYuTzEg6UUPSJqMUUXxh3Pv4Qq6ZmmjZq",
  "key1": "3RMbi6mapf7owY3UTnyhKCB9jQkzf6YiG7Rmcu2bAePTJZyUHDzCxUiw3Skef9GwcuEr5aJZHnZPv5TcH8BFN8aL",
  "key2": "SNGiesKKV6XoJWRAoL58qrkHUfqwFrxnBKSUSgvciMdrUK1BEdikcqGANDQUKcCxdGJPgrbLpbuQJX9freBHWCJ",
  "key3": "3fKyDcsRk7qEAxHBVaRQW1m5BV9s8BzeL55UjhervHpFPLnvQq7VfQ1SdBQZE5shj4JfkYt68LiLYLj5AKdbLT9y",
  "key4": "AjvnzXiBeDrR2UYnLEnSjrFyYwRLdDHYsx5hqT77Y5RzvfEiLLrWPELiCpzVJycqYvskKZdRpcruqPspETyoBND",
  "key5": "2w7XMEjrBn2HqkwC4MjuycEK4MhiGn3Fw9rBoi8o5YdqKhwG3rRt4RFxdZbdqE6LfTaKW3Sc4fMLxumV1cK6y4Kt",
  "key6": "4sH9R9zad6rMsPXULSctEH8nP88Lz9SaXfb2TkXxJSdVfTiREeZLQhE7H8Rw5dtXxqQoMK3QDRPW5Esod7SzSpSL",
  "key7": "4v6W99z96Z8Qz5qV7Y3VeHSWweiWbwpA124gfLksybqY3sE1zU3EAqiqyAb3J9zSa1xEGhtFE3mL8LnGEn4XwYjt",
  "key8": "2imHyFrmZUSpCwsXuNszquHhaswKfVqUcFjvz8yJGvdtgXfdZLD1WLWvXhtUBaen3jJGtPVGEhR6ubyqsqGDBGgY",
  "key9": "4sodf4q2PPB6r7TGZ1eV1UYthvfuvVUNexrBvLzsuMJPwMLuZJVYgBqabReoK23xsuvdvjCYKNtL3exYNYkxFCBG",
  "key10": "3R5w22XqqijEeRfHz18nmqUPU2amqjmVstyxrMiHdsB9U8NewiFa6faaVq5E2h64BwydHY8uHBMtwXB3dvEviLy",
  "key11": "5PDEnKEG2AXjqVExZtHQCoCWKzWSBGiCEcwB6xTuMAjTAtDyB3xZs4R2VVVw8aRm5sybvYadVXvZzWMgPoZe625T",
  "key12": "5rTnsKNeob8XUp65nsZL2fPTzEATiY548o4huxMh4rZ7UqxxfHrqUvTCPWr6HYnvpRuAnzjTGVoRxuyQdf32mmFM",
  "key13": "vYaTdJp81QAY9bD5pFmuNmpsK2auUvPJWwGa6oY8ccU2Xb5iLcob3a8akZPRLCe11D3ucYX6JUdNdoNABNXLP2w",
  "key14": "4MUoi2zjmvQb7cyYdNGae9qfy3A8XBntnLgHaHTL3wsZs16vpPxSvPBGLZW4foCE8FTcaKC8wAa9h3PZ9Jk8Y4U6",
  "key15": "5mJsShQEWuTytuA9BjZD9JWEHzpAJ5bcsRY76cPfBWRD4Pdd4sAZZTM9E5JFGMaMt2MsQ2xMfCiFV3YJqxLrCVT",
  "key16": "21MM7RaMKqZaAXB1LzDLNQkCYjgTQsKxkDscDxx3Cqsb4pV9rgrr6ip9rGF2f7evJ17jLJKjurrTavfyuGgugnjc",
  "key17": "4YBXw5SLvoBctNDpsRXvG3NxNVWu9PfiTFLgi3WZGTbgX4sYPYGMro9KDpQ6U3tFRdeJgr6qspxtbWW9xmMkEmMR",
  "key18": "2UuJWjwpcQXPkuLXqoD3Q9gCo3KoTJuehTo777PnPqF5uso4Qn5MrJt6HhKaeTxbxD8sBj3rC7gWvR99ScGm6yev",
  "key19": "WJZCQQFvYNQuFVH8PzA3eqMozturh9PPaEG8Thkx51RCohucfkudZudfhVZwyypzibfccFH7g7otcQcJqEADYPb",
  "key20": "5xyMuJeoEpfWkmXJaavi63qzjjRyTDH3ghVP83Tjpuy4z1VNetzvaedD6RDhreak1RcPvj3RCmynXDw4qgGgMabz",
  "key21": "4twDxs3BMPhMUj9XihftH4qAYHZ1eyXe5HpXbpZr6i2CDFd6vzugN4AvkjvBiX5nhB6MXM2VXZhcc5q15rwJbuws",
  "key22": "4BLFLk1fjKmc5RW68pmyhkoyYjWRDWaMQZtZNeTWZ89n96YkUGtX65ymtKC3Hy1uZYHfMrc5tCG4nYJzuYXcn4Kx",
  "key23": "3RM8E7Mg3KkyVLpVUxocQzUo68gWtoAx2DdeZ3AjY8R6XznqSdwgtvfLgD5XAp2BMQQHhtgJQkr3F6tKHi8wP8SK",
  "key24": "2nmtHxsAmTFKrc719m2uo8ZxjjgW3VJ7M9hXToTVFM2qwHqmJpzwCfK2WT2GEv6F75W2R1hEFLgR9qGwvDPhe4UG",
  "key25": "5eT4EVXmoorjEszAkHf5JMSngGABt83T3zVCiEUCQt5KV9hvabSCd4Js2oTvErhX1vDLQAGfaZyEASYJytoH1vLY",
  "key26": "4LbnZtn1qctLxUU2YxyzAJayVin91YyKatxqmtzJjesTWp7M8XWhbGUfTfLRzXsFEpaN6NZNEzXg7fb6tsWeKwXE",
  "key27": "4SqFeSY1dFAV6EYzVJUgAgdnp95hW1koqT3DMpG9RsUojpN51UpkbMSf1QdmJ9UTFPtCHcnGUfm7oRF96Z1u9vw3",
  "key28": "2dtUuAkkeQezLHFRvouDjNWuVT9rHYpfoYeSVFn5pDyTTMspSQynfJf7r7NMpw9cEb74nFi7P8TCprcQWtuajcfg",
  "key29": "5D9KpqBrEwVEme9F7XqeGnMCHar7cifVGiEGk4guTXv4Hs14m4EqUWsxMLK3cYQor2FZima8pcYRGYcvq5wYXVs9",
  "key30": "2wRa7pAsGfPBjM3vQKfjnA1mbbR7UZjdQLm8bbvXaU2ABropxuiai5Vg2rtn4FoHUgJ1DUUJDaJ7dbyXPgyoW9rn",
  "key31": "39wtPkVHwnvBMP19zKWSc5KGeGdVyagGsYUYnmpiCiJz7WWHCVZ8LFwoz2J7jEcMzNdLjUAeD937mySLVFBuk6vs",
  "key32": "3728BypcikixtDN2MVF8DVprbJbcQCqqGLHYbamfKxz7paKUM4BfS9CLrGWxjXo9WbEv4heNoVEmkrWU7KH3nVt",
  "key33": "5TVCZA59DMERu56VERoCqUXhd8W9QS8sWLTprbq7N9wDbvWdUBGwQeFpnS4ShiJr9YYWToNtJmXtbFueSTqLBe91",
  "key34": "4JVFain8QtMhtcnEUSjiQxHqL9NvgM98YY7roQyJZTt12UUNCGzTcMnRwQLrz7S8sgamaHcZNhZjmFNBF1NGocYZ",
  "key35": "21LmMfmTRG7GcwWTtLyGFVwxonoDRuuYLRuFeyBbunS3R84M5aTnw8hDTdiQTUTws2Ct1DKSegWtB3PNuMrFaaqY",
  "key36": "4fL4Tt118Kg7aEDzgT8EAEf7GkttmxwnnHvSwcBxPLfu26Nz2nwwy4sUELwgZ5UbtiUidJFJwdPWoa2Jpqzif2EP",
  "key37": "4SQaAsFnQ4TmGm6vUtnV3MGPuWseY5Le9qCDdH91EDKYTyb9xX9ERzXcCu4dhyp8Q3HyW4ihU2Yh7Y1JNbmrhsF6",
  "key38": "4pZHfbDMFetJDRMo47YWbgdVvKQEaaLhaDJaYUgNFPCLjn6uCveG2L8HqS4zwTLrNpqD5KNkNi5kNUpH3LvDzqHf"
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
