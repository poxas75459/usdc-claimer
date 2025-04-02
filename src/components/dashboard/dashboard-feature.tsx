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
    "5UBBuidgrY3UgyojbfYSW27Y5A7KZZQT51qufMmRfWRqgg87Dgv3BMgaqZ4GsxRKT2zj9aT2J6xeWiUVzb28kbzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sSbq1iw1MzZAhWJ4K7SrygNfVdMG2sBzszLaFoAveJg5cQenZgeWY1Girv6XwobeFbmGxK3SW42UK5TezrWPNdV",
  "key1": "46MqdQ2kooDVnmVdUruw7RwrCEFYjMe8FpiA6nrhrDewVEqLwL6NQeDCwMnyGe3qk7R2GrbdRcNwtAw84TrK1pJY",
  "key2": "4d6aL5KpFnAPnKLoFzFmRDJTf13j7ZUoxVWm9jSwRryjnofqNh5ESRM5iKS2GiSKmCfUP5TtxJ3oYAsEb1AjxuUg",
  "key3": "4G4GEuF1aDry5XeTkcfBYucwZ4GnYPNQ8ezAfFemvoDzLEEQ5AErZ9G9AKDd9Ppz2bwgRQruUGhQfMFmruyw5Nyj",
  "key4": "4hMEpUtus9VtWG3T1Gc1QsU1kV7LjicyW6GqscFCKjEuhfRybLNJHCikj7QAyBxX5p1vPiWPpTa9eEbPbtWcSnk4",
  "key5": "3pQYzBxRBn3K1cnmHba2XyyJzkDo7CWtobCEwwMHJheEXa6gWiBoCNThMh7RjaBNVfqBryNt9b4p6EHDbMSD96bC",
  "key6": "49xidyLbv3WRRAVsSJuA6KMa5Xu6e2pFSLrMsMDsSEr37Sjq74StSpwPU6Qha8YqHz8edzUfPkM5q9cuaDQtRbh7",
  "key7": "458pVrY8t3tQfgoHXoMKJRUXMimS9LbKjAYQitK3Y6i8hFd4tXpGQDHtfJ6TxfCJJYmyUHi68SVEPaii17fqB4bi",
  "key8": "2Y98jmUrewo8qqsf4oo8cn2pbvyTPwfMZencQPm1ZVXJVNXiFFvJQPGgiPHxUuKf89QeDCkrFmSVQLrC1YYv2wVW",
  "key9": "3aGzn6omUyMGmLGYRUzfZnP5QT1M3X3YDB7GwsZWBRjqatj5VPxXeBU84ABuAeeSfrYxzcrpubZSip8J8s7HAYAV",
  "key10": "J9Bhh96pMnTwSF9j79nCnC2Y8xTtDr7CNsbSdVty1UuyMSSP2LsrefLoxiWhUu8UiEYovjseM5gQVXeHZYoaPiP",
  "key11": "5wh1VxSeexwkSuffyEwNoDzM6MEQ79HQyjJHM4WKDH57WjHkUPrqKuQpjtL7J5k3pdvcVtsYtcHGmP5DRyicvTkw",
  "key12": "5RhQp3t5bf2ggswKUSQtA5sKHjgU86dLw8UgFmALVHkK7pshemsJXvpbBx8yFkEgZHq9a2WPchRjztqHVMiuTTGC",
  "key13": "4jFV3RwcmKmApkGuduE45gYDYBoF5jvMexHNWnWX1cJSVQmc67qyrTnoey9f92H9v58Rx8jzxVBxbuDWjfhVq6JG",
  "key14": "2WXTFBppEEbGyM254nxzNka44dc7JogiVsYmSuUhwLNab4EREHD9qDhG9717yhWC299sY5Lo3wqx5ZNqE9WdRmWL",
  "key15": "4ygQGwCajzrwjc6TJUcViMAkzxnoghsrU5PTjJ3hc52CkHqoYYevwRNFs4zUxkaXJNu6XNbqjVoVe9M6MkneKxHG",
  "key16": "5XMddM1oApeECeCq47JRCYxJUghdmWoZbCsnJhffHt1PxGdNuGg67qESQ1GqvepQbz3eERjtUawr1ovZGJ5jFJzJ",
  "key17": "3MNvi1rEw9PnxCFpXZiLacd8nAKzRV2a3sthYYx4hG7qMezzDi7xNaccykiKBmHqj4dRGhsjoScMYQHx16UyMCUv",
  "key18": "4zZUZrmWQRvRZMyKLcTWqakZDu5fHEC4qJMnoe6BnvChRBxUyxj2peZGAw5tCwf22QvwndM5o1FPi3uxkbyrLGVE",
  "key19": "2vAFkTzemtCV1BADMf45BSgEJLSpV4CHjt3R15DtDDN7C8rPjkNSe1m7g9E1H9RVHZxqkiBLkvN9HeGqiYXUcS2s",
  "key20": "4uEndZakaxS5Stacsv8wR9khac8Tcys6aEAmr3G5f1kdU5wm44rDDFuRq6N2jNgzs2BeXpWJjs2GoMzkZZ8CsgGU",
  "key21": "4QbLLdQ9VUojDBDRDroRDVzsZmu9Ev8n1LnkCrT99n1x314WhsEujVExFMVdv5PzNL8oVPBSyp2LuCwJRXpToXEp",
  "key22": "3zWMz3h1JGbNbypc1dC9iqWXoV9qD4wYSrPayZR19A881DtrT5kqxPQBdfpXXSoyiXrbJqELgHtfHYC3dKnzKRr",
  "key23": "463TGB7BZtZs1YRiubpPvFuQoD7jtnW23An9Hv46BVaKujspUEhQocN3nNZRMyVkNginCkfVhSL2Pq2uGxBmE7mC",
  "key24": "4ZUo6K1nkTCSpdxkTGj7Grn5SRSzSgxSujvx3GX15WVJBwVTK6svL4qmtd9oQ6t9u84qiYrPkqXntoqMoQHidaNy",
  "key25": "4XskVeXxzEswZBkxWmr4AtEJmLoD5q8wY2KuMWDKHHGKDwWH6fAzjG9ByaxSwDKamL7pBjWQJdi1iA6ReQTmpdNj",
  "key26": "4RfWGXq2craGEFZsA1myBwR28uXsRiJehofxHqo5rNnj7VamdnzFG8wQhQ1PeKd3Wd1tS1cAdWtL36BXzCw6ibC1",
  "key27": "3RMS2257qU1zytxaMqTwKN4ax4xRDTvc8wfHusiHEgaNCJDFssKtRDsaQwj5TS8GgifqdPLjTF7rcJmNBgVMLN89",
  "key28": "3yVNaLVGjwfSmBJSmQYUEjKaqWJStSLRbfjpk34gVHZeDeqAvCvFqz5sq56PbCEVnfucqvTGju2UV97PgvYWTnch",
  "key29": "4GxDs4kLE9CUNCrW6Bn5h8jeAX8i35wXGV4A8AxeUvikUPBRy5jk2HJZjvsztMi7dbrHw1Y1vNCcgrue6EB123KU",
  "key30": "2hGm6y5Wj1kr5TKNPHMmjC4tdsscjTNyF82aodQSdASNaN5TiNyaraDWimWPVak59QRx1fR4hw27FJgfybUPLrMN",
  "key31": "2ohJeXB2y4gGE3dRa8JvT65AeormqaTnY13unyGasoYqooQ8LoCsxR5rkf4CKY4Lwhu6TgrZdrWVBb2f4JtDT1rc",
  "key32": "jh4As9B27U6puZK8HYpVcAjAcEUqrspu7K3Au1r6AFagjDRPH67k2ajDwyHFiq4TFYbMkvRvRukaDsWtiG7jMZF",
  "key33": "2bTLpeWRZdZGxDr1dnAVNGLyJmTh49tkKG5MPEfkPo5eGq9whF83qsEZac6YPgxhFeTKKnnmFqxvK2ukaaK1mUmv",
  "key34": "61LW3XFy1VCEayjzaXnxQJhoSF5uNndQwDoeN1Spsjzud9bmCYvSBo82LNYRnrpVtw4suLPiuHQnCYbtUuif58g2",
  "key35": "5jakiqBbtNut1c4JxuxFqph2yNUkKjGYrMV1R5qAmEjyrQzgFh3DUgBPMCubZ98ynS7mC6QUb7AHDCUbnB4AQP9a",
  "key36": "2tQWUH1yXLynFsmCHvGfRpyByqVYwxEbyx7KGFwS6bRffyX6zkTuQMDseBFrfjW3VkcdHSnaiNUtmG5PtypkBZ5t",
  "key37": "3e5AvQTGYnG3fDaTWQBCp9iLJdQfqwvVt3hUd297FULJFRMaUeYAhWWi1WQffxQ6R5TuwHCW93UYCN2bEDye8Anv",
  "key38": "4bgpRekbMw3JV6C9XJKqoWza3k3DnXpt6sNWuSi44YNDe9JF6ftkwz25PGdgqVNiYGsTs8BmTy34aZCTK4jbj8EQ",
  "key39": "3iRNVpHGxxefkH62mpJ1DpoYmyaEEZwEGir4MZPrMmEssDmtLwhpiJ8ip5vmt7h4EZDqBP6kZQ7GpPsgqF13Exea"
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
