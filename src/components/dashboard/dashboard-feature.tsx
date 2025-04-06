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
    "kW3HsMiQzKQzVtMj74F1sZzPngEu8R7BD4YkpJaRFqpfwmgLNfUWeetdPZLHY8qGXhtGvJtitATNbsvr9m5c2cK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kW2ckrC2qmz2JS5oTMuNpD6Brxwg1AfTzhXG9wQit1t4jecMxRqf2B1JNeZcrmmRcPdvcv9LKvzCjiALDqZegPM",
  "key1": "Lrnh1FRNZ37PPeZGkV7edTHGQNxzJ6neCQ4gjnouvxpaPgjCFsqxFpioiN3wZ3Fydc8V7ej1k64Z1aDw6jZjXfY",
  "key2": "KAHWCxwLxvLxX5s7Zf9DHyLsNFohEmnmkiAyRcS1WohQMHrHsynmJF4njou8wM8PmocwLEBwgAoeMwMzu9taYsP",
  "key3": "5tyv5zpy5FfQ88MfmTaZCkc7kYTkq2fzGMTrpdQQSQyo4rjWLZGXA31p9N1ivJrS7QQnXcNm5SdNdPVLdAvMfQV6",
  "key4": "5AF34R1SxnWH99pzvn8mgekfnaanBKRf3fkPp4NWahxrbgszRbPZqFLiGoxG8QEt8qjAqwnX4AxHNzZecj1fBLz3",
  "key5": "2RtrowAC3Z8FxfGpcL5UkfjqCAzkTjCGTSyu9QEe5KjnvdfYWFZbvNQLzHY6UYBjy3YXJ55VZFM1fRcXbNZHTzU5",
  "key6": "5B9gsu4p8RJdvZRvXbBv1zns1Qq3JX4vnFA2r3nvrApD7Ygz8KhgA3arf5yE7QqzcBZKbTDA9cyeuj8sYN7i8PKu",
  "key7": "475siPvtdf66AH1mJwUrW8uCmaWHJdzRgzTktBop9EvdyoLAG11KSksCFVv54UzZTnxcUroxhANzUyhxsL1fLSb3",
  "key8": "46mcTpxQDG4845W3T4tMooSwVUMkLi2VszrdSfK6s5zSecqDmNe1fVWgVe5vY9VS42LRtRvzKTKEsniv4Fvs39ws",
  "key9": "5eaQiXWH6AaN5nMLtSQ8Y9zFonZzTe5RyHLu95xqmxBdjAoNRJKWTAJ7EuJMbWzAi4ftN9akiuG3q4YgVA2kM5w5",
  "key10": "5bV95BF9suNV3ooJyqVJ7FkMYmEYAgyDsLdhVZYhdgA5dLEatyD4qMjDm3Nif9BwMhU4US9UCoqRj75FqwJ72SLV",
  "key11": "3EafbeDrLNyBcd4HNmM4TZFnrh7Cv4nnwVqcx7ZbhrCxo8hWo7HkMZkgSj3YqfcSw6Jutfpo85cn3L8dneVAm7C5",
  "key12": "2LaMBtrZwZ7uhpjT1mAsQEq8LRh7gMTRBEXg3BZ5ZUemeKhjghuhKWihX3Yt4QSYAaDeiNmyyzrPK6EhHeGQScBP",
  "key13": "28jeeMy1WN2DteQ7FzW5qpHEA4LEc5mbbcCKL1eqZN4dq2eQVw2ofqJJJ5LEGG4BWHRmX7STRB7isk1RYfbiMoo8",
  "key14": "3AiznckQeJvbjmDa15dyqtHeV9q4ecBA8Zm9ZAcbtBczqroCEFXxksGe5bW9tpKQcqaEKhmFqZNpnBWtFF9TRdDb",
  "key15": "5Ub6N6Hn4WigNsWtKc4uSgshM9hQCaHxYNV96EgxzhNCvNCN3zgjqWVbbxZKX97Z7TzLUGXmKgJAA6nYUktMV1ya",
  "key16": "5uPd4fofqqUFeAaksvQo3ey8eSo338CQo85pXehhEb8gJ57KK2g69ErJCpFWG8tBG5F3sg41kH4fF82N4zbeJRWc",
  "key17": "23tyWTZe8BoCTJMdmZDLBhqXHzxBG5WaPAxJaxmiAtz8NShpJkjnH2R5j6tZTrvDpvEEXXykDrky34Fiq41Ub1aa",
  "key18": "2MPx6W4dnajQPV3a8sWXamueUTo9cYDmLyTJU6JL7YSJNoUgLnzu57xHRqDYwYZVxPxj4MdzrogzJ2ZA9UbkcN8p",
  "key19": "7d5Xv7DGSfn6Q6rYJmc1B9Hf8994SHKcBSXi2VtAmMaaYtssaomnehJGHU6PT5ppnhD3affz1dJ1wUE5CwLoUrt",
  "key20": "5BcoqtTw8WXjEaQSrss6HZTjeZiX578J5j8syUKVBdmLaZ8B6vrW4DqVZrTJCfXZcfFgH6Jp7k9W2333H6YhqrUm",
  "key21": "y9uqsChvSQhHJBKSXJ77FCtdRnyHgf7irF9dDiCR8ZhUdSt1JaARo3rzpAmV2i5T1yCcxHHKmfMuWbCcFLJd14t",
  "key22": "5pgFx6s9EA68WYkgspBP32EN4nZPQyMuYYpR2byajJYLYqnrbAcHqdi1Gf9w4csDXAnVfk2PaeBjmx9QNwJhf2rP",
  "key23": "5UxsKk2u6NufuwYvWzxmvwBNHBtgwRa5ZQdj84EV8xHqfE6GjBz26wMaA3RFqJuTezybFu2Lj8WZJXWyyKHSLHEu",
  "key24": "4cwRsfGsXry2WNsBWtts9ZDne8QupJDHBC3hFjJNLYx9ziVHpmataZDpLtJpqaFZjuwCRXF3kKYS3cmXPeppQzxW",
  "key25": "5VCeCThfEtCYphiQ288LATX7AZXEq8jWrfLWsVdyjL5VBn3hvA4jszv7Ck2JVZuYXQBx2tvdh3sBHEXAKXuJ1FyC",
  "key26": "5N7rYjUJsaLK9z2Knhf7FAHzmpK73WZXeX9oHj8bkdUr7SMUyS1yCXwiSW1jhLJ9WriDvGkmZMsvXKriHjdzC2Xt",
  "key27": "jq9xpKHMxn3RygissM8mUfDERrMfM4paTNZmymS8mDaxb52a9cbX8tJmrGV3iBA17gpw67NumdBi4ofWWUdpzYm",
  "key28": "2vQt9haMELn59vK1fjyPJqHAfQjtoLF32UhU7hP1rWy1x2dPWSkYDyG2MeR35175o4Qj1Z8wcUjYrgjb7CLqHpUd",
  "key29": "3mLHnjGzVDDc74Ap9KqEY8p1VjgNoonrwzr4EfpcBgo47hFsNNLTV9f5W4o3k8rMPfdYghVtXCGMfnXYMMyPeXHz",
  "key30": "4hPhh5YseACP58mPoJvhqwmkFy8xSEWMWTUdpNiUPh9Q8J3fakiM7qCm72RX7H5WqXLcCS65fXBee2ebw35mqMtT",
  "key31": "4pjEAYdXRmBjfWUnaTu5ZgjrKNdDiVEUMuvNMHDwPhryuZPbq5YBCMocgoHKo5ocxksgNohTgVcoCCxuzKaXdmFz",
  "key32": "J3iGPszV2xyVoHH4FBTwRWryjXKuVwmigYvsmucP9HPeWwMDbHHDquj3FMa1LddFonMEYJPcmhVarDnwPk6MJmf",
  "key33": "31xxJ5AmRUPxmovC4ZUcGu7orfANndZ46TG2CLn6HvpgR2Rfp94xS3aPtgVs5XUa2qdourt86XPVD2bBcKgGpBeZ",
  "key34": "Z5kQRp9FCwKZLtFDpBgLvEjpJRgcLQ73LLRh3dMe5XvPcKJim8PUjStjau39Y3LiE39nF1jjqMzqKRtkK7A39zS",
  "key35": "5jv9UsMVFEkLnrDVNCDCRba3MXuTLuJvAnFFqJo7Dg5FFGDQX2EJ7hpvezpVGgKDSi8oUSzGq6nzxsT3i32uuZw2",
  "key36": "4aGJDhK7SEEg3FBdDGxNofbyALz49FTJhg3bhXH4vFSqKoKDKbfUrkjk53f9ciRaQ6mXYhbwfEJD2JaoWxNmshqy",
  "key37": "2axVnczwJzUqNzK5pcTi6W2apZXX9y9sLPNarTTJGa92SvCUXuSUMk3qBt4R71h9Wbe3BwtY8bifC3eKCxfcM9Wf",
  "key38": "5nX3v8VULKAhptPfUyPhk6dnUU3nnnVvpk7Qua1UC9BqkC2x9uD92GA4RgXyLNehUw5KNj3Aa7eY5RBv4GvRSBVh"
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
