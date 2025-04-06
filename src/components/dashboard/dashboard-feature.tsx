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
    "AxvsmkpvdmdNB7RqLoTVgHLWrB2pK7BmnbXV7PgQccGBob3MJWJKMECDBf8PG5rDQDCRvh26kXvi1tG78uqBZn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z36iT4aXyy3RyLj5iunqSUHfhCt7MbMgLrT7HL2Xbf4wRfbKEGynMJNnwyDfurrLZKE7ucfqSghxkFWd4spJ39z",
  "key1": "3LedRoWRQsVEMtx6BJB4Tui2VDX7ccw611LyJRXVCvE3XQphdxEMcCN8VbVFnR3LYFqtVvHLT8AhTvfoTC7Ux8Th",
  "key2": "4JAzbX8fKFixP7KxRnkRX3qg7oGcoiVhkPbX3CpnCa2gezPEBzhJpFc7C3EwgoBAzXyF9Y7fPEsxywjk8XRxB4Jy",
  "key3": "2Rj2wtx7quAs5Sfi4BJCSy7E1hcgdUhsry7kKVhXSbC8Py5NPQXtyxwEp8aomnJasw21VdGsr2oGjLTu6aHuRKtk",
  "key4": "5YrYRpiCVtei4D9GeUJj9g3prSdYhqriA1po7NBSzZQEpoaEG8nxsQzfaNh6zVfjKJ8qLYVBa1yHDZvVfYuLrT7v",
  "key5": "2FMCTh9gf9vPAhZ2pvFr2xqtJneSqMdq34ftWwmi4tWKVd7Xrix7RrCdTCaFumTHCm4FqJcsLUCY6UPTUWg7sgJs",
  "key6": "39bFgFyey2HamQsSAW6dRcLCBxLKey6m2vaFrbfzok63Ysr9ZaM7ow6Wr6KVoWym3KYYWcpULNRwc4yMUbfHtf78",
  "key7": "5n7vLzKuQprfejqAEjRWqRkVsqQcsTwr4DsMjD3z7nsCn4JeqDH4xK2R36K5eiGJ7UE2mhnX2HVxadv8eeS8s4e7",
  "key8": "3tmfizLdQPWSyMPJmAc3aoX3hhhx1meMxYjKFXstEgNv5Khh254BxHczagWwTSisy7BYYAtbZCEutg7PZwrKemVC",
  "key9": "4eio47Jqjs9KB2bhSWdgbKZayyNCTv9Au5fbbHKJSto5GeGSy39vnQFEootspXdvLVR59DnFvFpp3tqux3nEugaw",
  "key10": "4gnRNWHqeGuNvsKy7PJsvoa3VXUTrf9gwCBaoyFhZ8wD9jCewWAMAiDCjauoYj6yhyT9ywEawTVsBT8W5n8aj5pT",
  "key11": "3A8dB8M82W4UJjEGcxaXx3WpEHjRz1zAGWXVqSq66vLfEguYZ2NrAp66bBskFwarwMxygT2g5p5BxnZVunD5ghz4",
  "key12": "yC94mYVRmAnbfXhYwGV4i7d5y39oG3wyqLHiZtKeen3nxfnM2MvP43P62bzLg2EH7CEGNR2mcyHzPmpyp474DTw",
  "key13": "4p5cjMHMzEjsdoxg5TtHVPxeWihq8vYwZfj4dK8WJDnbrMMSj2sZGYLwExijJNUwwPwoe6UwNVbtzs5UdzJHrwW7",
  "key14": "qCfPieWtEKg28crrUjd9vWx4CYqoRqWBVDawGzeaDrXQgUkoNShM8awBavnm25Xb1EU6AbqtGTJe1DbxYcTrEYJ",
  "key15": "4mc3UHbCqDBnMfKxJLhDkuwfkLzyPn45pAmz526JgNvYjAf7uc2VQCYSu3rBcrrvNPNajBPWqNTkdS4uMMxGspBp",
  "key16": "53cXVVunTEcGqJvs9KteckeBfJU5s5333yUjkuwSTZxPWDEjHj4KBiE6J41k6ckzLkyv18XbPazPsqghfbYexJmP",
  "key17": "25RPBobMKxoZyzy7zehssdrin1Fmx7GKQENyUuiGc7VB7oDyCikvxCMoBkQBPAcxezUiFGPasDZe9mrMRQ6bXjDs",
  "key18": "CiB33EC3UZp175D2GNGQ2HV3Xsi97u1iVPH9oSAMwWV4h6ddq9aaVCN9mUn6iY8SjFk5FZm3CDhEaUAQHXzBM8k",
  "key19": "3ZgoNU3qJyrWn3Qt42xvYfEPjyngy81AyZZ7jVyAMCKJaQ7itfXcJNmteX4qDZZiibrivUR2ptZQfevp9AJ4hb2W",
  "key20": "or6WtLp4R2xpYFy6d7tHMdWUexziaabGycmE2nnGZ1d8GQ7w2569gmEWsyDwMA9iaRTS93kjwPzJ8ALucCZpqJF",
  "key21": "3texMyLuYbPYWWdGj9YmRoeQnKwX4yBp8v2zHyvaoWGZ2ddRmECt1NyrYrtnvJtoHRrekvYpXcTCWg4KwNhgumaS",
  "key22": "4ReE3Fc6LZsMMuBQmcfvmet94eZLQnqCaAF89HA4hLpXQkQUfnN4Qu1nRthAY9xtVS6krQ8uZxqRRqCNnoKDXTua",
  "key23": "4hdqBxGNBXiEYFkt134upu15di38bYenhNXwv86daP576KU46g6KKafh7Wtmhc5tGK4sGZyhjgkTs8wSQhEj9pDx",
  "key24": "2q5saY6Nwu22bYu1ne6ExEX2UF4nSCKR9bGM7uhpt1KydmhJ1pJXy3EKrCp3Cfok2fDSWDzSspLijZpQqGv67Qgs",
  "key25": "4EBdevJpNHJ6h4opRJKfRetfjDaJHGMSENsjFDKhhFi6AShsZtfjsF3EyefSacxeksH1DimDuevikA7J8psV3j7p",
  "key26": "3ANHBAi8hSAgV4zRdXARLJFm3J1ZrjAdX24oKXEw6MtYKJWHUWMUKWT267bf4obyK14FopGAwfSkb5mG4TosqBtZ",
  "key27": "2pE5m2NcUmkEoRM1mamSq3MoeK4o27kiHFCSipoVk43rqtFuhgXhjtG6GfJPCpqtrvxiYZFC6U3eKLw3tBKx1KGF",
  "key28": "4aYsXUjupsheDSara5QTWrSdzC7tweVXnEpxjAKw2FZ7k1biAh316tqu3Cw7e8qCg2RYmj3fZFxxtapzd344NJh4",
  "key29": "5fVR3e3Mti34PqvtrvsTekRNMc7yAT3HqSDPgGinafT2NEgK8ZfwCSRmEa2HDdrkiTgmGfFBMkvMkYm4MPWPv1UE",
  "key30": "2c8zjxekvGbDGWmGnNEoKwC5Fzrdc6toLASnRAmkmcgVL6EfS2RZgWaQrwJF6nsegTMbGyBPYfRgfD7bYEdSHRqE",
  "key31": "Eg6Sp8XJs8yhLCV3snFXzkW9tc52pmWX4Cvvb4dZarRb6nizdgXaNKTpyXuxXjWAPMuT2pXVqWmndiDsrTJgamm",
  "key32": "24K7vFbsbXSoG78omPwehksLjabKX4JNPdbbvZ7J6ugTJz5o3v89bRNWvEg787TPz3VvjUz1GZjDXvNjQdLU6vmY",
  "key33": "5hzG16ikSmnE9iA86obiH2RSsxLcxLuxCYbbnk1B4Tavq8SbguHEdHkACcuazR8ydCzFAoNdFKFaNqeJBmTVnLJz",
  "key34": "3GWPSr1LwGqjHvF2G9LbXFZQdRgSoLbRUuBHtn1iwP9cJjS4ifvoM7Svxq5u2NiNwvQ8w1ZAnqM3FymtMgYLZt22",
  "key35": "4SasyphP4UjTmyX5BNxcU2eoqdmvtpwGPXEFHP22vAkb5DHhHqgHeCAUbHSdtHRyNGrhA4kHqkzrkLokStznew6W",
  "key36": "2Wx3XyhgiJ3MifXxyRoFeUJfaegdqQNrDjsWUs4vE6pde6g4VJmwrG9ebPokWWNsdqi6fr2Wx8GEKr9KxH7Z3Yfq",
  "key37": "5VM8n6LPaexToZb3ULwtmXHTqSEsRYtdGD9d76AxqLYFcsbdRtCcXjxALWt3FMQDBat1Fbbe8SCL9aUE5par6azD",
  "key38": "3rz4VYojcZVrJNNidvavKhyyZnwX2j384zrtRxX8MPTQk6qwaYN5z678GJsS5aNPLCuS8retxbHSjopTL3yx34v6",
  "key39": "5XTyafM7LZQiQYg1BKzNp4eszE2VfprzQ5PDXXTTMoV1UAxc4HVNkEBrxGj5R3WcbEGU7JzF3d5u1UnMwepwx8mA",
  "key40": "284S6ZFE24wpYunUM5t2zgB16JNjydqR1kEpwKsQyC2ZQ1kt91Tyhq8fVsifTznMmaHa3DZcTacCgTNqZFGibhoo",
  "key41": "5ydo9FRfGvfADaRsxAwzBe9hPMqZonyb3fAga3FUEjjyYdcAGf2YFAhnxxqwL51Eknj2QURKXghE1qM18M7zRrVs"
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
