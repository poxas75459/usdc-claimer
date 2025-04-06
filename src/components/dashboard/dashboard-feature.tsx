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
    "2XNSsLM6RufrZxAgvSghKBwRSaaSNCLLm5NTZxCsQBnQihCuGzhfuXAADVtAZRNxxcW7arPXq17usuv7Ts2DgEKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F3cNnzL17Q9eU7kwFndqGaVMuiXzpXcEPFJSL2fDzfV1Bw12t81oL2EGeJDsM9oRNUAHWTa9AxzyqLC3srVADXe",
  "key1": "2CTFybZKTanmm1kv2QUX5kXg3GvwcPFCdwvWiZCmZQC8kDvieZeifWPzFUyHJEK1PfXDAaik3djbxcP69X7bCVge",
  "key2": "4jL91Ckokwk3xuaE38FZnwK8rV55UdJ8verSNXfDfR4RmQgQPA2ytzRNVfvABNbwbv6xQuDf1USxRxyGmsk5iWNv",
  "key3": "2iTNme5oW9vwNVWAMsMouu3i1fimHc7jMjo9cuusWzxPPDyzuT96ZwRrGvBAt37abSatkBQQ3sbmyBsZs8inqCJn",
  "key4": "RN4aT4nzNtn9fkJVywpZ92GcfiVVhdbhMsGfion1bhiRCMxMCJi6C2RVoRHNN3zoQSU1Ryzqq63FHVYPyNVmgTL",
  "key5": "21NzqS1gF96JSxWDYyX1BgLGXd5TscBdNAiQstsSYdo2ZE7saynki2doGYDXX1BsFXzcfHH2omL2AyQZ1s1eUKbA",
  "key6": "4oagSVXRJmaPG8H7hHTSAYcgD7qsu543LTSSekZiGBc1HyPoXDAUMzdvJFXB3nV1yUhgNEDyjDoQLKEdeouwQoNF",
  "key7": "4U9ikmUQzbFV76JMcBcsmFm8t3r2VL71LzG4smeT3GJ88P2EMeM6z8cVwyTXBQbK2gqmdRPxP1RtXna4Q5w8GMb6",
  "key8": "2QjdVRYQjcGTfB5mdxb2ogQ2xLD9azPXmhvFhrrJmf7KAbv8Hde1wkdyAsLjKTSWVWwjJqDGLcgn1QxN4p53t1WW",
  "key9": "5J7TnFR9H6CTh1MxioccUPD69GnCqeE28eKQsXBv6DShw9YiX6syWMpa7f5H8fzhH1QSqwkEn81fSqJ73UumUv2Y",
  "key10": "9uMGzb7JMnU2P9mwSvLa1dkSEgw9vRQ3E1S6YNhFpSoKLZ2sX5ryJDBkjBqQRjdXTQ2WEh2kMRUc1DMwJS2wq96",
  "key11": "4LoD4ev6gqgGUrDPkVfPs6axSK7ArppUDoLMuhQ4nN6reHboiVw6GKf9cqiXd1BChBNLHh8oP6YQhq1jCYGJNRVC",
  "key12": "WtozT9sLbkR2uUbkySzmnU5owzW4RHmN13vXJvqtkwLVrvABk4rxUukjBc91t9648ukXTyGT4UfMwRB1Hhw6Yoz",
  "key13": "2SVh4CixaCLzmy4iLu6rshK3VGNCXq3ZfZydWyXVZXSEn3rQZoQCSu8fLBRc6wKzJg65EQu3is9cn9nyyALeREpy",
  "key14": "3xe8kwZ8iwRRPFZJGKAieUPqcVjqa3Xo6HyRFS1YAKqxG6VsuwiBGmKB8VUqZyKorcSHau68oKGhydaBkSd2N8de",
  "key15": "2B17vFMmsSM8Twt94d1YaKYMGUs8jWazPBMipZ5pVHq1U9TQ2csFh5bBs3zHZABV2zcqPSnRRiiWX5rvHDoSG71Y",
  "key16": "5CPSgGJz7A6s6HJu9Z9rxe5hqsQ9n8Su4uYDbA9mtJHLCFFz2VrbntdzhFTiECPvA5QHrRQioHpd9yGvgZDjo6xp",
  "key17": "48wa32MC8gyYFzxbeEUJi91yVgYNya6ZL4TvoNbccHFtQfV1T2HMkTQSqmhNQbQkxP1wn2feSY8sFt4hFeXyobiQ",
  "key18": "3vfVYpAaYBz8ZdFauJvSHhoFEyhUGoVXzxEhSdnLjXPSLDNu5xpVqczEZfHS5FZsft2TvpDH24ScbpAb4Mk1p8my",
  "key19": "2PaQF4WT1jy5b88zs8xBeNUovRBR6w8MsNu1TX6aBnPtmXhdzc3APEkFfN6uszD6SuWFL33aF87QqrSVjAqSrfor",
  "key20": "5hAYPw9sd9wJQt1Dih7Gczn9B6swWa3tFEsdciSuuQGZx7HNRWduQGBC78E5sSHmY74BrQ2ih3ai5UEjbyZa7n9A",
  "key21": "4ykpS4cpY6zNwY9kgXdHJSvKRdLxpWusg7hnHeLJ6mXDUtmDibTTcv6avqTjRyCuyZZzM2M1zULbwmgZQ9kS7Suw",
  "key22": "4TugQd3gEX9CiQsq5VcHeotBoK5A4wx5FFEXKvEsaTUTfw7vG8h9nzDDJiPZyqateiM4v2urEw1dnYGQiwNdCSjJ",
  "key23": "58HHV7coSxriiLJXqkh2FdtBp4Mgg3sEKicckdYdRpJzVChktScSCxTPPKVi8AyKkQVdGhJ9TfhoVAr4ZVYXSRVV",
  "key24": "4zCHMErq5en4oE3SjDJRxrpKc2WnM9cqWsARWRGyRCRAUC1zcyyhd5J1LPD7x2VG8864eFGcuLa6SsKuEMew3hjs",
  "key25": "4Ndh7GbdhCiPajpXm6tKTF5TDnqHfxpCnhn12ywGf3xyv3krNhkmSQ6vM7fwuQsV3atDPfswazExF2DdhVg7Qo9A",
  "key26": "4giNLRW8Y1EKwnQ7qTun4gZjsSinfdgs92NRgKE1anxReF3Bcs8GDFYG7R9jYW4ahw2y8N98hLX7Rbirbks9ET5f",
  "key27": "4UopnohxAA9d9GtB2W4D6NJn57LoWdexLoFKFo12Yw23hEt5oHAPzwtTvd4jDADLbBqj58GG8KhFrzbmmUQY5RZk",
  "key28": "4b47sLrMr2KdRGuYfQJv6cr4civyKR1cjhCbozkiduosKnmWxSC4CCjjz1MVyPMpu5MUQfwvsVtzjDRPa2bATDrM",
  "key29": "5Sq56YPDyBZXMqkrwWsGMcsimFyc6hAdLwdzyt2HLJW1hsFfhyShWGwRC7EtUkn1bqxCMmckqLUGbodbVUhzT1m3",
  "key30": "5QiuESKpHk3HxCcnSqCiEcjfbGALmfPmCTXn4Qv1J2rPy2ojGRZJSJL5KV9H2iGrsXWQqqSZ72BVuEuE8pZ1Tnyu",
  "key31": "4LioKptUYW2e8UGNLqqukRwWpvZcntZvLNuBdzx54ihBUyCLNbu7hJdzXtMVRNvoGUMvXH6XAujFn8DTN939carR",
  "key32": "5nBhhDSAZqCfPJEjqJctCTTVnZifDF7otTVKirHDkRvUJFDmcJsdJnQ31PgkD3uN38PRp4ZMV5sjcqv8nkbiEXqW",
  "key33": "38t3u4pvdTWZfEqNMhuVW9dovJt1RsEzTJpDVznCEfc3KM2pekek3BHG95xhsAzsMrHJkybmYfaq77MzwhwBKaNn",
  "key34": "45c9tzg51Ej6aCuzcpvhp8qxEmnuo5Vo9wixKnDnmLn6fv4oBcWjmfTB1jRDV8FKDsLd4nYKHKxexJXck39WvmvG",
  "key35": "4c5TUy9z8NnrvADuKyy6yFbiWCcGtaBLAixbkUvjJBnysegZh27Cfub1oFtyo6qGH73JRVwfFrAy6HJLfxj3G6ow",
  "key36": "ptsbXm2isEDMUNTQrowGcceekPSE9a91pHi6TH7Tn36cqCyVUYM7paKVtMTE3SGs6n4KR37FC4NMz8ZEdjLbfbM",
  "key37": "554X3ueCHbH1Q4ZoBhkRHLTpG5evnQxsExiKnmnRQCmhe41uHDsjip4YefDjnyqJD5SzvUGApvpMZ1DFJGkXxMkt",
  "key38": "ME5kLT5zLYcvC3w6uGqPZLJxXWLBiyvxpGPcMq33tEZYT2oyBu1vqEqHuCCFCRxc15gpPTWdQXEqCjNVw3Zdqfx",
  "key39": "Lahi6Lh9Bk3mCGfsQgQCYGYMMCVrgJ1R4V5gUyFoCHbzenhUGeMwpciPJoCt1uhWs7qxQLTxuZ3MJHpXTV5Pse5",
  "key40": "59SHorELmiffeMrtAfpQMfKyaDYtqBrd2LHLWYXniQzrNtL92Xnzdmx986YaQnDAEqdDNQVkmkV5qRp135ikUiWP",
  "key41": "2LZHRzC4JfqZbj536qyoEFiFiYuVhbTuW5P1nrewpNiSRQJd5UeFmSk7bjXEop3gG4cdHqmwrgyiiUgYJf9FmvBa",
  "key42": "521shaunhZhPe5AYWYcUMsPBtDhZn5iRs8iR6fZoztW9WUnQbrorH7GmUScBB8d9MdZJQPFRrT6Gg1zFy8mieXDy",
  "key43": "3TpbuKTc8FnKHiXqRfkJYyDSUfs1AYxPc4vWSjyqmVZo5odAD3xb6p1pkcKDfxMu8DjGG1dnkAys2YpZKZ58ejPR",
  "key44": "U3DKan4g9Z1nS1vpqfEsuR2jwVbLhwoDzDrKmGPk9fJcNLW8X1e6xYQvTqp2WdWRwRrTrqQJKpmFXaMCA7Zsv9V",
  "key45": "26UrR15YAhFJT5VqSKqgyG4sAEMaKpGFT862H2Kti1qtwHdBirQP8v5mbN8gJ4QkpYWn9vBpEod7j1M5Uba2Nid3",
  "key46": "3oUHpTJ8K7ivmWYvKzfmJC3NWiUy8iz6ENA87DLXo8ZFwZTSbdWf9xEXkTie5ez1L5v9NenukNnj8u9BeKNpGk3D",
  "key47": "3M1GV2JkLDwhoqACFDbsCk6eZ1XofHrECqPeHo8W9SkFsLvUiScSwdDCW3URygjCKeJXbEYE6W5HbhWbjKJMYdKU",
  "key48": "5m6txBNLNigdgSjJPQEpLvhHNQH1MLiampj557FGoSbv3oQu64Bh8FPfZPyG8PmFD6yrkm2CE5GsuNzUoZJc15th"
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
