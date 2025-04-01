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
    "dshAhJcTMWKwvX6CRv8Ynjxgu9BfG9KWa45VzSQHq37sfG7Rbc7TvJMoq7Snq8otJN7TGUJgSg8BEJabB81ZokM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c2wR66sgmRwd8DqGq3sgKvom6DyQxw7S9yU8yro1GnFidW9ZHH1D8YcMmUcqZKVaMGugNhBsufT8C2KzXqLqFk7",
  "key1": "5dQvajAvkBTM2M7ZQhAiR8UW953J3ttABs9954zZepRZY8QSBDgQhNaubMAfNYJk1T35ozTfxARVrSgkxm4D8y6Q",
  "key2": "4m1t28TvUzBuviUUVpjbjFbkNhr2uQKy7JzLCExy2Sv1zCDqJ1EGyH6MM6sBWvkEWs34yekkX18JYDM7CypC7ZhF",
  "key3": "7HXTuFQ8ezhiusJhzTEDm5Qh3H7c1qW25UwHQETVUyS8eeqoGdDwVz8N3poGPKiKk4KvW83NfX6zZURaW5U8x2D",
  "key4": "fHYyd6YKoA89KaDwfbmQ3TuagwVRiKyaRM17Ce51LQh3zCa8A3FCsmVZ9k2Mxv6oMnRX8LiJH5wnVdZJhLHFUtA",
  "key5": "2wpMUMMtnxDAvfuFboeUGEtNw7n3EpohodXiyMAsSeVBWQKzN2fk3uh4bGRY6WYv4WBkRam896JWYX5diPGZ5ue9",
  "key6": "3Yozaop4SQmUqFCsE1MyMEhUVtKcZtU2qu7exT5StQpYSxdttY9ZgF7BExgkkSbbPPyaKAREMzCGdxo1VLMWhGVu",
  "key7": "3oDYQBzjPaKrNYLPkzjjemHrSxkPjVDmzFUuyUKwJCqTCcYcvWxFPgyXjv7rgy24oeavNGvgHPGEJ5vo6mwVFakC",
  "key8": "57sNVDaZKgjBLfUGfcqk7wpTJj6yHpguF4b8JWsiGE9RGiezidvUC3T7mdFHb4WRK7YpwV9wP5wCkwc3HXUjVgSj",
  "key9": "3XF6weh4wqNovUAZ3A36AMimZBzjx33EUm5HPyiLYfhRPx9RZjB9FjuLXSBpT2si73t7YXyKhvtyDX3oz4HYyaGZ",
  "key10": "4ovwZEBEktG2KqARzmVT5Psr9LvfeZY3RVLM8z9uvKUpdUQsCF45Paq3shAofYYR77gfzV9SRs26mHX9wkmFTbhp",
  "key11": "23MXHzMup6WUZW3rruKgSsexG4zxEwyoH6Ku3scVMwCFEqTxXBLzjp9qaD4jGFWQa1fTvTAqLo8VVGHeBLpGLS6A",
  "key12": "4GWnb1Q5W9xXsHDpp8epStBK128s2rcfNjEwUjfFFBpnRnAat8FeFRTDpWTbu71QxD6ZAJDcJVCKgEj2fUzPt6Ee",
  "key13": "3dJxvuhzCLByhZHkmXhJVisrHHSLfngskpwmVG1eft9cBX87zQEnbMpnBE3jqqFD6wi2NjX5uAF5qPyqpUzx8siY",
  "key14": "N8vPM84VBH9MWTu1FDggnEqCTAehjtXWdMd3VC5WubKWZ8oddMtAtgDuqKSVcjBV7JyuDKH5oiL4efMyJvmZoXJ",
  "key15": "2ZYxUELZ89Y5z8CcHdLpKoaSEtw5y7mzf6TT6fGPJeikGX5ZHhRhe97D2v1hx8GthebyMDRL6fKEV6KeYrWwf4Uu",
  "key16": "22e77XtWcZUzWRKhrFAGmfaVUPtKnX8BsRPcd5VqThC5BQxKnVTu1He8hTmZh7KxZCUcsFV3aKModfFpDkmaT785",
  "key17": "3AApbfTCwtUWfBWaYYGCo1WPvUc3C3p39th3gNoKJm6pFFyQSm9NYT9AqpFbxhs9QxjbaorxAjyHRPprssbZBAmG",
  "key18": "2fTqCGftefrYZQD8xJ6ebUmBoxyPnL3pSNKBHCqJwHw6yCeET2KrAJAhartmV86ToKYuEvj3ioH6W49BK9NDPsa4",
  "key19": "35SQHBi4kRjFdYA7FEHso4ySrTK6JFfWmdZFuWENiQGw9rcCuQRwAah7HoDdM3gmvnaMaecimC88Jq4eGFgRmpfr",
  "key20": "2JRHsNCXdsQg6dX1CgJfNfZzUeBMr7DVeDUAwsEKp2TbovY8XXmqZJ6HzzfgT6ge3Kd3dedM1eE5YG1DS3uFyvGm",
  "key21": "zzyx3jAB5DTpAuPZ4FLiZWrkKfFu7bmaphY6csjVS8ZUDDBjJSMqyUj8MTknUCBu6dDerPdKs3jBFkz9RZxYy8N",
  "key22": "wNXaGdKbT57MPePNXV1Z9ohGKaCDiTKweJTXRTUggtRX8QK89ZUJLZxAy7CyGtxU5MZb1DccBmYftBX6sLpoQh8",
  "key23": "mHNySGm6UnZBzvYtCpr31xHv4yGMai8isjcQL1nnVSubQdwRdEG5xtU8zXk69qNAHX1pyntvUZV8DR4QdgjrXfc",
  "key24": "5QDdrpd1TccbjNjAjfecJhL6XXDiapu88DXWYKNQR16C4wy29oLWfg47HGhV8rH44kNTwZtnzq7hPmiW4w6e5Ci",
  "key25": "3YydLcYU2ufVnay7dQDMSmWjjuvEoVE4vzg67Zk8MUtn1eGdp8bt7E4ab1U4NigyFAT248HpDgmRchc3c2KjKBHc",
  "key26": "h5hXhFVQRjqTPohn8iAwZtbgG8nnTEhvDLzkkEBAy1iZgrhUY3PAJoKMbEc8RrebsPhvQ8bcuCBBu5XBT2toRtH",
  "key27": "5iKKDwx4cM2AMiju5zvdHrJsEKkdqBgwoVfC4oYFi6FJNrjNomPdUABGkvdkSJiGcaMojryWAnchnpUqwBE4S8Nq",
  "key28": "YV11R5ry2iH1sGAypXLLW2bi2fNvA15odUT95Xi9Vw7BVGL3YNScSRkoErsD8f6bd3rpmqYx4KmLRdnMNqkwC4y",
  "key29": "63t2U1FofVEb27mBrnoKPsPoJw4midtRPW8ijGaSQbn3rvqU6ZQmX4f6ZZt9oGuCUMft4BeerAhLB2NeiDybet8n",
  "key30": "4aXvTdJwYtYFbunf13qarkWkwhjz9eUKEZtTCb6Q3LzpRSnqZPdVGWK1CwmAAnHtqkucocqhCz52zZd6QKcsFDUY",
  "key31": "2Mc1YJ84fRy55KbHwgETAB1cur57an8gcrcvxbJwRomX1sMrumYk4yDvSPKByLkFXQsPUYTBAadn9DwMswV7U3u9",
  "key32": "3bidEtHzMMQydaC5vxiTbfvGX616q5wi2K1PyhsRbJ33tbkv8eXV362i9DXyFeB3QvfAexzA9LwnmvYGTdkqvX4x",
  "key33": "fmeXdCvrPX4orBxhoFpkibPGHxEi1Ki35wM6cM5wuxtHjigYoaumPf2nU3FpfZraMTcxvrSheh2zB2GLsid2URy",
  "key34": "2qF1PpWhWkCq3GaAfMMzd65Q43LgZrBaSHGW3pbF64FUSq7NC8V2HEC4ZGh6ESqoGJs7q4JgNpGXtzV43hNaf8ga"
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
