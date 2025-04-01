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
    "3n5gEiUXhUNWk7U36SaU5PRKuoedGDnuUndgkYoPPgBKhvss3zX8afiTYFBQhdDfVhy728sK4t4F9gNXnx8ATSTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SNhJWc3NLJdMFJCbWtpkLsQNWTKjxCVMdggpExJcdiLNwdmrvXWA6fcBcJ4qHDwsYkUyr9pRrAjbbKFGVwjQqHB",
  "key1": "2EVpzFfrtTBRB5Hsj3omp2mUfrLniahAa6QbPUyd8gQyrbwXMKKuQoagpovj7dq9FEK5t68G3Fm4dAxX2uw2MttZ",
  "key2": "5hbRKtFAcn4cBFSw76yRKSuowj2qhmDFVQbmqYsKtqBygLr1iqM9fnkfafiFzHSRxa7AQeDrR2jYQFFBncYWz1ZS",
  "key3": "4ABkmVB9hb5snykakfdERaKo1WpzxD3LH68CpU9mKMDnPspsmLgC2fRhmuMDrV6DXc9v2e8VrY9u9kbz8zYEDucH",
  "key4": "2xcr6hwsASpLTdajsV394sNggZK5zKBTysG2ZcNU93A9B1GnjacnGsA9HKaVpgeUJSBWZH95bbANSgxoKzMKfuk9",
  "key5": "2pR6XRYQYM38b4j6r9Ph84omZcw993tCRjYQx2QRWL5bCixmHpz3GvuA89C5yehcGMmJBBhejdJaNJ8dA8KM6uYf",
  "key6": "3eddKvUs3a5yujVLMe2Z8oJvhrjNsiSXAasHeWHD8zhJ2AEToiSqBP9UpheNsSL1kpWnrM5hXVTUYS7VkPcxetTz",
  "key7": "FGEYztt77diBDNX2QodE3aV5gDTXVkVHVTJNCsXBEdEaz2eJumkdgW27W3Dtt7sACfVsrJRYkmfLysMCWqjGmys",
  "key8": "jK5rqBUxXsFQWySidP58enQKVPCvG2Q3cJZXYSDq98ZnxmN2a7vWhHy9ThQwMoKTFB3dWbVFdvfbTHcWJFardTa",
  "key9": "2p3WeEtJYnZxmC6sFeuff1uj9iahmWh2r8FP9nNvmkyJhx1zatXkD7Jg7z7p1w59zsetzWLamFTA2xPpVM3kkPw5",
  "key10": "2RrqTvcxkKBcDJqeF8vHZdQw8E3zLqaJKGENdeBhcyqNQaB278SnCjKPkEA34YJ44Kh8ShXZYJChHKdx2wdAxAD5",
  "key11": "6693iBKdn1W82J7uvrCnKULzo3dLsT1sTP1XeYQgPA33Rd2AfAqB8F5CPdKTr2JdcgpeYkNnVprMr1FjArGkD9EC",
  "key12": "53ZwwzQcEvrk7ajcbXqWk5cmhGAWGHAtHHDKD937VQ99jY7JMqg5GiBoNxzuTuGzmdcsanUy8h3Efw3qZNfg2q1u",
  "key13": "nqL8heQAejjSXsmuQgNU78uHw2qwNre2JVxYVNwEEdLLqGbCGSJuzExPbxGWZBQtAumP8WxMNgn5LSx4bd4JDbx",
  "key14": "4M5DsuKRYrFX4TBhqKTdabyNBhQMGH7jNLbnQYNG3ZA5SNSHtXhRzLZdQfir9JLwTaagzyEnbpuKNhYvLD4Zma7e",
  "key15": "2VZ19iWPXrokVjbFkd2YA63Whfow1ECbbZP9JM9edbME6dS7aVB58ozoUpRboFDCNXjV6e2AUvjzQQ3V3ALFeKT4",
  "key16": "51XqDDJ5d7jpL1hjqYDZ6wMSjZAzmbr94nDvGtJAFVkw4Ex5atUGi7oAuVa2kiw25PRVvfWUg8zbb691a6nVx1Mb",
  "key17": "4VARYT47tMsKofrXGRFQwZsEf3kVdWtTtMrxVodnPtTAvx8PBaek44XeYgfJdPMDSu7XsNMWLqjhxvPwdCrDbDX2",
  "key18": "3e9YPSHav28MqETxSSGos8SDvEV9uN74Rqpo8UduGNq4sgATS1QAoUvNE7ndxfr6KsaHrUD67ukNMX6HZ1nZ5Hg8",
  "key19": "5Q95Ek4i1pU3fjo4Tn4EF6nEFcxdMvwSVbLQpbGGDcfPXsWzMjXhYZnpQ5BhiX7d6DxYetf3nAL9Xh8NqdRDX3Dp",
  "key20": "4KZnCM4eRykPoVWztq8wYkrthFPt9Pf7gNVyjwBvfjsQ5zw5pR3KA4HLJdzNZ6ya6ejoQhtKiK6KSwM2X6TfwnUy",
  "key21": "5Nbf1oHHtbFgZz6vKRNKwbEYBNyeeARJ1Nr9YzzJkM4K9EN1j6GDyhXhpG9TnWGCooJYDvEAiwUnTt2V5tCkpgvo",
  "key22": "2CPE34vU4cqBvbn9TuoH8QgFzQhVR2KMx4GbZXwYaCpMLYh9jhi4AKWHNZrcSkxkz3cSbQoNiKcV69UiKnuQ11zj",
  "key23": "3t2eTrpHP73sfegw1qRKH28qJS1dT8TB4AUC5JpEGZdbgWmgfKE3pvNZ8V5kYSkB9T2WtuZCY2cqYMLXPoQURXW9",
  "key24": "ZBFnxWP7fAwAdC69qBX7phZtsfXXeHwtpkZT3xp5xSnQXbwjdaWBf2aE3GzcK8MeYgJBWVg5i3bWzL4aCTumkTn",
  "key25": "5guVbe6rPq2DxDdAXQVdc5and9KW64p2eG7azxDkdSvN3KDdSTZxDah45T6hFMp73qKywN69sFj9ZCpVxx3dbbV1",
  "key26": "3rJ9WPXSAKDsnX9UFhx1UbEHRGzjPeBKCELGP2nZjqVi33vNdZCZdQz9wsdeMr2YrJbC5poaBdnauQQDvRn8fWGM",
  "key27": "bpWsBNvfiLdtxJo6Qi8vFPxhyXZRBnA4gSKaYFzQGXs8Hwr4yV1FtsEwWZo9UpwgNuzp23fuauhxt9EbjoLEgyK",
  "key28": "42ha85UAN3N8ehocxHSx8x5Bo3VeM1sbDiiP2RMXCdCrjNeFnoGFrwhNfscj2qeqLLmJHVy3nxyE1hXK6gVSL7G",
  "key29": "w1vKqu5PajbWJsVjMwSJckc9zBSkNHo75sdajWnrXXRZv5X83ZJVVtuK7wDQkmod8ynyevkcYZuXJQ5Sf2bUVFr",
  "key30": "4E1V14aY9ohXpt5xJJuY8nG1KeXgvTsAAmZ7P2CfgrhPyp8LU7ZKsZjimURhhhjqryGUhzdKwi9k5pWGBjD7Viw8",
  "key31": "2ad1HTTS1bxoLHq22rvLueqmCq48uYf6N7HYBR4JqskLECPsohwaYug4h43eufMHmibi5c61aiAkZCP21rGnUnV3",
  "key32": "2cmQSTJee5X7TXggts98Er8bzCjzTbFbDumqAHK3ybgyjnZ91ZethsdNn2DNoSnma34i7Z7uSN9m5CvwpjSJdwHA",
  "key33": "34sCD8RvYcgnY47k88brU5e8Wki1C1jms9PjQwkU2ztFRvvs2SAPJymsZW69KDyyAZYVdaR1wyuubmC1TmXeNxbe",
  "key34": "3JBjSG4fxSQjnkvBGGYAXX7W74YSL6fapp7g5gBgRCDSwK4XFW61mDkFEtDNDPpwn7S9VT3kqrRVouKvZWTiSSaG",
  "key35": "55ToNJLgM6zxExMEdYsgrVUbUUguYPHUBxbS1pABmNPQbi57jY5VNeVECYbQgGuz22GcWEiSk6EZatou1KFmmGvq",
  "key36": "4yJ2PkTHeooUvAiqsRegFb6Wu8KdCEAonCo4Gy8vM3NtCfT98Uah4DW5sUQ2Wpz1LTKzNSu3r2t1XnwC5hFgVoFi",
  "key37": "HTJ7jpVGNuaPnZ7LzfSDLQh56Ks7xfC3m2wREApoFKQfX1dkTwWNuvSLiA7GG13BouRRU5xAvKiyzrXJp3Rsm2w",
  "key38": "9ReeL7sh3dxHJGzwhvrobQKx2zsc7ZezZ2N2gXCBekowzTWLB6FVD2KUTgzGF7JQnnhaDibuUmqxiMpv6CZF9zf",
  "key39": "5jw94PnDUVVCxqwqazdoCqXRqUCwjACJftoag3bo5Vw46EDxbAcieqVSEMSosj21GHcTPFDq91S4GuVQWxqFmkBj",
  "key40": "3Hyk3GhJC1HJNyqaV5zL2pPJFDhA8F5NMszYYzZnD9WKdHdWaywbYf4EpUbKBANh42xv6LwFKpED6TLsH4DvVVro"
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
