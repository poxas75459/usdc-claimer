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
    "9jJzf4mfowZ55XtLcpvWZkBNV5d7SyPf8ncERuDQD3KjifihkjDkffqPw4fWzvoa9AuNDMoRQSrCWU8d2KADHVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mX4g3ThvZtKSj3Nm4PjvWyv7UaCgMwVmt11389ehjXmJkz9FXwMTqoki7QEEi4SzgLoaQ9Y2ghhTGPpWCBY1g8D",
  "key1": "5VyCUUfPjeQqCkXq2VAydUHkVa5pFKvh9wsZwqLhxyzQjiSTF2KSWX7rRP5HMmqVYPK1w3XtdKkzw5ez4tuoAEKG",
  "key2": "2AP7o29kWquMXrMosDKmYv66eb4j72K3m7ATTMUh7zYBr51SFW6DR6JBDe3v8ouNeijVUsrtEgBZvkFgEsbYDpeJ",
  "key3": "qWYQsei1RidmfEA6VtTfNp4nTUerjrD8Kt7KbSFrauiGcTx7dKW3y9SxbDLSR5epBfPY1T7deLvcPngyqRazdpx",
  "key4": "3yDcYbr6iSitD1dExNUWnzPjPRqV5UA9Bm34bhjku1hvRPhBqqiM6EVpNAtiTHrQhWv3nE7SDV5vVKM4epcvbVbR",
  "key5": "34QUpaArKg17D9fj57KCEYqxzuQ5kaYg9Gdm7d76uMgrUk1eo1bUVZ3yPuPLLyBS2oihNPeBeMRHs5kor7kghiY1",
  "key6": "7v4J9pcEwPpfE652WzdDPJ8E1ysQhSDPZSPGGbGtUy4SxbXpD2SsS9DpeJZAuMG5XRP3Gv5uFDFFfN9UyJzfLdD",
  "key7": "3WJeWF6iR2ejzAJRJUnNu15raWiU6PrARdie7q69ZGFJRPi8ej5DKa8HRDeiraFKpnzEuaZAENjzZf3iToxCL4iq",
  "key8": "hzm8LxdDL97vZqVmLYU52uyHmQPYQgtc8LB2wczVEH89rPWBG5XLcSUhQim1VGm5B5mJaBVJZuF6wF5kBxDiZVH",
  "key9": "3RCXWkbQLoPR6oFwELqN15RyPBssAH6m4ScyyPb4m4tWC4ooQhfqKdJhgjmdj5LXui3qmxKwKVhN4UodbKeJ4aQb",
  "key10": "3K5C4p9SVNMqCut2PgRYWi7Jf9dWd2obHkh2ZfkMQtzR4jNv427v58knqdNBuoMeXkbd1vTUaGE8LutDXnGyhrer",
  "key11": "4JsPDSBMCBvBqQJZDrYTcKndVCNPh8Rbjk9nDk4TfqtxFxEYtbByDxoMyzdLimsPBXzT43D6RLSVeFBxv1b8azm3",
  "key12": "61bqQDnMq8LTuBRWeJpkzVCfzVgAtUSGeUcs35aZG8tiibw2Y6heo56gQM4caFsqHRVa31SEDqzbPSau2WRLPp8g",
  "key13": "2MAC87ZwDTKfFpYrobngCi8bHe1w4fdJYB57ejmXkuFEGMjXdW6wTM3LZJiDpTfqCKf9vjAC5zhRptnddR6F76ZF",
  "key14": "4KGEATqFiFtVwXqycmMdrqbgzJxtoShBHapUAUtjw11TAj6KfM9fCuDtpgPkq3qTURw3NeZFd6rccRWxN24trvJ2",
  "key15": "4YPbXBiWcVtHrGL27r6ta3ivfTzxikcpFUEYZKSirYcomgPawmunxVnvFRVVvXvW2exLjos6PosbCExQwHarqJXB",
  "key16": "575jzzaL8e4fhCMx93nTNnoufiQcFuxS3VET8aLbYDHCQZ7GJXWRkxcmCQGWnZFo7jvcdSRaW47jfyMvzVfCkdQ",
  "key17": "3iKkqtZ3Qe9YggVj9npVGzzmCLzqp4NPn2JfFBnEHfemWYtEabXbYSAbmbLVkrasj4Zn8rZzSui4DE7Tuw2mEcMc",
  "key18": "25hB9z5Cw7VvnM5PSJK1gTmqdBSFwmGMwK8ZRozZxu8u6XsbqsyJSENAwtzwByZgbGZ84QKpZyJhj4CTrMPXb8rz",
  "key19": "5wbcyz4iteja5wtUxp3c8d3kxxWxJqsxyFhzq1QVHQ4Nu1rar6W4CCnHi67bHM2skexo9DJWVnP2tA9XRFijnLH2",
  "key20": "3qSEcgG2pQiWrFpGJavhw2nnQVYsqcSeXeJH6K5Jjfu4jUTQjquVq2hY6k9NtA8ozcaSH77WQnyi2BGrqWgnmmkG",
  "key21": "3EUDYP5GwSeQcjpVLFwa9YgvLcQ4goQHStxZkSuVuEMkRCaGWqCRidAG7UAff2RS7c5kMaNtwfpvrAcmpfBFbRcn",
  "key22": "5MwMwZCpK8mRRPfhdfVNxdxMhVk7twPaZThxMUJNxiEVh3ZPq6sXYbgbno7kqCprvmHfgugVtqD95CT27LzQatyK",
  "key23": "4KY6dWLJKjdUJhbZBgusVJgKDj1mPXua7GepaWRUsRrpVhqRPQhbRnu4b5LVFvpPtittftSp3kSmUBpnQ6VWzMbx",
  "key24": "4dwYQNiFLfwXgHn1ViVBx6STUnRTeu73vzZMZLCfNCQCXoL74MVZJPBgPX2Say9GYNeBDgcg2Ad4w3CsmYUrNj1E",
  "key25": "7zA6QYqfZ4awJXHrYMZYK7EnnnFSzhzHxV2kdTCaVfRgB995z4HqNcwBPDsfZnWmGD6uuDfT9RXDjG357XbLFNi",
  "key26": "5yGRss7yQ2Lb5NrNjqaF9KyLP2E1KkUUGV9K2QhzRYPc4Zriy4o5ueEyV9oR2tBsan4mh9WW9GhP4LvGQtWepvpa",
  "key27": "2o3bAiYz4p2QfNMry5ExSaWgPYDuWs3DTrrsGGRxste6hVeoY71HL2uh56kFMK6YFAFjFSXEj5tGGub8XC6Miu9z",
  "key28": "56mJyqFmALqfUXZwksQhDcv9UAvgxARBVXrqvArZEkwkEE6LXkE9hXsgzU4toU9G3a2KyuPky8rFd3EFETeuyVdC",
  "key29": "57ps4FeXYos5d7FZkRPYZefhsvCYySVPAV9cA4oYBHgRaBcGpPqwfsh7XbyQQFEvqNqusiRUwP1BQaqfVZ7zymSF",
  "key30": "2vUkB7Nnf8nC7irTGwjhnmjUUhH6AwzkKDegFtVbx5PxnfymXmuPW2UUiiaxqxvBNyDRqHags5hb1PNLVaRkeT9X",
  "key31": "3JWxHKhziUwmenYxw8KFc4iVy1yEjaYD9zcmESqD8AFqA3BGxLfHGDUr8soz5fLfg42tuoosShKmjxSE4Dee79wR",
  "key32": "Ezfw3a9mGQBnNBZLkuLAFS1oRH6JSkLS436DcQjFGfEndBibwYidxvbQNf3bjs62LKdPDTicYFzz2q2qDBqPuuD",
  "key33": "245mTENKV7zL73ywsUWkVwxA68wxjNuBXHLBczwidBsKVqfoTRa1Hoxvf6p93nmHxWShDYnXymPY74dkHAd6Sw9R",
  "key34": "4L7XBynQJyb1ZtjpsLC2iNRw2HXXz1qDeWG5xGAARL3KPrtRU7jDU3KmRcCn5NE98FWe68yUwSDFRhJQHcKwRGuG",
  "key35": "4HQHi6SQwdh2ZjoQSdKa5nEipRPnC2hLzZg1qH278svrVYBhpf4RF8UiksAKT3HEhPMC79Y6AeHcBTnARgx1KBdL",
  "key36": "4YgdrrNFjq7PnVHVJ6invbvPUitsZDA7rhjQufuZFtU94CtrMzdQQ3N4DvaYhU88Z6UXoEpUQ3ygns1bb7aoQta3",
  "key37": "5eyHfYpSN4QU7WdSV9S4Rs3gbNiVSMp4111rYReZbS5okyD8jN9MdJqdXEQXGJVinyXg7dyFTdWkVGDxhSC3F2Mi",
  "key38": "413emU2oQU9GDwFCsRUCGKrsAzrKjorUvgLoQoFj89nxM2TnTRSSFZgMVJS3rrqzQRrWRnBq2Q76Z76b8HETWv4d",
  "key39": "nvjYiGkRuiEZsnP3qVy3P13ECAkJWm7oWyNZCKPiWiTPmPgPdfywqLf3nvoqbMuHnchhmyqamT7TwAh8MC7sNtR"
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
