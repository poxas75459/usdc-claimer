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
    "uaHKRiWbhPaHjT3sseVTMi5fosh168Y2W7J7FEJVPRKvh5CrstPsdkC9KRoiMgsUcrzup7qb49uFSinUGT1Efw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YHya6gzuDc6V1zhfKP8e4Pv2XaLoBy9976fBgXZhRMBPjYcKtQucNesFaUceDed9XwTPCB3BhyUXqFM4QNTcKn6",
  "key1": "3E9DeQxsVEZTpwENk1QmncyL3xqHbj9RCC9szqSBoXrXdTvL55ehJFB2WAXm7nrFTrVo7ZbKvFWjZt2q9MyBA8Lm",
  "key2": "3Vbq4Js7N2g49BMcQitP5HXY75j2sEQ88gsLb2a6sE789q8p1mgc6peh7XzEh9Pw8KzpaNwHAau1onZvrLdUPbte",
  "key3": "3xZzGquGHPrMWyUPiD6KWPbzfTjHjbpWjfcCkcJ8vjWoWAxPpJow4CY8iu8j9JrsYm1V52VDFdomrD5XkFevbDy3",
  "key4": "5HYNEYuadLhUnmdet4zxEVYSPLK9GcXs6DtEGq5usCNCweX6J44MQA2s2mkkZVksaTMUofDCLmQ2XWpBmzhFjG2D",
  "key5": "57CkAEoNJkC9puXhAUpCaABrV8mgNZ7yJyT9VuYKUi7ga1hkLNLKh4QdeBdaapPRQb72po3Jx4MkinQT5KJw4fkV",
  "key6": "VdaDkP3fzcyggck1c8Uw6TjeWkMbYv5pA7oXQrAscJeoLVt629jnJringeJyYHfitTs1kdwiDp8L1mKv1FTuHEk",
  "key7": "5KEbXXaZytpkj3m7pJWpPs8cNxJXX2iPbewquUY9VpJwMsf67UFzkVAe6RoAzYzrukuUfeHWHYFwCKf8vqwhDYd1",
  "key8": "8kUA1YChAStZKhfkaELuNiE8S7jWeqfbWZQUMXtEr3j7i9Mm4ew6EPFcrYhS4X3aLHZV9KH5Pxv8VaQ82BnxYX4",
  "key9": "39vakJKrvSngEtdF4ZcbaL2kKTMvoJiM2WbYdXsXbwqX61zcFoKos34bdruWejxFaANDJghSGNS58V31KDnKUAyE",
  "key10": "5Ldpv9yHP3wHYHP6rZpUMsQLquqQRobvqaavaXN3ahu2LvnFEox6thRAd4UxBXbhNb7i4jiHktKJpzzNEZ5DbZGL",
  "key11": "LRkDUykdUmyux7A9rgrAy173EPdZgdVMhMjtPrXXjG7seAeraBfqRJRVPaBSXjQSTRqLFFbxUTAfMbCwosX5rAM",
  "key12": "2sP9SpyPbgLY8EkSy8MLrr4fdjnsCQiMeeurESyurVJc1kpqcJ6a3g8ptGYpSUxSp4cLmd1C6jARW2igy26kWXZJ",
  "key13": "5g8DDmfynG3VihW4ioTJwA2evTFjgM8fFuRVPC4yGY7HLktdtd3LKsJBHr4dn52V3GmkNwWSLu6Y6fp4pDNFwdCG",
  "key14": "5UZiM7XrWFZkqLf8yvHpxWJHUsjGyiABwgvTLSbJTKJXW2nY9MJn2pwKVyvUAGuo3674vjDpPQaXyFad9Fo1gem3",
  "key15": "2yFAovihX5YYEgWDSApXq9qpFtA7Hst1sCvpoMezXiXzG2ETei86g25DQ7SCuUjqwvaQLiaUs8pzyB4J4w5Hu4Q4",
  "key16": "3UDb76Sv4yEMBkJ37KNbB3DpF3gvVLR45VHxRjHcEtWqtG23TWeM6JqXVZa6D9JAF7VgFEzZWJHzQaY99MPbjyak",
  "key17": "HoY2dD89EwLKFJkTrxwJFDzPxDz578RDaQuyydKYPmegjqf7Sm3KPeXzarVcnUB3CVbR9cFzmQPmhC3R4NVx2aH",
  "key18": "3iist3FuSMLpv632afJ5j79vxYqp28PBFxB3V5cXP6TQ969F2NuxsnjJGmLhdW4Nxf5MSpx7crf3dEjEkJRj6Xq8",
  "key19": "3bdDePReLwJB71dfFeZRTJhmaT3jdJbkNa2T6LVMQ25JpcLK9e6MUmaCShxsvPzxHRXBVKdsuiLEDYLQXsE2YF5r",
  "key20": "jjgFMaDNMNnAMCyptw1niwWYJ21YGaZHMVToBj5oUnHf4xbEHgocNMn3YvE2dThVN4jEpaN9gErKnpXzzTqbS3d",
  "key21": "3Msix1JZUJpBBo1f7u5gMEPkFgmiw3b5NTbwzEGivT3EoiBALzUfz3GFVAs5hYxwKbXybKcyuHq46qKffpmw8j6Q",
  "key22": "3SdBZC4srQcN9zUgXgTvSPURRr3cJWjv2C59evGyM7mUomXo1s4dAgV1FkJRtGqfhqCy82ZqHArBa1KCH7eFHshV",
  "key23": "3vo7zrZCkxA4ubRFJ32FWb1joQKYPtoZJWsB6q7YawqMz5AdMn5drt6x6B5ZMSEQE17vmQmhkzQUCMn6MxQvzvwP",
  "key24": "5E9fYS7mNyiTmuWnAjiwEFd51nBmfgtHNVobopDTDviBJZtGfbTagyMsHajo4XnYx9N61LyXr4PpGyFcfFG1gWvq",
  "key25": "3q5LWb6bAd44dLdjtbkiTXa2utgaiHYVrWuVMtFb4daFZmmosQEcpYum18d1RgGQgBEf3RH1RxysQr8UeLTsxf28",
  "key26": "4REmJtQpnp1NigUNzZKWAx1Xtq3h4WFSxaoWKChCh7oN2bNBeM6zSW8Dcxojg6A6QWxsXQWbsVpTUkWBwK8mKuyv",
  "key27": "Lv75HozzGmJpk8SRokD1AqfCvGig53PsKKTiSZNcYUsYSMNhLjgj7wZMjEqCwnjBV3D7h7F7r1genboEdgzuhY1",
  "key28": "3qfnoCHzfbE3oPrmjttciQUNDwAKZu5JroRsyu7ydNrCoJcPQ5x5wW3wstWLWHHYdDQeDiL1t5tvebqwC3P6LbwD",
  "key29": "5EEeuwyjrDVoqxHctCFj8gsztaCygAyt7pK2jmXXsHruy9xLmL6i2BFgRHYMR8gKLfZxjZ4Dwq8XKc5uBs4wcphL"
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
