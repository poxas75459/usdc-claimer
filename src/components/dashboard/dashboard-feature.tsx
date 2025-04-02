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
    "64TmKohzL68Dx3RqGemqBztMtizqDZMj2DczPRE3LxszXCZJQpMFQchh5DAB8rP3coF48kCpt32P6RpybHY4pDiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tfh2B8YQs3wkZeGftU2MDegqAtD1s5YaWtLJqgT3uMV5uZRmSTK85knzchWvdJuLHWN4uzQj1SHUY8wsgusBMvp",
  "key1": "3CRSvDu1L7uMwfnpQiKQe4bXEVme8vcgJB1dm1a5mfAyvp3cchw6cbjap6joGL1jX9K8X7CfgbeskaFKnk8JA4HZ",
  "key2": "2bLUt5TTEoYurmKybZ3oB7Z7pxkUYe6sb8PyP8rc6mFZEKrWzL47SugpsY3h7GnuHyyCc3dLJK8EPDhqKg89MLfL",
  "key3": "5Nend8ggKM2UC8DbtngWSuH1A1MsmvPkaqRvgLJw1EFcqja5QtegiCT4vVPjtoMpCGFmUZ3vmAPxboFcNnziUBix",
  "key4": "3pgjQJK4Hrem8VGA8ScozTmSLx5CSezT1YSTkk2op9VmjYEfVmqiZ1XntksdCEmo8WHExfZs3GRtJ8i8cFzjQxUM",
  "key5": "3iq2FxT4E1rhtwLTR31M56Hj6tSrh4TFpoJx217RFZG6YP94E3ZX3CPsf1eRvot91j4YiSpkqfiy1PGx6YSyuefS",
  "key6": "TNq5esDYCaGvF1Z3mm6s1CY2Yv2tmTC9hMWSMWzySmUsqLbkY3FyWXnKrDKBmtyWowCvTDsuHfy5a77EbjYadS1",
  "key7": "3NmMTSyuVeL6XK7426JNtDrcshT9TEGGQAHxR32ktGpoG8s8S4y2jaEro6q8HaE6iNtSAnoEdJBXLmc2y7MHtJ9R",
  "key8": "2QjKA2EfSFbA6izAncUQqiVVSRdQ3ciEq6cddBqNAPgeb63mB94x999WtPcSS7f9h6ESxypcAyWeB1C3tahPBdHF",
  "key9": "5F1f1WxyoarmcLZWxoDTJNPP5cS7ACnpLegPp1vtb75ezfvN4vFQnbDcpkfey8CKTsh7YwKf7LbGPS9kWA5bZgPw",
  "key10": "2MotvzU7TysbdncUZW57QBdKG7oBXrxSXo1Dk4zb3TWs1KS3jceFkQRvTWr6H2wCV2h7v3RAeiixhZ41ajJrZPPT",
  "key11": "4DbfWdLkWghc5aYGJktGUNNhkrihPaRRaPvqFGTahr5kDpsCkzjERQU7ew1xRQDib1BB7EvkxE2rUzryLjXqYZvu",
  "key12": "4fjQNiz1mekwSgJ83UMK71aQp2d9m4F6BZR489pAb6debdDNfcyj5fD2vya9TUPUi5disTrtKum4n9fzq9GgmTVE",
  "key13": "5tC1fLyxNWUkgBLiUw1cJ1KTePFdMu6q52ow5K74TXUw7pr1hb3PrB2eX7fcFaczwRX7bBwsPZ8qWJztjDGvcyT6",
  "key14": "5cVXAFeJ4tuQdkLhniC2dtFHguxMjZENv2qE9JFcdbrXE6HZve2EiyUH88LVwhTRuzT9vCTSmHqQv588BMsH5qfj",
  "key15": "5SC4KFJYT4N2zx2F2vfy8HU3rXuCkdDKC79G5qS2nCfasAxVzEaLRgoTqw8LooSgYov4EAcsK5SBEjtdHyTFoVV",
  "key16": "3giBjdHeS6QNj9BV4NKFLSP1FiftDsCLRYC1JQkk51BzRC2ngNbpUFw9KFwQLcaRSUeHkUWZsYstV4DDySj8UvfH",
  "key17": "3xtpm8zjhA7JgRCPtFuUAFxKJTYU3H2RopkpdFGAyZjw5J6XcyDawLfMuCfLqahvBvPnpByD92Exh8a9oNsPynkC",
  "key18": "3ghUosTgHfsUi2pTZStVz1kfxKeMHeZEpxpoc2C8dTnZcoueEV5cbnwRbkLgBqNByrwxqnzPLsfvPqrcqCXyqdSu",
  "key19": "3JjaGSRMqSqnrakH1ufo22uTfGczxRGXNAKCquS8JVPnQ78g3G86zyYxfSi2N4ejhdxiU8n8oCgL1TZxg4HoXCvp",
  "key20": "63zsHtF4jwqP4twJnhpdMn326LeVrhDveKXTLaQSmq3aqsG4p4oJfQspeQ6DAbP4EWHmgdEGabWqCFAo63DcjpWM",
  "key21": "Xk5qpSSPHWV75VxgnwxJtkGh7xGTsQPjMtgqJVivM4gFdsovfybWZVSMBqTrunt9qugFKgqWFMoLTB122QKPrfT",
  "key22": "5uZSmUBMUgW34UQzWc89qdVc6cDV5htTHMbafb7YNEXs92yEtS8AZnxgJTGPgYWqa8jS5V52rwQUhQgTDcVXEEj6",
  "key23": "27D5cAu9Au53EVp2DMSVbTiTjKPwma3YSPcCn1eHbi8swK4dRd2JwQYirbptXx7pLMo6QrqcpVaD3UNuUxVgqmVJ",
  "key24": "3MkA7JXuyDrRpjwvcsDgST8LSE1ovxwLFCWeLajhiMv5Z2hqB6Rrv25dbvob7gKuS3iWAGBXGWVhgJ3vvSyihJGh",
  "key25": "AyG27jPfaPV3MtNDkqQSAcgfwfnZU1mMBpvGyu8tGUb3wW7tm4krC7eLA3qN7Hw89Wa8pB6gCyxJzwxyZffYyix",
  "key26": "5AciCphJqiVdrWEkKCTXukhzTx1eXTUwDZR7WsfHSarpkPJ1EK1zMhAEEQ1gy6gUsJocHxAEPNEgniVfEdZbgG2n",
  "key27": "4gq6uwiq7pJAp6HWJ6F3edEsbAwDu82UdZBPgc3tZeVc7hwN3opogy1DL2ijtVaCewSD7H2D9bSYy6yoeVcyjpDD",
  "key28": "31uuyZPanRRdnuMAXuHMzoMoZaeEh7eapzftb16dVyCN9FzBpwQHxgoWaJEcKXSFb3GiQtMFZ4kpRb8JccgMFVPM",
  "key29": "51MVyMfSk7ypfZimDhqQZvP8KtRHpeCS6Gd3rfCUBbNbjh6GmbxMPabnwC3jyarL2r1otsdSK1qZe1Qrp95DbKoF",
  "key30": "5nfeB8eW7FjbxvxscaL6Rwa9RXmKky6GUX3PEKB3uAzg1M2nT8LpWgCSipuF1uRepBQrV9PYhW3TcaUymN65wKXv",
  "key31": "5jeDMsXkVedPnatW9LnC6RVQBnfcVseuy1ZrEL9V3LvUjRy9JikQjSssKKqwZ5vQYcACn4sCYQD7dDqNAbrWBgMM",
  "key32": "2pDmANRwgy8nKV2CNJ1htRReivdWpa5WveMc3jJEnvZHufqLMiVf7nmJGUi2vdJ1gQYPy1Tt45HU1GfH75YHJ35D",
  "key33": "3mikyRn4B5u98we2eaWSVjJUhSteJToTe6Ma9rVxVJqYpZ6teCXQNgRPnHRHPMzwoUqXs87BhoMbZ9Tn8QpKEnmt",
  "key34": "5CzDYuMhd5H7gSSUTJXWy5rhyWCoJTd12eX9QxoTg9bJWA3fhcZqWCqNkdppCAeJdY8wBMUwAkWfmW2QLHfA5WwV",
  "key35": "cCY1BMrxE7fzavpMKtzk1NCHsnHrS8kyyNYrUCaRFWwNQSHUHF1tV9VszbEFkFKfTQXBpPJwyn2B1sKbWKi7ktV",
  "key36": "4YKZrdHiqzbRWUT9d99XDE7ZCy1HCmCZkbSxbCptSPFnaCetwKWCA2tLESqFmBUpTaz9zU2mjSpmyFMzQKRFbSFx",
  "key37": "fvGm4aubpNcCqcZ4XhMmwU5Z12m3ahLFtWvniPv5Ag4Roi3svkVegUTTExt8UyHwxX9SA5dufN7AYnM22hFzrqc",
  "key38": "3pZczXfGfXbDzNQttKgMRjrSGyAo6JyofpvcT9GFhLvYsXtfcgP9SHUuLAfAnYkaQjB4ehsmiWpMvSYcuZRuRneW",
  "key39": "5SVUu6HW9QKengnVqTrRVbsmTD2fmJchyL4DK1QtrP4gbaK7UvKLw7j1xyC6eq6Uazv6g8GAUHPvQPm4r858XUKb",
  "key40": "3s4dLGg4uoeqVtr8Za5oRh7EoJVrq3sWk19iACmc4Ve3Gn2aYLLYJpWoFLrxPK6N4StHus3U3XXwN6rcHY6ongfc",
  "key41": "5uTv3TCFge32ZK6o7HmgSLbTdfxYaHXpvweKeeLubwwQ6nBcmQ7EaNnZc5utrf2xvoAxudAiTJJWbQ4ycpBq3SSu",
  "key42": "3iKxqRnL7Z5m55v6KjinXjyVZmfzcBZBjPfyuDqt3cHskEX8iV7q3KTJAp1rrzWRkzy8iUk3vzkjka6WmWbrcQNC",
  "key43": "4geWgoBw4DmLpm3s5xs5EizpCH6PN3EetqU4fdPuNY18GwiKkjRPkvcNLENpfWwMFRWz7m4hkUKAJk48xL4cWh9S"
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
