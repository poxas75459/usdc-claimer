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
    "2GQ56kpUyG4N4wLWG7JaRNRYcnDH3RmSSkGnrbEzV3efCssKhBzeR6YdJkDxATvzuUyTjCRKm8ms4A1eauXoNu9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22pQaCMX8DG2b2F7v3QKy6ppbxmh6jWdN9evLgzzZBAzKf5wpDvagZ3zM6tpp9oGeYUXtAsZKMwHKF4fFu3EqD6T",
  "key1": "3nzVURWrhC9zKHUYXLoT6mdm1VtoPp5wf4ewWsf53RQfWt6SqVqKoFWvm8Jnbnq8nMGNEvC9t7bkifeJFAD1Rq4q",
  "key2": "2zsoGXnSYdJdp2jkXjmXVMxzKuwc7W5KJT2PL39sTjcEiQHk29KzsFvz8RuXUfM9E7mF8N5KauNK7WZ91YCVrgdm",
  "key3": "bHVa81ie2h3nE5QtQdd2A8hBdwwdHuh8Q2hfUFQY14Fg753LdvmoDBxNJ8cAPmJuJfQmJj4xCdR2UtVA7TLP1T6",
  "key4": "4fyD7tUdtoYQmBnvBo8ZDCcTuUEhdKzD3hoqRv1rJGShRoftWodWZbNcuqxAhkaVDJvgmNYfhHjdEwUgHMLWr2Ha",
  "key5": "4PdMuXnXHCD9UTCrGiviwjyujAtydzaz2WbfB4D9UVKLG2t5M7KHq7VEUYNE9AvdF6cp6duLSihs9ZzKLd9siniC",
  "key6": "oCicVDpTNaeEuLVMSdxKGqpw76yGnwMdRwHC2q7catxmaqdXK5gbY2zxyGuRZAA7CwQEE4yhDnam9ZG2SDZiinZ",
  "key7": "2B93BKwBakgbHFCWFGRSsTsG8TLJeQ9Wse8diKMaQiAJoGtd2STn8b6tBkKSLv25tB5Z3AtS8iDHW25z2CwUjcE1",
  "key8": "5jRiARY7266HxkbzwqzforeSidUHsKft7L4p3AyktdrWvbvuBCrxWfn7Q63yv1LsMtFrozbH2jJayD954xRBNFhM",
  "key9": "2ZUhCCJ8XSoKLHtdUQ8EFi2Se3M7ofJZ2hEbB8JEr1JPbTzMNNvKJJfhwfXkyNQjfXhcW3vxzygcBEAvvn5CaKf3",
  "key10": "4TWTevDGzbtgt2iEKAVU7wqrTn2VwBvwC6ypGopfJVr8zxGNzJMxcUi3KLNpoRnx2d2tMppVQGdvKuzAEJHg4Akb",
  "key11": "5yz239SWoY92bPvGJExUH6mr1xzHmKtNehVpc3rh5TsgUqeMbQmaRoq77AMjQh3Ae1XhF6zUL9FS9X22mK3k8hbj",
  "key12": "4eLm1RP3tVrTfaMErrLEjE3a7zEtR61ZAcs3zhfo7zZZdxuyuLddGt1pMnkuohJuqefFovEP7mSRFWhMXkQA38GM",
  "key13": "5NU5vU3aoYwTj6rDwqo5VKBVy4KGEE5zcc1pjvcGsegx4BzAqTgEcMNqAvQog1A36V5kdBAc7XqVoeF83c49R7pr",
  "key14": "4EX4A7UiScPDKef9Y2ft5pUyvzwoWftkt5sb85gZ3N3Raz7vTT3ayGBveQy54vMpTK73gM3yGKaJZFDUV3LZ1oTN",
  "key15": "65tTfUPB6bM27ztFzx8i9dGGrAzyyQ6XWNPPEiuMo4WDN6YXtBV4MBp47XR9hKG8EAu5DkZ2oJ87PFw6e8y9CWrb",
  "key16": "3RQno4fYGhY3V9WCuBta5PMbsuMwbLaPFYyJQrxLCoLqybwbMosYzZPigh9XWc2DevDb9vcDwpQ4ZHNzeLL5jjnn",
  "key17": "j4PK6pYvYNzWVdupoYP27aCKGccK3W4B1mR6qogzRSzZRuXVgcDQ93P7vYL1CX1u5D9vnxNkvtWq3v4RDWis1s3",
  "key18": "ujFYajk2JEwgD5QKQL2rGfidY19YG5D7AbPKevbbPUR8pt9eugagtmeee3DfakHmioRXhgTm8ezXJbUxJJDCSQX",
  "key19": "4RodXrfh5sLrS9mRTpURFmy7pyCWi9QJFVHFj9wFgC5FPC5ge86FHN15jPfVAL9EzuL7TJ1ifhzjoaxYw7wyU1Ff",
  "key20": "42bVT1oJLH6RCb2kveStEKcGsJPiEZWpYH2YFnjjpcGtVbdyyveSmtt41oMh4fhGs5WMK9AbPbmB2BdjByRcqstK",
  "key21": "2qh1D1o8zn4GonwwmYyikuWNLRzg6mycqRXpQM2qaMfUWCDaNQ8HW74iNR3ofMrpe7B3TmQSVkurSoShYNvYmvbk",
  "key22": "4zGJt25Ge6GUo1eZJM8UR2ZMAEnWB4W1nqp3YzfBBGqysUjzZYVmJmUY9dtUikrdRXJsWoiooMHMUro3zdsG8v7L",
  "key23": "27R5bJXaX22YzSY9HUCsKG1SqHxKtQXBkp3aeLHmmAjVj8odtZr9eCNNt4Dti9Td1igyfdoXAosAkuWYfv2fjrFH",
  "key24": "2xFZkk1zZ8VyvUNxV4eFsAHmWUhfJoQvjb2UMdrtMomYAbebwJBiNLpEXM2snzpddf4KendstAWrLhJCDwL5JSik",
  "key25": "2MpeDqgphNX9KuPBh9nL8jNqP4WgLKSt2BGcMVbMUN1wTzvdN2v4f2qL7zbGmMD512Cqjp5rftZV3j9GUGGNVxMa",
  "key26": "6uGZz6fKfPeF1oXdp7Grd3uHL7L8SMQ3fCy8ZsQn7FM6yXsEa9UBpcfv1F8GV4PY9GW4JfH5hBatR5svo1ZkTwc",
  "key27": "4HP3nErJVcZSZ9hTUnk2UBn8XvchMmucKJmJEKdgrAnN9Lwn7isR6B12aPJMC3t3GzsJNyQmA3GWq4NEFwAtuyhc",
  "key28": "3GfYZ2TfTM1nT5iG8syPjobrGA672oDSyc4nA1y6Nbi6ErbVGubvmgMjbM9r2wY2ap4gaY3fas6hSLdpzyonbJrB",
  "key29": "5A2f6He6TY67gXa3DoUvwqcJAQzhYLiEL2twGTVrJJeLPSPTX9gdJ9ipJCzezZL6HfyKLqFrTJ8gHfVG6fXikAJs",
  "key30": "3xNnMhou3rimson3ThCsNGAa76n9PXwJxap4erbC6uYoFf5VejgCDqikuZnRG1oQ73ZqoSZYyJcquGasYhKEMzDk"
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
