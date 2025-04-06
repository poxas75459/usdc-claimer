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
    "3ZbuJspapULifYskGYRd8xuqmvBoXPCDmdtXTLSzoCNvmCszRTSchwuuLuVJsDgWZPk3Ldhmb8H519i6BVo6pX2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XnnnkwJsL7QKDmjmWJF1TN6kW97nt9jPYZnytv1Vx6ZdY2btjsGJcx3vsrhf7FZeQhU8HyD3Eo5CL6rMYkn5kHA",
  "key1": "4n6f3DXFyw1eucDsZYE7PBRDwW1BamKKmvhn2HEkgamwX78gV9nxEpa47qU7FkeknLR4cjCZB492AXSMfryHvCK1",
  "key2": "2kywvhnq4dwz9YPqtaTwSAX6QiGNmtFuu53M9PeUsmE7EtoyY5Mc46N931ch1C2uG1oM2D61LY39iDNX7zuyCLwT",
  "key3": "4yKQZyB8eRdQk6BHhZCY28a9C2xeqHhLcRfh2JYXpnQqFX5i8ewLCVXpu5EeuEmhDRSYF977hCUacNxUvhrrAW2T",
  "key4": "5FkuN9L97AzMUWz35R89pE5ptmkrMsj5Vq9nC5CetPRhsEgWyDYj8xrqTixsrM7NAgGc153Xv16sdgkbD3tLjqSi",
  "key5": "5k31CNNDknFHM3UFJvU9FWEQTubkqEmru4zroUtKs6eq3vtqEpuGUHC6TTURaTF8eFRLGDicwP1ZFb8YF87FB7Rt",
  "key6": "5XcHurnGEJ9vM2WQZaRfvtZ2B9GJuiuut8VqKtne4XwAPKDgTP4CY2g74jyqRYqfQqKk8saQf5AjXvBma2oNnsWp",
  "key7": "5wZdrCa3XYxZP3fB6dVifTUayzVZPd9eQkUSRgsMEcgfMh65EtUVbBKUehHUimotgrDnDDcd2FRpToAq7yMjHWCH",
  "key8": "AsF8WC7ySuaL7RCNXFgY1sTyjYp7B9WKMFMQzwFMghRJqNXtG9XQei9J5MhEunBqr9jGyZkxkjS1AwxDCdM6E9u",
  "key9": "2DAqSwqLJwvhqHiBU9hobStizXdJ1y2fEnD4WmTS2UpwB3XA9aH9WNJrsfYGs8R4DJEm5F6XygXiiX4rDunXqFsh",
  "key10": "NyLGHPUmCfTkR6nDFk77pf9B6XbJ9VaBpot38xm6XGoiUwWUqJKwRKTUSMMhPPBvm1RwhZS4SEZ3MFSoExRM24K",
  "key11": "26PNiSunL2q6YhPt2hL6CwP9kLHnRE93ZkRK5ZqVVvbSehdJhF8r7YkjJRq3e4UywXqDQRLL9gAcbzfCun8iCZGv",
  "key12": "2eHZDchBVfwRKx2RYHVm2W18d39wdvBBwYjfGUKuSwiwKPPwpyTWcRWxDqKHT3apXtMKBKgm6a3nGzHqm4thqumc",
  "key13": "5SQwD2EH6jXhf2FFJW1yykzpfAU6yvKiQfnfrPEgQMY4rgCd4JeChGwv9KBEbVCPpqRdmTRMFUsE7TtjqHj5bRcZ",
  "key14": "5n1hcof4NYEKp5QKgW9J76jF8PbLBWy593KPskontP56MmEWqVSVn9hmUAmPxJ44RhH5TbpXjMwCWn7TsYCfE45J",
  "key15": "4oM1CGFrDYLLynHaTVh8p7BUTfmycQxie5KGg6ci4PwTAnJrfoii48netG4UoCFCAsH4BLc9GpdS3VU1RPtP4Bqe",
  "key16": "4VdA6JhKCpZBrpUcTgXyXZYwwMC74Py9jmm58EDxGQVx2hQkdrJrBkUwSgrsyTUsYfoM1YUCEKSqc4XZjeiskgxA",
  "key17": "Bodq2qvyZvZuyASUe3C3KB2Zi1UTJm7QctN4kYnHr6F4U1MRM4XHjW1X4QZYaUjTjApychmQ2dMaeDoAyeJUwyP",
  "key18": "3Hy8zj5Nsx6J85LvfPfiVisy893brzpY8qs4xqWZNKxvVuNxzJpjYAGFrVC2ejdPBNRxSKW9UpJQEt5LpQScW9zR",
  "key19": "5pqMZUdYtyhRenQgTDvFEsqubipsEpjLGz7rYT9o7hhaU56gQP9bpbWVrdrw8Lm9HFQcbsUv8LhZxepuj5kbjse6",
  "key20": "47pnBC9Q7bTcnGjHyzj7ayCvsRkwfd132qDAyXLJR22tDMNJ7m5RoFkS351zx3URogpqg9bcmaErHizq7FksomZ1",
  "key21": "2ercUAQRahW4sjBcTGZNcNdMxoudaqHSXUFHtcff3gKSKws7KJxoNUzgEazu5AVakhkginCd1QKf5DpLxVURbKUc",
  "key22": "2FoizyqTLuXrFk8qR82ayPs3FpU3pgFRC4VAHyiTrFmfpV4PnGUk4wvPRGKqhwCeJ5bzUFquoPnjqHFECW12mpXo",
  "key23": "34G82PMHJJqgWEGccZTaRYteRzaSbj1BxhUZ8TcFC2y7PaftBvrbAEwumnkVeNjwSE7hwJ8nqvqZWnVQHBGmLfZA",
  "key24": "2PFtgRmBzMCKhX55JBMSk54YhmBRyUnVNNoFWStv8nZyERypYvYDbDMKySknVMh5VGGCss5rUqGZwH5aaNEz7MH4",
  "key25": "3WP9hVcddJsrshrJ5ftEhXxkmUnmHfYmnyPAK3Atg5A8WhBs1tHsNUpMaRdAnwYFzXvULTQUtaQ5Vtejx5Q3fVRu",
  "key26": "3ctWYHHNCuCztcaqFJJaU1BDs3VozsPemfsB86ihGVwW2XZVqy2iYDobcXpMZhUYZWSrKt2L9EFqnRdjoCcgZhgr",
  "key27": "55fiwpgphcYSW2dU4bgiLuRifQkBC2geWVqnHVJHdHVZ846GYTXXoTCqp3fR4Cp9bzDaHPKrJHv93CGrU1kMjmPj",
  "key28": "5wzVXADPv1mNjj2TPeEpMFdH9ptHBq7BNPyXk8HfzhxTSs3tRFkFgHfHXpN4tQzZYXWEoh4SFhqB4QoiWMoGL8mX",
  "key29": "Ny6UX5QJpDxTjwn3uzWP9qyi8yYoCzFctaC2nYpUizxnXttazWt9cDB1KBkuEfTYos1CzqQ7LenkRymDBqbjKAP",
  "key30": "4FZJjAd3GuV9ugvT5MVL6TRs7V3Pk7PnAZe9h3F5FYPBYSBKGcthm2YiJ5t15Zz9KXLo3C2icEx2BVyxwcZAigVj",
  "key31": "EK75iC56hwYu3rbmjZNg1AWvrVLedvqpj8V2xcCPGvWzd12GUEZ7HicMR5YKcMGjzG3uAkm3c1te2fVymefDSys",
  "key32": "5JayJ2Zy4UY8H2T4GpJAvJsFG2UcNs7NJXoMpesiE7x9aDK91dFJayRfRxnV7P7UKCt7ZgmzscTtCApDgrShfuKh",
  "key33": "5BorMdbA91JKgUn7jBNKrfJMHfRuz3xP1gawz7Jg2JqDWL4M5toPHM9j7PJYtmozk89X3h6rMRqiXd1NW46TXYM4",
  "key34": "2z2YRV2KjJi1XsWAa7TWsM5mfGhHqVFuTjYpA3B9TqowcLiZArKyWW7ANugZjjTu9SGguLhqmsybmzfVLHnRfwja",
  "key35": "5kPjYwv1qCTgAKdbHPoK8icK2cNst4YeMwS8xrv1HsxvR96yer9j3vY7cGMkyYMFu7Vm55ZzAvLYDqJki5F5aXpB",
  "key36": "5gdjQHPJHfNrJRbwUpPr2FUAm4rdvboLgXqW7UcRbUNLYK7expArb9BcoaU4sKgeNoboe2Sv1SAVgLFaJ9rDJkMM",
  "key37": "372hhis3aiqaZeTLBw9E5xExhVoa3qDjnEM2FR8hW75WtNzAQDNS6hoqYTK2ZTWogs9peZcLK8pmW644dHVUbbRf",
  "key38": "5SqLdrUmN6Z4UmgZ4fcapb3HkkvSuKyB6UKQVUDbWV8HFcfFRGkpqLuoS1bcMJ24v9BLswvxHSBEtVY9wLW2fFrh",
  "key39": "3HFUUq8JsfcC1xzQMB8J4XSm8UB1MnPCjCy4V3mjZvYuEzQxtNre4TbaVaaCnXkSrSygVCmvTvHhqQLVTS5EyVrg",
  "key40": "2hs6PmhU72ciBZnDbMH7vFMJ18dGEVP8DBu3RCTUVowJUyVVGC9ePawkyLabDsFri6yNARZtW5dyZrE8ofbLbryv",
  "key41": "4ku17StiHnbsBejvDXRNfowW6qrQmULduPESo6wau6f7bsN14z7QAedkygcnA427zxr3JECDmsFmQbVaVXccaHfz",
  "key42": "4o8KoaoXr6BHPjv5TRkWEAwD28cLFvYG7fBDdXRwWsjz87pkzqTSzxMxFMExVoWK8YmdfP1rm24z7DsfUdmtrnZH",
  "key43": "95MVz1Ztm8vzxTjenXfTQiA7s6cFgjRTbNFRDFuovUeWHgbCi51urasTcrCGKi4jeGiVBy8oshkEjoqgjxpnbNA",
  "key44": "5MZe67c2UUxE6bV1nDi8oa1mCzTDdp2MuX1QmFK6kMC2v8AQzr6DQLahmANNqHwLCGaZ7C4H7QhA8kmbHY7Phgbi",
  "key45": "4CdHVnDcDrju9N1HbALLzrJ64o6qNR89wEtAkGYRnsBbVKzpxD65hbEa42PccxrtVGWFMmgPrv9A6kyW8sYB8Kac"
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
