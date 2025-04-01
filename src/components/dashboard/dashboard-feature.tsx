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
    "27B4UU8kP78imHrzgeLqRqFPoPAKDgNM1ALAp6KdjeJuxrLZrxRrHmUG3YTkrLR5ei6JSvqDCtnnvB2XFqUekyEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vrgTbyV9RqnkjeyRePmbpRXS9APb3coQ22BHVPz5YPhz9XMqcWcQNUe3WgmjK3Cvxjv2Lj4YSEhfW2jj2jPvrrd",
  "key1": "3VNzCkHmEjEJsBv7QDFdJsLEeKLsjSVnaPrMq2fp9WBu6JaVfHfVxmrnCbtdUor2a34GJK4bYpez6hTguLnccFHj",
  "key2": "31GvoVYVcpQh3R6UEKr8ybvqSF69QJTdfmwtkyRNN3nL7cQPu6gLUdSwfqPKg9eL2eER9qJoTkmSCfBHugWmuTJo",
  "key3": "2kPevbmD5Xx5yhdZhHywzFrXM3zuDgYTb3bVA7qF5ghNNgEQ6H2QJoyJUj1ygjevWYepHtvKuhaDXUiwhpYB8V1q",
  "key4": "2jJTerAq5XUqeWWdTxZ9MeKSnyvq4oKqAs8CaxbLHX1M2g31r5NZZpUeDLwKt7TwrAqYqmzQGsWqU87dARmRTED",
  "key5": "5gYVjjvf7B2P471mBfiDZLQNBVEfZt2EGm1neM6qQhPvsRYm749x5keKbXojfFAoKqofgNnhihaZq2RkcoSQCmRn",
  "key6": "NbJ7tGSSH5rLENgpMNxCjumLhBNuc4Hn5YL3RXCXaYmiLfV6ifUdWjbnBd9WtQ2d1PEgwdxE55xBs8ShDvRqpHD",
  "key7": "xaLNMH1uMWCJNH9z9ZShp4GmXjzPE276ZSzsoZ9xNDHWKkj21EznA7bpxEi3v52d7nADmvhrHSuqFX2sTWEH3LH",
  "key8": "4djiJgjU52MjJH6vGk4d8ve4XQZxaKjRDhJ2yQdnn43PZkTZ7CXeSdbn6zNgUW7T7Tcw1fdEyHRvwNyuA4GV7BXy",
  "key9": "59BXEvTuVSrRjrs2PNkzaZzP2uk3rqKHfDoXJsi5A45zDPBq4jJmEQHKNb8JebWvPnGigKiWpV7LNQdPjx5yESG5",
  "key10": "5xzfXVk1M7XVeV4YWrRQTArcdmy9nJE5AiKZj2H8CvCyaFvCmFEphSG4DGzqSwzt39xaCpqrcsER4v9pbSZ5fRkq",
  "key11": "5732av5iojarjh8QHE3ng2Xw4Bq5YsUMSZ97HRAAZVMWK2pgEEZAjhRg5FdJutTn7NHhXY2zXgucwhkq5CD2trg",
  "key12": "5ypVvtThmSPbEMSvrruMv7gTzzurR36XBirFNvK2XdgAowc5SREvushLthThgJyZERoy3NwCzKwgTNHVXpgMm6Kx",
  "key13": "2kPb4i6zyifrmguEjnYK4zXpe7URAcfcvapwoG4LL8adMVt8LsG2rvYdRjRuuy7wdugxCwV53wwVotsmZGbxRf8u",
  "key14": "2a5NHUAepsSyqzxoQ9qK82nhfFqwb1fhbNLJvqm1gANRrUfdWwZS2j6t2cRvX66TBUMNqndTp4TDwZaY5iphjT3d",
  "key15": "2uWgyhqf9F69Zwn7dFvQc8tztfEBQgHjfAmWXeGP9b1941AJ1y7cXgV7W4rCjwvSgts9j3QHeDUJX8wT9aDrGXVP",
  "key16": "5FYEuDPGDnzoGiNgfTqUJrMnBwvs1K6ymZ66MsS4Mw78eDdUjRJJ4W3AGPfhyq8ptBySsVCDsAc81GucYBUG2QiJ",
  "key17": "63np79hzZiiqJGnuzQkgvABKUxdVkp1d7dvjCdB7Q8PC2pRdrLgAWZKVXUqPE1MMRJhrK22wcvRv4uvMJAY6UsGW",
  "key18": "3Tg89UkAm8iQdAQxzDGVAieeTeSHkGcCCRwJ8De6G39ivHs644bPvcE85MXdWpvrh3z9BmKZHrwL3ie9JV8amEDw",
  "key19": "5w8DfA8BBT5nWAu8u8QFbEkvAzudG8yGiCcqQfGYJN3GPX3Hb4UBXgtjy3CAihEifMkMqmCTsn6BjqjqTFsNxu8V",
  "key20": "4jMXefLmkq7rsLGyjS9JHuJZZsuDUVVCtHzm1jf4vqFVMPbMj6mA29bWcprGX4dEYyfZnk1wo5mw8TEhZTkWJeyj",
  "key21": "2z54vVimbguLC5zuQZQpEDhkxqfpZct4KrTzb37Bg9Wg3k6c9Q1pEdY2bMdK66ZxsDfpvRM1N9wdFxet3Ngeamdb",
  "key22": "3roYbHiUHv5BPc8uYNNgPHNRp1apcPsGLzV9ZHAHFfEKjBJtqq5nueyhdSW2vKjA8EUQvCska3BU6ydbGxHUAUpd",
  "key23": "6RF5sygw2tahsVPN7SR3UzfzE5nAkA1FBLncuXLPV1N6bADXDTTfthX4ZAErXEedSzFCnx3fJvfzhaA8J5isX8x",
  "key24": "3Zj3DjV8y5QpFjRgBTvPSa4vC7krSWw7tvDLAcEfofZPV8GhfYoguV1Y3YJbFCfUN6TSGyZAVm1oKNnUPjZZipeD",
  "key25": "3oRC38mwZ8xFQp79oSRF2mATM5gzaMuaEu1vRS4h7ZAGpuPHxGPBC6Dop1NpZXVe6jgfvopgwwKwWqFL8FNVzfVy",
  "key26": "4gdMqxeqDVMUfSRZP3L7JKBfDWXu93HmRc3TaFuLA9ieNGHT8gowqtEHdc4kiQJStsRxbUPkSediQG93dQxEqRYp",
  "key27": "224HniALTHDTnS4FVnSA51YKFVmKYAvm6SnRYwkjxg9Scc5w1scHYfXJMxWLJdPb2SmvwCztLxARFbD2zsyvNmAG",
  "key28": "2TmxLXR6QaUpioKCc9MhasUH1t8ZXLDcwDNjykJTPSbNphu8ar2j3cLUc3A8QugLQeyA5pXfG8KrTgUJ6T4NEp6V",
  "key29": "3yoXGQ7diaJii85qgwQD3gSdDg7UK7PN7dv1MRB71ydbgn6h97vKZnEX1kRpNtEwNQ53VVDYjEwg4edR6rPor2So",
  "key30": "4Umqt1ZyRQUmenCsk6PrV4CuNXkjicgPqyvhZwH7agVWpuFYSe8uxDS7tSoFxpwcGy8erZyGMhK4tjJAw6gjvMmW",
  "key31": "2HUQUsaQhQPQHJLv9ikZDNqqFnXZeUGZAd2gwDDtta5rNyJEHW7fPBvtWtetay6qxt64a7xpBQkCo5RtjxqpfjvK",
  "key32": "3qwzDVGLcJ8Uvh7j8gxuuQ7BupwSSQ4YyXJDp9N8YaKCBqQH2PohPcFtkmG6ZaBPn5Y6pTpfF4ZRFJbKprm9yRys",
  "key33": "3LA2PLrTshHdcFEBg79W6UhMbgBqN1MohoHnxwcWw3S5KK6xnbD5tJ5djzeLBZgbfi7Fd15MsdWKZTCmGP3JBJGZ",
  "key34": "4QbVrxVGG1yQPAtEkh9C78VzpHdvR3PCsxeG412z3gYo89ni4JZgA3BK72XuaiBPXBujz89LadYS4WFVL7C7H2cs",
  "key35": "33ULCeh8NThJh5wuBJSgbjcYgVPN6BpE8sBNhyA7UBZWjAFgEm4oZmuwVEuWyRt3wdKB7zT1DGM58fNNUEv3GmeE",
  "key36": "3YGRTssKMcAp6mQmuQfsYdMxsmgTigwfFZ9qz4GudHhPynLuBVdqo7uoJLEQPkHPg5wn8B6BhiPBzroaDvCKbAmH",
  "key37": "vDo5sy4AB4qy7EmnGWFFJjhw2iXPwoMuRWra769nH8vgeP7K8ZNJvWRAmsBPMXxuRGo98sHeWF4q1gMn5u6ZbuF",
  "key38": "4bwWFFN57rJ4HfANgaayBTjUdqGDCusqxeu2WBef8a5pmN2wf15Bp7ghu5bkb6Be798tosshxNh767pN1dVVD3Em",
  "key39": "5mJXf7eXVP9EvE3WPSt8PG6XBkGUgwRKNhvf9oFNKuY54UuhFkBvTyqrCzY13uNt3i6pVcft23RJax3xmCaM9coj",
  "key40": "LqHXYkYtWp3LNfL6isVfLYtxnm8AzoRfCBMV696UPppE3s8FdmYDmqZbmySzVCCaFzQwiH4bLFyi6s2s9CWQUEB",
  "key41": "2yR186xB36N6YsKsYsDBkaof7YTzQr1Rdnf2Emfba7ajuoqMMwnuZ1BRaMxw4gA2gKWnJDvP3r83hxXYKcU1wh36",
  "key42": "3hTzKorhxN5dXZRoP9qMu3vhP1eyEarESdNY4abeEQYVi8AbteQVfm23QPpVha9mc2cokrEHHTZzJjbgUWaE11mw",
  "key43": "2RpMycY5SUP9GX2zQg1zPuX3mQQ8J862RXfz6ToYnws9x4duZwfJ3LrQY5Mh2iqdcZtHnUEdPYwcuGSob4mk8ZHR",
  "key44": "3cAaAFnVvmPe5HCgemNKvA1XdnLh4Z6nfSpWUjAH1TTQByMiVsgFHKUmmPXoqDfjSZRucD6qgmy8E29JVX9Sg6So"
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
