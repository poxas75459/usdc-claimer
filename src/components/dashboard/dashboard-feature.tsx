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
    "4XBrDUMCTjEFGGSEuQ1eXzzdoYhb9xqaP2FvTeqRYGxUUNXPZ6sbszkEGv2Z7DcXfjtxCzDqoiF9M2KusurLT3sY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dkhZnQWz9ZTTgYKzoZCJdTSoAXPrX5UYG1Bsu8MT1GmHaABsqh4qvgtEXMD2mbMhgC3Sb66Ym4fFYkSqF62WXuU",
  "key1": "3VbH68GiZRZYGRMsxi17LnPajByv6acpeBt9Kwz57hsftbCsvHnYFANBvPLR9kqMZwpx2kGc24EDWJrYfCv6TBmU",
  "key2": "42HY3j3bkxPKf7FMAUz4xixetfK4D4BpUssLooT9CHGSjGANDh22T9UkcZNuEySiMStxbLhd8tg1zaLqJMwumtuy",
  "key3": "3iXX28d4m8NyyoFYeDncXo8SpfWcJobhfGKFaqCSFCQi3tKWqPewv1S1sqXq6HfsCKN4JRKT8SsPVepgUMYVHaLG",
  "key4": "3x6MFUDXgF64TnpU1NRbwwEREmzBgXigPQxkh8TgTtRTkhrScVCdmtYC246eEiQ1TvhF1K7WdayiWnC2ivznzWon",
  "key5": "5MpX5wU3nYNNq5nEkbMjQa1n8sAY5D1NR41fre1Cohw76nw6hqLBRFbirf2KUcFB1UL3afYFu2LMr4uwSX2UC5Kx",
  "key6": "otKEUnxgeo9S32jdouwwV6J2zWKUqjJD6sLkHuL3JpFbd37fhv6nf6fcnsvFavdBMPM3kH3jwpShWb1KeHeEj9t",
  "key7": "5ev7gYMoMvsKKP8bHBtcw7uZRTmv8hRwgVxpnk3b7ixnRFmqmhdpeCqp5QupVdKD8edbBfJkzzQv6YjdeRYtzi6A",
  "key8": "zydwte3R6SgtTwXR4emPrbc4VZxBZipqXFBL6G4vsvbWw5iGjsr9BnXD7Q2VBrr1C37foEHEVzZy6vKoNFFpm1h",
  "key9": "4EQ41QUohkjWHd6QwbXwfjSEMGGfjBy8phNyoAcLjb1unhhPtQZEPcx3n1Rk3uZ6Dx2UN3tex8veNvKDH2fD2jGd",
  "key10": "2ByRmeWXxZnKivD5xjHfm8Ds8ATJu9Cb5eTLwkfPyBSsb21JAY3K4b2GMXsxJaiVKXZ8cEzrS2rE7aTdmkiSfuQR",
  "key11": "2xdM7tfd4f5WFx1WgZ2N8kGY8ZkHFx4HYyyYAqDSMCoJ81pvyEimoSfppXxCNjzD5cBzU4V5yvBTzqpQVdNUQYVV",
  "key12": "3UqsebjXd8Q6EJNHoPqRJQ2neY9BF5e7PrV5EtNoQpCAzWL2EfFeaL1FAs2WAEwC1YiuZAPQrJ4SGdkkrZoEiFLX",
  "key13": "Q8LbLyNTLcZcp85VWA1NP7KAGWPg1nbsd886H8oDyMWwJ9pzHcfjPZbEUBZuePFGAGhdK9ji4FbT8muhDLJ1PaQ",
  "key14": "ncp1UEmZP2TdgovcJBAZnK9iL1U6aMJgtXbx5yprZ4o5A9cQeFp3FHGPW55c8awWc9hfFUHxmhHSL4kfndpvM1D",
  "key15": "4PRkrZudSisoANb2MoFMxNpStBibS5FuurpBcRBNMAWwCEeL5gC8JRXJfhpZ1wLrbxWrButLpTzAtLKDekAE8u8a",
  "key16": "5qNMnL99DkYwoFy4Aua2sEkgef3Jms5Nb7MVxkT8BEKoswMxtjukUoUmQyFBTfKLSLCW27yMC2miNdySqjDdxJ9P",
  "key17": "4V3RddZYcNssYnxwqpP9Qcx3iq6zTPsjULrJFi68TLZBeQCWJYf5qgYpPGMJAbavdcrm16KrcYVQyoKuUe8mz3p5",
  "key18": "2MpQYh95rGbbhamak1dzKBCUatmqixXZ3uBSMgoh3fN4kbqSGvRpRfCEb8hmWggYqopvgYk9CwC5vNvxJc2JBegt",
  "key19": "3cRKbrza6i4jhE1bYQSuZ9PkxwvEtEKayNGSeGf6SifEfMD5rx3ABQagDcein5ibCCSmAS5Vtvkn7MQB7A4szAGj",
  "key20": "2or57V6sTBPtJHHRMWRWU6d88nmHUyRrWGHV2gXwvG5vp5E16imApWch1dCyQ6qHSgfqH7E1Fiqk6MWZRKooDg6U",
  "key21": "3nLMv1hZKL3Qrb6zp9FRNL1y5QVP7fp87crQHzSaL8cP1t62E8uE9ZUfs5k93ThqhY3HbUZPN3KfEQrMmsUKw26o",
  "key22": "38csNsSfRxiPBiwEzNatKAFaQA98EKk14D8By2hniSGyQ9bDzquEtvWYzJvsdnxzY6KFAQazc7S2La2g1SHadx5A",
  "key23": "4E9ySKxh3963BMQSM8mPBFCDdkKtQ8ahpdzTye7FMfEhVYb2hDkU7LTist2Gnt6DEWmqpsRKACUKf55HYkLdrSoi",
  "key24": "35uU6KDdaUUVHvasLNvFYoVUK3zqXyuow7z1ykYBbRFe3uxvwVuxzaoNnAKezkPtQgqoBe88JLX6N3baJjXd3A8Z",
  "key25": "5vXofdquJjUnpCmwQxGmmUw1913XrefSiJ9R59KYz4bUfKGd5fiTsvMwXcozk2TaiFpe1K23qdgYaKU1jaqxY3Mb",
  "key26": "4XtE6WGHuK6KSeSLpn6CkQANLxokTAbfTmdDxi14nEfm4uRqgN7eDTdiS9CoPs8o6xyQPpWtMzs1kNHG7r7D6fmC",
  "key27": "5uYZUmczu3UavCD4VC8Cr1DYXjSgpcRCiu77e88z3dUpb8c386GB9j1Dq26XwVENgSCFsZ5LmJhQRgEmbSuPVdqE",
  "key28": "4qW5ieEf8W1Pbp1SGkXbud5a6wJL4sANkBw2L5eG9TMpMjai95dgjM7nVsDH1RWmbEmqXgFJKGPoaMMbFgrJgTyE",
  "key29": "qw5FWQNwt1iPVLG5yHQVNB2BaxVoancWy4R9NYv9dMCr3579JUfbioBB8aZL9haAgsFahH8Ksm2c2exmdT1XGGP",
  "key30": "2E7hLyjWYmTP6jQrEniw6J5vkVsage5B1aHxzfXbs3ekrwbG9wpNioEdDhQ13LwAT5ufEMK3nMZnjrWcaZyYLk5V",
  "key31": "3swk5bKPoRUcEUtuV3NVBDgRbnPXWuH96bzoDFyPcHw5PhtREV3wSBQ3AKnqt5KW3x76k2TUb8ztTAs7TVpVbGdy",
  "key32": "5sTBwK9eJyQoRBBj5MAQidriY5bQsph3GcGiVNmdpi73eB6tKj4JaKNfUX2aEZHxQnEKZZrCmq5ciumH4cBukUaM",
  "key33": "5EhRfpUZFWVgQj2SQ7UihnwwvH7uMVpboR6kcazG5c1gJWnkz4QnXJQJ6UZuh6XXGcttg6KFzhXvmbHB1R2woBkn",
  "key34": "5S95MjFxKhPu2xu7sTnc47u7fRw86Lvzw3NQ5QQdBQMZCnrRY4cnDbu6WG4gnmDLSWbEfVKPE6vTkDR6a85gtaH3",
  "key35": "5j4nb6PoH1hrasP29oFdth69DVTzMK4jrWiya3B7iE7xM261hDPBDtuUZdqAXvyWPG8CRip8q5Uwv58SBC7DmizQ",
  "key36": "25aJEY5tE42U5eXiK3DfobaAMgcUcA5sHsYDnZGwqmhBQ1VUEcqrmRULVmYpSjZfySSUEGLzMu6P9rp9PZT5vjoG",
  "key37": "5MHDeAR8FjkVL3s2QfW34wQU8XJyaJMfBLjcb3qJ1M3EzZcqej1kkuPMksyrVbTJpMnAX3L6LMZgw54enHBHw98c",
  "key38": "2MJYUgJTGoMyG4nzqyGcTHfiXLhnjVhXvTFbKJRzkM6W3iFHLHcFGoYC9P58Hm8z7FnXHFsM2TLsysjGDetLgv8V",
  "key39": "5Ky25wW4qZGTbYD6nHmD8dHr4QTcDpRsMMseDbo7tCthy8nqovxJtgztVswpGJNCxHNCp6ANxjK7LW2LewKjrL8g",
  "key40": "5HwJyMHsriW8MVrcKC9oGAwzi57t29bQvinj2WaopjsV9ZLF3BLTVEqHoVyBzoW1BiWuKZ1bQY3o4HVRVavD3UMW",
  "key41": "4QzwUCvvU48kmrki6vNNPnAS6Au4ZHd7kunCJvMjNayGuxj1o9LeYj8pfqwtaNqUahxqn8y1vZAtVKodSzUBP6hm",
  "key42": "4ACrmQmRugaNEQRWwiUVuAeYpkgLVAqnYzasfeqeX5xH3Bsxq2dYVEUW3ijdGkx1vUZ8pPpLanWphcJRe4gNvN5k",
  "key43": "4XjeR8N5ue23rnXy5BvsWERR6gBWrvzhbyN9oK7XzTEdkp2RVvF55cgkNwDpCFk77pS29N4UycLxu81ezA26GtUG",
  "key44": "4xgS4umaXdAnj7CVtscP4NggGNq8omkBLg3t6mUFBsvDyRW8sZnRTfkUjF55qgECGgjFNSzMSTL7uhThA8SfNMES"
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
