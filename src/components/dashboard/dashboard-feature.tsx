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
    "46jVSWFVjTrri9wADuzWWYLcTpChs9tkNzhbaecekGiNRAEChSe26AwoxcKkzgUbJFyLZZTjWf9WgxsUTKwQ1Ugs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZT2gvbim3XLSB8FWGUX1Hu1Sx8JjLtP5gP5s5R1gJ2tLbas4w7UjfcLsFaRqRVQVgGM4fCEpH2un47rtMnYzPDS",
  "key1": "3BbGYJrwQGNJvQxzpYG9Ru74tJhUhNhZz7cYHWNGMa9PPFKpbsz81Zrr97ipnM66UdKsU97nMo7yMTRpiUKH7B6Z",
  "key2": "4aY1KebDrB3WVQp4aVryrY4yTFn1bLiJ2m3zZhgLyNpzA6pQWNNAN3sFL698jUkMN6hr1uU8FcUfkce1xv8qhXf8",
  "key3": "53TsRMGJsBNcrmHxuqsmQhi9MSrH7SpLNbctn2TA3c7wPDt56dE5ie6DrFTKyGGXg7hDJBiKjwFWWBj7hP8QXftJ",
  "key4": "55jWn1bbu3JxxvS3nSozukbvcoaDhrKKdcsjNdAWcGmPFJ9YkT36tTKWG7fHMqcrSrcuBvXNTdxsQBueemr4sy1W",
  "key5": "24MWs2NLYDYFchHeNQYDnLpkWUNkJxghnN9akbb64xf6z6XCnFNhPgY4Lvm3EeaW6csPoX3GZ4nJZhq17Di7x1ys",
  "key6": "j8fLYKUGU8bY1q7qGxzkF6VYKAdWusWh3J51kLhZBEMekfjnWmBwEafhgdyVf1ySje557bfcPubco18ECHAXDuG",
  "key7": "21WM9gA1ujntSCsL1bbgUeCPEF9bmLeVbW7xyw7Ng3ZHEnxXBHKne86RXTZ54FZCpyqcodTDP2XPatwyG88qtM2P",
  "key8": "3cA3rnbP3R1Ff4xSvzzwonb4dZJg6QqWgbTDiYBiox1FPMcrywaq5onNJV56NUwQNDCDoytywvPpjtpwtB5RjVG6",
  "key9": "4CfmUb3pmY1TBpD7rqDKTKMQDCy8LhUX1azPg6LD9C2Gj4NS4jCTh6hWcSUwqrd5FHBDnCm1Q4GabvjeEzedPa2H",
  "key10": "TS48zZd3mMj8jRCdp47BmsNgncSXp6RhcoQTwKZfGjWzmEXE2oWkxXEYTVnDrdwqYVGMC3KAYWE94tgfxvnQa7D",
  "key11": "3ieKBcBjZ47dQmV9UeUWZC2KErZG9G8rXAx2ySujynz7HBaw3B9BGaAwJLH3wR24KxeBD59KKFHt5Mqi8CNvJkzy",
  "key12": "AzwMoiu85TiHnBvJwPjSS2BdMzXufzCzwEiub1ZvXagx4cb8uJdmfkBdsBwHjcrULfwkxjKhy35ztcrYfUh1GZe",
  "key13": "5CY8uV3NwXUTGrA7bQWjvfpkog8oZ8E91xYnN5qRCUNRAVuy8JRafk8DeS8QkhQ7QjUWaJ1vZgtzK6Jmrhbkkojc",
  "key14": "5qLoRG2unm53ARYhaFyZTNi7b4b1Nh8YbBUt85HjKaV2zDffkomMmGvx9myx4vBX3DF6fVBsd1qhGTNsunvPYUqi",
  "key15": "5QeE3AwbFMaQHpDy41corMQp2uaMEyUqkXtwzpjwfYQHUnCJdEKMddxro8Jk8vAyzE5N7J9SWktHNbuD1QsHb9mF",
  "key16": "2BUzrHgpTGTzEhfS2CUsVwUC7Qvt5pj3LCWv5HHaTZqsHfbSBshN9oUF1oK3JbgF9C3fPsF8xNthCb6yU62H1kpg",
  "key17": "4rzx5qEkYvs4QYTw9nbYpEiog5w3Cy7xnXaENmMve9AHfAyeTJtmxUPymG6NX2CyE62sprBrWmZwGLEMvJrPcQDX",
  "key18": "2t1g6wmYfSvesoHUpVwXqeP82cdZfc9ZcvyRwuMKMY2vAq9GLtjL8CBfTy8FN3GQesWpa5nwRU4oi92m8D45B1Rb",
  "key19": "3PWQostZRyUKR74FiQP8iaVEK3vx2QkvbVMHDRbMy4hgG2gEDvJE1aMToK4FcvrWKXdXofUHtzyXXV1KmV5ot9TQ",
  "key20": "5NQm1WiKqQvpuAvPP8cXxWoqn8Jef2y969dvQHZqKruMUeE6fkgaDrCTnPu934DrRYSrCdmGg6en9SkK1thMHqYB",
  "key21": "3VmMupA57vGrTHJ5rakibPwwRrCpjqNJ73JFa4nMUNrm9d7vW6NqqGHNwkQmTgdnqo5sJdcUQVZ41vAAV5tnmAK9",
  "key22": "2xd1pmEDew7zMWiLUXW772rQ5Er66bDwfvswDDniVjWEkgKGTWJDj2UZkTn3CRmDGr1Ss67Vnz5y9dSQTJETKWzM",
  "key23": "4vNj9eT57TQUscoREGQyWx8Z5ZmDCUDazxDq969dAKCyPBAr4tWzvnZuAY9uVxRLrpLQNsUyQuxegBBpmsxprX2k",
  "key24": "4uvMT6mshRAxwdNaLZnkEc4gwTBHpVtUGefYtgNvug2p57SCEAKCaBUQ14dQSyQP7qLWXPDTuxX5socDTwTNP4xU",
  "key25": "5naxrA1dJki2k3eJQsDeTyZVX4Aqywk3QsqdW8CPZRajnJc5LMZtbqVmgvUdwE6a54DyzbT1oBwjgchmZPfbqccu",
  "key26": "5hwzsLx2ViBcMMxGAEiuqXLWbHSYsjA1LymPhAT5X3gX7zq2FJ1VDP2XwnTPaSoMho7oyuPz5LkZY1n8E28MgsDg",
  "key27": "4BEvejVoVCJjNdYpyTkH4eXws7FdKu9WsDA4XDKC5kJKdB1f97zpRFg8TL8qpsaw91R72VsYrHvGxzBsVeAoBrGe",
  "key28": "5B7Y98fm38hm8Y2wzvDeqPLwaDJ2zhfZ6BZzK9Zzrvq49sDGiuH2jpaFHTcAqr6ygGUez7SVUQ1G8qbocFCvv8fD",
  "key29": "2a2RhhTWoeXGYcLuK36JuD617yQPHnNHc5nMCv3vqAghMinkz1q7NyTjfWnMSL3vh7tdW9R9Hma2394g5jLoLuCf",
  "key30": "5eSkKFKNZGjTg2jg69nmdMHZ5e7LpAJt4eHFBQdhxhiq2gwjtV8r8n88yodcQE9MdJ64ukLmvsL9TM86AF5T96H6",
  "key31": "48dLRtHnWG83U6Q9dQ88BUZCs8SyanMB9oQSykbn3xx5KmEQtj3EehfKKFMnJxd7mft5pti57ytQrx9MHkjeRUhF",
  "key32": "4VtghrMs1foAzhbSSJYk9R2291CGLW8koPUjk171bDWuurCmp5KbUcaRhqstxfGRyVKi3cBasL19fREsC1pZT6tN",
  "key33": "frF6wEdKNYBz9Qs8ufN389BTu5Mr1vYPL4vVXMcvYe34t1XwvKKPWB7HoUnDogf4PzBeGLcoV6E8FV6qgmHmcZM",
  "key34": "4HgoMP6XjS1Kdrtfu4DZspYzdSgvLPRrXqbQz9PdSzEmzqnbGwBATtLp9MRA6tPC3o9kscUNBvD6zXmFyuoM8kjC",
  "key35": "5VQsH6qwmJRTXxUcjesBCfqLQpA2DqEamDN3qFW9kfwfbygahw4Zj4mFRTdrkhnGiboACEfSZF4Nk1Q6DvD8bWNU",
  "key36": "sb8QaDQqaLqwkqr2uPYoWcLKm48HiZdZdSxthiqnBkc3xe7GnohmWr6e8FpJSzM32DzSJSSj6Rr28G9Dyr1DHdk",
  "key37": "2mNeZv8Pi1K1EhLytHoJss8BbbVY7vhXG7jrD7pDRCTCcFnAfjqEAMCdeGLTUp25L1HP3d94cQkbASqMyZ6YLE9u",
  "key38": "4g884EU95ZdxyEYcnDkwumwrgE4ZSB5undrWWn1hhupuZNsJVfZyybibfgbVvpjywL94gA1CVUMxz1xiaUk3me5r",
  "key39": "2EyMpxefngDU7wFRaa17yRbbGoVa1KjNT3pdTAKy3mGxKg4Kxf7pJk59paMGyGyTctGujEbN8ToNh9T4MkxUAjzg",
  "key40": "5SujqtT4Z18mmmLp3NwioSQBRoP6mzBDhevJrgMJZgZqr5NT1HPiG71V6hx22E7VQJcH9jSjb5nsCbhmnK7xvU24",
  "key41": "zy3uYyup3Ng124MfaZr89JjHL7KMdmc4VDnsxWukeasMskp45vMVsyR9Lc12CBcpZMxFSEiFhwHe5yBwKyQVuxj",
  "key42": "47HPtSbpJ6ax3tAaMXrUEVrVCZSBpTEDmisRVyYS38BhmQm33QXZdPyLibGJ5wmYrCqzMhFQ9oJae5oi4Zk6H9YV",
  "key43": "5BJcjYSd3uvVGFd1ocycfeDxhFkBvBv7at5DfhzjVezcbdr7q54ERbkvCp6jgq6J7VW1qnE9tboa9cu8QthfEZHr",
  "key44": "5H2MWgubaZ6x7hVVfWqSeJGnu5y86VE6nxr4DBPoDJyaYuN5Fuy5yoorBa7UDLdaLR4RRY1CxdzQu4qtBY2xQSqe",
  "key45": "3RddaPaVeQKNjWt6ab7kWu2PVbZxTHTxkTnvHXR7eNTWuW7FiJbKSNjf5b2apTTt3WfS9bg6mMW6pMCcKrTmri82",
  "key46": "3S9Dkir5LTbd8rZGcNxH54Dk5b6vjcenjZrVyxs2FPMxqj3CGRzpjkioFc1aJzArvqCHHzR47Byy2o47LMp9VXRj"
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
