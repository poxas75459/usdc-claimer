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
    "4iHiWwLVpzpqFRdDWQJGeCXvKuN3ccq3zZU2exDxm1UJ41CWvSfm46BA5tbeTt7PaXhoUaEfdwghhQx8H8urVQLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X6ARyJ7fsQ3sntydmnWqubbXbqKHBbNYAug7yxtgK6Mx4saXws5jd3Sdo3VLQSyQtfYt5fguSZbKKVNYwX5k38K",
  "key1": "4Vgg85WrgJs49BywdfyAECzN8UYb9M2QcpeqW4cQQ4tMhYPtteqYBiDUVpyW7ctLhvcHr7vKU3aSkedaqrsLLkiL",
  "key2": "21nE7XAVNxRVTJdsKN2awLBXCFJYEFAj5hfqA9XpNWKYxeVpyH3gRhu2CmpmyFRJgDfj7bpRdMoEYs79uLzEB1AK",
  "key3": "2sxzAT43Ehao5oNPaB77wzMcEp1dno8aggkSo2SMnCTzXmXSMiJSiVHDGL5CJdCrx7GTWUY7wEwaCMBSNZo5H8q9",
  "key4": "28eQbeuo25XdTtWpCoWdfiLfPwUi3oBafSVbG4YC5GLcMXuSqofJRhvot1f2Z9UXE5xyJV3D76FiXt2CyWe84Rv4",
  "key5": "3FusNijj29EvWpXFq3ksTLidZ5PmDgKuRn3bnmiif72cb2uqRkbzUSGsZJs5v9stLLs6MsivFtSzRKu7SvNSQ8JM",
  "key6": "2oPFuLBh5rkkgJ2nygYZRkusSbsjU7o5PdRHfK6YsYuQ9ZmygZcAeeTUgcdTQr1jyKKdHzq43FqBCmPUMtGZ1NLg",
  "key7": "5mMYW68FyuZHHDPUHhP5uSTz6pZoCUwYjZwhip6vVnJpzoNwu4726mVhPKbEzGMHp7pW63zdveqaRa8mgT6yuRft",
  "key8": "2BWFFp4McFxeTK3JYDKDdw8Q6nVutWprQiuVhDohZqD6C9v6sWytP6zztBw6tF7LqfqmGAKX99nGBrzHdRXkchJv",
  "key9": "5svcnmtHzBrXWsJAv4k86i3zpENNQxiVUpse7BMfm1aBh2q1BQigEg4eKZj25Qn6RziojTYju6QsY698ZzCWYcvk",
  "key10": "nLHuiR5YKeutPXH6Cqzbo395LLdrDCvDxVF3RdyKwvsHwSQZRS6qhVWDuZDj8sve5TzJqXUtKR7pK84AaKZoR3x",
  "key11": "2kqhJfqoKJmCULozUVSRCWpWWXRBJAXyDB4RbBGzpcfimoChFAT6uF3FmdrM5Nci6h4zPm5ZoU6Per2eSeTgiWLT",
  "key12": "2u2YExkdAgWH5YBdZbRSP1cqsTrV6a8Mo49YsRrk4ab1FqbPhcHw6HAb3LAX23PD2q8ERQAgA6Mkav9VSNRPgGGw",
  "key13": "2pEEV7e1H5LbKm3yH8mzNv91ted9B3S7zcKuAWHFXNxsxFuDHMp1wqbcXqgAQVMHWarskGnUKKtymfuDkgWyuL4b",
  "key14": "4wDbLmzX9mvGVtShHsWtjr32xVkfgdbDQJWnZrHqqRG4zSkrSnt1YX6a1Z3Dze6KCkH1P2fL54hrDYu31YFLk5xe",
  "key15": "5uC5EN5uzF6WTYMQ4UWjhnzwyVQaXy9gdLHBKykkN6VXJdkF43d8uDE1FsZu9DBRrjMBDCs37ekRBCQCFGVzkc8G",
  "key16": "WH3JJNPg5QSwheuezixymAep53NdysyQMPGVDRvPYMyitofSFvp65iB7R2TswPZkZBZQi3qqdtCPKy6zzPW2ef9",
  "key17": "2fLbTvWQAztgtZQNefHcqvRT7CJPqb5qfpYJchUrBD3hKgWSPrRAHpNTRq6sndyJgS1Jn32fDjznao4tPv4ZMm61",
  "key18": "nBV8csywN8ujVQvr5pwGUDFvLBMxtzcfggQjLk48wKvtiRUpLdT3U6eTpyMu5TXNppRUNFqxuhf3wR7fLN4qENA",
  "key19": "2t3TtnPKUb25KgDDSqQPJyQR7FoHKnZXhpozdntggF9WesVv7GLZiNvxsAxqsAgHNJptLsD3i7ihovttCeaQLqRc",
  "key20": "3ZW1RAaKc7j9JG7W92ig1zD2uMo9grL3mHdmQy3fev6qF8k8Mtto6ydJe9iH53owWHr9oQs1i1gi4zrzjRKd8x1s",
  "key21": "48uCWGS3hcx3oKZUWGTD7Ff5Six2akocVndGNxkNZFKQYvfpn8Kriq5ST5BeiNvTkAvuTJGeC3RjWTV1AuzXQNmA",
  "key22": "4kBosA8swEmpYWWYTNNkz4siZ9frBGBsee4bqyGGHw1xrbVbuDBd9bi1K2Wx7XCuFnyJeuPHV2pdj6JrKahP9Qnn",
  "key23": "2vEfaATk9FCNv8SVLs7UPMZZj1s6sK2qvRzH3YKkTLSz4VAmiqmewxhzyUUpMQbK3ppTywg4SpBvc7JVCkdH6Zj6",
  "key24": "2SdtRCaLnxDi94yGcp14cJ8zTuCb34MRYpCqnJiihyorneCxXN52BdJxFg8bhW2SLRxUtxyE1wKL9ZPdAvZZG4vq",
  "key25": "4WE3cAXCiHMFXCwoftNmJfb8ERNye6ad23xwkBt8MoWnocoA8JWsNhhpM7PMXkvdmWPN1HEc7PaSgnTE3gimzKNS",
  "key26": "5fMupp5T3eT8c81yjLHD5ARLRqE8EgotcT3WgborZSwX4tnNAUVtn5vZqRuCHTkvi7F8BAAWNH2gUtsYJfBJ7Sgh",
  "key27": "3btNe9DmkwAg8FUHVgN66GtuBm7RjwJbjgrEfarmp4cMJnkwYFgxdxq3z34nNtyeg7fjea9ecybzHVhb1cH2by4x",
  "key28": "3m5R8fBR535AtqdXLuiwwuP2SXfdHUPTbo1QM8QktP6esakYX4XK27whqeFN1CbG8ycW63ut3svrGvRaeiHeHxhS",
  "key29": "giWxfftatsmL3m5i2JQnZBN4FD6NBKr4DLpB8uzB5R6KgQSmGamMqARLcXm6aCsjgvCjVuLuiHg1aZkVEWm1feC",
  "key30": "3qxh3dRQY7JGurS2poTLZC3Zgdug9NAihsi3uL2MbHaBn9VWvnfHp8unoCo2RjsXrieV3RzDWWqCMaX5t5W4b4ba",
  "key31": "Ksquc9Xypaf8BtBe37yQ5LrYdQC6JzwYVYYcKeRYCY1iYtzXQ3MtryjRUpWwzRDQFaEBPZxLMVPFu38Dsf5doHW",
  "key32": "4y9v9z3vBXXcZ9FcmTHaytS1rVzx7SzAvS6sJ4AVTuWDdfsqLeidfwm6DtZaiofLqYPFN2cS7zxQd3jUaJ4NF7Yu",
  "key33": "3WKFdoQudm8Gk9HKVTMuMig9hVDNYpwNCvdAcWEszsD1LoSyaq4yCcTGZBkznV1QbQ9ekFbSZmC6ZmDUCZpBpnBs",
  "key34": "YiY9yJpripCzBrs9ZFXDhiFdYJL5jQkj7h7Kqn4toL2kZ7yrfLyeoKanQU411PVkGKk7pppYVM2W3LepErG41So"
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
