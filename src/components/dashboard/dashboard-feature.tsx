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
    "YDzJsyrhRkaxEFiwgUBq6N7ZrjgTDNDEYQmK41hvQcPSx8gAqGq6cyozwAxxoxPSZjALHcHh2KUjqHxwzwdjB2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mgg5GAUjdBj8uSr1Jbra9oKNZWjk7XiQfbVGZJUc4SroFqCLEbNA6LvPd9DuDBBSbWZd8AwUnzet6t4ZU5Xe7UB",
  "key1": "26M74vxZn4ekair5wLph7ysQv4ewNTYnr9UU4EA8Kgbhton4FnZkA8sWDxtGS6d84bTBQrBTNADAxKvXoKogoQJs",
  "key2": "5KYRFjvtPeqCgmP5Y52YN8htDjUYkFWB3QJPBBsufuyEBMyTaTw1B3KnJdFde2VTxKS2dPVbQtd2SATBj7mrS4AA",
  "key3": "436BH9EmHs7BzFyFJcXPFpob54SMpEFtrsZYo69xNzHotTedCe4QR9yNCPQjycLo8G6rTFRt1uoZuDiY9dr4RoiU",
  "key4": "3pXgKyEzBmNGwSorJV1p6PiryHdxBKroVu9X8LpYEgVnSK1LGxLrXa8wjNZAbxbUoSxXAqQrvgWTMXSC7F4fGyEp",
  "key5": "3WJPopNohz3Szu7rGHXvJuRgZD5koJq7s4GbBTcceKphdk3kYPBLjRH4Ya2VJNwdcTuS7vVQ46YpJG13QAMrQvam",
  "key6": "4YyU7ku2pEoBgpEHCdWwx3coRMqJyJTeJ5oLsav9dLhv5QnSNdbhrYFxGJopHLm5eM6N8Bkx36JA6ww6CA5EacnM",
  "key7": "3vUayUCKPRPsPH79XsXBpYB6t2oog7H6DGjxTuJupRWySZtH6KkREFuLucQHuhVfX5mJ2Zd4Wdv9EuummCL1yBKd",
  "key8": "2K3SBKj3kV2kV774kgHynifxcVetS6J494JLQtwkYUWbvHiTYRHtx1UqqFfYSzQShppQQoB3dpy3r7zqjHPEbFbu",
  "key9": "2y3fbY2eb8uCkHCnHNC1ZF9YwJNpvhiN3V378uD8vDW1BrsMwkYJXGaJvpEeGskedkL6xuqoo2wudT3fS6MQNM3j",
  "key10": "53tGFJF8mLqYTidYDGC4f1vkBbtMkKe9CaggBKNWVsLYu85QpsfwaXLrHHYKJQriQp1pDibAQnfeZCMtq3N7WXLw",
  "key11": "uMNuJgae7jUbRdXfLjhCoc2JVq584HqA43mh9qiPoFaqyHi3ro3SyR42H4JAiyQhvpWXWCRfqCPmCHUEsRi1MfC",
  "key12": "4ZtAKxUPxuMmPCvU9FyVLo6sjttSg1bQ7JgFhjxXm1ps8mZFhSh4zs698Z85u23SL9BsdGTDff2X3Z5RUurtrfdj",
  "key13": "3wVHP6jdQtWp7T97FdHBSVnaKKKxKiTmhFoejKn6MawXZZ89tH5GmoH6TZmsvGbpAmr3ce5Q2rY8zZ9hE9L578a",
  "key14": "5BJHrs5AN4qo9aCN9PD2R6JnY5FH55Ai6ReiiAQFNLAKeDxev6X2QXfTKR1jEsxXpN1S8MAhur5iXSLgXy78Rrry",
  "key15": "4t49QxJrcwy86tdE51MhPBTYGMemkEAeVEXhJGwxoFhQp3xf7avbwxveGSF7Rjr4dgWPSFKB5nWgQT2qLJM7Jn7U",
  "key16": "25aVAUGiMwQbpRfN91C28X2Shnn4p8FXzwpxQQnR7um1bMZofDQciWjXNctzRoCtD8fSBdzZhdrTcQt1PkbQ1p3f",
  "key17": "5Y26npKTXfA6pgWu5t2evTR7wwDsynoefDoFpC6mfbZUNeuq5jD2BX3kRywDEWRf7NikWmyJezP6xHxCVBA1xe1r",
  "key18": "2gXwVfZdTdZG4nq2nYuA7b9JK5Yxw3dMwbWRiVvUfiUDH8aip8tBwXpNZtjYWShnWCNr1EcChmrEKuyRjz2NDMA1",
  "key19": "2RP8L3Vv3MGf96tELQD9W7X8tzNDChLrFrYBHYGoPuCX7HxX1EQYVdvH8Uv7dBBPiW3UFdtCtyQJmvR2qbARPQ4",
  "key20": "UG655hSPRRzKThdWu2JmDFLmXsnHz6AD4ZLb8XEDSbir1z96A8d5x5Xbmmw3bDbZmMmKtjPGBzHEMK1cqHxNGoP",
  "key21": "3J4riEwHJiPNq5kWkcN2yoXW3qVUdHUE2JKnNzERTE5o5GSgj6Y4MRF9WdGvj5PrsgPr4R1Za2S1XifiwMVXKSuE",
  "key22": "3USuha1J3G2Yz1Cc4p4i6Ws7gvocSuUPNP4KXuygjidpUBvjj1hgPwpoMKiNXXEHCyS2U4WpT8DRt111P8Z6UqWk",
  "key23": "4MkMFcrhcwwsuRz3nyNfKit8pmpRUZmZqXeMXyomCanNxvhUxFWux5Dz7wnafGSYcL4W8evFGAb6WmtoiUUGMY8",
  "key24": "5ZLmLrWwPFGywKnGz3Lut4fHLMWMokr8DKU5gDyAtMoxbiMrihgiUBqSzY55vzTf97BTsJBgFSuxUQaYeDKCtBLx",
  "key25": "Qbq6zSQ5anV9ds7Zeui4bbzu3YEBbDR6AkStkyvDzNojLnDyqNSHMVsFH9uYp9Ed1KrWWN25E8QKAtciKMbjMND",
  "key26": "4941ibHLegpE3mSpoCkjqTguV24DrHugGY6niu5sCmkLPgbkH2jdw3Y7GGk6KBBCcHAYh6XNcgA9YBfFE1ocWakv",
  "key27": "4Lj7VGeBY2WVMGTE9tMYupLQgn8KJoYifXEnEDcZuN81jVYnou9fP8tsYQ7wANYAvSdKY9Spm2KrV5To6UgBNYCx",
  "key28": "2qgkurHqRnsZuSzfKzGFapVUuHZnP5hYvkUepVdQRsgEZcontEqqqh4kiwwntVW86meH4ayX4yyeKG4cbDwrRr5k",
  "key29": "5R1pDEz944Loukha65pBk8VQ3seFsVg6jBfHLGHZHXjzz8PicHw5oSZadd72hREqPmbnHCw3aZWvjCSsqTa53or1",
  "key30": "2oEsy4tW392mazhSWUDmgm5thgcsKxfb2aopgsBy5WpfSzjheG6nhPXR7XGbUUmUY63WdrefmqRoEBih8e83a62K",
  "key31": "3VqF2F8JhwXTDQy79fVJDWzg13WCM4CtmWzrTyTsBqiDRi5emSC3auoc6EFxkRfUypUMWBhGx6EUCqhrRLYcV1tz",
  "key32": "tybqnRrgYNeu2YfaAGSexXGGgFSJ1fE9r8DK83waPT1Ucpem5SYjLs3ey4JytSdU1DMfwrsq8QNi4JLThzGfkMq",
  "key33": "2ZRJ7aQN2P3Rnf9kEoHrgYsc3TrbS9FbPQqiP9GKt8cKQf92i2AY1NLDrRbjzUvyWZRoRwsFqxNxV6ZryvaJdj7F",
  "key34": "2XCfj2qYiZgp5zKZTCexZVo6vpHVSsv8JJnrmrd3qE2VcdKJGdU2gZzS2zzFo9WJKwT9x5XkMHZeESr6TbgWvEoj",
  "key35": "5hwjUjZAn2Wpugj8UmtoY349uSYUFwyK4CNojh613aHvB6jFp3YekxKLUZVskTW9RgbBuJJ9BPek8AzfwU7yNQiY",
  "key36": "4JPZdJru8pez2anjT9uECE7uk83AJSsW7oJHqEravRw8rnnXR6FatU4yUwXZr6FqTGp7gj74dWi8BTmeNic5vknH",
  "key37": "3G6p85ntt53Snyuf3sGLCxvJ2Ju4cACv56fkR1ADammKr1nTMdqH6W1UqB9qESzGwX2RQ2bA36rkW8Kzjxbn8otU",
  "key38": "5LA5zdgkapnkwYzY585GGQY4cbHk8sLVJGNJiYegJCai4mb7FV6gojy53obovTpPNrUPVKTKJS7EKuAe3A31bQh5",
  "key39": "4TeJgGZ7Y5E2E9BnhfGLQiaSHvj2B9ATCZaKyqb68HMoq15jXykPNg3vep5UQjosHwJ9nf55zBzwKytp9vXtWtPh"
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
