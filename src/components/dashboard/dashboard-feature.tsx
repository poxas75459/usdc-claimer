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
    "3FNVmFbKvEy8bJLZFCBTBsS1HdRp6uGJBtm2rWMfkYwHtc4WN3ZHeipv8ZczeemUXc8GU9DhmvSXc8ddRuY6txUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m5YdpTzpkzUdPiscqxTfAoaG3FWh9UvcHN9uWEyHgT3LVNtnvoawWEVDFaogyCZenB6HaVpNPWwDLJskM2C2jc6",
  "key1": "3akUovSpsG92h6x9UTL3JXC9xU9DeuGzCGiBKqNPjPjdQvjomnDhUGNkxeU8A1aZL47v4cWi2vxqUfs1RVbdXTMj",
  "key2": "4oUoecg9M6Sbm2fRqvSB52qgC15SvihVU5oK9z1LRzckUvp3DchWojveUq8TR9ogiocjuL42jZ6BDZxn7EyyCPa2",
  "key3": "494aJYtQuFFKWKvNQMJCHmBqC2k4u2TBeZxi1fEBE2aRpkPQUZhKGiSAa51FyAeMMBiNMNLkMDVwbS2VxcNsegiZ",
  "key4": "4xzRdrttLrvS14mgJdexUrKk3JVCn86ZBRD5zXYsktH6j1XcDZBFcXMod4Ks11yjvRCKmqY8Mp5uXWTiX5576VWG",
  "key5": "56WffVmcwXCZrXn1AHAi1Goc2qw3FQntgRw26wJoQMYMeyBEKchdHvzFngZt2wRQjjkTFsDtysX2TRycWnZM9UBT",
  "key6": "5hLMc4J7YPMXabP41jMFS7sfEJ7htWMHrYjH4bcUMT3V7ey6VYmePSKkdbzMrFwYgR8ZsHnjXibaMCzvLMtF7RPB",
  "key7": "43N7S1ZMpE7WcVhSKh83KEFvyiDiFeN5CtKx9ngnA2jzinoUqw82zhi2597Tds4mK7FKUqyV9amHPJdbDhNYeKWE",
  "key8": "5rDxVcyxUVcR6rQnS2vkvkZoWZRyewZue5J7exVUvBYGFTJPKFrhd1MnRzEunNFGHJEMBdqxCXoNq9ge3LsyAy3t",
  "key9": "628AwkQcGnUzmbkQZfqCbG6DG1wrUfjKospECNUemVqjef5vogYbjyHAV6MxAZb97K6kdW5ReTPTQKfvDobQs94V",
  "key10": "5bEkxpFPc798KSNmMQHcEScs5nN9pcGguW6VxAEWYQarmLSHiwKvcKuDC7sNuZRh1EVW6VwLYcHX17yavdZ8DWG1",
  "key11": "4dFjhrPc4rHoNQRfpqq3SCXQF94E6kSwbebahnJ3pqm95Fg8Foc7UcgBVYcEzqLiGJnTL9L3PK8QZNFp9YzUU3BT",
  "key12": "3nc5JMPcefnx4UQTtG3dPPvUpFoR4vvRVxXLtrofwu1DffJCbYVtR39fEU4MNK64KSAGq8RZvDTaFkyY5xw1UNG8",
  "key13": "33CNYDTkWi42SGmidE65CuFZdu6UdL8E7DuYuipx4iPceBxQTHLyfSew7XB3ngRvDGMykzhMtNgn7qUAyuzAhgNd",
  "key14": "5rHxx97vy31K8A7HVgQa1e2Z5t3AfJd63TLoGJcX9PES43j1Dku1Fnqzdd3smZLwa8PFthdVo3jkEhi7FdGZZv9q",
  "key15": "5k1vUdfu8kPxojjABg6a6FVJ5aH9oKofpMNnpL7Cae536ZLxASuY6xn6mWtvG2XHY6Ghjw2t6vyRpemsWKmZcrw",
  "key16": "4H4vm6rLgFKmQD9vuirDtscj8gKbETBxn8AT7QxBuDfzPgGyTuchFaaBnm9wT4Yq1nqxUWqA9jwzrbBEwMjwned8",
  "key17": "42iu715dDauZNH3AiqWeYH5WnmmEwtqsBbtjq2PXBkudeJSiswDncHisT8mKqtq5F8tA2ND3FPubQEctf9gWNvmP",
  "key18": "tpU6HFYDXjwMKxCXSMRuCFHeB6D6dz5UHNo2HewhA5NsEWQkwvodfRSx9pGKZcvtgURRVDB5d1nHGQPbD8zV82X",
  "key19": "TLM69R6Cm54wjpH5kWb27UEgSMM65efiRL2QWFQHGourfiSxT5Hgz8mW6d4tWnPTkDP7MPmE2btqRc4GvFJSjpn",
  "key20": "3A9XCRwjJCJzvvdCsbQQBEPELMvSRvtFFYR9R34yseDTg4sKgs4Cz4AfPGYfgErW4mKL3AH9WHpETrtS3dpXQnKj",
  "key21": "5vE7urzTHSDcAXvvCVEYsiaXbQXsD7foJMiRNmv6AxX78yLw6fxRfBsGEgwX68JYhxdD9NVQbrafpHXioCe4RSZ",
  "key22": "2FdqvMEKGPMR6yakCDabQsKHLHSgTgpqMARJfj8yyG4PpTDi9MhRzTBHfLfr7rnEsrd6gu9uBhEYZ3z2SkNFLWKy",
  "key23": "3mxhU8e4PGn6C1CDuNLijQD23zqyA4hakdFs7p1wsffijfPUkSU3bvfBdnLzKLwDr9wyRfk6hGvGiC1LHKXX4R1Y",
  "key24": "7Vnbr16pgQEcMXM4eweqhNAHo2vRq6MzWiquErec2RP1TSCasj3J3VUCTMtkNFCoUhmTd9fG1YHMyPg44NX2CPR",
  "key25": "2DCKXt8qDNRVwAYL76NBABCsYouXE1CANuS38gnSjEYnFirHeP1eQ6ddWHe9QsTQKmJwRBp6nq7RbPC8QnVUhvkY",
  "key26": "3zrYNN7aPb82M4wGSfVASMKGy7cwLidfzdZzH8mthsNJwzg2rWJvZqEJWg9PLGcimeWR1q9Lhyf6FCyTJ1Lwmd27",
  "key27": "4MBvgP7eokjWKifXhXSBXNhF34eyeGPqMnBqWpFL8eHcXYPLVLaoEtLQsXaeEGZHYpo6Ldc9MFWX6fEMKNhFJ9Q",
  "key28": "3Lz9gjc2ne2YxY9rDJ7C58yfTfwxwFNnJPJRYtcBgyjcUjJGUfYSFMZKtdxkk9ipzC2sp2t2ezUhq4c4n4yyrEkF",
  "key29": "34vkVLP2yoACgYpbHoHb3DMoVmttSUARffXx2TdXzc5QR4sf6kvDf7gdDxHMrf11P1dGEQZ1ztbQnEEjCxnYZvbN",
  "key30": "4sRzWrQUbCFEfpKvJsTtDo4apP535YQWpuAvQ8Lo9L9WztxoMYY7mRbQTUop3uYGMbJMPfQGHdWbzHReYJh9ewi8",
  "key31": "59Uh7VhUDnSkHiNHSJu2W5USrC1r4wLncb1HPjgd444AKRD1Vdhy8WQYidRU42sA7AbkzAEZNXjPUzQecpR7maRh",
  "key32": "5koT5hBi1aj2CjuvDu5f1y2XdwsCKY6SCzoFeNo19Ad6diWnBQLvwq9JP9Ts7nJsFx9b8FAhC1ozkUHg5AiAoS6V",
  "key33": "25Uyz6RVGFdN5BprVqGKH55jk3LKYzbMpyR86ihptM7tLRafDw3qx4AVLFkTYRPNkZc113PgynZDLdfhJ3zxaPyP"
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
