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
    "2PEQpBb11fM66xe7eYpxWB6J8zgTumoW6yJ2h9jj3neMvfzZMJJLzrE9NkXGLp6JwP1NUqANonDWxKsujvkENehr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NzcFgXgrbSSuASA5GbX2WTXsKjVC6MTAV6qa3gnH6KjAtTeyg6uK5TDSSr772U4PiHRMPD1thebjugM9xdvGdi9",
  "key1": "25eSKY1ss6fJCqfuqjZdArt5jh1teCxmv5aGk3VU4A1HHNVoFLpC6Pf6iqjCn1HTHztqTgmkVRddHf76EqsR8RtC",
  "key2": "2usLj6y8KK3SJUjcybE1yzWmcyCA4zimEV3Nu4jGgN7PME1xPS7TK8veRddRZdefAUwD4ohDyTr7RN9EXQgcVTkY",
  "key3": "588yBvih4Cv2b4CR6JuJCRB2ThjRJ5UugWMgATYvuiEVfTpXqvXK8yKA6hYjQYUT8EA1DiuGt2aWUj3U6XJkL6Gd",
  "key4": "o5hhHsosk8GfxPZ2bWuyWY7WDGJhyuD8CzjZHrGkSbeAHZaN6Ycvr6AxqQYBMfxKYV1W3ssyurPD4343iT4bueB",
  "key5": "5QHwktN8tSCWPx6pNDPVHFxpf9S6Zx5hSetucrxoUJmWnf6mvAHyzhS6kdyVmEqfw9yyQWVmz5nThud9CRfGn9Gu",
  "key6": "3MVhKkqaJzE6wZxcYtkNGKtXTvKhDn1DEjNTWcmNjwumzbWPJ37HiTtvXjmjVMCMGQVSzLjmf8mBfJLkecrYxkJe",
  "key7": "kyw4pyetGzFgDoQAqq3BLqMckwexeJpEa261twpHV8yGc4K8vNkgPHunc3H5RXWavAcJXoYZqWoHCGTpukU6oEY",
  "key8": "3i4cLzSdVkKPm1xmDmTJbbNgtZ87QoBtSqXk1JgkK9qXRnaUT7gGKGmMZvE7dYVzh2VGkixRXRwMUAQ4X9YWcHrn",
  "key9": "3VLpTRehGZY9HbZxM2N7Bw52tgLESFtgNSjvUp3xgrtrEqe2z1FE5RNdXGQeW1Rocd5dUheHf1is8SmbGPMjCqGH",
  "key10": "icRVEMKbgijinyXfeZ1Ss62XaNMMriZbQYCpB4KQRjroQMKPvRr2Jm6DngvmEFSskgvFKbr3NSKaMCyxNHC1Pi5",
  "key11": "3PHBJXQ71odBthNiTn2LMzc3jCqr7XUdFumMB6qiqqzS7EZuuokWnFSKVcWwM8p1DxcGjkjwzEXpxkRxvXd8B4fs",
  "key12": "4g5RnKzpUpHk2jgDfTFAst695j2wZGpTLN47RkpSBQV884mHSER1ETKhYd2RSVXmUiwbB8xYUD23ut6Ky3mgWFfR",
  "key13": "4t7G92bBev59cBg6MCpW3RGV6nkFwgHXB6EBGXi4jZLKcGDF2BSdC3MHy7evgGHkwunRTimsfWJk1EiiciaDf5V5",
  "key14": "3fnNY9KNs7rGjRvEumojyuMeviW23sPsfvcgtueX5W3FTtMr4G6GSFhctPcjbSVS6Xj5hyEmY9ijyk5PHsJf4zwA",
  "key15": "4sbtRYAqMjH8bTM8zkLVTkErN3DB1hCufgHGNk9xGu18A8LwiHaLRN48sUEHZTEGMgeaWgJt5tXGhZVqjKTRz3Js",
  "key16": "5GxdqB3NQsULyQiJv21CRyfApL2D5trjovHd6ZmS8PwiyLix1umLp4c8LyGgPNNHRxNthaNkzAt1mgbQMyYEXdYP",
  "key17": "Lz1xKNN84x6ztoJtHm39eTeKmh5PT7vXo3Dxn1aqwj1iQPcqhe6R4srdTfVvo3jF1wgGfTR8ZToXFViFm1Y3fTS",
  "key18": "2H3UGdbVWW6uJvMB4YMPY6NrcDbiy2WNYLLBQbLd6Nt7SbcAXFQ1s63HfmD5ieJ9h45vSkLwxC5aHQnyN36umJix",
  "key19": "31XhMu4HqBvjDWHqvixtY8Bx5gTwdSecYGtxtXNKcx1eLCiFiqMCZjizK9W59SNS1PunzL6MxYfiZpmYWcfWgGgT",
  "key20": "3xqLFp4t9kVXmLVtjHriKtCkab9gECnDJ6477tU6ADbMpVxGWtdMxE7ith2Ay4qo72Xb3PUt2CCijRoGpegu2ZkH",
  "key21": "bHtcfeLyxYbFhfvhfEmwH1agwctYjg1NXii2ggx5BuFWfHRYSzxkPG1S6DZs85jQyNVqKjDX8VXqGsPvdKqLFyb",
  "key22": "4ZgVCu9oiqJ6qDG8fF6W4Xy7mSwEvTsw4y2BuXyKT72EPHDkHPw1yRTswe5tAxTa2gRWLsTCADGUL3qPLUpRWyRk",
  "key23": "2yeWDMX3WYpGEkxmHddMfH5NoewsVswwHvR5A3ChLFBe6fsrQqRapPbWybULYnbdeqfJxr9kZceTe4BDDHMUoQve",
  "key24": "3ZdRDRzrfMjD3Dk1C27opf9dXmMYpPyn7nTzTTitj4rAHCUfVZhszBaMY2jraihktmCUKHmEU7KabPNYkNwheyb4",
  "key25": "3t4ff9NcKMVZnRzDjGKa5DQwcCFiTPR4DHDjQScctuohG1HqT1s3QXbn75yN4BoosuADsRaBdqrBHhu55w8SNPkV",
  "key26": "3YYZkD1W5XsFgos2tabmMjLP7eL7THt7ryBVSTLz65KCbxRpH2vSfrT5GZ9twQeTvS33skBR3kbVodYtcHSkdoo2",
  "key27": "2zrchrq3kD2rw22LDD6tRw6Z4o21J3JJvDWhL3JsLnye7decsXtg4jvAmVA7eRBBmetTcUgbaJFL4tFpmoDVaJiV"
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
