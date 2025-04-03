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
    "2zuTL1G4EfNC8KftNULNGcYoqMxtRkeDbGpaffQmR4YRavGQgSChu9w3X4ZDszzK5cGuB3Bqf1Wy5pPZtduvh7Nb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ULBXg26aWSY7UedmThp1s7WWgrTU4WZmnZ3i32wUnRt8vZMidMFnAfXUjvp6ReFH3UbkwSn3pNGyH3qDAG6f6hh",
  "key1": "2aSp33hynbah39irNH6MR1rntKRwsX3nACmAVsi4LyhJV32MBsmj6nryMNuzb9W33KiPRrkP42tmp4CwweAyZqRB",
  "key2": "4iXXHMMxfAf59mTAz3v1vaY8stwMwnjZgNb8fAmiVkHavbMQUbEruZJzUVkukTv5ggHGrKAQhPoMpgKgsceEeKq8",
  "key3": "4xgYe3d8BWSWD1yJKQhVHHWQjeoapv9o2LyT9gBtzBdsc96BL8Jp5ZqRW18g3eLWdqcJEN7wnv6Cf9MBF5FmneZW",
  "key4": "63Vn3YSc9ZkZEWNdm5dmBZ1wWhCGcJq8C44v3ua6KZdF3utxoEgbBELrd2DikDEuHGNbRCVeJhqoRZM8hB9ZGBXG",
  "key5": "CyNafo5XWsbny3f4E8uDSJ6fdD87AQHhJnDdiBQEeLaD34mQ44x4g6n6NqRtxxA3GHZHZmYereL9WoBUon7rDjC",
  "key6": "2WxPwZPc5WxDmbiCCmuFtAU7QMCT985kDWDEkPsJpC5Gq76RhojQdCDLfh3rxkBNXTqskhVdgyrVgx45NsupT8rn",
  "key7": "3vhp5T1SbX2iSBx3F5wdXRv1v9SupNPCWZi9kMr6eJrT9CprMW9SLrd77C3rCcKuQv5oCb3QkANH64yi8JH7WF1v",
  "key8": "4duLaYT9FPt6f1pfu3xft5UVLsrjm3PQMkVQ8h87QowVdvXtGJj51p1w3iVtRYjXRtCnGAaRrMmW8cn7fUXmXstC",
  "key9": "QMXWB7LsVqdmQCZLSgJPmgJgkmkfgPyRzN8tfdBcmtqueP6xTzDAGESXSQt8KaMaVyZFEQ6gC97DeDw6TaFQ2tM",
  "key10": "5AgbbhK9YCRDnryeyKUEaGrvYMRiyRa1sUWqBksmzF2bGvEkhvXFVJasCaf4kv2UemT6azHUXPLfNTa2GxvG7YrJ",
  "key11": "3hpcV1Sv93EciqqUzLnVi9taix7AULYJfaQtikB8pKYheBThHG5RVByFYbLLBYe2KKmYFoic678SC9dv2bUsUBcj",
  "key12": "CWbgTkkGNL7k2Xrgtk3PMbuCAusuc8m3YWvX626JPjm6tVjgpAyqd93ELB1scVJtwhaf4ACbbPEzzcHs2TnAqmb",
  "key13": "23pYdA7k7t2mzj53bqyMb2KyTuh81eEbNseUVdFMHcFxTcqrSVu1bEWbJwH3Axx8hAT7RzWjJ48kM6zeG75UZ97t",
  "key14": "4QdrEPuWqa9dCuykPccZLKh6LoyzuDKpBbiz9PVxZX6jT9iMNHKtvUD5BGD2hWREyTz4HaM93P8be8hxLCEU1EVX",
  "key15": "3nktSmun1UeNMiMoWZY6r1MrcFyZJ25VNe5S1u8KECiGDpunx5HNsyZV9StSR21rKh7AaEFdGZjM47fXdkLh7QAb",
  "key16": "P4RJjur3RXQo7cVueCMWpPAozsEtgBTVT2cV4Uza1swFSmTHK43DNfjwYDbEsciSTaerS3CZ3dTvbWSmwfroP8B",
  "key17": "2LXQQv1WcqcB8kWHhBAJx6BnsTL14J6ri16DppD4wpHVaedH5MnEi3GirX581jTK622mCrMBUEdwgiMsW527LqQ3",
  "key18": "4XUVWBRjYGY3vUGSbtjERVGT2AouCmWqU7ZB1oDeFrVghA9ymzq6M8j6nZaSZ2dawU3oXE3gcfS28ypHprydvzJU",
  "key19": "34gafpjjdvxfUcyGrKRTn6CxZP3qPA6tZ2sU285oVCJy4nan8TJRxaey2pMVV2e4E4cMs2Ro9EZbYECLSHj1pzHC",
  "key20": "3JpEVKC6VKWkBwM6J9ta1usgsHyjfo2BMFHX4zuhaGwV5b5HAvttDWbunv9geNbkbfoNzLjWGUD1BJWxG7xj7BWJ",
  "key21": "5tmbsDZbNJYcdrev9moZ5fvXKgstT9TojZQesYowF7ATpzsN53H3YdNu42cxUnN5xUX4pZisY6vYFhR7poSpBsQG",
  "key22": "2XpbTCdXmhGREi6sUDsVUW2RF3eNd3TWC9fqk3YPoLpzy4zfneLckx5geskiwGfG7P5d95TooqXimic1AAaRe8WC",
  "key23": "34F1bQkSpfkeC3u3jmG6xEWXsX4j3U9wqbUCsidJktgvLy9TLzS5dkJRLczgFYufttKnoVw5WHLvswvDJnNm7pwY",
  "key24": "4qBqyqRR8j3zdGETdR8iWVTTvRofFg2BBAdEs5ECWiU5ywaZuwwyPzva7LJcuzcGesaUvqFD5KShu1tSjGKq8u21",
  "key25": "22QZTYTjkbv7hPP1rgbqo8ggTskVsCiaSUvWTywh1j5BqW8HSVBVbyM393XnokRkST3sTPtZiKaUSK5HMZDqwsfF",
  "key26": "3EyrJ8DjocefiGSgd5joG8DvVVvT5NtW2nFEEqmXNK6o6u7MqKzNd2GgsDcQD3HhrdnH7bHSaDzP8RxVRE2NDdG",
  "key27": "tVJPcCXUawtva4UyeJvGygR6mpRFdcLfJefvdyhra2JkjZVbHonD1HoPAchiAyLn1A6dJGHus9WeAnbLJBgKaKo",
  "key28": "457Z7RvPYrayRJJ7CH3bgaDiZE69mPAB2FdzDPtxQc4CfC7QbqiW9SZbZmoSaM715T12QrjyG8kxf5tYz6iKvDZh",
  "key29": "4WbzmHmy7Ef8zqEBZZp1aWQm4obr83Q31ETnJrg1XaRsYntb6MLSdeSaqYRYMJVvNT3S4A9E3Y2G2CrL5FpjKtKh",
  "key30": "492xSF3tAUxM8ZmLoyTvUrK9p1nqNPJXf5z9WrLsBaxUCKQC8ZeqE1SiSUmMnudghdPaBukPr8ZqGy1K2ayfiEAt",
  "key31": "jzkaSTh4WbWhSBnfXjQZz1mr6EGTqQ3AsTdbWkpXjTKW42cAptq6bw1daPzf7Weq2T6G8FJ6Au1DtYRZigAJcX1",
  "key32": "6epjFEn8qzqryhHEoztWaJYadyLfgzw1ogrBKEhVTLbZGjrEdR4NXdSYLATc6pkUCBVyNNvVSw4cJiiDk2718Yy",
  "key33": "4G4nD4gPv6thim56ub3VnKbGoKHG3BFtyXPVSzo5uKNHyEQBS4gTRPmcz4cW8NBbxokM3LdnDPspXCWGkDoZqauA",
  "key34": "5K5ShUzKsSeLZwT4rhz3JEzYqkACtRJpHRdoyKwv9CcdVgr8B69enGSMBBbufTm9yw3PEGqz1iGiDCwYf2rDAafw",
  "key35": "439Au569zbYV8PkKR4bQxsqX6HCt5xNb1TrdEQ78x7YeBgQetrbhWAq5BzBEo1hNyKRz9VNdmRYKbeW6bpivPHhz",
  "key36": "3gPYqQ4ZKe3Ltrtk7tRm48JR95MLdQBBNvzuuho9axkHKKLCMvSiFYVVo4bRAKzoYcSKnY565CgSQJqtQVnnCbMc",
  "key37": "2DkbjxTMQAJbwrcVR5wrAouTHJdK9T6hVYQn48txh3KFC5aRxwuhSDp222V7bcwEasEbz3ShQ6WERohsW3SF8UPF",
  "key38": "4tzjhqgxveGjgrai74EQTbdDET1nijNAoC81WwGhyMQeHYwH7CokGXMxsQ4aGbFekumjGCr91Kh8aDDpDtK5XyqM",
  "key39": "5sZwrBQVo1kra2S6mr7vtneYE8SYDYck1fk2cpJd3ETXWZQb6YYbwvaPRokvsENEWBKwUnVKzvzrWGMZm7k7bv1M",
  "key40": "c2byoTYJUiKrQR8hfgzMBXDRB62o4Hp5jXeG75jCQpiHN5CX2JU8rhJqfKgrKxjGNxy4jE3Gz1Kp64Hbo83tuGN"
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
