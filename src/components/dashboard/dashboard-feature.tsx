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
    "b4kqtmSeo9Dcevi38337cAzSakHSSTXdRP4DhJ4DbjrqetnAZi5dKb6mvTipXGmgyFN5wwmwE1mGm5Cx8HcN6B5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "266pMkZHtDHoxDQHxrnaD1pLjMWGq3kEEZSsrJ4NnCgw6aASCKvu17791b9Vi5BZhu9QvABFjyDD7CeKBjt1ENEm",
  "key1": "239WJ4ozimskCZYHoDuXXQKnnKcmYGzmrhD4yYEw8gxC1LC52jahmsWiWVbsfWxX7sxrY84DEATCJZ8Ka825J1pU",
  "key2": "5k9huEWCdDkewV5AeP5AY3M1n684SDg6fZwiywdkPXQUmZN7RDzmu2ppjbrxfF1T5t1rnKve4L5JtAVnkMJje2R5",
  "key3": "5U1hCWWjq1JFyLB4VSYVHRoHK2GhFpsnv2Sc899rbpYiVrhHXzMygDg7Nzv3f3gHqTm8U7f3A6GFRHyoepwd9BbE",
  "key4": "2yqNs6potcdPBYpRHHLhiUgHoLU3DQV3d3ou12L83zyoz1w2baMdNTd7SjZC8ps1jkDajjXmi4b8ecPwcqU9vf1F",
  "key5": "42BSQMKNRoSvUPyvszV8jCGmU78H1XUkTYoxYbKZ88dq8V3HAv5hrGBkixfnUPBB2Kz8YcoVqAd8Vq8QnS1PzLn",
  "key6": "6NTNqnHBRWUfCB3sCHyNUMUfWH4aTRsVX1d2nUa7H2zDZnQTLDhkxJETpUJd33B5TDMVSQzHknrGwBZqo77wGhB",
  "key7": "CGgJT6QHaekbd2KtowZjW3oksPLBACZCqgcwsNLfYLtCAbPKc5RQbtBdV9NNJ7GfsXpTteDMvHGCboQuAgNDcre",
  "key8": "3vL6ybcnwq3AYD5AhJ1nTfXyBsNNufM7QrEBGS95ggwFr7UdFU8ytHhEb78RSATLgVcC89dtryZDp5hy1d6fUvdt",
  "key9": "2WNUW16U95pS6ejmeBjbLmzP83sBLfRKw89T7WNKBE1mqFwvto9x8n2KdxPJA6iZkyvkTdVbhUriq11Z1s8sczcN",
  "key10": "4VqEKERsSj2HD1kdn3w1ig8M5cPeN2e7zxpEJ33mjV8svZ1vSDWmyZ8rox734dA6Gxm7C1tmAtpnsYVJKGbHcBHS",
  "key11": "2tC1RShbLBgUakTgoXkXQEjqEMDuZdtfJyUDwKivnkdoUFoSBSwCG6f7FC4S3qZqzhojygikD4ijmqU2sGkRJKGr",
  "key12": "2X5shPb72hcJjVL3QWvdNvqMmPeCBaZzCENUxqeQ8JEucj8bYg8ehWMUSp1oGfvH76f4m6wLHgmR8Btq8RHJoKrG",
  "key13": "5fuURYVz2aryrd3p495NRS6j1WfVFC228RCakQzL1PEMGSGShQHzJ5eekkFjhuAr6hHDiK748CRDZBPXjWojXwf3",
  "key14": "4ooUnMf4ainNMrYmrPuNK1wY9t9BJzLiKaS43XqnSJJA1mp3kKwvAfSPPachFPJTUL7LDpSQ9VNeKo4uwiKMNkBC",
  "key15": "62qS5JbSpa592A4sXBVY6E5bp8iufKNskBsLBmPGp8P6Gg98yRo17ZLqmxjrxReZA8RkQyZq9pb4jVmQdgazUfE",
  "key16": "4RrPt5vzEaDuGfQ7EDjTML6XJqjfHidFkep4473jwnTbfbYXRfHXiWPZVRa64VGDyPGotMcncQGzPXuTXCLJaBMF",
  "key17": "sCZve7m8GQBtHzxpPnxPyoLSk5AUKHpGi8WKfJkc1Pq1CuRcFiAbRZj4oX7Hki3scwrBwEhFgDtBRRxD9zm3eGH",
  "key18": "dTdova5vwcjWf1LH92ShvpYKko1AeiC2W1XFJW5H4FtyyzxJuFxecx6XY7duZhBCqtnZmEXsameFGXYmRcoHMrU",
  "key19": "5djVR88bZQhFUtTxVMY4CTN8GpjB9AjLPDf4AqdmZZRXbvByAaE4XSLi83kfBiT6zYRqgCStcfVFBZzxdpJ12U1y",
  "key20": "5sPHCy4Ta46TbeTxMVnXaWtUL5xviHBtVzH1kUqCN3R9av6Vdxn4JtyfDVq1QeMwSQP4g7KxibW7q6u14mG9z5DY",
  "key21": "44dtqWubC59zkLGSem9PhzXnWkVU34neGwmbywytRRyWcKJ7AWwMn1pZic8R8J9aNnHBwCUXXvkkypYB7mr1KpJ6",
  "key22": "5GuTnMvC9pTMxUZxPzNZECbgwxAsMpebA1Z8MQmee4BAP9E5Ad36aGuvNZfqmBPGwHm1R7UgKH8jz97EED3ZozEe",
  "key23": "2YufagrM1CMicU3EBJNSmX2aigMQcxZDatQMmXagWvRJwPu1ewgaXEbkefjoKf7sCgY4T3TRK61Gs7UGdCxQW6PV",
  "key24": "28ZcH47XWgrANnarcWihxuXtebZaqmcPonPxyPsoHYBfw6mbCsprTfBSZrqPYkY2fMDV9J6rUXjwy6pQxuZXWEBa",
  "key25": "4bbVHJFvDwstr7ox3aJev1ChLDCxweypMZ2f5rMtstXxVoWhg14BvZPwE6hyeUrSqaXpUcUHHeriA6sNjbnmfNKS",
  "key26": "5LXyKTskPXVUA7ZFHX2PLkUZnTFR9PBLA41GD82gDnugVhbQc6QpJWSTgHqPRv4GXQmWJc2mJjG6V158mnhai7xJ",
  "key27": "2SyWLh4WYHGjkiV8bgH7srEXt1njekRytyvckVFBGLdhHnuoZSq6cwLtZwq7JwMTCnuY2RkfR5qMNCmbF4r2FH4N",
  "key28": "PnA3dYkUQCDLxiXvu7iM63kHBmNvsuHNunTDvU6TRpcM8Z21gFi7YUCUKuAgbj9KcQwuzrW6Xbwk7LkxYQeDWzf",
  "key29": "2QuVqf3s58JhdEHea5BuDSsy3Kr6rPo1W5MAZFS281X8QCYPoNMM9w4PnJC8nsDfBWaYhu1SzEuu9d6uc2sB4wca",
  "key30": "4FFtRKXuXsvtUVbMKbtZdq3L7oUwB6SRYkiCtutoEKQtvdy8usvjCaYXr9jsHreu75nNXVy5raKkEEsDcRULTs7c",
  "key31": "4KwVjcjTfNyhTozVouu6F7wGF1sbHFNW7pn3KPZYxvsJW7LtJhYbbk9PBexQ9Y9fy9zP8Pc4qAYxBLw4MAtkHWNa",
  "key32": "2ZS7sDzzotw4NcyuYk9qs2DLzprVyQfMkkvrWxRzNStd5amE6JmgaenaE6emU3Q17mjJ9R1tzxdme957QhyQwe3M",
  "key33": "2iHp6GgzyGBHjth1Sb8KTapi6Wmj5oyBkXZkvy56gwXchbjCNanwy66Nx6gzRHgLwKLpvEVLNvtAZa1KbZULmcyU",
  "key34": "5UyMGvXQFeZNnPAm9qV9r6LAjQimed44tEgM6bfX52BqjbCjXj2xAtgiiQkz28ArxEB3tihie6KCG3zrn8tPm71a",
  "key35": "2eXjAVJU8umgbPYGMLq9EkzhJ592H6HdCRhxA2mQTZjh9DdGie952bRdbjR5dknszpRwraje5ie7HNJN7toWmzGZ"
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
