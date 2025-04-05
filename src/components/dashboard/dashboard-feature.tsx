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
    "26aenaRJCcvYPuBuKg5ZhsJnNsRrtzotupFLoMrxx5VsED8srEZ8maTByqv4bvzvqvqAech9ctM6Z7hitpEpcXfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SGua65U3KMTJWpGQcPwg45YQXgy8S2vkJUQK6tyauf39wG5Uxypqw1m5tRfWsfQM1wdotWrDpic31UdhUqrqLRu",
  "key1": "5DU3qVuW6AvSpNxBeje7bg9SBAHXNBV25eR3s2HbGsKLRwuNwUpuQo6MQwGGQjwZsEGbv9gTCr1sUJZzmkq8jVbT",
  "key2": "2ijKV3zaYyUdX1McMHfGkh9v65RzVegH47M3BLKrWKHB9wV3A4X19XBiXUtziHvyTebJNGsCrU9F9ziYST4gEJ6s",
  "key3": "8CaEnEv6FVqFReeqf9NT2iJno13uQB35HqDAuBSnX1wnbbN1XjyRNfHwF9MNuM2Vb14vG7qgkW3WzkJSyPM8TUN",
  "key4": "4UCkcWpsHbra13qRt9p3Yfn6bEAw5pgKFYUNF4dWBR1Xmfvf6K8tuHHBRGFKkknW9e4MiZUKZeVPxpHS6LJnKJhF",
  "key5": "3j3RKX5zGCUKXCMXPZficwoV7z45y9tEvJnNKKPjbhEFRQyrCkB1GJRK9d2L7sb2nXW8Ljxruqknx7S4he2gZZB8",
  "key6": "x6YhCpVC6yFwBj3pqE12oUXijQWDYmRqXWPn7rX8T9Foi5H3Qde8DoZMaG3X998hXYiFC2x3jthh4JpKvHhkzub",
  "key7": "2aSEK7dpWRuxdh5S1cei9MrWTxRkjAqLRgFQt7myUvkJ4APg5kerb5YHiadfU3RhBVkGXNQ9ZU3jJrwJ4WMu1UTc",
  "key8": "57vhEsNvm5LdE39ng3m147eEYKbwwD22cFM7qYHFJfVtyvXjLsGCu92mPMJaoNH4s3JjvBJ1WvvZnVGXx7KyvK7c",
  "key9": "t3dfKBgytK89dabWCuEywd2x8fkFLpfG8DnV59QnpsAqky5JaCjQEDfcjD6ABM2ifBFmaaVAKt2zUv3Gtntuo54",
  "key10": "3PeK4SoN463ohzJbm2Nkyh9z3BpnTz41EGicvrv3uaMWhnkga1yiTkeqvQfyqCNfNu3kE4MYgapTKUWUoJ19GDyz",
  "key11": "4SkYvW3y5eP1UsUuCbDNpjEW71u2oewUrCwAH3eyJ7yErwModwiS6iVCjVJ55oyck4pFvkGf3oYv4wdScTtAtagm",
  "key12": "1DPLEhdgaBeJafz8RLNkNRpkz6CMqSR8WGq6cLdn3YVXTSc3CvsSJaDjMJHhZk2BRpkoK6FHAPqEcnDL4Mtwmdj",
  "key13": "uFi6RdWj754cpEC7G2W3RSWvdgRyxCN1E4TtDLxA6wnLK3nzzKFJDFA5DGnthY3wDtFPVKV5m9HwGM5NKqR1LnW",
  "key14": "5nqp4Nfd5tcybLXz9xbKhHWZABzqLWUnVj4GXratVsfd8psfceRuvovVQaXZD55L7beR2GNsejwG3BWAgZdqHjR9",
  "key15": "4odGpgyvWKD3Y2s3fVwpity7ULp4Cs5JTWggJsEWTSotV2Psz41hZnsUPimWM56Yyo8SZpEdcQDia3611GN7eRcU",
  "key16": "5DhXNek7z8mBHvGecnVqy53UzL8qJmgZNdfBo7c3En3DWUgG8Xi3kUmerhzuc5MVX9Z7HuC5LmVzA483xbbUH7sZ",
  "key17": "4neAhCkiu6v5LnAqnjTkq1bRMhY1Hr7anwc3NEtHygr5Lz9mVTw6eajrXnDkZAvaAH5qfszYaz8CdeATKWCQjpxK",
  "key18": "3x7LVQ9QGdDMKjUrfFGJgbUt85QRRUoqGnxaQarfxmhqHkWnv2mJEV1UUnX87qjihsZewZ879wUxHEsr3E1VgBzA",
  "key19": "5sCEmwuH9VJUdYojEGQTQWSFNUkCkaM1BuFd6tMEYteVZmhMXLLV7jp9cPQ1uoEnf6KQ7PDDwfF8EQWMcxu6oG62",
  "key20": "3qYoF2rcyU44BpNhtvqWDdddKnmMtWgqLdEhaaaN1t1K964HL4eyDtef2yRLpc8JeUpBn2dV5M6Gpc5R9GFuD6kj",
  "key21": "4Mc5b6Sh79Az6D5mVuqmY5uWY1AizxvL9Sf7aKBxdunPkbpowAzQdKLNoMArm2ZNC1dsKb9sooeXKfH82LN9kht2",
  "key22": "3rXaXWB6AgBXUHRsyFttUudAwuYVGn6EnSq8yKGWS23ZboZunD7FBwuDZGrKNFVthWy4Yc8TCnFUA58Xhu7UgknY",
  "key23": "2SXSpZRS4v11Vs4KZArhRUiiDCYiky7DNR1bzj5KdSyFxJ45w5aGohN4HihK2DDn2hMk5CtGjZHN7MHPBoUB2vCx",
  "key24": "3gycmcTmSbgv179WYwDTQR2gZ5RMpngaWiVG5jsfseJz2E5GnUUJeuqon9MRdkx7BcTmvRbTMpF8s2eQkwpkMj33",
  "key25": "24mxtLYmGuS39XBc5dJQe6cii6HLaoCQQFTDFHjDN6ALr7Km5dy23Z6PehEcBqA4KKftvEfS4NzWqjKYCTqBu41p",
  "key26": "4bosnsPYHYeRCaCKhnYGEsZPkBpUbmicw3eay62bgrAXReFP3wP9SEPNhAvUSwvSym2ahXJVukwFr3AuxiKvW6ey",
  "key27": "a3fm3WmMxDEJpQzjpkBxAphNhbtHz5mi5JuZExvFsryHGdqszi1MJmMURwKwDXwE4cFdr79UF9KqqaUYjyCkizr",
  "key28": "5dqqiB99keZkxZeKYxv2LBUWvBqYd4PxX2nDBJKxBrm3gTMCFBFv6PcUD9JCNTEjiZHLpXgxjZuZUA21bmanzjaJ",
  "key29": "48Q7LGfyVE4tUXiHCYCJQbck5tHFwnYucsfqozt3PWpmUyfmMqUKg1j2KgPgU2LCGH2cqbuUFcNxVEcAWz3XNLmk",
  "key30": "396Z9tuKja2RvyEKsy8pKbac2F5Ym9yFDhGs8etR6q7RWSWJGcv2V4VT59dBsPH9E8ysuXAN5nHfmhdJ1EHSqCkp",
  "key31": "2eYYckZsV9ezkPngSmqTkthYjwRpqHLW6cFgYkEGCy3KerneuBtmTV1Rf5Z6aweAmKbHzrg6fs2PPivpHbycfYnL",
  "key32": "4rygDqHLd8BY9vFNTXHkbQrpV1eid73oSxLTkFXu4HMsAsGW9wSUSnjUkNaaT9nF64XHihpSKhmaDRa8K8XUw1Ts",
  "key33": "4MDfJZ5i25nqMKJDzg5AMYbAaYbJkZKhoUuZR13YJhBqECtLCTNqEmxeWsCW7jfqk38WhcZ7AjUKxwcnDMnnrNYM",
  "key34": "38VVW1wsfj7gaQktUiBAFhXWZxHEZpjk4R6y6XMxwwhM8h1SyNBnBRG4rrhfqF2H1nd14ZHywW55cxMTEFzwzGht",
  "key35": "2nAq1XHtgpxe8Qh1Hzdkynn3BNdZhFM3xV9B1hUGtVLYTBhV1HY4nsNzvKUupxnTcjWUNaEPbXyJCxx33syYd8r3",
  "key36": "4Xp9DDXtBxRQBVugYycFQqEjWVPeCmcxNDUiq8Kv7jVZb1wpjWo1asVAx2tfMUCJBaBbZHvigX4nmDsTLdZkV2m4",
  "key37": "2TV5CLhwVQW6g98qpoY3AXwY85BD9UxG7QhAQY9UHHk3MWBqa7m2kpjo43ewPnXSx3CxBuJkd1JtcX4ANXkDu5Ce",
  "key38": "5dxRyAbKUSgyex73kXjk58r48aDBETbZZbQLv2Vyw3o72coiDb8VZYRrMSgDD2Ax939ET6wkB1rBDdYa6RZMUNF3",
  "key39": "2toPfmj6WhC7HFCxGxE2WRjrLnxDvQCRZrkVDfJoinPpf4TD2EfE29MMyCWmKfSU6wBkrzXT9pvswe8qHJe13AqY",
  "key40": "3LiMPbBpg5nBku6Gr7gN2N5thnqiwSUifWiugTzryaG3r37LUcWkN8sT6V8tkKFoK4xtnWdbVXdvv6QnBX6qcf3W",
  "key41": "3WjybGcTxrvE6Jzw9YwRS5cQUoR6HTDghxadxJfQ7yJJ1QXz2es4DkjPp6mixCmfoLitHuaJWyFtoCk7gZu4AXjv",
  "key42": "3hEkEvVwwxr5CPUbwAfCNsBGED69vnxFPY7dvuF7hjsphZTAR1d2fY9QSk4hT8rrmgJFBEdgK9pgCUgUc31wZZ8x",
  "key43": "XQD1f7gWcFYEyVKmo6iHrqME6PL71cNvidKP9m2QcaQNQLWBRtEVWcZXSAWtEzX5P1z8hFADeCShTbU7oC2objm",
  "key44": "HTaC9qge4FphQZEyF6YmAmtMWKunzsan57pXedEQHjupreXrYWp6Ay4j5nvGVWYpwPs4okUUPwBrbAYmFcqiy4e",
  "key45": "3E1aAiFeCyvVfhzXY9AMpiLNBRfUfNCFt2r52xyRdcu2TgSD1svgSrd3bRBU9NaU2VWePCrWyU5MHy8mqnuLN1DD"
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
