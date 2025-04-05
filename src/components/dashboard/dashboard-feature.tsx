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
    "KPYkhNiivJQhPVHFVNW5LbPuDG75zVPx6mPYr2fkfUwnAxCtyZ5Das9YyiCQYTsSk1TxsnXRX6G4sfU1TCxXkGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jVXFuZQMk6vDDKe11SyZReLQZPm2S8du6gvVdGeYLb8eNuaykHPDmB9vEF8Qz4c2J3F25ZMjNVFVkpQtakUX5Hp",
  "key1": "4rv9jVsT96khfByNFoXbnryvFmHaZihzMscE3mDLRwEsfKsm5k42DWZyDYfGySL7WexiA1Vb7CzsQEw8cbfjsXiY",
  "key2": "4xrWJQ7xuMd4eg3PXYKAiLNUV1dSHx6zYPgmjKTFAZLDvmeYYs8egm2ppkbSc7h8q8uibBBVXD8h6n4DxJ1rwxct",
  "key3": "5f3pGTbRkUMWoBHx1eTVUUeYgabyaSQK6CKDKG8eSoMPYAiJAGjnqhc7NwXmVoXTcG2bWScgmLd6u2f5j1YyL4Fw",
  "key4": "2SnW9CDzmN8yMAgyw9RX7QZwKfe4rDHrZzsWAr4ieWSb8eFEUosgEVbBiVbtyuuuMuUphiNmZmpDQ6Mg8UbF1D2u",
  "key5": "mnPQU1nTxF21xjUvn19CCqMJgJrxo95eksknLZjHQ3PWzRRueSpMbDP9iMa6xmwZm3esKfrJyd2Zw2YuERbbb3R",
  "key6": "3RVqfdnXnzcHypzX8pJxZka2jwFMAJdPdqs8AzQgVzpxvHU3fkBB162uTHStXaGSjRbQWsYUrjG3A2cfxhaLmpsj",
  "key7": "4jp1Gu3bHrupoYbQhSRkjCCL8f5Lq2dMuC66PgtMh5VpuhZK5WKcajUBLfHsBPYXgXhuV3ywXjf9xy41PB64hbun",
  "key8": "5GPZnUc7u1joevPvVdooaNXDfZj22FKnxEk4rVWd5oiTRA67smGEE7EsNw3oFBgidjhVFr9pwBpxr8uFYCeGNthA",
  "key9": "622fXSzCGro8a4r4CQQh85smmccQEp2ypCi3qXJcg12G9ij3SJCtx4fyCY7grpEmRdkYfEc3SgAihWMwHAPvdxoD",
  "key10": "2Zuxjow8EjMLb6yoZEpH8Uj3WFnSB8599vFog4E3ZRSxvMz6R637rmPFpf6zeesjwLYbH2gfvJiXnKBU4kVfu8xr",
  "key11": "5QsQgARMUduJUmnBWFU5uPib9iZ1p9bVWQL844yRF583RZNqtXxpEkz1BWxXC4cvzZ8bML6VPo5cxUx2JEZnPh13",
  "key12": "5Bsf67aUNxDdc66f3NfLUS4W4yxh1X6fZsaTrT7BUSTUtrDJqzeyRZ6Swwhh6mcLmtAYES2KJ73XBkkzKJPZeMiX",
  "key13": "31ENHfWEzywn3cCYCFGbzsM6d1bfVxcsgMfxXQ8tZDhMwAcrgfcRSm8bnmZ9xXKoRFnc2cmT1xz7jcyMLsKoRQay",
  "key14": "znKfFhBFSaoR2RMGfFdrYyErKaNajZ4Q54sgsDwPcZdsuGNFtKno8E1e9wLz6dyTFs8UScNpg5jCSYUSbnRpnCN",
  "key15": "5WWPAX2JE62wV7NHVzF7ezTUq54AtUJSfDYHYDiMfhdvnwpKyxTXnFEkDUWpzyo5zHFBYca4yUQSw9Xh9McewABT",
  "key16": "5QDuEHDNyrgmAenBi7Ci4RkufNJmyJGXYsQ6git542MZtFvDBj8TjMM7MBETLEBu4ya3kj4WtbrpfXZJG2CXrFo3",
  "key17": "4qvPA5TpQucjgyDXsT2Y5WKrT7NBLYNQbi1hpUSQswtBs5L8DA4R2NU9oRkVsYogxnfTg8jp4y1ma7DRQ7zRRvsQ",
  "key18": "4cjdCfY1B7rMm8schPrVcNCSh8HNUiWZxSc5sc3nakbrh9r8PV4ZUosb3YSM4hXB6n9FoXRAcUQszyXTBsLmc6a5",
  "key19": "56HcMbwL5Xc59Ro3eFoTW4WZ5ZNSvKQbn48WJNxVF3UYqsG2jrYPM3JQ5XNwbhqzR2a5RA6axD6kd8F3EYzKK12a",
  "key20": "2qjWt5x2HCkzbHMkWjNrNdcS893wMnz6n4RpaMJ2gVrYpiLqaNEk7GjZGEMvdjqdNYS8addu7nkGsCwTDx83feVd",
  "key21": "31QueCTxD1f3kjgNVHtGgMZpCTtBsHNAGWVZKy9rjVAe7Zx2Ubs9L3xHaPCDZBpgJwnP4pGwPR2mZwcxheKXmP5T",
  "key22": "3ABEEC9vnagFx2t6utTeZaP4hPsjgszfHGVwBioq8mEmciVkmq8KJnGwgqdPJoHELH6s5PomwzcUezqhVNWonPWf",
  "key23": "36XcjNFLuLtkoagXnRuy68N1bz3JyeBB8X8iyZhoBogro8kiMNWaYNHoX9KQD5R8bLCXUM3QbMCZG1dRYc719iYu",
  "key24": "4HGRK5fs6kED3o54Eqf1xG24xaPxhj2Zt6Vnghpyu9RhQ2Tv3Qy6tx9Uibp1ozmfA6jxiRFhpqGmdRsFcnRocnWJ",
  "key25": "61YqCMi6V8P6HFDxjefpRJZLZUuFwM5u2awymxtP7hBVrzGyvwqpsMUKYWPcC6wRSmkyAgRYetbvbpokLXbp5HNi",
  "key26": "4SXhabJUT6ej893RErHPURG4EDWAcpzDuzPvCZqGJzocw3BWumP66dMiYjoGcHRMMeZa9w5P85dEUZGxhV1HmjC1",
  "key27": "YqGpkGJcbt9CdUGTTdatcMWyDmVgiZ2CQoqrrvVZAZoVbUr1hEkMSgcbk87EawpbPwDjjE2gzbwmFBQteT3x8Po",
  "key28": "4cC9UriUY1ZWF1usmm8k4QRbjE7XdV6goqczseUjWnsVbrWrpWWxoHChmg97mTcquUSJf7hnyD9Lif4PLZ8iG2Bh",
  "key29": "2XFPcsWCc6gWR7s8maDDS9VhYD2TpXCUGnYkWZi1yq4mDaayzmksupJLzooAUFLqfH1BfaeY2cd4CHeQAa3tKWsK",
  "key30": "3qoduzgLP3bTRE18z1dm4b82epr6hVBSLhhWdyr9ARUUPNtgprrS5tZiskhMv6Cyjt8ce1XMY4EYqepT2b9wv79d",
  "key31": "3bQ5FfbbYmBb3qeih5zcD1J2f8HBdC5paB3WEtpUq2mWhZxTTE3utbjzPY1QYpqo6c3PTLrF7suupP7YK17qmx17",
  "key32": "4NSxERjQBk9AH6gwa6JUodPUzDKCjyuymrH14jHQiygsFQHELx7cpkEo8uSEFgjqQPmnaoSDp9TTQtntDDDPbkVs",
  "key33": "4B8iep6z4FgHE8vDKZTvbtsSZJbgSK46XL7QxUdS2EbC5CiR1AzRAoypLqZKf1RQazhSPExhhZqtEVucfRwDLrTu",
  "key34": "n5jVzQoTVbe2iagB8i3o8xhRgHDS3VipKPptcmW8V6R8xSMNtv2GcZvLgBZXJknJjcLyFqGb1mnZMzcpVs6YrZw",
  "key35": "2wSQT6k6c3GAqXiTyzygLFwg3mf7AGT2vSuhU92RGV6Mi8mZ61tG4wi7ec7NouARHhQLuXwiDJi6fGfRX5GAn4W",
  "key36": "5siDtvpAwUHGR8rrDcyrsMTvmWHkLzVjgZLdAEyKCk4Qzk2wmNabN1F6DUAdQYLdZRrs4c8vjqNL1qxdK6ZepyAs",
  "key37": "5AdwFJ7Z16gxHft6UGY12knKEcXzKLDZ1A7RHE2YoB1v8s39uxvEKshWiwadYEpVrth7UjnMbDfsPPMdvzu3cRMz",
  "key38": "4tw861pFDPF1wKZ9bDeVridE73cfd6kixDgSf5yXP5P5HkJy7exTZs6b983xZGePXkcMD3156vzWT8mMat9Vj2PE",
  "key39": "23Ks5WcDguBU77noHncvuBt6oETY9hehW9JFAnyQBR5xc4PffQVhHTsupE65SAxGu2hNa5kX16YuBnpkGJWeqx9J"
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
