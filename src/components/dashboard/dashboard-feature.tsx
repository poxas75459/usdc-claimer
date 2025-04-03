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
    "2VJ1ncMVyou9wA3m8Y81QnAD6kYfpBJiiVVPnYWuzCfLCF9aFRqC6UaxU4Cq9rV3X7sGQJ4SjtRMN6E3QcGYnxrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MMrbnwvAePG6Cj7qobvFXJS9xM69Gy7c3B31R5SWsFHAmBEWAkzXBvkXXGATwyze5dSphts6n3BCNsjZsR2tGYB",
  "key1": "JJYeK8awDEwvVMtkm9bVTxYNwCwyGxGKRDTpEgWCY5n1Zz9dYYZiL4SoGfBJyfQpjwMkY5f5L8ZBYonL4w6B847",
  "key2": "4fjTJWRgn1QH7var3MjPhArYZYnwZYW62o1skQp5YAhHTj4rfkuGGBTh2o12jEFXJkvDE4ynipbNeGmHUS1MxZNK",
  "key3": "2TWmw7Kw44KY3SPLjxNnBfma2bE6rSeXfn8jQ7T6EtSSgB2pguBCk4J9TGXoezmYgqGqosBDapTHKAFB4ZLJ2wYw",
  "key4": "5poabHq25xJWc8PRv2HmKvDT4pKHhwz54BmesKtBnNgcty9kpTYGDvPsVEfdxZMRYkRAR4K8SQ9Wj396vhZ7RiAQ",
  "key5": "5U3RDmzUeCFGDm6m8XDBTvDFMZKciFnzsU2VWeYmRG9hqQT71i2Tifn5GMZ3RAVrrcPGCHf41UK5ppRhs3uBJ4ja",
  "key6": "54fvDrqG8cdgtm4yrAfc9eDk8JpBBS9Bx6cvbzxDRfrzrrbDxyUHKu4QpX8GfEs7nAhqXuQa97NCbPZfxmVqxBKC",
  "key7": "y8GG4sQjHbMNYu1gsbrHE3DjRCmHThupeBGpKKeTPApEi1MgBy2xFZ4ShQqkqEFzf29o9SqoUuNZubk6qfgu1xv",
  "key8": "2eorQekMNsLSTWGj2DSb5LSKRKRCpPP3JCdZrV1FGNey9dCTccaYTErxgTR2Pmd8mnYEi5ZDqDT9Tz9KvJQMaBNm",
  "key9": "56N9vapdon5XGdSop5rXVAgtCNGrRNA8xqMByJ3rxiWzXVnMCfvfgKmkRcAEcRnSf3X9VXgWCgCHqm8c8gFJJed5",
  "key10": "51CuoqviU3A7whb7pJTBNS4HY1XHF9NN5wK6tAZgk7VokWCAPAL2dqgMEK2XZWiUMHwkKpnNj6QbTdw38GBo2sp3",
  "key11": "42omgnYaeELA58gcaniFCpYCcVfwGqWT1QQVmHr8jph2R9w1Mm4iN8qVUFJF72uWyvfuCgMJTQXjCAFYpdZ5Qmx2",
  "key12": "27saV6KeZRAv1btmqdLVniCo2tSBN4JEytaCWuPbKggehytUp1frFYkHghP53dP4ocurM4UY2V8J5bHSMAHoh6K4",
  "key13": "a5dKpuod86aXkeaJzgWniR5wTJYzxvpbMySkytsLtToPrK3qisR1FA4sYos4VomUzw6juFzuD92g5TZxzBXDMG4",
  "key14": "5fRZSS5d8izGjwUK2sCyucUQHWAkTS717vQ3NePaUG7NnUejatz5gjNQNtL3trkHmzcdoLVhdXpbGRVQ2Hq9wmCw",
  "key15": "5n6weBPH8fgwiw7dUp6PD7drDrfVQdNGFryGihGNxHNp1McBNpASZmpt9k5SFxT31rpygk9ySKuoU82oaWfpnoaw",
  "key16": "5UutnWEyqvGbbUicgLdzhiqBtFEGVp99PbdFDXNfiYmGDujbHTawCYNSiFyAau6pDkpCEQfCxe3BCgWKknPuvBn4",
  "key17": "sTJ892FWjcCmyiPUGYt2Fq8979siKBmg1Re2DoFCw5uRnQZ4NV3rgFoNfickdXmyZHEjurcXxKuttBVCH8aKbKT",
  "key18": "5vmYqsF4z7odjiMyj4rB9kA3N1EsFm6mTBuuMcLCzjqNffdp3oB9nVvEmpNNk2HUAeeQDqJhczp5CNviSpmAX8bA",
  "key19": "3Tu6zPcRMWuzXwMFBcL3DfspGJgvd438Qnum1dAGuPWwfiD1ZXBBJ9tbvuRWbe6cBHyj5dkMvYjzLHY15hxhB96s",
  "key20": "4onDqDYEkoBy1scyuCVzUZC3Xr6VeVL4QTVnsBNdVqyDewzR3Afn2ukYw4dJGDp2QQfZD9d9F3zz45ECMcdKkHpL",
  "key21": "3sREpLFuqvS7Pgwd9YzQHPy3n8r1zyfaKUybbQj9jP8ADRGSs3ntGigfS79QVTLYW2Y7VKvnXbjNrULbbk9rWWuq",
  "key22": "4PUsswidBjTLwWu4LXkJ6YYRUcuoyphj9aSbo5XNi6SgpmLvJXxjprYzY49ZEfh7zUBAK8BfDoXQBb4bMxHVL5pJ",
  "key23": "VqqyBVHxCc5QLnDqX2w3ToS4ft31o1VWcSj21Teh45oiEzp1YxY1CHoreWHHfz9piZf7MFdhuFxtfGCnf8xemr7",
  "key24": "2eqBE9GDMQEQpQKaA9J8Bg8jxb2cU8UUcXXtCDL8xBuWFYHRxSWhjKXRYTfqii4uvEJBqhGyyRFhb7cq7kRkdEv2",
  "key25": "w5U6q5ESYvzgqtR6zC3hy5ZjBFB1JbByWQ61qP4P1JWQ3gRupdBrezHHPqwdNWjSk4AE72No74ToGcgmotHevwY",
  "key26": "58brfS9W1spS3MBHfbV8Dcah4TQWrYZBqmWeQyhik5VMkZiNgSXLiCZrH9mMiH6zMWjYpsg5rGrg4r9ZmhcdXZWs",
  "key27": "4cKPfs2EpU9gnNboDdpVkJ2bvHq4v1xWq3DP4twTzXi4HLbDN1h7jG4RTjxwCC63daZn1zV3idnfVtDqm5EKcHsW",
  "key28": "4fy2DLEGidHuj5xjVZjy4qMfnCvrmrCM4araEgTUsC81wCNVACRFJCtsnkEkNBzw9zSbszX4QWbUMq99VVkFnVCt",
  "key29": "2PqKeEgEbMsNMRrfxc5r8D8P274XMowEdRH9hEqLg3ZsM91ZfkjKfPi5W1zHBCFbBCFF9iy3XjxeGnqQHxbWtabB",
  "key30": "5w22xXqtuwcaHDqNuSc365mvzFvLZV6rPniH1FNPWAU1yjymq2f1G6VsWysPxrzcrr8rPPQRhehEKGMzE7TwAVog",
  "key31": "2hfToC5YMXNJRwiiLvwWXqrpkF9KmF7j6ZM7XtbGNA1goHRpK9y33ov4x87Reg32bRDEV3gByUV1bcdfwrkvMGP7",
  "key32": "55cNdy917snBkJYRBUDNYmygKW639k3dXyqg2pYmjPPEMxLEQ28khy44gHz9tzXtBXtVkp7XQyYJg25ikHSbqMPs",
  "key33": "2HVE177e5Wr19jGrLHPpsKG4k2JXZz6rjX9tUuAnsF97UyYSphr1nJG1avGUw6w6BwU2XXZcTNW5V8faZshzknpM",
  "key34": "3f51zboDfYaZQ7cETGGoJguvSk4pZU4Zt6vFTaKBNYWsywPfpxVjJvAgq5K7YvseatqQYYoGfWHZ4xhC8dPxV4Bd",
  "key35": "5syejgPC9oB2iGxGbyqukqniT6jKkVoxftfvnkLyCfhxxkE1TTeHdQ4dZjjsYJGoatDSo2yUPLhKbybFPFkc7bqm",
  "key36": "4W5w2fBWTRp8wPF7TLjetRH9wtG1PEwxAdHEN2KpZ36mQ8tvjWSyuizYh3gWE7utVuDX6wes5Xb4f9KrWwN3LJHJ",
  "key37": "hEcY4npCZ99hJb3v8zbNtgKKndumWoxUmE1LujB3R12xHkwinxKW8MRWDSB186rCThTNxWU438kFpybAVgsCw9Q",
  "key38": "5RMqweq9n7SNVaMz8awpZSr8Wcz6EGxYBkeLsWX6VV4qckNPRmY2rHXrsd25Q61f6syhFSPcipgWvDwqsuyu4apt",
  "key39": "5DPQ1Be9T4kPQM4eR6azqUJ7SaisSJqombpaJV625ayJpfayVNsTHYnYDevRkDQkpLGpJdvTzhjrESZ4kGRzLV6N",
  "key40": "4umEsB7nrKpCEe7DkbqyBjcTNv78NEKiA2yCmX6Z7xN78Wdc7gKiXYTD6T54KgMxoqqxssTTqCnNNe33UpHpL37A",
  "key41": "5anppjR4nG8WF68BaG8f1j5K65Ab54mkSNczA2c95i7JKWB6vht8ZjXn4zvz3tdG2YhBAgEThJ1tD8x4yJpsqrGw",
  "key42": "3VbSu3PdAyuv6EJ2ccuKYKqohd2RSzsGiJEqASPjsKZDyZjmqY9G8HUiNmVxAnFxDoHPnRvWsLhvywt6KUMKhXcS",
  "key43": "3YH2fSC4SvVDMXD39Bn3dgYbhgY65QKTWgjYkt8xdHWPAWkHxd4EesV4v7ymuXQXGekD4pxSqZ9jfzrrW8gLN7Ks",
  "key44": "2TTP8hZNUmTRoEGAh3ZECF2iYCTfehyUyM7KV8YSJwMCvnLtUkcSYdjxBWiczTvuE3VaStKhDJ5GMuAVfMJdaVx5",
  "key45": "3PEUQ6Z8WE5aZLh38YksCB4nJz4rSiaTAhmxFDyXMVbEj3J4G7Tgjovhb5RTmEpe9eP9VYB8yHwPtPh1M3gwSNYZ",
  "key46": "3P41NRqCpR7A9UrYN9eVYYYLKidCTJGTQCxybhYDfdQ4WpZ7JWP1xivGajnD2YqQYcwSdCgiQmY2nELt8F8hUpBr"
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
