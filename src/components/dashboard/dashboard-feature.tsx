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
    "cRM9zDk3F9VxucA9mXCpVRH49j9tGgMKSJXq317Bt1jUysVzJc9NpUJoXW86C9cheBJB9nnUd1DPscsR8Y2Ct9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A3WzQTMhMeFKUTy2Lo4FKgNKVsJoMUbp9LvhjmXR3Jh3jFwuLvCzTjZao8Jgzh2LRt4Pd2USEBmSnEN9GLMrifp",
  "key1": "43Q8GdkFgTH22P9aUfZB164cgDC8h69isK4ZAcaZunvFSrW3P82QX65WSbWhaAZJQqPvKh4szJKmpj6ffzdANY3d",
  "key2": "53JQovbdgSoVcQ3auaUQcMXoHbT2CeBH3Dq7xdSJUiugSepHj4CmJny2wEdwUGmtrbzoyFFRtWcPm1Awx9fQ1Aq3",
  "key3": "3zhcMx7Hb2GZuQKc2KC5YMPvSjBuXRVnVw4K5arGpzNrGcQPeTNar9pyy6Wgzjb73mSu28ZddcQ1cNbRg19PKJSG",
  "key4": "fB1PK92TJiGtYEBXrpJQGssYKxpu1VHxxEeErRwBRomTadCwsC3yVNrX9MCRMyAEwYNxHfQp9fVkUpk5oojcBmU",
  "key5": "x9g5CYNRhosBykvXKMQQUQu76sU94NdiR1tH5fpuTPRExgVBEvfJjutswF2HQSkoBZCvwBMtZybSWeQX6vr5Lrr",
  "key6": "5amA6XoXGdbFDW1brGutjjJefVNWYEcHH5VStxLdk24FrW84S6K9HDzgEfJN94vW2ukbnZVU2MZtv8LkkqkMb15B",
  "key7": "5PBKGKyBF3T3PTv5bYz2RzhSQhwRxvWSciwtttszHsSLyFiZHpSg7y4X8bundvfwieyc2oY2sRb6fCDat4KVPPTe",
  "key8": "2ghULaXQCh6aWsfujckGTDty3So7RpgjQagezDHffQNNuHzJ31U84v8XK9cPGHeTBTtUgVw5GZXDmoy8kYCQmQ1i",
  "key9": "2pjD5MkddNLAs6Fjmy389owgoVujHroczwd9MSpfqxFpsfwQDnHY166YWjBdUVeb7zepFPAxLCVUCyqNyEumPdB7",
  "key10": "2b5o48MdBTuigd4hHAjnAsS5qxvE94KV4YPoovt5E5RtCJzTTyairHVsjfRR4zFPcCNuDvRVuFU9uC2XDAoMyV4u",
  "key11": "JcMuYQo49XSMicHAQJaqjVAGTeDaLJndmf5SsWKvLn2gmFFToP5y9uZBwNjX2WXvukEvmF7KX7c8PPcE9DvwZDY",
  "key12": "3C4pMwxNCdiYTbr7TWPzb19ZgG8fSzsqQeKN6sV8QkvnCo6vjcukpcjjFQAWgqXdMdB7DDFoPUDhSBkJ2XfmDgCM",
  "key13": "4Ta8ZYjWQrvJE71bGCnwLLa3ezTPPLUX64Vf2qjeStxyDSDMdxkrKmVEEfn1risAnEApigawcfHtCDDUDoS7pQXU",
  "key14": "4y2fYBooWChEaMFioDwTLXfWFkRprAzGczACDH3uXaFyD3cXFnWeBmq5sRMrJMPAhJ1JPbaPi8CYo1PUBLZtnQNx",
  "key15": "V1vjs935oiTouMqUyyrC6NPkRHZA9zt45pWjp6bhGtNe6MGeyo8Q6w745LMW7zc96XvjKaXnJZsag1gfTioc3UV",
  "key16": "2DZsj8osVmJsbZjYfX6b2CBrAsPBQHAxBxxUnzcTUdxdRPzJtc3v3H5BUybUgvH2QPR5nonDmmYYdnjkTr9H7LJi",
  "key17": "4cJWJbDArNdH9w12CmW9tgexz2ccE1fj5vLBV3o9C2SL9cLa3uD9i9bJoDcP5qU6UkKcqxm9XkUPwvURpfSKd2Fa",
  "key18": "2SN3nbfKtaNSuHe3yQkUPZj8trCQV9gxkWkDa21HBbf1anQLyjnCLc4oSiaRbfmYNGATLe7dnoXG5nN2cByzHjvP",
  "key19": "23S8np1nC4PzaVGNohJgpg6UUm4VUV51D7C2azcuepMc8vaWksXzsBNt8uTrwSkx8k8ViUuwJ1sNwt97e7m9xf6j",
  "key20": "5n7sEfYxLYg93fPCqHqZCQW2GUwcp5Strrdw16EGCcTSUomZwveo9WpYUb46TVoU7dT6nFGn3hi4hRcnYFgrHDKn",
  "key21": "5BNNae83B8aTcHuF2B2DD86rs6DpuHYVXW1A92KR4xtJysy1Hw2kQbUpEeYKmwkzT8mmDX1wanS2yAsYiCucx8kx",
  "key22": "59vchwmZEk5h4rnFFAtawHS96kA96EYdSTFfHo6SdcnWXB8JbXHSdLYYfbwSastxbWjaeuCBGNKdXQBrkpepTLEW",
  "key23": "2wUUxaKHDbusLYpcmDMQZhh5ZuGXx4MR3CjXhPgN2eUv9WdCKrvd4XXoENgAicawCMmFd6YGAVcy9QC3uAMeM3CK",
  "key24": "3V37dW2dNJ3yoGprU51ii8JnwAC5mdN1t6qEuwrKiUZmSTz7vcTFnQkUJSYxEaefBRqhUwDRXKRojYY579h53shN",
  "key25": "4gLByhXtwgnjdDGytLc3Qzr9ovuqfYv6D9CcZ3pawgmm5mDnomJxdzPUqcMfqPpjXyg2WF1NpQqbJCe8n14Dmbqn",
  "key26": "5iBFi9717T2cymm6BbwHp7CuSZpSWAJ4zQYYUjQZjYVBtisZT7ho159iGCD72HHmfho1bnAgTWJs7HBLZwXiCzjA",
  "key27": "2MgXmDwCWARHm8ZZhoLnapyzsunQivjfCdCRRi3dH85ABe6J9bAWBqzprkKjadQxTdBni5C5k7TLgVg9tWzK4Vyc",
  "key28": "3TPgwG88Fcoskuw8WsUohRKRSu8cu96U4SutsAiNxuSjedHQuuUtztYFQrXU3ZFi8RPdC9CvQwQsuwnUoSVYiTZd",
  "key29": "m5x6ugMHUfehiHmCPFcrctnyGDb2tXdkABu2Sm9tSpJc24KYfGcQsh78bW2iTDtC3NkBSYMUuVHHnmJY9wDcMA7",
  "key30": "2PudoBoBXzdQ6H6fZ4sqHRHxyusajF2AGtS9qEBqQZzLC18xrzPmxZ7rxf4eEdztQktuFMB9iznsPeTg2P2U4JCE",
  "key31": "41zJxqfAUMYedS75MRpBhM4KXe6EQwYn1MkvW7dwnofnore7UZY5UUhNgAdBzKSj2BQzopaQUW9fNNisktLWm6Ah",
  "key32": "UQzZgTagnyravKUVYoUKmwiYGCMfdKaJrDftQX4kj1B75cf87XMohyeMiN9qCzEoLbPMHYUbrbcpW1EVgv4U18i",
  "key33": "5Q8SedPcyL9zXGnstE25dCx5Gx7A6rEDFUZE12BbySBbFVgbHiygTZDzctnvGNZ46hoqt81E5V7QxYiPZY92N5US",
  "key34": "2iLS9fYY5u4iFE1kXgRuc6xGfvVHpeAUe3EWbfhzJdtSUkEJYhrMqm968ChAKyyJsTUDgiGGmuptXBtKXwpWMBk7",
  "key35": "5VPmtxWLm1irUwgxMMuNcRc7ygYKoSshJtNjVERNFMjcCmBhTPaTyayQqGGVCWaoJKmvJaqLcadH4Jc3nTZ1FYM",
  "key36": "5sQKFWKp6KXmvQuHoP3C4UJhRcXpxcaiuAyEBrbfkyotyjqHdkjtQ1NKJbue7JkZ7BvroXBuAGZgPisnmB5NHqjS",
  "key37": "SEFGjrui9ssbqmJKFAPbS7e3GQ1jgGmh8LcU7oVwM2r3nb7V1T2saxhJugFhGCQ64bv5FtDKqvviBdm3FAmyTW4",
  "key38": "NABexcG8CgHqFR1bfSnkDj8VVqBWfS6pYQ4fwcZAcGB53nBqu1Tq1SgQmL8yjvv5GZpULnDFBEsztXiWydEURkY"
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
