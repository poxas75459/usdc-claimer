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
    "5otAbdVhPyEMnm6JgnoP6MEW1vGh7obk8DTHjxiDwEs1pYqnbXLMgihYP8BKdPtvSZQd9kJMGNWTLDUrqA5LCqna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JDBkXAq3uQiwBou1ZL4uSzbzBbndTGD3Y3hTfPe6FKgKfw5cihFsjFEHYybA1TFZEnPMKw2RhzrsiX1GT5AnaRQ",
  "key1": "125ka7pEKKVW4UA4boU5HdaJazpW6Rv7jQtf1WXEV29sA4tPjuqY4Zi4nfffSW2FtJYtaQTuQUcGdpHHtbVNkGL6",
  "key2": "35y6dVpf7KD4peWC7Stzcrvo1GPVBZWTdHyTFbzomn6fdNzan7cm6YZC1CgcJd4JaEQUbWtaC8KUS5bbAwNRjjcv",
  "key3": "4owyL5huSVbEqQBRfAmh8QB1kQt5fEUVQzXEoMnQYk25kMZaKoev2dYLbJNG3ter2GdfWhidtD5LUmuLidi7AzPL",
  "key4": "2jPV523wafbG2sSwDehQSsig3Z3DgHVe2jG6i2kEkYCCDukd34m5K43J7XBAdHkKc4jH7hWyeuYxbNwpwCn5Ma5q",
  "key5": "LgkxgtbBtqq2VWDvWhpnzN9LbhPznVszQBN4J1z3ik1YbWtDnWfDnnnXBoEAuP9m4uxbtZDwbRzfzcQeqiAZRGu",
  "key6": "2bZ2eM7tBudGQMKtsDP7gvy2KAr7WQbugHTRqTvRRpNzMsEoLycvt9Ec6kx2RdKC8ys7ryJrc5UZBDXn2CAyxUES",
  "key7": "5JLLHvBkFSmJqee8h1YjEjtyZcTRyEtreZiq6j36JNRB8nDP118PkmFYA1XN9EyjgMqfPsR3WggNNuTkQfiJDtn6",
  "key8": "2vM9LrQgfYaUZYPUDXEEpkueVe6ZdXFDjPthvYbtqjHk8EjcQqQVkyxamqbcN3Hk8tUY9JwiqxLdWTukJ5Fjiprm",
  "key9": "4cASdAyKwJAP31SrujEqAYHc2BfMBqxUyoBQm2fR6BYgUst7PREMpUhdWy8B1pDJkQgso6jujGhEs253waqahq1g",
  "key10": "w1M7y1YihfBJkQiRmkgQ5JtYGahLx5xCE1UkkGuLhcBLoDGS6WKfhuZy9izbTymvTpLiWbSkvLSQoejrVEQvtnV",
  "key11": "2Vit62WBxdADrbi2soCH37bg5r3xxLG2PZk8KbQi5iHYyrtALt3quA7KYCg4g5VRhXkHsj9uBPQ35cT4dmjjCqef",
  "key12": "3Ak5vvXXqc7bNuaoMhYEhhHUYkR6ZoEA7MwYc8GghUKoiSt6ZrdYcwawaiTEQUGKyB4jtPihJZjRhhEi6vQmz5Dy",
  "key13": "hmVPtyCwL34EgFXbQChhmKKuPyD8H1CNsZYqq7ryzLv7H16bAoiRHhjbLfhW2j9DEu4QMJ41H5WfgWtWFza8638",
  "key14": "49kNwxhc6EAGk9REy5H13tNL6d6nZVCBvJHuQfHkX3W3F5osNrYLXwjinfMuU1UBCRP2Gti2AYoRqtLGwwKaWrYw",
  "key15": "2oVv2oWDnHzhZLKVusyFffixedGpp3XVKsjnBcpCHUMjzuYDmQrBMNCw73J4qY7Tw2jkz8NzeJH7F35QghKmPcnQ",
  "key16": "tQWyH8fXav9n1ht3PiR9kUxzv98vRhkSL4dGqmjGminuM6kV84mFKy3VU8uv7f7RcrxqeGgZYPBGTTKMfGjiSiv",
  "key17": "55zcjs2Gka3CtEdbeD9AhEtt2b2d7eSi3LuUck7npHXTyL17fKpJ22iUHAejyvh9dQQK4L9VuuDe3eumQeC8ks6W",
  "key18": "4a65LX8D5anCNQjbL9ryc8zRqj8SFxRLeSb4TmoubJNVRgs5jq2Y9jkN8mamNRXt3XRTfp31MfgPcrsUFWVFqoTe",
  "key19": "24538WsB3V3AEmDTLLcyFr69VDXvRFSMT2d2QeNhn4KMs84Sidh86ta47232fkhH2x3DuGX5oMEwZ6jYfTSsw4Sc",
  "key20": "2fZYYv9H9eMgz2iCnfDmnZSu2SQZvkXMmKKpKBcGauQkNqbRyqBRMHoGyxeyH9QkwRaWsFe2wY3f4uvt3HvqokBH",
  "key21": "5dVp1ha65NdfRWt5KR2pjh9Nc1hLB3dPvQzJJcZ3vX5fgPJDz9nZHBWDeY6LEaoq65vw6yoPK68EfmcvXCLaa87s",
  "key22": "2biEuegnhaD6TyQ6tgiL8cD8mpETHs8gz9og189m272WaFgbSJJrkmUL7koEB3fShiCyrXQfpfmrxUBjeaGhRRgk",
  "key23": "4MJnHEE3A3Q8nw2f1c58jdQQB6Df16gKRBWt3Hp4sRmHYJ3aRxSU7EiFjGqghq47ek6DC8vVxFG9q1f7QMqKUz4m",
  "key24": "5ptZ78Gsjgu14q9RHgW55Ha6z6WbcsV9318UvdEfKkTpt8iKxo5rQ5pLYbsaH9xftnAm54Lov2NWbqdUU33KMdhV",
  "key25": "ajPbTc82Ao9xJqsGUy71LHQTQ2iFDU6CUYSzFV61B72aYWNkPSdYwf6wFLCJHypS25HqVRH7QW8u9cUK31QEax5",
  "key26": "3Z4mPC1dxuVWJDeiAr6q5tNxUA4DjuZYfDwKcfVHyZuA8KHBgeA3CVYY2XqcrEWaCvkWcsb9XEGYuizwKoHR7Z3r",
  "key27": "5qt2vU1yQQ3BFyW4vWZNuCsPRTTgAiJ83x2U1X3XvYmyNE4JXsVWL1y64vLoqYtezU3UnADAJNGVTAzJS8fPDW4X",
  "key28": "5McZQYuxLd7A31o7YAbKhD8SPANB2bixig2aGgkNGRcevbwQSTPGqkBRefyYPk2hX7hATWfxTkMgrRMH92jqr6iz",
  "key29": "2pK61sRz9j549fNofZDcP91ddM2FJqRrAxCGo6QJ2ByNEv33TqHW9UiQagAf3u9mELane3wLRVFJF5jt6QEnjWaw",
  "key30": "2BtZpVZGp1Q8JNXiFG4kTbswWpzZNnCN2Y3CcpoafkyddWi1QuH4tVJV7oLYkvGFQPekAvyrTQRJVaFpP8yZnSkK",
  "key31": "3fBXXez4R5rUMstWbfkrgEBpHr8xhR6N4Tm4NsemyfavooFvHA7wMkyiuToTzQm62NEAYeqeTuidVu9HNu9LWQ9i"
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
