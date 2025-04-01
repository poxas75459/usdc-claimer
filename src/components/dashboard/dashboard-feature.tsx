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
    "21Ych12QY4NNAuFz6GW7m5xEWDv1jnQ79Yd2yvUr4FMuz3E5njrtn8Uy5PbTGMroCDrGJz9Lfvp3bU9DoypaVFxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xK8vk1tDTdyufYi56biyWiqiTnpimMg4kxZALtPkB9wP8XFgY52UEM1BkQ2KqkaDM7bdhXMXKyX5FgEUrh6YMNM",
  "key1": "42LajSQ2SH2fvi76FNysvVsT3wyeLc8o2R9qRSbfSFNWPPS8fcqMDq7g5RuzCnpjEFhYx2jrVEduP3npAfyp2E1Y",
  "key2": "5nJvC1v9RLTPWZ9zoycMhDdHtaKeKPRGAR64ntN9pd2u2Unk36rA1R92rzWnHEYoHUx88bwZJTYQMuH48heF7MrY",
  "key3": "P9TQEhEQtMJ3spq3vn8SE2tgNJxQYMK3yoPD8m8sp9sXCGYY8cGQZcCLi7wik9QeWLL7E1yDZ3daFLAj8mVNvFS",
  "key4": "2fW33f75BLYHyAnrHxJiSGBBD3KDV3hGZ3APSgpk23smuv3MQfSkGh6MWxKcekWtMn7SyKKx6mpjRRf4uMbtCxDk",
  "key5": "2Hoi8g7KEqwXKhvgdo6LKc4vzm3Q8ZNyy4owrnA81i4ApfBAEoqCpusLHuweYsETAb26VJ3D9aoPFpBexQq4R7Pj",
  "key6": "5nndBkexPdKRXpFRb3wjR4Sew7FUZbwrxSXkaa7FaVxLXskcrbi3En1DU263RSS2nZ7YBkGxEHf3icLJnVPnc66T",
  "key7": "3rU7b54AUh6oJFXHoxXvfoKeshiffwZNAnLDtAEazuUcPE96qgyvL3nNvCRc3oRB9X5AzuK2q5v9ZKyCxQu8UWz3",
  "key8": "3c6aRmn2dFhJqvNaEZCZQuH5CVadk1NVKq1y5rQC6d7HbtPn464wuKhsEqbW6gNS7kA1rLQQo871JLjWg2nHfFLP",
  "key9": "63fb42VwVGYDZm3zRByrTcMuffbThXLsvic7nrpaoH4pFsR1xE5rCFhpTxUwg4PbWUGmMqyB8SMDqpTwPAuuVgLp",
  "key10": "5bYsduQb7vRFpSzxnxEUjZfget2uaL5Pie871xMBXfkCiyqEYcwBHjXsy9VHjP9AaqL32rSuUZcAkzeQ88VAmADU",
  "key11": "PyGvBTPfpRHVbmv4WhWrLw4bR9skfsXAvFEp1XGz4vw5R5mws4hzUxb6CNCGxf2b7QUz1HBFERWENbfB6uRp72K",
  "key12": "24qzUgsJmcL6pw55QpT49JnKRBENhxv1Fcc3YGna5KMUKqbkn56cVmMNoLVjVW4TchRt6ne6SuekFDt8BQyAoZ8A",
  "key13": "4TsoKvSWqxiy2MR8jHYfhkKVgkD77F4cTqvJzsdrVN5nVqcWrUwQsnft9yizBEnobdEoSg2kQVYGmB875mshugfH",
  "key14": "2XQXjwSxyRJmWMizx5pvG7bwMRsYpjMBqnzac9ecppCJYED5qFwrW8x2KjiSBsPJPnKcsaNYyFx3YaK52C3JR2g6",
  "key15": "3Aek8WTSaJDM8U4svx88KeYEHk53hbuzChMT8oQQvHMHy8hXh7BnPsNdEfHJxXBsqf91S46Z8znDjF7YWrUiKEn6",
  "key16": "5jLpTJNVxvzK7kksKjdXJSsy34X5NewkeEYhHvkaa4q4ShQtt9t1Ssn1jwShQ8x4J6izg8q82kMxWZWF4bwJowJb",
  "key17": "2nXTom1AiDn7uX44jHH4dNUBnpa81oPmgmmiQVASj1wnU35X1NR8PTn2ZWwkTCDMdjBKqLzgiGtt9rkMHBggYT79",
  "key18": "3FpHZ36kwb4jRrxTWzrimngXEKpNMJNf7hWVT2CCwwuCrs6DKTzyMeLP1tWjnsee8kn6jT4zpAD7mvYgZ8Q6E978",
  "key19": "27irpUbz2om3cTL5y6B16nSP4FsxD6tRzFQ84vfk63h33tbLtaYG5ZCa1TCjJmhRSxV5fvJgx19QLewNA5pFju4e",
  "key20": "2wirqeZrVRnewvryrVxVtAZMWxFgZDQs2aSDAWC4L5eW5jUvAKHV91kmQdrvMJ8FJXW1WGthH3NvDM6gHzS6hMn1",
  "key21": "4gmbXKR9dXwviyv3ACgnpQmr9jVNBWqxRT4KxxixrwVb3me6tUgFesohprJ4S42X1tkygZqLUCUfdDmT8ZMN1QYB",
  "key22": "2DVETBXiBExpKtgMUJAdcs9rKXt3pv5utNHtfEB1ShkhBDc8jf68EQ1aMDxyBAdn2CFqct9XShBAKxeGWjKGWTX2",
  "key23": "2cp3rCX39Qpqbkxt9CkFSBzod5CbprxRJLtdNeb6LfXVs4nj8QeVHZhnwvZ3wjs4rFrL4iJCzcr82J5tupgTyR4a",
  "key24": "D7rubvm6QWwV2vmRRcHCj5wX1USUCA4oyr422uZowbThzkqedvVtggf9zKaLAmnrTrjhhQ1tEAqee6bXjTT7Mgz",
  "key25": "3DDHK9HKggG3MdPwx92rGJeZ7BirL6B9jgSrQBQvYZkGwRhMBPbtRkUvMABHtwNfwJrmj3RsjieqyQ86xbmCSSEN",
  "key26": "2nQK2o332dsbSvQCD2wE2Wf4A5mVrTVeuCeZsnMjc2L4HC1QPpw2GPWK988t6tQ349uEC7nSVRW87nhdn8UQPoND",
  "key27": "5UJRz5oH6iWXt9uVfNNkPK5pbLmAfyUMDW86rqAwUgB3C9zpuxjsT1NTwCS38gWAE8WKY5kWF6MELUGpm9NQ8cWj",
  "key28": "8hzn3TZdCwXQEC8HFrDri8wLg6zCUfWwBwqh5MWtZWJhB6GZ6PRd8KtEBev1xCMB1xVoPKvEFnH8cLHzMXQNt9G",
  "key29": "5GUC2rivbR6zyBPANHsdCFB13Cx1hY82XTkcTYxyqnKgTA6azQ4yompnNi2311oadi1WZdiQFU8bFCQnf1mvX4wX",
  "key30": "4wdzmUJbXR9WSu5VkPz1RCf8TrryhnWbfGxDmTjUhRb1pTEEQh6N9LRJDHhSZ8qjadbqoneSxM7fbpfqeWEruVKQ",
  "key31": "4BNb383GbaquArsvnFVtBNNcpWkHQzvfPrPNUUk5idxhCXczrR77eUZtLkUZhAR3GWqdHkTGfaJc2CVUwCQMQ3k4",
  "key32": "3YoAd2TsjRyp4Emkk9tThFkDXCBqG6j6BafriAEiVZsnftK3oPG4MMYoC4WaqzVsHXkzuCWQdB33m71LxQSi2Q8T",
  "key33": "4sSs2USorXNtfnViWu4uf2CG5xLEMjXeyf2k6VRU2LnPzSVUpiiAh3aSmkhNougtbzTfBXUVmdkknR48XSfh8VQG",
  "key34": "3W7tDtsUThbU447zXe1QAayc3FYSNYkuhNMdBLZKv1aNdGFAxQArE3xejmjYRSiW3X5URqYp96HRYD8b34bK4jXL",
  "key35": "59BRRAQNuFmoWkXyycd8AeHu6f5JnyJiiE5ri3LPHYB94bU8w7LdnV5mQRtrUGUkgNWbzegoe3V9N7bnDaZxV3ao",
  "key36": "5i7GQPdjpA2oM65tKFNrDeAKQBtbTWo9EGG9s4NWUJX1aUV8G6VNf66AFSSvryMJuoYCcwrtb5KCWqWNQoWLKnKZ",
  "key37": "2PmNueKP9RAK4HLPV93JDQZLNRRUk9SCeaxQpXaK1GbWYnBJbmB5hvbwHQioSkYRh1M4XHEMYf8d3gaviJZbx4zx",
  "key38": "3AJJqeJcJVhvDhS8W7uXMAMQYsxhvoHqyJAkGeRYoQsMmye64W1ToB5DTzMsSd8XHgtNDdpxLYZCxbsSPMGTX8yt",
  "key39": "5Tbswz8xi6oiJJsvCRprN7hqqKby3UMVRyZspjGaWtq8im532yWZdTXEYG5cx9GfKaSr82rjXaMYRQgQBp8ud3jq",
  "key40": "42v8aycx6QBA5mPLVknjbPMenPvnCsoegvaNZ8AzMiXpXfL3ATD9USiv6enfonfANCCAr167xTTvN8kCYLVAnrzd",
  "key41": "5Bn69uqAmuWxYf2Ekfnr1QW1jcsuT9u8YPPbv8UtrG1RBWE4C1K455yG17YejyTEPYR1jm7sPq1aSqJp4sSFupzp",
  "key42": "3DhJGxAwQaUfeyLZDb6PUBZp9XmWCHKtP8KCGFJTgLftU9HU7ANcBzWtqwW19abyfem6fDveg9y1n1jzBSdTYy9Y",
  "key43": "4YYnNA1yeMJC4t9ukh74z6rDfmukFwJpzBaeyCP5BwzN4eWdBMQPi31C3ErvqNd5ohghtPKduTZPJmy4u8bCUkMD",
  "key44": "4NX9pZJmi39C4BgKBAac3BT5qcDGAvaLRSK5b1Mf3ZpFhCxMBHef6y3pCnhnWWPmienYRycdGF3eThr5pC4Xj7mM",
  "key45": "54F4ZaQJJHKWjXLvqMq6g9kXta7mmZkSMKR1ftuk3nh5LGBgpXczZEgWJcU527648ree7Bz21Gfa4hDd6GEsskbL"
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
