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
    "2xbpCAwCxgRauHLqZqUEmtdZh5qR1Avt1GtZP8ENkoqX4gm1hwnD5vtpHVuES6PjTZPDMETe839MdVdp76rRkJXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yJjXNQqwgsfn7VhC8wCxqCcXrx43AHV5byGXkwWBqotRS5sAEizsAzhnqSRHL5h8g7nqkuVxGmsA5Q5y9w3PGNm",
  "key1": "GQdVXgsyGUnD1AaBabge4Dc4q5mVEqrdRsX7XL7FAYNtYE5WYET9X3SLyt3y5uM1zgvtv2R2N1YYuHATsZDrBaQ",
  "key2": "4Z2y95SVYiAqDF8ZavhYgg5SaQpLf3MZLKXvM3GiBNUXUzcjfmRZ9SRjJi5XLUzcoLKL7q1BntKuUpqY7e3Zu5Jb",
  "key3": "4SKms46vCDP8tjB7GuppgWRhefCA9eRL8g6D92FFLJ438bXdHhyymyWPSYN4zjWMFBrT66RSzgMT5G7PE617wDGU",
  "key4": "4QvwNJSYhvet6vYXYhf1V4fZ2fQhXaWR3dqLKu5NnYZ1yKQ5vyw9Uz77xjJNWE725YQ26uxRhyK6jQ5GVBEorEgF",
  "key5": "5WYcwFoP4FGnemoZcLRwwgQtdbH7VkNoreuRBnWqZnh6mnbJRJVS9dy9QFtZYd6eP4W3K6Gen7cbtc6XPTMF9kFG",
  "key6": "4EEwrsPH4y9RtztZHD3q8cWqAX6BjWj8Tn2ThvPhhZo7LE4n2Vtnwr2LfMw73AKsiTpAVLPaSSGgMKc2G6RJd11Q",
  "key7": "2kYyNfgZCEe38pcrcyRahnyS9EFgQqQEh19bRUYyXjNoPLpVgKAcUbkMDhUZSrRz2yFRGucFKMdUU22m4TZSWQzu",
  "key8": "3pgMX12XqcrRbzSHcEVET5WkNYVQbDaQtxHj7tZReiKyNz1nofCbPpHqRT6oiAKtUmBkD6bYX7sgfFiW16kGz3fg",
  "key9": "2gZWe3EsTrzmNJL2Vf5uUCc6nMDxctZM9yjsjsL9Wfr6vVAvGGTT5SBpcwQH5KTNS92J87sJQdTRAxiLxXzAh8t4",
  "key10": "2sCVPDGDQS8uwnAN6YksnnDfU83Q4DE3kKwbnwgcYTWLck5JMUQ3Fr14v5qs8N9zsNftLCgVgMvTGP7bkJaa8ZaM",
  "key11": "46TzSxtdQnL8Ty5bqMLs7VdfMtNLhd6QyRPBFgv8LVbByWkwRBp4731Y3144RvnwabD1denqCwvc8FW5psTkfH6b",
  "key12": "2Wen1DxqEYSK5FU4iyG89aMYHnH7smMrtypb3uLHyEGySNgeP1SexKXGoPQCH8GJBQUewH95ueKXW8dG8Ki3Q1ij",
  "key13": "61po8QeDwxgd6NHa7BZ3i9XK2NzLRbZRTt1Jj4Hse4j9n51xN8cApPivdeDHC6hh6aPLTAp46u3tu4wvCaWNSTS3",
  "key14": "5jWpUf5D7YeNwoFa9RhZncNmq6qhCc3YZVVDd6cusaTf5riniJDZ9DsQxR8yEAcLTehc7ZAp4oz5vWHXJAt3wUrz",
  "key15": "5f67gUiK2AccJePJVeJPFcqJYHq3UZAdtG6PjbrXi1VUPfZ7uALeBFhrhm1JkQQxkEiosmiSjm49GWNxbKXx2vnn",
  "key16": "4E2QCp7tN1kYUGuSJwgJ8CnjrbQpsRGZ3HM5TqimcpXCEZZXwcoyM6Lc7g6tve9rJufgYZsZbGJDAWnbqnrJwET7",
  "key17": "3UCZLjmCerHr22kAQb7vZsfoLX7pozCtZAxbVPZTBQuMbvwNshv2d3PkJCPBRbRomPfFxV58eAQb83TLCfA6fxB3",
  "key18": "35YABBAvprs8voyA377RtS9Z6zKHYhYKfwNJiNu2GZTZ8hJqyycr6SRTVF5oPgaZ3NU1BSvyzBFa4TdguwdhCdGK",
  "key19": "3seQ3j3CuZyR1J1wrAqDDotgcTeCfv825ujTwVV3h3KWt1Tzqx3eD8Bkk1pLHyy3yu8BR8nPhpFiPuxRvJ6XgdDM",
  "key20": "2E7FchoR9U8pvWJMeji2XArJCRi67raWhp7VaDggP8hCV2b2CVSjjhh6cG5YbQLhUprj3X6QPypHKcdQSmdXEBKj",
  "key21": "63M8hGtrnSdmBSkwkaVhZJNV3Fwh7WDDxZZP8TngNpAkkZKPzbdFxTM47XFtTPCZNGgsHrfBp3mm9doJ1CGAx9Eg",
  "key22": "5BW5fv5ZzHspKxWvAy6bv8AgGJym6WEFhJGCxjxiRHgfsgETnNdifDi8ezEBhcwAEL3GNyHRbjHybbT8RAKJfQ4z",
  "key23": "3CWtEPxowatFVty3M7E8RknuY5MTsvyEkuSPbMSXgUBS6dhjf7pMo6dWuB9JT4puLU6pcUGFecoLkDBZPc1RfMMn",
  "key24": "pkYFg2nAdSnskBqx4vCZAVg4p66YUffiMDCSh3VzjDwLkSxUW6rSWW34vshCJZrKGMTvXvtMwxHC9K1m2M3LZon",
  "key25": "3Z1Q4rq6KRxmqTQcJ24LDvajQyJaS2BdKnsVDwQvNGu5wZfxerqRnVjedXxup8SdeRwNknSBgL5c5xpbRsVFC3RC",
  "key26": "4ZLaHnoctkajinEafxyPbTXSu3Ekrs2ignCyG6Y8Dnu9LMTTg4qUxByp45fh2qZB7VWqEu1CLV4bsPLA8y8cMahW",
  "key27": "3pcWwPZby9h8VZrQmRLESkwrpRRTbBgzhwU88YEcxhWFwXXDK66iAHqojuMVPz4kerkdG2oaRtJGYXSTH67ffGeW",
  "key28": "3pb5J72LRnR5mVA6Qr1jSAabN4xhTNZV5UVqmYH3NqZgm3FHT5mig8j3hj7goANXgWF7R4afMVrv7AK7xSSLguVM",
  "key29": "5SfyYWRu3XpzxxTL6abmadyQYnvNSRsEMuHJFnY8jFkCfj4J37CcFUyKDsBkNtHN7F48VnZntnhcftNCjzJTNbfo",
  "key30": "3eZX868ND2GfXeDMivwffSLxSxW3phJ82D5Vv5YV8sm5zehHwLxUTPgMoBpR5s3niJnLTqR88o63Y4F9dv6zJazY",
  "key31": "otumyiK9QZB7zvHwNTv5ZsFCYf9vq5e8BFojQfzjuJgn8X26N3QxvKWvV7sHrt8H2Kq33zTwCfZ8T4mQHqqEeoK",
  "key32": "5dsp9APVuGwZFbJyrzcawB8X2zTKMcst6MVXR1p9FsupQT5hdBsn8xXdaZygXcTVeEMNDHxBFEZWxeiNeoNQGunW",
  "key33": "4XgVur9FiMSzfRXPbrYWH3pSARpC3d7CMEL6EMXLijnHZomqqpfbjcDhaJVF9JEdX1aL5Lvi2qWFN3acRoytVBim",
  "key34": "3qt1Zvw1mYQWEpeX2eztAkWrk8ayVTCy5B9RviuCcDC3gTy5YLmDphLLHHGj3NwKE3ciTJy9woeHAYFijCJQFCrX",
  "key35": "5YtmMCJPPkCa7mgqizd2626wvMGMnuiHGFgpUmwypfUp7XFhi74mA21zo6vHcEgPNx9giq7W2hs7sfhri6A62U5v",
  "key36": "28paktRuzi2bPMMk76EMMZRgxmWRtPAx7gzMwSWh39fPF518kGiiN4ivEkqC6ThsXvvu32dJA1juNVRKm8WWppYa",
  "key37": "2axfbTxqMMDeCtAX7x7vUFoA6w9X4tzeiMyzrRKBJHWbZEcR8J1GFnVKMdSPNfh6YDnvuwWtFz3RNR63yxrBT26T",
  "key38": "5oxaQ1v4J8ipZRr3nxs86G17hMx9wo8hWmPqTc9J9EyfJjnxJuvERQG5oYBNuK1HV56ajdUJY7g2Qy5qh8uyHED",
  "key39": "4ZXkvbZsUWg4zMEbdTbEcR8rxcbny7LDQevEpkWyhdvWkGrTHrMtbt8aThmZQHaySE5NKxuiETM2TQYNZKckTF7Q",
  "key40": "4ZvuZyZKwHkM7utBaC2rKvk1AGhq4jzUpdHwnkqAjXNtv3RDqc3h3ucq2TDuU3usFQXMSgW1t2EbMtdfDZv6VDzb",
  "key41": "29TvuiG5wN6XTGa65mjDUWxZ91EJ4MgX8JDp9jpSbrqvRTjEnpSUgsDmJYB3eJ2zvseFiKsZNZvLEhm5UC9jvowM",
  "key42": "8YtL7UqQksrz8uARivEpmcvRBQPXewpVJArpBe3RF9iwgNgQffiGZaKqeN3iMvo84ahPGVGeQcRwNRucDYsHSfo",
  "key43": "63ZVXwoJwRY2dacGb8V43icZCAKscUt4Sqh7DKWj8Mr529Y2Cj64QdE9G6e6xNSDz7L2QTKGrtBSopvFkNahXsde",
  "key44": "MaKjaKK95cmC4Z5wBqk4zHTcMeinBkBrSokpR1TzbJGPtuiHNuLWyH4FHjDjRd9RVztxtzJjx3YtodnuLkq217z",
  "key45": "29mNrubhdjmd2GC4skByYZxFPXCxtJtM5qX1H8hRcCKixtUioa5SDuqMhACiKe8zwNpJsTwrLYnCHr7ZaSyxyc55"
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
