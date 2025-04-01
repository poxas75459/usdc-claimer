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
    "QPStEpFcenBUpi6hrtC5rtL2BFbdDiuGcch3EdNCEEQ8cSeFSE31B3EiFzyxhQeJUNrtWGKqGS2RrE3MXQLN5pS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jDwG6XJkevv5fBsbJ4CPKn8vfza72ksivuGDME8aZce9EaomXG7epxkia9NntBofAgfLbUukW5bJA3cvW7Gtr66",
  "key1": "5BLsWTZyP3LvwG39gpw2cRVgxjtnEZrbEDuofHBr3QvwmwhcR4sKb5yfRXiHDSKUeYuTy3c3expMQpsAtg42bDwJ",
  "key2": "zjZrMRZHNXrv7bqzEv2Sin1QGVzDc5YTLUcBjwjgMqTJJwDT85KcYZdWpYFLhN4jfcRo64kLv5fAjoaSuMDiBGL",
  "key3": "46YyMypPbyJKDHUgqQ1dA6UGDqnpRYQepZB3D2tUVtyHo5wLS9mJpkwZeHNUC1z3njaUBuxT65nxakxig79Gon3B",
  "key4": "4dJqcdAndu7p3pEt3X7xqygCKthZbNSGhbiqtNaZkzywpkCx8ZF1nMLFQbDQZnoTP1o325MCMbcfaRWdXRPXxGXb",
  "key5": "5aekRPXWV2uerqyXnE8aCiKj41mpVhymtw7d1AZwtyP9EDEDWKJgNKpMqvJrukg9mHkgPYgx2nhRwKNVKTc31sd9",
  "key6": "2aujVaPeieSwAuRab8ENjwgbE3ys13AF15AVkZZWLgLJ37DiJM54Bd1MHP6u71GLrc5oRFoXCoi9QNgjLh7orph3",
  "key7": "4jvRgDyHnYQbkPoybQCUzU43uDpFaB6EaB1w2M6FGvjjWPpcQcidwMT7cxM3rtYvz5D6fQL4kin1fLVDKHeMewRV",
  "key8": "2KiNsgB5cxo9Sj5KBdRBnAFkYMWM3cfS6erasKhKQKXrCdRUQbZnFsmT8GdB5GsBCen41a7K1ZoSP2sMvQhZJPV7",
  "key9": "61kDX4VxaUuFDBDyFeC29i8yBys1aD2G2fwADrKYKWG3qKoRmc3g5YcP5NPVEz9bvs1PAfFKqtrCvyMuFf558DsP",
  "key10": "5HDtr3AE2vdExADLAhM3Maub2as6yuUmuTP9EHx5thTLs7z7Bx2Ar732vV21NiHgn1twWdB2suBxo4RnKStVFb1y",
  "key11": "mmgVupJqvZomsthsGq4B3EaR67GHHwpvLv9XjbSUqC4rt1Uyw2fvT7C2UisgESwpWF1U5PvxbgKZyMZXEVzHnGB",
  "key12": "38o8B8ik23pupSnFFNHhuYr5g1wWvHT4gmqvKXWcKm6aozSp939ejBCBfAiN6Pby7pTzPwzUf8Zj6qCEz63kD8wn",
  "key13": "4VHpB1RakywGSGDUxYAvRFUvwJ1w6MUKyFB5r77pJiyBVrZ7ii7jXQM5VYnP9gui9vLJpH2YpZHu5LDDuhgiCk7K",
  "key14": "2ziGDXBfZpQ7M7A6u1HoiA82UE4No6eLGZ2AFxB6pBu3xpcW7Duh3C1g1XarLqShvUSEcrFPWRmMHiLE3M5GR6F7",
  "key15": "3BRjSxhEFooVjLmkAsjLthZboL7r8vYAutuKnghcnDLh47qCbeFpibGspw1PojKRwK5HQw2ZL4XJVRJYdxzJMxYg",
  "key16": "664ZZmnUc6XhYzrAty4oMZeFCGaDYQ6KzVxiHzfAp9xPVmL1xob3G3r8jSi6LAp1ag2GL75owqrhPqc7t25JGZaz",
  "key17": "424rb2eBLAv6Mxq4kvjWpzkRvqwzDk924xCyaFC6Fc1uc9CJjHy8gHRvAhVKqSaAjyNAu41sDpoH1CRid9FeGjJ1",
  "key18": "4MZEMWCmtZiUzjiwBve79i4YwbNVh6QqNStoDQk4hShjjSLxjPS4pDodJFicgaMQL89m2BxqvK3V92xPTEXAXxzn",
  "key19": "NnYKE6rGp4kEEg1SSQbZF2b7Yi4upbFdw7JrCs2FtVqELpNW1VxVrCyqTkUdrkaPvShzYzLs863hWQAQyY4j9Z6",
  "key20": "BQZ8wxfJLw3tn28saPc7rbhNQ3oEAdaFwT2EMDbcv21e7vt6V3vBs2KhSfkW8ZvN8GQScUiQw4aj4LXUTbMBH2U",
  "key21": "B8r8NpA4bZUDjVX8jPGE4nsLyxpWnBfwewyAAe1Gs6yhuHdhnkSTrT3JHsnPXzyKiDTbHFcq6WXeuHfzv31KWcZ",
  "key22": "5Ui3a4RjZqJ1QPwjnVb1ZYRQpZnTzxmk2PwyRBbb9rynvH193bV74CnLgeW9NgPGqS2z9aaVZrSdAorwFRr2LWhv",
  "key23": "3sSwEFMpXNkmLA5HAsQxjjweAexiNE4LBESWKdrFQjCyv1dwqVyEoMes5pSNsLCF1V8zvHoHpCkexc88ndnGDfCh",
  "key24": "itjXadqWKwMUxtYgGx7ZPzDXgc7E8VYzemaQ8N8ERYUqQdek3LSrf5r4b1mkP9DkCWsYA8CXCH5y2ScgLTQdSfY",
  "key25": "3gAnzMcNvXWhhywmgPB36t6Uzv5mxnvR4Z5NNKxYPyGRygPtwC5dnBwkURzBpzwTEAGoA3gyy2yM87TC7XSmXd2J",
  "key26": "4ihZSCq9vaR6pNZmi4JZTot6XgF7dYF2djbk2vtgQQnzqHJySxZa1mJxPwD6wbMb9Sadz9MqH4mQMtqi8LPpmWEL",
  "key27": "2qyJWxjpFhQmg5N1nACRLPbZmu5FjTQvfswFiuenJqiZLwij9wiuNh25o34v6pWdwUbPPmPBaNLWWHciJEkP6nZd",
  "key28": "2a99d3VwPUjvGRyfHVKUjH8Kpm7DT9c9EHTzchyZrz1dAgfatZy8GM9nGDjkWTKZes6jgwwaBhjRYjDNfE2HudDq",
  "key29": "2JkFucDFwwaJRPmG5r3XVoubnnJeLxE5W2wspWh5NabWnMojFMGHuDWY7XhD1ifVuo3p5GgygxyDbT8XpPUU4KWW",
  "key30": "27ZpTZnyvENEV3WUgfJLLhw5JwZU4Uz2Sxh4qymnWUjTzyW1dP4pi3B2KNkiDAyvytyGfYJ6A1ngs1NeU8u7Cftg",
  "key31": "3tDNKvjESgREYWVzF2epgcMnWy3GV8GTuU8djiV4NNWtchS9xFJQ74AjpVpas7oP3PWdj2j2ZJF24LUBkzMTxG6F",
  "key32": "4Lyr4nYRBgBRsYgvzhcRYhy6joBUtz3u1N2zyWqbT3s1ifNEZpostRLqLrK8nAzHM7Msdq6xdNhQgkQFgRG9Buaa",
  "key33": "5aerP9Kt2dseWyMoMkHZnAXHa9Ab6R6bC9bNPdtKhsXbiTM26sLj7oBwXJ4aqGKAEm6ZdetnK7pu9aR7xH2GG4tz",
  "key34": "5LLiK7EqWyiHPf8zoBBbQLF7c74CujLg7cZNhHjMh5kc7uJjuPbneeV9LfDfZ2xGReYsRRiDzzg2rQPX6hMk8Xpy"
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
