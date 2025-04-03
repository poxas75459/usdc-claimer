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
    "qEfXEGjpg3PyzGie3QMJiMX9vAhcpAXxVRdihkmzu1jPhAxntq54oCNYihqrbHcukcAmLkBeFY9Gu544QrXHro4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ygsP1r2dKDnnsWwQFT1zkRuw3SnsfpT7NNhxtnwvihE2vsCyPR1eqVQWh4cH8pghv4Y55g5ys4YXKABwuQ77ER6",
  "key1": "po16VE5v5gmzdtMw4i5RbG9GNj7vPieRmaa1ifcKpgThUJboSpmzEeFH8AMHCx4jtM4cJ8yLVc9TDEs7dXg88UQ",
  "key2": "5LP9fS2Nh2G4oLDJedHrPFTGW7bSokANgQY7w5nyCbDrJ4gB7QDc5HzH7vEUpHqsZhnzHyzuzovhhUyanZpu5pAb",
  "key3": "3H7yGHGegyycDjR598MeYcpKaNbupsWAb54FGREEuVhfrPiX8U3n5izCoqauaDLvnRWQxHrSeg9E2X1tvCUXpfuw",
  "key4": "ipvSuHhhZuMorjmkcdMghXwmmunPHqz5WL2EiPwajZcm93E6foFnff3ENLREUyFWWbqEVJ8UU46sFjuR87jTVLa",
  "key5": "38gBAJcZYn76EpiYRYA4yD7hDZkiFscararGShkMorqSo4jhF1daeoDRcmfp9TPKwBMCqkss96eFwgU8JZqxCGPG",
  "key6": "2czpRroEgPkZYuC8MkaCzcV8kQLXvxxmpo2w3VPmUY61KZ2sJxUtRs5ZVnuxsWHK8PwwNpaVrtBW8d4GEyBK3NCF",
  "key7": "4oeYFAFsU4D687AyWTLuDkVbiEjokiCQVeDE7t7uXLjEZL18CedMqZDqJLYGH3C3yc5BvJhNcWxcZgX7gRW1tA8B",
  "key8": "43bwrKemfaqBuNjRCQvuGyE9GGfCFrDeRY2T5iuHsF3n7PGGxSoVBh3RUfvLMxFcrGeFMD7xikCscMaEK6T7xXrq",
  "key9": "3eFRdAHxXitXWzSsWbVDtFvkTkYgS5esU2CdRgbKe7co6SRaGLqK531HGo1vSPR2F7f1CgZPwm9Gdh5Z9PbEfqJM",
  "key10": "5JE5BXLHuMMyVdUo5ke7S12S8NESwzmp5hug43pjPTFNujH9nUqRkKNfbzRjEgiJ6uwiftnoJFcuaaGnP9xHwLro",
  "key11": "432HSKyYnWV5KNrYRpJFGnUtFGcL4CX8ZUmxvwpZkPdCQnjLDZfLAmbbqBWyMkRYehHHiA6FUg67fg6mGBUWWZN2",
  "key12": "5vhrNqMUizcS9nhsKDxVBxNgj4nEwoKUYzEtPaoUCuPhy896Npbc6HDztQH6Z57hktMwgiW5Nn2dqxwdtu6V5bcP",
  "key13": "28mGy1Npi5PstKR2aKY62M6zjPzkPB4ou74F4BfLwPcFA7GDLWKNQgvJ5vBBCZBq8KP4LCMM3vYGQoNYkUBCP77k",
  "key14": "2WyWViHxNYbmZurUiQT3WdtdHXJx8FG9RR58eTEhbsFvH8HqApt8usgvmBbw52ybPwhZCuwc3cABrDKWjqGVUCQe",
  "key15": "aicUZZGcoRrSznfzUEVF8CNfbqnf77SE7vZeKSuXCRqJUNygseoUGuz3sw14k2zcvuU8D3KAxmcTYr54QdWQSUP",
  "key16": "3Rbo3Q36RzhWJNhn8VD4EF7nKesy8Xh9GCHAN19JHELdsKtH8RiPoAD2uKCWvCb2gdUaiaKsdj5jJPx28RDyYF2H",
  "key17": "2AdWrcYLV2iod7EsqqsUKsnfxESruPEy1TfmBnTHJK5QA3vfu9gAQ1WSuHXDqWLTLxtTvNMYcc27wZBoGWpYqNLo",
  "key18": "4yDGMRaKYSJ8Ukr75kmhR5iXMMQgriVBf2B6dfSWx3QHyCSxYLVzbS9eTmJfRxUkKBGZNxQb1czxHkR4V6UmGQ2s",
  "key19": "2dQrSpgacQKpcqpasGWzkfC9ZvYgmE2vFisn4XzyuYPqSfTsrSr2Tqp1hbezzUjPePzsLUEw9K3guPS8FSRjpsou",
  "key20": "BPWVUTYyVYvLYQZ3VtQeqtpWrQp7dxjTiJTsbKNYD7PqkbWtVS4C6bNNoxHBeVGPGwhA2fSjPR67A1HswDjMNLz",
  "key21": "SjJz17qiRk6HRFTXB9VdsUzppejQCYzAzBuWFDpYhnk5WqjE9gaLmxwFycxQnohGbdy51pH3pfuoAEtNin1xwky",
  "key22": "5P1Q73j2cWrWZRXu9XSjJzEynS4Cro4pG5q8uxPaydcsAep4m9f3nZsY845y3kvG8GBGX9c4oKsvGbwNsULwhMrK",
  "key23": "5VLnfeW3SL55JTdLLVnqHTpg4T95TJj1tu8yv85DuAG3UEKhckGBYwrnkKD8ErYVZVHMUCV4UShSLb7aLAKUjqRU",
  "key24": "5PzvqwDgNQuMepkE4Gif9NByU5bt2vAsEbuTgUh1FWFs4SLcmtT9aGFmhTCMfgzPLpAZ9GaHsA1gThPTwUB7s4H4",
  "key25": "37duQmeUf8Vo8keHGr5nP9inqekGYfh18ynTDw2j5TTms4haA3uhWmkRxgwoJ6JNkLnNJ8kujWZFMkwcjmnCAn92",
  "key26": "2PpyufoTmYAM4qzgKLj5UpGrcHWWP4RnSGapgW1Cci9PXRyFZEejENqzJkPCWkuECetciNHr9itc45ncfVg2Jm72",
  "key27": "HaEvohsLBiYRHkXTLz1hjDvDYkdpvx5vaXNqWcr7Mu9nPob2G13ZJPids6GiEbZEEjnzXULPb5cLSLgM3dCvMNh",
  "key28": "2EnjvCDhSvM2nP6k2XSWiztmTDdmo9sormNanRpA25NWSFgUfvYhLdLhX8be7a1nrgkKaSSAFtXG5AuX75dAsLz2",
  "key29": "3L556vtoKyQmD6VGy8WGCpjno5WHkns5WN8McKFgds1eeYjK6Uj3HAtVAekXcqpj7z2pZhJDNRo215G53cWi4Y97",
  "key30": "61sVQyRAXURtw1cvpdbKDcYiEc3XjA6KyP2mFeL6zv3yzsdWfSWhYq89BZN3ca96mTAPG25RHmGr8npXmZJyiuWy",
  "key31": "4EB3i5tpbbs8VGAYgu8mG8hmDgxd16C4fKtnZXT5j4pdwL998bVLK2bqkgh69qazNiuXqBBu1G5vauphnUHs9qCt",
  "key32": "46cC1C9HDbNoTM1KpHj5WiVBDfPDZ18AEQM6YRLff2Jzbtb1PkGGrRcerAFisoSrgDiCobMgmyhzRQzxNjSkQ7Xc",
  "key33": "3avRBqZ1N99gENCSDvR9EPDRv9sNkaM7qfCiGKCvPw9455QZo1ds7wK3QdSaQxEpXDu4JZPAQGbApzmCzqpyKCUV",
  "key34": "5AvrTvdX8987A16okYK4fgLJnDM2CZhW4EqPL5NULtP89N7JwQzoVQUwiXt5Y8HPcrkDiA7PsP2YGgrc2tiX1cpJ",
  "key35": "4QQcaRLo14rL1CcSEmnbcxtHanAUDrPgYYBSPfayKZN8wYufvLyLAPUdUDERJVgMDBAUs5Wa5UkzqrfJ6DwfM23w",
  "key36": "47zDqsVrGG48hYU1X6WNfxoKzNgGsygm9kBqScj97JSj53hApHQnsxbbHsoe9Q5NikyX8nApqqXVFDrtdJtFoqst",
  "key37": "5P7wcjvfSneS26kcueyhvD3ENmmWUXV8tG1yj7hEjNvhu7ZYcGU6hzYVNGYD9WqZuKgAQX3Daq1oiKSiGb6Vaje7",
  "key38": "2aSyNFg25ru2iGVbDYHtdhggbByAfa4w4K9QZGDsy1XdrV9a8oigaAHGqVznrjNYjmTAaSMKgitSraZgADxkhexX",
  "key39": "fHX1tn8757SnMo2tyuoLcQW16dNE1NgNJCvGqaWoEQ8XcBXra96EaM4S8BgXdBzLj58UVC7wGtsGCzCecMrvXr3",
  "key40": "yvvdeMDKVvJc6JpuRbipXxF2Mo13c2iz9quSe8MphBLdhac6jocMzMavuLoV9StMccfWXPwmA9FQ2PQ1dEqjUo2",
  "key41": "bk5XuvZUgD2LYtQJrdivgo38GWeJ2TwDnZhkCJ9Y2Stb5skqiAPSgyZWLyhFVWsMQMmHhHEQL44KhtqS1Ycviw8",
  "key42": "9cxQ3x6Qw84nEqwE2WZ5PmDL6vdpbBiZ8i4CCSZtz6iLVy6eikEd8DrFW4EYQxqgnid7tssZLCRzfatHuhbUefn"
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
