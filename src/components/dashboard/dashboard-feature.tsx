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
    "3idBBtNgkZhbjwjprwpXEEf5zcs9k6ZH9NvQXftpH3hUedTPD4KGpwCp71ypNfgb15tk9p4kXs2QVPrJSoDZkx4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gvgnHVzaSNfaYKeuX8BwA18AWiUwz37PnxEWytbxfibJNUF1rT7NGzYsw9uNMwS9u4L228VK51itDQ7FDeZHzxz",
  "key1": "21BrGBCW6sCFAPYYVTUUxLEPxTfx1jjWq8ec2yzQL8qmyVHQwGq4kHyLHs8zn48SeGuuXJBt6L8dyWpx2eY1FVPQ",
  "key2": "ikGZhhwVor1XmTaFCivwsJ9f7eCtWgZXsJCzhryvnBezDH1TYZEci66VaW5H8amaaF2kqdBKKJ9BHcHv4oiugu7",
  "key3": "3rwrCx2jFPegLorwWYYrfii6Cr72meDFymkqX3dyybnVLGhePQPAi2Rryz51mzN6uPsACAtiLB9BfE6EsA5Bp5AN",
  "key4": "2Q713XjhEny4cutYZ9L4z1vifFkbuH6wjNZgLWyWyedUTuzfy3HX4XpuhyvEJaC5rkEmmJXLf2ndaJdpVvugkcyd",
  "key5": "3ED5uyjYjsKp89qijbuHpaMnckqTcNiFdV7vpehRJENVzQi8mtmiKH25WPsPZuRRXHTT9c1qcnhFDjDDDgdwMEFU",
  "key6": "39cZ9iy1XgZHCAo5YLegqdQVPaGZuJqX2eYk33iY85t4VMwdb9QqnX83m1FjVZYP6KPsG4LFus2GKmBYEefzu4kh",
  "key7": "4d1SK1RfL4dcjgnfBa2s6LwFhifGtrewEDqtrbr5eSKEjLwjMBU64AJWZsCtM5vpQBJ4qCkgT8XjEXEF8ErCtZ8j",
  "key8": "5g5dC3isM39XnwqPhQ4gwbSJdSxrZ3wfhuAu752yacAzWfjPntaz9PN4w81JzJ7RFtFWyyzgg3uVHWBkZujBypzd",
  "key9": "5LBBeWKf4NMh5zAWqRGVfABoPF5n2CcdTVvGGgRnuLkJYZJuxUpAsXpQQs5c4dCwoCCkKzafMy3qmf7NCJtWHbjf",
  "key10": "2kpuBfo4dHxyYKWq1CGPq8qtabDXrMNV3QSTrVTjwjLv9BvrMCh7fsE7ZfFFPpVdQxn3Dy31W8zm4jH6DFoAWa3j",
  "key11": "5ktFcHkaoTbpuy5cZKB5zqqKfHUsN9XZLuBRh6gHcxkKJZBrf3HGfSLuba5Fe2DYbEfe77ayNU8xniSLhKnPPqTG",
  "key12": "ehVTgGnciaajEEi3GG74y6MXvxCmsZFqn4jZve6fYKyCESghheuoM9xS1aShPUthpWPRKztDQNbQBfLSmQ6TAB7",
  "key13": "593QvvVLt279SQTZev3Hy9HmSs2QWWUr9EQjq7obD9ZWuBRjqytF3MF8q9VADBAhQqiNRFh22b7qhtqQTr5vkcsV",
  "key14": "3tcPbLy9BtCxuJqx9aJ1f6LBcpdKnscZ1mJKDWp1kU8CouMWJb4Ziftj6hmWzeS1GUZkQDkP31cBzQ1H3dXP13wz",
  "key15": "3THcEZ9VJjuH2hDTNDw5YY17mPhoVaCMRqnTJFX9noUQkvXKnxG2NGNNSitEuAXHCiVmM1UAq2gHchNrYR74ahVN",
  "key16": "PR47eUYSLeLnzpkgqLAL4W6FULgKQFDqu9SGZAv6hU4mjG8Ni3eB9XymtTgk31kw1fJDheyANKkts5WhaDZrf6Z",
  "key17": "5ZijdiCp2n4bAeW7GP81CMN8Es8tX7fDzomrErLrAS5BZ5kiu5Ct2pfSDJXDZVwZB7PyYrs9i1YXk9ajFhEPoVoH",
  "key18": "5fU2cDP6eRWHP2y91b3oBUp85JPFL91Pr2Q7TDwfBs3r6NFerwFJLozKi7YM4xkhm5TC6n2PzqzeJhUEcohJnE51",
  "key19": "w6Hriwbeicz3KWasejuzws8JALBFqtEcbDh9CKVzoCQ6bZ5wNWQjH27mphhMiWTFG6rFuMBe7bS8bWashS7uprj",
  "key20": "2sWE5VBeXeN6si7WGtadWMCL6J8pDAp8qdStJTDKRojqqEU7qZcVTZhLausi4o55e26abU1wBQxqhnAawvtsmpej",
  "key21": "kEeBLeGAumLZcN6CQGqW4vbxDMMsWj6SUjG4jxvUoraskN1iaPcdKaspdYvppogNv3Ph6Vu8k9m7h8QaRHijcRG",
  "key22": "4xwpJd2TicZbSZkUzhRbdpsXVfokq8F2ACsUApMMSqgTdVFLiDyQMD4PbpiGSwiRBjopXfv2SMxoLJYgydQt9r6y",
  "key23": "66CAJZJwswDVdKtx8AuLN92d5ide5CTiXSrc6j2hB4WdfE5KdzeoedrP49jBWKqTwvTTy5FtCzJujeSLGjB6ENr7",
  "key24": "51917DDDpg3UB2w1DPd1LscB872phMcVeN7wBJuTjygHsKpWBPLdxoTwDdbDhU8JwzKyxs47BM6NYkEdQgLMCnec",
  "key25": "57zBDFRuLnA8a9j8sNNKCXue5wc3gc4wNCs8kkhUNgCfK7YKQ9Z57NarvCb59nu9e8fGaRJr4oEcjnMDWCpCgziK",
  "key26": "5zSfcUQ3Z7RkxQxcUkvFym6HZrggFrMt1mPG4TbiAozVG9stfs1U4N89Ws5eVsoPRX3vSf6q6oPs2MVFbFwrVwxJ",
  "key27": "23MDvhUVr3xHawb328SmqXTzA9FUBJ9hi7ZRJwrfXXMqr9GR8CRdPTE769M5DAMGnrnEXoH9G4dtPYUhtwjPjtyt",
  "key28": "5R4GgQyeRAArhE7o1ku9hEvs3SbBp8N8qq15XUo2UZTdHuXAfadDjFpUF2xTiXo3cZojaAL5teGLP2U2Gx9fFQoP",
  "key29": "39Q8TNMpPcAebp5pa8Z1JZXhAp4MwmMj5jJGvaK8Q27fhqnbFstuE1k8QNPsGBSADHzsWVWK54CPjRWW3WCnxsNL"
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
