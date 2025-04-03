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
    "2tvKXznt98efQcdNsMda4mmc8cXvkDj9NRbm5mdptVjKMGkEmiptMthVZTd3kMbRNxHwyaUmDBidrfzkQE5JtWaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yftdb6hd1mDpbsJyf7FZ54k7KJS1F2VEhXj4nUCtg8mm4z2KEk2FxTYhBpSYtV3gRm9y2BQGbxzdBrQsmkTsmrh",
  "key1": "ZhpfNqFr31eacEex9n7TMG4dra3rwavx7dxyxfeTB6HTUKyyUMZtHGkcJC4dV7x9VBTuvWMTTmyHdKW4TeWFN6b",
  "key2": "366AjbS87dD6ZYBGmJJpnCg5mwaianuo1F4YbpGzmMC9ngh4T7Wij8pqf1YLvaEzBuRGxgMsQGE9A3QtfrxJaZXu",
  "key3": "2fyiCa2e6Eezvqnx59cgejAdyaLF3uJDwLxwaDW3SkXnpsejmwBsQHrPSKcgdnYNHoU1ojiuLAPfKmrofmcg6M3U",
  "key4": "2WJ4fFJh1vNB3UF3bMbAVdSs6JaFVQwJPnHLHTM9vkb6q7xR68g6F6Qtad8UtWvP4yzYTVDnYjFXzwHfBVU61PEh",
  "key5": "2RWAyH35m1M8iBnWeVF7qLqQFv17LFWDkuuVAHJupYMmCkFQMEr11k9yhFUX5GazmN6NNA8UbrLWXuNpEXLiym3o",
  "key6": "rP8gcsy8nAvgYs9iJ6RrDByhibJ8qz5xg3LxefLU8YV8kC1uoHw3qaXZhMu1Lck5fgnCMDzJ4DrgcrJTgRiWpFH",
  "key7": "2j3j9GLJPW8RCcHQoARgLfqpJRUGdjB94UdWNMkhzjwnd9Y4tD4V7Pws3JYTtadxqmptmQn2U5zuGhWz3qJ6JFtN",
  "key8": "3KajzJ5WQWqb9WQM93Qdx7tFsbCoWatC652KPZ66ixy1xgNtEKwLvW1S3gYJsWNqV1dNhwbZu7dhJhuBdL5SrFge",
  "key9": "2T7LpXDzKLKzMfVpb6vWMPazRWn2ma3AGYyYpTewwr5i4s8vFizGzezUp9PW1kYU1fbmx38ZQfuWTZyZs32FqEvZ",
  "key10": "tpD3Z1AkfNtfunFjNBKaMxt2zwkZDg5r3rai1FZrLNKFf1koedxhAFzyfQ1Q94ZhNgGxkbzTmRdWGDYNd7YictU",
  "key11": "4RzrKiBquViHQAxseSwtz1BCxHAftfyBYEkyWdGHt569RJbHstcChtGfJfyJCxbZEGFA2e6Pd3zMaWnAct9LMNBo",
  "key12": "59FShSSePUvFxSqC1onXBTtHz8FrhvwiVzkFtH122oKGDuwzpAtZ6Nh6wTK94xUaLNymgVweUXsJKyGPMvwj4hEN",
  "key13": "4VtiL4tMYJukjnv2EsxoWTn8MPVJ6Ee9KziMwVgLijE59cZeHzcr4fx2xJsXXBcnUBTE6KLN3ozD9nXAsyR89VRC",
  "key14": "5JT5CCauifhTyK6Sq4ucWWfX6ew3ShkjBEvAWTXAv5HEVZicL1mKKzq58AVdZEx2PhKpcngHwWGqohfKfUzxR5Lb",
  "key15": "5jW4gsy1caJLwkDVEuChTmFXTYefp9rc8hHd1Pwd8fD4jU7NCVdDtGqtTxNEttycaLNABVxokqRFQG8v3Z3ZVFTG",
  "key16": "5bV1k1Ho9e3SmXTnc1jkbgZrMdVtB3dTevqUy3aefiTLrXZQHyFMDjysM1mW5qQvC3Q3eS1ZuxZ6BhFf9cfwrrzi",
  "key17": "SET5337SJw6pZ2kEnbmEcq2DLLtYiYjDwuq1LSK5HJomrs8LqcGdNLsUEJqXiqNiVUMU7zbYx5RjsBuiK7igtPY",
  "key18": "4tZ9as7dCMThgZuK78xKjhAuwHbRudk85Mt6tVeeMLMY6oNcppsk7kpK8ZSPSpWaqumFLw4ZrwVDMujAvvUgTd61",
  "key19": "Pxdsd1wuk4vPb5ihQuxwiugqvJydTJMNQX6awdFXQWH7AMzrXZewHpSa9WcAtZTwcuuuVHbwVUmaewcmJ4Y27yg",
  "key20": "MexCPv1PkbBHbLKqM9h4X7w2VNyyPtLxfpSJxTm3FyaTewriqkXtCcdDgPeyM16sUFcMmfZgkk1yyZmAnJidUdc",
  "key21": "2sUyXnwvAxP9BBeYY1XT1cPA1iHrDZvonYJF13kr6tntvjYwCWYRTiCJYktSQHLunWoHPwLCq3GHmKxj7XoWNBpJ",
  "key22": "4nvuFUBP2QzVAYZXokw7ATbz3Nts1iUakShra2LdfoKW1F1v5hESSivvVdkkN9P8UDf3aNVprFukXwvzbYWgxYpL",
  "key23": "2xhMXcT6TJ2XgZxbL4Qb6Ew3GehvT1Y74E18qmh2tzpgejSCAJ2a2nDVAxVVK74fT36sk7r8sdtYhd6nAnMsDb7W",
  "key24": "4sVjguanUeFbgLbF5jwhgcFWRrubS9sCsnCkxpEr8TZduCU3VjyT3xBL4GEPhH3TMxBhQDH2nogcdB3rECnTEUwe",
  "key25": "4PqHqCKFL7sXN6sx1Vboeu6EDAhd1759bi9o8tHEx23gx1AvfyimprGUnLisC9ApP6iTEvFs3o9f96xeWYvErkRX",
  "key26": "637ingKxnYUkrVXRaSmjqFkHdcB5QCbSUKs6FgTvuMaEjzquanQK1XHGScuAb3E31nVs8g3PSgvwDhgWuq2xkh4o",
  "key27": "5ttBRi1zLkptThSozsmpAZYjWnGU2JEaob4W53n4w9diE1pGodFvvsps3rrSMsoQpH6Y3g7WmhcDmvGY56xzEjRP",
  "key28": "2uXoozwDL7vBUcR1L3rpvP6DUjwNWrfpZJhdfNawbbV1vApdrmd2dg1mqByG7GgSxa3jbC3cNkaDMNPA6wvmw1rs",
  "key29": "4WvbmtBWzP8E2ZGzMukZ6E8uACrwcabN5SuwiwPbVYM2fLkiuufKu8CAFy5aJvR6CmMbtoeqsNyzNPxVyo45JBrL",
  "key30": "33zuKi5MAoT5QcuPKuKre8AG7nGFKxerovCVDq6SvKB99h7dP3efKveJYnVxjB4fo61rrB5SNvdDfoEC5SFGPKwn",
  "key31": "3ykSg5PCan1Ux5rmy13R4HvLacppGMhyHigBmUyXSCSSYWsuUHu1RiVUKYUbwCeDtSqcKyLDKAAGzPWJC2Tuqxc7",
  "key32": "31ffngqfHXpMPDsAM6xMtbEiR7C1Qfgc5sjkNYwQzVc4NgB1MnMPTH4kUT1xqRXD89BUJJfARNJy1e6X5TfAxw8Z",
  "key33": "5WQNSq43voRbz9xELYgoFx84hiuZXQHXCAqzhC3LiUc8yLcQMwJtE4cNr8Neucv5yP7bCeJQ2zcnCQsgQpTt2izF",
  "key34": "3ah9QvDrDeLKd7NcjYvDzNmxuGpJDX3HrNs4MPMebPyTir5JggKEdnftztJ6SvQ3EPbrZEb4PwqhRqYUy6Bk15Cm",
  "key35": "127dzZoBcsmTPVgvg5PBQAtTCDU3bo9pVpS9JpyEyJDdMfY11coY4Y1MFBf4aNhGU7JKDAmH2838GcqMpGseYpM2",
  "key36": "UNvp3UrsCoLov8u1B9TFE4Z7rReTvWDSeLxoEiZXKSMM49CMhqC8grtVZsXwCCdXm5kV6Sjqj67vvky2PdsX5f8",
  "key37": "3kZHVCg92ZLijgqBthZS6NBT5hSjcazX8mMuF4HY9rqrRw6goyiueWpREXiLw8v4DkW8UXf5iGVZvfG1FV21Jx3T",
  "key38": "23VS1xeQeRtkZw2ig6UfN7kRqE5i1wgVeaaqJq8cuPBKrT3CfUA1QUk56NHa9UbqXsdU3TH1VjvPeHQkNifPmL4k",
  "key39": "4bStxAxknw4wCem4ginudPHwWK4JKxmJ6j9FsaSr6XzZqSWJrRLGntpuxGEuJC6vwY3yHQP42w6gL71tD1nUHy1V",
  "key40": "2XatNvYFmoXisJZor6p28gsnPB4suqcaCKBaoUAxkbjrr47aM8cCbNb8HA9dMbhAEfNJWcw4BPXALcG6uUbt58DG",
  "key41": "2rNF8Qf6AdhTVfj7Dz47seHajTA9MtGJ4hn2FaK81X7rtqY5GKkECboJrMWySCQBmHxQRcmHcNMCJU91dwKLp2fC",
  "key42": "2wMzWJiN9Q1MU5wm5sTDF5RkmiH969AsM8yepq18fcE4xQZbUi66pYR786qcHk7F3BqZpje5Eu5ke8yNwuKBNSJk",
  "key43": "5R1sRMdeCiErvDjBSxk79eSv2HX7Jc1faW9HeSKoDMiKkvzbBkr3zHQcA7fkTSHoyt92AkP3RULhnSCD1Qf4Y4iC"
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
