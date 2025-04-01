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
    "1dgniQUUw1XMTDrf3imiTfTX7EkCS2u6iPNM8QDHENix6z2fnC3PceQbtUAsP1sXr2mgeo17DtZd3uBoBuBqLAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fhLAsEe1R62HpgntTbBWEVecG7s8FeV5sxhkRkJF5nmj3GtMT8VDerELdaZtwtSxoGg4rNZsdDxp78t7UzCM8Pn",
  "key1": "2HDu5Y5WJ4VU6ttUYmaXusHBaeNnSczEXcAniJDJHkmbnq27tuxUR6HyHX46SNsPy7fCdywHGvfd6KGGzW928Eb8",
  "key2": "r3czV7efRYB7YipZuyqTGxTwaagENszvmPoYVnJwdA2WWq1FP23G8Fg7ZXtMNuq9fa73ALGjqJx3MDUozQ1azdv",
  "key3": "RQQtn75piZ97yet1xDpGwrrCXVbbACD7uTicuG6pkHsfReY5hXcB2ja8ju5CmHnW4zdoHip3xaPJUTbW4UHVWMJ",
  "key4": "5UGiMKqujDqDEMdih2bDse4Zg7aT8dbAizLGgSfrBAxZ5KciMC8uLYbFpCtbio3NctUfihZP5AnBVoBbhpmyimAC",
  "key5": "5grVwy5QkZGk5XZSAccXM8wRrMBfedzc19vc4gfQ4nhzF11DcQs1iZ8q3UNkCcgPA1scZMssSEg43FwLaqH6N7xQ",
  "key6": "34YCwtTHDeNZduNnsVgT2JhNngZQFucmFm9tuW7wYSG8n6xBKsSMc7qZUh2JhX4oCtNRhPkmUbkMbHeRRcq4qLj8",
  "key7": "4NPhHm6ixAFJfvcPJu1apenxiUsTUgQfa7n8WcVLTc7Hg2vfU4xVXdtUGqtuDCBdoqd1UxPWb3HRSUhcAtMwBFna",
  "key8": "5xqfVgcBCHZkgU817esQG8LaVq8nHGnnKketrQZ9s7o9YJhkMFFgevSef4vZBhAEtrdVuMMDJQfcEgY1uYCNSYR8",
  "key9": "56mgzU9S7d2TMqVNTUVDQXhSHyJnCeD97915tBPnRTYkwkCJH799cVLvKnLcr7ADExbZhJFzNP7gmXSaaNV2zfDt",
  "key10": "3Kvr6vnbCCGqyC8QtmbCJkuvgX57H2JJwNH1DYrqd6xH8zBpF1y7Dom5dugsw6Z28oEqZbVonTasrLo1J5GrLVP4",
  "key11": "k5ZE6SR7b62jwhwAfEaMP6vUQbntBbwcLrMKnWoveVXR2CgcnkUZ97DqcXrfCTXGn6cAvWKkqvsbZuUtXqHzJb6",
  "key12": "3ieHXAAbjXqKyJYwfBuzmBm9qZfSHfjbvEseeFLgSQY2qnPM9LZLRhTh5RyKUVV6JpbUwwhtUmpJgVoR6VtTCHJ4",
  "key13": "4Nz4UMHi9hgKpxThVRX6mnSssB3krbKnZLS4wa5x2ydrA1q2Ykt6LBcQGmoMgP84NM16zPVeAWQAbwpvNFVCMN7d",
  "key14": "4kSEMAkbZJRYv4FwXvA3CxXHasmEmJGthGuduoF4TVhbEZBfDzhwhxWw73MYM3HDFMP2RxZmwNbmnwrURunyfCvV",
  "key15": "3FPEJ76hxHxB8rSGNZoHTpYzGqSSd5Y5jzy6NEBVTJnziZfg8G8BPUqPkAQ5WfaLQZeA2YSSFHWsidZBFCk9zG8w",
  "key16": "4FyWSUuuU1MdJLmLUfa2V3npKssCqy33J9Ki3LifKmWe3S5JNMxcjfxR5eAvpWCv2C2cMFavKV74zpjwWKnqTkWa",
  "key17": "56oCvzT4YuqgYeiBksHt2GgJKS7DHnc2bhGNpSYY7QVHKuN9wAuTzL9WZYXphiL7WUMaochjrBB17LUHvHWHJiSi",
  "key18": "4M4zevvQmPd5KarAjatfd9Gcd48CHfSmZLFdgWL753ZLSMwzB4WevFqZUy8H4LjxbzboSmJm6vRp3jjiAVUpvFVy",
  "key19": "3A8aTebGyHJXczh7K4jcUipDhELLuAWp3oxkqLZXoftt5BpjdvJoNR3zFe1Sg9kmRYrtVAVLaLkyfxrCj1w28Eg5",
  "key20": "8vkjm8wr2soMNEBQQJiS22fRZRPp8UAgy3JyxmHJTMwDbPkM1xmtndFgmDdTarcm368JypxmHf442S8HqzYQjx1",
  "key21": "3Cv692zhQ4UUFqprmR61M19KBqJbeqKBLQxNZmRGTdwTw89NchKaQfW25wJTZH1p7bds2h7mPxBPyN17mvGRdT8r",
  "key22": "VyNZagYCkDm5DSRxru42L7Dp23EZa6HY9fB8UDtE3tDtREtNofWQZWp69ZtEbkjdoas5wc88f4TYPxdnoU6boeT",
  "key23": "3nvZvasULehpjHZr7VRE48wyWTfeet1sdFJ5u4U63uRezA6vuRooZvWCRhJJWi53ZbVFm871mysgGiwDGqSvUbxL",
  "key24": "4hxaw4ZLbFX4MjvafrKmstNWSKvCehQAChJQw9Esz1bBvWqGsb8PHrgcAhmbctTwNP6YWUBCntGWMYzm5yqJX2kz",
  "key25": "4yU9bgPKkQ1FZD23TocVUJJW2JMCAPpUnNQzXXZQwHR6CMjsDYwzJrnAoahAz1iwFRAa6WCWoPve4c1pcpagHDGt",
  "key26": "4CKPLUFFGe2Rhvm45gUcd6PU3TW8y2sZD7MSs1L51dmRmQwguC3LPQkRLMrRydPBajb3YjHbKPtTskoNe4ecW9ip",
  "key27": "45s9TKJ3yFyAmZ2qojrgb6qppGHk5eFMDbGdBGBkdCxqmadNu1xXiU43NL68tGYJZH1bVopzPEZGXbyjq4jHwdnY",
  "key28": "57haZzfTq7ENqmM84qHbStuY4UDjQiaeJjQhczZdMqyJXoEosTYBcxwvokewky1zSgo8N9bPufmmad4gUuAxzfEr",
  "key29": "5HYWpebcSnQWyFx6Fb3RgYUdhNUW3e1F991Z3LvrryvAxDCoj9GAWEdi24vEJUPH5a2YfdCcYYuK8Uxx6pKMcuXu",
  "key30": "2o18syMkMuoVopcZpF8GQNFv9EKfYC7krcKrPXUxBoK785Aw5FHcTJ2uxxsed3LooSQmGw2GYMHV3ELHf5dQsuWT",
  "key31": "45yzE2M6bbeBKiWjKP3ZuzTPd7TveW5pHfZXUwMqrsor8Ycfo66r6sdGQKwQjQMZ74353YptXNDqKRwhRhczqJUQ",
  "key32": "R1jknbZjir9tMQZfVaeUMyx6M64xJ4CvGF2NEvXukcEbb5qYAzpYZwL3vRFJMj6y1zmJRzRqVRDM1pfG2omFyrK",
  "key33": "4wJ2xkoN1Xvt4HJnW88GLapUFGw4Nxok5aBd49tyCVCzUMduDPGczxkC1mvTdMMpyhGS3RyDebWzngXcQ5Y9sTds",
  "key34": "5QmVFmb2a2eZZ3wxrBjvEMvXgi2L5SpRCycPkD4H9JXS3cPow1tLDnLMto5qXpu1JRk4GbTFyMWdisQp3nvSwTEi",
  "key35": "5EAwtqG5UbhpYFCjteQc1U2PMBBJTu1CpRwoxAuYEiBS7Pn79BYTmZYgyTTYUMPVkHyrcTRzNR7xC4QvQ2n4Ymta",
  "key36": "3QpfqAELGaDApte6MswvWxsEUmaJaCWn4HYSMqjXsz2vRAyhjnTAvS6Z49aot4ADCDZmdrphNNcTJCjqhavkAptz",
  "key37": "4Wv6nKJsYxkioBGfdVK3YenqexK3Zz8o1DpMCovFcDFiZ8xp5CkhkE1VoFRwWZsiRV3gApnBXbDDEfp8FFJVChbs",
  "key38": "RZvWhbC9SvYkEmE4FLGBwpo1wr1XFWpY689F44RRoi3pRq6qeWu2byTTL85BiGQds8Tta3DMzYkZemNwe7wchfX",
  "key39": "2ZKua25az4Adq253Le2axbfJmBx6L1GZFjAo1eqE2qVPbcMN1Keg6UKm7MeyR58j6sJyfn8q7BcoftyDe5FTiWp",
  "key40": "HxjNfD3rokweCxakBuZoxqz9cq8u67JPCL4JpvL2tUcz6ypLGffnKmACQ8LpTjF29Z5M4Cd3oqyULKYhAcjSDjK",
  "key41": "2Fm4DY3azRLm3AsEfKh2VJVjZ7KCQ1LhWtumqfejsSDYbjn8QkXiWWWjwv1y6o5Vqff1TxF4xwSaNKyAZ4vMWvre",
  "key42": "1ZVsbBFgLA3ypP59MEFSro57SyZnnbkGwyiAetz9MpNzyuyX2Bjf7a5zFvYmvNnj7qUZ6anFzF7hFxqkkyHUiRH",
  "key43": "27ZCcmr1kYm3f9JoVs2jPAELSLAGLtVcfzkXbtjgbLGnQZFHdUtTmBRhLkcvC5SW1VMqRLjiEpJVUXk44zHsP4yN",
  "key44": "5UaKULeDaHxoBJYFHgLWZ8kbDZbrKNLNeWAAo39b4ewdTapqqtcotGoEem3nFeShxYdM8GNQ4wBose6ZVfCUZbvR",
  "key45": "3moMGs75eNpfrgZqBvahcd5VAkNXh3DbD1Z23ALmPiqRSD5KfrLQj9B3qrDmZVxCveaYZBvFLida4mfGjjQfU8jb"
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
