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
    "3FKjGeuzF2P4Tg2ZWemPY43mGA4JnREzQoTYUDo5gvQs61t5p9JdzPUM1xq5EQw4KPCoSUBqtQ8yPvJVSfwxcUgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ypgeMGPoCKybgubc8H2eLKsv45LZDvPiMC74ZmTixRb45o78KAuWgaPrxz9HVGd1Nh1N7WaihZH6WPE3cSQfTQz",
  "key1": "3wm98Yy9ruoXA1pAS7pM518SWauGCF8PPRfKhvKGJRLN8E1WZ9vQdvvo7GC3fiJ3rbNFhKhjJb38GqPtBsyWyqZr",
  "key2": "5vbkHBzUCSuSrji8kBgoR1bduxWkiogTv3v7k9tn9ZGNNFKPg7W3KZYuPe5ruFJHrZnAwnpG4Tn1se2Wvq4Gdddz",
  "key3": "3ifH4UrF3A67B4SyK5M9TUXivsnDurxSYbNkxUVm8wHyGDDzdXQVfpU1ybU9cDdeHbZVvXuBScXGquvm7quSfc6y",
  "key4": "c7cnzRbXrT7WkixLJS56HxPUn5ez9MVnjYPQadRZtGR4Qp8qJWNWTq4LCE5Q5FPjXL6w7qH5bdgHsALx3oBx5m6",
  "key5": "5xRSfCTe4UUDA24MtetMAwmBtGYH3LS8MmBUnZfBi1yvVWb9ngHNrF72iB4jXJFMtWZRyZuaj2qRNWvpb4E25dXf",
  "key6": "4vvSMTK22kSQbmj3UN6LP4mp6gCnZ9rLt33spqgkd8ALSpDgxUJvytyJc34t9CfPp9nNLBUejpXYGMfG11PMyuk",
  "key7": "33ikZDDzqnn4bzWV3ehww81dp9Yjxvgp4PLCBuNHYvEZ3MYKV2uXKgEPK46rYLWzpNa71dNhHPY5SQg6rFbqnZrM",
  "key8": "2JeYfPR8dbBnLJQWAvsAiKqda284P9pcbPuXRCwEcn3KLrZZFFiArUxnBdqaw5kv65P7AE6YQembSpJ5dzEkumoQ",
  "key9": "EZLLUiGRukarHgtK98X3E4WwecZgc692MWZ65DCKhwcmGuSe1y3JfC9i9M8qubArQRAHfSGa1DvvMq7v136E3fD",
  "key10": "3cAfiNdRKm9MpmqMVd5Kzgsram55ux8JLSdBUQoT1WoAGq6zzKtgAxQu7RNABjz1fUStkWvMci2qrE9JdxMNG7sj",
  "key11": "3pBU4SqenCWFHwD6qxmsBh9s5nnFWg7khRwFbP44fwgneHVUSjeEX5ff2cKV5TcVfouBMBamC1sVX9CeQSQakkFS",
  "key12": "5mwo4jFxz8MiiyuT1NiBMfNej9xqA8SD45NMwgN6DbvjJWz9guYUoAnRUHGWenHnbzHNTKaUau3jzUQ6KxB6K4aW",
  "key13": "2RuNzt1WnjdwUGTdCH2LbobQaGkVkEvM3nDHHisuYCFDMWkoEaENUEAjAQFSQD9QNNgjsyTWj5ALjJ3abof5zZ6d",
  "key14": "5T6G9wgqw4Ap8dHQo4V7A8wHYDErjCJiCDfadVvU5VqBD7tZ6N21Dq2aUWaH2dQQRzmdS3ZZ74rZYZtaXasEYQNH",
  "key15": "4qwJ8ntTqPust7Mu9s1tNrG3XRr4jzgSRdjt6HPCvwdacnVpV8U1RJoR2onScF1j4BYPy7wYXLQ9sthK47quC3tK",
  "key16": "2uuAgoUFqeGcxyEuH3yJWepPtG1Bnsx76UtnTC1ayewvoTCoWFBcTsW4EzytdzGWwvbx9Z6EvpohefVaVGGFntdz",
  "key17": "3MSdKqUWNWXpa88WAXEy9KPuZR9BDNmH5w5rP9s3XtqUoD1KAokXLgHmvVX34WS3Kw7LwRSuT8xihsjRHvnuebpJ",
  "key18": "CfESWJhTmDgW7Ceh58k2j5WgmNMpLSKBGrwa6Gf6bUzHJ88Cxd4qKhTHJo6ucxWzN1b31ygkWFGnq3K4tw2S8dF",
  "key19": "4YtKMRiL2qTJvbYvDjaCfikWn2Gs8UTh8iLfDVVEf1EAqoRkdBqU4YSVj17eYV7tQkaDvgMNoa8Sjjot99j9hxhj",
  "key20": "2j3aEnmDxEkSeHca5Hdb21bVzF8AKbGcYbKNo7xyq9tppQ6LYVNTPRsANTTMi4rasNMPAwTbeFbtRuwTNaX4EnTB",
  "key21": "JH3pHC9LEWUP6UD8jMYfdnCLSSs8TzUG6yRtC8mj3UEe3BrcFXc8G22bZGGG49DUridQcWfYfHQwThJHUtykyXF",
  "key22": "3K5HrrwCNdiX3MmdieP4za3V69fbHYW83mjz2UmBQTCrCWWYL7h5rodokLR1w9Sni2qRaiDEZ1ZeFqJQj489HtYa",
  "key23": "5EgQWoiokQitA4jzzdSaa7KpnG295822LLNzwrnh2qP4cn4LzWyV5co7bkKnu5qjBVN4wrPUH1kySrafWQ5XC38u",
  "key24": "N8Hw3Mvfyfy8LD6zKjMcHkbuydtaLrDC4AxVQzYjLAkatmvBT6UXR8FWqZbinXifyBdAZU3YQxA6EWCeDmKq3Tg",
  "key25": "3MuKA2kyn3zjYDiPz4hEPhZJT4GXCA27ZT8pEMxCKG2UTDgLXHnT4HPgcdWbUemhA22vbhHmxxLhFJrxZERdXc8z",
  "key26": "5D5yEURQZHFcD5ZyvA2oEEzcCd4sAy9w9TxS9P4ofKDb1L96NLre95Nn64ahTDVj71fuydWGgJ2ErmUKqWgsRPPr",
  "key27": "2Ezbd7U7jCdbZjTBgSvQi2cwvQVgNJkN6UBBY3e1zTz5M12n1KKhDRG7eshs1jXbwsBmbGvPjez3FdPQZJxPWVUy",
  "key28": "5NakHizWYnnpwM9QChFmhLSWHpto48p2S4CPwryt6Z66GeTwwoKqpgqzKzSdUBYytyUL7Pd4b5XrBKrLa1xeqJTR",
  "key29": "3quCvzmfoBPd9ezoEvERzQ6J1ig8VsTEAQsGyvrHfp3uw7uj6W9JbzZrqGxbZtgx5FAa3XeoDAR9q9dhQD52GFco",
  "key30": "4Xx7Em3PsrGDunC7KBtMpXGetvL2GqgvVZAGojigYRamigJq1Sfjw4KZAqBcV4akxTgYCaGxTZ3qM9CbMb7zfo5W",
  "key31": "bsHpBhUC44C2dsADCpfHmEN61WBbHdDB7ez5duisHNtpjgVDEdMyDB1G4SSAiXJWqTt45a8UDmxdp44CH3uyYpw",
  "key32": "JiSmNuzSvWdSnk2USiZ7TUpdmGKX2PXa9W9XvvVSDdz84TJyiNuVAT53U3T3dFH7yV4typGzZGdBQDQ8MCFviHZ",
  "key33": "3CrayKPaoMts3oEnHkt923vaw2DryS45gtWoGw2q5hJ1cKWHbpwwc1A24UvPfRqZXhJbXEDkZrTgsH9rxkr9gKiH",
  "key34": "Cai3u8hV5f5Fbwdf1E5JxN9jgCvy3VQsYrMqN26SmxQAgf2yPKQZuQJffQp4aXzgu9vgti272gU9dNxPBhpKfY5",
  "key35": "3gjNEu3BMhSMnAwNYtshVGBUZXixovHYpqhEbGFjhiqPbyLqrWYcRq91tN2Lj6MBMEXv5FqM8iPdmKwp5u4fgi3k",
  "key36": "4SyCi4zweQWWauGTtdBKnNaDqJTyP6FmzuCM42WxVv4ouDuDCcbb8Tzy5TVW82eGZjVEuu7XSzL1FYkBp3x2C7So",
  "key37": "5a1pi3LKczmry2z5GVwhshRAvGtyNyb2yjKgfQXAEZbYhDK7Q5JT3A9PgNti459FAWkoNetfgR9VHPfb7b1GDUyJ",
  "key38": "3YWgQJKpwUkxcsfX53STuhd8fXascLPnzueERfRKRgJ3Foo7SRy2NZR55E7MbEDCKx8EW7NFwawBGD4gU4rmiYJs",
  "key39": "67kQ1CncNfco3bxXttyqMSEtx3jU3pPxjhwCu5And3QZZAKPyn1TA7jquotYsHRMSSupHQdFCrgjDecCScyKfmqC",
  "key40": "186DxCckMsLFH6ZyWV9FFbDJwJts4RYinW6QSrRjvqV1SXxvStg5HYejqXBeZvkGEXRnsevM2g1rHPywcNgqRvy",
  "key41": "3sfL4nC68JUHkG9mKyh7GQVS8tfvnb5edfqgyKfJZ78JhPRR3vngSEf2SV6BQPUfE8cL18Cbb7GXrwvE5qU7b9zP",
  "key42": "2y3s13xYkWkogdqpqJnLuNqwjHaTk8VsNNi2yFHrB2UqWFFvbwQ9gL8VTbAQG9jRnvbrXQr25EcE8VeoFYqRXiJn",
  "key43": "5jdEbtsnoMoERudsTKjpViLDoeVrKTeNh1UfLTQPs8bXgHi1NzP559CYxX71QUrBd8nuosZ9bM2KDgrB3wMi395P",
  "key44": "46Z6gCDdQ3rzduVMMVy8nhkjduE231KLGxJkAPgDgAioc664dbkBLqM5kyyN7SZuJA4hdvFyW9EdpLCe9VcADWGG",
  "key45": "2hC2ND1GMEUcVgF595txzTKYkZyjT9okYFA1YSxic4jMAoDptXjsqEC98e4GMunMKcPRuCzdRhwzv7t5P6eox2xk"
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
