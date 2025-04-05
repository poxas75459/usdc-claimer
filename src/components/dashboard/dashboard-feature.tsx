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
    "3WWUdLjTj3fejXYBnLfsyFx7W43LdYM1dTHuABvrt1HFfWABZLFCFT3tHhpRZoweUCfzTsAF58fe3tEgWtEyX8hc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bdZGiA3FGB8svHppwVK1KHPwfvmxbghM29BBHXWJK1vqvBKK962ARtkLHnxR6btw8HvXyiZ1EE2so6KjYnTmff2",
  "key1": "Jmz9jYchT1zxFry4cRxrk949HFW1sVzPpAT4qVgfCTuXMzV5o9kWkj8ME71dF5GUjMhHxBPTiDC2yFLYRS3EC8A",
  "key2": "5mYKRsFfBbHXQvuHVEMeErbm9iSHn6WozjXXa4iEEe11y2wzcA92TSVbbg9FEUHbbrHbFQgoyix3KRrfWDzLfQHv",
  "key3": "231LUMQHn7BMthPYQmRYbkwVftnCqxEBivdLva8hRPea7fTpbHDZV5fLqWg22ghsnAP36dniq3UtiXE4sfQEr8eR",
  "key4": "2XzSZYtPrwRvynWCwuRLW6GLGBZNKRfmwZQQjqanTAqD6KYKFyA4b8CVVUw36rfBPG24haf2ARrkwsXXhLYUN4DG",
  "key5": "26PDWp1FhvEjNCsXRcEHcvEg1r7vTN2wd8NQ76JVEn75P4DUWcJMmciRKGUiJfXGsBWm1KuaK8kWSRyEC2f3GgKn",
  "key6": "3czsqZUP6z8WxY27WUcCiWKLNARb9qXXEhJHXgKRbB35k5XpBnJnXGgqVLd4kPydnYWJrJc19fpKdRjjVZ1a6YHj",
  "key7": "27kYqkh1GLkjasqNsyssuu8aPGc16e3Vt3jFK7WyJiZ3ZdxMrjFq21b3bfyRmg2isbnQ7FURXwHcNtsNNFgLttH5",
  "key8": "Q7bY7e7BGWSyMoP3sasRHGk6KbiLhNHxrfKi5BGDJQimDNWcWuMFW7wbFWDRwX9UEcbbgj7wTjK3dVoifqCboZH",
  "key9": "4pNfq871wqvRUeJwXoD5npjgVN43xbfBxvuQksFame8fAhYNa4w5PKWkjk4ZvV28gBNmm63VjaSCVP8BXUY8d4Xp",
  "key10": "3NnDMWtfoY8uiK1cRPyfRDPiYtLkKbBNFhKSV2EwCZYNxEMKEQmuo4s4bR4wLNnQVS2Bg1q9WeJbqp5R9AjRTfLc",
  "key11": "4UTFLffZJ75GyY7wbp8wVQLG832My8Jq7H6HEnBGb6sCdXxBfXHQ55eG1w4awm3WWkSGXURcXmAhwWRK3QM6H4E7",
  "key12": "2smUsqKdmjEJNrH17KunjAD2nC67F3SxQZ9dEiezFpTyC2itDTofLJwY1aL7PZnxyeP8YCxr8mhbnT4wv84F93K",
  "key13": "4GR6Fo6356CPBQUYmnwAmiqKWiAeT2xLoXgSY27Wbm5Rdj5QaHKxvkL8u1GDaAPhEFThL6yg3MPiKxanU6tPFubS",
  "key14": "2NxADYQ2WTx1EaVC8kzdBBrkdzDj3HdQ7cqzbNK9DVUMQT6V7ZfwVALfhGJPzYD92PS8rP4nBJACk8deZ7DD6RWG",
  "key15": "4HDpUUfUqSs3tiYoZGNvzMV9UMZdHeF5Bxu1YWA96tU42ThkUzNWmcbFoPVLkUwV2WvyDKUQwzHccpRrp9SrEBmX",
  "key16": "3TYp8akKNeGYJpZfPx3aoP38vAiJihDzAtz47o9Fwf8GD9rj8MpRaKEhMeT1rESyaAusvBSeKKrd45D1sCpWcQC8",
  "key17": "2kHeEEb852n5ErJnJhaA5zXL9Km59QMy6CGFR3HAurPKR6m4tBiopCMXk9rvJhZEzbmCPgUDCU4PjX66rmeFuC8U",
  "key18": "2FNamaAJbRU6DkEY4ia8CE844A1AcPi2WqgrJinbxJ42LMHnPnfBjDHQbGcbzPqvePTTEzUzHhXgUJi8YW6jGtu7",
  "key19": "3m7okyp8KR4mppB47EwsQ1JGTmVnxwPza6kBbFSwUB7Bk11ZGtBySa24TF8BffeJSoMLx6b85R9FzDkug2anhz3H",
  "key20": "531JwYSsVwoFbT3TfCz4fMeF7atktZP6nMvh8HBmq8XCKmMNhc8j3TJo15gQeb5XS6bGfhQEvWp2k7FAd5mmhath",
  "key21": "2rnzh8Sgd4CLVJ1AAAjRAva9rdJgvs1uEj9AyPtFGzrHCk1SXuNx4Tfw42Ca49HtDLezGiPGT5oKNrFE174gPiBT",
  "key22": "427vJdsrnz7t3uniFAVcS1EJb2TMN5j553vxdLeECgYRRmKSUPQ6sseyNYqHZcawnaPfvr8fkTuogHZXrRkqofCU",
  "key23": "3UgfcEP6h9MmG3X6sHE8SUYAGGLHsmmosuzirgMckYBtiTULFZ63ukr6MJ2uQCvsDVfMShSAvn54KDeBMwaGP3K3",
  "key24": "3ByuJX24boxbAdEF51C7mrZDnuUnNEYwg8ypazbEZCQ9VM5b82CX3pcyX6m2zNcsSNtfUBg8abmqx12Gx97qkRj4",
  "key25": "2b4SjtpCTVweqo6Bo8MSkAV6pu9KRd53V7wLD9H1sC9rvb6pAvPbeHLLwgyP7YNFUFQboH3ykX4EQAFzHNvSATnQ",
  "key26": "5xsRKVQygrcXXasCyAZePhVVVas3UfmndDiCRHVpLX4L7dG7cFBVmqSuJzB3TNFn1r4sKYxt31Y7fCcdQC3RY8J1",
  "key27": "3cHrHirVJ78Hap1LdgymKqe78tT3kkNimvQn49TWTTtgAt82fMZ5s1qd7yjhGBx3aRU1mhbtxokXJ9aLDzxydkgr",
  "key28": "5QkDeqjBd2iNN8yEHJsvy3Ct3F42iDC6mNF7rV7nJHPPQRJRsDe4Rcxx3jp9ZA75mGmquhkpD3JRCqgDTf1YHVYf",
  "key29": "4h3u8Gh9vEXsje4qrXxMxedKRDu8N2E3a7WDQ7FSn1gdbdLFa4TdjKSDs8MtZSEjdU6U5LifuHNFYjSH1tNnxcVh"
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
