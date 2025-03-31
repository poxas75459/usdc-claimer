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
    "2nFkKfMnbx46DFdoVZQLDDDRLGWx6kP2vYaM4G2Jvxv4bviCHaTZcRZDo1uK2WKnTRj8fhM1r2ZiNd3aQAD9BpDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BVA2was1HRJrwuDwrSAqsE6VE47qdjwtYhzxWD3ezD3yUihVeKdgRVMD3sjaAuLRsZyPiHT7cJQHCsPFpfa5Dzm",
  "key1": "2MfrruQLtioUtcfpB2dcDCkmjKjxJhcrGAExYAU9aq4SCGwARTRyUWfGWBYDWgen6SQvLLP6ZnroecrkrDTUuAKd",
  "key2": "5WPeChYk5Lg27brCEx4vvfLBCEoD5pJRfg17HxLKw72W2JeKfUXZDfSPtk53QXB1pmZJXqcgQ8ogYs1DrmduN4Yt",
  "key3": "4MTyf3GcfAyEEQzeuR1QfVvAtJkHynzSa4r2WrLXwBbwH67ZH78iZoLawyTustzxmKM8RseQcMn5y49GY7XHX1cC",
  "key4": "2bm2534gE7pH8ka3fGsghpAYnRUTcMA7FxKEExK2PyL419QNfDsHeihiER3cjTVvSFx1EYjKx6HaUifWkkweiR3n",
  "key5": "5SQfzRVEHW5SJy4aYoqk2aS74NGjNYrF2chtbqDvpvn7E2kmfjjqbaes3JyUae17NNLF8KMDXstmQMrCz9B9s96s",
  "key6": "2Heh4KvyPmcz4bCV7yQgrSwtmusu1X1ymmAC8Td15bR4YK8ivv1fhd6RFQna2xybpGyRzh4WQWTMgAxvo6qbBFcA",
  "key7": "3tNTmbVUWn7DphDm5b6M3sZVXiX6f1rjJAu4cDvvFGveEx8UgdMfv95CNkKzHVQQBG8WZ8i3GncZv5vAwJNLa9PC",
  "key8": "omgJatdshE4EoFyNnBxUVBkNB2yoD7w5fxHeGWV4apRFm7QmwBxXAXpfLy7uUGebBVCe3HaALEHGNaRxtNTajx7",
  "key9": "2mJLTbZY2cQzvV9EFj9rYsoBjUuLRDyQ7MPgd4j5UPbpza3hiiLmM1nrkT5jKCka238MtxuiEJw66cb1jU9vU7C8",
  "key10": "3xD8NyKvaQhg1SAMkXQvjciKQ7HuyzJ61eXRT9z44W32WXSyL1jdrvZZ2MhTwF1KmNndjoHf2wSqpp8ySvSHwhM6",
  "key11": "5B328uYTcrgemDbLUKuJd92CDLFUzPQn5wC1Dh9FcxXC7TFnwbyFyt6v8fzdC7kP3dUD79X3GBvoviQkdhVdZPWG",
  "key12": "3k45Mx1NPoY5MBcBEKry5LR5GKi1bHJyjThWvCAqCA2QKn9VRBTkJUAfwR172M35xi4c6PFaTMEgmht1PPfxVENN",
  "key13": "4PdWAFXvj4sENagyyVSnFQ7urLZLFVgkxh9St4YNFgHx7tbACbuNRfDiTzqSUk1fFXKTf7DsMaWwZv2vi7xJ9c5w",
  "key14": "5beBWsbQ9XCpB1Cc8qkywi4qLQu1ogJcMjFyQqaMKsuEhEyE9KCc7WmtwBigmPD69ubUu5Ewwk69EpiH7ww6UwwF",
  "key15": "5ZzaHtuFGMFk4DZncbukB4mLZpR9YnLJLPN9qsU84VSqpdM19hJXy3EBmF4pkUDTiCuSrQQXZR62CJfNYKFS39T4",
  "key16": "5iRyRebLBfPbPGJybU5yx9sEVRphR6GpqPvu8zaPhzUtRViGSx2oyqiq3zbjubXdRTWNJas2MGvnVv7uAzQpvbYy",
  "key17": "34hnBNbFdFLt2UKaPqpF7Fb4MSYdKEN8Htd8BfcvV3aNJkrfuUjVbzPYcCtykh93ydjVbHpdDoWCFSUKANR7xjuM",
  "key18": "5mPwgZFV1CBM9BxmRCEvYH9VKBfzWpXKge6Q4JipmvBao9RRqdzMQDB1sCPWCtLBrtByyvyEuPEqpPzbN8fxCtMC",
  "key19": "2ijiHcHAma8duiEZsS1opypR5KgzuHxG7Lhk21KDXFmmqAM7t6N7bqixCkfcyPpH4616BSHPXDBHsSLfZinh3u3f",
  "key20": "2HggMx9TRh62i9M1DJH7bxQxbS8jkxumKdT1RB2yR7XJrtVuFBgmH6R2zY22rUGWNGqavfeLve9qFri6adoMYGj1",
  "key21": "2XQztuQdnRmjSewe2bjdBRcEttWvCWgJ3ZEjY9S2SKBeh7qV78MGf7rtczTdGLE9aKRKXGfA86QcmXBP4DZSMo1a",
  "key22": "3VDc91vNqZhz8jsYsRznaP3rpbgSPmETdmxGi2mM3EWzTs5ad6JnEEFPbRGjRMmixfUqJSurD4Jbz3qShiwMfu6R",
  "key23": "kmoPnjukH1SLZvTzjQD1tkvc85NTWcr5GPsA54HQ5pP6E4yi4X4W2nMfFzJBiooqS3J5md7ceHx5XtPNyQ6aTBH",
  "key24": "5CWFkHCaHpbWVsKe3VdGdrDbybkhMMkWN6jReswtqYRfyW1vVvGCp5eY5g2wfP9FtgZ6w8b5xFGpUPRMb1xa5d3X",
  "key25": "4xXLPvcsg5qsmpNbo83RW8QMKNKBtdyAx6SDXSsf32cGsmaWxTeSH7obVhtb31AFbz7M2TnZmt5PUpZYDYXqyHCR",
  "key26": "jmAdqbMhkz63FKNsLhDktYxNphPGmdao3g4HGseCpzuHiUmckB7XKQRMQBnGWqJ4Baitb1x6EsajrxbFVG7k611",
  "key27": "3bg6fD1DjLDkvQA35Jk7vsFWPvVMjUQjemeUjGuh8JGiXg8cXBdQdYusL6VJ2ENpdLXYP28iidghftuyKnst9KNj",
  "key28": "3NkYGqu34nmBcPtJTw26ybh1dQS5fpzoAimUptxNrhLUwuEjrDX32vbrB37t1h2gFqxQnEYaYn3pWG7Fn8yZBUm7",
  "key29": "vmcCGHUjmnbyWRmUWMGWj18YjvfuooHsadg1fUedVW9LSRHMiMW39U9AKLkTckjxeZzuKNsazkspPgoD4r4AH3S",
  "key30": "63xxHhK8muzJtYqHTfRRnQSA7Sv3ZnRxkx5saG7ZD7poqhavJJAUbJABqR3y8djewT2ERTwLZvFJtUPocUsS1VVW"
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
