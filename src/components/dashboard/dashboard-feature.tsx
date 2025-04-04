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
    "2EiQJTETS1rgj2f2Xbu5X6E8zYvdPtHT1cp1RAcEdSZcF7Te1khQW1uQkVwinErZoyRShXqYXK6Sw4TJVrhqjvJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQi1DhfnenDV6yjs9cKDvs7L9Xzfb7ZkboSmRoh5kCsu3NpbUzsCQys9HTfjcf4e2EEHz5MgrFvrEouS93Qhazc",
  "key1": "4MYehecvpEH6pynibpgfFThZjBGFup87r9kcorT2tqDE4JzXs7Tfj3idPzdEsr5c46BF1Vp1d9VDqBa2cBptnGYf",
  "key2": "2L9jaDmQsCAVj3JxdpwfBqr8e95NuKUA5DHNB5gm8yjQJeu4cxC7NhhMpJcfvY8c9pNdMNfuKe5oH9XExQtFxcZ5",
  "key3": "2gPbojuMbv68DkCh48GZEV1kDYtEJ424Rzdv6j8UZ6akwhbmjsvfvDvzi8TSHPYdFYReArSPWo4qzuQ967jkK4H2",
  "key4": "43cgGGnPX4wQtCAZquY7urPRk8wMiBKXsTDyriHQwDCE4Au2h5A4H4q5mKNUSd1wbk8wRUUCGCXSjrUwzgDVacRo",
  "key5": "5xTDa2w9MUDwncrECp2YSTUc5HJEPnuQd4AL4Yv6wPoJotKQorNX4adcxQZBLXkNV2Dad9GdVu6ZY1EhNr7acbj7",
  "key6": "36Jgz9em6AYDVyZfb91z5qUncTnDgzbQhBLSFMYfG2pesePBpAXQWEX1HuWxuoZgoKXyAUHikzzveyxAGS1FzPQx",
  "key7": "4JmaiB5FCw9nLgwZHVKw3m171ApixQN3fqSjRCT6JNF77QBojTWvFLti5pAdLzwJjaApryvQWbo31KubMC7TjjsS",
  "key8": "5m7HmgYoNTtXnu2ruAFaJFAHiU2L61EYiGK22rS5JbndZTpaGeXPfgPXttsV2pdzJmeRMpFWMhwYvNg8npNMmmXt",
  "key9": "22jnsxCgUXJhHh7yyF8Y2c9sMZAaaJUJJBB4pN6zfXcGW16z2YUKDvjqkf9ypmTPzhtvQ1XTCr1UDySFiaaKKsd6",
  "key10": "4fkDZzVZ1EjPb4BD47iJnLs5ihHuVNwhiEt3cENhf1tys2vHdyAYuGYYKGSN6Tx2sBjvBHbUwJyrg9zgZHx7AVHL",
  "key11": "K2XCiSocJSuZ46fwjUz1Xt7A55Nghzt1wQKQEPvryHJZ3e1dUztSd4URJKXWMeFieKEeB3EvuwWfS7TduTR3zcX",
  "key12": "3KjSkGt1e7sSBVUBqJYk8hWuPCyaGnzUEKrioTf8hKxyZgJjzaPPW73T1JBGGQogsVmA5PXZCBeLBznBzbivpDUc",
  "key13": "fB4BidyZKpwjSKf6FEzyJiFhuwZ1DBFhmfj2PzNLyzLPZmadq1bs53AEJJhUa328z1M4H43EwSaPA5ut1hDZnKv",
  "key14": "2WPDgFAfD3fUwpwYfjRVcwSy4BiLVY5DDJ8ffpH2t98cvYEBh36mxk3MBhk7iVppjw3CwiDZKNtY8Vw3TjUxeLAf",
  "key15": "4DRHfAQfaPc8BqS4aW2HhevdEHsx7sJSE7T1dzbhGyUmcLDUtUvvkFpPJoRRcDtKMmf72sRYA7cjYEZ3mqoNkLDN",
  "key16": "5yxo9veQaPCF9ADAxW27QZY7TWjyZYmrmitjBStApxc5RqjnxzVx8t6k5YGTWRtUZTE8ehbXMLNbrdak1Xx8QVZS",
  "key17": "5DAGCKq2H7gx8wLV5QMrufU7nyA3XE1asCSiwHpUj43rU6Xjksy7Msto8QGJ5M8SCRQxSzAN1CnFFkdbv1FKu3qg",
  "key18": "5Xmk6w464YyCPadLeZK2teN8QpGA9KDVpzszxBdTLQEn8aitG3DNGfdMZ4epZnYwThyZ9PsMaD344koHS3qEg1VV",
  "key19": "ismVofK9r53GngG45L2udERMc2ACETWsHK6VqKsGQBDRs3mJw5wixaPCE31poyEj19BkuBXBNgh2gXPGFcqnjje",
  "key20": "2fjdzWxXSoBQeq1SyNoUKRdScnbZszW4QjRmJDGZWGjN6azVHz2fdZKeP8Cf2Z7mVVHgMnfB8Wv8UDimjizuyJzw",
  "key21": "3WnQT3WBfiq6kiQ9tbjqPRZbr9m5fE6iBxPp6AyYnxZu6CU4PYyoqHThQnEbBUV1NY9EzBk1J6Njyc2ujVH3LZYz",
  "key22": "3mhP7Hiu624nxKeMCnietvST6jPv7BSNY12z9jQEmDDqz7z27SahoKzBA19sb1NxUuJuWb9kibnXhKoiyD9nKt5a",
  "key23": "2DEXtHJY4rS4BzWZMYxQUrv128onQhKE9XvJ4aCefU5yjSQPTfLnnY813D3YXuKpJ4gcwnVbX9sYej1kJ5BP7sJg",
  "key24": "3GsYSN1DLKarndAMaqzGPrHoKCNhiA2Rm77qU841FCT9WJCDeQDTrvxPwXPvPPiYTW2EBewiRA94JqZ8E8Y7L8Q2",
  "key25": "4MszB1AJUjY72rDrpyrqXXDPPdzdKskeU8MUnREWdBr3QJbfNQ7mueBF38An947SWKyW5PPD5pKysz2ZZRE25vF2",
  "key26": "RYSohESMYHN7Nkjpe5BQqhxh7mn3jQKYfwsPhrhaaLjt4oq4apwXpe4gHqc5fSVzR4HyXczbkk8ib6W9yTZKji6",
  "key27": "3ARQGsQtwaCWgRQx3fGDb1Y9tgYhnKam4gZ9RwGmHaovka82Ag6NbRBX3vUc53tGyRYSZenWfRFTWZCTpy7BX8wZ",
  "key28": "3xJPxxG9VXRSqBBLbTykKpwfrpRFpBkiij5xYCSxNDzXgm5kR1cHNJ84xKDCKfyHcdYgL47fDgCt5tFRjARwaMSU",
  "key29": "56fYYXpYgApU1XjbKcwwTos55XH55yfVqu7zEdnbpv3aWnektVT6hz8ttVpJziUJVg5sdAx4d674TEauFk9Jeepo",
  "key30": "2TqW8V31ca6oDMxi1JWNgRzYRgq8JPcSK6dvR8RZNQG1vhWo37uUcq1PJZD1P8VBGomCGeRR8rfL6nePQgDtgv3e",
  "key31": "5uYqQRvX2EutW8Q4PzVqhmxx1pizbQhUSKGCVcEAjHxBqrbNnSaHtfB3isSPrVK5dS2yTb21Dk7SZ6ABqUmnzpVT",
  "key32": "3xcBs6BDJGLRtqEmhHkZbzPjc6FBfzLJRETiGegBESDgyzLUAq6vhfzKL9ubRDsyDLVUtbqp8zpnGC9SapHRxyfJ",
  "key33": "3QreVy7drqEaFBDbVLsq2c2KsutodfJvYHSEDQ6zAGvHULRkyuNkWxw5bRCmNYy7vTtsZcZ4CTbLvck7yvUgULFa",
  "key34": "DA6Rv5jhLN4Fub3CbRv7dwe1bGSw562kdPpzbtFRyH7ddU164bunzjfvY6uozyde2N7wdDWectvRDU9arA4Xtas",
  "key35": "36UmpVrTh9HQ3Vrp7cY7JzuyTUtffuz61SC2raKKqFU519An6eKcZ4tAMSVr96mADHr2HLJZLyky6VHk1MU6G1cQ",
  "key36": "4GB3arKQX8EX6jAxFFumCHPchxtNMmNLw7rNbdpm8CuEXaMw8QV9DkRAxU5stcStpK3yr2yem3v8UehJHW8RN4Fw",
  "key37": "2Kde6XRjW8RuvsDT3XmLN4HCqa8ugzzoyXgbG1VpZuFpEbjuSryCLVGnBFHBBUVr4gPKegiRHQdcojkmkpuf8Pwe",
  "key38": "4i2iHR8KCBqvGKFrRJEBZVA7EvYiEcob6mjsXE7P7zgjF7d2dJXc24ztzgUEVh9kb5JVA7huaVb7ZbEcyLq4EQiZ",
  "key39": "3PNRpk9mJKmmFYdSnZHwKwyopQAy9NfKSb9rch1ND8Qwtqs9HBnfXsE1DUcJ5EfMjHSge8osLrGxENd5EaS2HfPJ",
  "key40": "3AwkyTV4v1zEdjayZGDstTZBgGDhmDDWv5d9jLT2THk8dvL9z9JY2Zg2GVRarPQf3dPUye3XqVshYyuVNpGhhmur",
  "key41": "4EYgQ2nUuoHCe7nWRqaiQmvzkZSqsNA7JH2uNQbUpX4qSMXrzYch1pfSkzKTPdFZHKnTa9CsvNWrTL3eserb2cKn",
  "key42": "57YTMdFfY3cFviXdb7vnYtWM4cfcY6nsRsK1gsXdYiaZZUy2SD8iwLrBv2f9fFcZxC8ngsNTPQ2jk4A8WCH8PQMP",
  "key43": "34khkcwmXfDBj8vQWv4F2C8tRAD19qCZHemGzKws7sJaj3sgArj1RzUYCqy5FrSWV3WMz2a4Ck2fSiKbKAXTk2hW",
  "key44": "4RkwTj46aTFutM5V4ENsXPc99xfwnPHQxsH9Ax3UnPmrq97DCPAW8UKARzEX4LjrRWa7CqrQk5CdvEWK8kq9reaD"
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
