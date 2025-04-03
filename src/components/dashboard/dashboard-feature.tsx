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
    "UTDjfW8iKruYsHmxj5Wc6Y77419m3AtVTb2VVK9kPSHpZsmi9HPkpjTP5mhNKkUE3aQNgwVKTFG15DZzjXLYPSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hycQtTyyw7BuHJHndJSGS8PRuMDWjJomrBGXp1xme7cpmPtR5PqhVecRNBoWwndha2e2x5VcczxR51SYWCQbr8V",
  "key1": "QMLUS49oLkY4MKR7fF64zcnXsYhwrh7bMuMVjo1LBpHiNwzykRTeHsF8LvECyN9XZitKWGAcp4Yutp9WMJy26d8",
  "key2": "39KxVvvy4h6SHiijkYwUUg1fUfy2oagcRFeUvCQ2mcaqXQRxWSfyWwSNLri3bLRRznanrgdDU1XwUvFyGWgoBeHf",
  "key3": "5rKwUaJFGfURsnjXcwe76NdapmTYKaLpCjkSP2QZQ1a4nHLBRGMYHJNsr5tZKnqU3S7S4Y3syFG6NDSYkhhbyrwE",
  "key4": "dGdbKqJVjUwHy2ebR8nRqnuUgW3XGDnxMQNeS9AWeouNeHr7WQ6pZugjzQLrGh1PCWh6obfn8BfTovZYfEUVG61",
  "key5": "4rH8hRwcwkb1c8JaVr1J4vq9JfqZ9T4KGezyutosaXzoLEUTasZuzNq2AJrdcAQtg3VaVe4Y2oP7d6S4VJ2N7RWq",
  "key6": "kxXmb3ReHNosbTBiCPBLQbBMvA9WGcbbCJHxCTh6w6iX6suD2KXZktzaeQKu6zD2ExqZmQ7ZCESDV5dkoa3f2AC",
  "key7": "5Ts6Vnc525NNB52KM5NvjJPQ4zzXwpbWAbc4tNSn2Pfx2tAfRYCi9UbK9TGtyJVesCcX38guoGVgCYATZgYbeCUV",
  "key8": "5nJE2PkyXi6RQxkUCckwcUZyjmVH18Z6K845rx5nKrDTSSrTb4mF5VyxNvBz47mhjXU4D7XixfPsyipqnZMybeJD",
  "key9": "V3MQrciU9ev3LFkQ9Bgw7SYAxvFES9ieWDvzt5FqzBi1GTswUHDokJqEx2xnoMxZftFmeJiadnKCH9ucuW9Dy6s",
  "key10": "4UenFabjXcsjuAETMofVJrmPHUP3YWbEytTeDPU8wQzamyDd9TwAY7GpvqMcx2rUE6D3en5K7s6T6cFdaTRQkbTq",
  "key11": "hLwxyczhWn8jGRR3qSuCMSBAxrjMBbvjxh4P1G4nm5H4bTfKbPUhL7TZPehXbpcZp27NC6WH28Ysc5Kbau8c2k3",
  "key12": "2cav5wiTZhiGEhVk5e4VNLakhW1M14JF9TG4GDeuHQhYyogSFuGJneZR3x5egPricvJAwzTYcUA1cmMuEfXb449s",
  "key13": "42ZDEgAasfjYCj468EZDX5SJQsu5mkhdypnew6wdxZQgsGBbUwt2WpT89WRX6JXtF2uPfhiatS68hb2NKdyBeYFt",
  "key14": "5osfHh5de1Nh5CmAJ4Vgo4z8x2JxHk6hgmHnCziceZjRkNzqHBucqKFiHXAKDzApPgU5n2RcKjRtSG3CAPxGMB2f",
  "key15": "59DzarrLwjf62hkPwzEdRKrZaVH8PBCWqBqNNXhjtpkHpfGGyiWXLFfVemWugdEZ8mHGT3wpVDuMuGowYJC8At7y",
  "key16": "5DJverTeCgvtzMFBuHPXn5HEEpmMx4uFqfAuwsjtxQLigfWe7bQekg2qS1xFwpato1baV1xBaMZyZFS1LdWpuCYQ",
  "key17": "5692szQbDPr2ini8TY8C4uYh2gcYE2aa6DGya6ucXKoyNLTQenm85JmY3HxSr4HY8pT9gTyjWXxKMF6ERb66v5Hm",
  "key18": "3siBXF8GzFXKwREcJGMKxGd8fCNXz8Za3m8NeLn9BbLTnQ4N3F4w6FT8uSQeBzXXBj1uS4yZRVrfivhWdmNDbBsq",
  "key19": "2RyBrbSq2EiZ1EgLvSNomEpnmftncYUBSh82dwXohBUeGq44W86kgiv9zrwhcR6hPBDcxZiDYMNjKUwhHTxXs64e",
  "key20": "66bcGGAJ4igLrBR2Z1dT1YWGoTPW953aV63rUbyjbWEJ4xtfz8NXwwpKbH53d7ibaLAeHYV9CSPhB3tToBiba64P",
  "key21": "9iZNpMJztt2MVmKzE7VdVV2MrQ1158NWizVfUeinZUEjT8qqtzoifbC5CkD5wcn72yu4W83ecFfAFRc4phPyX4d",
  "key22": "3bwNN8E8fpzQewYvD4Sj55cbhL5PcKoFYZTeMgDXugkX4HqTkzqXwuh5d1gKRZUB6YQzy6BqiZB7bN5pSfCBddkQ",
  "key23": "37pfp6jWtdnwDMSco1FC6qGTxKCd9f2qTbA1gQjYfea8Rs9uPCytecfR1AtxeJ9JHt5VsMrnUSqinP2hwPZqHUUN",
  "key24": "53whQPExoJ5oPk1BCVhfc2pB7ArPiMLnqUc9dorXWHDkmxr8aL1eQFNN61LV9AHGLk86TdHmmdU8QJSf8c1cmkB7",
  "key25": "3NpbL2d57UGPotxS91rPteE7Eojd4PUdAfMe9NHPC49RzTz7WBk7QHo4sbyBNpgxqox6t7ee6MgZgr9J2FvFAfun",
  "key26": "2rFFnqPD5LcS2xCAFhSs81GxiYnuyrF1z8H5wS6Cn7NLRLkyydVZDMJQdPmsk6dyHQu2JFGeRdvun8yf2w91e7Q9",
  "key27": "5t2m9hQxeheW5pZcVLodXaL8Um8JKdugHz4RVcuaJH1F4zgtC81QYQcjvdcLkzzz4jmZVq5f61EJTNSCqkK8jRWZ",
  "key28": "4FaSSQM6bfAg5Fi3FwRB56U2CLUzVTSgEgioR2H5gymVJfFKmbnSVRj8NZHdKhhG5JnNNowxRTVqpCghNrDTxK7S",
  "key29": "2jZWJ3Y8cEmJdkvdeXyYvGYZpG3mRNCLodM8F6eAF3M1Fy3FFyk4tg8Md65zjHZu6m3i1BS9Y8QqAoucKf8Qccu8",
  "key30": "ZKawVZp9eP8DbJyz3rqPCT2wUaBZ7gHLjNE4iT7Svba9oNsqZAqPJaaTxwXyiFGEiqmiDWjYhx4Cv9sqdYWiDxi",
  "key31": "2Rke3DGh1AVHD2KN9bSPddtmPEtfiyFkYtZSCmoH5846ccdQRF1wtYfYM43j6NfDutnRvZCX38ubJp7WVPS2JNbV",
  "key32": "enegcmMAr1ipf1vyfjGZUXo2DFjx14ix8QpDBpjJJZKjPyQeYLKQGqUMjcTK38hM5nwfBPYfxt5QvG5SDMaiUCa",
  "key33": "4tCZTzxDPNk1mKQNearmpf97DP4mYzqGh1yt295bdPaNWEmBYW47pS2wnMELph4bAeLTRNmmnjqkYkYnSTy6TNsL",
  "key34": "asNaGCSyme97F6wf3DBK3TpKLjLHgCU1DkAh6HKQpUUfdZW4bxCo3vRyNgcHjteNGngFC44oPsiAUs4F3hCLjph",
  "key35": "4NMFfAffjyQKfjXZ8ReokEDTXzwN1zRPbLiTgH6pyWCfwwM8bEf5q2QRJZy9UEWt3p4BWbx1MjMDJyeiz7bcn2DZ",
  "key36": "5zWrQK9JmCVfGPn7tdj7Y51WR7NEUwZK8hCtejzTcRyZwn4JjviNi1uThMn78Uud2yDoBJ8jzwypPK5zcugM8MCW",
  "key37": "5TDzkQzn7yEDBwowBQU4bMBkarxBAvQjaDUDyNt2scz3VKBJzQf2bPzBTGLQnvxdnFWzM3tJwHVoBBi4m5vaeypj",
  "key38": "4mCX9nZiSrHEW241qn89Kj1QVR8DffTQCwQmf8VuJEmsYARZ2ELGzYCNzEd9QJ2Sm3ufnZfnAU2paqhTqV1Sokkr",
  "key39": "iYu7Q2FRuAmDBe5oKLD17sGBd185CvKKtnr2YtaPzBQmirSDov59SeX4EzkZatq75JNEdHPjerYZLeP4oa6x5Qy",
  "key40": "3kxhJ7jrh8qfh2q25HfpzfC2mPbWkNGfvoSFfW9Xz5vV6NdZK7J763wvw4D5LiKVJKaDKkFjfHEnv4B8oSGt5i9h",
  "key41": "5o4tSng27feEqym84a8utXpo6864WAyH784F57yJSL37XjMScVyLYvvhfC6tsaGjzXvhGBwTYqfisFCKi8ZkjbTp",
  "key42": "2Lxhe7Uzw6ZtVb9ZV1GAC4mW8qxUEVi4ceHUvF4FymQHrshcG2ARfZ7Usq6GbxaNSJAq3tMewDyj3cNHdGpb2MgQ",
  "key43": "2XfDbGC2QzCxPce2JQsB73vJakfLHs9PAELyR6Bs2qhNN2t2nFbuEwrbnyk1pCmwCvTxaJQPysSK2twB13ZUqcTR",
  "key44": "4xYaeSKWFBJ7VYt7Yce2m9Vrw64cvwmvVWcyMccKzFHaroc2urN7EzjDzdCtXZcNjmBBgZGpYskziFG4Mr2XTyA",
  "key45": "4pfPgaJ9HnBbjEGN7188D2JfGcVx1aYx8CQKZQ8YuLQ5XiKTe5BvMBta85zZDm6RTHX4bZ1C1csYvvJ6rpQ5JvuR",
  "key46": "4Y53ysY6b3Yvf6pgQ7ak99Rh4Rq3RA9TJAVZHG2poyWSrx8whd548pCXdponfrXYZcGbLgRB7UjwVedEeLNwFApB",
  "key47": "4jxRrHse9SPFEF8DGoPAR6SJ83kH4pUCH6L6vX6qAfQ5NLGtwrkx8maKXArcdp7mstY55xAxiUC6XDMLpmLrnDxG",
  "key48": "5eosSajT2GudDiQxR5Vk6b2GuR1LbRg2m4sMXCew227GyuMmRPgYMmtxfgBiPM65RhktqpoceAawAqiZa17pncqS"
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
