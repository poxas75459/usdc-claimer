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
    "rH8WEHjZm4FC2whejTtjuM1ZGq3WanwHb5vTTHu16gMRnAEKJwFSnSntc74x2hhUrbJpjMmK6BFvyVwC85AtHET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lqy1MtGno5qB9gLj5H6HF1BG2JMQYqqav3etQUUpUQFpjqaaU39o7Cs81mrHeZur7Ncdd1HneGtgtk9vtN8tZLa",
  "key1": "vnMFsVmVzJQyUr1fsG3RBbRabWmB1qEBfZMAbfHqProwvekk3tgfJ8fRjeKkUu8Q5UgaSxCbS1cEsRuiY5VtzRQ",
  "key2": "5hLcGZ8etKN5s1AxbURFPtfuCyLEiTKumUFo65zJXoMi98PytJ23GMFKduyHG2eV3nURCNrEM8YoWhxWx8yFaUpg",
  "key3": "2LVQutE9kwUyr3hQGLN7CsTwEv1ND8288XMvknCupTbfFMfigpbuigrrGVZwqnB5kRbGi7A9x7xcmetsYJi3pPB9",
  "key4": "4xP1iE2CyLFHgYR64mafgtD79JUWnz9SBn6z4fX6Gcb6M6asLeP4gjU9HShmZmHKvFN9rzfb24MazSioHTpqm58V",
  "key5": "5jo34n1SKrsDLmZsqX7cLQhyG85y5UykoKV9YDVh6sD57666Wu5gSHp9gkkrfypA4ZkcuK3HaxYuUf1VX3Lj2yeq",
  "key6": "tA6gB26SLvQ66PCj5j4RATM4yjxNX8dMmL47DbV8a2x5HZtkgimsbSwzMhLyszKuuwWaUxixqizJv7hJRPSEzLK",
  "key7": "3cxVDwHF4FrPqas5LW9TwRb6cF4cbiygi88yRUw8mdUYuti47FvfeeVkWsPz5mRMm9bid5BVRXLRMegjPo3RnzFC",
  "key8": "2d9vSf7gy4jW68W3LkzqL61LStmvKGTewdivYJajBxVaju8XV1RVrsmLpG56hgHRdc8WBQv9zVpkbyd1voWbRGn6",
  "key9": "qLqV6jBXeZR7K2v3gjnQ67Uq2ANqr7kFuVukcZV3BzGwLGSEgm4cjCWVfqjzCDucEzfeRdh49XRFFx4FhdapgVt",
  "key10": "5X34onRWKj6qHKBZmPGKCmQNhBzk4QZ3oCva3jrtc1h7nv7XM1ePM5sn7Mz2ymdcGsVGyYdVs16f5Lrw76R6uveU",
  "key11": "2EDGWx2fhBoVRQHqAXaE2yQeXLjweeQYKPwQ71RQ5nGRivUhuTBwf6D677vkjRs4MCWszhZb8UwDfq1XiVASeDfJ",
  "key12": "3DAyaECdDSbXkkgrkqf9cJqQcgmSjuWYRN2dQzCXqAVLJE2hDrkWKWKXmCa9ftszYqLocZjmqhFiPpRnTA8p2rKg",
  "key13": "p743svuwf5nMBAgDmrBwrxMcUfv5XLkgr2sYGRKL9tFSGgNfW7s1HcQ1FUzpFRd5yHTkSpF1AV7fpmi1k6ZCis4",
  "key14": "5xU2i93ELr8uvuwdPtNVspvKHEnBuzeqbjwCpLQwzohWDoj9MTVkr7auhDmn9wVpjBAC6a9f3vgoht3aHPG2EpV3",
  "key15": "45wevYaNifk3QzFA1khUusSRYubVRAoUwVD5dbf62Fu5ZzBoWmocMSmw9se5PzH7kUtuN4arXAEFRxiwqB1foDTD",
  "key16": "5vWYqdg5239q3yjyUiCJs2ZS9ppu1pTM6LvRXYRgAueECMPPnvCQ3FLptXD5gbwqHJyszsXm4CvTHhEutikMxvdk",
  "key17": "3XNnf3WfxF9wPmuRqqs2g4Hbmdhw47Qnpwm7ctTu5cCWMHsbXXuenMbP9aCULbLzkBdLRGe1Q2HDttvC6N5jkVnN",
  "key18": "2tr3je3LXVMhFcWszVCrJcShBrNL3mvR7BHnBGU1nT5hMy67ywPThhg1dzeANQo2LKu29xa3g4HjknaPcqr4qimC",
  "key19": "3V8SBc186KaHCbc6tEMUAbjBnHUC4H7yDi81HawEZPGiQ6C7ya2ksHfHPbcKMLi8RSCfuDknaYUm2K2nMPscy5GG",
  "key20": "2QfjeASs8wKdJPbJWqHYCnQC5bG1k31fGnYAbBZLBvUnJfaoA8uVXZ9vj7mTph32pkpHudz8B1Fdjbvz9NAnGnK2",
  "key21": "57tujPAiLNpY4gAsQXBrPUF2E8BAWvvugMcG6yTiRgis1iVVDyvzfEwTGu4nCKxgUa7Xq2t2rJA3rpkvzKA3CU9r",
  "key22": "2phkQYnE4WyqC2KTLkV5YDBHomc4FQ4Yt5QdS89YHjAacupCnBX5q8wHGeh25EBnSunNWFfYxVAvvvtvBmJketTP",
  "key23": "3A9k4Qo4YdsvKQV4m7Gxjmy6H2PMNYcmVjKttXsi8eBhJH3Mm95rMfsGR7XFvVjWNpNhwFdAELfK3BQiBMfwbWV4",
  "key24": "1gXY6FWpqhgmAKfreKoFXt5m2JrD6AdkuCp6GXZsGueD4V5XYnwxVQkwHNqopDvBSnW2j14p1yrLPqjftQCvyR3",
  "key25": "2A5x489hekMzmXNBNJHb7afet3dPuiKUVwh1CjurjdqzbMEpTVuJM9VDSNk3faBE44kezQ6dCVB6DurrCq2HikRM",
  "key26": "2BTnXbdRoGgwUqrxNeaP4Cc7QoasZVfYZpeQtCVHGnAGvAgsMMDcGKyDWYFeVwduUXWAMVEPWwc2R6eeb6nty8xB",
  "key27": "yfpyCcaupx6Km8Q5Rv3gJyuwhEF4FwgcPenXYWc6XMSKJBJvtzDLiTHqtLKfQjFJ3KHypYJjy9zkCvMDQUNRrx7",
  "key28": "3H9Yw1nToUtENPS3NvWQ5no6u1aMzEhuEqQLoMny1eEh389HP2LPf2FPrrJSMJpDrfaLazFpDksjo3duGTVNn5Pe",
  "key29": "3U9rz9s2LyfszLCuR5PAvb4xhNrkUNL5km1JgNBBVDscg5ZrGdqLWfw5aZmUJbqBnng1JrNcrZW5KGQhNk1d3R9y",
  "key30": "36mvJmVwvPBbhJBs6Kaz1b6qDmGBfwMhSmdSTLXZJG4nQaFXrPt3qV6HwJUbeKTFaDF297jXK36b5WV6ZTkdzfaM",
  "key31": "3EZBqupa3dXJeob3eQmdEGZSMjshaj7Z4jG4pdKWBd2jNu3NKaggqe2KwkCvexzePyEPKCg2R8DLLbCUXdSQd3vi",
  "key32": "33u2KEKfMSUkNGeXJAkBCEWvPeBfHB88eQdwngjMjPm9nw8ws5RQ6WCY9ZdxzKBuNg6fMJhncR9uGkfJXnHEnABN",
  "key33": "3vJYt4go9trRm3RPz6VxzDiYGJf7MEiwuiBnM1eDSgLvnUBXH1M5fYBCN9zdGP8RQGmSTxm5Jahhti5DC6LXj6oi",
  "key34": "4CwwuMNJL22mBN8CGrKDuoM3kekLaipifMsSbNSKcDh9SomKD4UZWn8bJbN1qYmSDcXca3G9cMD5NeLY9A4F3zFp",
  "key35": "2BRvtxfYFnHEH7iMN1JgWnrCYScq2iMWnCUsT7BJdagCjA42E7kQzoRz6NgM8g2qo8LkvjfCmuVyd1raUcPU4GKf",
  "key36": "Zb4se34SHMRQq69a2Eak22HSM56kBN3XkqnCG6sDLqatgfQWccwjRZok93iz6ijFJvioUVVaLSWgjq4S4XeYQe6",
  "key37": "3jMBtWxm6L2NqjPJNRPmNjDdHTa2EVT5YjgNQkiuGiDJLDNcCzeHNSREXNEohLyfBmthZDwZDpYTULKkz3bp1cUi",
  "key38": "3pPdgXj2LNkKDmtKnae2bXG1DeonUfdPA7yiU428iPaUzkNiazyqqBxxRPyeV6sFXgeUpG8AVJMTTfNk9R6mLNBY",
  "key39": "5X4bf7N3sgZCo5SrQmh9ARM954JTq94843ehGEybhp4uvsiC7Y83DUWUULMZw8aP5YQSCAMFGwnKzrsvNLQ5UvZq",
  "key40": "2McQM9Xt8FrnZF7GEManRnENqckBTnX8EQwJnGYnqEwmenzWzdBGaXjxujRPE8UwM3Hsd2dazgLU6o81tSAdYdXq",
  "key41": "351iAdcUEcfotdEcDhzbMaWL7U3LedTsSdwh1wVwmrZemQhLh8Zadhy1vFMwyChdKPKrdXrakjgXcvc35Jj4nJd9",
  "key42": "5MKgHgnyFrRjuowAFHzxCqXeT6bLJpYjwjrCUJkUmkVu8iaVRjve5Tjb1ddei2fAKcu58jbWcQJHBpT93dSPjhTd",
  "key43": "54hSE5Jgib1asTCf2oovafQzZFhJtqpauRYec2eWX2tuZj4v5WGrcgqETepBLTndVgRuG7unJzwSxpSvVaQGLkPU",
  "key44": "2UNYfuLoVj3NTJ6K2HEVW4M42sjeeXH7QSkqsCn9eA8C1ua616K5BoiK43C49Rs6mL51t5atB2Qe1KmhXFbVt8FQ",
  "key45": "59r4t6ANiHz4Z3T93JnR6jYm5WZv8sGDnTLy6M4vms6hLMQKHLVjuRH6DYM8PmTH9NkgWZidtQwyos67tPB6ArR2"
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
