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
    "4inH5AAUjJS1NY9v4fWNKrxa8Li3b5k4fdBFFJmNKWLkjmzw2TY3pAm2g52yCjm7dm9jzey6tXv7VPmrNfDmyRpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Npdvnak65PtsAZetDojq8pRLk3TwY34uuVuZaT4g8pQWq8uS8Xc2oxssFAfVF1vdoWVteDxfZC98gLxwRAFoDn",
  "key1": "3hXuK8zNAGUj9bnadA9fhbQDG3Mn3h7NBa4dDhnkDFHWsKYKxqHXqGpZDRwVFL6cr9HcjCkaFQivu9GPXvLiV8MV",
  "key2": "wpmUQJCqHPc53njjGpAwUiTJzjob3BNwkVi5t7nLsxLYS5VQzNhJr9JnEA57yu8Si25oQUWTHMwjmApqgbwLZx3",
  "key3": "2zXqDsX3YUTS7VJ4ywrHrnJB1wrqry52tsvy6RgGXKnsqZabkUJfH8k1BjVoA21xAerG7ZmpAhqfDA36wbEdd2VC",
  "key4": "5iFSSLLLw32bkyFzubdScBzYvMdrEtEo2nmzXiKVjsPajTKhasYKFmAPcWh6W6YovEwWVK8dYhPgpSG16XjERgRe",
  "key5": "2iJ4yeh7VwenGUipCCEj3jaX9cXR1c4aaERyfBV69cCRFfkon4n1PL6H9yzRSPYomqNhziNQd7KYX4aZMac9fKML",
  "key6": "37tCtVDTRjuLjv2b8ZjdXastMByAQ8X9S7T9bxDaQn18PnasEypbYE2oV7pGiaCwZUq2GVdqi8ZxR451a31PftRD",
  "key7": "4p8Si7FzofNeLn7mCpsiQy5ma7NhaA7UH8Wip4GAqhWc3z1eaqsFBSUC1iK6ggUBQN1L9TnjgZK92njXwt89GozW",
  "key8": "r3xQwqb8wB5T17Qk2U3NPSAu6X4FXebgWkFNuzc8vfJTWYjMZpPebr2mTqHfdsGQWWP6ESkrT1dcd2dkEuGPjQp",
  "key9": "4zExUBSq3cbra5zvtcAeLiEo27FUaU1S5s2gryP5Y6Nnm6HAc7X2Hixxhaa6RMKfUaTBMEqabZnADyjTwnHpHwhQ",
  "key10": "2otNoZj6H1sTWymgT9Ubb5UWRUa2qfHYk4CcdEmd97941nJWMfC4MxYroMWn9CtDCBWukMAAWwd4cMr8RsjVwzXa",
  "key11": "48FqDMuTnd2PE1Vg1Qu5UqMa6QdGTJsWNiZDtBJzk94w8e4rMizfFtZeseQYSynC12VivswtLBwJuh7Qk276BJHK",
  "key12": "3s8ePtxuNNKgrdtC621Hod8UtEtSQD4kcCMX5gSaEXffAg3ZU1ifLeZkx9UKhdepSSF3aN75LMhdi1pVsDLRYZsA",
  "key13": "3hdLQj2vbamXsVNAu2F4MXaLwLFAw1ryLUt8Gm3qGMcxGtBDNM5wNgXpQpVUmm6YfBEMrN3aqf4JamcQoSHeyxuG",
  "key14": "gAoFrNHFiFKPhLpp9b9v2RMVADmVoDi4T7MAqexXpd8gYmQsXWNmkyExm3GqA11jTWzvop4hZ3wzU99cJntm53G",
  "key15": "jetT7QAEiHg8RJ1NcWrZBePY9MyEPx5yVxTe4RUTfeAbs6qgUom3nzDgsDZ21gPLxTxgwxHrFfaBp2r7bLCaPX1",
  "key16": "4g918D5gCuTnTnJTLPBmfucCYWGABQcMSVRLw4US9kDG4mjawDCuuhRnD83SS696yg6tg6UFungiiuWVMiiSHkdj",
  "key17": "4HyXMvmxQXELjECgwm3TX4uvdKGAJAqT72bx24ujTduVuousjxbzfZv9BoLpPn81BsGYLm7UY9ghYfAjk92wrkjr",
  "key18": "4aNGT4mAL6SnVjEWF8faW8mTM8TSVf8NnRaEGM83YnbeQjNpbv3DDNzJqzwTXKNZmf9yPhtNnCFKjRAaod4H5Esr",
  "key19": "5qTvxvA17VGYhwUjaST1Fjn14hwndnFmJvCGxvGsNEXiwjj9ALZCmP9LKdhbV5nPFovFsLgzTyYyB2xEK4PuVkwm",
  "key20": "357vtVzttySVRnYCUKW6WQyUGY2VEkPhVcxaY9QhMi3sKkQbvnM8EPm9NykoB4LMaUCJhTRywx3kM4q7T2ihMcM8",
  "key21": "5N6FLTHs84UYHEmSuoT58kxSTJ9ngAiCf3UdPPAzzi45nktWFPmuoWbsEtHYoV8ft2DGFc8p1AUFc2HvubsTv36",
  "key22": "acbPjZmNhfajXSYQmw8KZVDywLpnG9Jq8HsSpPvibJ96toxn99VQ77W1F8ijNNpUCmkrnZWKoynHkhHULw6STfd",
  "key23": "WLU8JiLzSyrz3JmW9ZPCZCyDfFSfBNc8rixUH5UUWg8jTkVeRT5Azpr84Xftfqy6jeakGrooyeRZnxfhGtKSHhF",
  "key24": "21BedLhANwBxirD4gkLFXtbcAcCUBxffRjoQvF5wYQJ6d8ocAXp57kcFJm2JugN7Q7nLK3TGY3KFGC3ZxAhByvSU",
  "key25": "4HZSY3S2Y7oC29JAdgR6VbjaFj9Xsm2MSqCLcaz53p3Zq6M8gkSVGxjpzuBLYeBjx32QuvZ9Cbj8EidWrPMsMECx",
  "key26": "2CUHUKCL1BdhLLDjfK6qteYyzwn4nrhziCGk6hxky8o2QYmW8KLWq6vdtzMz4YPGe4ox2Kr8xE94iXqSKzAHH5M1"
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
