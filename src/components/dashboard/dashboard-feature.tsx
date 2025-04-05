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
    "67VXP8YB2rtD6ZiF918Tf5uzECzSLnn2HHSu6xuqcwaHRDePLb9zXdD6H6hoyn9QZeQqUuVUhL5WmjLGRBuRrPHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yakCLShj6U6vw74938qxmagPo6xbgv9eMfAjdv8oufnzC7XUb7NMjo1f83KjzUqCGyT9nr57HUjyNM9X9ygXyZR",
  "key1": "34T8t3x9BhpqTminyMPCnsyGfSHqqgiGR1EiHWjFLhMooJGgaqFCZJnRwf58vWkF9aPcfoc77VQH2GS3ZCxQG7YA",
  "key2": "4qgzpeBod9A78ZNkQMggLJ4bBfrVJ8XrtK5eEQaW4nHxuKkvVXhm24vf2T3e5pqw5M2oR96vizANmDajQ7TGRDw3",
  "key3": "66AF752H4JGrWzgEWWpihCr1zMRG129TEK9LWW6sL2Lq6DW6CXGh6XKFaEYfnmB7upZ7siL2MnGWdZzxag5o3kJt",
  "key4": "4ixyDdVodQ9EtLrS6RGBf4AiPWqYp7oQxLByvGQQM8VTU3wztVASAZUV6w9FdEykAtAu89UhUf2Zw9ufvBhQ5FGr",
  "key5": "7UbshqfZMeZQMeBeGoU7RL3WaPLB82Nw4yFCXRF4QZurhF4BKjnD5x4Q7yXkTCSR7E6j7M8UeoHzuGerMWdHDrN",
  "key6": "ULQ9daGjGNuiwBnjixu7ULRG9hUL7R18QWG8TXtDY8WCNzHuSPy9G3xTTjo4wo1cJn9pk1bvUSPqjiDzkxw7qeP",
  "key7": "3Zg38wU3N6S6cxRJEj9G4VxHLXpJ4sodSWhoBw81t5F5pYz5uFQmRVrmSQiSSGdJPThBCMR9bA2CYfNvVUa9avge",
  "key8": "29hHx6ZckB6cu6vnMeKr9hFkJzmoby73TSHtDTBVyqb5Y5wgq9UDK6ueRKuHNZfoNsdTsppTWYQzJJmsXCPCDFkS",
  "key9": "3rpPL8wc2hdMz7wGwmekX9xw4W7Xo29946joNsQ6K7knt2e2sZBSM85yYFWSDoPkD5qBeJ19sRY5DtBhBSrAmvb9",
  "key10": "2Ju32frFeXSu7jKSPJazXHFJJDm3dDXKECET6Hhk7WePtJSehUjJSNBTzJTRbtt5CMvXTW5SiEfAygexQBNw2NYN",
  "key11": "3rVxJzHQ7DYzrw1p8rpayuAhEWDhFDuwve31HgSCHBCrwtSjWhNCaKSotgrmTpaw2pw1HrEN5KrYmzVKH8RN4gkW",
  "key12": "5bcp9pb3VvAcQDdRcDpLBJg2c92FoRiihzFwF7p9rAAAeHYFtxxVEkoxk7ARRwnXEXdWJLQGpvo7rVwbVz62vDTn",
  "key13": "3AvjxcMBKqdXJYYAFStEnRwLhDg4dmKWwYAnVw4wvYGFxe6epG9qr4ZfKR2jWmWf4UrwUoZQ92Td3Mm1N7vTyFJ4",
  "key14": "45mdzhyuoWzuwBvUyiLNSAtkF47WZmE5xy4TC64MxMDhGcpZtmiKMWzM5PpthUJiuTrQVyYctPs5Bjf2WbXtafgd",
  "key15": "5m5Wa47t3nzJZACj4jRPw7y86H43BkyzGUHp4Kr83PjwZSqz3XGLNRJKfDBwHFoD5SRKoF58AT4wGgDhSGRR6hd5",
  "key16": "482AdRfdjdZ1qVNQ5AYaU2xKthJJgdG8hAEWGTqTfSzhkzAtFhWFesPCJpW7PGELLXhxA3gTXkhFGTrBpoBN495u",
  "key17": "5pVXzikc9ARYRjar23vkoiVyNTJUtMX6ymJSGN1eT7FbVnFtJBxQ13LmZZKRS9d8V2Lh4pKYxcTrmePqDUErEFuB",
  "key18": "4XgUuuihAeFomLv9UyKZktkQJz6oiaNpVuieusjmeMAWk3LmyyEkFjpzdLdpfB1nT9prswFCu3PHBX3TvexBQHRH",
  "key19": "53K2BMCW2vEWvcyobyBq3AxKei13FbDQyTxeKogd2gTmxwJx6TJUAboQwDd2ZEFiSJVusNus5jgKqmS3hySxFcDe",
  "key20": "uuocfTxNvK86H5X5GphzFU5PSE8K9APfyXJCnwESHHhTzNxMH1MYTyDeQfUtv9eD4M5kvurdgzjzfgq111xPmQz",
  "key21": "2gfu41Ahk27B6R3TqaQQUJnZuqL712FFVUX3HT4sb8dNN45jefWyVaq2cdRBKnEVrY9KhEBHpYakwZpSeZWAcxh2",
  "key22": "4gfu9ZuHvscrLEn61F21K4iMxDqJ5VgoT7c2fM8x1xzXwFvizkRQX1vj5vyKphNWG7RaGqERsWKzx6M9HMVrk9jj",
  "key23": "3rgtcBjyy2vTUf8VeDBUA4qyBAoeZGUGrQvmhQxFh4NZ55s2jaD6TBVAPE43zAgkErbRAe9SfoPMFz4pm1bUXf8U",
  "key24": "3P8siEXqopCtWHpE3cKEGPoFoMPcQwedXHjtPHpQbVAmV7LymSZoXx6LGqU7QGRKEu1rNu7466pvDc3TkLt7M34e",
  "key25": "WfRjwRuVakznt5UbiDa6cvLAykqDjBVh2brBEJe5rafaU3St6KURLaa2shPEue2JMiALVxjQtymdMxmu2SHzcY9",
  "key26": "4XbS4rXDhrL2MCukri8Jb5L8LrYh3imYpLjePpXBexENKpZ9YNQ2gFWtdR9Q2Qb4QUdCo9BZJAw1NUTRa9bxQZki",
  "key27": "3FjrbDT6oBwzkobfvkDDCGa3U8jpSacM4ix4vVowXntzmj4BbpeH5sktmD1RDtuRXiEdY47P2W6CQr3LAMbxnZkH",
  "key28": "3FRaBuwbs6HZ8caNdA1UQWrAXphA53ECGpiA7EyJq8U3TtdRLsiKxSF9uFUksHJ3zKeR6veB1APUpkXDLipJopRX",
  "key29": "28ErWTXoqQL2f8GmauaQ7zrAsFY2fXTG2N32JQ1py7SGytYUaXWcmrmbugoYF8Y5SMdcfcDvbyBq8xLPKeMNKrmY",
  "key30": "5HxTLqn52FYiDRYnVMEuaVprPPWHPBiRbWStGow15jnFvRHF8KofVKuWHZaZeivmm8BXcMGWRsCA3Mtrzc9iTc1t",
  "key31": "riQsQuG4Rki2Bzzvcj8RrdjukNd2WqgBCe7Tg4Nqjta8aebTqonwyvN7FBnAz5eBhfNyccYuiZN7sDUZuvBEGtp",
  "key32": "5ZLDtriRLsoHZkCPCzVFrzcvH8QWzhyU7pk9CmLNXUitj7oAbed9ttKowfnrMb3KW3rNpEFtX6CMfJHM3YvfBGTs",
  "key33": "3uEtkxvtmF3swTaXFcK3TDZKnSP8ZiKDZcB7VQXdn8gfAAfPsueeCBEq7KFoHWpEkkoJQAVPW4QySbcBmDRebdGf",
  "key34": "3qqevaFxhPtBf3GEPwbi9YoSDntWAc2HenQa4oEPwxXWFPogdHroLayZyHaMPh8wcUeruA6Ja3QTT8snfj7MA6SB"
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
