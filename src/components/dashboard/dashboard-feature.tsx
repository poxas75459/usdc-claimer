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
    "3vVZhnygkZJHkquSJU4GcAHLwxBZ71PVPN7MHe5rmoQH5hLaRS497MUErWLF8YvERcg6gQtv2MPBAN2YGbAd4V2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26oN434Mus4RsrbwJnq4pzD8uBJMqEPXSJbn26Cr8YHe6Y73o2oZVhqtujXNqmUfG12GApGWRTbuKigGis5wGgUP",
  "key1": "4hnqZJfkw1nuiaVA5oKg8AYWHWfpNwgxrbD2UE2c2ZHuLZ1W3dNcE4SMp3sm4oi6r7432uesUGJm2AyFdJUvGbXP",
  "key2": "bdTgJmffECMy55tndh8vqxx7jVYPtwcmUKobZCL8MxTxdbG7VwvJesq79tCHYgDTihuR4vWRWg8yxTptHdh9xHR",
  "key3": "b5cvwvtiRjNDfsk9RCXMD16foMa81mfwqpVVrKM1eNLFKqU7qhqqh7hAeSqiBTaMTrnKiMqWQfkj7Y5dipNnL4V",
  "key4": "Y6De4fcPmaGpf9Hzk3UkyD8geGmgGBY9a1vLB7ri1XzYzCbx4gaxed4ewbGyHn11dgZy3deGwinoWbBCu8hkL43",
  "key5": "2t4GyYmPSDTpmQtHCSPBQhuiYkuVL1uQdPbbCZoHxibjx6DRTixWZhx3kvNimgD2YXm9bDoyvGguJkk1ytTCZKcV",
  "key6": "C7TKewv56oXWEjFc8s89DbhzGbd9NNySAeESijLjzhjG6iKwR1VgSWwXtwrXcnmtCARJScR8qkpArabqsFh2uw7",
  "key7": "48s3udf7RY37im5kTGe3NPjcSEYi8exBqbTsRkCVGM6hd7Hfby6sjbqHHC1Sw4kZGUvZbcc64C9M7j6CrNSrrDyV",
  "key8": "2s4W4ZuWH7GLrUVbUVGVUfZP1u2YcbcSDopUcqSMhhiAz8QhsnkSPYKk9FJUha9R3Uxw4FXu3HnyBWBSqkG6Gik2",
  "key9": "2a9H3B5n1HWzkpgMFNoLwpEJam3abAzJiZBVYvCjTR3YRPfNaEQabZUEJqZqDrTEyuXXDezvzL94W2vSH7KWCrJk",
  "key10": "PX8AaN85RWecoNYKivr19vZL7WrSmNFrBQzTsmgZ8n3Zh5QM3qqHHgc9ug7x5SyBfkTqWzC8GkBFKYCct3b6GpZ",
  "key11": "3N91A64PRgg4G4R8aw9coaNKBBmCdPhtr5Hm8M39ZN4f9KbXBs1o9YRM8G8LNPsajWFjSLpBrdw3WP2ygfRzKm5T",
  "key12": "4xmzgSJBrZx8g879ojyVyitqrMgqEkPbVHZ5EPkWvQSLadU4iYDzpjpqLSHwzwXjtgfx825jD1hVoY4VCD3qnyEZ",
  "key13": "4EfeZMyQ9UHW8FNzW9QkuVXLfAZcGmGq53zKFrX7W1XcD3dWm9zednSdPRsUtM1WyiJKMQyXLqhyVh6BBs84eJMg",
  "key14": "5ML7Yg2LA7WTEwTiEevLBiAAH6pra5oeGScKQbmMqTEjvfJTayj5oNPiizYZ3VPuX7b3fzwZFM7gA2xDQ7XTQLnT",
  "key15": "2FFQiHR25gahngrFuxyksJRtfLikxcYprheyEmoBzTdUJd6goemGXStX47EUFus98bntPqLdiC1CEGLSxmYafZT8",
  "key16": "25ZNahB6fSQzms7PhdqVQFZGLNpGNyD5pirxwNeek4z6XqBbrp7iCH8oAZhc8QVfoq4MZ62uERnXfgXRzrKgxCo8",
  "key17": "4Z3zVuyKGHNbxMinAyaPux5Aijp3rZrvRa11j36zJBh1iqd25PSDnMBTwGe4PXnuEb5B1hijk5fxHuUcZqR1nRBP",
  "key18": "3tG8ELfS58vPp5QPMw6z9yWa27wvb5bQsoNrnkbDhWx64xsmKA1iqnHZ8XGAZg8UxMdQCgBodjWQjiZryo53h3E1",
  "key19": "3hzeCMb5XusCvMZw2MchotFQgW2hJgMCJMc3UaXwmWT9JfzFbh43HCKpxkBKRX55PB6sXeBX6WRACUPvxU1Ay6uk",
  "key20": "3UrSKEFFHJdh5vxaDnoXGr4CgTHTpNBdCxKto9W3zpSUTAZ9zSRD8UmyekkgpG7mwzRvYwaDC8c2EA3Z6kGQepQm",
  "key21": "3bja9uyLpf72MwzUkiHDDDYtLV9afSFQ4ErSYzPBt1ssdERqb7wLLRo8U4s2cB7VH7GkMcUAJW9oXevaDQw2dcuF",
  "key22": "5DmmsCxmVsWGCASWHDCpqFbKiEeKjPknStcfiQWLHLjfFcHFyGd48LcxggkFFkk6PkwyiGKJa8imSSk1MiLzZuUo",
  "key23": "3zskQ5FCZgzZFgJcsE3gag9S2ioc2vvPkch1VRg7jvxDVpiW2yDmXcxryfmFgeubtFbvGe5BuWY8LAj6TgceYXBr",
  "key24": "x582eFmZnZdL14d1Zk4G7QgYMWcR5GTkwjPerMrnFhgGirzf814YS7ygZVraE5duQ8JCuXQajdE4fC4xwVGfSW1",
  "key25": "2vscUTTu4RjTjvXS9HmtqNBtxDgKsfQX1M92jKnjXQSWXdD66UL1M28o1qwF7msrpAtjeA3FPDAfMb3XWKQ3aEpX",
  "key26": "58fJ8eDpf92qisooP2jPUvhZV9YtUFqEngzpnBYDTCXGw4KaXAdJGfJfrQKNmZsAtDJ9ZZnYH2scjWZKpHRktRAt",
  "key27": "4SriderrggEsynpeeJ947xhRWBuMVmA7nBX9iyVPsSi5fFEaALDtXFytu3ywBwbrGQRJiKVQdBqoJZwbkAEiXng",
  "key28": "5CDUR3K3hpKjzzFKHni4fXWdqCR91tqoezqLQzW2Zxii5BQKJqNP7eFAJMC5u6TLum3MhDNQPmiBhWupj24Ws72f",
  "key29": "5Tmg6pd7Cvi3Xz1B1Xn3URLSt1B8oofDYkKJei3cnNga6bWZ2PELx3tQKANYSVimpRGEum3SmBVpiVGUJhMvc145",
  "key30": "kqoUZdU2uqM5DSnWe56yyE2MHt83Ya6TmYnPEKBdFrJmXCM8psQuTrsjNVZ7pexA2xKqeQATsU4wT22tnmFSCg9",
  "key31": "6AEg7unfGDkNrkmFo4cLdQ3qU7REzfe8pHXNV2Z1uuWUiZS9WvmtFzxMkkZRxqBqePNKMm5Y5PWwhdypgzxa9kd",
  "key32": "2dLnuVmT6sYaDPWCNsSrGzHPp7eZ26djWhzNyUXS96VAX8KXM6MtAC1S82T46BdG8efXT5Z9Q8oKRNKJ9TJ2tJYa",
  "key33": "3wZd2ipB9EGKVnh6Y5qCEP728XFoEWtvHhriaS6ex9iaCPvJ1VMuXN7KcwTffdZSoNsjgMMw6krELpRTTPBBET8J",
  "key34": "MPZ49vQq1hktsE2i28i6MDzkwGZThLwB9bofwRxRRew4E8Ewj5MG9gwQYLePQbE6bt1XRK77LCUhrgoVu1vjfYq",
  "key35": "2tY7ayPX84seprS26F5ta6hsKsFH7V82kbSyJE33mYuEqS8jCpMvjDRtLisW3Tsi8sANE6PL81WD4TwPLpSM1cZr",
  "key36": "2934Lzkozy75SUceaTVwjSExbz9EMsSbVSTRyC8a53tfsVEQ7qgVpMxrkf52KE6UCz8CvmLWi1atXVbUQkinBcmF",
  "key37": "3osbXfd16t5yvg6xizCvMLTFyHSyFDxCAXLqsXtpQLcZDixb2UPKahv47EYgWraAPbBYPPHz8LXQKJLccesUdpDQ",
  "key38": "4rYgNqduEBsehTzmdFB3t92gQ4sFrGFNTVQ2z4aNnmJfSN1pGgiF8QFDUCkQRKDnbRvxG75AvXmsaLFN5S1SUdJx",
  "key39": "4QoB7csJkbGjsirNomxtqnTaiQnJJS1cDYVMnp8KpNipoVm6wpmCesPt6gWK1an4di8A5jtikLAvYaWJzrZS1jT3",
  "key40": "Pnp3oo8pm19Wao19wMrSKBJjyA4afhZGhULAq1dUoKHUPZEYKDjyVuqh9bDQSTby36csryMJTWR7HdRwdGUe7Bi",
  "key41": "4oA6o5F6KkcDjWTdK9QtJrGYAbyb351C5mezNDMDs9pzWdSJ17cJUHM8rX5H6uUpLVd8VB3o2jzZRMvXcwiS49tQ",
  "key42": "jEB1UdYtzDLCMTFBAKWs47YYvgEwh4QgJ5sa7DHgS9b8jMLPkpyVibRLoY4xcHo4SBruod6GZPZjk6Q8f3mgQEy",
  "key43": "4jsAy1JXR7bbVYfQBh4MNAeNQhunbSoGihhZPY7eb3wdEkJXJwFA4sde5RPXvnDUWBsB5jmgn1EzwfEQVTdgHuVD",
  "key44": "38srWkDeVXkTKVNWjBxg83ZhZ6dDp1d56rR1neDh2jM6nsLgxABE2nmNKFgtDvF3DMqVyqLJdwmQYGvQHQZdbsZB",
  "key45": "5wCmTHrG535VhypR4nNVxhY1Y9dUworExq7DT8d1ZoHErRDsXRB86LmULcC1ygJcSC5hmGVh6hDu6PCoLbiKva1q",
  "key46": "3Y9e9UESLPwDHuRgELgwjXEt296ojnvCRSKNrGbVw97oCZGvsxgy44vR3bCgFASPitjHR4dotq8XXiCrbFVx8gwT",
  "key47": "2PCVRH7SYjkEkPgYtYm8mSrRrus4oL8dUaWx9Ze6C8pjoaCsbqbBpgJB1MUbP1zKYTPkDH8QeshT8UugqJfcQ27L"
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
