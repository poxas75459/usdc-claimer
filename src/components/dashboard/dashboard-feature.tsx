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
    "2gUxHuA9vdAHk14zcCwxbSBfh4Bxx3gJ88QakX783AHUaBJm12yc53mZasvbsQSKtNUCpjJjDDAoR1HJr1DV81iv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Aqhm3XHg3HBfHzLiJJUWbPa6oTAYB34aogxzn7HNkx1AThjrRGcVxW8qxgLm6FSFh1xr8m83BKYTdYeVMv3DmyX",
  "key1": "4Y4xi3rNey3b5zdXiLhDjWmrW1xQj1WJYtv6XorQmKvMyfVmPDSuwGEjR9i1W7hT6atHtTCbLoyKrixCBR7bAe55",
  "key2": "5R8cvStcJ16Dx6bAzk6jucTsDH4wXxcqFXpSdY7YRDbc7b9rDLPb9HZKTiSBhaH8aKfBBBppC6f9WS84mb55eavS",
  "key3": "2JiVyqHCvFdKjVoUxi2fTUCrq7HBERQYF3nri2qFPVzESky7QrQU2xgLMT5oEKJd5SYqyYZV4L5W254kscjCvMf8",
  "key4": "3yUh7XDuUTx75Q71MnTjR4xBs8S1KK9SkynCdPxEF1Ca1hj7hqTsUfz8FginmyHufXSUPxBk3dyLVNDrPC53Fsvn",
  "key5": "3FCMZmZFDroi3PFTk1WLYWD2iq9WgJxsik8BUZ27PQuJT1Asz35C2sBuQityzGBdf7fTvAwH1D1CxrW5C3vf79TH",
  "key6": "5CdzaYFWdXZJsNHd2N86E8hYjDZNmsERmHtdDD3cJheBEAS1rVXeByXcdCwmzAy6QPsfyNZUnJzxcmrJnjJJCBVp",
  "key7": "4d3U6XxLQXukSJvPp36JBW5AbRJcft16cbKvmj6DfsUmV3RWw1gisJuWhzXF8M1HjnEhMdB5BJnBhgTCoeRtQj8x",
  "key8": "2k5B8Sn4WqpaMmuuctLdCqvakoPuKajbCqYP6WcA2SFkp18R74i6PMBQHZjLYcbcMRepptG5iRj41nS3TiX9v1xb",
  "key9": "5i9GswH4fDa6Bnd38BLjwQiWRxWFkuEbCcFCP1q5ngU54qdkMbvsLCyfPvurfK9dhkyshGxNL4JJqP459veKe9tg",
  "key10": "3S8B1jVDPGTmQQCCMJMnJygaQNyjQXdz8do4TRZ1iSPfsMVUPyRprAqqnM3wjRK1GRefYdp7dUUpfVfYgQrYzv2V",
  "key11": "3hkKLWRcBLCLpXCykFJCxQQ4qv1ijdDYsid7nm8161K23zbCuyqGS6XPr7GNcNGzr3qGw27JhwkLGdAw44dkfxF6",
  "key12": "4vN7XeQhcRDzSacM9ty2ELKihEejo9bR6KDodq6ad3YgP8vs54LsRK6SeD1fdxZHzPLpkWsZazNq2ZocJPt9t4oJ",
  "key13": "4CpjXej6SuVMMxUiBea3zCuLSAVb2BtAph1hAjS8npRjB1mqqEy5DeZu3SBE9NgEaLK4AHe2PYFnUg9F9P3s6agz",
  "key14": "qGBXgsxfbKNUNtMekTay1yhz4tY4oQWRpAftPgyQY9E82WfrLzNz4jqEna4v3by6gLFtzH7BUDtL9iCU6CgXJHv",
  "key15": "5X2m3LpLqZi3SEL8wsBHLQxhfLzyUx5teRRJbdBo7E4G2tLtTsj1nda674MGfpw9EDVy2VDqSctKEvFUCQUHWjzx",
  "key16": "542R41Bk1MYk8f2bxgRVAPvhr497A1BgQ6RnxLbcovnhEunjUwEF41A3wmeeMNAVEk27A8xvAoG9jGb9nmTAoGgH",
  "key17": "2a4CbnKdmkPAUPDDtY4yJCNPSdmdSrddD88F5Z7YeqzV1BhxbvMTes6WPgcEd4im3jeq9MuGcw36wRDQFdXi1msT",
  "key18": "K3VGiWFuoWs9EUiHRjCDaNai7iHNVostY9PUZncz4h2BrTJdTaMjLp3s3wvvdwtekGVCKiTZxuFRM5rrS6nCisW",
  "key19": "3vyu7PLuzVyAaUWg95e8mPxcG56j4urBGFCKnE36LvWd82ZwK2c7GLxGeohnfkhH543iAjZP2CMCEAMbQswqLQL7",
  "key20": "4FXNsf4fXN7DT8a2SC2ZH28FWZssn5X3c4UuFmZyxo9tDwfFWGPaB3GzUBPrxMS1HVSzantkPqddBYGw7HoMHEDp",
  "key21": "3tsZSiHze1CujBxap2SX6ZwpJMK53FKzUdn3MoAVVkUh2xdwzCof3uGU68MeEASQ6tAcRWgPKB5FJumpe3L9PvET",
  "key22": "4fpSgzChGfqFvSV2ufJEFjcwGYFXLBxdH73X4tiXxg6kXUmR1XmpcdtCpksnXVSbtpwwSkn1UtX9puwRoJ2zCCQV",
  "key23": "3q47jUdvNZgsGf8tfrbx67Jqt9DngrZ6MBoTVUDqxGakw7amv7H5HjGdqjtwZgpBFqkhuxGLecbK6PPdJyDayg3w",
  "key24": "5XsXJ7V8zy6HMCTvbvQww9zNRmhv2fVoCmtb8WRv1fRRrgsgDghUPhN7ABT6Tbb7gyTxd7BiNRhAZqYHp7yPL36a",
  "key25": "2Mx3GwohuoMRwKvjGcDqqtAoLrDb7kNG3iUhdvnCtne1hxbhdYHd3oAiiJCHigXjx3eF1r7SzGsqi4mQAHioDxxY",
  "key26": "3Beskp4TgAWhDZ8PBJzREaed4qANE8v1qTahoMB7WzhHtU1BD88BFK88LDKADfFM6bFajcCuoHGyHZneCPoT8pmC",
  "key27": "ag6wAp41tBUsfQaHgy6gRdLVNM6z44KzCS9SiusEK9eA3ivhrpf3B9AkMcqw7YBvA8eF9Kf9Q8KneEEghN9NrPx",
  "key28": "5ACnB1UmhTyxjSMgmTwSdoYjR1q4uueHVfv4HgMHthDh3pWsKxUyJfMS4TGAxkuubTzxfjtgH6sz8Ew7ZunLPvYn",
  "key29": "3XJUrnPvsSdpwHhahJ5fDFv8TjuYMtqystEGcvmtCh4d9rNB4moXWWqyPWMXTNZJUc5MqoUdop3tq7jKpuaZ54K2",
  "key30": "36LMUMFPD2XUUKDMg7hSWX4cehU3FBrTSVcjodgXKfkdwxU6DhcYx7CVfW6tmQMXYmuDYB5mWZFWCaok67ovPziX",
  "key31": "4QSUycdJMAo3qMwuVaemYuUFniJQjK1NAL42qiV8KfsxG96mo6vuwJgD6uBV76feQL9qgX5PezB7J1hnv1ZEcggi",
  "key32": "2WVayiDroAq6gdJeH1gGowXi8NRAc5E8SN4wFtZofCHa8nrivNvzddYpjnqQGj8HHqFRVJJN9fJUKe8e4RGP5cu7",
  "key33": "SRLY1x4ZyKDnQctrVcYFCpX7hiUes9B38KboobCFi1MC3NMxSYHEVEfZbZZ6CvK5FzirSkqd3bP1KXC3BCT8nzm",
  "key34": "2zVgWpPrpYDC5b8c32jzNnShs6DipTyDHN1PV3iVV8DuSQxY39PCoaHSLBkkcR5yKnh6XASd7HuKuDxZ15xVYDNP",
  "key35": "d5o7USmCCbK9ykktkuUqSvGzsjDSDLAZTH6W5pdwhGDumajLkTMY9u3kPx7idorq65n5oGT9HtmcSL3xxhQen3b",
  "key36": "3q2CbyBUDvgwVYovLuCUydnnSnR9fGskuA9iUku7CVt2sMQpTC68ea2LVazoiN8yoBMcogQwwGwpNBwVCDJ485Hg"
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
