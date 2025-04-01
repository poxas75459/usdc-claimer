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
    "2LRJAGzsaau8Wd9duJmoHjyyxKvdbcjd3CZ5q1kyZmC8t88yzrA6GXwiWbUhwQb3V5c46GZ6Rs6BqCSeXzXYxMkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uYg9pR9teDdtq2ZAE12vbv1ZXzVTkmzPz8qK4M3MS69b81oRHU1qsvEo2Qy75sjQudfGCpsMzgd8p9CK5eTuDmU",
  "key1": "5CL6ESk9dTxmV8zRdrAnzzvBhiRhvMnQe7JY2qYZGUZtUcak4MmpnwZCFfYJS2fqnVrwufbx56EmkXVoeiWvixGs",
  "key2": "PwBqCKVtTZ6MAHPPBzBwW9tooLXNznHQC7ytpHTuVZ6cdQcGGh454r3mpJSTdCiTCrwbas6xHMnWo2XpMVjiDq8",
  "key3": "38pHD3CX66PxK7fgzrJjV5GDJL7RQoSkwoRrCfSiqMzNoiFrrKQ65xe8CNhiktBV4wwy34H1zXcq3QcgfVhzLfr4",
  "key4": "5wrNBFvZ3XxWvEoYk7SKDtASVhPrFBDRLYeo8QNFieavsakZ65hZc85EhJAaUQEtDcnGVePT5d29mZrid44wkQRA",
  "key5": "QAdPeGRTKBkrVhJBiHeCkmRr9VX848EH9srEq28Ze9Qw8FCuue8pqA3RdTTXCDntnRHqjzcvQxq77xdPCYRy7aS",
  "key6": "sDwRXLLhKjAJ97iZJxSrNV5fiGFPQdhQvn6QV6jRDNMfnN8xBoGUYbAgmJAb7deLWa2AfdXUBhqqCNhf19p9yk3",
  "key7": "jcZUA8LmB5jzDWgar4M1k3osLGxApvgdw4DizyGnhzoyU7pVowM83ih651tc76Y863nYmzhBAcTqxE9hijhJUFU",
  "key8": "3sZbaRvwVzkZBzT11EtmKTMYTpEDBWhLxQk2YYKXpuH1NHDDmBdiDtTGqvcC4LEpMizEzr41oeTjsX2zdHC5dUga",
  "key9": "4SpcuJs46Qga9R5PPfLntiTeUAprmMCSU5ajX1pMF8fG4E1afNkAitioS4KxvGRnwtt3YbEocmMJSyoCZPqAH1mT",
  "key10": "35mviFM6sFhWxRw8bzEMaVGds8QfhPDSxYspKbkENFoYpkiXVJCxody7srvy5JUxG4TKqC5RW5NJzSVg5BxjiUQE",
  "key11": "XosvErqvhgSU4x7Cr27J9BBNVohe2sMiMBytPSwAHqWfowoRR6i1TW6LCccR8Rx6c6CDS7Md81usiGE2KDnyoxF",
  "key12": "5NbsE7twFDx3r9cfzh9uiPbQ4CW65V2Ywnqc64QopGChQRU7R7X2mt2rpx9DGAfYBxpcHBCb6RfRRT9CygqZ9q1T",
  "key13": "2Ak2ikgAmn9wn6HLwv3QvAX9TpaCoYxnWM9ZLTrRf6fVa6ibqkVWjv1bcCeTbzw1HaWbLs5qUrKmmvuynnTzRsT5",
  "key14": "498gnbKkk5H4GxrMZjMCEoKaGHQga6mMXb3fDSdBNAwb1AfhgiM1J5qS3YrEYxqT3oeFrb4MYWhgNjXh9KitUcbr",
  "key15": "43nPWszMTCBpB9FpRfYPvjFY9HANHoYeHQMETMEbFKjmShH4igRMpVfTqwy81btba4h54kG7nkx2tkou3WxfeiaZ",
  "key16": "3hK4LUWegKcPpw9DjozPt6FUHdiig58YRZEyZjMRU973rQt3fMAVoGvTyjcABEfHWDAJKXC71uuBgPSMnQztc2VG",
  "key17": "3kbH8fZP4ptjAES72tZjhSha6sLUtyXtKp2VJcfaCXoLUPo1z99sPnHJpF4wHAHXtxGcm1PMxBNRnGVDQLo4vX2e",
  "key18": "34vDbnrGtiHor8g9krGJooqVBUUaanTnJrCL4eJAtAUi3hqaEZMmkhDim7nQVH9LJMwZLf3aDuwPaxLrw5Pa43vv",
  "key19": "4iMb9RWEQx1PNBbSU9aQ5tpDcm1p3UKiHPLpU5NnGm2tuJySnaav6zosvcedynTjcGAcKXZN9NP97nHVr6oTXEcy",
  "key20": "434z1wiV3GisJPyRTPEoRbqjLg1HDkMv9WnPVEVSxEviWzhtjY5rMAG7MhMtR2tXCFdTMhNRUeGLCmUS5HBFXbYU",
  "key21": "4rqezMjUYFZZkkCizFyki15BgzahYhkNRcnJZdtvFwKUnGbAh5TBuJ7X1kFR29xviw2WpCztaWSvdgGhPiZ2vvMv",
  "key22": "2eQCw1vFxoYWmgbsxaWt3fxCThkarygkeWvjb676Rb9cx5bmrBDBkiYNFRtyb5rZrnsatZsuzRSh3uVUZhm4DrDk",
  "key23": "5Wfx7ZH5d43StCY31kdY7S74KpgrryaNbco1qkQpgB9TWg1nNMaxUoh2MyVKv5bSHvUDmnQwyBv65HTKLpEtSCxm",
  "key24": "2NaZqPU8LSGvzmhytvcSQ8geiwaJxNtQxq6BDpqvnGPzTuQyV5v77scWCmmixbHgTcFiTonXGsQs5LP6Z3R85dW7",
  "key25": "3kcziGZvZ7WfpcuZZpCqAHMrBLhvx4msTajC5gRxQ5NkGbfRaLNko3YPUPEgupP7wEZwbA7UYs6XZ7wZq9ZDAHeR",
  "key26": "5ycgb5uAfEMqZcSubUpgoszfpAsfWzN6P7trtd8ULrhdgzbXiN3Xq3xWhpYHHgG1uR4Pk6dJFPwUEUNyDAowLoVJ",
  "key27": "2cHNTLbWjEXBDAucjjYz63c9g3UMF5eMi1fLTydfQTETG3Asrh1LMrSkivFTQnGLf5JRJZRP9Z1gcVWt8AfsfC2U",
  "key28": "3eWoH1CT64DryeafvqA9b45Sj9hDBXZNdNZcp4CkKY6NzGvyhTchnmy4uyhrwHcQp7AzyqZ5CLB6W3JUARFm8tbx",
  "key29": "4DhgZvJWinPB4yHxfXPP33Cofxbjot2CG7DjY1d1uHPrKWoyyGX3e6Ts2rLt3ztCVpTaAGTpNNydPq681EiZUFAn",
  "key30": "3usvayR3yuUpD6dLyBwMd2h1ZgcApJc3myoynT3TfHR7Ci5wgzUgNfSrCkNcrqwkq2St6HEUsjh5Z4Qb4Q5fCdM",
  "key31": "3E41zXBLAUfawnuKZcpQ28hENze6ckK78MQofzSMf1ccPe78ThajMWeD8TvLgwmz7Ra9KJ4Qsyo29Mn5136vMXc4"
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
