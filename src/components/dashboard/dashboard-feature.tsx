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
    "29Sq7pLuADjyZ6W3QAV3fooGB2UxM4SeHYygPpzeChYikwZYPovtbZkqGvX83dm7qLCcM69vyj732dXuyg6kc5Ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2puJ4czie28Lzd8DL6xYhD8NznVQkwqf4p987uDfDFYBdxzNoB7ahib4adnBfkvrJEGrhi7dDty6AeaHsWZzjM8S",
  "key1": "5cTAsJ7mF9LNgfRf6g3CPdJVxkZZHtoTV2gmmBLuawqM14829jNnSUnTPoWKpzq7fZ3YxihmMThZoGbyQniU4ebU",
  "key2": "5efTusM5AENnKfErsPjgLWf5RKJB4mR2GxUZb9hKFRJ54JrA51RjWhK8gvLB369tGoTuN2729Gdjb9i2SoLbNgFd",
  "key3": "21R25QHTr9ZQHvhgrYnRBXgbR38DMDPsUNgkdojumy6hipPLaAHLa3yzcWPeEoD6CaxsoJSBrXL4p3JJVWsmMb4H",
  "key4": "4DRKHTohLqDPA2xdKFkMfyYdqiNqa7CGki2UNiV9sE1xwA6Lv9C2wCQSQtXALQnrYN7ZFez1QjRUeuCrGqQp5MbL",
  "key5": "31PGxr6UjMxG9nycQMD9T6DeynGEuHxm9WGLJdR1bVfaZexJvKVJeuaVyponisMFWa244KAEiXnQESvedVKQ1fN6",
  "key6": "25kmVCF4bidJUGjkspmXLi45buvX9AR64dwdHrfgBAJsnRTQvo71QgvahWCFzEXh5uFhSULzqs3rdqkrWvhrcHxB",
  "key7": "55wcYqFCcdHoA94cHbLtXpau76VSLeSD9uocnkMJ23zaduXiZSC2mHLtxxTj74prBDKwULFpvg9yjBp9WN15ypPT",
  "key8": "5qrhUuzw35r6DF4MexaWE17dy11fJZRdJP1saAr4qtjBcznBZgpMZRpCKMfWPtJmdetm8CSYB8CPd43JqEWhwmdS",
  "key9": "4S2ECsU2djYzTpR73BLTZZ7dUNw1QdcsJVHe2g898y2d7t8gBykAAAvFH8NEPGXiRHo9CMLj8BYFGeJpUVZwFjYf",
  "key10": "jvDYAeLJPojHm4jDqFz2QFKUPiCxrbD6KfjuZDMgmjBgkdSHEcMRKN1XdAjoUwTmCHGjPvHKsABeqBCFNbPAjeL",
  "key11": "2irPNDSHowEyVm2zj54vkvN2fmM5RmuXP82TGsh1MWRifwm4NXfgSqFxZ5S5mWmYfLiJo2sw48AJHXb57R7G6vSa",
  "key12": "5mHbUHpH512iC1ZehnsgxGuPc46vUzHriRw3cLBqmVgdXehZbXgAKiDh6CHn45JdafSsYnDk1h7fFkxZYtC1d38x",
  "key13": "5h4qn1U97zh5C2e8hDLSfYunmXGcAH37NckEzNfVUtvLorWPMeWJE4kRCTyc3QUambMut9AQFGZZpBRC4D4qg6K8",
  "key14": "cnCu5QMJ6sNNX9zGMSxrF116GeVZ3EZN3qpCe36GrstbBPgLgMPcQ3BD6mxqkMGQQD9kJP9oq8k8TeuwMX3sCqt",
  "key15": "kfTC4VjaNrdpuAJWMpw1bBuzUGB5tVBixVpdDxa4qYyLBesKtTeUMHwQJLMkUQHu81UvF2psrgUpThkc2PTjJdb",
  "key16": "4e4hYJkZHQen2iRvz4tFxBN6rVQJA5n1ySGomvPfjqRowEJDeYR3tdHGmJVbRAwyXPEEPPCkKHWqPo9uE2Ge1D3b",
  "key17": "37zcuksmRdGXs2QRjvF4udNbYkdySErd5Ew4ExneqeA4octGJfHvu517CWc2fpz9erWNg3PnKSeQBdykJiY6j8CY",
  "key18": "2Jk5RyBcZRtPJney4JRCat3NqKfvEn3T1fTcDBLsXv4K4rA971iKQyo2tia8ajE28e1cM9A9EYPorj782h9W6gbF",
  "key19": "3cxjn21Ju4NUcD6WLKHWhMoQDJRQPEusUqf7QemnLbXPDnTLtMBopEMEN5bjtS7ZbJgwK2wQ2FvF8D215nwH7kcQ",
  "key20": "5b8QAbpPUwWRvvEpSpHcENySinui9oJVPriQ7MCM6tioD7aLWj5K69RSLGRZwXZnqajAZbwNLFzgVur9efiBEYaR",
  "key21": "5NLpH9UvKasS9aHMnApgBgceWyixLDJVJbW6uCvBwsoh72QkMjULiR1L3a7zaD1pRgNBxLez5zTGqdoYKksZFWW5",
  "key22": "2FfuKbXtNV6JQxyfurcNo9KhPvPhfExzkXuZTCbsYUxSn92fyZoobRsbsaenZuF55jiQ4McsNCV2r3NAGgKjUyxw",
  "key23": "3EP97go1uynJDefHdgh6WBYwo3LhpJVkhGqRHpfQoHa1APPvbdjZMM9YwADyr3Dt7zdzZaEobnQSjn58tUBsAsgT",
  "key24": "2DUxZ2JUMFtgNwvbrKjtoYkdYzGi9E53xJ9jdMaRgQNRnJWK9isJVdetY9J5hsg7Swb7MRixVGGXsuMRd5EnDBEY",
  "key25": "2Q7swVHhJeGvgunpeWgkm6h3Xtm3oWVUsnrKY9uvs9L9EHgsv1k48PdHbJJYsYuDnruCGF7rXUqLkVnvKhYqkaZD",
  "key26": "3FN9EEdGoPKMvkAtWvy9edZaATWAeuUUZeFsRhNcZyR52q1XZ4ieLNjJfGaia4GboFJ78TMDXBQqSPCVzbctAkhy",
  "key27": "49YtyoZh8tuYFJKDjc1Bn1Hm9wwq3cwV5AmeNquTV1nn2mhaBMshgFJaNGXoeP9vCJMN8FMD9cNKmkdpfUVD2qur",
  "key28": "2X3HBNBWLhVUWuwgu2y2e3t4vZSaZ7YpAbXVCuMwhVwKaH89xLpoWWj6AVJgk5Ka6DkkDCd9AY88ZQnQqJbgvF4",
  "key29": "2sZxodvdtBn3sv1bVemBFvJNfC5734pDevXYLYwP6iopVYTRWzk8bs8WK9Ey7d8ywoCJ2jyKYcTvcRAnwSDqFwBT",
  "key30": "5ZQGPUoeFQGtrx9nYCNqL5u7i7ysdbx6Rk7EN6VJ9EiFEECtrWD1Gf4HhEdVULTJLiXJXY8kwiD3exKEa6aKHTrM"
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
