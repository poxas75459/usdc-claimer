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
    "5P2WXoGxj3KiD3zuSpTV711g8GgWsvGqDWWmPpM5LdiDnbrUrzSjbzWXrEi4om6XzBtL3K2vsq2urYiHAFPKZXeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hnkfim7ZoBFeCbzUjj49WXfCNeSmo6ivdkSEsi1qPkiEdzmAGU8JpyqfR588nVgVWxn6uBhV2FXe8mFk6npUKvN",
  "key1": "3r166bJXqb4zrWpcFeCZMqH5nAZ6EasxaoMrs1QS6jvGnTbssXzFRJcuYUkc1dPfjnPCctr6ErgdiBDxy7jHzsPi",
  "key2": "hvy5UFEVA8chkSSGLzcEcHGntMqfTSvZCBaqqR3q4b4EMcnXfCeWu4rc2qp19Pu1S1VtAFWQ59WgWfXBy4JsEgj",
  "key3": "5imCbmou6NQVUMx8FxtPrdUQ7P1JYYaJpx2C99DbJeTDTH1Ze7nkzMD4jsn42zaN6QkW2sPJxyzzfY1B81dgemnZ",
  "key4": "3cGJ6SS4DBagPuGBaH3PezhDJLNL5xfZjmgAa8WQaAr8W42QyCGDPmgBPfiLjTYjkj1NiUvQGdsanimHocjeHHQd",
  "key5": "66E7DX9P9HZybFv5wUqDn5gb5RyNT9v8VsXxkDz2KkLQ797DjRL2RJ7jnm2zNyF7XoLbXESSzi8Zwa6TRxuuD8L2",
  "key6": "4h8tbMgAwiQjEQL8N9C88UbxR84PsiiCYtTsTzR1DrTbmh83vM79FmYGwczUFPTG3Ksx5ZniiMKdwdGqFKacuRQc",
  "key7": "4L3yothcQ3SsvjEFXtysCgEvDekuxyq9tSrRyTkhgR7BtvMbVynW6PWicKVQXhuBAi4QWXSaksmZ5Q6jFSaMuEvw",
  "key8": "2dtru9p8RVeAzAxfCg9mx9njsRwjn1ihGeHo1CiQh7HWH7YE3t9iZXn3ExF2H9uvYQBLVPpUDTxayZJrJtAzWNc1",
  "key9": "5XBK4XEdxNoTmxVCrquieL9qsHXDGRYm3tnZUySGPdvYfyzMDfk42rFLeRxH2cY28GngtvDgipCnNNRzWS62pEPt",
  "key10": "K7amu3kFpcL8iANGRcJMsDqiVWunbE8XcTmJwWaKYaQK3B4yBN9LrGkgBGEwYtiCQJcfUEgWnU8SeiVyDXNMJyq",
  "key11": "4BxYHiMpRwvLgv9SMUmUWakJHjCYHjvqgUXP1rtSJtjs91V9TEWwMwwQGofuRhgeygkBZdobidkC9prs1q8pEt5L",
  "key12": "GUxsxsHKBXMvi2zAgs9SdNDDu4qRX28KBt6jrbEqaDYHNDofCtvPpKZMidQVufjkhuDWDUYpHhhAs7kAwEN2DPr",
  "key13": "5XYXrftCeWrXc9jfiqxbsaswNmHQ7ZsQjcWrEdEDtUWpEWf6o3K4BqvJkd9csHAYG8M1NgBDXmAmM2mv2oYNwM8B",
  "key14": "3cTnqe5f1SWdQoTRrbpKLEKHj9RGbRUGWQKHMeNu9FaXA2jKv2i4aGQwUw4C5JphXDgV9YHxhoYsA7BbDyy1PAQ1",
  "key15": "3kUDEbtR3k9Sxm3XqYP2Xzj7wzERB2B99wyVihA9jqnbVUNDnpocnRjaStQmNAsd1hj6Szw47fgvfDf5xQiVVQyN",
  "key16": "24JR9NaLPF6QYt7qgXVpGgV3yP7tSmwANybVZ82RGKPbKZSLaduxAwj3YZR9zetsBSGdKaXwTKCUhFUDhqh7ohnp",
  "key17": "5PsuL7pkpjUEfGVk35dL4Z6VHVS9Q5j8vqRN8pSD1KDM2ePy8yB7PmPrLBF4EsFbUwUM7KDi6yiDqxCvwkUsRdT5",
  "key18": "FCoyNWHKLHM12vA9utcFw9f8pFJJZEGhwsXA3irxLVQ5Gh6zAAtYtz596k54nJVUkgZRsRnmknRZ45CoxNNhwfZ",
  "key19": "3jUAP4gbCFtcbp9L1Xzj6kwW2Ye1YZUhqeSnGjqHcDk475RBEfBxGMRs4cKFn92KqBi2o2oaGnBPaV1dKtWQuNba",
  "key20": "2y1jqstMewWSLpXgS13fQQsRwM3dyGEUJm7AVmzfW9DeMjkj4dsEBt1YqyJ9985D4vviXeUV9sZPTCnKtvu4B82X",
  "key21": "AodVQxcEaFM2oFHppPYfdxdh4BqPi56gsMBGNXLuwz6ws4VZKzcDAzbTEnbAvwcABe2jUiAnigNwrdYL795K9f2",
  "key22": "ENbyQxWPaVsVUnyX22V89GVTUUpeCxKNjm9G6jrwn79JqMFLYP5CACGbdAKcWHv2fF4n6edxiwJagm7AaTjT28o",
  "key23": "4Yg4L2e573mkBV6H79fncSkuvTE4ZFd21o5ESN14TY8HFsE8WeaxJtRDLNNAwEkthdwEyAnwggoVfZi1gdhUaPeF",
  "key24": "2ovD2igxidkvnFzsxtUc2gWtFKPBUezBpZiqY2gzYhMXsEy1PiB5uzqnXZ5Snc1Mf3hSE2dLkpUzyX4Jjp6Sr9nk",
  "key25": "2zCgYeLRQQHC7m9aLVvBnw8w3Apkgcishug9eUwg9HdeFc2C88hNbbgm9Cvni6gagNdiEUJJkhicH8r9wKtGjHae",
  "key26": "21KinmQVu1S7ScGMhbpoqpymrQLyfRus5HWaZ2cD2pgjzpHzVpx5iXihTwosjUnpgXErhpXqa6b6eCkekCaiJaoo",
  "key27": "3eHPWr1Dp635VC4XGeDoXkNgnNwaoJ2zUFqkYdsrAo5Sbg31eX4ztgR8cw6DdDnuJjPoDBhZDKrGMPyXfKyykvuS",
  "key28": "JnEiRftLZFZHmNiT5UcSXCUnUxJWoAAgb48SbKaWrSwE2YFLovDV4X2nbiivBEn9rkbbebpYBfpoQ7vupDJcDGR",
  "key29": "3QqhAEZ6rSCYnPu61q8icEyZC5cwHTrLzmY2R6EZ4uLxULtcD62dZWqWYxvXQB4CxcmVnV2QtQN6BRbwnWG14Ttf",
  "key30": "65TcxLE5147mGdqwAiGAQQueUhQmWQfVbPG4HcdrKANHtVmCMVPHUbmjGRPSSWmbZPS6PXrAoSHbqQAwFKo4AWWv",
  "key31": "5pJGtyaHGtcQo3Jk4e6BPX4gK5EhZz7hR18TS3rm26k1paDL59BcMpxyd548zrPPuwRDFMtRHs4ShjLPniQ9JCZk",
  "key32": "EeqbiVD5c157z19fjNtyTRCffMA7c9z1xKLoPrZtWxMXHVgfE644bTRwYa8Eg4v1vi47aFDz8muswL8GJCjt9az",
  "key33": "3SE4WLLXi7SnJiNVfYkV1i4bJFNghRJS9PPy4J3fMz5X8ZEDQ4XiQmQ1vBpnEa43mBEdY7SFAAaFJYekYuYd6HhD",
  "key34": "2nGTjKSTTqd6v9ap9Cc8komMXRZqSerZnT3SZZpuvQsi5j9YL74TK2r5ac7SkQuN9KpGqtzvcoPErRtrxpTi4p3P",
  "key35": "HaJ6i3CorjeTWtLf1Z7Y9uDoWfX3qMNREb3z96ZPazYQex7xhRrA8edRqppYAVos5TDRz7vgUidc8Wic2JmEMPs",
  "key36": "3BHQp79wmcJQ7xkP9r4fzHvhPv8tbAW7sudrB2pNBonWKgMoyubu4nzDvUZMuohP6Liq7HFremVs3Ced3Aadzzs2",
  "key37": "2T7td9gtjLUKFoQsFwaDDac6hEp3ajJU2fTEU6eJ49t2yoP7CXB9TQcLs8oiSDxeFn38426zwesy5RVWPoAzYgj4",
  "key38": "3Sv2AF6UiBLrtBMiXqm1Fi3izGdBmahYEQk3xYGmCL9goWjYW5NBmSKZ9sZNJarPZzj7NQoQBeEAd9gETSMEHPw7",
  "key39": "4kMNPAmrrDBCUcnLPreiJ7XTkArMvdsz2SvQ1DU25nuehBshmfuZLvS7qGZDLP7v3C9NdFuCZkt29udVKt4s57A2",
  "key40": "2o9q5okHYTEB5jNcrSDtGXop3xGHXbAxkEqJSpL1qiUKYy3eSDjqaqLGqCRnM7hE5TGPGJqtvKvXPMKEDofxTjNc",
  "key41": "5DQv6ZFwEgs9iSBtZZHWAqx3oMTUEo1yCSh91XEMUW8cLGYaocDDCZJ3ZRVSPdgAzqEqCnVjm5CWQpdPYaCibmaH",
  "key42": "52BWkvFk8zYFZmDXozLBb7EGDncG6G9bbWdMmmg822ryD1coexnkQPthGt1tfhG83yKZ3LLNMUBpWNnbq593CcTU",
  "key43": "5Bt1MxjggEKpuPpqt6ynz9GwxyHvJ4JtoeAjnoKszPoVRDjXJLe4x82zqEtNDULr9LQAxzc2znWbyM79rnL88eGj"
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
