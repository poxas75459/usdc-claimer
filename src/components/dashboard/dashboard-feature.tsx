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
    "2fiSUcUrseLZfZ7aznwvmptNnUayPKLmfwf9v5sbafVPMs1upJFPjUTJQocSZdPGCpMwJTiesCip2Y1ucnSzQvPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WCs6Cb8QD6SMFpKwmZz8TK68fb2j4sAo8ScfBDWNQRV9yUJPN5r1giiYMhbczfNTBNXFQC9YCJMNx8mF2JN6SqF",
  "key1": "42erMct34GQttCDn4ThRjUnHqygeTaJrqju5dNWN8wXthWTLvxeLwau5opfdzbtgmrMQHFjpwC3DzYqoKVQcVpka",
  "key2": "aagBib2GoXu4hoQxyDcPAHamd3QQFNJibd1bs9PZTjX29Edb4DYWxQ3jk2BqupHPuFxU38kcRa4AoDMtQCKmWPs",
  "key3": "2ZZg6pnLkQYBbTCu9Zt6uWB2QcgYKWjA5ptZBPGi1GAYkF6gm9dN1CErvhCf4xfMyiQ2WwwXrMDqDpLb7mMNv1tr",
  "key4": "4ArjmyCHkYbo84VeYvHyGAp4BUgUpSjL6X7Cf9Tq5V8D4hxpZF3qKHtcnEbHdEX5MkU8Gtz8Sq33pAxWkvtLiHrS",
  "key5": "2UMGKbBAjFi5eFXp89mMuEV3jUVXjr3fek9Ntbbuxmf9gdo83Y6zTDqNRJUmZGbiK4Ddti7nywHGuZdA85T9G7F6",
  "key6": "3pmTPBmUGGBcZTnsbrXk9VJcttNx29wa6caSXdA6sDT6pttUtHFdRzW3wvjHTfxUoahuwHjcv3pdrVxYRykdBWdc",
  "key7": "2uRonCAqJ6irwdpCVTzgubvALFWAkGDGdF3m8FejTuTe2a1nPjYwyrzAmtcEaBHayX78qtoCgS4qVp6KDJkNZXau",
  "key8": "2SCBHuVZbiEY96421pWiLcXfpxiPdoCancFneW5hRfuyeywxULVveGFEuLekwPuggWTtFinEuYFNHsH5NV8CHgCc",
  "key9": "4De5jyLVbLeEFhdNCD9i6j9HnFC9FfuEj5U4JWwuvn7XhkWHL1Te3ZGuKAUrw2Bb4pD6Z7m23B2eQ1mFWZrUKZ4s",
  "key10": "3aWT6gVddaN4pR8EvDbzfjgBqkE9h1vZjX9ajmge5r28e3PkbSsNukfkz43taf3DhwgPeULTPTj1MPMpZW1LckhK",
  "key11": "q8PdDh2FkKNXWtzuu1sdaFPaTfLqKjVPT5ngbJc38fUn6Av7cnzeU12c6ebD5Z5PDppRUUJRRdDKKZeSYKWES9h",
  "key12": "4sLL9s55jDD1uB4vXkgaDYP3mqXdcUrmx7CY9cCAT8P51c7f5dBa6Haxn2vysCMW2P4vprdtbDFadiuDc1QXSFkr",
  "key13": "TxW6nAkRSLrKkP9rFbjnFzB3VQCgbj5EtFj1fg3WsVpLcdSrDo8rHMyqDr8R4MXYb59uMMo6JB9XfrNq41MGUg9",
  "key14": "32Myw7Je7rLGdmFsXithpxwGDoKu9nUeokMryutKit1uHLedknQDchGdkgGg6q15HwpzKbUqCVFQAnaSwapDN9wk",
  "key15": "52vrthZDf1e4tYNCRh2dXCc2gcTdda9oVzYSn2GpGYUDxStRnnChrnkCo3KFeyhogPEkFwHLYWXSM1CRk4eochVi",
  "key16": "2vzrP2LTx3s95QZGEJP4s61XzV7H8PV62G5m5rdJ9xKkJxx7fuziLTHJouTVixVkwshQoY42SWZTorQpUNVK9Ezo",
  "key17": "5x9WfqrXnqxg2egryb5ZRykXtZZBAoJoFNNJdcXzRp3AepmzrmavCqNbJKZ758L5ft4mtF172QvC7RQeirijwgT1",
  "key18": "5chnT4oxJ96g4nfJupArJdDHahmaN8BrVGZ93PwJ3s34oWQ5KhvoJ15sRC3zP3rhNmvbE1TQCs92oXTgc49bChA",
  "key19": "3GWx7ttbTjZAaGmdpbW2RruUzVpzTb8iNWFh65hJ1XwAiPpsThE3Sdo1dKRwGAZiAdJZBg2vUUaVMLNxoNyQdsv2",
  "key20": "5otP11uA4F4J5dKikC1zVKk6YuYBZxFmjFpP4TMPoz1ygJmn4yeEUaPLuo6FpsMKuc8mi4TMqF9MkbEesY7rNG5L",
  "key21": "67KJunDnjiLdZ6g8EnJRbp7vrokdNixLvZWRdYHTehviQrUV4mzXgo5xYwikDsRQtSGoKC6wXnwwxsozmSdfBHSt",
  "key22": "5bhoo5YRkjDARVffce9y2nRiFQ5k25PRkej5fxxrMDPxMYguJyhYrgkoktXgk3JSQr37QSqkrUWmdhckmPqY5RH1",
  "key23": "iiU6xRtTXk2Rq6vxJCkUM7RMCM1KD8qnUnKNu5XdDB9uJVfg52yaLzymx5BRYywTvGwGVCsJf2PQ9HhVbmYBzrF",
  "key24": "3rxhTq4iNeP5wXcqnxdvZcy7dXaZdaDqfExTKLDt1N6sRii6MjaCyNcY5TA1vqj6SyrV9jb2xRUJq7QXbFN4Rgop",
  "key25": "3ythPuyj2hWycc71RhnM44fNGTGcP4c8rc3n3N3ycwFbZ6583MUtQs2zjmA8cozibBe2jXGP6DjBKUFKpj4yLsUw",
  "key26": "3tXjyBP1a2RozLh5jStJLRmvGCGswWviFgcwEbioCnvsx7s7Qwoi3gyMUrzhxb5EcVvTjqLirKppX6jF386h7w9r",
  "key27": "zP23preiijAC9uVonPD6tiUWggn6A7nywxyb9wHBeyUJQAmDnC1gU2kmXLdz7NARiMaeejEYfiZyid174YBycoE",
  "key28": "35ztaXpPnWYcAKnKfiBbz7yy5wZxqxe4yM7iughSHekdrjJDAnVWGouvqFGrP1irUSP64AEmrdmmALZiDwPKKCJR",
  "key29": "5PV6JJMNyoncvGE3r4KcJNhjwy88wUcd36yDsUFC3DixKwiCpojeq8gArN5raRse1FrVzsbDNjDY9WWJP66ATLPd",
  "key30": "4DsSTemii5vJqsnpdMgUWJ79dXyPWD6fZMDqQqfFgtbc75AX2KRDsCSELKb22c1Fi7RUuJc9Chp6iPpM2t2ARj9j",
  "key31": "5kAcq3tGGFhysXsoF3hJP3ERWvzBLkHXbJeV7DrDrKtixCb4ni19MJq7zTjgm8kokX4ktN7dg83JKKYU92pDUw3c",
  "key32": "YFQm2osmb73Nta9z42SZuMVrGK8AD7Z2UZcWu1UwtYuTjyQNG63vZYgimUzcYUShSzc17NKPXmrWmyAY1epPiPQ",
  "key33": "4xUVgWRky7B8HCa83q6MTNWhBpeHJBuzWKq4S1jCKdii6twao2EyLbZ7JcfvzsDoLNuZn9aWWoAHGLk1a6ctZ25u",
  "key34": "3fkZqW68xP6XZS5A1EsVoEf5v8QQJs5N4yCvFWS9xPGNdcXFNXKZUwHi3VzB2L2EK5jwCmfGTxhfPraZL48QZ7A",
  "key35": "5GM48VqwyMzmRhv7ZWJ9q7o1sgPnRW4ihXADwQ3DgRXK7K9o5QyXBqm5Q55aWkEmGdeyneM3ermSQoF2q5nzjMfJ",
  "key36": "2ukoXSWU4rBR6tJRxcpLz1ERWTT71JU2Z3cWTnWk27znuNh7MYiAF7rP2JTo5ehRpjjLkM2upmZ48geYeifqWKau",
  "key37": "4NgSW9KQFtgYQuRd7Y2sPKnwkBeTvzd3bHDUNS86rrkQxksQ4P8HMP6Dj5Ayk4D45hHXzwXqpspX6WDcJ5E6zcaD",
  "key38": "3tKDBbR2i4fCdzcc74aZ7f7wPUAbNTeRePc5zaVW8pnhZ1CLxNTZNk2rSRfp5F1uGeDMsG7q4MJhP1b4CAtkGy3K",
  "key39": "5sjSgc6SE879x7jUYp2RpxK1uZwSpvWDnFXrpJsKPYai1hwaaoeaPK1h2URMTiNefiFYjU58tLb51TU8bHkSUCmt",
  "key40": "5MXprdzQFZZe4eL37xQYpEQsRevrt6uxa5zevUUEkwigTVbKDAzkwtwpBiStX8C2KkEmPr3yYydocYobamthN5j3",
  "key41": "5F8GQSQGjHUavzsPmSCTkYxnNhSswZD32qJmyyPrkE9VBdvtRNBeCwU9XRMjaxqbCS4Y4tcfaGUa6yM1zxquTd7P",
  "key42": "5xWH3AYSXZnDjFfDXxWGviYAK3B4SWPB9EtJb8Z3FJzxFvh6X6BMmfVNYiXaM7fRhWGNALqWxg2YVgjRTp5rT1Th",
  "key43": "5edHWFz82TVsDqS8HXKjnJHN2QsmDdGcUtgpna4DersenMoY3tuh63v8thCxRwsp8GdhaLqwxDu1xfgB1e2zYHB6",
  "key44": "5KvwdX8bFSmXia4vVyunzZArmAipteXoKFPKjHsSiu7KZ3dz3kTSwwN1EDD8cjV8j7yDeQYrV43brfozqy7ezdi6"
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
