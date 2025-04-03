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
    "4quQmPNtMfy47CXUHdVcv77G2a67kNp6Je6jEmRHysYa3sujLY5YBFG5sUz6m3btfNSrDz1dwBwUQZJ2D9tsddcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NhC4FJMXfW3C5yrGJt8wM6RscaLGH4JX5NVmC9aNjgiG3K5N31GtwpT6EnjKtwdvHx7Hjr4z74j4dNWsSYminp9",
  "key1": "5RKzsXjQRf5pqCqscMVLG5mH9t6UPr31rHuPyccXPxCiTbHCksnKTruifvH5UsQCvs4GcKDnR1z4eiUos3ix8mUV",
  "key2": "5BgkSAezSc5SA6KhYjksjufmTND1LGSF87vXUUedfJX4s3EdEHRmnvfg8E7bgnGP7kebc8vngt7DYxqSAPn1TExh",
  "key3": "2bfprJd23b2uc3YogXzYFiKD73Dm3DwmMnRuk9fDTPY2JWeFXcUZNE2Q6n228hua2PVYJXXho67Q9JPeazVwAnaC",
  "key4": "4M3nXgivhciJim3ChebtznypoDKxaJKyUG6wur7JkLWSCRuaiBNJrezSbZAWR7cdo8aGraK2MurxnCW7a1AnfdsV",
  "key5": "2TrUHF7RQfbJxRMGPZTpMfwws3kMPGWRhiSYEMyHquGjYuDF57wUKdY1uvhs1iALzSQM7a15gjUzYbTKKqxqaDDT",
  "key6": "3utti1KDThGLGc1PcUhbTmtowHbfpyeGFyzNmCia4yW8eJeq1uCYXMvEkF1t2eUTzZQoxi8vDYCXkmGVW4sfk6nF",
  "key7": "5pF96eAu2LpbuRBS41GM9yggfhTuHo62vBM7aFqZr3pjGQpRnepHJmquW3S8jiM7SoiBMVaBUbDNfEgDmnk6H5Zi",
  "key8": "2vKmkmkPsfn5dpKfs4WvyVHD1zRRsEXhgQdwzzwBPQAcqqmPLtvWxSzMPPxQcZgtWWSx9uYdKxzV6mrXdK5ggF3P",
  "key9": "2cezufhCLmLXQFX4kLV6id9kEE73eFKMH4YxKAGZSgigz6seCWXPWsAStxSTSczn4hdPfG9o7zq12QYZyCuR8Ty7",
  "key10": "5wQfjc6f4yWbpm4qFpjtCXYUPkuakbse1cwz8URx2keXowsdkZ2iD8xjKchMrHx6ivuRn4WF711W5GyJfnZyynF1",
  "key11": "4tDKeMYqZriyxgiyJD6mZDEewp8efWpJ2fnqTeipAeA8pJF3h5b59m9oMUBHCUNkDejKHZgNivHyZ2e1FVNFdoQb",
  "key12": "46SasZ2nFKmBSfjdjJaNmyZ8jhafKo4b8gx9diKNQtmWUn3VVVRNCQjL6cd6huLxSFfXE7DjoXTjSofoEpTJnQzY",
  "key13": "4CtpiC5uYY5iLTqJxkA8D1tE59GqAkDKgaaVZUY8XavKWY9gkMosReKz83zWnyLQdCfd3AT7UczwREYEtguXND53",
  "key14": "4Q6wC673FB3ko5mGEEvWAhs5sohzSX9GGspXZH6S3Em8zuevnNQjX8RCvyHxxdkUuLSpfzuDBsbBXLJ6ZK5zS6RQ",
  "key15": "4ALdXBgdpTYbvA3vCnV7LWdavfyWP5C4jKkzK8KggYteHEcejoK5m1ntd8ihXDXtDfV37UhXSSTDZ6BLSgoQk52i",
  "key16": "3YD9YdBuBX7KQB9v5N7fBhERuSEY1RmhrVGm3Z2jeM9eAgY8VjD8q54F3zQwExSyXQZyReLcypTBUJGahMUzesJd",
  "key17": "UKdyVabHusndKPriYDqU4bi1hgixQmhMZnQDwANnEPFdPs433Avj35EDBBP7yQDXpRgGNhm1h4piT8yoF3fpjWh",
  "key18": "5pqeSSQD9k3FWUb8h73vTPYLd7tudMLwez5Ye3h8vdkpdhqW7Po4yF9zvioap1CLqm3ncvuvEkMP871Qv3yfjGSq",
  "key19": "5QBxNoBRZ1xeGdQsNiK1Qm9MmJwcnx7c2DY5AjZswXXLPXvzgPxqMg8D11iwbo2w1rMyTnEaZoBwjyWU7ovKbH8C",
  "key20": "2nZWXjQbZHc85PVJrJghWesXnFeZWNEUQcQnAvqpz3qWwq2Tw7F7B7jiKn31ZVQ34E514rECcHzSvyuTnCVs7QtG",
  "key21": "38pZWjXtTNxvf6wTSN6DReHYKWudcajsHnJbSoGYN5GVsA6BcY3zZXy5wKxQTRcAQZAU1iGtoU5PnFSpVSLbkaMg",
  "key22": "kGM5vanFaBFTRs8Ygbaqd7xyrvewPLnqRCy7Q6NCVqTM1ysPv7peHHccqEJq5SmfamkVByBr2fNjLwzrSqr7kfy",
  "key23": "4enPm9DRDG7jJP3DyWjpszDp2SX7ahtBBTugwWZztFPwSECAe4Vv6KarJFKssU1omUM71YxvMGi9PePuJKuHHkF2",
  "key24": "3CgtjhWNATQS2njpbArBREvnTQu1vBoU8hme7BYEXmuJPkgxxRyVh5KChgQgn2UQ27xLT2LKj5aCwsfKxQCWSuKr",
  "key25": "FtJCxTLuTm9DhninZYvMRFkkiSouswhCFQpLxQWPdfFao4YbzQpv3XRPngzavp1RFtxsnmJMdaJzZXLEs6t8xSP",
  "key26": "52ELHYeHghffsqiWsqBHEjTBpDHCK8e3Verzpbiun2N9cTWPB8Fmomvn5r2PVEfhhBSxLgLYBvi8nftWNmCWwFns",
  "key27": "6rgoq2DMFdgCusrmPzJjsFkaibabr3KxXWgifep9UvaSUXNhD9YpYqzWhP3bVMsFtBz7PwvQ1baExXR5qp8pfXB",
  "key28": "2SF9Z5NmTuqY5jmcFoUHvSa6VZVtrPHwHCiou72HnfshjVmTSeDbV7JEgWFCGqVkA77RJse1JgNrBRvrPNDKdQeW",
  "key29": "3c6ZeacZtEyFrh78Su2QKeYHqNr29sn3hZ1QGnBpmVU8ngBMUWrziJWWh5CA3JLMdmFiJg7Mwm4Ts4wLPkfAv3Nu",
  "key30": "3CPStaaSsxf97vxte5pA3Cj3Az4gXXfMHpEd5tpiMdGNHcpietLJLuEp7JTS9SrK139Dk3xPMx27zBzDVbhkTJj9",
  "key31": "itXGD2PteKAp8jtkVrVMeRfVhYE8DAtL9a15mh88etCRNe38FjPhYkyXSkkD9kPzp4rhAhckXw4zNcp6uHLCNfc",
  "key32": "4VyDYagWg1kfpZeRxcqXh66fVszf2LZZYGuArfZKLsfysFLwq85ThCwdGaE3jY6MSAycwbJ9342Z2fyveqDdc9Cm",
  "key33": "iJVD2y6p7RY8ji88PmTMjy43UY8dfaXV4mJaQ466DfVucwpJh6fDus6YvofSwjVRoVtQbw8fyzse3BPsMHZ9jE7",
  "key34": "5sdJmDDxbuPZu32VZP3SbDVLUhAtsEXBqrrp8aaECwcn79BQfQKsDNn62Xg6MvBz1fECcZtGLtn7eW1s53S4Jh8K",
  "key35": "5wceQaGqiaunrcyJuw4nsMvbDfeWAX6uhvGKNV4j3fQrmuNTntpxuGjMVcwWBScmqpm2qVFsTRGk1ceBZeYmeqoD",
  "key36": "4FhqcpRKZc3vJb8sAy53kFasJvHFac3ZvBY3MeyHfseEhdktmj7B2DexH7Pua1v8DiW9mVpUhFYchqfVkBtQ3ZYy",
  "key37": "m4qjgAZtULe7YxyWLDgJghQ3WNTx2JFXYL7hmKep1tpHsiSXkC9RGDtUyBsg3ggxwBvPfNpFbd8PA5LUBC8aFQH",
  "key38": "5cSsFzGL86tcxocmS6urpSJnNzyzmA9KVD5L9d8PVLXDZQ5Tg8LCa1hsQ1vLabvBisu5fXj1dAvUv3PVF6iTVgP4",
  "key39": "4VMz4TWCJunpcj5EHoDf6x6Juu2LcEP1jLNoEsYEzSNeJMWgJtciRJAJVq34nhqG5DehQHqWWT9iufXHdPMu7oV1"
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
