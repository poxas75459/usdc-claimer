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
    "58nuWhJL1piTbhXAswYpc2FX1Vd42r58s8K9yCz3RfngXDtyPV2hFS8jzz2VzvhK9Lgo4SzywPA8KQVH9aqdvX6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zbpBCDdDZbwLeWb1U4HNyYSpaDs4xumkRcudrJJxSK1FRkvsRMrfVhzfiDKuqLxYuxBzA1mzQTLnCyd7fKgnxy3",
  "key1": "auLfzcWAXKz4XArfHkguytTcjv5AWyG2v5uPvy6Lba8n9rY4XQ9SKKZ76aLHQs6ByeqVM62EQYzeEpGGEyLFrmA",
  "key2": "4qAaV2zzMpZx4B5NTBdHyWEM3LHtXaHxPHiRRREfn7ABbBuXncNDa8PMqnXSc7BctAikRXTafqD2wcBjFgJVRevJ",
  "key3": "32GzoehnhdZXDo4wh9Dgkq755QFdRGkTnZZ8zwqVV2qs123af7K1Jo8gcipND4HiYc2zAyF9GkmwrtpQMEN1FoPB",
  "key4": "4SF4V3Wx68T68SMyV6mJfaDE3xkGGvYen5K6zEMBo8shz8wRS4DUAgNS3zq7MwUawnA1xnJEnq46AYhpSeW4Jyx9",
  "key5": "2KZMR3sXMcYVpKwXSNJP4a6j6o9NZ37yFf8bHEuFxeS5aRnUPbGJr4aMWyFhv3qVaecbFszs9y2mo8Pug3HS6mSU",
  "key6": "4F4m1nzZWqnAKuKzAcKmNBBNvT1j7QAZQ8UhskFquR36WhTw5MG3iBzwSFq1Eq6u3JFNMWoXmMupwe4yKxBLUgH6",
  "key7": "3dh87DqNoPkiUUCJPf2rCGYwLiWEt5Mm2pLaNeCGRFR3qJEeGALxaTEuwJNeTuerw8PPXtkkPLJrrsJYumXT544F",
  "key8": "3JHnh8ikfBg6uwNepD3EeW4nhp7HMqX2iX7ssXh3izweUyw89w7g3q1goE5aZdztrsK2RjZoQQg1Pib5uxFUsuxr",
  "key9": "xfaaquX3xdE9VS6fxqYnksZzsqBYcGw76BtAfSUQCarJMAefp3YKH9sDU4TRH3A8XNs2YQfT66j3uRZBVucQoHH",
  "key10": "22BwsF8WYBwqsumGwMUP1sdirjD8U3oMYPrVLHUkYF9rjfa7Kjz3tByrpoi22mohMrkMrSC8d8kS6Gje6cUADYQ9",
  "key11": "62Ubyz6FkycnyLH3ePsx4bdsWzJW4ev59FgZohtyMWse3gbDEpHpy5dL3BCrZs8ViqhYJ7TFau4pz4jC2Vsimnn1",
  "key12": "2QJyRFV2NMUfdybmjEViKfJR9fRBBJ9qmQcAMxe13d4kiz9cV5oyZZvnCmq5YWLYHKR49PBTVuqayC7ytsSWuTzF",
  "key13": "55SkggTDcxyFy8dujv4WdZC7iBcEwTu2AAa8yce6pasqS52pJxRMmbSDbUDqhuLS1f2sDvDFvZsPU1S4giX9Yo5i",
  "key14": "39ew4vDgycjvhBQY67gcT8882qYiqVZ53MdJr25kdHgMGsXg8Hx1YocA694oDFGF1hinttsVVgsczyLpwTQuZoPL",
  "key15": "5DcZwLYKVTGQBzk9XrPwVS14ZoZenS4zPAEvLcs6mKSXC7pdtRNWqSGH1EcsHkHKrS8hcczENxQpqcqeqKmMtubG",
  "key16": "2vxfN111NbKwLh8R5e43nyR7nqerNSK7qt3gRSUJhhcGjKXVZSpm86D2U1MesfRJeW7HAQvvqoxwJt1LyhiGG68a",
  "key17": "xsG6P1VxfLHv69XjHKbc44J3cdDmX95VW73FeGfVq1XqKzM6r3jcCBXjDumUHmTDjjPFZzUArDZbo2PY8syCzwz",
  "key18": "3shuNP3vyR8RT6oRurbZZW3xgRzD2V3ab2VE5GgTuYd7cvDnVLTHgnXRmtSxKVe7xZ7fyKGnTNKZbqPYYBZhjwTq",
  "key19": "63pkBA9XGAXDcvPwgmYpnA5gAMeMpf1BUR5UXfYb2NaUkBzUkoXjWJ3eM7yV2SH5UrvmJrqekK6QqmxzEkfiWsDi",
  "key20": "4Fqexij69zywLU79gEUdyiCHxqdHjXjjddnBmgLX2TEt9nSxebeBxZwgZuCtRzchyDQ5ZCUREPQo2GhKJpwo68g3",
  "key21": "34DpYH6QxDdqr46ma253CEoedcQJW7ZxGxACS5FydiNqeaPPUgsTrP59DN72doELUvsPXMcgHwNnN5cKCHANfNgW",
  "key22": "2x3xZp9YpTo9q5E9rftxCDBtETP31QWszRTbaV4rSqccRK8uD3rTBFDBbTQzYJL5b7JQzw1XqQJeiS2DMacqYyPS",
  "key23": "5MHr5qPiphr8ikwxEjUZZAnQjDZAu99vT9p647RiYtWLGsWvLCZz9hsWEuG3VuRPEykdS4qbBk1KAUNyew6NEApV",
  "key24": "dMD9hU9xAM24MwipS6qgj5BsEB5mwmfN8o3ZdQNpnwTuoUEC45truKMCyxrAFV5jrqRehbSrhhKLSt4GBeLxxMr",
  "key25": "39pnH2qP4iNLTK5mDBWHp5wZpe6jVH9bWUptBd8DeGHyMfvoLE1kjyYYCZAvnmcdRyqMVi1bTTLTXQg2LxUjpjQA",
  "key26": "2vpD5sVmfeHvSezGg4ytnMM63csuc6hkUXHzKz7LznQDTmEjyJ34m8VDTehMv3vXP66nTu4cwReRpB2r1nnxTEXy",
  "key27": "BDeNzHNKBipXEmBHBzsiNZGe9BfsSBjNRbnUTpScEM7ZFL25ZFHkdAzYYZ4chLre2CCck86sfauK3Cpow1A3DAH",
  "key28": "4kodcLjdES4d8uN5xyCT5Kc9oUFTS41Q6qgQwfpwvXkaKY56AwqibXbM9nJsYyD6M4YWLJNrG2v8L8yau1UofBm4",
  "key29": "SuBut1xSsA2y6z4A7L3vvuJEkqGwC6S3yJVSuJzas8JPP4ibgFp78QWf6EQ42UoHX2DfYHot5PWVQgE4SkfZTJ2",
  "key30": "kfGPFGxs2j22eszAFsz3bYrSEWPDrpchdse9QnryadXd3UjLnjiNorEoL9RSdo1RPQhiGxThDLxyBKoSWkb1gEC",
  "key31": "QKLNrzNczByXBwtrWnsFKS7EJfKXNzVmJZdGmm1P6CaXBhSyiTkSeeHpDA7opWZu8Le43XBkqi5hJZHQYuwSnSZ",
  "key32": "1dmR8x5xtLpksRxUWvNhD7i7Fu7WvTQ1jbuKQNpVzwZWzL7nDx5xtiKBurGKkoQv3i5fR2C9ErdKHcAgnozB7Ez",
  "key33": "2oLnpGBCfpjK5wA1XJiBCZZUyVVqmdH9pUTym6X9zhAZoSnFFH7A1XC7zAMK8uKjSfyJPHBMirej5Qu3A6ZEhsNR",
  "key34": "4BduEMjP3ym4uZKWYjo8oBxvAegsBkbxXN7wLVfvqfRoVhGmZH4weECZ3NJVr1S6YJaSoFja1zfAKieMVPB8wrfU",
  "key35": "4ZhGuVsz32Aai1AUhfxStnJPse1gUUhGnSga9mZMujbUFfFWRkbHbKgPNKUy9GoSJTVarde2nsjPbbvbvDftoQxw",
  "key36": "5qhimoUtZ2XnMqkdb9XMSjhiCdtG5hV4MCLE5MDvjKKF5CViewsPAWKybHGQphihkwpjEJijfBX7nVEfvbGNrxhx",
  "key37": "4iMa5PFrw2hBFMWL9AnbhQJBnJanMmua2kgnR6e9Axj2W1USMpYKJfkeVkn95cp1SCZNFrDKR2S8kzReTVQJD7ee",
  "key38": "3D7wT2gXk7yHkupBYUNBMU14LJ9N7iSpGHFmqozmrNHcHmVsZJve3ntCHWWmbffJ671bK6Q4b6xFKAXReW9uHVhg",
  "key39": "3PoGdSLPWRpMqjVsqjsiCJMiL6gHAer3nh9e9wbcLUf3hVVxTjCyn6nmeWD4qxv93XsSTgTyqFwhFxqfeYucrSxk",
  "key40": "2jsS7Dn8Cjzs2bdLLrjZbdPP5eKDWQPcgyrPKM7jmYu5XRca8mXv2QJvb5ocXfyEQEUvm1ERJV5pgmHjCamrLBWr",
  "key41": "3YMrFbgV91W4JbA55CV8JzQfgkRh1AnDXcRL1jHHorRNGg5ZmJDL3yXoxMQd5Ge2XaaETz9dYCpCFo4sGo1vvoYK",
  "key42": "5hoGCGWth6Jnnroq17x6qHMq2H4U1fkWM2ZGXqQJes2KKcsyKr4iB8g8dMbZvNP7BbzyoNGK78hry2oJZFpdtVRT",
  "key43": "5GQTmKUQ7iC8Vs2u2eW2Y1gUfvupXLBpATtnUXrnQKq6M8wkP3Qhqxw8ycQnmSi8VcCu2yWpnim7pTEsjaermZkD",
  "key44": "4gH9dUnShvVYZEJUuD58kT1fkox4KYxN9gHMNJcSARqwmgQS8zpDDxxtdsWFovaH82ZyKiFeqtxBK8B96YXXTBya",
  "key45": "28xb2wB9jv3uR56zbauWZPaFjYy78H3Ph6ASayiwnNbvfUsJVxPzJMgrNK5wgVn7qDkrDjQanV4UYE1iUUXjypyG",
  "key46": "2gro19mJ1CgsTnT9eQkJzjeSUgVmqLL4YMT2SKHTCTbq7JzktLRH2rbrjrVRa364qGFBspFEJNLmLTsQcBzS59pN",
  "key47": "4WyGjbwURNdHzVV7DpRWMQAJfQLd9gs8EQW8mnG7UzU1jtdcSUrShKswUA9269trF5GkgbEmHEWo61FJGsb8VzbC",
  "key48": "4etaHq4czxEywFV8FHWyBQpqgyt4USLTrvXJ68WaSo6UMKX2r41HpwET5yizMEf3NSNaT1H6WQr8frLKQiLGaxYr"
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
