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
    "wXjvZipGakLPh9LnPEJnbL4fejP2ahbzUzB8H3mFAXardT1TRKhSCKsPp3iVmeGCwB9drACkUwNiWdh2WWS9HXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gVrSFfX4UdeiGMRJQWp1QQGzArGrg9VQb7JLpX6KcTgqCS2pWtx8j6aNNZoibjocVR3bAJTVd1p6WSstPWEZC76",
  "key1": "44ZpbTxWFdQFGESXdVi7SnXNvhUDPXj31YhzVTMponN7j41owbErwrF5emU58PqStgMErxA1vD2Ah6wemx3DaAkC",
  "key2": "2bLxiEfw1oD6JoBV5L1MJ1dJSbZg9GZ4aD6Axw3cEqDRVYtK5ywqewm2mWjdTk8cfTZ95eMGj7yTu5DbQAwtwNPE",
  "key3": "aY9kQwkWio8vsvVEg3Fv3uEBAxKm8CwFjf6Jzzwm5QT2yZuo74bfi7hWfTwNhY9SkPdAmZVoh2RMst3hR2LfKwa",
  "key4": "Zg2GG4TFftKArZPfXFWR3XTya9y4r2o8gCiVDn2pzNswwb2buyjBRCduF6WHsoUQQTEi6awaHApNLuyw9zEfGis",
  "key5": "5jW52na58n4mU3qkfHowqJefKf1AJ6qymNG3GpjZgVDkGk32whHeHvdwEZpGYvUxvpHtEuntSq3tCKrd4umri7jo",
  "key6": "rcDyoKDJ8ccZSvyCoAyD8wVSdBdd8Sh4yrG3Nw2kKpnEzobGNXcPU2Vr8cqeLVB7svSKpXos2kNB8AMx2Wh7XmW",
  "key7": "3CW9HnVcgJLtDrNWkPKVqM22SznrPveb65wFAj1uGvKVfa1kPsFX3CWn6XBtaUGQqAvseDAiCz7QY3HsvT6GfXSZ",
  "key8": "5C9ebp6WgSrCin8MmaURWRdsTDgZmDfcFaqnG6k2umgo9RfQLUKaFYfpqEooK4biZihG8z3ovFtrkop2VVhsWQmb",
  "key9": "5HXGB8Jfiw9Btb9Tfzfa3Rn9YCD1WXWhEwJRyKXGhGuUedhQ67Ukajixfi3yuq6n76BLj4LhJtqhh7aPLGJUiYPs",
  "key10": "5Hy2ZzWthKuBnr4bNpGgTEZVpqSSpVecVeFKZVJgUS2A95YQSGMyWMtXTsmXvv4oyZ4oLMWfadJZavAmF2ZVGhHP",
  "key11": "2czzKcs6Qwu4B9zRgCPX2g9TdM5WHCsgimwvzkSt82i5EvTRfRe49qKVwUasbkC17WXY4uc1kVSD5mYdXqPEkxKk",
  "key12": "2yNiWSy6iS9ftpqeMs1vdyR96Rv5oxJxaTZBoBFAw4oYhK3oBmpk6owEKArKkvqk1NAMAhesrT266xNKqetW3FYm",
  "key13": "5uVMnw3AAh5LEhH6mPWnb4yUmAmBfaX5AXXZsZnvWCPfLyTARu3iG3o3XhjXLQsPNDxtjhyWoRpfw2djpSotxDuG",
  "key14": "5ZuLFkMc9cWVJCXTuATGu91RrCmC56CCGjdE4HdiHNZfYskgYy6T9d7A22EYC5RfwAUpUXBFqvo2XUXLuaHmNbco",
  "key15": "4aNqJxq5unziSgw9Ee6HcZgT7TK2VtLkN48Cud4FkttUHZYYiobj5GppK9RkEfx9WC5xU4mMfEGxp2Bp2Ex4HXUP",
  "key16": "56QpphhaTTjG24RRbKkJHYBVKyZpm62fTXNMF3SJbBcsgbE3CP7oHkhEBUJyEFzQqxsqTf4hV3KowQNuHyEchdnM",
  "key17": "5grBuAtptZYdCKAKYQzPzuMcSQKv4Ve2edv4qGbFezR6tDLXVncyeRufVh9GtprMF7QCWGCYjHwxoK5WowwHsJVa",
  "key18": "HEcXyu8MdM259iFFzJ3Bi9BT3cYuZzRfYqXsmbMG61ea5Fg5Qkra5NiVCpnYLoekmQsQZaxW5Ac1cAM2wJwzeAJ",
  "key19": "4U2nAZeUaNDTYBsTEjyZJKXcf8E4aSVkbKPLbVM3Rf8hEDxXB5hhLYFtRwZ8nkiLEhrvjjuFZVZAix8Pw5GTHeUi",
  "key20": "4XHf7RD2RH8bgyvxUgwghKCsAkK3ygbx2K8RxY2ig5tXEJ2Bq6LfXFbA5K5YTSXjq3rRsA2ceV37bwhxYXDaHFBz",
  "key21": "5mBpZqCbbiuKvgVwwAXaJn4RRN7HWYPxT1ZQJDyry6eb75eavWHaVFFNaANLm9C4Uxaji35Z16WxpTN65keerS6m",
  "key22": "32XcHEpHVVigJEh3KbejDAa2uPUAm38tgVNiG5CuAuy9L5wFHEgTMYbHi1fKXeCgUbBrsaFL6dBKkPKB5aQLYSSZ",
  "key23": "2dmm5351WY21gKNeVxLxdtunsZjJC39YPMb5p4gFoVCaXcE5zcDckLWdpSgYQvtGxTHGmiXL4PYSeG8SCQDc5eNQ",
  "key24": "2VH7LNopn9zwfT1bSoHYEpXuZZXKnRQCHtsX4z2pUc9ukmHXLD8y2UiuR62GTCVsRTKSKpcDdY4vzs1oQoCcg4ok",
  "key25": "4gm557moFwSWCNL2H43nowCasNNdgJki4qX9UpwgLk5TYoBbojSt1UHbSkt2cjuyY3FEkvaD4ZwykhunfUqqnrB7",
  "key26": "3zHoNf9eKThjCgpKRAkeYTcSdkFacXsqpWnuJfb5LCN1AunKkUicqhPqLxkX9JjdtNb5Pj9VerVqzxCEeTMWYD9c",
  "key27": "3FoeXoHFxR4jNYMht94pLzNe8Rw5haic4rRChdFqbaH8Rw1ispe3p3nwfK3KEjG6ryFEa72TNeKpkuBD58kPAxZ8",
  "key28": "zrdH9zEWK64yZq6a6NtPhMLe9V5V6kMkgXVKf713B8HpCCTMHv613VKZEa4bWqLUZ7c6KqBPwtx8qkQVPVvncP4",
  "key29": "4RxvELhnV5s9RcTaaTLSjai97nD4bdysx1SAaoX9UiWHx48wdGxN1nWU8etwuR5k6R28gym3TmsYwRBYZxxU6zqC",
  "key30": "4LUQAZ67KR7fUTe4B5cpGFnHxh4PL1n472Vig2bKE5kLd7A9ZvNj8DN4Az1cjyZsc6NWbQsXKquoshs2WvAUaDLY",
  "key31": "5V6HzQ2Yjn9zAvJHDsvdMveVwvfSdb9nKj2WtrEdqaH5KCzbYLYUafxwjcs2HXRKozBXXSiJNTaWvgBavNd3zTJd",
  "key32": "ABfyTV5ayro7Xdb5EWrHPSJa5KySurticVWhgbfPooac7hJYmxxaWHHeyJoWHWB5mNzamWNZLn4HuCY5RnBkpg3"
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
