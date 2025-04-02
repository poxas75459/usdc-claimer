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
    "53fXafJ7uSri9B8tBZLYs4n1SuFxMy9sv7zsA2PfjVKdh1VsndpNKwmYT4Y3GHxY4cgMB7Cy96R8wToShfPCy7LE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xWLAbVmpWqVfSrF9q1TxAEZYD9pYpxxbugvzziJ4uUmajneRYuzTaR3mrNQ2bPuQHaQJejGEhaaT6ADf1YXvmk6",
  "key1": "3Z7da7Eohx8H3aJVXg1JXadcpcX5YXPtqFgzE48oizT9DvEopvtF13EoiudjDgM3uUG9UU14AXaBhmU7Ffpvpeo8",
  "key2": "4GdvCGjxnquTemNfJwFzT4ZLVmhaGzXb3Enm7BEQJeqZJbkcdug3xCpm2QBcMJFijr9hX34ddWMjnwxFT88sveSc",
  "key3": "2qk9HD9fCvXLRqBHPdDzY3tT1uGKjZQ5BmNiWTN6rppkWRTwx4j1FSN7PjMfzGfpdJxT1UnS4bDUfQiuew5f94EL",
  "key4": "3kBRN7MA3L6gYPTkVa42QAwQpjgLTQC2mhpEaj3wppiDRAT5HrPi7DTm3gpcse6exrKtWYfK6PMdJU5fRPGHdSFL",
  "key5": "2c43PzuVmjUkrSpnnN1jUFDrjmc6xjMEWNBJMuZYUTC9Egm2rKk7JA2cKnwmyhmMQvocYy4D2uwEk3Ptiy6jxcFs",
  "key6": "2RkYGLSKCYk4C1iLk8a6h8oTs5rvj6sDGUKaKZhAgEJkZycQKoHkbwMsAWukVtreRd7EMLfaWgH8NaXQtKySnT9c",
  "key7": "5QK5aa5cncnnrYVhXLYdnr8HfEMnBYFC3Zn4fFQYwCjkDEADDbtezg6qnCJpzjDVWVBCyomhJc1GT3wBSoAL82MV",
  "key8": "4BWMqfHwsV95xq4wFvdEsS74g2BFV1UZzFd6PLG6JfenqmzUYF6WXFQ2qszx5iBcXhWitVP2BDk5PtEk2hYXvPYS",
  "key9": "3XT6c7zZqmGwmSna6QTJ5NZaHZbVZ9LxTPn5ishtyYp97UrB5ayTZ754Ypp4S4k897U1Hz6Ueuuu6PBVZD17F6od",
  "key10": "YCXqze2tXCu3yqEMANNxvCVKg7MEo7ucRJQHTaPRWJifDabUBLQz2ACBkDFuSvddVNdEiVAeiFzfcNrpmr788zZ",
  "key11": "3bARcwUn6wiyd2jBE1zDULBK9EbHLkJm7nCVHuZndgmUVALuWBNEW6VMukatw2Rn9DwUeLZfava3zkbWqugYqiyY",
  "key12": "54b4kghVk3nCnYTezmxpcCYXr3iavh5Eza6jemDq7T4cSthj6Mc43gtp5QiHzjRVu5KETr4TnBfbGNk7bBKXcMXB",
  "key13": "3rw7wzHNuGgGqAVSLaFk8ojySKBfvgYiPiuiPZhnEMRCyPcxQcEDbraEnPuehkVh9rpfKf9gqcVAD6WhSXNnZVuE",
  "key14": "quu11AbHAVExGwm2quL2EHDyL9jyhpLt58mJ3fetg4c13hp9YVgxHgNxLndKvwPbaC32z4qrXb5QjCsKof7dxXg",
  "key15": "2zbbFve4VQX6AR1HusSPSGWsYJUw5eLzKrbd9AByKGwc1rARVHFxmqunzVE1F1adrrXGRFVo59krtJTCsi3nC3nU",
  "key16": "4wYzRc96YzHLVMopJe2Sg8eXYaGhw74HwHMqPbmfSQU4URuFuvYfGkRttnNkUS5vxwfFhNhKyGNoqCU4C5xyNpSj",
  "key17": "4grPC8oKEAj8G1QBmBjXhmyCTec1ibo2oeJ4sMkbw5FuCmJiUFeseQ6Dn7XwiGKynTA2nGiJppVz43xtwppP8BEt",
  "key18": "67FQwgJ632iW46upiJ5SBJ8byz2eMaQibhTPQKeiKmD19p8DFnPiJAFa1Cp2HnVpdWroa77RuWZyY3yZnhq54tn8",
  "key19": "65bkiYdeMVN6f3zpoceQCXZn48B3XJV29sKzapTvY1xKwebtEMzgMAQUiT35pChyYfosiVe1jiRa2XzXQnt4uB5X",
  "key20": "5EQMMujugG1YdWGKixWZYUE2u5WkSJUEXVcDr2xsgGUZ8rAkiEWXpMoWHZWZNcfM2iGbJ6vWzDXKAiDqETxkiFWX",
  "key21": "2NQAUXqSszy48FyAmZbpk7M3dvEuQfNmgi5AciCFZ3Z3M4wFsb5GBGacRRgppjfzJdRBUy6ktNftRTwUqTZDhUHV",
  "key22": "4vXjnFV6y6SdnvBZJGHvCtm91rWYqjR1fWNxGEZejAd2zsrLsVHaGBehhwkofyMoEDzR5NKv6ePguR2XkSgWkWJ6",
  "key23": "uwUMS3i1MHuBXWuJg2amt38e8z7tBhWnmzj1qa7XCn16oe5r4n3krcwXAzxXkWGgpaA4ukGNo5a4z5ttafc2khn",
  "key24": "5NUCAMGYxXFE4tZsKd44FGN8mzSuPewbom7bmczY25mNRUep8ZMfeWbhgLSQMJBkb2WVHGkFyqA5RjAUkK6ffoK4",
  "key25": "2GhFiAmtunmEopejeRDEHuLHQRnZGZoR5qh5YKsG71Jgs96ujV1sX1ztZaND38tRVf7UqViMtA3uXDPSie93jj3S",
  "key26": "3Yz9Miu42JrzwhxrZ9Z3pTdTEjuk5RDkrB7EiNLJuNyqUR63NAUm6CKQvvVrNiKLmPo2SqfXRBrUCyYvVmHjvL7M",
  "key27": "Vos7HGmHo423sFudV4fsqaNqRL4fr3XGFauWW5T3yMSpBGs4DkEVcHAabE4A9cBBB3nM131FPKdy4afxf7hvDaE",
  "key28": "2qdk9BBZFh5cN5qtZRHaRuyDYE6YuvThYLRG5AqniU6e6vGTY5jAxf9CJ8JeqchqYF6HDPB8dHWoWWMFxyJdEdAj"
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
