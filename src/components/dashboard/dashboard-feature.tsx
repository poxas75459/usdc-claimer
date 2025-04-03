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
    "3Ta8dkwWQA2nEKt2t9EPGEM6EpLxwD81DKoqU8jaZzgKkJ5phfFAnDNjtGWwC8C84g6c3rbRwAyCxwRqv2nTqUH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24XF6J4xdJw7zks2vYYZgEq9zxv7tTPVZzmjyQRrBSb6SA36n9jDvCPY2PFSZaX48AbTBubLCniGKhwNY9VDVxSQ",
  "key1": "2iKVN6TJ6XVSdQnsk4xJDMP7sQPLfDVspxQWAyVz8rDDyRrpyQgQzm9pcyoeQdm5EGLK3Q6ZNdXSWGTYw9CPz1tF",
  "key2": "2J6PBSdgrojpkLMSyPYgs34CNx3s5uC8vVoX8XHwBcm1zv9hNybGLKw7TP4t3mgvjw39kduTfzbDHXtGmHx1sHUL",
  "key3": "4VyDraicdjKq6pGquFYXKtoYJ1cDmb9PKD7yGTVKfAJqH48nj7sepDNKcHUeQijBx95ovcEGjJMdZwhsUJnZqXNY",
  "key4": "sTNSUoYxdBa7Wg9WYyFbevJf4BjpBET8bMbPSJdqVzaSTCGjCo9vMJUBCdTXZGACfks6Tn4URmWVQhp88NGTsQX",
  "key5": "A5ALogM4mV7kTjA8TAALq1U9uYwxC3smuGjw2rk6iacFkKciCQp8j2knQCCK2qkavunQypu5f2BhQr2qoAJ6xAK",
  "key6": "4xr12shihupybgzCb1H92cBRT4Ytvj6jk1LSvbGRAP3tmfvz8sZN8sH4kXBUVscPd9scS35aNooAwZzABgUdePKX",
  "key7": "vqVzVthnn1RRmo3ZuzSpnZ7C844wTtDUL9GaFBdCwtJenPjhNB6jmC2bmZfuj2uy3nvEi6V9RBxAWgadEvvi2Tg",
  "key8": "3JTKb4KUDnWdhaPNWLuR7r8nC6Ki7XwZPnkz2MaafBwArhZQJLLNp88VjTanheRWEXcJdro5sf9HdqToYM3Xwatw",
  "key9": "hDBd2GFiWxfCiLSPnbA3mdo91chLa56eAJrm15V6X3w8JE51i8YaCWTeKf3ZQwfi8QyprRKqPsChEx2wp1Me5mv",
  "key10": "4Y2LgRSHYKU5usn6GEyUg4KzCKfMucUrrC2HmFkKEQgg1RRCDuBRdX8GJ5ZNhytKZdHZJefJ3QYMP5jWANUApSM7",
  "key11": "5dHn34Ku3Vk8GuN4XnwbAHYBfaocooDNCqheXjnpfUD9jko35KqdhLdfGsvQbJzdNYU6koie7BrCnauLjDmF1Jtu",
  "key12": "2VyYGN6WQfgcHz4VDK229F8Z2H7Sak3WM2RFjcNnziiXnGgcM8D1aKShRkSbqSnFVUGBSZ1zPcU3qBsynENnCHN6",
  "key13": "4xJj6onPX5Fd2HwRS2skGRE5ivwuRGH6LCKgY9FzniBZyGYEJgrSA7xxU353jJrfLrpY6h6dooSPLuF6bnmhy84G",
  "key14": "2BZxQZaDvA84U1VxhFnP8yKA1Ew6KxG7KDTyFZQHAh3JuEWKajij2LxEYS7TueEsA74DmBfapCjavig7feQBQz7J",
  "key15": "4Kz9wLjNhPQzKybjmB3Y6ELjojYeHhmwex8cjzbaxowyPBrDKWt51ro54PYf6GQWafgerjW7U15sC8izQ8Gp4n5p",
  "key16": "3W7Jn8RsnuSzsqg4ryUNW9ceXdu3zj5sLcB1rZQTFFTNJooSmYbFdsaUHdBdSvD4ub6yM27FAwoAaTfXWQY3BNZW",
  "key17": "uxsuih2ENBjVgvirG1cFkStYmXHz6KKwXBLKXeBH71m58ftQfCvmEKMKYPf6GnXSMLqweqbNRkwoRUyPzgVocdf",
  "key18": "1fgs6ZF7Br2HCR9JeeBZxXJLWmU7niJEhSJ2gWwuZYPQg4ff4E2i2GcbMRLfNG5RFUw9YmsHx7G7LYi1nF2ws3H",
  "key19": "33NhJhZtHfWh62udGv4TnUG2fDvE2dNBVgwyySgMJnnopMohSMxugYR7hVxUG5o5WntqSVBj4fcBiNLeTkGiQasf",
  "key20": "5MSmZVi9qjSCkC3s8oQy8RkqPZzziSwbDy4kAZGtoo8ztUzSRKvJyPbDp4Ed5L8fQjW3LrhZ5jviW85dfdG71iyf",
  "key21": "4jrKya5cHJLF2tk9kY9WQTqCTxakofYBY2wYRsHnrDcVhnppL7XLZt2w5FDQcNwHkAUqcmaytvSPYGnMYvuqaLFV",
  "key22": "dQa8EdADcpQWa5fvQSLmwrpUCZDz1AeEYHhXqjd9Gu12xZWUnYk3cz6GWfVDS8fx1HakZkXFTpxjBn3nuTFxFff",
  "key23": "MBbVp7q23GS4XBD4hg7jZ3g3oVDBgwTjSnsWqWudziSYb6dye93uB3yU6embHc8Zcc6X2XhpA9pNuaFZWzBGmFC",
  "key24": "5H1au9CBUVEsVFcf9tHyHmBXrpshvAVkuHAJqw7HuREsPvYkFQ1tNt5nstZG2wPkaDN9ypATsSh2LukqQZYowHDs",
  "key25": "bdXegVsnk6HDKU4oXm8YFX9nCV6dZzCZJQqJnTBdmMX4sPAsrx1FaTMkeBCNy2AuPFkBCD3TFLvAKAwx2iqFfB5",
  "key26": "4Dqa3n5PNraDDqBcQqMiUvyaipU6vC6k5SopWwNcxTTjmeuhFuTBvk5dtfeKJ7x91pUtFQ7mYLrWGdkiLQDY92Vm",
  "key27": "3ajik11Ev1P8Gc8EqP62MUHsH5h6ERH9cHteYVuxYSGJjjyBDjyB4aSJYcEqnxLX6qoauMoNutXLoFLKTQ9XapQn",
  "key28": "2eXQXLGCQPVuzctKfJzcYRo1Eduzuy35qX5VUoS4JuttzVTxHzdRhAU73LJB1mSkrcsqvABPFfGt4Av4qV5trxhF",
  "key29": "2DqfjHP6ioABPwpwtKbmSn7ZtELemNb1Uu3yGb77P14NVv7cqaKedZfahpncx6vJiFar5YJPUgrPvn1kxmFwLWjn",
  "key30": "2Cg3kjxmm3z8nHqWZ7UHS4KNyqN4DQ9dehT2nPvDrPGj7aRR45HtzazrGc4JGdyTytvz1UhHD2F5DirDR885MeVv",
  "key31": "3tjjMeH13vgpJt5vqzg33t4HZ7vjeNowyJygjXVG9wiYabYKHMjfwTqyS6KDG5FM5ELKDoGnr7pq2Ri6zKbY55EH",
  "key32": "3KDkMr3duH4yLMVqMu7VwGVtnH9ENZip1A3HQBD7s4ftNM3oWkDWxLHt5XDY9CAeYYkt7NSbM34eix8hZdn8BR6J",
  "key33": "64i4zLNPzS8X2xouWqdw6jf8bHPs7pxGb8EhoPrujVruybskXwifiCABeJxhsveygR2nAVbPT9Zyk36xbk2c3yJZ",
  "key34": "5gT4vZk8RnSq6bbVTh6op8PLZCqWKXKC7NAtR3nnL1jg39dYrMq3fRRJV8HfGrkiSFHkF9dKY5xe8em8mj1DSNtq",
  "key35": "2PVySSLJNBYibZEMcHn42aLqvuvkbWyndUEBQ6BWs2Vj5oqs5nHoC1kSGRzRh9ze57jX7c4cPeFa156dTWzh6e11",
  "key36": "3xx9KbkgexHidqZ5KRfvokWcMdvjGrTr8hPUv8QJhnY3qzoyAevJeP8UsC1i7zrJ1p8Xd6bM7xhc5UkevrJ9sjAQ",
  "key37": "4Vwu3RdGwR5nbukGdY9NcXoJPYHJRpGTH39yhhQXSNMR7uwWjtKaX3QzV5Tg6ic7dvDdBa62j5ujdSeUL3h5sVxj",
  "key38": "4jNqWTSFfat1N2R9Cz9w5C7xGmitzYV1VWtir3GENpdz84Z9sEo3ErrgR9AxeCP2SYTVctgXudu3Toe5JqvWkdNB",
  "key39": "4fH6QGmW6764kqXeABZQAnDoLf8QejStJQUihoy5jTmzU7cu8vZw999AsghFmj7kJ6SuP1ugLY2ghJnxha4ceTYJ",
  "key40": "54gCD8F36MGP6iCP2DsGntmMUKpEkDzg2zVcQcHFSFLjJQu7LxgkDVfrSeCqX2ecMe9TMwauKJ6JYWfrhVXNQNrh",
  "key41": "4U45wZhEuiUAFgRUUmsHy964HdSJn3oDYc3ttvKq9d3Egk3Kcbq4mZE21knRiet8fQhq1kpBgk9NZJAUFAA7YiiN"
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
