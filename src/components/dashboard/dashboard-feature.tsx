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
    "L3t4FddwAcDcnujv1MEt7rdpqsQtJJ5DJtCvrKxoDPeYZbP5KMfQBmoriVXVo9z5QYYbujK1epsZaUE2VRcVngU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ebyipbsj13t88XSjyF5qyBvQpYx2yQQTGDAPn8fBqhWgjSfFathi6qdZdHvZ2s2ukSMhJcDXbmZ4fsuEXPxpTaG",
  "key1": "2gSisE8BbvzfRGhjWVmuRqYPXkNMsQuyMStDwWu6PVXA6WPyW6TSrWCseGY13UxH57r1w46Vtrx2cDorqFhkXJVq",
  "key2": "4nhz2drsHnKiwusfuvLu4pJRywNh7zkWw6w2o1KbSwmMdGJECm58zaKu55Y95FuBbNy257a5YgAnr8L6JW9nfuBh",
  "key3": "4QRdhigUD68662anszKeRrod3WPhXnV2EnbYsCG7AG259hknYX5NRUiZRggGVvUZb4tRqagtjHYncRsepMu4vSrb",
  "key4": "66EAp9KjBhGdvqRpgRLgyeyWY1m2H9R3TJsMrobRDHLKP8AUDT77VBS4eCMKXDLDCA7gkH9ixGrEf2DaxbPu3cFL",
  "key5": "qwsY1FC7cBE9seZKkfAcGzTqHdQPAPXeSm5C9DnZzUT1KmFbXhZtfB5UHoMpmCbAAT838bu7ifwZPRbM47KNdSt",
  "key6": "4neCx5gmaGz91vrpXGLGpkzXupVkTSP94wr65U72HwPoV8QVG9S8SuYMdnQcZS3avwLnBcm8bL4C3Jq5z3mowvyg",
  "key7": "F56W8499c1tnVAzJeqE49Fpn8EhFyMc4KVdSLtJBkri6xF7tgpWvx5pPurXSFNNDJ3sUcq57fX76QyGjVG4JMMi",
  "key8": "641ftuPQffHBhoUGSN2Wcag6pHoVoTfLC4TiQDLbpyqT2Dzs7QEHYmT242zC9nknQ3Ys4HvhE3kAEzzcdcTxnwJA",
  "key9": "4SqPsGRBVkyCH42SQSQhQAsrqL4LkVJvCGS1etRxLf1tNcahqtADSXkYS8vNuLZcvqTtijJ9EMCwYKjsv7dFuWEY",
  "key10": "epzCwmRqwTouhT7ZgJacZ43NgdRG1iLR6PSvh7KFUbhuw1uPk4CXo3QZhH27duTvhG77mtv1m73mYerhEohworj",
  "key11": "4wiudM5yULAtFzMA8Jf7xkAbVmZMswKTvDyDipMob8M4ufsp3NrZ6yVqnRvYEHwSdspd1Atk9F7wc77J2rrpotRU",
  "key12": "5b5EAF9L91qqSTCV6FqDAHHvvYcep2PvHSCZmazrPJmKn67MGNu6htah7daY1Aej3NoTQXogermJ6PeqBB1hhuC8",
  "key13": "yx9mEh1A6K7unoAKSWCarbzrQgRFk8YQvFnx9Au3WbH8HPe3un6MtBk2HYC3tKkNAF1hByqhwxLrLEZrjo1DffZ",
  "key14": "UZM5YZywxXmJAKuBUYKipsBTjwLkgEojkTthZngwkocbJxnYQDwjpyXFAceZ5uSA8a86BUwFnScNx4LmpeEPTyE",
  "key15": "5EcGQ6uWShxo3XusciHrf5bjp7Kj2amCW2mMsKHyiK1CcBmzRZaMgEgudJdE6t2eABZkjPfxD1VddxP3SuhuKTeR",
  "key16": "4h6msqDq1vB5nAeMYr6engHSnNrowBR6xrFuW2oFDNWoQzezbnaxj93ce2E5CyfkqvNmpj5zFi3YBjSAcMC3pkt3",
  "key17": "5RUKcfp56cmzJcjMd2The9mVnVXFRnH93DiYRTMec3EFSA62o1VzFGAMpmNsy1H7kFvcErERRXkFarFV3VEk2SfU",
  "key18": "4Akv6kq1G1CkFnDJW99EnMaPjEP1xZpRRXrZJbfRhxm27nsemxMZasj5WwCKMk4jLDtN5L69nhsJmz6a9jeHuyvC",
  "key19": "2DuxRtbgVjbKjXAfE1k7Tk4aMBjHQ6U3CpZX1Wd4NpXxyY6jyA99gCs4AaNSX8H8NaCmFkY4HLSnbyJdEvjTM7np",
  "key20": "2jABnELWYjA4weVjExGS8fZaySHRSJAXA2hzLbB4Dmv1GGkWJrZiSiN4JdhfzF7aja1bggsWVasohgbp3ZGByF7v",
  "key21": "37SrDBXhzA5b6GDZPaN672qk6U2iSyRrFAeAKb7koGrvioBUc6cdw8X1vTMskLQenu8Nq3Ysio9MVRsGbW5ymsLN",
  "key22": "2PpehVnjJ3TXBhv3FoFyqD8zWQPyNQ1mPGAfy1E73eKL3qRmveAsVnqaY2VqaN6QbHgCzurD8S6aZS2UUZS8CwHd",
  "key23": "2dimeTg8FXzBit71YsKgZep8FqtuUASHhKrM7qKtsbF4FYKFrsXpvhvcQpwwP5fd9kpbawmcYZ8XSEKAnCSej6Hy",
  "key24": "42zV9yeyNKPm8tRyGpF21oc1R1FfkoQ5ZrEUkfWuYivQyBEokwxYuPTwQfRKvHt8Q3ubkn1evyU9ZKkQuoc7woPZ",
  "key25": "S3soRuwVUnZQisqLcURYirsjjge2C4s2gYVmUh5ymsK9n76c5ismV121zYAArWKmvqWb6eEHtzkMTyE9knW9euL",
  "key26": "5A2SAdcuhGWPv3fu6owEkC1jEEF5wiDxXiuKJo4ZJdxtnqZRHZysRe1Wi2oaLodMFbtgW1TZTp6wPGkbSL1KaWG9",
  "key27": "3Ev4CQvKr3UT3P5xqdXTuL84fWXzBpPgCnFJPJCCQdwN82yqWJYJ1NUuaxgC2QiM7CUTMQ3zw4NoraUPm7Eh25Uw",
  "key28": "449CLpmmSwvJ76DZn5LSB23J86wTNxuJdLriaczDVEnj2GQNZXYHwSChcBNdvLoXNVYwiWzoe3hP8JGdNDdvZzs2",
  "key29": "3LWuxYBsPSoX9hwHbZsxnhadJoRZbdUYtHvbYohJHcMC2gS15ScepBEbkJxGoSQEenyZo8U2YWNwyzRzhL2Caabb",
  "key30": "2oFS4jebLQnK8gEt3Aq8PakAEBt3SUoNSejfnJN5QSXRC6aTpbvgit9cZq9y1trCvmY5ziDFLoRzzbcic9u5wcQ4",
  "key31": "49e2natueK4dDZLaj8yY3DKAE6omfFNMR8u7qec8sw6tG5F7ZmjFFSNDdo8dLWaBVFrMTdo9BVUUSSY2gtUi93T5"
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
