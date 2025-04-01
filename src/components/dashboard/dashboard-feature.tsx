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
    "4NpGVzHG8LJYPeiT7cW2yQzqkPwVKYa8QBf4LKGXBnumdgnrB3S4FCcZL4kMce5iLnrAHCFme4v3gnMAqCNCxuoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z2TUWK3LFHea6GAYtwBnJAfJHV9xuW8VKuAphdwVStZP4ct6KZtGANfb2NF1gDxNJ8aAb111NkSgBdkBEcNoThh",
  "key1": "3cfWEkDKVa6bpBbkdJibuNegS3qG8Psg2Y8N4aBykff4FATb865Zpac8DnqYWEMVvSzZBcciS27HGc6pFzudKPnP",
  "key2": "3bDeeTPJZzWv1E6pkbDRENkUm1YrifAoTgDMqgnqXe52QQNB3qHnU9A3c8xh8Vk6dXhkVkPxLyLivPdM6pFf193N",
  "key3": "4cjnXzCJ8YvEAeeG4CY5gGxooj49tdjJm7vReBjoj4mjvArWEo1H6jgJNybibiuJLC6yfxXDE2nx57uP1tkUBj4W",
  "key4": "9pX2xoNwnc9ugnLtvmMSJHx5om8ZTLtAtBtBPxYubF5aEJ4AtiEzAmryMhfKTtb2a6jFEXmF9rMqoPkZMyr1Xdc",
  "key5": "5TyvURxF5QtkVQgPdyV97D7Q7QHXN7B3Dm6mGp9iZWZquuTNYn3vDqF338d8o1gRAgG9BFzrPAKrqeEGYkWAYU27",
  "key6": "3qXWQg7NCa2ddTR4peF5HggSGzmjyaxBHLDQDxnHvBWeot3J3QWNSvzc8hjk5r6MvP97LyGE3cPw4X2Xmi4pXcjk",
  "key7": "fQPyhzUfZjRCSdB3iWFZXAzPkBPDuGcn8vR9AA51TkRQvFcpENqRp6ArQCUeLT74rBF1GJfwFtxntSY9LowdrGn",
  "key8": "3GUFWzZMhqmF5MS31ecoyA34zVk37GkHE71t77tgvQ7rcX8gzvVdevKpVtmDX3o44QLWn7VWJqh3crNqQjCRMq76",
  "key9": "3BiBfdzGALVjQ98H9yDnK3agNcusoBmLEDdJMisVxArgXwtc9n59GZ5ht1Fkkv1LdLSW6zzTazFxcxxA1j29VuXq",
  "key10": "2fecYMTvF4i4TDG1U3r8Gpv2yCKJjcxdesPURAqvHRjmhqA6yNLu8TAJWRXWHQdEkERBcS29Z3iv5GdZmZiLLrhZ",
  "key11": "32K5uBJv6ZRE6WM4Zn71fFyV5nVvfeVu8ShBBHtMBSh9apftmPg2j65HmyASvNK6Yo1K91ysyq5PioP8muXk1zu8",
  "key12": "2rSxyMSMFX9AMpmXzn9P16JWYd5BrJTcJ8RQJvg1V5sRtNWcFvE3ZMKVp2knyujC1zGHDcva98u34x7exFy3mzoF",
  "key13": "3mFpzu1Y3ruavETmoTqUpLYqw2tAUh7ujXZ68STTeDQf91Pcai8FZUMYNByeKsg6h5mtCNmoanFQpLes97U13ra6",
  "key14": "33EEET5EJNAgwQ6mu9FRXSjGyZwW9vWUrydLWshLu5TypERJR8f8JCQjyCpVjxqo6afDsVafPof3YXdyp2oJU4T",
  "key15": "5QwUrdNyRhU9LtesYdpskcVHHWZQ2SsWFMFuFXf5SHrEPTk4tDBg41pAQxUhwfoWWmp4NKi4JHoz5AxRJpFDphTZ",
  "key16": "4z97rvC9CUx9aiAAwPEgsQHbd84e7Ma8cTvTJM5cks5aQRQnwSoZ3swjT8nRcf8aQqFybKFAPMVuBMXtjf8o2dyN",
  "key17": "Bz1neahRGVSdhDKHUzzcRhEpHKc77BhnheLuhqzK6oRoSzQpTwXaSs4AckyP2cJNnmbzm31JT8MaiZSUg5Q9vXi",
  "key18": "4AdLyzQsirDVaJC4daizTaGvhN9Ycvknd1JbkBVn9z2s549ZSGeqgNrXxKUwyLS56CPLJZ3JiUpQYn4T6QDoNXii",
  "key19": "5UkSbMuWYnhjn3vYiELovGb9nxUVv7YaNpS9CPMW7BUq4MMjoPxW45HhUrcn3Wpu4c54rAHVpGtxCS6WNRZaL3qP",
  "key20": "234zbwSeUN1qSnM6nyXzCWfduCb2eagvoZp12U6tZ2LUJkUt9zJ9HfugQo5XsjbsJFrhqtJ9yzwXBPJzhrALQixP",
  "key21": "2SZ8phyQRqGhin2mTm48QCLsgRBU7pg28yPHs88nx7rxBmzP7xGmaCRrLTYb2FJKxpqiFSkpvqvtrUiU4TtpJdVj",
  "key22": "2mU2DvDpJc4BkkY5CrcK4yCDXgFsScAb3pvhHda1gArEi59WwSMgTujfK6dYiZBRX84XxMTod43bpKSUbRSyVyfH",
  "key23": "78NdfrSbtVQ3iFQgEDTZHrJ75YxTBrbq25Ah4Q7EWj6D7tUzmkWHLFwDLkjfhfYnXicHdD4R1UiiRLijbrtcD17",
  "key24": "5kvQ2mbXAXKiVHa3MNBBVPpAa4tQF4egjavSpyVWBTNFzgpsMWdACFDpQhjw5jf9MG3jEaCJG3xbUGSm4mNitrqn",
  "key25": "jqNmZPz62bP9fW431dcQWa5yav5ck9kwuTRTVmResMM7EntS6HGUrZeqtFrSACpMjTjeDdGdaD8HuWqbZV3Z1oF",
  "key26": "3469ggXgwfwTvmvFwHjVmS9DGbYZDWgubUXQahZBDycg5a5VgxpAg2GUhBHFfFL3H2ju5wZgvnzX9DrT1L8bv9at",
  "key27": "5hiJYaF5QCSwdf7uoHHBp3gJf7GvLAbYQZ4CpQzMaQ7ez7WDY3LSEFVXwCsrxo96VAHp7bpCwPtYFoNXRmnB4puq",
  "key28": "3oDrXHXixAwibN55oqs4eQEYfwZ7Ya89sEEuJxdFBBX2Xbic1Q3iFvQir7xbiZMs6CfhXtgVQkb3kegJAKGAGPsi",
  "key29": "3i3cfPNYSEhWrzFwuncGiJPAkBaMcjoZnHrk7ZzJSSBHqndhbnXYCLpBJt4RkFWNNJmaGxTnWvGR6zNDT6WatS7C",
  "key30": "21iNLH4N76ssRhcM69qxt5Kc4CDPzMGrvcpwKD551Ph3VkVyuCE38Z6jhjUzxXKw4rx4hXKtLjxCe6iyFjcvQFjo",
  "key31": "4MyJj6dJm3pHALLVVcSP17R1bBG1ZDVVUuesisQ5QX257dds4nyM7JpiFhKLWULfqmzsFRF8sEX9RMVMGLCUm3km",
  "key32": "66CqZGzsK4LriFQDxMxjqxs7XVPVjP1aFjPTB5DwFti8jZwNK28ReYiYz5aWZGSHhee2jY3qNQrZWoB3QzVyWAWk",
  "key33": "4UkGwDiJzMozMeMNsKjD3GBZzQHvTF4hP4gSLkxrsCX5Jq3gtYk62XQa6CvYzuxptKFP6pUUPayru7H5VBarMAXg",
  "key34": "2BPDZgiypkwSMMFEHTYhDujmFtXGUWXw4KSsgrBz9GbXLMAMhbHLdcDo6Dnxi8AoU7a3RhE5VdU7wKYsC3EV7xmg",
  "key35": "5aiKuemB4XejpZhABVgbH5oUMPwXmH2DDG9fWKfHoqhovpvqhoMFZbsocaPgkU6Z6YfDsP8BUuoaSLGKFS1ft2ac",
  "key36": "26i1wACc2QsjSh3xqHMvBGU5166SKXvF8NGtDzfaHkD77ADT8DwdB29oM74cFKzPtqKtULZAkUCnG4x1GD3TnjVh",
  "key37": "5VBj254RsbHrXt1UXyBN2pz5EyRNfg7CkZjEkXjQ5nvXQAMGtgvPkCR3xSmSzEjcduxb4nPDjgQkncGWwt1ojQq6",
  "key38": "5F8nvrJefxLsPUWQT1HsBgg8PZiUaQNxGE52k28dy1RK5qG586LcYu7BZWVdpzbp5AC71yf9QyFaUHdrsE1V6imE",
  "key39": "bW19ftopCQfmgiXTdwjQS81Jru5fGnmpbJ9wk1wa37QgvofB4vuo5KPrFeX6xv7dvic2iiN8iBr3mLBqcuczn1R",
  "key40": "4fafF6s3BSXHk8MfdNdLMxenc56XhX59h5T9GyjhnK1vcCAbH3GhBn17dA9GVDgJYCAp8j353GwCgkSmyf6qW4nr",
  "key41": "3VpCfaYvEjuwGp2FxbhzTdLYFchGFLi19Kjdy4qhkpxNhxjRTM3UQqi1nBLgSTYGmFDbpLiKdbs76xHLQA6yQhUE",
  "key42": "jW8QdjXapDpJFpToiaeKeZJW23aJay4R7Lradg2AR5LdM4ktbnq45LAKSjsbm5vbEVsBcnSbuydH5PCiRjvVRwq"
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
