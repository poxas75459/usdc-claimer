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
    "4mtHbReCNLL826eTPxeiMu643QvdTzxoG4Btis6QevfHBLBGvdLyRuib9KM5nFXR8QFbBbujJSRCNGPUv1ixvZj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2thKZDWwYvSmBMFRpd6ufFRL4MjiSD6LDkwHvWegawPt5WJmLb5jMr98SoDYEmd8JAtng1Xr2X1vz5cRKZPJCLGL",
  "key1": "4MjPp96RugLs5NWM3DFsXZ5j6tQHZyqVFu8LJT6gNP6ExXMZAWe5BfTjnJvm5JuHoXL9AoQBbm9dHcyufF57WThE",
  "key2": "5nNwgddwLFWNfyuaJLXk18vSWS9jCTEh6XpjRtXUA6cxduMFuGFD9iRFxww7CTXLpT4xUpYLJ41g422tmVuFMeu1",
  "key3": "RzJxxg1FNAv6ETRUpS3yFdU7wUSTvi55kDZVUPwM4KSVooKdRaBUdEVcmEcwPmVt6QTuYMnznb77DB2Uez3z2vA",
  "key4": "eKMiHGi912PKEPYuDsRXtL5UXWi58NMzjCkmTAFJQW3Y9PXL8vHrcNDyBu4UmAhc3BVqdVUhmS37gsgLU3Kkaji",
  "key5": "5s8WkZUVhR2UxgmdYX68G9fi9x1vuPTkLQSuGQeMFKyRBAGc3YHpp5XMhwgyjGEj3HFGKUgU4WiciuU6ieMzV5Em",
  "key6": "26qcNQGJpdBtczcMqRP5gLTR9SDYHW2QBqw5eeGwywiNZSdTBYqDraBBYxmNyKeRM1tzqyRgmTh9vKANv5353YWZ",
  "key7": "2fkD4YCJZbZo3gncu6j1TArveSkBvhijhukYPonDRWMHmt2Zme5QxhkbVA17ZxGABmQH3AtJZRv1qtpuuwSoq21z",
  "key8": "5rdvdFqphEGvaCqLoE7YSQvqFjAsCTaDfAKd5qXPdq4EkxaGmGJ3JuxrA1aXMgechJ5LheAUBs7FMpjB4W18GC2p",
  "key9": "pnftsLhFWphSemivpgFkLHqaRTHgae5wBMEZU57QGFd8c9fFP9GL4JWQdN3afSuRcgu3yZoTxcEtFjPfBCTc9gq",
  "key10": "6h4FpoF1xzq2NCg8AXrZBDjpMRVghVrBA5eGxiXR7EbrGgRVt3yJWkxQ1GB9XUxxdBtFqDvoMrVgWiXxfjt8urV",
  "key11": "c8994jJ7tti2uPrvc1QHFTSbZdEXwfuwjmqBj2HgHofDZoW2mwcPp6qsLhgRBfm2FQ1jCsPsS1sHRdEz9Qi27vx",
  "key12": "52aGQWsrrrcbV2w6G6LG9yhLVikD4aM86kqA2jS6eHrUSEbkJk6dtgXhiMDrfWjMtbC5JBEU2aUkqhnBmZobc7H2",
  "key13": "4Qo7HwAPHZ8f4XnW9ebH6gkQfiPchuXfX55UEjio3vqCVxryhTicTVwMWWaNCeVjF9CArrmerJACxTkZN5rixTMW",
  "key14": "5DPbRE3j3XGAE7gGSWEC4ntaiaj976zqdXMhtfNSnwcWRiVhLxQMBGT6XTMT799zebB6ZMX8eV61HEMdafsw1xTX",
  "key15": "5cVxWmJZiRLHQGkhbh9swURZFuYgKbsjAhZ4otMgfpNoiTRrXdgYjHz2eKN82h3dyicEeA8axYTCZSajNB4bwoxK",
  "key16": "2fpV46hztf3YvBvQde5iMxuNEJmkKtYaNwqcCuLPwvSr12ZREqv6eGtrp3vhQsLnDUPJJ3GBRpAgWtL5g5i2STQ6",
  "key17": "48NHJgoUofXqXs9tuiQwYLY3WR5Ybb9VFWYzC25DP7WvorKZYTBQq4GUZAVX4BJmttV9DsocJjCLkgXxzSYrFQYD",
  "key18": "43U58cDtLVMFQgRNMyQcRzksCSq6Uhf72agZ29CtPHnXiau9MPDyKLdERev5VQP3nbqHdya4uNCNJoStEjoDLYJG",
  "key19": "4YHPxV3wN6HuH7WktUUvN9sP5Yq5Cwv3FripKwLkoCr3iBHfAUD8MxTffqjUuVpuStbXqty9V6snTbGSkktuxVxJ",
  "key20": "2QbZyGTDshypaBdkip8yfeD3zRuQHE4G1cgeugDjG3bzq7PmbgWdgjTesv4oMXejaTmRckdbjviSerDbpmHNREDQ",
  "key21": "USoJyd4CisEnHq3EbgWKxAns7gGqxFjNFZgJr3cxcNqhX3s54Gak9rp8MHrvBp5xDN8hwf7jZBhBT4EhrzjnZVj",
  "key22": "4zwuWF4FZZiwP1v1uTMQZPW4ehd3cEpLitigpeTCHjV6uASf7rdPZNDP9WMNNTFRpmDzreNLsnycGoE92MK7S4Nu",
  "key23": "5D7oLwmeyDtEFBEAVe3gehymsL957NmfBja5NDcQxP2MpqcA3PNtTjjDEymFBfXHGiQmkz6BeFfbRvKNeiYmSgVq",
  "key24": "2qqLvnByR7dMj2dn5jBusJwYzyqJNe19YCZyG7iZYgTEfwY9NbqqQHJMijoDRefCjHMNE8q1nd8LicUAriDM3TQn",
  "key25": "2ygYBqEE5WnXppdzUwLWWQScK1sNnSZrue2rfc5fFX8k5SK1coNE64ymH1252kXdYQDSPMFXBrkfY6imXEjMmWQF",
  "key26": "2WVVo48VsGoxHcLM61VoRce7EEiqTrT1YZiL4Q6FsxS3MBefojjD3enniu6XzFwDbYNstwdYYYQ3vdRdufcAVM5Q",
  "key27": "2hH6NJgAQYR5wktLVA7iHzaeHEtBjUPU1EKWPNyr4cFgNC9XRVPp5wWeBRmRAAYtnGzchwKFBaGS3setH6gfe6zw",
  "key28": "5v6X9RhTsPL9QMe6YDcE5K1Tn5xnvmQeY9gozx5K5rDiBeC3din12H4zxr3d3994FoPDna79GhG18XmJYxz6gL6V",
  "key29": "fyK2m8F8KJvH7TAnw7yy3g1q2bnFrM34uko51Au3rPhxVF6fVdRJPPtp9C5NPCQhiNMBMxwavJeVRK57LEhHYih",
  "key30": "22oPsCqPV2CeChHN7CKxAoWvra4ddDH7Nicr16TNi8WhcBsrVpDD5YiJhTc1DnBhT35vewsNK3TMz6diatb3PoEU",
  "key31": "7kpTHGNZnETpSVdK8GJrNepXCSDGiReccK9TLFbmFUbpKTrRLpscBUeH3FzoxZwd25H9MBMfADpJDWJJ6LXn5og",
  "key32": "43TwfJrt8udLfKoXhkork9sBKf7DxPVYUvWesYVudMjKSXbZPM6T2tkHL66Zj64QHM9hch1Y9di5Aa7tzTryPhRy",
  "key33": "vPiWYLzGpU4cw9Wac4ZvPu79tXQBUFsoY8HgViQ9XBzVasgGMesgU5cg6vP6F2KAzvmNhUcQQaKDH8H2tkAzJ6f",
  "key34": "5ZFLnh7wXbY5dBySdYsVwmQjqA99byJitrCL4sM5AcB1rtgSEf7oCbyB7vJZVfzM17jfmnwb1JttzNbDyLP5Q9T1",
  "key35": "5Dou5PtZnE3tKiY2kJTa9ht44WSJ8CGXPsxjiKzs6ekKsiypXEnyLceThKoFevhLUWmAtpcWhgZH3vmMZBm6vqju",
  "key36": "368451BNr7hooGSCL32dDxfG7VigtnQhBTJhjRLHftz6aby6oCMgMq5E9RTWoxvHY6QTZ5oAs4vauJitzSdbnKZD",
  "key37": "4sBfTuuqm1jHTBDf3jMekJUEguJLU6xrXTWidKRZMiWiVM67PZVSEHJvPajsV4ba3wJjiyMc2LVpEDy8bvtdHt7m",
  "key38": "AqYH9H8SwQbKcWXfZkZAgiVYcnELZmzCr2fTDiZPibDWYkwY6hbzBEC3mtuP8aK73Nu8xMBR8zHifyTc3JYarvW",
  "key39": "2iLA6BJXFoq27Kd9pZU9sqBUEkHsg7o4YhiWPCYd2uWAa5LP779ysvq7TiryJqs44PEinUwrRe6NkRpw4b9ooCxD",
  "key40": "2JZfkgQygfGAi4BRDP8hjXKV9NyEqyQrUM7RnTNEvYMWk19916QJnpds8qMLfTCcQ7D4rDXVDY1BdTmiKZk9ahYM",
  "key41": "3j6XQffPJPYNqiiSF6Mh3fCdCjQKUmZXQCCXMWKztt3kcXPuCMQ6YrnmnnxipqvA4dpuNtbpunv2J9CvahdX6w1h",
  "key42": "4CwVPYSYYCEn3ddQP7bJCNVsqQGFzDY2QrpnBreLKsozDcHVkjLf3EYHQhFkPRyAFSAxs3dB9p23ktu79cLqhEtU",
  "key43": "VUC22gki8GKDaaodNYKEBVLwmeid1sJ57iYxNKh7JVjoDUd9omLExUqRTBZYseHzL6TJUTuyKEo8ZkGT6LN7XPa",
  "key44": "uo7RwbN5jcMvS98gMQEaGQrX9Kx7mQUrwu9o8xPfTNmzieVZAHUqNfwoE5ea4LpERn3CTCwZogENnPF4QyTd1zx"
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
