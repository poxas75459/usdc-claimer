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
    "63rMbWbmrgzqh9sU2Nj2vD3ec4t7wSnq1zRUGFjyXQWC9yJNJCscqe7hSkeaXNPdUG8FjiXn8U9ErQeYHkpAtvXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iJVzucNKUBmqU83pBkbEDCUPXSE5JWj4y48UDSyeNJwSiYcFLMbWPDZ4b9TBHDFnDJocj3jpYFc1cKptuGwtuTu",
  "key1": "5c4ueuEdDk7kcX1VjEp2zvPzh7WNzTrFoB5HC7QRyxKeBaQKL7XpQHp2vR61rgjAHUCagV31LhiuD4xmMGKm7qPg",
  "key2": "66m54VCKK1jNE4M76pe1oA1EffuyTF1YaBWcPzHuzjMcfdn9rVLcCg8UiSaB7dwqDv9JPTH1BBHcUBnm1wG6ijBy",
  "key3": "3qnxqY5ScdaybkKsBEucBs8V6EbsXCJBPADAXJXaTLxsJPNqAA1noLTbQqfBXDbMpvkxLHkfR6hduaj35mCfvQXg",
  "key4": "5GcC9PC3P77LnVcof7axEEqXSW5nUjBcZMqGCxNikVM3oKHfzwAyFKX1sAx2XvL41NYxFy86ThMg2Rjhi7wogxjc",
  "key5": "BEPe5pog2K4f5rVgsayFrhYuHSJ6Hx9xiaWKhSNyE69avM8kjU6rT44p1kawPYcLEaVReXbwu1ZecRPJ2BfDwRW",
  "key6": "xHk783ntJhBTABm5iYrade4R3Ga3p2iVjvhDX3jUm6RUwCecJfDgAs3YAM8FpSQZs2nzxEHWChb55fxsbdvnHC6",
  "key7": "2H3bYY996eLPVYWtmEWvL9a3MudzFwE33Syoy2otzt1fV3s7u7v1y6nemkrHDgXGQbyFyyYKf4hR96J6TvNAXURA",
  "key8": "5hutrq6zA8P3CJcLiefy6aZ4u79heskMeCC1tXWTbUXd5yDWMiKagmdrBTMcHeHMb2P47wuDrQZLVCU732gQmynT",
  "key9": "4fV7PABHMKug4Z88T4eQsEJkcnb81ZYD9pYmwNB5nQ4nirRg55ESwhdKmJQNrLQWrxhCenfyfnn3WDZUsQMcfHvJ",
  "key10": "4F3cTi5bdUUNt7MTdtEebeZAge3L6j8uYfG2vxLcwnMPhPvWQF3wd5cvqgnXMec5bbS2w5EbXezihJupvY1dECd9",
  "key11": "266xX2vMHiovQRBPCSm2yG6NgqXzprY8ApXDrUCVpnGKo1j3iZA1kUkRhztXQBx38aCrgwnQDnbRyWH74bjXPQD1",
  "key12": "3J9t294MWx8vBgtHA2pqghFCLswngj2dFcBstk55tbCRtF3qFtZzqmhnUUwghmc7Sdi71PGsjUK1zgS1DAAUT571",
  "key13": "2BeKH3tPFUBzGKz2Cm5YoWsoFRP9oYm27wL9XuConTbcGBqerH1T7KDE1PGK8wpBPr22qWsEcL93UMdJKFDX3FP1",
  "key14": "2NEFrcSqrkhgrQERNfoAVwNzgTXR78kNfhUYe2CNJUakbcg6apbKmHsBe4SB52jqkbxLy7ixp6uYXnty8ecNsXk",
  "key15": "28z9h5mxvFtkCwhscej3Ezxt9d9fLynKCvCkJEs2nRje8ahguhHzWQ5yMFxxpGxtdhVXPRs4ob4qJ85oL7HcvKyf",
  "key16": "4WnDYLTw3F3fHEDqr3pMDSi113HPSV5W9PmzSV7r1mzeB5XLpB3om4JvTJpYCG7mGL2jNi2szAG4jqPMv7hDJN8n",
  "key17": "28JQiiShYPoyaMffNeVunhmnhDebipRAMqNjrSKouBJarBbEPN6RGpzMsM88WiDEUpotyGT4h1jU2UXjRLcQxzFx",
  "key18": "3oVk59azmsdZNEyUjQgksHfb4tPf2SQ29eiQTVuLTYMMsVuUDZQaGormF3bSodPQFuaWjhkXm2WWfsRTwJmXN2cF",
  "key19": "3fKMfYUSip1L1dxN7VmV7AaEtxjc1BCPMH7t9bg9insf4FQXt3aQqfUGhqaikS1RsQ9nMPPG6adNSiVGzaNfnzbN",
  "key20": "4g6LSdQDGiY4Knkk31Hqp1JNsCu8xKbN8yRVGipMTG8GCbP59pQt3rcRmJDZpDTLqdB2Extcry2oFRe6dww4HLvn",
  "key21": "3DZVS1FDYvn5xc4kUiJFoX7tVfXVqMqHQXGZX2nA4X4eoEkHMoYcRJD41aEJKmFsrt5X9wTpwUaMZBgdm6qkp3S5",
  "key22": "2ecUVCPthQxrsUJV8vx4L3Sc5qDVxR6jMnfY6321WpBKs2uWspWpawJUEJ37hVYSUhZ9ffQBbutkqQaM2fgpoHhs",
  "key23": "2QUZxVPA25gs9j6uogDkfj2mgPQ9zXRNYZ3ztoMbux7CJdSKekAbbqPSjRQG7wubbmBDb3UkSExusfTHfSRSyHvQ",
  "key24": "4hndbZatVS3CbqQfXytmzA7FyRExnnuVNenhuKg1u5Yoha347DzA8t8E6WGpTCco3dSxW8qqs3ZEQxHmVPKNUsAd",
  "key25": "23GN5DTp51QBYXxNyodWHfq91SpY9K9pH6uChwMFEMx1RLJfaLLgn2Sza6GmFMGPvNJRJb4bA9YTCESryBUZ5wnW",
  "key26": "dP6tsArwxByzCb8oC2ZZedMZjXT3s8XmeVJ7d1pXKGe8YpxpY6qFpUwMF6aWggViP9YXqWwU5vBsMMtGaEidY6E",
  "key27": "2k5UxwkovKhEGqdGeZVLFPHHaGuxRyGQkfX1yGbEs6yrMadVbFsfQEAtUHhATEqyjXem1jPsEYyAMUWQdx81LoBm",
  "key28": "2xYP9vSQ8McCzTDXb4oHLkhTPbazuLjiBKXL8jDpjfBj1svpteH9v3fZztHdbXnw9ejywgQcN1DYiZHgj1RkFETb",
  "key29": "2UkB4vSu77Veqnr9TeDRauWAouyxnBKYZyyT3FovBm2KQRfszEU3xh1DxYZeDJujhRmUZfqceadYwg9SkuXpj7q9",
  "key30": "3HDQAv5DoTH2FcfcTDdkoHfz1bkXE1MZwBtCCFcmn1WZgGSeNEqDH4Voh28rhBoJGmXgi9voESCXZMhiRuXZNEjH",
  "key31": "3Q1C99M7ubwdQzyJY3V9gcgSMsiCYAQdn3tKXcxFTFCkaUnt4TudkQaQGF6eeXLbahqRhor39MhMGDy27di7d1Kp",
  "key32": "2r8tbuuTRmdrb8eEvkPR6JKU6teqL89Ses1VYu9C3ZcNeqWYMKRfYwtF8FBwE9oZ8zwfWptQsfcp5Us5cCKGdAit",
  "key33": "3TtgpRmzgY24UMjbdPWaupzWtbknv68Qi4Uigw1RMUm4smic84Mzm2sNPh1D3uD6hoAKpQUkrFWjCbbqwZU8H888"
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
