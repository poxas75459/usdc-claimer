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
    "3kL7KBArRCDWZR6Frjot86XbG8eMZGq4ndGqPoAyFgfWdCU8uFhxmkFXtaFrFXFDftuRJYgunn2bdEzzngN1RXxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DQcf5GYTf9QsDhUVQcpUZFc1h1eXgSiHg4JiMHg73yaZaQt2Dqta26DQyQoSfSzNUCMwS3irDVGupo4N3BKiK3K",
  "key1": "5ER4rVv8dNgqrUNgb7KFMdWL6memPV7bEgZkuTUwucuDKkvhUh5ATYZS3V67a7NeKw2tfLC9aGoFTom7RdP8izMp",
  "key2": "67CGmTSutnvk5tML3bfuNYRjao62JqNxyV2LASFzpkLXBovRQnYRGogUnswv3zVBScAdLJ9Z9Fikx325SwWDSy2i",
  "key3": "5QhHAWXfSco1vFeGqJqp6UKF72R6Gk2GcmiHp676CFAwqMCJEF8tnrUUEjvzVwj3qg3eBuk4JW3YrHTPAWEcujR2",
  "key4": "3y699CHkpeAapGs8MCuF8dvp34DcXPjgR4oPZHuWrMK3VQ3A4GgCvcSiZgL9QDsUWmyzrAQubAzza14DaLAfuZed",
  "key5": "5YR7XVQDGeD8GsUb74DFAW2PNcA2K3KDieHEefaJ7eRivAeURTRfDwxQqnjmL5BcSr3Mnf3VAoQUMBiCwrcmGEjQ",
  "key6": "4KCw4cAuztiwWD8Mouy8rnaM7fBbLCjd249BVcBDtEoG1mKT7543sJ6Ca84KSPXCFennefU2Wtuk2QFBFPMfiLMX",
  "key7": "5W6tgS6NqYdFLCvV8iJPXTMUedkuEJoejAbUcaHtfy3k5iR4xXEQihabZPfwMReuH3Rbz6JAX9JEtYLBNdhFptGf",
  "key8": "2QDcimuDL8DmMxFbttQ9hS4BjRHsWMvSUzsbLzqKUT8nUisiB8t4AMndr2JdVkWPgU44JhKpvaDUdZW8WN9or5mD",
  "key9": "5qkZxcbqccMFTqRUzeFAbvySBBqDjjMwVfvYBb4LYLZyYLAZ11N76kYAeYnTjxH8sCqofsXr1Cd1QAm1MbSEVzFH",
  "key10": "4U9SVu5LdpUruQYRfGrnV6THRxEk9MxwA9mQqrhrViWYm2Jdg32MRwwNozeFmv2qB5WSKjueYkVf6Gd6TBV2HukH",
  "key11": "zZMWab4EsPcGqcpN8bZzivYiVShcbPMrnJ1gaM6v1Ci65ALzNPWXyiyXAAefwxkE4sW2XS9xGWGrqkfQbJ7k2Ae",
  "key12": "y2f5mBp9btqA6VJydJDUDxWWKV74trnmXSUfZK6BDoBD1A6iDS2kc1RV9MAADeNazqjKgXb1DULMd5fquB6pRMS",
  "key13": "312QLK6dYEa1hV49qQrCaakm9dYaeDhxdjSB2eKatM3wf31X87iWW2T74xN6D9wWG7wToQwQyAzFr8dXHAXshY7o",
  "key14": "4TwNT6hvvLbE4qD5TjcsjArj6hj36MHwjA9xGySsTi1ZsVXJipMTfULUtKSHqbWrsHRX2k1rj46xZ2HTtK4Dqv5Y",
  "key15": "4NWcCSPALZswYmggVYN88C8oN2AXtQYaxq78W7QNfKj7wmozzs7twi3u8fGHqvwcus5wtKhWj1NkzQuzQaidUDNC",
  "key16": "3bse7zKjofqHE59encpTWSJVPYLdhsZqifyvSe39nZfiwGmiA3k1p33bHF5eUr8SP9v84pBSnwvGagvqisiWSf4K",
  "key17": "3Qi5FGnidBj62BC7xAH98X5gGiTUpKAaXnsUgTQDgfn4GeYTZbCp2jZSiPisMiFcBozaBUJvy8ZNkSBRLdDVYo2B",
  "key18": "GCkD3GUFJfsS5vUzQ1gsB5w7JmA6CEH3gh3jennNwyD9ouwLiwVYttdPfsbMgDykSBN9Pur5CrdkLfNZPkdp9rM",
  "key19": "66E4iLZrqXhGQEivZGZ9R4FQgFsvLH3aeAkHs5vcNaVMcqJ5uVxtb7qmvQgwtddygCkYgHqxeZQDQun6jz4d1B96",
  "key20": "4DZzWSEnSccGeJwQV4skM1RzFHob4KzcaHb2abqQmEWhcQ7ciL4KWKkZpQH3jTGan3f3hX3peVULBg5rJKJgFdCZ",
  "key21": "25MRAfc11qgtVywcCqvq8mSWwDmhnnQQkJezMXVd6V2jAgThR9gNjD2X1jNkqyUD4ucGCFVEoX5fUVNqGi7HKFda",
  "key22": "2FknSQz1QpXGe48pxTd7T8GPKC6x815Dsz2anyU4VADPeHZbt2RJNLFvm7C9ceFTgytA8yLJn9pquKyaV4r3N7EJ",
  "key23": "2RS3Tw24vNBGgJ7pjtTEbGjF38obzrTjc7Kp4Ldtkk9HFKfqh8h2d1KPDyxmKFKe5f9GX9vXRPNHcx1Fjt3uAanF",
  "key24": "2yKpe5CVbBr6FxChqKQyNCbxyMdYvjuWzxNReUGu7Nz7XidFeifmVWwvXfL7L4Sqvz9P5cE6iAhFasmE26JrfMgq",
  "key25": "4ZCEaYUMv6eYYZGD163RPTijuso8B5Yi42F5xZx2paFrKkXzF2ggEGCpSfCMFMof9FjuSWgvwgvwENA8gmqwMHGn",
  "key26": "5rFkJ1zG3TWsRxYoEpRJiVZvGZ81eMDUGBHa6vv4JLr32QKCW5RebNnYFgZeJcQ1xUKS6cRhvcGi7BwTLQUfza8J",
  "key27": "4Lqxcvmj2av79LU795EzmzBVQZ6Z1ZAQbqZumH3FWPDKhUYmaxZS8kxdeGY1W8yiwJz3iruFas8GpYYpxthsgPWw",
  "key28": "5kGPooU39VZmZfCYzHHhhmDw4VfnhtvbUuCS3hrppPs8GUEF4zpkFd9FhxqDitHtXoub5Kqn1o5RCjHnbQ4ygro2",
  "key29": "3VML1wMmx9SFY3DM86ioEiLwc3yy6SXL2pSZzC8Jw9EnFRYFvYvWyC4xedX1LwaogwjGND2Hoz2oMKjiujgavxV5",
  "key30": "2p3MJgC17dg4WY6LqXe5PTiJV3YomvA48PYmiMHpPreryhWZ8wft1YzrCAJMxfVTH2eLXGDgGYhPE7VZvrTY3zSm",
  "key31": "47CeHf48ebWq8S3u3Es3UfVe6qTzhSmZspQcTZDH3HoCqD4wQNZCYUGEqqKFh9fQLSWCKTkWLf9iTZbByjvkdy4F",
  "key32": "66ZcZFwyhgiRSt4JR8VnLMFcSnDimMHaPsrzZLt7ijwqFtADm24rHbgzmq8SS9RZLAD12rDGD6XmXidSujTfHL39",
  "key33": "4opDnd8aKHDwEm2v2AcHiiBJh59cH4AViJnAeWMRgU86dy2e7pMqYRPQKQtYGBJbVct7EcCdaJCBc95kc1htTqG6",
  "key34": "3KAx18cqJWeGej4HkgTSe9ck7GUHDuFWHwjZkHeWWBjLfVyeSZgCGJ5y6611r58XKYKzGcZqADm8kP7aeJpNEN6x",
  "key35": "36mJFG11dAsPJFfd6SPUpTbsQJJJyAeShYihuCL6gxUKkK65oCyeE6zAtAagds6SZLx86HPAbFnHJaaXMHLk8Uao",
  "key36": "3FBso9NoZ3DFctvrENttoTiEpBRzytaxuBykUmJfPMXmstW7UzyDMeBMm7rG3EHGhJ1dw7yZWNf9difvC3b6YC6b",
  "key37": "5NtjNuiqNfU2PvAUX22Fw9z7ze5JzZkkr2hhFmJZzhhKuWMbbNNCNKjieM61AAXXRtJwcSw1FcKJW5CKPduodoAG",
  "key38": "5BKALm8pt7pRXp6J3p8JJ8VQD8f8eGcCypUimpmouztbg6G61ppq4dfzaf4ktWEWbBosnjJDShhhQB5ks5ckLzVV",
  "key39": "3FAcV9rRRUBP2ckWPrwu2td8t9vpxWXoM5mcNughcxtdDg3bTd6MMh8GKwCTxwjbCsbGEw1Bvc3z6VqzDtpVS8iM",
  "key40": "TBFMCGEq1H4qKZG8KCSG7qT54u1BYJVFPfv7z8Tq3LK7vGExNTWMWNFz8JAfzJwrjHYEM1AP4FChvDn2Z1cDDoP",
  "key41": "67dMH6BkfcgtwKPWA84Sw6xWChrHBCySsvj816Nce5qW6WBshycZmpG6DSetnPZqVDWzqWaLrsRxYgZFFZzFuMXN",
  "key42": "zRg11iYExEL4dW96LeNF1AJbmU6Qv5UEW6j1vZpzzjo1qHqhJLSbHg7ugfM18yga2rXLSFycxAwyM8m9L2Nk8D2",
  "key43": "3eZYA1NVvCgybZ8ip8XqAR2BwDMteCssd7ho8EPqac28iMpemLrqzh9sLqXQxzrQcoxdLBKwPdzpy7iKkRwRYd8B",
  "key44": "5mf7UyiYaAq6PqwCeMRLNWutqYVi78JGc9q1mK9XnSRqedSVXZ32P4GYJC7bm7YUoRDueWyrPCgsvLwSnJo25V1J"
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
