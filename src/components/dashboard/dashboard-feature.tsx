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
    "cQa4yD7PihCFpw9XofBPc3GsB7obXZXmCUpwnTWusur2gcMQcNdkcCod8YBJthykWdLkpfoGA6huAosgi9S7NpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MoXscCHoKdn6kC8eRwNNiR2TYuep2pkeKWWAX8Tdja99CWmLgS7b1y3M4u7d2sYduHgxChBBMHA4DmAVf8xgieG",
  "key1": "u8RxeyvxmzRhSESjKWiPqDN4tuov4gYXAC2DuPfSMeH3vV2YMZE8qDhVSX4RPWub36MUDhMpCCttSRnxZKxRsLS",
  "key2": "2woedhSMJrBzLA12t6V88twFk16ZJ6Ve4GZbtY2MRz78vx8duJ4CAebFEyov1ULqDHccK1rMvs9cYhyLaC6WqVUV",
  "key3": "3RgjJBNXcBtDqRCnyQM6o8dHyXBTzdCkfTqMYquRnp4BQFL8MBQrKen1RrxD5knpfKz6jhEZZtbp4PcWEkgJkC4j",
  "key4": "2TnzdZYK6RYKG5gWU93MhqYMu8quEhmYftDMcrDYLCXPJ9wJjrzf2QLfBSpWhaYeDMgS41Wz21g56twhy1vYWyx5",
  "key5": "4MyKhEFvJxAw1LqgLbwWDoBKqhdkxt9ePuMKnse5ZhsmnsRdP7NSmzmEBrLJrKwY95jSER9yfvgnJFhU78btj46k",
  "key6": "63D4f4Sk4kLpEMA13HBWYNHJ5oGDFY199VBbHGsS2uaTWJRxmkXAbd3xJHz1Q4qxBDqrXs4LfWfqv9PK6b3ckRq7",
  "key7": "Wcy5Bx8CB32uE3qjeEpSJaSRTxhfMUnKpaMbXpWDaZyg3zot1k997vN32k82diBe98U7QipwHcLKuovs9VYzs23",
  "key8": "3w9poMNujuK7XtgPPt8YczCNrYY4VWZEPW4cNcFCooSth9i4y3E6tPwfwCW2rogGMy4tF5QBQyeAycMKaBAWdVBm",
  "key9": "45ur6siAskJJyjiscWqHU6yGzNvxhaQK85QR6yRb9MDm9sVJjsWxv6gat458jHcVZR7sfPA2nZ1PKH59CqAneRmh",
  "key10": "4C7YwjGh6HUnMzcfkBQaQCogRg52DHLfUUq4UNWKYyRisncNQ6GNfmuTDKCL5jQvvjnm5jkiwjh4gufq52rAkURB",
  "key11": "3rkRxE2uNSUyENAR7bfRB1TjDEZK76vVtVoRxdVFBv3jXyZLpk3NREpM9Poc3Qg5D2dvomXUFh8eM17itgUoK1uX",
  "key12": "5E2sHv2zqxdmbeMetLcNqDGgRBex4EmYVszXPug1d1iW7XggdqvG9RHkzmgX8TDh1bGZ6qzhoarCT8RCC8xPa15s",
  "key13": "2RHquo7ztsvKQxZWqR4p1uk5K9kgF7ThVshddRLZfMhV5tRPtWYJ8Fnc8UHwB28KYm3auXoMUJPSNqdupPJpYWoN",
  "key14": "4dMVepnpZhxsWmvi1NnUwUoX5y8qNFWf83ntDZrf6FzJxsyHejc6zFFF4KQnycZJV6pj6gU6AqWQSoP4XaE42ym5",
  "key15": "4NnBW6ev7fTVXpmR5c6vMk16PtQpCWrBmsAUjqHS6Si7e6zx1wWiGX3HvqLLERcc8ZWuPrngupkWGRwdBfvstDDz",
  "key16": "4XcVj5YBaGY2hxuPDcCjWEMXb1mM83D2eg78Dy3u2iot1zihxAUQW1djDaWovgbLrqEuSRizDde74UDvEafhQZNy",
  "key17": "3M8hDxMUPM8e4Vaq4hBNyoH5e7KrK4ruNCLWKZw2Dej7mni7aFpyJC4cwcspsLbqjBC1ghEzayyDH4Puev9UMwLo",
  "key18": "21rociCNty1kfSPjL4vQNqaM4iyfnhjVJsnjH6L57pjUq8sbnkVp6irx7NLg8GkwjhNFSNnEAxxeDpuA1pVtmitA",
  "key19": "2gM7xaanrstMXjYuzYJVPJv282veWHLnJcWb5uX2KXvyzFQ93wBPrYUEbyyMv9WDptMF4FmPzd4kW3eFVEhdWSwJ",
  "key20": "3q1hqriizdUkWXvsZmKj79kTU8REWH34CheGGnMLmnJfM74qjkXRviqQUvoUiFGXXoy39fR4SmF53PKxfPDYbCB6",
  "key21": "2mdm64cdnZ345ayng9c1R9QJhyaK7M5XRa9SY2pPrqNfjv6SRDtfeCewvicew8tcpQqJYgMGJdaz6FpTLYCxr5S2",
  "key22": "3Dr2qJPx82gRi3kNphM65i7pqkcm8uNBzJsMLxpvreUiDbS87EFm2WgSSkNy5MqcBE43bZSyNY7D2xqRkp18HtSx",
  "key23": "49sBXuQWcJLLP4aWtHcDBRC2bfcVYRLtV28jC8scpovniEmJxWA1NZocGZoD5DLu6wR7NsgM48FMiXT9oCpabjRG",
  "key24": "5iV8mmtoWQCgH7sYPE4WAgeDXBxStFtvuAY4H8E1iB31y5FwmtntP8ARdPe3vckk4C1xTaXe3tzEMinpgRm73n7M",
  "key25": "2wJpzFD3yVDxa6X8EsX5aPJ5uTFVZ2JgJTriof421sDJogDHuDjZMrdDYNftwTKxJTUn2VQ7s4iPTZF3s7Wgeybb",
  "key26": "rsncc3GyCo8cusbzucZgCdLAcpjh4FcqTivemWc9gxwz4zs6e6WTpoBYWRxPGaxHQDSBpswM4Ka3wYyLVQCrifw",
  "key27": "2CCTpBu6RJAtb784Lyex27zGGs6zcmkDW7AjxGTCHUyZZeGL1R38RHH87QdQ61G3jgcLpNyaR9J1XXhjg1myRTzG",
  "key28": "56yZ6NrBT3t7PA3izyPJVeFZRnsxPSHyFUsxZvBJWe6wXN645JiAFA1px7rU176288WXDxABdm6NznB2DV3rN7Y5",
  "key29": "5PCLgSveDCaZBWYeZCEGhRGfemsLTe2LjTMsd28cK7W7gqMRfpDdGqPQnyeWuywFsREeufLZqxLWF6AJGgnHdU7N",
  "key30": "4MWQsd6Jgb5H9pTvey6XeAZD8y9d8zw6yhN7MSmhYvubjgohiw6YRvbAS69dVwad4fKzDksJDupwqzSkdNxowoED",
  "key31": "2JcjY2PBbGyFJnrcAnooLB8Y4rLCi8qfLfzeKicZJJnprkFFuXbvoU424QA4DX8sHAUcGqEnt9Rt8CekUoRPqE2d",
  "key32": "K98grgh4VGzHc2qiWT9XHhSSRnWLfDVomdmWY311pxJhs7KaXH3ZXmbUnGoDyZUx5Jdj8At9XLXnqgMx6MdbCpW",
  "key33": "2KVKh4kmawVG7yGB3o9K1LNJNjBfKDHUuJyqjKz12aoDY61Rohb16qyhgJEj8xJXPnv1Cpo9vS39krvCAqcUNHXX",
  "key34": "5zCsDt9jYpX6KddhHTrniqY31WuhcBeHdYdTiVxVjt8SyQ4gD7n31MDQ83SXgq7BoAtv51VfJ5XENi2BfSFrmAyf",
  "key35": "23eRotz5kSAwNPioTdjgKYMfbUENS5JSH9VVM7YFsYwj2m5TQbMUz2GRuw139LMfGxGPBM39vWfVeU1FgqUzDnaF",
  "key36": "5cVVpwfRgPVxq4qFUhdbvS8N7wKSFZyBSvce15nyGXykCAByfd9924qjT5eCDbSNR6KA8cjqsBMcu54dRr1VbD72",
  "key37": "4jfjxRh1poxQWpdeJN3pMkXh9KrasgqsXV6idF89cM2EQvrqW6xfFrnsM2NyBpwM6PiwByNL4Cm5KE4cx1P6wQpG",
  "key38": "BCgtYVgMketqoimc4zP7AewkiivNcEmCbU7vj3htVYxfNLB4bDXuRoWRvSzXyijexEexTSJh2JZiJq2qtR2c6jm",
  "key39": "5iBnyBsvW2rgyLYvhfv1f8cU3bMjgJkQ3QvM6aY1Ey7CTwUSHTRpTvRCqeUE4yVMHamhaVEBmTt4LQ5eu9BDVww5"
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
