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
    "4H8hrb4n5Zup1VnxDMGVeSrrEmqtcG31dhWVmmTiDEL7EuringRYX2NjUbtKrnsXRAWez9EqsxMoEMDNjRfbNRTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3suNNnVb4i2duy2JnhjXH8qS77wvArnC6pbMixh5wybWTyLKCjDnj4LZbkKHyPBibo7hDb2J3RAQzmaALJWw1awZ",
  "key1": "348cNrHZAsi5u6594ZkGTp4Dk65UdA1Ve4jpoXMH2RjV4cfWFKs2FiSUS5cC9NkxvWh4goz78ugszQtaBJZdgW4z",
  "key2": "4AY2xjGjXN95hxKp9bmjkJARb3A38H6qjHKNtxPuxJ51rsEV3Ucu8Ekmo6LHSV8PqXaFkFnmtFzwFD7H28n1dQfX",
  "key3": "YraVbdp9DagbXeUAjbebfh8kUcDqkGy2dsB87innF7are1oSUdtaWWnkNENjzEQqVgb4GqcQ91Rk6gzMjWYLPoJ",
  "key4": "fNDUYxB3Rg5zJ4dzrSUnsRv8dEucRids7bY8Rc4doJSXtP8kBpya27KoQbzxxe3DNsnCMKBfoXaSb57HawsbrEd",
  "key5": "4H2ZRWDoGmW8hrRmSgjt17dSD14vMWFXUB8VHdTaPQuUsdHamXb874rNCq1JqanVBw2SyRo3TKFwSfYfy2HEmj4C",
  "key6": "3ff7NcM3nGorfT7kLaLzYXvS44C4L8RGAoRwwR8NLhekiHNsV4sf8L9gdM49yKkRKLvW5mpYoRZ6ra7BD5bSaUTj",
  "key7": "2WatjgV5oWKJ5qVEausXRXbXn8kWAiDU2jRmzhFtGR9CKXsjZNdd7YGubZ3ZDZ1R5FaUcd2cdGKEhktiivB6anHK",
  "key8": "31Nfz8n2S3KDKsamnMRyiPjS24eNaHUtgCgSSocfPnR2HhS3uteYGCvCHMhbD2f7ps2Cmky9rU7teJYLFWYVSudE",
  "key9": "4iFaP6PwY26EX7jmozQhVpsguyRhYm2Xxn4UddVtpP8wpHR7cUFWtNXFmVfust6MYoJehMvQCNWUQJQc9WonYHFg",
  "key10": "5K2r5WU1uDTsna3KZ3D7tur2NKfNwSHoMoDm8r8QY5SbuEdrXZevKT1ndwN4z55dU5GcWEW28c25YDzunZbJLTDk",
  "key11": "3GGvoTwq356V6tBevSAgBm23nxiqfZD4nnSMzEsLFs4mHqEQBcRevGNQRsFaqaDmFJRDCqcJFbLhGrB3W3SmDJr",
  "key12": "2puSXfHhSAER9xUm61nDoZVLcNFr6QYWN1z9cA7CZP7dzz4a6qJbmmLggEUbC8mqeuTrPr8mF5EAMoT5Zo8WmFW2",
  "key13": "2mrNrfMrJDTmYobTBRm6owhRU4mVtfv6Nn6CmpdVvshJV8AzcthYF3dK7B76QCUytaNHSDK9BEnLdQzJemdto9dK",
  "key14": "4E1ThRmRTKbJaLLpk3HnquAFG46qVbAFTXVW4xVGANKJWCnDu9di2D3LeeTGcV3gLKCAHumfVEbaQRArbr4hvqu6",
  "key15": "27gNtTJZxs3AyW8WdRvnmv1QNdiM9Ct7apaKfpSDA9SVe6jFG5zJfQwFN8MLLTGis6soRBFQmaiCPgQGaoQiS2Ga",
  "key16": "2WCCzwfDE2amz2Z8vrB4Jf8J9t5nPLV4i8Nzi5z21LriYFFuR1afFa4phRNVKepC7WuMvF1HjsDHcqUCWvepZ9wf",
  "key17": "uvh2jPMVoth2yma3X5CpHWgxRa5NrjbF655spuYd4V5gcA51cfJj4TiwCKTXcduQFa64xcWdf1yDhxqgohQU66S",
  "key18": "5MQSiUUA4MXGHHMxxt2etuCqi97my59n5u69n7eJ4FYrSK99F2mGp97qrjQZ7aZasV3XY6nu3MNwCsqUmRLjRMJ6",
  "key19": "64ChgDEnJ4yzVVMXcTPutbxHhwnDUy7GJXHnFsZo6YE4YGZTbxSfNweaEriSHAZDxVeWUrMcsmEk55wCBj5vyu1R",
  "key20": "ku8QrRVMBckwokLsVc3T8GUqyNrRGUDkPTuMV81XNwGZhZJFm5Q4PZmwpm7mVuqYPjFjHFDptHmnxp5tPQnUmjV",
  "key21": "1Fq4XaKDYCEZHto7hgrEHJ1ejuy12yYv9rKN5XCujFaP8ntxTBywfeGWTEk9PZygnjXJ51KszEA9uXT6fHaJias",
  "key22": "5WEWwkMEBvr7RFo1bvAtcChm7L7VjKUfnsRCSL9o1BZkTFFtvs6HamRcciePZYtsjQWyHjBbUu9CN5iMWCJ4thxF",
  "key23": "4TheQxdcgHKrv5Jg9MnBXNq9HUmmZQTqWGk35EcJ4JwGf9KyRvAWVAQqAELmyf5aNzhkJkAzuA3rptgKXKncwFbo",
  "key24": "3ogkQFh1MzZiodB1bQn8o7LoUB2oS3v4g7tMfHVcdGi4F8biEetLSEW669EZwLxYP4s4oo8xWivJChFuJmmqqGQc",
  "key25": "5EZTam6NQkNL1Y1Pfgy74sTXgqK3diHdNSvZhKhD3RtguFMpV9dDtWiWjNsFNXvcHUajCvBNyF29MfaYnp3Zh4zh",
  "key26": "3LNnbA7icoFnHF1TNdcJQdCFT5ejuzG4APBv3U4xxL2ZBmhCSm6MYRaDszxu2UzJkH2yDgQXEA6q92ADqFr7aghM",
  "key27": "3vbgueJGom2dujqLL1h35ew4pkUd5mAniYkcaGS8RfCjxuk1uL1tx4rg7LTYWCsC8F7yHEHGZpDxrf4H6SUitRzV",
  "key28": "3wcrnFQHxHXtHm8isBS1FP2sKJLAcRQY4b2xVsERXFZVLP8xPvcqj4dKZ6v3iaw378Tkh3vofcQwLrrEYXpx4kh4",
  "key29": "2JYNRczFJWphNfgLNeEajd78dKUy4WnyPPghe4sk1VkPj6ojEjYBc3bn2XomgHWrRdBvbLjhAQCFhoZgHdcedixM",
  "key30": "4tGkvAJVa6n18wmrdrbbzsPNwCNB57heFX8FrQnC9kiG58my5nXjzLkEGVRaTTvJjfsMBmR5Mz47opvv6GngHJ8z",
  "key31": "5DN2L2nZwV9XKbDxf2zaEuLnajCir58HkQNQAqyhk7M3H7VxtyyeoKNfU2oPoGhvQgJouRSjH9sTDdo6qi1p4HRd"
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
