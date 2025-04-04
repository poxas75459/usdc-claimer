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
    "wwQSrsifnocn8iTsWW7qXBhKBarjST2jFoM3dqTvSTuMVWuWWvqLzmJRXC2sYcFPDucbXNCPLQJHZJnd9hVMSvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64vRXGF2nyjvsRkaFdvN3K7rQEkaMQt4Wckfo7rovcncnczQbSKzqbNRvnmDtnRhW2CGGMbmmq1KKjfBaZnER3dR",
  "key1": "5eQgBoGHuS25VharqtKytTJanvkWVVUEz6SCrLY9zdoWsPgfvaxJE1JZjXsXXBiEKMqAAjQMFqW5aqssCqPyL55B",
  "key2": "2Em6pSKCiWSpyCQ3jLTnPTVtxW2t3HGK8yB6TUDvi4UW1Lt3NfxjZSXuuAWmj1VCa2usnvNTAavqEchapsPiGwFQ",
  "key3": "46QUdsMJMoNsGcMzTsaXURsoAmzdaCQR9PuHEWEJqRUT3d3RabLaS1spW6BCXJVbSYYrhDgzA9xPwvwkbz4JAUgV",
  "key4": "hXnFVHuEwHTnZTeiYhvAP9CgBL3Hc6wNviygVWG8ggTpGdWgjGn5TMxpEmr9fGbqSiCNPb1ypjhSkANdEKw7ChW",
  "key5": "2xTYF7wvJzJEhUe5HLsXRePV2hTztZAgmN18S5ecYTG6itSzWhC3N7ehHmk64j98iohdpDo7T5i3EHTGAo1GeXxz",
  "key6": "2mKLnroHQWv8h23LtZoFLWdUAbSF4hv4rMSPyjCtvSA1MZ9vTwqq5CLiQBsB1bwEpUVX51ywE1kLF9g2VcccUvKf",
  "key7": "QEXwCiiYk3nNn4fVbraRVKRtUbA9YJwnxJCU5c8trCoMKoS7A9hKs3SwrKnmeci6ZX2LBZ7HpD8RVjBtUP5P72E",
  "key8": "4MVqS1zBhVGEPXtyYwSMD5H1VwHzbZYZEBY8TfZg3Kqs7xoE5DE2LKWo3Y9FY9pzhyaHsiZyeis4hbbCM2rUA7Dt",
  "key9": "AMBceq9u4jzYb8QMJrLG1pmLT69YKxmsjup923q6ojGWVfaWdKgMDxM3FdHm3hVRLjeUyNR24MKr1widpiZ1caJ",
  "key10": "3SCdYbXYeXsVXEuz4TRFsySLLXeb5xPiMLGrtCExZoUxna113jMTMgEKCAWu2wnPVkJAMv9dr3Purn6a5ZKQUQ1g",
  "key11": "4yhGf4KMCR284gnV6LQ4z7EXK6417dLkd3yJLW11UTYdhd9JQqmo1E5dMxeDnJKxhiE88akSjWa1bf8563H1ndzd",
  "key12": "3ZyqKzEpARGV65UwoA4kLRYX3ULHx6q4gJiCUikwXF5taRZyh412VkEawvSNdJLoLUZwoP2VKJLE12pX6RtmgCVu",
  "key13": "4ZB3F6iLJXnXr1HNPY314cDKRAYV5wic65mxsZzmisybJ5MWapXvvLJhnEUtP1w41g5LNpMNYA2m6ZgC5NG8efRd",
  "key14": "R3K7qNU3FJjdmdzriyRwgbCtCtx4kmP6bUfyK4wtg4u8AX5ZXocG2bWWxKZqvLozHQCjkxZV4naLWK1ocRJcN5T",
  "key15": "4cvDNnXioKhT3ZVPhvFfmUQ4LNawWeMEnDHqBAqYe4H3qmf6tzR3c2YvaUQBXevvbDnixU3bpzSdiMdFEXkpu2q5",
  "key16": "UC2C1okznYoetD5zx4YyS5mvqr5HJUMiKgKZ73pQ9WM8gSVqfCkueNwC7Us4RviiQ2oRpJtqxWwspDCoNHsQJDq",
  "key17": "WpnWWmvdxYcbEH1SewAepvwYvLharTiqk318n1714TvZEqpD9fHRyTfVdzKHXhpXSfziNJSLfsni3cMpdedWAxE",
  "key18": "2bS7xGzLvtj7m3dhpkufXHWYcbAxqfYiRYNH6W8uBNxY6PVjmq5o4ScgAX2uFXHF5bhBAey1mTEgafF8YFfKzUcr",
  "key19": "LYLPbcHSjKMdVFy47yrZD8gtXDc3LNkpFwrT6xXJWhQUfzC5D2aaie8fDUVHhvbsyCo4CR62ik7RxAQc1KP1bZT",
  "key20": "5hboUAYFTjMuwkoqbdnPfZ6Nhh41wMYroBf1WocDukyxBx4BtkQsTuTweDZEaa4m6bzqDuZBfgdxAE9dbL7S5nNM",
  "key21": "32LDGJGRg5MWAkHi4BnvcYk58ZGtp2ANQhX8Jx82Wz2S5g22d9n2rnn7om8FtobDAor9hQQg451Sinxc5dYxbtNK",
  "key22": "6q92zD2YfwnZY7TgLxEDKQnpxDumS4se1yYW9PKzqf873o92KtcUHLjVzdd2vg6k78US7F3qpXEqptJ9hTLFhux",
  "key23": "3wL76hPauPxaEdGxaRAdRRwwwzG6Dr96D7sW9rn6H1bj8uXcPFqaGyAoV7yxjgvdCuhauK9YmpkGz11Tm1Z2kPzJ",
  "key24": "3GW7E5aGmYVjt11jT47neJ4x5BPT8mGVnW2bhWQVqRrSbNjoc91wVpP8Hi6kSbLkdpoKscMYpiH9QTkBrXuSBVyn",
  "key25": "3y2i3eSfrBhx7b2eia71wZkzwThrefY3S7NjxZfMfAzAWMnMddbWiAy8teXsKPxPk9GBe7cLqchfJQY6s3CC6jqJ",
  "key26": "3Foy368sw9ofaMW8iEpWVg44x77f2rhTQkvpm2bzFmh1EyjzfKpA71VKkB7Az1XtqbHM4oKuYrUxCTwuk2AuFfa3",
  "key27": "5SgkzoYTvMYKVPBUd88V8zCMy5xYdJG7YTZR6v8aZnBm565axmJpkqcS3k4VNNsstjaPsVpuR9WWSCJjgjGMiuDe",
  "key28": "3ss8SH5m7cVmEA5uk9EXws2ouQqoTEPQNPq4QFv3XhF8YA8u337DhburGSh8t15r8XcYMwZT2rzavNBVSUUGhn38",
  "key29": "26w7rKA1VtLPtdHqv62gfQQVGs7qZPa9biT2VEXyyKHroGkPSswtjWWY46z4y4vp7a5Ui8mkxhFVFK2bCfMPemY6",
  "key30": "4QZMMrQatERwkNY73qcu9ETt4TwpCKoGX5ewzdEP1MkdJZgiyCTHdmqxHVzwJ2BBMnjt7qqLNNQtEs2mnqUmYA4a",
  "key31": "5HQhbPsfxRGMM6cDETJNbz6XGiLqZhR8sQsM154BuiXdEpHZaR6ukMLZnuvM8MWAC6Fgdbs7arAtxqePibAnhskm",
  "key32": "2qNqmYqqUyvwY4s8ttmbtT7UzP83bCgRoNKYNFMqGMTTuULLdsbW1cmNZybrnva66vUZcuZWvZB2BweP3WXL3Jz",
  "key33": "CQzdCrL8ZkJmXDZwx6FZRo8UYQ3CdzierDVTxHTJVZ9HcL71wyYVeavJmVSk6Je8EHAMWpnK6Dhsv4wokw2kEo4",
  "key34": "465H1qBqCKiq5C1voCuPiovNsEiA1Db6veH88KdktesJWP8qKttzrMaav8SN2AAkgYjTmMUS8Mf4kCvi1yMjbDj9",
  "key35": "5zLU5VcAp4mM2pxhjvpuHuMrYVPEywZs36eb3UA5hx83R6ZWPeFEES6Xz2wuvfzy5TgwZjqJkyHUJeQoWdXTzZKC",
  "key36": "5tJsEJQtnP4bfKBzWgtvA7AMzSs7HNBJ2hWTJnzRFGPuzmPLLXSsMKSpLc58A9zfNij2A2ZMGVYn6oFjNnXaQbEy",
  "key37": "FzAiDxbBwL9K3kC8AA6oyFamC4e5wyhks9g2aPV5m1bL6EHeb3DxPwCsbEPGEZcJJ3HZo8BWFjEvX6P7TR4YTnd",
  "key38": "5urXfEBLGeZz34WZMEsKpe93gK5zWT7e7FRp5qsJqKxbHunRYXxkqDPkYoqdZwBeXAbHfa2p11CoR9YxW7atXSEi",
  "key39": "45obfVdJfAhpKNhsekPwyVUQZG2pi8rCmhi3r7Kk4pczUNCwsFXgCewGVnMT3vGy6rJU2EMvNKr6pVeBgNRD1i8S",
  "key40": "Gjz2cyVsYLtuz3RMEnkCTiVK4f7QReze2uTjnNWaEj56zPXJFAuATMMdcYfUM2sDv2fh7yYbAxyrCkyscUupAi2",
  "key41": "5A6Zuek4XB6tvpRur5fi57akUUbBn3LAnjJBYyGtUVtX9TSjhEiDteBinetshTDs2ETzn35UppbgrAT7sUHU6Xnb",
  "key42": "M9HrQgvciEpj3XLZnj9NwLGsEZkRSg4wRBBP69gjQn6zbWD2pgiGFGzBGXyuMyiSt8E8tsAqppr2LDcnrvxosB9",
  "key43": "JLWz85zsknT787RgyJFRbKXbm5ug7dsKfovQjXKj4tWhr7C8JiDpPTGHdYBQpgPJAvziaym4Xc8rJkDFiKvSdj3",
  "key44": "2F1cmZ541JfJix6HbTo6Tii98FP7RFpoPGS9EtMBFA2efLJohtLikriHGT5N2MPgDcexKdbEn5Zr2MdLjDtLYRKu",
  "key45": "3ciFBtTLVE71FfgtpH3EDaqmJ4JUXSQSnUcxo994XXZcaHXUujCR4X9uHmC4Hmdawmqb46o5wRRBgK7dJ6jNBaQv",
  "key46": "2ai2t8SQD9BjcBAKF3TTxdt9At6qUaCfWaAxBdNEoqRseZcRPHFijFhNNTiueYGYG7JT3JzTpNMALHyQcCSMeUBE"
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
