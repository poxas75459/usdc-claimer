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
    "3Wo9bUGmtS8vWE9yfggDvh68d5RJQHx1Ek1ffuwX6HyTpHQJFsiRiG1rGKSyqrbKGRv1aigXW77ELWY57z6onTMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oN4ZQcTRnvMQfE8dizzby3zQTxpodsPNcVu4ja35TGwi3BRbfmmtECny5hRZTiKhbSyjdVFumyrgdwTC3W21EQL",
  "key1": "VY9Y64u3M1C1MQuT5Yvj1FLRy4ZFk612JKL7zfC7Uvydz1GhpHhV4awmAg6YVaswKKXM5trUDBjmniBDjcByNUM",
  "key2": "3tkwtRy6REwrEDd6XuLDSwxef9tUay49ABpQ1QR5KX5BpYxUdPdLodhhnLh1xfmgmioCt86u5Yc1ir78jVYJCNoC",
  "key3": "5rKA4wHNuHhUXqbPfx9yoH74vADHDLDstHHhS5zSH855sL8acVqgzpZQKUhvJrXC1sWXMVBCZvN9DkC3vo84wgKF",
  "key4": "3CcWYFtuJ2eU9Hep9jQguq2m61EDuPTWHZnTaHbZoLK6GUNyXuPovHQLyrsLp3kUFJMdKCbFGHmbFBA9f1ihRTjT",
  "key5": "2DaH9Ki8aD2QBodkQudEKaFViGvcA24G9GhCjbVXEs9c2MQAxkVsQ3tqe4W5shH4YSf48WM48tRjzLgDv8zqVaCw",
  "key6": "2aLxCPPAkartBYFH4uYax5nzTFm2G25TVKutra9e1Nq8rRTRfkNJWkeg9RtTAgw15uPTRug6EFZd2MM43V3UqdYd",
  "key7": "3k5uyPU7TN61XGVuAN8u3Xcf6NAZbBPKEVBsu9CVGi4qW6f7RcPAg56nBQTTFaCjGM9TBYDvMq9jRekJZ52ngfV4",
  "key8": "2wDEA3ot9aWAqqBnvLBeJYHAAtMSrVnyzAe1Pd9sxpNfU1Viwg9S6UMgFhAhiKbYd8gTE1Hv2DkyJBW7DCwUVhbG",
  "key9": "tiV6eygYGbbRRy2qS4Xz7yx9cBJqGF98gNTaEJ1GdwpebYTfuaWHsamkY6uk7RH6sCUjhAJtDNW5RfvDKAvhSMo",
  "key10": "5ecY9G5wRmawJLByQrnUJmv2mEWMfi1DpMnfLzh74y6Atr8jLKvCBkNMW36Z86wtj7y5nUULTjSkfm97aMUWKfK2",
  "key11": "4yZGy5k7Xk7L5S1xoFg1EKREdn4YJdA1Wc1z5o5vSTJCVn9mtATaNThf7woun24Qv1soPCCoN5drRsT8GY5iEzUe",
  "key12": "4XDe8mSATUnfggAdBkLnut7eZh3onqNBapBX2qhSwFf4fjAGWumaFNSJw7gMBXmBDK7rsdnRfYPjcQ7G4oaWTKtS",
  "key13": "251aTWXRVzmguHb1U9prMSV9nsqH4a1mcthSYTK3KYDFUkhW2Aj9AZ4zrUXgYmz1KMQ7qTTmbBJR54S5mus7Lvm1",
  "key14": "4QRwzARnXhHZ1QmEnF64heBfqFpdBvm66Xd3BeT7EKyy8hs55RsmP7jRs3UPdcrwop3zqD3Y6yV9i7vi3CXxSe1",
  "key15": "3VoQnonFmKGmQfYrj5YJW5HQtqJmpEFgMj93Bq7byP3518iAb7iAQuiThbU11Q9rFceTPWJJLVoZL2AtSJASd9DV",
  "key16": "4A5YGTqWEGYPcnxipKcxCuJnrLuue733zvic3167S5F4zGJDWpdBu9uLXE43qKwNpGbLxVobycUpEpH6MV6Mp4K3",
  "key17": "65Cs7Z4vjaiT99apf3qXon9f2Fv5opZ4c2EMBLf3Aysm53x2cVEhcwa4Fu2stdy8FiBrFtFdUmE2Ktr6G6VaFFuP",
  "key18": "3PZpxLcQyLEoun4tYpLGBAEDbPB5orCHn2NgShwvjiVDz72q1txXVvuDafLZ92JQeN2RjgpjfxsaMTByhPm7bfKu",
  "key19": "31BDsonFdWzcmpJjKh1LwUzjzW66dHrFXAssBMvy8pNvS1sVWdZV5DVtZS43Z4JYrCKX2X8PhRQLSwoPG9RAwu3a",
  "key20": "3QxhdnjVyKuE2LZwrXpJuNPhQbh4pogirnunH9AuFuTZtSppbU7YfXzYxFvZHvM4Apt1RE4QEgWZfbtKA3tAKeJU",
  "key21": "rqvKsAKPWwPfoJE8adgJusciARVwM3FvFXPzFpN8HZAz7ENj41EgUuuU4FEUgDQ5vEdmCiTMqdWW49hTkhh8RDv",
  "key22": "2BLaGXQCDnTt1vNBZnviybWCKVp8FJ1AcRkFPmdpVKCdr2wm7BykXGgXfjHgBd8Ed12hRAJueirW9mCFHb7zcunm",
  "key23": "3SRzjeRSYhhhictDb6GkX7S8RbyyiR3sxVkDXPAWTyMnp8M6oMZnMihanuQKWUkhuVDkMJhNn7qaEq25md4n7waV",
  "key24": "4ZqT1vibWu19AmgCenC6CNgnLJdvdSC4rVfmzDyTFSrjsBmhhizgtY4N9MQ6gUFPReAvNWG3LhqhQnMTge29mXbJ",
  "key25": "HSnLBVKAJYddV7CsfB9JdXVdULNC6rLGr9sj6wDASQ63S81BwdjdFGBPvptU5CbMS93f11XhBn4nhHzZE9MEhBm",
  "key26": "2XSZD2gPYuC9ohFsvSWquXA3YrJmBJMyEMqCHfH2vY7X7fefwSnGXtq69qMruEANHE8vr8gog2LLYPkDjHsQd6uN",
  "key27": "4Ezqx2HzBmm9AJUZ6MP2XKkecpCqzqvj4P4xWfeJt8fjcZkVmi6EzM9n9cG1RGMphZW7WkiV9vfN9oJfhph9nTSR",
  "key28": "CF3d8LyGD3pePCVRdiiHShtn9eATtQLqZSe2MtakXAWE1m1NPHsW7oHfnPtqx73mcoCga3FhcvM57FA6gi6GHTh",
  "key29": "3KCjhBn4CiAUp4c39syZmoucmRJCCji9hRWSMvWuGN6FPTLBC8VnigAMSZKLpdi2oqaHL5owgTTjxNxgRz8QLNmf",
  "key30": "21GcEUiAqmTAD4CPg8UXPXC6KZ9PJSQCvmFmWKKE5gUVV66npZdbujSNvJahXSWn9DCbn5PGoeqsYFje9oebHHVP",
  "key31": "28rVpnqvvszJJwq2cigxXXakpLiqfxCBRBgyiBHfd33gakmV5MWyXocvXrjharBq84nDyokZG8r5W1XWrFtbJd13",
  "key32": "eY99n4shEg5kWaAkoJbfQYesTZ5fLPytRaJpJBjFsyRosUEVCyq9hqPWCBtwv46dVpPGbZFR9urgZnRb7m3Tsdt",
  "key33": "23Nie8v1aRXbpPDMMXsJ4NAPVAKwBqAd8MHaTHMyZeerQv4wofQTTnXYmBZodYJnj67YEJik3YMzenSY3Kk6Lzyi",
  "key34": "4PANxuggCJu5SURQnDuEvDxu9Grr4KJSmbndzjzA3PhFLLMdTAqRZtQ462qnW4GawLtP6yskEYCAvCZhym73ob31",
  "key35": "Le3hHQxwy1Z5AFc64JDzty67iWtGH3sZKuSSgFoYopF9WwMxyodFNcWPqrYYAZ3FTeFcS6kwsEx3So35ymjGd7W",
  "key36": "3qzjrorP4CuvGw4cDuDzL9BGmo8AEa9jVewdLhnnX7GKvkrvdrNYLPoet31yGmGjqLdK7J1E3ADewFMafMgXuwHA",
  "key37": "oATJj6TXdZ6zpU4zdKS9ARtUSnE4Ms5ZZQ45tz9vtxZtpZkhJzSexc2W4puTwf6tmtC1TBNgnFsbbhSnJHZJ7KF",
  "key38": "64FSkoekyCi584bk5QzQN4bezgiGKnnxXmYaXYm8kRAke9TvBYc6EkKGsjSNYPsvdP3vY5kKH8V4Bz4A9M4ibazs"
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
