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
    "32wjp3xDp9hMijNwdAGGbh9snJDMgwN5oKiLE9LpWn81Ayvnbd3gAn5RQXxrHUG2s2t5RP3STNYXgUkWBaik1DJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b3KPgX1egMzniD9J71HW2TsAF9fKXRzqjWeXisac9JNajNsBEN4ukr6KDiXFVPcoy2Q5tN7jVBEAGPFZ4zindT8",
  "key1": "5a7bJemhGdGkKgSa8JgWXUAhDMgoRnxM7YFrWQUd8eW3VtnEUdimBGS23qwMxZecKfMAvtHHx2VuQXkiFZZ834wP",
  "key2": "5owfy532Rby3oSibamq2SyWSs1xkADpLB28Z8w4nWaRzGVEbt2ZcRryL1UAWR3Yc3i9mqJyTbSCdfnvTrPf7MXQX",
  "key3": "rX8U8JJbuCBZCnwENJbEifdPqrNxMTbyMS5jj2sDiCdyPz12cRL9oqjL6Yfwqu8mSrafqrV31FtTAArSvurMn1n",
  "key4": "21orsihUZp5YeN4aqBp3DSVkkHjZsb43DySyhHQzZPm7dFBpFHSQ365KQTez5MBVZkVfASwr2pqcXwYBDijoGeAz",
  "key5": "bvbKbSJJDA6t7XmAboWGLgGbepGxqvQgzKwFiEY4oSiNaPUHb5C9XbgdiRsc8TVxcUJAaE2X7TuWgWW4hzbaFMG",
  "key6": "5pExbCCTwpKagQyUTNCzby8ntZ3dPNpW6ypXYeiRhac3FFY1eEYk4PnzRU6vmHuwnYspBfQyRQ3MKEPx5wFjD5yL",
  "key7": "SU3D8gqGayHUMZcUdMVeFEg9p2mcuWH3Xgpptt5pBtsmeF6eKWQdVmFgmJYA9mwzc2JqGxGj2qgGn39eL2huMVG",
  "key8": "5Pk6BmJQfBkraXF9d9keDpYbj8rFGCyx3gU4SFdm2EBEE6LBdLPSgcQcuzokzUNi1521dtiaBzsZ21h2XuiV41on",
  "key9": "2xTmvbNCKZPc8Ka35Kc94rqBGKkzh223nDY4mbxegLRL7iar3RNAEPtLC1dH5fhu4dzVy1sspTy7HUAjNqXT4JQS",
  "key10": "3THUuUCiTkj65XRntnEG4bJybMsNu4Pdzwry99WcMJqJtXsBesLgnfTjYQudxpTtUjKEMxpbVU7X8DwJMKDpxkPA",
  "key11": "3yZoXxZsZ8TstB3exN6LdAME3yYrqoHetixLWdcKx8TaV9s5YxqhqQgrh1wHHF85Jw67DRR1Xy3XoAWUcfov6NBL",
  "key12": "57U2b29syFkRtx9NdRyepd1DhPyaf9gzjcAAWP2Ywh9qXYJDzvkFu36mDRTrmhENVZnjFUFSJese6F2TWGcRk9hJ",
  "key13": "3XskZDSm84nwjvXW1TAHR6fcdyzeQ8gdT7idCqM2egqtv8xkHua6yTz1EYmX6T9RvbRWAHwhXxYbuw74pvRA2jqz",
  "key14": "2PzTe4hQKfej857qddWcRWPP3hYmATwccApU18bt13KxWU8HU8c2Mk6CywMDv9TNBY1Zm2mTMcBbcnmb1dNV7Amx",
  "key15": "2DLuNjsKVDEYVXSeLXF7k7Z9hbDXy4hKzxwz6eu9odazqzZ5cJUqoqQkhhuZ7VdaUeB83VYZqT6zqTTYHhLQrSDc",
  "key16": "3BAfWCbue66pJc4DgJNMUY17NdtPJmanqn96oMUeDYAPpMt2b6DcYVcxJwK4GzKdzxdX7brTwsyo8fdDhbVgGpzm",
  "key17": "3h5SaSrveCRqDBJ1nnYzhpTfU4EFVyN8Q7sW9kQvjPRSiBvah7KAhvXzpTwkJsLhduZBT7NR9iPgt7n11tj4FZZZ",
  "key18": "siXfSxq6RUmii9ZVhmtH5ASZDMwiRfTnvydedxpoPmdnS19Xr7dtvMm1kpDmuSbpT6htny6DEQwqortdBV2qwcR",
  "key19": "26u868qt1z6JKrj3mWKJ9zYUPtVJN4vsHZmadByon3K4c8hyjHpmwsdJWgqTvHeg9iFZhCniCKwwtvCixBcmMhvv",
  "key20": "3EMTmUwxePaW1VkUC5cB2bzDsH6wJ7UQdw9BZ7LiWBARNUD9K8tsQD23u39wx5NTJkQy2uJRr3TGQxY1Z36GueHX",
  "key21": "5E5MBTPiXm3BhEP5shqUT2r5jQUhxkb5uHoxozffoixbjnWosXpfETcpxQSffUR8nRzfhqostHrR8Vs3DTkB3ica",
  "key22": "8RXQkb6mfXus9vMdyZQgiP8A17YW7v2Ah8gd2AiCBXFV5uyQJX7BFnagUNehbTjfioTVFg6KuCdvGsLfGyKTGb8",
  "key23": "5hgaMyy2W7Dv1tnsjMR6iRbWfhLmsqPPeYXk6PV39vLTBUTKUwNrTnGfM4y1dn2XRWsKDBbnLAnHvefdCVeFCnfa",
  "key24": "4GhWfEP5FbZEs1DHYCzSvt2Yi8oXi5tWQmUzR85aeJTkxTGyfRQ5T29T3CgeuVmD7T9zJyTmpLqXTiECc7BfB66H",
  "key25": "5CuCuCkiVQEUnHbMdNQSN9GiBh26cx1UwVhLvWGZHwM1Rk5CGoeJQTitryUiDq3Dck8oiofbNgGjssUBB1qg9He1",
  "key26": "7sCR3LaFCCFCbHZJU9cGyrpmW3SphTCVUdtTFvX65jY9K8DxDUwQFk7UTz3NzNEpDUJnrSjZte37LN42MUv6ieD",
  "key27": "2VKef3Vwb9Vw9nFi7sPrw3qqMRXDnrrFc7ZJtuJpf7i24aoCBS9cDyd3Rg9gJPUaRcjX8KoSz3dp5ioBMFZ2aYtP",
  "key28": "2p7a4ySxrkJwNGJuxCHcy9pSNA2JNm7sdsaLo7vmSoR1Ei78EjdkSuWJGvYqWPYJEstDcQHNdRatX7ouC9DEwQrg",
  "key29": "9qhQ59LX1W1CLnJ3ih8KTXeL9EXwbE187jtWsuaLBDPSZ6CmNGJHzviVapvzW7x7oFT9oS6AoV2eh34YK2h3VCj",
  "key30": "2rUMgz9Ad2Mqhvd7THoHTkRraZBaNcmZq3fmAfBHAtAp8CPjAEvvddWYFV8EdmyygJHM1VTHyvsoHd7Qa4g9wDC4",
  "key31": "cTmGm7kLaMZaeEfatwQSzkLrf7xjgEFd5GWnR1vTc7mYHeRgXoqsdLnxfniGbEQJGVKwjLt4ix83FYiHRPbtWua",
  "key32": "574iXocHaqFVXMeHyYHVsdgZ5efmg8J5wbQu28aTsAkYZo1VZVwFsgcPvkYj1xQtuPZSCcN8Kju7KJGeWrii1dyR",
  "key33": "pPkXV7xvDmKfmaLpmkBT9bUvx4Hn8qBKBbtZtTwg9uM5tzefaxUjfYoKumy3cpJXqPXsDQapE38ebxpLvFAX3b6",
  "key34": "3dTGkQZ6JJNFTpuLfdMX69X9wJzjfcZUW1G7Z7uFzqPP9FQVSAe2tTpzec1vtgWuCxPxLwmi3CWjjjyuRWYKenzL",
  "key35": "5kvpusr1sNGbuxc2Wu9hCqH7kdzgry44mhTzPtYs62u45XNxZykZmXrAquhazjKyPQpTBHyC7NTixbpcMxYA8CWy",
  "key36": "4TGcUSSQwbV1H11NtdS532xrLFUTWsxMmbiCsH1HpaukZrmEyT4UBS6LDZYWmKHHKoJPHHsqQxQdCPQWegQaFbwN",
  "key37": "3yPuGfE9NVeQrphYy5fTaqVteL8i4J4veXW8Y6iNHWnTsUDJHZ3Rjg2bjxefVeh7V7u1jF9dHNEoNvSwL75GC6cT",
  "key38": "5Vzn151eWFSWwY8W5kzKt2hSZiaXX2fiPVvDGMpi6iPUJE5J9NSwpcZeBJRzX3utqJHFT6J28Zy64SfR237CdAxt",
  "key39": "5CfoLm8nCB3x4tRrRmbgKBwk4t4LKCZMNbgeE92YXnBsj5ayKSABPbfPrQpDUrYB17Lfae7xQJMYC89GpwT6qep"
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
