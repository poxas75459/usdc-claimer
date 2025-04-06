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
    "k3yGKshk4nSpj3ejQvND8S7TG4qPNm39DN7ToppN6A35sh1TUVqMBND7Vk4Wwa55Xi9kyoy1tFVhkyCc18uTAtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bSXDU6msqtBbP8ys42g4nX2kKQv4GJNFzyNnQUG29s8CWp3AsZRu6XBXY9LSAEt9QKrDk7h4T8Ff4M6p5TRMj28",
  "key1": "2odzhm95iygMiyjy9rhZhxVCUXWjozzMVsDVz8fJfBDJwUVpLk8wNuNU9Ysf8ciivVZj8Kc9JpChBT46BV3rChrp",
  "key2": "FLzZBPQfwms77zeTbjGsSbnVA1iWxy3zbNpeoaJmKDSiXi6xDR9rxGNN3agAnQLMZTsnCA2aqrwu8c9Uqcfak4U",
  "key3": "5h8FGLGCtDvfET7FgWygjftFgvzCMj3PoYA7cvT9EaJLdYDJUvGBbj6pwesAtaUjb6e5UvurpgnHLdsGFqD3n1xy",
  "key4": "3RDFF7UWznUF8mVS63YEv4jo1mYCK1LnPQMTeBL7UBxTuoMwESDWDArbW8WJp2w5t349Th1deRb74AC3fXh8qq9N",
  "key5": "3ybUcQAMeMHDBdEiKvH4eBKVBm2Lux5tB85pKhidMtatAWawPeEdGty5S8DVQhnxHQsz1iHucX2JCczzEp96ptCz",
  "key6": "2ezS4Y8vpfD9u2kgDdj7D1XDT9PVFFh28xg4gsQ7EtN7rVYv6CQprr6kzoagFGgJw7UgtNXTegWTpEaqsfzHKGmv",
  "key7": "5d6JmBQCBhJSXs6eeif18f28e6Wfo42Wt3TH4pxCAt5NRZC6H1hAYVTLRaTejVLNbRVF55CZ6MHayThhLC59n63Z",
  "key8": "4mFo5TCWvE3z16uS8w1MmUpHydo5eX41xcqTmYpW8eGTMqvGLcd93dyjQCn8oPuMmLG5qMvznfq9LqXj4GyGDV7f",
  "key9": "5ZXqpCggXfTjqFd8noaiytnhzkh4Q1BCpVvdrubuWaJpVN2ir1N6xV7K1bXdNXYSszig3nfRqhY5QUTSMPsSYDkV",
  "key10": "5ksWJPoqyce72XR3eUyoPWPhJV7buZ1atMu7v3YinHaS1uqSzydtajvTYWorK8DahCPUNoDbgVaq8eHLw7idnzzE",
  "key11": "zzvSULSiQ1rs4surQLWP31NJMv3wCWv5g5RE8R4qAFnH5ywdnuWA8YRod1YxV4J7ocUgShcMz7uHLPJRWCaGmFi",
  "key12": "5qB2Unt4gUq8US5GrpS1AjossmDpeKgBrAnuH8brfv3pGxcNRpEs8kLimX4hoH3yRyYzSs3mppBqkxVqunBF3JnY",
  "key13": "65AZ1qtWBTsUE5NktDru48objz4CyTCYSoyqK8d9hR2UxnaHMcVhdXY5eodSNL1EEvKWQ6693GcS33zVoSUn5Joq",
  "key14": "22xzj4KXp8QzXyzZroyBFcVJRAQco8JFYrJJonDd5kFn2oKm7nHBFtN3ur6E1gNaTPwwuVgB6ZLAubhwJGecWUS4",
  "key15": "57HKbqmnoh9XwHJWmisRuBoBpmLyJvYoMj9YLjNspUiBVcgRLtrcFUkADg7ncT2nQAnzHNgretReQNgPsgEYc4Kd",
  "key16": "3GN7q54TAGnkXYemymnVPD4HaQvefTHwpQvpxGqVqcm4xF2HVyABJSwed4X8NGS38SsQpCzxf5BqLHL4ZhZ2x5wX",
  "key17": "5hD3RFCvZwxpU2FgYJxDGGgKe5HnTDLmuEK5CsPaD7ojTckTDSJ4B7KPYAbuNFZqd6tT5DqF4gqEwCY5iGbHQrKK",
  "key18": "27x7m11d3gouEBLFe4WDmm9LE1ETd3MGf6SdZdemY9Xdx1wKRSRox9HWPt6CQWtnjFZ72QLQfyP8EfGh2UfVGuh2",
  "key19": "8FeFrj2e8ZRecYL1RZAbUnP7qy5PhfNCcogpQtYWy87jCJod8BcJaB7wHZtLx5Hc9e57CzSadjgeL516DWFcEoM",
  "key20": "uPkfq7kLYLpQSTWcecqkQdUYYdzod8e4Y8EJYa832yvttpHmh56Kvxe2JcatkKWdscsFCQHTrb4V7fKoMQfVJ8y",
  "key21": "5TaLe7B2KBQsi7iLqWzEwRHwo2ZRiWdGhDE9kKjaWTZ5CWPb9Zm6zgv8Jofx8QrXc2QaEBJBzqmyAxBhcX7NVbTq",
  "key22": "44XCqDasmjsFUGc4iiYE4dpkG1FaNvV4xjiSYREHmsXzCyQrU9TqBXYHpfnYXx1gSvK9H6S2jHsKrYfShWgc1kYN",
  "key23": "4xA3YAEK81VK2tRecf5m9DG3WubowJnJLERH883HGbuDdqpN28LZg3mR2aok3U5Pa4V2CciYLo8xs7hfR8KLELpd",
  "key24": "HXsY7BVtQot5N7hyKxhjBpJ6cRd9uczfMfXFpvtWxdbbgNaMcCaLsx3C2b5QHRdPJeqmkFzWxk2q4njmnfMW4Ac",
  "key25": "4KASTFtP1JWaaLzZkehscyRejD8diY3w9WACSoRevvcvnkgWzHW4ac8Gro22mZ141MpAKkiMgQJP9Wi717hpcMyo",
  "key26": "5SRD7SopbMjGAqydu2NY5YLV8quX5VYNQK5wrEJNWjFS8HJZP8RLgqqixGe8HTMvXSNkbYyRibHQ1pEETYbp7sc9",
  "key27": "3cvTzG7vR1sWFKrMhhpw8kqARBSh9jgEmfqmxjQr9mp4avuq6MMoZMTr3MeYLEeWwcoJBat2FbmBzHE7MYv2ktF5",
  "key28": "m4TLd1qgBYejDr21ReFR2pS81ZekZCvBjc9BDvAEtzNvu3NisAJHa382X3E7fK9yV3gyweX3kPLeJatqC8Zcn1q",
  "key29": "3WYpwzJA59fjpgUgKxPfFRjo9uNX23taHmeHWs7KUXZB7jU7ygUrhLmuLzLwTjXDkSfUQiADwJDYbH34AdmYiJYg",
  "key30": "2AsUqjneS5mMiLBg65TWpAsLDtqpCEGSgjMnsAiABdjk2Pfcvx1CpfFY2ALqN3dHfUEXDsMZeTps52sDGJDsqfmm",
  "key31": "3Uk5UNJ3BE7HaHbrb6KhNpv3uGmWhDQofTcodQ2iLdAdbVwqZXnuaz8HWeXNSenQy8KRpbU7PqcQPmTtQ5J6hnCE",
  "key32": "4vSzbbf3bhp4s5MvtNPJxCA7ye789KbjRsaa4fNfbBtwnEgT8JWdm17vTRKN2YQmQdYuW5YYqPNKK5fNJuC99fKn",
  "key33": "2YPfTdXz23kLAAcetBUJV1iGNromncVMaTrB7iVyWYKewKiwKXgdJs2Kxb6MiCA38ZSKQAnRrQumzeErY1k6y6ZQ",
  "key34": "37LEZnDra2sVMpNvDiZhLyfkAUK5Xtskpm4xLSZyum552vWV4efhHBmaAmgSv13vDQyVjEc4aQoSu9FwdftGYqSR",
  "key35": "MK7CF5uYFRpfwQ6yk1pUdgpgXq6Q7YhYke5YyhxhBNTpKgcN7rECpFgpa7J4CzMLZjbnDwgCp4wLisvMAqH87Wd",
  "key36": "5iYQaxE1LR6kLcykdpFwyLrUP9zicDiszciS2p6HWxj7JEho4xMeUAibSVcdyJhGoduWe8vAgTaj58WTHUkCc8Ya",
  "key37": "49PA9uNc5KTXuTFabH4X5ta87fT7UDr1UiMESgTRcNjisC9jdXso2aBUZVvs9yPrpYjNZqX4ECZwzVsrdGpXXvUw",
  "key38": "KbWxFC2rx2VCsnjbKWhgrPJQDJHCBYnvipymkg7XeRdrK2FYAA3NEF2KrjWNJ1h42BYuzzWNTMpN2G2Jwac6RTY",
  "key39": "58t97gMvFGr1uvnPsMRa9Sf7jKrMbhG7ZF96YhMh2HmuVKDfuuyX23fALBEgC2C3k4vwXrpdWAghzMP5XxmiHWMF",
  "key40": "4d3yoSxgAKBqZaTZ1CvBCwqWHkPvXXJw2oouDmsyzjTy33jmZvmFFvef1352XN5qztMhwUHX7BodVytjwh1RJ1rs",
  "key41": "Bp5erWax9XcofVYBjHCFH1kCqd1BiaT9qzRYUYf6GWkssEEvoVFKxNoR2bwKbgoBJSn9ieBaMpDs44nnVTo2Lmm",
  "key42": "4wwWVzpz4UuLxPUQUPHKq7uQgv1DKiWoeefgUezjFm5Vz3HJJ18yA6jsLsVVEYNMf1GwnN1yUKYMPXkNyseaXE44",
  "key43": "2CqXMdgKsMG1i58ky6JMpXaUmo5sqcom7gEeM5U1cut2Ct6bNmHGiAkFHYincM4Xy7Yywr5bwHDYPGpwaJAVNhzY",
  "key44": "4cr497FY8Ddem1YoybtVXBGrnnN2Vgek3vNR9vGvpYUfiWBQxuXH575oxp6NdRRxNJG4ibnQvsZuh17VYjCPCsnK"
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
