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
    "eWG7hnAu1Xw2Ay5ZPn8WRRQJXDssLc3xkQ8B53jPGVd2N7s2LYPnuPMfp8e87x7bdCQrvYvgaPJV6Xsz6i2AKZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53kkQbuCBKaPMb9PXK7taUW4Mw6UrYrfDPiFKbVeRtwgPicjf3Q8DoByCKMk9MgSfhCha2z8Hr8tE7FCApHQj2fc",
  "key1": "5xRcuuhvfwemnKJKnKtcZgR1wdVLcT7TEnpzxYyD3duF4F6sWTMvHME72fxqBuLjdmmuQcfyPqtwrvNRkgVcPJ17",
  "key2": "5rJp4VVCNP4mxVQMHnfFY3G12R5nZRafEhQHDzQkNR4ZagADQBsqwDBuK4XsyeDnQs4ujcawTqT3736qwqk6AwBt",
  "key3": "4R6bYniryLEBd2BX8PuyJeua3LFhnAkyKxUtPxT4dYVoZnZ65Cq4YkfVZs4V8TcGDdoEkTgynahUrNYs5h33CPBN",
  "key4": "3Kjg6qsnek9YmMXRT5oH6TbtUhxpn8PNh29Y4jSBY9tyvVoF7emtpXgSUYqoefiKqzo7ubpfAKni53u1jwyWYpdb",
  "key5": "4VqhJ6nCdKrEN48eMt1oWd4JesXnHgDbVcejEmQKyu16AYGmku3Vm1dy95QG3qihxpbLyHMMav4VXPuPXF9oCSC2",
  "key6": "2cFjHCQtioX7tumVyse89zGQ6EaToru19SHUhpJajzK6aU9cJJkdRjesJa5UfBHEigZgm8XrnaWUwatWWn8Ms6NT",
  "key7": "45yPMhKt6Nk3Kh6JzmHSz45f1sBz4CDQwruaxHqczC1pfFQMDBMe6v7nBMeUp8ebM75iNzC24Sc5JrnHSZ5fCaqQ",
  "key8": "5LQAVhN1Lf8eJxUmkk7xmwV6gXuU6DWYgzwuikNPpCHdPAHq9qEHiyR3jvtcpqhmPRQvz7cvmwjorYAd3GFnLWSU",
  "key9": "49rbvod3rGhFhiPGz4pWXNju2d5G6oJAdKDGxYZLGzUQboPsLESSgknKK1CF9mx2iX1e7Wahtt8GiwBk2aaYw4wN",
  "key10": "4jfv2Gacp6PDHnUyqBWPj5uqFKHKEHxX4u144iWjBof3SjyTP6Cq7EPMfoSE4H2r9DGnyqqJA8tsSjPNbkLVTCTh",
  "key11": "4naqgZUgESc1h6RGhi9bk5pYCMuyL9y8K82tEtHLH5xYwP6aMbCctjSZnQ4cwQmFq4KoxRF9LsMfARBDhCBkgZkw",
  "key12": "3b46MVwo8ND9SuRLafCXazprtWm4b4MgNoZiKpuUg81u6zh5mAKaHdyujPxV3EV4sBnKHJtFnrtE3W585aKywpRr",
  "key13": "2SH55b9LzBe6uUXWBJgevoABRxHGFSFNRoctByM17k5aYRvEoae1zHiGPaHuSSVv9TPjNUT38VV7bnQuqUusW3B6",
  "key14": "5xVbTAFmeNbHytTV5MFUNgNcqTH8MQxw8BM2GTs6B19qQUdz3YNUSLKH2zzJrvrf5K6vaMTKmjTpeGXn9r7KKGiX",
  "key15": "y5bDfNcFoi3dRCSnfbZoxL1EdaiyhcwWrBtPp2aoiiZDoZRwvdvaanjsZheNaJ6SNCsa6nVe6VN9btnPNfzUgSx",
  "key16": "yKzjZJmzJLQyDFCJSDQdxujFNVEpNA1bWh9frfxeHQ2sLYKox86rvBRvXtZ6oqdpdD1kEQTJgZpoiUc3xgxYJkA",
  "key17": "66ZU8DJNatowfikUYxvUS5Eiybu3KnsDyL1AGVMiZ8hn89tcq2Hr3JAeTU3GAKmLXmDJ7ytQUy8RS7sG8HwqfeqM",
  "key18": "4B3v6WNxUM4V9rxr4VxWMBLxgUzNAEu7wjtTYqJ7VgXZvi8jLsVC8GdNn7uvq1ftQhq24kgRAWUrH81a6CBH1mDF",
  "key19": "4gifw15UunV2eSe81V7o4eRrpvzsmiNmSNJzrwLqdeN5Vgm3EX3CLhxzSeorYoTEB8PceA7WquLRLXbgXeiivMSH",
  "key20": "558fNJW7gMCJWtkHXSbbbMZvM55vTAKGgxzeTbCwKE8oHxKBE2wacpPxad32rMzGP7hqYXEu4h6LoWhCiWxt4wmb",
  "key21": "J9cVc1R3NZh3mMTNAtk4UkYjtwSPgD3sBbBt81A1VrCR5fePfnydHwvWXZ67vcsQdGRvzHAoDjA1u2dE1cQQNsJ",
  "key22": "56v7KAAAqbLD6o3CMuKSYWADj1fDs7TxfztZ8WXrRwbAQ38sjB1koinrNni1pKUPabVSg5YANiSF7QXCvaseWfXS",
  "key23": "5JuBrNWMTLUmCBDHALNhwxLxVK5qJvwNvrsVQvAkeGy4WRxSqJkZ2JwMqMDPK2YbUmXuuPWHTodRBcqiaAU2QYjn",
  "key24": "5FXTrq7wUhP2vpXEm9S9Cy2n1FrYNCn3m8rBm7Kokn7Y9BRNWMQGvxXp81JU8kgPnRxbB4NvzwT4CBYdjaRVw2eb",
  "key25": "4XQzgNdTV1AT5H2Wkd666W49BPTQnanMcrwDabLbXG3ytryT6jvvk6Rj8sUyXw5g8AKjmY6zE96fk9zLKzZ4NCJE",
  "key26": "3EMijCCvimsQAmR8FgmTZNsEw5X82qZnAKz6s1hUzQJKC6USTEi445CUH6B7YomKgN1JhzwnBe5JZRjyWftDEWpC",
  "key27": "4P845BGqS9bVKGbsFWxionStzMpYCS3j1NrWXGa9XcffxvcATdNi7xEn1rD2SVouFcYU2CBR7StKK6zw7nteGujm",
  "key28": "rwCM1r3jTRzBUB77hag18YeYdbgmGbUuf4md7YTJQUfYsU9VwfxdVhqRshhuYb6kH6JVhMSEwRYWvox9aAijeF2",
  "key29": "5n8WzBvMU49VzZmySbqKF3P8sG26bRXGiyJr2dVrAFJ72vSRDrVQMyHBzfmwCgSgdnfABq8PThEq3xHtiaFGxC2s",
  "key30": "3L5pgVmj13nFeCV6YZ4pMfgc4afhweMXXZFBikUVpiakAmmDL3YbJSyMXYdmLYhZhiu35sM5MhFLh7yjeQ8C6qmU",
  "key31": "57J9SkMPQgKmvC8Dj424KQWEn4n5PJkG4gcQ5kmtbA2D8FMPHPTkpFgURDSrN1ac9ibTjy9CJcJtMheV4BQJaN27",
  "key32": "4bkMBD7kSDHvMv4hEAYeXmQLweNDZWMhT7tWxrRQkWiKSm2EpheHTehTQPZHpPPAxgN3Tr5nnms1hpk64F3V7b5m",
  "key33": "63cZZ6Z8o8fVnBDgRri5LoQnZeTrHZf4HvxMFzyCYaTTcR5ABsEihFVDzHhzyJ7tP7XJCk1h6XR7jffdWY1MMRbz",
  "key34": "4RgdGRBPXxGM18pQXo9DNQNQMW8yVJvW7uqPw6USEn99EwCL1y2qk8kvBuKXdcADHfpQ2vkNcM4JuMq5fNuz76SR",
  "key35": "5aisp3y5YcTNA4oXwHqfihQw9YcVvivb5Jz7fZtmBzjwrSymkJDwup6ZvaJZ1J5H8meAHBSLobt72DkuyeKHHm8v",
  "key36": "5fR6FnLhYBcPeaUpiF9jPYhvh5kLzdj5sHMCvjwehgS4iAk4DwbxxtDjZYytoz54gQBx43XB14jxKxxivScYikbq",
  "key37": "2wYnEPsYKCXrHR7GP5RvN8DoA6RUrRmbrJ2E1WCb7SsY2f1i87AjaoYdH3hcfu23vyWiuvz79VJizwEy3qj7o81c",
  "key38": "4cc5jsbAHvvy358aAV9sXjyzLUhwhJggrDRbue6mkej5PqeiSg5Zu2tTBhc1o2naCr8x6vVWJqcvLV5TDtnhPa1g",
  "key39": "uPrZJtFBDDnZqGtW6CMUz8WPWu5Yxv4fkMi96RW72xSnWqvfwaPwEAQ4XifzMJKWJz4pt312oXy7pR2QtCc1SS1",
  "key40": "5v7g1hkD8CzjKsE9QV5QsKgCDfZ5EJBvibth7QSbyMQf1YcdvaDyoBP6qChQmgB5K8arYtggs6WHsMHYg1hJUroK",
  "key41": "YzWSkTerq1UHuWXZQGrb3vpp31w4nFzkzSDze6c2EHZsquiAMzUF2GdgV1Z5YyXMmifjjxu3ExENPtkjVC7sA14"
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
