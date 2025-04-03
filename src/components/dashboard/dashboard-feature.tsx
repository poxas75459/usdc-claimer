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
    "2NuL47tYtMTDWT4qMBKmf11dCn3yF3btHDV25HG2W97MXENDXC6tF2gsjWYDAsxzSiV3fTafw66hzpuNQwScknzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wQbJoeeNyEyhh5hHVPf3Z2uc24vuvS5LjpVNevPMYjGTGwGatGhf1bNNKZ2vk6ZtxrPxZyWonKe1TXweHL9ffE9",
  "key1": "3PV4qg7aifJ7qrtLn7W668YzAV6ww89CmZ22VKEXhomqL3DXVrp63Qq2jJRhdzmSA7GXRchZcqCeUizRCw9AkRFC",
  "key2": "2hM9wtWhw12jUJvGv3TEGxe4Pvu7pnDcjphDyaJddTcTNpG5uEaPwfn9qf168Jx26dgCagzdEGbG8LmWFgR4zu7M",
  "key3": "5aLqQh38x5gffmNLY97fyLEhtMVn1NVCNhC6nM9rTjpm2Pr6M7UixaQiPcKd75JW9qtN5Lion7YPkZgP4fGXGCys",
  "key4": "5gBMHSxV6huDn6Zdv9n8yKwQq2sbHArjhcs4fTiDdnA97Ea8ny9HRkVAErwkwdyBW9SrneBopgYWZpxepeb7e6Xo",
  "key5": "2nKAMyzaPsUdmsLd59WDJdAWEFnyGV5qqUpjhfBoRKrYWBfUQh16No2v1aFXswFHBiF6dt6eTdZCt1TmoZwXBkGD",
  "key6": "3KQkzZpXHH2fW8ydF4Wt2zDYdcQN2HaUT3rAnNh1fxQh1P6LPtTBBpUo5kCXtGYwxYAaUAsg7taiQtn1FtqFmeTJ",
  "key7": "2KH3Y5oz1shTprUTYm4DVEDAE2mx2GkD7GvMg5pDK6muMpU2wfbQGDUz6EBU87BHP1ZDyqG1BBBBxbnNDkjjQS5",
  "key8": "2Nn54YcnyLF65LVKTW73pmTytRgw8zDD2mZvUD7LBfkkzBvLKUtLk4G24Hdn9ngxZKd8Ao2cj6G5ss8KFU6s6xvr",
  "key9": "44WmrdK8bT82ND237HGMgyU4Ecf8XvxazK6G8X7mYacWZerjw8DoXwXEHG6MqVjJAwBX8M91TjetEKGekJGaqu1G",
  "key10": "Z71rr6HfKfEcsujCFJi97MaUSMdQpRDjAdXRU5to7Q9HbdmZu4kw2HudUxSHiDq1NEWyRahKu5KMtokRUChdWma",
  "key11": "2wrDhaGsLNq9PK2Vtyz1eDmMupDg88j3bkKaeA8hP5yK3x9E8mvQ979L7WafXbTmQmppqxmbPqaNDX9gW61JVHHx",
  "key12": "58YXpwnRsa5junoYU3wX3tyStXTgwNyUtj8Rn95NxGZPMN5AEE32pa7PsBYX3jpvTgkVFSkezduww23gb2GgYAjG",
  "key13": "2trmyh93emRTPoT7fYZShCLSdTHQAGP745swawe8N13UmVwUEzrGnHUHMwZMpMkjaMcewomKWmjrGePPkHde7TMr",
  "key14": "28hbnkTRY7EiBeNUznwu4EjMLg4db951126ABxJ2R97D7zGPjE9Gp2Ju77P4quGgZjRtMGi1rPfH6rt4iYvNWTNU",
  "key15": "5pL7HqhYfg5gS4Nir6DT9khUumk7L97yWSLEeueYu71rJqKA6ZsSPyfMTHZmEHzvupKpD6txQ4A6hJBrMF5tC3xX",
  "key16": "58ebcbTa4RXv3A5ngW6Z73v7pYTr9zcjk43k92Sg6MzSkQehzUQsYo5Bj6G3VXdrJMov3iMXMe4AGBobezBV4ed2",
  "key17": "2gEntVkM6SyjrA8Zj37upi7D2hHHQT3Jmbwcg3ncB8vfWYBtvVjgYbyM1Qcgan8yxQQAeNDhAZLpf5vGbtmnFBwJ",
  "key18": "5H5JXTEjfGGV83BhfC2dngsEDfak4mPUJsdkJbTYzLCZ159RSgn9RbmKUVSQKu6BcnPjRLg42jYaDqVQA1RFLsye",
  "key19": "5xb1t2Ds5krAr9Z2Eq2wvet5Zf6wT1TxHB8zRbgCWccuWMDM8YsprV6q1prYzLi2t7ZXHc2bFn8iGFCf3NZ3urHC",
  "key20": "5YMXcCQh61tESj5JJfrZhrhwY9NZXeQvjQ5Uv4NEBAgBv7wUtv29VemfeDzu8kpoD1UCFzY9yKzd45fFUSqCcD2r",
  "key21": "BwNRmhEKYxw5sRsw6HwoLEKtAKngYZ6BweypuSGkF6Tu96tq3sovhCGPXAgqe8BSez3hrpDK55vaS1V3rLo5i8g",
  "key22": "35CDdPuQZ4XmdzrZe3jk8Fo1XsTKDae7QGLCj8N1jyTKjPjqEoZLNhz9yVPXtnjSL1mpfvWDEY95LrdmAkiNcKiS",
  "key23": "3mu3Pm8veJS4Ehf6LLM9MfeCJosLVFxF3NE8RbxcCnAwDSqgMG79VsoJv6oqmA3Ec6kUHLahu7k4xrAs6vnRxbmS",
  "key24": "4VGUtMwXRnKa84zaex1y3gvZxdLBimQfi2dLc8kUxoMF8khMtJUeowCGMke3WHdZ4jUQqigMC2MQSQ7x8amatJTb",
  "key25": "46rYqB9KmtEx2EuBbxjAaStN9aA3r5duLZqJ2ZAxGthgXsiQEx9QEuVvpzDmY9JZjw9Tymrnno2YVXE7fQT4W1at",
  "key26": "4Dh6xZtz8XfUgN3Soqwt86hHPgaPimqcegLaWHJuYTYM8CyfhSM9Yv8aDB6m4Ww73Cpj8y4ma1Ng8cq8a1bwRFBf",
  "key27": "4R1sN5ridt2DdJ6MMpVLntXnHiv88f9aHM2gmnevNS3CfAj1dL8LdH8z3EQJUStMz16Dh1EdTadedc1sY4Va7fxA",
  "key28": "28PsMhbxnDq9wawPhrfFt39pt1wFmQgVLXSVdUHzZxrbPSA2xJJppqPBunM3cToD1F35P1jecmPUqU3Ciwpf4mRS",
  "key29": "392YboyZpMbRu9smbLgvnKmMFgUWqraFgL3UjHD6ZPm9GuE6yJj6TBWN3XgzL4F9Jrq57ffC4PToREejU7EfeEGz",
  "key30": "2dZvXmraQy3d2Z9yDE4cFHFpvH6MNqw6SHTxrBWEXvBzbKEiWbBcitLhQJknxcvbbFxckLQrbDYhvNgJAqvkGBNu",
  "key31": "2pFyLqxPDoEeCVsFmV5qtqtfu7RtARXyCcSDhfKYhhiwfwbac5sjD1rpufapRBoVa29t8kVc9CfRqooeKJs3aHBy",
  "key32": "3gW4VFs86dpAV4kiHfELCjhyjiS63o2irDhkWxaojZJj5vLsVgdbdCG6fEizeuScJgjehNpnFYyK54mdojemJ8z6",
  "key33": "29Dgx8XpE89ciASyWwusdbM7vvMaDC8FbGDayDf4QV9ZFo3i75BKe55bgqg5WwXF9HHp2C4AwV76bLQ17KuJcy6r",
  "key34": "4ZxJqyvX4WdtZGdocdq3H9zN3pzyh2XKqaLCtgQUJ2fBaFfzq471vVx9Bn542vWFxG39BQiz37oR4f63dSXYyYGA",
  "key35": "5HaWq8RvLrNr88wjwNojFTvSX34YPg5mboNTdRofjiNbUkcRQBhwXYGnf1nwQXo7kqTGTAPNPd7TKFHKgMcxBt3E",
  "key36": "2DLeZnsmTNNe1x4pxGn9PAYL2MWScyn7Hk5ZaBTx9KFBodq7zuMAtuvEm4f8WhokCZToxNpbw8Me2wmhFodxMLMs",
  "key37": "33Wv7zVhTC4gsiY6x3t2EKe6jbjcBargCB1s9Jj1BQjRKm8WxV9FPEX6kBemUotUV34cCMm88oV4qDUQL98JakxS",
  "key38": "5PNyCA6YYqmEHUw4tbTk42bLS4tTAAjrT2zTiSnURSr8JqhbrxQA2hy3NNzcppmpZLsg9P6LmWC11UiB4LMtcCrm",
  "key39": "5RQhL1f6Fsc46zHFFxrckX3otHNNL82gfecvf7UiRDNJJH2Rcd9V6VmGmPc5GFP1s33FAbouexJ6QCu2QKjBCqFQ",
  "key40": "2KNFHwhE4UrKFbnFx7UHLVe9G8UdnuzbUZ2oAm9AqD81LywmnDj1pxbEERsX5hebFuF3KWRH3NcgVxJkbK7f4xd4",
  "key41": "4gVa2ExZMuVGCLDLAXWujW4Xn12UdfCi25P82SYHrPQmVG77S3jfhH9koTVkidyQow7v3UgFshKCnHUrJyxPWdGk",
  "key42": "jBA2yi7qmwkPDJDZdu4b1j8JpBiTUeZUbitvssNFD4y5wrgs9gy7SS4fCFjMD3cwpFSrtm5dFjhu47yT9BJn43G"
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
