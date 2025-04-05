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
    "65MxWXMBuNWcUsbKeb51mY89hMoaZVzBxYAKiwaNxvzDQQJfHkjLvzPgLhKNbZMm9brQiyErCVs2aTKfaSF3u9cH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n1jcd12gG5tmUMr88G8k6RZj4nYXcnXSRenT3nwGH672zJpNZtMWADRc2nwZHk3fiCzgcDonRrc5CsmhBD5FUsj",
  "key1": "KiZ7Zv1rdS29Vwm9fUmihenrFYXFD9a5KqS8Za4ySTgCJfAbiUbzU3MLaC96V8yaX2JesPx8qpiBtHfwWNjfe3Q",
  "key2": "rNaLwJ2pQPG2uAnYgs38WwFt88koonRMXP1Drswcp2ZS7LF4s9z2q1Lh27qSBoRxkLzLM8maV2KePXxnrCMJGCC",
  "key3": "2U1ktr2S14r37j8BX2kueXueB59APE2G14Zsiy3Pi7UdPfM4WkMo6wpZg6KdcNAk4BDUJ2aT2oVaVDhqmW1Wbvc2",
  "key4": "3o2YqxErA6NYskrGgD1VzGo7xQxY6mcod46UB5SHFjHyKFXPrsxSDGepk4qsAyA2MJyYM1aas8t5iCcHnENH5zVt",
  "key5": "4RsM5Z3gsDKjCzDhB8TYrmkn5f48TFie5z4zwmi56WaQ7DHeenZaC5KcDBQo4TmATiUNuqxSnMDF2wv7d9kgXMvK",
  "key6": "3sb922c4H6x2iXvKy99ENFWCqytkn3g9jx1fEvgXMmpj9Xnjn2zC68f9avZdez5AUcgtF3e1RmqKKEiGDzhGuZSw",
  "key7": "2YRHkENbkjiZckBegY8G36tc6R8XSVJZRhXkyFQkQiDZXpTmr94dQxxLoyTGSsA6H7RTjDaU1wVhjNJMQf9nzFX8",
  "key8": "3Gtn2v1w8vUqgyfCPwn8EL3QFNzGx5SHo8i5dkXGGP7FQeNspxcFNhzw2FyVwXejFCjixAPutXkndPSm5yeowAyZ",
  "key9": "cnj3R3Yzbqr39CFpz7fWFjrPRohEq1AKGL9r9VmRZXqyPhs9h7oJh3tJhukgqQrpocmkGFmcR9U4cqrYKsN3Mwk",
  "key10": "3rmEiN8vB7nsqMWLEokL4e8pv3kQUuAPxfjhDGyasqvH5D85yARRhZmcGcmZFejvLTH5m3EQ19Jeoufrxwmq5x4m",
  "key11": "2H5Yo8QUyfFhgEnR19YJRHLQKpqgzgEagQf6jfZqqc858KkrQRu4JFAuXt5T9UhSGB6y7HoocAibpvrUW6pan5KG",
  "key12": "Q5FZLaK43RRXP31DP9iV57n3Mz6LpZX6YYJf357L9JkKmEkyBiW6DSNAkfzukbUoRn74G8kEGqiq2zpFMQhqqLy",
  "key13": "2iGXZ7uFeX2cDSTeqS8QzSHdHuKa4Rh8UNYp42MZeK99Gd2VKRRVPLBzrXjYUGv4YTPU45m4TBMHjoWjFNDDWBGC",
  "key14": "4krhMPvwse7mgpMF69PFx6KtHAhQXYm1EMnDmAGd4TShuPNFZr7FAQkP6wZoytQj6EGP2yfEdeEnmnuv3pD1tKmT",
  "key15": "4zaeewBNjxwbpyN3hfChkbp4dTVtpyWsGu3Ci6g7yTHJ84DzNgC6xLhwZZKgMhKUWgwnfkHd7dWrBmTgJ3gP2pDx",
  "key16": "5iQBMobRmfsQ2oGndUfio7mdx8fVykAmU7HTfJRb56aSveSzp35CDntsWvpt3wAsecT6xYmUrH3A2U5Ytb5BycKN",
  "key17": "5pdjAySVSTXXbFRsf3eCaxCyUTKi3RJ7nh224iEHdw6ZYuxe8i7jVbXfNc3UgKqKSKaQsSWiJjuied9oZMGRAgc2",
  "key18": "2W7k8jWm8mPShB4LtDA2kuw32szg9yHSNm5f2dzuu8g7TQrNrodgPpsCEAzND7mWgDgznZWhwFsV1k2jiBtAuiGo",
  "key19": "3sAemYoYhtSeiBpfDffhBJrgf1P4ZZamuV6HB6crFgrt227SKLB37tmXkFnJCiB6xzV91nr9Q4f6YhzYYdsiiCyy",
  "key20": "4TTLMNGQp28jfGnXxus6RTJRk636LvGh3tACZnXLHqoE6z3k7HU8EvP9jvP9chYk9bm2LpMzMa2SJCc2z1MCaYRf",
  "key21": "TXCyB6qxWyfneiaYCnFSj8ujkeDj9Ue7HauYq1vFDGecxGQy3wkfeYazPWEza8bbhqF2L4n3qFoQvH7bvfJByuh",
  "key22": "4DwSeJGmqEsrpJDigacoruh8npNaAKEUt3r5nqodLyLkSXjbJnBSQBdKq4p3q7v3P5Yi4AH8YWE8nFEE91v1J3bt",
  "key23": "2h6JVg8FupN55veZBmtdfSyEnF4PHHrFE7LLC353MM1iTQEsHnKEf4mt3gEKhGGALukevTM1RfQPgYchJywKGfaH",
  "key24": "4oY55siVT8r6iX2r9oNmLSXAFanPumVJdvZWk7t3bCZojgWaKZZuw8dWD7uydbdFBv56dN2qtgwGvNv1D5RhCxJ6",
  "key25": "4C41v2LTyR8C74bUhcKhttT2JsG6f2yWxDrDfqJNuZvLzzJ62JFshbpupYpTPZ9kzTYdZ3vJMTKLxESjydgxqo7y",
  "key26": "2pQWK6fsWw8AdhPmcR22o7yjDTTESSh5YbondRnDJK19DXzGwAsWTAu4EedJQNSZyHdchZyYgu37cD2Jfzfzty4L",
  "key27": "5G1PbgX4cz8FnQAYy6Vh7XMXz6Su4mD5a2DSH6h6m4AP9hecC58zeTHW12RE79AYyvrYkn9gPU24an1NytH3fkTu",
  "key28": "4wmqfBY2CSKc8tfBfY1eVxypkTAwZL5dGozWpAqQimqVPWoFVKvjGsqLDzJznT2FdJ5qVZfzMoon6exmyepDotz9",
  "key29": "4cmBSVPp9WYXtajqVTj5zUidagdGbfy7Dx1oB7Pt5yAYmsRcUnAWxdzvhyNdjoZMBwb5ozDfmTTgTRWWx7Lc9CRv",
  "key30": "2gnKapwg4tDCMg3Fw6EUEcB4wRCNUrcWgjySpLuqv4UaHhFjoAXehy5LuUMdjyHL79bSsv58w5FEZ3t4M7UXCy8o",
  "key31": "2e17HACi3nqXQAgsfqWE3mcb9aYah4hQi5GMY19gZ6bEuTogxGLUkqGySMVQwRrGRWceYWgbfa11ATyoTkPW4CLH",
  "key32": "4br6z8gKrXmAK3CAbzsvENkQsLDFM2XRkTjjLQwz6gYYzJ1EKZkAH5SYne3itUyDDACoxjGEooAGPUJUE8mPctnT",
  "key33": "4FyqSPbHkfdCkgyxtvnmiKXpDccBsX5EawL1XSXYm4GqN5cfLbCzbsHE1o6BY5Kr1rBFxZJPFpGBzhjvdaU8yxG1",
  "key34": "38aqCXjwHbhT9WdeVWThEHPa9mLQB9BFT4PjzdVvPyiZoR1h8RFd5eAgPJ1k38hkdriT3XAtDW6A6VAppG856XUD"
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
