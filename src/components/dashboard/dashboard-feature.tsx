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
    "4p9NFXBxaUQKqevLoBnB6rS9sszsnFgJSQmU8rP3sxieGpd58hR67abLyLeFrYzGNS1uZb6Cwq8Mri2kFUyizPnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kyA1pqQcaVjqp5NznCH6NtDy9gHjvfCSJ8PuUckB5csSKocCuHHeZP9J33smnn6mcqXnkizDfa1Aky1b22QSnw7",
  "key1": "4V3D3h4sFDnKMHcYjq8WafhVWDCanUEsvwLfZuhKvbGGJPXnRdNpEvhQV5671jkozboX3D5Y5Mb2MUA7ptJds1FA",
  "key2": "4JscUG71rGC7bfh5Fe4U94stUEHFLFZYF9N7Atqs1qVD89r2y8XFoMMZsJcxPvM9sVcUN7objsh2LpfnCFnxWhQV",
  "key3": "3jJtEBYSX3Ca8zjgXikcE3HmFYgNNReiCaKPmc7URFQtwrj9rYtc2qRpBjpMwJyBAUSSMz94jQwKsJYGad57737w",
  "key4": "2bwJLvkES6g6dHJCkPVhAPhmuDejR7icthnRdy3bZ33htLXd6CdHEwekDKfWJQfVuTeoYMKBPPo7m8WjpQPWDJvc",
  "key5": "nTBCUXQ3F9B83jtvm7TF25LXfgdP8BpBbxmRUdkzHfp8sbbiX7mYdFkCUKvja6YbXNFARZxuPKaQERwzGQyDg4K",
  "key6": "644rQCGqurBDBbv69RVKRrQcJ2oLnUAqFQ4GfFJGoCRSMBuY4mwHtor2RRz2cT1xREU3ztPMz4QwXpBNTxCJbje8",
  "key7": "QxnHgH3QgXNmKR3GPWjSeNG4oFuZ559WusG1ZbPBKpuxzgNoRNFUMDEeKakBqYQYTPJT7Hos8zNNdu9NzBD76Na",
  "key8": "3Rg5GjQJHTh72ymUNzE1nyUjxdERJafMp3xkYkRWUNv6ojFofKXFjanLCQQ6ZN3zLfcQvhpihvFZgR9J5roxm3C7",
  "key9": "2PD7abhA9Kn78sqHUVuQZpbjBxccJvonuR2qkLDoEN5CG8ZkyDr8FcQQNVC22G9X7egrWLjQn6XBcEZQhrXE3Vzu",
  "key10": "4n4kbMzyzKPGUSvBkHoaWYa2auikPF8TbGMvrTK7tsG3XvPJGkk6Ud4J6mbN5czGFMxXzYR4WYGTenFfWSLPqztQ",
  "key11": "5kLNXPLfF9KQ1hqGgtMk3ABYJajaghLeV9cT8E5DGE8yWL8ibxw2EznUgrXLngeM2wYVZgCVJQNG1GvqprV4LCDJ",
  "key12": "kWH15Dmb5JXRQnSJ7WtvVW13CXPSt5HtgsYcfzbBigNy5nhhMxsvAkhHgjFEWgD6jJowWUGQmac4x5roChfs9yg",
  "key13": "3hJzKY1vVmLzpzPZgKr3XKKFNVM1PLENtbFg6NEp2NJDcnfHSfm6LGhBzh4uuYeFw19pd6qT3cfzJweDhimfALLx",
  "key14": "3bM8Yqy5YTBt3zHbGmHCgUN1ts6KX3APL9c7zSyJJ8ZN1CML7XW2nJLGG3Z4EpvYmAaHG7S3TCsmjxbDQXzj3vJM",
  "key15": "3hiXhXWVHHtR7qm7zRMVyHtNuVGpdCvEQJ94yxiRyJs658f4rGdNq7SRTzLodTasu6ZwYcRUSMZjmrBAREuEPEFJ",
  "key16": "4Li865LsMA5vWKwtXAAzGxnUzzKj9zyqeyHAsEotQURY1xckTzaQDBboEj9FKCVpJjbW8akmx1T5jVeWHNKidqpT",
  "key17": "2HHKHNFwFaQTNxKnzf6gNiotq6ZQFwcaeJVkFvxUBCkrpFFck2fx8agK2Wwew32ycLbaZLRNPuMdQ2yZ7sLhwKhk",
  "key18": "5YHA75t3rk8VwsbCnpjtdE7zDfHcFxJcggFVrmjzGNMxMz3fswVQyvC3Co9D2cRhwHPgwjgMRMwnQH5R9DWcezyx",
  "key19": "4V5NjMnJ8iYwt99rjMhCMSJN1w2fbLJu8udtewYc9sK2m1aYAtgrYoKvsL9kf25fm8PzMQ9jfRyKRYFdRrvJx3Sa",
  "key20": "3chqAMCG1ZRsrfWiCfKjMTyLoUTNvrMooZhhxYQLh264QgaLnEGVZdPehUczFPoD8vVFmBNpDU55eoB8f3X44Pc6",
  "key21": "3GwmGBsoFfraPS1KxJWTRt2aexdDtBa6TaqFHDwceiQvcf1rXcrhU6SdYzm781Rjc8MoQmK27JPJjE98hH3JsZeN",
  "key22": "JKJDEmyFuEEDqLa84FTaRkwpoBFBwUU89rhwtdv52gAjy1GcXX7YmiwpsJeXjc1YnzdQ9kqzoaidXn6Pn3iA83j",
  "key23": "2Q1LvxstvW2gQ3Hx5usfZ6dmkDjtZLWdwJTtzBgbdskRi1oBnWHvn7FcgU3qFmX5fLsLJ4RUGirW31dz36cGPbcg",
  "key24": "4SjHvVBLFi9VpfWxqPKEfmbRckWggW7bPM56buEnzn7rM8Qgmso2jTi9mNUPyc6i5HEzg4UTNbR9eFWAvPz8YruT",
  "key25": "5gok5gPcG8gsGofQxbSmPVNVtL4tC398qMeUxHs1eCArMx6J7tLXphAXJKGPMhtTKuxU6ysJAU4N4jT15Y63eoTi",
  "key26": "2Kcca9eV2U6pKZ4mUnss9FPGDaXdFe2mRK667pmNqAmTkfiiGrFjQmzMySoXiUUAQX3pdMyGDEEnfCqbjxrxbcXz",
  "key27": "4MPdnmWpfV8ZjiN9KuHYHcBn99vAV9SWK52WsNChHAKr8ArNf49d2PHEoDJ18v1V5fJCWnyXVgqc4SfcporCyPya",
  "key28": "3NdSXB1uZZD2W5iKLX7YojaMBWvKFgnWySQwQv1HXEyL2qKxvR22bp71f4NZEzFT1MSZbNd3d46UaPLSPKDgdTcL",
  "key29": "5XFwaAnAmQL1259Ma1pZDx2Ydy7kUVQHxk6wXEyFnDvV4fhqnDMz9U2x5mXvooj8bN2S5fb1zZYjtHRczbnPSvvv",
  "key30": "46hgHoBH8CPbyFkvCg4RJ78CmTQdoeb586Atu22bSsaZkFUfiNtvbsnnBuy5cxCY5KP82CtHWQrnS8qvpSmBXkNn",
  "key31": "26MRgLc9yXX5sQQDcCyxzVit9Sre4oZPUcXkdAAM65PcbQbkW9gsnhXrFsB7oR6CvUziL1iSgyJJ9deV9buiQgFD",
  "key32": "48yXtiNyfLy6sGN7HyuVm6tMQbBV83a9QpEGX9zxUqHoQjznpexErEkHipMufMPKSq44jt75xyrr9o3pDx3wHPSS",
  "key33": "23fLLLJzuXd4sS4oiqBpnhhxno5trmcVRiq1ufUSH69kgszVNB2MmkYfes4jySKLnAsgnuy5he5AC1HoLm9jb3GQ",
  "key34": "3LGGk6NtjPYACxzi4mGwmbZfuy6n8eRSSrUxKmrpKpzqGRpF8SbV9jzQizphQpRTjUHP6HM5oCoZKqBRSWctBSBJ",
  "key35": "2aiAswEXttTkvPtV5WhRgNkaT3W3TfWRBAwJFh8m5SMCtoopXpeCcCmUz6pW6gjhD81sHAdqWgKVQnVZj5qCFDFE",
  "key36": "2ZigrLZ8xddp6ghbaeiPHSUMEStbRnDkh9jdomwKSZhDH8DDftggioztQSJrYwGdKj73sRfuxHNou3Yx6LJFE8ur",
  "key37": "4xHzNP9Yt8tUUdG5yye48wmq9uH3KKnWArwhVAt6iArfk9FjK197Bt2tYstsiJ7GYsR1TN3uWPzTMrLb9QSEiLEe",
  "key38": "2UiVm4eLefySyanRkb9Eu5WWz7pebn9RW9tgn4MrRDXpMcJbM1RMSucGomoHje9Ja8uZ2LgH6979uPFBNf4hXGQG",
  "key39": "2FfvFNMyDPs6g5X1STr2UcbgPuZ5obGaquG2m6GFEzDBVM3YSVvZKfmQ5RLrPVckX6GqxUVvrkDPV6yxDZvjzA5t",
  "key40": "5fxudsYbrEnkvGZrFvHWLmmBrtuVQ5h2kLDBDrPdZtMJw4pRAkqQxGDxNAx8okcRpEzGPX8db4YRGhwsHEJccnR1",
  "key41": "tyehwmzuNCnQUodFDFMrBRmhtE5oEQWPcJKk9AHxeuPRTC6rFnRqApeMvjBGbcMDH7Pjywr5kxaufF9DzY7WZPi",
  "key42": "2JsEdTqcZE4j5xXa5Q2dBnhjmMh152NHVvRcYrYFi5k7fw3KbhAWzHrbonzTpopfr56KUGqYzypdSGBt2t53Xuzt",
  "key43": "2FPsPtXcy6EsBTiR8Qt7ksgSCrkUS3ZhkPJzzF17JDU2EydUTFfWPhQyKjwQim2zJRFZT4zz6KXLosMZ5kZgVAT5"
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
