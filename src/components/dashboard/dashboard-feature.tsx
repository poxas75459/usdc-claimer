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
    "4i46a1HMwGE3ymP96ch1WviC6swQDMwXQ3UyRUE86bjyhhEcLc2nQURfvMjXEDxY33od1ZjVJWNtKkFfF5m67Rbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U1KNXMwjnwHqASAd1THHUPnL6Zyw3RHvnawvECLjnk3Th9auoDAmUiX9YEnz1ihBsBWCs3wojFm6ndtK23puUF",
  "key1": "5afgFpFm5vSLTzbWjaZ1j6fZ4uw9hCyB7rBQVgdHV3HZVTsRv6T8EbZiXc1vGj3ndiNiK8rQDaAHyHjjvLAMbwGv",
  "key2": "2kZqh3BDGz3wqo2qeoF6firSZUXJaLfRCsL7ciyYgt8qAstLbp4FGzp9xLT9PE9Rx7wu5jBn54Z45ngs11h7Bgxm",
  "key3": "WVVRNL6PBxbUCbkZmirDnDYt5qXcrAA2ENWJJzFmfb6jhSeHUxcyiFFSEGY1Z3axwJSFn1JWmM4TYA89Seh4yyB",
  "key4": "4mYhzBVMivSJR48xgB6Ape3Lry9VEjtFt6nJo428rHNqLaa5BY1eN4PnEctCpVezMJh3dHLiMUDzLNFD7nGBdG5Y",
  "key5": "2arkAkrA56uprZq9hoTULtAvyUsARP7QKtXpJ2mb9sE9QwMdgkB3uw8pa1Eaq8kJf4MTUarS73b4U88EdJoVx7iz",
  "key6": "3LEPvAJ1cq3gNFhqDRB8NwKwc8DtAeowtnYeCmeZJRwqcLZdQ8VdeNJZhSPvnVrfadpL7v3A1ENdNhS4aAXmdGjx",
  "key7": "LCeu9bszPLyfpdAY4xX6NmU6iWagy9hsJu3H63ENk26RCWb58SMWSKAsqyAKwk6QTpcjBzW9RLWTYx1orNjEuHQ",
  "key8": "apJBE5Ptskjwzp5Hu2Yj2dtM6ZKEvL7NZn6me8HXEsDTseaqPcSSNuJPkYtRX8SSn5s9rin715LzBy28GAoaypF",
  "key9": "KDmESXbgNq2quZTqVbdKM6pD74nnheTCAVTG1k7DVQn9eBf4XrquKnNXwyNeEjGqDSTpb8ApUHpQATWPCB1JUvV",
  "key10": "3uWtjuwKWhihx1s8qgjX4VXr83TgAaqZfvWoZKqw44kwnyMA4YgMXRQUNKTK52PoTcgUEKiXSD7ZXoZprRMBibaz",
  "key11": "3o8RiZfy76k7sBCkbn6w5sCj6r3DNyY3mooznSwwGF42zAcqgnoYevX3bCqGEhzPzviRaADS1nxFucdUNFcfarRX",
  "key12": "2JCu69Ve9EPGREnDUD5zYVTxhEhLnXvqjuwknmCMPXqtJYLjTAa6vyVksQMRnKMJMUb3EoT1i3jbwygSsNCJMVjL",
  "key13": "3aMSSvX5n84kmG7bMubwdiLaWwrZfYv44MuDeT7HLV3tQACx7a6PMChAZUsi2TiGkdcn7W7M4wqdokkmyKanikeT",
  "key14": "36kJfbdu1MNPNXUgMTpyxgmN9YcWz8gqHdqMoJWxASWQwcC36Q7TSdFtZH2sLs3QUieNXQT1xA4oYSpa4Cr8qptY",
  "key15": "2BU9bc9YTNgsC7FdwUyPimMDC17gDq9H9Lac5heumM4KtJyhxEXTB5mPjkdXK9HUeLoKYH7hLWf19ivG8Q4t4dAb",
  "key16": "24RTUNMyvkvSj79E2NLoVPoHNGRyjtZ9UWHBwGwsbbYUUUg6M12LteXbcxAC1hn4RWECyGm759TZ6CvrXQAJXQgT",
  "key17": "4DuZ76zEQwSKmzU8TxfjxfXKWmww3yKCaDqaUybHVTdrUEFgHTwejYUBf4w92dx31C3rkpmYP9Da8iuyd8HX1tPn",
  "key18": "2VPwJYxN3s2akKBCHHe8nrJ5jNhZUPAWCKhK3fmvV8zXhmNsF7yYaqBtK7kZ2GbGZNVVVqYpdy4hQZujwNxDp6Ft",
  "key19": "4TweCz3Ga6VLuEr1mipBfKNA18ZNJzEumhSigQdYPQwmmSKQo4DGDZPxirvFzGpnxKdRZ5o1XLy9wFTA8asSuf1J",
  "key20": "4VRQGqdet86pFrjRD3RTda7XW5BYBQMBXtUZGmUGn8fvYEPzLSzEd8Uys4rB8ZrSRronMjtcomjbA6kTL1WuG4se",
  "key21": "381vSfh82UykAZoMtKFFBKZUm6pREqvZJpeE8sb4yFENbDywahbEA1Ev9y1sJTcVkkUvJ56F1EeQxjaRuHoQku6n",
  "key22": "56dCYdgJLfKVfSumkhhceZnKUTnyRLS5dkZNALxhvXeZB5h4gUsdqBahK6Cf5ALVyY3PTHR8sLX9Fiw4H4LSqiz9",
  "key23": "4rbzpmKbBzVj3X6g5iS1buGdwPN581wQBbnkFNfqz3k8UnPssbLq8sJM61khFJ1ubojgm3VJ6yttYCvhrbKpPTji",
  "key24": "4KrExkcuJA1o4EzsypdV7iit2oRjCEJr9TZQY2FZQL5aqgYUGh3pGtjLty4bW2WhBkX4t3FSGzzZ6qdKiLEqjJQu",
  "key25": "UjJB3DoTGiE1AGFGmw4N4CfuZcpphzrfatshK2jbGCSRneRjujnLCodTfMB2pDTgpB8w5osB4QCiXWphH3KB34g",
  "key26": "2ob7VLRYhorU36FkYYT2rErZN9iXN4QXp19LdwB3pVN9Ks2XUxxNYQLpCj8jvzFuAr3S3uMzG88u4QQDjRszAoVA",
  "key27": "5523FFwdkLkAzRCW3dKh1J2VAvBEFTobVeXG7jdXAUcjMqAgyxDGcxhmpr6jHbPnCa2dmejQ6ULfMQCMkLi9yokN",
  "key28": "3rwe58VGXN471TFBfBrLrNEfmzbaK6oN2gU62dQMmhGW3AkzvXnWGD7Mev7b6MoCJo5sgzBtC9joZmvyFYB1K816",
  "key29": "4VJPZmt8zcPKtU3MwyRytP3jGtDxYMNDrPwm6McS3kYDmy3aEXtsESCxExK6J434wFuqydYegHi2EigYXUP1HuqM",
  "key30": "46PgcRyMMgccRGZPLf2dH8vCPK9juTTZtx26jAJTB1kw5c9jgaDeh6ZYJXgjP6AjBcLLEvXgEgD9aYPdFwfyZV2t",
  "key31": "3xw3v4YPvyfTz9x5CBWwzwpbwkunpc1Exn6wdfzkogPuoJo2nAz9wVySpn5h7V4z8J5dhgFMxVF6vFUmo5itwzq7",
  "key32": "CLtJEHTpQawUowN76LiquZoBLsBenpe26N5pj7quPZH9ktKufbbkVnhqfmDCssizqdKfahgQ8UWdyfB77Lpk5JP"
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
