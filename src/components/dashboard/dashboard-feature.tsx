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
    "5rphirGmUfUe8tsRwQzgMXygdLgjELxTwqyj1tKiFW5qxTFzSgy9XrXrbTBu2Jw19DuQzisnMY5HBsxTWonWfLbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aiM9bbs26EAD2sJyhw5fpAhk2FVj2MgVW92oiGfkHc8Fqb7E28v1K3c5xAHwiSTANP5jNXTz6yVyypE4D6JuRhW",
  "key1": "uDtyXFB8kzY6FpTVTfAEwtcVmcMEeJ5rBdG5ndKonixfcVmzCpXKcue87nPoJjd3mfLRmGy1nqGkQ82w1rz1z87",
  "key2": "4bq4HnQ4pgRSa1SX2TSkvG5hZWNwM8PC3fMsipjHc1ndSK6Go7wKPyxzmbu1NiKm5hBHxfLQGsUjj19kWzN1xUri",
  "key3": "58Ymk9oknZYKj4dkzgftxe49VRHpNSTr9V2K6Tir9HnXD5zP1gk9kM7687X9KwrAMWaEDZJQGojqyVY1z1VErGrE",
  "key4": "4in4fdYd8y4LVq5tY2Ds9ZV7jntRu8XjzUmp96eWT3UaiWUgkfne2Mx7Jz3N6QZb6L9V3VW2ji3FNaMk3wimhtfC",
  "key5": "231aC4p2oX1vwWLSjRCkBRdD45QEkKtGxc5RxLyeNVAKQeUiEyfGdWbvE6m2sU9xyvcm3XfBGwdop5A8UX5EvT6o",
  "key6": "2Qv6UeJTLUbXaEyTBUiNW71VvzLvPj8VvPthkVJEEDBX4bBx8fHxL7vPJwULs1n5WNHA62b1Yu9qX4SGnb2DpfBb",
  "key7": "5kdF9phMaob9Q86MEF5MLnhXUat8VHrCi42geeUiY8uRr3mLd2c6GYXwyQphoQfKjQU6oNitFvL2JJwssE7DFCk7",
  "key8": "29cyg9RFFoxa5Q8TWYhW3TSDMgJsrg3uN3BMJqb2GsG5kAhekprGtD2o67VTH4Cc14Dg4Ln9oFgbU1RR1ePcVjUv",
  "key9": "26vvTJmFNHS1MgJfdTEyEckuA6rjHKopBUfzfxxrMQF8d9JuoX5G2fuQxrpNP1C5zNJDCn4FNNvFHtPKgYZ4FZFD",
  "key10": "3SAhzwtqrnSgZeTor6Xts9iGHDvzLxrnrrQD3QnGUp6yQhnAvun4baAo7qSemu4nikPD2ZpWWdmm8CPL5StkNsGK",
  "key11": "qxeW35TBtxBwUSZBC53K2dhkoYGfiUtWjxPM5jez1vvoqkfeemottTCuESD9NWLue1NyBCc1aaHhzsSBF8vpe9g",
  "key12": "3FsoiMvzeacvzkPeTbewLrh1RXUcz9re2NvfEmwpWYfD2C93gPLGypYNWkNkXj59QuomVLWgK8aXfGvaEe2i5WgK",
  "key13": "4CrJsohqusGfUEWWmKro7zhLWLp4orv98xD12w48GkU1eLXo2jYc5c8GX1Z8wUQXBnUdx46zvRdzGLEph7M87UNp",
  "key14": "3TDgRLsq2tTv1qUEVtMneCdeLU2aqQLSoxUNM1PvhATQ4TsHn8CrPE1maxLnb7ejGMeffZ4Dd2h4xzp5Quz5CtD7",
  "key15": "5eESgE3gCUDwLXddT4WgGhaF3jCVsJAwtwpVdX44a763tmqCHx6dN8vbjKcgQviUU65fEmcYsqSMojckz425yLfr",
  "key16": "5cwMzcFQ2WivfXkuwzyadDy2erFFZVU3XzwJpFGtgJEoBwnrH99TnJxbrWSrBM8fABL4GbX4yEAWiakL7oiwhuQD",
  "key17": "4QR5V3VA3yPsma2yBNjC2fnVF2qR6yfu4CsiE2uUvLALfBz1C6s4BViLqs5qs6R7QrUAQVnipJ9KEkLQqgq7ugF9",
  "key18": "52TnQ8iyPapAbYDGtWAjgY4s8RRbi1f1xiE5uSHzcRBUtrd69Rv741VpgayG9vz32wXmKC5y4Mszrnoa5TdQSMjY",
  "key19": "3mmYvuckpQay6aozgep11AejTe3GAnmRrTDJztKZL3C6vBDyp3xaTkgBpKjPmrJfC1ExW6TywrBP11L5DhSS1r8D",
  "key20": "2Jbd24sUFiBrHKufxioiGLkBJysXbgSBbDQhwhXHDyYD5PeJvLTKZTWgj6W2ZaQNLtejcRGzmXp3y7iuqSogi7Ef",
  "key21": "2BnYgzgTWtg6gKxEmVu7HZRoc9Us9rRYgEsTfH58JfbbExyxrqGpzKqCcE1arb7kDej3xPxDFHKPEk78AmNrW2K9",
  "key22": "4mhMgBNojX6Z9udT4pvHVdNNsf26Gz8XyZcoqXBV7jeAJhyky7M64enVMWmwbZbEwwubqMVUGE1NAsuTXp3gPpth",
  "key23": "zq3qCgWKQW3Ve7GMNJA2oDUFyNXDUJscBWxkR6sDF6G7RskQJ8W7LAQWFKF1wvDPZ7XRBrRxyGKJQHNzjnaqZtM",
  "key24": "3M4akYcnL5DPJCpZJFUzBuzzzXZ8bEW12gYKmgD5Bramb1ftSRob6twafbZgLiEdTXcNLQSciBpovK1EF5ZrQq7",
  "key25": "2JwHePBFv2cgf9FKHuHmp537Y5jGaiQphxAuvmMbNsAobB9UUHDiJn2qmHj6PRkjNXUWzxxqgcZ5ekDzmmXqnVpc",
  "key26": "5ZAwB5eziKSETZJiL7uTXiDk7XQqHKVmKH9HoHesygXG9ywN95VtApjrMTSSHeMBtCqQbafWTaCAb14y6ERJgwG6",
  "key27": "63czbcVUvwucjw7Rd5hXqnh3irG975YpcdrLtsrKSU1jYFLcTYW55FPbCbVxW8m8CgSfKm5aY91qsBofeU4yMWWt",
  "key28": "Yas3WzA5xkhVGNUrS6dmiBHWRzL5VricqxEDQqnaSAa2bgJUujRTqnRoW2rqotZNCSeX3GYpSzUhzg9NpNuZqkm",
  "key29": "5wGgiwaATuSEyzTyGG9EDf8wzY42PYC5Ch7Fp6FLNSqQcer7of5CRaz7r1KS6TfZoiaYYvfymNz7Ho3Lo3g9KUq8",
  "key30": "22UDyewKgNuFhDpD8Wf93x3MYniCDSKLrnH81siUG8buDMF9zxK8D9YmRBdGg5fD5ivknaukLfAiC7q1Cqku2tDL",
  "key31": "4ScwLr2FyrgcZ832Tkgb7F7315cDHCEC3LNEDVvZuBiyFs2tLmPR1B3FP35HNihXksCyGdUFiGuk7UiXEaFKLLDo",
  "key32": "2uwHc8TfTuUYsPu5Sg9HySL1L8Ney5KRMqCfjqdHShwqk3tno9joQHnTZFMtjmuzzsVe4AP36hVmSbr71mWchQWE",
  "key33": "43vGdfUpCdtDQV4y1iNbuWtjBigw67mUucmxo1VNopuz3xqF46kaC3k49wQWTkEPxzuGVVrZSNgsp8d9cTFF8Y31",
  "key34": "3dqTzvCFz3NGKvqjrDfLN27WdJq2pVeBdfYoieRaiFzPot9YCZ3P8VFGjqBsyjEQpEb4Q7d3ybAkfQgErvYqvAnG",
  "key35": "4ixYEfXdnfuHBytVsxvVgfRu3EJ5xrdF8bRtbxjLcs5CEZrbhcp9UAwibaAeKEomKQTf1maaFwtrzrADanqfGo9E",
  "key36": "weP6qLh3EqJwA4DiC1bMXvQWauRSm9bDpP6HM5pkJjwpKSNUP5tstSMGWEg6P2EzBdixh4Qj3yNVcoPGvqKmZH9",
  "key37": "4FQNPvoYP6yLdCj1bhjQeuVdH3GqFfjiQngQQAqS41LUWwcMG3dq8srXPfyA6APyG5FvkJkKceBPKXtFR4qLbV9f"
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
