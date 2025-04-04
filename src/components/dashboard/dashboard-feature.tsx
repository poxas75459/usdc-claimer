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
    "VggHj4Y6qVjZMQ1ceJqZvA2FWH1s2hC1CW58yaLt45QVGV7VB5pqKPjKXTnJTsJGGuLf89VF5o1Z7EenKni8Ysm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tki3zUpzTqyvYpQy5TqvBsDB7rcDoBw9qQBWE15rp6saVtErKKtWQ1CjRrsFyX9CySivt8otp3HMQTLdULNg1u2",
  "key1": "3p1tq7FRnAVpw8nPQpE3XGbzeDFP3ED66pcPDgpYv9HkFf75WRzdCrazEUaPq93vYmzioZLxesMGcpKpHrajj2wp",
  "key2": "95p82qeArMXV2BGur9BLNKE7dFTyErpoMrEdV8cTcjt6GU5ns91hKA5kKxo7no4zrxiMeMPe2k7PRPohTD5CjDi",
  "key3": "4gLEpCKqMqpxi21R7S3izCWwPq7jKNynWxAWM6HVpSJap3qePS1YoXKJo96TEZKRmDD8dWWgdPXaM7QZ3PDfwxt7",
  "key4": "3nCbXY7M5X7sJD4ANzQAqirbAyASS4N4gGSyDNCwXaYouEeFwFCcbZEAuYRbo3NSKbXBhU7mPg5HUfDKPZT5LJks",
  "key5": "2FJwCmwdxSPdfdSmr8TeBPhpQjSxZaqzBDbvffSRNPNn45SDQokgYUhsZGwN2kULrRZtCrYqP9nxZRidQqFcTJoe",
  "key6": "2CEoq2ZvYJt6xxxLvELkfMJ8LiAAfjmHCrCozd835P9LtxV1NCbhWDAcw5YWC4Mnm9t7TLrD17gpVYhhcmnMVKGP",
  "key7": "5bxeaXNEoUTrUhxjyS3dqW9H75E73siaH9nEv1WDdhXMEcwYqFw9pato2wEtNbT6wNtu5K78PsqDbXTbL2KxAdnB",
  "key8": "5WZuxcnJRr8GytFnCAYFjx78YsdwgXASiJrRGMUiSgmBNe3YwpeiVwJqGYdHKpvZPTRw1Sxy52nRtyVjMMRtn4Rb",
  "key9": "4uLNgL9zFduEPHVT7DZXkh7BZsd5JwyqJALUam7cXvXHwcAzCk79RHj9uZw9zxF8Qwc4ESyMeCbVKnzP5LSBVMrY",
  "key10": "3TZ8qqwhYuUupEevyd3a9BznZdouiLrXMnznXQ2zv91Lb3ACPGcA6FKBa6hxTrmhmxrBgKTn9qt5ZXZpggeCr2tK",
  "key11": "55jKSQRQmaVCnmWp3F3ySQcyknQgkxu72QT42nLHeUtKRN8iGBLwaxDLcLHSMM67vxEezuJiTFg8D54MmR9vk9Qs",
  "key12": "dXaYpBnAUYr2Sz4Lf5dWKnoy9QkS3mxFZr8WNBLaMZoc7q3Pgq1r6JZYM7kxPFR8KFyBztxzuea9snJD3ET2QBT",
  "key13": "3VmDeh3EjbyZahhRxLxq9Q2UQim6iC2GehjgszYpXk2xFeRPmNYfvd1n3hcPEAAeZEN8SB4uB9qFrQCmZv95HHxK",
  "key14": "2us5LQGPt8T6wNErq8rTw3AdodbQZKLAQU1HATr1ihbA22MXYrob4hwnghfAxQwptqG3DBU8nr1Ambt6s4xaYrpb",
  "key15": "2QTgZGwSPuTQEKNFDRWHeEYsgiNNtFcxcdv5G6zMc7RBT8EDPTuGXHce3ACKuLTyoLrtvMT56JGeaNhM62D1FPHC",
  "key16": "52enTShLk9RsMmjP5LMMgL64d8MpBdowPpumM7Ke4zBtW7n5vJjfkAcj9SQ3c7q59AMrhJkfBMf5Ri75ekJwsiAq",
  "key17": "48dFR1aLgwQPtqaQeuVNTLjvVjXAqPDbk3ZFov9n2it3mxZnntUzpivr3TLTEQaGHTv2xcjxViCuDdpoQvBfstzd",
  "key18": "25ZuBoE9S6U5sXU7gsqYmaGzUZDC2PVfVXwbft8VJQNW3ihX3VEoaeqefLswKwM8PU9R6RC71oTtdNwrq3CcFxbQ",
  "key19": "65G7g3ufNGHgKo82sTTQbobaPgnDTXjwxvnJ1pYq2DDx3Fci3ZwdPMLhhoUoJRoZtgiDkVjunT62ZsGZfSoXMhWx",
  "key20": "4263cbVokDtex4VkA2icSJHwyz1htxLsfVtJVe7KJXkDmmFDQSq8es6Bcj5GGs9qqLXNBWi7v5EREp4dJscbiCyz",
  "key21": "4Uzg7VVxJRWj5jYM9zsAeLPHhtt3jogfFJ2cstr3US2z1queuMwse3r7kQhWfhgUipcSoc5gFTS2BVmHwG7HFFBA",
  "key22": "3wn76u3NPDCQ3nycdnra2s77NPTds7izU8pCm9Dvgt1DfbiEvcJuCwVw7NojRfABkMqjLbFGBHS8UWcz7GvQdQEa",
  "key23": "4zn1GrkMaxJedmRtXqW3yUr38m6sezXdrx5NwVWn7gK4HfDzk71362hd5VDNgiPXbdnmN4bKDBymxGL9KXJmrSub",
  "key24": "4FKrAgoT2qNUbjkxRpwk9d9Dk1Z3G3bcJstJx5M7rhzGqszDufqgBU6gR44yZ5qaqajHZBZu3JH7H4ZQSeE22Jch",
  "key25": "34pUYYkXcnvmC9ve8rxazUMLoz9P4LAq7siAm2Wv3ZNkJfKDru2UcthRkV2AL5V5MpREZT754qAoyxjKR9NENw6T",
  "key26": "2YkLs9mcE2NGiVU4w5k4qe9g8mSYxauCdWAfZPXHmSPV7casuJNHNKhXqrbhCGf5vKuYDMFheeAyog5dLmysCM9t",
  "key27": "3rpy6UjUaESr4kFKWMHKrkVrSQWLrVrgrPXeDKAxh2qpG2aRTyqWZdhbehm8HAkNmJZHWLNvHLFrj66Qrjrmm4SX",
  "key28": "2BomD1p88TCnEpozFFsVTZvnrCLnWCs9mfGoigNRLeroXajuC8NWPhjLNKt2agjZyxgyK5rrMca3uMYQWfUZbKuF",
  "key29": "C7eha5QtbJqvVSBCNLB564rmhw54nV1VB67p7APuX47EejyfNwSTp2JK1hi1E4RE9auhfirLgFfYNawyEnAXEoQ",
  "key30": "29jKyAtCxxhmfFVuPAM87NjWs3ZxdXT3HsCTEQZMahvve5oC7Wzm23AZ4k2FEU7mdpX1RE2Qevac8sL8huoPedUF",
  "key31": "2vrr9wtn23YFAzavBnS7U8fsPFeL127ZeGuk51QXg2QpQBguMfD6FkRgCHnBqHjT324Qg7AHx4nKLPATo16GfhfH",
  "key32": "DYsNDSbBREUsTDvRi4TQGQ2NbhxsLeRMk7QSz79NNx83xB23yMVwhgv7Em6aSDr49KmjLb78QH6RnPedZ4DGn4J",
  "key33": "2kVpo9hCMPPrHJ7pruRX2qVmj8fVdNk4mXXU15sG4YwywCFpQC336cren9BhdS15SExXSireez6bfo86PxqxyE3H",
  "key34": "2LdXYcUkJrHbNJvpPuKZ8QbHZeczY75zyUcWyWuoC76rRH7Q2naSknm2wC9hSQRFn1uB7piNW8q8T89TtrXdQWys",
  "key35": "2QMsbseQRPLdzkZxZ6yNviKQgDy8EaRCCnWEPX8mKNYLToGMLAh3CwFZkuk8c6ihcPr1GxkdY2mGwsWxKVSJDZr2",
  "key36": "3NRt4Bw69gxt3Bppnzr4JVkNTGM26gn2GS71irmwUCybGiWdALUyFaAAgRCc286JSeMHFeGJQtxuCMiG35ewR3kS",
  "key37": "55HDVZQSGqbSzE8em5HxvuS5sVhpb5BFyqiupCWVS9LnhbLvJq2EzwcBPipBKhwoBFXDC4kAfdVTpmpBzkRh4uvc",
  "key38": "4y4ttHRHrVBeHCK94TDoqZvAhuAurdo5vKT8To7fnaTmae9p52VzYe6A2mVrCFwG5fU58a3sENGq7K1FF6mrGu6v",
  "key39": "4xj7UTpTJjoemWrBFic5z7hh6BhhgRjYKQN15v4cxzbcKRp1DJeEwpxFJpHMRsYy2CafLfaTMqgW6QjMMEiM4Xr5",
  "key40": "ojvpPdWrGna6xvSJSRvp7U1vnhPhTJsrKWQq4ZcK7gjK3QKUrenLhQktG74Y4brJE8s64SKJeTZ1kgibWWegPtB",
  "key41": "5oDNFvFUt4ubxbo1khyfLuQyQHYMz4NEShUvck2rfqwF4GuFDtJotvC1b4QydWcLogbGsc9kjYBBcRSjjFuJRVc6",
  "key42": "3DQvk4r79nHZuHNwhz5JXKDup51JgigNRYm6uuF2j4hM3qPERXYtQDXETX6mdNWPrwxUqF1fA7KsXj2QAexLtMkp",
  "key43": "51DJBCkipz5tpvr5s9ykjiJUXaVoHaASffDtYQS7LJmMfMRxyVY1SVpt1zGVR6z5q1EHjA11QZpmE9h5YqGDpGrR"
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
