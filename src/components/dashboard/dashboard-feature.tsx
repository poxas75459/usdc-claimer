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
    "4grr6HyXab9xbzJCCkThjXsEq3ESpZv2SRRznh5KzeNwv6MfMnayA2c9SBvQpcJXsa1CpTKf5dCmCtRujjCYxncj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65yNxhyTJHSZVpTamhzALbgvjcAG4nrSMenzciEDci1gAn4Y8GbbpNBBR5YSHSaUZGBFSQV4zpeYzVjNi3DT5sSR",
  "key1": "2EgM4qrdamPcayaNmyovEtarApTJFEQPGLSJPdbnTyPthQ5tggdYvFfa9x7TGTPFvbqSdXbBFT6Dbyg3ECaBLbTG",
  "key2": "4VXcqkeZtvtT4YSi1DtEHyYjkWN1aQ3zJZJQuDCPdCTCCukpyn5P89cbSXVkq5hCnU3Ap2GRtXbXQnEQvHNTDRvY",
  "key3": "638C9NThMy6oYKA7W9dZZC8wc5gA1LV1BmnGo1c6xCasF3LftFpgHFfqgM7zbtgCdqGeiRE8c8nyt6CyUJK7LJ4h",
  "key4": "5smaXVA1HFkQ9NVjqpFef1BZHQYgunsrF7g6SnEGCmcENUyjKse6tXPWMNLmPezvqrED6GUC6bXK6bGjtZaBn66S",
  "key5": "637wd9xjqLram1NvRbS1L4sabf4BJrtYyNbdU86YoYss3FdQGVko74ojmeXFdSVx2Rh8hfoEbawURk3FxcFzm3Fx",
  "key6": "2nYsRms8p3z9ZneMmDs2eBnLkmSz6H2JYPTJqrGN2r7xSiLJBjddU5Z3FXSyc3wrddqq61R9EtaNea3zcnrd2BqK",
  "key7": "54cV2vv6rciL9ah9wH2JnFarPCCosdBfprm9Qeux7G7JRhcVQmeMimVx1CMF7PmCJnR2ZAQtdBbvmgbV1kQjCRrg",
  "key8": "3Yt78HHosQJxbyNLPveWQ3esRQvhwCGpiQ2WoeyBAkxAXqAuCYJThUB5oMxLTtmFkZ2dZqyugw6LQSeBY6spXcVR",
  "key9": "5hDZBtgz9r7192B5doNZu5UUvTWrfguoFfX2bchQMFdmWqgPLzjzpsXEhfs91PRAfvgKvjMAG9tXVhyydxRz8UaM",
  "key10": "2E7unmchMQHKSkSAERDqemcx4Js5TTTjqciVUVaZqmAhfunbkoHNztoKYxrDWPrziyvh5xxqU4kNeso1NRBkvCjT",
  "key11": "62B2LjW2iw4GvscubM2scPXMFRXb2t2CggDyNV9Kf7wY4ja5SmgaHLQ17zqKgyPRJCqw4LhZ6UMkur7kVJ56qybC",
  "key12": "52gzP4KV4Mvgozqj1Spt83otfKoVGrTMuDCFRLbtz7Q5SxSfJNkc5VY18wxNi5SLhXpPEbou6gwMtUgXVeNcd8UR",
  "key13": "4b1HyU2f7s44ccDUTweKjBhezfqtNBqFqhXMjzfHyXtnVpA1cw65828UhnDPzFRKjQBgqPtu7duhPVPNUM4VjG4y",
  "key14": "3TP1z6HSCB7xUr5n9P9m45Y2Vjv8yguZj3EhfeSJwus4CM1NjiuwGg9RXppdA9Esdp2Ju8qZQy8X7Q2KQtVr4hyv",
  "key15": "3awvmPx8VizQGSPgFXDh7uzKuYXHLGPd3rF3oqbMBBYSEkRLpJMeGZieVuyKNUijPr8mVnLzSqywra4Js1f79RF2",
  "key16": "58twnsL2mQ2KvMD4VTtxGzMT722rTH824GGR12MowHVBGER3gvBME24AnNXFj9X4Z9XGcNyi6chCukFTftUCXhMp",
  "key17": "3AT6kQpEQ7RD4zan6gDo5zhm59GTDvKhN1PSPCzrKo1KkbGGxHQ4LLCGmqi9siQoLgap1KAwJUAgSk3657AVurti",
  "key18": "5gCbPZpKGkJJKkWQersT9fQygPjW2hTntHTMjvdcH6KjmzJcJ1RNXKf5gEk9v3T2D4BQivTxXVu5bydQtR5KBMMx",
  "key19": "5djSP5Cz9Qa3eXjesZZTMivdEizpXKe7n6wj1v5zsAV5TCjrwmf4dJevhqY3NR34sQS8aGHKz6B9tYQQriaQNMVr",
  "key20": "3A6roke4WvbZQrj9SEKVzM9m2xryedJSa8PVngH4YZxjmqQ9pdBGn1PVswKFHCVXagEMAuBnF25dni8sBZBsPqhF",
  "key21": "4D9XFvqx5dNNf1HPCfPXeozbHr72GyhXqnrwq6uNuXuvHQurP2rJkAkEXgaLLX5C6niUcFezPVZDBcMHcvQDJWZR",
  "key22": "67U1Ya6ff8a1Nn1Y8sLs1Wv6NyDs6vbgbidpJy2jqaUvzeGG5G3RVxEvaYnefKVu5y44vF6yTpbWfRDT1Q8GXTh7",
  "key23": "xagqCo3BwLrbY4nuydLGD2ZQdqaB6BPi8oq2PXBxCrm7rBGYc2VNuf2hbYG2r4w2eYzzyW8dWQoV86oZzH4oYft",
  "key24": "3UJtBoPjTny5B7T5vA6TdF3UFA9FLBasHJTfBUhXUvmaBFzRg7NKvadSVjuhvGJ62JzZn5FyREJujauRV98psmMd",
  "key25": "3XNma12RACxzc7ykA8R6nsdyVYmdDbVmikrSyLDL4sjn9wrrwBnejqSe3Rr2go1qpxC6QzDKeggB9iq7R2FuDunK",
  "key26": "3Sj8foWJ4hNUNz9JGQthFiRSY9aQ65wkeQrMtxtT9SScHxasX3Ha99LpGr7Xn3ePSLLB3bcoX9FXgrHK4HRmvDag",
  "key27": "Yz3H7X8ULfQHNva565kLDoSHbpJdhLip69cHKhuSjCpHE1SdNXTS8KVuwPvi1Qak9Bzg2njS3N77oo4tznfq1UC",
  "key28": "4h2w7r2apwj5ebHhmBjjMUwhcNnUpdXtZrNbYM2pHyFbtYNxhpuXhoPZeoRD8tjWrJL8T2PZnCeBbyjRzug5FAEB",
  "key29": "MNog21Cip8JwecZ2JuNqM1EfXjaiW1y9GnucChYcrwTRAZ2nbYWPKFTGdDpnrppgdCCPn1ZxAhYX5bSfjQzX7UZ",
  "key30": "5TVhuwkBiRVQYSAMdyWbqSqohqcKepvSCHYSkVRChBX5MwPqQjwxwcDAncjgidKB9PiNxE8XJmXoQowF9c3AkTAh",
  "key31": "3sXzke6ezgMQA7rwn7f3s8LR92mgFBp9s6ekixYpc4u2TntJpFX7RVMZRJrSPuquTxPswcyXBoiWMpM73hcKBURG",
  "key32": "4u9zk11aLsEeP2tEksbi9GN58BuT5djkX1EBJT5eGTycuMAbJjjy5Gzw5oAU5fnVLHweqHCVySCDgz5W4WGvcikJ",
  "key33": "4qpwVb9qvhtN1SWbEDRynHVYRb5CMSjaMFCETrSNyvpTa4zsuZRYvm9pz6xKwZeoZPPzHMCRPWjusTjF15JkTf65",
  "key34": "hvDMCQWs8NUPdrYYhrHyxrGWau3kNL2ZXdqTvPFEMB2NvgufHnFkvB5fRJVFQiMwhFFt7qp14Z7ixiEbKGNFwtz",
  "key35": "4uJYsSS5etpkkGnzCWpTxvLnK2Nf7cHLDksnCWMeUFHgoAXjVHiuHEAVFzZNMRckrHyPK6HYxmXhnGWDEhh1z8L8",
  "key36": "4FC1NjCWYPW9pU6EoFzDiLdBjJok4zNBwqEHXnikZY7EtbBo2E9yGRv9GUeLPkS88pnG8gsKNsRTMjrzqPbobTur",
  "key37": "dy6Qi5SQaziRqDYUPFovYiShTmfzNADNuBBWqGkcQtnecrMSKkZgFtq7YZ4MtjuzePPuz13v3djsJJfQfF6QyYk"
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
