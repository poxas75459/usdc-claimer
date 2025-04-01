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
    "B99XzaYLMguTeJyVak6t1cDtnv4kVR3ZXydZAX49A2XjwvjvyAtsBRFFBw8cGtbNFXZK5Vw9rSnWu21NVJBHDUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55fnbNibcCqtcPdM3jeFEz5H1FTzLptKS7C5LjkJDSQRP6HkhtXuW49jGsBRCMUfHi1DzJDgYieAPA3xWw9r4AwC",
  "key1": "5dKTS7QYARi5zsVK5UzGnyf5XL7zsNuhRHqDgBGcTdCHFYkG5Vn3hBuiC5bTDdi8gsBLEs1424d1Ad9gmwPHdo7G",
  "key2": "2xqJiCcPNgAp9q2HZAZmxzsmMTKBPzR4WonnHJ5SjrFHL7nHv1FNZ3iR3ZXnp1gwZzqSXbpwuZdMpv7EMorMQqka",
  "key3": "5zT4Kkm4hVfGXLVDtKGSHhAvLTjcntnEqbd9vanQxFi3jADCkPpKQHDin1NrBNhhbcWVHN7xrovrUv8rPg311uJa",
  "key4": "RAAQMK8T9fJV65Jh2ZunD7U9JPcbuygoT6GVQD6bpxVywpepQERrYsySE2qjChj4vi8RZKah2HBTyFLFYwGSSrn",
  "key5": "2gfz9szmywkA8SkyZ9xy1zqwugPhEdnDCkMeRPd3jigcPZSQT7TwPgamD8p8uvM1Bn4Aq4hkNw7pwKF3EfTi6iGR",
  "key6": "5s2JCj4RajyNcXNYJv1qd5DZ8eq9hjh9LUamENj8VWorg6RFmYrcB2tkAQ7zrYGVsNXRtpnFoEyMLi3Xp4mea2Lt",
  "key7": "39G8TAkW4Uc8Vk3FMoLpduBAVmFoe3Rjdn3epqcPgma9qD1nFbsWutfFktcF6vYSz83q2e7DMhgcHybS25YjstTE",
  "key8": "66KQAx4rLevdPngvNUEAaMNrtvmvMzaLwsjNTn7vxL3tjLpjyA5gqau4ZXc5KArU9yJYptjo8Kvwemru9FHpLWJ9",
  "key9": "2UH1ykKUjXaEAjgaDVqUUZgJyGEVenjeAEJk8AxZwYQbhwsUnSAK5PRkU5BMGj8nURYTs72FAAXCrQvpne7RjAi1",
  "key10": "HHChskr6u2RWSJKugwF1Qy2r34oc9bfnzM7UfmWUqMbNJheXzNGif6FzYgRiSA6qQM2eNF8MkT4C3mfME5yKHq4",
  "key11": "YXkrguBHZch1zmtKePhCf9jtGsGBYXFMY2roVYdBQfcuhGiwLJwtLxyxBSXfAa5ACZLgtFeMd38EZWVedNeRztB",
  "key12": "2iJsoTCebwoiRaQ6CzW1U122TGmHhHkHxHEcciuPTExPNttExg1uHdGHK71GZkdDH4bXZKHws9Jao3GszsdyzVw5",
  "key13": "6559zDDZHUUEKjWvkRJg6At9ZmsmY6NWikcTWyd2UTHBK5H9i7cJoAmNfCf43sNZxKsenC4kWiy2WdBwTRvNEsVQ",
  "key14": "2FuiW3zSCG82iTDKnMG91wUhd2Na9K1DniJ8Mm4ir9fRbV915os7afSr6f925GTLUsCGex2K3AMxmuGuZUcj5knp",
  "key15": "5Y2AxiDHtBVMMnwycm11LCaNv7yDta5a2iM2UNCPSD6HpdLG9i5bUcL4rrPx2tft5ZQG73m9mDjMqxTQf4rPSayg",
  "key16": "3zGTizQdkfcMzfSbSLE3zt7obu8Xtet44ddQPcn4G13t6tAYmeKux4SsLe3wmfNmWjkvZ5wBujgkDWo2WsT1oQyJ",
  "key17": "2cTDDrUYTbA8ZEeKWgEydh3q4tEnWTQPT2cHjgnu42MJcCvDFqwzKUtkFdzX2yjVZL8oqbmxNPvn2H3WMbLVPGTs",
  "key18": "3huJXtRtf2TxD7GVdeY7HjeVcq8QDf2kY96prB9u84QChDzWQpvjmdsh6xfU7xTxE4Z8wyaBrKdyFXfodr2U5KdM",
  "key19": "5tSR4pGL1twYnNHD24tpuEvwBhL1XAuphkJ5nfrJtiPpQ4Q64gvEqfNh6ectfeDiwvAi8KTn9pQJhZZVsvCVVXSJ",
  "key20": "2UzBocTE9EvTwtMHqSdF22hynw5MLik6W4YHRSCDDwgL6dpN4KQJctqinDKg2UkXXPjnnaowE1EeySGsGVDpeL91",
  "key21": "24jJwU44BZH3zuRWFZB95wWjcEeCRRK1aXgu1dZEz5fFUfYR2uYmY9cxfJW9g35S2xr3GLJvkjkBeu5sc4YKfi6e",
  "key22": "2diqeM5Hq25agjj9JfyJwtSprK2awhpeay681txGzdFRQ8wquXrLLDm3DXPDaVrNrb9v6HqUEsQBxtEb59CkW7Zw",
  "key23": "gbvznB7eAwTw8yT4YQML55fGdrJ5Zjq9M9ZYBdpTqCXWRp6HGz1U5uvWXz4eJRpKqyiuQowTNegh3UjcGaqm1Qi",
  "key24": "3fjd3QnSXM66Kvp2fqRtsxb2aSzjqctaA1kxv7aL7V4Br7fz7akhjXkLGGfskPfL1KcNsXXoKtoWboSgouyJzuGb",
  "key25": "Pfk41M3f987zv8H8z3qs3Zbt36LVPHQ5GRAJFjV29VeAryim5uVxgyFPvK9NXX6Kc9duGsB22nGyggAQq9uWgS1",
  "key26": "3tv694pWYoJs3rGy4v4TffU6qCbLMTHFnMjjAqJAWdt4yKcwR28azYnRXkNpyeN5TDguALNEZGaHZD8J3SBeCTEn",
  "key27": "5KZp6XNMdSm4gJdGtFBiyqMjhaNSfKnm36qLKZDkqEh3bFQxjaDnVN6rCBqD7HedxKMpTD1GsTcmwkLEggvGWVpQ",
  "key28": "ekYZ6TpddKvmKTqgJFPdknGbKo92bgtvhvhiFxHhpQQQzcZJrEAhkbivoiEQrqTzatu7fvffbrwZefXr4dysMRj",
  "key29": "57LuQVk7JLnKTNQKaknvZtE2uSnRBMW6MLZKizB2UD1qFJwPmLQ9J688pzGnXuztbuc5tsVeHquhi3SEg6632WQm",
  "key30": "3YMQxmRxorgxrPnFwZRCWGSEZtayZrZuEAvbr5WxByFkFtGnuDTsWDvf3Checzu4gTn3uHQtX1BHXJQCErGXnHyW",
  "key31": "4qmevTXgYiQ1Vw87uJHaBiTYjVKZUSv5M3PQgfJ5mYwai4GfVqazkTLoZC27UZtQr8bSm76Yzh4zm4Zi6gjHQEU7",
  "key32": "7ipAdqcJN3JSfmppym9vXnobDTPKHzJDzXsD6zHMc9PD68BioNCTZk1nKxmtvb4nef4rrUCgbWSauVssD8vGA5j",
  "key33": "4i7JJBG2tJt8JrMEs51QBRLDFJWnWi2vKMZfLGoy7PJ93j8CS3zSEEmTiMkcbo1NudSRGDnF3NddM4chqT1GF1Yh",
  "key34": "4QSUk7Rie1eJa9XSoeoVZoLgy9cE1URyi6tjCTWd1L1QfSt4pHSKU4cjUvawaU2V7UMBX4EokgT2CoeU2oneYVwz",
  "key35": "5Q4wdZx4HFPK16UDDMdyrGU14BD8wrGWq6yPE4shSW42gBCndcMnZQ9K5cu48n1PLvsWq9XWqeYJQ7bAhGk7bX2z",
  "key36": "4gMbDWHCX5p6j3XiVMiCJAGXYdYgZLYvVBrt36aNv2YWRMEkUW8LCSEYYtyky1jhBPssNhYtEm4m4LSxwZn8H4JE",
  "key37": "2KMJ1bNLfLtTZr2L63GN2UnfMqByE47nsNg3iy7TxnmaaPAYqYraPoVgXSuGm87LG6rtw6RhabdsvZbBpzhj3PrU",
  "key38": "39CATGeDcWt9Sp664xEuxcVBLdiCxtPbYyu9pSs95FRJXtE7rS5o1MXvrkUFmyFkufPv4TBS5Qhrc3zCRCapYA2G",
  "key39": "28eicWmguAnZ1wXyDpLTgnnvVsiHPGbqkPrbNCvT7nG8V6Nj1pAd47kmv5nd4gXNgbhrGJBaUdCZA15C35Um4rpp"
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
