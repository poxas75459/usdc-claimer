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
    "4mTQPcs7b77TRBCtcjWSPVvGqVxbL48r4BYxfJbkxAKoUhHACC4QoVSx8qFVQArsfyKM6dzK356ghPnzJKJuS8To"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26M7C8kkwhR7mkdSGMhxwLxP4vLxjzeRmdvkBpjFRW9AaMPJpqcVjYeVBF1236nDZxs9V2waQMTAJfDZ5p3whWRH",
  "key1": "3dovu9CRLbg1jzLinYUmkokPV8piitPgMdHru1cW6BQeVF1QXjJA9YKsMX3co2MgMMGVTeEuawCL8u8EGqpz326R",
  "key2": "2DcQq1CL6ixGU1Y9y3M1SVUPwxqNcTGrm7KgzjVFsTRGtpN2wEfYJgef6WvYUF22Bo5YRGu6FChTjwkhn7RjJ44Q",
  "key3": "49M2gjyp7L66FvfdCEUgGvmVrr6gaCgRxyPfW4JK9xMWYcZgMDCEQwLGjdB5MCsD6aBiAq9Rvsoj5zrGydXnoUQ3",
  "key4": "2zLb1JcrghnEDDatqns9ZnLLee9ug4UdGJjdAkvD7vXdfAawXFJKgx9PvnKHXXacXJyDyxZdXJdKUREL4Z8BZiGb",
  "key5": "4DuduEs89JKYswNibXTc9FSe9P5oRytkSa89TgdTH3Ejoy9wvFQB6ER8d4DcbVRiqYtsYCH17ZHKoXnBAq4eSqY4",
  "key6": "5CX4R6eK7Q2qdenkB8mwRLHSgyoPaYPzkE57muSXKbbR7qKsCDiNZBpJcoqnXCs2nCCacnHQ42pSQeWRnKr2qM1p",
  "key7": "2VExPjTw4b2H6y9ZeJKnBiaErSj1USxwhnz8A3BTenfZ5GETDDgBVyK4YcMMSBt662wvQeeJNnZaoenxmewyKn9Z",
  "key8": "5h35DH72fgpQrFGqc5ekpscWcYiev7mNpnoRhbkZTitrdZ8Mj8keGZMiGCuASagjQW54DXh3PmrWPFreDXWYyjQ5",
  "key9": "62DTtv4Qd5pVR2xxHxr8QoJ2mG8coQn6ZQgDdLGJ4tTtRADi4gJPPmrpdiRvzVUMYZFF9mgupzVjB9zh4E9yKrJV",
  "key10": "523NSDkvfzQhVmCrYtWrVSSbjPw9djsabQKipBcZ6JaacQrSNEjin8tfTLBxLXwF7512pjLaBrnLg4i7zbfA5Hjr",
  "key11": "5zsW6ssZ33eyjTHkGdJoFPN4ZSKKwnE293HiDtUtxZ3e9TNi1yHgB6XsATEcifNzX6zsmTd6V3VKAyzGpEdR7CyD",
  "key12": "2qMcmPHxCQFcU488sLbF2EPYByKWPJuGHXjKnWwdqtomrZsnXKmkv6PB5Zc9BoF72AwSfaa4Anvhxv8DoauzFr5G",
  "key13": "5RLfKx55TJKQz9YNQjwJYFMTwA63aSKYLFcweVfui4Q8rWqXXG97ux9TCTRguPt9HYmnX79yHycCiFGwcpyKe1qk",
  "key14": "5v4vW4HHarUfxCwiAqS79RMNU9vfKdNSsr1NFsd3EnjhLwtTvyjLcYVscRW6SbpVLYEroHiEGicpuhMXBVegpLoA",
  "key15": "5jFmB3fxPSAqvdBm5eDX1M5Z7jSHkB2RATkqKj9NMeh7qFkgq2qjGoszHvhmPhhNtrYsNTfZpWL1to47JzbVh5DC",
  "key16": "4k1BvBGqgHtPrshSv3XW6QhvVf5GgoMwMR3eYRkhHkMKEKUsrz16bm5zSoJhpe7FqinxTjt43Azbopj56cEP8UcR",
  "key17": "3M3ZoMEmgPSCEAcv2tdrDGCxmAXQu1ikD646tvmoMfegHNrA4CnndAh89H4c51eddFauyofHe3uNFtURcN2nHZ2U",
  "key18": "3gV2guqnPzLe8WsoWAen2xxHDim69NNFHEtc5mKJZM4Yzf6Fnuttnf74WvqbPLyeUoJLLzG3Qt7fFdn8m4b2Lf7x",
  "key19": "57T56LcojoHYyTPv6um19L4ksAnhC7bfiPzcZ17AYsWx3nEWvrNzvx13TgTsaWsRroU3tTmBSNetc1vXuKL5Afw6",
  "key20": "3BUy3RfJ5EtBbeemzWJRjkGHHR2VMVeQoxGthK5Zu9G3yjFZy2i2LSbRmHa8obnvvPfjrzdhtCGybrqPsz9qtQvi",
  "key21": "4S2XVTS7c9x8245m8H8V6GyEF86Z69HoP2CfmsZnPaTmL9rxWnpXAjfVe63mrFZp7d6oPRhyQZASPu7VRNCk6j1H",
  "key22": "2D9yifEFg9V8PaoU9EnMANAq36nRGeifBX7vK81EHCjSqYYqnGgjym5QNbeYVHDUdVvQaMyf7RXT7z1MLtpvoL9T",
  "key23": "2WMUmRNqeLTTDyQtJcnTn7HQ1RYTdbvTVXRYBx7UcQPGa7EVb9bQMstkXHPzxipznzdJGuQzgLQSQSmrvGmpncft",
  "key24": "KLymZdarcdrmHZKSrr1mxBLd5PdwpFqjEVU6dF7ZQn48S3e4j5ADJDLda8qRgfCMTQhpUSnkvgMYAJBNrJ2Som2",
  "key25": "5wM66Mnrf9usodHCk3oWDh6Nbbgjj1hR5bhpZngsk3g7VTeVJ9PujLj4AiXrGCNnFxnodTvtS4N7Zskcq5gFJ8Ju",
  "key26": "5342n6XU5VcSqaeC5EaQFJPQbQBSdySt32d68nXKANxKoPapN4MCpwrfzWko9P2WonCfjc9KUSEYVUD461Zskx2t",
  "key27": "46VKp9C1gvgSi2YnC3Beo792VbfgFhqLYsxnq4mnugZaJ3zyPcigAvbFVMJtxd1E8Y23xVFkizUQCHwB39HeDUVL",
  "key28": "4YqoMEBZsr4LA28Q6K4nQ4KNiiie7dzp2NCX8Z5LKY2JdiKgEsmDD7tnjH6SJd3Zc2jiA2mPuje5cHiRhHDZdwDA",
  "key29": "MQtkrzKdis8Rvy1R6FSAEv6VPdMcMRaRpcTt1SqQzNWuU7RDmkPtU8GkihRiobQEfRtNR43HyxpgPzmXkTk9NVx",
  "key30": "5Z2zeRg1nrkLM68JojUeg8jG73ZhZJDEE612hYwTrQMsPnMhTCytNoYe8LPTrgHjGaweMHrShyTkj3QD4GSk8SM9",
  "key31": "2KDWzFFkYa4zh6RBhzE9CehLdcpAV2j84aiKqaTx3DHhz9upaTKFwwMkprCerjspddFAFVyZ3WT72QQwQMGtcRfg",
  "key32": "44f6fcjEJfzHp7HsVzzqaWuA92zT48TPkQxLCkuVhKLw42xm7ZfBQLytgd6BjVminG6UA9n8gzL2LoWuAXVm9uwd",
  "key33": "2Ttg6Cnmf4JjR6TXMNvmf4hmqBzHhMhf6uGdp6PAkr9cm1PwMaNjJMZUqesVwNLWFUDh9BjEZe8xH13fETNHFNrD",
  "key34": "3QYfDZHoQyuEsPys3sKuwqFcm2ANXYKuAFG42tVLmXXv7p75TQMcS5L7kL6cj7pnxmpcDp5e4nV8R7gfuCHZhcAf",
  "key35": "PfPy22trnLWMy2LqHw7VF4UVvz5XWwxnvRkrsZL3gZc7sZtXCKo5utNL2CTjjU1nfk1PkreQMuECSmcpUeg9CZg",
  "key36": "56MsiK3j3Ui4PLg5XpuoooaEEs4MM4pPwiP3y3t6P9vQGkb5jFPUoEa7UHuMk2YdNwxMsCCYEDfQnXmmtMWeTnqf",
  "key37": "2vdYZZ32LeyKWoXJFfuHU14tGDBCiDEgx4KeYBqrGfRCaQR3Vfzi78jqY42k6GX8cNCoShiPpsWq4ey8tBV7731u",
  "key38": "4DXucA9F52H71Q94q5AW3mUQ6eyXvB3Z2Sr1AJiuvJUaPppKRemMRUbxrSsmpk9M92UFcL2QNEhntcxFufPpy53N",
  "key39": "5jCBs7WMkccNNVVgjcn1wjKpro13mRfu9vjbVxydWniVAFoSWjcrP2mmeeKfSJuyDVKAQ6wnEyyrv4Nrg8nVtnFN",
  "key40": "52M5zTrgLqDTwHEfT8QEoFoV1ZbRS2MYcTxcuBQDviw7jgJXBpPBtriztbaaNGYqpuo1SBXAFwuBU9qRjU4nJujZ",
  "key41": "2z298wXSSgnDTTa7yATpr3w4QtGrSWg3aTpRKpNYzDRQGvdLFwh35zC5nQ7PCqhdMetw2jpQigxHq7NYgjKsCv8t",
  "key42": "5tBhL6495Te4gaUe2kyPF9fRLK2GV2GspkPnRF7nTH7wjjNRUq3eePE4EkFmNbKPH2LmPAkLgEpATcL1KNUKquQ3",
  "key43": "2YQZeyWkhCJyMhsZoez5DQhi9cAxRYxPzHeaXYQJG43qmRbpWcw4vALtpsamcDuRrZgfipqxo319wJXoN4a38qBX",
  "key44": "2zg8biivAtmhCNBt2UpKBxF3hunuUusvaMt9xHdY3akz7b7wurE4rPvQB7kQDaKXQE2j8zgQFmjy7fWbMfSDWeR1",
  "key45": "23QpY762gVVuF8ALarPF1gpoLWfW5txsonbE7i9jL5KG3vm55vy2pZeUncjUfeh9NCywVvzzexYKYv9DmcgdnrRR",
  "key46": "yh1rmu1CdUzmyJwYnjMJcsGF9Mf1CEdCTLmu3Etv7NkLk994iyA4RuTj9fLabwoMVW6hHQv4Bk3fGkpxDkqMqRM",
  "key47": "5zoa5JemmFQE8NvEyo8xtWLDrjEVdLswKEx4nvUNXPSHj9HTamgrxfYZAWfjQQC2GYAHCa2ZRtUb82Wwfz18qW5",
  "key48": "4xDMFNYnW9sU14yjud3PKYQkoavb53dXYsQwTkdwuvsXpPwFZwWjuDoKY3q2EhJZ2tdiBKjX268XfAas294h1cbV"
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
