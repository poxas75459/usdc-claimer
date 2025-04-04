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
    "4dzycaX4tUhDu2yQBYQiS84rV4vJRv6Rbsg7yR1NNEzK2RvLifworc9Y2TB81Lq6TfkTif97RvNkgHqUekGeHALf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gfJC3Q128XbLN6FscRFHKJfJgof6LYqEgJmFm1jA64DAjqxV5tsqBvnyXTFjpENBtLCsaonYoW2BtDabjJWrf8A",
  "key1": "5mNajVr9WgSHJpxqDyiZtcFhnqSKioyS25bJuK7XLPMbrfPiPp7b73bJvogDxMF6gguYXFsaLMHFBBodzJDXts9Z",
  "key2": "4Rfr4WVGHktABgfL58wVdvQfpenAvgmQtL4J6gygg9zmkY1wLMvUU1x797hHpZ9mD2vSYcETLMrw6hWeXQctwo2N",
  "key3": "gqGSSoiRPxYxurwjc7NqF321ouA8TiApZjQPwaBVmFzRgrRAvKnxWb1nBt7XkaLyEYmJHAh1oLZtN16rAp97NCS",
  "key4": "3HuAHqRqBkeuYj8Y8NkcwvLaCNrWyfTjXBSCSvKcnLdmjxjmAeC7TUBsSKwYa6j7aFisnRYtKLCKWNm4MnR8Uj48",
  "key5": "5pJFHdcfyiA24ygzeKwkqwMAhSTomYGC1r35XdBWaHThdaFhscfpPg2C6hAc4rbb9xNDUMbQYHynBVZWLx3XtnSe",
  "key6": "52AZLfiTTvaYwk4JhJLAk56UfTFchUH5GfBvQNz16d6doF8r46NojfrZohyyzhY3godZpo7ZJ3WfZisXNUt8bjvm",
  "key7": "2zYK7XLhLif7HL4js8M5SfVSsjUXFtkE4RhtyuG6p7JZNA75HqEPdEiuE1oNbhg4P7y9nBTN2QgZNXLvYAaw4gLV",
  "key8": "3nMcxqfg8EX4giBRofGSo4WukyMfLVWTi9Hkx563zsuP4d53z7CiRB8MR3ZKzZSC9Kr8wXyf7d3fa1uXgPCX45Zr",
  "key9": "YTxjAp5pF1skFJYBBg6dftHoax3s1LicD8jWv1MbcH152DmbC2vQnupxRSVZeCKCsHTbaRC7VjJSHLuhtqfjXCN",
  "key10": "3gbdv48WBJPYwJn6LyWyL3pEB8Wg43VskvS4aFUaPCwMaRHySqnHSyDc6sdtutQ7D92uxXEGedUYtPA6CVV6x7ZE",
  "key11": "2v3NJJByLGkhzGJriNxWtw6jRKPmssATaxyb1nZbVdEQWYvUHoqRX4EyZwam1ZtPoLSkg43ZCBSxzFFYT5fBgTmM",
  "key12": "3iK8psQaGXCiSnYq7eD4YWoiSHsPuRmsp7vxqR4VxrjTM5XM7fcHqVLbRhGzRLxUiCXbNFb5Codyh3rZCA8gzJbC",
  "key13": "35y84SgxJ55YVtcFbsrgrZYo2e8iaVWajJGdq134s9XMqujzyJpieYb6dvPk2UJ1MrZZTnncL7qgyXqpcTmYaThF",
  "key14": "A8ixwvrDQ5QJkNFsVZhDZnt7XNv1HBifj2xtZkco5HRYSqUrKG3d9MGfUZpFiPFQcfUY2uuZP1wgsuv63QDncDJ",
  "key15": "547CEbiDikJKhRiXGtt53kmkRtyWjXhaXFrivFLJyu6enBV8gc3KcYd6KWvvMm3xKKQGsiDJpqo5j3rqQ2s7QmDV",
  "key16": "2PfRmJ1u1GCkL6vGctCXr2Em2HDidj8tShSefr8nBUDK6RTrD8Vn9dp6GAvHNangdPp6775f4YDk5sAJXTcsD6ah",
  "key17": "3qr6bANu2EA73td4hpxbFYaTLtWJs1QTTrCNTHr2dfch7MdDGzXewNfbtPLPBrAa8KwkEz77mM13wP9ktyvz5UZ8",
  "key18": "5zLVCbPnLV4DJN4GzbJ4fBL37mq962nfyebmUzYP3cBjn5CC7VjemPQk9kQ4gwixLzsZ9rRyxkrpuq2dYrWWuJT7",
  "key19": "439jekasEvKbaTRbcWhum5dkmykKB8CdvMKG6CH3EKjJBjwpos9Voz7mRb8JsyJ2NN8QXPqM9Y6CahFF8vTHxrkN",
  "key20": "5eYTduLDB3bnVzRip7MhNSub8j3NGEcuwKq68yuvZLVGr7jLqoUtkSdSGCEToozaRvmDJ6dsbTnAcSk3QPT6Nu5K",
  "key21": "MAvJeMpqqLUwCeyfZXgn2UKAVJ6gNU7qsatbhhWbLAd9Tk89aB4818jtBpfzPEmN1aKbgziLArvuhcBsCkyv4ub",
  "key22": "5mB2jrFykrsWeV56674Kzeoxq3SUEiDDm2S6YzRriMXhfiocCHXGjjZwpeH1NJ9aEDPJbeFdK995Jr9yizdrXy3r",
  "key23": "32m1Lg1VzW57tK76BonmAdDacniU9oNAuWyFmvTPWybX1JMKPHuj6yW9oEhHT9Z6Qa7Aw5Bjscrey6BsmVDPonNM",
  "key24": "5RnNygo2rirNRvuZhifWLm7h3eeQqDmXpLzUqnJ88FDBXErCv1DPhZPH6g2GDQCbYMTf6ESHjP3Dt8pPuAoecMjP",
  "key25": "5np8waAZeaPCoouGyyiHZ3mioVj9msUZ92b5F1K7FHoacHvbpirsEMxEXLTdWLPcPnZDYeCJChisETpnTuEA7bVW",
  "key26": "2hM7MnoJ6LMtNGvNC4GrpFx8aDWvvV9UXkaDDHA6Gy12ZCBVUDZKwM9sdri4drtKZ5fSRToa6PRXnSYd4md1sarM",
  "key27": "43qyFGTnZpq2SK86unubnwcBPh73CAVDmFoJuqJtewnucFQ1ScuJgVrcezCaFTuaeuSE5KPXUmoRJ3W3XS1phK7J",
  "key28": "LnGh4tktMV5Efa1PQU17C1WitDQecXAR3Fym7CX64MU1EkTm3ShjfJSj16gEgSD1WWFftoYJGpk56ZynZbdJGgK",
  "key29": "3TZCtre9aUHHE9uYEKhmG1D6CUWmijj9Mv7zp9mvZKWUgb9hKBcLyu5tbYYou9zTtecvAE9FTz6qKHdCYYaDUPx4",
  "key30": "2szQh4neCyat5Pc6W7xHTprvJt14nGJugK7qauiahUdTebANKcV9yJ4bN4LoQEXntSEeCqENqnNSAPpa8dLAyMAj",
  "key31": "TEJ5GECBEJNDKqxe7XvzFdHJXnTEdoW6yMgHfN7erPJptKM9aqnnDfUQPMmshEc47Q9KUcqSimpRakqW5bnRznY",
  "key32": "5d5FjtAs1rZGG38DawgumMc7VjZTBnGCLekTvuHNpGvSQ68eZdQ23ptjXB4JSNEqxhUGJ4cZbxEu4HRaHJdVia7H",
  "key33": "3ocGsnb4zCQwni5wJwDZrkvCer52nwRpwBVNmrLRRY6dzZmhd5s9APrWwF4W2975w2me9Lz633JTWXsmX8r7fWxZ",
  "key34": "4ZWfjWbWGVbTz1EMvNYrxHar4WAXemGekmjDBEcU2QJEoggAynzw9tiwm9VP7BCk5Lh2hBzRACUfDrhL7htJn87U",
  "key35": "uBhVt5UCrkTniK3Xt6wyj7ykr46dVjszFmQXSjehxvUGfwqEkC9V4Y6DNHSDwNDhAhyiH1LBfdhczYPnBW1kTkC",
  "key36": "4C6SH3QR5gKmhjSGY9RgYyApawa3uXuKP3a5AzCyLTD4pArnKp5ZeSa49Uki8jLqsLPW3gx4fk3ftEJfEkrjzpZw",
  "key37": "3ict397DubF25ZfLdV8QFftj4rbigDSauYJyZfZYKCMZL3tb9acjeo7weFC4gLYyEEnWwuMcjLNvh46oKpZCynqW",
  "key38": "56pHZmPnLhoLJL93TXnNp2fMKqyAZ8SVAWjZ8T5zS9jZ7sNcFrizayjyV14XhYx1RJxLCumis2YvCdKq3Taz55W7",
  "key39": "2oaNDNhrRhaAHpYd4DGJjQyxLNmx3i9SCk5j25hgnF8wLz7UzBb9dJSoeKAXR4sCwJ8JVLw6QD6MPcKJgXoJ9FvY",
  "key40": "66PEuAgCZzkyoj5u71Rp4RE5iqH5ygTSDFfQF15s7FDETM7e6b4ikRNhVcvW3D2n9S2PFC5pNrmguMBUHHnMujcG",
  "key41": "5V4vBh13TdqKRuWELEj71SM4SRaHxE4RxpZimTa8sXhxaLz8BiygJvjjvbt4LCiaYCZPCzmryZeHomd2my6iK9fV",
  "key42": "4RMvPUhr9kwVfJAJVk8m9Sd2eJGeTUSF53Juv2dgwZSBSnXG2CZFXQaU8u9azKzd52AtYUrA8mB6Q5Yi18VgcyG8"
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
