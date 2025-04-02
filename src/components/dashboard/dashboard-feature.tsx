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
    "4D8ANLxZt91N1NXUgRd1J7uooEAaS8jeVzcD45L5fajb7gFzUqmqMhk5omTzyZpgpvTosotAaFMK8QhRPRLuUpJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47gc1iZ6uhuR95kv9LvVc4VDsQ1P1xLeRMjfznjxoLHqoXL5Ydgp3RvV5uKVKnpt78VXwYy7ZCTJrTkkLCmaCEHL",
  "key1": "5EfoMKbvhDroUQmbte4X2M62w1YPk3gV5THDhXoyz4kfvj9UvA6XNYBMUMHFHJhh96Fy6kgpRkeEtxFKHVb6kteq",
  "key2": "2SEX17rqyLdusoLNPKfJtRhwFaU2SHRZam6cTmdhLLAvCmjmHJRYvymifp96wP1jmEhBYjMK8prsaapdqBGfirgZ",
  "key3": "4Zx5NsN4dr5dCpSLc4gBqrSgWW6XFLdue3AS8BhCzcxCap8EKNdQLZkX7nsoYLeiTmQMLQ7pm9rnEg2uCnW5vtQP",
  "key4": "2nZrFJh55pyonefo7LEH68BeqJToDvUaztHpZDPXHdxVVatPeSAkbCtEDgjrHBQC9qQ3CX7gQPBLvW636YGK4Bee",
  "key5": "37MJuHk8myHnwHSYBhchQ8JYAQcTAHucgz42Edyt3C9YfLbmgMbRTpRnngwsTrTqwxoJoZvsz6abqnLDa2voF71Z",
  "key6": "2Ypcwx4qxwi69wxBjXbbLwPJCb1BbnFfTY9ZnppS9DRxpcBucFfcVasepH1y5pLmzJHdgZmroJapjdofEZrNNEPg",
  "key7": "i1TFNPYrEJMKGcnVj6UotV3yHqFiZDEW71ZGiARLpmhfcfS71jDJMboH7PTyq6mfR2TNp44zPW5z6YF1ToLvCRj",
  "key8": "5weB5Z3cnc3QfTDvh4Hu2ZjXzwrxYF8LTJkT16q2cMBNgS8mSAfBUGR8RTztrnq2ZmfuYemgHaiDiapPjNzXTsGN",
  "key9": "KxiBvF33vU9DM1EFhGQqow2DFYQKAvYWYfatxVJERUPj9h6JghaQgJycqcfy5ShL2gTwiibrijmmst6fZD4mPK5",
  "key10": "5oGEoTiLpk6AsyKsQqFRsWAShkk53qC4mRS39dnjAwuigSGKpx4D1owaxcaWiVEuBmEkJeBTAK8wVg1qHz9tCBin",
  "key11": "4YNwis4kAUGWkpCCH5u6u4TCZnYMWjU5SorSwsh22j5x4AMb6ZYj7pHcXYrpuxGJuhS5QcXifYopYvoTQ6NpaGCq",
  "key12": "2fw5dR1ND79e41Fi6m9cp8PtUBBwtxySzeFWxGBX3zz4MuzG6oRXT1xWNc3juqarNhwXxX8Un2vKG6tr924ziYxM",
  "key13": "fHT77J7tYXpfA4koC34FQyRJdw3TTcjLxx6Z3TUkjBDVeWg2bteKmZnKJCi7xSDpWcBpgkKTPPCL2H9H6j1UvwE",
  "key14": "HPeowZpWFySB6w1LTLkxvW3kRS3H7sybS7n2jYYps4KuMPEo3Eo8jt7g1L9MucwswXTQ3Vkwds692pmsb2eq7GU",
  "key15": "5RMcbugrMwkH2GcuboZMi7XQwJBafHmCsi8uPLFCfTCMbpPt7gsgTqyhcwauDCkpHhY3upjsAJhaL2CVnqk6MNRr",
  "key16": "iwTePkaHzpyDh16HTjiwAPLRvzQpbDzkCCGhgpMvycCykSaP7DMjhqbTVTHEHAh2tCCu3aFtQKuzEwoVmQzJgq1",
  "key17": "5rkEPPdc2RLwR9bgduuUz9zyyGA4ugJ7yhWn73a9HzhMRy2DN9BFrV2v2ym1vmKGsvKb58yXLjmDKwHYFqkbF5D5",
  "key18": "2X4bWGUbaCfJyaaE1FYhiZ4dUBTETuDQaUaXa9VFeWxctr2hzD2JQSEbwoBAVHhmCUh4d61WHwzTB2f368uvVyA1",
  "key19": "3tjU16rgsTVmStUXDjZMSXQmj1hchXHQf5e2ChUwrnGsLw88J5DLepuzzXKuMDW8YAEriLbbDJbxBbq4a3vTBaru",
  "key20": "2ae4n4zCNMnxo4L4aDbtSyrTEAYziTvoPtgAArSRitj2pSa3j2FLFMtz9TpeBpv5Y18BZNyq5C2XSyuZHhCjDLo2",
  "key21": "4zbvsDiQHE6K8oqc2rY248kXbVbqGDp24Hz2Af7BTRMSLKaPyKy8rHPeqmuVqiFBHbWt4MY1jCDMaTGsQTLzfx6U",
  "key22": "47gbZuSgtmGN8W7wzztcK3CZME3xfdXkuAUNWnrALdLaC7KFz8DQvfsyqKNdY4ii9U2EJgibmADGSUJxmi7QLaht",
  "key23": "64bTQYYi97hbrZ3vdSHhjXBgpoLZhVz9HpMMsSvtJyyyNGGkdpBR5g7fp9y1pSH6gVdk3UnKVAPGTE9tBFQA3JEZ",
  "key24": "2UkNN1NQ26MxFrmfyrP6KfdC3bZstEx524EmrrYAjWph4jAiiRfdtxnaeboMz4xjoJwxTTXkFbvDQc2rFbsdjZNG",
  "key25": "5gxB1gfzrL2DYj5wFrxuc4Eufg6CdC5THMJLBnugSQ2MpYcLaexfEtV3czBEVMvU9F9F69HQKWvYxoiArxZNjefg",
  "key26": "fGWBwxQBcYVtxEAt4gYNAiwwkKzwS1ceaJZZJYTLBR7DVUB5gxsz95FRekvGHwFSxWa28AL9GyHAB4dvi7xK1bu",
  "key27": "5ZhXnSWeDJVabiqQYHBYTqHtz33gtEuSS5Z1jnEWbfEShiunrqs7JJfmdTa1c8ZSR5Hj6F1dubiVQHGBFkKXd2FT",
  "key28": "26eQXX2EWmSQbBo9LuLz2ehkXwfyRv88A2kbP7gQDarcoeoReUWDFWTH6zNw2aoUg6AFTS2dkX5rWxrK5GVaAWzp",
  "key29": "3YnUMdi6TnyXePts8HYvxDQx1rUy9ipxHgZRhS5QjrgsH6kiWRQvTFeCEM3dCrATfbZNggCUdSY8mhF6EKGef7tN",
  "key30": "2DEXrBVbYKWAxWPoazk2ocWRmSiXva2JXpSPRN826Xk3bvLnvCHes7ckdLHyQafV63YpHCKV1Dw7oWVmeANvvyu1",
  "key31": "5AtJv9dgTbck5v7DtQspYwUDvwiKpktSzQZU9QeDqtKJTmxfLKXBcX3Ce4FX3h3BkXXonn73G4EcaZ48g4Jv3rSG",
  "key32": "4MP623kw2QhwPxWs2JNBHwgBvG8cSnrsHUm73WGWGGyoJuDKuQVDZxpzQgXHo3ZK6Bo2fKyT4kZcfTzc4VfBi7Kc",
  "key33": "3i5FD74GZSUNvtYiKPKKVp5pw2m5Rd6mJKZZuorE1YCtWVCN9CrqmS3oBjy8gbAmraYxnNiZ1bLNE2sVMJkZUiDt",
  "key34": "2T3Vxt5pQxqD9KMnRKdNmmk76k3QCjXmEnAnwzwEyMQpYRk5gFw8LxAgbzK9P1EEjtYAwgDhpu2kDWDk8c1Zs9tS",
  "key35": "2V5v5UYPosVyqjFZ38EzM4AFEQehhLv3STsj1Nr93yAVSQzwvyB1Zsy5bmecFfMTRmybYzQGg5agoFZQcMqogpcy",
  "key36": "8jeArkDmLBA4yJQQqVDTbH86LEKaKd1je5FEBi6DQq7XD3brBKfnSevD3odW5Se9Cuj9GnfFfyDTzvpHjt23MEH",
  "key37": "WnZDdRU2NM5uQWFZquJCeNfSEGoF4UBm7GKgWQinYUxn7R4b3jux5uAm3homYa7oJo9MzpeuLxn5XaKY7LaxEJD",
  "key38": "67RFDRKJwhKQbjHKH48mdqc4FSvQb6Kj7Szsry1xFBNfHCf2TDBb65DAenypcfTsuVkHttBoc63K9jj6JfhC9C5T",
  "key39": "2eWaMYccKaBz98ivTKaqwh7eZXjhknmc5tQAPLjzE1QD7D4xokDHRsM6ptjwRj6VxfcLqD6i5dazbPQVzYnJukSq",
  "key40": "4ZmZJjPbBknevKBuAYbz4h8mxVR17yV1kWaVhL1QKE7NsDbcQcgkDkx3CPDGBSCYU9JrAg6qB1wt5wmup3W9uvcy",
  "key41": "2p71BEBf1AnaKhzx6VJzwigtR6mhHCT3Eam18kJ5FHiFZdk7Zg4uBVC9tKRR3uqFmRdy77csBj4PjRoQc2nm5eop",
  "key42": "2zKBscV7Vij5YW6NW4ebpUZXLwSVv6ibRfwWotkUUBRM9v5VAt2B61gEDgQLNe5eywbBG3k26s8aKtCLu8B6Q55x",
  "key43": "2kHnvcqZ2RK9cpxZBUbm4gwXmn3cFaaeoznQxJq5jzuSPokGfwYCKFYKw8qnGzN1K6xkDxuUXqwj48BL9uHNwPX"
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
