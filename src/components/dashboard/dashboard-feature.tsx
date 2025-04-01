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
    "3tAJkuxCxXsEB8UAzJeReGf8DRQVQn3HNMRSvd4TbDRALFtmNkdcBNRnpB7TiVHQ6ssCNNxUg7eU82BbHcfPcZYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G9SUBNWZeuq73x1PfX6YZkoD1Wq5BXRTPmPwd5XJLMNVQzRtZZ37aZVYNuiPnFbELBkgkvDye5572gHCi5ZGVaA",
  "key1": "42dhCqGQCQHy7UzfmaT28vmLmisoP5nDfHeR4DeP98K7PLwEZUUgk5dCWcnHiuySv5khFxKkbxxte7Js8ZGZDR5T",
  "key2": "k84VXZefdKPhb1K7Frncm4iXg1hMoseoFG8Y2Ng1wv4r4pnZ6BcX8YJSAkm6c732u4HxvSjYHC2ij9rGfLTgeKS",
  "key3": "MhQivumMsDXjoEJT8VsTJX84kqZWKiBY3LhAJJMuZnYPjMLUN3MgdxoTCMK3eSTVGrNw9MbYVHiKmeifUZi2Zc9",
  "key4": "2344DhMsCdbDzP6UbDRBzePN7tvkdPnz58x8Bsa8CFU8hFgu89MrqyQLJoFKZJ5aHmKBVoaaZxCriqguREbVD47L",
  "key5": "3EJ2G661sHkq2B2Vjxw44v2HmDNudHmej9Qp9Dg48N3kf8sHT1s2aLvdH9fnuY3Ydibiwp3bY9uMrHJ8jV3Hxs5X",
  "key6": "4QcwZgkJNo2Yj8njEB1JzCirTn7eZUPiEECup5EcRnQM1K7GWbENe2Q6rVyb3ZsTdWouAVQCzGoFsTp4RWMKHBnR",
  "key7": "4oaFPL5SokuBKNz5wsUVNuDbioKcfLWb16RaxUUfHzdCSUjbuaGEb3oVe4wMt8tNa8hAzdYMTRqQTXKRGz5FCGKC",
  "key8": "2NxTQVpZDP3JtqwG2tLZR8SFmv1sT4vNUqUZSN4YFNsh3FdTAsAEETVkgynbNMpcFZoBi7zX3841DxewAtgPJZjY",
  "key9": "3ay5posHgfGh2MXiyHLBwaB8xbDLDzTLdbyjCdZCazPw5kk35ckj4xtJvMo22svgea7Xfg6fbrgnA9cUPTpDbYdX",
  "key10": "2JEUFYiL92o5328rh7KUEVq9Bwp2Wk2gERXjN3SD9DxNxwgf1QHsFgDaqFstQNhYLzfPVduLb5yMt1azJfpprAJF",
  "key11": "5eetWeHbC9YgJGB8mJrrSzZr1CbFxPJRWzgAUVL4KRaEfsjCPUueNc8kuuej9wp5Q2uMjMSZpGoMU8SSC1B8bd9n",
  "key12": "4jTASsVXbwKXVMR2pGVzF74dsrQNufW9GUydHhB7dU2p9EYvgeru78fA67JjvpouvgAofnonbd9BcpKd8USCBhNu",
  "key13": "3wgXoEqdxYUMpACBvfDsiat8bkWUGPcgXX899dvT87XFv3BAMgqdqVh5qKPVVT5umWzztUcnG3ocrXnZj2mR298a",
  "key14": "MuqXCGm4hAdFd7Hd64SHXs9Y77ZLg2Qo3pNhoTeLaXGkCW15vvoNUubbFgrDcQNWHs8ddQPdb4RvgTJYkhu1gEW",
  "key15": "3nRDjpuBLT1aGrGS5vXkfqMXH5YyVbH3k3v4N8GXyFSgS4sNUvwVUfcsjawyf6PK1fri5ZFKmUJEGJMx81eYdYKP",
  "key16": "4esRDKpJAse2Un25uy7CPWVVGjhfX6YV1w9x3y573J6VMVEkrp4HRtwBhkPhirXMkmwKNriRDan9NdqJUYRBjvng",
  "key17": "QJZfr4RnEcXHVjoa9VPH6fA5cCCchqJxoNykmBfNzpRXC1e3kDAvpJqH8BwbxRzZbW4rKTyqig5jpB38PVAS5Mm",
  "key18": "4vFND8roCzyHZxsQGuMa1zgJvCd8xMtcg5xXyJ79vNJKTUG1QZJ2LVivdBH1umEAX1rm6KmPjUPpYMEXWMmYCvrB",
  "key19": "3EfKPQ4xy4sSoXJbf4QBTp53Ew9DmsCRVv4SgTPA2WmXfQxFHVtb8BAGCMufywU2QNrDhaMzfjHi2kveKwAmBSYM",
  "key20": "245TMw3ZD8smx8zbaDtrigVn7NJLsGZNTV42pk9jSNzRqUwkm3Jjp83YTAN3NWd6jn738miUs3QnmCVRiLtFV2iT",
  "key21": "3vhayRCvzdL8kCggUT4JvAgUFSRuVoQUH3cYj32fKD36ng67cibtfDGSNj9bo9N6GGeMpCkBZ3KqhtrvjwMDD9wR",
  "key22": "32Sh1iuSZ1hbR9863D4w6Wy57tRd4JQNL9ktHKcP3apEiW9P8AhC9uzf3S7eRueUcdt1dHnqvs1YB981REasBjp8",
  "key23": "NXPkKTDMfrhVTwp4uEuSNmfjoxp5gwRUegtFRbBp9UJSRFfreiUi1B6KWjS3KKMdcNHgTqUnNEJNohEbSo9hNue",
  "key24": "586oos6EuLjbqY8C9b79REvAB6FXexFNiUEQ4RUWMmF1wZJX2A64ez5sh8iZdkYQ5B54wcNvrgxRoRzXBz2QEKgV",
  "key25": "4pxNx35GNbhF3XywYdTsAgEx7T8jHCVSn4w6mGDd6GeAz2HWtnjBvJULQm8k6ePCsA9BHjMAmauKnkuhZpjtBsLv",
  "key26": "R4mZZK9Y67bEJNd4dCLHkqVTnQumh4dCJYpXVBotLYTAHZTotDs22ginNm9THTz8yKr9ieh1T2yrrVvSChfJhjR",
  "key27": "4jZkAAjK1CBZW2JLyNuiARfkMzeSfrdBSMFfhQxFWKeY7aGCtxrrgWWvKJ4LtqqGkHCRRB9ErKABAJYeB7fCadui",
  "key28": "565Aiy4X6Qta3xybUnMLk9h6Ybby8Pd77ZYf82k6ohWykjtrrSbjrbzTasYrVxQ8nXFoLgdrp8UvqVTPUZT2ZFp4",
  "key29": "5KFnicPa452fbaPtrFWh5k56rTfVZMYFNMZ5GhDBSqhCe3TCnVbnTYLyXTD6EWBgAPYBp65fEMZtHNcSz7fpBQLA",
  "key30": "27cxMVVfy6zBA7VrcwoArYkqQRpCSacyp9mTeHzZk3Tz2LajL4bYdtVqXBGCu6VwkHT9eiJqFd76Tvh96qMR4Hhy",
  "key31": "4wqod5H8HCPjVigX7PAjfU2zduQvT4x6ZVxew4KLNFaousZxkCeMPfeG7hp8Sxf5JQzudBm1ZhzKzJMLFtQB3sSm",
  "key32": "5u4Y9u7c9yuqaLJhbt8aRVd8NjZdhopsi1iefuYaRo4NnWDKcQuiaBUPjBXZPgYGLjrxBU3e8uyFktyXHiij3oKd",
  "key33": "59S8ZCqCnmnrrwoJxmzJNw6MYZQjKA15knSaLDNULz68dYfTCwskZABhgfRhmMjPe13pKX16KLwaXTqo4r2MZZx3",
  "key34": "5w7tWzU51miLjRJhyCkXyNAwZrJWuF57ogSXoM3ckaS7DjDEUDW1dFo9zNimW55Cskd2BFREnkMgdmKduLapCPdv",
  "key35": "tSAvUkbHcFQBpSyFjo5sW5dqxBmKtytGKvhDqiQmv5WjzEDGYYSkVnYhr2NYj6gYYhUbyrHRYGm3fKHQiek9wSt"
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
