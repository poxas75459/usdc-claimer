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
    "QqrnJwe4Ddx2CYM7JJt2boxjyNEgXHGXEQvUd3Qnc8WF6bRZzz2HMWEas4HeyBrVbdXEy8QmWq1BxNuHCpZdZ9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vPZG3tMw9oJ3ym11EEHEvhJjqPeFJzt5sfn1boyeh5v26KoTRuPUxj3mn7acERMETGXipGhivu61nyjEiBLtzxV",
  "key1": "5SCSVtaxWTk8XcjFYLUf2kzguzMUfMw41mSTKHEjEFMaLd1wg2CBMitb9QWuMMXh5Tr4BX2LME9ZNTd6E3xUWEox",
  "key2": "4CABHioK2HcXXyYweV7ap76uo6LN7JgaH5JineomUjYUrnYnExHxBwrTn9MNr7ZUwDmXjBGS5szkQn9by9KeTGf4",
  "key3": "3zwbdHyKLx4WtBjpPZjMenf8vUwGJwSRGsK9rwrHFr4VREA8ivxRc3jZGgSWeYft1s7gEQas8qARdMCWitoa6Te1",
  "key4": "2tPFCdXmoYFHwuknCTrAVsnDjgPWtu9EAFPHv436ELYPuYnobJtJCbLyF3FEJhUZMBriPtmsfGeKCb1tezTdJJZZ",
  "key5": "3S6bGd5MUQCCiNu6nbtvjpSFmqgv1BG2bJUXATAAspjfpFm1WpmNqXsVmhb33JxWX5SSZTJDLH5QUMaxrGWGmGRY",
  "key6": "5AYDasFGPedxTBRSKLC5VShtP3WJXZgjj5jXqaZLpprGoP3rg7JTzGRiERZtcKJvg5jS8mPnCij3PJ6LysUzPrLV",
  "key7": "5V1RP6kCfdpn9nmdFcV8yYnF3EMGGLQXwNhQYHV6x3KdH2wabtkKp92aSqG9cSFf39wy8NSjiDK9LmT2ZzjVwMr2",
  "key8": "59mAarTvQLvDRefg2cgrCVdq9bBx3KXExU4Eaqbh1cXpCnrBaT8uffuSREebFxgPnbKqeT9Qbsk7fjASDMniKXjV",
  "key9": "4C1hMBmxxAHiyj2wNnEySb5Gt2jyDKr5zFzmoQroxHCm6ZRtWbMVXLSTp2Qo9QoHD7YK7NjuSwwvGbDc3qskJ2Pc",
  "key10": "2qrwXx8ycthyxFhCEoAEkCrejVHjBvqNWfa5y2bErDnoMYZT6C5cmM56oYvGs4Tz4uS3qTPLLbhDRLBQYjuN29Za",
  "key11": "3hwQvw1AyHeek8vLLg1dMyHN43yDRQUeJqbRciGtoLXxdPX8onkcY41vyYTJnsrGtR5KXYBWkApPjqgxHrNrdN5n",
  "key12": "5Ydhds6sZ71iCPkNff8d4iL6F86jSzXGQT6ehRkoDEjpsthkHEDY3cmnCNHSHgKBHcv3TCAQidSdY9BsQ6V1VVb4",
  "key13": "4z132fpHakDk7EWqEim2m3Fuv4iDbT8LaZ24FuG92Aq1m3NBKkvHhgmmVm3v8kyCEWFDSizFgD3i83wpJ29NgL3w",
  "key14": "vDK6wLuT9hUEJsy1jAaYnvB3pxFeUfteWsQ6vzAiFWJFCAeJoetYksYmdmzAwfirxpPJHZRtKWkt4Ke4wwstDWm",
  "key15": "2hgpMXCixk2RuKxbD5g9n1s1GAoF3xaRdT6RS11meg69tFvigT6Frsbx88FXwKzuk9UM4oRxSUq6mJWajbX3sv9b",
  "key16": "48BwFyg1bxvvsS1Go37kwjQrHhLTLrffzpVmxs2ZHZeJHNPZdYwpPCvjaYVDe1Sr5Zyb36mQWnHWvimA8mR8gbRM",
  "key17": "3K9BFzpazDSaaQ4bFBeR7XWid2TyjEpPQ4zoWJs8tisrM1agcaTFDJ4EmFby59XKcfAWtfzDewN4PvaWhJ51yzDC",
  "key18": "3hMWyvH5aV3bFCdCG3fEAtS4jBMNphgn5JsBTc3gaYe1hnhajTekfdSu9zVUhvZPj7LWuk2gnMnHczFBUowE9TZo",
  "key19": "4dJmUxtkXnGFRwswwumZBbzXhwkWn6FBDfrbaeVKXKjEFpSJt2mj6pCZ8FB2FZcvU53iXCNHVmvFByD1AKwDNvM6",
  "key20": "2tXA8L4n4f6e5LFqRgwhikDMevaFL3NFmyfM9kbvTNK4ZAJeQAU44nPsfG5TUL5wBQ2eUmR27jrTjBXMLSMqFc6k",
  "key21": "3uyhFvCDpNCmwrBy18iE9TMrSPvU2TwvRerViPTZF8xwe8vb92RLDhtTZc65zznF5eaMNhVG975ZFgwCmyLYVAAe",
  "key22": "4D4rZLxTKmsvdTFd4mJX8Pc9WSkYHNfq9TcHy8jMNwyojVAzMfkxbXayZyBRMbRQRM8q1aZ6DkT5KJQJLGAhQFmV",
  "key23": "2VFiYtRGSb2YrQTUdJB8ML8sunhBRj2jWwzY4GHJsXAKoxZBGbnDkNFPdU3EZV8kEeS4YRzsQU5c7jyoyjxX9h87",
  "key24": "2vSKYRMc3CL8hQ1pKiioyeSxkp5xvVs3uuC4R17UMQ5WARFmiWXY2yeVph8jZkQgu6t2j25WohrfsKBJGUobTcBh",
  "key25": "3jEGZGZKqZi788hXnFoHHGgeGWuT5i8mYrvW9QugAdq4pR6jM8RPL3PxYtPtznzrhSDAU5xtvnSawj619VNW1cDE",
  "key26": "3tRWdUA2jMnCoooMJAQoMhcnurtkU6Yucfm9ZoDfZpgawkvf1QBhqMXbSYvhe4Ptp5KfyTiVRELBAV3JwC2b69SF",
  "key27": "5tmGqrB4aJKcJ9fYw8psy3PykwNNrLqjUzZVL2sBAZBEJA4pD7M6e7p1PuMuHT7N2pE6Q8kiNkSWpq7XK2pEoJRg",
  "key28": "3baHmHae4W5GxS6JAx48rVBrA6YzancKS1fnUyBczQ1nVtJth3aVRCebLm751ACWA3x3FMWFtheoo5HbBpiQLHZr",
  "key29": "44Pg87J1nuRuEDJDvCZdVCHQWqsbX7pXTytM65hbJ3HCQpfLBHDMbpL5qsKxjTmXdQ7y1HTLTr78T4RB9XmPzrRR",
  "key30": "FVQb3rfV84b1wEbgbTbUiqUkTYkUYqTVy8hEfbfNUGhDGg3SH9tcfp665zfXkXLRD9BFaFUqZ8nJEAkogXzeERW",
  "key31": "3x2s5mUMxcRDLHSWox2Jx7C1HgVLoJ2ChgUcoQgT8vXjBSXk2hpFEE6sWg2q6zdECfTpg5nqSSsQBLWMyB3znDT1",
  "key32": "4ihTrc8CVQAz93kyXeod1TymQuaVwNB1Dg8EN9w2D3P9mbRLk9fRtKrBkv6X83caVyfVrHFVQKNGjpX21vP54XLM",
  "key33": "5j1Qq1hYwj2BY6nDCnP58f4PwzCrZnpY64mAZMevsDZAp1hYJyKSdLHyY5PqXuxmQF3Wggdh8Ep2r8pT7JaTQW6X",
  "key34": "4h5oAyebjRYsgJN2WxfRWVqskYSmC5xRBDwbY149TRfpBMezPwWme1HjXcKpcBL4b31ug1wUQ3wXe48V7wEmiXbP",
  "key35": "45TdwfHysiyAbhnL1YxGKakLG36atsXfsudJ74uYuTM7Ehugh2Gj5iDiUuixKb9pochQqo9SFBEZBLa6cMWoMvPK",
  "key36": "KwQzRNyPA66A3QWrC9JpNX2JaebQsAAY9zNevswc45S14eXRfVGuarKRxStXgLZvvPeDcYBSXBuLzfzMJP9bz2A",
  "key37": "3y89Yf6k7fKLVikVKNutgB4pgsDFnpE8mcJHPqd8spCFuNHqzJUbm2iV6BaLjQqbziymfTwaY6cqJXAQTqE6eHfp",
  "key38": "65NvVf7JCdsbjUSzbPEfGW9qurREZaaKLmpyZkNwmjCSTYLS6TJFfuwn5cKvup8iCzkPo9m72NhA6CRmZkDgMv79",
  "key39": "5BAP92JfruTc4bdMt3iKLUZfLveYfate2yhMziaYWnGtKVoVXbXAEqyTvD2gWqsHddnJhDCUc7pEDgmvmD2MSVBq",
  "key40": "2zxtBtdbGDM7dE5e6Hp1iywwVxkm98VK3worGykJc86rxebigiNMk4k6Ag2e3xRnQq6ryEHkYmTLR6xHxgpxiLJp",
  "key41": "2nuTeF8jUZVAbSX3dk2qsEcrDw4diZVzh1HjDcHZZanj37jdBzy8ZJxzNcRHeNhXTZxZekeJW4WZkiyiKy1NZqQL",
  "key42": "36dfTknRAa9FeL6CYzPUK53kHDLEP1KJyaKoYA4q9Jxwf3omjX2PrxzHQKnH75BH5buZ51gxF9wg8wS3e6jPaYqS",
  "key43": "5yYRCziG9wDQkCnJLQLtQRVFx7v5V2GMUKHx7rQQk8uMQ1sFzALUHrNp6MjYoYKSoCRPJj7PEdQUtmHtean8cFUB",
  "key44": "1bZeQ6gdG4cUvBbRpFo25JprfknoAMqis35rwMGnRy9NGYLEXYYFcqHfhVfXRFEzP5RwEStaA9mtXbwAtEStmAU",
  "key45": "2u2oj2vq8BWNHR2kwqQYQy6iUQYFNePMqzXoQmnanFw7w2K4cyx6GCaVbNxBxYsZ3sTMqBTsCY8QwqcbF7vYn2Fo",
  "key46": "56KU9MD26sdeeV5fcHyL4diNDsshdda6GVtqBo7LQ9mRFBxopjuFwwkCVAqr3eTbKE3UJBqGmm47N1cFMcKrCT2x",
  "key47": "57HHkL97oDcTG4FJ8as3VMZJmgUWM5VUpd7wkaYttT2v9bjkHzSyTszCmmaFFFEBqDGsAUFcHDnh2XakiBoRqyCN",
  "key48": "2twaQivXuD7tcByvgQpCgLriStc2s6R3GkULQVVq3apdtGMnv6mHnZDgVe4znupoYMSRSVxibDabwBTq8EaHnaqL"
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
