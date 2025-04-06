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
    "4Am9zvPZCw2y5H9YJyKhuVkVZgWPYjQRs1Pn9wa6vK5dgvTCMnda9rNr9ZhFtaEdHNRRP4aZkkLtWNrp2i2mojVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NDZDuV9kQEZf9aFRpmf2dbWAwLg4yLHtjjZLopxH5XDeWZmzxcZaa8KxUMCPSzmtacvUosvYnBgYz489TPEcQm6",
  "key1": "66yc2n4jfUSW43LDC1wgsoUTVSTkjJjbL27HsK8zDtkvDiQa1NcNgntGsyDDSKuUUgtkyKTNu1S3cQkMj95QGzgZ",
  "key2": "47QBhgZbQRXPCZT54iTuVWKN8jnDPivxYJYxCdTThCWNV4GpqUPzdFRpRaHsS6hENeah9q3mbQhFtbpDqqMp94W5",
  "key3": "3qqzkRt2d7K72vvaAgrfTTaN5Bqi5pVLN3YiVucHJMizwXgZ3W25A8cNemXwrqJSpTz2nWgK3jim9qqY2CgcX7DC",
  "key4": "4vttWYdRhXyWGc6G2YGi7uNzXQ1ZLpzYtN7bejo73HqRvsZvtQbqu8ghHCMfKvnipWHd5kgoTuUBc921Uk1cqcms",
  "key5": "3yFnFTSHLh9xx3gm8wBohhbz59rigkzhU7oNpj9dGd6jj9QW5Gb4VgDHGCpoQafwaHXZ4ScqkcnwcnbYNx63N4VR",
  "key6": "4w85RELFL9Yvef7XrzcaX8VHqtibGhsaUQR8Q1XL59i1M2rX2TZYXxRa8asYdKFEshoGE6ZywiWzDedSU7hMs4ed",
  "key7": "4KJA1KjXfJ9j7NcSFaShtBAm6VzJ2JQYCACBSYzmoq3CwXfhZUn2RcWPV8h9m4GQChLeBVAbTdRrKAYcrepWcnSK",
  "key8": "4SQ8ThZi3u6JnkkiQnfLKzCqxFxGqt14gBYSHNpp1vfYGdE8nGL1YrhirkCdFUReBnVKtxbQRELtFt5KsmXPzBuf",
  "key9": "2VA94bumvxKtWTtvXpn2AqzpJMLCxM76o3C3afJGimSg1m5kvspF5nbuvqsQGiyaMNm2onw3iSUpx3AwTULsUE3k",
  "key10": "5MKsr1V9sksyFAj2ZNbDW7W3WqdpwTCx387VqwqYNSqnk8Yj2PTJFRY6x5SUxhTnUS66X8vJ1YSe5ugksb9qDs5e",
  "key11": "362s1G26F12L7CTCKUi16tFqTTheMroGpJhH7aeBaJToHGADME4j1XShgtNbcvj6zWt1CruSRqahB36neALKV8is",
  "key12": "evdEwptW7jXAMwQntTms886UsSuHWGdKveyg3buiZRcnFfhuLZij5TZsD4mMznq7XtBUKxe82amRrzjsQYxCwPG",
  "key13": "5m6mcJAyV1XcVaTHKua8KVF5paMWmVVNyv1JrMm1v2b6HuVFihJ5x3oNqruGnZiXXPddrx1X93JzWm8K6o8Xp4DK",
  "key14": "5yzHZ9r8H5ttLSU1uC45y4pmUSVbeGT4t84urYnnaHztrKpCsrjBLin5YYWXWRurF9g4NdKv1LWbjmoAmzxTzUo7",
  "key15": "2ax5h1oQLyEN7g1eHC4bCRGyGhyHA8mwtyHoAVFSfEzYgTHyp623Vk1aUZHUF9QgbqcsQHSkTCE8acNRSmq9YAcX",
  "key16": "KdEq3z3JPkSJQofq33ikcHQ5rLYUKEonsGPyGtFjWYUL6EcSxBma4WPYui78tp2gVdh65BXgQfDK3cP4MC4GvH4",
  "key17": "2Ra4DS4xmiDhZC5n4its1hHBiwGv2TZtyLybTaVwm8aHSbuCX6ah31ByShv484UGQcTqihxd9aFbcT48uPQd6oNQ",
  "key18": "U3nPCwYJjGqUtQ7vXNdXtRENA2V9djzTAZoTiKLCzXDyxiFCxMxm4jx1U1Y2VWCuESM43wZvrhXf76zi5LqwdoL",
  "key19": "57qRLwoSXAWfKi9NnjGE5CfeUPuq5EGgwQvYMWhriJhHfHRR6wMEksLgAMy5z29z92X9ePZ8wheAVDibUdSiVq9p",
  "key20": "2DJafQNHBHhXXt47FNg9BEgCdKRu3wavyYcGVPJ8A3K3hZimnNjPtqMmrWX5fdja81Zf3e1iVMcdNkKF7JoPGJ56",
  "key21": "2EKW1n3FsS3hY2VGmnV8LCBhsaDdSd7mBa1EmgYwK6cradbU97gvtnuJ7WGXh2jec2Wsf3XcdbHhZfiR3jeqCMSU",
  "key22": "5savshaiqhGxuygHqu1jAMusEZpBUyRvnvDpUxhMFdFzt2m2vJsYo6fapApj6k9ik8iNs52VcAgMikv7KAEBecN2",
  "key23": "2y2qTQVAUmgnG3CSCwbQp7UJPYYJLEPF4eHdnbg2nR9GsSk1AG9Tia2AqEaBCzDswVGeNaPbTpkhUB9zJc4hqRos",
  "key24": "4L7onJfWwBYhUaWkSFh1gKCJKXQmuhem4hgGBbzwbvMsLFeTVh2z2FSPwBjtPKi2q4oEdTKKGr7hrAbCXEKkPQLm",
  "key25": "3yutnsRCxV6DqgRLnv7DUhp2JBRRDnhnb2kmr5HTT4nLYZHpRgTaTrgcBcTtzPWa5BXfJsbyYvVj8Ruu5t9KzWqi",
  "key26": "HjTEadMz132UTdB4LKrtz4uQdZmRabtLySPuijfif6GZv2ixRfR3etGPVL919aXRQ9Dzb3ZBTBYQrixXR4Tr1vp",
  "key27": "3sMWxip7xM9Hc7VsjaLLmQNVMzct5RseyJijJGirA2uKL8FuF3UM1BrbuYHL5mzW7k8opcD4gdS9tk3QKkEupR7y"
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
