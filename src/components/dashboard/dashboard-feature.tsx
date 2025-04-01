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
    "5qwVVgbaTDFcV3ZH1id9UY1mzgkD4mRyinQQqAqB1CxHmzXLSnHXpRZjpJQnANFEDEqhVDgRusYWAcykFgUr7UFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DsoXamUamCDrAT1aconVMqueU5YQhTLUnwU1ohN4nNDThx9zVnAgH79mAX7FrojZCyuSJ7wdLCA1rvSmuMgoZnE",
  "key1": "2e5y1moGnLLQ5MaJnw5FpDu3CkDtC3Y2KtGfunvWM11hxXk7bsCKMjisZD65MzWXqqqNjWyG2ayjACxCrYvFGwk3",
  "key2": "27vGXUKy7dYBdNFzL1TYSFSdewW5A3hU1npvgvSX8meuhz8oCwdo3M6Rqh6nMieYDh6gQ3KseZsDeoXgExJRzwZx",
  "key3": "2hMXRHQ4PJBtLTZM7RwF2Hjz3Mhkni4x1Ahq5V9JMSU4sF2MemvcP6uEba8LxxMerNytN4xh1YCNUtRsiUZSovzU",
  "key4": "5CTJNWzzReUcZ6z7CwfHXkKStzf7XLjXo4EhPR8xADtBhaVXWSaKFy7UEW2djs6rYrb3GkpbBTkJnGDkXsoy8ugc",
  "key5": "2CXiDGdbSfq6sS2Mn1fJ8jEx1rrCkptisFiHXscn9wN9yybhjEmgyEpzeQxwesZwWYCJDqDAQYfMwZJpyo2wjKWs",
  "key6": "2PcgY7TrotHrTnCYjKASBgrNGqrGdtJAdhrvnxXnYhMyJFLe8JrmyLaaUrouV9Hd7NnJzDqQJtyAiqZvm44HHeaw",
  "key7": "2oDR7wjTuw24uE1TgxWUZ9mXedpFaTLJwAhG4ZwqBWz63CDHMebDgYmPCwQoh8NjMroZ1wnd2GZrFB7zM2xcTXEB",
  "key8": "hMfuQJ4Xx1kHL7e7mDmx5veYD5gumQDq44Anz4niRVCLEqy4KgUyappe3wKVUAtr9pHiVBxs4Hped2LNjGGRdEy",
  "key9": "2wmghLk2KQp29nMEGc4uGybS6QWnzdGJgMvsRGqEKLHe6cAxRVvcgEzeGtKKiA24BmZDFJKKTnhyztgHReYPpzna",
  "key10": "4szLTswj7o7Nrxn5ruKbjCYXnwtzEM5ahm2qK4APs2wmxDpHxXXDXEqAqJVwP7LnHiUxjiszJnP3mQArDq3E3CaR",
  "key11": "47QUNiP2MGweaJHZq2pdfGSP9tjjdU9nYx2kUmPvnq31crHXmVHqqK14GnTkwiB7FgbPi5NH4B4oPzDxV531PS2c",
  "key12": "3qqZPtZK2U9ALpVHwQbAUmqntwjcvZsfuVEjwEAxpUygyYM2sXVV9noKYqRrQVttgknPDfxAkzEoMX3zpR9e2iG7",
  "key13": "2FUunmhpjEqWD8QcBpLF5SnNxgRsSKpWwDWK2PAws5s3AB7PeT8SG5SJ4RwYWfQ5ATEq1CzbVrPdRTRLKx4JVui7",
  "key14": "ezrupMMcDUQVJ8aXUDq4TbSSsn9HE4nfNrMGsZsBo3muRDkbjdy9j5rH2CSuHeM7Ki6v2Hewf5MsYktT2YtbJTf",
  "key15": "2MHnGJBJdxxBMV5PREYi5YyUysyRK4QyPhcaAJYqvTXAi61azDGryJysAp6HpYyMFuMsn6nEFJSLbEPom4XsCHDk",
  "key16": "5UzLAwuuGG8Q3cDpjMdUuSHEEULfk6wfS88bGAr9Me14SNAGAUD8YQTq7SgvwnmHWkLbx2QSpr1csbXL1n8vshB8",
  "key17": "5QGk4az3amYj3wTw6Z76woZWJZFRwz6QsRuWDCTzh1aMa2vG5ZCKK2mFmywSbkwLmbtYiZfvxgAoPcNMn4dGWQxY",
  "key18": "3PWtMP8nQP24gUXaMW7fEqSZmSg8JoB4WWtK9vXeVQMRH51uLuvbJ7x4Ded2ExfW215q7h2fyu3YdKmruovjr2vi",
  "key19": "SS8KAysxNmEHjhtRC3BLxZJ7wcicwCoiAfgUqsbpnUTYq8efJSZFy7Dk7E9hwZDwrSCaRz9mRdUTV3Q6xCHwzmC",
  "key20": "5sx7Y3ubh3eFiSwJNj1TP5DeWqeEtx15hmMdsnkYzzw6QX2JJWKW1rWzhZvQxb9PPdrPUM8fSkwYJ3crdvZYwumW",
  "key21": "2uzvF4P9gNSNDCJmJQQKx9TYWGK4jfZLNNHJ9im2e7Fqt6Bm4zCXzQ8poR5bTFi4VPgdzHf8BgnT32L7FnS2uJL8",
  "key22": "4a4PUyVGHGbAtrd6QT3tgcK4yNpekd13JQKjXnhcCHr96GnrD8q6EhBSUvokSVaFREKNAoQCQLx8VNhn7XfKBvs6",
  "key23": "2KHpUbTqxQouVEPmjFWRp3ppQMFjMZ6TP8SFHsDS5H1savbCazFdtKhbPKBg9E7mnABsJUKAt4z9SrbNpMYEmnq1",
  "key24": "3dMmynGEkZijQ1F9R4eox2LG9vdaab3GWDxSVs1T8VSW7co6B9JKSwrxyzTAoeK7L2dZn4rVsGr8WWc4WUMvtrLK",
  "key25": "28m2xJCiUBwMC7fYjhNrWQpHtJ5EfcsGLzUB6LHDwWwZmVuvv2JfTdkSqcFQhJQ9FN6FEtkR6SERekoTFm9KEvj5"
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
