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
    "JjZ5FkWvdiHu2FcZBszW5tjXiqnq4A6WifSCofF6CLSzZPAEqheTSkUKvHfpbdZcAqVPeXxLYKB3yDvxqCtXw5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yR3inbVGP5ESy3LfLh725Ni97DeiKGYpnNq225CBM8xH3VTAmT5kVqzf7m76yuP2yHrNCXXeSXt7JkQfYbETL5C",
  "key1": "4FWrKiQL39f1pJF1XUXZpHXVkniqrQTWqwNTa2wUMtftPXpuFarL5nLc3bFqzpXYFKx54WyhiNmcGpfkRiYraak4",
  "key2": "5ZaYgM1wLUdyggVXCbwmUSTzRUyNoUPCxyUuzESkFEk7YPU8maSSL1k3aRBayGed9iYFhwwDntigw7NpmDCaQ3kQ",
  "key3": "2U433dyvo72mXXXWFe9KKsP54s56m8Mw2u4pxDRvfuna6xZLjzdDtTmvQxzaSLcDWsEEgTSxWicRiWu4QR9rC7x3",
  "key4": "3jWokQfy6BUf8gyVnEnk2DFArqn5TdC4edG96tFun6cjcy71LUqZkYYnyGT2xkAQKrefpT4RnYi9HWwKzSQHiDpX",
  "key5": "2ao6pMvu7ZJjyV7EmdQNNVv56FRTS9bWya6VpwjkQqjrPQVBhrFymA3aS3qfCLvBV2hG2SWLdruXAJKM7Qvyt1yK",
  "key6": "DAJVwBtby8Z6e2GWn6MW7Eid4SjdL8Q6osBY6zzZb4Lq1ZKPrY614mVgSJeJ2k2KE1b5E1Ftev86y8DQ6XT9Z1m",
  "key7": "3cDkdgouYXY1nPcTZeVhVyWp5HCfGYzhrvGB9c2zKp89GGBsSqZkpEKM1EMem7zctZySymTkicp9sRVmwxKZJAD4",
  "key8": "2V1TWZv6Atx5oqAud3uQsAcc9g4oGXKf4Xzx7iZdAdDSRx2zm7Ros3tyEu9Jk3YmGFRd9Arzx3yFZ3AeoQVB6Coz",
  "key9": "3fwkto14HW6cxt2Te6xzZTa1K8CXNNj2cEpA9L6ZhXV7cibTRZ8s6FXTZNrxV8XoM1W3KdqNkX21kVynsV9wEyVM",
  "key10": "38wQ4Ju98U6JmvW77tgu1rU75tBPukLpFjXpmLk2S3bZrrUQE8BFEyM1hhiQV8qDsJJBwMWzfRwiibdG52pNgjyr",
  "key11": "67Bhcrou2UoNznZP9N4DGF2k4cxG9yxHGxcGo1vppBxm14DLfSXkW7xUu91aQgNrEKqhBgJxkEXWZYEbrFzrqFvG",
  "key12": "318mi3yHUutdPdwyABnKnJh7Cc6DRymZ4e3oK7hV9y5Yc9P8VBGYZb3QQbLeyLomgjWe8VoifU9dvrz9whVZqjuc",
  "key13": "37Nai53Ae34DenJ56e3DpfyNsEoa67MTsYoSkZ2H23nCACd6sTpybYCLhA1xGhfxji7zKq25hZG7qhzRG3eSd9ex",
  "key14": "327NPFzxxknBRpjJRAyPtBetNXTS7dnystwzJnULfQC3592txf2eJma7hReLw9NJkcDrgQUfKSV872VF4zioRRbv",
  "key15": "24bJMW3APtZEeba5wgsCVyKFh1TLHArquVGDJww6VWiPx6Sxz2KyCS7tCv7XaaZCmREM3Mo9qZtwUdbWMWmRyhac",
  "key16": "4DebckUhESrwkoYAXJ3sWHwZysmszDuMg3oZibGgDPTZF6S9zpGtAqVQxUqe6zveW7jXbSuhhTA1Xzpt9Q586L2w",
  "key17": "4PHGo96yvYU7RaVgnhCmf4r2wKUT4mZYFatHGjAoauYFSKfvHinkiAgybAVR11dn2yYFshXtwmkshptaJAgDZVSB",
  "key18": "3qUbKa5Py5Sm8qTjdLwSmqnqo5DbzwTg9Xm5JH8eeCa8SCPfiSUvhVQwniRJ8fpMuPydH3bDXEXMnC1qS9xGkQN7",
  "key19": "5mJszLe3kf5PbnGMmXgNkGZL5DXMbf3aEygu7cNMbYme68pixhP493quWcFob5LS3ArYSQDyS8NfPSvtuWsjrJ4i",
  "key20": "4XGnCgTdfDAdhGp9vE242iu8TCht3MVQLzME479U58jd7SM5JXqhSgW74zLgnAKf61VqeFUMr47yCrNrM8nPbTzP",
  "key21": "5gc8H2wNL2KVFMKNpRbyFvNndjtXaJFYi1Cf2zPvr9JRbcUqFgVx84SBbu3CEZjW1ZCG9CrNtkSF9k4vxEUyiFX3",
  "key22": "3Gk8Qe1T69VKWRtemwEovp3kNjgAtG3x5qRt3qM2npZgUpY5qJop9rasN81DrJ3S43rqx6AzsSryi6iCgigAr5Py",
  "key23": "5m96ybb6fNq4daTrqPb4q2ptSvmnTe5MPqmDEoboh2nvuuwjeDVXnv7Qk6BhCiv8TeCu1MKT4zikCbE9z6gs2vFB",
  "key24": "2FrrBc4YohqFUV9b9Uk3vrsGyx2GsPjqMdPxweZC9Foho7QBSVsmip4FCdqJoA8C5tpe7vCqctdgswyAaKcYELun",
  "key25": "3ptZHXVdQCkYBzexjvgcgJEcr5dL4jtHVGEyhy4SKbMzmtHv94xsSuNgLzKjUX9LEzmrunvr54wA1BZokzjm7SH7",
  "key26": "P3uzh7FBjtgBdtAnHJV9ZbvJmEFE9wswBYmQ9NS31h5qu4Q5Vn61kuEctJ87C5F1WuathJVLQRJ1mdjqLwbZH9R",
  "key27": "oA13qTQnXDNP6M4t9a8dmvW5SYcqz392rrz9LfiC7UNsumHrV4TCLMSRK6kou6tMm239wANtvekBv9LFqBGxTTT",
  "key28": "E1NfCRguV6P1Zmb6q74umktP7vDhinzSqKUMkEDt9gcYoJ88PvTKSNSQ1QZ1avjKCsAFv2fFSsRYiBvi9khTtDc",
  "key29": "5VTmGXQwHZ2YNDw7SLviMBcZUgHZdX9cFY1f6wjyrCz1Lk7FwnSjSJje4dwyf77oWN5GXvu9w2EeqSWsoXDn8yJf",
  "key30": "2Pmu4bG6J78v3BnCo1UJ4pUrLAuT6tdF3AGRXzKRuP6aW8AHLRxaJH86mUrnSgg5qVjgskHL7H83DHd4Rbv9dKpz",
  "key31": "5nyMxQTuJvRXLRTSnYfJTRa8pvbdfP2yvw1shPtXrNkmj8HDWeQG6Lv7fzAyFxyVmRePWueGsVWj4sRN8cb3iG7H",
  "key32": "4tKHnibvX6X9MC4G17ygt6ewBkQerHEqisgRtcCVUa4AJTtuvTU3aYqw8wCqgdEPS9cdSY7wvFHLDD2PrKaSFuvp",
  "key33": "ehkgXSXKKGvd8GAHV8HUXdkDWqs98sh7KBTiXtjFHWXArJCtGQyU15ZTDzHivudowwyyeNRFSJ7Wx2MBMnrYD5s",
  "key34": "3Sr94RtWXVc1WQHSr6nkPfZRvTVJWqufXbUe381M8p8rKvGpeK4p7b8ygQieSLPkrXctt74FyiqtKwiKyLT6oUMi",
  "key35": "vEcFsKpVEnYFUxsZiaNH3dvuKmG9wyBVy31ZsYpSXW17Y8Yn7ms8z7Qc2s34uNWiDmEHKzGCQyvAnBPfCmJr4hW",
  "key36": "4i6ZhcoUzTZQsSNDAwM6oHGTh1q8trftE8dYfVoQUL5xhPe6QyaZWYtAbhVYQS9VjEhVW7X5ky6BZyLhnHDwxB2F",
  "key37": "3G7ZCEBS1g95fh6hVGf3V3Gq3bUH3iDgnKA9vfaiJEoAdBtwQfVP9GX7BnyvY2tt5zMVLJ6fya6NiASnNyXcN4EG",
  "key38": "4Twn9ioYDwRYrFNuwCnS6ffH6gEVS8NLsdprmKNvK9ccTKkRrJNwrCWK6NraMr2SBkKA5raeDsEm4m2yqokdT5h8",
  "key39": "3iGxkF5ZtK9hq2pEmLuVaeQQGSMbzPufETj1g3Y6nxtkoXPpFbZFFS1qnqLV1BHRZqDXRVNwdiVVV6ZT8SC8Avey",
  "key40": "2HbbkGJFrC8RdqwQUVbYSKtw8FotxqnKnnFPcGAHkVhh9RmkMFngMEnDxHpxMoUpPRmAMFePtTt8YVgHWsaWo7HH"
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
