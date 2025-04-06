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
    "34c57wRT7SCMe2x21GxsLJ37dRWpthLCG21Rs8pSuHyvrUcbsYVoRHDcRsJykvqWegDkqcFy5vogFxvTtLmbwtn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B6AW7G7J4W97mmwLVTfdjUhowVokGdJ9vcysBsqeQkW72kHN4b9YLnJu38daS2ZpiLYE1fMABJB651uMKAmchc3",
  "key1": "4gAB1fU2ZJTFMvHTAS8ZFKgwjEbsqSppSop7sWdVu2KyKq4MG5zyWfAXsz61LrfRJAHggk4HF9d71QXsrm22uvSD",
  "key2": "5otMKXAgkaVzZkrUHmWUqkqtA4XNNXXZkmQwfmX2BRPCC6aVj3tfostKM76DGyevjrD2zMBRknZwyWTNAxceid13",
  "key3": "3a8FPux4YgbSet4vLxeWBBcERsRVancqdvkYgaqBrpXQjphop5a3tqwXD34wZGDihUyXbffA61hXzS2UKxtudTjk",
  "key4": "3mjNMWATuR81SvQjoVqz8hFHZhA5LoTwNruThPxFDeLH1icnUCXcroLa3mFnvnkmqJYi1EJ1weWkMYaTab8JX8T1",
  "key5": "4pWg8ccXcpMqXSpJFQZop9WJv7hbstXsdrohU76CepGuoxoiHALdpigN6xXk1bEi6NCQTTChJjvudoQRduMu9BeV",
  "key6": "299XE4GYKisCzJPsWLeraKNbJn1XPiNce29F7oAs6Hm3ZGckgTnULMHZVZ2zpE6PBZ36Y2j4aco5VANnyUi1GHGp",
  "key7": "3PhiVZyczWXoiTPhsS65PEhr8aGcgwXj43Ziiab8ec6xZouRd5YaiAFiJXzq7VYuYqV3zc9UFkNrQsQLBZn4zGzn",
  "key8": "dzFdR4oA1BjZuznB8AfJ3fqmNDd8gwNp9YJX2jZiPThRw93mvyWJqSy8P18RMDPKESQNeAcgqfsz5q4nAgCocvG",
  "key9": "4JWvXhFeszwiYn53kubNbqDcATG7obpHbNdxLsHixJXNRkRFgNaMfrHr2jWJCXVdqo7u3ZYuGYtSmyZvmaAFwnA2",
  "key10": "5L8N8PkGTwpb12YGixPXCHaaPGTdkXXyug2fEM9rK3iqK24FndHJ9zDxVTDktkXZQkuLAhqLHnxUjvVxi7V14qvv",
  "key11": "2N4ityvFYmx3etEdbb4ZK3CPAPgD2Dtn8mVfzjviasPChVhAwZ99aPK75AoxHYgt198YEhVAub5fK8NhqSbXCJ1s",
  "key12": "4Yk97KDJmCSDqbUc6D7NckHgrs3MoCVVjP12uLbppnvnQQUgtjHYSK3DjE7BgsSHQcZ3NhSsNuf5cajzzy4SVzKv",
  "key13": "59qoTg5iKQA5BH9St1zBKpJMgjvoegjyBWKRF79otBp8MZaaHJsFUe64kKQZAsMsm7koyUtnm7uLZoadPN4tL2aT",
  "key14": "56vVotDUqJh64WjXx7EvdQQTuBbLNzyih2c43kocYemguXybcz2QZ2VhWJjFjEJv72Yctvnn5upks4pmzK1z3yoN",
  "key15": "3sYSgh2GPcZyV8AaKpz1J5ituMGFiLrvZx15EFABmZtzLLwmHy21iUrfiUWG1CB4nqpihnxoT2mKQ4td8Wb9D3yn",
  "key16": "592fYhfahNs4k1bBcipq6hpdGbeGktyYEQDbLTSSM7gwpwJBUP4HaF35GzPuKEnQB1FZBEekXCVNkJ27ZsTQqJj9",
  "key17": "4TPHmBYU5PKbXYGdZN322YgCfjqrMfSrKZEs8XmhSg9DuWDUZ98UY9qSGEgn7Tvka7845PpmFpV6TbwwKveoxPru",
  "key18": "4Ze8YSho9RjW79jeUunupXCo9NF65BfXXMeUuN65Ys3X5h4WxEqsi1qmgKSzq34BHFRX6PxSJXmZucapg6F2ZHdN",
  "key19": "5LJyMfsaSxvQvJaHjVtJy1otoMkZ98zYZsVQ56SMnLZ4piVqbmUZxPuoAB7sBGiemhYQj4bJmTSSLxRJrRVLPcQx",
  "key20": "3v3qrT7dbrzpJ1UwGrguBA7LUM2aWWtu2WjsbuTVCSoQ2Pi86wbDAYxykW3K6PwaseZWro47xQY2C5gyckkeVqx5",
  "key21": "3xpyViu1TsMZz842bDpzHczfGU25LH5uyubjxUSLsfjncNqASiVWHpY8bqYLiaGBf8fGNe1GTR4B74AseggPWN9X",
  "key22": "2KjvcivgBcCtcCH2xudXWVsUayPyMyxbXeHJf4krgLRBxzjJNKweJEyhZk2miutftKnihVCG7rUdkjaPuvZK3toB",
  "key23": "37DEuwszBGbTdxNWxZxt72kBg3APEfb7VD9yQVbCBXpTJrBfDrM6CwDzw44NxeMPTSbboRn2t56iGu7qND1RMfwW",
  "key24": "F7S8n3dzoJftB3fxgAhibbFtdQtGqdj3eaorx2gtkb8ddxriFNzWUD2ksVYi6ZcfuJfnVcfCpM14Pp5BZQ3qhjM",
  "key25": "YTA46qM8nfVYYWdsDAB6E8YSrYwgLTzAc3zhX84fvpZp2fMbJM7m6nvdETu27gMSf4PBDMuMcJJrgQV44kbAqmR",
  "key26": "6QBPD6X1Re4GwprYsnJttdzFdPh6grLj8PM7ATeDppsdc27hqKVDQoX6SPEV9eZRLVyF6ng3ZWR7kUJgRHamocc",
  "key27": "3NJWYMrcKz7RpCayvZNjC23GpMkEJ4fTDrYuEf43akuujWeMpH5sRMDskGTt7Sp6XegLYrn9HjvVu1TMEr8LEsMM",
  "key28": "8J3CSZd1SP2uXjjpAMZfLHTzgnbXrQvd7ujcMr3SHiDB8GeeT339y17n6JAVihKS5i2XxD2dzA3QtQhrKTNqQQD",
  "key29": "4HRWNDyQT5euun49z3bntSLBfBzMLKXLLrHSdtMjR4HTmXQGwLztpjv7rhMqNLx9JERnqTtqXWynVkwRjVoprzRb",
  "key30": "LJSPUorJonZcSy9enJTWHCbEF7tFZHYV964U7dVgxxz74Bcjidv8a9gaD9yxDJGcXn4AzbgYo63BGGJcma3zL2o",
  "key31": "3Qkwby91pEjjBPZcZAfbHw91YC7q21Fq9ZV4YNULRevfqjkW3FRzn8aPmBRq7FKR25p9gozKeBhsuTzmVLAqGMJm",
  "key32": "2PntnrTJMhHA3QafoBZhA2HvcgZ3FnCbub9HJgEa9AxYYiT3B3ynDuoMDz96hE9DQpVnEEddiapgho8MeDQmExJz",
  "key33": "5kwXiqjcLzNojGgKZpRoyte6AYe63pEv8sfqqDPTffdHXdXwq2fWeuW1u7NRs48jHADvGtMUN2goLK7Ye2TykxEe",
  "key34": "5wuPj1vBFhaxjubpecXnsCK6VFxBXC1ifzrnLS2QDzTxSE8xBMgFHQKUyHr66TfjeuvvNojRMUAiqKZQvyNsHbaq",
  "key35": "4H7cCPugSwExRftGtMBwdy3hDbmfxvKgp9DjSrYXX81RMJamepa5wCT3Q7dYKT5Yewrv9TUZTPgdA9DPxnYG42Lq",
  "key36": "5wjMFRStA2GcWjrS2RJVCjeqebE5Xj2qWubBa1wZD2jaZoqhEmRfSBW1GLiadMriugKnETrnpttYjPjmhnQkZWfQ"
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
