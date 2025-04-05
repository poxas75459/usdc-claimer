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
    "k7fKLoiihYZk1dZYkKJP2Y9zrVu38nbEfVCdMNjw5YbhhSUoJFsoHCHwos35orrTtGLZL5SD8oFSakLXDepsZd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uQjuWFgwDvbcTGn8ZAgjLavU4iy5mb62vaiFY94upmJAk41Gu8Ka7iZX4Ax1Z1cbuMZAx3szdUdbynW8LUco6qo",
  "key1": "59NfEp8gEJuFzYTQ62s5NnTzN7W4Q7cJniAUUE9cvTJ6pE865jX2YfeqnMiDLxNeymSJu4wpfHY1RdEVa8Uti8jo",
  "key2": "45LXitNQ9zthXSNyupykVcqvBwyLCWfLzTkM1JUbx1NY77Wtmqw8eQGY2z2fBDinzF6b4ETCdXuaH517hYTf1HCP",
  "key3": "5M2J1WV31xyrcw3SMBXNzUgCYsUQk7fAXuGYRuC2xSCPEi2DnTS4CN1mnYBBmT3VoCjK6wsh3RP5Y6H3Eww7B6mg",
  "key4": "MqhJpimPhMoa4KRPghy3TEYnby55SC9VyLVSJWVa9MSbxS1BYFJMaD27bqDaUeuFiPYiWyFrMQPJxRvrEny3Liz",
  "key5": "tPzCm2TVEmigfohzy7sqFbRyDhdUT9vmcwWFx2DJZMN4EZjGkK3XPuwM843GohZowm2mcxZRqhPmEXKpLVVBY6r",
  "key6": "2qg8Y7HMFQ3PuVymbYHg36j9oR5ke2SBGV7yVXWENJA8B1oS2h4yEs4vosejknoDcq56PrewZsopjrdcu1KH5qyN",
  "key7": "3kWcwKxbvbG96tBoEUpbHJFvFV7ADU5vj6bEaGJjvaJ5HNkgsLBXeWARS1XZPAYuuu6ook22PFZYZjRhYxvrJzwE",
  "key8": "2ppus9rKbqKnEDdtBNAEz2go7T76NqjLX8M8CbNFyqv1BJSRbzaPzwYArcB2eMtKyiQCaryWJ9dQjMFuzAn56dei",
  "key9": "5RkXRvzHnkofqyVx6AnXP8fSExn5m3P9wGZ3SoRCitAAcMphhaNorb4Nzw7RmPNwTPCMHmw7WFKckYS5uSwrZB8F",
  "key10": "m2XXe2bbF3zweV7Dz1WuXdCW3sgpv37VKGTA4zdF8Fivjrff8iVerHqPGoSeCSKaTT7m1jX14aJHkFNn2ezuJbW",
  "key11": "32pDsjkQrqDMaBHuqFhaqHf3WT86mThA2VVUyR7Jj4RTSaCNDHPz9qdD1Gq2kaHUR9qEcJyhKAYpWFNkpWMyyhCb",
  "key12": "PzErLARyCzAYiggDYqEZwGVvVPcmKXNX4rWcqzfsfTFRNEYc4j1fQSPqMGcbZc2zgsroFgjyESrcwYrmLUp91yA",
  "key13": "5TQ7Ug7Xuo9SkGXm4g4xAVTEbphgaCqVK4hgHiLWvM9TCDJ76eB885F3eikVW3dujMs5Vx3reVtJXHxqZVUdJ3Bi",
  "key14": "5eJEtNAwu5RdxZRG9vtCBsaADMCrkyTbiZ4Hno8D2hQde6nxtAfLDUiHJ6za8FDCN8gL25Tw5daY4CkeqbxNsKKG",
  "key15": "4NtLHjCYm8PtSfccBMrceBsjcMJLhx5QxSAABmf7ri6aVWWumWXLK4MC8YvauCTfASkUXkvB6xV5T7j88Lu4D9w2",
  "key16": "2QaXC79W7hRUKhTdpA7hABpCboro8pvX5sFtdFsRrPFwJitabTxpjfi5n6thadhHo2bKd1JdAwZtfToiYXapnLsd",
  "key17": "2FRugu3zCUCcnQebBYixuhfyTnxuQmhgWi1A74SZeiDPLEpJAqGbFgrGTZrHrFPYdVSHbGBVw3Y22JmXp99CpNu1",
  "key18": "2m1ABjpDA4vQykBSJxMCxM3KjLAXFM6Xy44VLsSTycVvRSfK4B8QgU9yAhAVNVawNrVTWn3eEoEi4qKvFkYMg7pK",
  "key19": "2SbFec3pECoXTnYfjNHNmhZNFPRPjaUHZpicrP17kszbJgZPVXCjsWsq2k4py9UmsezZw7EqKRc4GL8K4rd9pv9u",
  "key20": "vCzrtk2eWXyhpNg8ecN3ALLmrLRL2Eq23f2fSD7rxKu2e38zPpUDtNNhVA2aaYh6ofCYpauMCfHr1uFGzDmchf4",
  "key21": "5tUDaAstSCdw7ewDs6qhETngXBmS3p6mDgvrVqHvAqpNwHBxai53jCCFEGjjnmqKukrEFPRecaNdcaTwro1w3qKC",
  "key22": "5k2PUjUQFPwTVwEyXBHT42VxBw1fBgFkUgR6fL6qh8YJt3zm6NvqdznD9JreyNZvFEVJ8iNVaNyjsnKPihrAv89k",
  "key23": "ot2WPmJ9RDLDxyM6MWL5DLzgqENa6PaV19pyzh5c41398TkrU1NZ5zR8PCEPQRE6zBLQehm2yW1odd2ScaeBqcQ",
  "key24": "3qxyYUJZ9ypKhsaxPod8Tfd79SPwraxLeF1D7WGJULyZxLmDD4eNHRC3ehn92hJSzxPNBRPX693sV5Xa48ztMzNB",
  "key25": "JC7ZU4JxyD46EHtaSnEJF5GNFhcUxNJP21xLetMZeVXbQVLCMFLPqozyC3DMjRE8hDMjYRULoce33xXXEqn9DAz",
  "key26": "4JBFr8eSGhFD4SUNaEzLYKr3aSk4kq5czoc1mGKxhP17xbhC3pJvx8vq1J2jzS2LbQXq6R6ArVFz8a9vQpN3ufsm",
  "key27": "2qU8i65z1fkYKVovx8Ssi9eDETXMWb2hpHeac5H6gkRYhihRPhEEAR6mbPcezPUVJgeYv7FrSFcKZK4vJfz6TFUG",
  "key28": "MaP9892arziGHuR2usgehahL1tu9TEt8QoDUKv9ksWJq2JTqciyUzV94L2of9czVWZYpk1smZCMC4Sr6VFc8Lye",
  "key29": "5gWVa1cVxrBJfEahQErzjzDajNQYRz19WMbUoSd9C6VDgxdaJuHDFz6jYBmt1SEVoaTrdB5Yt6to6wXRJUuUjCM6",
  "key30": "39kLiTpPNDuxBiSrsHhTTQQTFrxvYyUhrxUXdGUogw2Brr9KMmFWFszgvREcEpa1umRPbqoArwyp7M7HbMkf6nXE",
  "key31": "koFJaeoo2MXpXUvFHbSX7KHBMjXh1xPhiBM7iWKoEPU5icPzKRWeML4E5E1YeZ9M5K41946hyjavTzWWvYnvNby",
  "key32": "3niScKvG7unYuLqiBU7KyKvzz67kyJX5NuVnaFGrVCMEq5DiJYWK3K9eUjZzSTQERxcypLN6KhtdwQ7gMYTE3MWU",
  "key33": "4fS7UCZP4bZYe9vhtUPpQVMaNPzfBXr42PWsZEKoqyzQVMRfmr6XM3PSFE36pZf26hCWjGQjCiFVxhJrc62MkXnv",
  "key34": "2Y9cbBoUYGEWiJM2nW382d4uDpTJ1QKEt6mprd5D55Z7ihL32B8ze7PpmvCGJod2CAbsDznqrmeLP9ctBHzQxF4R",
  "key35": "3kJ3Ri9Twck1j2FMirJE2MiMEc1MjSPLBzp8v7HwsUH2Eqa6NhrCzVyJpAjPZabc6Cpeaz52dnbeWxffzgoNEZFS",
  "key36": "2Y5VW69mzLtqUF7ri6WAiZD3wb6jQuJVUrtTJ7Vvdops4BmrisNZwJYLb2VRDPgiXjuNYrRPPZqtCcibZ5NMEKnH",
  "key37": "64m4Fxm4jrH9N8ZMe38Vjhf9oDoiTGyRyhwghtA9mg4reK2iBacLjedCFt59oR6pHDsDqwMiLBm3J1goC8HhmJ4L",
  "key38": "4qdu7uphS1cPi9xpimWWdWnbstPqVfMXqs8n5CwEptimgmXdPcioJ6jpvdne2po6N2tbR2Wzzne4gMDZ4fE6Nzp8",
  "key39": "2YecbJSR8FffTBNYHggzTWQRX1BEG5fmjyBY5QZ3cuMVw4QLvWrFdFzsKu7r5hsG5WGesJs5ceyYH2gZbeFyLHT2",
  "key40": "3GftAUurxtZUfWGN6Dq9USpDV8RRQkiczaD7PDXYakN5K9pPAo6TDzTUnH8CZNwPgTwfrdFQaQ1Zz7duiNMCk7Nm"
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
