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
    "3ngTRgCCzFF7AuUaNb1fQp6Nax8RCsPRthn5Utp5kdBaTTpksTrnk8KjXRLeEWGPpz1TuNPgSERXJwfMmZQi1GuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HTgMoroZbnTFd75VYuAsCVhtz4843ad2yt4fe9zEptwLCeTkUVUzJ1r7uWuTvwzJAz9jUhLt3wmwQx6VHehbT4s",
  "key1": "2t9cNg9bjNAYb5dtBHfwDJJqUDmRHUCAKNHKgYYRu2QYQ6zD71N1v5wXeyAhhPjBAymg6vm22joNWBdgcpWo6b9C",
  "key2": "4BXibZD1HkpiiTze3KSZwTZpjqC5LKPLHBntRLPB9KeuXRz4sLKYf9iv7mfwbNHe5KUQ6tTbM9q7cZm4W95HfN3N",
  "key3": "5tpYH9iYFoCWPofPApbnzte5baKzkmgfN3WYwMB2Hd59h6VmPbUFNp8gjQU1vhtGnCUEGzoThoze4BeDcTtvrKPb",
  "key4": "557Ex8tvYpuXqTd6yGvrirDH5hVJGiMLuYnx7oXmCLh5jk7zkmzvqMsFDTXVfcaZwkBPgqtK8jXzGs6iBRghGLn1",
  "key5": "Ep2QdgpstjVpWQMEZXVckNcnP4RHZSw9c2ZHV4NFr6T9JP26Ez4cNApxPvSsJ5eZAZRpgmQFQdd4drJjsuhxwba",
  "key6": "4ak3UoEUmyEbQMNc891V74D8sxREw4NSeaUoCa4nV1YxxCXLjTjwXgksmM7s4nYUcokZfHkcj2PRY3VtJHdhZ8A7",
  "key7": "3SnNKjMWR8CuCD2fu5hcgdsQYe8t4eYtk2Tk5BrngyWgwfavqxN9yd53gMhuUhczNYwkwYnof5wXeMX4BXTuZTZe",
  "key8": "gvzJXZavFPpBEPyMPcNwqqp9dWMA1qidHi8ac5q8tp3Z3o5SAmxjv5aio4z9rHuNRBrUztfCbNDPQqon8rbZWrq",
  "key9": "5Ztd3ZSVJBUzJ5mxECL6BbRTcFQPb4r3224fS67ipctNfrasnAKkh8ZyWpWHg3fp2FdBTYJ52zuGrMb1GPcH7m4u",
  "key10": "3LqGFN1VEDvH8VFrrH4ivRR6T17Sq3dWNYSXwymRAXuAFS3QaqhZbDfHLZhyGhBmwDctBetatusF6QnYis3LTwyU",
  "key11": "2CCkuaaTfm9ji4sAiZVGXWg3VXTvYcFX5co1bVWyNPzi8NVDxQtJRCzhQHgY9KPV9Rj8tEBkZnkNdsFQxCWfyRv8",
  "key12": "5AQU77MERfkn5qmwzhVtMoBPcVJdpSSKbrPfcUjaaiTYhoM1McQ99SJgWkWeWrfPZxJL8kagxh6eZo4Ruerk29R",
  "key13": "4jLUfJvAHwkuKhDfQNVA7JHViQ76Geba2gfng3KHyGbThUbYoe2U6kLCGeKAeZnZQJDeiVaQ3stg3LVhbvEbvEZD",
  "key14": "5WC21P2ziWZbKZNjr9wAHzHkTL9gjk1i1y2cLkARqdwQ3MVYnwGH8pdRaU1ssquRv8JYd2HEDCkJ7SM8w7pnXTXK",
  "key15": "2u5XcRfDRzDx3wzmREFBSzXNbqn9Fdg6k3n17764hbmigtmk5Z781h52aAMR4ZPFLCn52ruGssQmdmBEbgwanc9K",
  "key16": "5HBwhZB89B5BVvAmQfSGRCzRmqqWLJc2FVDbNnLeS2WS21K7kgH8hK4YmNswNzKeDeJnoHqv3JmvL99tPctsVZqr",
  "key17": "4e2zAYsqHVnJZaSURL7mjUourdLYXw3V11GDaNpUMrMK5zGMxzP5sjiMykG8he3qrtkeidArpHCD6nDon3MD6L6X",
  "key18": "5MUamwNAz9zVeSsrmxC87aFKvBDss6rTGdbeZvyWUW6YrnUTEHfdqAdcrYKVn1bAV5A8j4PMTb9b9PMKH63pSaiF",
  "key19": "4o1YJq7fn8jPk66S5U897RP4ULJPnmTEcKqSjEFyY9FC8aWm5P5ZPh7SAJasYyA8hBnusJaRprCN6SGVh8GQTtPB",
  "key20": "5favjwtbaTd7YnMeaQaFx4JwqCmUFzXbbRaqHEWauqMBtubnUcunyFe3F735JuJCNJrrecvdzC7kYQ1UcApFiPSp",
  "key21": "5KYDF9sA9RxTNLihqk1dTLvdvKTJQ337boTKVd1Ev2zRWNEJLimnAuESj3DoXTcpiHouXaqLqgPCHWT1Rag1vXPH",
  "key22": "3nTpEUhTtU7KudGouhD2R1QuMyPnrdkqLdmHHC9wybDGs1uU8vz74zJDHoN4iqtLm8NkF5QiLbJy1ZVybNyEMs8Y",
  "key23": "XkXrPUXq4XobxwHLoCsWCeGU3rSna7cZ63vgJuDEScqjZwDbwUXtTYtzs6jWkbKNnR4u91zXk7hacyxUaVqWsY8",
  "key24": "d2sWxeE8RNV2Pko1xPkidWUzTeEi7EpAKRXw9mGXwLcEB3R6Jwr47WVSaGqCsKS8HJMXUCUnotXdaFFQHimYjbe",
  "key25": "3MCpfHKxhQyDPyXHU2gVDxPmPKm6e1jXiw4LFqMim6Yv7BMYazKiRuNeYYqk9cLTihQ5bcnHMDa1vhANwj6Sb2LF",
  "key26": "4NsNTeCqn5dHTn6xU1qyRXgsM93sFkQ2JUdSbfGW6Leo2Ccho8LQsyACuhzHua6JrTnAoiUk6g34AH1h3P2uBeyZ",
  "key27": "4YfKA2H6fHd5VWQd81w9nt2R53VHaNqk9vXCx7xpvARdR6kWmf9caMChVnNEXS2j7LLtr74wevvZ1pU3zKBRw4QC",
  "key28": "4SoRn2viauAb3HfJ7UeFAftXM7Wj6TBCa62YBvvYWRhj9gPkrbhzufSPkHb8xEUDVoxHWk21NM2Eg4T4pmWyARKF",
  "key29": "2wbHxGCrmVTCeu7wpyfBREgcktxefDfnVngMZtwiAYQWytyXgGbG5yXKRsQPjVBHUTj56CBzxcFiEDdVGSyumAK4",
  "key30": "39YRXDox1ZnxZd1XPrxHW9eekMGpk8n6sq7Rz1fACbwVnAdN41wimCB5KWZwjQEoMSWH1ghkusR2VAoxTVqcznKj",
  "key31": "5NeJayZDyDmdotuTBnDFHxhk8gH9exgKCW3fGFAYepMkAR4gPxHqqUQZvAmiWRrmyhLvSRWNdt1cYaoEKp2cPc4k",
  "key32": "23LgpM7npTRH6Hsv6f4dq9jg1VvhaM8NB4ecdDV6yLVL66H5Zzq88WKnVVenMeGdMDs3e41eDuZpyRU5upAq6vFQ",
  "key33": "2WdDAhVMRxP6TvNSnipm9bCgEWBvy2zGavXMya8qBS7ZUpwAz4gVoscgMuAZgWGaYAz4TyF2kX9iJxARpnkJ6HL6",
  "key34": "a8NQ5EKbKTj1rRgGiZbFfNRFDP2kNEKMKAkgBrJttDCxoXC7LFHPGct7afSRu1GFJbxzox27Luzs2mT8btZNVUC",
  "key35": "cztYteBNDhQrQWZWi75kCLMbo2f47zPCdp5JUu6euUSKM2ysD5Q7DiPeyD6nTavSAjmPDD9KLC9uZJomJeqFRov",
  "key36": "5HG5uhVUnQ4ad8gH93zebZjnxMhT6NL9hVzPkzbvnrKsVKr7gfwNrKexu2mFugSS79CsMFJTY1hXw5htGtoLUxii",
  "key37": "N3sNKHJFfdNV9e1JEX8W2SArqSENojgnEUxtj3SE6wRMr7rMX1zJEdTmWqP4U79LVFvmwDvjNv1vpK4NK8EixDe",
  "key38": "h1khuZsYP1jHPqXzUtaMMKJeSLaD38y1JqbJ8NGdnVFLsFrAkp3NtYnBmyNL8stF6rBuJ2kbuYt1Hw4WqySq3yf",
  "key39": "54PbknBDUzqdxkaEgqbruT17uzkcmYKhFWDYhWwPAkktqggvWJbQYEZ87pNWWNNvZegG1pdvQ72BMYkhq4ku3ays"
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
