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
    "4jH5LqPsh49rUwCjxj21STNovmNvmC223ynFT9Xcpk2HDwxKKt6n8h2rc1DQtX2Kqo1uNLBWN6RYvWi42LA74WQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1282oaunrTioBByW9vfVkCNjJFhpbRWUdZNS7D4sgm6dDwXjQXWRZsk8vMLvvNbpNzF6juMmFszkncuvt2QByB5w",
  "key1": "2EFHqjQaQUQvtAjyho3oBeSsACkC1wcCnWfuEaiEEp1C32jKvidpezMzAbMhnPF7KsERQoezQacNaW1a4aXkuYBV",
  "key2": "3egmaxbfsbr42dWopeVxvUcegbxoASNdZPrG6cf7VAvPFZtP1D9XzRPcstkwHnHTZ1HkPmQUwB1rwTWsdRH8RDGK",
  "key3": "2ZbKWnV6kzayGC23VwNwJcFiQLe11Wx4Dchndx2eCGuGUQ9FEMNwAMMmm5jv16b7JJFRvDm1JAX9wffHYrLaiHy1",
  "key4": "29bVJn9HqC5NYeRcGzHgrnn4SqoqCLsWjWVovCqrzdCjcjgHwwc5NTnLBtaqRDQKv3JZvYhP2ooQZoAMNqTMv45P",
  "key5": "2fcN68LK23HwhT6s3SFKt6wZZD55dnSJUc8TUSofT5tP92ytckzaPreU8TB5Q6sZcFjXvqDpWvm92vSrHeLeVs1q",
  "key6": "PgWSPchqMWk49mF8PZkR9aLtyFzUP8eWvCtKogTRQN9vxX8EioxoEnwhDWuDfTCqutu52RFg6h4kJM6HQcmA5uK",
  "key7": "2UdyZuAMK8xbswxNa8witaz5NCeFXBQEaCzhvwdJFeRgEVUqutBnXAwzUjpU5a4T45KKiV4r1sUopA37D1qwSh4k",
  "key8": "R5LrdPFzCkuBa4MXiBETWzgFvP2CC8UChaTxNmWiMhoHYfEkAXbNGxMrhLx8ha1hLMbhJMyZzXqdiS6aAXAB8Cq",
  "key9": "Mx4xMS7yR3Ye54jQVik5rUrpw9G9w1uzN4WXHq1ajGFU1oubNcqLXu78wyP8kKxqsd3wc8pjF9k2VoUDFmXvDW4",
  "key10": "QCnuKcR61XXNZM91do8kQxLzGu6wx8hWdQin3hjamdGWfSPyuA21p5XHXqhpNQg35Xf869MFvtV5YZBv9NrVQvR",
  "key11": "3EfuUnY1jy4SBUXiPoLY4p55kXqNs1h2qmiHUNbyinTejiqsyBSLv5FbyEZT17SWpYBgSpFeajyCpC5W58qTMS5J",
  "key12": "3dWeRHCQEZWYQhczFE92Ztv6JEqGManZL6WFLaD2i5Hnvr4ZUyexMJhf3MiRQTT2ssAudzWh5BLoJ4gZR658oSR",
  "key13": "5ccbpiKDgHzyHD6ZVnNwJ1uGMEcYhQdqQ9WTgL8GkMcy6uPJXCAFrJgCaJDUgh4M1uDuRMyfbU7J37gQ526KQXBx",
  "key14": "RznmPoyytMJvPwFFtsF7aXkubdTwVoqSrSJhRVKjphU72R8hLoLEN6hZxVsrphwbzM9vNqgEWwpK53iNLYMR6HW",
  "key15": "5ByrKx64s4daJdWHjENSn9ckGeisa3BESYcLDDyBh4N1MRA8DbvnKq47XGBzDf7gUpp7Tn8zdjjB5gJX55obUBLH",
  "key16": "2vBgPF9qGe9zjQQfHSYzhj5puNnMEaTQuNHYSd5R6wnK8juB2kJ7tidWothaHRAZGF1K9BSXgvmF29JBaMpmnN5A",
  "key17": "antj6qQysuAEpbqTP3roi6UB8HmCYr4Fze5aXwhE3KS9LgLLYYDwyhFoYuXFVJaZBXXLS4eX2affh7hUw2cS3o7",
  "key18": "3Hj5Tm51ZYLmB7BcMopDTamSTH3ADGyWTy7PHyxzPma8Wvr5xSmYiMQKzyANX42Mg7ineomRi2e2NwMPMwb353xs",
  "key19": "3H9Kd5MBVBkT3qBZz6Y6bMsdCzTTtyLkeyEY8U3viStyTaEhaQv7Aq8qzTUMUHTcs5ar3jqxVKe3N5A4Mr3q54TS",
  "key20": "3aqrFNTCtWi6Xsg33nnG6TAWDvsVmBwbFK1hYumrVPWVnG5vJig1V7BKeXRspaoUsMUeMUmrPc19KAPXbCriFqj9",
  "key21": "4sCwwr8UwAQfRrXUTdQioiaUtwvrNKFWSaSmPLeofiFP2vjZ3GocPo2XQmpURbK2KqtiGN86VLAsbbUugNTvNrd6",
  "key22": "5fdeUmUWXWJFzzQ4iJdpQZ6XzFngkSxPzo1puoRi3CZRFq1DuuSxmpEWpRRG2AHw2M2HxcHCK14fx4JWbH9LThFm",
  "key23": "25i45cmhTjbJ2jzsAS22rFDmGniooyx8p2R4PyhQ5tLRbrddmiKnfCm863Bs1Cc7HDaSwmPXDe7LuXAh17VHXEyW",
  "key24": "2pJCkbWBamHx7ACg9EmQG8vmdwn5DQqrntRZgqeuB8C379how5mmikxoFz5dDqze7ScUXs1bNmtCnRF7yFNKpCAX",
  "key25": "5yvSEZyGL7FEqKtSzmbhTgYKAPyiWeXczqhEGxGXVTkDTujTCYs84k3NV4GvdoidSqt7nJSQZnLWvPwvt9kmTEDb",
  "key26": "3HcZQBA9MBRhD56czAvA24QnRg7hcdyuEv21LtSy9hGXJYM1urCBLtNE8SRnVjZaQbNWcU7MJFVS5YkQ3bM5vB73",
  "key27": "521SY48QsSCUULPvBRCJB99aK2jYzF6FJDygau19jJPqR6ZcpeLxuGKfHsn44CoPHoW4aVUQAUxSWhULsiDEWktK",
  "key28": "HqKFsS3PjjqJJspg8WJ7DVyxETMFL96xKvUE72w9coG3ZwYLgvfkJGhSQhGQdzMWfEE8wFGJvctWKiyFkm5UJB5",
  "key29": "25ecvcesGZ7sDutu5GWsR16NwEVN5VXQsatCyzF3AMPF9Rjda1PS6HshJeeEeCs9xg9hcPBaLkZhocaw8y6G9cBX",
  "key30": "567jYwxA749v4jeqKNLXQSdR7uGE66qySCyzSi5J1fUi8RoLV4kXfdXZEWicD8NZARqTunH7zZ83THERd6BNLwHx",
  "key31": "wsnuruKjR2YKVoJhQFs4qjaTv7oy1X5U3oPT6YCfei7KDa8Xw16VxqYoqov7SN5mSUQThB9SVN8k2PV99ed8gRx",
  "key32": "3JCfvXCo7MX5EvPi2x7no2MooQTewXXKkHVihn69hfuAn8HKzCSYgoNtb5tVUJ6XAcuGj6kBFASZZnU3vzDLQzXG",
  "key33": "3T9VWoRRnVybhK3N82rPLun1wCtktnZ4PMR2GEEKx9Gy3cg2kwbSgkWTJNoBxi6ZuEtyHxyX6HBoMmmXaSov3C3N",
  "key34": "37kuS4yEZr6PbShKjKsqisABNjE8uRmTeMdmkQVLK5FyU5mN32MsQEXQPpWXpdsYZoniNA7mwKsJ3JSJszP84Qh6",
  "key35": "3NFUVeGCenM95sRnEEJbSby4tJPjmjMy9wUX44ZyqPF4o2JSadNwWYPGRp1KrnnJsbhXHNgdqGa7d6XxVY2RVyRj",
  "key36": "5eEYJHhg9kWwBFd9CeP1bb3SPFznAL6LtggmMUne7uybncP86g6ZnE5r9HXtXxHwMFmrRVtBiphxRuKc1JqWuUbu",
  "key37": "5qtWnKWdgZQwzKJAaVZyvVryn32ukKxtSvAAvAnbNgJd8xP1MdPwnDePZLUs1WZanhFr24N8bsXnuGb1GLVHaUNW",
  "key38": "4nJjmZD9ok9fJDrzwZGd563Fgyd4EfmCtDH3d2toPmuFeiRGTiCfmCJzx2Cp9mkbFq7mkiwkYJcKoE8FKbh5hQwx",
  "key39": "4xDA3WvYdVkjssn5mtB8gZp9gvhwCcXMnWQeauee51eRuAAqUtCfpqrP1ZYQE7vb9bLmvmKWSHc39ttPAJs9xHKz",
  "key40": "2eqyXX6buMDywKwsX9ANrxbSeeeSYz14N2MkiJViZEccTLKMYoaeAHGzH16wKjz8GYaJ4Ns57Ys33LcvmkT2pYGz",
  "key41": "2RfJHFNDKUx1WSifJ6cVKNwRGuHu9m9t5bHVjARxCAsXzRXkjEDSX6B833pvema3gFc8VWfVrYyz8vnZZim2TqTy",
  "key42": "5hhM8oLGXNdaoJ2QXb86zFMsxnpme8NRXk1UZE5TLA19ct8HC7pYq4moy8EwYsbBBD3xXQhaKBSfrWbHk7ZG3evG",
  "key43": "2gfxbEF2Nfcss62856ZibH6ZFVUZRWQDfA5R7fzxqP7GQwziCzeUj2pQwMdyKTidgYpH5WQny7GvhFtPxUcDZmXF",
  "key44": "5siUvTxj5UVTThpwsQMZmgUrQmuYcyW57Jm9LESXMGaG2tqDTwngbRypzEZkJcxhtmpgjL65612gXLpxEpRzZZTw",
  "key45": "4QN7RqWh5c8seFEL4jSyG4AM345LeSH41hbmfvAYFpJjS7G8sYF1S9sFDrHQf9SEzEpJqSgmhH52AMqX7M4em7ge",
  "key46": "5VDG66A1GECBmh395Bij8tRSSpmYj5f6mipTTtys5D2pdkn2pn4U7HrxgzmiB1q5jaSAZ2kc8qu6xR8kNay2J1Go",
  "key47": "5WQhYtbegp3qRxEh2TQEk6f48ArMPTe9ARQkzCsDtjMpHGbBzQYG7cnbfBz4Qy6fVtspgHTkyPd6Xw7vGqT6J76e",
  "key48": "3kAPkVhFtFdmPw9JxoyWxdrwQ2sNa1AjVN8Zrpy89fY4keoYJ7p9RwSkxLA4j2fMQqAVxChtvidq73FqFosgwLR6",
  "key49": "22BHtHuKgU2kXpayM1QMufn1J7ANK7k2UzriCHBmK29jkxAqBQVo7qDGJFFD7nPYK1f9QMriCoMbB9ASSCVgxiqR"
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
