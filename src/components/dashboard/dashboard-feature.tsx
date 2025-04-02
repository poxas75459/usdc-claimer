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
    "DkdDbpkooy1TVDpyqDzhoiiPceQ23RGz1oAahHPdSAdoGfjUAtjoeBVfLhwfQMqCb4iARcBSFBzaVeNKrdRkggg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NbZYyJn3YuFwjdjeFRKNADkZonDntnaMrce2wgvw9ozAmWnqE5mkDLpgTWtQE1pAVC3XWRw7yKDwjwkChfMpeBy",
  "key1": "2G8wc1Gq2ReBqWHxaWAe4RFXqeZzG4wwDdBqNBBcsGNxdaA4iXCjKTGhKhoww9Cd9Y3nyfRsbXqybjVaRiZuFqSA",
  "key2": "2YVXx222S2jowcqKsiyoCcoqcfnR948Jj4yMX9fe2o8itkUNUNk3o2Tqa7cooH3oFVD1ipJCa3SzHWYBz1QERZnX",
  "key3": "4SyHvLQjWgP5q1CCG4ciwLHsf6pogXPSi7XHXThTSxPtBABwtZdg6LaURB2xxtiXFaJkLenyTHzkR4s2eY9ViGTU",
  "key4": "2pZLXYqiTZGSdNt1EKok8unNrWciMSBYfYJzhgmjeLrTwEWR1yKFJBzPYzhfu1cM38VaajxQzXduoUiSaztrFTc6",
  "key5": "2z9Lq1vqqmLwcGd3Te6KCJ9QX26NGwopMJSnhxubrviXH6P1VHjtGP2tcWFzryjZ5Lstac7wHoRzwnfk5FiMA5dZ",
  "key6": "3xz6m9a72dmeBbg6QPy6ENHFYab5krgjbot9p9X1ePRWPm84AiGn5uuE8Fumtpf1o66HH4jMZLovSzv5n4r23hfP",
  "key7": "5nXjEAxHQu1qXeDDCLWghw4cnqqttBJ5xFHGpfpzTDRk3XuiqKSm5yURiKnSHd9xrLr4DRGRczpdCsxVdpUCRTLU",
  "key8": "5AvTJvcGfGk6NTBGYH1qYarM9K9iUAXBSBBe7gzSJx8Ako6XSrqesKj7KkkmWYCB4NPHTzsdv8PvEDUr4PkQvyxs",
  "key9": "5yuLXinsUuQVms358t37F58SAPkmEfEU5HNSjqck119ZtbjvsYqT5hbFrzWkjzWnyRtgy7ULZmfh1Xz1GLfw8aK",
  "key10": "2B14eeSSzYME8tRKEmiZV4AZuR7stwa3uyjDCzqKwYmKo2fMKGGdwz1P6up44kKGhbgBVJSbtfMQ5TdCs5MadAQo",
  "key11": "4mmjXFEoJ4b2XS9nGzCvvqsrutq15qRQ41DWhANGmaGKccoowrZ7x334GCAvRckLLc5oaAR8rZcsPQmyTT9bWpxc",
  "key12": "5q7uztCBtN9dL4cZprK4tL6HTQDnGzJWG8zudaqjdNWPJ4S2JFrqgnvwh625p1F8nweZohcaTVd8S2CdRnnx9N9k",
  "key13": "aTK5UkfTTCQkDdJre8mw7pggcjF8T6xpqphXLCR2ec6xBCm6ERQmLzgYt6QhnwTnDmprq25PHqKsc2GqsoxWvNs",
  "key14": "3W85xhAQa8AG6c75HPYuVqCUmJ2mLZ4pcy2K3SXnAAKKEstiaPTFJCcZeX9Q3oqjXJNkMfQaEguAptuhXVoag5Xq",
  "key15": "5gBNVu6JkL3F2QMuWAdSW4k7wGXKhMrfLQ73sLrjWD3wB6b3SCtyfbkcSf6D6hjhvYu2odxjJu2MxEAZkAEc4VYT",
  "key16": "4sx9xQwMpDs7h3x6iXPDsP28K6Zfc1QCCQj3VXrF2dDDfxnrDPYGFEa4Upq9CranZbebfxmtzdpR7KsNxaLg5od3",
  "key17": "4HgunUXeTHFWduf3oCVTiHiRVRUCR4t66mTuXVtwBhRpQrzgtHGkBvXSn1ZaHLuT8AxbSD9de1JevEu3f8WZfZZa",
  "key18": "4wH9KdK3zufPisc8mFYu6UaHWmyd7k9G9AYA2NaR9AQJYGeJGGcogDZk6BFXGZR47uYa5dmdaKFxG51Vg4KsmvjY",
  "key19": "29HWvSeN1k42VS2NjCVrjwKYKJ5maaK6ECdBbZxvkqSAgJL8jYUo4Lwb4Ay9iNhhm6ZRLQXBnWa8oPqmBqS758ux",
  "key20": "5oxPmZbpYTuThNW6jN2JW3HtCjGMgNCE7jeVgZRyYAYiT6C1WCsNft2mTiq1pCX3BydoLWaAtNbMpUWhhFMun4s6",
  "key21": "3kiGCMqbMbCDs9rhueNX1HEP8S4HgKvUn7f4nWVzmWKviveAj9ND2udPnnt17QwbhcBLvZJd6DiYrvpRz4d5iiW7",
  "key22": "7pJSda8dsRD2jskAHU4LUMEV6t9jwwZpjA1yDbPdrFsY1iQ2Rg4vM4VnGp8ZaiECcBzL4gjsLhPzXVnLujPnTeY",
  "key23": "2mcC5x7TsKJLYJxyWSL1jVCj5kNbr5GkrX927HNQVRQx2WJwW32ik9Y4uyybhmZ9rLEHGkb4Kwkk2niSZ3oXH4dV",
  "key24": "4sA9PUtCZwHfmCPR6ApCXa6uDTCFeDPXvvABte8XYccLEzNeDx83ZcPMQSVM7pwway9FvpkjFFdGP4NfweNCxhVs",
  "key25": "eCTuCpavwgXYPMCXaZG7d2HwELhHcY2kCe4kmW1nbrojooBSCMydktFg3S84uDVJQJBvr6WSNsT45Nd6BCxZo7V",
  "key26": "3v9Gm46q7PptT1F6k4uPzEkDqufq7qKzmgxgEZooBscUfSovUpCSeH8AdvMBkopQsYNNcmXsUcCPbndHCFm4myoC",
  "key27": "WRaENCSJR1NEMec93hCsuaFUhDPiNDH7qZRXtchcG7iR4YsvMhDmVjfUwr1R974pAriEWv7tuYJfZCj1Mep2qvN",
  "key28": "5kGKY3rx5AXkDBi9sPZ6oMfzp3irK5MuND7N1zcWzrfa4VML7cSw4C1GEW7yCsB3hXwHcuHXta7BwkEdDQPAsiXo",
  "key29": "2XhSW8qQrwiUm5BPRizJZzZrJkgxYsYnBSph4me423gQ2AH3xbJiAh7CAqvjL3HhiHPMCMnZLuc7XQH6L29bAPEn",
  "key30": "2XkxeQ2m4iCBaftrvQiMvwtJeBzWpjw1F6gbLb6VGSdBohbgD9PGSo3iRk2EacSPTK3NhKZqDczaU9RDx1pi2pA5",
  "key31": "1pdxihqE2YRmSqR3e9iykzgTYmNDnK17V4ajpJkYUJvRCRvuFS6ssPkwsAMfrrhC7D24bPWm3AFP6UhTEWwZYCh"
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
