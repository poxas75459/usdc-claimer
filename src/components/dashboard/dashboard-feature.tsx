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
    "443KXgk34En1EanHDAUMXSMNnE8mYnxRoa7eMm2EByUWrsheBiuAbGABVh7b4GCL7WXgjAUZJmENPCNz3m6kQKKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TWvMUHKVFWY1GPQ3WxYjEsrCNphJ5jJbCDEZd5YdHd93vAVPKXVzXJhRYVVnKzUf9BTqWf9mZHN2GKG9fgZwjWm",
  "key1": "u8Da7wLwAXEEeq1rLNkkJijvLxhDGskqKTKDZnbKJukyKrzuGny4N56A7Zd5csaSv5hAzZQBLFFsREfD11sKauV",
  "key2": "2u2p3yCJfCG8T6qtdkHs3iDas8fQ5LNtPrePqtD4CwGe8tWBYn4iRrTw7DjC7CutLCKt6tvNwHZwPgJ4hvhRTDqd",
  "key3": "2icBXWRiu6xKjJ3S6XPzaggmku8YSDKJJCfThj3u696jMMEnZXj7GTchxkxwU2Qd9E8dzafBqcteevdkyZSHChJt",
  "key4": "61MPjgB2eTTFdHMn6THAwsrpRaXrEng36j6YUZCQfLvdevaPJwraQEUPUEUzoHVJ3UfPwerRB4jCMKWqUjucKXkN",
  "key5": "28eGMjeMf3yJifo7yQNB4MVF89pRkpaMhPhf22zW8AvdTcKe3hqpWA4Z5GsgzkMLVBxoxRbh4RuhmtgkrWEMmgbD",
  "key6": "Hf6nYzfH8P3HVAqxH9c3zqshXXCRShx2iLjNGPjP3qJ2kwq8WXZ6T2bcniDobjLAfFdm3192gbgLuD5EEenLmTA",
  "key7": "5J5wKKSzC9xR2McHYsemEAqjPY5mCrXZdSPupdLREmwaCP3ATsHiG5dQ3cco6zNmqVaBBeBBy3UZsyejsom1aNHG",
  "key8": "2g9wLwHZJrDagMNPUiEkfVA4t1S8FV5LyhiKvEWR9cXaiMwuzXWvqy6ZnC7Lx9eRkgAriFEVHtYhoVmjbNU34Wit",
  "key9": "eXq1d6fJrPWKQK5hi5PZFrdExkNfUvSd5sJ4pqZZiwLk1c3GghyFpft1zZGdnzxFqPqTNQ5MFZSXTifq2Y3iSeU",
  "key10": "31jzeuU4MNoAQcXQ6p8LYZRCYAfMsri7nnP2RoAhXHt4zrFakUjkBJEVJh2cyQELiAkbYZor6TZy2WLV1STHr37V",
  "key11": "38hKXTHt16G7kGS6YsTe7X8P7bnYPhCYTzSiPv2ni3DdrMertfdsFCYkh6HT2YUqTjtPKiCzpEjHmwBZGqhQad4w",
  "key12": "3abVBcnhDxY7dnhaXUAQW6Y8coyoqimwcgsQa7zRYev4EUFAgx9WXjMF5yxGxSHTRopTtmchGjWBzzFLJDVgpjYA",
  "key13": "3vLQqbbuMccFWPWJzpVuCsUt92EUhtKpsu49aCnVGMND7dpPp7NPhWePLTtmuH6Un7u7n3mNKUSz1asSEW6vKjgc",
  "key14": "2pEZqLAW6MsDNCvT2faPAgaZncVMRShQ99u1hPh4rBFZfJo6zdpBLic8TbXuJW9ohL8gSSP6c4CJDqwzagK2VE2H",
  "key15": "2siBrebvfv39m1NHJdqWmhgV7JhYv7My5bVV2P4firwZU1rJG5XiKtzjfKd5iV9E8PdbZ1mktiaTRobj4XdDtwXX",
  "key16": "2ThsxUp2j2EgJsKoRnLKWciCPd2XBW5Wr9FmTgkouXKmzPnfUD7JD9q4gSbVSzMvbavLhSUzZuwEciiMH9nKGzwe",
  "key17": "5jGqwsLobUBaBfvPaSTwsFKnAEf3ittW7U5gGhpsTD2rokVRmMMLnEed4ZkQB2x3V35pFuLs82tvj37EsEGWXYQq",
  "key18": "4f9dXgv3BDFk5DWLxPvg5ZffXcFJFL5F6yJwrK6177fn3AN7ps2cjLYB16v3afSR8iVNfFPwe1kx6HtzsB7Kswta",
  "key19": "474mh3TYUWk9R2vu7VmHSPojst8rixqyE51sYJTeaUS5kDeb1oWd7iro4MzJgwi7u9pAP3BmWnAjEAL36GkXr8wr",
  "key20": "5Ya2KYGwRLfryk8n8xeA6Md81dJJMNvCiA5LnbLPdyipeeRnj4dChBMqq8aDUUkDZEABT2LDWkkMhQdQa8PyuMMu",
  "key21": "3bXakmvLfjq4AxQFqTQmL5AehembHhVzBY5KpyYW4oJgTVLwEjsU5tU7GNW9vz1ztaYPP3DyAsaGD8FQjvt3RHg8",
  "key22": "5DJHS8ZsP13oTFBmxJBpCMcqFsAMh2HQrRqjNtia3p6rhiYLfD6h5UrNyk42549bYE5ywwiMkLgQwncwwbSHrBpL",
  "key23": "jh9SfxqvBZ6TgSXdk15FQPj4uCN6M9TBTqTWCkwUWAa7nFyDF1AyNZg5qoUPoAD5j7iCVwDvztGRTR1JGMWRpcT",
  "key24": "D46c9imS1dcMeNs885xcRu2QqXK8osTS8t7oN5JbX5ZuDsR6XFUpSrJ8ajj8yrawyukypYcTBUK9gW1Ja1aRrJH",
  "key25": "3Smg5vRmJdFzYN6br5TnE678uYcZiR3ZmTziY7gYcXYQzPRkkQmJhNyKMiXAa1AkQnNVXE2yggscT92PzGimdGUv",
  "key26": "5n633o65GHhLob4MYotXmyQG95SxEwhsniScEmVrR4T39yFeTGSuioXq81h8TwN2QRkCFESKvJ4DFwHqXC6XMDRD",
  "key27": "2vTN5QoWrWGtjqS6s4VSrz6t5EQKJuFDHcegEcrMthp326AT7qsqLmSnVpeR8QzVduotr6bk1Y7BHFJcajzePyG5",
  "key28": "4hUjB7nB92ZSmPr6V3z8uKejDrkwR6RN75ek5hrer6Yt36fziL7SjsBWF88L3ACqdGFMDH1c4UcYfWLsjLhEaPBY",
  "key29": "2KqBtVr9mrhh3g7vQQdrCpj7nZhEu1VWHQdyfPBbW5n9iK2LCRbNHUowcqWjPBVvuQXTMbTffXR7iczU16UtrLUK",
  "key30": "5CjqtGxRpLcyBnpMckqSqMjmMfjjur22B11woUNAbuTeKHRCNABkvXNMW8pN3N5csELLKPmdfcrptXtm1ZXMiTq7",
  "key31": "ijeUiUUn26SUPvrZueWzZ8oayj7K4GHPYR5mvdcqByWAq3aHdJY4URpXpTow9jUkWwDZDH861ByVUz8SHk3PFYX",
  "key32": "epwmLuXA4rPnfrTWk7srh7yci8fDA9rixCggDiSbqN31mFGTjApxzdER69yyeQPeVVfPjotX1iAeoLbmVK1FvZa",
  "key33": "2VySShhi1We2Kt5zxBtoa7mhZqqHELCQzDCThbcNEEz7oWTHSwmDvTjCj5L1i34FdPGzLHyYsKJgfFPf4D11Cyxi",
  "key34": "j1H4mQEzvrdrPxw6yASywa1zMz9u7ehWF4CNX3UvxSHHNEeTNamrjDeLJJGFceggv2j5exx6AVCuf84vDjrT22b",
  "key35": "2UBPwrw1oTihnnDLHCzqyqRy6BhrHk1G9s9gNVs7YynQTzyQJSbiVHV67oMWBgoTiRuQH2XSGvFVDuco1TtT1NJV",
  "key36": "FVruwWJGj3FP47PRzwgXwB4Z42jXRXL7iH8pKA6WBBrTwiPAA4emcwyat7BcUoEWk42X1hMgWrtWBFuAtC18xKG",
  "key37": "4p6rHNTZrrzkpBwESnoYwJSLQxMRzPMqt4wiKcvEABZnzQMFdtBrh1Lqaw3VBRj8WbVy2V2X1tk9mdXPtnWMHnwU"
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
