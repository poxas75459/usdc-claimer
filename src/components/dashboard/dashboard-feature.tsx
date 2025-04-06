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
    "5U5QY6uLvxwjDaqY7wSFWjtDRZ2pQF2ff7D8iEJbimeCyAEJAj2hJ58LgnByydKEW9pEvHwASfRdRiCMcTuFouvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ABvQ4hcTTYFcLQU5EX5RNV1qwXH6KXK8Wd3vDY3Kjcic96rdgXnehN7KNMn2KhoV7Z7wHh68Hr8EjfkL47ntMfD",
  "key1": "2ReewgKpKmMWKkHcry93MX9F9zS6RFsje8zjdnP7bn98Ur5b5KDUtoAdMUcrBfUY68kacM3gaYzwWiLbxYxXiHxh",
  "key2": "4Zn8rNfh3Ahru7x4RqDU7rrhtSJtcsgFR4Jo2kCtDML9PB6UhXSTstQR8VYMAnZNNE3EM4F1HtBX2yA3ua2t1YQN",
  "key3": "3Nw1zkJr1LHYDE2fiRhyHTFf274cof2pwbKHaN3iudAAJzwbmvANhiGh8Rnk8zv6jUhnUenso84kvJE2DDHAFGkk",
  "key4": "5kcDBzXxEZAv9fi5t6YSn5na47QMUgaVEHnFoEd6JvFD1MEAsJNLcBDPf1Uds1a9MjcZvFBGPE2Qn5vehxwh2DcC",
  "key5": "2EtmJjzBJHNwe6TbH47SkSf4jetoQbTXY5ALCENMJvFom8Yiw81PKr48SjHMMe4FmbSMtF86NcBg4hkBrJGcpBdP",
  "key6": "3EjivZKdYm4TDBtgr9dpcQZG5Z4WFvReqx53z2cQQUgsLxA1YsFRs5D7vcmQ4gRo2WKucBTg9ByCyuoTmAev1vSc",
  "key7": "2dH6r9FDxxBTFtVZxj7rjvWaT7PRWmTTeXFDY1b2Zo4Bz6vMRLxTyzVcF8esBv8EWEaotJzhwHLXPqip7MRFrBee",
  "key8": "3ithwNha7MTzPK5zDCg8yNJuSB4YhAUVHvZbp6BJTtrNqd8RtDAddCiQYx2dG9KJL47wNMFX8WcQ1axFT2WRvpBR",
  "key9": "33QMKQD3D6r9JkjCHrszgSkpBjrvWUqjXdFapdH2noPkb2DMuUzBujsumSCfWWCSveqKh74acxpN93YpE2jZf6gp",
  "key10": "5FsdAoKY8PFjKDmpBxfhbw34d1NkqMiiRe4ZH3M51iNJWWf4cYZXwWtqHxNtYRLZvye2rLCkc3JFxV38xexECDwe",
  "key11": "2yDJycST4HEZDVTE1VwoZ3ytCht1v2JJCUAYDwdEQSk9Uo7bSQAcrJMzct8JzTKiua3r3AqbzdXae9UGYBwHcqZr",
  "key12": "3vyYDrmnsFP8mbEYgUGCGZwCYTfr5nk4fxSvdtsGBdVu8saw99YJy5FghZ9KjRCuMzeYfm6FG85TkpZKpvV8YsdM",
  "key13": "fxkpa6P7y8w1MoZkYFi7GMZSA8rhMvpYY8aamL32ZgsVrAGAVUguZwx3texYrtYodiheTQUxgyGG9i3Rh7W2XHu",
  "key14": "5aWrR8TgEe3hMF2aPwf5TPWg4rr8HLWFraD4fT2KHSF4BvsvLKj7LViNNqCwgLQCGctZusNyfg8gUMkhfLMeWCoj",
  "key15": "3v44An4hP16XcFoWUnFesHE7zaZ7MShsQHd6BCKi37MnbCGSohdXg1xAe7A78SHXoMi9GJXf1cEBeRPgHFm9SEaZ",
  "key16": "4YPK2xYeSvfiVmrtu1dd643qCrvzsGmDWPmZDaT8749FCBRmoiAgurtjDvQHFJX95wiBbpGkF5yPcTyFFBWmzK6g",
  "key17": "2iDrh5h3mDrMpFcCtCdJDoiiXXfZq6gkPxq35WaunBwbMk65sSUGoXZf5USFX3QmdGuH51KF7MxUAdMFHjkWuC8Q",
  "key18": "31UiE1uUYsN5vwx1Bz2qMHdgjrZ7KsTCv6YsV6XMZzoouwPn2ekSjEp8QN1kd54xNqVGrUi2JA4oVVvmsELxMuWE",
  "key19": "2YSy5Je7DBcBRLT45wX5ub4Acj7EAyrXoCdt8fg4VTgi1yqTaGp4G61Q5bAn6XaG6YgMAh21veuttfpnfYXrXxAL",
  "key20": "dmFvDdpAoFLWfdadMWBTkzB3tPvGs2NkUyc1Qw4MtZ7HF8a9JxMHMBC3oAZUMhE7ftDKDxHcyZ6CubDkJvsHNNf",
  "key21": "3F3q9zgf7s8H9mmHyBA4zzTYpURfS7TygCJJ7DWewrESrzS4MBmswjR5rV2sGjeQcoUvdHZivqW4gaxooaVKeYCd",
  "key22": "5RkDEwY9FFaAg51xiHNw26X8nSfSXpsWSWEoN8DLcd3VpFWPF2PWbJiB3M4KPYhvFxcBQ2wU3HV7W9ByunVXxgmp",
  "key23": "3brCBrkRa19KdTcUonanpdwehC8uLVb9QKKYuNNbv8Ba7GS1zjYeLLLiWgTBBWySGTanoPbJ8GAwuMKomT24zXGo",
  "key24": "2JBGsu1JUKsLtvEHVMyq9bo1MJ47PZfwD7UKpKViw8tuwJAy8GZuAq8Agqz8Xyzo3wRS5QNqgZ7vejvHQ5d5yUVY",
  "key25": "33nAbNkcRXw1HfdTYRdC1vEfCuGH5McejA3KwDiMTVfjdMGY8Rs6ff9kazGQ6VdHvfByECcHNf91KQzZuafkxXdM",
  "key26": "ji3CuiKzNzcevwy8M8Ck8A2QdBkCZGJjjAHZraZvupRqs59FGN5zxJmPj9Uzh8wq6ZPcgzJUPj2nVBbgyuJMT4X",
  "key27": "3EmHXT14Rte6B2vyRTofKHjc1SYgkDEGeZE9Uyh4hEGeUF5qXCyjb5ZQhQJDQ4QCj9ZGKAB1MN6gcrvEUByeAYS3",
  "key28": "2twM5qxeqYqmmoXswLjYYaKvxK1TM9PKQzmyLFFtKkSNgvw1ixeJAG4WAC6UvJSjzFZcZAhQZi6dYHqAowPaUsGp",
  "key29": "3zPsXoFC73ZL8xBgHpFFbipLk4mqXaEafNPEme6mRn5ELrHTgz2Egiacr4apoQd7vkmWFALjHBs6QPPvEBYmUVtU",
  "key30": "64iVPwfxGbLjVqEADVwvMvsJpDctPJqLGD4AJ9Vn42ehegRRMLewFJ9Eb7272PK9RrCMURAe34bV8rGMLFJFApp",
  "key31": "63DTUQ3yvSEGaAsQp56GdmMnNriP4uyJ5KWr3RCcncSdzLBVVSUYdfPaTWRgfkRn85vSo921vjB7mQ151Lk6Z7d3",
  "key32": "2SfFNdoHuCsKXYX8Lkfpmv5Fc7Ho8yGFpQp4w5KJADEkDqCQNFHC7yrd644qSDxz6ctTnh4oYrUazYGoTVteggfo",
  "key33": "5B9QbCu4Wv7EVm1bFWGXCNBbQjujnJP8rmLRkXtipbC5BjYXuPtQxqneSMBWh6qmdtHprqPaZqZEChdmAdYKLKKy",
  "key34": "3Tg5wVMEb3bgBnhouUVQjzKGrUZvj1xYE3jT1PeCyMLBmugdCmbb532MuDHdHKYKy6CDwDeZjLB7hsAszKSYWGa",
  "key35": "62WvcPWFFaNDLXoWucoDTrJETaTQdPxd6QkksXxbwk2fb355SS6wAPtz93wxugaVPmEYvoHYTspXpFLCZi9rMFwj",
  "key36": "FT5bbN6wDD9fJLDbm3XAySJPkNf2gXWYPorSaD9xybMkMU9qFA9ETe1gcXsrKEyqyzeAVMjEuaDNgnHMwhzQVg6",
  "key37": "3ymitJXrkLz6Vmup4G9gHC44P432vHZHdSAEUYVbRSFGgNcbXim8V96KTATn7jJfWXpR2ekUSNxx4fVf8pnpK2jU",
  "key38": "32mePpZUDnoUXtUEH13ZFJEppsiJPWkmYmDwg6Sg8xujPVPH9KXnRaZ3fwSbXAFEhKnWsTtgRNQEhqRDSyDST6Hu",
  "key39": "4vkhm6yjsZf5Bypow2wnEnLpzjJkKQ284B2k32UtaNdUZ9JMAV5EC2mVPgGx5xhDkUv9JH2UpVof82AkJ83k1Uf1",
  "key40": "5F7CmsedxSfp6kzM9FUcwifrf7zapz9RsQtgqEzfkuHm4xXEikUnpDFxAw2VgLZEZyYNpmuwdF3Y56Bnx2wabg6P",
  "key41": "5GUwrQ65rdsqPWR6UFa7A7q3nJPKVQZXCGkvn1JSVs3VtEY2LwpeonbqeZ1UjnKzjdswPCAvraQA8PHAJEy4rJzP",
  "key42": "4qZoX4tvrEQuNbUmt1pjP5DEHFuwHoWua32w3LBUGamJZodtxSBa3yRKFgXLJAbiwdLJzdD3Gxq3zpAeH93gHEZH",
  "key43": "WkEqrmXWgmAo45NKCTv5NmKjr1P623G7vEV3FP23QkDAv6R7wAQys3wEyR6quSfqcETULCkq5K65DfAt8YufJeS",
  "key44": "2MJJFT8BrxYrC8XhjMkp3yj7NYCemAie7HWNk7zQnMkaDRG4eRTnHHKqBfrUWUU7f7TY8js6z96wjJcZsM8Xgtiq",
  "key45": "4GompgnZ5x1M81KqZC4youTCsCwWyCKVFVX6zBz2zV8Qn8QUvZWsDfmeeyWfmVgNKVhFyd5VJ7SzhgAuCGrK5P7T",
  "key46": "3PUC7brTtPYrLeqy8wED7xeZA5DX9r1qLMw9yZ7CFpdsu8pagdtu5kXk3TsBgQDVBfxJiq1uhrxdWCPdSj4u1T4R"
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
