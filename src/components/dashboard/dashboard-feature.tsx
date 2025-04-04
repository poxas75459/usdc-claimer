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
    "3gyreSkWwdTHGUHk7rCTsDZGonVFjauEYi4KPqvRN4fWUczFWEVhJPxAYgGJRsAivyuETYMVmP4by6U93gCbq4gu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cB3cvtK3bRJqxZMQCt3eHsKGM6dfL8uhbBRaNtEVEtDSPsS2PdXsG8kdoqBc4yZjL7pTFxPZEyw4h6p936XDHVj",
  "key1": "5WmTnXSKjsw2ssHHcqjpBXvimNQi3MMdKwuXMSTxFoL6B9Zf16u3SjbPmrCu9BX1HeDN3bFEncVyEXMVsQKzqBmu",
  "key2": "41wrPWoZvPNU19a7pPwhigN7v9LC2JVtpN694obFvApDaTqgM11ePX1NSAKmxdZYNZPA9nJSoon26YZS5n5sfvJX",
  "key3": "5pA3uuef9uKS3PwmX5bEFon3cTFrV7W1aJwhP8SopvPcGr2yJnbYLjzyvdhdgLTtwySCqCpBMDaxrjWibojNWEcw",
  "key4": "3ouGbNQW9KJdNFFazSx8MdiMFKwLyy4ZoqCxovSUyKkZYF7a8aMqrkBAZqjbn19wjzLWgFYLTSYyaQoPtii1Fzr3",
  "key5": "36886uty5kGbnHRNGYp2w5pP7f8msG7dzb1omj8CXXP4n9LBtQ85tXkyH5PE6P7gZuVgtCwQPefRmRGpBpC3STv7",
  "key6": "59eV1B2NM4Ph3VvHo2oqJge3kvTg5qrVE7EWeZDD4Uen9utEpiesDiGQfxGWoCKhqGZmKxs9ZfJcxHhteyJTymf9",
  "key7": "3KVT1gZfhZpHHixRP7YFekqsU6LbSxRDXSWgtTkyphzXndnzT6BxrzaDamBgeMZED6VXr2xmAzUoGEJkgRTXwArX",
  "key8": "2MBcgkUSmnCZchX4ZKUyebv92LCmtLEe1SUYtP3hSo9r37UavHs8Af2LBx7JrUj5Z4yS1a28DM6H7ERKLTfcnAAm",
  "key9": "uSHZUENR6an3P9ThdEQUdV7EW6dBKPbr6eUF2zGyc14PdskTgxop6DeME9AeVjodeM8qdbeTKQ4cK45QEaEzDNt",
  "key10": "7jJSMniqvAuCo5hvNdVqtxpMWoRDhvvBcx7m5AJByhgmGgrTK5uny4WaEGKxJNYhc44DAV7yqK9Wgppon9i5duH",
  "key11": "HsAkQa7LTJSB5RmNBQY9scBTUBCtmchS2jh15np41xHsrhfJmwnf3vyVjSbfCKFcqnPvghZctTWRdUDPgLF2o8a",
  "key12": "212TeUVGGwNzTvPFvvykhA7X1hg3fs7UCiNrdrnLd6cyjRMHDdc3Xy33GPA4T43mFYe7P7rVCp1mCngfo7UmhqgC",
  "key13": "26aNJyQ8qqKmwCqhEnaBvA1iEPfVjLbkVDCuBHfJvKhFbx5xzF1jhPTuzJVaMtVvz3dwq5QYX9aSSfx9dL2KT8rm",
  "key14": "2Aa2SVBq5MVokfDpjaxpVD8m23aGYtvaCk2NewPSzDfXHuFLxQkS6D75qHFYzcdfb5oqArRj419eYXV1hD19RpSB",
  "key15": "5ANPgHUhrc5PE6Wdv1pUPFhwShJSw7qZXKM2jfBrsNPc45sbKxGtqXMdisVhG5krKMRMtKSydUK3iza4xwPGRGjS",
  "key16": "3oH7WDqr5J6JAsgdfRd6sk9J56ziwJEV92crvuLL86z6a3hYUZD1GJQe9Vqw8R4qpsis66AYro8ebEPfCtWwxvgj",
  "key17": "5uNas4J8jHia9cRVeTZD4aaMjVy6m66q7Zp8F23b95PbTNqJqXnajq1zCDcQUGBRam5dy3ohxTpkcxhrXexFkhCc",
  "key18": "5ZLcEsPndFvup9uJxV5A6VYWUocX8nSbzKSmqinsK4HFdsD3zEJfWBnfpZXcrFBvEFJvGas7T4YJ9mQZC6ToPW4b",
  "key19": "3rLZtkdKQ199PnKu4jSxxjBGU9h3WN9f8UqBMCBcMwtKrrwChxF8nGRzSidndiLmZVxvXHcd675KSon3hUiwFb3m",
  "key20": "5BJMUBvX83uYSpKXhQoDpvBfUHykgpvuQrH9AZfG1mx9AFryEx5iFuK4eVt7CiaRWVujeaHwkpXY8hW8RNzLvujq",
  "key21": "3yqoZeJpoGEKxKyyfmmFC5AAJTnrcjT24ka32LTnaSZez6D6DaGzvib589zFdjGg3mM242SCFAJ54Es53pRjLNkJ",
  "key22": "59rMhcfwoWBdKxhaaxSTptBCJGjqRRKFkAjhnaJvhDiYPaeUz8VQF872UTV5ZER3UMJxUeodKqLsJtCDDXkEYFhV",
  "key23": "4fojoAogT4EAAcJXDWVZVtr3a1vjNF2wqKsxCWB8Xkywu4VVRcT5mor6SSbrjJ6c71HRTppDkCNutEhUEowvNGH2",
  "key24": "FHcuP98dZc3xMcH4hbiFBpGVHGy7zbL74mGtJXxVsLFEhpGuG8vB4b6TwBoCbanQgRPYA7qrMiQ9amAX9zVMMCf",
  "key25": "12A6c9oCYHCgtWaL8YwADgGJXgNqCdqGxHF6xLptdCsehjU2D87yDnn6ExpeUhtW5TQ6RhH21PGvH2KjHBDHKZdz",
  "key26": "2FTexEBtmB4caWvo8An5CZQH4ZcpevRU7zR6VFxEGcS8hjQiLvcbJ4gc48Sakt9WWhDC4vkVXoGMemxQZQNXTmjh",
  "key27": "5DmoHvdeoqeVmxu1ri8234ufdBMn2RfaxhGPVPXboqcXftAmf1MmD49PzVcLGajAvm7uE1Lfwtfiz7vaj7SWptDR",
  "key28": "49EBBeeKMMQVbQ4a6Zz2zwaUVXVfwmwGrDdmjbfbixzcAki9wuApxoVwXRupAdRqT54nsx9ifUEirFk7VmX4NtNg",
  "key29": "4yEVL1rAHwJsYotEpyDtyUbHmaudywwBLCjmnVjwvHrC3iD7FDnHD1YeCSMo2ivnHVvhCkWhpKgKYTdTqKEZrx9R",
  "key30": "2qqhpJZRtxbskWRpGoTNTnoW2E3pKTL8mCn8gT3tY7LR46cyCvm6G3UE984v1zaribZoor3ZReUNP4TAqisHkHZz",
  "key31": "5Lm3JWPH4retGTz193ju5StGpnF567RYHKYo9wWodMQi7irxE6GhYhgPJy8MY6NK3EvYUb4QjnzYSt1GTVGQrR5Y",
  "key32": "sYdtCAbwPavRXeK3qEZMsmgR2WPjcHBbpqtCprboTzHpYYQ9fjKp7mHkHVY5mXVmfhzgh4ciJorJFSWcqpxvdF8",
  "key33": "35G8r4s2rTc2VLQQ9qm2PU4wgcXk2MgCa35F2tC4ECHTurdz4ABrCNU87Yf8sJp7Hrm8SjB3jzAZuKxR7R594Qjy",
  "key34": "4qzUL9XSVFR2C25y2MihS4yx8n7d9FfixRfyMD62Na3ibWXRqobvh5Zev7869JfYQd24EoivKZcT5yXBNkKHTHFn",
  "key35": "41oaivrsvGdPq8xHaKLHRACuetNDJjAnXf6YZEVXpwrhFH8zpopsjvNBT1ACKFx5cTsewyCVwjJbas2XzsBifBxh",
  "key36": "35f1jKLZykkJGqPd8D23nQ1bbcu4Ne4KMFP8QfuzS3yrVMZ3Yrs46bQGTPJZFT5tfrR8F1J3JKoSp1qzTnvRoAC8",
  "key37": "5KPMZmXgKzHQcN4mVNRPFvDhEZ4GdyEQSvjmoaKQ69zGPEG6uHqNgUU4krqunyugdVfwAg4ngpG7GwpyC1eSNQNU",
  "key38": "35BcWKMuW9gLuvFsTH1wrpW1PPySwryvPLkG74S1BGmUxm4JNcXJYRvWiXxzQhKnsKYJMMXUiHPMH7LV1BcSXkCX"
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
