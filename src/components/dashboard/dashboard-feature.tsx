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
    "671jeDknxzTEM35xjNNFG1FX5vpXUuXwjmCLemeezeNbHiiEUHZkL6KVyoBXJ2LXeKqMTLozZVxkiS3LrMzitvrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3umYy4Wi9H8xAiBhwCGS9DtFArEMkYXksWXcRAGE6k2r2gYGmhk9oR4gXVHhzhbueiwFpt8qgCMbiTVAhmqVfACm",
  "key1": "KqY1RbNwcM6pFpzqRxkWUbNMeNy8kgs1pM2smdjwHEUhA5eUuPy3SymRfH5epNu99TJLSLGPTyqgUMhJwKTRihm",
  "key2": "aNZ6jk5KcVhFWPqvyiRyHoiwaDTksJBERehWRNeg9QKGTPPnDDipB6ZEwToz6c6DZCvgPhY1zgD9TRKBXg6DA24",
  "key3": "3fy7U6gAVtFAnTH3955rybHsAXtUVpC5ejk4Yk9Qqh6nRnUEo2SMcZdp9Hc5DACyJWpYcnNXamg57nHnYfY8GmxE",
  "key4": "4BajrEzPHQWm6KF7ExzcjRQczqDzXzxD1mttykbGvpLmFdaibADtDMyaf8hffUcr3BH6asajZZQMzqEMEu8obNBn",
  "key5": "5K7cYTVBpHuhkYvumKTZ96A6XCi74ce2TH8R2TrLc9kM592KFsn5Xs5saGm7Rcu8VnDzkRBS1pBqhyrJBqUaXf9q",
  "key6": "5cnnVw5Wgrzj3hr1i91w2jXak99JoVG5tfcoUVF97H12uhWi7ePuycRSEcS56wHjhMaQvwZ8phZ1q2CYRVHfUM2F",
  "key7": "5JqDq2AXgQqrJXDxt24yjfuNaHF92JUgn3EGpq9PjbDkgZ8XEw6CuBTVTWoP4GxYC9LiP5M4bweQ33RJi7kkz5SA",
  "key8": "Fm976ZQxDKpyg5DviyngT23EHFUYfXrtnR8fbk6ZXtNrkWF6s6Mrc4YismhS1CsNGwfWta1Goixecoj4DX24QQb",
  "key9": "2C5aBAAJYvPfjeKLgoq1EwGo3iR6V7WkhcyS5EUAw8N9sXAFfwawvxKtJ797B5ePSP7UPGcrdedt9yntcz3sgYQN",
  "key10": "3Gx3PRCMVLmHy2qDzEMiZS1iSc99maHSUCe6keZYCx5eMNjZXAJLDx9MNrQVmCkpFezDQdXMfsd8mJmmeoPJcJVa",
  "key11": "4srgjMW5dpUE29oC8KhjruFccJKu5EtNMgKzsWK7xmNnkn1tMFaaSNvhoz75f1bAEWzH9ZYmwR4VKE2QDNZqjesV",
  "key12": "5gZgu9PBkMxeEUoVSKAjQ7Usp4FGZKFHcM8mKQ64aKcqbUMCE5f2rwp2JTTiQ7iFbMb29rezYCXcQyxrtqssMSMY",
  "key13": "3F6QsC9hKi4oBbhwba9u9KFmVE47sDros4XFX6nhwJvqoPTCjadZ9Jf8NWDyUxwBTkFZxTS2rFjqtGDPxRrNtxcv",
  "key14": "2CSxYo1sg7qSQHCYc9wWdPTiDaCgLt72PJd4g5xibd6SYz8TyvG3rDGGsukq9Fia2ePEwHXR5rVg5tmLu72UNn51",
  "key15": "23XujPPQvvwTXtxzoEBju5fP8prZZxLrW5MxcKuU9P6Chp4YEDLjet8R4qaKABrCiBLHu6raEXWXPHCXpxa17dYs",
  "key16": "3mtxc4iMDX462FZE3py5r2WN4EQwVFiNVCRn81uXWvfgA9vCfoujd2dFqxhbanKq9muQQsmoCnhQ2XBK9FZeBTyQ",
  "key17": "JPNonELPJRdtXpE85Hs8mgR37LNuwZWFTFNpMmnyLxtNsteUZTYzrA2cY3YWDyo1bQRYotE1rGZ8jtQfffPitbq",
  "key18": "25W8XgVj9xt9EYh6jGDApeZv7r6U5WShHJougchZTwRG8CzLXgeq7PgifoYcT429cof2NArzrAELLpUw8LzofDp4",
  "key19": "3CYRGmH4Rs5Q93LnoEkdGyv57F1j7Y3GAenG53SApduipiicZ9Nyrv2zRMHGpaLzjwxq6UsjWhcTKjPm1myGG4jM",
  "key20": "3QrErudVqywTTFZprrcYeCPhFAcF7fSpDyam9NTNFCfdbi37ywertRwSS4bfCYoEESYFkXGXQquGNTKeh4qXGDt2",
  "key21": "54hDfV4m8z5164etLcyKbryoAGYNRUqtFviWE9W5WgnZGrqyXPh71fspykt5dFkGPQttEKoAqPG3rcv4fq1fAtxN",
  "key22": "7wRMLtpWT4URBGLWDoWu6SGRAwAmmZXugsxoaHwx6pthQ4Tze6Ufoaf31ygRp3H8XoENbUmFMJLWLC4LJyv3bhM",
  "key23": "2Ky2QYxUMLLn688VMpuvHJCxmxzJ49J5gnBvbJT4acN7BtcvF8uZ6raaMvSvwwaipFMs4B4Qbyw9R8qPpF4N6yEt",
  "key24": "kCGd9kPGwNPPvLHz8bydBfASyHyXBGfd782Akmwc771e7j9xkwr4pybatcJPXD1rCZ9JkN8iQbaBgUfP48ksJJT",
  "key25": "NdhdAGVNYbcKyhY6o7FPn8zh1o7YkE5e4K248NFM9nq5zsvAMvyXWys4t9vQjbuQAh1rTFZnkGKKPsxneYSiVEw",
  "key26": "4fY6Ur7TgdPyTfcy91oz9R3MtygyEESKtuJP9cZYq7Yzxp4FQo3ktFv4EqsUwhAuwUMGzG7GdghMjB8fQw5FjgES",
  "key27": "ghUGMZYgnU9VCEUsfNozNq2WAJjqvCJSTKPoEYxi6goFjGWNVd4jTcLhp4UDx4F29pzYM6MDFyrjyF7AqELFQmk",
  "key28": "Ry1moBDEuarrHdcKgRRzTiVq2giQkYiXxk8smmQMydEv4jbcv6FXp1zAKmarGSX8DCtkr9j1YzxyH7PVmzbJwrm",
  "key29": "46SEB8ewunsZSSh5ASvauUH6i7ttQa6PjSE1hZjgBp4JXoesXNNKpLL15eM3gyDCMyQ1CWDCkeP3Q5XNggSjAV1k",
  "key30": "3341k13b8JmVWpd7Rxt1Lvovd2o7eymHEkLToeKqrubG2uwnXEFrZYhZPrTZY7Tnkgr7huCq6mZQdPD1URX31XBL",
  "key31": "5NabNSoCpspyKW18oZns52pMiksrb8Ngm2RhBHqG8FjMauJ9ggoxBbqZToQUZC1b9xqNvmQ8KE5WQhJfiAimRxuM",
  "key32": "5mCx5P4ctaXeFT8jU9c7httmixYuTq7SZqpT9WQfUBvNDpuUVfYzX56CHuM6i6JsTZtywmuc32NSdm1atwua3qWS",
  "key33": "5iNMz6g2buX6xB4xB96HeNKdXEBd8C4JRFNMoYCYaAPpP9iGHTm7ZKyZ9BySqTSxJsvKi8nbLmUhuuxVKABvg2tC"
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
