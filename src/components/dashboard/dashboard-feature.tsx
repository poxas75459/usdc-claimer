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
    "3EpsvJG6PG7GkL54y7NbvakaiA77oVF4xbFHSFyYo2nQogWLDVPDz8qRHTdV2fnNbLVKUSZgHHEfL2BGMmSkzkD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yjnTJWqCRp2JWiG9Ytq1WjKooAU3uFufdYMBjYpD146ZQWu5jvaPFLBXmiQHq3yZSBXrPWBgiFmDCnZQJJGuVBV",
  "key1": "5edTkN6kUm8Jk4MxjVaKGwx68vz3mKNjWcPnGqVsKjxpyY1cuviSucjKBB42RgYjLAmoxVLY2rKgSnBfv9KEFFqQ",
  "key2": "5YkZGvhbSSfGx6VgkCvKpZ7CQbUsfEKvWtsWWspG2c8gaDfjSPVGnkkqBSp3xhED25Gp1feL1F8dfpf84HNJE3JU",
  "key3": "jPaLNsYc9e4Y4JBTqFB9qqZWmLdQss4B9hPqk4ubpAsobsTzaLR97tKj4iBZiL7bRbgjTuRq76DRMogLrW9sm1t",
  "key4": "3KsiygptLd6eznTH67E6WgguKp7VX6vHCKBAAQn3ZnisYrcXmcTHRTEZzdS3ybrZEYEGTfN54mLrn4UvbnbttFzL",
  "key5": "pd1QCaLnpmCeDttY4RCjcZgpBfGsYrs9tok2Qgf47bozoayoFWTYUsftdYq1jmVfRnjNAUWHVdNaTUmQCiQ38Mt",
  "key6": "2WHom5jyTYaPMbHdXBJokbyLYUJBnM2RcJiGP5bNxzdfGyuNWRbEr77oK6F31oe6RqJnngv2WteCB2pmBjvwNNgv",
  "key7": "42decsgXZc1i44tnUFMgMhUy5LKziLqgrTYwCNZDo6qM6Q2TirYXEB79XhScboqZbjpGZgrUYoFJcXU9TmhFg53t",
  "key8": "3rA4S6zbSo6Vdq8dEbTarcVsuri2D2CqrHnXYBYfiM96826c3dLKoy2Veud2ARdPTR8625gtvc3fJ5D4KG4DNxJJ",
  "key9": "3ha8uyRSgwZVLtYDFbsCgceSPfgT2TgVQryywGBuCcDJ5p3G14pKN9Sti5ERR7CpAAdiEj6NKf1f4hVceQLT88P7",
  "key10": "2bEyAHbgYuHnPpdu788DZpn63L7DRRV9aefY9fsounwCP8MXrg8RNiKGXqp8b3t83sKmWM7yEtzzc5JYY5MUrDyH",
  "key11": "2DJ55UjU87H38giVbmEc5XU9VLPMdu1w9xBzqNtetQJcnevop6kX8jPtcAwAgQtZBGrnXT6GkVpR8sDQsYu1as3u",
  "key12": "5cCnHdjNRbmyc8WymnZmzL6bKVxaQHhDAXDhyYeTEaaUQH3LGeDLHdMaKC36H7KFidKQMryySMdoVf8vNFtTwjVt",
  "key13": "xcz8SUs1z3HxPskp6fccyV9cGDoDdh7b9NRPUfdN2hZfcReTqsiJnUfs4ky5gscAdrunKrau6yi5BUW4mz7bzXk",
  "key14": "45fkRsX1aQ7KvVsvMZEQzfjoamckMvb6BujiN9W8zbtnRksBdW2BJhExDLPhPshK2oBg3yAaUYW66KgzrAWgwypd",
  "key15": "3zpYXz7mHuh7f6yPg7aAmNNZYRBFPUDPmu3ARhUEDGMfKLLeMBp8abcbMceAxpA3DF3BWUg6zBCdjiQzFCdKpdi7",
  "key16": "2oiAk2DQgD4ehnTakpGoCShx1qmASypQBrFs8qELYt55MtX6jgu7LpjrSzR2gWukfcZxvTGkr4HpECWZ8nXBwGed",
  "key17": "4givADUY4AZQ4fRKJgJTGQBSbhasfv1y53cHeHmP9LdR8uZu6eAhgvFakKiAFVgBhqD6DtcmeXNGq8MRUyQKGxjN",
  "key18": "GSRCapwVLBPJF3fYsaNfJDJ3JNXz4EbZdXJSbaKjZqUTrXWvJBP26koykSCtSTtq3TNA71KbvkHW8tHDNnCGy2u",
  "key19": "jvixEeNHLR6Z23TkUXciDWiPHLWVuGbWg2Q5KwLtT3As1YkYEQKxAfE1YUgHHkouU4mwzU6QL2WR1yLE3kMiBB8",
  "key20": "4dKm1YYYZTnV3vZroQ8wGhLz3WrckSyBpxicpsChPGSKPQRyUw85PfsmBvEgzJY5qW2ZEBrsRxS7GUpCP3BweejR",
  "key21": "2damubhSEAsKr5pgUQ5nT2bmWTx1mMnSFjm5Ztq9c5qNKMWW7eTry1cawZVE86qdqjak6JnTVo2uUwKsCDg83f77",
  "key22": "4ra2YjbNyUC96wXARLNP2tdB9D5nyAwtsuBB4U1uXXRZNJGa7UUds1Ja1Xz5M4qvohDENaEVVXd4mGpwbFhXRR31",
  "key23": "3CBk1eBiN6UTa3XbpJokG7sciEsDJyuuQnDsqaDxRLLjHNSqeKrgAet2MR9um7f1pMhsfSxgJg4cujj8E7RUDWSi",
  "key24": "525wTGWFJP4jukJVjod1peJG5uR7hhnhD56ByYxjci2zTtpxvgqcdeKPmzrKxatwGELNqr45jXHs65qmDDsTMdsd",
  "key25": "3TfTb6i7u7L6inP7itmCdnN9PQbF8HCAH71WGVyaYf5K9HDWBXc7fJgu6sPPQpB4vRScwUSi6uL7QHM5W9XfeGj7",
  "key26": "GxU6ybCwCEX82xsdkjL8eLkyMjHqmn9Gn8atuW7Lu3H9bJgZZf8QDY7GiG86HJCHzzdfjyq9mGvQQD3gMMCC3sA",
  "key27": "4g86dt7pjg6WZAxXnjLmsxjJqCc5434Fb1oKG8NtQZMTs6mGaa5KEWBGHbT5XKcQUjQ3Xf3mSiWt3JProzNCiivb",
  "key28": "3HkmwmJ4zf1oudkkNNNkbBfmEsG9pCMK4e7b1zgkXLumYKsusWCW73gwCNCMfRKuv1zHrguefU7HUgUM3B9w6Ao5",
  "key29": "3WwP8dHzpGnndbceqoiFwKZuhViD138HUGHdUeQjMUr3tasczeGqFLWMDYtev4FY26RK9B5qXxBY6A1NezK6E7nH",
  "key30": "LvZ3wfuey6vviJPss8t1pJdQDgTJBzUkQTYFbp8jhkMCT5wBZ3efRLzkP5JpmRMK5mpanpUSPVyZKGyWaM4BCZY",
  "key31": "4jGXFp7qeseLCZkK2rM9FeJSQ8tHX7KVpqDmHkk4bgS4T7NettbogsVbTTnaaqPRE1VuUy8jPDiUyqXLrZamEAvT",
  "key32": "3og6kPVPvuM9WewcPruo9fnpcreurP1F3VGhQ7Dh1vANeXrXh1gmMHLKQo8y4fHtVv6hTEqNzy2CCHkMYJqC5mgC",
  "key33": "bsUuQbe3iDgBNTArXequcyvugjo1fdvBpmsMtfNyXx3xhRe9tJCy1m5jkckzUz7PXKwqecCSQybrNH2xuJtW538",
  "key34": "kuAxhhNYPtzes7TRgqPArYW86p9tTjj5v88eEzEhcYHSmrnvoQtAwLcffc1ABVmespp5d5ACmFPnA28ghwqMYKT",
  "key35": "3qPcGFkKACcSSek3EM9iY3Hw6hg3qswtjuhmzdpfZszFgpZW8Dituc8oBMKTiFbjDgTL2ABMTmioSbDfjv4Wqukp",
  "key36": "39AyBEyc1L1j3kxhkb98pfNUsYJSeAQvYw5Vqg8xtfjX6BoPoNuvsV6yahBksE9ov1C1MU85ygzTGhdw3QPoNYUV",
  "key37": "1pvfQQMHGCvFvNvz5EtXuFt51zMmvrEoUNtFoK4BagPEvfezXgGdFd83snN4pznCDHHJ7TtmQN1fMApV2ocCUik",
  "key38": "VtAUEAYJDoGJx39ifaesRoP3oPqXzXt1xxKx6tTaDvG4fbFtYGUHjZjmVVZwyJE7zxVqbqb6SHVAgyzzZXpm9Rn"
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
