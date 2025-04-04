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
    "4qw299Pu8qwWgAcSJtPgeMrQkQ6e3FBttrYAV69iCMSiAR57pZ34V8L13f4oUsozgEucUp8FRRuvfLCTiNbDQdi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M5CJN2drs2PZTJkKsGn1CNLaUQs2HxWktrEfNmUcmCJ5njnPUL8zpBWCUXD3koDRWpBHsQUccbLrBfi3Evbi8wH",
  "key1": "a1emSPNZY8wtxAs14XtotBSa9YJrowDrxwjuViEANaUX714k6GNnougVTFexVowTwQKuUFzdoffFLamCvxrSVJL",
  "key2": "23sdcsXg9spFFeFHJF69um3tgdgJHSgnosQX4q6Zx2hj4TZ1ivMPZBiY95FEowo37RFHpbqyb3ugx6s6ySAiajAe",
  "key3": "4RcnzdgsfTRxHNVok6oKLeYPuEZAp6jbrHShncERFXGzZkzg7Ezr6wAy9X9NEyw4GQZ5AiSz8g8yD78wr3v1aH6g",
  "key4": "4hfMsfSc4aDpffNvBF8Np2TecvpEeJkiCXFnbryZzx4vn5Mz8vAvbFGVRpYmXQtJ5fKpo4yesXkvDjx2XoSxATT4",
  "key5": "4UimDc2hrVdKAWSRPDxA7ooATiFnLpAidMwTTujuHqH334hV4fnLFoUJNEnEyyNot78pLbzvSn47xBcieXF1zM9R",
  "key6": "5pummjkEQdyeRUHfGEY1zLPP15Z2QWr4W2nQiaAUxTah1CToR6zoWLbgt98YiDr7uVJNZHkUYABhXCfRqWKJTFCA",
  "key7": "5r1y6HKTiJB5AA83vWqREQ9CSnLKZo8TuDdjzHrs1XU4aSSF9a8acLqd33pUmSi3S9fCxRC13gNrZnLo5UzeXMTn",
  "key8": "3VLUyEDKApCdEVDQLxqke3M7nyJaFV4GEVKTEeUsDYRbcSZJrcGqNtB5FgGajTT3PMNmvkx8RqNHwvamh9dUvUnp",
  "key9": "3KgriT47Nf6jjJvjD8jkY6y9xuNRNs7CAjAZ6Yr4qAGzgYc1qkKb1vnfPiFLGMuhg8R1Tk4EPwfJTJPEJF6Gj5HG",
  "key10": "5whavoa2iNLcchm7dfPkcYjkfVqppNcsiXd4EXUWnd7fQVoDAwbcJVaKxPHJTDBmM5NbQfkFF76xb7M2KDiCgTmb",
  "key11": "2EMqC6BqXZocWgcth9N1CJyKcTgAEEd5ZrKpKEhtMhMyhTWZb3wYhGBzkPVxNjuAcRhSgNig1DoT5HM1Vy4c4Nwt",
  "key12": "3vvq6MiXexaaPfjzzx1cnxvcwmv26Cc2NDkYNxfTV1tNNDT81An3foxyozpU8xNnJJTF6MHkVZn8YddWqbhDUyVJ",
  "key13": "4WsoAcUrF39JkYQmKiQ4NH3UHsXMjePBdaXzTJRZwvfvzZvg1CfwMDUZXK4P7DBBXw3DKBbACqaBGWKrho5SHS6Z",
  "key14": "5wm6DKykH1kBiKXrmx374Gzv9K73t2EHwGrt3cTAVh6dqtVXJzAfD5x5CuNFZwx4dVgd4JzHKFHkt1Fw2YmWeHqg",
  "key15": "4dsCeCn7ReEDkvng1weCuu1wvFbWBuTjTU8GbA4fvoJNL3XtzWJ1pzhGvz2xorCvXincd8najP3Kmg5ts86X93jL",
  "key16": "vEToyuju4mYantFmWT5p8zBnAMHf1UEshw7nXZitGTMVyPSQr4f9ojmGremMr9Xb9Cz9ifqnvsg3pGaxcFM2cQa",
  "key17": "3FtguKr9ycSADJUTLWgoKQb9428sooPQteyf4cRXa6uY3ipvSvjw7q3Raaw7uaEH6bKxbbcEi3bT2jwRDfZVpVPK",
  "key18": "59xFqM7mMWGGh7PWFULqHT3UBWrMwixvg1yKY8QvrtgAXYXfWCMp6gYnk5RKZaqyrMNMfEdTkiZLGGUGw1EPYcb7",
  "key19": "AAX5y6KsFWP4UFgGFAmWZtXyWFYspsHHtqKEyAAc2Ea4hqq5uTEEaziYDWUKVTjKvUFEYvjdjvnAPCHGFmYUwWk",
  "key20": "5QuvgEuiVsYMQc68hpy7TJo3jKTCEx4BpYjeRivvV9z4BYjLNc4VZFkG7pBPhKMjDpsqLyXn1QD7g417kC1dsRcs",
  "key21": "4H8a6cxCq7raumCSNHj4WtWfMeWhx7z344Lsbf7N87mYh9EPX3pCLTmyFyx8pQeDnWacTWNprLFbnd1hu6aCHomk",
  "key22": "2yfCAjWiTMkK6CKATSDCmQRhHFUcFaTqBcPk9ApHBcQm77HdzKLB7BQ8iEQNbkbmj8Jb6PjZRgiBsvwkCs1DWfxM",
  "key23": "2meb5uv1P1X1KghBxaX2cvMcxFe4nnpFz9jpdfr3aN5PpxVEu2cwNg3fLXdpqWi83Ku6cCt5FM7TCNv7UpAz7KSC",
  "key24": "4genD74jb1DTSgAJiwXP7Vf2gUqvBfbh3vs2DH4ZNWix5fUpuzepnV6mHcJAgwUk98dwMg3FUwac6sLz4d55A9yD",
  "key25": "NAtpzQaXBMvP4tVdEpKxr2o2cTADvNqHptAzoBYVBA596o1uB39FxaZZgMEV7a4PxqKpKYDQR4CK1SaH1Kvf2qG",
  "key26": "btqSXpxyqPpiPLnxZmVfFpCu4y591hNDoHmfHGgAmwQtaK3h1g5qpuGcGUiDRJgoGkM4moXDzKWGkQNf7MD47MK",
  "key27": "2pm2WPh2JhbaKDWjDMyncNvko5phcSW99Et2p3reo3BjQQzTEfjfpgnWGDmYPTjfJoRk6VfeZ59AgnjWR3APUMfi",
  "key28": "ErNbYqX71GCzQgby67tEmPGYTLjTLwjiPgmHMj4746dX5A99dMuMshdNCY38hM9APeWC1SGRg9YhUcPuZPQmZDU",
  "key29": "4YoaKt387oXCWEPFftSy7FCgwQHQL8z8YAxHk6s9j3wrRQdsVhivUBogjsX2Mdyyb57xa3twrnsihHXjSGgjqF2j",
  "key30": "3NoFN2rjjK9Np1iyapmqKeqmpf5xu63b2Zo1RwASg3UD2WriNGLroYh9k1hGVZt6puqKPnBKvbinMYCc8GrUNsXw",
  "key31": "5CzKpo4UH3VkpFZsV25jT9r7MerzXwAwsN9V9Ydup4WgLpMFRaZNyYAGx5uXaLmsj9CmGr6tSAggFmdD7sy4QcLL",
  "key32": "3FjHP1PJpoV1S7xSPneDmeQaJn3RUNthbcKW354jQK9bT1C8BHWaeMEVf2CVuytSxGg5Gvnur3P1rkVEPLpfZTWH",
  "key33": "5dzYDXuzGbpgEoVNBqQ8sapU237ed7YFUvmaypLw4KC6nB6bh32aJGLLjFR9f9Yzya1C6ppT8x5butQEZtBbzJZ5",
  "key34": "v6qBf7N5mmF9uVGXRx66h3eMK7Ue5bM5AfwMNSuXgHY4f6eEaHYvUHWkDdtMywQWNpCWgNqFxHEoUpU4DYT6ubc",
  "key35": "3asLEkfG2ekGCtnd6kJ9iwCEvM3PySvdcNTfSTejUEW2JY4mDh5Fu9dhWseP6LQyV6U4YeeS1c4HNgJLcEQiBiqZ",
  "key36": "5d9QnJKyk3uykA1WFE5ufB29Fk1FpbTPm5wCGPNYYzAXgpKkWP41ATpzK2acXxGcfiRasm6ikFoQMY1WM2p9uRcd"
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
