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
    "4AaALNfso7W5g8cASzXcWgw8WP1ZfrVMsV6jqQR8a1yVLn4FBnE4vNyBjjDWEzcR5VDSpLgMQC8Gu3cxuXAAxw9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pnDYai2pD44NEq32cTJ1Rq2b4waoihUtaZiNCHzAHqCZ6wSeD58LtdHEhDyGC5v2i6q9S6tERnsyo4QKEF9x577",
  "key1": "556hXcJMeWHNY7d2CwzKyNYsqcSUY4iyQmzqb5ywd1YBqSqs3RFzFAdtmnsLaRHdqtxixAQKquud98DpjdjyJMD3",
  "key2": "3L5uyaRRsPLX9ohAnUHbs6KSwveDpBDihwSDx8xJmkNrXv6ngve92oQnyDG8gVi2RW6cG3unmhgB3usJDeMrDYBK",
  "key3": "2gxe9sxWxhWLEdYbYFdFr7EChAgVSjYNDEYLEQcWLDmVhWrBZ9316JDcdA82ShhJf2xE6NDcqxThwcdCDH7PNc2x",
  "key4": "2uPyVj7GFYSxehkhaAqrhCiq6GsEowdAMJdJAZdZb2cqfitr9gwFSf5v9G8EzbD5WVgqP1Mv8ZAstVTYiV9dgnvc",
  "key5": "WPDTivKW53uHA4fZmqWjaAyb1Su8FVD1hdn3319cpNcANQVUBn2GuwfdMCkURGF47gBSnJTgTydqtbGZNjZ3W3f",
  "key6": "5LvjXWZJua4J17c6wrWWDrTo3vyjfsrrJq8iKCHSGd8xy9m3LoBqQdJRV1MbBLFYD7NcbVtZZd6d4oK5uiKGq2mo",
  "key7": "5iiaRwgU7wNw7dPWyYXiRd4og9c4sykFybctECkcTnw5b5NRSVojgJzjcAzK4H4rBGtTrNX4JvQE29wW65KhjRNG",
  "key8": "5X1tMtZRgN3Cyzbr1pPLjvtUHGpBMg3F8hM5snFMKrRPnN7e9vtdQqBK5EAiu48UEhgyVTzGPaxtboWkKSBuCCA2",
  "key9": "3Vug9A1wb44YBNqqkmhjZRcEDPbEFAkLtx7djpuWSi8y6Axs5gtRNEJtcWRjnhsJX6Xs7MZCFk3zi3UUwJFLmCKB",
  "key10": "5KAszTRunBUXXCYHrMcUYGPXtif8Gmhqvws6KTi5Kf2KHZAj7TB4dG8Y2JSqyXyPKtcpCTJ72pGF5ZWn7FR88Cm3",
  "key11": "4RBnzYk9EbHs5VmgLFVEccfomUmRPi2yjD9A3frtoYdx7QUrFYKgBKQPgNy8sMigRdXjKULwuCheaZiAwAmw3Hk6",
  "key12": "4dB4jf2mdDUz2csjminWBV2Z1vTKvXxzCvQF7wpTJaNKTyFZWTcMy6BXQDdjo82P69NqaAhrbFp1mU9dAtpPfz3J",
  "key13": "DL8krA28QYuCS9cgj6NM5yFadTecPT8g4156V34sJTEDuc3p6WSEiW7LR8mwoHHScSsMGNGsjtD7KRZH1gCvfs8",
  "key14": "3DSL9TGJxNdqPsmG7CmoFSm9kBHHcjRpdWzj3uLiLjgxE86LdNKkqEJxLayNpeJS3ShWh4c1i3xhuE4crBGoArSt",
  "key15": "5vnSEcPt36XkL1iovS6sD2nYcqYYKYLMUsUMwRxUwPth8xq1HgZvm439AvR6DWU5SHKvJECGKtipeZTtJa25riAJ",
  "key16": "4pDVN8MpWVZUfB27PLfBhPUJPzQxw7s1GHwJqfFFFvfWCsDhRgsCBqDPwmkF6YCw19tVNMzxgsTcrS6V22GF1nP5",
  "key17": "5HN5h57XKhouQ2WMtAN2fPiB2VbUSftC93VrTmVboGmU42B3uneJrrRYNgSxBGsmznmzBo67MkLWEogyaJ3oAz6B",
  "key18": "4cLtnKBQHQ8ih3W3F1Z8Zb6BhfL8ZwV4rqWhHQHW8cs1mxmGp4C8P2QGtKPWDYHHj1B8VfWf727Ya4t7bhbrRdv4",
  "key19": "4L5Y8SRepdW61C59KicbL4xp5mLLrj5umgtdeyL2GPtGbmosJdKpyyNc5n7NkLGyPbdKEPPW5ffd4uozCzHQRcd1",
  "key20": "5iK514ngjm37Un9ePCgccHw4Q4v6Nw1En7tPc2xMDfyB4ro4QqpdPwR5VVLFChaNGiEe4pg7T47q2ZN1g7xr3vk3",
  "key21": "2cRFFTx2Qi6e76XF431R6mML3RBJfXGutuyNTDgHfwWoQ2w2xvrubmSj45t7tgTV6HCQchn4gXc2g2j4tsKYqi71",
  "key22": "dxqL4hoTeRJ8vT1oB9MFF4DjkJSqAazz3s9gpjWmXDRAMy35jiTWriemAkxrNXACuoaEMhEmdS3mAzwwXXd9GgT",
  "key23": "34g42WiWNEBbWLLr2n7rzpXfiNF7zXgf8KUhk7R7L8jgnaWo3Br8EduQKQE7rq8v4oE7u5v9hNu56d6h6ghMDbVf",
  "key24": "b9d2DapMPGhASr5J1zQKqHGTuFNVG4FySCkdUr8Mk6xVzN9T9fKdL7rCjdgAyUbxsGqbAnEQV1uqwxkxo82zBQy",
  "key25": "3PfAtbN7pESuqFCLzpJvhucixcT5RC2WKQwgGHXX41VdzkmQ8bwkgt5k1Vh2wKtFCEvoN32tAvNXbpTDPK7vXCq",
  "key26": "65D9kEfwtRX6VF1MuDtmz53hvbC8B5rqqz8vcMNxEMXYj95Uj5nPqvJyCKFMsx3oLyUUPf3T7pBZwM44nfBGnigh",
  "key27": "36PZ5YT46hxEXi5tY2oMUoCeYx8X43GycRHDeK1cUFHBk1AxFvh9ziXbL3bi1d9uDUBbNZf4Qn7cD3n5WT9hgyka",
  "key28": "4Qrxwv1M4o7KG8LyD1d3sq9n6iaFPKZHCDnbhLf4dbUQqhL3dmyUfBa6FbTp1o4wsRk59iQNK6HAQYsfHPF3dJam",
  "key29": "4EvaLnVMYZji135HLGHhtmxrQcdVvzRYuwuvRugQAHqFWrTFU15VgWTyQfifzgcssDPkUk9taSnKZ4yJkMJefW4v",
  "key30": "4vWiu1w6sivisQmzjQsrWRW5sUPeYj5X6kpUUP8km5ja5LEqCMPsxwoSxhPCcBrevVmh1wKKDvuxNAMjYYxNy791",
  "key31": "2eUKpiRFgoVkUNtU1xrFrteh4azevvogUk3DC5995jvTqcZnMSJ8tu4jWk3GG4QwPVvH7BtHfbDx1gR2q9jbiWxX",
  "key32": "fBHARFRvUj2aJiySMYwfq68FSHEcZwYKJQYTFKFFZ54YYJoiFzZUeanMWozUjYdXkp7GMgxYMUwXLz57X14wkaD",
  "key33": "23EVfxag15z2JRTt4PRnX6SHtjVJGQfCETwAMq2tDinQuREkGyyDpVm77WopvtM4d99yF2hzJVEkAGuELrLdrS5G",
  "key34": "5xX1dnu5VZkZsezmNK7jiHXtre86A48HqqEpUY9ZeHKxbgwpT29eKEFexkduuAAuQAFBFTmgEdV4D9jqch8qv9qV",
  "key35": "4Q6gmx7VvyBKyV9ocv6jMiEjzNMC74bHj3iLdo5z2JfQPv5FLNepAwwuhaCZEJyArdjriwjmP2LitoTKHoXyvbB1",
  "key36": "5pRtrRaQ3CnMopyhY8aQnSkdb9so6zQLt4G9D5R5hcMtQHn22GuGzNXWZmSXaKnaydpLPrUW4p7Eimz3hf7ht9bK",
  "key37": "54HP228Z3Aed4aJTaNu3LUZdgBTEzL6bgXZebDPSvW3pgoqHaopRULtgwPjGNDqYd1xpjWfuZY6VeTZaKh87SycW",
  "key38": "5L82qvXFAKhxGhLiYNLSnwggb9paZqZnJhBLTKnm9emYfCcy4KUgK4rHijowA4mWa34yNhS2bBFyVqeVbmKk3MeY",
  "key39": "2ba4umShBTRvkNeu1xd9WSG4w2HCvqiWdQztqNTXrXDpL5ascHMmxGT92xMw6yhsNeCp6fjGiHopngjzVUAxtCB5",
  "key40": "tjQbc8TXXmDvNtX1U5toMpVuvWCxzkHkEMTx2s713ZF5KYJuS9wuCknQKJLCxQwdNqL9ypSeYaqKZZaHdDtBtuf"
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
