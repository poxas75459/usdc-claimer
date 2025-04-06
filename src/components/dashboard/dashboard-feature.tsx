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
    "5JUMZHemzAJiJt2wvHFgwXAJo22CyndQg75kdzEtexB8aoqVxH51hjizbXSiR2gKPCG4uPsCSG3sujbitq1RJFQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qJtpHB46Xt8CkRVLfCmveezETVMEGkRu1H2GeZ7DuaujcUuQdtKZyP7huU7yLm3J5KipfjgjnxuoQiLurbsQ3jm",
  "key1": "YniqTZ5LJ3TPTkVjXf9LAWESBoQoHdqVWxFdXak1JoqRvNq9TZAjGLh7RS3Q5npSWEEmj333R4w5FrtMn8JRTWT",
  "key2": "58HNpLMABJYXZ5YaYgfFaY1sXUBy8b5fWvMqupnSLcKdGCrQFhQcxYsyVKthTKvNpogWvKfvc2EnMB1G8dYmoBj1",
  "key3": "3mMZf5rMsgUj5B5t7GzDR3kcRZCqS9JRcaJN2bYKTi2G8MtdvojzR9sku2aH2qPBMzZkUc7iKNDDo4BAR8TiUDcx",
  "key4": "9jHf5DY7nsij5BmBaGKXrx3YMWLb12BWBAUfYcbSn4iYy7HSwaE1G9H78VSFB3HMQ7Ch8pqVmNyDCYxoX5zBL8D",
  "key5": "3QCdqnKunnMo89cAVowukY93rSAA8eCvwwZKh6YUTK4E3nmfKhatn8mWM5BwP7TcrdY8EUhxamQL54E1649aLQyG",
  "key6": "43FQpXuyjbA3RRv5bicbGoCPFdLwEwfB2pR2iJqByegp9yCALaA4SowLxriz2445ETbDr9gbUhQm5DyqGJ1JCmvJ",
  "key7": "Zw76Y9H3UWsUGUYyN8Ubs5onQx3s65f4a2r73ESPx6vAZrzd1PGQiPuJ6sST2yhxMUXGkwVe5DxvV5tWCwz3mwB",
  "key8": "3znfciKXNjzSRRtSfcJRZEN7zVi3KmXfqnyYRJb9n7E5oUVy3B28pKCvpbpjrhq7zJWRmL9q7Xh3rRLxhHAgmdhu",
  "key9": "5oLowPLs24SvW5oojjsKVcXeisYgPHDT2Wk91McmtK6YAomPHWzyNSXvgNrZ8czL7wvCUByQsk8MJ3DV8Yc9iZ2R",
  "key10": "44LqYFC95LNKvftpA4o4TjzqWL7N8F9kHDHzdZgQPjFKSJskvbi4KBfz1cBZXdASLVEP9frcYYdmhR6dF7JvZDnV",
  "key11": "2BvcmhTRNKKfRywYSkMKiPq3pCBQHtfSSNsVbkq17g1nEQFqTxSpVVaQJuetZ8EJNTauhMjhw6B5hUaYdEwCfaEi",
  "key12": "526TRBgYqpKNyRf21DZqNHk5g3Hode5Z5QrHD3fBEHBqZ9C3EXFnSZkGbwVJgkH4yDb415sWc2NvcMwMx3X9wdmF",
  "key13": "39dMJ6eHC2YHycQSGMYq87HJdETPwv3Z77ai99F6UFezg1Nd2KK6kTFdusNbVBZbuj2zzdPN3bnrtHnCwNXrsHgc",
  "key14": "4YspHCP8L12MmPoGozBeHPXYDRe8EBgFGLsxg5rf1536tsW3crPTrDmQ6t1Z9zZ1x9ekN2AttVqTabB4pffXM3DU",
  "key15": "ST1V16fGHGZUwpcwctvwFZRum9GLBhjuyDLohL5x4adegtfmUqPScLGFSo6u6FEiDaNe3Jd67uNYXrxpsXsN1DJ",
  "key16": "5Qy8Wg41phP8TeJvnhrypfJm4bqZDJmqfae5Bef3F3ChzHZjzuq9VLkpSmp69Voq9JHowzkJBeAgnyi7osPrUygF",
  "key17": "ceVxx7pEXZ6vz8Lka8ksCrY8LzaEgag2e2uhqhc6s3X7i7ymga6GzL5zD9MJUiV9KhVBZTDW7zuAuA3KGbuRHgZ",
  "key18": "4pNPa8suvjN9mGgEcGRs3XBPymK7FDwv8AjpcR5rnBtTjJyBVxTM4QxXPu5qAA3f5dyoekv4RP2x9CRvuNgz4KKk",
  "key19": "5kjcJSve6JWkf8zVfwF6G8HG97Rmrn5NznsC2ApMhMawX1zoCJL3mF9uJVw2GS7evxPVX3Crrkr4122DtmSri4JM",
  "key20": "2f3HF1dihCaaWgQzLrpYRZTdsR3bLs1qi7ZQejA1JGXfFrg8YKns5GtutW1v2jYYnVxzncd2YzuNaREUb37nRpJY",
  "key21": "2y3bxFj1kA7dLVgSJpLa5r6DqAxhBxKNedbpU7rZhtNS9FeskT6bkR5BN8gQ3Lq2eYG11uvxC8YauBKoUi4WQaNa",
  "key22": "2vnRZAw2yALC3f4asTjByaHJSxnCVQPgoR2YqL8xuoxWVXgshk13mzMJdTYR8xAk5A7WVdDNcF1tYEBdy8LEmcNS",
  "key23": "4X2iLC9bYUvjtKTNBZmzpobe8vsnRdByzzdcUNeMbMUWtLjoqHEq45TwrSaAofuLh4bk9Yh2xaTpsqHQ67es5mZP",
  "key24": "4FGZFUwYsKkifyFpcq7ukT9BgXXZSMGJ8ijNBQW8EF2QiMtyZyGpn3isgNwD3zTQ2dr86i2HDfi96BEEC3uEH7Ya",
  "key25": "5g4zewsHT51JdaFMWVkwXDP85hrBSsUnFBq4CfmHjq8BdSTyZjRg1oibUESS2Gm6zkskwTy1u1iA8DWiRQBu412v",
  "key26": "3buNNcpT2zBKQHzxkvd1KQpoP86SfxB9LGpK8B66Pb6Vt2Gg1bG9d9dLHjGg2vecW1D8WwaD2CTtoPSuAn5eXjg3",
  "key27": "2HVVKNpAqSR9KDri6WkPFb2yG5cPSdgcDsaXKssGSjxcaJyacA67SqFjeDZxv7qmY6SCnGpKkTpyFV3rK1inBcsp"
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
