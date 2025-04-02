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
    "3KBpk8pgYH79bgFLFg4gZgt71mUhTvWpp2ziqFJDcq5bR3C5peuTEG4YeDU6yqbEsfjy3QqcB8pXGrsyBQvRBCiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uUZPj6ofhE4QpQdtuoNZGDt5a51dHLhPoGQpCUH45GtYqy9ayz2pRPUvft19AGcVihP1uq4vCn6hdozJeVc17b9",
  "key1": "4jmqezQcNBmF8E12ucWCT9P3xtc2B1UfsALjbKbCreSptNRZtn99BhV27vmVW7sYNdt7bc6e2FoDVwsnRCJizJCg",
  "key2": "2zB3LwepWSaLGqXFXcaQ2T1rqHhkQ2j2gigDbYt2TTHssf3wqDRsvTpzDXhmy8hYAb1XgBaJCZ4o73L434NJTsXi",
  "key3": "Md2jxzheGJ3z5VApkZWs2B9uKaKYXGXGynUUz7eLkZu3VzwzCoFoePKXLYC79LLyAXmGs4mqxEZtGKxdrcroxrg",
  "key4": "3NeT9zUHeHLuuwhDh2ZctCYdo1WYj17ejy4rnpZ9DCgHSNjk2QtLu3RqxY7ky2F8MsnGsFtdBH4JMGG8XhTMCLs",
  "key5": "3z1n3qN122qH4Z5J52fq39G5D7hEmJoTa3kSFL6E9gWF5y586v4kjXaPNqUtZKqU3pxdmDsXqGtV2CapbRRXC39J",
  "key6": "5xkV73B15mFXFq3jN82fU3s9jcBFpzA4H9c3Kyg28Tvivp6USHuEnT1A6GEqaZJV869Cpxm7HskFe1FqhDr97tMf",
  "key7": "J7Npzxvw6DARZ6JBHLbvKU3LDg7rgv9FPwAW4nRPERxsopyEXDHR1AD67UFHjuuZX58vHU7JqgwG4vLGHngavxs",
  "key8": "4Ytb5N6HcWjtkodq8XwDwSkx8hQSgdybCsC49cUr3gg4o4NrQ1iJXgfCaNA9wGxJAiRmHGvePCToRk26Y8Rt86ts",
  "key9": "5G7aWTXqpTtjkm92BWNFJd5W6ad3bdCVjpi42AG5ChkQ7f2uTkdjBBh4nv1FRtZ617QxxdghHVDpPugD4D2J9jbT",
  "key10": "4WbGTPq9YekQLD4eMDA8hY7nR3SA6V2c1Rte5PKtmvU5VBotCevNWVBvco4miK3SWu9P3Q9vD1Kqw8249vGa3QBA",
  "key11": "LPpcWzYPQcyQdzMV19ZtzN4FGR8Huc9bTNihFqmvRfsr2QDhzEf6UigpkUyeT4BLGmCRXajDrZz8EedPQKZkmm1",
  "key12": "5Up71M59htKvSavoGT6NrbMJV6eArhV1WubXFQxqosbehtNLp6V4h9SKB8WuXvr3QwU56LR1yCZ7F48mTuP7x72V",
  "key13": "5KW94wrWJq8mae7FfRsxKbgW9cCDpbz5RwSnbi96FN51arMYvxZPnfTxjHmVDH81rnjW5tBYQbUZeYzCbw4s2VNS",
  "key14": "pmV4gyBH2hefaRe63kJn9V3ETDRNFWzjfNqKD8rT6iDPgWUWZaerdFswgpPrAWyctwdmaeh6CyFBnfCsgEpefiY",
  "key15": "26syJzwPk4s4ZuaTr7gABuHJofRxrtgfXhotUeaeNYpNt4HEWJmzZABU8ohs5FBgu7Hm7jqdCtZ3nLcfeALpLpGQ",
  "key16": "572FxXQt31SjdgFMNKPAYCsjtcnnvQQEH36DWbp8nWC9hJ9jtmcDTVTNh3C5hPqJYs4xcDJK8wdzKvgRZoz9Bkzp",
  "key17": "3WbNmRXv682qCdwC5qZoVpz28D1eaY4vBkjVgXggoAujBujfeTv88rQdcYmAvoBzpB7sjdJXCLp9oosZQPwimphZ",
  "key18": "dka8HShmRX1iBWNysSfBhKfPj7P9ZkAHV5MXLiR2Bq1XwKbyJAFxqznpLbWtFboLydtF2NyDpCEMo44DLxZ1gNH",
  "key19": "3EgoVYQ7AF653KnJgQcQtvFUZ78sBtqMJuptTSdS4gMPEeeP3srXUcMsNrk1ZYopgJqBNipHAoVVCfRGpDoMN4yk",
  "key20": "5eYyLWpbnRg2eNvoESP1Pccw53u8Yu9myTYx7sHNgC5zi8S9Hb2MQNNduCc5Go5BrXknNMfqxEsYN1WfecMLq7R1",
  "key21": "2ysLc2oELL5de35hp4zBj9PzbkdZx54ZeWFJfwLc4e4uVXKnKgukBAN5P1XjUR5LpUzj8V85Sb4DBs5Ry4DMsKcm",
  "key22": "4TwuN79KW8FxgfAnJP1Z8FsMFnqN269iMQ87J2JKRwVTWEYZgnuzvc4DpF4SN5527w9wUqHr7FgFVULDpiyMje6y",
  "key23": "58Upf5aHnVBhKUBpH2jo7ZcJXewVKv1hG2joNnK2eFf9xYps4ds93PZ3gxKFQe4Xm1ZNFefDMkDvSUPAXHKo1gDp",
  "key24": "226DocMn1YUr1gpsp6CwcSiLjDCRewgN9uVpVesK4NWSNpGtZoaTsReeGwhGC2QRQmoykdnEqLsD8UBe9CgaC6uA",
  "key25": "2qjVSNHTPabCmSGdbdpheRvmyPzKEENCE8nPcn1iiEqKUj3JqXTgFcGAjRJWo5XMCjkd92MAjm1KcjDd1dA7Z2tz",
  "key26": "2DYi67E9E7ksb9qTxEeQcb9W2osX7fEhht9yVxJZM4CgHjhAk65v4Mfkh2SQ1Tmgjm1FEF94c5DW2uEbDYNdYHgZ",
  "key27": "PtiGRJcCaTbBYPLzCKbHpDTwXHjYYfsPazpakbJx8Qist4MU56XPSKiaQmgU6X6wQAigttTx2aMFJhtvFd7gAoD",
  "key28": "43FguKBj8jJ1U1aMTB4R8F3CKp2FojUU4vpKtSmMP4VnRsx3e2zn4Dp4L632UHovWSE44qCZ5rWcBqEtd6XrEJtD",
  "key29": "2FLXQE4Z4c18wPmDuNeDNgkqceg7r6iQAimry7tVJZYi3w6CeNRyEjWLsw4RybKqDp4w9ubYVG55bnRZ8QDfYh3N",
  "key30": "3Lj3fwFth274U69KG1ERKvrSSEEBSXwGBSNyJMWVLrkMYqgW5pxBC5ShWYNN5beNeycqfx5mtKcs8RR9ZTTyL9Mw",
  "key31": "4UsGkBkc2sWWecGhcYAFLSyqvGVxyQRX3x5LSESQZNBraAJGUtyVY4T1H37fjfTex4yo89n9zLyHezJwRuGWgVEn",
  "key32": "5HkzqUVQK8KvtpA3LDkmprYgX2ThffZS3xZYUS2ywR3rwAhXp4tbybnoyTNVHzTEbZTnWB1XBd3u6zuvE2eBD2Un",
  "key33": "3GRMD7HrTF4Yov97QKS2w5tuvBndNH7TXSmh6RfdNR6MF2LTJLX4TifMhPzCsJt3NnDhWozUB1HiCm2ArAhfdAJ8",
  "key34": "jgStsTFW1xTP5M4Lj26XHBabKGAgVqoWxV6aFsCFpqp1BC6jFj2MNmDwMUBtkThZGEmXNbJSozGpytBDgA8cwok",
  "key35": "57fWpHW7n6XeDWkE245FzQzWi2yEAnASt9MNh3HiiRk5RuAeGANaKXuZ673UFsa8ok8XGs7MUtzcGi7jB6YbmpvW",
  "key36": "4ZY62FkQFGRodfKQgU7Nk44L5NdJiFFY7cNaDfo4NMSBuqbjXcHp9WcCuq5xsU9XqtgWss7gPu2sPy2iw5muHr3S",
  "key37": "oa4uDi9uPNTGno1MSkrxvDKP7gLpL2w2NHtTSZoSYezMWT5stqbWUbSjvaSjDvwPgPX6r5tcZ5WkNNDrzr3cRLn",
  "key38": "jBeXBeyWzqg1a64dSUMZdyi7CLzeKonjZ2LFyh5ycYDgxoYNWBba7FpFzjZRiTSkYRuYn5wqTiiU6YBofnNAC6p",
  "key39": "WNfGQziXKm2dGGzpW9CNM3cxn27Usg56xsaGzut4VkDgL9MDViNRm8CppVjuHwXdAdEcDEYzDz7Zc6HLMUXeFt3",
  "key40": "4PntS2aN4QFuLDKiFAFqY8nQaQZ76yYmWTkYhGBScfUwa1KMxHM51rNrwFwxTK8DwK1ptXWS7M437bozeWpvvKgz",
  "key41": "4n3CNstkfpnW5efd2byumHWgtW61nrhnThTV6XM5kFHko3ex99AY8Rv7jQvd1XdVhFWGm6m4ZKUoGZvhETu2c1Ur",
  "key42": "2Gfr6f3nFAmAQzhQopCdorM1RGwf3iEKgdJpSSnqLCd45ixbjtbbhbpqHonEfxkxMgq6MTQKuBZ8GD8MJ9jwWnhX",
  "key43": "7RcWNPHnNrkybu1wSFrL3aPsh2w1kueQWapC6Srmrhp3aHzhEupx4vYg8SqtrvbE474joP6bzyRkY6FKpNmEPmn",
  "key44": "5rWKDgUrQULFARZoz7NMqB8ansHHxTWnZ5KvYipVsZ3LjT1bGnjrCAh6qekogph9XzmHyooqfDDXz5dFuWy1dgKS",
  "key45": "nyru62FbqGLz4K8Wy2PtXyUBuNdL3VaKtVMqLAk3sbyGdbULLYfa8Xez2uHbK53Z5zKPoy1pBuMEeeynrJCAJ3L",
  "key46": "2iLd9jMPrupTs4nbXtcDvYXs6AMPKenHWrz39s4Zxux47AFZPEgemgRhYmTQEJUSgbbhgiWJJFGZjvouvx7tXars",
  "key47": "ZG76RoybCLr8wwoZYpwo5oe2j61c4KVyjLf1R1DpXtKeXxuMWSsciNLqQG6mJ55exLwa6KHoX6LP5ZEnz6cMAGE"
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
