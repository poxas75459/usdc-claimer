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
    "dDbEY6qmN1SArPJS4S2eU8gyayDXd5UgHKQsg5EdqG24xTtXkTFxwYLWMW2vEWtkSDPkhRY9durR7jkg3dGyCtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XCKPZ4KHG4WuqWWkrmG3uBFF44zNWFj3vBGoj68Bp1muKm5KfZ98kR1p4zutKAbZZPTd4KdLi7LgFPfaKePicAu",
  "key1": "5NQVRwxNc4obUXQkjmS8qAPyoQr9xd9G9VPhj2pY3AsNJ5M3y3jzzdXtKNB9dXMhaaw4yyiSix1S6Dka9vMaQrS1",
  "key2": "8kSTM1nRU57KSaDVTqXNGEVuL9Y3j6TFUe2JFbAHVAaLJG2HvXrULwFL4qBPCo95AnAH8473xWsobL92o6ZghuB",
  "key3": "28Rv1yJutqikeqx8cGx2j132MS2fcdjiWVhUaq2tGr4YWKmLQvKNkHcqxePfr4FwtdbVbkKpuScgC8NT1jUPQ537",
  "key4": "44qJGJNcwvpVyvdu4uKoN3gJBY9jtuCLmpASZwRckZFtNBzwwxMAbcLeSPWjjicsg1zFMLiiFxdBJicL2yw8HXQn",
  "key5": "1UH1cv6wdoK6QQyX2tVebKKvwvfsLmgcWgBvuBEJGkrDWqteMe7kkXxqF3ExRDksrjyVujewNCeaVrChumEsDTY",
  "key6": "2E5na8MfpEcmVSfTMhsuw6VvNwHzbc7Rypzg1G4XwiSV5hDfjR8PT7ScZHz48pmnkbBtj7Pk66a39yxDU1cS4VTG",
  "key7": "iqwEL7aSEhs6eqq2vzg6P2GH54vNNARfV84dRWUpcz6X6jLKjB62iKpaFRLUyHnr7BCRmYA6Ph5GXQkiiLwZCeq",
  "key8": "25UJj7YX6N4Skd6gq2K8yeZ8UbnUvWEnGJXnmvPLNYLHQDS6NUHUBqcjWJKyeE5B45T3RdNyRmNhBejvPB68fGVo",
  "key9": "2gp62ZR5kwcvymANzALLLSgqzzv5rHSuWxyA6BXvoAaa5Dojt3wV4qwrNRe6RzD6CEzCZL2YwAbAzjAbURnxkvma",
  "key10": "4eECfn6d1UpZ8eyj7GETLRxziKTojwdJV8crY2eM2vFiADuW3Gq367oxraMkdCrRCKHkEisNGCADoYwFqmoRUhDK",
  "key11": "5eKjMHV2fsDABXkYUBQxUczpd7CrnQwqDEdmk4qmzgNm8gVgPta5pLGgdhASrTbWNzNxsa2jnXPf2TDJXMeDiebM",
  "key12": "3zd1qRhrN3K1v9i65A82rkii49FUGJszJyWobfvUC6cqhigu6KPYK2nh5dz5PwyT345EePXnLNDtPhhw1spkreQJ",
  "key13": "59441nEvqytgCd5kjxyKRB2bveDbtAbQt9YzsQeiYp27V5gkVitHGG7fgFtqFFgYWaasMKXdhKxUa9NToRgnttYC",
  "key14": "5oRJiukMC9JWF1nZ9qhGjRHc7j4c5EaPf8UrozXJdJvhdUNj3VdgaVfMxWafynZE5YC6rtLPdZF5kZf4EpfUj4Za",
  "key15": "5DefX3enPZQQwBQs8eMGfddkha2BjTAej6oDWsNBs6TU3n9o7TAzL3pvHpbNSsAr25Jfqee8NUfd3RXXDVtgiQ9N",
  "key16": "3LeqFrEAbbhMTmS9ntwQaCovEemaauYLbVRZA8d78RTbj5nno2rsKeWAcwZ9zXqwLm4Qi7mG1ENPYmvGaeXee2N1",
  "key17": "3Q1NFxhkqshUZT5A5uX37mgbCN3toXXwQzwdR72JynTnzbzy6K7g2D9jzR7yqZh7TQweAVcUMXas8wCwbMteDKbD",
  "key18": "3fJyWkKWJtQedePuhm6VaVUZJZd3dfK3LWH5UeRjHkXmUvZMKh2E7ubU1mNtdx8A6korvqRdGfpGDyrwUDBGMCuA",
  "key19": "3ucKEsZt2FQEHChvdmPZg8DpxWDgna5c1yYWn4ge1rihAKYyb3DKH1aZpgbSS9vGY1E6tu98ae4YLF66kFJmFrjy",
  "key20": "1aLx3ZKhDeuEqnSkto1WVzTRxGwZcnGMQHonbvp97BrM27qkqYtLiLUTQZcvngmPbpgdeCpHT6qmU3C4RaUWwrE",
  "key21": "4SeiMnmszD9PhHBHG4emQLJgq2coJqnxCzcjMt4sphEBqoCRzBZvKK6heGUjzNDkbvX3RiZt3xFfeen14tMqCtvu",
  "key22": "Xq9L39BbXvUM6Xw3zzsoUBF1Gw3pdRtFebjH4EDqLkbBcHnnvnf9TPFNaG5GSo2mWvEMmK1JiLqgoq2szJZTr1x",
  "key23": "4Mg7kWGG4j36UexcSsoZuLr5ocrgJP21UfPvBiwYbAag8djb8SqA4o2G2KEWAW4iuPFAJ4p1rNH6vgJeaoESddDi",
  "key24": "2cjbZN4wVZ2uo3PHRj6415R6wT3Vn8hjhehNAoNAibU25bRrPCBmhFPLfwnXuLEchrihTEn8NA2eYArMozK7RDUJ",
  "key25": "47BYwqVijAUrb8JUSmrk9ebcQcrDydntbbEhyUQ6hPhzjx4mr8tC2e3Do3KiPiBjvZQNjjbUrAHpbY8sW7qpKZcX",
  "key26": "3U94p4sbWW74tY6X5NnA6BHp7DS8n8NrY2BkfuFgn6ttVqXj8tMhddTqH89fdNMMiMrKHokE72Yjb7TxwD1ZsDJE",
  "key27": "psgzPEU6SfVPyWSxZp9emKXhw4nNx2RGCK2nEEX5yyqh94xDGnf2dn873AdbgyViCuknZxHzNbsew2Thfeb5jFs",
  "key28": "65gqc7jdu2D8mk96VMorn8EVTj7DaoCtjXpmP2LiZ5WFHmiGf5tchsDjwD45xaYtLL6KnwDVoh2BuCsEu1xHn7dV",
  "key29": "5bEjwgbwcJv8bmjfxYWhsVp1cMwrgZrKHixh9NZgFKfocwtiKQECtB3RLmP8MA5N18p1jgCEozGfxBK8cmHwtB8p",
  "key30": "2GmQV3iY7Lp1RkeJd6Bth2gyWgEGS4DNbN7uUm1Hw321iDJBwQNyaZnNquoN4DksnZSnKQSGpxJG9dNif9wk2wqM",
  "key31": "4ZTWjThSk9BjpfWSAnfTyLDT361M6Up7kYA3KMECSN8XpWC6LzXpTisfH5jwCCvyXaVhgrGQ6ExQCRMhKvuKXkYQ",
  "key32": "59D3Yfq9oYW4EHaWDXL1xEA7XUAoVXLBp5QRsBTp2x1Vrjz2ePVDfqdCPW96Wy9dqSUU53ahBN4PLcHcwS4FGw9B",
  "key33": "25ikKRujutkGfUF3oJ3uNtcXQt8w2jYvVssfUvkpRhe2zi9AetUbmVLc5xgWZP35qVmvH2L6dYUUtzNrBoksoWn4",
  "key34": "3Rnmkw2chtELKjT9GtFRRgx9uDyeTV6KCFGpsRaYPeTHttMSoB9kjfgTx3XyC3CpAxPeYgAMFaUt9mqvrDmeHR4k",
  "key35": "2GwqR3BTEvXi6SJKuAJiuy5EhdXhdwMoKr3ftGqkfjtL4jTTZNSms5qsHQruP3WvWdDqyLceJZQXTPkn6L5V5Vsq",
  "key36": "4vT8sZph7TQ3C7HmY1i3c2D1s3CDbC5rTmor5hYzwcHKhE89HLXeKKnwmhGXQ4zoY1rt49K2GB9r7smXNgfGLuLZ",
  "key37": "2dx3fydCjP78hPWSTihFRniLbtyojkkZvsVRJtJSs2JDcFPo1D83AX2vr7AHgG97wJwaXAnroebaeVWhRQitRWet",
  "key38": "63kVU6MKQ59936cUneFusSTd3P54c1MRUP6RsM6zYSSiyj2gEKH1LSYvDLyK1AgtzoakE6AVQ3M8A1nq73s5uc1V",
  "key39": "3VXMZ8w6UYkrF8ay5DoNDTG2S8582L2mFpQcwGCGdTjHQASxpj1QMkKm7VKgZCnUdamhKfjxKC4UszetbmKdHWS3",
  "key40": "3oDMFCYVrA62vf2DpKdY4oZ1H2mWTXwkZVn2c23mxd6hqCeYMhCffm4DhtL5FNpgPdSWi5atd2n8ypnb4pPtQYK9",
  "key41": "2nXVSMvcbg3PfTXeLmLhH4CvT7fqS1V6NQykvs9vHaf82AT6etwJHe3KqZyMrsHu1CNbNU7ksz93ADG6Db2p1cY4",
  "key42": "5SB1qFcv7nkqbvQY7fSRyryHHLs4WefooGNYUBbng6KBveqt2JurnQy6R967dqUJLaFPbowx1nULyS5McGzRQWVc",
  "key43": "5UbFYTLNwciFswKP3BPvbMk3peNPfikGoBLPaHHby7Jg36yrJSSVcU45RVoGcNdp2RKic59sWX9UyFSEfTB9WDgk",
  "key44": "52iyBgK5RXFJ48uwBoyWtaYR5rmReZqjGxBcSbBWFgqcVbpMc4sMhxW11o4gToKV6daRPdRFAki3sm1TkHBtDiTA",
  "key45": "2QmUUc4bERiSFspQaGVwL8ghsxteQ3iYhtk9zYnYAqjFCF1iarR7WfHKdMYP2GJHxzpth7fPAkMX9azQDxB7g7x1",
  "key46": "24xWen3KLRpvuDPDbX6xYBVzK4MBgixGb2szBGMB6FuHZCYKSBcGW3FmB7oSZuhTCLHzMvFRq62nH3rjyQwYJkvz",
  "key47": "3GrihStWtFDaseR7r47d7rtef8mK3kUJKSFRGFNoQ7f3oV2d7hW7E4vFDna2g965fF7114rZzxpL7yHTjpzrPArF",
  "key48": "CJuZzpyiVu9BPkBsyVVP2qhYTLbigxAPKBKUM5kdP2JtaXkgFgcxpCTFk7T1xDUEpaAjxZhmoyt3fBHDVuFsaGN"
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
