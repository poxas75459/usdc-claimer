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
    "2YGHuqpdRzts1ZFoURh9mZAbfQPtk5mNc8xtrq91qJHLVjhBpCqS7SegPqQSkpoEjmYdWid2Pd29rkvE2tGNnsQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64sySksXAVVkBhKph1oCSqtVrTa6f5j4p8SnetnZkHMVcN2ntE3WqPKdaY2BuR83N18fU9JWnAnNcAPdkVxe1N9z",
  "key1": "5pzdr3PZo1wsahmuDappHDuxoMFgvvHkiDCugTEbeKb6menDSc1wgjiWeGD7J6AJa9kYkaUmQg19cSu7JW7oV3dw",
  "key2": "3xAN7AwNs8AosjjjMyuFoM3QQDfh18SxSZ4B9ET5nvKWoxy4F4EQRsdWhiAvnf6FWjJibyFCNm2rEYG48v3KmNLY",
  "key3": "5abtoq5mho8c3YqsRZgbzSd2eUwMqjmhHZQpkzyc3bsBMfGFANWtxG4oYhSsRzb3UZhhBh7kRr58aRTfFCi5wKE3",
  "key4": "3DFb2tZeB939BMn4CeqoULabBMEmL3Vptnp7uVdVqTq8tSdSRdjLduNmyEDyFWFiST1S2mayFZS9ZVtcbVWFFRHv",
  "key5": "59CHfSiVBSF5PehEcy7eWeXnKwQC2dXh2hyVA8HXm4kXiMhCYHiMHKubDifPzMmq4eRYEthrsi4hQfWVSGNnjXq3",
  "key6": "2z7p31Woi8rDwSnFqV6aMCFmeoPTT7bmggZEBf2hDJTdWCBhP19tq48efypgfe5aiGcQhGingL8WqbQX57Ncz5Qf",
  "key7": "5q4Qq6cASAd3U5ScDp3kCo1ZHvc5d8niq6818283tmQ3DfybZnaCspzaiGvgBxyEqtcKtkRA6DZjYsSeZu6ZK7u",
  "key8": "3X4w6VKqhgfV9JLHUM4G6VuvDXrtk9JxsZqz62WogneUTpnkG85JosuAvQupXsGoh254LCvkunz2hNKqWSXsX6KZ",
  "key9": "4vvie8ZR34AFoT2szcsQkz5rwcszX75b6vCeGPYExfR5DUX7nF8KeLjRHK6a4e2SHo8FaaJ8ZSMnTWUfFFRLFKg3",
  "key10": "2YUtBHhYPCj4i7eE7dWXR9CHRWDmFcpAETJcpraEcAojPhVKZuMJPSZdNCgnqENRwmKNyBGTDBtpU4wFneTo9sar",
  "key11": "34mKYA4GPbJNt5PBSyn1cHa3wXMJqDjt6E1BA9oWBsadCyGXCVhUjMSEXdJwu7cH5SpJWtH3fJiDuxiBCqKkFBKu",
  "key12": "2AoA4JR16Fk8on5xkyRLAWygPAXU3E4StfdmjomNRUoVs7xNa3hSuyH9p5ZN4DDmJhpPLZHwZJkYtjZJH3kcJRt6",
  "key13": "4h4tH8StwG9Swe1MYqjussbpR3Wrv1nZpgWRPuJa1CjcUbc81jSAMYpsWpgq8Z4FMS1SvT1HF3Rqmxh8otxxcDNy",
  "key14": "2WCWENRfq3ae9hBZYLohbXr8C4WUDQbr6vDyymxBvLkksqHZ1LgcWx8ZqKGawqaZqo2unC7UtQ338Ry2eTnQ3W9U",
  "key15": "fbSiLQz97N5cF4rfLz3Yb8ASqDKmgFQnLb53K8K89i51KSG2mu5xCrua3YKwwWRtSxfrpCvzPB8oDfAKCUKSzQf",
  "key16": "4SWSCyBDJCw5uCUjStknMidf4VmTdpwFnwMa9oLVaJhnCEAD3MaDwfAJ6WtepFZSF5ieUMW6gqZ97LWKswe5Yi17",
  "key17": "5H2wcPUUGxEXyDN7GefhNwCSDtziRLPq1L2jKWgKWPGB6mVgmyz6SEE7kwhRXVD6DervA9MNzrhsRyDxyiZiU6nf",
  "key18": "57v7kp88nzi6uSEaZjXyBY18cdKBNCuA6Rjm6SXSqWa1yeqT35JUAnN3Umeh3SiDRZ6o91hJFcZqrH5DaK6ceWAW",
  "key19": "3iNk2JqAGkwQ2caNi9KKZaKJ5E2dZj6hYcZbGAP5K7uCuBMT6enaQKJ7neNTDqDAKhVyqQaSD5BSKAmojgqkijEu",
  "key20": "2uRaTSyyUpA92f9VeFcXTYyWx88yidfGRCTH9auGaZ8UHspAEHbyccxbcVpvQVuAvTWJ93eYR2okJqpR6cKXeogw",
  "key21": "3DXxdS15djVw9S4hBPH1bG3W8HcDA5wCdnKPyaSvPyLkNFfNYBQeoyH1C5FANS1HbKhxHk8ndyGvmDD9cWrcwJAi",
  "key22": "BtMHCrQNCYkXyKGqZnZj6mMKekZceJ1eAfVrjJq58eispVgwKRqJiY8wweyewEp7BvgPifuffdetFAQtoH2xWon",
  "key23": "4p2672gJv6UaSWE16Q4Hdk1Zh54zAtKxJEFx5rGEmU1FogPUSvb1GidDnKH7dxetFT5vjTky8SHpN6Msvm5dfVg7",
  "key24": "2MWbAVDyGhw2F5EqrfvYzJznbRHhubuS3bDQrEHvVErU1GZCAww4CyeEdHMTKNtsqgCQfeVFJSi7Zx6d1YtJVx4J",
  "key25": "3BL9ssKQejSqrS5iBwi4fndgFiXbMtmwcpqfjRCSdokzZma1FDFd1fJHV9p8tgqW8a7UXLL98N1QrBgNCRJ7qPn5",
  "key26": "2WTPMopH9vkCbtKCJes4wRXRw7WZX7KdooKAWjhysxdwFWTvKPGcznHwTBbsheerX7AVWgt7J5dPJ2Mmpjoh9x9J",
  "key27": "4djpFLr1Z5pRy4atUXEJ4kySwf3GAhXR4MEL33U17spRxjMhmriVWCEuWWeqKezwfW37hodkQYZZcu3ZAVgiNuyn",
  "key28": "4gUTGEMC7citNDwLFEb7c6ZHLhPqN5Gh9eFmkBz26zviDdxDpJmqvRTMJFoNXwQ4kUm9yR8LDR2zNg6LbTbQ7TuB",
  "key29": "3cQw4xccfochTqoZjZNsaxok82wDdeHCTpB9FYeRxRzALWQvWy7Aev1iKu9kGG5c9vEzFEG4yWsZEFUpKvYYcBft",
  "key30": "3zxaP92JT5eddV2JEmvzf3VdGcW5HpDS8iSUYL3MCSJ71oLzCbHqqWiTdGo3Jubs7ox3bEEJ6cwWaGxiXQLLtCLV",
  "key31": "5bYCWda3HtekTigSswsGcSVeZWn9GCwtPefUf9w93PLofNuNYww6mmch3ZZL9cSAuMbapX9REjbgMdQ9LEDwCgSg",
  "key32": "52TEZcVrvUuU6vtqqG9cbYfiL1YANjHcANmBKsaE2ckYfKovUPrfJxxS93biV5PPgrwfMVRK7W2eEqYnqTUvm5zz",
  "key33": "BiCHESEc24VC82yikcMYcUBCPmbodB7mpVAuCoUbjdYgteSvTqFgyGRtErUgeRejCZkTwdQbqWqASjSsxHsVyRU",
  "key34": "Uahj7EtTpjy9DRUP2nZW4AJCwHTEjfcT5mdW12a8jajNJ5GViCvXasQZsuQfF9j6BYXSPMsZPGVk85PE3BzihHB",
  "key35": "jme6GgHrpiX1mM3bcUQiVBji157f6VT3ZZSv1zfsvgHmwUHxjvkS3n3yHJVx3vfZbosSf7PdjXAfuDvAibiPTLZ",
  "key36": "Fhz3AfMtwFDeZMtz5NJqYkdjUSDSf9LDeccvpiRBgTeSmGZWXkvQRr74sunanytPcuyyoaNEoGsvKtCnW9U4rCP"
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
