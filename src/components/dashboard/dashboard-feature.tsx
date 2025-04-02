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
    "4V3BTdEBxy3b9BQDvZpxEGSZWZ3LjLdwsJ7auaqx6QUuRZXaw1arVQjDqiGFmcMfEQhgQzi3YJkhZ12Nu1zvM4EH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57HX63Wj4RfYHt7bfZvYmKXhgFEjWJTftZYakUf7kkC1dbM3krx51HZ2sSiEfZFD6rxg3FDzBXVYhYSgSUBjcRFu",
  "key1": "3sMe3hh8Ec69X4w2H65q3JGzyJoDhHkyZ8JzKAccsRNQbgRDExguAFm2HXtEB45LvuXj79cCjzG42xruGMR41rR2",
  "key2": "2JdHkKLGQkpTSARnxfvEFUGW8sFk7VFTD5PHXyTu2yP5UQRaibnJ4wAGocRULe3KME69UnmSWTU3kVLj4JmQE46h",
  "key3": "2D3WqVnTuUJM3gCzkU6ndMbPtdZb5cx9TbbUB1cJH5Sts4gbWX2MPBZXF76aDLX18948oL8JcEvsCAxkbDQfFoVq",
  "key4": "3M441HHRvYzQUuZrfCd3WfLzfHY4sqbeuENjfTbruGrgEAeDAHJBmiWMXgqJgsSTrRfLZrk5PtLkCpSnXmMN9JFm",
  "key5": "5HX6rFUZEDgX6rmY6Dt7ViZQ9R973MCPf2ZAdAMqbhdEFq3grS1XisiKVKKGKBdSdf6g2Kk5XmW7rMfTDqvxx8nE",
  "key6": "z21JdK9WwjGCkPN4iUtNAsSmyGiGYPYvTmYz4G4WJWKRPyWC6qVxRBBELKF4W37baWf1Caf1U5X6jMGvV5Bd1rF",
  "key7": "2swcMdMb2nHLhQuBTygKi5AqyE9h8gAbsPmz3JLuiLrsy12QjfQjDDf3CBqvNjPTUp5WuRDv4EXwJwZ5ZxkXmuJR",
  "key8": "6nHudJxYXY5sAupDWrEU9y6ppMnwrjVUzUxfzFK1oYJFJ8cEhLapyu7Agnj5yQshNFvD7ZoxK3ErmLnDhZq1B5p",
  "key9": "4cMjeUHMintoaeUsLs64dKoiMKwnX1EHb1FJ9xvWtr5a1mWWAfWqq4u8Zz9eho27L8zdgQsjr2iW73YcrZCZuvVb",
  "key10": "4f1jhKCsgMnwLUSpZ639GESmn9MaLMBgDBVTrSzNn79on5hhmsbTLLVnmP11uctQFrYdqLrLbnrvW6EtkBPfpu3h",
  "key11": "39K9WqLDjA7PEB7yd7ygMN7mRKFdLaBUA9HCmSraqYcZakoPZzu3BSPQoxnHhE2drRY3b82pt1F8ej8GnUk8SiTq",
  "key12": "4PashVaK5ZpCsxkRLyAQN7C8D3aWuhu61iz7MG6w7vx8FfDyVamDe6M4SkJGe6SUSjsxrmHVVhUU8Lv5qnGzFaDZ",
  "key13": "4CzPYLkLuK6MtuM9kBJhBX8hKYN99kugkP575oPNiQBnTt5nUPinC2AmHeagxNQiABrRxuwQCiNewx8abrDEFGAh",
  "key14": "4oZ1fnXRAreC2K8B4UUR7viSY7ZfXgj6hG8mmnUuuNkKNPXmLPbgsMeYKtnJXNHWi4KGs6EGXubFFwaEULX8747u",
  "key15": "KBQG5tB4z7Yi2moCjx8nYrw2kiCfCeShwVxsFPGdcRzppeLhowmZsvTFgF4h3iLJqzoMLoZfH1JaDvfdThG2uW4",
  "key16": "63krYFAaKSSfLGauUSWtXtHjvBxAbkkaEauXvzSX6evMcfBP8rZjBFak2GGKHZMMVgUZBzCTiGUw4HYEwrnAe29Y",
  "key17": "un4uot19Q3DLCmXhieoWzCYNDGg928MhZDJXwXEW5CyfGXxzCphmMQLDvzbq3pxYDNvzFmvBYftGwdn1VZSv8ZS",
  "key18": "4PtVJPKJPybuWaNvCQk6UdcFEWrTo1QrFy5Lc5hZXk5Y7qJP66XLARKHCiiUKoyZMwK3jUMPFB9i42bxs6agQC4D",
  "key19": "65gp8VJbkK8CoPfayYavZurfm4eEVavVJJ176kYb1eip1xc4kKoUGF9pCkn3VxQKBNmBZeywgokVJiCqEAXtpPpd",
  "key20": "29781YxsA9Q4C8zcyA7LHWK5fTPGWBBuohG6ctA8P1nZ5VsYH6pXbtuY9xkXNbc2hk5ZtmsCY4fzmoB14NB1nq6M",
  "key21": "binozabPhTYSTqg3egUGdB2KToXy9wPm1BGNbHm3bwG5M3uuC8EP4JpWaG71sds2taznQfw6Xr5xtSxnRfMkSjL",
  "key22": "4MKopLpAMVGzQXZvsf1SBPtvg4LcTJLeAW3YWuEDA8JbHxmXam9CZHHRQbm3m7r57fnKsJPeD3andoj29rqCVkNx",
  "key23": "SinLbdyXgRewbqYD8GuCgz9fJ3Lu1uSUPo68RrbCPYNf1ajycKKJjXQhWKd88ztwgxTSpfGHBsGFviTcLfNEi6Z",
  "key24": "2YUXkV7T4ReHoRt7JJshS7uKLm2nko6sbvEGx117MNWxt5dZ7u7oW2SyCeu6CcDbEdSVvfeANtCXgdqTUx5PLAmN",
  "key25": "3u6ysY2rYpz475GGWtNfL3eUmJxjfkGM5pmh4ueFt6T9whPuy2RearfRwNpcbbaTn9jy89UtAqmT61Lwr7J8i1YU",
  "key26": "3TrEB3YEJQ3G8x71gVtso22mcmYpggJsqvokkrr4mbSGjFHgHr2FR7WKPuX48H1XNKmjm24c5HZxmATTDsmhJaps",
  "key27": "327RMKs4hSp7tJAm4E2SnodgDXiFaisi7hg79fFfgvExMvFiiy3FF4SytqGjenoX4xHTUyZX2AnqJeQ5nieAxg1i",
  "key28": "3p7sY2gBXKWgBSR4SY8rb2UBeW2oNHYTJqEq2addbwRNQod9RAnS1DGjh4soBnr51MFnWBzGtgcLMsyUdnZNKJSq",
  "key29": "22ys3Neb1CDTrNxhSjB8LjdPeByjsTKPkT3zJPu4RQ7AgWY8gWVYNGvF4WQTbf6BTTBsEeetdEFLdGviULpTzVFD",
  "key30": "HhVo3CPkJQUeJhAMxJVFQfZE3j77HNhGpjouVXD2oEMXQskL7WQTE6b4XACVQpxa9ZbkJFLwRVL1aCYGZVua7gU"
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
