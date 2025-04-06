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
    "5kBNcCk8A3emR3uLPKHfk1S4CFCgUMaMkD7reciWMCP2PXipU48Zrr5TBN3Mjwdq1fdAsWc1BxM6bizSo9VX7piN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59kEWqZ8PCzBSdNmLMhUHdCcC2Lgb6QBGyDS1H3oygnPDXqwK8i15DX37ibntdPk1gbPS2JKr1MtPVTAeQn4W7XC",
  "key1": "5YvEfqiy76iagRR6rGqucRZQxRZUuttTZtq1FT8U52macoaECzEax1UAxAV7kMzLGsnzbJkNGyBCEe3FLNTihprN",
  "key2": "24p7XKaw2fNGFPW3CAUCShCcWN4Y5js86eEytXmQLJuLEeufdcuVEf1Enu61YPx6rzNhdVynGZVuVR9B2ShKaRcU",
  "key3": "QQuJjUeRr7sEaBcu14aPYotzEDvYm2U4UjKeXd3gu1aVwmuXzpCH7oT4ddNSge3ZdTCu4QDc2SLA67qKt7abuET",
  "key4": "2HwQv5hu9TNE8DT1q6oq9Sca2XwZCqZugtmSTLCHMjET2jR5rp38mU11xFQ9bx7SMxzwuUi6vi5cCfaphW5okjj5",
  "key5": "2rK9NhTFVryQyCd7zprVVjRB8SZXnidRFa1gxBjfyqSQpvc77opjNy4qdwyMxzUJKZRyEcs1yKDkyGtW5B43UbxB",
  "key6": "52CRVcNQu8CJqWkSWbULDFGQuF22UuKYzE2H1tRQRzt5s4qGGMTSDnfpUomtrdj9XQGXg5LrjXRBgArSNTPgnszq",
  "key7": "2j8FAi68H4pvxuAbhY61T8DqiuAMTXygfb8H7gMHrxRijMRpN6uhAXLBXbuxtA1WFhRru7V8Urte4WqaBtm637rD",
  "key8": "4Mo3ZnkptPAhmt5tqZsTg2y792LMQRt5Fx1NR8hcyG6p3wRCJmmJRSkdBRNDY21mUvnfHJti1zVTVKVPYfkBPz1",
  "key9": "sB1u4E1DNa6JHRARLpPGLcCnXuDJNosQHmhYp4TVwZ2txR3Qh3Vg5pMXPLcf8Sm6BM2VQfgXAsFS5Cvm4dXGeKV",
  "key10": "58QeJPNwuKD1g5xAC4ArPKGvasHjRDEcvZr4nZaAsb452Py5ytSFBy6n8Lv6NGvtVVdCHvVrvTbLU47nRTziYiM7",
  "key11": "Hdob9AWK3jDn4JSSomLoHc6QBgXBCfEqeZLuY89j7haipu7C3XoBTFWzcMirg4S1rqcEcDKTwnmQJ9RVKnibLaV",
  "key12": "2XosWsk4hmSGHfXXnn1QHUaiTMJMxeqf2AZHnh6RtuUgKCjn473MgqVMKYi1iMYd3mfbTcirbMJozAR8hXvcjbzH",
  "key13": "Pquwym8BDcnLziXKvptLXVUaQwkrmcS6koq7ThVXUKr2bTS417zTemZp4F8gJeExoMgzeN1nqbQKmMZLBmjb5K6",
  "key14": "651qrfknz1bqX8AM3JZmGdYxgZNQS2dyY9HcwvjajH5s14GScDkxTHeqna7yr6sWpvUj6W6PvkoQsSNHr5mrga5Q",
  "key15": "57ckcA2wEE9QmCiffjo59hSWqwSob67YDp9gSHzdVrFTrfNYAU25f3udgnyrHgr5X3nyzzrbvQ4kJAZCfq4dSwbd",
  "key16": "58eN8wYHp7TYUjGRvz8aRFk2zbGzd2farxHQfokYARvrqPfEAEir3fBHGxn17P1RtZhKW8wmbyXapjwkrA8BUmE7",
  "key17": "3vbyFmQo11ALWfQht3AdtHAxepEizqab2fkrhHWKUvhd9HawAtR794ByLZZq6xVoK1YSvteBJeEiuYCfbcn6hbmR",
  "key18": "mWt973LoWdw8KVNiFvh9HYnCQQvPxJ1Ht9F1u4KoToFxmss4Dt91YYyDiGinhGcjt3YAUEhpDvAFcvpyh3KvzCC",
  "key19": "2iY4Xa2jDqPou6TuBVMZ5BBRaXG7aHkWBmKbbop6KiY9ZPRjqZtQkh1jtztMXgVgL5h9VuHPxfWKCByw87wybAyW",
  "key20": "2UmU6geGRaAhwe88xFxADQtVR6gEupi8dMuUhLnfVJCo5Xb4jsFB1bc5Eh8JwQZPEpQiVFb2yAvjr635AQpi31VN",
  "key21": "52jyRNVSbQncKbgnTGD1vRTowRcDKd4ChMPuzczQYwictgu5xqMDFvd8ZN8wJGVYz9787oJdCFT4tY2cEeW8W3X7",
  "key22": "5M7PQii5NVYJQ2jMmzR9Q3WbdR8uweTLtqDfo58STyhGWBTMJq9j5PrvY6Ecjy2PBe9aRH84dMvEN47Gu4J94xv3",
  "key23": "4S11wTfZpmpevFYwcX5m5nHa6AMFQ1DmxDfpS9MyWUq6Qf2FVffFGmcy98kdfyD117MdBbWh2GXTBGEgyyqqr8Wb",
  "key24": "5dhV2wdcnax3kYZ7MijkLwxrxLf75H8Xi1EwTWnLGkFQ79b6VpXA6fxbJzbJAQg7FtUeuy8AXp48GpQVQQy9WEYA",
  "key25": "44ZZzFjC5szU5cckq1GapJ3GABB65NNSPbw9M3VT6Q6sPgeXVKAMCdFN6x9tk3yGi6h6M3EcDCDduZqUCTugGHdC",
  "key26": "5HLAzNxqJXCbKmbuQ1PEFLwfSh5JdGCTZ8zPWCXvmQtHRy4E6gzrhFVMmFYoPQKJvUGBvM3C1doemqq3SzMGE3e2",
  "key27": "5DqxNc89CahZXJBUBgvATMCvYh9RJHUibqSsQpr7syJV9Xq24AHPzLL2WL4Ne3VbkjZGNDipSVb52HFNJoB9dTEq",
  "key28": "3crFwcYTM8rr4MtLAP1q47y6iQL3VYrR1nKyxFappNqLdgomfLZapN9V1ZEmZH5KXkqYXbzBDLSHiRnUyTENjSof",
  "key29": "4bQN5BVeYQ9gsazKpu6MpJhNkjA1n2L9YFvQJrkhXufBQ8BRLhdmxkUBbF4GYxtbaFzZACcBWsVCPeXmWSq1odbE",
  "key30": "zTF3EYQxmcGr2qT4uKvygwxMtWd2b7FLb6CH4wAH6ncg6Ltc3N7wBwNDxgQgHzKn7oVFnz7r3yMG7MRhW8muFBF",
  "key31": "2SA2JKJBNeoByFpw8LTaUminrzXKo6432in3MeiCjN8WBdVJvvnxKi1ifZTZYE4rRrzLwM5uBDs3msSRerjHKZuY",
  "key32": "4aWbzy9JtwXbYJfFoLd7aXTaJFWoRfXEGGsXkhWDCmDhuaqDz3YJfWnkRnC6CEAh2jfPBhg6EZmr7ur9CwskMAXS",
  "key33": "4pMBJLrEupD2nfYVGBCxJRKnjFYtEJrDuK7KSJcL4cyykhsJwsiMmxVi2pkwExi88GQRNX14XUkDoSVGDmyh273o",
  "key34": "uVNCNhiHtBZh9TquS9kieywwBxopwLoX9rza7DdgrA88HU5emAHvchF3MMNwnSKzuKXSuEvV7SVkbyAbQn4iN3s",
  "key35": "5y9eUDnSRngrMtFKiQnKrxfzkb4GdJxLjdutkpK1QciDg7e51rAFsc41vk2dvxioP7LDXkWuZZqy6gaJ8Reda8in",
  "key36": "2KisWPS4bxQBCnBLfLUnkddbGH2gmYyi84SFarNUbGKWNHPzgB2pWL4rdJLtqqhvByMUfCBFmvx1HX7F7KcaJvcF",
  "key37": "2AwzRwFzsHxqtanDYG5forFnJP6iGrbrKYz894wc8MBkx26LcHkTqH4vreHSzKmk5vXJzhQZ9tmnB51wTp3PYJCK"
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
