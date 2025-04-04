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
    "5U5auirSddfUvCuiCp5Nhv4PCXteDGnw1oC91qhHmAdQqH9p4etmkQufEk6LcPxbXUrixc1fbB8mHYv8U9k98YNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D21mukpZNBCk67YrCepApntYkuEWo3nujYdBGGKCKeUqWts1REzHjjjFUjHqiJLu7dFxBkQLrAFEnC73yBjwpFA",
  "key1": "5MYcDxMGjJ87H18MZagXorzujqDFGpVackJNRpbb8bkNdoVLya25uPRod9AzGBQG6dWv3U9RskYU9rL2o6Xy6xdd",
  "key2": "Pj1GVLn1XRrpH1tEBrFaFpTh5gckC6gGMrKB5sHCcBNJYAWfLed2P4cjSy96UdQwbcWKxsDKV852baz5mkUgCh5",
  "key3": "5RTHcjJLgGXvQ7hr8TLxF1jvS3MDKNV23HvNQfhcE56vHaA7sVagYQAb2ihDYPLpzF4N83uPnSAjdhwTMGFLLS4a",
  "key4": "PGv4CMgw6wpNodvcQTnuYWH1f5Yovpn7DM314jjMJrnPHYwa7KKR6ZWpW4tuHT7uX3LbXyC9y1H7kKvnW8oPVE6",
  "key5": "5wGqGbAN9Ko2tLt6rmxENmyCWEmc4moGij5Dn99xbS5FL31LbgWrno5yjoenDDcqeN17pDuwJYN7ACyxN5KfQ5yv",
  "key6": "1pRxxJmpEHxHZte6hcVPWwRUScJewcEEaSyFYnrAFGDdRbYHup9mDvmHCQ2sjmmfNioruP3PXXLAFEr28tDyqsy",
  "key7": "jVoYYASHGnqiWEFh3GBy2b9Eqnd1nWYAKVgaAVmnUD7mzLvFy8hhgSCCcaJqe4ADF5mdDZNRSjCaYs2Nm2Fhwdj",
  "key8": "2i61Z8pAEr2kz6wDnJsq6euKeZRi3eCtN7e6CrqrM9n1mRsZ1pJf2ULiDA1kukH6G9vq26Lbu5v3MxGzbaooa4d8",
  "key9": "94xjC8vYeav6sZJF2xwyQ3hBg9wii97kj8BjoEeHab6mYyXA87FUyVZT5yX1SuUWx8VJAsTnb9hWUkLfTt6obSN",
  "key10": "3CHHZh46MQNka21HJCq4rPueUbW2VcgS8gtrWFrT7C7p76DgAD3zCj8LoEvcpPnA2JPKqJnK18BC5gSnUzEEHZpW",
  "key11": "63DBqz4tCXiQvGAXphoL3KcV2bpeV9j7nfEJ6yGvXZgyY7vGwTwhtCAUJgRMmT7X6MFsEy4XrmfNKBH8iVXVzZH1",
  "key12": "2ZF99XVkSA2aL5BbuxAmpFrgKCh435SMYctUxC8MJEzbCzkK2VgDNRzkLhbupVS8NTwkLWf8a3XbaT7wZgwAmjQS",
  "key13": "4uEDLgCWbZpJAiUiNwU8jxbB9UP9bCKzL42XsEEjyspau7F6ygR1vm1sBzz16qYLC3u2NFL8jvvTi61UgfoxJKb8",
  "key14": "2sXxfLsG4ApLLgjLNZCLHHW2qz6Sr8aLss2WKpmphyfJNfUXTV9ktvNrxpv9eyMJ5bmubZbP9P1uD1txHGBusEEv",
  "key15": "giC43bvG1g1eA85NJjggPwZW32JBVh9iXyDLptUi2n33r4AdBggh2E2rBiM9SpFe7grr3cfeqtbqAosYppb3Ffv",
  "key16": "4GSLUkrSan21FFfnrGtcwGhTrJpTKNGypbp5Mng38ZfwNfgUnU3WHhrXGrLLok9UCjHJVw84N7YawTtpxYDL64DM",
  "key17": "b4VRYbRQJiQ8B3LwBCPrYb7725HJcbxoDmzzjZfmHnJiJr8WcK4wdyFULqPS6CEqcjTy75qgzJxgfsfvnE57nJ4",
  "key18": "5aUN5SJ4in4Gvy2txh4dGXVX3CzbmeFfPqhDLQ7M6qfhCWYmVX1jYS78dGGWDJkTsnddG61AEQwJDFmj1qd6ubXT",
  "key19": "3WXYKMy7jpsgnBRJpuJ5vCyBwDi74b2Vd28tkZUYSwKM7G3afSYefm4NmDrNNrfbUrvNkLtVawtyQiUE1mKas7Wv",
  "key20": "3DhCrpDy9nfdV7UYvxamcN3ERQFAPqyjid4GvV9d5fcnNhmwbzertiGBCF1dak8ZCeni6aHC4RYpE5CAbnttVBTz",
  "key21": "4ZKmoo1ZjBPd6PeGWu2Ubhmf4ryfXkqpfTNiLsu2RUatCnMZJkipFX7tfzuquCeDFHaQkWPb8WZprtH7h9DmHeX8",
  "key22": "5wPJYYhVpbqqHZ47fdogLeUySGREmadrhDKYmSu8PxczkLhaK3kd9KUQbph8fVm6jJmB6HKRgjtvV2XcJvU8d7Rk",
  "key23": "3XAW4r378NBPV2Ghd79ubmZhfr9UNNwMYvTgb4WRHro2wzBFTQrgc2AS2u1juFH5xQ2BczTpXJsHZaWaJNAmEZ9X",
  "key24": "42NqxTGPKQ1BvkftdcerNy6GC4HtbeLo4UYUrZuvjBvKJp2azm5nC2ZuWvbvthsrjdwXVMvLMNFVZnTTtqyybR6L",
  "key25": "ewy8DgRrr64ux1zpsSyioAxbZqGmHFkGvusvhPzkThZfR9zmJxq83VhzB3Tu83HhZpcik1ibQD8sSQJBAjG5tBm",
  "key26": "336P4ReBnNLC5rm6NbSnCu6XVUZBEUYoYxjcYLBzvZQ2wQAa67ZcYXXS86XPNySG8d9Ukt2J2yx7j7HP3fE6jmh1",
  "key27": "46Rk1T1ZtQbBCrccWGxh36iYCUFRWoR93DbVe3YRRJENXX3MUBSQQDMVKbBpZVVdhwtjgZRJYCMHR7u2kodCbHws",
  "key28": "4c9EJdij7c6LvdVCuFiEpdsDmFrQesoFZhpKsFa5ecAz8pFMPjSpbdYuAmPcsVHpaDiiCxExwcg9yY7X2uXK8Dnr",
  "key29": "3V6CSXiNxUaKhmonn3w3yBMKsWZ9rthAw116yUfF8XMvmjjvpdYcua5SG2BYDMnhKZ7Y5qTKpn7Wxt5mjvmmaAMo",
  "key30": "kakAp1mq3pafBkRmpXQEQhAKuJWtB8vej2u2dgTRS1pSUJBx6eHYzXYfwHNJc95mqD9zoeBNoa1Du722qXxu1VE",
  "key31": "2fic2hEw8iNShQBhRdXAKxD5bHLy1nxJ9HU9Xao79McBRYWtqa7CDN6fFxfzuf5G1pEH1f7hgPdrhFTuZpSdG4H3",
  "key32": "5SsPRGPKhPRx4k52xezamVzC1DQZ35hhCD1nTugUe2okMPji7hY5Sdt5FQLEnsGGJgmdBxBpGuzVxRZzyY6smr3N",
  "key33": "37nrecRxX4mKNrYpUj49j2NnNdwo81jDz6E6JPcW3Ug24PT2kyqcXUiG4sKtgSVgMFJX8BkWCjPiybXfNQAUnxe6",
  "key34": "22hVQBtXJyhrx57x92pYMDcPtfSjSpg8DNd5Hxwxy9w3DoxrLZ1hQGSaaVX9Wt2WzMrB63si3ikZvauvdiNKwFih",
  "key35": "4ScbUhBVXzGVr1G9bLMWAQXPXy2XajLTDqtkuuKa9RTBGR4P8gxSQe9r9RrukV3NdupoCeDyGqMmKs6Zuh7nPv4K",
  "key36": "ZpsVctFUzjrBjJ29cfBStWcn6VYcx7gvcWyCG8XuLQDWdbbcqSJrxbyoED17T55w4M3FLqXUai5pAkQ517MAutV",
  "key37": "5zoqMcH44SmrcR7NENVWP29SSJa52M4hbaYRNPvQD1oZBVwdotbiCbaETh3iPFpriM1g9bHCGgJacuJjAhX137HW",
  "key38": "52pwEfGsgJjwLDzRXkjLcgZisZ9h5GCP84mb2LVqAa61bEprGpn5aUr5Ky7nYBwRGZoaE5wer8Uq1LHE7dWwteLT",
  "key39": "2JcGLxRRJxWcSZLE5nCWcNmT6D9NDqj29g1cRQpqMmJAXRa7HEabwx7Nr8zGAiivTPwfceXxYTNLgfLoTgM9vVGt",
  "key40": "wvLK2a7g98bAHLfvVeTDYyqoQgteHFJDSjmqnh4mjChUMG9Q8QufpVvV2RXGpaz7BLBFziTsQT5P4WJW4egM1un",
  "key41": "2DEHVMuRt8ySiJsmDogdzj5gHWjpGTfNQsax4fjaJ1nFW9g2Khkw1LwcSWMF6VsiKdVEJBPBRRja21WsGZhvoVXz",
  "key42": "4vgT8Q3mNQzkKDuBgcSMQDav1YAWyLzznyVWb8bD3ynXLuiCWwpacRZNPgZxhEmxyPiDUu9KexuYHnsD2TsdBDow",
  "key43": "2YY5ZwWwcvdCPqA4pg3ywGC65TMD2wik3Qtn1yP4ncM3KBLJQb2MfEEfysqpDgGp8dyfD22oR9rEU2tQ8nXCXhnT",
  "key44": "4qUhAEgKFghGGTTaDas6ed5MK74974veQTcKpbuHsKPoqawcdEoy3jxAoKoqf8v3yVym1THKB8oF8RxfXtk3jRXV",
  "key45": "jjRJaedLpuuokbZy8d8M9ZatHUivNBvVec2VF7BB3avExgFbJQGsGuSfjBwDcvNxqWMXG3Ur68AVe9TJgZw7Lay",
  "key46": "3JXVgjzhjFJiMF1a9m3Q22fe8wBfJ2tNNaWmvM2iVrDB6bs2RT6DqjWfXsD3X9yVCYdcD6bBZo2Jszq5Ukw8cQ9J"
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
