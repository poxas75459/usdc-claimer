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
    "2SVJ9dLWCfi7ZHJpYxFaU3ztVuStdQbb4a7WPCJmD8i31Vzf72rBd4x58oFFpfzDpikseRRuVWKDXVNWu6LNR3pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LqZx2TckbvxH8iP1MT7s1L5NQxNC2Ao4M7sTDtjfhbRWZqSvJNAnbLetz9z4rh3MFCixga2gEjuavdwatExeiCq",
  "key1": "646A1NTJfE72Uwa1rQTwK3pLnbiprBirh7KDYFDcdsaajF7RvFxh9XfKtdUoNDpaXgW4oCtT7DUHJsq6BQ7SjiHm",
  "key2": "Xj8yc4WCYLwR4f87akHdkSnRDFMMZLfyAXESTUKnkCwFtzdHCQnxDaRL5YKsDMsCoUEqHa2yft2ssLvfTkUZVts",
  "key3": "63KjPu1uCiD1GE2xP784eeZUny7RTKMGgy6SDkwc7qhgzectJyzWugC2qrfDLZuDcurXBXsMFTjSkY5mYix3ifP8",
  "key4": "tyZPxDoQLRoYdkFrTW8WUP27drgfbBSZTkfYGGgbQeC6htmdbTwecpHW4NcS6ymf1sJh36otb7L6UReyVrAywcY",
  "key5": "676JxMkfr12ecHkzDXU2jEvLupn5V67g1naaNqtuG9XgqjHnDLD756AJSHjnXvKcL71b9RotUgERPXGjWuFjsJHz",
  "key6": "5r9EYhb4A6ESkF1MMMtgVpekF2YBNoQ4ivRMAiMD6ymxiQKALhhVbi8qU4fXoTEj22JRisW2ij5ahP9wbSRBC3TX",
  "key7": "5rSF99Wy4nZwmPprVF8NoUM71qs5GnXND6znvHXrYM35bzdDyLs9YdQJNLpoYr2LH4roZRrz2TffsuijFFptipVy",
  "key8": "4sKnodmRorQtPAaJ7yGgBBDHEgU23zVTsuELH5idrc9BzfWyeGhx5MwfMcm3Z1Vycnfiw3wVwvBcALoAeAS3DApJ",
  "key9": "5J4wjLWZsoQVNT9DhuKf8f1niNwBhVK6k89LnXj9xjVaPTDjTenQ7iKEFHKF4haXBTqHuxLkh9ZxYXb4N9rpYJVP",
  "key10": "5Epi4i1qTBqqhVvsKvdrtT2oqrNUgwkk8jC9QBBDLVkqJhYgjkhxcVN9XNYS3Uzjnz7iJSvSLWWtSsGYxu4QAxnQ",
  "key11": "5gVXStbjGomf2mCxaLkYxpB5evD4mMXMx8TSF3rXRfdz8kuLS9xUJ1obcvArqgMD5rMzAiaJ5EnyfRcZQCasncCM",
  "key12": "58ffvKa7JXq86LA8iebNmmakaR3pePCr96TJYds9c8eoH2ZnkbJRQzo7C3uh1WH4ebTHmyY8M4bo7F3V3Mp9GwcU",
  "key13": "3mWwpXWu43Nu8WHyLnS3cGZb9qpQ5sLWsbRHMLX7z6EscEa9qYb1wPDXnzWsTJaHCw8svNTwyAZSctafAbFaLNQ2",
  "key14": "5SMa7xWYB4ohkf2M4PQhsWuhAtHsshg1KEbNzR4NEhFDkrvfrauTgd9PzfgUYrQdNqmUZ3uGqtkWXY2xVnSS1BLd",
  "key15": "2E8mtdEAmoBJ9TEzqQYjbUp1xs9RHDNUbr9r72hu74DRi5xcLe644cCLZWfC2WCooxYSFPUYoczQmiLqtnn29KJH",
  "key16": "2pgUpyfuDzkLBfKPsPCdbtjrtaDx3uDN98R5EFhMptrUKGJmK6KWoYp2GVuoeJeAsENSryjsDpQytFFyDYDAp34x",
  "key17": "8oA8E2TsM8G2AfXCc5CZhhLr5Q8pC62Sk14NA9oaSvWSPigRE8tC8QxS7DnjNpwvbNFG1yZi1fGGJoi5zNs6XFw",
  "key18": "3ZViqCef3Ft2NDf8ngkkZTEW4YAnY2m5PyDUaCtb2n5G8b4vCu8X65nEoXUmxaq94ZPbUV8nxkRndjTeqV9mvWyL",
  "key19": "2PgNku6xeem1MjFaDi9Uv8k3NVrzo3GWEv4biGha5BDy5WXwnDYAWYxaaNyGqkX2hpedkX6m7k4jZfoqoUnG9Tpy",
  "key20": "3xcX1eJJhG66ZAADArKC6ThMJb2YyQYvmrPEqVF519UYEH4dayjDzdZt3QcjC9nXQ9Nep31baqCfsCaGDpUfECu6",
  "key21": "3nYumXuusjrCDf16HFLne6f7MTotb8fmphPQA4NVRTYstYEeySqRUYrxQ5MXRV1fPAR2oxJVSzm8KRRAAg6VJYf7",
  "key22": "28hZ29BFpYDBeQHSWR51Nah9JtdamquL9Viy9eCFHHyMveVoirom5TstdFfR5SwJ3yQMML7jaK57Mn3joQs3Qh62",
  "key23": "2L8zh6Boaq35RonSBepQh7dE93pLgxuNthRx88mYy3B4c86iyFw2HZBCdtci1qXDEoa9pJhWG9xSWC9orNdgUNPZ",
  "key24": "5oDPHNpM68q6FuZZHMeVdcXqceHb6USNXzeW4UdgrKAG6tLeuP1H4QVBJYc3Py49K6ci9dK8E8FxNDRv97immNHt",
  "key25": "3eT6JCPK4rwLVsvbCVQSjiezgUniy1r4B58YCzDYGmEyKHmf54ARMtsTvDNw49DKzrqvjhYAbcYkuUpMzqXUrrJL",
  "key26": "Zyh8qbEUhCkXrJp2Wjik2UrbX3142h1cg1jsBhgypGhitTW1Sk3SsTLaKN7wU8yjNfAigQuRjGbwQvvAb7kf5zf",
  "key27": "n4kd5Q83NBWeCiEvumd2BaVvQB7axMYgGVcHs8AixwByK7mXBaw8NpxSFnH2LRFpxyDQKyZxzC16r3uCKzUname",
  "key28": "48atMWcgYGZ5grWkjE6b7w6wx8LjV45eYYq2A478W6nSRQMMnXyVXMPxeXMePumU9124ijUibej3twvw9ReSfqb3",
  "key29": "4ZynjUDToF54unP9ZjcFiSPr9aWFY6ThcfcpGsfWE6HADB9RdZqAhHeHEoya2HiQZqYBVmuEjEDoi7whry2TCHK5",
  "key30": "47EUQLdDXErVjaxMijeBpPFS5zHCWxzqAc11beXaGh5adKCNh4dM8oKcrbRT3Y1xkvwuE8aLWRNEYcazdAvQ7xBr",
  "key31": "55uTRvPkH5uvoMGqZdX2bdspnuaTx2aAM4JdQzgkfi8EyfEYpFKKcv872Xp3uH1yKy4ChSzhuj4m6Sys3roWboYo",
  "key32": "RFi2oho7akbf7NA1tZ7RDjSqqq5YCVZDDywnVTBrCKVj6nQS936aX6nkGUnia1aL5znu2a1wPdbGfs72swRXV4K",
  "key33": "65PEsZgrPpgPNmptv8MUA5wn2riMB3u1sZ1yPSwbaRQXq1TxJkeEuse1TSwy7ebRr1TMN96ubVAYzSkDzsNNAwbq",
  "key34": "Zb9QZwLmCfPdtkCdNVHkDN2LbsJvJXUzJCsFZ7yLLbP7siq3vdPW9PCqAX9b88vthJeoP9AVvnhca7yr9Ua2P4e",
  "key35": "KGPHFmj9RyU7S79sWZkSHgBjgkf6H61VnjuG8pkAJeLknKeK29wqr13v8HMFvvbQEzAuCXrVDzmjzq5XTEMMtfp",
  "key36": "5Gj3xzCq1vFpKRFpYNPzv8k1qwhuhTnBLxHdFcPKvaLpGZgDJwRkRiAp4Zy2pxPmWU72Gu221LU5EaVpVYRAA1Qc",
  "key37": "2fQfW93MRb1ybimUPbWhHCk5b1KXRyQ6MjEtEzRKaYaCNgp3Xcp62LpVmEV5qDfnp8Hgjf8wWB1DrUGakKJwbBaY",
  "key38": "4MWqC1cGcKFTviiMMUwP1cTWv8jxMhr7EckdFGGqFYE5NZhMWvaLMB5HcX1VS5jCUm6cFQ8Bs4gVwQHa9LgFFsEz",
  "key39": "3kJ4gHNsnUExneF4tkdarRrHyemhNQQkSVQyczAxeSpq41npzYZ8GC9bHQTd4aexSxXF9cAkquQf1wthzbMdeYZd",
  "key40": "2AnYACpFFRW12uPgw6jS2FeP2igtYFf3n7xeGQgWUFUwKQ988UVsr9n1iC75N9Gkp5FmX5zTA8VHDFsSqKMdXZxy",
  "key41": "5nK1J5bGvgUzvF277PFP4tKMwHpynyzfeZX6SpNQTyK1Ho5Hea7CGeKmdrriJDdjvp3zGfKvDzMMytNnLmcsg2yq",
  "key42": "5UChvcvGUa2Yay62FxjaoH2fH2Gt2Y2xgbGTiKKJ899z6oHo1eRM8jhbrDdUrs9r7Mc7KqGRkW3HLgMgui39Trg4",
  "key43": "2SbHyE8XPJzTnXTRnXcNzhNj5oLyArP3438xCjxV9m3Lp3Bjmah7yb2Fk7UDpDMLfq6Mr5bttZgQEY75jHRxYvKe"
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
