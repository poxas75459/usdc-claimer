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
    "47VLFjEweNucQmVz99VRMUJZnRGgEtzdawXutKbWWqpXtcbmndbB9AkQdHqDtx36s1qyaUZ18vu5Qg42isK6LrCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "663WEQhHf7iCDt8TiAueA6pvbBb2bweqaFX8udQJxa9Di2cfrDUj2jcegV1hbEt8ckEucvGZ4qvn62WsaorETFni",
  "key1": "2TXr9ptAiNYPjqcbDGaSaB8NQuMUcwrQgiGn5dQoEovRs2hvVvXQBJ66Tk557BQXtqW9oogfty7auXokQyjHXR6o",
  "key2": "3Kwws7dkeoZW8qGQGrJrDSKmaM7xjbJMXoTJK55Kov3qpnemMjumVQAmRoexy45XopLJ7D18moCYvD5JgbE5F8DK",
  "key3": "5KrqzrZhfXiLkCBCXKY1p6skRwFq1PtqYyQgFMcXd78bmqzkbPHhrjxFfdtwzGSartHBnXjcadPSHsnqM9ojhK3k",
  "key4": "3MoqvM6uWEjz1RVP3sus9E9WxY2GBoBq9Nt66jEtD5ztyPtFGXmj7Gf9pufDxn2AzSoC3oYMckcWveKLp1ftjEVt",
  "key5": "67KvppmxPMbrjaZT9A1zRL6q6GX7FetrRwBaMbE6Fp3Gb9u2sN5uDH5AeLKkvhGCmrkoG2jmAyzLqKk6cuSk8pMB",
  "key6": "5dbNJw5HNZFfbodgywv9Pj3GdYv53yMgtTEmYsbJFaG3r45oK8DDHxtrRKQHWweywv4YDo9eucimzTeVXb68Wrvq",
  "key7": "33syvnUX5ZbPnyTFri4pGv7kWxVQCF66ByQUMgXstdgYYZiXsqT8Yz1E8uJbEnfmtaJAtgXMywx3fBsQHsTwHYkV",
  "key8": "3F1r9fudvhkMxuK6EaP8SLmKR2XieaLYXaBgZf76eEBK4Lv4X4njWsDMSH6SVxkPADGea7666MjPE3vT6NaYg5kY",
  "key9": "UkNPAPmkxzEpRzjezN1sho2CA592Lx45sBAL5mJ4TqsAgK9T1QevmfhCWvpBsByVKxzY4dWA1LJ2tfQbbQiTYZV",
  "key10": "4V9CebxKHwRfGQAZGathyvC8VQeQ1Edcm3V7QTHnGYikhSsPiMxf5xsv3AsuE3Roh8d5e1nrzgi35Hrwn4MsUpSx",
  "key11": "sWhVK8kKNCZR4KR338BicCqiXTZckfykBjE64ANQQhbpKUagy3bVuG3FTduFR4TKPFRw5LnW9xSwKvQ7jqt6ViS",
  "key12": "2KYWb67LhfM9U6ThaQk5XPgpzWwY442sH6Fv55vnHm7ZSY31bZBBCmP8p2SyTtfcb1xM563Hj353ZAMGBdZuSnvn",
  "key13": "27WVRbU4TBCUxd2Aa1YfpfhdDQQxStHv1pqJqeoF3CyzfoZrbxLQhmcXfiTkBb8HjZtAZ2o8Jisfjk2zGM4VNwVJ",
  "key14": "XxXoyaMJGprwsLhfiDBGL6gqTQRUE1UbPpdh4kw5xyUfggJnuz5P1MF8xcGYqaRozXPtTGZDvncK6caPGaHJf35",
  "key15": "b7x1MFQnLEu2VNBA8ssXHK25ZVPrS4f6KodaiWfxVr2JvpdZp1CRGhWwfd4DbdErzoZWKrefgqt9h1FDhNTNdoZ",
  "key16": "5KH8oQU39PDqdotLq6Be1x6z7YV7BJroJZtXZ549knWgyHQ8sgyeYcjirncsDGYqwZrTND9FPHN7791tVui6SL6s",
  "key17": "DTv2YXdYU36mZ9t9TPsTyFtDPbV4178P4vrrqy2Yi9E7waA7Diysid23wssFXuqvwdmCnE27oJ8q2C3G7Q5v5hY",
  "key18": "4NvMU4T4tHNZ8pPVnztvYBRbXjCV3rKYo6vzg5HEQanrackTYjvCFPcXFHAT4yzHypLJDUf4rTEcAG1BHdXmbMeb",
  "key19": "LyWRVoTN4w1nEAzD3H4dASEcDTytvndwxKMKqWmiGHit5ifARV74eVRvRo9ky6BQiJcQsoEGEbs3fjj16ee4kXY",
  "key20": "3MZM3ZZS4MUMBBC8QM85TBZiDR46kZp1vmC8DhaRj2ndPGeHotkPcwehEMvY6xPJV3e5DtKZoke3yxj22LQovHQn",
  "key21": "2WjC9runhELhhRN44kPzUg9U8zghkAddNMAa1w2dg8yCfsYcA6av3F7AyDfNCemZWpeKtV4KKpN9txGdQuXL4bSv",
  "key22": "3S61iu3PtVCM8WrexE2KSw2CGQU8bgVqWsoFc3QgWBY6QUaJF94J2FYy1dXE2KERFYYXSLzXW5Gy5NFLzv4SMfve",
  "key23": "5Qgr8smjUq6ZbZjM3m24JfczanyuJG8UM7ERtZS3UYofvqbY2DmC7CZYy6hwpHuNdGZ2gSQ5k8hq6aMQs1H5Nyz2",
  "key24": "392Hvo49cGH8J7iw9UPQxnTSaSeRPMdWhggg1Hi4isijcJYdRBLDnRDKy1MyYiq21T9PJSfF1gHgBd4GxSrExXut",
  "key25": "3g6PgDVEQHnTZGvpVFV65PrMbHJwJrQkrD4fHsL5yUvuKaqPJ7HtiSqLx1oN7wHugzsJmELYFnB8M243YYdvC2NA",
  "key26": "2TAnX2efDNkD5ga7vfsWGZnRRe8JR6DWYQaRHhGKi7LuWtbqHVkFwmuUGjgM3pbs3Qgy6QDCJZ3uRiQsgFtPQfnE",
  "key27": "5MLy6qMFkGECYZ473ih1eKcjufExbLx5MqSmte84R4aHzB7cN7pdh98o1kKGL9qamGzoRUSqdz6oMGUTybdaHVDp",
  "key28": "4XMiPQYnQ2h45pCbjFNwacwo4fMXozRDmfzUkHbRQbe5iLDTgUB4oDkyzjEyLL5Y3hnK2hPSjNmZEj8jqndkqGpH",
  "key29": "25GPUENG4BQ4uNdWKQp1CFrRSmF5JGdazYMEG56NqSJQZPSE9zY9QkfETFLPDJVVseKPs5bvshfvwLqEz4MrM7Bx",
  "key30": "5mUrXUpUKeLV8AmdrUdFJqdEQcWQxzGiArCHb1NXUheEj3AwiDCsz1WLBEw1UaQVBwD3Hrg9ZPLrQHzLTqdV5oza"
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
