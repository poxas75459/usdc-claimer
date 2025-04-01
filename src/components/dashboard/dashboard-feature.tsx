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
    "34RQp7Qjnjuj6R48vdZ2YucQUoe1uTmZTqbG8zXDoquLCHF6dt1mtntdiSQxPgdSw7SxcK8GpzNDopQ2JfYX6NTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26gkNffMbh3pieKfxGn21uzZyCyyh5SE2zzWbZWQ453BTrKnaXan7tZP934x9Kgi865FeLZAAPr7rYBoeDwd65rF",
  "key1": "4werjyhgJv5X18FFdniMr7YEwDmFxUBJLj2uRsH77DEsTGFJREA2jFCv7obWaGrbtme1eT5ni2W34CVgud8f7YCf",
  "key2": "CWRmvNuwPtgg7hthhvMTsZRUThN2qgUMToKYcXFBg18sgESkDczVau92ofmSGZgBSMUACYLsWXD2WGx9HA84GZU",
  "key3": "37KqKWGb3geUmAkpZW9YzbdZUhnrsdrGPypYE9hpKERPFXDTTZn773J33TEdgZYorYjk5HcAHbnNVgtbNuaHh55R",
  "key4": "24721boBdetVYX9oVU5a5CPXR2EUXfkqw2wSQrwuUh5qDwdHWCBrkyS57W8jXr2zaq4dMVhoeXH137cVcDFR7C8p",
  "key5": "2Fs3iPEK1Cnpb5V32JKk5nvLbTQU9nH3vogrNdDG2sHKQwwTPntUbJFdd1qej5s1fwML7GVpzCJAZjzxysZoYpHX",
  "key6": "67H8Pti9u8K54EnH2252UcpfNSvuNpvoBwx5SWeAw91kVqwvXonYZK3GC374Zgdrw8Tj3mjMNnUCiKKHzRSnxVLZ",
  "key7": "4gro9Sa6qLxdbwFgFqfWFsLnHi9oyFjNsQRsnckow17E37StFrTYjJYBgzkVC2VAYqoci8oudjGXsg1moDRZdvq1",
  "key8": "M2eCxcg7xv9PFC94sVGxM6ykvUAGbuzk5EkHH1vFsYkFsw5gzEd2HbziC9ydKKAuHLKtFvA6EQvfy6tUcg1NhAj",
  "key9": "57wGv7BUzx2Lpkn46hxKVsUNnbLJtTvvjYErFdTyqFvQMJm4QhivDaoQcFGa9JBjkBsdW42kLSgceBxWr68UbjNs",
  "key10": "3ZAk3ZvPUCovWGJWz3j4R7s6KtWoAoj3JhGjdcZQcYLeGDdHqpufPxJ58DpxoadXjM5ozsvqU2t6g2JXDQM7arfJ",
  "key11": "r1NwuWJn37RoKThDXA4W7ttFz9YAwp9kYLzteP1SSimudWe2TJtaj8kRGijCttnL5m3QkUUQZMNS6s44oWCMQez",
  "key12": "3XeX5AWcZ5MAoqseTnqUcixG3Wk86cEVR5wJM8YavAjYt8SGHMigCaavGb2e7TKmNyD3UpEaqsYouW9aR8eWpxJP",
  "key13": "4vmy76dpVZ9xX8jk6rUGEC8Nj8whfvxvzoRyninvDoqswumWhUdZMcxgbLZX8RrEs9grzucuc5fVPhhgsrNuTMGo",
  "key14": "2UodDACp95nPLmruFUqhE6ZA2vrgzuPn8x3HuXPx2TUrKyhXaM52sJqmaMLxGr7c9ZYEv7QKKXzLchVdjZfPZw4Z",
  "key15": "HDghHaNtVqQ6sez47GV1X9CZzZyd9cv6h3t768Jsk4X12yor47dTvN4yqQSbD54Qsd2Twx36R1JmGZDPoNLzFs1",
  "key16": "5mQxkrsTL3EaNCgPwR8so6YdgNvauqbFQGZfFP2B2VRcn9M9CNdbNUpj7mHfW1RbSWUjje1zZS52r5K2DMJh8gxh",
  "key17": "2vRM5rZnw9vbfEEssbPBKgBRrEvMtdqqCYy5AqNvrH8ynUzT54KSzRtusXL1svAGmTND2o5QZmEF5LrU1kNxnkR7",
  "key18": "5URKJsSBzPdFZvR6wzgwgSJiLfbPMNA9T7Vqx2BwDJi6Rf5ifvTBMsFCe3Jmm8gNLuAjkxT2TYeR8vtsm3oG94hv",
  "key19": "376nywRZqu9ZVa8wM3xFwF3AjdSfYQWzDztm89TDP3XSuoMdvgK65zoSsrupe7EQv3whZUUMYUVM5Wi4ri1Q6ot2",
  "key20": "39by3RB36vVazRSg6Q71TxCsV31YLqpCXRHP9yAshAfNihxW8mhbdDwofGN9PBjP2p99k746FGJEqkqq3wF36zGq",
  "key21": "CLxNjjMdr1HzugU4iZm54txHzmUh7AXDuDjhAog8PASEMDH8aHKPkrnTBKP4gBS6mJsToWmFACg2P76cEjmXzZv",
  "key22": "5BJGNtXX1vnN9owsDNB3wkf8RLJ3SKsELMTmjMBBY4vUTU2o7yUua62jbEhKPQy6joZxVXogAP5T64CBoALxyE1D",
  "key23": "2x3hovTCPdLrmeyftX4jTx3VsS3RbVKwF2WKoEMU3PEPJrHWtpxnrfG4uHk79uv1g4TuuyzraVZNGLjCzbLNkXAu",
  "key24": "2mwTGD1Btsbpog4vxPyDQchbkszx2prUXHVaB5KpcHLdpteZFGD9JHWysXWma6t3YqcgZMEpus2CKTv2M1Q6Ww6n",
  "key25": "261PSKVP9vZYfFJbYbaVvCiFfvYbrBBsFh4GDB5u8Vz6zCWn9dZAGKkMwxBopQaPcNQth3Awa82rrB3xCY53zmJ7",
  "key26": "XY26fvVhq4fgcX6yRqgUY1UvuB1sxEGKCwpZbWpjEK3pmXhPxMfBLvM3hB91EZZv21kCaPRgXDoKHqd6ZNDYRQZ",
  "key27": "4cHdaFNLCxd5ZRdd1ipMr9pSwhF3mG7yZwyPQDyKLZEEBHZojSmDoEHpMd8Hy7iv7nucvpqSTtMAztTAws7jLLYu",
  "key28": "65zTzxCLX9vzgoJxfW8DeE4SP6wbZKVHUC21499iS5LMVjW8439sHsyi8wR5ysRDMSRYV22ttSJC97xW1ZDaNGVW",
  "key29": "2W1kELyRsQJygChxQNq7wK1bk733sEb3SzRVC4bDLvVFqU3HeFhgsRRfHgjyTmvFuSBrMLwmS17K6E2qmumysCCd",
  "key30": "2oMDfSCSdMU6QcbT5M59CbFjbhRaRuQaFcyDabwJkX7NYauZyrNHEvcAtvrRCWsRvMKaQTvwFMSwYgpF4SdnQ36U",
  "key31": "nPiSdMWCsBqCMMsX9Ap6DQyDeCUDun4eggcpLvqg6184ZRb4Y9nRjdbFR6X6Mcq3GWt5oMvU3mkTHVPq6ifQTe1",
  "key32": "3M19bgb3pzkad1dSxyLPcc6PT7FoKJF1V85ZhbkGTJNzTMjbuvzeAQdL4DnHNaKoSkxKJB7ZxdjANJ8Gjo2Qsgug",
  "key33": "NyxRqzsBsAnnaLtxFmZTRM8YSMDFX8ogWmZHDqcYvTQg5VMC6gVzrfsR3fGheA5kRJMaRPkEAuxKo7npt9NiHHr",
  "key34": "3XkbHFdoiEtWnQCKcSnHPimiz1ma4b1yKBTQRSLbddiJ8VEix74q11emwLMAhpWAGfvuUnuwKZKoKF7CursLnpZB",
  "key35": "5Sz5Sh5j4Y5FvntnMuaMUnVXcsJjVZWUoSbZdfAyNrA5Mz63w764Hj9cpdaBpZqsGgccSYXdH6FQ7Cv9gKcjAWG"
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
