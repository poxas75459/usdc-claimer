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
    "4ZgS8FQvxKXEXBk4aSntWMSd9vENdzxqf3sbPkX7hKtW7Dywgcebu6pR2fBJJKeY6Hd3W8CRSSu98nC6baxXjwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51cXyjBHX6GgfKH5mJC81xyPyP6qjKkKJxNdRkCrAbwx3ARsMR8QeZZjni1d2v8WWj3bTkbJhzFTNxFRmvnaRV4Y",
  "key1": "3ezqwW824y3XuM2hnn9sPjassZkxVtR5sNQiNK2onpipMyMd532C6EYkbbVGPoJiENTynch7Ex9seWWxJQBXWQC3",
  "key2": "3PjWHS6UBoZpuFBC5VL7K8aDUPPVe9SmX4czQaidBqEaRqeS6HMtDgP5JYzCsmiEQJci2JMNsEzYWJVRQvzYiBEm",
  "key3": "tg6FwqfmUHLabFn6hvSdhUx5SWW2CRYA8NB7MEUHNntgHp4Ec7ZSfwkwqBoCGpEGt5ZopSM3ZJSqQJtDTzYS6eJ",
  "key4": "2WaYfx2NvrxFKU52hCivH2aTeB5aFj1Y5b6mnhWrLNBZgfs6tvnW9FXPWmrmZeKNvVMT6PpHxycTHC16DQTKHJT",
  "key5": "5oDBYc4A9jph5o7VyGCH5cUbYWc1xBuMFNndb4kGVFhwnzrQ3WsRhnyAUM6NquTDiGkXP36fMSe672V2goLDZXRN",
  "key6": "49eHDahgjuC98dAAauyy5YC2NWdjPBA1PrRygBxZe1B631a5UMky6nVeTu8kHwZTzs15Y2BXLpMjinXWUj869uub",
  "key7": "oPRb3hpFYuLrZ3R2t9JTccRUJAHhkxcCRJ4TyW2CmcoC97FGn2BemFh1wvutTcnfT8ya2cjKziqVcAVXKXXJ9YA",
  "key8": "66T1QdAZcfJAFfPXyoUXuabSdHHcQCmpeZebNr4aJaz2MeUja5f7vraWZRkgEFeFkPWyq4krkjjAGLY2b4djXgFF",
  "key9": "3FHryKScthh6eTqotuBm9D8WWYz5T7b3zc5zPu4jSoMZLSsbyRUCaLtFLRXUaHYAqWGGeQL1RVQgx9X25zwt9cYH",
  "key10": "4P8nnhJB1FdNEi1pPKissoqcFeh2bQZTBWe6y8yaTWScyGsHfbwV1JTDJg27z5y8rvFedmCVqQfwS5o6z2P3Nyge",
  "key11": "4GJmcXpwcjbyEBzufaAcLAySFL921gnMZJDdksgvYQrVXH1wtxecqnsGPKe5wupNGoudTZVnX1geKSrDxj4oVfTa",
  "key12": "35NbCSWMfq6xDJmgKKWjfYP4py2CGN4kB5YHdmfZQtrNaDNodR3oDtEsRHeV2XJPbvvtMCN8yMzNRmG13kieBBex",
  "key13": "3tNFnGUDjstemGY9oyQ8iLM1Qu7UmrRVZqDgt61fxU3Cu4rD3v5kY7g45siD36Cs7Njti1kbGkhhFxfxkiMQsxs5",
  "key14": "4WvD35pdm2ap7ybyWr7XpWtV4tmk56wHJEeKYp3SkuekiYMp5rv2C6hv9XxQZtYKa1QX3jucAnKMzuzfYrAJfSqp",
  "key15": "5cvXjbfGpDxc6dZvDqXPe9wea73Q2mboqkuZAYBwGg7eir1v6zwZwjV6QHM9Xc6sVAHqCEWMEAWSAqLgWuTBgjST",
  "key16": "7PKECt3W1Lf6MpHkaTvRfVxsMoEi7UW1sC23mVa5ppXccXsQhJYEVwPxgJ2cFGyYMR5x88Hiz4eJSV8fACRMRYg",
  "key17": "Q679gUJh7UTCsaqxc5n2zizuMhfBApx8ztQ1gFXwdGjvdJQB9huAA3GwaCAHQ7jdy8ve5E3LmMUSk6g8TaFpeU2",
  "key18": "26BaGj9QqQXCXdsK5hhaRxdSqnB73TprxbWYEQg9hLVHBdFMH2zxYuv9JvsfAkhx7rkTWgk5oyz31essi2o7XNyF",
  "key19": "4X7e7iYp96hXgJZKKHjbQjXkGUkftDV2pQp9kj8QHzMMNLEZGrn9EoPAzaK5k7j8rozxynbKd4vyhdNTj2hNhszv",
  "key20": "4yQqAqFwn37aZqdddpjWYUvF5bKeRvNqvReWCntsuAaQoCCYULpnWGv3ZaREoLtzgnQ6QCcW7JzNQHsc3brF1vNk",
  "key21": "4FkZsELQDx4CFuKM32xs7e3f3KsZUXFa5TuCiHzQ3yQ5WGB13PTN4TYwDg8z5Ghs8sdVxz3h8dpmZdWud2rAzCYB",
  "key22": "4tZXA8pQ17BaX1WeiNDFwkdcbpKmvRiBZrR8w7xZZU55PYHVcVWqUKFa7zEZjXXKTRDh5Erf8P9MRD5zkbiBtS4m",
  "key23": "5ck9QamkCc3ZdfXXNKW4gQj9NgK24QkEovcU9iVtNzyaiKxbLKhABRYeiSojpjyCzKkFNzF6MLmRQavWYBFfzSGm",
  "key24": "2Emys3cTE95qZdc4vQesh33uJEKaEGyGiXAwXUwwjUSvS69UadHypJJGJJhvhGoDuChvn5njwL4ajKKzzuEqUf6p",
  "key25": "op73jSbpoyoi25FUkSbxveJ4b3boeSENNpvXHzxZyiz9x8RxPu152TxJ8c4fuMzSpCRecBApiak3343ai9815GM",
  "key26": "2MKBK5xmYt2UfFvnV48Q9UNgxNNsdF2yrQ2PKz7JSfs7cYY68JT4RbAUJdxAMe6Hjb2dc4fXVWeUp3FL7E3EJ5Jh",
  "key27": "4ScAY8uKvKGpCXRA6nMHhHaLbYUaUCpANwiUJPrBr7MhBEiN7hYXZWBjGGzCu6F7um32tvqzRf92Bj2iL6Wuqt9J",
  "key28": "okquN3RMwJjVGiaJr6SxuqUzZbuTerWUk8f7HXt2D5EFcNAVwXjL79JFtkPiYYH1styL7jUQReYhJim9AUa9Y1e",
  "key29": "39YdXgLMvkGygAGWqTph2rTsqBVJFgn5ExmFqZqwx3SmCvZj5vcqHD3uoQefubMpv8LgziwF5xGCUEtmeLZDsVgT",
  "key30": "2btY7T9Xs7iuJEr4MBABeVdNC5DuS46WCjTr23dYNMjifNkoWkxAWecbiKAeNiZR9aQAu25nqNpoGkQTby9fMcSx",
  "key31": "4NDB2hbaifY1PChr9eMpLQRcuRqQFJzdA51nkJS2o8VRxgCNr6kXiiiMHVFXFvS5Sx1QPLBRuyKustkadtbaPMu7",
  "key32": "3mh7Z2pK5rjG9LSnNZzA87KkkG77CcUJc2oc9Syd1PPo6R5xyaAcr5hosykg9jSuHJfCQsRxsBrZ26eDM2mnXdbE",
  "key33": "3jM2ukMB7ZvminCAcH5c3ufcgQ6zHkSwUwGsvb8rJVT2JpqfUWk2965v7agZDTyYpQfAN6YRZ1tSUVcZR13B7maA",
  "key34": "RzebX49gk1DeF8tCg6ZzGSbDWGpLbteHEX3Geq2EqUQ6FgsqLymxH4FhBxdWaiJjDSRp3h6mQNnfdmCy1spTRh8",
  "key35": "5i6umyu6opnnDL6e6Lw2AZmduWx674GB9MQ9EnbbpuSCgTzwHqwrKH2NMaKTDh1sUHNiqijQBCXkm94DgaNxjG4x",
  "key36": "4Y1Jt2SvcukL3xuvveqnkVPLdh2A5GRTEjUKoRxQUtJf4KGJRmaTVhdMApTvV3uw5ahpzKLnh6sn5DDwi6kkjabZ",
  "key37": "2sJ69rPJq8R3kBE3R3uN1L9rAmkkNYjbhxwNHfUi8f1MZ9WMq7zgNVLb6oWSoXvJeADjkmXaAVfr9vz6erHM1WA6",
  "key38": "27iSY4UDhCwrv6L7tz4hx3MwYHBFMDoG3x94JPGjv1CBsmJvBvFqJUiG5JRoXJJioE3ukPGdQV3TEUcgf5qEtR8S",
  "key39": "3mxkjTxegrtgDqUe9Aj5xehGYtpR5Sfv5Sc8wDgksfHzoy7NjeDKdAJHhvDxz6gezECtWRkq6UkUTe3cVB3rEvwi",
  "key40": "2q835JGBcEFyjGJoPFsrHfxXgLGqJs3xwxGDFmK37qNEJ6DZHMQwYjeSQzG18HRNV4228RWHmosCCMGuvRwsb6Lj",
  "key41": "64hL6eKEirgGSfumivNTdKbtCJdTKBhvBncqUfHGaY35KHCJW86wqgSnDKBnhaYRWRS4n2JaueKwL32CfwiWhR1X"
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
