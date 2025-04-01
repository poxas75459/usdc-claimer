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
    "2ADCnS25ueeoG3TPnycpwNi3QvZNf2XtqqAmTypLf2AGN9ZMa9ho8xtfMh6GS3k2NWxSN4Lw5NHDZdD5VyTufygr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zydiU7Qyt9FqryxYVEZvRMHhvCUYedK664mLaqAgPjRxvvyjSxgBQ6YytHQRtnx4oRBVywsFMwTK2Xhu7UsyvwZ",
  "key1": "5kfCtRDRNBz6Pdxw9wfyAi49Cy7eLsxFDFg3SgxqtggX4oQ1oun5x3CaL4C1GJBpzrRismF6UcUaP2Dq5xATo1hq",
  "key2": "H11vd9xWpX8FfdKbB1rjg82KWpS2M2DG132wsw9M34yHKA8t1Zi8diYhhcFrsfSDyrqniWgx4aiBcvFQUrAhg4r",
  "key3": "6nptEMeNS1UQWK3M1UAWdWLx7r4bhQnvvT5mcbMFgHjYGEhTvYdDHZAL8K5iq7c5VpqJVCtWkU67veLBkenUhKP",
  "key4": "3YJpuoxK3Z2pwQNo9kYxssaaLXb6ZmEpRBNkXzxFPFiG9sC2jWuNHLiSfSSw1xVsdTSShThX4mZEL7KyNuZEkSSN",
  "key5": "34EvKXMkSPzbj7CYRY5NJZPBrvu5jMwu8eur6pqSJmUoYdTrrcQEHkzfH7hNAeRJSGZqqKoquMrPc12WTNkfVEec",
  "key6": "2vx137ZfJNSxeYUTB2HUiPs6Z1bxETBqk2BEF7GK9tsffoVgARRjZ5YDtcDBSZhxEyjNTaZ5FQyjEkw6hfY43oZ7",
  "key7": "5hXYuWyUcpZZEhAdLtbGnaAxA2u884132nFU4XgTXTi3Woy3GbEK9aphbmHgycFzG5QPkec7r3w1cdNRsf2QLVqU",
  "key8": "5Boi9Yyx3hWDHAyVMETnhzs6EvJ93QNXmpUDeYASN9xAGWnLTJyfPWE32uAqUDgbieRFHRjxLeFnFhThNVZtPAoQ",
  "key9": "PYEjSG1otkWe3mfuFttmiV4xpgoThxntTuCL9VK1P1ww71Too8zRLuVv8QqyvXWbdgZy9PwFQrYiLgzpVvvF7P2",
  "key10": "61nKuaSApQLJvxCBDH4qpTG8YtjpmmQrAAMGkdbfdk1SJLvPsM4upUgu4tziLvKrxfQHKn3dk4DWgCCYzowQK1yN",
  "key11": "3zkVaBV57oiBi1FgmJA4zHUFtexUhYW9Rbz98HthcpcsAeSnMGt55YbL5Cu3pwpVjPV1o4jfnZ2BVev4vxMocYuN",
  "key12": "5nREcRs41RaQ1cUBeJ5zt4JhGzADRZq5UUCu6c6axx88y2E2NyZEdND4DuzS87PURgaJ56G9dsLMjW7BQ8HtFryH",
  "key13": "jwtrfEXJsBkhjCHXr6pabH1kvVdhyppK3ioN1EDck6uPLFHrn7crRp7CRK5zfxSW24164R8zUUZxh1DQGfXeR4a",
  "key14": "5o8CAH1B5FiXebjC5rwCBhg4nT5gkS7cdQaqZJzgz6cafVzToZD3n6pYxaLQ18eUdpdBxMwjFF7GG1HHwUKMk1Bw",
  "key15": "9ykuxWyCDwnEFMZn4QnQnZXMDL2wnk6hTRy4EoqGeJqHxMd9gERV99gcJTomTUfgy2bmEayCXdkpLU3EiumjUuT",
  "key16": "yJX2n7UXZrzv7JmYtpmVZB6kiyuDsJ61P3pXPBmp7WXJuWpC3HcXVkBhm2VHvHvSDuUmBESWGkQBEug5G6Kp2Ja",
  "key17": "37bjWgrERv4Vmjkz8TVCknKSkiNvEG8ESnwwpyojQVddLvC5YDwgeiBRPBkDQs5HgbpYMxe2jaUsfYhYE1GDabqJ",
  "key18": "4N8s6U8VuV2aBu6iAqN1g4mJT3RPcmLufqqWB3WizakbBbKSfZSDvsZwy7EoCWzm2AamR1L5LbiX86nfxnxae18w",
  "key19": "3FM2aK6FLvXU4G3T6v5M5S9fMyX15FbebwHThSc1HdCwfcE31PL7d7CXwGfJ2UGb6BdMxLs5u8nBE73HFFFx3XeN",
  "key20": "5JX4GjCTjXsACKp1tEFoxvGrx3UXLKBYuNzixTazYeBYt6KsukrkV215cQ4d53dDUCYrFPsgfWft22NuVQEiw87D",
  "key21": "3Ven3aHdwhwHxRZRGmVnF9LWEsbb8zhJZX1XEir4fKpozXh4GoGPgsi3M2wPXweCDFwf3xKWDmrHzLWHPo8uBX5",
  "key22": "MSVcxAKeBqF13K8krBxXz7LSvBgzjXao8K3ExbyQvzLZT8rhFXkiNtTd5xib9HhTx4NQLwhjrf17tVG44uwQd4a",
  "key23": "2jGwA7aGyVSqjNqLpWpoBMEcyv9qnvGDZTXRE34kAXkzyUYvJdxE18XhwKusSNhRajmTPcaLKv4SX1DvRTBrSzSa",
  "key24": "DcqXyoceUCrvjXicDQLapTdzDvu8SyCndtguxNPMJnk2H5gJRrH7w1xRjWxjCc5Cx6vk6AN7QcriMbjLK4Rtx57",
  "key25": "4LrtTpgKxmWYAe4VK6nNw6UkoVCoAaDck4wPQJ3UKRFLP2De8iDE7N4LpCmqyFGEtkevgX1Pt3H7dHdr5GCNjm8Z"
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
