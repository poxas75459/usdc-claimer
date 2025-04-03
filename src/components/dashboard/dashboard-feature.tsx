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
    "5ksJsdFgDqAw5JGNTZyG3zCN138B5gZXsHqpNnCBcjGe4Z3YixRS89ZRNZGZ2ugPxvN6niDQ9chEhbcBVQ1Qr3tL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vKWoUcrBhKgzEgMuvsR2qSN1iWZuN6mBgab1fDAHGnSfnUHHMb3ugCBr6iriTZp4jcqkTgKebuzKwHKANc4ZWGL",
  "key1": "3hzwTtrFboSc3u5Ndd2egdCZ7VsbmZMeKksyFsHyKteUr3wqz5pdfX2nG8KPJa1vPi1P5AVe8JBmTBNLUaNkRCen",
  "key2": "3qf3oSUbt3C9P4EFxQWKftDUoEdDVzcNoULPNxsBiHAZyaNUTuBXgHV6BcDr3fzJoWvAKx7tNswbeXjgtfe484Yj",
  "key3": "3Ku9jFgBGRWrXrczMDu5fCKMCxAbpRZPhKfj547xgTBsiKFnRFAirvLw9RT1azbCpkSFW3Hk6F5B3BxtwZ69P3N9",
  "key4": "kKQH1CtekLunjvosPPMYKBpHK4w5kixmGFu1RPNYT57Ws2wTa9CmGdtr5aLJkxkMTqSdLNkLagWenmXro4uAVoS",
  "key5": "4BKjyB4j3RZ8oJjTT2aaT7Z9Mbe9sFnsCUzqwcks8WHRtMuyTWaNz3Cr1GYLr5wvRPEU6iwQRmkgyuYPe2DTAGD5",
  "key6": "2K5rD3PuCqFyvhwvg2GrTEz4btyd9NtXUED8aEDznJov3zstJZRjG1rLdorzdDRa4MbTrkGKyyP2a4uJz3LByBTH",
  "key7": "3MDQV1gVBov96UfKUxsHvrjBDGQMABScLbthgWoeAi2LmiAtyxzz7ypqTBy7Xm35QiXLN8eufsTdQnjVr1Ro1q9G",
  "key8": "26qoXVeFgxQpC4GmhFYq57oqj4FJb6r7vioKZQT3nD2KiV1z6Jws5QdsPyZbpzkT9j7hyR1NHqLigJwm6EDXt77Y",
  "key9": "4VC45VTwneKwNx5yBuQ5B9MnGTGDouXL2F6Ueiy7DRzEUm14x3DpX2ms7R4ooJZj87AUDeufwQJ9oWr7s4yrvRe9",
  "key10": "movPrZnGeZQLgDJporLhfeA9Y3bFTWEdeZwjukhrYcBN7RSyMypJiNEinQAcf2FDhmsrhHmY6eTzivCJ4yup1kJ",
  "key11": "5DtRcCmJCe1GYiiaRY9XMfyXZWH7D8DX2KUmsixXnunSfgyPGbZcJ6q3ekeR8KqBiybav1SJhFnZ9dDDd49te7QS",
  "key12": "4V67b3jRBkTEbACcRXgtheXqKcdCL379CyptLo5TEdJwrYsa4jVR3G6jiwwdM6jKxJDF7wKx5QbyANX7tXS9gp27",
  "key13": "qe5yZqsomzE9zeXh68kJY46esxNjrybtxGvyg27GfXoVvBptfLcHuMwP1hNY6Khn4A2wJtWR6Wor4e8kcjwwkdA",
  "key14": "5rbkpQ8eF4wvfJWH5SeSv4qMSsCF3PfQXLgQufs89jLXxH51RZNZRPcu6vS5sRdUYfLd6n5osvrmGS2YSmGrKYfQ",
  "key15": "5VQHUBaHwodtuje7X7z8bPkJUvbEJRh5gm6xvNPVL7VVY4SmEJ3F8zsSVsWRULNuSZxAdAi7sziwRVnuZfk5o56J",
  "key16": "4y21zCJrDGy6Q38mw7QzKNfR92dqnHS1uXqWBfDDGDksREfPBoQ73CiazNM3qoPSA2X2Vfargkx6t1TTRM3raepe",
  "key17": "7gj8zXV2fswpP5s1iZBogHfqZAozFzmLmRRas3iqr8BCWQY5Tbri78eHU4SrJrhHheUHy5x6yn9QdhCNVfmfp1x",
  "key18": "5AABghjH9UpNstnVk31qCf9FmW9ceWspNnnAUKkrG79s6acGPGKumVZ2AiAtKTayEVwqzM1MEWeggn8G1X7SZ4au",
  "key19": "5TG38Ed6DvHcKNxiviefN4XBZ4Qc9LfbEFHpw8AbsnNKm49PH7X5MaKTKTLLs7nXyNZvHPLnhB9tRrafpzbh8YLS",
  "key20": "4D1SmwwXHXb8H48hXs8JRyL6teJCSTvoYiMQiPyrrLP17UdW13uWYZipaAtdQ4Th7cF2turFBiwC132zSVJiBhA",
  "key21": "5aqqjXEsoDHvdZX2iGggQftoi8pF1GjaYoVodCzey336R74TJdmU6qfo4ciPyz7qUwvSY6J46ParE3Rtv9z1uSeH",
  "key22": "57gyqYvLsNWPW5E9ktXrqopd5AssV7rjATwZj6syH6n6niWyb6GaCsXvYmE6EKeXu1YoB2DmFLEyQy9itsiMqSQZ",
  "key23": "N9NF3bfKa5JD4Ug483iR48nGckHZEK4CdPM18uM7aoBaVArbyS64jB2VZ5kK9htaTW4VgUAp6jhzeYr6vJa2NkC",
  "key24": "3d3MrtUwxP6PEWaoqHzHhCduUwBHvbqgBfGJR8RBxFZwtb2AUUyGkHeHjqBwKu2bmDm6tseuuLBdcxmkeWscukuK",
  "key25": "3xMSeQJpL74KCkqfEjRwoLggoQLnBKQgFgXQAEFLMxCiHAkKVNTD7aK7vBPHZH7aocDzhThJC65vPpTf6FEP2hud",
  "key26": "4a9ovG46Z5jhXMJo88wNMTyosYsaXYxTnUK9iBDVP4i9yPtKiJcDEQQiohZR6t1TKYXyWUSsn9SZ7RfSmMdQLdSj",
  "key27": "3pswVZwCKmzcUfijGewFxM5wJWbFt7ARfhppV4pfEN7ZY4pNnL8MjSFs7ETrwQ8PoXjs6g5AjfifjkV6Vnb1nbX6",
  "key28": "4ayUiqJCiWNMs79kEQeCbk3emzhCo7BvcY4muVVyyidFhJG2z44vbxAsmMFzMYHua67yHtYz14TB1FZMg9MFrB6p",
  "key29": "22iH82bE1MduCUA245pF9RFLtWCVsfBXc8brhrKx33FFcJYbHUvbG37CkAstvyX4fv737aNb6Uy7tTD8ADuJ16j3",
  "key30": "4pJx7eKwnB2mSNruPcKcYTgHXpFLAWfbFB5C5vkP76ydNoXNvhz6PRh2S7P9EA2BtqPkeiZTSboAahaQuw4FuZxL",
  "key31": "24ms7XJrCVm2hxN6THJUxZddje6Qjy4CNfDwBvvrZzwzDt8gmrR5p5i5WtyvYCJ9nzgikqsqnPw9qhYcQ6CZe6nY",
  "key32": "5pfetWPxJ3MJbV1TqPEBud3Pvsmqxe3mtipMd15U1o18VYbSD3bV3evLhfJJuQsyZCpK45LY5oyQSa1gyzkGaNvo",
  "key33": "2phKSFsRwCosPw2L9X3fy1QyaJmpaoRqVNcHktANQe5a3ENvYzVBs8JaTP6b59GyxUafMAiv9rYzQmy2dMcyULgm",
  "key34": "5d3Y7sgdatnEBg56M3iAunPJjDPk1KrhkDUmc9wamkb41wLsRdsd9swrPaFnzehBREXGRwqKGqDZ9jnzwX8Y4bxc",
  "key35": "2bUgAVPFyGsegEcXNrZjpDstiiUrNX4chg4c5Cy3zLg4z1NkkLZBegtW3he6q1uyRDofr4UT1i6jxVzPYZHiFzWX",
  "key36": "48CndepnrJ6VpPo7XoKJSF6S8ZSNgFT5Xih2P6YuMsG2V5Fv1xjRuPEACkRnv7fYxMPoTjSL97BJ1uGujtPaXvfE",
  "key37": "5xXtGDXCZDsnx7apgpgcYM2mg7XGumxW36WjhRrhqzAeqcUPNPkJ7M5jUe4Nn9DkmszSPaQ3pcmDi5kDmx9vgLJM",
  "key38": "3dSQieyV9BThPBHjoS7qDFDnkCLdRDuuMjVdrCH94XG6RL3AFMu7f7nkNrZEDxZtjRjLj4zXJtZf4RZkoUF3gHq6",
  "key39": "23tscaY5uJT6rc2kmaLppBXqQ41v3JntXh437zRmKwhu12LvxBUNLohQAftpr7v5gMHdi79KaX9NGFyyqjcpCadg",
  "key40": "4dEwEykxebsHh8JAS8kw7muM1AXHvQ8jAix6FrVhTRtNv5rjNRirCsMUA3HULUdWDx7KdMWR1k8HdWpujZNGe8W",
  "key41": "5vff2MpLiqyikWMrMcG4B6w4RD2ppSEfvcDVniKAsj2Qh5UE6A5B1xmxPYCY7ifZFjPhbeLreAk7KCJSmQBpYLuk",
  "key42": "3eMHAraDocC1PYfpyarkaLKyLhUM7K82Tc45Q54WTyjru3rg9c4MarG6yxz5G4W7WNexsUsDdGFD9SsoGSktjQv2"
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
