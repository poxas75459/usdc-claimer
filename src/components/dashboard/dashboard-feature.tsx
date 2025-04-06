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
    "3JfXa32t6TRi4KYzoCHjeaBzj6zPiANYK5ho4drrS7ZrJ41qPJWn68Ah2MLGWkjrRoDbWomqxAXiWKe6gxX8krHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cDUTM88HNdKcngFr7R2evpkD2gbP2kGweLt4uxp6ZHeLK1oAmekUdpwFVbd8CXr5vsxWRt1XJFUCfsR8rm8m1zT",
  "key1": "3zTw3d7eh6XiNogpvzcitbxPNkQk5xL4inEu8eTdMWbLq6vj3xsWLJuxt6MDyNwv399sHFyzs4caUS8A7KKwtmMi",
  "key2": "5NRZgLPAov6mKFBdy4PBTt7dancPsD2G3oVJowZ4V7e6fJ8pyjESegNNspqHM1FUdHpzdMQxvPm3xcU2nnuTsbZz",
  "key3": "SgT9AZMcQ1rYbBnkEbGC48vycgpVcS6hawhRDKdjiLy8hA7h2UUnJ9QJ6QdGeQMe497VEHhDdJnVAMy5SBG2RnR",
  "key4": "2Dz5D7E3hnazGLFVjqGmeDN28W6cnTyKJYHrPjzVRqgTago3hKqx6x1HEzbysDSPtunspGtgqJm1xtEKfUDpitp1",
  "key5": "38mybwEWyDLmKVk6TvyoQ3CweKJqbJsBobZhug1sJ6fKpPHgAb1eMsx954jgVXHKbkJGNJ1m5NHiVqRD6UBnpSmq",
  "key6": "XCEtpLxK8namzEBVmGDd5mZvpNMaryCXiWj5nfJTY58h8ecft1AGgyE7TB29vEmFQVf9pVCw2xCWrMsPKwJpHJE",
  "key7": "65VzkFkwvXnCELCpYPbQZCAHDBbGsYxyWeTYwRVe93KCE8xzWboAuFTMfA65Q5sv79rJJqLLAr9yoyXFoKepe7e3",
  "key8": "rPQTTkySZNEQse375vTCdZLTPgBQHgYP5UvA2hofBFu8T51mmceKL2w6C2Fr9r16sKV96srhSqzfNNvU2eWGDoQ",
  "key9": "4wsKnRCQ3Yzcui2nPkdLivUssSpUoG2hDSBxjdgXURtz7aQdaGjFmxTUham8HDxD6e2uqACvsTZhGz2xM9mom2zo",
  "key10": "ULwSNvb2vDZ2TqJCJ4t3WpDHoJMKDQw9eDwg6M4U6kYb7PAke3Hp5o7Wdf6mG9aNY1apBo54smxwBNwVaRDJHfa",
  "key11": "9JxNwuLfbbcnZ9UHCRcYMmTqEQQBdEa9sFqzhFsmicCtNA7aG8PEwssZkvYpo6i14j42ajbSqau7rvJKZE8SBXT",
  "key12": "2KGuagugLg9qU2ks46VtZuRbdJbjag4nWQES75PvVN1BLgwc6vdSBhzEGJG7gSKSbMzRiFYkGDhgdmjnTu2mKAS4",
  "key13": "5ZU7gNJpsYGckNLKw2DMR9MXgPJkHQ5Vjw3B1zm2Tnx4ngWaWhAnWgGZP57EuvGeQa7KKg8hKf5KLF3QcZXtcN9A",
  "key14": "WUiz1UNrA2GHJ9nBxjr9W7x8KofaVEvNWBxPMSWxdJBdyU4T2kuzYq2Q3CWWEixgV5iFaxqup8FFSu2Zoc6cmSY",
  "key15": "3E58cZWRSNBc5TxhGYuRRi6QqGRTzFYCWD3PmDFqt7hBuw7UXexTLxQWi78T7tRVrvCVf1nHAcxaXFgWJYorguB9",
  "key16": "2XvC1ME22puk7nNRzEnkncpdueHHvpVwuHJq5m9mrTqUEZDtv6qc2MR8qRydR5n2RxXgtUeLuXT882nXCzMX75EW",
  "key17": "5b58NHxryRbSPr76KEfe4LWS8wdV6xnMMKS6AT7ZbecwMRmJztk2LHGU4qUG8DayhiUZ69KAjgSbCoz47iZLaDoq",
  "key18": "2b3CqPaKfGHTWw8mJXJ6HPbxZp9fi24R5sqaELDHyWmD9DdRaG4t2f2t3XWbopQTcFgPHKkRTJJuouL5aGgiw3BT",
  "key19": "2RufHbcxNNayQs4gPafpQKaZ3RXZAbtox4NVSYjyQzuTXvN4sr934rSKrwBPfscG5YK4cUSDxcm3q9aB2GsqJ83E",
  "key20": "Uts3wrHCCqgMBYQiZAQemMqaK5YifF8wRsCqzUXEH99N2zQVw3YQDpFjfwANCuc6Fy64pRmTLL5C5QXSro9en2Y",
  "key21": "QzpnKm7nrsrL63fQuqwQLw4axNGFaU2mafMNWYeXj47DyhxxDETYzvG8bUb2enEtYuEsnU7dhEKqV6vvBfcSFiP",
  "key22": "5hKW3tdrZw2RxH7xxCNjScn1fBy2SEAw9toRTuP3TS6gfJ3x75Juq4jNHnsaiw2fBtkQfUSf5US98JNoBydCtDf8",
  "key23": "38M3RQbmqVfk68TqqRsZiGuUMT2RhfgfanuLeRCziLoDMj7humWSPFexjV5SBZZs9fg1m52FzsSdauPWzRXjcjS4",
  "key24": "4L1VcAC1HSpHuwRsFZx4k8bLccYAW8WMkUqrkHQykJ16DtRjY5tJy2vxmJeGxFR3m6k7Czm8PQ8iSUJBgCJ34xoP",
  "key25": "35H65XX41ciPFE65eWxyRvVp5uckbLRk8RUrUbVfAv6njXcPqqSHfA3jrcDmAkAZuVuDBw2zwHyEWU4HpJ5uhVU9",
  "key26": "2GVQ3rkwVnPbL6Hj7Qo7N7N8mi7rZGoSzsaajzvLiGwHLRRjN7Jun1FyVkgTGS3zdsHtqxwJkuR5ZbHfEcXvAcez",
  "key27": "Mqi7TjsL8QytKvEX535pacB2zBgwKrbpLWavjDqv3TejcpfApmkJB8EvHcBFhQ2B8onb1wAikEMy6noFQFcFysU",
  "key28": "3PDT45R2praKdRQaa74K5c3d5ow4J3aRVWrUGhxLTpK2uCNqMLEj3t1cCmZui3pTEbEJgTRjZ69sLUd5LRXsYjut",
  "key29": "5LPtnjyCeHjaxSCsjLTfc28qtpXoxw5eHFVJTgLeqybdFu4iYQ3M9bP7cyKxSrgzW3yjpExUi828McNsxjvkbs4H",
  "key30": "3X1MT6nFbcRbr2zs9zeZe549bPpA92W6JdFCNoP3ahsP7PdHpdjdskmbSVVKLr2epeHNrYBtLk1xfJbqtq2jWrKx",
  "key31": "643KfmPWG3Y4LESDg1HHPVj4LUdnwTmS3D8rq7Qujc8QpsjTk5AXqoSXDvVpXsYpmfTFAGWTXJpsw2MWdgbtn6mv",
  "key32": "tF1TvFm8PMxV35dRpeUrtVAppK1CurVY4MPcHuwApX6fnwjVaJybhj7v2kp9RvncTCurKvx9aQnHxTKgv1C1MZi",
  "key33": "2bVjc17RQZFRvyPFNAZJnJBNo1e8KSp7T2jcnTj2zy97mzYGHFRZFaSr4ZV1UejdtiuWJ3FpmLCwBJU7Jk3m6BSg",
  "key34": "3kNnHfocu2q2K1M1BPuK7DJxAa815CmKi627j7V4ngVfR7F9TEZoyRQRzVqt92nYNw39nPVapCPZUZH5pREMsTVQ",
  "key35": "x2dhgMYB4yru8d6otgMR32HC6fjwHj2jc7uPb84hpr2vRkqNo11dkzYUVJRb4VqbKXauZUWUKhw1h1p6FByEUtu",
  "key36": "3XVpQUwWRv18Yf9HssBQWqQjL1UGP4h2VCqAq9acFD7dGdnJ2tEixfpj536theLcDNCuEQ4ZDJzodfGy4yFDFRLy",
  "key37": "4qBbWZ2JkBWseL87DyYAy6aep7W8TXer1Hn4g3NRWUnC2NZ6Rcz5gPAtR6Sy7zai1qHaG3B9KrjbmDLWsDTvzJeU",
  "key38": "3qFAHkQrFHAk27EUneyprordGHsJtdKK2PtrfJu8UgK3wRQAGMZGFefWy1LM21fsHzM2awKtDmtnY1rQRrjuiwPz",
  "key39": "4N2pSKZ6tWknf4JsPjKWfGx89oNukSahNUrt9ETuCo1xJ1o8cJpmiB1Z3oatMgRMAWy7JZqeUU8AVjG2TuYLxRuE",
  "key40": "65WYsxiAhPfZ44JEM8ELuaD59eakpJ7vupV8VWnxi5kzCKRWsxYR6Vt8uoopdDHq8E9vMFcqmAtFQ7WCGiSgFgQa",
  "key41": "4Jik9AYX7yN4Kkjcm7pEN8myKtLAapPYsMk6Jrhf7XCL2CEYZNn2BeXRKkaw9mjc1gCWHjAPUXGE4oX4WTRR8y3U",
  "key42": "55V9vfKUv8ymQj8ZFGREifpFtYMnL35cRNRmiKFnJxbukE8P2k8rsmw2waz1FV5WwPpicPiuch5MN1Lgq1qvLhG",
  "key43": "nqYQbGB1N3RiY8kFaZLMverBBHAHMpX4RK2QJ39qakQrgayWeuBcpHptjmC9GHWqGUcGfr78493fRdf9rNRe5Ej",
  "key44": "58fuDGn2TsXdir3XmXpsN8RoPQ6RcWtgJmyo56nwh9qixqtkwmD2vE5GGewfEN4RGFdzDcUiLVyixduwjoyEGTsE",
  "key45": "4NSogZssc1zT6QLyY4BZeCFzhJHxtiZK7BWK1jAwQVkHma5bGjJU6by7XsfpsssEqnki6EmHJAMvUgnPn6qMwyCa",
  "key46": "VceVjsgD1QnUJF6MQ3Ax2JdEh5y3EMAVHz6YedB4PDGFk3x8i5V4rrmdU7wkKruzXo7YTDw2zUp6E9nobThCChm",
  "key47": "42N5YE5mD6kU7dcPWkXw8cxN6BvTRXmMKuyr9BnD1cQqNfayUUcNGKzCkgny1Csx2HwjdUM9PjN2WpsBgpPKmikK",
  "key48": "5dupkFMGVynXeCcPxQuiMWhPNDXLTzc5zZezdJPSMnYZSDX1iQDWJGq7q2waxJ915AmKDsACm3W1CDfqvuEnYePB",
  "key49": "4Csvuzd1AU483VUveucz2uZQSny5y2uDNMZ4NK84bxsRjjrz2EDTRs53FsBZLpaMaAeUS6m5ZNj9A4RcDuHXxSYT"
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
