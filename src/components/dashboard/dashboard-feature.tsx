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
    "5WKP9eC5ySUUfQuPGzgxeswJbxn7Ghv6eD2VqoT4RteAYp5Yx2ADf9qFa38PzZgHBj6TfJeU8CHzWSajUJtLbsbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DStYnSE4W9a4SkwfAMcu6KsAEdQEhVfFi6czbmz8WpcdpQovKKrxGjGHoFeMw4qWjH44QgowjvjEz26xZgAnc1S",
  "key1": "64xuwStbRMZQnyy6wTs5sHZKe3usg7gaGtcaxBwkiKVaujvS8K9r98xjgQegp8Cg7DKFYo9h1yv3q19m4ZK5eLqF",
  "key2": "2fr23pCtV17cbfhVY9HB2RrDajsW23Kafa7gxmdJ1CHAWrz7U76Ko6NFT666n8uoWHq9E1bdRC69n5LCxhdZ8RXU",
  "key3": "4efTWuvG9H2ueKFbfrsJmco8bjcVmrM1J1KPk6L9tay35Q8yd5zf226gorjsN8gdJHk6mUHuGKuzrMTpWxKRQxfr",
  "key4": "4BvnEHscZrLuf25J5TdGj5TbJcvH4whJmNWY5uLVXn6Eregk6d9jE7Qe9KPBQtfj4jah2TbmqmEuGZXawm2dDD5j",
  "key5": "8KT6UWNmCn9hPR1FwHgAHyYsroDmVbrfKbR3Ss1ahhzAo3Vp5JqZ1vrCENwKSh95aMGNKHG31yr8rtX2jv8jaEn",
  "key6": "5JTCaW7GPwx7XS3kv6V8Rc2YZJKBjMbBtLYfoK4wuWLSd31wZrRXjGZCxfCQNzMwjnjdJWkSLP1HTjZFwD5Wqga5",
  "key7": "64XxCynoezR7NM7FkU1deWBJ74EgnspMgJccQKsEG5LT8Cchmd94T985Zg4Byrq2HHswF1mB5onMkL19D9DZRDnB",
  "key8": "4gSD6qaJzKnx5vk4wdwMrRew4AN7AtDmockxEcui2kEGgf8Cv97ffNrCtuBaHdnzYMTkYjo44cMxcpWQodn7Vbhp",
  "key9": "32W3RNs5zV1yBecHAEpK8LcJiikg4EFtxkM47uxVWgXDHgJmDDRqJu6uLKwdUyjbu9iM7Cv2XinNuooMNLn73vUe",
  "key10": "TyqnDt7qLsLdpF4tSStYceB65yHQfa4diStzSDmqQpFFmZs6N23DTHaknaJb4zL4EweodWpnEPr5VuuSo4Zhhur",
  "key11": "wLzfQUHdeZWbmQRanTE2tc1xo8VEsbherq2qhoJh12VkBfNwoKkitArgEhxyeqpmrgiRqKygc5VbXEF7MCz5CLP",
  "key12": "2ErgFdnA1og4GXvWc6PrJHf1DL2MK9oFjZMM9rQmUgriTKPfEsatLYGBcXzt2H8fRiarD3drmzbr9G6u4gvoHR5c",
  "key13": "4eySbBEnaCmFMstZzg7xs4Hp9UegZiHWzqrUAXT32pwrtexsZ3awDApBnxnivYZzidJWgbpDvEgJyUeGGtziUaPZ",
  "key14": "5M6HVPjRNSBYbAPW7HzJxowY3a3q1BeWhwj79KPPDpTCgzL6M2yWD8djqoQqJWJHYK2Ah77S8uRmnpuoYap1inRG",
  "key15": "4fyX5SLVU5JwP9ucxKjPPggMowbGNBH2NVhxmj2DS62W9Grk4k2fTQbxXPRmcwvG4UvwM5t9Qjx3CuV3YyMbJ4ET",
  "key16": "2vUcicJomrM1vpcaEaRsyymspGJDZB9DhJemvdF49eUVVbCnQhZx257W1CPmPy3iVaZabvHJvqS6pWW2YztaanGT",
  "key17": "63odD72Yc9JZxMHigr8FRpbZyVw4iM8k52dM6jp8LyHZmVo7xLSzR2tAdS6jVQFsmeHiboqpRkSodCkbenQdDTpr",
  "key18": "2A7Lnzao5sCYVtzor7EPpNNYofrN8FQ4YxBGBzDeaLpNftieri2STafRz2zDJTrXhugZbbscmc18256Wiab2QZn7",
  "key19": "5DY6Rc4H4dZLAMTXcAp98CR421mR1vPtb8i4ExQw1TsvrN23kfdTpgJrMpRkjPsJAoARZbrQQwbspwBpZFHc6FeQ",
  "key20": "B1qosd1CpaEf14fCpwrdvFoHkRayfz6NjvdHga2p85FtcTwnS1X2yLrowYdhJPcATS8oaB7kqCB4UUubR3HLcw1",
  "key21": "iDP8aq6ARrU1H6z7GHJGxGsU2Zgwb4g1ApfqHdxM5HUg3PjTAX3WgCaUb42JQCPpkdXqpUkg8n6JbDh7bq6mduj",
  "key22": "46hqWjT3hHfY3ujyz3totYLC5Sgy741e5bHek55Bz3L6NS3gURXt8Wj8sGgCgdJxUNyfWPvfE7zBmWjfpQgg5Syx",
  "key23": "5CzThykWuDRTbw6mWjAEsnGG22PMaSBrb873mmogXimPcdUZf4imNqwFrfUSWiBGUt2hNMNQDEbgud6gp5yhLfX9",
  "key24": "2YJUfjU5bUVW2uFJDMZyaDS5dsqPonzNNQ3bWUhgcZAKAg4QgcioBctsKurbn7tyrrctVoNoGBd81CHVF2H8DPPD",
  "key25": "34h2p6tE3rnFJN9hPhoajC8Fg9Z4fHVzdViNsdPbsbAjJn9MFgvWW7WaGqNEmCVyVcQLe4mp4v3G2Rq4dAAtcGKM",
  "key26": "2sfHfkwt7fY5sqWYoWQTpz9PBt1JT7LRDSKe8uW5Urq1SJ7WSen4GAVcsFG3UtXf2U8v2DG3ps9SjwhPiCVc2Vbx",
  "key27": "47cei8swhsC1F4wjLvzdcaBX636sixKbPXCn3Vt368F2kXfM7c9oQ9ZaXA4s64178BHXKTCBxWfrDTYug4txzgkg",
  "key28": "gZfK7usT9dLFQUKPkiidcWv2LQ1qPtNdfWxvhp5VHychyc9tPBT7ZvpwiaKY5edZf6765jSPvpHrWc4zJqAptq8",
  "key29": "3yJDSjnuFiQXnEgQFjcjbDwQ1AQjyy4uDCneL2w9dvsM11TE8oJqpgZutqnSXfFkeudbhv3x7GbiMeiTtwTNoU16",
  "key30": "RXPjHDtaZx7K1nRPT2dPAq1GWj4TDw4PWMa8HVUm7suPWyjrpDhrumZJR2XWFasxSni5PkgbPGbeFUenghhoV1T",
  "key31": "3i4KTohs7tUjeJLjFKotSH75Pg36UNFZFMCiF1a5DY7P4HYsZWphJZip87BP76PT2yVSFfHDTmcmGivPF43UhtNn",
  "key32": "4Mbu8C7HVPHtrHsoQURAXQvrYps9avCWWmu8qEPXPSNkpSwT2p9rHiodDArYSCFQeDKyy3GzNf8aw349ydU6K4uT",
  "key33": "39WTddC8u5pnoAW49MDS56YAbPrv2UvT15runosHdzhL4qg7hGMnC1CWoyWUktVX5dBCfFD1XN5rksUTrEskhCu4",
  "key34": "3sxsu9suYuWjyTzf3nttU1EZZSCT9tV8GQarhbURv1hkSCHTj8skex8PfaaD3u1nQofxsDPfgbXnHVbFhkxsY1Ve",
  "key35": "5prPR9c7qyZDm4fzXYczdJiasvHSbsvxBTLHsRV2REjXUaabS74Ut48EwoGzufDBgVAeURQez2WCXAs2xupGpqFk",
  "key36": "3PkxT6wuZxickWMgypivJVKhcPHsESA2bpMb4A7YFee4a9CDSC5EtG3mzgfYrfRwC8PmVNWNgm5KSCdYc6sT85jx",
  "key37": "3ALgWpPgySc2MpFUmcXRZqx6USQ3zTBQf3LT6p6jAcz4re4VQffNJWzmvY1fdCmokRAq1bE6ja51PfQYVqfAvqhh",
  "key38": "3Aqkp9oC2nE8WFVkjPnTh8eFFfPGfCvCpJroj822VmcH8dEFaYbpLPCHXKdXg1xfbbXz3up56YhVTGWxn1sL2XV2",
  "key39": "4wwevvpMF3V4HtnG2pgh2dpXMET7yxpGMjN2n6n33SXv21ersq3KCRnf52q2XnNxfMywXavRZ8GciZoxM2FtEANY",
  "key40": "2WjFEJWvioEdr8uhR2d2GzK9GNKWVwJfH2jkD9ossMUtd69RJhFVifRmzgqSZRHqkG4XZenJELkqxXCUtvr6VmD1",
  "key41": "NcHM6MgcHTsn24L6c2H1yaZEjk3v7b3fVeoKM8wpNbGfiA5WY43JJQTtZCoy1QVNjFRusUerxbQBDXAWrSaavp8",
  "key42": "2CqmpbQXc4u4ewvJv5aGNdmbXGiTv6V62G5cTEkxpwDSoZtjMJj7u8fJoyo9Q9XbjvEjdGPndtHAStX5hp3WKqS9",
  "key43": "tGTf2kTB9MjAggtWAAhhPixSJYnFUuJBA7qkW45hYZSEgVrPhARQxXgE3cpJvababfRVbrnpmgjdUAwyhT8zZcC"
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
