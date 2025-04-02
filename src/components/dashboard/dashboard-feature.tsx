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
    "614pNygDgcDEutBpdV7pEPbq3vz8vXJ5JpKX5D1wwkCJgjXSKk3t4exqbG9ZQ1TSjcdFLX3xFM6ah4PXA1W8tSQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SpNmi6EjdDK7S2BAsAkQDbRfEwcyqBhRmiV5Pbmf9w3ycscMZg84mZyLswr5r9XaZQ4qaYCt3UVjqrB7GswoBr5",
  "key1": "5RKvWXeLsoVkgDsTQsF9X9htmUwecm5sAK56WfVwFAjc1PZtobx5cPQhnCq2gZd1wbUk3ox6BrdW8LCKs6qQps8G",
  "key2": "3Yd2S4g5i5TVNPa3Usrppu9fomAXQrEcqPEs3eZb2vDBhVSQjGJuFxy7rGztaAJb7Kh2PUczC8uusUyaXHfGV9QM",
  "key3": "2JNERWUUZEPeJqxKvSG9gASD8M5nmgBiLKkLxgRA9UAuqVMDVw6KrCXT32oofkdiWLNxaiujLPqcxirkQtDAitAo",
  "key4": "2PHQUPtjMRq4Psd9FwnvL4kC8wEH5bTQVAwXdKZZD4M9sK3t4ZrCmvswJ2X3xXX1sAQTRdz5hSu1CpXMfp8Njyy6",
  "key5": "3eHzcrCMy21SKpe8TKpWfzjdt7fQQy1bAtHmtugrbPeGTQxSkE4Gk1NYEqeopwNCp2pnMSgsdJNGH57rK4RZh4cA",
  "key6": "4oZ8ARj2RwiwvhsZuD8MhAsLrwQXPehrwnQQWw44pnSebZeRo4ZkYbNPRizngVHJFvRDwmaDUeEqGqftmPrwQTPF",
  "key7": "3vrFJxA5H92YvddzYniZqdi7dbHcKRcJse6ifNZYhSm8H343L3k4VrqCnvWF2LtZhPS2HZRWzwLGwJty5bo4jneA",
  "key8": "4hmoqZg7Zs1JqHdbkSJvJBsxvbvmeJ52p9dpoqashy2EJdQSykmyC5sto3uU4Wvzkya7YR9HPnzZMidtRQErMrqm",
  "key9": "4HdAi7b4kin5pRuspaKBBejJN5vRucyz2enc1mB88oSmi25mPQrbnxbUscPSX6QdbWsU12a7RVYTYzRXwssFWFyT",
  "key10": "5ErZFugCC1GRwnKg3q4pUGnitSJZyHjq4rogdPkRjzepKEGFhH8HQfZxUfRopT34HNLvSLjxCv2qAS6wxsngXCqc",
  "key11": "44CKGxhzq99MrpbYkgdheE8YaW6Fa746MLaEbJfbfQcsd8wJ4S2aTY1Lip13NCrqLHQESrKdMHbJmSiSFWfw73n8",
  "key12": "5edxsH5QNmdu9EVXgvfKRRnWeszV7SdZp4xLe7jN6gEJZYUcvDQn3BFxV1hHHfC8f72rNzoaCDANMpQSZTxmxCnx",
  "key13": "5FSPANuNcBCy1JnpcFYTkWzAjs7AE2gsCmnGKT1jqPimH9KNdV5Htkopjv4P3ChXJE7qpCwfqHtA9d3AeVt6EjWF",
  "key14": "3DTsSkvAk9QRyacz1JH5tZXqPDaKyToa16s4yr1XVFWu337aMgY5io8ZbCLfyPj8quBRKy96M1RJTTDmV2eXKpgL",
  "key15": "32XjhzXNx8aYjyid4JZAjcGobWnvAFwk1eE4YPXuW77F8YDPn5iHtDxx3JwsoQjpLkgUBHckN5ehmLxASneqWzcV",
  "key16": "9uJzCJF9y1WSoXH4mVLWSMkP9XakH84moVSnLDc7B5NQvXonRkq2V6jVnwJz1LW81QeUW5MHg2bru4J1dYdFjA4",
  "key17": "4HfLvKVy7UWp8a4iEvteNsMtuAxCTr5jtHaK95YTAuX6Y9NQhFshjvChUp1HMEFMEAnCzetgzM1gtnxaMgEh9kLy",
  "key18": "2jGjdkQCfhZEvKRqQdJxweEHSspgGsi9twoYkvj9Yd6brM39RCnuGXZuG7iDJyXj14PY8SfXGMzhg6e8XxAYCoNm",
  "key19": "3igJm8nemZLVfeM28YQzfXpYdAhGcTQg1h7soFwgsg7v1RAkBuyiodJJcWmKmJ9JDfL74xRgCdkUBWFecFnuzaeF",
  "key20": "Zsb3d2how7aaXStHFofqPocz7RCuNXbnwpEPRcHGEs9zE6FJwpyjg484wHdePbiu4B5HtbHKduVStg7HXc1ytsG",
  "key21": "4dTNJQr7xc6gMsWSpRE9cqEU3f3698xN8CZEC9s7tp8orXdEURat9QydeGsM38w8cpWpXtJF19EH8ATJR4VXvRdi",
  "key22": "iBDwJu4zgYLJYnfjFhebwmLAuMa7y16veh9cHd7VymVUjeWesEJQAZ2jj4s4yzig8cwU67yU258AExrr4VaZi5Q",
  "key23": "CKZtCPLr9fQGjQtVxo8GtJV4TxRgsmHSqA7Mh17nJj83i718ikwDtxENjBkh9RueRzdeNVMZmwV9tyfXYRdZKHq",
  "key24": "5kZTPM7noxrRvnLwXkkNjQjQ76Lnv781DJYuiug1GQ54jdQahCQBfZWtNUAjqJazEmNXenuGeC9cYN3thykHG7a8",
  "key25": "4LuTKc1d1d81W1nB4bS1YPo3CjFg9wCRY2F6VTgTprutSuwbiZ6RX37eBU7Le79d7rGEmQAyEQS1Z3BUbc5M3iyf",
  "key26": "3G98t556GY5jKDq4oKszXHGKU1r6zGNXj1sAHWBnFC7GTfcbC9BimGvr591TxQ5o7ynRoH5RxqcEzhmdPYPf6PWw",
  "key27": "2TsVYpvpnzaPNYU5wDvDG8FMVXjKb4bQdos3quATmh9X8UzQD5wEGGPJKnZKemdvr7U1RbshJfx4XjsJ8wrBmARs",
  "key28": "DCCL2DjcCDnGN78BB5jnU3zcD7Q7VUWUjmDR7WsBoaXgjHBDLYuuK1iWDhjr71CYaJhr6MvWpXNxjtVc6y1qbtJ",
  "key29": "2N1KBHWQhJhgQVcV8DAjnY7HdMGDgxgef8ZQeuHoVyhcN5EFYzDrpgndvug91tmzWuRypvPKFMTffmoMm7tMKUn3",
  "key30": "4pWtzrMbzSEHbWn4Kizu8NZmUo2HhfPy2YvLKNsrw2Po4MuErvhp1edSijG7At2FTXDZbumhSpvoHYKGEMqPTYqP",
  "key31": "2Z29qeFBSaxRbcN6xapH1Ueuzsgmv1Vuwkok8WFwak9btiZMwDuRJDrVmvgje8nzT41m9HwKynCwnKLqHnoc1cha",
  "key32": "125mqYY5o52sjjE9x7iX7kdSYGPg6gRycLKSLu3McfSy1riX1vLmb37yLjK53Bf6v4wj5GM8Wecw7tQxzWPLJGgY",
  "key33": "ErGKa8UBPp9TXFp9oDeD4dFZvtpecJrbYBBRmBfBuxxg5DiCrkQVzwipgP2R39e1Q5ium3G56Quq18tKyssBRDY",
  "key34": "CWwEkJFkoMxf2URDEEkXvJQzt6PPBGo3EHakSu7RQm3HCq9Hpz6fCXbJpZpHorhTaUg3etFZNfhRx2ZD86VEqnS",
  "key35": "4cczsjz4zFSu8hLYEbzcZ9VaY9JEq6w3kyzcTLnLLJCSQGF4YZyxpsdz7Mc7YKuFq37e7TVi8rgBHKACdsYP4y8Z",
  "key36": "5AqyRaRf3EWSMTMP2h5UfnrTGb5xU3JWz2cDJ5x3UZziDxE1g9vJyRR46g8aG2Du4FbqfHiQWoWJUbepCNe3z1aW",
  "key37": "2Usty69K7h4EkLjQMmqfcfezcmzyZTskyw7Z6j43CLRmPY2iFRE5ocGxPjfWAQ61Y1oZoZ3M6CG7WvevYLUFrani",
  "key38": "2MDj8JTkw7BQbs1k1ePWrKuhNZSKDSLT35W3PdvYHFmvsHh2AJKHLcz2Xu4YvryB9WryiZZ7sHMBZJL18KHFeyj3",
  "key39": "5ihWbZDfEdShdBjXByVLQV48HWuH3fM6vjFTW2QCsJT879WxjQJCZvadqjD5vSocwFMXsrC5EyRfnT3Q2CKjc3FX"
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
