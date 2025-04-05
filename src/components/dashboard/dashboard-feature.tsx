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
    "33fykCbdcxTNXX8tDbqURHF8TrbeAR7aFrtB5tkJdLPidoA5tV45nLZtghESGfLShPLeU33r3owY6Up5aYRM8saG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w6qZPMf1bMLm6yvw8c1CttDojSaeHb1MzCv9MZgWPizcHusF7SCzYPt3DtF21XahLeMeu4yV86tWWFd17Hgi8TV",
  "key1": "3zWTqzbPL2YDxDXnhNDvWFy2hycug41TByewtJmW3rVdW5Q8TkdVfAHBxtsUz7DYhiM9pMff4uWwH7RxSzN6tDJ1",
  "key2": "2pDzpntZE7JiVpi3z1qWUT13wRPq2YCvPVyFMoDrPVwkg4QrZKf6U3HtvcjbBV44fmvJjsJUDySwaRTD1W758kJm",
  "key3": "5CQpLtK3qe5jLcRnv2Up5TUCp9648xgKAp1cg3JoiqVGkaJLJwXk4uUKnLqkj2dikPEeDLTziUS3UJ88efcBdDBf",
  "key4": "4s1aZKHgopoG919gmxbzJeVEUYxsVdofQWSoFZwZQeZYbjmUZanZroqnA5WRMYZVRc4439bKyS9mV9iMiWWjVwDX",
  "key5": "2GncL37GR7XTCJxUpGpL5nyAMQ8RUURfKgAFi57i8DvuLS4BCEPq14NRVLcfQzyTUKMjevq17YZpj2qu2rvbDzzG",
  "key6": "YxRBUWj5PzBWfiYWk6stQX6rsGvkA6Lwg9KvRYDLSX2gAYV5euhqLqkKBtajCiarjrmDis1U6S9fKXU7ws4nCaE",
  "key7": "43Uj3hgavW9iKHjtYZVKEmmPt6QdkcAFrtgy8K3UsihbzPHHpJpLMX3EhBpsJaBpzUxBb5o6GUcnQfzvcJMAtBVG",
  "key8": "5aq7Mqz2FcZ51619RBhXq1avFig69Y5LZ7CK5JDWBtRckLDqCYzSFd5o1ipkpyrzJrXYy37gzdNhjko1umiiK6FW",
  "key9": "kfgFjSyCeeL6TyDp87VKKFvYnRVUqmDqyB3Fox3rhWP8FbiVW7sShQnLASHNrRQeJokuFnbacyZtaEdwrhzhssv",
  "key10": "LiQbuDX2YhmEQyB35GZnq7RnRGt4oEgYicqZYW8zzdTA7kcnNVJAAx6yhw2KP9PokYzGgBDaEVQ6JahF83VbeYc",
  "key11": "bkyaAT2LxFjf4EatgBYrNWrp3Uye66Q6CKHxqPexvSaibmyAQvm3v9vRdYiLGiCGsLQXsoLK3FB9BV4CP2yPF8m",
  "key12": "5DFoQFA23m8wDLqAk8yhhfSPnseG2i9L78uv3xf41piRsjLFThf4gas4zfZdUicgK3xkw5SNEUnWkAMtf9DZ2rMJ",
  "key13": "2LNSrfYxV6gUhF8ToGtaqYwoF9qkDtzqUSog3rt2t8WHw3JUbFPMh89NNHizeFAA723oqJSrjmG7w8SttoUhVEjw",
  "key14": "3TJzNxcVaHZtzmZc8nVGnxHWCmBCx1YzKucRULDbtSznVW2EWEPmWddJ76X8yhR9C85JcUZbz5NJR3xqdp7GziTD",
  "key15": "5T5YPDV8A9fUBCYkEVzWiLuecoMjaDE9ZjdCiMnrFDJy9pb78kqUbMp6N2J27P7pvfKjG6EHVpZDhmL5X1qepeif",
  "key16": "3kebBKqkT572hpod8fvvnwzcFtqLPyhykyigU6nhocArRnx127cZsYC8YvQKRPEAG5i8RuAMdnBh19trtCZfHJqa",
  "key17": "5R5vb7wnAMBEUEQr2EBYZ5oXiXvt5GhrnwHYgNEeawCuMM2y5a8Pqqfs1RTNpt5Mco1jrLYZF4P4QSqXaF71TJfS",
  "key18": "P9u1HMYaKPnhnkLK5kMDSWA9Uwr7KedG3DGG28FoTA47dDVsmjUAjsTRNFpJTXrC9Mo2G4YvgRP4k2WGor96tF8",
  "key19": "QAkRbb7tcciUTHo8YoP25Ux5oFTzw5msxPdUGPQn9FCeMBPR6SeNQNtyYD6ALZaXPVVR7PbXUn9NqoH1oWF3Jf3",
  "key20": "4X4dGorEbGz95WGD3ZMTpTvmEkGXn1qfdgcgEXfpUNvpQCu2XfnTXv7Ar7C34jWuuXfcWEWZNFRgFhJbpVwuYdDp",
  "key21": "Sqea9gt2rTapUcfz4xqFUUaaxyePkptaPFwEJy7K3fLgSAisdb6RaMQ771UFE6vGwqLEMbEgHwYKsrNnHCAsro3",
  "key22": "3eD9PKmdy22zcHsYxJubG1TZXqF2zxk9LVkArnMTrb5brS8seu6HMQjeE579ZKruq6P9DnS1GDSXv5Czj77L3Jke",
  "key23": "2UArhZ4zj9Tq91rssQG3dyDW3PiHmECpnqoU18RA4PSaMwKjgEmB5BzZMoHqWUqkzzXNyDApov9RRVki3iWEZVrz",
  "key24": "56DboAEgAqqtb4Zed7yd4ZNnL5YRgj8RNbaCNJfnmsG1sis3zNxAzfPHFGU2FgAJ8qaP7UAqLqeoRovZR51CMon4",
  "key25": "4w637veFhjx9P1KJgBhQuFw4qoqPciMsZm2VaWWrC8jX3r2jkYz7g4LcYeYJUoM6njNfYYQ3Lxg24y76sBroUSxf",
  "key26": "5yRKcT698dvynXmb5wM1rw174y99aVWfbqwsxmF3CtpXBhJM4Lob14W3gdSEhXd5UFk8hKG9pHAQbtURoRN3bTR1",
  "key27": "4YBBYey3Fu6hpYrRtnoE2RbpThuPKPJEieyA2AKnr2tTL1VYKW7ftK57YJek8rWAqqukTKUTZHCosJPjmCAj2qsG",
  "key28": "3j6iDrf8DDRCzYEZkHb3DJDmzuSqcbCY8CqZ9vAegrCosZyPTwGiHpb1fRXcckWWjtDTHxUVYjXYcMWiyY1WJNzf",
  "key29": "2jsYdFTEkAn3eD4KzERfS7CseU1YiKyWTW72tAGjh1BzHABZuowQdUeuNPD5Ua6RwgRecN1NwTVw1Qnx6A7hRBKt",
  "key30": "ZFeockrVzvETAnuhwo93wQWZXFWLw5FkRyz2dJss31bNJGkjyuw85BPuY1G5grPz4eNNz4i8ig5iSPozaF7nRvP",
  "key31": "19xbSz6PKDxcnKWA56rezVLqe3mYGjPp3SWM5WjrNmckUfpNLwHVSkHkssWM2rfABvZThCgtz5xHVUAjsKATyLs",
  "key32": "fLvtZLhGXVoLKRMKFuucAMjx1xuLzBKyV9P3bKTNjiXExmziL9mBNVVsR9V1e3q6VRsVfKkk8DVrQrxYAivkTY4",
  "key33": "3N2wyfs86KVacFc1xEydJtQp41ft7DYnEmvPXCy3zTV2nEbdz648tLC6DwuQJgq6irv9fN8i2dcZG5PmKa7NXKVq",
  "key34": "4vzV2LNCgQhcxWeaLauRARCkuq1NTS27J9DxjAxKSZ2yM4W9WuSyWKhzjHasyWn8kWGF158QZYC8rsoKuYrSe7Yd",
  "key35": "2JVhJwTQXN4dTeKGqXQXPkdGt6Lr1V96akLDTCUAMGJEvotQqjbTuueWhvdDErSbLBXKCkeEGFPjqeBcgABwsTiD",
  "key36": "2YNdUQVdshgfM39sMdEVMPyHcA5YH7qasYF1vRR6Y8zzN7segTirKZEpZqEktj1yfkTAZgQiwXWANW5z4JePba6Q",
  "key37": "2cP4w6oHe3HwKLTYyRnKD2729ZKxgvZ4K7TsvT8tUwRKz7XjAVTebkccJhAz1BLN5iEftVnZ9sdmsGE6qivW8BfJ",
  "key38": "hyYfhtLC65LB5mvc8fZUcmksGjaNjz7iUoDheUL1MRQSpyXiDsWg3j8UScqr86QwRQ1AfwRCVQKfY5mZtvqAJYx",
  "key39": "3Y71nT41JCmJan4WuRqApTjW8nVXz7coSdtts7RSELfF5sGy6t4fbQ4Cozh8tHpdYhiF2oTE6zHkqfqGdenaraBv",
  "key40": "43jta5A8QXAfbfqSLKxaAw8Zcri87wVUtU2mkbcmZapbbReV2Eqda3Hu5YspbjG4LrW9vyosuEbzjw7GpYRpAoum",
  "key41": "ARmE5wJU2QRHrWTY98wEQtAfZtVk8UEE42HVNZ2j6SojVf9ThZB2hHZiQH45vYjAQigWQXaAxwNFMfKxDYjC2jR",
  "key42": "2DeoS16bYbSTgXTtqZHPzz3zguUPsYp731wF5WjuJvn5kafB2Lz9n3qZg1cdXUbp6EGsy6B8SqZSFB7aWdqapbzy",
  "key43": "1jwFanxng9WQ34vifm1yHdAcLH9euYxYAbqou7aQk3UaLHH87uK7fSbphQheqTuZuHbaMNkhhxjciCFZpq2eiQk"
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
