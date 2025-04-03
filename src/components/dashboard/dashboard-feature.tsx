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
    "DewAjqamhnzXY2Tx53xN4gFbCc8GvdBDNH2566MQ8w7L3FwbXgw2nqMgM97phC94dT4BsucwuPrJTRNiRhubVRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HTX7zGbTWjAQDmWGoRp74YLvztFxHrQnvW5pYPrLa2YD9y9WyrUrJBu6QyAvj3V8pzxo2vRzpKsTGjzphmGYe6H",
  "key1": "2w8GRVdtM5RyPKBJvVqmZYxzcu5w4g4Zthw2gww4EZ49BU3g16KPXZ8inqrxQGiZcK8YzDUc5TKp5q7zrLqeFCpu",
  "key2": "kfH9bRjDWNFGRNXkGpdZeg64i9imyb4BG97x7MDXmBJiL2Ucfu9CNBYyeBpPVuSzxEhT1wXS4ouwHt21AVApkuG",
  "key3": "YbWAzwXQwFpeS7HWLkmUv9goKP3H2mTx4kZGfjeUd9UtvjkwyBg3qtdp37PGWp4dzrmiKpwbauQVzHC7Tie6xuW",
  "key4": "28vtC8drHAEuRSfxCBypBrhSjyN4PakjHibdfJEv1vdF19iJuN3k4fCvqcDSpJd7BwVBihvSQjHz1xcUFN4tWBCP",
  "key5": "5QGD6Px2mgSm7jEbnGJXi6zEoSFfkbHcoQCSKhpLkC9yeUT1kWxAAq9QjbL5C68sWP7UfwvM8RizFZy1kzaEWchB",
  "key6": "2LqGQuDa37hVs7AtSv7ckPP4sMqQgxUceQ4XwkdRrjNC6QsJvrK8bDusHP15EYiLoZEJmRmjNjdHpJEpfnKfTtAv",
  "key7": "3KW1WM6fqbYV36H5UE3ks9jPPPcnHKoxE5AaEeZGqUARAJthqcy34TBBdFYKTW8aaLrLzm3TPyhUkrn2GUpSpBXN",
  "key8": "2H2dkiXqPcfZM8QR6Ewg5Tp9ijNRqZK4QjHYL5eaaB3eTYoEsHkF7gxBcVb3PAaqi8XuGq3UYNzh8UF7HocSNJcX",
  "key9": "2JwhAUMAzwuGFnTTUamZbTvkZihDpFxKxMnkvAipc5dHd2HgtUo9VTf2BQKSsfrAfhmLCd5FVBy4kbwpLQQ6PT8q",
  "key10": "3GkqtQewMWQAA1j18qmcpzRVGisfXpA5mZFhLcCDU6dhDWX6xVLqo9s4JCTdwb1dkJ9fwrwbRU1hvAriQVM7edau",
  "key11": "4Uq68TJmFyEoMY1GbBTEFPxk8wURqHVuNgYX7BNRF1jVNV9To4wY625AqujtNSDVY79PjgtCEm6NzpFktRXPocqV",
  "key12": "5TwfySGvUkPtrNyC7zHdn1XMe46bLmeA7odqmMsgKBC5NKoM7N5bqNEc5tSFADtjHTTYe7hqaZze1Yyyc18JqtD3",
  "key13": "A76RyUxhBbmm3Yv2tWg3LueyfnbPTANNsAM3HthtWDPDtfbKquZfdtPQTsQtQtzvpb1PZaMvFRQ7U91nWieZrAy",
  "key14": "3ERgAaxnkM9s837oboa7SLKHymLpv1ouHxqK75zkFxWjn6hKosYLmZRpe8gUHvUawGDQKS3upPwREC6KSzmAutLL",
  "key15": "4woWAqvxe79Q85vb69ygPBjK765jAzYiWzP2ymMTyJzA5Vs9zfyxxa6v33WpvY1sfECQV6cxUoHrBJPKjAQzT33t",
  "key16": "5EKnF9khNr21NDwsHNck4GaBKbGNQJo8qoKP1gzUBxsax7jHEMViYppT1Q9LA9fqrxpJJppabQxrvq8xCWoC2SCi",
  "key17": "2bNzkKjsy8NbAEzbiJKAMe4WcV5od4M8pXf9sRdUN2eiFAi2NibRMwpH5w4KupjwHqzWtGUNDKuxhQZ8huHFGHWW",
  "key18": "29UW2Hy3NYKAAY21mm3Dc5pM3h6MCy9oaFDHarMkkChQzMtwmY8UT7w9hyFQ9x455TScXwkk6RMeA7irygx612B5",
  "key19": "7t5eHtQgMcWRveZtifxH79NosjPRgdhmcrjJhLtrRRe2Gyk8taumamNRDLRAbHxqZEeaaBZvrpVuT7etyafaWNh",
  "key20": "2JTPeuxwdE7p8Y1p787rPp1ExXYrXZBubAgiYWeGDNmncTPwRwRSfryRvxHWKt8JUkHJjJBqjbxjaPcmDgS11D8v",
  "key21": "5YfQ2YwxHjhunxo6YCs4Cr9cYBdLGjJctTmnQBLe7KULNNcXj7vEDjkTHXc2xTDK37GEoPYimrN32nj3SD9XJgLJ",
  "key22": "xmCRqLrGHidRDNubJAmnxuTRJ12b6Nd3T1sr78xEWALJUDzmruWod1eKkQqYXGaiiK4pGCJVMFLpnr2PVLmevA9",
  "key23": "4w1BaBDcmr2ZHqN1GHwD5xKcHxpija1eeMkEiLXm4f1VMRCEured7mAzXqSncJXbiwAerUtmcLyEoZcXyVzjx8ir",
  "key24": "5hUrjz6S5jKWbTXugU3WV8b5h72KwzYrjcX6w5XoYhMaGPa58i9Mhyi6s4QG6A3MBWuMpRP5j3KMRsWBx8ET3Nup",
  "key25": "3wGGQQhuDXQcp7QfTAZTL39GZW3qp8XGe23eAm8kHbeECbtS13tYnR2dN2hFCzYmpZbamjyfcX8uZBMxLnzqyKkC",
  "key26": "tAeR618kkEhWurBpGU2BGVh4r7Kve3L7A5vQZn6LyNGUmsG14qZ4o6Ghg6S4yJAyxqsxkCMEdUTK7E4KqK3R31y",
  "key27": "5hfYPEBdwcuZSkdo6RmDNXu5UUpbeLCqKK2sTmpgv2xFtD7MCBPNA8UnQHZYopK22dNEXVWN9ZQ9oR7K5sNFKY3g",
  "key28": "5RLh8uoahzWjWAZRtFiTvTe6Qmmo52uWYwAsArxV1CNW6zqv27K21khzoRwZKhmRi77yD9RLGr7iUqf28c751ynH",
  "key29": "36GQr9sTfzKq5XYoLtyEfhKw9sWnjMLCQMSQWVRE9TWWfuYXcMEzg5NYVSEN1upMRM6JBVtLKeqm8TYsDhPzb4at",
  "key30": "642LvGa1DVBigYmecVYz26Dnadoq75fc5UXiaYBRC5RTEqFdtu83UC9NGwAkqvohf48r6G96neLZ4yzr5RfxSqeQ",
  "key31": "4AgmYtNih25s6PMs86habz7dAUCZK6rGc6rnjfbQh8F2PXCNVfcadPw4mCmEmN9wzP2SB8XoVbxMjzUeXQoWPWhU",
  "key32": "559gwi9qhMwLXpG79ZXwpbF7PkpGaBqdTRyL9p3dyaszqBye8rhM7c6uxRfifNHHvpZMGCkAsV3V8VmmdEYiVoaD",
  "key33": "3c8tqkp4c1AuHkTuULUxmP6qXjWPFM93ifHxbQ22qm4NxRe42JHq4EttJYYdCDM52Two1WeBjfkaXtXcV77eZrTM",
  "key34": "3ZFM7bQCvcVV4A2ohfGFS2LYeX1GgmQiqk44rTgAANBVQehb4Aihz3ntRpwLj1nWsuNsqvv1Hb83Sbnt2SXkt9Gq",
  "key35": "LkvwbF6gJWbx3fb56poxwbhSZUKh8NMcxoJGMWt88nJmuXfaXZxMECiWrVef15RToPFCsc2pZAKA57omDDRqvye",
  "key36": "qqXMyuBJmUKviRAzkiBLPJNWgsNA2324CEhZgMbSfkpp8jGtEGC3LDwW2oe8xPndvExWTVruoU9wRCPtMovhcHP",
  "key37": "4kgVxUnpxJYoYUa6WCbcBQfMkQXm5UqjhetQ91pPLUfyRK5XNi34YBJmTo4DuxucSmqiBiFAXtj9WKhPfiuWgjor",
  "key38": "22NxRiE9p352hB1bchhSBfpwnZeqXDBP3X2cpRbryVvyVytvQcbKF8rnkri9qT1jKZNWwHjnm6cMtemSVMKjbnSN",
  "key39": "57T7vMtHRLfoompriNt2GQidmELcQjDpndVwXmsZg5fBuzWHdh7ft5qLXACDRaqsfZiM7QsDFgtZLm75ENEThNKm",
  "key40": "5hQpbwtrvNjap576T7dUwmeU5cgu6Yq4WGYSgVHSXtyK6UvRo6cwwg3ajhrvrejPgs18xmq9ek2rTkcAAqJkc9HM",
  "key41": "xELepF2XL26MnyXmVdv6Hv6WsKpoFth8HWLTyfsdBVGHduJeHWs1hw6iDBjhS2HtiizZyWKFkkFBKHt8EvQwWFj",
  "key42": "31y1ivfqYnzZLibdw8xkwdCYE48Q1K4qqTy9QpG9CD2aSjo9XEaaix3Mrvt97kbFmfDZRNaRAD7tpyqzdwuGM8os",
  "key43": "8XmNbiKpmvGDyBMh7TaWzKtKWU3vL3VpnaFtAbc4Hsu4nzsdSKiPHy8T99at5nJK4sBWJQPPuLSgbPPfAa8XNMT",
  "key44": "3J9RtonZ3TWSiKZMeu8opoN4uTFLNfuuDwFVYy9wbbykjFvY7exY3ZH1Fu2458PrKo5x1fS2zZWGsyNPxMgKYWWs",
  "key45": "44tvVmTft9VCNHrTQrPJhxR34qq4zctLTYfUj4BzeWgXbxhWbtNtwbi8gjVixqHm7FLrDsBq2pAWiyFvxEvYH2cj",
  "key46": "4m7gLY9WrubKWuquXaw2bkWrBLBUafp2wjgXGndCFkuGRJknZVw9iDjmSL4qnLg27e39quf9n1gLkUvXKsfGV5cQ",
  "key47": "3BbAktwzaQTcuGDxiuuvAYigq2a8V6QY72vzcgiNz69FZkNZFxtjiUQGxc8hXWo2mBq7KkhPUEbYaiB6oFzdPGR8",
  "key48": "3VZSPXJ4WRDTr6K3pDUM5DcPSM61jYAqJ2xpsFuFCTqoq7YXf86P6AHyWr91T3Lak1E8UmE7hkSgE5BhhiX9CsCQ"
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
