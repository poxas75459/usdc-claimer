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
    "3FBgUGEjYfSNBKpDFzmw5fJFw3Hw52ngrZ4xGaLUghy9z8MuEhFQ3XH6G1zU8K6yQdHvQxFhkLStSiVSnLUeZL9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Xx552zjuRELcnpRBmAkweipxg4Sbig3JLzbvceW9BLEpMxQVLT4aM9do5JjHS7WKqy5tX5CK85criEHxYbcgUe",
  "key1": "4yWxFSocYJyU9KZAGa1XaWLJ6NGqR7GSkcYXXYsS6CiZrsrXJZnWDZCiRoxBj2WGUdguU6vPCZxcMASice61WGHZ",
  "key2": "4obEKfNQao3s4mKqb4N57TbBdCigqePQsENNGXfp3coyXipLojKvGsP6g9Z685ueNsjWRyj7oNqXmDTs78JvWYJF",
  "key3": "3JBwjK3dc1MsXXMMCTDFpmm6epBEmFB8xMkdNyanKKYtHP7kiaNicmiFk64PQ4PioTetuDXZdAgwYdFEGy2bWNhm",
  "key4": "5EkjH2j9h2kDqKoGznn91RfPNTyoD2hzFyH4zk5yoD4mgzdVRVXtS1PrANaGMN5wh89VSYkEPM6mkP2o8dGNYEBY",
  "key5": "w4qjcN8QGzP4xMJvo7rLovnvJGwGyRhkKFYcREwSD12FxF9nYEaKE3JLGvDUpAgGazwptyj5KNKGuonwSA8wPvV",
  "key6": "4m1dGZWCyCVxMkx9c8SFt8XdeAq8LKwN2TfdGJ3o4PA7bRQmQusa24xYEFaqdEwkDkKvyXzxMFxmz1vgRPXCp6di",
  "key7": "JNhCMEemGYxAxQ8RFGXuY1GHk62yTbwhmaSguej6YMMqEPVXqBEf9vbfvdf2DtsyYahBRXCabHorqVynuM9esHE",
  "key8": "53yuZvpjhwrVPmcZsGm4RQKZaVURYA6C8G6F1Hm1NfNTkwRjgP8hN2UAntDeqbDJu3WrJNpkED7SF39dn1HvVYSe",
  "key9": "2hRmzyuR3GBZSnh64qVjkSLPE6kanh9DiAFfWPU1jfA3M6XKYAy1hSr2PPk7UGdoXwrxtsLkYTmHRuRtiVYgTjou",
  "key10": "37CNBQqVME3ELQKuAoDvXBu9CabLousySqcJgtQpVMmzeX17Vrx79rvJACXgBao6P5GgQGmxYiQWr6HoD6vqSSf3",
  "key11": "2kyLqvzaKKTfvzuvujLtAD7GmsraZNE9DZRyRgJQMFmhyFHrY246pQd8NVzYZXJ8fBs1YFTaBeA4kXK2Ncdx6U4b",
  "key12": "24Svu9Qa5JCve1s924VQgSmcowXvfQHcHefYu1T9w37UpFvfaz9mZdWJihwbXWdyyvAJPHXxhR1ggRKjJfcw6Bq7",
  "key13": "mzD8YYatW7oaDCbWgw1FtyMiLMJhyaiBgQqWrF7aS9tsHwS1LZDAnrqxZpmyFwwgfgDTkyJkygwuBhtuhnrSCGc",
  "key14": "4jD6bYA6LK615U8WWcJrcJ6x1S2Ra5pFnjR3zEgoBKPep3VcDuEuxGf4gQFJqF7gbCXuXLQc5RP7882jV6m3BUUu",
  "key15": "3CKHobwAXbKrqhPRKLpc11FPF4GrgrkzWnDBo7CCcWroJ9GKomeTbuRUXD684LebzvKVYQ5gEhgVnz9eZ5zaJWGU",
  "key16": "tHeD6rv5TMHJ48nCgo4WxXsyh5MrGTQ9vAMqb6PMAzFqAwh11JAfdKrwcyGp8akEv2gWkKTf6T8PW6CVKLFLm2j",
  "key17": "4pHsJQeDEUh3GLgXkmXk1VWfqtGk1SnUJDFZh5VEe9XVb9SLR16giaUDrTS2emwiae3WM6xKMG9G2hgfrsHBuN1D",
  "key18": "23AFMHgfgXu86rM8d5JATJmvXNEaYr2q5xJofmadutVURZ4yNPxfRij5QsGWQTF1q4ebEXXtiXev8fqjiCbcjjqK",
  "key19": "4XZXTGfnLAwRJq4tFBTXxkVYCYWtnB1nc4turKcHw2AajzN9v3TXtNcKCUoBkggduDtY4ESVHTPaxngaMDQkLKjf",
  "key20": "2cSnVtqUbYV1ruU2aocpr66wkzizAgJX4ggUNPsj8CzCkzVZreQE5qPjLTcCgLkA9vdCr7Xuoa1h9epZBR5szNAz",
  "key21": "5yRMRVqLzRC6iKsPW2N1iVoPJwWTYWDJDYN5qE22iATRcBKPh7iqQ71LHFSXfJtK2BVJKXMzamhrZa1ymXsMieoJ",
  "key22": "DXdZpFZSLhuFDwjqji8Nr6aQsizc5xhhRYwppUiLr4dwHSrzuGNHYQ5qUJfk7eQntCZvwQ8dkPMStJRVzubmrU1",
  "key23": "5g83R1RsX876Uqk3g4zEQ791bZ12ppZuqD7ZASB19dP1MmFLCLqGcPvLoHJyJifM3XFVnVYJsNJB5YXUYJpfmt6V",
  "key24": "2L4XygbmDhkMvwNpyVM3qyXiZVJocR9dPinGFXmnf5fzzuG4RKzBPkNi9ss6SXLb5AgBmr9R2k5HTYzvqQSyi2TH",
  "key25": "5uVNSAM7ptH7haKrjvZZW9vuJiXGCVh7gtiNTLMo5LTwNNNeNi9811DYihE4HrrguvQEJMZL3PBzWjaqFt1YejiH",
  "key26": "51RXdt36tFuStoMLLANFMZHviJXbAChSL4kUc5umLTM5oiC4dKiFZzU3JST2S1p5YLQCf9Qx74MSRbhVE28h83sY",
  "key27": "1vhjsMwq66MWvUpG855RyqbfiDnbBSG3Dv3kho2nmQGik2VoUry5He6tu631ToaG1JEgCh3APepoqqTgzSjcBC9",
  "key28": "ry3cDZfYK2Tj5hM1XcsV2cLVwu31CcfUyjrcDpgEh9TmWmNM3a4WhPPXax13BmGPeKGMRrQXFwVe5R6qNDNzFRk",
  "key29": "4GdcTZTJmBzQgHpo4cFPSertRSjLUbKJ31LRMuar4i2ZdFZ194xZL7CMkRvxyC3fiWJPhK2WjyXQL747HApXTD4i",
  "key30": "p4u5xsjSMnFTyy7Ms5zvmip6fScscyRwTSUzaD7AssqoiDyVjAhmx99BMQuGCxQPG5aPNsxpSLuQhf3kH2SoXby",
  "key31": "3Ww7SfyjSgJPcXCCE1LmyLZR2memg9rkwLmXgCwx6bgGRrcZavKZGZQaNxMmSJ3kFvcfjNfLkcCwFgSg6C6Magqf",
  "key32": "2PbaDz4V66rqQBTjPjcWuGUmaDTkVF7yo6hhzY68exefNyn7vbtLeWCDCEmD6LcKvCpPJnC4MkpESQMVFMb8FeXV",
  "key33": "4SmMLruES8B1P9scDQQcz2KbCrt2xBicqNr42EXe69FLQSGfSWpkh77R8noG7nCrYBnN2P56K8ynDZBKq1tYoXyY",
  "key34": "4WMm7Zq6zGEZYAVfwpca4KgixM7s2SKCGUArkTKZpKkLXNQg27cSYxJpV27hx4phSRDyD1v6xSgZDkgBCMmE8Tfg",
  "key35": "2NYow4fWGacWrJCo6LSJ1Vntx4RnjGW1n1PRgw8pZNoRBQNEjYyZCHxGZ6HXkD1Cx1j8RMeccXGAeT2Sy9XwANVz",
  "key36": "52LAhdMXUQNBEp57VQ8ibpXFo5sC5rqHMurGMWZ25Y7mMWd35ukQwDd8PtrkWpWpgFqx61GHVWzaNcWFrfFDyYJY",
  "key37": "5HKCgkA9UradgPwX992LFqNatTGP97L8Qxx66EGUwNAX2Qu2HvsFxDxH6FYw9p1Jxkx5rZJt948wtMV1jU3Fj78G",
  "key38": "4FeMQTSndaDfRYH9y9dN2Wb3XLALoSsoid7BEm6dWhBeYwp4TUtTw2FDHRJ7YU88J3PvsWzknQv3sBvtH1yRdCYg",
  "key39": "tuKUCBQhFhKukPn4ag5g1uJ6yq2sU7tHzgBURiRU7E5kCJKC1UwrKnjqHUtK4Gaz4DjZwZoBokmKew5SGhnrYdE",
  "key40": "5a4GUYBbdVSrXEfszZMzK3aMEkPdKbY82k7yYTnB5sdz885WjF1zCdvGsCkiNQsKq5A8djb4szUoKxNVRKKnq98",
  "key41": "jema1zXe8Zw3MseEGvdaNxcpXajZt875u4mPqDqEHWD2otHumGGUF4k6nJkhUZDnDXuXi99Z61W4nNNW5dNiyYm",
  "key42": "5mhcXtYtL2FWvkzjWqUZBFTUp3TE1aDyoCvW8ee19iiY4vD3dTqQWiuKzm3RTg3xPdwR1qyfEbbGC4z6Hiub5kU1",
  "key43": "2WVFSpef37BYixPepUBDxfGbnCfMmENWMb5k3uy9r3xF9J7bG8u32kv8fmteAiEgYxUQaSZcGqABvvDKsCsAA7Ud",
  "key44": "2aJLi4e6QtwBnBYz6D2ERutfFJZJdXFrNciWWnahgSNYMmYPAWtRFUBeRqhuoUSEqfD9qbwQTHD5BL4Dj1zwbW3P"
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
