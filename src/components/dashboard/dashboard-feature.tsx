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
    "4TaSR19ydcb4EAhBK8UUSxmvTvjku6474nVqmiBkaTcR7PABkcMhjtj1eTZMmAoEMVfDxX47oX4dqHDrLyUoaHFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dn8addnVyk6mrpd7x4AMxCAqRNGPKWM6uaaTwr7MF4bKKvdh6S3FzEqi8i7Ruoby1EEyX91ahTgkntVHR4Qrpqe",
  "key1": "2kRMT4qed1NBayqvwDTn5JgDMwAkJ7N7sMQnPrw5cGh3XAef6Movx9qxNzKQq2yE5yiZngoqM7W9KjjScMSeSsaM",
  "key2": "iTqit7fZKmYFu8GL8c2P2VrG9T2Pd2CYCEGkdYXjWVKwYujxN3WWg1LAQskir1ziZPtfuULT8bnX2NEGidezwDx",
  "key3": "3VqNcM2AEKfVKfUE7kopeExN1uxSbHymwRoKR2qZshchVdFyDmu6WcdgUTBEs1MJHzNKPFUXNoszqi5BMRAnVSgS",
  "key4": "hgqj5DtUSRXiFAbUEUwdXgp3ELhKvXdTSPzFmeTzt6cszuV8v8dhk4wQWycQcjU6rX1BQpUSohpQybzbM5ZkJHG",
  "key5": "4Ep6FErVGfqBsn8EVpQy4yovKicK6aMM2iSz9ugQU5LtyVJmNAUrcQfmbxM2tgTEJCC79xoZ8WXDev6uktFAMRX7",
  "key6": "2waF2Agfv4iRtDcBWBC8PhZf5VeQFkrDZmtAFmC5A9r8NdUB3BTEDihxirkHkEswacQwZridMo5hzAF4WoVy58RC",
  "key7": "2UTZSdsNYqed3XHAgWLKhDq2N71gWrZVjcE1ewvL5uS9uPHiYkE8xCvjKFkTPoUdFnxeJgKKEMoKCjYMdw33Nt5j",
  "key8": "3VdAcyR2MqSnkYeXqowx3NKhAoYXRx2Xcgjia1R9L9oNn5GChBgrknoDVPMhL1afpGq5ofEypqWjmyCf822EakcK",
  "key9": "2MBT8iGwLUzp8eydcG86fxMk1rjjzdJ7LDi3RgGKbjX3EwwFaRUUD36chp81Jce3zaYpgRhruXfyojDDguyC1CGd",
  "key10": "5UjLeahz9yGX3RGTvpoeFc5UwK5CRf88sqsMDoTQT5odFG2d3ox6qgXqi3VWkDjim7p8g7k5LhbEuGY1gSExbAcQ",
  "key11": "5oDG2qohWMycShXj6cnErA91rwXkvL8bfMeG8s33YeB1VAX7nDbUXcKDRvHs6dr6sXVWV9S4mgLUkA4rh5rTZ2Fg",
  "key12": "5akDZNAumGk4t2JoGabvqpX7iL7wTChDkkSu9PZDCjLZwVdYfCMrKYWajGxmYWAnEFGXkWNXAskkn9pwcCS5RTr1",
  "key13": "2Dp5okECUAFTERcUkXbSy2oHtZaipoZsrXS7pXeA1N5z2gBi3AMSxMYPDPL4rsSvP5KWHrBLSAULKj3avEUv6RtH",
  "key14": "3DawT4absRjQwXGg5gvVahVaJ1xUWWvLAvwpmFL73tmeauXPK6QncijkBrm25Wg6KTTdtK9942Y7EUdhLKNj8ZB",
  "key15": "5eBmM3F93MhxQtygL9Sd9ScXqJjtUJwXvr7gvXCJdNFCDGmMRb6BjwzEuzKi5Rb4hG7RJJF1xT6BH4feSeBHYkT7",
  "key16": "45p4qCBckFYtyQ4SZN7FdNV5kPUMvsQhJmZPUXKx1GxgHVeFJFqXEqrVMyUVb5Z8fRPR2G18koZP2PNbCUbMhwkv",
  "key17": "GA5vJh8dFMGZ266zygyu13qHgYFWjBxCJGLEUbTWdjaAEoKkCaWGhbgd71mGk8kKbxF1HBLygmscrn5Y1yHSDAT",
  "key18": "4Sx13KVTJHXFesF4dAKuZhaz985mpoiBkN6Km5tVz2DPjNVdK2tfTCUFNBgBzcAgyHGivGZm39vADJGdxdnmo2KQ",
  "key19": "5okfi33GNC6kD2h67WUwKM4cEYCmBb7nfcgcJUNtuLHW3ShmsL8ntbjrQohy54yEVJdZfGVsaTNcdWd1dH4ij5uK",
  "key20": "3MTg9vWgxtQiuCQxzLW2b69QqzaFGhqn2qZgNWLotNfeEek7gxq9RMFSfQXGZ2Ch8KHB8kF8s9vP7frXdC9uUgw7",
  "key21": "4BJ7feGtMMYbM5mmMRWuEm2AZJMsquExxX2Kn3tojP2Rz3savqjW3fvHPVrA5uZFd2YviDchyzeGfxFS1u7mBUwP",
  "key22": "2PyUPeJjNaPMBofXr7ahkHfBkrywSCKgyxm1mSsvwqUtMRUfVWP6YYtScrbUwH438EQhM8r1dQdvk98hSsSh9vzB",
  "key23": "66gRECehGbaSjgAqnS3fU4P6XhhB1VFubc4kbNqYGdh8KX4HwsWtP64Csd75oPKwsRVLg5L7PNKSBSh1hM8ejP6c",
  "key24": "2S2Yj8FAKAtZM2JiZiswxbkkkiytzuFuFWV1mGg7L5yM63KdLkof9uQGiaX73LF4mYzRuiz41Qnh4mQg5pDchys1",
  "key25": "ra7kEdjRU1pNE4NuQYQLNHaNXrToz1ckHtb9LLjHuxQN2YUWRSgGyf75RBhsZfe6GvfkWP296R1EYqeoKdZS8YK",
  "key26": "5SLEm9No2EHwr33c9SuJrGWU8iHuLTfz9NeeTXwphAt5JeMfFKSW5WSWSNkUPQsEzCKSViGWYzTc3BYTD8xsWAao",
  "key27": "4TfvqDGZqXAShxkK5Jr16VBdVGPduqWyh1jwXjLmEi5VZWvMtB6XW6i527dAiasPdbgPcMCWpcTGQQEBijQ7foLk",
  "key28": "EYmzKfExKcLzAXfVgTFd84WRqSJUNoLepmP4boanPKkox49RaRK5cdkDQZfHaWxjG8rqahvArv5DaWJyhxnz46T",
  "key29": "33NLCqWTpkPA8DM2GiUo7x4MgyvVM2CfZmPiW3bibBk9EkQJkRWQ17xp9A82hTKp7yqFiEGRRQcegaBUGVbJkv9i",
  "key30": "3fGoUQZwGfFtmBxEJRj2oCU9CqTkreijqR1FafVoU6rchzhqS79cFpmGFPVo6Hg86UyQGaELk9eWkzaYiFbaW44T",
  "key31": "527vnRWfJeBHevMRzUpTwbN5ipzjUxi6mSnYx5kCdyXVMNaf8mq7y1Y9dKt5aSYArbFJVi4QKxxRB8DGnCtBPw9r",
  "key32": "iAKM2CFEdrt7134qsiMHo9gfAh6HW2YfsrFB6RA64asuSN8KVWdR9x3TQSAATjm9gSmgfyACXfnWchowgTkUiBd",
  "key33": "4v4hdvsYo3pYgTqPtJ2EWRQajeM8wLKZNY58g9QbEXCENVUaA9o3afK1eNGNdCk7BpGNBSN2k1Fw64oF6rx6iPJW",
  "key34": "2MhGsbCdBRpacLqxrXSKpYGHTXGSdyTk7o3HdyoaNXaooK4zBxZvzk2g1JuQemjVbvtvfnXRt4vswvwGehH8bUSN",
  "key35": "3umSBsrxTZyxjbpXTgXCERKnZKDKrSUzVT7BJQoEiDGe8TZ8PuaKjFHsYKZuk1LjXGLZL4wX5T79e1ubnR8gemTb"
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
