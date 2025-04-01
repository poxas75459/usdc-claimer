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
    "bG8SU9Aa8MfPQjD2ZjmKomwPYK4p3EvA525pN79LMzXF8nQZ2Q5LLuE4AweQKv8AegtzukfafjgbUPxCGoCJTfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UURdgC5RC57pDSuSnD7dtNwtKF32t7Dp2gFKuP6YaLjbP3MHebKx8rMKGkcrD44jqTg1VCB7QJq52Hr5EfBAtwT",
  "key1": "3uLbATzszBuaHEdYu9j9Twr61D72crdcdpsQc9sw9E6QaqdHHQbbo6Vfz7bzhwWBWmPBBMNJGRvdsuZdHYRrcuC2",
  "key2": "24Cy4HUgW7ReTVFHM4PxSKixMjUuCpPE7CwUAqViHzBAnGU4JK72e4kD8A3tc6qPAf6nZChDHThmwrcs4PihdrPQ",
  "key3": "2zoceaRq6co2HcpZRy8EJ8SJ4KAX87PQ9ohdb6fuK2rpBGbzaAkRcxXqFubn12MY3BKVqouSRCz7ZHjBm2koS41W",
  "key4": "4MKdDVZEzmJm7eHCB6sVSdeYX99jkQ7iEwKJv9ULer5uqjDtYmpofJo4K7imHuyouKuFjaJZYHG9RwpxradJkUaH",
  "key5": "L9bHWNogNuNbEHnashynuEkAtTPQkLSSwCqujhUQ4kQNdRsVKsYzUioFLk7pjkAFDYTe7bybeqyYv6FbY8qS7bw",
  "key6": "3AVQnDWcHK4Er5BNqTNGDvFAdjmnbg4QKh7txuX3u4kwJwVbtkPLhvrnBGDJsSNxo8Ao9k4MKDTQ3CXAYQ51njN3",
  "key7": "32NrkAWns98nVyqS1Pr93PAvXBFnqaDuRKFzLuELykc4VZpoBtRb7EPCqLjDXvMhvR9TnqyHiDZ3xF61Xgcii4HV",
  "key8": "XMosuUSEqM294F46SgrdJ1EkEtLQJFkkJmPp5XV8EcS7VB2poFX5S1Lxirb8LBTt6ZCvu8yzHPxSkopTDKnnjsv",
  "key9": "58iP38rKb2bBqnf3vyiuACKDEVsjSDRJqukAKMRrVmMkcrAZAx4HqrRn77QiuczBTHWVQTJjC4GLHKifxaoYcKW1",
  "key10": "4jVkSsTbH7Zkd4Lt3BSaWLaD6DPmU3eFtjSTPcqNMpAucfVNJZw4QoBzL3HKvVtmjhwTw4qBySJF5QAxezMaReDA",
  "key11": "kfuvmgnV2fpzJAwLnfYvT6fu4cyPeqJgUTCUSPFKjRBNgkbjkTgohmkDSG75NrvpXqCSNqqQ8ieg6wY3XjVHQjs",
  "key12": "2RanqvfTVnpUHk5VDY987NZCEKqakZeixtTD1JYGg2UPDtWkLctvzY1hguz8xqWTro5L6AJWXzaV5821zx7u6v92",
  "key13": "4UN2SHCfY9YcG8tXnoTsjzcwa457NzkM3tWqBLZ3fgfbkaRyWTzsToFSCbGpskMDKBxSTAPPttrNJuCA6dUnSXDJ",
  "key14": "3Xt8WiHX46HdSxHP7oyLbqahb6atYsUJGNBXPWjPvTb5JU7uRp4pMtZ2YvEjb1PB69gZLw7d6Y83QyqsHe4uK3WJ",
  "key15": "2xESrzNQbHzCaG5maMXsv8SespKwNxnHHDyK4fk8eVtbg9VWeeFpuAQXWvFGUdk1rjV6pBCcKNaCXSb2gsZzdsqG",
  "key16": "3zQWqWXTZcZfTCG8MPnaYsKTadJUzieS3czrtkatDCK5vTuUeY2Asdd8zgTMqR83og3z7eFTgdghqtYi5Q5kZn2H",
  "key17": "2yiyG6TmYJGkBsseaPx9WmyxRkoEmEGXZ9KrhxgCsUe7sHnok3fqhFUgya5aGBkrcSmmHiKb2vY5rvdW4qQWPeiY",
  "key18": "5x9XCcSfEScGwiqQ42kMNt24TeqWbjJbGkB6nRMmUuxrgwtbi6TdK1Ett5s1ZZzrfeUCmXsVAom7EC68Vu1w39Mj",
  "key19": "B6PQ57CHivRHw9agC9AUBfkKXKCKHKehYcLGzEwgAt4CfipKRUmkshe1SchL4BD5piEUBgYVZxyPZfvisDfdVDv",
  "key20": "3uVWUGgzKfThmJhoxpsjCSJ6YHfAEBChE1syN591WhQWonLw2JFr3Sz9KzZLa2a2cRdojDYWbKi5Lge8PrUDNmzD",
  "key21": "5LG5EEfGJA4rvJL9hvQq3v8xUdDdfpfLvm5ZSk8My2Wb9MRDQ6zPkYwJH99tq2xNfNJ9QCSq6ubta13jJ6rBJhqR",
  "key22": "4gPxmVDt2ZPrkHSwN4b97yrp1wEVfHqPYnSUWSTMH6zbXzc2gavoKrEkYQEJty5njWE166j1WmtY8BnnrEYu1nD8",
  "key23": "2QAPp6DZTRAMrg6hsA6b5bE3G2gWgSdMXo6nr1rbGEaFUXxV9A1hSoj3jdHi5m7eGRxy3bejZ64fjgtBW2RVcb9k",
  "key24": "4SCUgfqv91fc2BwjojRNdWHTTf1C3dASYdNTmFKAaxCCoDTac38vx1Mb2meWc21c7yPVQ9SC5jXhPbSqgS1aWFAz",
  "key25": "2S6uuNhxGrBa7YiN6RPBSzjeEpPFxjvoMBRynN39ftL77CgvKMpLVr4mueXGADnQZna8KeazVATL8R4v7vQrkWWv",
  "key26": "Jh1jYUY96sDixd9PVuAqM63ADQdZKxjam8TcHZ3L4Zio64dW7NAhv9bRSZJPLPQ5gYNDx8x25ETqMkYAi9eARcr",
  "key27": "2vpVen2YHPSoo7orWaRRE6FWQ7rRn9eHbK8zrnKqrurwsY4svKj1eR8RNTY6s3cYPqwpUascojNsdr2AR8YbZRiQ"
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
