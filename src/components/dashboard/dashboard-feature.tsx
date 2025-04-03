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
    "4dqKMjkBJ3Ewdji9kFA9p4FZA4dk6FZ7aNUbqWtCY29wuRcq3hmK2Ji4sJySdyGowZMFiGzwcXM9hiY9M54A2vUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TnTW2LMpcjr9GiwZ4Zq5qE2hGgHSYPBKX9q31ndF8QP3bqWp2okWg3aD25yTFwHioStP8eaxboapwd4bFFRFiTD",
  "key1": "5Y15Sz9Ffb7E8pc37Zmr5tdH3XeXiudctSFhM4ZXWPzMxa2wvdajfQDb61FfJZBaLsYtEQLhiVbHiMsdGgFZaPp1",
  "key2": "4iGQraGmiJqFh27yzq8rFVBmDHAYV93rXt6geFEPG9kdAeZjD6qxP8aDNK9BDbFmsikh764CamNzTcARRnfXWin3",
  "key3": "3mFjLoBC5jv3FsPNr8VzdYCjgURUvhbLqofrRV3az9iKVYgRqVkzQjYYkXJByNFFt9Hd9PVGjXudi2jPKn3ehk2i",
  "key4": "57d4DXfVsuHGjf8QtpTCiotRJ7XP9Nzt8W1BiUPn7N3W3rJcSfzszdTetQFotDRRi9gQxJQ6HRHc2W7UekKyXjrC",
  "key5": "3CfTp1dpfhm8LK4CHKGRYGjDpg5NJw2nZbf5FL37wsdocjbomzsKgJaVS7fRe1fEeUKwNgQgbaTY6RVM2S7bby8U",
  "key6": "4CMo76LxgXbbYkQeadgA4kVBBth9HLD94E5vaLVYvthqHL7ucWXRdUKsTUoyh2uSXbp6sTT797XvAWgUzwxeTdXZ",
  "key7": "2UJDz4f1QCjX5UEfMBxGnqyCYfpNp9jchUShv1dL8sksuA6aVManyBXLxF4dfrHvRfX8f34r4j1qS8UmcWBgpRo6",
  "key8": "5W2SfVeRbk7AWmWax7dXV91fRDqS5oMe1pGC4zMWc4jfv3WZ7iiVzqthpBH4GmTfLcds9iKs7NmFK3YmjMmoPso1",
  "key9": "29R3YfQEHAVsprojSpQn16jnCM5f47Cw87Q8cDnEtr4X8zj6X77oRx6RYmk59yM5ZtdfiiuX4pAfrWxHVRkFGMAA",
  "key10": "6H4anqkDjTDpdsqMJ69E6jnjS4xhqFHEC8vhfskxpmj5zPhMu2dTdHaNdBbAS2fzn2W7B6wPeo2kfBED77kfFiF",
  "key11": "2c7HmbwjJmNw2YprgiHDy9mMD9Rwm61MSQgpoMLweetsA1afdVwbPxDxnLZumCnSXPRrCeJc7Qgmhko1whbfqSnH",
  "key12": "2UwGYfPTgB9SzNPHaNKAHaxEnbpLRRnzn2i7syjF8qm4j1kW4QrmoksZLFXRCrorDG5nKsrZyCc8jDqicx4TDGUr",
  "key13": "4svdNTDr7WVeX5geeWEzn3cy7mTLabdW8CCNJkQhxSPgW8oaGcuSTkwHiePFVrrU2Z6PKFWCFohdVZvtRuo6nGnJ",
  "key14": "4w6AbtSszAEhqmqXh7H4LtL1DZLrQERgrgNv2EEGZ8YXxVQWbZManfRPqNeM3HSeSDHnrKFtyQZRsYGrM9AtxML7",
  "key15": "5mc4uQfg3WEU5krTsJR47gwKNhn7ZDo1LWMFCVKpmjL6Tmnm3gqbo9Ypbm2Cg9QWhRpnG4xtbHLwmd48Py1qj4N5",
  "key16": "5DfHmFnAqHD2fksFnsrd22hUG7ZjqXKp6jhq3XiX9NmEqE1uy9o3PEJk24D6sLAnNRpQZzqiZWTRHTKDMKtyGs5g",
  "key17": "5jQKXPeaxAckSFbe7subiRj5FT9Za7Zo494UcjGX6idZsm8MdiS2w1up12mVsViNRFss9DLMSu7tJtHytzhkA61z",
  "key18": "4dx5tU36zQVruovDabvBZWPbtB8M7tnXV41uLyhfAbkcYeFek94sHNN2BzdHSZaoedQBjLTnfTjqLhoSnDykhduF",
  "key19": "47wfMiRh3xBzHDB5vXdi1ygXE6cJrELwjVR2NGQ8yxrxxvBmJPJB7toKnztLqtevQ4qyLcfdDHwQ4SYDnFFb2Np4",
  "key20": "5EsmjUfTMF92kKaAG6MbQyEkVK5bWUd4Bn3o6roJURj4M1AzkXiGPspvR3UuijUkqVH4etRn7YqXzFRbxLAAaFKg",
  "key21": "3jLwm7gqku6U4KCF6HLZmpdx5xiPm7sxbXvutGVPgyb8aUQJ2WFMRVxVaxStuYkY14fU9c9w8X4Z2Eh9Wwsa4U2x",
  "key22": "2v19BY4UJweNYcFsqPjVYhsjZkHZnzFxytPXkGwGKdv24LsEa5AGmAYncSFFnYL6dsa8i82CRzN5b3j4szh3CuBS",
  "key23": "2mV88ZwTH4b5iZYEttidt2Rty98YECyczyjQP9EnZFwTyHt87AXrPaSRL2BX1LiGKdxWcLkmzQNQqSyF5Lsm5ARp",
  "key24": "aheCqtrmEoYs5kDs54chEC7pW2E3PCZEJ3p9o6HLtDpaU2Wv8RGEECeoNUZCoCh8MsAhzaxCxCKbB6Gp8JWaKSM",
  "key25": "33mzDmbWRenFQ1R8KJi5bCShGCFcmcumKKw2sf34suofTkKTwXXvNRWiYej3FfqYirpJrrizRE5DkAPD8QxyNTux",
  "key26": "3x2KQikxxsJ8tJoxUgZ523JKcq5q1WS6U7G4kPtB7mRtMJATHdLE9bPMmE5cc6Ae6YJMYGtY5pYxFAHLcRcxMtf6",
  "key27": "2rmsodb9hHq27KyoEjy4nFy5HUCZ7Xw7yCrmAGW8QfqN99MGcLzxLUf1M8fuzHdmj1Uj63unJ6vNh5jhVRdPQA8F",
  "key28": "4ZNzvcqBacGfyWWYWN9LB9zDGKo84DAF3tpg7uLpyBmQuFQJjzjPTt3LpTtj8LQ9o59BVbghx2rZHzMXeD9mppZu",
  "key29": "5ZX9386iSwers6swmP7venjfTJADBEF6gHYirD3XAiw3BCCeZBcZiyvSerVGHVq84XjDWLzq2HHkMErQ6NsY3s9s",
  "key30": "4AUV15iqvkryAMSBBCAo79EgNd16eRZGi1G5BU5VL9LsxQJrem6D37qBaMLWf6NKkGBF4NcF87ac3rcKbcb4NLcM",
  "key31": "3jfcaGG1jAygEWSYS5X9xfGRjB4N2mgvUXDCbwteuFMiYesYsZqfyUWrW52o5cenxsEaoQetnE5pnjkVATmS4EzG",
  "key32": "5nV3LHnh63ygX2m9fCvXFvnzfPouqBkCZmxynEfZo35cDRH3bsAv2RyqXJQr8bZjiRkNh4Twait4GSZo5F1rWkhZ",
  "key33": "5uEPg4pnjw6sKvKNDX87uSwX5dz1VWATohqDC1FEaoZDEpn8cWj9HDPNA9D4sQs3tdByvAZQDcbAGDHg3aeNTB4H",
  "key34": "4ns5GbD5LHKTBTsYUQDxaBiWYYEuXDhuQkZviw2bJmkc9g7kWPX7EhViWfi6CLZSnvQ2V5Q1ms8LrL1QnNGztdao",
  "key35": "RSK4XoFnSagNii5P5AtEMNp55pMMJrG7nbYapnhyrsqskd8ruzVKdWqepiwiGAbikZUQ4sD4AAZgSnBXJ5dn4Dg",
  "key36": "8WeyLne7KRuYKinzTYBWvw388uLYKx5zBny9uSLeqR9jGpHYi5Mf8NRpavWVTSmHVa3Ve8AzjgM2BjB1FAazzBA",
  "key37": "4jgZpeak6jBtNxxz47PpVECopcWEGFagFnhN1hFKMg2yk4xod8N3N1npfdWd6kvVUnSZtiPZKnC5JejLGU2fzJyg",
  "key38": "35qKaDtFy7j75u1cHutyoXWTcLYNAdsMRk51x3DAbpvWXu4yNz1Hfkrsss3GH4CjjsgYBx332ecaZCp4f6E7d5og",
  "key39": "NqMCtG7rZjw1jSjjHAQT1V4PguGzVEJk3dpu1YKCy8N2ohANw1D7cVuP6rVgSLQAqDd9zEtEWwoh4ZM4srX9tAc",
  "key40": "4mRj9fkc1f33jzdWRNdnYEsuDveKAgyrmqhmWibo3PxAMRHCC8SdK4Qka1unAZUN8FKxZDtnkKgyLRx6AouamUr",
  "key41": "58tpKJJWC8a3t1DZQinmKLJ6kN86w12Dgg7XcvZsGWEjg1X3pDZUN7A5XTsxw5Atz5H97DfGdybEvKrC8XTzj3Mv",
  "key42": "66pjjgz33gATM8bGk2y2JHYxL4Th6pQubZJcDEjxTTKQMcAQJbLTbyvToywAzweSFMhx2Yg157Tuo413RP8dUxsA",
  "key43": "4nbh58CeNum9uopuPR7g9yXUYLhPzxHUScw1x7zMJr3u6AGw9Tv8hiqT8UYVfUVoEFkGbmWr5WA8u33XxYPnWrtN",
  "key44": "2VBHAHCghBWoHDEabLRFo1io9KkSVgTfo7J5Y6WurUujNtGb9gGBhW3GRaRkH81uE7Tiw77KTm7rHwPULSipdmZy",
  "key45": "5atdw4SU1En92Ftj5bcMDtHjexDwyfaFwuSXaBvx983tTjbAtGyyEfPdetv6Azjrq52p4M78oCyx1ScFbUCi6MNJ"
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
