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
    "2nv6uMPfZnTY4z3Vu1iawssg4eMFy5DrPZMVKufygCBVGu7jQogdcaZ3GyLHLQBWVsAtTA2DogRdeTqSSWiTpFzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b7M1bh8ms2UfxgWmWqHUwf7TmbLrixjnD8QZqVD1FQbXESduUZTf8hGGbj424J8sMw6vRugbaNvEgeGVqarEfBP",
  "key1": "d5UW1m5STEta6wj8EUnmoRmEF9xTNZBMrKXhv67tU2aDYwc7qAZuwjK9wvdPcWkTAEFKTYPHJ1H3TcNF7FzC22E",
  "key2": "2CTSV6wsBH922zhjNfuBjao1emmfs6uvxg3joP6u9p8eqw61uJcBoxqY2UZy6pZKS8VdndHypUqEhGviTSbE78My",
  "key3": "5t4Q8pvGRKPAM79TYVqRHEYFLh4qBUng8bbyjxJkyt5feE3SZJLDPmngX1C7jJsPwnd1KPYeiwtVZzn1USUQbbhb",
  "key4": "5gERQdMe8xkKBGCgSoQXnF6eie2DXsoZD2UZybPcvTXrmPKGCr3ktRXzADQhcupnnpUeMoSxUp8EPqQ7jZkPbuqo",
  "key5": "5zk1SGvbED46jmfBKqhiyC4sxipvGxxA7nUBQHLytP1nwsSKaXm5sDUwjcULKPPw4qVo5KauMYgqAa23NGwh5GG2",
  "key6": "27Brs8euz5FLaWK9EpCvKdwSDsjJS4K2ZAiwk65tP7qm3eAaGTHKKgWhtGL7SvN9iHHnghvSqKq9hFwqKgcWdURb",
  "key7": "2MDJERgNmFT7XDCAYryeKuPXYtVr9BTVqZsqXy4aZ3zF54BaJQ9GT76yTDAmAynVYdp56DWCskeQYWB8bj2rxSew",
  "key8": "3TXtvcLg1P4Pz56esBt2imszPw5q1eQb3rHr5duFVDexpM6cA4ykSZf21ibZaR29rj2M8eqXyY6aQUvyjwwN1nAC",
  "key9": "3zTzLFgviRBYfzAYniNQxkUZ2tQwhWM8q43SygRmCY23RKhXYJ663ZMsagZNBQ5b25ddFKEWFDf4bXDU1HQCv6Xe",
  "key10": "5epMHHYGNRnmen8XjPX1XAKi23tavoDo6zkoxYs1NwvEVsjaUXKESJvpzqjMXpLW4xLVQequCAVJgiAeZmrLgKsD",
  "key11": "3HWQB4q1kYLZDBj2ot1tzJf2eUet14mPunPZEiaieFsq9i4mqgk62Ta9xYBxwtEJiANy9WhV8tYt1oXfM2ki8AUf",
  "key12": "4ybAimzEu5C5C4dKLSiLBkokVgYuMRkha91hCW4XRQ3gc4dCZTLhAujNUaAu5XXXMWg1KupbGiey3FMvjns6Jr3F",
  "key13": "WqQT4GKpeoAtNGuCipVnVMwMxj7phfcuVgpYE62a6TRL9rGoNnNosp6z4d3seAMSbqDh2DyEMjMVj22iVwAY2Pt",
  "key14": "3J7yZ5abzx7DMTJTqVCeT8esZHnSArndBMZLkdkQctBvJ42aoJDds1TMkYjoaqkpxSPp9UD776rANDvX9Bnu1vSh",
  "key15": "46iocodc4RXBob6vNZof4rsCYSCja1b91cgVYKSGE9MiE79ytvqfYxwaxJNdXLDT8YEH9qtAfqxSDaNbEzSK1aRK",
  "key16": "GNiBDnC2H2si46n29k9RUp9aYxrJer9c7zZacKgm4pjk64z2me6RqTzjxN5DPcXh3f7VHcLTHszEjqqLW6wCeVn",
  "key17": "4X5nAEUAo5NEPteEzcB9Gbd3jN7jMLCaMxovr6ASZS8muSxh2eyABtDG2Kkm33uDwHvrJuF1fRnvL5zYRfWpKhzg",
  "key18": "3YudieZodVS8Gr4aCEULjzAcXeYQ8ttBjv6JrTdaYuo8qkiP919ynz47cLivSz3aZ2RjrQJB69V336doJFSZBMti",
  "key19": "5sd7vXt7kgVSmxpHv5FN6y3tMvA9NtzUFU7nBoC1QLR3dCHt62X6CUJpjd4SXrTqS7BLvpL45b8xfLsix3ATnA97",
  "key20": "4dLkpACyWev3XELBdfPsqM8JE5UyfPXN67zFuV8p2F6GwHWjxjzktSRuuKd5wwcDE6zwND62r8uZBxsXAgPmSD6w",
  "key21": "6NfJcyvNsUigDdyE5gSwg2nq9pDP4DMiX1gyXTMDLNmixPrQyw4fHfrnyM9j3D5qtJ85EeeQyAi2BsvEyjHZ8NM",
  "key22": "4Lj3eywCLZXvPCTwRZC9JZRuAcFbxZKFwRXn4NpG51PxUqdieYaDzDC6qyReKa5kjL3ujFdhbREUfTVf3uccvf62",
  "key23": "5jXZWMPtjnPL4bjKBiP7k1dKnMEemombyT4pUvEppqy4fvX9p9xGj5iAjUCUtCSsFRJn6XtXFZVp9aVUZZkcuJLe",
  "key24": "B48HERpsqBGeyZUmJSATykuM6zyT7gJf2x64SiBiqSbZp8x9v1beMX66i9eCHjZ4dTP2PD8vdPMXEStvZ31C652",
  "key25": "56fBJpTuT5vC1Jmrnce5JS6FkcRCMLENJBWDqoJUZgX9YoCqU28ip5rbxzKPGaKHCxkrpd2jESFrQ1do6fQVA11r",
  "key26": "3AfQrmN3KDeX3mLGBzBMLkYPkenVMQbQw59kRhHfjvh3MZv5yq6sH1Lmc51DHD1dozqy6PuF6CHQm3Q43d1mPy9y",
  "key27": "3TNemh7VgAqnHf21WMNUqQUgnU7nCTNZDVGb5RsosAerAz9XqiYz8ovcmbzJSHjj2ZqwuacdWCMKfGsWQNje7aCN",
  "key28": "4B85d9FqucoWUjtRzaMD7UkjUTXxSuhRTtnCqxhQYJjV1tcwWh3wzpbEmnGTuoKkgnSMNzSpocb8cDE6CZC8cRRz",
  "key29": "3k44jXyVe3zxUBAFqAcGpUAENihnXTpzdtDKue9KnTpoPoLUUZANULjuXSvCqZz5rim3yMRu5LRQBLRpvwNnNyqs",
  "key30": "miKGok2hhT1gH28nMib3B58iwTy5aZueWVSSY5LnYKagNANJF1jkwRbVxxi8HwvG3fP54FxbTLRDwcyFyq2cy7U",
  "key31": "51qGM42xYjeH7c9Ug61sJgjfT9EttyRJgKwPpQX5jKGCmBzoBoHw6H25Xfn9fkC1ewZJChbXPKrqAaY15tHRe5a6",
  "key32": "2KFGNxJpKL8q54B4YVbqiLuDAfXS47QTfX5QsKuWceDxVXcZJm6NsTfxY4YpkHTUnaj1947SLnqL8pHM3pbh1okK"
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
