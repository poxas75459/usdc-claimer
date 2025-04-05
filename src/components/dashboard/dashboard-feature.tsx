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
    "CqSexhsAPhVdBWor4n3bTaLsNKWQja1UirNYPLsrV9G3ygkCgfhn6W5Z8BVwu4tJE9TVBMbADJMu9bSH2PCtetg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pppaZftZBw8kzLmUgL4zcevqUvzFKEHAuU5uZJgD5dUoeqXCdgEALBqxdZb9xfq7EwQBQPebJ4HY7pQZdhSUZXj",
  "key1": "5yC8uRrwYXVSko1EHRQaUiUWQsVai5TBxNEoxZNuLnKQoRczFswPi2UnxJngmAdYWg8eDpx3MtKeS6qRoWNfH5w3",
  "key2": "488pnbNZV8vsBE71kuWhhEnu6ArVfBGuGAZf6oKQUJqej9hSDgK7ZDMRF7aQgmxP5BfxkNb6jNPD6LZR6abAPCb1",
  "key3": "BiRrP87b3DbHhxVQtMi37jwj7zpafpqtpKW6qnohvVCpHeUJUXDHWpUx2kF3Bzvkh2gTMagbkdJrXNHMuPNPmLE",
  "key4": "MLYBXvoZqDYUeGqBC6Pz1rVpTXozv11z52NgKc7wcDGTyi4bKAgHNM5MdhaLxGAmMwNx6TQJ1bibsYQpXvLQpBB",
  "key5": "2wCECVo5GuusP66xkksQdjBGGTNFJGAgvvnvtw5jfJbXUTAnhmrvDGFRHfm1yWNHg3edYuA6P67ZgQszdoTyfRzW",
  "key6": "5GQCYAvpWdWYyiw1A1LfFa3N1B95BnC5SFyH7iVELmUVNrmeUAqKeL7tXe1nAXvK2oPG7zbTyAat32ch6xDa2q8P",
  "key7": "2AMXXWMrrAWjm8Ek6whMX4vHatXYscZJjejnEv9rWBwbKuk9qPULyCxunhdP2yirjJwU6VwitVGVmWQgbVmsDhf3",
  "key8": "VenCMbdpUmFYUm9GZB3RCMaLYo36FgGAHT6E7w6euUA5kMdHkhSWz3dLrmn6zPS8jNX3jyFFsaEncDBHbFQ3bSk",
  "key9": "5xn9848qB4YMuAnPtr3pzTSa8hjsP2ikYKBFGHoXpKN3CqKG1YbmUbtk2me92FRdEC8pwa3hm5cWftbCLHu6396n",
  "key10": "yvZXKmUvamdM59PKxBzkGNBgf3fHkK18iCZ9MErS9TZzWUctnaM6PEUGV7MbJDkMgmaMWpqqk1xSZd1ui4f2mZc",
  "key11": "PNpX1nQF3ko4KXNUvET4gH3VDYRwCposyrxZQRFqeZPy6xHCBrbcB4wVVzFcfxqL1Lk77FoHZ3L3sGPXesS4wHu",
  "key12": "5qGyStvEarkrn2Le7hy9GstLJgndxR5ErYZJ9Pfj4JPVb2Q6Je6WQXvsPXSKuxn8YjN7VFsG2xBkfuhfYbYtgc8E",
  "key13": "GqvsFxiuk12WHk4VGyzdKzJ7MbW4g7GkbiDpfSV6ixG7yqXQyCnKB88mGEbFsQPvxnDQy4rtQKZTWCMh6pNJAYf",
  "key14": "228BjNXtDw3jwinNY3VFSr65uxy25mo1CPUjqw86rn9watjVDT5bNK76EFmZGKutqaoZqk1hKauP5UaVSYGpSXTH",
  "key15": "5oo2BL9XgzDdRzjgJFuhnJiM9M4XYn98TGDvFGgHUFE8W8VWNQwJLqmafL6sbf4F7y8uEHm36ZV56YpRsNvXMskx",
  "key16": "4xbRx9Xs7JxmUuA8hyW19yej9hBLRbWiSuBydAppqvjVJDVGeWoQKPtcUmnTFEZrMfWi1iBDBZ4FBKuJhhsaDeAG",
  "key17": "nLnYv4vejHmqxwheKUT3vh5PoCMrBnCXVHgR1KWbzjp3Pu4SBpGnT8CFkdviCLnucdBzpVWHdeJxbM7jpwKSKRS",
  "key18": "d19nQUGhAucipgnG35uFxGnUqSmJkjLrusU27XjW51V7BUCUGGgmAL29yrRHUbHGzmUra8hZHQhoQ3AYqkHkRSz",
  "key19": "2xz1Gn89eV56cNx4rdzVZjWTe68KWy1V3QZx6mmAkqN5wMwvyYQH39dDcTfgwHpWPeEvfssncdGAuuK7KEg8Hmj6",
  "key20": "4WU5yUqwcmUxoEP4gtQSmsa9kXYmYM6rrDD2WWqqJYyFEWwFG4bXxfBYfMPVTwEF8vgy7ETPV1ceHdw8sK863KjR",
  "key21": "3ZNVk4XLziMQZYS1iTcJSgvyWQWseATuW3wi11QMiCQWtaWa4sUpLvwgS8QR8R1LsXfNCqDzMGNmDhDPgGSDB1xx",
  "key22": "5Z5mg6RQk2DndoRtXqnRw9xdvWQwMVN9BbFpLgDBeoLkg7LE4pNFcWfcDcgBCmEzVR8sMFtWACJsxaJrQqjytGmq",
  "key23": "2iejZb43PSbWRDr6AeTQmyUdRkDEWGTdH8XrYA2U8nn9LrmPdjXKWtiWeRv1VhE3Mtvr2shBfCTx9eBfhVtVr8W3",
  "key24": "3q8Wya7honWx2gxpiLVGDunpYrK9MHt1MSB8GZ4V5GoDxLrKHFXZuLZGkrKhkV44RQ7ZxK6mFM7b92UXnGi1MBZL"
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
