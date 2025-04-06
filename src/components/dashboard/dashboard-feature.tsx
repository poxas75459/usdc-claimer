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
    "4oPc8NzkSUqVpXcWx5eGsz1Abr9AS5RqmmXevWuqQQWHXFtsKrnM1FLfxs6FJK8M8vtpryGGRiPXnkKhugWkoUep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DrA6wHUTQ1AeRz5bC82wRDHwVknspPzvbsedcfi14zdpdpa8mURRpeUSDzimjdz66AJ9WY3QGCadRJtJ94eCE63",
  "key1": "3DriYEwbnd6Rc78xARKi57V669SKH5mzXFAKUPGCokizS8EXQmiqGgRRMsrAAaDyeFhRTPx1bPnzj1PtDedkiEau",
  "key2": "33Xx6wg9TBJwJKZ2FQjkEfLwNTd65vYUVCjdHiSU4rjGWxgj3x7xzrSgZwvwY5JqkhJmGhmmeqJKmHcAy5T2VAqp",
  "key3": "VyRm5NJzPApU2mvS5mzYGn3w3TucFq8kbDyrUy1M2hdmDy4QEzymHZmJFFLzRHFuYNS9UqwacvhGfmJQpvBf3Ti",
  "key4": "3dtY3jZJ1WSPPtRcmEEyjkV9DwL8RH8K4Fp3zaSb2gfkrHNszLY87suWXPiLEQG3ztjxYejq4p9Jny3Ty5DodAEJ",
  "key5": "3SVgLMnzLGnAmbAYf5VL4bQpKzbHcKw9PqGiP8GK6fN8QE1TXpqRvJMD7QyEmH7PSSe3bAfFsBa3A8crbg44Hk4E",
  "key6": "3uzBozdx3m3AN1TX5Q7aBDrzVYQWVqY16KBgkCbNw4qTesxEPhyuC2mzbTNF5Z688K7xcuU42yQ1y7Ub42Rjt1ZQ",
  "key7": "P8HhrcFpkJ64RgGko2VkjuDiKY5BhKJkE1AGezMS93M4n4U19rjvGqhK9TgtHwJL6yKLAig1DCvuHLRoUAWE4Jq",
  "key8": "5mJB91PDQNr6r51XBzfdcTCHcuTzTVUwrwiSwtf4VmEoVAkrn5tYun8wQVG9TVrkb4yDC7ZhuoinFijML4a65Zs",
  "key9": "35fjwf8YkZD24Sx7PeEqSrMr5Z4RqsAWh4ixLKM7aSC7aKASGvRAi3ZoSTMRHgDK2sNTmmxqox3k6iqb6YwkKYvH",
  "key10": "5YWp9Lm9ypBtqERUqydmnF8cshGWNp9nYjaDf3EesyuWaWCa8wJampzKoUnsf4rWL2caz6bA6jyT2PAuSFsUydo4",
  "key11": "3rFbsYBBsgbRQY21VAmAcYWUks1MVm9vhp39o6qjEXMU596GXwzQJW7aJbPkGPKZ3ZqQc5PdVGoQD56PcwkSpZVP",
  "key12": "4BRBYqtxAQdHukKh8y8dSdevpfREguiSR53Vm4xDr9uw9tptPqvTWSappV9ucgdM9LNB2WJpzKWfuniHVeJiETrw",
  "key13": "22HtjWw11mnKRjQf6cmRtVVKLodnV9cNWoioxYmoxcupZfHhxW7ygvZDd1QQpKdTTnx6wKhWxFgyti1SX53rPKkC",
  "key14": "34geTzECaXNxLoysoVNmWbA8K6U2ZhiVBZA6NzuckqR6QdeK2eoHtD53CrWWA4anqWupiEkVBFGhkPQ7PSzrZjG4",
  "key15": "438eHMoQ2Xy9boY8PNxpGD7TMtRdo7Fid8YFbN5gQQa4Eawzc2CB8VUen5EPtBkfoFW3FVmgXrPBaTkXhepGBQLt",
  "key16": "5uowS2nsA7MNZKXSWAHbXJ16c2fWbYdb3oTzMNJ75qTG4bwep3YqNTKqZ6E6e4JWvRxmRsZQyxeyhwQcotZedo4F",
  "key17": "5SoD4oJEb6zZ8WbieMKok4229fmQtJoXSScrxcip9JJ39P8heDk61pTVwaGqFvkFkAKMuqhK1dLXXY1CYr1eZcw",
  "key18": "39L7DsQ5JK8v7vbWhFTRAWibtSqEkKAn58fQf6vJ21yUyAP3EcaZz91YghWGucFqLcHRh4ZRHKMpStfGSypVZzH2",
  "key19": "5EEmZjsXSrxVDtDAtHoTd5rMoNqNjjBBg4NuQe8D9Wd3hPjqRCp2aMPPLNMEFKQrG33Ja4nieCDzVMeSW3tBuday",
  "key20": "4Y1rKejJtriQKFRWBKHFYi7Xqmo55QZPdA6EkkMou6MwwTmxJ93Uns3gQWJrm4QU5wnmbwNRjh3iCshJfHYsZnES",
  "key21": "4eEXgi5D1Fg7aRz8NVEnjbpBpadnxULo8WqFEkMZDiUBM4aH5aTDvBAcd2zpEUpGSwguVwpTDaKpQBANQxeiac1r",
  "key22": "4KkbyhqxtF4MPR4jdbbioW9TGuXAa5mY21VyyouAStqvkKjWUhnXpxBQBoSquGVTD6pYDcaBvMRJnkP6PTBG1YP9",
  "key23": "4bby2S2sXT39QYfynSwUdz3Z9icyfUDqg7j7VnExP5fEcGY2HUAb6UNLQEcRV4EDbCoGaJKvP9WqWE5qjc8tBrXP",
  "key24": "3HzGbGzMGqEsrVdmZdJotXKsAiFco7Q53tL5dtu2rZhRbcC2Ch3W3netZjazYFnhcHkEVYcWMyro6XshCwWYrppw",
  "key25": "2hZoR8DT2wViDwZowXtnkmU9s2ix6jrCGtkShHBnLjUZtU83H9oX3Riv1Ecps9tdpD4NVxkSPzXdtBuZfGj5Miw3",
  "key26": "3vcSKatvn6uMrzz6Pyydm9HMNXJhn6Jx8PGu5YcQNRqyrbF8FfHXF5Fk5YG4UxKzZ68SW6NEhZELuieQJvkgieo2",
  "key27": "3phmCxQjzchppYakkieNy5MA37qPryS34CVjckQStWiiRbvAnWVsc9MpTzxHoyZ6Yb3oTFzXdBTiyfzkR7v7W2Bm",
  "key28": "5DMqkfomzoU6jStd584VuW1hurbUEK2y4yNv1QkwmXwgDog99n1bCsJTXiHq8jfWsrRWpAX8sDQLxVvtZb7gMorG",
  "key29": "67KF2DnpXn7dUTUzRTKejpjArUfjUBBndjcWnEfvPeKobnGM3YzRgzoDGu1e7VnvcN99mg4E9qTywvPWuq1NFSik"
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
