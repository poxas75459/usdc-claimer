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
    "pMbb6CyAKCbFMGhbMQn9B9YtDVRK6JDHabg9DUyNpXachUwDGJ5WSj6uXL3kMwrmMuXxefwSCBLuKoetWo8PsJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sSFkmGLikFS31XCPps14oN3fSJMsjsmBQDnCYPyghmCfHg1aFbTChcro4Q1qZmkjdf8HgXfZTw19GyjhbXS9y6k",
  "key1": "3qKL36Cp4JZqM3afJN5p5ZXWyJnLk4gfBqmbARKX6yobWFhVAvojhGpaMwcXEfntdpkKaS3G8YB4CURAYueZdViU",
  "key2": "3jEthY8x4JeMPfG9DvfbYHdVY2x6WYRZVnrXsGoMeRYmCXX55srGrs4cZxFrCFDYCSk6CGqVKfJM2PbA17yvZnNy",
  "key3": "5efqHKzj3bUFz3Mo5v29nUTu57Ljp7248jvPZLZtRs5o6VYpVU6QYUBLLkz5qjVVmrp9ynhtoyxTQhtSHtoq4yVr",
  "key4": "2MXVr8x49ExdiQXgbtSHDXHVTAbaiTcH5m6n741XW1XqfEoYEhopLPwjuLdipd1992jjExzkZ9fGER8m4HNLia2M",
  "key5": "4Tuxpb5Ns4u2uJsVn1Ps8vQskyeY5TdQ2ZqVRrJ1o7k99mVdvLMhzTN8r2oNoMzDvSaKB2Afkt8ttmMo8dFV9xen",
  "key6": "2ZbkYP8F6mdEq9iSt6LqfkGmjq9J4j8UykCnGDVBGJG4rNMRvhPjaUVJKAdb1kDfgE2K3YGdU2R7PmUiNWFdMuYW",
  "key7": "1GrGsAEBqPu9cu8RiaSJgZT976XFvjBtPA8sFUzTgSpQ1eixArexNHDdY8PdtzMvBDw1JmGbr6i8dPmzN8P5Ksy",
  "key8": "38pwm3nwWfJtfEjEshYYgxKhrXnJteu64WmZtyXAy8DX4N2iMfNCShSEBgJRTpEB2TgU8Grocy8GW1TDXSNj9UPi",
  "key9": "5T4q77nyhirRw1NiKhj9ixY4K9giicZn5J1YraohETavSX1v1Zu5HXnWqs6XyQkZ6z1psJ2G3qN7sfctrgL6N2jj",
  "key10": "3y4Lrguo8MoCepXHse48aVMxY9oA7rMEr4BEU3a88aACCmb2tDsZdo64CpkjADZBT1H2Q76GdLFt5TZ5mg2gfiow",
  "key11": "3zCMaGVz6XS6rFzfmUHKp2pKeW7dYKkmT1hEyNrXKR4dzVbBjN5LRu7g1gAtLtUjVVsV79Z5bcmfLaTDDJFcjdn5",
  "key12": "5WW6EzAGbtnDGmh5uUpx7nkSN9fcrDuUoksKqS4BPS2atV1uHATEGTMbfx7rCkyVqULbTumdxUbz8c99iBwfTvDc",
  "key13": "3PEBbGoBNFpLYLS17wUdqCgh5jNequSpLdQsd6Q3XKGQkjMbHBWdG33DiCcs7xxKXGJbKmU5KpuiLuWGmB1YUFR7",
  "key14": "4SjLpXRzZcRsu93dVU7RsgGugzjYGMWZCSv5KwGJyuwWJynp47YFX6DCDoqWLv1stzC3jjfdmXKsbXvGWko3n6MN",
  "key15": "4SxHsoxVGmER5cYezfqftHfUV5qPdym8utSjF4TRB9KhubPQXXWfTHvRbNiCX92dixQ6ViAA2FchvF17UeQqdR4v",
  "key16": "3dByTD9MZfg66nXHGYqhERCeK77sd1GN4R5NwqWNqrzV6zymieDyrRXHCnPnwh3d4JRVRNsccdpXbYReYGrNLZFh",
  "key17": "3xLaRWTyTX2cXa4WwFtikhGtYwkLenBNedEyqpC7Dr8r1GenAXmr14PorPzWo4xFWK9tvVeYQY1L2q7cgFDWDiJ8",
  "key18": "545WQShTmjqurQt2E9qXEebpW993BKD9LmJmvkELz1XjK7B1icGivQc9U4Rx51vMLKRHiL2aUpJYEbbiTAHGm4Ut",
  "key19": "418rCbETSkp2hb81sUs8S2YTtjnUqVKg3SaJna8XXbYbmv4UWrujMcH2zKomDGt5h6DVEV97dYwZfuv8VHuVFDp3",
  "key20": "3CcWTFoCfvEUwzEhD69VfGy21wZgPJjg8LzZuHD9QXwGSHwPzwJjv4hhtPMC6j4nTJm9A6bzSM8btrR2jsUv6GZR",
  "key21": "5Z1Xb8af2jg1dFFbusLJXo2Xr33ByJw9ME1pUz8EkHFHn6LxKZAyzzHPnzmfj2SttLYLmDosPs7FpNgx2ax5o5Kr",
  "key22": "AJHJectNQ9jPXLooTmdzgSZW5sAZMoJEfAzQNpLqBJoYR2UKKZEqBtc5QsoiwEBcdmdTRqLcbZbSmrMdYfEMVRB",
  "key23": "5y8NaQQENPMVZrdzr4ifWMHTYz2nTRXhAwa4nQxgHN1v2dM5WpuHWByNa8dLSf28JJFaBj77F88pSbJ3f9PND3sH",
  "key24": "5PBK93wtXyMfMrMpiVB6BsZvP3GdZxLf7TRoQHzyVi4uyrBVJiFu5si474kTp7mv4Z8tE692Pen3ZhcJHsbCkjsx",
  "key25": "5vsrVbiLcusNVQqbvpCfaRtdVsSz1B95dp9rkmihCakRz1tEXgZUSTmk2Np1cmUG5K7w2bJdAtdiG3YZLW8UJ7u4",
  "key26": "4tVBuzoVB6imnP7TEYnazAKksL52Ev7sc51vN6r8ZUG5ToSqK2em3MvGskqsuyJB2X1fTx5Uv7EvVWVdF2CQUJ5H",
  "key27": "2t7Jb1ekUsBWe3q498fUaDVGDdt95uhYZYt7cdXDwbyjV3tvbWknHANVPZ3r7h3pn8SPhfH65RaK8nPSuNP3zamy",
  "key28": "4ZBZsY3w41oJAoYTYSpqU2yqVrfGDv7ihsf72JwfBAfnRrFqxWd18s3qHdwpnWPnmYQqVnmLhwfy2JTKVxh3uv9Y",
  "key29": "2VSunjqgpvgQnnqjWHYhDZj88MyjuWyLco3bggRnBRxYW39gcmRtn4RA48XPgbXLtw4jJ9hCXVTCubeLUxLBJZrc",
  "key30": "DoRukKPf3x7V4n882xji4rRhex8qzxKystAnkNyPevauHTSHMqZtwnTg3BBVWzNndBcTidHwqSWKCcArd2u1BiT",
  "key31": "3VhdCAuyDA9DJEBmRnMcBzX7YM3kNCjpC5ZCfcVLtxYaSPymj8vyx8jWRjE22vxzk9fzGDSWeVUCeY2dM7jdLrGK",
  "key32": "4VowDoSvipM1BynpCCnebxwyT87jhfvWD6mV9nXwXA7PHxLpUWQV79i6p7fTSQtofyW1wZk4nVXiKudGVxcuBHyS",
  "key33": "32Mz81WBpPcUoWAkagYVdg7DzRReseHux7tnDab6n4urXHFaY2J6hZMDJ8GBhzHHFxRjH1Qk33uGjZjHaoksr7QV",
  "key34": "4YnvQ6y9vshJftUQuEjs8g426uQCzCsncFgRu7s4NSJRAtXWerJAohRpACiqnKCrWHPHHfE9sNEdk8VMF77ZLc5L",
  "key35": "CuFWpiouZhTwtsTT4miETj1V2FZmoxd1pmZ1U8Z4id6yipNHXzR6hk5WoSovPu7icjdmWp5zrYfUtzH4CNeDrV8",
  "key36": "2mH8BqYmR2HLGMzDUfuiDPrfdjqrFDNf59avXHnTaQ7hPUUEZ1NQxAzRZpfj5zUqMzp9K6ttm7jMdYbcnobX1i4",
  "key37": "pkey9YPCeBraR3eVL3Lw3yBzyAjWnhaz71e8zFYSgJLVWRrzym4hD5hxNt83iLLkHKMfYdx1rwEcV3JY5r8HvQo",
  "key38": "5b8mGoTD82YS8yHMUkCwKnD6eyNqz9fUDqnK8ubUTVN8BxRyJBBrcRtC85xRSgzaqSVoxJf2JNMWPfroGZsSWSZ2",
  "key39": "5VPXhhxRR6k5yaiWnan9gPejZeoidKbBSukGT5PxTZ971LRsV1icBypKgKYxEWVWM8Cv9QjeDm6oCades3aVhMpr",
  "key40": "27s8sk9cUpFPCFo2TmoD4iU49aSK4QxD8JmCcbH1q3b9LVQaX93EXf5AGRky652dt4DVxXb1JkRiPSuPgURwjjro"
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
