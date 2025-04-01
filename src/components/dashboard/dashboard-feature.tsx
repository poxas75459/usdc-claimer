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
    "5kpi4zwLyx8uiZ5ojGWbJo4FqDn2zfsjQz5FqBdTfy7X7mFyVUJ1S2cpddyihiNYW51DF31pAxCQAsmPTrT6KPtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mWPF1k5dAMZTX9NPnMzyRhRQgTe5ZijnFmTDWMQT1t5YGRHpufcu6Zz7zmHmhim1VRrgNVop1JAvrbxi1ELW7qK",
  "key1": "4MmShWEHWxUejPqauGZRfLcjZ5a1bsukAaJRudtiTTCYjo7ptRdb5TPhJgt9ELeWSYkoAAaNJD2oXT1irNbHZQBP",
  "key2": "2B2SvSeVdzQqDUTZ5mJ3kDQFwyVPHV6jHSn4fvXghdGXMrGVpzsZvoEWbNkytCw61kTapc2u1kUyJXj7zCi3NrUT",
  "key3": "4L7KXf9AdEGkCCkc8DbQNkAKFPvzab7JrGKBy4JMAH5bJsTi2ySyvjNa3psaFxEdcWwLmbExrxDsixFZsnwVYP74",
  "key4": "4BjLAbNzZU16yx2wJF1CWK4ATF5e1pZoEozqiun7PBxMViyqBeX1V4E63UR2NnqqfBdW7hppZiTqqHQo7YWDnHrz",
  "key5": "55Q3ApboPbgMAqptadMYwBc7rQFZ2BP2YRS44qBNAUu2KwpyTsF2GqY1KiL9Pk77qucCSSL2zZCGKK9X7GdRo8Qg",
  "key6": "2kYE7eZzaUgetQvXqkDXo5qf19wqd4HnEzeKg53y9AELNZkQiaFkQBju26u8K6NjXvAs4X4HZ5twMRdng819FMui",
  "key7": "nqx5Vi2rXLV5eqbsjaB9AJQbru5xXNzWqzKe42oBsVGmchfJKmamKmwrke74qNNYcZMCdcnqoJeWRsST7zypsvH",
  "key8": "1vbB7XALupj4jiNdexrEZkAgxznTj4MJesJdU9bVDy7ZecDkZhZYFNMc4si1PpqYAKLhzdEreMuscTX7hm5SdkC",
  "key9": "4VpuwLRrnTeRtvUr1K435gie38686zBQHcXUrmP6YAX35pUk2xv3c3fSVvqcB1fYT1WFo7MSnESiBTHPeJKmTcWz",
  "key10": "5vXs55QuxXkoYoJryPrNia7TcSC2yNu5ejfpYVVmMe9bdpAMBgWDN3DNshWvDoByXSrhg9rVTzbn6rysyQpCcDw9",
  "key11": "5PBzQHSJKFU4A6qx3wxnEae8hex9VGG3JHsd6pStZZoGzTG2pR1f1BohvHeo371YuPanMycT7RJ3eVbaZWaP2iqc",
  "key12": "5dnitTpDrKZLKA6JT5b1nSyXKJxmqbATeNs2Ro114HuesWNtxbBeFmVptP94FYxwdrzSpjEhw4rkn75H7VQ9sddt",
  "key13": "5NijLsUQWSPQG9ogvseF3GxX4ZpB1ooDMRXuvxRBGiqm5nNj2AQkcGQXvEGER431gSuavy1QYitrzS36JbtBUATU",
  "key14": "4uSdgSsP5hQRNJsp6yfeZmXtYa29dXbJiUWx1HYwqeisvScocYmcNWHqs65mzFNGobGz6eu6F3HpkhTTyguXM5em",
  "key15": "3vTb3ToYqM7g9M1VE354c7jyiTvvfEH3PvEo2SFFhkNZH8c444a1RdkN84KoLW5xesxYFnZgGEEFbxHYRgRzrCjf",
  "key16": "3dnAEeXeoYH1FUtQWq17dZbF7gz4qHW42NeCpsaQpQy6mEa226iiEGQUagKPXsMGyD53YvQtasuYi6gyT8cfvGF2",
  "key17": "3MPxYmTwusKJYGgbDcTiRpGvfX8h7DqZ8x5VkjTYarTFbwPL3gYbZJqmfwRjL5bm95cC82mJoYmTi1TptLqfdGEJ",
  "key18": "7e9s4CH7GczUY1fSc39BPJrSVZzpVJEr3MxJnWWBJ71n9ymUAqvwANS6cMaixJnaJv1Nqhq48nvWvrRbJrfk8og",
  "key19": "6xhhN9P4fnPtyw7UYVwecnyEkV2Lp4zmFxGe2BpqdU4RefstxcRDqngVMtxSQLioJsm2Tqrmrpv2tgEL2kxXy9y",
  "key20": "3LJhNKVG5SyXsVJj7xvvDMw1kBCBeAJbsybUzt9Tp8SjJeMFYNfhUJC9oCPeZZ2C6CPi6SDtjzf5gaZ23EHdmZN4",
  "key21": "4Snac38ywX5WCcit8bTpoWp8i6zYvcbkx8ZdmLwJz43wnAmBB6TRnd6MB3EkWRm3EX9DvU3dWH1TyZP7NFZQ5S5S",
  "key22": "3n3rULMPsb7XDtbkacdyboZAPyvpXse8df9GhZraPKSo9zCpN3ykPZa2MVF7Tztq8PMrNstjMJ2eVdJRQn4qrTjE",
  "key23": "4SezfeRBXh6VAcGtocKD5HCBFJjFkdv8dF9WmFern2so6BT4LXiNSXAS5eFt4GQMseu23pZy54SuBW8HvDYKGbfC",
  "key24": "4YADtnkJGbC2WKEYr3o4fn2E4ap8qRM2caECHDRasazz1PBmQZbZH7m4aQYoMsMdgJtbjrG81J1PLy1vp1TG765w",
  "key25": "4Zkd9XM5oXWYnK5qUwoRaapxworLQqbXWQmPKp2xatdtvpyAmreSCexEaSwDjYiEJMNiynSMmufT89LiU8x89qSt",
  "key26": "4RWFX4CujAARLh2ywF8tQiFtgvmXjdCbToX7xXVXcyZqrZhPLD913W9EwUPguwovv8uDoTQzPpjCVQTAt9idG4XJ",
  "key27": "5mBapxMfveX2qDCKZPgezrJvb3cjboeg2h1U8DSGSEMdKewW79c9otXKewd2dRBSWoZsRvf9WEf1c5M4qeBcszUk",
  "key28": "4WT9aQE3eJXUsbWfsy9oAGVQUtt65gb3fU7QEJhfuXTeHq4VnMNag22FGTtW5BG5CMHFcYUXz1XD71viLo4Uuq1h",
  "key29": "4xZpf6E49WKbppLsJEHXRPjDJBCCkeeEP1fRTTLMcRvyHZGbV7wmY1eN1z7f3wWy8M5QQXbManMrpbNFcNvfmyB5",
  "key30": "JZJBWAxosADXLPab4PGyZYmMnqvhFJtKRFfFvb68wV5ayXf8S57PYZu8LUQ9YF4KqwqU3677oMaLtwCQhuCTzMu",
  "key31": "5CnT333UF7ZbQFU19HBvGZvF2pw7a1KvJ6JvV6ci3tQQWzVvnL6McwhHD8JMXZuvxQxPPhWioAhDCYmkQ7oP7qB8",
  "key32": "3KKRRdG8vYcD1LKjjaWMgPJNvRsbYYmqdZBftcqof8xUbXmAexPumWiFDVo5fVPx4fVKgXxx2fupKa2po993YEiz",
  "key33": "4z8w4dh26DGoTiko28arhHboCiZSxp4XaA6qiCuJsffFLo8MccH9EBSeydZkQVv8Yeum4KUwx5KhE4nLX7VoPB6o",
  "key34": "3jBKFc6ioRLYnMyhJTPqaK1HrQG2t1wni39zZitVAc18E6P8udXPXtGYZQkNz1QhhErtUb9X1spBMUxM4D88efTZ",
  "key35": "2pbbuB1XiTFErbKiUTqMu5S19G6VDLhcQMaNUmh42R3cMbwYV6JnvzVEzGHKJ191puifgwGeZhQUfaBu7cqmruGp",
  "key36": "269PCn4MpVqh4SgbBDRBZoBkjJEc6P55tvY6LCGSwp7mNxbfiyGPD3CeGkqv28oD4PuM2Jf2asqqJs5FQyumBeaM",
  "key37": "36XiiGUBEYxNg5D18Hj4RWwYbE72c4eXCth78HZkwJUeurNARMV5859nDck5ZARbLXsYmNLDFhLpw1s1j43amepZ",
  "key38": "5LZaJ3sxh3Jy6LZc63DXRNtAif3U39yqr2fzRUNWhzk9P7HRMDRcyTgHmqcUG5oWB1NMKQTbkdT2tyTwJMHtLV8j",
  "key39": "2m1snn7627igg1gZbNEEpiDGy4q4e6DqD4LEEz3FHGPYa4XSZrFA1EF4Wqe9qFBQS8nPyj7UnRjFJCNsAYiNihwi",
  "key40": "ftE77ZCczW5rWe73apkpF3a43wy7U2aWQBVZ3F9fRiWfBa1eEQuEysdH2xQPamAiYQ2RP7UuaXSDRr5UPpwdnzT",
  "key41": "4ywhWgBQDAxz8YdieQTtR1NxGzqjvFPqdob6DufaGwoXisd2WFpJQvd8fLJ3uCx45fw27HuMX6Yi9kL5gwi5KNaD",
  "key42": "5N1ZBYkCK6hEHh1rypHzMhAiSxaMAuo66BaNop8F55WR2V6RqtAW1PPH3RZaioTqWoobdTePg5bSoVgYwchGQMRH",
  "key43": "YHoWncgBZimAkX74X8FzetrY6Puo8wn4rPe9dLahFY9dFNQKfwxBavr5hDdWkJxmaPMFrZAqgkmVGyQchxR7FFn",
  "key44": "26XgRYPrse5RXGWuw9VC5HDGsU1YFRryb4J7ddUGeT6bnNfewUhDkMc8iV5jTkecf98rmQpeeGfkNcw5PBmGnNND",
  "key45": "5tgp7Q67KHAKGiM3dTKoEeq32At5XLSwNkBUsv73DxbBT5C4ARdPtkNVSypoUUg8C46Uw7GZsW3D69RPhixmxo8C",
  "key46": "4yUJwT6cyiA1sLVZCifv2D2ZHwBofeakjZxGnyd1CmsChwcNqmftSj7Lvb2S7csMFHMh2b1NCEkWKGrJdYd79X5D",
  "key47": "3quvzKE8PsZSSX2rxfqzwj4KuSU6qWS8YttmUE4gF18D992KVzNt1cg228Yv19WktmZEQEZdWbFyGp642ytYsjxQ"
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
