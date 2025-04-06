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
    "5eZu6gmMyqqayLT6jyESfggNrxvj7VRbKfcRvZoUiCBksb7259R1sd26nWNogihqMn5ChC9M9KoY5drKnKxaTQ92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uv6w993YhZrP1sVYq2pxMFwNBHipLccwiP3jamtJV3vJTXc2YoJYixoUD14pNJct92NAcS5ZYa8VTeQZ4mxpfVS",
  "key1": "4FoJiLH9VVRNZTPCbWoBTouUAeGTednpgJEdnFTMCU1ebQxFXUupvBC9FeSBcF6LgbdrzaiwVwW95wp3G2n5dimH",
  "key2": "3gSTEXZ9XAUtCmhT3fm835FLzXCePKkYnHAob8FJnN1H1ze5ChYgsLN6A1KNfd8GYTQatyut7YW1GRh9in4owrLu",
  "key3": "3AJzDyz1NuJPJmK9fdCvreJWRaRVnBoGrcLWEiTh9be5Xjc9gimwWNuNoPz2T1m3QwTFFTAz7iDbH9rDo7odUsfm",
  "key4": "4rY2Mkc5GKXMXgC98gpm73nX3a4D88w8NFGz5ocZi5QRZZmhNcq42mawFkkxak2MnbMf9jdNKkXF7yqaAMGhjZjN",
  "key5": "u7QqHoumif9Ak1WAq6mhdzC4zHwH7XkdqjdU1HUueUoBVzanY2H21MLSPJhhiycM2v6Rebmw36i6CcawArPjM3b",
  "key6": "34SpN5SEUu2cfSkrFWVe11UHgPi88vwyNnZijgGcwzBTeEYeuT2JwixE62NkWdqYgG4Q28zv2bryLmHFbLURfnLJ",
  "key7": "2x76pbVD1DxPzJBxNzWQtuSJbQced1tayiWZ1p7P1WQ2pCtnimSMeLyQkaaPPKBbuquNBSzZpx5iCm6MeqsiQ8Lg",
  "key8": "4pAdipGhFKpqMRKM9QTquZfRF5dqHxBNnfUgfNKrrvdSnBe9e8H3KhxehqaxiRjpPmw83zVTmaB7FAMzGPYMPjZi",
  "key9": "3sdx95jvxsNkqy6zDWVcMqsw6qiqaDTRf6TdHJiGg4ngZigJsT2L8fHj9eV34unfJfcuFPEsxwuWcEu6wDxEaZ2B",
  "key10": "3oDqUMFgZKyUp2BZqEzMoJLExRzMkV2mvvoj6cXnoYjnnASYvPc1os2uJzNGuoNyKemuEb7Pq15GKDNokWWaeSV1",
  "key11": "otdpgmfr9j4cnYgiJKDmks1vV46vbB2dVPD7azoU58gcTtuehS8foFahisDc87fCVEZzaogLtbMDk2oHtP8Ha3v",
  "key12": "2fTmzPGJQBALdmysZGgSUqnwA6KwkRWYXR1oU7RDoyLTMmBtKyjZHDqBxqVjNbf3nKZb5xiWEP4rXpLLEz6yZNjv",
  "key13": "5by13eHkEEfKMUCiwXy4McJitui5DuBcZL7waNyug735fvJDr9epvyeZpWpW2S24PcpF6jW4D4SP2TnmK23kgf2N",
  "key14": "5BwrSju31UyVabRK6CwNDMApRXiXpV9uVGMCrgYS2Znv5ETWtR2FyTBdobt8B417DHTSKbLRnUXavNRB7fR8Ht5u",
  "key15": "66TGuG2o5QqpCQ1cM8jjRd5TAmaZuR8bSiA9g7BxUoLZ2keDj3hZcGUn1tiJcqYGTU3R9pk1fpPjXxp4PVBBSixv",
  "key16": "5bUg5PVYteSUWjePx2gNoPUZxr8qyhADnPZXxHZiHVMDMeGZmY13MwTUCKCstYQsNURejVUPJRtZnTZk7kxHcGop",
  "key17": "5pEgEAVdK6ch2L67GVscF7Pop9BjD4xH6eEJDE9jSp8tsgaCxs5pPgmVFkPZAmqWESmEoYN3roQXkhaGFfpCV9kv",
  "key18": "RD4btY5yrxf2cfy7U1mgK4aJyHddahX5YjE3mysYD42AXik9KWUensssihTtv2nTRJevb4Dwv6KW5uhXNm1PXgC",
  "key19": "47nVvEVFM8c8v7EZx9CqXLUz1WRxNmApGLgkYsRxLs4ZW6GCz6BsmUFK6M8XRUaQ4zDfdfhxKVCY9LRAzJTkj1v6",
  "key20": "3GDnXcWQZQwpxDap2cZa1p9zEUhsoCgoKNysV7iwneg8T9NyHm8N19qKrhpk3U7U7wYvU62oDjRWFY3UoPKKPEPj",
  "key21": "2FKQNjb7uiq6CESsRuhrrKstg9fqBEjsEQbJk6RsAsvcSBdzS7xr8WDihw4iesXEYJgyt19xSXeaLmBxc56sJJYC",
  "key22": "57mbWHMFuNHpijyk6cAqTEyVtqR9exvQmxg9xDg1bb7YiatrEo11YwRx9i24UBEMrCAxVNACNWC2CEuYhQCUQVyi",
  "key23": "21R9Yhm4BsjPQZPdQCjiwAvHVtntYfb2CeAjSGhbpHe1PXYLBGhf6WUwBay3hELP1rhFordmSFJKC4k9knkhubW2",
  "key24": "5GgEmHj4LhtXRac57dKRQHCfJ5VGf1H13yvJxbcNdogrFGHLxG4LUvLTesTwb8ASJf26ukymf92caAML2isQa2MJ",
  "key25": "UwfhNfDrm73L4brYoBKPUKpzvH9jofmtw6MzJEGRs44QvjFJ9YPT4nRLAUr7bDY6rG2Z4hFswZeS8SZmzwAPhhm",
  "key26": "3Qr4Cc5fm75S7uyJ2kaWTRduHRZZox8FWYZYUxYDvR8DR7eDrJaNgV1375R3z3vDChAsmD5rEcLTNHbCWffzaH3V",
  "key27": "3umSvVWYfESUDqfcbr3w4xsTgAJCaJc8bCaHbvJAzkdeZNdXjiCe3XvEQXLmGsfaaMUr5ZDzFpRU8R4puSEwVZCL",
  "key28": "2Pn1USmXfjcE87wy4Fe1qSMGk4oNWbMbQmj67oJz2QKjBRCLQAteVmhPaMi9zCeTMWqDsDsorL8K2usFSP2VqhqA",
  "key29": "3ATDq92NFTZZNL7RPTRMrxN9ShczvPmp5961DkAt2RXNbE658DwvJycKkv3RR7fHDg8FFsJP2Wna2onX1L3smhQo",
  "key30": "4JZHJvxRaWdc23yp6Ai9Wtc5oWjnQwwLNov7FZtAMScxA7MYpEJqk3SrwUqAqjorPLgeR7vAwvnh87YgYZJptfGw",
  "key31": "5JnGNp7aKZxC697FyhkTQdvGyxyhaYaxj1bbj2TyWZhXr7evKkjXjecFuJsc45iCEGfZ16X4hR9kD8BniyejtRcR",
  "key32": "3y92CfVQAWiHXbwjr8G4ksdfFoyN5bD4GWqMgZs8oW2h4NtMMGZ8cH51zo5H36Bg7tYNZbx571QaLsukyXdkAiap",
  "key33": "5r9gSp6dkiU13c6CJ2xN8zpiVDTpKABxKQq3JyRZE21REac8BKLkXExJgYYyGP5tRmEHwfRh61xh8qjYGEU8Jtxv",
  "key34": "5hYheupWzWzahFvv2LnhqusrEz9bFHHa3iuq7wQzZUgkENLU5E4S2dAE4gDm2QmRsNNWk9HtARuw2xvqD9w2XAWE",
  "key35": "EhvQmDphEfGPJoRwonfwNaV6Ye56xmKMpiY5sinXkoip8ah7CaAWJbzhC87nQzB41X5zveqhzaSxKZsLZXYfPwL",
  "key36": "usC2AX5fefvm3zeu92KNmcm8N1LyM1omMuuHpqDLDJyrd82henZZqf2xWiNKkfr6vr9Ru1kVbmQg8fxXj34YcuW",
  "key37": "2PhCrYauh88hEEhxzFjCDEykvtahMmYVCoAvhAkuY6VaqZeyKYTdZ7uXH9jDBU5fXYvxbroXnwCHhujf8Q5jFU7s",
  "key38": "4346mPx7LCigPkJ6whUCqaBBJtacs34vhbshidZop4gzNT6nhCnVzvHgpqT5R3umTt3Yvm4AccvqMsdHr1Gssewa",
  "key39": "5Aw5nH6Pp3kMFKVfXutGg7KJmDgx8nmj4CebMnnA5sd5EaJubBdLVXzkTsHhDqgZQjNWCDPSTqsQUPGkhEERred",
  "key40": "qXh2GGsEqDWyyvgpLMsvajRrPRqkkt2j1Mu5wJAZ2xjCq78rvB1P7dkgQGNa3RvLsrkkriQCF2JqdkX5MpPizLZ",
  "key41": "5LUFEgP5hWdVddLt5hvHQVSprViQ4CE6ZuRAvUE8E4SizG6B3tPsNEhmSu39rFBQmrjao5GdfNBQh7dxMnj3FFVC"
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
