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
    "3Lko6415ydAXCv1TymxWtsfuzXZAANADrTmQ9S8eESQBhENovStD23JXAQ2H39qp31WBX88LUbzGsFeBKtgN3AWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ewNNBfkTcG5XJu22jFQgYZdrcebdAd1PMA8TGoRhLiLD2tHzf8RKt4KULr72i6iY9t2L9HHYLrsfUjJdaVgFy7t",
  "key1": "2fpxu7eG3M4RpUwcnLEa9veWsxhLFkFW1aAJ1BcH5rtfpQCatfGCw461fv95RD2PsUu7DTU8WsrEV9FedAE9UAYe",
  "key2": "j3jiaqhJVVqc1s5yF6x8UB2mqwejUGq2h7zJzDyUuEBQXUUWtcKkjKnTedHgQiaZewp9V7t5UtWrTGJ7JizyY2d",
  "key3": "2cG5Pdv4YUcgWTyAZS9SZ3scn1SVq8k6eDGC48mZ1HLGPGVLH5et9xWn8V6CPMPzw1nbCSyGdbzuyMG4HakyfAbA",
  "key4": "5aNMX3hX3tx9i84ttbpRL7NE5Qtssae3BcLJvKAZTz1n1JbwsubC9FmTNLG8koK89vuJUfz1DQoX1WNARyw26hVW",
  "key5": "2rTEZyusvUQUPa6j27cvP4ASMMSenDPsJahU6BEfuxHS84BvjJBoSapscS4vCSNKKAF3b6UKpi1hJpqJGKqFHnHt",
  "key6": "3EHEDobYU21C38bUbnH5PmGXLm5d7pH2CKx8sK6TmTEysgjXuUk2hQLvCVzrfwDXrKoXtaHKjXR2QGSJBP4CjVjp",
  "key7": "T6jim5VzgtDLayPPQzEQPqJ8HrUJvvipJ93t7CRiH9XmiVbGZGwn7G2NqyV4RxAkWFmBFuUadfStcevBWfMMMMi",
  "key8": "ZpgeE5GqxTyfLyabKNsfNREBh7DV6yWnnY5W8UvRLCXEKqTFs68aVV8T2ji7dDHXLwXE8pDN7EK6uyU3pTZunpK",
  "key9": "3zJ11yEJM24rY2v29Wxxtgcm7ah4wMjo9cTWjK4P1EZzBF2fjFibtorWM2CQoBqHDfefE16Ar3fSobb2Lyr6btFF",
  "key10": "42VxsGSz63JL46MvW1P68KVMbUD8cBmwk2TkJ9gNQ8UAXjAx6XEZRACSYwMWxE7nZRn3hngjNS3pWEFRiwWTCTU1",
  "key11": "3w9UvmEZFkxL5q6kfRKkCd5Qhptk4Tp3FQ1fSA728wQpbGZTw5fVorsR9mQhEqkDAbmMXKsHp1rAqoAAXjAeP2Gp",
  "key12": "2moYzhciJyVzaucoGCudhcFWuMXztEGqoQ1fZszFR2hRKiHVd8Gnt3Taxkm6qVy6YAD5npUSBb8oiAyovBiAe8oH",
  "key13": "iZXhHkhqtmYEepeRtqFxouN1AUHSMPyd5xYT99nuSXUUwPZatCpvrvadcAfXQV4W1fqp77MEwr29RrPGxoAsUS7",
  "key14": "2hBJLquFkq3o1Sdfzzr4ZYNC3SuHpnmrzPPMZ9sy6LEB8KYxgYenMjeCUxJa6KMoDxJMCm5CNNYQQ1DUK1T5kTji",
  "key15": "3cz6mztBkGbUxzYnHxixndpywkaeG88uNdxhVvt2N4TkEyrN2HonFGYnpnVFYaedcGaDZmxRijEyVuTvjy5rY2Xm",
  "key16": "FEqJ8PgUdzzgYjUANZrDY23QSSodUrSphid91FWTh8bQX8xfjCbGQKfegWh1J9qspUQS427FbAJmBFruK1aCWTo",
  "key17": "3VxMnpXqLCpNmcxrSPyE5kphg36MsE97hnNaRVRakNUaJExniNRADVoejgESfmuse65zmzmPGzmo4ZykW5xkZ8dG",
  "key18": "JCtUhWeUSqzYLbVEWy1aPRMLEVpTsDKG3EHfgNWi2px86is6PYpH3Vr76MM37XpGhkXprVM1udhkTeT69ktoqiS",
  "key19": "iC81aFbTijSvWH84ZEXbbcSQYhYb3LL5Ukf58mmKhp3NSAy7XgiMHKsHKDjiUgrtE2oytSefsEAjMmuCAaEjBVe",
  "key20": "41xgKM4pDJbje3YeNf5TXThPA2rus5dPKfNM54iSu4uyTBSREpzzUApYrtQAY7i9FUFwPhijYz4WRgDmjMg7z77U",
  "key21": "2U49kVGFevmkxF9C4YaVYWpaeCngPLyjA9k8sgLuVvHAvT2sKjBGeFiqyvEDV2BVptumE1WJAGcqxaVGaPJXBJeN",
  "key22": "3QNXjuSFT926DEm1o4iZhXWYcyAfpg4gMXdFz2ERJ31p2cj8vTsY1KSuQLjxbZEmAbA8wK6fL4jxcKUsbnqPXwmc",
  "key23": "3LkqPa6TDhQE5xsDm2r9ekemJPwrDvE8Y8drZWcqTSUFxTgXyFjBGU6BvsTJbKAaF8owM4ZR5cTV1dNJRP6WHp6E",
  "key24": "4V9zHdwZjWhwpF3DBQBbqaXNFCvUiaxfQDfahbud24yw2YqLipuYkXUjBrjPRkppu8B1PYEBf6rPBcf4fBBReuG4",
  "key25": "31nVmBcmKEWu5H4jk9gw3A9AHxsTFSM8fnQGNFQTmWoVVdMDDZneR9qyPopY7HCCjna5f9w8F5oTdwerqZvoxnbo",
  "key26": "4phKcD1UrtpLrWjxAbyQrz8As9mEwKKkR6nzrWV88E8Sdmv9sfPkycH8cy7gyohVCnSKW11gABj7jWHQZWkdUQyH",
  "key27": "tHXCWqz3gd67Q9aikWJRNJGwXn2SaU6baKDxGMFS5dwhb9JUyydN4nBf2GGJgWnFK69ekSBgd8enfzTtiAs3x2i",
  "key28": "3rW8t2mV1dztPmB8ERe25p6ZCQkRqdknpWsXFVRqDUaRHUUf7PnjFWcZSxcyq2kovyrjknSd5aHmnH4r3EDG9EB4",
  "key29": "4CRGhrEohGWrr7VoASoU9nENDxeEDXNu3naugRReKEWm9SqnFHHdPqekiVBRU4hchHaBst2Jg8n8hyR1G2GVcQ45",
  "key30": "K1ZgFptWV4PrAQYexhgJAm4iDCEXCHhamJwyjdbq7WgG4x4MwoMouRQaMDpXKrkAYZfqvvoS4yhwLX7pSRnNRZG",
  "key31": "2PhbWJ68LXMwBnopoy1X5tjjTz2QwLSv4GoAG58UiFkMGwga4W6tWbZxssL8UoJxSj5XqX8VD4ntjSovVW87XpjW",
  "key32": "48RrhFs7m3vqg29GaTW7wJuL22mR2AtMeXboMKqBfXtSoXvEfvx3s7RfJyjW8gJnBGMSqDMuGnZHa4BHjMXjKTjL",
  "key33": "3JArhxok3SnUk6FvHeNuwZDHSyzCgM3kY3128UqdvaQqKpfU9xXRFfqK5D3TnKpqb2STc926T6P16N2Mv7cCcKsD",
  "key34": "4BuGXeiUYTXjJhBTVSHFz7MwUpuoc6wEEnfgMwTE4BA845x5Ef9SCEuGSP3STygMqKDMQxkjMsMNuP7KHkxyhZZ9",
  "key35": "3qfqWsHEmBUm5XbxCfvH5iBZs5ef6ukmyGTeMqB3fnZS54pKbgHjTT3UpGE1whZc7XpBeEHopJoxtdSQroUDgv6p",
  "key36": "5ZNRu5PhyEWtnYLPhrTFRiLQgGLLkSihwU993PdUUooEmmNdXS1abVXXnPZSDKmNUXaHY4Ng32W4njkNaZnN4dXa",
  "key37": "45nEJSjgGYXUuh23D5CUk47MtBqw2jraH7TnrGTU3rW8jAomL6qHL6q6aEiStDasoMd3xeNgkYi8TW7JBr5HqQrx",
  "key38": "3MBsdB1ryv66rPXCDmTZYneWBfVs534RAEVTAqffRYqV4w4Nim7SLNTwk98qcrGQbbHaab3D2PfYHsPKtPyY4iKL",
  "key39": "5zXHa29tvt16DMRLagg3QkHRAf424M56wMHV6p5WuC3bEuAE8SBzBzZSPhmZRgbwNDMpYUC9CAfmQ9UeWWE5R1aA",
  "key40": "s8z4oJxF2zcv8maRb8Kk2accXr4bQLgotA3gKwuzsoNk2Bkr31kbVmKqPvBnK58KkCv6yTTX1hCjkeUaHsNdxm2",
  "key41": "65Wvn5XuXrNrqWzm3P5Az6DtnMusprYsiNCzpcqkDGYaCf3PSfBBjfC9FRBhF2feHQRDoUFjBhC8LhKTKtWFU3j4"
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
