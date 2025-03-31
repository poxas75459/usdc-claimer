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
    "RMujT4dFosoizenvatDQ1hWNoKZzmvphqTRzVtv6PNtxpDX1ksScmF9LCm5uBv3egzmqXKCfjQnH4c1GfQ7fqcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pd5hRdojnDLcC1VbBKks7UBM6TvEJM7tBnoKESGGLHKPcbzphZSkdEmvNpi3EmgMdHRGX7SDgmcE9Y2X8bc4UtV",
  "key1": "2WnKfi8oswXBxwFTjcrHFuxXz1Bv9bPxT29N1NSGRTgWUApoyXzp5pFKZTkG72dYzqdrxTNfcsk8JzkjgP8TzvpW",
  "key2": "5UJR1ohsmzz4vonb6No8mgGPdLW1jkXzhsvGLJUTrwjT9gsd5a643FcGQLs72L2K9GP1hHBdD4z3H2avTG955RUj",
  "key3": "4FGuvxzJAXJdEjDXnJhU4o6U8GpiRy7caRVNtbh95uie9PLLjLWqeqTTm5mmVRYaCVmqmg4vbXKTbrCCTTq7LXMr",
  "key4": "3Y1aCDnpBQCEQtMwLMXmFjFidYuDNKmAuejkrja6yJNYYYH7pnFnGTbVrtKxvMf2euP4ZpcX6yp7bxrCz3PcAkx8",
  "key5": "23qm6zbJp3CsSFjvDKRtFHdjWEXjMZW412hwPihn1XFUxXHW6cL8P88RdmfxQc5C8WdURdL5zRFiLg63BexdVr6f",
  "key6": "6298S1yAGh7UgkrVHtrLzybNSWPv3QuKvxtzpG5D8mTiaKmMHa1UtAQPo94EtyHnG8fdrjpw7crGNhnn2NAwhgGX",
  "key7": "6UfCutSkP9pHuQX3BRtX6Y88Et6itn9nt7n74TYCuZ4v14h84CvdQ22afvMswWug4TJpudD9CUGxpBCNj9ctHEC",
  "key8": "35roxApKmY6sALQkUXB8zuboFX5DqKwGrSTCoNAis8K2CtpvYBN2WjDpyNzpzsvVQVy6M1HszMqCecHNqA3EnfiM",
  "key9": "8duNCr1pBQTwyeyCE3DCvtdqv72iMc5kEmWXQYwWP18MUJ86yMF6Rf3qoUkCvaUsUJKghUFeUQemfawwEQtMNPw",
  "key10": "THpKjv6oHTg4CNkEFjNSmy73xqN7VtackdfJ5GZiW38MyxKAAmhgh5zD74e92yarCz8sUdm39hhntyQcAYz3GMr",
  "key11": "YEtPwowATh8hHyWMU6CSmpUbPQZQwJRpvZiGHiJCva6njExKpo2Cag5rF4JU7bCfV7mpAanxRszxfr2gGtojHXr",
  "key12": "31NbzCv5yF7PsQWFo94hzbffKdE7SdmVqoQFJkXHVyDN9L96antSdu4SzqkrFZikhdCzX8ECky7nH79qNN7xZu2h",
  "key13": "zvtk45BpV1zJVmbSta3LkCCExPnHoumijfhAa3MEHuqJnWVVXzoe8ckEmjdDgA45hLW5eFwX8JRRsgpjeLqgio2",
  "key14": "CWAP6MmushPqLeUEYyyuerPFxdEWw6fEz8WSkUhqBRhQRmZoqqQY7mAuhtzLcPbMcq1JjbVLpJxCit4x4ACZGsA",
  "key15": "5nph1qiuCcpVg7soG1uewARU6LggJP9j5ycTFZhqDtq8KWBfyAaApRZofMgiQF7a7M9a6jwa9bniX7k1GER2ghMn",
  "key16": "4cm4dBHXKUXQiSgFpDaVtoz9vKVSMJW3TwPu2ov72sDD4zzzPmZeTfzHgz493AKoD3T7JkCiXxS3xDh5bwJciPhN",
  "key17": "21CnaXzw1joSurCupNGZFUmQdsE62tyCgEwdyioVrVbAp829v4AxDVXujssGacef71nCRr4JJowQwu9mP6TXtRiR",
  "key18": "ei1hsFw2R4zRSdXPTrQXxWwzkvLLRPMLRgkjCTBWAz6HcKbvbxvMN53Q48QDs1JhSyjXZvtaGu9pHK1RkG3xcrZ",
  "key19": "BZwbckr6ZDeKPknjWzeZ7oEqqh2Um5ABS3uH6nfPfew7Kk15RMLyB8NKjZVmeNveXxRGjCb1XmVjPPRmBPMFguH",
  "key20": "4X27hLQUd6e1bjb6g2F1fuyYS78woYv5AHTZboG3TFu5P1TAenYbDUMhuDrzvy5jwJpm5ktdJguzHCgWkLqn7Q2P",
  "key21": "Min2B1bWyUwVnXh4DwZTyKQsG9pgj4qN6Eosf2zzjs8vBwKxo9fB11GZxmedYSqPtmAXwxMZfjUv1xrrq41QjwB",
  "key22": "4LBi2gHpoPdQNsov5NMsq1T7hQQVunkKepVyC3XW3bagtf6mQfXrT2AhFDTKb37dccTjyR9RPt5gDgZauK5smBkJ",
  "key23": "4LBLkkUZoqzTYQRRvHvhRrXtsN4yQpneVyEg4wCUkctTGvAwrMy4hcDckbKNmhXr5fbZGiKnMLtSA2tXj7QEfZpp",
  "key24": "4yTePpT6RninkgoCL7Q5ZPKKqTgMh7VTFbgZTH5nMpaUWyvc54pUgJ16tEmcKYuTpfB4REBW5MYvjuHgi7CxuYbS",
  "key25": "4pPoBaY9MLhBnjVcxJnT6t3zhbPwG2upmTJcvwY7oEHXotyQrU1bSyDhV43QG8yqqyog57RnUKe21dTZojWzpJRG",
  "key26": "3UFnNufaZcZJMSUSKMudmXaXMJ4CQLFCy44C3usuQP6PztwH39BGE1XXcEmuF9oLZXqCNWbJTAyuRwkCWZpabcpc",
  "key27": "41foJMeCDNjXoUtCKgrkbhunyFQDr48fy6Gj1V1wNeVz7Hrt9oyCtGj1pEEtndjw27uns6VYdLfscgfAXbJ3DDkW",
  "key28": "4R4RaHkZiA4qaGVhhGaX8mRrm664yEpuzeQp3irtTFH6rcDp6f7fKhw5QJyTorbM7wjHepjTdSUx8thZm3hgrHFa",
  "key29": "62cV1ybCQEWb7A4gsVSS94JC3kQjTC6NxyiYr9yF8kePc5edXXAGDiDK6RvDeisR2AHjfEA1LYptoPBWR9g4uxi7",
  "key30": "3JPgE1uaFYQAS43aAdmcDfxfNEDKWUG6Aybs4vZStLVLs5tmHNtFmctdpU1J2b3gSDSyTVmbZ1fQhktRSfcyJZtW"
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
