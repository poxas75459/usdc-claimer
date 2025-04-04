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
    "5M4fQrNdr4EuT3SX439icTCifYGKdfTGobfu4JL8LfcoZuoiPwpKFoUwNJQEZyPWj551Xgcdqi54C7Juxd4oY2bJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WDoM4rMsL1qaK584DPh9sjTjjSvsj9Y5qCLQd5yPn56Utm2MndJp2uRDuPwYV1Vx7m17wKt3Az6FAxHktLT13RF",
  "key1": "5KmfyHuyPty8PsKybhsS9uZiAs936GDH8XKAtgjBiYfEVfUu8aZRPQTr4TasVu6BVFGrt6NwbQRQt8XtvKFFwt5m",
  "key2": "5AXF3wocTj8K5m3kZDJmizqSs2vXFw8hi1wk8RDixNUqU6fqs8Tp4df6cRMuhZRASMi3UHPUSrpZd5z99P3qigFH",
  "key3": "WCcGYYXDyLom2aYczXGjscmmNCgpsYzb3V9JLkoweMjcg5xHH1nJnEDroWNGCj7AupNaZKbc2XrPy2LccB1nFDP",
  "key4": "VnHo7mGVsnThavaqjTFMfbCkkTCxhK3pbVJpZrvww8gD6SDBtmwQiqZSh4epW4KRNFzDvSZ84zgpbkwcF6UdL2U",
  "key5": "4skH2Mr1FWZhTYjSwV7k3gtAawYoeLmEkkJ2EcBUhjxKLXSZYnbSxtXt1s1YdsMYwwGfYoYz9xoPMbLcbfhpEP7i",
  "key6": "2cRtaAyDtVmQCWnMqKtS9vNXEGvUnTyBt4D3CmhbuhoHZ4EGzPneiJkTBmZLtkfyebsY6HfgRE6UQ44SZxqNvc81",
  "key7": "4UxRZTB2iaKE4tnWJLHnuFiZ8C9PTEwG8mEmUWzzJSXDSjrCLNiDyLW2kPAhKbWZYgjUtVTVh1278jHhCiUKdcq9",
  "key8": "58rNruhD8s6BmMp8gUQzZNnqoHUns5CxVJSkMhoAZm2LUcyjRLZ2Hgpj5QNA1a1i1qYmcbP99Rt7sYBj9Ti74qDa",
  "key9": "3a1vuG5kqYt9PQ7P4kQM3YVGnkrKCp6EoqMgiUjYiaDPSSPvn8mCzoG5JmFD1s36FFvcyz2HmSRbo6eXuMqqhhNd",
  "key10": "3peCqDF4yUUiWRcsfhk3JzCGDdBRVd5MKAzjNG39mLVeAZMWE1MbvQg4jZ3KRQKKv5xsMWoyjZD4wkgV1D4GQQBe",
  "key11": "64Mid1Er4Sk6nSUZZ8KQcqYKb51gpxzD2HPQkBXRzfRNZ2T2YcDun1rTqPupQrhvKLRnx8qH52qPgfvbu8iUboww",
  "key12": "2dUjWokGaeHjw7DBekV76ftfrHUnJW8hwacKHCWskTZw5EL7awL4fnVdNsf2Egakvntz9JQuu4kqvCy6gQHve9MS",
  "key13": "3Yo21fG8bBdUiWa1GVDBrswiC7nnyzv5uL7pdPaMb5wvcg4H57ot8jNzKtNWQBLceHVuSfnjJFg8UdMechfQZRZu",
  "key14": "31RDbYtJiYv9B9on2sJX2wH5YnT6LAQoAobLLqeL51jgbS4g8V1vK9AAMU66ApAGtXVqJE6xMzvRnmK9K8jvmGAT",
  "key15": "6Aq3cv2VwUjmjqjhDACsKUE3JEmvowDDQvMABFKsX8HtJdo7i17SDNH4N3ig5a6DroviZfBsNgD3jk4o6nX9RpR",
  "key16": "2Uky4HEEmrKFQLmvx64FDreGeZTCQFGMm1CW7MRYsuyStUcoHFm8yCjAhiEpCUorBF845CorgcEJpaGuusykEpLq",
  "key17": "4Ygz9LuvDFUPKhXs4vdZUVZnw3FBsHoKd9pCz4YgxFZfAQMfvHsfFuoedY8YxV2xJhLXtKezU1DJRmjLESNNuVeF",
  "key18": "5yPj5HtAyg1zWT6iJh7ZEqoHhyLfDsSQoVxER7SYeWhNEpfaimBgDeHN2M63TrTA6sFZMjuJPw8rMvgPjzuF37k4",
  "key19": "y4UHCB94qoKDQNrjnV9Er6CghYuzHaPRLYC2hjhv65A4B37CRJR9adJ2BnuWmw94wJ8WTzkxzikNurvVDfJLkfp",
  "key20": "YAEqcKutHVG4YVFEiXj9a6qhxmW69YnNHXQXkd8ivmmHpnrNG8BQ2nWZ3x36uvuoBm2yMh7ptrJCUvjFP1HxYPL",
  "key21": "5L6DU98t7jyjzcBx36GUpgTUxRRuPQiFf5JdC52XEaoUnWbXFav1TfTQJi9WWmWijBBNpgYyYeMDQ9gLoQWF8DNc",
  "key22": "5YiQQ9e9os8FcuXdaqiBu9C3pRRBYotmGp1LGGrN9eXxYHPxyBvWKnWSE6m7KmyWZknxV6TVqAhJPdPyFXEaVPXA",
  "key23": "HyEsiUtb7ruReRpCeqns86h7n1VYCdqYvHQQGw3Y2sosfh8nebC94yyD5o9QrcPizvp83NxPAdFdjDSWVVneFM7",
  "key24": "4YtoErpAjALTkpgjKfjjukcUrGeytM2XUBSqvjpEBQPGvkBAYjVf4tCdVqR65h1wndsFRtEtAWxBnpuY7Y5zw7RQ",
  "key25": "FXJbp9A4X31f4VPKekmxEBHZjVoLwjwetjnRFEuuN19bWZTtjMDQ26KtAtyF8gykCSiSLXvCATwt3TBy78mcnDV",
  "key26": "5Wy2cQwFffVygLphAVNNvKezt7ZdmxnwnrCzuG2a1UhtxhabmWLTi37QvNMvWm8dwr96q7XD3qdAk6xVHbTasPvw",
  "key27": "42V8zJr7p1sNsY3MewAubqFMLzbFwXdk7nchsSuNrV2fDYdkzg6yoRjkyA6YfqoFU26yUc4L953p38F1geigRtHw",
  "key28": "5gfZhnPYXsQpYcP9tdmv1LQgduHTKCWC9JrAv3cFJfvn7wXxTz4v9xtihnpNmAHDnuJ6sp42jEjsDJDeCuJhmNwT",
  "key29": "5TCm5udnpwECM6D7onzsUMN9Uk9peS74VDriDSM7RjYn8MV56cu46Kpy57wbsZ2Q77W1fnJadk3m697zF7CVwFoa",
  "key30": "yUWEVTLvpddRZh7vvWM1AQs8z5GQ75jjZiSc1etwQVxHiAbfSU6ALqdxX51aA15aCQLkmYrbauxu7jXkLvpv8dR",
  "key31": "2VRDn46dc6kZhdfpaiFL1UXwxTKkghjE5FoJ2xJ9xoPsGL1Nw1hnSytvCZbcooq1XY7sVsU5HQACug5K9auroYb6",
  "key32": "4p3PQDc3xeaaqGNLDxyPGEUwRjrZLbTKcvoFA4DFceCiKFnbXXcZHWycYectcA79B2y2b68HZ3PUi4m5QDj1nAJN",
  "key33": "f7VgnVFzDBRFEQHJvKNP6v5t9JPoTqDYNFBFGYKnWUhMaVRGqcSX5pg9qnkA1TwJKnGS3KAeXzWg6rq2f7TDcYK",
  "key34": "3j5PN17gviXc6vD3hiCY8ywSSNSZovpBgkVR2mA2BabExBWSzkmvUAiF7RwzF6YN3ujduhkE7ap4en9c72ukrTH8"
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
