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
    "3xx3E4yogjARH2nosy1GQW5a5WrJ6JKfa2PEnMqVNvN5UXUq4bqc6RAbrJYe3FDHERDpUBSWPWzChh7wo11WmMMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vL53ZK8M3tkTXMrzguSJupvJ5S4bS7YdvVbSoT3rzppq8bP5aJHZTENrvyt74F3AQNcKyX6G7CLjbcVHMSFvpUP",
  "key1": "8kHjnZ3Qtcon1FxBzwTFdqjGUNMAF3jmCxxAqEzW1kzwywPx8QSEzABx16V8zucEcCMkLASDPREp3FPjAsuwRGY",
  "key2": "5ndap5DQueiUTzux5ZAWU4jCUWAr7HyapzfFd9tJQqew9Z5z44EgLfSEWgAigQgB9xdZXG9q7ofXqkysfY6NyCjB",
  "key3": "5JP99VBReyiUj6ktTeTFHHdwF9VxFkMcU6CQZBmWAzGGuvw65f8ND4VC1SKNsG3rsRfcta1uGw9VfZUj8TiQ979B",
  "key4": "3Hpbre5LW5PGkXyM7vWdNGn6eQeQ7nr5SqUmxWxSKYFSyjWPBJaLgs6K7Sm276kdWGpa9WL6Fx8KhaCLxGmnFxUq",
  "key5": "DiN64eGNMo4Xr7iCdw6Lwb8abW9tE9FzE16kx7vyw5DJSQC6aFCnRnqHzvMtYGVUPdLJw1PdcnQJTxXg9wz5b8i",
  "key6": "5zVz9NSi4wqWTuFa6kL5sRahpSgyr4BtNCb2sLP6iiFp2MBYDuXBHRH5msJkHJLc8pKvpapYK1kemiA3Wt5ZSxCZ",
  "key7": "3xMSawGGxjGAtFP3y3BDaaarox2b3Cj2PjTZqnLp1TWxagbLo5E8tY4Np4v1HybPPpYeSsk6VFFJa2baEEEUsmFs",
  "key8": "2ntKJnMj9kiMLXq12ZifpwVrxYzTLfUzecFJuRp6bm9tXHEESMApua67zMM558u2xx5baRqDVjgdkzmAqMAQu3SK",
  "key9": "5WAaiS7hfopdXDW2yunSb9BeT4ZfgvzfU8ECBDtyMUeaYmzeCwGyCkKuyTtEQz3xR41XCXs31wHxnJhGvtPEUQbZ",
  "key10": "f6fQ7HbVi8XH24sRMWNgePBaPuvfQqa9r7PAPzq14qAiJLNwNyQL2nF9yVoyMoWZTFAWeRLZqYyf8ZpEtTMV376",
  "key11": "5venDaURnzh5zF7A8tHanHBg8YCFiXATvKJ5niaGSwZwRTb5fkH238wvqFn9kzCR9BV8pUNrykkqsig8NRWYAqYH",
  "key12": "nfJZJEQjdgSzRt697iE3uUcfXrD7Ck4AVYRgMeB5nuARATbsngaPrSVpPC8nNVuNeKYG3DuBPX8QTY9gCFPLGPv",
  "key13": "2PzREVDDUmyXUDn3wxscwWwhKEBtZvW4FayHahYJc3kh3M1ZctvF3AR5QWFu5UF6GY2ieX5gnykguFkwC7HeNBgD",
  "key14": "53wrBm7KP5D6B5KFwBxKuSicWv3WmSr5AsZqeREcxSPvCBDp6FSh3WFiBbBbapzHNeUDatpkZjbcdgzA4P1oA6zt",
  "key15": "3D2j2tShMk9nnyx8Ls8nuzpWMZNei7FAwvwwhgQdefpGtN313S1wNDbnLktrJsXQ4nbuZRy7KakkpdwuM7JgmqaR",
  "key16": "4b7RFNKKRCbhwuHwoeFejTXumYzAiJ6QWTNxTxgVVuya6kGJcrbHRLqDV2qphsHPJrhxszTwi8Gxmzkqi3xncqie",
  "key17": "34Vzv5ebPwxPyuZht21fYmW5zVhxZCWwhDCcKw94hSeCCeAqD3iGYQHiK5oWvtR7oqxGJwxwH1BJB185CzHJzDCi",
  "key18": "3W38RCesqtry5ggSrF7SPBk8HVjvKLWPHtaC6PDNavqyrDPnY7RaVZby4zJASb3Ab9S3wv1AWgH7nK4dLyXGwNn3",
  "key19": "2o8f2AFw8vw4PPXXkCBFQgGULZ6QC3yR6v2BmdcU1LUQnYadw1mwutXtsiLQE8SKdnNSWEmRQwtD2JV1pJw5cT5m",
  "key20": "TLa63AS6hhVPq4Gbqkys9KLndEHWjqmmQdDit2n16DDMfgt9PdbipeeyEPt62T1AK4XgLcmiXQEWywecoSPDraJ",
  "key21": "3morWGqQ5qeUPYscC8iNhLct2XtMrFg9QqRUeeUyHNt262XUb9sMWXwzBRWjY13fMNkwhCfbhKTCn5X5V9pvwiPx",
  "key22": "3MxRFBUDBDbtzQaJofz5idDVQh6vR7kyatjmXX1VdnKptuRi1PQkrTpq6xQ2DDEMKYZR2mihyBQF7S3tkvDgXPeD",
  "key23": "5xLzz4fbeXPcZUDbResVedeB8Wa4QCTeZ146RaY3vYPq67EQvrZo3r6K12oNwr2HRRRBZydRUxSRg45PqYkcTFga",
  "key24": "4PdUjPo72vaN7s6KjwruDYdm7xxipcCKCMGszMpWnYjxzzgA4oWVLKkhSeaysXr5YWyc5PXcfGgzJuGJnmE6ctMB",
  "key25": "2wPfmxyC8jV1gKFFjyyWFnnFCSiGgB9bYpSezAp581LwLaHVtDFc2Wm48FEW73n3W1bnL9ZTuN4CmA1Pe1Nvmgyt",
  "key26": "235HMa7QRWYbYu5gQs4RrjjwPEHuEjg4fmWLeivn37dLg3r7fpYRKMkG9ABwW3JA9VQcvTePxfKJ1gGW2HUtQPv6",
  "key27": "2eEUnVA11aU9hcrcbBtjebJyoNRHp7br7ihJV71XvzsNtH4iBL4f4P2PZ3z2VQ9fhUY7YgZeC1XoYBaq79GtrwZK",
  "key28": "32JkWi1dzM9ME7sd1zEdttsWPxqmvbYRqkrDSFAgxVaXC7fhCrmPf73uB14fKCVcJxKArS7s95Ko4hb3pigXnhNk",
  "key29": "fDDb16NKWcnaHyKHs7s1gE9NUbJqc4T4zPDgQivv3mXpAgZeHippRgATaoHJzGrvoffu9DYRSqf5iuNVSk53vL8",
  "key30": "2RWkquxdDn4anarkEAMrRvEJnuEXkkUnJ3MrTHzNrHe1BwuyRVTgwXY5Jkvdupnu9bNCckzNAoEVxak7TzSFxRSu",
  "key31": "Musf3SJ1XMiGLw4F6pSxwmT6CmrLVCa29KuKnStdqqMC3XFUXFAhaz7ankTekLbMYHRydDgEo36vNgigtsPHjhN",
  "key32": "45kbDBpRdCQBDfJeewXATYuqZhPhwRtWLhotgYTRCGsWerYhwCH14WdwgeFzhx6yXqgDTGtavxk7kvvKmvQVPr1A",
  "key33": "4jZemfcGbjvhwSs3KyXU1YYZgkmDrecnDBYBUpkZQpyeJg1uhs4aPJiRS65ThBC264xvVtihvYuQ7E2SYMQHAjSw",
  "key34": "ZyTxsaJRbMZryjpVnmZ6dhmK9WL2ZCegTuWWs2eM2TkwtQYXvfE3UogdRxPQxoAW99xuZ2JJqMB9Ybg76NQUo5z",
  "key35": "3w2zRdxofomzaAg2sZfydWuds468ZsSsvFLE3AkTTdPfsfZB1ii7u1vLxNgoLC7AgyrbbtcumkthtMNjSdZtvAZ5",
  "key36": "3p3thfhvd4vfcTAjL8rgFjUgGr9puBugShU2FvnjBc5r5zVTeWfD6bGjYye7fPPtV1Qc7oRgA8EJmQVtcqT8UWA7"
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
