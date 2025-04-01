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
    "3j42oXSyx6PAAsWtWugsdugFU8s7m4SRJ5FycH6bMBVJBgVa48M5Rs6Lj9PEzsVjDmQ5LS2PH1j7Z4G3QgHKhBPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FWiyRyZ5sVuMeDQ8Wy3mhb31SLsXmgMEDaqf8fVFi4dQSJPVvS9vmyQzK5gfiAPFuTVP9eQ4y6A9i9u4NrGuSRh",
  "key1": "3NZjL5gDvAUt2BQj6gJgEPBSUDHSER2Zx8v4k9fXpYigg62bZq7J8pUcmXHkJPN8zMKsTbpvJpXZA4FRcm86DzQN",
  "key2": "2XAknSzxPz2Wq2Y5PdwgASwRTFhjBMzo5gAicqvGDkst7bgWmnsPZAKLmqVrGMohH6b6CqNVGjTVQHx6znrk7QXq",
  "key3": "24kjxKq69NGf8jF8dWGvabfyAz39K7FTwCXj5y1t5LPFa6wPyjwy9MwqrkiYeUJYcTNvoxk255wDzM6DUXyZtG1B",
  "key4": "5GuysbdfWM3UKCHGHgBAiEpfa3MNCv7eXRk8av5C3izdBq91CqHMG8wBME2d8BPwn6c7Cg7ftHNEV9QJzUoksfZx",
  "key5": "4NxuFL37WzWAAYKmhsxyNVqCfumNSZ6mNqDs7XV55tBPEzCp1E9aDjSKVQibHo2zMKMyf8uFE3PM9CutcpREoc2N",
  "key6": "4wiiB87jV7g74gaVHWEjxmrwShUgtDaGwYvET9Ybk42ZpDUbCveJHHtKLUUTHbT1xH7YhPj4Gft7cFMPQSFN1a4N",
  "key7": "2XQ6zhHaYdhX7gqzCdKwt5X5epBF4Cyo7T6PawLzcUcN21X4QX4LsUwvS297oLCDUsqGpdKZHA1h29e3eFmVcomu",
  "key8": "5RCqCJa1De2gnnoyotCfcATXK9FtzBuLsDE6qWuwTH18EpfgHK8gdFSJfEfCQ1RBgq72GsVDtpCGQQRiAxRL6Ma",
  "key9": "2MkWTzEPj7KiSxnnQdPf2j6d32Fb5ebwYqpNage7mLAKQzYD2f5diKPD5sxrjuGw8co8mjyhFuWnywfisZPMTdQE",
  "key10": "5TXQ2KC56HEKEzZMxu3ZEYhKtCXaZ43dimDnNgQvcJ1VP8rU3dh2r6QQ8cjwpWgLp2KJmgA1oYwjubrW7UYgN7rn",
  "key11": "2EusGA3STjSTK6Nt88xAkJYeFh5gYUJrjLi71AqBEGdbcFt4rcn1dso1Yqo9aeLnNAfBUS6L1bUEfnppTewpGAqr",
  "key12": "5eE7DgSTZmkVd9kFBn6PSvKwnhBh6dabtWFisv7QNKFK92Pm4JhpdhDYVS8k43hZsoDpHDzed1aW1CBPCRHeBpEF",
  "key13": "25GyrnWnnXzSKqwbfWejaZvDAkAj9ysCbuo4C3Dyp8u4URKpL4YkiDKUA1C4T5gfGMfQgVrnJgmtMPuZxxe8co8h",
  "key14": "2ShVkdghBsdZaBZ58YXT95EevmqmkngzBKpT9SXEtpbjzxTx1LrNbEjoVwWe8BovU6oZk1xKnEFrPbR7eZxFGgVK",
  "key15": "3X5aTqJRidmYk2UuFdBcqgoqC9zoNDWjbJafStCpQARefsmSFUULpxtJWxczNgiFZAChqEKhfGCwBzHHkqvNizwk",
  "key16": "3k7GQBGp12ZuTM4d553P1Qdgsd7hcmTZKCcWVkqGz2ZNELnXPHuSmDCrxMJAsqZrVQbGjqmSqvfyHERfuchEuBar",
  "key17": "4MgFWvxrMoj7yr5TJY4yQZNTuB9jX2bBFfiJ36u8CwNkxkC3qhqVcKmEwga1PbyjdDmAw9cjZuDCYqmaVMwBeFbC",
  "key18": "2pj8mZwobm8JrdYFY6aqXqeKQjQwCQk1WLukZT4d2kCYmYBA3rFToXRtZmh1D9ioGJWyBZbFYaQy3TtgrspamgMK",
  "key19": "2tgzyQehpLVBu3pgingKJcaa5Xbv8VSGRpx4rn5aFdxR5xyAzreGLn2FMrPbRxUcxgcAJt8n1pAE9bnxQ4s7PGYD",
  "key20": "2xDqFdeoDLg5xFLpn1Dvb99VJV5Wtjf454ZHLRYT4yFwSXTkYUc9Am3phTtL47pjdMZcLBZ5YWMQfwJPLnYThCdT",
  "key21": "49ZdPkdrh5FEUfLr7qj6HKy62W2id21CpUKKLBSCKomf7qe1xnwSdwHqjyNdK8zzosTpAyYCabHFRR1nQ9wedV2v",
  "key22": "4FM4nygjF4MYwkFds2tRkHYV4wScyuamf15bcV3dYvDR982W5h9mydiJoDvCJEzQqpuYQ8df1dnTPSNfvrVeyZPq",
  "key23": "4Mt1B2jJudQPTSSm3GmiVGZQaR3tMHH7RZSvSx7zzFmRb1vAUHEXoh7fUU7gVWzyD2dBfUcNC62DXAvsSnJ4tnLF",
  "key24": "7gaVgU5YqVvCLpsB3koQmVnykqs7fZJc5QyV2C9GUqpCxGULNXxdoMgJV86fDXrWUKEoyRsuw6GKt7sbZUEXQoV",
  "key25": "7RxvDQhxyf5ahbh6WuCJAq4xa6X3mLHLiAjmbmfXjjCD2RjusGhuzX52iTdd7L5mtZZVJrLpMCsbcFpPhbAuFkC",
  "key26": "3jcHZJxb5ntWbHkG6q6pJsnRMNGMhfhiXCzGAJxuwmbJVt9ZyKrzA63zJZKN5GUnu2ninEXXnxTocmoiw8gfW8SV",
  "key27": "4faFohR8i5P1UiaBYwD2P23pkJXhSyHTeabrKYHsX2TLDHVX6Dpphb6FsoQtREzq9QswiZvu8VxGfQxmjpsLArpE",
  "key28": "65DBRgKeghVBDr21ZFNxZYii6RLDat3xU4AiWQP94U5zM1GfQ1kSRPMNLfXhspyWBZDx3k1MbtGYk7orsv9UTLTy",
  "key29": "3rF4Py1NYi6TN4iNNEiv7yT8h6TX5vyL3oPqjec1Tc9nPjiFUoHTtKu7K6KDfiyXnVhZoKxVy52WKEVaXpifRCRe",
  "key30": "AxTcCeububyFwuvQ3Jv78HKx4wWRKymJ2q8tiycZTXFGUV5bKdTqhLANxfSGnwdvzUdofm6S83FiSAUtNSJVwgJ",
  "key31": "2LtCdWQHfNAgoJsJ96hxdTj6uScpk3AwsnjHZjqEeZUv56owvkRz4PY8VQfDYhWG6LpJCfjtKBJBdXP2sK9ryGqj",
  "key32": "37YDVSyM8e8BnKaqZDMWmzum9FXSC8AMbAyhha6e6mQraxdMP5Ge7BSBJDdBZFiPb4qKzW71q9Jqz8vjmgtcbcpa",
  "key33": "4Gic9ub9cyV6KqF4kXj45s1vsuhiUBdyR9D399UBveZY6UWa7CwFMZVJ8LWirhCTUYssjNXbERntLpUqgKKxvqh2",
  "key34": "4GiVUMxrHhnPnfeRnkoUdinSLhd4J3tHf6jTgbhnKHMq54oi9h3v2VipDz2owQdfajBHV8v2DPcNsa9qhJWpKaJ5",
  "key35": "5q22n3F9naBmxv1r3PrsberZAkMPoPp8YYFTR5BLmVysMRBUve3EqdJ1f2rve8dtBXroFWtHGmK1fQzQSSDkXvvh",
  "key36": "2ieUeapiHAMHomCuhDPtpzCfmMS7wwrAc6WJeNDFo2PbRAWEGmghuaXGLvgbxaSApDHEtsXypJUtd49MseAHmdVf",
  "key37": "3ovoUJ7Y4EporFVEbu9FikPWgHsMWZ1J9Wom6D5o2284oosXJb9HEDxh2KQCphAm5bemQZjjaaACcbwTwKakZLrP",
  "key38": "5Fv1m3Hmc6et9h4uupdzTaGu7cbqG29yH5zoEok1qiXxHw3kt3BVdfMuLXDr8nnSCDE3dr5YMRwSuHXhARbeKE9q"
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
