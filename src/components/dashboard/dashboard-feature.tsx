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
    "37pQPuL5K555Tercz2JktuN9ciCwvdxx3RE9Guu9gDjBtZj4HyP8Kf6Qj9oz74rVb6RYP18ShV4ny5jF5J4cYhky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51LsQ3saSWGcqY1PMuCPsEUyCuRnRWZuhkxBTQ2kznrQTtVPSy7WNqLjpLs6hkoWFNEGfGQFC3TWhP3H5Ebii1Nc",
  "key1": "EJj9Ki3vtQurrvgYvNA1GCokCuiPy4E94EBvy1Pq6nCYR7vgqS6ddYZ2qUTkBrBBqHJdYYd3L5eahyE5kGzwDiW",
  "key2": "A8iGEUF9anmjDoSmXx5ZSJ5S81QJaaiTavMRDoYijdzoCRkMgi613kkDNYx61zpzfyCZyKcWMhCH8Cy2maZD6sk",
  "key3": "5vp97WKoSRyM4HqohnxDUqFpBYjg9QsTzqyfkHeh3mqs9mhUKnqJ58YV4ewPN14PEBCTFL6g5HT2o7YzAfDizc3z",
  "key4": "3FvH7BTn7pJwtdSwJ4pZjQWB2BhiqfhB2ESDCAGY5VwGsjqxQxEfo7CPi1qRGnN76e9ScCVjM8tjZf86Bd3wt24V",
  "key5": "5D5HgSyKHtrne3Z5PXb8BHLGJdjWyjo64DLSseWwXN2hUL4vMcLA9MgbZwbshRA8aK4NxRp7Qs15FQNNJByDvQJZ",
  "key6": "22KzdogcTF2MeHCT6vS3msoxgebguEMUpuHfMQdV8pmTzv9fZ99Yw6pJHG6swr214LfCzCFaPSwJfiqNKYXugoj6",
  "key7": "5FgLpHPNakvrUh67Yr8T9fW2A9KirF22p6NZ1NCPxnywvrxLcQKZJkvWx5ww6tECP3m71LacvEUPpVeDEQzU4Dcu",
  "key8": "4MNXkNTS7zZUyqaWCUE1VDRfyn2VAndK14KRjP9Q52vNNdSbDBi4HMpbXWuv7MrR4ZvagHjKbqP4aGnVYy1vHkhV",
  "key9": "2MAmmvAfmPwuG3vakuE3wrSzx9K7XYDZDRcZVe2bxxQGn2gKJXr2cqcy4xqPptLSJkktsRGv54hfHUtgPhSBPLjj",
  "key10": "2g4xxywHNmfShnvccZi488NafrcYxVr1N3KiF9Ymo6ekzQtr9v2tTYAZ2sZnEhuPG4wvowXdVrMoMLEfk9VDj1gT",
  "key11": "4yefwDYDDriUaktmkfQbEirq4ru72U91K9uHLfbt9aqkPmjV8ZDZ5MVfPmZbrUjrXwVLUoeMpdPvyVDV6zyJSUNB",
  "key12": "4J2DRWUEnYsEq25U7Y3etkf6qbpmY64tzpL6Bz8rWzSE7RLq6KQBhA9X9oo7B1bU6fAfj1CiaZvCkSJoFRfo7iMh",
  "key13": "5G2xZtD7yQUjqboBupXWrLtCK66DMkPGKQszUTz7EXeNJrdEkQx5ohfkBYkbQnadAJgmSVbrgcWXVsBkGwAgad6W",
  "key14": "53LEfT3x56d6qF6GBoqSe3hXrUy2p7cEi1s35DixcohmPCUHLfE1EiwyZ5aHgDm8BhhAcPBz858ceux3pbpuuyNW",
  "key15": "53BaK4F4T9oaVEnxPWMcW3RmwVkW1oCHMZ9TD6kgnXoFEc2pm3hzvLuKWzfxSeUHaj6cGdx4RzC84Gnw36GmC39z",
  "key16": "4KUrixkBdW6xKyrC9Aun5wiEoxCrTEyBvJhrwKV75No7Tq87Nwcx77TLkSBXhL3Vfh99wGpRTKkAuQ1T8aj5oZPV",
  "key17": "4Z5A89RCdwr68TP3DYZMXUbGjf6XqXbShf5isrZzKBAqEwwUhKUAgMWFtL7Z3fdzYxoEQdG5Dsr9jj4yHVVQMgkB",
  "key18": "5kpv4agD7LNRXsG1MVJoWZGnKimYHAM6HURSZUGLZ1GBv4HVhPh3484WNdkE3VrYCeuBCGTNisCCjPx92ddnsdBo",
  "key19": "3adc58eGbBd2WE4XK4YBNgetBB3D7JC8qCC6zS5Ykgyv7RoxnqhsNtnCQK4C2BWHHP9EvHQzECAAkk3Zoq6W6SF7",
  "key20": "2wFEPN9qzwCALbXX6MzRiTeNHFa811zbwApHcPJv4XFsULsdQaXhqQycBzwYrf1cjKPY5SwRr7WZiVpACCG15kaj",
  "key21": "5xyMPWLbFSrQQqg6DLrfmbnUK2XAJsoK5fyNV7K5KpnQopnrzScqZTfKRBacRVq3im4wTvCuQHRrhJppjtwJDhd8",
  "key22": "318PBYHJpPAugBNTTAkCkt4Sf59cov7Y1aYfRz3iQpGfSgsSKgib3eS65SQE7T1gj7wU4HJkiGHyad1EmwaMqLdH",
  "key23": "2pcYgG2eadGDj9YyEa5JsvY5qTLQWMfpZxft2BQUiFSwi1bw7AjdXHPdqNg3ZLqEjSCfaViezHoFz6fgBT3UYU9c",
  "key24": "5xe2u5tR49oxuTcMyysaJxpqsyUMwUWXmwb3F6SGKXKv6dhPHp9hPgvj6cJ7UkYvoZy1mFsK1LbcZZ6E7tvqEhLh",
  "key25": "4w26bPYAis4YqbwV9KoZzEBktMZpUhPcE3uBMMiW39CC4w49dkD3A7P9f6ChPfojdQkP9bQdeTLiP7cZqGNdNwBh",
  "key26": "39GKR6GWnuSRLXXA4kSNaeQqg1yMvCy1dTNtqzTuSH4kiM4Yo3og2hUjAuC3fB6pAH5nzcWBVkQVpEko64gLXKZX",
  "key27": "4onexdc9deqPjCkfycNDMaeCao3uVfm34pDfQzTuc7ymUxNmRABsErhMjRAfKoEoUHEz58E3f3iTaGoZjGHGQMkW",
  "key28": "5GEwuag6wnk2BgByYuTovawR5zMR6uypP1hX9CThNVWheZMscs7UB2oDjAL72acJ9i3XqhSSAGrAKmYQ6PnUnwFa",
  "key29": "2wxk73wTE58BFtnYpx3Coa11qpxhKnoYAubnbBD2ZsW9ncRdCeeqBkgzKPnc7AKeFB5FeA2Y84fmCuHm964VkUdK",
  "key30": "52vSPv5Rab2V7MiybSgwr68hX95Nkevbu3HxKcTGtXAfHeEujTBmchUaNLNbsVctAnq7W8ZgV4WB9CLSDBC2db1D",
  "key31": "5nDQLrfcks2gb32T27bi2vhK5h4Bw9UjiWAE97dSkarZAytSZa6zX8aAru2wwzJphxNPrhrVR983zZq5HrQXrpZq",
  "key32": "GyQqWBbzwuJpKYi3BD6iPq1tsYWAgor9GiE5aT8KamuYjsU1Ytm6DSRSZ9QTTexiGABnAb4U1TNvVA29XYRzeQz",
  "key33": "4QuohSNgghKuiwVPht1xmL3PwNpm5C98rPh6qx7VG2ELmD9cEmcuNCH4ipPoKAKUrNHBf5jjzHd8yn8HcGSd3dXo",
  "key34": "3FTqEoMzcYSkFLtYS4D6ivodU2Jwp5a34p1HozsR4CxN8onFSQcWosxgXS2sMEjnPZCkHuKw5V4CiEjMrEr9Y93",
  "key35": "L4qUiMXB8BvCLxVajjyxicz2veipZxbAyiWUPC59c1YDh6CCELydhDsKnFhBfpmLmjados3Y1Mf9YPqxRgvJ6r9",
  "key36": "3nR1dgXHvSR8us1VAXo21YQuP1gQy9f2sqGudiJt9Uyi1P7sC3mBV1fR2YKhiF3V4pWdc4mLfrAQsSfNG5TmN3jb",
  "key37": "v4Bg3cAKC7jsmKUB4SAnfFESE8AtSTgWfeGzCXR26FB5iQ6iGWfvbVV5y3UgXMF28iSEiBf5icuV12RzXW6ZeXM",
  "key38": "61XxmvcDZbj8VE2iHrzPfJLHxc7Ry62ewTKN9HwMCYqBVoTEfzgYwmQtcHnBitvw9kFynfQjehtJoApSoq3pZSuc",
  "key39": "YLBWxVhTvyrQuWNaKFhtrk4RtUiJQ97j6qQcnf8XKWowXWsSShVyrdFzt1i9R1t8AUue91r7zfcya2mgUdzxc13",
  "key40": "46RKLqyXADFjS2KKnDoqSxtKxVvAHi9WjeRaRWhC6Wcd69phb37epjV6aq4dLrfdVamdeCSJa8FP2f3aqWJUBcYZ",
  "key41": "4WW5TcRM9bjErd2vnWY3uS3eG3fsoCjbUMWa5LSmrCWRSZ7UhkyE3rJ66P4ZpJMoyF8i5RCnetYtBgfXuGGyrmGi"
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
