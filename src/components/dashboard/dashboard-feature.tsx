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
    "3Kzqfhby3iy5LMrVbhMsXYPsaWkF4LVd97KVhE1naw2Nd8bPTN88DQhYsR556tv5uTteM6rn3gGpZyjN9XuKfXfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vYszJxeRj1J16tJRYWedW4NczqzGMB5yLuaBTgkSFXJTNzUjyAHNwgeseakNBhkEsHtWqXjqKnvJw6fKzP9t3PY",
  "key1": "43rv9CR9PuYZeXdjjccUoRM4Y1HDXmv5FSCTddHzKV6usbwg84XWFZwVsjBAPYhZ4DiJkUoh9LMqbCVXngoPHqFU",
  "key2": "3BKZQtmKUCrdCMuJYzCzcdZ5rBy6kqxnfq6hkWaVWmGHbQugGLch3QdBfPiQYoY5TogHQD2De4o3bjBAqM1CrPEo",
  "key3": "4fVokWFqsxwVNzMwuZKhLV2UK4snXFwoD2HFu4xDNPVahxrFgTXQeKLeHjrBFpPAQnwx56Y7iw7z7NGAMWruxcGF",
  "key4": "dLPXeCApcMPVpgvSSppvxwDwTfZ3kBsXT5BbVK3gZiFm3RFMdYVrGfZ22mpHZrp8g4RNgJ5vjr9XXMY4Xok4ECt",
  "key5": "3XKoJdB6FpVwZTGV3Y7cmDtPFr7ALQoG4RXKCsxStUUnoNbLTJHBixwg4PfFjEZefy1ENb5cV9dW6AjDhtBVaGvG",
  "key6": "3A7ADHbmbXL1Lcv7PB6NsSncf6AZG3PttnTf6coBFphx71HrK7kwgkXLRGN9rFR2VbdPShQaoCCybuCuvvu6Cvvw",
  "key7": "4YXts3QmiQFLpDis2VDZUy8vroYLwnffXS4WH8FwyaXiwRa1oLobE89M1pg3oS6xMEq6qBWKuXNQcm2KVWgSXNYW",
  "key8": "5jYFaSdpfyCMLaQtmwjRJSwTsZhyS9U5JGE8eXGu4bzVcp1HVMX6d87mn7Xo4f2Tc8uvyzLCFXVsnM4RNu5ABMb9",
  "key9": "6yPzjmVyr11rEw6d85CSPLMHHrny3fYVvwNUgsTfrXNMNXQtiSJC5BfWUB7scPrXVRcRYGwQ35RTttnMrvGRcbS",
  "key10": "2XmGJ27HdfJ99Yoj1KeZxcHyWDroj5GZsnLrxqzZEH21cEyFrhh8uibdAXDauqJ9MPy3ePLvyFKWGYKFg4GbEcDJ",
  "key11": "rfrPpyo7a3oPhEFF2DqJTPPNYPZ5FEZDL4snfJPKg4a5PjdmzK6UjMDBWjhoCbgWvEEDuXUswYeRggiyBWsT2W9",
  "key12": "63w1Z6qDRz51Xkwm36ee55Ew9Mcq3jDi2XhShewBVHMQvqThRkuESEZx8j2vyAwTcBBjeyvCSJEHzXJeDusrDQay",
  "key13": "4r8PVhJJWvwb1q6u7cqjqTUJjFgGiLT9EoVk2MrC5r71M3D5X9nsJpG2waJZnRTBjMy5PPZqUQZ7UR1Z3QtBBNpL",
  "key14": "5oCHWZHTTWKczormvwScTCDTpR1v58PSUD59181DYpsUZFzHpNMTpETWbhsGrhhk8rUeRYNTiUCPEkaWt4dgzFzP",
  "key15": "4ZgSyPBDbtsCFBTRBM9dKd8EmkijBWWqsdhHKbkmm1Gtz9z7sFW8KUCEinsoq3eQ3NLoN4ng25PbfPACCk5B77Cx",
  "key16": "67NWAD6c3yFG1sewAyfnBbJweSF5p5WHjWCuB94Z1iTu7KouNDPR8F2W4AfG5Wn3jMGijhcwDPiWCLSZNNR4SMVb",
  "key17": "amVUbswi3bBxXysAPoB5sQVXVEgjB4MyECK9XuXiUzSPWhPNuuyz7Fe13yzGg8jqTuMfr1x51WAjzSieMH8Gmwa",
  "key18": "4K9LJmZN41zdwosMoRZVpT2p6e9kESqciPFkTY7XJkio13o2j8LKEcKFhByPzRdoewKzH4JEJSGEHeLEf99Ub6s4",
  "key19": "57hzFJFmxGVbT8oNmNd91EBmAd2e1rgcePY3i4kiaxHGixQyD2iZM7cdpA1zNGkNFZYLjrHMMYhxmECSY2e4EQrQ",
  "key20": "mt1kGRmz1PSzTcLBGEy3u7MGkXfsgfDHJiUxTNncdwKuHh1Ka9GVoVnYqBmQ3QK3Cd9MHtoqYpYz36EXceenPbr",
  "key21": "4FUvueWhr1EHtpXAWTpR2yZSMvhCHntMrP2UdbaP6D7JF9FeHbH5tiuYFd3xnXqRCenUJKpm1qLTFYQUW1L4Lbto",
  "key22": "5nBSnw1TqRVDCTVDyD5vsEVNNRXwU9iPKhhz1YBKGfxBKM6qV34zNfREncHd3Y4kavLi23QFfuD23Hsmh4UDbSnY",
  "key23": "3NHppBqDniwyQKkdCM5AMidn8P7B9tXTwUU3T1RGmjKLkhnpf7LGfcNpZQ7bGbPxJX8JHCY38X7Nfac9HunnNVR",
  "key24": "hrqhRNqNgEEg6oMMKoguVJ7jmQHQmfFaW9RyoLzGXhce1iP7a2NnBkJXgS4LKB9H1RH1vxx61YNnTWfTsdjgGXW",
  "key25": "F3hwNrCLT4TTeRTKZaiLWukKE3BJsgPbBwcxHBL1vVuZSEdcjGdw2eq5z8zMh94VV7KFMZbTgoLrCBwPD4Hotpd",
  "key26": "3ZbX7FTvmWZbF74GSZVxc29zRoPoWPxCbhrxSRybfb3zv94bXbGmyjQTa49MTFzmub9gWMUUJar877mVh6oLghwE",
  "key27": "4khRv9EFCE38VYzsCccV7atJoY5TuMEshRqzR8ah6T2DZjo2JniWuba5abpa9VxW9HciYxNGmNbPtg2L9VQHmTjA",
  "key28": "5wRVMMeB5D3ScVDYVanFBRo8oBKkL6w5syhSJnMzGyZrviXZY5UrCjFKjVeJf2dfn3L7EP5raqi7av6A5NwoyFtQ",
  "key29": "3zE8uxF35BXv74XyjJgcE2brXkGcdsstCmdYMs3W5NwLpmhUhkm5rUrLG6HVTzuoJaTnXvtsAyB6rRG3UVqDyjg2",
  "key30": "2GghcE9a5crbg2uuSaJhZ9Ex4ntLrGZd7wAJ3uUspf1UWqrDCeZDW7TAbqQtuc1v7z8cEpAY2nz6jHMvRzqfKbRr",
  "key31": "2TBNuaGtDCBrhJD3QFXX6aSYBp1R7UB1GMuyf5LCULRfQeicBjzBoL5rieLJ6X5Q2xJqMAcGJJW4AMeS1HKqXuAz",
  "key32": "67XHpyJvM79kCZcn868twJUQG7nTQEUgsm6ZS3t9k56Y5bJh9JPq8oiRbCsP7voSbwXBdpM7eNpj6P2tpvubhMzb",
  "key33": "3tSkhGwSsynNQn6cjnZiFHu3eBF9maJBaLEnhDy23rtQjsNALJwaY9qxgVrrZjtnV4FW9QkyRz4Msn1aoNQ8wokp",
  "key34": "2iJfkmhZH3rnFrvo1XvEyMwf4VmnHnqyQzMHBb5UYKvBSGeEoeMXLPJY4kydrDcW8k7ap5rtMB6RG6j413LKgFKX",
  "key35": "22Ms6CeYJUxgaPvEzYqqiUDLsDgQebH2jbHJmu9AfCE5psvavFsQdsxuBnFv9SYNwxfEF6Ymar6xoxgL1qRt21t2",
  "key36": "dqDLSRtgP2g2SCBY646fcEMJQQjaSp4y4qeJKHF4KjDfpHemgSAiFzppvfydBHurRMZ6hU1THyy8Leu8f5FEpxF",
  "key37": "35bKDGJnFoJkQ9n4UW5FYwwodq28XxLXdWaYzYaJt8K24bua2bNGbkAfLr1nY33yd9EFrCcuKHtKXKQVN3hjfgzz",
  "key38": "64a7T5pjGXd5BZYEVCPXG1hQSF5auoqqw9D3fEhHs22cP7mkFwvxonYxkqQuFR8G8VSnviSAuX3XEdSpN1ah4p5t",
  "key39": "5heUhr85JscPmwVChAGd2bfZ9ZyKVTz9n8RHYCmX1DX6EDVay5AapWs5zy5f26ag8YigLCsa5VpUo87SVZmy8MGn",
  "key40": "4hFQqgW8KcUPfxNz1vpNwjwm3g7AAcREsJnz8CRqFiW5rhkjPY8QEyePj3hK3NsPRjoiFFHNCgTEqQwFj4XFoTSw"
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
