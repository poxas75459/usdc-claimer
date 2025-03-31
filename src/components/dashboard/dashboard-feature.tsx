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
    "3AnLstUbKDjCiR5eXVbjFhNtpcKf4S5XzxbwBb4xMVqbVCTEEa1ToiKPoTsjCUUinBScyQ95mXZz3SCcFMDQHRBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FUyVPmau5EmQeqZsQ4TunKi9hGmvaNGeGPhK643BjRsDijXkpRdVB3dPL4nGMKyZAxHeUVr3hFWsGGJWrBHBFQW",
  "key1": "Bw5y77QDZSDYA7p6tvixNmLuShJk6indQ8cpZptTLiuE96vo3K7h8X7Ybc5rfAzWXRUejWtf8paJeJnLSKVnWxS",
  "key2": "5FsRhPmvHL43mHojcwYuF9xwph6JXyULAUL6CCSUnRhbmwcASCeyhzKFpUhqDtRSxZZy4Dt8asC9QM7X3haGVqXK",
  "key3": "5T7bFYR6eX6h9w1ZVUWdCTUNJGdTKs3DRGLv8APimezTLHYTqdmWx7WjEwhqVhKWrR7AStzRyR9wbTHVXgHZ9gfG",
  "key4": "4hXW1udiTf4zRzwsVy5EW6R6VWUrHmeyCb56k3A79TDY227gEx1q8whGhheD6z1ZjsCUyaGYEkXDDPow84Ajit9o",
  "key5": "4z6gErzDuXep1Yyu3zd8Xg63qzBf5X86cyq68SVppNyHKoonbRZAhfTactQFN8pY1m3ZUQbRjkzvPPXgEsSh72uK",
  "key6": "3qwBjch9nDfGG4f2iUBuzowFJ5Uz5oDVLuLLGyoAwESMX8xrCY8oZhaxTrMG94V6xG42RXCcxp1CZdBe3yg85eB1",
  "key7": "5wbNHjP4hshBq8yPUAnSyurLoamSnjD6TqnD9Dc1PteFELkmt6tn7pwM73kDYU4MgJmpmZzVZ7TZnmrP2cR19vFJ",
  "key8": "3oKowMGYvmcEkT8JSHmNGZT6uz6Z4UAjDQCN2xadLqyxxSH3pPusN18izEGdHZBgx2UvUqEubfiZEfXVNtCuvgqZ",
  "key9": "a4gHU6YBdf2n2vCd4vw3zu7fYyCcGswn5UrugVaQay87nFC3m8adTpy6dxhqQtNub8SNdHEK2yEE6kjPrmMFVC4",
  "key10": "2zbkXfobPPmEd4d8zbq6giHsjsmDCsrDFQQPrev6avNosoKBXzm7D3Ndh7qsgWWrVkkJd8VS1WQ2xzs5aQwwr2Na",
  "key11": "2EB3Gnv6jorojywk9Ye1PcZofsKRpDFJ4sf6xEmbsUjH4ri3CLoK5PP5BuL5ao1HiPabBXp9jtnRcazYPUnVDWHS",
  "key12": "5nKcfxhJMVHxacRfubeyShZkDtNQ4rcVhywaSchuDgarS9QJwB6JA62BGAbfBVozyUopb5bg9A9ykpw4eiPhfrwR",
  "key13": "4xrrzAMeuWbuHKdK1nWyxK5gS6rZ5H9rF6g7jYxdQVTB2N5GRB1ZfMYoEjYNDkfmYusQQtwRoWzMFf5VRdoaqt5e",
  "key14": "2SnK5Ge28QzSVQ6sYmKMq9gipMGoJsGYYbfYhxV1e3gZ346e2BRBCpL3NKw537Q6k1rLQQg2ffFkXUN9JMuu9rQr",
  "key15": "ogqBQNoA2v8yDHNn55tNNGeGgXFZ6Yz3Qy8BBubYbbGG4NiAEYvJmAt3aZbpAJeDTLR43CFaGAVV6EEzpK1bFtE",
  "key16": "AvWZhtACPb86keiRqbiKuNnk5HNXYBNQquphaN7L8L5ceVTUySn7iWiUbMhBZjDmbMBomcKPG1nNj5FWDcwR5Rx",
  "key17": "DrSQEpgc9mYmrRbf9tTWbc1WusqAmjDdshzh2vaHRE2zdzaPU26nwBnsgTEGYBiZJUbm8WRQx9hZ8KNtKYUVhzj",
  "key18": "1VbqHUZoGnb8PvQ6M5NbcHcMp3Ux72aFVrv7tCTVokCdoPysRLcPRJ3FQxQcAHARucQYJCvpdaVvL9tAqst3aoM",
  "key19": "3wEvpdpy76iKW5NckqDVZk5xZsaDu1cKcyoRiJS5oSrsVLvnTdMWrgkx3wWdgCtrwTHTjf5iQKmaCGEHhki1j791",
  "key20": "4nYReXaK4QgK92htLQKUPdgnR4aCudzj8aV8v4rNgAoxN5PanNu1duEushnX4gaooeKaJX66xzNrztY63ub92dWP",
  "key21": "5Q6WgW5KTjAH7hwsD9aBEuqAad9yFmzdmMf3PczMbaPSiHAHFCVxFBxamVUQMvmyyBUQMzK8c4S8FKYiDzyxXyMF",
  "key22": "z25cuo3Dwme9HQuLJmZQ2SPyoE9NSUABLvoudPPi1utr5xijBERttiRuwkxPTAsHtUajfAp9yPJh3thunB3KXNA",
  "key23": "5DgoTx91Z8C9tWAHiz2RHmwWy1QWW6dYDjcq8kZEjDatZoxD3WcEmfjwAMNt34ZRyDQFCnCfHZEsqHkmEnwyWqRf",
  "key24": "4qH5X9HK1uoLi3kUJ9Hc4WdFDKj3AH9saEDpERa5AhkN4UdXfcsAAFQBfofnGZ5xbJm9erpJC1VwWsCfWP3dt8NZ",
  "key25": "2iWscurXhzuVfCdUPNqhgcmhetv87xBhA4pkPGfahLNV8jTLJE1Co8TUZ7kHUJeZ76k8HPU3k8rTnFF9XpYcACr9",
  "key26": "3QoiN9pta2RxUqUHf223FZH6wV5zGXyXWxm9nFLvfyxHVcCGaJgozsfgCHcbXkbqCW2o6tPiGunDG8bg3JQVKsDt",
  "key27": "3PBvSmkdyAY96pArvo9GQrot6rCjFJ3rXsbbxNaziPQ3UwnUQFgQ8JNoPTb2oCHxysN3tmcwmr9RHJTgutHEDBJY",
  "key28": "3fg3RxFKDkesF3DYKBHjPy4T8zSW5H1EiRTk4biwwnSXcizTTHdGFRhcapcKLZBuMNf2GE91kack3Eguj6puYzrt",
  "key29": "2jdzKkWqpzSiqUo59Agk7E479nbVVNq4ySGgwWhrjHnMZqrJgmPt9WATPaRRiitxkyCuDrkSsf7AY4n5WfHa1VDA",
  "key30": "9wMLeDtVYKcJ26qBbKgzw6TnduHRy1BKfmazj26kPvC86vBBkKcD9sH6XFUMCVXeoYqMZxe9CNe156smo7nDeFa",
  "key31": "2y53xBzBfqDF6ErHTxKRvRvxKn3NHk52Tk1nW5w9NWHA4oSCmCgP5oJTwKQDRYgqeDR71PW43enAXiadXTogwfuS",
  "key32": "56mzCdgwDYKSZVSWYJJ9j8kcqSYYC6TZTYBfBixaw7MaEedr4G9jqnGQXZKPDcQhPXDjkkiXP21Hg4FZXHRuYEbb",
  "key33": "3zgKXpHJPj4hFUqF5JnFJ6BMzor9jiSoQFXph7Djem9oAdxb7UhKhHRt27jVsuAM2M96Giasv226KDy7xTymYQmh",
  "key34": "38sBRGJNK13rGZ6SteByzuuNXt2nn3arEACnDCeoryHLPyfpVukqh1BUcCoJTx7rJYF5xHuZQbGRXNDjW9V9goAN",
  "key35": "3VzLdFYkcEAqc2PRY2qaT3VNVTNGmYJx7bySVLLbvUw19mq6GMWbUnJJHfsByuRzCAFe7nj9ssdz3N2KYRX92BLp",
  "key36": "yuW7eRzxDFUmRmNfLX4QiQbnUFv1qUjyS3r6bwoFYBfhsAWP61szRB755NJp3XUnL6gYycRvFqih6CEQANyh1vh",
  "key37": "5qWNd5aLxLgfRZ2DSeDM38eTQnPTm6HomkURo6YdWkagMeUZo3Jmyk5yR9sufJosdydekVSxSzZBwgc6CPYLrd8S",
  "key38": "4cWD1b3Hu82Q98P4avfuzf21kiALi2saucFq2f6HSKDmbTd3kyviEseKMSzsH6LiDcTnUjYBaXF1psxemstrXMJK",
  "key39": "4mLUAhJCLtkHW1eM7spPb979azvMyAtxJ7NgGeYx35egCiNM6BuNNtPki1S8mJcNXc1LwoB5A4E3t4UGjm4wktUa",
  "key40": "4qi8drytaVWJVqV1wawXLdYvRgNu3me7UiQJ8zoFU7F5SMY1jkvJCRjn6eCzJVwBMMwizX6a4rDRxNnonqfijRTx",
  "key41": "QF9LM4Yd83EWpJmFNa2mBmKtVpWQJoDYbXSf9VmV5pQzM68dm7N5qAdihiu1BQq8KHTcVXXhvd6Gb1u6CZsWj5u",
  "key42": "55drHEeAMP1iKZmoQDasjgCDS9LwHTfLG2XTqyqcCbyC75XTxAkmfmqsCLYG1HsovoGzMEK3HkXH9QW2YqtbUcnt",
  "key43": "5dP1YiscussMY9aT3xaighiF8sv4yRPdsVXdsjEtZv2Pa3HMfqdNGYy1SvdNXgdvzanMTrtBZvNktt84iwCmfo2K",
  "key44": "58hruUTKNTgjXa3XXHUXCnvuHeujntBpsN9vT8CTW5aggdMLFm5sqTQNa4YVKWc2zgakXxm9ov4qF7r4CeYRhVe8",
  "key45": "38VrLF4j3v7ZqRM9JypBpRJDph6QnyoZL1DVSSV416VGPPurZHEyTic5NL89EaL42E126nxqfvYUpUjPPSdSJyq3",
  "key46": "9ewiDZC2zsLUdSAXxSvYMJeU6kHHiggMb67Fx7PexsHP8wsuMNE7n3unmmBiAqo5PPs6RHjUt7dYmDS6jWbgmuS"
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
