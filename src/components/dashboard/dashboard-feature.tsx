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
    "HNKRi5VoAyS7nxVRL1caoGDCZEmvWCX7J4LKvmFJuzxDBjQppyHVVViPnajaPTW3HcTgfKVBq5DQU1116bndLBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EuQ2ZKUBnnNCtM23s6BJXLEj4c14EXfuqoBqU89ACYnHWGGiyseVDqPF1rhFdhrwNt69huqDgioaXbXCfR93ySF",
  "key1": "3oED63EdPRuusJP6aYXsM3CQ9hwHunsAH17Uj1e7pb4Ruv9myca9EpiNdidH1cJTcj3aKADRhPBRz4zSyqo4fvTG",
  "key2": "uzFxDeQ7Trw7DR6Cquvo5kF9YnkEFF4Te1JmLfyikS2zpeeRQjQctxPStVZh4reKykWt1X9XUGMEUHQFVAQJdox",
  "key3": "5c85a9sqRXNDhrtk4Scri73JFN1yepw8vZMBZGSbFgK7w5RGtC1YGMmmdp3ufjgY3mZv5X1meJ3xZSu647gsiXe8",
  "key4": "2SPGqnBEZnYZxeSkL8QfafatWikTSZiywuW2f7RjhSgHv2ou3DX3fBwXLtesjfNh6TcPLh7CexSDbHVbGxLZryD7",
  "key5": "2VHvo1xJjqYioD22mtdaencuB663oByhQvCfW77MqtzyZQLsHhBWRNtpEXjbAZvAP8JzsGzwkNzbVm36dm7Wu8hP",
  "key6": "23QMaH9K42AGH4ifbB3Brg8wASEL76T939nMozxS59cRkoYhiG6uP4naRMej7vb2TRoUHEmTqYWCumcY61AP6f4T",
  "key7": "hsQfdA5LFQurefwd9A178f5iaVHKYgvcuFi4MtzvK3mgpENEPM1aW3AYBqG2GHRARcc1G6bAacqet9Ws4Qyhgov",
  "key8": "61FpMFLa2379eBruuuJKbfvgx4bGeVkjdC4kA58iqkJBuxwzEqWGVtezVvA2vojZs25n9KRUuV1NNMzMKxA98Z7e",
  "key9": "5tsW2JFKpD8sYjdVUoWvt9vTAfgAC2xh7cQGEzhdgG8RbvjzG6bt8zRdySUD8XD6zua8pXs5phviCTYyt2SxnfFi",
  "key10": "4CaKHtzgZtwxTXfBPo15NWcsypdixj5s1CEexncGHxUx2dbsnmwYaDKwiaMPjtxT3GvDd2T6EXTj5AtGD5xiKm7P",
  "key11": "3pAQ2MmdZbKjybtDhJmMzPt8SJVinFBtEdYQfP3x7szt7hePrfkYyLHiVzAmkUwavj3CC6mcAaw5mmxTHmnAkXMW",
  "key12": "44bbTrBRvzvXgLihXAonEB9zwPTtTuQyg9G4ut4yWHooij52yaP6wCE4RzPrxWuVxJZXVEJsghP1dLhSdQpBgAar",
  "key13": "5UDQrBspLFV2ErQdHVDxkbnQijBdPSgFmZ8gZ4o94fAtFKXkzwuywedN3RFVKVSTa5RoBxqMc7hM9sLfENFAwwkJ",
  "key14": "4HzZihnjEbnpSjSBXPjrtboraGieywMXeMY1mEnytPq8X9mSsEZzDb2wDhpAjut6FsuLv3hhpkg5ZsiFHSdRHWt4",
  "key15": "2u9vY84VMMsyXoHiLscaJBt3uEbDV2Mk49JaSsUVu8JUgPeCvyBEFguFtBpdq8qjN4QnseJSJTHLwn8UN6o4wpGn",
  "key16": "2Xu625ZqaBJiG95GTmVyxNWCFK91UPAuNp3nKvdtkkM6XUoKn4TAEK6Q478u2U6SFghAJe21dWRXKVXpwWyVtuht",
  "key17": "4i9p5ZfF7JsgsGHYsQ3FJYpKsCPGzuzHiUucoQQ6AUdbcVcAiERQoQQ2mGQFUZMhojNvHAtwdWNZ6vwN7Rp5zwWY",
  "key18": "3az6Wqr4RFTKjtzNhUy9F9TTCDbJjjnWr74SNGT1oXNQpUARyUSM95Ks9dimpPiJps2hAQspqH9YCPgDi8uk6Va3",
  "key19": "5zJTw1BQMGxjWJBXzmM824RwT9FqRs5BrVAWnnkyaC485uhTgauJhFAmbuMqxuqyXK7My9r7of9BvPv6M8AXhizy",
  "key20": "PnNeQjBSkJh4BpMzpa2f6p7qacuNgiKb4NtBc8ZB5kQ7cWEPHes6npi9kGzrJAHgJp1uu6yE9e5RXKVjxT1jdM8",
  "key21": "34NXiEfBPzXvnz4cxghQwEAgWjfFbFA9Ue62VP7hhvtKCofZhh3QhzvM4kdNUZmZeyHryKowJK971pZr5LgTcrby",
  "key22": "5o2VifdUmoxoJYSFRDD8hP4fvjUoVxaVxw75kQQs9xDJDCXmUFLanM53H6Xc3QpdHrbepMjeK2juPf5B1YZdRwbm",
  "key23": "4sidMLtd7vvKBVfm52i5H99jTTVcsoeceoDFyqskZTRHikyJ2AE8DgU3hsPQiRba8PKb1FoLkjabkaLAdmrdSovN",
  "key24": "GAvbS87MedRA5ELGX2p9NbDisC69Y9Fxau7Va5dzZYdWxASmw3XXyQ3mcmsbzjHsF3Aujn1Ufz1Zr2y23ARXUH7",
  "key25": "7WqRtqWufgNU7NWRrEweU1of3sysFd1uDH8dt7zLpQzJvsVsz3koYmotugc6YAsevZtsVF5hu84ZntaJtr1cE1i",
  "key26": "2MhDZCw6eQDZ7rrAX6jbN32kYLCuvzxQRyiVzjms7rJAgoqoRmLMuasVcNTNP4JQBeMr77cuBdDf4ij8g8jCCKYK",
  "key27": "2KGsmKvhuqHzti7UUCVavZcEJFMcDh2jYkguDbuU7r46crKdP4aTZEadVzLiuEoqVGpvHbmSb8GXGHDxepnBZAN3",
  "key28": "2fMHVvVFyBDJ6SBMjzn877d7dPuZkSFYZFFyDQvBdB9knwZr4iyUmTYztKhw7zPqUGScEszMiyiDAv52hEvB5LRp",
  "key29": "2dDEYBQJnK85CXmKvBEWo5JaVpPP27a4qtJ4SxLdB15t9CNVGzVS3M16kz25WPo9QZiSu7AJsmiBiq3MoJSV8peS",
  "key30": "2sTQgCKom8hDwYTnMTyN7JsE7cBX5J63eTDhi1a5Em6X6tmENcUsNweC1HrsbgGqgCDzMacXaWah9qFAEAxSsKu3",
  "key31": "5Pn9uEgEUfwz6P8wr8i1Dtjrjfr8zbSVPt9cbyVEiE9duQwuYX3xpQCpi4Ac5pTArcqviHNVAge3SCumx7GTvvfn",
  "key32": "5MVGdMuJvAnaRdqNLcV1qutS7k4FV9YY7L6MB3hR6MKQWEbte6CMjD3u4dSjbVDFj3rZqXabHPVntNFqvjHybQBJ",
  "key33": "62Ukiz5ia1dZxLLUBzTdmaYAxUgXTdB4NCBRVop6o7aR3LuiZ6BUJkDMadHnLX6kKmyJkrvDFjzUvR5Lpty7aHan",
  "key34": "3Z2HFXkUVsuKkvMj4qsfY3Q5raodA9PPXJFfMaUK8JdQ4ZyJ9xsUTQpNwAQtz64Zf6bFn3mVEeZ4pdKcvyLAxcpj",
  "key35": "4EGnabwstepT45sEdhrBu5AQ8T1qbbSVhd3BVxR3L6mnbsgLrgqsnFa45E9c5wxM885NdZQxkWRQpaqSM6iU8zgS",
  "key36": "5MSc1RRopAVDLfa91Fs3oz6mTeA8oA4muF3ppsCFxZ7PHNHcTsWRK7oDAGqbFCXp722Q6Ybk13FXx8iDDE5Zu3dQ",
  "key37": "23CvxFzBa3YeLJeSMLuoCCrqLzuMYq5fWVLDMoSwDrmCZAw1vR4MWWqEVPbCTkwE5CScDPosBnzgYUWRQ6eKpifP",
  "key38": "56zGKf38X11g6Ftep9pAL4T3WQpVi95ajwty3W4FCHtp9t6PMTw8ZuCj8eTZzyk5ETS9QT4oft9DFVJ4bMvmmuMR",
  "key39": "29zrVJV1ECngD2G8kUXPhtACV2PdBsVPB2SWSs9AnJKRQvPfwDE3JdECC1Lk3i8Jdd8Ek98qXwhGgd2wVcTsUdWu",
  "key40": "2cGtb9XzXhdvqTdu4aDF1jMZToWPKKkEwz1LyTpEHYYAVLZ9XDdEr8phRqKtvKRzyREsMqujxJJCGjoMjYW73Rbi",
  "key41": "2E3qozFLK647CHsbo3NuNECsmNajUP1MTnWsJsQsQoS2zkXPyfaLufe7Fv9LKyRDpxpxCVSNhH59zZQyCHB2MsVf",
  "key42": "4TxNNMLmdcEyNt5qeGzpG9oGHHU5yQtyDVPFxB9Yx7K3MrKv6PYiJE4QZedoUKuXSsHJvvmXM6WfzsrKuKhSNegC"
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
