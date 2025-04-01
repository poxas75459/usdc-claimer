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
    "2i3KJCouSodvRDkkmbZCkH2to6UeNGk6g6PnPim57zbwUsb1NE8WpaKD5ZPPWArNzQS5UdgxLLhnrV9EYqSbZbFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Sp8fvqH9zUCtHY6ZN8Sav7YSBArUpEZZypbCuHqzBQQMLJmDwYFmMTMdHCimwR5hsVCPsSTtJu8X3tdLQWMg1e",
  "key1": "5LcfYYhuNvVwZxoaLwgXNPe5WsgMGJ1NDQs5AqpihvsdyWWsMy1Ngq4WUaiBZdxz1swwkQH75EmRa4SYCRTKEUgn",
  "key2": "2oVbpHNEjpvxs6uf4s8bnoCN4tGpfogwjHrRaFvtUVBhfWn2XWi7u925vHBnDgxoXWG3C4dWfynxPfPi3bUEu5o2",
  "key3": "3J3Psk26ND6PQ2VT2xWebXaVyBYEwAeYbW9u9SVRFmftH3pFN7NG8fr3t6r67CTME5ytKrqerTujAR9MHfF1sp2u",
  "key4": "8ZXUWQ1h4npBDeXpoqf9MRCdLcgthKmtcQmwfmQq5if3Hk35gHLXkTRfgWAZmKhZFXBPPgM7gfn9NCqnKztZTbw",
  "key5": "3cfx8qTrQynp2saqRQ2n8CYqhVCPvfWapPRpe56uC55HEUEy8wko1RCkEATiTvCE1sUAJTeMW7d1CJYz6775cCCS",
  "key6": "5KHZ1X58eSa9X1jpzVjW3KtiCU5f1kGwKdJFFk9w6pRXKh2rtLxquTWZaV1Za2ZwsHoJ8U8WnXsZQ3NtdNL4g76t",
  "key7": "4iZQ6jrbjD9evkRqsuasDH1RRw66mYHFRfMzAbRDvkq5Ne8EkNfb9eWuEYV5XWFebKR3KG3YLD8ZCCC9JpxZqtZm",
  "key8": "4DUbTpEbghnsUCLGc49GNbSCTQfUmXDjYLSps3kcLQPJrQHp4i8y5PrEbX1voSi65AvYFoexVmSb8miSFMQrnENR",
  "key9": "5MghaKnddaB9fYEuVuh1vgo97rQJzTeGYAGTf9eQCDc5ZD1UdNhjKmqhX3Kt3vfGcs2kRrkEJy7kNJa9E58cLvpt",
  "key10": "2Ex6RHfRXRS5Ly787p6eZnkraWd4Q4mRnqsW15puAMkqF5rvStEoMKgLFrZ1n38UxQ3nG1MxCLhKtkyNhpAaj2Aq",
  "key11": "3TZ1LDMvmDnc3JHX8xSuWdSqYgwRQTHZD1qSUBMdUZpgzEmmbxp2Qzre1TYzaLoWruFvBfXcib9zUgVDPiYpk4Ws",
  "key12": "4JEK3ch5oefDqe3RPXGeHCKRuwT7jMBUNivRGMiqVJBTmahEfKJGPVv7rZ5CSsQhmW1rKryCJArKetFwBK9pfUGG",
  "key13": "5rDzr4sFC6Jp2Kb7Wd1eYSBJcnbZCwoWvTHfjy5EZdicuJFvaiHXBiEgGsETJLSSzr9YS5GRQ6uvVWPvKhA9uvGt",
  "key14": "2zcbL2n3Q2zjYjivAEBvPGintF6TAJ23EH1P9cBSkuV4jb1SVHMHjMGZuuxWCrv3686T1GfnpvkaQ3cnTdJNX11c",
  "key15": "4d3FocfLiCtFHBgsGKyLqpxouxEAFfNw13QS4BLqbkcuNRnPb2CnksLYDuZrTZ27qWmzgSiEdv2hMtcyGzHtQt1P",
  "key16": "3trb59EF1QDkVEWh1ArYT8QLzj1FZX9Git1sBXNxk6EwA7SuidsnyjQy1M4tMaBTfrJhGavct2dDQTnUBPsA2Y3x",
  "key17": "7ijF5aQrn5cnwXovpHdLHTVcy7xapHBvo8ArUMBXqZ6iFzhksqgJRLnBoV6eYgCC2uftP2kHrqu478NTTEBKepq",
  "key18": "5jCbkvT4S5uKFxBXDd64DQ6VCzKWgqGH9QLEfEL2HDumLZtftnx3BhayXXyppyxciDLsLteo8TwMhDwyrTLahDpg",
  "key19": "2HqUX65FeXn9KtCHyGHyPqWtHM4U9fJ4cFcmVTHoMD8dXUWQN3Ro68RsW2CSXFfK3zrSBApCkzt5emFHvoVYzzDg",
  "key20": "3ZqG6qfyPioPb79Pna2dZfXGNUSDDkZa24kKMs8UqgkSTuN6trwpBrQNoYL56cW3h5zS5WiR7uZBD94WY5PUmvM4",
  "key21": "2AAi7uSpezrUQBqExNtykUMRReFhm3DEH75owjyZcbSVBEq5yBznS9imYmE3occBzosNXnMoMLPqpsV2t2hokUjF",
  "key22": "4P7L1AW31tkeEKhgARUbWNaiJeEzhe6ZGye4owbjoezND9UYqytYTLheMH6DX577mnSbJp9LzZv729GNpofLA9Yf",
  "key23": "4jsW2tEuVyKW1WL1YopTyxNmYhzL1HygnadGuwqqxFb2Kc5TjhXrKzcByPmroZSDPjhpEFBaBPL8bPByQArtLUtU",
  "key24": "Zn6jMQ5YcR3fRzeemKJY3utmj4yCVZmmT8X9PH8vXZXPFjAVpDNAHQnVV4xwti4WkA9v6DdXBE3XCTQSzw5kvkU",
  "key25": "2gTZFc3YKGDAN7qQb2MSQe31zvK4QhFD8nMtXf2ApYu92jcTbbWi8afpqNyscdVtBQ9N5MNYRwdCUMzkYXekEKCM",
  "key26": "2M9JZhDruaVWmVc8PRKENhNKGALkAa37VWxzDVFjSaCpAGiazWAD2d5GRstHdR1UAf4A9Bgsnq4qpa4tTKFUVUVt",
  "key27": "2Y8xbSxr3uGsyz9Ur1bq9zQV4KQbGKQSWvxVuWbVPc2UV4NskzxiL8iZJ1tqUVxqaKi3njrK89BJ6eSiHe5AVubm",
  "key28": "5fBq2XbmVGFTPPmGnigUpRY3HjfZZFoALcQeoifB6NVsGiLZxUzbVG6NTChoLbfwRSmbAhdRyGDwgFspKgjvzmuN",
  "key29": "4GmrZCXhU9tzA2LLURRW9QmFYZbPuNstEmvGR3Jk4KMeXDtzecqekWUhxreLqMWvrhiYgzmjDWWsnwLMxMPNmhsG",
  "key30": "63K5QqkMbdXouJsuAGAEc66ejXqVxzfctwyznz4dT43d4S4ASNL9VWiTvjyer6nrcQR2Dt8DqwR3JzNR6faxdm4X",
  "key31": "5WJEeC2v3YCm7xDzZr2gJ9uygSDMccimCnhCY4BF353jA8QSJZaEWDp4U2DprwxBeJJpx3ksSmgivK4NBVfZbuEj",
  "key32": "2LS4txk2UuYqDfjt7w2Cx3txg2iPUSo6kQb6W5Q6Sam58ivko8CEenTXyt8ZXTd5kJepJ8hotgGf5K6t4YNUTrVw",
  "key33": "YXxifgu9DgF245LxsfNb8o7L7SHrrfnCVvMJYr5yepcXBcBfzEEJzahSeTYh2mF76VTqWgXdq2vvNJNRndzSoTc",
  "key34": "2jhsm8NrHLQReNcYtSnQCF3L8PGdJnfhpTXtNmj63ok3B55AkbYgFd9fdnRfJMkvDCR1KHRmf8yq6U7WurKQHnCN",
  "key35": "5xP4167cb6w3vdPKxxaHNX5iCXKvZTwZ1yBideiGDEw4yshs4idViSEKSCVNb67Ftrs58etNbpTQxwBHKCteUv7z",
  "key36": "AShSfv2cmmRhahB8eQhgykCPSycjFTjHieZbtgtGWvVMdSGoPXtYMuL6NUYu6bpgVGQ9DUt522u3nqo6j9bGjVh",
  "key37": "34xx4PvQt11cPxmk5QyLcQo4reinRe2DTeLMTtpggAGY4NMKxNsu16uLWnJVQ6cWmk8CDiigAzAfqnNScz1DpqaF",
  "key38": "4giDMp8w33BYPQG2fKU3nXmK19PQjCSF6W4dCNmumRynPLaUV3rR1KgY9hEjfKt18AfCXnSpRrFxNRJMNJrtJiAc"
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
