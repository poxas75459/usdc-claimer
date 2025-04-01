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
    "4dD9ZL36VB9Zw1jieDrKJkauFyeHJG9zz7t7CcmfmVX3iakM9BkP94HSodXX8AVhfXn1RxfYEcRgMka2ozVPrSau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ktAUZDcQJQ6KwNMrzmZYbxQ6RY49FGMih6Yw2DKMi46XUxsf64qXWYNR7F4dbDXi8TGY2S2HhmkaXoSP8JGaW7b",
  "key1": "2cWArxW4RMMWc51gsmGU7u9Dhp1tT41GUvYrXXMSJwLVPZJviARxN7uefzDbTGTHSCmJWFnXkZSKGaXFX7gVZY2C",
  "key2": "5dCP4YSgPdRLMx9K6KbPJU4CJjeSjbyHwYAm5iSafW8uzR8ub8y1kBX4Xb6oS5BwyzTDNznrDJ1DL1A8tdpPCZqv",
  "key3": "3sRiEeHLaNxAnkHtmsZmQdiyAdNMZn4xNE93cDikf7Kg59FNVCmr7ffoRKDd2EbzTQdh84evjrg7jhKFnNzkJKgx",
  "key4": "58xWPtBw2bbjhHoeWhRVJ49VEXY4rjtMoFZHTSWC7RTJfqk3fwe63WvAavj57PsggzagdvCa2nj3tQMiyeCirhuB",
  "key5": "g3mLUB5akbSQNjyvXA7Xmazyzkvq5hqofSdrS6d3GCDm6LVDGH1p8zr4WgsiP9UGnqABzNBE1cPiUKCFZAXijEa",
  "key6": "3DkpeiJ2gdhEK9DYNoo95S8p1sa3hVJHkCHVCVZEUkWhLwqHCd9fHQEbBhaGWDgEdJyPsxP9vkjp9wYpZNLKeDSx",
  "key7": "5fSAtRJMYTk9HPy3mU1C3QYMidkBjMdaGuVGPb6vyWcSyaGyRsNAzjCMPrReGWzXjcZ4Rw6pZQSPLA5TPrK2eUv",
  "key8": "qSbjPw3tvPmux6guJUgv4WDfcxDkYTb8Lt6fdaHnV86vqzSbMgvHhKxXo8ncD5wfG89qevo44F2MmJhrB8gjMAt",
  "key9": "6ULafmhB9a6MbHeZ667RiSRaLSDYoaX1kD65BUz8C11GxWSsd8Ue6sdHEKbkBGxPF8mXmh1QGGdYqV7DLB4E3Rp",
  "key10": "5ZZ7ncRsQAJ5YGVwcYbh4E6JC1o7u3AbTmPYNWmJ8twCTysk7488FfKWJFjHZup3AuW12Ypot6hFCgoiiESM6Fox",
  "key11": "aP3KdBfr2MoLpmszshZk9hbtigwjE2pCgetEEKUg5tDybyYgiovmEKgPrYLQdQBFTkEHoh3DfHSQUtDitxpr93J",
  "key12": "42ubkcY1Y6dn1aeV2tsmAYUowPq6aEMMr8Kv33SA4bPqsSqtugPiDn4gwrHHjoMj2RcfgA3CXGUQhuHqcGwrXqwG",
  "key13": "4ChaHQCT3XYEchCqSij5fpyxaH8z4Bt8VUPdZHjv6tZwch6J9t2LThb5GMD5MmYrjVrt1D2mXsmV4L7HeGyYkUVW",
  "key14": "5JAUXdMnjWBxNsc1uNkW1EPagJjqKdE3H6QAAaeVWkbLXE5vaoLYodVC4N7EhL2kCTFhpejz8uMGhhqGNC47sMQo",
  "key15": "jzdAQ8gNG5yY4wkXyWNbo4Ht9egk2AQrskQwwrLP12ME2thXenTEkdEK2uDepbGu85rwUdmdUxwNfdWzgtWpLGW",
  "key16": "378pFJyrfgaXuhuVZ4LodqtRYPtyHMYdWhnCGgdrd1gyNsLFSSeSpGWeML3CKjwPujJgU2CndrrtWbxHr4aKXMqM",
  "key17": "39b1J94ZzKNwtzR3Yk57eyKoyKvJKoVPmhTmbdrGwydmyhJiqxjnw3WY5x1bhHVbXg6n3GwRrcMXWde4DshHzVWM",
  "key18": "2QMyaU8YBtULgZ46HEBzXikytV2n2cbypLaeAhGYZSLUGHemvm7VMXqkVLwNXSyRH5KwVMoVjfg6EcPucHQnar3v",
  "key19": "2cimVFDWg5eHvsq5fMcMkYJL7tXK7EXXryDmrXg15HgHzvDucXy8pFUkFaesciFrWARdLGUcLjrrGVQWfzg7tj3f",
  "key20": "4j3QVqVAkQRi7tqGFKnAy6X7gquNFGi1yScz3e8j5MVJRHGJ52mGGsKQkQfSToQb15vLzqVTJtg9EKHjMN1sqrXj",
  "key21": "5UJpgZvESwtNZCMDuempMJtDbpdQbiXaBRMeGEuAU5VG8dBJXiFeP3uCXfT71R7YJUfRHKAKndDfqRYpSKaP3njn",
  "key22": "2VaBSqa3iUauB9pmcCW2BydNSs6bUtLshRqg2HpGwCaavHAZ55awXJgF9iqRPsihsrSsxcgEy5fWsYojb3Uxij3U",
  "key23": "5gz2aj5CZ3HtqCLF39ik2PuhxYuzoky1PL432CL48m7jm77Uq5X3iw76EA8iod2t4pEnRsHGLXUZdYto2v9D39yc",
  "key24": "4vYtT64CCfvDzcRBRhpVC5BPFXK94w99ywAVL8vr8vhZeTXUfhxwwJv8D75W5jVFBtWVGmX7Fb6GB16pBZ81NqDy",
  "key25": "5SrxsihPg7cqp23NxrxKv8jdmFBPt42vym5ScqboUehwcjQUFUS2wG3RVAqfRCFpXbmQ16K1LrHW3jSNhMp3ijmw",
  "key26": "43HJBtKdAU15v283J2mh4Rfy3DP3h8CLX2sjD9mS97w1kMzNXYj8fd7Ptytiw8bSFr6EToNiEpm46ckpPuffoV9K",
  "key27": "mMmSjv632vg8g8wFFxWn8GFF1E6AYAEvkP8EbukrsuSLhS7L1uaJ1o3aL4hhs7zyoZ5x7SfnfTacCLX8SGr5C67",
  "key28": "6FFqJLttMEdNwuR8VfnHA6P72AnCbvH26JG3BamY86SPATnbVHXgqmB5uHzc5ASStENs3J2NK4bnohc5K5GUEiw",
  "key29": "3mjTju6MdfENoQtaTMfkvibvqxzhHtFoSt7ihSgnWatDwnAsysvuKBZvCVuQZ7Ut9NVHXvKBccYMEvmbViUmxf9G",
  "key30": "5HUpPMSqZwCx6662uXemV7LksYxLccPy2z83iWD21L9J8951ESAdMSvv8vo2bfGXHeJHqP1b2KWKo5s72dnTdUrw",
  "key31": "bn22VbH6tqN7H4HbEpfJSud93BL2Ecv8JGDbJPVBvMCKEJ67J9n5xNfobcHWk3fU1KUhaXcCWNokDyFK2QKXjaR",
  "key32": "CzR9BAUDbr9YbMXjH2xQ2UfSwJkUJpNRRWTWmDxizopN4U6GMWRS8fmk32aGbYcfDLR4oX5uPFREo79gDw2hyXt",
  "key33": "5Y2Y65G2n4TVujmp7mkrfWsLFuK9T78RWMqPyHyseMZsMVs5Vz4zRBjSQZHzUSJyuXASavgVLbtojT8bA3ucxG7M",
  "key34": "4qv87raxMWXfvTyLMA45LxCrNtgAYE9MRGyF8vsBp7MTrpehgeBJwcbnyfdMGxDgzFq96mM2R1WeUr1jnTYYSohM",
  "key35": "4Ct5XQiJpkMXvZW2h8gvHdTfbz7M5v4hNWTPyzAeqyHj71hSv8PBLL5GYJniPiijp7QRopQYp7TA1orU8C8z1ySC",
  "key36": "2nCFbMALUBLa41iA5D1zyfNkNJvHjwzeT3PgKTRWhER6C3LJ6i2AmzZXrwkRXNX3xPVbYpfMjN8CD1QHs4xrhnD6",
  "key37": "iBoG7a2bRA4U6ikqheJXkzxjVUiTcbgjqBdoh7nwtVNrHoHX1ygHCDLUTPvdN7uttzQgdufn5h6HapffwtWQvQS",
  "key38": "45LKJY3KLLh8GUULfZDyvTsq46nkPoumDAxmzy9fiRufJmkDccxZ6ETKSMJtQvKtvMEwrHntpkWvu6KPMMGEghcs",
  "key39": "2KZFf9gBGV4zi4BkfpanNMnrm4cdM7LCdhC3jsdCWzsDS9JB4cUVuXmD8ntbisxueQHUwnJ2sjmWu9BKrQxyiBu6"
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
