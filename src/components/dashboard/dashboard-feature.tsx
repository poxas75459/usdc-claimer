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
    "3bjW5GthK8E7nCAZJJTvoRG94WVgmf5fxUaMYZjbPJgqTTCXRQw76FnEbk599tC4w8gzMKugqpLJ5hJmPQsZChwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64JSoWvzquBLi47mi43hXwiGLa7uMzKUANwbB3xVyhza85eStCCx3LdDVh6em1hAiZLYNzKsbJEZmksWdZebbV9T",
  "key1": "41wYtnnNroV5hL2QwWpAGwFochVhejd1JbGi7hyFUg1T4gw7tJ1oGF1hKkdbtr35tJiDtXjD3YtGf8RjPSLNTRvc",
  "key2": "DdnZKDcj9CFNV4PHVJEakKCupUYQwqXwNJFbeHn8aUMrapTXabRBaZKio9NKAyaXo4JiuoBRPseDvRsz6eCWmJd",
  "key3": "5Fm6pTUjBCGy4E9WgAmfmM6i4MJkPDWj9GT5C21s2vGp4afEyMTqxpZgAggde3pDh5BdRwaYQcdGdzfYCvtnF2sD",
  "key4": "4mQSivXZyJLcro2iWuQp9r3FW9Z3CRuDr3dLE5HQujqm9vUqwxo4dChR8CUrswDd1zmGTCLUR4jcJZnaSRneYijh",
  "key5": "4bi751xm4LUptC56n8QNZ8Qws47UtZvL9QT12MWNhqq414vrqoFifzbrGBR6SCFTQYXmJvvCyssZsfJJhmqQmebP",
  "key6": "2rhdmGvFUzWXTzYFWF2TmBkKH2SGtUWBYnyN4rRXhowh6RXjgZJLY1Jo5KDHWKdAB7RjAcRiuw3UT5DAJZVq9He6",
  "key7": "3bTwSRZ8StGjbur4MKRmpw7yBSLoeNVSH5ohKokd2bBuqAAyuQ7EeK2mrCzHQCf5L7Rfk12RqQY31pWYxQSAB732",
  "key8": "631p5C7Bho4uAvUDLWVVpkWkCyyCmWHjCAoct9Nfr1C2T2nniTCuHAgcgozkCohQ7KFK6sHACCYc1jp7qHNqupsH",
  "key9": "4uvWF9aNRSTiee2u9CHCxhoNM1r1KqvgnS9wBK5poUpneHDESUK3n4amYKEbcCgTnPF3AsxC5QVnZAgaEtUFHzpZ",
  "key10": "52qpx5M48n27kPGfbgbhb6NC18Tis4aHDPq1KVeAGVtuCt1zUS9hvW76PZPZcA4xBRMSQgDDaFWnyv8XzttU41PV",
  "key11": "u2PjW55sdpdRKgLMgE48wo8LgQjd4A25GobSjdQjHMs1tuhLFFyYM9FXM1dATNyVNnfBLZHQGWwrXVDmaTXBqtL",
  "key12": "bhUmpbg22idSNaXfpry6Q7fsLhbMSNEJ1eASdaNZqp9ft1hTDUdsnzMLuvTcqut5En9vVUj2UouFx9HHRFsDNDW",
  "key13": "29JrtXsJyvPJudHru4miJ36GT7EAxWVo3DXCKbKrUN2drxK1WVxdxUdHt9M8afPu8yWgk8AF9XHqfX5t9R5qMMmk",
  "key14": "DxjjFC2Er3fsFwHW4s3PZkjvWrnpFRc2vqrT9wY6nQaDBeYPupus5pg3P3xhRmQVrik8tghzbPCUCJqargLWE1Q",
  "key15": "3jqvvrZEoK1ez4BvZN6sQVthCSaxQ2tckiWsQ93YV4UignoMfoAasfLeW9hJGhu5SPhXdbG1z6Pnp8bhPiCTVPGp",
  "key16": "2FHAz6oJuiJ7pwPZyPK6jX4UQjxeYRSEYTwjqGfzGqnjPpcb89pcYPgKurXNtajjs4869mjuW6DMA3iLmBPn2Xyv",
  "key17": "5LGf11M1z29w3xCPBieuWtgebmBtya7gMwJuTVkJ3LDzQsx8AdupfUp3CzPMA4kqthsrKXntTEMpR4CKgKm4s9qt",
  "key18": "5wnbeZNMLYNjGvLqHPjqx1dbGxdPwMwHcpcb9QuSWQsJRGoxYQghgYfvFjeb4n1Uomevg2STz6AQzTaHovA5pjY1",
  "key19": "4981dr3vKHsqkjxZmq3qbHj3tiee8nsV1DNtLAA9xMZFGygvERqVQ5icstZhD6hCVhSehtH1rtaq6cgz2rFXwnW7",
  "key20": "bBsPiFKuYj13mm6giA7xqHS7yodjUyGtygACP4QWe6MAQgM98TfTArdxMUQjbij3x9HfATw1fZWKdUuSbhuWuVv",
  "key21": "2Qcs9kWbuzWtiCEVugcte3DXbJyAkadvRbzeku9mkJprhQTRY7BnCBtV97iMScPqbbJzs8VgCqErRe1nAG3FDt6k",
  "key22": "4XdP81B45E4tZCZviFHAMoJNYwYoWVN2uMsdQ9TQqojgP2t8qiAsgEsGhQs8sdPF3XqEtrTpg8BJ6ALxpQKy3wTz",
  "key23": "2Y9Ks2MdF2TFkE5AYcavrgfSLpTkexMoKrwTB926YFP9wJdmTsfcyU2iLtjnBXk4qDEQQmeFHw3JGDx5VFLCAmFp",
  "key24": "JpTWjibDKNZia1yvXT3YGrmZJEyU36nrSiKrnSFJaHRLr3h7BwdMeXNcWHWE6yJQo92Hvvy6VKkoZQLQLm2cGTU",
  "key25": "3zRBotb2aAcUT9En1MQJuWjvmmR1RUGZE55tTNtTBFHhGvmRxSR8xfudzkYN7ga7wKh4Fijwng5tpQNCMpeBHcw1",
  "key26": "VPwBuoscb4GbyszULgkRS7GHsvkfsw5FGvK2jwrRsXcXLXCgbG9dm4Gg4gPu9e53pw1oSLWKGSsz9gFEPDrMUY1",
  "key27": "497nKuy7DdevNievU64RQU9uGVGzd8z3foi3YDX2Z1DBtRfLnSpVX2AqGsWb4rkqVmkQZD9uh7b5TStwgjw7Egu7",
  "key28": "3TSZ7AduHyobjF2k4SyvvdpmZcoUvukW6E3LVap8VEGPs3Z33mUbJ1MXjuJUT1wwNDhfgDqRzkm9WbZhsQVUkDcf",
  "key29": "2R7rXycno6bQMozuua3o5izUyRvXBDgLaxH3fBr3fjpQWvXvkW6XQGS3JigrmXL63ApiBTvMra1rLRmCWQEx7V1i",
  "key30": "4mUm4GWgQjcJEshigPQVHw827h1rSRDkxksLvMDcw7njZN9g7JzEtGnx2sgekUXhP5qNgvo9XsQdSMBmxhi9vvHw",
  "key31": "21J6eqkJnXZQSrwNwSEm2keFgFdvZP54VJeQrqQTa1A7PmZQtGBaHnZapq9KypxBNbwmT4Tc7RLLWeewFXR4BSMA",
  "key32": "35ozTcwJwGqxCfDrvuVsnwf5VZF8RxTCHMt6qqTosp7rThPFwtCRpdy8uGszVkJFceB2hKGKtBJyzJ5N8N7zrj3t",
  "key33": "3BUWGtD5kBkoF3Wkxkaj1dPcvn3uDE3JBaNkDFDNW9M3PovqCcvsFeSgYj3q6HhfvcfAL3xg9ApkKPEkUXg8PLjH",
  "key34": "5VnAWRi2jYgxhBuajni7wQB7sa1DGoWetCe3GouTLQeGgW8mZQvKQVxMpqt6JzFw2698i8jDr9mQxbodYsbn7TSd",
  "key35": "2tXfZsGgV26epJFKgHbnZUkmbbHbi2ut7ReGrz5LPhCeFB2FF1ATYqab6otttyuWoQgeTh7P9APRPoeYjViTd7Hh",
  "key36": "2Ex3ED6bYiHLoumQQSNmE16x1h4eM5kne85bD1z7eh16P3YcVzznYkLFYvh7K12wgr9mvrJttxLbDpYojTbLEEqW",
  "key37": "61Fc7539KSaqAVsQeq89QC8Aj31TrswPu5x7NuF4yc5ri9f2fb88w7BFNzHaV98DiAN1LNRGuu4KVj6aakYfQksx",
  "key38": "4SM5QozmNpFTKs7DXjoo9U4uzFhD7Kp55xkXdAHeYojcHDvTwzhFDYp3TCSuDg5LoJyQqT2z6zv6oA3tGrcDZ5fp",
  "key39": "3cfK71Wd5GKnWcZQUtYPX7NV9bpkBvoL6XVXsMjrSK8GbMH4V4esbdgpcrwHjQxWbCjaFyKdtNXu9pnsuSeusMCm",
  "key40": "MMDhScveuKb7tcaMpvPYPTgBjVB4hA5xRprEZkStZmh2ynkDhx6taMr8gahKy5weed4CRXNtiXXGHDCfrhj2gx3",
  "key41": "5qbvSJBUJkZvRcE8z6jWwC9156gfz2C6DjtCbGf7HsvLVNHi5pcvxyuCGjigtzRsc1x7UioN3y72dF8jYGdntmPH",
  "key42": "TgrbMSzKjgEMNR64uNvCvbkCbrQQJUDKtV6SoU2mz2fyF986gMAbPN6sJvcPRZjdvg6R7HSxConrjoWadoBt9Q1",
  "key43": "4fADu15AvLjWVcRgjCWWhhFvAGbcxYrpgY6AMMc9eV9WVUoUVEaBjzMt66rqP3JEKmsWdsK7jf5eUEDK2K47wUA4",
  "key44": "2eGexJwK6Yck587zQZrLxk719kbswE92p5tSvUMD5k3H7t4u3RrpqfvGAkd9FerGawCWhCVXboXjGhCjB8ZeujKT"
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
