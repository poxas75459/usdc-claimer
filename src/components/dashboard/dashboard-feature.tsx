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
    "23591BbjEo5ddL9rMA2fNWsxFvRDijfUGcNgrgj1Q5yxqTzuVg5NMPg4LvJyLmirXNCQnJDp2jSqcYogbabcQg5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xQLMw4j5X7N4ztoaK3GjmLj1jnw6eWoYnt4L7iTDwu58awazRWZUar6ZVy1dAqHe2FKXGkBauGNYB4nkBiXF9Z7",
  "key1": "3q6vdzch974XpLjGK8cz7inaWVQrVuuidcMAJJH1MjJga7goSyLT1V8aPA9243bESK1PgRr97ytAZpYem78hpm8T",
  "key2": "2MSkD6DuGea1YfvmgR6nHb9Zy3y99fqGG19Ssp4CtGHZQzpfPdwxwiaTDTYtBkM1H5R36k5rLno39xabywsKtomQ",
  "key3": "31ShyMhyfYZZBYbrbmNG3ZGS2mRRrCmdiquadv6Khg2FeWtxo1L5CkbknVhaszYZFLDkB2otttoDVdSBcBbkFx52",
  "key4": "jy8vW1Qpk5fQY2XjRBHmQS82MtpWXnezG8pqqCtnnUFzN4B2FQkPurYUx6xXvfuD124LRg84rPTRHSjAFRSNRo8",
  "key5": "63h6k7UgwxequqJJZkqNKhEJrPPZErjmD3skYiaWoBtqW5LAmX35t73ZH3Hg8QXyWnSJEqiEbHmJ17EX5G5jkaAv",
  "key6": "zmJM2B8JWDfASGvjy2zQyDhbYJuq8xktWrVVD2CfVMpi8XzmueU4bu18R13XkeUGipm7WESBnQGADerJ4Z9PHY4",
  "key7": "5JU9Q2R4b3MdY9Qt4DPjMvvb1KYHFcr6GB6yMF3J6K6cCvzv4tVB1jyboBLwF6JuMaZinvnoPCYhKccYnSNa429b",
  "key8": "4RUm4xtVgoVPAfkSKso61UxSYjrCf53jLxzZd2QKtZUxoYKK5BvdND7MpXC9qNvodPR4LwSZjKKq88WGDAm3E1f9",
  "key9": "586a8HLkb2swj2BL3hLwd7xLaFG6KNcKeFCy1UpGfoSUVoPm11JfwcbYuJr9BrLStquJBjRXhvrjydivzs9FZcfp",
  "key10": "4cLsnpt3VmJ7ekvRm5kHiub5WMdtJgfYAQd7SdgoNQ6CEoZesmJnoWWePHTbCdZKi4kEXReUbZLu57ZAePrEo33R",
  "key11": "2fQD7RPUdw5xVcoyvadR5ppL7tgFiLLRh4grmdxWRvkkeYofCtKzLZNuTi1ztNSwP1u7qxQsgmz91FYvh2L8t3Pe",
  "key12": "67doZwn3VvTBU8ptJffXcJ65xQNQEv9jcpJnSvTvF5DoXHupXVztM8dSNXZnbf6BjwFJ8TfH9PBJoLbWfyjZRi6V",
  "key13": "4fEncike3iDEfCHkWAPKbrLUYvMNcRjxpjez1328sgEGqNMHAwScFaC4K4sUJn4Y3U7MpkDCbsEZTqLHAbD4w8gT",
  "key14": "3TBzyk7DppPRkqRK6WhsxQigJkYYxJWciZjAu88N5JRaVsMD9Y3qNiGdkYpSpFiarPuJhRrGj58XNjPi2HYfiq4E",
  "key15": "4Az23qBYku1rJXxsrBYcG9yjstMymkTG4RFbMzVAcr4sE37Lp3PjWqG7XZb977jvcHoH3HSRtJNmX2yTHvLaUrmu",
  "key16": "xBvXZ5rkACFyWg6LWh6eMTuWgQUQCTj3rJYiG75ABtKxSpnnvBJ55aY8waFcEdBxVMsiLPdAvPZP6gBYXpCxTcd",
  "key17": "2NaQXg9CgpoxA2zRLPpY3rGAAWNyJA8FmKg7ernd1RgKHfPUC98rMFcZK9EQopX9DpNFxWRgFpAGwRKhdb9CsAAh",
  "key18": "21qo48FQdn3wiCrs7CVkjBrhQZZ3bhCqqMUexpj4FXvih6MTCPiPoYftqEJdiQZrcR4ahmuh4mGWpWLbCH1QM2UW",
  "key19": "3z88hVJZr22XdvzsMRrAsQgZagmbXp5Z3ShPEuZThw28dqRuGHggRsySzqetSbUa9BxkEGgVpK3h4CCWJVsou8v8",
  "key20": "5V1C13S5CVTVL1983o9sWfHyMfDawwzGvZPC7inBKcaBRNvWncJ5K5wcJZgp8SM7B9ZQjpoNxSTjGmgG5WprH5hg",
  "key21": "3daEtCdhxsaPe48ybTgn1n7VWvPM8CLdbf2AuMvQbwxXT33hravApa7iTVMFJR1vAwnf795q1LWRK1ijkdVw4z8P",
  "key22": "CufsXHUszeuN7DFpHp5pBQ3tx7q11Wr6YETRPcsFkdY3kFnJ4L99mCxfAiToFw9bwAq9FeGqX3JxXPAEzs9nBKe",
  "key23": "3ppBtFKjJhGGmobp6uAjgAkXjBxtVivYY7X2vawiXkCf24Zg8Gqrj17SCJQDPjKErCsBtQm76EtdeWG724APF2Vq",
  "key24": "2aoXZi6bZ8GrGSaAfhx1pxRhuNKxFyPFtFGbqGRMPrG8k9vsrbXqKpPGhwneVFkgKYLYVgHXhvDzEpB36Uaonstg",
  "key25": "2nF122YnKDS8YBoRG78ByAiKsnyJRV5PCRtsAxEhpTo8W1F2NvAdVAtbMJiHPezMRcH1GmSRDRr4dUEQcXKeZVnT",
  "key26": "5TSQEEeGJ2wFJhnbTeWj2JbCEg67PvvTQGRFDahzxknBswtrg11udLFcpfafAM4bvEwyketKUHFewY5pWS2uu8mX",
  "key27": "3LNfok2sys3dmeXf3qy2Br49M4GoN1vKr4xLcLbRDEDvxdePYuzwJFarSxTtYFGrAeCDEQNRJPJYPrdsnGBeSoKv"
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
