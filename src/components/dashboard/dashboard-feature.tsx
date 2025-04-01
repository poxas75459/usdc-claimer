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
    "2mREBP8iqgccqoQeXuNAXAxorpLSjMM6PYFoqm1BTffVX1MckextNGRW8HwQ82U6gQG3XkACturVTgxSV5iH2T4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54zghdQrCjL2cDHPzGc1WxSiXpWnPKgktHbSicd5sXuK3P5Jyqa4EvXgrVKUaXWFrdABqhkhsrmYLxBMEQCrCRqg",
  "key1": "2R8ZgUWU4bLFNFmeorLnRcyc1srpjkwMQ6tRQK77X8vpzjTTrdgMBsmg4KGStzht1TdcTNxNazdrPco9epSg7QAo",
  "key2": "5yL19cU5JMEPbGCBBDwdowafb8fGfntnbvCJMrS6KYoKQWBpny5cfaPrQVXDVuh4rHii8QDtV4qh6Jiu6noLctdy",
  "key3": "4cGfBG3ZqekrZJtYJpEGEzoAYoKXFq81SkH87fdCui4qB3wZcJNyLL8JfcwrpBubqaffLqDuWEvS7wbdo78Gyr4s",
  "key4": "3YuoCt9jAnkeVbWnSVfAunJckiKx8UXz3f93nAdEMyQYBwGrjUktqzeciyUpyT9VLTXRFiCNp3f4pJ32iiPJSonP",
  "key5": "38gJgAomzjr9YrVdH4qZ8dYgRqJEo2HzJbvT6xGymD7qY1WjhMYa87oUe9ibZynu66AbiLqLcg3HHBwr7FXWGtUH",
  "key6": "4pJb5avVpH89NPMv57PYSuMvK2EXD3cyfAv2QiesE2A9c8MbUia58SjeoHqqaRCdjsBNJ2BdBkbHz1Swhf2TqWbu",
  "key7": "3eKq9rb6Fbgudj3nXjnHD2Ho99ZUcRZHmeFVzr3Sjn9xmq3Wi2ymW3FTrWdKBpdZeuwjtLoBqALSajQtjVRThyx4",
  "key8": "5ACfWSQqyR56mQMAmJeqRcBW9F2JpoQWycgHQGDc1yrWJ4w6ab4PPzxtfAMK9eo9ry9FAz3BXmy9AkYhw9gm1vk2",
  "key9": "64vNnGHjC6oyqzqQTN1uGd3X9bt5ATnxt5x5c4tzxPUJqW1iCRSAVoqQJSZxeBrZX1utS5PFvCG62YDV7myB53p5",
  "key10": "4QzTQWhxybs21F9E6skSDUk1odw5RLFHabFzzmnXpCZCHnsbW2gcgvYBUctCT8gGdam86RbKAdE1B9PWLi7KUh1S",
  "key11": "4X1YAsXtHrg9gy8qPnhWvWLC54ZpWtk8j9RQTUXbwN395p5yFrw3eCkUh9TMdgsucxv1jAJM2qrZwKFg4CazzKHb",
  "key12": "386z5yfZEomFBiVei8rPaTqY3bwRsGQHaHWHzwMSPdPDtiM8pVQh9BPHazMCHTLCRDPEYHUq4gAawvaukETpy13c",
  "key13": "5uAurYKBLKvAKZ8f5VbfhwN5394siEXwRmaCgVQfggiUuKyfwEScnfeiEgAehj5ui71bvva3mwvoevYi1J5XJcEc",
  "key14": "5rm6pCbs7isyXECAMefZvinm91Qek2Kek1J4PXRmf7nsTcazcVqTin4E8btb3hdKmCxNHVieE365wHHaam8VpV3o",
  "key15": "5WbwrYrKRXECJZMQpy1dYBDoCFTFzyv9fy8bHVCY2avcFHDREEVhE1w3wy1gfVcCJEBBNbnLQS4xZeXrQmbsfTXG",
  "key16": "2hwPmxkaCrSheVE7tWTErwECBzwZwEM9jdmGbw6y6UtSHhVKyt885f1GCJv9WBTNRGpUGpyQWkggDfMaT48J8DRw",
  "key17": "2bqmEZwRZ6J82mSZy1LRnDwNpb2FxkhhCakqrNkS3XsYQob1ZEgeFN7wLn2fn6k7MHTXeBbUjsE58krcGKVxK3EM",
  "key18": "4LyGHH5DUQ9u9kzgy1GkKGuRAXSGZZZf6vFsYhqY9GwJkauoFy44viRqQCKWpGZqJN2Xs5navtaKD2fFr5GtVpuc",
  "key19": "HzckGWAyCeAi5kUWppkrkTwStoNajQ76tEYsfR8oAX4FZgw8MhXPZaNAv5LiD63NiLnuLn8LVJ9a4WWdKSN1H85",
  "key20": "3zQVucTRLbZgupSmbYByU1PMpiM1hkPhRsLTkyiLDWZkqY7jCeDeiJvviUseanqEphBb4uCwWnRYTxSjkGzfhsWf",
  "key21": "DAPG4kkeaNQfQVXXpqbQFdFZiaCUGPNWY2ASnj3JJxxPz8KSWV86rkfWtDKNRW6yfigAgw3vrTWgCpq6J92C67U",
  "key22": "2FcZwohvnaycXA8zMjiHkbBjVqbjy382378W2aAAfuWGwJaV5RqfeYanpQQYNJBy8jR1hNbQSETMGuaGJbsTzqav",
  "key23": "2c6HtFxaYmiCrvm7dowVnshekFcepSaaYkay8UXoWDjpp7xpZ66ccQXsVrRYqUdfCAs1j3S6jTojicCceGV5AR6d",
  "key24": "3nVpW3xAidmNmVXs5HFUpBYGNFXXsdAfV6L54umaKoXuysELJFEEpEPP6fGiMHhsgjXRxzH3ZJ2XyLji4TrtUwEF",
  "key25": "5uMY37tRCUxJnWkuCEAgDotZRLV1cfm2moiYnAKt3uJZBtCpBPCM8nbX7tw9PBs6jio9T2ALwVe7Csgcke3k411c",
  "key26": "39yrE8Ez1Mq8UMh1PF2kd6hQ51AcLE73FBuQyhJwEitd5uV4zKLqoRmUqaTKbuscH9WLy8CY8PLKeC5VrLzvyNDr",
  "key27": "4h6npMtLx5F23JL4PxxsJvtiReiwCPw44iu6Bt2dH4DLK16wL1zjuP778JxLxqUfQGzToBmgGVndGSLPZm7Nt6JR",
  "key28": "5sN9Pdrc7iMRXNebEqQhsnGaRZjadpLpn1LxTjc3h3y5yahdTtE2os4HcAc35TzFQySHc96qYaDuGAWBrAMdjLgA",
  "key29": "unR49iekEZXPqjFgDckqFRshJWm2YcjantSvYng3134PCaCvN79SVd9vHnywhwLLd7id4GtmTJLWGCwUTccZgQZ",
  "key30": "3a3PZ3jSjGyHCYzmshBfGYpvCuaJYNBpqusLiHygfFeTehwm1KKZ7zH5QDKxxhdcUPfd7T1UooGJCbAAiu5uMmn5",
  "key31": "3JyjkidJ5DixuRCU3oDKzceZu5w2xxUdsKYYUQSvLbh69mE4thBdjbipkT1mfLzuyX1gy9SKvjtmfcMARErRjpSa",
  "key32": "2hqcyqF7FYE9YS88rsAxHi1DCSNMXAjGWDFnh6fQbQEQmdoZp37KhxF4LutZAxNwSFbyVhhxRxKaxPwh4y8Pr3EC",
  "key33": "4ep6QVVwGaordrNeumg3fqA7C6AeaXx8MPzUAy2dwEvnb3eAEGRmKiYRbvaseGBnfSjZ4eTpxdnKjdVa3JMHAT7M"
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
