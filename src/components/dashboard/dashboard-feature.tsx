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
    "34B2qTk3CcnigDaaxG5B7NEx3MbsUsJoWmFyz3jZWdooVYsDvsm9qdrJfQxFL9cqygkUEJEdfXatDDQV575RecZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QsdBgavBHkXCLUDQBCxM5HWhssbdY35mNRqi5NxUoE6j7MgF81TcXW4QgNhos3GydAdtT1YLtApXygyerwJXQZj",
  "key1": "4PpCXs3oUREhU61QeqezvYmcbnwQKaoGBsJyxpQ2nJGwyiDNb7kCgwtetJXDrmpqeFeBCUYBLGdG8Ys28g2YanVR",
  "key2": "YEuorbHQhZ3F4pEJAC9iCRHhnYrisqG7DBo4T4pxm5NB2GgUVN2NftdBsgf6UddXMXsd8jScZgycMXCCkAqyp4U",
  "key3": "5twAfgXqToLAHVSVCqSwKuDpYzNWedRxmeWkPx7SvFKpbR5FVixvrBUuPnQkWYbQHU3DEpcgcMqLbBU97rKUKwV5",
  "key4": "daVArw46Z87TZmbk2BU3KR2DSJ3VfBCn9HYwzYJJsj3uKT6xC1Li7Sqryb4L63dTRf4FiPFp13KDPmAZbUCy4WD",
  "key5": "4NhUHqPvd7PpxwdiTb5KQoRjUd1Eu7w4HH61thAAWg25rRnNaY7A3PcnpbcGS3QJdDFm3DLUbPJ2mKFU2dL3nxYQ",
  "key6": "aAZZDPhGjNEHXYHoWzSyAbosDtrps8pyY6WSVUS6wEgVUY9QUNZfvwKYrrzom9kHWrMzm8RHkHXdqtnsj51W5u8",
  "key7": "3tPuEU55cofMencCFS6C5kKEqQEnfXtRYw4v4FEL856go1Puxp9aSQqofosuohjPksKj5PbikKSHwp2FFk9ZB9vW",
  "key8": "3FoTMBjH7ZQSixTxrK7qV5Tnb7USSSZh2QxfwwfRj63eiufKYQEmAEth2sHDZYiPUphLbGXRKvx6qzqghvqKbVDC",
  "key9": "5o4HertVQL2H8K6nXSnxokBARBmVfmfiLKxnLSZ8VHN7g3RR27Qf3CGSFeYUdpY69p9BvSMZq5hmMT7KodDe6F2A",
  "key10": "5758jqfz7MdBjjiSyH85rwtSrs59PecccZyc6BNUpkZhrR792MpTN52V2vMVsB22BR9PcVNN3htA9wDLnzrm7VA6",
  "key11": "4Fkk7kUef41hS1wsPPfiiY6Gnq3NGkZsSQQSRZrdm6fwHUgUh92hNbCk8ZNFyTDZyS4x1rY6cvANWGo3Z6GqNbaK",
  "key12": "3WdLRTtcsCvLVgHhBTprKdr4NUYSr3kFTXr9oCxLRzXeZ1Umn6gfd1wKJYL2eJCgRjg6vqvWPrweZH9ca9uwkRKe",
  "key13": "4Z5DxiXTvWAQRkXZSgh1CxMteAFfRU7gKtgwpSspfoqjzUn6pUY1ec4uQ3chbXDnwfxMGoPuioq6vWqo5BnkTTYy",
  "key14": "2vknLzni8HZmjmNC6LeZ6ATGTPuatcEnd8F3vqRxTpJBBpZTBqAGPkqj1SxiLJfMpuFammkxgKNLHuLasspPB1ah",
  "key15": "3eWMBCtYMhgubV5uWAWWQcFDWUEwe1mWsqF3BQiXgSevTDw3ka4CPaoo6V3jJyoZAYx9Jbcq1qG7PU58FqgPAWM6",
  "key16": "2q3Hm39uesAHvXr79d52toVvykXygEGbfaGLUFprRRbXKqgNREM8mjzmsgdPxsr6UT1sngUBkisF6EWTVBgeuxqW",
  "key17": "5h6gGs5itbf9y4CKifF4VYWZ5bwdPN5edf3FH2iYBhf3TXsjD9bKCWi71QnjF4vDXr2dxpB7v2Z4MhVSGGCSXUni",
  "key18": "5CdChVCfCiMynagd6EzTBcb77dXt5rxArD4Mi5vuVYCqTxXJFtSwCTzUm6DQL7n8URAo6GTMqK3vfLxeJuHAFTed",
  "key19": "3W1vmfsCSHabUtLtYRQa9pNyxd4NqYP8pcBv6ozj2FPCEtExynqx9CeTmLQbrKzNf2rt9VfhDJgehyoAvbSeE9zG",
  "key20": "2CrnbCidH6KvtwsrW5PGwsFrAi9YxD1gKay2N4PDgTTL6tt1Xan7hv687AgJDUR2PthorMJ7uPQ3Eya8aTFeNdkH",
  "key21": "3SxV1kjaVDxrfX4FcuU1yMSCGMLSbAq3SK4NcPRv4PcLeDQjgXvUz6ubUSfJRuZBfJUtpYgD3pL9FASAuMzBcoFg",
  "key22": "4SmWQahh4saEQxv8z2NcDiAg7KQqY2neW4996GKQiFfn6mah8FLW5HdfUkTQ7mZczbzB1yzw6dfwbQckvAebjJnf",
  "key23": "5HCndKFM5KABAUdYgSbqzfQta9wsDNVXzFR6CDwiF3uPH6fGrVQ3XWzbNJR8aECeJGWENCMCQJ5mUzNcQV7mfJPJ",
  "key24": "dpswtygC8MqvKMmRadNv7PYYKGqoctzwXdDPvpFqK8CET2tfzZsdV7huceWVmozdWGF8EQ1pFxammy8Rm7nmh8U",
  "key25": "59tufbM6BqxGv62poC6JzVTVVb3K1e3ZTFW1n7Y9HsFR5yddN4dyduMsmaajD3qBxdnrr7jXFwaUJpRN3iWQPUTV",
  "key26": "5YxN3H2gM1HfFaFQxUGXKXDezweXN1MGCjqLcTowzfP3vsvtvqNuSFxigTh96ovXC2sd6f1Wgmmx7zk1WzL27ADR",
  "key27": "M5rJ1rgaLL14pgtyHt7AvV5iEHLLAjCFJZuc9wwaY6SuCx81Jj6MZf8qMh4PKDo59eGkrm2X1bDqGvn9biWgGB6",
  "key28": "3Vh927PEeQzzfayPDyDZZkgtd4VafYqd3ur3HxVrrAo7D1gFEvrfEUvumMoBVEWaw8PHmMZJEGk9KFaWynCDvUSm",
  "key29": "22M9TSYwGkF7FLouNV3VZvhvWYze3foH76fA93uSsSvPTVQkmUsjXAURpdWu9MFv8a9Cmgd1hzXdJ7f9gXPiLfVw",
  "key30": "3X9KmnuoJvvNDAVZUuvHHaqfQYtxEcLLgWgEdMe7NDVF7Bu6fZ8dggNisgLwTpte6a72R8qFGdfyWMLiztUeDb9e",
  "key31": "36p1Wdqx8aYiEAiQbGjt89rSed1Pd7DVMTzV8sQ2GdqMCdnXExxa2eRycGVCtcGpbvDk5knB4V8rXYP9SJzwMy9F",
  "key32": "W2UnGhENJS6QTM3SMeUGLTXadDkLUZdyVExVizezRnpbr7sSqeZWA3mc6BZQhveTKakTQh4Dtvx2c8LY6je7Kcr",
  "key33": "2hZ4AncG9RKRCLEF8Z6iS2bkpbNKRyMq16ypQqQFFBcQPizWLrGECdrdEkNEX7XATszt1jMBvnLQT1EBaY86NvuT",
  "key34": "2yztqBjPAwriU37x81R5oKFzMnxiCZPjLLTxiCQaVunzrfSqJg94wV2bkgHZnP6aeXidNFLeEJsAyb3zf4nJpkQG",
  "key35": "2h46YsdFqWjm2rpV5ZHkZFA71VPzX9wJCfhW5cs8ffCiPcW153byGiZKLuCyf1XCTG5yNrNMJYo7fw2BhM6yh4pi",
  "key36": "56eb7aTdaWrjLoYjpZMND76UdUVqZG6x9dhgHZsVY7QvqVPsjG8QjXoY3MUxJNhmp69PGfcwSD4ehBML2dgFZkPD",
  "key37": "oYxYSibYyAw4ijV4nmgvzrzEa8w5zXJDVn741kEJZ5xvHRerwqWyq1EDGtmLMyuxJqGqjDSmMU7pUZv54Hmq91N",
  "key38": "56pjUgVaGUfapcLAdVAwFJ8N9sXG75tS2r724K3fmU39JNyFavzriuMnvwHtAZxhvjxFUdVadgdbcLz1Q4SeDRZm",
  "key39": "5YNuymwpetvYxRbffAUQf7e7A4dMU3G7Q6tnuaPCh3iMHU3jFzNmg6ZsWgKJCWJeKkLioY3XQYV5xavp3H4oVBf9",
  "key40": "bCYosqdryB2uGqGmQ71u7j4gTie4fRu5uexgkZPa4GxQej6C692jBVvR1LoQrMYpi17ek4ZwL1jVPZTFrbYEwbh",
  "key41": "3iim3h8HdjrrGcGMxjmzD2q8efW89jwSvLUQdjgEjtFch3xXfaFGFiNAX2sKKGPkiEpJNxEEBkVKvUnEecHceURb",
  "key42": "25oX81s2YbJwzgnL4nB1Vs8xaLeBu1MDa7J8wLJgJLHN5TeokVqTfdhCT7rSXrtJhR3GaQMDUuqLvcbxp1CiaZGB",
  "key43": "4XAGAuBzSguu2sjfSvxC1bFY5URSowZA6xapJex64V7bi4v4ZQtubgBpLuo2NqfjaenQKJ8xzEQrZtJE1D2SQCV",
  "key44": "3EtQrTvUNH7NDNagvCMDNCc8i6RLzCCuxyymabAQWaJ4Ebu6pRen2vU1AymLaVMd3eVEjetGGcbaVWfM4LxtUQfi",
  "key45": "38gufjqzKziF3BnK67eBadGGam15v4P4oW1nNrpn5axYWUcLjjX7JZoTcJTfRgdZibLqJWgohu4EFAVbEv8udigG",
  "key46": "43kEGygbECJaqJiPNrPW1jy1UHWLmHvsXyLqPLirNT5hCeDmz45rCNNBrh1DuFKe4Tr5T6TMsmBGdid7wYTe1PNk"
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
