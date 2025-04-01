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
    "5zsmybRfQ18SX3T5dtKR2BmpsKb1wEQ4K7nxwr4cbhWFuD1JnB2PBaimvQwjNYEzVUGw2MnDH8EgXFyTavi1fo9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gw3B8HkBk3cNHCue8vKPNDA97s53zGX3gg6we4jGCUh7RBrBQ67efYa1eGddY3bLs1MNvdzQq5n5HRri9Bj5oL5",
  "key1": "2oL6pBzE6yBFptF9rER2MTuAmM5Yk87ERiEfh2pNLGN7ryzUuDvYuMrJqaSxNHSGhuaXQJ56tK31dXmATGHecnzg",
  "key2": "DzFT5ZTPDUxJ23ofjh1Q1qRKkoBEZQrXUKpNb8vv3ucsRAMEUTejzkyv7Vn6Pmbo5vYat5FajQHQD7DUHxYDPw3",
  "key3": "2NjeEw4wYyr9JokHJZoHrgDACN5Pc9AHEiqsNCSckkxMFC7W4twJbeKgE24cwUa4dH27dGNzJHu2fM8bgtRvWLrx",
  "key4": "BoxChUr3dS4wWGv24Z11G78UY1HakdGeg3tvynVs61cgv4XevdWpPtyhnNwSzvEFVuDRqHebhLtq11L5JLTXYHC",
  "key5": "43BoUM9vE81d56wqPmCbvBo8RqN6gkfqyUBR2zxNjqqQioWvvGMMksVFchRTi78sXXVt1X4WWFdSbmk7Xi1ivvk3",
  "key6": "3oLgb6b1UwuE9H41SBsnHeNzgoK3Bff1QADcFAKZySKtF6pqETwbhFf11GBzKcgyquFDcAx8Zm1w8K5oD3RXUARz",
  "key7": "2EYXKX4Beri1BnMvNVdRakDpeUS1kQoWcs3TdJgzVNpn7UK8UULba36i2dxyyFeG8Ta1neBRhhuy1Akw3xkQVTsL",
  "key8": "67H8YhRjnBa8cTnHKAVyzP8rvKMbyHQWRSHJEoZSicsijP6AD3X7sXJG4AzziHxVs6QDZ6U4zHhBqe8b5uj5ZYYq",
  "key9": "woC2cbp9sqsFj9wHBHR1yqXnKYMYQkbGX458CrNttf9nSaSHEv2bxdWjYwqggMjnro6fEqVvyco9aoqdiPgfz24",
  "key10": "4v2FpJfjAbTKUtmShtkRV5wFptaNWZBpAfYr64sXbeDE8rDQdgZnxhxMcJJtBJRRWTYa49ap1fApV3gjs41ZJzv5",
  "key11": "42y8oG9bTy21fy4honELRCMGjEtMvZvL2Mzmqp3SUUyRNPAnTzuYxhQz73NLjRVfK3MsTtPUkyQynPNZuTLmgFwE",
  "key12": "4zW2jWWQ5E4trvvsprCcqQ3mf3Vz5GR3Xeqx8WiS4YyfbSxtsmHSA1QCtrtqSk9R6BWHD2ziaZ5t1Ro4g9XdPdcN",
  "key13": "3GYu7FF7dyNKBaqCzVMKvg28qKen1UXuoiZsvSR4dxRBFPS1rAk5edtc8kuWH2Kymmi6FY1PNUjPTzjwC31BtCoX",
  "key14": "4Y6PR5uqBWqzE1HAnE27BZRyFw6mt9BuoQLSHFTtdk1ituqcp47ZQsAMeoCrbs2bYn65cxfFX5NxdQBBp2SdPC9C",
  "key15": "3m6pWKoUpGDExndMaoyqB4NFiWQ1Vdo7CeA8bjZMtSmP2sB6gB8QCbhJbfcvZ6mgyJRs6qHJCDLb6CvjCjPunSnt",
  "key16": "RG6Xsv4oCjzGAjbq6F538HRFGDEbyKG7UqjXoZhaz1RE2G6mvTdminCtQW46DdxGnbGvKaMhbXeLbwAXETWKyxY",
  "key17": "2WpoyGGatGenAi7wTb4Vwqa74AVMn43GR63LrjhfWcJz8VA3wU3Ya8ajK3Zw4SMVNycytqTTpYDPJbiEu5F9aULi",
  "key18": "5mJg3QMLoYzR6o2JrcLufK7GNfnXhwTaAfyF4E3pxYqBUN8fZFh1VoUF7fraPFrTQKaJpEnRWWkx2Cnbftk5uTkz",
  "key19": "3Ry655AVXYkW6FeaxEGz7d7Q1ajS6Zi7pBJas2JMGUL2TqKiQuVT8XM91riag4QWdjA5Ye2yPuBRxi87GKYLyEdi",
  "key20": "4m6wQvoA2dqgfwb3hCmtz6M5VCHLppLcRYjTduhirpe9stesSCqPK8YAKg7quXQhs5GNFUMQud6UP1AM1EcFWCHe",
  "key21": "3ybo3mr21FK3KS6XWuzxwwSKnsusD4FKL2VMfJUwTXSn1iiRNvHT6BLQQaZXntfzce9FvYkgsnN9FAmV8GmfcJRj",
  "key22": "U7eKMhgZntXrGRNgR3U9M11aYjppCKboau94CxpiViSY7MxuYjAv9zdXv3yBL81WgporVEP4gi5kUd5FMt5TLRd",
  "key23": "38mhrUNAQLKoHgn8KdBjMZqdtuzPrqQMaYc11yxdqRbcNTuprJRdXsWt5suekha2MYvtrmapybDq5FUzafpM1ug6",
  "key24": "LWoK1G3uXX486f1mMxnLsfD7qsPGuedHpeK1gBF4GoqtKqbd1wuzWjaJwcChoGWrTL3FBQTsiJm7UQ1LJjwudmD",
  "key25": "3D3LEanszzkri7vdYxrRKGiwBdG4491k5mCf91sK4MTHfhGSEdt1nTNVZGZFK7LKZ9PQ43KsUf2gbogYcrUrcyZX",
  "key26": "2k44W6z7pEB2ipNnVUYWgTDZRmQ7GnXBGgfZ6WqMXEVwyAS4JEzVeXiRQr7JGBmVUEzgTFjuGVT7nnj53RJzDtrj",
  "key27": "v7TrgAJoUdJch72oGLbmuruXe8uS19jaJW9EM9nZtyrjABeThA67GYEwndCzZx5yfbph2WdY84BP23EjRckq4RL",
  "key28": "3txabpCakGpz5ouJdd1fTxwkMJPVWMcHb9uCGVU8jFxjSx9KrVu5EFrqBK4jK6VFbMd6hwngrAcTVrvcrKVSmvKp",
  "key29": "vn11iP7sbuEYHFJaseQwHeYabcsNvq8iK2tv2rVQf2Szzs1i4FVEgjGunGq8csnmwdPRTk1xkhPvCjgZbt7T3nK",
  "key30": "3n8Qt5jACv3n3uM3stLhZhKSURup3tceqsBqnTkAp4u2xF4fZXTBf7H43jee8D77k1HeGfcdkmjkPomxrJR9X4wh",
  "key31": "2x1C6m3CKeFGSFZQ3R4o9yYTSjeZhNdzahDtLH8FLYkt9TNDCzqWWViRqpJPrVL67uA78mvGFYNdNQP3b9A31hC2",
  "key32": "2UxRrUkEaRaJxCvPwRoFUWsexEFVh5Tf2FQ2XAnCA2QmwDzUXtRsCzDqbmq6kxrCNYCcjyRUnSzBamFoAJAT4AJd",
  "key33": "48teQ3wAZViZzTR4FNk5hGk4qxcAVsBjhti1Q6MJBm9pSXszRrqBkN9sYSvs6fcVjdHSJbFSCnyQRyTxGqrga1jd",
  "key34": "62GRM6trmbRbwUpSHETBP1i7R7Nm2WT2EpL1qD59kMQyrL8izRymkYuLiTZhiZMeCeTxev1rAgs9FykWq9eHFF3D",
  "key35": "9euTLSRyhrngfbWgDJtJkSJozGSNHQmaGMvEtf2EqobAyFtw7PBf23qLV9mt5Dd2cuQ3wiSwbzAjyEuZveFXM2W",
  "key36": "Y8CyiSnbjmok3rWshi3wMEm3LwpPoQaLtNsZpVTNQd8R9kkSeH1ULKRetWqzKqcjD7MRTnTARPUB4s8pXiFjdo6",
  "key37": "6orTPcJXU4z3TpTWQHgifJhadXx3NGh6fz2sD9dBY5M9oK66xj6pS77rWcLkvNRnPc7fVygKpXmDLt3HJn5YUpr",
  "key38": "5GztYJpJRS94f4nRoR2LLTscNUqDfMD9xqbmp8sUH3NsWs2JvBngbjBmDvNvkzkcsJVycxrcvNCfxrk5WXJaKg66",
  "key39": "2WYgfnsqmCpGMhbEbbzvYwkRNE3szj2urQbqBwTx5843ti4LWfGzStfJdcHb76ukVC5xib8LWGEJuWgPWLg2KCsy",
  "key40": "48vQBa8t7RotZbXNy7koWZBBthQSWjoPUw8bgQf4MH6BBdaxdhdNUVouviJwyxzP1XxAVFiiLAn35zUPHxXeuYxK",
  "key41": "3mRP5ttsbnTPEkikMDj9qvrC2EpFhg5GTJjxvzv514z7erKF26nup8fUq56mzgTYor1PZy7QemRoaaJNRNyWb8uc",
  "key42": "5CFGSNt4FFd5yekEv4LKK7fKHGqWSdxVXwNHuzHfpHXjmTtKMZN98qFQTgJmQjyzLk8M6vnd2QG6r7GXyj61X1jb",
  "key43": "4myhCfUqcGp5VrgxvrKXv256rJXFrW975BGjzz4zKHsU9SWC57B5xp7L1fbFFCNuxXJm2nNwUQucY5MGYop7ZdDC",
  "key44": "3mr5kSJpA3F8deKEh4kGBnf3yUJaDqtRJdi8C4rFHtWUmB1Abh9p8FqVmuEuoQYJmpe9H6H9rCqDXSbyPp71SVpu",
  "key45": "2WFXpHrQPnMAWW4LW7ju6G5QWG6ZMyxiC4NaJc128wKGWveUUppzh3ocWHqhpPbULbqu2DP4eV8oeA3t3fUiSWo4"
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
