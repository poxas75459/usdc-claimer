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
    "EuEgiHzMeyYzYe2CjEUeGMEuh4ZKkeMEpCyQVSTPDicSFLvhP4qWb6fTDwKmE8RCFDNohAH1zmWyxqUQJwckyEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SmKo9H3TTGgaS3vfeYDuNo2q8ssDST7DALE19HJVd6EmvTNUUz81VJZySRBkJY7QAXusVm9pZzp31G2EkMZwkiL",
  "key1": "2V5WrLcGRTFTDY3CHXTDmQdr4frg7QreKmfybWePqmWctuuP3gTNr4nkGtkvXhuggEpEfgHdtPGGfqMyMQ91V9iv",
  "key2": "3zhbj4L47dyLN4FFq5G2WUnaNpKUkFcQUCHY9GL5EjS9RHAcsdr1vodqDNejHSfQoNH5gozKR7Teuo5DtKRodzJm",
  "key3": "uZhGfPtrLbxHzWPBHuWkv7vzoB4rCqtsFjBZP1hcNJbPSqw3UDCg8ZXPNW6wgs8HF7MxoPhNwFBUMaaKBbzPfuV",
  "key4": "whHJjpnNstj2awTN67ieYUvwAdmdgFiGnqSMFGbxdC3PcCZrZb9kaqX2hXwFT2dBifK5ZEqEBR5rzgt68UXTLoV",
  "key5": "2g2JJxQFyS8guqKLuWYmPd3R6Jm7pcd9umQivcPkr8i6KUqah6L4v1SNaf8nCcCxfRnQ8P65Kg68gu3SdGNmhmNp",
  "key6": "4v7EqqFAexruusDAXZCH8o9wivVYrFZedK9Fg7u5AoULoxzsGd3dS8JfdQJiaTBR2fWtN7feDTTQw2F8f8oJGaXf",
  "key7": "5hWFMXwksXZTFuRzmGWrh7g34SC4fV9eGfGwrVyxdtXp4UNmRBFu1EmVcqxUr7or27QjxKRo9o5Kx16yM3ALeFaj",
  "key8": "3mjAQcgYkGjJAQ9WwBYtc8dWeoczL4216xaJaiytgam2k2hvtQpYNn3PXYuY6TskQ4yZWyfUkEBkeDZASs6zN9eW",
  "key9": "MduePaEJkmqray8SmJFggaTtEf2S1b9VVeBvAPYQkkY3LwttxrWVqrThvNVinypdk5iv132n6GTUuhnErRGUbN1",
  "key10": "23esrQjHVMYYEDGQCLNpyhE9DWz5MwigTYhz9Dbp973muKaQFL9J4R7w3Jwt74LGdJd1ar5EhvPWyVkzEQb21EML",
  "key11": "3eR4FiFwxP9tPgFXYkAnBAsXZ7zr1Fqrdu8bNxM4QiUoPytU3CV5DFv6gwJF582QBKNhT4civ1vvyEKZ18iM4rwd",
  "key12": "nYZd1PzRXmNnU74Y6sPRkQ6jWY3SBfYTb9eq2bJpMG5ShmgFSi3uQcoKYh3nhjg8S6Pw3wA7r7xLAcGHBh7f1py",
  "key13": "2DM3bMzLov6MAqvPhB7FMHT5LVduHsSGa2QAYuLuQkvXCq3stEhZ3x1CxTDFoRZ1F5J2CTWTfqp3mYmojW9syQLr",
  "key14": "4x1ZXCf4QM8S1PkgX4dgUVrqnTarA4VDuivdoJsHPafv5zKA2tRNGncnzxG3Ds1YkPD4exPAni23gFPChsjgDPuE",
  "key15": "5zBWQgkXRuiY9iQsWfKLLcn6LaHj6mwgnHRjDRcbbTFepfibvjNhiRfM8mDijAijSMsym2FrNekxD7ReT6ZAydv9",
  "key16": "2Qog4qzUewCnTcNT7xbWA43EBne89RRi4gEuZo1Vg2bdVX5TSKcfBkgngHXxqHBWmXoPt6NCXQPJq2vmLLeJ2vCD",
  "key17": "3JehD6p4dbD6TDUbfTN4JkdKjadfhE1ESmPYmiwfYqn7xyMBCX1Mep68kjsw2pkRPWuFuF3XNN4K2xufKjM2XDzp",
  "key18": "8d5hZLbCt968y8WYUj9QVsS5BDZB2RCk9RZH7HJLb9rzy5BsLTJVjozhY96UBDYm7nLztFyNdSjiNq3Fbmw5UmD",
  "key19": "2knSyE5k1BdwFeyMJbJoYut3NKe9XAnW6e4twNNt6uoWBshxy21V9zzsEomnhR5Hw6GwB6iW62oJtPptGEL5rPtT",
  "key20": "4JhZmMaqouBiLQnAUnAVuDspRXZCqKTwfS32qMkQi7MdoTMqPE7GY4fvVYhVF8JxVX2V8QxPoCtHkXY9kQuMx9hT",
  "key21": "1J4Htk4hbH6t8nAkjVxGgQMigq8kqNyoFzJcv6s5bBAePecdbaGiZ6JqoFdkdWRLUdBYfAu6oZFoYZCydex5GNk",
  "key22": "zHtYQK46kfFmBLDCU99oFH3Co9FoA1A2tzghnUK3qCK6HKzwBCJ4EH4mreXVwx3fi5xJPfgYvgJ5Brs96zmc2fP",
  "key23": "5Z5DZKAw7RSTbFVf4KLTgzovhcBZJSaTDinUyhFTPpBcS76h5Ns5MkEs6BmgBqsrs7i8KKku13tt1zqPTg4sQ8gs",
  "key24": "4QhFePn2NSReUusmdSdAsVxhJ3KgpUagjme7h6aczHKGVFYbTZ933SqjQeNsBkxVxHczkZWNx5NR7u4G6rcSZ5Y7",
  "key25": "2Be6Mw2dRVWUdPzcwA6z1EMQZ6FnpyW5cmEwUBFujGLK1k3BJ8aLBeyjhvyMZKbT8XbUa3crT8enVWv6b1nW6APj"
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
