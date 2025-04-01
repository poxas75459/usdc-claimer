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
    "48RWKrZh7QEqE7nQPpwrMVzsAc9QEQhWRwZS2wUgVMcG7dgmUShC5zekXBH49cbNEnPqhab1Hmi4hciHE6jwh9rr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T5yAEktd9oAUQPfycwq2bxU3DjSsLJVHS9Y1yzQASZdcyVpqSAAJhGwnakCEmojb6zVGReu6K5MwhzsmUttAEaS",
  "key1": "3pq7su2T3ukdq47uM62SPpA2o6dcQNQ85DbJsBB9jMsu4FVXqEbBPsTwACwop4ibXJk2JoZWpJ32dnu6zVwEGUi6",
  "key2": "3marzw7nxJgZDpveQtdYf91gLwKiVFv1HPDJ64rFjvEtnnAMLeV4wzNpMuvkZWPYqiRb9zaM27bcK3BExK6W14rP",
  "key3": "4MTN6TrpNwLLHs1K5iEJUQ6hoa5yNNg3tgHk9wZKeM3uUypMguEuT8LMeVKdjJGe264FttBhQ6ig5JoN372gAXMY",
  "key4": "5V8yXxED6XDjKGhLi4MFMQADwTkgQrDczxyMgxcLauT1NevFNNpVbiV6mnwW4TMm3kt15PZ7vCEn1Wnc3SCCRqg1",
  "key5": "3wnFJ1DRL4JdfgiiNkVGG2hJDNg6Ecz1oqRTEKb9UgzLeGNmwwW1JQdsQaKCjiquxWKvfeCJhaJ4G878VY3aNfr4",
  "key6": "55QpXncCgGZFju9Lmpa8VHyqJJbRo8MUV2JPBYoLuK6Wr3kthsyV8r9ThzDXVyuNJaL2kZwqBKF1gLy7PrFxBdpv",
  "key7": "2rzsq6e2VP6STLYnVXNG8SYMcXinH5BADUaXG6XPXWJZ1KKtwxcq5ioyYAUpJB79EPms323Vg76yDR1LQVWCrtt9",
  "key8": "SQDWHSbqF3HLH42saBzNSiu5iBEZNFfyucdXmxiq4JwhSxxpbd1EmhFCFjEVQhKdgvmXEARE3zSHy6DC4p125fb",
  "key9": "5ZmLACBabyZ1r7P6zFTE7e8PBZGbRhTQK3BJinqiwdqxebcUdw5LZp6B1SGwZ23uXqBaecqvVDsKQznkVdnNNyMp",
  "key10": "3uaVPynJKYdEKDnYfzcburHXAEdGbutrKwDRSry9ByjTyHioz2MT6ZfTkzs7Xj5zR74MxJdcza6MHdPMrH1TThPM",
  "key11": "382zAgXywUkBFjPTwan91vsVc76vBgDJj3xeYkD82zSDqH9pjwT2ryzfoothBsJRiLEC31HsV85pbrmQDJc3zWCh",
  "key12": "4WnXvs97uUWSgBVmF3BGH2eijfbupnEFRBnL7YPtNjWCHcsV7yHKx6qT8C7EaYPvFXSDJvuhHrWuMyKSd6FEAxqD",
  "key13": "29FrA5YmGw31K63X2gweAbcdkfim9qsRadGKZ3CyMxE8rSzaN4JJZcSi4M737BAGc3r3qefmyKbCCbQ7QP89V8ZL",
  "key14": "HW87PuwK6NFRpEmmSfsN6DuQ3BMB6f6MjWhEBCa3K6YdE1Ao4mz2HLHmepbmAWVkkiMiAFiKxjPYWTBhkf3Sfb7",
  "key15": "3yNb8oCFgs5cZvLm16jEFeogx1G1436JkrYgtdzjhSVUykoGSHg5F4bwiKpBHxxLEJaEN3b2WwLK2xvMPuuURFs5",
  "key16": "5TsZTrR2VY83FyC8EBzQvuMXfQQ5UPgybxASracYbEeQSAEUDxp7ZX2xGcb6U6jddqw4uTgjAknxPXRcecrNtSVc",
  "key17": "bx1eAJcR6FtwekfY4GTHsmFda8u1k5tz3ktuVboHU2tNYGjF9tTxtMEdyowFS2dH6XS2LmjVh8H54vYzuPBWNaU",
  "key18": "4H2dumoJSvBxY7jGLsMMhiPyYD3G9EAavUdsj88YKNzrfunuowDuyZLab2M25vVcodzAN4jqEEW6fzEt8jKiGXQF",
  "key19": "4yApNq5zuaz1gTBrGmJYoCydARedULu6W7uXz7Fj55wjJAAXH7gvMrMd9pgYy5jBeRyMjPFZnZNUsajkQWhKFRzT",
  "key20": "3DkaSJok142Vjt1gLS1q8UKWGRT35yP6X7UT4CcSC5k1ZWdYa8d49NYW5kQQ8DsoZrzFaDmT4kHii4mkjTQGp2mh",
  "key21": "2wcZxSiFtkCWYvgq9YfmagT8hQoPvSPZ7vzJKXp3Ed7W9Ha3WCxMw77vnXwtnqkm4uwr6j5PaigWZD3rfVGAk4kZ",
  "key22": "v4YHJfUcSCsWkN45mKV7F4xNHGcsuTmP5LN9M6C7RRMTNaapdqfxqr5mWEemesVPNTQEyZ8aw3vCNqJybRSKccY",
  "key23": "tMcEJVrV9NzgpbpnhovMK9Gc26HGcducTbBFHMQM2KquLyhvjTMJLuG3h8BD7sB7TNSyPBtJFT8BTirFFVTQa8R",
  "key24": "3tKHg2HKPtTCXK8EjQRcabT4zRPgLNt25AwHmSJrAXzZ6yvXCNaB7rJBatyrW5KCh833kTMRKj7s76UAnHTVaKme",
  "key25": "5Sa5WyUfNdghRM4QmN1qhrhzCehsgWaWpGonV45Y9SSCoaAnRCf8hmCN2xWskxTqbJAKm5qWfE91qsPFcbRmQ96s",
  "key26": "2EE1qXZBTcwLfChhT2C1L5e9uyjYd7YXcqJf8rw7k13VM2W8DPudbtBpXE3QfRMXrmEh76nLKBAtwZSHtx6hqq6d",
  "key27": "2MHLfKQ1gxmdpNE5V9GUe46MZqMpXz6SrqcPaQ2u3MvrkjqsonAPVAnkxNc5jYxQnM2RxaVrP84j4a4Gj6CdL6A5",
  "key28": "3uZc3CWgT9kFkzdhi633FQrMH23HRbMdpARZhCjcmKsVcQZqEpBVga8WiT7RDqfmD6FdPZpZfjP9qUjXWuoau1GS",
  "key29": "5oeyZnC4WzfJc7wnuhf855odFEhNtJzEfMvycV9nYUa7QRgY5WRv8MAm4t7CCweR6KM2S2p9KHRybu5kqsLrS2YL",
  "key30": "2hYMSuChhqPbbubsNPe6aeRbPtgQr5FU4ssGy1FGXC3TRJTGktHjnuYqPd5NiFzjH7hdDaioVxGjYnppfHb2pr8h",
  "key31": "2wCXKvub71wkRDtt6HiRL9HGg2QKZoTaP9WiH1MipbCkyh2yhUvFsAfvXjE4g3FiAUdmj3xsMjuoRJs4vrTnTZFe",
  "key32": "5Yf6wuf2Xi5kWyY5K8i9JomRnhY3wx6igBFUUDxsRezqGKuydjdATpSvgsHi2DWEAiQfhGG9NAi7vKgNyoshUcRU",
  "key33": "XahXCWsQf8NnGyDZVx7HfDjtMFmygaDCp5zMDuwnQP5KudA2zWs8QVHCuHWb3VmJNks114R86o2pSeSbKsBLdKT",
  "key34": "4taaB4jzAeivHZ6w6ixFpfQ4RPqYLzPAW9qA8iN5y5oJom6nt4nBFL3veAu28XHVr6HtMnqM7mEVGQtUVQF9s6BW",
  "key35": "2EgfoQH2pk6AyYtEHFTAvznAyxsuVh4R7t4rSC8DoKBkqX7C8RxbG9yzJEPT7HRz8SpUny6q7CChUwz97kptrQse",
  "key36": "5z1vG5JLu6D4f5q2cWPDmUjngmUBA67rG9jUQDDu7SrB8WmctcxXEEfqDHQN8vWBZDb6fywq5jC4Eyq6jrNB6GsT",
  "key37": "2VNMtFMAv2YDen7KkYApbiKdpqy5WzzJZ9Uw4fJr3owuf9E6pijkbWa82emeSqcz4TaefyCGuceS7mtqT1fvktPT",
  "key38": "56k58JAV1k97DoJoyb49e9dbnpNV2Ah18tBtbREWKPDxbUDPonpJ2jZEk3a95hRGiy5t3CVh9dCxcig8NfTpMv5p",
  "key39": "5CiaGwrFbe4mMnVJD49HEF8jQzEynxe9FzMSUKDnbapseeVQy8j3GDgzTVUnDxUqUmD6zo9UjsqLbPgwzKqcdoV4",
  "key40": "4BHYksxYTgRzSBWwDwQUJoUtgnoPdnXi5kYvHnudqQUmB22gAQnodneTsnBMdtniAnWyVCWTRhijodi6vrMX1tZC",
  "key41": "9urffaBc5Z4j6MFstK38pmaC1PpBT6CG1jHdRHcbherkFRCqzfsLkdtFnUQSHrXW4xWb6Z8yBTKekjQQZB3EtBA",
  "key42": "4i9hotRoeomdt9cW1Li1AvYae75SmyuaqRSvdJn9pE7tEWTH2GWEsPCG5NwbiePf3UCWE9aXhNUWi3rGrS8LSMMr",
  "key43": "5D5EyFoCwZHUNdhiA6Mwu4brnJFyo4H7hAB7nmwp5TohkD6UV9UUj9mQWrxAjFWcx8GJiP6nGJ2gsJHv1NjUDDyK",
  "key44": "5uh35i8jvkP2javgPbhoYirDKr7dLfTYgiJe4xpSxJFwfuhz2A3W7EQmXKiUx66eUpFw21x7QdStAbBwzBYBC7jz",
  "key45": "3cs1gvhDQ1nwsomTsKaqhXKeDJrod1GkDZGwtoCjTxGEegaobeNzsgJhn4BQK89ZRJsBpDZxdsGZJiEPEghYhGUz",
  "key46": "3f5qiEGhuutNKzoaBPskZEFGTSGFKiEVF4dewgZVTPpvEH9dXpHdLqXbea1PQAZT1PRcLSmQGtyngCWiS6L1VxFv",
  "key47": "2DLHC3Lj1AwRZoBdszmepUBAPZqiaG4pGdPHivPQX6fQwP9uW2WGM6MMX2Rapix8m73d3CWa4q5jydTvoc68gxKW",
  "key48": "58a8HVTYeietZqiUE65bNKaCHZRXCHWfyWSeJWEVczkk2ck112wBrJ53CLX59yiq8XQfzgeJBUpmP875xddmC7Gg"
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
