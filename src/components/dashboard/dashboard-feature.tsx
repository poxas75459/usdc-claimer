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
    "2k4tmyash33oapLF7vj6s5gLmg74KS8DXqFxawvuAAg3vZ2vdorHbzcziuCLWzeQuTJ1o5KvyXq2MUZjxFDX7w2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35PY7iXQLoM5DbQyVKiAr12Nrw1wvKaRTwFVFbvi5EaX6oqM1pEowLtuwZLmWfNuKPrE1DnYx6E67JyhUs2CGdL4",
  "key1": "yyHJnMTgeErqZ3x474sGLmCge51oDrNzkMNK2EuMfdmSgPKad1wAyzbEtVwJu1p33a1hhoEyXuTJ6X2uSvtL6VJ",
  "key2": "VTCM5kfYNRvk8Xg2Z8c1JjeEYDKPcLDCSFiAVVG6ACuqP9TNuv3cmeQYjngWiETdA37ZUQMapU7fgA3aUX8Sq74",
  "key3": "45NLujPrkNWxXwKU34LoaAzZzk2fkD3hBcKjWYiaR6DofHfyYRU15xFCRWXWDtNm1iQQdtZXC4S5vQ1A59BhRSaY",
  "key4": "22poyNyhfMy6vVD6nzwvvh5Zi7vydTfsX6GqHjeZEG14B38mG5U46TMgu5cRNhfwsAhLBN1HR6xFR7xRy9eERe3o",
  "key5": "3p2s1qmQ4jvjfb8fnsfhUKBbB4SQc42uEdgM4fSgty6uUfE4GGhNRZMFPQnMtiRoC6enUPntwvEiNsXUqUqSWmvk",
  "key6": "2c6PurE5PDNx46tZC1hi2Azk6jAKbX9FBNBmTwyUpC7GZCB2RkVj3GBVvFD2eG19WpjUFm72NfSfBtegsGpaRHsC",
  "key7": "TBnbKV2enfMpn5ArH99vcYdY9ULeEH2ei2xKKFkytBdqx2RoC8rpucrFZ4hHkJxdAUBSh2NbAJHNV5E8zgRtb1h",
  "key8": "4kkp9r6xwsUhz87WG9kfKUNFBigiZUpgYUPAkAybg6N6uoryQSwLHzmt2YR4i7bDTRWNZb6KA4iuASRyCmRaGj3j",
  "key9": "3gMY85K8ziSq6gCGpEBxdEDGc9t2JPQNGwkXgEtAhCJhqs9QxNGfeW7VMwyGKHnWZoyXtq93t1LXJoX1tToVUwWs",
  "key10": "5Qer7d7zv4hc8qVjjUZ3hVRHRgo5bdkPu9ybiK3CEti8G3dH9P1K9fReu9vphd1TS8FfuTjbZWWGAdySFWgzcojs",
  "key11": "2QcaXnSFWVkecfTNY4siW4o2BXL9jDgU4eYVKYNiav5fH9usN5734owAN9d2Wm8Wq8KaPQDD1JvBVX4YXssSS1fc",
  "key12": "2r5ZJbKJM15grCQquSLfHSAGXHJwWQdmXWSbu4dxtjHN9a1NcEvDLwEFcm8oxWiBeXpqMHkNjyRZHCSW1L7FtpiV",
  "key13": "GYHtrVwRwVSBb5gGpjjX8Zhv8pa1CKFQhL3ELkT4WDsLKpip2KQgyhxA1tWhikidS18C5V5mf2F9toRWTNJc4dh",
  "key14": "4Mjv2FFkj1JR4moGcnb9eR19iasbrvQ8Y7VMUwWKQhoTsxb45uXz726JsV2LqLD6fE2a8v8RTAG2q5Mby7ehitbe",
  "key15": "2EgyAtAiTkkM6tYuRGB8yBUoeXhHYA7GuTRLk1Kfk22ZQLNc7U9A9hB7o2VBewresdGNmuZ3ZYDZW6Sg11AvL2sD",
  "key16": "QnAuSn8okR6mRabBv62VivGgT1eBG1qQeJWF2rE4Jjaknp1VH949wk4vGEKkRt5mCa3DdgjYEEPRbGfjQhfuQt4",
  "key17": "6628CnDZi4sHGMSEWxSpCKQVQNJukZGx9cN4LG6QXibigPnbUJysUCaYWHfpmbQaXRxEjje6Gj1f5HFuFayJJ8gv",
  "key18": "3rezZa9M4tTpAWyAG5YT9ZZK1eDHoesSh91mUjv15gHdrhqz36iTLKc7uH8RiZ4RBypNhQvJ72sueAafTREJCD2f",
  "key19": "4JAJgNhnNBg1TrahxKK4eTiQbCj79VZgc8t69YdxnpvzmZutC8M8fu8d2RojDbMedjkqPUuTECP5S4abuSyf7RwE",
  "key20": "4izYtnEKAYTrHx6XADRZPqmfpAJXJBhfQtp3Q9AZD75Kdhuh5cDZEw2AAdwuc3Kmh6MqBTjKvGGKEqEA4KW5i4y7",
  "key21": "2iCnq4ja1KaSYVpLpa3seD1pbqWgTgC4HgiLLwjbPQK96Z73NWfFSAbiaVpfYa1RREameaaSysrHi5ZG3mbDjcGD",
  "key22": "587g7Wb7cXRLuhvN4JGFrcJXvSGMAiQF8wiaYkDH1d9MoGn5r9h7CJ95MNz7VV9tjE9o8JqVg1owPKCUVUeTNDrq",
  "key23": "5wMTGsA8ZukA2vppPqWZmVzQu62jUJJE8UNcc1ZxR6UbDmBCLSCxdxhgtq68DdvBKAhCYXNYLgpBZtRXLPbFiNho",
  "key24": "eige9hjwe7pVQcK3b3Q8m8e8Fhp9CNY8zQVPb97ikbqgryoi495LWvrjPnzsw7oWMFtt4TwAbgUsZhBD4QBYh9Y",
  "key25": "3tQhtaocfUnFpXsAhjcavizw7fiF4DCx81RsbCzdFTkfZ7oJfYJVzkDd4SpHkjDz6jdTE9osPq2BVpCwL5stuYvq",
  "key26": "25CXVqQzY8Cvzsmbug5LyNajM1UM5ZxiKKj4uqV7Uc7UZGECthMxW9q2gLvppUJg7rmY9HxQzYDaqEz5qfs1E8fH",
  "key27": "31WDR3qxw6YpqkDr5KwTDQFGj6bXS7J2ogkzqciT94iK4QxKgjqJXFy22zrwgQghtmyWMVWCCM5NrK9eN7mZ2T3Z",
  "key28": "4F3wYWzSnmWgXuLXadjjv8cHvHXJohP4s2yn5JftgYkLXiMMMohpzYkUwiqiPyDokMmHXiBgGjr7wwALuFa2y5sr",
  "key29": "5uYjSUvgRQ22Btf4JESMFVhK7URdXzXJN4TZEnas9RAdKSCasT1yCtvEJH3vPdVmVcmkVTHZC1cymFKhvkXdJ6eu",
  "key30": "41g6rL78JcfZaRi2t5iDakWM92CyEdT16z63V9thnBKMD78bAYadRu8Fy7NGSdXrtiQfMEpN9pZrVQSTmnpvGTq8",
  "key31": "3a2JjQcrGeKnfEUHYvcza2psHhsxCQM9fUabNdnkRnf3d6EsgLrKhzRkZmsMQytnnhMtMVgoq91yycFr72s4VLkJ",
  "key32": "42YYJQQGvfioys7s6Wt2DNCbccToHyEMw87FLVjpUez12WMJyNZjdvMBauoNzuY9yFMA9Jn5e7BvE1B8GidwqGCU",
  "key33": "5jMxmNt5bCxCSKnzfPEsNzxnPU22BNCnBQUezhMK28peQEsaHzcUKTH7tPADrDGBR8xoydNcGDRx88j3ZqoH1mcq",
  "key34": "46Z5CHbby5g2fB5ZXUa5sZoaZZyNquSeCUCrefv4hw5k95YFrc7GB4kxTMfLq8KjwV5DA2EwnnwkxM6ZNSertAdR",
  "key35": "2DaYfb16GSPphyqrFrToj32CUW9wMufpUQbfC1E4pEiAzH9qoCgVHjiWN5uCCXwNo7QYNsE4JqrcdvWejENTtaC9",
  "key36": "61EngxcpCyExY3gRRfkdKAapSLyzwUC6BcSWyPnaouRUfe8B66gXWZ52VgpqFhHd3eDarx6YVAyHpTVWpmjW7XbK",
  "key37": "2CWTz6UdbJdkKkh5wCLkMjRgiGY6ZXWJakSKQpbE2dAzW7wyAFj8Qr59rUxTkb12onMhL73fowSDvHKd4RQXto1L",
  "key38": "3Ys2sUuk4zWUBeWxy8Rm9eqzqU58SDhsUPZ3v8FS9iwznrLnvX5gFLcf2Hixx75RcpkZ675zzAbMrPpsT7MGeKwp",
  "key39": "32gnBdLXsiXoAtDHHTEiA86EMkwwnKEHHcwmsrimvrMGTwxrJder56TLnQnrw6JpiScvPnAtwQww4rCezrLYaJep",
  "key40": "2n1gpiyHdjyscfCLWUMb8xCQbChCyGAZ82KcuLvQV535YzNqnHFsEVvJAtUnWxjxLX8YYnzYeNZogBuK5bAtPwFL",
  "key41": "38CS7RmVGD3Mzq3zPv9UgZpKAJVMiB11PmfcsT9K3vUq8mgNPzBJytvr34kdX52AMagcDGxaBJgiw9tb7rEQBXKE",
  "key42": "5gCwiVQWsdUbkF8kH8Ts4ihmdUwhDfdXG8ca9ySNGZ8adgfbnxvVkMZ2STdaLDfJGZLmUj3EkuqnXaQoH3TZmmwg",
  "key43": "4riWuDJBibtJyNh6T5dSrTyC3HDQoPYk3Z1BBNAR9FFVmtjfXK249Lr9pXmN55kSEtXn1QRfDnLagwHuTp2MPXsL",
  "key44": "5JqGVKkwooLbLFhno9ZAQRfUAJM2fHLi8W9683iJsN3VqHgP7ugTMPYNa56VZU3ahcdmQNx3Lt3p2bux69YuiQQB",
  "key45": "5FLjwZFKKJ7LBKeKaRUrdSZ5eAfihFqkTGestCDNusEPyKybQGae6TtyKtGxh5CLj6qan3D79VEgk7BRmgBaKWeL",
  "key46": "3B6guN9QtGYjM7BKqX73oFk4YEsvAcKtgH7iDeiExXmySEB1MmWfavc6LaQg6pu3UYta1vZTr28qxSf66asda6Fk",
  "key47": "5Dh2RwxXzX6T1U4Z1xCA18EXSLjKJUK5yCkyGqcAEnXmEzGW2QvXREaExGp9UDv7aXcK1n4AHuZZ1cibGeTatExH",
  "key48": "2vL7AYY7TDShWzieftP6upyoc1p6rPdcchfxPVcDBdYVFSSFowUZtKTm9FGzMdN6qmnzvj2EKZ5TLAfhN9pQz5ku",
  "key49": "4TkKmCeWDoj6FyTX8kNmMz9tK3MtvsZUKdTegyV2h4t7VW3rY9BmgxjAPmVTn5vcavm6M8WvDWLsXrRu98rc8N6S"
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
