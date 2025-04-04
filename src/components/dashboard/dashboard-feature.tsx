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
    "3ocyVAtESeDujN9o5bZhtM6uZ8nKwskRTcJ7bzyaPqGQG7XFr6sQ5GCQ939E3of7C5M4d8WMW928Ttn6QGiEiDTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27PZuxLxDWci5rb5HGTpUzqFKUp9tPsxAmFN7wcwGT5g8qGMS8G9evxA6ukkbcLpZtbbEZAB8T6BVbqUi1aoPGoA",
  "key1": "3SJnVh7xYcBZkJUb8tqAsrxUuoUHBSMitVpjGB2RQTaiB7RckhVSN3mouJP6XYLkT8KPoJybbxhjttQBBtdyzXom",
  "key2": "26yHWKnaWhZvhWzDGXiHNHgGDFKj4djdSWKqmXcmNTwoGUr2hHqc8WAyzcnh2oRSQSJczKqDU9C6mzNcuMDia47U",
  "key3": "5fVeXfTi98ZGvTF2ZM4TJHpxTTg8T1ZJX1dC4PXgXoztavgxeCa3gBhmmvHJwuSKZQhzfk9KtRTyy8hErojVn51N",
  "key4": "2v1YoBu47ykESkzz5zGYx1i6HCp6riAABM3Vizm6WBURKAULvN1KfTLiKC4PMhPNZYjgkDhNz79gFCF38iLoPsxj",
  "key5": "4taJFtmB3ePwB7hEn2fPvffX4zZ1Fpsi6H1hCrSZsmvGj3xxv82FU1SSNxfznNWF2RPhGe3gjPJk1zKMncNWUmNN",
  "key6": "3ZWVqXw4HAH7g9Vf6KAJotNHxFdB7KkQDg7GCxNFnjrh29cGYjdW7TwNSGQf2zSH4PeK3yZaZTgtn4KKttTiTeap",
  "key7": "4K5UPtu9hdvWuC2dJYeGxEYd6o8ZiZWs8bkVcJSgvTVF7Ba4Xgpy799LjV3w1kzExGrihHQ1Uca2woh3Tg5PVYxT",
  "key8": "3UZZFLMwySFgKbb8kXjAaaQUEmyxNGjKffchFCAFJPEkc1tYCjCMxJMK2cxyUHi5LT6CUBnr2SD9TMBpbaD9Ki4K",
  "key9": "YGpdKcjxi3yRyPvEGt1b7rgNBcKFwmzDmjXXgdjJDWMhgz9GUXToLjdt6RXMr62vaQjNGzcHLXNMAkYYKncuUX8",
  "key10": "Juhzm9pCweNBHA8g8cLEmWXgQxCJDzZ3oAcynSnRfqcxutYS6MRPUbjfnUJACwqn1iUqMrVYtBiBDfRNCK157fF",
  "key11": "AZjPD8iFsgMo3AehunqNFBauazL5M9ndwFxuQcUZDe2kVzxynJyzEK1ghAuZgLeD8Jj8H5Ks4FbqzL4rNQ3F1HE",
  "key12": "5de1EMEfUmYA2LTSfB8FeQrM75sorm1FpqRQtb4ER6QWsN4NYMyZTyeSkFnxQF2Q1CNVtn3AYDH5Jh89opx7orxK",
  "key13": "2z7y3LDPYi2wQjSjTRRADuwzrerfppghfp7uRVG2zbfDm7jiMD1T25JR529zjCvA582iPaUX5rZdAQKxbXmaZueB",
  "key14": "2LN3fRjaPNCMfk7ota9RTMY2tavT5QvHcQYXFfKdQnvVNNDoZxk8t21igkcbygrDQXPSjeSGoWhQLTgpFVoWagJ5",
  "key15": "5KRmr3QZ2vV4CHBG3qgmM8NbaNfoWiJWGJMvizrtouuA9jwXgVGyqCghiY7e4UDTi5juBVC6B5bDtuAZ4oaF2tap",
  "key16": "5JSBuvhKCmYm5S9TM38BL69rFKz1iWQqz5g7qLFamDVoMGmNHUzAa9tjUs6p9CVr7sj4aWhyAJ2S35HoSw6uy8bx",
  "key17": "5gAkx6JaBrzNvRfa1VLLDjjK8uEzfrnfUGkLY4mXykprd8uqBPxrD8E6oMXzrzMmHxYrJUKLc764X2LE3r8y5p34",
  "key18": "397L5qZkpcwjfstoTUncUQe7zJRV9nKDV1CdWZ1CVMUb1CkKCXpdXxEpojotx5XsvB8n1PVCM5TYrB8aWfoww2A5",
  "key19": "4cvcC9vf8TqRivoPVQHCv2pDych1RS4r2N5676KfcVmtrMRdCqCDQZTfeAZzcJ894kYhQdGsr7sW8Co9Zjw6Uhbq",
  "key20": "5kTJzSxmBuRMXKitPhoNRTG1LF4vScHMYwCaLGBc7ypCF22igUE9mcrWswMutwoyHh8if4HnrYAxWaTGVpMreVzg",
  "key21": "ZvPgyPcKxqvtoZYHpFqvVtmBfvwQH26qkAYQPvu7uhDfpcZ9fXcMvs5KN5KiYKsqDU12BFYzppv3wL1wvJggDwi",
  "key22": "3fedpKwPSpkub21FkqcyE6EJaByc6bzV9ZwpFpyuoaudJ3VrgFWqJoH26bp8mcKx6aEUPj1UTkMdM7U4Uxg8Ks79",
  "key23": "2jVuFw5XsJHqXRoAETZ4cDZP8P7B4kt46JyhQesV9Qdb5xA3DxjRSUL65KwzxW74TaNcNLYqGhBJCWAsS1Sy83tt",
  "key24": "4rXzTxjMfozVAMRvXHcEWBKee25UKAmtgTkuqDSpvRjA84n4TVYswxfhQttn5nmcJTCS5hmEeLSYntp2ApFLEyx8",
  "key25": "3XzmNW9w1VTooCPztWA3wm5zmotC8L2AC1Nx4u6gBxzoEF4PW9Ae63HFzP6Dd32tXBfRcv9dxQBAHJDhheXWJj6o",
  "key26": "4mMJizhiBTGmKTNo6hdDHjnXpTLLGwHQG6cQuibTF8jguXVgivSnFce9QQmmFjKSDCtWSvp9VRLUEv7VGfeukbJd",
  "key27": "5VGruL8cryG5iZvE65YFv1BBqgUGwuaYcigTPHuRFqbrbTDUa2NX6GxqjxYYrGZLtTAcCAa83segjqa3hKrGBDbV",
  "key28": "5JZ9Jv5mJ9KxhEhLjLHfiPvzHMqV7xWnnz5hpScAGEWq1ZrZ9vwwLNfJoB16j7K8SkPbQ2kyc6Vbxv156hmSkgsn",
  "key29": "4jPL1WaAzwWkEKrLZbpubTeFTVx1LqJcVXoouKkG1H8qQHfH9c7CmToFww5qZj6YM8QhPSEG34GZfWT43nw5svHy"
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
