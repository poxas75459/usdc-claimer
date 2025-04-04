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
    "2WH87H62VV9ZKAXGCtoAiAC6HbXh7Wf3YxW6Hi9YiZCYjGwVEZdV6HUGQqYCzNVXVyV6T4dyDyxu6Gip2D4sg3Am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61gaoVfYfdNxBSbzBvADgWtYy5ZSVfakuVZ9BEBBFW26dKJVgp2pvxDw91sUtNYNQqKWnQXDVhek1bTsdyST8EKF",
  "key1": "2utTuizJY2Z6G87xnZH2dpCWuMEByMji9HQXvKhLXeGxrU7hgJFM5vmyBE6XiTqj5nVVhF724FxNfwAsZdUF7JXM",
  "key2": "2LpGzVm2x9DUbgVR4fbm6BooBqtxjVLBtNjksthuJPSvXd1twwCm1fpbNMnFr3FjczuDNmk8gib2BL74k1uaHJK5",
  "key3": "cG9wiM6qo2tNHFH3CBYMK6rRuCtVUU5HWrVBnDAy1ciDHXMwDSzrMxB8LyZvxC2HChHiym3YR8cp29J5yoXWcnw",
  "key4": "32Ezy6YHBUbZ9CNUu1mo2pDg58yCQp8VYL2VSA5iHvvcW3pduVu4xH4u2iA6yNcGVo3UdLTLMtPPe1NAgDFwTDT8",
  "key5": "2RdsxK4PkikSZBAR7DjXoHxQAYTHmjspdd1sDsbhKB6GzAmEjRdk7MEzcqTRt9ieFpNESHq1mViqHLidukCZCpWe",
  "key6": "5ZZgL8KdB7jLJj1rKi8vm2JoqNMrcjGm1bAHrtNXHxoZpoLntE2wzefUCt5nNh45oLfvrTUXeBfyNagB6FXBE5Xo",
  "key7": "3FVdZUR9536XVCCripMAFc1mg2FepqwnLzAxZ5tJfgtoG24mhdtUd6EYfNtndVL6GtqHEHD9teAHCFtgZB2yX8kE",
  "key8": "5HXrJbvXAnFyrHhD3nj94i3mZicVV4uQAVfqckbezscYbVgXMtMFeHCy7MtW5ZfiRJeeNqDAVZsW66nYosi14hGK",
  "key9": "4jCDL2gnQmUddwAFLqkiGycYJzim1YLikjXTSsR2GCA94ZzdUatJw9heFX42wcn2YCnt92YUfVnB5uYDhbaDSvGx",
  "key10": "35U6oz5jzfr13GJyoPnKE1uGom14E2LsGd7jhVK2bfUySuqXXY8snmtFGwBPfAyhZgCNHivq7nmeABTFx4kuUQnH",
  "key11": "5bfud6EzUWeK1jH6wW4hqGUzScexpApKix3wRGaycptxzqU6ZKG511pnK1ejpej5nNgW8qqZhx3wkydAKeBDt9bG",
  "key12": "4EVRpozeCutUtGStmxfTCUN8BnQPu1HwM1YdhBuq4f4N84eAxZBY3L4Qpm65urbQG8AWc4sRhiSMt1b191jv2NCc",
  "key13": "2CFiu81JkT8UTBL4cyNU6T6u93cPu7kSLTynR7DqUe6i366wt48WykiX7GMqVZQCAbh9YXw7p3f62rLM77xmmFuC",
  "key14": "4evLQhHUnA3gRMbN8W436yn2va3xThskwvyEPxHFwKm6g9PXB3y4CcacEybzNARHCxL9r6d447BKZHWKznSaB2E7",
  "key15": "5pCSY7qCCWo8Ha9UQAJQ53E44k2f3kz8TeRqDGpKFrHvpvfZN4Q9yatYG7evHQUspQFsznYXp3wPBi2BsBwcXc8E",
  "key16": "2Fzwo1xeVgpzDGsncvtPmG4DrQN3w6pK1bXaxdFny5pa9A8oHJe9uFBX5ZdRCsDrwnMJeAiHP5vJXKBbihdr1mjc",
  "key17": "55ZE89FS53idZL6AMUtkhv4zpwp5LAjN9p8K6BLx9LwBgmW2aosVdgzXq7zEWJTqf7rh59CyHeVndBYqbumJJdbJ",
  "key18": "dS5UPrNbXWg8rsD5jvkSchSY9LrSy5iUDy69m98kg2fx1eyz7eM9Sif4Qf97JaVsPaeG9NsLDTv6rzXTBteFZke",
  "key19": "5iNJQMBzNvLZ973b1isUwLWDhQurWz9UWX76msew3u44nfjEdsX283v9TSbQ2UGTNYf4mwNF2i5PQgJuwfpPp1kq",
  "key20": "MPjmGhhuu5oeyNak58XtMqEZxKnwQBw8a4uKkr8w9UjFiU51Rc5VtSXLqYQMrfh5qYuKs4tz2iUfFXy9WedMmj1",
  "key21": "3hfaWMjPfsBm6Qe6XNzEG4na9hvSyUonPanFSPp7vZV9sFuaoNYy3a81c8ENkBuykQPWWniRNSKNM5MUNCMjkLJT",
  "key22": "2ZCyDK83ERQPvdbf9u9YJXWgmHViUFeLuu6YfWb22s6A66vD23KdbT4ab2SZwyHex2gUVG8aWqgmz2Bxyq3UkxaP",
  "key23": "4chFBv1XezQFR88uzpgndw79x4usV2uAVEdG8Z87tvwTZwq2CanJA1CcHeKg1rA5NEMBjYmyhjdNkNUXWyG1tNW",
  "key24": "2ZxL9JTDukFHU59UTNRPRFM2NTc44StombMBxott5wpXZkEfTfyzYZ2rHugUVQmqiquamiBFYDXVeRG7PDbfUjgz",
  "key25": "TwwfjiTG8uiZBP2Sh97QKyxH6NMgiCUcj4mBmKLLDYpQCra1JNgahgGZVptCKraciFEJRoohsrnwVYrNLntQkJN",
  "key26": "3VgbkiPxRSwqskUiRbAgUTDRwJ5ka1YVDuHK3H6UNGtgB3AcGArEBheyzTb3vFJ6fj39qPik2ajKh2H5C6VsK6eb",
  "key27": "obA13r5siLWbCyPrBguzhUvDHUazcbXRzLrgtUqn8p6hRfHfGB3tydytDRrPBJz8DWMnSaWifuL5fBY2zUoM1yi",
  "key28": "TGeoT2M8NfxAo4wia7i3PxNav7FZ4zzWVoawwMvo6a2rwAvFWtHGboC21KxeEgouQMYrL43fP8ANzpe7s48ixFU",
  "key29": "2autmUBWr3SFnqakpUxTVjbSgmGr5KCEYqYSoicu3PFUCtpocxc4UebWEY7XJFE4FYW15Q2HanCzKSKwXyCa9NKz",
  "key30": "2ZG75CSL9B3PsgoLfm5JuPwLHcB1xYNLyMrZBbntajAMii3JZqyvaKjtJKvKViS8aSZqpckbhyQtxtKE7GLi88o6"
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
