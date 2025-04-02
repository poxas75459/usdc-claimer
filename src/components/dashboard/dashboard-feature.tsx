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
    "5UHKa6AtXVRcvJPn6oUXebBNRjCHqGZ8r9AdyqE7RuP3sqrsE6HhmsMDoWUFijHkSiJsqiNZUAP5WDgewpAy1S5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hrd33to9x6v9fxiEsCgabgDbx2MisjCXxG8J9RrcgvJVRJbzGSYXXqSvcqenB2fJxDUxsbB5gYZQucbzny2x8Qj",
  "key1": "4NrMaof6bTgJGw3imnYwcpf4NrEbny9PiCaAEHL9gNcLEGzBP78pUoLay3o9nNyeHbhYERkijaERvivk8rW1MNop",
  "key2": "41SVxEr6jGo51LyFcAY1mtjPk4TRJgsnFgtjjJ1aktBhf1QU5whVV8xtdHPUZirFwowKb1mcr9FEBGjMXgoiaBUD",
  "key3": "5gLiGjuoZVcxqDmu4nqH259NdJJ5Tn8nnLNfagiHQgT9jbyiS26UMBdFjtsXmVzBXeqvVh1pF9C1n7jYHHbM2eR2",
  "key4": "3Ja3Nuh5oenyCJdwtSoFiSvh8Ahuem63xYyxgHcGhdNRTqsE5BP4LUJZesJrMspcJL9JvvwjZYJPWVrFXzZ6RD6a",
  "key5": "LxmwLn1Jad6THTxLNHtfPaWUX7Zjo2MYJnBuUnDg5LnWSAUz5pmZaSjaViViKFqPJRQ7BLFgvBiHeWSs5sa6pEB",
  "key6": "5s4sxmCSvzo9auo4ac7CJkRubXSG76kP1SXoZXUJqoQfgCNddS1TEPs9inAn2wmgqxZ8gex2yokpHLQQoAgfpErM",
  "key7": "XphJYsvdYgMGX53C4knwM4AM5Vqc3XzWjBiEbJCAMvazvg134Ujaf59NPE5Uzy2bfxYLpPm2PiiefZYear2cVqb",
  "key8": "37L9Q3oHM9Sn6PxAMxqrQjgXRD9zhdskM6jAfCHNpgstrW5nVL8feR2B8Tq2D2WFC6NawgopXZHKpVsCtZe9fGmC",
  "key9": "5bA3eLM6iFDt6pncMfXYaYGp4LBZ3dvJ7DH2uJa4Ge2LewuJrjAGkMSYUdH9K5YZ6q2C61HxQLAVj7VJsRtA3F5U",
  "key10": "5Etk9qG24mScBH4zeCxPqXUpEPV1TfCkairWSdZNyvzbFjmjdMMxgHTLadjqibN7yMi1BokwBxzmeCWDnTrkmzGU",
  "key11": "2Z2B7p4kgvtZRymVKUQkoBcYakwWmETeHmb8VxbxBqHcZt9HiPMJvWqczzvo9RKs6sDoKDYVaLEMg1cvmNcRVQBe",
  "key12": "53vc5ivrzQit4Vu8nbgf841rTvRthWm4Gz99Wu2h7JyZq3rhL5gj4wkjyQN11ezQRGWuwXjoSxyWM1FcdfAdsAj9",
  "key13": "3dcvmCgUPD7HJuCYktVbuhiicnXYegK2m4Mh265JCPVAW1YXFmoLF9Lh7EnkeDypMAyQ5XpeGKb8ggtrgwrHyS1Y",
  "key14": "4juERL2VN1crYFJy3Mpk8KBxtDo8jtzBueKFb9DjTQoEbbV1TenGXznBG2uLVvFCtRhtjy4FdXCNE5piqHWTNwim",
  "key15": "4FtUBBFturgCnEwTAtAwejVUnCPkGeS2FgVBZ7Ab7DRjRQNVYjsxQBj7tePbgpSumvBMaqkryrBBFfXcEf9xgYHB",
  "key16": "3hy85A3azJiHHQ51xxNEoBwTprsjNj7C95Hbb2Bxz3vhUG5DycWiJWVTmUkE3Dpaeq84fvs4bk9PScvmTDS51Hbt",
  "key17": "5K598x8iMKxZLTYeYz43sjB2x9BhnFvnXXUno2W1AYRJkf4zmmBcNMb9YD5DmwzpdS2L7S4CHnBomd8gNn9w2NZF",
  "key18": "3ztZz1qt7ScqY2pB6jDwdHZmx7gELangpc4Yod1hWrhCXNhTrKzB4tTSWQLHQncxKF6uSqqizq8CqEhMC6euVthS",
  "key19": "2mJAotj24uVfvTP1kWFBrD1GNyVqU7YkauSpZjGFhHt5iX1BBhZe8CCJDNyMrmnmD6VPSV8bFaRyRFsTM1JbHBUF",
  "key20": "Gusc41HQ7B6UeehFBuUizd6HavDoP2emvyK3EMt7uSoyQVwCvCBubkr1CxxKVWuxji2yJrUbWYTAyX52ZpwNsC9",
  "key21": "5gWjWU5rryzWUxp6Z91WLNJhYXiaXsEE5iSpbzjD7cm2jF8bFQS1jWavwTHwKyeDZi74MXWKoyrnw3QiAuTBWa5E",
  "key22": "3Q8fVMYu1PcQF6J5ntr6mNMRpLuqkcwBVLGE8SszAn7gaMfiQbUmyyzBwPeFhFba1VKaAmnajGuuhatoGBTW3hm8",
  "key23": "gYpedoDcCLQ8LzpDyAUtj4at4odTCJ8y14YWFHR4qZTeBWxpvAN2XHbKbH4o6sZujJmgErBe6eTDbXpaQtQbu3R",
  "key24": "5i9Hskig55deHW28imG7WB8J1WWMJPuFj1Tg9qXnE4QJfAt4JQ9AnyqgWVXgWWDBNpggctEuHjNXHLAUGtggLmU3",
  "key25": "6ZCttooapTzBxy9TswdzmZzGZWsNzqoSgrPfdwtzUnd9XgEcdE51bVx9M8aTJJfRRfnQk3QHpitXRjNF5MVs9Vv",
  "key26": "5NsRorBU9nhrNQBtpVgiRKZ8cr5CddAoQZ7macvgA67dRXh6ytecb8iRoVRDJT1C7dPue9fufAn5e44F9Lxfc2Df",
  "key27": "3y4Lnh5aSztwvGRCGLbhg2aCsWHu3oR9XN8p6NtVuX2tSUGKKhYcrL8Ya8MfoajdB9ZC3GJ4EsJWwJBoUiY1Qx4x",
  "key28": "2ZvhgZaEyHCDFEAQG2D1koJaRx3LSEsWTdxpcJQtysgWBZ1LCzwZTYwqydkgeoCyMSpkcDmHPQCkmMr3ZcyCbUpy",
  "key29": "35WV29TL3xFr8NpkqQ3mkhnfBUrZd51pgCUDMnUPW6ZMFbNZogxRc2BTSifGUDTtr2URsN1gSByPmo5jEQUBMeTy",
  "key30": "3TfVJz8HnZp6LA8xYkaQmJLAYRiPsSP3yhDN4tsDbipJwH37P5kKpjcCx7f5YDoD5wiYXw73WWdLt1TER1ZvWSLd",
  "key31": "5TEH5e55XwdfZEdkdrshRaeeh65qttTk3Dt5eb4QHcDwAxVVjgwajL6aNFWKFmnXLs5X7cEKxWuCouPVznRNnyHB",
  "key32": "2Ty2YVAShpQdCFBif8ktp9n86vodaUVhZJ33ozi77vN7HwGVyDc5RzHiyHQsuh17UEDQUuhJCPUYWxGbbREdhXJ5",
  "key33": "8vpfD94Qv453wPpTJPfMayiEGdDLmqhLynmsnSFdP53hJtKzXDVByVekocJHdxTUUW4yCXgE8a3AdGq3fwwTg9j",
  "key34": "4dCpSEgospYV6Qh5ZnFWviR3wnCsW4hKUyd5HL7CeAur7mmw99Ge1RBguXTvsvPLaYGBuh7pkfpgcNbgAzRWDESY",
  "key35": "4zLsKgfTZEDn7CKNrdSUZJrqUj9wQpzScyEZnUTxRjzGA8KFqnyH6ZuQaZaRtVtzP7YsUpQiEZFzTm6VF7JhPst9",
  "key36": "4Pf1sjtuSNpBcLTy8utXx57WquS49i5KcUvnwR6PzEEGkSA2LEJeR6E4p9jG1uHYwfALakhkDyyg3W9exQaRtSeC",
  "key37": "9B4NmCnqj6dsBNN1FLo86uMK63qXqRaZn1KuWN1ZyPVyBTZ7ZP8TeMWSBxsyqiadDsSbKwTDjUYqNdvYFbUiuDv",
  "key38": "25oi4cMjErnXzAyTm1PMf2Lb4nHqwCyFNQZm6WoeiBjuJZLA4UAiyNZufTRVrSexa4KHvx5KNvJAze4GWN8oicRu",
  "key39": "3QK8YbGE6ABk2dbD62KZySNzgNQdfSYt5L7CcukMHaXiTdGKLJd7qEUhXm7Pesq8mmJHs3MPx9j4vYDomk6csPPx",
  "key40": "58TN3ZL3iXJM4jm1sMQVeV25cXwNyWv4NGdPXR14y6wwxpPBUhvtPRETxwcgd7L1Ts1G59BZh37sZ4RSy75SRtMJ",
  "key41": "47j4jjWjxgf4aR6vMufC8V8krvpeuJasDVtp44764mHksDsyBkV8oW4iDy1kUH2ns7igXQSNGRCyqot1GYgeitkk",
  "key42": "51LH8rQARJhjyuZ2sLj85yerbLNcDLvmtmomdcECMvtWi9qdjo8AbeqxudiSsHcCjZCUsrBDR5sCrtFCuQCRdraB",
  "key43": "5igVEvML9Xcs7bXniz1zVsJPmBS2nw2spo5dtqWBrLdkyg1EArLwuRXGnUB577epK2EXqhumLcNbRWpYFC3At7jH",
  "key44": "5zraftyZRZSU3KQhK5sFbmNQjriVqS4VNr429xbCCGxepkgg9ShdgBbaLnad1VQaz8QsRSh6LKhkbE2kzwv6j8mh",
  "key45": "4AK5tpG3qtWbGoTMwXxzkV98oHCC6fqZRKFugmFinKvA5yKXP35oXkrR6ki2UqjzqzqYk9vZTUjYYjWMk6DjbKF2",
  "key46": "42eCDkGfEATrB7Mc17CXwqcygg3LTPcHmHJmGD217Tw9Yku1dABG3J7aejKFojpmQsyUhaf3fYwMS4Spad7rxrMT"
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
