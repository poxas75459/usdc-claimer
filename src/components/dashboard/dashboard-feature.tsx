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
    "5ZS6LWzFiq3e6MAueaGzPnJvHuh1iBBjQBGjkSS7nVj4fF8poG8xoffqma2nANb3igBXv9L83zJwmiRMJg4m75ZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VWuc1CYm6aUDthw4KGdq7MrLXjFPikFXnujyP4kPgHYwSpUZ9wSYjXnZFV6YmCP3D2xDmRdCFN6dSrsxsZoWDJo",
  "key1": "5z2k7B5XSdQewGSFA9yDvXjDLbTevnx5JcHEcVPcMkvxeRHCXF3gg6hn3CaeofAk6ShjPGs2bttEuNcDVizuCt5D",
  "key2": "5KmobFosifCTREoPHNA3A4kBgpqZ6ucpnnCNgkXzSreT31XiuC46mSDrMfBqdWMUtYDfFUhDYUuh2xq4Z2bhPZPq",
  "key3": "5hxS7CN3GHdhAgGeQ5tMSmd7cGBBEUoYGGW5NXyug2u9DARyG19i54xDoCyxmewvi8qU5X9zYDTcJWJBDVRUx5WS",
  "key4": "em9Wo1hZmL2Ew2mqSTwQcBiAYNoqSc18RciUC2pgpc8puhAFjfb8oAomuCMAiNzRd9kCuqi4e77vxpMwG9KRsn3",
  "key5": "3foF2FW3WqqQnMHcsPVq4dPnPY8PWTRAbQMvfXA5sB9BmVjnEwV19dzbRspGHsP1a7VjVZWw3czoPgjYup2N2f2k",
  "key6": "3oNVNbiZBPQdTLYVGnpfhuGu7tDXWLg54LzGrWgQhanSDvfFDnMR5oomMYGWgBWRvZpogZGfWdcyYCafq7NmUVQo",
  "key7": "241WcHfzZ3e6tz8qhPVJ94kSrTQK9LwCdK549xsU8QQ7k6VchTjCUA5CYQ7yF8r5vSoqurHUm2YvKnnVKcBPQzXV",
  "key8": "396FE2cfP26e6B19f3cBjbhDhiLEPL9yZ4pa4DXkY6sxv61fRc8q8iR8ZwhW6Z3vmJNwcN6M6fQjsZpiM4WD5CGu",
  "key9": "67NVyNRHyMoQUzDrPjNtuQjSe2urwzP3iaSGuTwgovaxw9rz2U1efMgSACGFLJs6mnSBFWKdCekATkW1HeJ8tFL7",
  "key10": "3AsJypJTKCCCTdNJPktSZzc3ZSJFUsNGqLUGfhpLCFYKrbwwKuSWHhSbtKPy5XafcHQXTvySnq9L1nT9qxNAUQb8",
  "key11": "WuczcrRn1nM7VQU68ryUpMoBzTbxb47odVerbm1ZZmW2ZAR6198cr8kzxRzFh57mTpXUDM7GqQMmTxpsHdEEBEa",
  "key12": "4HW1sNE9t9Nd9ht7fGZErJxvUUf9LNvX3ctJq4SKCCxEgEYyqEL6x1XqaFuy7ksmwi3MUuPRu78kJKhjpVnt9tcW",
  "key13": "3HBYxbpVo1N2b6PVD5Y4kvTP7LyrVUszSVJ6SMdXwGWWxwCAYJdnd8FyzR3PGRPph37sHwnX2ynzGquPYHyKZ8m2",
  "key14": "5JNtP48sDVG3XrxMhpCpigev6SJWXQQ1pKs1wS89fUgH6DV2LeidjSoRtw9f8vba8XBuCngwnHkTjsAeBNbPDRFF",
  "key15": "3RTTYdmdoMyKVM8D5ztckFSczaPpRsPjhkTwYrZpYKVru5rzw9Xu6YDmfMdaiMLFZwHK7vJCwkytwa8Vn9eC72CH",
  "key16": "i7BawJ5peZV3WFUxJPpMVdsT5uqHgtoGaPd4QGAGHyaY6uGfJaUe3r4eLwmcRdpDzXf3PTyJDGtmjjJJxQCwVA2",
  "key17": "3bGQBJRK4JcLib72Jnp9M4uKsJWnehssb1eioPsEZrzE3hBsoKADA25YnXy5CE56CJP6ory3YpJ4cbr5NmAU19Th",
  "key18": "3hK93xcUjNaHNNe4c3HWqgF9ty8ancStSxq1BbCqkmeBQvm2TkSrTtKArzG1HavqfLLJcnnSZmXqAXKSJjvVoTtQ",
  "key19": "3dQCJQwQnH5QHcePXUDUJakU6C1vQms3uBGvRNioebWqaZW3TA7bVoC6Q4SqTQdqpC5fYiWWnxGhqyPXGF9JYnQs",
  "key20": "2ucqtQ7qvCR3VvEeRpi2p6aj5PXi2Rg3M5bW46gzkKMuZDJ3MyizNBPjws2RAirjnnBPaZ5CPK76fTykWVVeq6NA",
  "key21": "3MsoaCpkisCRuqTBVe4ubfeqc8iGdkyqsHUQTdkxShQQwid7L3y6LuYrA9MSVPL6UyUEf42tsXPPHy2gWbz7bY1i",
  "key22": "5v9dXgRyb3PqYmBhqbMw94JusuT34W7CCeahtPXnhGdir9HN1hzx1xQBULpTJt87JzvzSwVPa8ZNTUL92AxUfHTU",
  "key23": "5tCwVtSh1YiVicQdyi5AgVRMHbqqwntHsAcgTJyYKw4pC5Hk6kTQBquYGqn9g5hAr82iwokRuS3BMd72jMrQU1cY",
  "key24": "3GHEgoQmC1ajD5v6VckSuzKepUtsB9rUFZuLnfuqjN1SAPhEPXhzHHqxjPCRaHvSLt1G7SvgJJ5LqwkR5egJWPaF",
  "key25": "4KA46c6YtTMwBjsFtaSiaZZSMHWjGLq7StuBYikyHpKKVK8EZNYQdakQtYkjZKnFJQZzgBRmH6nCqtAQNh6RzcWG",
  "key26": "64PnaEotgPjTsvws977DNuaP8NmqQRQLvUryPJ3YzQiV9EMSuALNz4uKxRSJr7H6m4khyPKeVXnot7sWtcg8cN3M",
  "key27": "5rrkbHYje6ogczF5PZaUinCbTvepj4Rfa6xnGF7ciVsjFKw32CPu9x2ayfRwt3Dxn2nKaVV3Cqb5CiS6rxFNGq2p",
  "key28": "ApM8yBQtESBHbfFqHLRzJBJ6yGmm73tG14yjXHPZLShSXuKrNvAvMgTq9vykRxq8fgHgbvpa2zaicDCW6xEeg8C",
  "key29": "5K2Rh5zbY79Xm1Ky8dho7HTbG4j97rFZA5XYQ8Kttm8BnTijEwRU1NJFnvKGdro8wiAfc5aqJ9LMh5DQgZDqsSMB",
  "key30": "4rZKkfGpNJgLrYKKJNuY27A6sr87WU6wZjgvUGDoUU46pvC1qab9uxXNn5EwxMyibid5wHir3hKECNqJZLXhnPW6",
  "key31": "5yoTB9yUNxdwGeReUdS3xm6AGZ5hEifnXKTfPy9wZf1QK8v9vDbaZ5zwQW3KFhPcLn5ReLb5zyVWCgyyNeayaNDx",
  "key32": "3y1MjHzbyFuowAbwJ27rNKbbBttr4Zk7p5bA5t6TraAXViQTgtXx6QrdzgY5KFgELs9mcgv26gQWmeogyGV2AziE",
  "key33": "21R67HsdWmmumTDJf9egzcG3sV5D8VqDTACi2y4GMXiF5YvQkFjBvMe31Wwfea6KQUHx9AkvNoBaHS58umpacnne",
  "key34": "3AzhLHRFj6NFSJ93mWCJZRYxzXEjMkQBQVXGnRrZWobFNikx31uAEYbdmseKJsLL1YSrYb7ahWVyvz7i9jKie1WX",
  "key35": "3jWPvcewh88DhDs6DeGaPh84SWdoojxNDYXxUGWt5rr1SHx53ysqUYuoKhb2zP4EkQEi9soidSvTAJLdjPBz1nKf",
  "key36": "2p6rbAzhuqvnDnTNKPtfrZxqQGSNxJB877CSkzHQPVRS3FHxxhEdZZSykBi2wp4gyzKXpAWK5DAUhuhVdSHtgxDm",
  "key37": "5DUXy3PVoZhUoUDmKPBqisfDra6h3CycfNgRzHQDgcW2CFaqiyMGsS69MRW46x7mELT9dqQKZrw3CPvUtJVX2z7p",
  "key38": "4gffp3g8q5iuAUnkQjaTb9inVwDpDxWuu3dAF8aoxVyGXCPeMHig8fybVAADZbfVQCPXwNsCQzvJay4YhXCkhaZh",
  "key39": "2gRtjJX85WSyUxS47HqKpfcbid9uasF4M4erCeRxzZwPj8fYoybBUos5Z78K8Ko9t7zpG8ZJmD8FHwBAGYCm2hcL",
  "key40": "4ZQxtNadCqfJeANWthFUgRGTRQXGZxXujXh1EqY9xhJ2Ci2ZmvygCyxg9M3tNB8bCr6K74wNn5iv27H99TVw2E3B",
  "key41": "2oSZ1KTPFUyzYscT5FaBCQ4p3gsDdJJWU9EvKuuupE1aCzkxNS625eri32n29VJqwd8xPEDm9PrrYfRFvsrxFVDk",
  "key42": "2Pw4vCva8eUNRzGxbNCNPgceF1JPFVnTmMYyojkWj8c5WHxdhoXvFvRoyMEFPpFsySUyxCanvgTdtf51uspqcYBg",
  "key43": "5JxAbErpriF2iSs4RH64LgFNnpfgxfmM8rwBLGLE3MTKcuyKPFp71KRAmmhUgt6kENzi8doPsjndjp979ChbAp2Y",
  "key44": "3DtZR9AwsL1iMtwacrFKedE86hbb2ed7BYt8Bo7JmpuKYHvZW8bNPqJ3FJb5HbCRMm9BashsUXeANGY3QyQHMXTH",
  "key45": "2aXDnSJgx1uTi1DBsgyFiU6y5vDpbK5m7Z6XtFi8dCHrFNsgGxy7urDruWMFfRtp5AVqnJ8vhLYFB5cfa8SPoPow",
  "key46": "3Zd5fqV1dhZcGV77Peiu6vFmr25jHNVmLBW44M5iTAkCQzk1YddKH9SzgEQG53jAD3Eu4HxKzP1TiNvaKB7R8ngQ",
  "key47": "wuk3rzVskbGb4AZYs92vN8Mzn65xQBPfaMkm2nvuwahoUuLWru4QBupneP3nxWcJWS1C2QrUQDD4qDV5iovnkFP"
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
