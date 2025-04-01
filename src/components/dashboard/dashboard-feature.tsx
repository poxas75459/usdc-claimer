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
    "3SnMVbPzQHD193ryGnSQ6NRao6ynk6wxieMrGm2Z4jTnphk3nnqJ7W3PNQrtRYu6TV7kZyh9a9oYPctfgTZ5CFXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ERRp9QUVNzgynyeyySbLW6WQhBqQcaLAFrgU2fQxmm1opwpUtMsnUWdFdQEoAeuHs9Zv12Ktpe9pHbFj7FFSMQM",
  "key1": "2aDLpXdPPyNrnVC7TJRu3DiWkVETT2cGkjqybqPBcXfy4guyta5wSFGi3Cm6mFteKY8pJCv4s5XuE8tV5xcZPrg",
  "key2": "5fKmqckeeybv5ZAqsrdGjBb1kACRSWYVA2aE6NwrP3rnnH4myBw5TNdu2v7CDJVwWk6LYk3E4B6LiG6rDzf9sryX",
  "key3": "4s4pVfhEpdc6YhhBeBYEd8CxoHTQGmXtN6ZGcghvKajDadE81XUVAKf2DQFYRhYyyTaHtiAmSsWDm5rzog81BEyK",
  "key4": "2y2kZbRgkBesGcmZX2YJcGcJ2LDETFf96vvuESc5hxC7DGYmnfmsDac27ANJemAomeQ7jpoEFmWRsV9TjsXX95Gh",
  "key5": "4Cnv8xZyqxx4bNe8W11tUVzrrwTjLJMPeknPhm3znUNZ4DzKY1SH2XpmXfaduUSfrDgwofPVf2u26Nx1QwSZtwax",
  "key6": "52YhCfcRV7cJ9Bu9sxK78dRfMvRLWzimbFZEwuY8d5pAhHfgC4iYGAkE6pPtrTJ5HD26pepwCAVGoJqd5fyFcGRM",
  "key7": "3KyWuiLxFaYJQucD6fhY8QfHyrNxFabyrQN6bbnSPHoM3EpBLfW7hLsFxYN4mY3HNQQnU54ZDyfDt2v2M59prUap",
  "key8": "2wtPgrqBd2GRpR4hgYhTD5JRM3WfZ5GAYDpzGf2MJ5Moj8S3w3uPQ35yVkKXCcjfY3wDVNrNm5CqNZEw7eRbUr6D",
  "key9": "2STzWQ7MyFE6fcwbefpc7BpC3WsXR8KpP5FdxAkuzPHFeMnsmgADfnxAwhYu91DVPyBVMvvfgEmdSmYkmTwwgQRh",
  "key10": "5ww2tuy64PTxnjbXq2yru2mwcyLhjwbWU993RKueCdes6r9wDichkvVbewkgkicBd5S39fiHZQ5H95Wu2XWz3h3P",
  "key11": "5NX3N49vDQdXJcKn9mEMZMxCygieE3bjEzt4RQZyV8JyWG3aQKL9vi9NcoqDTm6YGsRzvpHGLnU6R1fYpkMp7ZAb",
  "key12": "3dF8RgQxM7jXXi16pQun39qGwdU9UnPCoAqm3thbPui3BGajQhWkF1qk3dAp8wGMnJFmoxpUbQZ6QmnrZFBs5AGQ",
  "key13": "3xqyBq2AkpfiDyGMeBs3ZoEhnY6CxbDoJ97zJYg1ec1TcEHFcoboMzdWomogEDkfJLevyiozikk8N8nH26bvYsG9",
  "key14": "5tgCe4DG6ZF7JZ8xSwL2XsWr143gnyUqA6KcRUCKRQP3iyBT75UWQsbrG2Nf3tY1AsFcR9N8bREdm7d3NJwdzXZR",
  "key15": "2VfwHRJVEfnoG1ZPbtz876xDAYBqDC4gLoLkykKC9ZR5dUYWiz1UkYEGz24joEE9UXzro35bJdfGBLK8y7xDvcJH",
  "key16": "3Aix7A1bm2G5wA56cadsCQVaJ5EUVHFdrjhrimjPSdccFAj9f1EccCABtmoDCELhzQojMSNE9u685FYZLtYkiZLB",
  "key17": "4ie6bLbsEM6qK2WFmx5V4bWFX2rSnKBJLkkZDKQu98Ng6dCktQf5uCfwxJSaEyjAc3neQNAi87cwZivx3o7bMKRp",
  "key18": "59jzUNtvxEKKv2cMPDSR5W3vP7sFxJDd6qMy3copH2FqStFa52VZeoq4C1d2GrtAJwKJbHpghJMa7CsQNm8423sT",
  "key19": "4qCrV5UQpWTbVyZeWyVL6aiH7WfaCseDBJUF6RFzv7QgsSC5BWgNeXJuZtJusujpVoNNkMaBW2jUkJbXKukvNmhZ",
  "key20": "58esgXPB5kog7bPJy24VJGQ8gS8aN6q9enNkXByERvhWegztRMnzx5PKGa3NH6k12qLTwJx1CuToqdM3CzwgnzEG",
  "key21": "4SjxsHNcNwLZ5pztTtVNBM1RHSm6X3ZHjDGVhvq8xTZj1KA2Tw7oa5DRYN9uFkeGdyranRwc8e7b3HZb6S3WTVn",
  "key22": "36g8TAaRVJUgrKBgyayQfc52TUad1NJ1PHQRLhu48LtpxnfrnireExmLoz82mvd4MwXR7Qn3WTJtSpG7EtF8vxur",
  "key23": "45G7D2VoPViM2JGuK8LEQjdVjeKTMwx4BbNxxoN9ZXfcjNB9ue255aytYazXTyGpenHycLyvP9H1mPuRTMeNwR2H",
  "key24": "3q4prGTTLUTJcSHXYH8wDgVJfQUuGLjvmTMGji3ncV4TKxTkiZAinhx7iLxXbxkjmvrKoKRqSNnPyVbTKyHEMDCY",
  "key25": "4xJx1xwCx7RGEJvqBnPQ61ahzCuiUzDMa6sLt8Gxoh7Yh4cFks9UBwUc6zLxAnmW5Lu8M5biKRN5Q6jgDxLzBhSJ",
  "key26": "3JBoDwyBrxSP4rLaZ7c3BgiMToz2uD55fw1Z9a2KCuW7LjLCqUU7QYyU4j1qEpkvaoJtAk11LwKXmrFHEFwb44Rh",
  "key27": "3n6P5QFkcxHAmoaV1x7NRTQwaHrnw6Pwao2S7zYFMmFmhwqw9db2pj6QPHdYjSrfXzARB34czhYAtx4yD2BtQk8c",
  "key28": "4YNHjB4sdLdxuXY3FMgfoX6PobV2tT93FwoWTFFRcmNRnrjGAKWrK6sCsy6BArgFdzQRz5cKb7Dh6vHQ1xCYPcNZ",
  "key29": "5Jx9EXyEG6riU7xnJWRZUAmKyrdXJweN5XcpZfVUmDLBeJ86YQdHMdzH4KkPmuLZCytuWie5RLWavGXc2YsW3rix",
  "key30": "62ndujeWJW9RCoY3ieu8MkD8PXhYbRqn3qYhkTgWfhhS5GAUgSmRbtcvPVABVdgqziWuJNaREd1RBPkTZUkzB5a2",
  "key31": "3N9oY6tjxvpo2MPfXYshXLgUw2mXHQSRbCCTYhda4XGCufTzRUNsxA62yXCaCU96rvej5JruM9U6bHwykRQ3vje9",
  "key32": "3qjQgmpqEfFmtZwtHm9p5MFWGvYHRHxKGpdsRE1bvYsArECYexrsPzm2Wksx6Zmgfa8pfNQktLLZKrUX5FT8nwHP",
  "key33": "3dBGd5XaWeTeHK5q7j8Rhj2KWvpC7uSw2bSWEC7wNZFg6PDwK2qopGitn62rEhGBKD1Hb8JWQaEPd8huLzVQmTGw"
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
