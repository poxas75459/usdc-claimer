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
    "tiJrfsSQx2M1KDeyveYvRQaP4aMg1YBzhg72fGnDbysa2jZ6teWGS9UXatMNy2aL3g7qsAsMJ73NMpN83D1pu4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6723MqkofvTMB32Eu8aH6sFhUK5GMxCHHT1uKEmhZXhFk3j9cfUbPwrT5X5d2Xhe9KVcTHLYn8QVUzDTgeVFatuU",
  "key1": "2rETZcAGDs7GUsKePfKm6S7iZaKzPnCCzLkX58YXsa3DxZTRiBfspXE3qTB6wtBgLiSxqmguQWBP7Y4MCPr8pkMw",
  "key2": "5bTET3a7z7T5kWX2DSSqm9vydPgfkYNeuZ6XjLgunzM4GrVw4KC1KZSguhxeieaXpku2PcdcGa8cC4RN6saW7mow",
  "key3": "2wgPHJTmsAmHYHPvqXLPuYnw6JkxebqY4Cs4fW9iommRMzydgd5UpE4cQwBDLv3d5d2pfDySZiYYq8YfwWzLewua",
  "key4": "2xVYUtLi9J3o2KCcdqrddVejBfiCoEJuPK93KkKoCmKjQwVtpft84gBkAgGzwk58a9smS1niEX5AQ9f1vo51qdXr",
  "key5": "2V65kwU1YbKVRKtguVYZU55EVfbZT4QnTbMawD8SwjdRyDdYFfKXyTipW3VZELeAct4J6S6r8GVoQMumvwWNXWX3",
  "key6": "3Rbz2QRDU7WWhFmnXQbvZmWm911CnHJ8uYDBe7Sgffqm1YDyACcuCoZLSBTN86DaJJ14AzVgowQdcgbLmcodxUer",
  "key7": "49rkCbFye5oRLEbEui7QXC3V9jPtATwnsVnZ8rVwL4V1ye2zQyUBubEUkmxd5X8HKKueKxM9QyDCfi2Pnqp3aunv",
  "key8": "5yigySdksNLSWyPaQqwvzswQ62fxbZMo7wugePcE3Ydb44e5VMZtLFXCkwb82GUpgXnk6r41SMY6PChHHgNXownk",
  "key9": "4Kecc7X7o5UX4hc5kcuuoJNZvnutbp1sBxaeKi9B99kkYGXVpCz27YFkZzb799WRwtaRAXuQd5eeCoiKX9bcV7Pc",
  "key10": "2aPd4FDc9GjmEmhTAB1mXBYHiTXDn4m3xJwVEgg6YmtrA8dF4Ka6d6zucx5xevFPEJvtvxbUajsehHze9ZCXmRuH",
  "key11": "2artwJ6njUrfSgA5yg5BRq9gZcqPzTrMA4YySvFB9VA2e8gUKxQKseN1D1QN7xHDx6weFxkj7FnzQdyQygECCYcY",
  "key12": "4vZJvHTCYHGJsEWLP5FxTQJ6eqUEUEPADi4xWkcDDTV41gy2WvVBmxQKST9pyperkbUv38SNwTVGfMBCHckDP3oy",
  "key13": "4bg3GWR585RzEg7j9vnzaZNnG51DnTyaRBqaxXbbKgU7UgVnWUauPwf3PAWyRjAcjoutfSYDQdkFnuZNBdG5E1Jz",
  "key14": "5uy5JR41eCdBGinke7qXU5bfpndNA843FvUMNQiYEXfnUi5YmxHqPAbTSXjfnyeZrsPS3zDXKcPBi6demozmo2dX",
  "key15": "4MZDD6vBGsMkRqzdLkXjTFqrbxhHPL1xTVjyT5B7pBBZYhUg6NdiQkzh9ioGdcqUrqaLaSf5HehcS7xL93nmocUA",
  "key16": "qkevowsKbDA6d2mJJJGchAkiGu7zypBYXf9GkLABgkpZ24Nh3SRC3cgrohHHFNXemzawfw6ykakENaWRV1hScS6",
  "key17": "4bVH1nxQg7y8HgjRaoeSAUkpDyLaT9KBBYDG46zVv4efYy3ENaAEYGaMbGSmQ6kbsizq17nUmrn3z3sdjJjU7CCA",
  "key18": "oxkmkb9y7qSVodc2SJThksrH7EgzWE9ZY6EZyRqLeVZcK2mYseNRTzgEBv5hporwLqLWGZzJcTcRK845kh7Dz4Q",
  "key19": "o3SMVzGZDiLMbALnjnvY71kQyETiJZfJb65o2qPCPpWAcuQkC8F4a2BpZ7yFaxBS2ZSyyPZabwfLhVno4RUtmsR",
  "key20": "4nKsKP8oFhjvZRphBrFLT6kJJFJZWiQYGLQbhn7jYLL9q47nAzMBGzWFW4vGrTicrCmMEjd2LVqxtjeNd9PqR99K",
  "key21": "2HJMR9VjtxwoxXnsqpYz7BoPaPcNKTyDEQtD7j1YYri3VqX2CPyP8T6spf5t2XAkhJ4Qgt5Wg8BQGD5gRy74h7fA",
  "key22": "43DhaL7ii3Fn6CMwoCfd9hwTpz4uxH5dgFkh9Hev62B4kb5BtU85SctWBStHjxJ8cy1L7rmJb3PyBiv2oWXk8gGJ",
  "key23": "4j6GhhqfTER3FVD8LqAR455sFjVFXH3SQ6f7SfM5v3LUudhKbkzJLLNeUVx4MLhoZY2pHgQbVSpSakRUsSo55nfC",
  "key24": "3ooXYkvHyPLBtCHQnMKepj2n1jUCeP1rxG4BpuBYfyyM8RMKSQ9EeWZdBnah2wvh3A53UgHYDhiTFE33EWvGUodW",
  "key25": "nGLy3GNyfYJjGeHtbf6HPv3vT3PLbtNtguAmRaopDvwwf9n5cWwV7MWyZdw7XRyoUSewGdTKD7k9uBvPXnqDXxD",
  "key26": "67Kw3MfwJhMHZ5etExSnHp91ikac6TFUDmykGLHytkkVky3tCjSp6HLYUYN8QN1pzQsjuiqgTGA9z5kqpdorHbZV",
  "key27": "4CCSrP74yppbwtUtFN5M6DbohvC1yzmDLzkGPCmhscQfmcpwQoWKvFgfM8y5KEggHE8JXT481umeq3xgv2zpsFXJ",
  "key28": "5r7N8ZA5SrJ8Rhjkf4APRJdPDhQnLkQnn7MGN9bPNP6xc3dxQc5FJHaDochsE2LREscZEeSGZghgGxwSJaGva6bV",
  "key29": "2cM9stqhB6zfggHgLR6ENfNwQUGUFmBJFaYrTRTRuU4NfXx58dxNwvMD9htcj5tTzFDHGBpcz4yz9iY5SpeAB3rp",
  "key30": "2wSrt7nuFeAWViUcjhpsnKZ3dFD3BsehHYiimesWHjenssbFgCsH5HdK7MGjWpgacKjBM5U8ka7jBXTMAHikYCrm",
  "key31": "4UYGTXVnxZ8fzXk9qTyGZYLqVMb6hhHJWBCpHRroNnHtPJf1nEvz7FGqgdiM51WLAmCv4y2QA46VhVeqxbUnfG17"
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
