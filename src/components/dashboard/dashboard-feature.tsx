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
    "ZDir8UUsR5FDDrCHAHU6dosFVpTdHLJj2ZyepfvKFmPZH3xSaG35uUrsARvcmvV4r9BMYZ9o68i4zcJQZt8jWzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55cSpE5D9za1s8d3QeGfxzRPZB6K1idHqPQZKvFMV6XG7d6prrg19iv5TUNSUHZqKopuufLJGWXeBfAjEFYHd5za",
  "key1": "2wnCMX2YRk7pG8Jv8k2skCuFf11VqeaWEHR8ToUMc1oFL5ded9ZfwaWGzfFHM5hS8GjofngGG7AfwuG3rx9LAycx",
  "key2": "fvK4kiiMRZhiHJL8oo4wsrG2HuW5PGdVkitboWYVqo82qAtQA5fwsYzZ4pXj9D5T1sRoMKitLAtkQsfbx4uPHLi",
  "key3": "2VhTnXPsUHPaUtn8gp3QEmRz8rpRaetNPXeSESb99WFWNx3G1yPK5dL6dkbiKueYSW156uTDwx93pmpNjrmN7gEj",
  "key4": "1aBdK5AfH9KAGUH2HDkiJQN84rYnKsoUyJZPe6mcznkpQzMZvJHY5zURPpoBRxaztYf5pDTT5BzmtGeMjsS6gux",
  "key5": "UWeKypqVU4u8tTFwogdid2vJAiNzGq7eDEBDWBLkMdusvjh5AKdmYG6MmvcRv7dYc3wi5HrjVFjWoU6fGB1TEoE",
  "key6": "FX3xWHbQJaK6yX4USCv5XYD2woJwYA7Ur3Ed6MDJJ32Fwnpxcuew8dV5TfUbncL8tdroqAcjwrcyxpzPGH66gnk",
  "key7": "5WNDzxU53FPdN1tZppKE6fJFsMhBEExfqNL2Aq2Tg2XDdVBkJUFj7FzQXRWRKEjDD1XHUDirdt75T2VGywbgFbuc",
  "key8": "8RKdwc7Rkntqcn1uW4mttZ9q2BKnaRsn777kDAZ1aQC3ioUCDU9ZGVcDWQ1xq2pGkm195MkNok6dJ8urFYetvr9",
  "key9": "2CLBQSk23sHG6nD38zS9kMTPjq4P2mVzwHB4rBSF6Ft98Mpw7vuN1sWoVL2PLMp5gJxCeiNAw7Pk3gzviMKiMB6k",
  "key10": "3t5BDUMA35cSJc1yEPhL12PDy9UjTV4ajbEEF1NCgSw6kPZdeR5sZkrWyXBGxEbqSTnZsJeuFykP6EESZVihAVmm",
  "key11": "5MDjfsmstQwGXUUYkVKNRuwoWsRN5i4wuo2ojTQ8fciqy9jyMJToKJUF3VB9F69qx5AGR5ECsycMEAheJ7vkEHwp",
  "key12": "3Nxds4oFqnbYmoKoBtN9uwfAYVBCXcNUp3rcoCErWC9mzBpXgpKMw3cNJPMkTLCc66rPzBxx4eCVy2TxVyF6ug4P",
  "key13": "49zztMh1vcTY2bbEvvZyte1EpE3ECUVWSuYNqm6Za2hYAgB8cdxMizJ4iGLij779SwSUbJCm85kLNfcSSHco3sQs",
  "key14": "51y1yWoR8U6uWnosJwz4CEoDjCVxbwx5ApF3r6EykRFAcRJ4SM6xLpaTeuAjeqYyJcCNn6dWqnwUV5o6u6QM8AG",
  "key15": "4dDE7PgmRL1PVEvqE6fWbTaEGHtAeAVN7jcEg5xNyPxPoS6KGHB8dXK9W2n2FBHRhAQycuprtv8JFRBd2VWyi9VK",
  "key16": "5jLP7LB5PXXrZnri7hoWwNYxriorAfTdy5jUmFs7yb5nW1KzLZq5WyKqV9gLRyBJ2FKQd9jgkDLQCRJWVDabFYWn",
  "key17": "52qxLvFc3A2sLpSMkc3XJG1iPHKkqdKGSp2SHFFXVvCy81V49EWBtN2qtrv5An51mwnNrkLXsZtRESiYHDYoob29",
  "key18": "3XEJ1bYvQb4M1oMnvzuUgHgahjmL2sLf3yVwGESbTpgczq7u8eeMsT3CRXk8VNSx1CZuXpucR9GguGS22yjvdf9W",
  "key19": "5NnVsvn1WwPtDeh7GePUhv6Y6uCCz9FiyuP3ewAp3b2RqikfcNJ6T3Y2LUaLwe8duzjJip3GnN6m6SZNMF5jycub",
  "key20": "5FzzpftkjTLy8FgfW6JTP2nKerJtnZpNoXr5AWVPjFJBbnTVkGD2RQ3acr6BphaSRAQsMfEoztnRcp1stibWmhWC",
  "key21": "aW1dxFCUypUbyeVtKNZfr1ezj5tdaXS2gbZqqXG4RrGJzVRoWnrxPbXMvVDLAVSJeBZuMxWfV7ssGapex4MyN2k",
  "key22": "A3PFUZyyJPE92vEKVwU9wS6sbrfhXnLfrYfsvVvHJp8qGyF3mfj4AU9Maz5sLax8AiYknC5asSzDvNQ7hgG3Mbq",
  "key23": "9wvP724tuBQ6sYeFBqbU99yPv5Chkm7MjSQqKY84K1YCqapFxo2P6eK5d2RSmdpNGEFiPmWFZaZnjo6cqmtaaYy",
  "key24": "2hevA937Cj4SNuC4DBaTMV5YeBA9Hga35yq2zzJCzoszv4HV2UyXfJm7gkqAuzBzvU8XTHG5TMArcKsMLjdiduD8",
  "key25": "2FSaMYgZU1cHiDzjbo4QY3Rp3oMWM76oTss2zwxE7tUJUhtwupBbNur4HDyCc73bF5XfGdatYyU5jTiPSYzFETWf",
  "key26": "3U5kUC7UiZnqQrTpWyhTH1p8xV3C5iprqsy9baXHMB4cLKYHCiKacJF7TSNk1vfhkjXjtmjmkr2Mtvxs9Rs8ubVz",
  "key27": "4WPNyr7mx1LGyeLa4ZuMJYy5wHynErD3SrPbR7MMsoCuxTXS8z2MGXvF1LCjsiycHAUxvB2q6VZnN7RnW9qAZX2m",
  "key28": "jZ2cCg2n9n6Y2v2CDZoekpsqxdUNeCdixVSfHWWRuEYjRX5KfwPCw1zJuTo2aYs8A5LSWZTwvhCdZNhCr1UTc8H",
  "key29": "5dRPAL5BsrpyEQYZnZj2HSEfvZN8MptkDabZGChBPuXy7umx7AE9875qgHcJTZFHXAVkzqmhY9HVBRrDFXd6dxQP",
  "key30": "4ur9VcgMmsP5Vw3pSMVbrjDKpkrxSYC6iNpbn3yfXw3uYJcTsRAX4bbMq2va9MP1uLUqAJkiFDXU4bDFMZKW27Mg",
  "key31": "58E63XhcAu1ojgRzHNfFgNTh7HFMgGgmmmEw6EdwAo54FSVgm4mYDLcLbttSTfkm2CLqwjxiaRNFKNca32Jkgodi",
  "key32": "5SEYUJjcRad5RDhKHigZZrk5Dhgw9zNeKMB4B4A5hGr4i6jtKB2jYv9SgqWjfHYTce6AHvHnj5hYBi91izozSVrh",
  "key33": "3bd7zwMggybjxrnynoynUcwu2HqjgvBpcTi1H1RHtkiVieG7faKQv6AysQFvJLm7oRg6hDQSuE2txKm8EnQfYvCQ",
  "key34": "sP8hC1CqQTzgQ8GS4dqUoG3NoxY6pAyWJCXJgJSaxNaQ7G9rWhfLsvTEUuBVYZLyLSxdYADBgB9AuRHEHJtwKPe",
  "key35": "3jhjJuagSFCMsimzZpDso8iEz9QV5Mg9V1HHqegtyASLuA2LchoVQm8AChJkxwRB2QGnZt6KdZgBxpaM6hQnz5oK",
  "key36": "4BDY4zxQXvy5qnFT8mezEyaK1ypCJGWiQ4T4Cdn7BfqdAg791GvzX4bMEaMSUbkbARurLLLaUi2LGpMZjWSYb4jq",
  "key37": "26aK6UyQw4qrwdNFHNJR4Pa7ytJrvCsSzigrazMHJina1RCtveamBRvS2UxCWyja2SbQfUvRjWgSbp6oTtgyC1w1",
  "key38": "etZ7ULb5M8pskkkaNnYqpmxS9NMwyioWN118CULQMdrc8MCuqNECgDxkxrWpCxKSoMmNtaZQ2oUy7FjbYtJAvBM",
  "key39": "3PDC7j2nCFiYH8W8L87nwttxHqy5ECoQgyncvXEoUT1PrP7mvNTq751txdRgQAPR23VSyqKAZMbj5KEJTuTSvkcc",
  "key40": "otE4vLZw4SvESThtG1xypwCkSSxS3i11LbqhgPvfDpqKP3NFX6Cvfmu8HMGgiziEqSmiJzRw9HnUDHSZ4N4iDg1"
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
