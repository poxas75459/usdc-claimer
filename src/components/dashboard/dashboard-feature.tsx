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
    "dpLbRfxG8zAbAM2z8eSbtoVMmUGXRvMm8pDnnwe9Zzx5XzHbeg4iEJdrgk7inwrxbM1E4748N9aWJHGFwByBDdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qnHtSohGRR1QCETrTWdLSRGEk9TBFtZhdKoJ9umb9q19Bbjrror9fGLgTCfrJVU1WeN8TMFcBaQcV9VX1oUeF4z",
  "key1": "3YHnF8kgFQfEiF8qL2cko4mnFJgdAqX1THo9rKsGKJ8e8PyxwqcxWi6pHZKTCeg7JCqArR3QZkKjhsTDZmQBcmw4",
  "key2": "5A815WPaQHWjaiguZXtMHAbMMuAvo6Naw93ytPgaFNucrJZjqSmrppw3vPMhV55JSNmJnNiPN8B8QzhEgmWksGDB",
  "key3": "62eHSFQfVfQpuEtRx7oZBWXeNTc3AaEED78wwzLxaVacgHJbeGCfmYKCrmyMJ2Ch3tbVaGmYkxmHz7Ty5QaSqzab",
  "key4": "3iz7UGyr7R6S8NVBcsnzUdKb39sGQSDXZePieS7NDuc6TdqZFtv2d9iaWNsL7354DgfZHYLFPCKqYaoi7vA5CEEJ",
  "key5": "B8bGatBFF99jJ7ge2mnaQAQmiinyWGPYwFMaEgsLXPHczt1ZRzFVTQpPNAsy59La6gUU4WwqNTs7vf2rFdCBARs",
  "key6": "55JV9G8g68CBxWeyBdAD48aZJEDDu7d6KxnxRiW3BEzHXSG6fdm2nyeSerNEQUXRfcConaMFH1kt3yCcLUecfPyj",
  "key7": "3yRRZhQZ4iEV1adMS6dSA7EamUo1srm2E1wuoeEwffKKPMc7UGMqvX3cS8986S2DiwVo3GkrDQ6e6EckwhERjf9B",
  "key8": "2cCCJRGHBw3FNxmMRqEvh8PMf9EzZLq4YWmZZHXuQSpKAv1AhY9LSfJNsDyhr5p4T8i1SzJfCWRaU7aVoVi7MNAh",
  "key9": "4nsvB9ycekThugEzhioBCNBng2dPqjMjLADwKHXnVEfJHKhmhJZVW3rtFehz7dDheujoaVHJnEEARoPuJqH8NdHv",
  "key10": "3aEFS7oNfKVXkqig5vgUBiRKFpPKeNAR1gyUJC5ZBT88QwW13r3eH5L4pThviuC9bzy8hXNNG57YqmnEHuTSWRga",
  "key11": "21UupkFJW45JDcJbe6VBP2Ea4PkNdbxpE8vLppKJnXom6TfmUr38FLQedtbZRpx2rEWZEkhSYWUCtgDmjxqodGom",
  "key12": "2aVKyA5w6Bmfn8SVqKKXdEA48Ao6oRQtTKSwFYmkz9QHrVvhADdq3C7CMcnuB2rZbqWnioeX5u3PsAXJb7qMpwnR",
  "key13": "2YCPWBZQ3KFqF3qJqF6d1fUsW4Em5pm7FhGsr5HnmkBqjWAcf4HEWJZHKaZPjFMvrMLJ6cdTY9wYr47C9og4KyrG",
  "key14": "49GSkfF5kLa4wnonsG22wfsDgHwh1HNRLtVFKdJm5cYjzezmRRVi8AzeRnR6WZWnn1dM7LdgEP4hdzXrQqiXe1uL",
  "key15": "4Atm2AbuWrag6NUdiF1CEe6UrFByArZJjucyc6CxK3JqTfwtGi5Adnkmt2P9DfBVGoCU8xQ7aNwNXJhgDHUwVkhA",
  "key16": "2JV3LEav9ncPU3ZpRaJqwaXXt1yLGBSdQ24Cn33uCa1tRP6LUpsbEAbnijfb9oeHkMjyXEnEgESDmWiL1MF3PQHb",
  "key17": "3fBSmA7EvgkXYTWwsoDYW56MQtjqQdDJAt6iLGYi9Zxzpk93QZGEAQfuUkvXuk47BdJx4M9eCQtmDE8KeCvJNg5h",
  "key18": "16xvr23bMEuuXBc3rL7WqZ5YqTk6fgwhk6gstrV7S6G7HHz97xeRLvBt2zQp9QDtwu7ViuXwVCLY2dUJaixKAv7",
  "key19": "46wCQD3nMYaCLJ5nx4G5n5vmndBnNaDpidUHhevnGeaN9qSr6v5NkSGWjEFhTrjEwgCA2FivQi9UDJwqca4q8QzE",
  "key20": "3PeKMXEAwSaDDD1YbgrpHBcsLzNbMKrkcAiMoDmWnX2dhKkWJL497GASc4UbzNFTeisSxWT4mHVwjGRKhr5gcszs",
  "key21": "4NDnorasqahnNLmnexbAqVUVde2Mi32E3Ni84roxVTE6P13DMDiSCtUaxt22JwfXuaNR2jUR4QDSBdx6kRctYKNM",
  "key22": "5f28wENJtEjcGqMtacGiuogH6wVHzdo8qnUkVZmFkftT4naNgeV5WY4F3n4Rv9TYb56dtUXUUAdstLZmGWcScsW4",
  "key23": "55SrNAvCHafHzgFP27BjAHkdtrv7ZyCJzjD379oxs4XbzoLM2GAJ1WdHcZCG7mZhBpfcupqYGVxCz7J2Z7FMH7UA",
  "key24": "2KQA6BT83GJCjfR3G2PwMq3tE59XtaVX9nUF11mfHxzovfuZHe23V4ZLAFEvyVSJgUEaBQDWqLWguyWidhCscS7w",
  "key25": "4ZM4njy36rsAZGGF1aKjFeXcXf2AagLpPmKZyAmicRnZJsp8r2CN1ADefvUPdUjjMan5FWcAcNdw8oQQLbEMxUtF",
  "key26": "YCYLhox7ruWWpesmYEKQFVNhVKPCJ5pZGfgScJQgyjBC1JUd8FERT6Pc7RPxtMHBfej9WvDJ7gbNfQy4L7yoKQX",
  "key27": "4rtyN7VzeV1ihMFcfB7p1HFLLBrKujTnoraV9wm3jRFevG8Gcru9e64DPnsLR28KiP59kRpD514hQjZQdqxFJukZ",
  "key28": "3qEJ4SCDn4U6Wj7nnajQNiXPSpV42sVtC9sNN99RAuDMxNWCMCwEax9AsxGYoXi1HfBrfUe5HwHwASdtZRwLYJVA",
  "key29": "34bxuL35rasE5yuvVpGWwuFdK1bB2C2thsieGw4Fi9VVUepaeGtPN6yxCjGgxt9kvda3hP7TGQWZGYEStLx1W1nw",
  "key30": "2bJtvL3K7pTDRR2toZiG9hAZhCHXs9MBzX3W69gA5K1axRRNfzF79DyPuqvdWTywfRU1EFLv3EbR31BatcZu92Aw",
  "key31": "24HtByeFK18cDC2tZWJ9nqF8FeaJAahWzjMNbR5ZrPaQY3gdd2j3gWPY7xLQrjJcSijJZNBJG1emVABAusqmG8jE",
  "key32": "2JM3eLr89cNdfLbh5XqX4B3ZttVp2negVvqz3mFXpy4dq5vmujqiEYYj6WSt4yFFpxe3Wzx6qqwWugkWBmR1bMTx",
  "key33": "tmGid99HoogrcCra2LHc2yVYNs8HK8A7iGec2Hz8RvErxEW8N6pMMBfXqaZGTwjcecrgxSCjY7THj28bnp33KqA",
  "key34": "3WGkNmWTusXPWxy1ANP6ztEqYmoPr9mrs9oZMp9z3saV2H6T8QLn6L6duUw6tcUsM4Q6V3KZYJ2h9ZU9xRP5gK3Y",
  "key35": "1W1PgSoAVsC2aNYx8xKUHLFSL1keL4GckBp2KtPhT63PQmv4mAGiVo3zvFBGSuzFnTKXyAvyM7FFvZs2AgxD4M4",
  "key36": "613FJfHD5v5sERe6yhjjQktb87XwMrrcCkunKj35d1LDc58r738toic37hvoK7FTc5YkDeJMZWRynQis4G6FbgyF",
  "key37": "51HPxCXSbAjJC8oAQAb1PE8v23mR7CD3LkNVd4dGAk2XUqGTdgTvaBWFjXTKDyb2Go5o29a2tQSUfo6AzUiQJvia",
  "key38": "4BXJviigd8MMTFLGgTR5kQeAiUw2bb3j7R7LvJNjX7bzhFt7LGi2cDvdG5xFuvnyUiWEUkpPg7T8NhRe9wcJTCvm",
  "key39": "5vFzE7ZrEGT4ZCCyp8LxNoWXjaHtJd6ZA3uJ3rcvrq2BHLyep2VSZaCeCt229MxGXNubToXafDnbPjMx23z6B5yq"
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
