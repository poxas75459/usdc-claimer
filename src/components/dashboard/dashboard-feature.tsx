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
    "DpRBKpCbrDJEv7uEwu6Ss6Hi6RKAENKL1Pa3tQqdBxFU7gHiQKa33RLYQZQA2jts4Z6NKVFCwpNCtdE87kWCjTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g9gEYCoDUECPBTp5Sm8J8xJGQvG9biAg9FEk17KJHYZ6H4CjRbWJ4iV1xdyeByLUHv9CrmUNnPRPfvydc9zD23e",
  "key1": "3bYcDsxM7qJLDqfsQbR9UNJs2QQSiKTMYGJfnbbRjzG7e3N3ySw8NdVhsNidLQu1uAE5nv2mguNKDKcBMv9cvGSD",
  "key2": "5ZDXfMTfNuLCpbayQbCFDNme2Ldk4L1CBfwt2bqrqSVbarGGGKzNC46vto2FcWne37AWApZ6pWqrfVaeP981K24J",
  "key3": "43ZVdykViaYYr5k6BfEhNwfCRLstbvKjYjeJnF7iTBzyuZS6LCvLZH2mmAh958N8oxtLTebSBSywJfT1CYK89von",
  "key4": "Nb4ejMQSfAfcyVRKMavwi5MyTtun8RpD2EipGEFtaZNauGsG9QQSTUARrje5RVyGBXVsvk967BGG5iwWxsPiCqF",
  "key5": "2fXJRVeyPx5KtSES2fWkF3auKV3H9RKrCLfP9XyJvJGA93fDKDrj6Co86JZG2afQjCtYJzDidv9ozEj25BcumXDU",
  "key6": "3jh1tLxbiwme2F9CwNkKyUGf5EqKTNS87zRowru7StYwoC4D3HucRq5RWNv55DjKEfPDMAKYZKBHvhQJMpGs3Kvn",
  "key7": "4gu7wAAAFitr7pKdGeJmhHzezGQDZbXjfFjvTFjx7wdaE6qwvi9sKWfT2rWyWZnD8BKVszQNJxzPrrLUiw9AcXBV",
  "key8": "3jdSHcaFhNS94gZNHZFJ3n8hraZTSyhNaSxzKTinJichycY4noc7pUVKrV6eLiKfRn2TJTSRvfqbFnco4EcvNRnU",
  "key9": "65mR44AQZUpfsqmz1SXadsekWvn8ppqyAVGUU3zVfKQKpTA2aBZyBdVS4m6Jv76YskmmsSzUKpdy47Qn1whJG6X6",
  "key10": "57rBQpHHKPU8pAibxMEc13H2wDoBE3gbqYn47XtW6EqBM8aw1xBd5vgg3XJPCMhm53ccULcQaWB1aD5LgKmutTij",
  "key11": "5aq7Ef4RkujB6LjUZgdNUK9Xa2zD4nYrpghCtMdbpQj9Nu8ZQf4EKhbWpmdp3hnS6oCAiABhB64DzG1ikocBqr8V",
  "key12": "2ceXNiNctdZwQ1LSrRsujd2qnbzKXHR3gCzR9DceKyuL37WDPwD9vU2LRKxiNdDD9jJorRfvBc75ugsRVvUDTjsu",
  "key13": "5jRPhRBpvBkjATX5cJayGZPuNnZYJeKwMsy3K2ucKa3fmm7APh3N4K4ind3CffZdaLfvCL5zSxfgsLRrWuPx7ChH",
  "key14": "5JmLLBbDnAYkWmhyr57bYgXpK5SPgCnVqpzfGEe9dmXdeSRixtviiBiwpeKRmaCfMtDvo846JkhQRcUUG6qQ5EqD",
  "key15": "58XvtHcZduQvQ2CWmuS7XbeFgZrrrQjeFzY5ikCNo3vhnX8TDoMHbW2bnoZLMgpjp6xHvhwT4TwUXX6QNoTF7Js4",
  "key16": "eAUksChF4HPXqWrd1rY1Sikvz7tpmbBShatQEKaKjxHLUjacq9tdy7g1rnCkKjXobMgion25HVQkDD6KcCTXmZK",
  "key17": "4h3U28EzQm9a3NzyuGeXEi9JVkYt9M7kp9cswg9MFDJ9gxEyYhfTcpnLAr7kAZpXY7e9G8NkCsFXtUsPoVmxPbUs",
  "key18": "3ZZVFzho3DxZDvYtabS1UWJKuq4FUs6LVRpGMDPohZPLYXk3RNKkd93rPaf6MK8HrXtSgqcsui6brMKL9p59eH9Z",
  "key19": "4BWbA6ooNXgGDaXGStZTuNnWJyQM1255RUjAyX5HYg3WceCurmQCdsEBV3bWeZYoQ83Cw9RPUvGgqPzTmBN6Fhs9",
  "key20": "3QdQxyiiB4FAeCvwLUfD2aCPC6LpcfFy8dgDdKcG79JfkG7xpWTeQaHVdUaA58MuDMWyTHDCnLX2C2eP7gUSMPPa",
  "key21": "BgRKbUBEPkjzDFiUdEdpFqoMu85JnSy9kAPYjaJktSs4aEJmawcsJYpcVoqZZaMemSh1dJUpPg69Hv2KwK2DXoG",
  "key22": "5sqSqgeWTxA4wytuD4etHeY4GspHAG3fBhv8iyBDM9zR2aibourhFztbcRGLKk2QXJsaWGhceaFMxLGaSb82mSME",
  "key23": "5puXKU1VDeqhpgL9KWDyuithoKHMNautMNSrVFUnq83fupbJg9ynrAWLMMYBmkkAgqhTMqNSFQdYqeTGRzW88HMz",
  "key24": "3N8fXvjVjYPoLnW1Bq3x7TGF1KSxPm9ja8MJajG8KVNRYwTpR9rnGgKA9tKPZVac8RNErWKcZdvcwfMV6UGCL88Q",
  "key25": "4ALQTe71NA1bXZKw2WQNymQuSagyqhkFe147EFBdAThFCZhUUiuxwZ6McmZedrX284By52vLaVwXxokBuef5dkUD",
  "key26": "3m9dqx4QMepM7hYftsCF6rhsnvCZmgbNTUAtai4t19TfLx3QAWg5Yd57anKkRaNxGmBk3FUwxaMMQQvotJs853gL",
  "key27": "2yfsnGhCXcvtbGtNHfMN9q9VNeD8VNsLQgNZ8xMMdCSLARKw95tWuVvFAukhqQgdBodNUizXPhhW9wZzutFZGYPP",
  "key28": "1kppxvhBbR5brKPgtmu6tGZFM2t7byETojv8UXuMApMpVXamyS2CiQoJzUe25ADWBuYKb2SS8qKLWqus2VPeLBk",
  "key29": "54SZwrV9WeFK6w5judNff6MhDWSmysh9bRJPiZj6rjdpmq8nychTQRmMF1T9ESSZMV73UvUZXmWzk64EWfKAPsxu",
  "key30": "2Tk1awxeZrxdQhrQaCPcQPDW4s93VGLE7Z8quDEn6xa3z7RyBEYRNuVPdXTD1NhgBdPQ6soHVz4a3kvfVD7oiKmw",
  "key31": "5bw4VmSv5RDg6Re46pWUNd1WV6jVgfTqpKKsVsRaUQccNqXEZFspZecQKUiCbRE9zQUFrKfrE5HDZhKaW518g7NR",
  "key32": "5uhrSLAFFmTcv2VL1An4pSomduiWXNH9JJsCLaM38YCUPb9ed92apSaTPvfbu7ztbfjmNcbBXVW32ECoEASDjZJN",
  "key33": "ad9VhrqtDFpvjC3sPrGgJB3SsvbMuiZWnyEUcd88z4JPJvpbZfYBH26ZuHHGH768UDGF5WNPcrdHgYFDhSrX5XT",
  "key34": "4V2atiaDZw5Co8gQzaQNnpWgH1ikubNRBa95sMdg6EkRDDN9PJ2eADb5wQDdwJxqC3A9xnq2PJVZfRNdwYNnfrjS",
  "key35": "3b9NBaxGzwAjZhcoBa3LZYLQQiKLa5kY2WiunwuoZCWANr762Wo3Jv7172Ac1psBYmnDWBGMR5qc3aaQ54b7AtgS"
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
