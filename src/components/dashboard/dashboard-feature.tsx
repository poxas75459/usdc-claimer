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
    "5FsLUmx3ueW9XPGqoCyyyrKmyQngBsUnW9uV1DxSqsbPKrxCkDP8YD42RdGUgVMHRuYiPXQ7RLQ2XeSAbo9eN9hP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KySJFgG6oVQuZB6k9kBXp5vBt81EG7mUtzCgCEvt9kw8UWShurtEwyre42cQfDGSNDHHYY4QyCS7ocyguaatcxv",
  "key1": "4MCpzN1DPXED8bNPuH3DEX54xDVXEctMdUXjRWo7moeuHCVedahWmktRt6oZYLQpB9jsZMQiEQKMjhRiLJbFKVDN",
  "key2": "3uaGgB2Agxze35Yhyit65KoN6tytD3dipaJpmt83e3GPwqGjPv9b8w2C8WxuGBhf8MaWteMpJP1wwU9cWf4eGgU7",
  "key3": "2Esnx2Q41aC4MvrB1MPHpwJPaS7FAGcaxQbyt8i3P9pkYQAbDH5EgDHaiRbhGTyY6qUGVhnXqYXh3nLN5fBjaMQ7",
  "key4": "2Bo5sXMoEirwyTN4sWPfczVCm5Wr65uwLU2g66hYjkWrzxuPwHdhNX9YE6oe6cLpxB2hJ6LLSSRfDxtHxpRHnCTF",
  "key5": "3RDbr1Z1g9WE3ZDynH4Kq5H48vWgqh4HmofWCbpqwjh41vB8WTyiiRhcjwhUUUx9XoeoQftNY6dE4cnF3Amhq3zM",
  "key6": "5GguPUDZcoGoAFVNuoZUWjjrqXLdUv6JJZrKgpFKvKv2bJfK36MFhGQZmP1RdzBCBe65gdHMFcLitJGux4ps6xAR",
  "key7": "5mhfCNXooTERryJSMZ5pyS5Q6bh5xtjsoxGtMBCvVsTgV1YV9RJTXVVqQ3dDSju6inVE2y5iSZHMzFUkQdqLmCbj",
  "key8": "SfaNwCSXBKSpBmTxgXL6VQLWPj3fMNYwoYHzdSDhCJeakQMGzkuhDdpyBeqKEA1dmfzo7nDQTScm88ZvfRVgdnB",
  "key9": "Q8D6j2gYnEZNAZ6214BbF8ucsvtH4XmjTGJKuzjRjgn9yv6FzKqX5YoP4RSUpiowm87MnhQrnREZrs2VorUBCZN",
  "key10": "3nsDDHAkUnERHohmpi8wKB94hJGLSC9jVZpEiQuf5d6r6t5jzWhtH1LWHs3Lm4MtLDx96N3NkENP7KwqzPjh5bV1",
  "key11": "exaW2PHJ8G9uJodKxPeQVy1hi5V5HdqMBDNyBeGns2uHFAERAYippRdz1Lwq58F9MijkP5teE7DLfVRLKsQmGz3",
  "key12": "3z4rSutvjKetH4yve2SyMaKLrTXtp1hjcZBBnxQM7a2Sv21MkzWuCkddZqLc3a5LDKdBFPksyrCS3XyHpzcUupBD",
  "key13": "zc82bRpSN5xcqC89mYqyPjdFY61DE5L73LRcK2RXmEHHp2EfUZb8C1fcWhWSAYPn8vLtppfQWhCC9FmJSA5UgFu",
  "key14": "5mszfscnPEFNdyrkf3RppavRegSaSmYXa1NfJ14KiFxVvMCqdGeyikG7xtRBzZ2ds3oSuHkLD2BRpLko46PPxgPH",
  "key15": "3b94y2np6g2nRPQo8oDTrayagryaeEmLGZUVZA5L2kxNNbA9rWGaFyNiygJAndvV1zwAoGMxFcMLPH8v4tpqHY7n",
  "key16": "489mTquB6q3jhaCFPPeH18aPSFw296pJigc7So1gU1hvfnfBaDiiYXvdFtRwfs4VgTgSgCP5XQTJFZU4s941DTqK",
  "key17": "3JBLG8vGQgu74NmPQPPaSB5dBxkosYTZq1fbHSWoC2mnPzZyWDthCKTVqn1BENiQ6jah76hV5sDR6e2HqM9BSMiC",
  "key18": "54Wy1yBhEi3SPs5s5go3ZKtzcDJYUBxwrkHM2TWRPCc2z4Jt5nE1tFNrokdHvgY2p1kduoEjoWDRXJSLFRWRStcP",
  "key19": "5ND8C5674WJr1Qs97ffDYx2FpCEJgabrHRqPFvogS4hKq2uQ8zTe1kVmRWg2XEZ4X9unW8Pjj4ocs7zF8rhdT5GB",
  "key20": "4BSfi2EwTCs4W1gfxeRWx4xYHrRgW87rnh8Nhg8s4K55AC7ipNUpgrkEuQnu7FqoRqKHR8obeWBswHE2gzV9ZLbZ",
  "key21": "AzF7D9qw2rGaioLgLka6d8TP3HWro83EZrJS15V4k3GqwhvDity3TZArrUxpUicWmWfQ1TYWBv8hcdCGvZb4chW",
  "key22": "4p9xcfPUaJGpJBgnrMj1AX2SyfG6FzghsBZMRvX6SpvksD8WcdZk5BW67dr32kvVBaY14MZycREkwpsEATFLjyNR",
  "key23": "GWseWkK73dGWXevK6HW6PmnoPEdXr3oqGjLkSYrAsPajiTeFXevLXqVy2MphnxgbmBgWg7JXQRpsGa7cLsNf9bE",
  "key24": "27TSoZZr461xLg5iFHcyegHVkweS5Kpx5LwY5fZqvrVP3eBn8pM1xxZ7efPRaG48S9MEepZXmAJ3d4x247tc4tFC",
  "key25": "3SCBfQsRByvEeHPbbKVChsB6fLRBn9HYuwzyscWRieg7suuT4VDepmxPip83wE7QEYdRpo591JuybrjrDH7Jj8yo",
  "key26": "2u5ufErxL2ktZRDJjTdwSQ3ER6S4P4j8G1LWwfbCxAkzH62NHxmqN5TuGLe4b2rq3o5sxJ5wNJtkz7RnwhyRPkXV",
  "key27": "ikab3FUJT1HDwcE3vNGtMPQmsgJtbWaezP7sSd1dXg1Ne18WwCBcnLRj8aysMLbNGRbAFwo4sTvbcSVMaV21igS",
  "key28": "N5gESehGg4QCsnzSLK5gxdyHP1kSiz4wf3ZEqborLpqhsWzHhcYpEBvwHT2HvVwu17xi6Y8PGDLHUFDM44aBioy",
  "key29": "3Z5ZPAxYSagYKHQSbKXyPWHjWNnfjB9GPbTJhCoCVehkhjU1tkjxXmrMgkfwJtMhsnoLwCCpqUksppv2LmMNKGpD",
  "key30": "2gLKm7Jf1DqzYm5xrMgRNFwvjvTZSaeDTzdhLjzdJFrvdGWVToh3rwe9jvwmGEC5zSqvV5fELWqqgAPAzMvPk4Eg",
  "key31": "5NqyRbNw97Vo8PyVApoXW9DJCWy5F7ai14xhdqfcYcqQAyqxFXVhbgBYPLgHmAw2JuBVti5FyYv5UyN43jaQCdjo",
  "key32": "5NEXPYYsCA2KDgL8b6qN7Fpyc1c9DnAqTPsWkSbe14oLYjd1NciafzjiKLno2FxSgFzV9ByrhuTQcGzhDT8uee9A",
  "key33": "2yHn5FmYYr97KTs82Vezxq1GyjWsNLn8L7D43mVnhsdicmxGyJJPFt5jHwU6PAN7GV9eQrFtwLuwUnsNEyo4mr7p",
  "key34": "5YXxFhqGzZQ8JmsM8XsptiDtL2Te2Qw9ok8AKUqHir7jkBKE1vTYwRy5rtCpmuYbACUrd93wgx86BQzk6rE2rP8b",
  "key35": "4D9FL3dUsnLsTNsZsPi3AwNuPHyo8sd119qyo1MDXqEJV4Ztzotp1AoTs4U7AsTx6XiqLobRzfXqoM9maf7tYaNM",
  "key36": "5Are4E4cSWj34fxNtE7yGsUo34VbJCYCGsfsnZ51aAyPm22HXPNc6aaz7ynDLGnQPFY1EmuXL8hibDiBNHWPJXsJ",
  "key37": "41EGnxZzToqECv9fEp4moWNM73QB6tjT1riuvmmMwd8j1yzagPr2J9g68fLbLKDWiJ6Jw7q4Kik9ueS4vbMoD3F8",
  "key38": "4Zf9HwoqztQmcyPrYinzuaXEhNNdxGpgh3zdp5CBNfUZUgRFPLtaUF7hQg3Lr9ZRmWZGHXfuqjefnTgyvj9csw7x",
  "key39": "3P9dBEMJZqCRmSzPTg4KCgJX4NbaaRRSZzWYsFmSptwjRniyJXhoWWndGxJfcgWvXquf7Lzc6SfGqEsPBH4x1XKu",
  "key40": "2kGxJ9d2aUtepkUb4puuSHAkSEgXULa2JLYD9SdkBF4af4KWUSSjFx3jBvqSgi36PLL6uedwxjJhuWxtyF98FgFZ",
  "key41": "b6e1grdq28c61XhfGCRhysfFW6WNCbpWAFWZnJVWpE1xTU98NfgHyR5rLfzbngoVr9uMTVoyJN1e6baz5zq699H",
  "key42": "4QLB4coJJTt42Ad8Ah3Bjj5VDTQD9dRnju5LAjVfHg8uUhFXUhU2oo3Vt362Z8yytQj7DKstNnE9k3DM2h2QvoAr",
  "key43": "2JSEdnToGerSRQ6SKqJ5Sqwf9vZk9JXMhh3CRJvgAYmdcMoYfwqSGAMPiiwMhdsUm88GHnFwwfYd6u3yBq7pFMdY",
  "key44": "67Fv8F81h9bjVpfMEYrSSkyGJGWS62xvER8AWMjXFxeoosyXp4Q5rD4afjbpVbBQAEWWefS6Dd6RfkN6KdedQhxe"
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
