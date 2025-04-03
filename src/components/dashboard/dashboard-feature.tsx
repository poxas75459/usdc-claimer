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
    "47BBhKZSpfrUNotVVisp8ZefJMosZXmQTtpxsP7F46ht1QdyjZbZe6MgEVwjLznT4eidkFRnATY2BYtbbyXGdWRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wpdK9mpmWCy32o4jFSxU3t7vq1geoHG4m5Gb6jUDjhbMv5pHEnSs8CEPk151psw8NQfoQxfs5jAGGUrohYptR2",
  "key1": "4yt4gz2S1E4GXkW6QRcqNMGSP7nDjT1GBez8m56XoTwiQ4TVhvEQrEAfWADgycDNLWcMPxbz11wEbodTedfNqYUP",
  "key2": "5yAqCmGmyNDT8Yd9Hg29tPbMS5KWxWoz64YNwhBbWD3PJXQY638yqdgRL4kxgeUAMP4GkcFVJQzjvcgGccndapBH",
  "key3": "3q5XsVj2zhm7QLdFMKtMQmdP4grQSA64vzzg8CeU1Qty6TrJzwkSAGcdGiDpAS3tZTw9ZSZHZwCXsKZ1tsDM1TcA",
  "key4": "4BYStRLjhGovKucxiFuFGnaLYxRtWzSATPmEY9T1PTfGk3U2zqP2kaaRaijSDZVJwuiMVyTmc3aSsP6rZiKN2mJ9",
  "key5": "5LdC4PwZELueH7y73ArCopbG2fMZQnMHvtNL9DwYkrTvoNYLdsCGX8h6QcwsYcRcM4WY6jgizY28Kid4en5Bx4jD",
  "key6": "4iQ7Ew9aUN4MPPU1ALFRN6Kjhs9GdYCkQYa8UX2H4GpEtzvWhGgLU2W5AH98adwR9aCTnFnwxTX28S28khBeKwNP",
  "key7": "bfXSauugjqmdpiEowb7WHUcrtJT3zJquTWVThMk4rmMr4kSx2Uk486p6muiN2iccbAaxSm2mj3X9KkWHcvBAgZk",
  "key8": "2hEDFqWWSnNawYovW7voZpnBVmFf9bowKEBgq1GjaGDK5yAUnytzkUZU1CGrmcMnFE47c8eX2bbjYncsWJwqzbUH",
  "key9": "2L6c9JNEUJZJ9nppLZpZ9ZA3MxjEL8jB72pzBai5kH53Mnp3eJWyxDDBCZshBH4UzLJkUGWQF7j43G8oYgTfqtx9",
  "key10": "493bRVyvduqMdGV65Hhh87BqjtwVwcRGB9yMe1pKQ8oZBhSkWqwmsPvZJyvrRaeQDBdNiuudafcnA3HAzH2vWJaB",
  "key11": "29CyWciJZLGxdFPeB4KttKExvXL1LVhN5woXNE7VXk6XnJVeysob5oofH4msd5x8JTpUJAkjxsoa347GJ44eb5nt",
  "key12": "4LBogcuo1MjJPsXvWYn3oCgywVT2XsTcHiEHgf1J9F9ogZTHwG4qxuwZQ3EHUvytSMAiYpnPfQmJf4dxSUJLJx8D",
  "key13": "rDho8ymSVgS9Kx1EchzSjtScy9jJfyWmXrbsZSojf5kkYjDFPiGcRi56Ud7axD38YFUBkLUPpyqeRquu5bp1uJZ",
  "key14": "2RDKcxbKiwbEkDq9pYEEQU8iZ9Ctspx8q9gqZ8Zx7ZBqJ21nCpd7rLsfukLsj6tQFGgu8vYEuWfWwDi59DtiHN22",
  "key15": "4qXyFLfzEEYmHVMcgSx1pf39eqtAj81oN5D1ASHKHyRDbuSsf3pARCRhWJLvhvxR5CSUgRzXCqjX9q6NknBpGbr9",
  "key16": "2yY6juTPspA8CnASGBdgWgUytw9AHfbtLEaPVz6y622WcgiMQngaArFD3fjsjUTKN5Fv15oC4X2NPpapnNXYga7R",
  "key17": "5ivVmzNV69ywUrgBxrazdnAeYozGnmxjBSBi6cyQNVWvSbMbNxbeyLp693sKAF2dibXidqmfaVpLcBfHWHwnHFH6",
  "key18": "2CCArQRFY98RMtCX6Lt8QrWLb9Cy7Y5wWTBF7sc8g3WpTm6YDUoiimMQxLvZhNE45TqEm67qpSScZ99AfmP7W8EC",
  "key19": "3mpR61bXhChSMU4GwvdSf1imkGa5BagNKBBD2oB7WvJAuwmXb4ormFwkNixCvcFt4UWkSTZEYG11iiWFYkxFDxtj",
  "key20": "3ptYjr8xLPrmLaQZnMukDrdK7min2H6nPDWcPeexBXNaF6B66fDMMr93rLVMU9wZQZKz9NfBGsPZ9tr41W5mECer",
  "key21": "LniHaKWEZ6ip7AtLMppNELr3s4SxmjZvabhFA7tfEtpBMASKQXNSp5KoELfrpFp1R4K6HUsTNY2D7Tv7otBdrXV",
  "key22": "KqQpVv1Jk22ZACWLY8AcU1CtgWt65wrGtug3ZhknbnoSea9DQPMbXG9v2EvKyprQ1Lyao3rGsLuPYaASXmnPmH8",
  "key23": "4N997riUhRVxsRzFiDzixojkZaKPKJgn4Fn93svGp3fdjhJhiuMH4sNKqP4kFqGwhKn3KEWsBTpbpHAaZ7zzpQ2A",
  "key24": "38tG45KbjDeWm3pcwRigc3ihKAGkBwvVxemUs8UCFUn2D6jG1F6rdtJekag3WMaFg7KxBjHJy13DPHY3xc5hFdQm",
  "key25": "2gKxoyAcrE81mjPtmi2FH8TFUWoR9exhRmCRPd78E2GLh6fcnEZpYdNKSrSZG9r5SAMZAsoFkjYKEsdDhPmvXM9J",
  "key26": "5qQrjunD8k7efbqgaJYSdzNZbD48qgoTHv4pTStEkoZnVXXa1eJnnxZX31eBqwDtxwhZNChxjBdHsxeYD7jAcDSh",
  "key27": "gLvM1AcTXVoxLQpAvc4AfdTD7xGCqy1apmwmSzxpZTMEmiWuiNySXpgSv9Urx7fGsG7LJu8aw8BBAZb4ivhetgT",
  "key28": "4hRSR44dNxHFLPriWToyErfPHy1RMgVtUwFcYqMjNzecJeU6bSDw6rtdgMa9n2nurjQEe3mrdBeNxaGvNbZSKLTq",
  "key29": "3Bm4uhPFrH1kwL58r4qEzinRr1dmiRBmwu6aqDvFHewm9txDq2tdk7FZQ8WS61K5PfDGSQ1trbpayZ3q9LVBwV1a",
  "key30": "2wwATRE6fBHFDeAgoirB6HqJH7GNdiTrcUhj1neAkLofMQdBwdsegW72buibgUTuL5fYVJF41EZSXwc6KKGX5pvZ",
  "key31": "CRyDgKvsS8QcMVtUrNgH7DgD2GmEzHNFwoNhP8rWmCSdRr3CuCExA5c9FDnDhAVRm8UC8XbpwSScqwTxTK5HtXX",
  "key32": "Q9JmQxsnGMjmbgRMNesBN6nPD6yZx6oRt9xh5QbQzaBf8TLLhUy8PCi4d1syNbyMRjp4oZ6f4ttVN9nwS5bV4pe",
  "key33": "cvLeZtXhMwizAfDTfAUpFTiDN9MWLQckTVuYLfJ4HpDqUB2Lejic9JWp5bN1z912uPzn2KbqkVAKNc431TStfpz",
  "key34": "5v6VtgCkV2N6hLntEd3KPCQxSqjmV9DYpvbUEBaDkyrKn7uPRT3FEg1dDocG5n2EWoHXCXSoK3XGPjaXUDaSQTHG",
  "key35": "3AbDxLs6yZJ59biRexVUVcjPRskqE9rmfu7VJW8hHqebnxn8dEPUab9Yj1B9DWSvbtv35Z3LMLxpM15J4rJrdekS",
  "key36": "5wjso4Ge1JLQ9SuK8SwA24gC2D3SJjnd5HjPzf4izYeyKBjJoJWaGPBJWLL9WkQdj5sJX54bzYEeA945yx5umkaE"
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
