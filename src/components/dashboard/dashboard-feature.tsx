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
    "3QDWBBendwW2spQqTPtpJiU8q2qCEm3DLd9PskyuQxjqRJv3zQgCXJsTo4Y8dFo16wKLAm9jyAVoQ57KDhmuGFRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ijGYZJQ28Y63Lv4MWsesG9DMoVVXRiaM88yaxC9QFCokdjEBFPbYzreRYWKdPqEePUA1ghusAdCfYxx1fEpSFZ7",
  "key1": "4YX2Hmet4wWoKBWwrtezD6Mc4oGt7VVB5WJkWrfdBRni5qes3fRSkQ3wGXvxW7HaaffNMunrXefJMzYXkmRUBvGQ",
  "key2": "LkKu7rwnfY2rnjzqAx1PByXitnBAARAt7tN781tP2ajZ18u5yGNMvM38dAUmusV5sGDWCb5ifodcBF2M6z7P82K",
  "key3": "4DwRVXuijU32JJjexxXkFfjXRrH1kFKsjTaRYEKz56pf2gT7RWpMR9SU3KhUBx6LFjBbFJkPBXFKmDxUcWPRr3eJ",
  "key4": "2qdAzNA9vVetbj7ZSMbbvHjrEaps2Ake8MBQNXTNvkbxT2S6mWTDJwHBHNXF79FqGNEm4pGX7fsuxNGCbrruEN6e",
  "key5": "cLnGPGheSGACzLyczDbNinuceSnq8YjcQ2Uxtr4tuz3ydMv9knD7w8YmWqjtUGNf6qwY262ermivFuSaRVXmtgp",
  "key6": "3i6tBqvKTc97MRzbQZHfm98uyfmCYr8fLatfjqzWq1nhhYSPEJ1QUYtkofdLu3GmdWddxTauqAUyycn5RiQTV2Hp",
  "key7": "KRZocHdafzy2SigcpptX2ihvsu11aaGScLoHWjey6dVL5kBHSDuc8VGex1Di8tzURaRx4qAwzCYSEkT4vUw5vzn",
  "key8": "3qAzFPBrWSzeUKM1kFdzSqoQ9X5Ehi4Bc4zAg9fgPLZEugZGCHMTvXVKrCsDtk5S5WXKz5taFxvXEeZMUkoisHHM",
  "key9": "59h2pcngXBqoHryrhLNqF3h1ShggZwarnNzdd6FLyeMQ6R4YEN5tVN2bL224R8r2nEff3ms6BTeWXsBn8PKAcXxH",
  "key10": "5vFYBE6RS9J9BtTU4cjkyEpqQNKXQnvjMoN5y2ezb516UcRZunHHSBJUKRanKoK2e6CjW96heDdFhjMbD6N4BK3K",
  "key11": "2FmmYkztySXNgiXZJwJje2A5jLtGRbitpzW9RS9H8wF8aGfzVccjUpKx66PvgwvwHiYXoEhPv5Hz65fxkJFyicQb",
  "key12": "2BLbeX19YspJ4yABAroTFUu5cmtUVw57Usix9NXaLiVRfABLvAYBEJqt331H23641W68TFwoHukDj2uizrtG4D2Z",
  "key13": "2gNC4e6qdt9yrtWwFpHGjPiSv6ZbirQqhoWecPRFXrWif49sVfuZRZrJxE8smVpig85S92zXVKMCeurtDHERXuwr",
  "key14": "3Cj3iGNk7TCzWpjWMikj63hU9zxJguH86ZcLUueK6vJ88hSYZ7iyT4vbRha26JsrF74YBKq2fa6pHTQcVsxVJrj8",
  "key15": "7YptcCw6tgGvJoy1dp3VH2w4rYoERtzuJUKKuoQDEGSVE8Ro5tq9ooSgbLce4wrrz9MvqMjLuRC6SPrVao4ELp6",
  "key16": "3N2Jf4yY7FnP7gd7vAj8gh5GjXtKySs3EsienAS6N4vrzZ2yNpWZvgmHQTL5yr9NxcWnXFiwSHgjbdjYRTLxTzkt",
  "key17": "xcmt9kfZD9tbqneazegpe9APS626ty3ZZw8uMamJRReEtSNxWDFqbsZLndcUTWzfzuKW2J4fBdtb5ERGu77YFGH",
  "key18": "4B1YK6UmqN2HcQRDJezghmf7czjpNrJMLNJyfgq8tHJM9sxDP145RpuMHZXJkR3MwCVQVbDjuZRUnjciv1LHxkCB",
  "key19": "41EtpJChTr5dxucvjiTiaWDfXMwfBt9C8NrAAC7mxDYbtr4LKWtJEQcQtzGNoHFeue1ZkpYzm96sexk8ztG4nboV",
  "key20": "2uKQNNkNfjTY1pX6kAScQ1UPoicJ6psRQKaakqVvaqB9x3en6hzRtewMzHBws6dFutpvU7XbKBRjfxLZdzcc8vA8",
  "key21": "5btKbHcomh64nem7A3C2g3pXJ9QrpoYfwjVU5FSibStWgFqmj4VL7t5A3xA5LJndB1md7CzaPv6W51FYY4s8jk3B",
  "key22": "pFpUJ7UicBjtGAZA7d8d36xgALygSmSKHuZ7tvAHWXMSK7UUCJLecwVeivnFjZQJE2qYm8qwbqjHXta7j41qBcU",
  "key23": "4M5QjGjNR9dRL2PCgUgjJar3m3hos1z5jdyfn3XzvqXwXrDCJvP2kC4z9bGQzRXCEQiTyaFsQYhmTiLX53mQ1qM1",
  "key24": "a9wRnpbjLwvojfcn4EvokNcYk41jFiVq1F7aA5LWbQMwkPnCdF7dyLoGG74WWnkXidnpoyLf3kKgqYD11jxRbPQ",
  "key25": "5mj6qCJNFLFuZa2q2fpDBfZpRE5bWFFsqBAficwN55JjmbNhfWSRJ8TDqvC6yownwbecxMocZTGyeAyvx3u9VWh3",
  "key26": "3t4khpy7U2yaAR6buLbjdFCR8K8jXwsiyPEKLJhDHgcqmjwFeWb6qp2LbuhNQ1MceqKrnheXS639Tc7Uu9ndEmZd",
  "key27": "yXPDZQJs8muqN8pdAYdipYV1Tnrt7m411SeS2pgCdVUAM3y7HWA3QrjunHfbtTNkC5JKkCcAWnUF2vkb5LipMAf",
  "key28": "JXHpu3ZjnvFGw7KPXPZheExddfrAzAsQ8DNQrtnTVRWTkKJvTKKLoWnY5Jr9JKTRvrLpEzVusKSywr9Mw8EJxCF",
  "key29": "5XoszzxHxtshWNSoGEaWStnPx35Y5JYzBuHUjwzH3PNumYj9J9AfDm6kAZ6fNWQ9sGXRwdPHoHSftcNGcpVG8huE",
  "key30": "mwNoGgeV8MWmduxpjHsjHTHK5qLfghZqaK1SfzUhSiRVhaoZcF5nKs6mRZi13oGdCdXa6mnGabejJuxcZLs99Yd",
  "key31": "43f9AWDRQBHCjqV5AgFLz52Rz3AHny2Af4pmvCLGg28xn7Zz2zrP1cXmbjVWfw9B4tetVYWMkEPrseyiczN17b2m",
  "key32": "WstJyz7p1ipWSv8GHebTLfULPTPeoUMnFVTFxyoPphVvSkE7JLS4pummL8PVm2ftmFYgJj81Z1CpcmBGzx2Kxyf",
  "key33": "3LdFRDYMB5cPph9pg28LJqUCm2FtEksH143eMy5KtBgpMxkYZ4D7dSgUXEiBAUkEFy98K2pgQ7HmGoBjrjG9byMm",
  "key34": "4jG9gChWM4UdcXmAsy8tC8LxL4797LcqUCZG7T1HWmaHenfrpp5js6eAYLV46ngKhXnoypMMtt9TW5g7bys82nkZ",
  "key35": "3daBvaNWBRiRadqDtHZGosVhBsRzfL8FFZD7mHpgnTw5tuuQW9zgBee8PgcYycPriiCD9LuSjrnduX1e17Gru2R8",
  "key36": "4x9utkMbdj8w7zV9cfKfSBMKJWHwRrCwyzsVFcfJyoMm7JE5NzfaRGDhhLsXn2EjM6tVm8WdoAq6MSJcoN3XBB6Y",
  "key37": "5ftNTLeQrDWMMXU5yxQByjMuov6Khzj4S88rgXLenKNpetwDrnJXnhxb6ipURHj4MidUfv8RMVxDrRMJTPLN74uS",
  "key38": "x6bUQmGTZPuR6BN3pzpmcoMUUkUbzLD6Bv6tUSQaUE2NEJKCVXsYPApoj5fSB8kozKVHoLiF3PNr4YsWEmS1Dsv",
  "key39": "4BHtEmPNVZ5esAc86fZkujX4aac3FqtPJCu1hJn5nBmzqZxoMg9rN9ypHrrNNJwEHvCYXH9fUMmZP3CHNTFFK4MF",
  "key40": "2zXYbGMjGdAAEffPkv5YJ1y78wDwMtqscuoL5Ejwu68FGZVX3hHTr71WaKManjA6Zu8MtnKSyaFCRjab3M7oiwrG",
  "key41": "massrj8sv6MfSKQUFEVUUiRsBBa9genf7SeLCPcDPf7Dirt4Jx5fe6LX5t1sbibJPxu9ftxzXnm71Q3CtpVxxzt",
  "key42": "4diXJnXCfXvAK1f35z8kiohi3wzRpbhyaQWcnyvQt2jjHRKom1HrREryaaDhhV7vSRxG8j5RFiguXhvWrCNEAMNW",
  "key43": "3EMoFJnX1QrtwdmXrekSNqnGL5WxUkByZBkzEFSrmSvHY5a4gcZui9qwC6w4GKaeQtk2yHs2JQwW7NikFSFsDjLb",
  "key44": "4RmXAzBPU2nHTakDvnwNhBajz9fP1J11vmFiSGH9B6aqNhWbWcWZXHgv5CvYH1UxCJmuZfNmq6YkNWo89pM7iFKC",
  "key45": "3aHxHsW8Sw6TdeXrDA3SxUsYSP1UvJKdKnDCt8Ynh8XTiZupxb4YBMZoN8gk1pYiYRaj9uw34QrdCpM1WunezTiL",
  "key46": "cWdFLNmD92oEG2u5UTBT1dCjiC46v8KtNquWao1G7PWgynwWXkhQpwVRwBUkTUVCwLz7HyMbB3tLQLvewfELhck",
  "key47": "yQtrPnn3hFAg3MPHx48xwT7te1P43QjMMxjMqqAX9xXx4yya6r8adooiuEGiTd24cXfyPs8t98FgMEZ2WPHCvA8",
  "key48": "4ar5NeZjPzFrpkCNJeT7eX7cgSrbu1RoMAAXxi8JNczast71RmaJoxrVHt7czsmeeL7c4GVaaZpgrBZKroBuEDEv",
  "key49": "4Cx9RMGFepzn9yiDBbZetiXYCwPEQAPRvqXUVgsNwANHud42BbuW3BUHDSUdwgbs7KpUiiPbeQ6Tz9jErQQwKFCS"
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
