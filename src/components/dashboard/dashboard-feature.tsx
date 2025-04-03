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
    "3bxjzCXU4wv1BKzk9z753cgQAVwQKrVABcE2MxHYNHZ8adxCEBVQFBU1aSqahF3T8WyCQx3D3BAN9dbnVLfSkbBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AcsmwU9V67mFVbqmkT8Cc3j1JBv8mabaELV8AFXAvqcgvWgGMYLPF62qK4LL9qeL6Awimrg8T5KDRz7rvatZnJr",
  "key1": "3wwMFtStSyL8ds3NDKQYSDUcgyDYxjRXU3y7WbJ4JKnZtGQ4RjNs9xYrphgMyfHr14qTv1DXLYKLGSGYStzN67zr",
  "key2": "51EfwbQKpTTHAipR5aMGhJRKrxWX1iSKB5kKe4RBzwmNhaRHXri2XWiCjSkFbzjTfADW4aHHD4Zr3y3CyVHPmhzm",
  "key3": "37KccdMuDwa2S6Ds89AHuBEMgKVBvqp8tyGqz7v3pvCJZDjNefYGC2t1nKPzuQeWVD9dduZVPxJj2tFTasy5cTyF",
  "key4": "5zGqU7Fvi3Zitg7D2NrzAGwG3vyGiNRxcwNSCpkTkT7mcLpXQg4FeevnTet3XywXXu7vAwF3Sir8t9s1GKBDqPMX",
  "key5": "4j2h2NCk3o4dRbXMhwmzst24aKrhaFgagqSn43iuximAmpLWipzc6c2KzwskuNCtS8ZGWCHntGk5rF481riwrUKf",
  "key6": "4dbRbzngSghSjZm7vnuPzskgZPbXWRvbSRdt2y49K5WiVVx2K5tChMcoUaZb7sPLKM3SxpjxhVta53VfkoxSEJj1",
  "key7": "3yHKv9XbU8S73heW4iEgdZ8vTZP34d9BouVCz6dXP4nPm2HCYuwWcfH5jhetymXMtQvXvPLiEHGC4C25vQ5Gr18N",
  "key8": "1djipK2WQ6M3GDGvieU3DSguJSjLT7sW8dkfUgqknuMBaWZhfmmLYrDa5XzUg4mQ45zr29SxbyYSYBLBQkMd2Yr",
  "key9": "2kKV72ZqKFVXV9rjaqA8awcaV2kisdKANF6LPsaaJFSt7jSA3SaCLk6dGw4sscGQPe79suFjgehGEiDkAVDJKoJ3",
  "key10": "2tdfQFnmrpB1K2BdEiyCpHTgKrnJtLN5vAhYn2rzuGma9qsPDNaT2URdRDpYF9PGuA2u2X9H6c6pja1bYdURTEAP",
  "key11": "4H3bw3G1BXPesbp9vSTqfxPaqoNT6dst26iYDoH7tmtriL3tazXNxyhmRWoGi8zGhbqVh6hX1gDiyPV8AtPHq931",
  "key12": "3A9kerCCt2vyvjzwb7M9cxLrvXAu8osdBCAeXD4aeQYNyRXkxTgYdLm8htj4cSCdMJbNoMwofJMTKeeMizSv9mn8",
  "key13": "3XJCr3rQC1gWEJFJfdAvdPWA3SsedXeXjVLVnXE1oTPCDEPGnghni29qJQkYoDvEfweFWnuAc9pcSzbJaVnexTef",
  "key14": "5VD62xGtAGhWjdsVLdR7hWhqooeM5JF8cES3z4HwXX7ScSQhEAih36EGBY8mye5upPemEVuMvQcssqJQGjyoTFQr",
  "key15": "5QUq83Qv5scVs1NZugUSDUNM7XXu2gr3qLuuLhNuKWJaLLESEcaWPQzituXaTkjkR33TYuQpX5aT45TtQsFSGgsa",
  "key16": "5TQA9GP4GY2Ax8tWeQK9pzfdwh7GuRQUqkC15EbdLeHCbhRTe8aNLkDAggnYhA855f3rL8yS5L6hnfpDGeycGZdi",
  "key17": "4obiADDqkxRMFDCDJkMAboVyJz8XUHB54MzzrESBD2shYjYnvRdiWAU5fnSwTYeDkJfnCvWQqijwuZUHMKKcEwg6",
  "key18": "4iQ9wpXpdtECspp6FAFcxfmC1UCqGXXWWJDsrHVaoE5mLvaVr78ySUorXb3Jn1ghjRkBAogH5d9Xkx83uUow1K1k",
  "key19": "2Wn1WdpH8gwz12gX9zdkVE6fme8pkZ58gvbLVsVaFzjo5QQqz3uJviHkzPqzxuWYJsSiXTNP16gZnWBLT6u1vAh1",
  "key20": "22FQmptipdxQ7JUWxDoLVFk1fyEBkPqTuDVTUAbL2Yt9wJMwStAtAuG9zQEfrkMfNn2e5CioeiG1VKRaUHRRPC2i",
  "key21": "26e2AUWADtBJjAu8tZGvBFNsDuKwU5LD3y1QW638Uy8yUHLhDENf7aip7fMuxMH3ut1ytrxu7zHNcwdsdAJaVrjY",
  "key22": "3Co5N1bTh1DfjuVetyHT8K2mMeN4TJWMbWPRYmH9AnKfohxJtAiLVKgVbwxwfkCnmG7PFLzKYBbRMqvuToqR69bF",
  "key23": "5WewyRmDs2CzpX4VzAcUhGqPhVY2MnQ7j4uA7fJfZFzAZ1By9jxggoHnVjpyUugFK7hfbW5n9U8jHjdHCfkwWXMY",
  "key24": "21nbyrzp9AnV3RZ28s4GMfcojxDDwQ3KmK4AazHLdCY7CpnopvPvBaty6NwuBjimTxELQPMAvho4JD3HNzMzW5B6",
  "key25": "5rzZXeV8UqJEaZYEetWNpBEFGLRRMWCrzFg5uYYkvqviZroDUQGSpEJCMrLbFg3YYQAHrAJXgL84XZmmrL27FCmT",
  "key26": "3CLnnQKdb5cpH7p9dng9oRXBLJFmuhmTEQEXEPgMpavwHAVoZR8ikoN7bU1K5Nyqa9Tj43TKsHyhzt9YrLN5Vet6",
  "key27": "XxqyrnwMN626iGpRuUhmTvijDn64FY3kKzwXiXi5dDr1Mt9o2Ct5nnQkLmC3i3KxpQRk92Et5YjgPMvHodujDkp",
  "key28": "2KrYbCSBLewVDwBGJKNy7Zh4kxK2iyoDs1YJKBHBkQQHoSXgi4qGJbWpckvYmhS3uNQncK7vpawCcPbaVLBkiaw4",
  "key29": "3ahWDLFKfxrNet3S1UPny8zg1HGfH9GMUfAqocMZaUPyefeHwT15JCeF42vc9q3Vhr4CjpLFVF3qdQQvj5VAhvsp",
  "key30": "4sPA8k95FW2vEgVvKE16ncMGSbr7nJSNjAcCxJibc7xQDB62HdATDUFVLEKDV6ZErQNdDs2MAme8XAzMVqmA5Qhq",
  "key31": "zfPv29LmYxFPNxxU5oWkwvPaD7A2NU5kJgc1iC8xw9MAzTFy3SLsHtiVi6Z9TCRsL5jV1f3aiUseBAjVvY6EGMp",
  "key32": "4vgzTHcP31t9ca8evc1K2WssPY3oN2xcyffted7em2E2nrhHK9e6zKwGT3rgkUE1JsEXxd14vinQfDgrZkA4Cs7B",
  "key33": "3Movw5LQSAKwe5eADztB59Wq4B3vc6e48S8b2dZ9bBB9bBWUtMk1Qn1f83omyTXMA8m8UK5XedZHgcSLo8DBLaLF",
  "key34": "2Z9WxYUNhRcPpz4141y4c7Q5ffdJH2Gko4K4fYfoz8ggx6wGFqCfW7h1WKTvrQje2DXPzraUUTfehc3XPNxyGbHe",
  "key35": "5JTWJHdhq7qf4KzXCZbz266aozkKWurDoBpxewS6wnzkJsYjPnckZ1mvvFNUfcXVVeQarqhVeGkVVvbLLTBcAg5H",
  "key36": "482Kt7vCynhEzpgcUSdnquPSUN27mGq2jTzTT4MC7FzMVdKJWTtJP4ucQ4pijtP3naVPCNmZkUCgvPoPNc4sPyui",
  "key37": "FoaBtomjNvZqsfCvpV34yCnYH4tPrrrMSTCVvm5wYYzfY6UGYQqPW6sZbDJ7Va58WUYygH3oKRtBj6C3jPVh1EU",
  "key38": "2bVvXBZtYnEMJngxXTNPgar7W4qZuiyB6urKWbT1d2TRnjK5e4B5PB5rKDJoNyuGy14nEnMZ8r1dnGh1rzDBGM59",
  "key39": "NpskVjzcHwqsTForAjEf87XKuDpoFZcznm9GUxWVeN88osJfjStRFLBCP9CCKm72c8t5vzvBspoCg69RbERBLjK",
  "key40": "pDGLHAEyzZR3ThrrByCmgBgoFqkkYqJgYzKuZwjVKH2sE8u6KCPD9spzrrG4XS9qTUiMf6deKD4aM6ZhNTVHSKt",
  "key41": "2tQ5ukXe7djNHdDJPe7HTMKA7WCTUtzXbRpXAk67pYVbexsq6ZFcQxwAuFEhuoRzt18so7P1MrqWCRwkfQuuxm5j",
  "key42": "2HR18G3TUSMFt7SHaDSVmXBjVq44n9d9gZsSbj2WE1KnBL9wZh3ii5ZquAgKEQiaZTC2Ks5mh7K6N9TVxSS8QKmk",
  "key43": "5gpth6Wch6AuzCYXVFgEpvZhDPf8omNokAX8aBt1KULno99ZrcBHNPyzP9YV4kjpMoQGPDQ5tiKPw77z9fSomVVh",
  "key44": "5egq2n9GyDsgpFykyf28wi9nMxnZ3ieNgmK1ZQw2nqqp9LUuudKaif5mreJ1r3utXDnj7BYKQ9gPFW6gjbGccoVB",
  "key45": "4BhpyYywcZn9zespHgD4vAif5vmT2aAgyaxVdrxn5f7brE2PLBvTCenswPfDSwtCj8FqKNxJdrg9qYF7AUYRHFgK",
  "key46": "ENwxSv27K5zP9W8HK71NMCUHdvRGy3LGH1JRAsi8qb9ZRM4w5gUXvprnf8fZMsJQnP3oRGQTnevD2FMwxQXmFSb",
  "key47": "3WF9kLj7FjjTpZbGStLgRBSnbzMhsbi7DvAa8EA7UrXKnZegVdgtoiAa7Rzs3yrs1Gw5Gp4N6hn4uVwVgiqDZ8DH"
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
