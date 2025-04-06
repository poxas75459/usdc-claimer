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
    "24huosVjGjLHpDcxGATqZmhUtuzpNmpq6ezCkpq88vkbVzRQBMTYw6gvCkjncGfSz1Cm2QkYfrFMqb9G6ioDZvMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bBVgubJMxdggvfk5YY2rex9mLoCg7e7cBNTZVE13t2XsuzZU1nqQ2VV87eEfLdkTm8CcKBHHTCCvNibFnYdUWko",
  "key1": "4xa8mhwLJLGqr6U2r8iBTYPTpUQVDjyR8GVLwYKJufkqCxm998ELSqB1N34PMyzxDc4fyrBDUbCd85nZPUcjSnEz",
  "key2": "3CBBJZhdxBRj7SfqSXcacg2gTNUmPK9q1kug9gvFxCLK9gwyN6b2uapg7BonTDzD87BqjzaZ72VxEnHfHF8AS9vH",
  "key3": "2ZJdh5DcAsDUjcRF1uFUzk4vzz4NBPeYYqAyKLWqxnmS75PtrogKUNCZZxAthcxBbtviwC9eccgY64muAJTJjh2A",
  "key4": "2P6hsJz4Jtn35UqRm8kvEGdWqdm6MfkGMz4wLzkGqnuMroCCJ4L2CF7KBV6FDeHzDRXeFjm8pbybaVstKJiVoZRV",
  "key5": "sxhvSSzSqN9UJKFdFUVKhpGY934MSEsanoS726KXQ4wDcH2xwZvzBxRZNiJVJbCG2FzT9P1eg2zwoRz249AKuqP",
  "key6": "5QK3j1CBLuPXf4xjVVbDNv5CxKgmvrM5q6TSyH9aFxFZfwrDhvCLczpmW2XS7UBrL4YJ9nxUUUNvaQ45zZnGyrJJ",
  "key7": "5PPpA22KRNwaR9rRZSezdKwjajQ5bGuJkVHP6u9S2tZGiCU8iD7NsFuhS3UoCn9pUGwXkJkVacPJ811VfRGTqLVS",
  "key8": "2apZbHwBh1k1VjBLUL9cTvbswoDXaC9HbGdB3hG8ZXYmy2yH5TsyGzxJwxdJLR9o2v2GvoB7KdNibTVRhxS2L7Fy",
  "key9": "65rnmUjZD7TVYhZJx3efPkyL3KaRf8nEYZqB7Z7vB6ceifBcReBqxcVAtvSGzJRxxMqJorRgdnVDEggBqwBJcag9",
  "key10": "5YXQsuC8pZWuYwh7hMZDGMXT1h7juMP5CD6rUphvie1vJq8t8wFuSyszCnjJkh8zrEoeBGTHJs6tW8GKJUVSsVRE",
  "key11": "eH4VS8PwgPcNXY5sCpwzo1Ph9voRpQw4myWQRRf4rnoiDbB9cVZD4tZvqFRX1QPSUi7igJgMqfvWdfmKgY5C698",
  "key12": "5ftSVVerjiBn9qdAe65uqiRXRCWLKBskXvm9JMjZqj7stG9ZQyfSycooBZve4vhFXgQDof77c51Kn7xvSQ5ZBShz",
  "key13": "2N2S45YquGwEm93ATtZKcoctjkiasXH3wgvBiVXqjDQLRNeZkNV4BoGnXJNc49rPL9zY42bhf9BpP7ztfdkfNsnv",
  "key14": "3ivszT7ShTvmjGK6UCvkcL4qy5C5nXYSwPSg67DvJFpwRd1NuKESK2h5eUrAGzZTyJCdm3AbwrhwZTksMVw4jfty",
  "key15": "4KpYkDRnHCK2mYUpfmZmSjCy9JqCd4sVwAdgTdzBTPoXbYwkLx1XgzVk3VDvw9SMGepSTDUG6xKurr3JdNPU8Q9u",
  "key16": "LkYQBJ4HEZcvs7zSVj8o533hP8LpB9fD9zCv8aU4Ru3mMsye9UnPN2gGzqmvgiQfMPzvsoXPQLunRfC5sYmdpki",
  "key17": "491pxYiNf3z2dQs48gRf1CnyR1XX1ZHaVYzDddwfWfUu1y2VfPDyVS9aAy8YMkjXvLPHFoYhwoC4oxWpnfeQrDyq",
  "key18": "twiczQV3RQ1Cd6Yh5HcMyxTzDNuPrTmDUXawzqPDhwFnU4tfDX21a9GrqXDUnuLCcbdB1qvds8ABvnZPfiP7EAD",
  "key19": "qzk8s7s7RvXwUMLYgKXVfViBeTFz425Vazz7jyZXcwQbjc6KUtVMJwrgJFN5QX6Kvxi6aD5n9jeXXMupu2rgteG",
  "key20": "63j6JM3z2UNUhem4U5tFWQrMbw5gS89iHqNtAqRCWLj382AiSC6LuhLRCXFX1kF3v6QUVHxPB7DoYFcyTn8V5nMu",
  "key21": "5FKJVEVKp3rsXw9TQqyLubbTKPoxdStXb85N5eFbyBkmjWcgG9r6HKUGM1AN5a7jAYdTqRAGPpY4nrzifpYfirKZ",
  "key22": "54wz59ZrNBta44Xp5vHkjxCCzgsrBNvk4HFBPfGp7cZ2ucgqcJaKr1i8kXJ4ULFP4VaEDCgxuGrQZpH7Pb4xWegL",
  "key23": "1kHhgvkdfNkYuQNCabt9pMkjPB2hFHmXLAFj35HNKRv7M1u3yzMTe6MFRYjVuv8mUUEaVp8eH5HeTqaFdNzpGUB",
  "key24": "5uyhH4sgJ6xnbEwhV7fxzx5DXpr2Qai2sDXSx3rU2rmYKkeMRwZQvwSgrXfta2QsFNCLmZSCDZ1kDmuA5zZwmu7t",
  "key25": "5eFTzNhn7aMPQ2Y5ugSM3Ej65atspFVJJmE9i1FS2Bai4f1GTJi9Lf6V8JAJDwVzYVcSYCjwMNbA2yTprAjquY9k",
  "key26": "4Vnw7NyXbQmfcG7FsecoJnbd5vfaNsw2bzrvhiAdVZTP24n21Mvc32eMp7Q5nTcXaWt2kgLwUPTMHYYibfDimN46",
  "key27": "4ZRjY6SSG3Qg2AiRUgumv7swSh6PjCZJFT7XbzjepVSE6CfbwJypNvsGQwt58mWPsC76x6S3PboRfic513PuvwFJ",
  "key28": "Jr3mKpgpNwphWi6A2Rn7WikD5ywprkDprToYL3cuLXth6JcyS5wa5sSXdkaF4cvmMk2WCeYC7Z99Tzdyyym2Nwa",
  "key29": "2jcv2PLK8NThd9sVbsmr5MsjHZaV889io129BLyYBLxBVVEfxVcQ7EpRmthEdHdd1gXP6WP75uuTPMFUx8Ct8cw8",
  "key30": "5hcGqEjDPbxPMMSEYauMzsMvSGvdop6xpK66vfiWSDQb4VDYxJXHQr7cRLXKDzRa768CqqNeFGkn8cPwacGaXZ4k",
  "key31": "6UYjv9Th7J6wyCYk75aJ6KcjzYCQfG16RrykpgtyGhsyrJe7XfgRFQrFnSdtQoKtNB1YiiQgSqE6RardRiB2dmA",
  "key32": "3aAHx9x37wvWFgsEsLUkAUr56BFb1L8cBcjdmvL4rdUp4jevKy4G4zaC8872sfebgAzFjU1PChxqK5qdBZUmSPbn",
  "key33": "3DtbFQ5T2CMJtGSzdzQMeHkUMMfSiz5t7xCFHPGFpSwfkQJskAw1LkTyruxKN1x2tHaJY5ruS45KdMPGMVcxUimd",
  "key34": "2Fs7kd9eGjbfpisy2TBoAgjoCb8GhppQARrwWv82bojBF5YXfE8U73ssoqrhztsBBmntXmgMdnSiHUBa94462Zj3",
  "key35": "2TBgsZjzFYMEbPJhpu1dj8BEbnuRpMmt4VP7vKauipVYCdNSxm6RmbVxnZoGjni1Xzpn1nc9cevwrTAhLeEWgDpE",
  "key36": "3TCV619RWyQv3dHRvXbf6jyv3KkPvrpi87NiMnBPLRZD8WixZp9DEApDKD6JZryTSqi2aBQkz2Z9WEBxNMtyvp29",
  "key37": "4TT7FJVMS38c14aSGJTQQPK419yNFGDJfzvHCTGccewJeRYJe2amdv7nScBEiPFoBZteCPw1dviFQnVxwEz7c7Fa",
  "key38": "4Yow8TVK6GdaFRzcLdbN7PwrifCv5KKk1W8YKWzZSu78jbVtLEPtLXW7Gr1qeuLyf8XkuWEaaYZYiyEnAuUkKaEp",
  "key39": "t8W6RH5Be2SHj3sXAnT8dAxrkJayiscnmzbNPivbty2apxeBtUPS37nDcv1EoVUy2BDdoDv2qpth2UyqVh8RUzG",
  "key40": "4TfL6nWakpPg4SLqSDpnXEpWW1JPTftSVGQtPVWcUEQCoFyU3fxdm15JvrV2XgdVHKK5cGdKoVWuZ3qSy4txeRAL",
  "key41": "5d3BrbinY4rreJfUU974Pv9qomd4TbcFCQKVMs1uvbHtsinYxwb7XzNSZCcLB4rzudsWcuGU84HHivLBHz7vgss",
  "key42": "4KfrHgRVJMSvfVJbjozC4acnNRZrV7A7kcV2y589YiN1p5xrHKk8EBZBGgrQxKEopvMo5Ji31dRVa83VgfGEwAZN",
  "key43": "2H2M2tizizD6xXaxnmjnk8xUufxBDhHnv1GW5JCSyCDbFu5GM4LkKC6iHse6tk9y1E6zJjTJR1kZ7MMWHRSGtYjg",
  "key44": "5bANvAkUAAP4CVCG6fVXVQTiYCHKh7VJhguEPdDoxcV1df3NCtKrfPyTt4oRSVeJPVbg99ginYXd3NjPwteHMkgd",
  "key45": "5ukzprVbbM4iZ1ytFmW7etkWZA1339L7sQaWz6GBBa8tHMDQBiMPH3xkYh5yRfmhPsqERad2qexagXZoKhH3xpFe",
  "key46": "1YMXFrrUhdvDsiwfd3MRRYWAajqz7nNEsjo7BwPCUh1iibVoAF1K1Lztsr4ThJJHk2pYUw6r8Kx8U7MoJ8MRnux",
  "key47": "5TfqadfDud5MCud41urbfFsRdjbY9QqpaAwuwNxge4EiWYvt8ZMTQKgxSSyR9wcc5ZjbuPnZM1CRsyVuD3aG8F9j"
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
