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
    "4EgJAwo7KciJKGjCN4Q4HtsVuLCoAFiAttLNCLypR3bUySqLV5Akw59W3nakdtJL6QK6ot8UEZstDiHsWAhYSrU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q8ZkYqf5y43yGmxQQpbnVyxLN4bDKreUSi7B6xzMzfYUerWLrbCRsWmYpqvV7PnWR6GzG6QKSW3KcQuJVhVfKjx",
  "key1": "QLTk577MxSSZu4LJiyKLQjC8wyWS3QWz5YcwKvEuGwou7jQUWwQxwH4gsvJy4maXoYPoD5v7Gobmosjwtw6pLW6",
  "key2": "5qSsWaaWJik4WP47w4m81MbsfyuaJxemobcuLiqknRHQbMKiGqL1QdjZX2C5KLbCMCKWH6FAF2FiUEmM1HJ9SH9f",
  "key3": "4vupQRVgD84RuqBnCZ1Y3M51RRu9sVJi3MqNZxjWh9D7x6tBkUZDRsYn4oRWnfuQPHsehydhe3XAmRay9daRpJGk",
  "key4": "4FgHjj1RCmT2Z1qbqJi4PbBp81uMaLxtMVxECbgEs63iNvcj4g9pTKbCgN2MM8Lq2wkuLQUy6LNWkbNjHB9JsaZr",
  "key5": "2wbRtTyE2TJgEjfgJbuEE5bfmnkKrtACfqT4QNs9uK43Jatb19odavATcSJspUgmQuUdzz9sSQfbba4VGJSTnTQf",
  "key6": "3c7divWGYc6EZ4aK41vd93DRCaUBMQtpNBcEWhYjcxQpBWQhgjEFcpFAgzorwBLd8yUMazo48uzRj3SBzc91Bm3h",
  "key7": "29nQK3iWGTXDoVFt3pK4sA5ZR7GZJWonUEyJUubXtLdzy28zNAztUp5H5tdunDKTNj2Q5qxsqFRw4FiuZnKu1tSA",
  "key8": "YX9mKrfMjsmiCHdMTmPbceqivHiPnsVmVef9LYVeY8z2zCuseePsiaQxK7TUYABEhSUzPWaEqXRPeEaP1oEcFJw",
  "key9": "4YXsxQFwpFbvFKRkkF2G4fdXJKSyJzSYHxtPHZe8f6UDh9ErxmgNmZyvwvZCpNd4uUrHyfJsPgRABkZUcXD9XqmN",
  "key10": "5EycGHEfxrUfKg8SE8iHpw25RiDvMm7ER4tTpFNH1Qi5omiQ9afwjzgDMTEXLGmCgSQ7ctE4367NmPwuh7yE3mGS",
  "key11": "4AdHjpMLNGkueLz7r2YJ3z1VXvNgEZLDPeKuDkqZ9z5UjoJZeiHze7twYumqaFRKCz3yJr9D2QvAwupW836EUgnE",
  "key12": "3rXe5rgjFEQrrnt5SR2RjpmhEo78jMxN9f2nMxLjvroHCxqyX3bJEiUx9oGqvCx7RMYAjPcQXNg5LFfjtB9MeLjY",
  "key13": "3hmHF6xUEuG1a9j8A1NkHLEfUGjH7U3z1Yaz59PeCWQSF5ycTiT17iP2PPMuBD1FMHcXHBDSHD61GjdXTdE61fG3",
  "key14": "3J89xy2wbBfYYRqdtJQ2yJnzkmmTXfS8cirz8cdEMaMJPC27uWVfJkwk7royyqaTiJGfLwBAGcFNyxGB6YnYqdq7",
  "key15": "2hDxvugYRpapfa3EQzD3PSqWDo6J8fuPvQdCa2bDhNWbFV4YThG5jiMFap8ikZAm2skYzTwewfR8F57bAsJzbW1v",
  "key16": "33bdKyduBAz1RF4SUUvfdhc57werbp1sqEgLTsPimB3UxfVqYDVQ95SLW2iRVQL1txGwc1HBRRoDZtfQCkeCc51W",
  "key17": "3TPiTJUnhXKM4hZH2MziTaMHPkB731Uq9ZKj3VbiQShSEQBVyX3SA3nAb9aKU95ZMYHakEhXKRdq41ggDDAxmkve",
  "key18": "nyyPArboSekDG8NkPMZqD4DbDdSwPZe1K9rCHgYfrAfrQmd4pi75htZQPFuTG5SJBsurZtkLYPnuyLb9kXEcaVH",
  "key19": "35kYJEdy8TCMpYoChw94UpRRX2niRWA6Sd5fPYDvRTfUMCGpX5ddqFBjLk8asR9V6Sk6Y51GXXEbXM1S1KNDmVPd",
  "key20": "4iaRWKvs1JkhDqiPcatzqUNzNb6WB6eyJbruvSnajTkSih5ppsAAW8xGaZxPXh3SsnEf5VvDMxuvVatqL2zgdkxR",
  "key21": "4sfsh6rFTDqd6eZwNWWmuuGCM6TTBeT5biSu9nVkZuexoqttyz8u6waSxmiSJMmY6YEGnoRHNpZpBb9xWx87Pkfc",
  "key22": "4Ep1tJbUzbgA7nRjMARrPYJdAi2vDcTRTu3p9CjZ93E9NF4biwLJ2DhvSZJaCdwYRFYMjDickquoNJytjxBN2GVZ",
  "key23": "3LcDb5jPX58Ziepkp7SmYwww7DwhQLqsqxuHGTVZdPGMdEGM5b66KvFghmp5tFYUPgxmSvfHSCBH4WEvMBvq7HCF",
  "key24": "5YrdeHXCtJnFVe73FJPWR5davJNzYcGZUtsFXX2NitEF5U7hNFRH8j2RY4sY2acp54mRqNTxSUcmr5XRfajS25NW",
  "key25": "dQfqubE1H5fR54yprph91ibKMDSjejhafLmU4XxQjRMhoWHJW9oeYAjMnnrUKaRCUEZPZiGJ8AkUXREAdzGDy2F",
  "key26": "2A5aP8UznodzoeFbQ8Bnb3sbNbef69tudeNGjNAB8HQR3tAA4aUbjdQ4avY9hkyzaN74JJZsc4MA4JWFqnt5ZgAf",
  "key27": "2QojryTokYspBZpCUw7no1BxdXF4GUyCXk4JAHUaN3eUWV7WpcAcbTsjxfA13yNVPi442sSdE5ET7UpfKgNFXb74",
  "key28": "vPnm3TVGTQWT5kqboSwnkJ8E9DjuhR1mQZBhE7idKXW2LTgWwEQmPnMsFVPYE9bUQFF2kHZBFKQr7kFj6ohVExz",
  "key29": "5fe6efF4RJSP6c6Kf7jf5RaKq8GS4A35rpqTXYoL33caWJS6fvFvASE6NJmUH2UGiVCPX8LDR5D3HTDuwLKccVE3",
  "key30": "3ZbUmF1uixJD5twZRKPT1EGHudGNj6xfjJp7NhVcsxk91pFJKY5ukSpci2izbeKVVXPEsYhovRMoAJ85p3di8jyN",
  "key31": "5Aos8xz64YRsi5AQRhyVUpVpujwDeD6RHa8mDbnpNMB3ZNHjb5aqn92LLJtZrsNhCHkDHdX9eGufdeuqr15X7gM",
  "key32": "5Mxcvy4ardtW4msXV5ReQUkzVdxR3JaqgciK8bfdKEBFUinEhd6WDT1Fyx32dmYnKUqMsM8VmDQKAKz2jnUg4Ptv",
  "key33": "Jdi1aMajipri6xumeGVw5fqTPUE6PMqWeeKVzE9A6E1xoC2u5ErKGSe2dsx97WaJnXMFm7ajSPqmEaTKXTdigUV",
  "key34": "5mRar3nApd4qfpmucLFCxUbVoTPKM8CJ6sRn7o8Nc5U4mvMtmeNucCjPG6Rm5dEYnrJcnXAcZwHAjteENH1ypMEa",
  "key35": "n9VgTsfww72CbZtn6mEybbZZ1Y7o5YE28rNCGUCbVYYNr6TWmGEsGPAngMcdcMwsty42gNRNEU1gHYxyT5GUQnR",
  "key36": "2rfbqPKqEDPzMfo2GzUuRoLoEgXp7GbhdAHNZyBhXsZgzBJNB3y7bugkhqRTbbYT8nL6TB7KdYunB8ELpgvy5yz9",
  "key37": "5du2UVMwcmsiLusYPjYVTMZvDaWgGYWLtXVnycD42sbdG4mwjqGtzVaFYViPjAcfo7g6URoJkN4U2Rrc1jPenDzV",
  "key38": "4fW63sPqc3jHoaqS2swZb9ZKTBL2MA7nFDCfarSxVQrG8Z53jnj4SuFcppiz5ocJaia8LqUJ3hjPn62SeAaNQMZF",
  "key39": "5aqZyXRaszj4M8ZNBUXcVWFeSy7AkDXU6RTnwYwE7gcVNkuJnAi3LEygVmK5T142eCVegs6y4jSUJoSNTMyDQv58",
  "key40": "5RwMSu7ug1DfXmxMJaEAbcCHCZDYQ8rDsMoh5ov89Fiyvc5rU5LLY5CjSPvg541TX6M81xEoEFQW24UsrdrWreb2",
  "key41": "2zceHvecsbL1XXUp2kssYQxaDYuvMX6t3udV6EgFecZN54bGoeX2cwsu6ySQabyR82xkBZZZYsmsAbXsV19UcmWZ",
  "key42": "58Z4icpUwRbJT1CWrQtNMPCWgCdSWZQdYLRgupKDr1ocfKtT3E7NN75MLWXULeufYgYF3RgSUEVTXHb71i6saR5P",
  "key43": "3DxHyYip4yytHSWdGGVxj6oerqm9gaQQ5QpSd4Z2Es9VgrJj5gDGWqJnWHYpAc1Uyz4bi9eV1cz4EgDpEq4WuvGF",
  "key44": "2DwNHLDJPK5LLRtnsxBGYZ2Ck9YFrf1AnyoNF8ZHfZeQgySQGjt5H3nLnYUz2cCPaKdyZZp1oMVNgLxgFJH2Csqq",
  "key45": "3jEEhpz4G1qFyjBNigLzBeyYxNvRsJbaWzdP5xiPBaByrbTNfExXbZ8e2yCe32KNhoWGymxUgwvGY9EZy2sJ4zrH"
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
