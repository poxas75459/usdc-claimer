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
    "2b3sWA6Lk5ncsFdyeh7YDEDutSgPoP1stJSGwVvrqtBFB1B493SPxfGe5SgsByHWUzhsKFY5di9U2nbirxCcnBgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sBHicu8QF5K27PbznCmrcQcFX9VVUVTuue9UgJs2hMhFf9gMshLjwZinK2yT79zvAMsYdeLxS8WQgRcg9j8MURS",
  "key1": "EB8jH9wvV3XbTnPtwsDUDs4qH883hkAF2aC4Vzby2qrD6Homi5LopoFApSDeajeyDP5k4nYb5nELq7pCNuX4tTL",
  "key2": "5BdQhStVjgFX9LNjgCpfHXQNXZQvJPkPL2VmBptid4jSsbmiegozsjkyPeEsovjNLxAKPszWHMVy5EGPQi2CPNuG",
  "key3": "4fu7PGXM6DVovUskuNV6G9rNUcGL5TXVxjwYCgnq7nhhz7kjYpzXFbrthToXhRm2wboUkKZyWhEJHhg8T4oSJEuX",
  "key4": "3zUeWbyruMdNNRJAXPoTsdM75JNvuqnmgLzxMiw4dRfn7yYJkZVE32GTevKhdDZUyibJZNFqjMZXaGg4e7sX8wgc",
  "key5": "56DAARbUNrqNv8P7MPiC5dRqT6sCSvtAJqVNvBxRAVgx8JKiQYyQyB6ubjnqXhnT3fEx4zgStnM43Z5HEF4GNyZi",
  "key6": "33jwc2fxBZHbNt8fyewvyMwRwum8gCoiwDrfC1vCkKgxNUrzr2JEPAaB6pkQmHvhMrHj6E7amGanCetwNmsvSBZn",
  "key7": "5AUMbsKc1UAiBeeJTYD7CJWvb5viQ4gCghVLHvxsswiGnB6PwUWxipvdLF8xKJy8WVtkY9AEigeLGqzXKAWqJ7CJ",
  "key8": "3n9kMBuEkcuqvcJq9LaE93t6uT5mhf6B2oFkp1E4bR2uPdah5ejMoLZS5ikcQ2JBL4jYo5MGJ8tUbiD9EHRUBvYa",
  "key9": "2Ks5xjQmKGboTpxctFTPLyAwh8SWm7jvVLZ5N1tYsWUXRA27TsTxkjPtcQWe7dXdxRXdBYVrRoAbV4q6bVBHLxBp",
  "key10": "3dMAAfJQwiKs5QwmtqLC3mRV5jDuKfMGDPqnBZVyPt51K3KHTBeobugwqvLN4vHQxVrUTRfJrQ4f9o3BAqKwBvmb",
  "key11": "5gQ4SCRAC6HSz7Cj13YSzoD3aqstTRUqQdtfEenoLv6CKNzTVySwoSUqKkWDUDr89mjh5jHmTUehbp53usPT9smx",
  "key12": "3YSffZafq4mRcUAX3bj3zW7P2LjsMTk8cu4pQSoeApJbA6zxjD9RzKKXHwAPpXygTE9UMC6WT1PSqTnf7kqExVwT",
  "key13": "4mKyoGtpY48nNNYb1TYWKhNuQdN8Cva1b5tgY4zRT4gmvNLyNtuJ6tYcukw56NF7sHiXpffM7WnQmPjFzdZtxeNo",
  "key14": "4EyzXZN9JPFTDKqVHE1GEabMXGoD29v34gn9b4wqcd9doMsR6HwPfE3E72N7yCqbRkrmkKGthJgZRGqoSDEqHX73",
  "key15": "3ByAvGV1NswYDjgsz5g7h8mJ6HeXhP3947oiQNNYYQ272USddGVdNUiSiTGeU74CguLJhw2fopmEZ1sP9wSvovYP",
  "key16": "5znYBucksimua7tWURvkBqUCT4WLycvRRKZwY1JqwggnasczQJwzoSrY2ByAAQzqYRz88shgAvDLRMhgpKX6DfZZ",
  "key17": "4ZnMVNCdTR4q6zLptd8SqpWGzARFCebv5KMVH45Bx3JvqHvxEHjHRdEKYAbZwkPP5pe38cEThH816XmHkutxhcmR",
  "key18": "3eGo9tKdGL5RCFwH1bMsGB9kCpM9jFjSo4tDFv6K5aKjDP73a1qBSKx8rM9ebJk7fUjFCizeuvAF6PYX5PpEJ75p",
  "key19": "3vNiU5ebHvtnsgZtmjLFs8wGy7xdTWw92RNCxdQBrUFQ5k1QEFLpgFqnfSKDryaCMwpRqMDW68Q2VfR3d8okJ8BS",
  "key20": "5vAH9665tgpzrQLJGEhntEng51BdWUBwfo1vsos4jB9JV3yN7ZTx6iaozNBeqXKKWGxCASbqvWwCuz1ePVpknTDq",
  "key21": "3UCGFbixorg1v9eEbbBfx685UoDG9NN1kZf1c5eKCdHWiqVSNvuboLBBN2rwgcy5wd5HWM1wDewzgqLtqhHM83vP",
  "key22": "3td4cyQ56bqZg5C9KjzLUZRKcXtFDVYdr5hbBBMVPGxA2cVCzAcqdDWNVtnb5v5zaPNDkd7E9sMwQsiJkWnkqj1q",
  "key23": "3pDWeymzVoffmgp28JGjR1v8FXtiuYVghtjcHQioGd5frHsM82mQuKCxn7vKJMDcpN9Yr4Y9e8N3BvJV18WnaAKG",
  "key24": "PxAnndEuCriJ8C6AYwnFJXG9ijj9caXZh1HzTLBz1nbWexrJ86YBCRGMEtZvoG8wr3j7WhsKLw14Tr69ATVg6Cw",
  "key25": "28jGjRiC8Yiwdh5K2wSrUxTCCJL1b9xhtBroN8ZwY43wpx5uHvJESHtQEKePP4HdhKzisL1MzcyP8zJ5gzoEj37E",
  "key26": "2m4r2FZFizTmvpKLrQRTxbK8qQJmyf2CdVzTpePeDgprxodsjaRuJhoE7rkMrf2EhN4yftqAWwJzGHorCyV7sHtV",
  "key27": "2EJQJ3PrtUE7EmDaz5Yzfa5gRvcwUeMXh6XddC49AgScAaW8sJc6igShvtHNwHDsu13YVtaByfMuxBmPbiLq7hzP"
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
