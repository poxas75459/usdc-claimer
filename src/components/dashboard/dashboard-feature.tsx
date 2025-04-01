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
    "2EsT5j8wE6hHwyuUCms5WpjSnNAq1WXHvug7L6E3KDmmqsR5cjPqCZ9FRgYi2RXXCAWbksukE9WeEoH8RfkMrtZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a6iimga3XpNY4tzZ8GKEJYmuzDJ7a4p3G5AWyinQUCZ1B3mx7jAj1yDjhqPxSUuxqPGy5wVTzkFjWvYHBnBqc4f",
  "key1": "3ii91Q4Z8JYRxMjzNUYjUq3ApNDf8Jy3SaVVdC9XbHHSyZQaQg9aSjtcGkuT2Xs3z8edqAeS9jJZSJuATswo7Ek",
  "key2": "56hwctvZcpbtYwMMfY3KYq4rM4C1hkkpcyG7wsHz9SmkwvLqSeAJ2mtYbKdP8UeTMFCqUncquoS6DSgapC52UCWh",
  "key3": "3e3tu15ULcwrob71zkLBw137uCL5CZ39CviWgxgtP1oYM6AqDpCSr6dCs6hYg1EEcdpVuWcnbERscEZS6QwS9PkK",
  "key4": "4NZAmsrF9HrUcbPiw464Qi2xjFb6KUimzQj9ra4AtUKADMuXrbPB5z4oS91rLiyb7BK98vmnRfVZTzviWcESzrTy",
  "key5": "2Yhg57ixKkMqhtqMsLiP4A5WJX1GGQUPZ3zXbVZr3Bx25ydm2kXavWPtFGvWx7pePzijsaoX7dczNa3qez4AMXqb",
  "key6": "4PXQYUUjEgJdJAaRU6MZ7iLXnWzmV7GbMm9irVL79n6qCuqxPgMZDsTtUBa2KJQzKZWkBNRuPhpU7i2tbSQbThsg",
  "key7": "4ynijz2rzVwndfMFng8bXqsQKwpRMBXEYZYUFW9NFmRCdprXWBaYFSbg3aA3AxyusWqLAWesdU12JYGKEb8Xqrm5",
  "key8": "2c9cioGbatrsqEjXqb2W3uHMiiFGbcfXASCokzqGyWrHGrPSa6KL4mmyfWoRyv6MLEacHVf4M6iDD4z8SkY8t27k",
  "key9": "2jviWriYfm6R9VTsFYGstSsHfZq8pdsbDEjk5Tf8kHjyk6fWza5UYp5LmCmekDQmJSdtcscXNgPKEf1VVKtcTLNU",
  "key10": "3m9j6cSYK3QT7GxrF5h6mDHQbLkMoGaD2csq7QMfcPsYq8bPSd2LJfyL9oUU5KUJ69Uig5D4wrvuhYTgsbYbNKri",
  "key11": "W9j76NV5s4jjEprSenvduVkTuVnJvmBfbAetod9bqRqHLxhjkvLzBmCFMW2Sv84a7siDv4MUaLFDEMtvrwP4usc",
  "key12": "G1nCnwNC2xwrh5kKNs11EsjS43yL2RFFHLKm7cHivphTs1QDNHqd4LxaZUnwkqQf2Bjf9B1t6z973qucAZ7tuTU",
  "key13": "5sBd3oFXiKU65Q7pYwQAmMit16NLfidxg7rmpSJjY8eRkPsenYdaWsqpsiqWnw16UZt5436WTYqvyAkEfKesCzLt",
  "key14": "3C3nCy9tAbXejjbZJCA8cp6zAwtqjKShj4FPQRgX4LPKXrBmaUfx14fHj8F8vXcBQ42CJpRdQxpoUcxxZuyARDHA",
  "key15": "W5fhVN5WTe7mcg7zWaoY7oGtg5baTxoy8ZLagibAGbWf1vdf9DeEPngRMbcubGMJGHw9oouUEmoRontM6ffrCSm",
  "key16": "5C2zCuqPbovGLeFWdL8bRt3huDac8eLP98Rm4kV6s7aXEmQfHC63GFDsgTnpBMN4vH9TLa73kTA8T9oJmAZQdogm",
  "key17": "2zUX7bTaZGieP3RKKnySSnqqNMmW7fQzL89Ykifv9RU2o2b2CfeLR3aR1q8yPyNMaLu7vsatHkMZq4DRDeABDTj6",
  "key18": "5huSZ1hja5DsfEHuw1KQWquWnAN6BikPBvShRZrut8QZ3t28B6J4pSDt8xw8uhrW7dmjsCwEJYM4i72w6unUYZcR",
  "key19": "8hdvvviSeGebnmsHSV1jpdGhAcWvruoydjqNyRZ1m8Ss1oaMyx5rCfd6jDSnjmpiJrVTMrn5ZPzJj6rkmD9JwvC",
  "key20": "4mYTs3ZPc16fPRiyJRBc9hSdDuhqQLJWFA4BwtmZkmNNWTUwzEPK8fue76yK16SERGiZqkzx3NurLthmPzrPZXUF",
  "key21": "SL8xFjtKCZQg2qvuU2m9HUHwhrRh6Xmfci8pdFaXhCDDTYMAhDxTfcWttXLqsECnrt4u1NQ8w6AXKYMcfX95hsA",
  "key22": "5xz5hNtxWT1tzFV3WciCEmgpd46cHruEJkrcdzFKoBMrWkLzpyfVZSXpWsWnbcR5r58rPiZ4JYSMzHngnWX1Qft6",
  "key23": "mgEjgbaKHtRRXFehs26W1HD6cfcPW7Gxh3n7cFRchjNFEFEmZwvKP4ocNjxKJKV54fmdpEenqHPnFSZ5f57dSCf",
  "key24": "5p1YG8uSyA6nKJwA5k2qFSgarSZ4RCvFNwowxJtmqFdayvqwx8FrdojakXTpD4oRDhhSivVR5RmxKDUWBsdyRaVM",
  "key25": "3aWPqrhEiKtQgB7f3gBcoBDV3aesLkwTbAcDfPCWy85Cw2r62ZwuDkS54b5TR6MvpnNVJVjhPFgP4qQJXDJug4yR",
  "key26": "4VGKBE1nPZ9WxtJ9LDX197d7iFLddeeNEegqBKm1A3QFzfR6WfLa8na1v1Z9T6539fVFxwg8nyVa54tefjQpxgG8",
  "key27": "3MrTkLN2yTGqq3YoPUJvzPgCkQyzY45jqotbGgyebwXeE1Cu8MmJ3DM3gjryxoDBQnPWkxnuuj4PmAhMv9oN3BQt",
  "key28": "2aTtuu8pt6ZAMCjcs4AbDYEyEgEKAW3EzQR5cGiTCvx1SYrUpMDwDWHMqrmr1pjWaxz7n9Tcu2L23AcWmymcEAJG",
  "key29": "2TogRhdqbPBAKyuKo1BSi5JSmNy8zpbA9Nm8MV4zraNhG9oY3pf4xCpVngGrcG6GYdKahGAancbYwWcAickb8tPz",
  "key30": "4AhwNd7xoTbup3sSARZyBH87kyTXcTE6qNGunqZDN4kTVoVsRoSus6D8BrRAfkgSv9789qAXKBzMrjDN1k8ZeHyJ",
  "key31": "7uGAeMVQWD5JMHoBo7571iMWjNcTwT4wXVtjF21BgZgTh3fieDVnBzxMGFuMDoEbeFARTGsUL1nf9n195kdsvys",
  "key32": "4i3G63Wwfie3SLsgZEfkZgy65HxWqCy1nfFTnit2ykPow7npbokKSYR9a4yowLhrCMTtUk7kYVxHhCQwZAuyQREU",
  "key33": "3sijfCayfWrmT1sa47d7TTgdSwoCrRuGfCSZzWSd5JRmGK7AZNiTW2YuT2aDb2ha33YCqApeQuZfc8Qs2JFTChqD",
  "key34": "66BJ4LzMoznW6kRePhsNKo8XXnaKwBVnx21ZCXwixSvftiZZ2j21i944bWjFmyV3jukcWonKzQrxFZsp4KUH8Knq",
  "key35": "487niTggbTgqYVY7Fq3x3H9exCLZXM16RNudu6hnC3FE7hcVrktneYHzUGGJm4JkhS94dyjqLwaYWb6uxcZNG51f",
  "key36": "3GYuM1eWgcmydAMo4b7vCJ9Sy3HBV8p5txjuN2UkznZ35nhv6hgrmHmzfeZbRCTpKwyBrLFzaoTaqHsbE5b2xvUQ",
  "key37": "2GVQwuodKJ38CRBgJwiMS5vtzHc6BuiyDuvkD3ySMQy6sqsNwWe9DcYUgWMbNUMkGZk2rki6WHToRtFhVnpEHYgc",
  "key38": "2Pc2PBDVk7sxySdoGXy9NMPmWRf8o5udRsLahV367eUD6AhqQ7jegYsLeZa1RdSao8KhMeFpvLpodYCrkshRikcA",
  "key39": "5SM4CakPRwX6fSwG3E1X1PTyhnstEszCoaQzAXwnSTTYTG4kJBGPvoW4KEFL8cTUt92md7igr11nXEBazjAiyAa",
  "key40": "4NoYVVDQGNaHQr6but3onL2vCZcHZmVQrP2v4WXKYSS2yn8HkTFZpGehzchWmuFzAxy2UNfWd8kNuMNZ4ch4QBn1",
  "key41": "2AAoMoJEgb93YQ8EyTZk9eGbvqSJ9v3BszMG9wHwBdaAP5Ps4jFgq5LQzQsvnj6yhPGtjjmZsoRJa8aWnLRuPQwo",
  "key42": "3E672eFdNGt3FzHZ4hzLwvvx5g9Lshwm7w8kTNNjZ7q6eUCcpcGrqF2ReTN5tm8P7cCH44Dqcyb1jHNQhBKMUEda",
  "key43": "5eejAoUKHUYG66cnRQp7UPafh33YLUbi6K98XMBYxGnLwcXCTvvbRXcmPo5b53nFnDsuPvHyuC4F5DnjWbQJLkCV",
  "key44": "3AasAAbHTMHkpnTiSSe9vA5AqEUom9sjwHqHX74KVBtWqCvVmrvUsmX3FeVMTdfr4LrmWDSqU7NSUjj8dVCLuzvf",
  "key45": "fwQ8D9zFjapqhEPCf43hcjKjXYiGRamaY2yTmZQbDYy9sKSFKMDdyvZaiknpK6hGWmb3GpDo2V1RPY6r89gd9L6",
  "key46": "5xwR5zeJeEev5wQwqM6dpvncPLFfGb6CZyDjbW4XhGVWPEC15YVcQBCEWsWoZkuoNYtUpbzjsH9XNQviwTqRBA1f",
  "key47": "5UZqLqzv5BbGGqkJUcuCbTsYuHedv9iydvojmwKongk9DKMKvt6Z3H3ykvGusnLt9oS6XjJCwHnw1ouNffRmAER8"
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
