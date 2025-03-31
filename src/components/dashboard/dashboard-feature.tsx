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
    "5MFD3TSA8W8YNxrmwJnwJgnzb7d9YxPtMFeGvWRvY5avfPk8NvLcwVssQXqWiFT2K3oG8j4jz2fkyBs43njGgf4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AYRC4fgaw7q1G9TrLb2Yr5Z1sfUVgQyrBGkwnRspvVQ6vzzxKA7b1vXZ3RMLGsVKxu8BrNYYbqfp1FgDjYJP1Js",
  "key1": "5rpixJmfA1hiGWnTuafjSuwtMP43yjd9Pr79kwMsprwprHZ3yk472BFmkBZchu6RcgXmVirm4oWghr7p5ojknuco",
  "key2": "3NFrbNDnLGiWmJEJQi7hDBS711PSDfpJr1X1AwtU9nqKgkBwYVnxVMB7t4ezErNftsDzYcMbsuXZ5brBGmZCdW1H",
  "key3": "ezmJqx5bzXuRoeMv9ZiMhXyGWpLumvjzSGf4cUdbZaS8rMa75hd8gLgY45igUTed5A9rJGxuYd6gdFBCm2KYuFD",
  "key4": "5kekdD2UTD1zsRW2dfzQxh12D12zjAKyazEpa1kh1WsCrPnUfKAt1SaqA6JFgThgM9cDEV1ijv7XeqyhMGs7vEww",
  "key5": "5qvTZGPLZcpmVcgXDtN9J6WAVntnJFNbLnoiThEHWtdJtmrCaifEpkHssU9tiEuAMhbgicjUzkEakNkowAcoP6x",
  "key6": "1cqSj2rgXdxk1ZU35vXnXdj8LfvRvdzg99Xw1srHWWoSzgoxGzfQV1v5U5KJmz5GQxR5SXJs4SDKkznUejZUks3",
  "key7": "52Z8wLhsXN5w7nuUoAQN6RJ6XjdEMe76b8NsdSMvXrnwxojBq1THN2Y38rjbHstnpDBjBR4argTSAEc5Am9WgmWv",
  "key8": "27SGDZhY324wNdpZgSB8PMc599r3PauEKH2APF36kwMKgDh5EACV7QqJwnXiAxBLbEYiGcpR861oucFMTBN6fgev",
  "key9": "3HM68czNSgWc62Nwk6jKs1QbvqTQyaVuDh51ZGHb74nVpapQ8yDZ77YiqE5GdwMwqaJFsPmJykyL2Z1cMJjrWBEB",
  "key10": "59Ee95P7GH5Cb8PTwjw6KN8mLktiEagafWW3BaxbU2noEFfjVAAY3JNonRCT6hGcHVexr8qcK54jHt5kmLizw9gL",
  "key11": "5RyE9zjvhwkt9Yes2gWWqUh77g7vWyVaVU6TyAqRo8ypVGgTPKwUrevq1XPshK7mfc81iGPqEXTKwVUSmvxszAwc",
  "key12": "A1tZtdtbd21J1R9f9APimqcQzcjkPniX5yAS1hAnaF1KQhitWghNoQoxcMaF1LAX7GQEUh47X88pkJBK6aDQdY3",
  "key13": "51UjoMMLUNrydoGCZh5ohJGPjYFuFnpGSAUGg3AWGyUGF5Bzamvt8rvy5aNPaNistEp2SrscycGtiaQ1uRJDviY7",
  "key14": "28oouvs3ukhSLtrP3fiNYmgfLgqHLFGFZK81Q2Q7QWVAdr7JUe3oSoNSamTQ98YSViCgxTEDfbMMhCyYZeMU1zUC",
  "key15": "iuD2rLP5aS6YgynKYvx1AsVVyC7noR2hEZUTHUk5LCWWjX9JfkTZgYKsVz9QFAtbshBAyfZv5FWPHiQhAbDXc6K",
  "key16": "4uySPrgKunRepW4wqgvMov4g81CMAEH1cv5Z3KgnCcmkeXEKUx5yKtnYhdvDiv3rhsPgAwtw81J1Q2Lj6GrjCSi3",
  "key17": "4eMcMR3w674XmDYeUrU7P1Vk4Ri1iPT1MzM3FQ15aDNXhUw9KpXyMyvGcYgscB1yzFZGepLV2jcmrQ786L7owLPU",
  "key18": "4iEQZHXEwW8wKsBZkAezE8Tn5BsJVX8phM2ygheK2tE9uR8Wrk4eAUfSyJzrkkjUHyLWyRGX9znEofi6h65iJ4HB",
  "key19": "4xhby2LAv9ZsBrfPuVpEyMAfZ1hFxLHWrNdsSAsseQSifh1RJb1ThBb7ojNLd6k9zp2qG7JcYjEue8MJeuiDMev8",
  "key20": "4HTnVS7hhc171n6nN6iV8eVFM1WKcQTZ8oxTPxrddWPvPZ4XQJ6cigBDHgjRqPXFFdP8kNJQaR68ko8JiKjeP21X",
  "key21": "4YPKGsgqqgvRDzFLNX9teyGPHswikZ9vQNWncTxhCGGE2w3UPnW3uoB7t4ZgLU15F1eZT1u3mMrF8xJS1CHcvLqB",
  "key22": "5ELw4hychKf3tHPkxFHfW13LJnWTC32CJzkFsTtYAgLcCsvwiuryELyrqxxv61r2YTZxMa8wAN6fYxoW1eKvqJkz",
  "key23": "29dBLZYGTKutgS3ThQXrgWE5FHvxGvwAxe53JVfCgTjegpPDSshvSDQCXtqeFsX5hsoezrpZnarJvpNa3FoPKRmF",
  "key24": "4HCNStsvf7YTcfqpM4Q5F5AE8H7tRRSHDVmEsF43TrwFyhJJ6Bkdu7X2qUrhC8Z74XUAUzw2ZiDkrQrigjCRXg65",
  "key25": "3nyELssoft4KEwLUtzHD6KX93uceedJWGDfnW2u7xoFtZDoa2RBfmAMgig5XcBB5SmKbobP1voKSaNi4oR94gu4q",
  "key26": "2Mxoz4pXWcmzsDyLtrJWLULJ4drDyQtm8Hu3dbwwTs7F8j6Yej29VfS6EG3ysqeVj4uU8azqUPHsmzazkm2Fk6RS"
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
