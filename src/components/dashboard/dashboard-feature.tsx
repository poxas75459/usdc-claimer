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
    "1NpWV4FWsTNXJ29se7JtW9m5mQ7rFqb1MiEV7xEDBdcmXFbVY6THBzgGcYqH7TU8ZiMAjh6PAUYvYzo7mbBtHNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65xQckbNJVYoGxcm5QNdmUvkxgHhKui8XDr9g9FxoMWnAirepQkkbYjYofPoFPVzUTUaB1kB7296Vx1v7ZoyRM8T",
  "key1": "5t9nvqkRFMB8p7ASvXWHpYswH2sa8Wyq8Q1LEqHgLpJBj3xdrqw9ArToh7E5pQXDaLCZdYKgrPL1BjRYCf63EAxj",
  "key2": "5aNnpVMZmcHDjCowZdodKwpKTsbiLbqrKVCjyjoNaxg72rZu9gVhP4yUr2hV4FbQiiNiZy6HepHBELDTjUwM4H3q",
  "key3": "5jrRCGb2EAFQfqCpQa2T8GvsALoQFHQtTb68tkYZMhf8oBu9abcuJxd6KLkPWaEEzyJ7XxQxn5M7iCXzqQLUFnvE",
  "key4": "2C9kE9Aypo9xGiNnvpDJ6Duw12Rdiyqi7A8ApMQrVJDXAzY3MjQA312p8Nro94ZrETud4WGvVNhnfw5DU78gzoX4",
  "key5": "3Vb7vrTS1MqkMqL7t8xLqP4CPtVYx9NEwEnRzVcZSdYeWMicGrJC6ZuDfNqVwsBkAmoGQsvRQ9paGcQePHtLfHUZ",
  "key6": "3NWbiTb6qg961kSwSrnFsVEZ2FgC1k7V5AF1Rre6Cyu4cuWsEqSFFppE1QSnFkjPnBKp5CswfYawvoQt4sJ6AsVW",
  "key7": "42CuXfcNtFiAV2MZUeJoVcz78kE4SoAdQAJ8Vzh7Dz8NN8JL2XoCLYr7prmTMyVfhfSGDwuks2GewKDY2iwDMmvr",
  "key8": "2Yi9Ycja1apxL13LyaLRAegtB5FYmvktRXunyr7DnMz6MduP1WnHC76s6Zkxo8cda23HQFLcF6ACeVP6eFJ9KESX",
  "key9": "57nuXj74ZGVUBzsmMAxYPBzSq4viC8bz9Vr5kM5XGdJvegNEFJcpsmPGs3bcmkdPCe4UgvqEBBB2H9aRF9giSNKi",
  "key10": "2rogPjgoVx4UU7cnT2KmojKYK8e6Ne5HiSEHGt3f19mCLkPwjQNZcaKVdC5uxvuCkBAyF2wArDCqyXJygZ8DGSht",
  "key11": "4ngnAeRyQzoYcopByVcF3xKq51VnUwKmy86J1PbbDMCyjP8eHPY6eAXvE6Ka22xfAM1YhCuGgeX58kjHzvDB3LvC",
  "key12": "5gHoR2hKbUoB1CEkfLbBo8nFXDkec5bcLYcLn1JUh6LRo3NFXmTEo4BwuwcugKZytjebb2UX6KATjDxZzW26d3Kd",
  "key13": "2WjuboGRdkvJkJTkgwYqYHmxnmfPEKbU2PVjsAhj9NF11psXzMY2vTFvY3v5r8tx462qd2YtTUaM1HFPn7rdeAuj",
  "key14": "5eDUhLM2Fb25ApD3ih3bC8oqb8Wv7sUJRK7cpLLuyCnWMKfDMB75kXYjZ5X1gsoramQBR71kEnNvG9JTrC9C69tw",
  "key15": "8NQsFHX1XgN5T9Fa9dp3qjM6n3F8EeKNF9mZ7fs4t4g8LhLL998Q2eAGMfujL7j5urrJuujHSB4EZCxUCLwj5FJ",
  "key16": "eFWvs5rLHWk64nY9HYq1YxQPUtb4rvLtR1ECrDj3V9MV76m9UXhPSPuaSaL5oZcdZrhgMVWsS3M3f7swVsD8KCT",
  "key17": "5wsJVqsiDc5MUuhsonfrfV8h9C8AaidA1MdTAASQgfAi54oUvzkBUCY9xhNVnDZv4zFdc6VFfo1L4w1ireY1ygXW",
  "key18": "2DER9cg98aXiar4SVGNVhwZZWak36eY5kra6J5SJqGh1tWYtGD6vpWJQeyrV2j125ATDXTBeSXX2x6kBgG5Jaj1f",
  "key19": "41VuBRFUotAuKD6GgbmKRirD9Vp6CQ8ooE92HMvimghxzfALVDgJpZHZTJfaFTZ5JsD4LvuQsxTbW1oeNASaZYzn",
  "key20": "2eZjx4HJyw5npbFUJNbQXib9nGUhLNSJWfJbw9K2KZp8gwn63C8jx8qwFugZ5D8Lv9iVxqsLBNnK4LjPRtWxisEa",
  "key21": "A23XXt6paWWvLpBPj3zmsY3TNNU2zjSKm2LRxPFjrcdmr5hUrL1dEibwwD5d93YDXPtkcvKVtFyCrwWpU5nGBrV",
  "key22": "2q9oz5kmEyY8QeyDV8B79rQJKDBEwo7zh9PQuiWaQo3837WAvmrycJuiP77QLK3P9AtezYs639w8kewvhL7ccpfX",
  "key23": "5gtULaLEyUxoGNgysaARDDmQW7zCNnkw7hzrhKS7UMYoif3DkE4Hc8ZWgQTToLH9WH624ap29YvVZrSaw5sPzRgh",
  "key24": "2MxjmQ2bNzrRD2M5nCn2t5XX71F2no79uXrLLUVSocqwWUegQZzcqVZhG5Lcw1hKj36t68u8vDvzAjLz7PKJcGGb",
  "key25": "5KqwsDzzTBQJDvhUuWNV6vFhzHEp4wwj3vawpm2H7tZnMcUWgocr5SgzmZqPTaoH5YujMEuo6iba1JKa3RRKmiLf",
  "key26": "5eHj7zBwTGeKjqJ1pqmBcMvP17FgQJNvHYe6TX7DGjZgV32NFGPT3G2v9argZcefscdQGqi9EzLni9adqtRjXjKZ",
  "key27": "rLPW5efKryCo4nfqAoz37ZA2aP842EJVQgpmhDyMbNPq7CgrNUsQkvjsjAaJrjVsgK1xsB976QXumd8uSrXEFXb",
  "key28": "2YJKFZxo6eW7mHCbRrv9eTBrMPVG1cJkM5fxS2T4GBjhyeyWS4ipTkF4NDmyRXoBxBsHvaL52BnbaYLoV38PN3sb",
  "key29": "5NwkQk5z8jmm2Ba1WKofwgURRJaxvN5S6zogtUt9nMsUxC68fe1w6vsJi4NFnNNVBC3NqeoFjCoVhdPunQyBizxp"
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
