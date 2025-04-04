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
    "2X62dgxkBPRXYFJcxpSiwQ8pDsRFM8ziet7aMTqUSkPJjBqh8nANZNumdeuxJZg7mjakbygv1HvXp9fbs1wofiXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ifY6GUNo8j5pix9wJ73EmwVnQYB1Kz36cDuh25GYwEBqJHj2efVunouxDgF4v56HzM1VtGNoJ6tBXoHt4bDUf9Q",
  "key1": "2rWGW86EuusGsH4SjmKfAqixbdf1tMb1o514iSPAx2QDpDd4hyi8kvCgL2bPCT7NtK9nmaqBid6dLzTkVqgvKJWC",
  "key2": "37GbbJJLEhipiTjaS3nidfKDSFMQjhSNo7SJFhDq3ZDPST2Bm7ZGtH2YP5FbRMS34UgTrnmBNR8hFt6XGcHX6vVr",
  "key3": "33dpdfN8k7J55udjNXA4cQcD7BJZCrbHdnfhYCXqpyZrmL2Rx3qx73vPLvh1QvxsUrX67vKZJYvxZbWNoQZzaads",
  "key4": "5fructxL96cRS8uawRJ6GmdQRnjmR1yEWw1MHPrJqF7hb1SxwGJUQk9jgY2EbYK1pZJYxXgNW7ABhfTXnXeFhLTk",
  "key5": "3LUF5PKwjv4cnYp5WsUPC2YPumnbzQLLLBRGVJAsQVe9sHsH5rdXoYo8hEpBr6wLMTEiiky8CmTruWLyaMUPVHYk",
  "key6": "eK1e7w17nDRujKKtidSGNQ3bzh2P3UKYAAkUztinsUDA4F9QHcMfUR3duGQBTE8dcdDjkA6aNX1bnta1yW7Vd7Y",
  "key7": "42EeT9SwVwUQRTi3KeVYZ3tXypFWQdmnheMzxX3chgrNWjUhUstWbVxbpNhwgSd1qDGQX9Lnfe8JpL1g4u98isrt",
  "key8": "5Mgtoe6Vd34vxB21f8AMcHApjBcnC8xQwXcgHgBxqv7NGwXjPK2seJFsF4Bv4qohUanvqu3TpVsUAnpsKAgawGpZ",
  "key9": "2e1HCeq73C22xMiouG7GoQbbZkA84qebvcFKBmvhiX1Qpywa8TxXBYhfnBcNgE9cEdJj84jRqk1extNYJK7TJba5",
  "key10": "waMALmg1Q8KPd8UyjsBdozdVomjLKkBoa3UPnHcJagpcCcvXprqHSEyrk18ZTeEF1cpGVqFHhZHfDecE5SZUxgX",
  "key11": "2T2YTzgG3HUfP56GcpjXaeqpSUJnNML8EHXHTp6d2g1Dr8i6fH3mTGqZPcmvX4tL4ZzVCXrQjDEeh4ztJKBF8DZe",
  "key12": "2jXnbrtjDbQfajBmRrHKPiob4i4gm4mBZWkMVUVpccnf7YAiZtZtL7AZoJsehfKfoXqJpEQNaqkuzjdJ6Ys9F5AF",
  "key13": "3yLLLPcQWUV5d31AKG1MoHvsoug6KbmkJo617VVL5oN7CCQooVz3vzdmv36t5amXBv22ADEy2vnBCWCn2PRDWrM1",
  "key14": "5W4kiuxLWUUWQUaNuFR6MK7joaQy6YCp3YaSFdrQD4ZvTKeTDvGeehCmgrxf7qxQHPfgPK7sf5WjbYqR3BrtUTj",
  "key15": "3s9Po7vBi1P6oUXwYgRkDFjuXdKvfYyov49PH1MygrbSEppyaBMiGSxLT8ynP1E46L4YuH7teW7fFpWny8recffZ",
  "key16": "Y8eadozJRDnRWFozmXQVnnwManLuURHabq4NdKqXR2HyBhcVPKoqD28s2hRSWpTg6hWcjVQLLgFDjwaAc4prfxF",
  "key17": "2HBrRGWepCyjsczTC5EMx4owqKh5GVVw1zaQYWgDsvqKYSrmq1QFoBkCGfCHN9HVbL34my73txGu2XtrLMLi13LU",
  "key18": "5BJ4DzqPJgqwirE2yM6je4zkCGDxzNdRuTqjokB6ELRRAGHvkgewrxYc76VqFvEJvhyR8XTE2zqnX87nF4gSotUd",
  "key19": "2ok6BGusvCKP96gUa44jKXJNS3chjVWRNhPDjraU7xifNhAChJK1i77LcEbLEXMgJCPWtsCUxScNJB6sgLAUypq6",
  "key20": "5eF7yQhgrj82M7XMNrWfvFSPC44BtQoNGzr8cC44wuTt8Pb8YSogRUzz6nPCrEjhMXND6m2Z5L9axwdpPRsYhLYP",
  "key21": "JLdECXXW7TG76UTvgUd2wyUDFoBF9FK9FBH53faXDGLkUx3j2kuhEfDUAcWo8bP3HzChfg5amMDAkmeX9WykUyJ",
  "key22": "26HNvn3EzNd3MZCenqNSQa1GWABPRYzmeqztDsYwvUav2LCXAhAxUTWBmv8vPa9BgmxWydFsgv3WY2Q8r5B3eoq5",
  "key23": "Pn2PzaxbTPxGEKdf2aoWThBuWnCDd78raAD8sHn5C6LsEfF8RFna3WsURrzkz5Vk87im1NUxGWuifmhdwgDUuSA",
  "key24": "JqrztREkdWFZukHydJXTQPGMhMdQyRHuMWUEWjgHEWbS31VnSXGhrMa8LAHkaaV3uTCJyKs78GrTFxkFwRLmwGd",
  "key25": "54cW41kKy25ond29VH7L44XFeqtcoPyKU3dmtjRv1RRCsJU1ipkQpE5uX55NmGSnqgexMaNNGipjSxEYN7i9Q6bY",
  "key26": "gqKJSAgiKh1P248dX5umpucWpsCB6jzbBwmubJCkeAmwteo9BVodsxGzrs1UMXJNpKAH17DYpjPvBdj2ooMpDA1",
  "key27": "2RMi15zR8piX6vxzS6hEXFxMDm6UBWdGGaHhj5yDWfue3LEDw8px5HUZ1z5o6J9HFBxt7t95GURw5CEFrBHeW25J",
  "key28": "34Ne2U1Q6yddtWsaw2ejw8jc6EZgafBJNZ3eXUvWjuXFU3j19pzi6Lt1poEGFeRXDsNwVx8QYDBa7m6jLjrZAHKA",
  "key29": "4ZJWT9aDNDFM4m3tkxtgTEjvU3bTZFgWvKv9y1cia7GkS6GoUGDe7hY2y1n9bnzFo18QJ8zvwkHeqAXpTBe8qBPW",
  "key30": "5BxuLVGo27V4YyGYwadRoMLWM1FqyRSBQH4nC3C5iffdumyaVYZgNGH77yUpqBJjhHwWr96p3wfhe9jHZfinGER4",
  "key31": "3g1YhE3J32Acm7v31iT13hZ6r7vd7bfkXAP656R1jJxugoiztGJiDEwLEDkgXyhm9BEA4UNG7fTFrGDggae9hyG1",
  "key32": "2G3qjut5DCghZAYQXK1j3otucvKN5q42EK28EiUYWxNgYUn9apdewfBcEZCHjYotQDjVd12TUFq9GqVJXXbRcQhK",
  "key33": "4YgPNtNgdvnFrrEV892GdY6utwqsmiomyG5v3FeVF9CrDucTQHvjXfjWpyKLu6AwCzvXcn2UMyoFEQ2fPSNEbv2J",
  "key34": "51XCUR2BK1ozZKvotCG4mBFZfH6Gq1uvWGMW9GUxbR9aweTpTxKe8DD6jgv6ZyWR2UZdxLUBEGfDiCZEmMriM76T",
  "key35": "vS9ULQjWg1i4pUsiF9ZgUuvo9w8vKozvSQABgw8XjGG5a2ocRS9doGtMicakvZjmgGffFdpvPWZ7zfoj3SutUN2",
  "key36": "2AAr4xbikrNeGgA5KRFmBn5F2LxgWMKkKkU6SewXLr56SS5BfJrL6ox32C5CkRke5j7UxPafXNhBhgraEpyFZ2T9",
  "key37": "4CprA4QSuVUaC3osY5zZtm4jwF424LvBxTxynLYEJ8wXeqAxqgf3i6rev7rocGkKj8mAhcHvPfTtcLBMFTFja3iV",
  "key38": "275nXn9DVB2PFi7gLB6mPkuiKwYZayW7fokRWeUvon7rRDXuMAFrQUhqDszL1FZR3ULDpJqizuzZ3B3WuiDwm3Mj",
  "key39": "3f4hAPFFdVuL51EvknRYBdum5ACdQFJz588GbwzNmTmzXNcvrgULysqTeWBrrkSGzhPTZZJGpkT8rQ6GMwPJfTrV",
  "key40": "TfS47H3KzbxsVvbKizzdZbPjSEA1dc9SVejerKbgtz9MVcaypie6o6vSTdtcEH9NGUb7mhTEDerMjC9SFb9RfwJ",
  "key41": "4s8q9EpmnuooXeNxgb2EEG7STgj86ARDSSaztWnY5AH66bxK2vU515RdQEG4v3SXToxoAVoYuuKDmau9aHms4itb",
  "key42": "5kmbBbptRV3YRjeGWPcumwwdbxHefhVsvMAeE1e1ECvpUwem9yyGzC2t5agkD4EzUfkYF4iXmQxkb4hXPjDQkWSt",
  "key43": "3kp7Y1aqdgEhxuzZLqX2Ts6ATrxWPBAuJHri7DQkspiTBrhdCYdvbZswt38Reg3p89bbRYcKV9Rgr8V2S9twNqRG",
  "key44": "2f78RMW4jBeq7zeCJnHeuDPKGZqFiWTf3LuhHBoC5UPH3GBaVJHRN8vPB1qaxUJFCMQo64XkmrtUUEDeZnoD5GGi",
  "key45": "hU2HswyMUt4jzzDuqd8qDsuux4hTi7As1xMd9qiTJJQvghvdRMsfJoR4KwkZrcFTLvKtvKvF3EjKZ8rzVEYsbCh",
  "key46": "23WoxksbRZzwdGBaQrELguuWciBKfA1BZDpgmk4UBgZrYVsgLazoDSS7KgLJwdtkpPpbRb2HH7aJMJJ4zM3YsY95"
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
