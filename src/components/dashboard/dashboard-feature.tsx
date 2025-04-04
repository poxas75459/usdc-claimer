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
    "5RXuX1uuBvS8tYJyi3QyXxEwVWdxadzfu43KHHDZBy9P7cVrAWeb2Z9xNk9MyVVyzabUwRi2VbT3r2YQ3bnF5NZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tpJqNPkiBgmX5B2oxHFT6GWfDCGQiCGZiGnefx6MmVMDCdcbTrz37dDD2QLZuJ4VisqAcJ3ZxinMZk41tVvS17r",
  "key1": "5U1XvuTuFBZFRNoxuQTPig9UYXTkywYqjo98ALL8JKHJviuejaNAvywjxW1Sa75azWNhnhWidsCaUgBj4AXdBot8",
  "key2": "21bmwcyPcDUNXHniGT5LVgYJuT9wKyDmMM7atEo8d2sMBhSQ4z97KVWEt5wunwTtSjBXdA1DcWBgTkqcmsBMBT1t",
  "key3": "5n4DBnSwvBq3BWXP8iUzLMkyw18YxtHTG3WmzyzaiSAVLnYCf6kC4261dYZAosqStNrS7vFzKuY3pMQHLsfp6baa",
  "key4": "3hgbodA6CwXrEZf3isb4ybbCMKjViYCsCA6SDzDPWwjW5GPPMqMJ7CNDLgneTh8hQbz4P3YLVv8C28LAxc96GVQ3",
  "key5": "4UJs594uyESXNuKwwh7QnD4QYPvr26KP9nx6StupGHhQNEGdu1JdceFRDY1SwEQuUeXVRivQzmxz9d3BMpWxR9Um",
  "key6": "3C5HFZofArx27AaWJyyFs43An9AAFdHur6N55HzjLmtERMDv3KAes8HFWvJmRncAZSgvXJ7vuu1zVWn1JwupwYSk",
  "key7": "5rrFBmg9qJABToFe6Yhpv9CcyeiTHC9caKt1N6uQfZHZJmZNWe3P5KuAitrXebWT3qc8Tv4CgB9LgV3VmNx34mik",
  "key8": "5SkY2rAqmSP4bKFBgWtFBAviEPc44uXbmEJuFqA9S8sE8aVcp9RisrAFDPy8VzkziNp78DEgE4EPW9VWV29ysTDy",
  "key9": "4e5Sw1vdvo4JxZHjYzKmUAZDNgwbyVaCmyXtJCPJrRXhKryjVRANbBskdj8wAcE5zndEQgE31RJH5mpJpqytudXj",
  "key10": "hyiFTGjDDGY3XtWxVP5VzQyungmrwX1N83vRkeJ49ZNZPx9ZBKyvLJraLc8wtiw67qmXN22n6ZMtVzJWWfdfQyk",
  "key11": "3SnT1YRixvVSBjsXZ8Zfw8pmpWFyzmEBVQH14zATZ4BEmRLczDziKeiKqaFSM8JmB7vRcJyZ6ayxLuL4oKMWc14t",
  "key12": "3YoKjRvHj4xhvsFN1BMaxGXGxFaedVdMrZtPwFxhGCt4Dhk5GkuKKd3AADuVb2PqJXX24TtKWSy9PvPFvvCc7pZ8",
  "key13": "3SbBgw3AZVHDy7F6uUYy7wpgRtFdt5QFnj67zpEYtTdUWmUGWVTMr9BocVWxhknb6oex67JBbnM2yfak8k3gBwnD",
  "key14": "4n7wuwjg4F6kqW3ydpwth6Pb7jQAWoJD74Xjkg2d4p5DtfisXJ5pxbh1mBij1atYAjxbyGy6wx6CEkxAb4ZRv3b4",
  "key15": "2xfeo528ZYFpjd5bVsXYnUVJXqJVSCFCbYVMnw3DeYwFmAvfDdhEqKtcLQsbuPrpGLZuwxrDMtmkZChJxXwUqUBi",
  "key16": "2J5n6cL21G9guhKnDPFF7kupPhXXgfkxHAy46kpErUZ8rrbCcGZnh2yJJwrxw2V1UU4hJGjCkURRx6FbBykrWGRc",
  "key17": "55sFJwew9ThVnM6QiBKtDTMNxXnGQPDJsPbL7Hs8ZfiQGAyEVPFwQNsP3g1jyyqDPjAz2oj4uYVGn4fd6hMGTzBN",
  "key18": "3sEEyyKPGnNGM4nu3PYia34uHptE6niGBvKUMRFmzUqfbmJVFwQct9NgexwSJaURbH5M9JMWKs2c3dynuGQFJ5yB",
  "key19": "5QhRG7MmVkgh22akKHBmNiCyBacJjvZP85ypXfEBuWKo1jUDF7A2pmhfbJcEQ7zEPK1vePKVDs7ciK2d3n95N7WN",
  "key20": "wyyi2G16pEiKM7kG1uEx3yowip4cNCw5dxXZJdNks7JN1j5cSRKk1kipaK9DzPW3sJTwpoKU6v8XSyNrTPi3wQs",
  "key21": "3par3m9Qsp5H2VuCznTRAiNuPnesbgzpvrNdNKjSoRUNEhQ6mTngt4Uhua8YjzKBeN9c2Zm1RrsH3PPSZzeWjE7S",
  "key22": "4YJt3m5gTJz9CN9uesMfuABxYvqrDfRNnE7efSth2XtUi2qkfuw7RT9t2QUxFfLVEH2WJPtCk1cgW2NuXXRk9Zdz",
  "key23": "4qutfKFC9CXzGZ7TxuoSMwwMNAeWLLPReRTihYWSwfUzEmxgV8Jx46MTjXQPsuhA5n5yNpSZqeaWwq9iGp63nkVM",
  "key24": "p7QvysaFiAS9dx5V6pYvJaWMbx6oKrB9uog3imYD3cAuMUh4Mf1odzdtbghom1MPbBcmzu7QeiQD6zqgvi1gE68",
  "key25": "4sXHfC5v7SFXqNb8dm3g4cyyKrm1YPaUCGPfTboYaniJEkYBq23WiNf7ij9gt3EZ9y3E3W2oVfEaosD62aeExXE6",
  "key26": "n6fhz5jZ59uyoneabYZ9YCpSBPVTSetHmBknsG2CstdycvCZyPq3mcBBYHpX2CtxPwJhZrrU13H6PammdSKXkof",
  "key27": "3zezKvXRG6LoheHNfpfyjNUiyKQFAcJePnDJ5ga9PhvRAJff4DyHtAeJVkusEZxfBnJvUWDmyHVjSVZHcHaNDCHu",
  "key28": "4tWsVQRRbg6puquGR2rG8wcxnNEVtue29dmkv77QJE5vvKcsVzbxdo5YbFdLJmqZMAwuz6igjSdYL5LZ1ebnTCt7",
  "key29": "3QjZZDUhvWvtDwamLcRepmjv8fk6u4VMKAvYMfdMyHd5aFr35yuUtejkQ9F2di2gHGXyGZLVzjwoXYaRNevdnW5m",
  "key30": "3aoDMykBjMTqgipJYjyMzLRfBWGyhqPnKzvKBjDqdfMsJ7PZEtLGL7Dco567F8UGPmUW2Xa7LuvDbiaFezMhiNdV",
  "key31": "3eWT7fRUpKTMoNMm5nMUBYHTjdDmSj48fHmfmm6n657ZRvceV7kWM1LuxkqrBUNQB8VxN3twk78YuWVkrD1f1pJf",
  "key32": "32df9ypNGyDf1pnQWrQ3JVL1NvwV5ehzTW8K7mnVumtKdSTkFXrbmwA7tgER6kRriituDRGmq6xoF6NjNs3wmC8z"
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
