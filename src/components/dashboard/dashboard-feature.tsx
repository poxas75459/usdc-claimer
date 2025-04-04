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
    "5RZ7Bk4W6DLYhAvEDCugxrYanpKJ75ipR6En7D6YqKif7EtxXjA26s9LACzxucAtsizAezxcHmQ7LNjZSx533sbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wJL7D8DNLHpb4LWrRFwqo5eLcP4L9XkM6KmATuB2txFmtYYvoNCKsXbdZNGb6Ck3e32t9o2oHirnpnua6NGbhFP",
  "key1": "f3NVF8Rz6Xmu4DUUiN2yVi2PpHd2oXrvuQoFtS6mJx2y82uuWHhTGk6Kv4zoHEH9mMJijjcgCRjjbzwsjCTBArL",
  "key2": "2FYdLfU7brEuZRqvMSW2PgiGNwwgA4W2fxwGaGtBzDhCUKckZYbDJq8T1bGu3wcDCLSZnX6xUzcxubDgJ5GptZ9T",
  "key3": "5Ta8TXzr94EWNA7U3W6mDeSb2cvA7gbtM91NvfWpLjxxNs4tz5ousZiLnBt8ML8hKZnFKKfJfuMSdRTkdmCexfiT",
  "key4": "CYsi5H119FVNViTeoSNsm4HfGnuGXGRzj633qf5ekEcPYtKgBL9CMbiXZS56VX65nv1f6xSwf3W8pbXhJCspjx4",
  "key5": "2RcNFnzhYmNk6RjFPvbmnCSpY7nyAysVNvzx33iwpooAcrEpsVV4nMdbQQHGxho3SS8hHnZEvYcnHri91uxxzoCj",
  "key6": "5dHQqboSgTJQJq7Q8zALGuAZJxFU5TczEHjQ75ruznfgq1wGY5ahVNPQ4Rf1kneBYYQ1Vjy5xTnQvK6Tk3pQbMf7",
  "key7": "3ducSc3n7QqLYEpEsv9rqw6y1ddEG7gRRcK8zxkVpAoWxtMB4QdfoHio9xh3hRp2z8r5848h588mMG322V22baao",
  "key8": "45r74jyQyzf1dytwnqSinHmVGiq2MJw3FVKFBXtpr2NejdpePzZXrr4JwCRpTGKtGLgecFht1SFpjyd8TwZRURhj",
  "key9": "4pmKovKHoFztYaptDev2je89pnr7fDgCUCveTP1T7PNKTYs5MmsLcStT78dnW9UjzJa4DwqRWjrxc51NMGE8uaSY",
  "key10": "4pp22SrDZLBfzAcHzr195qRMrKQsdooHd1SYPDUA6iyUzxXKqK6x4UYk7vP8gaK7cmbUw78NQjm1tRjmXqSL9NRk",
  "key11": "jwCisP6ywJmNmmRnTMyYvL4YDVXxToz1LbbRCo3nJBBPLW9rp2j1cmmfhakWx3nJhGMDMmKXjjkQJb2MszBMqrH",
  "key12": "5T32ewbufpSiS7YZGPQARrcGk2L7pu6vdF6t679fZv8gGNCiwXwcQMNvkJbbDMv1qmsokeHeZeSWE5Grj6xXCgWB",
  "key13": "2T8NfjyQHskZe6PQgiHMHnTgXghPyAsqDz4bEh8KT2iVvB8fBmD6exYj89ehbDLiA6LZp8T1HddN3y2JyFqzKcsm",
  "key14": "3K8FWi56BKwfJyH6LNW94VxqGrP2MdkmvqVgXHLshQerr4FQgw8PL14NARbmPyzjZ1sZFD4CnU35zcaXrDsATjuU",
  "key15": "4wcfUZnMaiqgxMFvj83VUZRTDFV7HiB4RKijBtnwRsGYw2WvK1eoKAnuqg7n7DRG93QjGq1YCFrS1xJ3dGTudY5s",
  "key16": "5TRingFkbnwL3Ervzug1zqy7MXajowbHSnSrjN3ofQNdzHZF9GvfqMPgGoaooqikzuuZBBP2UUCmpHxto1Z3EuGr",
  "key17": "53NxUDSymo7d66Ks4UViSFBN148q6SDkHSZDmdoxAdeFj569rTEEfH4naC6A2mtfbuZ2PZgfxBihkYSGqxEx8FL4",
  "key18": "531PVXRaqog8wEghtKBdSoXWE2N3ypwxdbQ13D6GX6Nab7VjASoyaPz4XSSL86gUbpkZXLzX86JtibuKJtui4N2J",
  "key19": "mGfQjoevqt1PP6p4uiqsjpLp8mXEieraqvM5caS4PE5SofLorj9BzdMudaBtrHjHrAbTM7iQ6nUeQ1p4iZXvatW",
  "key20": "4o6e4j3V92cy7Yf49Yy173MC6prQkXHnJKoP78vQZSto3B8861xPoVpW2MnmjzimtxYL2S6bxHFT48JvDZGQGcYE",
  "key21": "35VVp55CirDCt7A57wsvcF8ZgqYRetSqPkFb521d55Ro49Qbqvxrrn737X98ZiVWuo8CcWSrmgjDrFpUiiUAKPDY",
  "key22": "64tvB9XFe1tHjXLa2JpW2yVwXhJTWTPrEgCzuZZBqUs1KoSGKrfGBDSaVuzx6S5x3JjKH4LDQ6uZknE4LzngS5rL",
  "key23": "3JY9QzuhixJ4YMoJxcqbaSgmiScv8yuvkbeF6M9xP5K43Ps1dJCScTtMeaJn3nJVHbLHw8B8uBVw3BmDAcmYLEiN",
  "key24": "4Tai4H2xmrAXCyJYyyEReVxQSpPKvJ9hV91D1cuZY2DXZsMBHE7J23stdVVHpzYspsfYHQzraXBxxkmobSTpXa6D",
  "key25": "4XpB9k5bnqJPmQFqc1dQNRBtSinz3NdijSf8bz5aakhM2nro6JSrgDM3W4WikHcY9q9BUdjpYRfuVvJKMQSp3c5b",
  "key26": "mV37FuWHau7ZxVnn4YP3Yk3GutcsQFJdaqM6KVGUhHszNfVYccEdq4JmHgox1bFUHuXFBJVZaUNBvH8fsVGrwe6",
  "key27": "4649ncQYP7empyoakZW5EBi3NEYCeJtq337mkKBn7z7VYcKv5bb5umhgopTfSvLY8S5XdRZZctBCDDMp4Nnah2XS",
  "key28": "3Xf3YyoQLUBggkuE7RapunRQTYLFmoshDv816jYX92NztdAdNvQJdjgvcp3KfgjqNEhwJScneRpMWmbdmLFyrcFX",
  "key29": "46rd92Fw8GXCLhGTDnFxzxhHZuwxb2NF7qqtwvdaHkGjhzDjPnvcfed2KgADXsc1dENfP9xLSUqPTHfH9ei8Ygt8"
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
