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
    "4TCXLcgck5eMC4nhy7W6HcePDh1cNoqfsVs6tvsucrHZyyphugteH9Hkta6U5EwJZj68Cb6j1MW1fparapLahGND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SdgjBnAX8TsGv1YoJBf8oZsVBg6J1rRmWRoN41u3rNvbDmSngnkzHvDStAFvUbuVbV3LpKujTNFsRJkB5GFdSJB",
  "key1": "3zHrfy5ZkCb2mXPE2y6jEoTz83tk1YGiGCRA3iraggrkYqiverrrU3kj3Kq7pzMwETPWb2tSvjeGSMYVzrtQFeYy",
  "key2": "2GJyq1yfDCEQ3iSPGwKUFNjSMJd1RmEoEk9bFXy1LCDkpjWFp65Z7PSrdotoSEEq4eJ4wzPNXjkiVnjxM3ZBYeRU",
  "key3": "36Ntrixqt8BXHADkWLZXj8sLv6FBdzLGAayfxkkVGMZUpz2tkRvArKR7szsYy7Paojr4KrybxwxERLnfJNag8ia",
  "key4": "36CzEubaUWFq9JP2Z5v1B3ycGoShJCDUhaLnZ3ZBtBjAU6WiufWXsFyYy9z4GQohmVjjUAEa4rZiAVyiUNvWFE2X",
  "key5": "5RPY7vEKMZp3oqJpboV5rkYCPvfR7y6ACqJJa8XKLRAzccyZeYS7iqcumE95ai4TcNDQctSWwbdFZBpVK5x5Q6eS",
  "key6": "yMwZxkjtbfK7inzwfo9KDBS6JVwaTDwwwAA8UjB2fAAHWDk8r9AsXidMHpBqHRJnkuM7sGb9B43fN7FbgJsS8xZ",
  "key7": "41Dj48MAyTbu8B9NGFGYZa1vPreTJsbGZojuVVVisbGydJzskCJ55jZcj5pAXNNp9anmXWRtXdwr5yJTR9q3pRuo",
  "key8": "wjAaKcq5b411omqz5t9rthZh2PLt6PkpWm6UhknfeZ6m92dxEkKnAUmcEscAc7SfsqEpFn2KQ6f8ijV3QJjpo9W",
  "key9": "27qTTpHTwL9bUJUwxxYujSQtx8kTh8dY1mSVsF1fFRZx98aoJnThJ3TL1rm9k4p9rL5VUbvHSU8tYUkUmM9Mrzez",
  "key10": "3SJWrUdUhzPrj6TbQx522GeqwK9J9PW7TyMU3WTmqvz3KygPt5eozRKrfQxF15FTvvLMQFrtgmxGnzpNyF3VSUoh",
  "key11": "48d8BT7VMFMUNqCyyx5m7mtuS793XFnd6CN1xe56YaqvWEeQeUh1d1XywLV6rY75XxARmtrapXy3AApday9GZz7e",
  "key12": "4RaGWVZf2Uh5Bo22vtXsF556LKSKtJomcHs9NGV3wr9UAvhqCG6jy23sLMBZpD91y66NnckCUyRR5pQWSCijfwh8",
  "key13": "411uD1MzfXjYU6knU2uWJdk6JVoqcvkm9PWHX2qMwFC5fvZknujtN9gRTzsnXFLqKbbELnZgpj6npZRnFKuyyaZU",
  "key14": "5LD8FULwZcsGMRbhJUxEUYEAKDEWjHKfxMScnp5oddCYynQ5CTN4qUwAiBsq4Z15QmB9C2caaDgFpWcTWxEKLrRV",
  "key15": "4hFzA8DHhLMSyDnUQ1kX8Tu3DuvqmCWWZBoi3W6vdYTs1g12vDSstLhF5DFetLgqFR2JeAffZmbXLPSyT8J4MeiC",
  "key16": "2iEiEQ75zc57SAdzvJXWm8hk7qKc8cM3gVDUDVrMLXcfcXqSaDq6JzKjDUBSAQz45EgTsLu7WpA13KjvQuReM4Hp",
  "key17": "nowzCDtVs4XjiSTydB1vgxvHGY57VtMbQ8hBAEvy6QWdMuzLdbyDWn69bVfzNTFwvngfKRMdQXXB4V5reX2jnxy",
  "key18": "4dqGsbD57EQatTnPbjToVmsrGDCMeZKK5Y9sFgNwshnmTcqcudqgkutCL1k3UXbwgn5FuFzqzkWxmtZC63xpnvE5",
  "key19": "5o4gdpxTdP5hDfYv7kMarLj2BQRLe9doBKFZ8FvCDFqdVztAQn97AU7rqz7NEb5AjjUhaZ43LSv81388CA5HkVig",
  "key20": "2uLR8wJ7x6CaWV4wuM9g8c2oLZHmx9tzKg67j3hj663voHwiMjV1Hvtm6aYY37fCc2KYtJRLUT3oWthhjJTmZjFb",
  "key21": "2qp3AikA9cb5BZsZZDpdi1p1NLhGVz1GkZ6CbFwsDjist6gw5NMHb5SoKSeeY8YbF5th7UCN2ZFcEXyRvaxV5qcs",
  "key22": "2EPQFCEJe5renwFAyGbuESDfAPVZJQshXp4YMEKbsYFiyaKsGv41TsY6bXnDtajSgW1eLVhvfr1UZfbXnBVcUBek",
  "key23": "39sf66AyB2XsgsdZmppEJerGTazBMxTk1vRYY2a43jZFCm3T6RmKCsLxzCxktaKBQyWQVgPT4a6qketqffTCRvZs",
  "key24": "44i2WL5pYynnYTsWQVjhGRvvRZZRXQDsvDvhfUmkNLnFKSius5ruMEWAK9KpmrS6eobVtQShwRtZZUxCfjvmNCnS",
  "key25": "4VyqkkACEeSsPRLvEF5uUZjBgQguGtLVqUjjVCJTJyNAJyVyWULKMfQWPsdmLW4LWsTZMjGhjoPeMmTgKZWKLCgk",
  "key26": "2xDw85gy8VjwFB9hfXczTixpH2EfHARBNQjxb1MKJ8e3Kfg72pUm516Qp374wjJrEbikKXapyW3GaQvXf4xWK1mP",
  "key27": "Tc6cRnUjbSVUT4iNV1ayejPAG3mLdVcidFDJoJoowN8ozm7jcth6LtJaaZ1XS13i8jYSQ4MdVwURSuNGCBqKmLJ",
  "key28": "4kxy2LpTmxCLckvYWThUa9ExBTMANtWKVLPHix2Y5YiWgPBtFDXKqQG3BW1QABPCLd6KAAwT6DN6aGUuMufQUWxR",
  "key29": "4mt2piPH7PxeW3f9FJv1dD5BWfZQ2HccZYXbvqicrxD8DM2KRhcXXYdmJPDWzpfSjEZQ42jnui96ycsBXSeiM8c",
  "key30": "bcCKA7hMzhhaLdgaR7m7QzsCqo8zaXxCs4oL2bS7xXUfUKawqeboarr4pjixCEAB3g6uoABUtAaCp8RH3cHBXcf",
  "key31": "sGQ7rUS7GKX1rdpFEQh2skBGVbvNhLtFCayr81fjErUKkHCDpSB1997XDydb7oxeR6wRA2EjvBJwksJF6yHn5y5",
  "key32": "6gTvyyLkKYi2fS5vXZeD6hLRaHJTnUJqxQavxfAyXUS8gM8j56ADiQN3c3KYTJ8Ad3rV56D5qfiSfQDjcooZqiv",
  "key33": "3yFeP4Mno1Fw5UfX9SpSkrkAzCfcZt9FnpRwfKoYv6vuKRSN1bAk2ZJ8ApRMnvSFweGDbdC5AAtQmaiqyFGaqmqK",
  "key34": "5LZAaidF7J4iLWebbAMM2hFLvv39tDPa2gxmdV8oy6V4vMhaBRjsSR9iTxpSWMELio1aqHFPmMSfMvqGLF1Dc1ma",
  "key35": "42MawMNFvLdNVU4BKgLUNLvha4H278ehFQ1JW2dFRaRENzafvy7Ta3u1B8VQniNE931uyNLS42RBEYUSsupwHnNi",
  "key36": "2WtvWUK1Mum4fumM4WFzPX3DFzYCoUGeF5QTNKE4JwgV7zeseZqccs6nWTLPNeJC8FMvNdJ8YcVVqfFVis3JyDWQ"
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
