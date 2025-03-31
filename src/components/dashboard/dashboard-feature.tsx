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
    "5ujZQSpUKYKXnRLGBaCA5Sw9vMqCxNydiLyLfWAkgkE1hcpSff9d32Fjs4eH3Uq9WXrfjMgHhCtUNNQitKsov2xX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mkrWx5grtTpM1pEk9AQYfV9GgQr1B6Rw2iFLFuR8U8JSCYngoUG3uexggdchqtAsizewv9LDAhkCniujHic6edL",
  "key1": "5Mevgjfv7j5LE1N8y2oAa9SQUyrm8hyPiHthBXtgX4tnSYFkfTN8TEcSYqNjSnLJ3GYUgyDcCgCdXcmwPshp4KWR",
  "key2": "2eEm2dqY4qVvvEQxKJVRvWFNPEUo9iynvoaHyG9k3DWoA8SmmXvEKVk8VUPtKJjD5QAQouV2CtMU2kNuKStvdYVu",
  "key3": "4pprrbWDyEWxgJmMD7Xwk2pnZt1dWEuqKppaVsTbL8X2hPXGGAkhvaQtEo8jVgTmzoNvLF52Xpqq2Fmp9qhQ9eb5",
  "key4": "4aEADvgtkLuMGj6kR2vY3fmQRBaibRrr8suhWBf3eA4WaZVq3AQsrgW1GysArSSEKtouvUYDheJBvKxhJZP1fPCC",
  "key5": "2vvyiWJFZ49NWSnrAR8TLc8L4GNdAzgoxhW4fV6vfte2ZMhAhstGhnF9a51hdqmt227xxRghd1NP4XLazpZexQEY",
  "key6": "3sLxnG1X9hR2TDDWXTVSzCQftfCeEswrJiSWzewDTqBdsi2cxC2BWskfKsQFXR8fmjyuPtq8qbjyYpyGYWCffDx8",
  "key7": "4nEZbcTePEWwiGBTVphV5kvn3ySndEBfYhwnMRSb1j1cZUSnmuDFLHfo1DE7396nTx7DRrKa7899kxGRwg7GRkzW",
  "key8": "Nh8BScUX8bZimCv6enpzC4tBs6FvABvREm2LE9QW75t5eZhWwFvWFmUyjVKeWUV4ZESuFifg2SabkQhhaqHVqUe",
  "key9": "22uBCjf9yMboBbTNEFvvJqpNmnX2sAAUhktwh4CrGB1NCC675MZfHY387zU3gxrPuyDFKg7L5yhWqn3NAimStqFt",
  "key10": "63enXCj3gV2LeUK3wuVJu3Qcu5yWrmZADSGiBpYoAjHuSHT2ZZ28aQyBb9c17yMQjcsStUzBsmKisqbUnRcXdrRa",
  "key11": "5VWz4xKkf3zJ4q41bT6vWvMiUx2vtxECdKp7Qt5bj5fddECFqs52FVkqzauhAAGY8bfBMPyyxUcmgw1WgXMyuK7o",
  "key12": "kcM15ot15W5TY8DjpsfGrGsX2fNGNYE2bru5EbGCMXUKwpPa5JJe4MTGF1SYprH9ucDTK6M6EKqaQVdsYUDfo9P",
  "key13": "EbfmkiGhXHBWYhZEZwKCTeaGAAFrAroohmXgLcucoJpmLCEXVt7p5nvXhAsHjRXEJDTPSCmUWv8ZheMNdeQLder",
  "key14": "4gHUP1tJRf7aJxVZVAxG8gppzxAovvcvUEJ1VmG4WNNFVG8kQcj9dSySXTee141Uu58fh26bGjYXcAP7iZTnX3W",
  "key15": "218ok1Nb4mvNerwYPsSs4vtafuWYKyvci49XuzAyW7EDHp6ucq3DNUm72VRh8hHR8gHzPnipqqZed7ZxidP9jYaE",
  "key16": "mvoCjeCArFLvmo76BvDfz2574m4YRzhVesd6u43Pp2b7J7CN9NXG1XapVEHQKjEFHtXqMUpvLrMRNGnw78nm9Vo",
  "key17": "4QoRddgAADDCvjWewmaG6mqiywC7LGX9VGUQfTm5tGchJ746dMErUaQiKKpdofTfjWzS7wCGyvV1j2yECZqQAB4X",
  "key18": "53b2Twwy6aWURKejvuaXgq5AAssFv85kRTr6GmCkEd1Wc5yxAy3UtVC1KcY23pK5ERuarTtpsdHaD2XJqyMixUEy",
  "key19": "3AivSdDrnJKDQcThaM1PyMNPThH15rgApAcu3CAUqTFHmFsjA4bTsweUEvKPXHddmt2L4B3oUoDsmcAFSAEkRsTG",
  "key20": "VowR7cAhwH7vymXrrcCFF5e4gqS9t1tiubZtJPExMeZ1Fedpc8Hg9Bwhx1fnXZ4ukHnnCYA38rgWYqRwrALmpnZ",
  "key21": "4E9dcCEiqJbWybH7JaKoYv7xfyZ4trFNrKyUonnRsrbG3T9yz3dP3XzibHLS3gcGpzXbrS9fCpBrNRtbDwaSVJKU",
  "key22": "3vH8C9Ko4viGEUYAFGscEsaMofrLBnCDU4tMsLGVtHsLN6ZnV8HBwAgSsC4oZaPJnumKGQQ37N6cwQpa2zh5gbdk",
  "key23": "52TXf6eqdJz1EGw8ZFf4iwpfxWFXUSYnDGXhCFy1fQn1DiBgm3kWBz1xu96zqFPPHZcVLYYrnXT9swPqPG2SFzck",
  "key24": "2vaHQUbeGRzruznFZTqx91TVv6kDjg6YP6Jta6iT2CxtbJmrr5hQhAZoYJcSDjM1m2rqnjEQ44Lee5bpvRDtR87V",
  "key25": "3yE7rYqbpwfwfJ6jnPz6LZ7vGWXpFziwtRuD7Y8bwYGeXBvHuR7Wf82Qbova8o5mCuKULvxesvCRcV4kHVr65xBT",
  "key26": "46eh6nupnALSNyWKRe9SH941p6pT6RPvcVRrreC2i4bnHQ8ryVPgbtbF63CxhycmcTQiFj6EhAbGxB6bY2muWoxG",
  "key27": "3u2uD7LULyPKg9HA44iaXrS52E6sfgRgw2K5w7G5MLs7A38ZPhQKZW3k85qKf5qjDZjqiMoTPAsg32iN4c1WRP14",
  "key28": "5QxGeMFRik4LLrNLoJQcmDsiLhXSVAtLkGZoFPP1iDr7wFQck6uK3GPcnvW8wxZVXAEcgHHfdsHmd4DwMAVxQswP",
  "key29": "3oJiKsfykCfj5zFoE5euYwSPq1qkHNjLWXMLdYYRY3DbFxXkDAkcu5Lk2V7sEugzTDMcjfTizJeXKM86B3a1mkZs",
  "key30": "2aMydQqsxrqxPNHfZXwX5kSMnGzzkpLzVCMKx3f5CCifT6kuyNA4XCcXexV8RkxVsZor4GLYH2A6zokfej6rNVtY",
  "key31": "v9UQMyiSZxwLotrM8jjAqkxCDgdLi8pAwoTtT8rY5ucQtiw1Yqf1xTnqqs3KHZn9YVHr6AyrofehQ2psSSP4GV6",
  "key32": "4cPNw2fT6cL5VGhmk3USzVDxPQEgB6CiMUDyEaKdSSdxeKNAaoMUZdeqqMsEY4mp5ZT8wVwZHaUURwETYawyyaeC",
  "key33": "HcfGbXd1SZQsvGDK5hAp2oFhUTrQEiQN4vTRqzEqXouVkPz4cpWL8RA2cuhsnGcucZXL1ZkT7HLULbpPGp9SnKo",
  "key34": "4nLYJNYVsuR8SDgFz63T4pxewQX6sBajx2AK5zeGvKkinxpi2oCNw2UFeqbDJR1TQffHp9kyJmmuTTHJ7M3Rh61V",
  "key35": "31j2GS3QX1RprqyDkHQ1HUXaLpTpC5WhBsAKxqbeEhUTe9fu17mrswN5LiJmchifSPbny5TAvn3ZsVrZJ3xs1KQZ",
  "key36": "25cNXhHHJefQMeLwPpHu1xA1DhQsgL76WXsRKJdxUw3DpRXVty14CWfD6nZBpob6Cz1sFvgkjf2QqtLLwpFBaR1i"
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
