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
    "ofhsdtJDJmcnqkfdrTRWZFhxVfGXVLYj6Ke5NC1ZYRiRjHTPG2uYZ44TscAzpaw6QW3r1A1HFi8U9ubB5NbaeT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zQ8Qavx5d1Zde1yK1jnw8envccntPwVcw98U2N2ZY9hoWS5a3zddejqbJXKSSRFEN9Cid3AMenwv6qaq99XWA55",
  "key1": "4Dnrah2qyYDjWTYvFYhUtEoyoHeaXCsHWvK1STzBHnsbW7WXvvr4FinRnigVXHSyLLsJTkZhFZbXADdLHjGZCYDQ",
  "key2": "2y4W412GTnrSG6iUeH4Bz7MsPXV5hCGPPm2s3Q4ombQhj4Gwx5q2S8NGibcnqPBvH87fqUaimyFid2HQFMfovm59",
  "key3": "3edBPMZQY6JPKopH9JAoQqwqHzvBLRePc4pDd6kgukjwdk7j4FDGbkQL2qSKrWN3HwpeMaYtBEqeCtVfbiujwv7W",
  "key4": "V6Be7vPexcg8ss73hPWiEB19bcDzsACjW3GdAcNLaHqAUNEkWQXkbKQwuicyP3ySFMq6H3uZ3A4m6LjXfS5TD6j",
  "key5": "2YcUSJk75dgMvFZbHEr7Skj6M1tTbJBeb4GTTEQ2Rk1mxDuViwDt1qMNwMytvGe3fAf2s2BNPGY3NSK2by6vqiG4",
  "key6": "4bRbMEiJXgP4xoVm1WoizSvskmPQDBbvZLdCt8L4tcGKCgi5U7t4dQStxtTSydAuNKeb6yp1mye8kNaakBiYFVgM",
  "key7": "3X4h6MooA8BkyLJmsDi5Ph83kBXbp87bMGHcS1SesknPThj2tYfVkY7eixgrqaGLm8tTSyS6yg3rcDPjTnuTUbPu",
  "key8": "5YJuotvnSZottYaSb6ng9kzZw7vp7H7YCdZSngmYRQbmHziEQ1Nr5o2rXi35ieUoKz2T1SMea3FRkrhFcZcWmrGC",
  "key9": "3XkRoAQARsXBzvKALKs8Z7RWhqbRQGU9fZwX5RqzRs6CWAc8sravA5URjD6ZXdmGVtd9rZ6qTJYXaEuT9coN9C7q",
  "key10": "2xTpJrXmErKNbaWpeQsjHbs5des5d6f3FDjWLiUj4icqLdx7ppDXi8veToWvYYhyoKmCMDPiK21HZ6u1gZ7zJc8R",
  "key11": "nmvqbhbFaMcq2znLypCdp6G4TAKs9ipWpM1LnfEfik7gKTB9QZTQRUGKZNx1x6XJf1NnPwcZGYhi73MCpF4QuFE",
  "key12": "3HvZ9kU4N8tutC3Exbh1BMpReymmFp8jo7xfgJvZbLgGNunJ6ZsK2ubLAzbGGtBTJKFarAQ4xTnqFjdpnJMvJZgt",
  "key13": "4NGF3o7uKNG3BJdiLgtRUnYCDABVBTYVcm9a6c2zrytnLzBonph62Pe58wZNby8CHfvvSZnTq7QAXJsPawG9rPKd",
  "key14": "2eTTbbTPmd74sNHFQXz6GUZqCCkcEC1o9reR3fgDk887wQ32eaCtLsNsWHvx3vNZTf1fmyMUkLGcPk6yPHRvLZi5",
  "key15": "2BZsMURuERKpCa12Gnxsu1JREXMXrXeS887F8nvjxTrhPLsVGA51af2FxNzyV4z6gryGAeYfHNju9xhiE6BxvFpL",
  "key16": "jBJVwu9ZrZPLDUx3RWnskrxVha81iUBjAamzNea3AGsQDkg8wKjNwTPgidCecNbTURTRkt88oZXCut9YfYC9G32",
  "key17": "uPb2DZVPMLCmimRqCCfzM7waTWnYV8NawJiJPBQ2bY9CYV8ApK9xUvHVTJHATsUAmrfymg7HhLF7kcayA4dZPxT",
  "key18": "3RxVqLXDR2BkNwc6VLWLA7SVGTUNSFer48YEWnYneWmfHXGPFqcQHp7iGrrsB4EcXzYdur9T6rfFYvs5UTvATX31",
  "key19": "3SWcTRmn1iKTeqWdq9srT9vNMj2hiXrytBVqGXM1k22XySyvfAbcoquvqes3XTUSHD3p8oa1stHeEqnZX6BccURX",
  "key20": "4MwEyTrfzRxPWcUEUDJxurGvLFgoAzSH1Q7QVxrxtSiidyFRxR8fEh7PCbVw9uJKbXr74NsLShyc1RXhkUTe6Mrr",
  "key21": "2LQbeDGhjBM67FEN8EwNBRSoenhKPKccmFJxPvyNrzfJ96MYU33t8YgWxzgPsdFER8AHTL2F73ghdAezzGNPfDYR",
  "key22": "2vQh19GiG35u6VG2CUQoUHJeGSiZVN2QcJrq6GBwjQru7qskFLshTW9oVfVixEo4TxavrpJYHGaTbBd2atKQWpsC",
  "key23": "5Zg6WijEvsxM5HoCKy3beAADdu4a4BdQFk7RCgrLFD7pCmSwwDmLp2SE7q43cT2XWeMC7BPKqnB3YBdaeLrsLDGy",
  "key24": "iFbP1Lg7iGeNDteVcpbpMBsKjzJQQfh7tcyC6UDQwbx6yMRnmt1UmupfZy2fnPLao2Lv6NJGKkHUWdfyzMoznPK",
  "key25": "2CW6Tg4S2K51GcrRGc8a2HeBDWik2sLGnrpnqfoP77495Du4AA92ec7Zaf5nZC1r2Lzp9QAHjSJUrdtADVJdbQid",
  "key26": "4PFQ41qqJu2JWQS4yEUp1YwnatRuCdZGmyS3UzYZv7tFoXGXfj5kuHCxJkP8hqAb6hhWXnmE3Ga9SeHSuYtBqiDe",
  "key27": "2oVoPSvmBFjEiXp6EUhs3eoKfTewfcQ4Zkc4JQhMmyFeCwAguKhsitRqtuYuHuYPyuCAZn96x3NBzREeabnZQE5e",
  "key28": "4oeTHijhrguAbJfnV5xkET6X1hBpNJmTUQT2G8HBJ11vqguKYSKX3NCSbHRY8VfjbW5qnu3qMZe6m5xFQkA5GhRq",
  "key29": "3tUfxX3HJx1vR9VY6vBkA7UquM4tLPSv5rSsMEBamwcUb5kqF4pSbvwy8XrPXczHqmmHwsKb1obB6jnX5QDpYfJh",
  "key30": "4KKGiPpuihmA1cNHmaT2aJHg2ZSbVoZ8Ph9GGtatNPCtUeiZi9hhBAV1GgbyEmwanEifHgmunX1PQkAKMbDFPg9x",
  "key31": "5benctc8NoXqjBKAQ4q5gVTnftyQiYii2c83JwJvghivr9VwCcXH61QRZu8Exa7L5ybbSCEQRiHkroKL8P4LHc2a",
  "key32": "4QK4anjXGTcmsnEGZHt47NET3ibEx8pHGjwAWWKfS4fUeu7cMxZ7cSgdh2R5bwJDeCKNXfEvXZqfxYLXgkRD5TiT",
  "key33": "3jMo7cadi2BDeJzvnhTArQxtR2WkwFiBbmQPbWCZuxmwRqVySJ8LF8dZHBvL91jDY2kjyShcVxQDecs7HVaMHNn4",
  "key34": "5f7VTRx4CXDZSDoN1azxGCXvxA5xq7cVtNhkHpXtt1ys5PAE9V8giTAG3cnboUzteKTgGKMFYJRHQEEwwpiihMbY",
  "key35": "3y3rRvirvXZ2U3LXPgpVigpJD6uXfwcKL58ThpxggpVnECAsQLYxGU7Jhi8iUsrtZuBBSxmsgciX1cExdnfw13JK",
  "key36": "4GJomMXLyRKqjevb6BHCD2uh2C6nPNEUy9WmCimsHeaBhBqWUCbrjfBoXNfyQACfph1zpivmrjtupiCFjodjycX8",
  "key37": "27D3mWcn4y78m3vvmo468FWjFFUSd8Zq526CJahhnVEvN463ULhVnA17Xhcw5C2iAQJ4kcwcu4JH8M6Qz3nHuEQY",
  "key38": "5LnQRr4GywECu3Epr2uPbA9SBdeXJdAAzKuYi4GGbhzYvEybinf5qn3tzSVnqBpjtBsCCH7YEqqX6s9pDQ4ms5k7",
  "key39": "ZSJGteg76J5B7QmmC1q1hrRdzKRciSPwYGg5DtLMrkstoW5qcGwmJVEnZGeBKnjy8v1vWZW3oFCM3PstohY2AsA",
  "key40": "5HS1XvVhznNkuAJvnvZUYV4GzABudQ99tCKVyofZXAyyiocG2Sox979zCrdKeg2Aw7TJW5NLXViatFHxs9mxYjmY",
  "key41": "22GpgsZLzWAVPKFy5We8SLJmPeygJj2kddwb5RtMVhkVX3uvahB7fXJWQSAzpEcKes7nRQK7UuL1F1KLTMWHvqrK",
  "key42": "4fHXP8upiDdycHAfgmY5yi66PE9bq7qgN5M8CC2K3AXR8agQksDdHdtoTbudSrA3vEJrjcaCqcsMSF8FTXFWV1hy",
  "key43": "4YhNuqGYSUgXzrskEALEwDLDRCmiNfDLxeDTJZ5V8B1jkXLeP9zJWC9hdrvAenZe3mYzn82RUMgNfV172odA6ZWD",
  "key44": "48JUUGToe8BKegY3ReCB8jewz2SHrhewJBL7CP1Xq8os8Q1o1BC5NJpoi2sNNAGSjd1quQzTGP6u3nMsEe5XyqV1",
  "key45": "3R92Ly1asxPigFiLLWAyZp3YzWnZmPApjcsDCHeV3G5i8aEbLgK7LFsb2PEMfLoFVBYeuiVHb9D1ed66Tii7tsL2"
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
