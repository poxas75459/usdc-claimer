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
    "5JH5Gyyrmp1YZhNGKt3EpvK4AidekppoTKFG7zVuQpjYBvLkiyu6uZoAvu8zXu23R55Rsn6vnvwtmWJFV5ZUg4mY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vZvb1CYmYjqYwMuJW1syReSFahEibcPWGctj9cPVS8K733sYgKz61SPqdVF9CuVeWQ3cjMjmNocyny1edWNj8BA",
  "key1": "5vTHL42dpQCoNu84Nx2nuhbAPDsSowJu66b6f85brRVBJaWnFKVgNzv2iuUjCYD9Wa1XzwHiZhzFhBaJd8mPXwfR",
  "key2": "22MEuuGWZsAWq2y25XtYquiMcGi7aAcFfinGBfD42r8nUe2Zm6KQfmsNe2yLiTDzEZ5xBXUfs2RUw3par5frztxo",
  "key3": "2tsbiyU3mfGfFgsxyapb2iXigWcqQoHJgCPtRxbVUrU5Eh19vKPiFfWVnkJUxbnZ7p6coN3fnH15zjczicojrubC",
  "key4": "23s9bSJR1eXxL4XYLfbWynLFWCYXnEf7dfaDTuhoY7bKWPepPWQo2QABbDoyH35VqcWpA6V5C3tLfwB3HD2VFPKf",
  "key5": "5EfrzaePvss8jeEpFZmHj8dhnqTEczqU9QHUuJtmFgCb7hd1DG85wAgT2wnJsT1R6pbUatGwyPt9UQLUwjcFvEZV",
  "key6": "2owX6kTPzzXjds2YRZUcKx2kJY6pbWDYgKpuFzxQkF6qFvGJoezNZ2e9NBkpFupSLAkpvTPT764xVy6eXJA9jDf2",
  "key7": "4bvgy7sKAqs45iCbjtKDbEk8b2GiNJQixo5fAz9KCWezuaTFJBkT7pSWeVis6mr76TSpBG3uKwq1JePxdGSDLfXU",
  "key8": "5NjvSnuQqPNryWLqCwFoXSLkrHJL2ybAyWcn6c1R9MUx8nebZBZeNKpjNBX5s53SXVvNgn8eBtuv2jZZnu59t8P4",
  "key9": "DstCCdvFwK2yT1CftVYRtTVXiCwUQDHJhHWtLxRJcnNP3q8NUcjNyfkQnfKnmmah7RrK8JPR5SJBuC6aGsbkPd7",
  "key10": "U2ZBxJQLpfGNtHaTarXzuCmeDogRNCbe5Qu2xWdDVf1KQ3KihEvM2cRcx8TnQ9RYLG69KBb2kFJDDBi3DTLeFuH",
  "key11": "4QwSZCWbXYEWQcvKPCrLf3iTRQMGsAnjky3rxyiMNWacaw7WwuHSBqDYg9ZwYsvHdsyWqtpuyG36bo4994KimnTf",
  "key12": "3exyAyfp2qEifSkk6Kt8nqnxrTehzQqsL6ut5BsEr9LoTnJH7ADdTbqFSaKonh9Aaa5Qntmo8uBZJHM9yuPHTGxQ",
  "key13": "5DknJhjXDQxeLuEtJSRZN1GGAX2wqTsgC8BbijW7ocTebt44jDZ5jUDWjkXk4y3dymCH8X3VYHWQhHn9cbwR9bSd",
  "key14": "5fGDJpk1BtXx44iqUDmvbau6sJN4FBPw3U8Hek7jjFYPDyzP5MaduBzsuGrVyvBfS6tHfu5RboyuxfWFhXVnxKSu",
  "key15": "4uNVfiXggF7xLV2ogk2gahuTHScenapZg3NYCHRfSfvcwYZKdqxScwe4FUzLNhuQ6VWqHje73FxxwDy9f5vtd5Uc",
  "key16": "2P9KBkmfTbvdQHvnLensNtfT3B9Rv62Gh3S5qez48gpWSLpwLYpscc9fDLDcVKGqy16nZFBca9bEkFTjGZNeop9q",
  "key17": "3bVJ5oAsb86uJhDNJ6eTV1QqjbAN8JeAg7xK9gGhg2Msz3kGMXFcB7ytY2L7Yit6PLcvNx1CJKGWYTk3AkGy3JRz",
  "key18": "ECCAUJoYYsDAxdGS7ozh3DbTrQFDz8UHdqsksMMcEeWiqevrwv97xbhzDZNPfos8oXbEr5SeDADgggKsx6VqkKz",
  "key19": "3vregcc1hAfD6GXfNEwwZuwsdrhyNYaTiUPV6SbUxvM5m1JNbHMX6wDqPG6EmBAanrFJC9a9qZEzPmWwEboB1jqx",
  "key20": "23Yw9GyQQp6VJpvu2dDMJSvDP51W3hNK8t3G76oFNqXiXZVszs6n7YyAq13Fki8P3L5Ba9JiUCDu1A8mrYHrdfy9",
  "key21": "3gw561JAyJHxUwrH9Sg4ThaNrrswxPF47JFe2HkkDVgdQTg6GT7h8fTsvxJS3P2NNiHKaEMDo5KB247ZaJ3qAKEY",
  "key22": "ZDHT8fLkRZUXVSc3qVQZ1WnybJJrBJRcUhjSjk5x5m1yqqVQjtKBnEQuGacXxyuPCmtZZnD1jJaLwKPmCUrRoTG",
  "key23": "4L29Jvu1vLbBuzeV9S6YJq5Qxt4AHxzbAbAJqxDTKN2BX6pDBESd3PbmKGfGe7CbCTimCvMgRuYn2gnzJNUwFTMx",
  "key24": "4RVQereqrvsGMiGqB6XJHdPTVQaSBKfnjKCdaA5cnHM7pqRZvmydkz2wKmjAAr6uRSEMZZNPJKRaUE588vEp7fRu",
  "key25": "281dB2UMwBQMaXKykCs8XxRNeXCugqF4JSJ5sZpMBn4ZqLUXVonebFGHC7rgbfXx8M7h6aBLmZ4qRjvmYTMe6Psv",
  "key26": "4oWPe5NgB3mJTy14uiEhWxrDigwRFTLoVWo6La3mes51cAwdyw99xyqdU3eyxtTCvfTXeeqrq85uYrFYt6KkX9GG",
  "key27": "2amGh1K4rdeeQv5rqimqpj1X9UdaTxVHXxRkxuDWxeYXmPkt6MwBhMZZdC4HzqVdPAn3usxXjQ3WZfhgwYW1RvxZ",
  "key28": "52BdV622cSTouH4WRMScguP5RYyUKkPSNrhhaVGr8porhA5eupEjviZBoBqqZbjLLWK2QU6tFrD23DvjNaJpck2S",
  "key29": "2iumsfqP3P2cqGeLNYXw4upBv7Yi79ywEtShX3jCkMJiapDUqf3oDgzqSDJGhsbew8cjgVzbi5baN3vuLFEEec6Q",
  "key30": "JXFfcQnHhrgj2LGVNJhppztAnynFMHFdeXVcqhSrg3vnRGqKTSYwXBZp85xXEzGjR2MQkEiYSR7emf9A4vuYd5S",
  "key31": "2pNxVG6VM9faqyApPsfCGKovPGRwVeQcBHGEXmtqGBNogQdL6jEwRiByTXEKvBmzMZK5W4g2vTbsT1HWzLGLyYdq",
  "key32": "2btcvm2fcv38XFB13iLfj1AxVn23KdQjkHZjTWgH3gtwgaKm5EfTky66sr86uskF9ZxKodiih7zBG59ESkFhppaL",
  "key33": "4rPGxhbi5chGJcgKcRD8XARS6PHvYWha9HAoWE3X97E1mZ9oxSoyAZd5wADQ1NkQ6o9F5oeys2fpMdBoSb6JDJ1o"
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
