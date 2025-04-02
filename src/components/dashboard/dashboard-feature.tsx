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
    "3Hph2BTKpkvkT4MK4EA4aGMjsccwhNkBdyKHuwTexApji159sSmwSVHjf9abPRbeXiuBRACEM2hDgdjQHwdD5Txo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U3eBfPW7UzvpCHQcsdQNPkNRwQADgHc5W2y1cSUR6FTkRjmFjBa2uDtame6aC5LG98qpr8TB27XsGtbKJmLaTUp",
  "key1": "3uKBY1xLMRNpCuE33QGyqi39SGvUQAzX6Y8DaaUbngqxyeQjo8PmujxJDVMKboi4TemFcSPm8Y9978QJEEThUkRN",
  "key2": "o2YBkJDyn8o4Pu2o8P6Uga7ocuE6D5kNDhYLQpvsjeQJCwHzRCrdoSSVD4xhQXnCinPYNCwapZmE2vyBE2ayCcn",
  "key3": "3zauF3g1VaJwg3TsK1512BA5fwz6ArzfurLz63FkipTLYst1JTuQvakXCq8gKB5QDcVcwd4AiHBAt1doBM4ec4JS",
  "key4": "2hYfwjMB5moa9d7z8FUxpw7KBx81fxbYR5Uiz6vSbd3KH8mFxmppBNw6wsTsGCEduSZmHY7KMzVqKAbPQVRn4gXH",
  "key5": "5ztsDys9tFR7ENkviLpjPnbGTFoL8ofzobLe7qpXFngqHYHpAS1Anh3p8uiM5bcAzEJDZ8mVPvFwbq5Vyy1PREoq",
  "key6": "5Wk1oufG5w63FpXiy9HY8hVbVq6TEVUK4r9sraGLWYBTbz6DJ3dvadSxSeedTCTApvQzCujSUFwNmXgFJmDog7XX",
  "key7": "26Ysq4jPKPTTTsotYvqgzCJyGvD8CRffDDwVVG2mYCrc39NkNCkvQUCLGSnG4shgZv7KAj4q7U144CwhSZEdecW2",
  "key8": "yvCQACuY1kviKUV8X9gmjXGhhrJ9CXBK2QaX4ajMbuG7NL1G4b26aSSdmt4N3k31LEaXCfFj4GVJRK29hbXEMmJ",
  "key9": "7Z9akw4pRQQ7PBqfJz3XQErKFnsMQEBaBDTpnC9hdTwttobHzy8m2F2VfuyAbQ5UJrg6gv2XkSwjq9soNqKE1j4",
  "key10": "2vFY5MKBGbuFPE9eRuqBraeGQBpov4z4V6x6fmUBMjWHPpbTV9Ns5Ff6QBVKEjhRE2usvE4GisuGrRqjXG32vgsv",
  "key11": "SM7kUsEUry1KGyBFFi9nAmCcUrNarzKithxTjJ3YZzKZyubuQUtFo9Azr69KZh2HbVSBmr5Li9ie2dYH9PhFPor",
  "key12": "dGNXGbHhAe74JpSSq4z3vfg2PoNbycFy2WtCqCKLPDa43bPy3fvNFdGJGPLwEhRAChV46fZq8bHfMY62vKrZe24",
  "key13": "25x7iNM3CHvXD89mG5CyGmd9APbZbZ7tTcuASFJQCeS4b3YTp1rr474HJ83Txznk4eDfWM5oqFyQQcSMxhoFRJUM",
  "key14": "4ryrARdJu8tcdb6zxHd8N353RRDS2Q8gWXrJM8kMLyQzmxM5gAPmg2e3ASrhL432PuAfgWfqUBRfU3vWkJXiRtuB",
  "key15": "5YDgdmZKCSs8BWvhqNMUdCNb7tBv2CELQNF8a9jxS4uqZD9CJ7Qtv6S5BakWqCfc1i1JFHuuH77rtDZWWDV2G9bh",
  "key16": "Hh67V8i5Z5riiSj6LeJYWhTM1QAeqU9959pJn6To4PTz3dEskHsmRHkNYDM3eV1A64z6b3wFvBFgjH6R1vH1rDJ",
  "key17": "3wvmgPHNRaLfBzQXPtdSp7t7fMXssReCqk2otxkDFhK2JDEL2AFVaV71KT9g7nxmkHkL9Picf5TP8YQgtAHZF8ps",
  "key18": "3T29XVsDtdfE9Xqaynfp7yjDASiLaaHsQZKyf771oBmD4tamWSMUMGQfwbumNUDSai2RVyHJttwmrJUAjZvBzxvj",
  "key19": "2jJij4TwxqEvokZmUJRStzgdRFmRPFdnuLDWfxLfT2A6KTJFMpV7oSiApLxeyVkrV4c4ADF6J6bP8Ap8vYXnf8bd",
  "key20": "59Wd8YBpRjkpjbTdkRZCX5giPebXxGrgQaZujNaZLjw4BDVfy3Fk69e4ALXt4y2pXLEnGbMSpNeVzXBdrtrxxqMB",
  "key21": "3jFfExDnBu5r9Le5UpZuzfako9ZJySsiAnqP7YrwsetaysAdJbFBCNCEyGCsLSHzUee8utarPsc2kPNBGW6UjTmm",
  "key22": "41ViyVUg3Z4fDX6rgF7WyANaQHpUFPvH8DzaSFtNZfFxHbPQqDqoY1aPwPZX4db4SHhFQS3v3fxdQCDfk1hc2y8t",
  "key23": "4Qg99CDBgD65UwQPTbDcDEbWhhASXiYszu3yiuibgZrgGkmUxhBvHJFpfgpuDLrDZvAucEnpJkKnBMkfyYBJhA6p",
  "key24": "57HuKaGeDhyc8sLWhPdQk1zpnSD6uYfWBmP5qgVJ3nsD6Sz8kXfGsknfh3c1R1ASrGWUiWzPjnKzFF4Z4zYP9B73",
  "key25": "5TA5Mw6KPsF8rQMMajGqnJHvdjxC6LkgvtXJH2xvuwLGP8pHGQNC2piUViPyVbrGmqGtJFgkZENRXt6aFrEJ1aMZ",
  "key26": "4eZr3xQuHa1dsU5rujRWw5Qrt1fgHzZi9eKEWbiapV3ucXfM4wB3huuUuc7XBSr4TQB7EniSnoNVmCSMxeCP4byT",
  "key27": "3w8FLwgL6xbZgVyGktoiHEMqEsHeBcKrzWjY91uruSt91ctGvCWRGfWsrWyHsMy2bN4oBXJy6rMATVKrLLajZok7",
  "key28": "5dnSsM6CPrqBe22ExDPayyewkoDrN83xgUmRhYaiLVK5NBbXiVfGwrhEDq2utfznAXKe15brxeX5v5WK1Z9Ma5ZZ",
  "key29": "2R2HTQQcfbWHKmP2Cj3iFj2FwtN1ieY1mexRS2zfHnPYoZw9PuiyzPCUButUqaaPJEsmzhXudBM91dyq75JFTLTM",
  "key30": "N2a5Se8ejT6zR9bUCQ6buE9hr3aB12PXf9hhKvqx9gLanNLYjuGcWaybmXo7Kz5pjWcmdpiWejyfNkzkQUKiYzP",
  "key31": "47wfrj1DgV3yu28cV8DNucoAybpQAKq5dy6c8sFZNUhaw6ByLHcWhYgsYz7n37brCu1r4ZHg1sYyKnMaJsUiLJXz",
  "key32": "8cFu3vmA4tU3AK7wvXp2m6ssbpXkuJP2UNP2a8w2VYSxu6iSjFRwkwTmpUmqY4WpDdBGwGFFM5nJ8kY9EAf39dY",
  "key33": "2t2qJCMTfG9ASshoUJonXKtRCYYeyfBQDkETEMzEEYeUh66qusfWD6FRnWWQaaLHdtNsKoVwfuxz4Hht99HQrJv8",
  "key34": "2nyenEiiGGThBePu6vp8wA6zzxSNwszPzn176aAU1mCWTpagDMdvmsGSdPTncfTtazYwfFptq3k4BgdTUjh5Uk6",
  "key35": "3dcm7efsMgteM4FaWYV9rLQ3dHWZNRrgqjMfWhB62Y4CCteDDTKNhzJs7kxEeMCFgiYPkqFn5yBdJJxXXiiQ2EJZ",
  "key36": "5TjDR7EtMwtxuJMGJ9WfhDSRjZkkz1aUvPdMZscP6YjHo1A7ec8CGYph1AhbKAhNXLjUSFX2CCz5Y4EVtyT9q6eD",
  "key37": "XtDa3oRQZxtqkWNoLCck4dVsCeJCVZRvvCEWFJw5rWJDUkN477xGa7zcpNZfwU4rJb3npZQ9P8TrF6tXCGzzH4b",
  "key38": "TZ8PLzS41JmCCtnY6iNWvXvKVuoueT5THHkM14utXNfJjwnNbESNZiGS5x7mfGutaL26Lr2tB2A8tJgwXrYfcPN",
  "key39": "5i8VRH1c3pewTKSww3WmnzVcKk2soQL5VCTMfxtcoCjfoewciZHP9P988rTXhacSajpH137t4ePb3TZXypWPDaiY",
  "key40": "5cJRpdYUCUqyQxgDTzToM1DHX6byGNTJYh1m3Btzh1efLpgwrYJApQZ2sPZ7jc4QVJAq46TAvT52SaTwbqUVnRct",
  "key41": "4awnQwmLWuNP496rGPZQqo8kb6Lms8zVfcFRzjexyT72DijgVH8CJgBDzyDNnoqxg6VJ8Y5JvwaZczY6sprr4wGq",
  "key42": "5bouJdv688Ph9EwEys6yHwVCUL4jjwn1ZUEXvGSzbb5ejciU7FcQZ2GubZvFmVcFeErUnJr6DJK5gHcF9ZZZETAP",
  "key43": "5zBTkYupC1iANWVHFh4C9r9kbkGN8PkNnga5ekgBNqL5GDYtu2b26eQHDaeuVzVdcowCCdfDMsrX6e8d1da9dE8w",
  "key44": "5U7rDaCMQs7H2iRSoULDruiJLzC7TSd3DUn7DpwM5EaLjnAmsTaFzkTREiCzois5PKB3iFePahx5vJR9RBAYmKai",
  "key45": "3VnXeCXzZ3Yy5c6LBrbD2uoiGBZRNVg5sNuDLmkTsQJQ5ttrDMawsVEUPLyEsQcTeaY9EysNWAZSxvCireASPixC"
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
