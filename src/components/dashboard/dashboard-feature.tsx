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
    "3AyqughecwRGDK5RqjnxHiyMJDiRqxssu7rBNfarVHz4sEzhEoRxx8QuH3Ghdqy7FkbSny8a3NBKu2a4dRcJAqfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aqNbvf8rqPynXaUo7swo13ErzHwGCYV2QponYTnuGTkzn7f2yeE5dRqAWcdiB1MdJSSeamaQE65Pn5Tnpy7YHRU",
  "key1": "2eGUtnDgnxCdKWbwF3mRzMqZH8sK8FgLuEkhtJkYUYQ39M4mhEQhjmz8n9KKrutNRYoFMX3AKQhZTZGusWkq8MGp",
  "key2": "9sYN5CxusamQkusyQ79kWAWEBC6KMKYoDDwm6Artscam4jyuZD6NwYvKFHF2hDW58kzRgfb6Hi7KWmEk6s5mMZ9",
  "key3": "2YMB3fzQA8L2EVjTJNYDy4LZsUFAFVpVLMnhBeRpPg7ed8AV3kXvf8ewDGU2WecKpGRfUoKMGcPJ86G2HgtVtSxM",
  "key4": "kFeFAYPecwjNem2t7EZqqnykw6zgi6TKMt7LpZP1ECRA7PfnWerUdaViCNFfxrj43y5ZUnYpKrdkPaaDmMrtwpq",
  "key5": "XgEsgx5yBj8MAvKxJyW2SFu477YJDf3RoTaEnVuLv2Dms5rhpFxbKXprMpY294jrDG1dyPBCrr6mq3jgkRUYZMB",
  "key6": "5A4eisNRu1D8QQXTsGGWx4idWcYQnx7T4Zf54J1ebZvmzR6DrtsUKgAq5esqghhdftGiiRB5CxZDdjG91j3sg7Jq",
  "key7": "5u8DZ3AdfNvuuhwBH5N7sjccTL85B3m2JxvLzMohtU4cvUM76rbPTKYPyemcMonmCWWHQESxYdt6rMJHKUqB5ezg",
  "key8": "4rKwM8vxmYUiWuMTZzKQyZ21uCH8DrjtyJZabK6X7J8jdE6DicYPT2SgoV7AZCHn4hRXQ6zLBmWnPgPH8W6YDZAG",
  "key9": "2Ft8S59FtiWbeQFMWrhXSrAk1woLghHy8t6HD2DGjoTwGrnrrG5aQcBxPWqaijdtpXKb6pJZJrFdaYkei1RVkihF",
  "key10": "5Rnjsij28Eqy4xAyq9zUc61mabFDhhxcP1DrBaL6qLN3Gd38wh9Wbr4JCRfD2DbieyLY338wmH4hwodBvADjrdRQ",
  "key11": "3ZuCvyCd6BoKFbCjnBqvBf376jdNTQRau663J7vrgwBey9gAxDhyc6qyPtqMyCFg966MCfv7hEJgTADRsxE9N8kL",
  "key12": "4onyQN2cFn6wxJLJwtKd9aJeRpSWgBNo8vLUZ1QUw7VcM7wmFSVa7K4bBDPMn7Fdzu6EF8ya9yYN3WAV1Xm6nYyT",
  "key13": "5HZGY3vu3aDjWmxCuruSfb4uA8U78SNNAaNWFp598XBYnzLkztgzjqjUhoceTwmK5o8AgFYMRZYUdQpDbYMgVUik",
  "key14": "VGTbTe298sqwKdeCwitGnVkuPPNYRECymY6fh1ooSD1yVXeUGefWw3oXdv15a3HAAzSPt7BvrDUjPkZgK7VfuUp",
  "key15": "3zuVzdsZmQWqh4w9Ku19zcY2xSwbYbp32W4WfUNFLZadwHpqU12j7qQvp1KARbqVR4c1JKcRXMDNurChrTJdguYd",
  "key16": "4FNjNQ81ej6svN2uEXpacKVYKzmnCh2KWBoz5PMf43nfJbFA8iPvXu4r5fbZFka1bz2aVpByLRxCFy52g1UgxeqS",
  "key17": "4VJm2LWvSUQQkXgrZMi5CCC3SoZgvSZhV8GMvpsoNnm6gqiMw897hQ8rDW1KLdSQbLwo5pX4hfbw6UYyiJCnV2YK",
  "key18": "wjPAYUAXQmoLxP4w6BD8yzkeXcPtgiPt7wy5s7eGusLko983wbs6hrhHJzhu5VpU1MqZQCgtyR4Yc3tKejBXQL4",
  "key19": "wYn517o7AeNCBg8kuiod5aCLYHxN8QkuU1ruRjJejuKsuBbHc3p3LrRJWXXCJn9k1a5vKjPbXy7JRNNVpiRwcmA",
  "key20": "CLwdh895uZBjmuzcdM6UTjfHFabnX8cVqCLoJ1EcGZPx9zBN1MXXFJDQDcpihPapdfJEm79GJjuWudbwvZCVwEr",
  "key21": "3KfBCckcN9GFTTs9o42KeWztkDWdfVQncvqXxst8xwDE69od4tJ3BE4Ch7KdEBek25E9dTnCt2MPN2ssqswHMCcg",
  "key22": "55YBMx6c2wLoXuyzWY2QGUe855g5ojKWVhFiKznG4gc9Q72fXCMjCEmcamwmCfjSs9pMF2SQYMU1UKs2mSaGmgYB",
  "key23": "3Wwn5eU26yN6fAmn5L1cBEA1ude62rNX6YxGyymHBaXXARrqsoBe72ufW6zXWPJRcUBHbs8LT8ZS7xVPartfd31G",
  "key24": "25bKNHpUaU7R7XKXJqzEcJCCG3XiPFQ1DR348CV7vogENEbrexXdFDoWkTRmg2dSGS1MCYnq6ZHv6cLnXFiQHKwL",
  "key25": "4p6D1HYRX17YwNp4pip4V2ynUwH5Ja34iM2YLpMBZCMcRZXKjna7zjJzmVeVrVSVdruy2YaGUAurz8cpQgY8StB",
  "key26": "5U9kiwesF6BQkJXAybigaPD5jb5KZxB2QtqW9jp5VkBfRg3ZNPS4oka8BVUFsqMs1gapY4rqXZwdfRS6DhJgk3oN",
  "key27": "38zrAhdKMobWgxGwG7dc2HqFzuaP2iawLmnSstcwtCuM6NvLYyLr7uY3b7Z2MvH5CUc2chfTYpq5f4uuSR9jZJyL",
  "key28": "2QD1ULN4DTUWVGsaUxN6M28Z4heKQcZ1CPj1MhQzyCcfFgQNDkeDuSt5cv7861oDi9WvQfbdThA5Kchx4QrPhJ2x",
  "key29": "3MPJ21QS8JqNekgusETge5MmCYGZqrB2RkrNsd8wLzNrnuUXzgsdGT7FkWabbbqgojDgP1y86XiksLDQra5ayzAh",
  "key30": "55dREk4WzFHjJ8j2iSQjo69sTPpZeSDshhps5b5aEjRdH3VpwiAwmYDhAwyz3CXyn4JY1JqbAtqSNXHQ3jDMFTZY",
  "key31": "2PZ87Y5asQwE7SABWYt57eZ5V7W577GcUxWYm9CrF9wbEgosXTuMWai1WeGGRCsWk2otNipdDPGh11A6j2LDnGEX",
  "key32": "5wmxDgd2w3TkXZhFiNebsmuvZvBz8hCSyJFWPve2JHMv11AF77VbMc8B1nokjiRkJPjUc4kfuSyLCJSnxZA19QvX",
  "key33": "36kjCW73qdicsaP6SxinqHHdZytG7w5ND6GoFAu9vJu1UMEs9i6Knhg8V1huxjuHcis2k7H4kwiPkDJP23ZCK49T",
  "key34": "5ugvYSGCi4SQgHbvH3UX3Bnn6Gwk6sJ4Fgu7eVfqVoU4pcSdhJDFpSN8NifiitxU7svpjz6d724FBJpYqtyYKDLu",
  "key35": "5toh8K1vQqSz5zCXwXQYUMuvz8CcWJ4AQds7e34yk1EhfZ8pPevCwaGALd5WuXbZ85sXPRJgEKuWRw1fFBKNDw6C",
  "key36": "2Cn3BdXQ16FKAjTTNDXakfYCdJCxH3e5bxE8mFMTU5LyQdsii9cpHsom2NVG4jVFb7LxVszVz2moUrC6wsVCGP8x",
  "key37": "3pRM9GaSiZ6WP13xPjw8cUYgyaeF9MNR1Ny1EDUJQrHRCyK4iJqGzGBzMRuKfMSCkoBtVHM1WCbpvXSy4zHsKzHP",
  "key38": "2WEGdzR4ndTQ3tMcLeuJB3H73BXKnmHBMwjxY8CudSr6seHj3dtp7TGWe15SKKXTqU7YtUzEtXfa4K36FhPLtA5S",
  "key39": "jAxnfiCyPZ2wtJpKvuNTNRbLRJEvPE9aXQ936cMeHJ6PYmzAeToABLNCXxHEbWaCaTjCqjxNatekefR2eKeUAk2"
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
