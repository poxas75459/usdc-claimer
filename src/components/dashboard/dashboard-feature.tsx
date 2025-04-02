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
    "2jASFPbYppWqsTQ9ZDxfMcY35ybc3v72hDjkvSMfJCskJ6WJVyWMGsJ4YJFPtq7x6K8myX6QqnQKh2FBcPXvmuip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LGYCPG4iLCSLDr9YDHHwPkfYrg2oCDZrfKB8bBDWquiUc2esjk2scEcQdr4jXV7X6aVPqFTYL8hNC3rkLNtQ4YY",
  "key1": "65VTxEu4RNnFX6UCARgxtYVPff5nq8yi7bt4bCdET9mFKbJc4BSN8L3tRtKvWd6fqTkh4FqoVKpraXNoLwYiCMYe",
  "key2": "5DfL5QMSrzqCzRTJPXGY94P4PA2CLKs3t3DU7EpcKLuDEpkKgCqvWwyg19rqYnM5FPwsJbWE2KY7tgX6kjs1sX44",
  "key3": "LYcdaYdkSsVwKoWXVFjph3VTadwUzGigcyZwDR6aEuZEwnoMx76PjuP83HqAsaShkYTjjnv1yPumFqHU7nGjtj3",
  "key4": "5LVKvDn9NKQ1WvMTeGnddNm2EdND11vEBm5TD9YaanQvhBibdP7aoubscQkQMooDsifzZYdGxAdqFdhvGrxCYrSd",
  "key5": "zqyZtE2WYd51kVDisYkU4oRFC7Wbu8vUyzfEpPnFSezx15BN2oVhxS8btHe9foERSXRd4pQtMbn3k2ZjrxHY4kp",
  "key6": "3JrSckQ7hzHqyyovzqXZoABVkZhGPVc376envWAVXGFn54GM1cTB7nChBfwZ3Ke6jAK9dgD7nb8HMXszjzndx3ZX",
  "key7": "5EvgD6q6aRzrLpXY5qMgYMuDBr3a8jwikgCtZUUtnkE4hcGm8o9LN7vVesx8PibCfRngseQSidCdtWDiovq7QcL1",
  "key8": "4Fah64u7R1VpXXqE7FESP7MPtn17wCdZJSMWcwMnkvcJ7YvLEPcYCtvpfSHaqibwgCChNPpGiKoFpgDpTw5YKuE2",
  "key9": "4t2JzxECSRyY76GYgWZB1mxKVPFaPEhf5LNhN87zfYA1w3Tg3JYzpHYGKWmZZVRy3DwS3w9PZ5BFcUkvFAhwKEbt",
  "key10": "3eWm9vZjuJVWsPNAcKUoMX43uih13k2jxMkKJRgKk5JwkGCQSVYChJ5Yfx4NQn2Hpwc2BqBSUpjusZoBDHpR11qn",
  "key11": "3vznJ9w8gPaoQjwUV38bDoRMJTqWa6oYyfZbQufnYeFAqt6awiVbYMFsWuczz718P7PSMxJwzLkqaWytfmgWmE1G",
  "key12": "2BWzRR9GCXsvipm6AZdn2Fmrdb5WzboTAGcCQB2Sagca4eqxfZA9uhrWT5yuStHARpQYNsU7E9N6zYPaT7uSEac2",
  "key13": "2PyDXof6v9uMuw4PHtxRjazarYtZnkstfPLnSsdfW3aaExtk3Kju218dXWtPPZXvfLQojDwzHJMasR8642UjhRJm",
  "key14": "64c8t243GRGatfcjbuPEaJpAU2qNQNAUkU8dah3PxRerFL2KrjC7EEpx5pbQmW7skS6kUwKXCxuzyuTKjtaJemY1",
  "key15": "4TAnwaAbeYC8jXmhFGEBudGGC69FuQet6w8joDjqJuQ1gTf9c3UXSqeTt3AEM3g7nxuY4UgwbCkj71Eiy4DSmkw5",
  "key16": "5W4V2qVGhJFrdA2YTgngkqBzc47EZDbQvZxy5WqQpefRAjbac221pre1x5TGi8TpXEmT3TkaTRrkzvRCg4hurKas",
  "key17": "5YQonhjYCxwuV8YjGusfKuc76V9tXCCExyVAqnxDYXR1j7UvCAZ8ENq9JyPaMtAqpV8sUVe8NUbVBTyr6tyLYX9H",
  "key18": "4TjroZheidSABEYRuH3CScMtXPqmoUUhrY7KEJi3E7VgnhhL49s2GgqQUHu2Limh5obBDvpxm84mopcbDxUf6TXs",
  "key19": "4JBQUmbL1HSHvbu1Hqgtd78m5HoHj7HCok2xhru4jdn2aRy1ZfbJqqEKjEvBTq18kmBo4WV4H1pJCast5wz4cpin",
  "key20": "2b3Lbx21uQ8J1TtNwTR2zJ5q5MdhMD2RcMudFfyLREYzaAAY4CdkFMPh2iRzSZeHhGtUzo9TJKp3ggBt7ztdLzu9",
  "key21": "2zUSE7Zzh2M6m98LsuJC4saZ3s1rp7LT5wYAnjbWHKzVyeLLK7rHXzUgTXxxtea1TNhkah8zvHfCmLaf6L45n9P8",
  "key22": "n9q9Z1o8oAi7vyajJp9AB7oNrnWELoMxrEMFdsb8vyVDvXSA4don9z4bk9cF8u3E9wVjz7uWxe2Ukwj1PLZjFF8",
  "key23": "2yLjRmsiWRUg8c3rSxdqibJQXYfAyKGKUij2756spgwXbFraoG54LEHkHGbgdo44K6dBFUoRoRhodS9XoB1h6fGF",
  "key24": "4sDasamBk8ZiWjiC71Wx4NaRYhUbniZmXpBVa3WHvQJTLEW1aPjr3X88diju1vPC8q3us5qMDvsE2is6ZQK69VXr",
  "key25": "PPZKa8Q9RSsw2Y6KUgG4Z3noE7ymiFSF1hyTqxNEHErDBo3gvvLBC5ZiTZqHhRBEQRi6naDeBcQcY2zR8tMubN6",
  "key26": "3i76SawtCrt4sLFTtQhxXp6Ad1wZkGaFywVDp4Pkj83GPqdpvpUsxHWgKhAiiNCVVbUHg3mwaZosvca5dwXiqRLk"
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
