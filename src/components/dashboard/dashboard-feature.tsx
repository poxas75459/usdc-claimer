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
    "5rujJ5VEdTC1u1LfzTwNdJPaRdFQbEnjEJTVw1ZindC5MDXGinyqDR8e18ePNGAT8YJK2PZggLwP2aDjSd2wzWih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7mArNbLC3JKt2fVsVM34P3p8beCt8S4vpxcnAtdjJNegerAb9d1cuAgnRCTWgTfTBKm78tddaacKzrhPgV8cptf",
  "key1": "FTugsZMjv8BU1w4M8kfv8oJcniPTD9mCUR98gwURssetKzsUvVouaij8AryZXKwcFRkjFjjqvng18tAZAAjFUcb",
  "key2": "5PibpnSnGbtGRua3132ccLuuFZJw2wY3UxDFpvmynLaYiuG7B77kGQC34amoiA8sxZBa5hqM9TAaXtboxnj53ef6",
  "key3": "3UJZsT2nE8krTMBcKdNBxyXKi5crGS2QZzXMP4tfpKVk36Mn3npisSHqCWajAK2kSCi4Fv2Z2H98JzykVKr8wcMS",
  "key4": "7CQn2C19KeXQwPDAo1vd7YR2gqu7rxqSci7Ten5HmcGxQu1ShiyVc6PdF9NXV4gR7QQ6VEPoWmPhxhnDzAtE5S8",
  "key5": "4mk7nEPDtABPpKrQNofn7XNQtnPzQGosYyPhq8hbnb7gs4pF5VCDfwzSDRb2JQKcWRYYJRq4sxnLqEvZUFAnVRRk",
  "key6": "9REyV3k8TWFqP7XoVDgSuPn3Aun4YR3hknjD2icm8c6ZTmBATJHfkvZ5qotNTD9D1D8UV7m1LUBQxVukzMPdDEH",
  "key7": "2Xa9GNENkJRPqwuiSUrRbkR7qeFAXJQXQjdETGx46qSr6WR6QXj8q4X1g5NEgfCKT4EeYBFMtCVxyDbEE5NViK7m",
  "key8": "5t5hTbgiqz7ZWKeTonj4xg4DQXqzCcQKuxxKmg9dyDGjnxmkchATfUMDZsDN1eK29vBoCf7ZTSgAWiL7PiG8zUPf",
  "key9": "3wxvYDeLF3nwepYCxmnzQtnnjbiWFK9FmmEeXM4WexPHxvHuxQGhu541RN6zeaNu7pkmngEQmeJkSJXZtynWN98g",
  "key10": "2NCpfJC8kjGUnUuojSQmSKpV9hRkQe6K9jCrdcjpj2pZHZgpFi6yzN2Yxf5JhUBX4GB83PsomyFyRBWg9eEysKQc",
  "key11": "K6tfWCTXDUjVAMaoUQzHA9Fy2m9yJkCHrMqBXpm2MGZvGjCrtT6ugdfdn1ig494PRKfmsiTmRFcvmAjchMTrPhw",
  "key12": "3UiKbWTXDuKxbm9cm6JYS8W6o8Ku8Y1Cj1y8KKA9vawPJRv6ZKphBm1ZH4uF9xiZKjsJuSi9hAgqbHTccR3mLdym",
  "key13": "47n315HA6ucRWv4pWbqS3ozk5xBS3F4YYzocg6UJTCGAwiKX7A9Xh4huoaGEgRQbzQPKJ6hH69izc1FGvbUVFiep",
  "key14": "DNQNJyarXHRFAbCrZYXUkyrkTYRwHpUDAQNhGkfaixpSbJEhjZPTAtJuTzHM1BG6EbTtJbMkQdHxXdohCqfX4vJ",
  "key15": "42yQyr1MRgpvJjvoeRcnDAxBvRCtW7MbTTtmnJRZh1HW2Zx9qYBpfupTK2NtoPTD7RUVU6CgK8aQrkbQSX9v16rZ",
  "key16": "2cEyejwLAFCpfKgkvRNmzHdAm2HKLBQ6hUTg6U7ZCyvavAQUC3DGqgM5Aa1McfedU9pBmPsUjyjjpTgmDZ4m7WoY",
  "key17": "4n1gLGsbP2MxUTVA9TTqEHadX6ZmjpqvVg2mQ6hFMBceyqFKjnu9AFvmX7K9JizBWE2t4icDMNNZjPG7W9WwGa6R",
  "key18": "4xCcGphRUayKVd3JJHVU7v6D44ZnCrqsyV7opEE5W1hBw59HLQCrvKQX5mV29yfjX1AHKZnqVqdGEZZCtB5VQuAY",
  "key19": "3inHhLjkcpSV6t4W9sQsohgN7ZmJvXckVTZFnfNbrpUUGBE9CYx8YBuMwEPqdY1bJbeLa4HgSNg3kbEpQSSKysnt",
  "key20": "4DbKqHyYa8UGgTMTcczWkk1RUwWoQhjR9v1dgFLaVAjt4JvoqDdtvsB1yrH7Y325na2mJMJGsmDHHA1Vxn3bCbXD",
  "key21": "2sTXXX5CiXvjUNsj72qakav3bwtcBr6uXfYyZ4GZfYYZURRCj9jLtEZenGo1iYrgBCWMuhdpyEmGjTSjnjUS97x4",
  "key22": "xzfYf2ULc7k8B7ovkmF7VGdh3E5QP23ZL8PRDq5DheKMVMjPYDfjRWUqoh3KbnefviEiG4MitV87sEVdbzRiSVB",
  "key23": "3CnFn8SGPAJQJfAMuPNRbqpCpHZXMzkk87iqczhowGgvLqTgN8ZASQWFTCTVidNcpbpeVtSTjKZcYFQC8obEFmK9",
  "key24": "52RTnY8fVGSgteMySXX9D4dMRs9oMrW4TEtJiwgd1Vw3qSWLUVaysZfmTecsiRfVGVMKHxsGL3W7UYQvu1skik9L",
  "key25": "43EG4FJZqFLAVoK5GSrYgHKkiwP2rxrBDwBAuzBapYjeGKcJM3hQQ6uCirg6WfiNEdBSWbhHfnxErvD548mH9sqV",
  "key26": "2MPAaGbYKCmbEEDMvdq7GDytQWcq2HN7cchAPMupLQin7dHssGhhs7qPS5q32R5vtmBMyefB54ao7rUAWvvKPVgM",
  "key27": "5AkH5NirxYtiK1dMAZq9Ppqd7a9jX8aVTwsBLXmmAH8py97m5mZu5zYXnqWFoXDQ4DeKsgNiGLbC2WUkgfsp6zvo",
  "key28": "5eiydcBkrLUCeUo8NKC84hKXYvvABTiGi76wzeCM3UX3k1bLYDsUo8Q9WT9SQWTN4yEq2Gs4kL9Hmb3YQjVWTsNR",
  "key29": "3a9NuHF5S83mhnUoJED1nU9bQx36tgQYYMHL2aF9XPZAMp9r1R2qFvNtVuDi7UDM2So2dBw2tpgUqw2XsTy1F4c7",
  "key30": "3yTNvi8ZWMCinBynZ8XABC6CpvAabHHkne5whjzg6xX1g9pb63FtajSQ2hEeDvj9GEFRDmz5pR1WZFAq8apXAVHe",
  "key31": "2qYujcG5Vhs5k8wu1RaRi2hNj31V9kbPzmMiJTRMWopKEV47QNy9YhMmY8FT7kEFsMp9qdqGD1XxZQ6S7UHxFNow"
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
