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
    "5SkuB35rCFj8gLYLSHifmcLC6gbfYoLRgoNG6BgsnhM2bAdUBN5LgDUjZ6uUgio5oJPR9qKhxxDu5LyyRF6SGnid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kyJge9xZQuanh1cgeCcFhtBicsnKMkH51BLZwXT8aMfhSNEenQzwsZtmUagneArj773gLcdsBuaj1oGWdjuxXXx",
  "key1": "2YLxCSjWutCrhYUdz5gHPLWAQeAn7TQdocX7rUhwXnojpCs3PJrLfjtiwZUkhJADmi3wPTt52P9VMGzXAVDURJhL",
  "key2": "5NF1wESzzmwp1eDqKyyEBye4WPWcDtFDyx1nBi2tHRTufuuawRaLBNki4AfKfnfERrmxBuY533cfixB83BxpAtCu",
  "key3": "4LsfhJG7xcg4Jft89N8JDdHBYwM7zgZR7iQWvNsJBa7ob5TdLPp1C9JziUftbdruVEXosQo3jDixN1raNscT13K7",
  "key4": "4n7GpSYZ5Z8YoZ5UMX7nPY6xbjD7mBAeNvLxCnLptjTVGxZmzfhKijiwE5AnsQGnwmDapSKwv8JzcdDMeyP9zn3A",
  "key5": "8odY54sa822mU11145aXkjKvqZFZiYe45Pg2G9GViWxRR76kjqGXq48fhQYUM7c6vgiMzw3upYkYRBwskay49a4",
  "key6": "23GuYzSvRW4FxyAi7We2FUG2DXUzzrX8x5MLwaTHvC7Ytq1ncX8eanzSwNQoPTYNcwv9LdL377fh5AZ9iPRm54Zb",
  "key7": "5RX2kp9rmbxV6ZN9NfxbFZ1zaznmp3uuPCgdwxeDcaezXAxbdtmKgt2FEwihfuGisWeQjrNKjM9mp4zzkfRsKMT7",
  "key8": "3PKxgnBWzGcCrSEjpxmQ8KCNbYSt4Ve9yd28bpBNPMypZTkLDiLKxpsRAs6rrMP7H54Jr1TCipxKDJ8vtDPeh22h",
  "key9": "2NQ1RrZbr5vNtefzT3HUEjTqgU3usZ33RNguru3QfhMiRb1DUpSzs2G1yJJcxv1APDLYg6kwVdM9a1aEkvS9z8Ex",
  "key10": "5BABcnuVUWP9hZfHsksL597AjzwBtRuzn3EWygK7gFM7d2st26A271AHfLYY4DwhecSES1cvyymNrFZvoConT1GC",
  "key11": "4BFwMnmP9qmgz1M19CJmBPeR86jw5TpbTrqDsrX4UWugUodCo9dJEtjR77SAU2dSnhnYwEKDVvB2GUkokT39U1Lk",
  "key12": "3u5wee7QCVf3qCD72K4jj99g3rkL46Tt785YSLqiC6BmqfQh3C86FtW7AtJq2BDMyXasx8cFpGAZhPbAi6pnoHRG",
  "key13": "5y5SBobv2JyZnWBUHNb3C1DQG7HZqLupUTHN33my28RLQnMZmh39T8vcDHxqYWeLePFwfnZfdqmeaV7WdJ5BAD2R",
  "key14": "3QH8iUVQUJDRkdJhnz4GkaSLNBk5AhwCwh8N9XxvNE2bSigxkne4tSBTEGns7RiY27NWGkph5SZkPFNAgBV9HXES",
  "key15": "3dYnWUTxHQxD13UfTCv3Rj1yQpyNhpwdNAHpL5kNux9UJ2MN9oWFW91Nxrd2XnGb6EX9eMu9BHXNejW65rXUv1R8",
  "key16": "6tjzRjx78qFBwLWjTiFZwaDjfEXudjFqqpEEZbLcit1wMLiAyv53cKjc9wnM7WA2Wk8bUzCC51zoaFzQm5vtSKZ",
  "key17": "2cjXzaTyyNJRbSjQkj4asizcfyu3bYNW7zKjDMeLsdjQRdNr1ZR9cZWbtm48N82wgRUG7Jcv2QUCYAfNKNu1ydBy",
  "key18": "2vvu2EAVGh7nvT4XzVzWDyZbLF27uYHGpZUA2o87SGHDxx841NZc3cGRHCkW3S3iiYWzh3vbkayXa9VHg1i2xayr",
  "key19": "2ZR3Arh4aCmPUm2bfSvEsGEKYH3DTGjGWtNxmV4x18prE1rNcpXXvGzSVmoa7rvDg3seDD5NWzHuU8VBPjyV3SZT",
  "key20": "3LRDok4acbYouXLNWQjuerReP3ceJRWcCkHy4TghNpPf32h6EG9BXEBd5Snch9XDt234PYxTKD9A1MewvN1KksHG",
  "key21": "3LWQyL88ib7LBfCiqcXRqgS9BqnmTV7vRi8DEJxQGYTc3czSknLZLcX3Wo3FwgtYyy4TNh6q66QnvufYzbCJ9JE2",
  "key22": "2BKGJ1p7181XaQgWBck8cgaC2hdn83GYmVrvke3unbqaec48L4UDchv9oseqkdrDjSbdbaUumavDxZDSa7ikqSPP",
  "key23": "2tJ6LFjkEtGcP56BWn3tFFE1PGGEGPVKDyT4HJMFr2CVahf8USs1S5rmayqFUhMEXM7W9XNEdHKDP9ZjxLcVLsVU",
  "key24": "3FJ9fpnLpLkdA3C356xzggL6L46R1E8KZTmTn62R3MTm56z2sfMDN14MsEfbKMtvvvKzMbGkHy5zU389Ste4dpew",
  "key25": "3kWUqC2bfdLeNK7mZmYVuYw9WwgVdSxD4ccYxExUJwv9fWR4o9dwbD9Vspk5YcRJGRWUZrDD1ww3dCKA4CwHQpuQ",
  "key26": "3269KUJRHDt9V4V359bmT3tAHZzC77jcxdUCtbnFvbEH86x8p514QD23t7GkTk5AMFvgAmXT8TzmYzC6NRE2xUJE",
  "key27": "4eQDCyizZ4mwSVWd7YwKMV3k5YiEdrE1jJnnzVrxa5J9D9AQ7tJBdCFXynmF9QS5Ztw8w1jMUnL5egoHNm4bxvrA",
  "key28": "2jo3Dbk8DeCfz2Tao6TJeEvRCMxMN9u7ZpDeLSewj4GXEBry6cbkK245ABMmzNRnmxdL7F7BVYjns9dtVWEkHgxZ",
  "key29": "5aneYy5vBoaNkA1ENbxGmPHYaaky4J1LJSPCvXPCYLkkrCRkFBF2kTT2emAefcs7LHx3bqzm9Dh4MRXvSyyN135U",
  "key30": "2TC7EQFiVKTieHYZS1rhBrFnQ7nVrH7VMNXF7aJRkejf42NEeJqpTSRbpocnpgeQnFwZPBneUMbSW6rDRvSKa469",
  "key31": "2ca23WVdziQe5JFyL5joWEBCGUfQtay5F5FrFSnKPoQGAqiD7gXTG2WQzbD373V7dvaiSYQhc9A9tZaGibb1gXkw",
  "key32": "3DBkvPPD2AKU1V35byPhupoqfJJyKvHWb3HzzRNqK2ChR9XT9S1MXtXq4yxcQXFd3G3yfr8mNTf4WLcWNFKuEr4T",
  "key33": "4u3dqZXNzsneKXrnwDcddZFrHmQHMppXYb5usSm8NpuVTuYpbY7Veqei5QCgxcUqnPnGWMpJcfJjctaEf1JQrgLz",
  "key34": "iUQ8KoYtNXjXtdG55d2addTu9kyXAC3SG4MzVZu4A9pkjCYwnjCet9vcX4szHXJYrWu5Gd6XDDpwkWnVvFpcixz",
  "key35": "iyG9brzXNfhCzqABpJRnqiFPXycguFvRe5pGNivrTZzA77gCMVSon9vGY3AaGYEv726v9sEzvTDKHy2UBhmx8Tw",
  "key36": "257c5KgmG8SxWZ9qz22hiEZRD2zJJKugiP4hUTtnn2JtqSEGagF8ZhP1GWvvaVuthfX5wpRYWefN4zrx44xLs6Vr",
  "key37": "ecPFJzSgZizKE9kxF8DWKporaSrHrRmax72B9AXdbfCDbC662TF98Qd5PMeQxtnqyc1ivKWXLZxPBEsGyYxyUH7",
  "key38": "472hcneCatnqrVrzthmP25Lr5M5xim5obhtmvZP83SBDio7DinyyQYPvu6Gxh3mefstzuUJdmwwqn1aHM5YLHvdy",
  "key39": "rmWpnY2YkAcivJ1qDHSxMc5oyVLzuYUX3yEKdTUqoz2Savw5MBBeGKxtwEL94nmDreK4prDgu4x8HGMcMuyQEV6",
  "key40": "5w9DPBA9HQjBDmWjz1gKen3n1QD8RgeCDvyktntPgVLZs3yeWPEZakAZi3yueFQ5AezcPB5fWgQ9wx4tA6HVbAwR",
  "key41": "27kvuY1dGFA51Q8iZdNjNkpt7ebRCTjQqrS6HXVNXsjg6FYZzpqW5nSob6sr6SuXzL2d1xtw6futW8ge2km8VGgg",
  "key42": "2B81gftK3GqGypAN2EzG5ZpY1X2C3w51sy7yfbuCmCTjyXdEnVxbQRNTgDyDVWJ8M2EkRMv8L9mzrLFgCkWkwkvL",
  "key43": "PFFuCmDcYvoeXPdQdRaBHQrpPzw4x9wh9osRJCZhreUY9PiTvcRrQNLsHayiWu5tzN2AMu9NHCqpEZPHcmcvnXv",
  "key44": "4yFZQAF8H4Ce3KHH5uiEgMeSQzUJ86VTGdYQ87rC7HXQfZJXduWxhJjBEcKhPXA7SSJ6sSR74eLi3HGi7GyPyU8k",
  "key45": "3f3RxRiQEZ3UGctny1q3EYfhfRbBqNh2s6y6FGwcmz45Quem2tfb2C9V9UWua4V7jMpPjj16sHwuqoeAVHYbWbUX",
  "key46": "5kgZkLTiKdD36M6fUe7vLS58rZY2yju457vVz6DNP7Gzaoyp1ac5wVt8GNERCTmFccZccVHvec435oTgonW4ZyWq",
  "key47": "4UzGApf7xf1HLx4c57t6UtLePxPpqeyqK4VrXRx3mwsgXmqiVNecuLhdb7kQMejFN3ui5f2o7b57zvz3MN4W2b51"
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
