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
    "5Fw7Bd6vqigae5z4f2bssen8wgMHBwGTyzJMQVw8SRnWKLfz8QMB2DjGY4eLofsJuwU4utFJwXt8GH3mfoCYAZtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mnkXuAw8Wsfexf2cpGZZyuzzJjX83GtUxUP5fzGrzErdnFTotchybuFekmzqrjdbVTy7pgoa8W1yVWiNjwt9YyF",
  "key1": "5pRySs42Nxtz54KrQt6ZoYzwQ27BqBQTy2mRnREPrMC9SgXcrNuArJhyCM4D1tE7FkZznkqVkeUL2PprsJKQo1mw",
  "key2": "Y3YndQpDXwKoQTN8UmM8W2wVUEpAmvkcnZxBFd6uHDSbs67SriYCvw9nGy2wYn3cVshZNyAuTyoQ4XX57JGa63M",
  "key3": "Z6zLpfEkeqcBE6RKifTP5Mf8vUK7qcW6jKgXKk8RJErPH38vymKRUVs6LwGmv7mqcwwd5e1SMQ42J9w2WQapKeZ",
  "key4": "2XwfuFfR2MsdHa9wWfbjmt1j7hRyt5jDiqn3qGo295qPFEnBnxUyanBxYAzmsX9nkr1R6xEEUpPXfzoF9rEWNnqf",
  "key5": "zFS8A6HwQfxku1uu28S2Xgh7FTWoH3YuZhTTk2jkivp2hKHFDnBhSXaeYC3BqbX4JGYW5avpjXyS8tXG6jfQdS5",
  "key6": "5uUXQ51bETifDzrXieLDQTxmVMpz1D1furhnez73hwaMgcbMLxZ6twZtmVqc9X3XCVSG6WC1wS4JUsxKX7XMSvVy",
  "key7": "5WTjPMTw9woSUaJdkDtishekN1bUEyDTWDoiJw4HCLK3F5ufxyjA5e82FPrFd8ZxxAWMrUkiEFHuQbckoYtv3aNH",
  "key8": "4NRJ7j47FJn53CeQqNK6RR9L489JDyT6Zv9hjSeoHxvEpoJ6SYHekx2GpzrMkbk8AYxUJAMZnfu7N7s4hpyG8i5K",
  "key9": "2YxChDmo9vWsaiwTD3upVjufDMB5wDvmjrbv1bghzmbZj4n1d1Shw816tNqTSSrDuMVae7SxESrpN4TsD2mimm8C",
  "key10": "kpCxtBXCFU6LX7KnVxc81Ywq9NydFNLcWaJfTERTVWUuFgXJMmkaV9Xx72s5jnq6VJtCTFggtbmKppjxGrZC6zy",
  "key11": "3hFw8WjX29YnNTSe5rDaJCHPCdYqYjxvjBqRWg8Wrewu7LxXE3oa9ZiwKqn3BpvdUFeZzkiWNcLxrthsPTJL7o8x",
  "key12": "5huLAU1t79KYogPsoDqGGQkqWxgLUMt5ywe9NkQtWt5kHmu2sSdvBYVW3x8TajoxSattkE5j5LYWcDvUpYYucYQz",
  "key13": "21zSM4TKnM5hVqiy3VdTWvKJ6crAY2LA4XnmVe2s546BhCdcF2ft8yh2VQ74pXVB2cfJjBE8RxzL1ANGKL49Teig",
  "key14": "4qKJ3RnoJfAZG1CWGxg7eZ1eNmPUwkR2W6FmYLAHRJw9UFyhiER4cB9DEM5MVnbCSNRLHZK25uCpjA3c7cMZEAmd",
  "key15": "56sHFPxEdVAGsbMT4UBBDCbj98ycYKGa2TPhvauKwvrkZHR15bHRJiTP18VZrEQNu4RPJDF8uxf2SpJSocKXGzRV",
  "key16": "5Q26ynbPhiE1NjhD43kwYbnZnytda4UumD69ojj5EtPcj3WoMz766eo54pdx4P36TQ51r7FhMLWbYX7dRZxr5Gbf",
  "key17": "356coCUNWkLqmFrDehBSREMjqFmCoiCMD5ErgUmk1DsCxSA4hrRN9wivG4qPXCsKLUqPQk56qp3po1FZX1Kc67Qr",
  "key18": "4SwzSoNNRFVrXLS2nLNRTXhUDWaK2nRGPYvRyhiGJ78wMTRp8dN7dU18VPQni8Gi69uq6xF7TyygeA7oc6KK78mW",
  "key19": "39YYRQjzLeB5JZEMT8P2try57irJ6QqN9DvWbY4SSmk3CXN2K4QLbCgoZJTg7DBqDLfJ6sGqDktUYFNas9dEZYEE",
  "key20": "3LjfkjjwGn7QSXST5XSxPTLQ3TvDWrwkxpx7uty2bNRTFFpSMY36c9UoetYhEmg2M11K1UsboKjkAyrjWej5A3kh",
  "key21": "39i2H2MGSQYhRgL7Eipo6q2jBHg98ipsYER1Vw3Ug4yCLj2MkQ6UVRmG36nLW8KBmerVzyh1p6pHdVUhdiciVRcE",
  "key22": "aXVGLU4msvdyxwGUPvAZUp8URg2EJSF5fRysiZTdZamfV3Qf234XPWZtNMEBj7vBrajBirh3ieSGVd269kMLVtp",
  "key23": "3QvpNsucTqh1TDGqFattCLNkdpYKwVY2hDdgRZnCgCjqYVAHBNxTH1k9T6dezgVU7b7wKjmJnuZqb1o4emUuR78A",
  "key24": "4KtQqSgFhF5uxgQJJCxc4Lg8SJhVmQWfQ68vA9CxtGJ9W7ShgwFVdFmHaaqHW8JuiH88fQ7eFYM7DqAXqhbRxKTQ",
  "key25": "4MzBFtABcSD8xyaDaGMGGbNNzvwasW2Tnoe37RSV8mN1skAjW9BURAyBhPXghU1LzNK2pkdJkma8hCrq3dW2LLdh",
  "key26": "2kopQBZB7WiQx4PARUnXqpG4VvBP3BZxEF7JeTGmqVg45LepnuGpwDbsdWYqPGLRrDAbocVeMupzytq4nZ3LCLvv",
  "key27": "2pZVojg9zNHnid5sYzk3ZasJwvqFj6hH752rECqBFYgRTUiVsmh9atfM4MaHwz9oFANye7ffwUT7R4ffQtQT1pKk",
  "key28": "qDtXcYSjAB8oH4NALKoq5nBHDVpE43EfYpFZv9uviWP4gfM93mpzs5FFYLWQDWQ2wmamkUccPXZHkvKq5Xjk7LZ",
  "key29": "4T2gDTFypGsPaserR7FeyZZaMry2AzCnkPodHAL1x553JKHxoyNFdaxG3QzTuAiRGWLr2C98P1rJv2PPU8kcz1Fy",
  "key30": "3ZXmyzUjHBborgw687CcKAshmYhr5wTZ2S5DKJcYg5xyifLGzkbm2mNJp8kEqJPCscbA3i6Rt9x87RP4SJHZXvfT",
  "key31": "4B2jCDLMyzM6ts1RQmfGmEC2fRpsFfj2oayU7fwxGiz9cQY1HLRoh5JnpTih5V8wG8edrjL1VidGp93JcjhSezoU",
  "key32": "e4HwUeaRkJUBi4t2VqyBf677HZe5FJ3vP2Cge1ZR57ayzsVTxZdNt71tue5nse89ZZgpk6s7z3rCxxxWjFJwSpe",
  "key33": "4PKBJTYum8jNWNUFK7aPCKaT7U9Rq1gXCxLNv71nZoFn8mGa47tcbESRZyrq6pWJpJC5W8QDddLuFXdmLTcpnrPH",
  "key34": "51zarvTvx2wFNZKxBkp2QFZEVdxV6R4UYSuiYx5R1GQta1scDxM8JkNLJf1RECh9bAMdZMzGjeqZgCUv1twQbMQX",
  "key35": "LoQjCmPBvXE2JZXufFbwq7coS117KNde1i6SSAn4sp53W7GRVMNChHGLSRPeQyCTKnsC4PcGHWnYBc2BLRjKgyH",
  "key36": "4aZwpLqgs2oTSd81zw3xSCGKbpgK1iCUvhzisKkEfjbcnj2irWsPdhLtFSkfiS8Lm7Qz4KQqqPVMauZegKeYDrGx",
  "key37": "zHsStriV8DseDyrXBZuSfRtdZj3aCQiyJoW65rFyuySsNqFHx7VDt9dWzEbufYRXTJjDD7Nn2uJNMLFhRbdNFbA",
  "key38": "3dVN5oXcmtN1b2RRFLUTWzC8iq9nAmtf85S5hWTNuPT5r5UQSTjf8ezPoQ9L17GTSspDUtKWia9UdzwCVUAQgbiS",
  "key39": "4kMPw9ya8Rj1zcT6tJrPZXoQ6hhp86Kp7UKYFpuPT4ZuWhV9Sx3TfPhcX398mhFgtPF2QbXzG9UqEwZWcdZjBE5D",
  "key40": "3Hprz5UqJ4JejhsJLNWqhMxf7p2gzx9S1BL56tKN1KdMiVmRoH9RB4v1zKCRyJJNXYfsJi3ebL46TUic4JmshkQe",
  "key41": "DosicrMfCnQmwRmx8emuAdYVqacAwhGAnn6uXnESSHSvhn2c4hjnUbJncN94wifUTj5W8yaSRvZ6ndHiNLuDYBg",
  "key42": "4VjofR8uFR54RupnBm2ptqBBbokLvV7ciVUfaQ18Ex4n3uFkEUkMqTh9vx4nppUhw19RfDQFcwwUDfPs1uzMBwG",
  "key43": "2S5GYVWBcTnZZRmfbyMMYjs2XtBeHDLqYyJziHV9iWP8LT3qY1zaq8nd3VSLtpoAxW6rpn9wJtnw9dvzCZw4Z61P",
  "key44": "3UQojjnyF8GB72ktdjYskZrbU6PqkBVL76sLo4w6TiWhRhXq13eKJSYu7y5i3X8gHvyPZAbJmQAAuVvaEEAC6PEj"
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
