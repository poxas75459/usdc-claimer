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
    "4U1RpBP37TpkJ567ZWyYrN6gzgpms3KtXcDNRqwvZs3Prb9WK2ahHjshte1zYbe4UPCNmRaxtuf4JontULvt7z7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r4NtbS5WHwDZRkUAKpdDqhNBiwrTMEZ5uwWN3e2qDg5LyLyZVyi5PTSgFCDVF8NpCYWRDvn3ZTzJrt8GRhpWgUu",
  "key1": "4DPvp4PWCr9Jeoi3QWfFCoQS53hgdeR4CZVc24LS51vjVgvuUsJcZLQqKjCopFP1Qy65DQ1ozjaUf4G8FrtHRSJq",
  "key2": "4kvAA741Cye2QQNafGuc4niznm3mh8Fep89GPZYd4QbxjtJ9DtmPczpY47K8XKhmeHpQoEqHoL5qqEvUiHvA7Sx",
  "key3": "51jX8g5gdNv9wtQugLpNmhhsig6HdC94VtzBrshwPdv4MDzSSzo3HDLw4EeHCmTkqW8ZCRAJdWgAQ4Fsn5cwpk34",
  "key4": "d9vAbsrGM4HWm9DqEHm6sj9FDc8iW2nXGfmpQhgN4pnLTgLcREubC8XzL4i6GzyDRGzgyFesQMvNLvaw8wEF7zU",
  "key5": "3CjpNcUtEU4buiAXm5Rp4Mdde5Gw3AQShoffwgnqG96iaNvwmXKgs2gLEH5rqu5MLcgUdbYR1oCUDQ9iYHRERTrk",
  "key6": "4U9qf62786ZyxJ5cL2PoT8GQWLAjFoBd176XumuKNQxNfM91xbN9MRLPeijL9oE7zDN8hAKHZhQqYstibVVgcrs",
  "key7": "2vz9q7XwHAJfWL5BjVNGabLqzL5rruHtkvsNhyLNbF9P4W2kTGGh9b857Rv8HREaopTwCrD3ii8xr6hU8REcVq4a",
  "key8": "5YfaL3o3QnFuUGiqKggxfWEwxfAv2FdSaof52bWEqR153GDJMypfxgY8nS2mMsfaNYaLRpFJi3Kx5EdZBn5gF1Jw",
  "key9": "5pg1Rv5ExbCU8daNjvWfLE5o1utku2cpgDQFxK1UF37jv2SwDmZbg2RnnRhaTdM246AbnDs9To1B8nfDnWmbtEuB",
  "key10": "X3DLX6FW8naefRDPQ94Bt1Lnw4HUbWWLuP5J2n4xj354yHeRwTVPkXMM79uiRtJRtYGhSyuFRNAafaGo91zNmJK",
  "key11": "3Pksuc6uAhEP8316amNpCrFRzzpmbiQnP5TMa4yhmnm7EfRJKzW71XHZTumDAsfPoWs4EBbvg6vnuyjAqLd55d7u",
  "key12": "42hTrPnRR2fJh5Cg6szKUYuufEenJsjGrJjU2HKPeHVbUAsY5sXMjwMsMUNgo86zjwoTsuLDCiUFYcwBFnR29Hov",
  "key13": "5QsoJhYR61SvQXfB3W1C8AkDk9gjfJWvWJMSowaTCn8U4RoUpUzBqyA8HTpfafv1fcrqnTPmNocg2j8baGcTNxNm",
  "key14": "2WNrt66UhCcrpAPaiNpkg11xXdkmwdWRagFc94jJ7AA9sdedDQNsccQ2TJgY1reDFCgmWQFhWyPixYLDAydRtVUQ",
  "key15": "3fLQbeoMEXqaJNv5GNvxArMreSGACvDMZ9CJ3ZJFqoti1qVbBH4hsB58VQaWKzxLnDN2HvRCiP2M6Ww2mjdYFhWR",
  "key16": "2LptYEpSQ4px21i3DLvDZS4fJUPPCNpvH643qHWmBxrfqdKGG45Mw6CMQr7kXnoofD1agarUuc8aA6QYTz4vkEmC",
  "key17": "4PzHxuzdKPoawZsdBPG3GqaJkR1WMXFLfhzn2D9AzYAhNopqvXkrE4541q5dFy6aK4e2A5gM85uhUFQVc6YXJemK",
  "key18": "SwjFgHXYZVgbHmUcw2xn96LAGvNfwGXDoqGcWYtB8pQEsqCTA1J3ekm2D3jtAqXZJpJdqoLoxFFAuQEZDqoG47a",
  "key19": "229Vh8cAMV2UqQrw8MQSMpTiSsQLoUfdpXyzh7uBtBeDC4n7XmHgZc87VXHT3M1mPTYd2UyFnZU3AgxcJpraQKNy",
  "key20": "3YQymmhaU38J8sxb16FtEbGqRX6ieQtadHtkSSe7fgVNCQP2TRbGhPa3DNLQhQBNgPfV3mXG5hx9Ev51ZByYpwUf",
  "key21": "4BxSyXad68eqV2D8eWYbyiux7GQV8u15vUSuUjadmqJ4qReCTfwnvHTGjoWfe6QebqC75rWbhwyULSZz9NxC7tKB",
  "key22": "4HHBemCL9vbMXwVsgJJwLX7hHt1xxUfTDKaYG12sFiZh5yaM2drmCRDWJFGVVnWRgo2mz6RLz9G2sFscJPUyu3wL",
  "key23": "SZ4ordgYeqssJz7LyRF5FhJ3fKEbRF1t3nqKHQtTVy51ZeTFrjhx8iyexCv2ZvpDp1b3638Z4XLVA5sdLVgbByB",
  "key24": "5LJu6npZhz752iPjr1twzQGX5r3NJUJKH6KN2sJkAL8rwsMJZKwzJ1bUACH34RR8jg2Rxo6P5xpfbjLTdNDZqV5F",
  "key25": "57fPVf57peKchbQ81bVYhVBQdSGom9wdZN7fPY528efMMSrH1GpbebnZ3GCeXr5zsGJqCvVcSLPy8dyKctHiPws",
  "key26": "2Bv9LJAREoMNZxrpecp6BYuAdHMFhnfWkL3qLzXfhDVkDwbAZj3A9cnS2eDsV4DsshKzkz9opoqk9wy2cS2trQBQ",
  "key27": "3KnmTi1379uGvqigxhyCeXtxwAts6kLqsR8oXwPD4JW6cFKzRDX9Gu2GBd4Fg2a5jbMmuUJXDFtdc7NWcWQShTZt",
  "key28": "4A6iEZVoKBaWdCdSqCTBTCTAhi2JE9M2YBz1B6hzYnre7dmP2xCz7xXZPnYbJwNXz25wBa8jxE9W2YCtr63PYnt8",
  "key29": "3Duh2ftqnSsD1nNP88Ken5QvxqbTQYMHYk6jMYuwTPpKjbJAtAcnaonpriS8PfoCkxWvkwF7FLQGtiR1DqLAZYn",
  "key30": "5uCwZEiRP5fVPz2tPFXDVkTexCQCYyvwQmvnR7TVa5u7eEUGqMeM5tXVRJvkNQKazbavRy5GNAz2m9mLaVq7Jz8c",
  "key31": "59PcB4YobJzFxkPQNXFiMiu5bzx89np6ePLvh5CdQAxN2P493UQfKWY944nYCT9cAtf74JEzAhKHPwYJYtmQL2R",
  "key32": "jq6vVRgNiuiexEXo9P9UUA8s4yeebURi1LfEr6qGWt1WS7etj1hEiZCFfDG6t31ngoAQ5EVXeagcLmJ7J3k7vn9",
  "key33": "43EA6uf57XWqbvNSfDPdT7jUhydcSADWPftKs3hy8LUTMLoqVdjVfqTuPTVG3baKg8UUJF3yaUG197KwV6zt9L2q",
  "key34": "4eawaBPzPaymCJCPbD7hbRbmPj1W5uU7vBEWdaBaXnv1pgSYGTYfpgyJgptCR355b6JZ127oddJrHZ6cptVnLP6J",
  "key35": "4wdKsPFWKzqCaSPNpv5tymAuH17sGkUJ9nagmik59wq49xquxjHmW9k3bEDP3kosjmGTqepp9ZoCia6wiNBPaeg8",
  "key36": "feQHxYJ8iUr3ZSSG3E5uKBBMTPx31ay1zkyMuQBMmcRRNVhJ4mEzMHu2rmdHP2KQcvNh7Lwh3g6BHA3M9RgF2XK",
  "key37": "3Pi7SZ1A5T954tG3JHZ9hoEp7DMWXzpa6bdXzQa6grA13Uv18QtgMpesYhBisGQQqap4u6xCiyDJMHxvJwe4ayMU",
  "key38": "2ZZgcVMgnw5AaJxLE9gM26cFDTzoi84C28XVw6V6sanDaSHP1y6g1W3y2FNQRQQs2byetnYMS2uiSZttQKjNhqPK",
  "key39": "3ccoW26rJ3DTzhV9WScEAzMumXamYMeScunKq21MttBidZWp8niMtbPTrdqPN4kAbYvwNvQvCv5jq9iKHgUuCufY",
  "key40": "UQsmsmzu7ijsksfdJWoQPkjcErUccV2JiwuxMRKTDxRFr5dMnrsTg8sKJNLzHVnotuP3TRBvrtUJLfx8kcPhqNo",
  "key41": "3cUQsYqZMBpKroLhi9sEVW51Kzf9oAMfMcUhevZhDgMBoR6KwExbB1xwsrujVQ5WmKPDGM95Rrq15buy4DGaC9ex",
  "key42": "49mnhzghSVELdAsubSiHmv7hgJdXvQ58Q4eoeGULNogiDxoXrFCEAkFamusDZ18bWXwVGFTFRQcsYSjQ3M1RZBF1",
  "key43": "2n36QJXcSHWamQsqovbJZLFFKKEqDR9Bbwvp8rg2apxpQe3wmczo2rqzpwQytqYa64o69BaGosoGVSZJHCQvmVV5",
  "key44": "5eFYFSkbPb13dwz26kfbsoVWs98nFiJcpDZWzpyfxJxAVjgUkRmZ7jXiJa9DMGA28ioaTkFryhPmMxwr2kjszSh6",
  "key45": "5WThRWPZKgV9efydbGhWTDdn4veAmb845apwLE5Kfr8ZRgw78t1M4m5hWJUDqQnpMSXnfC2E91SzBFTybgcqZD1n",
  "key46": "4DJ6K2YHRdUeiCVQwP5kBrNrWjEEnhfrnHzYxBXjYryCFkbHmNphu4WBXGHnHUB5EQ29JT2gJZzYWDD4JsajJvk9",
  "key47": "2ndGZSEp2sg4chr3bZUzo7LQvGqSfnuVdY1sUP3myd23bBshqUKjW4oYuG3JBsMSSc48tcFiHTPUm2WvYmSenuYr",
  "key48": "3qgFiVtWKEcy2XbTNXEG36Tm5A2XcgmKfUKWpxZvuieyf6u6V6nAaiddyLe3aocX286oeRtCvvTshCgtccbcesKq",
  "key49": "3v31icKFeWvGfNqiZesnejGZ6syrqit1hycewfs95L1j1sn8ALLxiVspnz3ZLNBE8QN1DGzqum5KH2MN3G1j9KKR"
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
