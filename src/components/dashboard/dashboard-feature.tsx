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
    "3YAVpHZptoyPpHkpDGaNUs6NxWhmNRm6Hyn7k5DhdrMVtrKWjZW9PPTXKDifAYDPnt8Z7UQTtqZd8SvKZjSeSRoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ESd4w3EZWzeuFuqZT89mL5Agrz4nvVRaDithBCUrgeYoa7dYdHHCJojoRbYC3pHB7LTXaArptNqRSKMWAEtjnA3",
  "key1": "23uSjpz1emb7TTQrucGshCE1xzY62TYj9S3TGBPm5xDrwYxCS3iRs2RALMn4tCdpv1kXMbUayRG4HaFU5gshHpbr",
  "key2": "4skxXDgkoFB34Zxpfnqjy7kfRfTa7TATUtC74FPe5TBYo6xB1yDrA3m6Yg5X6T4dFekXcuDdi2Wam7hqdTHG6J8K",
  "key3": "2wfMrYRs8nbv2NSRbHW6PQ2H6kXbnXfHvkeNwvZLsUdjiRwhMsP1BkuQRG1Wt1UQqdQJHVnUcSrTfGCPYNe7kwc2",
  "key4": "3SWSKYksRFshUCnm8kHpgcCFGtzw5s37Qe3uF5jH4D57UNu1xXz9oKopiTeVtu2Pm8EDdS3rSoZU84o2E1qPpWqv",
  "key5": "51DTYDfJfa3xUB79eRc3nChXEr26EMFwABschMrZCmTaDY7nC2WYniTbojfQFoM4fB4mJ5ubtY2W9eRqrvvmxNfa",
  "key6": "3HHs6XnTHioxkMRGTH4kaWohXn49necbcBRkes7ECydLwoiYmxTaR5C5Vgodzu4PtHTHooQmxfHCSgV9GsWtu7Xi",
  "key7": "2hc1qN55xztNRbV7mKyhsJVADVCLhrhuwsrwTLmxSA6zZyHi2aAudNmCe9xkFzGr2oNVQRTKxVpcuxkvLvRTuvw2",
  "key8": "4DRZb5nxBps9U4DWy6dEukPVdUWRZu6tjiEDAUKjjjTwNGzmrPUzzHw5gTD2ZU6cRnSTxJUq2G57r3h1zkr6QZqq",
  "key9": "2wNM3maep1JNXeoNeiwBVXawZUezPzCdk15V6pKhuY94LHTEXYNLWntHmXx91pdJZfLeV3vhGzY8jXELM4xRKPx",
  "key10": "4Lmu5iUKNtUR5H7v2zAKu1TUF5EUsmLpaeCTrnY9Bz1dBLRggB3LGPdcWm8wwCRKDpYiYsFVBp6vxEEY98zQFmuD",
  "key11": "3dcBDhbr9h8sKNV3FE5tNhnGkxni5qygQgkVLAwUASqSovcjJjBmqMM786QyN3u1rdPj6xRe9KbWwa17Fw2d7m5a",
  "key12": "XeN5WsLmmr6XX9kGJGSuYqfydxoQENmQ2864gH8v2ASmzv6ELWgBFQDmCxaNdqhwsGLzfSH4ShADXD6hS2fD86U",
  "key13": "3CSm1xDeqgsLU8ukyMfhLNBfH6iwRf8PUc1dNmMiPL29NiXtbgVcSBzcaQdjgZAiandNXQkJJtFL2hTYc9x1Pmzr",
  "key14": "4x22LLm4DE1rLdheSMpXmSQfqARjjs9mE4J87V9Jr24BcEm3MWaHmaaWmG7od7E8Zpy2smjAaTXakiyMw3sNnbnp",
  "key15": "416JnLMoz2kcTbzfgVVzB3GCUKS2u8KNRZPBm37dV8G3hPmf9Qxe3aKvi9brZqQQg12x552YANAe2hqGRRY7Erf2",
  "key16": "SSNN5UCYNtndcGHuLEobKoAB9m5HEkCwTohBnECbmDdKbawzPJfuSzUUkZG59yzYJd4TsDqErh7M6cNGqPXXAEP",
  "key17": "4uuEwv2uJsbSdBvwMmgAGVYx7uGnX7B63dejr1ggH9qgKKq2K37V1z4gcgthK2UkWgkJ61m4VfyJAuyBMPHmtzhy",
  "key18": "51yTMqPneJaWNrJKxaLk7pRYf6QDeKZxH3cgLFEuqm7ViQ4KiWLw5QsmNYWpQtZEMUJcZXBExP1q1vY5xjnfgbnk",
  "key19": "3U4P1uTYFBHhVUm1ZrUaBVwCmt2PUDo7qjy4kyvwQR92d8SeWAPRMnFQyHgbGYq6Kterif15ZgNaD29yzXBQrDBL",
  "key20": "3mY7zCtz8BxQGGerkJdcZQDfSEwUjdKeBbuMBaYtBPMFuCokgXUVGpkd1BJqr1UnHUj6foX7AVzmdSptGcAf51oz",
  "key21": "qE3ovfiFoQ6g2gPwuAxUqUnqJN2gWKcKQe3BJH1fG734BJ3ZwSQftgRhR4hZmR522PjRM5upPRbZn6rB1PfbXg6",
  "key22": "4g6b5ms5dALSyuRo8pfDDM8KYaTUYHtSLn1tGqwERoZajDrZawoe17cPTfcG5BshmWLs8GMVMJznz7MpiQ1bcKgq",
  "key23": "5gG3jQ9BmfjyjjTiQcHMDvgguH9uddPqCaPMKjpPEUoFdng3BgzbrWTWeKpbpxpTwcEe1NiJdbapzhLmvCHmuuhH",
  "key24": "5yj8T9jWBMA3A6tNKzp1n9fZr5uvTK8f1tRk1WxxHJ4MYh6tbr4EZXMU5BmoVqq9tueHTQDNy29QKuK57nwXQ2BF",
  "key25": "3tfcviKeJe2PqqgDZNhLUdqYVfH7ZwczT6Jzx27BcmvdBPVQ67ZpGwMuCm8UNgUh5y9BPJ8eGBjFYP6oTtWkNx31",
  "key26": "3bfNeUkd7DZ23xPjoMzNE7S6ZRrkktXJwpqhaYVJG9twwFKsPMtPWzWhcp8oc2u5rGy8pVcP68AJnkica7Z73KGe",
  "key27": "5wW35uEba43fdPPr3ZkpTFtCcdgTUNU6u5yNrH12ZTDHtzfLAmf5eR3kMvfVzakL8V1uEbjHpTNNpdUBzJVoUT3i",
  "key28": "23Y1HL3Sq72ZeyW4y6JGj1UNwaC28SZQjdP2SdXiJWoPFmwSz9QnGzaNX5HdnQ6ghjyhFN3WxEAsi7XjtMFs5zMB",
  "key29": "4jVXLJaxBhxrTmLL8xDiW8C85e44fCCCCqmxKuViuVqmJWQ7zAsiXay46cYp4uPf2JZtoB37Bj8npHWAFoFbFLfv",
  "key30": "5RS4wjczPoSZkNWxsZLqG34vpkJy7wqf8ZJZFRLrZoY3WzPf4tpkJs2FB2Yoja7qtf2wjXq8hts4R4Q6QuuB1UXA",
  "key31": "5a8vrzXLw64RpwziKexYCUXMR4TpPpuu7rReAtvcbggxjoMeFYTHRvp6tCp6Cf2mWRyEZt2EUqQrNna4ELeH3ign",
  "key32": "3izm7uBAKoUjZ96M4gMEv9TNBuLKEWVHUFbwurzTpY9kPzKT4qzgmsm1M7etQ3nNTxwACUnLLAhwBjMCC4iPpqHR",
  "key33": "5G7LDh5YBdv6YyHEGoCWJngFgda3L1gj9CFso2hGMpDPsrY38AWSBnS7zocVrgbVVfgLNox3chHYYi9u3JPpYi2K",
  "key34": "jN7hSKSMCe6HxYDSxEs9nRxRRRWQiStU1dZmQCYafnos4uN13QNkvzN1oidF4JGUg4k7MviYEmpwbUJDYSVSjLt",
  "key35": "4upNj7F5h7w9uJvR5FTgFZgPSYyX6kC4weETP6t7Sd8UFJKHJpsJKRZhH5gUdrAH5CYM2utPfRgtBRBTwWrVpEd2"
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
