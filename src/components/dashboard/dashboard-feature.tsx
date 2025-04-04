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
    "5iFLcYuWmEezSCJSEGTKtfebTJ9oRjXakw9LvHeGyXnmUd2dnsqyzFJ1FiUYSmgW2LWGTjTavu6HRiUxuAfNWgxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xt5fpDdq6fpEyYuAgMfzE61ythsqS1e2VVR2zeXZkrqgKaSoMcGs9d4kS9698CxVQhPhVyBEcAQtQrvyKyMSmtu",
  "key1": "2tsgE9CfKkeGGKboqM1SbzmkNdxNEhLvVpoD5r51hfM7hwtkJRvjED77aNoTcwP5zrJz4wWphsQysVDt9gWSdtam",
  "key2": "5Dxc2XfxdChazPmrKorckWoPpyMB2RqmBJc4rvfGiMSjJz5kLPWEyk89BV3WbehZxt4oeCkBdEg9Cwd7wC98xfsj",
  "key3": "26uHLzCEZ9vBqNqrt6idZ6Rneg5Xw5UwwpCRcDcbk5Pm9GQJMvWbxeHgqCHtx3LkcdFcDzo7XviaXtcBhnv4iT7u",
  "key4": "4ZD2jWwKEcPPkuiPcJoXJofgqjHU4WKqKYTMWZ4GECNj5kqn8ufoa4bYqSZQCDBi4LJktksWYMhcTbo2fkZBwnKx",
  "key5": "5WHqvoGLgRixCzxey9a5zgoSBpNQxVZEi3PS3pQ3uB5RawWdPxHGk5HR2nFneyjsRgwo1uCvnn21d1NZhV96FeU2",
  "key6": "4Txj1AFZx8Y7yC3EjfEhtTki5mP2tUaNRrzXDGUsGmvoBw1CJzmnAwNwAq1NzTsooc5VUPEGk4FYokTUteitSF9e",
  "key7": "2Zb3KWfkYN3EXdXSsnTAsFBEfYQpvxnMvGxTGiRkFz3HzNjVyqKHJ64CuYhNAuY8EAopMu5FL9HMt32tAhd73Rx9",
  "key8": "2sY3qL4tFc8owoCokThH6grLatmYH2EY6eJXpuG28vLqMEJCkT2PM91rtT6ACMekNmEmFzUcSyK5G11vSSa9XmRw",
  "key9": "4Xp4v8GiYQ6NvrazZUqX43w8WnjhoTDzpd2y6op2ssjmfn58KgaoNhx5Ep1qMMtgMr4sxgFZZ47jBZ1CE9mmkiU7",
  "key10": "2MHg4boYZjJWoZzhKzUCtULQbaxYSriMiuHSxtiw55xUkWGkX3mTEd2zHj1A2H7wKLYC9DqzzrSjSbtorP3zZhbQ",
  "key11": "4gW8yeZ5wtFPHfSsDRABjgtTCGegRDbmFxSTMxKCZfBhNkdtB3vVoEvBRtaw7BYa4svnJx8i83NoEXSURwTTNrk",
  "key12": "5Wa1bxk9VXApCSDgJbnwwMunh1fVajTF8RY1da7viXp3TsGDFNgsDuSX7cvUHZ7sRfS2ULkbRUECLo7t52dmopkw",
  "key13": "3c8SXtDpCYvofujVT5g2aTUPSpf2LWWVXMZhf658HVGY7YeZG8ipdS3znfLmPYMTXAqPrz2JwKJCMrAENV5Sptfm",
  "key14": "2hGnyK6oubuVGsH9d8Tbm9pPcQzj1DBeR81H6TzWC4VKmsguAaqajqj3s75AWtysiuRoeAfVmgavHVLujtkBMoEw",
  "key15": "2Eqh9G64fgBy9NJ3374W9RT9VXsxJiygV4FN6RtfrsqVi35Hkgco82w6wQiwht2MuC1DnWV2tqnib7i5NkUqk3Nd",
  "key16": "2Bhbq5Fe2wbb1TdHqT3VUMbTwHArfRazF4U8D7uaMTto1NbGyvsPGkcM9TjWTGNLTyKzM9Kt2c282WmRbD2eC2dk",
  "key17": "hNefzNcK9FjXuxTDgKVA5UgPaLMB9KsAQSrtNUvEr4xSRHkd2iYtRTCWc3VmhStsiHoBzYew72CH6cpFwQzUdLy",
  "key18": "4aFmvwvSzocqxAB78gQ9sabjv8w1n9YuRxth8eNhp2rJXWD8LxJ7pUE3bvhskXLwxdRPq9BrJgXry259RmSvEPPT",
  "key19": "TAgQTKoqKhgxk7bkPKv2Lxf7EpgmpffJbB3boFZf1yYhKrqiCAdfpXsEFSyZaYs4X8sR1adXPdjizZR2tpjE8nW",
  "key20": "9rHmGuiuS5cKMbQ7xsDSpK5kwZNbGrDdw2HuwxLpENK1hZGBbTzqMh89J1sWRQzNsERgxrwPGgMh4FK6GypkL4W",
  "key21": "2gypGhFhtLLP43TCJ2hXQw9pVmSTMbNgNGXzhoAq4vwmDpoKjCsyUbwsrn1z6vkk7qsEstGJzMSZmiFLc7jyw6uM",
  "key22": "5yS2bMbBKeEu7nLW3WWxM2LMnbGQz2U19KKwiKTsewTYNKXP4pkRKrUFS7ai4mUgWCp54GnxsUxkg7sDfFjHdxcq",
  "key23": "318MjuZrUmthBFE7jemuaS3Jb5GYnSnDH1xgpfwD33CTuwSkbpNbXS5mtH27jWgEcRuX6brkF7DGvzJwEv8WmVkv",
  "key24": "51RkfJ7HSiT6c888zKTwRBL6aTz2t1PYTtiv34sTvWPQXtzS4853g4sJiKVWXaxGukFYBNVUTVUwG8PhaPJ7Yijd",
  "key25": "2isy1oxhXUJa3eku8H3T5mpP2wMrENt6vin75rica8ePc6dmWF7dprdYgFMAUJxUJuHyoFCp16gAU6rt5PoqAB2i",
  "key26": "2fecBETRn8FwbBDeFRAzsaBU2qc2CdEWZhrp3AnLGb6Gz3UCu2mVU36DZ2eeZYEoh3s147FMQQHwjxHQL3x2i82E",
  "key27": "36hyeNAc9Ei9gc1GyzHkT6Msr4iKxtTxWv8pBVP78izEbqL4H2owMRdhJGuffSF3ccQbvNXXiN54idYiFysYVbSo",
  "key28": "384DMRazQvPseBnQX3Lr1oXvgN5WtQGzdsmSgoAGY9XEecjtQgxXT6uNWuK7jZTNSGY5BU2U7TuTy6x3kEnMoh5s",
  "key29": "3VpCrAjZRbmGYPD5v54UHNKRQ86Mg6teebWZGMbW8Gqo8Yw5jhvn92Ff7hUr6DhdSfatDC7fPUbkD9cJD7cW4nyr",
  "key30": "P2A9xhQWZtPDMWZVTw4kvxr48fgPQhb6xCNWWBMgZiFdu7wXsW2WVuA5LzP1nd6fM5PmvBBRFUWomRRiMwfikrS",
  "key31": "AarrwVhtAWBuYNd95MkiKLb38hfVvodSj4fUouu6KHTAA2MXKcZRqgqytDp2qfPEBLo7FF3SczHE1DsR7b4yLbm",
  "key32": "4P4jXhSHsPc6TRUyfd3zarFJgZ3gqHDFrUWxJjevMVriphMGa4kxFYMsSGEg1kYMckbXnnZwxntabfqnx9c4mUV3",
  "key33": "4tiCxgA3V8icq3gAjiSMDpjh3pD8jGBDHzvx9VT8b2THXHg8PE3mLbEBUNq29Mj7ohmPSroMYYUSvgUC1mJPVg5E",
  "key34": "4ohEH6jgCZnd3gArnfeqyDseWxxfj9nKfmFbrjWY59QLoQuaEoFWB6JLWYuZ5xYeDQZe8JDjoDhY3nVUzcihWrXP",
  "key35": "295e6oAAUSeByRapp3Cb1ppSm9NGJcFKEsi3YCNnktVZG6covRZ7BKDFDen7bn5L1NTC7UEY9evcE1tDAu1i2GGR",
  "key36": "3kFN564J8FasNNTHq1NNaNG8k6XT45Att41cuuPSiQKjp8uxWjJmJGEcGfK9VhQFM9EAbA3q5hmPXqwKefK6zf4t",
  "key37": "3EJXQ4S1mM9KHR6XHRt9gRaA5EMUixaeM5RrNen5xiVmc5suHsgb1EpfZkPTHcsvCAf4RhSshHhiYj223dzBXQvu",
  "key38": "5LodX6Gd4u9iyVq39wfoXxSP3RG6Ynn4hL6XbB2JpCoCZfc5cANznugf1ahJTer823dxZZdsERCKyG3JLRzwP1vE",
  "key39": "5No4KwXNCLy9n9XJxLLi5c4dEiPx7Mp9vGiBq71piFEVAE2o16YcTG6DEBwnZLTvkJegr4vGdSHkNmWKKKso1Uym",
  "key40": "rPSGuzPH7iuKHsbChtqG5Bcq8zpDKfgcSMAgzpHLVF2J6QxTdJ8s91t78tBZt59HtUwf3YUurZJJGeKBgTKFKw3",
  "key41": "2Am8UHGoMfMzftpzRgpCHKueRn6EJwSqKaavRezbqYNLJoTqNwPUHZ32gpgWr1fdsteABXDYprqaSBe5c8PTEvmY",
  "key42": "5SF86bzgngN8EyVK3CrYHsEm7K2Uzqh6Tzsr1KJEU3sYXmFMRhFUgGDLe8eZn9XFLccuHEdTrfyGZTpdxBnqceA4",
  "key43": "rKNT71R1mgmGmUGJRrUh5biT8YVhKHxXu8GRUjMG7cC11wFj3pMNHXF3R77JgxA5E7dA8UtXSajBBEh4qekzr7t",
  "key44": "4zctL7UYcC8s8zVAVaiGq2Z4MyBw3AayzRdJ4Cr5DafP2ouZYdrwXc3JMGLrgPkzY4r9etRn6bGQdphneFsPGHA",
  "key45": "37bgSFCPfapL4tjBqzqHGhrLUUGpkuN2Ndusmbf4Xt8vMV9gcJ1duaMHmJagDoyHAu1tAMb8mueDjZsPVc2kQZ5U"
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
