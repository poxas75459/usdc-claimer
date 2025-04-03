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
    "z5PPRaX5WT8yWb4FQCBY3mpo6J6fetXydrKZRKxWf6pXx8Fg24Pc4arNVNr7y2Tww6gfxvNBHfV2akEeZFtyWbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qQ86W1pWFqxDs3q9Gf5t1aQcLREtuxD2PkT6Wj9WRQQou1QiaTy8mqi27Ckk1TrBpYDznDfPEbFuFxf1GMgsWZH",
  "key1": "397k2VHzFCKSNY3ak3JsyKeAyLcxdVAFRgzSEZjfvJPzHg4Y5bHgqojvY4KqbwZG6kHtKnFq4vnyaBmJnw3s44i9",
  "key2": "3rzrYCrt8H1NkkwQnFedmhWzCVLPe5LFqhH4DSuXs2Jf5iWiqokhzVUQhDVgBTu8ZpoRaWrx5YrLSMWTWzrJkuvP",
  "key3": "3SjwofUm59fUwTvrfAJfPyDKFQLgB8mxd33ZUep5nkg6rgMg7H5ogXqcJ3upAEU8sfWCCNz9ShuHyKDQD5PWS4MR",
  "key4": "472qUpdhJ6vSyyUFB3FsxkR2oznWAn7vivA6rcB6Yy5pXWHu7cDM5vgPC5UTYs8z4ApnHn1Yes3BDsZUeNKTkUZD",
  "key5": "1YYMEK2a1P7Qb7hDSTXhi6yXb6oGoqFenZoWfyvipuT55ex2VocntugExn5znM5mZcMfnew3zT8GaYSMJ2XvW8B",
  "key6": "5z625LGwN8Xm55ZRcMn5ojMfcEgSoS2vmYV5VjVe8ZnR8Sr3thmE9j5aGmLTifmDWrusHQADiH3ZytgVGrsXczex",
  "key7": "4KvuyZMhxv5RfQKvV1kvGXneoowwFZKZyc5d8X6icnW7BEiNkBkWJapgmfweLxpBJ3JGXxgp2i3XcsCgij5cAzPv",
  "key8": "5EzuRQfQkcaKNWZmP5GHKZBGggDqe1aZCtVoFnJ3yKWB4y4YTEvzdHfRej6XULoKqBdeefVxFGB3gwXV3RNdV3EH",
  "key9": "jt5eeEHchuNjqQCRJRc3Q8PnwQo1yuutGAnNmfZi3Q44RgHH5KiJap1f4Tpf58rQyva4K5LBGvyxeB57jUebodW",
  "key10": "2ZV86c3S2q9Sqr8grisdb8UMK23xB9u6QB7wWsj6z3uVDAouyLg8WnztMkXANtJkDFnBQSHDK2Pv4H6vYSQ7tXUG",
  "key11": "5rzatQ98zJ3qbZYi5PnRHznMMjevYmbUGhUBSbPfNyzDkikanCeWnGX7ZnXeJ3U3Y3gM4Q2SKCtzL9zjVJnuWC1r",
  "key12": "3FxcSJ8mcRz7h1KXdtREQ3jzNDYaACaJCyxasmMrCZ72KsmF9qrz16X3BUEV8EkuPYbJ6CthcLFSQriDSq9rDzvi",
  "key13": "5DRo7dUu5QkQ3jWd9Eamkrhw1ZUDQkHQF2vhbF6QuviAKrJjAuyXxCP6jNP9zuAtpgsLDWyLvf3MN7sQrHKAEpot",
  "key14": "2oW4HhLjccY4ZX2sm6U6aabw9fs91m8raMMMChJdQX9XfC77Qf8SVPjCjtYeXPVzP1XFchc2GYDjn5CSmZabx727",
  "key15": "y6j6QVZtVjBqBMqS8V3jo56E3okEBRCnDk9uS5Uko3emTbgtZ5GBCPJuYbcYemVqz3m9LPwLKPXLGq5HE1vHEWc",
  "key16": "3Ven9eTHpENMwvMkMyK1SJzjdRZLULDxn2qpR8ZY4ffKsWMgRg3pX376cL8PDvb3TQWSaTaouErLuv6izPNNpLkC",
  "key17": "45SLs2yr3LdUwkUS2jgUzfKMSZyb5c94wRtCPo1APHpj2qvhLUDHH4hkkQu6VJZ1eqVF6o3bh8wtFtRSNDTwQ1g7",
  "key18": "4by7h3rs6dioVhVq1XDHr4w2Yy3meojzpJjoQMWr4fCsY85oRsZsxLfMR8o52vpojWYK6MCUk6awG5BwAPc48KQW",
  "key19": "4QQ2kBaHYjaijcJSEp2cP6dmX1acz47F3dDM9cwJBhMJKVLG5tuPVkcJ9avGTgmPC9X5xgFfSroUiEfoA8xrbKec",
  "key20": "agJa6NZmbuiryTHTEmG235jwPBEjuAgKyUhnzVVWA9mjNe81JYYX2BfbrPCw8EGheNpscn15pJ19wT9PBru5RjN",
  "key21": "2tHdLU3zM4ZUEQrhwoZg1F7zvFfk6jEMmC6ywhidVRzwqvCy4oAvj87uJWuUTztuyAjQNYZSJkhKiVN45WYzkEs6",
  "key22": "EZGGvdsrfAi5xTPCkk9YreTEAh7a1XCHLHtaEbWE3NjNJqdAD7cgkFJzwE7n4sTJL1rAdjX3aW9uNjF49HXcuFS",
  "key23": "4S9gp2mYiToBYHUJTHGVkgWwPEp4D5YyqCNxFD3vVCsSFM1n6aFufz9SuXxsnvEgxjBg6AvKvwX2X8XD3Bt8Bnu4",
  "key24": "GZrK7vMWKj99DiNNwR7rJ5rHBmbB1MsXwiHWC9rdpZoHyTm6WBRJWEQWLyD1iLaS1NvaqX5V6TCsqH4gWu3dPeH",
  "key25": "2FuNrnA7R3rdECcctTU7yB886aGs3TinphK49PPgkoNnk8EJ9vNHBicFg3XUifpjCW4NiCKeW1z1rBwVCZwYJDGv",
  "key26": "6rZYqKh6mQ5Rsd6dcZeSJjDeURXYqc76dd6WNsuK248Ug1AGmYrHek1WYmQUKRQKymUWULMWLo4pdKghxbwMdaY",
  "key27": "29Wa8V8rYv2vzU3hSygaxzAeMrdoJfdu27YT1JiEHmXNsWRu7eEFjSKxngffVDJU8TbiJ2hiSk4UCrxt9VrQbWm3",
  "key28": "55p8URFKPnfbk9337Cwg16C1gMwT414HhR5Zccik1RyRhU54YkqtR2qn4AiaWYJeMsUzPCb5PDGnUqN85LiBPbZz",
  "key29": "2ChjQMzc2CZwtpk65gVDAPunAKHfYs41gi6KYBk9PGjBew5rBCSPBFfPQRjaWuyRBpRw8Ln55VypZ6vWFGQzvSbh",
  "key30": "4gyD5dkKD49ftFr5VDqYwmqXfnwU5xmpoMV57VzpmmXQGbLLiguYm8Yp6SJJTd62ZFTmuz7QSu9dNPE1wFZ9D5X",
  "key31": "3QwZ9RK4kejgPSitfYr73aUJLeCfiBg5oAdjrLeuRo8rh8NVHwSiwXqumKwVAEc1kHfLo33Frx3TqcjPDRyDxzJ2",
  "key32": "22VXoEBnr7f6qqMqbXVyW2gpcyqCVr29DCJjQGJovdBSidodBfBrFkyACLVSpyiovzStmEVCRZpHVb18jJtYS1Ts",
  "key33": "5GZZJ1JAYNGNHtT1Lywgi8dtfxNRZao8ZN9LcCRJKJChVgB3pbtqbKF2yW4SQzaoWc4ftQj1ZEGX45xVjJF8utoe",
  "key34": "51NKyvT8dvhE6vUvxdfiC4uv1P3kHR7sgdmCa9spL3rpmRCUPGXqXDLzRoWdrnGGNLqyGAXgweASGMk33nWnHYMZ",
  "key35": "679EvYEoNQ6CK2DvxVhPa6DpwmWJkLu2h883d5iFZ7sB7VA8sakj3SMpws97bsQA6DyHDtCzByuuUrGMDSgmDRcR",
  "key36": "dpM4VwSo9UcwqF1yBXwKwKXKY5Nwpw7FbRks1D7E2ju4bVKaicJx87N3YgyaXYhzsUPRhFxzjR7wAvTwxXfCgkx",
  "key37": "59C6XpA8AZ8NkY8qhdS7mjX3jvQdyJTMkacA3kjWmKZE6f3W8wAdYotTXicSJegppvMCXyBxhVk47vNzCDWjuXrg",
  "key38": "9BGepFKKVXfmksZ9MD8BAnqxrAQcpwjWxG6PhyiW4MwKYpcLcpkJtKUCwdATtusQMYvvygyjyKBeyf1vNdEfYXu"
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
