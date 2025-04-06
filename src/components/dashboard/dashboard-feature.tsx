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
    "5a3sdGSrRtqnmLf6qySuA53vPfiRQRNdaQ9kiUhxQUvFJyeNSfWpUoU1p4jsZZBYqkWe5iMZY5s24QwXmXTrieUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uTPt5sPAwibKnvQioMRAkNff3nNrxdJdFit4rYzQGjGMEgAJdqfisFAqDeeuVug3fJuVSpChL1XoGkXmZHQDw3x",
  "key1": "uf8xnSQpW2T8K4LotFNJZyNxFLYsVEwzYAynryR7eJX7gJzZbJTMUNHCVdJvQJszXzQuE5o7f2jzE5ZPZuFBM2T",
  "key2": "5YsFAeSQEtkr3PVyFwy5nVDESqT7UMVsbmK2R8E31MYEVHCVsyUUBGRo25wjzFqmjuQ2Tj1HAywXBRR1iUWAXvZ8",
  "key3": "2yxG2khG6ARcW4bWbvjJDwDTC5Too268k6X3BAf5FKsrV1bz9yFXHSCGP8eBof9HX212W35UYoqjFy1cygstqXFh",
  "key4": "486fAjegxFCjktc6AhzDpNawt5cXFPGFCB2rPmjj1pYr6hw9mchxSw9cMYwjCfdsJhweSw3g7bUf6RfJ7vhuzujh",
  "key5": "DPqTqvqQ6QJcAi6EdfD8YeNc7XgtMjgVVRo4kgk4jGycKos99Dqi76dfnaVTEivpP1MpvF7h6nnfRnNto5YsdqA",
  "key6": "34AzrdRvASGE6V5YRpp75vqN7s8RnfB1a1Y8NfJYxcCAHG2QK9PeHkhbxbiaJPTyFuSv2u5f69bsrCC8kvp7BwRF",
  "key7": "58w3ZmxLR5MKcjUbH8vNzDxdekSrFnqDNUbKywTnTiw3QuTmZ7nAX9pb1os454SnpPZoEPaSctpn1c4raKUFKwwH",
  "key8": "39pgG36dAGuAiRq5k23XF6o2wiJqUJKMvKrfYitkfLMPC3h6dPaSfH5YyuZzJXhUZ8BAk3ovJQj7GedasYTWkpv8",
  "key9": "3SUouPdUhKQMSu7isMdU8C2wCqpu8bkbKssiWnwCMp3qpSPpTYkxGpvc3bRDhUdUEMGS1vUGuCB1qDWFADp1gMfK",
  "key10": "4CNxJQY3YMPwzQXZN56sWNxA9xPHwm1DBa1fsZo3YAehvoav371pYazVArHB2yCKvvDjGU39iwav85GwxpP5GNNa",
  "key11": "1Eh5wXmRjyXu1m5wUAmCkHtsavL4GgAiGfDkh3ofeK2DbXZ1dYP3PMp6JT1x28Gfrt1n1kmMcyJ4deKVpvbqjg9",
  "key12": "4pboqKq5CXxZQqLRKE9UFyUNXgE4nRPCLcUA6Xy981zbXNbc8idPnBJUi2tBRY3tZCy1gFycqZHpWnH339kEXLVJ",
  "key13": "fnw6u6qmw9WrKbSNuGc9jdg9Mvf4iJe6shMzUVDdiQfEsTXvYLbsFPseNmtABNHoiNobfP6wfdeGLr7D8QHv7AA",
  "key14": "3KP3yDjSuuvXQSBtESj8bpRtCXEuHEoixq946w7RzKpnEY7Uxu7gg3EYagzCzLfy2tnVnG8xEUumr2QhiuSQD1fy",
  "key15": "2MoEHipV33YnETZwy8bYj2ABiSmtJsWnXBY1X5nxjsJVtD1oFkrnPUEZg2ysnteQDMyjcUG5TCSR8mAQinUGoHUo",
  "key16": "4xSk2kMYYxMo3CkV7N2GWKdUuPfPZYyXL6DxnQw3sUPAu6DFRmGqpvcmH5xWfrejcqraZqGtsBQQCnwWJS3Mu2AL",
  "key17": "5u5UBuGmWx956fJUoRfw1PfWakStW5cWfM9oCpb8Rd29uMiTBzpetTkXYvUX2y7cDqZBAL8UkBqHHNgpG7BatJPa",
  "key18": "YtHfsR4WfPF9FxEtub1K8iDpxeBafnwd432LsKit2qC43CmKZ2GCzo2FNicYwE7vZFngzNrvHeySDVbuLEQf2Ga",
  "key19": "5vg69K5bypb5Eqsmh1LNHqMwovUqm4q4qoZxdWNsv4Q8Edroh1QUHZRG7Uxe6gsd8nydGECAHCbsA5PgWb4Z3iyN",
  "key20": "2xUeC4hkJ7Q5oTwzsUxdZYvmmmFXVxRiQwTa6snLBAJkfredtK1u4LcjXtorLM2Rbc9P13Pjo2c4DNE77dUoAn1g",
  "key21": "3yRQrV15LnrMQBfFcPfcApnvabUb18TKriJWLQxaL6XcdKLE3avRYsazeAv6uDmv274bb41wy8zzKBe4xsEmBfct",
  "key22": "2aiaCFokM9fUFFrUciZUHpUgefTvhNEQyVM8eTNhEkUT84D9D6hLVN46QSTFwYE36D7S4AtFZwMuswZBsAAxXTZN",
  "key23": "5dhWBXEJq6kGgRTYm3jqbmr9WaH7V5RWJbqLzSe6cs21JCxzmT96YkZHy1DWVQR7FYEwSpk79EC5GsX6MRaABoPH",
  "key24": "54qtNJXDFysEPZiLskZeGjG7AbNu8wMKS3HdyrhuxL5c4MAGXE5KoqB7Uno7ayWL7tuc1ti8k1saCjT3uuBYZ1w2",
  "key25": "4vYmqctt3wKgHTxo973bNgNdAVGLt9ALm3czJNgPSrBEyvjAiDRBbMsHK5c7Mtt3Bn3HyWyRNLs5zZdZQby2jTJ8",
  "key26": "GWD5JTWKQFuQRxf7ZmQQ18KCutyCtkJ5HYAcJhzXRq528JM6pECQ1yNQ1jta1vZqXKvRSJdg5urwTJZt9k8YZYZ",
  "key27": "Ye9i7uFwZbzT725x8Ddh9P5FNMH6hRacZfbXbbM554xX8zJNpqwXXE3gm3A1vW3EXkKL3xi7huuKtcb3LfF3q5y",
  "key28": "48TjaBN9wTwcfWb7UArV2o3y5npwThZBNuES5EG7bdgziciEoYYTZZYfUpZSSA1VrC8fWpeFTYaNKJjJDJtKnwSd",
  "key29": "3PyBmgPn31XhJ1L1JzDs7EtuqzRbnBn4xVeBuGibnQJbFo4z1HMWgK1XfgT3AngoXyAPeoi2zvcHfqDv1W6M2nPU",
  "key30": "3f6r9m8jq1Li4fX4Lu16R26X3As3zQgj1JTfNssS4wvVththtcD3qcqJHk7XhT1dghD1p8XmjettChduzjD858c",
  "key31": "1E2tC4ZiKfi7fuaEGhhkGqmzHikKa2dyFXEscuu85npaPEdU1D7tEM7isU7c4LT3pbtE8CQd5oLs7vvhDs9vE7d",
  "key32": "2JPBkXmWSjEr2rQwBAmLdGqW61zmeTAch2m7U94kZjPmG5Gnof8izBeqBqYL4miW6kVEEUeFbwa4A7zuNz72h98Y",
  "key33": "q8g33CEgGk1qQ3xw82zyKYtASwhDGQuLKCb4ofDZJGKN3eDadqKDzwxAP4uom9ViU9PobyroPMkFj3LhfHTjmZi",
  "key34": "642snzkyBXzc3p9TRrtR5KNAFPKXf5chcDVCKtPZsZo2X8S8bYR2KxEAgdhk3FgsyiLfhpnuQChmcYmVVPa4tEdh",
  "key35": "253jFJ3BFQACqWeXdB9rYsXHZUpUnMJqJbZNxNLKkvtKDAANaUJXd573chQsXDNtUbYpHxFjjphMbu3pvmwURNyR"
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
