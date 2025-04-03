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
    "5KHsen4bm9mgDtFRMz6fNeQR3Fd79izdkt7v9FRdvEoMN2u59dmzvDt3QU7Q2dvra6wYUHTqVagTeRVLtUvwUroC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QLVChaHpEZatqTHWMVsgNEM2AMzipLKFJcrNkKUw7JyNC2TZMRXUKQJz2zZSf9s6XN534pPF2KkVFFv4heAMZNE",
  "key1": "5wZULTMkusEr3iKBzRzS4mrmw4S23TVVgVYioo5GQAPTMju1bC7i2oBvur1NXmPiTMdLmxv4qMVbicyxmW13Sa2C",
  "key2": "2bkt8xXfGyS3rkEpcQor7wNce2X4ULxZLwNkq2e1Tvny8PPUvqKGECJd7i7mtBFPWfx65t3eRnDDLpPJu3opoLHN",
  "key3": "5KR7G4XEbxYCBzma8qLsm3NFQFhMs7pCscuXRkbxcvP9aNCfwyvihtAyg5J7HvUQf6L5DUVUiw4qwwvije7Wdwr5",
  "key4": "34W4L2ZCTVVqJQqhsgeU5hqSCkLW1D5LPnirmAByxubu6KV7FsnJ7Uy9im6ZSATojfWHbPDwouUwcwuCQ41F5DnQ",
  "key5": "yhFSwPraoT9YZYENCJU7xzpFQchE1eh1Hx6hJ69FiNBo9Co14V5BfZ6ZNDQcvobJ4GUNp8Q8JrXx1pqt5djDLUo",
  "key6": "i4zjNJLBBYtT539Y1HfPPhgfj6NTv23vnCptzJGhzeatEMcUjubSnTz2j6XHyJbpMiuFHGniddxk3wMGkj9TFrH",
  "key7": "2hHXdMXk1JTXBk5sG2mkpeWYpGW9VkT8dXbx6vZ85G9BSheYXKp95fktcnEDvKSZ1MUkokTkKS4EM6xSBB4mKV3F",
  "key8": "3v9u6AGRSJLdGEAP2eqUBQD715uyXNypbPcWBNxzApGS41kSLqp4B3huEuFJSwwpMjUymy3gH18pKVymCJZ6FoEF",
  "key9": "q1xDWvwqTvJpGQWxyGnaDKgGNFR8dBk7ivNDdRRQQ8BV3QAawjn6MMBqivqzh8hVVk84AFY98fj8GEYToej2dGA",
  "key10": "3ZADXxJrSHSa8NzCFyMPbjfYxcCNQsMDHyfUZABqb8u9waY7Fh7nuB9guE1tTUc4RMp1qPoQy2P4x3Wopv4a5RwC",
  "key11": "3dRL5Chwwo8HrNjHXSuPYrg6Jv9eALwLmA9hfc45mKkGSzorE3fww6EapFMabFGuKnNveiDLf7LKMR33snwPkBfy",
  "key12": "3G4zQvoaebVmUJBhE4kJSKQioyPNnQhc9ydZwJwqVVXJsEF51PJEifmRpqNVjQLNYoRAvPHiEgpQdYLdib1mpGWT",
  "key13": "WFTpo75uMntt5Crre93gLtttzDA8ZztyUJ16dc6Pds9xDTU4UptUz9CTXJKc36so6nYhmJwuBMy3UG4bUAEHyPW",
  "key14": "2wLY2YRbJDKzBEiVEZo5cFVQFqYxJ8hGpgSbR2YwL16X6JaDhcWhFyuYTCxD5GTpbYJHsWudGuY1p6GazxL6ZiCM",
  "key15": "woKgpBUX8eEiadCVBpuT368BED28ZLAwP52tcndLweELGhjH3Mqb2SZAHHyYpLQ42ppBYa2CHc3A9S6FZfkhfSp",
  "key16": "2RtWGm6as8R2LfbZZG2XidkVmowf4dLZTBL75xjzCLBxEZVi6pGnxxnjv4sfNMTdkPfKFrHcoUgF8F1NybZwEt4k",
  "key17": "5A3hs4KaSF7odERRPSGsQVJHn3csLHo35AR5KZjxSRLkGVCH35z9asZXwo6eLn3sryRM4o51o6FSBLxroWRHyHDY",
  "key18": "5kUuMK3bGyEc9GS7nEuZ6nonxnRnBCbuh9Q71osoU16zGbtfzgfWwZBT8k9JMKHJ9NuZgErA6bVFYJRnzw3wovCB",
  "key19": "4kf5xY1TLkG3XDLkc5P8DDoPGnWS6u5RPzjj91EYZ8akfes4qfUziNFaWArTMNTfXZKDzakatbmF9eksUL1rFhS8",
  "key20": "MVufA6x4FLPqHHsh9brAMvr8S3Su9TazmJ8xhW64951JW9PJ19rUdWLasHLdJD1Jfh8vA6r3DVSgmb9hShYbSXc",
  "key21": "2nv3BFTQ4NmMEvntb6x3pLK4Lag5xW5ViZFS7dmpe3QbxMeG9ieXJCCeZApnQFHuUUFyYYsdc8NeeRoJ5SK7BEj7",
  "key22": "3Y8mhqqV4AZqQ48UPX4dDseLVRBiZyVDKMZbkbfpdVpcXkrsHWwKCd99aAQh5N6EYydP6eB6EcQgUv4x3sDCov3R",
  "key23": "65XEbVPBuHZBpM2AKBzeNWAdyU1jXLA7BNsvTrUqyimRzn3pRgKAXudiACChCiLMCdx9YAHm8HrAqpFoCEJvAoXS",
  "key24": "8nnyQk2Nhk2yNhA83RCqL51runA1oy8j37o7ULFYTQPpPTCsH5B31vyEiKkRviSe4mFNZaYkpMppfdPPs6iQQD5",
  "key25": "5hp5Hyvm88BTE5P8wZFYWeRiNxfehWjvMavJUyjgRVGwYAyNFUvUvHjZsZTfDozjturvk96RbC4zayzKuCz2aqXJ",
  "key26": "247ifCsqq66QkfU4a6vuaiKPNC8jQzCq3dX9pKJmLoyvcdB4RrSwVBxLDxdmKZyoM7w7vrssintzEwNAh56d4RqZ",
  "key27": "3k3XCDnPCfjaRVxfzP6yXTVoHxQTPZta8C4NuAtGjnCEAGVVVNH9hnW9GYx5nSkfF7P1zLDMqzH868ywm8JTijZb",
  "key28": "34tysuSaKUeVa3WHUZBd2TxpGRBozjan733x4GUsseeLbEofqkzp23v4JnM8EUXDhMNQJyAk5mDmvY6nEcrTK54N",
  "key29": "523yRitfh3pJzLnVvLW5HR4nsDsM56LF2DZBhN5PKyX8BXABDiheEAaanc18BZw5r7YBRMQgZVFZZB2RDpyeYZTP",
  "key30": "5V9tHmemNZHLynTKgjoYceZFsMtN3HKvxjJs2AmNCqpBt7doFaE2zYprwvwFYZPM9brndAXCqJY2ZKQ7Nr4mdyDy",
  "key31": "dCTZLZAjjcq8n8w4qGwZMKNGNR2XYmgrLPdRfLjaFuGmP6LbwBJpeWDCMhP27rwou3pPpqewB8Pr8uFnXgyQqV2",
  "key32": "5WjSfCdFPuFGyZUGrJCmwfGC5faybL3o5VghaaiBBQefSVrNYantjxH5Ds9cEQ6ZkmYTs6C5sC8J7DKgzYD8fv5m",
  "key33": "4nZ2SJDkBipMT4eEBKEJcHUBy1f5wWn8SMhw9yVhDjbjFbHD5TLJid1v5XkLFVvQhKpYjiYDnx1CSffTxyzYdDNY",
  "key34": "2fHeYyEVWcroBftZ5xybGyYTPKmJMu8BG9KJ7MCsxV8kQpW6muzsQT5S75AQRKNCvooHMEsuYhmNF4uztzWavhdg",
  "key35": "4fBMh7rLk7yCLECCZR3mrJH4KSc3dLn7gu1bLqDVrfUpgAvTFwAd5AALgAwzUc9kVQAdzd1unh7WYp1MCZ6Rnq6C",
  "key36": "5s7irHBzkTpRSm5NFsvTxEzdaEBHU3A3auWnKohmdnpnKfYZASDxgUTpcC88iahxM3Uj7ZqTcor8QzDnZDeKybpU",
  "key37": "5wvvWLsr9otUSCHFYufBsjRAebGsQvGRXLN72HmxGwqSNi9idFytgmbzo9yQvwAnB3fiv2YWc5cFvf2Sag3nJRtd"
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
