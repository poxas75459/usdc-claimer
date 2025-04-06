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
    "qak8XVTpUD7W9eMn2PUsesCAGkjPb2sfx4meLM75KPASJocEhHqpKWy4HVwXvoSsGDGKZBuhpqxXkyZaEpRKBKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mFYD7NVK5atW5eRUss24c6Pdc5YfLKtexuFgvs9URmtS9rsqKwr2W8AwsDoMhA9J8qFnimKZBCUmPU9xYhvzD3b",
  "key1": "3VRuPsxpDgsMjecA4H7mmPhmuMBfMsbHWKmiteUrWqgjK9KYvB67Ad8RsQmyGJNC4EGMgx6ioiCA5iCCnAWKacvY",
  "key2": "5xQQp1BSDpYdmPWTaJm83yi7JVUb3wzDE6eW2soAFmmJJRwHasALiXfrysL2PsQsLrohwhXY9bEqrzfdhTS9tzi",
  "key3": "4sAYGyV2cwydJR7tzJ2XbbGhC55BvL9wroJTAPMVh5G8NUadju3rbg5qpPpGiUJjJYVWFQph5eh99prpfSNdUd1f",
  "key4": "3QwKxPiAZr1gVUoss213m5Zo5gJSBDHNYKCAwyzwVscTuWFajXBwQNRnkwB86d4MK9TUjRZWn4fDW4BQuHJKxRt4",
  "key5": "4UfbtwzkDBrezLYsDSEtyGi675MXwNAM8cwwzkUdwmppRHHrRn2624RycjYyjUahTZC2Dxjjn9xyNjTzqjkDBxNR",
  "key6": "2eTVsDJvyAjvt6qTawAJf3Z5mqrq1MJKFaD5n1ecqNC32LvdcRTEtWCwjChRb1iHXVnhDn5icWfZRDq35RUtnwC2",
  "key7": "25om5PmxSA6y25MA12uQGPS8gxcrg3qx6Swr2JXoNxqd9YgvNw4cBMzxzdBzNAHkvBtxLjCzq4RT1gTLqCPMUUTm",
  "key8": "2RWejyp8pJexti8kb6ZDfsu3TYxwHNLCKGEMXjQ17qTa8oZhL3BtfB7FHqQrwjAgCTtV2fcSV963FSMPh7YRmrD1",
  "key9": "4gLaMeyEZZE9nBvSjZ5vqkTXEDYTbu8YDzz7CYKJun1DdYKENHojzrQgKoMAM2qP7rnukjKeMZuN4Dyge3tcMZ1R",
  "key10": "5kkSjv6PD215yhEUcftgHWsEMWzSabb6rLTqYgKKo2KxLf8Um6z82kqwPCdJeuUJL7QrNmTKT75Tw8KNRocpnaXb",
  "key11": "5ohVcaHj3ytV1iZqQcMkRd184vPZkE2Bxt9A7ciCejXU8uFGf1NJgn8cDBYipRHZwoRo5mUkkcDZCWhS9h4BGKu6",
  "key12": "4JY9Spw7uytDoA2jHsdrsNRkeCYUWkVYHKT98A9smbZg8BWbvnPqSD4Nowz1NKpbkmrdkeNpzjKa45XnkgZNsxb1",
  "key13": "gBFyGPVG6Tr7JSRnueeNcafHT8m9ny1hGmqCzoU3tQGAGsHCAh6fg2XLx7vr6mSUNmH1t9F8FZJzUobWArX3zjj",
  "key14": "5BWotT5PxtQ185htjt5B4BxR6cazijmpmyCaNcAEoWGdzaHMcbrxqbok86GdyTUv6WFB6jBZDDx4gjVa6yYmyc6C",
  "key15": "5zoYtNJcXYtdeqfrBkZn41DQFQTBE7a9XbgdFWycFsfL5ihmMxwH3iTtYgnzWXHyzhDxvh4aBJPLn6uKRpyWjMRu",
  "key16": "2XJm1A9ynbD2NR2HScg4Xh3r6HQLH6B5ysWKRUEoHJ8VKkwQLJxirELaCswH5R2PjpXWmQX51yFUUocRUN4rnJ4y",
  "key17": "3bWjTxL5Qksf9nKLTqJgVg74f9eUZXBTj1RrMSaLLumAAufDGHitwLDJG23HtwHKyN1pDDSLhAFNDYrjUxziHNfG",
  "key18": "49s2wnpzYw8wGb7pEuiCkv5EeEL3xQXYLYYaK5ncB7Z38CXdZgz5UxeWqgUVvypJTR2hFUexuhJn486NbrhLAGpp",
  "key19": "4YMxZ8h8MHxnwr3rHunPGErUNqS9EvxdHZCK3oZGfyMc7DRYHyF328iLTazCRbnU33CHxar1UZu6U4LXqdBo5oB6",
  "key20": "2kzQShkWp536UYEy8hF6SAfURHZ1FkPgqwGPwswAg2s16eMH7NMvtLuzryWwKXKGGDQpYEyoqFekbdc6cEdFkesV",
  "key21": "66KVc6nMCwQnLZjq1vLTh5eeUFRw1za65CfJtKYZTaJV8G517SQEFankqsjJWE4q842Nc4kKbbWvxaLXG4xPeqgf",
  "key22": "42ikRPFYpe9QHe5eVqq7io5tL4BQYkMAUZGc1bEGfDQ393c4uFhNEfHEgfw8j19ZCRKVZdB7sxLhCQh1umZtwPRP",
  "key23": "3d84Xi7Y62BNYdK54EtZ1eh7AhNzoa9gm1tHGFi7DsPxE2DKdcy7wzpWCwJLDnrGMp8oEwcEz6fk2737oG6UFWUM",
  "key24": "5tDEWjJCYci2xNz9Pu1gNF79YD2md11xbHTJ3FgsnSsmb21WXZPy9x4f7X7ZgYr5D2hDfCACj7B9TkQPawKCykXe",
  "key25": "3psm5e7b41qpwAWv3xU75da7DyJPrziZnEaHQq2nBr3JMdp7YPL9MfoUqip1xA2d8ub49wJ1PH15fB8oGMHzYdMY",
  "key26": "5ufpc3eJKn8a49WiqggsUjo2ixPXuXaDtmAuMUdwg1kQLKxqXZzLFhkEZmqWcC7TcjKYBGPX7Q24NK6MYPfBR6Z3",
  "key27": "2FaTR5enajkDdPLxKAq3DjwDvvTkHdRDD5cfz443kVpDjL977tgyaAWUkS9vXPFh8YXCz4AMKrv8NGuqsdQKvMJr",
  "key28": "ixrume785nczpJBUtTbcxtt5UwLN4RmjhbuDz6SGXd5TF97cqdVkQRN7NEDdEsbMzg3YKYQQKCxGfp3hMekCNWU",
  "key29": "4HKatdXiqk9G6GpBG5pCZBCDUgCRijioPx9jigMS2YkYE2dhYD7i4Pfz5vhpiBABeW2887Ne9Rtbx7Ve2wkSHBSj",
  "key30": "5bvmFcUEnj1z36ns2VUXdB4uPtQ5Wc6Yv5y8Yf7shsJcQpyXpeguDiTsX2TbTFBhVTYVRDgQUkV5uN6shaKBfHWr",
  "key31": "24aEFWmwUcaVsXjHo5eueifWHMB5cNLm2FDt9KaDPKeJMViVKU4BvJnmqS5M2Qa2DFfzaSR5qixBWyNmnPsDDm9y",
  "key32": "DAZPfsWTQsrAa26PQ49EMRqfP1HzaVp16NiQ5sJfeyCRkzdF8enPsYWENpm2jaqxLWZBDvaYXmSAYDUaSLYkgcx",
  "key33": "4i6EMyU5Wa6xBSuFajRWTXMBDMbckcm1nsHqohmifFMQGrzJos5faNSuYABQadgeGXgg8utopmYx3hwjugHsYpAM",
  "key34": "fwYvbidK7vDqhJr7ocmbizhCYb8AM3GCWTrPNPHmU7Q36ZTnttUXHX5hCKijpnv58FBgPgUqSKVvS2UoNjtRabs"
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
