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
    "3MPk7ZApsUeWwz5t5aPTSVcFovePnKqpZ8UtJWdrBSQavayVtbZdKZ2NtTp3MnwEasuqk3o9t6ZHyjQEdrF4ZVd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LR9b1UAv7A3U4NDzLLvTLMqYKTpHdfjFUCCKHQXVptg1SJY4VkEq4BMWXVUBhisa4q1xKYEUiLZd5wjFSMP5wn3",
  "key1": "51y9KPomreLg4CsBG5sJKSouh3KbAeyX6QqV6XAXnDyjGkyN3mdtDqwzQQuhGoXNHYLfz4nwYoe15WVisgEttQ4F",
  "key2": "4TP7cF8Qhuneqjj5srp4ZvfwYunaLiGStfDHNu7fkpJxrNi8APwVMkVWUFkVLPM6XaNEGysqPvehoV2AJti177yE",
  "key3": "2F5Z7DHNL4vxVmA1ZuFC7pK723NafjtrECJaxCD8E8FFtiJBdx5Ann77eWefxm9nPgowuupGrBBP4551sApd8aLn",
  "key4": "TZNbjXbL7hFGexGRyMj57JHyfLbUrHfE73yddv1wGCmoNLXAZC5dkSQfvCy5DUuHt1SHT3i6c6ksN3w44Gpe6gQ",
  "key5": "2oTh2ffESTnQD7yNW4gKTakVaN5UCCVo61XS84pjfVNHixuMWoLbsMQqeBiQJpNC9iWmcNdPfG32Y5NtQ2CFf5Wo",
  "key6": "Xmzbs8MdMdHvNDhYEbaZd7YuURiLj3x4UL8Crogoy3x9xmjrhZf8rXSuqdEcxzxrVfwfDjtAgawCUGKfkRSDr56",
  "key7": "2BGdpPsdGgDkURS9MDwrQkD9nEEhNMfdDCCJYwQnjPx2MPV3wZEs3cApjnK3iLHbFxjDuPVoYRRoqZq5aQMe9zBn",
  "key8": "2FdF6gn99pjfAVvmL39tYBm9Jb2k6ma81E7A96Nmuo5JGanK9UUsPnEg8Lxe988EJAYsepE3hXtUg316YeiDc6r4",
  "key9": "5qehJaSXy38eHdKqUy1u1aLzEUkZuSDwqCjfs8mYBdhiN2RB764rTgzxyea7HDeWKkUTTZJRw5QGPTuG7PXG2JiT",
  "key10": "23YS6JVPgKpe69zMoPAwXQRstTJMD57q49cS7YDD2psZjcWAiMcMnKU37BsELJkYu6Sw5aJQb7fxgJb1LMEPQ1ad",
  "key11": "2UH4DzJQrMr5AmL54QwJUGwMksDJsD2gCua6bWp6kzwxzX5mBsb8waeT3MqqRFMjKvtxrgcHSRae69wd97WJkBit",
  "key12": "5C4AB1YynE6UJhdBbyuKFywaDYYHXHHqyLq8JHUwiTfnMjTBJTG7xhQ9xnCCo8AjB25n9qL5XQFGP81GV412iaB2",
  "key13": "62sr6a5uXqDEurBrLy35wkx6b8v9u4irQWaVvGw6V5KeKNuiq7ZRSuN3JAZLHfiYKeMry4auNA2WmDsVamtTJaLF",
  "key14": "7qwa1bzMRhcwzpwG9SK4Qf4nVHGWQWZLXM99Ht3NWHMAuTgaBVYWKahQHfD4B5spEdnCt5Eopc8ZXvJG4nyegKG",
  "key15": "5dGqaryvBAYMDiEZeSYLFeJConjZ48KWRwhxcYj4osHWHFBSm7S8yXF2Vv1C6d9z4BoM3bsdhw7yM7vdYatCacMh",
  "key16": "3vKfLnZ2QKtQsf8nqhhWaKtQ5JGrv2U8bFvXnqX3q3zGGGgPnmy9ofWXf3vEWXKaZyf99b8AoQvkSXpX8CS12aoz",
  "key17": "65ZGkN7tZLT6jU2Ecu8gSz28Cgwx8vu5zbViL5vJC2CtQc4f4TkFYhmZ6fje6QSeVUHUBX5jDLpmUkAvcgEY8x1T",
  "key18": "3orZEWHHsn3uRZA9bUezYX7Geywxu9GHmUFiyvmbF37t2Bs4kMrZfsbUzWSTDf7pa5AT7M3AE5ZcQpcMrGmiw6fr",
  "key19": "rnHNy64AUJrNkwwChtY67aEwn1crZE7WmmrXfH2xxtQ3fFWoU14uQEJbnjNJQFJ2DdKzxT8yi7CmZjjAeEYohPc",
  "key20": "4PcexMWyxvGTrvWBntLwWbftZbxe9BLi3KoN1qYYW3A9XLdjnJ2fm2ZExcZEaNZJC47guS8pWvcRbnZoU6XqCu85",
  "key21": "7cesUKXuq6rT16Rx1wsQiNn4ywAM4tCU6cMsArkHjZKnMy6c14dDZhSc9BwWyRL6ok1od28vefFn1UQM8V5VcCm",
  "key22": "2G2oABXvssHo2RbjCig2S18DovpiyY2XkzeURUxf7KzgGcqGXM3wCJSaWm89sTKikMFN7TKzToCqjnu6k5GeMTHs",
  "key23": "3ye4xAXsNsam2vYaS8ZwMi74LG7VRM1ArpgeyqQMKVftLVtiMhQoVhrP8ueLkkrrTCe3Zt6zHKYCt6cf5xbMQMDd",
  "key24": "5dWRh4LYd5YMXUnH9DNQ4E4Ud5Fq4oAUj1tZtAwiURwh54QoJY6BmY9qR5oG2cr7ves34yQFUBjWACxAPdnW6ntA",
  "key25": "3asTUaa5S8U49jepeFGxAnSxG2U59xE6xHTWkKxes3juRi33ZsgELwSkZ4NZceu59xCyxRnygcH9dDUwx7edGHqe",
  "key26": "3jvdvvuEGcVbLfdA3eNVoPPMECTryBbFe7RDcqXjRHnujkDTHtxA6yTRshCdAQ1hLAKyCELfLUfxnYdY2NDNK7WF",
  "key27": "4nFksdbhYKwJAeoDS6rin1mncXrmsCh9XN96MAdRn7MSigieXpKGyBG8WrGM8zYRj1NRUDmG89cY9RPun47XhFUJ",
  "key28": "5cSC4W4qFK6rKWEpcXa5K9ZuJsmKP3zpnkww4sWQfijpnKa4mVHdM7MS6AjnUWL3VYhY4YQxycoAWX3PU8wkZfyL",
  "key29": "4SLjc3wd11frtWfzR3uE3ZMj5qDB6RXUwvuGavvEtNUAUbDNSaAWxVJ6cStct89Aqt5VvWg8P9XAVte8dAYDZyid",
  "key30": "mULsWFfWn2U4uyEDvgqsfvytkXNJxHGMob2cafh39KPX1vLrVb3gy1dgF55EEwtcXtEf1fNdAqFjJiafqqoaybm",
  "key31": "3Cb7DvyVRyEtKSPrsWph4qHpFeZz8qFfQT1dAJ6asqSx6GU7eqeV1137oCYYnKDR1ScGsdvtjCnFqkLvu4sRnqyw",
  "key32": "6BvFaBmTpRU1w2EaZRmvuR9A2gr9dSYtG4GzQdvWeczMsnPPH6VPgSDnX6zCweMGuaeisDH8fxzZ7G6BTpLeGBb",
  "key33": "5vDyuBqoJr1CuxgqQQfAq9kcgvwWiThS9xwP4gdyTuYj5c6CtumWNc935Xk38R7gF389vNKu5b4NR3HcaAi3p8Q",
  "key34": "3Xp2F2WchdwZYZUsQ3eeUahTZKCZaUC9Mry5zEzwcEWcGftzj1ZdCEFWDdNBnPEE9MD4ZscrD8BzngGEvst3GARi",
  "key35": "2L6u2bZxX2VLqaGN57NHpYoWieg5nbcq6th7X2941gQPtCMw9Vpz7ARb8iWoQ7mzfqoP6mBtyvDE4bV17bu8qer2",
  "key36": "4ovDU9ibjoLUzQSKMKTaGSLWadMixkCsFmqKRQDm6fKAvnikpv8kNbaGgmcnfseBwwQhmFwUqat6pqsejh43x8qx",
  "key37": "2zUVMSiUnnhSdUi3Gurn5he2WR65eV1im2VFZApBBeSiqHz8WMgYEU1G9GH9NdhFHRqTb4XJ1HCbgLhtY8iJWtvt",
  "key38": "4qkLSE9CU7PhBqund9EH4Q7sW6ZzVAXkbX3pPB2Kqix4cJzfE9HaLuTJjeXtJo1y2ZQscWdPHmbVyTMuhF6wMnj8",
  "key39": "5xsDC6z4Ftcr6W8uZ622MEujspw1xmmhopunySYVLAACMwPiAmBwuPQDz6oaXLQ9eknHKUZx8jCFevrXFDRWwtcz"
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
