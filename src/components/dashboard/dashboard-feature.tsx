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
    "3HMr33G8iEzZTmS6dB3yLcCUHxr6y8UgBfbXvcVD816LSkYPovdbK9xfzbEfu1qiiU9BcSYxZXbiPQRGFUQRCsxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m8dkN74HKqrQR76v9KmzJeeJzEzYuB5WjXPBzZf5A3MpY3Dn4vHMiAHCd2NjUrupHQLKEudyzKdn1E4gnnaCcaa",
  "key1": "2AD3mY3eMJx16TijHoo2Un5B84XeF8o7SoL2R2j8wSjGt3hmPiwFDLhQPib9tJvRV5gyE2itH6aFMBZ6QMZ6gTFe",
  "key2": "42GyvUfY6FxgybCkay947u8WkCT28JbfwuR2KrkkSFA2NxqZWdFbHHBsGthzgijAjFE99AzZaFz4WnwwadGEcASC",
  "key3": "T12XakvkrxPJn9APQF8WRuZQu5DLqaQpmtmCuUm8SsW4rP5DGbJJn6mHzV2t5sYoKusg28KppLmbQTAc2C2cPjZ",
  "key4": "5w6GMbASEj4UVpNGDMfDPPcrNibg3r64RxGJnYA3FuQbSmwinSzq8mWisxnQJwJaGufpRu91EaWxza1UEvTvS7on",
  "key5": "2AzrMEGnM9pPx4V7xjE4UBBh8mXFPWpAVKYkrP6B1PkZwXeCUwRwCt5ny3vdFjio6BJAUKxBEJ3jq4jkfBwP1PwA",
  "key6": "vCMRJw7FRPnTqYsikRoFdMGit5V65LeTQct5b2LXmPWHd7asxNtmBvdu4xRjrFT5LEfM8CKtrirxMUtmXCCEAVr",
  "key7": "5boyEXBSBYz2zCQpZrkFWGLaUfAhdfQpJYXjZpW3rx3tGVbh2rQ6wFpTu2696FgkKpnLSi69MNwpABo7qRMEhjzn",
  "key8": "3bFucfVTrcwHxd4t1bDv2MkQE8M8Vq9uprJ3UTCW8FtzuqG49czqj8c3SzxJNMCLSr5HwxdNyH3ARCZvBpzPdBqa",
  "key9": "QQKUXCiGRAQ365zQGzuXWup3KSiXWtKF5GKt5CowneaXEGyqyRFUHdSSA2jRowVUZAGjLoxeTxEQFAx2X2Lu1rE",
  "key10": "3gpwqum8ZemUHtkGYesMbYBcjFLgtuHY64eBzBbET9R4JbbsDH7DVdxSp3n9EnduQwZBe91hRMoz1uXhAxS9MZsd",
  "key11": "zqmzYEY8yPyEirRLMX37dU6oMbYF5HbbN4zitw1rxB3BB1P4Gvtudt8GMWu4uiDVdkugrpVNRpVUARg83sfooVC",
  "key12": "5CDiaA1yU2kpjNZGPUQcP7DqXTVAr7pPGLPMFN9qzJ116DBpKT83NP7GLz6hMzbrdvT2FRdUDduDBe9aFEhNH3fH",
  "key13": "5Yftk7oF3Wo5Xwp71BzoHccC4iveJtdA3BrAcyXDJNykdEdkbY1UaXVTVSkx8vYiD3WmGy7mRu1kApVRAzbLmBzn",
  "key14": "2zBUgdCPdRx3EGKQEv2gTUTMuFsCa2FG46yAQrMufS4cpgfaVdGG9eK9XHidAuobegfQ9k5eF8aWwxpp5MAWcntp",
  "key15": "529pu8o83tUQ1ZZLgwzv8rt3gdnJppcrJy4vkJdLJzBTGDZMYpswYHccDVoHbD6ukW4YLby53MvRaVYwc6bKDGSe",
  "key16": "5Ab5bLtfVWRYVhjrDMPCPyLgJmV3h18CXNHaH4gZr3Frohyk9n4VHaJv97SPFBwQ3MbLe3Ampaac7cFGsRTCrsXi",
  "key17": "4iNDbTh1nj1n57jLKw5dmmJixXXWcTgRsL39yUxrd7tvSyyFRCjWaQbYJGX4oo9sPQLCidqwRzAHb27Rijo52ndb",
  "key18": "6yCdfbtYrBt8Am4W4KpLJZKVxjhDkMpjsG8c1zHuKgMzLEapXnk15ctZyYhgYU1o6RtR6Ct4VMAceHitrjtRrAD",
  "key19": "43ma8Z5ZtZMtP28NGSmRoAVctPTX1M2tXmXSaV6UKTTZXwrrUUmXTByn9K2yDFLd17nmtqLsvVaP4U4zSu7XDzNE",
  "key20": "5W4m6Gs9soLduYNVHYM2tQwCyjue7tATfs5YpotrHMDxYpgyZhV9RxstGb97xvvEEosULz4xcVCebk4GU4h2y2GA",
  "key21": "S4QZAJEvGJ2HoEa8sHX3MaZpp2rjQE74h1F3FNU5NaaW7frnaensAV9nXvke89fZWVwNLJrmhGD2XCtAi694d3H",
  "key22": "5jC4L42bGkuENeibif2J1pLJaao6brMDCTUgsb9hXJCFbgoFZLLCKqkUpFe9tDQKsYuDjmgEC6iLjHDJhESQm19v",
  "key23": "5RkrXC5NgzoMpReWZV5ehvmXYw6sJoPQF9iVyfArxTaCEGxRWmu6f3fREZHsiELCxKFw53ePm21kmDVJqCpDU7Za",
  "key24": "32sa9vjYoXkPRTyFT46Jrt79oFr6efdecum82bmzo9RhJqMuSE3bA7EtCUVNqfG9jWBpr2qz7wrtyt2Pkmhd5yQp",
  "key25": "3fbDz9d8QFuvoAiJKrNBqEr9NpLwk7sK4CqRKgK1wLKQGVeX7mM6sWJWzgR61hpssAtUA5E7amMARJv1TQ1aBmVy",
  "key26": "5sajbLva94dGh6sSomRvdoc4m2RQRHHNmUfviC57XD6Jdww242ZebqCzdyEiKQxQvGGopwThYiMebfvEV9ChdZAd",
  "key27": "3t45JrEHxk75NYZtxzD4YdVmHjMDrxkAph5affnwmyTWnHPA563P6EvLYapVDTMJXmWnSGXmHJJsPKUdgbZra3Qk",
  "key28": "4YsWynJ1ugZFCH54CtS1MoZ5yKBUfpD3TEi77cHkRpiUE3eJqR681EX3wy21gnxKg8vVTw33nd7eEPSoaeghz3zv",
  "key29": "46B4yEoATcUGfQHqPsnPESuXmxpzMkBLpaCrfpGSwNWozkjyK8msgViWTwCVb84sMsmcXtaLHXaLbpYMouTTmar5",
  "key30": "hdJm8UYsModSpdusiNouCudV1e4fN96MtDvhFhLGouFUToSkf8NE8z1Dyr3pJVAp9TUBBm5Je9CspuagvqkGxWx",
  "key31": "p7tfP9aa6SQMLZbQSCF1oFSsMm97GL8PCNN4fve6m1Sdfz9DZrXnECvzTQ8qFHmYcF9cKK6LdmzWyMGkG69b7k1",
  "key32": "4vML8x8Ma1J9gpocYEhz2zTsnjNT3nRu8akCb6DaBPnBPfD3veqC2D7szWBtdmAKDgYHd8C9P1yuswxgQP9XyoGc",
  "key33": "2LXvX9AgQKjjqYjM3aGgTuCxiRLnk2UbgweoYZnHY3wcKh4Ptmrw376Prh5s45FhKhBsuU1gmyVGePvHsYCYBRsN",
  "key34": "3Qk7DRKXrL3iNJt8RHWZydF7wPNbLtsZqiruUEpV54tqgVnBWVpqZg2akWY4EcKwYgWkw5v3UzwzGiYWN3zsSGLK",
  "key35": "3r9n3vfSa98jMSdtMLzE7WgUAGSQ7R1fp9RvfKR7dhVARHbdjS9NapCcNhQEJTVPDc1AJvSidLJC4V8gAiVz5gi6",
  "key36": "332i74fuArnkFoUSgWzaVdWKr1JkemcxPRsoEpmKDYMsJynAynuG7VWj4iS6KC3URWL2g8YsMxu33wUPUKCAFmaL",
  "key37": "4RWP2ZKA1eTWJNmw4euEMEfGKXQpkHqrc82LRYtiuYmBvQmWkuTg8Sc2aayRGitkhd3pp5UCBXtCJ9Z9KyKkw4yy",
  "key38": "2EftfqesMYJYkiS54JDYpUW6fGr9T932KseruMj3doVL7hCv4LbCNazxJjyPmXhJtB7DgJjBQo3AGPWDAZTKxZML",
  "key39": "5Q5AgrC6qdwPtXm7wXig6ukeiZZfz5tgjpM1iMVpbVcpfyDB1QuEFNh8EhHCCq4c9fduboymiBH7Yje3NBxU6rmq",
  "key40": "2VHKvaELgmmrDNf2oAWpDgW7wwvkhDqBaghxRy8ffdFBwk4Mg7nfRNj7S4u6GqdW8oV6TXWgQQmS5GaGFMLqUXYp",
  "key41": "3GC7G7kDPbLqT67G9FGJTf7jww9Nh6SYQhAGE9whxtb9cy7kTd5XkVQknmFkDToy83RQ3u13U2ofWtUqadZy2DW9",
  "key42": "29QPLGyXvebn2hDpVLHc9JyNjsUy2p1comhfPih96Gm27RosNhZjP9CZnUCJa2KyQtztrYVXoPKrsfHka6bEtP3K"
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
