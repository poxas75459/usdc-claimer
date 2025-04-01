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
    "naT8gKz3PzMqV45XYooPfPkaXTcpVNUeCv6zk3qmicxLpUjVhy3GYwnHnRpXNkyj7YQs8fWhpg88t6HASa5eUFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jMyfYtzfrDVgocfhN4h8MCxYU2HfzMBsbTJx71r2foTDHo4JqeX1gh6PLC5fgdi5HDwtkAkGUJq3kJLkjHd31Rm",
  "key1": "SUY9eUwNwYY2MqKCePkoEhiFdq6oJf4mbHgvj5rC5yBHEWNxxUBGmUwDbnmY1veJ7Z8g9EZ4x7jSvZLWdDxu6Vu",
  "key2": "2zyVDsnARZzTizWd7HaJJXwdvvWo9167SXMU4mrf9A44m5EJE7L6fso8JWLT3fFjdkuDghiu9MZ1nb2TB71uVX78",
  "key3": "5tXnFKDqbAr6uSxQpa1nbx6oHXgKmW6CexRoNC5F8SAW3hfkt8xLbtocuAzWX2GJUtH58YgbdtzUfAPzvvjXMdai",
  "key4": "2n7LedSAAozGwgjqmYnjRdv7GpDX2c57nAAruJaJx3zb3b6KjWPWCFjZgrzV7AT2FLvA9mnHpSxf9xRzZdJRnzzT",
  "key5": "HQxf5ktz63qghB5dRT6c3xHnDBk5JY2gpiAYP2ETwLZKFAZKCj6f7FejvskHpUavceAvDMatordseGfhCesMDbk",
  "key6": "4okAeYNUsVgy7DVYwxx87KXUW4sPJ51kfGQ6sv1PtBfoSH2MdojxewFtzJbEkMVgftyHntFAJKbbG4aMQy65FFUv",
  "key7": "2A1EdheyBw7L8pHScSspJFE9fhNdKMyatqNQCWrdRCtVay5R2Cq9BgNbVaM6xxazJESfi2KgR2ArKyNrUvYFyemG",
  "key8": "2UkYjT4i6joppQw22jUBr9eiBmCsD9ANLPTqd2edCj7oc1sbfsRDve7xcacMxxegS3rvdjEC37jLUZLJBxWVCQ3e",
  "key9": "4oMxvxCrxTa9aG14mnRDAvMMFcQoz86PVu6e48tBBJkE1xhebfEkvqFWRyS28nTkHYUKYxioeBD4fwFW1bAjxCpZ",
  "key10": "ja5VANG9zRMKgS5PBNY4mVrkApp9s74adtgXDaCX36rSjDV7c8cFh2BPppP2W4FUKaBTBh5hDaMbE5Em1GGXJjT",
  "key11": "5qupUi81uEHsEB8wck25aFbh7Dr2D4z1jQbZQJYsrqC3ZdqomK1QDXXmpnUBpV7MnVZYei8JXaajWy5Mk21Fv8YS",
  "key12": "2h4BkCnXMfLifYryPvDny67JLprjD5R2ZBszuHwi7JezeAHozNFaenjALzVR5LvwBrs2FXUkJqANNxwWy21guLrt",
  "key13": "4MEYbVPgQpckoCmq9WGjQm4iPGMDA6GG2ZPdjdoF3iGkHskw3mgFw3Wmu3eW7nGLtrthgqiGiwu5WBeaT3xRx8aN",
  "key14": "3gnK1E74vpuWwsgMNqs6r8Nk2ngNKmJDopEbjFbPxpFcDYTDgPht8js8HtiKxExN1UMYcLkLR5rpRMvCUfLurytE",
  "key15": "xyyLZVY37t21N2Bb82BZQQM6YAF4TXeDv4uxTAW5jt2WybJ9mAHDWUUYpBgXNAH9oeJYQnzGSdKx7STVkN7uxUx",
  "key16": "2KsYnK3ComJrmDF3AmipgvCFNro5z5E1fuFCy8g2fyMqvEEEGL7pjxorZbLu5zEBQBPivBaUNPM3G91kUnHUYiQB",
  "key17": "BySgPTbBNBTb1wgbCtjvSDyzg4P8GmCEzi1aiiKLRdpBB6DeVEGaRWvSQCUdXmCnheY2hqt2KTg6kyySKAEfQEH",
  "key18": "5dLKi643oFveoZau3SrU4qZf22FaM3yjnFeMPsLFwcakSEA4knoaxE1fwzAoJNz8vMFosdU9Ft2jwkjQ75wAEtYz",
  "key19": "5FmdxPYQfW49fWY6ivXkcKMkpe8dssYFMWVq1jp5u8oSkkTkSUiim6BPZLbZwbWvh4DXq6igz3LvFXk4cxxtu1iV",
  "key20": "361Ues5s9Gi51X5s5GZioKtS6pyzRwrPZbYUkKrvqyHFmHRccA4vSKSoavHqWdP8qHadhy4yG1fSEyPXyPZxHrB4",
  "key21": "2pC8e7CV5CT3ySAE48HUTo61cuwV5PhDyRxjgAxfb4wWY4rFeR39BZE7AuLHzkDy7Fu3GsydgAgAhaB1nMdDmkbe",
  "key22": "5YtXZS1HPVLtEt771oiTiK6kDonX1qv8hFVR5MgwGx8Ucxx1VkoQsxHYpr4PxpNYtcXNru1TZCbNXvHuBEBV5bvq",
  "key23": "3LfCnwn88Y3SLEW7gy3afWDoJj1KndJbbJMYUwUBhxRiGXbkgh7W7WdoAduWjRPB9MLZLKj4L5PdnECGksiU3Gzo",
  "key24": "32DYVJviap8HJMdLkFhc43xiHgKhEWeRhb5qLWnwV2mE2622M6gux4pUZ1D39pDninidF2yaNPPcT1HY8qPSGxic",
  "key25": "4MV38gK5NwN35zpJLKXhfuTh58UAMJp3TBq9XcyXppCADzJ1iLVWfTEjwFCEBy2yn7PBeb4wFj9yVFBnQPkhnTit",
  "key26": "2x1y4nz9Jqm2CoXJc1zjAQdXqQGUXWYXD8BCesSJK7uPDxc7sj7QL82DsM4yvH6faxQsjfE8tsE4EMZ9giGTLJev",
  "key27": "BZu6maLoYF42cm6T47QwhGKsDHvtPGB6rPGF8dR1gTfohMuBCj4YgiuYQm6kNs7fFzi22SuDziqBWgXWyceyZRV",
  "key28": "42SQYkZWmtmWXDGTEADNYmBWv9wwvo7K4kAuoDiK3x2BWttMnrcVBHLAYNGaV2YYifvW6dbtfYTJ4vAWTVuFgx94",
  "key29": "3WkigJBbPriGhGn2CJgN4z5PzYoxzeXuXRgf69BxB3b7ZqvED97vpiE6uH7QZrZHqA8mvgcPJNztDBd8A1oCpQ9M",
  "key30": "61iWHmMKFq5x7yrQURbQrF2MrXY16LhiifjkNzBDJsGeXqMt8R7FQBseQxGiKfgpJ2ju1nSJVNyTGNrCvqNgqSze",
  "key31": "TJWgJruqevQhDDJoTrw2GAfvpm3TCazrGLekXRb8rQiUy85KMXyD31xi1uimiV3iVffggZzTBoUsrQwGcwPhzDE",
  "key32": "3JmvQP3XeLBDmLyEaK7DJm5n7YGCL54XsmMdRCCpWkJFPhgo3zKfybc2CccrX9Hg6eHAga7KCbUGQkKxixuNF7R9",
  "key33": "5A9Sbra1k3gsFC1U6R2SigqFN6v1iVwG4cNDYZ3Ksg8Gv3QzeZqsSJyFjfcePyZUGDgaWzzA9gmzW1ARJk37r7Cq",
  "key34": "26RKh498HJcFFMizokkVUQ4mcd9CEiacNVNyxfFHH5p77wSDM1yZheXtoqPdWx8nPfe18EeEYm7wYPkjubxGfuEw",
  "key35": "3rf1x9UMu9poivVDHHoFrCMBZWjKsZXWPHqL2XtfDEPmWFe9pZnHzVFmQcWMdtRhBf61zZRmf5VJ1gE6JB4QZP7Q",
  "key36": "rdWhgjJQ7a7KYfKLNMjAmyVjJYHjZCYwpyfZ8X6TssY1TUgvdbiQpbBPK5MPwWjjGJ3kWMsK5EwuFGTs5QoGXT5",
  "key37": "2xxVcPSaWBjkLcSyE5MBjzeEanpfAxZmZju8Y1YRFsaLcCUYxa9GvUKCVXm1HubzLDhRFLTJve15jiXoxb7nd4Pt",
  "key38": "33tswHwYxcHLqE3XyetyXFR2sBdn4yy16wqt6piQLa8BzSKxdpijJGzq8EEBumkmiVT7CsUZL5Y99ZocTe2dXDrF",
  "key39": "5TiTcmT4QCSHUAasYNVigcd933rqmv5SFK2RcVeX6Y7GrBeUg39mgA8YjfCoYZfGzge6mSA7c1daM7EGG6JAYKgB",
  "key40": "3uE1gdfMw36SAmyiUAb2moa4o1LGo2PmsVsekC3sp6qTAJsv3RZ4KtHHhBWkFuntFUsGhBF4mz9VpSJB4m5YxUqE",
  "key41": "3MqpqZd1QRD4Fwp5uguv155redRi5RN9eGfJ9B5wWqSoDYgvK3Kqetado62z9vHJtDAaA2XXiDWiVp9qaaSK7yqe"
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
