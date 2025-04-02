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
    "4KDc3zLB8NMSuzneEvBvierRJG4PCwTyf5BYKGMCq8ch3A6jXfWFJ9jbYb78YxNZHhQtdwnZh4XVXzmhAXWuoepm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pUcoGovHfmBGGNjWDPij5ENLHZsetaapW65hb8S4cEpm44AvjF8CjawFgbLauJE5iVJcZ9fvYThkdLEpzd6oG6T",
  "key1": "3yqLj3VPF2M9CWFmaSZNhD149fxU5aK4dr6FV2zQvVWwuQZSrjdYY7637uuHHWhCVVzYD77Wb1EiaNNqMKEjPgJV",
  "key2": "4kEW4A5CGtqLM8wBTDh6CPi53c9DaF1c6y4UFMtN5LgycDTZtWGnP3q863ZyzjAKA4QVtyFCaDKkzbpR3bnXk4Yr",
  "key3": "3hgrwbaz7BaaSA4Z2RaApP3saww2oiWNxMY18RuvfTSawxChzRbze7mDfd59k5uSPvSBkuYy7J2EhnoVba3uJye2",
  "key4": "41JCevmLWVkBNZy7TcktK1LV7yZTYkwZC3BmEmsfAqNVYjZBVqCudgqM9zAn9NoA89HgCLHjjF2ZmV3vmZM1MR77",
  "key5": "3PXmkJQbP1Hmu23xNAPPgTdEqwvgLHQwv92QKyUPiqfYQM8P1vqseJtUA5gJSmKxbEgGTXbknDSfARpHxHTgLLac",
  "key6": "2QBU6VpJwRcjL4wFDkLxf3A1n45dGbyzE85Yq4aMFFUkti8YJYD9MyYTptY1SH7fMe6qFf9Z1Z2EMmURfxGgrUFo",
  "key7": "4xRxQqBXt66UiNt6a7nAa7KMGasWKgG43oxKTu7VRyXeimgko4ioWxBgUjPwzBAUvAbkuuV1MY4MFTbnwoKtqBCZ",
  "key8": "635EYtKnKozkdLWTDC2ZtZwPxemhaBRjYW7YY7Zgiiq1pqFbo2EEzXdywZ8JeqkfCE3C7shwtgvfjhXj9HWeE5A3",
  "key9": "3gtJRqhQq3aYQBqBBfTvrtBSgsrcR8qZfuVFvrdNahhzox32j1jWF9fUchjL2uYtDBaAN2xKjkV44K5tqjEnxK1d",
  "key10": "4C32SsAGw1syMYq4x3GboUofWYaVYkK5ck7wXghghjz7de5LMVsKYKsSNoG8a66YzjnLe4335nozqETHDtojmsSU",
  "key11": "5tF3keeavssjYgyJaBqDW1M4b7dCmo2usGUEiuvYYuezDrBVS4XCxdyNu1Tq59dtEPZ9SRo9JPhNxMHemDBneL4S",
  "key12": "4zb9AFf4DdkKE6tcJFKwRpGnyNSVtW6yAGkb6xboB6qgL2TBS9FmBr8aKEjZvwvWkThqjm9piU1tv4keD8Zyuj7",
  "key13": "52fN1n1c12xKT18zNGP887hafNsRGjbumjsMih3t5oeMGECQhshYB8VT6H259vRXG7HUpzDok2wv6FYNQ8587V5V",
  "key14": "4pZphrXX57BTq97foAaDnAiopnVhf4pF6Jrkv9LaMyhHcb4uBjEHtzDh8HYfmjCDrGVT2wABzBFwoAUUkf35DeKi",
  "key15": "4NAPkGvECyV1Gw3zUnVxENXfe7zbAfKWQsRRZsK1Ka6rpMgJXGB3z9xU8AHjPZuJN652NMwG7X5KmWZgnKNWsfbL",
  "key16": "4kuYhqzdp6W1x6W6rYpQCwipDoeHqVKy6cMfYwFWQ9UiKs8WnoFJ92xTQ2sKTdA2exp1Mfe9evS6mQTMVYGiM4Ns",
  "key17": "4u5CR3S5pgPM2wjSxBrs59fwgiKwrdEH1PRHpAvMbZ6SfuXtfnWVKADNHEvbWqMnQZwqaAoyNngvm96DmmFnwhw8",
  "key18": "2aqmTPgwR2ddGanDhrrdpK3jPodNPbG8CzittAF67nBscVm2vCk6rQDG1qCKRXmMgRJueEZDaaU65PpXeHSYRuo6",
  "key19": "277AQ2CxF6y3RDixQyE3C4TkQvWnidfRbkjaKnieWAPZEKvkFvTPoRPxdrzAbGGkX2kLMPJjksqtHvXks1aT2qtT",
  "key20": "4S2SRC9Qib6XYFB6gBtamEc27Vpb9fxdcdQP15JLVr3kgUr8vTaV9yD73p873BNTgGiuSALrP2zD18ErNea7dmKV",
  "key21": "2L5n1MFTD2YmjBsLdovCNA735r2NeUNoqLUi7ShxoDoGwYgy7sM7u5zCCaDzFV2yqfezbf4Arb8bxPnQ41VM22NN",
  "key22": "59jrWVoJwdB8APKkC6kUqRaCCz6iKRhgFha2opd3bfADAruBUHhQSDZnhhdwSXaALb2U82zJYv5QrfmFcGtoiTnX",
  "key23": "3kt7dbzshuKfMVeo2CRTcZgUgXFdNRMzDt1eVQAMpmggvFkKgKTEzJcT5yfurfwL6H2QEpSMtebQHwdcXVXnbaxN",
  "key24": "4tduR8zeJiRbhFjsGaMSrA7bFrqjFfKmUPhMT99wWE3zejdeMTJ9hanBLTHWyR1xpCJcQKGBcfqEDBLW4WoRTHN6",
  "key25": "4QFiS1NqdDH8u3ZXehQBitZsJajMkrT2dkh9BYSVDnvLPfS7TPwXp2NVfXKnaD4CFJgAhA8sQSywUiayzfFC2gMq",
  "key26": "NbLNutg9sUt3qyk1MKWFVBEC9AbL48DkFNiwbd8gerbhddm5BscH6QVbhWBjoKaUnd2vycqn1p98cjYQbi7McQH",
  "key27": "4hfQpFWzxbNu7YbR3oijVLUqqewLfF2U5YVvCQy82yEhPaAdZq4aWTLCQK1tmB9NFyuCNqk4urGhaqCYMRqFBAgA",
  "key28": "4d1RwM6cRE36jM8vWrfxkLy9UmLbHda7XNm2M39fGrPfRY5R6VUzxJXpB8RoGSLwJYsBqa76WL2RhXDaaxkcq5S8",
  "key29": "3YU3KNi8VxsShpNRQrB3XutGDfWdkKcJgjMSCu4CL8TjJyGjj85d9ZGiFLoW9gnWSeMPucAoEpa1A9JCACqsDoPd",
  "key30": "5SPCpdEC4tjwVnNghC3h1rVomw5fKy9yWjNCYtZsZUcm65G66dVhg8extQVXDyLWgcSHpJwjxjmSdcJgYXTgtGjv",
  "key31": "36dPfwhsrUb9o25yoeenk4rDUiD58ex7fkWLF3CiVMNpq59yCfJDJtnugss4YGcBVKvY49sS5KwbKoFCtB21WayL",
  "key32": "5Ccchx3R8bXAkath5rqyffg1hqQVMh3JKxTKgxW9ZNhrv666UtZJPCAWv3Wj2anwroJcH2TTaHJjAXzPcwVvtqvC",
  "key33": "4tqXKiU7Ai834DHkpEBnsudV8oxDP1RYTZzsyYmzhBEapi5KgPB5peoNcsJL9qxzNErfiQ2KwabUn1fvY4fE4Q4A",
  "key34": "2tPqjwx8X8TrBz4DSwjmatwvkpwf9Qv6EWgz7F4QKRsX3kKT4rDUotkaEfAPnjNyPZUbSPUdC3iY8sJdrCJxgoSH",
  "key35": "2EyoT8rzykwMqDwJg2yMsC3gHb8JjkXrAzgN4FoqkkwwEwTsNSRJaDGPcYEkvUtcxb7cZqQacpuSmgwJBTjk9nHg",
  "key36": "3VYQF62AMyQAAHM25YMnkShjE43WHonxXRaVtWepWvFJknZxgyBLCyEDQjALUivfu4XeNp3bVVz2QtWGWoBV57eB",
  "key37": "56QmR1MbqHXjGB7V53WhPHYhcbLxr2pxv9gVezpsNcTsJW2s5CwZpJa9d6ZFxbFHYFPz54ETwpnUie3GW4nhvn6r",
  "key38": "24dEbmNXw4JPtpdy6LBxafLScc3nLLWE5b1R4JGfTQMz5m4rJhzur3vYLHSyNKKGrMUQbVRKmD8qMWRpoF2R5tVd",
  "key39": "5poBBvqHxoSpv7QPfnNvDWGKSfW77GyRtVn4i6jYQDyftgqEqqV77LSVEptVYTbB3td8HCSEipRfLrnmgtc3UfCR",
  "key40": "5GzxbXRRyBZBE7JCkzqJ64G1gEp7fHpHMiEXNQoWRJGDTjqx5dD5LhgHPEiNdykhpjbz1W39wqdoW1D1o8VsByZ8",
  "key41": "5vCe4sNgFbdLzSPJH23VksHC1PKh4LjGqKKeyvodkHt3W52faAxXpzYbwBvNDU2NtuUXqsCKPLGh2cAqh7GoCNph",
  "key42": "4n1G4vVdWdzbqUydDXdu9anThHSbeXgLPFiYGZa65r95eFUMq9ZCUeXXCCbEk7Jdz4QzaPXMbrptmqp5x74qRZ3w",
  "key43": "3mnVsVV5go1LSeaVzf85AaprDYdxtomdAA9aqYtj5KkBFUoVT1cYX3CfsyxWsBDjxtQk4kGfjsBodG3A6WveipGG",
  "key44": "2s84XZAbvuaS7fzHpjRteoZrjYVLtDWhJJ1tXzcGtPC1wi3gheV7WVQYdS6gUuR3v2AHFdRBNUQw7LRgfi5JtYLM",
  "key45": "4JAchfN9sKevq68t9jqNDLnS7X8rwUVBoFKejSBCHLtJtwfPwRjdM59sCNo5evwsr3aBXifC1KFx3b4bQ3zebuby",
  "key46": "fyDExuax7yBzqF7CBx2mh1u1bHDoCAvK3hFz7Q8mRPfJQoJLPZ1qr2F4Lj4wq1yKQZBHnbcyqEuYQePtFeZ76GH",
  "key47": "gHYkjLiCWdjp6MnVnXMK9U84JA1vvRNZSdP2B1zJu5akTyhSygCVT2eCPSm4pb3qGCMBT2jnn4SR1dcSoYkWtdZ",
  "key48": "2ysRLh5KbkDNLsvLk8Bj74HduzPzpZ7fQGMF2N1WHvAj5GDgeQjqhKd1tCTjkjawRXZdmCP62P6qnjkeKUhE4BYX",
  "key49": "39XYqP9T7ndNJTAsPMHo2gaqErAqgyJz7RB5KoDGTRBeJQ4NC7caRGJroM72hYz2sYNZJZua4qhNvDXbnmMqX6Km"
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
