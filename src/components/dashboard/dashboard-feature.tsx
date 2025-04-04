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
    "XRZMDjEfv1AFiwYKmD85JzJLh5pU3Mjcbcc6KhA4hs6MrxCJuAomct7QDdjbgoamcNk2pQN7kzsinJ4i2GqXA5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rndLksJ4uxUUSWTiKJJu9UCFkoPnYyTkEYYHoNxEgFpKFaqD1enJSf83iKJqaFpg9dbsWomQ6mcAjuqcjjEECoA",
  "key1": "3fbz9rtTV8W3jEw9DjthMxprV1ZdYgCtbfJ8bJXLEkGb52iTyxFkZrLXpAXShbXHASX99ecxqgBquWsoyzZTDDnz",
  "key2": "4ws5kELAuWhAbSfmEwveF3Q6LzD3hig8on4xxTiLqadM54sLy2kAdqWCVzTuRsKiL6M5f17QpWcqr1H7vHf8BBMr",
  "key3": "2Y8oeG5E8aHkmSnYML6rkUM66ZeFMi5nA94FcPXkQ7abvMqG3W8r33hkiAhovYWSSzfs78KYP85Tc5fRPred7qVJ",
  "key4": "3zfA4yUJG7U84h4VeHP89KUoLGeML3eBQ2FXabQiJMwNDG3eSSUD4bmh2yPSwZhJ1FCBpJwCebUoSJCwe14q9QoC",
  "key5": "2G52y9zXDDdVjpoPxWf3bJSXJKo89y5LPo1T7WQGtqyRxFPZqT1am5Rjmk83rY6fA8wJbCHoBecEVwyrUydDnCdr",
  "key6": "5UVWB5QfRStqKQKq8vVUvrR8QYWQPtSDndj3uZ5NBhxZMR32LxMmh6kLiXEZU5o5Fbyzz9BfZNV4nrW4vaMC6oxg",
  "key7": "5nkELvVNhkiAYUubM47y7X4xRRG9enV4BLzPf2dKRH147seifqWk91WMgfwcxhcFBfLYWmkSn34m5R2pFH4zBCBs",
  "key8": "2LzuEfTxAjXokGhsbMXPwSkSgCQTDawH4k5qy3VCKS3LSDiS57P6rKvDrWuQQVsMxMtHufadntWN3sGTTJmHTgkf",
  "key9": "2GUaKNSJHf5axmhfLotoc3iHXvkREDcKt6w5NdJkfhU12FTR9vfvb65bGMpEbcB66A6sc3PMqs4g2YYn8y1e24gd",
  "key10": "41aKUGiQzpKsvBQgMsiUNkEPTdCqsJjzTQCYv63R3zZuFLnbMECebR8PmQcMYUpSUriyFV4UccGn9LS9rRqZjAzX",
  "key11": "4tZCfX2xHv1uAuKjptzdzy8LX98EJEUEFbZrZQPja3hzfRgxqfEUrmHvCCWsXy7XJPj1w7buhUrqj2LTyXAvuGvo",
  "key12": "5wn1eYKWMLF7m2e53WSkk3cJnuY2MZ78THs2a6ZY7fys9UsExmfFB82mmdibH94kuZ1Rp21RpBGZ34C4mhxQeKXZ",
  "key13": "3BKiT6nUukRnxc7fAVt186pZGJZQV5yzj47bE2hTjxzKdnpg6jeL7QSasuf3kvmcMTTVHoUt3KKxZLyVjEvzVDFQ",
  "key14": "3WYcC57eUR88x7Pkuv3JwSMZdrC5zAUiyzPrGS9TtCXMmt7P7UU6RzxpQTaMN14gdPCJCS6gWDB45oLW3uDi6cus",
  "key15": "59MH1vfYd1vkLNcomCavDdFexWib2nhXMVbADY5kYNjfagSy38T8nKGV8hqgJeD5YwRaAzbRhP4Pzb1MNJeVPPWy",
  "key16": "3QaNKXvxB8XvHVQ8N7vYE2jipTbBRmvUoHyoMQaq3FRMa8fUnwE5LcaGMFWvhZeRgvLhaqpUBmP6gHNVdKkmymCF",
  "key17": "SdkELQz2CwRXG5sueQRHGmzsLUkUhAiExR6nsdVQZX3yZBsLtrxNWR9ujUrhKE5yZtCZCZngjfzY61Lr33KyZe5",
  "key18": "663jaPzfACnA7e3btWaka1uUu4vP2KRkhpoJaQnGdXo4vLDmzki1nUEAZdPdv2icSbcUHUywLn1VZWrFV32X2pgZ",
  "key19": "oDnDLuZ4aPsnyoL9B69FbJofGATDqAwEiKhwGGyL7uyhVAvW1g47srGAT1Ux1hJaVvU8YAVE8LMnXR1PPRLReAJ",
  "key20": "2Z5QnoEfM5jVKLArntoN8yNfDFdKQ53997uEtftdQAST2CHdKa66VnCHWaSEZBPp453iu5HAFG4iKdQTrnfhcyc7",
  "key21": "4Fan27w372pUzEg1LWBNVL4uTbDHPySJSANY7MR4hLABckMkFFPtEVt6EyyCiCTuiy5PQmUzukqVFfXcH1e17PDa",
  "key22": "4YV2ERzR4ZvatT3RHsaABN63skqJYE8EGHY1jVjVdEWTsmoDAtbEZRodTAGG4cJSabpvKL3kQcTkkQha7DWq2rKe",
  "key23": "3YeFoFhsBHSsr13mk2Yq4uxuBFjHaGLuEwFHaYZsuVK2hD4e7pR97ZfVwYzsCcQe5zKqVkWUjtdpDkLETzdM8SaQ",
  "key24": "2Sjrfdh6abFFZuY3d2cS2waW6RHw2TJAb9eM15hvA2X4jRQencRLLhV4fGK8HZm81GPEgvbKASS46tutfyvYVPM6",
  "key25": "2Kzwm6jeGvqJNXv6areGWfqja3QcF1DrTcftyxGUJW5dJ2vYufbVKUbqGyLz5ZBa9UVdLHzW3Xw5Pc2pDW3vGgjb",
  "key26": "5K8fJGBboGeRVPnuZfgLY7Pvmo2TKvuRdaL3hh2eFt6Bz7YZgdkKs1TEs1mwsaLnwTtmwK7hxanihKhj6hZsC6wU",
  "key27": "wRQYbopt4diMmdGseZc5MwPWwqYG5LYiG2jCCJYkLju7rjhqYvks6qNEfZAeoSjLPs6hWZxPNh6tSndx8fkJhsX",
  "key28": "5TEzz9UArxq8XvkhCPJg5YTbFtRP9618L24GrNa1kEFAmBRZnTn8iZWb1RaRLXgAVAAuWbmGW8nUMNdc2CHHMEcz",
  "key29": "4ndu59SP6SbAKXAz7P4GprL4a1KJR9ikrW9d17VTRk9HeBYtedMbVvYWw4aDnCBKJbMVzdQiBbt8PSvqebzjYLmg",
  "key30": "3HPjxDkePPfZ4GQWwYhLQYQ2S7Z61gtUDWEpHzpziiqeQwgtkaUDZG8GiZKzUi97w2HEpUEfkWtPL3gFmrPkXDpk",
  "key31": "629nGgbF1BF5DeN6CjsVm4SnaiPuX3YiH2hVGvfjBwJo31MjBZdrQCv4sqZyEr8p6JFX9777ob9e6LbyBEANqVcr",
  "key32": "2osQYeC7k4k7DFwP5xkSp8qtft85Ypb8GhzDtdJJj4PMeGoLJsq9yEQQHVyjwZrxNvbzmKU2i7nEZzN6DebnZfr2"
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
