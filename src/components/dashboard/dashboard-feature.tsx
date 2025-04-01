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
    "4inQ7WaXhAAgWgfhm3zzH29uCYCrwL3zTX5vJ3GmPdsGvAGpcRqUaY3MSaftQHiipz1adkKaGyd9hfVEVphwywMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KfXK3RkthPwVmAvgZ4XEMnrsGAnEfvGEGoJ7MbmNxPBaZ6mPY5Cv1UUEzuXbNRydL3ziXj3m6b2TE4H3rnQffJk",
  "key1": "29v5ZhzmBYMf3U5HK6iZZpCWPq6uavM7urBckgSUjCsCcptaPE9sJvvrzfAwHSBhs4oMw8X86Bhuczcb7znfoQrg",
  "key2": "4fKvfmfLTKF6fAwgXCtbr9YV56ZYy11RnWpJxhjMuMb8jR5tmBXnZWjvdCfhzLakmjJNoxLqxv66GPzCTbuRmxUk",
  "key3": "4AR9X4nL2yTq4NgkL3dyjxbbXrf731LEaQqz8Cg1nuZ87vcHbfF1mPJ6L45VcNcSL8L5CaDSM9PqEiwRSaxGTADs",
  "key4": "4Bowd39GUsRyqcnjGSiXt9eggJetpe38S5xYuviBfHYWoXkr7Uu7nZ65C7TRgvgTvH9KwbgLWVkGZXt9kRSMmpig",
  "key5": "49yNkCcqrehjGzdgGhP2Qjhk2jmfcuyfZLob59ZB2ZrpuPYsodeUWCsBBkjLWT7SEjWv6C4jo1tYtpj3wTQ9gxZ3",
  "key6": "2DxYPpQEdVMtFeH3y17x36To7UtBwbacUzWxiYa953QZsoRfKjRpkZ1t4CgGcM7NBfLfHhNPVu6SNsT5W8yaEoy4",
  "key7": "624QitQ1SbiAQrK6q68fJNaHo737fnvMCwtfE9xJ6XhmusdBYv3TYKUpHhZj2PoBk2EFFHbauHz8wTC3hv8bef19",
  "key8": "YE8iwii9KFkzMXWErNZ2PznjGk2VMn1rWVyGn6Fhy97CbTfUm1qxPdaAZwZpRL1ZdDS4jRX5xzCTbWPvBDdNH6b",
  "key9": "3NtUKqtfCPJq14up77bopcagb3YzxW53akjmn2P8oPf3JR3dY24K2jAFSA7vPVt1JnvuBjQc2632yaKWFoqGz833",
  "key10": "Aydbf8jMPaDCftEUh8MakoEJgxLMpmQ7V78xSrHTCTSDvibsps6XavP7CphCpzQdx8w9hYVFQCf3sTXQPBaYRBu",
  "key11": "Dzp8CW2KC6BBcrfbTt34QW3eVMGgihWHXFdXRiMtXbZhsLC91YrJgPBp7LcovgEWyQykYYd5icVhwNKxqbjnNxG",
  "key12": "4JBkU3bKF4yQg9gG3bsfi56MoVgRy1m8b2rrERPwgWtyW7xdjz9qiJYSCw2gchc8YJLjXQNe4ZhGGiX22juwkFgL",
  "key13": "2grghAzsXo2wxfcK5bQVPegamEZTDmU5wN7jProdzRGR9wEdsxXw155ztyzXQZChPE75j6T5M3ygw4wnFFeZ6Tcv",
  "key14": "4SYbdqtvguFeuupqTKV72HMc58oMDuAng4XvuQ86erF66Lyrg2Rj1XfBk1Shjhg7TrE2nEiA9aiBYfttcTjU9dtp",
  "key15": "3NjcPLUcKA25Ur3VnQHPE1Y4vSBWbweMZruPN1kjs8fvhhtn8ZQDxAmVxmWf35oVoqNkL8vMAdvptUTpfxPgeq3m",
  "key16": "5K9ax6966NRBCupys5HQ6B7BGyPVSrb7iaL3A7M2WM3d93zhaLmiewHkHxdUq6ri8BEMVxDcL1jLeibHK9b4JkRN",
  "key17": "2jXr8nE4ARbKXdx5znhUmpfXvnw8nsM6qAqZaE8FzTeHbERzA7nAFJdj2tqHvetD3Pjj2E4u3wyihW1MLhtRZNMi",
  "key18": "4RGJtKWcogz1Eu2gH2kcN7Jr88DJcQbYwyqbVGGeKKDtCj3HMajNNnVmjnPd9BZEfdjtJVSTPdm9ByK2EviM8Z3m",
  "key19": "zC3vMMBy83BB93NGDZvK1wQgMXemu33ms8AuWci5ZBNP4mkYgeDvqFRVjt5ePSdSWesPhTVd1vuo8SR1Wy3ZjKf",
  "key20": "3e9pKLqk7KPh12BV5q1oPYVy45rvwmmDRQA4uNSQxw2qeQe6wdpctoYcthdtGC9BgxtAczJhgFimxKeiov1PcKXU",
  "key21": "46Gjoj7kzXrmTVbo328Yhgs2XWsWbUWLndCY3BF9KTh2dZVnrMQcozDau9WEspANFzJyYR24J86dC6uXqneNxhW3",
  "key22": "4NaMwgbhQ461EmHRHZMUPBo4hTwAt3LB5HNoDgDZKb7rcTBe9WgFv4wpR1iPCvp5z6aMSVMSjdddDmNHX5DvECit",
  "key23": "5nfswVenQdvA8k31RZQYAv84wFLVwNP7WoRyWa5njTxzqbn27m9Bk4fc9MqVo3t7AmySMpSi5heYjDY9p8Lcfgws",
  "key24": "5yNSKwuX1e8tRHGCcX1WKpeDznZwuPBnKUTiezCb3Kzt5TqmEJKtABnMXiNEvs7UVmcfHnou29R9G7XuZwe4zAvV",
  "key25": "52GEYb3APVxj4RXNms5Gs8dD5sjULYe5FFSJHw5MeAdRyhfGoVZUuyEgHiq9DdL8JhdZZdnn1zAS7q2TJLMtuAdo",
  "key26": "2fcRMCC7vfsqU4CzMUJi2F1hZkQn2hTh2xQAyLaa1oM8K3fWc6wjpGL9tYNeC7p4n1zHsbjCxh8d78cdifDGooRZ",
  "key27": "4zbuDEkZrwEQcNd79GRN6BtoSspXCqm7aaPMFEmaLv9xJBCknzMq7f5qEJaV67KcPnMtBaNswJ48ThzGFsJ6FEeW",
  "key28": "4kFUQ7Aok32ZCyEuYTXuRUYs7BMJcL4hHBcsVaFPC1qQBFsNyvkS7cEjUCEv3VQHfs1UsgPTgnE4DNXWgY8T4kEn",
  "key29": "2wge5MYdLT7aoACLmg8NtcAp8vbAZ3C2FNaxDG8YD6B3tWHHbKNSDTKE5WQg9zJ2W5PWEE25APVBwT8iJ6qXX9RU",
  "key30": "4yELmzkchjQrxE4sajpAJR5TDanc7oebmEFEbLF7PuMV5d27D78pryRdKWAG8EJ93aYYucauB35Ep628uaPPNtWP",
  "key31": "pSpAKPQfooRY1U5vtoXJBLEjcBjfxQDaH798oRCnumbXESt45eL5XBrZs9naBgUw6kQYj3mM4ZZFfNvcMH62xFG",
  "key32": "4expuStB1PxDcCkRr7jkzRap3kHrjTvfHmR4diATeaWhAbUR4DkLzTVWGkN14H3Qh6fkiefKBMsniJRWQJddrjjN"
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
