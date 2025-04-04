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
    "P9noUVCMNAx9Pi7o5NtLJjd2SeS3ZGkSkk7YoanN8Zs3JLDtR4g2cFhVZivQr52nk3adhQXE1eQQaMJeJAaEa88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uHCfWSPXTg1JENR3xWVqVj64owPTp8L1hktFSdc3DivyqPK28KF1vzU5C6zhMo4dABsF23i7DLbEz6HAuUXJvUZ",
  "key1": "3UhHJFArp8nTHHNivcC1bpfvNyxzNT4C4BW6xKN1queUihHDVCWh3o1YHZbfEw2NME5gtmvmZcgTFPSZnSG5zdYN",
  "key2": "5qqU4dNfShVyiMYT2y7rZJkQBs8uDxmdTJq3JE9zgkjBJKKLS5E1nmrKuGp7C72fwnyQHhzwv9pSM3WzW7WQKvh5",
  "key3": "2LVbAksFuPz3NiccPKH4f3HTydmpYimxEtS8NPVx2hmPBeQXNb4UPacNz556WNDmtaHPehcPtVcSB1CagQ9XD3o9",
  "key4": "2ybJyT6GJ8TytZA8o6R1jp6D2THtVYZxsdYEdRffD5ABoDF1sXGbdQEYJVyU6YEfuYc9DZh2V8sp5hiEf5oAqMp9",
  "key5": "4hbuAqsevgpBxefk6kVRNmXpnGVyU9EM5Gc4Vdc9onwq6a5w129zfk6f7gsgKBVZRHffLhBCYBXT9LT6PgkFUKUG",
  "key6": "5tLuSvHDsWjxU2pT7ZMeiqXVkf2W6h24dVjpCAP7peRtM9PQwPKvasQqydc6G4bnGpQpJu2BhpxEpD5XLRnngo52",
  "key7": "pjLZmoo5Sy18DwKP5JFDSAoXhLDw8kENRkk3RJizpACsPJj5XU5FrvBDQpoxojfu4U98UbdcCCNaXJ351Yj193s",
  "key8": "3VZL8wRpXWbpG2zd3b2pkMRZSvHGwZJNEGRG2oc8aehUWoGV5b3w9sk2bG8xE2S2G3mZPpu3ricMSxsQo6TVHEhr",
  "key9": "2zrzhekCfDeheXuD1zZxLSkBpP3b9KD1pzMauJDfVBNGGDX7YsqP5D6S5Vo75dFTntWRr6683Eiad6jyQfcQvkdF",
  "key10": "QhjviiLM5KTLzHmrrF4Prv1y5vs8D8B5ZckyJNk5mSywqeGSSZLPPXzUjQyRbdruKnWsrbQT6PwToh6nxkdGAVd",
  "key11": "2KmdEsKZHtoEE8KJuP3HSUCRrZypCQapetPWUXqVCteB3ho2kDTmjgvsM5HiuNeFxp3oZ2Grn2xdVy9AdZsCW4x5",
  "key12": "n957uzykckMMLH2snStxRwqby4cRpjCvZ7BAqm38yRGA1Dj9xdVU4ajuUHdMSceNXBrZroPL2VioJ9iwXxdqpKP",
  "key13": "3wB8WPqLr6YNS7oKJQZTLumAwGVmG6u9LmiEMn6kduiv3dT7ZHFeVhaFV5tZt7iScsMjsBeoB4wUESS1QtpioyTj",
  "key14": "4JRewp8Qg41Ek9J5W3xrZityp9bevKVATGyTKP3fujce687paWxEd8o9Y3WWoQScN9Gghd2pASQwoBDVgRcS9JJA",
  "key15": "57VUFpphEbcRQDNTfWrj4zXHGRcCPS5hETpyTpnaQvnJMfqMaenP2jmi3f693A7JUj4ujrp9Tr1LcEigBkcia91p",
  "key16": "4wdBGW8fXXwYVutgEQZ77mxA4Ap8smKqiYQv9MoUuUmfeiv4kCzAXG84Pdof2mfai2cGH21TpADaKPgyQj6S8Xz5",
  "key17": "4bkZPB8QGbdw23PWZZzWm87n8bgAPuc8RqPhJUoN8yCU5KLHf86UrSfxE3enZ8xXK8QDPftBKV5wb47A4LJ89EjR",
  "key18": "uEQK2YuesQu1WAByHmh6KmvhGU2GQ1r2mTuXvw284iHErp1DrezXmxgt5PjqhChSQivo7fQFqVE2eCFZFQRqMDS",
  "key19": "4UE3eUKmcWgay2rWoXnPanGpjGfKo5fJ9WhVwjsVqVQGL4P12QBaLUYuzUdLQvRNFUtY2ews2FZQyUmzCjv69PDu",
  "key20": "5Npc6m6K6j4fL7P2Y16Gu6JWMSuCTzUNoUmMigRDRaZV24EgJLJZUGtHmK7XrNN2R5rDQzrqJnoJSD6sVai8AoJX",
  "key21": "5he5ZtuwVc6mWRA9ZE3zCSb8RAjcJ47UAX9MCD7H6SXR1Z3fXQkPCixXctoVRxL5vJ6uTSi5iCnvzA12YXHdER77",
  "key22": "2ikEYfXoAE6sL5cgPnaoRhKA3z987mrMab4TLWSrAD6Edg65VVHQqjnsyC5YuJg1d9EvGqi5B2DEBjVvWDdLHhhz",
  "key23": "5RJqXpcWqZ5VMegvK5PSrtY7jpkc5rq98WRK4BUZkZWo7Y3XQbNkRxCSEAWkjvHDXFyE9FrJ6ToRWYFCDuuY5U4r",
  "key24": "5SVyEZM78X4JgQPYLV3RWnzwHxG1GbkzUYkUKMycgvy2bHGxnNYi7T1WVQfXtX9Yzq4YiV7pDGJAJxnYqWmb5wWB",
  "key25": "2JNDdQD6fNLyKXYF7YabmYBFasTKWuvXgtAPDM8tbQAzWgqrrmZSQRucrs8hSBUB7bk1y34V1bj4wp7uGguAGMZJ",
  "key26": "3TNXP3LbC7GxrDSkAbBHupSCtLg5mZbN5t6kc1sns88apvtUDc42exuUEaqqfhZ218HDBm995i3zf5zkedVPdWQ9",
  "key27": "4RLEXX7k4pHCYgXsH5X8dVr6c9a5x2XRX4QrEUMyoSckEWuVaj2N7VHzGY75C4LE32eyfaXhLuYt6v8Ero2bDVy2",
  "key28": "XyJm6v5Vper1fJk7yPyswdcuskH235AEX3ftW2nYWkQdruWYm1jeq6ngFQnmAPXvBMLAzr5HjptzL9acx1CWbZz",
  "key29": "298FEZRumnfNtVtUamzqWcQ9WBBjmB5oksctaaZd38V4CfWvke2ujz8G3hDBcTjjhWT4evm43G4nPrjKM3CKTfNg",
  "key30": "ySsZRWymCNT5mEX3BJhGNL6y9Et2MCwM1nTtc5jqenyLaMBUGyGxFAPJ145X8w4bZuu7Wb21MZRrXDEUxh2rSap",
  "key31": "4MSkPCyeP2CvRLjeRiJSAGLMCcphuQZtXsZL49EseNg2Hq31PyMTta4Ncw7PrsWFWF8xZwencNdJeeQdRbzLAuC1",
  "key32": "5pnkmJkdKSiUudKUijyAsqbvdntkX8k5aWq3D8gF8Cw1aqsjs7R6BS3Se8dpF9ZCtrE3GDcVfNa6TwqNLuQaVgMx",
  "key33": "5P7Cyv8dfx3wuV4gYKAeyd1kDfD9NhUcfc7nGX1DhUA2FtejikLcYqWMDD5x6LsUYa7aGXN9ULAdSnCSnf95EsAe",
  "key34": "2aGcXuH2SBMkU7kTUKxHsPkN1PpxHqKzM3Gwi2jsemq7StHAncLLvKYi4ixr7ra17WZuGnSLRTv5c6Lb64vPSags"
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
