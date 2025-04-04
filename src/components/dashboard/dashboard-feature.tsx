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
    "45biX8SdGPfVCtxA1EtjJXRjNghvUPJov9iz3T1SHfDGsNu1jqspmq6RE2iF9ZjHg9GvqsgEWrYuh5NCMrjftRpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ftdqgZhZ63z8LrQXxVDWMuNihEBrewBcoLXXMhLKLjeYQbUqfoQtV5UErcFmWPTx8wA6jfLATLnT9RqPVfvAudA",
  "key1": "3LuYq11Uu7GjNXdiGqL9dSUG1KPYGsQYi1kE6Vmzu6Pta5U5H1gd3T8RMshNXeunaN3xiPeb2L1QVMpJibwPnEHu",
  "key2": "2x8dapW9mU5zW21ALD8xVUUxUhHcYXUtaWfKASDtZ5WcJZ5dkWxJ7oZohmC5cve5hc7CQHMVmHEtc9ocwJpCWnyB",
  "key3": "64K7wVpqkNYmh3dAEh9qof9A2LNK27CJfRyitRfLxjsruw8GhkcZeuzaDpHDvRai3xN8Pv9hZ7SXVpSKgMmUpLmc",
  "key4": "38yYA3C79eWmc1PdrHBniL16FV95RohoNr2TGgS525YKHkwi7tuaoTgMvwqBcbQ3jYCuj2oykBDpniHvygLzvksB",
  "key5": "4bjJH832R92T5N1PZoCiTU3Hs2EXHey8h5jZyUbZfwukncYrF75NtKgT6uNqEFhKjjLXnZ9fH2SacByRmxdGgjGY",
  "key6": "2aRU1k6oghRppLqzed62FCmTARZ7WDuYTaRZrhnix3BUcxFK5GtJ9jYw9zDJLhi31iDVE9Li1RNFA4jvFjBF9fFo",
  "key7": "26yMbsJoqzFHnkLN3hcq3EVqLNRETzncnrLE7iqVEje13amaFQjiuX3pztmyrxMv4bZ6atGEZePCMy3WBMJfyanA",
  "key8": "M4CM92Rs7jYEQCUhfjHiFdT8STnVFoKyp6irSF7g46Gh4UiLBzUDbeA11URUM5SAgo9HJ8KdkK1Fh8SYSdHaeQZ",
  "key9": "5irgvsxWjuQT1uCUTAMHxWQgnr8xXPgM4GeHSnLzdtMf9jbt61Jm4c3UYm9XbCudew9ZkkNnK3dmwTKjFhduej7g",
  "key10": "4EMwDAe2L5ZdnWVqq9Y8C1KRzoazTgeCcW1vyAnbZ1gPeZbyaW2FyqbZNYTdVoQLZxK1meGQu6fDSNxHAvuEeLrx",
  "key11": "4vHcEFLpjiRNDwVCpMCMjGyrpMB1cSHUuEBh4WKBcVk2ETTCMzR9JnJR3MdFc7TZ5GmURyTNrnBadZF3YccR3RDc",
  "key12": "RTLKtGZwuyQiu7mb1JJ22KnQQqdFkoAv25vHsWdpm6T1hVZgGsHidZ6iXHpezcDtDk7b9D253yJPW9A6hUezuS3",
  "key13": "4SCUBw2uRTCCwUXjisGookZK5dvfLYucCteXLQ6PUyg3bnjnWiPRLMArpJ4k1Zfdms13xAXdZqSfKXfp3N43uMNH",
  "key14": "PR8daJkhef8tXJgMpNmdbZcAe2p1y8Z1kiSpvU1WhwThF9vcZfjysM1AjegPz3XqiHHdqxgBSibw5qKRGTLn3XP",
  "key15": "4QhdTaN61FsPKKTJY92n7GkFfqmGLf88ptosFTpcyQ2HDdYpz5JFyo4bHYUGZfmdfichTVpHSprjfF5v6cdMTYaH",
  "key16": "3uypJdKtXMEU3zpyBb7ZCP5qsVhFPTiGaDuLXH9c59vcrx8kTPDNuF7F638WpHzjuuwBHA2fVqxKArVjCULVh5ci",
  "key17": "5122Sb21PqAZiqVAm7T25ZKb7aLR4BX2LvKiGM1wmHjnpnych7kyVAdym43RLELSHbXLkXATCkhcSuSFP1PPG35u",
  "key18": "3V3mWpNpL8D6CpMFQnFmYNhNYtSFsuKY4pWvWd5aJuaPnRE9bk1qjHuqjaL4QUkpfCRVzmGqBV3YnztdGxNpNrQJ",
  "key19": "2GDY2JWBQGS9jX9gdTNHHAmH6izZENvhadxYzPetgrZEcTaRy3QiFsR4NnTQhJVGKEmCfwxChAjg8YCWhDGwfNa4",
  "key20": "41aYGEaZvApGXJF5d5edER14dHyUTTmsE1s4MwG1aF9cv2UqoVHhB55AhvSgzYnwdV9u8UwbMHA6z8Hhj88B8BKg",
  "key21": "6HFVZjhVqRuSi6L2zDacFpBiZFyjfwwa1FwaREECSgY6jmU47MWQD44gVhYzqZWu4sCF12mvuYfTWADKB5GwapV",
  "key22": "3kFHaVc6z75EZX39ZuSM4uKcvFTt7poftxwt5ZuvvomgHzHy92PYamFpnGAU4a6W53NfaE7cC6HRDnzo2wBkUEAM",
  "key23": "2qLS1ViXvrtSv9wN7HyPjmE4rX7Pfh8U5VTAfRWBxc6An1oGR1VBh1khyb1wNbSZQWvZfBbwyMnwn8V9Ake9YTUw",
  "key24": "4B9NH3P4tNTpzQR6Aa3iAp8TPTbVGnS4ZrvBJizbApVqAGS4i9Zn3xHvH415crDDrf5GhN4MJ9X1Q9WtpLKy6Jdj",
  "key25": "5yATFd39QD4CpFMBpezmnSYvKKRGLpapBSxuyh5S84uiFRnGFVNSAqbx2RZQBKWzQ79AW5cvhsyWLX4SHBqmswnv",
  "key26": "4dG9zpJe7kj984ecShea9KPrX4VpDLVZePawtfir1xmw9rVtKt12Y29NKJfsLnaF3P5q9uMNHyLPzsZeJhSvjZ4X",
  "key27": "566aLg84ndQovDvdfURfP4JQRrFtv3SWCk69xMhz8x7GgNsmdALaY5AHCg5RrQmaSP6v7HhZJAHYaVRHwhsjgdt",
  "key28": "25W8p7oduhdcBX3bA4A5Gd5MFwRienVt2nhBYVsN3KYE5YF5owxF8udijXzqpzHbWn7MYcmmxUmpYdpN8gKLCNf7",
  "key29": "2D8AGue3sKLS1iyEhKT678UhYRF5wqs28SG2vVK9uqLT4HUcrg2r2v4b5XUtjMG2ZrckH6sTMZyE1QsBQomy2NiK"
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
