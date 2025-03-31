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
    "2vdrX7QuP1D8UBvz2GzzGEChnoaVtEPCbwunjazv5tqaVySV5s7VZKpxKtySr6CKp1ENfPgsW37mvztkjFF2ymHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CVtuCyFqPMuwCWHWqMQpLXaT5btB3FEFSBDQLujZhiDnLCzxaJ6U5uWwJe24YGneXhvjPfEd9z8EMiK4pNjEUKb",
  "key1": "2JyPxaDwpTueN7XzVRZW6f9ULYQbGhEv4M8Y6nzkme8n6XwPZJJTkxEoWQAx1gtYKzmqpYV8LtYG2yYy78H1CudW",
  "key2": "4bfrp85fs2UuZf5fTBR3AGMCXHZmHezibm7FNH4n4gc2hpsTpCG5eZZbkA8NsVybUcEbNQy3YXGwrCUNfgAqfYj3",
  "key3": "2MC33xiR4shw1WXS5UJZVs2TBCTf6kZkUDQyXjxDjhCCem4sa9iLwdA36ZC1mpotvPE3PYsJx7rLeuT6XQZAyHs2",
  "key4": "3bhReJc2pDK6wXgkE11CfTeDCU8ZnDiupCaPbrgPLdr5zMo3S5vP96qrU6nU1kTcJ7EvBn81KNUodT8yp1jhCdco",
  "key5": "5QnHctmpBpv4t1omMJzr1fneQwAC1UkP7Et9DCpyf95zum6JTS8pvqSpjYW4aBbzEewzVwLLP7CLeB6hXx1gozgy",
  "key6": "5vvYd8yry63adPba15FRoXPkRxXSB9TRa4qhpZWP1yvTYuUWhmNWAx7bis42YjstZ8V9j1UESSA5zwetSfqTujjs",
  "key7": "21PSfq1VYcCn2p3pmMHuppuGt6iUTSd3y4zwLTnkTxbM1zZV1crZ1dKxW5FzWWrH1pdeAVa3cbBWMcH44kuCjBFE",
  "key8": "4S8KwcfA4C1GnwFuQkHaWDwhxsekfMAGkgGXQRLBppSbLFUiNHAGeB9TiNwYFk9hMN8fjhc4uCVDzY9WxqoLRmoF",
  "key9": "4XGQwaK4fdyCicEsmFfqMY8Rvw656LnsYki9XRXt6EQeEkvzeny2B8ryjwom6WEf2MdjD2LoyotgHH93FuCgCU2E",
  "key10": "4CsVyu2op25uxxzD8VWezXmZn2J4fuMcs6fxxFTNuuCA3dJGuxMknYE4QWuwT1Y2y8d7YygyoPtV8TKX4u8dYhy1",
  "key11": "4BF2RYHwikrABFE9UhEKpfgqvBN3Lp4mhxrn2D3NfGgdVbXA69wbqova5cXScoZNaGkWT1wVp6RtxRyWAJBRp1pf",
  "key12": "eVTLVDn2bDBuAJzV9Mq8FAr1zeqn5ccUde7zTjTLifVP5PYRnsYVQyDAZDrt3s4DdhCsfVRwkghrRiR1ESpDr5s",
  "key13": "53S2ckqsqVh6XN7cDZwZxNJXhcdYFPtHGfrV1WRVWxWxhC1oR3YvdABE4SQaVTQERJD9CM8mpqUdRducsri43LKZ",
  "key14": "2DeztLHLSbpXSx5YhBTavb7ucxCm44LgqXxMJKDkJmrukri8aWCnhwmKjvtnEJH7bGGYFkGVGnJLWP1DYfhSS7EG",
  "key15": "4AEvSRHqmXgfeceZpsbq2BVzej4fLoqrqrTUT1tivFgZ7jFGcRx8U8fXcg2DRp55ixgryjyEpHqfG2SS58dHUJbi",
  "key16": "2MwaQ8HtKJ6P9XWj7swGUUf3sv16uoZQCw1GxcGMcrH85KDYFmKkdVpqyNZCz7m98Aneatj3ZoSqXqT8xB6FDLGe",
  "key17": "5WinhJAuUKoHaMTJCTpFbgbKYQEm6WnK1XidqSmvjRrgCoMopnVo4r21cRCLR3F8AvkBPLTKVybZikMVW2tLReBX",
  "key18": "4HY5YP9pZLjX6YGTKFVDYRrVMT5aTrZwfEwh28KjDqk61H8VJ6ZF7TZbBkHoCEFXTZa5pedsDmcNES2N2TzvDSTL",
  "key19": "28ftKaURM7UwR73ETtp8XmYkFh2pevJGZJoqy3YP84gALbcSx1augkBkcrnDZDBfAf51oNFKcCjKavL4HLSykmEW",
  "key20": "59R3Jc2LXZcmoKaYkBPhfh2LHD7fV8NHwYLoKWDgT965MvLY475uyF3fGPj7e6CJQvQfeNmw9r7B8WGjJVVLxyuo",
  "key21": "2pkTc4FB3LhkVBDfg5xFheP1FctJw5ozvmZoqcUrZtFnHTN9iPfXiqtBYmaiGunQPQeqw7EpfF4fkkR7VE4y6XgS",
  "key22": "2JV8r3UM3Ag6TKiFLhqzbaibqaUwYHtByfAy7PCb6EFSEqEDufNgDGXwPoZBxxg7ph46Y2AdmJzLZThEEgBbhVbh",
  "key23": "5TVGiEQu3tSbzsapKiPh3CjE5MVJJyW9zKzEozLsDY648bBAsARmy7kD7AcfAH8xuZRqMuCrv4ydkV49Gz3r8CDS",
  "key24": "3qQF5sp6nvdqKZjW5TMvDtciDnJXPKzzwFs2yd1SvNE8VK8GLmkzEL8Ya4Q3RhYKWiu2bUXdZnYybLEZk1RFPMCD",
  "key25": "2jD1ykj996NANzem3D12A5HfehR1m6F2cjdRw8KeQfBn3u5Y4vxNdHY8X5NwBLkf8fktArsypZ1QQ8p8cm5DwaS7",
  "key26": "2b8aD9uNvmGkmhwyymesfWd43ESrtbqTBeFa2CjeNSBLsF67GSqn5YZC9FRwg1YdKqsPSc68CNUtUuYFT17mDtw2",
  "key27": "5wT9fyVgMTy3AAJzkSnKEsC5P965VABPMUbxfJpXPyrnt8tkeKZDMqsiUZNAFb7tDHiDy4q8XL6dqaE69mmwDNgB",
  "key28": "5RFw26Fcu59SparG2wJvJe1HGLjcxtBfBZUxsqcWL75tJ8U2mXqxnPfMhqmZ4Z5asaxCc3mGchsVw6yRdAEWzJZT",
  "key29": "3WuAK7ZugUeDso3Xku3hFQuhPzajQ5MwZgUkm37jasj38qLUtLWNNSUaTUSWRDBfXNkxFRdHYJFiHbMdpCngZUoQ",
  "key30": "B76YmdaGyya2RZPx2iJMvi8ABkX6A9sT4Ug7riZP6WsSY4n6NYgjPZ4ShnYhdcWr73TVg9deDUazJ7hLLSctDFd",
  "key31": "5BJVLKFd6a58JDGy6WW2HxVscycxkJP2pwWrJqHcy5xokaipSxkUHsGVecy8bgaxmYj1i7hywiWBjCqm5Vhhgcqd",
  "key32": "4TRUKMy1ups9b9AqJ4soTJzn2yfKnbZBgQmze3LwDi7yCJ6R39BnoZ9gwuB2aL4gZyS2myCQv4Qh477uYkoA174B"
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
