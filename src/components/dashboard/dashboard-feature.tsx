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
    "59Nptg2WsynYWyp1BdFdYWYYvJev3A3wAvVFDUbNGsBCRVS6nqKqycgVWZ2Qqq8Lqa55BDgxL5svSmwA5VnLnd2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vZmhn1qKyLpsCH3EjbcuAvbjPguc3wXKfDiX2KcPxJaaQCzVoJ9Mn9CBqVhm1cbcu3Wf1GvNJqc53h9zjfADmoz",
  "key1": "5o9bqsXMBU7vJG16eDA2PDtc6FAxjevVue8zTXZKEAHDBj1PGCXKhRAq56hrComszu45jkpnzrisp1a7D9sMp3UH",
  "key2": "3tT9VnTCt4CCZmEW7d5UD2eEaiH7j1D2jJgWtFcs9XTtKhBAxx4s82BRNyETAzfwHgsLJFmVo3ZvMS8PUpv4ecQp",
  "key3": "5HhuCdtSHvBzW9NxMUuKFogAzZuRqvH63faPHhCdxgs3xr2rNCnDR32khQeDdeWwrduYDtEbRXJBBep9cBBaGmfR",
  "key4": "4Jx34heML3MfDEGC4rdDwawCxKgkJWTYXFui5g6WCkXsPCzC2raFu7rZ6o1ezPGN81nGbD99DLXnrbwus6TJmQj7",
  "key5": "2DAmekEVgzSNkSsUckhniJv2uyRPRZ1f4Yjo7tpRHwDWPsBEy6bHRz2nrAJhEKP15z92Z47JnwFUkn4YEUUDpuve",
  "key6": "2pji6WMYUm2P4EeWYb5MqcpXoCbZKTGsd33RirB1phF5eBB4PoabzbmDiQaC4coCKSVZeB39x8LYYKwXA8LbGEMz",
  "key7": "4QC9vkNAELZGEKP7Nos5TWacsxyzYysGr6YD8jX3hf2doZ59zakVF2nC53yd9H6QroYg24b8QqtJH1wAWn5pv9XF",
  "key8": "2inPcYzYoVsKugSH1DCCM8LqvUH3zw3ApCgM2YsC64PqjstffUR3WopVgyUG5pkQYVh8VzBFVPE4QcwyVDgqiGqN",
  "key9": "55oML7KFf7yKzNigq2Q1nKfvpgmUaKEu1Kiy8rmpGfsoUe7DhkNtScYe4cLKNkWFBKhZXAT95qF3Zu6GCg16NrDg",
  "key10": "4cPZr9xkcm9EJuPG4x8XBENuq3wR5xngSUfuc4WddsoTcYv82MjGtGuqdLXPCjinS3UDV6wFAH1yEU2oDbfXU7kj",
  "key11": "58AvVLRd8bgd4AxXA4RDUZjeh9P1u9kBaEs7frpSCYumXK5ouemNq4x2HmmJmz8npaGQUPZfYYL2YJdDBogtxTWz",
  "key12": "5M8QDKXEn8FTP65ZujW7jk9wjJP3X5UvJRzQpfQyuETEKtV838Jtie4mToggohQsGBL3m2x3TyiDatBKPUKY6fNp",
  "key13": "3Ei2q9ZJB1fNAvBupUfcMs5tjFiYhoKj7NTsiD99kc9BA4jVE5mwF1UNqMAVf5GbpLyvrreC9pw8m9zHsYw47J6T",
  "key14": "RmcBtpaSnYD897wLVQsrZDxcURBnbza2paaoAZf3mGcR65XejSQVJiMi1nhNq82TMuoJYpSKG4ovfCPb9G7kg6n",
  "key15": "2faKSxiNjoWnUsDEBMwJBoFdF7GAMLBnYiu3WrxMJTjazEGvNEKCPMUAmLAkDN2SPFzrYv73eFH99tsLAdbW6qbr",
  "key16": "4ytG5sqNkXjGaU2Caiy3SfcywBzz3giQmECVgGoqADbjSTVThF7QUXTxH2JXrfr2FY26BZPSK5Gj1bVnBa1s3P2G",
  "key17": "62X3Yfr9skJWEmYhEC4Nvcfo8PiWdthcby7gCcEmokZVcYjKeQrut8VGvFLgjgLZbHjSecBYgpyNv5tTUFMa7KrZ",
  "key18": "3QoqrJkARbwW8rXVHyNjGgpi5YeVR9Kosdn9PBj8Y8fuMKYBxnn6kbT5vfmE1rNWBZ9dNGogDw8r7nr3ekd1fDQQ",
  "key19": "5JARCPLt9dnoKoimXgXom3a7ojMfCFr65w6DwEAiCyiXEFtjzf5xSJRJftc2uQ4WAx1udXeGoe4biwGqHjR6LM5x",
  "key20": "5peb4fpB1F14P3P5hX619KhbCP4AFNJaLWocT9iHTPoCPckxnb3xsPL2dNTN8AQWAMBofcSRrBAFMi7KWEYGHyKe",
  "key21": "4sgU9KsTFmnwTytk9PcXB9MLkCkLBprM7X2jAjMGxMrmQEWbHFqZbfeYjPnsbAruwHrtZki9bW16RD7HaHUryf73",
  "key22": "3Aqdzy9f4ukePYuKPKSgFQV4oqz6uoKPzs2cfBeHX6PqdUaQ4xKoGyJpFs61muzQqdWBTHAsBx9bdvsGoaFBcvGb",
  "key23": "5oeH5rgXkNcWov3rhMWGTcfHURJQc7ut6LLHWqLRJJqFXtEbxruJ3ufTUZZkv7pkVURZqdvdeNbqUTDz4XCtxqbG",
  "key24": "2538FZjHmwTuepUFTJR9tKhuZNn7J5cRaxFFtDFWDWpLyAKNWFVJEDzkv2JPZCzJqzvn9uPdyr4Q6MjaRGqCoqtL",
  "key25": "5u9cfarHy25JdkiR5buF6UQJ3XtNnYU2LKkHZooFzhHwyVdQiknu3GmHK8dLFAUTEDz5yr2LGe1Rwp9njqY49QGD",
  "key26": "3xD9x8Thmiaq66NS9Nu6QvH8ZBphTZLqBadVBGwJ7ajT4nu2hs26QuH95aGyFEU3KGvMWxSBddxJUt55ip8EPTfj",
  "key27": "5NR4xxpmHzkXZRg8qiAVxsTEq1UZBfFkFimzqpqH11Yk9pYTPRFKq2sWdDV3RTRvSJA8S5ERgXxdzEcynrLW31rb",
  "key28": "4wHbrw6a1p3gXCdtWejzw644MpivGe9wEWxEcvuqxJ36xUvdYUPZwz7N7WeDat5XP3Gagwx2f4BXRfu6zZEZS2Sh",
  "key29": "4xfPutrKu1tgXierHVuXJGsmD2YeJxg6AYcya8R9GW41d85ujuXna6rwTZfeHhssKHvXZoG9Dj9y5KvSAND7X1cD",
  "key30": "3AZtewjTVjkrTDQg5WUR9AsjxtbzzDti3qmqTR5oRcEoTteKEE8ZW9zCfXU6ZPqR9bNVAKQcf1dsxE8Auqnq6UWh",
  "key31": "gBTYX87Mjr2WQ5upQ6s6nXYzHBG59GFwaw1RdZqYotQAnSRsKY1rUe68bWXy9J4duwFhTcD6rQoaBiXYSobFnyz",
  "key32": "MdVazuAaeySU5m4Lr3VTY5zZA4F1ZYHiKt4gggWTWFkMZ44BnWs4vnYniXUG1jjyyAgzuVyb9AnAoATP6vqRoQJ",
  "key33": "4dm74Pgm4QiNqa1uf6EBST9jDKnYG6PqdBG7Y52wZGobpAeZsnG4CLuX8aFE5nzcfTYFECz1WJKq2xzEBKTLGjnM",
  "key34": "458b2uBu1twfm1fyFwexRuLoftBhotYA9Nbod89tA93E6VnSG9b1XpCYZkV56Xkd3rpNuEXS86Szqi4RTHj3AigA",
  "key35": "3x1d6cyg7NJ3zT9U3UYh2YEkYLo8AkwBaHjcydCRZSzNjc7V6tSwtdwrq1hozaPsTJJMtrY3NoaHqBMrysPDwruY",
  "key36": "5XYyZf1Sw9RqxSDZuhvvmBBViCc3iySg61RsLKX7TwKoDiC1ZV6Wt4bsmQsV47tjg2pzr97NZLVvNtuKjX8FbrAH",
  "key37": "2Wr5b2XqacZhyU5LccopYZmdTGgCH3DBuaNqapHoxAeWCyJPppsuTte38q5DqR9Vcp7cFKy2oZakSFMedUnCNc6Y",
  "key38": "5aoAFQvb8HUyevJYiMSfwPtxFWWkcssZoTkRpL888uJN6oBRNa8nNFH7WB6EfpDpabNybAdJ8vXuLEZXGSnahdgN",
  "key39": "2y1FRyYyH36EHhCUvT55asvDX5ziyL8XiCGwDBQN6439a8vwGAW8Jic3B5KwPuJ4nPRuQCQKfwevtd9sWPsd5E7k",
  "key40": "Ruqz5sAi9kCw88xNwexnPjhZV5Xo1Ui6rN7z7FtFbfMKKTZdGYDLMiQZjmQZztnD6S7R4E6V6AjjRTbLtS7VazX",
  "key41": "2UQGt6s2rMVD6eqczpkG7NuuHs4936owGx8rbeQLZ5d2rHuYMWawibvPWCY6AWwtiCr3gLhQdmAygk6dkgVWVsMR",
  "key42": "4o5Xs1XzjjvXDtAZtFKo4WKsno1FwWHVe9yYnHVM5Eov3LDkrfS4ivFMCr59qVSwJNHDWg5B9VwLmydsjvE2Z6fJ",
  "key43": "XJ1HPZXU4uD2wTZBtwgDLccahg4e1EEGaQ5B5UmWVwvcBU2hjJHJ8B4wfH1rswXmJhBmftLhGXCYzLksVrXRgoX",
  "key44": "66V9yf2Pg4FWJUosE13S1Cu1j83nMsrDeP3258YJ9ev8DVau9hz3aaFGNmMhFxtxhbNcYLj6TsRuaPXoekw5c6i8",
  "key45": "ViSKzFvgoWMHCd9G57bWanqkBcecRHJRAQFrJdR6w4UqG8FKmAe8CDAnjv6o6uXB6dg6Nb6KCtg1Jy9PXoZ57cb",
  "key46": "5CKDkwQG1bAj9rNuiHXjaiL7EHsbhngD4tMejmcZqwbnLkSxjUNT9gvpsTSQPkPPtaraN68fzXvc5rNsZMbdz6YH",
  "key47": "5rybCESXNRTUcjKv3Di4vcT4nfP5DmjN35hdwHxEJ3SV47pVKpS7jE9t9cmeuecYim2QoyCmzjxhWhRvHXFZ6WEg",
  "key48": "5yMXfr3EcF7zTMsd6y766SeZHdiMzFUvR7wb9KfA9oDzjQwpyfM5yLzTYihChvAfcrz2Au8wx9pNY1zPwaWiSskN",
  "key49": "3qqDUPh2MhPW5dUjCf1cto6i8i62AJFq9sp6JX5XVgmJB9VtU5M26BHiANVqSgaHiV8reS46zxejqQpcunf3V7vZ"
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
