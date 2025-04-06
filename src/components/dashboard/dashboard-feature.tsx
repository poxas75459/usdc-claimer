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
    "2M5casVkxq7MUUoTG5X4GTf98nMzH4pygLzdTueJHsox5px4voFzugBGFrisUq6igGjLKJ5YEWxDAPYouff3JvZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49CFd7fqP6qoaMLFYPw61ZP9pp4duu2fKmXfg833VRymuZVQqg7jFZKr6ZY7Bzt6RMrwDN99az5UtCcnR7JLvTFY",
  "key1": "2PCpsqq7wXULweHVY8YFxVauzfYdT2q68ohGAQHP6SZE1YfUuPuTvT8zyJEf6youn1ZdwXdwvZNZ6jPt2JX4mEs",
  "key2": "i3fut9TDFiJ31mmrZ2xb4SQ6f3VLzZXQmTvXMKqH2XziwzCLPr7crNmixjdr6KHbZD2LB27cPFKA47SjScA1bj8",
  "key3": "4tfRe6UNmvxofWdQhT84qceqzoUnbqjkPKoz7apXbR53h1ozK4uXKrZni9WH9NiVFcQctF4ZEved1JAciwrfxsF3",
  "key4": "2RxHBEy1rfxrBjm3HDGLtcdyf9ARWq7Qhc6QM5w3YeFzPmJzXeNW4tmq4oMbSjeCwynxBwM5VbcQ1VPgqEuXe1XV",
  "key5": "3kdX3MY3qzRnWfjVAFkA1hQiL8f7wXAjPzAC7jVtdqBzCpH9z78xPHz8gykq66bN39RCxeGe1fi4VpbdJoMawJqK",
  "key6": "2KMcPU1vTQcWJ4GuvgYCkpzy2zQTq2Dd3K8KYD5Mk8z2qurfyZLhx92XkwkLXv9aLTMtozSDK9s4x9BL35kKo53D",
  "key7": "T7G2GsoJ3oR8msNCzogbZiFJEK11PhLXx5rFtCUtkp9jY9bUNSvsmA2vuuqjq58Z7Dkj9HP2k19wbtmxSHQoWAp",
  "key8": "4ZMhvaNns1AeM2r1EfzBjXCcikJfgugVWF1Z6tXMGowVvSCDrVDwj21Ay8eUxzxtnK5mHjEfrbYQk5KjnQReHA8A",
  "key9": "2uTf9CCUvyaqYR1CFR6mzCR5kBhgjxAttRx8MgMPK5oENptzopLkxevVXmEYyY3cQZ6wfWpELsqDqyZJCA5L6t8f",
  "key10": "456w8CdV7zADfTBhFb5EKgpQU1PUMvaE6XkrpbR92jLuNYnk6BroE3e477qitpuKENsYZdVXD1oiQkZmeuH7LGsF",
  "key11": "2GQXDudyBcSn3uQ2dWkPRfkrqoYxq2W3zCM9jzRmAiuRUdGdtqPs1ffTsPYsfeqSyp7TFnHTp1NzcTa5NhNbxDco",
  "key12": "2TvFpsTU8vtGVFcryjyFnzsgqgB2yayigf6TbME3wgA7n6aY1uTaFXC2qTUEntiSjofX2w35J61Ag1VPvBY5uDFU",
  "key13": "2dGR4wWtre7cXWwvc3kN1UAXsvgw8H1SbJeJDgEirv22N8e9NrNqeErTHPMd3sETngAGTu8cqj8pLoAr5pa9aP9z",
  "key14": "4mw9gydjcdUUhgdwssGd9Vy25MJS9BMF8rjAwoWSbuUyqj4di4YjjgDArShfbUHAhefXCrRuCicbgq43gJZ58uZx",
  "key15": "2XMQY7FucVycwW1QYssLi7V9p9owZHYMVfKFgVUgJjTtPv73MPRFtqvZ9pdhYLnJ7cS9aGua2g9fLExBQbbGpdZw",
  "key16": "24rp3XHXKXhZerap5Hu4YyhJqy8iUJcUxJ52Fwcef5E4yYhS3sb6PWqgctBoQnwf7Stx2oq9bP8YHtgB5nMHoJZR",
  "key17": "26QjSw7pxbvowhHHkabjohAQ99b9xxwXrHebqf5ucXf4u77hEG5oGq8gDcVEEUXVq7vMACsGYW9mjmUR2DV8UAJQ",
  "key18": "5VYhancjVwi2Y8GPDDU6LtzVFeDoPTkjK4dp8T9Byao77BbDnobyhAuSeviV82qK8T4dSXxEHWrtANSDdn3cC1Q5",
  "key19": "4Ehdvx9yPiFHSyWr72YV5rVve6F48RdVLSQN4vMzimL2osigdczaRz2qgdu6aoZXCxC3oC4G5Q7GXdoSiMkfR9U5",
  "key20": "66LCYy13JAuV1wdmoqYSMeKNzCpsLPDyXQottqrnfPzMFYHbgTierU5enxGh3Nxgjgm6EvxsZsBKp5tQaLHNCSbA",
  "key21": "hTngx2eHNjeuWa678oWh6FfZ1Q2ZgzFfpGpMt55Dd9zW2bdKnm91TTZssdYbCCuaLemPLrB2CKVsjsTvN1tLYjp",
  "key22": "5GDzTs43d4CLr1ukuYxjRz2aeMGFdcn644M869qwnVMuwtqEKtNEWZ7vCniLRUnKKCrBBpHx2PxNoCLkGUowj5j9",
  "key23": "2rBoekxvvCLBLLtF6DcvTdAxp19qBbCsKTvXRKf28cGC46JnApjuxpTAd7NEVaLrEQYhahEdpqDYSWkprcHknwbx",
  "key24": "4StEmzBwhMLjMLpuVYwxzpJgQDvUuwzR1tTDdUdWeBFRmKCBTjnew2TWNVnC1qJSUBKdePRj96qc391pWEbybrLQ",
  "key25": "5KRmAKjXs1bZg4r1f68tYqRBiQQYZWc74wjLxCYNssbz2zUHR8CnEMV33sZK2hcWUkHge45KygCARtpRY2hG8S4c",
  "key26": "2ZzAkugfJszRi7BkL7gP8eUhqJLBr9S21mKuxvJUhyURMovi59tVjt4WzyMMTyCPatYW8WgywfpwGSaRE3wVa8ZS",
  "key27": "2i9VS879LEuks9J69bfZxJcLHbCnqYSD2cCoav29DpncXYeyjtPNsHZ5qo5kpkY2V3i4dkBcWFkb6CvLTT1GX3Qr",
  "key28": "45W4gTvyQuYBqcwfsB92xLjxwy98VQWui9qgJuRSSBbpkomKPe8GY55X4uobqTXM4fAWXy65DRXSRRee4vpXtF4E",
  "key29": "5YgQyXBmwL3pWcKGBwSsHDb1vpiLRY9dKVMaSL2KcEBovNQXWAtB1gNb8qCkKWUqrr6QKzfiderJj8jZjr3FhHup",
  "key30": "38JiaarndWKu5EffuzdPx5HJFBTYgjoahtNoKW2fDxn9j9qyjUn4PGPhma5Wp9dWmzuw9jyWGaNcDVmaE2YqZvTq",
  "key31": "2VtaX1mRTvdoWSs3cru2cTh84s5JRsuKJZe1hCyxaz5sm5bjKncAYMcGZSWAqKLG29P8HYi21jymZNDsuXaVwyso",
  "key32": "4DEXATShYWkrPJFurjMJpMSFqfnM8ySufsNqDc5ZLDeRGLMM7UH4eSA5J7YyrGxmpZBh2iHspaN4xkTH3mKd6ndh",
  "key33": "2eqXz22rV1y7ANkorMtkQFFhV8mTUtryUY82tVVuv6CVgGtVe4dt8Te4AEQFFnST1F7S8HotZXHdVw7HGjNAHnTA",
  "key34": "4g8BMG25JRDaEzQa7CDQfTn539225JCndhacztKAw33um62KJe4tpc8s6kyDdSEZpqGEfYsH9NHunhMjJhRyEJMu",
  "key35": "2CUUTaWmWxdni2ZxCdzzFoxpXdWyxZFzpCukKrjKbzD1DEQL878q1kb3mg5yBvSGKowx9no2adkfJHVguLQKC5FU",
  "key36": "5qBJQYJMiKht8b4Wtj3vqM6rwVAcuRuW3irDjzNfWpJSQwKCXe8KDUf4Mt24m7RqxPiEnkDibvpkfXF1A1B6fteK",
  "key37": "3R48WznCnegJSVFwkTU4Fp2LRphEJWY9uvENv1d7Kv3kg6t2bYgDr71gwpuCCuzLzhw1zhDPJJe56KKqYMVrE17o",
  "key38": "5Eo3D9obrS7XZSSLSS39CaYwaronZfMgwPhsYGPLVKTpTyEdcRGQ7NLvEapxJMA1Sey2WTqox9HTkCy8wjAtB5eQ",
  "key39": "5VjKswMmVSFffGUECQCZoahgCnpLLuyaaHHgGL15BxPpx8rF8S4Lfzt2L4Vj4k2CadmeSBGQPyNrx2LjFgke9grz",
  "key40": "2vrz2UwVnuZ86rZrP6Ls5GhuGCDWujgGEpZoXmNWQ1VidDFgKjyvmtTGu3cXeoSh6mot7HLk1fEnwgspfPywr7kz",
  "key41": "4FxZrtDVLuxaqmton4sY1jX6rF2dU9iDhpfbj3RfMKUxdoCjQDSfT6WrQhvDgHBD37UsPf7AfB6KiBozGszHgEaK",
  "key42": "4GKEmVaMTtdq8rwgupPUKFZRqc7apgtJBNpUYuJn1PTMQBkg5LNuEA3fbMYtHVEYpoh6BJgR7pmnHmPuoDV2qh9K",
  "key43": "4Z6UFRHz5GTyMqkHjitSNQNuZUc2tp3j7RNKN35TnTSti24ZeezbummjUKQTqiycQh1Dx1tJYtqwgJqab5Lo6UR4",
  "key44": "4ZwB56YJyx6o9dLBqZUxomqXQjUUT95Zx3XfnUYZW2u8WwSYyD9ZMeNEoHuyMX4J9ejo2P3TCYCsAXpoFJRWV85k",
  "key45": "4qskKpC3T1g7pR2asYzP82qMek4gmFWhkBd2XC7V8GeFPbWRFGEHZS1i8Phc83GTVQgPZNexbVFwGJhsTyeDX3to",
  "key46": "4Xcp6F1WeicYvEYztrJocPFZjwmGSJR3eFbNZfdRz3TtKoP6odBbMYUeQ4Fz9DV1itgTi99QfAaAo7YyFWPz1w1g",
  "key47": "67h3YThDbzcpBfW5WUUSUAbqLmjGN9DFYPfakNCS6vvzSZLjZL3Qu6YUnPQc9SD7H164Mpp5r4b7Z6Ef7CH62p8k"
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
