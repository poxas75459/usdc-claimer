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
    "4kg5aVGcVp8dpiARRz5BsCv6oQEWo9S2oVq4h7GAqfnJvQRM7XSceZTS1Nbkaihy8nDdohoZxkX6kkeHvd43WxVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nssb7SryWcK1z5wwSa1QqnUsz64Kp2xmoL2khusDbjqsNitZWHDV2xHB2UPYMgnN7P7H7mgAprpHaraafKsHkby",
  "key1": "joJahEkXwZac9C5FjzcYf84WNxZJ2Rqg2inTB2fFYbFpNWvWyjzdCJfBBnNM7PqsT7gPRfeFNYsgawgLGdT8npL",
  "key2": "BanUj1H5chpz73rf7ySAKxYi1vdjkBrfjTnxd7KdpUhBwUvYF3MxD2HZb8r9QBdWJcRPg99qNMc2Co7LMCdeH8w",
  "key3": "4ZBNJwhTwxQ46m6CmSuiQMfUeoLraPGPgDjutGNFKWTygtQKs9PdgPyVvsUEh8NDtoRMSShW5QDHL62sBPqZEBCT",
  "key4": "2GBQhuvCvcB7XcTVwXpkvfPyaze3CtBgGYjjbBdqXZWknnYSEShcTzKpdi5h4FDtSwZoW8iLPRoLWhDNjsxndSLP",
  "key5": "2oLstgQHXp6a63bQWL4HB5N8kYuPpRo53fPjKL2z7pQYpUQT8Lz7fyjEW2LYz7t8G8ZMeC7xJ8CWGd6ewrGdp6XR",
  "key6": "4RgYZoEKsmtFnfgC2kJvP4cH3YtSsh8SZvwLbpCLf7w8J2WNZ5dmUVBFwKc2Kc6oYgtp2Mu2kS4rW794UqNp6SZn",
  "key7": "4Dfskt2hVPM1BcPUmd2cfhgpd3oS4MYFPnUx4JGr4VzCRiFrpeZZX3cTdETUyKUwKFHRTx3SZxWmBFoLwfqwd8Qh",
  "key8": "5kHcLS7CrejVNCHqE7HKNdZ5hVgNnaSJzGWFgQtpSepM7En7bfEJo3HUvU2H3oGTT2paCAy92fZP1F2vXGVBy1uY",
  "key9": "5sVgmDFJikbgRvBe9gZD2iSdFhQffbVCkWBNTCjLvUBYLmRFw8MMRMi8TGQawMdyzx5Jz2KXq3vxkkzgn54pFV3y",
  "key10": "Ue4B5EF6EEEBfLgEh9QAHabs1GdAAMsY1YNcDeqm8pHNCMDUJxKCVNAPUbTZ6zr4ZCsszvbcnafdwW5EMEMbwwV",
  "key11": "aq56yweZZYy8AMSYW2vMtxpMLfhBnKxYYUaXS9UxFPc75boao363nPoBb2b5wifWaAVMUJhgPYigTL13KDZUiPk",
  "key12": "4dKxNGq3F64ctF2Q5Mvi6NC76L1AmvZ3LPZic93UgSShXLuikPmQHvjULCRcjdsnpMzpd2gPg8kX77j1UZHGkUSo",
  "key13": "1rAJdiAZ1qC7rnempJPG243y6seRpXNGccaUyQJZMHnTSPghwZxhBi3MmPFqzmpJzejkXuSBTjT719BKmfab3wP",
  "key14": "2wdnaSbCSw9xmzcB2qg3CPDdVit7u2y4tjfEuRJFshpoBotFZFxMZgwqAvkPYJYRVRerFwMwXxPK4juCaMeTfxra",
  "key15": "4oCh3zguMorqEAz6snfu3M6Dn7mPRwhhdJMi4goVK4QZ8CdqXsyXYkVXqFRSvffsNFgT7nDH5NGVp8oJrnPgHzSq",
  "key16": "2HVEQoNCTc2F48hyyjrmAMF7uBzMfGn6RcbjBwUXLnESENsUyaNPTTKPgoCJ1PQHK3agV1oc39fuGKR2cbLPmUNS",
  "key17": "3NNy4J5AyWSsRKr8B3Y9G73xrvisLDJq5WaqRwNWoaLLUZfCEkNqZDrba9KLVEetXkGnUHzqhVRG6maBAZmMBYcH",
  "key18": "65VvJ7CfYVXbBD4MztzyAf4b8tycy11T2snuEZDgbQZiLnHR45jr8VxLJv1PvZWMYQYB4hFxkMVUiQ4bxyQgvFfx",
  "key19": "2KPLkshuaCXqTj1a618QaCQXWiSAJ89SqtCXEEjgPcGVtDzQPaWtqCf6zN8T4kE3hpaZq2qQhKZQJ9EZakTQ3WBa",
  "key20": "52h89NqabcY6ZeNLJvuMUPfRa9ZkxAWn8q6MJVgBvnqiT4wpUrbpHHtW2Rpe5Rt6zBxH77jmk2ZpjpY6Buq71bj4",
  "key21": "67FNo426dabAYKX4RJZHWDdZ6zLgiUvDYiQXVTt5XrC7oDDDTHyB16U6wCq2FrG6ZXCGHDm6kPSLFtJ4TR1kGmdQ",
  "key22": "5biNbxHN8nSRZZia1dM2Zqk6vjYRzZw9vjWqioByvuqij1ZdBfsnhyaDK2jZ8faVs2WaPJY5zC7TWjuey4SMXX93",
  "key23": "4H9gXA1vps3vuG2PQDAKrz4z4uhVuBmTy7936pp4bBsw5ZVryjgfYecYtscpYHMrebp1yBttbmCL2nQg1rJSGG3i",
  "key24": "xhG1hao5jhwxDBfhauHxsf6f8FDTjCoABjhYhXe9X9TiuP3pNj98y6tdESyG4TLTw8h9PuuGMEp6R3tSGRDZBzp",
  "key25": "2yZeAfk3QapKfmArXaf3FLcUvccsa6uDvkStQ8GNEbQFh22GhRrNbsHAJ28CRywrnCk4ukT2RpTPdz2N9aSMBB8K",
  "key26": "DLES6iuskUKiGbRii6p5yrgAEazveFNHcAjvt7tkQHEwzS4oPJxKVnasy7KAhF6WhKr9PjZAS9aokiBJTUML8Sm",
  "key27": "F7SCpa2BqixBsRofYhmSjJy4SyAYpXWitDeDJamPMfBHjRzrU8phD5vp7a2hspXVXduU5PAJr4NcaURRzvr8vTx",
  "key28": "4pUMffpy9HdrQHEbyPF17bpQ27km7hxXKSdnmWpkqGHDBhYCBWNg1x23WpZDPjjCK6gERAU1o5Aysp6vpMTnZxYk",
  "key29": "6Bqq22WcNj8Mk6o9XfQkv4iZmoPmUaTEqQW1EtcTiz4hDyfcDaPKzfNSrh84TFgvdoGzPXVmebdzrXB6fxwzcEi",
  "key30": "4N7eaeYzjNazdL9gw8cwRLYuyS1XCRH9zjKeXz996o3J5zGShCHJVvVQ7n4Uwavkq6Ewo99SKXqLFKNZjeniTy66",
  "key31": "25dTq6fjdYAKUoo2Dd9bcTuKrhpp2onyAaSshEmDCwfyVDagVDTgcjLeCwJ79KkdSCd6TzYFy2qTRypxQBt6Aec6",
  "key32": "jAM6e6FuXJaADw97AMH2f2xtWGnRcL1W6c6QoKZ6G4FAcjrhY4K2My1mJKByk5AMUoA7eFfh9iDUSZaeWmMjAid",
  "key33": "5k5Kcfz77qXkURdpY8cFYhDmxGB3XX4Xz6ybdzDKAzxhRngkxXG5dWLNaWxQeqYMa9QgMb1mmghJUStnkdPdj1Lq",
  "key34": "5hFN9K26oUPBFBPnQASqjQ2o2TpDPe8KQCGrFPKNBU6EaCDZ4frn8QJPeT9HPfvpiGeM8DMmcgyUnaemvTTFLwZ2",
  "key35": "gwJBrNDPiGbp5HNngzmkm2auYk1oqt5jCwTEAdotjBqSPsg8eS1VKpFJ1TvZJdPAY1zvRrV9mdK3166z8KyCs16",
  "key36": "2cVVDcNqKuDtqyF6dkoy32AP2cprFRtj3WvoLvf6MrW4y6gy1pEQaJzxWJLwVh5bMHG6xXgiePkv23DWx2tLo5ei",
  "key37": "2e43bMr6W5YNY4FQ7KKCJqxjLK55FwsjXX8YVJ7taviMM9JHa6iUYAZMSyqgKHksmn2779LfeK7HPm2QTGLnLXaW",
  "key38": "iWb3HXkaUFzzBMJGGeBBZ1FdvbABPxroGJBXzxcaitT2nZzyv3cqMHFjVSdUPLSr6heonV6MaLSGVZ9633YCmxi",
  "key39": "4Auww9u4G6cdpZqn9o194f3YaujdQfCQbs3ssLs9Da89LY1a4jQW5F8ncKohnfrngukYDDEr2DVhGT8HQ8HeAysX",
  "key40": "32t983ioXicvTjfHSreVSHnXCfwVra7hEJ6qV2ByKScDDmvSwLrFVyksVvZzReUjXvUCbKsMAkpwk8sLjGG7f46N",
  "key41": "2unefZoD4UecvvQygQKAKzDQ3DJQo4TH4ZSdKn67LdVMGQ6tHA9mCUTC5jGqZVSmamVKhjar4V6bfUCiVnLXx5RP",
  "key42": "3gb1wHjNom4XLXxmCtAwLRWBYDyAPwwLZrYBtEq5ZcxBADhKD7Dm2x8jKoDzDUQH4JiTWo1ZxBY49oipTW8hgEDW"
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
