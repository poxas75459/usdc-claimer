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
    "5rgyc3dY6LxzRNtX42kCbcGqeKkA6ZmSGTci6uJk7x9GZYtBW9qj3g3fEYmVP85Kh773toaNQB379HcDdaMMTHhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29T1UUfCsHm3GMfXXF1GSKPGGLfBMNd9gyhnHMMT5GUffLwTniLEsxoZv543HZMLN9xGMSBeXtbfJd2rihWjVTvp",
  "key1": "3wPjwxhaHtuEPhm2FHLjmF8rCsU2akhVkdpqcJF2AsjtYr4BsAU2rpDs93E5BcJw7XXEGPnzqndkgodA6sWgu61k",
  "key2": "4M8zQwsXmEu1usv1c5c4eiZjsXdAyv1WW4iiSPoPfC4F7KV9fP32Rj3quqBiD3gwtHJGmrpEEgHnLW41rg9uiqvB",
  "key3": "4AYAbjZR9RZqswCdp1iSSMjPyuVn9xVJHkPs1ZWHbrgAbbFWihqtb46QcFMmfeYRRxbAyw57WJv795FgeLMkonJa",
  "key4": "5kQWenzctQ5kHRG7kTVz6mxpTby1XGXCPwFKMRknKFkUMskUjRCDiEo6rjG5b3jZ6MjVdgsYTqpBJWDDQAgKiT3C",
  "key5": "4q41VatLzj9r4m3UzjGzs3L2o2331b18CLAnaQkfqzuk6WZK6N3DbUUx65E7CXAEDB73LS2CwHSgVCaAHGSZLzTQ",
  "key6": "4ZaH7KgtCTS53aFVPQzbQTZgTejC7U75hVC5NXEaZ9sgMdLBNEehNTWHgW25vXTnT24piNW99Xm4BwJMdxfveadw",
  "key7": "41DeJ8oZ2PNgTe61LAekpAitGVxMT1XSqTyoKodcfepkshK6A3334qu1SVn9tV6vNf55Tqvap4znVp2j9n5sG67R",
  "key8": "4FUHKLRdbxkS3ixRTYEPy6UVoNf6n9sitrhMRCdv83gBDcAbXZFqKvdfrs3N44SBmSvrHMn9TN8ZrfqwBcf1MVb7",
  "key9": "41wcztpF8wuT3By6UAKpgGKp1eX9w5PizJy4h2Ej2KszmqEXQiWQPsa4dkEP2MqjAkiPScRNE3rwbbYcdhtmyPqN",
  "key10": "66bXqTL8Ro7LEQ2Cm49PMkwkwFqTMBYq3811PysNKxrTg2ARNPeSYwTeVZVc8X4cm6tkRAh4LaBGqhp7yHCSufGo",
  "key11": "3pwSpAn6jYMSuH1tnSx6RZ1c6S5tHRuCH1NFX29DeEoFNdQMXEvafyzfeBkJC1TQGHD4YtProUyNDwZE3t4mnH1u",
  "key12": "3Jf86rurdRtkQYq5MP1TsG58zzVH34XggwsXhp7EM67iNsYDjSUowiWj7DzhbARMr5KqcgV9L45iLbrR52RLUdTK",
  "key13": "XyvwKYs6gsDCSwvzS6wjPkPAjyPsjhkfWtGrD6gBgGBXYfKeUt7sKPQPNS4v32WWSSMeHQeYtPN7XSttV3p7HET",
  "key14": "4zWZg25hz9QRotpobM4b3LYgno8W5BXEmmqqCzbWpRevXFxVNGtteHy1RwqszPP2g9nRApYwu6F4zncFgaygbtmF",
  "key15": "2L4h6phUhhaZCxRdRFsD48f2qWmRPJnU8kayHVkiNnznLMo3Bo1b9iJovZS6oS4nxJQCaGdUMQqAXQYHPLVoAj4v",
  "key16": "3fgqULe5KFch9spDJymbFFXxtd5LzRM6GTnbMWWaKGeeyhmJKrKsruAL5H6Zgo3sGAqL37XKSPSNzEmdwr4WpLrf",
  "key17": "2Dv8hXub56TVS9sCz4aqGCTnzV7s3oUBTuAsHKwQvR52bdNT7nEwJoNHq8VyBGuwuKWVnT6jtejesuiGvzVo1hst",
  "key18": "5Np5Nie4rMJ17j61PVKnUzWpH1Ni2vb6cqYneUmZ7PmMf5F4xaa8Hr7Bizr74UpWrQa2Wce1sSrtazSZeiK3e4Nf",
  "key19": "4hUQndjMCq6STKcbhpL9oiZifgMuTKDheS1FJuNJ8eBMUC4AMfumfFGRGWG25UuSnMRPUQezsuiCu1ZxvsH9FLp3",
  "key20": "3zgVt5TfUadW42Wte26qVZVKRqBHVr9mJeU4YJU9rS9zDLo9AgJxqTyvq1SJqPktoz53VvuKFqn3fz5KwGBGmspy",
  "key21": "2E2rMjRKe7kaenCPgRHFDydzoLMkcYMFXdrVA5HvNhNYcoLygZWqkML1qvP4oAW7y2P85nQ32FLUd2ocdHBmc8Vg",
  "key22": "5vZ4UUi6V2u9efNpYsfMB8gbdn8LwqiQv257v6qSRSzCsyzLRUnG755nWUYTgjqTMLJXcqcC8U2VyyG3wHh3pHs9",
  "key23": "2hr4kQd8kJRFRdaqZ1ychCeixPzXdUMxc8AnGyViYiN81sb7begsPj1B7XBH4thhB4EZFhjDU4us4WVvAG3JBLoj",
  "key24": "3H9s1iwRXNWV1r3g8wi6eiE1P1VhBterzoFtNEqw1rGKsDudv3skCRbeRZitUpGRpRhgZkm6WKgapP2cEmhgz4P2",
  "key25": "3f5aDMficQqSTaCaL2EHf5fgi8u2yQSAgtYivHvrjFNCkpHaLGeykE1evVg4ykMyaeoRtyaicaNPYCYgYZvLHL5o",
  "key26": "61FKSwbS9cttYfDKB1wrF8hegfihNgQBXRuVEZ846i1E6yy7mTxDoq6DaSY2bXB2mCddAB2CKd6Ymh59rHz4D21U",
  "key27": "iWGjR9hb9KwALCeUK662NawBbqFJyCJ1Wd3urpL4AFAkTCbz5agSyvLGHS9Pr36VXgMtxbvGR9V12MGx3QbZSvH",
  "key28": "2kdGX6yyeAGPLGp9NifuAaoThFHDWd5Scq3ykQYwsswniDnMpW3AbZTaMhQ9Pum6rspbZYpJtx4cWeNKPjMaw7sZ",
  "key29": "DRysbMchS4WuNvNafRz91ssDPSVGMuaSLGpJRvvgn6GVTLSnsNUAh257TktAaDBiXFGKBdXVcsNSuetjU2nS2Ds",
  "key30": "rz7USfY54xMpu8EDfJohjGdRzWYdcjEFuouWDceSDh4E7b1ZYg4BQRU1ptBcGy8HNUP79BpSNWqW5Zzu1ooaEtu",
  "key31": "4C1nhRzNPqMrG3tqDnXnWQtgCEXXDu8UxtfUccFzJC6BWkVM6b9c6ftVSZDax3Cbw165dK6PEUNwpA6idFBP7NP8",
  "key32": "233FtVPqxw82S7yu4RU4PuwGfkHoH9BAtuJn5pqo5Q7zvZPVfCwFNW2xHp79xaGvsvCVgvHYooz5XhjyCnAEp36m",
  "key33": "3PPLnm596dmLXhKZNaNd5uNQh5Px661WG7b8jruaJ1U5jmB8hsK8freDoGZ1jr5c5XNuVjGLmN7Wz3GP4jAULet8",
  "key34": "5r1JKBLHSwhWefzK8WgHT5oPwvd59zgYeCCLdW2pDesSs2FB3p9Wx77boZpykVzzugxFxv2A8FrMQ8vFeJkJ4NN7",
  "key35": "peaKA8McMUiUWYaf6yWQGbhe79exw19HkYUtiHH5SAym3rRtViff55dYRqPaDQSUUA4odR5fQG6yidvojpbmp3U",
  "key36": "5Xf4HFNSVQDGd5hxDRXFfyvis5dq7hxxcrZmZWEBtPPt2XpY6K1jGJmxJTedpsmUyAMAf5iTMFiPbH2LbN2byTKa",
  "key37": "2U1nvkcqGV2d3qBvNBqWY7JLuqVhxJr1dcBJFGMQBznFF3dgpfxQ56HDE1Dj3aEGdsFgD1AHne6nJSaxZW84xvsF",
  "key38": "qMXxSxrvMTQdaAV6HNctqZSKvySC8o9bbexMXdtp8eZPnXEh57E8ADaj1CJdSvMn1Cgskbgzb2wdDuDiBbmEWDR",
  "key39": "rvMF2PqHj2ESRN2guSHMmTS4NLnQoc2Ymmbk1HFXMztuMxfShF4SrUsRrMiJ129FkN1vUntjfGkCjQbprWiiXur",
  "key40": "5ZEp8dbxx3yZSk6BMfrXS69drtuBCGR7nicwC69MKxpupdY8QYs7VWZUzEGBehJj4BQGWKzCekkCiJtFSJ7D8sw2",
  "key41": "Qbos1spNr6nNUmJxr3DnhUNcVQRnjjjRBHS74giNjJ3YCt77HBTU5VqvwuJKRY4hVNytrB97K5FDX6AnRuJkjFc",
  "key42": "2SYHCjyYDZydgaZZVhAaiXMQRgHTJUjn3KE3QzmVPjKnyFus156PUfXXSWYZjzyWqh4K6Rabi4t9kQL4pLvmxAuf",
  "key43": "q9mRRLqJ63fxDV6em6Rfxe2BUhrTTGrvedrC8vBzv3JA3NH1AGxeTagSCAzEixzqxeL4sFboJuRjST9jHS1bvgE",
  "key44": "5EBnwjnok2mbE7kkJzcDGKhkdQ99KoUwSpkwNniBedoE1NPjfKWrjrDvgMVAWwSwJaKk1XuVybN3NTM7Ls1BtpDQ",
  "key45": "48rAq22hwX9KuXHM7HqgCQaakNeKnMV6owguhnD1Nf2wYj1UpnP7TBgRoM97nxeUZe73EbedJFodcJgwKaWybCzD",
  "key46": "ccQhd35y9WUzgKV6K3hmbPcVVDCBV8EFf9CZ8uMsnaU9RTVKhLavvmYGgdH4xafPbh9wRfYeBRS7dcdvU86qWab",
  "key47": "4yd3SZDJskFcgfU7Fc3QurKyvKcAKNGdMpkf8fFD1syuUoL3YfHjAADAAX7qNiyy25tATBVGTi5cNSj86tLxtuWF",
  "key48": "4A3uwpdf6CzGFHAm254ZSbHc8TVmCzpdNVaejJ32GiifJ3Md5DnXr63uLYXnX6BBVxKfkGHQr6xTcCAnfCEPkrxF"
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
