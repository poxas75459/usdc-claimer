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
    "56J4GJh5ZeCpFouYVPsyQFMzhiZaG5Z5MKr27eDydybNCBMVVn3MoYUUsY2umGZxr3oFQXSnn4YPBqoGVyeuG4eG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rft3KeZYyL6htmRkC9HKbnvW2PTCKX1EY8iUMFAetnDQz3mUA5pUErpAcLet3TaDM7aA3CzYPgsnHwbkTFWN7VN",
  "key1": "5c7BVVZmLHpZ73pCpHFhSip7Re3CTfHnuXkCzN8fGwk6Y6VNWGNYWpZ4jFXjXuNC1oVwQtRtKNdiofoaGMpUQ2yA",
  "key2": "49Jg3Ynkq7SwhELKXzHmdPQcsY2Qwd7xyPSnXCS8irhdQZ49P5TXANYWz21vnrEyeY5zjj22JRdFiZYQor3bsvTd",
  "key3": "5hdmk8BR3g8V5gHXGFEJWd1zJDDJtAHgpmymaE9mghLBX7VDjy4nUKXwoNRjapNkzmsNErekNVqZsmPSUNbdhkxK",
  "key4": "3df2fKNuxLegmrSmQ8K9sNWuCytmpWeXHH7yQViuXy4Fe1KyvshYvCEpHWq2UJmJbu1AcjDhTXi4BMvqXfrzbDRN",
  "key5": "4RhwWbNXXcx6iVnfKcX4TYD5keGjT3gsijCeRw1FoUK4AjQo7vhyo7bKszLH6kgpU2nPiBcL9KwYaxEGfKF3Kqmn",
  "key6": "3TEBsq5H7D91iMzHHeAHML6wos4grFL9cdpRNK8bjZKjJLdhMrZDWic8YCNhShTQ1a7ekeSbazQ4UFcuyjmxnVF5",
  "key7": "YAnXWWNvrc3QZ5UA1ivCGa3BcmJsBfvWgm4xctbPGJf3ek7AmVtUedQTLYCjiXBz6U6y4WqVzAj31CV4WP5Dtof",
  "key8": "5w3jBnSD4syMaeYrj2Zg5zHSEJWMwU1ftEjkw57A5DPFUtYiBbED67xdz2NUUuAmyy3AJFsBw3MjjWtL8PLyTms4",
  "key9": "fBEvb4HrBzwzkwLNURbSsWSdLcj7KxGyyxP4mXUaqeeUX1PdCwu6EP6uP6scgtAip9nr4G3rAcZahxoQ82e8bYN",
  "key10": "4V89Puxs3RNtQFyuHSpepU18mstMo8woGpgzEdPpRJMogtRNneRpFKyPeDdNoU2CFmNHRMuAGCxa3BucXSCaTVw4",
  "key11": "36SH9Lu8niMky9qBZCuh7RtswDGw49fn625Ny6bF62BiJ1HgoHXsidaUV1pTpRU32JuKuPCnGTShuZkC2eYzcFBP",
  "key12": "3adPtd4xNBFRNoGxKSuTR6GhAtcJUyZxV23gJJiQkQZzWMya2S9uBZuQBnTbFYGG74d7iF6gDs2YtZtSAP21H6hL",
  "key13": "d12KHnF2Mkb4XUGW5KgSaTbzZFKwA3LPCUmka1AfEHLXw8sijp2dJzHfxT6wgxrZXqMLVeXNGJtg7otwnDYtoHD",
  "key14": "2Wuvda7zaqgFGD3evqeXzhs23vCoKJeBr3QcG3UfC325pRwuKzdcgK2qbqaWczC58LNdz1quxQGgy9xNtzQHvzrY",
  "key15": "5HQnGMebJFqByWokRQKRyaMQRaiirXS1cy7vW2uhZFd5j4uptxzXF9CxX8AANPjgWDM6hLrHbN5S9pMQGX5yMMJR",
  "key16": "2TzZ1qUPz15M13cuemYq4C77pTLHu3SCBv1zFAdovjhydUFDjj7RnMWazhmgREPq6v1K9238htE1GmtRLpbHuFC9",
  "key17": "2v5kUhWxgXbXBZnSZpxMLUMzRxdxK4qZbUn62tVcau8QCnww84Ng9uunAYYJ5jsgoMrAW7ggUtgk8BQmxCHjeazb",
  "key18": "51sLUxiyghD1sk6DeLv9R7fhAaW4bTNpWu9VeBz3FB5X6M1w4RuEBFjw8gEpa5CmmM8sMdB9XSv1rMdJgwrpxyRc",
  "key19": "2iEcVWNcz9bPD34HNkJBnkEb5PtbT5Kj5N7FqoahnzhijZqZTMWMRksb4bt3JKUPEfPRbJgndZUFHWL2z8ARGu7y",
  "key20": "2vpTP1pFm9SDc3Kb3ccLmfzLTFgWXuJHAnyS4V2yGS58o814tAVvy694neXfjdueVk4CDJs1BkVfpxzHcVDqnAWt",
  "key21": "9sGQuAN8jbuS5kBCWM9baEYtf3hmU6m6wEFi2acNd4VBArwm42L7j3TT177yKMqxsbdGw3M68HgyjUFzpym5WEP",
  "key22": "xjSUb7YhyuXM6i6caqJ9BJ1TzVUWHvaPNY1uowuDcVMZDK5aBpdAim32doBnzEuqYpHHeytri4WzqGETzxTTP5a",
  "key23": "8SKEcubfmEQrYo4wRfdNd62nQs7AuFHcFunQJKdembSwyXoNqkoshkmfa6uoGKHiHUioPzX6riGZMp6sacWQLi7",
  "key24": "5PoujTPi2nFj9c3EHFGicqER6hP1dgVRYvXLmgGm45cyXgx4qdRC4y9HAH9YahaACzC3hCP3kPdZSTewW4drRSCt",
  "key25": "2oCcmPjYVaYSTFzK1WMqfdF1k6YbjYoHNrzSiesFqQknfNrVvvenrDpDHJcS8kLMWg1zPE9iiZ59dfdQdyNxyyUL",
  "key26": "4eqysruz31pEnP323W6dCH5Z4cNuUs8mKCZ3fkhfuag318NEew9aKvTuDeVkYBzep4sJMb9Nvuj3ehrXuyNGjFri",
  "key27": "3nPaGaJJUPXLGy1c6wgVFzGdhbJrXJvpKUr2bsBGbdnzXFCL5o23UEqG6XP6pxnse82RWsqmDAE689qoqWVBTXXv",
  "key28": "5evAh2eCFYeEMkrA7yFXingYkGWwC6bbc82Cbw3ouYRoW2mymgvuysUMUmoDUia62PWA5wsLUU9Z4KRmW1hHdK25",
  "key29": "2jmcrmB3jLtFnkwouLadZnBkzSzRc4VQtzzEZqvZCNyL4TPoBNxPptxnaKhZwpguXb48VatWCLhoT484VGAtqQs1",
  "key30": "2BKoERsf454CY6ES1SQF61EH8vDBtwvQ6GHBCPaV9HmWPbT9Q8diDrKcTiyBPT1VUtfrwkBAEjZZhsWwqdxdXnCh",
  "key31": "3hMSpVwfp5x62yzSqUh4t9GCqGfBhwwTHCxVe2ZZ6FGjLpcFHRLGhrAMwsDuVCkkjfHKstzsTtMBWgE9ARxqUezZ",
  "key32": "QfUGnjDPhpg8NnhqaNBS75zDVdUTHteqHy27hpTFEHXmmLunEUJG4DDmGWKNJtbTGg42vLTncgw2VcYKKD74Dnj",
  "key33": "2eLFmKJRzaskB4CrVoks3MZek6ccjfCexCkSE2zurUQtF7B4rNmCY8GZ5ZZcB5dGfUSCpMX8sv5mSjXH2FFWug6d",
  "key34": "32prJjrkRm2tSApGY1uyzKpUxthG2yquK4FAUUQr1AGc7Pxu1V39x1VsQRMz5rjZLHsMwmE5h6QmdciwZ7tXZ1Tx",
  "key35": "6Usa7nPsoWyQ27ySBZQ7HovJD1Qe1RPUWyxRvEQMTVWkAbyHg5C4jTbCRUoucrtsivJZXa7LkgrTYd4NE2URZmK",
  "key36": "3wswQ7qb1y94TTFFR9bStnqaopvXTyaFiKGYDwfFUHouNQbiiEHTdbTHiDcEZdMykYTbmdBKfo7w87LKEqkrE6XM",
  "key37": "3WG8H2TwrLUV2qmbuxJ5DXdfFCofUFA4rmPfu4LTYe5qQywSPiCq5t3tnDpXohYcbQc4gwyf71t6nxyRbJj1ZbeF"
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
