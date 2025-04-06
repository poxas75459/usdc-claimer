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
    "5hPCLW1iyfHxFn1knUgD5xS3UFcgBcNycJgVm1EunW8fYALJFSYBphPvwVicFvXWadFbAgV8nH5nLuTwKwRgFXxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T6PV3PZwfhxSK2PfNhUWRjFo4Pjeqihbu1Ze1n1PuWYPzVHrPQUhY7Ho2PxPyLWpVQ62QPSEuPBuwFbm9A9LYME",
  "key1": "3SpTcAu3jZ6RPH1zvhknZ6iwQoeLpzUg1J9tHiM7fhmx5Fc5NiKE3hAG8MeozqU9Z5wJ4AV1CiYojZGN4nmtwgkp",
  "key2": "5gg5vfBrt42x98xrHikLUADPZAQvXwy2h4ZyExXdFB2TwNmVvxArDH6j54HogqETGAFYLHCc1UjGtsa1NLiNqy4y",
  "key3": "4Bw5rEVj6QsygQnEum57RyTmzbe9hqYPdha867Kkw2cNQCDjBDvKaZod5us5DQtM6MndvSvJ1dB9n9KPi43UTFxL",
  "key4": "iHAdJVwc9h9VnK72GeoLuWysatgbDjfz8X4itedhnTwbC9fd5uUvN171mn7gQp4C47Tnss8z2V8wZdtMwWCHDWc",
  "key5": "2eiCCRffVxL4bsLa9U64QMvx67ASECr3Jw7CEVTnL7ZnHXxYMS7VNKNuj9pwFfHWBXedNpqEVKsYH7Cw5NqpP9XD",
  "key6": "3oAevvmZ56bXPAojKuGAoJPzBUR1UNTrYhTdnvxqbi9sN7wGDW3NmE7aCxff5K4r2YJ2zbBdBn2KCQ4AEvaeRLR8",
  "key7": "3vMZYTUYzbunZSEwyDJXD4e3JMsknF6i3ZWSnziDaSB2PSvZ4U3muUu3cxF1CqnNkkSDbwC94xwmku8XJfRqHG5b",
  "key8": "123m6m6ZKJewHUsg2mLMnpeApQCYUP49Npp55YHqSLYcapKByUogKZUfH5hPmhHjceXxYXnu1f29bSquo2uxGTzF",
  "key9": "35Yb4ncQNcvhr3e4kP2iAgxF2RGY9Q5kFvCCzk5NArfKnpbxnpPwh6TS57RTjRdg6xHwfsSfBg1H2ZqgqjzND3ne",
  "key10": "2Ztv3eyQrnw6tHXcYppnxeVb3GX7Em3LnsRLnY6QgF6qdnzbVfvuEUJjcLtpuL73Zex8PKqAbqtrfQydYpx9Ryyk",
  "key11": "4uQYcL2HauEk6Wrgex9kyJFfXiRT7h9vFhLms8UeSAdTYah5pt6WKHbkQgYy48PGdacLDLgUYqPQupW6HAWSMNkW",
  "key12": "4Q9pchednTautywGfYJYBTivj4k9s93rnZsDQ7LMNrGax8Gv1V9rzXXDm3kzDhXiLf6S2cetw8z6htZMtiA2wjWW",
  "key13": "5YDkxCwGeTniVM8PBBdA2E6YbasmQuwrbdiuZW4WmvmYFhy1e7oKuySUo2DzVFJizn7mTDmRV9fHuqmLJnoSFmvs",
  "key14": "3aD7eXNuoJhXoMbq2J2ybvAcWN9iarZp33kdjdMfrJrjg9eMQwgYcBbBvhZP3Jc7KXpr2BmnFCak27UtkveQNU3s",
  "key15": "3Mc7qcj1vGZjFkjN7XXWNYvHoV2WahRdYLJKyTeJBioSoVxtfP17LyR9r5xFbMdFdirpr9gwGYSaxUNHGP1YiZ4z",
  "key16": "VZy91uKv4YTGafVoV5MjYk5eLJVZCdDuj13gtKfQnWDvRhZ8ZvL5MvZaRbAjPWbgzsAyzRqMsCmwdCg4cSXFA73",
  "key17": "faGBXeCFiJYsuY9LtCmb8ByDm2KYvipZymVkRx3cQgceQFJQKpQ39fcVMdJPD2QCEdNNNtKimS6P6uKwuZqi51M",
  "key18": "BAQ5FXHCaGpjsguQ55BxcYrWMUiHsJ3s8wE6TfaEicijbBaM25nAMogAWNEvYN19znu1ZAiuvqsxpGponXYGKDa",
  "key19": "5G8Q88jrt8j7uh7ADBjps7XfjU6zVN4Fxw22oKtj6K98rAUjhP7htRYUDMzbBxj3W8d4jvH3xdLEYkoDqXqhWJtZ",
  "key20": "5bNurAYzJeUgaYKTRVqnZY8jX8SqqosbGNyNMThewgfRzwaFh9bQE8C2xRaPqCqPsuGurzDFtK85psssoEY8akWc",
  "key21": "5aqA4Gvzcb1KKo937bFp5VBsVUG7oVnR9EZq2rFzqh3PGTxwaazGcV8PZhHNaVGNgA1BHoWGMehT7wYvW7ggz6dz",
  "key22": "4GwUoigY67VsamSx9LWSj51ib7fKGp48Sy3BLpsUGDcJFrYKGAjitnSQT7EX93c1kUGnbnFifNAeMmGr1AZeUQFd",
  "key23": "2ZeFFMNSTp569KgNPJSBHKJYRrZeKc4y56ppxbanAKqm8Tekz3h1SfyhzPkgGFWEQofSjHbBogtAy5Qwvyu7FbuH",
  "key24": "3m66cgjRSXQ9Mik9oq2wcDubFemWzH18eBkUCrNRy8TNd5ByDtbeyNDXHjfvxWNpbwhuNT7C7YEUC5TBaEMGHTGP",
  "key25": "5dPsGddw23LzzrjvUuyX3HrnByWem5YGcogeAxQQJmSKazD11Q6MfGp6aMaaoJFgJR73DrJcapSzASDoYRBV4SW7",
  "key26": "4eAxF8F1voTTTJpHBrbi7MREF9fm1hbCC6Gsc2xFKzKKt1GNe7915Th2ZyEEqMnDEnUjx2qPETrPC2xG8A6KuZEM",
  "key27": "63zDUvu9tAJuLCnJE9GevAtPv3QmzDJJpwqJB1P6yEZckRMSoHASVuHBcWB434rDcmEU5sPqVmd476dkguvCHoxF",
  "key28": "3tFhjAa3gae3psXxYrgaKg45M3eewiAAodbbDVkK3FcZWGAvfYrrL6cGDrqhmgoqKH7mEEcsciN4wBWzvWmWUKSu",
  "key29": "4T1AnyYTPC3cnYow4MWYa8Lv3qyh8k4RMKAQFdsR72XoyUmwvGR2gAFs6TfRrVk6w2rb2CzQWtKPVm5yC8ZNvASX",
  "key30": "2kQW3jJdF4x79k8Xn3Xt7iXAHUXaXPV29RkSep9vy7gpxKBCrzqo1SHC73iwAaVeYzyNuYqALnvS3hRnLAsxxwSL",
  "key31": "5Sbrwz3HYKAFSsYxnXFRNb1GBLubteLMBYPicVm33mHkHHowLk97mSaWi1Vvn5H7FMCc2hxgY3ccLHi5sc7b64Ki",
  "key32": "5KcpdtSB9sYvpfgD35rTbMXiyrhYnTw14AMn3ijLADEsYvMpRWkbjsmAVi91eR8XsV22NGib73wBnnRjPTbp2tMQ",
  "key33": "5HPkM4mzDva4S8hXX42qHriGUQS3axyehbMhGfcSMZf3ZwqZdCUrLDgHejMYdoiv2BZAy9yK7Tadjx5VmxgQZvfj",
  "key34": "3qhZzHcd6j6zA5yD3pV9uJshxZLQJMbwCJkskEmZJRCXjeGjmN7gxJiaf6sF7JVtVWVPHJ6T6RDiaUXgCGF9FSXp",
  "key35": "34ytyJvTEZbh2QCtXPG834JPSct8YCzZBUsCKbguzr9VdTZLD9SxstGA31HhF1jwDtsmDTtzYMEnFN8z9GCPDtic",
  "key36": "3QbFRF1pLqH4gvXzPGM7AovHeSfmgpTywNsiyN7qGCe9tW729jdx6gQ4SeDrYZR92H1WWgAgKzm5VU5cFgxwN4ji",
  "key37": "5DBJWutG8rXxzy5oxAEUr3P7pnmKUxRkf8rPHPzchWm2bSCLJYUKo5EZJ1DWq7rCRXbN322yE26Au37gcMPb6pLH",
  "key38": "5ut4LewvkBJSR9huAAUPSiLQksYVfS2XnH64rkVohciWzuRrNsadsCP8hUBTvGLTKujwtwwpL2ZytoqcmsiAfMmG",
  "key39": "4MuwV4ETJ5sKNWJ9YRRTKRwa1M8ZkEcSutyrRiAx7tezWjJh5vmqnP91ZSVh6papsMFVMGH7PRLXAZRxi44Pu8hv"
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
