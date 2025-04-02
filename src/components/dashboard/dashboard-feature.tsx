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
    "29xuYBt3jBMFm7iPeJ5ZwZs7dqzGLaUM5KkNdrB3DcQf8R7uuZ8sy59nGyD8oo2zQyYGaSBRTCTqsnpVdddWHbgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wKPvtaST3jR8Qnn4dnsw7kbEDpsgwWrMXPbEsp4tBa4pSE2eQ51Epvtqsw4hyxu6jH6YXzXAMetgpU7tRmgtjZu",
  "key1": "XpnTxVvgGAWcvzjWcqyd6Stwm2HRhfGnDiDqoHDtcz2jZZJN1Wg5LBBzFNt65teb5dFeUUTr7NmMFfc88wVCDAc",
  "key2": "d24kzkaqo8tkzaWY6vn2CuryvfSmTuCayiwx5Nu4CevBdwmr248PXGUzFRWSyJuSye2xVpGNYoC6u1iv4UX8H8B",
  "key3": "2Zn9zVqSKt3iETx7sR9u3YDNQ8DHTrmqV2zQN8Dxt4jGo1CZaxPA5Vm1EvfCKm9aQuWK3AJV5UUVFQK6VFJbvea7",
  "key4": "4SCKrnuJFUyZG1smbPRGiD7LJEiZKWKyeN61AdtK3eU52vaafaji5HXdNJkoqXpmG5fZ6YFAPcWYpe5HZkocqDY1",
  "key5": "4AKX1fJioDEbLuPu4emntRrJKV76k6mNV4j6cDgVP2tS3Fwp9QZVjekKGRnQ7gwhgqVeRoH9CgwhGfX3tftGk1Pw",
  "key6": "9cFYiXLZnVSm5cemHz9QvYBodfUX59DpmwbAVHXc1zT3usZN9xvB6UaGYzVhpm6u1DsefZDNccevX1bCauRbxKe",
  "key7": "5uEchnapKCSpjRee7PLWRx6H4wdB57KySEARdfM1WxCCA1Dodz1Y2Wut3rSur8dX2AcrMABdGyCJtk1XKD9o8hRD",
  "key8": "2sa3zdEXZgJqvy6aQozgpDzxqQNvqJfAkcrSeqA33iGH3Dk6Mofdcszzhpo6CeYmknoiHRY2dtkdsFk6XbuHD5MF",
  "key9": "56p5UPSYkNUSjbdaXMWfREiAUAZfWUo9rYr5qVzEChoBtqxcHge6y32SQNuRC9qQ7yZmzzKst1dRTZ31jGSWC3tc",
  "key10": "22eYG1nSr3JdUtaCTRiNFSRGZpPCjr3QjHwk8yYyi7NWYUYVH2Dg9HG4AttHan7Y3tWyiHmYTvxHMfnvJaftaggx",
  "key11": "5hfPgY43MzaTR6QE4wzkf5h8VChG3jk7nu7tTP7jPm2zRxvGq1mSj2euQDbw1EPR1MjsDgQm1eYxDEYbtzw7Gowh",
  "key12": "2B2dR6a4rHMqChXEfU55yRhhBCLdRTEx6ZCXdRTocbX5iti9fHp96FPKGaodZwQumu5VNi7VsrELseiKNpHF8wTH",
  "key13": "5Fgm2ESc28pQfcQ8QsGeANQhM9biXu6DM2ieC7HyiCT98x3XaCV3ptWfjaiCVgDParMe9ZkBHdC1AibSuMeuVEEm",
  "key14": "5BZAutKfaDR9dX1Ju8siCL7WXoEE64bpMPoPoa5TQzdaenkFstuHNpwouVg1C2CoA4FuqUXQCjQYFVCD9HG5LxmB",
  "key15": "3ah5j6Sx9Je22hw6tCCjQ8UK7t3PeFWMgQY6JqanDN7HUVzT9eXYuQApTa3yJSdaX8bzhzgCKGnyjQcLy9Tb8TNN",
  "key16": "4cW1quWeZaFzEif7RdcH6c2AdUfEbwoDNGHvM24me9AwgFBtUCQbZodEHQ8Z16RJyRkqiSqtjJgH9vMTCxSYZeGh",
  "key17": "3i3ZKTkh968HoBh1bcWpr3dmcxAhv63MjVBCYpXgh3hA1UbWN2tKoF23k5GppgjnuVeaoP8BgxWesHwkrNE6q2y5",
  "key18": "BQXMKd2MWLqq56xpdsFb7rtLm3dWe89ZxS5V9ymy1ak5wUPCcMMkG6UihtWPahKg8PrcSHxiibaXGPYtxEg4LXi",
  "key19": "4HHiBjXcC7Xn4rskxthJtq9upSch2g5yrFv8K7zqmV3hehqe5DruzDsQQr36nwNB887n1bfNzgQZ9MeB4G4kf1q8",
  "key20": "3JDTFAzFwtjvTT1XhG9Ku3DLet3Vxq4LBiRP8tXPpeEbDy3tTyEcNxbX26eKrNGqbm9oz3J5aLwqzyEwVyGxZX83",
  "key21": "5YfBKRqDii25GgZnxchUpeuFmJ7drvFJ5u3j2WUNNtTqHZTeWF4sSA6YgCsb8NjYLov5i2UghZoHvEEq2EHhBvW3",
  "key22": "4J4pMZfVoUfDE9jUFK1h1NoH95AozyxaNkBTzrUk2v9caGmLXtn2f8nUncsYnpHb3kxkmisKpJSwNbPWESH3QoSM",
  "key23": "2kfCFnaHveCyfAPnMXXwgJt2t5CbKFAVK7pxzaAUdiLFSDaRzhpzQG88LYpku9CumTNYNWZkrwfFgakCxR8dBRkn",
  "key24": "64yXiquQzFuhZ6PjD824Ji2B7TV7528u3j97YL47bWz6JT9dcy1dT9eKodERBs88jQRN6ZEdHessBaWtJ82KV7Yw",
  "key25": "iwjuEyKG23kf2n3SZmWesHPsZr4hMwbGU4fBNpW4KwEWERbiaB1Lr3NPFM4w3PnmH7Dxyc5x6kbPgweu4iGBLjx",
  "key26": "4KeiyhKPzddxcoBS2YCiGJuePgRvY5NX2zdBXThc34uFSLcyQ3bwLrWtqApAKdhuakPxyrjYxASpJMfTUWX3tv81",
  "key27": "5Fxc7zc4S6jPZEgd7QRtSGfWEgzh6D3GEQ2KvoPJaijk4faGPGhCfGE6uPdJuLFueqhGubAsgaqW988pUZVfPqmj",
  "key28": "5pSgczBZ5qHAicaif4yciVS5ZWbcHE7ogHaUvRMGCaoDgtMgqGC1nijbLDBq7Jh32U2pg84oV5fz6FMkJciYeXUf",
  "key29": "2B48dAo7TteFfx7Kqb9bc2nak9PzxW3v8uUmXCf4A4NjANcCv3v42ijkXhiGRG1EZKcTbTju3FVgP4qeUAQRoUgc",
  "key30": "3kxrfwsdEAFhtrs6XoJRGi3LMmufeWgCnXJ71voFbBfBhgE8CmKxLDkYv51zN8dFR9mLNZchKVLmLzwufe9Jp4uP",
  "key31": "4Zg69ry3GnrbeFMXhyM6ZrcZYZQ3JMRgKV5SAxTtDd3mb5tFnmac56XNzRw4rcbQpYsaDux9Gsytz7PRpLFeK52Y",
  "key32": "4pGFSwmui1vsWZH9Wyj3Wd4rdjRtmgXJTKJtFAqhof6dY32dEdg6dxsfgPyq3rnKmthDY3zmJZi3NSdJMtU5QFik",
  "key33": "3qLEszQEi6SUEX9DZgpJ4HjViLcFYejN7rxEiZ6PKNRfRsEoR9yQFXXm5ksCjUzSnXLwd1hkndTTzdx3Hfhw61oU",
  "key34": "2VxoUp95VakjjZ3D2zCHmDCgkisve21f28ttqaJXyQCJuPfuBWSEd1YQpuNPhKVoPG9GZVXAALFnJ7du99BMjtj9",
  "key35": "5aBDXGsNHBeWjBBLmLh5c95C9WWaEkuxvTY8xtFXnYomx9LZQgj3KeG2xSFJhQRWoCaAt8CDjZgzWMfagFCkHZWV"
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
