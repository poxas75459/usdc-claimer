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
    "4U5vEsXc8mk4jPEhycuCSMZ7V6UrYSyrCPBXMhG3Cn4HpFybR3FvLpEYFS2NkoFYT6L29wbautW1m2g5PwhGfDwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31X1VvDsKBihfMywQt2RpKK6BXWZvbB2vTBTyoVxRNavwmfKvdxi7MDhJvSJXNSF41ya4GLMzX8bxtdgzfg68xMs",
  "key1": "2CcHbYwr2ZErdpKcVjxVuw82ccrRMLDFaTt1K9yjrhm4T4gtb5kyi3wKW3ANRhUpLu4wD3nqFcHLbCecz3rrTEnL",
  "key2": "5exH6L83tbjcvygs2Hrs8E7Be2C6FcbVFLuVMof6K299YD5dcqtTHZQsJee4zX7Ych1Ab7H6hZL1f3rtWteLkevs",
  "key3": "5Yo4JHCAw4UwKJ2itNjeAS2ie951zYMsUs7avtoyz5SqVtEGXqgRFmNw9xfvXprvapg6rQhsgfptjpJ9qfsQPpxj",
  "key4": "2e4uU3pukSABBfSbwEGPGjWqJn6reKgf8cRN39FPhwksnG4Pj4UvwuqJkwpwyCknCfKRnqfy82FXyFMyYMg2M31j",
  "key5": "5uQRgcqGQda2UVWdPMAAMNAfDrWsg3ZP5qTrSnZfhdBbzXfJp2oJaiCzRTDUhvf8VGmcKne3HLHqJQyChetqrTyS",
  "key6": "4wsw9RjErc8yvfG4Y1rsNskcSbDiZi9R8Y9WqkTm1oE8tdJ1vgUCxnX1XCF3oyCbBjZCGtyd4s8QgyE16GjovcTq",
  "key7": "22PvAyZ7z8NdJn1yt47VUA5bHL4Q9zicAVrAPpBT3XaByLogdMn7r2DFKFdNzDhAR2cbXxnQQPnfT8qTet9ravX6",
  "key8": "3KqDN8VDEgAjeQYX9TWJ7srgB2LDFjmFtcLLKxtf4UvkYx9TaXgBkGa38GWvpBzdfgL394N5Dj3uDNwC4FN6BUrK",
  "key9": "5Jhedu7uzT8QGDmDoRQbW6JcAMpxuq5AtJvraU41YFY84UdcHvdNgfLvGdNjWj5hdZA17JxiKmanZWUYXAp8E4a4",
  "key10": "5gcEFTqx3xNwNpZWqGK5C4UBdwMGcYxT2TkxyTKPhGG7CojthCRJGCscGuUFU95TEwUReFDw7QF9ADKrvoxsURWH",
  "key11": "4HRg1pZPeRtHUzjBweb23doDDTatSUQGQX3vf2Bn4ToVP2RM1EvXMNyrhiJvyMjduenXEZjwuUkhSWNdnijSiHQW",
  "key12": "5YM3gy7e188rMZRcC91ovqUd1y5DTCSP43Hsa12bV3GpAP57Ho4zjneonG5SMEaqLwtk9FWvd2EkAn1r6UsbZJiX",
  "key13": "3gZPV6hHQAGp1EgaZqhcD9VNs9mRnpwa47Z6eRjVDvApmAkpdWLn2Cga2YoR9uSG7Sz97yQ2BGTQv8c65f5i2XY3",
  "key14": "4XTW45WCpuoHnKtwWpYR5JqVvea5QZ4aLWrycePuhrbqCzAUgFm1dXUnPa4k543uXdoZbSZXATKdbjCxzGLxGH3u",
  "key15": "4KTuWAT6oZ3d2LoHQeqmth96ueX8hxGETtR63cHHNW7YpNzGx4YM3zmpdUq9d2qH27Lr8d6QM3zHqY6iGL6mqzb4",
  "key16": "32c9bNVnnNZaaWouxVm7wtmrtXwiMbrKXa1hHf38yJKqW9dEVjXwcKStqSvr4m5En9rAJcYTxDXJDdBzo4MYu2Wa",
  "key17": "58UQRuLtTXbPEZsVNKgQ97VfeLxcmkwXFcQs84mivthxCVUso8Pwy4CWz4dD6kkb1s4K5qhNesbsL3Tw8FEE3xVJ",
  "key18": "2sptZZ93ehxsuvooiEVJg44KSkykgvh3oxzHx17S1xwiCih1FgUxnxZEEkLQ5PG4zTo54pw1pL5mSZHgXrokzDxG",
  "key19": "3vUMVvoPodbYb9mzXaN9TAa82CZcKXZjBQGcsi8YmTRT8zGYHZGLnMehmeCwHcUjF4FQ7iAjHjaV8eAKRmCSxQVq",
  "key20": "3r51V8QNU3M84YJWgbcN8Z2expL4qaPxo1jUJDE8RoYingJ6KLYeb2ufAGmJfovEdq17DiXjKtjiFjMrtt9tkcch",
  "key21": "Mjb1uFnN1cwoxoju8j99m6p9BWDamvaxL9AHCheKZMpdZ9QvzVNXVYCe9JAczspwdo1Z1ZTbGopkGt7Ww9NpxbL",
  "key22": "aYxUNS79T8FR8tv7R9DZTu3P6ZwiF4bs4wiWUBWqqEsbZUm8dwNainKvvrxP55K15Qc1MWqeUqGXtBE6khNUL4B",
  "key23": "qmGYa5NxVXVxiBmmeM4MyFJEzNWMA4tD1YD2121hBPA34JZixnYhusDuLyXAAzknZhBRZQbyk6623ubS5LkbGKF",
  "key24": "57eoNEnDff5sT9NBF2dNt73sNoGF7ri8YAsvqyb5zCCTy8xJFyg3nKc42SVuUe5KbUttvJVdQd6wHZUnDn1M8yMA",
  "key25": "52EMw7uretx2A5mPAo9ngPFjQNyAHU53KTiNGAUFfBQ9RcKrnzK9vRTmPcokBDRpFxiFrSTVfAfx2aDCMP1NDo1d",
  "key26": "4h9szaFVnV4eARo35dF1ydKX6tpxCNBy31fDMWL2Y2zwoSqoPUvkVn9r67rt8oW8Eq4mRnCCT6reFC65CjSYKsgp",
  "key27": "h5xkNydeVH7vKHFPXVbTjx49zKGAy2xrufKgMoTnScKJMXzoqggtDmY2ybaGBCxF9Xqd65SBGm9Dpaf1cEZL91W"
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
