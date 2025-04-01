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
    "297Q1rD5S4gLDohhEnMtSChCtKiyQ1F6XPB1m1LM9VRcE3CjLoJyHHp3eUghVeMT3wDLdTk3v7J48eB6fzq3uWSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wKJgjJrcEiSJXhWJLSDKtpX9yxKWsbd43o36SqjyJvAvJYVVZRHobjwWYcGaCEgNTuE2yPxysFqZJgkbcp2LKCD",
  "key1": "jNWDRWwEvX3gb3Fz1B37XLiJZbCmjvXLSrXCmaAMS7jcMNoEQSwA9wKEEdhUMdkiTA6NJpAAMEaQVsKTxk23tK5",
  "key2": "5Q3Vm2j6kik6gbS6Ljrm2UGrBGzRATjmPDZZQuzS1DbuQyuc3VjXh9pavBfyB84v3XWHHJzoeVPeZwXwfLUG9exw",
  "key3": "aVJDXkYdu66aec1vBSNc7FfiXaZf4hgqxSmP1LYmSJ3Hp1bBMUdNDTNHbXm8XZg5kddEm3s1gYBrYMDP9Btxgq4",
  "key4": "4NvoyDB3UweLXF9RjyoaMaCFjc9TjaBdBaepNfogipcQUToY6fd9ARTeXNn2Xqb9kH9RBU5Zuid3StSJD3KA9pHq",
  "key5": "25YtgaFEET2tjNzrL2r91DivvJRotiqcuALbajYie8CNri633J5rK9sSvtbFovuL4NSS4VyujLXcVRXb1e7tgoKr",
  "key6": "24iZ4cv1KuKrRQwTq4TTcaoJHfUzvmQ8iDEAUmQGgKTXSc5vVmncw52czxpBfmRwKJ72osF3raQG283rt5Njg8a3",
  "key7": "4128Y8byVBvmNPLfRkL3oFgssCTFx6WRMN6zwHHbk4rKfyjGnneM3WmvQVLZchkpdDACnzE8Pgi3PVJLtFMbnbee",
  "key8": "4xUk1R8Rrvum7DvGsbQoT7reLynW5iWLK9PN1mXEiY4nB78HWH9Mo29G17VFJ77Aqx3UqqNTdnNLcqMXhP5zADff",
  "key9": "zQfGJUuGZnriT7PZakpJwqYanwWF96rtHa4EDTP6nSUpyNags4TD3pAz1NMJbfN22kTWmgzrH6nx7HKUinj4Lan",
  "key10": "2BjZCwcfdWQyuZbCSrrU9So61mpcNp6vZNajfFmAen8hzwhQ5KWhfVe9a3zb7LFSfpoGwZaEimaRdCEqHvzRwTyG",
  "key11": "5a7QcKzKjHxbWS4rhKhQPBQTHkYA9B489DUSi5951PBBxz9wZNMQTwER1dKsjRFgv3Mukz9z12TDCB7wvdvJZoRm",
  "key12": "m6rBsv1mDmqjTQPo5G1gv8qaLp5ozFTkPNigyf2L6NGLRtT7qoLNhP8GGFeeFgNKQnUgxNwYiXQftiCzuL9651o",
  "key13": "7jQBes9cyn8XMQNXW4Sv8CuJQpqFSMTPuC3hsxEoGfZaLQFPVnAATHqjkiDQx8fqkLDC2HKeuuEy3s1LTVknhC7",
  "key14": "mDydnxe43VCRzTEuTbGB9MPKALeMNuvSZwtmRu4GiXvFCDbuvJfNCT2GAV76FDGpzv1hpxQec1E7WhB9En9iAP9",
  "key15": "2MdKf8MEdtF8drasXm5dr2y7vtbA6p2EdPEyaAxWLT372jZWXLHvx1GcnXQcEkQHcwCQ42NSNPqpjfwCpddYwytW",
  "key16": "5197DNFXEuJDGCFVd9b9VQQQHNiCvAC9TLjUCFTsCCVV8PVf7iBcTf2rAXGPbupzASaj5ypRNbKsQcVzAVPEn1Uk",
  "key17": "2JSQ2NpGeXwTn2GQzWU9kNGCcZKxS115wgTFcd6sg9bqqhQE9KJuqe3Ddh7rJgyGP4xCnWFtM5gqCyrMtgNGX4Mx",
  "key18": "ufPHpMyc9EYZMBAwHv8XTLFwGcwW45D9zpSFp85SYk6Wvpst9SSeuSghJesV3L1B8bfWhVwqEiJhT8m3Sg8nxt1",
  "key19": "4431Z5FHFascfkhGC2xb4wTxX1oSJBgNdhEFar74TQSE7VD2tbzakB99yUjBGL8keXwyhzrPnuq2mPu4YJQV69BN",
  "key20": "2YfCKZiAQWL56UuswYy4Y48PKjXxTXyuuPFaBaQXiWiynb513UiETBsc6JFYZJbAa8nNmPhiC7h66F8DLvgyb1AL",
  "key21": "491TppmadiLksNA8CGxi49wq9uFHbdoUQZVnWQyBYVELkKA5hiDsEW6jMtPBfiaXpPLX2GyNwqNnE1EAgDnv4zCK",
  "key22": "HgnJxGF2Dmc2PGfkTj7y4VBWR7TDxmmfsB17se9qpFHsoHWbuRFa7KFUNxjPawFW5XMv5cu9FrVQu1Heb3DpDpt",
  "key23": "3sMG9XggPtaTG8u4FDy1AoRe3JmhTQfKCsxr4mcTieMe1c2P9rWPrZu6fZVBXxrPjY2GMJDyA247AxFQe3Rr9aQj",
  "key24": "3AMroz1hmVm25WqCcaVv3NaSWayGv6TyZSQWztVJhVRunBzhUEf598w3qLqWpewd28MFNLnPyT4YqtfjdnCtiRr7",
  "key25": "5fNmL2p6hyxEgtwF6pKfHKHyYZsNZe4Mw8rWH1JMniaE5URwsFmdoQSFXmTLmDoyZAH4z3p92XxWms3WXMPYVkNW",
  "key26": "26CGhjayR9J1RjeT3bX6hVr1nuhxoJET6uoPQw2iDgPKvAAEKZc859moKiTue32XMi3KGJyxQqmTWdL5RL9F8pMk"
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
