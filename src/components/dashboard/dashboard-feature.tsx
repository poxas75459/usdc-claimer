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
    "3u9QUdZMj4g7HpZhBguAoE8qKw1vWpWg88YiwD2r7FSV67aE43dPVUGHLJtzTc4zrNwJ5Fky2cX4fc5BL1spvzzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "frqjfv87ewrUi3kBNKmvSNTKAkvNdo16EhTtTSC8VHQMLeXDTExBpRVcS37F2x5QGguiN4q57eizcvdE2uQpYAi",
  "key1": "5N57qrzr5kbah63Dy8p2XTLTr2V6UmLoFfLGqPbP5McqwoxEyQ2nVqeUyhCjoWjEqudByv1LZKy7UbfHn71NYMvL",
  "key2": "3ei8JJMmSiHZCKQ2E9GVnpCnQ2Au44rVFdC5TLNi1KZu6KLzQgyek71VhzeH3F3kci9cwYexN6aewxw8BLToduNs",
  "key3": "kK5hoHUWL5x7KnQtEw3cLHf7xTu314gcDT9m3hPddF1KKA6RHftRVyx2S8LUrRKUW4YTDjAu1rUXgx9jbCNBzaA",
  "key4": "5CzRSuDiQLvfY4hAKtzqHsrsrZqCHsWGBZMZCZhgySiHUSLpLJUEcVq6irGwsELvu5cDwyF8aabujtLbpGFrytMQ",
  "key5": "kH8MypwbqPS98S1bq2C5TWr4LvDUQiZRBz3p1EHV3EUrvHpDXTsNocCHn9HKmaZLfH68VvPUVWqfYTr3EJVz9uK",
  "key6": "21rMN1WCUUiXaDQ4Ks47Jnpa6HTECPTq9gTAnPqiYR14EdZ9e6eJ4V6dacES6XgpBrFDQRHPyT6ArvMkKuAZwgZe",
  "key7": "4pHGoTj4KbmHkxfRmKvBR8bor1aBeE3SGDiVkvVCnemAyCcpYKdtKKiG2ozX3Knx98uRjhuQACsTK2jsS2KJC511",
  "key8": "4uhxd7TKYu4CZvnFYvnjRGKeo9Kw3NYe39bq6y1kU32Ux7VQubsQGuW6GkfV9tSB58LFN5eG5pfh2qqzvAEAX1bo",
  "key9": "2DYCtAxNnnY4Qs5pks4R9G5Yca7Vs8mC9YqYbNz4weiJ1EFfarnqRYRDwxexBSsMxfsCzsrxD4jTawhDYhmFW7xS",
  "key10": "25hMjM2WGmoaAcavV3cttisiJyBPp1ch72GGdCSTPVUj6MrVLfqFQydpPNQGnbSsMpJQzwkmZ3BFT8DnWT1iKeak",
  "key11": "4Rhj9HQRxyDZzK9AdvkHXS3gtPxSu7HL2xEuntruXxEQcpfGTPyCzZVoAH4HrhTxxg8XTaj5LkdETx7ZBL8PD3WA",
  "key12": "2Z9AWGV5niJAhhPTZgwgzdvZWJx3B6MSvbZkMk3pEMZxEocr6dGeodjZupq1i6yPpS9moQK7VV4McArAetnL5Fsu",
  "key13": "5E93Lgb684Kirhy5YemkBTMGMdU8Z45RNytQpYmPrHJGHNWcghseJatD4T42wTZy8YAx7wQNi6bU9nMY281EyGX4",
  "key14": "3SbuiuDrkvFcF58CEdn349MnxCpviXa1BtyhSwrxGYhtLSqofVFPCFbws8yrQhxX1PXfeYx1tZhN4BNdbwYkyPWs",
  "key15": "5briCERCsaghymQWnbZacWwGz4sy7mG9BFXMibMJ2tmyqdr7F9XQDjvHSJGHNrPhMkYJS5qr5wNd1cEKSZ1FPzPo",
  "key16": "5WcJu9g6VUjQKR3rsQj7CsEdH9SXcTppQatyrKrcQqMyojPbi6cvFjoanBQ8tWqwV1Y5ghwy97kiN7XQuYuRrwdW",
  "key17": "3kM415svVg9GzvUAUzzQdrrUCVbxaoWS9wZsXoXNxnfa8cT4SmiHS8StfyKYMceNjSwWin9cVb28VDduGVkxqTL5",
  "key18": "wjsc7ist61wUYxpSHiwNoKtewPADNmU1ajChrdqBeebTZzRgwbNBmBWevEyZopS3qgoxdBq7oZ74hoPRYdmewAn",
  "key19": "4NnCrgGdEe8vQQpioMH1n3bcd5wLvpqKgVZrVYh3LqPxfjTSnZcMmWnW5Nf1DVa3riAJhnYigkJ6AVvEX5JW2h65",
  "key20": "3e4fNLxCJ1XnKw21zEt6mUqYuCh1iQe1yf3WTBPxMFcp5bgFgk71MvK2KD4Dec5wvWGruvPZYA1qCXhdvb7TboNz",
  "key21": "4aPJ9AduWFMQUtpwsuqWhj3sEy77kW5Ad5h17v9mxb1qoy8CKdeZdt6tfjKEXfRNWEH1Sce2bjuJ9JzFwK71Bo8T",
  "key22": "3eLBZD9AwAfArJyLx4XA4cDjvSyrTyrDkFRkH4Ze5hBrRDbDUwhrmhFVXis4NNBtsEc9BZPN5Gcs3FPeVX5p9mHH",
  "key23": "4Q2WqXVVtojuF89XKjqLn5ZakvNbKRLTxt7HdvysgKVjHSWRoWnoxDxYuzCeWHvnKyC13WxRW2D2GwQGcUngGY6",
  "key24": "Q41EhRq4x8Z7FaMXRGCSyV4TVu35LGTaWKVcZgTC3JB7XrH3wPs5BmHSk8rkxN8eTFj6Kvd4dPLcKu7SRWhAudV",
  "key25": "4RgFTPi3HxkvwEay6pe91KhdJTyNeUBj8LaPcMeLBcs7NLXbgc3WtmD5KVDQ9jCJbP2fNjgCPy4777qdzxBtefey",
  "key26": "3z4Lf5pKnjPhJ6ANTXCTnhyJjq85fFJ6WC98bxL3kkMUTLdNVCR9TEAtKh3Pu3j7R1ukjKKv2FZAMJkzidb2zChA",
  "key27": "2BW2qmmK9yE5iw1Tbi6PQHXo4swTC4vN6PTPVHgjnVmp1MevZXnfir1QjmWWSsYJHNtLhPhtz7BsG2qiZb8bZroD",
  "key28": "667nzZryx4qWsDsVMkCrDRhoLLCMxdgkkaua1Ay3PCMtjAjVMu3xwym9q9Ay91swLLPWGU31LvfrtvcPxsEcqnnK",
  "key29": "2BDRFzxsJVe1t33wPUQEhhPPMxEptfWtZGRBaWMBZvsXpNQLksTxToZ8y7bgnD765Z8NGHwpZNEV33skbV5jZepW",
  "key30": "3mEqFwTqnazksofWnTyXMzThpdVZZQNaT6phBCjLEutyF1fZwfCSvjJdhAgMppZSCoSjjd69gF1stocFSYSAWhsG",
  "key31": "2GPSTNptMT5n23dFDxCQfRGveKm3Lw1mKdDUBYHcQ2eckW2uYZC9bHZ7UeZYcQ7fgYLtqGRNAY1Tgi6Z4FoEpTrb",
  "key32": "3AEhG8AnmnV8migr9bAwNNNSYxtReqNzQAEP1rQDwQVk1T8qN7qQNFGW37kyijsFUP1EU8uAuyz4qDCzxv86nUvw",
  "key33": "xYZY6sHKekhv8FpKeS5mx8YMYntYu8XkACHZTXbbBhDhHvWXBYumYhgGiTiZQSMoT3WsEJrBfrGkgfPCGgFWGJ6",
  "key34": "pH23cQcgWY6ruVagay4Uqazh4CL6PprNXnSzdMudKHejEA1THW2qYa3Nc7neAp88yM5ZH4xaXGrD6ahs1Dg7kh2",
  "key35": "4hKkHhbfAdtEDqsoVHzdeg3fN1HC4uC95opgKqxzcrPcc2RjdP5LkiSzuZG5Wv6oXxFpv31KTT3BzsygsjuFwZpH",
  "key36": "3YFCdWHVnRFhLYR1kaZ8txgyqCzZhk95veEvrdufmNTTT5xt2G8nDuWnJQBw5MMJhmD7ZB6bWTufgqUZBGkuMjpX",
  "key37": "66nSCkJJeVvzREAUFtByhLnwV1adRxfN6q5RGD9etJmnUpbTf4sJdrkTx5YfC4RRJD4bTm9Py8D9KcwKVvGZnjt9",
  "key38": "4fb2qmGYsUcDYRT2hvdEjsd25iagzJww8Ze3uwgwH37CRFMNPsic7KYFdAPwvJMCFqEqUjkRs6TYTiRSnV14QC4A",
  "key39": "4YffbYtMZ3xaSA4RhojdFELZfY22qryLi78fUjULKjZ8f1hKxoHZyCG9Xa7fTtHuN8usKSXXwzWMo5pq4Eg9ZBcG",
  "key40": "32JKa43x2EVQGzcWa6HEzuVrcWsUQd7UGKt2bat1D6tj3mgNmrWCUFgYGzEqiie7aVQvH5F3zRQzuV3bGPLmRRQQ",
  "key41": "4KfSQ2S3wS2YMkbjxc241hgJtrKg6LBXHng6bTX2FozD4FeR2Z82LrGCp8uoTRQjzerP4WcodR8gaFBuHMHCV9VL",
  "key42": "5bN5D6pBWP1Pym7SmBLcc2qci6suMQ7rD4989UqrxwGFvJmxwe49VBhRHc6oEpx5AhumzDD7iVdVLinRptsrrYCi",
  "key43": "3WA3a2APJ9aioPk1NbmF9xWtizXmYdAAi5wCkbkJiaZbeVA1sMsMWZbGWscEP5TYgNbVzea7WWtpqEMhZaBTuBoa",
  "key44": "23Bv4MjM42FXvbAgeHwPfdrr2TPM4Wyp81At42xvqiXyxncaZ87XqKDACVB6hfBuD21m65Jrpj3roJhXr52nSsr4"
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
