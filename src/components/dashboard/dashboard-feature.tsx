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
    "3ptzETWCdv5qa1wadfVQUovtjhtUEjz7XZb8TxQYsM9aNf7fiR12VSKnRxKFfTS26oAhNofDnfMprjDndndFBsev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31eLTDDFbu9CH43VPMK1zyTcYaWSQjqyxSD2urVdtvvhUPoFtE75tc9kvD2gfkG6qQ29kStFxtumrQTsnEa1s6Cg",
  "key1": "2hhV1Z6YzsWAsoReVX1dGrR334GZrwREc2DJ1qj1dMJg7g4g8tSxjxsxc4FUHFrTGRKqbd9Us8hMhtSMLe4dUu3S",
  "key2": "ZdMHAZTmAuiVfASeYYEhT4cQFVcSSbuEb1fjPKrAU1z7F39sJ32tJ7PYh957Q9nxKuAZnGe6jvt9B9TNbDtdJb1",
  "key3": "3368SPKkAdgg4N28i6shNAy6ZPV71y52Wpgc7yo5gf86SfUjwtCf7kyx225MV1t6JcN5yRg95T22418XfcHpwhfv",
  "key4": "4iqxVasP4qe4vfxcstiTA6duG7UKcMTpGNcdrzhKu8wdUSpexTX4ee7kRgVBABQ1LbRgCfi96piL1yxPcMe3tBWY",
  "key5": "3MZpkW1RbGKjwxbjvgz8PAzBDW9g351SpBcYVeFQm7p6kUfe3QqRemaYUdE4fZU9rTqs6eotkW6SsTD1nuBJKnio",
  "key6": "3J1HHgmVCK9f1vmJ9bnsAGD2vsnc3Tx1YHMok5riBY3m3JfGXAjWq2eSkEuSW5Kqms3bjrivKtMMmgAGYUzYjMJh",
  "key7": "3QMTRdSUC964JMgsYf7EBP3Hm6PyyJiwxvJg7RSpG4mamVgQaBnRihRcfB8ik2ncuAvxEidpxdySnFc6Uf24hXGG",
  "key8": "29G4F8YAUFWy93Yovc1v7EHwTfct6tChrvnSv6QVFTVLztqxj13h1PkHq2KJzmJVof7uJGisDcMgwhSQ2Din2qeA",
  "key9": "4Dz3CEQZbmKVpdS1eWvho3xBhaDrBmr4PXapFHnzgtNSMrsx9QVsM423VeyCpp3iSFFufz4Q9yS5gM7YK1xNZNVa",
  "key10": "4ehz2SJv4KoMBtJi5c9XTqubt8C1q9vWRD5f4guSs6Ghkuj9sJBgKygfLSq52hxERXyjAZPhtMWZjHrsnUNJ7J7v",
  "key11": "2yHFppKJqxg7RWCtxWNqRZ3nYBFwxmmeMS22adLspGo3sTD46dpRQztghLDJjDsxBtmTzrFJShCeQt53H5UyqfBW",
  "key12": "GLM5zQmgeiuFZyrDDzPwc5pdnBgwP2fhdK6uEZceh9JU4dgEdc3RpsghYVazTXm8oUgUNqa5cSTpsc1wLZVP6xr",
  "key13": "2ofDT29iHiZ7aJMPtAruQq37jkZ76af38QwB1hk8fVQGBQwdaMjHSA2j77dHsoPShkDcWWzNna99iaxVQDNg2MpK",
  "key14": "5jcZX5wkTk5y1MqwdpNyN7TF6DVKtgTrkWo2EXgpPBphd2RPviq8yDYrqPgdtUGoZpeZ1SiWGQJefsCH3iaoY91h",
  "key15": "4VggoGKSFc2m56To2Ut2AEWktS3TfFA2zSeNVZviotsch48rojJr647gqtWzZVqzQGVTmZ6bFaATn9RSv5cmc3wU",
  "key16": "61SVLwHAFZccHoG6vbPNFpXNor36FGj2LXd9UCNhsHtvrhrNx2ngtzoQt5x169m96nNU6TkGkwRsxF5cEnVfYxcS",
  "key17": "cLJQev5xPgEVtMpVxChEM5KgBC5ZXHkzzpZrhiwMivZcYKPcDV1nQcTN8VcdGaoGDEdRKJjEiGzjHzFegtdd3Wy",
  "key18": "3nqwFxMsnZU2t5LvenuCXKWLqaWYMapArczw373kEoPqUmy39EQ7XJx7oJCaLCqYrAYZydFozyAek9ABAUyJye6v",
  "key19": "3aruZSFKKN4LkQVZzgrCikbnjeYLD2QrZ3Mi4KUJQdVKBR1wWbK7vX79knF1ov2w7odj6oXRogrorVPborF9BJon",
  "key20": "3LokDr8ypwgybcWJH2m9GKtvi3kz1nZm1nSegtXUk7Hi3m1XggsZb8NSRSfKYmUo8bHd5UwcjLLCMK1GDckhiziX",
  "key21": "4ZPgECuGnfYiwiUafZ9jCbuxyxSLVnZdkK33MvLtsj6qFTRMGr8vY3kPGhFSPLRGNMjn82ie22oTKm9jwAwVHfHD",
  "key22": "57q2JKWwgd33idY2xer4PuCBKzXhM4oo1YeRXHAVjrAdqwNDqNqsDU6xDr2toVwAX2AqZTmBEMzGcNyf1Q3cfRvH",
  "key23": "wMgHkyeeRpyo94bJdYGfiksSoe3Ve5r3LVgnekQdG54yz456sasT1fnPV1vQ2FNBsDnYmoQUX6pHpSLQzhduoBJ",
  "key24": "4QCrEJPwsMsxR5MWyB9t7AzbPEcan8Qsuq2F2zRQEgC96XXArsSsBXuvVt75eBnYHSoZjsHdt5djfJTYKeFPm7rz",
  "key25": "S4eJNkwSfVsrzN544vo4Re7knKxNdLyHf6wmhGeiGg5xQnB3MedH7Zh5Fgbbut217YjhpVtWA49bb48ZRkkfYsm",
  "key26": "33o6Phe6HzDAkf3uqzZHXrWoxhTqRXSCXUotwJJRyBFJ3n9CpGeKttfBrdAJHB1W9CJ2ahf4BxwXwWKPD7Gr1WX5",
  "key27": "4mxgzBhTM7sTFZQm3qjnCfQpKfZzyYwnGVkk8j8Py3VghKEkp5hL4oQyUCVDPAczKUF28TEEdZbjTxi4BKvggGdC",
  "key28": "3vRt1j1A1VDArZaUoz59sEdL9EKM83UKTXBdyZCF1wez9iYg6DM97n5tgV5syyZQj5HNRxvquLrjcLs6f1Z2Rivi",
  "key29": "4aXPHpFeYwuj8i7E6CZS2umcsSZ8a3SZVZPJsxvgSXeaWNAQZ7GeXCuoSscKaiyfx8a8ueAi1nKaLTKHeYJ2tzq",
  "key30": "5Z6dADLsrrYs7eRnNi7YGMp66mTQfzhw9GfBrcyUNZhuJEdJfEw4SrsZvUzVBRUSdoRkk86irkQNqSu3GGM4WL6x",
  "key31": "2NanVxsgnEmC3fiucmhY3TNn9bkSunpQWHxW7vbKyTk4PoDLaY6GwRTThm4WuAmuSqSbHPoS3sHyrBbhwMYrbNZa",
  "key32": "4od4qVbD5TRUK9MsbfAEZ6uq3n4gcCR7jdKWWdSDhVwdvN2xGs7N3LoPs8ykAkRX1PiLqxcmyQ7NkcD4XEqesdgE",
  "key33": "LyUxa1BmG6WLu5xMudC883pZHKJ8wcC7dEKzq82gURfWmQbVp3kh2TwXKWenTguyXCersJWtyicWz3HLenMtKuo",
  "key34": "3xZ9AzPXLKdMWnjZXWNsSnvBnQqwo1eq4jskiuRgwoP19aQ6rgGzkR86Ksy94eGPhPNgSe2oTwW216Swe2JRSr9i",
  "key35": "4XhVEN4LnY5gpFziXTtLvvFoMJ9EseidyYGi1yFNqAiWaPCQVi4YCZr6eBkjAdvwC7PXX4Lj7pG1udbmqF1r8hZR",
  "key36": "4zHoRBF2kMNbqathbLCkA3rX2Zy2ocQqvBK3soctM5tRuYyfvVgByAMSEFoQKYq3wBB6qXtvKVQiY6pm4cLEABgJ",
  "key37": "ABpf66SF5sMsR2LEocUUAWL5BAxcGW3DtzqbZi4pbaorqehrdEH3qAmHQaksZGVMd7fvDUTxVpJa86oKHs1vdTy",
  "key38": "9txbYo896gwR4A3FZtvGnVJ8fR2f949eqZaCvsje2cKwD8xyevtLdBjHbUcesWd3Bm9W2PcomRsn5rmGmzFjDDk",
  "key39": "42w78by4aZvrHezGuVDogiaAS2jRBwsm2V5DCftA925L2PvLSnLrRYnSEsivhHRX8wtp2AG8Pfxk6sbSNGZ2XdDU",
  "key40": "2gKjiFVB8BnbDjHYyPj4E71vf8Lx19R69JqTURQJeFgzRX5wivtwuhGJmtDdQMWc9FUJvdgW9BpyYKHkTQwxkpoc",
  "key41": "5SYeYmF13nVyLiRCA1C8K85PYnVTBeusRKGn8R6ZkcBhNwTvhig6tQ9Fqy8AohnBqKKSmoGirYVma1apnbUhAGg",
  "key42": "5ydazE92uc6svjijjQRcQv8Xjit27BSvGo9DfVAybeVxC74D2CytCXiuBGFTr7P4p6Xp5aqVmDN2ER8oiPp9amwJ",
  "key43": "2EvEkbdVS5vd2mRhyqd29jvDzRVTxQSnxoirAb32TjbMiSyKvdQcVHPDVx5vuLBnDGYmoKAr4rKMyAtoQKaGwvcV"
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
