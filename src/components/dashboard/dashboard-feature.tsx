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
    "5wewXFfYcEXJQWuxVTq3X62c7pLXC3smtYsrb53chagmbZ2juDzW5HbBN1qCUPEjXtNHjLPNLuacWTGrgXPBMRNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fhBSuwyytwR1Us3nkuzffnzApfY5SAW1hwDv7LugpfLrrSxNyzKkRn4nmU4WF7eHZT3seREXgGBvX6BxjBH8QNF",
  "key1": "5mgSvKvwVu9HRGsZbZRynx1JRy8pgYMdzAh3MLuAFBCiZEgUvguStDrj41ScRwvtiGbXkKM8Uc64v7rcgFHrCFpM",
  "key2": "s2ZXfjDppKAxzLMevqSsWYfaoKJprizgeYH9xzhoUhjE27pXg7PRxffGkmhQN1H9CNei8jsRe5jrHddQB21tBbL",
  "key3": "23Bmi59t2iVXw6x8aDpm5mrPtijh7Gk8WMwjYHAbAWHn9S9dWLWajy4CVcmauw3LV2e9dsiuCLXmqit9b22AY4Li",
  "key4": "Huvn7Z44BDna6LDqtYYWPPpXk5ZuK3N7rXUworvmzZp7uvXSuVFJHt3c3yQgLknyUEfwThCTbdiYvKZcFJ3JMRM",
  "key5": "22b4rq6RzuidGTc3bKdDYTA2YkzZ91sBcjnFkSsdD9VCMaoUfxk67HgKtB33M1tyotAYc4mtqSo8mUqvVj9SRLXr",
  "key6": "3Aneuj5TnFN1rohsQjJiVT5e5N53Dd2ngSwja4yT3dFvYwML1BGeNZyh5uyxj78VncncvCBzcryznfmwPdvnvXvW",
  "key7": "3ogp7MefQPGx4h2zrcpUN85NT8gQ2xyhoREAeG42Gr1opQkjTTkCxfoMcVLXFV4nKkcVEn1EAaehnhsrfaEsQagf",
  "key8": "3cVdTZYyCodMSEmyAFDBuqUHVAhnsegKicuu8yQzHC4hWaFdAFpnfBmpaE4UBmE8dtjNWCwwrTxqpe3REnNADkzJ",
  "key9": "2rvUPrjUBu24fwYu2q7jZrVSYPF5grezHtMrC9m4d7NuHPp2uK94bx7xG3LF8zB5NYxJHqctePfrTU2xrpeFgc4Y",
  "key10": "2XZ9BHu4FczgkVZYd6UgE4UrKp5tJVjKGLU7VCNURVoUnPwJdmSVJXegCGuNpeXz2k6QZTLarXmFpwtykz9YsbYt",
  "key11": "7acvLV4fNFKroLEg1SEDHBmbvGzJVYYxvPpLFjHaskQM9Fa7JoMuMMEDyaHkn6zaoGwmmfGQ32W1cCbQWUTpaeb",
  "key12": "FWZupu5djntYEB1gXYs41CEmyGed4awj3JqvxRMLJP4LzCQP2LXGyoN8NmorVgZcuJD61o3TxwkHi8KvC6T4pBK",
  "key13": "5yLRF7Efktzzyf1xkhtj5Yver5b4MgaBEtBpmvXiB3JqkGx61M6Nn5ikmYQYPeS86zKiWwhvrbUAXkDGzA81iB4Y",
  "key14": "58DKx1ajbS9zuV7Ctxct6ZdQXBaAi4eGFhQQZ3pgueskCNWkX2DW4vBMgzpcVsdo1Q2Xpq2wbpWCVcdyUcGkvGvb",
  "key15": "2guWkX2Lfj93nHRNJ6uo4ZdLyjscMJ39o14EWGmCiMA84e88ebEMXohHCdQzpsWJj4oUoVqD5fB2S7FgrejJUx3E",
  "key16": "4LUvtU5FiMwYzZ3akeqW3rmvSuSoVNTLTs9RfzQ9TZf9DLutWwSRzhtHGsJ71D4KVvLsUiNA7jSUcPM8VVBFkeuF",
  "key17": "2ivicZMYJ8EJcsgBRMBHVWDWJihFV2GY31C4F6ei29HtoPXi95AE91oVUBfW6E3nqXXwGPMyLL46h22Hg1HUwyKD",
  "key18": "2Wj6KLJUj9t4TcnvSCyQ3d18nBWksH987HPHr4EhaVGsFou8XSUnqEsysq8BZAFSxxqzw2opfJG4VjLHo496i1DQ",
  "key19": "5JB6dbPxPTH73EEtEw9Ca1FQFpnfE5bsSF4Eb7s6c5QTbx3HLrKDmbA381e9ZTHc3mHKrzyFbcQaoASzvrQf8crg",
  "key20": "3u3T9gpZfjDidM4VQhzEu5abLywuXe3KJZjwqkUWrepXKuu6fhr8YEbRDP5nsJnVSNQWgKiJUiMji6jXAGzmkXPv",
  "key21": "5XFZuU72mUSGnoLqHyRb66vdMm8ULwyJGXaFovRaKSabHGhxh4fk8U7xkNSCML2esDxxUoxBtCyDPKQUm3Pgxsq2",
  "key22": "5YrtP6wC6XPBRGwtEwhde1tnei92EqS4mEvG5BXZ8RyNGrLthjzK6CMD6W4mgfkoUjDwTZpDfiknmUQem3S78cfw",
  "key23": "gZYTcPw3uvHL52JM7vn9TCXCi3SmF2d1kyJYUXeEieiPVxTnLgU2Dw9FeiayzuPj6SHYGsDzJPnG246Qv5NHrGq",
  "key24": "2a18dZWxxB5YNuink1fyqvYkBiegRwbWjHkqpbxRxNZMpdro6rr8L96BqWjJYgFQ4GM31D1bWC2z2iLs37Fs1yCm"
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
