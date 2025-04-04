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
    "5VxMrddXjCzSoM4QmvxL1J2QUSb83qkPhvLk7ibpV9v2gMBecg4wFdyujP9zRs9uRjAbtXpD5sdP9cvyMvEtG8en"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JaoFfcuZT1TNpjzUtxoYwjEXfoxrrx37t5XcFHcBnAfepgGzm8YvDfe55pVYnia4e6LmnZSKVhkg6tDEQyrMfSP",
  "key1": "ZJghJvFr64cqyc3R2JL3vZPYSi9K4WSVbcYz8ATQCCMRRztjfHXHL1AgbcGaU48tQ7JmpNbHmz5ZkHAAtMWRHhk",
  "key2": "4gZ15DpYQZJ45FEKG2HcLhtgHfrkYRcZgbawFAPnNSgvSNJrAY4GQvosQk9ayW8Mus54E1tZLCsbs1qzrPujGTR8",
  "key3": "8QyyXFSGcazu29jvN2aXHKzBRcroGvwDnx7BJ1ab2qBCYcV2ZNYvXehbhkywvj39HDbDMUcFMogWJwH4Uh2TByJ",
  "key4": "51Q8BS4bd4HXK35QPy5PJRA5NRs3YmeFwCNymKJSo3UgecwuKRgp4ZaQJkKJVZCvt6z8yLgkkAYR594U4QSVnN8V",
  "key5": "5VfPE4agGCmmiZhdzAyNGLh3ADvNNofkN7RK1hL1mTuem1Ls59birPoHSCTLKQCNbieYEtgRvby2aRWkqhXvJzis",
  "key6": "4wpNabGLTJcgo1trPpTHZUeP9E3ipt2eqLb4pRnsfgbKaWZmPebUmuCWDgtxBSm5A76Nqt7ku3KthkRzcfjysgks",
  "key7": "AKEAXusDWamji1BtEYtmMskzLVxqFqpFYPhtHY6RQu4HupgWTGaXvDCHsAxmfJsnsFHw3nbSxpx8p9SXrbd1Mhj",
  "key8": "3pBv1xrGqyuHGS6aNE4JxzjqAnXrLykHvUFPKdZ7pYcX6QCtugZ6A3x2c8SDM1nqbnZMCaSVkUMw2bi1DmjNKaUH",
  "key9": "5sxvrjYoq4cQsXyH1J8N5MfxgHA8FgzjMPwgD98EpAWz5VqVvnnsvj8w8Lr3ya5UeQ6hScosKZ5y8FjXvCD4p2eW",
  "key10": "1WbCKNzEguzvzYY3Lpq52zv5SERTpBMxvwg98zDU4eH6qdNXw1xjxxcDNgCQb1C6NMdHVtzuWTA9LBreEpqPm8R",
  "key11": "26F9Yz2eGr71fRQNZ8Tmh7nhKAc3E61i6GMf4opwHKDdj4QuvjnbJYUXtGFg5pJtFYDvn5kyxBkqk3kwJhNA9hJk",
  "key12": "64Hd8MLmxPmJgtfvhthYtsozvLMvMPuevepzZLcHHZZa8DxwH46dgMKB16danzmfT9Ke1Nm2ktdDdgkD7SEZ6kbc",
  "key13": "54mAv2NVjZVFXJs477T6HXHUyRL6ZWNP1aT3AGPPfHq5UWnoYTAsSuYoxQ5FdfXqsrhHfaGhXEbHNRKsKP7ghr25",
  "key14": "51Lqfwf51H8K4W64y5P17PSBpXZqZzRimbZvfkKirZnk3hajjNbTXL9fhbwxkeRSm37caL3FeunmQKSK4rsNNXCa",
  "key15": "3yoc12RGHw7jP2SRf75MnZ4ELdAvx6pW1BNk5XQguaTNYGKATWNxRg7Ay3VjoVe5o63976tWRAF27Z6NcRaXopNn",
  "key16": "2kH5XmYtu4ejq6bawWdAq6MhuKqdDYUBuy5WFnPR3iDJD1chrtQBmxuRpGvaHV9hMWKRM3BgCLxsvwkymRVdr6PG",
  "key17": "31e71ErJ3DSY4UTK951kak1h5FFVAULxxeSRkoTFTBcmzahUp7kdPSYSCfuZATtr6eP6MCGAu6fpcE2wSMrDazs5",
  "key18": "121rEki5P4P76bGAmd411oZ5wxe7dgUXRtKZWFepoSjEQyxtdDTiFjZcN13sPAj74YsLnEmSGsiUmJ4iaSoVxA5J",
  "key19": "4fScazQBtnSe74949aT2627AagAJfPUyaNEAEahVYWqt6tFeDodCrhPS4iecfHRrJP2F2aihnyJxXZEk7uqbYgQf",
  "key20": "L3qLLMKw8xijqj9uahbQwjqTmqsZk69Jn3pmc92qgTqUWTjAaRHDeD7QYo2EkLAY75AGzy7YEth6LDQRs82LJmm",
  "key21": "3A4hkgtF7wbSQXG41pZ5naJXJikD2aSkGKrL3JEnL81fvqsw11eJjhp3svbxqBxLi1Jn26PzFgyKcZTx2hfZjudZ",
  "key22": "4wZRmZzKMoScDC5twirJFFSvciYjjapnwZd79MmRAMdgdFYqq5aaM5BxSvBeLwfUXcJ1JYG4BNtJhE6AsHna9KMn",
  "key23": "5PEANSkKeiSc2bYifBNjpSpqCUB8oA4iq1uKQT3PBvLB5oy1db3hfohUkSZ7E5i34vsUyHh8oGK8tJ2dK1gnnK7F",
  "key24": "23P2MtwqQUD6obfV8xt82hzMcbEqfRFPAbvTSAmrgRsuskvakpwoMRUdwozqmDwTPbAELcLqXS5YXc6JdvELFWUn",
  "key25": "5uDc4QM1Yp7FBqDxAwvXRdyXhLh7EXeNwXwqmPfBBcEa7KADi5s4E6YXF1hxeB9Kgpu75iHkW9CUK39CgxrT1GWP",
  "key26": "2DgvaWZSNC2yYo5RGMDnu7LZZdfgfHnjrbx3FAAfuuTVbMW4FSEnZgWZsMniq1vB9kbKJWPBZNSV4fapZJKohBMp",
  "key27": "4gxkQs7KK7ry8giE8QWFYU7rjjhbo7NFuhXm99uuRixM7CN6mkyoJptFZzLwLtewCX7MQZXhbLYETX4Zk8Bho9cE",
  "key28": "5fG4R8iNtbeY4m2rWHirbyQrNadQrNKgPMP9XC7pRYLVToD9UReD5n6KH4n8Y6UgrLbizqQMKbPrpvSNUaGz25SY",
  "key29": "3hj7A6HWBa7qoY7zBqypYHHajETgKCjzbvKu1CgtddBXDWDkCMMGwiqcpcCxb5esiySQXkwatcX5ykPpk3E4JNEK",
  "key30": "2cnUJoZxigeTFmM2askHstR5oTGd1g6PVaJvACCY1JFHGG764eTp43gAQvX3rfWXxaVAMTf9U5BSqp1V73BaeGA5",
  "key31": "kGj9BtMb59xCXn7HkRZRjWkrmovL4QRM5eEKz64f6DXtzNJ63xdwm5KyG9v8M9y8D8Jx8ecFVy2BmgaTKoKQMRK"
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
