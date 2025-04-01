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
    "5PomvKA4uPAthSZgEcCcnDw7DVvDoLbmRKBJ2xSwPPPuqtz8NoNzQNSiZw1UZgt2jnkJvyrwfFaX2k1dVzEDtL9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uAD2462YJeSDDraEyDX9fqp5DedVtzLBGw4YXgu2x2ja9PZUL1FD94igwBLQQLGyJZpJjxBUeiNSPQogQEZ5PdW",
  "key1": "4JSaCMQe7KMu5xpg1edtxVkPgZa6Bkm1tkrUnAbaBDsh6ax91ke2Lm6c5ZMKCR3epGhwCwTKG6aLwYYNc2HzeYtq",
  "key2": "5rL23T6cYUY7PUWwMbaoeJsP5xoQGEvSvzGS9Au5MyJoVKQnnkroT8dYcsSrbiSztbNiq7JcsDzJyNMoBn7cZLQ8",
  "key3": "4kAzxqMoF5hKFKUSmgM9t6oSKEbEH7rBd3TEdecqdXmBedUi3kYiDqeC1ceDV2FW1adiY5eH3wzbCN5TAdNeR5TM",
  "key4": "29w33yMVawjNc7chAzVCCsA5GbAHDmt7MuUDuJYEhGPTdGbYudKhcMGcMeLAkTf2VGsLpCcMmJG7ZDDtjnHeZCnG",
  "key5": "4KW3wtoNmzB6nouPKM9yYhNguTBRypktqr99uhEKQt3SR3jxwQNFg56RPbE2FqiYi6DhRmcSeijzCaStqv6KS7V8",
  "key6": "45hJsuujB8kPSWVVuFmQB7Ruy1AUnhNf7fwHWFvZtiEF4LUL3Q2cBavWxgNRfWx2hjLNUP5hhQL8fSqhyLBRkwR4",
  "key7": "2wGyHVAZtJGHYJjbApJUxctByMkTKWtGfj5PcLvM2MtYCKDUqMtyjKytWEW643S6jpVnMfWkD7rXQNQ6LgKg6fvw",
  "key8": "3PSPtwbXJk5vwK53kAH9vh76ATLUg3MtcpSh2MKddY3P7hBiDzGWfeuWPYoYDMJuBd9k6rbnqv5Ph2PzVyuVPFe3",
  "key9": "2DzufdYcU7LpkBvQkno6UZRpq5NNScKraeKVeGznw8uteaAx6D2w84LvhPicPA6sezyEfUUQBwiE2mjyJtFfEShY",
  "key10": "4MCX7uSpPnairnZVUFYEW9KZ8JhcFjEmrPnRrSCW5uHKj4TRAj6EBfwTBdQeBP3KTa7HqDpjeGvG6PALeyeVptkZ",
  "key11": "hDeYB6AgGHGjuedB1NFneE22nfpYrfq37hiYCRXA7ZcpBhYUUPqUaRK1eMgZjhSYU4AnhjVMqK9YEQMp4nXXkeM",
  "key12": "2Re4SL9F74k2oSABxGu2KwExngL42BXXDtbmDLepTRxDoYKWnE8aGuupMyNhoCAZPCsaFEnMRCDSzAHsLa97X459",
  "key13": "5dG2jHsoDhK931wdYhDJhGsz1oWgSe6kSfCayg2RrkME4msfQVcD3XQXqPfpCkozGyNH5z3zM7hE1N63kxsfXwPq",
  "key14": "KdYLdnBX5zPg7v3LvcJ34WkQi9K6ypqCVy4f1Ksw1cJcL1jcmKpmBKKFwdDXmPas8KYEGeqxpDkdemh7uR4vPdS",
  "key15": "3ENBVTsS5vfL5YuTTiN8UmRBvTNse8UzmfV2FwPeqh38S5rympw7pTKPq56AhCWZ84VGeZntT2C5GbWThQGFvigL",
  "key16": "2E6acmaVq1j4iPzCyTjrUELJ6NejZaBbCKiwZXxNnJcCHUo3HajaDM3wj2i7eVbhApjVKbDjoru7Rhvg1xAeWYw1",
  "key17": "65tqSYZJGWqhXcwYyWNcLdmJSFjLJ3PGojwqKFcqqqzvELiYcz1oW6Gi2rVDS4X714nWj4tJWXMxiTWxirFX5qEL",
  "key18": "5nifpNFqSnpVKZ7MSuZN8MjAEWBo1vJwzB1UEo5aGGFeASLiaBbP3b2khMSXHH3SVWyJhUPPhhNZ87zT6sK26iq9",
  "key19": "3qjMaTQpv77aDgM9RDR62VAc3vEvgt4a2vDG4NTXEaxRJdy62B598KAyUUR3qJYXBQU4Bfp541ajJFeXzYH9Azqe",
  "key20": "4XniMTGQPqzYJzjEG13ziQ1m5rZtsS6wKgvgcu7qz7zNbNHoCz5FdgcgJxiX3cDFy6Kx8RPEhoYKYsSdbax28Kza",
  "key21": "26bXS1FhJeDtduEygAk9JkgKCAsTnDg3RorNtTq2iRcNE52sfKRcy3grbdNfiUKdN1yrDjj26qAGExp76FJo54yX",
  "key22": "5gxzffV5Vn7QfmDJ11eoMzYYbpFiQTjyZ68oxxWg1kJWTxG6jxm7fWS4LMdLj2cHPcJmDJJh5XuxF4hTBf9vjnbi",
  "key23": "3ocxEVrEn1LsQxfqQnHjwLbb4wEsNiyLCvhqK6fzmTTj26EXAr7aH9vpRb6BDKududcrPdTGP5LfPjyf1sRgFbab",
  "key24": "WCFPbFSsfBp3BcUKVN9pjBkTCZXVPRtZHTv6zERBAcHrhBmCweqrGK5YyaKjkwhWG7JH2UXMfw7E2M9K1mV9Swo",
  "key25": "2Afp4gNvMYNg787CntSDD18Sahgk4tABVWKAwLPPLQAqQgrqBDJm8DcPdn89vYrKcqEFc7yN4pBLRiW8cpNKT33w",
  "key26": "3ZinMJWS2QuX7o1SQ9JvreF6D8FTRD9FStZDRs98uN8RGkAPVM9Pk5joNye7c5vgQLTYtcp1QirQujLq41QQXoqF",
  "key27": "Vc3RHU6kEtStE6DWkPyovV8cPgTpFkweAEXj5xtUqmS3d7Q7zBJSUkdecro9EujTLmhAfJndpzcMTzhJMJ5qx9Z",
  "key28": "3fuk7DK5bVCXfTR14F32PczoZq2hpanwuA1xQgUsKFqpUqALTRPf7ww6pLdiE24ubVRQ3NKyJnoYJd7UoMb3oynf",
  "key29": "2GtHmJ9ZRNtLYsF5gLjA1GvX3oSPKdKJkddqqbXsdAto6JNh6UBTUcBsNdFbcdVw8ATnxounRsL1BT9JdbVwnbFj",
  "key30": "3QVrhj5ztmWVcS5CE1ffsn6yXynKVmJ8jiTjkbKSHLEES2vTRuTHbZgcgoc2Vt1TQVVSezr7KucW1TfskJkCcyo1",
  "key31": "4FZeCia9Lv3LcvZJqPRKwnvKMd7fvbnqz1zSu3H8XK7CTHCKUXP6Zn28n4FJJSfCRgdFaScG61ZPiBaTVrdqXncs",
  "key32": "3uTYCBqQ9HXKJFNj461YJCkjNkTRx9f9cB4ZqxoJcVfTbpQZ6r4uwBxMbSV7A61V2BQvUEM3ZN6DNpKg6SD2X1Nx",
  "key33": "5hrrhFaDq5ESEJehhGpJga3M7LWaMRVyKT9WjFZggViUDhgXnzbD5WDkKMQuZWxrmBieiEqiEkzp9j4L97XkeqXF",
  "key34": "2Px6P4vArjqWsqn88RjcBHDf5qDiVUbCLT8CvJHwb4Me6aAQViLBHhPeTcwCQ1Riycj6pfAxpcE5Q5ff3pHCR7a3",
  "key35": "4wdnvvonJUV1Qg9W8gknpVAsJ38LNzDjeyFcEmnHoBhWcjnQa6xc8Qek11kUvHd4HyMob77SceqtMYRaicBfPQ3J",
  "key36": "4MXdbQG6zm4dkQjsUgAVd5Y2wjvNkiwWoysuHEVbZB4ziw1JUxsP1urcQRSVdbv8LkqV7cMSKiproUMz2HtLDFCq",
  "key37": "2GcReML9zvuGfzt6THBCG8LkvHrNUPpfPVjRvxiYwHjA8gF9d87QSfhWGtTLn6xarhB8pzN8fziEz3jmCmi8S5n8",
  "key38": "48oLgzL5G5YPGSAmNM6qvekAecb3AvE3npsrYCp3RrJm2tWjkNiAzAxHjnbw6s6szJLH2K3aBn6E5H83vXYprJki",
  "key39": "EBRGHvGUfye2WCrR6r6KAaRGhcQcX8xyyYFWE7sYSY9VVHT45nD8SLzzWrYra9aq9niVwKbNxfYKEMJYJxjWzmt",
  "key40": "2QPRC5uZiAzFZMz4qD9Z7BKj5WKQL4JsuBCaxtsfUULyGBPtzWgceGw1gNevxYkWtuCtoiXZc998r4pe68Fb6wVY",
  "key41": "hPgzCcLovF2rYMpDwR3LT6LYaeeqDuPMrpJKJ89izxLhWtNfpM422aYzw9wLKzbB6GdqxAhfurs8Tjk7zJCFz7Y"
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
