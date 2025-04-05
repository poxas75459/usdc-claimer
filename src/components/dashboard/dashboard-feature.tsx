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
    "3CHPGJiMHzdrKLwHdqXr8crYS7CL791oRbu2xubF4J8WUmtCFBnoQGUyxqgxTguLnPzoUhmiK8NrDLfpKHTwgMeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z15fnDF9DbkYusBhj9eLvjZ3o5TUAibcn43LsQMANMAbxd7DLQXujAWGTAhhZJAqXDroB3B5jVZDG3HqCkuKRQa",
  "key1": "2CPc5SVW4WnC7Q6okEHyyc3VT1yv2YzkaYaEQHwwkjoNUQH586RYsfujA58ok6AoCZ4VRYxpbdhs4dU4AJ8u5NpG",
  "key2": "462Gsie7MJ7Co2eASvZkVipXgXFKRS4fZ9aPV93TERXdhPeAZhLQmVBYQSHh95oXyy9Qpfg7uB8Y9T4LwxmqaUx7",
  "key3": "nKiV5hGM3qb3GAMaF8euRSgS1xnaeG9S6XQbXB8Dy8JVzcLKXZWA7A7ogyAtL7cJWSG727BknFQ8ZVAJUG9hrHf",
  "key4": "3utgMs8iiLm67iJzq5jThCjLssBtH1n7GdMSg4UhtBY7tkmY32LSVn8wkmVo9phKZs4hZg5zpYE3hm6mpjkH8xfY",
  "key5": "5HrQ29pdtoEpmbzGag5GtKZbgTNay1T2F4iZhpKgeg4se7shJySb6fTVq3e4ZQojXbPmqyn3e8m18YLSsbtaf3rQ",
  "key6": "2YNnVox9Uo6ZVZXAHXzcZ9HTTKG2VMBx9KttH7uxsYswYXmUzbmHoLVNQv9c649XXwg1vv4KprgcyeEPBrYGtp2w",
  "key7": "x26dsE8KiG1GGqrR6XH2JW1vC2AdRQXsPq4JEYefrDvC87Mhm6ZsyXVh9Mq3nV5hRdNPVctYGitWWwZsnLLsiMk",
  "key8": "3HN2RNWSrwnH1fq73aXPBJueANmpwHk4PGosBbkaLfCu7Hc1WvJ8fjVemBxfT2MsgW4dMB7KPJYfCBv8qpfYoN7L",
  "key9": "3Vfsg2ufaWEJQJXcKxsJYkepZ8EiUL7W4iyWDfSFPgF4ufXVLzh8j4NevShAMySq5np77bB9NqLUG8dzAGZz9Dvn",
  "key10": "3bZhTGhEf5azFamXwSAd1vxRmQmvtvkxeeCtBFfK6nZrSc32TWLrAnwgf2HQy2T7JjZSpYEZpDuTBroLALNxxyJk",
  "key11": "5FWZVCA5dDpTVBfqnwKpJbva4HHCs7iEV85yJd13sSNTPsRkxFP687rSqGW2siKAxbciJc4jdcTu33tiCvANenjm",
  "key12": "5MwTcyP8qSE7UeYYpDmY7gqNm7FTmo6Pnhs8fuK4sLPLhuyMb4z53Zm76cSxbzQP6ESo1wHbbNUSz7DNpm7ZJCmw",
  "key13": "3AS9gzGHHqqku5ZxbLPe8CxdUFeKcGVDkaRk6FhwokKeYXS6eAKF1t21ATB2sTxsqiutjgKBH91BH9ExwLdJYHRW",
  "key14": "4wZsNtS9Sq4WTrvcntKcCTXmj3HnBadyGqPdyXcQVLqMkDt9S1RMWpKe23wN9qssNdkaN6yjXLnG5yTKkM74Kw7Z",
  "key15": "GLDVNXhnB6TrWsXKTYWgvMgi5ycJMs8Qx97G4zzWECW7QVcy69mCSe6f3SbT8hfQdFWVN7tarPpRtMsEb8G3Cwo",
  "key16": "4kxRqHg2KKKwsmVUuPJm88PSgnnuWFfwzADZndcEMeowbmngeR3MtPUm7TY5BP2dYWVq28eCLw9QrCgWw5RNn6rv",
  "key17": "9D2mTHdMbKqXkCARoe85xBHnjQmezbi1xzx9DKW3JPFSQxeN8qagu6juniSJUpdiCDNE7kYSrasf3qGsdEML9GQ",
  "key18": "5zAbJTg2rBJiUv4HokffEgWnieyNW4XbnbN1fL3C3K1Eu3wwCTV1N5uyBCG1moe1tABzdFBwNDN6WpRLcHuxXGKD",
  "key19": "3oHawNQtpzYFiYS8tApT8SiY6iYyHfZ679wUPFFSqeNw2KDZ87z8jqRcxDH7VA4UKAcLPy7UuchPoUdEH9o3h8L7",
  "key20": "qHtimkgkPwvnavATPEh5PE4YZJtcqjL4PAvatFM4QN6h5RBNRmBmr7kSc73UH4SkSPjeDy64tJbPV9CjHc3Lafw",
  "key21": "4XooDyhBJu6zqUt4PnmopWWbqKZheHHXCTvshBVGAEEbbQeCBAYXBmGcuqQWdpDTVgXZNMcFBuSJSDgaF81RgXSe",
  "key22": "3LdwPeJz2hHtVFDLzoVUqxbywbSTeJvHC2MU3tU251XXgSMwJyfYrGgw8RRHwuXvRJf6cBr88dAJkCqoYYCwpQbz",
  "key23": "bQGcT1ceToHPJr88VRVffELGd184hTviCZEJ2w1FaYj5M8Ui1fTqjJEbtLzzXZT8hronJiBsw1ZMSKKnrPCD8R2",
  "key24": "f6Z6ZLLXdceiCwdWT7MS6SF1izLpfpR5SH2ZPgaMDguJC5Y5csLVXXKWME57WhZc3F8bLFq4VZHZczcSqVTbkdy",
  "key25": "vf1Sd3KEhKNYt8Bd1kkosXLmoxQKHCXqoDDNZ7ozrwwB8RhzY5bcB4DF2LMXzUpu6KR8dvbSWiAyEth72cDxsqX",
  "key26": "4obLk13uEiQEEGrPFViwJ8tF7gFD5ma9zaMSbsyWUXiikH4nCjTgM6MsWZBKy8xPeqXMUTU7xDap3CfS2ARjbPUk",
  "key27": "4DvJHDbqwoawNg1dg5rUC9ihKyxdHt7XxeE9HNU1Ft11YumcxJPWAQ6Wj2ZTPugEs6dU8kAaUiopBDe9QUvcgobX",
  "key28": "4fmDkLCyZABHwZk5zxve81ntjLs2MCrVJjD7VH86sM9BS2HWZH97msLoRzR7Ew1hW8QFgT45F7eDVdncaUnvj5Hn",
  "key29": "4synnceh51Gce6887fNhgr9yZ7B52LurrQCiVVJ6k1USy25XXhWSggTYnf9FHSKVf6aZZHjf17L2iofRTAG8FKCX",
  "key30": "3NWfRVfJVu8Gn487bo8LthXmndgvoCA4QpQrycQyTkTiwVzZcg4uj4mwatVN5PijoKn2qihTZmKYqFRF1LtKXoc4",
  "key31": "qWj5Q4xBAYS9CrhPGrEaSJquAoizZDzcZDd5mQr3rn4utPhkDKw2gPtA2kyf2wGtsWV7Vtv4Xdh6AsPvqE4k4NX",
  "key32": "5mR5wgMk1XF1L72n65hGcKFiPH1NAMsxUeApmRjWmmG6zv8ysLxyjQqtmCvyZS5UJ6KK2SYw96hEdUuT1oUXq9E5",
  "key33": "3qCvWCQwDMbkecpouEXpR8HpDW9tg3Vz4TwoV6ipBY7VjF9Si9gcse1nHQqZdS1TZeh1DF2dpu9Mx5cRFBh2Rr7H",
  "key34": "2HJpPf1gKVRL8T4Lbt2hZysLZta9b87RrwBRoWh7YJcKj8BSnvJZNC1vaSzfBXDSA2PoaQm356TYknMKpKtNzfjW",
  "key35": "41CUp1wwCu4xSDSedwVkywW3bzdDBj9UETTKX2Accn1pzXJAayztJd16cSQ99pytbFk9dKFEvhU4cw32YVxfaBat"
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
