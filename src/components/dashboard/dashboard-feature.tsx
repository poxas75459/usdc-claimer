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
    "4FB3EV9FfUznNyh2VWEzGY3LhLsfSCPjcxqt7Mdt8Vd7sW4K6S82rxptUewD6QwZEA9SomuDys7M2zsjcTateNp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FZDCrrZGmXaCcxGMNM9FnabD1y5E1TiosNxc6DkK5rhHJNoN1uWQ4CQiarmjyVF5dNWcffMSzUdWSV3u1iaJ5zX",
  "key1": "3xapizVAtH5APDWXEYMYnZTErAQ2w486u58iYhqAZeMptDcXy4VhoRmZL4GTpCvVggAEFrC96vADtzjPbzDEh7es",
  "key2": "4K9EnbEUwiLdz2qTZbH2E9Xotts8rduAGmvqVK7ukEWdJgtN3MHVyyQ3Y7jLacFQcXhB6Z4QXLkHvc9WbSPyeDnF",
  "key3": "cgP2TxDRP1we4vA9KNg6KHbtypo6T9XgQspo38a7sfi9veScQCSnVGUfTs5mTBCjkicvpGiDBvYsmFzYdAmZyoq",
  "key4": "5BN3YWYNwx8DvzJVk2oPGh2aQcJGyhLRQvJCHC114aChg8jX9EaHj5QMLnMQWedfNjBozAnhdo7TDuJQPXL2oEob",
  "key5": "21eTYzLwZceNNEUb1iGUVCfGysszowiyJzSbXZ5t3DHK6Xv5CrjkbpGhtZqQ4s6FfdyweBuYnFHJQVLKT1QXTvVx",
  "key6": "554qWnyJzagvTd8MriJncQJCX471TaxArjhubzDPmCcdmBRcovhsegQy9sv4UKTnJjNQT3TeAChDHoqEM8UyvHrX",
  "key7": "5ECe4kpn6aJ7MTctyjRdapaGy8K3UqYtzJvh3nWSJC9NbVwDFHaora5GJrP6CxbNRfamBanmrGwxtvLoQU3AuBdZ",
  "key8": "5jwLrXA9NbuTaHEzJFpBWLgxfefr18PJeHp2vTedt6DpKMz7PeDjMaYRJfjsWfjUjhMUPC2y3ZnGnbZX7FffrJfb",
  "key9": "fpNCbrcNHutepZ97QoUK9fUEiuFXXKFaRon5fq1SQe5xmEvARDD7Bw3FfNNtcaFygkEfii555V44wud9H3CEeYd",
  "key10": "CUELBCoGcmDvgkgtLac8294HTehJcybVVEhizjKNag7WV6Em9beKphfyfzuVbQXBg6BBrbXtDSpKZQJCyYSTUQi",
  "key11": "4ugQct6oQN5jLh5qQC2GET8TxqRrGikxt7MDLnEpw1aSJWP8oSRtAumfvms4TJ16MSbCV1BCWQLiX9z4xg1ydvzj",
  "key12": "4SmxmaDTpmmMdQzhGFAxsfYEjyjsXQaY6n6jos6DKV6HxhbQFxUeK7fJSLGQEeV43h9WU3LwgXQf47LFjWEgAtww",
  "key13": "3wvmtzRha5pqL9Rdk1dTCuJMnfgwi61hbMLndTRmLYtwVttRwci1kp3MxHb5w7wyAZujRK9H4vzDjvDyuWafzWCN",
  "key14": "1teVuDZ3rMUwWsmqgE6vGtN97L11ob13pg29f6p7BMSFRfjrfgQSix9JQpqztKkTbenCpa9vHmhMumNtHoyBGai",
  "key15": "63cGdAdY5ekaLQqKKRRJRCFPio6faQiB5FjabutUJCZxYuQw3u1oGn2DoWSRmB4d1AW4EfQgtTbhJbthMAaPjjjF",
  "key16": "2kc3rj22giUStiHQ3N1sTfzz22sZP4ykNaM8FGkXVWkAyhP17JUAJk3tmXC39p1AoY9gWmMznn2gKzpbN2dvcN7g",
  "key17": "sq7vHJBXS33u3ZpkmAhFc6eKMYgPwmENxwWMxCoxjyhcBxzT46RGJV3RmWE4VQvgUoJy3WSPnKnmEQv9zusnRqm",
  "key18": "5wYA95wzKzBedvVpigUhz8n5En3q3ff27wZsq7YnSVruyTDSqmyr6znu774jBiAnjhJTZf9w1nF9dc42dWMXJvKx",
  "key19": "5RaXmjRL4zpNkYcGNoDWATiJajk2TBF7HHLGhyffT84zCuHwmDvZGmiXjgSiDbYscWk4RwwcgNuD5iatZsKjWACE",
  "key20": "3H3FbSuMaev3PpFYRAyEwbCcitfUmscf1Fk2o6jKh2SLvrJsFehsqM2H1JD67jzn75huotwS3mhCnPbYfcezpxSf",
  "key21": "2SRojGKUj5rMMQBCsthrLR53FTTvFXrbMjfYNycUN8FCD5yzjSxN917TULcZbn3dmZoEexSw1q7wq5cQsLQC2dnb",
  "key22": "6722AMSCH9XCrZThs8xgW5PHbviy9gAuJUEPRs5p1QTQkLZHPQAbHGJgYrdw8a1MhuQhooBx2v88zeNMVRobFozy",
  "key23": "3sGeCQPLfQW2HMJFhSrwjeb2XDCiqpo297aVC8ASePVuvA87JyWSsShRnvC7hdwgHCruCTT6JBiJw2MkJcsjzev7",
  "key24": "2XuuG8AeRTtCT4rUoDeZkGFoLYTAWbzmAd6i9qaeT1xwqNFa6YEqs13j8XwwzHiDdaaeYmX3nQUY2PvYJDucyjGx",
  "key25": "VYdgKu9mZ5Fz4fsFcip9jwx7wKi5ssdjbRAgc75UwszwvVQEmiTSP5bRy4tP7DjcWbbhYjPUHfesbFSWxFDAogY",
  "key26": "WBULBqR3ijK32PfBF9LCfupgbDe1NbQ55TGd1PWAhP6cX3iqgFgVR6PZTF44Joe6Ps5gi4kPZP8nUSHXBP5aMtn",
  "key27": "tC9mRnaT2ZX2fjnBovBypCnG4sQdF2KF7RQ4GNcFA17KwxTaTcgmmp11pYz1euFmgGxfjH3udUHtoU52qtbA7pG",
  "key28": "2EMADxVaQB2Se58Bqmkrr1TfsFsz4HjcoFPc4jeqfTvgGiHGwnnbAFLJQ9S7dshvMHzpqSmZ4LFnQQ8fESDFJUBj",
  "key29": "5zgxQx3iRKqyeTjKLMMmXwMvweAbGaCaRjbWSKN2veFjgBXbhjMDnin1PZbpUmTR4nKtiD4rHdfQxLpdGb4Ukms1",
  "key30": "2rTYLKhJCkxNqZumsDwWCbH5RMrSE8mcZ4zzjVtk3vEyNg6t6Z3kgp4RbdEc6zgeCXrRgt1QT8gakHdLccs5vxSB",
  "key31": "5TLTi2aUJU5idMB4RnfTijf1vFQoWyKVUkDa2DPd1E6bRJvZc1hmycboEy8cpH6aSZ6WcqxMzYeEYxjJDFW5zQcL",
  "key32": "5P88c6hkwkxV6o9g9TcCWJzwYnaPJoUM3Egzs9Q6j8PECPm7tsk96cTyZ7r9fKifNaq3YRt1PGAu9PGZn9D1DJoa",
  "key33": "5JKccpCxNziK72gVzmN175VvMj7kcfNe4RX8rkT99vvUBpWF2eir28Rru9urpq9gaA3m11R2gkCiU574ko63sddq",
  "key34": "gjfkgU1N3nZgvDDvbdwcQ6x332yK9M6RanztC4phKLAJM1NnGedExNLfS3V14e2TYNRZAq3opnFqacuwE8fxmNt",
  "key35": "28riqoyXXwv8nM4rZWxnaSCAd4tBjv7L5H3EXrkDtWtn2vDdEXHNaQP8VJ9kntMtYNXf4uEyiVJKMi7Un1DrT2Zb",
  "key36": "5PUSWQd9dNG49DCjQk75jsbjthFn1tY72zNmeRnW6w7radZ1xVcmFMBzeHEkNbtRyoVV21gR5C6wadLdNq78c1bg",
  "key37": "58GE4hBd85aAp4KDDwV8Bta7JTRoEBXx5dP3t5MfAHnQbCAnx8D1qkDFTwnobyaLyvBVHbLVg1WurTuDviq5rGyJ",
  "key38": "441HEhFkFti4U6qW2NMU4gegy35pTGRZ4BxCegrx4Xn1aoZVuALW68FjeisT5TYZrq3AXruyKqCTBdMA5z37Vek2",
  "key39": "3HhcdGCs5Tzd8M1XZP14LfrABxbQj7jP2TjkNBoWjPHwYp3sfQLUbmePYBft4ig4YrWuyyRZbgEwMd2jVyxvmygg",
  "key40": "2o8fc7XaqXcxbFRw3yFGp9h47h1fa6BN3SSv5GXpKsgVuS7yPtK6MwNmKBF32WoS9i6ZHuaRctoJme6PSU6qUQMp",
  "key41": "4UivJHRr7bxMDctukYcd7Kz5W26UsG791983m7S4FymdB2XjTPdRrWCcLSm1F7MCSFW9zv3fQ1egSnKCWkkzZqpX",
  "key42": "4FW5VmWQ97NYj764N74wzY65QqJAPwcSGjhw3hRV8adsWEuCd7DgJZX2h3as5RWzTUwY44pNhaVGKkZGrLTyxJJx",
  "key43": "2cLkp6Atm9jVtVs3o5Gs9Hfk6vLJcY8jtEsVoxLDiGwUSNoggNv11mKMAFZU5oMnFpAatHs67vkAXqR31yAhXDVC",
  "key44": "3aNCmSvKQ8bKSSmPfCy6jS7WroPiqwELKHfwjHBe6YvswvCfccLGeDMfJMdmxxFk5fZL29wLHhZPvYfmLWuzFRYa",
  "key45": "4REvegpqHiyrBxism3FtjNppEshBs9MShmQCpUsYY7zFv7Ws3JFRa7LF21vgg1a357zTbiDaKAywj9CWz6waovDk",
  "key46": "2iQqte8e9bixXe2iQ1KRrRr6cRUu2fDbcfXKQoSM5NpkCH5sUBUEvuPty9qha7PkLRbeUZAFD6wVVMtbdZAPVHTH",
  "key47": "2ej32NTKyYKyEZYxZEmUnVknAur4LcA7cVy8NJ7Tqxipm7ZCPqtYLm9sFxxrGBMMKFEcc1Wf56pyzxA86xfnhRbC"
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
