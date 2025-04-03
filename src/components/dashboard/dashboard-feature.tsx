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
    "4o8RtuzqVL1baN3yZuLuDdDKAJMKTDdUukQUkCSNHtj6JokkYwunFt5cCMKrTd3r6QfSfqrky1j2KBnfq398jCBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hf3oxXTXCp6uBHX7TRRqyWeCoW79pbTE9FowTxpqscSZHkxbzBKJPaz3J5byTv5hsD6icDVxgjTinYubaB5qEME",
  "key1": "qTapRZWUHEyvQEqrsjVX2x2kbT9BpGQJume6UepUmSPvqNdMnuUFT5Yc94YhPusnvUZUpU2Ze7rDp2ooYXzawGD",
  "key2": "5ST6TSVnDBA6TdXn3bZwwHqMJuXWZ2WrgVniPrR2v5eQCdDT7U8p2CSWevLCsoNwWvC1sbc41bqreeEMEVg2Hv3D",
  "key3": "5qDMhH7FCkwY1K6FEmJG1J9NW3MqEAcFjfhqsEAhTVUuzNSnRXgPtda7t4NYKT2T9z9Kt6YnXgJUowUBSvgvqWAJ",
  "key4": "5KeNKyxDPSYtuPt4vJdVSqsnzTYhUgQ4DpG8MShV8eNzyrVDKwdgB8G52DidjvAMQgZkWySRcsWkyba1mCK1e5e1",
  "key5": "2V9Q3rfBvejVVoKpXQGS8oChbhyyddAsp6koQsAcT1kGiSw54YUv3y1EFKzqxTwAzrRT4aqfTnZYLjXh9ozrjc6Z",
  "key6": "5rXALRUefF5P1yQLX8MXPEdcPXu3ZkJZL6TMqu4Pg9qvsRMk2pRihbReVQikm1eCfaBh6xNXZWVdtHorRrbPf6Je",
  "key7": "3UvTNreggy3mtRqDAWNtd7rCdxyzHBUeGAW5oKy3tkoFhcdxTxfKmtX5F1oPMnSRN8PjW9sCQL2aRfPaXXhFqsHh",
  "key8": "5MQnohUBR4Mb4C8GtSEA8LDv1Q8dgGsNFs31mQ2rnzXR67oeySMNJNLtYUsGwzKnjzSDkRBsS2iWUGfhiDh5Fxdy",
  "key9": "3ZU3YAxL5K2BzMPP6CWKFp55v58MP5K9oLyKUjWgo2fCVWZGodopdvFVNKkMtGCTzT9bpynPXLYDjYAeGdWqjqu5",
  "key10": "65xgBETQFXAs8ZHY3XiHJhp1ZfooHZDzKMRUB4FNBcLGTGSTfKFbevfZbD1Z64dkQsaRdmt7rVCWbp3qUEm9EQo2",
  "key11": "5YwN3kkpu2xGzYFZo2ksai22GxqhhHAEBfhbKsuwzwLTZEBKutS8ibjYFEpiPmPoG7EvsTSnathHpgWZJTzg3yZt",
  "key12": "2tM9g1hU8ror5yQjKV3MnoSrgfMrNrUbbZhBc38gmZbDJyquZBMnXEaGh9x9rWE1ZRDnCKSNfdJDzjo2REeQ7RRi",
  "key13": "3XtTde6t2TLjgPDsR2oeXEAzMNzkrEjPpNq72CxfRv69nKbqii3sWzgKGvE5xnicFs2JTq6zibdgbqDeGJWAeezM",
  "key14": "22z3igVoUCdoMKpPgibWCErFVSi5LStv4Y6n4LtdDmSsxYY32VtC3v4TdaWPS4MnoFRGfM7VzDuLHNcBoRywtmJo",
  "key15": "2bLeRmjdxJnoRdHRh4HGqWhnNLCJicMCcTPdZG3QNn7o97g3CYPfqn5JTLL4A7SKr68BWqAoScaQwhciDPKZ96Ge",
  "key16": "49bWXNaXwUw8wSbB6TjHJgkSSqPy4GPjgHvWHsLjc9NdwP3uTsLTuxBkbC9mp4YMH2CZTV4sTQznvbG2CsYE4YYL",
  "key17": "2JH4pWsQ3d5gPapZfRjz73rU6TT3eSycDKFDBhXtTdd12NnDupcTSLPvqAvFU6sNEHrogUSQMGvPdTzgn7oz5iYb",
  "key18": "k8wLqdN5iuKwzf1c4J2xgobqVQKb4BWgHTcT4SUG3Jz7SnEZo5mzpUS621VJ4jBNXN4XdZiVkdDBotdw834PLuY",
  "key19": "2EaKKeeLB2zXV8xsR5iLJs8e7oDdjTuTadbFngFxfLrU1wApv5NxCoSeNcj8ya4aVo64HJXFyrFSYgh4ta67cNZx",
  "key20": "4FDJdcz37TaEEUpzvQNUNSx3JKLnH2hbXadws7YxyAJEpKj5om4QEtdVTGPYyo9u7Tw9sbhSspaTy5xERwwP5GZB",
  "key21": "fkK7hSHbkWvpt9aKBNptCwzEZKsdyqn126wpzUdLvg3Z2AzzSZqny9KMqLsTsfLKuhk7JJHCLncQ2QdJcAecd7s",
  "key22": "4J9C3k87GB63wS57yMJoh279zmDKnRyJ4UCvRr953xAf8srSZBgdy5Pw3c67VYoVpjS93TuJtZaPwaU2khCQtw9H",
  "key23": "5cB3ALkuJj3QMFFroxKAVoF34QidyxcGcpw55NHESyPzSYEjkvEXvC4nCcBnTKBztbYThYot6aKFah7oJx7N8wA9",
  "key24": "Hmxrpi4MEBc54YpGPk36oRgegx6xwDzkKb8mnR1wcBRcDDPe5EbJ3nTXiGJQeD7rVjGFLWpP2CRy7n26MqF86fE",
  "key25": "39ZbJgtDBnHAfBtnAM68oySw5v7dETzixCWAnsz4LQ1B7NC5MdvaDrk6A7xXVirwK81zfjkcRe8Q7Y3NxVTBerzu",
  "key26": "4zWMjpyCHoFHJs4BzNATUjKKbLWfsLShUtjBDXdT2ep9Kf3ZEGLZxk68R27yt9P5wtZMvHgxthWKn7AtkrzQBzFg",
  "key27": "2LMEcjyjkcG33T6C1SY4z2MsSuHB2v1CHM8eBNKYuhQ1Ay7TMRTcm8C1HNSpAhsNtWGF6rnNRLfhQRW7g6NEZGL7",
  "key28": "4DYKx153gdR7oNqB4b72i96DJFJzj5nmi1chciiXs36SoXj64hGsJbheSoP4Tc1zgYJjARP9a1KwM6u9Rgx3Zb3f",
  "key29": "2Fcj19o9SF9BtKDsHZvAL5RoY7LDZJBNZavTP1rrjHUwusF9h5pbFmcxH9h9WTh5fbJNjr8jy4uofw8MjAf6UwpY",
  "key30": "CFuu2DQ9zz949ThZPhi2BcXFpT3kdEsXvrt2EeUu1Xsk1SHw1EJ6YdFprdHruf7rBUeg3YqSD22uxKfEAPoEvJo",
  "key31": "2fCwJwgQ5w4etVqqrSe6nmFgTwKW7mDo2fuYDXkd5oNeNqFGNs2cJfF6zhyrJFUiA9zV1EAoFh7z7C8Kr23XRk4e",
  "key32": "AzC5o8HUgNm5MeYXF28yiGc7NdRJCAAmvG5VZQEWnCy1rC6FsYkAiUS9wD6jvZR4Cr7CnPh9uYNLZipwHVHNinQ",
  "key33": "4SHMYRHQq1hTmhH2eawfdP9U5c9Ksm6xdScJo4FYGkk8X7NYmsEWFbi753dvQMDYnttrKJNi7Wyc8zBQjiLzveaK",
  "key34": "361ggdaiEhu8U9ohnNw9u5b8tQzLyCR1JfoTUeVZiGp5W2Y29eKrZSzhj8HTS8aDtX7LRMC8Mpq2wBzU47Prakrh",
  "key35": "bxdHhm7CmQKrjVPLYvVLJFHTaVaWaVQ9vEDqq4r1sT5oedjiV2hguxrA8dc4kCpgC8wQ8eDoBWs6XNSu6LNjwpw",
  "key36": "5MLxez3YKifFwNox4jXLxSUemYbP5dXKMBPT1pwWHg53MXDq7UEU8FYzDKL3sbKikWiu6bAPVNGGdEoJc9Nv8uMu",
  "key37": "24Y4dLcNraGUkGK1KWKARatCGhoTNsDn9PN5AXwpkvsx2Y9CJYJRWb4232dXdWPBDAtcwA3aKqijzFYvGS8E4g79",
  "key38": "2vrV8Co9KPAhbaNpmiAzdvnGFnNXcVjLEuRHS7a48LvFpvzcGTGfjgGtGy8sDdUzLTLEQ9pZ5NwKoQ892Ax9wvL5",
  "key39": "5Bg8FLJMVMMHdM3sZh39XLwVyfkukoUmiGmQ7j4k1rUWct2RBWvziUyBPBTko6ZJsDkDdDD36UPT7u2cdVa7nhq5",
  "key40": "4DTS82PCXacUURYF25FFg7pzm5sVRDEdkAL8TvNSi3ovkiDRsz9jG1EUppY5kFjnVGUju4ha89WZcd7QmJim7n3L",
  "key41": "RgSs8fVWdfNdNVPmLehwDHe9YjcfYkR9CVhxjBBnyxqmZ1umbUqNM4DoWR9nmc9Pt26USBMGDMdG4CzZZv1NfBq",
  "key42": "5byVQEdorNpz3VS24ykuj1mv7bx7ExmaisLvD3ynqnAitPTcUepNUcWMJfKdFUrrrauW78RFBUUE976PW9vdP6dN",
  "key43": "A1HK5y3aHxQ8QjoZBrC2P4AhNM4zzR95q26yCh9rXvrrCqe825fP5aYd1PN6ptyvpv7gUnVAoVL8DwmEiLVdLNr",
  "key44": "53cMfxhxQ6DS8JvgAsZmkpYK2WbSLvZr6iENsjuzLwvYLnauKMWQBCfQAcqJo8ZhebHimEJC4sVxL8ADrYJA2bTK",
  "key45": "xkASEQSMdZRLq3UFHnpKVbzWT7yQ9g8nNx2MtJUxCLWgXcaND1Xc1xTQZbSryNza8VcBPXRESyUtFc2PdcctMcb",
  "key46": "2JrqmUpHCVNwH8G7vfPc6N61e8JzLnwF7wveRXQS2MsA6ZTC6v6siU72deMq76JkGC52Wir5fvHyU6b5MhMCvbXY"
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
