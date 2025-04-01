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
    "246MckZRi1G3dwznnCBE2ZjXKy8G93pzqehoRz4ZPinqb6eEPL77fSy7Yyf3dPebDWCNymA5YwEPFs6Lq5FW9K4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39HiWpwLmUash3Z153WrwAhQY7Khc1b9sWqV5Hgo3kCQr5DUABawS1vbE5xHJp8tnjnzgmeksYL811PtbkzGv52u",
  "key1": "46nWM5DGDK4tdsnAyEDMPxWS92NZcWfGZxcztQN4cgeajTBxJP1gJFNqjCrdsEvesGDBKWVEseT3WNF7kzbh6PPW",
  "key2": "4ZwPc3V5haFHfFkSEgtTQtZj4Hy4dGhSu1N4Ygwa6SLYif8qeRHq5vFzxoy5jQkArhECkj92bd1soLGo9CEFumLE",
  "key3": "k8aExTZTFSPDa3UZa2HSBKVa9VidT8fLoGsnBceuNuJMVcxBpYNzPeNfmMcWmNymzp8mnU3pe7zhcYaeG8XCdAS",
  "key4": "2hN7JGpn2KPqTxXnV1BNGxYrK6T15kAk7vGvbwSfySwstaRMpdPnr3rham7zxSUigsfH9Ze2yHEp6AL1G9aboNeQ",
  "key5": "qKDpcWmoRvdsjC8XDcZVY74Gn8U1Zekf6SqopfnpsXdfvmb5hQSyZkbXL8BsgFNtpg4UyGZFuq7xho4tP74vUun",
  "key6": "4XF8hsPrF9eU4hsCnfY6giz43LPxXPf8wXx3KsvCbrGQfQxkKwi7LCDuZofcfWorPYzewcUjJavtevVKRLLorxTt",
  "key7": "RLDsVaRnSBbgZuS4S8MZKLCLmim8Ky1YCwE5mAupNTPQHs7ccmaePYjJyuq15Kbbx4NYm1cacL5Nc1ZRZxS5pKT",
  "key8": "3m7Ma3TCwyJqWWXAw5tu8GD8ZCdgSs6XxJqJWMc1n9SQ7NkFRojdvem5Ttoideec6y9optLqgNWGXUeaorG35J1t",
  "key9": "3bRsv8NeD53W2oXyAcTXDRa5tKVPtCRgZo3qNR8EqBhYMmSBsFxfi3C3bCmc6zhsyNojVGvNH5FWZfENvwXyV1Yc",
  "key10": "2WCn2eFb1JjQVvaPrHPfebgMQSHvQBovzQfB6LK9pt7VXb49ZrPs6m9HRmxnhaw1yTdWxobYdQH7EenDgZSB4N6",
  "key11": "4G1RAMNHNmgCxiFMsAb17HmkjH6bxVK6ygTikUhg7WGt6VtbwfWZz3bYEKbkjWXPgpfwXT3CZciWuFjc3gcVtdPX",
  "key12": "jJjAqLdbwmevcZyPGYMBAtAxV41o9mpS2FNX2HKVsqJPydU3NDNbud2kosUZFDJtqmZYPQHe6ft6TgkLDNLy3PR",
  "key13": "5qtrUQTDGXL3nQo2zU7Qa2QnM6chaZayp1kShC6zYWREYhYAJkRecSYhgwibmFqxxtoPTawtbqPnMdb2qxRU6awM",
  "key14": "3YexxUPTZqryN8VZxbYH9WrVfCwSrXd4cvYRMqwGcLY8qbJUFUDTBEVVqA8VWSKFgf48XfoBidTmtrqnNfc3ucyM",
  "key15": "2vEQw2zT9iut3VUwk54yJabKcQd1C2HnkceGHgYq9rTEP5P3SmvToSxS5LLyqxHxjAc6JPSaskfm9AS83yNAuc8v",
  "key16": "2ouvV2KAaUL79aQqMHhasWpRUNzWAGypmhoN8qzezaEnbXvUoFjmYqeah9ukb8PRhpwrzxgNZcjbFGGjAc77qd19",
  "key17": "3yWdjA99F4a9UddZHWgE7P7RTvFvC1RxGze2jQM1zxoqP9Gd2WGmrpkRghwfHTcNR6RYe9LKa1iGdAKMa7NT9TiD",
  "key18": "63aML3yrPRLhPDszbZCjdbwDSD4GAPtS35pK62Y1EDP8ikUYLbeoYr3TFe2qEouVepZK3dzttmkNU9MDpczLK5s7",
  "key19": "TRmjEZgLKK1RZRR5BzZCKmFrqRgGHFuPs5tPh9ujZfMBEBXaHEmxTZzhDcsxBbYf43tji3bAdNpzufz1KRwiUZh",
  "key20": "65kFFRnp7MVj6nABWzFy9NTsdztf4b1eg7bT1jrBtk6BRp7SWjniH9yT6Au2ZAAdEuth99jKfFXL9LHa1cedFwxM",
  "key21": "3ebkH9ayEXXZZEcWNXAJXtcRFc4gCD369zwb5XgCjJTRptg229uEiheUtb8BWckHnjms5xiV5JPb9Bnbv6LyTMcy",
  "key22": "5HpN3U8aAxHcD7bNcLGBP6SRdKyhWwtrGEzS2Sv2TwZ1HxksYPerbY8t4tRudhAmAY6Ma2m3GWQEZE4KoLAo6FKV",
  "key23": "3LspYnizR37qp3DtbZsALiA9zbCkbCu6BxjEHDT2ddLWsFXR8MKmU79z2EBX7NgLT1zxNKXoJEvNtv3TD13h6ppF",
  "key24": "2YqvJize1727Gjf7aLFsGu7nn6ZMEtMpa6UM3zsQ3yHFQxCPCcBCcm3gnaktG5jB2DXcnMLgHVwP5CUycJSaffFp",
  "key25": "MzzFBnrHdRsXMXCjLia9Bu5XWm1fAiYYXvawvMGL4x7d5UbneRm6yMwWXTkUuSZiS99Z5bMgds5RDME9fLcELtb",
  "key26": "UoALsVvmUydaaYanK7K7bH3MWjLxhoyZrAr58isziS3rZjGri5Nmo1MwwSjS9UYjpmcGpipnGL9fgNr5Bvcczj4",
  "key27": "5AuVcCzE7YfdVRYLySx4CtCAza3EXzoDKsD7fZqGRQCK1j33nLrgDJypRtksPF7MqJaoT7grvPnSL9Qat9evCNoi",
  "key28": "5ccE9ajBN1mqxZkgmQjwTCTEd8qyr19f8YzTrzMKQJXvZMQe9PwkbSmhCXXoVxZUBFtKvyZpZ2JJYLWNwL5vUDV",
  "key29": "4sR1UWdmayvtMFRMb8dZDMyybnU3NwGuLJWGLYhpHiFkYkTnbYq7vBTrxwjG9xwspEGEg81fPmu99bT2XMuQg6VM",
  "key30": "2TcH6xgVqY5g5LP8vfBjRZ4pFgnfSaFc1pwwfwYf3piFUkZNwszE8K3Ea3ATvTrJ2ANAku7iZbDCbYpKy46h8cHc",
  "key31": "LLnVnQcgcxzYZYYRkVgydsMuxqinSe8jD4pB41nYJwChXMzU6grrKXyjV2gtnufRSKodkAc1V7eWsZ3RbyJEs6c",
  "key32": "34yKwe14pdVe4eKRFmNrp2U3LCH54cbRkGFYRHSo7h8iJkyXDCUKqWhwgk4oy7hzZfUDiMyZoM3DzgemjjheakVa",
  "key33": "2EFBXUAFkDxo3tBgUF3Gk4HkK8Z6AxG6WmS9SLFH1JsDV47Pz8WgkwAzK597QQnrBNJ8X6A6AbUy6npzfYuy6K5X",
  "key34": "54c9CejBeMjuVcETVLanFxSPkD6hcxqR9QCSxFQSSnCZAdUu8gXi1LJ8ZLevPQQdpHCVpXZfXk2eU2e5XvZtmjEt",
  "key35": "p9FoNKAzaWDeLF8rhMyhhsT6PczevXmunfK3Qp9kaFpL4auZoV7vqdjMd9MAH2kwfaoUfSK5XCKc6nmDfsFVVKW",
  "key36": "2T4k3BybbBSLSeD5sUDK3K7LcP3nKvMkpoBmkKfAQjK1YPCUS4uSswDNHNAwzU9hHHBo94ZTmDecgN4JQ4M8kEZk",
  "key37": "4Fm7a4QWLrGXGbTCjZgZpGdApewFE676PzCAnKAeQ2rSyXWxtKTQFKuX8D3rxUbACnsnAy4wYeE5jypH2UVVzU9J",
  "key38": "23VwBAWYqPU5shuk95oHGQsazweTQ1TErU8r8rpSuzwUg9HskjKm5PvhZ127wzcyVz6pJtLstwokPQpnTmPnwHb2",
  "key39": "464GpQ1kcZeBAsKzCmMrmxVN56GKf53q7LyV1qsVASyYvToTAtTnpx2RHSdNZv7izEEj7Z1twtF92BP3VRUUCz5g",
  "key40": "X4ADMntLyoAQvnxgUXRnrMssKJ5jhKQVgwS8RwKJXQtaQpUfNugpGfsMZoEe7zynZgPFajYEJYsrzYvewYPKs3s",
  "key41": "p3EoBEGPN86s1BnHjVEn91gTz9cixhMfcpZNP9taWdBZvtjvGXa7Cjs2vJbNYwVNrQrPB2WY78ekr79aD8Ta5RV"
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
