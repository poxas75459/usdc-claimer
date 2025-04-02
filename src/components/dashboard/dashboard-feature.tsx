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
    "5FwypKC5GdoomorXcitmDEHvpU5fLFqxyw9wE6NTFYWh9mfqN5fVMjujJwv8VWtEzRa22Akdirr4pLAkgsYy3vhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uNNAqZEoG71xmeR4SmTDqyro3Ddgxg31NNtYyeQ8peBnYEZvvSnp1yKSs77L6nA8voqFy7hsrdgiUJ2fFgQchZy",
  "key1": "3ECYhbSiu6cid5hz8NgZYm3U12cYjr2NLKaYHvtTZHzEWqBx3xFkDhNdHu881hhqDMeAbyQoYvtycFUfedyuRGsY",
  "key2": "3WJQpnBjjrb8nmGnMicFkQaY1eDgijGCt39ybHPEPnMW9dTfhpVjDpzY8LiNjaBC5FaRj19B81cMVn9ZHbLLNpBs",
  "key3": "51ZhPwotJPgcP4dDhb8mCLfeA2XJSxdJEAv8phPa3f9CABH4s8RowiY3EqyTJwPZ2BGSvF7VmKwPkNC741wFx3XZ",
  "key4": "5yyzwC5nWm9tEnUnsSzMzWuSMjR6sXxpy24AvQWX7AZ3i2JaSeun4kvdV7WR3H5pBq6aHt2ijA9CMJjEMqgWn4Zg",
  "key5": "asW1dsnByhbSMexuyPgjTECFcU9cnye1fGAuYNGQcvcyYcdDMwCtRXrnrHH23ys7mKPgR5sPEnMBwXbBJGTTKGT",
  "key6": "1MZM8i6pFVkXoyejQGXGrLXK8vtJ36R94Xdpic8cCMX91nkqcmHmASPgXhSd4oW77RmysJjDG85vzFFJuWprZ2z",
  "key7": "2G72JTkCavUC4VT9Mnj3Xz3UaX2LpELvjnCaMVMHfShPnuetxefvPbhyUV5N1sK25ZgnG7Q6Ru6ZbSPsgM1DPHAw",
  "key8": "4QE1pR9oEopgDKJuRj49K7kam3Mrgzc37JQ8ZuZdDK9itDFW5dbPf4fGDoppfFjUmZTbqzZnQQ764SpueZqwRLkX",
  "key9": "RosuYqCixs7a7BaF7mWBbTAsktiWsAmKuiH2etyy8PuVVYQePQ3LT1AzgREXL46ko4yYt6vhyEoD3qnkDdE1cGK",
  "key10": "2YjftfDsVaRh96LYYszZqiMY5BEMGqiywufrMfRT95Yk9gttDF3JmpE3WUV5gkQYwURrMjfEhTJ9dJ3Ubya3qjck",
  "key11": "4LdPUgXvYCU7x1p9vvn7E7uxxkwnVSgZwd6nwyhttEnhQjijhHBtu6W3QeQdVKG4UB7wMJ1DqAULwHD16MxSbNuF",
  "key12": "381zq7MnVYL1GgNjEm5DGYTXvYFafcxcKDWuwJa2fetH3y5spCVdenxYCXXApV1MjstAB8gYL1GajVimmbTbZrJA",
  "key13": "9u3McSP7YE95qya5CzYQt3y2MEjXACd6YYTASfqtus3Lyq3Diet1abD7wRG6PtkMRC5USBkbSxtiNU34ToMbNLo",
  "key14": "5hpXELeZeivYHsz8UUU3Lo9p4b52p4istL36NmfpCpZPoRfQVADTTADXXZ61X3Eon6nReBUzXWssZLhWyrBkrauo",
  "key15": "3KVTabYsUbXDeqLoTvxZH3zh6HtnmQmtF65wCet88G6HRHcMtv9RxNCwVkQVDF8UKj5kjKr2nXhaW7k1vL8FBMe6",
  "key16": "2AZpPFxEPcNfRaagSheWFMFcPhWf3Wu2RpL4cFY5vWUBMQHaif2GoAgNptN6neiaCpmVkjqk1kYKSYcoszRuX3F7",
  "key17": "2V4hbQBbrL1aPyeMQVAWv81WRZDm5nkJoJZJikwP9adqcZDZtvEL5Mj9ZAQTjfuZihyV7TkaBUCRu1NAirKFiBbp",
  "key18": "4nHss6h75UBXKUjfVFRuoZt7LMXktQRDJgSFNtCVu2pQWRLkLfEnyvWqLbo1gpzVekxyV9aYCmvuGFWL9gbLx65v",
  "key19": "4yhyKixeGsRG6b6fjTE8QKcb5meNkwZh4eqVdYkZpMZVprGAjUjspF4Co2zPPPK1SuwPqZxpc4oSkDxDmHWUqSzV",
  "key20": "3Q1cBErKbiA1sv3yAz4ad1yL4a2tnWTPuxUYmG93NzZBP6pFryVQNkpvZbfdc1ZpAr1qiePuYF1ykopovgumF8vX",
  "key21": "J7ae6gKDExLmrcXTceGUFxwupzc2aperxicMGEaXnP9YWoD8QFdsWC9jTHTNzVtaY5wr9JummEMg1vJHtvWX2xq",
  "key22": "VkU1UvmjmNj4VaF2cVbKDPAkBVkLRo9EUN8XFJ83o6xxTxVd7z5kzk2eYfRZuLzgUXuvoYmHdkazDwTZ5nen9GH",
  "key23": "4HAyECg5M1nBpGHPTSTzWitSPvHdATEKvBskLm9RysG8v5evZ9eUjAzFmorW2xMxb23qDCL7a3HzTfJt2S9Vc6Q1",
  "key24": "fpfx3fULvisrvYtAm2cJC1KfWtjoM82PQGa1QKV74hBQpJJRRLaALF5G4KjQLKZN6U2HL859XWesARFjPUyGTRb",
  "key25": "3J5x9P7Mr4PHXuTQj6SGW3tG7nkZb2sTbaM38V6x3hkiLirfX2xLhmme3U8b7odXdLyweer5dzNEYrHwZKE5fer1",
  "key26": "VQbQYGVhyodVCtwxPpbUDrkVKwUC9Bip4FawkTKeV5HXETbWAUD15Ngs9B9RmNZzjVjNbNRKcNzxhgT8CLPUAfu",
  "key27": "5sxVxcSP4GMPwHeFAa81P34SPn3txHcM3p4TQXjFeF1bkqCbLPo1J4ot1AexnKuYLgegHYQtcfR64C6uNvK2E8M",
  "key28": "42FDJc14gudYDpa1JW4z5UwCtxKTyLaJ5xZ6mES34h6wFKMAganCn8JuQJFLAjhYtKBkD6oRoF9BtHZczNy3yxuj",
  "key29": "TeV26GFX9m4MG9qL1vvDFrqPdd9ZsvWDbrbfpWaCWwPnayhNmwZNScm73pnBFrRP28N11kKNweLhWNgfpV2aUFX",
  "key30": "iEM3DczbtPPC21vjjnA8Be6hPg2w5fYKw1M6t8pzX4baqz7GXiYizHeBuqqjYMw9N4jBGRkkDwJZPg8MCHg7zZc",
  "key31": "2ZrxyRLCeKUDGTz3DHmDT9jfzQiFALysEHrJJXBPTxFPjVdDiyPAzaYPDRsNnNDgnRe3fVgGvKKpm3TJxLiBAqe3",
  "key32": "5J4tPxE4d4M9QjeU891y1FAokU4SVs22HQmrB2gXPCNm98RPSzkj7tLctms2KnPDSVyeR2S7dLwsELTEwGjY4aqd",
  "key33": "2wtuTPZwTt6RmENpVwsB4sicDGX1NYm2ZyWWAGof5fUhhFqKyK7GebBVRFdpaXjNTjYNtBRJp4d3K3kU9CTrE3J6",
  "key34": "3U4yVxT4i3HjBB6KEKrubSRAm5RoN4WDtPaFTSYaUNz5Ei3dSQER4wk3zPyRXtNFdGWUZYgf7mMgqnXDjuqgSnRa",
  "key35": "2uGcYbzHdV9KpJHEpPkq1UAK8j1AV6Z98JfCAszagxWioA9dpK9eRKfjELY2sea2iaNKUftra7GKzjVHqKfAhGKy"
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
