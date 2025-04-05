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
    "bBzDfiKK62VYi3ttrBp6KkQF7CrPpf63mGRHhbqfzr18QXF6h1H1WhWU4dzuG8xmEmq7jqA77dqCLVBnPnU29xx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48LLYY9qyJe96RaDJL4hF3s4dFaqhdVfkMBvnv5Md2pRg3A76ddvdbwZNi9rVyrspfvCBx1hczAA4ht3zQ1bYrKx",
  "key1": "Y7DTix8YHG8K3rjh6wS1f8pUsdfG59qBi2VZ8M7dwjT51T15kgQCmXBSFHhwaLgEpRFgFjt7AC6j86dg1bp12bm",
  "key2": "3Smvw3HtDm9MKJBpQ2HJCEkQKZJD8Fy3f7uDfdJv7LsRcq9dKmG14wSDHibzcz3JBmqjWEVrSijwbmRDG6nQwtq9",
  "key3": "4HTF8DaMxjBSEU5XELtyGg933f9oQDihWbisUSTfDQ3c1niTg82Lw6K5ctYUG3BFQ8DQPkEZNGcTg8JbZXmZTegP",
  "key4": "2jZ8smscMoZfrNR7uXNrsyJQK3AKojYx4V932YuCxyVXQgnbXHW8Tr1AKekvJVpDV6KDzEtofk72GykCxJ2gMwFT",
  "key5": "4Th1nH72pjmQCvxYT7KrgbAeMYNsmhzCDJu7QHuQFKbVwwNxkaFKJGqFSM1KFxaxpnqNwWN25HSxt9CGbWkgF9mZ",
  "key6": "34oj6mU1UBHEb5Rf5G7YM6eswV2CWLsULphptu7m2mk8N7eCZ9rn8zdmdYZyD8qEL2WdamR5U3D7Nx1kBTgDfQzb",
  "key7": "4FcL1xNThcwuqpQ32GW5Tw2MKrFidF3XztfS5ZXduWKhdHPu52qZd6PpiwE2eJCyYtRobQZWXLM98B4DGSsu6v3j",
  "key8": "3CWF26kUC48SWqbjnB8LqMNDTvLkMkfHped1fFpeQbmBpx7g35coKCJAgb4LDxrTWmLAgTcqRtRYBamMLtDieoaS",
  "key9": "2gP8Km4rtAacijXYEYurBKVoV6Dyhrtz5UYmA2QRvZ9QFB9CidVungAnhuZwqytK2Wy8CZ751p2Yd3S55TnCjE35",
  "key10": "3ns1BJGDRoa7w7NZymhNLqmpB6P3oogHs81ofdbVU6uBpYdZWYmzidzLT9qiZArEYrXKSADVcVMZUxVbySs33jTd",
  "key11": "33MiLLsS9wWrpakPa9ZFKw7TTCJjNBxrY8uK5X86vBcTL5mreSkNzWJSMk6GsB7fn2RJy96RqvhCQwtk12wJmXc7",
  "key12": "3yKnW9AdnRJ9AKHzraiQv5wKhVAbTrWHqL1sMGQGwkStwpXDpW8NWc9hLpeMFK4v4jbHtT8sokR9M9dWiSwb3MXc",
  "key13": "2kWg9buwKj5XepEzCVJt4Fiw62khRgXJRXeb7KyHyRUSrJomAWyny4G2PbonELpcw3Kpw2vPnySD1c4ha4rPvGQC",
  "key14": "2d4PjemJBumBRJx4TnF5ck6nu7LMWxJ2UyP8rxwnHuEm6iBidtGGRGRBDfRcMtq1HbJ8DLM6vaNdTbqsNfMQBLLT",
  "key15": "39HR4MD8qyB5RSHfDbYV2tbf75Q7Z42Rezd7JY3ifMNqgi8jrNCis1D77iWL7sF8pEVEPVygVi6LJttFGf7DJhi5",
  "key16": "47XjVtotNRn1q6v5kjCmGkUid7q3jR5BXtfEnwCtceZBoQQcWAkFQVE8rhDiKnzdDDvydBWLSfadBkzWd7dnHktB",
  "key17": "3DFaHVvrRGg9cQEfQAdaZx71Bowu3syhXRfb8EwY5J8R3bJNnVHsGUHT7PQ5koSh5x6d99mDtMfDPCG7speEixum",
  "key18": "443eGDD5wc8wYCkNAJK9bcn7HZXv3YPSTDCW2y3BeV32d2CFYjULuc7PhndjR2R2Pxirh6iYhvtUme6qaUwHGWbt",
  "key19": "2msTnzrs1BumjeaLsL2Dcxbi2SdxhWKMb2mJUw6b1qDZXE4YQyGPL8nkc173Kk13MokY78kiMpbsQpRn4vYeVC1R",
  "key20": "4kE9n9XMUPV4aLdw3xBQHNNoQaaK77p3DgiVDN84iaaEmCiMPtyqp7EwxiXUqTXxj5tUwkpHoFrL2FLeWGZHAxjn",
  "key21": "2vtYgx2ns9JhE6GUy1Rhohap99oE5Q2nEHCUiwpr8Er7epSKxjAux15GG2pdv7mtGYRV6kKkSKFejb68LbdGZ4jG",
  "key22": "2nVACGSUVR1J8DqeCnDXcDU7Yo8b6ZVyH85zuRPqc1GbyYZVjj1SS1U1JuY4RerPFSU4rXgz27ysQYtmqAr9F7mU",
  "key23": "KbKsDSyAwgC1KW6Nkz1uUWMXDrsJ1NEe6hTacQCrt7e8yEWcDimGZtLaoZ1GuJg3u6enCjU4wmB6wFP4imoSfsP",
  "key24": "gcn1ZKiyvRGR8CkDz5okvcHSV61zh4gpUwJQjboeH6K6qQRm7f8894uXEgePmvWXjpMHVMLtetK9qEAXKr9TPHr",
  "key25": "5t3tVzwaLE6cS17ghMCv4XFuGSYzMZns7KFNfcVnmtbfZrP7QdYRhzvUEeuCRD723pXcwSbezLAP6nwe2Fb32EfM",
  "key26": "2rrX5BWezmfHhq6retzNnojvY2Xeg1H2dn3cxtvNqYuL8WcRA4SGrJo6DYv7r6ssa4jQ5rrNXqUvmzjBDPEDArk8",
  "key27": "6Uv8Ndd8Czthq51EVUHdnJteV27wXo7DXqPaWhoaBPAGY6iCfaBQqNgJ3qHBUxBuNyXKExygmYBVtg2q4B16YtZ",
  "key28": "5jK7F2339ejgho23txV9YhTY6RpreL9iF8zKh6eDSSQf94Zrh6Ug2BAbAhjB4oU4SPXPF41cK59MuiEvrC7ggS3s",
  "key29": "3wEDMcFV5JxAv4qARNzf3BcDs7iLnNJ3QpLR4LcyQCMEvfBHW2d6ygkGsSkY5MqgZSSs3KuLJdCkWsWNhuMyGKRX",
  "key30": "5Rwpk39a6B4XkawTqtP1aCP4p7s7YqyvT4UXTdj22z86sC9WApgnWfUEvps29KyxEf6TjQLNrarWhEo1trnjvtpV",
  "key31": "5viRDXXmWxH2ioGVNyNqqMt6y7nhFFMHaiYbjT95gT77TZ891Q9yBbMNFp6B1ujgAgfQwNCj9HYqFdaZLyGdi7L6"
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
