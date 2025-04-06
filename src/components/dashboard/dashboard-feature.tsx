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
    "2UdQrUe6HH2G7QfecanqztMjPYhhReEGUdHAziBrGCFbY9pmhStPFL5DuGWoKVFHFkr6PbrwNqRtf2ybQHVktdkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vgKcNZ3wMqDUX9cxxYAgq9qZKiP7xpAv8J8HxiVLyrJhLwAZDenTBsDrCefk11Qk79JUSTAutPompN6B6a5vjFT",
  "key1": "jbTGwKa6qNoCkUoa94Vr7KPSp7uuayPxcRKpMDLTxZsngGiVxnYSYU1oNYv74VtzCoAisn3YEp3RWwkD953XcyT",
  "key2": "54mF3PpuTtYET79BhEMuDqTMChFnMP11jF23GqDaSuGRcFRfUvLHkrk2JK5wjjcg6qbo79APbeNz9VrbihKmp9Ro",
  "key3": "4WA7FFgYwjg4s1RWvAitoWusotbmTXUiyifm2h2DZceu1oYyphsmMEgzZryp6oD5D8sYtZzDH8udxkWgV7o9eTfN",
  "key4": "54Jvd3v4wDeNreMAJf47ZUbhKpDy3WG1bxWUVzvUWs4Jf6gze9nr7Y4SfTa4zEVRUzjBSXMryUV2DbM591wp23SC",
  "key5": "417BY73U3ZeXNLkqrjvoA73MyLWnLBD73Xdz6i8KDAhAWvzTP5qL1k787hVSVKF3FJpCSndZEoCYWM3yehkpA62j",
  "key6": "2hDgzxtqRmqFGL8F9KM8VtN8hxxkNQWFuZcLvspuF1q4SKZXVzjbgxyQwSApnHSbyWMNybyzLUPa2FfyuNcitkpJ",
  "key7": "2AwsJoiU4HxWoLQaPt7ezVYW8xgDn2qGLytHW88RFQtEdmBNZGRaNF95pMTwDYvQkP4sXnMPMmLMtB2dohparuz7",
  "key8": "3sJEBmSo2XANFDGBS4TsGrqxAa5KNhLHixfXXyP66yc45M5eAbTZ3UfDUZKzNnaz2p8NkvWGZrTzNx6q572P5pQY",
  "key9": "2D6jykHbwEpRGaRyn9sZonBGBEXzMHmBWTFqgikUR3ei9ZAjowiTwdFJp16AUvVdch3Dk2pxiVK9bCThiERfpYUS",
  "key10": "3KEMNCdugVon1sAfZWSN7dKxAkoq1mFTgMDVk1CmaXcawMyujujGZyy8YQpn7qjGvngptRLVwozFS9Ac4Qs2Xj1p",
  "key11": "5wyFHhBHjcCsAhyRz1SR7vwqBAQzVSQTsKcegqCxxt9ZsLr2Xinxw6jCDnJoyb8KdPj38X17Fy87NfkJtsLLzFoz",
  "key12": "22AQtM8NrnaQoGxLAn5agyK7TRtNpkh8P84esUX9gccjaHJXFWdNdN3Nty2XcyZtaCSRJsrxAUfnHZkTuCwVBqYM",
  "key13": "5261hx8jhU9Q5EPHbc834YVwKSh1NTGP93fcnbjjANL2v8d3vgyxiaPUQa59sG4htsrX5a6vnPqnqw651pNzyeZD",
  "key14": "38FAXaecU5SMfRwneP5K3kaBWWFgtF3kcPA61We7eXrPTw7BLiY62U6vKvPMprFtSEGCZhZgJrj637sMBCMswgFJ",
  "key15": "5uChUr5NbtACmSgB7SAan8HN1hvHY8k75d1kBVS9BRwfrhCE1yn7UD9rMR5qy5fmxSY9D2UC9N1zLXNNvvNW7zv7",
  "key16": "o6qM1vEVvHbfAeUX9kHb8qa1Dx2iYNVXE4rJaB2DGiRL165zuQU7Fyb4xLrSGKitE2TSPL8oqrN6hA54DHDd3kc",
  "key17": "Zh8rHMKvRm3r2LQ3KVLSG6EM9fJfpejC3kaA7LSkc6Qp8MPcELLfBewZHtF37RosB1wFc6HrrcmCfxbUJwpAJu2",
  "key18": "4eGyofCzmQD7txm3QnF7FesPuBHyFif7LQ7Ts2oX8uLy7CRtrjDehGzQZrjharR5FEY5wcmyxNhaDdmq7sEzcaQH",
  "key19": "4k2qn691CkX7aV8APcwdVjDfBbmL47zpFf1zkF4EUsGKmjqVsaa2wxpjDDWbnGMaLvwDvQRHfneh27ZAegADGe3w",
  "key20": "3G5wLDBfdjer9m7K2vaFZN4F9tNd9gmxu3CBbv1QwN3EXdaYD8EE7qApxfPJQAjwHuYRsaq658o7z8Zke5KKjRhJ",
  "key21": "5FSmXQgZ3a5j8RtQ1rQNXxEHo1VUDJePYbPtYA4iMZW9nfEB3CghvipR7uDHsuZNojeVm1oExe1Nn4tdKpifhXRZ",
  "key22": "5wbLP1S7eA14bgVZkstoHgrT2m8jezhJPxEiJFympyeaBk1ypX8WAEXbf8cNpE1pWemB25dS4obEtU9a3PfHhkju",
  "key23": "3j915qc1uYjxPPxx9igJhYAbNVg1QpawFr6CnVVwP3b6uEpdB3cM1Vi5mKoRx34LiLAicnyZxyzKGoFTtTqzboYr",
  "key24": "5ZcwTG7z6WNeFqckNK6B3QHfWZfJRV6EzgQCc3z9nDzQSVLnpeeR9HZRHasHM8arv2QB3qnMMKyv23YNLfphN7ED",
  "key25": "3EGWHRiS3yYTZwUNPxet6DvYejVvspDKbkDKmAXjrZthDXTbWjTvTZkjiXJHf4AYDAPcx5yC2EakbS9QxWUe2egD",
  "key26": "2fiqMDRoNt8QW8XKRXRAqcAfbA7Z6bD6bjwaX5r1XxSYGGrWRE95asCtMyZGU6DmhmVv6QVcQGt78sBtHY7Qs1Ej",
  "key27": "3WcCpp3UkMj2c1f5YnP6CdGY5Cmt5exeidm3vCJAn1JTfesBJfFBYo6jf8u6R8xGFRnZRn9kgFy7Qp5N8wT3gQsQ",
  "key28": "5Ja3LAoayc9AXztQbSUo7rHT4p2WFR6k9wkJ6BBZXzNpi7Zy4sxhExpxFgHtTvpWqJiiGUZJ6wSiSo63ojjDMuA7",
  "key29": "534RST4U1cPg3wMVEuDhP94MX9q2t3NJtZeXs6oSYRqcHjFfSHZbrAEkGs2wWSrvHuzQPh8im3SeSJwmkRdQL43b",
  "key30": "3Y736zJSeA1zqyGVeiXR5b4cWz51cQA1tSs7n5hPwNavPVCrSLSTSXpJtNGXCaPFU8bbgJiuXgDUn1H6tnTmeoJJ",
  "key31": "2rqrSNdbHnZ4FTTYZmF6qjnHE5WJENPRR2q6NiDqcmMfMLmEkfuUiQTn2yD2Mwv4CXQc1NQRMBMNPU6nHsD2cidD",
  "key32": "5VXUhaRbnKWNwpqJrvWetgTVsCQ8Zv7ud8oGZSysCJ4YVt3GPwrr9tDZ8iNUK7ZhF7WJikaEmYEsfvXU9p2CMHeE",
  "key33": "3xXrVxqLRsD98XnzBVFupNJxXiJYMqhYgyvyYGDXUMmiBnoBy6JnLymEvCZQ6PH8Ptx2Xr86v8mkFcRyc2y3wL4p",
  "key34": "36AfCTDTVyJbmPHcBLCX67Lgdcod6g51G7KSVxwRQFc2fyGVfued4H7hBJX8MtkgCRAyg1qUke4KNsPWX4fPkvyP",
  "key35": "4EiTRaq4Fok8Sajq4D98urwa7huEVRNTEa6FafxPJmE3teLaVsxwf9u3Hmd3V7nRGN7aEhi3Qp9fKRdCaLYsEypg",
  "key36": "2SpF2AYirzDuKXEoKGHkms2GCfEeEuzQaZrnBM9V27TdLGPduwckcaSg1HGMUF3h8EatZc81s1jcArgR2utT6mu9",
  "key37": "3zS8eXeuWM93Ex2qHhbjrhHRdJxncfwKFM6YaG96TpkUKSKH5563A9K3f4ayzHY5LWb5HEeNGv7S1UHGdr6VMmNC",
  "key38": "5VvvHtU4SY8A4DW7837KwUpaYoEBtfDcM2UiSvBbfsLhuD5CrXfJxujbkeeUNxrmf3Qa2tjnJmXXRrAF3RJ68BY6",
  "key39": "2ue39GCcnL6oHG75j2kaE19NJdDPdM3rsrH1L1w3FcK1RLdYFd9payAMSLJgpoaucF2oLyx5Wautrzymq6VMHEbv",
  "key40": "4KBixFzg7tbKmQSrzp6x6u1TfGGc5NUJFBTHqZC8fByUba46U2ZoyYpFqDknBDKLcrsaBZqT5rbu4JxLn6CjeCiT",
  "key41": "2ueDJaQd4GmAq1Yk9qH2Xivmge2aC4PrNNjqgFzJNZXmobYihhbVXkHD1mpXFsfsjUnND4RNf3CmyyZU1W6yNk1g",
  "key42": "4FiJ6zqNp8sML3nGHifjcknZMGDMrhaqpsBqMqooibtctcf2vygWRiLUmhqszS8oMjKhgaWfk9HgTrqKgmoyEAeo",
  "key43": "4s5JHVz2n8wz3SCyiVb1gY1cvdA3WLTcqHKzeBdA6NspgjcBBhu3ML2NjKauSZyvrnKrPnfJmszygNRGm2AXDA6f",
  "key44": "Lkuh1RdiRbS7mUFPTNBL1wUnBwVr8VBHrBQaHufeitsu57YoYjc7FYJ2iJxRntY1tnTj2FEoKkZx1Rd594VRRMH",
  "key45": "65vKaS3hdUMbngdX2AdDmuxyrbdMEmaf9AxxtWwH9DGfwzxw9p8uxZ77f1uLZcozApyxv2S3hqcSztfLt9gpAbp1"
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
