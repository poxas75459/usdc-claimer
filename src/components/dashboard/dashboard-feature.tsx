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
    "3sBqWBkRii4hsZK5a4YVo9gP3PSHsMcfdvcr9titrTZpoWRC323M9hhgNMSuNw3g6iYuTUThUck6Tr3x69ibzUSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vLKmDwJVJc2sBcHV61g9K6w2n5BNsxDgyCbH4rVvP55uJjgh15X1HFA48aVsFUVJ5LppuZNR5vXRvTzcm57ef2b",
  "key1": "4ghCYfaPCZugdjrtnr3ynVi3wLCZBkvSpqzgzBxKQUCyvvCCW4NQki2iAPiAp7LF1NMAaKSWKKmEaYJzRchStDui",
  "key2": "2YudsCUtRnRBQvark8bjAjtjYSuQ62FhKsmsqZ6rBBMisjMW8Mcz1jcB1XHnu8vUkLnBJ1kJC8cxCbuUspoAs2Zu",
  "key3": "5sG35uY6ph6kyjVBCZiGjzMXDxPNaxjxek1yX1dmeirnJqapHQLRcsJ96oB4MCL2NbXjmrcmrTgE6c3AZxXP2MtW",
  "key4": "5sYpRCG5oogBExkquRdKwUSUTrBtvYcTzHUrA8HiUvJzcbUujPRSHErxpQixBsBqXsbai9rS46c29J8gvWHAHNJw",
  "key5": "2KNNpHaDktv6hJ6Qt1bc86qJRtcAHtTShEMyANTFBsGDN6gtBUWpfgcmySw3XN4ZHakeQprQJWFbXjpL3b3FrgxA",
  "key6": "53Ds83YhhrP8sWB5nZMxeJg9SqyPmzQACkLAMg5qeb5AfrYHiBTyVi5LGbcMm2v4pfMFKodZKETy23mJ47EopGpr",
  "key7": "picuRp2GWL2Pk1NwGfPPK9tNM3U6aP4vV42zdqTmnJyzonmFe1fjQjMzZC5HFBUctjA9ArSknahRYNn5FKryzWt",
  "key8": "4fgVWMpnDKxbhaKYE7ShxkSe354TtUoQX3oJ1aUhBw3E1dnTrNARsKpB1JJxvfetrRtRsZmXFSekRuD5GtDS7siT",
  "key9": "4raAE8ekp3Szu3pB8TYT3zbEvSMj1dCRibWSanfWesLka2ycn52A5UvD1TrUwKSqqCJtXtg2M33zLH5gugScEYUa",
  "key10": "5sxaGHXr3LNodKSM8cUrbzxPzMQgMBku7QEhVcjYFEbfDLmjrhthpouDZnrpJnYt5xmKAwYFKmp2fhsWmjBx6tec",
  "key11": "6DFRktfZAd2yVqf7s3BWjeZKEC7gnDcqsmEogH6APkNNMM5EafFxTz1AkiLng11j4sJKPbriFeY7fvyQ78kgGxx",
  "key12": "2uz2exB2fbeUspy7NVPs6TiwynEcovH2KgrfB5t2S3YH5BWkeiP6WS3aHZyEVwnmhMWgSRNdDwtpoiKbQxJoanu8",
  "key13": "3u4uEPLceAVoaFSLjb2PB49J3re2qmpStoQuJK8zNcWJyxJHZci8AfnRQGNbqiWxf5Qt4P3VVfgvvfrmfYyZMtGh",
  "key14": "2gnRnrYqpDRT6XhFBYvrtQpRGwm5kB93TJFEpn35UEkzN7iPbdYfwqsjCTKgYQfTDw2gsWrZsU5LEKvL9iWWu92X",
  "key15": "3FAwhfRsQ1Ma5o6EgVGGJ1VyPbi7H75LwADg1Z7HuDsTwgoir5qmpiSJanuuYHjdas2ADjFk7FcDgMC2pdSQd1zo",
  "key16": "oScvUigo1HeDAHzeHfjJGyR4c6Cg8KG7hfvLCR1N4BzZPzPhgxE4bnii4jdVBPkXuh4HJhzDdYkNm2yQ2Yb4Y29",
  "key17": "3qTLvGRVpVcov3mqyL6R12hGVReekykWSzAKEEmLxwvjA4BfdmPzGvVSPYUHJTstnxtWv2Q1Erzuo76gzWLnfPRN",
  "key18": "oF1ckyc6h9Epz5cXxT9PLMZMxYGgvbpbzxGRgD4y8DaSzi5wiRGmDUfpZgePMYe6FMty1ZzRETitr5HFqmdQ5cm",
  "key19": "56pDh58jAvPgCJ5RUHyTCSwH7bdgkSK5PfS3se7HgQ4ychKV7BXZtBotn8NgNMhF8TCowG7HCZMqjjuHPLURXpiJ",
  "key20": "4ss1QpyjJtCDBvCzY4B3mrLMCpjPxaLkH6t5EPVCkBHSgYEKBWBNn84tzpf6U2e7zZBp9ZeKT8HgcH77PWSTd17T",
  "key21": "4S4uJYbmqbYccF2Le19TA4EaxNGga83LguBHTgaEmH9x7JWVsmaF7LPJHT6B86FuGyPCMLu3Kjeupjo3wVH6cA42",
  "key22": "3QYmmPavWgJPQxq9k7cv7LLDTG2f2rqiji8PbnwPrFALJJv7uCEme51gSqFpErZhUjoLEcD2d3HN7qmhr2CxgS1k",
  "key23": "93w7G98bVXkN2TgpUDTMyXAg66TEEabdic7CftQxn8F4uPapAjPVhH35BafN4RrcyrkY71uvihexkhgUcNpG7Ho",
  "key24": "67iiWWy6Lxxwttd4RmSW8kujSpsc6sc9SuZxLdnHWu3q6RNo3YQRSL7vM58XomX8iYxt8g3Z99Y81RNtTUtEhsfF",
  "key25": "51XYY6cXgaJwF8tqBGWkDMS6cfeNuk2fPHEAsVryXzVbQLKPxRtYvAQZEt9qEyAkAXKahx3VNPTYqwHHymoiotnz",
  "key26": "5KrjgcCjExSUhn2tRXGD4YvCSCB97SZGukZXh8g3vAstGR5GQdHHLJ6JKgdGeCSQqbpvBjDWyq962oRVL5CviYTe",
  "key27": "3QHivVbEiWAaAUzQHGVpMwTwrGJjH7hkThu2BaZ2DwcGWJQj8cYeehuaMXxGjQBx5WZHrDi85KUVBnvBwEMKtKRp",
  "key28": "589gpVTf3zpLvTTZcmhkK2wDJt2nZbBHyS6C3JA1GbmNqj4PSo8seS7zBwpDkhiVbw8aPN4WXFDcxuAhFNzoGqMz",
  "key29": "3J37fWZw8p1Y3ThctEvbir8edsTcKZ5AvKQKaiJ32zufu7PKscUGXgwDhtLahuvaMGv5qDrr8JG22qVo5zC9yH3c",
  "key30": "1go25AE5bNoTAcmBpLQG5JRQYtEDTkGS6Hx5BEQMyzmY4MiRdnBQjZLc5KBVijWhmTmnJACi63TR2yr9BQCLvLz",
  "key31": "3bYsZCEedwuApkReCqYDgzKjrz5LCwgaRvEMZdheZSSf1b4ZjnLVqVoXnWg4WPZbiedo3dVoQJvyBduv5aRuAehY",
  "key32": "42kLNcKvS4zpdJSJJBXU1SYd8doAyQARa5VzZyAxWZrUHvqV15pctX6Y471PfA3Zw9aUUtcn5cF2KdX3TkBbt3cf",
  "key33": "h7JuPc5BRme9wTz6nUqnoP2p14HoBNXWYS4dBL6cGbWdDbpJzeZuND9Dx2kK3axdwJC6kqyDtnNyVjJ1JL1bLj7",
  "key34": "3rnn9zj7FGZHe7sGjmfEE6Jzu2pUdnDZxywj1M8QLuB8JC7RRMyUShKzPAAu9ao2EsYA3jbuLRU3QChquKXFBcnF",
  "key35": "61x75eABhvHH3EGVFs7oaihxtiDxtgnQQqbQThgckP4M2E1qbmrQ94UV6fcakxKkDsRJTA2sA1TG47xQCo8FUc1h",
  "key36": "5XPtSaT528pFwmTR6Hkw4uWjH9KAHKV1WSVitSCUnRY5WztsN8zZ5pvxTLq36qnKDxt4QFC4dePdha2E5pMgFbX3",
  "key37": "4uCnEKhMfgpuHBewA5pDxnDCdZkWCubhLyvTY5iSm3tGLRFVaaqxciMkkG12MqypUvSQQxwbsuFtqjv5a1PSu5Zv",
  "key38": "zMmEk5drt2ruiPvaQ7AyRUk4YA7N68mzmEpg67V4Nj794x6GoNPDxWNmhWe3XzcsHNB496SzHUQrvs9KgdtTG8X"
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
