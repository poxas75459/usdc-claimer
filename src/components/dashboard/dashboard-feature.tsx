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
    "ZMSr3nqCHeQeavEuLj7QyfxY76x6WNnnJSLEKMsUJunFBaRFA5PCFXTUTsXHoGTtwuKV93jEgSX3NFpBHJF9Roa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TMYGGj6dFiZtr7vn1CKxv2qW2asEixMJe61TyMgWbrAMdySRDitpiGypzuUTDdLP2sCFxCoapo4gu2PYuHnyyyD",
  "key1": "3BYjMBQdytChHwsP6zWJNs3HSqQBhsYjBQtbGJDNrZiv6Dicyb5ueWb3ai6Yu8CPBWffFS1wi1xxpiN1Uak5yeuL",
  "key2": "4aaSRUNXWqc7TE2VFE2hnkV2uT2wNPxJ2XP4LykSpLyDij29qpuWPdopgmVpg6cuYGwv4Xo9fP9BuUyQk7U1UuD6",
  "key3": "5iGuNndgiw8Xx6qrafRE9tzRsrxyzhj5J7RUfFuAdX8SgRRcApi26EFnhaMnKbEWpsWHCaGAqWdFtWLwxVoUuD8r",
  "key4": "28K6bLeARJ6T7KBaipudLXsWKtDwiw1R2BGt2EW821d96BcFSNFdLrcNP724i8zvoFYLPsYAzpM7xtzUqKZHmxzJ",
  "key5": "To26kyk3zzJdynVpnZvrrK7K9d7zdzf7EJu7qwRKW9eabiYLrbQhkt8E7zbkmcUVfc5nfPFVK3wSvriLi6UXGYR",
  "key6": "4Jq8FjTTv56jp6hpsmj8Tdp4y91TZ3iBTMFWff7HLpZbkow5KYt3cVgXGywovrKxrMzqdHtAZtnwF3Nfoe61jbvH",
  "key7": "3Q69jgG8RuQEJrCmFRbDum7MCPZaXG5HF3yGN7zwSQGk9ZztN6WEdJQwU9Swr7NYWmQiEDAqPS8y2kXa31n3gCAZ",
  "key8": "3KPw7r1fSfQB5zBchSQBN3d3Wr2qXDBokAhP5RYM7FWRqPk5RQYkpTnLsL8btDnfx7cgAH4C7h2WBRjFeRxuasBF",
  "key9": "54rkHMegZK82AcnaN4uGpqjTDwieBkiiDDjpmMoPQcquyqnB2TUqRyDSTkphQDJe3hMmgkVRvbkumzfxi971MLe2",
  "key10": "4t8sMjWAP72SE1uyisxG9xFSQ2YbmwiDQcYC6ypAkNkwZ5qqhjHpoMrs9cKBdm3F9LSbAoMPz9HCdXWdmVVcCwNW",
  "key11": "n4sY3QsvhFZQNatYh2LXu9dFpULUxuTdTupDdBUYv6bRXnJGgaYqJ31AaJeCdDjs4bXsqpae3C2K9xBxMWcYHVq",
  "key12": "4zQzFpp5rAjzihHgpXPjTQrB4xFioLogW2a7GAcszZXEDASXLjvbWpQdwUbuJE1WqCdGzto7EdGgnS24NDofLTq9",
  "key13": "4bHMTZmjVUMZwcGm1tuvZpPEcDWv6H2zsi9MbDKnAuXSFMsKeGAWBPSmdt8WoUG6kPV44MNTz7eYJdPDnr1XpWCn",
  "key14": "3bRXda4dUtsHbVJPNZ1L2Xa25VVexCjncBWuCryxVRyi8rWhc97eovrtAtKXsG9QJWfh47c3W93Hs6cquLkvrHuP",
  "key15": "2kbfjDtoemvNPzRTLPEyuwmqDF1vbmXg9Bmr8Ri19ycHogpRbKsUri8gcMe86Tecw8RrFYtXvFi6QMy9SaFkXKY5",
  "key16": "2PFZQATpMwZYdvMiu99XtdYnhpr3jvXkfU3XthBn8yq6FoUBQJQqb6k69chLBz99ioMHHBoT3P8BRE4s9N6qUEkC",
  "key17": "3YF7bLUpC9ajeHG9iEVoHX6ycAYEgVrjju6au3W8w2o96ZxihBv6iypJP6iLgZQhWUCGbBY4sjGXqH2J4AWc3f8r",
  "key18": "4Fuv1thuDb5X3PxbBVzKuMYhVhaGDW97QB7vgZmw42nNxeeNUaznF2TBDdBaJdPnh3HcNuxgzPX3GrDDoeY9X5WE",
  "key19": "42QtToy5Et9hA9MUetULhqW1jrFUH7HpVPR71cexaqwMEmA4rBE52Vk5CLktATp6PJCGb8XzGxJCzxSM3tzbz7fP",
  "key20": "fzCiZacjtsMR6V1jFkpi8ehPQvd97NAqCBuyQ28mu7C47yFo1oWnG6yBDQgDygSKfcsi2dcYvowj3WGUGXR518K",
  "key21": "2rTTPcLG18NUB6eN6JizPhWg81Wbyij2M6jgNBDV83PDfVrdnTdTUDNjV25CinwKVxvSJM5B5q8VBTS3SqFnozS2",
  "key22": "5L7cf3Jsv8TTE1rUbqxTyJTdiFtT8xFnuGp1Xug1eNaTrLksqeyduLxKvq24wDnA3EuSednnibQmKevf5c5FwJDX",
  "key23": "5ZuziYTVSQN75VDmaAzRpDadLzhx2jxvgsqJdvqHAgySag3sw5WAZHBTgqRvpjZg6uHDXxNgZLYdHpFUMsmd5jXr",
  "key24": "26sCm5z9mBCK5eVTPy2T6QXg3F9ZDQ1Viw26phuup8HMHNXzTFQ1mQkmLCWcq3DubATRKirNagK1dixRhoEZmm6A",
  "key25": "4PJm799LBiU9h8MWBcN3rhJE9spTUbwwCBEC8SFTbN7AjDRNHs8mSF1R6zupcreUSYohvnHMRArsTaG7bh5BSq4S",
  "key26": "iWWbPaiqPccHdgKYgtLZWAkWkoXsfW6HCMh1L5AzmUkyKNFNTYGzCJbRLJrMpTsUvM9CoYi61aPKzuUgkVkxvcE",
  "key27": "392X4pz37xKkCpunzH4vrVZAegwPnyoFmsDLfvNDDGXwSxf6UpeMW9E2xznQdcsVfHKkxPKRAAtroAJrSvxpKt1b",
  "key28": "53GNgF5CbgRWVAx9zWXL8FTEJ4h4o5eozprxgYmAJPkUT4RQy79UnSxyPUQoXfUXmp4Xfjpf4eXU6qpo6kyhszHk",
  "key29": "DJVQ89robsEvrDyQeuCir4fsX3nYHjJbG1aqzAmxxKM1hyUdgHJCiKERuyumFaUdyf7roq1rbUEFHemUZwT8ey9",
  "key30": "hDzCqEdCKToU3oyCcevnh6KCQCeNxb3Jk1qhNsn74xSSVfd2aNyUDnStSdLf9mNNVbZiw3csnMcmZ1iqvX4TBbu",
  "key31": "3CQTPQjhRNrJNbg9CvKFHCDSAWDzbHVvzK8YMQmJjT4rCun5sdZgixAJDNNh9zd8AB2Exey8M6TJAmAEySjbSvqe",
  "key32": "27CZV2iLEEvtfohNRCA4pqi2ZVE5rVw8prQvgGoNrLBSxz21zyyiGDjtuMcvuYEJr2p8MXGuzU3gtw4LvHdkpjfb",
  "key33": "3TTGeEyogKYGEGdzbRdxwisN99wC8mnribZXFUR3kdU7fV6KQFwrKFcvjBswtZZtL1UyeMNn1xwaV25Uw8LWq6LV",
  "key34": "5et2d7KDWabGhcLGrs3TvHyq7WTMDuuGxNYmBfFpge2MuAAy9gQmqq1aGC2CehnwdcC7kimwiA6ZuPrrbAp4ujPB",
  "key35": "24zR8iuyT9cmZxcp7ZNDMPmoQnjjhLGrBD8naP9nyZn56peG51HUxyoc86t3EuUgfQg9ZB3rVnJGsy9Ht1RokMEe",
  "key36": "Cp44JnE8SiuFDzjJZa1Xb5Rufv1nxtnEk9wYevi7T384DtdupoDHBmu4yWeTgJ4qqRKyuH2hykjhAXRHnUSQvn1",
  "key37": "26mDH77ovDDBw4vf3LZdbcJmn3xt8W9zG9vJJxRgRboKkRN56jpdXToiRLz495co2VQzq7SRCJUPncLf42EkyZrv",
  "key38": "56kDoeXvRUmxdcxV9yPr3zoYrjhfBGJXJ2G89zH7jf7SMT1dcrJbBCLUYgzHcU4wWf2FCiaGzZFPXp1LZDCXW3cy",
  "key39": "5t7NjKQqa3FD1cVyLLhRqqzMfCCcFs29UhYFka8zs8HxLEQB9itQVVYW3igfA8zBqhE5ZTnXVqiZF8haWG3vxwYy",
  "key40": "5YprChuBdh1qw7RtjVuLUeqNQxPr3XdLdwYXokQWGGN38pgRyNkup8JEz2BZXgSnhFZsLiadtAsc2ZHn8E5yrnhb",
  "key41": "2mKHyhtQ8N8eaR4jS1KLJn7STmcLcBvM8R1Gpap8zsJtBx6bVkP6sjKHXPQjcqC9fpiC2QaQT1qYaGiENDYA2SiA",
  "key42": "5W6wB825kRxtHrDQE9LkTfBk7j6KW5h32HweubfkZciFnWf8NjHZ5PQ2kxLXwSrHNDEcQkXkfJe84uMvF5qmcTNC",
  "key43": "5oRs51hf7MEZbA8XRjgHZZcmzQvNjmouQwFTfpwGm8qiSkZZbRJNiuyxJL9xh9cLrTUeRVttYt5birUYRcEJooYo",
  "key44": "2t7LPNwt1JRkqVwx9WmHjpbtwhAer3S4KDiS2WJPKb8aXhnggsTXsidq3UbdCyP1YK2FDe3No6kmpMvwrwPcVyDF",
  "key45": "4ZRUQkrVnJeyuDFKNnXERTJ2K3Vy4dnmKgevC98ZzDZvC7J4UqnMpZ7XF8WzgQq1bVkFeMMdueVQC1teykujJMTr",
  "key46": "2VWgJTAe73eKFAxRNJ48ttp6NXa2oHvcmeTRRxcDMFm2RSzuZ7rXu1e86H8FJXV28YgRuxsvNkwBZNZ5qVYqARJg",
  "key47": "57ZsLKJtpZMApA9vEDZ39z6f66A5EXSFUKZBbV4bBMTBH5fnvdms9SxgYjh37CYqgbTWdS5q2bqzkqDC34UtjbR2",
  "key48": "5MW3D3Py2LKRzqw5V1DXMkpdUQekdMHM3Ue1jTfY6LNYvS6KUZuKqmchRKB5hkKzm6tmAgmNJPCbn3ADiGui5bz4",
  "key49": "4evR6o8XzFwg8Kwfc3A2d7p2Nq3iNqCT2XY84MQdZnDN5h4A1H7nutauT7dSTRrM83sYmxMyPZHc9YTyuJKms11j"
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
