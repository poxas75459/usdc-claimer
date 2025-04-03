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
    "4hGNodayhyDDMgpGYZigxmnLb37DqsAtAWybZ43bLMiEnZeKkp8rXgW4HzCHPx6kpP6uEeSGDs2yQdsZ2FpEHV2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RHUn5Drk7hNn3YFo4zpvAAEeSNmLRTDZhcpTSaw62omH6wLjVFDNCmBMDL2w7pxuXdvvbtLESLsTvSKAzEABZfn",
  "key1": "3GwcLPVtRLsWHxXQPrvxx7gDfkNxRyC8JxBqy6ULavYr741Z3xGtqJvH8Y61z2UYRc7J9JDyezhtyygdrMV1z3xY",
  "key2": "3AFoyPaAhuXFjyM4dcWN4N1mxhGkTYako75WJAdx2ixrXRUL13EMy7qWPY7LfN8MnHSYBEw89BAz91ufiaJD8Wfz",
  "key3": "4GHusbA1YPVwQb1yZpYPFYKVtB5Ku2XBbvi4gXfaxahCrBDFMiUqAEgeZrwxo2F7Fgo3bQywFjKXPej5c8XNY6Ws",
  "key4": "5om9ec5hy18hnPtJqTRweTzFbWGEgg5HqcTHt2MCsXr1pNYkw5CRXBZ2CW5dcfKefyWBwn2eGa4xq5VeQRUm5dEG",
  "key5": "2YJU4t5EJ8DZxPmTLZ1uNXxWFTeprihKSc9UxWj7KEJUY8CnvmfibzZYU35j1kyvY5NQxuYwnyMkmH3EyJXjVyee",
  "key6": "2Vo7M9AGbDFizPciSnzGatQzw8VWjprWtmXRMXaLYRJ8YNtU5WEvxLgHeXj4sfSn9s3gFDpYFrdP1fzU87Wjseb9",
  "key7": "3fP1LiK5yxgwFDioL4XTuYho3GjEZMVPUW5ozc1PwzhMtH7R5X7nz8GzMS2TKofKM9zsV8QCQUKtrp9uswCAnupP",
  "key8": "TkYR3sPoYmWoumX4dCCFb5zyDeobGnsYaV9KodUxsBNDFaVAnLkoXRhymemNwzfLh3Rb3gBJap2YfGC8TbWYaUf",
  "key9": "52dbgHDwutLbyVrEKZ7fekJ3xQmxW6oxR9HXdGqsj6xp77Az9e3qVSkgxCUfNKfHPAFwuY6zRbfC92chjGQJcJZR",
  "key10": "2MJaX1Wo2mYExYYtKeBDWzygHsC5dZD6BkHJjiGrgGSYSQXT1YYvJBojhY1wSEgLNtyuzqQZKEMseQJhxWhxdJas",
  "key11": "4XbwCWM5qJpshbq5Md5Ew7HneednVGBpzFq9my7jebsvepwSMibgdV9Mdi3C69jh47gPfCb413xriSKiVhDr7KaZ",
  "key12": "3ipoLppGz5b5imc1hQgqwaxw2842rfDBckzLvGhcNedDQ9CTKjH7qEK4HusppDCx4ZuT1JySvWH6YFb5CEbkhyyt",
  "key13": "iBrP3qwfmueMwzbFtZc5oMZ2FT867TDHfsUHNvJbp3Lw8E1sfzL8aetg6fkKdSosMZvec2GWsTP834v1ej4AWDW",
  "key14": "4XCYy4ctv6intoMX4cCrposyVgxrCpYxxG1VgdteWEyrG9ig1Vcp5k6MWVsLEqM4bmYwZxToQTD9Je6kFxb8y22F",
  "key15": "3iRFUCJ14LhDNPG4pvGRRfjshX6bBnCSM47f4miQ6mJqiJJv9DEb8Wrz21hgMiRdTyhmw4sTFFW4u2xEq4TkxvtL",
  "key16": "4E3wcZgeqyVb9kHzcn3nYwNw4J1sFtSQorNmRYSFLUBRDVivKBh5FmLYWsQr68vtoUiiPgQUP15PFNfitxq5MT5F",
  "key17": "4KptjNu4S3RkRuU5A1Fj8UxqteY7BAWUiyMm6badZGyjjSR2vNC7iYBoRjoz9QKHMYzDrYRtUGdRoqSzRXiQdJNT",
  "key18": "63LwZE6qDGQhw4fnL78YKL5cAsvDUVebZMj6pXh79Fkc8YcGm6SM8crSxSMMm5YC5kX9NxLEtkahN1hJujipu3QG",
  "key19": "rhUjGCYj99Lj1TE8sEhd9giTQEnRQB97bKFqD7LkF8oDsY14i6gTZctUKRJz5FUnGD4Rt5oGyBXFcFk1o6yw9UU",
  "key20": "2TMwf88rRwmpPsfPKCx8ixW4JHkNSAyciASsbSj7wDtGX2HGEJdV3bZUdfa4PMxJiffy5vdAkowyH8pJaPGnn4Yv",
  "key21": "4ewVmw6pgz7co3SBnuGRZbMkScX44wvEZPhL45DZaC9oys8bRE1jdMHP9qohSzWBBfLnmBLvNgtFBdM6yyti57cx",
  "key22": "3WXzArm9hN5xz9GxxmsgsTUb4uqS1NEB3RuKdEmpCU8jN9gQTYfJCHNoesGQNib7fwjuJtChZ3a4RKnxC2VzmKYm",
  "key23": "3Vb9pHnZsoKu4qN1hyF2FQzRvLuX3m14YftvG88XAcdXtdHU6yBJwwAjJkCWEoskmARE7j23noXykdUTRSJnpLWo",
  "key24": "3rC4zkHj7xxg4mQUXxhgKerBpZAJ7bK7GJdqrvkYpmT6sV9PfeXi9mRQBVVENrVezqFa43i93hcprRmhF8HScHNX",
  "key25": "3KkbyTjY3zhnDp7XE4f65Exhjb98Qu7Df33hbf5grDvv1SKqRLJgLKpG1TXzFf94BtMhmmavTb2Qt7ozrsWc5WtZ",
  "key26": "5v5oa9c3vdLoyst2vzb5sDR7Azis5NiYTDVk1LbBZcFFpzKUrvqbCwLsogMZ1w4xhkxpQxTpjdbRPtgoodxzERVi",
  "key27": "BzY39zkzjeN1KXnMVSYhAGkysWdu5bcZYYLWWgENcN7cZZmVRpABAyZPYpJXMvKFUMac6agUghtWAyWPyqy35hk"
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
