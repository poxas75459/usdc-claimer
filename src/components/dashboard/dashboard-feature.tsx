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
    "5Pzkc6JXHjW76S5i7R6CUYuMG6UBn3rL8pUYjLeVzvWx7PvKLCi57mqtRjVcwdm7rMK9AjFRiNxQu273iAyKezhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pgbypZAqj4tPHNZBLkTAEzVbAmhJvV95qpt5tYeA5sXApN4QgDsvevZxDEUh1xsjTLDh1SMB79BpQ9vX6az6vgK",
  "key1": "5RKbvRWrcGieKivgXha4BY5TT9VoAnJ8srDypJjdTgWrSUFNyYtPwzuPkmGg6qZrYPfipabaAJpPE176XWzbP7vT",
  "key2": "2cpgdfgdAfLGDkxdjpa5PNLh2WWXXojbDZedNhZNBe5Zju2x1rPwDXe1QDFHRuVqe3KsgbEi8Mabm6WCzRW8gPi2",
  "key3": "883GZGVGD6cu6j3eu8vnxGurNjzWyCuryobQSL58eR5CfdGXvSNRGEXQyNRqeWDJuLQbEuMuyrQEzvuVH8fij5W",
  "key4": "3aq1X7avcQTNSMQDchf35ciX2vG8ByAWc23wegkJfJewz7ZLXM6KxMXnUvBKYEQ9Apvehhdob7hJSgqeCMuoWsm",
  "key5": "5EtfZKoz6PHUTfeA6QhWd7JUFDxfGSXUyyzSaCkjH6W7VTbuF6xUMV38Tbd3WVXnNqYSvBvckFjFBFgUKu5BfeTy",
  "key6": "4F6GZWT4myvJBUzkgqprEgW629kzzbZo7bjBCpwX8J8YT8RAV1vgMtwsrHQ72YafKUu2pJ1kNNPWdfPM649ykWx7",
  "key7": "o68AbW2niPoSCji3XEW7v8mwMmyMciDCmYUaxpyJA3v7b3RkTFWNEng1jYQbE4VPYaDk6udPEQjSykhXgS8HBTF",
  "key8": "2FU4m5cLU45GSp7gpyX5t1jbQbCsqYgAzcveXbADfUdkK8vfuQjxhtgDeKqC8LWJrCdZvvDiu8RkJeWWRmkhNidW",
  "key9": "4owWv271ka1VXEj6kuVm9qpLdrKCx1LZN6chfwGMFa6u1qWV2rA69v7vbJyZT4J43iiEWku8dM8iaCwKMYQ3T8HN",
  "key10": "2qzNaM1EUMQMabDDSBNJQG12Zzw9WKxAdtu7bzm6Dw3FqHZT3U4DfmbEhKiitx4fC261uSs8yh2mVgL2z5oEK3Yk",
  "key11": "3fKU4wJoHcG3ESBV4yMwh3UNYdZJnGFFag6ScXf1hhND3ruDsx8kn8Tm1ctjz3D6QtyxZzddyRsxRa8xZxJJBVME",
  "key12": "dJLHPjrbhBBtuzcYJGv5C7BE1nb4taB8PnjWdkPfZhEhaVGAsncPRTEfyG1cry95xiYnWW7TEfTgMMLe94XeY2Z",
  "key13": "3STPeSVbdKnQ22dGbYfizv3taTAdTFWJeBdaktLMWQbH27hqwbiD49aLiNSZ5NCMVXk1E3SVBxTgumUvgm3euQ4m",
  "key14": "5icvcU3wWh4E9ogzGm41GSTB7mJ2WZ7D1w5H9T7tEFoBxpNx789xLNbbjWjBvQQMKSJxBZsk2dRTWMwAUQRYnChL",
  "key15": "4BhBQxAsFu8Bb4cGB3VdUhjbK8sbxhNjxpN6smLZQr7NpavzDeJcxPdDGKbDZTS4M5wvruhjetid6ELPTKEX7tYp",
  "key16": "BTYUTCqpa46st59F6P5XvkD6KttrkH37iE9e7Bs3191vBgPWXDCtw1PtfqgUYYoMqAki5sm2KmSQMx4pYf4grs9",
  "key17": "2gdF8d6fZRsrWPCKWYZxWS2TMbJzP7ycgaTK6wA1ggNHupvUWuRJDiSHwyFLfwb1yT3yNPaAqjqfjEZjwsiF89La",
  "key18": "3w3s6sqsE42nQcRC9jA2D5fr4ddf3NqiNaas3aRmiWyThe3LcD1MkmtRPp3QiwVU1jbWpSRnrFAaRN4G9wCaMicP",
  "key19": "2rBXVTzK1bXLAtEE5SqvYveL63gtM3VWP4TEy9XMAi7oeUPTotQyeEVoV498QJTcXu2MzpbqfdXnVj5SUDQSLDz9",
  "key20": "5xKD5pSH6ReKnjiYRR58r5SLWF55ZS62hiuJgsLiWe9gzJPmA1j6qBwDzFrHwvRLcWS9rRJokhea6P8RXThdxqfT",
  "key21": "3drKpz5FSUpHaXZhL7y9FdpoThA5BEpXcn3RVk3ZZWFeYYHsrwsUDu9sctsJ5KC3yeDkt2Vp6DNz7dMFxc5YcxzS",
  "key22": "3eWD7beqjXigYmUfGhCYPfLEMwX77zd2b1QZTETZtsZZ5Ug9MmBARKqXy5hYV5a1hY6MpCB1XcUrEqeZapeDMtqX",
  "key23": "3Vju5UxwdoAJaeorcAfteP77aDkzMb4UzimecM2PrQHGMZWFg7fW673vuh4G4nQ7VAaxjDEiPetZ9feuQ1TE4iWY",
  "key24": "2DeT7GMuoPRhPfoRGbWkAbndjAy8oEYeaM1oyYQ9HMEa7s8EpNNgc6mRfkC5gDxfmc1YVLtab6PohMJwPj3AzbVu",
  "key25": "5M2qa6N4d24bMS63dT3dBVb3rpzHAtSxGMRHoXkfnEE4hs4xnaHj4oUHptWWZnVooXreJGsRp4xUj1TsuBT95Rqw",
  "key26": "4LkLQdA6QUiHYXxmdVrthDzEs2ddzzY3RmKLKUYqs1d8BUBgFtqb16rRtiYFbwz8Vo1QjqpHrUsFwA6am7S8qH5P",
  "key27": "5ZUmkN3wH28g18pAgoKWDM2TeRTjfVpEpvHt8qNwmycMSRHUYBH42NSHXEbf1jHoUhJChmv82N6yh3qBGSUS3vtn",
  "key28": "2T3Pf5D9YpdsM63YVRVEFfGCkhxwmpsgqtvGfQZTq3PaqkXZNDd3o3Gq43UfGLDQ5EmZFZrr9AJUNaYmGHivaeRJ",
  "key29": "3GKZJ13jk3nB8yfLe37kg5GhEv7t8mT1kfLV8wJfkLdxy9xU8ngEXZckrptbvFRQyX5fFiNRk3USutMf2s2mZT7a",
  "key30": "XGftrk2CcKdqJbDe6sQGDPGUhbEmqADn2BQHPjeXcrqGUHrWsNjoLSvE9CDFuqBx96exxzzb3XdTD7RPBWzuLjK",
  "key31": "3h9Wepy2F6txZUm8JwFtnHaaMb7D5XcpkVpM624ZygUVcuxSzERgynHpCAPfDhvCTCPW9Rff4yV67ng6nErDHJLu",
  "key32": "3dfXTL9ko8RYXfAm5bGpJars2M8AXLC4NAZTC1V8Ln7PowQme9tAvuXWW2b7jXku9SQoMFJtHGoaz6owTELN4CoT",
  "key33": "5oEwXFHmt16vSW7P9uNeYhT4zXfts9A7T5MMRpVqPw6jojKfyq9XtYBi8fmjFHr2FEFAHaFbBBeQMwMNGRSzhf7C",
  "key34": "4Koo3UWPePQsb9HiVnvUQGPDam6xRcVxeWrptVFxea74xxZwA8keTFtQwFqV97qwnJQWqExXLkLjdhUehjWGU6fN",
  "key35": "2pgVjnRQjju4mQhQ7utNYCxF9WejyYG3xM7c7ocyTHWdVpwvJmGZgcVE6DABJy2QjRNeNFKUSFYYuRaxKDQHPECp",
  "key36": "29fkz4ojzfMU4dhnvaZ22zy4DP4yZyuCia8ejwqVan6mBeFNsu96x9n4LpDzDVeqjbQd3z3aouMeJaEpbwaKZ9qx",
  "key37": "5nZ4NbZ24msXEwCbAxKMFAhTYx1dJgbNGGJ5itXMQcxFkwqRkPNEg1HboW2gRfssWqQiqYp7fzMENhi2U6vBakP9",
  "key38": "2EMLUXPn8iiSZUZdFfoxtckZxPVGigvytU4cjgd2ePuH4AsYuW9cFTF9u4NqxtJPrRNnCDL4TFHvg4STZzEQEXFb",
  "key39": "63b58HpdpoRfGwZxJgFv8GJBxBeFfRNZ25qeHgM3F4XSJUyuGB7GrQXYNzbzhahkE6RKR5LZRRSZxvu1xU1LFYGL",
  "key40": "3eRg2dYjU6ZL5Ts538UnTNvnKicK3XjpAXkBubWujxEK6sd358GDopuJUKHRN3EwLWcSMXoXsymA5VznmQx77TUQ",
  "key41": "58osXjNtjevXF117s2G4RqTeLFXG7rHzW3ykNPPiSFopF8To7STEKDCadQTPXkNiFCCawMUvmmo6kgcj7e7rzUk7"
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
