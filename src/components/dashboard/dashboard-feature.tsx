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
    "2yWX1voJ9AE7M3UmBDVAD2TtV9LbFMzEFnBjpXk7GP7jpvqWehipSCjG57HJRpmVW6AuZaAaN8F1Dkzv3GnTEsqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dh6gxZq2LvECvJxi7mSofEQqRXAWW4dkJYg7SVo36UbCD4Y8tYibdwGdyAAXh4Snx1VxQ4gDiLDVHP8vDgUHZWy",
  "key1": "kw1QRWGM1ajJjiuy2siP9pcih86qFVNeBbejmj75KqL3QRTzhDwKt4dXgr7QjDrf7ogcKpCdyouQmP927w5iNrA",
  "key2": "5wbHWvsaxHDTFJvMWnM7MCbdGJPBKpoiDeCmNnxf7bGWnzzufx61EHL4o5ESCjctKpwdBac9kMz4PAKb4k4nSezj",
  "key3": "5FNV1Ktfm2xvhRy12Sj5kM5Nb7bY8KWKcPcQ9tmKJY5fSXFffyLJkuECF4hsezSQqZeDDU5vS1DxapeL695W3Xhh",
  "key4": "512apd5eZD3V8PmDyCQMp2iqoqwEPTyZmfU9fgYKYeEYKhhv9Yo8kKpo5Dep18L9gLbz1s51Ptu25JMeSCngC2bd",
  "key5": "3fNQpz9NEMTLiTqY1DwPhnktq5gb9TK4siZAmprvvJ6yZLmLhRAAfvAEBNNk6U4iQaG1gXmKGaGv8cEdw2n64HUJ",
  "key6": "3V8fvHSTBmWnWKTjkp8PCj4QutPyTVSbBQ7Yj4LYYFC5GGezp36Y2rxcJzf98fLKR5BfYnSPwpG3XNRi1VJhsGCJ",
  "key7": "49YYKY57chNWxWhSmHaAMziAqRtKyjqcEtvmhkRbnMf8YrAK9FSzCeDSLvntCf9gtuDxXB7wo2Vn4C3baeaqxmg",
  "key8": "2JnevDkB5q3dtUALUZnDaUEicWNbs31TJtcsUkSuVtcSU1yDSp2jFksXCEmQFwWqnTV1Tp1EBhuFJ55x8dTotjTm",
  "key9": "2ahNCGgBsJKg6BfMmrtyes5ZodzmBdYDPreWfV2pHuXLecUz3x1CBVrVX7xSjxJCrWP3MXpuzZ3VAJtxrtQ57Hzh",
  "key10": "XwCtqU57S98MZTAWPJZH4SPisp7kMypW8X6YsxRk9n7LPKvvpvrKEn4MnKc4twAggRbwMAFJxQ6txgW3fpV21Dw",
  "key11": "4AUX8PiErAqh1TFdBG8PeGnWx8xW2rCB9Cfco8R6TmdETZGpibNTdwCqcCEHcQSQwscvQNMbjzT3uvaJPuhC9r3Y",
  "key12": "5Z3SLfhiivTBPrz3ouAAmNSX4HHPGBzKWRMCahCstdiWYLgc8g6o5US3YtxWvTNCQwF6oMssWhKqsCEJPbNCnNXb",
  "key13": "2Sag2gmmVVCorus3yWHMFsFRM5tZkuMEkgneDWx1jPiSmJb2HxJb4bCw8Btogmb5tPhMvWLWhmbzSey1fSvc6pWf",
  "key14": "wqY4Fwi3Nc9hwsFkgJYg1P45QSwo6JdfFqki8boSSwiR5wRyLhAhvHmGriq92xS9vgST3cdERhFRV7fKJ3qtptf",
  "key15": "2MMAkD5QT7gok9obcs2mjSXD1QKDiWRedNgynThuH6C9wnXZTLEx5GP8HPDbCqATAcxWXaddcRtCfDLLKoBb89Am",
  "key16": "3gtWU8iVUt2mthKRj1gZzTnws6FbfrcJWpCH3tvPy1iCpFuJmzkQALHxee3WcAvddbAT7bMPLmuoUhswa1snevrq",
  "key17": "2gM4ThDjn26aqJ6MJhuxbxq9D1fsCRm9nPLQykeYCh4MdNYbcZxMdQswxqmf72ehPPBUr3Dg7CYQBZT2YqVd1U86",
  "key18": "tqwXr3ygBZELaRx1p6gtVWHJJrrz2y3Ru2mSf9pgPpLBaYw2We8REFgDgy45g6fKVo4AimgYjuYPoE7Ya5EQygk",
  "key19": "y2g3a4M8AJeGCWDCpFtAU8yyLi8VGK5mHPThCKiyjcJjStSoXgrDA8mzZyArQWQnTkT7tdSmAojqbj7oWsKqeVq",
  "key20": "3ZSGV18tQGiRueS3kkavDW6975oh8B9zH5xiQQZFmMsRUeRdVZjF8MRWoe4oCqWeCQbRkiCL4meKpmndeABDy3Fe",
  "key21": "5y6pc3FHg8yMVZqBN25yJyNA7qMUiZqDwX5YroKrprAG3gYLrTyge1hDcdxeeRUFEToTyH1Wi6hZDhqyvC472WhS",
  "key22": "5k3wiqSzk8P8je6Cj3oWSJJZGkDdeGnhz55cN4SoiXjzy1FoCvXBkKBXSycqSUHgN3mbjyfspMXN2XhGaPJZKgJe",
  "key23": "4dyr5Xrv6QgDFAc8GfWBPWV7ciP2yMifEBebAyVAEBFQEw9H1JcfUSG7SLLsbZtvvQNWNoeATTJRshKY9TZy9rCo",
  "key24": "2T5EwKu8qq4LJUY2Y3bCnfSCK5uAfokcYZgYxz3YYcMCjfS9jf8fAujZcpkjKEwmw5TuXfjg4cLZkkUsqXAyQWNC",
  "key25": "4zFBP9bJEmcKUNFZcg1FcFDxzZpLwNzCrq9QG8Pu8PUeSFRGcX5BoyaJ2kPsKbPccXHFrP6kqsRdUWWoKnUjtcxM",
  "key26": "v7XJ7XKVoqw1aJvQvGSPEPGDgBzPHQ2wzs5HQAjZ3ALUVfV6CB1J3YSgUoEm1L58VqMpkn3D5HvjRCbzUfToxNM",
  "key27": "4xcsLqzMUDbA98HCH7hS5veR6kfa7gE4hZ8pDX433setqmyDhWgGmUGqCk3aRi7haGYUvomcijko3VdwFxVo4K4g",
  "key28": "3zYmwMEmtnwEP79ppVtmpncr59K9a7yiZeruywFDi9JKBjoGs2M55wEtwetxt3Hh1ThfTLkCKdkm6okFEU16hAy2",
  "key29": "qf6WWs3rHiGH2VtMGr3Sk225dg5P1EtDKzp8F1htpg2uDWJVptjdVCHVmsKJB5eNoJRZ3x3wU9Z295ftq7TCfvm",
  "key30": "4PZTz4jj2kg9dci2nuStPh1sKqxxvzD9VFVTLWYBDEwVoF2gy4jwujLFsxDD39T1KGknR33dY9nbp4iJuFe641MK",
  "key31": "5yJvBAyTxmG4fSPhaUUueeubY49decPEKHt57dkXtnh2pCUEiii4iJPYjtpHiEtt435wk7dGAfEN28HCEzLoeykC",
  "key32": "2E7Fu4xLSxbPq4BXf4UWSaLJkMM2Lxxdo5JZ1NuJNAAxQqKw3BrcWbg4bsMk1wjBoq6TNxS1Dkzgjb6sbPtRpHQN",
  "key33": "UQousy2QgmaXqPp9toCQbamYUhVN1zqJTubo9ZHRu7B6yy9XLYqmEiiBA5HFJPMUXXKFq6ryH5RWXYd64zi7yHj",
  "key34": "5PVA4DYYJuUKBZakx2y6jkmvvvBKKB3ZRFLKH1rFoacANHkkRMEQUnVJBTeGvfoLTW1BxmCsoKyYbc5XBh8JWPz7",
  "key35": "gmfGBkVXmoTDPSV9YUoGbwWW4kzQvzw83uG3Yk9tFsB2vbGsnSczhhZT1VgwyV5Vm9btFkcGh13drPqd2UJnmZF",
  "key36": "23WxM3dULXFPJVng2NC1KDnVt1LbTna92KMBNPzRvGqS6X2rj2FqnYcd6FFot3XitkngmdkPsk91maEdwcuzwP3h",
  "key37": "3idK6QbriQJrP6xDzpaoUfsHDzXtq5u2bRi6rsxizSrr7Nxm3a6x7q1ZUCp9dBVMkvtpxFgJf8aMuux1iwBYcJ4o",
  "key38": "5hbg3stHZkeVKBjw9B2sf4gbpEeT5mfomQup99rVqLAcSeoWrEC9rBzufbV7PgQymFvGAA2Wdb2yeqKn6pyS8piE"
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
