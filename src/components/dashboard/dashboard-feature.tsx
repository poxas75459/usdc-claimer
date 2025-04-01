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
    "3RtEB7Hf17n2VRPajNNfs8tbAcqrD4ND7fYuL68mdL3gnKnGwiA5gFvs8yuvTAPPdm2payE3qsxPVkNj1X3xyycn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HiiF4kHhadL5qiJ4saeeKLnn2QihrWrkAG1bAHdjsMoMAmcBGrzpe1GCUfzrA26Uv1yFcjnaLi95bPfzq3qexn4",
  "key1": "5QM5kZMW682DBnSbtro3fPvzctxgem3iS6FEF9263rcReBVUWKjtrqvRzUxNa8pqypr3CpxD9EvVp6EN39HMWuUX",
  "key2": "2iQn6ArDtr3Gy7LSAkMjWVheShpXbRf2pNfJcPCXeaey8bEn6wFLWyoiJkJz22ve3am2WNkN1jEEnvGeN48CiuZg",
  "key3": "67YA9ne5vRS9xnnTuBRoaPgiYvG8ZWSpPnsuTdB9bYvP6iz7XH1ZiMsrNPEzPRAG2HvzZZcyevomtuZdKbpMqvqL",
  "key4": "9vvUFJMGAKcNgEFEZocsH8XPjoQcLLoqFTfycYGx6X846AdiL93dXJgqMtwj9M5jTQPsDCotkK5kp78r7n2hCK4",
  "key5": "5B9PaZQETXPmg9rYQnNuLe67vi1CvCtqaUSx2jqwhsZwRksDbQgKJidJmzEAFMvrqFZK9uji7tsYsBbzdnWmWCP6",
  "key6": "51ftqfoTh3GdZTJB5QAKSYSbKn6oeMJ5PSVY8goSaugpLPVZvgqdwvLJBEjgxR7PCrUuWS3cpNnEqapMbPreDejB",
  "key7": "55QvbzU4XWwydXvbvLJ8ki4Cv9eZ4wTTJ9LKBNRALedrPfR2xhbDoYHeo4EA88XydVG4oV8ZZ8n3Lg9SjnBM6yda",
  "key8": "2BypzyaTpPBy6iG74FUfQq3VwQEZt2vXm54NvnCixBYYQxybQFyGFFwtYt9Vbndq6WYquS2nK1mtvrsWeHgqNNXA",
  "key9": "2ApfKX3ZggiUdKXNiUXcbCoFZdPWPXQ1hAsAFkrS2AUMZALtKzGUck6ZwAhPiQnzZb4rfcCjj9cvp4erMbocy7aE",
  "key10": "2Boy4Yn5AANZ1mik8awGvxoBn7jYaFNUWVMfR3USphCbMsQApx5cG9CJVNfySZrxLhd4GCTiGGzCcP1WHaW5kPET",
  "key11": "24S8oFCvAB3XiYDhCfDjepEenvFKBZpPQd6uS9eGznUtti7uiXC6VWwewZYU6uDkQpdzoNmDmKFJVfBxbUSyZiU8",
  "key12": "2QoLNbyB8giT7xKDMzcRs74okgrV7WvM8bbMp86QVzHXYwLD9rA3w1sjcmXWmRAzpjF7arVBttVbMRAcstdkxKmK",
  "key13": "4NiPbw4xxxegR1AHCvwehRpWsqm8aoP3yHCXkDKVs4DxP8j5rPfSNurGfc6mPzm3W9saMBZh92QNcwfQGmxNxrFT",
  "key14": "3HR6nTc2AtZpy4fcZu3eC6JC8GKy3cA5AAGt4yZrLpPaqxHeoQVTTsmZ1oQxAkyRmfwoEfJCWvWd21KTYzxHcxu9",
  "key15": "Bp3aiqcvNpAcfWqgJtSbJZfrb3Yehk1QQ5mdSqZ3TtpHbiDoAbAFUL7zQEFuTCjFgFe8V9QbfFseirezAFXG4ix",
  "key16": "4PJ1fFCDsn257HzhnAov4rH7Q7DePg6aZZeBYeBNC8Nar43oW9A2kTF5fSgPPnMqRYM2ukqQoTNANMhou3mLrJdn",
  "key17": "5LcZgCKNQ2vxFkPMtLCRMKonJ8xpBLzbK7jJ5vjgAoyey6xhuhA5wjyUi6STuJdtyNFxMxNsBuM4hGcgqKwGTvVn",
  "key18": "3ZPBVCEVpoz9wGVzi33YMWurLHHvNWAdbaLvF2UTtztMoGQcM8sYZBWQebPySr3UguxgKcBhE8MCwXaURahbwtTA",
  "key19": "4JGDmPMpP8AxAtWhKZcR5LRqBFQGXdZRVYDeMKKpG7qf9sUC8p8eUAi3SqHzpeur5tCxcrPa52ZWXNRanwsHHtEP",
  "key20": "48U9mxkPAAXg8pM1JKdUgbyhToGd4PB9tb7txirkdDoQi7avS1RHNV4ZceFXNZpY4MEWzrdtamU62JXJWCpv1VCK",
  "key21": "5VcnCnxRRMyKMatepNCyNroJGkLC9FCiFc18eX1Qf7nHRTAqTUnrmKUu6iUzzYnpwNXeD3kAJwpEvaD7L2L9nVHX",
  "key22": "4QEwTuKdxucixMyirC62KbDxhZPREhwryp4ms9j5Yg4Vjop6EqGwN6HzxDTLfJRyyuUSCY1PdsLpnjA1yJQm1ssL",
  "key23": "4KjdctP5SAU4ddfbNd5SCV6BeiTwa5h9JBxF3EBAiP8SfoMC6XgQTCXx1aWsHzNNDtq63FKEri8PMnMk3aqXVz72",
  "key24": "5tBzGWGLEqGZuCGakeLZZ8GFGUzjnjhXxeDbCy4Q13YVTnPgn1QqHpPzm2bgVzHkrPuxEZgo6Ry6nR4YK3pndMHF",
  "key25": "2nfnZViwgrSex7Y8AEGJJ1joShg7FX5x7Bx5TnV1fFApDmzdbdPnxQ4mksXxNMLPFrZejoMtqMPV4bixSVvUVjfj",
  "key26": "3YBRya9bHhBHUr4mcqDixNg51E7JmXUbu7hhBVPfEDJSJd2kUNgWCp6WvBkhHWdVJg8UmRzCtHvMt5VYFbhyZBx2",
  "key27": "2qqE1c7gkuFMBSJdh6MnZEw1ve954UGHR3Sv22bugo3Wm1Gza9dfzFiRDMPkr5HzfFny1k7kycPSNgwgXPTZVjzq",
  "key28": "2y1eNSHwgCWF13ikajHA9x8uTvmMd8hZvrNqdnfBfEfjL5SSLoLwaAXNChY5HxLSBdC8mvyS3WoUXTrfG5gw4VNY",
  "key29": "31nFziNgGB8Vw8u7isB1BRFvHm2bzvPL3BjpUsqcwnTXujgKbSowASZj9Ff6hQMJD3iupqPEiXzvs6cKP4UYjeQy",
  "key30": "T3NLT3QWpDFfkmhiGMsGuwCTBxH6qk8kpFuv9eSCHEE4McZeYm6FAtDj2UJc1SLZjgdCiBFMjQvj6WUCS5QRjLW",
  "key31": "n1wWdEzjrzn4MWwb1roEnuLTrsxeHUMkqTx4jQZn8Dd26CKP9WMG2mqUyMD3xBATjczxXax4fhpt7gD2Ugu8YcE",
  "key32": "3fQaYTwWBzQfTkLgkA6cK9UprHVDVSE6rEy2F2dPbRcBgX7rhUPD18mSCzoVXPbeHTFHZQYCfYHbbvgA1N81LXJL",
  "key33": "kGdcivd1pLMAK69RuJN2trR1HAc7ngZrtstxAkmQXUt6iWWVkxrkJ4FpqP3r7sdmnqazdCWUwvh6ntoY3STZL9T",
  "key34": "5cxMNdpZRYG5wSbBuj6ihBce4jxFWnfGtReaGDRpuR7yqQyxSeQfTPhL4s8yi61nuEPC8C4AjFd9fs8pQ6GtDyQB",
  "key35": "67grF9VoACHKzdjGhZ5y7VtfRvmgyUPnoTs2JVeonoBnZthBJ12tiQ394R2KLXvtQqGZzcuZJdB4CsJZRQrX397b",
  "key36": "HpQfjifbg6NQUJNk9FSAb82awEJVMUHsiph9NZZmeNU2VT956CLS4TNztnmQKcju4vmNd4sNEH8cP4kgiEL2q7C",
  "key37": "4tk7tHsSSbPo5oeZ4bbcnPeJoQxnMKR1U9oU917udqrGHUDTaTvUqS8UzrVJ3MaEEmXpx2N8qrrEis3254xABUDL",
  "key38": "5fPoo9SKFqfZCvRCXVQSLoP8CS1aHj9jxRYawh7Q4qAWA3UjD5HGdJKhmw21NviJK7jNAUyxxQkfERZeVMKsa2FZ",
  "key39": "L8Em8RXjdwUVXB7Pmy6oTcxAxwdXozz2oVkgqSmbhBPJHqfk1ZjriAZ1Uiqox1zsnRK99tRwnu1dxUFwghmVqvA",
  "key40": "5d4cgiwzbvPEFYJtiw8DxLzyXxxSrwwgwBLZfVQ94r62W19BUAdAJHJ7R1bt51JsDktfveykoTxDVdPx1BRMJhyS",
  "key41": "R3HGaDrVKfvZzfM1AWM7xvbiHdRytT94bp6wuc9CAyQoVvsJVGpo2ib4T7ty8aEWu1W4ALZvHzDnbUy7pCJbCe7",
  "key42": "31jXb1xnoQ53Wwxop8WJZfJ9eGsdmM6X2im3EfwsrUznN2ZWBXjd6gGGmd6ZCnjxANFGmrfhUaF9gcoyAwWRmd7x",
  "key43": "5v8cwqLwoydXVSwTuVcAxsWPKpVaq1LPSsrrUmqcAtDRhYAWPXe6GTCGyb5HZs2LehbK7vgbZkL5BLDQQ61TCwPC",
  "key44": "aJXFMa1jVnCzxM87C9KsW4XEfTA1aTWaEs6oP1Gurzs5Vs1X4cNbSC3RzJrtZyfvQgMUvP6fJifQnGWRRWJZ1Uv",
  "key45": "4HhQZ4BF2xKGBZqMRHY1dGvpbkfkZXKCedBv9PDSKBrEkVdzBUrm4TxyNSXtanxR6waQDAaVw6UZjw1FHuaV8tfL",
  "key46": "2tEBZvafU74xdJhvFLrsmtN1bkFwtL8ukNFdZQhaEAzTW5FpeXEmq7bo1spmK7oTb46CLJ52EKsjdoVVUS8W2hHJ",
  "key47": "2jwrdgsZaiJSxKPZTEJ2wCszSPQbj2o1TrLMgK6LsYCmc2VYZMhhH2pR3zTgxHpzGaK2giAfRC7pnWC7tQrycCUq",
  "key48": "4fmfayQEcJ5Xo27efFJcqK1GfMxa7JLqHdrnuEhpTLAkx7bfEiYp2f13ukNCJmYauoubkq4JLZzXp1J7DDRK86g1",
  "key49": "p9skRphsuB6x8CYjdT8LTUxt4fsrKCQAWGe6V1b3EbRzpeUz8eTnMuvahpMLg2guTCa9wNqPKhECvf4hTjvZNzy"
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
