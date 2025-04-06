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
    "4zmwoQ1vmbAm8JYohg933bvifijcJ1UtgqWtTz3ZakKxgdM4FjUyWKwwMZu1QVLHwDvvJKAWzFeJGWxMcsbHjhgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UxwuFfxwRD5xkDxuBBjdrFtv8rm767u6G4x8NQ4FWdW7fyispTyNSd55JN6NuzQtwue7sj6WJPfR9XUxasSqGWx",
  "key1": "2aCnSq4Pn2DU1oouaDR858ZhtXr1XgW9kgeTLuWUBEtTfw513ZtqyQuaFKpSMkkxe6z3RQEDXtGVq64Fj6TAvUTy",
  "key2": "21SztVT8fgTmvmnFJZM9vNefxMDGELsTeNJbtj98fiCqjwQfRirACBKQaG7LfjdnQNpLe5WUWpHC1K3JdJgkrfgq",
  "key3": "2CaCjTrKXMCEvR151hTnfuRLCNqHrzq7Lc7RJ3LgLYeYrUfunFKsxiXwBJzbuSxbjnctZwihf6UsRPjFmCBAgBf4",
  "key4": "3GczdZNKkCygqVBM5k3bo2vKEohRHz8fKvPP5J9Q2VrQQDfMVfgkxmoddhibT88WMA74YgxnYcEoew5Hhs73Wuj4",
  "key5": "5B1t5zu6Z1v7y837NGCmD4utxurom93wvQDA25t9eoeMfFEDhvVw2cSYaH5hT4bS852GRbKaiFmELe7EEb8HYnUY",
  "key6": "5FRb7s9HUM5cGjCvRkuANEYXp7tSPAH1HZaU72YYEtQYJSmrLrFTxvzjD5dT8Lvm26AihBtokrnznLqBmZm5zPuU",
  "key7": "3EZkDVmX6XKrecxu3DKQTf5fiNUZm8BEA4azcPhe4CH5MpzRFAkxcLKNCkyUHQxPoKMdN8YfsMny67EMXm3e9AEQ",
  "key8": "2eeFxvJhGcFzR5PGwtTKJpPuB6Qfs8dcDx7BFxZ1tbh5zr3MNZo1BMMZkUbHxpy2gp4H2WoENenZzYuBmFtzjvjp",
  "key9": "VeJbBA6J51zg9NbEMJTvAqhQmkddVujVeTCb8eELy9DDb1DQyrwRi2YkfDMKdvW2itnGjSy7HZNBVu2M5NUH48o",
  "key10": "48GDEjFanEUFqMnNXmXrRLq2J3urcFwKqviDgtMCrbcEFZBQXuq7XQNEtoJf851kqGwbAiD12UeW3TDECy25zy9z",
  "key11": "5SUgmhducMBzQwG8YiEwB1M5gGCMK8b463DqTtMtzaTMDAzgUUSKbVYoRzhMFVQ3fu7TmQZbBFSN3GVtdgtyC3cG",
  "key12": "25znzc4aE6Vi95YSM2Ksxn7CrZvqVHegfw8PJmpvTD8VVN7jjrCjCbJso1krMjyydRNfLJyDoxwk2dBEUPTousLC",
  "key13": "22EpxULrsh12BNaJc5r5addUvfsggWnAfBBAnws4zuFsVKGDpy2sNebuLmKGt4xUv8y4kg2PeKGYtTtJ9Zd4C7Hu",
  "key14": "Fxd8y8G3nyLBji1aXTa54nc4GdckJ9ZiYGbos1DKHd2jAK4mdD3v4Ld6omVGQwyf19Sxcb9XjKXbyB3UyJdQdGu",
  "key15": "MwwuQAYj2EsQGYhp6WUnMvhp6oQPXaNcGMuCDCFFnMkdFuvz8qgKv5uBo3HxjVKzNw66gWbJhUJZeNac5QK62c5",
  "key16": "3NDeCBQ7J4eDXzVaBRx6zPaAV7VN3BKAnxk1U5hsrntMXDDAAHzqLE1guqph71LJ7J9yv9qYfbTcripN2yidoghJ",
  "key17": "gtPn43Xx1Fs9LGR4DKGkLNT4tdBNt8oCrkVF6Cede4w8x2U2M4LBJnXcwed6MkVJLEPRuGLx1KgdYc4FbeVsfEX",
  "key18": "4jMFEDDpT3oNN22HHHchXoXGRMJVMG8rUpZ3Xe3TxY2tA4KxTdBfTGhBCAVzUZytg1yhcV7ahK7yrXymCXs8aC2m",
  "key19": "3hL7KQf4HeqZ3818VjMLZJKQWwaHZuxsgDvu9CUoQFYuvoD2dAxTEa7yiLnrMwBqSCzEabWK4NAZDMPFDCpZUYH2",
  "key20": "wvxVNHtfqMUNQqowA5r2MA8vhybPw4x5jzvCyXiq5w88zsmwdy5AyVtuCkWmt3F6DwMJdUv9xZDze8Tv2t57Bse",
  "key21": "4H1Pvknyvq5SECBM3mRVCXYfoS7MvPwCimZxYxRSnVh18k4kGwYn1K7hQnJ9PwLvM1ucMgHhnXEHKTvi4HB9isof",
  "key22": "5zWzK2zVjxZgKLwaV5Empo4gVytKjneFjZHYRPDJo69xyDLrzvzeo4uLge2DBKGXECY33hrjzZGjXScrouPdfroe",
  "key23": "5zbSzM71xZoRmPsq7vq1YDvzYbFECmhV1Qgz1a4s1aTPrhBYDqxRBpsCLr4hJfNdf4EZj1v3RL6gTMpXUMaCVKAf",
  "key24": "5uEpuEhuhx8DJ4nfzpbu7Vo27EqDKrJdcXhZ75NQyYdTvakSeCe3kKQGNjd2MSer4erUSP6raWi5nA4MxzmwS9ZR",
  "key25": "u6B7ZBGnmwsRBPUJPjuVXzpeYkJXEEqAfdaxVQooeirH3ocVb9LLLGYfZ4jku1vnNPFiZmut6Mhe5fZyFapRj1N",
  "key26": "4ctr2NwivwhaXGJSJBe2T8SK9P2ewb3gX9PNHFAvwTm9FGdwir5Z1MnWZerWx2t5g1gfaUt1LviJMsjx5GCqcQFM",
  "key27": "2LqMoA53fWfHMYdW4AAmbpmmoCiu7BtpKsmHSxUxgPzCd9LC3gxuTrPm1i6qoTHWX2asdVi2URkT9w9rkaNdgHhx",
  "key28": "W6Njtv5rppA2NZJJnHvKPVHpcyqQo1df7gZfwF4az2NKpXy8SSn4uFo8ZvbPx35FhcDEbrCDsZFg8rRTKhVWMoC",
  "key29": "3j7kWjPTKarYP65aH5sqm6okUwNpF2ttnujCVHL1DvQfYvH1Y9M1biDpCMn3K2HeAiLBxfj7MPgp3FGZquawg1mH",
  "key30": "3VyWe6L8hqDhMbwLrAbe5jy3yERgfCxkQHK81mEoxcu6Xf8FkvxaEhRo74PzRrYy84iSWMoSYPaQZi4QYPFu5gER",
  "key31": "3FBG2RKRizxXWSczBChQJCovooTHDQsg7aeGNz6ZKLqhceTqN4mk5T47aB3dJNzFfTjmqQZRwdHnQqtnWeUxRBjy",
  "key32": "ALGaw1Q6hY4NP2dCpTFT3VyBCFBNMKy24GqA4r9zaPc2uztmmTJGcJj37GrL5jw1J4qUaGH9n9PjsD2Gp2MQwTR",
  "key33": "J8bmNd2kR2jFnD99XcuFcbjUeDGjhoeaEMpCH9o6GTy8mAok9wS2FXF17Vfwz1XTAHyRzJXE9dh7HCLVNY5hD7o",
  "key34": "45j26VLYBVA97eQePv1rk6FervcYTacW2nJEhPHj3jKUjahevviDRwyVnhNDQDcPh9DVz6XynNHCWyVG13y9jVBu",
  "key35": "398ZbE8C8smpQoKNq8zEynjKWoxqGG1Psqe6th49mPoBQjnXBJAKR5qDA639VedVzscJyNfWXarh8WQmzSYE4EdQ",
  "key36": "3EcWsJho1u513ncwhWMDskL8ujZ6xMqP68Z9bWE3YYgm2b5tCxD2kvuzg5puWzQGcwHtSc9We9WaWYZmzSARUzuJ",
  "key37": "3JqWiuNhTd2mXa8zcRYXK7Dv7JYmkPLNTNsb5XZvmsNc7yhtUCzsHb5asfJ8vXCkqqNwHwTYw8WkTaLGHnUCMh4a",
  "key38": "2pCKSpxeFjmyubEffa9pDLpwRKT8H9QmqouHa2sqKv314iGv1CnwMvB9aJXdkdLbMvdU3n6wJuTZh2VgziVG2EeC",
  "key39": "36TGAWZeQt4gWnciNeHovFovDXg5qhsfxxikefgWEeZ9bqN2Fwm3BaJGom8zQBDeK5ZbW6hwfCiukKSju6pwNse4",
  "key40": "3WRer1Kk8zwsWigYiLZxhwyd72LznxzgMf9cSnVAwZCCdrhWembWCycX37KUH8sGpA4prUraecupqHUXyvRSSNeZ",
  "key41": "4TrDSTQrACV6NCozHjrSGm44fi94BsCV6ADZrMUbUc4efDhvM3kJXHczwoTjD9WJAryZe3d2wxM5nyrxvBiehgS",
  "key42": "41WdXvSE72Zpi7bsepmh2pVcBy7uPm5PFh1QiXLUivoCFRwPf7Dy8jtQyW5CZxWt28r9Pp6E9tKCNyeTbsLnA3k8",
  "key43": "LKoMpB4585ctfXNoc5bg2ZrNYsXFHXKjCNRDBbSupMevzpHWpRYUEaWvgTW5ZZDgLkntjnQw2uD1LtfeXVXe9ds",
  "key44": "5B7P6N1NrAyRJdEAr3Dz9vzwPiJAYR7qz4Ne4GhZNXMevJJRvaWSC25SzQzesHWrACrZbq2HVTVeUbd2GrhZzWM6",
  "key45": "Sms7urdvgtoRwEh9T49Aft9e8cqj5ynATym2p6nZNCGfgMjtkKY4AV5VHLbj3AbxZ38PAic66r6XNCqMx3NcuoN"
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
