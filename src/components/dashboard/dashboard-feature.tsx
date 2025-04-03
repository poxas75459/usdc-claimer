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
    "4SvTJn5KrVaVhAzhpeRDgRzLwNzyhQkJwoPN6MBByuVnEZBaXTCeG2yaDrGHRFiF4MYUBpx9fbyET24JjdGDNwcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rweTwkHQNi24HvzGRd2aEAVet9VR5fSB39JimQQ1zTzo88tBfqozWy8zdJdEijLRQn4Q2orFNMXJsWBcNRYo4EP",
  "key1": "a8qrBZJtmHgJrnNJM2YxQ7j96xoaMkmQtoAvWS3B5aYQZ2hBVegHiQ8j4MpDmeUL3pLaZEuP7sqUN72TpdSonNN",
  "key2": "KHNx89HVjrMdsTJsSdMgz86RB4xqSFBH8c3yWkYUfbqEuJoTrxct3s5VqGj3Ruw3szqJRQK2GkHGsXbw7Pb686y",
  "key3": "5RX11efwJjER3qFUmsrT7fwF1MMXsxVvgVCX2vzwTS3b3LEtUnHrqg25rFPqdAKBd66dPF4Wog6Nr41da1MaNePF",
  "key4": "36SdkG98LFk3Kkw3gVeqEbDTQHK8Dk3Uf7bpKr3xe6DKVV7edBCAT7XuEAH7QQUPmmeWn4ptqAi2HYMSs5QyjuVP",
  "key5": "3CmLkEEqV3WFkhKonprMa15kpjxS7Sc5cjWnvhrCZeRGQpRZWNipWJBERMd24fDQ7iFTkZGWdmLjWqu1yfreQNs1",
  "key6": "CyQ9sRCpY8CGPfntRvQq797krEUmrmW6DTJ8wkTZ9LGjqW62StdyrkXQMKteMiJHMuPgi5ZWvN2V1HaT4jqtgTc",
  "key7": "2g5tzRGn6SNemeu74S6KbJMqsMZMGs24DJ3FmngunXnP2DMEvfZDSZHni8d4uc158xioTEZdsmF2L1P2xdPUTfoa",
  "key8": "5Mgg49a7dbKqsAjAWukQ1JLcktVtHfd1cncC6NuzMEPs8NTYfv2to7hPDrvWqyGSRipCdxHPnQiinsZxy2Ls5eUK",
  "key9": "3wQRZ6zEaJs9Gp4dLq4rR2gKA59hta24kCwgPesLUQvNLaZoGU87mAZPFLgA2zCrju5QEjSkHpcf3GFjs6hmmyc5",
  "key10": "46zndxSeBryLKEbgMFSuBdoiszVpgcwtniruUbb8T6cM6SmTaq3E8C7BWBXPvmdMpwkPLt6DN4fXSEKnPYQGevaD",
  "key11": "5wuY8T2GT7MBDivgjkUST9vBjeqJKBS7VQUCadgxu4x3ZRjJB4KeSo2a1WUyQq82SmuQXdZhEsxBtr7wxAtE8rMy",
  "key12": "3W1SpSd1sfVCHygEiytSGdr7h5hygxSTn7U3NPAbUCFNqukWDzzUk3hCfKeZYc7jrGxgkBTPqJES1HTiB9tPHApD",
  "key13": "3voDnw8gMXkGKFpGVdQGwH1eoKLRrpMNxPomeN6aS1LueAtH5YQ6RRxY8npJyNUMxJ7Rh5F6BFWpEYVsKKhccrRd",
  "key14": "2U8SBFMdTABeTgUw85PAPMzMegSwNWetkRht38kdWgacodYLycLeC3G8Lk4dvZtJcL9gdGW5X8khFEsprF6uUwBU",
  "key15": "2szURy8NyFi9HB25zJpjs6kHHETiS3f3ohgijcbEi8kvNWRD1xArtVeBvW9zHTDGAcUAAX4C2BsLdkkmzauePsRi",
  "key16": "2GsBkXXB5trp4JtfhBMf9pMA1JF8GfcQRVC99qxzVhALKbwqiVJoYZmoGaniWYob4LsJxFrGGAbFkfipd2d3A4rU",
  "key17": "5CXcRUSekeZeD9D2e9Y3qgsnoQCVJEu2FsKtkvXrDeBjJXFgpBjLbQSXHS5NjAeoSUi2Y9H5mVNnncpZZ8KEYiEd",
  "key18": "7YeJr4pBqdiLEFtTd6bLp8C7JJwgD84cGZkQD9edXMxEBdTAtxWMVgztvcstj9hWZi6DdHRWBQGs7ZTC91jBaAF",
  "key19": "3yMuuLs4kJibL98Pd5qFVpESEjkUuWFxoUbhmXzSn2axNBHsjeTAb5yRDXVbutfFPWucHVanuoMqJ7Xpjd8aym6Y",
  "key20": "2Nfa5pibYerSLSU5YMnM4QXJkEXm16tifMUoBu4MzHxn5SYx3n4PVWfr33nEDRgsXRNujzLWuunRxpQoxMYvkCpP",
  "key21": "57pQHzWXAGa9t5qYjwRNm5f2BYokg2dYTDD6S5zZoi43XHnX6jX9jXnKeoEA76HtywG61rkmhHpSJwz6WFfvk2E4",
  "key22": "3ecTyMg76en2UYwuFxW1i7daGhqe83CVjgjzsquBF4rKMidfRTruxFyfbNQsBjhzjdw22sQswgYM7h5YMxSHqPWd",
  "key23": "snJY3qkrUdmM31p1EfHYvudLyNFxyWDVUAcKEmYPWaJ3V2nrR9V2NJS6ikKzsA7UqqTDTQdy8UHYZCFaseB61Sk",
  "key24": "2cU3q4f7CZidva2PaRcJWGQUFc6dQm5Prvz6uKNhV296acJRy2yFewbMrDkhS3uRk5SFLmqc8qvRiufy656aFcrT",
  "key25": "4sHuYzTNZnQiyAnLHogKo5Ryo6kXiFuAYxEUksxgESy7RCrSFs5HpTYnc8gRywoCKDrw8t2C9ZWjUSyYZXLaLHG8",
  "key26": "433crj9WKhyLvdk7xcd7WFPBHv7iRxpGsqbqqo84er9wm6frxdwjGF1uhWVdcdEvSaGRHzy4hJKrrVgygsyPwi6B",
  "key27": "2JZG9Njs4mHS4dCbnsprch3MCfRHvuWx18KpMBpR5FdTPBMpbjzSHu6SM7A2vVh8BZgrZVgJhVCJ4L729rvPXK5q",
  "key28": "2BwWBcH25FMd54TBwAwXmgwptNEZjA6NMG3VxwYCMSj3Utr2Fz5S51fdFMpwoD9AnPrm7WtXgGGMNX1e9PX81sFi",
  "key29": "KT9Ez5PtD2TiRSKz7Ax9VSZthU4nRKrTyZgWuSxm82jHhE9uopeoRvU2jqBWqT3dVyg4GynzZ5WQuhfMA1y9gbw",
  "key30": "2Z4nEmnXAnzrT8L4RGYEej4qPq74CzAbkY2WhRwD68aSFDkt1nkSE4gDBmkqqLoZK1GcexAHm548kBCzBSzH35cV",
  "key31": "4X2jyWfPBjJBgzsvHkznpggtLkcF68ZAoQJyMQYF6KutpnY37pTUEbBXEkkWp9dBv1iUhCuQfgRhUAcbgSV81S4H",
  "key32": "2kMRyQQXzh2qy6cTv8WYHnD2NfT5L3BXbJS8uYLnRmpVaKhQdm8hwzU3ukYwXDMywUyMLKLqbTZpbp8yS1siD8eU",
  "key33": "33ERWP7XETrBQcL6kZt3iC7FNvryMXoKGsJN5sq55QLCbYwpofQArD3sEBJBHB1cb2LWqcNsFTU9g8XAcmXWaWDx",
  "key34": "5XGwYXmjY2uyDgT3MgXCRfUhCcAKoX3vU89Rb6uLUR9dWEstnV3Nz8GbT4xS3mHpaHN9MW6PQf8SdKr1SvcUomBj",
  "key35": "3qQa6Yyu36Vphb5NjRDdRfh2NMHfTavJJFcb31V48HAwjXA4amBeDz19d7rWCmh3LzxXc1nXhzm5Z1RgJWD3RMxm",
  "key36": "62WYFq1DfkVkUUqGA6BBjAh2i1Lpu2qRgH6MXaZX6GkioLDM3WV45MF9e4bApUoUBiJmWs38rLKLR2ZP2j6jq5bx",
  "key37": "MCD4EJQt6MX35GaPkjNBG9a9jBpsUJcu3YNvi7DZBgYB7NngECjc88AHbrdpaPwVSpLe1N7eGEmeH2evRYJ44Df",
  "key38": "43Aco8UPA1GfBVesi64Fqyvx4E4av2SLPzXPSKd3R1eKsqiAiqgxrJWHPc9GLYHrEQoGrZQMFz79qfePp7bijPgF"
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
