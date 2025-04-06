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
    "2nX8PfgxZUQuH5WHwGegXJDSCV6JyQXv9giDfsZqHuF8n9DsbfuWu39TYKRUUg6EbH98jBfyAgAGULn2dojFF554"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "527eytuCzEnPLDMPW6Z1XPH7NhscfNN7TKU3jxKXDY3Jk6kmZ3WR6UjSXgC484WvyF4W6JHUo3hUXqBcdyYZDCGy",
  "key1": "3qQYh7hcLCJbQJDwz1RkVYz73a2A7VnRC9nDsCvWmBHVJmbuPdMtoFJ8EGZncn1HeRZicXyBpoeju7erJSaPG1tW",
  "key2": "2hvzzPr4afXHbK7AHN77fSCjx4jMWnRFjJUJJZRWFzcwgsXy1ULssrAzLJGavH2tvsEaf51i48vaZrDnaPpqE4Vw",
  "key3": "3iExiidTXBMqK4Mu2TRwRAehJCri4w6pJ4LmRn4w8q1x8adSL9uKc4kjjPq4L7fhQF6fybNKDtVe1eh5gYsXQH8K",
  "key4": "2oYejymPgBAkr3UE3CGqh7LTZTca5HVsubABk6KUJnr4uzSnic74kQiSF1y6SHX4LaNQLcGXk1tEYwF4jJqpb7z",
  "key5": "3X3Ktt3KtapPWgogoBPkN6h9tENmdUWkJbq7m4BfJiT7QuytDAm1AfqgBmBp9HXRGubzXKfBJthdLNbe6NG6SLvn",
  "key6": "29CNXrEihLkMJRUt69MfC2rhn5BK2Pf6LfjApW1HhcrwHis4byzBC8RWiLp975HHAxzKiQdvj78Dw5gnQHECcREe",
  "key7": "2rShe9uZMxYNCAbewbWxZBWpqPBFUWnBxq6HKXRQ8sEAp8N9H6CE3VdsYgovbtg3UfBb4bL1cNuiNsuVMynRvCGi",
  "key8": "R7AeT48c9pgGAfZQRivdxJMgjZvUfzfq9JbuMkyjiAgoh9nq1q9fwzpczg3RPeRerHacRAB2DgzFer9dKi3siPD",
  "key9": "673C3D1N58RNst1JYQXNjbN1aZDfSzdRoKpa8zH2o55UvUsjsaq4ZfZZRea46tzpD63o3XyYMMNAvKshGqMQTaPp",
  "key10": "4DrMek7buH8tawX8UVeLQnvrvfNZPUyK8fdCqmeBdhLuVzQKtxBMeNhaEqvSC99rSnebAN5UBSvr62Usrq78eitU",
  "key11": "5JHJZhka3D6S9LUmTv4vAwX3ABzeUiDS571VumcRhtH8VZQm5g2EzmGDtrkwu74y8Tx9fJtYYZbFNfnnsPtDTVmD",
  "key12": "5iKtrSW1GZXSGsprkiPSzMu2RtHarTmo59fP6bzRhwc4HtNR12MRPHFiJDk5rGgZKBjVFwT6bX8rrosC2Jq7zX5K",
  "key13": "2g7Qm5kbzjzseBuz3TEexX27marEDcvFF5L8Hqq5oQobWw5tvqCVNjvTKdf2ouJvansLGZdWy3YEUdgW8s8PwY9D",
  "key14": "3uNRrJVRQeFBKty296MX7BvZK19GtqmZBd225UjTe31oFDa6LJZ2E5bftzZD73WuCxXdRUE98SGSb42wBLyTW1t5",
  "key15": "J4U6bcMFBh6Yp2P32erJPqbrfZBtMQsBC5973wjXFNeSZJHT97Dbimw6S95d7aQ6iakwweBZ2bV7of71hfxEnZs",
  "key16": "2BFGKnqqEbio5JbgVQ9sqB9JacqfrBYCki1K6R5Pug3GTmP2Vnb2BTKCAMeaoRsg793EMHvwNa5vFpiMAQx1AGJi",
  "key17": "48HizpCVYWXd4wsMRU7XDXCUwCY7Jd5nbDjuHeYccSN766YqSs9QJ8Gvw5VhcZXSiuoNv85d1nnuxv3P568CLfJc",
  "key18": "2CEGo32dPDtwT9uawjDiHEyLmmuaTf96wnL7jYE5j179NbPWiM8NgpbNtaz78FpEsmATFfVeNJsHu8jmJL2HeCVW",
  "key19": "YiCvFWd8j6nAFUJGSmT5mQucht5Xa3hwgc5q19mrWvjRTjx5J9QouQpuCwrrnwYsRtCDLFB3YwmyLMih2sYjbUh",
  "key20": "2qVk23bWnZnPE9NN5ioNjKVLhRzTZPM9vKUpuNBCsMyGqEqn1QG6BsiBEuuqu75QPq1WicbRaKrwts1LsuRCiLeS",
  "key21": "32rSRdrkPxfMSTybgHD66ukcNYFM2rTe2s387keF9zVFNEpt6cWx5iMkBViNXL93Kf224jDycBSPJrKbPFNfmSjL",
  "key22": "4abwfLbB6tDBEa51gvf7wFh5cNiWp6Rspvade4GUDfB2eovZFoNvS4FMsMLs1tohabrq5YaS74r5eZoARzbJCrTt",
  "key23": "3zYRvyq7iRzpG6LwL7TKHQ64norCa4TqkPH66R3feVeCMtbpUjATHw52G8oqVKJE8j9A74xWx6w9YMnomnvziehG",
  "key24": "2FyeLLMHYCDGPF9npwmReQFmHqisY4ESdTsQcwpqxZziDWJN5Yph7DJLuaB32UL9LvcADmp5QZ8UYbuydtV2ggcv",
  "key25": "wdMvxnTRN4fo8bWM9tSfSHvutn7sdSM9SBoQSrik9wmr6TfPXXnTjMx75B4givdsReY7QjyeukezB8sbNYYVnx5",
  "key26": "2TCAGrwV4nNBRMfaQkevVL4FrQZYcDEbUhgQHeU3SHNWzJU3NLubPuFgVGe1FMetNr3wYFwzBhuXnzpE3G9RQLrh",
  "key27": "4R3t7nFMstiN3mEhfjhr3wcf77idhQQLBxqborbNfp9rEndZT5k5jzwoRRbACSwgyiyZgRECZUSL5F5arQbRZAgF",
  "key28": "2HCogW8dUtTTA21YMZwz1be3R3d5KRM4jWTuyTPpBFTabioujg7ndLuCu1sL9DVUV1RSi7WUBvJxNKnPowaSnC94",
  "key29": "4Z1EKuxhcbFcrmwv69BngdafK6MUZt9nJJVLc4rXLZomebo6e6onj5j1satXLrpZ3TKS5YZLiYzbUNcCCCAUViay",
  "key30": "29p7kQDpUWKvT8t4RDX6ZKA3bwTRuNXDFaZyE1c7wM8EZ3oTVEPkHxZ5R2oUV4583NwBtb6icz3XFsDrcuHvPQ4F",
  "key31": "wCsn63nAGzShMLF7KHAnKqxyFgz8nh1eyGuGebP8WP7iQj95pKVtW6ep5XnBXkmAG9Gzfq21nztJz16PCbM37Yi",
  "key32": "23P4UJ4c8FAjyxfyGt9VR82yUQHNtTEAaHkM8ve7cRAiynf8GqaycJZqpBPURd6H6ZemNfxWq4XEJDCsBjYR3sMz",
  "key33": "4k399is2wVkpvrNm79g4XQjmbKTzTeSjuPsj7PU14h7LvVpS7ga2fvQvDKH1haGSKC8xhm1z87EehbRcsrYeYUB7",
  "key34": "4ZyNykA12hNqqYfr4ZhisdMkDcCqW6XLdNUt1upTFGFh6fUbn2qScEY6nFB9rwpF8LLE1W7HVuFiJwMLvAdSjFYc",
  "key35": "7Sx9rMsMqa7JN6HQ5Z85UbXHaQ5SxteniiWsqHAWao3jei7cBEZGsYdKag1FNMcCfCoBirEfTV7SBv57DYZdt49",
  "key36": "3hao8RMz3dquaXmsGZGMg5qKQaVJeGH9NqgR4FLpr2GVhfLNPzJLW3F5bDZoKvKd5y8VdrpfTNfXYdrM5iHFMeLW",
  "key37": "3DUK8BNByE7SLNaeYnM1ZJdQmvg2iQGZTx2gJKLm3HWd3Na3TfmtA7S76EtEvWgCgLQNxqSFfKumVKKdCV4PVTRw",
  "key38": "31Soxd45f7sTtAXb6p5wbmxPBrjqg5sCDrTpbQn9TXNNaE3HyoSzJHKqDAn6uqjY3orqBc1w3n5XwgSqaxDqpvxU",
  "key39": "3UtFYJW8WWVuw3RS8XRk9ks5pWdbv1KwhmpAwJVKYsccT117TZymMDWUofKL8L3kdDZn3v99AB7Z2L7Nfki5HTWE",
  "key40": "4m9At6h5XhyL9bUa4ZtAGd2hTjkYboeDS43wwfKjbVpX7TjtjrFTNSAmn5pzn83JxVqJpo5rNsAD2Ju163rvJze",
  "key41": "4GL7G59E9fgQfB5uGPDc4YvuTSvS6v64jxzEHLrkP48dYPQTJuvFa3Y5d844aAxAejCjsr27ZwVSwfr4mzzfxtx8",
  "key42": "53mhEZ6GVZqiBmodLXbyGK4JhaYVLHWd53FCZ3G9breNsUKwx9sDvPwXZYKSoYT6XhwAfmcsFAXZFGyhhyGH84UM",
  "key43": "4vFud1Hf5gfvnjchquGbUpt3H2NZ4GSgzXE9X84Q9BSLWts3koM6UNmd52bSVf4PP9sVgadergPEZNcveHh4Wm51",
  "key44": "2dopGn9QQq6xyj3vqoH4FAYNXDqxkQ8j42mT4x8zj1bVM4pxC3pX3h3dqTikgHN9gRfCNc3VPPS8cJUqyWJbkcaD",
  "key45": "7YRmFPKLGcwH2iAhrfJr6Kic5eoL2aT3fcvoNymXpz3kBomhFUAdZKzvxm9oNZhYnqUN4J8pDx96mqWo7sQ9WVu"
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
