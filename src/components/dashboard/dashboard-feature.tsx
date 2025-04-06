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
    "33pCnfFhsiYkMwSnxUNwAXEkZU8Zdck9Zjecpv3CoZARFW9W4xwohT9g6RUjXnTCEwiZaBLNJxzhz6HhnsejNVEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wb3dCecXCa42PMDTb9EXXWdyRbvp7LmcNhU5kzSYMcfVJHNTDPMFqnt9B6Sxq6RzL6Tec5uhHgm85pV3Aj9BLy1",
  "key1": "3R6waFiuj5g3qYhwUNmzqSkFdxH1tDSHjMzpwye82Phm7WGniLiiMbFhQaxefNvykNc6MFkPkDC7wYt8toJm41rQ",
  "key2": "3y9AF4K1qwEUoDK6b6LKrZEvmbr4yr8qPibEYVQrLWLGa8bsJya9mnZ5Wfb2TrZd5gcP69JvCHktKKLamYMVkkDU",
  "key3": "5DqJbJyDipXLBHkNFDGmdaFRW33Jfs6PBMPQKgxRDk5Sv6f39yiBpAWKFDJPRGhwV5Fb3YhhPApwwseKjwykUkFb",
  "key4": "3Q6EZ8gmnzgJY881rW7T4qdv1ytEGcTH6uSrCtJ3AenNXB4a1fSmwymkzg6RsBQLGRh3u7Ls21w9eA3ZJUndi8KZ",
  "key5": "49e1ApJ8BRP27scRjXLf13nUJTGfUFBGDQuxRjoAVpj1wDyNKPpWm9azakJ46rs8ppucCakc5pF8eM6MUCA5zUVn",
  "key6": "5DmA7EBFkz11gVgwJFWyf82fgJKZgNKFXd7u2y8tdy9X3r7VeXVybe5WQy8r7JYgZDPLRRDju26VsHwAMH93aMrE",
  "key7": "3L89FEU3QW36scxPVHGrcfHg2cm6YbkVXw8z9Cn2ZtpGgEugCgfQdhkpF34SbRgFHD2NuxJr492F6ANNMVtXw1hW",
  "key8": "xnfSTHr3cJ8QkzPwzZnY15swkXhJxxMS61xGsx8yhJnpHtZQxWGg1zYHVQ3JMidyn8puKj5H5d5ZB2qT6ieQRGB",
  "key9": "7RGbePbEvkLxpUrCcLEheXkAkbyGEW68gqfSgz6nraVDkEecPX9Pte5iXc5DwpeL5ySdvmBpGeaAABY9HwkhWky",
  "key10": "5NRbR3vsHZiwLtztpq7Kg7Z1NkJQTMUuJPsrjYVkroawgJd3ydp3dqhyjbwAJRhQxnEf4AM9wFqDyc5e1MFQDndK",
  "key11": "5fSRLrUSY1nr8MLxhiU5jBbf7FsPjUmqjBbM8Nmy2qkSgPRoVpdYFUVmxewuXeivy9PKNbDsiLphVAbmFgvqYiPL",
  "key12": "3wkA8AroAz4N8j4UC8cNwdUSrtQt4fAVUCqzRKyxxTQsCW3eRrLXzVAtck1UdqsGqBrCDw73V3Hgur7mSe7X9Cs3",
  "key13": "3KghjRRSuBAErG16ey6hW71N83KotjD5EP1KirxRCAnfC8iEvTY6ddca9e2oYZqEfrfzxUhWsQKAQcNZwJnRo38",
  "key14": "XAeYAGad8k4crA5ffib5nFYudKkKmms6m5674kUiTrnjgqjfudEgxKUrj2Li7yRnyU9e5VWuahkccMHtQ4XM5Sp",
  "key15": "M6AxkP1sAh7gPM236jydYdns4HZiaHp2qQyQ1SCdt8jjNtX1JNEgGSeaWMsfrfh652GkmbYURAfwyJ1jcx47swQ",
  "key16": "5tqSettwZrf7vD9QV4xsvVoqqGhKpiyBgPLdh1FixnR3CBBhUTGB38cGG3V8hirhSmm1d45aJGpPN4E5SpxBm6BC",
  "key17": "u7EJayrmC51KqbqK43QXa3hjFcPWbVnfkZDvHtXizsCAp6ZG73qseXcdSzS7ikFrK2tMxC8Ju6t847zF4U37djw",
  "key18": "2BKL1k6poHGHrJSouas2TBHiHxWn29ADGjSrjYQh75uiQLLY2yBV1MioBkfLQJ1Bxwj2jyxjVbV54sphvJd2DGe4",
  "key19": "2sHDU7ojBRZiBq2HHif2EVh3WxzBHvGpawSTgbKRLLhs34tJGhas8Y2dMAyXWNrtoysAM2hKXfaYZ1yXidsv7NX3",
  "key20": "5JrwHU632kZxzw8ZFSfo8DeC6zWRNyFHvt388cV2MHjDAhPVeZ3CMrWGGzLTZxtFghHdTJD9Ze6mRpeUhp1BZYUA",
  "key21": "2CAWJFDWu4yzJVQrTZY7YXdfpKgDKLfD9ir1Huvtud5JgWjfaKEVMgV6aKCZPY87WZFvA9JpLVTW3CGdUFJQbrqK",
  "key22": "gaafLAVoDydsCmiMHVgWryyg4qBjMZsePxaXYX7367L22ZRERTi4DTQQxVzVauy7XC26R8jvX3gyvPb9Xqj6piD",
  "key23": "3Rh1s7GD5iXaiHfX2CWzBgDd9Zdj8ph8afpx7h3TpY1vk9jJWrw9v45MLUPzLudBSzUzqvZjiYDeWcgkvW4dvqem",
  "key24": "3szDDa5CDRsMnrPCm8afsjTV1HMEt25Mr9VtRGBBH55C2Cr9hfQsZZwSYTzxKasD7QcDtASSAJa9Pq42wziVhhkh",
  "key25": "4wceP1xEqEBsiXwHicSBxpznC7zBEDqkxp7jKcP6yjJ6Rw57TjiEX4XVxfp6y7sjkm5XqnbLfqjpfv7nzrmpEbA5",
  "key26": "mi1VrucRu9vCMPtvT44qTrR5g6pTsgsMAcUj7WNZ1o1XRSMKu86UPbv5u6P2v5wMFfCdZxf2UX8qrXynWtV9WDP",
  "key27": "43aqVHkvzM6tPJvZh66NtGcEsHrwu7agU6vEH4Fk3NY9VJUivxDYzFyGdDVXiSyLzLUtXGyKGDthvb5TfCkAKAek",
  "key28": "5QX2EyeHPZktCw9r8g5wg4WEKy4JN2TTENNQ5aKQCUPR4G2gCNBzs9TBDtpPcAYDKN3U87zRyAd2cPre6BTZa6rs",
  "key29": "MK1aYrjkAgMKb2er1zYkWq91svfr2FDreR4U5MugyB7q7mNbRQPGSaC2mejcrtiZ3ybVLvzQmu8z3ghrF3UCZjA",
  "key30": "5mFpSAh3Hi7ocrhUghc9smN8oYpd22Vc2p79rErs9KVPq84Cv5jD3s7LHrGv2WSyRWhUzqtfwfftRuuJmWNRGFSG",
  "key31": "227hzmJ7mNtvCGuZYGKpUvSSjgdRhsj3JcqAPtGh7YDNLYURC1vRzc2yEfVc4arC2FcASx7pPFpU9gyuCUKwECvE",
  "key32": "2sYc21bzMuNYc82oSaW3oasYYB3hzLWEDoh4R87KdFaTbCacNubkBipk9x7kqSoYyEo5o3AgCvvPUExoP19uqHVL",
  "key33": "mSdhLnmHXuvCN5v9szzwgZ66NxmZSTMaQYPgcceHvGGk9EVohWF2bpsVbQDjeJHwv32NUrtgvKSYhY68VhcjBqp",
  "key34": "4m6j7A5jJY8XAKdtXwhAodHNFo6wQHKzRurXtwF8aSNhUXhxkkE8e4fcyHVDH1oDzaT63Q1XWUH18ztx83niHeyJ",
  "key35": "2jt1ZSqbE4gfBUpdZBWprJGwTeJwHWp99ne1axugoFBNxpmavtyFjPxMQvixoFnKRtHHkJEDAHRc28pDuGm9EfJ8",
  "key36": "2PdzCgvmTi7DeHvYSsQRjMwnVmEy8K5VaABcnEpsdECTtcyGAmFrjE6ygXiYvJGFqhxSqSP6awKKKLeb8DGzLR77",
  "key37": "3csrpsMi8ctZ3gVVbXDVrwbgRwx4YtDpxXsBhQ4rDXfzvZPS4rjgXuLZGrM6F6bxUAqkPVeV2veAJARV8Mm21oPH",
  "key38": "3Vzr6jYrSaNaZUAS8dXm8sykJThQgZAV4E8vVdmuiQZuGdid2PJNQT1bcVxytaHpa5ztbeXb8zrbGVhvKf2eiLA5",
  "key39": "5GgpvDCmVz533f84WeYDAfbafsiYkUcR5nEinYXD3ZYG1BEqNdVGKFMrwHwFP1AKvbTGSkGSCRr1EahuFgjVadLr",
  "key40": "C3qQxtT7HDFnxDTfZKvA6EKZDMJBQFujA7aUNtnizdvpoSX6m8FLrhvSnMH3uWZAKkyG9cF8tgLwKDS5X6HFgae",
  "key41": "3f5CzViY8EA4QvddGyZ8DcyWWLZoW7mf6zCTiNfXuaKFkCzC9728R74MrXKUbeXx4aYZeXieJD9yqEa1RNQWq5Xq",
  "key42": "3o2w7rw5BL1sqNATj6Njyqywx5oem8FVMQAhf4Gnr7ZQCf3o7gbveDfbc7FaX9AiihkqaqxEd2pFrY3WNERg5FZX",
  "key43": "p29HGZWy937Ug44u3ftBf6nLNvjNq6nYPr3x1LTpuZdCFikZjue4fRWvUYjQc6rFJS3oGaLF5RP7FrXWAFrhkzB"
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
