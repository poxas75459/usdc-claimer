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
    "ocA53L6jroRahtxTcqpJDkSRjqdDSM4K93zLhM7zJtgbGrNX1Q3xkfcbAy3A34WhW6xk3tG3QCs5DZVwWBiY6gK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x5af8kkqMLctbyVGZ6tCe4TCLXvp7ZJT3HDLXH6Uf7m3FyCgGjijHq2Zz75iAhfupNr4MT12QCPQ2otQA6rXfpi",
  "key1": "7ezh58wDd2MXv3tFR4XKtPi2LwP6eT2weKkLsq3YwjUN9sXtgX826tdNUDgoYgadun92Ahwy89HdkgoRHdhWmkW",
  "key2": "3yiyi78c1Qr3rfbC1J4WpcVpBx9MVPDixSeEkegN9vJE1G3Ng78vCRSjzaLp8mSrJKLC2w9rb3uUN4NpNtAqipG1",
  "key3": "3gtqwPkzczUeHnrCvrqP1gadba5QGGoG5MsCpQ9V1oF4q2JT2UjDGSrhzGoZHWzMFoT9vrurnFfbLJKhbLPNihdx",
  "key4": "2gRY1CWXbYZwwC4HLP4V5dVx8QM7Eg7uk7ib68FtmvH63ZVhX7gZqXw64LvXhLtFQdJVPhMAKRRdMoML3KFU8jJ6",
  "key5": "wMioCcASPPu8C4xZEVSjLAg9jPgDjrLHtJiKfC3Ggc5RCNUHusk61E5NuX5BHbx5Xhnk3UNrUKPNSuzexPu68hw",
  "key6": "4m8marMywAbadhU43qkN95TAQcWfNfa8qXRFRRPkbuHDQRvCtWXtX38MedMHvgtMEae6k1fqhbjFN88opbTwB6YK",
  "key7": "4rveVV8zZ2Gfhr3kpBdWYSmoC1Lv86eYqZxR9sY4Vk84PPSe7NXQEhmNu15J1x18dYqXhPqAeyMCmJcbyT7hehhm",
  "key8": "419kYxc4sdpdrVc5srzJP4i1txLuCMeyKVn2mzvjocLLQm86WXaktsVV3B8GAd4hkUiF3YhvjYfeEL3QBLcao9c2",
  "key9": "3R3LeZgEBzzCVj7pCZ5VeW9LBwdjiih3vAmDGZYf7qNE1W6wuNN9f2b1c8pn9GGmapYC9tcKc9uQw3JeueWJtpne",
  "key10": "3H7hRG5rvair1xaRP3wrsyuzoCYBA79uZakqEhUqSbTbfWqHT4wx7G9JvH4omumgts64M7R3yHqpJ5oKhfxFNA2C",
  "key11": "2ADRwxbjmiwaZKVWWH3UaNizADc8AabyP3h5YYdN4w4Tq28ZALecDMxjbbMHG2bDxchAmENfRHVvWsEToeQLf1Dt",
  "key12": "5HNB1vz6R3JdkJyD8bTon8jUaSPqL4g75G67dkKdFcDnxQG5wWjyyyssv2xkTWZo9S751TPAfARftYU1adVh3zEu",
  "key13": "2aTWjbX7We3sbyLRPj2xZexz7UJycYutNHo89Ds94c887jj37PiJ5anMZJsAjbyChjeBG66sFkWcZd2wPGgL9Gd6",
  "key14": "4tGvWQg7CiSHr7TAq5zYwmxA7akWAoVCBVk3HZ8764UqKuNhiwfSMu9F97tpwLxuxRGajnHg66pj7i9Y63iGxY22",
  "key15": "4Kd5H7g7oZckb19DDaM2rTtqSsJ6TYy6km3AHVeAbj8jJJvyUitFYMKax8DgXTYGM6xQrX2dZhM3WoTPC3otFeJR",
  "key16": "4tDfDC9HvHYwFtMJR4Xsvbhz2SP2jWR1GBKK7E6XpU4t3quxQdjZeJ61w7GaW8cagtZ6cnFqdMAhyTuhz5biJEdg",
  "key17": "436TMiK7mB53XmKbTJZgzo6WEKvN1QDuoPtLzM73qor722G3V7KvTqmz2jkawqgGdhRdhhrVkABZWop3EiWd7RQ6",
  "key18": "2q9eWGZdKPkjEwGCGkWQ4cqLUgwDi53XdXmCKma75nrCra9A6evKKf8qDinKipiVVUFiKW9BwuT8AKwxLVRKRNPU",
  "key19": "5VcpKEtVJ4w68oD6utTMhcgtVUr6XLFQcJ77jEEdQmEAGLQgH2Rd63zEAamAVJcoWaAydbCxqhAgUsAmxqaYtuZ4",
  "key20": "eEUf2jfCTMP5Jb6jUNRQ8GFzz8eonwCebfr2C78tWtzAUciQx3VhUqo7kz5yUgsBw1pymq5gGdv557sfZg2nk9b",
  "key21": "EEbmMvPRGysHqsrehjbYPpDJVH51gjuZ39Kvp1TS8hdRZvvQmxJR5jpkdnKRcX2WpZJXohJHebkexDzSrWCm1iB",
  "key22": "3as7xDpw8JzrqeN7iXmydqYFfZSru2S6VrhhK2BZEEDHarRhVBSLNaZpZPwpVjtGY58wkPHRDXaJTgxSqt1q1ktR",
  "key23": "U6XUmwa5jxLxjbhFtroHgb4JPuSKG4uGnwzRTz1g1MYeBrtX5GHSdmpDS2Q5YMBEmF3ggR1oogvhbTeEEGbTn1V",
  "key24": "N49Qr21VXTEmBWYK9Dapb767y7c4Qs4x4G9mPCbwCGc44XBfxwnVdzDVbSs27EpFvwa4VYyjWnSdCouY9C8DWRc",
  "key25": "5aPwR34P59gxeXrrENG9mcmJRKYHfEgYpJJVu2ZYzn2GCfcoBfzuykAtdhN7hLhjKxJnZvDaq7fAdPQKZvu1Xmju",
  "key26": "3NZ4YdRGff6hfLQB8zLKJQysb3kD1jimvYsZfMwie6oESXYjBSYsWVGq7yqzJc46zV9uMk6H89YwktjynXKCxPNr",
  "key27": "4TdhFywqsDBQcjeXqqyDGx3K5bYyNSj7R9U7Rq6ZsduWs2ftDDYopWa9ViyB8TTNbaHv4RPP2j5b4kvEy1pMQjN",
  "key28": "2h4kqPJwJFU65fZGBnM74i827T73f1SRzBNUEFqBjUhYCXxhyVikhs1upAPQ7xGH54BVhPQ4AywKjb6XYrd3XoaS",
  "key29": "8kZrUfAmzX9iCZ6zfMGQuJfH83a9bVk5ZnsZFh2f58ExF3EanUw4tV8mrXvtg8vddJ831mZdHD6yWdj3AEwv9E1",
  "key30": "ioD6miuKdSyXm3zWUDkchUtKYYP2Zpc4BWFTWW8UfWYbNGQq75dWiMEmiGk52y9XdzsukPUA2Wssw4bnCc6gYx8",
  "key31": "3W1ESSGBA4wKSNGjE74jVS4oKMzuhkgLmM3pBeX8Wvno7BCMyDwfNaRu8KKHJWZqq2rZ5bcBKGewFVeRPUzVjXec",
  "key32": "2xQiXJo1nY3hdQKATHHBKrwDQ2Lyiiu5zv41y7m9af6o65L3SrwQ7aRmvW97K8etZZS2MYQqQMkrJ3Tt4uSvVuFo",
  "key33": "4Rxb3ohzbkxcL4x8s2o8REaMd9t1YEC2EsNQYdDjmsYL8QpQePEEzuWkXGGZuyU4jkH4ESqYqoAc2FTVadjYzx45",
  "key34": "2ngrvj2XV6rarHtayAnfZqDehsQRv8oC2qoCS3MY55wnMDuaynnzk11KkqJkZQKVDRrHUZRFnoKH8F8hqHjHZAxM",
  "key35": "3H7VjCnRg1wPhJ2GCAG5az1EhpAMpn5TQa17YDtjhp7VTkZHDocK9SgcqtEj58sFueSJc9c2tPYmprL3uTnYCrhm",
  "key36": "4NfZn3doPKUDRCFpt6pLjUkbybouphE6gqWhj6ATb3R1oQEJQoxXrvz5HNzG5XGu3ihVFL5QLw5JBXxfq1Jgyw3S",
  "key37": "4HYQNgZrtpMeG5AYxy7LTAxNQ33QX7XdsQsFQZ2HnHyVMxdK3XdqSFywkZXcfjXF2VD9gkmbSdkJqWZ2BZ6K6pYb",
  "key38": "z467s5TyEDvPeKL6gMa59oo47zAv7BLxDFP4f9R9q7S7TcXp7HvjQ3nbDNLbY4nVMYbhG7NaFzAshkv6qkSJhXA",
  "key39": "7j6maFk1SBsj9Tb6YcTUXxV6g6aoQiBPpULNx96PtrAUYZn4VB63eMiTJkimW1fZtQZ7M9bWr4CN4p5herKzgHK",
  "key40": "2bUu5CdsoxbMkUkvecftKTPMw9UHpuZps8xS9BBJntdvN1wGHhTo4hurXr8ZqwKBBgkNSNBY9TENDMd9Q9nkMvUS",
  "key41": "3CwG1uCici2brRPVHNSAU3mDH3oNWSS5YQjRzdVzBFmtsRU9bnfUreNddtx5rovbxtyaw54eNUodc9q58hSzUrnr",
  "key42": "2LYiuU6AUVRAZ83E4nCoJUZK19UnyYu4aEYSV6ZBpLqR95bzMoh3LzTgqZohTGsDdySHgZhRo1FEzR2hJAx6CLK4",
  "key43": "4kdS6XkoQs1TKPCrY2koeMaqwnA28EXbqCJY4Q4yuujmB7ct7fao48Pbnf9GKKuRBYRpFnWaJDHeZC8qSj7mWWYD"
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
