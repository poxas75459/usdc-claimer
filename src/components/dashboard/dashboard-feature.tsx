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
    "54TZfYmeJ9oX5iMJaEnXzjk6FSXLqdxzQjBkb61tjjWDV8mfrZ1hhzY5bH7QKk6iyiiDUcnxcJ6TD9f6myMmX6nb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b5u2BNHMosHFEgz3xJEvaZsFYhpnxyc7ezc9SZ1qFJ8aZPxV4H2Z7MNkQUVMJ3fL64swb1KJrNnFhWNuEnw8Q1g",
  "key1": "3N4DiAVPVFGpFNySKobL3YYpDRYSRQxY6TQY9PvgGNEXWUjwPaExTJBkmuBhYewAb97CwUbx6sNZdq7WwZpdV9rB",
  "key2": "3JFu2sNReZCqsLEV3GUfyjTvT3Uj3ZdiwyfDpwfmRHyWkX7JVwfEfN3DmXvMbVh7p6tcpSgF2yC6FxdhL6xg8eci",
  "key3": "5V1dPhzMLbHS2G2rYNTD9D6GUBiC6ZmoTEm3mXQG6EEXueHmAuj6HNPrsPTBDA2Ew4sv4ZoK6kQLx8s4k3SdR9Jf",
  "key4": "ws13bYKs2rvJqRb9aHj3b3EZ1D2cZiRqGgz5raxGxTtgAZB7Yp44SFnf2zTGp2sTDZtSTowVoBV7ByvoWWXVKev",
  "key5": "4gFb1c5Tsb81RzcceNFvQcWK4TEERAj9t9qpqS4iza4B3cRs9fxUxEMXVBqtFPgNu5qtJFnMAHyqf5xZNuD6NV6T",
  "key6": "32P3cSBfUDpG6vnhmKQ3uD67dUP9ozJyHjHdEgDRcmbWwL55Amsc7deiMuYapXdyNx1Tjy1mwurkBmygCjg72Xru",
  "key7": "5YZL4z5f6yVSwgsfJEGbJU6FbffHxLs4FACNhnUDoWehJFjLZcM4E5Pq79bCBjc36s9rHGj9gQVtUW2WnneF1NcC",
  "key8": "warW1biXaax5d5vZZ61VHVo14aq7pErNDZ2iftNe4eDxMMZ85C3JsTB31q8gNdACXgV62CUZQK38htFZCbCBPTt",
  "key9": "2rocdJhH7iKB8YYHsR3viNCc9aVmGApbsMdhSbrcwvXbgVd4kFAvjm5ac8dxr1gEaFfwbjUyofWSjTLKkExNsXPj",
  "key10": "4eNP2UNaiyxGBzvybXE2YjHSiWv6cKYvpB6thM8W3mhvkjXuzCNUnuc1qDf3j6bPzWaLhC21kneX1uubxY6yUzh2",
  "key11": "4P3dCBGsXiSQczBUmY7FWV47qqdzp32LiAiVFoxEFkg21dvauwThZVju32jYfkYQcpZA6LqkTxdwWcLMGHxHWfYd",
  "key12": "PYLkJ6jAb6PzTs59DKx8ZTFKLPmt2qicoWqPnMCjpsUcJGccuDnudAh77ztd43wQTn71dMDeEAANPwKgNPUxN3K",
  "key13": "A9zBWmCG8A2EfB8FTfwS1iXB63jyKx37BNpe8syN7VBeEoh1XgpJRHNCgtLx963EALLD7cFXCspbazcUzUjfHum",
  "key14": "2oiGCtth4U2hV9UZqhpkERwCPafWzgkXBSiTjkaq79nPEnR82PR92J6ij8qWfb8pCMEgLC5hCMpteUxY3kHfWKsQ",
  "key15": "4kVgKmh2enBc9AvcpQxRjTKLqLFWWPpqv4PdYYZwE33b86t72vufmoRPBZAJ2tF7ETA6fmBwdBpvnM23jfcKaQFK",
  "key16": "2q2dxHrkWPTtbb1UAKVosaeMW3ShCd5ZJbgxSa9VSjrtLU4xvhsbAD5X4wJXQnRPzu1Ycp4TXrmBmXxRGqF3PJQJ",
  "key17": "3UG7MZ1H5nhzyt2ATEeSrUXNYWT8SqXuvNf9SmCsM9vZpLL9unVAfBA5NjfZEmkxhuctLrXdEPUvqTrfYUeUeRAh",
  "key18": "2HGYqocMP9DDsv6MmiQcsTC7n9gdNrWy4mybu5khWLB86Paj54CyqTRPN5w2L5rG4NVCSVT3p1QkwspbjfA8HswT",
  "key19": "U6kRD4cuveghpZFxPSBwtpnywAHwqbfRtzbVBYGboRLfn9Wx5DP5QwmHX1WUzNmjErEp4SCCGeoDxr9Bz1E21yT",
  "key20": "5FcSYCgPf1EbhCKbWFMzjytwsRB5iuUnnnjbfDCbCz57hEkYLKSWSHHcufz3JwtNbUAaCKnDahUoGNVHEMacdLsS",
  "key21": "58bodVYtLMMkeL5iFWFnFxnRnc34q2suWASBpPUH165KZqzjtzCZfPJHHHr7oxEpfuvtgqbKahsick7LynXn4sQk",
  "key22": "5XeTK9JQSopmTgmBCjtHoSzCwBfsHmeasaEiMD6A5AZu5s2XSsifu8QiYUEy7oS4WkH9oPXTKw3HpXktwp8YVwej",
  "key23": "4qeq13oyjmvgcJuFe6Z2FaLn8zRfiKhojxD29DJmg9LvFQVdMkqNac48MJJSPGFnCseBwMnUxTRtJW8NtJSZ171Z",
  "key24": "5oLztzXpvtWMnFRLeyS9HkHPSnkv4sa8viVm1DNfLZowyivNX95hra9LYRy3hCdkvamEtB28jFkewMcWc5YUZpQq",
  "key25": "4cgmiuhxa23WnNgPy29WZMYhhQ5MWM83mXAKmopqbn15y9WKTuGvCJUqiXUHn3aGj9ZFm1bN3HnPnyVmVDZy2jjq",
  "key26": "1Bq6oLnpLGEocZvg4F4ye4MW2XpFgwHmL73rduVXDqvhf1pqxtqzE1uaTHguqqhQ27hAJJMcq1BKwria2vVmtHV",
  "key27": "4zriRSdiMGUMDFQnvur86NUmiKdHRcXxRVrvQpRKwH1fcbv1c376uraZPoooy4Wfs2Xzo8AF8qoQa6Abe9DJ2EB9",
  "key28": "22fhAaKieP9R8WauDUcNw784Wu1XWsAHjzMqL3CMiATRUjJeo834CXabEkmQL5EjUDhVeCcCeST2zSAmwHasx6jo",
  "key29": "66hJz9qDysNq6QV9qfwUjciEXs6Tbt3ARNLFRgr9Gh8qRFyrzFpvJfHNi7YG1GzBUk97iiUvLzcNgDDPnFWqk5hJ",
  "key30": "2UvYCWNVEDTJHR8mnsYWWD8xsEeP92i4z3HTD7gFYJwKGoum3FszaS2vsDDDn8fhfxyCyt5VJqvugqmiQrmyu1t5",
  "key31": "aoVRk4D3kd2Qwb21acP39FwgEX2in2hjDHx85X9jd8r5pAQCmKt74Fvyju6rnVMSt5JU8Cc2yH9Z1YhHP36Uq2q",
  "key32": "5BwP8nB4LLgdBMptcvKEJXYyVoNu3iYmeJywddDdrvSvQPSTSgnsAuBd4t18AH76UFaejaPPWjtLETQms3HwF5Pn",
  "key33": "ZH64FE2zUhJQE2T3SiAGedBMKTmFug7g4viiTicTxXxD4upYoHx4xVrocivPG6H1DS1DSnmV1E4vZTzu2w5CsjW",
  "key34": "5bqKPMTH19LjBuitxMG8NUojPJGtF1iQ3ZznRDbfvcnyCweEoy2MpLFpwyymY3XBAEgft1GNTaifq26Qgg6tRNsm"
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
