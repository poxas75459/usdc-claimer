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
    "jahnmY3oqeLf9hxUe4oU1eMeZpciWQcx8afxzfpkVgM2U1GbjLADRfzkyiET2Q6CBLzPiJHokNj67QKhRXUBfpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NQh2cai5t96tnBmvQ9psHsw9nKeLorZwP9qgwURjPnU7dHc2UNEkzu9R8YQG2dFhTsTGXrXXY4ym48XimQgN4H6",
  "key1": "bfhmXB5CeMx1Rtc7a3AyT4MKNcGZ6MErvEUJg3qxwBq6Hg9Djnw9oVFcgoGidVoWRH2kyFuunwcsGwVyBXafrpd",
  "key2": "3vDKAUQVnAyTXiXccqyyFPgAqjQxjSbanrP65aaGhaTz9nEnZxmwv7Nc6g7ggezqt55vEC2kJHrApT4LaANZxx4",
  "key3": "7jQvefqyo4osEaKQLrGx435kyxNbWWdqb6r6t7p3JprUPnZon7tu1gCdnASToVVnfxMCRZMPrKX42SNwx1RbVwb",
  "key4": "vGx2xPE3GcBinXKfimj8sjbtHik1p3k3jnhLRV7FZKPSw8zNwfjU2iPaNacb2CeMe3mgJAMcTTdNSPNF3vqDecH",
  "key5": "4vv1g75rcEzmLyTq1uvy5SCxamkhCWDw3tFmtWKcNC2LH5JzA8DyVsopJLKWGeZMGgCDZXYLnXUfmXdykWT9noq1",
  "key6": "2xy4QPmcB7xFHSQWNSUsfhb59KMFnyXb2mvepptjTMi6D9bubaWbES6owdawacZTrfzrSJAF2CBxL9TmdefaK5qw",
  "key7": "5zRFMKdcj4AcbTWtt4rSM87SMrepgGiTFxhZunNKRkvf4YJHNtnTEKVfoyEAsNB5Pv2n8CSWtj3iitCveZ42AVN1",
  "key8": "4qj37cmx33j1eH4Y3UraUMVWN8887KKURnuVzGcmSgd7LrtstEKKwk9CK3Y8KWc61XAq8icSiqSzdeK7cTnGPGmx",
  "key9": "2iZ8gcsER7XeSEf7mDtbZtcf1uLnUQiXmActed2vdpCg7Xv5Wt5W1zwwFPfa8sfQgRUjXgD6cpp2XNSMGvaRDZ3r",
  "key10": "3JDJNwvRaLCgnbkF67n4Kh9sHXiuUPDwcQXFdPFaH7QiMEzFJfykYXrhDpvryChWPg6CTz9s9d4uK6ntK7CJ2Ky9",
  "key11": "4fMJjwT2yREjTaimJxmzday2Uu7KTowcqvpJ7H2xP8JuJxZKqjYsVxjgnfSZu2y7pDuwWPJ77JsnLMUEunf4JvoF",
  "key12": "4vecxaapYP7R8jQ6vCLjTyBdCKLQEYYHfqZFiMzGWusqQaEmih56TAqYF7PduwQPrDJRbDuCyUHRpZWsb8SPMCee",
  "key13": "GWRqXRYXQjmdbJKejw5j6AUgZV6Fhttc78HwAzmtTHmwJTvKReH3mYYpewrLXWe2pXMGVf4Q6sedWH3RQz8iBmF",
  "key14": "5EiqtDa1ThtFJhkNxvuwbp1yMF5ZLMFvYwYJzrDcLYpKzCzhB9hyXL4iBiW11xsoDueEjYDtvcTfJWrL1H5GBjDs",
  "key15": "4mfMDd4NpJLnE2CfRtiTZnHPPc4BkT9NZiAwMecRAv3tm6MTmkNeFZG2bPJUR9TP74YN6qxLjanmKBuKSYJKDVu3",
  "key16": "5qBWqtayvQ3cnezYFkNCmXXaWpehwF8mrxzeTe16VHcWjRrj5qSrJ5VgT7STKTHoZRvKxymsFpstHUazpV7Y4Em9",
  "key17": "4zvByoNoGs9SACn4No4jRTDR5am9d1HaJYjv1x6fr6wcqhUYaoigTnJzCjf1HWLi1xX7Qaq2xYHAvqNFvCNmsdWq",
  "key18": "4SmCBgrK1sC9Ce3t9PfhQKCEC3wQnDf121DeoRzYyn37BJL1UdKdoKHiWw2xmmU2uQjVVm2iySWyywwsPeXMi4qV",
  "key19": "tixi8q8FLiqtnTbYEqmFpCroSrtg51bo6gG2eRShez5P2S876VBiH8p95Xd9BuyVM16VLmeJyv4EDWddpUvgLGU",
  "key20": "2WiqSx2QGQpAyfkWVZp2LNQUoDkiUyeHe883a6viGtCiMMF68prY99czJnBStdZkyTYvHZkLCfCJGfDDLyW8SLK8",
  "key21": "qzer7kt5YJSa1tbBgYNg4Ci8a6u2MhqM362DsERggev6tduqAfeqjwPuQ7STkvQhqFu7SgLER5BAwMUpMsufvFJ",
  "key22": "3kkKtg46inpfY7g5NRGztq1FHsTbjzeKwynBehRhdibUVhvHVCcKkLRHM6B4a5YhQgpHNdreU77AFPDNaS4t7tUv",
  "key23": "54bwj28sgmh189jYpMsyKtAYwfxjijtY8gScicM3L2zu5RmGDmggjC4X3n7bA6KSPzrLyXnAa9gZGLrRS7dVjJtx",
  "key24": "5exzGMTtGqC6fkAnPVEGXG4xUuv3BENYT7qdpjaczNgE894eLiXif1b9nr2VibY2vqzF8aetqbxnyCrQTCTW55jW",
  "key25": "2L9Y7G25mPfGLrWYDhenoAuWKLwVrkmpz73h26tW9g8rGug77QSeNt8xjiMFHPPdtoXAs3FgKNNveBKiJYU1dpVd",
  "key26": "WNFqmMfrvrJ94va3sQ1kzPtuYi31TcFfVGZgjpDETLRGLqoYSQQ54Gx4cMw1vyHp3rHss82x7WSE9NDbeNXReMP",
  "key27": "4sNHq5XaePPQcs3FKiSkxAjtfvX5iD8qSouDrzUX3B27VJiRsiQ6UMGZDkKdZt5Hssiv3zSCvebCCvf96zzmDh8j",
  "key28": "Mv5rnBoSx2Sb78b9NLvKzRppyNN6KuLZoPxE1kpevfZefd2ntTEW7AduK26NYJkRfQKbK3t2HEwWRixZTG2sStr",
  "key29": "4LmVc3xkW3fYGDzmZxXeGs7TvaqQPUrtDCVo3VwT2kMw4KnU6GhpS4fbpxuv9QBFYE7RkdMjQhu261e6DriKZ69L",
  "key30": "578muhJm7zGP6iQASTKWhuRxzFPGTCBVgeLvnbJEAFLmqEYye9XjjC4EH6otAafv8o8c1gX8CAUEhn63z5pj1xbc",
  "key31": "2p5zS2EBEEAC12mFCCebyTczkzp9E5qjdn5ia2Ctpc6No1DwQffiUGSQy3RxQKp1JJmXJ3ciW837pPhLri6bduq4",
  "key32": "VmUcVos7SeLbKvonTsT145FeFj62x5ocMbceT4cnkiujZaPQxWxNgK8aFJMrLBFArwtagDCQaaj8gSKDQw5pxQE",
  "key33": "5LWgkNBKxxmaBHV4ZEFpM7dPUqKH8it4H3vtFGqoGCSFB871EsNVN5JgBtvH6NeyugtGeRcStxiPocjzmtRiTdQZ",
  "key34": "624N1ZP1aQcuHctd4tALtEanEkreY93Az8zCz1MFBHn9nxoAvwKPmAfauQeR18ux9bzbCp7qWrHxU7sudPXEqusY",
  "key35": "3oyjUDD9CsxQLcCXmx2eHFKFsuTyCev2vRPvWzVPEQgXQacEroAUtbha3f5sTuwLvTG2VS3FdSnYJsbZHp7zq9eG",
  "key36": "41oXy8KGwkQkiF54ct5trE2hTJZGeRhXewFSJrc5EMm7XBo4XLjhuyF925FiCzTMaq4UKTBsVHmGqLTkQmLHWxf9",
  "key37": "4kWxyedw8Y2uK18NsuXHtKhr3xMuWDAng6aEk2KiSNu4rD2PTYuDKRXGPLDTBG7hoT57QWiqS7qMxgTYJmhqqoQm",
  "key38": "Jn5cDxB6ATah3u6VB73bSHvF39QBUm2BDD5pZSj8WiYnL9d1pM3s4Z44yvuY1BG9tkRHEqvvSn1pyAhdhVzeFHv",
  "key39": "3pMaG286b91dxSPXBnAQx2JNbBwynFoWrFn8NG22Tg6gnyE46UJR87rTkmXYM2tofxz5Qtcjnn2La25PnB9goBBF",
  "key40": "4Heiq7KkUYWnMkQAUbWR3R2d1dNdzCvv86ujwKTsHTDRv6HK23aweTNpfSWjuvXvEPKrh61XMKNUrv1NsMZqvwW2",
  "key41": "3ppLSyqTRRSBFfuaGgsYKrUXmYhRMiZ3VMNhNGoH3oq44Qx75YsDSw8SPxAUwwuFwMu86fFryVqiVGcjex4fHgp2",
  "key42": "3e6VCytc5hsLp7L9rZwM4dr3JaFB7oY1DZqR2mZ1wWd4bPB2Z9tSsrYgoLGveCrG5LcXjBvB1Xqs8RS9Nc6sgB94",
  "key43": "333QdYaqLZXFDrzfz8VCCuMtupL1eiy1BmvT5tyQAN6otaq3y6Mm1Qvm4eNwZSPy5pe5RDHGRX7wGXgGMCY7RjGL"
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
