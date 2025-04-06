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
    "2JRQTMnXLz5cD1cbG6GpAyQAD4Ue1Bw8weuyqP8DYdLV6U1jUxymNsLj2EnVgPEJ7Z8xPT1LgYT8vMXU81C47BLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tz7dt1Yrkib8iC39hsMp4ufkUWqQkCQ8zWDi18SSU8x3CkNAi8JmxfRvxAWQ8vfqfgxQirh6tC8r53PvSXfDM7K",
  "key1": "54K8B3bWix1BPwNVDATcb53X9PJhPMCt7BHqYwp8Fb8R4e5t25a5yMJdKVzq3WDGmxG8p6Rkn31CzMRKicdfZZLK",
  "key2": "64bjtB5TvtWWeR9XWK8F9VPaffSNAnVC6SQTn8cdkamJnZvnvrgPAV7WZPujsSKtAJ38pHTxoHnXB7VVqXVcDDaT",
  "key3": "RQyYo17CqEJsqdA8nrnb4oBCfqLifgzccNYEA3t3TmsHweD34XBAMtqV1nWxErQLuxXYrmSeFN53KHaaRpCCERY",
  "key4": "261SddTs8t8vWoS64xH4uKR3BHGLGJXvaE4aoiwpRmE8erMhn18x7bFUfEXzyMwoJMjwWNWtBwkvtQoTR8AMFCq3",
  "key5": "627PFvXY79R6TZuQjojWSbxagUACDgdKiVktwZGqae4GkTWC4ggqtW7YtAU9zB6qRZD1DRiYjz7rVJX6gTF9YNk9",
  "key6": "k2MkfsVoPfHgnVUcpd8KVEdQiX2Q1bWuGHf99AdNoGGjLNH22nhcx7tSEVpxiymw65XbFuAzLRjKYUSBssktQgJ",
  "key7": "4EpdwMNDqum5v681TQt3WvRtUBkKKtffxzNoarXwNh1HQSYg8rAoenBbFUZ1pAVWthjZngWEddBRnP7Wgk4NLxxj",
  "key8": "5i2sErQsGQ1oLnLoRTx5JtCAzj6ht2zMEN574zqmhueAfwwFaArSnZV1xGZbpaP9SBQ1k7y5B5yHJrNFN1WXSQ8v",
  "key9": "4VjJHBQfHVXt7DMCu481u7cnCpeNqAs1qMUF3FNvehpvQ8kspwCc4mYyuTNJCG7vKyPbwCrSiXBTpakiECdLYeKi",
  "key10": "3aJW8QqrtzfZdTq2EVP4SEGeePYLUJAG5ogkaRHzNwb1uxxNb4wtX9Z6Lff6dXYwbNyZgHdZec3nxaPiu4kFPVpj",
  "key11": "rA4HayGgD11KgTP6uYVZuMay6K54RZsJfcDesqBGnoiG4fdwAUVYBYxM27yhYyQx5QfVWxnucY281hkb9CfnQPH",
  "key12": "53s777fERZoeK8AkzHFnh5ATGhuYwSMpQkniTbdgjZTmWTeJHXgPTc8At3oLy9tXM1MbBM1m2haMPoq3SFscQ6ik",
  "key13": "5TM245kHbr2w4FSmVpj6GeL1HkzWxgVhy1MUb6V9SdTpsm4me2dFuLVYezQhBeahke1XJ6T7t9Un6zWCRPSAC5Yp",
  "key14": "KefSCEHm78gwG2xdZ7uTadBSEoJqe3tHMxxqm1WeSaUjdZxSQBYcuwmMd6K8o3zoufALzptENaVXWju3eG81nSU",
  "key15": "gnUuEAM3i5WBEZMJvkrrxEY6u9UsKTo3UXhvSK7EUFGBtdKPkrHYKjLnPnEMEMqhjXfvZcR9qdQ83DoXefWyBVp",
  "key16": "4PorqFQtJFwJmhf8c3sszsHp8X9tG5WoPTo2MR7yM3xNAfYVUZmEsUa38WgXnsuGtjcgz5gUhkAciZZfyMcS2FVN",
  "key17": "59ZSSBSMM52ZDqdAC4mh1ciMAkPKXwKR28PEBKNMuH9bLqktmxvGBEf6gizN1FU9Dw6N8uCeP5k4Fpu2LwWh6HiL",
  "key18": "5AkVL7ewdqRRSPbwG99F1gzPHix9MRpW2irD1d7VjSCCRAb5kY2oxJsptbY4KrV2MdBsg8MsiN4yg65C1ECd9LXT",
  "key19": "4bvhGaCR2ZkMfUVNWU9MxNWSN3pLh6ZF5swGeDg3wAjWqEoTC6gsreUUC7AWmLVJUMzNx3wMaB6aZLJnvjBpq6Vr",
  "key20": "5J34F4UD7zPnuSmZEdVXrduT5WYD2mB2dCEY66kTcNu3ma7Q1Q7x8GhYCUU6Db7RVziQvSXSjvuQhSgszm6We4kW",
  "key21": "66odoCPNPiw4cvwmayZFFRi7jDLxmme5e7bVoXNu9UbCQQ6EGshnahCbY19PbpJaRGYDE5pg6gG5538Su5MLoK9C",
  "key22": "pbFHiQYGzMXChH94Lyao2hnpWZqHx6T89Pvy9i7fKvnqxYL58crgssSW5bmLouR19bWtZNg6xKDjqw6s3gNraUw",
  "key23": "2QKD2C8HJHMtNJC3t3pNLBeoyBQs3Dk9S65c7sEmXX9m2AftxCaemd9DoAmLAG1kbMKj1S18R8g92SETePcEDDVH",
  "key24": "5RqPJGNdC36QhS4nwDm69mmGX4Q3wb66i4Fb3SX8Q9TH6fpDngEhxMUX2ojKimaYbzbcGeaVNUGiY471jvu58cAu",
  "key25": "2TV18rmzsL9wNfeMmkWUS6j417LeFLgRhMBZ65xmW7MoxR1n4hTRXrorB2uFnroZ3QFPNN6TY7kTiVarFdwAabVL",
  "key26": "wyUDYy7QJUM4s2hwcHg6jnqp7toAusKnrPwjAfu6PFJjyavmzcSHz8xfaVoG3UN6FZoK6LkkhpfDBqq6hbVLrtF",
  "key27": "2Wi12HhsEFNXGhFRXbkgCSqJhZqHDjwmtU9ttbN4g1N5uze7bRVTMjHnZPgN42z5vw8aVZV7AzQtXFXUVC373wnA",
  "key28": "34agqF7rQKNdsJuZbvcjkSAj3UraUEbwmKWdAtM536TKHoJhZpihh9h4UfavdStnmG9wAkfEYG9qRef34A8y7WPJ",
  "key29": "3o6kKECsii1FtXaER9HJUuDPxL6rGp9soFndfnFJRZRTu6eiBFTQ6AJZmMHUVNswJAhcXJpyumQ1KNqRqSMcH1he",
  "key30": "4GwGraZnxv5ET6VjgL1xDqcL2XmCagbSnRi3qvzvmPgm8Kj3vLr1GY76uLjzBrj9bgs8BnerurrJAjDG4XkZJUQu",
  "key31": "4rbztnfGwUbYmkje7XMU93WsE2ie9E5ke8prpXV7Qfh3hugjdU3VWk9Q9kuv5g8617RcxkkrhMUny1cqmpxnGB9U",
  "key32": "LfCCiitLo8MS6NTyGfy3UaewyQiTr3LbEwfJX4YmD3if5k4hoE2zUB43wHi6923i31PWN7vyjQU7RWYmTq26uDr",
  "key33": "2vduqpZW3nE8zpCaBPhM4arpe14cJBrNU9UoArV9MZZzRTMAcQN7Z6qvj4PGrZtrEx2FRxDyJ3FfPQecGz6p7hLc",
  "key34": "4rrAExUFKNan56EAg5L94PGNHq9sejWdjh1DsXUE4QwQGaRsT8viYUuwJpMn3gP2JYW1DYYeUFipVuDve6ANJWjj",
  "key35": "4Q7xoyikTS5KmduZKiErTWpKTT5qpXpNA1eEC9HJEGaBZunW1dTmeHnxYjsdExyYRaPRpAgm22HbxYZ7HsNH6YXX",
  "key36": "4ixjuCvzwEQBR9DEmY2LMdaLfZ5GL61UtNiHzNBRAnNNbbmPNgwuNgvk1iDwNHRKtHL2cqYaNy9zrM9Fzk9AcV2g",
  "key37": "5HRSRZNZ6qiDREDB6kR432zScMP8Jfi6kNHdTHd7Vb5APi8gmttC4hf78XwQVzWPB5F3eikKBrpuUotAfiqtTnSK",
  "key38": "3ygA44AC8JdFsAxP7qYRQAgxcKbpLQvBnedo3qJs3Nkvn5jVR6jt2hjLeWpoygdBCkYJTv5iLL8e7NAwrpfBzUj6",
  "key39": "22GWjxezK8bFNSa2YS4nvj5TUfVg6qxQRRhtiKbu1XXzR36Aqg5toBEH2qCqhpHWwVC8i21uXvwzjTtcJeZ9zxnc",
  "key40": "5K6RGmabKqM2TTbWXWtMFsRZkqsdxS35eVsf9uBgbRondckyVDAXy6gVoHp1BCujWG72nf1oFm6Jrf6BnJ2pZ9BU",
  "key41": "AxN73h62GqXQA1jFEun7cY2jvcjPpE7c2xMNsrLWt7aRJaP6caVAqtgYw3fN6T9qzZZnBFCdR6LmTwVnF3YocT1",
  "key42": "3MkG5LuuJs9GhEkkvaji3HpJssF5F7oWJvVZzdS5mq7WKSGmGhmzKDn3borQVsv96JrwtELCxej3NAbZp6Y1Qjjr",
  "key43": "2WA96WE5DUn1voydYXmbAdVqr878L4AT1N2Z2svJ8YpnfgKk4xB4rppozVg1rQ6pwoRKpuCrkdVsJt5WxBBsJvGa",
  "key44": "4Z94qUEocUhuii9tFuziF62neLtv9kMTXNTK9PMb4t5MLjkhKZSR9ot4FDRoAYdTNKY5Q3pJC6FB3kmx6khbxoZT",
  "key45": "4HwsLwM6nyFVmYWF5RjasCUEQWqrED6RQ3phYM8DME9nN5XyWHRr9gEU6MWm73XJEDHkqJjSguuVnVDCpHcB9vAc",
  "key46": "5TUG7hiiKizCBhDNscjHmXedRufM5i8xTBVnvpb8jckJHPRcuC7qGhtrH2GTfGB78Pp6Bh2FaTbCxmFG8L7dWQeT",
  "key47": "2qtDDE2NfJD5h3rjUnqyXzAf6GVXiA2m6j8vyNKGAVJFMz1Fmz3kMaGMXWFLxuoXgPoqyEDaHDE4LMCdQwKCeJQC",
  "key48": "4M1UUqw2u8xbbRa3pkF2w7P4wz4iHQ2d4xAfiVPNwG6Vbv2FMBcBsFdxUKzwBpBRVZ13VuKcJYF8kb434z3NUMYa",
  "key49": "4aQHtoWtda4BmcBYWJmLxNwnCWiX1FFaHzzhVaDV3TBABuJu3zxr1NwuMdXvHxJgUVsNi5WBG9yMo8UAHXrHkYqC"
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
