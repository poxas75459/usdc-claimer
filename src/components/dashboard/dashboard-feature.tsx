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
    "5KQRq14odpeVibbsbq9ouavkf14pZrGUvqPMfQCBLzeyHtT4pRX8Tpp44V6vfkxUWCRpFfnNLbSxhDkMtuuwxTWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QJ7jH6rLc7Y8NAssX6FJqE1pCdBt2bQzhfpLDaMxwv4ZTVREuz2US5C46CzHi7Tp9PyJ67RE78P2zXKAt5Xoxxm",
  "key1": "2erGqxrGaJPajDEcf4fxdoTizeKnasgjMcWmEXk5xY6dmxBn9yLXkwkg1AWV4QhdnVoLBX5astex4oWkN9WfDbTB",
  "key2": "2nbD4VS9fpUZm5MxGXHoRghxbyQ6yRzvfbbtDp5LoAYyS1XqoyyHjkr7gecyuKLdeNW8onkcb9TF9tGzyLuVLeah",
  "key3": "2JEnynf3kDJuznndSU2pWxxp9J4BJFAoQUg7Yq6b8UA11amxjyighzBakRjL3MC9f9VmA4HxwrzuadxfrwYr8a6X",
  "key4": "rnujncVQZLmQkqz6FpwCbXkcyMSVnuYo9jXJPCeZ8funxDyCjsbqAcYPhfZZvH2CYs8Ctkzu2Yi3owcp3ZnVrih",
  "key5": "4tv2ZC83GAki1nAeeC44VzVuF5kUqcggR1igszXUxRRJsNCiX3zLG7wT6M9UFNKuXW2TsU6Q3RUqM9z8Q7VrB1yV",
  "key6": "3w4EUE6ByzRZYkJiD3mrtcX8BM5xx9MBuiFV3Dcn18GVbtn764pBszxeriv6JbTQY2UpcBK5eMZuwum4GEPuKgkB",
  "key7": "5f1pJnyAqFmQ7fZ2HYtJvWrwCM5Q6JzSuB1DyTB4xKwpkLMzL6moUJhmDy48u2ebZpQBAHca13R1qqQVAKprtzDL",
  "key8": "5BMpekBsyVReh9JrR4sQvCcNJ3BszVZt4vrrCsrxEu3wXxpfMJR3GJVx5p1KtMoXWT3eUmCtvVYkjWbjfJpdPyyy",
  "key9": "3SSaPSxApQjz7CZzEsW9gNA9YsYiDTscidaXUYF12zvh4ovoNyWLurY3UTwCGipH64iLu8PWUhKBnMKGdtRhJMun",
  "key10": "23H2SKnMCaDQgCYNPR8zmQs7TSbTi9fYyLv1rfsA9t2ZqyW6MxuedchcfkrZpYDmSvt5XYzhByAghFzfpCACKSza",
  "key11": "2G9Rr1v7gaqKHSb6u38yh9eVmaMw5isauWnNw5vQCjjRcuhAD3LJHgGjrBpZai59omQRC3RvrC5Fn4NgNTVEzEKV",
  "key12": "2okFbEGgoRkHmqeJxX6xUk1JcPEUVzrGScWtdiEc4mQKXJTvrZwLD4MYgaEAjTNqarRURfmULDzWbnGH6XtAwQT2",
  "key13": "3osQTNJRFxbUpV9zMdt3YbawrUFVZfc7XHs6hTe4jSNTW7kosCVR1b2oWjrbRQf9NhYE9KkAySfwojfADdeAS6X4",
  "key14": "TxggCvEDMqzXGdumgNh7X3pTAAfoGT7LpfdsrKGUkGreruU3xBhRkqTQ8qLv1puJNvZKavBB24jNzgFu7gSUGnG",
  "key15": "4JRbPAViDh9PsoM9bEner1nL4uJLoy7pDmxJVyb4mcyzHiFLtypso3AqhCVapUcZkJ3C4RzYaTCXQ1cKjRXkjoKM",
  "key16": "2upPLvNAD7NGFJmxGmbVAL7iX2Ct9tdAeE67mZy5fUVdvB9k3kP4A6MBx2jr5LC8Ezc44uniymP8GftoTvR6FZyd",
  "key17": "V6CjNeWvYaN72RzrzrcjbGmYzrKHswkh26aBu4fYffjbBXmBNM4hSJjQ5bn1SLMW44w1pG9Ax2Q1Ec3JFC5NFMB",
  "key18": "5scvASp1FTNKm5yhfK7kHeb68kw8JwrpBsKhnv99E4khwoAf2A4UjfTJVjKZb1GCCvMaHfQGFGgpWbvQwiz5okxS",
  "key19": "2995ZYKh2tmte4GFhhfHTDmUxJZnt2j6sFsSf3CPQ722DuR1Nn8dMoazJQbzPcgfz71AknbpfBx6ftFvMjHJe2hR",
  "key20": "3AcMgaXHUmKiAHJzjdfFfGiW9K636m1MEt5yG6RQAhLP2UEW9YQ7374AmEUbtRzsdPU4PFJTWD3bVCnTpcnArU2P",
  "key21": "3Pj7SGBze5c7TcKv8ySSdMnVf1VY7mmx9to6R2LTdjgkKpQjYqGaDvrnPUk1GveXTqhS1cRnvHzdWBkmffUzcSKj",
  "key22": "3bpw6kzVdAkoE73upKVAMKnUCyTxjYRNSKSt3iKxUEJdn6anDiZ7hgaqbUwYFsitkScGxmZdeFxmQF4YbNfEW3zL",
  "key23": "5xLVEvDMY1c4gmoChVforUrfpujnYta36cqWgoJzUhRFcVVewBEdj6caQdy3RSUi2R6AnZFn9YeqafBP5rYr88Gw",
  "key24": "4UoKn26J6quTcLivfh6wHSKQrcFDigiwAzPD24FzzXkbkwrGuj1vXyAD4um9HEWTUsfP8txsVhNE1RS8WfAaZpPx",
  "key25": "TYKjZ1dB1UJVtyGaSSbSxcvk917HsBFVJ3SD9XsfaKKUMnE8bML4J1rWJTPACuPx8BkyLn8ew4CtB4bmJzKptkw",
  "key26": "62tRsXMnchduRvnJK5SXmMDXr1wM2prNpfsV1bKvDVN2htABVvWdhvjR4wp5KtR46nVBCKioUxDcErqqQLu7aKZw",
  "key27": "3pzaK7pKZQ4BgKX7sf7EurY21puEDcShzcqC4C97x88EXz3c7NEqaFwWzoAarhQvBHwzeuXr2cnmPMJz5SJ8nJLN",
  "key28": "5bvoGyyRroXN8Yad3ZdADzS3duqzQxRRxbYpmVqpRocRKoXE8XDeDthiD8Pr7qeX5MpxxdFv3mjnULAQxXragQgo",
  "key29": "4k4EbppSr2B5TRaPhmg2BrvJELvrve94JffTKfstA27pjvykNL6yeoZn8EqG7RaGbALYbGrzJCbEDEoaKzqKWeNL",
  "key30": "57Lx52E4eXbkjSLbnoqvcacgTU3cAXgvnvKM7hMCts1TomUgGqQkqtf8Wse6VAGp31DqneyrVKRqWarf4ZTwCWJB",
  "key31": "5d9HgzibKwZw7qD5RQXZWsbEo7oe1UFyp331nx5ArAEywqCrkTd1XVYhXyHLdaw1DVcvMp499F8RiinyLHHdC7UZ",
  "key32": "4KbrkPuQrNuWCUaqk7tqZfY21dQuYFrZbkCknH4GirEmtgJuhFMBpN96kfph8Lo2Vnps5LyCUTzmqSNb2jNVbV4U",
  "key33": "2AFdZ8BRVFgTi1Jb4Kw1yj8XkdgckQ43Lj22DNPc7u9ZSZG4USwRpubkLJft9ZVFvs1YrepsZFH8dFmynbv13VuW",
  "key34": "3RBdvtTUAagfA9FF1K2yw5CfRi5USVeT5gCcBanHHej2rUJsqEJJ47AQvLJ3pkZTGDHm5mkAbEyVoRwaMFSvbzs4",
  "key35": "SU7cD5gNZSJSVhNGu7e1H7vcyvW1ahonxagifjYMRfstqrNNuic1QFy3PJFvVk4GMybogNtHxXKEsXNLeu4ScLn",
  "key36": "Z86sA6nWsrNeUguqTdZekwUDMAYoH6kcdviR57mcixFMAZFKwDp8yKKemeYf5hNNgo4JS8YBSGETU4TgBm1Hn6b",
  "key37": "8ftNKJeMYNcAKdAo1dgUncvgzTD7MzCfqqmK4riPN6h6xmJyS7CBdgu5JvKJ6gfmnps2Tu1oyqPJqAtF19pVupu",
  "key38": "2QnKbnKr9zsNPJxrw1zVXbfJoTJUZJBeqh9ZTKVbsGyyHpmQoR8Bni8g5mjtWTkYmiYwZi7TYkTgoocykKpeVfas",
  "key39": "3B132e47aY9Kfr8gE18e2FFwVmcWpcStMTXTQueKMr7ZHVc7VY7dZx5HjyCA6CA8R8kZqirFPk3cweDvJ871vCtL",
  "key40": "D8jufWBJMS4TN7D5d1zCHtg1VFPqd6KJL9mhFzDe8VtoUWvpqK7qTVsSrcZgsY1VE1RhyUvEHrsownjP62LzmoD",
  "key41": "39E7VhmH38vWRKW8NnHS3LiWTw31iWRDuPQSUuWeJ5C5ApKgVyKtgEhxxdWeGxNkZwML2nChMi81FWtYnRbueANi",
  "key42": "3MY2d7FGhvHMx6mj8rsimDqxmPyhP4ka1rN5vYPQmjVNPYfZ23YEcoK1Eicr7CXFRCxAeGnUBDijvBzBUKHxLHgd",
  "key43": "5u8GtV8BF1Mhy5u2B32fbLhHUen9rKfU7jFdWHJyP2dZwiYFdnozYSEiaSs39ETphnsB818wntTwcrC47j5egWxB",
  "key44": "S99JNi27nuHUaWXu4JhNsUQhWwR6gGDfTFKSvT7Je93iGT6Mn8UAoVFp3sZ3Lh8Rrc8ZdADJXDHTBoezfzcamnK"
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
