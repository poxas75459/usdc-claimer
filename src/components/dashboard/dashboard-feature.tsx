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
    "5ByTqUR4uUx1xkGzcdNnKCPas1LkxKYRYzgPQPstxD8SWzvxisPN2LsLXnCiCUYJRyZGtSV8rF2aBCAxGbf34NAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KWeQKqDLuGwnDpJ3DNZac85wuCfbuDwrAt9s2wL7L2wHPVjoPPu9FuNLtAoFxpqqYycXhWUDX6FFw6jirr2gXUa",
  "key1": "46doLLztSn7YwkjwGHZXzKCE7UhXFXejMqozpsTKjf8vpco1NWMUmfucBytwiihR9bHUiphFFhV1jv2Naqo1jvG",
  "key2": "55JbJRskQHv6axchLLE2vMcCJP1SjyzMePvwaEiwCmyyNzMLPE85QM9YNoZ5j5MZQL1sis791S5w13CDdSnDWCiG",
  "key3": "586rB6BJC7bknChVKTvVPY6JkAKN7tysxW1JqhEW53jTxY6VmdbxQXvYrbTTvsiFty1Q1i79PECgWK5EFQD7thQH",
  "key4": "27S2TQez6ntTj2TXFk1WyzQVWxHracT73pDRf2H376bxwhSE2SegCMGZd4hU1X45iy7uSMvCKTqrAtu9PKDR65vo",
  "key5": "61grvrtfqufUWxJdbDepjq7muYdBFkPCp78USjMQtHiKP9xRnFsPnionuMr128aRQmnK52ZXg6XLKfcRKoVN1S8Q",
  "key6": "5Ru74SCmS6ztRWYApsxGERPsUkYVtGHToCRRXbgKieuwuTQiLVeLKR2TxdzotJhKzTuj7YDD49KphSCJYwk8cmUD",
  "key7": "4jK1t6pqVHXuJco4fWXpf1p1koteKtKYEVV9mnvMukyYWRL2Mc4HV6U4Akg76eCs6ebBzWMgh9SyAAQjaiYVEoM1",
  "key8": "aw4TGEZECjZwtrz4WHNcqMSNscVLZxCR1Zw8NZwUA2RKtzWYXzQAc3sryuZaZjXneZcxYwiHTNy76JgUqXpm3fy",
  "key9": "yqAgzWusmufhBZYjb19xfKriRTv7rWttm8PuhtLY9VNTQsgD3p8wpNT4eEu6txgRnypzfKAUbdcrcGiAa6xqYBF",
  "key10": "3WgcFTKPEfjZtqnyn5STebvgR3FkLLn2oet8MWcfQ9yRnQUiV1qyNgw5zmv51uZXuTJ5qFcKsBdhdbZEbaaA2VEw",
  "key11": "2G7dJJCKwLPfqZsSmKRVFrwxmGaa2ZL4vofPKYJBbM1Cs7q8KA8qqVivuESogvQdR39oWAjuVUSE2nEKYsHBnVuG",
  "key12": "4ZWEBEndtFcAGYd3Yp4Mm96D4GPKTUvyg7coUpdqbNnPTGDPbCpXd13cqkdoMkkwMT7W1RsyRTe8k29eg5ZR8WW3",
  "key13": "34T2YstPBobosaTWFGXEPRwiXERmNUbxwxcfCaGif1jyz3sgimzvoqLH51Nz7T7piGq8vd6EWpSQjqtJsKegGoyy",
  "key14": "rVstBjF1jNWEcmXCCvFbhEEkRVcwua7KW9c3ZuZD1W2rS7efiL9msDXm5FPQEEKs7mewf1dSrNvQxPhZNCJyhUA",
  "key15": "3t1b1M1tazpDCkVWnDecFSwPx2W7NgaiUF1dFGtThFtiLgPXCecVLoH1rru7kT6hvzc4FNK2GXBhjzo9oWeCe8us",
  "key16": "5YCxqC2f2KsjmjzE8LFmgHaQQwxokpsSn3S8qQUbYGszrHrxomDUue6PZX3qqjhDbAnzFDqchnZ6Wai1tStH2oco",
  "key17": "36Qv9aY6qUpHYj2xQLDoFxL2e4upJ9DFCpxwcTvRpyyFx1wd5j7RDxpjHXDZFVNbtMQzKSAW8RXGWMXnHGiC5A1o",
  "key18": "4b7vDAMuZiK37w4LMMavYqBsnaVWjRFYX1cX35tKjUmpof4ehYs5M7FN9KxBNqAAUNq27kU5nbDSKEeMMWAZ9VNR",
  "key19": "45RRrWSGcoRtDpW5u3ZQnJoANkeVb6u34v178dozQTL2rrVYMYzF2GMt4EXfcLYhKD8mojLdgfVSiL3xjVEZyEvi",
  "key20": "4Aap7AJfRR4tLrrBwJPcQuEuLf66ZgUHN2bezNByaQv3pw918jSeWiE4uS7Tn8pu1kt9Gaw736eeuUbTo9kH3S1B",
  "key21": "4TFvwLPbGc6f5hnNzqsLv5fw8VKsydqTXkxuHvjaa1RmzK5GVfMXHCXhqajFGK2QmuLramBANoaPEPKan1TEBJoJ",
  "key22": "4eCDQsPtQnbgUh8wX1v6M5tUAQGKNGVLFbtYvhvQr1Fq5PGq7jMpRaAMjXrbTgtqJQpzZG9qeroBzXzqS6XVUhKV",
  "key23": "RRpuuUTLiPe66hfogDRU9taXm94Dfc6rrdxyBJRoeyBrp33pjRcaCyZzhcBXYbowZ4yEmypQJ2zQEbVM4fmEysp",
  "key24": "4JsYsWmCnwoUWELhRCFGf5uKNixfgRexHwcrwjL1kQXAAu5MhDEi2sxL32dr7DB3pTbiWAhovsjVCKUC1WYXhFq5"
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
