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
    "mgiAx8PSkq6FfMm8ViNPQqEj4kbNDVgauDZeq783EkGFTXBXjPyqnqhwuCxdPaxCoAaB9WCudh8SvsBRWcbxPxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PpXv2WziqGNUjzXKD2ivMgiji7oWmHf9eFKJrQ9E1HdBDuS1pWN9XGM21y1Z3eB7Cx2sXN9nRPpsrkUVj6ymE9B",
  "key1": "4zYwuh87PwZvwdgBckaJt3t81e5XWZKd3QJrPDqvAPoujHqipvDMJFqjN3WBtwP4v21JVvozrx3o1DYGZEK1R6BD",
  "key2": "3ckU4MLyDQfmpAjZdzLhvkStKf4Rhnpi4UppbhaEuiZuwJxgZcQPBvSRacjd5uQBrjibN95aaPsdrg5MVQBAjswo",
  "key3": "4jwKwXfGyFSUCX7z7XUCNFM9qutKwvsmJrcts1MHhdsTf37GvwKG1KRhJUzqUM6FSsHvdNnXhw89HHPVWeJjEGWP",
  "key4": "zk3xagxCns25UYhD8zmjnvUnFcMELj2v4ycMvgxLC6PEnLt5fDJFAbtMtLfZDxByggHPLXZyZvfbTn5tErn4Cwe",
  "key5": "3PdYCPqSYWPxwj9gQboK7mFjPjVJFyjxKYMTQjnW31eH2mKB9zf5sidCrgECJ5DfUGoxp2peApNidPAAxhuvP5p",
  "key6": "4yAnoyZr5hPnKWRzZk6qf3HzmbZDPtPs4R4rJN6ydFLTiZAsoFxZigMmHQGMd3FYDvgB5qRV5hRZLbiyzanVB36e",
  "key7": "C1wxpXVsEksNr2TdVXQnkogZrtrEaAx1itzJ7XMuDhYufih9bzkSho3N8USMLb1Z3sFHzot2zmaj22ktMhzJscu",
  "key8": "4EaEkNdb2mkpoyCMiaEGHVNuGjLqfMBoNXtyc1JbDrp99Yb1bXgUHqN9gN9Vyd9V96itgQdSTCV44XpSZvSP7i8u",
  "key9": "5Pj4LBCrB1DpWGMsX2897JrxUBL4tDF526wQMVgk3nJcH4h7SLMFLghargcu1JGdK2BgYC5uyzk5z7RHmangqPpV",
  "key10": "fSqnu7QcYK5BFH6W7Yk74QNh7vkPJtUirs68SbnMF32s1DcKqRCGQFajmw4fKVxkjReMysZSn1uQLPrbuVC5ELc",
  "key11": "5R62U8C92dMQjrop3BtjU2dcCcgv32TRyTJmPY8HayWHMZHb1aqjP632B8is18HQY2aBNgBnKsw8SQGV7W5hgTzG",
  "key12": "wBz4twrBWTR5Pbi9GedYQic4M48dSDnRiMwQqXHz9e1iFCuhrSLxsnBfNMnRv4qtSotJQFZdMjGAeEMKvmqsu85",
  "key13": "2xkVnr8ij7yo1cxUWZHYSorgPgxhuRxcMU6mYn3e7PGEvb9EZLqBxayuxuxWV4vqnPqZ3bxKDySGnAX9fX26bYyZ",
  "key14": "3xAs3zQ3RGSLGaRHwTcBgGpxsi4hTCZyRZHfdQRLej1dJpnGbCok6825purTueFctj2XB7qQW4rN9RJ9Zj4zju4m",
  "key15": "35UHuY8Dm4VufFooALZtHnLPDW3knBY9DrFd3gLnbFudXiY7uARgYHPb1mZHq5xKr7ndDDKXLgRhdCi3cWNUV5MT",
  "key16": "62EPGCSiovV4CbzRkKfCwvTEwZymidaEiuwdwdBGbBUTLzeDfAtUJE78YfW17cLYr6f56A1UxpcF7WzgVDWebyeB",
  "key17": "2uuy4xqCYVncKEaVJHnEeMbkzu2HhNjMf9L4PZ4iKxDs8DQCoYgTZDK8dipEMYJhyLbwUKB7ekyKMae5LsSS74Ui",
  "key18": "kCggoUpAi5rRY9waTnDFosR8PtKmgSH9EB1dLZf4xTHpiMo46WSoViN73LcxqHnYihhi54F8DYUyewUhVJiorCX",
  "key19": "23nL5y9gNZ9JcgSudGJJQzcT6RHEQVdYxLutbpj8MSj8ujmk6hBEds8xjCMTj1EAGcPBd6Sgi9xWMbxC4UEr8jcR",
  "key20": "5AR7ZBBZpbGLEX3jTMEPHFJ99SxoNnWZX46bbpE6TxbekBQTbzTSeruTSMgSGwTJB5xVKdxexebp8vcJPLudXLmd",
  "key21": "4cbuEF2pH2o9qqYWK3qUaLhQLADS14U9qL4rHAfKPXHwrhbnrNcf9mcZe9QfLnrMavL8WmJ1QDgEgdqHTKdmcYRp",
  "key22": "ST8vsNyj64SDb1vBgwc78wY42pGBAVua7kaM5Jh8CvhVx4mqBxSqHGszahaNreDJVHcHfcbgWWyoQ4B1g44AM44",
  "key23": "29mNcFvrQCJ7haQpYnt5bKyUjKSQb55Zgwxr21awdLVjKcLsDSvfau3jSsCrPZWy4L2G2aSb7rErR2fDqGLpTPxg",
  "key24": "DLKjHXu5znkZcz7kXWcEFznSTTJUqRArUqEPnYRhAT7jEDWJdRftnW22KjTJzvGAW43FtXGWtnfBVWh1Sv8Jvz4",
  "key25": "MMZ47KUtiHUW9JF74TZt3pb3QvxoQornuLX2GwRVNAnJprPMxHrLL5qRJpCYV4h9xwrFaLVE1Z6VBp3dR4xZ8Y6",
  "key26": "C8oC14cmxxwfpfoE8AicbSVH94z3egiqpSPwV6BcnpGhN94Up6BXrLLFeGb5sfmfYJ2JKqWaroLmTDaUu47KrH2",
  "key27": "249cBVwXegAU9euQAL3uWbfPT9LsikmjFhDLa3Gq2pFa3eX84qJcqr9UHndmPZmfzhFxxpYkQuxrrVMBPLS4UKiz",
  "key28": "4eM4Nc239ia4KbxXFDkyj3TeakXRRmUBr9bDGGRe7DwmSsokD9CjN2AGFy45ZdpZQBmHd2Zbb6HTskks9sQHzqr5",
  "key29": "Amg69wkX5wH5f7pLhniArCNx5WuMzrCGg5KSweBFWoCPcCfyXP8xkK95N4wG4bz5SqHqL4DYyMKoJHcAcDa9WBX",
  "key30": "26bXQMNqvkaKmdJjyLHg4agRDravgeiSW1P6V3P6SVLa4WePcDNKJmfbCzux8SQFF3wFhq1DxPpnsZuXwTCeXacw",
  "key31": "5QbjEcvfz4yckX1BUQjzKnxdKhJfraFaeVMDBG2jNyWWink5wiiyqo2cQNkMvuUZDyhQrjjERm5MVg8XVEXpJjM6",
  "key32": "3oat7j77VS8MFygp2aeGm3kZtTbQcvXmgHSN5UhCKCXo4TcdmbHF37rJgw1AfueiPfiPCECWsW1fzk5pk7BzR2Uw",
  "key33": "43diqg2xKvZyFkeqdLrvBjVifVd9gD6RnT9GZHjnnaFPZjTEPW9Dn1UQujt4GzUvBTP89Vn6ugw8pkut4NiLrPqw",
  "key34": "3qj5nX36egyNrGXfqzJcbtxSrxrRhRBgY3tduPatHzz4Ui3Rny9e7BRrNJ97bX29N8TgVuAqGGiFr5hyaqjPrZhE",
  "key35": "3mhqYRv4DKYo4vWU6VHGteAPSZZE4t1nL3Zc3aYBqfvG4sTRnJg8m553oa2nBpoz3v5EAXjyvELsQCoDXewEUv5F",
  "key36": "2vk6WYV6f7zrEruRV9PoPLCLqFwwQDySmd4M6bxcR3SYRshQEB8iB1uNe2JjcfYbYymTx6pYMrCHKXZ6jZBxPAn1",
  "key37": "5FV2mam8G42HcyuXygVJdp1nvHRMkcNXJwkK17XXeevyigFWYfivig9cBJW6JVstEe6mujF4ai2CEoCbAPSr4Kfj",
  "key38": "4MzCNTX5T12bSqMHmJmcFVVigqjhgMxe19BF2SKEthVp1K8qQsHQRCqZEusdvUGM22mEzQtiQ6DXS65WHESoHRh8",
  "key39": "2GK9MP4FeMJ2ZFetzFCH71so6EiPbSd46XGRZqaLNnhW6pQgZp5tPSYMtLGFCS81hGLz4etKmRsDfREGmg78969V",
  "key40": "2STC17zarPoNoqGoNKMf3DZ2Yt82jE1ynMYowHmvAhkfiXR2nZMrERNwYXrhMFeZtGqNBmEwSrELqjfkTFjELFP",
  "key41": "4HiKQZtjKfPtTEPZe3TarDNV6d9nDyjBy5aYNUA274hFKE5hqncB9zLgs6F78ceHAY8eZDWZEdJo4MQRcykdBJGg",
  "key42": "CdkSfmYyVhbjPEfu9gdieLWnvTm3niwPCfNWCC8GJhnW8UEmstkUfsViQbRe4cn4qSXGnY1pjGFFRyLfUNKMJQi",
  "key43": "39KEntWJHUR7BHnLuxta4dT8MmAakdR8jLsqgdbrkAoSvkRyaqCYSGpZFbbhcojQWH8VAGDptf5VcB8ysD73XYCt",
  "key44": "2MJwLWKetYoR6CkrKxk35yuTzPLMUsqNXgXa1fUn6PY64kgkR2rgN2GdoXa2evApxBFJrFT2jPqW29VukyR7RJa8",
  "key45": "5BcLi4LwirmyuZnfEhwrU1CRWBYujqUYSGU4DoWheMdNoecgqUTqUUFft4JFKiMNCemSJa1a1YfTUkHADDuXtBWD",
  "key46": "5DrQ6ipXZFDawMfmJswqAcFJkLENiPZ89Kx7jLPx2HJix2rTYqX1dNsa62qp1nUiR4SYDsKRePXhdLdAKWrF7dbw",
  "key47": "4X3hPx64V1rZjV5BoijagnSw2B5wjN8VtQt8hgKDvNDaeXYheDnaDV1wisJWseQ7pgiw8E6eFNV2pQvpPCwK2tja"
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
