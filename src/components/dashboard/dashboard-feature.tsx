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
    "5y1eW4pZDRC85dCNZBBQW4AicHUZaCdmKiwg38uhjZXM5t92bB2dZ4rPJY5pPR6BJG9xnPiRPy32m4ngT8v4RWC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XyEsbKJHnzLKGek3afLMoags1fK2ihDnnegv58bRftqWBNA4tnHwfdQzqfCM7kJqzSdJ71GFRPJNMhp92SCAUfc",
  "key1": "2BJkcn8ZQt17ezdUmHnnSBaYh2QYX6BTZm4L8QeBmchirTcveLV98kgVJQcoTQqB7x85d8UCmpouS7ZtRYAk3LpP",
  "key2": "3DYQPEYtqNX98NfXL3HY6SvwnHrzvm6JSqGpUhqEfjhv59nxgkHqMUNN8bjboXcb5PECe22UaQFgi7jQEx7rDxPn",
  "key3": "4SJNyMsWep1p43ToxmDSbtzuhrxWaCLyREKZvFXMkHffYghUykkv6NapJHwybbcURtzfhu3reXzZTyqiEShmFNm4",
  "key4": "FWoCnsagW9Jz6GEfaKz8FiLXApbeJHqn4nACCjf5pQMbBCSBV8CdKekazdo2MiNtQXg7QoAQZQ4mWVVhGYEiDas",
  "key5": "sKk6e4FpyyCLrbke6SY12P3U9ubgcRJMJQ5RzCW76ZeP9kKZoGHwkUvMv9fuVnKBZQUeme79bPAiQwSLtKTBHdL",
  "key6": "32wBvFk2FwweyGXREtcBdjoGbn5k1wRqu8FtJfYvfUhYmLLFdESNCRfCvLcxQQ5fL7bBErT59dch579ASsF1qYnE",
  "key7": "2z857hupAK8TK5qT2f4xpnqznu1KgBjgVXozC8nWHPDkmHovXVk6Lpu96H8YrkoUcRhugskxoJ8eb8Jdp6weAFR6",
  "key8": "4RmbnENQeU8Z6ekNSj3GeEgTtB91ixraie7tWeCrGcNuYxAsYY7wB3wiaoBtUXr1YLULLFHPnh7kkHfUDe5Jp5US",
  "key9": "52JQ8ihPYVmwbHGQzBMraGZLGNQNMzScFv1hWCmaQ9nVyUZdztJjXftQprCt6PWknRqwViJRa54kJVVAA4vrQ6GG",
  "key10": "4K2FW23ELdwfV9dqr7LgAMyvXTWQtfiL7d51peqGWgynamJ7QVuhwX8y6xEb73JWUe6nVBPFA7km1fvMcPgiZY51",
  "key11": "zfZUuLNVVYgMVUjmPWCsvYQhPBKVzwgbBAx56tWjLuxgmM7WL2CsDfWheMADX3LiSxXb9ta58ZWdryhKGYQ1MiF",
  "key12": "2ZGHbWqh434DPWApeMxXwpgkZWr6nDjPcUfadJTvk9K6hye6CijwWQJp456to5oj21KVzt8FgNmhtVH2RtzT74xq",
  "key13": "2TJo9MA96sgS8QaowqqXY87yzurQgMcJ77fNp3w9MdpeTS1HQviW4cGBCMbnZaJpurnQQAhgywjYsLqJXTBBVPXK",
  "key14": "5R6aQ9XQueE4NeohBTAFdr2diLHcGFcSFyQu8oWPQdc2sKvgEmT5haVAaKzCVZvKcDwDLfdiuGGgYCaM9ARBPBWt",
  "key15": "4RCr8Z4dy8JtquwPrZ5VCzPxKsZC3M9EU3RhKh69Goafr6QUNP9AcRkiDFafmgZephvWd6xfj3ojY68t9hWLBUYz",
  "key16": "2QMgRh5qBSM4RbBJmig2QPwBLiHY6xyf6ARGSGNTwWJy1Yi13SpoGkcZccaCbrkfVYNB3z3xYHnpKUdS3xFJzn7g",
  "key17": "4UKUzXRfmGztLGVUZRPi8M18WjYqphak5zCZFaACb6yqF3FRCo31hApUYhC4Qgybr5tSxDDWmmFW4e9pp2S2mRG8",
  "key18": "3HVXyfP7LE9YhSQvhkaA2mJv9D5AH1FTNErWAE2A1CNmsV2hFGTWjsE1iVbCGU7HQPCK4N4kYP9WCTB79CDh9oW8",
  "key19": "4s2r125AtBSX7ADWYzwENsZzUUagusRquHSUoEAorcGnfEWrhVe5pf7cNVJgc5usq8KySQXPSyQx6jyN2YVU3Xip",
  "key20": "2k1zaEUk4tePNrv14wyzYktXSfTsJ5DfH3mskdMsUJA1yBDGxhFEVBTXj3rKGsKHU83AokifCNiG4HAzLAWxntBT",
  "key21": "vGmGrKPYYEhz7xziC91mNF6bq3afupHsQVFPFxHfDgZw45Dz4j6QvLvs1U5Ztav521qDAfVdvjfVU4U48KZ6HXs",
  "key22": "3LChFdLpn26oWkTaHQxqMDVcgZsVHSbCvjG2PuE3f8HMBqUtRJdgZc5HJJTdfcuWG2HpQ9WbRwxFXuJCWXMpVwwE",
  "key23": "4JG6fomSYYFM29mRBmT4qDWbn5heYpEbLVUfHNsg8ovjhnC15XgY2X3eyAByzs5zV9BZ24ZY5e8H5TqQ4qrMvTcG",
  "key24": "1XqqGSieMxtxMQtSYCP1S8rPfzeuygWsi6bCoUTrFyoFu2MXLhiVRJhD8XhNnQf3ExDtcFeDeooXszENJFDaNnE",
  "key25": "2kt36rJwEEinYzacvzo998bRWLtnfeA6rB3ebFSazTTwVawYD3LVv2tAXwWAnFCiJrzn3AqEJUB9zxVuU8ddpnM9",
  "key26": "52uNykeLKAbnB9DJBwgVTaiEEoEnaukYChBRB4GnhQTpMPiaT9FiabVfNLZkFLmu25q5CMF9m5mP7BFpCpd8tGkX",
  "key27": "2bjn8CBQNKCUhLgJaC4Lm7JHwXToe9gXfL93PUZqonbUdD4CQBrd18LDBQCjRfFFwpEbpdH4QuheRbjRJz9BVnXS",
  "key28": "2yBSAWW8ix7ishrYS2hLeVkWkmLf8T5DoFD4WrfN5ZuC8oL54mNNTo2NjRByRcXUTQ1NqxXgGanN1wPbhUjB1EG2",
  "key29": "4j8MkXCbkoVGSnbhBqhZDYMeD8khBYk3HDY1zopiBvRzW8pFS8Virruy3unUXWHtC7orVdRGstQWBGeWs6riWAyY",
  "key30": "3XYisF3ej9UjaNV36vc4jCQee7UC9vk3fZKtpWTLkypU2vXhoSTanDeSQ5abP8EwJKNoUChHEVyAByWuLoW4ZDZf",
  "key31": "MgvY9EL6NFpbnsNa8xjRZxMfjBa4C39ohZeB419gNyvGUdGqgGajJMnYkM7pZ7prvBhZaVc1r3yGkqiJTwGx7JT",
  "key32": "4K6ECJKXTWQ3iggR8k8jBwPrST7ZTTvbb5xiuwbow93qTCEmRUa6toPbpJwLG5LUQW8V6dA5DcvtjTZ9Gu5oVPeN",
  "key33": "57TnarFcJZSQQixPxWxaJWLDCsdcZCLs41dxgCDCoWY65dxBFokVTXA18j2ViwVrc3CuQcLpknFw1CT96vNccyKT",
  "key34": "2sTvY9JFRhkJvipXuNxbY6JS7QKKZPK8qHLEobsYJgi36iB5W2z8jUZQbfbPD68KXRD2dnrKdEkrYtpSSLaYdJpP",
  "key35": "4D2FrBp3peeereVNj85sWzSHF2AiE9Kn6sVHqpyhFobjDtTALiQjb1t5ZsDWF82AyjJajuzqRc4rpm9fC7EpTdW3",
  "key36": "3Z2ALtk1DPnpAWzxnuZKTqYYa7ytbbh7wT6tXQgvp1nJXdrEb2mrLw7vCtKHFG7NyWYuasvFbiqnHA9J1gJri7WF"
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
