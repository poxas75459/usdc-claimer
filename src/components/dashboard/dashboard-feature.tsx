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
    "9gQEEdXtLJpTodDpv8d2XiobEPuyzJmarJ5huNen68gVoYRDu6KaZSgcjSPE1ekvbxkjTwtPML8EYRLx8MB1pMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46QouyPJwx3BKeLSd9PYkqNmxDXwavGQg873Aqp7di2WDJpejF2sK7wqLrb6M3b7nBTPLgmWcAwbQnmGqZz3wbGh",
  "key1": "53LoEHVRf1SS8sdECG933NV3rmGjx698QAU4t5PMTJ6GFwZ5bhXH4Kj1ZmBCRda2fikUsVSGCWWJJPQm1XrnBuUT",
  "key2": "5TBcNBhwkkk4D51z8FqepCTRvwfeSd8FAM8A6zLHDMLYaNVYo8Dyim7aoiGXFK3yeNt638xKBBfN6pq6MXzZRq4Q",
  "key3": "5TvVYYCqPeQpT8gjuw1URCbpy3jHtdXefJSEXCvd7e4YLz8EzjguhVkkPTE1vRC3EfWdbHXbubTzGYb265oYYZJU",
  "key4": "47kBQkWsS2R6W8jQWsYUoqPLCvQjzVK1sB54Fr6URHUvis64TF4oYZxHK5FQ7nMGWyJGqdaXERMTJP6qicm1ziYr",
  "key5": "4NU16wQ4TRAKVb7538CWiuC4WNMwqxPmyjN4JdAHdre1D6BpnY3Bsf8F2yGCN68e1wDhGsWFY43qd72UBaVXhUYC",
  "key6": "4nSwWxYKCceMJWPjrWNdWNMKuDRzc5pboJGyjxBPmy9M81eXXSRcyzidKGhtTWUsfgHAizPYkWwZR8D6gq3i1o5f",
  "key7": "2g2E3gtzrd2m14dMPfqY6HHP5VqkNv91tkiUtVLLj3atJ4juNqXvBkpbsTtyufNiS1BRStxJcmtyCkdezjKpDDXY",
  "key8": "VcGu2TDs71RciKq6enphZX4trnaYd1pVYiCqLLRkh2Xvrn26L9YuKqzjyRqDcjbSPfWNnGaNdPZarwtQfbvkU2t",
  "key9": "yjudojwNTu4Syx8o5LKUnbNskhMGEaRoqRyy6ahTZNh5Jk75jYvLYnAeboZXtW6Bt5HQz5KwZjzkBj4WfGANEHA",
  "key10": "4gArRRhfuzWXsT3hQLo8cfsYkMGMGzLMBLyNpVWrncKF3KCC8Hy6K7bZbdzxFR7N2kDwUNc4HGHa41CsBucvfeK9",
  "key11": "3XggPX9MdcSB6RXEfcPrLB8TNPbiRuDgzZwiossHGQkXrtWhoUKmS4YyUi4nUrQewfNcyjanqt8j23L53H9vgDWD",
  "key12": "5zjsBbzv2KY9Kur4auLMCugWpUVd6UxDfsj2JqBzXHenC4qebCj4hEjeU6J6vCPyygZVCwxjBSFtyziaRLr8xohf",
  "key13": "65oBpW21VKnoo9dWUDGgDxzoc74GhyzmFWSkSbEZiBbUDYVEGnY4pjqMY6MhcejXXt7hTbaNS5tfAyHRBLa23tDc",
  "key14": "5XBy1PXk385mDErd1eUx8SpCprD7hSSBVk419BTQcNWJP7UhYYVFDgcqrjzZE158VxU3jFznyNBXS4ik4ZgsvMwV",
  "key15": "3rtBnvHeujtQAZni3dXzG8NKnYeKUauFmKHrBtWeg7vmoBnDjBFBxCm8ehxTP1wJHi2KFioqCHXvcVw6tEHEmbPS",
  "key16": "2ob2iuhekqCU2GkLCSx2LPDs1PZk6XCCMxp8HPsHQtD7jndLuq9KZPRdxZa5PpKzquS1u4wtyexzcqZcpu1RdPJK",
  "key17": "4sP6av9aMGW7YfUtzW9PinR9VkRCsSbRz2ZLuwqLFHnaESagn7F2GxVbZVEezzxTWzcf1jKzTGbAwQFwWvQxFoUd",
  "key18": "3v3ibcPcuoPQ9ZCdA7BCockhMf1u6VFeq4922oJkjBnUcPobde3Nv2CTpWfo2pxas9DHLMs1EC72sp5vxDp4urR4",
  "key19": "3efV79zi8dRFC92sVK8yauHf5zZbLmnbDTc56f4231gRAZ5WtXPmTcwXuBEPjhWQgFqyyH1p9DdUw97yjxQXZYLW",
  "key20": "2kYgDy79iSdmFst6dFh4SiARjjV2Jc5N91cNYXWsXuLqyeKd8xy3dxRbMqKAfNgbYsA3oS1Mj4F4Db8VmDcgWfuh",
  "key21": "6PhMaqHLEVmCkEY58ReEkjExzJXziG48QGKjqxT5DtbaZ8u6u5WcmYvot5wL8iu3K6C6eYs1ciu8dhp5UGGnyNk",
  "key22": "4NRwXsZ7Nnda24LS95XzCLzNmMPuqGejxougFLH6k1TePpSfSzDqeSQZiks2qVksR1FhoVggHUrs74ez6CG3qbSX",
  "key23": "5Xy8yqYcR1RhnvNGSaFxQuGNq4ZNvj7tLyWbMQBbiQaGad3nKBrPQZp3KgGcqBkQn7xH8X7i37jNW3hMgiHKyDto",
  "key24": "DmzQLQpWk1mkdsoY6vEnKw1bBH5r4XxXrTPvzzHtqasb5p6ZkrXdqgfnBLMLaHJ1TzLpdmCxFhjtxbNunn62voT",
  "key25": "4V1jSiTuF2uDLit8Go5pWQqBPABVP5HHYi7Dq6MnhJS8YbnDjDjdbd7VkocM314dKwrW4o9ZymFA11872BujJEG3",
  "key26": "4aVj27hEybxgLJdpQHFMviBPjMS7zYaftpz5Xm7f5FTg4fPUR6tK1mFhHJrxy3554qfbKbEBmfKS8hVYAk7rhNFC",
  "key27": "AzUGYwLHqGFDLHhtSXzea37PQfk6uK7gXvKdpSVrMbk3PeDwaa4N6hTaLvtAvnVWW441CiPvUsj1WNN3uVeUn4K",
  "key28": "4cbRMzt4pgcZ9A6Frk5bWVeNCHMvNRT2X3DBte3gbgq9iJJ2qSczzDTF5ooTLWvBs61seafYVjQEkrmASTaJSqKZ",
  "key29": "3v21t4GRzJDpQNmg7yWWqEJuB5JkJGU21rJhV5LmrTBLTzLk7oGshCT7h5JZJ2fAGvneKbabyzgi5FM6zNFadiHu",
  "key30": "3c6vxuNxLYFq7LbWNSpS5ZehPo8YMcjuWZuQcpWuxLHaKkEZnmNH6QfHWSWDnsNSUNzocGxcqQzbhLb4LcotH1Xc",
  "key31": "4Q825CY3dirnXhdPYSBjh5GTCbibQws8Lhma543k2U2vwe1xMR5VrQwvJF66YNFGChsvSCpqNck7sXnMXACPiHyu",
  "key32": "3ms1nJPmHW9rNYhNRY5B2tFMcyhUmPBDWaZE6G6PSb3foduymsxQ7Fayd5z3cBiHWe5CQ9Y6k3H1KfGAYrNvSFeL",
  "key33": "44dX5JcQUYnbwLjoKTw4vCfLaQ6iUKj1EMPQzRogtypF32vVjro1eVpJ9GgTbfv3s3TArC6dQ9s4HyaakN8Yqrns",
  "key34": "XiznjxNLgDGofzrCFcKZvZCPesBJWhFdLauH9FHpYqRvAEZ7RaL7EunCrkaz9R9sUtTBvAb6yoQoL56YVxS3bLP",
  "key35": "3tmBkD3grPVBHhgBnh7r6RzcLPxittJdkAk5JmGowxzErSirX8mJT2tj976LZFoZKBHno4Bg7yqCsusYh6n4H7Qo",
  "key36": "2RgfPqNDeYx96vSNx7FmBRabwXX218meT4Vp237cDbh6qb8DJGfHuJy1GTktVJxUagMBWyFZcMM4Ad69oUjj9KGw",
  "key37": "32TceFqMF9RiwTGoNhZNtaEBJE7j88W9ro8ZzaLsp5ZFTwQxXbKuUf252vDbbdXfo7JgV7Jr2ine4U9jnPzTrJcL",
  "key38": "3K53cG4aqzENZzNPmh1jckxS7Bj5smm1E7x7KvmKdKH4LgocuhPfSDhcnd4ZDT6kxe52gLRUd3sc8sGyFpJfvFvB",
  "key39": "3ULh1AWUEBJXBbqmqb3GUTDbN818NCCDXK8PUxJB2HLUEia4jDNcRoaZ1haKbCYdfv58MvonUUMnJ6HXfq8A2MHC",
  "key40": "3DGNUyrDs7u1ZA2uQDT4qnYLGsaqUw6sT4QXduuosgBwfeuRixMVT2Xp2CPaALB4J2es72QXzwefjV9V6ftTTfQf",
  "key41": "54kJ7zesGUHTgzMfdySD16XszRwKLJZ9FNBuxZv4GFYwgoTA72xNDz7czu94F5WZhpD62tYvYHALWzVABBSptLVN",
  "key42": "34DgqaEGehHKSJLwXGpHkXZn5jCTmuZvaanf46GMLmzcARtXrSRruQYSnEQFoS1KySbKLsDP19bXQC8YjJMDAGse"
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
