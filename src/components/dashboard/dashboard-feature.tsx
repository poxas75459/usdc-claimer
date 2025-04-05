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
    "5cQDCXSLJzZhMa8cdh9gjDBsHGLUTeaCf9Kn9KLZmQeRzJRJ4H4ehMuYakSyeKGxcKaLkYEUg55Tm1CbmdyqCaUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AtGF9E16SQFPjmH6SgmqYJUBcyxUi4FtHVKotT9VGEa8Mg4qCAuWYDcqDHx3hPkcKLa3WztUnF3i6Djom8uU2eS",
  "key1": "3VDcGVJ3hWFFf5gwu8556YK8UTHAn6c3xgTJTt4PhXwiQek35XtsQiNupQgS2tMXV2BL3yLs4dZDSGVMw44S2kvd",
  "key2": "4b2VKzGEGb1CMErG4xv6F5uK85mpYavfQ2G1L2pFPe3Ajb946bgxJbv92uznnATNMXnm42iQ34RQXhHzCw45E9aV",
  "key3": "4fqyxpQjvJ8QsQ2JJdyg1QGggWxHhLa8wNmCWYU7gGMGgB3y24eMA8v9RyiMQgKkaRisHbT4KcQJyfowgCUjv7uq",
  "key4": "4S8Vw4SY6NaZmHdEym3RdVdwvwnUQ8bRj1wurvsVztk9fqSAxcGSZq2HNo7hxA8EyovxJhS3GwATJLgturYtf2sL",
  "key5": "3eEiwDJ5pPvJqpvDNRboSCVE4DdYWQTJd8rsuSgdAFsZQqQfxAzkATZZJQmBteU1Nh1qnbH2DsfTceCpKk4mnRtr",
  "key6": "5EnvKUG98fMdJDmY9wKN3BrbPaCCufZMUqvbhq8dGBLEywJqh1r6QXeTn5LrvHkoKbKriEq2oEW5JhkiffgtRtNA",
  "key7": "4JTdpBUpM3yVbXP9NbH1fogt1fxukY1smNE24Ux4M5KKTBztaUutaX4X7WgG7mUfxcF2nVwAXm42NDPxhUTDFbVd",
  "key8": "5dKNvg2ZeijcfEJsQmpZje9nWMULvEWEeLBBRWLpHyBE4UY8sYLktF6PTQNGvL14uCSm2D7ZFNmvRUxXc8KyWTgC",
  "key9": "TBLgm3FzoTb7V1haJLwgQsNTyvGRQgSHN8vqz38o5RcvKiKn3Yvo63t8vwEMnXZ7EfN3kZ7ET5MLJPdU9wwX2UV",
  "key10": "2KoR7aiyS6deKRNBusuuDnm54r1QgUGrWjbxTsV3dfjDEPkZm2bo7cBf8tTcpFhjFcy2W5qWFmxWsbFXQe6gx7Hw",
  "key11": "HynQPqn8NVUdVyq53xyj59Tnz2H7T68B4yxnHkaXpVwE5CtWDh99TN7VfDb4v3NEUY2XZ4JQ7sa7JfuAR6GZ1vA",
  "key12": "3dTVd7jcJm2rtJEwJshujto224Kbmp69egR7remZF8EMscSm9SZLxGecBKegdbMTnMgRtRm76AKVdEZTisi6k724",
  "key13": "2qoaSmU6hqbybLYWiTbanyrUNcqP5bTD9Y1jMoWBqMAvx3cSCR7NYM84YY5x8VZ17FkwCDD8qXGkuzC6226xcMN3",
  "key14": "2MatPDmfEsydac5TmrzPWmqcS9dMdki9fT6E2DoYesA7RK2ABVEtVskYJDUgLiYU5wNADB5acFsb6YeiJMV85je",
  "key15": "2HY64gQUUmJMGkjGXfcwE1wxvJN2u5kRARfB7SfVTFhoo2azfJB1T8TxJ1Cy6VJqsqEWn5uSdWfXSRs6UBMHFo8W",
  "key16": "5Wf3DKtfSQwL6NnKWDNC4EwXSxM1AYSW1p6ByxQEWoXyXnvKPJ2tN5J6KWVwocVQ1RtqvQR144ubmjVcwLcYvnwF",
  "key17": "4yR8AukFWVfP4eParS3YKkxr8FTBpi3s7tqp3iRQrnQo2fCFPphfDVGAhsGsetGvhqc9TgwUGGQPi5pGQ6yTCX88",
  "key18": "3R7boUccR8TmP6RQ6gvQiB99qCqJuu2Pv4qgTkSnjgSCwkCFk9LRtjpw69ZiHgkb6CQWXZcHft4fLhHG5EFQJVq2",
  "key19": "TZrhUuTrLFdZdTzvHvebRgKZX5pUpcnXFot4cZL2983wym8xJfqLifRxa4WBMo69JhtN3AzC1w6ff2XZtDezyBP",
  "key20": "2sCLqGMi18oS33p4cKDMupGcGh3MD633jTgD2KB5QpfmfkuzXhSohFWc4rafuVGYoAu4W9EeuZuidUm1CGZbV9kX",
  "key21": "5kxZsDwrDVAZvGB8dMJPzqYLiJiUoJeLxaMAFMiBCizDTAkRGiWDbAJtpHimG15U75MRR58oZeNCmw8GjTGLcWS3",
  "key22": "3pVeEBC39m7y1YwoKNXTDzyDcuonfUJoAUiRscQYzMAhfzGJD2ECN7NTeGXGfGTiUqhNbSCy7Nb9uRNBh6YQUrVG",
  "key23": "6DBjsoQhbVBdHqAEXuKYR1joofZBraXWMdDfK8f9hBMf8t9tdMMesE3q3ScrziS4FLxivQkrKZNWygtwFjz6rSN",
  "key24": "4Z4tGbD7VhnJCKMhPQCrdz1v9ECBa4zVZGe2hZ2AvG7L2reQemCs9oVVF5Xoyu5CEsKpdQrspCmKYTwXhyyH2qCL",
  "key25": "21sMcJR5AKacH6XmzrySUdZ6Ticf13L4gAdoUUcPBjTMBvKFccw1zXMJwpuA2BsdWC4QpoHiChbbG1aFyoVF6Dgy",
  "key26": "421f3zKfsmAU4CZCvoS2niqciEc8D9XsBFjTpk8LSNLFkDEwZGZuM1yF5hDryBseSrGSrkxPtt3JKF9xNCPQjCi1",
  "key27": "vYnwmpCcN3degM5NEqzHjaDEGx8MwWG1UBwJ9MUTegRR7FJP7Vb9dfkDWbSN5CC7qnraaJXS3uuxSSrCNEv1MVU",
  "key28": "3HxcVyVC86BPDbRnChDGbm8atGrDGURcPpJu5fNtktTu3fyDrky2QZvHN1j5sj1MDVr6BgZptwmA2F8sLrvYhCpS",
  "key29": "4MxbVkcz2GSvjd8LsRQ4V1JCdBKAiVa8oUyxbSHtEZ5e216s29TnY7TK9aMUQ1wLj2QfiLomDpoNKyU61jcGmPaz",
  "key30": "ncfz94SdUzk31f8hR6U2jHYh3rDv8FkrJ4UVRpakLLzLAeXM2XwLYW3V4D778F3CS8Z7FWxU1RT9Z82HHzKuGcX",
  "key31": "2JdkD3CS1wp62Bq9awfXFdTHQyg92daeT2N4hypBgTf1PEHmiWtAshxeYPJJzCrTvabavXNf2JkKtVHyKSvwj8DP",
  "key32": "5DQ6gkduU3NZqudCgk6dytyJnAmzXghMHJ4Qu2523eiZwG79XFWGg6kzG6aRejUwukHCVysFaKcQHhL6cRXEugp7",
  "key33": "2cn8hxPthPKhBN43p2Sn7mGfTrgFu4Y8TxmYBGJP8fmYhRsE4YN7J48noJT3itERvAVVCSJvfRirJJ7bC1bB1dVe",
  "key34": "2MBQAp231hqmwEC59dEUTrcaEHuuhBRpSQ5gxdP8E5AyBmni6J6dz2hkWWVinXewbgbs4xuqiTCmMQpbc2XX6Hzx",
  "key35": "2npm6hNn3mV7XkLFUKFzf64mGtFpqUwvgbpqY6v7WvgHTEC7Re3dvxefZC8FzVN43iC745amfNo5ixKj31Htxhbe",
  "key36": "4sST15U383S9Voz2yB8NVETyg18f5TjomRSwe1jgSCZofpRNBb2PtAwUWbDDvUJDrDeFudQ8SQeifYByf3dUWs3",
  "key37": "3MEUc5kuboRSUJFJhdEdffG3otBvnrErpVBswYVNzhThKcwSvRYB7Kah7aseExNy961rBsyawEX7EXqEcAsiw4gX",
  "key38": "4bgMZbUdMEjx4eX49BneGYNpeV9fbEyTn1fVueTv9KJod1qe2pRoVVBqhunyHdTtchhJoa3aqYSPsX94KAoLvSoR",
  "key39": "3UQYNP4qHmHQqGZ3X94Gy9RLDCqfVNtm8wPotTHZW4mo8E1XYGZkpcY2VQaPuWdLDxxkyXubYqDZzY2QVzkid4f1",
  "key40": "4nLcUXTDKqce74ca5u5rZYk5uK7e18ZVXBAok13tj6y2xGobTiGJt6XfQ6tK7NYxXCSoQCUWuGnNK6ekf15uYzY1",
  "key41": "53xtK7CyYJaZ8VLdEjmwNncHujY8DxK1NVCQQ8wfDySJeQUopZFXD3p1RHq1ggc1HK3RP5noEALRdb1QjXDUSzru",
  "key42": "nSPL9wgfGfgoUjgWGEoY9SB2uGar4Pitpp1gb4HvKY4CfFN3MHBwTWjBXvKD5yWvToZ7SLzWBjeZ6ahuevo24it",
  "key43": "4sgspxyutiQmGuGy9H7zYFM3hTMivDpxZBWTNT2Gyun1CXFiyRyDae9rWB84ZjmK4bUsZyRLa6e13edQ2mw8K38B",
  "key44": "5fHZXP957DoC8FCLi58LhvbdBmRN7bYmJUn7osXnKFVdebeReJ168EkCJEWok8Q2HYFEWwdkwGLHqjUehxwqsw32",
  "key45": "5rpk24QVxK4SLZjA5FYasr1XVXtbRoohjF73mwvo4TiRdXAeHuqHsjTXU637U5qDskrhs6GhZc7SwjVCFsaF7W79",
  "key46": "4uoNYShNm3RTEgvLjmXW5F88wiSnUxMzMw3ipsufuWvxK1zST8YSqPwNGthdFQb8Jn26DKDhLoTGdm3u93b9dAAK",
  "key47": "5oTGejS6AkGLzDNRmb17vzS4bBANr5HfQsk3KHckb8QxWTqyMsEJDSuTwHZLm9a9Hb24s3AWZPXDtR29giqd5HXi",
  "key48": "4kjRuysDoqmaLVxuTqpfrugEewBHEYCziSHhERiaSGm52NQbRw79UJZMxpnN7KYFkiqmquhNrJsKVSSABneafEq4"
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
