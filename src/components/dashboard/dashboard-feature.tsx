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
    "4vtNQLFJeC7b3ApjPjSTB6u5o15LJvJmr94K9c65UZWLdLSaQjxPgpQLD5XYve9Bbnonv8W43rwFNVRNsoKNoNnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58q3PJQJt48Bz53Mb3XNFkW4UsZufb9aSSVvZuGQqZCciKa1CHV8fXnMQxQ19mhgc27r9orBP6Bs5mgHzXinRDJX",
  "key1": "2pN8F31A9jBqzuZyxfnUAygM3tAQd9ZqNmfADV2inHah7haN97D5p2bEEHp6nkimULT4ytuvk2FJbcBxbZdm7ZeE",
  "key2": "37ApumCftV8aQLW3Lk92tstbC1WEPSdkFLt4PGXNDRmDJsAtoiW9Zyoujin9kdWua8DfXM1cVXFXsocsCoi4jDZ8",
  "key3": "2UMEp1KQLiiaYGPw7W5SFLbDaSPTDJZCcmsRRQte1CtSAg9aduifCmkH2JLnCjvHi1Zh3FXcrLDW9JhqrDLn1tKw",
  "key4": "3tX9S6uYkxCokrUP2fxx9EdVKEAjtXSUKmu6PxLz3nuPCFRofoowMnCt8GywHqVpYmt5MvdRBiGWYcMSwjsPHUaz",
  "key5": "2Ns3N8m6gVxBJNDcBf7aaA8GATiwm5pVPAY8BaYpR4yhHfXL4bEuw2BT6TLnPJzKuwrK9NuWQ6HkghJqFnnGSrYi",
  "key6": "3k8VTpcJKfMyTkNATfz5PraSSgzWepMfUC5UVGq8gSTyeCTRtBcJLcxH2NMmYf7L2HzEyLbWiYuQH3ASqtYuvmy",
  "key7": "cmab9kgZVFg2JduDtcRkazTw59cdt9xD5GRzZDNxn9y3ZDvXPYd9QrsYzBvCaveRDCdneFm2vbiG5C96En7DRxU",
  "key8": "2UUJm7w3PdHjcYPTjjBRhpB7Gma2pAixpEAhP2jdVN2uedJ9HQxGXhmdXBCb7sNWK8bSvurQdq2LSvy5hhg7YVSb",
  "key9": "3AZtJYcpaBHJRFyMq3rr1Tk6HoeTF1u9pUuJxihP9ev6w4UFpcikt5mkHQu6TJLJqBQd3bto8Wc1YriWPvj9KmJM",
  "key10": "2fYuRGSveaZzCCqsuuQMagR8RE57s6ZDL1eKrtNZRSMZuGD9sSz6W1zRmjZA6x5xYB3HiY1cmKycFv9yxDy7ktzC",
  "key11": "3DnVgyrectZK42HqDmyuYF5NQhNmJEtAoNH11wqXQSnFMw94zGhW2gaYkA2xbuJWCj25DcPG1z2fCyVAsRgsWanE",
  "key12": "25YAwQVjobHugT9ZKRcDSMd773x2FdRrrDczcuZ7e7vfX9GuYZp1h4QfZLW7BNDejAkEm3qhGB3TANKLvtY32vhy",
  "key13": "22bp6uD9PUbgcXgQZvSJXx6TebwvFq6jugd59Pp3cVYKmTHHPPdorrwT9pxai7CakQWtdEYevqvWGHJvKY8sB29j",
  "key14": "2wHuoehGPtFUgq8yS44g8Q5EJVaLFEQFdCM8Qk6cmf4SN25v6wafei5WqoJeKKhZZPKmMYdwGqiRSUWXDGRi2Up9",
  "key15": "5qaSsmzPHiB13hvyUb16qhf6wKXS7xjsDxFbrdebniRGqca6YyLAgmf3XpCdrHdoWgGAuuZwSiAzndVjSuvsPwHA",
  "key16": "xxF5Pdh1KEk5gbvBQdj6Asc8e4j4WuHys3U879ERf8EX6MP6atu7TV97qPTVjTt15j1CQajQGEgUwjpZe95faLE",
  "key17": "3AATCEC2Qopb2vEAm3Aw7c6QpQBBjwnUGDe1t7DDAiPWz4Sw1e7EM6YGTQ2YAyvXPnvrLv9eS6rB5yGjNosYGdAM",
  "key18": "4z7coLiKUsXQvjwiQ3m7E5NGYM2W7C4X75Ljeajx4bT6vPLvR4XFg4LVh1C5pJSiUxp5dfGQPn8eYAwrN351vkkS",
  "key19": "4mn14zd16KJDHuXFJ9ZTLw5DftahmCQRvMuCmGzwUzNuCFoP7JuwtgGUhnYEUMU32a3CUPhx9wAK5U8VoJzhy5s6",
  "key20": "3UcyUpQiNZ6pWq91iLNLheMXDS1gmt2NK2tp71JTXvGBNiniB9vVwzK5Mz262pjtpFvFme6x5irNdq3qNvkX9oFU",
  "key21": "5b7BWVSg89jkLhPKATkxZRtjt5QnTiFZzr2KuBM3FQDcJPcTebRQWjHeBiUB9Lg91sns3yJ4NnCGpjLzVTVZBVFR",
  "key22": "5kDcWUhJ61r3jYd5joxgu99kokUyMSye26SSE1Ewd3VChePHywUAJpczSxmPJQuZkGWFqkDhc4zMP6K1Ve7VSafT",
  "key23": "LagB6uh8VHVsQ9vCU58eY5bhvG9SL7xn1PjJQEFDH1W4vYjcHJC2LvPVaWDNmeJPFZzeNpitv73TeFt4NhEtB3k",
  "key24": "aD2u5AX356iKtMNBRgLVozhnq4e1X8qaA7vtnNhXpWfFrWrQdY6NknagW84huCMPYhJBwPoTnAq5f1BdhXyK4Xx",
  "key25": "2ESzmoWLqzqK1bHFZ1s6nnv1pDxiVjHMFhEjt52HWia48DUa6fBPY9rEYhVCadtxUqB2YsYz1u4EkPueqLrtKdpa",
  "key26": "3ytLzmikbkRN68LErSrNCSEr7UVPc87D4jnb5GPGZwruiFddPkqXoifn3N22HFUFQNPZ4hRoUT9jxwWmyBxCCC2w",
  "key27": "hXTA73bcDoRnpk6Ty99b5JMkXDX6pGzybY3YX6aEqzqM99syrmKVRBAS2jhNVgVDKVYPCgdjMLQAQjhgazAishE",
  "key28": "5yAEdkCQzPEsVMhoAN4oKmBybTsf3GntyVLq3bmQubTKu9kZXGegC7Jv78kVEpZGCXQBQbwTkcg95e3cWY3m8mbc",
  "key29": "4YCPwrRa9BScQBDZcSDrEx3pnPqbNqR6n3DpwHgFiEvTmD7SWM6Yc6tYHGY8b6xhsU8qecHDDYm7kFLN6mzi96E1",
  "key30": "4AiafARkoRoyUzVMvN4KLx5TvQNGzpphat9Bwd2UmH9TH2B4uiWCZcfC13w9GFyPNkMwRowFNa7885fVZqo7VphW",
  "key31": "4Lt7egi3qiC9zQBqj3VtqV7XtjYk9uSh8VMbvPgxmfM1ZXYrr18VwVmJaS9P2QGwBWkSmWoLrR6qZw4M7n54H9mb",
  "key32": "3zz8FyarLoCFrBdH5QDCDkgv8gRUVbTi6xLC2CKt7zqPc12qUGcWU33b5ww7qdUcEu4YhjMEtTaoFvEDrzXz2qgu",
  "key33": "5SKcDBXiWuenzXdWbRDZ6pC8gx41Wigvnf5N3xXL81aC6nvb74phE47xN3E4bucTDo9quTmKFvGLpmT6u5q5aSPU",
  "key34": "63cJohsqAfQaSSUP5XQKr9GP3GhgBGjiqgVZqLYPCFFxmw4rbGfUtP2jsnW8Kb7rksFb4BsNihbCKfgbMPuwQNAH",
  "key35": "4Dp2848ikfsnU3pfhth53sCAKHwFDsQpE5csm5kVExKMbjumxUhpckkJ5TEHg3hJ774EySW61h19kncKBtfoBd9C",
  "key36": "WBpyWm34srKADGEpNXb1vPVwefVutb3fiaHLKFnZ5JJXvqmNTsUFGvT1ahsmzVnwN3M1eswbYr1pWB1Tuc9T1sn",
  "key37": "5YziqFzkg7pHFtzQPJxfMVp1HTyYFDAoC6XEoTtpBcH4K6bhatqDtF8QWv91zmNAaHjzMKqWSTagjBes6zJJh8EB",
  "key38": "3DqK3U8B1ZhzM7AonDdyfpwNCkWnbocE7nsio5MrHRNhpsfv8yLWo9nyWaoTdRX4t5Mr9CjKgsJ56nFs82hNJ5t5",
  "key39": "2pwrJaPhParDnfxWCDYJRLwe3MLhnqiqjorMWXPVD5orrJR1bjjf28WfEqYWxSESFCJrWTGYEs6e9GSwohj3q2bL",
  "key40": "NXHUBvoP5pteKB9dWGndVaFJqqVPBGYVVY4uS57aBiwwk6nuwkgXV3gxoyu21KKQNxnQHGbJPPFrjDwFEdNCygx",
  "key41": "25Uix7sW1wG731iuXBtfFp5evpmkgvNf4XEVAb6eR86U8hghjFrobpkdGB6HBJshq9p7iMnHUnii8K6QxAprj7Wn",
  "key42": "2H2fp2dk4NzL8GHmEnwgrrF54e1y4K1AYg5GAmh4CS3Tm1oXBAAEmaTDy9ET1b3CfSRazvAkxcJ5F6t3q5NGCyLT",
  "key43": "22ming4jUEzr35eELxThPmZRkr8YptXsEK3gufuAj738HrVehALxrLoTX3jASVcjYoQVAPm6dhuCk9qtPBtfjztW",
  "key44": "2FD6tCjxVGUcwnR8G8viiKjcCgPYa7NhpC9GSUbGZ517iNtk6aycviK7ne9Jq1BoNA3uM7WVJxAbStdKDq9ZUC35",
  "key45": "oDYTuqUd1vwrGUpzvJwMphvciaVqQhQUeRLiLh2qDxJvSvhZah6KGx65MsuhV3XB6S5q199RpUycHJjSVLqKrcd",
  "key46": "4w6HDCGdur9BRi8zFVxasNhU4sQZAqqDUfhwgqeFozqXmFDd5SFT4AyX1WNoYmHzYZoAmmoWShR57X2qYJKCjaeT",
  "key47": "MgGJDuWFCBZmEaTPGcJFLyjx7GshpA87V8ZTpm4Zk7gPVmckzncJWoAfeAnKhTTCnLCuEDv9ihwzUHnKNSdAKTT",
  "key48": "2pVU7WwpxGE4GPH8auBFbSRtAUWduhn9Fc8WF4WpuWvBXTJotidDzf8teMz1CtbKrGGD2GEvF5dRvQgMyZKHTrmX"
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
