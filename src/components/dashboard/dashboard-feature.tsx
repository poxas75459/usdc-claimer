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
    "4gzbFJckaLRF75goeE1CWMCxcWgqmUJLmJ9n2WMWZaAaEc9qU51fT6FjjmjzFvHTUam3A8Pky5BhC4HYKQHmFicS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pxmyqExmJ3SyUKPdom3bNhyraRtHpo94WzN25Ry9Bx4U7oewrWUDPpoFgTQmjSLbRnaoe1pdww9QJJcvecoH7RN",
  "key1": "22wUSpoAUJv7zUskLnXq3xbxJ9wWa6FKsUF8U5Ev1oa5YeeBjLjB6fKfSRwz3avujvfJYAimmn5eBrF1w3v3Zhjd",
  "key2": "574SrNTj2CVZsyk9HBWGVynmhkqdvkxd2z4G4z46U9GWqYWEFVLmCkX2gjoZ6Kp4t8mAY3XoSgrCqmtdupU9Cfdg",
  "key3": "5b8uyoxNewjxS4cxhcDZN4EmXE17s4Lg9qH7Rtvky3PoM5ZJdXrZ6fidgXrFQXXRngYNUBgTAL8xwzrwDAjzm9bS",
  "key4": "2TxVNzTTFVYUioEEr5mkb5buuDKNWnr3jDda2wUyuszPXDMWkNyd9dE4x9FZ8wNzWS35qHfhMcfegdT5WEe7bfRX",
  "key5": "26pc9z8bL4xQMoMckD1bm7CPnM16uLnsowjqi5wG7Mh2Vo9aYMLefLJ7636Kj8fish6apfd7pDhpbqXJom9UqyyC",
  "key6": "492XKDnH4nhN7axKgXydPcBAwdWZkFRhi4FrEMXnaC7oRtjhQVeCfWeb2aJk7jdUXH28rBo65Y2oVTLiSmMfKJVs",
  "key7": "3s4xfXktpsFzoCFWDw1AX7KEhuki2XGumE6V3d4SNdPTvmR16oFb95g3SyWStY3aXRRXfJvv3v1TPt11ginEdnN3",
  "key8": "4pCt2BUkizH6QjsP56yBSGxwU2oxAF57ysFYTa82tJBRYonv4Cxh4CAqF9oFyJ1xjHbveydvVEhJJvYQWNuJSKoF",
  "key9": "3SMQvGzj9vssqYMWMrLJioCwD48YtBPTcEvNpW9tZUCGrzZyWvzxMtUgGXBxp3tjHejJPgrNy8frwFo5CRGTpWQV",
  "key10": "27J5kZgYdKMYRwVQFKyfeT2nQx6mSASsa8cE1HDRF2CQF2ZHbxKviAMq5Myh5kEVMPWh6oNenfguWS7cYqAg9DEw",
  "key11": "4YiJGBtyAEHvYSJAwZ5A5wRvwi7s4Ds2XnpYUjwHYjtGinw3hpScJnT3B3yCvbaWau1m28A1gqTgdhi25mVgXchN",
  "key12": "2NKdDr8pfLz2ARG3r9MfpiBWrAXrqki2yNp3CtqMowSKpbJ1g4NV7JJCp2mZAqFYGU8P4sV4yr6vuPLZa3JFj1Sd",
  "key13": "5FjYKc5KimzeTUDYUVUZ57mCsaofCjiXCPT7pPz7ccs5NUtQNRHHvLceE8ggxPuxhrXoGwKqykfqyrN8ganCLeQM",
  "key14": "5vNxUgLkEh5nycA6PRvqGgywnQCRsEgw4oLwGxnXpFqXXiStsZdNppy6xHmDHPekWgbXbHjjfZTerPntD8ENTHxU",
  "key15": "sk2cQs7Jmcie4whW6EDxKrFvqfURkLCqyNExxd35psg8EyWy9qE1rFjAeqS3neuKqR1e16KbN3ZxSW6hdhXCKoY",
  "key16": "2Z63PdgQnwkbeexdryqFRKz96xKDudVTgBdTTkNVmkHrmLTScHUavmShQomAZFt6dy9sCuMM4Vvaj2MwymR9r7bx",
  "key17": "22j8umG6EWRGYmQopuTsT6vebe4qR6X2NnhmMASGQwwBVW2hLTQoUszVvdVKKW57RQzLTVjaYT2oj6NidGmsrTHV",
  "key18": "2VAd2YVgDvEcbopXA3XMFNd8VwiCrrFtwLNCNTLBzNZrEjiqKLLdp8911qpSGGDeHQ9EwuNfN9YjgRu7xeb4zaK9",
  "key19": "2NJe5w6eey2TzWQttsiJToVqsVY11ZVKHkZireiY1BeZ21rwJVmkb29wWpNy6mtjKeG9m57yNmsj8FrUApXo8knk",
  "key20": "5ibZFp3tTCQWNztcqThVFDiHWmgGEfNQon4E4bzvpH5NGEKZxA5uWEx5wVcHFrE5c3rtQV7naLLezVY859RDksAK",
  "key21": "4qdnWMDrVFUh5RQthSuv7df9Zye676iCjpnXrE8f3TTvycPJM31GBuDAQi8h9xeNu9bMkkLPDn5cjhRMUNeq2bLe",
  "key22": "5iRkaKVMvDRp7sJ47nZnZ8QHCtNAfHGLjofwZzVsbY7YF3or4RzwEHLWjkwaVJ8Ui8867Qs4o4vQiJEYS1a2ZW4F",
  "key23": "9tXcQetz45AmcpCdF6qaSiULpqRfdSA2k1gFpbxUzkERdbVMbne2pu4jvWabeLFxxhjCL3zTmACLUze2EmvXHB4",
  "key24": "3SEXAWNPpLQjq9r5ZQrowXapFCdM1fsxAEDhMPXnGTCqDvL5XJhBhmhRo9PRS6xmVznCSvGm87FEcNwYutTATxDB",
  "key25": "d5x93TkFHfC8D6aAQR64yLN5aZTwWd26XNnSNusn5Bvu5CSZeQT38jGBd51WC6qQSHCLQgmexiyPRhzGH8nxwv6",
  "key26": "5yBTukwHmV8z9LVLxRPJNSTPEhwdLCz7Y1fnaYrAWVm84d9APh3F8iq4zsYyTVAoqBqHs6GBKyLMcCWQWBiBZxp2",
  "key27": "52gPRfciGFbW1i2WP6s5DypEWvSRs3zhZVjDPfKbdzF73cr2drczhJqGmE6jxtW8u79wpLSAkjSHQpJkCLBtNb7M",
  "key28": "5GPYGJ6PtCzKKCNn4HEEs7vX9oVmYrvEvvJptnfrpyDL52vZ3yUq2FapHXvGwfH1yH8HUupe2YEWBb2rx9E1yPsx",
  "key29": "4KjTUFXZnTm2Rm2h88f3AMr7fWhXDgE5rYzHnvMzKQypc5eKF39xuWtqepW55W7vmz1XxdcDp55pHZFnvb6qoEtd",
  "key30": "5KYj97vEPwmSXh4WgpcM2TkeSZpdGVvoJpoXL6tYMguFfaRyhjz2kh1aWkGgQvi9CptePsT6MiTKxUp1aNGvNf6z",
  "key31": "CEAmMd4x7VYNp25uSsUHawW9wCgBfwERwFSSirfoZ4FjsDV1GpPrBgcGbXfBRVp3dES9hnmqvb6sWjK9qeUboKP",
  "key32": "4AKbucP3mgdRqWyZWXCKambfRo3tAJDLaW4HLf9HLxQvax5m1WnnvrjFuyUXEKa4Pc7LFe39wbVTKtQ5uMMc6dmN",
  "key33": "beU936f8FHXcBmRybENHJdJN3uvauGLypN17aNsM2HDx9eWdrvvHSik3eRyvrSjKPytg6ZSjLhhrzBkQkrQePtU",
  "key34": "PW2dKzHkEQZvWWk1DBWJDwDMM4JVhgQAPpaCW6pZTJBgMthUbPvXWFna3rqkDikpzfYGBL1ygGA5eFR6iamvzEi",
  "key35": "5rwDnVn7Dk2gDMFzhNTwFLhDzvq13LwgzvKHs29MvnAyHwiyEzNLDchFKnPocgd36TP9NYMTo6bjS17V3Epo7uWi",
  "key36": "2qabEVne9seR46Xiy8wNRR77UGgWuqGFUMamcQbxYsZ9si7UueJV7Pq6ebm6DnB1EWsCvuxuf5D1AkZbm18qYYp9",
  "key37": "4qdGGSn4d2JtnCrhe3phBk4dfp8qeo9Mi677k4peucYGLBUsz4kSA16xNhZfaYzfzjauVBiVXVmmsWfnpVwveHAp",
  "key38": "49XEjZSwbmsNoCAeS8JeLatFwAj7ij3MazExbFYx6K7w6yx6JP6oGZ6u8G6ZbHsBQVfVVxwT59xQJHLiSgizjNTq",
  "key39": "4dP6kBrziWQjb25C7EwPpkbZ7rnn8JsaFXaSYUNsbeiodoog1Re6Wt138jvU4Yxk4Le8DB1oKmgcC4S9UDfBLvKn",
  "key40": "5Z6RcehEaEC7FfjXaKqx3fbHwAGMe7CZQiR122Hh3T6MG3d19TsszpREuHxzZYoDPP1bu7xkH6H34183cgv8qK2t",
  "key41": "2K1KiqH3CvbwA3GpAYWN1eHZNTfycTf5hueMcnxA8SYoKC7bneNztyjB6oNTaueGnbdN431aDscsrDgm7K41AXha",
  "key42": "22bis2U1JzLgntxcFtByPaXtPuQbhvqt8BJuFRERhxvHEbr26xT7uVyf8r5upcytRwwpW2LMAWTL1bqJHAJrqtmo",
  "key43": "2hhpB4iioK5A4Dwooy3bTNhgxwZusU5qYMEgcgNpB1TAPJRsMHpHsqpQvTdMdxVTeWsWBqtRetKxeH5c2Ks5X5oS",
  "key44": "5mYEf8PXB7WRSTKDH3VSJWfj8S3L9MZMPpP7r57rbHgqETZvTc5aHQ5N5c1Eaimt8ifNdj9vwKyxvvfcqJJ4TE1D",
  "key45": "29GmnwjNBBdmVHbeY43T4X4vfroEfuzQWrf7JTeyvj6ffsgZDkQ8qUPjGW7sZKxpFxrVJXLh1cQ6BAdh29ncMx4i",
  "key46": "4A1eCAKDVAw3qyPH485w2pRFHZon5vsaL5LBxfQUtV2ZHxyJDU1LSHhuyHgoRAEKwCsJXYpViv75gUa9rSg2V68w",
  "key47": "1tbnymGdktUtm3MEBG3NrJHs8AcbSYekobqLY5gWxpbzutfJMP1cyjDeZg3qXseUh2a93qZusQFY5aFKE8YXf6R",
  "key48": "2FjiUp2sEcGDJ157vd58MUGnca49punA4BEbrageey73SFXw3J3tgTbXqsMS1K2q28jEULw2X1Z86ee9ZgL4Qca9"
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
