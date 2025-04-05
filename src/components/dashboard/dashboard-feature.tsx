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
    "4UmZAADCuzuC1XYX55CtsWgjrL4Mg4cNZiAZJHPp2M5bdH2ZKYY1ajhSN2Tf2nJiaXED8vkfcqspJCQGujhiiKUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46jmKVbeJzMjXzqoYuruA4kPxkk94dejX9Hi1eXknaMLXnoXJCMxcz8dAprjUNHQwUVv8TsTgXg2urqSupgWtLkP",
  "key1": "2bmEngAJ8X2SRogAVGxCJUxNrqEguWbqwZyMKGK2BnHBrBjDinMK7jUGC7UKzvTr7QNVJbuSpBY7NgP5n2oqBDoH",
  "key2": "4B5JUvAXyuhWk13tFjWFTH1ht4DZzA4rhF6xbnzruFnXRVfJoDkwWzTyZiP6oekMbhvx8v6UedwqpTXssMSTszEv",
  "key3": "HUKaAGkARHXh9M9PjrB85v4j6pSWUyoRg5FTkPj8w45fd6w83c9LSc2GZNvsWLdcSEAhn9QWqjmpaVnWZ61uh27",
  "key4": "5gpEySysBmYh12TQu3EKnhRTKB9xeJWbAYkbbrtL7RhZRXC21cUKmwVoJSPUkDK6tSH5ockCqM6239Q3GJkhvLFt",
  "key5": "3BMocjnGDChm6c82Qo4Ny9JoSSpZ2vGzyvSZUyAGizEhaCJcqWHc4nWNs8kpch2deyykmkaaVNyMumPWxC3m4rqX",
  "key6": "3kF29GwYgabixfNDHbFbZnxT6ds56z1NGFoHKjWKJo2acaHFi3h9JZosb6CRyv1KuBfVLygP6y4rsBc46zwaqFoA",
  "key7": "486gUbeLWomspsYZS55UiYcT3CSjL9jUpZqVZb9r4VVRiFsHoXDqYjixsUvcMfyBtpmVNXCgCMDds6LwPyU4c3hA",
  "key8": "2YSJFMsxTXkeXH9g9sZYmSkc5788j6Xm5bZk3sKwCkJozJZPn7guCeCQfpVrpenhNm7AQPT96BsTUhgY4D4o2Ts4",
  "key9": "3Q81Ato9sjtPQKkpcaWrtDZVL3whFiRAAFeYQkdob5ZoUx4exM3GhybzXrQz99s1Ys7Svc2TGDiUGAzuZwTioc18",
  "key10": "3GaUp9d3JqGeiyor7nqpZdQ944qX6LeMW8EcW3UB4BqhVTfurU9kjv7Qv31F4regQAVptdZAYNt2AaxfFFfK4DHy",
  "key11": "3X4d29mXXcSxLsj3NsvTx54xqZzFayAwjMSfTgcnQKPtBuF22D1LwHVCjQkF7SFF2vUiikfEWeobwBfpMK4Q5UM6",
  "key12": "32roEpu1kvervhFESxpRcBDFQimxQhDq6R7dTAkUd2HMu5rB4pQXTe3mxxakjfeMoeWuhZQBQ43GL15ZNUHiWdGe",
  "key13": "21d3tTYYzzQsakSzYWMXJBjSBxFGXsNpuuvq7ER9MZnKuUAoUhcXu9KF6asEzsG1EeGzQzwLuZ8vWUHszHe5g5j1",
  "key14": "2vZNSLGad4GKdX1omv6jncqdCBGnRta4y2b2SouJsqsUnMESUFEymxyUYHp76NX7wvc413KFnnLaSjwxsTZKmv8g",
  "key15": "5SrBa8noZfH2VwXcSJukNaVp4KoMf5QQooUAXBoJcZR6NLzGQcntBBeefQgAjdccMLcLmUXva4mFr2ArM2yeFNM9",
  "key16": "3bk4gq5GDvmwFKk1rpPxZ2LuDGkfEVWCVVMndRQuZjQ6uBXDJebCeb7Gc6852zJ6v7DXoH3ffsTjudHkvvFVTmAq",
  "key17": "5s26rkmDtMQ7FJZZ2ayJxgv6xiscnoRTGYJsoW6apomCA5jS5Hyd2MLj4X1kxZbRLpGxHrCrrNP69WQYd8o7bgGg",
  "key18": "24kNypuqebZuzTF1HVtS8vqQbX2FuNviBW2WGeotqkNsxbG8dkAGymN5ZhX2ru7ZY98nM7Xk1bhNf6o2DvN1ZeKY",
  "key19": "wSPWrXMaj9MXBTPkQtPcimPWx2ow2NB2oVLsVRA1LVVBh62dohCGG1kd5FMBY7jASNEu1VZJMoQydgHoQwtk7yM",
  "key20": "2sbwxk741KMfSZjPe49e8jZUCZhgg69wi6gEisMb7cKQoXMixdM9kcGJcLiEAkmq56hixWFZprrUP5BMduF443Vy",
  "key21": "4jr1sXupRBWukBShQJUjQ28T6s7yoj1ASGybacKfbw3P5yegU98spD3zECBw6YwzxT32X7W19hi28WescG9D9aSA",
  "key22": "mRPgeBkLHp7q2qBUaeAMCNYgo9BhthB91Rw1jT9eekDsJ5cncR3G8nFf2BcSU8pRdiuQPEY4a4XECn1Qr6G8jAs",
  "key23": "4tGjdNQnbkxrkNV63kpK8ABMd9gFKM1LFXmxQBBR34gkDe8RcHXyTiEvixjX53nazv79Ve9ihAq7PYaj6B1YnvUR",
  "key24": "5AGV13FAdrCaBh6zqEoru7M4GVxQbzsy8c9rBVdw8mVvdEntPhR3qNsmwKDB2y2jwWRXuj9j9mG3owf4R8PAKQUJ",
  "key25": "49uVANmHNEZ1Kf4UQNynDyEuf7A86Bgq58oAQrquU6TaHJGgZLyQ7nEGuiWq5ELhadZRyMT6pCTwr97ZcpuuLeZB",
  "key26": "47pAYZDZqjggjnQUacjPspYVQczkPp2n9WpWHbTUeiAx9i7jKEjsr9wTmmD8E6298LtWyd8EZpzW9D1AYZpsMBQu",
  "key27": "4vEQPVe9RAuGYKVvzAYzYNQ4dn3zi2VyjWQXmqXXxegjLZ1WrcLusWdfewyYPsuqaFyitkUSZ8mXouinamfivhUT",
  "key28": "54qZ7E8Gawe2MyEV4YPshkm7Q7mzj6LSrsgCz38VHttNw5Tn4ATD4efjWTHJhPLEJG6fPrrYAvd2hwt9PPbyT1sE",
  "key29": "4H2eRHtZECpvLRhF1caxAHuk3X5VrB7RWPyUb8FC4LA1SCjc4qkhxrEmkjbtUFhmKWzVQNewmyztLcKKnqGbAeB5",
  "key30": "4SmjkLg5xEBLn471qA3T7BUnyim6athwRiUJZyMKtX8Nr1NZQoV2vCNNnmwhLxufBycPS5pzgU7ifjYC2nv1tJ3m",
  "key31": "2LSkxpmdxmkSLUJf95jmwuAWgpnSYyxoxnsTvBJJtr9uehmNCwMUiTg2UHZLxPJNxMhDghuq7xYchzMfs1AMW7wP",
  "key32": "vY6HQrggx2PDjgF42vY7SW32pGemig2dgkrfhDGVXQyKn4218zUEJpm9MjvqrvRyRGuafibECzpmqjwoSbwiyfT",
  "key33": "2kTyyZwUEMhqmhTCUSd2fYQgdZ9ygNEipcJSUjSfFG6gFbxLYMcLTZ4kwcoukUnb6cV1xt7ZhASBNRu85syrn2Qc",
  "key34": "4g7xoYM4wtqXj9GzhLRToowYtTKLMzZL4yb58ctkgXEMnAwcDMbRCgwqfqtW45a3ike3CGsAMDQF3QpUXUcqRVGr",
  "key35": "5Zdmss5RxGEC56JkQUkks2rwKzW7UMtUYowTnzxa1rxz6mBGSQGibppYNDw6Jp9TMCTpmBqTGb68evwk5PJKeZxD",
  "key36": "4d5sE5QNd9R8jcx3CLCvQfxcYCJ5mpr3cZNqjviqn6scqHU49Pvs88nwzvhCPb8owEAB9xQ6szCorJAsrVEhM1PY",
  "key37": "PHhYAqAPNG5EJq6FNiHDkW44tJ3Nd85jWRTAkSJERoimTTCccNgDyiYJy1C1E3eWW5s9arkU5vhRAzR6pHPkF35",
  "key38": "2qqyaEXfr3HcQefdaEcnRHRpqnW4T7WpK4Eq1CyGYxhQXBnjqaETHA7UCk1qJSDh2vofXvKdUq9ujkpfrjF7WJEA"
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
