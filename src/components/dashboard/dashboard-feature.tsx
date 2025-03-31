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
    "2PctYrdVaw7b59Et4WV7dcZ2Lkva1cDeTs2bRUKBB7NZwJg3dwsCKrXLSneQnjXeUHDSxx6yrFuGG1XjVMiY9pK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49vsVKU1dsqA2LrEiAxj7wFxE39mZsoNMxf9cGMhvf13RJBjmp7nwrLdQmHgfkrQ4ifTj8iL5TxWKyu2fMAUXDSn",
  "key1": "2jT8yz89EpsV4jZn2HxS8ixRH7zLF6vTxnumh4pRN7SLueAoCpMDUEs6QHW8JVnf1C1eZgHwGhKBARwpDa6gAMco",
  "key2": "4PFEPTnYbBEynq1pHJoBpYmU6DJFRgZqEnSeAiU4BgojjhMMz7uEfGUaDEVTnYCmc89jHsPrELsTmFa6AzQBbJav",
  "key3": "zje77SWDDRzMPKvDHUVYibWJVG5g4kuap2V5wjBPbSKAff8jE9VLeW7pmkHLfUAUrs98tMd1VFtECgbEQ1C1M2m",
  "key4": "5ZMVtfkcyqnzYcsJD1dFTFyDHyyzgKrktwsM4N76dKa1CfGNcFddz71rmu38YNt6qnfh69CoBk8Brp6cQGK24VrG",
  "key5": "27thkLWLP5T6QohMxEsATMVgN82if58ykwqK9C2bX7Rj3JCrna2wtb1JF5X7PGRiimNu93DpJUDBhRspL9Bo83Co",
  "key6": "jfoHtTk86o3tjk2exQbGM4fdu8wwZo2ZfF7p5ac3bUDkMbHG9SNPAbPzPeqMh4GRSDx8hg14dWzMgoYKriJooUM",
  "key7": "5dymvLcxjZEYzsg8wgNqVVJHwjc9tuJ6Nb6YkUmJM7u8pEtjcTvCzwJTGtDzLtgeF4BHgZMzi6zNcViJaqVM9LW3",
  "key8": "2vmK2GWVxtEEvvuE2NbYFpuhziGQNZ2eZnXT9BnDeasxjRW4UKhiLXfmUEqqB2xHG3FGMjfNfPezBhxNCt24f5Dn",
  "key9": "2o1mksGc3eADY8hFxkHHK5oAH9EUTgLJLQBxzkGcT7b27pRa9dJnSEt2i6VpURKnqALrRh6yF6Q1Fnm6Lm2ijRfg",
  "key10": "3WdhRusycCW1y6VqxjopmzMkiEkQzihq9exQhsadwmKkM7WDCMcrkA4YSakvBw1rBP7in4w9E9WJRX9AScQFkZp5",
  "key11": "1Zxg9ddcCTNQddqXfFAwGakirZDQ1tXjB6KokhXEPFxenSgzWQkkxiGvqdGYHekYgPMpLFhSDmDRDrCTb9Vjea5",
  "key12": "22SHM2js1xdsaVfKMQpuCbkeRKF3HwMZpEnmkaCBgT4VMPQykJ7MMZqEThEqQiYeiXynEL11gjtV3RSazz3Wp69N",
  "key13": "5JmJPZsW2v9VwStPkN63SfXkc77gFy78oMwjx1bRQyZGds1azjib6jWfTL2uRrgSQXiBjrbhheQ8yS6wVDpGcq6N",
  "key14": "3cUFpRSb6AP5dasEn43VSazu9HZgn8YPSTUGC48GfjQqYCqyfCpWrv7RUbmLsQ3kk75jksZVu9CDTVTcj7FBV1Y",
  "key15": "3zkKBdijirbv6yJU4hDJ3ut9mraaB5s6yLUBYZv3fTzx5PAts4mR9dNzrvA3utoT1g1XcFT8csRvywWwKuzBqwjk",
  "key16": "2gVVULMwn8BVhpLZev79L29xm5xYxVnPb4FFXKKGuhvA7J6MgN1qoP58vuCmaaiYd8vaJjhYfHjK8grerLTg4JmS",
  "key17": "34CpYGWhAAnGiWyXzVaxNe4NSuEYZ48nWV4RBHPd8QhdXQZuEo4HeyMsaUzjXtChmcgFUpRxRwn1r2K2kehgYXK2",
  "key18": "2zsy4nRhYqr28HGGDwdQki1cA6uDiQUqKh4FfGmUTBCr4Pt4hoNhZN9p8SFYAqSpXbNxWSwn8Fp77D7ryoaeiFoM",
  "key19": "2BFoz8vycksJd4QYnv6cwnwhFNkQfDqGTchHkNVPWUodznYqabGGgNTQWPkFCw1U7SvuLEhs6sZZyLLHecazE5cM",
  "key20": "2pA2J3pZEp8Lrxg6ZD1BkGjFFmDKFgYZ7B3cn86b8b2AFzs5RknsKkZMsDi3mdyMj1QcTs2JJWL8fA2wm4aGDigQ",
  "key21": "CkE8zA5FXcnh8MKQyV9J21o9pegWWepC4HxZapFfCxwEdzJfunPMbDQmzq8vvUAyFwCtsMNywRdtFkAWXQtLCzy",
  "key22": "jn358zTx2xEimw4PsR9uu64cMECEivi2k6VG8GLcTMmV61yZ1qstKAhKF6ZChVdaQ2FZrd7VpM8vvZgPd573X85",
  "key23": "5dVBGwvaF4gfKMWEdyXvBAiHAkk29h2W55D2jQs6xSY71FBUDwwbcJJ74wdpVjBPugbHcJcbgT1Sp4wQaFmarvDp",
  "key24": "4HMMCdVbPRULav3fx6Y3QZanmPJqgN6HGyLQL6i4kfJn6ZKerNgwi3ikeVFeHj7UTyPJhZxpjJtsp4uAy4vDUTrN",
  "key25": "KYZbzzTgLy8yKvSeQdX6ktyCvBbZk1ZqanHjDDRGrqum67gK4wyJgWVdNJDU43Kp1n4ytsnpUCE6sFxwocQzENS",
  "key26": "2TZMBnUJyuwDRCLfMY9L5PixGu5C1QnFeqCeff3mKi5vMq8DjGgHzr3d1MvtNZxt8wKz6kTWsCAWySYBVcCs2viH",
  "key27": "UESPLETKrKzC2breeKWZ92VT9QEiWoRvVc8i6cioTxmZp54pNfTS6P9nU9ZPNL4qXQv8BSy76x1BxzMUpMHjwpa",
  "key28": "4cN3Wtz5FubTT9QE317vER57g4eWXhUZUTsp6njumHzg1rjiN6FLnfv9MH93Qa5zq32RU1nHEa5dh37dwLSfrbp5",
  "key29": "2hLUiPFbARwoLRUXErpNJ2gygcYYXSuTnmLxhSDzTLZ8udWfrs25WrziW14a5ZoaodQjwdCx8xdbDXwRLrmtqHpg",
  "key30": "5aqL8hguwzkAWaqMjau3uEMpeQJBZvRb1ahTC7KeiaWNoCKbrZkKrhFC6zVVwamvVzMi2MLn3oAdBcRkvZwezPrs",
  "key31": "GZmnoUFQ45pUCdcB1w475E8dese6dfJc3JcsgjktBQAE6SJMKWaPX9oobiBSxGDfZsd2xE4wJwsKrgzvXVrsovN",
  "key32": "5UcmuKAEYjSsPH2UKgrWZL36wwSokRHHLhzEidLJAEjtAEPXXzJ5WvMhoaZ2NKAYAQT66xD3NCuxe9BfmrWJFCAc",
  "key33": "3ZvaQDtAJCZ5VpNA1p8yJLTwZjrN16tTSXV3F2szv9EgbffKhk7KiLhbsKku8sfQY1e7FZKDaTmRrxh12TRCM8wq",
  "key34": "2sjCpjQGo9Yf9Afmhb6faCeRbEmGGQ8FyeG9yba5FiBieJbzaGwfN8FAFxDCnMRZpF2SAUNS6XBgEn5gSbMMiLFm",
  "key35": "3Cirkp9NKyePfViznmNc2nFxPbp5fCWfUk2UX49BoeqKgZzsU4Sk73NRwMWo3ty1KcjcQ1X2UtPz3vaRe4VcgNYs",
  "key36": "4NVoAET1Nwb9UkTeB4GdfGW2XDX3cLx9rdt8QS5n6WkjrXmuU3vxq2MJK8XR9wbEQ14Uk6EKoDrBVPXm9X94tSyM",
  "key37": "5iFHGFuFFUkoW8AS1gpMbtP8wMvSvgbEooGudKHjgNVKboChhorvy7n9b9HTE7VXGiVfmQUsttsE9e55jBHf6b4k",
  "key38": "5VjMk7nRNScFgKAV6djkyVKMZD3F6qhb6V3zgGev3j7DzBTUHYPZQ9Cmvg1rnxahPiSLBGhGJdUFuneWCvbtRLnP",
  "key39": "1Dy3KPvaAgmoejkusrnSshtWPho11gzLQBMJ4y5qMvKFWHXPb1er34z4YrLJAVaw3gJd46nVcgSV8YWJtMTRhSn",
  "key40": "3KufnM4snQRBDkKirnGzs5uL7gwNq68Pp2gvhesvkxhU8MbFaYtQ6VUBCCuwxHkSQgxatM7J5Qnu5wW3UDT8gmCg"
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
