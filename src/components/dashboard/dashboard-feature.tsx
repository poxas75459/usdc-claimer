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
    "kiNjudK7oHqhywexEkE9gw5BFFPzCbXk6hqhymZoTRvmVr9nfwQFYJTmXTHthYG2YvCq6TjHkUidKSipfxjK3nr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56p1kcVk8vaoLJx7NmwMpJhBGmeZWmFFmzBr5rpepk1RDYD92vnQsN5nTfgfDx7cfs6XuAnhne5g7Yv4NQzPGtAA",
  "key1": "3u35jDw2Yos1RR4HTmjmqhzcxtdGywoEekt5jRzdojtyUZHTQgZUZ3hnBXsbZZYpqsik7HpnyHsVh6FgUPd5JbDj",
  "key2": "3VkQ8Y3CHRnjVHHnkUkz6a4V5fvctqDsxVrZ3NWcj6CZ58LhEKAiXk24wsgGFU8e2ibgSG4Pay7fjxPea9ebYZJi",
  "key3": "4FVnNHP5CQvMDCZL81jidmVqEFBZHHULhGbGhFCk67RHHeDVYu2x5h16yF3BC9mjxfm2WVurqnDZoHA1QrvX6JGc",
  "key4": "2BtTXtqUUEnvPeHw19yRDfsu3HH1YmfYuesw2rEB92vcBdasBWLK5ZyxoZUkqC7F3rPo7V1HxA81D8Cm8qVvR8NA",
  "key5": "5uDSNUZ9vVTxkde2t9NRLPEWSiZw5tgUjMpVFjsFKr67TdTEvk6yCqC7yND5mCu9miFzaVvsD7rTFgGKEGQugSnm",
  "key6": "AM5h5FMzZVbz4C3kNTm5RtZgnme91YyjUJmZGPwYUu9QaxSTLJCD8Wu4ZPKeN48vgFaZ3931aB9XZJQQVbwasTR",
  "key7": "CVoDVeiXCLVB369iiM9oUFroB6GtZrpZkcZ1AG4fvA6DBoLi1AffEQzVbXQfWu4KYzFUPGgLs5iutkKZctRcEZA",
  "key8": "36gEwwsMo4H7sDryHwSQAmhaL6MtWd3aChQWz1XTFhBLHg8FetmZUELRVGVC4SkLmzD19Z3zAkXWPGFvBrUBQmBe",
  "key9": "24BeWbWJPEgVTa7oWKKS1a9PwbNrJ4Y1FZ6TdFN2iqRUtdz2K28rQuH8QSkFkG9ipktJD7JBnGxgiEckgfsZLCCU",
  "key10": "hud2bZg3z51kYpmCYf1uMKXg5r42SQMwfamhXdhSSVvJn4QxrFtgATmEVr45C7bW4nyscnWuwwR5tZtCaVSZyi2",
  "key11": "2RjDQ4ZRLFEJhnm7hZQkrjaB8RS8gdRVszL84PTyyrfjghqc2vYkmT21eTfnNQokqKt8gEqzHNDqGj8jt8wrzFPt",
  "key12": "2wX1fj393PFMt4EvCz2kWuzxZNDHHYLrvbbQpbkMDwRbciNAYGuvM2By9n93KCM6V1XAjnPpzedXpaEQtwBkJmze",
  "key13": "3wJCgvJLViJng51NSA6e3mnFz7qY6HJ3FE3zNHVdpedK8ccn3CA11ogFQEccdoYUhvhB5odanh5mx5e9K786sCiW",
  "key14": "4aUrFcY7Bk8eMn7Wm9PB6djDwvk1dc2RYec27DRKjubVHTCRtiNg9bAaDBm6teh4ZTEQxucNN1mQQrYDX4kXXFxr",
  "key15": "MPteGSUxFsXjhqqxrXZKEWD3kdSQu1An7f1pezBmbDb9dJJyPN8daRX4ij1WNCDfMSGpJNyZuh96GaxavsPLobA",
  "key16": "62WvoyDMGs58DtutUNyNgLdibuZCWU3nPRg4cwBxnTbogUHvR3eVGuNHbDVhD5dcsuGUTKtXLtwnAJuwsqfReLAP",
  "key17": "58ZwQw4NKjKt5ny4MKp7d9Lsq819WJkEp4yG47XpMPbMTQmaXuQVdDgu1Z7EVvs2yPZ2TXdayearXwE6BR4XEq9k",
  "key18": "2ZSTezWPRtJbSX9gFSddQT5jpBqzxeTUYCALqmUB86LVdsmahekEvqC88BEcmSd45EcFBFAsN4SfZjR1qU3NJjaq",
  "key19": "8d5iw8pYKsrdCj9zwsRDRqQ5LAC2j325heQZWenJmzownkkm9kffjWnX6KQN2qCtb9cywsP7kDijtgQs2bR3YY9",
  "key20": "5DtWFBYKCYKdXa4sNZ1i5Dj13pVtCvCEf7TtxjcH8dURDtVfbvotRMcpoKLNsMuyf7AqpBqCqkrjLBBCSQWQZNE8",
  "key21": "4vkxuUWzmop8sXSEoMBCqc6rhUgaFJ8YBtu86mv6Bc6Ntyj7u4cRKKRFdqdURGYG9kegRUaexwMUFPmgLb8Gs31R",
  "key22": "21Fyv7LGteooKCM6ddYbVBBjtekWP7gAXAaw5XgJAWFVxG5cgqu2yps5ioanqC96ZvhGg7of36jJxMyJ22bJYYtV",
  "key23": "2kGq34CbprVMtLVnc76RoEcq1k83BR57MdeRFECQbu1AB61G9gVAnZ4KNQg9av7ti9TZipdaxgxLQWGWCdCd63AQ",
  "key24": "zMyxrSFQXyjFXf2FhNwomdc45Rkh1bwF9AMaSCSJn92hyoqwxfqt8A2SvwVzVoYcjXBPeRUAdpC8djBPpgscyMM",
  "key25": "3kc49mfgkPWt1n8QTvWRSYc1BaAqqYvXBRsVRT8vnQYdJxHrj3QWGB9WpyfvFtmJB1jnxf6PP2aQtMTjPEpN9S5y",
  "key26": "56Tju2uTk7fhTzNVuyysu3qkZAN4KqJqkYujL3RHaida4wxWqjdNTUtS8FMmQaigSeW1QfBa2BSg6ckyZjotbaWE",
  "key27": "5wN6vZAE2H8DsQKgzFjzKJi1xjay3WEoqArfyhsSP3U5rZXXiVjLM284v5GsrhgVmKnv5vG66mof3WEg2wiptzsf",
  "key28": "UBJZF7GpfTNjmkrSyc5bstaeH5JA4aa9UNzJWyAbE4HHp4mNdiv7mRDcApJ91zKmLsphkiiozsELU3zhXSR8oVL",
  "key29": "2o5z1JMWcKYqs5f6VUuy9RbEuSPc2cu1hzj9MwEfKsUsfV2LV6h7QvC1tccuQJ4U7njbb7qUFtPUroUc5xrwjJo3",
  "key30": "5F8Hc7ANMrK7h6XLpeqFbUZtCre7KhWQfpkEnFZg3Qa4ebjCUATzeoRvqvjfW2y8cXZps7AiphdmuEZtrEfUYGyq",
  "key31": "4od5MjjRxE3zsP53HRfCMojfEh5yxxXBMxQdhgKaN5jWSUrr2wrH4KYLekr9pv9QywiNWsNacH3D8ebrP8hW2VbU",
  "key32": "5XCvhSpFmZEzfdAd12FecZfNE9YHSBsNgnVeS2SkvE5aNnYcysgUwpdRSVJ3v1fTn5DZpKaUdTFyhiekUbmwSsFq",
  "key33": "3KmfyMXVrg9mMbHvUetjR8DwaMQ5kx7Zrg9ueZHX6HcXwpWwvxL7gznC8o1WsBRRc61vGxtDzVBzpHW1biYDPNSc",
  "key34": "2m1yrUuEHiscofSsC7bJ2FZeMcRK7T1f4E5yoWrg7ZpXukJ4zmPRjpHSMvFNbFjrjhcxgmscC1b2exPyAbUaq3K",
  "key35": "3yAEyiNJnHtPx7N2Na58dhXfZmHT5SkNUJZcuwthTK7xhTkRkepBuur61bJKWRK37PuZZAF2SCHPE7NqBoiSS3ji",
  "key36": "25RiUNoF87yBsmzdJExFRqvW2ypeCjs47GQKubWX3UZAGEZzEThHLAHhDMn5cRduuowAfrueZbpdaHnLV49bddyZ",
  "key37": "4VwfdPtwd6ko6nH7BJaB5gF4gvPdeQx5iEXpCfaDsnhGFrFffJrV87xPGgfBFP42aVpDdsFEzoYSY332kTEdiEKD",
  "key38": "2vmUWT6Wvh67ADHwcnQpz58kZgWqW9syUYGcxpp8NF1fLqqkVqhowhBVQqhDV1xvRMCgCx9AGnmfEYLd1FkNd5jB",
  "key39": "4nBaE64MbtJMJiQnCgnUSR8rH8hmoN3iTTM62peP4F1Z8aBmQmRTNRzq4quikwT2B5CX5a6jE8uNRZetpmrQRvbS",
  "key40": "27aastdSbTCtG4JedzU1Fc1dzH7uZt2QuAKAU1GcfyyFLAJiW7ASoW4pgH3karLDJTaD5mDJCQSNbfC84ZgpSN1j",
  "key41": "53SsQQFEJzvSMYb4ALEqaee6zM2xi7L1tR1K8tsYTh4uUWHSF5DDPyEBDZh1BP4iuZgUp4bzi4TDVXwY2axQ5D6s",
  "key42": "4tJuVGpZdeSntRNL9ggu5ERm9ePCjToFQCYrYLbUJHodbavsqgxWfmPwnfHmjfex4Mzw55vkKD5E7uMcewPLPhfs",
  "key43": "5j8TmdTdJyBsBLdDkQ1qaTxMZzB3DF7zAjAwE8bMtHhaWWVbaoJ3gNiaEpueu1uv2fW1v6K2BKUjr3nXo4Nzrv8c",
  "key44": "2aWPKPrEpFufLJbaAGeqRfczD3D5nUWJBdaicdjgxJEoKmaBw5aPtngKaLKjLtAPVkKqD8BRpvoNWiMzdmVKkFmq",
  "key45": "3Yb8X6GWfyiBgdUyVDLY1cp8oFzvJqmYnd9RF25SYAxzvpwL7ye2Mw8naEsJ18ua6q9EbyWs9z1szFXjPXUps8gC"
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
