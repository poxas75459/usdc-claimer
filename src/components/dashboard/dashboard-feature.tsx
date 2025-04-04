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
    "2sRKq1AKv1nTK5UU57Etog4YAa66VjKQiiLLGXbay5F9HMGEbTgT9gQ4tBK6PWCPYfzCdDmABCSVHo5VXg5Zkxz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qBP4sekG4HSQHiAgC2HL7p3KWAuC1ERyVwj6wzFTo6RM9N5BWSCYuGFUY5UgEUXHh9NuZPk41mSTqtDaDmtJo4o",
  "key1": "5zLryijVet8Wbjo2SxpKvRJpMHjpu8STw8S8gBgYtg31A6JizyKUF4wzFwajcJamCLaAdDRfkMiFLE2veLd2dtHu",
  "key2": "izRR9jfoWHY7MUCfShf9yRprRnh41wr5zamyLm3DP4Vr8t3aJHdhkpTwFD3rGMVyH3ETriGFnqih3XafHo3964a",
  "key3": "4AFMKxAnPysFwzU7WVE7vnUvHuJsfvjhPMBSSkc5mM3nNZFdRG6XYnY7L1cwragTEptr4WNcEEfEmUHxDFf2Z1o8",
  "key4": "4sY6h5bg7JP5Ghzkot56TFFm6pi1BNiKFr5VXSZ17pUWZCBCC3fnk5h3FXDuBFUyoNy7xn3xHVDFrz8TiymBX95i",
  "key5": "aJgsMPUMoGRVZZpWdNTyfztBQ5YCcZ2KCcgAwe9uskDwgbsxyTETWf2DPtHaUeKDHQWW1KAq7Q5JgcHRbCYAjpe",
  "key6": "3SszQcixubrcdK26qHmv4KTTooi15G1SSm25PF7ypFCDFsZZw4pWznbc2Fv6jjdaqnWQebhBFdNAGV5v33kfrqj2",
  "key7": "4CFE4cxxP5Q5wr8LZ4u13aJ6rBJKCMqfYCNqNwRb5wDeomeppBaNQVz3g52Z1iUJJnwEVjky7PcLXwBKm63M7qyZ",
  "key8": "3QvHraz42zjcwnNTUbH5EfhFeYL8UANzg759FrZWbYKHmDU4AeoK8mSJkXcSLjiBJcqJcrrupNJsEeHfdzeRX4YV",
  "key9": "621vfusaXxLfYW261anpzKVuhs8FmURtDrRwaaBFztx5t4q76RbsNnaeAozFSc7HdiqVtz9Yb6z2u2TdAUP5kJeP",
  "key10": "5icLhGmu69U9AawGXn2J3x9JZPnVcyRZ4zy6NJJFwFE1AztDXmvAFyTCP7xQUAj3FJJoSUM1aKbqaNVcoBdH3vWj",
  "key11": "37pegkTh6kvy1rMaGo2BY7kHqbP94Xjrffnzyb18CsMS8LMihVSVhnit3FJDyMkDAQPwqj9B9YHc5UX2txxr5L1F",
  "key12": "4wUMzTWtcbEFfE3ir3kgKNZVHfohc3Whwpnpb89vnetBqh9y4rAngawKY6HqcEvxCifVrN5Mfz62Z9nvRgdZqhWd",
  "key13": "3RcjQ5JNJjUYBa7KHANdhutzUj5D6S7VCHxwCDt31GbvkSCunBcWM8YJY2WvXihZxptUDqce8DDFQjmGNdx6Fts7",
  "key14": "49FtALVcBXAzUiCW8YHaFG7n7smxPqu1KjC2j4Y5o4bJ5o8B5VxDnEi4eZj69MYcxCiteXhmJoEcY1PFyrypfpdc",
  "key15": "3zVgkG6kXugLQZ1Ew69F9pfJJNXs3YSGYkYoQ7A96MyZNE1amSyjEBprhRoE78aQzTJAsh8UB3JBdRKpopTF4QJM",
  "key16": "2YiZnLC3pY3VuT13CVcqAgZBf3djQFnVDApE5QxCm8SE62vMXEFEb4Mj28AUxeVG2sMk9RKL4YvbbEQ6yMk2wStK",
  "key17": "4rKx5EmLVUVTJZ4zNKKzLhxrVCXNBeSvv2Wu565YnWkCNvA7Y72ofHHCwMcXJWbLV8VMF7aDSQccXMhcTpvtkz4d",
  "key18": "22YaVzwBE57QJMZFAWu497PkFCAZpPxz7ag2iQusXqaH9r1kJXSnZMdLnX9ciaeYYLodXqnGXsiopkvDEDERpQPF",
  "key19": "4ufq66eysMJLKVkji4d4GeYTfnEXRMMVoxdLb1wKjQ5E9VDxB9aF7H8K2icqtSMXwf2sLozqEBEZcBNSe5PYfEUC",
  "key20": "7GqZpDm1oeh6YkZcRe9TxQb6sp6nZHDC6oHG34z2BdggDo1GVkhd6QY8dma1Nne3VRaRqjjwW379j6toVQNYUgN",
  "key21": "4GajLuLqDHCJqbe6udWHNsHX3Y1UJVLt8DWeBebfQg7jCeHDX6tzvH6DCQSCxQk6Ctbh9bxWsVPQ9cW5vTHfrVhb",
  "key22": "3hKfmC1C9mFqV7GtmMkCwHLuoeBXFsykFkEfLEy1mLBDa373VsJjXdUK2V6Xp39GgnqsNR5q1x4Zz8ycUj3zVGhp",
  "key23": "5Uqx295mU8YJEXy5XyXvcGXZd1pL6J1LFtRiVifgjD1CaKG9Pc6w756a1d1Fs8DHKhGarFL7pmULZrKvkvWpLJgh",
  "key24": "HJEagyaNVVyWNR7D5r1YAn6qVnLpMKHnu4wBt1wfpNoCZZUKjUaA5EKZA2XR13rnkEXQoZiDiS9QSCsNcJFze5Q",
  "key25": "wj1SEtcTF2EUabycoTh9sfXn1BBvzoBroBV5dfcKLdJUY7G3nFNwzKEo4oRxTZBNGpU9fCtaZrDFSGFPiDsGy3x",
  "key26": "2g5QwwLBZsRyTRLqWGANtcqiZbM4gDmewJZT3PXwdTu5srZjJY55yHS6u1SZv6rxXMZBTyVCZbn4ZmsssbxJ4e6L",
  "key27": "4mCzHzsveVxJgtrbSGQxMrS2rCBfe6ToUvyiBqa39zkQzYcigKiiqhhCkWaoMQtnCjo29xhAjbxiPimN3UHXrcEh",
  "key28": "5CLnjo8ohcsAkjhz7ZEtRgbFez71t2Ui9tkycGAVXabhfgBfpThqXhmHsGp7XBPN51XjohGmv2XZkNrnmiZESrR",
  "key29": "61aTK4C2upEngoyk4tEnPYwFA5XEYEU4enLAyBAga3WmVM5vyQSZmB7TYnMXEptj4BkKDJaJ7yRrpTyw5CpDfUSf",
  "key30": "5uqXBFQVyyq7RaPZprUe1Cfp3KQ7PJ7Rw6GnSUW7d5oGHjrFGee5qGnLerh4pJ2kNrwKz3vWoD2P6b1ZgQXN5FUW",
  "key31": "WsETFdvLupni5gjhvQqpsxUB7qsQdX6QQKXxYzkvKVSz8cqQXewd2a7YDsVrj4wqKvrYQKzXbMicaTBhTy2pWfi",
  "key32": "2pLWxRH3D7CfxXqETY379HyjmvWkTx9HS9LWx7TTLsCJcdPC2WkrGLK36cYq3HpVMKbDVYFau7QA6vXzMMR9wQty",
  "key33": "5BuvHonZ3uQ8Pb9mW7z9TFV2paccgku1ncej813roWKAXYSp7wueXxS4XEdZ7QCTBhYpfRrG95Tc8EWE6uLectnX",
  "key34": "3bGAABkUGhaK4sBsYJSeJJxT1qtbPiWraBYzgpsWYrxjxsqJ7oTKpSkuEVUwToohgdnfNy1V2Hi9oM4oU5TBkgtH",
  "key35": "4Cjrcj5pTfBpXJuAJZqmX5vPBmH6TrQdvHP9NTKse63M6XHNZdPuavz9yS1XUNgm6jg6WYDWzyRGHrDHiQTxhMfw",
  "key36": "669TgSLmKQZFLyxDKzJSRrZMoq9YV8NB5yWhXzVYUw9Xw8QoKU3WioDmKytmtgRva2LbCNWiAdu7DJiQGAbdNvxt",
  "key37": "5Cbe83BRPV93bwwiDL8XvTnxmRi16SSiqmQiqifLiinwoJMAq5RPQMVGmP8qt1RrJDZkG9zLhN3Zd5xqnRJ3sis",
  "key38": "5GA6d35u7B4GzeXgCMvrPjuR1pC24hhkznZJYgUQQASoT8bsxaXs55a8X7rsAZvF8Tb7YkVTLxhbeGXRDqbZfLt2",
  "key39": "qXVxm4RRsF8aZ2M79t7bYYXZX4rnXgmTJi3DLdKxmCdfdx4ecSZDWUdY7mZqc9ip5YRy2tk3AayhLPySGghs1QH",
  "key40": "J36dpTiUPJZpzHmTBrFazHLHfqfzLQhwp9gc8uNy5xLuXXq5H2NMvjACQv9HfcRD2dM7wDKpPQJg7zDhPLZUKPy",
  "key41": "4mVBncnkgFn1Ewi75jkMBznjSAtVsjjB41rpNbbZeu35tmjZgA6W5pNj12ksCCjc4BEd76EK1RtpjArNZLBntuTR",
  "key42": "5kS6t98neHADPsrAsydevRfXjYtH1cfhR1LakjF5jz4j1VxGzt3HTjNb5zRzA7PDLFM9BC4pGXsgcvTRirykRWgF",
  "key43": "4Lx8Nwnij3tDNn8pQ53eqWe4HvDHi5G38vaaCLkxur9ti5HWrtUeNHLPsSNXw6PBo5MjXaJe1EKbueLrGN46kZbr"
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
