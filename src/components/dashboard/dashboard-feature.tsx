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
    "5exW1REXDDniuZwpiWBC4YiiBBGkHPJFn6Brj8AdjGy39Bv6RUwEE8THpqxW1zh3ePSb57w4oAhsbPPaQDFgi6bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32u9MaPqzKyVEscVqHE5svDqvAmsLnr5rZqyL5J1Gb26o6qYGzrKg4rBKEFf58EnkBRkAwyjXL1VbvJqFxZMPRW1",
  "key1": "USBWwJyxeeQDJEf1vPuu5Qsj8Z2mFask7Pyx1yb3o16S7jhWsAw82pYwEDe8uimEtdvD9yT4zPYvCSxeCWmJB68",
  "key2": "65mM7BuCbdU4thvSkD72fQbriMtvti869Lgp3eDSomrdLuXC667ZgXLv1CWpWtFonWSaE1W2dRFoR6j5ZVzeEpGA",
  "key3": "3gkpbfMK8579UaCwzqVWToiYuMvcoabEbabMaxpp2v81CGR1d6Mhimipvq7yenfESfxdzqkCx2oJeSVRhz5FwHt7",
  "key4": "4R7Punw1WRdSnUF3FKUrSMCp3MyDA1WwicGb2TziRSA6rs3Xk5G5V1FU6Rcdm3bK9AB1eQ85bt3AMb3tFf28GVcR",
  "key5": "5VKJVytFrJegWu5pLQKhSxGvUtAaUpghzK1uVDFp3rBFrVnGiEGa18GS64fZ6x8EULcS9w5k44TKsRpJudcJrftX",
  "key6": "4Ya4LHAXnreH6woLX2PtSqc1BhgNXb7Dnc68KAZJTx2iksBwshsymEpe9mBddNNCjRh4GLJgHNrxhVsAYuxMmvRc",
  "key7": "bG3roF5RbYtbkDuQeFWqPvrS8sxgriETdydeKCETRswAMqL6js9bdb4RDy7UaWyT7LCf9SptyvrnpjYamEjVGP4",
  "key8": "XsADqR5GGpQroDkLZxzmZJKPRCChNA2GfUz3Xq51BmWVG6zEesXKTJ1gm6bE8x4B2zTR13gWqWwJPdeqvPSpehN",
  "key9": "2VrHP6XDadwesuhb4uqkCuMPMHUChUv8q1YuFtAWunrarhLVMgsYfxZhTYZYUfAz8yq3cgv82GFuE5JCUpf6eQ47",
  "key10": "5eKE5JkSwMwgopDAQuyLqJEoVFEcUtM6DN8kM8qryvgyHifDRk3Ywe7fRgmzYzp1mFhz4EpvZrNTZWaXZ6ikBmhz",
  "key11": "NpGeD8eTDKYhSp9gwQ6f2KMtxZy412qkq4VxhkgfBKooLofghUzH4QopugXGSWHbJ2pcZWx4JC9jRKUqBde4eRg",
  "key12": "SpBuzWYFKZuHQsN5hJKa2CNczGD6C4PFvAiuMjRTcoZC8uMSQJqBvYyVuQnVaE88nh11NgVpJD5MvZMsG5QETQK",
  "key13": "4mRpYoDVV1ovaHXZayEn7BefYXTb2Zsqc69UVRqdLrMXhwYTSLtJ3T3bcGaaA8fvUHEjwz5EnWscfVuTdUMaSifv",
  "key14": "5GTmEZVRoBKJ4NPrWPcbfAZ4fT3fMcjjTtgu8yQPwXrVFi42FLzZAgWfBsGSRZzEV77fd8PrFBybPaktbUZAQ7Z4",
  "key15": "31xRB1nXaYbK1R6XHiQcj1xrqamD3ZSCNw7MTyMYuxrJXVJZTcqyZ6nTeGV1a4YigZJark7p5oAEGAwBi66DzkTS",
  "key16": "4xjVKXWSSf9QJzBaLmTWYdfYM9QQJQEp5qGtRZEvBno954n28xAaXBqEe6h1Pwt1opnbbQhUPTQGrUv9LtbZZosi",
  "key17": "64Nn1VhbuQsVHsy4TUAm4csV4dnAFHKg2jMDxyk9PmzPHQMTpupRFkRZBFGbByrPbDXBATQJjfLMaAXHSYKSmLRQ",
  "key18": "3XLLMmDzcAaCLqiWFzAJPU3iwfyoBTdrVB98LiUJf2KMRLbfwPevi6LnUPLsnvUUVnx72bnzi8Q6Z8vDHj4XNsRV",
  "key19": "5QxpxrcNhP7xNQg5qEq3ErY5P5nv6xbF8HAPNVRVfiJWLjnsir7LUCxKJShF7hmsUtA7repTNmBrKYM8gCJcX9y9",
  "key20": "22HpFfk8HunAYHJhsqA4dYM8QVUgjjJB2QvSNQqd6qrB5bewvyqHg78svpNUeQ91AtYY6RNwtUiac8mHL91qdNVu",
  "key21": "5QgNPDdPBxrCZsAzVdKKNF6iqjZt53onVX6x7AqQWZNoTdWSzTij6m87V6pnb1v38rj2RUdkbEKvQhAqewJaFyAx",
  "key22": "2iiETErqLqzS9zCo4NkKsFCk77S9f3EXdA82V8BgJzd7fazCsHhjzyGqo4y3Zn2B7VtAjhGUeHDbp4agDXRvxnp5",
  "key23": "4v3AfsjVojqhUZ6mPLnSHhgW6uYVFLkMHUy2kMtCYwzddg91VVRJFuKyuXPso6AXR3KtLE9QfYgmxB1QKN89oGFm",
  "key24": "nF4s99AXB7JXWfgzHZAGHegm7QnuDuyXpGZxTtyALJBFS391WtpwU6hmu4vEXrquV1YpuLmA8oLCac8Y4JWBDhX",
  "key25": "TQ1QpCvnKWhAMhF9He5kCJ8Yzczoypuk1YYecNjkGXjt6Ri2EAHorRAAZQEXsyr81LJi2jv6S72ZgJnLQRc6Cg7",
  "key26": "4m1zmNU8dN2p9C1uK3rwfss4xWi4qAVBcUz2CXuA9G8CPK76VyMAkaqPvCAS7kobH3ecKjDfT27hJcxgcfnmZWQY",
  "key27": "2kv1PkqZwoB6KR7hmmz3wrw6ZWw6Dz5BnFsCZ6aw4iwphyYeMpVY4NVVCeSC81bmivg6gC2yVstXP7hdKtXWUDjF",
  "key28": "3N4Dhtmf4Uzft8frq3yq6yPB38B9UHcNtGfJzhAHQftPiH75qqwY5fNojgwLXULQD3jbPFrBiDU6CZTJZwJyEtvr"
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
