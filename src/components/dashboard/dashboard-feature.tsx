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
    "2Tqc4ryThf8sS6WN8VE2BFLuwqjh5yMby1sRWgiHW49TcBnf6QtBgKpYjg7rAnUGWLwD7gmycynwiibaA8cEXY8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "izeTXt1WJzL4KpYgMNk5qmbQiTLXBdzUcWpBauZRB5yPkW3xbFCh9N8W5CNhF5tpgDQUjQ8AP36kw6hMLNKAX21",
  "key1": "2ZWg4tCVFxzkgx18i7kv83z3kf3DRQaHjBc5GoiubcZ7JddXsVawJ2enMgr2bpsr7wsPDN214Vcbkh25dEeGaqAT",
  "key2": "yz4fQ2pumAF2MPGxSFkVpTKP2o87R2rkhySn8WnAA9ZJ2PYk3FbUQCPkWT7h7omFMyKxqAwD1Ho9fwUcDBzr1sf",
  "key3": "2XWbMCZUkyEdFtWm8cJGf2iNiJhrHh2stHhaGSAxA1UNjt4LQSBZHqzoXmWuNGGN7WKR2Ty9drksymejjevZF4mn",
  "key4": "eRNq7hPZ8NNRNzq6osJMBHpFKPFDuEcUNP1d6Ag3rVuesJkFSbYDABwep2LDxRFPBn9DdZm29sKAaGZvSGvpuRW",
  "key5": "5AeRxPW3eF2t6c5i8RchUDB5E5ySBvcDepSMkSMKrgT3UdmGKQxQ9TcbKCpz7iZ58d6veCj71s85w8BXLT8Eo2MT",
  "key6": "RQTtFugtcdAxRbKFpkTPCC1VXq2Dx1GcvUHXXLcdbcU1mJ553yxukVhtty7LNXJVbPysyi4w6Sn4avW6hJ2zgax",
  "key7": "3XsyMNeXAsW5oGGjvTUu35oiNP1gbbcXjg7r9vsqNkNHSLwCtbQ89AaWi6LWcysht5W7VENc9NAPj7BZ2AsJNG61",
  "key8": "2D8MyGkchKsVY8MKoFajgQkViMA797FpCHLRWxVXaCHBTgdirv5Q8tPvgyK9T9X9RKs7w68Hp5MzX8tddJLtxJ1i",
  "key9": "3RJ8bW1WWUKnsJz3MfcApNovEk3kLH5uSQzQga4HWRknqKDuU2Vi19CfgNnPnuao5ZnEvZf2htoHQb4ViA7UtFVy",
  "key10": "46NrDcKwjtg3zk22asWpMmHNcFaW49v94f5KZwttuNAiTKmSJCQjtvjE3dB3bQfKCKnDsF37hRwUcQt8G6FwH5u7",
  "key11": "r8DuWACizs6NKVkYSQYMFECeiKRU1UJak5XivHuJru1jfWWCtUQ2BLKjUDqMJpVx26ij9R12DXktU33dAuLzTwN",
  "key12": "3UiSFKy4XUVw2QBKasmNBm1xB3R2g8ioaJZGk7Fb94Az49ayyJgnU1GDC2g8eX5Nn2Y3hgtzC7QoG4fJRYVdgVZg",
  "key13": "yDpraCzRwKBv4jtcFeNesRytfAPegMzZJkBdhVXg5DjL62vYCxxDtp1CQcASGEGgVgrYg9EyMJ9bEC8azRfsmzj",
  "key14": "2aLHXUyMGXoSM9fQrmfrJr9ynVH5T6J9gCAk1X3SciQKT5Kre1ymYf4oyDdzYin2rKcv1ABmrhevh7pvzgewCuVR",
  "key15": "3N6ar7U9cmwLL6VYm4NGQsEuCYUosLs4EwXfUfNbtbUPuVFYq2SELRqWf7PSBx6fE7ywvdT1VKCie1YV7y7AAaT2",
  "key16": "4xDBbfjmGWwUw6cvLNaByYeTZBqaYP1s5Qui946rfHnPDmqRjGVxHjmMZwKqFvW57uP4ffGoGNEfcMpo2jm4Q1f9",
  "key17": "2ezMtPyexWrfaiaqnjWWbEw83JTDaSJrZr11g9oLyvph5kN2EnCBz2PfBmUpRQwzEhWhiSHRNe1bzaQkdTwQo5sp",
  "key18": "4oxmJoVEzVpPZNt7ZYApwGrrXJPXByjgQvP7jPiwm3KMofFPJqP6C3kfXvN4dsTYdzTFV41aWVYHziM1xCXoiwey",
  "key19": "5BEiukeHcudEHeNoW68mQTGk5CC7mXYUiFt5XffppHiyEEQrPiWn3gbKGHXcmdn58gMVoNquPMNL3RM5d6SoNDP2",
  "key20": "4TtJfvn4PaveRQpbtkQGx6EhzpoTKSYJjaHi8zpx9WD1qwo9NoT8KzMMGg58t47vQbDsMvmoFzPYwX3nSpeNwe1S",
  "key21": "5FjVk2EGGRw2y2YFNG8aqGAenkDATzg9zGSftmXzpYpywD3whAcwuZHSNZcCgVvRAZeqHPhgfYyvgJzSjPGA1TJD",
  "key22": "28gwtt7EaENVpswJPNPg6umsCJrY3yrZerEgFcDYW7L1QkbPMNTPTUuSqt72SazCgur5gNErsTc5PGoU35YC3oEF",
  "key23": "67TWvy2hcDfRQm46mTk3acMeRu4wYvTW4hggNpYhxxP9gkfGNMGpg7M4i7ziqHSYvrxEZrvHLWnZ1bFWWHRYWvoH",
  "key24": "2mDGj2dvbEUuEo9FsZMb6h5mmbdB7txs4eUytjQF7B9AwZxHZHYG541K5TF1TGxy4JqzQc62dGEPpSxgv4qXmLML",
  "key25": "5SyXmbG2cPEahNCaCULvHN2tLU32Tig6zvrY5nfKSzHwkzg5465WrCdumYHQQFmAuSYDZe81v3r9UEAgteZN2HiH"
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
