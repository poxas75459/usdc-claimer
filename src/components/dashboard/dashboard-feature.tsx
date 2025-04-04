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
    "2A7xNpFJbWY5AtSZzENm6arGFRSnFUgz3pT1873FDABnLxt2CkAnHKyVPa8Noch7HdyiLv4L54JBQNfi4ZXXEucz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FtiBaJ9iiSUWdqT8umNu78vdstpZ6shQo1uzPuNcTBB2qXDmKeXWPuT5QTrYjdSqxdwjFE6H1QYM8KVmkTGPv6x",
  "key1": "64zHkvEC3YigsJ14TV1FMA2TrCEC8xfbhU3pmMwxAwW8CwasdoJR97mfTiVQJVqMFvdaTw3Jk4yQLUCUA45qW2DX",
  "key2": "Z3r7wyr957AeZAFWAJQ58bL5UgRf6YK14KyHmKaCt4WVt4ph42FqVGwQZLMohPn2MLkGhBLGXN8EXX8asPYRR85",
  "key3": "3SiLuMbvLPmbiy9eQf9eY3xJ9EKWE4P5WKYE88RLMgCtneYSB2NEi6BzP9A32oZ9Kv24WsUwwHoLWBJpUKGNbch3",
  "key4": "2v5xFqbFYVVFAHLSN4mosyuwhm8xsjpnGTEB9oBgDwccJ5nTvoPSexnE3GYXZNMQPVBiKpPw6Co2QfaqtfrXXqnN",
  "key5": "384zHtPyX1DGrK6bHb1qyNJXd9kgqeo5bFeoCFccg1n1RXsy1Vy8pUefpFAPVy33tS7UsG9qTmu1iRuocMS3bR6s",
  "key6": "33HZHdK3kd9xSFq4AhAPSrymS1vh9FFbqeKfxQf9c3Eo6ohNfSTsb5CxQvrrpyVtHuYA143Pyj1JxcfTQABhTjLv",
  "key7": "5z5tuJrfh1XYw3bsgLFBShFJmBGQZ14Q6bdwF1STxbdumCHkVXin7QwPW1FAfVSaDj1W6L2jjKaeAHR1Z1vJddRx",
  "key8": "8w2KXyZnMn4zfz4dPji5GYNmtV1tJFLrkNNNCx8T7VmGQD3bEzitFdVXRioXKSp4CnNNfifS3v5tmt2xgTh7C4Y",
  "key9": "3dQjjDrHV53SpRixe7gmB9YnEcXTH8hrDweLXTBFjEppUD4jzk6Co1eZNi2gLK8VnYY7SUZYpvQdHbVA3vCXCgYt",
  "key10": "PyT1arQNC6QW69FAebaqZSrszdPdazozb9jKyZKDZDLapNNksyEErpkQs1EZnxLNQjpnLLUEjgQhZGFBU1HqLJ8",
  "key11": "579jwidvbahmrTbWjMPFJrKWqiQoTd4k8CcBZJAB2vrbtcEyc4PUSQk71586F6C5S13zCxV1wcdU14oUt5f7azFV",
  "key12": "4wPaPCr6c57W7ZupUjGdJhsYmkMP2m1wenSSozEJSXY2Hb3H3igw79gArwLGtgZZkxVGJwutrzpwE7gjAA9gsXT2",
  "key13": "4vg5obzUBusovsVa4ZKaP6MK64iE17MMAaPWNE23JJrbkJsXPqfrbQpb48xjeyPjjc8rLgiWVenjxyQwQy5ie5Zw",
  "key14": "3w7gHdknV3urXCDqLRkRRhwgqdDTMDGf1ydNvoY9fvNpg7t2CYkJNdEV8iJXbgWEUMrF4XhudAB21R3NUcW5oH4J",
  "key15": "3o5K228jbrDQYFqcCC6XCqS7dTsxtRG43RbXxHTCEVnkXUaNbeJ6jHa41toug3zG9bfWUBrcmPp2MZ22eWAcYjhU",
  "key16": "4ccVfEnqGpiaV5eUUxRQgeyB5WtrbDdnTvYkuFFfTnXHuP856NjYYiWCXka3RMbR2GyqYat88NV5p8BmoCmjAXya",
  "key17": "4iTJ6qbRiRMSCrDGHNcmj2BGKcyL213d6pxP8cfy6EciwWmSqGWWhManmMULQGbfTxXhuNYF6niNXAKWKDcYn72N",
  "key18": "4JZJoP98TfA1dxLduHoXe7tKaRD2mtxHcbZDECKrn4Q8z2pDK6W3xUr52dtay5fYHAevkQx8oFLnefsjLZPb9hD2",
  "key19": "3e5MDPN5YLEw5eJKtMXGg3wwwaFYVTQDpfsqBEH5ZkoKZiStYpRF5eJmVkLc9auTRAkmm7yFpi51X14mNj4f74rd",
  "key20": "5u6TRxPZJAR6tn6JDhcwckznFiTgWLsRt2BQGES2brKRWWWYyAMUGsjpVdNWf9NTfjQaiMydfLdDSGfymRzhSu4v",
  "key21": "4KEDhcGfVSzDdBmkTcUTQaogSwCFuaLHyKMJfrEPysNUu6TYpTAtLprTHamzPpzU3jJEERvCTyGoEoMs81aThide",
  "key22": "2FSEUfp8LYHgz9zomBgAoQRVQjXYWbqJuJLDS6N7MvKNMTq94hLVGaEWbp7nNDrWSu4zYJ5QtQ2KBmY2vmjjHbV1",
  "key23": "46Wva4ASDpdKaM5LEvNkschfw9iXh5gMWQSYgLqHBuhBpLs2kfuyKwwKcsF3eGd4NauDbpAdN79XkZJqMVNGBM4H",
  "key24": "5DER7Fyf1v5bXpThSvBzCC5vHiTzMCKiAe6ogL9oPuyEqd6my52WodBErn1MrFUyCfgdRuYrknScw5TiZDRgK8KC",
  "key25": "95GMgMbtZRW827r657MEWvpxS4fa35mj8ba7gjmMCejwgdK2AhFY7ygNiZFVfbeg6e1ZRrQcWbtVn6YRzTa6Xib",
  "key26": "3SLbY9mUwvySnaEJNpQefhP3caxE3nSU5dBju561BoP35Awi57RFcy5rP1nSxS4p6hkeQKzKYpJpM8tmhSJ9JmCA",
  "key27": "5JDcMxfuPxbUHXXCufLvQAZnWkkg1vHM9qZBG9cuRVdGC1AUoN28SXLckChAjVouFwC6XQbD3xcYnRvGtD9T1X6S",
  "key28": "3gMQAqipE2LuPEU892d7ZDUGBLAtG9SAGBbjbwGguGHUFN1q26hjw2ZwUb5QUe3NMWj14GYUwY8B3mVEayJhWokB",
  "key29": "2t5VNCx8GrvffUhZaRP6ZiHYx76LxKzJ3oDeE48dhhFLSxtJRP1trtjxi3KmEb4yAHRLGmLYtejwiHy6FVKHNUnG",
  "key30": "5u5thJ4Q9u1HCGJDsThngmkk3BKjg9SLWKXr2WKSTsLecdssDnY4GekjSYShh7HJ9XeRqqxbUV1EmszFx3og8zdy",
  "key31": "4pipG2n88jK7DfvSDPw459ELTxK9wubSH6WUBGYFRo9vxSP9WMQQKjtmMCBf1zD81ctTuCSqFuTk5Yw2347VJiap",
  "key32": "3SygDK2Yv3wwV5fyUMMyFj5DUVx7PDjyqJxCejvQNonU5DaUihxNmeNzTwpF5vbChFgEJjP9yStC4znAUuuWMG2n",
  "key33": "2efgfhoZV6wZvXoD1UkwxtBETMvLhCraFJxeZ3c6zX99gWtfZLuxBAVT4HgYCvrVJEpFZihEgauXuSQGuxjjU4Lf",
  "key34": "3m9aMbtE6LP6HfKJxF2Th6BhAQcbFguZMbt6hKWA8SrZ6SghcsVnqGy7f6zYqwoTRyZBrEAeVnGpbMj6CZ1iJUi4",
  "key35": "tcZW62KM1J3jbUp5TYWtfXdc86nvvXs2P2Upmzc3EzcdGL8jAZK5LjxGCP46q65E6qepbjrZrcPK9r85zdjDdCz",
  "key36": "2fjVUgirKFeJfiu4J7BXVzX3FjZsgX2FkbFSWmu2BhXVzmDv21an16PbByUQrwu7NvcGFHeUeDaDmyeCuuZscMFo",
  "key37": "4cWNSvAJ9yEXMGxAgB1y5UmGKhVpCs5yRbSW7wGG1TYg7ziAfd2k4wZwxNae8M3PiGG8L2J7nY4fQEjjDrA45UEH",
  "key38": "542SUN76JwhRtBVTzEBPcC4ZYzfDwHiiv2VRB78jgGfohgvdSvRxej5VXZMjJpqUXP5LxzYTmVvDoHgFWePHxBit",
  "key39": "3VZxeMQs6cTg9y9gVzDuVC2yq1qLWA3QuJXgcd6kNc2gPCPtxw7ZPbv4AHDj3eHZPctoBLRooWDmRoiG4ypaVs2d",
  "key40": "dUwaU7aYHatBEMBk6ikJ73Dp2UDAaDfEFSNHYUN98PeuKkP2V6DN8ejiBzfu9EX9W53iKabEfmydku23YVeXsDW",
  "key41": "3DvcGUCgTMCBgX2Tgcw75kTRq624ZXSyVuRCgnYaKZ8GsJVYBTthiHnKcnv6PbpwqnfhJM9NwnJhLgiZaQ1dgpBn",
  "key42": "5RFcW6yKEwAA7VUedofwRHix3SiujBfb5oAVm9WgdZ5VFgwz6NnreVNs1S7DmpBpEHg82NCw8cL85Dh816eV9Q2z",
  "key43": "593BJd3FTsUKXmzDr3DbiJzQFcypJKbFqDu4jTLK4Gg1BETJq15VMm8BBKyx4jztFSHN1ZX3V2JXz1hxA6zZJLnx",
  "key44": "5hctV26nNGptNyuwP6LSvSyBvSCofKXnGBmLv5B1K5TjjVAzBk1HJH6mFXhwswikAH81oG4RrccXsov5kgvg75Zh",
  "key45": "2sHSpY1RQDw7MTVH5P1WSosYcPY5o6x3fMiFiaAxjtX5wxCrJfYbky2ENZFpvnkQAsYxSJ6PLkdwhp5xD3MbKcML"
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
