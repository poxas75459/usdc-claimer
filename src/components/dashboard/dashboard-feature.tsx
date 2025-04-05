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
    "3XZMyCWB4YFHRE3HPD63ofbucmZFG8WFK498sKYJtdURZAQJk5G4YmmmaEzvX2ma8HpUjPDKzQEAKrkdXpRcADii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27nN2o4utkyhySqZ4pym5LLeRYmxVhE5C5KRNcWZcubXCiqtrpUVSQj1obzjt1N6j5bXzkvTyRTAbZG3fkpVBR75",
  "key1": "2yZkZ9GiPnH7pCn4V62MX7YyCfWuSLxTwjBJAVH2gLG45jAVkB1aswDJpiJJPEyLQX25ce6nJcw8zN8hJnDi3Jc5",
  "key2": "47z4861gkdypn4nPUUNJrHpE7X41frukcFdt19TGFC5aXK29rPuQfQ5YpzX9U7LNQYtZ5rajvrzurwq1gbA3MCiH",
  "key3": "5NQ9KM3Tp6LLbRFRr1RCLM9AxCVVtZdRib3pDTQc5RxdN4aH5Jf7pFvzfWucGSRiLypYfZzPzMKXwSiLkALUhakB",
  "key4": "4k4dLVgWfJkrJD4BAHJei9Pc3skr2XNnAvZ8fRdD8YnmXeN8cHyZckDPkKiCHD1GFw6pXybULZZcP6GuLuko9b9P",
  "key5": "YjuHnEN4YCNdugoEc6n9tPznLVSCawEVPBDjTvR46eSbfMR2ZNwiohYbniMrjxg71SDtnNyocnTwSHGVKjTYKqB",
  "key6": "5puSPZytDjVbdQzKDHyLcAU65cMBaXNmyhxdJHSXQ313HvtoBgf2jDZR2WaKbiebspGJzMKmZa67PoN4zunkDdaT",
  "key7": "MqgJMBY68qhsegcCLmWJndD7aTRzPTTuUiGsk9wL5hSuk8VGrNZripu7WhHsshAusnDy1K1Ss2S2LeEumKa3Gdo",
  "key8": "3EQJAP7Vm7RxUaBmHGSBBPitoxVukjW2jBGaGx5vHF7y9QxZgUd3keep9muaCz3wa9YLnPtpLJXVB8ZM9m2KtNVn",
  "key9": "512csLp9h1wm4yCB9Cgzk5LPpnSuDYzdg6JNP1eESHTsazfi7tEM2FPV1jM94smhA92WQE5kZQ8F3zT8QerdebNy",
  "key10": "2WMSqtTv9c46ibdGrf54vMKjC25fLXPRogYHxgPqU269C3GG22fPHtUGNkf3rMykkE1j81eABt7RQiifGUUPUUQR",
  "key11": "2CjZ6ByFkUPgd2bVb9KyCGgwbNESRhn1W7NUSfDbLrfrGAX1313FfY2naFzZmRqEKy94i2zHgXnD9Bs16Yc1b9zj",
  "key12": "4QsfsAr2xF1fEJQqfLMpoAqZx6aW1swoV7sdZwHeuigzykvS7me4gkGVrxpuohhHSVBnpSTfbKDyA6dhE4Gt6xWD",
  "key13": "FbVU6m1LxU6FCkxPz6ezGZdn8FqRWY3KCrqeenmKYd1ETNnvnsgs2a3CUjknVhEsRnrwtuTZeXruumCaeNkGAkn",
  "key14": "VamKg8mUotXFf9tmJTK4bNncqaSLtFihEy8K9p3v2w8ZvATP5Gva2hY8Jk72BcexayyixjFrGRRrBpXjZb9TB6Q",
  "key15": "5gg8oz457CbsMoVCPsCBSnnhgsv9Vj57w4ms8JvTobXzUkWRQTiiEfaWos2Gj8kvWgFRzotC4PGETAAo74BViCe3",
  "key16": "3zE6UoyrapNEUJL8dbKq9P1E7rwoJhg7WX6xdnJ8hNZz9bnVHqvXUB4jHcCtEETRsecdZXkwBiy3kQTeCiNorQ71",
  "key17": "PtKpEtXtNEqf4i1BgveQe31kApGmuxfwm4ZN7AdozjwJX7zcogLDQjm1ewHdaW7noYBqef8wbjX32x7GfSnr2Yv",
  "key18": "2K5s1dMCQT4L4NubtQpx1kh1huW9vAJvQBC2KXxFLa3G1bWDW7FcEzCP2PLxW9b3P4Bz4tZdkgFYCfGePmiHBn6f",
  "key19": "nH6TfnV173md5XdUuPqjKfU9FgPpBUGPKMoDZJ8wEhL3b2BtTen4QzbziuJqb2VuhhcSNZZAiB8m6zWx3dPfwc9",
  "key20": "5MTtcjwQXtLrboLuQTKrCXCVBbSbUNGyXw9hSk4MkRZdyFVdFbnBGebyxg3N9fh2RFz1A5rCAYvcXDgdc53b1cgo",
  "key21": "52JYC2WNk2coLdKrdcTnkQEidGaNE8RZ5XGZSa2fM8tNbiVWp9cbvMgjUTW7wXdqpNp93iYsBKe8YXDE8UydDhGK",
  "key22": "WR6D4DfQEY2jXUmDTA4LCw6ZeymhL92YaRN4Fp5f7CeqVypX5uqJYe98NyREGDxsCQ6SZYZcTzBDyFYhVZpyjch",
  "key23": "3wYvffVmUyGDarHBskcsRTsPQeJu43hUfCr7mMHDERcp71Qx6jXeziTpKFjW7cj7wJeLvTb8ZgwYK873oYjoFtJF",
  "key24": "ziwWvNVsTJKxRYPSYyAR7SLmg1xX6q4AgymAWPLRXxgrx2wtKMucTMWaH5SyynpUybci6A19r7f8kT3Ja9uxi71",
  "key25": "3D8TGA31kuGeR1NWFTLSGRx2RUwHGQxrTWWfZaqW5me4njrRZM6RidEfCM6fSj2ZAxoxrhJHGTLji5ZKmpfu3bDz",
  "key26": "4tV5PEJ44Er94nUPoPakPZ7j1tDAKnP3fFsRU55BshsFSLzGBHQSDvACvHyroTdvZcsL65ym5pigmJ3xxmZoquRU",
  "key27": "2nQcSfPYe7K57wccMTqf1MbZUyYBpaa7vEVGLkpBo5K2ZxbzsmR3Tb4gHL11oUGTNpTKTrEsLNWK7EEowxgL3U7T",
  "key28": "6wSwYvyVx2c2eExNBmkjBRR5GPPj85KJbPPj2Dbb7PfpbbH8ksdGJbeKPTaft3Ky9T8vtJSK8vcVeP6N4W3a89b",
  "key29": "41M62HH8gh6mQA3BU95mG7NjdLFhbDENT86Pbm8ynLa3hawoyYWNuXtcjZQTcqam2PofsLZnHAQMnNCgUk7vFPNv"
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
