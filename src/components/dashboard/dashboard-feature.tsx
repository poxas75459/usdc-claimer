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
    "2kL2Z39ZkwziCPcrQFxw1pwC5MMkfAcR4e56tY8VsRGZVMkycZEYJ3TaFhcfU1rgEPZcKCR8tYKYnoa1wmoqE1GU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sh1NjCQmHPjjUzH9EeWtN1fZLpZLCJXAvK56w5299vvByJSaU5bhV6hzqEfvDHAqn1SmUU9jUhgFsvnkh5mQ22B",
  "key1": "4riEDUojW744LNt6BegoeYACFDwuxuNfNaNPFTCMy1M7TxiwFPQ9h9hhSMtzajT9ySaGcxstKQXhCDW1ASS5Qn2S",
  "key2": "2vEuze7dgiGFona4cxdRzCZ8z9HjFjznazLNRT5RkDnuGDYfk7jzqorvmmQV5PS2Rzp2kCBk38TDr5w7QFCzWYeh",
  "key3": "3bUHcVCaueZENqsZL6RXKg1ox9FidaBMrbYhHp1e1Emg958SxCnpR86JGEqKbTFERPqxPvWCugfuZH9JeB1z2sEv",
  "key4": "5SbomcfkQW7Gf7VrUUvzuDow1CbKFxKht7bhEBevzZWtPhJxJwfUU9paAN5CXrKQ6ZMoiHhS5c89zZRJvvxVoatu",
  "key5": "5K9SYdUcuDEKx9mpczKi12i9D7VfDep9pdwDf2fcbT2Y4WbFhHd3vXsKmFF1u8XDUpLZu735FX8cv9VysarAqDAF",
  "key6": "4bX7m3kwXHDHNfERDtC6b7fuMuzvcHY9WNPj3ksM5MwJVVKtXctuzJf3hfUUCmhwUEiB7TQRrrQysPVGFNrRBjH1",
  "key7": "3i3PBdMW8pvNFxLAZt5LuQNaqHmno4PZ8dCnezAVS5oz63tXvyDARbm1GE9DRnL44Geeaq2Tz2zdbZ6cis7SFipR",
  "key8": "2ZeqhCyieihP9K2qUBHabeGuc7UWK9N3AAzwvxocXaaZw7vJrkKrDBcPQj2NLpwhDmsiZBEwemocUyxEhmAW63yZ",
  "key9": "5cyqEEAx9151ojaRjS5t2EZXkfLR27bCZQWdtHKLEcvUPTSsdjyPzkvnn9KUsF6f7WMdgAA4TzvCsUFtWi9Nxgni",
  "key10": "4iZUeMBqxCEpxrM63CXsZrDMVnRbhMRM2RUzdyibSeEGDTQWV6MfS4Xt2LzNfv9N2Q4XS86gZkz7dvLamJrsYgBC",
  "key11": "4nVBVmd2qsTa74VA1WiBhTHHKJRRuWJGaKJw5iyKfytWYNofKfZxroVNZBCqMuCcyM2x4jKhjSXC5uSaMxNZkkL3",
  "key12": "5Ltv7Rk3qEGm2hsCbYrdRHN6ZEPtYJ4GHP1WFZPrqDWhh3xtzwUBFqCLX235dC9FTyTWdgxNRb873aCQzSoiMDw9",
  "key13": "3UvNNSpUwr6rbjJCo4QKS5xkYbQwmibHbsnBMS5dVDqfkWrykkN89MoPWL14NNcki4He6oZadebPXtJvmHD1ZPHZ",
  "key14": "2qZSrDJvowo93D39Sgjir7XaJGQ1qF5sd8xW9Byx8DCTPUuo8hjsyY6jkESmgtJiaCmqwd8E7eKS5jBsZ9yaQJb2",
  "key15": "NHXUjE9yS3d3Tc3ivS26biVSsbXVFtkVvXo3TEq3XxFkxYNJBtUpzuDd6XrbiVa6vcGdMB5nd29ztE1pq2vWDUH",
  "key16": "3Sp2xLHZwxCSt3dtyKwtuXfoFJwM4iwTgWT59hwpDihj1WXaUmL4MvgRCyvjy8Gj6XHqqbfevHU138T2x3QXLTjH",
  "key17": "3U4VfjL193ErH955GEX7iDaEXDnmahJtGjTsVyGioAX73CpGvpREeCtQxnv4rRnv5HWJLyJr1HnRpHN8w3bEvveQ",
  "key18": "5B9Rx81kuxfgLMscTk2xw96eZgMqdEQziw3dhzeaKuHhRs2oUk3chyivEBZ5J3n51ApJtKRaTLvpsrHvEK5fD52",
  "key19": "58nC76j1diiBYev1H2Cg5WRuxsyH8EsbK95L8ambTtcQAeG3EHgSg1KFRMxMtXSxZfe6M3Xg3vBRpoXiL7bP3aG8",
  "key20": "2UrFFTP12PZj2iymp6HM4QeWDnBLnMH2tcFqAEGaqEm9VU1zB9Ujgg47uxVfDuK3kcFZHrLwTCi4DBy6Jywm7SSp",
  "key21": "3MqqogXVeLj8ydRCrfVFkA58VPNPv7jQywiHmsGK6httkxMfjUbrFr93gHCNzt1Xi2KB5f6CpCY9JD9eX1ZCobYJ",
  "key22": "4C77BKGTs1LsHYqJanW14AY35TpSTEMxkj1VTJLYP68HmfiVjLDASSVxqcrmEwBCCVG6zdKvtmZMoWp7x812d5v7",
  "key23": "5AK4WUR2ZMgq7Hf4eY5Axe1Durcm5EDiN6cn2dhdod3H3T7Q3UJYin9y7bXKmgnVSaFbe9VQdXvJT8Bq5zSKxnu3",
  "key24": "5y7gB16im2Pxad7oyjcWZwSp4xAAcxeeCGvk4MoShsLfkoKcUetSRxLS8Jt4dQtjb4e2TkezBVTsuPeWiWYprBdc",
  "key25": "2Jm3GSVjF6QgiGTYvysway5grMHFKeAyf28K6WTDxD54F3SDXgg9AjEugswU54v53KoHKJS5WKvt1CH6XXeWv5PG",
  "key26": "5Jbz97dVWPv3Vw4taXxKBmem4wRHY7fDqeasfZGJMUATb8fPymXSRri5M5eyAHEAmQ1hNZNmujcQr89YsVggAsvK",
  "key27": "KP3WpzrZi2xSUATZy1DtGBY62iSXZtL678jdAV1ocrUtZj4E48YquSpD7qLz8YPZ8tn2Jrj4fzJAxTCYrT5SgKq",
  "key28": "2MjHJcazr6514DyN4wQyxyNtcqcxvBwNjUiieYX4ikbdRkXmsoPZeS94HKUzFSUUdrX4q3rgUR5fENENLHhmW6g3",
  "key29": "4jpj1Cvr88Nv2dw7X1KmEHFyPAu28H57NSXuWXyNkoCtfrcpEuBWtKsjqcdZGPuco3TYmoUxweDsHsHfZUZZRQqH",
  "key30": "4eAHccw89zbKudFRdWeMn6NW97LrXTd8LvA2tYMoEsNGQh2DHXcjRh4ekBv2aFSm66vk2kWFw4WxQqajDrgg3xV9",
  "key31": "jaDeh2zD4nM6izNo8NuRXjAe4g1XFh7HVtTDLdyUhZNLrusyy4MebbT19nWkZWSBjb8h4NH1VbFzeS32vN1M8aC",
  "key32": "2oXc9tw4P9ioEvZfZwJJUxXNzn9V51RcKtdaLke2m3AVD1kP2YPBgSctViaZJLQWmqqby5CqfAweFLHqkTppJdDs",
  "key33": "3wBDbKQuuWFh5TiPXEcWJpsukbnpd42rw9evXX3tG7fwWVunBqWnaQKb8igJoBHh3QcUc37voFUQgJ6w5VqMkkr7",
  "key34": "Z4EohS4C4rpxbW1YGookV4jYrCJqvAY3aABmTgeNmTTuZJ8xJWLLhXWVLZuGKhPVGsktpizJhkkiy6kyvnKgPGv",
  "key35": "2ytzUSGc3akCp6ke98tBj9gHbHqS92SWgpK8M64rQzXvKdipmZVeG8weNHHij6ThGTzY1iu3bRQxoRoaUxAPWZoU",
  "key36": "2KzAgNR8PaTrNiwLjjZFBKnSywZqMvtNgzS3dvJXaqQjYoLJBPkZPGYR4t4rQTYcLxDkLC4KocPmeQyE1LeXDGgM",
  "key37": "4ieDQimmynsYn67FZXpgxRBe81ZZYMhU9xLy7jfvYSWHen1z8sD3m4bUjp2jNaBAJKSw62WxkFSxBNDxP3gphyW9",
  "key38": "5kt9NfjnSiYFxZMRudHyEvm5PGgWMFvgx8XtEcKZuMGZRWtV9EcR24m6bUvawjivsYVT4idd4zr6AmKCHVvWWmVP",
  "key39": "3sPWRjwvj2LSiHujhrwcRB8s8yGsPgQoJDCbN7zvXfwYPJXyBgEXk6fR8bswzdw3Tt5y4B5bvPSRyCRzofHLBYHi",
  "key40": "5KEWn2j35rtmsquhEx2y43xD4b8ffPbMqGQybvHyKKjZrwmVmejhzVSz1kBR9ju7eSyNGsa8Gk97aghYMkH19ZWN",
  "key41": "3efaWn26dRxqqhgoG6aSWQ8w2LeQsrrdbwcjCEFieMkAZxiHPFfhny67PQpyhiFU7MCpNV4ijjonVkr5GtyDRX1f",
  "key42": "FAgfkgjqt3xXvCNeFvRkeKcVFLjLLPMN2QWjV3hv7rUyCRSpYKExDX1bFnjtto7JNVhkAY2i1QBodpucrvciBS3",
  "key43": "8JM7L3dHBPgSgAGqryyrE63tZyjZVzV8JdibTkXsuJW3vNCd1QxNBqTRYqK6hq6uRgFV2v2RQYgmfk2CWwKV1T5",
  "key44": "3ktdeWxEfzP52fhvkGQ9gwnURq8t1wd4moSNbh3mXYFpDpk3Tos5h74pdtPNg4a7J1Rnw3uGfwDMp1Mg2QGuwaX9",
  "key45": "2xeaQDyVQG3bcdKZ9ukA3ov1oRrYYg9PGKmmppuN2hevXAqVmz4E4qnrRWkN2C1dFMBci7d3twKoVqJqL4vNcNrE",
  "key46": "3dwBdeUfrSgdqHMs7HVX6jppCFszZi1DhEeGC9dFtmsyeNHuMdytsa5zvWc854PYBzGzcRuu26LpM1yswetHvtXW",
  "key47": "3sPoSCubWasNyofEZZt9uJitz1TvBJdU7JXUvH32eZE6ZBJAV3w2pTr1dpMayoH6YHjXnaCuyYdbGKPV8wps3XW"
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
