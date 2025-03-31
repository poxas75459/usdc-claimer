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
    "4F84d5q1wTDBuY23e2t5bGLpxvLh6zwQFmhVYt7MtHAdi1rxCHQv5BmkktLMVJbTFG3tpHNcjEXiCD37tdbH7nxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fqdAJyB96NRNJ9BDay7hhGHnRaPtubh5kdnuQsHDTA6kPEYtjCPX27yvKfg53ehcb9esacTxKTWTGqi3EDLZvLY",
  "key1": "5HQVoLVSrAX23r2m9DD7Y1EsDh83pT6YhMRKrvR77NZ9Mz2ZFUC1ov22TzsKBJNHePgSs1cdXMQPF5E34ptM9hr7",
  "key2": "4rKifV3FemZTr22wqgmg3t6LVmAtH9cgEfrTUsHoakAcV1rZDcqSZXWknP45ugD3HvSda7Up8yaZ8M7hzGSmBuV3",
  "key3": "fdUxoMqYcgnbQG8WE8PtPdQWVJ73amGzDDDAJUaeUATr5RgfC8TJx7EBfQ2Q3MTXbrETCj4XykRQKrqxkS8U7NA",
  "key4": "22DkaHCjgrdB98JPykwRnJ6rMe7d2Z37oEWWGcKUgkm2LYiy1vGpRbS3UFo9L4YxMyVx7DEfpDXRJHPCJAtUTvNe",
  "key5": "mJ2eT87QidSWsrHd68Hz5a87yMu3m7jUvjwiyV6PuUmgGByMsNs8x4jKAetSuhWF3yTJM32VbcPei2ebhWV44xh",
  "key6": "3WFc8acGRrceJahBpko7TfkbzcRYHZN7YPMSV1nQ9rEuYUriNWN9DYujK6ScgxN35wM6RuCe2Dj5HLvVYXqeiGGr",
  "key7": "2XMhcSTaoFgBvUwaLsVp991rbrex7YwxwVPDXv9ZLnPxhxKwfMwVuuVzAY4cjwJA9R8Hb1cbjs2RJWxBwLAQqRUE",
  "key8": "3YY3u3koCtSMvpUiwwqoc2WW2UuAVVHAcLAytEYpmyCbEt5TnpNKojAkH6KHK9BWadE6fHJTGGtT1jXtmN17rrkp",
  "key9": "5pYkUsiCSKfdBFidZvtckM7QvJj6jz6RcdAnwH2uRFb4qGpKekKWwaU6pzmWbn4k53YxC18Dp9VryXyNY1SU97SR",
  "key10": "ExA8grYCzabueaw2xXkP5cF2d7wiTCqbKLcynxsFfp5MjEhwhthiv7BfheSb1SaEvccFBnNuTXTiEHzsb4LMfWD",
  "key11": "2rR6QRFDQcDAFNjbaTFDvnEt5naF8hTrCmszGiwwFqEdpSaCJkNaXVPs4qKAGkji4Q3KfFUafzVxnwTzNy8i4Vma",
  "key12": "3UakHtNrbvgooWAdDbhqXuu2vZyryrTpJXyJhAhE2tAhaWjHbhMKdA5gMTGzfiUab9R2mKcirQZwxnXFuF1eNNzh",
  "key13": "2C1bVgAJo4sXGdXjFGQ8CoDnFyvjGoHKEiYdoJinW2JeY2x2SYHii2drtgf5NtrRYGA3dyjfQ23qppycYBVfCfwv",
  "key14": "3RJnCUe1wke11UhiL6C4hvGcofBybDunCQAhNbJsJ2VX9cWwufQUrdYuDbEKDQRdyNTuvAZv8tnB52NTcsPJKDLi",
  "key15": "5u6Hi7AL4bkNd9Fwn4X5jCQtSADCU9cJzffsEH9PuRZxn3o45S2brozcSnZh1DkcDCjP7jSrxvkeUt4CR8kKG4yV",
  "key16": "4j7ndiBTUk3PftCg2zV5pzfX7S54GE15vLBC149vQ9nggmDSwDc5B7RVwYFVRvBCkMySNpSS6fRwwsnFD9UjKuDB",
  "key17": "5bvnjUWF5w88cS3q7NQPz7A8euADs6vCaVFjMfQvW1VnmQ2KCUD2eRHKxjeatYGC7Y9Ps9kCDu6haAVvFgcq6U5d",
  "key18": "R8FPGxkxeGkBBQGVaDhUJpRPxxcpqrna8ZprihG1qtQY3NixwMpBGfg7AwkVnfhNxEjps6ZDBH1CtYQpTZokbVp",
  "key19": "2SXRkqMVZSUePAwixvVfEJij433gSvGBfpwjEJsy6X3bCiAtxuvAjU8fvaH9zVyADWR9iV6DB7vWbDqrpTpq8tii",
  "key20": "2tUkB3zRznWazSHcbucapRNhZ4BKf25WT4tHUoTB6hoZikqUYubFGxjEiZCDStxBZQyHNJLaHnvMeskNWKinyx77",
  "key21": "2auNXC7eLJ6Pz91rY4o3x8p3uoSyzX52cqQBZ6HtxDQJMTvpW4uvXNUg4UVujS5SpPM7sTLKN34VTcJPuLJ7vAFk",
  "key22": "5g1XMw2vx2Xsz8kKjNwBef7cqqQZAex1V9BUCnnf8TUJPcPZfDnPAtUC5G755bWf4zJKnUiCRwX4f5qc3H88c1Xs",
  "key23": "4p19uGvVLhG1k1deCZ3qwZmZ3tDNMUu1USMudBxsygxo5yfFx5hXdZFP2HqMxaNoPKh7VQwL6jnHJgvtX62iFt8z",
  "key24": "RUXm6KUToixBTJgMmGdJwoCtnbcCEbmvhCicAuV36tAkAqZPFSf2Nghf5tRUr8ZcFKXK2S5LVBhy6dFtERLL1fQ",
  "key25": "3EKPeNZ3HVW9TUjcj222a4eb2mY6tqBeBbTMmijMGquzaFfsjuivkBKH4g66mcWeq9HtzbaEbpmQ9Ntc8KGVWogw",
  "key26": "4syw45XwfcsZnGWZjcjK4qtKEwQyBDTeKuY6vPvggxoe4YHfNXbWQhYqZuM4R3LMEkSiawBDZNzmjBpxVeCKCdv6",
  "key27": "5WGSeZtGFfhi38kwgsqrDzpN7wCV7dtQbb6QfCc8i9Pmejq1aJmf141ZYR4MgybaWpoxTEGbVrn6a15tzoHy4uv9"
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
