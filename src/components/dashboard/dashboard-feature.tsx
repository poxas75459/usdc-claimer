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
    "5yR2zk7aXPqtvxyGmogTXh8fczoxB3nS8iF4xqmQCpVz2FzH4C9tFt1tryikTuLbv6cCousbAZM2VQoCF8yPt1kp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kWACg4vtMiEUuiMFKNhbQYf3Nf1qoEChUWBgpHpg2GEWLRv4LZ9iiXy6iau3G3jZYqxeUPhqXDVvJGZgPairQw7",
  "key1": "54z2vsF1gxRt8f53m4JVLGqku9a3cDEmvPpPKTPrvexNVp4QXnbpLLqsVNZLhg7amcHDVLLGD8q3Z7xYBu8fBLFW",
  "key2": "3DwQZg8QFVagNHpad6qxKJocdMoGXabdKR5Cf98RdgPRVwvwSckDfUor4RF7hd39j5DSsaPw7dAjrfW7ycvve2Gb",
  "key3": "62jRChL2swhdfD9j6Q8CZ4vv7aLXcWWmrW6aDTnVUypvQAZh5CWqtxn9MLhMCfoWsqMtxJhzLtyDMTCrRCcZ3fBS",
  "key4": "2rdRQWqf36fNccgNUr9tPQALkexNJthooapX8SjkhEwDM5zRyffQ4rd3GK78qxWmooZcSSWw8oUY2Swb3vezdacK",
  "key5": "5vKNmcsN2H4F7fz7ZyVuM5e2CH5GN7EuW8UjAmvjGqnqe5igMibnHumrT4Pf6N8KBtV34ZXa5Bvbk3fB9WDbx78V",
  "key6": "Dym7pUnRb7aajKGDhJpbsyzARnvi13Gr5yKfKhqAw2VFDFzR4px5553SvhqSWGp5S5YotYgvov7mCmxXaQXie9K",
  "key7": "5AYJ18LwB2CDxL3vBAGUEs49kFoQDyAB86gPgmnxdibtwxAc7pFKzJyxYGmFEbU3h2tDPrddezr19cuidiUiZdCR",
  "key8": "3gDnJ3CdbGRQaDkZr3V5aV5k5b4weZ8S1CzYRy7xp1xsZVvnrJ2o5aFawEvAqmJhhyeLJbY5i4iHwVpApKKLzmBs",
  "key9": "XinDY4HorzgKM8SWsKxrh5W2mFhv9o3VhZbxBtDxf7Wpz7QCZXKs3XDdmRPptfWakfTUrwxrHoNDKPcSxhjHEH7",
  "key10": "4fDVTtgLGNXMPMywEK6wpQZJn5aEj6yP6K7BXkVeHrdtaUxZE8aq7uRj9G4mVHyFXgACvcMRi7QWeW5CQpCTMiPp",
  "key11": "5HJAvigrqvcNaF53eerSZ2FZjjyX1tY4VaoFvcsuj9EGTq7ycYKGnZcQJxUzQRYd47ExaNUF9AFL9LvQUCG59gvy",
  "key12": "2bqGSAbA5PGaDeChyjiy3aT4V9RCPbkCYZPmjFXVYp7KJLU95M3GBL22phHFZkb1kkhfUe1bhcsJTrGRC94JG5uG",
  "key13": "eM7vTcarW8BBWEsDE2trSiWsq9RPrnfdVbQWRzmaRgzUcrihTYMqGxQQsf8zy89Q1fc8myRdhyfFFjU8NLf4CPt",
  "key14": "63U7JMfWFW5Qmzi47DMz5S4CgxywyTqE5PkZyTw44AZ7zGhUuBnxgM4PV5yRVC6dWwYU5fzj2v9Q7QJg47t6Eu9V",
  "key15": "2G8kuQNPqJx4eojgzZADNcoY6q7XocqJoDdXh2NQjREXqLhtKeGScjSRF3tCxhHz4odpRNZxieTGqCjP3bgzqLGC",
  "key16": "3fsgtZQwLamEGgizqxGHnL6esg4E6wrsmBphH23GAXWketCeZ7BL69awJqrEkrpNBjmw44pCVE9N2qYS34ZiKG67",
  "key17": "3fUQmVcQE5PMwYgKxmZDT9G1WGwXc92akKTDwhmEEoaSygVnfpcxcM3GggxEEkri3zyAFtGqvTNTCQ7aTPsxen1m",
  "key18": "3j8zTg5iq8L78VGSgVF87CVjVWr5SvhHks3cNbdjwbzLUCGeuLPFgAQQ4TdJgfG39W9pAS1LR4QhV5H3Dpvp4zYg",
  "key19": "y1uMLgBR8hQ6jf5oAsVhfrw5PEpDcGyW4xcxrEhic6xUTvVMmzjRQ5F8P6eH9DCj1LiT4USyvP3MVMNsvETTXy5",
  "key20": "4ZrwbGTXNmXNAwQKDgFv2AFrdZ7y62Ke5tpa9vHDsXuz2pEDAbDG3wNa7zP5uu76KbysrkCR4apM1SVeanZi1BCD",
  "key21": "5niAjCGBrBSgxnush2w8xF5yxyZgEwwLpbdZQUR1t1YckMUVaD79eidwBdqAZf4KHpoTtq8vwFMdJFni5YoQGGiq",
  "key22": "2PmZPWQ2wnj1XxKmUXMzDaX54mevSMBwVwSuQ7zptAi7MidyBb4nAgvXqbGV7ueYtzQhaDM2ZtmwhQty9kdgA6EK",
  "key23": "2fuVjdiJFaXUGVWd54iL15V3ChJPc38AUXM3yZwFde4EozcKFoRetCTQrosCCPau3Wk6sNEWLRjYn7y9GyykrEVj",
  "key24": "4TYrWMTra8FUD7GgTD7kWWqX5P14WPAppwvLsSA7BXTuyAAMqSbvSYdZMLmAKmTto4RqMoMc6DAC2rb9zrRj8Heo",
  "key25": "FF4AQ3P4V7kgAA6YZMx9pyRioHXPMmQdtV7zD9m44NkAp6WwfqESrkuddeywMsUy5cT5f3UEovAboL8ibzEMCiw",
  "key26": "2aoiXwoNeEpAJZ64yGuQEtaYztw2q78PfrBT5LmBx8JVkeZxBKHb7oyR3rwFBgT1SEPtgof4JuCrET474SkT2SEH",
  "key27": "4meN1NXPDCHtoUkQMgye6wmczXXuAntdXxVHNX8VBrYE6JYGJPc5mYuGbhuUHeFoo5aJof2YwwzoZmwyXQZoB7qZ",
  "key28": "4jbZmzJm1Lsdri6tshepo4gjhd6S498KnxgiaaaEryeMzhZ9RyfxCAYn9DqkjJXB7d6dt8UFxuUgPD9qE93HQdnH",
  "key29": "4pCM4LYTUCnh9DKex41fA8cJ2p4BZYzHXGFYqd4Ei3EkKYfbRRmPinhovo5vffahfBLiaSpMeyzwHYSQYzUDJFy5"
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
