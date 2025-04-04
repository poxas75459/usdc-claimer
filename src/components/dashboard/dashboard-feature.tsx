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
    "5VW2DZ9nBzYMSHbgg7Ugm6T6bwXZUUSSjNiicb5gxYa6FyapF3f3AAu9anoPiRXrQL4sQLXHZio3NYfW71a2edmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WDv6rXz82GeDh9RawN2usfVyR54ttJDLbSRSM3obEGV86LbfZuBiRh138Sg3ygF7Z2p5TPSUBP38VcJwSwM8Dy9",
  "key1": "QsXr45JhoPHjkQbNWXJXyz12ow6sfqHwyaqar6TUr7FJdGrjcUWGwQBQtSK54XQQmuc6ja9hHqamcHLTqzXGPz1",
  "key2": "co4SPEkWuYjeyVdicHB47BFCkP9ZeXSmSpW8yCuAFPJMAUkU1HdxuBJSugf9ntS9Wa3BusPFgQpa8dGm2gDa9rc",
  "key3": "nMfMbMzgM75GFCXwodvx82dGeAm2mz4Dv7pKaRN862RwPxnE4HnoAuwEuNLVyNzBfcyZE3MPisvAX5k6nCBXAby",
  "key4": "66qcmuCwv37iJH6KUAgPhKDH9RVXPdhUg6bSYw1SkUJ7BvgjcKTKumtWBRGzjkTFXPPrFYUSKK7bS6XBeFKRhrzf",
  "key5": "3cyfs22WSpc1ErNni4aZyvyADWQ9XaJrmBp2KLhJFwimHcTFxGK5LKZwsbkfavUSehnfL7Uo8e6yRCGozQ5qxeSe",
  "key6": "5YvvGpNPUEMuVEEuZFc9M8PYeVCQUqduemXqUpZGxyqG6WFbyV6LEz6TPzNV67necfWXHC19M46YraFtRkZMdjCy",
  "key7": "4NQLRJwEBDLw3NUQLQNac4cm3oFZMc6gSkMhf5FH2krZhDhhVWS8zEtTGuZMuKXTaZeWCFFj5Eo1JKe3VNXTGjHc",
  "key8": "2rMEAk82ot7iwo47HfFqzBEMWvd8rjQ6h1r1BZTtiJ1Cz17pP1xR7iq9sX2jYzTXh2rtqQ8iM4cCVXKphdRZ23A4",
  "key9": "63cMmhCANHg7JHCKoV7nPCz4fE9PzvrLEd2NEDN1KHhBySvnykmMuMEC4geqVk9vDy4hYGV4XQJK4upV6ss1CM5t",
  "key10": "5nBuZKr3d43Q6v1om8iej5nJPfLthRV7ZzpKoivYN3XGRA8s7kYjLYbAqPZVxAAJczbfwjeUERoqb8to5Eu1MwXF",
  "key11": "3FKR719bikdVD7ExtbNB4gR1VXo2sVhXoohZvCLwpzZwBsm42DaXktt4QarqpzTBQBg38QGFumiKPwmNUBz7BoDn",
  "key12": "2tnsNenrJF7geSmGHeqWwSHYpFJHWn7XJnFowvm4GMkaaT4dunat13ME9SvxfxXSfgwHBLc63fqkbWMhGJSVdB11",
  "key13": "4WXccjS6Bv59qaZoQwBeQ4uzmr19Sqf71Zaa9nyJoJGDsh9pkrnZdPBu7e5TiLVPmK8Phuys2W1wc6xBy7SRUjci",
  "key14": "3yweuLfcpTssAFCKprX57Dmmmd3opyu6pjHHSxB6HmGpH9qi4d9dQTnQXzsnry4tY5QHoH2sBe8o5x54dkhJtHqg",
  "key15": "3rYQSV62n56L3BTJJPWLs9oSrZxu1Z9MvfgypH4J654PqEndNRCWMYHN6dGiVhM92SubYbnwLzvwZ3sSvetNEHXm",
  "key16": "a1hYXVpQZfek8gtessjEH3MysyzBRdTvXCDXD1dZV381NXwLuf6uGMLc7fX7hdB2uJPuzj2TGqZcU419H2VdtDK",
  "key17": "2ziR817dgKzDACCoPC2PgBGEVR61KDsgQzKPUcLJvcrwzfC7Lev2Mo2wtiKtpMUGx2Do9ADrmmDED5NuqB6b7Xhk",
  "key18": "3t3faX9ezJ8ohnVzB9QBBW8PSkGDuFwB9Yr9hjfTSBTEbas3XrwAQyjhRMH2JmTH6iCV3Huo4NvoHkkHPbGj988S",
  "key19": "4DnfD6jFuNFU9nsUmoDjD8v2DCwK21dETqesHcG3sqA4yVwojYf22f5oM1hyUNAwUUZ7Y3ozLhNvnWjrqCUDsdBV",
  "key20": "XHuivcQmDpm3Utdv6Zxcx96R5RqTLyLo6xcSzfCtczH9rhAb9LzkVQVvWmoMBwuNPNWxqCapg78JaxEYx8sWXwW",
  "key21": "2tyfYerwwnEAxBGF5Rs9csYEkW8oXLuGHzJcFuf8m6nyaS9jM2y6YHaTKoZvbgAw33Wc7DRKzAvva3RayHkAAK4L",
  "key22": "3PHe7ATpFvcGB3z9JgD2WiEPtZKuULickWhmwNd9vYQL8N3YJQvBeNPaY4M3YwNWqiE6ttQntLNMc8FK6qPX9Qx7",
  "key23": "4gG4rDFWDoRJd23ugHyVZGRYfQyNgYvg4itXESPoRsMbSiHfoV66ozy2MquiWr3nAb9jF7JHrbi2APzBAByDceXq",
  "key24": "6YB9h9Y1SRiADSBf6HWBhujfMua7J5SPc7B8Zo6NKVHrDm8C7ijoTVHEM58t8As3i9knYbsKPozM8mEyTeTy1Uu",
  "key25": "Asoefi5Z2EDvSZ4YWL5E6jtCLhLq3Zr45zBiuhFrpAU1XRzX2buryEKEKwPBnXHEnuYv9sHWCPUj3HFs19qaRc1",
  "key26": "5sJTbLJrsVWNWTUi2XVrsC1UZvRGHHAk5SKFupr6W7EkF8FWVLt3hwbsgWqRmU6KZJYQAVjuYCBCb2TdSZrPWghH",
  "key27": "2FD5wgg6cFgH3dYNkPsWKTX3vyCLVEra3zrM7gbsiLiN67ogy9PrWjvTu62xaaVH3HdqD3LxXXTwfQDpK5izFN2a",
  "key28": "ZJwmxi7U8vU6nDxB1WBAv65tgd1sAynVgv2J1Moj4LxtE6qMjvuL59VB31BKud6CciF3FCrEkmR8Azf8TvoZgjL",
  "key29": "zY9nmHXVqtrLxW5oUExtQ7J8XB1oAWVcL6ner3Lqc76ptu3tXdZ31qpcdumoDKhg9FvPQiSE8szvQnR2bkxpJr1",
  "key30": "4k5vk7c5w2amvaK1KfApYMHAh8QVAs1HXmqY4Lcxv1jUuRhKzJ8ze6KBbARpnZHhTtRiYQne37RjBGjWW92BHErk",
  "key31": "2qj3ZH2xToDF1GHM3urZsLLTgaGWveMhYyERWb213jcUCqapny38eCK5dwbnyrG3U3KeTsAZnBNM7j5ifk9CVba7",
  "key32": "4hCL44ZP53uzpyxecmDBiychxoRSPBVsGxRYpTQTh2B9p117zaNmxPphxVRfiW8QbQRegrUqJt4ZFbqDRjaSFi7q",
  "key33": "66QXCUM2oQ2Kzj85mp9r2MtqVN4Jhod3CSQCe4wzABj8BNdUiB66Qqkn6kwwcEYTdgkPhzxvtSZC4mXxQUp1qpkB",
  "key34": "3iavoaXs1bxzAC1n1gUVaZMzokkyfK8FVqWWWtP7eDBm4or2Ds1opahTzHqwGKezKMdd6uyGpeGXLbRt82LVbWL7",
  "key35": "B16szhf2AkS9etZN6QgrvZh9P6UJJQqtMrDRhWekhWjewNVmetPzXF28CPqTd1bFCu1PKBD8RW4232DxyUWcQDx",
  "key36": "28ys8CTZ4pVGfJ2BR6zYENKmdUcyDWa6NwRpgPKfitgASFDxZHW33QJiofxm2W7gKr8pRnh5QkDyjLC4WiP1tGkT",
  "key37": "4GUwdoBbg6fUZD5Bs72JuqxWDp7EsSmUGq9hddWoZCaUbM8qj8WDhEmavrLm6V1whY8bRWm9gDGpXxKYj3zDBSkD",
  "key38": "2K1H4PwA4nkmYr2RTtcec1fM9xPVdCuDTF2oRRdyUQkSNVLLx7aXxExFbBWf27b3qEA1ELrQC56gmB9F77Nox1Wf",
  "key39": "353NBb2Hcotc2K3yJNz4RRcr2Lz1tMvSS2Znnm8TFZJ68CQs4gjLmaNwPG7CYPAd7UMc7e4AG69BXPxT6gmvRU4E",
  "key40": "mLFYDjv18aG1BwwVMGpB1iCyx1r1krjp6a4MaWJo8RHQ8uzSNv6LisNbMYNRu7rHVQL4msdvD81vtuzHBfvXyJS",
  "key41": "3FMtYbmh618sz4TYUS1a7HvtZm83ndWG51EeQ7EBrRpGkriLaicUpLPAmgt8WCtjMxy8eqtW9fthGPUiasRE9Wnr",
  "key42": "5cRtA8RUW9A14FdBfCJt3WnggEpnUfimjBHypnKYE6p4WaCAiyQ1QPvVuPtNRPPgDwV8ZsYV2mHaKQonphVmZvZ9",
  "key43": "i6wWAPHMuCWZ9f9wRYLxahuWVaubUXjchKfCoKoghhPHtLQp3KcxtDg53as6fA7oREQWWmknbPHe1Mzub5SiZeW"
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
