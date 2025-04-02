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
    "2hTG8niwmk1EgE5ULpoUcSSmQxQVAPKvLpDeG4c3w3aaRAGNCB2TLvuyjNqPEp9uvENWzueTfSDoRgNV24aTiFfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cDWC1YzeNZVQUq7em1KvbTcpdRAs9ZUPQABDrrRwFUq3LyiE5KBsRN6SXj2nnMVnkRgiH1bVGSmSyj6p59zJvTu",
  "key1": "Uio39y97TdG39yfBdWSbuBHcKHdBDxEbJBdiv2oFTnUxBhFuRwqzvPnimUGkNGKpYyQ1r11NFe9s6hTgU5pMaMh",
  "key2": "uM2CZd1SLYH4E9h34Ss93S6Q7AR36iTR36KDLMsVEGWmV9m5eMQFrN9bT9TLToNQ32AcVgU2ZGHfYoyWu4P8E1M",
  "key3": "3pFKmY5dfjXEGB1z7ww3SXJ92UanxrTkucQF2a8NVUM9unL1QKaUxomt2WeZ7SPa28qmaQ8mGMRv855o2hgYtUT",
  "key4": "2wdDKFyooxykc3nFMc88zNuKzEu8vgPPrjW7RN3ftw2ouD3srtmvfYEDCv9tZgUEF2MuQ3eobDtE4RKoAZFqEAcA",
  "key5": "2au2WhhFgHR3s55HBVsqvu6Xk9kzyUpKGct8XNfPVBeqFJbJLoTLks3uQEGoKFJzdvkHMZ4y4KAwAzevrmZN24LQ",
  "key6": "49tnybfJi3jJm4MupBmfBqvjax8n3V8LMvTFNi98EDjxqSS2GLL2ZxFG936GN7hEHkRhvGxDJvKvuoG7RBb7mHtN",
  "key7": "4Wbz5rNjCmnRpJnPoV4k8KkNPnqUDgQqvt3q1NYrNb6VcyLUbN8bjXWBk9qFAaMiaYqBuhBVmPzitR1NwcAuy9LD",
  "key8": "3jciBCbUM8TeHcBii4eSHVwMfyL2orLSEx5TKyFihaeFGUbVoo8E3Vj4UtcAw8GwBfd7xDW7Fc1XEuMwDpFqvXEV",
  "key9": "5nYKJ3Cb8t65r4cKG8GiAkrkL8eMjrUBHUb54ybRLdXiSunXP86yzVfkfhJyq9KhPMPwLiY1LfAYW8WKgAhEixpe",
  "key10": "23i4P2a9WLyscmVkjZ83Sr9RnF4MVh7zsrjYAgyJxNjEWWCyvw1Rbq1XcYXauR2r9ZBqs5ihJFBngGh14ykNCHaE",
  "key11": "ATq3N3VjXUrSv3AHahtUGpjs5DW1vVccmxbDnk6yzjLWi7xuyqaiTkj4x3VyRWEoBuNDcfnfo3k4ZRzaLYwPMtQ",
  "key12": "5VTu4pLru2wgbwgRutuJtppgVa1AhDEdXTiqNcMEF7HgUvBSionsp6Wrt9A11YLvj14RrBTrSoFRJaa9VxmA7wN1",
  "key13": "3nY6kTy4pQgp7iQtxsQp9pR4i4WC15kGmJ42Qj6keFNi8VBzgdBoUKGZcjCZUUB7WCN26CQyuQMagfGmvPpXTCos",
  "key14": "2gZ4wwUTyNoUEU2N5cRQoCUkauvWum1YGvtN1TLArERGD1f1C7UB8EdJqmKDbQGhQzNcR6Wtxn6JHFiisXPPwqTN",
  "key15": "2BkFWHAuPnvigsjYTfoF6x5wX7NT6uJxECJgcnLrvAeWv542qhsqnmedGczyttkh8stAvmQD7JEFGhG7G2cUZKWp",
  "key16": "5AZ3q6uJdKU3SR1cLYJ34nhTQoCnKwMfpunRR7ekYfzQsdoJUka2msgrJdAU4j7giRKPcw1BGu6ANfZKcPtpZBA9",
  "key17": "4g152gfP6ARHsuu43KBGB7bSW4akf8rB6S52JyNpcma9PasmUjVV8T19wXZ74q1YjwVyQB8MoQSpS7Qq4myYiULJ",
  "key18": "53zysQpm1uapXNGRs2RNFMpq9d8Hx8mBXGTxr9r7dFVLQVJzLysfVEv1hpABERwV32jhejVWrUSSmTuxuFsEasM9",
  "key19": "5w1Ka1ZALgpcQ4P3shFDN6rRfRoYr7sNVH2E8YHesS2zFiGuZeQceSGrtVLJv2UQXPmeSQ41zFERpHBBkKfWYae3",
  "key20": "54AsjjaewvfJSU16Y5TV9fxbuZ8HHcMWUMs8nqsJw42LMpBXN91SPe517xXsdSFkfqMf1ky3Hw3toaTFLCXHgRta",
  "key21": "5pqgpGtFht5jymuLQSa9XNXuiQvvvUY8zRnYpLAmkGDdjttPAh2Setsxi7jniQNsA6sN6ZraNdktWxhfMPjJMTdn",
  "key22": "3oYQ6iNysVLuNaBb2iTrmqdLhKcT1YHuGrZb6JbxmR2R1LwiTcrqBndnho1k3a6uZi3cCe8bvNMvBY45giJn3JDq",
  "key23": "ztjmsVyLFgghptiYPsoerx9AtaKUADtTZAt5nNFyPAFQ4xfkLkE677gdcoqb5tS9Q1Awsv9NPhakpYRCzXiJokx",
  "key24": "hpqKnWMYCLGCZLoQucQPbjG8d1fMHgr8X1CxSgEBfqn1VQoudJ5mz66rLTP5bpyQv9ufvQaq1n9MWMT66vu49BM",
  "key25": "32Ayo2xdUATLfYLVscRPxVuCESFAXRk1GH2Uvp8kCqf9Qtp1SJZ42orNe7TeskM9SYWWQQPfpbBG4g9xGPHMgrdp",
  "key26": "4PGz9ierdUwGLfMJ8vp4jXB8rEXndWHgK5FbN8W9cVxxtjTHY1UoA5k6gr5DE2FwKvjDFXo7vgihSGdE9kuJRyZi",
  "key27": "5zqcUpYNkjcpV81XoEoQzdMxkRfCQg9HMfBMuWm2ykRAq4gB835hKZoyA312MWbLbpjGsvJsdoQiYZAXRvrdKWBE",
  "key28": "3MLoPd27sbX8Q8xMq5GPePJE5aBmCNz6gZwnBLtFRyijDRmimifKDD7WS8HYZBwwEs1LYiTxA2pCeuSqswQ6Tswo",
  "key29": "cKGtNGPwhVa9oTHS8jCzHQxfiPC7yhLBhGRoni7uw4NGLwku9bFrRBHB37SuhEWdNhtCi39BSu5H6kM19DjwAp5",
  "key30": "2ZhKkPMX8Wscu8VVCNijv6isnbm7LcbLcPL71JcUjoeqshSbLhRGaH6GqNmTxgAht4aoXn9mgMa9AUCunhCvjHJn"
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
