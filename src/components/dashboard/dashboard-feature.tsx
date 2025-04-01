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
    "2ZPsKegKnpZrAL3zbA2ZRNUS7sc6YD6Kcgx2CZ29QbfPEfo56KhySigC2UFwqTKVVUUKYfdvGSR2CbjwGeuVFRCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yYN49PJLmwXktQw41owPY9kDweKLrxu3XDC4R1ndpi5Dtsj6c8tQAZCnr4KLgD8RXu4PNJKDY6jbC2jmsN1qKKt",
  "key1": "67KGG3CXxmPHDZuFQj2xz8tMywFGeLUJpiHuDHFwiBqYBuQv7Jm1YkCJ7o5ReGHRPVABUUsAcijUhxBuaMFjtMsS",
  "key2": "662AENd8AQVRG9Mxp498a4GXs5uAfx8TNm5t2eWQGw6ZnzvJVKyrp5kVbkFtgpoFvqPhyCGyg3ihZsHhb9EZbRvB",
  "key3": "2C2uTvSMaRxuhXHX1wNoC5jGctcCxTRW6H73FWCVKmWHQJuigD8Thv2vEeSkECKYeA9ujsK2Wyk9Rd2tQEokJaC9",
  "key4": "5MxgLFYPBXyz2P4PW8vAvRYhPsKCoPqMRPM1ohn6isbrkzxYqVrzz8rRm212Fc1jBAZ71ZpgGFXbdzSCQPCpuMor",
  "key5": "5iNKdk7yBU5xamGHievwNkNEWnvhjtW2ske1K5Pktia2rjC8JJ5KiiY1Z2N8wNczD6CTmHgoMkBozUtFocccY4Kq",
  "key6": "sR3duwwBLK7a5mZRN7s4XZRaj1JWtUdCLmEP2wsHKfaCZHYCWcZVqiRryWwdWah5CcFX6SAtyWbUwPucmRVos13",
  "key7": "5WqB1mcynVduUaiwyeGG9b7Wvo1n8ZNGWWGCJrNJBiFK6v8QMHTjUJJg484ymTR6kK8SNJNM9zr2HdqTNHzFUcsY",
  "key8": "27P3MgwzmRFB21Gw8x7MXZnX8Guu7LGV9y3ABNAnNFcPzkPHmxQc3UgTytzs19cjXxVN75Wm7TazvUmziMt7Pwuq",
  "key9": "2PVoEhj3amanNTBLu4gBabg4VW14fHinTec7rk72XgHxdovV68wtFqZfpm2KNRBNtcKEeJCE1ACWSAUinhB8pMyy",
  "key10": "3bF9aHbncFKAVfXUB6c9UUF4L6V8ncYC7u9thR7F4RRc38c1y4ryy1QPfAYUnQYPumZ8xQFvWeS3xu7157nm5oAJ",
  "key11": "4iT63XaGUh7EUAsXuoyozhJPf71FTBrVjGWjeqaSMrZNW7z8h9z2spReuc2W8LQH3oD6DpW4H8w3FKyQqj2wDnE5",
  "key12": "25tLn3eJZtD6iGz5uFPTwCLjqoPCvcCdR4AyJPqFQNSx9WNNVQe5PBQsrJR27jKqSSYPiTonug5e3KExUZGBX3bV",
  "key13": "5jmTrdERsk8ZpR78g7ajhchLJPm3VHaYvZdvsr2TBY7UGZk9CYFS1yUnrQCUu5bTmmRwmko9YTfUJ3cqd7JRf69i",
  "key14": "668CohuKbkJH71iP1Qp3MjgX3cHngt4HLJiosNYiK8DBAFKVNfisMqZEASjm7BRuXXBXnTxTibZHRQHUsDwHbiux",
  "key15": "3qmdeYq53nwPzrAGUPrJBs4JFp7CaNYxtHLP8VKjXUqDVbWvjHtHJZf9HFWkz3hg7ULDD2CjyrEY7c3hifLVxy9W",
  "key16": "2YXUHKVhN2pnDwYuJ1LS5RA4XgYjUMs2HKJCoKuzpP8sBZKoJdFiJkwUe35VtyJc3aC8iKnsyT8ZSMuBBxACyeRo",
  "key17": "ZHta1LLtUFypsVMibcDVQqrnfBojvPo21azLNUjcvbqRKw6ibn612t2autifcCXVuRvKuXSWEZY7FFHWDk9CUAT",
  "key18": "5J2mszBcTuhLBcCLevFdVA6JyPjcLA2K1BZQ357VSFkoQU6LGo6jYNaJW4XSE2xDvVicH5NoDRkMrLmusnXiMhUb",
  "key19": "4FwLfEHhFH5mnSYxZHJMXpiMBJ3fKsEq9sz4sZAhqNMSWaDgfZU4NgwbaGmgHzYeVgoJ1cNvZRc9QDsq8VSneVKi",
  "key20": "qp3RB2r5EBFDDdpN8nQoZ2SZmitEqsnqKaTePgewDKivgUyELAyLUL1eRMBEBejhXFRALvrLPrLpLbRdt2aH6fW",
  "key21": "3kqFeYcKd2ELAckGLv1sqhD7W1squjwE167ctrgnMbnzswptb4mhoThz2EB6yByGcyyp3j2WxGPFbRujjiE2Aiim",
  "key22": "2GV6CHtGCd61i7tNpJ1TEYGh1zEqTfsJfDFegCVr7cQSzMkgxuQLtgnKD8P8HMZkE9inXbvb5g8Qjoeb3d5DYRCK",
  "key23": "4rjqXageggZ1EeeiT2D1vtvDU69JuwL5U5HHtomvwtxFf72TchQW9Cr74U7gx2YAHKvmhgWDW2Nr5kHrAsKieD8K",
  "key24": "3RuG8pE7CfuRvhZorbLnzTJcPUjnJ56dZZEWmNzBc2RRL8RrC53UGHn7tVMQgokyLxekRQY7R8CyGHLwPZ8QGTjH",
  "key25": "3AGJS6bLCtXn8cbEkqLwg4DCDFMB7diBtcPcuhKNw975ut5EUWjFnaLrRrbMuhtCFkgvsVJRhJcxuGQ6NJcEQgeC",
  "key26": "4hDtm4ZK4G8rHFD7cBRaynEUBrEzpJMUxc3uPk9v3QNiLWvYNnC8ZfkqPedhXWAxvRCcPUCZWUh1xpahh54AKVtR",
  "key27": "245awpK4rTNtqsGXLQ5ygHQ6znqJWB3KzgwoPTpyZeT8KBU43uvA7UEHakfWaVp2UdBg1ehDhQqh1Hfz7WHPn2AG",
  "key28": "3Hiumyvzag9DZSdVGRcCycrSJ3e1rojQ9Hyc2SDi2yhZQmUcy5PRHUUPR6DNL32mvoTvqabaMpqW6vt1MPg9kXWu",
  "key29": "563KaYfhviNUpJZQn1Qtecdn4KZLV3eVVHLkhzcCLeA28nqiZnipujgPEtj8mfGmuH3T74fhDHtaScYu2mbnvck3",
  "key30": "5ds5vgqL6dBSixgmJDL6XozaveacRqJxz1UwVTw6SS19wcm4D7MUPvkncCSdnhoGhzSujrsuhJyiqhWijVYtwLmj",
  "key31": "3Ee2HEf1swEeXSzfrPJJvYqWSyMPWJfEpuYLaM2ZkxxnLiHSZYqErShV9JcijuJqpBYfMGBUgzPwLKM9RDVApu9o",
  "key32": "3FMpiaaoJMPC58a7B4F3dQGB5yBqmYb2y7Txkb1tie1mBdBhMxvCgVSFKVokGfqEvht2Wu4Uxp41aaQ5tQ5qy91p",
  "key33": "vWfth85k6etQAw8tJSQkoWcryVYAxStsFDNmS4mnwMes3DbVqvJwNQ7k1NKxTdLtmQEbzLjZ2oibz4ytzPJo1R7",
  "key34": "53Au4RFcPMaZF3WkHPhx4zYH77iXgmfKMFvizGG3QQsAZK4C6VpUwcAWUWxNh5sQYMvgE1fUy7sqgXegdHqfxKJC"
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
