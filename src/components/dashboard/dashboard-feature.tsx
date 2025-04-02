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
    "2v9F3npWNBsAqRUsh7puJFbGj57KE4VXGhXx55JZKUma7XRnYPuZ6G7yn179nVETcD2XDo8yUPG4oLUUZk6j9JP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "swQq2eP88T9BzMqQVjjKLR2KDE9n5nnm55jhqRLn8VNQGuxwqF1qGwc3BBvdn9vZWfm8JAJYYzTmtsPoW6TvVP1",
  "key1": "2Lg9bnZTgLpkpDT3ojF9nzZ7rDeqJBBM74cmJ4NAfiqg7djAzPi8G2LMHQpFMNsWinV39eWHhLuHmSpiUnFUHz8o",
  "key2": "3rh3fJEX8ehNAurYqC9haDCXMqB1pWtd6pETAEEhn6Xmz6wQw7UX8m3siu8tnimjT2UXhBfSPBrxkLaPqBQtGYGp",
  "key3": "41NHH5ff1w1rmGU9ZcBFtgvvU1zhc58yJ3GSNhAsw6KwQhscuywpibRvjbmp1FzS3o8fHBtxMmkUgVrqgwCuTDBY",
  "key4": "28Le6232bHgs6oyfbexiBCSwzk2673PKaMZBNwwuCfZ6saMBUhwWivpM1BtBMd8Ch4CCMAMNGNzuHK1pgqCTyA3V",
  "key5": "4qrma8rpqnDiXkSEw3mxVy2ntu2oq3BgrPJHNY29uGQD2xzkXbEWHiKqZoQ4teSsn7oBgfiAq2F9T7v8yerEBtcg",
  "key6": "48iVh4pnFWrXeZ7oxmoB1kCK1MDDh5HGTFAQbSu96PUXnSzJPND9fVQbuCiLjbodJEwwqTWf4PFFrDqTLe5s3jig",
  "key7": "2mnhuq7KEHsTq7UBi2pqwH7EJeRHCKNKEDLhnHPcRkfUHebr9wZ8fcyWe1n4VHVV4srNcCL3ToVheaeD8qzEDuGQ",
  "key8": "5g2ys9a39KsuoMyqzFTDzcFjkMaFL23nnUXJnJCCeZr6dxm32NDtokEAHYSrymm5JmFR4mFbvXgjRZP3K4wnWinH",
  "key9": "bnDoBjtJa35T3ijUezUXWqwZe3wF2pzXaKVT1Me3gqBQk1wQSaDSXdqt1PE2B7QvhJXwaFzLbzLL4VWSjH5YUjt",
  "key10": "33oL7cFEyjYQZ4Bg4rV53A1XTaCM96BknfFWD69UUQCeh58zbESWM9MicUGt9A8jc7LAqCAEpbnC54qbwZ5ZdzqJ",
  "key11": "ZLqdydASs3pLSF2UX4n7Rokhq4wXtS3jgfodXgmYrVXSXcnCxEYWz4PEFKwUv5qhSxAJjnEKZ1eNnEpxD4AfWJV",
  "key12": "4YVu2TKDieBmubkcUX6U2YaqfuqPegdXfE2gpDFbWdPqzzbDtJ24gdxsv3sCtZ1JxC2hyBqgHoUDHwU6PFGP1RxM",
  "key13": "UeW7KMWCLS2qtk7QJTtJr4zNphvBMNjdb6PkkbUbiQDHdj4P4A6M2yaDqPp6JZ6kgrBeUMm954hMzxvun8yrki4",
  "key14": "jqZ5SZpxNXt534TDwdwX855BsSUYrL5TQKTHqfkAiqyBrRcnBrddiPNn3oYaxLizAnhDAH9X8kXxv67V8EBp27S",
  "key15": "4cBCksR9zu7RNDtAFesEo5Wf9SVJMQoC9wxp92cJtKsC4frxWHgMnzPC5jbQ51evZv2qwNAVWJVASDYYVMADpyy5",
  "key16": "5p1fR1nBNhDyFfuVZUTN5v4hPWcfgxCTivvWpLv74rfqLxDnPhfUQMEHPz6CKxTQD2FaQECx5D7He8bugbQbJYZe",
  "key17": "5gRDeSUyURjZcsup8Lb2LMS3yCRb9tBQ6P856k8WMFkbtBTFnyenyLTi6HwhEBa6M3UaG7kjsAqVDDbqqw7gavLx",
  "key18": "5px9Pg34iboErz5D65fuZ1FFMnpU5LdN3VqK5Rqo2VTkCWsY5di3H6MthEfbGvqTfSmJp9SoJ9dpvf1yEd1igneH",
  "key19": "cvpF4dCV2YXcKdcAnqhE3LWDYk8EjMAifJz4bAaeswB35tUNtC3XC5EeN1Lv7nB1sPaKSDWjuCQ16DkmSsoPctz",
  "key20": "5rPA9NzprcWkeQor2qsxAPbosRQ4sW36iiqALeuPw6Cvsr2L8BacpKKniyUtfHBtABDBA2X1u843BF6BZCgL9bod",
  "key21": "52tUSW3Qq4iqmMxfuw1zTJRQyuWwAbF2KAv9NSM71SP7PFyidiyLMgkzJESwLZAJyEvc72jzQFaEcwKS3QUSGssb",
  "key22": "2h5ePkYezfZbGqPeiw1m8jb51U2qwfQaPzm9jTeUohD85p8qMJ5ZF1dif8Y8dfsd8S2ktj2vcKUQ88Bh1oM8aoRC",
  "key23": "5EyLkuLH2sZoxJMgmx2SFVXrE5XVUPMKeREhumDAi58EqJQskvKahMin9ZYyQSAn2EcXTr4RnLAMWhLu94vjWXR2",
  "key24": "3xRKs6k7CsqE7i3871cci4vpZwkqSwCACNXWo6WLRNPEkr6p7n8xYJRZPMLFnjBGRcUxL75eKEauk1KaNcTWjokV",
  "key25": "WNJ5NsDNnhvv8VUMZRtoHWwipnv2W7XgCstwtqHduHB4AbLqyZcojfdNmeFKg45AKDLZ5mbFx98xxB8nMcHF4g9",
  "key26": "3wfZTHHgdj8YaAugYnbaaVHCoqBrkVhJDm9y8iKXJc58PWv4CdKssgQrQvEBv96ia1TULiX4Jtd8zthjanS54y5R",
  "key27": "3GsWKRPCHDiq4chRzQoA9xExP75Y5ky8TVkN4FF31LiHn4qrD3NfzPsFKmmrDwko5hMkmK4Rn4BLGP32ergurHR8",
  "key28": "59wdG5rTGxu6bnGSrKkunbum2d8ZGw2TrdPz64Zk8QqW1Xr1h2xVxdjFMvsyqymrs5Cq8GvHm2Yr2Q7DPdc6fbQk",
  "key29": "5AURYZPTetdfhMW7hD2KZdM3i3g5r4o5jS7Crwhnjxyve9BXGb9KiGyNDdoX7ZFfNWUksDLTKyU9mSnQwDKi9XsE",
  "key30": "49DANoH7F7daa6wrXQPKCkR1PeNAZwLZqEsLc1yBGhDN4f2Tfi7yiYZi5WjXj96RUGZAqjvRqs3xRW6ajHCMi25K",
  "key31": "5LPQqcYpuyQBSsu4BLz7ndeMvNrZjCyAuE2GVrX8DXcyPyYPfBSzEemAThT1mbBhrLdnEPgPXcnbSbpzfVnDpeV3",
  "key32": "5Ctn7i8jM6d1vX4sFMJxCgUF1PZeN3t9CnFARjLfzS8XNzMkvbmzjgBjLMy9UKmr9SiDk9YmjZW8KjxFz4DbxbcM",
  "key33": "65ZwwW6snZv7iMWNP5G7fK2RY43t18kbE5CDmPM5HArxt4wrxh9qTdCex3U1PBYtM8Sgg63WySkGoeFEysWCYEA2",
  "key34": "64oxCDHTuCihNNnoVyQQYgJ3xUMNaae6QgwqepL4o3QrfFZrXbVoRiqnZNK35cEiwXQTVn8owEcR1qb2qKUPb8cV",
  "key35": "2n91pNvx497ZcEkghXVRcxA65vSV9r4eYs6uKiU73g1ZDnky2N9nAsQoicHesM16DCeWnMvFu483r7VHx96W63WJ",
  "key36": "2frBxGLSHJs54moz83BgZZ6cASXTXbt4aRVc1DrE8vnjemyEWiFgZMP9JA5cJfgwvxQ6cvCzmVVGUx7KJyb3UHKN",
  "key37": "5fE7Wq8cmXLfa5d3XUJhaZyKJEqztRpi4SfPFDiK5w3bBMAERBUXMs6RhUZYsejmPzAEUMf4w7jx6QTTTsq7Nvru",
  "key38": "qoRAJy82ZQ4mYCxYcmCQyKAQGEL7X2Jzcf1CNrwG6GrUF1Py28B9J4sBRhSt38okdfRePGj3Hv5WQvDC49kKHZy",
  "key39": "58tx2fVYnbLgRnfeqmSAm3PT9MBT6bzcAr7vCmpw1UVigqUvK2yg6Zk1sHYxfHoPAcJ1o4jbpuZ2uwisBp8xJubL",
  "key40": "5YsHCAAYSvdbSnqrJr3UQvKZL5cEQQzKpxnEq2knzg3zjPq1ShJJSUtzuMrktoHp8dVBRsWUgZtU5ERHoyt581kD",
  "key41": "dx8u4NJrHHWA41KA4osBAWN3f8EKnySzSWLrwND789cSjq33c39zvAdQhyhcGbQcWXJnbbvFEbYMt1BdZDmW6ZF",
  "key42": "5fcZfapXsuwwe36eJiZdeApuU3aT5V77sxfQoyN93RAABj7z8ka1uatQeDGuR4ZGJNMrKyYiPuuBmouA5HnSzZkq",
  "key43": "5TC8SoRuh32adKf8PYn2MRLNjSfCtBeb44Nya42xbcqLuSGWM2tjSaeodCHQdp3psLCdVozqzWmdp6bd2YFBtmos",
  "key44": "21WTh6p5DSADWvKhWdjcosC872PiurM2Xx7Ebae4xc236bWRGxM3uu87EsxN9ELgpnaMpiCicGhpSZAJ2Lw3r83W",
  "key45": "cf1e3JLpBew44Y9SLB1hkKbA9T8rxq3cPo3TrYJWFSK1Kg2h6osd2Rgk8gXCcGqnNYbNtnLRsAehLuBG7udC1MT",
  "key46": "3y3ddATm3e6nzAtWkHxhYJpfpdJ1aNgvGP255vEA61fKy1GVpXRFSbxNBQYUaef79yEsTbbc66ENQf7PRKvNPL4C",
  "key47": "aA2jk5P8DgciEg5SqRQXMGUF2jt6dcDwxn2x43GBt6uKtRAuEsdUx2iFTU8X5dd6qwkVXtfRcJyLTZtbni5tceC",
  "key48": "628nMeBaQXNUQ3hT2dUb98Dd3PVQA8Tc5jf6nWYV3KNrRJ9BQrv5jvnBzkdP4ngejhhv3z6qcD8vDrcZA6Wyzbkw"
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
