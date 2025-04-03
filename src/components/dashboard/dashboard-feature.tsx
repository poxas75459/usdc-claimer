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
    "2V5fCmjJjv9oiJADMk8QvmdeSdwXo24k1Ydnu2mtQxEenP4mwsimcaiyMv1UcwwNjt7h56y8BStsqYh224BUKJdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CRsmBmh8nkUGtNSe3mfiBJE8YFCjTF2d6gZGG15cFsnhGcHc1vvZ3AE78YbTPEfVXxJwuCFi6rg6eY6nDBAkVtb",
  "key1": "g3YHspUNoRVcAn45Qvd1LHwc8DpskPpmxmFnMiFvauVjEsGVGqc3kJ7T7tBMPNmWkvcgW8Tie2fVdfLzxJHp3zz",
  "key2": "3fBJ3cmJjU7dhNvGDmJdNC49bBsZY3gDe452qJuQR2usYTUwKu9xrsCXQzejCY89RhMTFDDXQUk1XYUP3XKYg1Yv",
  "key3": "3u7ZVvebr6ZjXoAXs2dWG8URGcHde7sjbynNdSaDsScCGY3Sz4LdBb3vqU1dgrkw3YPeJFrqLn18VYjnAmbdHxys",
  "key4": "4ACx1HPEYW4k6i3tEoMKJppD1cjWxjvFirPP56bveV4PX1diQY7Qh2SbbPNAhPry7mcUS7x121vGEFJ8XvKfQEvk",
  "key5": "539fX9PJQ82xHAKNbZ2E7vLReSbhSVSAthMDtZK3zxu8WZ2DZWsLLqQkJztV23RArU57XEPh6kmLkLfeTKXBhEXG",
  "key6": "2i32B9TgM1qfMyc3D5QFwh82UasX1d3EirkcietagN5RVdQ5UKewrjqcfrNAUZbC9HaAscPwGTQ4F1YYB1bSLJfu",
  "key7": "664J3oUFMNqHU6R3Umj4eG7VPYt7wyxPuL2rj1BzAUAHcSoww5PvpkBkifWRYVSatrBgztJzCRpmM8krkCfxsoBj",
  "key8": "5pPgYRpWYFtCYxpioaLHwPYAQvNDiw1ZmUxerWscMwis9SMzeHm1Cxnp84YevDVGhBZzVj3eEqxTW3tAzPZcrXuk",
  "key9": "2bmKrE3jwfbyXEZWpM3vd6CpjdGrYL4d3QvmpzsvpE54pxhHdgMj43Wy5zLkqxx7hozSyDH9wzhA5Vsc1XKbKcRn",
  "key10": "3vetNunCaFBDQDnCnLhrU1BquKWonhgtq5XHwJAjDEt8dg6S8r21Q34iM1T8BhHbp46F1ZkZByWjpX7WtF58hxys",
  "key11": "3bM65cXKKq2U4pPUqgESzL4x5aKSJGoFyQyWrcETByxcB5m32j186txvMu3vEXJWXtuzpJxaFemWc5svYUp7cgWg",
  "key12": "3jCg2BRg9PTZtmDxSGp3rM5WyYKELuBkyDYJ6pxZNvQf1eeiYv4uDp84VhP41QXYKytK4w7zXAg42AQv1WgUJKve",
  "key13": "4XLu82CQm9ZvBd5UM4MReXc1hvpp7aPBrY4pgw3Pfj7XL1wtPgGY2sKXAC6SPQcGjkpUhGVpUjc3qhwysvCnN5xm",
  "key14": "3AX5AG2W4a9PViqX59RD9c877YTZwujPuHU2pp8Tug6NfFMYUg5RbHLA8o2H83e3ir2GRxHs1LVd21K1x1Ar4Yvq",
  "key15": "2w4MML3yteYcamsGv5NyCLKDPg64i28DbrJxvXCcTZ3W36sUwyEGuN7HWeyiCmMWQDkEFhfsHbvCuYtW8ePv9VTy",
  "key16": "ccM7wY2jXuZiGXRCfZsQCbyM8zdj78uq6aHthgAcBvh78WeQX6xcenPhKAwR61CuTnzYdKxe6v7ZG6mw16kUo59",
  "key17": "44WZo14SzVzeMxzztwN2uFQfG5kc9oLmiq7eeG7pSJMdrywJWrizoxo86KtEGuYhuqhFYZLAw9muoKEzFCQgmm4D",
  "key18": "tG2t2h7VBUkbppjosZxvpQEjYLfSsTPF4xQWx1fYp7TG4XWNDMDvDiX769Vv6sW1SR521apkU7tjKNaYXt27X5M",
  "key19": "5gN3Gf12E4CTfjvcdcFSjWzZZtTFR3ygamu9dStpWB7ib9PueEiaukoGyiTrri4bHJu6DodznqJ2d1uaUaFZJC3D",
  "key20": "3nvZ6NBJgctwsBxNS5NDfyU9y8thqfwK6uTdac6P5MPygvdDkYU8rqYq7tBpeKrUPaGnWq66SmJXwwsdF3yY7Hfj",
  "key21": "5dhqKDniaQ5sBq47TgmSirJBJS5WCCrtKFRLXTe82PNj3MJ1fcJZuHfVpZUoWzw4q3Q8LJUKx4L7kCbFyA6dQ4ex",
  "key22": "2FcNna8spZkeqhjH8j9FJMncuiumHPsiipD45pifuNXWPwhThC5DHy3Uq1PabostG8yiJHndnoQqjvfufEKJqVo7",
  "key23": "5JEgbNpGvSQTtJ2ATaoeiodhT41CNRfsrNT8H1iKqtVUDJny9FN9tx1ST3FLPpbrFc3m6ZdXkQ5P38v7akj1Mvq1",
  "key24": "33PDTMv32JauA2Y1Hjx4aHarwq3buFP3RKRL9Jdok3bmQExatFnZCc3zXwnTvPvhAmcJ7yoX5tXiQvVJxSaNo35P",
  "key25": "3p1HzFsYgzhmDND2ygdVE2QPehuFNNAco8HP1THwpP1VqHBCz1kA86VbfDvuH34eCbGubG59RXjHts2U5brtDcJb",
  "key26": "qAggxCvJQAyXntRnXdr5FqN3t8abBx4z35gFAu5dx1Pe2pceaezcrSiShum5PTDJpwhS4sDk49e4gnZEuXt8STs",
  "key27": "2pGDYv6N3C2o1ukczoaY9i5QvXkdbhnVjdP2e9aG67ieusxSRepe5Gs6MqRYdyzQpHHJvSGE15qaKrXVFuH9TFQa",
  "key28": "Mq2vSVAFf4uDs1EAYXAzXDexWHQwKeGmj8Zgp8PSErk5uwFrCknyagKJjA5eGYQ1SLr95aVvXotgQUwGcmwTqcs",
  "key29": "2PZvHEYBcYLQ1eo9wSHXuNis7BAkFbHfvaA6nGB9io3cRy4C6RbRqiRapzbyjmDSwbr3sydYuN2QUAzWfhGyV9FH",
  "key30": "5ELLBtF87129xHNzFH4J1mKRoUbS3MaeDpwHU6TuV5EoTyECj8YCN33dkYtqMCcNwybYPeEwhyo4QTPnLExFH3EE",
  "key31": "iSEiwUqYbXBs1WXCHTFqr829RowWgG9bEetjPxQeY9S77tuAqydU1UEQZWVRmeQzaFRrMQ36Zcoar4bB6vioT7P",
  "key32": "4f948VKP2nKP23ViR2a9k3HJHRTecNXyXpz2xGP179vWkuFXkoZQSe6pTWBKcTyAR59xdi9UK6cLtSFCTeNimC3q",
  "key33": "FGZsgeGkm7AWEafPrczipJpBZovEa4C9NnpDEKjf3vmbauApGC4ruk3rzwLbYhWj9YmXTeE4Ju75gjoKfjCJmkL",
  "key34": "JoUjrEkDmrcKDEUTCXFqdqB4tTJX9xb8Sgy5MzkQCbysKvygCW1Kr9Kjsb9VbYzaD6smtQwtKWhFzonHuHDeDpQ",
  "key35": "wuaU5ZJ6ZBUqEqKSA7JKbr9DMWeDPqFbKsNxGrYKfufXyWt1T3YSss5xY8xEZbq2GBDXLBemGwPHMcripEwsY4H",
  "key36": "5R4M8CnNNKo7kmFnCWkmRcSoTdjvcbSR3dWA7M4UQC5a9b6fJmfqUGs8ApCEfavqsZqdR2FakierWhTGDGhw6C1z",
  "key37": "vXDf4SCYsU9Ef7q1W9GES3GjijVAkgVnQx8WZ6ByyT149JNh4GcbuYKP51jyqaGtPDkigL7zihtB2FS6LiNFrwQ",
  "key38": "4kaDWVBo9sRj6h1waojxntchkUmtx8AfzvoSddr4xBpxQGpK29DoxPLYuiWRaJeuzNQhzSGX3J1xwthkXKk5ewzs",
  "key39": "eHSBpmvbCQi8fT4zoVDfEd9XeHM1BxH7Tk6Sdqn1uJzata2SFkaUCrhLzAZ9nnEDRcW1AtHjt92tyv1fnTFawhn",
  "key40": "3BrxTCxqvj6QKQULJfotZgyojo89LjFSRbtVUsSdKeNMzKAS7yxzWpGhUgVKwH7CBPXQKqzyKKUuLRA63UBmeq8b",
  "key41": "3Vy1oJWM1ik8TD5v51ZfRKAi3tpusN5mBoeMpoaCD5tc1g3dAM2Nv9iQqAugt4zfZ2q8zVBMCQRS4aRr6a9jfFqd"
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
