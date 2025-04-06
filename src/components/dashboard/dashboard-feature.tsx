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
    "5PuKe7oxL6iCGRcdmbfHAGjn5Nprk6LfcwLNnwczsn8ejszVbtNmcJKK6rQ4AeLeX4KH8bz3w1q8jfVb2zKFedXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43fwpVBYTWbV7TTdqbaXKeZUdQmzCNP9XTkKsL6A7BLKARjfm8scxHWiChvBHhQuTDdsNHdomi8qkr7CaMjLGnWX",
  "key1": "5ymq8BTBjBVS4gEcmEhuHW4jFkQGiw9at7BL68wdZmUkTToG2tWsjJZMoqYrHAyhZu9BTLjp6RwB7i9vwmY75t28",
  "key2": "4gXbUT3u4rt3zAp5ibAqUd2QxWqtK1YCebdifRbC4ofnKgFMUrYmDH4b7BkZuZL55K7v3EoiVUfv6rwLFSq9f3gJ",
  "key3": "5iNiAkH981qZ1QwJgcsBuhyyvNT5v4YshvmTF8YZYMVjFeHgq5UcPgPcp9GomY64PWXwVjnZssHzf5MAVwnJsnQ",
  "key4": "3GRbyCPmy3gKBV8ZwAHuuENMogDhQdBcZ193zCsiDHFLf5iKVUAvKdAzGmRprwHVJxuWwHU57q3Wh6rcTYxTkJNs",
  "key5": "eXpBnK53KbmCCJExQZkmQfF8eEjNmJ1fSR1hvshD9iGwy2kFmAZ2asvzj4JaDhzaUYskNu4s1nmsny6RaySx4rU",
  "key6": "21j7jVbBvLtKjDTn8bRwubJ4uesxMbd3MJFQmh7nqaZmDfymZJPYZ3feGSbkCeLZccVyxhj7egMMw859wGjPApUZ",
  "key7": "4wn7KjQb4bw85T5QghMz2pHK9NJShWVjyLK4Gm8jviiGB6Xejk85KieyBdWtA6Xg7wcXEHKgxuCc5EuWLQaG9xhb",
  "key8": "9xzpTFyDNjzjJcvAbXceNNJZQaNbMx3eAkmoXGaR9fi9n8DjMqBKFcueQCyF2D82kJTFCBnuTzbpLgCZPDAM9Zz",
  "key9": "5wJCruMkMGE2SE1ByNCGQxWMUh4zMDoc2PrBVtCGTuUd8gRSCVaDjgACdHrCKhDdkzj7BPwvMp1xNSEuGKRxr2c1",
  "key10": "5X2FTrvAGiHCthV4i6PYRMaExU25D3zNfNdJ2Scwx9gaGjAhqAtVoCQBPDYyV7Rf9sjuBXw6FCkjsrBXiG1EYu2f",
  "key11": "7gJUgFkD51tfaLq5P8VJmovuPWM6TVh8nvxZan4MPLbodhnxwgkU3YZ3HYYqJsSqcCGUzFweznNrp1Rpo43xFJs",
  "key12": "4TztU2Wa4pSTTJV2wRWcTRJCMyiuLgABhN5seZmTLL2zX9EaDQu2gXphinKUJNc9PeQfzR4s73bnyKhGuofeEBpe",
  "key13": "2g8fgoD5seM3TYqaN5ZKVJSZegcNrV9Y6sh6iwBxbr2YoD5ChQe9Sw179meWHJoWAAbThyq1Ekvbodu4ByhWdrWL",
  "key14": "3dCrknwXC9kkQ1ASPUBhbuBemWgKg1BrLH6B1Zwj8MLSfaQMMJ1ZNnjTTjfhaWVskN8coWKpD19gMNg6pLL3nrVb",
  "key15": "25P6FAzZ9UtB88AUv5vgmjr175Yb183vC7dmhrVmhsTRpDd8B6KJ6LiqdRrLY64X6AjhkiBtFaX8D2p8BDgzB2Rr",
  "key16": "4oE77Y19Eo76VCHZ63ReHqxPz9JaEtw9py71WW6EBCsBgW6bX3WVDanoqBTC2Xp1WMDVtdrB6QEFQmUmsZdYA89u",
  "key17": "5FhBd6VtNvLbUC2TPjmhvq89ydDsFLYHY8iaC2L7j5yRyVfCBhNagTeyKbEDUjbNfCvywXNunQFdfoHMHR1XUars",
  "key18": "3hvzuyGJqS61HmaMgwG1evJwx44iaLMR3HXHTD2myFuqjTHjvkCDUajKGnkgMAXX7t97LxrZsPJ2cN2AuYaFrPWW",
  "key19": "Jsw8Qg4b4aSBh9oRD3PfdU8myrG7QzTys7JKA8s2PBekyAyqGtsgbCJpCL4PCXV3m3vxkEZ2UXvuNvaUkP89ERd",
  "key20": "2BssVpZmQ4Wmj1CLS4KnnTquh8edCWB4MPytSq6vWxAyCWBs3VhocAMW6UkccrNB5v8QRVVbHx52A5pksY6kAu5R",
  "key21": "51bqHubAb2DnkKFikUadnyvB3A6wgEHZdtxD7LZj6Yz2B5fghRSV2odyZrfhZ7TMen41VfG5wUeNtuFu1iYVTPQy",
  "key22": "2sJ2ShMqf85E84fuhww66VbvNicrL7kuKPNsyx7AmsM9LUejRVFtu4ujRdz9cEPyxu14LPJhnyJQzaqT9Z6KZPLx",
  "key23": "hYNErNgeKmCwt7ETG9V7SCXJBKckrYH8qVMz3RhLZsiZCC7d9QyG8A2BaNpWErwMwHZf3Foyz6xbSSChLxL4J3G",
  "key24": "23ZwvmqnTihng6Z6dHtVJx8poG6AkopZJXsVPAStXcvfS5ELJaRrm3BJfbdYRGGAw2en5jWzruH6LtXKHJCaRsVV",
  "key25": "2UeYtwzRkMmiiaJBEGYPv2Z9bKsMuwsrK1hqouah8ZiJmq1YeSkGAD57V15SyAe6PyW21hmBVfhKiL8CL35kCYZM",
  "key26": "2YUMDzsSjgYnBgRN8Z2HW3f8wuZJUXjNdRhLHecJdu2BX5fDqjG5LHMwhbNJB2pCgabZJTKdBhZtkqq5Tqd3oh4B",
  "key27": "2SARBU5W8oY9dNVc19aH9ZdKRMLmLSHhtpfuEXSpa1WvWC5K5yCmimVkKknnR93PpMfEmZ4eX1QfGoFieX27QVvc",
  "key28": "67TViL53Fk4dQtZP5X3cpHAktjwGweRc5h9vRL7wQYYFUT4NG2oz2UsA8nYDZt4XrS5vcry5NyJ4LTcKa116aXQs",
  "key29": "65D1K3JMbsRDP7yYt9aDCFTQEMjHMgdUZjiGwsdf8kZa8eLUoWHbfdTGHuVeKBwmfuFcyk1pDxv34HmfG9KnfMyT",
  "key30": "393CH3KSUtGLJtdA7AeouopwuDkiAfUJpu65nHj2Az9jP9SmLe9quwsec4SBMjKNaHRL6vRth2XUj7mi1nQBjWyy",
  "key31": "2FiruxVb8Thh6k334FRCGhAXNmxf6ageRPiocV88Vi7eB4JTVYa9juecgEuubzfJhgYpFb5nQTvu3RkPLi2q6Ybf",
  "key32": "2BbWz9HAs5SxnC8NLAtYJsh5ruVxXY3xm7ARiUGS855s9hcEGFbbFch2DTaFihJJsSpfTiGWVTFxJAr3S9tBxgE2",
  "key33": "4VMQw7D8Giy5BqnMnnWKepLH4XtvQM8K8SBNWoZzALWfMkbKoA6nAdADN2AaY1tJ7pFz7R6FexrZMsp89Vpb5a1d"
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
