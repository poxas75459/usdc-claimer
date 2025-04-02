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
    "5UVtFc1JtJZpPaCZuHb4kTGVJetxycWPzEDTaCy9zYbguxgmJmhx5uzP5cf5tDYcGFBJf6jq3v4PXpM2jKTPGzsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57uPLNU1df4KDcAp5XDTE9vqdsj6TF1q1bDLLpDQFx3yDxTUrz562Tx6P329pRgCdXhrRBGBvTvyLB9Qvsr5xbjE",
  "key1": "3MqJYtK7YgAJobkkrNkDaMeMTyG8eexgwdYbt65cPK7h8BVVhPYcytz9PhwxEtjztdgLH74rPFj7sFrczDmsL236",
  "key2": "4UqwexavdyvFX9WxbtcBeUAexYfRERqrJmgPpL62bLYMLcwuYv3Z7VnHPiuX2ow6sxADaUWyNR2fW99HvrGJ7nbg",
  "key3": "2kG6kK7CNdqn7L4JbdipthP7C47wfF4PgE6voR1XJrGF4fjAmk6W4GUDi1Pg2HMwTL6DXnajThVGeX7jyLhwKMho",
  "key4": "dpAEMJEDkF8i5VeEsq8LhnEUawrXpM4HuSZhPAikGdnSdBZGSsN9atTp1hxYa72cpQM7GVBvJWimtGR3m8CM2Gz",
  "key5": "3eeb3SJV2cMy7BxNLUPQyB9j4fs94DiA1VAD5DdSq4ctTbPR5F5oziGQZTnL3SZgAcPhR1U4XeYMBKtk4F6SiBDV",
  "key6": "uYNg5u7sQsvKhLNCrKHdhik2yZmhtmnamEuj9YoSVkM7uTMbTcUvDKPLqav5TWzZ3YMAskVPnbxX6z7LnwExbYh",
  "key7": "3p1pX9AJen8BL6uMMFW2aGDvMBeu8qTVvmfxugmv4XmnUXfSpA9s4mYkBAk3b7Udvpgn7RA8uLgK6s7gW8MaDQqT",
  "key8": "5SqjNPsbtByf32qCYVDnWZnXzmUis5HRqnEk5igtNZaii7DFpj9BwQez7TSkZgQWVZLTha8ZJd5qsrtw1fgKEpkQ",
  "key9": "5s9gMmNaLQdmntuX8nbbhCMLdjzAuFMEKfKqen3X4386R5rjT6x2cHEqnQLkZTGGa8eS5jqNTjPk7Ltcu4vG7N3r",
  "key10": "5KGni8yqHiMRKPmtWGXLYH4AuEer39MsBYMVhLVLvGMayCr3QcLPa7ADbXMpLSs21UJkWQjVcZH9Vy8VXddLSd5c",
  "key11": "4khuLS7FmEJWkrqBVCuraaT9C6VEMUJeMkhE3pTkgtU5Gx7SyinvmV154k6Bxit5Zfx99nSU2PGk1GN8FbzAf659",
  "key12": "4zgnEy61ap87p1xEPZTetp8qmgiP4ivDyjQW4vdq6PUNU8pTMdnkYKCBbRLbFtfLmeT6c9aPSuKQv9LktjwM8kfN",
  "key13": "3FULLeFvAZaLyzcQn3q9FPB9oVSoY3LVW3qaf2suUB1LUdNPfGh7JKAkzhP2f8mRQA574wgdZBfxXyVTWQCDj6oX",
  "key14": "TniJXa1XmwhCwCPGjCSRmFS9ZKTYkC7HvvBomSUaXKXC36JAbL2p1XRcyVchDTpF7RbeTJ6bFnb7ANujaJRt8Mm",
  "key15": "5X6U4rkGKRJjMkeAbwvPaRn6yRH4zVd5qbq7phaU3btZnSYvyDdkVR3KXoXu8Y5AVFa2Mdvk2j6ySFPfDqWDUjfQ",
  "key16": "5ZzLWasi7Bag7rdMi4c7vqFbT1PwwMAjjqFBTLmhPY7HfBxBYovpR6jEZXseQeJaVo231vtC9FJLK9ixcDtfjA4M",
  "key17": "3y11gZyGyCUUMMtYK8t3S83JX4B2Z3we6di9Yrp1vnWf3krFz4CAqZqptmsDH52mHqSRjS4qpKG4QcQrdphDwWUf",
  "key18": "TF3VyEWGJ3CesmGxh6wmbdxEt2KerB9DCP2xWGVXqcftrGzEdfX9beCKc5UwnEgG6pxuiXzBpswcLTRvx3asYuG",
  "key19": "gvix5VDaQuCSQJUHtsJJRY9gnEfyRHrUic9nHnPWHvrRq6dQdzDfnBe3vhW7c9ANgq7KNjKq8gR4wZZifgcwozg",
  "key20": "2aZ41gBBCkfXCd23XAVEyiodtNhNFyjUBHDPNDxik8bdgptwPCRdqttpLEukTHjZbHA4vitNXYPkM6zx3n1dta7C",
  "key21": "2dRYNpdPdrp3qBLL4V8snh47ZG2jzdnUEES112tsAzbj9Pdogxp8vhvBFPXMBvcdccExpsNdbvUK5KTTWzvdSZGf",
  "key22": "d3JhBHtvKBAbn4mE6KzEtZaHs75UHGh6Jte7khrPP1sm1LgACuYG3pcgW5hFT5K9s8ANM4Me5AYms7gTTxXXd7J",
  "key23": "Da5Pes2LN82NBCQYrrgzJDnFd18ArKvjEw7E94Kh6Ta8zEa6HGvEGVZ6HgEnYdL4RYwiMbr72mLoT5thpL84Awm",
  "key24": "BL4xEPzW8LuXDPF1iWUyqM6i5mDH7H9CCX9qWn67sretuwfakX7P4ozMGq6Rkk43aYETGmNBEEhEWU1yKpLBTME",
  "key25": "5Cv2SSJp76aghBjfWpHwnbkMqEDWkLJkor2dbToYf8wsjudNnxDTAs8duc55YDYJ4YYvpfvKRHEShNyG1EN5uZXT",
  "key26": "4AMz6i2gk8ExS2fMJGMrseAxNi4noGxCwB3Lbah26VzRMf8ZoHJva4nKgkoBk3BtH7XuQqcxDBfCQptWtRcPtiya",
  "key27": "SzdrfZPRoatKDsXjHXfJF9sN2BUTMDpbxX3Wwc1zT7SyU9DFcskc1fgiXaa3VFxJiXtaMdT1d5h49r5hypiqWFZ",
  "key28": "48APu1tN29utgzyyeH7DkAK3bMnZipBqrRmHAkD9HYL8a6m4aRmwp5sRBKpU5BU7RZjC3egi6FNc9gtLwPxj3SZ9",
  "key29": "PkAC3U3frMGZcLjx1uZi2yJduJt17d6JMCNMkd7i5TNi3R8zCMAtpCA8EXTwka7fDBc6qKrFivZyjsQ5ykQcqsw",
  "key30": "4ZhVagfK2tZVzhft2NjZjB1ATCvJYJapL32uTpAB1oE25LaP6YGBRqXHf1CPdrdTMEWCKLiCv3MFUMmWrop6MKAF",
  "key31": "2W7FEjsnif1XfkNQLxVYfgFV2QsnA3tV8ApHagdZuS11XGFppCcS6Nm1xD3pTov1wb8pB5c3mPaeeW5qZyMyDN4N",
  "key32": "3p9DxU4jSaFe44VpfaKjG2q6ZopPHbh5J2cemcyUdJqxou59zeLkyUSq9J84ZCb47v9ffakhURvCtPR6xEgfxAew",
  "key33": "3pGvCr5VoY5mM6eXKBJ7VRCKQT6TxzLx9wkHGTGiKSmAdKPb9yNMDTNacwQ7LGLuFbmKmJgu7t6aSGRoi1c86pxM",
  "key34": "5bcmJaJdyx5HMdKMWwPRikmRs48JawW92GZ6d8hF5v5hzvaW91EpGu1cd9sh3aoBDSuCdpSQQssoGKLdfBnHeDuE",
  "key35": "3YhSJ4syRTAPAWTdsmCDZMZJGXVa647JizLX15R7XDGBj2goXyttpbN29msBP8iaMREchJpHikQ2DYkBJCxo1fp6",
  "key36": "4ERPjHZcTjbyJNqduEoWT2YTRU5HWsDbPVSFpTbMNfUNAQCaRGG4RmTgbvgdt8goatGSsgPhYCSj3PPui1SHmqa6",
  "key37": "3SUJZ8Ha4b6otFbHpiWhrJSX3mu22Q3YDjbrtgpDdQfLQbUDsQpXTjPR2UuCuhzwvTZxkWFgguq2CcvnvaiJStBW",
  "key38": "5houBNG2BDUV61Dt2YRJyezGku4hELjQdSJuEXu22Yw3EBp2WtQnXdqAE8dbjPiPzuEjCZpngbviJ4aAbsQGP2jV",
  "key39": "4nTUdy6kwBDfVPRU8Kf3NxkzyuFSNttK3rZvjDgyBzMa5ZuxyRKGQKDJ1VRKgzd8m7DqsyxPext5eXUgSVK88kWD",
  "key40": "3qeqrU9LAMxejx7Gbfbod1NNLx2KpesAva8h7JFcoDXTUURrP8gh4oS2j5Db8tzFaiogQD6sSJhE5ZjvUECFsD6o",
  "key41": "32fEWsBVqJTCX1hmYswSe7E5J87FRP1XeCzWfoDCSVK6iXtkjdPXCPoZjj1wyMJQv3Pd7psbu6ZF4yxuxekeZCcc"
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
