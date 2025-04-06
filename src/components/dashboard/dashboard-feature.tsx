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
    "62iDKd97uL4kU6LkuA1DfR7h1yv85Kh7x6uyh5UDYDg2Ys7v69dyqosrTuim3bE6ZbaqPSrh5u5x8n2eijpiL4KH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ieok9ZT1Q76t82ZrP6nFrFixoaaaKbHFGCnEFWUHzSQHoaKG5uUXPfRm1dNQUKTjTHm7WH7ra7GBNVrSNJXzT25",
  "key1": "2kzwTrKrsjWYRwK7rbFBG1MqiVxEi487JZSnxH91LPLN9wCyBLvMvJ8Sk8pXEaijgXfMriiFbRKdUypb5Zp5hY6F",
  "key2": "2iQNQzKMorR6T6tdXJFkVjHBySf5b7R64Bm4aHF1wyPVFaV3uM9mgKJHx7PqaNRMu2awduE5CCywcywuJ7zzR2Nm",
  "key3": "2tHirnAbptHULWEBgvTTBn8LZARXmv9KeCT7JDFMgLk8JE5C3yrRfWSzcVi2SMJWywvgunnsEggbVzCZapLs6uPL",
  "key4": "4SeDuJNQtyhW4F75GerhaKCbvgNhARuMr3q3qURo139G9GPHDuYttc6ko2eZaQP5m1TKZpfA4LLBiU5vdmeGU5KE",
  "key5": "4wy65aLAJVApdayBkomZRbusbGdUrpGk9tputujzkLPrPtgu6gK9H7o3Kcaxwg223erbxadM86T547Y4SEHzPYbk",
  "key6": "519oU8KUmKbrSWr4GitPJFPrsWQ4UWnkm2qEXsTkZHuFo8nTqht1vYSrvZ2MeqZfzHMdho24cqzX71WdyA9Jvcxf",
  "key7": "33YApHHcoH97zHZBPq1zQCH4ZApERtcL9ygiW2VCwtRN8LxoTQQp7JrFyokkdYJwM1tAd1N7GVorYPfQ97BfTRB3",
  "key8": "4MfX2XKzVvoEYH8BHFmQeUFXdLvEycXnUdrV2HSkFRbpfhRRUiGJT31ab4wVZx3sAdYm4jynC6sZU8p68HFcBZ1t",
  "key9": "4JpnWBwCvo5ZythAhhgsFoJnwm5SnazrqAsNA95WbfuVfxQb2AKkbj59JytaCL97ZF4kDu8RLSsALhBXFVei93J9",
  "key10": "3DyxuvgBQL7ssRnhke52vRYAMqetZHZqAPVWsi1mXHpNiyL7vbJBjBhqTRZyZJPmYxCNRrzmzkUyVZFL6pZWz5hw",
  "key11": "4GRw9u4bmLM8wpZS9BTnpWRoDRGStPGXJQSBWXPp7y1wKVcsymmDVAV1THKTGtzXPnFSY1J47LsEzx6mWPWE5JY3",
  "key12": "38BKaieCNYZtx5MCznb47qg8VCTNmW7FwFTXt4wtuahpZh2pcLcvqA57sn5T1Bgf7Mp9dMSgufG4id1RJy3geQL5",
  "key13": "27gCN1pTkmiayzUpx6Y8ULmkmdNTo8qr623nLEuXbryAG2udf4cGfxMDLxftZW3D174inCznHFnZGytyZyrFRwuK",
  "key14": "4SGWnFwPNhQgKwZ2MniyytkSL5ZvW739HENzTJJMG7uFXxBMD3iT2HD9ej4ojQ4zsuG8zYU6VzcwTxM9GkyXgRLA",
  "key15": "3oJj3jrRXTYYSoNawxLDBfkgz2YJsnD76bcjyYJ6UDhswsZpkB8yBy8sAVAkxjx8HFDkj4h1U24BTSX84E6Toe7L",
  "key16": "exUTZHmYngm9frwPMYy8y59ejbCzTSxTSmUvaJAfKU1wASLEc9Q1p6ijJSWhUnKMDD9qyySy84Qr9Vd5yfje5ji",
  "key17": "5DPRp5QVhusoCGrhAhzKkikqiWRfNy6oVZB9x5VuXcaKUXVkgJ9Nka53vS9SdS3VUygMhFTQHZmBAQi6o87HrMJV",
  "key18": "4N6HgYWQ7G2PDv8omMXqqrtwveR8dyLS5YwAWwKd3udSneyKpN4EMZA8Ftic9zdZexBZUVMLrk1p5rKkFxpT3TFB",
  "key19": "4VVE8HDfQtjMwi8tLHszJbFXRjZdzBDzgde9qoHwfAdYsqZuAxp5yvnsayNMz8EuYmRThmGvzuYbh7FH1qSwn3y9",
  "key20": "66PKFPBN5rUxuQQdRTqcJt15tTUcXHDttSPMTiFgvt11FCMKeYCY6B5q32WxVcbjU539Y5Txax9AghzAtCXaqy6d",
  "key21": "5qVdPdWxs5NGsjBphyBUGbaeoAZ9y2thubeFw63aw7fPo4a2Hp3wz4ycT7G7HiKVLT8Ky9MavSE9oy89fzaAtrTT",
  "key22": "2KoxqY9Lhhig1kAP9cLfNJBqRPMdTBA1EAWVN1UWyFWYT2cBqWMXvLBxt3sNLVYzpLkVhm9iBTwkpNpc4b6kmvfw",
  "key23": "2chXMwqHtGjPJUy5Kf6uVDKxAiDRxvnKycbxtJjG87anCa6b1GSA7N2SzyQFCdpJZu3v66E8pVrjoUZeRmxtJxx2",
  "key24": "2ULrGaKziSxSGZ9vuZZ5EyWr2ktLdsP9eNLRTupusYsVitasNkpVMzEf4AZpNDTdMkQQNwT7GssFVr7QTX4y79Uk",
  "key25": "54HdTiF2g5DmF4GhDjbpvRq5PdRWok4kekuHsaSwhjyHn5e1MXo2J6mt4QqMkBXkmWTvCFwBNFE9U2eAQ76YqtAd",
  "key26": "4L1LRthq17eB4xgy3g73sKbs7hFQmKDp51iJc6RSsHKgkCS15P7Qa2NL5us7JvCViE2wxGa9hGGTVXVh49cyZj33",
  "key27": "5sh9e52nxLqiJh2asz4SMVGshDqWPU16rRqJBjg28CXamx1aBJw8ZzXoNzsRTkXr9FQwT93UL6Vu8m79MzQLskxz",
  "key28": "3EPLrdTHYpXEnGYUfoukkmpnWL8pUEBfp53qVid15T1AS9RFds5WRq3vv6KmabRDNjsKKqLxFGKYruMoFyWwzb62",
  "key29": "5rjEh5a9VuvuQ3zprox9zzPxUt6oXXiiqT4BfsFQ72jiz2Bq1HT3UFgYmpRucfa377zXZcpXqux4zszk7TV6ffob",
  "key30": "42ZgD8JbVJv4jPzBTvc52t33XyGYpCKRPqVEddc2CyLVWsd4hwcQzrLa19RKnZycnHAYntXERk7EUie9i6SACGgT",
  "key31": "4wTgs6rVFzv8K1EjFQxt39nvmx8NdCZDqE2bdAFd5vS2fQ8FzuxFE1AKkjY74VpNL7Ud85MHwjTp97Ah3aN6vfEt",
  "key32": "3jmDYgfEjubQ68AMQWWCUDAX658V7bMxz6E9837LLH23w9tbSdxKgvbx3XXg6EbXdVxUJKM1dbfz4jAaVQYwtJiv",
  "key33": "Jp4SCExe1mWRyJt2FsReeLfTPVckTC9JMyHAMnGk7XQ1qRGhyjMfNgiaTmJKCKLRSYHNn5sWKNR6PZnNMqarYzB",
  "key34": "5tP2UYQpRN5r6wGzaySDT25QG3pihWC7N6YhEA1EQfTdQxHDqsUsQUP7hMSxoG6TqKNSjdaaY6j9fpjSoLxocBth",
  "key35": "2a5KFLdw8wQcPcaBM9EuBWrG3AyhUaiBzynu2aNXRJqEoE2JPhaVwLoR2drib2PFncQMWbDx1byk6ArAmza56nh",
  "key36": "2FvRffXmjAuk6HgXZTWaGB59h7hXSTHdV11zr51PScf5gEHtCuxrR9548VXKgoJudj36cNP9Q4GGeCcc2B6eK23F",
  "key37": "2Q9ebGRXHTCZmUPpG9zj3UoMp9YrRfPtaZ9PLapwn5FxzvFENaonivkys9WCGwGeAb7Kk4rjniZxuCguEDPQ5XbR",
  "key38": "2ovDXBffXbuUw9ATytbzq8J7YiV9SNueXTAyjSK1kiaRrNkGVXrFg8NvCfxajA6dm2PU4jVKv3WzAKkRymiJdshV",
  "key39": "3ug6snWLkaGhDurmed5BMfhfrt4cnXQqHdkBtYa6rxCXBYFDVWAVey3ZxwmUbzEhGAqWsvv6m4iAA6iDETTmprKM",
  "key40": "4L8wLwZL39ZXxXFWd9VY9u53z4kkMEup8vC8q5VAoZZ5oTipPNFmZnjYpS3t45Ztxn7bTWPvZ5hsyzSNuyk7PJSp",
  "key41": "zeQGC87pjkGr1sqdCbNHQHu6cvoTo1BGjDc7LNuhU13wbg42K1iTX7Gi5JLZvHekGQWFMBEtnbnK1YSi4FoGSUD",
  "key42": "22J16BsMdvhjfUM34ae6mTpYUEoV2JonA1vMzbocM3z1eRPxxEXfseCkRdWDZHN4g8M3yv2Z395xZMW96tubZ39X",
  "key43": "3RrSLE38RjXEMFTo1hWtb3UjX8mHaecqBnEyVSDqe9hkUvudw84HEzwtDwH8s1BDL7ac7LE5kTu42UtyabfhjFLM",
  "key44": "29Dw36GZmzZ3B5zGfCEfXSMtonFsMiZicfRbW7ZsnWxfEDesYMcC26K3Z3NPo7ATpquJj8oHhJUbti6vKTzsrbWZ"
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
