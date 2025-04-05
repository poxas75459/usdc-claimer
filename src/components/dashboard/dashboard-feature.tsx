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
    "3CfddySFseTXNh1E3pnT2qAcg1Rqkep3XLWEZTxt9KivXH4yzj5E6hw8netePdDQuUBWXFL7gYBLPUYDMqL2phG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QaNJLU8GNZRvoaBX9VNgo46xixDLvnVt1Qq4kMz3GbsK6AyHCdgti1NZ5iv8oNZA1TLkuNPs3x92jL4yCWqnNrB",
  "key1": "5TdyY6ubjqoa8d9hi437bictmtzufZs4yaWBjQHFAiY6rL9okNySxH8YqQpRaeekNTPouqehVcbLx75PB4MMaUaJ",
  "key2": "51ZhtuhCTmGAhgMr5icfsRp9Z1BtW5DXjPyVLYbRSbC1q8SbFdytFi6zXT6uGNgkSoaN3NPzMdtprCasCbJ6G22e",
  "key3": "5NoJD31ZJSeTQQMi8oWt7kQoNmXPRbw2sPUBDgdkn3yhCZx989faMnfj3B732vLtq7g78hnvBnPhmDn8ELgmZbjr",
  "key4": "48Ud1mhv7SfJj6bivKez5tCdcd5L8z6YfBvF9n22sDLwq3toSxhz1MpgHSJ9qWBr94PW22qmnMLuAGGHg7Q2iaxP",
  "key5": "2bffaAHv3uwWENQ8PNzsoBA3jvEqfJAAW4eyLXA8XcZpnMaDmyzGLM5vXuVxPLGWaoesnrGuycP4LdGJxWfg2ZNN",
  "key6": "AgsUg2yZyKUWSCmXtY3bKtbVNjy9UXPrAFaHgtkdF9dKX5FN3hkwmo4FDC8QkB6gE1Xzp6K54X2pqNjmLd5kxTd",
  "key7": "xopevFctGbiCsXa3Mc3SaPsBnriLuRie3GWgw2EFCsZrNpQ1UEPSi1vPLtys1Qyoeqx1K7hy2fU8a6GQvJCd7wr",
  "key8": "5GgcxuXLYFsPiGUGPC4hgqX7hs6UPwmGKSzK243joy8JcKxDUd8VgBNMACi5VYAd6Txgu4xabGbuAWH7Ts89N398",
  "key9": "fhPySzEo99CcT1949WNb7fZCLmxrFx1JLZCHRYCb26v4fwNwVX2dxC9iXN6d8eQmXLBPRLtegexVRmRQ3Mz9veU",
  "key10": "2mX2rfMztZD7bLiPEdKQdS2tj4rR3qeKukZrduiUJQVYo5ivsfjWiekmY8PzYPJ4xigwnSDQJ7SGsiqz7LxLvxK8",
  "key11": "2x5vGFCqLTLadHG5rJiSe3JjhcXtSZp2gYD1W7KARgeN6BY5BHWsPrwzrdnmVCV7jhdVYUGdDha8mLfDTHzc9YMs",
  "key12": "4AphQwP3iHbHHXqtocZYJeFee83Q5JQ6wsxZoFS4GmXs2vrGcN8jkKBsJme51sdrqX2gfPJn2nXtX7Rt4FzQGTv4",
  "key13": "4zcAsyuxE11hchr9Rr3cCTm3hjtczY3t5XeqR95PYjc4GEsY1nYsNAAndhk2gtEqYLyJFHZmfzQdBDUg8qatNVXN",
  "key14": "4nAAVbuKNxwALBAbXZfpxJqSpFVyDyC3qVqfD1Z4x4aUyNYXu84nFuY8wuVrN7kSawUsZQ6z9SZStumwGZcMtGDR",
  "key15": "45N5y971NAJKvcVmoUqqvjrbWdGUSoq8x6LVAbSbqaBgmryK93UTSmuCNPDzkCKfoJTCj79LiUSm3tGmeYEgjz64",
  "key16": "2x2MyZjhxXehzBoLxWEQyCafb6FDCL8UeyAMeNTh19rirdSMMcFFvqFPrftpon1sF6RZTHz6keojq1ECTETxeEJA",
  "key17": "4LNpxiqobx1qPW7BVFs8qcqwVBkUR8rCnKFC39b83maQMERU3XdoMDqMeNhev4cbx5kH9i8PQNPLTFE4HsUBt9xy",
  "key18": "5HgB6FWC1ucnLWwJbxRLMMvjG4RGmuS7PAie5Znhe46u8Jo3hMCyZDRdTLUTzDLNMa9G4CXDwKwxciXBdW6hTQW2",
  "key19": "2ad6enw58ERPniF3ugJdjuG52XQNnSx8w2yxtBaf8QE3iE3dD39F6xdPWakmWCnEjgZx2q92kPLfbC8vk9NmaUrw",
  "key20": "4ZnNuKos8go7fTfYiHXCwkruf6Lp7ofXkJP8pWUb2T9TDRxuqJFXsz9iA3eVgBiih2scTxdHNTuA6tLzGjfpdH6J",
  "key21": "5tSSquApZPALscUzYCfrezA3LBBUWVDg1k7EYRmeN13DjNjCgaYmJ2hbR76gWZXy4npNAtJugjtECTgLQMrDMyg9",
  "key22": "57coXQjUooiyJmYnJtnTo5mJtogqM1uf6CAgepxHwD2dqB6scxnp93n1CJwYsqd3dD1LU22MPvJhPQrNYANPwWPu",
  "key23": "3tVv92XWTXazwdKSrYgAb3yG69oRGzhHutqFgbTJmpDNG7fcPUMusHwCESXkMbL3hQHVB44dyraDs5KdfcAFvdwM",
  "key24": "2HQVGr2wWqxRJAuMiZm257PNGnF7wWMvBLqH2qXRCVqY2F2g1jFfv7QL7AQezgYGve1EkGQkHirwB1FaA2RG8Kxi",
  "key25": "4yxTTgpQ3FJQwweQitpsm1jaSmKqWRDvKgvNTJsBLLDw1xYSq4YHBBTQHjEYE7Jgb84Z4FBtsFLEQqQWTzhCHRmU"
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
