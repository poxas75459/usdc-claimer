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
    "2z6Sebbs6VM4oFykq58ZK9qyJQ1zXqaFaYmZqAP64DbaWUv4F5b1vqumPj8bQvV7SigV9QGQ7ZdD3gqHQzYKPYgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BLzzRKSoQnorEGxhJ4p8bC1kQ7EKQQAC7ZediBGANfrnFiGBaXBdLnfkVVvfQgQza8xj2b59DLWgfNkHJoNwQ85",
  "key1": "3HoH9pEWeRxNx4r8BnQnr1Qo4VUejEMcUh4hLXWDAXuvC16CGBhWNy8Wg9n61h9R49hrb2wJdduJdW9ha3u7zvVe",
  "key2": "ocdKejdzEVeTs9nF6obGZXFoE5Tgvs3LNC5aNAjR58uXNeXSTgxeKNceAezzJwiiXVZ5QQbYBLmLYo9KiLGyZ9D",
  "key3": "2VLaDDybWzxn91qW6PMNYcLWq6JYnf18gGQfpJp5GqJVaM14Ga5PvBWYeMBfiQRQgCHiVfZhLZVU5XKHFaFKfKYK",
  "key4": "42EZ23NNQfPJCq55HoDeiXGH5RbH64xmgAH1WayriJzhM4ZMWoyVC4Wf2tu92QsUSYCVaeYAg8pohX7cr7no3sDJ",
  "key5": "k6azq4idSfHUGF8JJ7TUcApmbBibEfa45uKDtDGxQC1vWVP9KUVuxewj7uXnPwBijDC2T6FBM79VXq1xj1Cpowo",
  "key6": "4DMU6ansYT8UMydnfuoX6r1mpu6CBgG1FfqLkH8iZJg61E886jTB8dF78BKqvb64HY993AhUEtRaNc1JYAwwcEy8",
  "key7": "irzqifgWbpyMtcyn12SYdGTxx3KNBVBNNJuGBq1swmNR8WFHMP3yPdQJuqjJiAye44tv7C9nPsCy8mVTKm1gays",
  "key8": "453o2kCy5Koahyf5bg4DwzN4451RV3a48Ta9aRrhw46cgBeQHdfJpThnVLTErFr9XMh7xNE8B6a8gComwAzNRbkn",
  "key9": "22WdbcBWMy9FkA4nzRd5uP9Q9y9xYcwCd4smPxQip5dNGJCZVVnHyHSuy9BVuRk8fX6KBJkeiMefyiG1uabMpVGZ",
  "key10": "3vrJEGqcAxPv7LHKfEvRG2egkaoyE1EkEkzADawfZdLK1z7hvzry2EJekrSqbHXAv7bBDkVghTgEp3NkYmoRF7Ls",
  "key11": "3N1oWdufBaztWgPh98aTFSC3UKhFpf8YYpCmZnfHJuabMSqCWA1cgPScRg5U3mJXN4PwQR82GMTtGkMcvN18KhdF",
  "key12": "5vrVgSE6dASe1zSSdUoSG8SfWC5ZUHZPckcgUVNNjYsCnHPoutXw3scem6EFr9ojn7EN7Tcpicfvre3p9C3Kvr9f",
  "key13": "47zYqbFBStSP9FoByHWyV89JNvZ4gX137gaybPvzLEffTLue8ucnfaCU7YqSwBR5HkcM5mZfLsQXHxbhWpS77DkK",
  "key14": "3TBU8zh9nuPNSuFSg4bHUKB1J8eYyANgwKZ91hvK6amZ6nowdvoWbokfyNxA3KW1mAiBzpsUupLy37WDc1mV45yN",
  "key15": "YYmSt5PGxkhuriYgQMxj3vSDsAG7VDeHVzWnpi4UYA4xLcaCz1QParKCDnXebrPCit5QzJmzUYehWUxAemvsN5q",
  "key16": "4yMZckbfzeTkbAUWTZdJoPJb8rvd3wmYUWu6TTKRUbAcjoqwJS8bx9rFQbKP4dU2BD3WvbubbKTPTc6hVtDrYrvE",
  "key17": "2XS4dJgmDpD9yw3515ZkH2uXEX21v86PFnDFMf31nNt2KcvrEJuqG66GXA3gbC8X46mrV7n9BK7Rj3Q4xYKkhQsx",
  "key18": "25U4pmhX2UM3NyuNoWvmgiKp2Ch5PCs3UnPVfYLWCR3oeqRin9ubF3LYcGVxF8DWEN8LitewYj1GMa8ctMz3P4tH",
  "key19": "eiySiFdiqyYvzUxCNMEqNRjCgT9GTNFJJ7wTEjXsdgi8d3s3miXRhZjjFwtt5PzA2SDgFdb5jBBzz4w8ySpiGvg",
  "key20": "7hx29RMbZ8CwxeaqqcF4zYrvdg2sJ1RQXsHDakucU7Bpx2RFwcXAUNPXpukSq2WGKN7pXGFPu53qkxSb6TgLu2J",
  "key21": "2z7chXDFcQgaxQ3nGkg8Z6JAyyUZ6yJb7iHQATu8zfKawfcPrV23MDcp3xH73yhNCbx7zVLr6Up8WHzFC5FkW6ba",
  "key22": "4MrHSMad6nxyWF5Srho5Uo9bhdoBozrKu79mxgEdz6JCrJtSPcYbyhvH1hUaS5Kz89ZKxEhzy6NsVe4oAwzbP6HF",
  "key23": "65SmDayhiZnjNhatpY2Mz8CBftYPn6nrV8Un3PmtSL98DKuCXyvZfbtq4JBuUbQwwXSyNh3KM6vuDzKm4fnwiXyq",
  "key24": "Xvchd6UQ9TQAJH6ooDSHq7GUVJxLAckvWmMCXrWt8o8f2pvqsMgGMyDaPwE1J6iS46LVstdtfnxu57MS23wQmm2",
  "key25": "4jyYqupyHue3U9YcWYv3z3Ae5DZwDUYZhVqVmwxie5d3gESMHfbc9XwejbmvbKxKriL2pdtvdHr1dqCzaxAGvvtE",
  "key26": "2SWCF41rqVLnTtmVKYKn49u5MMJQgtCsJSycwzXBhhMuwLqs7x4wg94rL611EcSpQCNmfRyASw23v7JD1yTMjHYE",
  "key27": "5TTnmLUe6r5vp5xorAjcw1yXZh87QS9R6yQ5wueq3Q91iDopp9oRNXH1TyT29TgcsNtd3d3z7276tCKjkdSiVY1m",
  "key28": "4FzepS4GwwkZBy6rgdKBSeVVzhNz83Uo3AJQccp8hKoHCoiT7rnyHv2sr4zjwwH44NdKdu53JKEFfM15MTyqmYhX",
  "key29": "3yXt5mY4S6qwqZBBTCLSWA281Q2jFehMAMqBs2sJNgYZSfBefnkgjsrC2KyZGXKkWKwWJxgVDPjD1SJYV59Gz7sw",
  "key30": "3GHRzH4guQfHBhmWGZhCZWsZWeFLtsAUsugykikV4c58jFpGPc9HdKMSTP7ToULe7uUSuZg6qQ4YJmrdH28Q4QvT",
  "key31": "nLaLaj2DFqcr4UMBZGhqYCdxdETBmur5XxHM8DAr2hcxQBRLHsYY3584Djds7et8cRZT1Yc5HLDS9Znp5XeCqkZ",
  "key32": "3HCMzVHiWTMuz2cmL1Sr8MaV6yqon1HabAm9UV9CEyQsHZM5W7NshxCD9Pzs56ibCwbfMv2bH2UGHdGcjypJ9JLG",
  "key33": "4UREi7jW9pYnvFpB39kbBGxbhLWrSrpn5eHB9dD3CcV7cAPwPLMYWjksMuagpZ2YEMAYDnLFNr6e7kXguNpd5KU9",
  "key34": "4rsm298oiy6Xi31bSZKKdUyqvXYBqMrh6HLPdU2nScPM5z4vuzX9GEX4EKUN6ZnX9CitGepuVpk52F5QDvqqSmex",
  "key35": "V33DWeunhJUjt35n8go19Dy91WkW6fc3HrTnAE3UFJ3hKuttpZHCH2L34nmw7yjCvaxSrMbUmtEoXEtjeq4HgCH",
  "key36": "66h8DbvGgfUbtCcyt2WU1m8d7X6ivJQwAwD1QnBPhUPYeSHDWaikNPEtQ5iVRjbo1gANXohqH8kX3XRxfrz5tR4j",
  "key37": "2LCbMP8a8i2vV6qka2SPwV9LUqLCfLnQwaA84Ag6CnFxcdRauz4BNqhvhcZ3iD7RidqCuPx8G92TR6FsVcGoxnY4",
  "key38": "5BG1GoUNZSUvuwEiD3CEwHfT4BVCD6FK5fk8RZ1Lje5McE2VYBYzHy4qBDAFUhnmikPZFMVvuyZnzmovqASC6fnY",
  "key39": "2fK1tnXToDfXP9V6BYL5h1ympfJgUVJpxSx3NAJatQnQ5afsQBHaEvo86A9VtkLU7TKbY4bCEHkv6KoTdvozaMHe"
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
