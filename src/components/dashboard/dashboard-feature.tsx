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
    "Bbra9fHxVUYEdRFSgBiKwa9yfwii2wCCo19pXf7iBzUmTXDtiskhiEwzhZPPLe9b8hmPF1WcDj7dsgfvrmaz5Wd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BZGrTiUCZwdngXAWfgdr9vTWtqY2S5CiMUWxnLWj4tLbATrHJJcN6wW6Y9H1wCxyF6gURKWXiVK89Nthh8bScZD",
  "key1": "4DnW7UMaGvR2AwcedwL1hwdqHzdvwSeCMvetDBV5Lz9ffhHvjQiRJ5zZykLu4reAP9NyMgtHJwVWqsZkwQP172Ug",
  "key2": "66YbNzGMaH88HZYuS2vNGmYXE8aGB2Bo1N1erA4jJWnUpAe1QQWqUPpcrx4DrwCVGcVCaZdwhByAUgeRCXTR5c9H",
  "key3": "3p7ygMrmqy2aLVPzNpCsJGQwtMc8vvS3VAvTyBZ715w9DmyzvtfT6YME6Rx89RzrzTddeod5jLYJfh668UrhMR75",
  "key4": "nziH7ssD6vy9pPNBrkBeVmVGXESsb162BaWfLFrnjBbkr4hSau3C4aui7LVX5Aze2QwppFkzotnCEroLBp5Jq6s",
  "key5": "s5RBjGn1ejuDjRESKXE2o7KraQ1S8v8mbehzS47NsjerYXBAe8RwwawgEQmZTiwHpFMZzVbtHQTndbM6wbhSZfL",
  "key6": "4BCZYHE81pCMrQqUTC7f6L7BTz1b5EwsRmspZdZsrdcmx22CaDkc9jKHP9Qs3ZUSDAKHnuh3HeH5TAxGs2E3DhDG",
  "key7": "umqP33HPWYER9kyF7AXSTVWKv6RmmNSCQ9xfNjGjNEdmDxxVT1YXbdTRJEphqaF5m4YfhGC2cLfxhCGDJpLca9W",
  "key8": "3aUcRbBd5NvPqwx8E38zaMnPurmSbdrarafBVXEuYjLt3Zm1D9CqzQWjuv1vX3uWV9pbxjhFz9vzF96fKj3rDEtG",
  "key9": "2BURFo2wu4dg6GFKhdHHVYuQFNi1MmQzPWsrC4V8L6zZRm8jMLpbhf5j7ER5DCcZaSiyLQVELu4KMDm2A1Eujyx",
  "key10": "zRVGJqPVtHmQHwMVBaL8tHjZFxWr3zD4oCyQghVn1cAdAFwZ2XifT38ngv6f3dpg3B3CS6coHnGbq3rW84Tq2He",
  "key11": "4rxpjp7p7mRDNh8wBcTgotzm3qmMZ47xm1GAj3bJ3P7WSce9J2ih4fHG8bDC7SM3rNMHj8GiVnZrTajKbkZyE6cq",
  "key12": "3kD1Bt6ZT2rm3RY78kanL1KcYhWUuSPtzGeixUd2kR2xatnoeu4XDuYGB5vezyaCqnqvZbfWgXqjwAKhnhdYKBzQ",
  "key13": "5f3suC1UrHZkmL1Wtv5a8CXExsr1bVXRPpUypJWyHFTbPJHRfu4bbBAXDvepRqnSHYEh4guXC8kAojLL2axEtNP2",
  "key14": "2ahMHhWbf5pTn2bTUyytJWmxJPeKSEAa3XXMapzHiKnuUtYw7kwDYV1HrKD1Ys6uCmyYgWbYD5mh9TiucbutJ4WJ",
  "key15": "3aEqswmtKJQ2PwvkJSvdQ51NqrC4w21FLGvBtjurWLppSxMkmkgac3GPv62KxyyiVe4yg8FagH3ym8vjVfwtHVDV",
  "key16": "3h554iaULoP255i6ZXUpTsjBnvLiiBgMetpiPJEKWHnMjjWYt5qd9F6HxYeE6vzFMQNGdmKmECYqe6SQYWTrMViG",
  "key17": "4P3d9pHqjghBq9QjEo1Peven8xbHwznfMHLYWUvzuqa18cfDKzaA8w6NPJDKSkudDCQTDyGKm6AUuJeWKkDpuqfv",
  "key18": "BgBwhk6uXa6bFAuvLXHVfgFxmdqPyhCRbJpLfcTnxrbM2msfmD9GEPzwMhaEJfYyNW3t5HUUcJuD9Dzof5uS2Ge",
  "key19": "BBzXv3nhjrA8phpbVLYr35MM3Ph8rrNFieR1NzgJCry3AqFdQdXyuevtW5Giy4LbnLcQ5d3tQDRL5YnLNc72bHn",
  "key20": "2JAi86PkL9tXWjzvaTpAG25sp7vJQa5gzWkjLVQr9zCcennuicoxPyX5T6wCStuPLd86R41ZXeeFBYcGDbLLSPZ9",
  "key21": "5QNjGsEQQh3aJqnVDch5yMFhax37qtpzTLMjSPfCrWhTHnQCoBsh2v193dXcEXuD95uNLb8pFnA9HWbSXpac3Txh",
  "key22": "637vqE6A62ncvsiKESTnV7wP395mgcRbtsDpvQDRdWA79U8ecPjo87nirSRiwrpXXQWN1h7hFpb4YmHFD7LtNjFB",
  "key23": "3qUeQH4QsH48jeQXPo9j2jiTS2xtLdAFiY4bWuhhhqsQp9w7tJPnCDqB5wZzUe7FZJ8aHAUHDM1oEfjWsDKYPYQg",
  "key24": "3prVQbVhbq3UHuu6HEX3AJNhhS2FMAumrWwB4tgNegP7Hc3pmoCS7ihpJkoRoyPSaPhDtish9ZRKSziBYYsXkbe4",
  "key25": "2j5ZheW5dX7m3HJCsZpd7v1rtMpLSRfQubjZ9kcLCKKfp8C6tUq8t4zgQ1ExkVV3Y1AFUJtP9uq5Ac5MwbCHgHQs",
  "key26": "B2CePN7dUaasE8pr5UsDYmbcse3KZ2T4FS1SkwxHwg3Rx8tKarby9TuhjQaPvHJyJHhDFzdfe4k3tYHV6UMyyNy",
  "key27": "Zo2aDg33hpNqgNEVGgGSAXg57j3BRykhyNnZ6DG45yxTmnFiiqRukhndbvZtHDbhjyWBQgUySRaux6PqR6JwFnD",
  "key28": "5tDCpeyc3LLhPFTtCxRh6h1Uvy2MDUpsCQrwLDKs6zfxhmo2FUbGy41pXXg8dMj31vwCmHMHChZavv5bcwJmVZVh",
  "key29": "5dYyEeQBp8QBLFi38Ub28gvf568JVxGEpm6qC7RxJNVpqCMGU6M7jxgT8PmdbAVatSgcaLZcGMCsNpwGiKMyz8bP",
  "key30": "b3TLQ6amgpTTNNjHyPpYJgjURksPHep6zYAfGba8awjBwThurcsub2JbWibWtARARcXfJoR6umC9vzSZj4ChsFq",
  "key31": "24WMybCxvaUM6o6TrUhbecLXHyeCgkTAnfDJDpLpwAd37THZTFWA1xSqu46svkvuqRL9o6kfw2y2jqi4xQFgiH1p",
  "key32": "5f9dHkEvLAGj8QRTsoPMXr6aXadpRfYVqHdAZqzTs2hr5DnNXDvXT4Pzh1GkgFQqYV7rgTLqjvpi8TpgXzu24Dj1",
  "key33": "V4wvtobVLkaJGy9DPCWSqZVkVqtM4m9qcQgzSiEznEwBr5PAvxdvpjhZZiwMCEiNmRxwTF1VhcC6yVnHc5agEsM",
  "key34": "4pSGMVoZtYbSdXhGuPHkxM4WkAPZ7THSrzauAyNLpy6ve67iRczurpLbPd9erPKd4DzTGmKLGdWgDWLfMpsda9U2",
  "key35": "2vVjeorKLAwDz14CySbHT5wg7qkfsfJxk3QsCWGHJ5BxeiS4D8Qg4mtdLgiUAnGQyiAPsYmM4m8RCzy5d4ztRn2c",
  "key36": "2pf81UDD8gcP91ZhxHusYqKwV9ga8zGBMkzaHS5Daq8H3m54ksQjgat8kEcRYaWnGiPkQsBtRSFRNerCUPQamNvP",
  "key37": "2Mzwmo1sfssZc9NMyh1sFNAubWNPGJo5rN4b2XPkjqnNTdKqCREyHNtb3cTi92aLGVrdcg9U64eWmNkKy9wUCyg2",
  "key38": "FoLbEsVxqbHPmRCYF9SpZ7KxZNsgiva4wuikDyAiNxCWJxxkWrSLj1Jx8Wk6NBFiBAYZ7Yo1ed8zE9Z9bxp4hMF",
  "key39": "5SQmNZ7m6Z9R89FBoXkZjVJZ96o4FSm9PYp8US16RSp2EEcKBQvWWV15jFPQGxr1MbG5dv9tnXnXPp88nFZYBsyd",
  "key40": "5PBc9d8jEEWSu6BeK7Bxd43hg2PZ55siQqysDYxFpnfz9J7NdGVmXoNgVhB6Uwm4Et5a176LJm4SEYNFSNJ2xqWN"
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
