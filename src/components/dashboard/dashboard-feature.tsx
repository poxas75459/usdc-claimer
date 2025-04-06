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
    "2fxcpTp6NRuBSaw6kNz6AZQggvvXgC929g2uKjQ8nH9TghRXNTK9i83tA36wA2zKbt92rHpQgNLsB67vM1J1zbDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45P4uEjigVEKHpGFSopS9Y2tcaBWLY3vLRLYP3J3tugxhHRZVniSN6wpHgBG71ZZxChx4JR8gAV4AmqA7nJNEtYP",
  "key1": "4AAfx7e4DMTWzEVgrN3LZNLZH7yqBK924a3RYAWdKJHQqYNX7jezQMeBGGnw5BGv5dAb7yjPiqVxsroT8UtkgBwM",
  "key2": "5vDKFUpXZmgfh5QLnJZwdZdhVUJ2P3qnEziqnt23yAsB93nkyfBq2NW4Tw4s2ixWB2Nwkg9RdHyAQzBGPGdRnTVi",
  "key3": "3T43a2eE7rtxw5jK4AHMVEVT1zotZwaTBkH9LrdKgbfZY7feLY3FP9p11Fo6viF5bs6H1JjqztLqKbmbjuafg6UD",
  "key4": "3bqchXQnpm7xBsAEQFFftMgbUpmkui5BRwyXTjymLX1gWeCkCXsLG2G24MvQ3TdYUze16naD6QoyDNbZMLTT5qvr",
  "key5": "2cuKFbGpgkDiPXpew8KD2Pz2edw9NgpXbKZooydzrgDBt9V6zhSvnWRHWnh3ijQKgZJhWkB7dDJTCrnuxGVucG7q",
  "key6": "2GSatGiGCrGRE2dc5tjbtc8SnjARpssReyFxiCP1gJantdfDx4t7UR3fCDejhjuuwjB3yAzbY2tnACG1VwiurBdW",
  "key7": "32Uxavmv6mJfVDWLPQoZHfBUGdZZacPvkumszfzfLtbfdh5inw2C6e4NTttPW6FY8NuyRZjEYtamk7DTwcnsre2q",
  "key8": "2z7qgjbq4Sk8VQqPxPMqZQu5NQ4aA7djqKkzzWQpYQpcRsQr4ZQwGNz2iHW8ypwjU8tBd5JTrwtt6qn6ss7L7K6N",
  "key9": "kTbFA1VAyskK43eLBMrEbyT7febMWTWjxEwJyYfRe41XTKJePjMHjuu8M4Vecnb7LNwaG2Y9S7tJMJWxQa2zQBf",
  "key10": "TQNeYoHLKA5t8o21kANRLX1YQtvR3JATZ7rvTLEQXFUiSVSwnh5ucERuREH2QH6nDPVGiDEHgRW9Fyfq5QJmcDU",
  "key11": "23T65YD9urakbQSyRwqZZKeGgRy1DUmEozLPf4QkUfn6WFHuQnf6E83BMLp7vtZb5qnis8QRqujAXKZC4h79WWLU",
  "key12": "2vBhrz9pBixt7HxFw1KnD86zas4pLVLifFzbNvs4jTq6X7np39h6835qpbHsnaLWeHdMdipz8DGY9XarHJXAX9QU",
  "key13": "4uYqQUzm4VGGsbfqye2D4AL8FEsh4S7Y96KMbhSbvLkGi7zgbkKP8zm88oxfURQA89aAzfLSjSTkf56JYv9KxK4t",
  "key14": "3Qo6ZUvidD1eywDUZnkywiuaxYQjJWcTw5BNSGxVkviA4gvxjuVaLY7KsbQLRtgoghzuTN9Fu5p4YahaSrfM1HAM",
  "key15": "55e5NX7EBNi8EfC9xTZ43fGbC1ffREQHB11pv9B6QvzAcF15n12oLr3udESFnSqVLzS6pc5fA7pZ12LH5EuEkv7A",
  "key16": "3rXpvmFexhM5gUcuYd5Y2WNFmpu4ev2z6U4Lq3qeazd8b9zh8F58M19S6VeDuWgGs6J1v6kDZtsThxkUzHn7mZEj",
  "key17": "aHw69Gp24VuSnv137BPmKoM9SSpH6KkzDK11a42rkeHVfhw8ct9nowVFdhbAFJkEMfDYAevV9FPDwu8mjsXnc3Y",
  "key18": "wY3ZrEgnTonQiDhmy1LQczhYmhycJZ7uRnDncURiMgDmE95ExF1mjvSXBvmHCZ6kPMLdpWyvMzw2NpkuxHJj8ER",
  "key19": "iytR8bLvjPpypSsszSYzsYoiCuES5v8BeuKuVqvW4fxJZcVrPKqj7Y2dgcNcFbtfLwc3T12juTtNYXDKM6Hp4ep",
  "key20": "32QWs2HHGoTNHWeAxs4iaR1o4e2gTQ9bcP5WfebmNDGKFqpVy6mz8uVnTZxxrzPCmfHEShwymp5p34ap4saWAz7L",
  "key21": "5eaZ5ssikCmnJvrbNtRHG5NZ8tGsfZzADVLtSZB9s5U4onvQKTDAHQGgmvkohxwdfxhFMknYRG3hUM7AD751Moc9",
  "key22": "2GBrG6pUFtfR7UmjUzTbXMrGkUEaCEtqB1Tf1JrAQqDN366FVTpGsBmS5Y8Cte6Q34csZXwssFHf27Y5LmBkbg8v",
  "key23": "DUGWrYFdxREKGaj18H25xhGFBQ8fZfi5NhsDzPMdPEhiEMV4vZ9ixySTP5GTjucYM6QgC13tMhMJJuCWSWtiwDp",
  "key24": "3cEDQQSBwJLAk3fMp7gGpXsbyJ2RRFvcaCvSHWLisVhhXZbv5bcUDzpw2KM59iMtHCJmt5nVxvxKhDxS5SsjW9g8",
  "key25": "48cTDUcsdwhSmpTbyB5kofWpoXKzpgUJnwePfY6ZzPaoR7YE4hhkGCGwRWAcQnrXqn1sLMeZXzbzE4SPJbm4EFf8",
  "key26": "YY7dwMDAfg4khAJDRsuEjGFpBHaNYifc2yd7HF1K9EDR3P6Fdjp8PSgmzyxZvK4uV9CKERp96C7txDZQGNuLRAE",
  "key27": "4AU769jdG3mdCHbi6XmbttREmqEAdbpoKDLYyZj9jveRfnBxzEfegZ2YunbiQHTfBd4Sz1Xv4omVA9x21nbMkuq",
  "key28": "5U8pdRGKMqRLRDssNMm1DHFpLWuG3Q93GjqtwZvdMgK62BMdEBdy2Dhb4e6EEQgJc62971D49vzbrh1gQev69En8",
  "key29": "2ZMyg3a4NL9KqU5qMK4JNJPxCo133kqrjnqJjsNLJ8xJG5LfrJxzEXk3FT9gNw137Butt1SUHiBLZYxaSAQgUwFq",
  "key30": "2aaDoaeUS7Gjs1NiGWT39keqck2iehVKgX31QA9fenvsWpXDY18Edhv7fFMLbn941rLyrxT6vgWMMP58eribd5PK",
  "key31": "4wLKf8UHWAaRLdmRZWsivZQs3jxThBA2iCYDxcpKsYNsGE4tV1UWDaVBviF3UaVDMM5kjvUNgiTzDBcBW446vnX9",
  "key32": "4WcBTz3TQ52o2xmcZUxNTy1KB1qvF7gBNDJwjrK54rsdsZfScxbPHJzKZBdyLAFBhA2NLV1fdPHBb2xuxgwa16Y2",
  "key33": "2bGExCCsQgj6KYSzG89rXia7P8MW1ormg2tSEjV2AAzzyPHtTFdNNgt9ejyMyKGGdfHkPqhy4TvVVbEgw6Lks9dH",
  "key34": "4bwqXE8SZbCWwwbfEdpEeaSxVXf8Eux3ChHgVjNbvU4WVnGxfqcyDnHa4rqXZbVXR4w2HCyhr6qi2h5rSHJzwK51"
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
