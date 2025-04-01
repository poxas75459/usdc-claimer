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
    "GzvgHK71ASRQ11qWPN3nSBecj7bEKaYvhrtr1QiZwGodfbCSj6nU5ovK9MzboNEEckwRKK58zJkt7jSpZ74hv2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yMcPMjTwxDUCirftbZAnRARGAVDYzhp2rkS4ZEtWREQsjwsSTyNf5Wu8ZcEUKefWPVFyZ3c2WJoCQB5NrZhErjg",
  "key1": "38ii6AN1U18MUwBWc5sTqKVgk2kreSyxQiAf7NWFmESy9yFRMpgZKiRXxXErYHdQrsHjsKvxivoLLozBwWzAMgrV",
  "key2": "fcL3AfYys4icmnfeTR8oKNnndumQssXak6b5rzRrjydXY6dwfHe1Edahufo9oW3oxHQE7wSJkBDfBBN9Jks4T5u",
  "key3": "5csh7zrvm5Wcp1brtBk8TdeQPE92fyrFRsHfqBmh5BWeQKeGQYAkXLkcd5hJAY7eDS6CtSjGTSWWMcQr2PQARm5d",
  "key4": "LRs62steVtsMGL5geycGTuwvpCPJeeEkHE8r9krrJuRrUGgUwXMqBZB2Zfv6cdWreRLPgtj6G83EfPBXcKuKWWX",
  "key5": "4ukeBtrTffVmi469LT4wKN37rMwQai2GxCnHsbrK4zthkxLqtawMgMeZRsukeoAaXBmyoTuPsb3N3ZiA4HRiVE3e",
  "key6": "55wysMQurCMMx3z2SuXs5WACHGvizGFKjw2qXLsTYqivwtpX2jQBUwAMufd3orDQLzyhXCDN3icUAC4a7gni2cWS",
  "key7": "2xGFgLjQJAHmbym38UVjbedDtzHmPdbHgcFSgLuhVX2y5vPnyAHaBrmhHEyT1rbGGbfnT1wTNNG76xb8wDnf2x48",
  "key8": "7r6oBH117PwxJhdKY4XejmCsa5PwBBAgftn8FP1zekPiH2HFSriGZYxEoAMvsvGPyqbtEgLh6B6UVLFTcjyXnDa",
  "key9": "3PY42hcYcHULiMbAT3w9N1rQKknTDTvSaCs8ippQ2jp8chBTUbr9ShqUJYtFZNMvc3swNrKY2XN1ww3i1kg5aYtW",
  "key10": "3tuUrtkHK2FyhkHKpkXoSaqGA5UvVU1rHPY4qcGDRSBYrPbWG7FbneY6e1KrwygrsaUsrRQrJAeRrxpUqMPwbvTf",
  "key11": "3RkisKD45UPKNwufQFxZN1KsCtRGqGERVTGKj2uzDX3azCcGuZoenEfGFmFdouaNo54wkTEAQ1aU2ZqNN1Ki5JSD",
  "key12": "29MoQVjudUcWj3WawW8eqhj2iubXfiqKR3UgMp6BKzLtj4CMUEPiunT6xjoN1QNYTL5xwDF2UiFUtuUhnmD7rqXt",
  "key13": "fVsRo5fC4mQQbYAGCoT6ea2juCdmSev6fbQpkhBWvHBGBxzTE7inZB4RJJwGj9QcpMFeex2NUaphwc8i5uMKjkJ",
  "key14": "2jDxyQaPwM5gWCKyGUXExtxQ5wzWckX9DcAwA79EE8Qf4a66S6574TnvvXzexmugvmLHEVgUyUJBKiJimKFhr5DZ",
  "key15": "3HMhuiZfeRNYugi9kbDEiRFnPvEc2ELWnWknqS7RkDaX7p8hn2WcsHY7Jxq1jsWfhXfyWxeSmthCSDoSJCa9kVzW",
  "key16": "4SCCcrirH5hjYNrZUvDXvCDpZ2SQsT2rzfZrcCQfzQZsh5kZ93T35ShjLRQYyf14MFfcaH4udgwHEyEjoex6sLdw",
  "key17": "4PMkCbZjRecFEJtLAgv8M2oJiUtiqWiQkwiidqc5foRQZEFQ8Wntq6gH3VLmg29rtYM8aJojVayjuoJxiVWLrJmY",
  "key18": "42VXURaUwyZAucGW1srEA4WcDQTH5m2bzsjqMtqB8MT5PrUPUjHQx99cAN9aGb2k1uMhWoLhZVPCVhsFaq7yiT6z",
  "key19": "2zWEqomTHDp17JrqBX7qPdAqW4BUb5GbopfCJmFZey1GgqM6hrY6sjJz8vzV2gsYjRsgSS7xWgMxjGeUPRd5j6ap",
  "key20": "4Xq7BxCMcff9Y18yxhUbxoUUuFCAQvtXDE9jsHFM1mnQy1vfMUBo4fysWwq9sQMLwPhw1N7C6ps2i63v1hp28R76",
  "key21": "3Er7cz5ZFGnwWiwSV9GhArKQ33WezDt8xJczksYKhafMFWXbL9k5TviWQSHNjUubxQLgvoYiDrvLJvEPwaY1i1ZR",
  "key22": "4EGtJLTDx4u77vFL2HeCZgXoZgcaX8jVzwsAErL99oDryGHP41aCGAQ1q8RabmVWMhanQAiBetJBA6LMZ82wycDa",
  "key23": "3KLyMjyxjqaSKcZJN49srhJKK2shi3VkVEQK4egJ8nq6QgMAASNdTKLPnbDwg4Agjr16g5w2YBtYGKpDBedQawVu",
  "key24": "5vbTQ6PkYpv85TCf4BQRfHjmA4peJGMUxs4BFR6AiqbMMiUGJjWE8pugNJmgRcfwxkTqVZ8GCgpYNujx4iNvGEA4",
  "key25": "2i9q3MQAt1NhevftcqvoQgRoSJovYNzZskdGKqSUXM6Yw4XYH8ZB6WwNafLH19toaD9QEQjGzKwNrCGFMaWQMHof",
  "key26": "2onjsbTCyn2Vu6D1p9vAPDbnbFHtVE2vgvpyPMvSjG6Tb8rEGjEpAQA9vK5XpN7nxCfgKH77VKauRMa3nPnts9kK",
  "key27": "5ok1kkNbvAXGcx2cHGeUMyCaSCEyZgM1ghFVedZD7xe1t1tpLhugmnGQVDEUp3yZxBA8Q4VBkiryNZWmrSvpbnam",
  "key28": "21oRFpiSvuaBTDe7nGRFqAT7BYSCjddV44AetQT9X7oLtr34Yabg4aabQbtP1Ns7JsWE7imMiGCTh1qpG8DabqxT",
  "key29": "2oYgAAh6mf86wyc7YP8RX92wjnAu39dhNqwssendvhKwhVZLpLGr8oeBYTNcKGWQ3DGSmY4A9xbM3yAC7xqDf4kT",
  "key30": "4Jm4TnXaQfykHovewPRrezA9BNevsyUP4Z3sEfMTjE8hJhGKp2zfwwvCD4ajBxdNE6RRkuJE8FejrrKwy3Bn7QDo",
  "key31": "4CzbDNw7PdN6JpEXihDXP1mAVADCckqFJxcjx2msAc5bVqBV8jYQHoxCyzByx9dLtPGVqEhtZaa1FUXZDpGaPdLg",
  "key32": "5hRCLJyoqQsUvCQx6mC6wvHrS5tZzyXvZnejDFk9Hkx6W8KbKC26wEWCavU5btHJ49bsmQseezpgcJmpGZBfQN7N",
  "key33": "2FEFEb3WoKjW2ttDquSQtxYSHowrt7h9HCmnz22LbgXuUGaQTexXwDoBuuLt5CdvD81DJnyMzeJE7q2TrxsBVkPh",
  "key34": "2uc3BookUvNVvmfpwVxtioLLHSbDJ9zU5AUoQhWisnNX3RF9PqnmhzmdWD4Ny3WnQ6PLBr5wrJBaicVHi4GxZFft",
  "key35": "3Zgxpfn9qUbQnLVTK48FrwqJppA9nWCgbeQnzz5cWhUmzCeJYBQzQM87zuCjrmjpKU4zADAiwS8SZWcqS9LFtjrx",
  "key36": "kKBM2vkyAJz7caEEcoVP4j86KxuF37f7v2hwZgQvZrU6nDPjPZTbyjDd8hmBT6EYVd6jkFK1cnRFM9F1CfzoaGd",
  "key37": "5hP6cmG15PwMtpDjkxgH7gjsjDQWVVxkrqYnRR9LamdSLsVuBifeEYZDmEi1vpf7kyXEFD1kNJF1T1xHCzKc7LUh",
  "key38": "dUGohX23jdWchPqdPmzB9Bfg9aGasv3cE2YPeCCe8QeUSejjmf91g9EmC1nemvypJi1E8eisTwydGva6rhGKXbW",
  "key39": "29BdbyqmyAXDN8kh5KtrUExf1Fk91FU9PMZbgB7nouQBUcn3DCZNYzLDSCcHETQShds5qWjEaSzB5TXY8FdsxFcs",
  "key40": "5c9VEjU7XpXUt8pwSqB6YBDMAGyL5eQnsbevWnZ9R2PJQNB89bYrWQa76cABA5fFrLakkqjRmRzzXwDcr8iX6i72"
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
