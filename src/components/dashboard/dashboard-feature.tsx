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
    "5ierd6D2M2moAMHdLFcLbnh5eig8YYkuGYum3EQzg3UDqe4m3sbWSjVi4oPYvmXiCU166bZkf2HnSnbSZavxmtDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e8UuduhWBjyHmnUHRCMHcy6GBSBUPNND9efFaNSX8bm6QSPZX6SVrHWXUwowKrEHvpPvJKVPxC7ubWzhwXECnea",
  "key1": "3yTkX8s1TNFRCTXQTM1a41BBWUQzuG5CFM1Uw9tBU26cm84Bes9VZykZKLfC88dvkFz5qdt6D6pQ5bstch6wQT9c",
  "key2": "5ssxQaR4nqTx5gJQs1ohUwPrfPCiicYy9L4RLVcQK71HrhVsmVPdtFp12Vbd2zfcXDV2CXfWWY3HbiVzXXUPdEoX",
  "key3": "3yFcGwMBq2kRdbvfExMC7HwPX21W9NCEXsXv4y3iHmUc5g5vKzGLm97iXy5jYJBCSVSKST6vZvwh9LhBmnfHdstK",
  "key4": "3tiRiDG5SkaAEFDrZj814ZfHxjHuAPExsRGhLyENKwPw9gtuGhKC8owrrVA6wvzJjkmj9wBCjMCRZzWLDUo7agEC",
  "key5": "2HfbR7mdAaxNCc4kpsbWU7KhL43tE5T3tNirv8vXUaxY7EHofKQQfe2FLYHnyQsaGeaxsuNJC6iv1CqrjLsEw8aB",
  "key6": "2Dmy9WNCXaF9ctkPR7d5WYHj4pcZTtivGdQNeNhkHcp7p4exD28SgKbWMKiPtBDRXoopftaFMMh6nxEYWtMKzUsP",
  "key7": "3tZGUKjdtYtTva5RXw16DXJxcBTDBiEir2WLQDkQM67qGriZpVssGrqhj5YZtwbaJtq6v3QTYYGLCudTk5t81D2v",
  "key8": "4LzKRSR1PtaMXJd8bg5qUtVDdrrM4AdZZAE3iY6nACr4Fe9BzMFnzzb9G6jsVC7M42xpYwWEhQyuQFpGQEu7VZKQ",
  "key9": "43qvVw8jFXK5sAJpg8t7Rktau4VWf1dwdrxQKpyU2TKUC9i2CNupdVFzQZdatumk6jc4gfa3ARYBdb5HN23BoUxq",
  "key10": "iXJd8QcKocVveJpN8AoXJBGqxKy5KbzQ3urxNWjj89aoBALzi7Ei4kEAQEuYuaxPwmHbCKrZq6b47RoFMBxHaFT",
  "key11": "63CcNCADDeHhRN8k3TKs6bKBUdsW2WkETfT5AYF3u3FFbjRJMioiH1Q5kjZt4nhwk4yzRucUZi6L4LzzMMgXTb7",
  "key12": "2kuNmZBjKvbkBT1xfxeWewTKtsFPSokEM4rgGduehJiJkXNmDuo1Vbr96Kohc6HwD68RfKWnzqEkVLWmqDMDnDGF",
  "key13": "nL8gZ5PLXP87gco9LqPaRAFtu8B11n3GHbECQ52omMnGeYmKQ8ZxnVAv51cKm82e3vxZvv3tyW9FBwXDypQm7bg",
  "key14": "pyzQQQRqFMFPKLKhZi3dpbQVEzjoVMF4E6sxetVjKbfag9Vi3NKg96Zu5yppHvFVLFd2ffBBa9Td68CYJZcnzh1",
  "key15": "24GeGjmat9ihhxi26SwLSUsKkUZRVFdogRK37g4Qj2xyJzvVV566dqEst81wn2hMmqgDSye9L2KSHZyyXDtPUdiQ",
  "key16": "3N7HPVjAf7vtaSJjFkYFewZH1VdWnGF8rQuvQ66sZ6Rf9Rf2fEDTRGpRUGCNap4vgf48wyrddVFXyuHdUxQJUSjW",
  "key17": "NqohedAzC4wnjugNM43ojXaVbZVqHnnEnosLQ8CAMwdhjPESWPUj1MvvYM2ZEUCFEvE6HYkNkjiNRuSLz23u5SX",
  "key18": "4UH2qkg6TtEXtPQ8KsZrs7d5hBPMh3bMwRw69G4jSqEJB56oxnAKCyxWVp7fozFdfJGxVXwvz4of2YFfeG1XKQJd",
  "key19": "yEUt4yoiuSAN6hutApWDRYwAZoafqqsqJrE1C7NZiyTfqWYxYW2U4bwdEWvWpt2qnct3USPF2GBCGpAQkRTQfLA",
  "key20": "5k72iHisXYkzDBNNqsaWJfNp1nt5CN4XWXmdfGAUHHbnGCj1xoH6r9m78PRD4as1Z4S9w9vZUVam1QNEi3T11DuZ",
  "key21": "4aEC2jyW1rgePAznSHMJnoa7bdJUeDxYKtu8qVqS9prKTpDZ6HEk1baA3bmoNQ7FUvnRQWP4PWHQ1uFzsssTQY2h",
  "key22": "2kqF8oVeFwW8dxuCtUqARBqeuXodkSMzNEMN46vM3fpjfkWuLBTa7kzWgjbRsgqTTLJ2DWreHvbAWhSq1AkXZseC",
  "key23": "pDCC44NAicpkHipRLjLYRPB3nBNgvE75iZgj6f3Qhwj5TxhViRgBKs2hcyYHVCrekJDwmjfnrLxTbbSJ4Vcg6rm",
  "key24": "xc1T3V2Ajj3eZ15d3Ais7vuHkBvFwZZJrkYynxrv4TrrhudupFGej5aCaubV6M9WKryhVKHr2fHJF1dMJScfyzU",
  "key25": "3vtewxnt2kKTY7D6mQzxV6Z4GJuaJ6ZwBT7PnAgoEW1PAQHooFSSNCKnbqqDZXESvcuFLENagbK6BTMs4pW47KJg",
  "key26": "4Vc7LvWN7mjphtWwqELzyG2wS64qHk1F4hneG7QYqXAZa4eqUwyMTFNnhvxZhJR3AgnMsuh2Lxdh7Z2naerriDw6",
  "key27": "ZLF9cEWm46YQGHC3VJbjzvtwxcYVaxnj6E1a26M84XR7df48NAxJDpogc7B1vUbr4wgL9o9rpmCEApudr2Sqza8",
  "key28": "3b8yeknww4riNDJqN16JSJnk2LxQdTJv5YQWJ3VyfxfCr8BgrvQq1zXp2ohHwh3N8gFVJmm6QrAcdf7TgjS1wVYm",
  "key29": "bdcNhnW1bLEDn6TZsX33y1ru7WA59zKeunwwFRdQUZR6gmR896pyPCux7sHGDxQLdyuKEfBi5grtcCL3yedkydR"
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
