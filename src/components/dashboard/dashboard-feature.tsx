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
    "3mhK7bvYi82Z8EBRu7hPAmzeZrWMbkSksMjmbsGTigGEbPvdqkL6wkbPedxsSZ9s3wBAxF9PCQdP1oQyfLYoJYwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32fkdGRimuhjUi8DxFzegQrUncD8b4xoWHBWEMX1bV32pRsuwd6V2QcxWsf6Qi47W8PV1mGYKHGLCeSgR4NaP9ux",
  "key1": "3fPqUWAMFPagjeLqQ4pfBbiRDDx7AxFsU6Pup7nCyZqAJAhxtLTkU6Q4UtvbAzW4V4iABcjurtgth2V2BBw2BNV7",
  "key2": "5qHMoaREhCLxmvbMRGCbkfGSC6h3kM2HuC9Hs15pHQK2imCdrhULakHT9Vdh6Uog2f7yXwfmtauYq6RoLBHMefty",
  "key3": "3HRWALd73EuTnry6dyNvk9XVjgE4dGa6iZbCCYimFhU5YLpiWLC6yhVqtvLcightHbXPEAaLQQGtWjYXFSYjKk2c",
  "key4": "5DmWWocsJwQes7DCYmwH6yRngsMfM76nb5ND3x6SeHUxZR3nsKFKN7vwPZpyVgyqSyFFAhcSPmHoEZrDp48q4Mdk",
  "key5": "GnDtxnme5XB1edFefMDqQ1eZtX8RHcka1WjamcJWN38rGoCjmxVaAvDSQaHfX8DjzNJNuN9gG7xSSfUHvcrHEq4",
  "key6": "Qjv4NHCof2oQ4uM2oG1P7fZgk38opYMFKjSLughu8o8CfCkaCrFJLhBanErFWZifX6AgRZby1kUwHWnHpBFBGyE",
  "key7": "2pig8nFsGP91WErNjx8d3L5EDMMXRSNLsPeacePktcfnN6RPxLFG9NvovjJuHjHC6CfiPdViAzyE1H4cMmboKJMB",
  "key8": "3xQJNcMGgHdPYUDGpU77WL5kjcxgnDN7E6k2TYVbeApo3YFoPCwNh7W1qkqxQuXLEGq8DLG7ELduwfDMXPjK2NyJ",
  "key9": "2tzo77VD4kZSahKjxcG4w3o7aGTx79w7zSbNYtxkQdHxtFLVUZXoyD4XjfV4WHtfeNd6X431eNavpxS7eAuhBHt",
  "key10": "5HG8iWeoDoueXruttYGCB9Lq5eGU1UJjzt86VbD1dh822y2mitJFULub3CD2JRupeqYDJWHQ8iQ1ixDYrPQ3gVDU",
  "key11": "45wr6sTyU2JvNgFNcvQb7157957Dd25KJ5Dug4ofi2549rTmLvGPCUMN4pF8k5peDnijvrTuoFRn1AB512gkXfWV",
  "key12": "32hzcZ6KHQrQbfPuRyeguuMkyRUn4WSSkkTtuQ9K4Drc7PN4wzvYVdrrdMhooJwSe2vrzq2LmP93tn7tCPBuNTia",
  "key13": "5XNCuG8LLeYzTTaRqMjzRwN9YrcydtKgQff5kzgq9MCKDEfeTBMyr2Y5ML1DsYnMsssP4syfVYK2jkPhpH8pf6E",
  "key14": "3L9dQHAhMFAopMit2dvzKu34B9Hf4ExXRmNfURdCt323DWqDywQAq9JT1Rw7n7b5GEoTn1fQV5XSVsb178wki2VL",
  "key15": "4KDcWrwxfFeAJqyGTNocoxprLcx8PFPyqXJ4sBA4DtLCpscwDqWpodhQsBqMjJ7wLVevPZsrBd1TWzVBMKEYHa5q",
  "key16": "2a1EaPSw6BD4v2uWchskKi5VVHqVVnjUmrDxMWSmsJf4o83ms5cCwYpP4jeTrKGCfaTmRw3dvy4RpXveAnwjdted",
  "key17": "3wWtrshFhGYkNf7hdeuHk1nUWuAFmZNfSriQHYHBA7t5AuBXrZoFj5kpDteN9TshRCTjufsqG36USekuBVyXWej4",
  "key18": "5oqMnnCF2HdeUHSpcSoiCfiAh686Ny75Brqg3zJSjuZEuff3YykCwz1FGBApgucrT8mxRMBBTnveGvtq3p5vVJT7",
  "key19": "2SHLhCxeey2BkWWFmCkuAtjakTpvgDVtiE7m7j1UUXTFdF7jCiB59MfXPuHeeJBSESVNsmAtw82z5azEwjNGZoYG",
  "key20": "3pk5VAxRP6erMDt5hoxZAMdELYFGEtxPBxYA5d3ic4CpRZEsTZDDPuU1YnL9YmZ6EnNmrFcckKi1FB976s35f4tf",
  "key21": "5uuT3wJwfqjDfp84AAbksgRyuaK5C3Y3KVqLgjeCqCcJyV5jVDdaWKMkYyQrmTKTuprs1Z7jqq5vcbPGLYh3Mruf",
  "key22": "2HrYM1uCzwqPaodnyxq8rytfXa1S8dA35ambiS86547mVMiYNRYfF3M9oG3CENpaNTLaTn6XJn6giXzFNDyTXp9E",
  "key23": "4kzaAues6rDTgT7ap36AptvmbamJ56Yz1kVGqAYhM8ZfFt4oeL3bQgjisWgotSEe6k7Me4TYfA6vhRgJkT3CBPCu",
  "key24": "ztututR6Mwdv9pMqgzFHHh6bGDsahH8skn3qCAaW8XTKka7FtXcVivyyLwLzW42Px5XzjZeMLtGHkH5AELPtFMT",
  "key25": "2UwymnzcaT8pzb7qfoewrSwPMDVZTmGxcR3LsTnH7X6UxJFFPpw7SMLqxabMxJ3HV5b2AGSQ8QPutE4F3A7Mazks",
  "key26": "49XaDqh9226oig8Le8n99J99JKmwj3ZADm4H99B62wXNjc5Ln63ryJCwy2ptzMXwrZZTJjckhnyzuMWpoSpspspx",
  "key27": "3Kbifwp5QWrx7bo3fn6HaXhanNcPRr8eCakX1W8GRjtgHZHepXCtpa6Nje9m6vFPKxPaMEo86oKQXXAWDm3iwiTn",
  "key28": "5da46tiWqvwKKSEHofBApDq1bVLyCrSZQN9LJNET7yTZw3XusjNxARUy3c7FEiHeiuLNyzQugFZ7BYNY2e4xjyMt",
  "key29": "yGcKhsuaWqFjJq77iGDhShk4RyK31QxZzXxmmRSPyyTkYf9LEDdYarreeAVb4rYLsx918KaYuTw8BSe5TjNU3j2",
  "key30": "66dbzC7whfH9aGdGXz3mgjTtyKDwd1CEXgS4XbmPLMLk1pdJhgucEomfCLaquc7ZLKxFDJwkjuGsPVKU3DXee115",
  "key31": "tBgYdtkPJqLCyrG1d2VM2A9qu9GaVXsHmoVc79sjSGR7QBihzi4kTYMjPzdL3RR3JD2KPCMoattvK1kv2pVqoMQ",
  "key32": "5N1JWBqAqUK1saGrED4as3zEF4SnfBQ3TqeQDc2EXagfgSCsP8VEPg7wAMySwsfYimK8CCBqs4ieZKdDkmEjbPT3"
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
