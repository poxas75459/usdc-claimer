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
    "5iaWWDnVUex64YTARGYsWKY2d89sK8meQo3tZbVuSFMkpxVdXyri7g8gkJibcqFFE6SYwE2Ktmt3fCx6PfaWxueK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BfvpurvMeJTmNwC7ReAqZxVMs7nqhZPVz5mMu3NJjUT6k3zRdcgs4AGtGSpnLA7H9QqheGABH4V1vM5RnSNdaKY",
  "key1": "5zmTWznUieYuaT1qP6ZXSDf35iTLuqrJkM7PPYmaPpNscevJoaTqJjm3dW5mvhkyqDwSEKLNEoRDT1GMW4T9VTX4",
  "key2": "4L6obxJaqVMzn45vgP8SmLBNgquAZP8ou2rrhkvcfz5FS1Hoj5vqEHJaeyXJjkerQ6zw1ZJB12Dsbkn1VWP9x4P5",
  "key3": "PS3YsS4rboobEyqDcLhpfJSQMNfvieyxmKqierqZk6sQqNpzPEnKs8eivQjKBAG7zBkgnYKsTLMa8pdTd5BRuaF",
  "key4": "5WL1YsUMgp9mHMJfLkxqXcWe1M7Tz3j3fAbvft3GFCW4CZa38RMJsTahLwZEnTQ8zBM6SA6r5utnnFdDSJHC22Lc",
  "key5": "2V9fJNMqSpbQ5v5uEuuE3VxCjCcfczp5dS6QvACGFjquS1P3yZo4Mt4KRcbg8ZNXokEvx2hZwvWbY5TZiQgdwYSM",
  "key6": "3omKtEh8gvsAKmcPY6C7pjskJBffAGwwG6wupBH7xRj4F1erHTnGT2cELQP1nsATUz46vdYihBSD8TnpXE1vySUA",
  "key7": "5MmytY29aRQL5ruYzzVkEJ9mjBGjy7ovGVN913mYPxxRaakcV5WSq1vVhfUog16UvVKNpy69RUTxhYo4SrEs7oHA",
  "key8": "2UfCBW18WXz3sT6f3YmqCiUatAxPTNBMFFBSbP2rcEeQX1uv3bQkiwbi11GNNeXFXiin2R5ZReqx6UKTaizrZf98",
  "key9": "35vVcWXmEpPAABKJHRwZENoGE7ZGWi7LEsx21choBuC6wDEPmwAYqS65mAYSF6HcocCgUhFxMhAZq5TvrrfeVxbq",
  "key10": "G8jf82CWkzp3uK2qgFZ6rTmy7328nsHvqKbFRYggf4W1QTz5sUrnG37tupBYNHWP1utvCfsKdeHN9QNU9nj27pZ",
  "key11": "31kzKJUKkmBgKod6SC7DSvKHny4eFVjFUEnFmJAicpw1fJ4nz6T95vJPTA9B2eDJ36Wn9BKcQUUtwd9m6gzC642F",
  "key12": "63AMFbh4ja18YqZGGKdcFfAuzxT6TvDwcB7XEeoWLAQ74cygU1T2DxG6cVx1JEhWrPRma5x2V2zSTRtV6PjMxEGP",
  "key13": "29uDd6H2x7hRC2VkTP2xQSHMMiGBZXfXHBzhCKmSKsfwe9DidousmLdHL6x7YzRgQmrx3vtQQd3BvtvCtnvS1ews",
  "key14": "55BVo1G9JpAZeRWpAmCdhPYm6nEF6NkiqrKKaBsqkvvmnTXmTV92hvsBqnHHzc1GLF5jCVaTeZ48aHmy5n2ZfixR",
  "key15": "5j55soMHN1jve7XN6t7HX7kisk2wFCjJshQeCpUfJktCDvdiK2t15ZjPGJwgkFsza3g5WxoKHNS7B6g6BCDjSorz",
  "key16": "5XCxoS8DCepJ8vhL8eWdd8sAZg11tj3tUiXXFQTUamvoTsoEoBLJuBudHKW1AwCALRhKbcwuzvvrAMF68cYbt7os",
  "key17": "V7LKvkRkZ3twYCGtkPUMQzBoQA1VE2eTHetL9KrVbAkfZE6VgfHFjuVRoTSNzCLdk1EY5VpLDK2z2RUjRVkqjko",
  "key18": "D2a39DHeCNSNB4ah2qYjftWK3iEmikpq2KkEEMNUtZoSFWr8M2u6GBhrvWyixfwPNB6DcL8DVieYDW9HPtALcTa",
  "key19": "yEmnAh2fHaasck2BBAQRwMdiWEzv5z88knxZMiX1vxg9oZDBdX945L8LbfUhLF1h95U7ARoVQjn1aCuA2xU1QKM",
  "key20": "3YeB1KfM29Sxmtu45cKoXMPYsHsanEg5AH3u97v3qXFa8YUCvphtY6zW43Jdsh9GUKY11BPBm2fh4Qsh8e5o5bpP",
  "key21": "4PwWZ3GVGKVesjJxuDPkYkvJPVBSfJoWMmRWDriniFKT8iJhgpqbunhihE3CRCQq2dnRgGeWw4tHunChcc6S7kLJ",
  "key22": "2nNFv6ZH1vRbFYHiMTuRLwMQZv6sBUGbMPLMpZUmeovj6XTsJ8eXoi6uV27MBh8kGTxbL5cmR1pUcwnATy57f8dz",
  "key23": "2upYT4whicVXvZZpYLJEwY7NJuBvVjpy77S1hUwFmohmAz87fuod4RmrvFcxbHYG84e1sBQmWyTkpZRdUPRhbtYs",
  "key24": "49aTNwao8NpMLU3MCXHyQueZeChqmf5XKBgncX1qsavmPzWq3hi7XHfp4rYGtyqKDdfeZmzgXME4HiW5skXyw8B9",
  "key25": "HPE9bVXWbUTT3U1m4aNTQwMJSPnk27SiyA81WxBBihWhPRqudEPG97CYBRLsBxjKozt5BeGUKvoDAooUfBZbNao",
  "key26": "4jXcN6JkJFzfqokY49K4aMHBbEryofTE2i7bunwJaUnBFhWC7DdzU8duFuQfwNqTkbbUYK1e8xPhXoknycSQYQWD",
  "key27": "EcwK4st8ABEbS7ZeFRQ25frFVWkYSjc7uGTGbaS6AnDCvWwaa8fjA674XLMtNKRz7J5EJRE8d27r9ALTXEDieqF",
  "key28": "osY5jgkan89i5WaS1wDDHdvgHhGSa5V92gm6qqWog5SGu85M4UJdV7D5gQm8ng4brp9eEMrwjgCteRPqPfQpnGb",
  "key29": "pXATyxqGbdaFvzDg3z93b7uMLAXUvgv3hPUeSen3VGcfw53MBbDEmYHpS2kiHCdCh8J1QTQaihNUBAGNpYSfmB4",
  "key30": "3nx4afPG4ZCZERUNugPVigPkSe57WcNPgspqP9qpbcpbEnAL9R8wR1sRq8AxRctGHwx7n6vJS6VN6N1CJB464dAA",
  "key31": "3StraM2WhVovRZvjrH3mU31qpzaD4zJeMFouHucEVuW23p4Xos6LRbsTGtG9YVqYwS7ZBna9HQAmChfC1yVfdgW2"
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
