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
    "WP1KVxtMA2zkejQYnqgnjDkc7SqcdsGj9cKKwTF1UA11JagZYovYKT5HxZ9WnJ2u9kEX7vNcZQvmVg1oQowTVgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wxY7LqtZYMKUkV931NtyPZiNUBHKU6Q1czfd5EbY1BZeT68Au2zaDSHjo2U9oSaCv9skPXSyNawX11CZBmgte7S",
  "key1": "2maKEPJAPrGZf4QGZDHn99DojiPhxNJzuJnzaJdiwSLCXhNff5CZLFcs25qYwi9j7B9TeceEyb5xy9yQWk2LsSZK",
  "key2": "4bNovjuAc7Qohk1tK9B6LdZmekPnJt9fJtqkJm4RKFPhQDBWvjaysvKJFdoYFHpr3k883iJg1U9WrN7aeEuJzdSW",
  "key3": "3HNME8Zv2wvoDVXvDNCbpwHjWDDbwpMdXLkj4xCaLUHt8tE4FTUei6sqJgk8Vm1zYXCMjsz6RGms6sPaBjUperFB",
  "key4": "4PBH2PW1GciYU5h4aDUqfX6AzyT35M7ZSchyXwVHAasrLLkTUCajWwN7bjAKiPxWkQd56p3DZZwDEdCqYk2jobZS",
  "key5": "66GhBA87Gr9N2LmdXWNBpR6pNq3ytvi9jmN6fN72Aqpx6kYuXjgL3x3hFPqHo8FLbL1g6GsTPi2wNLfn4FzDjHd6",
  "key6": "4qVmbEpaFJkNzi4FTms64WRjoRsadYFXEnKePDVeYw9aJ3bmGKe3DrZhtEFgAJScHWb1pXdZKdzSGfeike6Vjxyb",
  "key7": "5AsBYnRPGjYCuVyVMj27tKXcTEC1WsAUSiq6BLgADFo5Rvau3wmKU4PQzENzbbPidPFRYu2JWKQEGkia3rttvxZx",
  "key8": "3DVXbtPEu2v712cfo8oji4vPyKEuTBxBcQzLXyAqJppTammTKj1KLJ7GLn1gVvBD3fxfAFWHKWCoYBtPshHQoGpo",
  "key9": "3uyAjcP9HmXrV1TTLco4ghbRksr4aMUrCADF9uPsaNJaj1QJXkw7Nnpo1RdPxCJ7k5pyyDJ4BWU7kGnpExRautFc",
  "key10": "55DajUPq7LVwp5AM7DQesfpnNk5K6WFnEDaNrKk48LFNY7iDopXdWUvTWqom12LhaxRiYPrNXzWbMjcuJWs1tZhG",
  "key11": "4xq1z2FnbJ5PhDnLiNzLMWnPA1C5jE9mq2mk71cYBthGDZjGJzwTxKaZVCTqrDGf1vHapp29z9Gt3x5k6DoJJcv6",
  "key12": "mGUB5b3komfqWERDgdhYWPJ83M8nbkqaanB4uPFW4GyrMgHhqmbcdkgA8Hito8sJs2tFxdKiTSnfs1aXyrxCwim",
  "key13": "45KuNJhkkbt1TGw3SmtiKa9g5BN62WuArWLnvLkkhhJtpoXWqwN32LJiv8Qz7cwqXhVpXk2HH8odnZW1vJwM51k9",
  "key14": "3EvWP5WtNAs3PkPaccfPb9Hd9f31SV79mGZhRPCPiuYV47a6wqG8QHA7XRgWGPQkjhsWq2MHAx3KabeaTEgh48dC",
  "key15": "5XYiqJbwVcMnxHX6PTyCsBKLDBnrnUoPyju36CCqXL87LKCCp1nQtkC5ederLfpmfWwLFxFmBL1ER86RSHca73KJ",
  "key16": "2faxHNpuhHww1jE6KF4NBMWBsQ4p5qggsMHTcxbGadUXMimmAcJ6u2BJmmbVCyg86WhVgeS474rwq95gMLi2PTkq",
  "key17": "2JFCr4EZH4jHnFWqdCQrCLPdGRJGMFA3chb8PGLU9aKzQUQEWF6LkHFLAXbQCyLyusxwcKCuLqTY2xrnTVrkmUTq",
  "key18": "4k78ZLy8t1ZcipouE5JfhAPFvgd7eDgsgUGjxdACBHw6BGx1R9RuvN6uwGxVCn3vhNfBuT8hdrZyuGLXhJgj1yzP",
  "key19": "Fwt5Q2ej9Qf5vXGCLLT399xyfWjhynBWFeaZRu88af8PEFHzzznhhR1Vd9UBmv7q8sPaSo1MncVP7DTXt11V6Zv",
  "key20": "5YaD6gmJXoqi3xoYafXbUuC8yUWQnugDcv5pMfUZiFsRXgW3ftrNBT2Jp8agZW4RFod214k2mwjdhHcQWua9jN4g",
  "key21": "2RBsSEERm1CDVjMUWpaG8iYQmRr6t5PJz7ZYmZoqdJRpJDLdE4tnLpEvmqr2M31QtUuQM7L3FYcjVh5qss4LCVB",
  "key22": "49X8wpQrfkkUfdos6RSgtHUWiGm74Gb4QPLZDaxvWahjppFMRyy7VJDt7QedguDbYiG8b7g745wCGysY7gUitEJ",
  "key23": "3sPe9G5cTrUaXG8XC2WYoDJ7EnvMdfZNjuA5C4UcNHwDYKr4UQTWbQjJfUfYD1RhpYsMjuDeDLVwBy7o5S1CcwnZ",
  "key24": "4jjGbp7HqV52bt5gKveesKYgS971Lh18RH5xcJg9oMd2vUdzx2JJUg5X3UoW5JgBnqtvt9beAJYVVUScUiCEu9Wq",
  "key25": "2nJDwV9h1vJnh991aThG49h6kYaPnMbAJ6bk1knAEqmVrkSw586siJ5p5MEgWWtV4bvEmwzyYWovoLbLm6of4rk",
  "key26": "3CLb9AHCeuFfLURLTE2UWTdVJUYiw4mEz5unJYQESJCkU9H9rh1V73rwVJ32nUDYBBctRxPeve4PvGwrFNa8mk5a",
  "key27": "2ooeXnkq3e9bCQaJCtEaceGG4ufMDfQWrrruqvpEeoXhuhY4G9cj6H7zNhar5gx3uH1UxWcxo1mYEFGGar3Hn2ZP",
  "key28": "46dYq27rcvANRwDQ9yNFP6HVjRB7bsMmWsd9BWAxpVe4TX1PgLRiEdP4ksFqGKsNDAAtrh7mWAf2fi8E5gw8X9wV",
  "key29": "3VaKLJSXRyPR5LwktezN1cUF5uS8EXwPPBL2MG3b8bhzLUxkrWojvAobTNALreBhq7xHcKriPFU6kkKtYRkknJeS",
  "key30": "2DPKEsKbW2Kbh7NCDHhVH6ehX92U5ADRuurJkHJ4hmx1VeDdbcTA2gULuJZKMb8hbTTYCsxzEa72ohj4bZJefP3e",
  "key31": "3hfxJoxGxpoQiSqdyQfDhDMf7VBoT68B3zt5o5vM2e77553Dyykot4bPCFWpK4F29yJrFArWEQEcVJLwV49APw9y",
  "key32": "2FzjbMLpf3FmzAzvu9LLmWn3TkYy2X7Rfjuwi1DoRwsu9idr59PMUU6uMJwWZjmGTXruAazyWEhfPg1vYpbS5E3G",
  "key33": "4hBdPwcJjzviaRPZUCTWnxyyFCYyTziRdjtTiVKUACtDvaRDm9U7gLpu6nbCVyyruggnr6JY2YR8mYz2qWtJbB2T",
  "key34": "3xDicn7Xms5MbW1tAhG1ii9bkXfwJ9L5ahWvmAGXHrzxEjGVrB9Bva9ifaatLbHq8QFs7VH1Bd3AzdVNFi3YmpJA",
  "key35": "3QaMHmFtj9he3tSax7dzkmRWSZUCDUQTLPgCqAY5xtcH4DFMCiPqNe4iYkyGGUe8VnvyiSJHrCWNzPn9aqzYYQsj",
  "key36": "4NSXsvndq7uxYtR28usUKw7kmyG626LuounLnZMVanyhhT4ALqEno1Aq4nXesRjWJc4TCfW3ArUAeAUG6wGeUwaZ"
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
