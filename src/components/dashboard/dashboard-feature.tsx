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
    "2Mb6rGbLwfxizAWSXEqk1E3sGetCfBsqkFinHLXe11erNTf4TC78D5hRmZA1C8zeeJCVGVug1FC4XhxvinD54GpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dpyNi1RmVqLurLzdnoe4j7gKTRu7bLjoWCkwE6zttbBJBn4UXCffwfT42mdLtucDiA8HxKmW6AWj9m5SfrgLggZ",
  "key1": "uVykk927G9zGk6itzKiQmADvVzCZueYpnvN44aXbW9EKMCZ6fPwr328SQYsHG3wrbmwNohSginQtM6RfDnD1Mas",
  "key2": "3takCfMhvDEeTaA14Exgf2Wm2JYkV1WsZJERs519iD5NX7P5X1QTkEjhu61htcVzZ8vcTRMHNn2HbzLwdkn4vh7G",
  "key3": "cymN19bkdBJbLVhdEAAUv13haCFXN8HGvw3UwJgxHPotSF8CSKUWBcEVJ2HLY7Hq59xsRPPYhFY2brnFN1hawzj",
  "key4": "5613hJDccujwBRhw2jzaTkSJj93G6NERJsu8tbTmHN2NUTQbXmyQyXnHqmJvrCcHSPPyU3J539V1aQ9Z9KNLccBz",
  "key5": "cfieZ5iqxYMmpJG5hGdCNmGo2vndQV4PWaZJfLgUP6Fpqk8ENZRp5MvQe8xnvcRGZ12Qkk6hvoyAuiuWMHQptw8",
  "key6": "5zaiQYYBwuCfbULd1XKohSdgzFtX6DTzAoi2r22ec8KjkX1GSpLN8vyKDBGJHtEEEE2vhKmiAYDmPLRCtJ3yNm9U",
  "key7": "5K3DMBv2SzXx9Vyftt8o5MPZCj3of8uEtZ964kuUPKGMkLMH2zuLsrVVKjr8BCpcy49qghbXBN45ELB4AfCxAy3D",
  "key8": "JJa4MiJmZzj4p9QqPPNqm6xaqBJAwA7gL8dzsiMnF33HAYMvDPfwvpDXFCMCJ6XibgQgmcj3i29iMMo4r1sYtyM",
  "key9": "61vPVtdcT2zRECxp2wFK7qXTLSLXAgwcneb18T5VT1WmuYM6zxwwJQ47GH4Ufn6XDNVcQTPN3bRm5gK8yGiozCbi",
  "key10": "3VPwUCQk3KVpKbPkMe9sZQiUpMrQsKJ3q8tH23JnSYwzVE89whhWMLMvTrKN1g6kJDpZecYDjT1sSEV4e4r3hcHE",
  "key11": "4DUSKeYP4ZmtArcQHK8U4u8ormBmJD6scvVPr8dyXYkQQTGrrRFXEt1xJX9CMMDwmzVrBPbKnv9nrez6pNTzQETX",
  "key12": "4tk76RS4cm1dgdM9pzdGkRwh6SNp7JRZBa9UqBSAYsySdAfeVmaCu528PRzuEu9oB5VPQkg6z8ys9XCC6FNpRHep",
  "key13": "2U2NwkxKN6XCyeHwRU7kTatL1LEKN6uEREJQw5RGFetGD3V2wHS9FYHGTb885XL7MXZrorbdxS2PjjYMTgQm4d15",
  "key14": "4KEVgHqBEbCVz6gZtp8qTTwYaHt8HSYjovMtzCAe145QJW83oMrvFmUgMfP1kPCq3v7RGt4zzDotueZN7eiw6Gwe",
  "key15": "2wBZnnkDebKeG8pg31nN4a6yvtfv8fo6FfKc3dAJFQq4Q3d9apGfHPWMo2SaLXw6EYN2sakddCt2LRYnwMeSo73y",
  "key16": "4vZgYKFEfcWXX84tYwrhiHHNWzWB6GbS6QYupfRADyweufJ7QsS6CBN9u7wRwku1u4TA5NDxJkEg13JJ3nRMKb7M",
  "key17": "SCWmmAxnycYvoWCH8ZXkarwmZ2PF4DfnR518AaMhuZBvcHz2uLTNdKV4JJnVk3trTbGLcb5eDg4WE36LZovpgGd",
  "key18": "52itinZBCz3avFhF7SWMVz5A9mZAqsE4QhkVuDA9KfNT3vTq4CGJ4Y1HSZn4FrvGUxNTC1ree3EbF1u7bQZqTYUT",
  "key19": "2aHwvmeKHeRpgJUoQWELQzfBcvqWWNQrx4j8HYY5kBNV9xPAvfMXFM2GvVdfbDd7CNsku1URaMv342q4ABVGfRjy",
  "key20": "5pisUg7QVNEd8uxayKZ7D58LxwmW5pX2FkKCeZuRJNF7Vmxskq6v8wQ33SXoom59pE5D6WZUQvnNxpsDH5aHY14q",
  "key21": "2kCmaZvm8PFevRLW2TVMj442kbi2HR52e3czzCqgMLU8AbvwLjWugqhui3Q1JRoi7af4ypQ23A1tMrFEqsSfJFGo",
  "key22": "5M8LdrVZ4HJvKxP71GgTzdci4wsxZL3ocyxp3nFrp36xp5Cw5xfa1PvawJfMQWCtoYon2M3yymHDqTqw7gd5aVex",
  "key23": "5jDq4VL7MxuDCxGKeo898r7jBdyUY6RRSN8Zgc8Drnq1b8Kfe19zFNLBcBydMjbSNPFKXueyeM3MhmdWjpDtRWLd",
  "key24": "3kBb33NFin62koi4WzQdqVnZBeUvW8gyJDA1tvCoU77tkJgbjpptKjgd8wphXBnBv8GKoYbnuA8PAByFE3asNHnF",
  "key25": "gQyT87t2BD7CYaNTUqqHP8CwdUoMtztC7yVr4QNcMTmUACFmzWQXXH1915GA3fXSN8WoJRm6n7Qha9StfkXRU1M",
  "key26": "v3yVnpAKmvSirvdjop5oV5cZCVTCZ8kvfSmgUpgfMyr8YzphyjfShvxehE8ngKzW2Tr9DYpePVzemY2ULpx5t2k",
  "key27": "4S4dALBHB4F4zWqZRzthdbTdTcLoCm89f8S3iUGBDerArkAxdvKWaiCP8qKYuvPBcVAtXenVhAtDLFgF3nPbxnZD",
  "key28": "2A6c75FFKr2MAuqTBjxThgUJ1AvxdMuU3NRgzcGSmSi5TssX5XBnwt5yBXYYX5fMcmXKP3F7K9dYU3wV3XCCWdTE",
  "key29": "4WX1DUWhbAbM8dRUEDTsY6cFvNXGbq8P3nZLsCsAYhwe9HsXBri4mpkwBYyHT7xhWz7imUJCktXH7232SuXWPgwt",
  "key30": "5sLvpGVbnbu2ewwLq2NJ89WwdYzA4z6LMEbNzyMkRSSy3Vsf1pzHWFb5TuwAHjjf6oQvA5xzyx4RJ53ZZUwL31KK",
  "key31": "3TeA3uAL6QYh5XaMyGYB3J5uZy44F7Sh75GkV4FefCMCPqs2wi5s37fKZks1qJbkcXZYWiUjg7QrmVCuK6T4uB3e",
  "key32": "2D2K8SyR5C9UssxEifhR5YxN7ib3FTeVoFA5CzaBfpoMsQdGFcHqrLdW2Pv1gKThhwuYYwu1jN83K2MgsFPA5TS6",
  "key33": "3CYPvRYuQ9zsBcYSjXKJzj1Rh1GYx9U7Yw8e2JVmsv6zQeSiCyUxQgxD7xYM2cgoGJpSgm2jP8VvjW3V3s1PWW8L",
  "key34": "4cMT6c84wnWfY3DNRr2m5qjFTx5DaHoXAcrxQjkLC233eCVdrMFSzuxLCPvM942YVPkooqVvCHv1KcTePHjDznkJ",
  "key35": "4jKkLnDZLQ7uSgmz2VRYefWjgNixB5DbBqFwRj5eU8zyowmd3SSpzNJo2BQ5RztRwaehUwsRrYe9JUJMXyAs8oxN",
  "key36": "CgTRv4agADMWbeWLmTazMfwcUoDErheKRTPs9bzFPHTbZEumX5AxBXWEVp6z8TVvKrNz5eePSgh3YFHH9gnSMuY",
  "key37": "3QWHzu2AjeUGV1dvRYCibtyK7Pjv9gtRJefJy58AB2cC7NSmB325Qkk9os2jo8pEN37zNY1WejtfLsxssJQRkivf",
  "key38": "367QX3CN1gNwHwJaboQuuUdGzR9RxH6SHa51cNdTwGA1paNS6kK91vsPczNBbyPBPMXLJtUCuDuY3wow2EMjEkZX",
  "key39": "5msBzqWrD8yKtpZN7XM56fnTuJehTAs5XtRfaLA2HW8rkv31cwZqjim2vng7W9JTvZdEXvvvoxXGZtRqDsv3hz8N",
  "key40": "3FxLZ44x5Zjfok1KBW7TPUXfmHS2k5h75XVXcYhzhGUKcJoNgv91uPvYMSsig8Yzr4JjdufP4qr4Sy7d9ZVPvScy",
  "key41": "3DpoGNydQL1VyLH2iuZdEJiNSoc7BJNqVDN4c1rboMmzhWJFhk4sLywfJdyXzFnpZMeJeqSHcmcmKWW5HpKmGUYE",
  "key42": "4CWq6RAdcpeGyS2iQcTHzMxYhG2PAjQfngEk9bH1nZPPk8NHNCa8nhw2rdFxLwnjw7j3fGFyrxysPyJdf9FcEjjH"
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
