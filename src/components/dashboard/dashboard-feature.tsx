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
    "28caPEKt7cLJT4Kf6i4HGih7evFpk4NYwXPZgALeesomzAMxKUHrw44cV5Rj7f2mkYaMUuVnAEQM5D4oVH1p4T9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MaYLSuYUEEzTChrfbYZ6mPYiRD45ZCwXKULbH1N7ZEJ7wkDqcNQ3LFF7bUcXDbiWqEscT93WR1fVSNF4CsE6Zo",
  "key1": "FnPpM2VQN23fsodiD4zKrA1gHqbwiz2iELcxFhm1kEhp7Dd4LxUPi9HiuUeP96MtT4XS7VdjHUoazY9vz5vFzhk",
  "key2": "465wdDSrS9E4iWTRZojrrvGWdAQnaakqVjLb3SqL4gExGB1nFuAk9yE25inQcdcN3v8YeRTQihQHMjsbssP277ax",
  "key3": "4MhcGwjEUm62sDvoNzJUa1CL2wD1pRgrFeWXg1aGnx8T9hSJ3f7AmuKXuLxLMiPd5jQXRw4saMbH6SNcvbvysiCb",
  "key4": "3aWvVWLfUGJ4ThSW3M4oLFsxSUfbaFonhVyGMYki3Si4nif3ro8s237drCr7YiCgvBmWowXB3jY4tFcdV6VDoANJ",
  "key5": "2Se7bS5TGHoA9cijsxJifAVedpuhXKSHis7k3bFR9Pvm6nbyJguKTViLArZANrSiAQAEswNTCDjbLqUWoJd2pzFc",
  "key6": "46AadBiAUXAfpsW2d7aqJGjFpWi4bVgcyLK44xzd2oJtrMT1hrMU8J3zheMDsxa799Ta6uVykHfQikuyf9BqUd1r",
  "key7": "52ZSqnip4n21ygrxb3ocbUDU7NNr3BgWXDDCf1uaGE3FyyjvnaikGqhTxwYyZaKFquLvTZthYGkeKKyLG7w7gtJX",
  "key8": "Zo3dt89Bdy7P3swBmk5aFVADATmSgi7HUpVVx1eK1nyjD8n5DXnp9rmhdUA2CopBzi8HfMyJpazaMA3TnCe9UeH",
  "key9": "2RMgWqTgJHpgusgixoWw8uRF6SqvZ3pTMsBZJhPqr1sNi174AL9vsbQWvoWP9pUbgZWxQf8GPNPzyhnkjQMrxqnF",
  "key10": "UAKSjVYPxhDGqPhPYFiyhHVuomuMjcegwumiKiosbEb4wCGqn2MCDYgXwtXNtsbWv1PdutDNdvZi84CsisfH6Ak",
  "key11": "4T65mtcB8o5HBfyLHtfzrUu82H39WPriYEsSiXKC1NxEGimABiJnPiuqJwVjVCmqfpjzSuu89hCR2NHXrTnaVn6F",
  "key12": "4CcYTpHSXYEhsey2p85Dqv4HoEMyfzYBhXFc4hVPL7e6T7bEoMQF5kZkDmKT53oPwFqkRdZJTPeAGypZAi9MQCy7",
  "key13": "4d2E6KaXcR4CzjLejqg4MgMMg3e19BJ2esj8VapLsUxxw3Z6TwPWfVmu2N3dHqrXmtvzpYXUZMnM9hBaV8QKpLJK",
  "key14": "5yXTyYcJ3JbWJHjiE2YxKMETNBLPXuAhiN73ZQ9qqyky2c7g3jRjJUNZDXKPoUfV7GJ8AxFrdL2n5nthpxo9MAcJ",
  "key15": "3jBSuAbDfZ2gtr2keigybebVbjqPzZFTFgSrSFuyW8iK3HdMZqwcdTE3EwoH8siU9ANn58gfWmh1VNsVyzS2JZJZ",
  "key16": "45xFKPvqMLBJ3CaaHqBn3fLNMurYQSwwJdJHNFJwRVtMJHJBvtRYb8nq65CU9GuEAbd2Qt3Hvg5UBSKEjUB3pua2",
  "key17": "6mpfWYS7T6K4ARav2e6GWtj4KHxUNmGH2QDvkm42Qinox9iVj8VdKrEPKFUkSsd5kywdAu7JgiVUgghpKsaD2rJ",
  "key18": "f8qQ9S79FEn6P98ZSUrAvxzitXWN3FJuG8J9zMDbEdzg41dW4wBqhTF3xW9nkB2ewddrR2nttrfFo18aPyftFW6",
  "key19": "eTuC5yVBQXfF2pq5kM3EPqsKQUw3o9C1QCjeSU3yEdmLTpdKFVFA9ofvdi8EKM2AwzHUWGyzkUKJLmmte9xKsRt",
  "key20": "4hU94ozvyBnbgNHtxy4uRYLte6SHRVVYP8u9h4oUZW39sNeHvThFEm1avL5wTTraTXnDjA7yyUZxFpckTXWbHCQs",
  "key21": "3taKyG64sWmmg1H5pNJVDThGiyTp39LwusACsrGLv9EejtJYWTjVgD3aeqJYL9b9zQ8ZkqidepLJkxuTg7xVEfLX",
  "key22": "2c2gWgVLZERE3cPRTX3BdoMWGvUnuG5vUMz8rWi6fWSvZ1cuzx2yz8bXLnyjPLo5yTxPs1pU9gbdV6G94MWFKbad",
  "key23": "CNAPRcUFV1x2s48KPGm8PtDm7EvSsQE39KiwmR3CZ3eYzW9tBYSdGXxidbtCZ4r2WL5ZThMo5PBKYhn2F7Ee9bR",
  "key24": "4o6GKaJ91WqYZMpTCXiPK3Rbx1m2P4LfdmwKUMvsrdZ8zWNyvkzXSB4jSMkuwtXmTzVADbuZoq1nAs6ftNGEVYYd",
  "key25": "BfjP3tLSp3qTGTjwvv8x6Nu14t9oYqyTtXzoTd1GPsrheTkaeEDfqEkMxBq6v4kJ9Cty4KKMRDypSo6AKhCPPUc",
  "key26": "3rxc2RDz9NhEmuagDvDJrtmwcyswL8cFi58vG9KuxqGjrXfKk8uh1ChPihnmwVDmp5nPVvvGzWZDqrte79Xy6Xiw",
  "key27": "5Txpeb4Vv7Sp1TqXLCLj1TNeTZyjdhoCvgwM19doE2kRm6ZoDknJrar7nNEj3vapx62fNC9yqK2CeHU5DL3xMJ6K",
  "key28": "2G3qChxpYJrdgCbFE7gUCc5ijszDhnpSZC1YZwLFsyPEma2tiePuZdQtDcc7X7ANXPQQ6iiJeb8r5c6eVLa145nV",
  "key29": "5ZjVd4UHctUCDCV6imNMPtF6Lzg3iQeND5qxApVtcaPxzG35beiWzPJu4Pi5Z7ckhmWr7HicdXfmvLWpxQJhD1iq",
  "key30": "TwEXKr7S4DwWrJfXjboLitBEmLYJBLgeDaxoroQPmcrafTyY3b7EXRP2LpWTcpEPrnhEVkiGZf1TzwAqjsVYsrH",
  "key31": "3KGK1sgPbg79o5eDY8SyADiZaK6u3tDSHVkfdB2QEgmSYGoxxfUFbsntsHHMK1wbovG7GuzNQriEsuty2NttX9Aw",
  "key32": "5Hh7XBcu3LqfZ58akFfjUB2oknpXPzryUSzFNuSmzFxf4q3CdvcW3wyKKfs43ZbRUTM5w7FHw9e4X16sqKpkVirA",
  "key33": "qVyouAoHidENeHs6gatWBX26Q2SjvkGD15pZnKY2YUJdqdx6ZF1Ghkj6zDEG25N3qwS1HKSYQvR25PCF3E6uYUS",
  "key34": "3CT1BuWhTChYqM5Phr29keQ8QYbvct8sA3Y89Hh5HoWybGpPEzKFx9aDSQ5zDfQo8grrXf7x5SACDmGkcGHY34Vf",
  "key35": "5wYNGD72Tg1nGumbnfAHjJarsKa5kb2SU3KDvTinAV7YZyvNJB3CmDUA8nPgGx5aXnowSKf6HgoRNiYjvcaYgbTz"
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
