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
    "62kfbr7B4vLdra9Vb49tGT2QGFFdAnYgzG5N2dUUWK745axM9tRwAwQRtjyiffmnRTs6Urrx7L7tL2TSKTmfKmyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L6xY7767hcyNDVCqf1uH7UYXcujdPqgSuK1o9yVL8xCtWW5q3mAkyk3vRnMfKCz13RQ3QEjYFKkjsGaGp3nbW2q",
  "key1": "2SgmAp6tABapGkxBMATRpTx8Mkw8LVWTVhXxPXpJxbTYTv7fr7W6LHXvPhQQdz3nWXk4ieirqmFgz78X7m3wYqvQ",
  "key2": "3aN7KJvUv5ZwCWfPN7sBMB96UyCfQb2rYQwstWPpYqk6u8QVWQvszM7LK3TBe284WhSdEhodvmBQsbLCSQL6QDue",
  "key3": "5en9TLQYDHbT57QDzWF9PuSYzDGG1yZxjUBspHGoGDhWCDptL8d3MmuRpW2LkvZgtECBYqQYiTj4epH6VhSemjJr",
  "key4": "Qcf8MriWV6nWXMsmBdUJa1AFxoq5Wt2qSq7uYx8sjW57Usq2zqw3Pb7ShXj1CvAT2SwVTBy92yhxEjSmY8DfhTA",
  "key5": "4jBsJ1AJUHF7eAhCvQykVJyW22JkUFfSRzgLriVU95sphLcDUXr8x6Zc2L5dSDXRxatYJJuRXWbq5jjQSSRBjLXV",
  "key6": "5XSubeABLnRMV9ZwXzYgaB3c45URFdSs4V4gLeuEDyR45gW9Rihg8vk564dwHLYMLyJzoK3tQcWZeiJGS1Qdcvbu",
  "key7": "4DUycaBuBZBbesEEWgs8GBuqydLFPihRVPVfvCEVPxwdZjFvNAGwHmCacEiznQ6cULTpWsRQqHDc9NCFjjP3fvTR",
  "key8": "4HGgm5KQTznHwEcn9RL73tos51MoEYM9jg5mCc9HtrTfMj77bP9D7xNxmJ4ALQVPsogQMgk1d2Uq43LkpTT4ezYL",
  "key9": "RWjbxU7feqMe23EyusYdxGon3F58WD1GV9Bw6yhJ4UP5BEV9QfknysDdzEL95SrFuhHsaaKMGkXBXKrVdDFwpmV",
  "key10": "toCeRb9V8t8vKhuxLBwxA6RJL7crQG5VrzKiFRhsFit7dfSkAQNhWDkLchCME2hJZxAWZzGBQ7ogtJ7fRq3CTjo",
  "key11": "5g5tb2TRkZxJJaawjy7tvx8Qx1Y97NAVUNe7HDAyrzaf5pnoGFg3284X1zN5wNQXNvXtHnvJkvMUq2d8oJQDhfMe",
  "key12": "4kCHy8SzTcHjumrttXfBJ6zPRVcK34B59wWiM9e3GobxNYdUcmJWT65r9MD4A9TasfsyWyx1NJCXVxgFfDJS7WLU",
  "key13": "3X7hnwgBTiBqt73rcVpQYAqd8xN8JhPB44L6bfwEqVao2aztzANqdty7WskJgwChmhGPAxwPJoZ8viFxGYCYbT9V",
  "key14": "3DdLshbktH63TGdUWFvFVdwxFsJF2zJkRxbecXF5q87USf1xGGVuVzsmKyUNyh2nTghj4WotpY59xgd4eRT2nEJn",
  "key15": "2NWsJvbAL8vmMpu14CGrX2tAQMByxYL36bqn5swYnSHVk27QwTLWgcKZfTRZT8RiogEB5dpxcwkpvp7SAEmxeMrG",
  "key16": "4Wfn5Qzr3WuBkEUZtEkjLuw32x6RanFqXd8T6MEvkrr7nVRX2s9mXeiJFJAUtJGbdJodi1581vcLVqhPAZ8LxqoX",
  "key17": "5AUp8Fm3g7nrjnaAstfLsNETvbLiKjK2y3XGvok7V9LJfgewtZ56GvSe4Tim8mSvyyiGbEEuyT3VN956RpEhdpw1",
  "key18": "5MNLPJCw9XvYbeTjtKPYQU51KdyPPYKP3aSBvCQPVm2aVJKJ8NMNRdL8JayfQaH4g6KfjiKYPheyC8s77vN3jnXZ",
  "key19": "3Qq29UR9EyAWy9JXnaZz1i9fyAaquf1TZHa85C8icLGXB6CG4XgmyigcnXsVWEF6dvX9Za1MaV1MhaqMTacbxyJ2",
  "key20": "3VbnSdVmzfXFWQA5C3dYBRZePuGg5XAsCK8CzB2VXTi3gEWkjZXsjYQxv55NM4Uyz2M1eGThv8GAtLK3aYKP3UZw",
  "key21": "5VH14BozvndPEzKpaSTC7pKbq6mj2GiZY8RqC38S8QW4K2KxXJ6CcquHGyvBgmS37dpXPRDcFvSn2eoHWNk3n13V",
  "key22": "2Q9xRxje4bXVhJReMJS2jEReKGqC25kBqN3jwNm2eWgdUP6FEDKfxR6BkqkVUs3SCuiZ3AT2cYmA2SjnEAs42Cxz",
  "key23": "58PKCDQHQJLzLkFx62g9zxkmnbPgzij3nnEcEhK1sCU36pmmhsykmgq4JuKsGV6bruLdugCdCtzS4d9MBYofSieT",
  "key24": "26yx3TuiVQr8b4iKNnbJXGqCBMHdMFSmXcDyXBruQDBZENVS6YQkj3TSXcSM2iRtGPUY4jN8XyLtpvxAphv19x1w",
  "key25": "549TqDXGMbYrTYNufF8dL9ktFKzYozWiHJJtmvRvHQeCRdDL28D5CeLCxF5u7nchFFcukTTJwBBE63pBP5526dwL",
  "key26": "3s8AnKzKePJLwf5erjomxuhs1GM591fqc5dECULH8GQyCYapgrauvkAc49z3QE2sSvcw2WuWCSeuaQB7LDhfVqt3",
  "key27": "38CV6NSjdza4dfuzrYFoxNogpakimXtsJvvBotATqm4V5oMtiQWP6h8fNdYxCQ5wCv4BteoMiaUpnER1diapicrD",
  "key28": "4gjPZYYkRTeK5VyXaqzRJ9X6CW437jbyupJWufBpqyu7np8XhoxYR3XTxKw6wnXfcRCREVij1pWkFfDHeQMr1rX6",
  "key29": "5uDob6dqp8r6L45TEkHfcNeVu3GgmZzRwVTRGLii5yvqLZQZPLfW6wen3rKySU6JNekuECSN7r2dQGLAj9H6TPUu",
  "key30": "2VPLutLFm1iAPBFgMPptr9s93raeeH9hzuK93RgeqMwgGKBKtwhCMjuS4HuZpqFzKGDx5uqArMXcKgTkJLso8TSR",
  "key31": "4KLJMAD8pp3CwCxToHXFMytM99QTQb2ZxdwaPNBPSpSbnvPJ49H937Mm28pmYE2Sg61DDhfrLFDpZLL3codKp5XQ"
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
