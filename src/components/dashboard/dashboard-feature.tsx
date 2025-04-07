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
    "XA26S6q9qUjFEZHU9SABSgS3pBSSk22BYYxq5w5qLr92FiNACMWojDGXdHDnFe7Y38hAG1SmhnnmtheqR4vktTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WUt6p4GG7kDPnTia3NQ6R5QDzyt57oeJrSdgjqMSmm3UWV5Xg6DeZVYA9sS3q2txfi9iTPMVNwVy5aSG5LNxs52",
  "key1": "32Pto2vFNereyR2jcQLWy5Z8tjtNQ6miavyFqaFAuEaRArxSaHJzL6QvaaKjTgPj884RUk6JEgu6AWrbcBx2zduY",
  "key2": "4pTTGKdsrFJxe1hiYZB2D8Jyh3qyZdUS9BWsJHRepd2moSRowwPW8u3jmFbPaWPdtuRiHkfuBfs1qARJmP4UQ6Yb",
  "key3": "KSoVZCSNNARQLBeyWEP2g39MXEt1XnVZzU7B1TqqntenGjzfg4YhJFgxvah5TZ5mHxmEUfZQHm4RVUPzLGNmzo4",
  "key4": "3e4HM7APFBq4ZPb3Ea5w88SLEX98VBDPTgWqzvUqF7rhKjbGJ9PPkb36WcfxhPdvt4K7PPXeZnaU6EDpDif32JVc",
  "key5": "4hEZoGeUB71jp5Tm9eGRqcnUTiSvVJKKxYoTmuPvY26TFwqVdDfa8a5zeZ9NWqWpDbr7KB6bvUVMTbudPqP2kP88",
  "key6": "HYGcthHZM6oSYpoyvGSGCcTZ5mXGjdYhSFs1zVETkMbQVVWkZVaCu1wbsLehbHY1WgTyCytVnQaVjiKbPFh9n3M",
  "key7": "7svg6RoBM4bCFcdKubUDUHdPqQ4WTuDxRBCCYdY2UNvAqQ5g7mzhMMCpvonLFmXBaTzuShJopTWp3QZZijKcVVJ",
  "key8": "5sSKq3SwPBuPEjngkabQCLdWtSLdtR1nxQBkbTiKTX1fNUCD1DJ7fMHaqbBCuTS5vYCEG2f5wNtoHE9m5No98syz",
  "key9": "3ykNKazedobxBd65PddVXWsFbUQefre1J7Bfk4YZ8zMdFaJZ2qSo2AZcq2QevpyagsyTxKw9ifPXGpUAeK8YsL6R",
  "key10": "3PpFLqkZMhQ3FxXHmDSJqKVZvqQASW2qLTLf1ZdurEGhkeD2VyWzhTqpaScFEKPDNNZXjjMi8cK46JjuQG8cnY3",
  "key11": "53R1Y4JbgPEpMm13jxeDMDy2wH6xuPCpJzncjhuSiAyawaK3z3khq2G1LN46GMRdaEJH7GMkEBWjfSxad92XmCYC",
  "key12": "4cbBJUEeJyK8phsbMkv3TMubX9VjdJWPfgqg1BWtvVmJux8ZmgYZvFU3huNp2APsgG6KbK9bc4GZPecogwYBdnVh",
  "key13": "53rm3ApybuwxNXA9MxRn6MSDktn1wdGhBrEsnZ3ZiYyhU2SCVrrYWvqYVNzF6XiVWpegd3FcRpgw61GWKvskqfE7",
  "key14": "3PeLXbZjQRG1tDstBRJKpVjJiPfyAtrq6VTWTBQUGnCHj5bN9SfPcRxvFVz6uSo9V8KHVPSQFhZtyuB1heswAkYq",
  "key15": "3oPdy9hKLZGZJE3mAiwKGE4ZbqbADR3YM7nURccgELdodxeHzHqqY9jzupcgdXQP5VcfQx6JQfcaTyvkJ5BtAMaY",
  "key16": "56Z2bqamRUPECsbMdP6wkWNRcviJ8awAi5pmoxrAJhRhJEDaPgfF7TxJ3nYksJmDJEp1VBixAHVS7F7p2i8sQpQF",
  "key17": "2hPnvsuZf21NUEScUHaxBTggxe8tbwnJWSy116axPFoTRyYfxNHHnfZy9wR68Tcc4LrAL6NDKWBY3KnJTtFtygde",
  "key18": "3rsAf3gLzyaURGyU6FijoLRkUrCQ4f8pN2FduQ1v1KtVW78UrE91XdMEc5WNbf11xMVfTLR8SgCbyMh4z6XQH3wX",
  "key19": "5ktYe6KanXNNTgyjtNGMr46kwJHSYfjw1kPoquSo4fCHMUkZp5y2hYTTdd27w4JAdZvj8J8pnZFeur5uDT1fpGkk",
  "key20": "5PtpLD2TvnHNDEwcTYjvn2CCRyCeN85gDttwyGRKRTPDQ3LDGSMucS678BLpaFbATzYPc6xfNFFvD2PusLcCbBwY",
  "key21": "66Mi7YQoMjPE4G5oo5iNhPyGHoBdvHCzEUr2NbG6mDGgEWS4dzS4xgQQzJz3x3eBVxgJbi8CurKKTG2F6UrWHJyr",
  "key22": "3pdCnVYJbPe22UF9uJszcUSvxo18GSf5MXeWpVqDo5Je4jvLQpBqVPHNgBbpNjCXaNieHyaqfFjvRkvFuCJy1yur",
  "key23": "s8BiX2WudSf7t8ET5HiW93QcETNoCH1veDNePGxwPeoDyk8Cy5A7E1Z9KXvZEJ5k3ZpfCPrmQH2F4xGTYkZu1mU",
  "key24": "3pCct1zjGvJApWVNZqiboHtHxc3wmX4KqbBnAhKseFsS56ukB2ihsPEArzTB86W2ztnsCHD41r3hoEDdxfQAhw2T",
  "key25": "4hmrpYSJbt5HYjewY3j6vWJ21mBJ9WuoTTTuhwdTLt6sihMLUQkS7rMjatcuBDhDehF1BSfRTJUeDFNLowGy3uj7",
  "key26": "PwuZnnyWKkbZaqZ5mxo9a6yWzufhj8suzG3ZG4yGvBgdXunUaj6TCUJDvW4S7DNNdeJ3KhJ2hca8gMtr2hLg5Py",
  "key27": "2xPWXjy1JYDjriu4MeXQaSvxDdqizsKuurTz7u5susJJtfuLdQhJJ5hVetZQNVcDoazvpCvWuZhBE4Paecra8sUT",
  "key28": "5V5F7XQGd8BcqX792hMvFmrDLCSs1kUYUG4AveicGUfB45hagdZD1Xj9mLax2t1DjD6uXE5Xso9235vP7ykTgySu",
  "key29": "qRKECHkmkFW9tEqny15vJBV4e8xNCbY3YcX6ZKVBhvq9HfjYf9gS2WvZDC3xJgEoyPAtsPi51RNW6qCyrxSa7L9",
  "key30": "3Vioh811MHKJLV8vSMGDX1Q1SdYY4LBDSGq2RcgJPs1ubA1WyFXDy9zT2bD3W4Q6oxB9Ai8qgHoLa4z2JcPzfzJD",
  "key31": "2qyHmKydghaGoLe7QNdLqnth9n3cQwX9APfx6CLvNKNGQzgKmVDtGZrS7yZZbWPtHsQn5ULhE8vGDhwBgfAkK2ZQ",
  "key32": "3DZdtGhC9Juys55DCbP8ACTKuAYX62qCinxgw9ZvPEvARKJm4ut4Kp5Cn4WS3CmokTwuA7WV4f1ndcFSYdu6jd2S",
  "key33": "1RGzWSnfAfsC7pXRrbYZhgqtPCosyMmFH4TWMkQJ91gEBFYE44BkWvDt9H5CVeg28xNvE6XnUo9eGByFegouMSk",
  "key34": "AZonkBu57FubcvKGq46QBBP4hSJP2wpFJc7YggD59vke7559HQLDbjZTzfA33YXuZ5bmYDX5jEXp2VVxJk32UUR",
  "key35": "4TmFRf7FtCaXAkBRjZBUNfSg3DAp7TUKaGNXxU3rm9DikkFYnmWPjW1S4Wb8ynbQimMbfy8EKDV1QNnJi8iHXKfD",
  "key36": "5bJWV9MyFAbqySjCeYfaLnqBE6aBbEF7pDho6Vb9tT2DtFAT6UPzDFAWHQsVmb1Z82kEimYshnRpzMwEsfXTSAyS",
  "key37": "3qnyUvQUGs31bHYephQs97PTrTyqUgw944FeVxAX3WugC7iuWSUsCiQj2LDYHcpGXi9oGVPTY9yFYXaSvcDxEjMv",
  "key38": "2wgC1Qg7u4Ut3nHGUbYw1aZ4dJKC64VkbEoLzmVMczaU5dzk7vLJWWFvx3DtQbtnUdcpGuebcutdyBKiwsqJmSDj",
  "key39": "2ChmairJAnPb9LTTf49ZE5Wp421S21WW3tXrFVjzwHBvuCy3hvQnjxikTL7uMkhBEYQngLqqRLGQ548zRXm9ZLeX"
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
