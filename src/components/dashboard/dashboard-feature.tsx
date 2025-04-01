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
    "4gxwTyy8ttT6ASrvMaWL5cuoF1nZRPNtXMpyhSP5vjfZcDFgppDU5DwAbXc1G63v3DMefcQ6u25q5oJDMBwsucfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35VE6KYXeWkqnDuX1orZcHvurkgyAPv1N2wiV3eAuKrkVshUL5VqPy3cUFSt5e4Xdhx5bHomp7MNc3wnRWGND4tK",
  "key1": "25ztQGr8ywT7fvJnL5h7rV9TfPWUqeSHMtAb8YZEWXHVeWNxqFRys4nqp8GPb3ryPcNiEca5vjDob5FXJUpAbjJm",
  "key2": "4MY9gxfTL8co6824roPAjHkyXkKUHqxVB53FCP2Gornwae3dfgb5tSQQtCcwzBqj8HtmopV7GGrnsqkcavYcgH6b",
  "key3": "2o9j8UpRCiyLPPESNMqx4rBCtFiCDSfXFfs4DbPZGAUEgcV262M6VGYEX8En2LnkWKHWR25LU8EgDVa9L8b8Tyug",
  "key4": "2QDp26u69kKtajvDMDdchwiHHaZ18Vi1zTBcWMW34dUCpizGh1CZe4Z5hkrt9MRbtAKcdqs2VkP8ZBBDqajexcm6",
  "key5": "41v3nx1eYQN9y7GbAdogqKLwKD6czqjYQZH4ob3AMPxoCWTsDwa9ZjhmufqbeoTyVur9npKYc5ttehBfSiSEKLcN",
  "key6": "5Q4m89MzxLcqF1cTJBwr2K9BRkzUQihGEbTjFXoH8Vo7WzFaFoEuWQCYF2hmE3YsdVpgvZh5uZvu7kxC5iuY15av",
  "key7": "2YKK3X9ha64vxEBhaM8AFueyq2gWTpg9sQn7actxmjkXemxH84nG3TkFKUnNoGeeNNaoc18DLg14C2HUhdPhyxsC",
  "key8": "5MssjK9kfv1H1aqwfvitDtuineuF4cPBjhLM59T2KfC8qnt6srkddACr2X3roVM7sQnGjg6iqMQCqhLkEgUWNivk",
  "key9": "5XZUX9udrmzcGWgpir1N4aZHwpqYQ9HoU32YZFjeKnALftgR3VVF16uhLCddoGJBpn1btBQcRsEH4WJjXWcdVnkT",
  "key10": "QCyzMq2DvKSYxSMkfbRcDsjvjwBSK2iwgzgodsMinBm7fYzZyVKG9qc6G13QkgzQGYwpz9gM71DL9xX67w2xdoP",
  "key11": "3w995n6bQPnmgsNf2tgQbAxyAc16pxKYiuqEBhcpR17dDS13eLziWonMhgWByJf4eenUCkkXw7SkP8D719mZJ3pj",
  "key12": "3gMAQYFS2x9A1FM61dgH9R2os5t7cTzUyDq7hf7GX57Tv9ER9NYZFYYwBoFiK7d7VBKMr89DFGsjB3P7vrS4Xq2r",
  "key13": "5zvkWHiQEnTdFhc2azyMitStCHvcYRM6wE9PvewdpsGRyqogYei2MT2TFzWsuG2me4ui1HVr41bJ5HjkB6tstqwD",
  "key14": "4ENGR9bqurPtEEzuEk5AC1M9YLwEMmNxKh3Dimds23Wu33MFZifGRUcNxLjxh2aqFBEbeg2X2KaR6yJifjZ6gBdY",
  "key15": "erKcFyqJBNuK46HCyMVAxZ9FxX31w5gsX8afNckbMuzuJLX2H6UTWCheKYRACE6nqhXqzCFYDmUD86FZoZXxc7P",
  "key16": "392CDpzbukDMdfQvibCEkMdHRnKdZN1DNEJAD9qDTKPdfUy2TEXgbf56qyjakmwk5ymGF3seKMw5DCVn3WVa3Njn",
  "key17": "5bxhLcsFeTexjUDpuwtDXQxkWLQ3yZRBxrLZd5i3DmFBLDJtjsYy2xxVDctVwCqMx3uguTRtwSrv7AVXjQSvQXa6",
  "key18": "RVWVEAUwJ8MLtNxDYsouzVo2fwGHvdp9zQtrrYtm4iHU3RPeVcPWR3zHPzYKXKaAxTh5mTtrHzVuchUo3BuzvXf",
  "key19": "F2kXGshTpjR68tQgRUZBe6DYH2F2qRZ6UFrQJyMooX2Fu7izXpVz337Qz5jUPScQ2PY4QUDohNVQFuwj1nhz7Nk",
  "key20": "5YamfZGkocdzG9wcQiChD5GCrGJ4qozJpmsWtpRRL4TtKAGyk5HbBNXzYfeXzVGHaHiXerGV1QTjFbLYkwH4zLGb",
  "key21": "wMjdukNyKEyRUeYo2m76c2ouamEU5PxnKs2ym88mMRRnn7vkURhTLNvaYeBhSPRqHSE5J7KXcSC3d843TJXKsge",
  "key22": "3Z4EZsusgxxW39Qe4VctBXTiFvKH9jVNMD9AKzhZpENdh1XQHkKXXkTa4Dd7yNTfamVgg3xTF6kLdVnAvXCY86tc",
  "key23": "478Q2Vzjfn5FqZiGLaN771Ng2K4q11eA4bGLk3CDzmy2LyBoyEry1xqHwPKN8FCz6twj9Ew4x91pyVjBfotGjHvE",
  "key24": "36iTh1vJm9utCLkiG63NC2rNR8LNmtap3pBXsHpbfYRpnn3VanTdzyeZi8JUoytoT34k6uwdNqtbH1Kiejt7wANu",
  "key25": "3bsmKAgBMSYg3ZoB9qULQiNzLdE8LvcqHMrB1CQrpnsQWaDFMrKfBtywKgaMe4BLqFZpLARDq3UGpCX4s1x5WSV3",
  "key26": "Kz9tJzbj16GMhgHMmnQxfA1DMT34oEemb7QtAZjA2EDmj6tCZjKWApp1zAj9Rot4M8H23pxvgzCnr61n8DU63Md",
  "key27": "2yZeExmvwqeY9MYhqwzCWqYegoXc6XeA6wkgqmdvgcakDuF9Rh3JuQjWNUELjPTKwhYHCgjUMsPqLuXetw7tHYat",
  "key28": "5gaRMsC8jpJAa3763QgTeRwp3FbV1irg3vjh1hTkYaEjoQhkkv1N1i8CXyPcW6U8fNLsYd5PiTYEqjSdGD1vi5N6",
  "key29": "5MZ6cnGV8MK4htadsAnB2G6mH2z2S8iRpEU97duGzJXaJj4H9yq8qHMrYH18rGNWqEQjF12AYiusQiWZtxsJ3eNc",
  "key30": "3wMiCU1LExVycLEJDBaQExfy3t85bPucR5dxzkPBVYfLiFrD6uqo4xc4sAeYH6jpNpcKWw3HeLb21Jh177Xy4LSP",
  "key31": "WBhW7ZhMFmxRsDKHpaxNfmnNFdVZfwMsqNtGAmvx6gr3tML9Nvv11LLfvTUTyAw3fF7oQPM9Qfwk1WGDheaCUCW",
  "key32": "3GFXodfGbkLLFGWR86Y4WW8jSM5i9E5wnHPC8iRFNHmt2v3Epyh2G25jmS8Dh8e85JZ7csZxupxrPNT7zxncGWUP",
  "key33": "3RTYu2vGAyeYK1xZdqUzhHeRc3qXCB6QRssGeVWhJgd32LEWnSyXxUfwXnyu9D1dF17EfJLDDafBpe9UacNZ7TWt",
  "key34": "5pMdQNScYmNpPKC2mgqXVsC7WqXUePvD3y8wS41if1kgsLP9isHRqwLMDXzszYitsk9Wdaqew24SAJbD4AgENEN3",
  "key35": "29fMH8XABDtby6k6vdub8wTLvV5CQH5HcjFpb19qU5pMvGE4FNLeDRQGdj3hSz9RMvXGYeokenjkmBY2jGvWbQW6",
  "key36": "5FCF9CNjZLf9mDZz8bRLKkhnmscpiusgL6Qa68i2uC4fkwKna5wpTJoJLfiXLUMKHzaHio4SFFAyp92XAF69L8DH",
  "key37": "4A4noiTE2Mbrm3c5qNC9ygMNCSse8a4BXdSovpQrRDtncywRzCovDDJEZ2ntVdyBYZMtvctGXVHFXUqkSe7c7pvU",
  "key38": "3zicjV3hwuXMmChbkGZKozZgKa7KBSJtcqiynVroNqvE45c8FWrv1G1d5FEmDDKdnJzqHikqFE6cuA9gPAphks2N",
  "key39": "383NaZDD6APNBDVHbXjoyxSn8sok6KZr3diQwuU4TuScYyjoBfstcrwa9aVTUSeF45ss5wwEuV9WVrKBKU2doSNP",
  "key40": "4azdH8FHwD91SRoWTzxG6Fn9NG11e1UKqDqrXEQHEotitj1ikmDTAnUT1sNPmrw7FTFX5Qr44LLboMFQSsWPqCK9",
  "key41": "3gKk7h37UxZ3PABdi4NUzSmsbNx2obNz3JfG3BPXdKGN9UfxDJLWrzFn1Smcph6gVRNRMCtXKakdQik6XGo9RN8j",
  "key42": "4pgmHtqALoGXZ997X8R8oLbMZxWqFE8ySUY4Ww575AjfaY98sSVPumTJZ6yt5q4x4hm4uW3UYmKqaVZDzfqCS1vV",
  "key43": "3BRHQ1takguwbSsQZ4n8irp5eao1Q3t92zYQ8KZfucySqhqARgJwzBydoAEbqsnS73h4fjpN9HLBjgCkUMr5t3Jj",
  "key44": "4NLaJPFk9P1hrjxF8aYZUK54Qv32NMxn9G2fMQNDEQPimxU6eP9WXDKus9YKyatGdoNR3VpxvAbtWiWkExBvftVH",
  "key45": "2DFCZjHjmFSei38dKcixz4d1Vd6EgNNe4HEj4rA4QkVimcid3oybkDE1P8sP1mPdiECXwbFzQpzAXbQPgsomHeSK",
  "key46": "mLePHDQijnTg45fCiCdWZrZu7tPgTmW8agRTT7tyZNSeKNZEUNuZ8hW8iYnozmiZ5RVzBiq96NPHq6DAQTSUsV3"
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
