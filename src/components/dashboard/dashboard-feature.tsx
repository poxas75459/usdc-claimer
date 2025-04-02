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
    "5tMXyz7uRCfJ7eeN32JzAKtWb2ieNRDufxL3e1fNFCNMCkaZhvAJmu9jLXgKE4mRPmZnqU2s5uLMdFvCRzMF5VLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YQG8v9UNNPbtZjA38g98WyCxdqyd46SH1D91md3LdLpCs5rAeo4ygkeWy4vFA6wR2JXPJrKGbMQtc2NMz31kJf6",
  "key1": "3MBPphKqQKCqQ47iae6zrNpWSh1jzW9FKRkdKa2Da7VaSKP6cxafu45iDQupvas9Cs5K3TBzAL6FU7LSm1gtcgM",
  "key2": "3zY2UkQ3oQpAsRBTyyWUFMxgWzoDGdX6BnjC2P2dSuZUnF8W7YZi5QQHTegCvGH69iXoYaWd43g1d7tXkB4GvYsF",
  "key3": "3scqkE2gtiqnS6oXLgVqWLhB37ryh1KAt4hpj2LPzkcapPJs77K2Ev8jqxWyKrYU6tLomdHcQmBYpZqVFfzfTMkG",
  "key4": "3ULEutjgWVZJghsDHT8MZjvmPhkef7aux5dRwvUDbZDSiUkUdArDtRecJ7ieqBsswWWKRiJMd4k9kekvTqXCLnQ8",
  "key5": "367StXrTYPZrssUQDdKriqyPGkRxJW2suiJPQinJa7VEnH45UzhkFLmojfwv7m1dVyUbvhGWhUgCr3jwnZ3iDnnZ",
  "key6": "2UcUYRKerYy9ciT8kS6bWjwBqwNsELcKGPmmrFD7U5GqUewniBzafvHHJhKttcwW4ps7msG2bcvx9s23X3PRESAp",
  "key7": "2aNkRsZNQi7L16uePL6JCagMh6DvxtLT2ZCq9muvKnHSJAGMhCbrXHgMWxj2f7jgVZ8Ng65V2M8u397XXc3pERKo",
  "key8": "2wSmR2YbPs1hNuCFmZJ2U5kQgfZSuKFJYqvGLbNHWtNdvkzUbpoHvecej6UvyEtib3gMmHk8MQj6pu6TXzDXMgLY",
  "key9": "4z2cRXBH6AVG9beVrbgCjaLUHhj9Mmx6EXZHH3c4hP9xbrVHqceLEu4Ec5o4FEnApv9oTJmZoXLNDDBa9YaKuHxF",
  "key10": "5pTmeNZjc6gJzaYWxTukcSCfVuw55BSkTaSEZe3n13Xa8qU8iL7NwW8rgEWSjw265x2cuUApVor8h6rHqcAcTsAT",
  "key11": "5BPHfSkkYd9kuVMcy6faLzyEf7u5XwLnDwZMBKhNL6636xjGzHvCrhUNBQzKPxMX1HT1WHeCvhr5wUxQ6Umthm5Y",
  "key12": "5yg83Y7d95QwbTbqh3b3MvGwgnzCXqKpFmbvoTJGMAmcWE7TceFpv3xFhq1F7R4rsQPrvpgqXddezcUxP2rf8udK",
  "key13": "2sR4DLaFubZELyZk2EXTDS59N9GWHk1MGGpoWFb1xs9ehbKjGQjah1cwVxT6MAihCL1GbTcX1Yd2V2RMrXw1htwj",
  "key14": "3LYwZzjKzyEwunNUrJfiurSGk8dRdsiafqycqXXFbts9c7HynQYzXJoUj5D2tAiMQBpmp2JmcFksnu2mqhJnPKGY",
  "key15": "NESURjzud1Dj29bXqCspDpMe7rhR5aqFKbMpcWdanj1PL1N9yuAMKpQYQwbJBa794tpuFEZphtkK1jgTr2S6jsf",
  "key16": "2kckNe98kiTgevig7c8QwyvfAiVddBXuw71nWquKgydaay4ffu6F8tjLwiYfQWKt5qTNuKVoJfWuvW4pTy2tuGLp",
  "key17": "XWtwrG3tzk8orMxT1bvV4D2YTmxs1TgkW9BqwuQMyhtuFuG1BTR6ZrcZAK1nNeJMSS1Nx74bZViVYXWB4kDyh2e",
  "key18": "2RspeACJnQ3Gp3SHgWmjy5oWFdja5tJWqAK4gF3F1As8eLdLwS4gnVuUNafUPyXAtxdBjMPCivLRTkrfeqJTKx78",
  "key19": "5zZL8ZZ4WZjkY8oR3qRwawoubJxdckEzKJQeNS7q3iy2FeSa2s45vF8MaF7penAtFovpbiPKNGX6xfjXbEjZiQXy",
  "key20": "621Dt5P2FeG5zaMktTWN6fBmBxqfCnsLDViwLhT7yvUYkmLFfYgZuxNn18D7ev7UBjSjG5dwRbbzXPYhAsd34Hf3",
  "key21": "3SrdE9fn1zLL7cYj51LmQ2LqMPGYto8D2LCVdrszq68vASRPYjEhmP6UzbLvbTMJqqbPaXECnxwBWuJHYbcw3ufh",
  "key22": "4xP94zWu12MzgUcSXno69iV9MHZ1XBPzhwxpeRd3GvEyTzkj8wF7ZWdR6RdBAZDr17djShv6Pyy1M96QxwtuvU9m",
  "key23": "4Ksn4G5xeJ719kQ4QDpAZkxAKAj6NdQG5paJrxJUDET2eMu8n8YCKxk1yBt45ELwDtinqfE1nsVkFyHNGb5EGjUw",
  "key24": "3k6CntptbrrGTDg8VzvT2wS41coRtRyRBVfXpVg3Gi8fXrubga1ZvEp6xPBbtBLxyNEV2myDTZcTLpTQv1suauGJ",
  "key25": "2NnBFt9JMS7JV77iXMxfV7ymB2ybFkNDWweWqjNDHSTrcR1cKnGuddTuzxhT44pgH28mdxKETV3zZCc62zcHsDxt",
  "key26": "2WLbQNdpB1NnHvuHudwNPi4rm7DXk8nvcKWvEgwJjF1tPjeJXRRJNdWzZMEpthpGfDN9ZAuRZjeW4g44KAajcSrJ",
  "key27": "4j2FzcGH9deaEkatQWeWT6bkwzoLTwYM2qccsNXPincGX13rfd5wYxn8YK5oznLJcGEz6JhXRd74bHZxVZugJoGD",
  "key28": "wbr9JkNP4Dq4S4VcSKyJ4GZuaW9ufa2k2xJmNcaup19GVV3TzSqD9xmWAAbL1mBbENwAoVAqoFH7E8CXyt8nTHa",
  "key29": "TN9p2jmbM2A35DFzkEDU1MoRkvyGiD6LQzAQMrgr71Hmc9Dwcm5ZQjWJdk6EwQ5aF4CgU2FrSf4EE2CpFv66VJe",
  "key30": "ZiHhwucup4uuqCNWtq7EFTFpG514cZ7QVFJXeMMCcxvZayFBs5stkuPYozGD64ohZRzhiBKCzo9SX81sAeG8xfh",
  "key31": "5o95tuF7MmdeFXx5Cxf1JrrGE7NcKsfvAGnC3RGgSXj5vWJ53C4FWanjSCKMoSDHF9cNfhCxx5JGF8KQmj92Wza7",
  "key32": "yaQqiYSHE9Vzh6JqurkiU99NJJLYXoBpJn8gXA1cSwvaK34vWHoRy5yxnLuLFs1VZtSi8comZLKuPeqFpx5JeEc",
  "key33": "2LAfAXCCxpFuwusvvsSrCRU45skyBwPhk26UEyp9SaSuqkvNFF9fMHDbD7tprmVHanVGrFneXTAbLpxPKFKM2hCj",
  "key34": "5HNTHVi7BmLAyMC9aSinRfnkH1qXFKC1wHzjfNhCWWoBxCyPVePxZm14XJp1tBptJveae7sFxekdCQKxDJoskzhb",
  "key35": "65NHWwNHoctwsbkMNDHUJRtCzoxZuEgb9KRHxfpUZ8FU3U5RJpGHGZd76pe7nNf6BBghgB5MD7EzMJRabvZMQ8jq"
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
