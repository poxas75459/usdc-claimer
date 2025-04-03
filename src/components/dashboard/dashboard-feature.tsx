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
    "2EHrZWm7fR18HCy2ewrdAmdV8CJn8esQEXWUfi7tEVr9eoH7rUJQ1s4xfyFFch5uLZv98MRPTbBirRsbBkZLf5CH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JaQ5KoQdfugDcEaqp4ZWx8zHyokXFpXX3B6L5Adzp9WMUhL5fw3nFGE3aa1Rsq9D1N2kKgsnECm5visqNBWQKhj",
  "key1": "5jPQqoLKgahCRnhtkjYjmbNp1VwbQag1wnJgCzL21Wce8tcExuBgasp8Q2oSJLQcCJqWt7rgjVWUiWA5b9BSrxGW",
  "key2": "4pa6b6eriYrBoqN9mNTe7r7QinUxcNNCAgvFNo5RC9nzeVUfZbgnTrKn945bUaXqfy45BbJx2wdfNNSoBMgcCEda",
  "key3": "4c4QKLWHZJGk4kdvHT6dfGzbCuJk69NWeqhqsd5FXzCrrNdFzLszHsKpABickCQA3XkJDsphtFBuNpxBhn8aKhKN",
  "key4": "2QhTFDn8ENrCm2DKJ3wnxPPfziHp6gtxFPuxSbnuxKJAAyKjM4FKctKWveYHRhf3vhsvGLvdyzTUtswUR58BdXbG",
  "key5": "hTGMu3rD98AParwbdZwvzh9axQhrdx5Xi23iPthGfs1f1DyFG7SkcHmnDCwab4pW3oSNPADX9GFA4fSMAUmAEEw",
  "key6": "5ZwwezJE1KLqp4bCSHywigDR6wDqi4N64QrLz5Xi6EJzqik67kL52m2uWpAEznbk2SoSNboPd2oY14MX5mFqpCAk",
  "key7": "3syDCcFoqwGy5dsD48ZTvnWxSLsRfpz1fqjrENPDef9XjbwbvH841xb4rF2jsQh19YJpHeQn2arNHLFMkYzyD7yf",
  "key8": "T6Ugp2uvJfHiqLCd8ZqcFpqJjFRqzEPUv6atbbmDxJpGmBpyKNVCdomEMe39vVXVsQPp5swUiDJabNCJRSjo2at",
  "key9": "5kBFwrLQMXU4mJCcT67esMpwuTeijXtSnoqhkFwgZMvquSgDmvkPK15DjUpGaB9oFRgdsHfAQyg6ZDQA2tuPZFTS",
  "key10": "DG7wghJYdSm51pZ8BEjFNyATGVeZMthm1MVSeK3fVBJqM1Lv8od14h2irYgV1eDvY6ekHb8G2PPh5BnH3jetfVs",
  "key11": "58C1oxg5nnJkHnjhopghMToE5sPNCkVQ5t8bGiFhjbE8UKfuEzESbaFL9q8RhmXbvtybyBBPz614GJFkWKirkRYk",
  "key12": "382rbdaqkcYfpgAZopqdB839g9gSLUXSrAx7hqnm66kY6xNjJ1bQeXACiwqmnMQJbBqM7QS58Szh8qYUKNeD7fgY",
  "key13": "4SPkmDgvn5HHUxqtGCUCQ4UxSNfoUMyQPMpYVbdXQLiWqV3miGEWVQqNVy3uG8GqLrBCQ3PA5q41cBq2AqRY3xYN",
  "key14": "3puSgdb9Aa8TtdyxjxPU1CLScHh5sv4EDEL51ZGb14UG2HQvxcNUoGSNzPQzxaik1G8CpAuArMjcFAk8ZNdmeTsp",
  "key15": "3Xp4SJYPznyzcbtpMghkwbft75n3RCHRiqtGySpqpsi3yZoHaWbLj99M7r4wNnActF3tnJCZPhjGYw2nP9eBwgKm",
  "key16": "2ZorGttK6e479dAFSQTpT5quiY5eurJBgMddGbBVWbmhy4AybFqNaXwE8D3MpEPqkejsuzSq3rWLHsZoDqKm51Ta",
  "key17": "W1fGCBfo3UEAgYzdymK2kCYYSoCkZ7A8dtLLvqMVUYQW4WTuvV32XzUJD9wFxHGQPMDoscwyDRLjcXgU2insGdq",
  "key18": "2r8PoR58kwYu8iCFiivmhzGTNu92BEXSXuxg33CnxJwtjAZ3yVGwytVmNmYMDVjTusYDSWam2mCYc4smwnrc8xCG",
  "key19": "4nEWiFVY6cJZr82S5arukHg2SAboyqosSKZCUr87W5PgmbTBYDw6aPZgcxqoUQz1puAkANXeDdSiuj2Y1zDgfcok",
  "key20": "3XnEPu2efQDnm4QzRpyQmXj1fLnw6cjZ6wntWTUAST9jxfD8tikxrDeWqfLqug3RwRFgHbKhahZZnJxbQZx3wZ13",
  "key21": "YTi29NQ3AVGAEahFU71zESj1x8hTLrxx47HcBNkbv9pdBM6ctkB4z2BDDomhT3tR9YoCiygzK4EXS3XwVAwKc6r",
  "key22": "5CAiRLPHRhdVNoyjJ5b4MXdrETeGUMBLmHfi9tncVYWEaADouKpeZQDc8nmj4C1wB3hK5PeTsUrDG5MA2EneJjE2",
  "key23": "5bS89tJ8UL9uxGjZq1NyzgroLyyiXUGnh1PFWS5G8weNCYx9goTkaNMYdx9xpS58jprsDmnkwRCBznAqq7T8iDgP",
  "key24": "32fJV2m6EVyAmEP3HwW8TkpVV2tjTYHRwHDUBNYaMYCbRtK27BxnrXQYXgxajNmmkbAx92kJ5DvuR4E1ZR6T6K9M",
  "key25": "3J2fMTwcXxcozyesyA4yKwTwKJZNTFNhtWiPNa8Snxmr4PC56JU49UYkrNBTMZCwpht85j4on4c6PUdXrMzR3XUD",
  "key26": "4vQNK7kNSKC14Dg1VRCtmMDh7DvrbXJT2SFMwg1vqEwsMyedZRLVAEvAkS5X6ckhiVSe76KzQQ7ZWP7ar24dB7Gb",
  "key27": "c9cp8LvFcxSpwk7mbnzcVUmvGBTCtMw49Mr2jXEgyDg9KMCTKCxBb8CxmfGPBrbENG8cuoeSYUDEkjcHHhgqrdF",
  "key28": "4MiDMcmBed6CyypurVMPCK1U4sk9awWcSLi1rKZLE6jM7nz3FxyjTUPrt1bZ8rTtcUjEH8m4F9FzKEENbMvWonmg",
  "key29": "4V7G9nfo7uX61EJTinNzp4f6B9F9dpmfX2BcH6KiSFRViRVaFZ9r4sACyyThv62DTEG7DdZ83ZWKEAmf4f95JLwy",
  "key30": "2S9xd5RMdJs7VzFoXvfoHY5MefwgL1Fo2o86nMJH3Fdtq2VstAWn5qdaTPBXvmFkHWKZCwFnzBE7F5dgDYni3JWu",
  "key31": "xxjdTXPWaQ3xHAEkt4S4qiC9xvdsBrMb3Cc4tyjZdedd4gVekLMq7CCkzoceAYThBUZ7mhFCWt65uA4PVvxEjcn",
  "key32": "3mVynVRoS4v2nG9SjfrvHcqCneZYu5DmtKRvJgd6YhavsXT6VHm7GgiUCwox5Aac694gHvFxwaDwy7kL1a6sBAAe",
  "key33": "2x9DGxe74Cx1epBygbFvPbRj9s9SQeR1qYkaNYHDLny65ikr5fsKQmwpfBHv51QNTjwV1XGK4QwdAKf9LeDBr2jk",
  "key34": "2gEwxoD2QjEi6swp1Xeqdp8NZoBGASzVdRjXcQRXoYnoLj3XvV6ghobrGBuYZRLeTeSQqA4eNQoQ5UZNzM8jf57x",
  "key35": "3h2DdUfJaz1TSF7uVeUeZxv1eFTaJ3HBKvFiR84H9fX7Ysh5YUBfP6A1hn8Ro9gHExe8YKZJDQtKSuvmDvvbgsc9",
  "key36": "2V98WCWTLj1y11jyuMnrdvUVUhLtLZqyV2hSVqNZQLy2nq7gV5YtLy8NUrPmFzRmMuUZ6xaghaNeRoeAdte3aDz9"
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
