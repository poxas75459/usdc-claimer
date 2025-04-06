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
    "2uTuAgNFp5hBDCwv7yLSDboW3tx65anNwwb4ueLtgLQzoGSqxjLGF4BxZUV5DF8jtGUXdbFzr7WDtfGigqEhihPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nrNdox4BHGGHZxGhd9ideM6QMJQEWvRSKsvuQrB11JtYnNoh4gp4Wai7YnxNy3rQzSZTXehoV58tkDDdgUfRvnz",
  "key1": "3uC2bR4UtFFj4aXwtezYPRn4kKrjX1FDjF7mN8KUGQvGt33T2HtDUp3vqmdkeRWX79sDwKTcaf5Z4xcBdyWbUF1X",
  "key2": "2t4qKbba6JhgyHvxJjZApxMEopMuuJkDVdWUEA9dqgwCt42CLDLMcTcWRxpARyQ7oU9gdTRLbym4NK8dzs9gpvat",
  "key3": "3C4Bz6tQ59Rvsrc9cRyRXdkEiirfPXdW1VAQcCgt8DqAiqqP9opyFVmkXMLzTZ2hEEuRmvKjXY81f62wExW3qrT2",
  "key4": "2TmywC2XA7f1GLXMBZan3dMbtLckUDzLAjtSPQb4ttsn87BVFLP4vjsE9Nx9zqE65KLJvRtSc7JvVvmQVuQ3jMHB",
  "key5": "4pCFTir1YmB7PRo2iEGGWiY9euGdiTiwZetguFGmFx284EnaPLfofPA5gsUMfp7uGVxYFWNmwQ2t4xuduQf9snz",
  "key6": "5CK3sTPWhyJDFAHsSoD8HBaXDSBtF6AABGqZshkMrJc6NHq724Gijo74oJWExrJsT6ttRXwo1XULPm9sK5aWKH5r",
  "key7": "5T53LBUTCeNVKaE8axCcChYhKzTa1om3eyS3tLTL4egBx8MR9Xm2gj1YJwrvsG1puEjyWP8C4BxjkQghbhiDsu8F",
  "key8": "2G8K9QiRVXuUGS71bUwfAxaEhWvLqW6kcdidMaJ7Bc8ksWLqqS2ZrjN2EKAVFNC6uyNMgNs6UzRF2jtKeyrmh1af",
  "key9": "2AWNZ1B1q7ZHGbr6TMziPw3pw8Pg6sA1se9SHCAJHwe3CPEfR51L7x3bLMpCPrwrF6dkNWCcUhoWsypBa8abx1Z8",
  "key10": "4CZJzKkx9o1tGHmiYzTBWcSp3JuMo8T8ud3qJsfYgPFBiATg8tyGAG9RUfZxsVKCfR8dwRb2xgayCQEbCG5Stet9",
  "key11": "5Dj2WQhmL3U3ETddxRDznJQFZ7kNVkBTyFfDZS5aMRn5prYh7yWP8AWtcaDhRKPL3cb3MJGqCS8SixoaS81GQHT8",
  "key12": "KP5fMHqRCKnFRJmHNDBAKPxfYaoxx7RVvGN6efdcsRxmuLpHSTfxLK69Wu5dAK3S5a6Yj8dt4WrqFiCx51m92Zn",
  "key13": "5EWjkFs8Ykm5FfXmrPMnDUBhQUAnvsvA82UXSBDrc9tMaP4z7TPoetL9thFtKDBFi4rGwqW6JfsLLjtptUmkX3n4",
  "key14": "5LfkYzNF4J89wPoHhAxad1aibfay1vH3MDNCkuTPG955StiF4CxqDzbHPLgq8AArnfoHS8hyDKkM3QaqWx4RiFRb",
  "key15": "3SjzpxrjNzf1eytLWHiUyqvCMNSL9mGf8i8npgA5g4VeDeQYhA113rSgvhr4LCu1ZMruXt7jXhkDrfSHzj7DM5KG",
  "key16": "3jvpbVzZf2rtQvh9VsPr9gg9tabDcG8FByPuANdKqoFZkq2k6qHBkkhhKrNUdEQVNt9bjZKJvaYpL58wLDYHVyMb",
  "key17": "3jyyaa3LKEbRjhUDJgj8rYAGXtUeKQrxL4dqr3yaCp5TFwKf8Ct3rq2LvxhYsm2hRFsS8hkKhGDyYiCzxv22ZxkN",
  "key18": "4TNYpajxFsRRHQHY2zgGcoR3eLZZ4ot4K7QfaFJDpQwqhUGWSLQBXW7bmzBAwhXZaBPEPGxMevjYSWg7H3mLExX3",
  "key19": "3HYGgxkFpN69ZqdZsPoGvitf2bg92EkWQcuEHh53CJtpLkpwT4XqNR1s5CAps9eDBKJRTiw5ho7gN8oJV7AzTXao",
  "key20": "38d2FFVerReXNqS4Sv9qmy7zgbFLAwobhpwX1Pump1H8G58UVrCPcXs1pUFQk3xAMMCbhnmZJWbcfHkitxyVgXDy",
  "key21": "DkVN4tv8WEetXNmD79Ld1NsLMKVy5igWkDAsH3e1UcmZ8D495R4MXNTaPktesbWuB23w3tYkaMgn5S2qnfudCgU",
  "key22": "3yDx7yNJ2it9rWZAJkywcPKxkPi6yCDPaJzZ2Z4qufjXu5xLfUX5KvW5AGywgR9Zm8WRcykQ1Sn41zL2gyQ4tnTd",
  "key23": "9d4sNMSfwWEAd2nmoNhwp9LGZWnR1AFVjeLAt5gcHY91ch79VZwyaGCy7mgesbwX8XAGJ97jJfFRWgX6cuKTviU",
  "key24": "2jqxoN6PAqhGJfN9ZQWV3SND6SwQQaigohfjtj7suuss9oP9DEGf7yPbk1z8kAitkDJ6F3DVZJ2y9C8cgPcoSZEU",
  "key25": "2fmGNsZL6nmB7Ven98rfPsYe1d41GEz7YMWuhJmEjcwjYNY6j2j9JvkxG148Sew4gNdpFk5ycqHS1AthWFvZhgix",
  "key26": "4TysoB5mEUHNBRAZFeB63zzia6AycC3d7TgPHRJY4gYnXS5YbjDH2GGR8co7S78mg8vzscQH9LdADFMZEWB1FKrz",
  "key27": "mjSiDvnRhqyHi1cYunu4zB7muXi7WmNzo6qwDF5Veti4JUi5ZGAk2DdWxGDgUe37fFaFY6Qgf8oZv8pXbudSNYU",
  "key28": "2NuusBJMVcjWcqmo721q1zwxFEqCK42FqSD8gCwQQ6YGANgUgVRZU9kGJLjD9TbHYv2xi4kFdH1NpoWWtLrMWmMv",
  "key29": "AemkA1TLX96umrkc6YWPNx5C9hbxAdmgrni25gKfcvu6TdfJs9jpZ9Ff2RYLULNG1HWu4EfXXT9Z2r64BYcVH7g",
  "key30": "4MqKsHfCpwUa4SVub9bVeEFGg9X6S5AasUGWeG6Ck2YvWARzk5LS7DwxifCqFUuoYwAwrEFaE1hP9wWyeeVsdvUD",
  "key31": "34aasBMqza7zEnCJEdWAYCJ2zJhQuj9d1MnYQTdYbXcbwbhxSfL2ZnpqbRTbLP6fL4F3vUuP2ebBnS4XicjYwwxz",
  "key32": "o1GhtHjUJ2xMRhQywjCqgF3QGx3HkBTqGieJQfP9r2Ak9JYf33KDj1Bx5xwqDeiEdHPMCvAUt9wEgSP4MNkoeMq",
  "key33": "4pP27WGrF54WjRW9YZD5x1P9Uk74qpfC1YKTcHCHm8jA3ePugzRsMFr1ghzsiiKW2zGjSr9gH6m3L465GeUwxK5h",
  "key34": "LoEXbaaEfqPUeK5m39XvuH7MVcN4LWjGBoL5v9mjZzWnWdRw1brsLyM8WBvwbd5cUi8Ggz6fAGiiM6YKgizYDm6",
  "key35": "4HpKy8MdCYd6s22tF9Bh4EZrkpjkzWFw4Lo7tMS7gd91j8w6VcEPKiD1Wrd9AoBjgZ8CakKRUmsu6ArHH4xjxt5D"
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
