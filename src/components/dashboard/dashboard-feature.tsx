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
    "2q3oDv4MFGZeXo5dcF3sAhQcfY5R4Uu5Lz6h3wwdjTs8pwA3e8SyMukFnEVrQcEf5fAiZR6fNfHkRd3qhwfWvEKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29LPHDq4kVtBzrMabDbwhTThrND6GHNZ8NxJ7NXauipUyWNZqNs9Kwebb5CrHj9zejau5pcQ9uUQAAy3djwzC5um",
  "key1": "2iw24wNL7hKGYhcjtoxRboorvBihRLs2DQVBKMS4NKk8NeMZuSoHAYYFUUBaPAYJe5eomUvaQ31HHy8spUPjHkit",
  "key2": "3wNWmSCDM47uWWk9APeFvDZXB2mFujZbhTYpmQAbKDoSZ8acJbrcz58JKP3hiDjGCMyEkAH52oadEfMVq7wKfhZa",
  "key3": "4dDTZe1Y4Fqky8vokqkY6ZMPGannumPmE32rtJ6zJQAHx6KLKKiEEUP5D1nAgXQQTFvXfwK3JbYFEU5yxsJTUan9",
  "key4": "4YmdtZhTaK5h4F9mKYEnEBxnuFtzKCyh3LwpXCMEEfAGYHNj3QRDE7sdgiqvUYKY6MAcebSMqCpaycamGL5DePFx",
  "key5": "3w93Md3vmQanzwNorvSL4HMQP2bfoh4mJporh3Z6PBHkbYUhqVcm7bC4beEqp3XK7HV34xHyL2xyaFeWjjy4UdWD",
  "key6": "2YHqwmJWcEbjwE72p8zxw6Q9avdztQ6CBTGFXB1kPpfc7YivMSqPvCJsjhGHHwKPLBfMuUafdhmS8U9kocyqjraf",
  "key7": "5jE4HC9xtZV2iPRdtMqVYqfqvTh6ivMPjvo2Tb72k5sLz4HrWJ2N2sb3hVFYehVodewhUbkwvLCdwC2pEBXnfLmv",
  "key8": "53udwhU2PoKjszJKVUQY8mwDtd4CKLWkATxUfXhFSfMmXCt84Uyrw7qjPinJaeSNwfSiModXswJyKWxsSmBWm3a",
  "key9": "HjG6prgThjNDoULrugt7FaQFyAyWU5TqhQRHYBcPQiHscRdBfTAhon89URbXXcrCDq2tdL7Vft4BmEuRGGW53xy",
  "key10": "2ArddzqKJ9wmbCcH63mRnb8rq8zvdDMpqe9uJsVV8LRurdHdnAY9Evj3VQwaWyaKh5QvCjb9b97XyRoLJqPgrpjD",
  "key11": "4WRCAgWFE9U1673SXERvktoYhyKtwaJSY9oXUgEP3p4MSAYcXLFm5HrSN8cvfD3BZ2wyDaAHxR6RVw4KjY65iYDj",
  "key12": "5U2a63zT1VaG4Eh7rypvPXZAepooCtzj47Rr8L99vjWabJhcNPbcMSDXJrGCrTEFLojm9tfBc5xP2PbNRmqy4nL9",
  "key13": "4kA3zRNumjbCSNjdbLZqUNTwyWNwT559jw7WmhPeizqceFeiSXcbkgrDtbLfV2Gd5t92JhYmuVi41DxxmQMbm8Ha",
  "key14": "38vekodXymLxnpJYNUvxZeVi54xnC1zxTQrtf3YQzP8bg4H8YVQeAdFM5LmEZQSt6bK4W8tEHg8qttbanffQNmsk",
  "key15": "5ddrSE3VACF18SCZsrQUyBeqQmskYUqJqDRuRaHDFWRxhRHcy3XkA8va3kw2YAB77F628viXwemoacKnvftywnqG",
  "key16": "4UUv3AqAirtUJN5uniBW8uY4o9GXdQuhj6CTxMTK1UAVS6CJJ2DDmQ3oLjs1AZ5ZuDg5DE8bKin8sRVH4CcmUGKD",
  "key17": "BGU5g4Qe5h5v9pTeXNZ3zjGQSEewhw72NtSazBeLtj4XDXJVUVQYcyTjCkb3oTGLee2ZwgPU7ZtR8WnQetBoTUL",
  "key18": "5AByj8YEDeKih7g3isAsi2HBMdUm725ZySWV7FK92a3JBuYqcdVW1g3JamvsZPqUCFHZYPhY5FJJMzrwdLvTwNs3",
  "key19": "4CzevktRvqwERxSBTj2Rt2bWpXQtZisGkP1unVyybZxrtE8APWC76QawLShmdT4wR9HAi8BW2t4QqpJzNKX8UGBG",
  "key20": "vAQmqm36ENJ16v9tJFoVKJawh4ZRZiPjs4XmZKw999TQRazpSD1HgW1yhQY6vBy9AtLX1QvDFqfkH4Zq4mYgYM9",
  "key21": "4mStk9tpjpZExgFJryeL3bmv7cZSzv2Qsm3HxJ4j64jAQLRRgpszunc9AeSiukdpom2qVotZh1iHgziRJShuNeuw",
  "key22": "8mUTZDiR7Pk5aqq51z2Z1YeLEejpMiotheUBt62mdbKcqk6ddvfNDTbAzY68LmFWNWSEKsPVewW5tRNbVMu7NQt",
  "key23": "xLTbyQvv2Hf2Nqn62jPLom553GR83s4jq2TWJTpyEBpg6saKPMK7hTTMQLNfAaUKtEaENLXhCCmsdRuWMpa1Htb",
  "key24": "3ARPi864VpjB3siGuVysFDwM9PVaqd3sqzzJMZRvCbdm219mq8JahtJNrsmvD97cPKxWgvLFRXpeTocx74YFdh5x"
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
