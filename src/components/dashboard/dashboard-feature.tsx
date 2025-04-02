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
    "3pccueRuw5aVRinaw9B6dTGSVHi3CLq3zrrKDP8VuyUFaf8L3j85tTRqRqSDN3XYoUfnMbDnR9Zuk6YtQ3HJaU7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TgjxEUp3PP2tPbteBFA69UY8QAxtH9LFRNCvRUM9iLMQZqCbYe7r1wJosLAheZEuQPk2sMnGqkwWjXxyAqGL8hC",
  "key1": "3vm4eQNQVthv7t98UE5yWPkcwq8qmSsnn4S6PMJxLdpXfR1Do6RbaJeDHtZtdbMBTUJuqqg1JasyYRsCTxY2kDaX",
  "key2": "5fR2Qd4dhQPehYq8M1uZsj1NbEq1hbT5EnmEX8QeX5UbNnKHhcXmKaQxnbzddU3go4C4T8Zpc3j57PGwRV6e8aGK",
  "key3": "2LpNAYQeCYMrkpgeAo4bHtQd42WzDVtfHSCGx7vdY1qvdTqPRhQPtUnf7m9DNSem7xAZf4zEN1MBkXMQYERg8ZVV",
  "key4": "4kfqKwJvpopx4XQ5ELQ2czsPsy2yVZyYFzbqhUNG9XS5k89SRptjh1REtzxroWxarJjmQhgHaCxXDJ5gWaHCsCyX",
  "key5": "4fbUc3UWjAcYwU784zv45Y7uv6kxE997nXsrMizobqbM3i3xxPMHxmEc6ATaZs8rpr8QRfM6YpVTLysgaT2jz92",
  "key6": "44D1U1rzpZMHBRaEAYdkdK4TUGTNCp6NvZWN1tyoE8B3Svxt3mPtA9JZbwirCDshUn5eL2ttQbCwgLpTLRPvD37u",
  "key7": "2Yjno4UsQ4tGN3faUnu8fcyRoHm5EWNgzWQWAupg1zGShcsRHS2P8zyo1wfMY9nTTyXLpoCjUwdfGf4JQ8Fe3VVV",
  "key8": "igcADXp9v6hfLx1AGsDxXw9m9BVwegnvCeVQj7qViQpQzoA3nxMvLLfuctkkyBrrMhZBZ6BdFjYtYU3G2akCS1g",
  "key9": "GaMtu1tRPRr4t4Yt7YTs1dcJAAHhhjX97iyz4YYBsLALYEn4yb3McyU1W9164qY9vsGBCdbGtYs193S6D6xg1uV",
  "key10": "h456Gu29ui4kxKF3LChcTQMAQ8TzrTbkfx8fDUAZe6kBGSqfkTCsVs9JcsPtbCXkjgXD6TqPAjLYgT8zzcAyCnR",
  "key11": "2S3cJgNEPirFTwkUKVypk3YMTt7J8rsC7xfnvc9ARsEbXqU66rzkofUKgCjDoHj8pYA2tq5gHsnz8djiCRZnY9dG",
  "key12": "3vPncoNZUVRaFMdVWzVpeaAYfVdzmZfPcjUu4rLvJ45G53WRRzfLKY87RxwtwdySWsm96SJqoUirwVV8whfhGdxJ",
  "key13": "4XRF1PaWCmsjewBv85n54qsbTjA3b4BHd7feqTtZD562ETdG7U5e51qpCQohNUZgJnPN8ch2XQbZbaCcJuoW6mTg",
  "key14": "3eoZ88gmripf8LAtCuyEPEoafrUFsHkHHur4ybSJEHgn5rXXXDYKmfHUWysXurNca2i16WcMMbZmEaVtnkTr25Hi",
  "key15": "46XTkt5Z9vmTU8UxD57JUT8xMU1mY3qZnrv4pom6x49NWDKkEo28VAHauV3WYWqjecwUfZRy5bavJX9BdUzrp5LC",
  "key16": "2T5qWoLXdAFNFHmVibRWVuStVjbMBFCU8osnqbNif8KuYD6ydeTNWz5exvz9WGKxgVeqqRriHyyfEPsPLJM8UwBN",
  "key17": "5WMHvgWwo6QgknyRbxCScGrF7x4h9fPvuCKgJR5Bjo4pDRXaMsCHBHYQh8PgBEnLkubkjfMTCKvqPkDq7H36J79w",
  "key18": "57dKKE6CBuEmZBPU4D4o6oahLRM1M7nH2ifkCKvDFKGKauZYMwryYk3AL5jzJPFN9ZobWiNVot8N4ALjqYqkhfL2",
  "key19": "3tL3tu3ztTFGBL2mSkKnextnojG9kceWSmhzE4PtsNLJkLedBmCe1S5vRaPhK26SPNs2DtZWKhxH6ENzzG4BgXXH",
  "key20": "519rxd34NxsgkA3FENAyVzQ8DuXcFaboRHgELzeEpr7aCeGhDfjHwLLwqPyg1SnRKUCdrXVgrpEXZvzYqx7pwEKL",
  "key21": "mz1ixjmPfkMS9i9LXV53VqCv1uWKK2Txky3y98dBvPoKVdymLGLBptFuMm3rxPkKfUhdKoUzXTyg8Xrsf2SJ6RS",
  "key22": "2ateAWTWUBL3yGHtfWcAkVsTUdZ36yu2hY1GRedj64DaUoY3GJHfdRtsn86M8C9Z2hVjyHt6meUoGe3pyzZDZkjz",
  "key23": "5hqiXVZVcnpoz3MtjKnhcvBjYhVE9BDfL8bdJMa9zHh7idBuRPDxoLMaGrrgx5C5qbpAwzGBE1ST3VGUjmz3FFpg",
  "key24": "4Z4j3kEWAozZTJsjVbxu2MPPyUUoGSfLULhSdT2xo79M4zpx5ZrWw3v2buQDzRZCjpGX3SkNot1gCo46RmF75RNB",
  "key25": "9BUZHN6ocsTQsbRY1HgoYcVLXo8AobqLEcv71npv6UCzUfR4NkwdWsdGXMND2aRpMSUdXhrPshVpsAtabo5fyKg",
  "key26": "3juGBUdakq73mrc377CyAMLAPiYA4H1kXK1Xd8Ys7N1oXaYBRzriZhyHaPBKNPHptUqkB6ZPQCKnxkzad2XsxFtH",
  "key27": "5bvn169ujTMeBS7ngXzUVDfsMikAdBkqpzC2CFQf24cWK1KPLm6QATCo4BJLNUes8V8e5pCN4v6xVYijhrWoz9PQ",
  "key28": "3Lo3PTNLPwVNMuLAf1jwJnce2mL4AEAoAC2zQJrnRzh9tsE1keR5K4gpR8B9EVvFLtZs6ghNLxtYJoVJVx31fv8L",
  "key29": "MER3qxBHvqew6LUkof6wjEwh5FVYT55SHbHYmckoafM1AcK6mEwavaEqhtZGDTfVtUUv54nA58pcyRURRk3w8EH",
  "key30": "k8seNvwFjcjRkgP56qCcSqMgydJ2N5W9JSP95DsCHApipHdj9UBGHKf2xWNvEMqPK7QyKhWnjFV8E3THbYuC7j2",
  "key31": "2Mhh37vFFBZtWDDLd4iYpCxyZqgoanC7AhGVpv2tjdSgTF6ZfugfHGkXeqAHujwZWCGj54usaiCWJBfxZjcE9JzS",
  "key32": "2CATwgi8T9uyhYrek18tCebgNpqXJzHm26Mmmbk336Rhf6zHQ5yEtHm9gCSSjKANxLaTEB9rCsWnoiAL8N6veT9F",
  "key33": "2uPreY63fUhpd3nKuzhnNmEfgusamPG7Fm7Zv2Y5c74TrpmGEJdzqah1PLUmzRK6KVoMCPp8i9w9Jm5m4diSNReb",
  "key34": "5YxSJcqytzkAutU3sLzyA2UEYPnnZ2EU8JNCy6RUkdMUSXqYoDEs9ZmkcXVX4J4EBUDyR22jhk25sxreno8J81kf",
  "key35": "gZE3K6huWCfpC1FHVfQySdiiM1FMrrfiP1pMu2VjUGbxYT35jHh1m96xfkPxKPbtiLjn8tXB23zVbn8fzBGhL4N",
  "key36": "HP8Hpqa1vvb59XB2yWYKiXKWZYJrzZ2UZDqqwbV6bmj82wixfJRcETDtaptdUwMQCVxnvHC2noALtX7LyarBsFR",
  "key37": "2o7RzGmdKTJWgJ2Xx8NbHsjY56aHEfoK5JarFjd4cugq57ZCXeNj7NchR24w6to4jKZVpzfmaSXo9rCNhCn6sHet",
  "key38": "3WTJLwytoY31KutyDoARECFeo5xRNR3xeiZRF39j9kRgBhhKkc4GvZNWkArLqjytf6gYUBVPmTaVsNTFDtG66S2a",
  "key39": "X62YxDcxnt3E5wsn6WxqWN4iR9gdWwCwPRUhKREf2yZJFDPVQJuTL8YyAmm5VndfUEARqS9pTs5FzPzXA7S3VXQ",
  "key40": "3FTwdjXc3WvgsAVfcsi9C6RCKgSGi7vyKiDeZCF3eejUthqBwRxJtwRQriP4Z1yzDADzHFisUVptSgkTvZyg2tqE",
  "key41": "63LLiYpvW4h8aBcFHp2iWdDkmpRKSpZmkAnxkCiv8QxqfktUhZz9J8wSJoDJEt11gyKgyy9d8J89F1mQvzsZSqg9",
  "key42": "4aCtYLsqUUhJpnwsERG5xLbcJztd7rtrUBbyH2csF6tkNzA5fjFxAWBFwzq7YPgtCk7ch17mUZ1CjTz83BWgxGJT",
  "key43": "5PTLyfdGAVhtYwfjFncQLguE4DYEiZKoxtXvffLS1sqWGgSChFn89FNMveELjJaaTk1RcVjYyeyX5RUZHiD3Aamj",
  "key44": "3NoFCnXgQBVDcSG2RPhQhf3NWAHpSCu7qgRSxbKr3JfyFtvS8WZ3Jcsv39w4qQyvpZ3Z7ikES5diJzETzpGT3x6Q",
  "key45": "3jQguU5uXPyfCNXP7s8h4UgNGYFh14wRWAsrBUJdisTJG8fyD2WWPaJ592YMhQu5FERNWaiJaPPzqF5XHhAJQTvS"
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
