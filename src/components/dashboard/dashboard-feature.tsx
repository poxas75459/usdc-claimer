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
    "4t4ScyjemNx9e2fHDEEfaCMEJZxRCHLZd42AvBVyozCHKPZ5Wzrof4G9Q3ga8SFYPbVhomnAvRNQtZ5vczeobWGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Na7cbEHMpwxCumQqrwWdD3jYjMGxb14ZBbEPLMCTquvTDUaEWHNSGXq7v8HE2sjosxancpmNE628sfzMJXCdi6",
  "key1": "3T4RaPPXnCr8YmrEFzJgRAVKD4SPJmPprTJ9cXN2kwBomYWRATNUSgEwzuH4fQ1HJi8mz9nKpzsq7neBMJfTqJUe",
  "key2": "8MbCMQbqiMUPM1jt8VAH93pECaHGEbudYeS7Ncbe9dmUCqPY96gUSLQA4n96VP6ow2RPTsd6ZziGFjGP9Ms97rz",
  "key3": "2FuLWPgfGr3jmmE7iFwZibFuFjjP92aBR7F7tBiARrfdenYqqXt9NKfR4V8dnMoehCZnpbwikoHGg5hAeAGKENJ5",
  "key4": "GZYaF4BXpg5iyCJTbESqUv1NzetqdFVeB73C5FVkghR4ePgGkGUtdoe198CTTGmg4o9Gco2jYoD51xzq35RpZ6U",
  "key5": "4Drj6WiRF7Naxbk3Wc2tKXHXwKsNorq9Jo4DJEKTc7TGZ6s2dJofoap3RxQMeDCidnExgWirRSp85q9J1ibHvvme",
  "key6": "5JZ9u26YATau7FtHrPDekjehxu2GEoDUETp2Dy8h3XynZPPPQUn8DHuWEzCtzsoKNE5G51T8FTaAgregUT8ASbyb",
  "key7": "5Juia4x8WBGiaoGZ7MCA9AFCk9A88G7xbaANTeeHvpTssEYELkZFLmmEHHmgE6v2z4YXmV9zuEBRrtQy8jEy3efm",
  "key8": "496oZYsR5Dtcti1XaEW3dqaLMytNJ5BWQLshUmqKbFNhPVXNqHFx5LLVBJMqX52qUHeWJRVkjJ3nQ6nYDLXJHeri",
  "key9": "2ynK8WZ8PKPn8bFMZWomMJw6KEPzsRwviqSV8CeU7knKWZNKhSt9FKU66W7hcTb3r5krmBJbFqCzycMfqGFtPntS",
  "key10": "5sZmgeVKGj8iG13oLeA8WggbzkH2gdXXrC9Jfcd5ZYDCz7JDXeSjcHmoPYyLwnjA2JZZfKsUNBBDSP6ZRekKfiL8",
  "key11": "4s2PB4n9Xtb67hafQSEai8YRv665AWZQHcpXNJZNVA9ZSdVwXkXmQW3dUCA7UnFqo55qZdudLaBbV5VbewX232vE",
  "key12": "3vHmx3xfaQGz9oNsYvQD2GZsp1qtmjWy99bQ1SfmeRjhfWtjynGFKXadGUZFprr3ijWfJdEnCjpUBsJFmBfmexDB",
  "key13": "4k9qcgLpxZ3tvKbQQ8U8d6KjhSRHAGqGXouXduCJypNQQ8JvXtHgvWg9YgXPkr19H5X14AVAiTinhyyYQ8XFk8u4",
  "key14": "3fMiWfhHwFGuYrPAgGVPbEUG6U353GXaD7Zf2c2ubDiA9P52hzwXsAufgLUKLqZgwGkCGjKG4tKyghjhN1snp9oD",
  "key15": "pkFEZGruSZKQcn1xRina2RU1gZCBxQ2ZoZZKiLtuJwn8hsKAwZLhivyMoxjHmk18aBc6ZFyLVofaKPiXFr7CAJW",
  "key16": "2weaE435LGSgbLVgMsqEbpWPGJjeZag62ryjPKgK8NMbkAHKJrTk7MVat13XymY44bgfxckVcYNDnVcoDktHYUhf",
  "key17": "5ju6WAgLj9XSYNqYPr72SRoMx6bSCofqepuEu7wQhF6xPiGvNKTetN35vwLm99j6Nj6ug4so4wdrWcvvu3NE5TP7",
  "key18": "4dXAATKTpLsMZgaTorZssg6dx2vpH9ynuqMy8rnvxzKseAXBwD5BFqTdcPL9KabB3HaWetV5ctCp1CVVPp4EZZig",
  "key19": "5kA1JjDQ3P2DdYVBWdk8bhLf5txXa2LAwrbvuWykWxAAP7gbofjSpeZrXFyha2QFyixZ5XzGoru91CnPW8DfQX8b",
  "key20": "WD9np7UiU1kmbgxBnJfWRpDVhtioHSQp3bKyNYXFvJYJPVLjghLmKsbsCXGhJU3yH4rKuw221zhB4NWr3ni46dk",
  "key21": "QVvTAkFfpusif9zmvj3pkGdBvMqb8BESeQfgUQVSzRFvHEWF3RKwsZDUNGmCGvM4btrXpo8Tqcob5qe5uuXK4fy",
  "key22": "tjprgzbqSnijchC3AhtmGTHjhdBkQQyxdVnsPXfx5MNCdU9vqgYULxAbeqT333CEtdDkVqa9BsnSaPCT1AVwi9D",
  "key23": "5q5rBkxfMyftPaEAWD4nByT1X1GfBrYYTz7r2T7jqMUZyCZAyBtyQdjKsNkrYwcpF7eeXJRvUjRwGCazG6ttFFKL",
  "key24": "2uEJWr45PDEAw48wqZkGQ3es3VrmKt2JD7Hubzah4RMTuZS8RjVrmAdCz7sQNkv6ykiWsZztTCyw1zLbGHUECTVg",
  "key25": "3urBQL1ivbNUBXXvYkHJ5Q9jhPSDWftyb3RDKdVU3rB5dvjPTXUE8zenr88bmfi5gdSrjoUs4sxAcQ2xKboDyLNc",
  "key26": "bfkNWxf4o5NGJtvx2iriY3iimzEyAWKcvWX4A5J2tgBHXXgYFgL96yTJW99GjGweUUtzHzcsm3NEj6q4WRiE6VV",
  "key27": "4iBHisEUk1s6DxhF9skrtei6cPSzYx4dTQdmpkVbsUBBDodV5CMAAM14mxVwfq6YJVtxHEV31XCZSng5BmLJHtqE",
  "key28": "4vvJtu4iNkwUDEikknp2krocpx6vnjewvMZMYHY3v9VJsDHGAjHe7tP86CTFwAuN4KZjfpV4edQK3pcsQfVTpCTX",
  "key29": "5nhvKUXPUnwfJU3BEmkPRQCUyV4kP59pkikTEBZP9TSoyjUBaDuc4EkkHvpKio6vHDdtbT8iSQrFxkAvqgJBsLzm",
  "key30": "RxCSeSJas39cztVKr5kaex8VDmMw9fUnEsshTeLDUVYFek8QboCsqCUmX4UB7DqFUKmYvVzqHKvyyY3Q76kmD64",
  "key31": "3LZ3brnqc4tSXqPx1r3E4SojeJgt9acyJfBirLZ15VwTA29KpApzDMc7V5vLDXXzLEpc4UnRG7zVR9WpsCvVukxN",
  "key32": "3cEdU8KFdmrH41RWE5jUxc3E5Fdb1qSxW3BYUKXmkrAhaD3DEq7GRAYSKa5vsWTkhvwz1kr3mA9L6T3Fuh9szsuV",
  "key33": "2dGzxSZvezVybnAzRReHF9yXmKSQ4RtJ6fK3PjR7VFd1vYPGmgvj5HkY8MqTB7GVRBDMzU5MKweRxvpm3EwXf2pS",
  "key34": "3AYMqb3c6bgn8vFGQwDzQRC7fN3FaFmNPajiAzGUY3dRLEKXefSRfTXppVARmjSj5ruoYeQaPoN2era4Dof6d34o",
  "key35": "2XnSLdEPuhQLkmUCWcJUECiYywjJHEg2u6xSQtxqH1rzKktquKj4DXxgqm7cpPRxPLHy7GQPMHPdcWCS5YPH3a5q",
  "key36": "2DYuZRrQZ1ZoD3G1fGKqZWXLFBj6Hk9CyhYK9yhN24GPNQ7qNmdKh3XkkVdgQcctbM3KbYUjT1kXnovq1cmYs16b",
  "key37": "hQgc51M2w3k8BZfvFJSxHsfCWwyQTkvQueTyMs7nm6BK4m4hPKmX9oAdkrQUdXs2QhXW6Q96RxEvf1eWkqMWdyy",
  "key38": "2ZzHBREWSqmkyvsEwfMLWqNjrLAYZyztxhaoSDyrNDcsAi49E3v3jeP7mu1kbZiLu5NYfPzcCt8pWjBNyRHHYbCh",
  "key39": "4gSjKRrYaLLm5f1AyhkzpvTfiSmu5nwntGMW56QsspByCkCnMFvvpeTQVBahr4HBQUe6F9xtR25jvUWZdJVzVjtH",
  "key40": "4NEZDrqYrSrWPK3nkUVDrvfTYpLZEGnL8wjoCVom4mcjLZLGh9ySHMprVcjPV4rNkqLT5FzCzR4nLPdmjD4mxt8H",
  "key41": "Q8o7B6S1N8PvawRNQRisUTmqpMDTpExfm57JcBTwz3pHUmZfA6N7Vt7AR1C134AdKTk2biXxjSD3UcLsRxRcENk",
  "key42": "5adyy17jvhARwMJHnjt9jNjopQBBW6GH27AbhkEJh1sCfGhvQZ9C37uL2Xa4ktikwvjvUPArdeejwTTQFwsiQnTY",
  "key43": "41aLZFAaRiNhy2N8qbdN3e63i4YeDvgHTqnqoXetHUr4ZMsHMXXepBvqQ1K7AyBcQ4MnX7Yu7T1kBMkuzFvYC57P",
  "key44": "472T1Tp7UNC5fPh4pc4h9HviBeHoodxUP8oAuHiwHLf2gJxaYqgfkg75U5CogoBoTvAoRLACitrv7MjM7c8R94ni",
  "key45": "4ipqDFvg5fRHV2Z8LU8Az9nXJttWmRrZLioyVaZMUGzapeNJW1tLbJfyApYehM3ipktmmdv6LiMfUkKfi6hAUe6x",
  "key46": "riYEYA5EgiYAFoB2wyZbjTjX91cQg3Y29aQYm73QQSV5Mnr4kFGrsKd5JNH94duDfYmCKooMVzygdQjs7SerSJQ"
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
