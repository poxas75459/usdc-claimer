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
    "3PbZ6xRbnncaVmJDmkivudAvbC3GpYu5u17uN7fwn55Rg8rnyGmVMtJkhKUjCjCR67nP8XugMGw11GkRJbPsWytv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G8qxzFLNipNZaU8J5YJNyc5h928tp6NbM4e8hwgVg7DQxCcVrDJ685pM7EJkKi7qRUnfj9WAHV7xwGicDLmCg9e",
  "key1": "5ZRHZGQD6FcXMb7bjCgvafa1DEbhXLErmTyB9D3ep1AVniowngXiDroefApdqf1PK9QgMaEE5gNdfjeEdM2H8hQ",
  "key2": "5XWNtpTf8FzqZj8ZaQGjSTgWkDoq4CetdkAvUdEkQBYXo1ZtLf28pt1o83ED7m2DNX3BC5d9HdGaTjGSwSTsjDZC",
  "key3": "5eG2f7T1Ueded7UiRK6AjKKCVNTgUC4b4WexCVT1vrS1ne6nJ7rZofaPou4BFhZ6neCGKPvWdNu5FNhQ6wWX6mo2",
  "key4": "5LdgpnrKbp6vXhPSY1i1pa35ZkCLEwhEaz2avZh7Q9JjDc5Hfs5SZy15iaYEdeUYrMw2wugFjAaw295fQhqooFbr",
  "key5": "4e54JxymS1zeQf55Sou6FHVU44Qi8KPwUDwgPZiviVJ5kf9FBtHf7wuQhB7icrhj8ZsYwz47n2gLnXimdgRKvd9x",
  "key6": "4KKgPPHv35MnS6QxYRVRZgMedskcDHi5sYFYzHXWPfc1EQZuP2N6VcrnT6nFY4ZjRNDNqB1MYerZB2J523QwkmJT",
  "key7": "5Vqfe12ZUkTYanJewgz2kaKGeoJs2yHD4nKQd9YU5awKcyNv4n17GozMh1UuxncGPJLweKnNvsd2doSpvBXUgva4",
  "key8": "29Pp6GaK3JpZwdKTNn86xdmP5RKdpghJgD1cX7ZqtAY3MURbCjepKSokzFKwNGPEDXDPCnmk9sh5AMbZYk5JaniJ",
  "key9": "4j4Hsyw5i3FMjP4fWDJKBW3jxtdvhFh6fRnSYRDMSk4oR8UG3Eh5uxkZhenuKZeW3WdYfnbXiMRCojDD6V3ytMAS",
  "key10": "3sYTe2HxQtMQsKbHpLxQJqFUjUu5iBSmK1iac5k8XWSDCz8Zjnp2wMxR7tZL9RES8t4DY5zxaFwx3JUTXeqZVGeU",
  "key11": "61uCQPfEtcVXVJ1PiAawszmTcyobAyaQm9LqrZkahMgNRTbLaM3R7j2vnnSHRjXkUp1fVCFRFSqjnAHK7tx4W9jm",
  "key12": "2wTCP1Z6xcuTcg6p1WhBkKiwwq9mdRnUUMfJnukX6BJFcUWN5PsmrgRrNF71CA3rdmyqcvnBkGvBZcnkYdBkDQRK",
  "key13": "3TZJuGhRtbJmDtBYCKD1cksgkLvmmph8VULHWmh2J3vmQKRZYaXHCAeoodRbUct5r8ip6zmHkWYRJ9TDFgFMcX3M",
  "key14": "qwT5e6GYXtZmW6hQ19eicpvDaREo33yfPDh5FaQsSPWhuC5mYkxUN4DU7CubafyRRe9Jx5cQArHn52u57nYLMs3",
  "key15": "3TzdHVeAZXNkFbC4wuL4FuxppEFfKyYgQzVe5ghgcyXZor4QXcXxt1rpLNjsdkKEPEaeTe8gFpZSdNTU4ioWpXds",
  "key16": "2o6EcRk4mWSEFehYunR2ENHxLscMnd3ht2otgy3FW59BdGxhvYFwC3jgkNMcY5Co1LdhRM3Hypwh8UbetrgazQ4a",
  "key17": "48sbYhGqqtoaxDygkiV7wdRjEcTeoNZ98LEXYBzYL2Sf2t64Nz6Vijv3v14Vh2k749SkYT587Yn1hUYUK46jpCJe",
  "key18": "2pkuJZNY4B6Yjbi9Q7mVG23RFJRVGTz7djsDkc4avcBJQ7RiJK35DJy5ubu7kHBNygKZtiwEgKKrnaqbSUTxxrwp",
  "key19": "2BzY3WYih72wP5Sh9S4sQTThDj6txukRtzPQFRBACCRemKncEDBRKqXcumtKYD95ifrRvS7nUctwN8Uoowsp1U1U",
  "key20": "39b7LePPFbegiEEkb9fndoUcWyKYZeQ8vS9ffCnKBT894o5avvnZCaaRTLatcbmfymVEa3juV4vyaodYeHsp7PSS",
  "key21": "5Z6cZCSxQJY9kNwREm9PZ83F1qUa2FPJs26ZRfMS5qEKDihmWDcvfEGky7JxkNzfnvraTVLiuGkacoUkBsiXw5Fi",
  "key22": "EqhcyGch4SGvE7rN7g1iGDU8XJ4rmyuqUa3XEuhce5JniWgRdeYgeTouTSfXhkkXSAGRninoGKgpHdg8fu2aFEi",
  "key23": "5ZmaRcdbYJtSUqocAkTag8GZRPAkCcb7UTwWW6oG4PLBg6kcjScAHgZr5kq2NygqweQWqDSrqvvteCeCsbkJMSfy",
  "key24": "4myJTL7bmJ3xaMaFdETSznxgM5tzXh4fBK7BSRz9hLkdJd41JJq83oLRt6imECk6zrLYSPguPpf5M2s4HikT3sTY",
  "key25": "5aq3PRpZBxdAUdG35fLDJRta5oTWK4NPeivrDxZjgLz3hEmFsTQUAjCgFED1TbeQZbNeUe6RRyEtxsLvkTyxiYb7",
  "key26": "fQhNRRbRKc8tbpiAZJC4FELKNYNsXanVNQLL9DyoA6kwyuxPvQApQ7VuR2KDFfY7Xe7FQFTvpCoDjYXgtHRuvBm",
  "key27": "3PBN4nbur9zyn81V4ExjcmnfHZDzui6tXFe2efMA8LhXT9j9g4RPaSvPkXGhcUE7EUTvpKYGNCKQCW6EtPQ2LrTJ",
  "key28": "5qm7GsVbSSXpt26wiwajBLKixHGn6JhDwhFcJsWWpj9h8WPR9JWwW1YXmWxWCC7CHW2zGQJ7a62985359LQFTFvq",
  "key29": "mHSsW4kiSxuZvoPs4fi7a2FyfVoUeNfnGPagTuTn8PrxBevSdvE6j9sJUZDfZAhzKS2BBxLwY1yzF5HRjZ8jSo2",
  "key30": "3c2yP71R9ky8NVoKFg3GgHKGRJwEzkXzriY7jSfGHRJY4wzuPJsV3r5NJSnZoAr9U3BX2NAEAyEVvMorXjQeru6m",
  "key31": "57pbmSQcG63cavuR5rE3Pe4aEfPGT9EpZVN9hqvUj3bPjyb3jqRjuxrgVYvqqdKW8S2hyASzmaY4RLHkqrjWGFqs",
  "key32": "5iuWcKHYVMVuEfaYALsvibQqPZvzqr8TPtvgJnuMCiK2UiM4gURtpvssJ9D1zFRMYxwUV5qWsbaEYpuPtNrymAqZ",
  "key33": "2RiNa7s56Ht5V81L2VVLGw5KBqTyELVdEb6CimQpzVdMertrpE6HHkWM2J9dt57Bt5hy9oQvAWXUDWbZpjXYwVMB",
  "key34": "5fnW5pQyP65KVHzrUmJwxBFqcF1puXMsuhgvFdG5xw7EBAQDVA6qnqv3Yi7adQucb29QLh19tqA5oCRMUjtQcjzE",
  "key35": "2FChdQfYRvzAgyU8ixVdMtGGwjsREs1CRXUXKxKseTC87JcPJpVAcvQenFuUJ5yw6tggJpSwSsob4RKAzVvDQEJk",
  "key36": "5yjN5BHexoa3djUJpo8N493PXYTBwFW4iiFge3wpx89GRXEGPTtAv81BwxjkdD9d3xVebqZkgBMiggkqL4sAnrJ3",
  "key37": "43c9usZetV853uDAhkruLsnFGdhaggxjyx6tciWmxzsdR5Azp37od8CtcpvRMk5PJZokkTfGDVC6ghSNESmaHGSd"
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
