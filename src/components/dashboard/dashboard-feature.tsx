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
    "4siedpkCgm2mM8fYsmfcrd7v5Zs1ZSsL5CvRFvuYtTx6sdozG5KNL4BwBLhe5TGzvwTF4ipzkLzwp7D5t2ijs6ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R35KRASDGqgiAuVtMbv7KaV9mX4MsGrqyXsG9oqAkDAntKybxNpzdE4SEopQsbt6LVurZDZisXJ1P2jtb8XYDVN",
  "key1": "38KkFMG3HP7cqXz835dTFdUqffyqQKUQfKdyx3B4eCRVLSeyHLh1ACwwaTkLgbxa5SNKdcdrVZ3YNHgdjLXfD5vV",
  "key2": "2MVKaEio4QtCq8pLkk9L3yY2sCTYMHz4AXVVJxnzyyoBWowsxt4NnReEc6opf6hAo6on3Y7reYYVhJK4Fj9tLhPi",
  "key3": "2zd9a6PKSURaEfNocbZhXPTkAcymdiGjRqvZpPfF8Qr44NVaJZh8a8SoRZpxCh3nn7Pxo5H62ASYdibAzeKkQfud",
  "key4": "3xpVMwcc7TJhwxft9FJVHVY1dEw9MRXiqBDzPBfr6yazCNbYwS7zRsctp7dus6XSKQugCLxvQaVNUKzWgF3brzDm",
  "key5": "4QYPRWKi4TMMQbKAT9VWCvMMKtV2tyS8pqb2aTbpYUDbpKQ4EULe42MKkiB7rJ1mw59TcUa4cRsMrTdSRBZrK6ei",
  "key6": "2oxRk9Gn5wk94TvxRrSwQs3qcdnoiyupjpZTUBBrZM9YNH9couGAFkRpgRiJYBHDGp2wfmg6UBC9ZR6x44TUEd9S",
  "key7": "5etpP2qmoXhkPskas1wWZSzMg3mp2VynTxMjCYWgrvmsQA2NC5MEo3JPdQdRNw3RzPgPfK98e5EKJynyMcsZUxA2",
  "key8": "8GnNgKyr9im16hKirDEHpiyFNJYf73Ekc7bHd7AAeLJHbWedaKMke8GdyxbHQANXzViMuf9M67yyEE2oFxsZ3v3",
  "key9": "4Yi2jgz9gzRPJD1vQLV3fW2gpCwFw5sPKTeJx9eVvDFqA5kzKprqZgpwfg27twnbvm885cHfN1Qa2nceysaWEdAe",
  "key10": "2mQYoKLkGxNDmagownZt6KPxVaJyPtdqtZsxGnyBGN1SxKdDvMbCk3GGXz3LU1p6HgtQwtT3AMwmC2XDxPaEttLM",
  "key11": "31jscoVAGya6zF8q4CHGDX3GDAuuxSETqjCjBiLfuxu7o3LtgizMZUYTM7qbNVnSzX9nmmYWnra6wJWeRjLi2o8m",
  "key12": "656PDadEPuNg4NyxPYPWZKg1PPqvb8xm2ammM7o86b8ZeBhQ3DXXZ9HRgWvZstXwR17Tw5SiL1KtLZC1UJrMBMGp",
  "key13": "5ZDGYzqzxHw3WRum4GYTmazaZCosgrvZkn8fGLU6u9u9HfVrW2arP7uvdqxVQTXo8rkPxNqa8HbrKYEt8mSFtTV7",
  "key14": "3Fm63CVvf3WvHiqm2DQ3NqN26d6JTnV8iYG688cXvPPX3QDqLobBM6ZpJbhQ4baCw28noKbaeop76CDijABiXFGU",
  "key15": "2JDB1LGXA6mpHyUKNRe6A4EAqypFBeYYZ4gnuJAai1rfAVhujFhyiYxSXv1uD1pBWdXYUSBoKz5fX8zL6GeGhPhw",
  "key16": "3VH1R6T8qQV4UcUpo8ehk1mCbJschMbkByUXsyNQ1CogLtUFn6UxkDsbVKFg9JbJAHZ2zjghYgou2xeZm7ZCNnPD",
  "key17": "2ygPc5Z2GzdTEip3qtwvMJke4oMCnA6QN8mi4Yk1waW4iLPu399en7qGKsyjPiuMixziczSruWbpoJCWkHBVaoap",
  "key18": "4EC1GKSHtraLB4a7n3y3U3d8ZqNaJwxT28kwHGmZMJbXUDQPYXcksSjymH1qhEx2Rn6XmNQcwQYtNtx1HQ4tWSi5",
  "key19": "LR2vurZqinu97ePXWqJbXiHpBi6rUaKaYykaWuhPkZBjQrDKnFd2Mm6sSY5jWj25FCqZfWHFHjXwt4Y4CodboQq",
  "key20": "GKpHFpa7zcD5ANX7QpTpFSsnoxoiZ3xodpzMKj2t5C79PQxE257NMk7EBPjpCRNs2dv7PcLNPG9mczyEECjMUXX",
  "key21": "2hdFYBv94NzqWbJ5xVtyVcVtttNCYH5EqmCYaQuqTJ4JuXqMARsTkaJuhWH7PUAeJTMXCYH4s6vPMZamdtm2jV76",
  "key22": "eCbUeb6now6GWT1u4EvcxzJNFCaqyP4EPD3C7mTpgw1rxs6UYVZS9ELynq64ui7H3i8D8LFiw1ps4HXk4uGy1nR",
  "key23": "5cjKht5uHyviJZdtv3hj3iTnbzwUyzhN5DGvtPYuXGLkXEUKmMTAL862JVVqKP3tPPrXSFkdivVmti961K7nEiwk",
  "key24": "634c7fz1Tg6UDzSzgBRr6TAcJEjrUBcSu12qTZvFrr6RdKWFXLeWG8D6nMevAcEzwXV3e3MpD19DWgjzrUh5SFVK",
  "key25": "2bBV866aeY7YMAUxum9oUq2jUL5bPszXS72hp2vEhzKfLHckeycVLte5vK3vdHFYch3HoZFbkyqxh3FNLYfQoWSX",
  "key26": "2Tnut9iJ1qNbjX5fYBSjUNvamoGFz396EH8fccL5ax2yoQ5DaVYE4p8F5JkV23KTeiCaiz8a1RXR7kbi6auDd1pQ",
  "key27": "nUce3DWpRh4W4SMJihpCsiSy2pFf6LhwejTaaaLyFZvpnfveqwGGQGJ8PkRs5UAdUTnMpCG9XbpMCqHGugKFKYf",
  "key28": "4zdRWTaLGhqpeaEkv8iTWSHJCWBqqYDEpoFuk8ntJD59gQPss53ojyBKdD1VF2vVhzBoc5jjabfxm9xhGZqc1Ce9",
  "key29": "2SqZZeuyoyKZLhNqU5TcHP1qqQiF6esns5KJy2vQLwwws5QQ2XehRCqCPQcwaJpWEvQNEu887VTr7REeZPM8GjJX",
  "key30": "436VAB775uUhUjAgmMXCF5BqtQimivBEXnFZAhdWw1AfuTGXFn7PHaoAYg8F4EmpyoTn9KHmBhA3WucBTgsBA2TF",
  "key31": "3nH4K91ExuUdQJkW8ZGRM1w5q6E74bJ5TkWm1fxdoqFKGLFpvueywtnSLjZqekGb4Au4HBiXxaoTDreYbyxj77Yh",
  "key32": "4jikBUKJdnvLWNjfh75jGjVK3xijydzrNk3iiWjCa4LzycoECNSGiEjubH5LHvUWN2HzURNfj3o9NPVs6X2PJKEH",
  "key33": "EZN7v394G48qY78bfqyU3QDDDhjDBh2jj3WBbJ4JLDPji3oHDjr3nPwuRUGNBe1TTK1tmtPz275G24qe4Np7Hvi",
  "key34": "28sYA43SYLRPaQ1K6MiFGoYLw4Zvz9x2p8t3mNRYw4CGe1zhnU2jQroYxk3ocqvc6QApcL9NPysVkgyFFwUfUF2Z",
  "key35": "5zJmVbMcB4qBtFJWCX62Cfuq4bsx2JcM7hURJ6NNjDbMFp25jq27TYw8mYxX5ukmP5oYtfGvE1ZzNDxa7PCQaVuE",
  "key36": "bc7d7iGHgFwbsD1ncATtRqQ3zp1hEAcPKnpPVBYfoQjrcahEuJjUPR9s1LeHZPHSZQ7mt2smU6tkWVG6GCVcoeb",
  "key37": "2E84noniFZ74ZSksbYsv1eS2C5eU7a5X3ZwxDeiZyEcsQDtPqS3okiBBGuJ3jU57kCVt187QiB9SGNAytaazt55F",
  "key38": "4efbeBTCqq1uq4X1LYUJR4ZWYykD4dzHWQfVCPqUFkRnQKopXBjgG2sbQJu3vFXEa8HcteWATC9AeQWMm4nscgWK",
  "key39": "44uFhrJMNWFDdupaKQWZ4avp97fRhXMCkKDYjJezCi4rvS9VHL7X2K8srz2jTfhJXG38XdYBB3ksnWq9Srusjyj8"
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
