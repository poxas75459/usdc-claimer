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
    "4ospYT1YrWchvijLa4xbLpbCdxcuXumzb7WN5bn6zBbQMAh9v5euJajcLRovokDrFQ6diaDPo1jBP3PTi9Mo34ts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EC255xktCWEyFZ4gVJLsQFhJrk3x3eBteKZamEJ8LLDn5HC1cZ2aXHRZDFyLVKHSFqgBz3jczNW5RqRfSt89Lc8",
  "key1": "3c5mE9PoY39FDHLuARZLRpUBvj8K2ZQREtuuafvjXWFuf5sMQepwA4x5C9BSp5itdP633cPPZuTLzjuQqfSaKGJb",
  "key2": "4rhNYRBnKZcbQBPrZxVRAJTGqarnmFnzbQDK2u4VvKCne4qfPAZxQBg9hMwp9zvUmyR35if4t6S5m3TJXrmAN9zh",
  "key3": "nza49bT4BBKS95JoP5kbqDCFm1TJ6haHNiwyBLR6qy3NQQqTSkfyFSGe6Tamzou9bRFVtfvP9AFtdeVnHQaxivX",
  "key4": "4KHDdVso2wGcTWn5bSMmuCSHY83bF1uHujLps4jwyMKKHz88MUZoYYyZXxbSbMty4Y7oRxKA26Wvi4gd1kjk1apJ",
  "key5": "5iHhtjbgFT6K56Qtqqs5LeeYsabj6vdTGPuc1yqviZRzcXUkajzooqP859VtuBy8RiAEwEzEASgDg9bpL36XaAtT",
  "key6": "4CyGrnwoRaZ5djZea6KRa382ELf7Dw5QZb6HjBnSFGjZBUfKXSpzdHqRLWtyXRJJgvJ4smsDSRECyM7veNZfKQHg",
  "key7": "3EwPg28Nbkeyif5Bai8nZDA1SwJ1NSEwNakm5w4y74LyLcb2C79TvxEbKiomRroWikCz8GQwsVsFjMoeUbPymABt",
  "key8": "3Eeq27DBDqYTfnmUK21ib2K1btKG7awKYtoLv3k3QRXCt9NLRpyB81Rzmz4TyoF7exMN5HQxsbNuZzpxDQXwrCHh",
  "key9": "4YKKof2yeJXtpEitQBukNrnvcQg5PVjdKaJir2VQ1sjjdoabKjCj3DtM6bNzedvJ7WaMkKp7sY8HNy9ioHTDrAQZ",
  "key10": "TzFPLXndT6szXrz3LChvcbkM6krSyY96BuihrNAbo4tQxGz7ZLx6t9nb4ZsGQbn9um4SQacufRgWQUTirJP9oDs",
  "key11": "5E6V8o1Y6eLRZxe3dLD7JLebDVW6ZHRvoeYY8877Gh5U9KKZHwgsiJysQSXHWYabcxreY7L829g93nb5vo1fyQBk",
  "key12": "2DYkPs17VLpz4yyzW8Jmq7ktPFjMEfxxMc13y5fC1daf81f37m1hLDJFkx9jqGDkCpJehz1oQsNZ19mW2KuQ5qbp",
  "key13": "3VoNoAKqbAUE2e94hW444rqTKYs9CMQ4wpywvkyb1GPJSLAex64tWLVnWDPbYE32qM5HMCEZJmbaJYP7tFNefUmQ",
  "key14": "2A8yL8bh46EP44WtUG6BT33omXTjUDrvrptTxVBp3WdbB1uMHDuWzsm5scmb1rthzhjdvYYvkqBsyZaWFUzkVeAW",
  "key15": "2JtkAt7R3LcX95QSdFaBPTXe5b3ypccYqyUZ3YtXiyrppLdaLPLZHG6hheAarH7vaWgaWr5UkJoPghyUJypTqe6k",
  "key16": "DtET7tG1MBtskrg7ue3eM8XAyrTNRr6RUtKriwHQ4MRahUVKzSLMcpRPV1RssLHnAURedAoRqAe34M6iVTVpEcR",
  "key17": "4XxoNF6SuFxzrgvaZcbAG4ytYBsNdDMaMdL4rbBhgFrbxMh3omx1LhjqpMpUZ2amVAquUtR6uaYGkpZ7iVG1hTSh",
  "key18": "3RpQTJ77VZSjeMRSozjVCWNXAgdA6RhBRokhLt5372xRcBWKmPSPg7Vo1eiuTK1g3dPrunV9AsZtfsXE2apMPAyz",
  "key19": "4KA3bysZmh6W1VpL5AJZbbKapEtbjt6mCe8zbyqsqJfTc75vrdRtqWVPD1xorGMJuBd9n8kN4kfD9ApsSxfgMLX5",
  "key20": "4MysxnW2wtmvATibompWbsGoi9iunBtoYZH1cPDionreKKUvDc2eakgpyCtiaTER7Hyr38JCuUbTYcJvgRWi8fDB",
  "key21": "2Hpe28gmpVTKjyWJ281GCSgTbuUPP87zyVdbXGWgNvj9gw7CjarcwFaszhXiuKVxAZW8AXuVn8N9ckMuaqzCWZb5",
  "key22": "3Gy3TZfpwxPsGHTHXjNTRiZAjHq46HiP6rteMVxZnTAiK1UrvtUeH7S3sT5sBNepsTH4TrhC5H8cfV2AdFnt8QXy",
  "key23": "2hp3L5FzKj3iGzMwYUw2cj4bHYvCr7TjFY36EGTuo7E3jh5NKZYbSRw6o3HqkKD2s453XARDNYtb8SwKAsLYf5kN",
  "key24": "53VHcBVxLGkTqTUjshsW7rPWRd2JZSL3aTaAVq5RiA7PSx2Ny9kkVCwxby2wDv2RHkrVfUqJGa4EUsUB8PUro9BU",
  "key25": "2R7R2xPo87eDjwH3qhWTZeEmy3hA1rJuByYS2CHPxJXEik1bEJmhB1bGEwptPxPNorYaLPZjgS8txFbfkfDfMHVy",
  "key26": "3y4YjEPwEPHYbcBjwWYSZtNosn8h78HXB2JzK77hv8vRveec2h4aXzzT67uZNWaVdbvYZ3oyqTG7uD7hgJbbLTpZ",
  "key27": "4J8wrhu6iQbqaQTNPFsTweLbF959pBTQWLQpAZR8DvPQhQEDDjhbgNz7BFV6fH4HXVKBAT1GhUT6ahKdT7miTeb9",
  "key28": "4WKze5p4Dd1ZekZkoC5JSmUy21XUM2uNkGnVXeJ7BRuuREVzS24orDEpXwTfT2Xc974WBhc7WpG3vkjhpG3Nvowo",
  "key29": "coCUaCTMPFSYXDPjseyLZXcYTh7Ehb2q3ivhNdVMyo9bjyzBNDQL8Lp2WD1TntHs5kQHcC6c7PXAWsesCPcgZ6W",
  "key30": "KX3ztU7i8EbS2hHRaRF3vAtYSo65xtPkTwYMTH6q5nHPJQ6GsZGfdRJKTc7EnFCUVZY3iEEWdYCd9pYNzv21boM",
  "key31": "fUArndmggUmNeqCbARtssSFRKyfyGDJNchNHNnjUFhxCDrCRobV1nH3tgTTub67jMZk4PJvexLiGiwTTEG1HdYj",
  "key32": "5TS8YAanhZrUZRuuTHYk5pNGPV4FWFM1V5N71To8hfTCinRhUARbQpBUei8Rpp274yiPKuFrsP5fkHXpDj3A2t6k",
  "key33": "5aW23xHeNUHQ5CEtnzUiqD73PmsBtq4ygJ3EJVz5asXiMVQsBX9pskKoZN5XrV9C84VB1NAjLDsQFRjBqPNiM951",
  "key34": "wr2DYHqRSVFJ13umD3cY1Ep6vxgV5K7zb9Mix18fnwo61Agw4jcfZkudjrAkXqaNosTBE219zPpkSUaxyb1ri6i",
  "key35": "KYS6DQ4RqVbNdyeUFvTtQiGVyehC9GZM8m5aQ9b74Q8VqHYPYHnad5kA2ucQQPbjnqpvkvUndyWxrDNaQJrkcDW",
  "key36": "3H7uPEJ6771yi859AbhS9MA5goe2ARt7wTqBvvNpcpTYz6u5TxWJPJZJcVUwWEfyCd8Y5Ahdbz3MVjG12xCwhPJm",
  "key37": "4LjEPvaLLLY58o9V5P6HduCuritR6uDzshtBs1TWbCmWhoqKKR7r4MM9K79YRTcMNfCKGjh8uxu9Ut5Lz3t7M6uG",
  "key38": "5ApYsaCr3G15wXUrGmx62dTVLHUYFAhP122inmNqQWuEfh2DvVupEoX6KeZGsmA15rDLupRjAbNo3yiCFRgki3mE",
  "key39": "4ye6zBxqvwCLWkZgnqtef7WMxQsrLW6vxyjaxRkTbtdicbkTkuajGpjH9oj1y3yzy5327ZNEWZZMUhHtokWFiybN",
  "key40": "2gRGgArgzo89wBUepapuU493i1AiD7skYBZ5zqXBS5GPk5ezKuj7jXvs5xY6pb5c67SQGCh8m9P7TtWXiyMBHaqQ",
  "key41": "3iuXTR3XNoHKM6H6a4Ez8AsswZvFjHbhn9QrD6mkiXaUwRheKETvNCsrKjqM7aPV6iNAm8Zvxc2Yvf6WjwmZ7iyk",
  "key42": "5e3fcGF76FBcr8yC5W9gV1dTB9b68mFzBT5B6BCQap9CBdjjNeGTAmWYbv8HpJ5DRLe1jQftkCbUfYnvhUu6YMuf",
  "key43": "4jQVwh9HfV8tCjJCmd496fa25BFoYmQ8DDBTMyMNu3VALhprhF2pqVVmHrqMucrADRDxGKwVVt6SUugsrfHk2ztC",
  "key44": "2RFeXCq2Hk32gUDpBWiZVcfSLeayt2i4JvY3UnTqNK348EZCEUwdksBRdjvtw5ifTuvo9khqg53QR3ErhqzWxAYZ",
  "key45": "2cqEEbfJFc5p4W4tLKAkFr5T6J7Ps9SAGbyPY8NzbfpbkW9fCcFKeLLtokfouqhVPCBai4yY5MWXCJg6vkQJYged",
  "key46": "2cbHEXJLR8firGxYj9kV667M9Ufs56G2Nj4eTDtq5tuEn9q7T7jMxWPMGkL8pVJZuWpbX33aL9KuRrw4qSp5V6hd",
  "key47": "rq7wi1cEd9tGRVCXwWDrmy3z4TZ2VVuUCPr3TrTp79KzvRrAXiQGuUN35hEkpwYHVWt3CL9xVtig5YkzvKe4YZw"
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
