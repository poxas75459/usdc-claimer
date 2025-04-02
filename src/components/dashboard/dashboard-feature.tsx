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
    "jhknSiq2snH3ZAghSg2zErn1ehoBEM1q4A5iqFkEYDQxbyHUwVN3C3iae9M9DBQcrJyiqgmNAo37nf2dYyzadVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TL3EZgEAihbMWssCuSracfz9r5RaFALxbnLwBgqgaWq6tgrzSR5iA2ZSvssRjtMb1VSmgqHENXtKncXvXXUU2c4",
  "key1": "23DbsPqEAhLyu2C5Yz7c2PPn1NJgjuqbFBioPFVLdan6rqQsMHokSho89h4kC6g4ZtjcMAiRvz9XRXpCmMKv8eux",
  "key2": "5U5mq6K8m5SdBuNDk2QViDMoRs4gmZmLwbKHD9UKSUEAQs19aymVa35yR7ejcDCdqVA8ApZYJBxi7YUbYsZG4ZgK",
  "key3": "3KotmgbdKbnNsdYyzet9Ndx5zs3H8WS1Yp2q5Ehff7mUUfr8QEjFLQMt5EcpXYWBvHP72Suxi44kdTfVb2ah1S1a",
  "key4": "DMsgQbknxoKeDjEwfxpgAC3EnzSYmeJxGqNymoFWYBE9eoQTdZvE21a4tLbXRyHqgL9QvqpoCjNYhK3Afdx9vVB",
  "key5": "5k1QkpSQMUWVJ7dd5mVXeU7JqihDTkC7CrJi3uCMynmYBAUGgQPMj1Xr7JFhq8MB81Hv5ZA4K7qSxCnh2RuGp9F1",
  "key6": "2LFtohG9VF7PNrSJ1dhbbbLzzBEfYXZyauX4K49z51mXTZYgWHMgdSFGLx1R1WHLrpKoi3JqYmLrSNbXe2cMLND2",
  "key7": "2Ah1QTWcpzAdwEhyS1Npu2H7Qq8WYb6EViW8NvUEd69pH6YuvzeAmyC4wZwcodyC385bfg6sFikCQHtoiLQzSyqH",
  "key8": "3fieJG3dEYsKgZfRX83nEQRGHW3XWE3G6uYW5d2eSUCLTtkSL3d7gWFW2K897J3XgjnK2Usxrq1w9W6TSP4rnjDs",
  "key9": "3t7oLgvVuGyKhJMbxw818cFZrGTaRseoJfTfT5Ysi4t9oDuZzPJKTgKPFeozcp4seU9M5k5JakQEzLJfC7rVVcbf",
  "key10": "57wxbcc9hczhNaKx5ZUgx7dpNL3B3sW1VQj5uv6P68xYtqxkubBTqDSaof9jdmen4PHBcd89b8ceG94sgt8VH8mJ",
  "key11": "5DiQPDBRehEgDhUWbniYcxBWXKrRgfQrws7hFpJSzCuAcZKiBvvFB2441g9X9mBk7Dp6uAzHDvzekcboSj7mzahE",
  "key12": "2DYzBbjtkHwYB1PC8SoZpbKFYBSWWNPY7NBjgeVWj8mf2quc79KLNb2eiWzHwamv35ZoER9zdQnnF7wvhzgVa4V7",
  "key13": "4UjnYj3HmfB6mCpRxd41kf7H5PgAsrvWvwEHasYQKR9uJNd4mAQ2kSL6pqPx9oe876xM4e6d53fAGdWZfrwhfV6u",
  "key14": "4ePXjPQ6uRMnegPeZ5tCvtWBhbHGAcBg1jKAVcEiFCnArcEeh4VmdqsE44uMcLgrr7DRw25AQZfXCeKsLS4TTP6T",
  "key15": "4kT98rHYxwKuoorCSnjoXE6wWcZKw5oLRSiTWUf9ejaPwxbS6b5Wzx4Bfwa1mgrDDhgD6Lq2zswS61waxm3dCxtc",
  "key16": "3kz4cZRCG2zmUQ1W1YM9jTTwNYZnCoEJr2GEPtv4tWJKcZUeV19W7PuUCY5EAxmmmyuit3Nvmkw459womZKMxPgV",
  "key17": "5pUGhPMAxJcE7f1T4wbCvo3WsSb8hgMHR6XFFpMZEQ7pyj8R1EEThw5C41BXeatzWxqeuWBn7PyNLzBj9Y9Dx4FW",
  "key18": "2ENWmc4VZzQWEcxzkmHkqvh56882dnM69uh29C8xkXiQPitynyPB6Adkp8y4fU6BAF5cVGW1AWWNzL66XwDHqe8U",
  "key19": "2CrRHKH7U8EJM5jiY63BB4P3p87LkSpPCN9BFqGdC6ZXxTfDdPvdV3z1DGSPgGVZ3Ci5ZQn5T4VTPBrqZqCcPqDC",
  "key20": "23bVgsLUnH1abdL5oYfT42fEGT3xkJz741JhpPxHUM7Lr8dUbYdLeBUpkyoo6yP8pnFPrYgfuEaP9iYqQMxrXBqb",
  "key21": "YHXhJjoDHK61t43PPDLDyEu3Yn8XYadDGdLTmn6YwhsnYJFNxd9rF5MqZeH4Qfx7zs3Xmu4tJnHfeLya4h8nVyf",
  "key22": "2SsYeNBA6fxve1xWpZEy5hjZiNVCdKCaJ2GRm1LcHnUQoqiiJMpyvq3DXscYPbCEniYn6v81c9K5JYRyw4gqenB4",
  "key23": "5fMSQkZq8qnwACsSN9pR1Ve4HmdHPXub7vPuRwLNGLb2bfSySjnvWdLLfSgdZzTTaqZYVyqHbdU6yasJM4vgXePR",
  "key24": "6n6AcnWadHSa9Jy7ZN4RAWa8nUUgJMsSm9obNtWbvxAnSeNkNef1PjejKaC3PnTgc3ULBWDqEBkReKqa3i3MQr2",
  "key25": "amZeAfh9rmM3HZdy6kCYWsXkPnPhPCtnGC7gWJU9F6WMiz3AJnkdStfG2ZbvoYu7yhe4EMnQf11QzGDe32nXJtC",
  "key26": "3fvDhPG44Gqr5vP8rZtNgYSR48ivmpk69bVkMUxZPRk8fpQCdvo9H76WV3nwK2RU6zRzgN73BmxH6R7iEe1YbbDm",
  "key27": "4poUC7gsVfpmoK31pnMJcXcw2Cf8Smt23f7Syae8TDLWHwXu5miDhQtb1DT7i4N343e442aQc4ACND71SrPfFMD1",
  "key28": "4XpUKQWiaMhLeMJYQCL1uxicH22JhGPoqavGHT7wNTQFE8jcBTP8tjn8QZGduARkdvyARyhWb6Z1i7dEyEGmZhvi",
  "key29": "LoVemQjumuj4sKpnEA8X84qgoynYgEtc3BpZZh159iuLLc4XN1ovDDjxffZCKnWKyq6Nh2dLB7E4z3yp33oA31N",
  "key30": "3LN12zrLDLQbNLuBAHA97kSQJ2B39VdRTAptEbCkge83SgA4reebVVRmKGZbcPDHVc9KSFUresTYahaPofGbpJi3",
  "key31": "NFs3ZC3L44cfWV5eJ4cbBMMi1Bwp6drKfJxowCFcmt4phJUu4QEtJTZZBgPgmsomMe5ksa3h5waFpivEJUMHXe1",
  "key32": "c6kwKFXQaPMijXTQpocGfCWcTMJSbPP7t3RKA5Ps2ktyn1yeSwQvYwsHnVLq9BYvTxHcS3qTt3yWJhFqm1yhsfo",
  "key33": "3HV17XuxJPAV2VWiL6ieSjeyU86AnFgCsPZSkZ4itwYUrryMKJD7hrdeSczyKiSXcwuZ2zhVTpJ7gfhTjJ8eaq7m",
  "key34": "39qLpVV9gesHYFG5r4HHWoChYheBJoJZY1s61jj49ePYXTmW4bCfcTcYVPydVBdEubCpEbhbPoZENpZ2JnAAdmht",
  "key35": "2wo7h9ehE6fU9LNzXAHjHQjsdnDZ3stJ22oEHpZaZ4ZqCqrNyxec8EebXnAhVB1fPiRpHUDk3oW1M7wrjaxntAVT",
  "key36": "2EvoZc2yGLQjWH4gBK5gBTvpBAhRSswjrXNSsnXsmzqoGBtfAAXNtdXjBLjFYgP6gxnYUNo5ogg1tE8YCh3KURWK",
  "key37": "4Rj8Jj6sC4XBZMY6kXaFyLkBncTVVNHt89g3i63sf9bQdJTb2j1wDaCdTSGSUpXAi77RU6TRe9CNHS33wbS45AQj",
  "key38": "3Xuo32Fc1qM6iZtkq6uo5wEBsoggSS65V9htJYQqLmCxukLbrNmvFUKrZ827JR5ZmwdCpAgQrq5qwNmq3EtFrXB8",
  "key39": "55KEj4AaBFbHsLzVXG1sJ3F3pmKj4G3nqnxLyaZmSBX55UY7ZpZ511KSHiqgExpdTKGLNAD1zerrpr8JToHsY112",
  "key40": "1281E1URgDEN88s8jesAMrs2rhhpDb4u5hcZ9y75R5mwDj12n5uYTx2Kt5XMnJWWDnePwoyPhFid6rZSS4romacq",
  "key41": "4PUgRZZWsmcVzpSGESvvMkMtqFUapYdgkhNyNyLQZfeaYWydfFhVdU4qVqLDbpXzoisLTFUFWJcvMxGHyopQsJ8G",
  "key42": "3PvfjHCbpju6K3tQBKLQJdodcg6zdSxDSqnxLyh46giohtipdA6oCFc3WVq6B4oeMSVpvw34jtspw8tjEMxWWu9h",
  "key43": "2NiqTXDLph6MHagaSXYa5PvYWg6zvBVJULYibsERCRCxT4huMHddWWY9JtSCi14Wq4aJDSxdwMcCcVWUghD3hofq",
  "key44": "2uQt6uxgS7JydoPEKbqieDz3TUyMABd936LY6xEmmgkXh2ZDUUEA3gb6nVguQCebqRxviMy73y9DWeiEieKLeGWB",
  "key45": "4jRz9Th3ikkAB9E5iwzj9gxk1dQsmCAFDFmJLjjmb9qY28Cnr33cqWhwy8omRYQwLNUY17yaxfVeHDF6yHpCRf5M",
  "key46": "28fVEPKMCKqmaHLwK18UT3a68cog6TNfeQbWbuMwgDxe2AmZ5aiztbfpc5C9LGSZRuWsHq56FvmAizzBVMiMUXbA",
  "key47": "g6Loe2KA82kH7kVTTjn5QV2K2YLATdmuESs8RZnLQ8CPLGkyegHWkwCFaMMxanUbAuaW1z9gCPBnHXTL1jjuNrU",
  "key48": "5S3YAvd2geTRkJDK27sHbUfAvyi2wh6iQMuagryGwknM771tRc25toBnfMKHrw2UhYQ5FE8scVPEDr9UL3AaN11F"
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
