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
    "4xwKs77KpKMr7URokkaWitkpjAbzdXQn1PqUfeEohQvMxj3ebjvSGF39jscmViNH5dHpVbBQHV4UWZk3xg1XfA1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uEuQ8NmmoKRBu5Km7xkJicfSRrgFHYBp4vCL6P5LHAcNhpmcopjxXCpwB7WFyptcu5d2sw4i4HewuUht2kycrfq",
  "key1": "qcWG6i8X3zmiSQug74bfcNk4s8w5W2UKJuxCVChgaaPAmyFc9cprwd3oRLhoNtHoaY7C3bg6ezxgeWVdkSfVh23",
  "key2": "2hrMrP9TPmDHkj1FZLmXB4vC3Rz38UKgGzj6big7of88xincZHoNE6X2cpdK5zWF9PfidTSKDNVySuPYZpSyz5qx",
  "key3": "5wu4uoXcjRDRjAt5qvj9g6qij1479uwqsy5NH3dSq4gdhoz1u7achi3Bo99hM9gKauNoPnZKBGWVWQv5tzL3rqRj",
  "key4": "4cN4c6zTuLigvoAvVoKz452hNqqYU3UBNA3BjoJ834CnW393fA2w9rsFur78ZgsDe3CBEoWmEzDsmp3srQJGcyiM",
  "key5": "PBcJMyCssoukNM9oLK4nbYvZmtjUKArzG7L7PGo99MoYnPpDtfNbAx7wLojHex1GLGpw6CZNGr2cbz6vCQ36mdD",
  "key6": "3kUttdp7UuivKXRXAarauoAkvxAddeTq4ZBTxGewmXELF3nSHkeCApWSCBKuFzt4qtk44fVVTdXUjkvbJFAJgWsb",
  "key7": "5BuskQUUBTCg2UE7Zv3JvuHsSUVKznp7nNMXUGQNKCUMnn6kqe2sTVRcyeYEhG5a53hPDevRxzdMWgWGmpcWhVWU",
  "key8": "22jyNj1VHz6zoZR7sxyvsRowpMzJMpJAzjAgmHbTXseQDrf7ksmDTddmr9Qyqcb4j9NSHhdVomGB4PyBKikQZ9BS",
  "key9": "43Rd4YRz3xeohLez5B9Z64JKnbEJFcKLJparAghKawUnJJGhCximvaBPQcd5axzvkMnzR8rZQVpDzQz5Zwej5AjP",
  "key10": "EAkJ5VuDGyagdFTBm3XMJSdWu34prUnrdnkfC2DWVozaN7GDvpKeSZjAUsuPwsiQcEqbhAqXu554YikJvqiu2KK",
  "key11": "2gQn1kF6aY6odmYCMwMPZh1pSEXxcsTDFFhk4dn6zojynYbsgzJgsWKuC2qT7hjQedpWzJzyvjRRZS68e8cm7kWa",
  "key12": "aofRPSHE2nQvLujsPwp8f3pZXEvhLfyaN76t1hWbsPvqLZbxVF5JeHAcupiEBV13tDeawjHh6aKiaxUpKHBifP5",
  "key13": "32GfsyzdHBGwr5JJdL1DAhuPqsmaVqxPjjA7Ljxr828y61bsUwn3aieVb75Rz966AX66qFRqJzActTRHRxzrW2QH",
  "key14": "2oRTZWpVcL5cyxQjCeLTxxcbxPug3P2eihMgzWpJ5dLZRoGsqpsjem3kBwAczScAa1x7g69qgFEAvUWkoQyVxZmP",
  "key15": "31Cdd1jZx3Bzk8qq669nqCmZUSKV7C9CwdS5htRFBTJ7KhvUYedhujt1GqU1DTBCCQLAPHXWeU1metnJrzSiCZzQ",
  "key16": "vpkfDf5GmYNK8efWrpxjEZpKD1LFx38gadg2JJ61WP1v1vScLs84z7tXD4objgBoVWuJXU74CGHYYtK1EiK274q",
  "key17": "Ehg89UugKRoSCpVVsJzzwzwiHDvwxowLuvRkg3hWCMuTaQbMN78Q3aHzJWCFEpmdVpinVST4JiLy7RBjskYSoWr",
  "key18": "qN5zaNt25ZUmzPmGeijMSbPZ6NRWdx9aoKje79weZWBaqaPMb4chpq8BQ81aFv2f4bScqsdxFSiXzFw4mtJqoGb",
  "key19": "3R3FNAAkMgBJ7AG3F3giB9hqd5usJ6rMY7TEFGpP8yDk5ZySzcrJ6pLaD8AQALCwQKp8He7JSdZ3MUGWC4NuTbej",
  "key20": "5Xvo1n5bETDGZKay6eS5BT4ms21zeZzSXpjFiGVSU5MRYrRN4q4ZLzk1vZVe9HyRoPQbpecvmRX3DBoKm3KnHApe",
  "key21": "Av2bqNSnjVR16nvyiZC1yTpHUmXFNrDL9V8DYbzctucTedhEskLePuaNWs2hMuM4xNru2BiWziwhseNiNsb3pgn",
  "key22": "2bQH8ZHQnMqTxjBeAxxXbVKdqCk4P2fPcMBQbPL2Fd96z2gvqa3a3wPDAM5eMuihZ1Guh1qTXnzHhqWtzYHuUL9e",
  "key23": "2w2ZbRfUJWWTCNyvSaxJbFj7aWPrHoGfDbd2ek3s1gRfag1P2pFaKEswQ3GJT7P2TeBdty63mDQExWYDYBzodXkh",
  "key24": "24XMBMJvusmJuFispmLDTSwkSr3Z3PgHeKGB4GFKuXbrGFx9BBY1AKj2wic9b5Zf2YPApZPtKyKh8YGdqsCq5oKS",
  "key25": "2Goa4pR9H2cbP1YP1spnWHq41HDQH2rbJPi7ywgLZnZAKW4z2KKsz9QUrmtqHfBTMmmbkbinyWGnTorw6GRz6BNu",
  "key26": "3xqcV2wcodK9MyGH1pmSgT96jSBERcBqmecFG9Co7Y5BtqDb3MNoYesUmrcWGNbSiJnxamH9ZaQKVhAeBayzuAT",
  "key27": "2Hc5fYCYi5J3rzpVpDGpEQyGT79Ab5CuHSo9w9WXW5FnUxBMdyDAtiSsFqZXZVXRy84f9TFva8MDgdeaaKuaNAPH",
  "key28": "5FZeJn85EWbB3qmxYRchPeNefL9iUNQSiUGxBxAuJwZdhRBCtafeFd17aSg6eJgQA4JsQkr4LDmc3NS4W9bBpbTK",
  "key29": "2D7WQ2MDbr7a79rPXnTq44vJ1rVyJGZ19KWea1sAc2sYETj7pqn2MxYNuFwmDamDdEAW28pcSwwHrkfEYBU5Z1Pk",
  "key30": "2MpgqKzLyCMqq8oxGq3JzwQkXLvWp3jr2u2miC1C5hdWqxkVAk81Q9Qzbq6KEaFQLumxQpjaDAaatacaTAoQMZbh",
  "key31": "4yEAy1sr2CyCPxMBwvDzTjoFQJse6VwFVeLUkhsmtZu3PRxd2wzYGqxTjSJhwo5qb8BMQTtG6FbRe3gL9rDXeBsx",
  "key32": "23Cmu9waVrWmkHRJwRwoSWcKzQjrFnF4DiYnU58rTXfuoF42qvdTTeLLhzZ3ovBZqrhDZps7w8phPfycJgWgQtR3",
  "key33": "n3VkMMfnzuRhZgy64tjP1dXC4rw3H9DrNN4y2y1gKPkRyd6wNmWptzZFK5oC7dQ642zG32d8kCVicXQ4n85dgvi",
  "key34": "3ue1z5myoZBXK8LQALSEVXEDKJci17KstuuM5DnH9YXnWkb9a7PvrKw6qnmcDvbGbQyYAASeKU1A1DeWB4Yk5kjB",
  "key35": "5QzgTLC3RHi8CHkUHt8cZCJs2MuC9RfySgHUAtzy1yF1ZQjDgwQH8JUBx3VaT9e5QfcRRok5nAhu6Bt1RQgef8cS",
  "key36": "2356id3hqBsdZo9ZEPaBVbYBgsaK8C6Q8DAQ4n8NHZgJuuC8RWG8y1enHEyWRd41nJJzrry9vWWiJFpu8YpG142q",
  "key37": "2fEAo2tgzxEkJN4SR3yXi86FYBQfrTM3JeT2vWCPcdAacR9XaPBR9rL8NoHtvqA9f3uTbnbFfpVhK2VyN7JJproG",
  "key38": "r6EUgnnAM8LZvibqDXYknjuMCNgYEhvkhSxcBrDEdLZk5XeELWGHiMg2Q7nNak4z7GYvjfHe7fXqoEp6Vrq2MPz",
  "key39": "3u4ESAbDGGJjWU854YQYCPxGTrBevBDo8Q5CNTMDbSsnKynEoaNooBTatB99gZgX3zQp4XBfZLo2jgTCnadWkSPQ",
  "key40": "3rNBQLMcirG7L2aY5XDhSfxiXtDZbPcKeKGQEHKkJrrorxKDCci2UUjV4vfkzGzQT1K9NHwnXsxhLYuPGqV2CL7d",
  "key41": "3nhYEuQkXG6Hy8punDjfXtfLiqTb4V4zpwD1GTvX2nXvNcSPLtmgrQguQfp8TAW2dH1mAL18pJUWD3hb9w8X1KnL",
  "key42": "DCP8rDYG7rz3qWLqHCQTWzJeBNibqXCEEVoK7yUYPfNVAuE3WS9ekLbukVM5G1WbUGsgZUT3ktfBXuUiquzkDej",
  "key43": "2vfFzeFC25n5vVn1QthmBZ8dBrUamtWGaUbBAvaqEtNP8tvZtaGMZZp11dCRmJiaxD1fY9Fm6kPYn9QSdwkpPGju",
  "key44": "3ctvL23NjgecS8dxGVhpAnZwKW8NwQEtHy37ZfRURyt3vNFqXz4mJjZATR14xBeU3VzCb2tA46HU6k2fpw1dYsCh"
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
