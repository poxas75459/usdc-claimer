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
    "4dxZzgMfVxCN4J97hpmF9Az8bxAq3HeCy1wDhyqRpTnkKrBX5Lo2sGFn9yzPPbPYmTJcP7poFc9HaPVaBdTXbvDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3usJFKqXvS5nSh196RHsodud8c3R6UBWuPEeF73B3LrwgULek5qPo3hto4gBXZtsUvaS7grbUj1uUCM2Tncq3cVH",
  "key1": "5nffnd6DNenyxkTHeTxGJtdkDJ5AFBMd2WCJm3ot8rMZWZCfasoGDGXp6GjuCH9FLX3ffujorhiV4HANs8vtafQE",
  "key2": "5jYErMPTE5mXrGXg1TgsyQurwC1M6jCtW1YvtC7XFBWNDyi5GbgZuPhDiUhgsJbE94HhAtKjxjbDncGfnTeGxbuX",
  "key3": "4GoG8SkZatT2m4qnjQ8eNXtRsQbnJgGaerXgUdc3BtKGDJK9iCHiD5wQ8a5QohDpmzBnh6KJ586jgMzyxZNeiGqL",
  "key4": "5F7V37xAGTtvTYRDV8qEFVunXCr1ZHkhi41zuat8mD23p1FTVuCvGoQ2vUZAXGxVWZommuE9s9zPZjHweX15Upry",
  "key5": "2EGHT7t2FYzirFEy7XxdMXgsaVSPtAGHmJL2DVm8icwChfyw5Qfu6dqTZUrWwre7VXTNsChGDAU2tRNBYdHb9rVU",
  "key6": "VP1GWt9N6qpq7kr9zr8S6Bg1XPwaucitAqEmTuuWhkPk3bk3odwJYJmjcZzUkQDaTBeq1CFMuK4HBBYiGCSyF5P",
  "key7": "cXNQdtL2o3gbirJugxMS979nEv8WUAfSLLVND3ckS4U5HaRj9kTeEqwY2RvqZc3EA6V2VdctXMt6b5ZTPV2mdRo",
  "key8": "EnepqXgALW2LNJ7NKmQfYV4nVKQ3rKx16J2pEa9RJjqvJcZMwxPjNhEFi11DcPTkNMVuvobau9aZJu5gXiXcds2",
  "key9": "4onRS99cvdFYfynp7sxZJY5Eqyxb5fH4HExZawNTKgeAjMXR5EC7SVn2TrdrYAEouiUfop3DuEaJymxe1UVRLtsj",
  "key10": "342oJVedQLTt3vvNxZ66m5pHQMk4vXrjoK7mBgDezLoAZk7BH7tQPW8KQjWhTgoFXCko9zXpq9dHdE56mXRFAmPe",
  "key11": "5azFTpmA7EzwAyxq7qPMpzSyUACP99GgxPBaHTmtcyteY56yV2iaTAjsxx3XMkGijR3BF8dgCUudM9VaFrSXVzC",
  "key12": "5STci82Eh5wJL66PWVxKVaGZypoc911qWr9kvnSLo9u9jtQKo2V9WTgtjvjDyXu93gmQuzF3Lr7dWF72poxQtt5M",
  "key13": "5fbg6YKRkP67gMHEnhgtd1z1oY5WyURXbmdg8fLA44CKt1HGQN1cDN34YJLv4kcKeK2PAyXV679qb4rqSuKs54i4",
  "key14": "4gb8bJYKNpNG3UyefZMnbN74rtjRvTkHTEYcaJ2MgKBWZhnzxx1bhHGgqUXZCruKJwsRrAvcB2mK9Swxk5h5FFZs",
  "key15": "65tyReg4ouqnNLBNveaHpQQAZzzTK7svwYXXXnUUSNZJJGzH5GCNX23epL6hwHzExHVqnJj1e2QTDaatn1ZL9Pqw",
  "key16": "2QigeVPozbJimCTjHj73Z2aJRJ2A5kW2ZZjTNZD2BkgeKh6YuC8SjRAGGZXRNQm6ocukn9euu4ajuEp9nKpZC5b8",
  "key17": "6CcCjPVRV8kwyHWzGCUi5o6Um7Lr8Pgpsc7a4WcYNQ4X4kuiQU2PHdVC7H8S8buvD8oh4Si2raxvWtuYjZWADbQ",
  "key18": "5cxuB9a1g1ATGetfh1pgi3Q7Mr3pmBpQztH4ANttVemvJELQysQNj8wY9Z4XMd3bSjgWZBQwnHBfBsTndqPnR7of",
  "key19": "tKGFnKsK9tqxZxnL73E4JQQX8NYc5AVHgjMn7GnQb8Z68FonL2DRS9RHTBLQ2yX5HmHq2orcAKncNiuuEqmRiW2",
  "key20": "foey3nvrwjXkwwVPSC4S8kz7ZQvizsNUNqTCeF5VuPWzWCoWxdDJUoihS2DhwMhUEu1Wzi1AgA6py9KUgRu45xu",
  "key21": "4pEG9hbkg8Asa4cKV3sN868QU7W4iew6cUZoA9CBsJfwGuR7oeRdJAJqNY1Do7rz2M6bYCP7YYctD4VuJnM9gbRa",
  "key22": "5rPvDgbUk8krQwCm1JBTNDSTe53nfdUPYxNiqTke59TynPWnJvc1LRyjBzSpSExR95mag6xAyZu8Xj7yp4ZgxUPM",
  "key23": "3DuosBpUvkzjhLYvM3WWCVLjrLjYEptijdHUJP3gMJRWn37xtFmLR4qxV1YRGwuEbypPgiwQJAkgFPGxW1AnWmXX",
  "key24": "71zGo9ujEV5gzrKe5s5JLuAktJu7TeR8anC4wmTqAZAAm8rsp88c3i1aekufLUrxinfNWySqoPgcUE4czSXFvZE",
  "key25": "LkuUufidLvmmWjLbFSy2BTnVYdBRrqFSsfNGVKTwWMiycRqJHXTVBic8m1pkgfX9eyX1b2FfaczXiEmLcw6fFMF",
  "key26": "5AFBvTPrHUfCQ2aVaTgPqWs3gTxsWcfbszkwzcVFN89rqNKLEJseFcdta6Hv9EgUVvaLPE7BRTgHQ83T1ydP5diW",
  "key27": "2z1kcrGvbLN9eg5v7QogqJjZE67ePinA63DZaNT5HQAianV7vDRoVF77dG7vYznJQskkq7NozK3hG3JZXdwubXnG",
  "key28": "3JbrrxfSnPpsXG1VezBdBaNfQ1wmvwXmQgnFEpSp9Ekhy9euoVbLjfXivsnCR6SopvsqNLTwJTDHC9zFmtiFY2YM",
  "key29": "561xNANo7X93RopebXTT296y8uc3pxoYJKnR1aJCqo5E7Mt8SDVgMAQkmv34p2DENvGHiCaRbSJHhpJJx4TSGxfL",
  "key30": "1ysFxFBb513UtPaqkpagCgwbYvdXpJC28DYNu6DEjzqm8cMpAVnTpnW99pKrji56CshFhnZ34ibBn9kS3UDkzwc",
  "key31": "3VfNBCu7a2NJek8P3Mf4TDJN1pR61mbuvuEZokhrmJYMWBQtknKaCLiDpi1M4XuzWLySwkcRoCYsf63cEZXUnVnp",
  "key32": "4oyK5qtZUL7vRLtR8vWt8St6zcryG3CCf4XoR6SyFcDfcdM9qyViY2fmREqxr3kKwVzDhAkmK4hWLzXY46VNTf2Y",
  "key33": "2rLGdT7tZ7Ych3Nh84uSgUHewXYbdRpbx8wiKViQNWyo8sw4AzMhZfGqfpnYRvBMLxxVBcAh9fTTLpE466WokjW",
  "key34": "zS6T4UCdbyHmx5PkrA9jXmCgGjTag6vMJGaGu555dzi4pX1x5bUM59WTrc2J82SZKaiJAku2T8KZ74bJCbTQeCt",
  "key35": "LzxVvSojNDWxKdV86MJwFmtxxspTG9YvNKhMhBxTiD9wgvuF1nbPhZmaueURyHPtbyRspyNKwRYUYvKCbgMPMLF",
  "key36": "wMLhN2QTQTx4UCqqnmWkFqGAJQBzshNi2CAJJmMHZvvBLGLUxb9XjJ84qmre4WuNcdbxQ9Sd7oFykXwhub6sFbw",
  "key37": "4vTftRThuk8Zx3zcsAgWELyQad4J5rG87KCtYH2ESaqC5sV6tHLN4cjigx32qD68zL8UaP1DbUNUBxGH1AdAiQdz",
  "key38": "47XG5eGRrFLPEYbMhR6nXGHA394HdPb323LGVJQ8sHQsH25Rp4AzqvtA31TMEKJnntg8KCPyTXaMC5Nc2NdKXcrA",
  "key39": "2vBhaiEZN2e9MY9yTfzPAjLPXsfYP8tggV5PKmvwf9m7sjKWHRrnpke7gGTm8GLV36LrkGTGh5DWd7S2FGpspuUm",
  "key40": "4o9b4b13P9bevWLcztWaaVZ5wJmmUUb5d97cU1LUA3nTxgJe6mULjH4AkCF9nNLe17dm4ghSf3zooCtNxshspEh2",
  "key41": "ACYHULr5SigA4ZumqioRFmKu2PuNoFgFDbiMP8coPodzTXm6XA9xpdCnFsh2Qyyj8h4XdjUvvy5SG8TtDgWaQsZ",
  "key42": "3eYP79hiSMRX8nGc4Uvur23m56DWHT9xnnVM6rioDqVeSAgSQFm32QBx4h8yp6Ci8W5miTxQZWnHRptLJPjtm6zS",
  "key43": "38qv9HdAeFfmyFeDVjznWKfa2trFSg7VEidtmZLn8EVBwSzZLNoQVFSpF6F2G89RqbrYbwiV8nAKWFNMWUmW89TA"
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
