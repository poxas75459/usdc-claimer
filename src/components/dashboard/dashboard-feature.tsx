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
    "QJx61qaA1CBMVCAC8q1JAM5p9a44wDwPPLR5Ay2GrxtWTDLFmXAX9tLyV8icJF1S8FG8xDRchKDgspM7Gmi2Cdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C7kezR2VZFudN2XYhPkQwZNisNPWrRdojpq58hXAdoS7T7nVo27xegozxRLF1us4SJUkEWUHMDYnESwnnuuPt9b",
  "key1": "5pFxQmYzeAWAfYZqmoDTZvLfxyfAoSEbVAiwTjkkve6RBZfQwRo2qcGtjv31mUKBkVqXkaAYGCduNAfXgTcTUKdU",
  "key2": "2CoyfprsV5QGKAPj4VHMgrMajRTZuPMzvwrvr7aMNmqKnsfbzthgVga8LtRyHxNRnYpZQcM3Xo1wrrietS6NYgdX",
  "key3": "2RGMN7xsvGsRJoDeCiL4vVh4WPzqKCNkt9vFWFbzqnmcDwNuYVt1Sqtwv6P3maRRAtxuzWT6As7DPaUhU38aGjJv",
  "key4": "4bt6iJmzmf9SjrjDEomtxKX6wZyGU1QWnmngngmRoH5eA6YitnBSfZY6FkppxLjKUmsfTgHyPGefjudomoL7bFKF",
  "key5": "5G2mBuU5dTAQbMRaiUQnvsB8UhgfJfkgQ2HUBZh2gafDruMyC9HRo28Xrit7BTyewPBaPuNn6ShVQ5QqoSrfZXdT",
  "key6": "66ztG3LymCw7dAMfSJhY5f5QBBqx4hBjwtgPoUGEG2f6og3Ay5CYQLUzLvQhHLE65mzdCghv3vYBgkr8U1LDADg2",
  "key7": "koqs7EH9iet5nqb9L3Nu7P42vpzTrLxXCQtgUMi9MukWX7x2QFCC6Q2Aq8EcyciYMbZ1SJFuZSauV2be3BwBYpw",
  "key8": "13djj4MmTvmYnH7NnN7ksjpiTaqpUxkU7UzyQHvVsxiFxbPUdQdt98aSgQmmxhd9nRm9BM9YAoBqFtWLLhn2yMt",
  "key9": "55P78F5qDobCGxcdfBqS4eziYHqP94PC4E7dVEKgcK5Y7AnuH4KN6VkxBqsMGrSurWGP4X6hNSCsbPdAqi1HBFVq",
  "key10": "45LxvvA3wBZLvJAoJMWq8ngECE3FGcC9ZytCcFkJNDSp3C7g5KaCQY9nsBQvTwgP15vW3xWeLmqtqh3KzVm9kLeb",
  "key11": "2ks6XwtbzvEivS8VEmWto1YvgbVZicVMbsmht6YgwfR2wZhYRJWnRFfskS6WbANsJ9eu37wBh3VS6U8sFQ1GtWZL",
  "key12": "4BcfSmZCaDDK85Mpe1JCKqAfnHsjqDMkyQ3pBcCkDU84wu66dXPUT8vPTCfN3AAcQumUXkBPS3H1qGYFt4Nvfw2j",
  "key13": "2AjwM6m3jxgbgvXbhJ7AYXYCoM4DVbggxBMdoGp8cXQjuw6PuGidq2VViTzBuxm4dftWBRnLmvEQo8bqWAyXjWqx",
  "key14": "hvbrGYd7NnZLFwTV98ho3pHErgNEdSyA4XmwSdPX6GmSkAwwwPqz6HAut87bHAi81qmRHio4hkQbZ8jxzPX3A11",
  "key15": "2H98ps7aYi8onTCwmGfbKxyMEcPN77d4K7vJpYGjTbaVsrGngMZiKLH9oD7PXykpsvzzR2gYRomakkfF1bbLCsBe",
  "key16": "3JEkBXV2Kf2W8HCMMaYcU79bVLdWxmSjDduj32n6ogz7iKEU82W6jSWwEbPzd5d7U4GxK1hRRJBViKJE5KNERDGA",
  "key17": "4D5M5NF87zP2GpWxnSgwU4X3ApYVCPT5UBnkM5qzhZgfhxpBZQz95JSVmR9oigp5waqBS6xd1BGb7CTH2BFAEfb4",
  "key18": "4fgBdak2sjPekL43ZkfM5ZBonM9xoZjet7ppV8r8CeoRdMS1LHPf8ocvdWDKZjHYdAwLCdhVLNeY7NPr2gr2zj8e",
  "key19": "PeqvAMWUN3j2wuzP7PZzt42inJM1i77jjgwajgDYFkvDmM5oGMwWBgjXBhnrYVHiJhU3cZbtqvK7MG4GrqQ4vDD",
  "key20": "8qvvZLsHr6bXDozMD7jeFMtXyAqLnXNxtsGNvibu9kp8yzKoXHBGjme1m2UwbTrLDobhTv78P7B8TBKE2wVqa29",
  "key21": "5isrSiW22Yjvf2UQtfNfoRqQyEcXkFZJyCwcnFN71gLCTjW96k8Jpkfudjaw3xH5DbzjxGxFd2wiHwvnXiJQVBMe",
  "key22": "5k4WLA4x2b3vyjhBxzuSrTSRjiYhp1JabeeyGbe9XPraaJSzwePGTqZUH9ZEienaW9m1wjaUUhrAqWJPkDnYd1TE",
  "key23": "48xmqGEY1NzsX9hx5bEja5LxjbYh1PToqtrrjZiyGipaVyzhgwwXUYmMnvXkcFbehg3wGdEbX8b5CbKm3gZ4k7Wh",
  "key24": "5Wy1aJ4V3vsMfsbMFoVqAHbEtvkNKfRJeyc7TbN7J7iaRcMRZFwtKfYHiauVfDZejajKaQwEVg6HrQtkMh1DHu2i",
  "key25": "c4qV4AUJ3fHtvD7BKT1Vp24S4wxUtGThsmW8LbVDxwMb4a48V5Pdc9xswm3i8EAGTh9nQnDQgGL2uNLVhDatqzw",
  "key26": "tukCGDHTnF2Hz3w2YNkAThNbiN4Vwy2LTP7ZwuTYP1LLGjY94wCBeiDtdbWoqWZHBiif2NHz4qRhvsTPERXy8pA",
  "key27": "36u47wVSEEEsKT3TpGcGjXjiLYze4zyKRmqg7PSieUV6KDhH9bm3ATTsbimWiWx9ekYeQmxoYdFDvrhkkeQTxrm3",
  "key28": "452EAt1BMUa4HeVEjPtJttfoXCDZBgxESeLkEKWYpHdfoESmrX6AH5rSQB1o9SdLJhixVq6LDoGYnGf2AziPmoBm",
  "key29": "a2W1693F2ddvGBkjk4V8UujdSGoGbWVNkXQPZxMzNyBLmp3dogbzC93HunLH2Ti8XHoqEwp6SdrcRM2vNyq1VkS",
  "key30": "xy6QvJZ9LjioAa2DPF1EFZc6vsPKmAwM12TPu8kzMiEmwbovk3T64Kj59bUaXZ87kTodzjBx7JEiaJhxxmNBtW1",
  "key31": "41QxXGf7PuSjuuVyGVMEf5zkN6Hhove19b4w94tBMFREggUto16h8WxY3uDFAGqsEXryRUKgvkg49abRKEFefPaP",
  "key32": "5R5VStKUWZo82m9BtvfFCvmQQkBA8wT28fnWH6QRgaYqz2wWF39UwQzP9ypBq94cMnWdKbnvm4cUds5kJ7JzG7oi",
  "key33": "4Y1Wo594Xbv5p8K53HCC7JZEdTCSr2sLZYDXFj64wFUm1R1DoZrBx3gLXnJ32a8Z46CbJvtz6vucuL6VhtvYZ5eW",
  "key34": "E3ritXnFyoPmtPafqYaKoceUV6W1FPTe26ce8uoDMbcxAhriFrbjmuta5XLT2BV5CNsysPcFiu35cokmZ3XXjrR",
  "key35": "2WQss5HRKt43RiHCyuiJP1WaSDFyCP52s1N5RbKu5CZE1j1emevnJNbhBLMir36oxCiLy4jSBdSt7y2r8qjEXCYQ",
  "key36": "2B7zF1AY8hU796QqLJmuYSxfhFJygTKexCXp4MwFzXsuprozgnpH9TELonqYQfSTcTTxA3BWt44aNbyjACCnATNC",
  "key37": "5T1AHpjTJs6B7ZL2XZJezHxKQz8x5A9zciGDzUZjpnZQieEruaUtbvegAJ8Wcgs7pk68HJbCwB8Rf1oWkMWTAwAw",
  "key38": "4eadJJpCtcUYaWtdyDtM1CdyzkJ7TEirVPGSU4yFh8LTX2uitfGPNbqrBeFGBBcAH75N4YAMBCFGRkGmNmV8rejJ",
  "key39": "4FQEaBg1qjYoLpNd4VSi2t99ePptsj6ghZhibdPZqBZgXiJKy6ShmasdWAd5U12YCiw1rMHWDVLD4tkhCQaWiWVE",
  "key40": "3tDJCuufVqKYPbgSmaiKYtT6vCdqTAguKK5zjMbtaUwXQgaEeXB5cdAktuYVEHscEuENuwr7ok2jp6d3SAZ97Q9e",
  "key41": "61CbyyZDjibDyGXY2dNdwzj9JRMtphCfJ7qwgMsKRAWnRaiDnqLtAzsPR94zBewPuRSF941Uc61v2ztvvNoJiioR",
  "key42": "3Rdrjg6ht5EN788cgGwaviTtHhMxB56oimKAFkq8rEwaqX9rVDesUuE5PRRaRNUFXEJ2b1FbR858zGPsrdbduwi1",
  "key43": "tM9mhSRHHs5uDoCbx9HFSrTL6Pq6UE2pchEt8CECmdoUJcwmqxW7uuWfFyCJbvYYPj2odgaBrAnpDdpEriQNkb3",
  "key44": "2whW5LWSyYmPCaff7hUQxuknwmMXvqYb3nQxhRYUr2SBzysrsBPG49KvC1krJt9MJSvtowL3EUAigyTKUsgWPeYj",
  "key45": "5S4s3Tf1n2Tph4KXsTm1NFrRjiiAv3VQEfvAyzTbUVZ43A5BF7Hu4UASE8xZBvEUsNsdPtK9QTUTAsW5u84h9Dux",
  "key46": "WhtwRFBunU6DYxsHPg55K8RrNg9VSm1Q8RDK1jw5pZhqfgMsqp96Yt1X1LL99TVgr5v9h6JF3k2rmYvBUX1KQpt"
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
