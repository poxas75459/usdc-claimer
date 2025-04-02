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
    "28nZ9v9z7xjoMdjmSiNVusv6nTXZHia1t6SV9Kv5kAc3Te6RrE7aw8ib4nUeGc5s2JREJbapt789hrR7Mv9dLpaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "331dPmwDpCPYPkUNAaWvZ7nFb5KfM5BYLPK2v9mFbw1aUgZWWMUHYV7mfv7rQ3v6BhC8KxdYoGmUcEbg2YvQtSTq",
  "key1": "28sYAQk3P72qAuApHWnXmeBewpctC1J5mkk1bTemUt4aNn5tRwLfvXndtWrbcohnQAHzYpewsNdEVB4g4qnL1xeT",
  "key2": "32KYLcsqaUKudynFkjuCRSiEKnE2jDY5roSyNtCjUACJkYZ76s6EpCnjuczUXGFuFqiFPXEP4mYxdDRQHnpZVXiD",
  "key3": "4i88vs6vjYNfZeKtRKZ5W95AsMPUKL8JzWge5idB1Y19mAmf4SZFmSdZ5pX9nL6Xy6nNUjsfAYpC3s4t4wB8Y6BC",
  "key4": "3eiYkNvcfuUmRYKgBzax32HEHnLmyNVw9iMKUsyNBYPNYr2NYGbByaHnp2S84vXzSgjUv7MUemHooRMzXQmZkxrh",
  "key5": "4qtg7KQZ4aeAksWDD2KwNegF4ApoYSDzSby67aWAdp5faFcmiuEz84xwrBZYd9AfDv5ZgG4t7SS9z8DQHtCk4JzF",
  "key6": "jKtjYnk56n7WbbgtX2R7VkjmyzAQSG9Q9MBxjvxowL6VnGKbPhYsKiBorjokBSaQs8FW8979p5dK8ppn1KUqGzc",
  "key7": "4FGXy9SdNMsa19o5me9j5nvUaqgeF7UczkMRa2WZvjvAXwR9dBoDM8CYANvcWjmYJRhn1nJdL51dtHF84dij3XWA",
  "key8": "5g9w9hejeq9v2pfdwccTLRm7EzLujrWTxkveGGsZf5t9bpCmHhbnDJMogKdGBuarSyJ2pVaq9n1EEQfWgWpfZzDQ",
  "key9": "3jX2fEm64j1br3ep5XZn6kAem4YhxHQPwLmfgUJXrxYTdeW791yCvJUNcecJiahXZbLuwgc7wQJHnTmUy1UscFhX",
  "key10": "4VmWyVzn6e6GHefKfS3dLUcq5zwoUog4EjW7hFNRzGtYTsK4TvwJi4AnYCCaZP3u6rEE4sENuSDAEpD9jTxNfdRz",
  "key11": "N13HgYNJYqGPVBkaao37RqwK4QE5ERAHuoQu7DeTMGrPokpMSDzV2DLoCJM2WSdnq8zkxKgabfwnrcGFGBULkuR",
  "key12": "prnvY4iaPmHnG9cej1e27Jo18bmVbNvpTWpRvbY1iBNYj1RBuzDJLiRtjNJByCB18AmmxAdDe25j6WL6M2bRgso",
  "key13": "eVVrmWnzSaVNmbjFyFenLFAfbGjMMGYmak6vvDn7JfjZQxs3imr1gfDxscRwQUyVTMtehiHtt9yCQDF8S6VX7sY",
  "key14": "2BexTq2Vaqp5UPRqdSkoWQpdsKdic8vCpiqhedzofFcHiDP5Q5BVYyrteyAkQSyTNUEBowfhYnktE4PwzRoFtmCw",
  "key15": "WiWawfkMnpsqUSjg9toy2fn1eCEWPXWayXkZAwrLqN2kzRVkxhAz1E626GnRxbCfiq3zKPo3HANv8LbNeQZC8tj",
  "key16": "3Jq5LKdFvEphcLk8orvRcUWJ1aoYM2hGE5Nw5KzZqGQSEksz6XXXHgQtRGSztaAVnU5fgd6cvbUju9vqfjA66jCA",
  "key17": "a3PfPxy9vhnX6MwT2m2BKdBLXCYRBWb5VZELxW6H9k1rneaexK4Wt3PpBEuNgko6y6SZPs8EpV87oLsdVsdX7Gv",
  "key18": "vYsSQvmUF9QeRKz9bDqpv2ZifuSJSYvw5grnF2Uma5ttCVVQX7fVLi3S25jP39BvWrZXzLdZ3i24oSKZ3JdzHco",
  "key19": "258RsQbchL76EGHNGH8qdmkNtGE3S5gTmWAJSX6AAFJfoocPUqWY8ywoyd7QCc8Ms7JZK7dPmRjLQZmXaKWEcdjt",
  "key20": "2FxodUb94Mwz3EdkWeWaXFgGEUxUxybhQYYCwnmAUEKS8FZgkwJgrax2TkMxmWMphNpiCd4jzgFn3fkJhv7eqz7D",
  "key21": "DhEwA6DpeQAL8XqF8C7imoiaqWJgfJ4g32rwG5NZXB5Ys9ePccKBs7LHAys2d21ksc5EwLbWoEuHC6XBzJ77GJQ",
  "key22": "4zVhGmo7FxAJzq5XyvEtJNHoH3W1BExTVD8LvWf5ZuSLRSun8chSgBTy4yRWRkRpgv5mRkChaC9FJCsb3gDJQz2C",
  "key23": "j2XuVVPAYathDdRaatcBxbC27QgXewmKNtPFfY6CYN646mkrLFArBvcTmdBwDy51cdQvpMBHEhJQe3EpbZNwp78",
  "key24": "3D5JqC2WKBsE2teAKNjFeoV3cfPRbt3zmvuPfKATyi1uZPhVj8gca3iGnts8WCRTbHjXCUHagPm7QR4ptFMJQTeC",
  "key25": "4UsLxvLCcDKHLprkf5gN6K7tYCBGQkNW3hYA4ck9dmVpepBHK4e7FeMmXy8oWTqsuiNoWRCwQRtWbdz16mPZqPbw",
  "key26": "385viW5ZPJXvQZEksydSkeqTMg9jNXUdCsRmCuNnTPF8T1LKJVMDBSpz6KqDmmjs1mkg6T8HSmm3brCQfuRb6RNQ",
  "key27": "3QLZK5WazgxvdLzsTEErySGRtgXA3CtPA9BeRYzNrgGQXkmTZjQbSGRPKDzNDahLGsVSh3HyP1MpP3NXoPtwdYZJ",
  "key28": "5XGGwS9raS1QaGaf8Cg6G3q7oy8jx7AhCxYfjEq5ANzKwZ9VYhRLaCGLTFCr633Wiw2MZp3vjEgThrxeBQytwDaZ",
  "key29": "2ahRrrAqniVfLPXyYxrbWoq8yM6rreJCyFcMDCh1FFRLvLsUEDRHJNxhwvxPhAb7Egrqw6ZrGgahrpA63GURUMc4",
  "key30": "51bBRdCpo3DQBUaGYjzTgtGnLHt3SMrmpaSqtUPmGprwtqLTvciVJcrtMmNB5mgvE3e1y3SdKofeHz36kQsJwN5h",
  "key31": "5937uHxyTztUJ48mrZ2WcGQBiFqWKYMCX4AJfHf6QAPQXB3na4xKEfzeMd5ksaykUab5wS6ZaegiVsBb6FixuXtw",
  "key32": "MQ4ChXPPqMmmPHuR1w34nPMgoUUbFgt3CoxaUG7QmDfkpjdsaZ6tc8j6uVKqwoiy4TWdxXuFvzicJGyAXBqq7ww"
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
