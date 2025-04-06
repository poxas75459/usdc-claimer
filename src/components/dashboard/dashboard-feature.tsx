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
    "27cef8qCQjtmCcJLMn9Q3hY7oaWJ2SofbSpQVeC6EJkGyDeSDGWejjiT5bCtJTFtcWUW5js1muQPDb5ezFXXufkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V4PYhkSkej1Gef9F8mw5j5hpK54uiJpjm9Ho4SkTxfCgPqV9nrG8nTJCaQzy57gZhfA3BwXzZEevwRZy7RUTiwU",
  "key1": "5gAx1kqDud5Tt9VbyMjz1vrJCJFkXqeBUhbi89eQyqnEQVezTWkuxtDmDHXPuyax9vicvf2XqZDanrPfBmjPaWWF",
  "key2": "jbxhUq77DHd4aFHWY7vAug1WUsaLTNPVDqiX6BvJ7yTrAKqWnNi5hY7Sux3XcWUqmFciCCEnNbWdniMhb9hNL5Q",
  "key3": "5ReHjKRstt7gxGjhZhj9xatHGqG2aHm1u5Dsyp8CufFRjz1CHrZUPRCWRbL4W5Lvo4tGmphixJkm9UfE9bTLtCbH",
  "key4": "5fMCUtmk8prTp7smVCo5zgQycL5ZYo5yEvfyyW66KUSfZmsHN5CHYPqFR91UBUxZ28A2vQjs82NWqbo3vGnbHdaS",
  "key5": "JDzZjgmXeBvvUGc3VX5ZYLR7jbuF7LueqwMjkbsjfEpAUW2zFmjeQUHqeij5VNHH3puy8567GHv6urRxcu2U5Gp",
  "key6": "5XCtdDbp6netfALH6UFB2XMesstYw1GCZF2HuEWFfcviCrBxwzDwTTtUMmmx3kKbXZhBfCWY8kBYLF8bjGbA1Da5",
  "key7": "5hPCnaH6u8ha8MqX2cFkyVq4nTtvQGjitgN4YcDzZfRGGpWqiVJxGPV6Py3paySdgLtftLi64YUvHY1gpCQ4nBMw",
  "key8": "2DdaDb9YSgb9CpmPK2sXa7khR6MqTM7jvtUmDshzyhJT2Qws5xCPT5U7KsMJLLc8SLeweCHwhqY6vLhppBB861kS",
  "key9": "2G1ZEv2qmppGdxwjdpVfbkmWoz63CLFU6MbEhh6WcUNCT6XyWDVQ3dUhW5kzRCAi5Ficoay2FECvNWSvE1U72eoV",
  "key10": "24i3dFwerrMUGFudgX4TxJkhh9fDn5UjPFNkYK5Ki7vNBeyrdDjz9yXC66mzdiGvui7ETgkhiLZRpGNDV9zVgD4L",
  "key11": "3nKpd7apwFjPKLyNo8d64XqKVJ3V3DTp6SUUXLYiv5Pg81ZmpunGQVtHQQeZBAb4oM9ygqLR61A5XDNXWgCaqFbT",
  "key12": "aPDx8qcrxYE29oXCk7V7iE9ip8joZVMvnL14hDJZfnXnuSwH5op45Ss9SxuG1cm3j8axmwPtQqNKPb9byvnx5GW",
  "key13": "44h4BNUHG1qLPvrDFQe2qHGsh8YsqQKwdiXYJpPyTQfEZhPhE4muWEmgXGy4gB5UAJaoZN7HTA9fUQXLFXxEw8KZ",
  "key14": "6h2VAzw8Y1AWhEhc4ZuxXoRyc5LPcoWQ4UxZqkZ1TJaB6LaESeARmmGvdmJK5UDduYTjTbaaJR3ftpewiFBBaQb",
  "key15": "64kUhWEcTXW9ki8sdapzU4z7vSPBs8GPrTXpoxALfpis1Ydk9FodZNZZCeWDcMkDBgd9iWJSKt3DMjtNzcBu7XeV",
  "key16": "4NFQqc9ErVv6imratjHecu9oQUiwHpjkmDCE6RsQ8dsFqDMQV5NZ3jBw4LEEfKBh4z3UzgjKTqpMLABaEc3aNxeu",
  "key17": "44uPNW5efych44Z5qpyQoijG4Y5JtPJ2Sy8JeYMozKw6diRHZwMmvHeuzaxCBt8FM5M8ZPgXPWL3yrvMnxUwikuz",
  "key18": "35Mzvb4fknG4Eq8pZWACDC4X7PEFn9bVqNMGUqvgcAj4Avz1h5F4HMuXcxRctc8ey5wjp3cTNsx2h8YpiRnV1hno",
  "key19": "3XXGAg1bYge5yGccoFuRGX2TPPv2gFc7beFqvW8hMqeiih4Sh2iaWK5AFantTxcP4JVK6r4gy8vRWNQPqy8ux12E",
  "key20": "4DBYXYPgNAGSeXJcJFCd9oLRJDxcT4ty2jNT1bWFHxYhLBv5fuy6ce4VQtpRgmS1LQmJdx3AQAPRQJMG33RwgQ9",
  "key21": "FBR6amkrsyXJRGtyUpQcWTprD69EDSiNfTCyqqBpsvmVQatsi35ufegJLLwcAWUbQPBJW2Ne8NcgShunzYsMWbc",
  "key22": "3FNSt5Gk9D3hi1TqDduXyfF1258DKdohoUQKC2TLiZEFN1TNC5NLmNCBGmC2XA7RXuF9VGgJeTaCboK9Geijm3ti",
  "key23": "2U5PYgXxHXVeueSKPVPwctcuXJgFCApGZubBcerUc8qWGhmCkBMCibnb3Fe8cuZNDL5r9yjap6YG1HwEHMtMJh2N",
  "key24": "3CGytrBLhSjrYG7V3dU8E8md4ihWVHqCTAYmB3ezAgzpYkJLWbPRvPA3kmDgABE2uW6UDbjrrjsjQnmP48KTh9oY",
  "key25": "2EpzTN6ekgDDKwGboiTibVCiMG1RVmxHPz4Q2R6KkKf82sVZoWfTxbKgW9qaDDjTQLgcNohJWLmbi7kf9VUpVTPJ",
  "key26": "67NY2dxtSFNgptk7JfcPt1TTnopecF5WaAaoEHgbPbNQzvXCqRXcco8mzZoDQEMbVYTfSusFFWqJjfbqqQc1WZNi",
  "key27": "fLK2W8ukH7dV9xXyzHDcAqECNDmhXCvmiT7Chv5chvXBiFpxjWPPSnEFhSbt1x53EKv1SzLbwaVm2uRPTRzvarr",
  "key28": "3Azw76HrpMf8BxQzhN49nW8VNrfKTRui9f4DemvT2ub2P9NKgryaSLVMFC7oqwwgMEFnJiHAb9Ab58SUAMC75YRs",
  "key29": "5sKZXzheziw81miz6PDoUS6eMRu8H4uNExa1eXP4eNkU8wCFxSvBmDbCN1NQrp7fuGrqGquPxSHkDw8yWBxH3UH4",
  "key30": "57mBU6AAJNFp3XTFV42nDPiDSkCzwR2yDatZUjdhtc5G9bzHhotoYLaYpjqpYwTmZdx8qmvohis83Vw4mmVhWqQi",
  "key31": "384AfckTRqsNUWc8rtPxJKaGUDhbPB1tusShZt236fkig6hhHNCuzFeqAT6RnzBfnvynigX2HNYxCZy4yBr8k6JF",
  "key32": "5r1gosYfeqbQEUWYUesTQkgb3om9V6TzqgoXotwNHuLtzS8Muq94prtn8A9NqTC9bwpjcoBZUkJTYmFnarGSvLhH",
  "key33": "5hzxg1uGquQdoQsZegJP23JVwoGMwaeRRV65UCjocQwgukLkyQqBbhd3pu7ec82rGbE15HLri2yX6Thk91gCT6G4",
  "key34": "2ajKL4zDCKgWy265gGwS3UmsP9Roo6KeVJdyGFogbNz7rp1wMHDqG4T16RQf2qrRRkc46sXcG2uqY9xirfJfGQUo",
  "key35": "34GHssfKqnmzHUgoKJywEjEuw6BFPc8U1mQc1zEin2sZkLdf4nrhjQY4rNu5qn6vXwPrxK3tBtAebmB1VzgQ8uQS",
  "key36": "3Q2pZoQbeHvEQbBy1Bn4jWsrkmud19qA8qEpkbLrdbzWTy3b1bKPidxtoiebnTdMTodsMHqSkyVTfqx3oSg2KzW2",
  "key37": "5MxVaqZksdxjqDEcpnF2Y6HxyKwBEHUJLEKqZ1ceDGdsqkKi7JjgcP3RMsGfHHrEPC3roBq73n6o2aVWkXYtKrRg",
  "key38": "5f8Cc5PNKPNgg1kjbUvbx5VC5SY9QDvWZKNQnsSMq6saA45ZphogXBbvD5Y5yeiUctoWyr4JzRGDATASAVPxiKw2",
  "key39": "5f5CBYNCxdM6yvSTMvhriHuXYiy4mGyA4HhPkQNjx9vsbkDSH2s2UDFpWkA95gNiwNMyWSAR3zeoJV1usuJZ4oTN",
  "key40": "2hu47gsy9YpM8HX3xtfyYUfywFPGkAEF21BaTt9BkGV1G1Z3tLjnFdSZGxUiNjRa2bvoLnGtKwoDGgiR7eNXz9Xk",
  "key41": "2SoAjify84Lhokoh3aeCMNbRviBG5PBx2id4B6RBEQ3zqxjg2VKCTMG71ia9TqwAMHafYBcVJNSvNtnwt3ZyzKcT",
  "key42": "29Vm3Uaae3YCFjCTpNHP3GajEv6Y8dBHLiHvCwK5P4dzaVohdmFt39yKWkVqCkXaW8uynoQ2S9eVurFQDrMfpHe9",
  "key43": "3AdyXfpgiWRUWmqLd21Tc9EefTR9dwrnNrxT3fqpaiPYxorNs5PoW2nozrS6j3Au7gujUoFLb7a57NsjzGqBXiSs"
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
