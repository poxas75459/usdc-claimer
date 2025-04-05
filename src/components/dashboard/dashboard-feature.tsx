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
    "4SC1XwRqj2TFN3K7gjCMbYvdvqZ4HtRayRjjKtFjmBDaqWHL6636m3Ktb31nM9VfRnAr2oaEYZXvnJm4MRXVJwfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cpvm5vYTNoitSsWYU5tY62LGjGKsRksoRnfJoY2GJ9SRfcp8bKgyCHukuwD6w7ZNWw43gB8G2Xd513NvDVVg1gg",
  "key1": "2NZVymn6cpYvJGxtdCxiHA4vvai1RqMNuPJiGgHw1v96VbmdYygWbucTmBLQFmf6t6wHnT5j9FwtmWG8FU4rNBkc",
  "key2": "5nSqFVn92UQu7FdPpGYbXhSiK3AxtyzzpubbQZHEGxmMbg2DwD51VBcPf4Q1LodPmckQWj4DWT3Ai5UikbuEF6ig",
  "key3": "3aRWQDBMLKzqQH8Cij7FZmFd7P16sps26E7vD4KDWgR3itce3q4s8d45RTQFRfgCwERK4EbSihLgDMPLbpoSqhR2",
  "key4": "2XQ7fUHwrWUwxEERNRF7VDg4twe8yCv9xuy9Qb5Zus1UZxMdbqoTMZnYq7DAejEpASmqrE3wjCqhXoipMfBvUJp4",
  "key5": "5MQbEezv9agUPTChoPYtxJkSvhGtQhajzQQfHs8vVhc7S5ekEoewstwuuDdhAJZZqK5pXMVt9MFZ6Z8v7ATCHqTb",
  "key6": "3RzCFo5sYjgYPAz2E4mWvqYMy1ySfjPr3qzFsWQMYUmC6frDhRKAhkTUgZfYRx3R5oCJZ1gWi6P6eGC6qTJMtykn",
  "key7": "586jprzJrc1jTk8bzAXMb3k18Sp3tdx4b8Z1dCEeaFe5CGzJkGPSyjK1Px2xbAfG5RGsZ7caibSP8GSyftL9VKsy",
  "key8": "5oKa55mCaiLTgSwCysHcLkcLcKNVZ2bU7xX8abJcyGs9PvQvAUpvRaZLgwrL9PTRdPfRYYn71uEEiufF4eDeRmUz",
  "key9": "52GxP9c1K2bLwg3mnTNhSMu755LWH1sbf4yf2dhVu4EoiuF6fLByYijxAjenk89x1rU8WpFkhZAfmqgaewG1Bd4y",
  "key10": "4SakZyD2BegiQW7oUum54iZB9cqWW9H8QL6DduBjj3cTz7rXhDKATa21GPwycaKG5oiPTEA1csHGSih8vyN7Mox4",
  "key11": "57DaEfvxFzjv32mXpQSB71KYgXC54GuwiRTsKeTQ34uNrAMGkbexxKnupa7UBu5f4fBk7f36HZDv4Lbf7o49YDEw",
  "key12": "41WjxFEDEKq9QmMuCayE2APBggecBub61ggTHdP3GLoHYo2eEqDHL2FgtwPiwQCtb76x1eNw8vgwMAGBiijxRrcy",
  "key13": "9AV5WCjNi9auux4bMsjTCsKfiuZQEGgmfj3DS6jqPpbsZkjiy47iC8MHcHaVXcZhBHATjY6BEt53HDHP36fkXWU",
  "key14": "21owh4ZWNLcB9AtTf5JVhU9yDqJD3WJ9bQ2FYMmjqqhH1hjxMRkJG8CnGiCjNveR2iSeBbHRR1ahQkTs6y9H2mwR",
  "key15": "4FQ3accFBbAs9kTR2xKemwwCUeYivAUkSQEzasLTCCLX8fALeWMhLwqvdHYtdWdwsSXKgozALAjgGwQ1a43YodsV",
  "key16": "63b7yrSoL75Wms9qww1bXqrkf3VxFZCemfdfVt5ddqRSPnTmUMQYUv9i6Txgb2yGXJepcFeQ5U4wRi1dkTACQLSH",
  "key17": "3rCACc8w4cb9DDKHt4DuFfaeb1ohHZqX1hNbQfR8yMB6Jv2pRywgXuK7Em6qEFdGY94QFHDKZaFtd7HEHZ2jjcXZ",
  "key18": "F9zUEoYkUt5NvQdRDqV8RBSjgVdADZRdZEqqiHz6ZSAuGPQRcAqXh7s2xUPoxmbYGKYW1ME8QgdpHVVtHaw3Hzy",
  "key19": "qSByq9Z8EkpVKMkUdAQDQRBof5it5y3LuBNg8Ycv9CTBKhFKtZSqrn3ae3DMAq61tcdmV7ytxWn2xQwS64jQuG3",
  "key20": "4QXaFbpxUYWS27oogJmMrrh7gJ2cTFhN665FXsuAoeuW5xQjQFu42m3wemQNQCD8YeFhVw8mFSJz8N8cGEehFHAX",
  "key21": "TTqLGZzr5E6wic9ghcPkEH1YLvNZwgyYu18nHFWcEGbf8zXmLxEmoqZdqSGaVoEb3woKrkFbGX7YhdoqVPRWgno",
  "key22": "2ZZ2tYChFc1k7dGsn5yMMj5B6aaC7yQ16HU2HEqxAjHUxYodC9BefjrKJePtava3TyAkhbsJPhJ1Cn47AE7475JD",
  "key23": "5ysPxDVCKF4r3UVftxqmgvYm41zLm5RLEX2Uj2mRrgZ8nXW7xEzM9GCyjEQDevPgzr3LXqWfE9zwVjCGxVrZckcv",
  "key24": "3Jat2Dp852SrCYj1W6ShxLZaMNuxiqJxJkGX1r9LCT2zPFGzJc5w2YwxGJgwFRWTW3ZZjbSzCJRVHJS4nvtR8iDv",
  "key25": "61jVYMgpNFE2FXYdwwF6gU4CMcHncGVAXADjBHEnqGsoUJeAefN3BWv45tDwZoZYVjqQ9En82nyhm5u6cVATD9TD",
  "key26": "3wkmJQGCkP2TrsUFiAjq2a9U6BUn3wPkhcXgGbfWXVRtzBaoTMdyTDw2rVbD23EUEewhAcAgYrxy3eupNoHJnxjR",
  "key27": "3ZiSTU6XXTYFkCkMP4e5UigHQzjQ2Z9rPBKcYqYXoaZuNZ9Q1JwzaeGwevgJ4sc8DTdz7YLvbfGCs3aebVUCBFzN",
  "key28": "43bxMsoAm2iUQHk6xv4M75S5hBoKwATLy2x5rcEpPDvU1FgCodRVihbWDGGi5CFr3f5N3yTxNAWD3EMiD92MiQWN",
  "key29": "3YecEFrEs3ja3HzHdrKGMuKW1n98jd66hjt2tuGXQ6QHx1dk1Gp7fnJ3Domo9xy25QF7kRYmzNUeD93LBM8MLoTS",
  "key30": "5ZsGuDwnDmx33CcfnHS7zcwz5jL1e5MFyZF3i6xfkqEyw1PbXKY4a95f6wZebTSRL2SUDvBM5ABDXSRPtDexenwN",
  "key31": "3taqPstq3kdG1SFAF8MMXTnQ1XaSVE8GcfXE3rtYAnXzf2ptqGhKRAM7AAA2KBuShjM6JhQ9fLN7hBMmU3WZLk8H",
  "key32": "5kG4vG2v7JQEuFTvMDGSGU5kyMGgSqjDF64PG8a8nSBHrSDjeLwj3GBvaqrwxC6qfour96CGqaHjYZgdegteK3kN",
  "key33": "5pZN3EsjaWRj2hAfGFfvtXatzvQuiqoczWQxTUtjWT6eUQFDNUk3LxHXCyitAEfVoiHpkznkYk9wN9MH37C9XKgB",
  "key34": "429tC4yDSFKmjguYCqYHt8tAP1Da7GRJLe5xmdMU8ohF2z47MeQQRwhDmCbYcYrs7kZtEGMj4K7UVhc43zu9x28j",
  "key35": "DziGpLVaC8NSkhjBc7xg2CG5CB5YBFhNEAMKx6WXWGTZDppmR6eLYEuAJT1EXzfsax8RTCSifdXkECa5oS5Haa8",
  "key36": "3FWuuKxKuhiUCXwVfRarSkc4FeY2vfwEg47p8ph9LnKiMSNAdMgJUmAKJsqu2Rz7jZmJ5bkoMCVWdYHiCe2UTMid",
  "key37": "2LYbGGdxG8x7tsp4F4i5z3X1AG3MVDNynYgfkDLePNv2KZui6nUJs82Mqfmivn94GcGW2LUNBW6J5S9UzeL5H5EN",
  "key38": "5oBdB8Wr6es5VVN35DDjktLLytwwytNEB3ohMjGjMnpL9aeujsV8JxNERzyADwYgAs2zZFj9VjWSUvi9xYYgmyvM",
  "key39": "22hQWBSJCg4jzerX6fSSfwfrGEfjydWdw18n2bui1U7HYkPwhz46D3C9qXgEgAWijP6HJ99QGMPaSCLNAaV9aWR6",
  "key40": "5A2eafsHk95zLLMVzmnJttF1jAiu1Jew4dbcbNAKsaEc8dY3rgYVrcaHkWAqZCZYAjRMi7XFwz4HfHfz87F6ee7U"
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
