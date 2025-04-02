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
    "3tsk8npUQeHe9KDNumaEpeKJQ3Pq3v2gPTVZsDKverPQw3z37tZ8jcBwSsSbCJU8p7Qa6bjngwoTi5PcAKa7u5Qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VSJXyVUkXSntvNZ7xMNC8DwLeHsktm2E9Eqoy1Zwojm5yodewb2QNZr6cqxUV6CRyrbM3Tn4cSFrkmzjNgUfkkc",
  "key1": "2nt6ocRbZGyRKRWdKFRa38ViCtBdDqns3q3thc4K635UKnd7fNpTA98PVpsdFsURiKUPXnLyi6915QAxZt8WBbLQ",
  "key2": "2woUiSnk9Mf1TQa8WPMKqDKgVWbSFuvnCYzXcUPHD9kxPVfFxmvdADwNNFzGxN5DAJgz6HHgkJ3MMSwetNo9fdj8",
  "key3": "3RoCyWYKm1txGfmTFEMddhcvhjCTmznMet5g9QEHaHApBVJDyMKErFJWGjpCueuXGrbiZiYp3Dc8m2iTLjsjmGQ4",
  "key4": "5VxPSdDDLbFnbozyXWPyydnwemsZf4Lkw6y8jJcWLxoAdDLFVeEQgYxhGqJx5bkpwMe2HSL2aA55iug3BZKSHVJj",
  "key5": "5Yeu9FixJE1E3tedrQXb5ZYPNhW1ABJWFRwH139r5apYzpjU5irwjiTt7BDfavRjcNLp86WPyPHrxxUVqhTAdX5M",
  "key6": "3AHcWevsA8dVQJxYCTHBQUEirrvUXdTatbwNb5RLLVepq9WThdKg2yoQuv8qLtuQP4B6LbZHZNquXXBr6jmM9Mhd",
  "key7": "34YiosyLkY5KRzXsFPPorUDYPgDL1BYeimNSmmkJXteyD53a58zx6UsnSi5J2Ynd65jRuUtAtk6Bp1cUK9dcYQ9U",
  "key8": "GuoGkieg5ftfCqZjtTshWdq4kxjAuCyVfMUwt3q7c4qbTAe3adRzKmdBG2F9WjtYKNnpjCq8RXjS2UHNpMoMRF7",
  "key9": "3miYTc3PpPUR2vGr9XPHyNafmzFJUJaXyckVGGKLBp944WTthtjaU4PmftJqSRVk9GVTJgEAWcLNjrueeDjq3zbA",
  "key10": "4dJmxPby7xEb3vnerNZNW98fPdHMoJyrQocdX8wQJEceauCZFfxHR9P1F75zDEFPEyYvHMqHHW4pypM1D6UiM5dS",
  "key11": "CrKYNVc14BcZW5sicAf9wbjnZceLGwgV8dxotjn79fqmxL6djZyKGCyeDB3wqijg5rRZg1q3Mzy3Ykm9zHAsXgB",
  "key12": "2FdDxVbfrjTg99ux5zFyZPVGxGKxqTu7KTFj7PUU6HBXnjNMjCBp4MtNRq32rASqabezX7m7Aq2dFzZwB7z1Qfn1",
  "key13": "QMyS3XTCEsk9cLZWDou9y1c8XpikZFUk6xZVY1krRwG6svHGs8dMV4ZDvLQJvieCnpjAMXLJYKBn8YCVg18ifK3",
  "key14": "iXZpSEpkkgKjpDvmusyKnvADj5K8D7cx7GVQmEPmbcznnaBA1td1GCyKyS9DgEACHYv7H1gja3isUDbZjKZLMoH",
  "key15": "3Vpva7oKyzifKngef5d2mEXpv5DeVEqsPHZaGydcHtTWjV9SisCnV8NEotzB9BVxe5za9wBQP2D8481GYYri8UfE",
  "key16": "sMzbJJCGB6MTphifw8GYqFDBR65DyEtMKfcJxxt5pCwrwML1ZK371iTc8vctjaehefsYoTuAoKWV8oMpehaf16E",
  "key17": "3bTPbBrw5c79DwD6iAoGvv8YtKAMHCRHnncCZbtinAVEiXLpCRLxB6BhHiSQGc6sKrzYk374VXiRfDeQgWqo23FA",
  "key18": "26H4mq2LdnUnoTJCk2AD2dED5U6hueDdqpq5ix4qjVq7iW5PHh6hosRfGFcC2pw8FZARPheiAKjvDiSJp99dm8jG",
  "key19": "4ugCYMWtjmkxPRqk6qAcWsBteSshM4jJfcMxUDPHtgrwzozRqzuqJxbz8AhLsiWeakZNunqBM7jCkf7aowabeeTp",
  "key20": "3CtLSwZf1N2RxU8TB4PUtLKzCTqUWvk7gsUmxpQVnoKCpx11jZ4SEKV1ZTdHXW5Zhn9gERxjjBhoyALacJmbobHu",
  "key21": "Lt1XooHkKzY7NeWEhrkAyJP3VLEfCiQsk1VEXfhrwpkk18bvFmjrBZnGk4ffjdQfcP4AxiJhBcxMFHBhtQ2Za6b",
  "key22": "2TPwKUERboenFfX3LpGGWWyjzDCnizypJcE1ypLV4x9PeBQs7NhwHyzJKfXKB9arB8hxranG9g9aLM68Wmv3fNVv",
  "key23": "4FUcVtQ6ufvkgiUEW1Woc9kEVSX9wS9LMSDQwZ7KffT6qHsk9GekjqXZadTeR9MgcoqZtixCD1yYtGaTzmJRd6W2",
  "key24": "3msPZFFsmcmC9XUZP6ANyzYgHzxCYQa4Aw4FXWKJsk6Nrv5VoLF1QHXeBZFfqorwj9QUj1GgKmDLjnyavMyTWSk2",
  "key25": "rGkmFfTGJrydwBTnzP7jbk5DbKx9Jws5QVoDVzGpnb3UDZXPixDDERCJ5xdNWKegEszrvy2Rt93wQWWWGTn3pBH",
  "key26": "bCWLFBVgU4sr6Gc9JWrbmvV2pBMawUUBkJRqokHGASkQLdQUb55rQgAhVna5Z9k3Um9uk4htU2GmfnEPK4X7vTW",
  "key27": "54wc3k7cJU4W8snpqHwDKzDywNeUo1XjasxE8zZej3d5unWnyvH2C3HeYNscfhR2PKgYvLpxNoet4N1NK4TcQeNx",
  "key28": "3qJpsFuL8k4EFMiRhXJFC6LsVutXUMwUDj7R8BtQmqst2uRyfTepkR1GJWZx7fpL55QR9fPehLBGSsbFYXZi63Be",
  "key29": "2pWG1WfGvTwszyB9UfA4DowcKFYMZN1qMcNYJyticBa6JfaxPqBFMQgjRkLgiK2yDxjxggsC2FoYvoDiWcqDPyP1",
  "key30": "4GkU7SdHqLUCdfzG1zHif9ofmkeY5noKU6wASUdatrHgNeFXFWGNeM7LK6Jy1p95qqSSst86rV6r1jxpa9hCfJMG",
  "key31": "71Hm8szHRvi9QdDhTbKJKSCLKDovCQ6kjfo8yeEUGqdPECVQL6xgxKLRge3B9RtPBCLmtFg3GDNVf6ZzpcpskMs",
  "key32": "55mKvDhsW7xxmvwPemC8ern64TAsb5FQ6Unz8aGbxEBJU3ZHdhpzkPEBngm6et5Q52pQUk846MPeXMgpSThX981b",
  "key33": "32zEaynbibMRysuvoScfMJDLEYq1W9dEf6aAdpD8hHmJ7RWJNxWjGDg4rqH8xstRr72NmQ4UvdeioQhxkH7PNfbD",
  "key34": "5ASYE3ja7nPt6i9SaZyAinuwavmciAcXoQjCnbAmYw5RRcHYggckDA7GNyZB7N21XmhK6ixd31UhdykekGim9dr2",
  "key35": "4wAGuFeu2XKq39JQqCL82nRP5TCSbis4SsEHSNSWfYC7AZUwSZkAudFUKyL2MzszVX9Tq9GjLng3m7g4XFFtnaee",
  "key36": "4PB3tcAdAwXx7H82WnPiH39QtLZYjxNpbqTuHy7LwtcXER6SThKLsR78wJs29UNryybtfxYb3Tkigdx3P6hNJcUu",
  "key37": "4G46Jit7EirLBC28BkeHq6MAS4jdBaJ9y4ZsK1s6nZe9CXEXk2hSr4ceS9XUWqEEBDnhNt2rkwKjykVDNbmRUrrE",
  "key38": "3f1iLdMeNfMCiho1rb2hGKbxCVqCSZ2HFfZHZnPJ1v79oFtKpV6wSzfXoyVjBW7seQGJq1CCgGWCEaGz4QtmB5EW",
  "key39": "2DeaW3GTm5m1o2egkxsxfyBQRMB4LDmG6MHfmbEHcdoRJGaUWZv1n9N3QdxRgea7c6KW8FyY1ZktPvKduNCtPw1v",
  "key40": "ZXYdcV7uoo4vv4yvLN7xnxHgqi7fQ6n3YH8KjSEP5HGis3V88fPBDxKfRHkeAiKwA3uUxeCyKwZa4eBELA2J5L7",
  "key41": "4x7xzwfAJEvNCfZsgKsT7ZH3oPhJRhT61RZypnEE7Ak1YhrA6Nj7qkA45RS6Byfy1nuVoAi8VRzkapbaYnU1oft1",
  "key42": "FN5HpQAfiCmw2kNqYAzxuWr73NLLbBJ9KL3aYkUWfHdaipcLaF5dzAeX7Pp4KxH5aWSSDAnpGYAMc7fzxMSk1YZ",
  "key43": "5Q76zWdZsqf9QP2SVPHWpH9YXVK2iQNDazdjQsaAiFpUFmnHwQtSGC6jkL4BMNjkipCP7YQ4rru82Y39JDy2pSxC",
  "key44": "351StWPc4nsCAKmZeUarp1LwtiaaBof797GR3JbuavyWzXwuvAky9iYwXQtnEyXMR2eT6eAc5tNe6WZmJMd1ptvY"
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
