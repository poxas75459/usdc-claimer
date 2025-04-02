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
    "4UDqaXfFgb1gDRXfHeD54x3QiDYRcdTgsZu1itA8bz7gFkubLBLCKo8fR7a9XkNGXzKJw5iYVS3hncYpWNyvShYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fjwy3uM5qSjupsczJxUvjq8dHby2L39vQvtzqrkvUj2R7FLK1oBNoC3bzrf7TP3Gu2vEPcDn55BuQgBsBnx9Qp4",
  "key1": "364noCxZsDhCHPDm8v62wLPpAaXHLnmzSNXeeexvEKaRdQJYS5e9SgkqZNrYijrTyNr4Kx5LMA9UAVwgCcDwMvze",
  "key2": "4LedNxByTJcnuTJWfFfYx7nTifjpuBU3y7HUeCDnPu5qhc4CsNc8qvjDU1PD93QLvuoMFUt5CnnbHn98oRwiwj6G",
  "key3": "5D2V9udh8fCdWjRvjzQHEbsVg3HnkdfDbCrQeRjhYm6gT68aqu5VSTiGyizEWAiWqiMbcgK6wxZZP94m4xY5t6gm",
  "key4": "5Ww7M5mg32NoXqCB2fbknUn3wxifRr5jB6ruYCoS4QkrRyx6qHoe3C4UqdMATn5ciEy8L7hMyvmm51aJeEvnP9qu",
  "key5": "3EZvjzPUtvqtrwXqLRR3uDuty5Fte5Fv1x1SipF7Vx2e4txvNxFDbJrcBfoB5bnti9sRx5nrsXwLpNF32pmJ47WY",
  "key6": "3b84idjuv8586DxLCUabNtM9b6KdDX6hXmyKLpuAJz4hvHAorGFVM3Qx9a4VMUkVetTwCYSqK2P6XRXJMbVk9dsr",
  "key7": "3dVbc3gpjpGhT2iW7kb6tzFyjbHyBCfSfxHo29tc2ULfCgYZgpWDb6jBPE68B8fDBxBYQRhfvTHVgLrLTa65eKFv",
  "key8": "4xD2ChjJmiNUqa6P6aixamtn1X7r7GXs3haqMV1L7tMNt3crcsayjEGpBC291ektcynHUCLvPeeg8Tm87RmaJZU3",
  "key9": "3DvPsPU9NrSkk17WrMWUvnwjhHeGthc7m9BsudJHFnoyUz969jVDZGo6HkPGh75QMBNuGEUMQphkvS9rBkKjUvbC",
  "key10": "JsFXTNZHsMaxYw5zM3pt1T6DZGVkByx2a1mCFrmhVjthY3Dy7R688zZj6Dxsw5h2ctVYTqsYXeq6mH5APfm4zDz",
  "key11": "YwnKLdLegyYoB1GnV4zTjgPjJGARZ54cttA4zDEWUzvGCvmYctuudiUQEoYV2yqP6wa3XdYiJbDYVSfT4uJ3gNQ",
  "key12": "56nNbvqfPegAYe9HsGxPfnkVS7fsk8WHb67iH3shX9J5trk3Gn8i5nHbx2UigVYFTaPCtj99BvougQU4DGsvWpyR",
  "key13": "KCLrfHSRDbHtamKtkuvjqXLHNix46hTW2M4YurXpBzjrB7Nft84zv6L9AZ8gHAyQwBDaSgL6kv57bH52TAxekBJ",
  "key14": "5TQPFFhfX2dXkyZ87idRZJ1ns6jQMpTa7kghxB7vStuHHTAc9ugbTYVyZsmsT3eAJN1ZWtop8488YzRoRWxnCoXB",
  "key15": "61XnL7Xo5f1rH8rHaCd8eZei6RhqcD3b6sNCx1v364KBgPPzqR6z8QsqKNFsTCLhwVJJwdpUbFTHZcyRDzjATApx",
  "key16": "5oS1PofPKsxPFJYeCg5K6p5AFHNR3UMGAoyY2UNhEZE7Y7YJy9NTsRCu4oJzzf8stmaRgpssQgxY2a3ZWCtpwibm",
  "key17": "5jj9PqTgH87CkABZH8HP3ad1YHoQKu5UspX6bYv7T3h7w9bahybL9Aak5aytiCEgsEUZpdv4i1YKWsG7kZ6LAN5f",
  "key18": "3bvUpLgAFQBwvHCVd4gBXun9WV7RHKG2Dr88xHfHNy9ztgCNzAS2n5zR66shoisueRjHfYn7qpjrmpwtaojL4Yr1",
  "key19": "4M7ixUNdc8Frr4LxnWEk5Mi3bbvNrg6pxMeDNqtcraX96qnR2eLuZ8wWxs5BsPp5JX5KkqHFE7iZtpPsdrrR89Nh",
  "key20": "5cHpB52n8J2HpGECVuz44HRcXkmkAShmQHKT5svvgHrGD4RWqAfRKT7vNnDewWq1Av2kNjPWLksDzx3A6yTafmpR",
  "key21": "41bxec7neNoyiY48JE4or4uhRPpdfJzexLVa5xwTWWzSxsHtjMWPSQkm5fMGF2ZXRWKkDpFQpEFHt7wd94PrZm36",
  "key22": "5BGr4Ky9g2zWxhD2vB9QTEvcrEdm4zDL95ateegctnb88ycrn8L7BuMxKtjzwQ2ZGz1VLTniNKVUJ44uAqdRGTBB",
  "key23": "zNqWfLmVE75mVoge8ePVG1Wn56Hv2g1k8JPSEvvtxx8PzLhpVje22k9EEDK1BrUiaB8E6uqcmRDuMgVxqDhf6je",
  "key24": "41iExL4kdL3JKp3hMUqU4zPBasyuvydW5Q9v8L25SgsyrfntAZm1kNVVHc4ku4TeckZ7wkcc6DXhxBUxj7VAoqou",
  "key25": "425XVia2fwNLBf8EoMHBz1jiMiHaSG72VP5JniHzBkMgaj7RhAqTkrEKYMhcSYdeu4D2EGsgPcV7FqoG6FFBjj4T",
  "key26": "5bmcrpYGkWhyywCbLvQHUphAeyPW9FBRRMpdaS52PuQUU5pxn6ypyQFMbm7UCabzV8zZRRrA2vWB3GHZLSSP88r",
  "key27": "2yPeoLhHFoEhc6ZcM87NruvkUf2xkbfLnEcH2btaaKodTfW6kQibDGXLMEhxyrG7WY66z54FS32H1wDuWgs9fw9V",
  "key28": "5VawZsQraqgF6MMEamRoZgLJGLJ3reQvgXZZLiUJ67JEoi4ErghrQsKycTiKx3cb1pECebHWgNStCSaJmjF3sYgi",
  "key29": "y7m79Y98tTTgu2PuJWPpfiDJdv4zP93kHaSyze2pshT8iUKYTFN7vXUt3NdYfYVktay41Q2s9FseF8NToN1LdLY",
  "key30": "5SwBpdmc4eomivuahvZ9MioKfV1DrdxdSwd8hkH4aW7MdXWYjUR5xafqxMorTqBCSivAe59i8fgZ3ZtHVoxgE4Qz",
  "key31": "3ZsB3btEnugyqjAGYTPGTjSwHxut3RD1Q2a9UhHz5WBn1HZuxWTeL7yXNyRrAYiYy7XLRajYzAqosjNX2mRCchGb",
  "key32": "3qDWK37FcvWUQ7UXYqW8c5htKpU6HH2n9yKz53Rza1Nb27phCABjREdMaQkoj8NUGXF2z6FTaKLGdigKjywdE4SU",
  "key33": "3G15N797x8TXZ6Rgpj8pMdpvf7FgH85s3nJWwpE1i46s2fwvGmunieg8TxWUqHJ6Lku26XZtSmYihh78uQHMYPVT",
  "key34": "56mVyzJBVReMDNU9LKNyD9wYA9NsR6FppFH1mAjLWsVWpaiig9pqFN9nVb2ZWQ9Kg8RDHb6hS6vMZLAJpen7qxtK",
  "key35": "p5hqd4b44Gvwn47PKZ59ymaxyPdVr2eSJeoXs56MzqjbwrSuw5TZgN4EZeV1sFtLHrTByk4VHwYRMFv41FBkm3c",
  "key36": "3wEfwSPuCCxg6jn46aW2di66E7Thz2sYtEZM4GfAs8NKUpqfPtqWMggYd14Go7NXiCDLMuFwQs9m6v3FtwseaD1n",
  "key37": "3LwnnsiDW2c7BdDi6f5ZVPiiDzieM7Ss5mUx4N47qxYAEi3fzQmD9cbEvT9XJWKj6CncVcnbfBKErVNSee7hVWpb"
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
