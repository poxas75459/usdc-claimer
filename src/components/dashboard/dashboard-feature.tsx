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
    "3hu8vukBTXVhL1bk7irNF72iNNKaAUU1MmMXcQrdnbNMejj3qkUvFe741et4UiY9NteHaCU9DHbgMwAMNoorYrpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bf3sHEpmYcjW9g5vGkUv1fJZ8hpoHuTwN5qWMKX2hZMBeBnPoaHirfVJ77aE2WfLDcQJXiM66ZuV9tBxrFHwL56",
  "key1": "3v6keWrwhLEiC3ZakHLZr6rfALp3wsUomKJks7jzbxs3dCd2cissQMkCu3Gs1vBFDWF6dcoSqHtyCzqGWseR9jsM",
  "key2": "5cdqySVoJCZkRGdk8wuqQR1uVgX3uTtetxX8djB4Cwbm3H1TqQHqqMY4bXUD3rNDQkfdbGzKAvKCpHodTgpRhgt9",
  "key3": "gMrmCDY3C72mYLtdkeP7foboaxSe5qjcaTRsdjb8HqjVniStDUfPY2CQKzXB4df5VRnBJK1tRHhgNB9XSsJQ6yu",
  "key4": "2oripkdJuQKctG3GzRmwiHJ57oC9BicfUBkQCnjcDmjyjpoBpiB5hVvJ7kjgEAJjmvxcT1faX4wj4Lem7zEnWkLQ",
  "key5": "3Px6ozVfAyocbs2ntuTXAy9gSTuPopXzk5PWuQkvSZiRMjGLp2J93WrDaovxEfiGt4yTy3Ufk89z1qiBkmfFgEf5",
  "key6": "2jm6m4cG9GPqpXt3ywFL1iuSUUSAN3dLqQa6h93bLnqUWNpi77FeujZcg4P5YdJaTi42rF9PDFuf2JW62CngG3fn",
  "key7": "2JEt6FW5eg3gJhieunvShF4fK4XwsNTKt9PdEyRCLmuvogCLYTnqH7cX7E3r1iPWDuV4MMynzGuLiBTC3Fa67mnb",
  "key8": "F96Gn9TpprWPicmhxCxdWxAnxsAAZpBW8Ao6ew245QvsWGYpMqyumcwpxB7pxq9jpRuSSJcgVCBMGFcZt8HcYBj",
  "key9": "3w1AUNe9rYzdWEgLA5wDeRM1ie7yHvUx27dCdvJe7Lqff7xXi5Qs1kYscxFnwUyo7k8VmqEXQpuSGMRm55AjEmbS",
  "key10": "33ZkBPGmZuEwe1NSw8J6Z2AViqgbZ4ex8VKgtgvRP4wKQmhz8DnE6juN62F9WnF52ZBBAx4nEzYnSNi3D9MC3h96",
  "key11": "5X92Viv2VBAJ2K6ZZyxqcTjpT16A6WFd5KwGJJuEXnvdWpYDz59azZ7nDVY1WPvj5uHGhiFPX9y88F5CJrAq5CEb",
  "key12": "4ffD2q8i9P8635tdhYY2ekNnPJSqwAACGZMBpYn6s6bgPcfMx9TcvKWFMkKKXk9YTd53Yf2vqL4Rk8e94StiAdtM",
  "key13": "3cyscQfRPLHWTGcJ78U7nL4GZE3N57tMaU7vWBk4j6NV4bv5iWkQbUuZpeZnZfSQdsjvagsC5dezaPEUdXxpMCXy",
  "key14": "4ZmS1J6FiNHBdD6DWJ91zGVeaRPoSmMD3jg72oWeKzmyiFEyGSBG9hdsuf6cxCM4BKZBn2P3ZkNVAspfsdZvP4Fv",
  "key15": "3yeycNBMUgE44fJrdndCMmYbpUNUuEVAWHKquKsR4uEqdow78dwobD3a8cACVp1GiXzASFdJJKuBxVCL2GojTFbw",
  "key16": "4SrBoy1buvSSNvRsJjJ8AJv2f1weYtTqVRJUWDyhoDhhxZg4XqZPKrruYRpJFXzfs7bqNGVGbyT3sJ9QviSUbgqs",
  "key17": "4ojsHasYTyX1kCNFuh2kkqQ2EEeLDdcM4WZNRfQKwiRioYSpgb6SYKW5cTgJj1rJ58oUc1uD8x8Y7aKZbsUo2Fxa",
  "key18": "3jvz3M5fSRWWB5FG2XNns7ks8nejZfMHkeMC3Z7c4y5FrNqBWiTRTERQMV5QYUn6oQrKQpqH9otRXCeDcfxfGB2g",
  "key19": "5QTWMBZor1BikYwEnvALiG7Q5gr9pbNN6df6ecKBEWpJZyKJbHxe73m7fWzBb5ngMdZehyrfUYcAyeUGcG3utVP",
  "key20": "4XF22BKuRQaGHuKA16nnHhe1P1QksPbciSZKUzcnM25WZ32AJufKkHZgJgDD2AJbvyeDniLCZT6utWHuNGmR5zFQ",
  "key21": "58QoG1sh61fPkqsmvH1Kadkh8ng7YSwJq4ruFXjLFJwq4GEbfqQ1smSBEr5mCaLi16fadCg4CeZhr3w2gDLkiZrR",
  "key22": "5GneVMoYMHe45JaWo8zSQEtqNSUWGeCEULWA9ESuK5jZduBHBaxxz4YaGbTxPPbEwySPGem9pW3Jcg6WKv3Bvtjm",
  "key23": "4a6TSc371o3mUCP4napUjGg3p1PFiLdnWuy7vnQEP159GChNV63bzEhnx2i47vDzn6yyHb8hLr3K9g53c4uWWoS3",
  "key24": "56PaGFB8pNhbWhsCBUugXurPcbVZEJu91eZhEf5u7ox2f5TQ1CzAXqzSsuZG6AD8YJzRyfkqgczi75PtA5yUjqGC",
  "key25": "4yebmwqE9HtJYzrpGsnQPKKHkmURHSDqUMVmjSkMJXYJU59hFpwJRczfbZSX4C5moijmV5Ep37RKjRtNPoT2f1xb",
  "key26": "R54H7vZUiCufq4ScNKdsXhYfJdYruuuFsTzKfxPTJzpqup8QjPX4HkqSrjrgSkfwZ4SpP8sdZwvxG85Vu1RagiM",
  "key27": "5fni6ByYMosAfjcXEkX8UHkS4zkxmyHN1C6ZdwVpqvfvME3vuVViyZAQwckxRi6mvWngeR8sfKgZ5qMdDMEFBXRf",
  "key28": "zVeA8coY9gACbA9c6UZBbuhusuUUvqqxDt7rf1QKu87mRVURHuT5Pbw6fmGVKxqg3mSRzfKCvioxq7u4SmhsGZt",
  "key29": "5nn7acbsor7iXegPLfk1UTkRMsg94LqM9xYHMcXMZ7JkjRrvqQ1EEYUp6bAUzosdreFNc22KtusW9meJWzZZ5BXN",
  "key30": "55DVg76MQG8VMbmAt9qyaVRazUuweweGU8ZqK8NurHB6gnkGYhq18vRmMWsXB6cyWv9QXAxSLUu6gaZ7nFKWofYH",
  "key31": "5grxUFSXL6q9j2tBjqprvMynK2GzJNAC3Wy6cQHktf4TgwBGSHK25FN1aTRuBJ6saSuoyAHCwUqbUnwPRUH1Vz5Z",
  "key32": "cRv1GeZwLbCbkFhKQHyYtwhGy1XwpsDaMdzu7ABiTzxHyjdncmpZzeoznD2K8uSYJJAQRCcfCLnGxGoyQdQYtXh",
  "key33": "5Z5mNDf2ui3PUxEYhW2oJ4vYeCGf9JyCFk7ELgP7HqGvptMyDEpQnUwaM3ZVmpmrt5ddAXajTZ7FdEvRiSrRFUYF",
  "key34": "z8zb7LFnGzq32as3kfEUJHrzK5fzVrUDawX876mRrNLKNkA2YXr3oz7sacqwqkHQkT3Y4WAxCydeoV6ttP9uJjs",
  "key35": "5h5iJmP6zrsqCL1FV1knLFxvdFMUwQLb1zQ4UwbQECmStU1ZBcaDuHjiGzFhzDK6FPAmNyiUmWCE221g8wGAd4mF",
  "key36": "2mg3ovhPJsyDLs4tnCohHrHgvjcfQkhEcGaprLfpek55yM7FnteQVpsr4CZi98xsn5ZSrEzDxCg7WuMA7TykQLZx",
  "key37": "5sdnRXW7qp5xxGZjWBKsGaAC6HoegmxQFU5GB1SD4AqQWHxdff2gY4sbUimBAucsVDNUjNisxMHxcfS1uhyo8EpH",
  "key38": "Ke25PGYnz6t1kq8hmm2zxGimnD2dCgJxkuMHg94fo9PYhZhmKVpcpqVWtDgHGdTdZYP5rjord5VHL9dL2PmZ1X1",
  "key39": "3AwsF36ujo6v3eaQRUnp59jiSEJ1c9sjizwRP35YVW7eZHkHAzfUxHmQNjNpLSTfL9fDQQT49GcinkSqkrGUQMKg",
  "key40": "3LM6nDnydSv3WQui99uoxFbVrTvzUbVYqnD5ibSKEAhdNJS2w7SXuYwiKWUCSZWDuM5gNL7AVcWTacuwyKNezM82",
  "key41": "49tq27rMVygVu5Pyex148LfBdBXiPv19tNLGTE6dfo7VontVbV9RCs8SZASw1PHTMP7W2jcQ3rh4jnuUWaUyDNRA"
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
