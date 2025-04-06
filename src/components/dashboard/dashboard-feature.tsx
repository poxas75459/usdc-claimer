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
    "2oHE3S8tdM6zjkXiF8HzkJVDvpHzxGJNNRV7cdpUZYJgdL8Doy4TnkWCB5huwqmTtijJ9pTt9Q4yeqURwtw5PVHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BDEMjLE2ebLZa9j8gEZ6Y3mQVAqVCGSuZCJsfyrgKuAZQpQ2NjV2BXiFfGn6rK5E9hwrheM7amcC25zhj3zM3ho",
  "key1": "3JDY8si5CaiMvKYFwngo4PqgsfEqkKM7tcWCJw93D9Fhu7wn51FYJEEkBzVVqhLvunhjaJit3Ujs9h4iFejbXVS7",
  "key2": "5gfMNroor3px4pCbBdJbNayj9rJtR3LR9UkD5zUtg8PQ25tkhPxr7ytEFxK2WciWuZF5YkraYFueCPHU2zWLRTb3",
  "key3": "2m65vC4J3QBRy1E8uboGLyhoJJEzTkngo585ay1wCWBLNDfsV7gkFGXjQk4JqacSkYCnqydNQWv6pvw2oBHVgZwB",
  "key4": "5CjDXQ1oRWHT5aNWH8yQg6fzxxGAYwShcYnpoR5bCenvS3FgjCQi5s5521MAnWmtQFkcZsLTDgE6CKViuTStTnG6",
  "key5": "xzUyyRUwWusBNkmrmnbYHhxy434iCpgfVmbBUxooS9rMrdDp7KwxzTCtqps1QKv6GQezzMhzcqBwnEx4wXun2oB",
  "key6": "5aLfV2WL71cJV4MPAFK8cEz2B8wuLMzBpDTtWYobaYHYN1ztWm9mD4r2wKxE8fcW4ZTgE4BTavBDSfpWytDDD8v9",
  "key7": "4fxfxs9hg6BYJs5DZBk2S87oWCrHUiqp9wxBZAxuwrkSgbH6pturMno8ppwFLDGYZWCMKUEf61gyiYpa1Z8bXCAp",
  "key8": "39J7Z7gDywWHHTotparENTyP8pbbj6RtGMwoGzyKnwszqKzRoCQkDDWgLci2E98j4qkRumUeahnVcWjwj6xYRci5",
  "key9": "44Si8HJHAKsGryxaWwpyDA1bvN5vK7PQahEp2saQhuYbA4iAzXsbcghykRuCQtCngFFqbNAKi1RXp6qe9udXgVEE",
  "key10": "57NFebrMC58jMvj1eNDvB9RPvhvA8Y4j7YMd68Jqi6ZsSw3He7Sb5CMBsoerLN5Srq3JHT3d4yTTrN6MpNqEBmpm",
  "key11": "5gfgpSTWrDAtYePsVavsYxJ3hH6yJXf7LWT89iCPGcZMc8tpFb1XLVBQCzeEjYhHvebW5eodYiLwKwsRgFhxkD4j",
  "key12": "3XrNsHNi6gY24bWWqkJzLcgTsokMV5cLoQ2ArpGT6EHzVdzGAjXnAFgKr2vhhXiSKrrXdxBsSQSJiDuTVQHGP179",
  "key13": "5YemJ8qChdMmHbXwjXTQm6LBi7R4V69TphNLR796RwKWY5DfdTHWJiBpKrMommsrSwDh6q6g9thR8SzL1xNnHWwa",
  "key14": "1vVgm1eS8UtqH1csjjwBSJ69RUePuuNUZt8qJthX5r3H5dj2zuefi4wUY13qkCqznBYKwQPFYtux71GnfUD81YM",
  "key15": "5znrYk9gi6A8YDVdU2XE4A9akZJjAgeoJByoD58MqLpjs3DiHeL6EA85bDZdE4NXcBBkVtnmh1A2N17bhPba3eQf",
  "key16": "2jLoycy6LzKjgLuTnqTdMEmQdqF6RLuCVD6ZMjFCqfBajg5Synyqaew3PspFh18qWLG8MhsRtpETTwnoMYoFydJj",
  "key17": "2ri43EYf4DqyGgf3AYz1L6b8Ff9iiBXAwEZ666g1RiDUNwu5oQ44najnLCadNve8LoCGWXoygrxixmzHype9i6gi",
  "key18": "2zvco12ZZwdT73FvGbkKL3tiv6KCpMfZKKqVb3yKkmJDutTitxM3Y6p6Q6RW4yMVCGQUMzGa6h3RC6i3J4ya6P7u",
  "key19": "65fjY1U7uGx1ExzUoQAJzLCd5AiwSEXZti3i39oNhLc12KxVtm1QTWryKRjAeBxRp2Ydb21PVk8721DhmFmfViX8",
  "key20": "2nhmZF36PFT7pwF5tvqz95yPWWVic3NuVDuyG8aqo9MEdmFpGr149FGMG2RECUKUR4ZWNV6ME5F9rrxBcwWxaRco",
  "key21": "25q7gYicywubY8SPMUVRbv2My74iTQH6FMW7A2JZde9hqs3twvv4Gv5APFfwiXqMWURKERFQeHY8r9z4SMsoijzH",
  "key22": "2Eq1ynjN7TL2Mkz2CJ9sHQuFc4tgXTGDc2K9RRo8ZAihTXbpPK8YzbUEkiqeKxLEbsZsNq5i5bd2tYCF1FUqHYWo",
  "key23": "4uerY7pAsg1Vgq52iEqs2g5fH7YxfaxWtofzFizRDgJxvWrFoj9yNZLFHni7sG8DBemKjFpwvz5gRxFhqq9ZfukH",
  "key24": "5ycyc4dLNfojwEo3spCSNMuM7VPLfA9B7XDtACMMYQvovhsyd9LpLn5VN3oNUH9sfZMpsBQa2mKhxxDiqHZbbuhs",
  "key25": "2WpBjLBXoJpahfY5W7PePeWMNVTV9ijWRfLZHYfi2u33V7c1nyM5FXYPPnW9LsiumJn6D7Y6p3qACYwZbePixBQH",
  "key26": "5DmKiqndy27u9zgcEYVNwtmwDLx3dSmEQjgP9mTxAepx9cTZpPuaYo2sFkgRwDYpwJB76DYGeuMLF74myijSsUJz",
  "key27": "5CEhKWA5TUp95gq4AEfHHBN5eYSVvsAb7gusY7gMXvCzaZhHZiK9ZPkMPPEhkBqqj2mYdDbDfqP1xkN9TM9ncSu3",
  "key28": "43XoHXiiQ8aUyNdsY1V6HQvsRhit4Do8WArB3Yp1PrytmBwTfj6euiubnqrqBvyU9L4r9zWJQZXtRiXGksMjCgXs",
  "key29": "53LhhQcUqUbWFQjdzFrEL5DduM3rGjLXk9gvgpm3X4dzEGyBMJRk1KQeVZf4h5ow3JPeKbjF5AKSmHykKY1A7Rwq",
  "key30": "3Pm4AXS8ntJNE2DXa713iB6GTz9R7D6WSSB4AE2Mw4hcF5P1vDPEuf4KtwJ5q6AXSWrAqPd65douLK9Sp2kdWefB",
  "key31": "4dQeWcQvwWoZ11d5NTMCf3D8TvYkSsiowUNzyGqW9kKC4oTYQTWRcZV2wbNMgQ6yQJJe2gdn31H54NmmLNY3w68j",
  "key32": "4vbsacwDr3akxwJ2rzch5NGisWTosyepEeG3NJJNfqtipD4189ixFHg3WSfEVcSzFDmwqRc1GUc5NigjwxGyizZc",
  "key33": "43Gmbmtp57kLJgmxDUr9Wr3zXKbPDc981E1JAnpB86EsTcQAZMuFgrnGVy8E1ue2adqAPAoL16LhykjDGbzjEP6w",
  "key34": "2yJ64jXRpAjfHGDUqb8B3ewk4Q67fgkG9LmrrtCUNptb4rVTMkrvBq9oEYibQaAJyP5VGYHWUa5Bomb9HUBRfuJ",
  "key35": "X7R3HeJ7oP8MjPgQQ3uvqm4qchyHNGcprFD29RdnpFMcxwKyvTp657eUahZR4znER51baFhuWToiGDTV73bUikh",
  "key36": "4eTAPfwMQnaYfZrhswHhzxmN8G5eyE35WYXWxd1b6wHgNG4qb78inUnd32a1BaxXz2dHkUngbMEqQAEzQDmYP5HM",
  "key37": "5GMq7SZrQq2EcodMQmohzSTCan9LyCHZPZpHawwS1FsgBXrwooCFwgggftpRjCVDfLgF5ejCuziHMG3R8DDK51LK",
  "key38": "5qt5LzSW6qwcM4WjBR3rpdRg7kGygm7eDJMMhqgV8vrgJRbJrY9cGcs1jqQymFK1KYH7Wp95FwhkeX6BnuF4MqoK",
  "key39": "3DJB6wnDRtfYZL2jNceVNhXk6J1L9VRiFzqbbGFz6gNbbe1dtU3T2h7kNqpEBb39XeHexgoNNq5mKyj9uLSsH82X",
  "key40": "5TZk9oSw6hfvNn9vvKqZJbnjbq1qJnydjKuRo2My8ze7T9quvTE6UsUhXEqV6h1eCnT5cocCivaJX4NswU1P9ngj",
  "key41": "5zb7FSUf47ebW9AKk7riktdRCgkiCz13hnzNF9mp1D3zsimb6WhBf5WDNEzPxW13vuQByVrDxeiPr8ARs3dVyVTz",
  "key42": "YbeJPNLWrxeC4EBgsx9WnLekscb8J3UQDHRoGkCckRkJh26g8bNA39F9qkYcgLMZqnA1TdPf9eMQGsWaUp8PQ1c",
  "key43": "4AWB6wRRSgzT1qJ9cdRejStAcFS71HJb2eaG8pG3x5cHZ7Uyb2Cq3vKX9iU1HY6kaqqrky7WuYU1qk11K52a2da8",
  "key44": "3RDnTFKF3zHRLaJPgvLrg3AAyRR811QwhZgTtycs1Ab5BqGHPQ1mUaM7h6kmQiE9qPYhBGvgf5iAbWtz6DozC3py",
  "key45": "3ng9ek1TJHNcigx9uzniJgbjKrY3EAmJrKKUjnKfKhyQudXHU5fAGpWYFP4wWcX5JDqWkUAFKf1RaqmhucZ4bgCy",
  "key46": "4AMXhVgHGXrpUE6kYhvnAYLYUWTVCiYFLWLpCAtTt2y2qeTNLxeyYegXdgVLf6ixh1ymKg7YL4GHCFkPEY9952AE"
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
