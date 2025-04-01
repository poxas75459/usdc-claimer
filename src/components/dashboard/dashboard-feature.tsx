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
    "CRu127Kb5B9PSf8G2ZedgBLjY6T4B3gsBbxyHdeZZJqsNyE1s1VyfkWr9peKyVZdnrUtwYJQpjNoMNKqpLw4L2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vy4tgZeMQD6ahQu5UW8xFTyn1jdGmqK3xAwyatcGSzbnWnNZwbMjCQZiXTnVowuvDiymPZQZ9wY4gX15NY6pbcM",
  "key1": "44E2KscFf9rvMP3VYRoVyvtsHXs7BEpXhuJzLhKthsENDV9sjvdH5fBxW8hZE3AwaX7EvfHfDWfyJULjZynRCcko",
  "key2": "3UKt6uvZyGZPjRoQPEfrUvWH4KPB1JAFnH7nCahPxWtxP6sAhc2iV3MetYc3A76gBXzf7PNs6qMYrPqRYXfgN2TH",
  "key3": "5jk2LNNV8yC3iey5z5T6GTLqumvNdE41vXovsKyzLFSVewE7HUsEEu8pZ8xgS3bR6XXaPpn8k5QbALAQjnBoyUCC",
  "key4": "TD33bZVqy3HivJvhgDspfudL8R2aFbkqbDdn5VRV8qDLS4a64RdvWWsaSSZcn3Qm6bfyqEJUu3pbhTW3sbqFXR6",
  "key5": "2XcW75PGwYGJLQDgQYwAJipdJcZm6BWtwizbR9ePkVhXQjayedh8fart86vLwRksEkviXw5gjmKJubrUBmxaDq7y",
  "key6": "5wZVJxEWof1p3coNffKqWamsFsCvbuWbwyBaxDxppCiv4PzcbDTaXF3NZT888M6SSjSj9Kw63wmPHe8EaP5QQTGP",
  "key7": "3gLVQECFfZsBdV4362Z6dP6r2qrspa7ksL4UY88uq8tNLJAKpuYUHTCp8hCeKLszX8hLZ8rGmB1V4vGGpqUTie46",
  "key8": "ZZATtY7x2VTnRKrbZ9pANsta9vxPkWw36xQCjLVgbVquoUh6uxjyzWKWvBAvBWHq5YYBNnTmocdK7FqGg6Wzuh2",
  "key9": "2Ldy9oWP1BYmsnJf41xMLqeTWY2kwBECUSG8MyEmuKEZm6iXqBUKnesz7pEAvTnK2NNbB7npjKjNJchT5vz27CSU",
  "key10": "2F4pYtmocdXjmbErPccLEXdyZEBiHZ5TMV19doE3sJSE8zfWWZJy2MH4BKX9ftDD8YPF8z5VQ6Y22p3KNjhpzx5Y",
  "key11": "2TVEXRNox6qrXJBFpfye7oJWD4Gvzv5VSRCDwEuiM1eptjqhPLghLQTazdz26LFJTszdKAKy7ggUSnxCN6eB9Dq9",
  "key12": "HtWfH2efPGFDqqGi68KV3r3LHpJetJn2VDtHALsoggktExsP9VwzzdWoztfjoBg4eAiB36wNk1vhU2sXWKq9sk8",
  "key13": "3GnrmVNfNkuut8M653HY22vXqkvUMRQhRVm32Nticwcd4DSrK7bf5LzdM62ndSHz5PTapXp3rhfPH9mtZjTGsup6",
  "key14": "3ud8iC9mn4iCAaFjyotzwGiQir1viypZWyT5pVhPiVWSmzm4ywj8qZyeG3RMvx2WwK6wUrLxu5SH2R1Uo5yBX3nC",
  "key15": "CcfPVFbiFPejRm1zC6bYBR68mz8nyLRMAga8YhQ26tARpHXiHQbToQq7EesWCR93PvSVUsMFZe9dNyRoDntXhmo",
  "key16": "CwEgRDEmrkzeFqmePNfLYE1ogrmsWy3uiPmekRSGndoqFzZ8TfKKfnkKgDLMtVBBUVrfZV4XdYBFMSGf6mcyNic",
  "key17": "4PgiJ71V5CRC226NYnctTPQqXjw957xDvSz5mz9F8VNdp9Pec67X3JuVK4oKkanzDkCzXWa5k2egvrco1RvyeLv7",
  "key18": "2qiByBSVgX9qcguMaw9k1e9pAJCFpcDd4FtqtMesJiLU48VFQemLAeykbo7LBdkvW6wunrUA8y2gzBF5qfeJhW9X",
  "key19": "4xbtV2EuxMGuVRBpKSoV74J1WzdjZ1cxa6RpLCtSs2CcAkPqYeNtoBN5KS7E6EHH7A4fXi5t7aDExCeCyLPSTp8Z",
  "key20": "4ohGmPLJafGjFeZy8tEJnhpY5Cs1f3RgLhAZJjKPXaiPC9JK83m4GPsBHSuGgvG7s1wNuJMjcCYRjtMGChvrAqK3",
  "key21": "5hmowjhvyTZUKPssrAtf5MqDdVKFtzfTEZx3Xerfk2YWJ1Be7Q2FsrD8nHYoMLXCHGLGqUhgn21MRCyrrndrTZ3h",
  "key22": "2tJ7rMEgqhtFD1JKGCbUjFsMFFoQiQfG1LCFd7btUiAmCLxzC1CqMPv7rXS6fVfJoRXtiuFGGsYNgNm6jCo5r9LH",
  "key23": "5oESU2JVeMEPYvhYGSEF7tqjRbrEEUwa9oFcHj83CM1E9n1k59Y4GL1DjX3TggJuBgQKucH53FpasXLw5DfRhYWK",
  "key24": "641VYKuX7qbzs2oocw2bMFkuu32JeeAWwKRNSFzLqa47MBHjNxmCxt8z8jB78p6SLCWCUNEyeGcYxjGBNNhHmTqL",
  "key25": "4iqVc9LGq58xqsEbKNHQx6Jw6jrJ31tTLV21eWLHfJboYRUCcC6ERUTBS7MSCMkM2hM3XjSqZ1M22WbKqd7ExRdG",
  "key26": "5VfCxz2TLpkkM5Dy2eRHRCW836tbrJgsRiVBxxPYR2frQ6pc1kHxEQQWbqSnBSep2DQcyk94JvfVDUo7NcE9r9hJ",
  "key27": "YFtERJpRWSDMLLqvdNHV9X9oAMDNBsN6aYjf7GYnULFSEN6WcaLMsdDgKGUbVTFMaHELq78p3iH4HudbWThQ1tL",
  "key28": "3H2x9Y4koNojPkrmEYU7PQq48CfdZSPRSVBJZXzrYAmwcWHuudqF9tWVmXvnJQBmgHSW4KVwwhYjp2qnKAy8S9e9",
  "key29": "5trRHGs8NegVLgzuZP8wjmAZPNMSMRkk6pP2pqd58AbDWPuR9wTCoxSypnBeQ2TzuW6nM4dqKtuByfG5TUunJtAJ",
  "key30": "5rfG1pq6eQVgSaddGfJEQcYqoFoKBVSTcVtYMpwPUnQZmEb9hdXvFfYdatNkf1mWfJWTr5KTkXUsMTKc91yqtws5",
  "key31": "5zpmUA6rX7eoCZsEfN5b6BqMJvi47ZVfM6ZUpvgRDJoR9Mwryo1KheWEiE1kz8KsZ56MmF1QMBuBtdLemaJBiVkF",
  "key32": "3CzauhyMyyfCdGX24zzquFr8PZFJHXUbu8PLyBUmnCaT3eEDi91dQAdoSTa52jvkfVUsuKXY1TaGRbfPS5GZScKs"
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
