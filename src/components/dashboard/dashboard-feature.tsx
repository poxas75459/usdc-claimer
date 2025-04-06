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
    "26Hc5pL4qt16VLrCwzHS7MFupZbFizxTdkb9HNAMj4fPswcepSwqMWHUPXAkXpavND6PVWwYzdGaQorYadDEYKfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PCPxjHeWjSRdpWMNqx7EnRwxzpcK4puWgsCzF3w43EdbKzNwyNew5ZYrjgUwCV6vYdc6QXUQ6Sm4rcEmRAnNpaV",
  "key1": "5UtnPsnMeRfv65iTEkENoa9m8tvpCrBkhwvpANrPLHtyA2KSUzX4jrNmzuVVJFPMctGfwLEbNyFBH7ox7FnJEhga",
  "key2": "5MFSGkasqVNESqGtJaDRRoJrYo9qcxHo8kmxYTyASAXWGcEkjheypDAqLCfHBwUxmztLBoWewXEyg1FmCx6k22to",
  "key3": "32Z8t4ZyJzpZ4jyqJ3J5F3rZvX79geJsYdPgxPTzeAUH2PB9NKH1AHLwATTxnS7TTTZec4c4yZRgTXDQZjvPRndw",
  "key4": "gxf22zqnYBQZB8BXWmbJcy1urTMorikYJfBgRTy36unp41dt1mcq8tiRBZqUqGwJR3VA9s1njYriaU3kCJb6hzq",
  "key5": "2c2xmqY7ixv41HVf15j2LejbANEB95cxn8LQZikd25eHPvWsNrEpv29cDz5dbpCxVgvFaKym8mGamorQdJwrWr7j",
  "key6": "3H48uj3GK5LcpayeV9NyfH4YyPZ8Edx6ydnCW3DYwR7SR9mVpFk7beGXZ223o4ywBHZKaM6bDdjHAHdt1r3vaR71",
  "key7": "6iiKvkbPCQiv8wf9y9qAvqdcQeHPC1nZV1V6exsVvqHAqsmm3Hgenh8WKnqvJZdhgpqUuL5WQvL4mvhHcFpayc7",
  "key8": "2soe9hHWqN3HfjoDEXzWZfhboMCpXrYjdvcCUTek35uAG4jC2c9rmD2qF4M5YaQNXfzEmHAEMi41w9YE7x59aDKi",
  "key9": "58eHjfkdiDNsRZLJs5oAzfQAtnyKcBzjpSMEoPjoVAMn4idLX6ecY5acQemRYtebhpcJbjvrCqXUQAcRf4BV2XES",
  "key10": "48zXoEU8CvqkrdNMVg4xDQRHR832ERzrah1XHsPJEWHCgLdebpDJGLnkGkp9jHrmn9PmMejYEY9GcrJgTE6qBE3g",
  "key11": "4mvSgtKqGgVUGBGNurevirXZM3qhAuZHkkmDfUX7ytvXQBk9FUAwf3B3RBf8XwqVFUUG8qxFQddAULWkX8kZg1Qb",
  "key12": "3JxNmHhPkiMhmZLgooGof3QN5DZR8dqHt1WD7P9BtDFjUnY8wQwe4vWL8i11u2w8XzMhoXJN5Z7tkSdt9h5wcoaj",
  "key13": "A187Bbmv9UsxXVKz2QATKUxfLxGEcHYo1BkYE63MneEov4zo3Wxmj1iwWpxYFCu3uFNfHozzCZqSTeMqnzha1yA",
  "key14": "BZEXSx294UUE3fni3DAYEGrmSQNo8zEBdT6t4WXzcqQhXTwCfpXx4GdAX462fTpYEAWJKzSjW7PfpSC5XNxjnSc",
  "key15": "5CayHvuBgQAscTUrGM2HD3AC5j8WEtBGjfxGgAkZd6qCjtuMvungZ7cfcCSksSYNPWjiCP6eohE8D48WvAKEHQJm",
  "key16": "4aEWNaGFKnruHyXRfGLcJA9HZDFrFzuHhMtkYrrwxPYWyEbcJ5bhWDxvSauPq1v7wsuaBUZrYZjLyzahnSFo5WZq",
  "key17": "4YC6np2JR7UBPRc966bPZbpkoTdFQqLT7pKF5RifXVaZwtcxs3Ub14nosC9iYpTfaVqPEdtXoP2NcKXKq2uErkG4",
  "key18": "2kx4wQhivtEJ1QPK5brHn5jzGJJw3NrTc3kJ8GRre4Qnt1FncCGE4xikNaswNNoNwktwtw8s4ocXdatWHbyqSe89",
  "key19": "2m8ZYaCcmCSsdE29Z1bPRWV64q3apV2ar2mVkYYXiRVtb4b4YNukjPtM4FGnNcgPMqXkVgrECpaaJYyw6fj7AFNT",
  "key20": "29NudGx7NWm1c6cdLspHrMvfvya6QYkpQiZ5DprjXufTHoCeUVEnUH5BuvUP3eUBdXK7gLAmZbttMEWvBzZDPPMf",
  "key21": "5C4zNPdaehcd5sxhFW3NuvWugDE6sPRdGejnZT1h6NdtbYGhTBPwt8NGG3NJ3majiDFXD3FVQQ6Zn9MCpCSiraUh",
  "key22": "XQJkTe7nxmpWKgMu2erfqYpidERYksMPRWd6WdkbRV8hYpYaKiyGswNbzZw8DjYC2BSAZFKweJsuxZEMatVD1Vs",
  "key23": "4nmimfw1NRgtLkuc6jg8P8NaDrM91pNvyQZrZreti2KJQ7GvTMKA6BzsSoVuoy988SYmkR4Ma7TduKptBpQu9pBB",
  "key24": "2H8wGRRtVacvUrRMSQAA2d7CNKfc4dnPzNpcjnCyvRqMwY75hHCZHa49SdgiEt8thVovPbhHuvAVZgxm2rt28GpL",
  "key25": "47RLGhpMJGsYfwXdxqJR9WNzJaHKv3rG9bkvLtKjFF1YCF5agjR6aA8ATHgfswTaG8VTZwrZbJuA3zSK3SAEWwuB",
  "key26": "3s3TUEHmh9JMYz2qpxmnYHvH2Yqx5oftggrJXapcdUbrsoBSyF4nn1DNknTysMAYoUhcTiUC19wgNMiuh6qkdZzE",
  "key27": "S97B7mDAMik1TQ4yYp3MCDZvrYBCZx4LtsoofSPDQXHX8edfawxvzU9yAiEHEX1JGpswS7fq58wp8RhWVmJpCky",
  "key28": "4ndazSuLQDz7psY2MkN2GA9LuUsMC8aU35yCJyRBkBw8UXZ91x1gfcLDUHdKVT6pTLrwbbPaPHHjxj93GxcW7LYb",
  "key29": "64RZmUQFVuvxCubtxSZPLgpPk8xASGroTuQ34swtFUqYsCLkfRgyAb6g358cwQUdc2XRc3fvCcdH6KEH6N6zL5pn",
  "key30": "5okhLQ35CNdG7AoXJ4JYx8bsGMcGtmVMrVprj2wqfMSWeCY9FimBBRKPLnvkBkD887C9gLSvdzQmN228Zd4Ryms7",
  "key31": "365HcRA8vbvYkqsLjVEXsrDumga7pZWsgDe2ugQFa5up78BNUab2J9nt4D3AYBF3nckmxqAYqBpetq1uddZcDrRG",
  "key32": "bDZVAjA5QUUAHXk3AGaMbDwUAt9voyiGWU13Skg646qdrswaKixXj8G8j8L3BvfevF3WYe8BD5wwCGfvkRQ8G6q",
  "key33": "3WojWPLDcQKw85o8Ux2THFrj8meQ49wEJXeHYaVYNZ2GoNcjZEBXLysMQNFQ2PpqNz6NTgk3YKNMDm6KUW2movDj",
  "key34": "hX7id3DSBSXgaUmGoxH1PLGRftCoKwdL3Gfm6F1z33ZwyEe12yYQS6YZQNEjdbySQ6fyfvCgjfXRMekf2YGkhVi",
  "key35": "315LJn91u6kxgN8EsP17966tY9nAs7WaZTR9ndd67UsL5GX4ixCy4DQXYN5uwb8bVEm24wxsYLBTx8dRYKkELTm2",
  "key36": "3HPpUTMbmGKmsNp1tsA1Hd9KR33HWyBMbRKjfXwFtAdd8nDtQcY1N6QpWWQS2sQicUcT2TvTozi7RUJmxNzLoyh7",
  "key37": "2VHFNWXG1UN6AgKZQ4rCjsM6hZYxEQJRazHm6TkVLH9gfhUT6jAYA8Ueg4WQgXpKsdkoRfHSc4Xbg3o9xaVXqfWh",
  "key38": "uArfGsZ3q5BmMgjEpLAj1dad9JywzWyuTTqx1HgoqvbmUN6zDvPXf84ManV1mFWUuCv4dPYy78KHVRuNxPxKX4i",
  "key39": "4KBCMXA1GvFhaSgL2TL9MP5AmBktcvbcGKo2LsrZZ2F49AatPKmGeuM3fGRsezGMbjim1bvZQmojVoSEm6pyzhPx"
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
