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
    "wvX3CRRdT33Y61gPyn94dcAWwXtbXfnED77Vkf8viiwAU5Xq2pQ1RZmnwwaXDhdWAHzTECwNtKC7HWDqmvgYXRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fhx4SXQW5cZoANMqP7Ydbo1xix9i6Z4HdwT7Mrv4Liu5QdjRMT3orQHhXTUXJdikk78QNhjLvuHKMJWpWzZrAZB",
  "key1": "2rD1QZtKzvaPwUCjJLNHPbAeivrngDSsKZHzq3p4xT622DeX3LutTnBtyYDfKpvB6y4g8xxDjZaJdmi31QE9i8Rf",
  "key2": "2vme1kubQJsyu383KJWD2NH9XCLYz6rjXMsscA9uch6vET8kmLgWBsXNADJTqw1PGxiL1ddpKV1TfHXRHbP7R8Qg",
  "key3": "5rkRcfRyA1UxAq7xiCimR3SsbKkZkY6YVBMyBQDjZeFp8NxGwd7e7fCFBGhZbyBpjYK3LVRdqvQamrphvcQpHNz",
  "key4": "3fdPFMtJxZWVb2CbR2kD4P2t9294n8bMZ2BmPzixVv6ss4oWMQ3c8VgXjmAq5qFS53ZCsoNARWvDaLzc7Vu5HX33",
  "key5": "zgtEVEBLTWpmTPPG2WgPY5X7RpF2jN8JyGxgcugLHwriAJFj1azdqzLJ3GLmfcBCPwn5rvEKHaBs5PnAcYWL5H4",
  "key6": "5hexJKXquJ7vptyhZQb9VMVGBj17x7BqExGKuVePb3kPNWUcd1TV9vs4xD85zis2BXkPBQneZxfecqjRtEdc3AZW",
  "key7": "4DJX3Sq6cdoQgfukQJvqRoNGMWCWbaTjgiUeGBnE7n6WMpvwQ8htFknZMqGVafqn8J93p2Z9rVGjaFZ3wvRZ1nti",
  "key8": "5tkahhRXiNiRvBgWjoTgbAZ3DtGP1iXQ1yBQjbhfHMU3W3BGVFVcaxm9rZSzWKYzwgSs6upQ2tFXj2Fe79zT2inX",
  "key9": "3pJpVRYxyWcyNUikXpp6WHYozvA9VeeePbxXVoik3wKcVFeodL5fccNZeLQLMmRrqATH5DWJxn5U1zrgakBmtxVM",
  "key10": "5KSvmad3cRpmSX185ZHdhTE5Z3npWzZxT1rmFAQh5tozyXnRqmA2dZ96zwMwvMEGTW1kKjfg8viJvd77s1caGH23",
  "key11": "R3XFgaFckYUGb5WuhNoxnqWYQqRCC3N5gH3FyjtfA8tSMpbDX4TvMSt8rQq84JhMyAH91SNXu4RMuh5XpdCzfGa",
  "key12": "5j9HSUuPLTgsvkgx8aAMy9NsK31KJZTdpc9Ls4DESYUqkjkZaF5qMT36tJBUt4nbvPE4C95M57urLN5eJwu2MGai",
  "key13": "35oP4aTjnhbEQuabnqBNZNqQtKvb46nymuZDEEi2VTdqGjVMWYUFUQA4orz9QAm4h3d7reNSrnSzMj9vfPvp4MMP",
  "key14": "4XyRy1RobPX1RoaqNxYgGvYVTB9UR8uEp53rduMzrgXzATg4pVhebtKuE1VyQEU3WY96E4LSR3esgds9fytKqJ5r",
  "key15": "5aYVYvifcsqfJhdpieLnBexjqepRjaGZLN62zTqFcHcFmyKdsCtV3Tibb4GVSvCYAnt24ozWvfmzb5tx1kZJi9Qs",
  "key16": "5sstpkSxzXuWwkatwWp2zSjENZdUq7Qu23qSf2fkaNFYfh1mYy6ngSoQQ2Vrg5A1V3rFyRSKPcJgdLug5sisACHy",
  "key17": "2mosSi7LxgSrtztwXQDsWyp2uGUaLrPSnWBQs6QykS7t9YRmvxQoEztd8ZkGzMwavPBqVbUk1XZnHT3oR2ENTJg3",
  "key18": "4NMmzcfHkR7xPwJJU3gtNTayaLaDJZxpnD8xQaf1hhSWUtsUj5fC94CKS5En9Yc83K6C6aK8UDugG17dPU2EKDgQ",
  "key19": "63zUaQFsTCT1QzbNo2phgBLAHXQf6v1ZXfmbwwEDwbQ4y1szv8jb7cXe3dPsBDcUKn2x4sucPdX1jFJ17L7fVuv7",
  "key20": "4ocg7RQYMfQiqVfk7RydwHhwVaSpK2jL1jY8GWmnPCcdu93qtQ6MZt6N9DZ3rMUQjLQXK7EaTTw4YUTnRJmkGcTi",
  "key21": "3iWDYXigt3ZWz6eX1FG5JvuGpkYeNGKDJzdbQsiMG8qHZu1vayz57zjxz2UfU7s3JbJv1YJ3ahKxMjrwgZAiPgRw",
  "key22": "5N6rMVogLaaTdFucguBjzUKsQWC5uvvSqfoHhXBDwu4N6Z1rCTiei5P3mXJH8t6gkVJsCupLjnv4yDBPyUUV2QuM",
  "key23": "26kt1wh5tD27TEsn9wUteduJetdW2PLaUgE8NRk7s7Kv86usTNCyuZ6ZbbN7w9obQo6tJ4pwQKoLybrc3CGBuLnN",
  "key24": "4JwuYznB2GUZqA7zZ3YEp5p3njghrznLyvaWTaprn2FHsXd9Si5LUkiY81k13D2SYHKnER34xy6X6QzoYoQTxmKH",
  "key25": "3DyBT3H8rhjYeNCkJHPjRmRVLRAtfXfFE8L7EK7yaFeiN3eUtiCmJkJo5QKySuHtdZvwZi3gBJQt77AX1UU9czpu",
  "key26": "ViwaD2iyrUtmoUnqfrbD6kKqRWTmUeAAAiiWjdMAYM1JmfF1nXfSszNwSvjQaJtYd5du8BskxKEsXSUEiXriuDg",
  "key27": "3nvYgUxSBj3sAm3ySdxmhPVKArD9giSwje9L7NTrZJ8HZxCZjSKfyb3XXPvNnqbBKHTuA4LsTsAARaZwrojvQ7jg",
  "key28": "4gjJfmAw9jVFzLHR5CtKDyNAzvrdUN7PbhBtiG1m8czvqNBtKWz2jYL3dC1LTL7gJckFUMDkJAXLxc1VVLjoKUUi",
  "key29": "3E5oqu1gaoRbEod1kLRDuDm5RUxgeVSbHSzrD1LYeHhpRnecHyatyDP86A1kEtiCusALbtpnvjjVALhmREW9py5d",
  "key30": "4Xi8tk5CGHkr8PXUC1JtCNnsa1jz7ZAfYrWZYCkwXHkQ2DPZTdkxzpuL4sXYM53ccadVpDRWzkAf9jMi78XaYt9W",
  "key31": "4fniSP61vH2kpv4avGsYAfzNu1dsJe6tUSQEz9Rhct1EJdXsvvnTL4mCaLzTDx5jnVHTbP5iEgcBoKskUUhviCMe",
  "key32": "3uf98tZgMNfPek3dP6b5myNtQhzYSAVxDfKaj2nSTKEXdwqvv6Nphdo6VpycnGKx5SxhfwsYxFJU1LBHstzN5DFQ",
  "key33": "3bHmdN9dUKooRYRMnMwKE9VKbsJDDVPT6KCGsUyDwsgF9b5U8wsV6NpgfBJ4Ckhqy13vyL8nS3Q4cpz1RAbT7Pkp",
  "key34": "4zPAKD893cRN45LY423V6n6sebtvoPEJa73jN5Hx7tu3gEEzKnGP8ftQWqVYmuX2gML6uFr4bVcUtk77KKemGKN2",
  "key35": "3L3Ku9YbiFa44gCHeK3frLZzLPk1AXkrs4Tqoau8sXBBN7BBYZKkgbsDNKcRHU5MKsB1P1veeYxbmyaVNDNpWrT5",
  "key36": "bwBG5Z7FehrRi34qv2iXLyKw6x6jdGiP1VkwV2QQXEGTTBYFyqjDxaPQYqqDoSHeXh1NZnHcfyixhfd2WiHiN4Z",
  "key37": "5LaG5ev9b3czM6ZFPpWfPciLrsKmcv2zQereL8o9MQAW39KHZiSeo3ecfjqdPLCVdpkeCmGdmJVX6S3epc3u3QU9"
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
