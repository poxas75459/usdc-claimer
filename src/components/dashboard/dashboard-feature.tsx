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
    "M65Mp5RNL57bLJck79apwxp7jxSATYHJfJC3U2jW3NN3u4namfiYK1dvH6uTiKbYCgSk1HbJjWGG7YjW7QqCQP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QhdARASoLKgcTbY55GkPVhRdKy4q2xy9cmW2Hc726a23LHcrEFrJsRTruWJDZPcBtJeUGx46Ysi47euu9ZSEERH",
  "key1": "4en8v25xgEs6tJcuouW7YSdC2nBw26KDa86E9Lhj2bhfM3BSh98DDuqWaCi9gfQc6s9qms9bqSu4MZcTmQiG4eAe",
  "key2": "2s1LY8qT16jsrtoQckGDzqn4U57zNXPQKHVw7CC7vZJcUrZGV7B6YwYct76QSLuLL79h389LyLnzqsveXCwTz5Zv",
  "key3": "2froB7Cr9NGEGRSbiXgeJgrGuxCmTragNjT2GkMY3qd79ne7cT9m3AG2ySvLPWXsTXgsP3qKwwJ9xxsGHUwTQ75v",
  "key4": "3CMn5otbrFmSJhF3BL76XhZQ6dDEbpaMXQ9Ec3eqsmczBvyyJuQpAnZ5U3xDjmaVbiUMr19tEvwT4FWMFFAVF8ac",
  "key5": "3eZGrmucE3FKpRvvCPzd9WBFHH3z2K2vnR3YKh7J8b39XJYneBZBtKrRar76hrJ9b43ZKMywvAQk8cfpeT17qJyv",
  "key6": "4GgHN1h2K5g5QwCbq7Mgk91CNiXE5jmp7MpqAe4BGxb9kZkuwbf9r1KZbwYLuBhDBGoy79XFaLzBpkVLVy1NGTtV",
  "key7": "sGjeSoqa7jJDwo3N9usk1da9TCwUtZKgYnE4SBERY8AmHpSdH6fiwfhWgEnWxTfPMfRjWaMcp5bYhUFho2Gq3j9",
  "key8": "3WKsbwyATXBgRJF5ezMa4jTtGtjkb7DHi8eaD6fmPbVpjft8DcB9yHhu2sLrtEbvp5jmsMBwsWm5WYJ3XQiaM32H",
  "key9": "dVKd6MxyuvbziUN8AjdSWm8BJcUcNo9PzadzVgopmimxCZpSrsUuHWiGFngRAKfg36hZZyjYvFcmS5LQPFzNDzp",
  "key10": "rZCKEWep1n7L9SX5j9SWC4GhYEM2Sd2CPm12KRceTZUrCh2BTMTzcZE1QHUJjnnA5BsNvH6zkurVFror5JjFWnH",
  "key11": "5hJTstevu9HzuLfa8Z9Ai31bgnJPGNwWcC2RGRQMEVweHG46WrpDA7SZ3pFfqVM2n1GSs2U99q52RAQjQhmj3p22",
  "key12": "543JBMwHYszmvU5Ecin2RFStrHhgRK54zaxfu2b9dkd1HyFXopRmR9mZPSV1V3qRaihbLo1UTwgLhuaeZ2N16v2M",
  "key13": "5JxaEYJBqM6JesKYdc1kpenkKZb9HWP4PdMbD2Q18vQShWvB5qKVfbaSeLxfrdmqfPPmRFoe92TaLjrQrM8pmRAe",
  "key14": "4VpUAb4WUVhgKRRsBtXNk9pAwj34ftwuudSTgcCB7NiKuq5EqbwDFRgsSPgStHozw63hCSsvkRG1q2MPmvcY4PuK",
  "key15": "23N4HCacm2tzGmpAJvzpZXL9p173a5g4Fxhou9SuKE5LmxPb8FUvuXr5vELxzdwoS5mKLsuhHLBvfSAT3s77BZcZ",
  "key16": "4XjuXqkZ3Tozn3BLjYsWMWquULr9ibcHyLCLBvBKzcF9ctqUF2GC2fFBcwZtHHERpxdjCHoouBtBLgcmAMYKQENd",
  "key17": "3wvGcwCDDgkPrp138T21d8xBophZ2BgYacchsWYXPw556AWCmjVfSGXHn4G3nJHEmRFHGzEW8bHZpPgx7Qu6Qcdy",
  "key18": "5JcDnnbinmfXrZn6rUcHF5griSeCwnRxtvn6FVjdGGR9e3ULMEb22ebXXw2bZkpLJSTY8dq2AvX7qxzaFgsXTtj7",
  "key19": "468Ru6Nqkhsyg8YvgnRGf6g1RMMGGaMWDgnrKGNpHUNXC3HoYN1W48546ANxQVz1rQCcuwpG9CiwAHtRp3vX432y",
  "key20": "3oiCQjWSJqeVp4m8zGexPDDMqPxmLZpUJejCLtf1ZwuHH7zENaj2uJk648Vva1eKyLfoUrkr2WB4bzKfs6vQxexo",
  "key21": "5vv7LCPGhgA51nHR7K1mUw5j2XzCfR6AY5yzNiv1z3y5Nt79MFR9M44yDFW9Qj87FMZx8JjB8qu7HQXLzC3GvNai",
  "key22": "XRgqxfzUJrLCB2j98ieFbhxMLtUQiKdypNMw6ZwuPYJNKVjPHRN1GDYY6SiUNquJdketpT6f7Qgwt8kdLS82cVT",
  "key23": "5fhZp85iGyFSXneeiMKZ2PumBivmYi2rVgMFLcLrn9aoh1Q9VVAMPEcKVT1juiEcb8P4KV2aexZmxhNASZmN1qAY",
  "key24": "tPRjnoccwNNforBkRTcAjMVHwQzyPhfsjTT3QYPn97Rz1GYiz8BmgPS9Jqm7r4RMDhu3Phk2NovxcXW5wL1a4EG",
  "key25": "3Yz91Kra8c2jpWER5SKWhygGuQK726yvYjVihbd4XjBeH4V4sxy2oNM7wDUd6BzfVu8VrFGGtHk6rUyboqPXbk87",
  "key26": "54ndYWFkBQQkkRt88vXKe7VqM6qjVxauhWcbjXPbMRLTcVnixWwP6X2NtX5M3iJZYJo44LEScYbovozouNDCKkpc",
  "key27": "3UaeKHhqsJ75i7hk7HnvbRxq9AsBSo1bdJhWoYZeDVExCne2hyKQsMb5MYzDpE3VCXP7AQGBbBPuJHbZS33bJPWS",
  "key28": "7M61kYPnXXxVSWTgAcXyCfULLdqvzirXJevPG8SE8CxvhNcJatM6NfDn33ozZYdWKfZUVEzyooFTqFi1Tpifh2p",
  "key29": "zgvLRdxSTSP2JHdm6orh1bNTfBB1F1zqNbje3scsXzenT9xGyn8b2AoJLhPVjqYR9fVXY2VWEfNyBjeZpRKvcuH",
  "key30": "4ettSsfMKhGjCF4s6Gc31Ua6KvUNo6uvkgfhDj2DGE2WZCVses7Qw2PrnW4vFZVegX9PtSBu9LZSiMX1UTC7ovcL",
  "key31": "Dq1584AGUhxhpK4uWMF6wtj6vHFk4yMu3Yuv7cjyrXoH6NZR8RJzqh5ZWzzZwZyVxyrvaSN8aDFkdL8joxN9D1e",
  "key32": "4rrcaRs61tgeky8GHRQZEg78964oZsYRRvEV2bnbUNRwFLcc93EuZcCPn77hfaegLvFDBZG5cJbm7sUyWSpYkQyV",
  "key33": "2dKwDkb7qQzCHip1h9NPiPeA2maEEF5hk95oxw2byxnmYzYiWdJEJuP4sWfJ6f656ECXA9ozSyaNJQCpnPTMTgyu",
  "key34": "QXAEXzPNLVR25P3a1EPXdbfeQaPYDwBVAUHqwQ6uFAmpsmFutvwGwNr2eU57jnbDtRtU2TuMY9fwsMcQBoW3LkG",
  "key35": "2s5dkGmyzBGzhy9mKB7pT1YWkLZ5n7gHLQS98rHttY8Sg6noN85UJ1DUTVc2kj9zvcswKkkG2QY9FUQQhyamED4B",
  "key36": "354VHtG79P1ghrSgnXvkwAMwggaiPYFDpeG8DxYhAmyp9PBjpndp4dLbHmrULjNLgQmCewk69WLiANLcf5g5aA6",
  "key37": "4zronaKPrptDeoP1fhSAG7Fcs9XcytF6xPBf72GwcrCBxPQnzwWxaYYmZoih9H24EJvUjVnBrX9GmAKJPAkznjj7",
  "key38": "4JEn2KM27ooq6X3hVDxGUjfWGQj5ENbJrJca668UW7oacWpf6cczsV8V1Ek59SBpunMrmqEtNPdY9h56CX2rikp4",
  "key39": "cDNUityRw5GyehjB2ZTxMSjViFzBgc1Gh4QxKmbAMxMCHDDWtde3Mq9h44graJjXCa2ZhHtnKiDiUrEJygPKcgW",
  "key40": "4RiAz7ZgWrr6LCdZXMd4xGhi1K6taGFPQZRuanxaiGNs88Gy2r38fafTF97EwJXp5qoGRD6FZzaSxowcHm5bTvpG",
  "key41": "kHTLVRGqnFyqmpKEuHPs4BtHM2t46jCgV7S3ZkywVmPsSS9i92VZSFwRJnXUKDExUmrkPMZX5faQnvsgn9nYcGn",
  "key42": "3nJdo9hUdSSh4LxaHVrL1PbCKZLgddHd3yYcaykWLbkWesR9ps3jzdqcnJYMp9aBoMv2cBU37v3Rbg8GFjUbzFLV",
  "key43": "2eV2pFq3W81oGKCoHyy659XCGLBRtdTyys5Bre8nSxKdbCHQY3ZRHvHCcbmsxvkqwvZ7DTTu8EZ99sQo1RT6v7iL",
  "key44": "4ShoK8vCm9b8FmpgHY4oAMfYETjGzMKJhb2qaxzVawooDqWgnjxWzbRnf74GR19wr8asJntkk9ZVKmhnsDiJeP69"
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
