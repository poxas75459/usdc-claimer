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
    "VbYmMmS2meGYB4o7V3BY53pBDmWkvAAKT7guSyR2M9VtAZQaXMH8KASXsS1cs9UtQ7ACqP859VFP1RKVdu34TTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25cLp4d9i1YooVgM2Tojx3ABER95XzKaHnpXkdT664Xq7NMvyFHFFxysVG9syDRUpnDAjFcp946X2ZUJKzFoz5RB",
  "key1": "3SsVyTaCQScFTYbHorsmS6tpwcmeV3bxCAQiJXX2jkFD95EWRZBURVuXJN75Ty37gVM9pCCFnCV2qYABwkPwxDRz",
  "key2": "d5uj2wVi9CgF4yMs37VLoiMLczazBmxmRKGPA9B9diTRGtANyXeMwKjQqNcL5ArqCCTUw7rRKvAqB4mFFRaaRfM",
  "key3": "588xKEjmqeXys65JWoTG4LPHWSb1rtjmcvjMTgY7aJTTRTwLz7qz9HHqFdj4EM4r8XLHZETD3X4grwMM5ihsNrdi",
  "key4": "4kqVx32JzLmi75xDgnMoCviFfwQegJC1RTvuxQmFj3waJUfipsSfydPJmEtqEdTodxrBD6gDFSDBDz3TZmGjGex8",
  "key5": "3owPsNoBPDM9WKYjdP91QD99sJDMPaUa2LPWogR3fJyEgE6rNe3Vf5GzFFXbMte7AGYBvYKVTKYzdS1xXWUzoGit",
  "key6": "wzEcAPqd9BZjnaqS5WcXef1JcGj1qYs3ym9NsX8xGPzPXCTg6NoH18vLkuWQh88K2Eko4ZSMjo3VEGg7ZYwKy6Y",
  "key7": "4SRw7MQgjajiqqj4wHRsKUgnTrDzr4kN4A1q1e5Lb1PPTLTNfG2MzQRSSGNKckGEHcwUDmAXVqBNG7ByFHV9VFgK",
  "key8": "5XnKcYmPgPB4msQFeARNmxHGeTh4W5Civv65E3P7wQUDCg2Ek1aQtNRACM38BDTDKYJ5GSkXhYSSNM873s2YY1R",
  "key9": "JwLPwhnV9EJ6sss5z32LwGFaWUtjYncg1FXmxLacJZaqEfuqwQxZHBVv3AkA967mzMUNqdy23QGGsaRTqLDeZZp",
  "key10": "rTpnF2BDimqJstFHYqtSZySzcx9LPqc1JUV1sjENVWShZnJQYTFVwGggsgCAoDHy78LnwD454JmuX2HRUw1C3vN",
  "key11": "54JW2YmyCtQ4yemnGN68EQeSE2yzKeoTaCN3img8ETnwiNsumeHNe1zhLCfoBcLGYBjEM8FHekgRFqoEkJREC2a9",
  "key12": "4RrKZZ8yE62qWcYpDk9MYnoV7DV4ekYwhmg51Tgh4cDNGj1xQPEzcezPJEzhYYQMQfe7UrUfHcneQGQkGbFEazQX",
  "key13": "43t25XQbXR4G9q7URw4qqCdxQtxffanFq6g7VRFRcVuxnXuXAqz4khnnfsLRgGYMpNdWQuWnnbFjm1nuVKXqMSHd",
  "key14": "46PRQo1wGinQXPPGwBRoqZRHzeVGygDDPmte2oY1HuNs5feSifF1TtuhpU7UPueTBRc6A8dphrAm62C4Se46nT5t",
  "key15": "5uHguh5S5UW1QTuhuUheCqER1SnPtJ2uwEKpCB4CgPoWwcJyfbuFwTPskSi3Bj9g3aHyHYpgDMffWLEfn9TmMRuw",
  "key16": "9kYdpg98PHdYRSSAFjEC99sKq7bdmUdx8hPLd6BbqBbEEonS3BoVWgHyZu1grPS5HqYjeHGxiJvh585cdkADEdr",
  "key17": "3A6MVtw3c2XhbYpdGfhvXDBnNaJ2DgjEbPp2adMVEfPed9ykD2bZ5U355eDQN6ugHtbPFu6G7zhSkyr9j7aiCkuQ",
  "key18": "3dd44ewVezcysk8DUsNBJkNvUAAnynfXY1FS9TXzv1HPJJahDzNeRBCprSRmYEvt8wpg6TWW9LfNZcEouTTPBocr",
  "key19": "51bMB9TFXfqffFCVBkvX3xf8AksFZXqToPhKWvAgvQUtF5VfRJg7FfGCkNQrpfDzt5c4FLoEmUmybtQC48eH1e8g",
  "key20": "dzsFfspTwHNWCc7qUf5LTswLoekAtfRRxc1RxCG8CSUjfbgSWrsSw3yTceQNYYt4Vfj482EDWz9Y8K8oUFAu6eT",
  "key21": "WMMRYke9YwDN6RgdUKhyJwqri1dxMnoDt1pbMMxyfnCXVtrXdv9vF2MNNvAtoUbQSitnooyRzM6mguEVLJk56rz",
  "key22": "4JKE9iwaiTF62v3JYs5u3vWyUXRD7hsdaDjobe5veoK2VWn96gDkHDjweMjT7cX8azKNPS5DVXh7ZzL4wNXoHaS",
  "key23": "4vzhMHm4hPDMRUXyTB2GhHo8uSxyzEtZYKG373Z1jSbDkyognEVFs9HVdaQeg5A7nwD5dkjKtb4iFedqpAVDgHkN",
  "key24": "5PEeYL6KFf7Cbc9EFc43nXa9tb2ZuCcabd9jyr7JtJsLrRNwhoM8GKT7HgcZBMH2TjnTxtsZyz3JGWjykP2zuBSC",
  "key25": "2aX9W6fB2DNBmdNQsqPPk7cE2nfJJ8R4jR8wMJ8jnsttfaxFnTuwTcUfRZLrKPZfnuziqjyRuRt18cZ1nFNTJUZc",
  "key26": "5kUiNLGUvf8BKhpxUypZ6EiCqsMB8EoKcbC8wowuWzUeyTDFjSzGUwfPunrNChWYsEygnh4fr8C9aPL2AmUu4Tod",
  "key27": "61HZfsEZ6KNG7M14XxyZfVc3x9rLFS3W36w5SDkbQUddGCiCg1sPgpYGb41yqU8eU2iZEVTpHeySzjbk8i6BGdyx",
  "key28": "5ecpoLXu2jAXEfR2qz9GJH7EzFbXhZt42Ezx5BtsJAQSwteXpQUGim9fkmoS6Qbj2TDnaNMLcCGKqESjcQw7yPKm",
  "key29": "5Q1jU7wbWufpgGxrzhJKAVr6kneumnpBMWNDdwDYjVckK5sXwNQ5cynYjYX5xeGgxNMG66Lx8auiX1NrTHJjyHwk",
  "key30": "5rVtzy6qFX5Qy1Br3JFQwCiA1SN74qJDY2wqnYDwcnEnkQNoYcNjeLUfAxPnpWd6YnzwUXmJBGnr6H9JsYCX2nXV",
  "key31": "2aTp59uyiTZPLpJxx4WfSg4aDeU6dpQmeSN8dgUGH49HocxMjAaMzU6S6hbaD7yZsMo59cukMoixi2VuJE72UEVW",
  "key32": "5n7cDJTeAWKhuvqNkURv1wJk3uRGEzhJ2Js7E76QEuaGR8pSJkN8DyrTm4WSruNasxRvEGm2xHCN3CkHcf2bYLhM",
  "key33": "4x5oZMSeCuX85KkNL6Li8EqvKGFgigQsgRhgaerGVCw5iC2BZeBG3GejsNCDgnfxaoCgMPjW6zVV75DSurrs5UPm",
  "key34": "4mzGrzgHxAQgG3UFbj91t1aeoGo6C8Adsn2nLUrJRUfNupqVLM6hKH45qRgizk84VJR2Z1hsff4XWfZKRxMQ2VNx",
  "key35": "27ieFHj6naMCvQLxVE9zUHibcT8TtFeLo1xSKrrXmy2Z74fy6RauBwqHtZ67pVET6hJWVtDdn7jMadvE1P8r6mLj",
  "key36": "65z6dDe6L4cUccBrSqyQtFHbWtF6ko8KHDKZ2LkuUx8ywLrG5fSmrkQ6MgveLBssgWki2sHy8mLyC7PadAV5mFPG",
  "key37": "2x2ztiXfje4XGNE5WDV3c5e5m3BHQuXBk4SkLTG4wMJSj9jQLMAZ1hX8iHhFdVHvjcgb2KGqMUqgiaoJvC138ro2",
  "key38": "3qnfepV8Ps9G9owv3STQaEYuRAFe5L5d1Do2tuFBWKf7Vbn1zLjEQKqiLesf3cBqSnb4qAvqjCF337bRaBvtbb8j",
  "key39": "39BDXtuj9euvLhqaH3LEypZCKXtSXkh7cw2bw1KCcwHHvFnzvcpUVxbWTyGz2jJbjYeRdyb4tvDcBjdz73JLve9X",
  "key40": "26ymZksgutyKb5PpnCaV8rBqxCymtmW4C7WWFj23aq3U32K4ysriB4WTpyQBpfVjaqUcZVGyrx6hSqqQV9en8X34",
  "key41": "4SPqUK649sLAKK8Gq2McLbqJHC9WpJXeNqHiUWK8oEBQTqEcpBrHg9TjTdgj3mAG9C6pSQEjSJYJyjPQuzsYNkW7",
  "key42": "2cDHCUGkBzcvY3txEchLdoskUxU1tNf6CgXZvKTXskipDR5fuH5bKgri8PfAy54iy86GTURmuYxGcQDnqsGETEUP"
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
