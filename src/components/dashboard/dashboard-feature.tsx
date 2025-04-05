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
    "57KDvEssyJksfUGyNYCdPKodx5VVA2Ax91EPbVZbgmJCRGRYT2NbXkAXCRbehrWV8BZQ4gnEu5QXYcn5kPzWj4do"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EPXvfA2BSZ3SCWRR2gabLYSP9Nw2Z85C2NJQyAsA65yx9DKR5iKmvjhWSVfHaJKWwQhANpMRVJCtbynU4bGiQbf",
  "key1": "4F6h4z5CAEQHFWLPeu9vyQiuP2KLEAJ1vEM2LbN33Zt1hYRuuJKDTvBGe7irYfiGXb3AncCD8PGD5kt51EuMjJ7q",
  "key2": "hVk1WvUoFkk3n2yrLjiBF2hKFrHgmsgnT5yxN4x1osBK6UZbLCiuuPfBuAENhyQ6EDaCHEu3KfPmZpyUERHxsLf",
  "key3": "XLLs6QyPc9tvGBURDTTeHGkCarUqj4BQ86KgcDeLwsU1HS9z7DuVLBorQQwKG9N2CdNH2mWUWFbDJ7nMvXwTC7G",
  "key4": "3bkGE1PcquC2UWpZeVmF3xfVSSnGXkaC6gQKb6RyBziXAUrUbrMgcKRqfXh8XBUMAKL29yQTQeBY9z6nMBrmxepp",
  "key5": "3oayvx5z5yfUrZEcFwMY2ZzT7CiAN2eNtLTRXozfGR4U5gD5fzT9GbJMD9N8NsrZBFUfEupMQi6xNHJnb6wbaQzf",
  "key6": "5UvyoFEKGs75UpK5e4dwWCWV2dUufQC7tkfuwcyWVfeweiT2xGqz6ThBMZdpk8MAcPHwXqaPVYVXzfR9aiYDVA9z",
  "key7": "mGVan1oCtvmhcQT7oGxXTSmyP4q9LD2TX4HUGpajpqjBphF8BC3F7fgYTP2fHM1t1XNiE4dELte1K6yzSSumnNz",
  "key8": "5kqChU4P3MBx55tFN9JJKJsqeYHQcZqDJG4jkr3tyTPKPPXDKktV2cTE1QbbTzwabpkooWFBmaeuVcxR9uqJXP5h",
  "key9": "aAxLXSza6fYecKMRhPNndJd9ycfvDAQpEYYepSYi4YvWTqHBv4Ek1AKgMqev8xK8CzdWYSW8ui77ki2eESgJwLB",
  "key10": "DD3jbePkk8VNnAxbge9YzKPdCJhG2gXRyhYF85Hg5CSgp6BdoCcauRqUQFQreDopRSgmnZStYCUEZcwo9xADxX7",
  "key11": "522tm77XNZ444dmWbQyJ6wtwjnkeJMUoDt81WbZZS8AeEXNJ8n2rK6fNBakfsRW8Cr5Rom8EXvnQ4VctHJg6LofJ",
  "key12": "43DJB2EKYUPB4E9PLzCu7JjKYdxoQqFD7sDmVziNzyiTuKeuMhycz6d2hu4uztPXSABj8ryx6aPCsckj3KXsHeuM",
  "key13": "4KP8hVXHC2vYJumoZFaZH9CAfAYcNr86HsJ1NnotsYBeiQECLq7RHaKEc6FiWNqAtMssUdsVCsEt75prsBcFcFvi",
  "key14": "3BvnKpKnecNWxpm3Hk9jzD7Mixf6GSUKBrMakhmsTocN6t3arFHL9nNA4Tn3NAcSLPH7WeXfeEKtzAe3gL8C3CTC",
  "key15": "q8L5j7cfXnxhhtVVg7fu8pm5fZuDGojeky9fNCgaepzGDeQhkEp65GXF3c7Q1YqR2ZNQ3CPM3Q5ooXWzFE98Adv",
  "key16": "4z2AjiwNCKcbVHcJjgDxZZ8ojTaGEjj8giRSctNZmoXM6Kdx2ELxLMyJW2AkE8A96NJkpPBePTgUd2Fm7LXScZ5r",
  "key17": "5EJPNvatCpjPepdiUJS2QEEq4QRkvDhb7RyHn4WDZ3dcdyJCTpfr6uVAtdWU6huiPkQdfR7u4UDn9dXSGJ9N71tm",
  "key18": "5MtU9RQV4MuCqRQz4FuKLemWPwt4REk755QDEY4jqdsfUnvmFsE8Qem9G64cQrXNAy3gMgD5ixEHT4Tz5yqfuSqN",
  "key19": "4UwNtvCqmzRvTZTfknoAyHYY34RfqqY6XgdbZZ6YMzxvaf7pyJANhdqBg2urD83SKzxH7KL93nejx8FySo3siNud",
  "key20": "3Tm9A3Z1SCgvw16RFF7u3iXtDGBrAKkHexE8S3VbFaFJGsWrdeBako49xgD5SVFQqjQgb9XNaF5gEtHhbabsm9kD",
  "key21": "4Ay9XwubrQSSYGNKQroVRTw8pyKLuceQvvcahRHy3zGJ6poSNX9v4ZXb66g5Yenz1BTuaJR8r3mgrYtAnjo8y7Sz",
  "key22": "2hyYZSUYz7TTjy87hvYiRFMPBDexRBQtuZbCRBQoNBvYQeeiNhNfg4fERYiBpNZsxYVFKqQPg2MSKFADbVpSwunJ",
  "key23": "4ZPWURU1CdTQMvDpyku78VEnHai221B8cxk7Z6N18ceFUpnfULGPhKXkNUZLD7aCYEL3Whdf8Z3y1uroAyFG3bCB",
  "key24": "5YF6g2R3RTbHW14fzJUQXs6aEMdUF7AMxNgh6LLP61fGMBGZkbDUN5AsiBDGNvryUhHuAxrLiVPKZ4UnbsPJvP41",
  "key25": "4S5TYzkJJb9WxRcgmF4af9ArrKzR6JG93fiyYVrZYdhM6g2Z5MKTLzCy4dF1KTG7HSURv8UQC2SzfE2qy3DwSJop",
  "key26": "4NFoRRRnV9pFQLw5XnA6SVwiUMbieNb8V64H4B3Gb9Qmd47T4AFoLLbbB46FhpVtiHYcuhyaX8dk4jxBHtbw5dVa"
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
