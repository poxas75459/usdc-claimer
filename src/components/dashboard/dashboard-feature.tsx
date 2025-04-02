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
    "DjYbUzA8NWNiyV6CdCUKZ9ZnKJR8LQBJXwtDoPusVr84oB1KyKZuJDarLj9c6aLW22ayqjsb7n2NxUGmKvcxDBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vZyQd1gu8nSudxAYVNQjoHntK9KQqkg14ngMdoQFnmifRRiqT8NCMtiMYJSaS6Uiu6DKAXGpDQvQ8qKYxuEtsim",
  "key1": "4gHP2QyMZcmQv4TWsbmg9RuJqM4JeByE35xuzHiFEY6wjqmu9MaGLiDmAawCCp365Ezy9w81V9RSGKo7CmjnE3Mw",
  "key2": "wz4K8RRRuCHEunpVA1zpek4HpGnvMVB4dBeRexkfvz2RQnT2C1HH4xo5NBmKR9BCs7Sx3SA1x8szjDqj4aaCEao",
  "key3": "YKpruzz4hiurtac4UQm5U1RfGmKkg9komRzNRCtZwAda24kawNWYS7sg2Z4XJFeb2yZrW7dEFdpQaDVQh3oNEEc",
  "key4": "o6CXz51wC158ktXwKuqeCmGrDpjEHtqsCJ1W3WaWapUbAD8rATFaMwjrSk3XMmP4Y51LABJu2uscSRJhG1NKjSf",
  "key5": "3aG6U1UmPXXUj9aUxVjhYVguK13YBmB5qMGQ47JChpBPSLwghd5AJnGenhVq6TZDDamiBKWBMsT2zpvesPt4W9rK",
  "key6": "3CKx6vrgr29zSSg5NxDALvbp4m45cCfJ4WXVGBx4Siune3tQqVDAvhaw2B32kGX2yZKpyftwiCpk4we3K4bZAhMN",
  "key7": "wnEFRe1sTDVCZ4zir4qQAUC4khQXRWrxGLt1EquDNypeChvnAzmBAdg6fB1Stdzo6LR7kB9ej9378yacAUiFsP4",
  "key8": "NnDxk2zvd5VDriwMzQkKLt74PNqP11W7K1fw1Gy7agePkzdPe7T8g7jzggFNHgGtQ6SdZsSY5tyj3VTAVcu2TzN",
  "key9": "vVQgwgsAgwSUewZAZveJkBVtrvgJfzDyk8AxC1vYUZTALq2AHBT8MLaJTDUbSmxaR2vcQmf8LoRksH3ugmuFRcU",
  "key10": "28wZhxAATJmPHQ4H34MZqju3ZA1bX2oiUaTJfRvUbootyAk8woLedUX1xvoUYSAXmTnH8kMpQowTzDnj3144fkKp",
  "key11": "4GShyMzborvHgRbxZHDD1BdmqCvHN3yZot21DFWctpZbPqwv4GGH4E8QRT3QBdmiDurRFiQkQUPEy9JRLUA1ugge",
  "key12": "2scn3FzQvjgKbCe6222QUyiQngurgeHu8NqQD7Du5cAnPEdboDvBSXV61nZ7WQXcjuRoKFgztba7ZyXKiQE3Y2Yp",
  "key13": "3SCGEbXqRnGneAZ4rUECDZF2C4GB333WWz91VqehMV8Uf2izearBpnHgtHQeSADZagDdnVDT6e7aud1FLqWgBWXH",
  "key14": "54t77VwR2RLQ8XkWDhaA7TjRKH2KohsWt6QQ3i6B4iTi8VKV6sWuykFjRqqykrrt8XST3p9Bj7De7vA6adJsUYyP",
  "key15": "5bq8t8wk1AFzs2wQ5YBDSQM68tCVa82bE4ZJ29AcxwnRQ7aukHh67NGz4mibToaaji3j9NwtyK5ynUDUyxzhFZR1",
  "key16": "2r5oaBrwAQVMzaQCjBTmrrgXMLVRCCPBNrcYJNzwaJdCCc75QYDrNQYu6Qrx4pJz18h5sr8DdUaE287vGtesGRSM",
  "key17": "QoPrqExBPqL5fh8jgt8RAiM3JcVTJpXmcjgzKUVHPQareT1iWETnqFDq7depBfjvHLPBSscgQbAmWFUeyivHg81",
  "key18": "3DZ13z9QD2XnhJcxdz6cA832sSXYrcXXg8iArpsME67SemkfeyfHYMDKRNNWr1cYf2M59Pu2Urkeo4RyNrStPZDb",
  "key19": "5mAhJgFUQVZpJMdgNw1zbUYf5XNQJSrxNQCMdVj9Nq76YMJJZi2fxo8snVsUbDeK6t7bRkYsdjKcuNJY89y4o9jo",
  "key20": "32asjATYJ3VWS1uYX525XBjUAnok7sEe61RuD88GR11KMPyiaKLi8i2wPKtYurYjfRX6antcTDt3r5APqv68JdjV",
  "key21": "32LNgGU4mdE7t43KQdsxjMnEeAn5dxEXhtngqLTBJui8tF7LsroWcRGGp99s5aGLxXmY8q5Lkp98qz8v2wt9NhHM",
  "key22": "5GBjJdEnhgLUnsyfZWrazFSuE87SU4KAQb2vWW9fQuYLzE7wCxFVnjtAgzemTMubWeWNf7z7kPCNS91DRWiGPezJ",
  "key23": "2wxwTGrurQ2wQuovarc6QME9kuBniYGeiRQacQpcovig1FYMfUiTwEaiPPfJZdFoJy9i8EP5eRBfHr8uw1RdtPNz",
  "key24": "5vPbExfhZHbkGSY1qkAgRXqK7JhQgMydYqTQxEhHjbrWUohCqVHGiXdnrV3uTGUcVQrSvQfGbGBYNZS7uFsJQBXT",
  "key25": "4hdRYT2qL5in2iEWZLn3Qo8RNgCdZMo1Q1WSvnQXtXcCCHjtr2pJiqTipsyqxCLeZTZKHt4dh6nac5q1FmzL5WFU",
  "key26": "z8mJ1Z5BnCsR4Ru6Y1HivxPXPkHvPAwpGqdcvgZW9Cmw9MAV8tUVHiPu919g8jvMrwDpMpF3NGwhxhuqGgPzB2U",
  "key27": "YBXzUcg2qqcgw8iCokqzDTA6LhdxGY1Wx5CiUZ25KtzcbidjfHpefi97SvWgtFiwKbbF1t9t5ouCfo2WCDWrtvQ",
  "key28": "w85hVUBMLjLNg9SCkmntTVcuM3yjfU3qMjCnrgzFUsnhz4bQCKP8KqFjB9ztAMbTeYBfQEiVtvsUCeRPRydsX5j",
  "key29": "2eN3wdv1owDMW7Pespd3QYrUvoMzqVeecfMehErgtAxVgKH8gHL8Rqe82AmTQYPMw5f7grukL6iDcWcdF1eQ8wDZ",
  "key30": "3Jyh6WvCf9VNYHF1wsbuJFtrK5fr9Nhg6eKb1vG4rGo2YHUae4bmHvtFbJG5JtAas7y2ESJGQCh8wcHWTF6iHJ2b",
  "key31": "3UcA6PzeBLFBXdzZfxGVsWMYNduaf7aiZviL16LbCF39qnKvLqZnNfJZ48TrA1m9yykjWKJMwFLAJsPJnZewJDTd",
  "key32": "3SyXkDPnjTbNVLBwtg857TtEBsEWJxk6NumMrB7EL5XNztYEgxJwkMWdRr4RRw6yTv6DqByiaD8aCf1rrU9hBvBR",
  "key33": "2K32GvbGj7JSBGaHGSVbtqcz1UvVkUt2Ui98nUDNSh2TqiTDn9UqcYvudzq3Us7N3vCkP9jLz61PsQAPxsfHqi7q",
  "key34": "hSYZ9ahMDN5MtXYfHLMPA8VwjTKs3FsH2L6BybM14eVAaChQfAYL6JtfSngjQMc3DKVZ9UB9cn9UwAZYgZL6Wok",
  "key35": "4Z4VLQawTeUZ5sNxnbVFz8abH3tMu2eQiqaRLZ5UK7qqDHtv8BwN7YkbqjqZrPTGgZ9nD1t9PW6iQWVgVo2nJGi8",
  "key36": "4ZCp2gHPfTFb43ksjz7TaGvXHP3ghoGxz9tYWHb1tXr17tD6aEqAj27ZbRhpCVHZ9yxoA9FYUTvbFcK4PXY5qSAy",
  "key37": "5qiWp39H6CajhzxRsppFei1Gf5jC47TzxbprnYNX7VZsk4PYfBymRgBEK963YUHSVzZzFU6jNfk22CEMEkouXUK7",
  "key38": "26qzQj5WNDuq7Ut8EHNTzY6BEJtMMQHgAL4tZ1ZAoCSjf2ThVevTWHU6YxmmATfKXuEWKJs65o3paoS292PuezxU",
  "key39": "4EawpTgkxT97EL5yGWcx7CL8ukELkSmcy1SVJAoxovV1eAfPBk5HmJehC8yFDYRFfZDrCSx8KZ77eSg4Djti3Yyh",
  "key40": "3TV4YGbFYGRmLF3h4WMjZX6WxDKmmFYTwAGTsBS5NLRcY8gziTh7G3KmtejiEAqUByaUQ2mLE9DxtMkT6sQAPxeb",
  "key41": "5jPnviEjUiKxHJnXnVXZS13mdugciWrW6yiYwib5UjAg4aVrotDUSUoiHECm7kDNYDezXsvZsQ1fA9r6R8PW4uRp",
  "key42": "5E87SwMN2L7VbXJRLi3sRkj2kJ4T2Ru9KoCezGMfD7RAixW33BcNPaXiA8tNkSsLCg5BgdKee4BGdQe2YcEmBEZr",
  "key43": "5jGdqXguzv5nzXxTpkBw5F8423pzGA8eH4pP8VfwAE29WvY1c2FJAH8qeC3qmZ9tzFLoWoMAWrh8kpgwg856uvT5",
  "key44": "5n8pbJ9uDw3VRT2jotYwMLPMasUGBGxZbL5WdnSFBqYMmNxnvZrn9M7KwMvbRpMsWDF6WENXYSuuMbSmUwXHXqFN",
  "key45": "28Dznwo9N4aBQpNiEYyaULqwhohrzr8XHHtc9heZujTLTKqVBHXsa3yih61JVtegpJDZeVUD7Ncmr88PAnkLXFt9",
  "key46": "4iiC1bwrB8rfuX8YGQh5auSuV6eDGcadaGBpVtQyb8yL87H3Y7dCT6PeQcM9yHkHKNbA6NcTLjYvW9Tyg5EGptK6",
  "key47": "WaaXPDEBFpK4GcZZTsazZiBqxRJV62hqPmbM1uLcp1bvbLeDAf2uXsXoAAkWxcPZMy2KgQH4Mj4XxGVmEigRGRf",
  "key48": "45rLdBpYk9H6BbtPGrmrWFwA5bHsbFhoNRKTVrfa5ZrZqs9tiGj63exCAi7eYfC2888TTAaq6xeXGbmsUVM13Uiz",
  "key49": "4mo6zJ8otsGenZuih7fwk8NftkKxBa5WETZeQTXxFEB1qu4FatG8ALHwatNmnJKvmQr7MJaNzEMnFJw8outEvUbb"
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
