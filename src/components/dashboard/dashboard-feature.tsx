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
    "4UTRBfvgof4TBYv4VQt6DQ59Tp7e6qVvbM2VRjoe4ynE2sMbPgjQGbaEUKC7Zb6ku5bpE46VP9u8AJWJNpDigKnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BzNLR4jsXF9f53ZaLqiqHa65KnAcjBVGZz4SjSsVvuy4xCQ7es6bjc13JVxbDb5yvbLSx3rCTPbmt9LvpJW7Yt",
  "key1": "2v7NWCcS6JYWtDd4TGFBJwDSo1Bfu3LwUnggVdv8XGaAaQAXU9Nk3w1rgSKqzMpM3yFS2QopcbofV9Q5aGK7QUxF",
  "key2": "2V1TH5vkjMjZ4Qu2hBhmsYYVCo364EbCBf98av8zpGjH4b4qRsNFjXy5LVmcEeoRvDTAnBpfnv6zrycZp38t2Wvo",
  "key3": "59PvFdiCpbeJUUTXVYw4Ph8k6SPDnxc7HCi7AkgZfv6i3ac2jxvdGcXeKX4PkokYUgsY92MTgUVB9KwLYrYzxFSY",
  "key4": "5YPSmLqWPqsnSmkeQ5inf46XW4P8MFczx66G9gar2VSGUSynBhGoFDvpoqrHFNeF9vcdtJAbrxGEVJ59mm3qdziF",
  "key5": "5p4qrEMaECoRMGEe2nDqm7D5Ux2g4htkZQSr3yfSABd7JNB2DE8fS4pAAN2vfCStLLgAVxkLj2f4bD5qZvDJRTLh",
  "key6": "3R3KEjmhHGE5vBxYpTumregwEGF2YMzQ2Eja6mHP3NaTJV5u8uMVxFGugf7QHoCf2iNu5oEf2rB5WGbuf5vUm7Nh",
  "key7": "5ASMWg1JvcfCuPjtp8Zj5U88P1vkYctgF6QrdRdQ6nwhetCzTY3XrPtc83JWgh6sXd5AYkun8XxRQXtJPYdR5JFJ",
  "key8": "32J5kS3cFqebLP9aZ7qhUqAJe4wwGB44xCMBoRHWXYhEGj24kgYPKsrLyAMeEsagbgjapGmMT4ShyCqEpUL7cKaQ",
  "key9": "3oqFVn9fUQGxrDsKCFSDR13r71qHgLEKJmEt9e3hp4TzgUQgohDKRkhAXpTGRgqt7nF7JEhm7WmYLbxXp4QwxyNA",
  "key10": "27Z38ZQV7At4BjRbx8YtsFbaFaSLZiiBihKGy8NncSkZM2gDT65pkFP4V8kpLo5mHUTF3hDvK2HZqvj3kt5trGbB",
  "key11": "2fPysFPDBd8owNqX7BzeerdbKL53RJyjAkCkvK2ZGm2eD9fdhM7DNqR3FkdPWEFCJAuHiqaF4irpLw8s96W8YPGi",
  "key12": "1bbxSnxEhQZSWEqSuCTYRBbP1ehTXuBJWtq9T3N2JAznwSY17uTw8g15wSB58knWcdSR6h5ykBFAMGsh6WKZwwM",
  "key13": "5aSa5TcsehaTY2AELXmhRMyEwFxrAwxhhCsCEDw7p9DdxZ33W6kyx8ATSasArB9d5a48u7nWuBNmMn6XXDzE3n3H",
  "key14": "8j538XWjv7STrtxmL4dZtX8iKkJxvST7F3xg9i8swbELk76JTwz2AtMJHxtXyxs5UcivwCWN5iDRTzn4oXzWLR6",
  "key15": "26EsUwm5c8UTMmqt739sfjZRN1ArCRCAucbp2ggPfqDrgz7BYpzfhUTBu9nLs2rd4AtceiCUx63Nym4hRvnG5Z8H",
  "key16": "zg1RKSvoZsEyYSdVRWRgfqsQCCszsSUfqPw2MhNw2cDTR6fbDqjYTt9P14F72Bi2pZWAomiX5US7nrpigU6wTNh",
  "key17": "4aSrXnB8Fam98jo2REmR3tqKK442bazDpX9eZyX481GiEktAaeXfGRRe4VQih1yYeB8pptB8gPiVdiNqSN5hwQMg",
  "key18": "67B4ZZwCATekAwpnbFMXZBY2kacwQh6roPgFrqZG5d95mh151DefjhHts8rP4wiXQkJzyhSYJfSEZSjdiq7QTxgN",
  "key19": "455HGViyYzbGyrMHTJ3BWpC6WSeCqxQ98RmfvE9LTN9S5amWVY7PLHVGooXXfHcVs3AVENxiUBiD54M1W6Vj6uiV",
  "key20": "4NveUyjuYJgDLrmGmjX3zR2djRDCL1QEnLVCacNWKJwHv66cVwK84jJNVkPrPsx78zy9npMN4uwSHJT4jE94HtCE",
  "key21": "2j1gW9oAkPhr2YFxrFuv4UBjnLUceBApvWFmF3EcZ6UHLQ9kJcc31K6x6g936wsJvhrUr9oWyB99bLPPjebpU55",
  "key22": "5NKCK2TjjYGhnzWwaN9S1KKLfw2sUvgxCDq6BLdr4xtUZVozXfTwmDAvPJVf9VQzwkeqbiHmKUMfDyZ6McWYehx9",
  "key23": "3Erev3MjsRBybtjdbtEqCyngPBFf8aucnC2gHrRmjf5RsinNDCM6cGYovV5SNDLrAVB9eYtuStE8jmLPEyFodtF6",
  "key24": "3abeGxkXcdHQG2aSLQiJrCjdBWPhwHd63658WmepxH5SLQmMHnUN1KvpvF9oP1yorbgp39chboAdFhCB2RTJKt6J"
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
