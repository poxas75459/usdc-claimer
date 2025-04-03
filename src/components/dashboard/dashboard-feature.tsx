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
    "2VBBJLe9dfycnB5tkufvTaF2ovzMNhPt4NdiAdesaFDuxKfS9EeUB4ny3ewYLicRX5NCyCJnqjqryoyZ2zChkvzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mptqqv7rfX664bEQGnmsp4YB9o9UUSB8DRtXV1EV4UXEcCawiGPzVXkhhVpbYf6WEx75es6ubygSArRBPGonNpQ",
  "key1": "3LrtCQHJigiBjtJxv4CCrRg98dU3yjTZdta48yuwG8N8SjMLdJpbb13e4Q5ya9CTsmM8WN76vaJTk5QxsMed97ws",
  "key2": "5uUUhxPrhaNKT7Y23HCH5mV5C46VsPfamMFHp51yussXQ7RCqvYUgtgDyREh4jca7mP8RaRqCvQDAUsSb9de5kbW",
  "key3": "3RnkqjZJxt7xLdcoV8ac1VeMi6hmoNqxTA5xaD3GPNT2dMvaCDaeDVJeAFdJyaDQ6ySxDyVhXfnmQ571miYE167D",
  "key4": "2UHGkQHf8NsPZheB6b9rzKkiZDNkKm4G5FSkGtMKGnEbup8VnLW6QyheM4QBEXahUPYCBkWiVCb2Nm4eqoG93p9q",
  "key5": "5foPp9iXUSVEZtvVir5EFKenYDKF1FNnrTWvTBA3XxAcESJdUj1QioLAjmgNuvLwT1MnKXFeShH6jFunoB4kP4dx",
  "key6": "5TGtKWevr4aB42LuikHmq18cXuK318SZRAL7M1VVEoNMQmudJa2TRNjw45JR7d1KYwT9SUgmpzAq7NvewHCNGtz8",
  "key7": "4MtrAUx9i68Knd1SrJ8vwEkKzYm47Ak65sq2oD6BocbupG8PwtDASWmLu8c2YPfjnqy5YRDbjV2EKQJq6eEzPhjA",
  "key8": "2z6XgvHYQWipDgUeA2wSmcZtHbuACRUq9C2abvhnwBdMUaeHUWTHHizKgACgSvs8gMvqks6okgQ1mkoXq4TrB8cg",
  "key9": "5ZcJXpMVZLrWjrThoPaKgiAdUbbwCC9J7muqTZwqpKXUmzpMmSm3fFBn4TCM28sfUtsGs6D8wmT5d7HsFeqsDwH4",
  "key10": "5wGKbJ3vGmEhiAyP6g8Q721uWwSiKLZrtZNQYSc78bgtJpKnD9ZhK5iQ8FvRoDDjb19V25Pk6RzidnGJ7tVbHLRw",
  "key11": "Het9BR24uXpwJzuLbqxnsARmVPDnwYcg7mbajqGuLctuDns7aajd2qPAjEPj9GB82as2J4u75RTUQwcz3z6gHAm",
  "key12": "56TymACyW8fagoZSm95do5pmDLQz6TPtWoFTjXPfQAWU4ac4mErhnMx8R6K8kWZ5c1ZbusHGB4pAGQXNrQyVNBbq",
  "key13": "35vbQ6jhdQjLkA47bzTrMhqNc2A9o51ccs5mYRBdmMfcqz1DSe1j2gWqFHCrVZvtBUBhyxtff77sw4omALSdr2MK",
  "key14": "3UqWtx5Dk1yoCBCs2HcSLGCKdSL3wyAr1vNqgkHfGf4Kn3rAzQ9xTY255tykmfH4daZVN3GFBTc75FVhnZPAq4mH",
  "key15": "a7n6QQLa49gVs8hiHoQ9aBpL1zhyPWxPAg8Qk4WujyYyZV5XYJJUjtcbwFm1A2V8MFf84PdvFofPUmH54ivUxK7",
  "key16": "5Wbe9iAP3GK6PbmughNFgb2XkX41aTrhDC8KDRcUtSKu3Yqdw4b3ZXL2fb32yJaa9koeKzVsX7tX5RPHwLGPKPzx",
  "key17": "61AQAFrhygdsh96TSmkUS6u4hQxHJK6FcXFAgKrWbRpEyWdYcisWTgJXSEMTJXF5jaPA9V3WzoXUb9LFxYYbA7Y2",
  "key18": "254zJ5bVyBmTim69rgT77fGvYAxUUnC46tjBkArL3NZRx3Vngp9LZvAZKZcBbM18nThvSRphLeobPH8jyHRFceqv",
  "key19": "aZZvjpoKELyCvHHENUhRqgYinipH5cqkASYmyxbMRF2fZUNqnW72yyfBTQ1BzcBa3jWAHTyTwTtj8HZVbqLBEsw",
  "key20": "3ksH831rZFPzM1qE98QCS4ff2GapJf8Km6YBqYPcc1jDE2pTdYY1Q3KKZZKXVYV1QvPDEa6FDYB63zFYWeogfAWP",
  "key21": "u3qjHxNFeZiHG222R9pVWD3PmUcKw63gE3LakKAMryUgFdy8HSrmYDB6f5b8Yxh9M2fXBvHbuBHqSAUiukYozaR",
  "key22": "45SjcdvsEd2vaj3kJyPDr4giMYv2wbCEnULrKb6XfGNUYAWTmCyvBJzJzSj84hdk1MEqigqWRpqkZVby9sA4Qfzw",
  "key23": "5MhuNjqEP8iMHiWtsaB51vtjSTg8GmJZpw8tKdELVZoioQf4C7CoXA7cKXeqeNuyjWUX42JjWgHpD9jbnQFSQKF7",
  "key24": "5CPcY63nvtRFH4mKTLkMxUDYVgvMyKXdtb85eDEqAqomwogs8kvSBvEopf9abnrYWHC19Hztd1KP3AzVAgQnUt3M",
  "key25": "4ZSujFjTk4vVpJyizXSzVumGTeeNPvjvHsaBHyht1MBjz9eDMZcXuoczDhP1utciVNp12jy9yao7AqWxqa1cocvt",
  "key26": "5MUp3YMoJ3K4TFoHjzsRx7mfQanNurygDT8vYNUuYsMMN4V8jxuSTcEuqZcrG9fkHPWtMUFq5erpGKWEWxc5QzDf",
  "key27": "52PVcFpjKiLWfvzqRKDptP8NjFuhdVWvLoLnLboUYyieBGMRgzKHjbyRJbzrKBKHK3pnWfb7aZ8HopTWH5FmxArg",
  "key28": "3tM7Yz2cpVz4nhahLtcx12qqCKNCLnV86vj571kvwg7MMrPwtz7gVN2dKbJQaefHC9W2MQNHWnXD2H7oT3MkfSVE",
  "key29": "evZAx4zrf4PNvzTZZTRp94vWnufvtUCFKTGJ34kbnr1tSJvnTUJKPGTNWAKvGZKQpRxMaPXqN2WR6P2qRTGAkRm",
  "key30": "56JTspPact2vLyGix2Bi3e2kytdeVA4QCgjZ8DByZV1qqdVXNw1X9kreh2dceSP3DjGvhqg8x4mTXbfj9yLeZBeE",
  "key31": "5gw1bpRezTCuYPD8QfkUVAmiXGWGwjB98oB4f69PacYW2q4AsDVzBUL1Pu5e3vpCVha13frgoMubitWkwXd14caD",
  "key32": "2zZvFNJK7ZjLP8xP5YCoKQ5jPnngj3WotXWdokfwgsm3tihXwp7c5T4EBBxbXmT7V5EqkbVaJnzvRXz7uW3htCqm",
  "key33": "2YkWAfiZ23nKtiWyLDReeTEbC3CL6mfUqSU24Lz5vwf5iRmeTbzivi6ohAVAWKYjLocDQPUAkBhaFThjps5LdaKr",
  "key34": "2yLzSjGGUij9esf38jQiqrNZwFysH7hYpCLAXudsvA6KfUKHamz5rW2zqyB7q8uVJ88buMpWjUjpTLkoxLqKNL2j",
  "key35": "5kr245kfCNq3cR1ruHkknjYd4XiU86zsA9oG1H66upRBv4GTo79pw8EZcArzJz2ERFYNkVZJ26J9oMB17Vx3LVWg",
  "key36": "4LrH2RUQDNwxkGCspHPUFZ2cQmSTcf9yBk951Q8zksZT8JvXL3eiRcQrCmFU7x6VcWjLbBR9hgNsASAS4oh2GgTx",
  "key37": "2tf9qeQYWR2L2xuFkwTFy9g47NyTepTfuo4tNLW2arJGxbSJx49XRwc6ADK1iiUx8ip7L7LcDyvTLp5yXXB7uURJ"
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
