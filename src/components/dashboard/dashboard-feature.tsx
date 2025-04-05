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
    "3YL73JJVrjbYLZrN2LiqPe3WDYCqxVQpAZSu2jkWKpSZnzd2W1iqZdAA4dhg17LnS7zWjwvhQzyC6vtsq6nq4qoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57RZBKdeNjBBfPGdbCJoKqsmcKJg6XAFUr33EbpNYZkPGi3N2YR8vfpVaFjiL9sCF4AUZAq19LJgdGrVcw66yzy",
  "key1": "4L2z7MrW4GNk7r1SqehzxfCCWLfjQ6uRSMte2f2ji9S2QTQs6pTPQFXDCcWQTUUUo35CapKPncUFku3ZR8y7EqZC",
  "key2": "5Wxee6MN8wmPeV59GtKq13h4edkp2Kyjr8MrBNAEe4yvHExXGcHPQbDC1n1Qa1WFu6gTzgEJGy6B4fb6AvpBQUVs",
  "key3": "28avCXhKMUEJ4bCyyrDwboxfc4aief5oe4KnS9gH7PFbseCAAtowPyVPmmsTEsWrotM3s46ds7jkg3eZwvbzHZTP",
  "key4": "3i78dMxbMn1rffjNSTWxZqxGbQ39BKUV5mgxaa7HkNqFjjXunk7WyGGTZPQS4DDVcxVS4PxishWgEzEMtx1uSS1B",
  "key5": "LCwF28qKg5pXTg7nufRLaL8acBEqnYfgJQTkAric1QFrucaQ2PdWsvtCkLgVkrudpCozj5yRH5ayEiifxgAJHF6",
  "key6": "3GLYtDfVtkbQenuZKVL2vgsBXiFmqKcVJCtYGhM3NUNmx6hN7UdtSqt7w2FNTLhw5CWn6y9S6wUb4yLjvDVyYtJU",
  "key7": "5LdkwEuHqYVEvRVxs3fsiBi7vZfrkdR2yTAjK2Sy8grnGBDUdLiDDpCMSdTbTWDYNZanmF7eyJuMx1MGgFQmqCq2",
  "key8": "4mUKpTgu1TZqfuMUq8B2hDxdDLrEwsimY99sc9gUwaKmjWJqf8j4VjzPSJkoFHbuPrb8qySHmDQvyPD9ecH8SNRi",
  "key9": "4rMBmcKXPWbv2BYZV5L23bvLcEos9jEYJ3dSbDW5rozBER84w6Lq9nnHn2BvpQDfXnSJAaN7naSJcZc3X4uyKa6w",
  "key10": "3iYegU4CdbgMADLVWYRiEaXXEMjBwAZgTcXqtXBaK6u6WjgjfFEUZKss3iAy1A2iQPbXD6H4Rca9xF2pJGMtzQPR",
  "key11": "3EpgxdmrKa3CE1p5o46h9cpztCfq9H7TQtxrL11oQFHzysyTz87NtpBEcxaaUbk7Ym7Xqub6zSZyTocQTaJkGCmE",
  "key12": "C7Gw1gWgyBdt9eKC9VA1wotiALADLrbgiVcbbYTkDZQUFTzJb98D1idW7aCA9Hro86hci3jSm3tnYc7bECrFGEE",
  "key13": "4TZDJwKQTrSvDKAjMBty3L3qfMWVhR7wbBUMHFZZBVVNaFusDybAVDtEpq3oNukC9ZGqSZ3yHpYfSNz9ZidHKu6W",
  "key14": "2Lwu3M9EPREhh2Ec6nuQEaMV3mwHoU3DhXTfzDrxf2akaSgGt6gKeDHvW5ACJ6Z5PQDh7crciXdFq5r531nieAWS",
  "key15": "3Eo5DPjoWiMJfAeRDqP2G3wFzr9XL2Ere1h8PqGp38GimtVPaPtYAJToUMT4vECdASqWWdaXBdVdqxKkLotcmzGm",
  "key16": "ry26CpYEX2vJF6gsL3ZbqSmuzY65rzCJKbHsYAkxiV7rvJ4DLCxukmCAVkPZzh6vbXyT3b7xPfbeMSU9vVghcNS",
  "key17": "3eC5o3F6fgXdReDpqWFX85PzwACCFVr94SYZuiMbhdRWkSDMxhMuEsmwdaAb5fb6VKJ8m52xQEZAYtn1wbM1YRkn",
  "key18": "2MXpDx9qmvBM9LFcMwjZaENFHsv2zramFEcZXWHvtCZiH2NZ2Qzci7wVwxfbHtNujaL3pbmpWeyNTGtZp4EjsSQ2",
  "key19": "2EEqBYqcC7r3yGJgN7L43VcfxE97xVUiBEWmtonp84TusnwMnb2N9BJJyRG7toeXMzQEs3s7gL2eSJm2VXJGGYeq",
  "key20": "5WyqEWEXbEXM3WUHKkEBcUVEitBEyJ76LvHDpvYE6vrEFxkW31N7qp9xFNiHmroK3KQo92mJunt8oWTku5uC6Uzr",
  "key21": "RzxMViciZXqPttL1XPFQ5NBnKpvSHKLqw8A6Pa9aYtbNk45DvSDpM3T869EzKBskPHVky2c8B7U3pqpsNbBBziw",
  "key22": "5PYorVEVVNr4rP9o7Kna1SiNzbzTLij59ucDVJtM774Pt39s6CeKKaq8PGfubd8ediRqpbNWUWvxiG3nzM25LdCy",
  "key23": "4zihDArV6gMMhocpc1jADkEELfEpbkxVibyQG8SX2s8ba11qiYjxSFCAZZ3f7r1fsgBDZZcAnMEhyMHwyUuW8Diw",
  "key24": "5ErYkcXUPd9vaL9Rfsm2SBCqnYu3eAzZn4XYyhPWKC9Q9b9J46rSx55bFPrrx5irk4UHL8JWV4zvJ4AVL5U5TMvj",
  "key25": "5kGHAFBhJhKPTyFZfXB6xoGJb1dxLNn4AUWeyUU53RgFEBW3mmwRToAagxAx96J2jy2YeXGXobq7KMvmZ8YoRSN5",
  "key26": "3oz1XVbyjCNifB33qqUtpBYmABLPE5Z9CUithmomVwBrPSxBramZH4ksmnJ7omf2nUCamZbLbHwGgRKsjqLwvmmF",
  "key27": "4MPYAeuBKQ9jdpwHF1oPVKQ2orcL3kGCrkEZGQf23PLZUb8VabKT4oziHpQP5mSTVtr2Ja5VxeBQRjdnT2g5gr7x",
  "key28": "3oHpjofGEq3fi8ezgrrHcnRaLLhNUZm5tb3xeV4ic7LdtLbhUGAgyreqxw2qkR4Vos3aN3RcdFo3KpyVZWTPWcR1",
  "key29": "4px62hCFBgKLCr4CTtjxtkgA4CxCryAynNGMjNSwfbGdDkbeyZkpHMpch43mhFshgGEXuRehENEZfD6xDUm91nnj",
  "key30": "C8wK6znMBV8BmbtEnBe5WNXdd9X4rJnmiurvW2kB6XRGS6EpMtn9MvAFdkHKD9hDGzdWrNuhwiEokyp756YUzec",
  "key31": "23fGEpYqmDPTarccErU5ggyssJUVzizPnqmNGjUZU7N5RmGhtC9ToSVzUzYgd614EREShHMoioeixG2CsfcSPBEU",
  "key32": "jKMM4Aa4Cyjk8pvaH6pkFExxd69q6KdD8EMWFknriCP3rQBzHRQrYDqWFfECK4y9B7f7LHRc2tPpwxThTtPvEhv",
  "key33": "2TQ3PPJoYx8w261sfmyxtJus7TbUAXTv9CJ4isqkuMaizQvkDA7BQK4khnLUcASzSaw3QuAZ5Mb9vt3hP43Dan8Z",
  "key34": "588pxTusRx1c1h3nQPAZrvUBSVVWosZxJr3RNVigY1DvJaaBcaL5jjYXqzj7Xy4FL8mm7eE2sDn2X2WAEQw9ctHB",
  "key35": "3M7K7JGNLVKSGC9hHYEdLYq9ubJ1E8zZuXCd9jVuYF3mzBNvt9YpcmQRb8X2zVagjxKS3zJzw8TqPvRDq2xKgPy9",
  "key36": "Re8FMCEfM9gtZRgdHTfw9RP1qvbiXShVL82EqBJuMH5UTUPuUFYdH9Qx5Jm4yCu8QPQ7FgLpEYfGunqXL3pFdQu",
  "key37": "48rssjew2ikBhWVnMzqTZTF7c4hN7BSFnyD3BKte9waFXfR7Uj5964oDTKqGtzrnNmatX7EQvrcq7HMUyb2gjmJ2",
  "key38": "2GTQ2D9F4LTzzqC4CqypWYyBn9qMtxdjttwbqDXW8mSvzWgwCFvSK9m3FTWVN3cPZ2qVNz4LqRt4YcZiQsjbrsJC",
  "key39": "4YwD7eQ4sJtNJrJLr7qUboevdDzgYgnPea2kpTJwoLstJVRxqXteDTS8R7vSy6aHNJCy5sK8jm4Z9S9i9X9sK7m3",
  "key40": "4FNwVGsLu7tpT9aeUamKsY6F6dRkRKXQjZvqbgYLTGmR4xmCA5psfB5y87Gp2X1NfQPbLaXu64gPpUhZy7fXcejd",
  "key41": "28Jcu3H7sTykWpRdUMMqdc16vxp5JY6j3gu2G7ax8PwydmaUgPCQ6skQvQEaH1QmbuudmPF5HZfTw8vdpMx6v3Nu",
  "key42": "2Jkmmf7d4QajV4m9stYRsUzByBS7AukEA7XLFGc8QNRSBUKVAhuCzp7Y2VvH4GjAc4Ns7txemqDLJRAVQK4biFAg",
  "key43": "35RSNdqrrnjbmNFWEzWqgavenGFVwb9xr9RJEz2tYJUYL2og2HUQhWUfTsnLwS2PRJNPYKfiZkYtLY78JEHAk8cJ",
  "key44": "2CEGeC6J29hUJYooChTSYi2wp2Ef8U6EwosayHine5i4UkAATXPs1KFum5aWR7T4ZMbTu1o9AumMy6LSD2V2GnZf",
  "key45": "2AcEgJRS4wWGtdihg47JvPJ3kE9wer1UWFDStpYN3vddsMUkREhKRKzmnpn6yxawy2EGwk2FHBZhSoxcUgWkjR8w",
  "key46": "5GXwJvH8LGxajSMtowkiKKCN6qq73ttyYYbT461NyFFQ72KJ4ZFNhdMa56yjwCH41cjiAZrpgTAKiJF4EE6ygmMc",
  "key47": "53g9ZLUqrMSHpiUx9TnDoAu6p8Lie4MPEh5X6N31S3Ly5aaz7FRLx1dCTRJnSSTCfz5t9NN57xqiLhhQhNAC7WQ1"
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
