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
    "2FfF9QYk3F1DXKMWyEWcnB5moQRjJsFe7FDQmKPhwRkJiyvGEZd4YKxFxx8LaAEHW49qzy3B5nqgFkBxBtgvyMae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bnnw1gwfwy1DG5gckKQfeFhpWRuR3nVh21u9v6f3botXz5KrUQBqWiU1Um1xd45Ucti1pxAQH9jXRvFg42drUXP",
  "key1": "4Rp4BHBPdaDCwk9Hu78QJ63Ys1GTTfamXRCAbTSiXUYUeyUBiVo6VaeetGj2DaC54VfzvUbFULnjc6VNWy6ToWFQ",
  "key2": "4sLGGtMJGs6y5pGFcENFsBd9z2DSCptsZagkEj6WDkumAw4EQHPLpfFioy3TKNTNzub6bq4NgJxJaLKn4mrJJv5n",
  "key3": "54ZcqhyyYyLgvazUTawDki9drRsKyGMEk6XeNfmWU7HWMPT3e9kAkf4xqSbsRqazCJq9idnryEDzgZWSCJkCzLZp",
  "key4": "381RJ2j93at6J9zj6BjEKmanQ4rQeMzyKt2PX4x9SKmsJDGnzkYbM8g8LwtXcsFvtkXfxnKbDGR31aKSUqjNVuxS",
  "key5": "2yTpeN8qJthT2E3CnEDUxZRdy1WBRTzZ581FJoLpsAKTKGHzQa5J4ZhPukvAVz1gX2MfEuWrBgiETJHBB6nMi4dN",
  "key6": "5FxQSEXdoLGmaL7p39pSWREdQKfkuXGuJk6WfnQ3mJBG6ZB9tEUmzVFPqSmFKQzTBkGFFTchUHH61uhhysU44djz",
  "key7": "3X5PZLvjWGBBYJHu8R8H3rAoedNUdUVadfDP6H5jwJqzHKEPXrdZX3hjJ1pv7waWTTmPwozYRmbz8VSRhjoNvecK",
  "key8": "4hSm96NqTu87r3ay4yqFqbk7QpBV9hAURLQgktNSLK7JA5YwRs1DcXTh1NA4WayJdNTeVRZJciEHwuqgXXYoAXWo",
  "key9": "2PLgRF2a9inkcRcQKNhZCDovn5iEDPRF48991qaicgmQSjgTNJ2wroqjz2UborCboEUeRye2BGdR3YYWjPowPs7y",
  "key10": "2J3KcrABfvqjcGDKoWGP7epbq6Ji9K6wLV5SpBQ5TKUvWP95V3R2J1YoD6cGsSzfYHk54tsjrjvF8BEcNKxmXoBP",
  "key11": "5232jTsXwR9HZb6ssFmkxUSQZ3t4HmYSghCDQqDi65ZtbbatV3LYq92rjpY9bwBaRVgkPVK7m6DAu4LxdY8tZjV6",
  "key12": "5kxZntUkKyShKuG3AuKUZ74WLsPxbDXC3tK1vjhDeTmTkV7DxseHU2Uttyoztmx3er6TfLZUUkNSTrwQzhw3oDuX",
  "key13": "2UciHT7m7rLmyKFWiHYRdi3kfVM4kZZqRNML4vUF7CLX1EXSwZhecJjomqSqwgiRR8BVnRQRxMLbdajupFXRPVZ2",
  "key14": "5UWDeLkv1RZKzpZcHBDkF8mzPCSyVytGP7N5jkphLvD3zy1Xq9Q2VRn5QGpTWunKGjBsWDQLkUL9fifmnhNUgw2g",
  "key15": "paHmmsMFy9b6vr4H7bjn2KPdjMHpG115Cx4qxi1jUHQET5vxnX3Uptvyub7DkFygozZrXhtkbA2q9HmEVqMKmug",
  "key16": "kpQf6FbQZz2kiNa1chPgrSr1kAxrC929evbtRxGQRutAB5FQLvsC4qtLAjxwLn9omRagco7nwmbFXiThNM23udp",
  "key17": "3pC2GcYp66KRHik6q8BByWm86sPX28voQ6mCW1Snx48aaPd1Y1K5RMAjYBJp6NnsNHvucQYadQaz2gFicjjUiG7Q",
  "key18": "A5WMQzTT2pMffQ2fPPBeMAbjAb3tz3Shxdfbtn5xSDJfrxxd8T9AGAT9p4LTTRwP6GWBfgikZXSVHixZtj2BknL",
  "key19": "B98vorXrc1f6Qn5Xq7WJjt3z73ZiZsyxMgLytd7Duy2jcMUEEWudX1hgkW61YwRgtBq5HtjjqLamibCNGp2qrRb",
  "key20": "2SFnrZ1Yxr4c7xud5dSA7qiGKiky9jufL6nT6hwVPEeBVb3BxUdCVs3mc8nYqAcRYEztK2Au9FhgXgmSs1QD6X1F",
  "key21": "4ns5NMoM7UeJKA4zXgedg2TooNyUkEZYtHAx4kCkiTWe9QDr1B4Lo9uPjixyzqJcM9henqD8W7hbX4nvffkwyy6U",
  "key22": "4oaXTER7gbwgxntsVLxn8wFvGVDN5ZjM5i2mmRMswDA96ukfJXFcnmZd6upVzjtGDXvCw3WhXgPu65iewZtsXRr1",
  "key23": "vnJTHQqje9gdhrKC8Wpeinzd3qKvGCU5oNTDNNUPhbjC7mxLGK48cdvt99R5i4vEGdmTGq4qyS6YZeZwRwm6hkJ",
  "key24": "2E4whof7HtL8FdwUDVNpyAw8EL9wfqcPGdxt1FS36vzW7EmRFGEtuby4E4p53cJqUkeREirmP8FQTMtXrH7geCzG",
  "key25": "5oNiDWYSTqs75hXVdPMJooQBkm6j8Y1ksnysRYbAuXKK2YfB4KUaFZrhDCJMmaAeEyFfqabECCKi3CiGJhthBZKa",
  "key26": "476vfV5rrCoJT9gQwzjrhcD8VMPfEKAVaV11JpAy9ESa2jq8r2PWz4gkAJYtyCdHrvK3wf9vDrfDdyQ4TdJh4zdZ",
  "key27": "8dR1kgbjsdbRNGAZKpx55hu6bmVikseD7TLz1C253LLQZHooHwPCJWg7MYYcBKfvyvyyoVEotm47bULLGGHqN6w",
  "key28": "5AX1SyjBH89ZFiqBoNa6DBDwYsThAVLDdcNXqoVoeMBpzrLQTvDdUEqhZGDEz91BLEQh8LympDeASskmKcSmE7Uh",
  "key29": "518gdzjxE4s47PUX7na9MAWmzpeS1tkvjptR4zdZTTjEXvSUrbU9qmvbXLuCnkJBay7SSX2jjU6JxBfPxrQc64ms",
  "key30": "4oH9XDdM4NkLUsaGyicok9PqbXrndBeCqWwAyYPqfThDUQoiUEq2hLHSd9YpNfjFQTQUd5T31ecAA4ciqM32BXnW",
  "key31": "47xXEPUnkxZbnQCohunDofdib14nzox9Ca4P4WuHSohZpeaZ4u4dCQXoGDkEayGpZwCxQJd1DquKtDZuuVjpwU9n",
  "key32": "2nWbvSiRJ7XZD2NbfJJKguy6vCBt7DcJYaheRWHKhgBB13Hinfw5ki9oGgBWNZvSBnfUwgF1B172UvbZYbEobEz8",
  "key33": "4FZBss6veNAh1uuVcWhqbcqMkhNbCBRTeroNfh3CWYJMoZodrAxuxsQvZZtTR6Bi3EFkwju4PMKSnKdxCziw63gj",
  "key34": "2yHyvC4G6pNHv76nJ6NpLHsAc5DccUWHkGvqU8HhxTUtVhsrcX1ppCAbP4D6nX6ttBmhGotK5hQCwH1pHcG1XFCh",
  "key35": "3x7sL5nvrSKDvdKC4i4fnYiLDbC54sXBQxbfJmDjfUpcyzjWAU4Uu4UtBcktJ557FK4Rj1zq7yjNw4WCaZMY7bA1",
  "key36": "SsbThdPK9CdmuQBTh66TVs4a3kRwXvsJxDPLbigbBLcb9hWv5KBGbPLyPHvbUR1wBGvnGccDu9pejhZEUmyN8aY",
  "key37": "o3zYbSqQ2W8KBETDNfSXXqJK8GHbXbtk6iXnsKgjdzoph9JyeBUbfQ8vvqsSJp5n4aed1kBLxs26LEYiEuKrLyG",
  "key38": "2rHfonyvBwcjefu5hhAhoNQrceYa61oGMafJ3Kwrg4SmHPqrxhss4XaxLFQy1ghbDDPQSxaqVgVBq7oBGxwj1KeE",
  "key39": "63zzS3hzCCZq57CpVAoGSsGmp7b8dCFjnDAMLztFsstnm3y6gEkJLDLBy8SmQYFSaH9U9mbSFrKJyiRCK2CnNQyB",
  "key40": "3TGcNZN6cG9UY59oWRZfyMxRsAqyKmkCuFJ8AunMy67N973yH88PkjrsjadhzmzwnVLgLZn3m5SPszP3fVa4KZFX",
  "key41": "5eXjzgvLuk2ss8bAGNT9K4Q1EhxtY6D25mhj6UjXtLiFDq8UDqmCz3saLTaV336skg57smd4koK85kXXrMrosfVc",
  "key42": "49j785oS5bP9JeKwowM1ctc3D8Y33er7ZCSh82Am122qBzDTcMuT3kdcpY8KC2ybUMcssSqqs8QLBHcogCVhAUbs",
  "key43": "KmKpLFW4RyeNsvzYiQzNDdmJ3QqmZ7KD6Gm9Hkw6arRRyb5WRNR2zroyduYURFP4bZaJNHKSrZyYYpe2mpYAEZE",
  "key44": "2fYceqmW6QotcenHFjRfiEpQSBsRFzLMu1he3N63xgWwNXSi6NGHQWhMu4TFgaKtoqSaFMg5oKpEtm2ZkkmrzjRP",
  "key45": "McjtwHcYyuvMsgnqtqP5pNr6XuUtffhj8QEuyJuTCzSuTwvTSWyApjvHJP6PkPaptQGMPFuG9Zs2yBdPQwuWzMs",
  "key46": "4imgAAFeKgBxDXWdjdHuFAnfifpJ87dY2EFh4ffb158qkVN1CyWiW7SM9n5BouacLT7m1zNTmft2389ac9nWpdLv",
  "key47": "4RfcK8zFt9v97J84o1eUNZ7Dr3MhZ3oXCqYwku6TigiZzYnpx2Y3SS9uTraucL3amAUjPwZiQVUdNa4QLB5yPq13",
  "key48": "2fCr1mS7A8agD2npDLYyg1yci1a3uoSiNsLHhHVbiEQCrR1QykWYqvWfgyxiyKAzSsaWj34WctEhN4AkU7bYhNyM",
  "key49": "2z4fCRNhDCYwb52a55iaRFFkKoX2URg6fFu6584Kwn3QU9cKGKTfwCLtfuqjB2KWTV1SF2jes1ELspPHxj8wPS2i"
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
