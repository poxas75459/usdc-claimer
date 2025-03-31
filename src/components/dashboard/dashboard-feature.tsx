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
    "23N2Tg6f1XHcWXG3mCXTbfPne4nQrTGoM7dreh2bBqjpf7bhYZsavJBNbPNrvgjrfNGybZebassvirWqRThgDuyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WVZ6b61NtMP7DkXYTSFS3f4bLNtAYZGCj9RhhXRYaUQFZXnatq5KrGAUakcP3szsuBefDwoDyJuARGHFK2bEzft",
  "key1": "ConbxAsjKS1yeT372BR8Pc4k5mH92sfV78M9Jr8NZFykaShw9f5cxANq97ct8zAyyrmBTQrHpnRsKYHs6gV6Uzi",
  "key2": "5vywufJYJjjHxcQwPTDRzdPqTAuaopkRLXnSvJp9KyhMgokgznSMABjQp57K7QXBPgRgtmUrGNiZoSJypgAiXzLa",
  "key3": "SwFRChsFdUGLmLPHqeDnoBzFvNLWLQbF2dj64uZ5AEKTGKafCgXwcVrctS4oM6CwT42ao96heZ5FaFKkTPBycEq",
  "key4": "5chqBSj7cbd1RVn1wvM3M5egXywucXq1H3kAFFds31SBUbuqHS7XQd9Lj5pVXvHbzJi7juxAErctj7cchZKd5VQJ",
  "key5": "3soEEw53Tgs6vD56xvQTrYUHz6CjDrj6sArJGmExyexsvUcbu4wXEpxN2UC7g6EohE12Q1swUHwhL2W6x6tYxMW7",
  "key6": "v9Kq6AyyRYuWysuM5VRqUV3KWrhdWKyLdagrPQNaTkhPjmYbgtJsavdhjss1PnG48JigyhWQgwLroWfsfn2JmPM",
  "key7": "3C7gmYEvzF8k1cKpnCFCkHMatDDoi35AMKqAMATW2nxsxNrZAqYLGSMVoBLAZHnvBUzAQmCyTNveppnfjwdxXout",
  "key8": "3NQvJciKUTmVuKcXsKKfHSkX2imi87jLS327qrCszGWjVUJv2NNfeRfBGFrFFeEgsV1XLByZj9x1oiURBfMaRQie",
  "key9": "Js9CQULNnburiAZXivvuGDhb9tDoH7oVYu6VmS2vrogeMsyiLGgr7kVRwFDbLzf2252rpehp9X6VXNhz2UJsyQM",
  "key10": "84THGHuBdgb2raRFsEjJB5VDys1NpWa6nM2aLpPSGrhfWhsXnCSa35H9TdAL6KMX7TPrN9xG1ny6WH8W5ATk4Xi",
  "key11": "CD9gGPBvsHMRxH9ro1vHoRMfQHakvjU4gA8rd7QS7wyUhNRbmUHctagJARZffWwYoSvoT17ZW8uK2vXeuQ9yoUa",
  "key12": "4tXw3X1mxaQUedre2nPuuG7QJkWP9xi4owhzCuGmA23t7JNLMmS4enADLYPjJQbQFwxTVYFWAr3zwa3QdZAKA5kq",
  "key13": "3dUtteEk78BPMxcS3RDkUMyu453NubS5d377qGe8VNVqYDuaxffSbB3ekb3DiQ5VsW6froYX74QJrnMx4aUu2daT",
  "key14": "2AY15F2iQavPmCQbpCjPNhFLVhFUhjEUqUgz5MXgxWBAdw2prTMnRy9HcoywLxuLERL3a97yLKnAeLVwDaCj31FP",
  "key15": "4czGMtWhKkUq7kq1hWNv6Lc9Edu82rX1JkoEijY9g8vzyJFXJPv1GaNjC7aXVD9Nt6fTG72GydQrWWapeSpVad5z",
  "key16": "3CkGgyRystLv4biNwEPAJfCXkBfiBaZJbdAzfFEw1edoeeQM6PkZNsDhqSCu6VqkD8q1LL5uH1gFWH8Mg5DiycxU",
  "key17": "5b3Geq2fW9iKQBVbF2Q8yoQJduWV8FZ5MgJEKBToTS2BrjfFHfHmkGSqxprFuPXMpBmyZkEeB1sLLwxnetRzAeNe",
  "key18": "26eesUy7idYu9WoBBPxT5D34CXuiSqaCmQoANYiAv6LD7EgB55AgCsuhzBCfqH8NQYKDAssW4Kny76bqiNuTHjrG",
  "key19": "BE1nS5MwHVixcBinbsaVaKL4CnRQAj5biAddwsZ93BJmmQrpCsTD4JptENhicRmxeEi1XETV1JGLFuwSm6LHEzt",
  "key20": "48wL1q6ENfRHLaJvsNgdJ6M4AxK2xfnKi5TPK99Vng6LabXdvYCWqFpW2QKrftkrMyTWmra2LaQbGSRvxDEZTYHo",
  "key21": "skdpUeRU884FawHemzF7zCQugNeBmHwCDMYubAvLQTEzrUKDUCRcD4ZLixg9WP2vdB5pRzPAtyCzxKLy5CmvnGw",
  "key22": "5vtbNVFsKHF4iHArCt3e8sM8tY5vTbRutDKBoJgjPDwfxADqMXVBe6YHsTX7XVgqG1YhM8RboAfoXR5GGWKSRmE6",
  "key23": "58SAB7F13AhU4u1ZJQmximkoCxMA6yJhh7qdfjhJU8tKzRzrDVETudYffzXeLAMe7adm1kim5dajCZ2mpWGgovFi",
  "key24": "2Jp41sFgo4zxjxieJDbCUqaiLBNMVNGpr831YdhKNBPKnL8bCdkLX3cR9fMWcBZT7B9HB1WC1cNFwkHiPPpHFpdX"
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
