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
    "4pD2ApgiZdyWeqbQLZY1CeCcW8FsvXdcUcRU4L7Cn8EGgK8Nv22dnJAmNiajZm2rzAEuJ2mavtD8UqE2UQNBmLtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nnyqUk6FhCRaRbJnhL8Y9icmFz7BB7ZMKU27DteBn3KEoFqGL4oRnCkTWi5tAfq9z9MzHQRBJTqxCkgvjyfuQdT",
  "key1": "2yoNpjKiSS2YWwJsb5cAtF7YDzqfrBhMmXRgtawtdPkBygahp9NCDM1QhBaxY3cKA9kDsNvmnVaD4FdVJND2MMkJ",
  "key2": "4KjV9fjZv6Zjd5xYyg23fdd1JWEWWoKg8cGdJnF6z3eKPwx8dr4RCsZNtnjj9rzJ1T5oeJpwy8GdCGHZMX29a5Cy",
  "key3": "TEJ4FZ83Ryv4oegRKsNvhsKUSQ6menuZujKtMGv8GeHZwDkN6GxazmHj6ag2PEnn45mfJJE6Sbzq8qcu8h1MdSp",
  "key4": "5yZbYrnPrKSKqVxKCPBGujwDndF8hyzjv1omj4QQrQkLkaaZ4AEwh7XaYRjUjvYXUrDzHAzoLCGmv9ZEf8Lw5UmK",
  "key5": "2TDzH2m93vk5Jp1oihoHa8F6nG7qNWVyo6wGh9EA4ddzx4HcxLNbJLkowM8oeR8LoFZdwzLMuZRuxVH379X3EYFa",
  "key6": "3RG12MxGihet3UeJy9SXQihM32APMSssJ18LX9wErsJp4xzujpaFAzcSJCyVvbXtJAbB5QsvD7HDDkJUj1xWxa8B",
  "key7": "gQXZdnnL2a5kodQdBSDhgkq2azjSmdVk2PuZF6raSLj3etN8UF5d2Wwy2Radjx3JeYYmq29Tr21HKQgBKH7VJ4P",
  "key8": "4EQDL7pgXH5Ns2mLRgcDwZwp6L7xFnPKn9LL7vaHKBrKRLaPw9nPUzSJYGphuU5Jvzys9eSo5kzqXqo3t6AR22R4",
  "key9": "5WWvz86P1RpHkCQZmUWKJc823tTBAAn8e5PDMFGrBebRDRDG2RWXwWSaQGLNGLrnxKB3pX821droLtZbnX2L9rQX",
  "key10": "4VFXGubEtm4VMP7HBysJxBXJxgE3E92wUb5r9YxhcMGDQMLhMxAQaY7WbwK3kbh5qPYXGUm1vJos6yFMUtCs73iP",
  "key11": "56W7KngQXR7GGmFruDRNYzi1CMGD3cMdXFZKYHGuHwYdmJRu5gu3SNuHKjSA5Rc6XUFYef3ohfcMtSnNszcPGg6P",
  "key12": "3QqrurH6fR1whNt5xLU31GSgsNTMUMCjhbcf4udy5ed71rT1ZNy2akim5s3oFEdNGXUZiDoywmYnR7ZRPaKT69gP",
  "key13": "519UzR47FMuGhNL8Ehi18R8K1nKqSKWwmY8MSWNTMDXezL7Ws7ncWXe8TbdFVUg1oe6sFkLCH1HU5LDRQigAkYXQ",
  "key14": "2U5mR5RhPab6pdTaM8Qkh6wNB6bgnUH39vCmFxFyrbE5uYsn3BNGbaYDCDaaGe7sgsv9cJsm8DD51dzEZDZi7oFU",
  "key15": "5Gt9SykKuetCB1Y6u42EEoJm2rVWVcZsw28fjBrmJD8SuRXKRGNNY5XxpSCb8p8ABmeSPv3RHYkxjaXBYvx8GYfH",
  "key16": "DGSvEFo1jirJDhGcw7qMDESRqzvYUaCLDmuGxLpff6jUJGtry36ewJ7pS14t1V562RT3SXrkYDkfWWFtHtzsq9N",
  "key17": "5qxTQC3ZKbVKMxg2MPyHEBYdwiyKuS8KCBpsyev3bizLzzUwfGWdGBAfUD9xGo2GAkn6zatT56mawFRdrQGRrqf9",
  "key18": "DyJtvhHGnnzd7eyfhs4mZLRN3uezqAjRo3Wtb2316hqGnhpDPmR52ek1MzCSSLQhjDiPmp5ePRBChLkLVkSqUyw",
  "key19": "2BpES5E8AHB3wxZgYcs4EVdLn3YQEMxwqiBhVcXUd3xM4mkUAu1qR8gsCph6SkjVrWwGyLW1aaHrcGE7spv2K2dB",
  "key20": "4mcViZkW7XF1iGLMSnMAFgMu8pm5Ztz89a1RAuCWfrRX6xA7QPzY9bM1ZXzhRLpApCfkuFJWyhumiqFPxeM3c3MF",
  "key21": "cvXkPny2UCpW9bD5zWgukKKMYTDHoVUNwa9tMXXCYBBb2BMQCKpUt9RKJWnuttFa9pAZE9nVyAr6MEbh7gNuye9",
  "key22": "2GLM4cLVxHN4kxgSEQhUJgmmAstc1jf11nTxQZj5cyr9Pu3QoTevgqYpzuiVvBeEv47XiXMiz7GRkLDb7Zq2KgZu",
  "key23": "3w6S1mdALbMFt3qcUjodWp6vftMCh9g3wHLZcybhMxhDJ35ajj9DEPTiVU7TEL9XXBvwiZgJmdMcaQSUnu2KDFxa",
  "key24": "fh174pBdg5xjyY3hqt3pbyc4mcc6Qgn4ULbZtTvekG5T9WkL4HrJFJSzkXh2iBtHehxCJJshAHhwYBhNduzA8jf",
  "key25": "65Wzj25dAqZvkNzreoZExE98sMkrXyoc8pAsD4BBwQz6Lg5ojE9qSCYyMhzTf5jXB7x7JrsLUJ4bmz8GLg6kLRcL",
  "key26": "2JgWCRUvnKMzfiEMrQiFcA9rpaTtPzrA56B2C8FR8pVsVt1X5i4HkPbJKpbwmAUQA37kQsZTznn2MgrrMw3AvWZ",
  "key27": "2cvRiStZsPsjb62PHQQVvWwwtiypG3cTQE8JLAwgN4Z86Qi19vp8ThaMscNpRqcxweV3wY3AayoU196W3VS7P68u",
  "key28": "3tgTpWhYE8o4fidoCfvwf7sHfAshPQdje38YKWqX7Zwy3bciZe1zuwMUjCShTpCQC91JSvSBytnfEknMKRcp92PK",
  "key29": "3s5F82bZVaGenDAQSRySm9S2hTTzA7QTfRdMEBW38sUViKo6yge19mFytSUKZrX6Z36c3oR3Gp7MQufNv7nJAVr2",
  "key30": "5UNK8xr6hYA8RfcqRWnFZjLDSaAwzFTike4BZbRC4Vqf95ooUX1qzgRB3x1Q4oAZW6VW2aiMiSFCP6uVmkHqVaJo",
  "key31": "2wtVs7VKh4oNhxjH8jk1eS3dJrh3LnGcxqFxSsJNyCb6BrL1jwDXxswQtT77KsSMDNjK3qd7nXprwnu7CTvgfDhm",
  "key32": "3D5d2vANBgo5skpxYTWuf11jwtritGDkZ2omgaVJthDSSGNyvKBNv4ARUGJryZCPxnmcaAxoeSiciJZpPD4GSvAk",
  "key33": "JPFMwMfNvevrLaDdP8Ufxo6C1QacxrxqAeF5xkefJEZzQjL3xyhgTGia43P77wqForLhrSds1wnfDmU3xNwuSLY",
  "key34": "2HFqwKUHcVeM9Q6rvTPFKWTMqnLhu3TUaqHXmHDYCdm2P3ZEd7aUwGV487KSvBNUpNVT8fzJdZgJMLMGHaeyQka2"
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
