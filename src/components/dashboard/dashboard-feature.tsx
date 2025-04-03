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
    "4jC2FY6Su3ToUBRh3Shsq5LCqsgft7ANF8AtYtM1UUxdr37qgp3HipvKG5dC19qdqV7yCDR1XcXkWjHnK45RVrrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63FyjdefHQ9FxCBfvcgkiMb8BYhjNygs1tXNALq9sd36feGzYzkKoukqGAYzrHE8c2qwrGiV3VM4zHjCK5nKPBLR",
  "key1": "58EyvphCDnKFBbm5eLqg9LAvs3XX2w3bf3To5AuVbrVsv1RMjs1NcqLKkxrgVcPvcCK5E7SvbPufVBXZ7dpeeGNy",
  "key2": "23xCSw5Nvbfp1ss9DSBP5qER6eEjGjaBUiibRygCpXioYaoSTjvZGqFbjdgJWUcAFa8FaLbXYj9b9kZKqqno97US",
  "key3": "4AxEDAfaniDuYW8N6Q78oyNwzSnTmEJ8fUNcb47oEQGwbQN1j8fuTEDkQfPfAL6sZ6F5oZvXoWYMsMrBaXNCh2PY",
  "key4": "4eY7n23dxQsps5bLnNcbG26MreuhPejnwpDcJHBpEcnDSw6uKixYMYojBBjgbRMoTkbsbLbqAkkpFi12X2EQHZ7X",
  "key5": "59PE3iDJRz2ygeT6Hn1m5jaQn8Ts9EchCJZjMz2DAjuEuUGo2GVctKZDg6oVbyGWMjU5J3Y2oKKComhSRDFrKBW8",
  "key6": "3hCjnN1LsuJuUz2GJsoz4gE1e2LBEGFYvcCz2NMcYniZemb8ejNjZbf86kCuyFL2CYeXzioJ9BjwfWQ8KZyKcmJs",
  "key7": "2NdQ7qWwHhJnzkx7WNf2S6TfDwYhYmE4KLq9SVhkSgX2Wrd68SGwaN9kZ1qveCDUavVXgrgtJyzB2RdhdVSFa46K",
  "key8": "1rhemhRi4m1uBKbBHZ47kYv1VHbgbTnLCuKCvk1pYTLGSE63rHoY9uZP1EG7UgSEadUR5y2hibjNMVwZXgw9FJ8",
  "key9": "5YGkzmgGfM4dhyDr1FAA7nutwtQNWQifsatgpNAshfvHb9LWLptyftDMWJF1FJREcX8jiaTD6RUYqKAY2pVLFvZ1",
  "key10": "Sx5BY4jfVvTbAMHmhxQgQUgPUzjjH6kFFatkF4UxoDAzDFV8hYLp4LXDP9bSnJrdUEUyALLJv8sSUpGJgxg4XER",
  "key11": "2Ws7caXnMVYkW5JUUYK8htaNkkLTKUdGEYH9jRRYgX53w7E5Wr2FND5aQhuZFrd4UE24P9w7VsMFV7LgBa2d2UXd",
  "key12": "4A1V2tjKyictZUnDRNhvaoYFxmDMdT8pMUd2rNL6S2KwikByDaBNssZuMEJeZ4GQtsRUra5z8Kg7ZhSV74eJeLaJ",
  "key13": "2MoG1LY3ARwAoqNtzyE7sU4g6FKvaBKQN84gnqbvQjgn6nbtaZCs46ddXeRLmaftVZHAGVscvYekrJD3R3hMb7R",
  "key14": "2hFZH48CoC2CVtFbvUakCCnvBDSqbzWm8cjEq3Tnz3hrS43DC8AR8Z54mr3jHamW6HSppgtCwH2wemF9a5diD3s3",
  "key15": "5Fs41SNcUmSqbnv8PkobdNpYWhRPLs3KxZgcBkfYZy8TrzCQrkQsWyxHfFeudBE8QNgerQ6FuBQwvpZYDWt6GXAn",
  "key16": "zkQRNWjzitPVrm8BPvrfbCCAxYGtWEYMS4Cty8X1Luxss8Sfu2ubkS5hC9Bm4JXc7gQ1uvFzAn1MvGrqyYWr8NA",
  "key17": "4r31mLt87C6cR8VArJDamaxMuBEGVHW5bVK5bV9rGoYcqtnvrTkguoDjZuEn4KoCJ13yzcTvrWg6xxh1QckrSRqA",
  "key18": "xtZM8uKXLA2Yq6sBdntuAyR2cxqNfDX1uYdb4eKtQGpMkT3WwDFjq1U5LENKhAKNjPm4qRGgD29Fc5zW9Cw58jt",
  "key19": "XDoFU2NE72CNVMy5ajxTD9rNWFHbv7KNhjZXLPbb3VfMCr1NrQfy1b34JcGuHNyQqD3XYVC7HYCvPm3jJPXbRZA",
  "key20": "PHYoCayV8qiJHM8N1pgfdEoKTByCNjpeoFBy3HEJwgMYA1Fnb1FSkZvKvH7fZoveSNYYSwA24fsCpwDrwnhF8G3",
  "key21": "5GM2Rxj4VLvFtmigw5Ukf8ZeWdZMPqvH8Txj8fc95Spu8uvp5TmMu9fv1fUcLRrcMuKdFDhNAJpD8vAiCBNAbrb6",
  "key22": "5AcpNp6F1vw2qoHBrzvFfpBRhAGnab7vogybqsn7j8ekqk1VYoTaWGRBpN5z6g6nPb51CBX1YhoZQHTeSE5MKqhv",
  "key23": "42mN1vgpnu8dUEXscgBjnNjXbyGUnQym37yhSYESpBCLyXKXKygSvYb9Nzx8FHiRxnYZmQR6gHL2SZXZNK6san4V",
  "key24": "57SnKw36A4s8RrMsphc7YuVbKLfSuVZskR2cP51jo4Yjdp8znq7LgNvxn3sPfzNsYfeZ4HVeSH6GyMQPeyNkhyqp",
  "key25": "5Rw9ir4izcifRFn2qK6VVpFJy8wYyJSkqtF1wA5MoeL1qriD7kU2bhR878bMuuGDYZwLPvFNSG8QZjVbuvFcUw3Y",
  "key26": "5ucixnEjCwkSF6t8E8c4zHZ6kEstVPUxj9Mm73C8Zmjcwa1CRQKyZvNrsNZFLjmJ5r98Jzfh66L7A5kKfABbyUaB",
  "key27": "5NjqhyhtwKWcgZbjS5xRCWqFuQWvYeg6pywSFukoWQna6k12FAPwjkfGqVNofm49WpdQnBdHtpSXArpeRbomML96",
  "key28": "3DW7MSBCsGrNwJHjkWvdLmV5W8stLauJXxuCZNkMqVtuyNCQsbwRVBpr93gjBJjJtydDNBh679zGuQRkQycJU9wG",
  "key29": "61srwmABqv2HTuMCauuT6ZtgveJz3vcfCLUE4ocu2K14vUu4RJywUhq2whNXEH3VjZ7GhmRARu2Zv9yQTk4AsR8t",
  "key30": "x6x8H22qDQnW5pkLcUNt9fmamDLSG77Xe3oR9g1C6a7xgP1wYRVhW8eDidV96brYZzjsSwhJMdpyRWLgcEzxB23",
  "key31": "434fVYUKfo7CyJDFC3mv75jJZd4gJeCcZTyho4p8Lb3BXNumGpdBVvms5AcCZxj3kZ56GMTMPV8xGN53d9sg7qc9",
  "key32": "5R3872RSDvzwE1yvVGSMKDHsDWM63weBDSDpG2UPXZRTgmh5yrFLznnTrUwC8dFDWz8fst3vxTojK6nd7EhdZLxV",
  "key33": "4HwcBZ72rnuE2VUoGB7L9pqVvKXZZKbU92w2wsUL9kugs5ABi3HgV5sd1E1zNFSQ1xqQx8QP3gg9L9Mux39wEcGm",
  "key34": "rFG21kDDQhSYtovDAe4ywV5B8mtzh9MNaphZ9eSmwexu2Gv67gyH1cxa5j5DboXAkmHy1yNKxCNFVdKiJoPKu2s",
  "key35": "4R6iCvqQLJ6TWJRcb2gFPi3zwnQhJ6RU3Phf7g22VWpFRxiWfP8dh1Lsj526dMeTKnqm7BuDvat21gF6VZXo9HjX",
  "key36": "2RmrTCHRRQV2ZoJCMwXAjyUfNsZXeM8c9ACY9FbgUEoi3oiVb6DGFaJ793ZB3cquPfsX1QdppGYXTTVbcufq4MGe",
  "key37": "5DitrBRkUSGDx2WvD9fMzB18T8UZ6K8UFn1en8ELZcziNitX2yeLdMhHGwRYSdMnAsAEjXxgyKrhaYm4NXAibnjo",
  "key38": "5Gc9ZddTFLbmxCvs5YrNJfR6ZWSb9dib7MCYyTHgtTjGv3NSmqgMASw4UTRP2WLbLZFGQ3fG1Gr6k47YnLXqsvLR",
  "key39": "28sc2Hb5B8dCUvm8rdMmJXxykwAZwCknunLicauTQAHAWLe4czGV3A8PJSQXvZEunFwzf4QC7PBczLE47tLpRiAR",
  "key40": "3uzjUU3pUnaZqY64yH5Yipn4ux649VNAgmWdYXpyJ2nYvX8PpaPs5YaqW34hNHRoYkmaPoCurC5zzAiPYReJh6yM",
  "key41": "5D73fyAXJ3q6TVRq6aMSAir7zZbdJ2PBua11Xe1ffZHMDZqBeo8fpc7AELUCWqVQzUQexb6cbdyeubWz6f4GkGVg",
  "key42": "37KNGoAz6P1iqbyNo9hUjpcD9Ri9dcYN76n8WspZm3jrKTcJdFQYjP5nFZXEhZksny8SztxRLWvuNGyGivm2QUe4",
  "key43": "3fVK9cqLaqqrUyBpPUWniyRvQQtSQXiSdVXuTvL5xbJUspHKkzBRFuyDHLccg4aQph2ge8putvjhAyPWniNF6x7S",
  "key44": "4EunrVmBTtTHN1APCeeaccVbRpftmHRNgnPUNKZZExo1newijfJZJEFGCbYAfMWU3FZ4bjy8uxRHogsQifDVSTR"
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
