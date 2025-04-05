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
    "LeXFuLYYXwBfiTHuMcbm9L2CJH5v4HYaPs5ePUUgxBi7yWsqXD5Fuo96kCoqiHiUcTidjkLYFncx7RuMoKA4yDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r2FLiv5gjE2zUxyxT7PdT3nxXPqMaAMRTJBJ4bMU3Xoaa7f2MUcpXbWfcK8AWjLGnnWinV8m9pncjtmnJw2fhdq",
  "key1": "3YCw4ayv4mgmUN3Fte5wybE6S4K2s9hc5LpSvVYocxpAxuDzPEmV1BtHHRSwnEdnghJmMhxszxuFYRGEjARA3vJ4",
  "key2": "5tMzEmMCg6sS5QSMxfgNrffoexjadDqr6qjJrs9zPoncdgc9fo9Hp9SQdzghkoVBDgEeaukAanB8zmQozkE7TyjR",
  "key3": "3hZRQ7sgYP9fmu3fNNsDL3dKp1qPDL7Rr6jYqD9FzpiGzZJjMwQ6NRH1fSNpG2QUko65zA1eLZcTPuCaADLH62DG",
  "key4": "58ymAEQRByYqdFe5Kfw24QZnSZkhvKoybRjd9mBJdqW8rLVYii98rfmew5D9nrmWNC1egnmMAMVvDPGuVukxXV6a",
  "key5": "37m4D5Mo48WqZfXZxnXp9mzm5Ao36GG89sDSXLp1EhqKaEJnzHHuR8sporTTZDHT5S43vezkfMBr1gGLwFkWp2CY",
  "key6": "29pek2d78VDuCDtcRKJfJZ81wmLgBfZXmP2fUG7fUfkUS8s21V5uqG6ihufyvbFzUFGs5GXpEECRVYfQGj4MLgtb",
  "key7": "622o6jpqh36iCmCsqLkFkGcfcQLxGjR9n9jJGP7Upf6aQEhMbfqfMREahjv42VB1Taj2CkF1npMjuFJHRmSEYsSY",
  "key8": "W1PkxVkk6jKS629LyY6R2fJRmPwsayhrgRUBGvU8fA7vdvVTEUX7Xs5cCTgMQruL2DmhBTF1nbo4hSuUwUn65Bd",
  "key9": "2VZ3TPyogaqLegRyF2etzN3SZ65aZCkDvvdqwz12Xc3iUDpGn8A2JYE5AnNJ8i4v684Kuos6xXnvpkGbjQFixefs",
  "key10": "tJMwWaFysCKH6PX4ECALPeRpeDugkSY29QvUfRbCby8qwubqCgvFeGSXDFbkg5UMPs5kP4TWK6enRm6mRWhW8Rs",
  "key11": "pK1akTcE4GpCo6TK8rY1j7v9MSJFnKjEVwCU9CNB6E3MnzWimbKKJPCbpnciez7ymvs8kQa6hgPjGPjTWmbvopU",
  "key12": "2s71REXzPGBTmnFeKwc45xi2ZgghTVEpxqM3WdhM3TqzpmowxGWPCHW5pNdsqusFfBUdH1Uctqy4Mwzwh4CHajvX",
  "key13": "4pNeYifdFGNRMrWhPX3L7SZDCN7G7fpFFKmwRoYHPnL4JSXyb7HPdj5PTf3LmEiQxYzfxfYjroxNL9uKV1zvdvJg",
  "key14": "UFPQvWtv5w8d2Jhu9NSVJZJxEB2XsLrMYBF2gqxs6KvaxUJZuHrYYVdH6qQgRB8HyVTLoDad9Xosf1MYqg7gXB5",
  "key15": "56dRLQLsJsoqYfU4XS1kXG2jMMqbF2wGqpsvSY6AThBPMXjj2as5BMFcAo3CPU3nrGegJjhrgRLMGHJLtbMnq7FM",
  "key16": "aYtnmGCJs9nXH9tBnKqav6KskJgXjYn5YXhufLpbgjbYqKoyQoet86daD7NHe6HSeRKXU4xtPUiW1tz9Z3ZE9eY",
  "key17": "VPYJKNMpRDLLbVWLpymKyzs8qsHmGA9HAKUsjci6ozY5fhP4w8kXTUnL3VJAatn2pXP3LRF2ukUFf9Mnm72v823",
  "key18": "gUmqx1QxHEYVdfUkQrooa4KDsSDfFDmqocJcJ2BqwShJTBJP5spJWATY9odjhcFemjbV5KFAeNupUSgaH7qZDoR",
  "key19": "5M1E7rwTmm2uxi6hLDQD6uwtqoNtRTYEtc8qZrYE5acLDypWCQVZkf3wpkpAQu58auycGkoDZkWCpeTSHLdr5Ryx",
  "key20": "JMcNo468nWv6VQgPooBw8JAfu4MhSq5y5H2JKGVe4XKwhS6YBE7jyJfQgCoCRarobcbNmGKKAWBAyxpx33H5Qka",
  "key21": "66f3S6LmBkzzkxJdamveujWggbMTyi6bDArAhjXd5exZaP8VkNYW4kNcwwxHetEdeppGsxq1XdqC9v8V6KrBPKUu",
  "key22": "4XX832WXrJUGCMb7wfebsBSxv7LcsaQ5RcXzr91rfUryHHPemQMyiL4238B6XNpDBnQe26hgLVsKbcTTcvhbxTm8",
  "key23": "36s6bc5Xki6khakmEcp3ScHie7NWo6rxvV9d3Nugjr1SxH4jHLzhYf6ZFy2JW8joYr6qF3i2wyRqzAQ4xSEgQaNf",
  "key24": "3b858Qbc9eN3ACHJDegwsq6BK72BMKLkKzW5PGquw9qan7eTkjBR1RvnQnt5zAFZY7UnUpxn5dby3r3ie1sQ6K1C",
  "key25": "3fxEuwcYA9pXypxadcMMEeF78x2nA5BrtrJnV4RaVtpsNZqDW6KnEvES9teYfksYfTSXv685n4SSrJa8V7giLfTp",
  "key26": "4e7cen2Fb7KomPXDJWzQ5fPLCuVDCp1P1Ztr9mc9WTmXeKVXKdFg2A95SLR4CUiLjcLgmgciyFvKcxPe7YmCavNo"
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
