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
    "2PTUZqjD6obwbckBbbwMZDTZzMsuF7rVcQAttGe5FVdXbLNAERv6uXkPU7mK4jPXPxokBxogSigsRtKMb5miCg9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EoNNcNzF6JXF2L6e1oVjAF4MPeFxZfDHLY8miNX1X3G8rTHsb2KMhgo9YKd7CH4LNc7waJWomWfi4op5GaTWWjq",
  "key1": "38j6tRtvN2BKybFojqx5MU8YCfxtkwV82V35Cnuc6qh5f11tNaC6fKG4YXAk1R2AyJa5G1GhGQGaVVes9XNXcBcn",
  "key2": "2q28A3AzRy4DmCJzKWz42cCdbt4zUm9fUFLfoBSUib4YvT98HhBn3HsikqZ1Fawd4CN8eUtheijgcPyEZuAp5Z7k",
  "key3": "3PNg6d6oNv4N461MjvN269BPUjHF8xeYPaUGodSbCXb3u6m6mxvh9mjqGdhWDSWYdHLiQYx3mbHd57oamNaw4Lb8",
  "key4": "4FYHFLpsEWSvofJLrfdoznrRvyH5xvbYxRduuy9ZUYTLQD2wyvAMUf49E1vQ2kfU963uTNSPuSzNicY5zwaYntZi",
  "key5": "3wkE5gJXZ7UvfxWDhv4NMUutoYUoCeoDFe4YVdMLUJDqUfHGd6Ae5sheat8cAqT7hDkVvt2NW5MRvo6jJrCno98T",
  "key6": "3EHsTQTBvVUtoxpPfmLqCaT8hkQWkbQaJomqchow6VsWiQ8FwbisL3gcC9jV63zje9tWaZBt9ah1AYX2Cmi1UmQ7",
  "key7": "VTecpsZ66x3N6oiJ55uLumgJAqRpSJiWovNttLqr6uw2h44bDRusQFg3tQGXfoVHpafgyjxsteT4B2GBXTjgimg",
  "key8": "2uHBBkaARqt1REHvNQNHNYNjbnDAfoX4pnZiAsgUpECj5XUhtmKPG7mUtnsQ95dknFWVKpCbHbBTxAzEhPsD3Yb8",
  "key9": "CDjxrD3nDjA36acPJu6zMzcPF3SvYfmgGBDc9K84UNxFDAPe8RRXNhv7FaMLvBqpEact1HTmADX16phyYyRstCX",
  "key10": "5auPWXNwXZXd65CK3bB39YTuSsiNNtfZFqG8vddcj73Avxf9GsbzNHCPaLeuD4axaXi4jDet43WpYuLC92HjfnqM",
  "key11": "3LQUqCiJqbgNdebEihutL2Siqt3QrLi7aCw7V42bTugYZLpBGvYEQrvFVVXgdsRKjBcpsVf9ASCDPKJWQBHWdU9d",
  "key12": "T5zGsqnUixp6nZRQxYKg7ZR9Vuho4B4tiB5mdAjaThrBw1LrWptqtv5sdNfFHeumnqPHHhESC3mX3KjpsfNyy12",
  "key13": "4h5qzihQmanRbuSVNDATs1xcUowtF6VssdzfeKJu4i3fpn1CFdHoRWc92FJaXaUdLfkvrc3pRLHHK1pZEpSYbpSo",
  "key14": "4epbXop5aCi8e4SFuS8nk4zPrtMwwAg3bfnMhgGvLrGCQ4QHcQSGgyAtUgq6mfmjX9y6948G439ESVtjv8oWK3wf",
  "key15": "67iEo8mSAfhY4qkQyuMzXLUzcBoiFk3e5oeK47XBfXBnhC7KXh8ix8eR7Eaz5SGEKsV5CubVyPuRewFWtjNYgT9R",
  "key16": "3eMyLJ75xWGTeJmf6JFbdS3cm4G6Q6SEq8nHVG1svbNqkkvxTVv2TP2ti9q6h2noAtej5JtGU8dnrANnoPCbSc4J",
  "key17": "sf4vsm328nFaM5h9hTb5Bx9b3GcXp6W3BSQHmQvfAitW2ftqwq7vZ3ebRsDDgeiz7HK6yMAs3Uzf1gVG6TFW4ew",
  "key18": "3TdGWfFH9bq6Gp8Abk1fmU6621apaPX9xombCNGZaikvBGjE6F953Jq7QQxdGTxfKMTiAGa4B5HqYifPrQnfGkQS",
  "key19": "3JtHks7Mwb4vZTDN9DH5xwYQ94yDJHQEiht9QyvGGh44azgRtdKCqVHRXvwThjpF8niwtngyAbmK7UHukKm6562k",
  "key20": "4jVNB6NMCq3GjpeNYNdFxmtGBfYRsW87vr7gWExKiVFRzuERvKawCmjDVbaRZ8rZgfZBXzR81eiLiXZYoTt6xVW6",
  "key21": "KoEQJaHyYAJgGLc6nLdG59hmcDcjV7QXKzwjYb3kCGfp2eXpmA62qEeQXW5wTPZqJnNCmvZtWKfgWKdGAKqTWeD",
  "key22": "dAcByp6rdCL3Y1Z4Rse5v5e8FB4J6VkBfVcoqsg8ZryUGsN89m8ef1E26TCEPDJtt1RNUCtN49WHz6NYYm2hao1",
  "key23": "5BMLKsNUc1qovNgQchsxEwHnATydcT9PHuZTyf32zbj1tDiMPBsyzKG3DXZztpUUWBjqzQNRVrrD7nwYnZTzAsor",
  "key24": "3ccQ7EKEWwk7AMyweRtTZFK2Z9b5KhsCqmeYC79fKY4PzDAzGwhpb3o5ZavYmFeUJ9h33Vz8sst5uyqPHEPr74ti",
  "key25": "BsuzQ9vRrA7uCbTUHJnF6tK6FmYJorg753pPuTJ9ufwed2jJ9qcJs5epfwRyiiVSrufowsHeRmenkneCbsFR9sz",
  "key26": "57WNqf7cZiAuedUGWHqEScxPjMR6xi4Gmz2cxdRYFbq4xxxCsH31iDuHw6Vr6BGtVRipaJPs75aHCTNRhXs28tso",
  "key27": "3UDgmzpTvnjHP4YtLnV6q3YViZ78VYj5GqEis1QdcycGQ9oCrrnnohKid9C5q2GtGDPjKyhrbVuC7Y3u88Zsfuue",
  "key28": "2TJW1WqKzRLYSzryfmsoTHmnSGgoq5XBNCTczKBRDuWiTHmvXxZqkVqCbEKQ3rsfg8fV6wm2xRi4sG29boPLSAjW",
  "key29": "HowSErGckZB7XAat2GvSzsjfSgGMLqioRtmxjQSffTB6UaNbRXt6hvkpVaqsW8ZCYYhcLTVmduNihSkMZ4TFxwG",
  "key30": "2ErkWv5JUBkRPeAc7VDEV3byVwcf15tg6gnyo6xJkRk6U1eEf2v1PkmwV9MLfDpn2PRMC4P3gHevpePGFct9UpFQ",
  "key31": "4gKQTrrGwieuRM7uEwupK61dpARBhWsFVxE8fpnBqRi1p9nYrHne1DgryuqpgCXwrXnD2x4YtA3RTFxrPXpBctwS",
  "key32": "5yrEoECWoexHg9ooAAJH19Ee8kz52kUWjfqT9b2DCZC58PBqLPE2LP62tNv7UTPihbaPb4zFX7YwyekZDexVfaAE",
  "key33": "5ucst3bVKX4xdDMgX22P1dc2LL668yR3qK8wST3y37Y7abw9g5xcoW5xARu7YD2NKBh4z5GqmBfGXB4htbCxatoN",
  "key34": "41NHj8qPsnirqdK3VLtn1fUMgKtVUy7bKgBYaTfe62WXrariGpEyN5aqfSJHFvKHLEAgtjQsrCXfejVoozorH3J3",
  "key35": "3puw2aNeW9Y6wEqAndkKMU8LZFNELGn6Mx4y6npxBZGeG5YYT3DsTFTFWdbfBBg9SgrP41ZAcjq4uVvHaKZZ8mHT",
  "key36": "5s1TjBpzvpiQ2o3iW6JCAWNuLciSsEVyh9jgimDLmKZE5iCr7pQqviLUYvjFkov2Z4LwNiQvdBqnB4B9DBdVzG5Y",
  "key37": "2cP8kpCX3YboCWvzEB5Aq5KCGmJu5aX8eGiNmsBQ2AzZZyngzT4qY7yJDMZFjxr2z6tezKj8rFqwSq3JsMLDdQfc",
  "key38": "2czjDyFuvhnmhFRbPuy9axefAq4euSEQKf2bRSAmo2M8po2a4cLcj47pxW86fstTh9khT91UnNgMr7QysB7rbBZ2",
  "key39": "ryd8e7YcNxqoBXzSuhgjkyzBcbgLPTsdZBD8dxYMDy4Eq5eAi2U3FJw5FwLiaZ9WBaUvYAxi1D1duDJG6hV53dB",
  "key40": "3PHqqpi9xEeZoHUGs8ZQMUmq8f3vAVwmeXZRiE1DMZB65mxDphX4T8dvQwHrpgPvSjK42MvPECnKc2eBqbE82rKc",
  "key41": "3GKXcLSD3dxeXdco57rZbmW6xFDd3gzEmNk2bT3FE4kNG6udAT1mQWiZy584k7j2ZkisyVYeiTt6FSGd49v6BePh",
  "key42": "2dxwLEgqrT2pGWAUVS2GgZjkkess6uPnghUkPg35PG5Y8DmNb4qGVjwPt9RdSPaeRMgn4QtZsQA3yA3sqfpx7t8T",
  "key43": "2Ko2gyWQowbGsEhk73kws8BJhNh2zJmsJt9X9Au96bh6o5eS4SHoQezZnc3jzysThQVz22XdJWrkCXz5kXmr35XL"
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
