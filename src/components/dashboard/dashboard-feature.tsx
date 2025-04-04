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
    "47RhvoUGMknHUC5ED4Pd7NqdFtvjr8bmX4NgtncWDNgm9PuuLHx7RLX5c5K1t82Xvz6w7ZQ6vjFcHepU98bzWSAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rRTgJzMQBRWSd5eyhL25vdcuwFwFQ65yZmrJwhkTG6GuKHqt69wGdnrZqR2EAuHGjjuvLcUhBdmRowriCf6YpX6",
  "key1": "2Rh2fUHQPxRWtVDsck7s7pB6Jjbbmw1yiJTpVvWzZeh2LeU98oJMK8LLpmYcXXgBtagaTvwMdRdmNCN1PMrHJtci",
  "key2": "2BPqVJUGGyGKcQ89FfDZi2tCYF1oLtpw447n1C6KbXeVqwdho6RPVBM86e5hbMZCKMAuc9vTko9ejPtr89FBXhhu",
  "key3": "3Ut59fTnRbjyN7iCESXjg7r5C6dh74HJEriDBgTrmgwDHgH34PpLHdhFT9vyKfqpQTCYrZczmndvYPJKiHzV7nrY",
  "key4": "25vBReEszVp4e7sCvKvKzMr4tYZW9VqVPERR7K2CHzegwDUANsUCfLWVXAtrbn1ByzuTLwbZsbpccAuaCVRojE7i",
  "key5": "4qNBgyki5urhK2qxQmxe5mrh51DNFQhPov9xo4mvB4at9a7XF9U9oiS4uR2A1y43iTaUocJw38RgBWGACqqzC3NU",
  "key6": "3FCNTPwKT4JiFX1CHddwSJk8yHPNRjksNrxTUGxwgwtqrgTAMu6CR4kEUzioA7xk4hyqGPN5SyMTrfnR1JKGaxss",
  "key7": "mYvRashXQ96sV5q772Rjt2cnDF45H9nuvxVchwyRixuc17LnhHH2t29ZpUeQ5LX6gCUhaAQaw6HiGEcUdWqEDFg",
  "key8": "2sTvYXxfVuu3pxAkaKT9LLbhbeYS3YU61YiNppF6z5s9HAc8JTvyHw5Tzm4WenvSUcaEhcUuRTfYMga9yfW6GXoM",
  "key9": "5Mwu4dUPnAjwBkpKwzAYyTcATws6juVGzjta9z4eYNGiK4myxwP6P7BC8a1vTNRKDkVGXCsY13f1QHFCpGtGha9M",
  "key10": "3HvJmb8tbSfmUftmXPzjv8E5GwzmH5w2mY7jScjoYCjjSGuRpH8PrT2kY6WQPNJD7AouKPFjBVb2dp8CuNUX6QDp",
  "key11": "2jeBtHdU7EhGR9guHhPmjAvQR3Ky1pfpM8kcwJ7qZz4XM1KYNwDz1VqrSovYNsFMqqdn7cqKSbuZGmDfqcJQm266",
  "key12": "5cH8o7Hvi9PsQj4qR2M45SMoqWoF9ia7uqqgWG1tNi6hGHg9qaubM8QhxtB995JqKjMj3mMQD1pt9bQmue6GEj9H",
  "key13": "yrGay1x6KmgHEnvPwCQECQ1UFig3xbKPWmBsHqFKWDUfpaRcdpNEM1KdDAwoH2qiA5Y5ikUctrzWmF4hhWUjAJA",
  "key14": "4HEUmXBDbcEc5pMs61N69XaGfP5kVH5bUALyGTNs7MzCDf3d1wtUSkWb6jJHXL5pTS1jc2brArWyjGCojRhm7SPK",
  "key15": "3votQfar1zyDW2jWm8Pn2zS1Nc1CddiUkutdNEf3tPcUdD1N1KJ9JynWBzyz69m7B24ATcAqcGjtfkj4uvHfafHX",
  "key16": "48L25VYnwuYt7UAEkJQpXDFihBqivjAjVum2K5Pi99tarQjPRbhZAqmAP34gGfp5GR6Ad82GzotnZDykrTHHS6do",
  "key17": "5M5AmRCYc6TGHgLA1fatpcBAzDmLZjuZHpQxrsb891SiF23swJUCrjgVRprtqkEUg9NaVfsVyFZrqN8xTKQukkx8",
  "key18": "4bwSoeDxLxCeYtb6QB8zgoHGrMgLLkVxraRtQ4u3Qw19FokzrqXnHftMbgaS2WytsgSEAs1Cm7enTgR5R7BoqrGb",
  "key19": "3xdc8ueysUDUnQstKC6smWnZXLDGnyf2jftXyPVw7mcAta3Yka9868UawqHEeUsHnp5mxUJ4DjCE4sdXLcTgqCnm",
  "key20": "45dCS4CKVnMaQ4xtzUrCo926rMdwjyzkSnx4TMLzsxkAhYDjpvYsaZkkUWTBvzpCHDX9UBoeqaZ1SneCBXbnscoo",
  "key21": "FrvYHQxpiwC3sMzeE7Lc1kXZ7W5cTs11LpWpxHBPGMU3i3AewDXNjmFAFiEM8GdE45NzvAik5yFtiH6JDvgiz4w",
  "key22": "yDdX2GkWiqhXviiLQNgMPX8B3Tm21JL7mfe9EiYaNZjruaU6UsYRSXxZ74y5fexs2xSut8GQLoECVM1SejYYt6W",
  "key23": "2PafnaXCzc8b9f89Nrx9eQ93J9kPDdXuFAmnTii6ZFtCiFJLC5PKXzrCKjvMF1RfssZpDpANjw2XTJ6LG2pD6Qqo",
  "key24": "22Q4e6tHWuYwYcWQua6vM48UPL6SjPbCVTRzRFnMc6pZmndydyr7Md27BPKrXS1fbjDLyjwzRGJxmbMJNCnVUdVa",
  "key25": "4UayXUv4AW786WDFhvsuLE7HQqFKr5vWiFg9dYPKH4Y548PKcfuzugXzjQ4XrwzDggTrPudwfjTQKdyXah4YNLqi",
  "key26": "2whjT7nPYtvmd3jrgSkKpuRrP61X8pKK2Ew9pkxuPAHvRirtXore2MYgHjV267BFeGgptCCeevuViFkJZGJ2Uguo",
  "key27": "3sth2puggUBYMJnYdie8SthvvFtVCCLVbXYzwuy2xssyUn5MwUyq4jXSfV7t49ebtA83nqoc2Gv9xUM9839cHPHD",
  "key28": "4cujqX2FaTBVaTnUzDBLdLQxfWdK2L3SpHHhmHSgMhz6EiAHy9ehEGTWx7qRSQCzUwMmucn9t39znVwkfpV2gBMZ",
  "key29": "36McX7wJ1WqAaSpdU5Hzau8HDF7RU2akydv7LMNa68B8UXG3TAAonBSK47RvnKYUi38jr6og3n6hyP1k6ZDhefuC",
  "key30": "2dwN3NNLCaBo9FvRJ5YKcXHUWVXDKvQLLfva2jwsobXsNZU2hUm6KEYUPFaiYhvTp28VKKF6Vk7PEc7DnL8ue3Mt",
  "key31": "HDyh4H9MLSB2xC5kbLgUVTWLPqrTQQbuiiZYS9VdLEETqX5GSCcgyttVCN6h7Fv1rqUHGUorTEevcHYu2ZNb3jG",
  "key32": "5EeXSbVWUwyLGiAep8rSKy4JP9Y1b2FcNFRFLnReU8DqbnwiydEVACTR9sx4NJ95gcNFLBpYrU931VSfasRy2Cmr",
  "key33": "4Ax9opgh2eEjzKYpHoePpABepXufdL9nxj38fwkMkuVtzy2reZN7RLVhogxny5CqLgzLLVGuJAFBrratib1y4VPP",
  "key34": "YEoDpKevbuJu3zuwMw4PFjg1kiM3babfz6BkKdShW7vEDCxs4zc8U1PFWY8fx2FB3RJEv5VpGBKMmjtQ2ERUaME"
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
