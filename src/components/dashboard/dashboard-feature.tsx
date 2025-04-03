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
    "2nBDcFGLo8xegmK5ukRNiavpBVewFfW4cPCjThJCccbMV4JBFPEXE5KVRNTBeCH6nm8XRbKcfBtyt9j5QeM4gXmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36EBBz6rQhFaFDUrjN6Ttv1Tgn4EPjizrVzg5UKQTCUh8q3nt8yjJR84m2Fc5eKuPxNMUkA6rynJ7Kg3cERYN7Rk",
  "key1": "43xT7aE9MM1hLhm2Mrzx7fYbts9JynmFbo1bUSQ2Q5Ww1Nih2UVdduSN6p9TweDopqabQxJXaAH8KpMVRt59Y7cb",
  "key2": "5YU8x1zdtPJrxXg9SakfDh92sooYxbu61jpJ2TqqYncdighxzUTzUd9L1W8vC4eydkkSdtyNuqW7hBd9E2ePcKwR",
  "key3": "5FnS8ZJnfXm8xa4J2qsgoLMMuYoTDnZZSiuDnupy1SUw8Covd52ZLpdsG8ydfVKM4E4HGqHtUzoKMqoHRkiaxecv",
  "key4": "216L56dRddoT3XgnqLDn8Uw2am7CxedTR1Kr9kbQ6w29PmhbLLURZyXvGgc65MmNZcPvwhv6KMniaRoZ7RcjibE3",
  "key5": "4gXr4v5q34jmdDDhNSvqTtT4y3hfhKN6HLqhocPKdDsWTmRuhGCe9wqGgJz2DjEnnRjbzzQnjgXMW7R98v15P8j5",
  "key6": "pmUnZm8N1XyyqZ5bVk6aBaE4BsYvU3BmkKx7s3yNMVSnbSotEve3PU3F3QnqUtAxp4wZSzsQvuN99MXvXmYuQKJ",
  "key7": "3saz3CW2UQ1gbD2Xube8NZFz1ELAjyuPoFiVxeoCsQCP913LW9ssqS4vGH5C6vHXyeqBFCP6ZSoEJcSufLbNLPov",
  "key8": "3FDeKjDtDpxpbkvpQL42rNWkJpZTTjFp1SMcJJgQjmN5CcKbFFtCptNtkVJKTQHpvnVx8jsnC57Mhz4ZHaeroKB3",
  "key9": "2mVSzhnztWXSWZtLmEWFVgvZFT2X2efkT7ARmcRCUxETcdvHFgNdVeCSckHuwLrQcJiknEbxpPr4PNVxGvg4bRnx",
  "key10": "2wThxfPUVRwQKV8bwgG8Wa1Gxc6rVyNV7agRWiLsLZLbgnYVseUgd2doX1gyqtL3XJZsrwEtE7TBDRSLEZb6GF6f",
  "key11": "ukmysm9Wh41URG8b5usQJAqknkHZme9kri3R2z11EYbDA2zMdL5SjagjQzArZU81pS1dwCKjd7rtD7EWe96Bg1L",
  "key12": "4dyBHE5xifBTSvNoezvt8LxBYGEVgNpLiv8GBeQfoCrCbJybtLP7kVGGfqH2gAid485W4b4iAS9rqhCToDkWeXBh",
  "key13": "344x13LfJ3yReg8pyGovDxQULxZenx8hpPQm2Yi33RkpmWY1JRyi4FcacV9gXApAjbrCpXnH6S8rEQAoKBXhQ1u7",
  "key14": "3BHQ8992nuyjkbj6Ro1MapoBq5RHt7L8ibagNzkbMwY7b6JuzeLycfmHrLACexCbzg78kE4hovUczyzYzM9qBMMp",
  "key15": "4goMpX5iCZqbbsVMLrzFz2KPjLL9NbcYn3HfyrbGDaHtHAmHgXdXXvKLfqqy7oaUWiLdVBfGpkaCsFCT1g5kWtZh",
  "key16": "2dUUeCtQ7vyRbNaD3ztE77NszabTLTVjPUVpUk4hAotudtXafABsTayztFsGbXHNiqDVgJCu9rTVo5sRU6h7Gx4L",
  "key17": "3aBuZJjQytZEm1UQw54gAngZSpmUDeKFrTap3D92GK1SCuv6hEiHptxNyK3rsrj82tdxvGhmZB6BCmaMrZ8vGHQU",
  "key18": "5s3Gii1iKyp2ENDacFpyMyevAykNQEagzao47dc7nnCTmdAukZLSHFC11GgqD8gDeVP6RoRqv3dfKb793K2kV1Rk",
  "key19": "weNJ4GLaiYWSb7CvAXGWUvSRfPTuoaBMmtHqXfQPUijXMBShRnTxx4jqpz1GgvgxRmnD3iHF1bNxiwUUDLD4dhz",
  "key20": "5dzftgwr4mPvsAdgSW3KsKynQdQ4i1UG657UCDQCEpnocx6fQkN9HXStkwxTX7oyBpXemqQrCqLKGUVqQTW2G8D8",
  "key21": "3iTgNH8RTNzWL8xB4ZCkwh99Mf9wUkecQJRQK2uwWBU5dbYAt8ZiQKCM6qGu5gh8oMK7eyFsBvNgn3UHMpVXho1K",
  "key22": "3eKrpmUwfF5bTMUdqDn9uvhu7w9CAwzLWJHkRC5VL2DxFW5iYdqsfAowGG6ajspXT98BXrem6x7jGGWkg5S1XZ26",
  "key23": "3De5JxaAoUtQcZCYrW8UbsY3Ldx6SJA9c8RhFW2sraG33JZWrhdcDwZqvBhcju5e5nTvmKqoHe8Rx5aziTpyqmim",
  "key24": "2kBRrVme4ihPnhFNWTYzGbC2HYcimsMUdvfFfZx9SmXRZuevn4jzxudzgSJcUkK6fgsaMzb5t1YzPg7uRNDKDPNX",
  "key25": "47f2AU89EgLiWwB3oizeZFGYEnupjPKJD5RnLdCM5drwSiEBMUKSP9XYcyK86a5Q2tFpLQVYTFUkjMVC4CZighVT",
  "key26": "dr4FRp5xMc2BtUf2fhE6r7BGpsAtWvmq43sDnx3M8zsQ65AzqULVZeLCDrQcA8dR9kFWS8ehYaCSfKJsQEPaabz",
  "key27": "4m84e5w5GXDGuzCtzA2HJhk8jFniHSWBkpt1xyzPEm6jFiK5M21T8J8WBAAfiXAKRMAG7XMY8GP2jcHCPXC9ws1U",
  "key28": "Ji4sTfHpTnz1HfBHCAPYY7v8ArRnFE7584QFGL7UV3mADsqohhGV9xJgFQAQk9awGZ8fzRznKeBEKnpsEW5FwTf",
  "key29": "bUNKu9xHbdug3thZwwq85TWX6XBDcfzdBp7HcoyjsqDgSGjkGWV2DrD8gUNqpV292BeKtbWxWJBwmC1pMkLzzUL",
  "key30": "5jX46huVqX7USWEybvtsKvNr4qR8T3ecKFhtLoM4X97QcoXeLyJ44M3WM8MWoZXVDdvnoY5K7EJdZbJXL2M45bGs",
  "key31": "5WTAwGAmhXf16Tx465hAzJ5jHyhCtMgPfitX9oMN2zZGJzijkLqVz2zhVJ5FyvH71arX3Ery2Q7vkZY4GFjSsJaU",
  "key32": "676nXASKuMjYypdabYus86R142HRZXbjaaTnw6Y3VFKBsJbky4FbbBPhFFbd66nA6M3DZiFpeq6DKr88wLeFtugD",
  "key33": "384SCqWmkLkBStYcBmEH2PGAeEEmrD9uptohV8YgsYeDRFJ7YHSPAGn9DK57PwdJfU85qys852JPkxWiEWoYRoxm",
  "key34": "2QZV9EdMeve5DfAf73SE2Ns2ZECYCLRkHAxwiP1YgRbMfe4HX3JZvzWtBqerNyxr7h5RVjCNSKYLEE7A7TeiuDkw",
  "key35": "24iKe65RRyNg4wY7HRW3CAN8iXg1gFiTPETuVN1fo9mkbwxLfrysFNsHFqRzv7pbxLDiRZgHaGbgXMS6abeUeTHn",
  "key36": "5xhGSn2vxuj4dRa3iRkTR1seVjKhE6Mx4id7cQWA2RhnjZ6TVBaE1rXB3RL3hh9XPJTdX6FV3PpeJ6ARtYXzDpWt"
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
