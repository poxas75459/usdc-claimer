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
    "3nxoxShCaJLR4uPAMgHWJehNEvQSBNVmbRCnYxP8nBJZ6uEBfrPxrakaYmxUEyz9VS5CX3MXYDRc8zHoCw8bkhPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AD4G66F3Etm9863z9Jkm1PxD5dsPZK4MagKvCcuLYjG9nKz7iUC5PXHutfBgxrqwNqUfTBkBVq2iBruEBgtE6wp",
  "key1": "57fyA4Wt5dJ3UjbP5DA4AwBhWeHWFYAozXQiVhwrR8gPa5Prp8eKLLfW1UAyviNNCqV4z8dakv4HvGCXQ7MtagpY",
  "key2": "2DygNexzm4GPjvFVCZy8iHEzR8rdjC3d1Ji54ERYBnQW6UF1jZcMv6T2DkAuefSLdeSXWiDc2zjoPu1yzDQZuF1p",
  "key3": "3LFKi3EdNY1E5siZtGNH6u7BXs3tr8eFoiUsyFy49o39LxDJanNwnmpDX6hdjbhix63WhcXT24Vn1PGiuSBpFY4m",
  "key4": "4fo2D9BbVWrErKB3BjTKjobNbgadf8eg3ThnvwLE9ufrvbR51UeGTQDxy3H9eYxVFVFYbRxs8WwAbakakyNAE1xS",
  "key5": "dXfZHfYaSJtGPr14y5BQr2VYqMTJU7jVQYG2b5n6DBC82wAQvGTABicLAZVhTrLhcNJyhsT42QYRRTsZFsnT9PF",
  "key6": "sMRWsubkdcFHUfH1yV4Sqy2sK85jBT7hzR15Xzz8HJvkowBik4pVgfM6rNiCVKx6ivBh7zyYgT1AgMz5B2M6UZo",
  "key7": "4vbEpYq8R6jkyC6sLpMZJHZRTrPW6N6U9H31ZuD3FWF3Doa7z9VX4gSovDnuvDiPRSboFhnJBEvWgztxC3u3KjEo",
  "key8": "3jSt4cBRqnkiraT8APxwJHk7qJSREnnqHduXMXNMDkXQPoL8oXrE3vvi5hgt2mQTURXgm5ys5cGLMPmmBJb2KsSK",
  "key9": "3BKhtk3wF8aJDbHUG4vg9UxR1a8KvWkkJhEET34gDn9JQvTDn7DUqtSXE1WJbwEQTsohB4zm357XvouNi4tLNXrT",
  "key10": "5HEPVXX2nicoRuDza1aVykhZkPkQq6BPndbuegewSPACC5t2uD24ikXznnz4Rj84FPNo3ptkVAHhVeix8JBS7Tmu",
  "key11": "2kLZNfYkeAs5UwFK7AJnhqPSbTLaMYcsEmvr4Mu15QLBNjgtWwUCm9k9x3b6iGZJUo2p417VtnC7TBvQnsXZqxaA",
  "key12": "4h5qVsHET1bAGLtypmcsYMBGf3YnCJ8nxaAPobv4rSu32DgKgTLrHY46DxGckwzBoZoCtzKMgMyLSpJoJDWG6XxL",
  "key13": "2SKU6dD4JQQHZYGpnuGizCpViE3NiVndfK9Vhj56MsnqvCf54KDTvfeS1Wix8L1HV1hmLuofxs2BTPsBwciNw5Dm",
  "key14": "47xTMt8npfcmT8jPbKAPABDXaBEBjF24GHYRkhFzKbCL4mthCHoUEDqbG1NBop6VVG8AUQQhBnTJXTYVeAGeYBj2",
  "key15": "pJQBc6UrQwZ7WaRXJRQog3jaTisVkuyorT3zsx6WwgFfY3sKvjj5QrrYBzWDidmUT4S8bKKeUjwTz9EvNdxocd4",
  "key16": "2AZ9qT3bnmuG4q5PAaFfsq4vSdyfEGBi5r4iWpN71qCbaD2gYRktQ9bbciLEZQtzY6wQfAZBsS3iCzWYXYwuH5Bb",
  "key17": "yMbcFpcp4PYie4EyUH4VjLCpnxjPC3G2MsYM4t4uWqyAqze7h3Xhq5C3XXqvkLuRqynBLnpPj7UisPMkUTtugFk",
  "key18": "1soF47xhY8Fracki17z8a3xizMCetdV3vjse1JG3JUKNoqjGZnQJsjRF3fJmoEtT6MMcDPamA9E5bZ1KgqKfLYi",
  "key19": "3NwgZHkh4czmaEw6ANPS99HRsBTikLnXbHWb4bYH4Jn5JLmNwpqSF4dwXdPViT1xw5kAPpPjGfboayYKCJbWpNYp",
  "key20": "5LC2qwDMHHVTde2fPmpNa6BJKWdBmt6iHmy1e2BSeC4gKadrDJLkiN9xn1Ydt7PMGEjoqFYiPeGC1rkRmidGfkw7",
  "key21": "5x3jJLFXkSDzLeCwaEbnCZuHf9Y4MxpAs5vMvRs3FCZJCv4Q5yjgHk4iJfMg5XVBSQjEo4zJUWVcAn27PkGCHhi9",
  "key22": "2UBAdzYfJTduudVx5AYK7XLnjscuLF8HGja8iUUDYu2SCXpeFEQHdBuGvy13ZoevXyQGfGePiGZQcwaQW8r7dC4n",
  "key23": "3kGu1pShY3yVaHKEu6GBY1cpomqPhNC1M336eQCkCeoJ8PTTG3d8tQa9E5anPw4s5zwe1YCGKrfWGn7QeNxwdiMM",
  "key24": "5z5psqWzaUiogFcfd2rhGkz5QvQgi49LGNe2ocUfV9E1HYWHrZ9rvduqLZowTBS74zbZtiQ7gzwP8rZf9LxWyK4S",
  "key25": "4c2Pf2YZ46dGNW2ABqN7X6ayeJLzmpEaYbNnWgXYhZu5PUUBKKQbJzjNBomdyPjrFpuQgWCEgYSSr1duLoDpaBi6",
  "key26": "5WZNU9G8uhEqvyeseR1Xjp6igyfHyV4dPMRzkub4szHoiskdRn7VjfBTera9WQsgNjm77n78z9f6s457FFRVom4b",
  "key27": "3C4ciA9MPsP46mHeuqCRM9BjkHmgTexZN7iW9wgivD34c43r8P8co88qe4Qnh5Dk7hhCriGchNWTGgDMj42swENW",
  "key28": "5Wg5S5U3MCwKZh3onkxeUbPjzq3ynd6cKrjrtspuKjPKxjRvC9NxGFre4fQUMHv8WC8tMAFAKv7amiA9q9z7K3nq",
  "key29": "RZX5EgEP5DK2XHL667VPhVw4nyVDmCUV4waadYMfuiq371LmjyqS4GkTYyj5TPujU6eSSqSZhKaYsHUsFzVj2Qa",
  "key30": "33DqqfYJBMJ955agEHs7bWbvBk3gTNyPDPwWt2x79RRd3tn3JWu8h2ZYFWzCEBtBL2GKr33xTwWnrBjDu5MWfVFU",
  "key31": "3Afc884ctMsdcR5j1qygUB5PFvctGV1kRrn6iAfiRqo5QLCqervEkcDh983QdFf3YdaoYKdJDuWqfBE41uG7eGUv",
  "key32": "bWVyY5vNkPQWBBsmxuECYc76dAAD8khJcjygkbdRNuKuinVN7zAsKHPnuXFt7JLNEt9wxen6GKJf8W3X76TrwuA",
  "key33": "B8SnvonhsuophZGLiTbnZryRbj6vgkgt4gmcq8p8hYMznz4P8pZwijwpJjXeKPiVQuymrCoNt59mBCjEtiquXp8",
  "key34": "L9YdXLyu3fFF63CnS2LVY48B9Qu8kTgHZWyyTmMRrRvDeNsg8Z51wfAodc3ioDprCmQnq3T8FJDvU9Byza79W72",
  "key35": "oQdtAwRpif4DQXBQUP6HsEWFVrH3zWV17evqZGwQgFKSt8Y2nsYWkyTcNFc1XL1ZAUf1KpKvKWiagFb2vLKETq8",
  "key36": "4EwcLv3BZ6orEaf2Kv3gB7i3twRSTgcDkEQf6tzdQRCanCuEfDqN4VPZ22AXXahJhLg2NPpqPwFo9zX1aiLRvjuk",
  "key37": "5yTnMhhffWsBHxShZFVRcYNM9DX67XbXqgSJFFAxYoWB12JzCym1E6V9SN2u2gX7aabwYi5PHQ4qU5GtNahdTxM8",
  "key38": "2qfPxeA6RxGp79pg3XHhXWupd3a3PqpcfBitoFv1hTtGZEbbNWR3w56F1uXTmetJbfSchV39ucLvAHzP4AzCV4S7",
  "key39": "4i5FAVZ1yUJh5UYqZsMC3Pk6AXRwAzG2WZV3v8vQQ5UVmisNyeuemhHxwvA8V61tomRYVdoZAr6KgD7eSzxikPUq",
  "key40": "zktaH6Quyh5M4BgXyaZznrSSDCRXb7aSQXBNv8iCQcDWPQx4aTkiJ2ZaXJUQmuDFKHUNAt2PMvRDghqLe4Z5TM6"
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
