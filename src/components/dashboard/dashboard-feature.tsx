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
    "22P6GMUQ1mtmeiS8oUv7vA5JXSEYXiqUbmPfh38QnJbJNj5qsfyBBwCZWDwRjvQw1v1HoKyAkeUPa2nnnsL3imAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fcsLfmxFcEte5bRmstR81ofEpSNGbj3im9Hjck8J9TiteyoYPAyo4CBfXRiobXMShvXK5xciSXz4CGo8xCBan14",
  "key1": "5jn4yPNVqM4gX7rSDTwpXMA5cFZkZsyQNEj7YnMboeAEAgwWK3ardEf4Hwg7A4AChphEruYtXnv7GLtGgwgXj88R",
  "key2": "2HnSaCwCSUpfaBK843ohFLHqq2ZZwNTYTB2dxJMnB3oPR8Qz24DuLCM1ZjSpXPK8XA1gE2LBrEBhCYyDf33Jigak",
  "key3": "28yvg8PF792fS8LbLk6MrBzqU3JXVpF4hK2Ve1XDTbjzHuoVem4cKn1UYH3WxvqETwnpYi8PfPvKUnPguUG6JRvo",
  "key4": "57VKxVNzNMUQUsLqb1uLHBQdb6d22jDqbvCdfph2sFbVDK3uPdg7oNtiL1iERVsM8kCs4QCrA3v7TqqB4h3SS7L9",
  "key5": "Zy8wYMmkVtUFFL5szqErGne6YeAzSc6tpBPqQHPpJF7JKwxMhrgdzz71METBer8sir4yvBRRoRjYz9WFuYbuUBY",
  "key6": "DF7EDQM3UMcHeKmGvxTaQuRpXN5kGjpQ72ojhrALzvMYqqxNpkvUtU11XNZVJjgF1LRXmRCXx9DfHzNn9znjfw3",
  "key7": "fiznmepdkyvFPafknVRu7P176aMNu9RJnpMp4LAHypfXxmbMz5vMgRMWAHciZZ8BhL5Z2gSLrXvzPXEJWQ8hkKc",
  "key8": "sEFmDrsMvH23hWAMp5qC2MJw1bR1TW7Lto6iPrmSeTtZ7U2LazPUk25hg1vtcD9WnepxwbghaEehs6o12Rdmxkg",
  "key9": "2u3DG7Uqow3PrvkTkGUtMa2sdoHTAucwsiojXXQZLhkRvdf7qMw85MYppDmyNDyk5WE43MY5hDmJ6KiBVaPQFvCV",
  "key10": "5CiFR9XSLwBr5z9eJamtyQjfup7djrsGiL7K9yxcMGFJiV7mpsvBwcg7bJLyqv7zggLZSsTWkgQMvogxQNhk5b9L",
  "key11": "JicP9CeC1zHza1RvsNACCJgPCe4Dpn9dCULireKhLhn56h5ssR1pjmtfUdNjWGtbePrV5CXpvoduSSxarPtnB8Z",
  "key12": "87xkuLLFiAggVBWJoV8B4p6GFESNXSbPhmjHH5erQhjdLHyixAe27Qs6o5tAgtcrcaMFPJkQTc7c5divLEv4Cnm",
  "key13": "2z7y9uNqLDcYCnT9mrC1WJpY1vSsYppi354TgZ6Dv6UkVKemCjpTeaJgckCzTZny7zjYDXx6fD9KowqRbm3HRsP3",
  "key14": "5Memwiryz53D1xpLmZReYh7BQRqDzWAzk8WgLjGvKNaoqSPHyGcjfYCrT4erz148326utPX9pH9ydPs6u83HAhmd",
  "key15": "2J96oDvm9oFtB7m4Vhi6tMt1nsrWP4LcKJVabKUC95wiXFBiNf9b1kcFuLhrvDK17KVy4Txo6VHwbvyJ15aepa3v",
  "key16": "5wdsbus3T5nLm9uev8whGtBHbymF1k99WnJPXBy1T2YtbLsjBRAjVGPW9sePJPZQxRUm9wLwyoaTFz8Kht2tSvXH",
  "key17": "FquXSk4TPPLJKqHuV89mhZNpymSwRpRbMxEeZv4NPvQYAyToCZZXBFg2phDASj7wYqWHjFgHZG4M5osavFNEXho",
  "key18": "2HZ2zmWfAiS4KoZWKGxi7tQhz9RtTa8BkAPvRMfTMRVKgpPdqGqce2A9SX7MKSDxqp5X8XBLe4jrq9jdFVNiLXBq",
  "key19": "54xru8rEG2k4BiGvsVh7rsMu8NsDsZM4MUZN77K4U8ngBbNAAw6D3fJueDhd2TyUcKDJS4uJogAaZ9o8Bu3pdCE",
  "key20": "348iQ2fFucowUgggpYfA9sAXSC5adsTDX1x4gi5YgaYNbqUQ1AjuDurYPoodjtUTT1Z1mvJ9i8GNuJRACsWeNpKQ",
  "key21": "625VofaBrFY8dCBre1E8VE7YbKXE83juXY6LL8LVe6V9Zg4wQdjtArpV7CEbMcz5aCQLrJSk357wn4FEcpGs5rZm",
  "key22": "5voajGm1TbpwVmcwbUytt5CRNHqSEXsN6Jx8DzMnZPP4qKrRqj3vSaUEudmCwDtyd9nb9ZBQUphtdQvkatewx5PN",
  "key23": "626zLKYJcZgdmFemhNYj4kieu56pvoXQB8NDEX8Zw4xadMXoeEtEzRy3C6BqxPFA4BKWUswKRY19D8og1yFrwf5e",
  "key24": "3G1uRSe9LeR9W2vaJku64sLDCGmDPym9vGbKxtw5EfMhXHeNtE3sRuMefQh18FZa3Aaqr1Pmb8Xjt1azHtbLi5nf",
  "key25": "3wYYqmLGBSaM1vKcAVMqC8f38XahK8PUFNbfLtFTbJUZUkgXWZf6tPhH35V8D9Wjsh3ojEwhJJSWVf7md82XCgx4",
  "key26": "2FJCPLCLW51hqLDkSRPTyZJNNBpvkJynajMF4aQqfX1sCjAdFPT4X2ae5d38Pu7gYQpvuPpqUUsYMzvnstfybZA6",
  "key27": "5SyriWzdhqPt3T7c2BLa4wVgDaz7vT97MsgYd8u3Axwg3KvLiRGTngh89zKJusXRCcvrkD7KxdLpZJcWDae341ph",
  "key28": "4LKRWpBL27kafTgdbvYCWL7YxxfsFrciRUS1RY4SA6YiJve2W6amr6iPWvffg3RUv2uPn6MRevzt13ZxCbr6C1UJ",
  "key29": "4F8y9EfYfnjoem182gH8b6rSgsvEunX7A37CuDryBDAJUYN4hd4nDuKAokwacuBQyyuEiw9xhqAt1KPboxZUakDX",
  "key30": "3KUWRJAKWKYS8b2k1SjXqZ2F8v4o2Aa5SqVLbjhqHJYEFH7aePrZV9rCd9qaUC9XfsBWits3PgkLi7QS8HfcywRd",
  "key31": "4qLpbxjeCqtJEL1tGwqycaDVPMQvhcr6Z32PukghwzZ1SF7wdzs15PbjHZNaZMgZxVFJd9DwBJTytGdMRwdKcMEY",
  "key32": "5vKCs8kbM44Zie7AV9tw6a8Z2QTXuTovgivvkuEM9cFCGctphU9aL95L5Ks4ikubm7Q4VaAFTC4TZ1nXggaUDAU7",
  "key33": "26ECKfgLU3aqJ8YoWp1xvk5DQdKPAugF9YsE3BSGX9up5c9gpo2ox1vKjw9yNaDFihSHmV8rJ21GmtshgXHZCtX3",
  "key34": "2hcnyd2T9yHGU45g9DjGvRjVwm5eHYgNLNLxgu5DvD8pqZoy1dYqatX4kP7aK1xaNzy1R2bzQxRd13rVRDk3rXc2",
  "key35": "3cthixWs8moCoyo4vBECN4Q51iw4CoD8mosdfBVmVVa6XjrJRSUcrUicMT2WM1BwMUaMAmwfFPiMauPgFdEELVeh",
  "key36": "2KNkjHzzc7mKKn6znjAGtJDZ6i4KwJbdSx3YjgcioFrQbBwMoWvNNFnfqqqhj1dj7GtgZ9kmg3gbk5mbrTNC6TK",
  "key37": "5ZmfFdaSYFBq6vtaihtn69cX1GWo3PwaWXU4DLSciin95oVhMeUYGVpCwkC1oBiG2mrPL5YKFKA5oHtsiqZSYTNU",
  "key38": "bxjQkNDrRYHdZ1C7LQAJdgupVwTAxWdV53MgJDHNcGW9Pkh9RXW4NNgtMHRPi6PJhSCt9URpLWdLRTisxRGyhBq",
  "key39": "XcAF1gdfrSt4BpU74BVzvX63Awhsj4AFjWZi1ChCoSzowX5ZWdDPmBV5uRzAUKchMfqxafV4x9rhB3EwjUCvmen",
  "key40": "4bAXjYVyZK8cPsXpyMf4UBbCz2RQvzndxeoSqZT6q8Ae7BhdkSVbXzdg5wJaaU1nwBdnBavT8EQVzDCumhe8ADsa",
  "key41": "4dhbqGeXNKwCPw2A5LD9LQzp6hsFLACfwGjbhudSUb32mMzteRZu1Qge6bpo8DzLNezuCRJ9PUTYegmAYuf7CETf",
  "key42": "5145UmmdCDssbFpYUk8zqSQEq4drBeHnTmi4i5DNMSCiPxobZ9cjH5zsNmf9b4WoRFPpCnmow6zu2APzukmEtGMa"
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
