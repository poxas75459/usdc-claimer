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
    "3yh3f6uGM7WK9Cr1ynpwDsmzBqpAXrVEFJX5GyuRwm3aNdteJ7NoEq1mKzd69Y8hWAZn4UKPV68uoLiswaMWE5LB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s6xJjPGJfvv1eKo2AwdBBDr888CmQTiENyNPfMcF8zTtjwDxBcp3LcAqtk9KxErwxxxNyC6nt2PAWhkq6PL7yPM",
  "key1": "48U8aEPJMu3QyTfiCndkzGjBMZY6Bc4x2xYYX6vF5htMi2VGzXiRxXwg6PtZhBM7otNHKX9fV4e3JrpDvecA5pBd",
  "key2": "4jSef81WxyUjy2UE6jpRFkPuahSkWDxQrgPVmBpcJJqERLSYTQvEQ7v2NKoSchxpZ7swGNPAt8xCXbkRUTiiYKq6",
  "key3": "5Eaa611MddWxVC6AoeepkysmpJZBAR2qZazpEavxnptabD4EiRAxD94HVZEtuT2WR5SRcYpQxHKQCGoJZFGba5XC",
  "key4": "4MYFBZFut5eCFLfZmNGqA7NWdYssXXiZfqcUGX3J7UumaieET6psK2bdnGZY4JCkvSx971AoJvVSSLhg6mQNonSv",
  "key5": "Sft87dqR5hepFfN91CresHfNv1iuDrq3t4np2xbV9wkGRja9YZrHJ4aRv1YvsfUR9aDM5mUVkvkTNFVAJi6y9zk",
  "key6": "aG5GAD9jqMiRnbb2DnhRd6TByshg3WbTzXi2zELCZDzLieZT9T3H2SyNck7yLrPEFtukTUmZJRqeuxGXfc3pLsj",
  "key7": "411pbQY68MLrGECd1VyG94RiHZXuAzwnTrA2fezJ6Apx82GRqUEE6rTQCmy5VT1Eh4b1V1dkkVSFiAGjqV6Htnfw",
  "key8": "4v6L9V9x3V2emjjgtymjtqmhE8rYhgRfTJHnTo3d5EPXJjKW9Y7yj7ykBs6ui6DXLm99LsvaA6UvMArymmS9CLNS",
  "key9": "yPtzwcZ4aExzGpsNFHpfE15fjM9QcwezT6x4LA3BwNTWr7Smp2Mrq3jN6uW32TvnUiDnSMVp91cx41zBQQaUhuT",
  "key10": "2QZQJ7QQmoQiJPcy6LK2K2TJeEno5HGdeL2pNdz7za4ALsv7dB7kJvBfuSYkGTb6NsSBtsQgTuLzUQPwHXjMBDS3",
  "key11": "4ZwXdSip6skCDCsDmBa2y8uxZQxvwNmeoUKUUmV1nWpncFM9gex5T9kQ4byympUpqmsKGRNDLwnSSze5WzT56VKR",
  "key12": "5m4tqHGhgh2mgUbuoeAbWAWo3AHAcfSDoTiJywWqDc7AFTdiSbMvKpJ4RPYt6ZWgh1ZciLjqrmr7irxBMNw97aAx",
  "key13": "2STJd4iaBG48T6EYg2pRMeaigScojyTAkJoAqeDeqdpXT9wXiAyQvkbJ2GBYonKego4oW4QiFUUoEX44RTEY2dBH",
  "key14": "3c3hWqYRZHNWCijg8hnjqxAK72xfTfHSU8LR41ggYfS7QZ5PAzRZjq5DGZLAgtJCJcgJDWtvndeWmHqkX5nC3FLJ",
  "key15": "4nf3pT1mLU3VgrTxXhvXXCJdzqAbNPZDZufUS7ajrczqVot3n6kvXNTC4qZzTjjRapPRur64mUfVdFdiSvKkLWpV",
  "key16": "5Fxeru9cci498P2Yy4gcvTeVid3fEZdxcSudvJPT4EC99pBjjxcbpTbKeZoFi27mMZHxCAoXecufvZnLZN9w3wkS",
  "key17": "dSUJCCD6qpRdpAjsRuc4ShRh9aSMEfQ8BpRBTYYeGgCikaivbT5iYKogfDyb3GR68J11BT4fLTxPe5ARkuDvBbG",
  "key18": "5RgLVDr8D1LVDs1exHsxcN17S6AdTcfsUscwqGrzdunqgRf5VB7jvDafMVVF9gjzapeChS2QahQa3aBLJL5cjToH",
  "key19": "5GiEL3eN6ZcmyFG2eKHWBumPqjpGvTtu7wa5LA7ormJ8JJuXUnyQx4kESnEcGv3aQxiKBJoMAjYWGnjtpF3extmB",
  "key20": "3RoGkkTL9z3H69Ud9eqd1VB2BmSnGkcMy1nMP6vTN4odNEsLJY6FxfxWPb6zsEnHkFatM26o8RwPH499A7YVVAsP",
  "key21": "5HJ2fgVj1MSsyty1BViNKZZpZPsXr5VjH8V3q51vx3eizcUh5cmtxQ3cM9cnPaGZXHyaWBTg7vEHmyPDhVMS7i9o",
  "key22": "SbP4p4NkZHjxCt4LBhLK5kPTks4hgBXs7ngjVQxH5uC6XHzeZv6WfwmsZLXJXEMhkWDNNmBtgTSUU1qtoz1dt3V",
  "key23": "3M8QPvhrohhPFvdkxiWE7PmLQLxEeURp3vQEdrp7mfReMfLm3sAAaxwA2WmD5DCn9Kp13yDCndCg7F9Q9XxQfHsm",
  "key24": "3k5nq9RBv1sv7jEHuhH8EJCNW9wEjEnW4Lc5bp3FUgjfaPXBkZeSrtwTEXfrAF1cSZPChE3d73CkdaoNU55bqMLB",
  "key25": "65gjdC3Bb817SYfvfZ6tqeZnKXG6bgpdNvqN1FV27d8amHWRFR7L1UGGzXVLDwujfkSxeChU4227uuR19gX8Rk3B",
  "key26": "2EkaDNLecdhaYmecbH1yYE8b1FPuuQtExQX1zZ2S9AaM5Dcyif6WnkkhgYT3JgB4ns2ebjiMRBPzcwizEzQ3dtTs",
  "key27": "muovuhjqwa8kfdg5EbFsmtwM87XybShPMt7es7hSFGk4Uyou3C8CdbNSrVHZXpcakfjBof2EdpWoaWWvNisWRyU",
  "key28": "4RDC3WRPzeMQ5F6YRkqCy5Hhdj3akDYeRBL1YbagLQiEQPPFkbJov8z8LbrVVSSjBshzR94TBVXEaPYxW15YdDUj",
  "key29": "Tz2h6DdE7fydf5KGpcs9wEnFuintBHQCjN5vErcw1rgmQ7dtPF8u5AtfFXao85vfW6Pq9J8JNdCMgZn6ge9hbRb",
  "key30": "5ihkrS2MZtJDZfB7aa1Ln8U31MoZEwoEZ1fHqmbPmVfye83VBA2pR7JkFz76khrBK5Va1miveghH31gJc4fZZscx",
  "key31": "MFjPeBreJYyjqGQJQNuqA16ke6oKhfc3xw7CssB5RY9tVc3hZ4F6VVV5g7pCp58rL7HfYsb3XUwKYjPiwzYbbKW"
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
