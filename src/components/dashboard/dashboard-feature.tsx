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
    "2jZAbryp8sCcUhVEh8XgwBt5YKu7B6UoMWgjN51L724bMwtAd7TwygqgGuAiJPyKawtEwphkna4CyfNFXg4kxMnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5raC3DFikRvfxoNehzMwd1sUgfbUYPW7tHGUddTXRVpwpMJP1qYfjE5TD3FnZg79d1YeE1EU5adpmKjC3vpY9hd9",
  "key1": "3KgFocaE3t9YWTSGfeYqqVYsZPdQrzofbn8GWbK48YNX6R26g9E7MY8Ht21ThGTEJeWWBSMYtf4FHJX9ByPEzL6g",
  "key2": "nQVE6Df5XaEqBVa4iyJf1FhXiFuN2Wg5UGjd9s68ze6MwrrxqbtyE7yR3Ufa2TX6EWuKpnNDGPUbGeAfZvU2f2F",
  "key3": "4Ta6WM6TjmukY4hDrVBDTQMtR2P7SeJbGFUQTh6Eg8faikVXtNEkRUwvjJDKczpnsju1zdcmeNgNsQRTRvGKfbsc",
  "key4": "2SsP7rF7eoU92nF7vk3s6znQdhEQ9XgbnUQB67BtE7ExiaxyPMneWuPtfk4axgQ4TULSL3k7jLPdqVbMGUTTrWZb",
  "key5": "5kSPrdQQFT6VSQoVdKpEGXCCLKMq5NDfhSugLVdARQpnR4haotKZSM6ZNrBuBDuNdxi2ghUpmZJ22z5DhL4xBL5z",
  "key6": "4ccCg312MPnmrGqbEheMi7bXtWRdNpXLQYbjKH9hSzGDVd8whGzDixKQCC9oXDcQ88p8BuF7ip88bhDPwSYT3kAY",
  "key7": "cwZdgcv2Eop4ePDx7hYSuXviGwphQzFwo5VS8qYF8U7FfH9NjjpvwGYLCkqybUMRpv7jTRbPbNCKhBPkrT2XyDU",
  "key8": "4pWbzjijk7nD7sW6rspYQMXRRQ12scVqHnLRnCcZp14DtJvDy9y349Vnt2TrnfCyNTcMHd8mCVCRY8nGBfEmVbLx",
  "key9": "5weG3TeuWaVNHzAQKGcywkxJf8tNx5DnqS5yTGGdRf1FP1XpBr6DCk9ku5YpyDusyHNLJvotPd4GSn49jtnsQ44B",
  "key10": "2zaWQKbjH9hhv8AajhrKpYSmidgAGSUW5MBYcg7AFSVDdKtg7XiqTWNndRR7ABbdQ7SThjvzQAJdaz7AYF7qUXqu",
  "key11": "6qZYqTZWd5Zkzkhq8drQPmuRkTEg5onarigqdsnC9oLxk5U8JgCXPAhrEJ69NuNbb95T6xq3pkKJrrpyhMK7cS4",
  "key12": "3RnVCuSo3Vhcg2LBn91kzMwdLGEWBF93y3L9qJQB81RbcTuvqakMF3QPWghBB9KYSjaEvDoRvTfawChBmb6QDVf8",
  "key13": "2JDnwXBFKwDDYrVJZuBhuQ29vUgmGmpqGhyHy2zYM9reZdLSePPAf7defYCLsPmbozPuaKcRZHa3V9CfX6FGNuGB",
  "key14": "5AX1BFD6V56eM9G5TyoFuCw96fZYXm7fgm2Xb6Ug6jk8vNwmjcWKNvVh6KdFR1rFiKd9Ny3AcRq6SEDs7EaCTRfN",
  "key15": "3BYzcoRRimHgewUPKdtq2y9xATF2C1rDh86YAakUK6YjEPGpWE4HyGmecSgcQYoLobzry59VkbAgYEsMmdrVL5Bi",
  "key16": "4wChwWgpSRL11D8ds1w3yG2sGwrQWLhyxgyQKrHuPwM6gJXha2zX6Wa4K4ot6M4Xi52EcH6WAP2JRxhtU8ZR9cHs",
  "key17": "4ZqZAkk5yKDB6MRCSymgnwFuZtsXAjLyX49V6h5BjF6YRuJiCiLkoQ2FXtWamQY7Yrv6BFbC2SiKUpdJHNS4omFW",
  "key18": "2SXDWLWZrcZ5LqAt7H6SaGg8aJuyhbvZ2YqRdEuRvoBP9pq4f9A81ycuMp1WqexL4XvixErB2SDu7NwEyXQLTCtj",
  "key19": "5h1EZ3z458ZqhjZ99T82En2WWoFSig6wjdJ8CrJzKUqni8G2SvPCsRUmUdhLtBCFcLDuwxhzRsuxZdoU7XQPbLuN",
  "key20": "5DGFfBjqW9zug6Chps9rLDUek1Gk5J3p37SQSedRq1QCxk7rmB9siXrBNatFxLF1jb3HLpcSf93MTsWU5eiQq1gJ",
  "key21": "rJAWAymRZMa7Z4gKkaARk8UATYP6DLpZ9KwEwobiuPQasSUNyauTAVpsJiKkRRF4BqJ8TryXeEMq3GNtgKhsiqu",
  "key22": "25PkMHDfyqm8E8v1JZdFUt7mnea3cmR9mBrD6SFKvLNqiu8f3sXAsG54Js4KqLk19FUtv7bgf6Vd7uV968yEUkL5",
  "key23": "44vn8XPP7WM7nHDCv8xxrESyDwbuVt7AR4rg7HygR2qbSBgzYi6LDHJeCE7bGvqx5YGnNYoBAfsW3eHPBZzHB9Uz",
  "key24": "4V4ZFBWwHGdiDgz7B8fqF4SVuPPPDG33phZUgBip7vvsDW7k1TBYsZDurgKzZb5GTsDWa9dAksRvR9k1QB7fMduy",
  "key25": "2x9ETerj7oebqKjxe6cAmuCmyHqnLuGqgz8xj2fSXzCb4MXWjpstsbczyF1Nrj8fR7nr2YnpNZ2vN6ouWNs6DH9h",
  "key26": "4yw3hasHzQL8eqzTvjTvX7XA9tzq6cocyVwBp1Mau3Sh9hQGXtuYydxb6YWGofHeAwTx8v4GVxiogjBSJ9XeG9rY"
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
