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
    "r83gXzSeoHuh6cSQFGnBrvTZKritwSez2MqzbcNshfrobs9jCNy6oESF6y7cxvqHv9FEvdrZCG5zPh7ppo7LZ67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p9NZ1EjTdBpjBHawS5C1v4ATzTjeLXEgownbDFciZusp3CczehRycCSSxUeksCvdNBywfFEnarre9uFsP2h8ecP",
  "key1": "5fenhkb6jn7ovCGkEcnCJF3JXW796L4JFKNQ2XRhiscsVGcQ53i3bqx2f1g82dBjjpttzX3gjZKhbVdu4GJ9753",
  "key2": "3ANVFF5nH6ob6XxJoowjTVXow2BtiPA9T5wWHy9VWprkqsBNKbAa87tfrBGUu2VdVXje95wgdk9sAjX3oM8cNyHK",
  "key3": "24XfSpTZ1Ubj6g3gvB5QAkVt45dsspoGMf3mVbnz25ELF92LKegDPEtbzDawDV34tCjgkhhrhXa844URFbing2en",
  "key4": "5nhWLEy2SuRxpiFBYrQirL4KBSjtusJ77ECys2bzhgZxwdGgSGDURkEiQzQtPAoDvGKExc7BiJbKFFjB1XbgDsNL",
  "key5": "3fEanDrPpjUedgi5tnApgNYAhQCCJGtcz1BoXbHp9o65mNM9yLS99fwvLXEiv2CA7rKSHUNweXbkDvDsZG3PoTpj",
  "key6": "2FWzA1ZAyeyDsFf1vFS7eimsNYywVStku5cjVBqn9NRRG2GPEDC6YRU4n91chzCoSUnY4X1xy9Qw1x9Tuzv4cnxT",
  "key7": "4BinKy2nypCtoLhtuDZ8DaiTULoB2bfgh7QnefdDnk15qsgsGNie3q6rgzZeu1N5wZVw41BAkddM4v7QPfaV6cZ8",
  "key8": "2UEikKAi9jhHtDCJDPGc6Ad2GAw1h43Wq7L3JFsiy1QyNg1mvaPqLmjD1ijySSRULCk5f2CcqhAsQsGStJEM5nYa",
  "key9": "38gTa7qnxGE3euKMUvTdJLNmhox9L6MBK7N9QYkDfYhnKUsSgdmYUDggroqi32tm3dAjXWCfVack2YXqSDFnapGA",
  "key10": "5Nq2gfaUZQq2Pudf9DJZ4jxYALyGXovksYNMukJhsAMRgpYhnq6hY4oMTmenGHi5KBNBvzBHpc4rHuXfDyGEAqyb",
  "key11": "5Ne7j1zXtPQEW12de6mfbne3cbA2swv4mLs9dKerTY43FqvXpDPwR7GG65Zz86pUJTfNfBjbPmSsfZ1pxtULwYDg",
  "key12": "5wtvVNJqSJNUXtRAYbJjx6u7cN4XrEoUyoWkX9iaKGb4e5Cu1XfXhuFsTy1NBWqJu8sy8sbivZWXfG7R27aiPdj4",
  "key13": "2EcDRA5C49D9JMYweweAsPR6YqCHca9retzJhvdPYqL5bFnJZ2EDJRaky2VdRymVxnLhPkaDLgREAaAgoQy74xZE",
  "key14": "HccwppbZCryo1nowXMeoEZQxF9YKYcYJMZFnjHnhyUXzLPM65bCSPi2oWwu7C8X5eT3xrdSvKcoZQMGp7aC7QU8",
  "key15": "ELytV8Gx7TWb8zeBBecr8ASwEoMszMEjQ5KzcVnxhsEZUsgZh2ARLvZYTzJZT8DeBm39NTHqNKKnPbWALUTYyAj",
  "key16": "nm3KxLQExS5VQe4VK3LxBpoXm5iMwpEhLiRPNRzmdMJMJZo3n3Me7ph9ES8JArWgBWw9NkiR2DA3D2wqG8ZaFHq",
  "key17": "23rSnRUj5789hhSHAJLNgFs8mevDjBMm3E941pr9KgZspgfKN947VsYeJm8EpAjy4LcdYfufZVpS7iK5JZWa2CAf",
  "key18": "2rPojdESVR5uzniW9EziWdYyQDYU3d6thq74Wv1vMabnY47uMC1L2vDVChMrNNF6v4jYSapNQyuf1TncxMCHe7vG",
  "key19": "23UpdxRt8Awog1KeVJVsLGuc8jFWRkQnKXwfAd7QFmatiXFfqUDTVaGHNv64e3ZQM4F9h4tnYtos9c9VNJz3MWaC",
  "key20": "67pn9SPg1GVbobDUUPURLKML7iQqvg5yAK5Pbp1oaRPW4wkkhLEpTaxeaokrdzQVaggEDJFaEBHW41qZw2Djs6GH",
  "key21": "2QLV6eeeVtGHhLq91hSdEuYwJfbzSuBC7GESKVA8kvGKPebBaWExhcCe9zHsVoMoce3n3hUX8r8CqssRwjkpCLHj",
  "key22": "5275X4qah9KJ7Xru8Z1CsMMfc9SFkJbPPBSrCDks6rbDHvSn2r7gkfRLbuhhWHUtTUZ9TWVEpWuQSwGtm9PYgMe9",
  "key23": "44ooXaCz4sDBjPFJUP25bDULAeqQ1E4Agp1TDEeB13CaqZyqGwCTvtwHU9U7sStvc6vCXMZxdAq5sbAphbu2S5tP",
  "key24": "3V11c1PKL524BjSpd9EJor8Phd7cpWTNbSSgfg23oLq9gpBTgX3ezjXcskesYwwhP4mH4iuBKokX6KYwBrY8Ehzu",
  "key25": "3W3XAm63a6FtgKP1BjqKv62JihYQDbQX7E91xxwFfJrhE87k9iKULNCRzgejZK4B6kDcRQsGq6dhm6FcgWM1veYJ",
  "key26": "5EC8q8kpifwoCN8ww291aUVYWZfxeL3S399JGFarP8W5G24SnPnasnM3oJMLSfAF21dtspEPjkWJFuYsD9F1V71P",
  "key27": "3vRNHHcBWUxnWspzzPsaA63FoEXbnv15Z1yVh4pxR6BpvbbNfUTxHxfEXRU4nNh5tnqR9TKZ26BoBeboCDHAr8D2",
  "key28": "XA7e7bRo8xA8mcJBe7zyDz4vKe3o7rGRApEhiF76k8syw3x1uJDYJEKKzoXBtGgTS8cCMuEhZJVm6jHahuJ9xf4",
  "key29": "3FhLD5NYvx9HurF7aMkpnTGGPBaXBQvrMsdoxqSaZGDq2ttxdTb4wFSj9Hmk4uhbmYMCgvqmkVQiqdQ59JTmyTwP",
  "key30": "26uHyvwzQTkcbMkXERCuBdpv8voweRHqFt7kXCJtzi25B4MATJdSP57bpLz4VxQY92yWgEy2eJ5yH7QoNMWUCTH1",
  "key31": "66VDuAyPCQ6TRsXF9JCkfp3rNtMjctjrFE5JCLUrPjHfjAMCe4z7odsjhSEW8wMjNx1z1NVn5VMozaFafc4d5MJT",
  "key32": "cBJweY9vrvvVKRjdbGWXgNk7Pwsu1F8irNQhW5XzqjKEgCkfhAMK2ignmtBiLcia73Yoy32eCGZ6RyD1Zvpxwmo",
  "key33": "3C33JFbtSdw2v4rkBEtKMgQyer7xGNyFNjR4mCmos9FRdAQy6tJW71HRZRpt1fU6EoijL6cV4Xuu4Gig7HraTY9u",
  "key34": "3rtMmPbfgwf1pu9nJxR7hEALTQDhQvktTGtMk88roCJ7gyy1EW8zY5aghAXBkxYBhgkb3ReeGpcgUMDgAW3jxgDp",
  "key35": "cfupSB3U71UDui1ek9HTFAh1gzNbjrUY2sqtggwvGp28ZXV9qssKqvwnG3vu1H6Xr7CU83ShyPcXFYgSEYNhhNG",
  "key36": "5WkmKa2xaXGukdHyPivPkaXzwpEQr469NiMowXtJHkUckebLZFb8bhYRUSSKCBiUi7AaVxVdp17aa11v8cCwbpgx",
  "key37": "29PYWHi4iWoLCxEBjARba9C3VvKy4HhSPXXk5KyBVcHKE5FVAK7xxANQ62EAVUP2K5qD4t5eHyQURCx1cdED84hM",
  "key38": "2M4jxVh2fpyQ8UwArfzepBZb25xN3GBh6jXPTkH5GCuVttiuscQfj7GMMAbWACWgNEdnd1WextYHCEjF6KVVjdu7",
  "key39": "2mo3TVsHC8JT3QL5YZ3jUzJCB6KXK2ZUbdLyot7zBfn63ZemrmB96FMrnYvDuP6EAgs51TvZhtvsFe8ZBwwespbZ",
  "key40": "5msg7rTLdDUbKwZvCbGLAy4LSbE3TqT4WzV8gMq99LK7YMc4UAbkamPQhwKQRrQdMSBohWkGKVe7XCer49A13jdv",
  "key41": "4ufoQQVG7E44xv9vGNDrVMMqFNPeif8v5Gh9pj4b6asyh17MaCgNmpg5DhjMRdFXhgPKoDwxADWP1DqzG9szSqiC",
  "key42": "QeudiTvF7w9HpdE4SFyZzAKuvfqiJQ4U34yF7mxwDePZtNoiVaZSiJGcQDJLtHhkUk39Gg4vJN9zt7vdZiAGRPH",
  "key43": "2GJGYKLecASKxPoscFti26U5ppEBdXXDmU3ZzxywYME4PeogqkUyMHkoDsT2M9ejGKv32ydJpo4v4Jr6qodGtXkK",
  "key44": "3C48zUyL7M3h8ckyvEiMf3HYwpHSBbtB122Ykcy8CC1EkPxtsF4SqrRgZC6WzCdeUfdkJVhDnNG8LysdgZJVttWm",
  "key45": "2AchvCnZL2koEH2jkb7PAcCSx6TYPSyGivyex2YBuqHB57uZ76zoKk4GFYJAmYf3ee5Pr4Gsg1c4jYVR1bTnAjF2",
  "key46": "3FowTrMVkUMPu6huNt6FcFEbuZfHYTwbKBxLy83UHXYJjXF1ryrfRMXxXTu1JggpPcMMj4Ho2QAEVvPLwwnTkfa1",
  "key47": "4g8fbMrnHqbXY9ZaZKZqeRwtyKbEVcrSUKa5W2VKBy3113zJjjX3EpVa4AaAsgsxHm5AJotoSLqDtf5T3VtHhRga",
  "key48": "tND9LVBEHz3sRgPsQekWM1bev8BF3kxhr31Up2GLykcuwLKCh8AAoa6KXadruiNLrt4JQwHn3YfB8CwTsRMWNNy"
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
