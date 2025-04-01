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
    "5wMfi3e4cu5XfZuPotLjk1nw3cMEFUXpzQxg1Zq5mVBcXtmNPqBar8Cq4492U5YZKu13U1LE92sND5fpdfz9z7rr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jnruy7Dfi24ZiimJSVSMsxTgV9Lh3uGARuM87pjvxPr84ntTo87sYpz31cW16746ZsrCVV7qVB95xymAdHLBdhf",
  "key1": "4ut6kxJY4JMDx9LvdYRNUzN8jo4hvVnEtW8QhtKpm2qMvGESqKkn74imxDDfmJB8NU53DKetUvuVEhP4XdMLKVgk",
  "key2": "4beLcnKy9zuCRHxYgChQuqkEBzbBwmAB7FWKW84jbhTbZPaNMf4Rqkrvx635ioTRWdYT5ue8tAp8bQw5Rm9hBEZK",
  "key3": "2FvGrf89qWsNTvoopNfuyufCigkiEHw58o2TCDg2eGPrFd4AQUz7MK8Di8eafnTSiDdZu9GBBTn4616m1c1pdxs9",
  "key4": "4JvTmNe9bSdcdi35j7aqPrMTEs2WCgVqjHbLUjNMrXtGTN4s9h1rKspBojYhjq1bboKhUAPnLQsSnDE2oAdLDwuZ",
  "key5": "shpfAqtD7j1A6biaM1Jk8nXHWFzoLJ8HRoEvvWEM4FcCJagENKJzQ6NT7EX94aCsoDJRfMkYEh34xmbUU7rph6A",
  "key6": "4uauEo3D4WSXActfydmuWnjPbD7mH4XVLcHqC8g76mtBmnr95DyZ4DGyrnQBU3EnYX47YUtsqXPdUiyTQ2k6k2uY",
  "key7": "59wzCMZCQ5a3djC9NHpPab9opCDDcnkdKcAHhZyiqfdaZ2FBiRt8DUx9D8siefRJgehVykKsSCbUa9e52fFU3DSC",
  "key8": "2iWoFK17azgozC5M97tnykzpwE8Vu8XhWyaVARUGLi16CV5247eixrTUFGiURpVbu1mNTgAn8CKkUtJdEczTkhv1",
  "key9": "2NGHevKCmP3JQyZVW3Wfmp9EFshCU4j8J1jnJL3iLhF2aBkuVHksZh8MUAqvAPUnHHS9dB79xKFpRACaS2hQJFrg",
  "key10": "21GL7PuyQ66ehiTD2uQe9GKaZcKnRF3AEJcpc58gkoeFDrqaANxJw2gXRbVeMQU6EMwhQKdoBLZwXtTU6apVNs2f",
  "key11": "4Td4AQb6X5rhCDoQ9pTE6haoytRjZrNrJkD3SPkJ2FR7sr5JEvP2uKYe4j4iAihxBRiKyHp5G1G8DGusnztbdinK",
  "key12": "2xSAxsPVvaFc8sqszHaTahd3igdhsUa1ybGE5Ew5e4QRvMFz69gV8EvaGkAeLMthwvG8LsWY2ZcbTt3Qg2SY2AT2",
  "key13": "4GJpJE5xA5hbvLPYmjqmgw7XtBBoSrypvCB4RjMknGejy7PUrzH7sv26TWC6Yhqykrtm2y6bspXadQj1jeDhfY1r",
  "key14": "wB8N9Ji54mjDmavHa8MoR8EXqBmEGkqUN7LDhkyFQYtbc6nmwUFXC3KERVG1ukNd1Ev8ATLUuf9A2Egy4YFziBo",
  "key15": "5M7FGgEnhprLNgXfbzin6ixbJ22QwhGzeLWHKErCZzfoRH7QyaHxXJpNKJWv99x4hD1QGJN1QXyFeiYZc6ADECbL",
  "key16": "2izAn1iNXY6NMFsNgYMwWTCVBLXJVssDAEWQj6CwuFnkuFjEzZQ5oRy8zyXsatrRHkoKuRMi1NaVEYkGZtgX1ej4",
  "key17": "5HzQq59mBbkquMgPiACh6GwMw73QGucXSrKcJ9M3TiaFHfxsA7f4KjsfAAjieX6MGyyfHytX4nR4CQrXVZK4MWxr",
  "key18": "BWa8nNMuY1Brxk8m3xtoYr7BnHVhoPx1f6ejmkSS9hXvBUaCsbLfAvLGcWYfnmdTeUuELQJYyG8twXgRt4yuhYG",
  "key19": "2DqqyhZthcxVTevk2FmJzwqA8CY4HAKbbGCsycpXXt6ue4BuWnzCXJ2h3AyG2RfNUKsoo9uMe9a4S2TrBneALygu",
  "key20": "5xLPAmFun2WsddMesQcgUrdKSt99rv78kVuuWiuAo59eBuK6kKcqTXL3DzTKUAKXk8J9rWv8G5daDWqk8JjgwUs1",
  "key21": "2k3kkiDyoF8ePfZRJzGzc6NPpx1GcKgsS6hUGQek2kBeKwF2cDHs22UWvEAEftJehZi2woSUmt48GXqKjCxvYauj",
  "key22": "5UFXsUW4zCYPgokq3dGzhXXfTqQojvvANFxu8BxSSmks8auijGYnW8i6N4sD35U7i3eEZhiB2q9KbuTWb6WysPgF",
  "key23": "2A3WzF7UdninJaYfU39JPeRKBGW5zcLnuMZa5tBXYRdfVRAe6grJXWXvLPYwm8WF74HUC2rp32V6Y88DCfZfpTi2",
  "key24": "3CDUk4qQipKfe4nFLYkoEEHL7C6FpT1GKJiaDbGMZxbQ3TRSETUZSfz1r1eXwFq8u2XT5JGWQZ9ASjUQDnjPXrPo",
  "key25": "yAGUGNcpmz1uzBNiSAwAoHAfQ7TE4dZLYxwkHbewd1bBQaZNyXyVQWfnGqwjekRY5rJYYGPXDUXWqj3669Lbm9q",
  "key26": "5U31VGhnDFHmM5j7sEWjbyQ6z1M2mAbXcZiPhC2nhKcawHNQubyKoPDJqhLfmiLEqUPaVsCsx4wiENJ2yngf9eYF",
  "key27": "5ZUJSmBu8D6uU2Sv8ZTfuZRHP9eSzZc5NceZ19zM8wJbs3ysDqo9GbNQYNAbawEHQkSinCHzNKcNhov8941qLqUc",
  "key28": "4Qc1SWoVQyES4GQCudU53NyDwekpP9b3DiczwYkSscroUreii7ha9C1PxUkRzCRg97xH4fNmrNtohV8kvAhqQoEe",
  "key29": "3oCfXTCWDCoVRzciRBwsuVnVPmunRThfPxExcghE8wkSdQuaGu1NxUFmBvv5e1q1r3EdK2Qy2Ru2SpRohBvonrcu",
  "key30": "5igmcqsr1ZY4mEU19P9s93jTphzxFUGugXWoqCCjhVqvk5e9QYd2UhUdNYvj8fMxyjctGKFULzFV8bZq6Tvm5CK4",
  "key31": "3ZypT7K8Q3SDoSRpFpuiRfQJNUAjNb1ecEuec5FEDoRNynKvPTSSZr8C7TN2xeoefTRJ4ScR1qE9L1tqMisAkSjm",
  "key32": "2Kap4uhDeV5NcyYqcvyepyGd7Qxa9wdgTEWKh7NEZEBd9KJajPxGkAtauoejKyWUUqqr2TuM7Q8gU7QmQyiN4J7b",
  "key33": "24obM3nxwuPnibMtW8dmBPdqXfLq7qMMo875qaQcHweYxbztFACdziQswf47baDbQpKG94KMaw8iqV9VcJGRap8M",
  "key34": "h6M5xaiHiyYn9ituUbvotxyB5MEytKCFCnVjPMJU9hEQbYo3qY1vYWP49cdTqkMgAMzduZmrSUGoBEnfXRCxUEY",
  "key35": "498newATFG7hscsK2H3jmB8XxqmP4aBBcSMqMoUnovrAQTyTWkUYhHJV3LEFifPw9yXyYUcw967WqoHxD6FqvAqS",
  "key36": "3HciikDqGBiUQMynhWw1qwbsbTcPuUMobC1mGvyVBTQVwKc4gc3ENgTbsbS5YPmUPUNhvTQEuQ9Yo6hzgL5GxS1L",
  "key37": "afpe83rwFtupPqyGiq4BDo8oi2Uy8FS6kzZ4Zhs3pBgZNqNwzpQ9a3Vsv1tmajX9hohD9S1LEgWhdvTMx9tAKze",
  "key38": "2HivP21HEzCByu1wzXGLy4GEXh3EVTBqxsVYBNCYmKrK3hqRJfXSoma69yYYH9MxqmpioTZyiNxLjrQQvbkXwMnH",
  "key39": "36PVsz22F1V3paWMkHCJWFZHqgZ3uvMmaKzKe6wWH6ZqeCbPnaq97DZfnvxZfqZYBBywJypEa6HQwf8zsDx7MyfE",
  "key40": "31RPY5n5e6yRKpb81NVtKYMTFJTTHV8p7zexJMfRhruR7sdtQm3YDzTSGCQD9zE7Tv2LjY3i6LDzW5SfsxqqVrsL",
  "key41": "57jmPF9m4yY4wMAHv2JmAyfhTf7MmNweDY3yuBhtuyhgVQioU8xcxTvf7Mkc82dBGTZrmAsRUsVCcr1Tbe1rs2ph",
  "key42": "iAwttoDVRThMpjQXhfhLcKzxmzKDYxMsgfoExAYCEtoz62gnuWxV6j1fykBS2tLERLGrPbNuNegUnpBc3Mo9Br7",
  "key43": "3YcoGyGb8RFWU24bsupzQUdnLqFKogwAioYom2B4uisrhHmh4cHKRLdDWSPgyK1YF4cQU5c21wF7UX2ASLJrEoQ4",
  "key44": "5zYX9imqcQyX4gEUHuAkYtKGeWczJvdgc6fEMM53Mz2BpEskEMsbVodh27B4SpJhHwsR5Bpo3XUonhRLcL5bNzyj",
  "key45": "3FSEhCubNo8772bo4qLYz18yGWhRRXyEX8Rs8gCPpa27PGtVUEKSy99e73YTS7r6XfBruFrvSUXvwcLjMWvJF7ww",
  "key46": "SfcviDixva2TrhQp61N8qdwjxmTv5vnWy9LuLNtjJdjqDAKq2wUBxKzfnntLEaUSaWPVf7xANc24ptJKFt7Fzb8",
  "key47": "3bmwya89PDfBEWshjqPWPxA1geLqzZ48vowRqiBxq7j4A4j2hQV9SeWfLVZ6ftLJrvBZG9PnyL2AQzVfLeNWHfSS"
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
