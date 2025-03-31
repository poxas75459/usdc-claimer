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
    "3gjpV1pGYPvR71ym5uXDsNUXiyAv97TMZtMrV5or3uNMWz17Pmp3xvU2ZTCcSw5o118MDvHQgCuKmd5Km5xnCZ9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f8cUY3EQUwUXkoo2f7p2jqUe1VhfhU7jRjX6uqNUGJX52bF6XmcKVqf8RetgvFpUE2xHxvezTNkJvidqUNRcn6X",
  "key1": "3ML1W6toopJNRVyPHZotPLhRSapJhEk4hP4tFoSTGkzh6b3ZtwutE95iiQFmzzs4xfnGo2mkQF1PMgJA3FodAiEA",
  "key2": "QQEh7ipZrrbACDBNCx2aEGdtjf7B4AVh7UY3rZ4KZemPEo5JyqMVzLo5x8am3hXPF1r1EpE7cskXPHBp8vh4NnS",
  "key3": "P1g8397wLbeFemmpC4aefWSxcLad3i1VYrkX9jbwf1b6Z7tfmQYj6by6kJxbaSofdo86fsBwKSSEZmeDfvLSLom",
  "key4": "47CRDL2JEUw4MRuCRUKkiowpfTQNobndtmCEYzmMUMqQJHbDHXT6fzVgcuQsN47KgJexDMYijzdpKEiLExseUqUU",
  "key5": "2Jy51T5neyRktnCsrbtiEMgYxCHaDWdQRUgkHibysbcGu1tvverZXCRycZhD7r75zir7yYDZhJ5AAK87BU2oReKo",
  "key6": "ybcz8kgJqoTtKzkf7Grr4CCFKH7hseuLGu8aHUfRGh8E5wdiaHZ3bPVbtsf227PPTZvMovfyY34oMWznr7ZwK4S",
  "key7": "3XJSuJDSK4a28N96xncnqyZHWDzSv4VhXpogUt6kYozH4sLQGkv2yi4MWAAF7zdyp586xmC9on1pKrtavsQ1nX1k",
  "key8": "5mRb6TZ7YZy7aNcKHMcW5igH5zXZsARzoTF5aPKBv3w7Qbw2QjWytScPQ3JE9q36ihzV9XSooExcHSZXpnLKiJtm",
  "key9": "5e4ngScTsJpiNmAuTMtDDMZnWuBxGi9PdH39wNP8J7UW9WwrrtfJzsGVsPiW1R37HQVF7rwZtatP1oatLAgKVUP8",
  "key10": "JauXyNwJB7UxayL6dQQa52ARoxfwqVNGLErtZpj5JfbB3u6m2Pk5ZSB6mkX5yYjbVpivv6Uc9VBp1vZMB6GoaiP",
  "key11": "8FmvWNmbwgNZ78Rtyp5cse3LfE63eppR9HuSXeFdcaUDoJFzpSAzeLXtyJNBFHJRT8CfeRdsb2ZUTdBrxZFLnLv",
  "key12": "2UADDVHVuUS1hQVSTdA5Df8hTP9nzhNaSQn26DwxC52fYRjmgnCGES8R8qG4u9NMBdnULZGZHUjoBUGM5sp17ieX",
  "key13": "55KZBwmYen1e3cngqAWLuvT7wvNUQyE9ojfnbvu16KAQ4SuYeRfSi9NbvZYPjdS9p988VfsPgNKyDLMXCbUwMjb2",
  "key14": "2og73hobwH7BFGWpshHSmop7X1cQUk85cu1vvvd4dkHAWAq5AekQCZvKgHmoZ8rNuwVdL8N3UV34WCKwcKPz61No",
  "key15": "2LqKnXdVcvd1U9uLYNaK34BoF2du7PkMzCEo2BYKYa9M9FfimpvcNSM5ib2cFw5AuboF3BMB3k3BpkRicSBzzqxk",
  "key16": "4L2txpeoFV917cBbHgw4zG8x41TEg1vbRV9F3ZGxkmH4EoY9ojExqe25c2SN52ktk3Kp7NtCfoMNHTimtUBdt3FW",
  "key17": "3briu9nZfE7jrRGi2bMrbHVK3EUbe89N5ug96Qi9q8WXBRaG3in7Xbf9w9VaBTJnAAS7bxJdSF2KHKkMr3Nc2LiA",
  "key18": "3YFno36x5xjgAmy2ptJvkJpBEWuZXfT7UXFfJS8xbsrz51Cs1rNBFnJBJoViH7CmazrLQqpv85UPiUsXp8qFTK7E",
  "key19": "LmCgLmeRuYRmdG1SbSCuAMLFjEnnKM4kP9G4rRgSxx6tE4CQWSu3mHnaxhzkmvtRVdkKrDshGjhUjgkjUaHg6Kf",
  "key20": "2rzUhmqPisZqnXT16PcybftHNbKEZvEJ7iquuKujrCTY6vdxQsUW1qzravgUp7kfGqJFrfqju94puZEcCEWN2ADd",
  "key21": "iUv2CrBbXtTPQBTUNDZnUkA7DtRWRZGrE3nZ68GkQfg8Npw9z7DeYZfVcA9zdHw4ZqptkNxBBtwH1C1wh97RTKq",
  "key22": "63W5wCFCruvEemojaZdfo6CWhCW3DgxbkQi9yvcct4wVsb7d3AeidX4LzZfbsaQ2E4UQNRMNbkWXCL8FzNzG7Dh",
  "key23": "vygKeaPQXZyL3X6xL63MvHkZBa9oKDDRLjZN4pjrp515azxZVBhDAbLZMYHHTwJCzvATy2tcgoufeKEgvJg4ztz",
  "key24": "5vvZmRmVd2XXzzEfH9zHah1J9Q7xRPekiNXQSuK1qWBGaBwCYSd8jjsudbhUUxGPrCtPm5wDhDBvPr6YdiKrNzRt",
  "key25": "UTeD3C8R2X7f4MdCPt9vDnm7VRRoqk6VtNBXSJMrd7JS7RLwUgPJFuFSJMGzjw85JDCSnETcVxckpqMvbTvoCLs",
  "key26": "4jzWNzvEK69ZqFcGjoR1usyU9qdS4oHNPHmQWge5GviJSBj1F9dDh9UECjq6EcqCosxmfPLhiAbippNZkc4XR69J",
  "key27": "38kV7fmnJPVvNoMN9SCMr45DZMnHhTbyQeBBB94e1h7hZkWKt4YFoDgxAyhp2n13392vejfP8E4Ktvyb4nyNWBPx",
  "key28": "4co9MH5kgj6WyKWAZtXVFcpjUjDixbbQKkMJiNeoSduGit52iYeGsgjsxQkdHij5ABtwh4KLzkwVQ9RZbVkveWAo",
  "key29": "2LXc1QmzvZjUjWmPCBMmnmg8gDv1PSi2byUBhAiW6MH1AAVRSYwi9crdK7i8n8hzViUsHVGnPvBBER16HiZtKCGS",
  "key30": "4UaJ91X6JHkYRL8cXiDZrEmjnLkUV6hyCBFz9brXQ9UeNCy7vhXqoTxTEcVfHdJh9J7BbG4g24WW6ryCL2Tc34z5",
  "key31": "RsA6URG2G6itW2SLPyfjNDaQ4i98GfRk4Lbtf3JsFWmki6THAsUHh8tkSYnN47RZJqFuBu2q8DwLsK6EqAPRVwe",
  "key32": "5MeZtv1TpKDuggAzng8jFQERSiA6jfZRm4iyji7oTgfyVgE1EvW9LK2UEvgJCcGDG45RcjiYPN4nwjnzGvu8NHcM",
  "key33": "2NtEoBu6BgizJ8pxgbsErMDJ58gwN8RBnurLb2VcWQg8K2MDuJ5FpXHnhJpkbqRVM3iuKY3CtqaSEiqFUjdDxacF",
  "key34": "2DN41eyq91s1HjLFsJcQTi8Y56cswhZBjYsS83nAK3baViq1gqJXv5gCDiwcLCi19B1yQNtnujyyP2nf9T2tPN3R",
  "key35": "5Fyr6SKLp8LaJtwAMck65sWSmspzX8VPaCUXAZKjYua6b9Ub1v9AvwNYZdR9qCysSB6buixnXzo5rwp1CC8Qwv6q",
  "key36": "4tv5yH1kHJuSMHYnwjPomg6Yhp4Z2SbrcSemMaS1Q9a8GgDuoYLNiYh3D5WSNH9STAey6f8n6ktBvA5Ao3rM9nbh",
  "key37": "XdrqCBQ8MkDHygpgyax2YKDeVqr4Qd4d7tKyV7zEdAwy5uh5W65d5na5CMHkptgrcY6mcGeeWh6aX8Ubdt1XW9C",
  "key38": "2ymEevk55XaEMjojuNDdKTSvcE87kNgMhQYeW9yJgieUJbmY7PR8QxxqtcqgA2H92hunKuPT7DLZWEJr3FHhXSpu",
  "key39": "4hYtLuc3P6x2abesPxoKifU1532iuRqfLcrZxVuRd1GbHq1fj1U2cfXB4s2ehY2XmhRXcZ8SBExTajim8qWMFoR1",
  "key40": "4MT1be9YnLmzc4Hn2YusB2qxaW7dv9MuSLwmDKcgj4JE2ocCC5UkjeLjNJ7wAzpGFsXcUeEponabGxuSRoahaWJz",
  "key41": "5JAhAVoXK5g4pxpJ3rFXPe5MVQovXa4JtYXgY3VUX6zzhTvjoDJtLBtN7uBvcoA95959MMHgfgWqh36M5sQZ26Se",
  "key42": "5HNzVNbGR8Q2kee3sSw8EtLxM74xn9cdZaBSzQvYW1naUhYox9CGKQX179zrkvHuoVoHUuaXGC5eHpLyjFoSE7nc",
  "key43": "2DREycDeXNTwepsHbHmtnn7dUqb2J7wN8spBSJtf8M5ebetW24CvB679jMnwuW3hBzX8VsDWkJQjYfWGymEeRcVd",
  "key44": "BnQLrno7qUgetDj6q6EkrApodzfRcC9M3sseoeBFSJQxPf3CEyo4TDo2iE6VohZmwhiafE6gUCKxQ4uicb7PMKb",
  "key45": "2fxUDUmBDyg15KKDRRhuAExtiuFpMon9fybxqzmBaoQQbnvPgayQ5Qx1DBWR8DETSBKsq3qMP3vE5o2zqCHJZzvv"
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
