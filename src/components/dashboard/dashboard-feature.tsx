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
    "4DQetuKgn6YshHArJcLiJE5Q4MsFN8ADYRQc6VC4zNrvpqFkzMu1u4JdKTm6v1aXNVXk6GwChxHBmTstEqmfo56t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qQPLN3MyzRR7KY2Hs5ZJM67XjwfcsKtHdoiVkRqppveg1xV5zLAECUM8iHE1wvy7UJe6Xcg9pmVevrLd49zHgqx",
  "key1": "2kLKbv8s4FsFNpipaS5xKi5DRguxKaYL1kC9frPfjtgst3gni6hEWBMpReFphv9FE1DHvRX7grmq6911MqArtfAL",
  "key2": "5WuaVsZvBnUN7npe45Wq1cUZs2DQwgqxAPBuBTyjH97BqbGkHpgMoZZc3v4xsXC8tgzfZ3Yjz21Cv4wMZqmvz3nF",
  "key3": "bkHBw6aobMiy9cgyM5Ht5zieV97wjNHJRRC4pp4Pdif28UKkGDhtBxGTAFNTEiJokQeuAyWVatns923GgyLwxPR",
  "key4": "4Mx3Rv2zdDnKjEb8pMQqPjpGxzvN6VB3C4aW7hm4iQ2BiQWE61odqnT779UTZn98d9zK9HQGEgvgZ7EHuef8T3e4",
  "key5": "6363CkPSnfr4sZqyT9fyZ7baKyMNMMKregqWQ7owiaiBPucEZ6eXZAiUSU91vsSq8oqWPECcMmMPdPxSFNqmeuHi",
  "key6": "4LSUrs7sc1zvKvDzw38KEJKRUqRE5PP3q9QTKgnUNH6YPjbYoNN1Ua5CUy4uHZ6xPYfadEkj3EU4ndf62z5TxgB6",
  "key7": "5ndQBnEj28f5T8NLw1nfNvq8CwAuN5SbxAQ7KAjZvdkTZBTeVk8ifNNuSEb16inN3aUz8PF1dL19JVLR2s5NXy1R",
  "key8": "2BMRZfzuLpopuyLiHMNZN42EEiZCCMfzBZ4zcdx8V68FBjWfJMXrzpN6yEtvLiUBC8DX6xh1s6XhiijmnDvgTxCU",
  "key9": "yKBf7ZLosHU7CWzXMixor1Z8FqZ6shycNzJSAHsNiNs1HYz6jfcwAVcgQnd9GGcAxguQCjLutUQ2fThu3Nce4jv",
  "key10": "4uGqvbimiNHpYoiHEYNwXGuCbG2yQjNKxDxrc7FVGbHpcXkjjsJ8snNhAkscmPrC2VMHYAChdXD2Vgaewn7ma2D4",
  "key11": "bFHzf6C2CxZSjNcExbjGcKxd8vqWYic4edqpLr3bmMB5gFWJswrXvqZSgNw1VZ7eHRGHYvuEunaFUU2pPZ5RyQU",
  "key12": "5oyAA1MCYcAMmv71KXedm9PmKzCBog1CqXzQVf8M5dYcUjwhUnmtmhYR5Y47kTB5H79tMuFeaqSuQuNbeD8s5udJ",
  "key13": "5TESLCJuWXu23GQqAK7WncGaqeztc2k89Yq9QJiffoQ9iNu3UEEPZ8cDoxTNmqQpMnac4o8wgdpEz82JyEPKWoWR",
  "key14": "2qdqEiWDMnhuGh6GjVibJNNj9CqY2CxYEuvssjSeiY8JuTD7pTkSPwRmqJstXDPAwr4eBev7Kami5XxRGKJVnV7A",
  "key15": "2bbj1D4g686Upv6Js5T65r5EYyMDykZAu77PJQN5XMz7Eq4Dm4bdDnEYX2CEpKEzNVrSqoVG2fgnabFg7PbxRrV3",
  "key16": "21WN8Yztr6yYrmMwrEQSLdCBL9AXJ9eM3tNixfUfASuuABAdz58Tzdn9gsrK5RKJnY5SSnHuDSsbjYUwdyawgCX5",
  "key17": "27KHtEcyxFLPodRvY9k6YTjkcUMvT6NYxeAMT5HzQDZQHTpJC34mzwLMNqqNyWpETZJf8NZokwtX1CBo6nG84H9E",
  "key18": "5fsLW3epPYgcuR76xtU4kBmqDiphbfRYZN9AqFqXNPHwvq3jyiPmLVQPwknhQxFX9pjZUEmcJdv9QQwXkMH4K797",
  "key19": "5nGQhoLTExdPBYqseyxyRE6CJjo4D8uKg24wjU66MErRjHki5okj5s29bMAteeZmDspGNdChVzhXGKoHEBjpxK8i",
  "key20": "1LdmbvAWUtxX8afpNdkdYodWG1MU6DCF3VmnjM9ykxWiccu7vo3d816nq4tmz1SDFxWQpQg72NnGePWvqn5X1B5",
  "key21": "4KsPAmnwmL1UsZ1kK7aSjNVgrZZyDSaFnMyRnP7n8MecCkwKZ1sTANx5EoWy1NogSBxdnpVKpaYhSEuMsurAkYxp",
  "key22": "3w1mZruk5YemVVnLQCaFhnCrMW35bTSBWWdH3AswomwNBLE2c6CkAWPFq5UkMn5wHDsoPAxMYrF5WEEyTTN9djjT",
  "key23": "7dZxkr7dyTeBMLkAADEu54SAiW8r3YhoNpiqQgMgLR2KaaYcf4FtwVYpUtEK67QmuW8EAJ5dXiA1KWTeRZjmkB7",
  "key24": "33uia7x4QzMfehijLJRDXSNHnJJzAYDSSAiUUdX2Vube6P1N4N1UJERdo8E7xwJKR6etQ8GJBiXLhP9Kqtbybo8V",
  "key25": "4C3WwVQzCFpXsmW7m2vVJv88Nr9FKEWqVcvec7nd3uJgvp7FHdo7VpXcZC5FvZGw6B98hUALxTrxpcJn295dGbuJ",
  "key26": "51Gt22NbsbaqPES6NEkSvWeHatvrcRxNduUjTHBco3F5wTBNrjYw3gB1RsLuq6pKjE79Y4Doqx8QvEUqsJPxrCpV",
  "key27": "2LjqMXU19WJdJgQFinvazVLDDQA5hyYXJN622ywNq6yeCUecrgTeLAgZGBmkp9XFjHC5wmHknxx8NL7tJrJwskd1",
  "key28": "4BVPceXWg9RdrLSX9jz6oiQpMJ1bzVmUqMQxggADbzq5NGc5LMNeV267wMfjCVkRMvMjogpmqKz2Zu1gcC1EB2kD",
  "key29": "2cJ2KTRba7i6L3AJyQMGvyvT15Q4CUNgPsn1Qejn56jVTCyrWFKV5M9a3dhG6NKaEbY22Y9j9HSxwUyL4yFwYSEW",
  "key30": "4sbZQUptVRCrnCRkPhsdAgQsWfJ1Bjrse7CjFYB4MbqmHDHGyYY7DnqKkVashzCEWFwR4XDcwg25swpgGfmPbQmc",
  "key31": "3Tb75qR9uwaMwocq9hQZhrE7Aj8SdcNtoBpvcMj49Xus6qucuXfTqTMNLpnYGna4YWaoAsir2zjEsVVdaSBiMwBp",
  "key32": "4zPqvfzFpM82uZcySySvhyRoCGYSieT1WpaEBPb1XNDPkTQbmFW6iufPDkdmQDra1QnD8JN8DhaFNKLUgSqgi6gN"
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
