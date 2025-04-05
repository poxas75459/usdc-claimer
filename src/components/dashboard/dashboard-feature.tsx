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
    "24aP4ftfQE94gzkdq7QezDanpwRXvQiTYGkkoATmrwEEDN7aBuBmq81LKpno7XzWAgK4VJCZcLqAeYpHfKtmEng7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33mVqNZtRL9GLzJ9PkKWoErDw6wf86nkFuV1wakG5p4LeHYXNgoDpP9ZdTJz7aa8swgktvzqvNrx244HPbSSkPrS",
  "key1": "66CBVkW5gw1LZBjCCYgRBZ5QKP9MZEt1pQcsSCLS5meRjrZb6HotrXVGQ7hE6BUR5dUvkd3rJspShiva1N94YvRJ",
  "key2": "3ZwgNCBF6fuPTz6FXrJWHMkNGo3VaVNpNUsiGkLZUUoRAZrzKRL2oSu9kp63iM7ZcGydhmQv4emRE33nvzyPNX5U",
  "key3": "3oUf3wfYjn1kzrk7hGKZt5ameWsfS8uD28QX7zV5fWWUtDDox1apCsP8hk6MTQFQsjFJyvspe5s7PFF8cp6Y6QTP",
  "key4": "2HAjQU2J2h1wQWQBgKdDd71kC6BkuF7rbGUXfA9ZHCSaSJrUY2Tj3jXvdg8UtLZHTwRQZgkMdRCFkanmqtDGRxtE",
  "key5": "5x9wMTLoNqRi4Qjk5Rd88DuLDQBpRzB2YsJGtDzJHS5fgKfahLtv5fE6sKPTy9usRYU7pjFsC9evDQRATwFtb4yA",
  "key6": "4pQfRgWSoS8j48A3Z3knN1RNQ5rQ1seQ6Rozgf6mufopkKTc8BBcqBzUtXJNmnw7Jeh9vtgDST6nL4o3wwDYrocg",
  "key7": "4rPjJVMYheegoVSdBQ2jnBs4fkxsNVzWZaG7ati6Ei3tA3A8gLWeNwzUVNU5MCifexMNnGtNpTHcbtVMDWUJm4ey",
  "key8": "3s1NmVJ9KmftZNHmq23duy1R6MYErTHkEH7GqopoGiab1cgggwFjHBgyYqphhAqjbW7bnv1sALL3SXDQousLotUs",
  "key9": "3NMqP62itBxFgD8A9BEgCFf9Tp4WyjJCTpmSFGNaGSTAPXhFryWiABzbUzT5JGgPYH1HNiKAg82harbEzehQ91vC",
  "key10": "3XBkAWfgrYnfoPvSsGb2BweauCoyNfoWirqHGaF6uiwkyrNWc6GMENQukEbrsLQaQb53ptG69iRdVHdvKDyvXFug",
  "key11": "ozgmAGBi3j6urW6nPsvAEmsSLySri8aEVuuxJhi1BBQ3H6UX41uoE1GhvNn3xctN8gZTgTq4jDgeveH8SKxfbKD",
  "key12": "3Ltm97aFRdjKaoa853L6QTs6qm53qPgsBFS6gFDRvNioTCXBH1NrF99gKw3tqqcWw6H4VWV8EUPW6LwQBQHLxab6",
  "key13": "4RvAyw9dQs3Tct8JwBomcNZNDncBxtv8XQvAZaCaKKceagY1bf14b8t7ojpPmuVm1qt4fjPHAcb2xFovtVKQ9Qta",
  "key14": "54qvpjvj695mPY48wtkcxXoJ96GaCqdd8Lwfy8j4M5bXe1uXh4WPABgWLLHSkoosfwkY7bSMHUNnyL9oQ9QFoq9X",
  "key15": "5Ysg8Hmr66bTC7Mi9ash9a32AsGWyt2YQkkzTrk7gyv6ogp3R2o47TmLtQQbu6rWUWPbBjiMufn1LVUzj3d56BHL",
  "key16": "2j18xanXBR45oFDR9tkGRvh9ohyYg24GCZKeNVxUVySiYkM9wKWSUC7UD8GdqBe6eAjsgAbRP4zgFbkFcXCiPyg",
  "key17": "2L4pYde5EvETt9gvzr82yt6PTQsScn3VLdU6utHTzugTqrhh7NZvKusfbmvBQX7qKXEgLCRTNVZZwgXd4JNGEMXC",
  "key18": "3hT3fKkxhJ9XA4rjwRxerVAhGx3PYPMcy5A3Gqx6kx2g855UcYeE6opbHTQUDpmvHY7wnnxkrkwSFo9nfQEerSWo",
  "key19": "4fLK7KQ4RKw2AqoEk4VqB7vZ8pX7ysx8Vmx4TKTust8u3ovGQREajwFt5crLAkRyAbJrfwA1xTgMRkCfv5CoXupu",
  "key20": "4Sb2a2iQKSBgoYPCL1sKFg9Ut35p67eVF27WBu5zRXyXqzgMgsBc25W1vkwKqeHMxx2g5v3X1hp1vnFQNYZvJVd6",
  "key21": "61QZmk3Di4s2itm2uNy4mrNtfpR7gZSbyF7XCLP1y3pFjWHJSVfVARBia91q9UcjrJYLtRWN3c5ahp2eKqo4afsX",
  "key22": "3nx8dAeJrrB8DJw38ggJmRDaS5kSgBRV9A4tFEJjHFsTxp99xtXY5jGissWCooS4bPKSHi5pxUv6Bg9hwUZHib6p",
  "key23": "4JCXDZN7j6z7o8USQ3aXCeeFyu9bfG7DNRtW1gqQyYeoNvMrN5b3mZCPfey9nN6dqjV1ZxwpbTPjau5yUGjnz3o4",
  "key24": "3QYvW9vaoWi3CiMNxdzJC1YSGkKLykb1AjmuJLKHUY8ftxivdsjTamy3k9mhbeUQtYEa9cTAXafrA7LujQqwVH5x",
  "key25": "4sEpWvQhxybZErMCT7LSUfr4TaoYv3grTn1q5v31mHihqyANQoqkxA2BtNgspJJqKcS7hJuyFSLHDkoXYToSTep6",
  "key26": "5f2W31bPsjyZqLpC58fM1HNLBNs2zRfZzrV8LsLvegYR486XaxV1CewY29vYrdvnkm4QjQ9EqpMq9zWtJbUoXahi",
  "key27": "5wjjj3tV3BifRoRj48k4E1shvQF56KRRX7hd1zTsRD8QPJhofSfHhJGd5BNk6uQ3vXDfpPrRAziWQEg2zFzVd8gV",
  "key28": "2QqtLxp2uL1ubtytoN7Uppc7dxzw8VJaLh1t5dSKL315omvfWbt123Z7rQGmatQPuPdmELJvLGrqmbpacwsyRSaq",
  "key29": "4CERTCU998AfK9rqbuFp8Hvko7tuq5dxLK4566tu2H2JMYypc2ZPYnHrcyrsxKCHnAugEi3H8Ad75dkxPB11KND2",
  "key30": "4MpC3XAsax9aPko87EjELbKPWkmSoe8UFYFQAsrptfLLY9WhD4WmLp5AxQma8fy4bm4XKyBvnefTHYATXXta94eU"
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
