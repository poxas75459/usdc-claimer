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
    "5ehz6vw9q3FxyjgQEYkheCWwpZjrqb8nF5oGtT5vb5rZevcZGe64NT3WkJ5WYCs7xG69FpFpQ9iBqGzUwJRpGA8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BnjYbkXMuDW4tx31A4MoLjBKC4Yfv8w9caofF8z5WaddEjCifbcDuRkSbpoPykf5rsGGMAYpC9CgFEXFLeY7pF5",
  "key1": "2kJjzW95hGqxQWCC7UZnP4RfG4yZV8w3TA5EwUfKr6MZXwyAy7gjE1qpBNpp2SPWREfibxdcWv9gmzvMLF7Bg1GE",
  "key2": "486p8t1rQvKiejK7XRk9tXzPDQVMv37Sdyhz8a7HDwZ5h9fpxuVSN62K51zBnuryofqu79ekic4eHpUtzHc8ghf3",
  "key3": "5pBHnWbrcVLWzBhoa4ZZx1Fo2JXictGVjVFPU3YsGKTdyzwHVdDZ7vrdqN4GEv7KhMwXEub4oG5ZTv6Bm3shUh7L",
  "key4": "2ozYX4QDNEcAG4nZVqH9EbbhPdGvNPDoTFUeNAqhUGDPsdTTEXHRLv1mtV3h7QzDzR7U2EokoHhVAaZi7ogyXYeu",
  "key5": "5NoVBC5DBLWFWwXt6F2jpL1KVxdAA6AQir5BusiwvLAWxzLqeCjmWJiBqaCvbCcRmUT4Edn4oieJfrZwXdTk1KmY",
  "key6": "65KPr56EP16U51JgvhcU4DRYdJXPXCZa8eTxubxtQRrAcvKv4LCsHSYAGXtT9pGcoQzYFWY5Lo66R751pxAi5wTp",
  "key7": "2EY7Wwv1W8BMrW2APDyYxZ9z287Mt3MJb6kmNAKXEbBx7k5HhCuoVJFspxYqWbYaNEQcuPdDEqM6vbbux3Za9qM8",
  "key8": "4wGDdmJVon8sqdmZ8v5KzpqV4K49KJdkz3jXGWUNRvn14RtKAGZfcLLwbYrdyvhhMBkbKV3RCd74xiXNrut9JSwt",
  "key9": "3i42Uzp9ZsfxnfjoWM6WHKEpSWGkeBAPT7wKwu3gWDrnQewE2vFhtTkLnwL2vZKQNA11DyDfZukqqaga3GfZ6XRw",
  "key10": "FRYyf9xDYnA9Kn5BMiFoBsgNCYKYYZzgAP9hX4WMDvzVhqKWqKPdPntD4sDs6qmUhFN4QWVY1N6NXrW1wveDN8d",
  "key11": "2Xj6ubUk9N3tHskTpSm3NayKXBrmVY8a2csrPZZkMbuydd6esoj5i5f1SGsA1yDxK4Dot9a9eDd9Fk4LjL54uAnf",
  "key12": "DezY41UZ19Wd1sH8bzqMvLWJZDCP2cGHLqhbb1HaVDnq6mwXJTx5hd6H35m55EQjPEcwbYecNZpwCjUdQYMxnRD",
  "key13": "4BxPAq8oFrq7wtFNkL5N1gJ3RW6KnPN5tRu35NAbGKSU1yio288iuchQgkgnKhQ34P6x3wEYJu6tYcdZtyN6B6fe",
  "key14": "1Qi5PupLjJYrvtUffST6MAPSAby8RN8PTnjxTuVXHJcCZSjWd2dFf4ASWNvjXNwcQmkeJVrocyrSY3PCtidmsHS",
  "key15": "3Kbc7nnwbokQiDAXQFg73sgbBzg5Q86HXpN6jzvsZfLevEqYhwQtETQ3UouV7FUPs8jFkQ2vkXPBkwYfzBwHiDxg",
  "key16": "4YVnz4nc7qimMccGhGzHMaiKjAmKkWZ3uaWNGsEZNdgfAPhJfWH8tDJ5cUPBpTyERyZpYJophW3KhDQ9f8FNaLwP",
  "key17": "4a57QmDbDfDj5hKmpNyJSL6QUZhKQGHtKTZRyLjeHiD2dULG6QJZ5PeR2q98AFow3qAxkq1m11SigBsQrpfuKEs4",
  "key18": "3Di9BZ3kuferhgYJmq7qTXgLBbP5tZ6R2Vs4Ly3uuNCqFN29t86VaoyqshjCs38Tor9v3GVrRcA82UGsNijFuHbt",
  "key19": "47KgdtBwumsQat1q5sAEnpYpaGYu6u5rdqfGzPbkfzp5jce4ZSwi8XXYseyMAr56C8qfH2jHGsPXHiHZXcvcpvj6",
  "key20": "4juEexABWSCQpqm8rJUrzLZTs4nLYn42hudugsQ5Ty7sBWLu2W4ztc2ZgMGLQVQjR4dmLp9feQiM9cXzPnoCm6P9",
  "key21": "3eUctHbC3eXx6uJx1zTmyT2YzzinM5uHeShGbLSv3xxNuoQFci9GxgZm57aHUneSas8SYoGk1DA1NdB9XBtG6W7z",
  "key22": "4ZX11ANTqag9RJNt36N8hfcxxxZw2V9ZP6RNChqw3ptJrnCxyBMQehEo4UW2jmaubS17ieDK5Hq4YEHFumpBL5yY",
  "key23": "3kho7LaWM21sYR8HdJhRZEyiQaHKZcWtgoYsAKMo4hQRQbAScvPudJ99uPo7DCwrdjc8ppjRwG8Ne5G6fjjqpVU6",
  "key24": "2xHcccMdjWpAPG6NJaFKxuafdMMgAbJAmAFMbC7DVEPdkWPbTFD27jPQsuoeEwvP5swbcDD1EJese5kjTVyEiBZn",
  "key25": "5TyyQ1qgwRmZ9DZTjuKdZTdUPHbWgBQ8Vbd8HcWXNtnabPS6NRd4ELtAHKMbcUtmSb5SyFcB4bwJqWFyhyHHQGgt",
  "key26": "5V2kPnUUdbtfcTN4S6ewcLcmiYD1F1KmmNVRGWGybPLTNYBTiL32Y8zmSBkwrEVsuCBWwR1jarMuVSoEaji2iaH3",
  "key27": "2nBkWyxwvyiiRXV3aNbhS2qS9MHjzbPFaExNrNUqryPdwMQV8Yaw23GQte8ZCP6y5MVX897SFCQhBpgcFaK7uL6s",
  "key28": "47dnx9nJHstCWWkPPstUvYY8S8vMD3ykciXFhdoaCLRBS91zZtFK3SayvRd3XFE2285JyqCKLVsY9qXvw8T7v5eD",
  "key29": "4hpVL3HTrgNwbZ5ycznntrKmuTaGYaPESN3YwALLNixWci4v4zm5UcgHFNhnf2yK4SacRGCUrX9zY8iSUgyUgoVZ",
  "key30": "3d1gfgoG68zBFKx4QUJma6aZAoWquASbFm8WxQ3sSyGzHXQzNWysLuCB3mNHBXtvMyLEvTXemjpyQfh4d37L4KvX",
  "key31": "2kZAk6Ts953BhuK19bvKQLP7FheGnJePh4rh2NQDiW3BsTypzgEMvm7yj2QocibBtZhQCcXBErq1cHrqXhQprpeh",
  "key32": "3MfYado3E1B1TLbkYVGALMg3UKiotx1Hky7w7g51rjtEXMcmyuNskVwHFvL8jFc3sWmZzjeQNdYCpSP2U7Ysr3JV",
  "key33": "3bo91Rw88djHNi8WudNCJ2tNtsLaUBqK2UF71mm22JFtpQsxPp6mMXWTtxH8j3XG2a9sMgZVFuFs74ToTPdffDUQ",
  "key34": "4MFDrHHLGXN2v3NmPW6S92Sc8HFsxzqsNdhtP8EF7aKLNofDQWJPDtUcYk8ffidwTBXeY4sZvcqmByrvBYFPXDmW",
  "key35": "2bTb8BZWwRnwtSyZymtd9zJrZiYN7vLeKpznZtcCXgoEJV46drd9oRZuSVacWUPaWzgqDB4iiMwUeUEw97Z8xcGy",
  "key36": "2gLB9JLJqvA1iZUmpbQ9VswRw2UhEQCHTQ5Cy1x3zN3zDRKiexWM6qT8xE7dXDcStXR81UNgDVYfGRWEVfdRJ6T3",
  "key37": "3Y8vLP7LfzF3aWpgENdUwWiffBARrYqDadwErMAJ9w9FTJ4eao7nWEPxjwRCu3apJ4Yj6o8rGtYrV5kZy2aS3Qtw",
  "key38": "2B6rbnP1mGTVSQskz1Hqz4Hey4cX3jrudYhQggfKXtmb9CWwXgtYNkzmcCnESTgF6mwJdUUhrqHhymt623Cqsq4x",
  "key39": "61RAZcCmnfLvzwAz5Qek7jQEf6BjHAQnHqPPcUeam5HpVEjH4aCQvdfFyuWyUU22mfwFg88QNtjUv29yhNF2eGUg",
  "key40": "ojhQALXroPuVXpbWSR1kNEtxMfQDjGkbsU55Lc8ZyV6KCQURVH64NkABN7vJb99JzJmRereuZNsMdxS3j2Swrvk"
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
