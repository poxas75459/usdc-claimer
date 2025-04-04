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
    "3LJkoAWo2txf5r48dgmyiPqD2ru9gTJopg641wBZ1uYPaA3Q5pnYcqAfJkmVZ7YuVZSoDGVcnuvQSDsJCXy8priU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xrntJBgVoNKMrqXMdgnFbD7Qr72n8mnFh1U2KkkiKskWcsuQrU9fq6EHzavpDrx1rRyJ6ChWq87C4XiNCBABNwF",
  "key1": "3BNcahWEFhU8zvm2oR74ujHDSDrZnoYsNQfNykL5Mgsakgq79rU8igdShxcjBhtNzLH1S3aSrfGHVBrCYfXfZtNs",
  "key2": "2G2NU6mFV6vsV55SvUD2mQpm5vWdDPtaPxF5RyyHZW8ZxwFJ8uionmk34ZkPzh84HaazwaPT1GjykXHXgqDis46a",
  "key3": "4NjuXQeeRVg1sEkEtnD7cDJc7zXNeraUc1vLzkMRmBgKxLK9F4F84VJBe9d4FxxBxXUFZNagPySCeQK7GLPLbSd7",
  "key4": "4C8PMYnpZaBfKXi9w6kb8KqbDaxUWpWsBmYuQyPhTFhZnkBqYtTvuJ4d6hurpp1ZaNxvfxwdGen8cHciMGd3AQo9",
  "key5": "5F9i7GKKwxHxxya1Kyjq37UK1GsxZJrh5J1rdEf7pZtVY1NWvP3qrqShNTFMvLYNhyTwgUDvJtzMyGhsWfMmEzZt",
  "key6": "3diqkGrrxMoNVNDoU2rZDSV3hwX3MM3CLgYaXaV74NwQfaJFeJoT4K3Z9y58aKYpJzdDXchb8RnctesQWeZCJFzB",
  "key7": "4TTy15JqpLxXXt9A8bWL9rcioeABTzNyy7s7GDE9HZQYT3Jwd5tKnLGgGD6PzwJEuZRg4MMfoPyrpCSJNPj6vgmy",
  "key8": "2ppyELAPG6at27n6XB4vPbPKyazxW98Md6DR9HoGuUBLMXJJUacCeQWP89udGA71VAntoL9PiS1qDUb92aDjAUV4",
  "key9": "QvBZtYnDU9SAfMXKJQQ4zKHXAhzpDLxsPf5EPsMpEp7KnDDFsE9J18X6tB3jSkQeD1r1EadxtaodER4ASqryEnD",
  "key10": "3i7nJijsqYyZyjJBgTsC1ySZp4FtxQAzQuvHyWrptTcFjfnDNpZ52Ne6ny5TN8yYCssio8Pw3tMLzJDr1Yv3m3ry",
  "key11": "4V822PHcUqnCN2NsYc7HyDkww34wLf8U6LVMtDtG2usfXfQuuBCc9RGf68NdghXAZXqCqf86WKVKmHnKy2BcwdUZ",
  "key12": "3NQAv1v1QbZSvkXjFR79HHoZJrM4HaM3Ych7rpZ2Po4AhMWaETeBGBUBgeK1xyjGCjXhM61oatgLkXgQhydjGpzf",
  "key13": "2x3uo38K63vDPMFaLceeucAku9T9pAchVzXev32yVJtsRspNDrA9Ss1pKqfEXGzRzsqpLuFQeLPYqVUWYYh2azxu",
  "key14": "UJXh3LNDYMuXZhHDj5LZUNCtb5e47KYr3t9866CB5GJzJavq4RJsruN1rJQvueAqaXB4qj7QDCESVmGs7h1GSrG",
  "key15": "5nVXX4inbv3Yk9qBo9vrddXCRbscgbxkUDKXcDrunTuJK2MJEarPh2B63BGfTFzvsdStR47ztdfFdoGs5Y1rXaSg",
  "key16": "4nrmr1BRyoQ2sSRkgb1rCPRXRzwXQc8JByD8dLVwnY8yQMGei8A5DZTrBxj9qmwrJ1Z9123wrqkbjKdH3pDrDBhm",
  "key17": "5VYi6aWRkLTLq3RPx7yXc8Hg5t9f2hd2X226Umw64gG1vfrVDff2iLDDrfAuMova28nGKRpywMSWqVy9jXSWFuj2",
  "key18": "3S4MNNgbGE7WCqAZwLTyDZB3fnzA9Q7jjsds11ZobrLYTTzwjz2QvCRhCpQ9MDv7xJERg9YGMatJdkbX1kVpumte",
  "key19": "FdfLQLRA3nfAqwaoHe7c7BtKcRiCRKV8DQaJ8oqG6WQouCnxyQDNiFKWLEUR3N9QSfk3tMvjDLdZXovEPbG8CGr",
  "key20": "i61NVwSdR7PCYqSpcrrZQvmTRdFzpueS4jXMw8tz3j1wUfFzTXfHibMNnJrKUxZWrTCZybBHExfT8qSNcy98J4Y",
  "key21": "4N1Q8tjbyHb4Qy9KRACgSNfhCrptxj7WJKtT8mk6PcJZxnu7jgKhS2Ao5VpD9cDRGhmbq8Q6YQoYMLMeHQ2LRENQ",
  "key22": "67VAiwknM5ceCV7EdNVqNp1gFN47eaqamgwibesoUR6B3QkgnZFPurDHB9Bamadv3edzNEXJ6Xd39dPpJNqwb6R4",
  "key23": "5VczBBWu9sBTpZ9yUbxxPFDupmNQH2ckmC19fzrK8qZ6zyLfaUBHbTxh4TPHCX8vUgaC4xLBZviWDqi4KTgt8NvR",
  "key24": "6aiR64uJTmwBj2yVvaAFCRXz8jyFSwpBqUyPqtm8kZ5XZ44oDFdF14JfCnTi4zG57YUEVydRHkbqnBKy4LS7UH1",
  "key25": "2JWHrpKDjwJH2heD2yzYQJP7iXquTcX7TXtyybDkBREVXVWVyYRi1WjWgrYss3Qs4a3eyTt12qM1mKCFABK9C1C",
  "key26": "2PP28WAQNNfYHwRyvoGCh4nBVCs9H4bDjy6SeofhvNqxgq7FAFidNyx7tjjDZRMawLur14cycjkTVAoSZVbEnGcV",
  "key27": "2JQrNSfqqtBytJgzV4QytgGqQXAmGVF11B4wfotKQqdxMmsVSvas8rFQTJuQr32zp7a62hg49KARs6jBvQ7ZJNdk",
  "key28": "5baCA5nUficy6uNAx1T3nR8xYSkJCeMn8h8uQayssxbrndwbaiLsVeD3q2cXSyeu8Xbu9rQC4JVjsiDNvXZSx5Wm",
  "key29": "3zgb45GiSZRh3ZWzKy8giE5VKwBuAbs8t7Ufb6GhNhVpn3398KDCN461Sc6jSTCxpZjY7KStkPNjYLE46DDKHndc",
  "key30": "36V4jQvyjMyT8KnboQUUs9T6XZp2rhu7j4ZmA7RmzsQH86ykBtJverqZSv3xtc9hvgdEm8PvNuvtiVe3m5SBkW79"
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
