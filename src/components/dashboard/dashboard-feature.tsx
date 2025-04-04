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
    "fFWuy2q7oknx2vrM4pRZ6z4Kbb25eeV9NkW6toWURUJrCSEatvNDEj2e8eruBxiqdkssU3fPGie8kibRTYwNryT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aakYVsqwtj8mZhkjR71bD9EE6c35MmDUTLS5bCEinPz47cZ5TuRDdFqH8p3DWYLPwSjuhyAQSvgMpD5iA77bMka",
  "key1": "4fgWADvZoUmmdqMneZNVWqgbGvyzchmLoqhTkzgHiV3PZ9NrWkFwPhxPhCpjEDW1o5RQVbkt5VSr7ihCeM2yb7uw",
  "key2": "4ZzE7NcYnNwkW65QF9UhCQeAxmY8xcduiMz5gLEJnSJnQjcDSHCwjgKznMS6WgEVrBuEkfMrLTuBv1oinj3ZWzUu",
  "key3": "3Ts8WoeiTLoY9iN15RD3BFm5K95Mke2N9miEqF17ps9LvADepGa8jkC1Me8dPfhcFKgMfmNjUcyQpMfRw8AgZWgY",
  "key4": "4g4SXSMmTg4VoJE8f42uMXcxPmdD6V764CvuM2HLnVQW7UDHnzVhxz4yyHrPW8nia2yxQEhaV7PQvByjpMZKVp5D",
  "key5": "61vX91dY764RDVjg9Uqb6yRg71X34DBvWn7UBxs4DpPFarNQDsZGLCtKPKkWqewyaJeJgsWm9XfanCMtVPLr9CWZ",
  "key6": "3CNo4yobRaZuRLxLrHmVpMQJg6FQY2DqFDxsB8DNLP8pZuFvvW88FjLX6n4kx9pefHRVosjdN9uZmrQm8TSfNN43",
  "key7": "3sNA1vKp3Z7yRfaW6wZqZqVo4n784XKBTrS1aFUSJinPssLkieVmnxJtwdfx8Qmrmx7nK49Gof36ybx6hEdpcQHm",
  "key8": "5YAv4t922BDYypgBeZHYVt5RKrUJUMVoCGn9H9uJdgngkS8uxKrXyT2w7REJ7jrR1LEM4UuwJPU5M9o7wAxCnQ9z",
  "key9": "2bj71ivmoXoHaWvhsWNsf3Vd65jVso8d7YhdpaJAya4FLXvRSNTNaUEvXCxTh1z6SVg4iftg6wyCvUGZGdnJxd5f",
  "key10": "m1778JgDAVxZHkSgkW4bQTX3NReiTurBhiRXvASRaSDv3ZvAguP1sv7DscR43gT6XZdsZUnZd5JBAcm4ygUGkGF",
  "key11": "3Xo6SFM1A22UrRE6HcjQEVHJPnfJRaBHmY4v9BAeWxRehM3ry8LP16AFgiigscE1P3jRooECfEHM8Eh9gJCGpY61",
  "key12": "5gdCpkYnCW5ews6ukmgzpbnQzmnBt1fjdzCAvHYQS32W2MfmqapTWtSjvQnEr2Ujy7tRFVRQvaF8R49AgeN3NWhe",
  "key13": "jjikiFGMmwZidLR8cZGDwYGxd2wASPu4ChbnDkARgsPzavu9ssNKQMCC7XNUCJwnBcrVRz36sq8YDjHmEn7trcX",
  "key14": "3thyrMnbyRXj73PC5mwRtcGF4kSTgBuUoVh45V2XmaNwtjQ2DCQsEQrydvSFJxNNbWNdUpzF5SyN9vh2vTudB3EB",
  "key15": "2j7wtiX7tBbiJRPoVeYnR1eAWz4aGedJUbjFxzrD13g4tkuMbjxWjE11s5YoomDvJTkAaLyuL2v9bKUbw1BdQobg",
  "key16": "bWrTAr6i5bTFV4gi1cwGDAUXW6nFbahYmJEoMb6m9npiV1fnMZBfwitUTKUi6G1VRczKWUCrQuVzEH7si6miXQu",
  "key17": "HztmMvttpGX4xVXpH2RtLo146yNCjzfBpXo25ABTafDPFEYQ7pqU1vniqKwg94vsaDoEsDfAo2Cw55cMmLPaRAR",
  "key18": "4J3XVES6wkNi3kWBEqGWFJfJDQKG27qtiP5mMMYxrPf8kFPGnuWtvkTstuBUdtZ7pw8mryVB57hN5NnV2D6BHVDb",
  "key19": "2e3oDCAqj9H9w6s7rZpvjSupV7xTQo3EvDVsxfyazJmMvX9x9m1DuxLsoZRN2iu5B8VcED5prADLmNdfUoL8uJFW",
  "key20": "5jiM4mZsgaxvxzBvDUxhkgY4WQiXw8RtCBJtuksfsYFghoBDjefyv64sqnzSdVvx91CfuMggdwuds4WtbBb5JXfW",
  "key21": "2p24N14DtFjezscKeQNzDntJVvjV5jRGCj3FX4zBZCm5fPwk7EdptmusXcBAVUahNmuM1uLRA7fVaNWHNWtKBPRG",
  "key22": "5VEHJiYGiVjQuY6KK9MuBMrf9Z5hrrmkF5i3u4X5XZdwHTVmWqEwoKpwH5NRXG8yrKdvNET3ZbuQAFm3c1kht1Bc",
  "key23": "2WGfEGQbnnDHmqQwYzmvBK8wGSDAsvxHGjmCTXJVmb4fNDMc6ju4BZbhsigaX1fku7M8wBBV1FqRczZH7yW2Gitz",
  "key24": "W35tnxpTa42AXz7KBcfXXFdSbXpCsuTTkLMQz1mRQWBHhPgy2AjkkSLR7vXonvfEBX8ygE5GFXN8YerFj54G8Bf",
  "key25": "3fcQrwXcKDxF64af65wYYQ6SL7jBDFbXAAMMwatxWrUxDet2H6HzZ52RmJpwcyxXF3uYLUXkb2LDmDiGva858RHV",
  "key26": "3XVBxDBeDWCF5CXgGJFqRLBDGvwwTev9Fio2wFHJFw979wS6mzgMAYPjn9MnosRuJoy3MyW3FWTXvRqfZM6ioCfg",
  "key27": "3ECM3XKesif6Fe6QJMkFktrVbwbfx2uxMKK6dnNpcbhra7jj65qz4QYatnJeYB4ENPrLXVLdwd2veRaXVvKCAVx1",
  "key28": "5eRyKJqyay7De9ndFBM3CUmaxhCMKZDSvNw1s8QkBYZKoc8MMYaz5Hz5KtTsrFFeRkeCmaoAjqFKDdSs3mKnBuQ3",
  "key29": "VCYWP6nbkk1eGiGgUJyVf5kZ9MAxiu9k4rngQmHi8S4UDcuRdQBq5pdCP1BrF6z5wiSFRGbub3Su2jW4V1YGUwJ",
  "key30": "56JFfA4cAYJzpGpYx8sTayHGT4jiMmibWve2YTKgVGwoayNzLSMuUn1sfy87vVMukCzXsCRwPrFmmf35HghuABz1",
  "key31": "4ymTdqaLXN45egrKnnKQqibjePMJC4HkwR8FDdkRy7rLE3heBNBN5WMAG52pJuF3FQtSQPZtvnpwkTkQWsWxDRxa",
  "key32": "Bi9jgfD1z9rP1eYGVexxhCHHTmkqMoK4fxUCj9VSstNm272Cou5MFXyRFDhpgthqKaahJErFkzfbuwEvfR2YND2",
  "key33": "TgjPwpn9UogZ5AcMz1Z51JZBw6athBXgy2i43cRpaZHeV1RiGQ1bjuT2x1qvhueZ1xpGkeYE21vnri9QuKDbuor",
  "key34": "4K6qVFRiMk8yGwPTX37ebL5uTAJKtiNTeS7BnnWpeA3GerGsyiqcWNZ7B8c33A8qjJjnZ7ULDwQnyDnDNhGDFRem",
  "key35": "Y2Muvny8Ajfy8V3JBewQL8SwE1UR4WQQu2Qp5iw4tbJmAeQvqABNcyd9necfLWDP5XPb8qpMvGtWJHLvnwTJMf6",
  "key36": "58zEJ95Lqfq9ytL1Bn461RpAWsWuytCok1M6EeAQRiJBxdtodiNeUo1uBZwxLaqfDbnPyyQWSyRQRjgEauBAJjRK",
  "key37": "5hhof8T4cf97Ltv1guQGPPasa8f8ZXa62hHkJBTEWJrrQWdQ1KyejEVoMvTcpdyYaV9spA6oR1GANvryuZzvF59X",
  "key38": "5GWsxRYC6seF37AgVpavfSE7N9GtRESwnvZP1V2pPDk9S1PSjNLcVeNosFu9NNcjKSJwCbTjudKnvEui2YDkcZge",
  "key39": "2K85vUKwucGWrFYaGj6QmWbWfqP75SFsBnKA6JfNzA4B9piMNMgreb1HGxMhEuVatjRyPjzfkLSCY5UHqfzF7iLR",
  "key40": "478pG2F8pcrw8D47v1pc68HPDU45AHyB5NHEhvndxWyQHpAEuvtGoeaMyLWSw6ZnqdNYvVq5NJeYiFzJoMXtePhY",
  "key41": "Zm5FbCZWCNwYYpFV45hNJmqJZavKdAznQf8F8NAwtG1AE1QJSfwZayddzf8QBeYf2M31SGgVfeWenTYaC64bqKQ",
  "key42": "4ZGKodVWzEh2hVdBWbr75NNJYzddByv54WxEpxHTdtyXZ7GbtgTUasgVVTAMXsLe7E7fpDJfq5xP8GxRri1Xuj78",
  "key43": "3fPgMLcRXzbn4zKqmLFhUuXvn7sscKe6mj6GSknmQJbMW6UkVguy9W8cY4d31W1QFASuiUQx4fQcpsMhQdmnh3wD",
  "key44": "58XwU23ijmDtjQ8Xj6mB2sAPZ3EuXfkfoZVwNmLVbd9zb6MWtJnZzULyer4hgvbbo38xzXT8U8wUKvDkk4AUJhYC",
  "key45": "2mw6Q1XPEcJRxfqdQ2KEcqGemrKrJ198yxmS9cfcsaJtQXKmkXQFMFhnUDqE4eZmNzfgESa2i1TA54fjAMjJ1m8Q",
  "key46": "5HJhjNzzSqebw898493MebhLe4N2P3xgiyp8FmJe75GDETZG94qvFkdfCkCzQhA4A47sDzBDosti9wWXaJ2wVApC",
  "key47": "UmoEzAdVZW1Kk5rgVyimeCZ3jyUWvcUwGRfmZMtJZ9DDgNQtm4fX7bTpci1rJTvEggjmD1nDPaH9NVZWz8dPj36",
  "key48": "5gm2476VYLZuzLNF8RmvqwjSTTVcYa25Ki7aCPr8XmUi79cZc2SBu94rmHih2mwDgSvxnPnBEQaMEPmQZM7mWufK"
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
