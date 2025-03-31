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
    "DynQJdWGebGbwE3XBXFpuDZTVBiNXsfniTkLEy4hfNdVVx8zR9GidyR6Nmg4XGmvy2TjZxTqvEJmAarNpaMbUWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xJDZxHVkEA9twuWg7BnwqbHucYXCxWVq19fpraFHQiMD6zNhhoB6z8fwyEZnAobqSd2dqPT6KZedJSpydbENkR5",
  "key1": "2nKury5729cFbcDUYxULCxyohFEPsoxpgZcQT6xdczvwouZogE78QyivGvrAeYkuEni9CAfdv5hbaWHaTYGhaVDg",
  "key2": "649EmY8DVDAXKvJCrTMdg8j3JNm3Hwx24CjmJ2CPYD24uZBcUo2ey7gUh5GHycLhA8RJ5hfB76wW5zkkQzDUbeum",
  "key3": "3b7V25pFPBN73ptTQm5yHVPK8MdKjWKbnryMpgGNSES9ALD2aW2TmbhVvjPr4geHtkMh6N4cKQ9yR6hGYjopQ7xq",
  "key4": "3zHCQ7EQEGCHz9ZjxSjFnXtguMa3254KVsh27TuG4N6ivWyLzt9uggkEDxCCAYvgZZFEJcJTVmVkPHdP8dFs4BPj",
  "key5": "v6AuCAPGUtV8mCTJDsJqRW4PoBToKeMdywFB3sMTd5EP7sgG8rvxp1gGYWZEt77bpYnjnkcCxphDb2rMJFyGbRe",
  "key6": "3PebgDC9MxvnFCoVAL6ZK7RAQzRBtjiNdm3rnCkg72touWG3qhTdxgKSMAcUYWoBoG9mWBqB2SDmLBXygSoNoxnL",
  "key7": "3eQPgc2qd3giUTr5m7EeqHgFcScf7u4KrtVb3CEVUXax3NfxtDEZ1Smt9RoE4SBogsg882j6DjF4ewCPSm9Jd18a",
  "key8": "vuzztBCCY8JqR9w4ELcukD6rNZDKMgTLFkMStvvTgZDcY59ZLDLm6Mqx9V4PsmrHzvwkohxWvnQ5MpzeeeCbYCk",
  "key9": "31ASxKu9SvWc9vAVVNHi69NsKhB7MpeKzip6FNSAfQqhVtC9KvCs57dXK7gFvnyFgr6kThifGvnP2Z5YizMs2Lc7",
  "key10": "4qYLLtiSxn7QfxFtatZPtku3QaMphv8JBT9GRriDZBz3ubVdXbSbzz7tBuobrtu6JBbHuZbSUpc8EnWgbyUReBnp",
  "key11": "3qvPVLh2sw8eFuyFjbWcGeoMZ6F5qput6dtDfw89nNYsDu5tfdkQn6mQuZgcqyinagtcxBHxhwFpNy9hjTtLmvbH",
  "key12": "2sMRTvKwgddCKun4k7vHhPjVAc9ayNkC5VGcuv5dHuGoYs87ptRGcXWoBiXY7L4AqR8Szt137qWNNSbKG9g6tpqn",
  "key13": "8hnBLxqjLncWutdjwAwRgbZLiX8W7kUrH1fwErUKG8ApoDshbkmnitP6S6ye93HcQwZN3HGFszwiVSWYuYWviW3",
  "key14": "3WmKXf3r6uxQkphSA62XmNXZRfZ5Hfy5mntJYRwKEaDdZubWFEi7JL42V6Z2B94tw9ncHjPdejUG7oxsSep5v9S7",
  "key15": "3KpTin64qaYdfpfC2Wp1shF2RJ3msoKTeS7DitP2uwqREeUWGuHLdjed6jotq1485BMxdhDbTNxvcCcFKTeC2WCp",
  "key16": "5EBqCStPh6APbAFvuYCw4wVNE4gYiL8QnbcB62LzhtLkJP7HX7rboEaJaKzxVVXA95YeCsf5chGKBNCALZRBWc6B",
  "key17": "2jZ4r1v9oiXJK9cd91WFvoTWdBqmiG9U6g1FZ2x9BLv4pbUcE6aMfW84eGVJ7PTVa1j2uMqNwhWsPy6sXTwBFED5",
  "key18": "2YcaLmhpb9NeVkkb1o64Wdvyop69s7xUK9YJcHf3ikyZqYCsWgFGJs1p39nZHhamMBcUTtsWSDqjW9wnE1wpQ8p4",
  "key19": "4zSBaDKekqhhCw9mRGgUvE2JfVJ7QhwQWMR2qUwLrBSXSds56ZMKoEMrBFXk4XPccF68Kj5SkuKfHJ5ibEsT6pXi",
  "key20": "4T1TBsfgzTPBoKARwLSrjR8ixML1SsUtPpLbuWRLWP2JAyu13AZjcvCa3BTKmW1sEuzWyMovM9eGj1qawPi2DEt1",
  "key21": "3GYrMY4E2gYiNZVuC9XBCdhh6n4VjUe5eFd9fKYJU2APA7ALeLNDdC9Z3CD6RYMnxwoLdqzGVxjTTrgktvkzvLVE",
  "key22": "4igQuuXy7i63dU7xJ5VGgz7oPfDYWtcwxWtjyFdHWHwVDqeTR2orE2TUSXnB5GnFSWeNWmuDcxojAvJ82JXBtR9m",
  "key23": "YxKYgpALfqXromtrzf4Hj6MmZushVD7reiPxMykoDcnhhDyWqRhmZ7PhpxYVU5EG9wcxZDvVnmYNiQxZx1fdfm1",
  "key24": "4nVz5hSo78tfYnHWj2zsMgyXMWmnkad1i1a8JJK4FZ6MDLKg7X5MQ2hpZHyBzc5Ai4vEnnUqQVwu5or6oU8rQCki",
  "key25": "4wBSW9akToS1U9FaxxKbFi1ZGsZZoRdt78EuVVTEoH8drZAEyxbyV3ensnmSz6ubrxW73C7MXxvoLfnBw6uoh3Su",
  "key26": "4Z3NP4CyXa8BYq4zy747xfi2mKHYMSxiS96Be3SUhT4xXFwB8LWuyuHMz44PjUbuL9o3kW4hVJc9dn9fRdhAobwA",
  "key27": "P1HWjRFU5ueNBmGnURmzd4WXRnzTiuNisQBqtL4HcDNhFdQfepZnyYnermufAZv3wue98rYrFGhCx4Gtxw7Edyq",
  "key28": "5HtsfavX2yc4NfsZbufGN3pQW5sZG1oBsBibkhJNqmuQUTfiAxNqhkjWrM3EDX2gvdRmRJqPmuq2tKoVz2wNZdce",
  "key29": "4gMah6oT9AqcyCXgXZTwn7eLzyjQY366kqDVkd7DJPNN1cD4Doy1Qc92gBtRSdRXRhKWsEPPxSboQyR7SHDgKai2"
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
