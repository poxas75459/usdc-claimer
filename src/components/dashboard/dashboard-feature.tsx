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
    "4UM7kV77TxdMaaqEGkTwPYEXfwUiwvCp1zSFPLqdqQZh176Br2wyjAY1RzRiMn9Fzp4WBpPgoJFVKjj1Sq2AXrTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RwL6UKYs6DR3WgqVn5nhP99kYTPuazKcmT4i5Eax7PMwSpbQPG37GrqqU61dRmSNCyJwdWSXncmkUPHmP2T45bT",
  "key1": "vbYrfVTT4g4DXJvjkvYoiRkCKiwDjE9boP6jFnhUa7bNWZCeVuMPnK96e87txBUipTuBW2Cp9efn1B8Uf7aVSCj",
  "key2": "3bVTjqdE4BneLcjEs1NLyrgB2NJxy6pxs4gp36LN48LUVVdnW9RQvN4mNqo6ZwYNmabFiwHpLzMxAdUAffrZwF3c",
  "key3": "3qpLajuQufTFAJu1p2WZC37nBzRFE3fKBt93BnqweTc3yfnQPKQVyPCx29U7vxTJTdhisRpsyEx4JcspvmHDq4Cb",
  "key4": "3sJEsBTv3dLbkCqXc8HsaPYqb2L5PzywiiW3w9KtwtqYwELFgh8tMJ9LskfBe1diQd6PZc2ZxndNTdCNBJxGu6sw",
  "key5": "4ZodpCfXrZkoqEpYpBCGXHfXrZXr2CdX58Lcx52sJkDZVMTtFokkmG4zr9zPrnjDK9uCWkw86Hsev9oRfHqvS98z",
  "key6": "393KpnEX2kiTgNJs463PaFKiTEvDRBZcAQvW4kAYDTHcgbLqX9Sqxa9VBY2uDrEXHdT9pz7JxoB5LSDnmDvZgc1f",
  "key7": "5zEEUMpY5EuioxtmThz5MrLrzELcmpimhdJgKAUYqe9BCQnMwyDPiyoZXJrX71FTHtGvHDrPUcSAWGyUJcq5ZL43",
  "key8": "3VJuPxnNUTXs3Umepq27v3BThdd2bs5u7cMxRV4YSrabsn5tipPwfBDQ2vSENq9DCzrAEXKrZKBRpER7rx113WXG",
  "key9": "3nBL721neZ2sGJgTqHvEFv7YTYTizzS3AnqseS5QGkJA6gNxhKkpVut2emxjXrXKzCGQBYVczkMAaL2YzTe9JFaN",
  "key10": "2xdUyzoysA2Nw3BTUVThAQumVo9N2L7Sje4eEghMzUQmDFPW131DHWMnN8h477ZFi7ESHwKbW5Yp9H6KfL5hihhM",
  "key11": "5GYpJXyHW4F7tijoLBMHzNUzc3Hnt4X6acu7nWrxPsnskjbNVxVRyGeuJaaR91A135FQMNVqiNu1V92UHYAPkeGB",
  "key12": "43d8DJyF3gdNnqwxH45pFLErZH52qS7Mh2ub36xUJHRhzVfXWTfymai3kcncsMMfaj2KkDUSxa3m4Dpx8rnzeBD1",
  "key13": "4h9q9vsPx4ETDuFQhNgnoFaLtMZp2DGCps3vswsiMG6KzBgPQqsDwQmPN1tSu6N35FHPWk1RStHqJCMhMLujfXs5",
  "key14": "rnirJyuumqFEVJisEk5jf4tPRASbBm69mVzX1VkyXM1fE95TBcctTp9MkdNCG8D7sVxX6KZWwfT1tQyLSMXcHky",
  "key15": "PwU6xjRTcSGwitrnmAaWtf7qmq1g6adGJdXpYmeKbGFKxSe5tEnVR3MZc4u7mwTPemSemh4Y851XrCT6EEbH9uU",
  "key16": "3ApwJfgksAKHMLqNfPVtH2iyd81QbikSd3d5bS2mijLxVAFGQjZsAoTouuY7nudhsZtwPDM6456YRfXL2zd1wTbP",
  "key17": "4xDgRPYGKMADZud5GaUMTF6Pukf72jXN9yyaRsFrc84SpgoWX9UTZGWvcu7EDty6LT8WUsoYj74NMHutuUpXN8mG",
  "key18": "66oT57JJKfuFA1N3BaSdD88VzJNv4KXuGdoxD5uBgQyKpBm3CjtigMgc6ZJeDkZaCbr8mBBtYGA3t6RtEWMW8wUr",
  "key19": "2jZLuKmzAQQrTkdVxiCjubz3ntg4LXByFtTjZVRkQEDKUHxJrCy1Y5gfM2SBBPUPTXbCB9Zp73SoDoRkQEKBjLY4",
  "key20": "2rpCL5J5ZoJHdDn2XZTum1CmzLmKNMCkEUYpSkJ7MW8xq3ueJZmcjxDnQYPZWhrMtPDLeBqmwChbwAHWdGS692WJ",
  "key21": "bp1pyWBNAxBPtzenPTC2r2gTsZrvaF1ZSPS96TnPtJave3zt3Wa3Earc3okasBpTWQd8gtF3t1HiL5WVZio3uQM",
  "key22": "4Sd6QgobESKvVjrgTz4Qfgi7cCrupSSbVx2U8Q4hqUZtSyKqWtits4wHXMWJ2qQ6ht34yWoN89jBV1P2iqFC9rw7",
  "key23": "5vCWsHMZwKqvWycmRAZJmSN5g5EP8bLYmVVLvp2V9EFThbDad5fbMbWkeWVnwYbtyd2zqeEv3jvBmsTTvntcBKyG",
  "key24": "5mD4ZhMiNnAhW2FmzGFpLUvGiu7bps85NVYXWvRw5DVrmgiC3BgSXdzamXKENJpFZxdKFbiKFSVwBm8dXFJMCajB",
  "key25": "3NUrDGhquJKnQdBTqSfwUB2EwdNnsQZYqvdWQgJyNZqdiVRPEG6oKyKLTPH1yE31go15jA8y2XAxW5XbkG5pA6Ko",
  "key26": "AXbh7cqyttDjmjpmjT4FxwscPXC5c29jLav4Yn7g7kCTJMMaukgjKdfwazkKhcdrAQKp9RKDJs3U63wzeV4HzaD",
  "key27": "2jc6qc87KJ8qtov9cyWXD1ssnw6GJQiCHXPUZkrbrY2aELzmJ9Vn6Twv6qb1M125ewJZmYD9kZTZrkH5XCDgWJaH",
  "key28": "5pX54wddTwVw1TwskZZGfKQkz2nMwhzvmWYwK8iVzpVaZnjrhcWsF8WNHPW9YtEbHSzYJD916NuqCGD2F48HEY4o",
  "key29": "Mm3aNd4zf7HToKUZWm4Sfrp33mT7qBsbfdt2tLNFjmR1riKepCZnoL2v6ae68uEn82bNUGuAaVRzaDqzue3oBu4",
  "key30": "4hPtfQasjnH7GbKr3YvoHYK43vs9CaPbj1ewHgteWcvMNFrGEcJ5pGeBUt4XnHboCKaUq6DKQLRmPDnLZARFZ6ZR",
  "key31": "BLvVwTJ5Caa9DGxGZCMMRZoeQuMiVhtfjcv3JcuQdFKbYSWEfvaJd653eXGVXpSaLfT6gcwkJk3sNziTfvk28Mh",
  "key32": "35jmb12WLwvXeceoqHpDD13FYvv5ucQP3fQK8tgiHoStS3ey8cxG5jbeCMkuasGoW8j7XKNpXxX2xPFNj9YKGgKP",
  "key33": "97pN4wM6VNCsexxf4JSiniBsJaf2JJZUrAjaENXGVkHPtkSMcP4SPj1eJtiAaQJWEgfUaZQCQ7f2KSuSUiVcdr2",
  "key34": "4GVLXJHfyfqVdDeTixDMXD1jf3cj1zHhPEYJ2QoU4PzCNFVXgobW6u6SKhsgAoKeq4DmEEeaWyMB2ADdDRXdWKgT",
  "key35": "5aDuM4DMC1nmy4TZAnJGabNnebRFWNxz2Fd8LQxf5Ki1oehHyULdzFP1GFHH5TLZ4EZBmrohE4ePZAxgCPEpgaJb",
  "key36": "5HgvujwmanXA6kNYxtnnVeN91NuLcjQxwiFcxdZY9cM851WJ87AEdUkRAnXzCWhFTXbc6sLLPQRtLW2Gq96X73GH",
  "key37": "5yD3Ud3r3sXpUHqvAAtRz6Cvc7aCfDPG4mxEBtwbNbaDXWMH45nMRpU5mcSSXKsAF6KohswePPk4G8eaTnDozEz",
  "key38": "5BE7yzB3cBwe67kZW5Lk8ZTiBssvhzgAHaCpeJxjucNqp1cjP2oPMGJk7o3EUHLL53uZik3fobGMDG5hcAQXx1Jd",
  "key39": "3AvpKsLgJYMfXXhdjVAUiSo8hvUev2Zbd9B39n9kbwDbXd7odYFGiE8hdpUzmiQhmEzFwjt3a1idBm9J2ffmypaN",
  "key40": "3V53RwS6e3Nh73TB25Yf94ejsPJmU5twNpoc59xNqk9F2JDjVWv7NT6vH14RagHkNY8cDFLempMGHDXPkKFKZD2g",
  "key41": "QE2kyuKFEmG7CeSAHF5mAaZHLmBhA9rg9JirEgy1PsJYf68U8jEhKp6PBFqxDPLE1kchZZ1dP9GTjFW4t22MnyR"
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
