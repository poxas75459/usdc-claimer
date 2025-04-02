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
    "5QGX9r1vWymA3VcLVNTwm17sqUkThmTCDtsoS3sdbBJ5skfaxwHpPu2mEPdu8XmSJyT1uN6AHPx5QRQAbx6P1Dvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2va9asL2gkmHNub41VpHfLfZ6UPCKzHeLauWAxxBVd8sVW7cBXtsp8B6tensD1ktmQAg91UAzNefgdekYRigFoCR",
  "key1": "mogP2yFnCYruCanghs4mLuTvYDa9MMV9UfhXGANL3KMnPB6Lt5esL1bEaPyug35e7zsueaEb7MeYkWrzRwuddow",
  "key2": "3C371ebQWBpKukfPShLu94efjuoP4eKjQ82Kt4wKr4kBekoPqfYF1iikT5gckRtZJzjQRGAifYp1AWfnGGcfb3CS",
  "key3": "2cL63K5ha8XVqegBQrMdUi1dMMjxfavkvNhQ5GbG5KCcQcCXFBqKywFWFFYkbHdnEWG4J6C5xsW8US12MsYJ9j8Y",
  "key4": "5HMAHqWb78BErLP1TSqxk2YfDeGvSPL9wqYj2h1pz9YTsMNb1sFwE22CBmzFKNo7w111BmgFi1mNryvRNsA3gEje",
  "key5": "w7RVspZ52ZKgR76NsbDc26gkep1dSguGuMP4VChhbc2Ko7fuGRQfksXunKXhA51hXb46rX224VVoJ54QFmtHrET",
  "key6": "25C5DiA96rUMzSjrcE6GcZcqiGrfA8Qg7ci8Mzzv59xCwgRsFA15UD8LJzugv2zh8ZkntsBEuTG7SWbuGy7qxybr",
  "key7": "3Cp5CpnB9jDuturjjbrEUNamL79H9dkUsgtM1J8QjVCQfVbsfNh4TyhRkXGV8dE35qE3hfpR7CgThbxDy4Rbtktu",
  "key8": "2XuekKnqCYnwKB3FHvrqqWUe3uzvM1Zb8twSXFPBE4wrWUFGgEy7wDsA3Ru9jk12MXJcbs3Fq9y2b9Ug7duT6nHu",
  "key9": "2p98ihTNBR6pHyBqJd6pH11g88uRLRAnmb9QWmTy8Ux2bjQz3CfaBtTY3DLa4NuazxTUDPhxum9wcTJzi3dRxUv6",
  "key10": "3vKfUiRuvAcqEJBLNG2QYxnfFHiwBvQHTTPfQkp4g2hCRs6sJrfeUqTsrdpAkbytBKhx3BnMkEcBYCzZUphbMaNG",
  "key11": "2SvbMH3xnoEXenQoupHdRnZRFHNGFCxk2ZoZCMVdPNKjyH1jmtarBiaVXs7VeVvVxHTnEA54pjxVuhaS9jYz95wK",
  "key12": "49JwgWCpHZt5sgbRworCxdMJNhRRmEN6Wa4Qc6CQdznCFU66aDNUBZL9gURBBMpwMcYTk9aRfemvjkDxjwSQE9Nu",
  "key13": "n3V1fzuMcycc7HNVBpsYEqNx49Rnc6ofekHYQGBt1h2Q1C2yXHWvwMd1amPV4eScZMzZXEvx9z8s3F5pYwoYzWF",
  "key14": "39kPdzPGjc2LRXsxvYDnhzbEUyxg69LuTtnvoXX8KxZUqdXw9v2821Gm5HpwzBz3WuC6KsXJHU1vkNtqmtZxbo4C",
  "key15": "24yxE1HE9NDuGLW86o4EpTh7vjQdb4KGuwBia7C7ccBM4HSzyB9qiSaRvBq3BtiUg4WPtypDwR41YNeNWj3vowj5",
  "key16": "5w5rpKBFy5YBP9WzqLwXjiUS6wo1GFT2ivMueWMhAMunN752drFmYwwRhN8kqK1FHUPsyTQwg8FVVV2WbWZ31whU",
  "key17": "3hHZxyuUiSskWGoph8eT264WzdSNnE5cpnuSt4sWRTvYNLn8AC9RMRZZgopBDUChdnjxUxsNLq2e26Gmdk27Y56U",
  "key18": "N7mfhztYzafqq144xRSbfSeBHwE7ZsXw8dZSgbP5pHcof95W3ieJ3jCEw7iCsm9eypDcfBgt6WkTfch8W8yvveH",
  "key19": "4aF7NYMHo7piYTGZKDEwi4LJYKgbLCDvHDv6XvBGu9Mnndq93weM3hXCRHpji1SMrQeHytuRukGD4PsBE45stcCa",
  "key20": "4hZhabPLAi917SACCYvvRMRhL6Ecfonhm1YUeFUuWCArhTYZd3TaN3NNPeQp4SQHgiJrBLgP5CRJbBV8RkmwG8vf",
  "key21": "5mCudJtgAL3MmUWPnaMkHboTXYd6eqoK3XGXhVKKpK1dJswMeimW8Z95Uo77K5GrTr7pJfRhZjCrKFHoZAD3ZPFr",
  "key22": "2NK3EouCf8ccbqqmVqRLMtLefrXaPJMKqUnKQmubXoZnGbJavVdiLH32VmuaVN713QzwaWvoDaMquv1M9w8tdQEj",
  "key23": "5ifA2fzNStADrEReuJehkVnBAkRrudBwfMZhudKJ7VfNkuEhDYfz3HapdFu1k1LgQKLefDyU5s4ekgxYUwCTybiF",
  "key24": "54QbpR4Au8fNAcTQNiKNL26yPZJ6YnT9sxETv5zNFYCDymsE38fcVSP1gUDaPmZpZyEYpNS46AsEcva5JdvUT1uP",
  "key25": "4poGLN5ueVyv9be14Fm7wzLQoBEYLRVT1EVmaxuh8m7WHwyzTk9VAKjRAo6jC4gHJNGfcwLjUpA13qhYb8EJTmXi",
  "key26": "1oJDswd684dPmpY24cMAXUcQLTUXCkWy7vmn91tNZtzAyr4ZYExSLmphTNkh6VBe53VUkSWHyEokBNJLd8nWn1u",
  "key27": "2jRSfbzcbGe6oohH5sgXzr1iFFhPANVgFVpW8hH33s6ukrEpGtLC9Zhs5kCWkypHD5NsZuW5Dv6yHCCJ2TVMgbwb",
  "key28": "4JofkTFSC21ZvpYPX4FqCAHPsjupEGwHSGAPqMY7CphGM6Q7SyYjm5my6z2VVkPViHb9bmx7PfLDL6Ww3Nw8XdQ",
  "key29": "7nFgGFq5y9CNkED8ZHJUbyiEapMmGjVzo9uyQSYvMeeno16gNEC9hKeykzHPzGx4uGBqLdDK8BsUFXERBqhYyxm"
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
