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
    "4WqyNVmZiFbyjBMPy35X9dX9eVyV6BzNxnoxqoSTNdEuUx9KTRCWxuJqsS3bpS7XBsogF7Ym7STQDtsGHAfyXJ8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61MsMBfPYseo3AWNWtoqVw1Cgx4ivcnG6Yg53gLwH84Prny5zqS9GWSzgM1fH3JUj9Rh9CTpomWgYyMtWMS5nj9R",
  "key1": "3fMVHyf4f2a2QBmd8bEV8FJp2BPu51Qvn5iSu4uvBxweCw54WKjuC83m1iGk8U72XhmTHT6AJB24adrRZfzCmesf",
  "key2": "4osV3RAsm6z3dceABTvHVL85VQeL7t4QjMJHwVmizkt5gYYvgAarAXD7uEYjEtV1HfhXBUniGijBNV2ZtjJBw1MB",
  "key3": "396YhniXDF6s8Hx3t6mWeWvHHG9Beai66n3dPGnSJZs2p5Tj8d3U9y51mEQuEbHQbKYX7f6LsYJ16jQX1YK1N8e6",
  "key4": "63GVjYKfhh19ZAG3nY1a6UVcctmjFLyFBs5Wg6e5xBXfksMo6y5q9THGuALsfTzEUwxmpfiBo9qRBrWjuUNAvhsy",
  "key5": "53FQ5w9Ch4UYFyinrume8Njg1CN889vBu66LKMACzRFXPNCKohzaZ3Fh8gsmAKqBuW61VSotebb7B1QHchFQurEb",
  "key6": "xyUf4ib9BbTmJGtinmfzQykfikRkdZU9JHNudbXQciW6APGYNChdaHf6FjJhcDppDz7PGULPig4hxU4CSdbgYDU",
  "key7": "5MvS9dMw9wpyoRpKiVNA9cYqTt6rpgv7ACNJwy9FfAinB4SLFS2C8qxyQQijDdAPeGrSkYXNCdS6NZe5p87eMryz",
  "key8": "EqVSX3MrHprT98grhk7ZbLEsoV2ryLCDrno4RdYntuZZxALNJDsZnzUxFst7STYy1xUhtx28WmKdfoKLTTaZf9S",
  "key9": "21921b4UKVsDEmYekZAka9LhUUAZe2BRmPC2vGYiQFh11gHyscMisTztHyCwpcCdG1ExhRFCNLTPQPzyfBcrjygf",
  "key10": "5KcMEcet2TT55R8Fi2tCZhmZoiBKFjmBne5P38iFgj3a7MbA9y34gZ9X8YnjphzQeR3Wi74G695R4ouLePjYwptJ",
  "key11": "4r2aLKn2hPtyer64Ln8yfAo6AQwKvan5VPvho6R4aC8DA9veSLgwDCvMVMH6annkrxTpCWPaHg3B4hgH75j7d76F",
  "key12": "2ECYpvwcn7CQAJTnK3NZTD7S6CtV6jvKXBcpopWrJMexheH9tCEtuQvnrdbGUfq4UtBX4MqPKTGiTQAXRSyGT7ag",
  "key13": "2rWUo714dMkBYejZupJG3SBY28v7SNfrXfKzR8X3AURpJE9j2qoaJF4NeV5B3Jh3vhLdh4BiRJoZffuwe8wU1H4v",
  "key14": "aD723Xmb6Aad3vzVb4ovxLr6ujmCNePk19DX9k6c2DFPQVVdZnpkEDUVxHwdSY4b29j242w26XzEhE3cciKPsuc",
  "key15": "3UxqvUFTwN6iWB3Y6czMj9YE6kPpWaVP4oaeiyD5qcMas6j24uEmiNQ2KT3Dkxjp2KUdD5BqKzH2bBWDUkuA1Azo",
  "key16": "2WQTLxggvf61BdNMgTqHnzZgG38EaPyPbrvmBK9u2Uv9d1b754a3cRpXRs6KVQ33oENt8FZ1UDUr7grUxzbWCCWk",
  "key17": "wDKk587cjT3uQKvbs5uX4utSuYddsWKsiVdkTwoauaX6ix2jwcRmrKFGR6CVHvdRbw4wkDd1XpXhwQnTd9ecSgQ",
  "key18": "LnW4uAeE3Xn2pZX2sgiGwKge49ZhcJMDo63w6vYPt7YsBk96w2QNgJU4RuoC998wmmggTykWF6VqYxJePybtnCe",
  "key19": "4NfsZFqUJyxeVkbjZ3HAygA5WiCXFfc28mDfkFkUUMtmoHD9xZFaLz1DEBd8QUCVXPuhDge1BGyjyDLVZCNfXJSj",
  "key20": "5wrx9sSqP4tRr2MHDaRQuxRAejP1SHoW2vfLawtGB4BcpVRWbzcduqmnfcPvjAXZSgPxYCvMSCVmTkuqrbbkTNbs",
  "key21": "3RErBC9rPaJfV9814LSYUe6oX5KHkzQfMegBLD4LWXA69NJZba5DT6iteCT5T7UJgcUs1wqmN9rNXK6r3A4HnNM6",
  "key22": "4vy1nvkNfNSirxCexY4cj6BRnS7ebWLPcadLLcbtAobe8WngTeYeshZaFzAExAHxNPrL57L6ZSyvSN7p4oUeq9Mt",
  "key23": "2bJGttUj4AcBCvuQLaEuU6xZX7Yce7ydomaLQkWhMYyq7b1XtpyKp6NccSWKcpuSSgoE7k8DRGmquPXv6Cjp3qpJ",
  "key24": "4rdamtUYhypmyKnoUzmeiKm3JDDgvKi5DBgRiWhUQtCoeYoFo6yUEqSpDfVdcwcf2myP5gjCCKVhyFRoraAe9n7f",
  "key25": "KgVpjbxkTtPsSWYEmGyvyfjRUk6EBC5jGndh4oi2gPd2oA3gemaJCvAjLHN35EmWQZhQudGXXAu2DamV5GhX4j6",
  "key26": "4btndJnWUmrvH3gwQCvy5bJFSpm3zbatKyCmvUkkSifYXFVDaVGAZ5SBXZ5HmPv6G5gcrewQHx5NHp1SkoTfmWZo",
  "key27": "4h67wfypSq2CmqnHgqT6TXwanVzCvZW8Sd3xsiwmLTNStrWnnT3d5twhrUj3xBA2n5hFsp4SwQsZ4SmkoKQUxXUZ",
  "key28": "3WeTkdsm3tzwHUYbM2HZGufQ4jr674ePrE8YsWbTNfk1gUUxL32HnPa6MevGzPoQNFVMQhkDbD8jTkdd43SFCM5w",
  "key29": "4g1GcUJjMBjVZtitH4wPcPu15URXsBmkufPZxoc4jxkvBnrWjjgUDUKBLo3Y2XZvZrQsSkbL7jxuLDfnYrzmXRd5",
  "key30": "2HzJimeVUu8xHeveDEz4nphVchvqhs4wJLDQ7eewgXdNKQqKBP4NaDQgzHQUxZs2KTYgQTRLBCNAqMo7jdSFUD1o",
  "key31": "4SGToJwwcKovzyntLXtg3TPwuzQPeMAm78o5piTCnxTSgYXfyX9sdW2Keqp9KvUDnrsPbCLC3fSW1nVUu5vsJhK9",
  "key32": "5TRqWnhHHPTRAJeF3Y8PSmw7wPANTbYaYzWq9L2TbiEWJnMknokxp2FDvcNk7o71q5qPBrgY18PWQPBNr744enQU",
  "key33": "8NbCRvodnsWnvr2K12wghaBFTjxbXpE4YDpNr5e33H1iopsvydJBAgD1szMPbxBtU3UMXP2pZKkfYNhkRUsB5pe",
  "key34": "2DCa8aptfV56ABxWA8ReiLp3TZ4GWYVH2R62usBars7fPnveXUUzSZ97sMsJRRsMLTyY7QBeo1xHChPp9Afhf8ih",
  "key35": "5RE2AbbRDVZKaPDXZSoA5Uo8qKhnNZJ8WjY7cGjDUp1yLRdMnrUbRKtWoCrqpYa9xQ3kPa65z8Aux3MvWKtEgBv",
  "key36": "1wUC2XKfimz8HQQk2oDB5yDRTH6bWs8FWt1P11qDXc2YQJHXvXsnMf5bGdFabTssdSGFsD44xLm8XTf1m8ymeVd",
  "key37": "5HxPJLeRf89cyVAF4Widf459q3N7fn2KW9bUitxahA7zuFEatpLrBWtfegKiSSZBdjR2vzEDV15iUd59P7rdZDSK",
  "key38": "61ta7Mqikf55VCV7zZ8J2p7EnVV7BvSZZWdrKqw9byjX61M1X5itrxgq8H2KLNmwFYE9XQyQyUuMUyzEk1Nh2BaS",
  "key39": "5twRUmMdUe8rqrfaurZDbXHoEdSqQCjZ8EvbzRtcQb4a3Ayee6MCsq3AcbFGMJY9u9wNZHiuNqShZRwLdPXdTuHG",
  "key40": "3BYKrB6GFFMMtNYncaBnBii4P6tm7zrkXNsQ9B2EnmduaCFccvr8GcU5BtN1S4ya8H2mcax6pWkuXDtkbgeuDjX",
  "key41": "5AYLPo8AgvjNvkNGQipCGnhHKnDLRAQL7yRowTQTne5WYrhP1fJYb1CoAJThoUqhhQ7ywzCCsm9fRgZrkgrZZhpB",
  "key42": "2H6kpgAND67rcSbKVfnooNrWo4XuXc7g3q94uD85YtDMNASwPvxH8dUry3WKa5nCeUcCsaxVZ2XcMXy3RrJSBx2t",
  "key43": "4SvJHR54TZzN9ASyQ974GiFREmq4ZKNTArEpkwMpNS83ErZ1K1Acd4u9PGmH7VJ7WHADU1o6dPb6nzrM2c2JY4T7",
  "key44": "5ddm9ZXQRKTqUS9Gb6wGNrTm18xxDXvVjSqy5Ng96AGjcJKHcU6F2Wm3J7kBsRWKGzDHaCzBseFQs3zjBLCBnGWd",
  "key45": "3BjYgH7yFHtMMCvxqjbfU5fjefSSqSMTZW8RhXQqMoi28CV5Da1syFdLBSHD3HsY9yYwpNxERchjmpbhT4aQQ55T"
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
