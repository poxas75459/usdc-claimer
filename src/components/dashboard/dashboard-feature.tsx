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
    "2U3wW6GX8aW83WziCmscVygUqjvyea72XxRfcC4MNN89rdRhKVz1PU63ioi1KTaww2erUjxQUKhZ2An1c5vdZaih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45BUJQESW3ggjxHiqNTkrM6kzLpXTE989p21HpVwCLzwzNRZS9ZmqSxrkArR8br7pWCQeq9gNDaqDsZTTkLWs65c",
  "key1": "4zJ9h9ojTjs6mqENPkEAepddyohtB3kLzAhMoBdLiFartS1LJdB9sjxgAZNebbnF6SvcU1Vz5ndJZnjmd6frusme",
  "key2": "4dBTg1JVBF3BvrmoQS89f2q7yFQdS6mv6xAgjZs4PnNPyqniEh51mg5mm6UPrWU4Fkm5pme5926mWE6srKED8KER",
  "key3": "4gmKuCJd8i4XQJqYPDNabKN8C2qYeHn7dLnBYMnxQsoceg5gzdndXd9cCKF7T6ordS6B7QcddFnHhZBMJiwTMa2E",
  "key4": "2LTGYpwaUrrcNm1KLeH11RKWiJTJcmwDpWrmjqRe9DToycti2pCgv9WcEMsD6puem1y5ShRKo6Wvk5t17WhVhkFG",
  "key5": "5q74eLpkf8Mkhvx6FtKjzerdT6tgfs9ivT99FBB9MDA5XYC2yJQDHtD6Bo4qd3qds2oueZeoio68GdwgrKARxKq6",
  "key6": "e7smvCU6JwSzdYuJuh45dovTZ5xAXqjBPu3jBXRaEmZXSBBCZ1iwtXNWmE8JtoXL2kUWb1xEChRxGF5R4ije7w3",
  "key7": "2drdpCVW4JCNHKwBNHLVMXneqAaA1h9n9Mqa56ncxNTBPWgdVGc6nVwTmbygehARcpT2fhYsRzFHpq22kpEy8agf",
  "key8": "3Qq8y1dxsA749wswPWyjKGCxTKzZqjgUYARHry7n722V6ea4nqqUY3q4FGJcvoUAtHy856FhR81g48wxaYQjhrPM",
  "key9": "31nUsBvzBLWcsBwLeQzeBHgYcBmWCaiC6fgM9k2MHZY26okVqk6HtWvc62HdPj8Anbj2VT78G2nqzDptb2jUx6kf",
  "key10": "2QXyZHhQobyBEANJT1W2LNBpvDxFgx62BzVAAZevnN9qVcn4ReJTbP5hbX47yL1srtHT1DHvFU9TAKwJkvejk2Qr",
  "key11": "4nJ5V5op5VtprrEER96JecRoAm4yGvHcVmZRVgBwgEMJethhkFYUmtkWoB26hQ41ZhqZMVsm3SXPCKzBpwRWfLC1",
  "key12": "dDdJpfZnDnqhF36bzivDxdh4nuqD8GAjStk2iK3DE8MNKBV4Ps77VaN7P6amLb8341AyrhzpU9y9efAPiuaucNo",
  "key13": "BDrXsoN7FTDkcbw4Rjism25PHTp1SZFPrnTRxfMajMiJ7sKXgAaBSZMjiQJJUdr3WABB3q55dUPfgs5RT9BhAVz",
  "key14": "2ub4uYiurV33qeZ4VwreWCsPTdMfmUJ19wisWBaCMUKZrcBrinM97TmYAiT2RDTBeBCMexy32bJzxFghUrBmJFaf",
  "key15": "4rXBEXJbEH84c1AfKtTiA2obqoNmLNHFkAzsWr5o116SNa6H5ZwrfJ2XWLN67eVUW4QSZrFvmthyKfD9fgm596AG",
  "key16": "2fQQn9Jq2KqQtQKjaKFEoVHXzRqEhQ2VSsVfY8uecJgQgSDJ7a6DHDtScq8egAMC2LHphmtwr5mi8z6voBLr6EMh",
  "key17": "61oWL5uiixk1ZdrUtKHHCwvDgC56GoGbn4mwkaUXHRuMzUZKKUKVAAX1pnMUETAwmrLcxWmLTzxgsLK5ARyWE82u",
  "key18": "3wh1eg5RAKQN74Wo2SVWpgRBxiv3f77AbrbPcxsfMGsZK16SeW2EnPQFH6rGFCpgeNqbTprDj1213jTyXownZ2Lq",
  "key19": "5c3HbasQLg8Z64gi2iTY9ZtTWdQcT22Lr18TGDxJX2w6zWBA4FGX4aZuKx1qFYbdcgQxMbx8DaKELC5RiV9kb9LE",
  "key20": "4w8J6Y6nSas87E9NW8DBqbLd9uxaquygdH6mchQU8pXnWorSS9mH1L8x89jUk5XEczreSFZKpKNsczwe9pFncCj1",
  "key21": "5NtWyfy2axZ2ikB5ZGmJDbExvUKfRgmbCHcuFDf2dMo1eHuMka6TgJzMB7vBoXpCLKL4ddqYphKKdSss36jirmxv",
  "key22": "2ojuHz8gP6wdWUfN9VkVFszS4p5AZsFit7kJB3hy2dnkdbVxV9xtktVPSeDjkRqp7XfwHATCEryGyV6WewVQxiUv",
  "key23": "Cq7JmaDxs1NsMHYUsaWxFHKhfKMnjurVp45Zo9ocYYrLPpgYXi8MoUJDVdLJ9gTXdGjp5Btq8m8W3VGbqHMzq4X",
  "key24": "5oUgRtJrLn3QKqQbXgmXz3bYJQLnoZjrFCX8M4hUKMmGYNapdPSC2U8JJauedC9P2CfNj36q98qNuRmm8hvC2uu2",
  "key25": "er4Jxus7h3JBSqcwdZb9uFouZ3nbsWn7iCZvDUHcWtonQJqETyv7FB94gjR6U9ytcg7YPUBTKSXbtni8gyd6Vtb",
  "key26": "LsYQZH4SSeihNfuDK1m13o4kctrP4KWvLTMJj34NbakUKZcJNAeqHQcHmfjBA7mHAEjMhMhT4xhuBULaCZMbapT",
  "key27": "67aWi3jNAvsBEj7BgUDVL2jf2wuuJshbbok46cWMFFbif5gcfZSzpUBzJqkUZWLqd8n9WWuYjZvsrUbmwEBcQBTf",
  "key28": "2k6EGNiNvNAbsMv7dRES3wdpznT1VxsPTj6ezhyMFu6oMywdb6ovRueLwnJHdcbb8ak6q12rqbQNkZiYBRJ2e1Ja",
  "key29": "2iTyNUkMmXDNvge9mTteVExhb3zRApWAV1bU6mN61GcW7AqxPwErBZ83eWeHKaWKLeLPyppketPfgoZgdfYSmgEw",
  "key30": "4LJawGH5JxSohZqweeqfJFn2rjfn6Td7TP6j9Lxo9dZDgVCefdr1zZtoQYwnm7zNEKw2eevnZsoCDN7eykRuj1Mv",
  "key31": "2Bo2o5hdiLJsX3hiQ1ekj7JBECg9H2rENf3BprHTsaqsgG2SqC76EJi74f4wMiUgPhzSh6vbxvEosr9aYTWK6WV7",
  "key32": "4qpCAfwEQpg4ZenqFyCk8PPSWBHyExukiqXW3z7LPjvtq9Ws8Rpc5fhH1Gy7PTJimAT9a52HiJ73guMUQeVTYpd1",
  "key33": "VSoZcPCuTiPDzhczr9mf8E52SuN78Hv5bhDTBcw62LR56BHyxMQxRJD3ARnRppqaNY7GaMDsi5XP5Yh9pRgkesA",
  "key34": "4FRbmishVAPpD6S6dqrMogVxn7SjS558yiWPvxCDtehq6K7FfvBPKHBrjsCY3Ega8CWYZChNQFKDhRawzwiCHvb",
  "key35": "2Ljk1XRU7BfVZMLZ2iKEkXFY9yaBoNVc9pXnfzJJWTDCm1aTjozMHhpYagvDgoCcv4Vz6YtD5tYpUhkALHwETfRz",
  "key36": "M6wazPUjfhSnirV5VArySiTKLwXZLtaMNfmj7NqaRbmRkKzwYomSMSheA4xP1wwZz7J1sZ7gKq39Y7zdnapeYKD",
  "key37": "25qqRHA3JNSeP3NoxMsi7NU4gKwUKGbMgxXQAsfQn3MnT791EHptdMk9m2JdArvo4shQBLjVpvmip26pdeA4G9Fi",
  "key38": "5GFKjmeARhV6pG9mqpAnU73KtASnzzjtw3erknMiMKiBWxmcU8rakeMBWZh4dgXyjonbzR7RvGPRJPe72mrjGHRx",
  "key39": "5qpAfP2DwEzRBKPzu6mwkWktKeNFbdGj8sA8rWgQuwqsjCD2VxYLonmgg9gjwyNZYnNmQ8AvT4ieHPXFZYXoGbv6",
  "key40": "3t6JUCiMGjrYptKmJy61xDPwqmtkpefbEaaF8JYcm5ZHHmnbXbaATBYk5YbnZ3hMLDhjohQDJ7ZpptPCc6cvE6nx",
  "key41": "iM3wuNw9LHJuzq739GveDqChMDeykAbyhjfu7d4u8Yss1CeuWtXPEahhB9t5Dc25tiij5NrnrBeFZUMac8aH6Tf",
  "key42": "4byt7jNdnJZzNGxGQCVTExUGizF9pc9hUdRJpuLJ2Ya3pYjzQFgSQLgkke9xtcRxx9BCJ55MmYUQ73EvgbRyzao8",
  "key43": "62ZJXdn76vj5Bnd8yKhKEJwpYMUE6P1mnu81rmGWC1RMEuqq4SXJDzmr7sJMkxizHmrtrUFpPHkoGt9mjjgcdPuC",
  "key44": "nMGXxDwvMG2g6WmzRgbKtrVY6pNQirqTUcuF3gNiz7LeBL4aAfR766QoTzqU5j4s9XEbef5wKfwyhKzw6anbgmK"
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
