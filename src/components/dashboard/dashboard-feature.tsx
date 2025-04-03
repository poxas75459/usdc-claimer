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
    "27y3EdUvZCJEHYVCTDvPYRhS9NJYZkzjBLVahaXYvUVbfqDD3k8GjNKfX7pAVWam536VS5xWH25SpMgwjoUj1i9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57P4TTzFqQAqkJ46DKJTFvF9MJ2iPqGwd8TwStdezhakxysyg1bVgyRYFPhFzbYck5fkjgYaU6LvBJp3o4pSiXXV",
  "key1": "5UDTery6iirXyLeLNFnZuo7ENkUgXq3qzHwJDPem7AEYewFCx2TjnQxDJaJfLZYpZvd3Ex6baCMG7GLa2jK4Y8iL",
  "key2": "hW4jsanKCMYjTv4nKC5UfR3ZazHuFi5ZDoLp8Hfgt1UMM7kDQKz3yrX1dQ4H9HoZPrS8RYUcpSgd1KuJAnnNLTN",
  "key3": "4HgerEWMY1qDMU4gZ7e3NbZkFRQaLFtF8LeAKwVjWNAeNjRH7pRNnXtKPVKiWVpDiEtboLYnVfvS8ycKj5eLdKTW",
  "key4": "ZoksynfJNtCB2agR1mFaL9hJaFT2ZF3ZM1g55JBhzgapQdsuJxMJh3a6EuCk7EDf8kF2sBCzYawjCZaG1nQZ1FJ",
  "key5": "5fG2RoQpbFHCPiHqzR1fwVEsnTeUmmwLPCSD3BEwsnSV6ibLX5mW2JmQVRH9ep6eu5h4sdcThALtU7PBTr3Gp3kN",
  "key6": "2hNTbsJio8V3G1Gyb4qzo776D5WXupym9tye1yRkCuxSgfw3BXEDydQhe8SZserDPERvNewtd3Z8KEMf3imF3oLb",
  "key7": "rP7EartRwKwPdv9UDFVMyEjGXJ41othMqywBNPjoFUkSnjo8qyY7ffdbz1hRK4WLVodBb1nrkA37JAF3pdivNu1",
  "key8": "4rd3kYxjGfbBmh2cjHyJVWNqm7LynA8uL4R62GDbH5GJSAxvgTubzrv1QmDukpTy4oaLx2AptfoNpYmA2bAJxyJi",
  "key9": "5KiNS2bevnL7A6vJ5p58K19duFDGWAZGcQ2PViLuqW8xCBCdqSRewQNc6R5Hbch2WFJnRhfdbGiTDTGwePyYj4PG",
  "key10": "2UBb4t4frXi1DueTD9QndmyAtAbgcTHVT3j3k9Y89NTNfsUXuHC97m7PSqaeX5qYXT9aTXAqXhNDayJqwWRDtq13",
  "key11": "2TxySwLmtmVvhHFYPggEVRodfVYg63hdMbu3NzKYdAj7huRZKQ4cx19XAh5wCscEJzqVGnLPV9PbRuFGPensXEvX",
  "key12": "2Epk5JsC8wdHK6tyjDNxwA2Xxkwp72AmNCcpibJFtXdFM3bz53AadijkUtSTGrxfmneFk2WMBbxqxDuNdGLAjqUp",
  "key13": "FdT9uDjr1tcjrsb7LwLTBAVfaw24JXaihoGoS3QizUcN2JCcyhTMsXy5CmW3EknRcdQR4zEtMzQYFaKjNQEqoQw",
  "key14": "dChwPH86s4iQfKR7mVzGXUDSsWxGzHw6c3PD8G6u7G8CjrSVWaafM6rUeQykMbj1q2gqZgdJkBQaZrzLJLrstaF",
  "key15": "5Bzz8gJLAtcydej9Cy3LiGspFeAcNqX66unNWouoBvRy9J9ewobPuuuucHKwX4VGQebwfqioLXNu5N9uNGmyWPax",
  "key16": "47LU3GNmXXL2rdkEYfGUfPtHHFbxW3W9eqssnKw3kueuuRSWuCygvRULuKAMFqu17qg4LQSr5Wp3UUontkB2bbRP",
  "key17": "5x61GCwdtN7EX1W47eX1oJ5ogw6LciYNWcxXyKuM6rLcuykmRNYsE85bw3J7yuFMvvzx36WhweygeSQcQsDJQEZu",
  "key18": "3bLnWzFEg9jxTujSCoJeFwCYCyB4LGMmVViZwTntDe1MYLtMDW16juHQASHB1ZgkmGxvJQHRRRQhLNPafJV7xvgm",
  "key19": "EZbhYEwnoFqNJTxajXb11VPSb4sHkfchYLJ2HYgd1tMhvVX8iKHMxpDdvFo63q2Hf5gcJMBt3w1Xoz6SqMn11rA",
  "key20": "3tWZtRFyAksnkoQ2yNPf4LywMUJbxzX29CxUkQYusaPd9VRXQdMTjcRPDfedfTuyQJtqBa2zPnocTPyx8FeYoXkT",
  "key21": "4yQ9iWCH3ndan9UFy6rUf4iar3NC5GcfvAdXNj5xbRB9qbLfLDFAiACJezNrSvb7yeeTFFCNJiRsMTRjYYeXNTAz",
  "key22": "4eAhBnumHTUD2K39j2AxX1mnMF5C235KMJT3cqQmvpB5dxtmVE1G64jBvhcTLPc3gcfPabvKXCt5Djc4Cn7cF7oz",
  "key23": "2qNengsmthG3oQs4EraxKwg1AVq2yS4MzLZCfdoG9qM5SH9Ea1627XCU7FFsiseEbcZ7UTFYNTsorGz1odo9vAu6",
  "key24": "4Yp6wZEW4LiFU77aUfTESfneEvvNk35wovQkbuuRN55jxYNAQApyF7fwZPA85Q2LXXhBBk3qV5Tt5BzMuyV2zuem",
  "key25": "4vo8P1pZ6nK3mX51BkCE7TjgeGEboHny7gbJUu6vDoj3vhfavA8pu3tykEEcT6MLzD9FXNWupwe1XSwLbmDPbgnJ",
  "key26": "mGrhLaPucFxhbC9zcD1bCLJ9SvqACdG1ZaodJfKYPdYpWwohbx9QeTkZ1aCpLLvdaDR23tDGHary7sDay2au4TQ",
  "key27": "3qqLxxtdmGPoyuAzPTnXdD1DKcew1PVSskc7T2AArvpVCJJL6nsqzeA7qDjJWhXGkwYGZR5CVBZHrTAjpv8J1RJw",
  "key28": "3CZx9CtUp4reyNfYiTYw5hwnvVC2xjAL8zSKMQuqnfLrKyvL1va6eaBS6pLoJAZhGACUG1RMmDZdSfnH79PvAMuj",
  "key29": "2KS6xm6NxhNqGRxDaKHtmrL8tB8rawrWcdUWbhQ1jv8VrWxptfmAwHDVYqZTxe9KFP8FCVBD4MLVsqhJxz2JYoLb"
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
