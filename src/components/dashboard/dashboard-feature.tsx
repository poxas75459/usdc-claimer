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
    "3uatTLrKMQaURRM2P4GUP7jdtHFRR2zLqobDGz4bgGLZTda33dq5NcJYWEGKrWcfknK8xHH37WGpnqTwQUTHmDbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z3MFhnKDP6bYHoVVQ9WZvesA6ybsJgrhmz8oGav5jQvHcgS7ofqmfCWD7fodMcVyZz5NiyZaiECmPgyzT1x7xZe",
  "key1": "2ShJ4aVUmMX3jq7T5SPZcHSrgUmzCUywFWbaJfzpCHg8mAV74HuofcHLpEVcmzu7vCpFHQfprRfVJJna2YhGheWf",
  "key2": "4WgHTtKhhfeLLYtsqVe2hTWPUZekGobmQQhrGEVLoTHNauzhho4sdKtVVEwY9rjuKhQbswKksNCTSfKxPSm6oi3o",
  "key3": "2MKuRj9c2WR9SAP8TCqGLtG4hssL5DRW1G2yxjNXoW1JdFLGjJAYzV9vWogBXMctmhkRCSARNH38mAdcNUcfzADw",
  "key4": "LSDa5rrpKr8rgUXhckJ5e7piZi3jYkq2zWzh3YvrKPU18B8VtXrjb4WRntPoWxy9AEZCBypbmoBX2HVJWLgi6Pv",
  "key5": "2E3hqnMWW5g3VLBPHz5mt66JLasK78rM4E2YZDiC8pcBMP3UcH1C6xvfB64XfxVG6npBr5NPKLPErtvWPUBjvNHW",
  "key6": "5qvQhjwuoDTnnjKuSHE9KpGVHSHkHZ3XLFzafEMjxXAc1yQsf7HS6Nvi7eJLErjThQDFAo6QnqxtPpyjp6bXz8yD",
  "key7": "5FthWtGHb8CcMz6NUAzLKEPvWWfAZSjJ2vT4EHxbkUQUB2mXMB7CBNetyotpkPcUCU9nytfFTrmx4pFszVdZC3z4",
  "key8": "3YB92gZ4tQ6UqXkvuZkmHnNeFAgmjU4pmuL1e3T936HWGkJySqPXNsqYLLkEz3fqpkzS8QkfcmRfTuzyis436wBb",
  "key9": "2tLvzKRpEjvCcdmEdAoMKWdmmxpbNS96CjLw7GESZAytE9y7UgB31QX4UkENutBmKLedr9xLMKp4u5sTS6JiWPJ5",
  "key10": "4eMue7zkuFWU7PajXp84Eemc2SRhwAFaT9ddPzBC9C7HgXQt2EakHUuxtfCzXoMJM3E7q4UDDPbEtscZeieNJKw5",
  "key11": "51C4QTVQNmHQyFAxysRo6GyTSGVJYV93Ybi7gQTULUWBeoSjTzfWqEpEqA6fjAFWJjqFmMzErq5w9CxS4p4frLAb",
  "key12": "4uQ7YHXkB6q6Bxh8fvQ36ckFKaFZYa5BAfhwbB3pjSWTHmsnGv7fYXgmfLxLwtMTDMqzeHVpo3ptKFZs4m9ewm6U",
  "key13": "3DC6FAX6PsxF6vVRd24oKKqdAHmXTTzgpyjJKSZuotdqEeNsaqppo5vHsKuvaMpYoRF3bZLXQzT3jqEKAUkfBqv7",
  "key14": "3EjVZ4rKWEJF3adfpk6EU4pmz98PdWKKUVVJPm2984iyv8f7ajuKfu4gyVKgwwj5w58KMhMNHFMimEswEmzpyHm9",
  "key15": "3uQQvFmYEuJ5oy8ZjP1mPEdeYnUpzx8BFH6Mavzfr3YB8FRuyNabNe9yHqmyLY4D1vUDYC1tcC5aAS6puVN3bVLp",
  "key16": "3msuC9tt2e6za1mBaZtVEm1whCaYeDYdfW3zQoqGygr4ct2PFaZ2UYwwWYFHkgjiqFEQ7HhWEvCAzqeqDm1hxga1",
  "key17": "4ise3jQ7kkwH2yFrBWHePaXkwN34PdYRWFGTPwTYyAWnhrAyVvJwQ77UL2BRcm6ziFdtPs44oqDfUWzTLrSVqjM",
  "key18": "4HBRSdxS34DHQNJM7XgQBRYKHSPNiWZRBm17J2GAgDX5CAXMJm5N2aVJYN2B6frbbg1VhFwKETtAWnczU4PAxMZR",
  "key19": "4kuKmPGJCUwBtGRCzx8AGBfuSzxcmEuUJhessnJ3EebXmkKTnoDa4US1RcwmQWbxVrqQeFs5LakiWga6ok8fczdC",
  "key20": "5CMNhiZ6AzoY5F3STGMh9dd5487zhPoTaWgYoN98XUtQQWnUv8dTmmb6GYrqqxgZUmHYxtqQGJstnbet3hnbWaDp",
  "key21": "26sFf1XT1rrzC6Em6QCbqh949NaUMXPdqxwRFNroWdRrJ7xWSA35HFpwjJsceCjBFKGaXZvZkTzMNBk6eTmRaiMZ",
  "key22": "Ur1tWKboNHY4KJ6SJdRJYvj3jj4JHZcHWpudtPYNnTdQ5TN8fY1EEXqFR8FkvjdffdPmcjPjkby8xhBRXhe88C7",
  "key23": "2nknSfnXYUZVVziG1yBakzsTMW5AKVXCK2Ui5vgQyBFykm2yew4ojfDUfZAeWuTtWjHgiWQAcBLioAvSA6YGvsZm",
  "key24": "2xQfoHp6C1eLHoHF1Gw6MBjDEgCWBMFUYmNEqH1hG8mdTHbm1wYDkML9Qcv966N11Z4oWrConpxAjgeeEiDW7gMC",
  "key25": "649C22fYFfDAKXtNubvQ9R1bucwN1YHLnqQuWPyGN7PJvAYLx394GXkT8N3z8dPyMDQycx39BuDH3p6x3XwqUFAL",
  "key26": "3DGpAQMFL77bk1tSrHFtpjfNfVmTwLzKnKSh7gFNLb7QQHianuSnuG49PpK3rYu7CDkZ1s7GDMuiQyfX9g7NkGsM",
  "key27": "2VJBj2pHoaCVGTCb4Vkcv8bR6gAQjkjT5uBKGJZTajnQP17QmQvBDf7KbqETm5PmLwyUYj1HC5hjAbpSSdjaKSyX",
  "key28": "3wvt1Ybq257vrr1Wz8Ky8qAto3UsV2fHbuMS2jtX3KhRtHPtXAb2j1sFgDGdcNVfP8iACjHUYjcuxmNcVaX9ov6o",
  "key29": "32Yo8mHB4rC2Uni6w15HzRubRvGMFL2s71X3cntEbTtZ1FPHrnH8hs9jyGYjGr9GDU4qfKo4hryvW6iyxZ5fC7FV",
  "key30": "5wvDyyK67No9iKuS1qrg1TpbNupPVJTD6bFrmzQytyLiWeL4De5WAQdxnu1Bv8uPhJ9xSxEGrvTcUsZJBsUAeSfy",
  "key31": "3Kv1qNprEZv18ibqN5UuvgJyYviMoGaT7NQJ6ci8RtdxLdqHJJsta3aAFQQSwwFuQCBWrfv5LsdzGzdnrXZYUcG5",
  "key32": "3EYYzJUEZCi4EGZtMggWA19v6NDtCdv7w3NPnABnYG26fvJr8T7xkWm35BL8vHDmzNjXgdFK272Uy5Jfq5vDLkk5",
  "key33": "3ALusfCXEXRRXAzfteuv8zMtoXmddeNrMXJzfFumPACFX1JjR6eeDL8NnKRoqhcLb8e4xbkZNSFNNP1WEjQL49EF"
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
