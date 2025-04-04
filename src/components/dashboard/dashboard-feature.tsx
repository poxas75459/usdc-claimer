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
    "2LhR3yoBMDcUFfeUBLTYkSFsLJKd3U4VZYHyNQ9QJWGmg2KbxEQE5YtBZo15sQfp6HMNZaxMDoNrvG9SVjFpJj3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e8bGiLZi1W2Pjnv6hAKaHm9eF1nhySopzaTXKd9RsKak7pC4iqm7oybygFnNLDLwLjtor3fvbPYsAgn3ZWJBLfs",
  "key1": "61SGDLVbTmS5K7AAbA2AKFc8M7HeaEfAq4SWkRNwSYyJ7eEqLLR4LUbbZdd4Ty6YRRcGuiLrazP4fFTKEmyuTg3M",
  "key2": "3S7jTCYgFC98dWrvYoymGdyESb5F3W1iFhwii3Wwhszt1Up9HAjzfNcrC8ot5uU2o5RoZt9wEoACKwETDdhivn9q",
  "key3": "4szYD9JSgZXV4XJLj9YxRrpzwJnuUcRsYhg6U8ngLYWww1jTvJHFRNRQabXfwQ2PSyTYLhCxiza8Uk2WfegFzjC5",
  "key4": "67ppy98pPxQtAZknGbrrB6D4a83qByXL5THqD4UAXednJVJrsTa6hpb6NqNJWockGcVgcQ4Kn32rALQWCT93oD62",
  "key5": "3Rq93VgciDZfUeUiMVd3DssNVBPQ5V7dymaSYc1ESAmojakH7iKYYyxEMmAUtuPUKuWAEYkAhxrLK2qN94swTSYa",
  "key6": "5wN2TgENtCPVEnpeAsSJjGBG48WPt3j2DGtW1Lz8oFTsNBxkD2iLQbvrkS6rt6jjuN1y2XzGQW2oPfweBvM5BDud",
  "key7": "3dPGZhi89ya6ypRDuPD7Zxijosc8m82eTNS6zGyfCXqPRiJERJ5dbksgzXDrCfAxqAifKWtXno6zQJWquKhhkRoY",
  "key8": "xfqV3hLiDuSv3yst5uiwj4ENjzCX7o8fXXgAqjmKBrM2GEox4Mextn8RpZi9FSbbjHVPmXHDcxDeHtUBP8EMsVY",
  "key9": "xgjnPQUimUceXdLMnBRxbdgznszQGSURhGnJuRB8oSZdbmbtQGBKVFh83pEuuU8d6rmcuivJHMM9qDQbcv9Mv6q",
  "key10": "5JQEFJZaMAjAdH9SeLCu8U9THsX3GHvH2pPXz1QEWpEUCW5kK4X2PX1MdHEKsRwAx5tQ9M7WHfMGYw4d3UsWQ9NV",
  "key11": "2aixqoWYggv8QdK9ynL7mmZxNjr7zCeSPuHQGHnphDtiJqk3cU7bQfhwzr8q8MZsYSr5P2JKqRsPFLbuw5S39sFh",
  "key12": "4DvEsihX2JkrJnmfynk4nTAsNP3GLUbR1j4hnxFbEKvNPhTmRRUhr9L3XfpMBPZNw3NTqZqxrZzBGA4YKxwAvJXx",
  "key13": "2iYVBwdhZkUZwdphhrVfPcU1KqGASu4CncQ5vfsEMsKB1VCV3fMqqNZ3DeWwUT4fZncoupyHG1ZL2AskcwH5xQZ3",
  "key14": "4Kxnq1m43e7hKqapzdXvPCHpiYp2tAXYdoRpBPrQEW8Qy3dNZFfXuBaX6DrgDgXkyJKPTN5gUDb7drZ51mf1xdS",
  "key15": "5A7xmFEhQNJ1d8gLGGDwMFzuzdgfTBtLXAHycy7c9mXCckMNhaYeSftfWzPa7nCmtx3qd7xjQaEz4NPvEi2aCfFy",
  "key16": "5znMyFubkd6bEj3xZe7ENwN49AtCSh4qy9YYLREnYfv23vUqGRxXDWMYHsLMt1SCKVc1JCawvNNJTDS2Nbd2gFhv",
  "key17": "HUPYujfrYN2GtUP6JnDQpwjApLCev4LoGAhiVD3wYSuprdg8amD8ZJpuXY4T47oEvM3o8hHd1r3nw4YC82ApCaX",
  "key18": "4f2LMhMTn3jxBdGB4ArKmPEh32TSP1MbYWyWuEbFniqUdY9E49L4zmkAq4Yq3d7KowZyQ2f7how8GiQhVA8Azc9A",
  "key19": "2v3qdR2c61TUQX8CNqkZHzNuS2sAcnnNn8DfEAQPFGrzV5npfSUxR4VQh6FhhchT4QqUyQDfjRwB6DVucvCrvDaQ",
  "key20": "3wu87YRTxWz16thztCKmc5zJNFS78hPTKz4BNncQmXezGupsRkQyBLmZVjGksmu97pSGQ4rtL6wroUKuJycjYUaq",
  "key21": "65GPiL1t24cCJWr61FoeyUsiHRvntSapv6NjcKdSYqizyVKC3nm1cMxFEvoenvspDiWcpR1mP6WQqBni8h7hK32r",
  "key22": "42CoGTwmdwCTnu5Axe7z47A4kJNCLW8TAdcTtrDQ1hQ3CQ49uL6sPcaa69mxdVvyjMBkZFqyB2ihZhzcyxZnTsD3",
  "key23": "2Dxk6DgxccB8m2fsFNsgzBRv75yvkfbqrDwsuKAWwx5p6jXsErEWAFn3WDPuo76iSx813EhCR3jcGVyUs2hVXVGp",
  "key24": "4qrg4qnhBQiqoxqwR3xRsK7QrWuP8suLUxNsfLGKfPDn2NVhufSAy9rgVooQ6VBG7iFMizpWVgB7c7Xh6UJTi5Kp",
  "key25": "4VZnVvFhNeGrWbCavhNoKNKi7SpzjgRWnUdHVhJWmzZ92qe9HGwsKaPAXgsu1f2geBy5gQGKGRShjTiTZQhjHwfW",
  "key26": "4de9XSBnSmgdniQ9RTt3mnTk9i6Piq1qY3Am4RDcwN3VvExzMUH4JCqXxdCPDmEtgJ1qfREsTuZNZtJPieVcTJgQ",
  "key27": "3z7VSYQQRMF8mnaUeSXGmxUYH2MFWgtQg4qeDkS5g4mRpWhzuq3XB9FJX2zUaQQrv9vQvasasDz8UEqHEQ4jGGVX",
  "key28": "4FRbbh4tKZYSdnMyZVzir1afBvNLWMXgnK1RzGopZmovHgUCec1w7TeQhsQb13mfLkRaVyVvvV7cbdkXxoryvqjX",
  "key29": "TtgqFerMPUSGiEt8me1cPrrjKap923LFMsMpiXYagh11fDCG4rHHQCc6aPvQpGN1fsojuZrcbFm4KP67PHH4YXA",
  "key30": "vyGkE6woStBeaTPcodNYBvSL5Su8kHoZniWMGdoCT38uUVBUXZVHkXaEZJvD49u5owDQaeqNngM8R5c8L2oA6xo",
  "key31": "4BxyY6dt6kv9roD2h843Ugfth1yCxo8hzyXueZf3HaLkQtD648QNbXAGHQ3cmxm8wiqwjwPnBFasJcaMmBYbgsKg",
  "key32": "esR3cuoiDBKAR9iCgn8c15rAes3rf3a7Hew5HphfELqv6sgnGJJrNPDhkVHQMpXTbuCkNG5TfiDRDRzJzzEjuRW",
  "key33": "3rQniNoDvaxTvWiRUquNQpHqcaTBtSpmvSMjqBdDhGQ3dfTW5z3EXCrb5A5Yb4BUw3VTUz6Y1WF1D6Ef7wovW4ie"
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
