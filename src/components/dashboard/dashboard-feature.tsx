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
    "3zBrWGRQf4s2ZjAkXZ65n4a7XNTjXqQRHar2cXuhMfBqUdeGY38ipMnD3MsRrXQTBuNWvpBGT8yzQKtRiThCi1Ur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vN4HfapWoVaDTgcEo8awEEQgnXWKhocdNvr1sMFJtkDt7amSVukP9pknWUWfrBwsMURmQHcjtX26Re8T3b91BeE",
  "key1": "4wMJeFJYvpX7fdesFumbsmfd2R76LueTwzMs9pZPutVAw2HaUwggiYYiyGuydWn8DUr3zpSJ5fEuAYaGELDodo6Q",
  "key2": "21cP6P6ofz3k13mDaTLqCMsF2bBf4CiDZMuPfAoyWGxeckQCfapncTqKLw9VVNm3iEPuwH977uRhcn8cZCX6ixb1",
  "key3": "3yDnYsw5F28Mrrpy6sqe2yvJD8bbCcDJ8DeERbEdqyxUTbC9v1Z51oTaiS2YwsQTKdP3tzGf1czkwGJcAcycHm92",
  "key4": "56idRmX5DLR39NeNUQ5HFkkWU1SDhsWWZdbH85E8pQ6H7o1p22HWWjVqNZKrqBCybzACWo3r6cBjzkLLZFawbPj6",
  "key5": "4dcoPCegFEVwPw21favRdRhtu5qqQZmGKewKK9diteNXqYNPGtMqsX81WRj3eeHSJDRmM2qGeFtQgxNFuihnaYRV",
  "key6": "ej15PHTbmAxLi1yg7mVJu1cLLP6yHEqekuvjNfhgybXz9BdpAUtcLvePBCHPqK72G2kKdzip4hs2UzsLbNxv5V7",
  "key7": "4cY5vPtwF6UnpXQb1yeJU4bWy8ssupAR893bGsq92yvSPzcdQ4vViKBfH1VdiU2ZPsjD1JKa55Zb2i4hzS6J2myo",
  "key8": "2DArP4qgdF1MzUfsQc6yJjRBWkATW4SXCgG2wXmg362zBSFFMbNLXGKT5GbC5nnUnKXvE5YEVXhhUceDJHDyKiCj",
  "key9": "2QP8CmQQbu238V72zQUGNew4smUxzjpr9PAJaSG1DCEBmE7A9CLcwmRfG7Qx5yH2ujnk6VuxvN6EHtHjt1bLBckZ",
  "key10": "49RHkKGkfDfQoMPZWM34iZCSNkkCyJB7L86aBY9puBG5qg9Yh7Yoiu1wgzs3a7gDdQ6rwNhyJyZtZgofsAvPKzS1",
  "key11": "4BSMnGWWxaCuTXcKTC1o54StV93W5nktYq8Nprx4MLx3oG8nfFGNYppcaAo4Bs86aCaJZMk9ytP1MKrDSVbEPrnc",
  "key12": "5pcu38frGHWHEFAtjXEivtoQD9GAEuEUr9LB987rA2dEFPNBtTqvbDqoqbQ19qLnZxqs7Uz5H1aDkD77kgBXTKne",
  "key13": "58pmLKUDYCRZciTX3dF342EfMWAEjne9mdiDndTUtrrNdGqbscAavruaNgeeeKEnMUcAdDMDvgdJSvdPnhpMkTmE",
  "key14": "5TZxJJBpusDp4Hx4dkubgKC9hWTmMf32s2j9bqM3XPvDiQWfjxpEznKtz78M431ZFrDHikNSLMz2KL7nFU5QtA8T",
  "key15": "4RQ7o5xkih2dyKgZcTpLku5oKm7XL9t3MN7cM169414jBP5Un3nbbAHNyxFEbEo89RJb88qvztQmqoqCX8csgast",
  "key16": "wKM6CDMvbi5WFGrJQy1BZafXYB8sWs8FagmXW1PE5u6DHUJ5hAiBuzSrHtr5e6FWxUyhPeWNq119MgZ2nLdzi3N",
  "key17": "5Yr4GVeEFyKhUJaiPH7GXTRtDGy4Rozbtakopg9mWJ5G2sY1Z5b1nAUCvhjeijwa64LCR8bZhSwvv4nPzcqxo8Ya",
  "key18": "V9wVzCrhU1ht4rM1kf2VDKB6UkibLCQXK9ycYaadvY46vzczFBzJ5FYRYkPi88w97rKKg1UX1QJzscCnNvJRrQ3",
  "key19": "393SFmi4ebRUx1FRFBYHdGrNL6kMYexguVp5WjDYo3b3xF6kQhF5RTQTfQ7qydPvkbiq4Lhy6CDQC5QjAzQDRc6x",
  "key20": "49bkVZFhDr23GxMmvvUtqx1FTf5BwVX7kmUSdLDqDv7CcB6J2nRcXCQqQk1fa8nzByYPBZsTaDne2AA2T7Jy5jwM",
  "key21": "3q6k61xzP59hB424afHqdyPp9zKZ7G6hwcCLbGDnkkKkbbdipZ6aVuXnJEncQeTmbzhfC4nDTvTNzKAYXH6kVCpd",
  "key22": "4jh6TE2281y2vw5anSEnrAyzthDzSjgGqxJSMf4jywwuTtt8ZB6NxCPAJwbntKhFdBmiYcMvwjijUt2dEMWatVeH",
  "key23": "22eyREu4jCpwD6rr7n1vQQaMAV2cSG9hoJB89gQLXEXvGJxHe5P36dQoA7nZAxAn3BitdHWEijEMK1pk9NvrpA8L",
  "key24": "3Fg3yWPqne5Y4in7AuhTfVL4q1b29zKWo5qbrgQaM4LjaMB97oc8nTVTSJXE9MUhWDSkAu6HNLX1waTWYS1Vc5xH",
  "key25": "5cFMzZYhurQDr3tMoRvyz5mTcMgwqYCMNyGV1Sz7vcKjEuJzHGZZLANrPV6xbzXmYkJJVdXB2XMTvpEjX5D2JH3g",
  "key26": "XQ3QkP8toSUrsziBAC8RKNLDN2MfbYcccBrusR3xAsDVPxyNsyAMsNZNkUNDh7R2Abw7pERmh5pgZBDceYfsjfC",
  "key27": "5vgRZfQHubG2kvVgzrG2kSEvseWhRGtTbmJMUst4N13SiQAbB4YTRi59DaUPfU3dfkcDtAMGL5q743pkiV6s3H9C",
  "key28": "qNjav5haUUz7XLhjVWxZPcmJKwK6oczq18hAvEVib2ZpDMCzDuyUgzthdcWos7T4wA5RypDGrNmqse8DKTqtVNd",
  "key29": "4kX22roabiSvUrNBK2mNCurovAveUxJpPdBqpgp8YWhSXw4UFhyAVRvQ4HdgaP8sVDVGf9ubvHaNDRQx6nSRHwKd",
  "key30": "2Uh4GnCERWs6E87MZVCcw2gdSE5uMBtvZMAj9NR2RY9FFhdxvpbGHsSScYNao72qbi2XsRVC5twDrE9HcqsaDiWf",
  "key31": "5prhXfqtLi88GbAYLYMn25CbsiAopJGAu8oAz4DW97vm61LSMafvPBucUDhJvtQz3ddiWydNfsrkWCfouLJYA85G",
  "key32": "sBp1jaNpfnuBD7tygEdeis2iAYsE3fXtBNwvXNHwJosX9Kbn7tk8NwS76o1gqUQVqMRngwJiF2p7ApuGgczERWq",
  "key33": "CyE4T2aKjZNGWaNFetbt6bVzo4KyQ56aCQDgq7Yh5CLFBJABCAy2DiFmTDvJX1MkWESTkLvMzEhDogc93X81nZM"
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
