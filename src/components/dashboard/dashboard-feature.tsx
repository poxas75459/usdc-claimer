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
    "37z8YVyTmMruNABD3XZDsGXVHbdC5UMUU7Gn1pGG68CEf8UvH2Siq17PPtAM3MHxVnRQuPVycfVouSX37PSpuQxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rEiUT6ec6Lt6rTiZF7KEyuZi99ynoqvKWugyULHWDrVXKUQPnTfe6KBNBm4R5HjaBu8LB1xSqp3oesZV6JEpH3H",
  "key1": "3UERyxee48jo1FPUvKXcwvm3WUtbxtWH6MqmCmM7SZnzWc95tYSS15JZovaCoVctRAHKx2gYrRG5AiTi6z9DzKW2",
  "key2": "61ZD541XDhhW3QdXxLd2AgQFHDe4hEK7YT4CFDZXNqavvPjfuEQdGUSs8xsFncPoG9abHHQRmmnV8k8oykUaxuTd",
  "key3": "2f1tcAFbecLgUFP2ZUc6YKREKHcfjjJACVF6MwXAHGX8sR6Pyunj4WpLVFJSQKZuvxRcas8DEuTdKkvUMat8ueGF",
  "key4": "2qLRKAk6zh3cpMwD7NnHdhM3mTax36bURztUYkqMLG88AfyfQkWD5V8XRpwy3Pkf8Qko8cWHgCtmK5qnfgsbzgdo",
  "key5": "3SNibH8WWPL51QLzvcoU9uLHdGdV6LZ6F2z1cZsAsNQCns1J2LGeLzkfuTzQibsnJvukwq6gVv4HpBaS6emVYd3U",
  "key6": "2hczM8ZuoddfRs4wkDbgue9uN9hX3nwwrXGgyagjzJX7WXtUrswR6vbytgmTHu7oa8Xy4GHS7yTS62CHs3PWvpzp",
  "key7": "2ruARNAp5QYdS26nszRuqcsjBej5DP3xK5c47Vc8z4rj5C7r7pfLJpSCMPayyJj9gMXBGDeEzPBJgAj1LfPQxTsr",
  "key8": "skaRcX7ewtXuPiHtkrMK5o7RPEgCq8ArZ1fwWKvJGMaTxpMDCfHRU4RzTMcezpCmgpxNc6btNZ151hhzd4q6grF",
  "key9": "2ZyANiimJUg7WHkZ2ahLkaahAw9jhhFkPB1QpcKZVV3baM38kzT7632GpJyvLQUdTDHujZmpC2BpYh6t66cMHV3e",
  "key10": "5WQXCiHsKAqDVt3Gr3xarSm7aWuvgAPYNdUMbjUXUzDaNz7pnapXCXUUMwTHvsRkQJQ4TW9msfKq6EfrCHfZ7xUA",
  "key11": "F9EFFspwG4hqvfdLEarXqQrDDeqvFbQHya295xxxATbZjevR3CrEmzRJRo9VUsgtGvnKGf6yGyNakRBQQ6Kwbsa",
  "key12": "4FYoDCXpzNnqwqXamM2uiKyWMnBdR4dP1P8C7ZWXkF5Aji938hQJRgppyvLAsVJKWNdvbQpeNhFXS4PeeBxe5dGE",
  "key13": "2BTBV1VvHJsXaCeptFf5dPG8vBcB9tdvLGu6Pp6FYhT5577BV3wLx855YPs92LGsoZGw7kukR6MiHnwAnpf9hXhD",
  "key14": "3fYwudZ7jzgxS7xnUA7DPLHMmqeXmxNV13MzKdpXZCVL3kWr78nZEYMvpEbKyRSWF4tSw8FFE8uvx6piTRnR9mcZ",
  "key15": "4p7nKgYxP4Eg9TVTPeejZcDp8Ey6MuUvRkSZ1gASjonxT5vzAj63hcgz7jQBxzkPnW3JYoVSsa2NwL174CngfQ83",
  "key16": "5PK5YXVjGCBqjntSXMn7SkwPqCy1hLwN6UA9VdrrGFkCHhfcQe3Hx4HP7UxmMzo7uFzNo5M3MJPGbu6DtC3HafhE",
  "key17": "KsCLFTEAvptDXV9y3G2MB83qDKvkNtJQ6ZmoNQWhoEYWzEjnvWnZJYVeqxN3ZqYpB5GxaNPw98kaMMrzVpVEMEP",
  "key18": "3vSjpG3Swn7V9gJFMnd3k8syiPFrYYotBkRprMiStayBDmKQsqFCm971JDmerYQd7TYoWqsP1Josi4b4aLiVtmhP",
  "key19": "2LGj1X6FF5CVBdTEgHZdEkQnpAUKEFfo1K5AkrEzuTj2aewj1bGUnfBaUtx5Hk5c3NbQkVgEURGPBDEPyenLLYHM",
  "key20": "2jtjN9gherVeQuuZ6yV5qpUbsd3qo71WJVWVTpbqyVCRjiJm3WxKBpXJR1EiYSoaWqz3J2MDJssE94SBmM8U52vS",
  "key21": "5kFhGayJwh2BifKXDX3hsWAbi3ftnRuvbQdQVLt1aDdqhSK8wTuuhmKQ6dBzDdMBdAwCvYgWfZSkbmecJXwJBobr",
  "key22": "3Cyvr7zv5DkjtJoPP85qPYqqMX31NiXAfeFXHnLRHjkuzHsLNXzysXxLiEv1a7URqvZ4mBHx3oGEcDd2tQhsKZvj",
  "key23": "2N9o7LV7xGUStd8fxUSygerfqMHGEXTRamFuLEacNLvD3SMPaSNHjFUDeDLGJJDX7qdpd2WgrxdXV5TGsTHvcrho",
  "key24": "3145WZX5YzAx5LGJZqa6v5YFFmYocCu2zjGePP7Lmi9uoRQ4jSjPqAFVbb9NCnqZshdvgTZDTmvrEz3kmu3Fesz1",
  "key25": "3VbbHZNYhN5eVn4Ax3dGRHK4gsLZ7C9bAukfWKHFuqUeQf5ZueHEd4mbmPDMC4xsWd2eeusJcbHdafD1kDnRMxTC",
  "key26": "4j1jm4qngN4EGhqrbm5HS2RpA83JDD3pAQsWgJt7LMKujfDT9nEFsPpVWVxTmPbQHiq6LyF3hsFrkRXy5pAK7HmH",
  "key27": "UaxVS88FKgKBmD1rArmnW57rwuB8nREcbvyEqcLUkafRFgRf7AYJtuNESmYdDP2PEkZAWqov6oPXhrA67g5L6kD",
  "key28": "5ztR7tn72Jic7cS3riwab5SKnmRed8Mm9DdyHXoY7kDUwWPVYDy5GNn4CH728B62RSkTx1BJQ3MhgLdJxKaYqpCb",
  "key29": "4u7BD6VxRB8Kyu4fbQrqJ6eVns5xRXpafLS23CL2Rtg9U8VTtb2Xz9kfTbXi5FNpB6TqUMzNJMJbGzx4vk2DYAQ",
  "key30": "45jE2iaSivPRomGTfF4KMxNKFr8D57GW7VSxy158854PrB8fRtrYeBHnymC19Q6Tukva5W8fHAjabhpTgz1HEx6J",
  "key31": "48LsxhYwaXFfDSC3SJmF3JosBPtu8n5kvG9q1tzUB7qyRnR9cuiRQzHvHbWic2wdGCPVBvh6xpNFyQ1G68FvmPm5",
  "key32": "5ihts1ymJkmjfewhuo7FAswatWErx2Hby15oBsqtgQaY4FKykpvCoG3FXV8RGo7zHt1NW5iUDLXKgELf5cNfZq11",
  "key33": "3aXRKNVWW41jqstAN56fGhyDvjEZDjzPMRPec1D8mbdzRgdQ6EQZNz5HQvfaCMbyQAv7WBd73ky1JH8ZCSDSy2k7",
  "key34": "2AbiN63JFv8r6x5paJL23AGzKeFv7mNvcwrSLN5ditYmyVH4L5P9fUv15JuQBwJixo88wSyVBYYokvAvkeBvKkcb",
  "key35": "2D72Cos4EdZ6inuCBGj2pRVH6aF8MewHnSZKqdtBXyhUCfvS8ZeCte1jPXXiALTLe9vG3ZN24Z53kCpWmg32BTUd",
  "key36": "4MzDBv6o4RSdF4s4AKqobec1nffGXZQw2vqBR3DzPM84XepAwuPBAWvQwJyH6SbNbDSorUT3NzEGGW3KppYEkdwD",
  "key37": "62zUTcEcvBpkY7vFGBGnda977cNgUKokmadquap29B52X8iR9w7Eqfg6uuePN15SXH2gtEP6q74r8FaWDr5hoToQ",
  "key38": "2Mj41FiXzVXaL6Fxb4kW12AwvdKCxY6EwPgZErPkuz7XXGhHqKsqrRcfR5nmEzeogju1ZCXGtLycQRwf38Jh1cmV"
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
