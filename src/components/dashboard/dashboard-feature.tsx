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
    "LWkFo8qmsTk5kTQM6qWx2FvPV38N78hm6r1N118A758UApZ1xv6fwE1R6kVYe3L5zz4vnwGQyQLhNWCRTP3N82e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zTwgSWwzmqk9GZdASGaCYZUnLyUCc8i3su3TYDtP3mmBJwP7h6WCEwfg2eJeTGaTeUxsBbhuBgCMbFSUpNytZFC",
  "key1": "5E7TbfBhqKLzN3yqxax2PhqP1sYpq2DM9KETm39z2yvy7Tqf5tGEHR3DA23PWy6VEjsMTvvBxHK44N64ZzzfSCcp",
  "key2": "4WXNu3me86qRBLuZPKefeE9iffP3RvkjhzPbgziSXnqgRpb1MQpqB5wWKF4U53piboTxDkuea9L7BsbeUftu9M3x",
  "key3": "2FiSn8ncCjTjmpV8A741FRmSyHMBzrQjqzaDbPHXyTsAo5YaqnVfS2KegS8GyQZB9U3vvXuM85rLPi3GkVu6mQt2",
  "key4": "4mQrtF9Wy2kBSh7coT9HxeoCHgFvbpQ4Xuh5Bzyre7fA8t5Ww1ix4bycp6UH9JTH1TTiKyrvAsydqkQvThbQkA8b",
  "key5": "4kTHZ7BHxcvjkZT15egsXUoXVYbB3hwbd2VqrVguknpVuuVAKKNsAGAxrR3fztiXcFFiBpkvnoXeMw9s4GipxJhK",
  "key6": "4xhWJXYL6brc4kzsabs8LsXWzWm4GqcyRpi8w8iCQ4C1NbmdqZnVyeec7wPcDySxhbDDe7VyMdnz5rAeyMNm6aBD",
  "key7": "413gY4t5E3ddvtsEtxi11tiJ9mt1ayYi1fFHsf8eqjQ8YEbK5CRyFFY191sN6sXyKERLJZFja96uRktbMUDjCNdi",
  "key8": "G3BSc4e9i3UrSUdyscE6XtKGTe22tGiXcVkwFbebTgfJS4fZfrpWuJoPktagAHciWmb1sosmjMqBQ2vQPumaTHp",
  "key9": "WTPUfyJy47qBcdj7MHjjaZwKbm1iXBvVz3eTn7gYiWcxqqTvRn2JKn2QsPtyYVamvsz1RRogh7haruwPyU4HM4p",
  "key10": "5hSmwZuFAz3fCSBBQRtBnfC8gAwu6oqTEBK1SnENKJjcYEYMnKgZbyTwt52eXRoFLJmChAxaoWQd7Vn6x7HoaLn4",
  "key11": "3CbUeoMrzzhqWkU1Amm6qT68SoKHc4sfrJkk2ktx5HYjzfTQmq1cCTwxS36738vUurTe847HRJkv72y42eLAKdMS",
  "key12": "JLP7BLj3TS8gYX58BnEi2tWVFWiLQkCu9Q4aUmYzrgxbusrtTjzYGSuLyzVmUFpZuPgJrgpAtEiHtnmN62o3Q8T",
  "key13": "PiXj5RSr6BJ263QpoiWoyvSHjFwUgzt1px5ZGi52umfQzNjCgNaZ6KxVrFi4USnHvv6Z3L5heyoPCA6mVTk3dir",
  "key14": "3N6dVf85UsbU3pX9wvMAG4TDLaDuPmEkm2ftVJCWXmkCvtEzDf6V7dh9jJyYRiHSg2k7d2BWzohqg7evUeKxCPq1",
  "key15": "24eYsgSaspJG3V6X3w6JtWzCZJayivrCjBrc3ZuvDvHPRfCPGnu5zAvij7eBaX5oGoPgEUBXisRTj8Mai81WEYgw",
  "key16": "2dG2wyGRuiLp9xQbxG7cFbyF1jzCtZcrScPCX2NdgdmHJNxBrsXQGu7wMLD4NH98BxaFkH5CmLmgny1yJpAgttk8",
  "key17": "4Z9nT5uLeMcPhzwi9w4YHbgU32RLNfKeGYEhfUtKLq1S2tMdwGmZGG5nYkw5zWxZFuFXtZE7tboKQ5EvWDRBQm5S",
  "key18": "3AjnxfGHXZuq6ReeAKxV3Z4E4UpNiFBwyLkx29dbC3YVmLBB7H3urGjW44jAzeYk6YsC1i1atsFD9hkwVEb8Ly8j",
  "key19": "46JYfS6WcMG3ax2JqwEzwbradVpRGMhJ9s3n9cNigJ1jb9xcnsRJfYYf8BwDdnvag1ViWfGnmTwpP7NHdJLW65rR",
  "key20": "29DDN87XaEctZbdG9STbE3o25vKmDzAFxypiurdyAFYBVgkwj4LtEecpBLQknXCdiNtckeu491coxTD9qCkjUEQj",
  "key21": "QVoxzCVKCXQcn8Ba8hx81ayaKFqak4UiMnRAsfeXmcZB8GU3rB3JuFkua7Lnj72wnbVmxniWj39w5mq84CaP6to",
  "key22": "5UjfaQhdVCwz8ug4P36oeeBEyf1TwQZ6ypP5pQAV5QMYTqMTkFLQ6hvHpkJMowfh73dsnqSR7Y7cVRXndGb55TDt",
  "key23": "5R3eT86S3EZpsJ6TTsfZQZEH4hRVxfip5bFUDqPRLXWNTVhszJxvyDvJe4jMbaNZeWcLZzXw6woewujuK95RkWPx",
  "key24": "4h1wPT8bbEFCbwQPpLSQABhDV5znhyPCyGZPGexmdga2ZLcDoQz7EhnHjifkXMu3aVoihGbLWFHd3YwzCzuZbKKr",
  "key25": "5d2EvvhPzZ76LwFmFmPEKY6vMHndKAwoaRcu9LPEHWXQyGTtqgKPsAjQFmiR1CEG8uyFBNXco3mZirP88beedeBc",
  "key26": "4pykjd1fzxtw3qen85QAJvV25S8D2yUY4WsdCMp7VfvzMG2DySAVELKHNrJZbeJ7Pn3ymrVxczGGRaMEMyiQhBWk",
  "key27": "2ZtCF29mKnnNbjG7QiktGbrFNxDTLKc1EEWCFK8E6wir5nEEUmWknXYugkMq3GF5o7jHQLY8pNYX2vbxQk8JSv5B",
  "key28": "2WjkNz5woHkXbZfwArAC5oNvMnXjnKadedNxrs3vjqu4515XC9Voot2yTJsETQgrXDRMLV1rgfSbdWLtTcdUwqDu",
  "key29": "2Kddcwq6xxYAEz86G6r4CzPYTiMPaQqRLwzgVpBbHy5jWdYFRMUXd55hUz4TseTLBzUvW2kEdjyD3XkNd3WoPV5F",
  "key30": "cRPUwnAKtXRkL1fQscL1p8c14jbsQJE4R1tvsmkEoWgYxAvTy86uMnikAnCHG8UKDvWTnGe3RU3oCqJoC4y54ro",
  "key31": "2Kpc5hTMcjATZaAbfma9Fo9iiHhBNJXST9kGhicwRTQBnk8d7hShB2hKPVPq3prw91JhCZtgeSJbd2dPqAZzwnhj",
  "key32": "32LYGtTyuPHUxNfSukY3We2J6ZJt336qEJdY1c9DC55VpSJBCsp2f63otSp7Dudhd7tzwVJHWvPQSrUSKvEtSvbF",
  "key33": "5Vt9gaee4EphE8HMWkFP9ftvqGqespnitmSJ9mvE5nBCARPeX5ueQ59MxVAcjxq2wjdtV83DxqayuhQFyomLRabr",
  "key34": "3Mh6t3K8e5zrXTegwa5ywbwTjjMy6eRDf7EH5wyRU5Za9bofVzNYLqGo85Bo8ob7BiGhC7anR1Fd4EgpVF6nrgX6",
  "key35": "3ADKRRjgoyM5cNeRESwFQGoWoogQBsdpeFPU2KJncTMYSKFASuQQ5d9LMfb594UHABZoY6XT3fK5MjRB2CQ7hStp",
  "key36": "2YbmLA1U484ULPwe51vhZd7J1Rw4Tpre8psAKALEsb5snY8GQbnYhKzci4bGeTRy57SN1jryNZVpVhf6kjburueC",
  "key37": "5HrgUEh6rtaoS5YHuGE38T7yb9doZFL6zPqBmPeBCSckcuP33ipFDkKmrERajkHh9QkuWWWUMfV5vZY6Y6zyU724",
  "key38": "BBKHyqTiptVfM4CVsdUgoc3391EyFxSxKPe4QRNpwkzPaDGGHfCkwMMG92MXQX2dD88mS6a1MewCmDudU9UFa5T",
  "key39": "3YrMZBnFLqHk9y6bboxwX3mxMo2aC4pD8Cw7w9BVEVgD35pJcMcYAKhPkyB2NWg68hp7NSk2hUhd2jiNYwHb4uik",
  "key40": "5NFDDaM2XNbjGvUebxHRTqe1q6ZzqyyUGCts36aaBRTSkfJZtesNVho5qEaFn1Q5fRfw8FnboZzbU1hF1vuJ9SY4",
  "key41": "5syxB3VuMekrC6uCuvGj5Ri3v7TiBnaQJrWmH58DPJLYr6RFCBi5WUSuxEuRUjDAfGRLyryrbaG54dmLGuTXx8Dh",
  "key42": "36L6ksWcvriYUevjfnSCQa5Ln1uWvFGpheA5qooHaZQytGmrz2WcqrRmNTCWrdXXPxBLh9cMe7A45K6mBDg53sdG",
  "key43": "5BEiBVHpgLwRb9aRdTsfZR4afkyKGmoRosQG6vDnsQ9KSvyfhFDSiX24GiRxzvLCEKiA7M3irGrYizNqbbEWuZDo"
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
