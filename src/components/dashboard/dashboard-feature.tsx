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
    "Dy1hT2oA7TgzCEZHK3ghh3JAe8o9Yh2wTtMpkYW23LePYuCaL5fNjWxPLXgyeVseaxasctuYVabMii3UhdJ6tnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RfvcUHmW33FReFad5YfR9vzu7po7vXKFqN933e6xGk9wzsj4t8KBWQBqfB3CZ8pMDdG5A6BGEXnQDimKfiDCvWS",
  "key1": "4TK2tjrXMGUwBK9DakqpXKMpTNueCwDo4JETQ15pay94LzDG9qUYESVxn8VswBap91TGMwwcpRE1Qsc5zhJAdSrX",
  "key2": "4sT2BEnXuvszYi2zB6Po7mvwhwRPFRwwK3yQ1GtMhwV2Do5bQYZwTZoDPZv9tcQCdZGkq8MDXy8XEsiGJPoUg8g2",
  "key3": "draaJ42f66Bmn1pMpLcbitSxw5kaSbCJXNznh3snu2UignvfMQbQ1FhekGjT6CJ2ibf69UDCPBsd2aLAJUhpxbH",
  "key4": "3UAWo8AUFgDe4qNBEDSEK2ekdgUigZ4CcgBn3xpJSFpgVAZKujzgu9tz2BY8zwHGwmGxV1Uh24hU6kyaTNV4iYgB",
  "key5": "5a6r2SYkChy5VVkCcQaBUQ4XHwyAXHiLPSVGAcBgADx8hhmf786wdu4QY9haZpF5XKfKTjQUL7sL964Wy2qNRVaE",
  "key6": "28QgMPCx2dueTraUN1843JUyrDM7zDykrE838d2Tk6VBAj7HUgALfE4RrEkYyypUPVc2SpRiYY7moL7Ryc7BkNwc",
  "key7": "5B9LsHmJ9GAwzhJkQ7QZrTn9DxvdViaiQFdx7wGdCWmKLkgXPXJkSPY5h8xDEBVndKL3cXPuCAkdK2ZggGcsaD6N",
  "key8": "38nRZNZkQnqxsR3ZYmV5fDbi1Dcj3LsajaSbaDCzwLAVrCXqH2uLthzgzy7UVTXw4xJspa2geCnTiTttNBNrjWhb",
  "key9": "5r6WS8yAcXAgjyMYscfmp3mHgJHubC3E9srTW3zwiuUc11m5ArhAk7SztUfQcw1iLqzYX5sshLTiihBoYhdwTSn9",
  "key10": "21oXu3DJvUVV2GJNfim4wrSBmM5J8WFBCwVANpbqJWJS7VCsyLcibckTPrJBtTrHQ5N3JMc259hfYyETisbjeKVE",
  "key11": "EUD7SgbdtwmukLnTEtD6HC7HM8z2YvwJTvop2az1K7kesZiaR3P7hdwaDA6hjuZMVKkfcvgiRYS2XrKzATpyFju",
  "key12": "kxvXYuEN5rGngXxjjiFpohrNnsjosr7hGRyiNTEFSigfwS64DeJdT42p9EEpgTtzwzbMSYUNr7XcNBqHTac6dLz",
  "key13": "3pBerHx7ZSCuF5WVsmYcmvotvz9yFUYjHDGg7owpbsQKvBMdYSnEkmpK7GRuRNwn8YkAgFrGXf7CWNrR45G3ZUrn",
  "key14": "j6QouK9o2ZZNuuNLZFEwDQQEcu5iWcvMDQH7kmpdJA4RkmcLUL5hXC7d5SQSuNdyZnors2F1c3FBhvTzAuKCFZv",
  "key15": "59Pyvk98Vz565GCfpqS9KGTYQTBJV5f5ATifTLNiDWDomTyhi83s1r1gduoKJ5Hmhh3zTU4cLHKngWiobgCvFmJ4",
  "key16": "3HEjyzRRFuuzcaAbWZbak5PfzichVLbk6bABi6dTEpdapjb3v35FVntTjAxz11tuCEH5KvbN1mLxhPbG1nVBv33C",
  "key17": "5NYBzLYzV243UF8yKxWyjVaHGPDGphA1U2gFEtbuC62avVYTdpxTeMPZprzaVHKhXWoQdYSRmd1vAZ1aAgdKvF25",
  "key18": "5rgqYiURrsw3r7B4r2AYzT6CFwTAgRg3qTYUB1issAkBrYTnyLhuBySjrL6JExSDcAfeeAiEG12kXkDe512B2Cym",
  "key19": "4hsjWmU87cFTBKL6bReDtkSn4SYGDvoJzgYERRWSi6AsZ8JpbyBAhdhBafQ5vek8mhTdmhASBhVnGeA4UyKeNQYg",
  "key20": "5N7VtzxYgrwLJQQvcvCkF2Gg5fFtSeoWSzwpH93nmNV1FAaKoot4dcS1JdKkaAejxCQ8mLU31Ycyzd1ZNxAecggq",
  "key21": "iXbGJqjFPmYZMZvwpEieDUh7q5Nbhnm8X1FoU58BHjPxy2nd8FTqRj97W1JN5zA4HjED4LpPsp1vZjnJjsLtR5M",
  "key22": "5k3Pg1vWy2fRy9Frd5h5MCiJsk96UajDd8AKWSt9cLhtTbW2ENGZdi2zWv79w1famLzBiu8fG6dzLhm3VawzoR6c",
  "key23": "65B5CDsXvVvE2K4Rr2k6sjSSDFJRDrL4hAYsQiXy4GAP2uHy8AbVPF5ket9DJPgBacefJofgoZDs6odoVukJVpBm",
  "key24": "59LfdN9u8d7JbwKT1KoXntDeLArneX1JaNHzdZGBnc1MZwTaaQA2h6dFr6iggsPSDigT4tsUvi8rRtTGYynK2QD9",
  "key25": "65jqipq2Wt3w1otPjc5kWd2kTB2GqZvTjg62eJLaYEnrhzcUToMKHfzYh61jNCvgiT8sukL46MHekgdFUVT2tsG",
  "key26": "fgmQtzvX9dd2bpiTqFKgGJErzGztCUDNjPR9VsSfP6njSEjgDmEN4txyVB1NissvPcnghmoPTY5mKC2KG5SGo5G",
  "key27": "2nBWAcuM4PYf3YdR5iE5Vkn8fasmyum9NJ9cc7VELSvXMWPFLXKNFHmr9Yem9r2TAEnmajFjp1U5fiYma4fhJQWr",
  "key28": "2G5j7kvqTen7XmU3jkHNkTVda8Y6AZtdDbGRfXMZS6pQ83QYizVDbsF57g8DTsVELydSxgucwYu8QcBB3j7CC1EU",
  "key29": "21eUQdcBaemN18oPqES4ufxjDGyUHZ27VLBC7j3axjDKS4sQrjiPxV4hSQS7Bti7aD3CJQrzKfDYVpiMdFxK8P8s",
  "key30": "D9Lw6kritbi7ChZMTcBipPWCn12ddBw8iPG9UieKxJ1matzE1hMu7YQLiRDXrUeZfqEWYfdRwTJt4vn4B8Kuhin",
  "key31": "5c9iaYrDhG97zwhd397hMNfkf9FJii8L5gGJ1L5XUCgwr3DXGY2qCK6DSoufpNGVSeTyD4NqLcMwRA5tW3pvRkDz",
  "key32": "3LpwrdHceedcW7WLH7b4wxHAJBqyeS5YhQoSQueQvENVTaWMMDAzjSdpk5AtXNR1rFHa3xsAJBgALmVsyhboqPbE",
  "key33": "5bfrq81s7UJccE6yHyzo8osmAT7u7gF78BV3gRy5eVHzXCzU7xb3RmS3MhV6MExtZcTDJB7VMiPWTdgCYU82rHKf",
  "key34": "2KKqWS8UqeGHx3mMdGgcMDHsVq5YYhN8zVA1xkcsihAjGXb9LJ9D5ZkxPrGdFW9UXsfnsu3dwqiZqY3E7VYg8sNk",
  "key35": "3jWHJofwQsvm6BgVxLXzm49KCj5NdpEjSx6YbiUGTonBZ5RLvkdhe7SeJ7jTaKoxD298DjjzzyHfQCExCkRGYJzs",
  "key36": "2xzeW7BoTAB5dQYytior78c7Ls89n8aHjzSJdcSJJuDJHY5efHK3Jn36Y4YfqMuDzLGajBCdx6NaE4LLhBYzj9Qq",
  "key37": "4VhcFLsqe5yxbWP1SteHZtBGoMzykPurUZAsA4TCZsrBCy2GW2Us4i4XNhP2yrpA4N89uCfJVT5DS3rt35LFk5hw",
  "key38": "373kvAtsq7KxpgCL6Zrqmn4CXh3b9MVsDKBJ3wnXnkVGH92uJmGUqMwTrWQnxv9kkKtV97Q8oMFEQcaKS1nu4ark",
  "key39": "3kbHCSf43cSvkTmK1cdQxZis1c2a8wMuXbpTV4dMC1UbVoNuQi1TGZUuMHXJrNsdTXcXcTewRCDhGTXEvV52Z8SD",
  "key40": "49NQW5UA77LmBnfYCUrZJeXjVDnMmBB8wG2LagFpHTA1b4gkuo3jBz7fDXrSbPdjJbvSKSdAJsNSDftNsqHoQDZM",
  "key41": "4kWdKcy2NzMc1zvbJbXX98cFQtidoDRivs1J2DCwofhJ2A5wDa4aC1VC8yjhHa1UUaC4h8ZCbue3DgxnUw37Yak4",
  "key42": "41RSBvbXRR7SoDUKrEgPvbs8ZPtwQeJY1C3GG9g6gnb3b3ogcRs3fLWA2gri8NwsRgF6GRawFfeZRqmnbgzubs9H"
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
