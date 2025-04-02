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
    "5hpQ2NS1fA7cZdWX6z2VJtNAHecnzT28r3TJERaBk62X2p363EUDS7sre4p7utzy5MfhGFP9bTxX9i5J5XdKipRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Po61DbxFN85D49LgG6goTe9Mkr1Bp47qYfEBCdfWqUVva5N9rfFLL3qqXBvzXDx4PqZ8W5vrR1y5U16Y5k9xcpa",
  "key1": "5qv3YpuD6ZbtFzLfi7PkbEgcR49NAc8zUNQh6iu1QDmyzHR9uyotxkqSacHj3vu4iPWsgE1fdzqfRaqmJVV393WX",
  "key2": "4i85tiu5ZBnTnBBXoePyiiy5GkSYcfcd4AHvTuBBpMqt9PENb7ifZxPR9aZzCtDWBqRLugVR4NXppocUBMvSa81g",
  "key3": "3WEgs6ABpmeSmSY2r1KRNwAsRKG54Dp7JT1hD9rk2BJ6yVGNiEUyTZdFKNurdQG7gr97gxF6QsvYi5YyRwo3axoi",
  "key4": "G3NsvpmpMGSZc88GZ5xAHsjLDswF5ErBb8PFKcS2hg2WHXPGUs9JvGomduYgvKwxrUAEmCg1rwQdqcThkU1aq6B",
  "key5": "4YpVs6bFjRyu45qvYQ4BnVX21YjAvwV6hJdPYjUQu3Au1vAS1DtCtLbs1CuWTFCrovXXAwgr9FrPTr96H6e7ff4G",
  "key6": "3Up1Ry6Pnjz9i6v5t3S77xiXwMmtUAikefZwfujnEt5ow7gqJqr33dxheXZA9wvTU2izJtmDJCo5oFHgRU1oUQJd",
  "key7": "2KtiJD8SxWayDDVZfZWnRWCz61i4hU9tmh2cdeWXSQv6v2MBuSUBp8GC2TUBxRXWad1s5Pgb29T4PeuYyShEMk2Z",
  "key8": "2y5Kz3hTmWs38cypkb4W3oqkJeoHSgVbURQnAZfm3kapRGmyTZ6mzJyfxKYh1DpxQ11SL4uYshv4sYayEwQVvCEV",
  "key9": "WAPThSHTLDGdweBMqzGggabH6z6cvJxBkq91uAy49kJMyoeRv9Qnby19ZKHygEcFFbnF7BFJJWr1FiATY1HykFL",
  "key10": "5rohJU6unTwVH9hFSmeQTvbDvbFbqic5yu23LYy8dXSaKJEDm7qN8vo9DKh74y5oLPrnJDpZpTQ4Lfu3d2YqkAp7",
  "key11": "2qYQff13okb4jD6uBB7oSZaMQYLBkamZCZXTmHZCFzQGv2KCbQMbM56kyyBirzMJD2viESdA6jiYW6AYsurLMVkK",
  "key12": "5tZVCVcRTpMmr27LCejV7W1Zm2EMCbrHqnimeJY3LVV72rYD7cc4Z5x1NNaqJF6b7bGXbnwt3ynCZCgrdqMrxR8K",
  "key13": "4BVRtemZHeZbeCvNWkrPu1QUaVht1GWUoybxecpvkPV7EhCy66kPd6y39uU8HJi3V5YFvXdQYiETjDkkD9WG2UwC",
  "key14": "2DZMtEbxU3B95bkAK3M1PADtD33USVKVfa27HMkp4NJAUuCRTND5yh76kvQy1hB3Ty6MYey77b9c9V88ns2STHVS",
  "key15": "5Ttw3MU8uQwaHeP8VX2rN9zHZs1yGkBJdkBvWheYfERVM1KevL3mW4VB3o1YAU8Jk8PxVYqrikGhVZJme9eSLoa6",
  "key16": "4egr7X7Wo66ZXuGKTAqQRkqgoSCGAhwtR3sP3TGXYZ4biJKAiYGf1HKqfd4sjh7x4cMRrda2ZF4cBhYywD6Es9K8",
  "key17": "5Le6yeg8Qzhpc6PVypr1uYYar3DUd6nHtRsxnVVMWyfQB1BoKxDA7LG8mdx4nwuHiWSnE2yieH2LHEXKLjjZZ7Va",
  "key18": "beg6jadX63hRChSZSu1nrFnqcNBBLddmk4GX3Ng5NMFj6Nq7XjWdxmMcLbThD1CL3Qf4gkiygKWMo5yKQZAEfNi",
  "key19": "29vzb7JorCk8fE6HtzxiSiPmiN8bHCyAh81SzjGRzmY8m2nrY7X6G94gB65pV9VX2RMhHr2i77M6H98fSo4PxiFg",
  "key20": "2HHjyvAqozY3EmzSFY6Ly5ERaGwwtAoi4sAkqaJnFswVxnP9raUrvffXBzkPFQsFyWEhYdyraQfoRNTcBhhd66Ry",
  "key21": "UKvMxT16cbywdWjLnSAFmBSWGe5btAK3vYL7mZQ2N2hfi95wYaKDfjFCHgjL7xqDek6fXjrCPfghvNzLqJ8cH2D",
  "key22": "4DPqG2WsG5rzfAzYuawvTdFSB7DrfMXhDXDgPXgPCLCu1PsfE9uvWb3QG2zJSprKmCwL9rgPWwahhTsPyzFLdUym",
  "key23": "55hZ7chc9C3wM44ubRhTe9wow9sXBjpEAuXZyujYrrsrWirAiwFEeujxtzdqSJQchy9UCn44AKQkr2ZSA2NN6QnV",
  "key24": "FgMFoz6WfXtgLFPuyhngjEkRw3Ws6Uou5mV8ziM5yRU61wfNgS66JzK9XnTf3p4i9emL8ennUvJpk4sVRJvR5zF",
  "key25": "GMJ7y4aWf3xwxR3MTkCfXxRBTjqhhkNFUq5ehmyz9Q5TEzKhxJfJzS1w8M1eA5UrhWkangExWjjM2PzWL8k3NV3",
  "key26": "ygTs4gtJ3XpqZDbvXhA6bGEqwxnqkN3macwsgb1sDJx6w4JSrnriyr75rr9VHijpTLs5BiVAH6JmdPqMZWf5bde",
  "key27": "2npQErbeXk8Z4mUPYajRbUAxhNmz6TaivhfprtQLaDFMaww8JkwwjdySdsvopoTeaJD4mVX47DP4RVVU7fLY3Vxo",
  "key28": "53hhn36idGPNWkRkgMK3mVgip26WhtABfGvPr487fLbxdY6B8YTAHsTcTwAqz1Jehe9ge7ZzPExHGGKi8tYAFJzQ",
  "key29": "3ZccFqpmNCC9ZV6fmjbFKU8QWwkcoUj197bhep6DivZ6mKtPZqJrD8VRADG4mSAHNh3PLCqAtnS4Sw6HStZ5KKCU",
  "key30": "4Zhi41S9VfWgjHXTVjbiBdDy25dhLEgNEQbGgYdcdxuTq4sQD7v3mybMvcPbYxU15qJnAgz4SWLoJbRWka5RvsjD",
  "key31": "5MokYdoG8B2tk5FawgPtqUexAiczb9tmsaQF5r38nYqmvs9hhczYRNGarcNpQiF5xK8Ur4EgUkxvPKxYtqjYSrs5",
  "key32": "5b6Ls99URwByMrnYK7Y5Hivp5d5schjVTs54MGq4N38tj7V29vu6f5EnkNDHSDkhWvxATmFwRg6eUKRuXeiV66PS",
  "key33": "4jAUDuBWLZ8EgUPhb9VyMfRni9yMDwMHaPJiADiPSruV86ARC8K82v8w1j3dTGuhhD1k4V4TzBM7oeFWT6xdcpmb",
  "key34": "4AwNNXL5Sq622Ey2rhYAGPRnuJQJJFV8qbshWCPGqjcthNHSFMEtPzbw4pVKp2hcPw9a9355ZwYSxqZxGGBMEAfH",
  "key35": "qqGr9fZ9RsicB5MU1cCcWkSdNAHgfswSZHUSePJmuVYHKQhFSLsTrV5fih4HRSC9mFksQWbtdpiwChEBwG266Vw",
  "key36": "4Yfwhe8XLoLRjehEZXYtQoiVzpYpnPa3CmUxDM8x2L6S9u7Zr6xtABTuy1uVpjdJ5RaiegBqdDHHtpCL4K2tZGz5",
  "key37": "26Dycu47Skm9EEwZYqaMy6LReqEsLnBKn7AX8Bkd3vWZ39h3NW389C2EsfCY6yi8MY3nivuQJSNqf9pVHV7JeCfW",
  "key38": "4yAXLnAPLdQUr3mRoF2Qzy96rQvtSsjjkVJ5MkoGcJr1LomLMq25sDJRJVNeGZZUMoDqKVKKuvHpzTrw41xwNsh9"
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
