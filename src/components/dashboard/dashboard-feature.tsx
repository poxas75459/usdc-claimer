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
    "dxqYzdb9shstPZ4UwUPPNT2JxV1bWheVJCKGoKJ1pKQz85bJE4tzNa8QTg98x8tGea6ght3Hp4PhhUPHzh3Yd2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zWYy9ezHJzaE95t1VqjXrxRwUCxfPuXEUSAVFKw8kZ1u5zn9TgRWjhZuMAK5TjD728eFzacSCwocsDiFTeqXwdB",
  "key1": "5jWdTgScynTeo3XYqUwRwRXWM5sgCNJW1YmrmZtNuRUCbKdLV3FsxeaABP2dicYdcYwiJoqFwGu3rwpQ6bZnhNyA",
  "key2": "3PjVAMZZUSGKZv4kLw2sfCku65SvR3QQgFhZkZQwPGhCC9oztA9ZksY8ed78dr7RiqQsExGJycNWBbwpLRMvQ2cb",
  "key3": "eMpM4C5yGnK8zFpPKMYP5nH4c3hYXs1ADFAYbnDbQX5EL57oCqAnQtNN7mKHX6BtuBauaziLt38y4NAhY858FS6",
  "key4": "RLuhGnS9YBUvgUbKzmqRXxJbJrAiAMkKcvN7R6P24BX6tPhJ8dTuxEAXvQjgQBk58DsQThi94GieLjTyq3U3VRm",
  "key5": "5Gqq7VZLbTj5jKWSmmupH48qvc3iSmWE2zzpMs3sKWhiYRTCfJFtvwbR5M6bF6twmKkhAvfe33ZstPE3DYYR8Sbf",
  "key6": "4VddCXUGJ1oRyfARXToiXnAqwhU2fdE9YiJpYucPezqS7524NpQqfTDpABzKXe1sjmGWkETB5WMv71XQbUv1cGNJ",
  "key7": "wYhX33nbuFAurASXGCyMMvDnrQNoVVHCrdkLyXjUKRMeTaAh25ka5gZfsY8L6BiAqHtfy1VwxiojLwN9D7h9WDV",
  "key8": "2Yw7afFW1syTWNXW36GwFhXmUrUAeZqixVYKSdK1NBGNvUG4sADBLWjprAM8PWfkFN14zAYNrJV6LZ8L5DFMTWic",
  "key9": "FtPoZp1b4bEZnKyGzVMtJgChXgqF8UFyq37VwXmyBpTEHr4NPn6FsP5ASmpt755cLRK2AV4waN8an4MDmdQarr1",
  "key10": "3fivauxG8t3J5w94XUhvJpgK6juY1htTjTmUuidK5LjTLk5DtrzvGkwtNYR8FnS2KP44SywBMxv4W4BUakubEGWb",
  "key11": "4yQ82YuyhizEU1Bv4B6UfFdqYGGNPc7pdfmdkS7A6E3THXaEBr5y3yACUM2oDdVGVkDKLgYuRDznwV4hWJkzthAX",
  "key12": "4vpqoonJTpEembwhLqkkDWkuRCzpkuihE9Qu8TXRhrXDN8ph1r3W2qN6dMVQr7JsGDAD6PNftDDicviqyKhpsQM7",
  "key13": "547vy7Rnao9tYPB5qULsEoF54rJHN15Sz8tU1Jv49YhaTQXws2ZdfVGPDbXugyy5UmfgmewQwvaKmeJ1pZAogwfb",
  "key14": "3A9St1RuKW8o3MZwpVdi5pMVsA8nrDkvedsLbXbVfTYrCy96NqEwvjTS4qej96bgg2RXcxaSCVucdij6j7nFVff3",
  "key15": "2V5u4hDmErV9T7tTfWkmFh9HoKPHFL6czdA9WPQ3TaXrVa32GqEjg2w9EiaWXhceDNewpM5mYbVLTBtfrjjsJTKJ",
  "key16": "3vDiCCp3PugNPiwSLLSRHHjWE4qgmsvJ97xZcYjqigMafzjyAPwcN5v35UsL5w96D9GgHgHT9uWTdY2CcXyC1DJH",
  "key17": "5NUR5ZWe1A27u6Hd48yzdZeSy9vYTbd54tjWHSHi7ExTdE4qBXJAMgUHSwjQpFiZHa3tkMbYRCzB6ZEt4C5Eiuck",
  "key18": "3e8vLe1H4a4Pq6B2GdU4fmqfQCwGpNBipTj8hzC75yamJGqNNr6zEfgmXLwM9Wwsdxjxf6P4b7j1CG4GSVZcjvQk",
  "key19": "V4GGEvjVRSP6GFL8D3zfnVEfCCt6T52BHZ6mGAo77dFpFtQ41nPUXRDxyeUWWQSz964BE9pdeZD11Gf4YwPmFgG",
  "key20": "3VG3Quord6RkiXR8pv4QKtkorPv9VCwKAW16ziugVgvM1M6s7DMq7bBSMCnD4vHg7EePdASmTaNU12Cd82XdRqsN",
  "key21": "bpCBN5BMevu579GtGsB4Mnu2o3RdTffPER1QSPKaK8snbsYaSQEMRPeqLmrYoRitbjsxVbUSu5q55VZ7AjEC232",
  "key22": "BqNfetS5sT7LcbFkpYYxJEseaisbXss3KemJKtCQcs2XrVsggNwwkW1jF2isYvKW72vuMWWnfbqGVpoZ6wpawkh",
  "key23": "5qkAJjUGuuowq8hEMvVoQnve1v6fNa4gh2sryVopQsZvmDC6tfnj6rw7Po29JSosqhhprmzV1oQM9TtAS6o4VBWA",
  "key24": "4Q79bWhLq3MREhSX6AtjAsHFvReMpaFyx64jGCkWcqf6aDJ27cWTfka8rMF8hgw1CtVjJRhJQ2zJWffmfhwe8RLR",
  "key25": "45NcFnwTDm6vQ21Y1G3Znnb3rkqPohK5PhG4tArQMtHhDh8enE8xxCzcPxjjUFbAJnm4pDZ7GSdXwrjuiwDGYiNY",
  "key26": "85BSEZ47rA5kJp8omGdQHmYYogzvQywYGonkz391A7ZzMbnr3qWee1GvsWhY2MopvyGiur887k1iZGruHTttQAj",
  "key27": "4GwyEPakC1S6c4YZsRHbZrtQJQ748ML36cpSDXuBLMfp9BHx8hZH3ivcAnaPKDC7LebRzfoPqDTZmCfgDf3jvth7",
  "key28": "egTSA3DjzqzVLaGaQXTSJuTN5NJTwbH3EbrhRDA7ELHCYTQQmMx1GJUcCeTrn6PTVjE2wg7t4WQLRT3UcPnmAFZ",
  "key29": "3ymgWLazH5VUvfArcEnRDt7kfmCqvyWiDkhuGLUz99H9ucRxEtvAfqgzVuAfScnVy6GeayDC9QFvG56ziyssrn8M",
  "key30": "53zRveR8FNd8EC9BiQJREJQvxjWwAimGazjd16JXoTBo1poVqUyyqtXTwrk4MjvoLE9ocBXUsyWm8AsMUMVb6kiV",
  "key31": "qeDYKqeCM1Dn7WP8iWZxxPwR57sUPivhejyvu8BdcSkLGzw6VvxcgzxrVyn5FZRrQb2YgTM5WiGCsqRU3gHyMKN",
  "key32": "jPTov1wQRwgiKmjEfWNkiwHEUzF4E28HxXpiAKKAjsjm8Vq8xaVXFFZqA8mvighKaPFN6UqvDNqvqVYX6m9fne1",
  "key33": "3PJyEQqL2jFJr9RrNyrGYrsuxvq69tTSf1GJwe5vvCPMjV8qR4RZM6NBbS1LetuWk8F1kNeiVNettJK4x81zqtom",
  "key34": "5YhrF9QCpMFT79M3q187kM2DcftrL5EFn48HNZA282BmW8kj5nY7DwHN8VLZ3UbCBgHV1mEHRfhtL1i8av3LyN1A",
  "key35": "RD8REPh9XrXz4zHoeM8sU6sFG7bf1Gyg9LChNDoUvuUTTLsLuXdmWqzxsGdFRNwFXgzVpjm22XiSw5VKZpupryD"
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
