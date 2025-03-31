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
    "2pncu5gwzPgahyXCGdPWLd6WHZktwA3Kb4fHX6nMKZwt9Z5ukk1t8bBvSFH1SHwfQKLPmiJcUYZNLtWSTaKvoY8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B8F6BSEEjLvDvKifBHJtSisUvvG7WSExcdHdPpiywYKBgZL6rb7Eu76izJteQj4ncQ6kbcaPe8Xp5vpMVwHnuhk",
  "key1": "5owZr9q7uEvrfZnNvFmp3zTT4fzdBMqm1eKfzJ4YY1ic4683SDeKz67FQDbvcH9wy2hd5KEGBFxSmiZLQEb9cFJx",
  "key2": "23EhKkrJE7f3gGJjSvrbuUNdtdys1wLaKgeeMn9DyAD5m1UpDUZoj9a1RqX4udwajuMHyxwmHiSbZtkLBj9nUTB3",
  "key3": "4UDBdw6Yai1gwHXQPfkYaNUu6yv4JKEFfXGu6dTzCAUtot816kCfLWzWAX3hzSM5bGMhrMUyJL3XRRp6WsjERxUf",
  "key4": "2jNcgfUDai8TMb2qo5LxYXa6Ai6cATLkc6Vp257CQfqa1ZcsLXPv5L9PaKDN3TCfyTtbLtbvgCt2xwZyKqAaj9ue",
  "key5": "27DjrRqprY11h9A6xgPfGtxjZsch2w4m16oY35Hfe9VaowRhdfemiFHVU5CWjrCa7nxtF75vJK4cfzfYocqdqSdJ",
  "key6": "4qfDYeVxZnfNm7w5agpTUsHBbzWeurSn6HyPypnzFRR3Lsg5hys7c9vWJgsmhSBXjX6gCkeBPz6gZ4btC9PerGyZ",
  "key7": "3qUop918nbLNVqEwnuXH9PHkLAbJR2hx2mabRcDYEre3X1d5HzzbCiBdfYCkSaMVkuZw1iACGKwVtGh8zGqVJoJq",
  "key8": "5aAuadfE3iY5DZLWg4uBTSh2mfgDA3QedJD4fk8EW8UuJvr42mjTwg5DFAAHCX2LG7kwjbEvjyFA7mRKiCfxEE3J",
  "key9": "2bgiEuX3jCmHTRiAUM7xvqa17V3PrMSiR98kGd7KBvbgjgdbSXAjzcc3sa6iLvamUqgcyTg2qpMo1pax7XLCzc6f",
  "key10": "sXWBbXFHVjN3ikFfujsmswuuiFq2vRhsmFjUBw1uFXsY7HfzobN5F15jULuaCpB2uiZGGoLSuY1aQYXag8u49XJ",
  "key11": "5zqW9GJ9GgxXDvEtu4ViGnexAkqTDDyrmkkcu6xcPa6qzfQmZavTre53BJ6gFnLZcK8ce7JbzeeXARfKfYZY4uYJ",
  "key12": "5vPxXG1kX9a3VG44YaRmEq1ifBzpfB8MnESSbLcBBfPeat7K1o7CupmDhkFXpyfBPQBVKjeHoRtizyNfUyKocBzj",
  "key13": "4gadF2essNehAmoSp1TjjrFuucAgqWXijRtdtUGrz39sMpb5Kr1LS4CbnJkK7Lxx7CrYvEftLQ42motTzp1zKvBm",
  "key14": "3R6E63ZNHkTyQT7iZVKjTi9GbvumfJonvMsnUWWtC65o7XjGgz53XQNNAU4y29KpHoYCVEdab8DvjMZZ5VanyEpy",
  "key15": "5D7cwNRjxKqeWBZHPZY5AtABPY9H8NnMx1p5gtVfKAziuFuGK7CSY3HkM3rDd12jqKEQzARUjDeK6SEGfu1P29Ms",
  "key16": "3Ld9ywM8JnCFbB16Pn9HhUzv9hvaPJSUxDuudrt2kK4t4oTvKwxXdLjTMk3MoJBoRgiyPoaw1pLzLQfyxfyfrVxq",
  "key17": "4LgTi4t4LzPYZxaUvA7aKeNsq89rZFGiR2z8hXDrHs5TK9xVG2okHFkLqncUFuhviwrA5ytC9MvCJZE8AEZ1S38i",
  "key18": "2SzaYTjPLNKaft24F2PPF3Pj1UKpwoGSBgJYW5WkRBjvMK3i1oXTBY6zBpVfjDc9BHHkNRCyUs6mcDHFgYJcEWKs",
  "key19": "4ZMzRxGkJAKUs5FsVVQxYNZ4HAEd83CX4shV8vTe4RC9gNidinU1tJsxJKf3Q1ezLXs7v72JfYMCXkz7ejGgmX6n",
  "key20": "8CJggne47MTrqd3d7jQrxNLJTvLE9niat4QmSJijK3mXpbK4TrEFkTGytW6EeFtFtGHXn7JifwuZvhsgsP1HLrd",
  "key21": "4BkTXjcm3pEpqRqCgvoqefuDKNwowfzc1U88LxUvPwqFFqUBLMEh7CLx2rGuPq9zKb8R2XeiWtXJiythaJHotRfn",
  "key22": "rR844YJTKUvtpnDEBDkp4KCdu2v8qvyqh4M3rsJ4AALV2r4Xj892SCU3BTbWKtfanPCduUmBR8hwjrj8S3Ven2J",
  "key23": "3fEH9aQXuDonti7HQ2DyXkyfJuZiJ6S6LxtvWHJb4kXuhKPKdEYLytE8RdK8Sf6nzn977S9meWrUaQ5QBpNBEAJY",
  "key24": "2WQvKBnDAxroVCkPLe6EnoC7yf13JZg4y8eagoFQiPFeDcLyzqnrmBao9qaUWoDJ2QsmhvT8YMeeunFSo2sMykmN",
  "key25": "jP2PvJFAuMsiATgoXRJeBDKNuDfz4upunSSJPcQyH4nJ1y4jvZ2Zw5t2rM4XumTwAuUeBP1DkVspYnJGM82SotV",
  "key26": "3gALKMnohybK94D38eCRTXHzsNS82zxARFAhb7uJM9jd6RCfhYRSe7dxmdhjwMdm8iJKjPoEopBLc1c4aQAcfDzq",
  "key27": "dwEoLpRNyNhU4HzCn98hjphJrNrPp8pRjBkFVp4acFygWAbhVeDtBHiJ4p6oZ4Yos6jBWrq7Voc2ZQ6jSoWRXS5",
  "key28": "5whMkm8isNYZ2dckY8UqPHjnpMtX2aR7bK1eapAzDnMvWUpAGJK6pZtyRpveg49Ho4iVB5nJB4bXYcVCNWUzowpo",
  "key29": "RMViWZSy3RGNG2axZnMj8YAQKYfKfhi12qRsBCP7giNHqbAGE3CHZ2Sny1WAVgqgRZUTbvPVRzGJfZfBgP1SiEi",
  "key30": "5bPk8CVUsk3rLpEtg98Meoi7fmZhv89DsxRa5vo7fpCSMnQhUUA5myoheVVCF36pscg8eppyAFuPfAYQC23rW5bj",
  "key31": "2xM42zbRFpwEaoaavBi9PFnSPQhFJjun2gBMbPb6NAoVc9tZTjt7rDXpLsXq7DWSLYDQeEmhQuCGFtSeUhcnrcet",
  "key32": "4MpmnDpNmS3W8JrwBNYCc9ovjM7Hf4HXNRFTGFbsK9RhyhqTNAGnqSZQkZe6bAXsnYGvv5cJd6yNubzHhJ2EUdhs",
  "key33": "4vaDw5Bm4X4DBp7L3YhWhE9SpjjDPzcNQk6U9wF8vCFXCPmBXsPwwxGM1F2QYSvdRxfTn5AzYNgaSYVFBBx4mdKS",
  "key34": "2aHXM4jBNo9dwVBgAvfLjBAuRGUeHZMtncJWwDRwwf4LBiVeUVMreWbDe5oWDXAQA5aqnNmMwNcpk1oWxerWFoGB",
  "key35": "4dew259JPLkjePLnXMwqfte8npNMULXUNU6GQnRo4tJKfEVnzQSLqvrqy11vxPx7PCLUEBHCEz4npzzCP86HN1cK",
  "key36": "2fxqBhkUVBChhEbCvXuhBX8uM5yRnZ1kfHa31TFUNXaWZBN3Kki8ys23cpQytihcFQmUBr8s9CrzGxE6J53nwUNi",
  "key37": "LixaqzPwzpGYjK9eanoUTwjLQSgqqsDmvzRrnL2NP1FkfdoJpu4vhac5bZAQ8GiEsDqtRK3Ty3zZirqWVnaB7Go",
  "key38": "2bnkkasXoMgNXjpFxZJxoC2oHveuibL9eBCecEvgiDgHvidrPL6vKykUnAdATMC8SfXwdxGrbp6Wynw4EunWoBYv"
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
