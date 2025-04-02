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
    "2qJ3Eifa3E3Zidr3qRKQFhF21TmqqXtzV4F3Byi2wYQz6T8XikWHxwsjbKehbHt1Yc6aDVVfdNDFrvt3yEvorPhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ntZNBzSFPnbbbgtZ7KnSAxQ7fqgRf3MHtw57GQJBfpjf7QsfUUxG3w24sCdpQQncLgyDvGBf84Mt7AgGoH65fV",
  "key1": "41fzGmgTWGQteUU4aUZP3cUp5c5bmTfS8WJn18rUTK64Z3nV4ZpznmpAYfUebaYMCW2MEvj7jv5nrEcdPABhNf3T",
  "key2": "guhL3SjruVn6x1SqFZBiek2v9SC7GEE3xxsAuBswjMCuYTQS98baL636KssD5RRX993Xfb66p8oEPH3exgN1yG5",
  "key3": "5tJ2BXaDR3SMA9myBQbAo8aNT9bBV31nHmen2fTJ731XyVxBM14tTNn6GbXNVro2wFktmRW14amqz56h7SuURZ5J",
  "key4": "5Puwd3o9deoZJUKDs2DntWe8GiTXnD259VVMsTYrY8wN16a4fHa4Up3Hd1zeGqkpuDJrg4orC5399rRYQ9G411aV",
  "key5": "4TGqNKH6zBP9nC3fjTENbfZb8mGD6Cy3Tn2VYGj1EAWBx9QGzvnCddnrmwBk1ApuwWkVernDFYWQLvsVWrGi9c6A",
  "key6": "5Ng4GbHJRyNgZUcx8Xsfbm3LRLaYs6J3YfVeUViNb2azgi3NpTmfoSJvZMMmNCoz7DQHxHznkotpCEkEWEwoFyFP",
  "key7": "5MbqYi46RBKcFMgo9camkAdSftrr45dCrfoEWnTWMqFxKfhe8EoT9q63Mn2CpV6zY6zEvUxETGAuEECqYwGeG1E4",
  "key8": "4ToHKdcayyvgnSHaEfha7MVUzXT89T9ejy8dj9fUbkyfEAMoMcdDF3vuxXvePn9GHxJxikcXAd4PmnDYMoCUX28t",
  "key9": "3AUQJjZZnwGcPMFCos6rwfiWMP8JNKf5iT8nZahtpm7otUSqWbLJLQUKzjMuVaMkXXS4W9sMJkFBSu9VBPFBD1uf",
  "key10": "2g82HHvPYUFUh7gtihZwn6oKG2nsENX663zH3jopVKF9U12LfPECecUMdgaX1q7ZceForXTn7BvpweYFSd6kezEc",
  "key11": "2KV3TD1gL8tmJDKLfc1yQNo1rqUfvAtYsGYfQA7EZeBXKcj6wMyXKxYDmRLHvi6K4ywZjWPawumgCz3TdaQKJ2Kk",
  "key12": "2RPk7ms7Yat5qXThbPM2nFvcFk78qKHzNPNixv6c3XXWc4ErRtuYHb9kxuNmrWMa9GkkjLcKcnPPGuQmCjNWC8gb",
  "key13": "5rvmSPivng2Kwpr29WH7mxvAL8bxvymaUBgQ1NwtyoUJLp918r6gsHRerNtAmmdwsQJoiRg6kvoMHPrfJxQ9oKGm",
  "key14": "3F6BQdzzGDQRRfPbyF7qAy4PWTq7WiX6crA4y7F49C2qsNb9EG8xfX5X6GELgiVDvDA71B9DwJ59D1y8rHMXcTWt",
  "key15": "2aDiDHsv4xGR9ZQSPqfdTq26CBRpwD3vn8bdYmECJGSKDL9nEGuTUywAfWynsWDNa9kQzm9EueodphHLfNubG2oE",
  "key16": "58CA9awrjBzrudS6x68HS2xoQt9SMabsuwuRJ1KL2UP6Ba3Co21mrrPHAYZW7dsuLVdh99PbPgmmdBK5Coa8WWdt",
  "key17": "3wVpLnk58tnnZpyRFHnVNerRaz6NKmBpBfyJBxGGRnawrejKUpMkKtjm1qWEbBa25W1EzcUw2SB9QYdxDEdSid8G",
  "key18": "4xPAK91b9S1taDyfse8XBoA6QFwx5SXo9mG5k1a5MHkvSTnyfHcPeVR3euioJXH7kuhnmNjiWBtShnytkqb69VF5",
  "key19": "4hp5ypnmjSZP39dGWXqmYEJoP95Cn2anL7ApSX2MrZoHZFw92ssc1TCnR4y8o4nmpjmrGpEMsPe1fGgQM1j8716W",
  "key20": "WE5RwXX4QdSkbBZmD28CmfHA9zyLKdSpncbrxGp1AJztdqK1mHyp5bfavvhuyzxnJgYNraSWrZPEbViubK6DQG2",
  "key21": "5fyrXVzJq4G1h9x4jHpjNy1UQB63xEhkcdU192xmfAHqNFT1kLHEtZQyCz9aq3ddYR5UtMU1qnZwhGoHXmLJjvM8",
  "key22": "3nqjqi8XtXQ5PnaC1Vxdwcu7XBrfYpTVU1d9xJ958YQ6NSDKWsho9gQcZ4WWZq4bpj7MscPrJnFch3w6zt4ZHxH",
  "key23": "2F8xev43bafZiajEmwupSKXicwJhyTwJ3a1sQ5aBoyBNQRahKdBv8qWacmnYkx4yHDe6PtRhWEhKJBwLkXF6ZsKg",
  "key24": "4zPPZPAbokVCpGsn5nwJ8h5xZezH8S8Yq73dPrTpqQdJeHb6NELEpYFZtmZGScgCWu4sqxh8rMDveBkQFQetDeWg",
  "key25": "48HHD4D8ZfLjUskxPukvJXANY51JBFCyh1ZSY6ooAg1FZnqFQm46Cj56tSYN8fU5ZrtnNFRVQufh3zqv629FWwz2"
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
