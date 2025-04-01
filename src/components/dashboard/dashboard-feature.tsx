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
    "4irWY54AL1XRmwSPm8qHg8SNJjna4w3hzw7XMULRP443hbpMZuB6qhwcsFhcw7Q29TcFqB27sjhuEGroBg3aXBXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SQLP1Ywhsq9dYg3UVwhStxXpyhakqYmCMQnPPyWxSM56hvnLSQE972evf3KX3DgA2fZipjaWusU7vtxwLvqddqq",
  "key1": "4qCM7azEWNDqbAjkJB6m7DSG3UB2c8EyYkGdDZQVftCeQsAAiBN4tU3QRJ9nhdRPmNBJ2XuqqWHcabWoxMjjoh6u",
  "key2": "3bZCZwdZxWqdBHtrwPSUjCgTULhELfHifMW87dbMsRUvtKjqXybFZcD76YkAg1derA5d7FNNHF82L6PdWtxQNJVk",
  "key3": "4FqiBDUyZe8nbJmY6ktUukkWsFFsUW5tiUcvRgVrWFrDKG9NV4f1jrtkdxDroyswsR59bDD9qwD4wJMdtw4sYThf",
  "key4": "Csg8sWHb7ixJgPQvWdjvtE4qNa5hPZZ6mBeCKfi7pm8XioJJbt6iexe6f8jL7rMpfswmwYzW6ATCXksTzq5WSt5",
  "key5": "4HnfEaVwNby56WqV8osm79VBcWxgTtDNoxebwwLNkB6TgiPTJYg1XL4b6NJMJmVgBaCvwDjD5A6pUVGWH59dXNgW",
  "key6": "5izDXFtQiBbgpwi1tXVAKTmJtoh7JuTinzDNuePd6kRKVE8hoVUPq77T5rbtzzk75mxQ3eUopWsDEwqP43fLRme1",
  "key7": "2iYBRV7HQcFWmZKaAiQCnmBW9gCQHiaEsybdfEJSF4QDPmHZRQZFFVr9GakZbxDMG6UCtvryKwSQkxx5v98392Nc",
  "key8": "43vgxUkV1DA4w3Cd9QpE7hNTRyR2Vz2puAXxBb48txNWwxH7CxjCyp1gQ2sWe1mbbu7Q9g53vRkrauBo4nxubakG",
  "key9": "3QqyEREyNkq6JG1Tb7CZNuAcCkT6QhwPg3Fj8ZjzH2yJn82shxkavGwUPaW5xQtUU5ANQKQnuZCnPBc3paWPfTKq",
  "key10": "3FNoWeSZMrJgS9Hsw8HLM9w6hqgZT5cP7neT1JEFUKJ7BEJU5SSFpzFC9usGAj55WgJQgJrNU2hghGq7WAcAmDFE",
  "key11": "eyuZnd77ANMA5ntnW7gzFcmG6TLGNgCmJcCrGd3bphzLSDt19CMtjcAWCeYxsdqrJwfpdViowFZ8mgT2pPP3wsJ",
  "key12": "66QyYEFseKVxWL1xkoPosmXDMKmvwzftacWZkbK1UZrLEXGvDGVgTKtb7ASCL2LW9o3vR8DdWoWeqyi7gG7uiDvn",
  "key13": "5LWkotNPXUBHW4nqaWHC9hs84JvbpyR4gfV4xaZs1BH6YwE8jfd2U7fB526gLa2LnwzEQUT8q854kqqoboEjGaR3",
  "key14": "3BqNgzLiCqY6Q7dphA1EcGXfygV6pjj33EMeWtAENHueuwJ2rupDcvXFwVk7p5u5uKthYcM5wM7aZfCWCwcQPoa",
  "key15": "31ZSFxkewtQb5qKRWef3ddvQ2gaTuu26DGwYvk8MvnBhZGpkMSqLpTBZGE9TAun59RcqaJPwLgTf7iVBkUXXJRSo",
  "key16": "571p51QUfveFt8UfkAJZD2HfSr9YbkpK8zQAGabHcHyKJa8KuyGzuJeVrE2Ct65JXugUn1KFX48iihe8c28MCtiD",
  "key17": "23rgPgTy1SBFfBGQYpPpzdiYWS7bai8sYUg513G24EhyLubNrfwWcNMyXMcxJa3LkWpGU9ungkEW457NaETzidzE",
  "key18": "2gKG6P4DCGPYESMEV6Xgrd29fbVqtvqX4bdSPY4rwgyGrHCzHqqQE3kAHbsRDfmjkTbmqwBZRZu6BwEjuMfZJXFK",
  "key19": "4uU8vHvf6nhhYMNxBMP9xrPt7HsovEBDMEkcsKJTS3sEnZna6DJfW2AVBzPcCibfWLPixu9wzWw1uSAv6Y8sBMC3",
  "key20": "2LsGhBTuDhCVvDtXbW4FyxWsfFv5NHSgMxaSYVA7T1NQugftLGPKJzuojj7YuNsH5muqdFv9nrbDGRaZ3d8ZYw45",
  "key21": "3G5fdsdxPuDdpCdLCZVGN1r1mvs8yFK4NQ45w9rbKT7e2rCyt1dkHhpfJrFCefq2dBa3ZbzCWt8oiQWqbnXnV7oQ",
  "key22": "3jYoWkDzNgQbpAXqFHpgjXn5eoF1QaNNmiEAZWMoVRw381M13erPQG2tsMjAb4ZKZVEumAqxnH5zXRiZbXmxnAED",
  "key23": "4iQfZMMjsziDRf2u1PMHZquYrcBfQFmVNSd6eqMYrdJFdMcWZzYkfDgPiyW5DninC2XMpdk2vTP8cnnqBjsd8ukF",
  "key24": "DiaePp6DWUe95o5TQiLEi25ZCP9G8D9CB23jZdC96BGT4YFgQdtkjRNEtbhdS4ZoMohiYduTwspT9pkyLm9Wyh9",
  "key25": "w1ER75KzeD5HgtAcUvTWK4zcZDnVC83HGPH9VFyrCeRZMVkgdhEgByvsF79Tm6ESpbCp9ioz5aQe5hBPcF6JVKz",
  "key26": "23Q79kj2DtMK7Xffs4tij8oasBpeWg7nF9Vvs2HAs11HsjNXMPnNYAUKAFxZs3tCEWKcrrPhhwYBDsrwKW3GjyLB",
  "key27": "538m4Bpfrv6wFhsQ1WZRwgcLTWezAJqmh9qcJqC3f55oKNSt9PDrbzAPPqopZ5RLvAdw8EqHC84S4kBRAtjz3BfD",
  "key28": "5vXbhC3E1ovYJogdSdQxebY9oWZodi2y8cFTZm5z9X6LWRjsuRoGVuSc79tepDBMERRTCr7L9kdy8Rv6cXGzyddo",
  "key29": "bNck3jTTtEWoQ5AxXv3iDewHcrXfQdGS1pdhHkFRSQUhTTMt792HGeAkxTmBrWjScoxQfZLc9e3xVXDMCRBoUXt",
  "key30": "3JWaG8QtwBDyQmXWaHsakKkuq8CBAxNZ79Aw7UoySRsuvNetPrXZ8k7ZKBwcjg6Zb162cAD5vA5WjCzzFZhnAgGj",
  "key31": "5wbVVe3uVqUoXM3V9EbBPHsEbPyPLy9HdD4PWDucR7MwnM9dwX74LerAN1eERhQmk1HS7jFrhL2Z3vX4A1C6VWVQ",
  "key32": "3xKuBFMRvXXcyFr7tqwe4qfi5V9xHf348ji4CPf3BPYHxnBBHUqgdzSpRSYr2S2Mv8c6QC1u2hrdDztwfkEmnQ6g",
  "key33": "462QSw2dZQ35fGrBu4z8yUyBrXW1Jd66B7H6nJbpUdFshnWqAZhD4Rbvj49j7fDoX4VwbAybKQqwpX8MwxC3PYAU",
  "key34": "6N8mg76a3Fft6RPezEUoqar7wEKoChwHLAjmUti9rJKuvHdzuWbVrzEqT3atrVVZyaAUctSuMcGw6ZghHKdizVu",
  "key35": "25CNc62iZQusY48iadfNBH1KK77toRWfAutjBM5iSMoB9eRA37nymtMfWr84v4q2h2HWWT1jXkyzNXFwvh2EFRSK",
  "key36": "51B2JUykrQSqMGkwp2HEPswkLaJb4rKLok6iz46ahoJDm3fmWt7PiB2dDKHxRX1TAgCGuQgRRPHYu7Kq9Fh7DsiF",
  "key37": "3cMivPMpGDhUnS1Tk33kdGupmpydZ4sJrkUPLRF3pXCLviw3nLHASdv5FNH4j4VoYRk7u5Mxz7c8HWKaKZZgLEun",
  "key38": "ufzzXDSaiXMzM4oK2oN2xX4ufJnFcd1SNXyCwYisSCC2wA1MPSWC4kQdXHLCyE1phofzsQdGzwTRebC55LyxiGQ",
  "key39": "2sa6GixmGQckJmh3GYSTkm3pfxFmXyh6JA7GQCqWAqeSb8tzU5Kg2f2DtCSNeBPJ1x9Ayy9GpUrcCsArVVLTTsyU",
  "key40": "21ZAcM2EiDw6tUEuvXj1vNUVwscNCSxUkti97bKQ4UjaFa5ZMokTaX6a7VCT7hfSCiTiHNjx2PaddF9v8zt2ZPw7",
  "key41": "2tEgeBkemQzaKy6f7Yscfn5XgvaGiqjkKKQgJBxpPYwaP6eS55D6gnx7sPJcYjs7EbTYXj5gzcci3n5j9znsETPg",
  "key42": "EzjcS8yGKxHqmAYiTvEhqqy5hSPsDh2QvwCJv1VSfqPWjFTYsvqv1JsCxQrZKTsxTyqy5E84HhYHygJeLgtZ5ct",
  "key43": "dn1nWtcPuJpK4WeUsMbboRZcPhpw2HSvkWx4vhSNi6WZs5YbZh63VrCM7YDanwpCpd3Ww4sjWPtEaqATDqFJjMC",
  "key44": "3TDydWqyrCuak88qsAmUy46i9ajRbC5cZ7BJ3JydwXFkGjzq7HmLAQBKFWf2MT1f7NwPWYzQGVakFuCsDdnygpiZ",
  "key45": "4rJTMpdrKtvYM7LQvLUVF2SdRSRoFocPA5dTC1quwozfC4YqC8gfv4QvgwdjQzfsHRKbQA56xJ4KC6JmSsiKZU1Q",
  "key46": "2v2iXJDtF4hiPYsjSnPAW4RYRwaBZsemrnQZ2Mm3hyCwLkLWmJUaT9h5DEGq9SZkVdGs66SW52ciWHzBQot2qhoF"
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
