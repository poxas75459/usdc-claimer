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
    "5MKhMMJRWi3AYdhYoGCqMXL3L3Shmvf7MgfakoX2gAvZ4SzKXdrjPyPAtGKvrn6encg9gPGcevMiYm7fysvBDdKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZYHHC4NUtJ7qW28Gxe8ELrDN5VFz47UDpB5cZy6agz5gUgtPExnWDMVBii1h5iYx12C5RDZLevScFmdcRM1vjEL",
  "key1": "2WWoYa66qDg7fqUCw969tSPhrNGjeVMzgPSzrPWmehid2EuNJQEMauQ2zivNASWBjvDs4GhiCiVJHCsrhd7cnn33",
  "key2": "5o8dGYbggs5p9aMjyFJ7uJoPM2y12urnDsFgtFZaVLQrVSBc5RVuahRkWTKSCqzDarmK1zbDaDPh5gJygwXuCHRY",
  "key3": "4rtSmDg2sySdop4X1ZCeC95v7VRkcFU8cr8VHchCEZXF1ryQ3X2fEtjBtUBQyzMBqZFqBNc9e7nHmWUp5VwQ7Lbr",
  "key4": "3a5sFEaA1g3y2fFtFzsxLB6BUqXPsSFWRU5DXgK2wCLT3bkDvsbfijXv1eQxiSFy1YWzkZ7t5qzpjG58jM9c9sA2",
  "key5": "P2FP99QADkVNn7rr6MB6QSBSksULCfZe6rdQPmmU5HbhBkXVSFUKiV1EZkm7Z4aCwcqKpJtQ53D2kjwRpsKnBps",
  "key6": "5bXadx9xTDdHVe8xCWGyTwzNA9CdEJp8RYbv1ioY33n36cPYExrGaXaBnaqC5hVEWnHZCfBnwKijE1acvkWWBLuN",
  "key7": "4M3qjstUhtv75njdjgArjdQ2gDGmUHqT2mVtKAtZrtUVfZbDyHzheATgVzUPWTmSF6zBKicCfMvrgdoer22yaZU6",
  "key8": "4YX4q86YZky6oBFHDYRnBnnq9z9CbSCXyy3W6pQHsMdPZGfJhM3rwmLNqDW4vEpzRiECJseDQDmpjmPRXq3Hb4X8",
  "key9": "4SCaC93TErvUafwYRGjsosyjz2o7NWUeRbPnPoU6DatvnDLbK7J2eEpGsY9HSimRL17mAtdZZcbPVJr3Hrqvz61b",
  "key10": "3pmCDJAK54YoSw79FAsQeuxtjYyUN3rU1TNSEfMgsX9VUiqQ8CR9vTpNJaLW3tSSgxVbcD4YWcRBPP7yPuJgtnNH",
  "key11": "5e1sDPbk9zC1uzkWrjJfgifQ8gcL5be4mbr1vHF8xccYKBcaZsJSTrATEav5W8vYryTopPke84H8Pf8v6YkKGwnj",
  "key12": "3HWrzVqeuaKDSZN1x1cpXYBaWLtZcZMJDuaRYnY5r5zKfb6744e4mpUq2gBw4P9y5Fm59ru3T1znurc8cKyQ6hY2",
  "key13": "5oUnnRWfueb46woziwGwbhsKQYTFsSxitcfKGJ5SxHdBjWwXvhooyD4QRqqVdGzBMgAbjyFyVSxgeeE4uhdXfUoq",
  "key14": "2BhGynEBvcPSmWrLtrSiWJFMWG7q3shCim8wJhBznuB2QGU5yC9VpmQp4P8BtS1xhPfZMpYRzXCmVuLonyH6recv",
  "key15": "5az4d8CkEtGNN1CQEeZezTVjLbKAZS2wZmw6vfU7AT8KcMGWeuwtMeCZWbhatkKUPJmCBZHadQWo9o9VzMMwzAy8",
  "key16": "v2TnfcExvTPWNBRbaMobDoTgWg94ZJXNuEmyKqFaqDoYSsCDoMJz5p9GP4jXHNtr9syqchpid9sETDfsjjRt957",
  "key17": "35PzL1m1MtJqDP3SGpnyT18bTwWqz3rcbBoH53eeKkjJWFewKMeiZCoLofMcSPRq6dhbWzKcJVHBa9PRP7xcqypd",
  "key18": "5Nw1mUuGSmMAdYRJyDUStR5qmqmzxHBZzhkJNsftQE2tRqJ98tRHYyHphPuK66XasejLDbbtoQ2tN8DJLGLvNwn7",
  "key19": "4pcSkgii2QAza85WkHfGzsBZzZ9sYGr7Y1kDQhUVCWnWWt6Vw9iZYiDLvSYJW9wwG38MsvMyWo8jDGebVKjPqTEd",
  "key20": "5KpBJ1BzNGCa3zZaR8CjNaqps6MGUXU7gexhwRUfSgt6LSGfRVi8oDRoFXWpi6a97rApa4XLLuu8x4ns5uiAHofZ",
  "key21": "abr9jFE8ztRGmgm7x2HyPn7tG2Adf8mG3DH9GFkDszaDbUxqbYkCgBSsCQ6BrZkCQHM7mHv2AW8hZKoBv8gPKrx",
  "key22": "5sRdzMnLjmv5RnosfEJdpH8bHd6zMcgzQc8Zoad7eiow9rktVHQMorBHzXMHneGHiEYCXrXhUxRgMagcFKn5cKWJ",
  "key23": "2X4LRyrKaHUb7VayPTWZMWzHr6VpvjxumDX4f8mE1j5WdMhyhcRRu1mAsKHqPajWfWSaFktCzQ9koEHA391NX6Fi",
  "key24": "3F7icyYRKj3yrdqBseWd1YtYXnWYGSbbFLzS9i6nGYnotiup7vJbrqPqmujWmWB9PyV4yTVf6EP17UWGHeAUDY8n",
  "key25": "325xqqycxcdVjevzsrePS7f8EE5XisNoVxqpwoEi1i48ETeeq7PxQ6Camad6VHvRvWvSLnLjZ4tA3KG7UoT3oahm",
  "key26": "Hz5iJiuQR6F9omS762Vf1TcarW2Y5bxZzwrpSxWQn9Cr5JaJ9hDMAahdfNGajvWM73H7mi4c8L3aFAa76uCPm8U",
  "key27": "3LCPSZDTBQcAeo7wk52otpmr5DXz1qyDyn61iqC4CsqCzeLaVf26Vz42dTJzky9rEWmWYbA3GyHwVuyQo6RUkkJT",
  "key28": "236CDaV9mLVEToE1V2Jk3jKLcQi6xdx4xtbb3CG5tLesrv49ySA6jB1c7rXAzqU4zbhKdCdf1yPp5VjqkaVQKCYq",
  "key29": "55ew6rweH2DVqkJZBwxiRP1L5RWuNpMvGadrLb1iczXdczfMq8LaTHqAb3nkrtGpFbPg7KhQoCLRPbLCNNV5dgER",
  "key30": "4no1WzqaoMFPbp8HCayLBJrhh7qVHTz2TKTRXNyQh1dCkkdosWirPxxTwBHwm99yVFBFKGgMYd4DTtGygpE3Nupw",
  "key31": "48gj8RhEQGS8ZiYzsan43Eew72vDBEQRUqDB3cex4knTPkb8MQXfvk3K8gKPF8jDjcvrWKcZvmhGXjvpicTUcbca",
  "key32": "5VEA3JRYyhmkma5j2TsFJh5SncFrbaHfVtnL8YMR9awazHBwFH7ojknmp5CpcwKJ3ErLkCU446pXfoLNbkP2MScw",
  "key33": "3kh2mKV6KeXHNH3xE5frqbL1seXhrdSEbmGTYf3bbHbAE2BbLCoTsRimMP3dKsfvTbmx44k6tr7WfU3YqLtcAnV5",
  "key34": "42ZRMLsYpBWfSyMSu4T9pBL18kvsWhDRd8SnmLzxxc1cWradmPs2Q6i8CS1u8V8Q9Njt5TVXa5cYnx2n98sXtgVX",
  "key35": "2AtSXecS9vYbiLNT7vGuXETyp2Gex56zrQnrGyhsnUrtrTRRL1yidg5Xip1amNQTbJDAp79LavK3zy6ncQxnAdeq"
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
