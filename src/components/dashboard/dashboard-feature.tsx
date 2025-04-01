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
    "vjyzkPvxaTStTFLVRsbyd7dDMFS6qXpGUbNSUok8TvqZ5GE9691Q28YbT556DpKBYUGL5ZjgjW1TteEGamC53Hq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BzKkT7KeqGdY9FsESbzgBeoNWRvZfBSPwEPwiiT1bMJ1TqZdw8VjmYA86drq5iX6MqDAx5Adk2F4KhowDTQKcCD",
  "key1": "2qcxaDpwyKvj7wk9Qwx5BmPFUa8DUZasDwvUB3mwyRYJteui1snETFTDoSHZTgRHENodoWwkYrVHbtwzuGMCnVg8",
  "key2": "4LgdTDUE6jtjuCrzqstoJh92fpY2pHn4JGDztF7pEyizx7A3bsi7warnS1bNd68EkCS49oMcBUazjB6H4bpTHXUB",
  "key3": "3odmQifZ4rV12boyFsfmNtxezKYYYJ6EXSpCH4BsJcChFKCB8ScjZdscTR17duBPasVDFHT9oTyCgf44pFNJMXtm",
  "key4": "3TpNxBVfD5rCNrKUPHCBXwJpAPhWha9sb7Rq9Q1rbtLtYc2VkKKH3fGtXc2gzxiVMJsUMnUMHWiNvuLvr9Fa1mGQ",
  "key5": "3DgThqEyyzxsvR3J8D8fs5p8Z715hMcoWjTbBwfeDKPHFkpJqT2NhfvEtLhvKTRp9EFbh93RTCj2zLWLjtSFQ8tm",
  "key6": "57rxiGruJjzrVcsUQkAAM39oQ8ce6ApumukFPkrPwfDUqk3cDaxhQ7cjJedg5eXwXHtsyjJTDtFzEuBTMXiC2B7V",
  "key7": "Xtk3dL2aQ6ugznpNuHKuymjL19DJUVfz2dBNqiuNzGCaSqp95xmir5zJSCETaXh7c4v2VQScHCd8kBNoka1hLca",
  "key8": "4rJrjPbHLmGueg1Ehwx8Dzw2trKc4ZUPjMpbf4WvaL4U41U9i8Hy3a1oS2KASS64vNBHxV7kKUKxb8yHaeN5tsVY",
  "key9": "637FLMNKagURAsq7AorEncEKGCTDMNpwXcurZubVW7dDnLM48kuTSyRMGfmDgas3KwU7zbL4zCz6bNdDF3iZVXwj",
  "key10": "5Nqv8eSuTDq6LMYyd4SrFDHgWXsf4k2cyBhi8c1LD5VLHc6BLWwa1uSnoHRFURVqix5iGqJJfSAV41VzdkCYu8N2",
  "key11": "4JzkM3Gzf1pYPNqKX2n9ybn5zRfex6MeuTpy3P87pat8VWeG8fDoKdX8eedYLu6QHonF6LQpdvpc9Q4EY8yw5Pci",
  "key12": "3j1XgujJ3DhCd1FbPKdnPZhYA6JWRNgQVEdvojhxdYKtLJc4AihUYaz4FigT3JY9uEYMfC2vdZM4Zhq6gQTn6oGf",
  "key13": "5twtxegmi1owuPZpEJQ9EHQWF4YzJKJw4YWRwtC5qAdi2onNrqjKHaMiCBhcG5s9gFTtDCV26KBp41AyeW6HuSst",
  "key14": "4Br6EPBrd9YmEjBej9BBCwKDXekxatrRPx6NLktMQXRp9dXaQL4sACbJo9W66YzgRSy6iw7jBdXq8kngcKYoC1T",
  "key15": "5fxBpWzUyiRBa3oDL1LauJ3LiCi4VnLew7pL3vFLTNAqYELEvZPvWBSr8jR8Z6yReAAzKLER6uYCUZQZxPmBbALY",
  "key16": "RisDnASWJ5CmMY55DJnuycPTDSBvSogWUDvTZKt4Nxh7AANY5LZH6YKnqTkVVhc7wUTSHwqwayjZUvWNwziReNp",
  "key17": "3W7zRsxSVcL5VtRTWc2xkHQG6n7BxeXjvoyUc1tgzDQKzukLWDBfbtyV3sKEfXzfzPZd5zJ96h4Du6jDiCLHfxm1",
  "key18": "2nx12RSBpLVEjrPFStGei3FYgkD3nop4yeySHLGQNnavJ8jPHjARwz7nk97YL6q7f32SRUwYZjWPa77aZzCJjhk4",
  "key19": "5vexBhTVZgeSRvArrjWuAKT68A4DVL8X9bkJsZd6Vt6EacvsQa1TUcfCCDAt1bEpdzwaCNP7NSFPtvFWHmFd4ii8",
  "key20": "4KpUBx7KwTG3F2oNBk2WZfTvKcWC9QmUsmKsQNVoPcnQ6b5ktVtsShRkJB97mH33x6MVufSPy5rD3TbaG6Pd2pob",
  "key21": "3K7sf8Hi6pMaWPw21PdBrqQZkYUDw8fWCfNPKivW9K6QNkY9ePf6c64ZpH5EYKu7Cqb6gni4Wr1Mx7bmmRXCre6Q",
  "key22": "5zLbG9Eina4VNxBFGCC5FBBrhshpkyY1ZMrAB2HMFvccLCfd2WAhTez5dUe5XK2q8RDtM2e1dp6LQ2ndqG7m96kH",
  "key23": "5i4j6GtDLmoFXE9ok2SsvdGj8oaudPGXyqVonq5jWtcpxKPBymM3irg9B5T9AB5qi3dJDDq4XF3h4N89f9SXVbPz",
  "key24": "3raRKUD5i2gUzARRvdGab64k9QbFYFjUQ2CxkRHn5HNb9qdBGB9FWRe8yAxsG52YAR7izV1BrU2gBdLR8EMdwwa7",
  "key25": "5WYtMgjidsUtxix69NvxrNyWxNBrVu7totARFPhMKy6LTmX4ZafamSco1QbKFEm8RTFPQExi3dsBuBYW9XGcruWF",
  "key26": "5RJGu2QdyCxiujorTNFdoTev9UZwjqsXG5SVyEzNZEktKnVFu33s4YEh8VASx8DxHiDTXn1UgF5wikmUSCoMVtva",
  "key27": "VL4KErnpCVAiRPWpAmHqEUv2MDP2L5hjw4GUJxepMJvuQLxvmXczXuq1Ze6Fw5RpELCctb9XFz2oP54ZyhYBstN",
  "key28": "4bkczf1doLyBtNfUbV8cJd7ZBD88DQdw19DLcJjjvtwqi7vsm19zY4DRRLckexkEyQ4BSVcfDmdpzs5BJj5gctw",
  "key29": "nesuUmygTmNjv8toqh47Wih1veZMa6DXecZgVTjtLVVHpMTeXmBdcjUncuNopRrBkcmmpbzjfkhcYJaKVGwy33z",
  "key30": "29KBjbSKdKjXpqbcnK731jKuzFMA4EwyDUKDBSPd9CJj9aw4Hfms7W4jqsKNdgYr5bSLgUczV2NLqeJDGc7rU8sx",
  "key31": "3kKgdeRJ6ysqQWUc4ofMNrruBYxJUFdB6NRoJUT3wLPWTHW5pDLcUFjbBovmqAe73FauTFkpVSwMxdB7x9NADYx8",
  "key32": "487n17E1i4AGyTEzJ2bUCVVwQKb8YY3pR4f8ZJ1hhdGcGLMizXFtTBJkBEckNf9Eg3mvxzSAbshrNQ9hbg5LwotB",
  "key33": "4wHmDcX1qryyEUkNJQjKPoa2dnNEwZuo75arZkXz5gD3xEoZRBrkvJG7M8XLQFf2nVgW7RiEiFKKKrqzEoAt5Jva",
  "key34": "65Re1ukqJQMhg1Vf5A8mgJCkATD4tXfMsKByp77jjhmATpuhX4z3sBKCqpoHZfTj7Hb1qHtZMpA1zDNC1xqkdD7N",
  "key35": "4EKFnodHzhKuaf7iQcBhazLGzTjXz8Qx3Ud7MQBuA4SrLYnuGbSgqiK7jYGdDk1invZQGTeyanjRvGd2jXh75tK4",
  "key36": "4U8QBrDJmGz5Hw9UWeuTmseuf8cREf6M6ZFxqQhYQ9ZacAhif3Fypt5ncg2yrc1DFBuMSZGnGg1NwujePhBk9cPn",
  "key37": "4Tj9CsSePpPm9WKbToj4sJaKDARGaTYzoFRPHb37UwT8FE39UbNevRwmCJwcL58i4MF7jR9ZqibuWgw4teEh1jax"
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
