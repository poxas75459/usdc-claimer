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
    "2gduL2w2szEsXKFGDBpJMEtLBFF4cptwK9NY3tr3sAxchH6GeyHMLLpBFSZgfimuJcry2YdxMXcF1ZbZ2hiDeMU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X1mEhUinNb91TtQPyajp47A9z4QNeu2ZaJGgQjMKxu8TexWDbLJjx2iWJetWvHNHeoNhmkxJK6yuNAVydWiZQ6w",
  "key1": "4k86LprjAPDwKvqfKmSuPka8CrRBKDqCPtHuHadSbnasLC2WUdwqTGyc7CNr6M7f9ajT53njSEYmNadG2L3cHcCG",
  "key2": "LPhW1Jw8c7kJyYy3mQRMfpumc213YRgSyGVreyhxXzw8BMYHVdSMSiwu7veBj2gG99LrFhwRNqCxunEJM2k6zvt",
  "key3": "3fh4tDjWPSKRUrLnCKCYpn6xV6RUoj8Hpsd5dJ8mznE3imHxvBs6UVi4ecx1DvM4McAb3qJPtocXw8PjFNrv9ueH",
  "key4": "3WqfUcwii7WFVd3iHphh9UDhsmrmdTVf1AfLwq7JYwYugZiJCN8sHRqLFnRrQgz2VepT3REr4HY1rWH52DSgd4JV",
  "key5": "5KJorGepk3N2HvTJ1gCv3Z31kqCJNkCYnEDcgFM8WUxwwPZJACWZaQnKWugiedSCsYBCKtwgG8FLiLqzJdFWwhKh",
  "key6": "o5hMw7gueqQ7TnVXHvPX1cQkojSXtmECfjjZapqznmnkMHqFGAsc8Y4GiphVo91Jt7p9Bs9tmYSLwauzaqTS1UB",
  "key7": "4nGp1Aj1qjYJvfKvS6Qsf95dDJQ7bd4LtUDJ2i6AturDD4CjkGZSJ1JXofD9nWzcPQpfuhK1iZ4cDonfRNFnzYMi",
  "key8": "5t7M5iuMHT9v3BZ21HGLYwrvGSu9XsSyszhunUSQTmVrspVW7SzXCJ5VJH6MZdXc2fn4w3CdMfYgiQ4yJRPK1e2Z",
  "key9": "2SCjn3aXD8veFf7uxsUaNTR4jPoUEAPMdgADsRxNQbCN18AuhQzMHcvgHPL3HkLc59fUGuD2QRmsKDN6J98puodz",
  "key10": "4agTvs8G11g14j2CCYc5jp8B2iYEJKVzWkjrRXcs57tgihXmbX5ZdAGvoeNbdkx3W5asU5sXaaXty7Mfa95zih47",
  "key11": "2BZRWkYRqh1TM8bjMYa9Rhe3sMMNRqBt4UHHBxMWhNE2UDZVYqCT4VFoLrsZCdRsd1Tjf6mMDMqZiFUFHy655pm4",
  "key12": "45KunHNA8uHrJyFkfGhbFNzqpW2YCQDQQcxqKdLLLSytXbi8HehRhuuJsCD6kjeSEGJFdf3e6Hu1sTtabPj5694b",
  "key13": "CtmRSUTPzLSV1AhA1zuc2c2hWwYNnZGUinUrGkMMPt7C3snqUn4bhbqaxehsKb4zk5WBtK8TVW6TQUjzr5YZvqc",
  "key14": "4iSG8xqGsAnUDUuQEDfEaVaWkwXohs3cGeiyvNko3VVCM9R6uLwBr9jqnMv6jNR61MyE1Vr31WkQaxac3STrGTHq",
  "key15": "4r5KsXnya1cQC9yn7uoFQ2zYSXQCneMQcDRMGeUMGTRt4eEwc48HvaQ1oJt72BTqr5fTe1yjxbNjqsoiXEaFVEim",
  "key16": "27hRqiEpdohX7W2h1YGU5e3DCoG6ravxSxNAbe93U6TefKUEHoAE8amLML6uYKSCnr35bQ1w78oR6CCy7dQgdZu4",
  "key17": "2eEXgijUo52WrmKEAH2s8WLH9o7Cp5Tr9L4n49A3y4vrEsfFcj9VhxtJbFnVvvR8FgszaYymLJq9eYsB6vCf7MFb",
  "key18": "4qmSe1Jx5jxRDKxvTZCgpAyb7C3BGW5oopsdJVNdtvNDKLtL8ot4Wd84QaRtyxQmfrtkX8gCF3zNgRFcJCA715SZ",
  "key19": "3B8yWZMcZb72rNGmCy7pCSgTPEacNndxWueCQLbCpT7str8oaGY2ZxGEDSesZDWFxsYiBNS6jJptjoifFrU4j47w",
  "key20": "23TmGbtgbVEB9Z8f5BoM5nxFYnnaQxUGAeNnK7ue33wPB6a3F5hWWy9pF7Hp1ScXHKNsRqBL1zVXVC8K6pQ8nBeW",
  "key21": "4H45rmJ7Rhbddr1j6DhC3WnzHgGBZvAXTE5mJZoe99e45jRXuaiSHwftctqDSbFBqXf1jPNKNXPPNM6AZkT1jcEe",
  "key22": "33dFHFm76uHaorzQGqvtHURvRjWucYn63RcH4RKsBE4NKSAHJz8xdTR8UukkMGpzVG64Efm1eDRf7VBgRa4F7nSG",
  "key23": "2WU8Pfu5FdJQtDCm7gQctv2vH7MjhV43h4CNh1DJcDnYMXYtaNQsCkbJjZeyiKAinBV8gYpD8SkejRACrP51tXSh",
  "key24": "n1tMM2b3o8VdtWrvysoheuGjbytQ8n36dbRKRHovTpFCreLP4nvE4GCfbCiP1RsTojxKojHZEhsPoaVrWiu3iNp",
  "key25": "3YuhEqR5c1xpGfbka5JoZchSf9unyEQztHXLjQrEMqS9YCpX3bCqaQ9tN41w82dfTuCQUa3pPvZoA8TvSFkNp6Xq",
  "key26": "5wJGayKRLaaNNwU4TA2DkNymKicy7xeMJzFBwfjiXXArxxPqSuM42JWSghWVD4iGRm5RVVGPaDRkDXMKXdnfzZYq",
  "key27": "587m5TbKJiB3sU8o1zcQj3GTp4sTdKn13WNLJTNsAiQfF113SfBnxKwCWZTEzB9xwospUQmFByW3Rec9Whtb7nJA",
  "key28": "3Whxom68nCtroYcGep25Qs23LQQxQEEQasPdsoqU7mbQzAHF8NJKJorwVTM7FtSdSTssskwVMqujVRRbr5HpknLg",
  "key29": "7efPGpFSJoGrX7W5Up4QpTvSe9R458NA7ziYAzSahM9cgkcnM1kuHuauSqGViztuxE6vRBPZYANiSrpxwZ7Lvgv",
  "key30": "wX2jwc6f5hgpKcDPzhheHFmW2uc4h2tK7NB4DZznPoAALaRMTHjipU4cAKqr3hJdpTtpWbEmLCxC9PAKxvLhDQ3",
  "key31": "5uu8Vgs1NHt9nPGfuBsNQgQUv9j1j1fM44eJzxFAYxUGWDmGScMJFwbbJPEd9T3Ufcp6M6YSMvF5Pcs2x7aMv3nX",
  "key32": "2rv5VrnT1AjE8XjYinFEKiZKDrm8wDR2AgMzekb2Vn896sSAda83qtKGKHNjVUyVgMovbWozLsx45mpZNn15vYB1",
  "key33": "3nEqny9AHTCi9rNZRdHDdkcVEFenheA2RijLaW3UJPRhCbRpPZJSJYiHgAjerhF6iTyv4D13cUBW4dTns5K5yq4W",
  "key34": "4bBE8CRuemqzUDnS2fjqv3dJhuB1ZumAGYBpSQtDywNskAuusc74eAiyxKmnF11iXvh1xqnFzBMEAhWTvyQMMGFS",
  "key35": "5gvHhYjp2aSHjvVKc4g6ConkevQtKjZWSegczEKViPfiF4JyfHN4YABfrodeDHumZv1nmGS8MVKWYJeWUuPeHwV9"
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
