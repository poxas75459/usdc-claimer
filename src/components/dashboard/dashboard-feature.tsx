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
    "5JMeKnMUmmbTgnrvQiKxUi8V5S2pcxeve5nv7oxe9pgPkFgybVFGJ1qVKfmwR8gco6vtGLvxDBXSTBJdqsQQ4Hfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LJN9XgWLvuPFGBz7eF18csSXxTwxwocCFEVPdanULdLQ1xDGWgBgoP2grAbcwsr3cuE2N6MLx6dhp9TD6s3u8M7",
  "key1": "2WUdDT7aAw9Xn4XcRNgtRT4EbhAVxaNECYADzPZqD5Zed6tF6VTCWfspmzbH1uGV18QAM6pxsSPuntqhVCjjzSHm",
  "key2": "4exAy9rrieNFroGVSBZ8ARwPNnwuijsauYNokrBoduxUdtjuuEF2zFQJGL984VcbFtvTo9gthBgrTAdd1rCDEpru",
  "key3": "5wuRuhRuG9ZS2R8LDuv1Ar6nFsvcjyiwPuarphbesr8gwQQXVPJqRiFiG3Xne8eK7Eu4cAG6qctsoHm3MMafjsGc",
  "key4": "383BcrFfD9AviPVJAqG8GbzDKe2jheQ4RoQaXpwprzYSSn5i7aqTWfKHummWx2f9DnT1g1DzEfNrRsCS372qcotr",
  "key5": "5KiPSmBeHJbyGg6Sunu2E2hfAMgH6VmHs5fJWy4pPPUTAbkvbhtajtmTrp8jCP9p9592xmF1ad8qhGLpB1BXoAeL",
  "key6": "2wFgKNvN5bZHLktmFYxPbceXQPev6rDg1neNmbSXWMfhRiPQ9D3pQoDw8oPPxi5BxsVyjemaPQpNqTnJ2AWDuaNt",
  "key7": "554Qb2GeFXfuAZAdzTURvmERpe6Uh9ekqX1GhS6XsgggmvLcyDsYpcASrSwHsyzayFYWHB1tLoT1KCjc46ZtEst2",
  "key8": "3GrWDPZaXx3RhY3Y4vANM2S79HG1Vnou6oFNPt1SyauQTrV8xQNAed7y5QhYKSoFJzjR5zt8C8NY5DEYDKHVTDC6",
  "key9": "4mRPUfKBMfmwYjFeJGrGzME2megcnJ5tSnkmu5eonpgRZHAbnQDLzwVU2iA9Lo2E1Bu9TR3gDHUEpiECHkbQ69Z8",
  "key10": "5ZmvW4VV8fBtRHvcDU6817Tgxa2FHB9ZohhR36LgR1CJ8oKvMawSsETph5Xnc7kHXztHAsZ14TTn9YH5JX6dZJE3",
  "key11": "59GJxSmDqicvwbB7m7Fyj3DdXWgKhHpbzigcXHFbAG83jZKUnjE3kucTUWVADqGsSbttCcVBjmpg68hs78MZzPp8",
  "key12": "4vdMf763fQmhmFZ9EeJBsvHNBZpmzSaNfvmZQRwUXJ4nGvpgnFVdTwrS5r733UBY9xSmUn3UTkFoL3KqD68caFXZ",
  "key13": "S7mFaQzKd8thw4GzcTbDhnj9Fc1eqHpfqRxMobGGy2Tnx2hwDhVvj2oMHo6VdPBAQDDKeJFuAAzzcpJKbCgZaQc",
  "key14": "4M7iJUrWG6k2xbG5X9pqXCQwBTxsQTSWWSaJnVf9m37KFcVhkcqFSyeGg1gpvSS5KFV1rXzxhfEsCpN6hDw2zLvv",
  "key15": "2gAFAHxLC5fbcecQWhCp7rYyiHHemhFqJSx7eiwuZTPGyUnmvbKXo7zKzGufmGb7A9DMCwf48omAov5v5a3hpD6i",
  "key16": "4v2Dtt3vs3y8sQMnCgQYFo2xMkowupnjgjGkMac8PdkgEfS175WvZKKATCggMQ4Z9BDqYJRELhoQnCXwp8YaBq9G",
  "key17": "4ZLeHALRBRe32x23zYbDn4Mv22iZ3ho3rMtAkPxdF4ZmEueTxESwoupkQrJoV4Q5wHoYuB4RNcYh5XQQvjTwPbDp",
  "key18": "7HjiDLA48z7wTatCJqPrcCcByS3L4BJSuF85V3AepGrqzRVYof836TiwK9n8MaNuftP5rtGtjx1qTkAgk3DisJ7",
  "key19": "3RVkSYrcRH2Zckrh7qPECAYsvByJM8ctUZ8SFxcWEzdXnpukoCojRCQRkH6edevcTQWJYbb1vRpEAad1ehm6izUo",
  "key20": "4tVy7zrRun26t7PLbt2aVhnq5dMdcfutiSQK5XeZBFhL663KVC5BQCr1dMxvtSWHYwoNBAs3QvXLd5e8TqnoK1JR",
  "key21": "5nSrFpVAAQkKhWUeahViEB8wfVYycFYbGe6dnADNRQQByebeD2CV5giHP6sxrWZ63JAbAFxd5rwqyWR5qsGxv5ZQ",
  "key22": "256BRjbNZ6TmjZhNAEt8zipxQ1P1XqqXMogHExXwZPQZYjkUvgNM1Anm2RvfJuqL2ghQhYSvvAJmZDd5SZPWaFP1",
  "key23": "2yo3kDVjxNUnLjxsn5gbsHiiQWZr6ntKhVdGS3kknfFG9CqkXFmXqVFWzZSKJVcDu3v4t5so6tF4ogwoeENdycNF",
  "key24": "3EuGfwF9PaLHVQH4QwAX8Wruhz55fesm2hzZFDEd8staGXwpWT7e6npoXjdzn7bxKgLg2qMN4vpBn4hTueUy9p3t",
  "key25": "os74QmRsvaaRmWcLnPiLoBEhDeXXwg4vKEX3C6Tz6UNL344GecJxUa5oWYdrU61MKsx6WBA18odEbmQzgFefTgP",
  "key26": "4Gm3o4tX1Mj3yR3snJ3BqDM4dGcn5a6LPNmZYZjx6ZfGnUZugRqYwbp9NpKPMBicB4yR6VHRCM7xh16EXFtNhtCz",
  "key27": "5dfSqrcgPEHLaFjLepkxfX9CWSbdMn7HdQKx714ojGMzwu3wUZD2XpRpeyS9CKhRyL1mnvmo1u6nKw7xkAiD5MSZ",
  "key28": "CPpMX1sLtXJQ3y7FS6CtFWys7Ap3xycBZgPT7j6d3YMpgVVPqkq8RHVCGvTWH5oQjvNcFq4SMHXdgjyASzeft1f",
  "key29": "7dWXWaq3gY8C4Rj574M19uxZxndqGU1u6phWeCijWcHzSoVC9n8u5Mb1NaUkQwmFR8ZdgTR1duLVxkpaj81cBRf",
  "key30": "3ptr6EPV8XDBYeFdQrCTF5LnHdBYe2WD66ymtRLgXnVxyAmbJVjEWS3ax1SctUE9F7XfrxMLRqjPa2DZW6bHMVTT",
  "key31": "5aKiEGwnZXosAYckAqspLDEYq98KhW4pc663K8RhCTJVw4xoTQqifgXDN3ooRv9mmsYX4trtWWonz6MkE69tFd1X",
  "key32": "3FBjBMc8fcbX2akfRUXzZYGTCwy4jz7d3d7eGfFyc6PUBcedkDLhmqu8KevzUp6xhaEw6BktsmPGtWcC5mDkQCo7",
  "key33": "2HbNPj8KZkQfLrGTMfLZRwskHZ1pAvdqKQ6hVj8smyArgVWEoKMNHr3R9rjxTaodoL7Fwvumxw7srrgKFo5qm3qF",
  "key34": "QymeeUJsRbGG1cB8rnXFGt2yrPoS8ihE2sgHxEGa9T1oE6crb2MeUiUkFaSCew41nnwHFLyb35WRWFbsmejxdJm",
  "key35": "3mMXSbdc3TCqAyYSqhqBrVYn1grogJ2VKbU81hWrMoGmaPmDzUGLcvjdSvZsSAQQ58x4hULaXp4ptJsN9V6v9FXk",
  "key36": "4R7BGrqASv2arZmMDRq5Sbw9o2ArA3xbL4ygAE4rXTRcLUZEeVrTEkd33HuHf2JxM8KBGeFKDWonbHow3gHtyxhL",
  "key37": "3gWzqMa8w5VNeUcCToH8eCqwk34iL5iDovN4RACMov8gco17QugZqtZWt1coJNawwuCUDcTNjRXi9F2sjfWDVChd"
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
