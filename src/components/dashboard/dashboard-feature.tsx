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
    "58FV9aXpmJjHoG5EnecLj3dEYfM3KuVUviXmJUADLVfA24xdxG8r4b5x9yJNgAmC89UXL5prhhi5LDp7hjFbSCeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xZsKZ6fP2vDYB9WbE5f198kuYsdqUvwHp2BRzH4JRRbfJJwgQ8ehV4nEs6xsuJ4icw2fZHENKTvTGy3iWFBZn6R",
  "key1": "MD71KHDoHtfY9QjqLqCwvq29iQYvmwdqxjnoXY5BXXrSWus6PN8gDbCHX2W4NWhkEXMU4Mewdk6GLCBM6synsWf",
  "key2": "2Mx3c9PErSvearFH7rW23FLCvC5cw8vsXET1zJKFqm4xERSpsrEcNubBwfo9fV1jPnN6NmtJoRAKKXPCF5oiQVL2",
  "key3": "254AWiAUwSwwoZjYMyzkUuHwmx4jeYgHJF3yMH4aHUPzJzqTcADt9Z2YX4fJhJ2JoDFVsZukp3igmSz1QZiTQ8pu",
  "key4": "4qh6FPLbz6zBPFBUgV2psREuPMe2QJdQL8voZc3xvwBXspA7pespPsSXpVyFceXY13ckRdSQSQFLh38MYTxfASwG",
  "key5": "5VW1CbuJrZc3MmXofEqTJLUVP2CdNHVRrjG1975Wj8t3mycWXNXXPiDdCYijAFokHjU21ZgZpD9MR85uRGf7k6TE",
  "key6": "aB2cSUHA2qUEt9eg5Btsgmg6o13ggw1MU9DwSg8tkB2C5omdJQieXM5jQyFqBy7Xn3gXgpKHoKTzqQtJ176Kpqr",
  "key7": "GD5cDwif8sqGvCdUMShc5LoWKu59XTc9swayJypufrjLHpe4ojSnPMz8FgfeQW745enumXNPTLc5GzKnebCVc1N",
  "key8": "XjpNccCd6f7QFUzj2sRfJ6UTvxdMd8jGhyx8pVri6tFKdagVVutzLhFJkYUSVxWaqDJtgEgtiUFXDr1MLTq63Dq",
  "key9": "2Z9VtLjkVZunHaXFBfrAgNzupvwDmQ69xC1HRibpA3DCJRQV8Es7ZjvnSwfHYZab8pdLFrmfJEgVt5Fztmi6mSys",
  "key10": "ukV2HaMiwT3yiHWuvFWbPWhBNs7AcvohCmp4q1zpDCRU1ue6uVMtzxub21Hu27z4SGs9fatjnXB2PBX3pMduLFA",
  "key11": "3cZQCiDywcuj4QfCGqmBxYfoZxnYbwWvhnTUQhEYNw7AoB5sSaBifduP3PtM2Gtdf53qCHcm5oEjKCdiqvRUWLKs",
  "key12": "5axqBTtVPtLqbXLwxy7RLXaMhW2Xfda5SB9UUKCz4nUqwa5fp6cHPHWbQJAeXN9B2Z1oxsWQQKqVKJZo3FQM7ei1",
  "key13": "4VavmB8hy1dgAW7Ey9cwx318cs9h2r3nqCCwR8aUzoA5EyXsYwaPNsb1GaWPjV5mFVwe1eK6gjXQd7RwNeTtnFj3",
  "key14": "2D9grqeE7EQkE92Z9rffzp4Mpis2aTJmpM2xFQqJkqGrUGwjbzr6iYiRwWVrAuurZQVeT2Wq4vqoa8XLXbpSskVg",
  "key15": "31buEQjc9DfU6ZF9r2sYT3faKNZxZcYXTmjPqySVJmpUme2frhAqm6YoQmxHR9md2Wiiuy6zQkfbYWvPXyjHsbyT",
  "key16": "4dr3QTknXD2f7nQxpxbLxZbodznDFAHKLCKRg4R9rJjawPXkZGzpfRcaG7Et24bkjuB2jU4RaJ4EjkJv2LRMeEr7",
  "key17": "9rRmTYGJNPt9dsfck5tJdn6JBqh9asbMVsoe55WC4qAbp5Zs7xe5cqyCmPDp7HMrquQbQhW7qAEUof25e2SmGwW",
  "key18": "3EwRQKL6CFwcghJxQcFQ8jYUVP3rYvN7VvpxSNpLjiKEqsJ9ZFV6RxUEs8zRTVQ96t7rEBCNP3XTtZWyVets5uCu",
  "key19": "3Nk1zT9k3PR9TiHZVERAsjkgxEaVvkKQrygrxSM896xGYmTcgCS34z6EjLeFhbWzLpQLiZhuh8yCYShPr8zpG2sd",
  "key20": "4ww3fGz2xvEKUjJ2cGeqjbbbq3rtADA1fdRE6mDwr2ry3vM7yd8PVKeksTgj19MfYDn9N88pFYWBBkLgW9CCZb3P",
  "key21": "2rLwsR7FGJxtpwbbQiWMWcHEaHh7MNSjH2p6P9x9jSCGXiSRZFhaVQwhM5ZGaCompyftArhgbrU2oJQ6oDfwBJTS",
  "key22": "5WPj3H4P5V13HniiYq8MjvWP6j67vW9CdUbHM4TykcL2iPdN4bhuJsgnAgzP5hq1taeozvzGTfry19pnkj6GbeuN",
  "key23": "3j1f7MANTMkiPNG9tBHTqRr5pLKaVAKNSLhGN9A26HotRbm6MqTrsTzh3Y4K4vomNCLJ6nMFe9BYYLAmT9dv4Lg8",
  "key24": "4VRvHq5JzLhCLLwbH7RL3d5ybPhiYbFeCRHpxAA35wW2TpcwUQJi1GNcgbUS6hj6A5JyEeyxU8k9BE44vWCZZmft",
  "key25": "5fBgscP2ZXJagt9N9ddwxxpv2ouCB8fTjXqASwtWJ8uxw2CxKV62hvp2ESvaEGPQckeR6K4Zhm1MQeqSUbmUHqLz",
  "key26": "4gonG4a3DscAHsafJN4b5tF8bs5hYyKcZQi4ndAgZDrQJjA2F2Te8Bf8Y8fkDRyrRpmJYf79LbVkM7CwcoRHHSUh",
  "key27": "4rxpYSdjW1oQRTFNvp98ozHubVNbd2Eg4ZaPQsiy24MqTvQ1hqpxDddcCQv53Ej36Jtqp6eTztdRZxygxunPjnPJ",
  "key28": "4zjFnjPUU2LRDQAmommD35Jo47RZ4ZJCHD8R9J2siT2gTHD9MoMtDhJr1ipDDDmhVipP3YNXK52aZuVVZ3tG6aeK",
  "key29": "hpGr81Ja3WijcxZDERoUEGb7wsG8SLcLwkciU9e1CipqFcZ9fM8hdoW5N45kmtH1e92jA47viZvVMxnC88sGTfK",
  "key30": "ubj6wVZSfehWStDFz5C8mDRotSSCN5hYq7HwkjDm7DuLcJocLCDZf8rQXV7FnXhCm5Q6iirdCNvcj8oXkfKWv2i",
  "key31": "2aMV8F1GUqi9WmCA1RPyZzmMSYV5Ydr41DKuodjPrxDSyesk6xnd9Pdy1yjS7YVUsynmY5CpCxeVQmNYKtVbiZEy",
  "key32": "3CzdiFb71XcAa7pCmSx6if2jVBZ5nUZJtJhw6ZDpjrpKXN3w3QpSLY3fuDiFMmcKGB72Y97yAMi5ZfQpDk4Z3LEe",
  "key33": "5f3MsQiHKAjWo69ZBkPjaEFjsZK47JdUUWtZMF8ZENi6s3mUXjkoNDnVEFNqjhRx33djDugGXFVsFPUDW5ZJnznf",
  "key34": "2euNMwbgk1EbA9SX5ms8dhQSDSsGNtRLbekCzL3D2Sn7yTpwvdc47SLFpZKVSRXVDUxVcDfTmwQkjTFiEyswEwSs",
  "key35": "3TtRdRzGVaeRbvNb1Ad1xzstcvynp7vJZjHY8T1BpwVGYobou6eukRou9HCmNt4ZLFzuH7XPmbY9fkBoFE9eb733",
  "key36": "2wHi4dkXU8y29MCT8SKKgrCRXTweBDRRrbM6vt7qgAvVZJzxmJjtftNtYeK22zgE75BRhDaY2NmyyWicShj6M2YM",
  "key37": "3X7G8LA1iE9kZd1TsaksARq2vnf3UPN8j9vKgb8zRQz5DerXfMT5pgyWUSXt3D1goMMMFMaDUZHSX7zBC48qUpga",
  "key38": "4gpHN47NBbickZKXR7fY784VLvFAUyicyGeqo6Vymz1sg6cD2tLvWiuRzpGRH2E5UhXehfCJuZWtzbMUxoZhWSaf",
  "key39": "3XWXoXT4uaHN1Fx2VocbpQ66qKPiyBGK83M2DUg3XnSidA42sF5zQSXnbB5zdYjSE7pNR7xxou71jRbBVsAjPP6f",
  "key40": "29LCpcoA4DmgdL52todjVDVGqGXbd6wzosxVpZ2aaex4vHmV1tPEQVrZPJ1RzdsYsSXbrt58LW2q1Cqhuq1mJkVU"
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
