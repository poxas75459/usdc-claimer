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
    "4ENCi1EqC8MV6Xk8ZY3yD1pvfwEo1ZqTdf15gDXJe8EqhtYijEmENbLaZXTWy4fvNwHwMeWs8dh7pPMKUqso4oFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GwKx1q1AXsu5NNZyUEB1ZXPtcpqAG5B8aFnPSH1he4BioFNM4cPD98Qr729qQbn8J3d3kzaTeiRmGdQDMt866F8",
  "key1": "4txLbqPctuADEg4BeCXWejpWWLc6fRxPVihnY5WBvDDgTRfAkqyy4cMwRqU2ERuPBQRSuG7kD3BbHnEAmGri6JHY",
  "key2": "5ufs1Mz7ndo35BBbTiVBUX7pu99dchS5ZBbTszANhBoAHbBEJ622Pq2oAJQiXLjsDhY65wbSvKEtAAT1GtzEgZ7a",
  "key3": "4PAPAYic7W1NSNKzxyukPfQ1YHQwxpK1D3ZxwYhs65X8Yv6wiVz47BLax4H8uDEjesHwZHKXpbq8wzmYb1HgonRF",
  "key4": "5WEcaoSiq54TpZ8cgrynuqErwHh98aEgd5rfTVWMH1ta59BSf8SNryKFbZ5NU2GsF2oBZEDyJcM7HvFm8HCmKF4S",
  "key5": "4GnJusJd9AaEkub4Er9j6quHqgYrrRjGuJdSwYFyipHVPbPGYro2gPExfMpTu7DDX17rbsgtX3MyNqwNh6o2HPX5",
  "key6": "3R1BvtezXV8Mkugfe95bSNsvjNqQUULZTDMKTarqFANRRrmrHQd2yXXtQNzq8bTJseCjYmtGc2k9493t6NzNj37M",
  "key7": "5FRoqBVz3Q5UJv8jr7AhYvWALwoutNfmthYXp31tWhEz5z59q1r7GCf73Pd7UE8xMcFgFXcjAxyxTXN5AHsFPcaj",
  "key8": "2a573UNuzgh4vTJXCCQ4z4Q8zgYVu2TZVgHE5rrvM7mtMxFcvXnSS4fQSXDtov7HbXcQHiz8FLzXqDM5gJAfGkRx",
  "key9": "3t2kyunY52q7BYa3A1whx1rBtxGwHj3YFuQLab7xnAKuPGtq8A6tZ1b2ugw9WBVvDjnJ3ZiKYNAvmCT2R9s75GmQ",
  "key10": "3mRQR6SNVxhGEd7zFGJ1ovzYW6zPsZ9zF132KLvSjKpn6XHGU2kivEgPFEDdNAQHBbcVK4tvxEKj1XnP3TPbWDbp",
  "key11": "3zZQ897y2Qrqv9mLNNzQU8sSC7XSfeL9kPQ2eNtJDM9EYn186GumQmSDw2zGsHmUDZQYLK6A2VTqvBJFEPiGqPPa",
  "key12": "2WckExaXenj5f8gKkcQFM9oLgnNFArnTGjC6a1fvZBwyfFY25k4K84vysQimyfURH6kD8a4dv1Ax1RXg9BaZMvtr",
  "key13": "YvAAXaNaHDbpZK5VtzYucbAvo4vjGHqwnPsZ23YroSTaDURubPnLBY3pw2QdBhp5FPGWnjXN6rNDJwbZdCRNsN2",
  "key14": "24V5SkG8ba3rrbRC4swAKGy6H8Stj1P8UJmx5vh9PcPyRBr8enRGitA6EVMBnJfo7wFnbyWjqmoe2V5f1Zcz9d3B",
  "key15": "3osoqpwPpVSeXmeuFMkCGBJtXCd8KZpxbba854PSntNHkU8sQWKCpaMRG1AGUQmfnqTGTcH6nzpZ91qcfamSSbd1",
  "key16": "5fyHthJHTVMxhfZG5PZYKNPReuKn9jpkEAi1vLEzrK4bDc2bq8gEPaBGgabvDCGt3MxZGxVroSPfYYMa2PzDyiEM",
  "key17": "5JRC3cC7wViqFkNJr1RbgudAGg7SQDH4tRmTrnZ2bfJZSqewycbKKChtzEvHLhkviiJ1z55JUUcUJLWE7Cn3tYjT",
  "key18": "4vU4URKh7cFcnKfJcj5a5FUVRD4PrfxQQt1GHp5qDLJcGnuPdE6EMsdTMCHK2q3Jy4agCVxDDqjQ3NGecDzeZnam",
  "key19": "5Uee22wHDAaxBrjj8dtF1Mtr9dpPP1MaecG31LWfU5A7Ddvxsnxo9MYeD14B17GPMsJp9fxvS92EkgmNy65FEL31",
  "key20": "3SG1jM2izNLC5zHirzshJiuqijuPK37Ws1qp6qWFSy9afYGdEH1xj3jwyD4db9vpXQdC567Z6xsv5BGtXP6SzJmH",
  "key21": "32QUU7455TJweSZzkEzSSFPNjQjzyahWb3VtqtSG85PC3kXpkXztCKRyU3LqkejD7b9WfLCEz9yv9B6FqHfTPAqR",
  "key22": "5ZDK332bBLvajPtwFMDubJsY6EeLASYSdCKm5GMrUmDj49cgwSLySugyLFhWdq3iQxQHpFaQofk7zxBPHdXMNH1a",
  "key23": "4cSGfAPTu7tFkFED7cCYVgW6TrBuXPaAzHnMGhqPntf7uYJ7fw61VNnuQL6d3rigagQQafVFVZrm3ijwSjrKwcX",
  "key24": "4K8yWHM5SPQ3facNwgNYFAGVZEgDXpT8wH81xaSVdCiSzeeyC7GrH4KqGgQ7Ge7Hjb1pXswRhYzPBDpmKJ87uv1i",
  "key25": "5CN2vWSAwoCBKVztVXpKFRMhNFbdAexd46SAKCuQLJ6JkUWXxhreiRkz7jYUyndGcPBdJRWfUMHJZc4hFqXKVV9x",
  "key26": "3GaEBdywq1fJySTBuB3y37bKyC9omyN2JadPfEC4dHfoL2e7fynAYJxvkHAfXEqDzmNbomvAV31nU9xeKdKmWjQa",
  "key27": "5Ass2Sc9CfZu7yLNSkifoGUjdc3nUYTScDbZv3QHLLPzP3DjZrk57y27nd7nRkG2vBoeipJP8KX2ZX9hyhUJiYnQ",
  "key28": "64McUowsBMTupirMzPiHeHgUbxep43QkznU9D1arUR2he5iJdHzgBhdwJkwBJCFk6zTDH9VZ8Qmc13urjuvxafS2",
  "key29": "3GVCn59dnkpWLyQoLPi6ji1c9gFMH4H9x5iNuq3ybaWgCjsa8LV5VEFddLiMNeNZZQ5p7qHnT9zcywxPazswEFti",
  "key30": "2ZDFxRXgtVzvWGPg7USHJnZHVjsXWm9sfAcuteBfcta7Dk5fqpN1Cqdpv2WDqvVaz9vXbPJCrTyX8636xo4FEszg",
  "key31": "3kkQCe4B88MvzuRUhFNFDSUaGsrqGbZMfnTWgoH8ZPKWh38VdnBQfNwLGBhTeBrWAxER9ErND2ViizWSwMgqGkh3",
  "key32": "2e4nBgPXj9rX5M7Ewk52JtP9qbqKruvqdMWSwP85XQREzQaqHE6bmrUGQnsG2K8K9Q2GFdRHh87h3MUrXwxDrigS",
  "key33": "6C2pFZfKFM8uLKqN3FeNpSxbYoARhar23zAN74VhXVX4nVLLCZkcDZA7iqapK5a6fFL7b9ADbfZ62UYySMXyEdT",
  "key34": "Eszz2xMU2shXAbaW33HibFubgBsaQ6rqQq2z6gpxKgmCctNs6LovFdzLbP73QHQi1HjFQnK9nFFZ28D68sLtLY5",
  "key35": "48NhuiK4iv5aoQVsWTcQ5SNaQzpSQPHqjik4Pmrao4ppJohhsLqkxZJXCDMtmmpGxgTtiQZ2Sx2Uu8CVzgAuMwEN",
  "key36": "54ZExfV4yrJi2PhoRvW7eJYuzATyMqNDAzS7AbLuEejbh2tW1o2Mq85QFrCFPZcHbshhQpd8AVD7kzjj9miwJddX"
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
