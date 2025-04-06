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
    "4QbMrqfUDakJzeYeiZ25Wf8it6D24PCZLeacTz4hEanxUKfhXeTKFC6HfXBtRnN7CoHBDKyXnAaFPj3XULctEKYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2crLxHJeHXbGhyFhZ6Dcwdz2tgjpo1TN65Tn41StDenmEjW8J4eZUDeFXbbAxhCx8GY6CtiamV8SMqmskyFqUT9q",
  "key1": "5TnEQQPb89rSFZrqhutxz9equ4nPerowG9Q7yyQrCGBZrvGFMZQwFTCycDUpbHJqnqxXnbyVSwLXH6ryPvVyHyWy",
  "key2": "2Wr4xLeM5tnFXZuw9xPTQjnc6HMnfW3gUmC83kbmBj1fACHErRRUmvNYQQunyU3sYYsNugxpa4Uc1KgQFt9rJypN",
  "key3": "agEtPDF6LXj4NDkdGU5GYsBwcCNukNYJ4UDb8SQvV51WsEpesR6NAGhpeNFjFyCJhNBkEVWQhSmF9yk64juBwvz",
  "key4": "4dP3DuywjH8utr9BPJnMTv95H8G19BSqSKxqoUGKWA4xQ25GHkdTBNZkd5mLT14FCzdY7VKyFdoUffCdL2mvtg3C",
  "key5": "3kCii2SUCTPgTh1cSfcfBYk5SMZyRdBiSrxLRYofgruPEzsJ71grf4VBavzaoLeL5XWurfvQCfvWiafkpX4bMJhv",
  "key6": "2KFvenEWfUhZSRoC5kLoynDvTaFoUnUdRsRQduxoszcNtxRNYB2ktwhvaNk51gTzrVwyTZ1MfzsoEtRQBMmxLdAQ",
  "key7": "T3zLzM8SzB7Zex3wTPijAfBdTXXVF2TuwzfMPD9pEd4bmqM2JbtU2QQik3wjCLWxpwUiq7uGuUNdHLp64nrPXXJ",
  "key8": "5vzNJkY7eUUdUYWsSc6k4xBVmJ8ExZe93R4tAtEWkJ9iD1wqeP3kDfzbQCqbKTVAd9CmsW6ALeRzQWr2CESrsENu",
  "key9": "3wBRgshs32nQwkGiynUvkCsRUGib8qG9rV7TMPfGjShM3saAKNNPVx5LHP5QLo2ttaHoSnr6E94eeBSptatfaPZV",
  "key10": "5wJDwQ9JKRFXjfBhuoBBSqFbgTYuEjBSPyi6XjryyPEFHoKBwYNc7zjWTPSXQ99Cvsu2hgDvkpXf43vkFaLyKwNY",
  "key11": "4tPMB6CN1DfacGzsHSNd31D3tME4ZDc8dPaoAHMAo82FeGV2wCpeXMnpi4j9wDcfEBXYQhF7u3qkQpniWGoozDDD",
  "key12": "2KJ6HQU6VENG3NnH9FhHTXD1MH2K1SRU73g36M5c1VDZ11n3yNTEXJEZxCTgTy8GQosRcG2qz7ij3HkbPwCsEy7n",
  "key13": "4tXJXeBknPfHxdNVWkWMXF9gfDhGnL1cCqigLGqbSJjMhQ9VwYcpLEG1CrrQuF1v36anr8ZddpEXCsfps1Mdej8i",
  "key14": "eoh5AispAyWSbpxTtN62ejscGe9zDkv2Nvxf15muLeM4JT2dL2StYAVnbwBT83dshg2qn5WawJCgyeRfcwtMeer",
  "key15": "3xgcDUnFfVSNjmdRUdTYXAL13thtWKTm7pKTb83u71r12tR3DdFRWgwiDy1GYEzYjHeTWJRkp4MSHeDGQP5GXYfR",
  "key16": "5kzs9bzMejaCmFCQSmu7Eu9W8PgbCvB5z3d4J9mRThrtC3kuaCBaw5hgkvKtxdVaoQ7WYw3pxpjacrCv2HiL7pRC",
  "key17": "2V5xgH9ikdqN9keB6TLZwSRYbBh1VXYKBGvRYZrQatg7d4KdoWPb2LzeHotWjJ2vEzqVTF6Zn2n8ovBg5wvmmTGA",
  "key18": "5FTFDHXtETx9eGMQxNiDUNVvTZP1uU7jdn5XF333omv4vzdv3gQGWiFKCZPERR3p1pKdEAHcBVfi6syuozqPCknD",
  "key19": "4ZwghNZmfq7xBSZaUHnRqmNY4vzMTf3y38ohbwr6iCf6CYGtcaHhcgScLGGspdTjhozGXxURM4QjaLvGQoGAy29V",
  "key20": "4Z9oxJ2pziQbxY2zEgT2Wz4z661gHDbXECkTmWpRxtowyZfYjN2q9QwNr49RAHPjLb8GpmeFFojVSFdmTdw8wZaa",
  "key21": "4ThhKQ2zkEeWbAHPcBadcDhXVKZQvHBdsyaTeX7hiGYRr9S2GuCAgtiLRDYr9w6We5sHUaKzU13tZzD7ZnD3bY6V",
  "key22": "397ebHFqtqCWpsEsaNVeXC9k35a44rwGrtLjvSPew3VhURU1QRNAJLxt5J6v8qDwUDzwZjkVMq5kauyUX7i1aNhC",
  "key23": "2Bi4pwj6w5vtuWqm8raFnBVrVXHUa6QmpzUWD4jBXVzxuq8AXauQ3UJDjo3Y3czTDVp2igNhWoY9VE2Lh6MniHk3",
  "key24": "4N9hBcDwc15L6bevjrySUcHcEKBGLsB6vTcS83SXHxyyd4woDBQbAWC73P3iTMPH19XfmFBhGB2zLghkenKGLjLU",
  "key25": "2zojbfa3Wi4UeHTVCDBfBV4ALAGjXbFsab3dGYibfBBQ6gpiqpq3vPWbJQ1Mp52pJ3ekJ5HjyWVh7PsikUW34cgo",
  "key26": "3pEZyC4Zc4npLkxkVjg3wsqg4N4pXf3nSArxpFL7RtPCzU8HTp4SWj4roLPBhZ8Pyu3qwq2euiaBRyAUeMZ69D1v",
  "key27": "p9SZr9E42WXA7KZdftDzcFM3wRCcQJQaA8gBynERqAjRd3LFhA6PmZCXZ4dL1SAeEB3JimbXbQbBbwFjWCxZ89i",
  "key28": "cEKgTCtetAofMut3Fpv7roXcGryS3es2ZyK4cTYKdu4xW7YD1aG4UFyg4hcxrWkJkMyTuwdCi1FBbZ73cZEwHSs",
  "key29": "3yuuBv3eFBtXo97ubykjp61JjTzvc2EPmcoQKU5g8ZdQScKn5suMpDijW1rha4hC2FuWQvGV737DWvtfb7JSfACF",
  "key30": "2JYZiWAchgYCprjFPfb7TF87UbgWj73esUcNZzzWXFKDSQaPa8Sd5XCsk8tUZZHBcB6pj5XP6SQ9n5966itSKndy",
  "key31": "4MjGXhCRrCkms6YPJ9UjWoast8bM5rsESW6EPVetdcxqx1S6K4JhKrHLDEjJXP99MZw69w9eSYLy7HFqLCwsAF1t",
  "key32": "3TB2BTdaCE9jb4Uqhzko4f9UJyQ6vtT6SStVTVSzCgSBmJtvQwGj5uD4odSWKyRwHi88hT6pDGvCKK7cf7JPNX8H",
  "key33": "3piFLYPrRxBF89UDyQXxMNwZeWkAjyAGVnF8VYoXscrzZQqzqz95cCp67mxRcbrBREqVBFLptTX1Kt83q6EwVbBf",
  "key34": "3WwxbvEttnR5inJUEDhYMTtr4F1zi8dZHxYWq7FQxgoRmgGrFxUNouFpa1KxCkkHUUC3AJENHXx9pKeE4mJu3Hxt",
  "key35": "4jDDCRJGcPHryL8pDW4gvuhhLPkF3kBnpgsdr3SyYmc2X5fVek5GjtAMgcVkTQF8jN8PGFa9aL1TBUSig18XxFBv",
  "key36": "3ZAiYn86BPTioop7FudaqebvR8RP86y3DrtsiUwAWLdtES2gNtXYv1Au8UAyRxvSok9tP45Esvfmoe9DhWknRhkj",
  "key37": "2FwktBunThYcYYB9wpQmhbmoYtRbwdWAkLsQeTVVbKytfjqDUMwyxjjPtTQsLjEo1X6pUrWaTD7sufx7LFhfRqsJ",
  "key38": "3F6Uwh8sL6jhDUbCEFqryG7pUgWqCeLX8kntStYBVkCo5z4rA2QYFaJzK5Qj4U8VysjbEx46GkZwztcJWZRrQf9B",
  "key39": "3kvkses8CV2CcbWc8XQAKTnFBGLtBrhL4B6GCoxX6DV2udAzEGEJVd3VnP1gmDzyJzkUhW9iiUMvn3WVypxRja2i",
  "key40": "2qghmjiamWRZ4JrMxLSCC2T4VkZ9ALYTwWp7GfsbihqSY7uQBYQTzidnG53VPXk6ieTU33ZgLCEc9uontdvJmWLt",
  "key41": "WcqtyxwES8gtnAzRGEiR1YVamb3c7Q6vmZ3mRy2E8Kh4YYjCTQq4wE63P4kqgsEugu9oUHVkobPXhKJhHKJz7mk",
  "key42": "Q26tn7j75njydNQENQ8WZAqh48a7ye98McnZui7nu47sEiDns67ud4BRpPmKKk4Pzmy795xYUeow2RhqiVaxusk",
  "key43": "42me1doDVNUwNy6tVEmL2ckz9apNRuX2XViNZpxBZ3YzXm8fjGdcuaXQkGf7LLiXaFkHW3i2fyhv73439TSJLjA9",
  "key44": "4gwShE2mpijmv2QHYc2tFjzk8GoiPDSJbQgrTtj6pyF6kZX88gPa1SHEzSFdATW6h6vt71mGLbYv895Jwcdvj21Z",
  "key45": "4ypJGta4ymabA59w5kuSJ4satMexFyACbUanCJSi6iEq8y5JaMzE4tB4rLrvEzNd4G6TzsSJAa6RaFySCa3K9GBa",
  "key46": "5RQSXgSDzS5e8MBVzzzzFqVAZEJWzXaWo79u94JSNyjCB65cJhUUtDpzWm8NwCR8YVYMzCMK2zGvwynsK6edmEuE"
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
