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
    "2G3e7LUmtGAeyjbUyspUdLHuYgi3KUvXDBDwf7K2LBfXE2u7iYc3fN2ScGXqggESLseZWPan4rctyjiFrXECwBAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wzs8T6mXaZuKeH42QmieXv47BVJGTaMSQfFjAqyg35GhLjL4QsiVwF8XWfQrn5q4JHXXWUrxmahM1Enfs1ySC5z",
  "key1": "5EqMspjb1cjUhoTrJMWu6ycdDyzDZaGeV8hhdQipsvzVBhetSX8QGyDLftEESUFWsnMWPsJ9tvUgSfSthc4HcwzX",
  "key2": "3xWshFNjTskhXH4LCzCE3e5xoHYQukmWL5pPsamanHUV8y3onb5AroVGtxu5UgiJWTUh3GiVYwvf2bDxcqZ1sWLz",
  "key3": "4BUUWjexGGBDHN8isZqfz7svgA4zfYsZP9phwbePkegQsvXbZv8ytxHfEzYwN2S5hsUna1DvTH8i3gMivwDQpgSx",
  "key4": "5JyuFiqH8safPn3cL3h8wQnWGMYc8mWLZ9ZKwaRtbufSZJHVDmR4r1YW7kHxYoWejx22gDRpUiYGmrsrvzKYDBU1",
  "key5": "5SCCLv8HNqTy7hgPkVwmai58eXD84JJDC3Eg6W6HDu2BVUAivs9S6WNbtQFaB9VtzydFu8B3L4jmWMaEW2WH41g5",
  "key6": "2FRhdUdiZ8FdFM22d8ZtSW9vibZto93W5JGu89MzEkUu3MfrbgyynhSgjKJpavKxekxvpPj1whPhgasCDiDBQ7XS",
  "key7": "2coo4gLoAxGVSUwtUNTvtVdX4jUxwhoDHEc9DgG5tkETREidicw9TC7oHR73P7ck6vdrkWZPUo9yjK68FNfCbCQY",
  "key8": "3iWD4ZUBmknBXbpKuNGQNE1QkbhvsX64QCCpcy8QyJ4LpxLpUCQUiC2U6m2yFGQU94Tnt6jcQA3qmMAUjJYB4D4C",
  "key9": "57mu7vZNp3TJwHohi9uo5BUV4GYFNtph6zm6ezrXns4UDAxmgF5TK5Jkn9Zy1cW584FzKVSG7nqp37kMwQquKHr3",
  "key10": "3FDcm27u7hcXasv6CiZeA2A7jnXsoi16mt8BG6h6yzmVU52gxCXnTzq2PL4Wuunh95mXmGif9Na9MNHHXuThuEon",
  "key11": "3JCP42NA5w2Cjia5rr3WTCVZBMKAETQ7udMKDbYrSWJHefj2EsajjB1p96cj3QMiY69ejdeqJ6Df5vvHYeJZwed3",
  "key12": "LCGNBR8B2P1Pgm9BHMs3FAsr2jsuaHY9xrHw5jxCGecvNa4zEtAEbxUPyGJPzCuZ6sUedTjyZ3wi55QriK8dqrp",
  "key13": "4jL3ApMunScq7hnRGmvePSEBcKcN9zLUnvJShbn17Cpnzihz6hwnVcYjLNG2yHCZRsoQUvWTDgWdTfr6raTxnxLj",
  "key14": "4aRTtQiJUfMp46oPZWsoNuHKDk518fKpzdzW6T5oxBcsDyQe86yTfS8Uww5yvTPtz5aFRonmunk8NReV3A2J6iMA",
  "key15": "5SwcsUmSjMSAwCR1TgwZ644ZgE5SrwCBMxWXdX2Mv15Yz9suNdvDSysCE5t1Nuq7tcWtojC4aZsSg1viuV2tNw44",
  "key16": "5y7ee7aU7oAmuiWBn6yz7XzmLNibsrkyDt1hswCW2HB6mWDSx9eNqAjbCNJ6oMTZhtcYP6M4ukmgwf3JRvX3Svsv",
  "key17": "2skmdErS8FrtwDQCStpneM5UBSSxtawruLRPXCuuAj6DyskdE66VK2wd5kVkmvM8V1YUbZqLAFwypjfPS269ouYw",
  "key18": "336jHRtwS2cGFR5nfwL9nWEtzzBYe2bCpcPtFm6AQVzfhgU5GCNdEH1WAcMfctgbQ8sWUk4pTCa5jBDhkxqcVZLa",
  "key19": "41TJR2V3gB274x6u4Uae6onpCcBsvh8HHRU1H12RtVyS5CGcGBv8AzFLvKyhTwdKuo3CNQqwKaHZSQqjKPYSNXb6",
  "key20": "5hXVhNS1Qa4r9kY51mnW7FPhqPg6aKGArF5ioeAmHHq61QLTMk7hVsQxt96TydX7YazPEaaBbifF56gTNnWNg3GH",
  "key21": "2qk1PrnD6nJ1aEeqHq5QYX3sBFXXyRiJP5f3J7YDghKtLyA91PsVYSqGEw5zY7hZfKDqEKkV9jguxL8K7SRLWFbf",
  "key22": "2fnpPQHeML6CGpREEd5swwAbw4TZYkcwxZhhCcZAEVqDo3tHm7giu6UwDzHVbYMkhw11Bp2AeVzwBXidVMgqMdTR",
  "key23": "4nYZyyUPBxaKDjefZj11uKFXdiDqnhAjbedfF6JtwJHWy4365FnQ59Vk6Tm4PRGsSjZa8qZvChm1Hez6xqZM35X3",
  "key24": "4Ezr1WKqW4UtECT31CJoA6axm1dX19ArqGQMH6fgapwo7wR9Cr2tVDQQ1GrjCv9FixEH8L4AxL3xd9ka4UtDwcL9",
  "key25": "4JTC241p7BL3Nk33WBNUuvxTqZxpyYMg4e4apcdJuKMXHYTysmMp3A7gbVmwfxKxmSbihbGBT17q1J4zatc3zVsL",
  "key26": "3cFeddErKYQ8B6Ww8zAuvhAfq8YsA2DQTya5szAcy9AkUMSdFC2r3DXS5aEnQeQgaMRc3nifYGRdycAr5DfauoZ7",
  "key27": "29vVubqehtHgPszNUPB92TFGjFx4oqYQN2cpUrmhgNCSbnugFEBF7CBK9PPJBu5scHobFszUgMNsXpEqc6SRm2Jt",
  "key28": "4pRoEeTQwR6D9VjNPgBHju3HheEU7MoDh1obHkkYbKAbK7eeyXLp8PzJzZMQrohif1S6bnXqUboDyeXWuPGTGGjk",
  "key29": "5Z1kdZuLHRoiXsrCZkUXJm8wPVkThJxevQ45KDeuwrbUzKLPDqDxe6JQvnw8LYBxgbQLP8gaaYV9K77RkA5HejSP",
  "key30": "2FC9C7685zYG6jSSSUotAGVrjPZGJMg8HE16SfJDoWx8XquYPKY4aRFxutg1URoj5dCMvuXJj4P3a4PEps2hoCsF",
  "key31": "2JkGm5fEQYWuDVDX2otM1VX9qYJK5Hnbov6ZJ1AurSnYnikZ5J3jTUcmoYsG8JuX7raDytZc3ATiakkj5dGVmBFc",
  "key32": "2ZhFRVHn5jpGZeYKVG4a3yqHBkS1MEnM7w1vsbzGWKmbhZh52HVTQAcYZEGH6qomJuUzNZytpA5o9fPHX17ZGZW9",
  "key33": "5KbBVkGDJkJugjMVh1FfifBDfcZSxDmUzQn6xAWwoniJXVrgwAhAo6FCADGVXHx7sedDLiKc5dGhb1febMec6m4n",
  "key34": "4fvH99cDPNNbu3Mwub2k928vNrqyUL9AJYJbRkYchA62JnPVk8TpxQcshDdQnGWbJx9YtXskJNNdQb6syR5yTjhQ",
  "key35": "RcQnzMLxQaediqthKNvhJUFUetmvDxyCf63iTc7ZoR8rHw3fzpLk1KxfJYihM7ZEu8YbhxDk75ocoLWq4Xhba7i",
  "key36": "4h4bBt3t26aXYtAGKHMeL417KxCudy1Bzc1pjjgXTT4t5C8x6aGHfh3SLWXvirsp8y3Vvc7C6nnZo3nBXe8wCX9N",
  "key37": "DS9S9tPkaYDMQCVk5Rnzi4UgcfwezhoT9oDyC2ijJ7h9zw5fD5PDAHvFAEJGqHW8V4eo1Y62mDK24wXSWBhdzGh",
  "key38": "59A9cX8x7LsSG5reMdN7xMsVb1SvpEv3VnAn4zpgKnyFJQSkJfeSHugvPkFxWg2uqUeN3zYkPDSWj3xmUaaNLHf5",
  "key39": "4AYCW6EE3pMwZAzJGV9SYjfgArktMf1Q282Xa7Mf3G3JQiuQFD1ykbBaPTicjGZXsbPRtZoxK442XjFgEjawqvHC",
  "key40": "3uaBTAJQyTX5Nnk2EGqdg1eJ8MzHTAY6CpfLrNxFq1ppwEzQAUT9ZuAHzdu5tCzjAsrTC4BJosK83sR1m35WBEmm",
  "key41": "3qVDfjAUvPneHmDKsQ7LMQX7WV8YpQXt3mL1HJQ7LueMi4ZW4t5Fo7KxDspDrAMkusaFHg2g7t9VsjoXDgrDHPKo"
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
