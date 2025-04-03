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
    "45sSzUok2SZ7MRvMVc3i1A6f1FkffM4ZMwTgCAbriFYwddVcQpkzHMod1cuSDb8KQE6KXAGnEgqhzpqj4haby4pi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48e5fmbFdKCfLGE3WfAA893TGktWEm82qzcXZo8L9ZdvSXq2vSU8JqQsbsxYk8Sb3XkBr6yfDD5yyUxY7FF6CBUF",
  "key1": "4NALL3pFg2FXyFfBSRxjMDLGRxtJs1Rth9bW56LTbUN21ZBQeb6qhP8ZKcHwPFAFLpvcs3i71RnPCUiziHdfN2fK",
  "key2": "GRVqVuuwX6LN8dQFDka7SEBsnJr3jPHjKwKGLq7BXGYgpg8M6FqbyFjLnupkbiMa8ijsGASePYZzrrefpADqTmK",
  "key3": "VUCGumwqUKDBrcajZwQ9beix8rd868DMeZifh2rJRgTZfA7cW65cK3oRi9Vea7qNKsT5YoJmGFRkc7fmRqSm95t",
  "key4": "2eTeERbrs1PoUzCYk1BrMTYAs9xsx16xV5yjnwdFCbnad2q9ZZNAiyhSnNkHRPdVr5fuPhpJ993MYyw2K4H9Myar",
  "key5": "4aNMY54TEE2PoKdRmJxwtZAeVGWFwLpcFCsyycJCbcFdhvm6SGRfqCePy4B1rPB35MncL4TTVbEf9ZXPX4uvYRYm",
  "key6": "yJCpPSLFv6AhMcsaDvGvzDtcvhbH1cvkzzeecKfgUHfKu9mpNzB5mhten23XoJguX8vAQx746bLbBgRc4LtmMhs",
  "key7": "TZkYMzginvwJwpRcw7DW74yiaaYUaMCuswZ8qHFr1g2mihhMthSgnPZrr4UCyohQ5Ezad2DkRf5yCZ97djWZLHn",
  "key8": "5gtYUzY3zy1t6Sgqcf6CLGHdHXHKaumKPhKPmZrYpR1XwGpKBBweQZ4NXvnngH3yCiDpCDHHMRMT9zN8VjVLwnkK",
  "key9": "yhgRpiCSywv1qRPY6mxZGjE4htvAa9VtMBQaXpNVrP4FBGfC7cWVZxpduzgoBQhZAvKr68U8avXe9xrruyuhtvp",
  "key10": "2mZheRUSsdWC6ERwJAhNxh6vUwCMxp36ATqT39h8ZyB9ERRwKivb1JJUheBa699xK45X4d2ALtDJki78KXLsoSZp",
  "key11": "5fKfQC1LbusD5Kfj8k2LNZSpLmxLZfKAM2egFinTjdGAphv2tcePg45vL3QrNqPNNLhDDE9Rw9GAKJyzqGAwYnwz",
  "key12": "3kTJMbgQcBEw1pSkTdhujt9p52fYMLmUW2ib8fZzEeKuQU8KM6yYLNA3FsenuSJduNttBZmEB5RNQu4QEuzhoZfm",
  "key13": "vPqYAUGoP1A6L8mGC9sca5R4dCDAe5hxzhj3EGTBfv1ETokuXz11qB4cBXXP2TsWZp72n5iPb6m4Mi1u8AUs3G8",
  "key14": "2PDWBPvfRQzhcKfTXY1fQCb4Hy3CkC6n8rCDdXFjneci3ccswCZEgUBejryz6LvFTgrTCcy4vouDPcgc295xxhSz",
  "key15": "366UEPngLax1wrkKwoBBCmTR6xKgPJZpEU9AVnE8fzc1oDVEGQZb2xttUYzxTj7T9H3bt95Y4qyWgZZbxjWfvTgK",
  "key16": "5PbAJt5udnmpZT7L38j1opjcwDbg3Sbpa4qAGN5T21s1SnY7bGtvnui2hkYz7Pcy37LHAQuyDz9o7muFf26JG27i",
  "key17": "vHS4efa7Yn18JtopfXABpWqZSvc1g2viX9BHquN5NKHca5n6uRTJZDBTYT2Z68NcYThZE7aDjyuiUwW2iufLRbe",
  "key18": "4kSqKTi8cWTEh2wA69KbzGM7xHLEtyVQUaD8BPEBKLpgzT7dbiSgoyuvJCbyVm26HRwuoeE8zU1ccNx1qDur9QHe",
  "key19": "AcsStV9jcbL5ECNBx4SsvcdQaPZ3WNspX6bCn5hnbQAR5Tz3tqFcUST9oYAQuqU6jK5gphVNS7bVL4Niigc8uwE",
  "key20": "4EWVPUW2TRDYgsFeT387pNJuh88UVJFrABRHhZnuW8JKapcxhCMY1VjSktQSGTNd7szLj6LTM6ejKxhGRcvd7Thr",
  "key21": "2JbL1s9UyA7RQMrz1TAJZtiHnMH5ujyoVnCSZ6dHwN2R5xWrGZxf72SSdhPjN9B8p7qaUJJV4VfDyEQgaBVcdc5Q",
  "key22": "4CHgQCVCVGJGLwjYV3zbmmHZr6QthgYFVzC8LDYNawipgpLB826rEDpJLhRXTtgji9CfDjidCYSjqMBKLRf2Uysh",
  "key23": "rrjyunsEPsqM9mUeNGSYkXE9ddRTL8UqFhrHuix5LrEcVp19dKsfUN6ESFJqsRbBEibNwRr7icUqLf3Q8ptyj6c",
  "key24": "2oee8qDLh4o7QMFQutfQ7g9kDd3ZXcnVKzumuuDNSy33hpZUauRyhB4WZqZ3TetCqFhfS5E5dKZkQEKPFDtiQhEg",
  "key25": "x3EJcQfLpeoCKwuTRMLK2YGkeoLfGhxQSPdbujajQYwvGvTKaRw2w5Y3K98XBohysc1i8n1y2q2AewMTqSLJ8zg",
  "key26": "59pdU3HPdKeb6PLs4kvhLYQyd8VZaY68qmcfLqJwUuXbnYsRFYxvHB7gDAvnLy2HQYP25niCQh6udM7zTJqzcCCr",
  "key27": "3ZpfY3YftueXDQ7g9ukHxufc8BdCkjiqDMpKaPJyzDbM563Lp6GkfSRvsvwdLeoKbEBJYv6fs69HEs2xXJAJvJ6k",
  "key28": "5E1pDBhYQf8N65D4akp25HvPR2taffNJtF9z5WyXGqKRQ65bxWEzWBn231bGuYe4zUpxYfYNekryPikcUrvjFXnF",
  "key29": "4DShC63e2Q7AuSYrvZywbNuen9ydG4ZHDHSH7EWixDpughoZXZeekKtySWUHPc29CuPB79kXbdSV6KFa8LHb5bbM",
  "key30": "heQUFP1cGQevxxqLdssuhdk7X4tWUFFPybxWusr2ZXuvPHeXvAQ16xnXVq8GuovVEKA2zK6bXwmB5jdp1SLbhus",
  "key31": "uBJR7FY9qDnpXEKwSvF9LFzigq1GHp3EbWAwkmrLk6LvTtvdkrFegZmMpAwko9EMoVJyHuHAvzCT1YEHBxD35xz",
  "key32": "2e1koE8mvLda6iS3gWWSGiCJastpNyqGnfAASYnPLmyjKk9xySbz6agdtMFpt5ncJihUQMmJ9EFNyc8r198ZTDBt",
  "key33": "2AWfgPRLwva4Ce82XouSmQPuVK8oZYBQjbA31csk5d9xgachCjbGCWWBGfi9De3UEN5Eyzm93DsM9ubbBg5cmLyc",
  "key34": "4kWUk2KNK5xAhKH15sD88SaF15QpskE69WL6Jtrqbm5QedzSWNFwNJzCuMnFoYMGfYvoMF52sjYKz3BHgDfvZEx6",
  "key35": "3dE1MPr3jEdQfeJW1iza9EYLpaeyYRXaeH7ZQR9ucoTH1szY1yVGyeVuhMztzRZTKhxbdwCvAE2eyW37yMnuxWV9",
  "key36": "3wX6qp17rsQGisBsnwdfv2ZYeoJsMLZvAGiUB5oGY42FRXkNyvMmQyZCFozuhsHwBw7muG4dbdYwZZCkemKUvq9U",
  "key37": "nEPJ19Pzv7JdCCLVau7Cfd6fwdJGTwnVkKCGBMdZHj7Bs7C4yZFjvdetMU5SaVcMU7memErDVSzvxTSNNueCdVW",
  "key38": "3sYWzzXaCknW4WEuoRa1swR815uovsabuHWfarEpg1iTVp3dzvEQrvRAaw8X2gBanJZ3rAv9AiBj1TSY5nmz2dkA",
  "key39": "4P1a3WPNdVdoAhZdSbRtQkRj48vM43a9SELQ5sULVFCZi2xZhVukHqYUonqPrwtRVPQytgGjqFfZG7FCHdaiDheQ",
  "key40": "427bzVzYhutCq2UYNaUB8HeXqztB8V8e6x23seQ3saaebdafnF7gmg2Ar34Dy5he5PNqMjrifRg1oR8SQPaMpuXn",
  "key41": "3hijskQt3gYHFSGXdQwZPWh7hHiAFQfMTNaoUPNZs4jfV8YAQQfcaBW1jXnfsa6TC7VU5zDH6VXFeC5PAZhubCjQ",
  "key42": "2GbBb7Z3efn8tDCbqsBzvVzeX8r1rnrvt6yFvcLL39xQEK6S1BZctjCHLRqXmdLTvZu2j2ZWXn1Naf4opk3yM3QB"
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
