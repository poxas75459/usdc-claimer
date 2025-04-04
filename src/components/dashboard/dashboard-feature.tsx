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
    "3cptPn1LtQNpnNmUxtrvZWgJFHwqfyBf1jhzKbtXq8WhWfco9NQuh7jmg8UQkPRNp7nbEq2koSA9RjcLzhjM7PGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lgh7UaA67fkAVVSYCbG2E1cjcJiYmqcWk86oSBNHdpfbQU6U58RsSX7JjRFhHDBsZxGJHthiwcmbuAbo8UkUqmF",
  "key1": "3hHLVD4kcgRuTRwsu6iKej1Jkv46Dky1X9493w4xaiUa9Xykm72YNcqsKnnVYyvdcCPBET4yHqoK1SwAQCaMDjSw",
  "key2": "2Ui14NBSYvpvEpv3xNP8i8YhbpZdPj54qcgNhWmnS2hyHhiUnfMdXsqdFYLugmB73GL6gVgzhh66DcKKVEuQ4kT5",
  "key3": "5UXnj1gRC8d4dTLGb8tTikFoiiAfojPUMpP7SjBzySDPd64oEACZc5net462SUq9M8ydu11bPGyYm9JB64UMPjBz",
  "key4": "5Q8jX4uJMQnfdPog4XdhcSUYfxo7yKsPYCJr97zZ5gswmDbSwbvYMxLvhq63EM3bxVswpm3G2r3RuiJW2pVnepXz",
  "key5": "4vtS1pvugXrruDEfYS1bkGe2mnKoDnyXXNbPQwFpsV98mB9ET8xZWXdfG5FpUQiNvasQf4yS52KLPe5dPuuqkDs3",
  "key6": "4biXBR4LYpBUvbk8hq8qTvXcw4DyWmh9buAhjmR4cgbicPv1F1rHqeU96sRuM9rwjRnDRJksdnhqg14NibVs9ASE",
  "key7": "4thrxNcWFadfKP4zDQ77kYhB4ruReHje1fWKw8N8r7WGzR717usa5tx1hnHF2CfWtrVGxiTQXSn2vorK6cUwcYSd",
  "key8": "27sSAeNuwWQiXu6gELHSVKZ292r58WpJKQY5Xg4DtfXnLMCsweQmXgpGzrSbcFMHGaMWXkRRKxqZxqMdj7gnevhB",
  "key9": "2gT7VeBwL9PUVSSaQXvNRPBX3HQrqp2uvFo2adk3J64ckxFMnZ3EFnfwCyF1ncKb5aJ9quCSdVxBHnUFiZNvUZjs",
  "key10": "rg6xm6MSBrXeQ3Lv53PRLQw2iHBjbQwvhP8fTkv1PgodVFduaRoX3g9oNveL4MvXcy3t6k4TRi9tQYqtR3C32Tb",
  "key11": "5caxmrzcvdRXsnY1s1jeEZf6DdMNUUhNjYuzdY1QdMcDjGYwHS7cY1npyqGTTuj9byFBMH4TQpbqRya3c8b5eTfj",
  "key12": "3RrFYHfeBzzPMXrdEHk1sPSKiDUpqfdidHZzd6XsFZeNEPsvbG67XPws1uEESNEKzeT2LWhwhHnj5ava4o9kLtfh",
  "key13": "3fdjkFjJXqitmQt3SwaMpYJjQWBcW8mhxcpNULuBCjJ7XSi2TERc7RiG12SKZpjZ6nUMBKTdXCW6HC9k9f35Z26W",
  "key14": "5kJw5fLaQjp1Rf9pgBUdXZMSmjzzbPNQqHDYUfofqy5jxjUXUCBzDUDbTrhsQTD55ovBgtBinLBzDRqQfoyDahZa",
  "key15": "pEGddsxhWZm5FAqwzw6nxBtPXpWvosD1McxnobCg2FHz4GxqF3dyjNRtWJBVH657hpAuq51pR2mBQW2gRSsUEbL",
  "key16": "4upugdGjuRHNZLSLajnvWJFrKrsHbNaDcy5v4khqLgX17caRj1HCnDfXA9556vCpaUX6asiPZbjoTdYuhFZdfUp2",
  "key17": "28ePVqp4sUeWRV9JyTtbLsezaT4iC9Z5UFy79DtTvM7eEjCxCxJY9oYaUJa1CfquHSUf7LkqZtoyxHo9PbSqPSw7",
  "key18": "5qdt4SQrYS3bDBtiPvoxGfGBvCxRA4aBHnoRQXScYqH95iHiJet8MTQcnML5w2AKw3zAkKEb77tUbzEaghgVhGv6",
  "key19": "5LXqF873GBQCocLdZcDLSBY6PHAz4knzhhbknP8YBsjE87oCuFrpAZGroL84gFA4y1eyvZHLZwGRzxaiUb4yQVyH",
  "key20": "2VUqpn9cyF6dkhppB859LrpfGPy9TeKWhkYLRNBShCcsYW8TGzVxkzeCCHsx4bboVFWdJ7kZ3imrpwtLTNsyECmG",
  "key21": "uvbHz2iRa61uPDTdT8cKnqfgWN6Nq4XZf2pTXumG6YFGX4Eipk4ENazfa2612RZcnedw2yjLKusYBzrBqwNQUCu",
  "key22": "3E2UHz4DaWCGceqzQkx5XWQcipaqRdGVNLdCPan6eiFuJvjRxwCGMbm71HRTpgQpChghNK7Jw6HFgNYZXm2m7xQ4",
  "key23": "ngHcNSr4U3Z4tWQQgp8DTPThsKXy5tc6pZGDMNJynxh6hwm9TkSwdinbvvxHgSarHFWG3oufRDEfeqFybF1P4J6",
  "key24": "5TSLDrXwCpVXVvz5W9iHJqVuuoBXqwfoJyVtZF3gr2oNjD1rR1Xt86XFiQUw3fzkv8Wxmds7qprA8ZWkNE3vJvjA",
  "key25": "4G8S7HsRL6Mj4aibG6wu2sR5QP21yfeveiGuoio44PtRFYFw6TQKJoah6CbiHAK49f8PQFnXB8CZEZGbPMwXpL6a",
  "key26": "5XpNqroFJ756i96YPPMovQLhXrHcfVyctDuc7WCT8xY7cBT7Ynsa4LiLEZ4xQ1VBJuLon5TQVeVj6MJP7A6JoGFx",
  "key27": "5u4ScjLmmhNWEBGxTtpSxWofPiECdhmU115B4XkB7H6E8Tu7bMWEAYo7WX8Me51LeVnNmrP88N1Uc19NBZ5Hj8Vu",
  "key28": "3B4F4iocy9eL6wzL51mxmFW7jpKM1ntKC2HYtkooCph7GQVJ6eJvSnbYcVfAd8ztime7zCagruUWqwRWjt2LHey6",
  "key29": "3M67tTMLCQDK5dUmatUy8rvZhrQ9uDwCq4WuN7dmQBeXWq3PaGnJ5KomYtEK2vQoTHM3JKMnLzupfeGapXyo11RQ",
  "key30": "4rcsRHbbDrD3x2NctwiSaMBXL3zWvi5J4NdNe11UhpFRdorY72Zk585XAKVzoX4pugNzo5sA6n65zN91ubLMeYNv",
  "key31": "5NiGpF9MFqeUedNrw3wotNuFC8G3htNe1KUCG1PPBMXUYg6xKz6j8fJNHA4oKNTpwMwztZi9y2GGSEpVZNhu5oZt",
  "key32": "XVYomXYfBJeTbnsyXbLn9tMnmTbfMr8xB3Gp5oWM2KQcyj4Ekbk1qMU3GQyj227xKUe5gFm97BRf6DyNe8dnqTH",
  "key33": "61bUiwekJrQMBEQhxYiwBVbnASQzSduSjE8iqcf2YMTc3kv2M22iHMk5iVA1psmkxExcpbPYH4NEAqn8H5j3spij",
  "key34": "3ky7xioe2qgJRxfCvhiKZKjDdpMsVZQFNxbvjaULcy2QBMs9f2UHYcTEHnt8vxfV2umNx5UnRXz6hPwVtK4ryKKR",
  "key35": "4LL9KnmQVbZ4gmDJ846aHo1HTtd1MRZkq4ffRFpQ4M8GytrWFrqZPp32KSaWHDbNqzrKxUv4Ac8MPBf4r3epc21e",
  "key36": "3QH6DTwGoE7wEfzqThERC7sut7StfJuk3qhyfe9ssVZjidffgFm8RaWyTAq9q9MNmnPLezanUQQZ1SnETL3Lv5Fz",
  "key37": "2cgVRN8peCsi4KYcrv7navddV54zCc16uypzKHUy9Zxb5ckM1gBt1pERTF6jr9UBSkCHjAMFnZ6NBL99KrHsQ4sx"
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
