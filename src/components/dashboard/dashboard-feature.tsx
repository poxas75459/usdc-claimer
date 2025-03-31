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
    "54R2SE8tV8K27zCWDXhmuPdR4ckn7KTdf74LobJvwi9F5JASNqXLrccQtoRF3wpS4FY73sHtw2MKdnJTppjDz5gE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ToZrqpc27XLdLio9monzjruxFPk1vrLG8fiFaBcYnWxzmw5db4cVWK3GebgoxrEQj4s82KXrZifCZ8onAQWemKH",
  "key1": "62Wdg1dUTA2J9QzBRVGpz6raE7vMdFCRoiRo7Rv7Pv85DEoKxcL2H1EtF7z9gdskXQ6k264vCT2LdPeH1daa4Gvk",
  "key2": "2M61JwrnsPzg8LNcVzvSPiruR55KtxoqzHzwE4hxpCcCSDo7QVCdEfJLZ4vEiHm6etjm9nkASWftfPC3MNsVrScf",
  "key3": "671wpYufFENAr3CjPkPP3cChWDGVeucwDsHsPVR947jYzgoAhZEKZ3eYnSGQm5t4qGrapH6uswrdtSrzKTQwB4tk",
  "key4": "3WjvCmwPLP3frtcuTXtGznrrqrW7Fz5hGLcZTKKLHSgQQqF66zh6gP7CP8kZEzHXX31FbjL7Lkhhsppg4wVEsxLr",
  "key5": "4gRGAvn2fQUgZ7cXWnVAa5Tpz9iaFfY4d3LkTMVqeJEmEWS5vftQeYUBgdx9BZqcMkyaYWBGt1SVFqSXwRoWEw4Y",
  "key6": "5vCAD4soSWYZT3xzrwqvLXZR8RqV6rj1d9FM4gBbHUrKUjCFuzenHfbCQmW8Qz62dBFeb9cUXFhGoB4yHLEWE6So",
  "key7": "3kmeSwsFLBq1PmxtmLerA7pM4kQh3ut2tDhy3X2MpFiG4xiFtASXfCBLY3HiAuNY2h214doC5Kk7UQwc5QTC71YN",
  "key8": "2kFBBAwPkvv8ghNbQq2UEhNKzFSCYdFSNLu3gFfq4g1ErrXH3T2kcjfQJmFJ7t69sVbVGGUvzkgP9MNhEFRm96hM",
  "key9": "4wNog5YgP9QNCuZ6YUwRxscH9DANArxrP83gHp1kzNorKV1tPX6BoaCpkzLAmRmBMhDELBSiiqaSoN3rerAmTMBD",
  "key10": "3H1ZueSixhvzyNvgTx6dJFYP43pKyfW8yC9rSH4fP8mW56XjxVEVcb1HvaW1KB36uumfFt5GUzJPUt94neXvb6TR",
  "key11": "59oKWCSHQ7dtHDkTNGKvXPPUhiW8Wr45tjF75oygFajQHfPsUwJjcW7nwsKih8bsiJnnuJRHJJyhZJ4JU2Rfrua9",
  "key12": "3Hcf1jxQWpeMwW3vLLZuRNz7Ww2sYjgDCgNvqsWMS5YqP6BJxm8LJWvKVWDwCcm6weND8Dr56w1vrMkSTa7u9J8M",
  "key13": "28CkE5t7CyrTtxfNwPyyKnSVw8Yym2QcN52pVSvQKxUFpJmHWMewAtLp7cEsZWYWFL9LcA8p5kb4vqGRjNQdDXrT",
  "key14": "5wcqeV7pzEDCFuRVFjMpEH51NTXt7o5uW4kAfKNzAHgvpBHMhsRFQL95XKbhHP2BoqpgDaB1LSnEb3Syp78tiQ66",
  "key15": "F8X3JbLz41Yt37BBQ4zxQF7SV7NuJ68fUVkrTaz8ZLWR8Ug4PTXAF2cR54DbNDC1vrdVETzJF1WKSfmPaHCS8a6",
  "key16": "4yBN2spzmL99WxQKP4ypdFBtHcXjxUyC6btUT74he13rxETjduDD9Nh5t2JUMZwt2HnSPSXzN81U6zjMSBJfgh2V",
  "key17": "3kYdfbzcuu7YDJChihTTZECbPHGXhBLqFJ3d7ZQfSm8FZQPHMsATvNxJXrTernE6RqMcJB1hQXGazJrQBRKtY239",
  "key18": "7v8SwpNkU749aNoSzXpW1Zt5z5w2QerH7dycJx7WouiYMw8RAHzEPqJLEEGEqDULPbNtnkZXLT22wiPs8wAuTu4",
  "key19": "wudUNxB9nkhShhXBn7QnzXzqDF1op2tYP2QUQ5ZsZhCmRwKbjEmg9KTxahnCKE3hrg15jv7fZS7coWs386X31kx",
  "key20": "54FQq7k2BzWL13T8mkN9wCv9TVVSceTwjmi2Pg71oM1wQujaetYEVXqj7g8VGm1WJUoov1BE4sRoXzEmx6jiYHb1",
  "key21": "4P3fX9ZqWQrfwsJyRuzsu3tFFiGgwgJ3nqxqHRRcGJz47XGvMXm8TyjmXa2CUrmhm4bQTML6DL1p9YoqiVubPggw",
  "key22": "ySY6AvTXjT8cTZzLNWRprVtHygfTL3QQ7EYkCcmZVmTJygUQxS9ExrJGHEgdPCM67QuPgZL4D2etW5uWHWAq4GE",
  "key23": "2Jr2Etito1gXmCPym75eTxzxzv9Ukxkz65dNwb9Mk55azn9saVRpbPzzyEHeJ3rrWza9GPy94wJTysdNoBLAC2Zh",
  "key24": "4yCBKdSHskZfWub4DEa1F2ZbHdmrZT5UmVM5Y3PD286ExLAzv48AFaVs6YzTVx94EZGB3TjtgdbebfaEXZsZoaMZ",
  "key25": "5xq15M4f38kkcSJpMb141ZLMhf2AzoRzUCG4sCZjvUp3qJHHJwN4uMyDk75dau7FkzsTSgMfDAy3rWR9oau2nZFj",
  "key26": "5GAy4Rfm63BR1MvgVEUNF7EamSFxWCKQiTWsd8MDWHjvVZ3FsLWtAeZUmQWr4NWB3qCA5oPfgnbomJtH6SaGXmK9",
  "key27": "3bitvonh1X5YG7LZf4T947UFnuU948zhoNMyx1t9CUweTNZc51B1N96EtJZiwpeCfx7xBEQCtbVPZscTdxNUztNw",
  "key28": "2U6msPMUk2SNyUXH2V5Wnric899BfFmXAneTAVMkpMbKwtYbSMxABGpzx3xyeTpZjX3aG2WB2QcecNoU5m7fMhDP",
  "key29": "4T1MuBJCimHYTrtycGmsczSu9HvbuSSm1tYbswC5ZEgSugQWCdVq3JsJ26L17DHZv95WAD28voShd4MyMu9fWDKP",
  "key30": "3dkt4qxy58HK8zwUoHVMbHFcnoHHVGzvnC4WG8y8RRJZ6wxVYpoeVVVbgmUHBYVLbED8U3pcF67SEtPx4SGttttW",
  "key31": "2bKUYtohU4t2oe5exBP1E5EsWYWrhPRAknm6gYQ1AautfTspWTAamwZ3TFwLL1nfrq9UPFAGZeqjgjGEGoiZhmTE",
  "key32": "5C9eNsM7nsdeMntFytL9541gZU9sUeiUXybXN1Qy32Fb3bKPDmWCDt4oGeWAo1heM5bKXzdmdGWkjLJhES4tGtCZ",
  "key33": "vUUnoWmca2YrXu4SW5cXoeHnFzhJsFi8rg1t2r7J3tCk9MVCDe8x3sMqK64s5XSS8CBh4Ms6FYypJ7hiaXfQmtL",
  "key34": "4r6DrfhPdUMbkbmSdw5dnqn4sbmK9kyviJKQKE9UNpXcy9hKBc4PbMB5yeouPcVEXZU8TmpXoMnqxkfANqPbXEBe",
  "key35": "5z8gMu1NTEZNuby1PD7kQmkVudr7gdambot2jbX1nvmA9NaJz3vih1ocjDMPwbf58fJQeajoiCws4ZxRRbkvdZXb",
  "key36": "2Ys1LstyZu5mCpt93E8yJLnedhup3WUeKS2dmPXujrd3EM3myqbZD7CjrQmfNHGCtx4RJNAK679nyy5y2Wav2J2j",
  "key37": "42xSZXxkhn62PqxtR3ra1PbWqSHPdLncBMNiwK33PyAuAPG4BWMmwsPvZcQ8FBgKMmGdyuChjo3upZCcML2hYfZm",
  "key38": "3WPzroMrFYzGbnpcFFzh4okJt7n2ZTdTfxbSeSAcDA4DoKsFgZ3UXEXQMD8EYb3x7qHnfc9EkX8dGqinvKb8hswv",
  "key39": "3PyZdanN9b9kKBkgwirCc7EDMxCBbvEqFDAj5Njzy7Xz9rQ9gBuxvNiCVMPCFStM46ckdj33d1F4ifyNfrRWXLXG",
  "key40": "4kkdJLnryhe3c4qHSrmNDvaBVCjm87qHN3vteULR4gSAfA3RDrm9svAMEqaRDohSH5AXKVKfVAS3BXEoscJMVwMa",
  "key41": "4eLs7XCTkedn1XVagFPxjMondzvxCWfQ3kSAjv1fonSHbaTJsiwmXBXQyu44ogBMoRoTsBMKiHEc96TkFace2yvP",
  "key42": "DB9wDNkBcdtoSCsYzxpmYXUoWqLo68Zz3ostRLSof6SaAJ4onMfaSXTau9GnBiJ5V7spaPLkhbagLiQ16d2XyrH",
  "key43": "3RZsTDsAXesndoZi3iTiJCoLD7mt6x2TMRoLb8sq1rJ6ADNV6FJtomGQcx65DGWqQ8QriaM2nN6UtnBUhYyk5edQ",
  "key44": "2XMZbFtkujqacBV25JbHt1tBAqageesFurHgGytUrEV92cWvfgj7AU56DotQ5UuDDwQJKJSRoW4kCEBbmLSdeqrB",
  "key45": "23C9T4zUZK3cyY2bi1VSaMPpAT96emgYyAteoACQAjJ7TSgH8CvfDgwWEVz2XbxyNCPTQry3yzPxu4cXy9TmhtF6",
  "key46": "5nAhsMj8KGLLtac9eo29qHpUajWre4BKSbC5v6PsUGrYA4WmKi8TEM1KeShFyXKvUALHFuLTC71xUHDPxTAz2XPp",
  "key47": "62oqsnpuL57owrfgWRuyWdcfiLSZwCWdfsxfqC4NnW2xBbqMzWoNDTi7YDtuTiM6HysfYaUHR2ynuCLwoHseJbMe",
  "key48": "4pamqMuDAUvE91KTJ5UM8o8YCbQpK2a57QJ3Y2g9EikWXW71bz5FhCdwCsgUthTV6Q33KeYyiuoq9BA4QdHHVbB",
  "key49": "4E3KhcY2jzisAdwxJS4vyrroosu9nhuRiGEQyPZBrZuSDV5JNY5ia6EZ9ZHW91eZdX9DksnFVmKUE2h9XXQzZsJ"
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
