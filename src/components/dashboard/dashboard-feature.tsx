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
    "4wXxsQ7GTjXiLuW58SPWcmZApqKdYQXQwm8o15gYDGYDGpqaBjYcaUW9ynbReeA2je9htBUvbymnhcn6UNyg4azJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QMVjXidRYxh6JgKY2cW3PUeWccNKgiAfSYy18fNmJSye7YB9WoK9nie7S3F8QzLB3TKRjCoXFW55bcyVeM9wbLL",
  "key1": "viLcnxRbhzdduHgVw6zLjSLsAMvmx9GTez15RsfRxU4WC6D4cuWE9kWpksV6WNkJQKpgFv2pRWddRXZ2gTZur3L",
  "key2": "5oVgcSUraDDgYKxVufhPjFPmU4TGAtSLxsUJp9rLz4aCBCBqEZ16xxTJG1PYhGTHKdiv9z7nYyWfa5yZ7nWgpzFZ",
  "key3": "5ECxQV9rtnKcUZpKZHeKdF7mpj8dRuzLF6iiSNGCiDdSDizR74jkzKEVDKTp6m2R6pH9iiVX9rnac2nc7Neh8aXY",
  "key4": "56bASJEC9Nx3Xkj86JxdmfmiMukCVEHNX3t3HB7JAakGN9EoVhQgZ7gFhJkjmxBuPdCVQuKKcjZgrgHxLbHR3sJB",
  "key5": "4CzTsYKsYBwcaeM7N6xWrWS3p3UxRLAEFpjaW4LtF162mkBBAmL9xCJLGo8aByZKPgtnqwWczMrfEuyvAqRx2rPh",
  "key6": "PELb9QYfRnevv5U858C68yS9mt4CWJxQyMh2h1qU2okRNRZJriYwfJKqmihXKTQ9FeSvBLMAq5jEVatdRLBRmVV",
  "key7": "5uScA1VW8KmzWEMJMRunTmZMz3ycpUJaKeRETTFpCh65bisA4tGQWctyjd2DoDrWgQSWrPszpwLn8cjsiVpdQD24",
  "key8": "4rKjN5hj7cxuT4CwPpQ7YaEWtbPTyzXQPkPJtH8Gjbx4VE5z4mkDneFZX6C84ZvaRVpXmZTe4LfYT99xy3rSw56y",
  "key9": "5Gtmz4p7BiAj4u5eQWsREbz5MfehLJcKhk1Kq17wcQDBrHSBeoA6bFoexnnikLsjcdRtpDjWNaLPT8K8eEhvXGuU",
  "key10": "2jkwm3W435VEeLdYKLsqr5K7PgUrVZXqyNswdatefh2vfw61Ds8hLR2qrQ9XyXsvnYpTLsN1fcdPFYXnr7tg9r6H",
  "key11": "2FDYSAxupesGPwJJ6jt55ntLo4UWMx8AYcUCxWFmYyHGgSEQsEionMYFkmyigCXXgFsrhm5DWbQxizss8kvm46bj",
  "key12": "2So5pQE9ssqdfJ4vCmoKETFDdiHbnGQ6gXHM7GkpnsHQY3Fg1pbuPUxvU5apK8fgVPkv3bRd21N8MF6TnJzw4RL7",
  "key13": "3gSkv5nQQqMWVncbv6uMRWjc6JZ8BWeGurNjp9ViFGFhVLc2DQbfJB1npzsvkGsqFeN6ASJ39vAxX4uHcVVqJ21z",
  "key14": "pD7LuAjh2RyCxVEUhYud3Hc9TbcWw6kGpFkVvSdyRWQ9QhKq5AUEEQhAYRN3aE6XP5rWZudAbVAmp5oabkFt9Md",
  "key15": "u7DKtpdrZAndMCycvspuGfyjUWShCHsC8aGiYqwBse4FokVz9f2aGcEy3giL5KtJSbWRe2vJ6dhU8aCeEZk7dQw",
  "key16": "3MtM4khzh75Ja5zNfeBCceL9zWpYxKZ93cT6rC3b7dZXiEeAwEqNrVzro84bKvpzRyPaqtFcBxeQ7YNmZUtACMdx",
  "key17": "5mRU5QfAgravAxRdzSLAnraqsbJkWJyJjc9QrLnGejpT6wtdMnUPSnc7hCa7G2Zk7EoDBca4ZFaaUah27LKVVMAw",
  "key18": "2KZ8jqFeHAFUkQAyz2YHosi1ABdkjUXSD1HczDiyXFtX6Tmxc4zvXzzdQLuFvzYZdaKBV1hsiSKBYBrCQ8mT8i8o",
  "key19": "571ct6BfYhVtNcyhmhsjyEgAacRUmtPf8JTFDwMt31z3fJ4E3QvWa4Hizi4wqdYh26hL9hsbTjcyh9cAgivdxkP4",
  "key20": "KMgNAU3suM1qbkqE7PGxjy5c3ZrhszDvGU7cHoXpGcDF3PectyqgA93zGnsKVYRJg1tR6D5iN4wWgpwbbUVU9JR",
  "key21": "PBfGhnhjE8FRZNnvYa79GhXaLHrHxqa4VFxSp1B7gVeDAHX3gCAMLxsvfJmzHNBr3zu7EtAEbGr9C7DC5qxFaAG",
  "key22": "3jBvUc89Hyv4PzCk5CNTzpwkXcpKFY2kn1G347QujJuMn4EboYHA3YA4TvXxxmTciUBZzxtuRMkKDiu26Rb5F468",
  "key23": "62jqGyDygXjbVhXPnEzwRiEVaF5K71ckVWefFmHKXbE35ESwaBjBmAzw9V5CUL89Dtp86d4CuGtjenTGLjYzJFZV",
  "key24": "2RW6X893BGYXH4A9LUmJPtgAMCexWHw7u17E8awqRV5nTscVpyo4whW3i8nv46NoJkszhEbFYwzaFUCt3shXQHoy",
  "key25": "kJUnyiE12RqzXE1t4T5hgXQJ7VfhAF8AagdFFaKAAJnni5EnxLpeBVDPWo1tNJGctgGTSK1SzHULyd4NDeWgi4n",
  "key26": "2QAZjy2eDhKMQzgvgrGnyhYzXaQF2VHhLz6DTV9d2hNWtZLx9mXw9N4Gw6ZmFmCgLtmcPkJfTnfKcq4tnn7ccmmo",
  "key27": "fEyifPxJJhoYpwyeTXf2HUGrwszy3xMnRDZg6kJSok1W1XNmVG6P3JMSVsjJC9X34oPZ4ApWztsLehrL9TuzmRr",
  "key28": "3RkCxWhzCLzMPr4FcRfE4pbVeSx7ut9xiZSdzZJestUDbPjg8J59Znxw6Euz3DWGX8eZiZHb3BzAQVcs7y9F3aba",
  "key29": "4vafNKY21CeufjPzLC2DCMaHKACDLLJ6FR3vzhKV36wND3Nxjzoym2HkDjJZiGsx4KiV1YxpP5dXKQchMd8MPoXC",
  "key30": "5pfgEM5xKZ8En88Rm6ad8Q7m27ayVEa9jZ8kU3NLsN4oxXbGCjWKTataLAaf2zdjyQTWUwzVjvn2J3dupcRSWsNF",
  "key31": "4TRQbMPMxBmworopBKkxspALt4RqBTbTHDN7sNeZq7ucgYbhBUHBzrq1VBLunC5gK2v67ER9FuUAuUMPyr42t4W4",
  "key32": "5SQDy4Vmrzi2WfbdfRvHTmhsEJsMsVVKKnx9jFMneszB23bHxJ71XgGDbu3Fn1RnyT9V69ZxqnecD5Q1ipuq85j",
  "key33": "66xqdRDYfJSD2aCN4vbtp8PoddoRBiWwBcFHu9BTZFoF5gpxFUPYcCaLgooQZqFPSU4brAx3SQ3G5age9LnQobqm",
  "key34": "26ehMrMcMYxhSwtsJMzS1EVhrdYHtdgRUAKMzR142QEL6wdPQYp1GxuuACrs6VEC9cJgKQzBVQ9a7UEnBdbDztGw",
  "key35": "2f1LWF7Yi2hXe7sn6afQc9289mRykkRwLpWV9LYEDoBZdsuvvTudpmdKmHcaos4d1hjm6rZ7duhqrns67hXmCsFZ",
  "key36": "3jWeBXxW5iFM9eiGGhQAhA3XdzyFTdzarbSjXRXdDzwh18WugEmaf53XHjGjQGkDgTwfLLxHGh8FUu5RizYXmpLu",
  "key37": "2itBcFRexdbaodQaYFrDBzuxxtwGZe2MvH54wN7Qe1wnfSBQ8nTr6FyC4uah7S3bCvHuGuC7NkFnBzw1SYNW5oNb",
  "key38": "2ipzXa48JWQUpxaJJqeEeRQ73Lw9yA7oYUFUGimJ74WXEgDVaDPdEuvG26tXGiREkUAcSpvY1CEdNpNLwMSVxMLm"
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
