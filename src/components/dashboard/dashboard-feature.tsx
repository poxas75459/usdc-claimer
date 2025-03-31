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
    "2XSPSrK2QeKh5CWdKvczatEyBf3YSdcXSWXMmNUe6JUfdLEiH1FZgJM7SHLSDF2fQuP8VBQgfCPgk1a4WYLf2DPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dqHkfRgZiqVBNGaZdsbwCXUJNV6Y33RmGZsojg2eVUyTgQAPWdkBLFpVyPpkLoar12gy8JZ36mEzwTnVT25kaY",
  "key1": "4rv55inMSZbMkTrZbVe73gEqi8qNb6gzFB94mCiS6WeZ1WtjTMgBNLyWRTFNwBFYDii1oosRS7HQa7tNc1bRwBLe",
  "key2": "4mqa1y8pYZteyjYLUDJBmZrRDm2M73KSPahL2dc6SFaSVsvM6SpujWANRfCacK8AtMNAaoShKzrZmxffwFvsPcSy",
  "key3": "3N3CQika8sSbc4GX8JvCaaw7kxroFja2TpEdhrAi7k5ka9ZVHGXHpbh1rqEP8LysYC7APeEQDv6dK4ECe4153ASL",
  "key4": "2C83jr8wtfD4gmzNPUPZGuHS9vb8gCS2CkMJqkZUvh9h1tVfoKY4qx83MqXrCZs1oN5MNM894ejdRjtndJAHEF2w",
  "key5": "YxUYNWTjmkqAo61woXtefVytQHoUvizrXE5ZNt3GaoF4V12b2ULBZTipACxD5A39fVJn5LDsa9agufXBGjST4fu",
  "key6": "42UTLWNu1ak2oKeSPb8zxYaeeo5Hd8M4QcyWnx4iT8HpjCLbUPrD2FZG35SqhiBugG9GLco1CmPfCWxk5curBwFM",
  "key7": "5Ap2CcUHmDxjJez87ERzjq35epkDe5MueTWmJ4Br3G2ZVsEUQ9x4pkLiTNQv2Puvw6io1YgCjZZRgguxVhHDf13",
  "key8": "3zvpvEt6yJRL5X3tPV3SLVRmU4wqKVdzb6wrFjyXF1yGQXth9oWTFrA4jYnDVUWJt3BEqB4KTLaGSPbhudCfhZQB",
  "key9": "5AsDszGMVhVQoUF3exPpuSWuw24bL4RSMsNQanYLTMRj19vhqm1K3Hgyik47NYa6RaYTEm4hoAd8LFfVVabhTtjg",
  "key10": "a1arnK1w5qRuLuGsqu6j349xsZjxVJPamTxBY5AYd5RLe1jVaPVzJMrDTZaEPKRRovCsfXQmNTPea2keMHh5iHm",
  "key11": "3C2pHVXYQ9Z2BhEaARMfQpdyG3LcfUkynxWaKbCojRT3nFK2r3eppHQNEVm1sS1EX3T7GYuor1wdrf7KSQK517Rc",
  "key12": "5gmoXjeCdi3gYsf6zriaURcsonsHFHoPvUk7ZHd9VXrrGm9ySwvetuVo6LebjstCmbqoBwV4KhcQJdPVmbDduMNh",
  "key13": "2LHfekWBcupTuewci7LqassBc1Gyv2yfR3kKSGAfRs7WWyTx8sEhuBvNs8qshYhmfDqMRt5wneLoFZkXoHLwU1zo",
  "key14": "24yANSEtBQRJWdfhrZF6MKXHi1dfifgnRRFYqVUJ9KQYE4VAXmgKhEMXySkiUeofsKhwry5DF6Nx6BwwFRncdZtU",
  "key15": "2QNgYq7E764TFu7gH4SApUfdTzGGFRxbf6jFeA9NBKdAtdfuipoAYDtMvRk7V1UAHuLMSdbQEuLLyPBiHPz1pZJN",
  "key16": "3xNAMqpPmJS7VZNbGhSJeTcjGndUcgteoWmiYzZRCrUGsao3mBRv4fiApp7zTrL5FWfrn2TNBbqpbHbL3KszuE5t",
  "key17": "4dSe3j8Z28LMqFHTtdSRap26birKVSU7md8dGFqYGyTV5FAYKpmn212scZPnfGt63Zes7HMNvAjSibLQ8F4h8Wh7",
  "key18": "26baSTvz69TqEjHXFfZFZvK1hET2Ky9Q5cAbVufed7m3hZh4buM5SeRhdadJoUvxYiLbpeW6EW8Uc2cWVcJdBNtG",
  "key19": "3gHkN7YuxRF31z9aQoskCuY3r27CD3k6cnDJBoHGPaFYZbsiDZKUrjaSRgrpNQHiBUWHGtRoT6j5a1HoknyoXMCf",
  "key20": "5tz84nV5A4ENi6SZbYkB8QXmhHajeAPnXgbPr7yi5uKj23WDb1bWcwC1MkFkm3uLi4wz98W8VnkLxaW5cDTr44DX",
  "key21": "54d9LoPwtuFaCppq6c1tWq4JwkMH47piUnbCb8asXog7zAVxmqrzJKvaQC8CwJN7ewYASZMQFTv6ar99WxsFmXGi",
  "key22": "w9KzsPRJXZ15svjD7M1hg899DmKBDaQoa1SU6oPFJ8P79iphueLVSZMRSzsJMnbaCuUQwJ1wRUyyS87NEeQfA1Y",
  "key23": "43bQJpFUcALUYtPm4BCnZHFCj3E6EyZhnE5DS3MQ7JFYrHv41xNECiFv7F5iHZb79URxAJ5TGDmyehmJXk6pjEXV",
  "key24": "24Cih2ijajHsa7qbrBcEnhkeSzQhoCHTALHpStNTfZYywpB1R2PqU4mWYPK5kLvD9NYHkNoi2dEz4LiD8pHrTnpx",
  "key25": "5Kv3CmX49qTVFremziAnsDqBwgcPAuT8jm7mrSqVcPwHiC9r91V7rrm4VZoZDRTYUBwx67Jfv7uhVxX5KdKRvbsL",
  "key26": "56ThTKAhY18vkZ9LMLnhiucFmPh2FDMTsFhLgbMGptSdN5f5VA6xJa5KGALFD9AF1jvSgXkkX75Z44HyqJk92QfY",
  "key27": "5HSWawXADQsybxZpXSULEF8SL15GgV28BfS5Mu4i6WDQ6aVRwvgZTijZxiUnYr8uTJnjYaNPmNGA4UiHhWwG5V6h",
  "key28": "21NcdBUFH9q7d96f96hGKLz4CwdXHqskJoPWmKJJthENQrnuRuKvZfpghgbYntXHhmHNzReEjbH5SVEmKPp3mnzY",
  "key29": "3TSqbwzkZx4TKtxmZjK3g3ykRwbgCvsANA9Jm31rFw97dAg8MeKKnU1Bw2PVXXX1vr69FDLGZsG2f6maNBDWFQzC",
  "key30": "2PQfRtFY64KBaiergKkGd7Try1NTJakDTpFVRVj9txBtFQ7Xp5jRMqPChwXBkH1BUJ6RvtHNhdT8y7aenH2bfXdy",
  "key31": "3FufppGBDRTyXWVgRi7MFthjtbpuuawQpNVLo4TqkzVk9LmBugjDZr2dBbPx9zjuqYpYLV8RyMph3yAEJMeXouTr",
  "key32": "5Nn3LYrdamFc6vpfEw5UiPK2fBAqYbBeBnp3SQofjEpE9KnvKAhQgQ7seiL5MUPKwMsJN1SS2Zm2ESF1CKE1aHkD",
  "key33": "3kcJ4GwwP5gHYhuKiBEox9Qom5UoYghcchhFovPd2V7qaf3aBiPeZ77JCk59fybuWZjAio7qPw5aNsT6E14pXXhE",
  "key34": "4YUFuk1UYdoG7J9Crs6rVhxcp8NrjKE1KbHCx1Qpqo1ePGeF7QAhXfsRtbhN2jj8jWzjVApdK8e1ojDPadBZYEMn",
  "key35": "5BJhz2L28mZs7GEZqh1bFb6E9uexaKfsDmjRzHk2L2ZrUqkCkiBkr2bqqmoGwXf33mi88VrK77N2Fn9jDJ7mS1Hc",
  "key36": "4VShda4xgWozXe17SJR3CTEZDwnFk65SUnCUcFAwNy9YDubLU4zgWU9n84WKzPQEc6RR1wkE8kiVoEEmbPdWDGDM",
  "key37": "2o1t32GSmGNKzrMacPYGcnxuq14SmtJCGiqC2KMtMQTqDfZ5Y4QHJMGrHV2bUxcNgypvgV7SjpZSMXFs1AsFQH2m",
  "key38": "3TeXZ977cpEMRvEtjghxLi3FN99FjzniGrQXXboeXUkqhbrnAz8QxYSkvEeVyAET77iDDGQAzQZDwKGwFQuVCYUa",
  "key39": "4PyZrXW3pCeWBLafZXCPiMeJcjrqhBC6hLokEk24bye3jkGbsLRZWywEJ5u5Cg1tYQk1Qj6GidhLygyv3PJBT1t",
  "key40": "h75VoqWjVtKSyWRGor1TeC5obmqJhoeXAbEV3AwmyBcwuy2PzazuLmnXPfsUychWCdVKJbd4jo2kPXTuVhQXgnv",
  "key41": "5PZfga6Rv5qDoyTVaNBThZ5pfscwzcdf8Sf2aQiSJUAsRdYns8kb792UyGX581P75f2vZ65ZQhGALhpQZe2ahHuq"
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
