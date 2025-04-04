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
    "2jJFPPHDjsHYBNyGdvsJ9fQaQHTAawuq9Rw4W5LCucG9EKvk25NbvmLTtvBAkF4oo6u6PXzbhQAfovo9Tv1kGEyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xQ62qWBFdQykLXdDyY5QUdYYDMQC2i5xjRoKSnZTRjRAF5hBP6ooeMVTSmGh1bh14LN2TcAQ5kWFrXcQf32diUz",
  "key1": "67aAAWgJ4WcmNwG7MxMPhytecSTWKnvLk2juJ9sxqYYEaVzimYamJwDgTR9BeieNyBTzx9zik3EYJVfuhFfrAZuM",
  "key2": "W5MEo6RwU8XoyGwsXRhyDPEYpRcM3vtYZVVzKs3pbD2vaLEDuvoTXnDm9sAZZruZzViwFES2iXJjd4ZTEN3aR3F",
  "key3": "5BhNwLHkoYAWZwV8SKW1eVDnVDw7N3GG3fysRpcVrj5jAvLSa1MQDnZCsVSEQCB3epPMe3urfHJwCFKdHZzwPUNA",
  "key4": "2DFMS85gQjJzzPDoSNfPLbnqMv34Sau9CJU9Thi5czfqjcxshYR4NSfZvpPUbma462gyaLXmrVg6HEGNYyyW9zov",
  "key5": "2RuAARr5boEzCm3noFyugroDvp6BiJaqfPDDD4cLsobkdko2L99Y2jkAUZbbjFGQCKNGnhVbGd3pVGMWte7JejqE",
  "key6": "Vfk1QMtjUWSMrpoSsM7SHN3KfcpnBTanKVETuYihNtf4Nnrx7BgmsHKCmyV98aDDWxgtC9yD3rU3D2PsejYT5iQ",
  "key7": "6eJZSKSLD2LEHonVbg4zA8Gi2dR727tdD6RbNGEv3ni9XwvDGXjJqeYDgLXakSCuG8EdJXqXY9TEJc1HAMemZaQ",
  "key8": "HMn6fwAPrH3x3DEHv7eSccurQoJgyKrQKjvn5rogte1obHkQu2ApA2BqhYcTv1GuRbEJmCvxyTUWfiRs1mECHBD",
  "key9": "rr8UzLR1KajAoWe36PaVExajSqNvc3CFrzYR4DtLqQccrY7nyTuYiGfyVWMrgV35EjDi9njYDTzi9yXhL9jBWeV",
  "key10": "3Xr6Hwx2GyvxbVf3rXMgUveDzPWmjSAseW3EumQrQxa28rtQdw8Lo3MXkCtHjEUUfcMQQfjek7JQ9Gob7dG7YxwY",
  "key11": "5o9a5FUA4q28P6h9R2t1kjW4Ti2oZRkQEtNTPP9RE5bTwYZ3M71XCVQx78q9PvBQPS65tm8vK92GacYtMtD4Nxr8",
  "key12": "4eKQ6Z11xroWEzcy4yjd7FwF2wFoH9wjhPWnv2eNK9ka3sGyjgvtqFHqnzULN3um7Y9af6v8P9mtcMuPnvWzCNUK",
  "key13": "3CErJCh1jMT6z18e4pUQdyuHhwyhwrJpGXJHGRcYaNWdbCG4yaP12rmTQwV82nzSdUG5uUVauLiZ9dCcBva2jm3y",
  "key14": "3qivMQaWe1e4Si9ci51qyiGqvcs4udgxJkDbHse6RHzJwJoGkA4GvtQuPyKKtqV2kapxzBYczyn6dvvqhGzDiKBK",
  "key15": "59ouCqriUerXkeyByUcLG4JrFMRv294ERhnPSTGPRJFa3yP4SN97eBMXQumapF4PVHp5xMUkXfcmaSeV1NdLfw7J",
  "key16": "3CauPeD6Q5JcFeGTXC8kbv9NLYgPMW4j8s21XSNq8H2wmw6EHk2zArXxJCBojHSABedu7dabXAsYbJTKePWQzdkQ",
  "key17": "2BVoqC32vC8DVSTkSWRc1AGj6N9eATVgUHjMHMFXpB5nxz4u9jQSyhPwAaonDofm1eXAiZng9CwQE6ufR6LVFeYM",
  "key18": "4q7bmDCQW1ZhwNU4AsSb4m3QdxJuWiXJ4ETCZCp6GRwKzw8PzznUPdiVovSheTDm9Qz3a2ruph5T3N2LpUsH6QEV",
  "key19": "2GypoSTX6uidTTZ8xhB6qZdqoZAjFSkBceXhJ6DNzg9bVeSEBP7e42EEVyNqsi41GE2tp8yUHk7zRS3z2DUXuY5j",
  "key20": "4bwVqtaxdncKsTHSuYHpursWPiCef1FfbnRLBR6ALpFeGx8ZswveTFdsCupT41MGu42mfSEouoap2gdD2wzdjrnY",
  "key21": "4o7mC1AqrhivQ6oMrLDw5uXRvWtBDMa1gyARm3EZj6Qa6JpWEt6SnjaPwQ6wjKuD6Bp8hGLr5YBwL4R4ZUiEKTR7",
  "key22": "4e23Lw8yuLzq8Pj7Nvd4aHEjv9ifr7YFF64HcjGfoVBhX4Pj5PKAjNRCXqxCSnbzvz314oMrDquwnZsS5LjXw43M",
  "key23": "4s5yNNCZhDKTUCZBdHdupCVCSkM2a8hVzTPwtut3zyTAhqG6qreLokKwgbE5M8B3BSbFHftcj8pt9SZncqNHdBxT",
  "key24": "aWKWk61Z7xpEXZ9guTwnJG8K1aVPzpqod7Mc6yAJcHH6SeqAbxVoHYEc1sLWqwktGVVqC4PfAUVnWWaipbqyJUB",
  "key25": "2fRibyMQRo4XmYmKS6UVqfGqwCLeWkZSpVjpgP2ubbGURyxqkpumYGP2fHvMRGRaZL6H4vMqRpneMeWUQR6s2Zhu",
  "key26": "4k4XQq2HZHkrQzBhKhjzu5Tm1Kou8PHUnohmk7KmpGjZzEA84fhWaFdeTxcacMqNKsrX4HKbWBCjs3nYSALhAgsh",
  "key27": "qs9zBNfwrCEdtUNppLCzHXUG9HS4xPkNRd9agKHaHgRczkS78qpfduWgGUSyTxPnsVVBuG7yMJ3eLNbr9oK3gfy",
  "key28": "3RhEEQr3DmmbMuHLJk5pqPez7GyxVvYB4J5d6SZqNPL3gxGKsQKatzn9bp74XiKLvHp9mdT8UrmBtmdQL8v2BbYb",
  "key29": "3ZHFgEoCPiH3wS9T3JyeKxQWwXQjP3rMKx5mwYjCEipH2KZYopGMXABsMuCCpePyGP8ezSm3jmTPSudm3Bdn4AGe",
  "key30": "3NKw1Ph5116ighbRnbcFgdvuHho4UqdWDKTUfCnK9Pt2rhjuzomsEtSLZbpheEq98F7Wyn6eeN1us1CE2SCxKnVu",
  "key31": "4oBpewCBXLhzPNrCehMP6MYzLeYUyGkf5tFt9F4M6QMVJkQibkJtpPx93tmeU2dquvfVVToHVvvykrZ5jKy9wGtQ",
  "key32": "28ZknMEahCkjV3nPULfrDmY1RFZhmHsWQhCfC3YZ8amTrcEh29fce8TJcpvX7aQVxqDYTWMu93sx3AeysFj2biHz",
  "key33": "CutN1pw2HR7TwEUstsoS1Ps47x69gVHE3CSZikW28WpCtZBqD8yEvZahgxL3HHriobe2izGywhh9dCRj5bCwnjh",
  "key34": "s6h6MXcFNf9zKmNebQX4jL3mVPd7VHEBSX3PBqa2RkM8uzY3aVUtyGVRnYMpHnvoQnanqZguE97meo6DAfPksBD",
  "key35": "3kXUyZeaKLAkw7AhusWjPcZHtU2KsVQFKpgBQYDwup1dH3ayATSjs4MqTkB8AUVi9nTrwVdVUnuG6aQofdCiYeYc",
  "key36": "2ioZMtzreBHV88tyNdmvqXLBpHpwEQ8mj2FrJbU5FfyyE1BFZjrRYjuwUCsWwvGtbQxhEX9D5QDdkkpiaeQps9N2",
  "key37": "5aPmrKw2uFTDqUWBpzApnHjaRXrNi1v2MeLkMuwreHhTGggsaTmnECY81ZFMeBXxr2QcWK517kKFhXvLqPh8VV5X",
  "key38": "2s9h4HYaZ79X8Y1MgvjWCrQ9bgcxDnth1MLNHiPJo2sDb849apPk9xXEfEYVe6AdYiYTAR7PDYrAnpKAP2yedkkJ",
  "key39": "2bLfSmXkSaNE7EoLeGebEXSZjsXFRvzp335tYftxFwE6rH4FTXqCRVjRq9zc5TCP21yU8snCRKLp7ehYRDQ21zF5"
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
