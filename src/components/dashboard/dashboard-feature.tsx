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
    "5meBQZKRamcN2YE4miW5S8PcyCFkCnZ7f2GU7RBrs4tahCfECPbQ14kHktoD1WecYQ5GvmszQAwrvypwoeQEaquD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a23qJiP1A3Za1SAp8tjSXCakd1YbyFzjiDYguSAkNPVN9ozxLucjMq2LSKXomR9PSvSfhtJ2yLM76gCcvGaoZNG",
  "key1": "RZMN32iuVxm2H1SXFfZE3cneWATv6aHg4tX9bZzc7qduEMS37FZsq5fGaFtBetLWDvMfZcucDDbtvZM3wwbJCND",
  "key2": "5ux4Ab7GdzCyqrN3DfSUcERVc3foTvLpgVARqBLGC8KL33W9dViYov6azGFrD8HKZJiyBWPQAxTHwxXh1iUtF1ax",
  "key3": "2BJ4BJULioX5gfdcMNJmWy3ACLv7GqEzv1Ua1F6G3C9ncipqLnXmLWXzp21gU4FxhgZh9EEqHiKD2fE4aJSXQgf1",
  "key4": "wsom3iKCRxDTj9f31DEYui3eRFovLQVrxoXktrCmyYxMuAEkZWZL5uDr39T2oLjpscByQbgp9N2PfnzqEf5m59a",
  "key5": "2E8efVPx5MzYy7RWGbHXNZmWTmEWNqkgYut8ASMDmpnSjh7JibLptxqsucUHddn3GeJmE73BGdoGh1whKBboM7W5",
  "key6": "NbBGmrdbrhBRWPpM6qqKxdtRktGQLx14p5ASihX1h65mxk3YdQSqr9EGWxNCMFGWjGqvaXN9Dcdojdf6kixbf2g",
  "key7": "z14fX1CzwJYasnUvhp9PefZfQ9Zrx9GEddsZPspqaHNjvri5G4GGMXaTB1oGfbfeGkBAXvmxGgPic1iPG6YQJT4",
  "key8": "2GPfADsNsgJ4eaMJBZcpcLP7fAyi8FDihMCbBACzaHz2pK5TRddVVXSwxA92GNfeUNQvQp61gFLrBZHUeNMFk7x",
  "key9": "4czfdgCLUkaTf7LWBAe19s3pPHnGPCLAYNZBwB56E2vCvfF48c9pfXZMpkbRu5dKvnYZDVYBkZegDxWzs6Ajoc8w",
  "key10": "2KuM3Kyi8yYzREQ6g3ru3VzjnRSceJHuUR58fCs1XzdTG3uXQEJEd2Jr637GHENWfbGkv8LJV1sn3CsfEgCqB3jm",
  "key11": "5S83FY4hYMAGwfkiVNqH7YG5AcS64gvytjyUu7P7GY5AsZJYPUpNxzr5EAXykvF4D3s82ELtniWURqov95SbsZu5",
  "key12": "3F62rHXxYApnfRDteMcrutYvUHnL8vUrAUXzCidyaWysLurD62tZMDLVo3okmQPtyyDZ4exNCUwG8qje1m7xhgtF",
  "key13": "Zb7GYBsuxGP8zsSns3GVyRp639LAeCErayN9eps9cnJFKkPbPHH5jeVU9QtsRM8JA4nsd2daReyvPw2LmGoCnS2",
  "key14": "2gqTX9Z3oKp4Mhgk2Z5wMXEbb4xZhXqiMKpg7qwyyBe1vFote3wgYhV8fLeQWXHp8oqzq1qmNPqA94dGzuQykune",
  "key15": "4JRCJXoN2WmHtwjP7b7qts6RzjvKtxzcRVXWkxSBBzj732BVvKcFionATiFydhKam3KFeY52UbsxhL8VCZPdh3xc",
  "key16": "2K1mvmHhKptNurGYBQ7WSM2NaS6i97q7mVWteNiC1m1iqx1Jnz4JRtuoQLXTxorTYzST5wfqm8uF1Uvd27iw5NDA",
  "key17": "4kSR4oTAQPwcVTumS5c49eQ1TWSDU15W47BbZjNGgt2u1aiDGBgG4ne7j2vXiwFzxoJkdmuTjLNu6mTUA9xAfGSn",
  "key18": "3yfr9RTNn7kh1AnbwfdzssxaTv52DPz3C3pxFKkDiMyhA1rgXW1VSdrqpqw3SFWYdFc7Y5BjX6to3yzmNmYNYxKm",
  "key19": "3dpNbGrkLNrPGy5o9kcTC1pGeUVeC91EV8dVyn41f6Rz4xeb6CvKw5844omVVjp24r43RdB8W5guMpZSjgVSo1Hz",
  "key20": "5hMjZrbW4kQV4woXnSQabxfYna8M2M9GV9J2AV5UvoRz35q4utB3bqakxfqLfggcrUpamaRK5DrdDDGrdSv6Z4Bt",
  "key21": "2dWzbx8hBKvZTFg4a9MRm1X4hvxgWCd32Mr4nB2nxeU1QGz82fnkmgPuMCwY8hapJBzWpFMNZ8r3d9oYPEMkDZQm",
  "key22": "4N1ynhewesZt9YSipA4bXjVRWJ6h897SywLz1V4wGUoYfeMX54T7jHSEiXknFpWpszCzC7Jm8565QZuMoga93ugv",
  "key23": "3S6QYh1K74YqjXLmEMihTB33fzdRd6oeqgUjoNkXEZ2EFirp9AS2vB8MaLKeEW7PN2SZB4BoL22MAHpDWgM7VkDh",
  "key24": "5kasWyZAJcHGFFojccFG9noZrBZF8LCTEnKMQzJ4wpCk6qcPKy3i2wj36Li3djUxLLNVu23oiX324kWdNWBW3RFG",
  "key25": "4cJc1kiBd9xPgmeLXpn7hGoQwVCGpdugLuYf3wmqP9BqMicWtWwFG6wz5ukK5E5QDaU4NEZiqWaNXiitwLBxNPAe",
  "key26": "23EKTV1JdA7V3E2qYzEWWCRwftRFJA2iVEmZUnix67qo1N1oA5JbEhpAqmqFUSRnEDnUkJLrVPwchRYmhcg5vyQH",
  "key27": "3TKWuBnFtKMEXeqZak1ExGekEE6BnDmZDopUJjno2s1v3Yn1t7edo15YXFkg6xvrJhKVzRbrw2FsVVAvM6LzJPXt",
  "key28": "3yhM1e1vvDfpPQ8tndJKBuYwnf9hi2zBMCiDPE8yAPKSLGpU9CFp2ykhgkcwAWjd3AfXv9hom2wvFNpeFZ3s6dRR",
  "key29": "54sUua9gR79q7q9R2NGFWvQ7CeWx7kHshG77ukrV39CgYhGRL7dago5bBCvCrVn7a5KD4JowpXeJeBipHpmuqSPo",
  "key30": "5KuRnGA33bUSkvq4EnfCtw7PyaC9GutrWduHT8HkXmfL3PXiYiZ3eJYtoSrkguZJkPxuLgvSpDWNaYrtHwFCiDsG",
  "key31": "2HAx21FFX4zka6V87soRkSudeyqvHx6UeBVtVEmSqgQGsMF2feQSmYMuTFauwnr1KD7tn5niJosnX83iUTF1HKkW",
  "key32": "3E2sqTBbWQVUd2X2muP9Qt4ukiUoxLVL91mLtwKrBoiYxcFx7ba8qgGpoXbvWJUndRKwER9tPiVoGEyctsJvizgM",
  "key33": "3FCWuajcR2yM2UtGHgnWQA4CjxD6wWkNdFBuKHsi5Pbqk8qMQeZxfaJbJv5gct4RQBGTrJnTsDqGN4r2Y8GWZN47",
  "key34": "41aQKxTQf3ECoyUD8HixKzZ9Fgxb7SMpg6MaXzmP2vyrC2cqGbRT5F823YtBKFLmPcNDoqTznnHCXhFJCKVssZAx",
  "key35": "5ZPox15kZ5vrgcKZsgYmeJRRJXyuyJhFwYMnFt9U41zuct2aCZ7ZaEH5ynp3jtqnYq9NMrnLbZoh3KvBuTQeW3L9",
  "key36": "5sJLU18vx7RtNUcFgWzCn9rqe2rJJ6qiA5uFgfcVqiHbQ2YZugwe1AT6uP4JHgJny5cAHU59hfuDqzMyjP6r5v6U",
  "key37": "3MPyu7eZhyg5h3oV7NRes5K4jFRSb12KaLK4geYeaHrQXBFmATgQA3uTm6WG6GDy1cGgSj8FnemWbrJgLRnaYsE8",
  "key38": "2zmSWLmt15NmmMnudZja8ddcdU11FdpP3V8UjagcFKHpDdXbr4bmiCTTi71sdAh52RLrn7k7Q91wxWw5aJE2RPXd",
  "key39": "51CmgEE6UdgC2VMki8GLZmw4EJZjWNhYMbxa4zCmdkFk2cVR5dsBhaL5pAuwTXYdP7woFmJ22msKkxTGCpgRSuw1",
  "key40": "YsJstiWAnZcFpmBEbepokTvbdLeD8xgn7MaZnB1MVQA2avh6r98dpaMLm9Ug9v27WeGMwmcRpwpfFosj6FZbZo5",
  "key41": "5PXQYrqJL7xsJaUmkjB5sBtG9HUQBKc4BA5Z8565z3usbddavRJNJx9KtoYD4zoQt5Qkf5PHdYaXpwpeqvakxYVB",
  "key42": "4TNA1ZzWuELPE9MUeWWi4mHnUAR3Dc8LHNQoBiTsQ3Ug4ojVvT2R4TDtYGjwTu6G5zjYJDNey58wHChqT94ZE7nU",
  "key43": "2qBbcu5rvaSt9fYRAyLGL7AZZ6Kguzm71LRk8kci2ofqE3FGF1Uj3ASeHBGkEAyiUwLDMBvCdS4NURcjUMj12mi1"
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
