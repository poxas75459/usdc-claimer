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
    "5dcTvPeTjvKeNaJTwEPtUp6cUeHzugkLdYfpaemSeGVifH2k3xBgGTFLcWM2w3A4SCAfodTHppfw25y5hvREcNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "627RnGSNP2r84xTcqpTXrdVPNrhv8zFdat4wQ271yrVAkhLJThUc6d7ZYrQGorVsTwizJDfdn5ZjHTJ6nbdHJciK",
  "key1": "4zpfpvPM5Q2Ca75CqkMSF9ae6mfd47KKtXNwWXhBDhk6KZq5XX4AWfnP4Gf8aHSrz9WwZuiyxJ3DdSqkoYr3MC4J",
  "key2": "4c5Ve36KZ5MCkLkGc2H2CS6qkPeejPUQR68DcTXF9ThSKGtd167d5iYUbvYFwdizhwh5smRagUv8uoNK7AeXi57B",
  "key3": "4jLPqqi3auWBSkdiv7hH1kaxcct92qpy4mp4X9X7VaEKVG46h4DpLMRpYh6ed2QbSXUwiswWpkAkPQxJYmh5B577",
  "key4": "55y1QyhzrRYwmBwaScHNww838pAUeGMppbu1z1ZU81Ey26BcoVed9kZ6PYDDmiWshgkoo7hBjfGfKTCBBZ9rmnFH",
  "key5": "5wUPPo2gb98FmKMCzZk9aaAaGtRpcob1ecUoqykWLqLUHes5oeQuKFaHGJPiyccfV9tf2tEsB352fBZGc9w36Ejq",
  "key6": "3JFKaXbQjruUCPBVunAVNPzU1cT6e7kXGL5mXu76uftghwn3gPvr5Gho9RJRQvrUN9akGD2bJfkuRGY2x8aTW3QH",
  "key7": "2FoCd4Fkd9TruTCwg3j4uL6dVUZy7gVSv2LRmCRtJA64MBrqnEJCabreUwowQAK9zDvZZquyVMzmgSv46o7tTGJY",
  "key8": "UuKfyHcCtkqQx8ZxFFTVemHnfwP2QiCMSJgQ85wgwwvFNhweCjEa7TdKFgnAVLNBQVRtFD7siGtvw6x1jJqSKZt",
  "key9": "2QfeMBWTCDAtcZg9TuKxceF1WmhEF9b9QR74AFDS14fnaG6hSp4LNJzMZAdos2yhAHt8SUuhPMyrXFGmSg6rJXDp",
  "key10": "4bi8Lmaf3D9XRCRg6x3mbo5ta3qw3q5VcgBAW6Qw6LVsN1jji7PfEtT6cKXczVtny52H3Ejb6vEsYXDZ7QQ87CoW",
  "key11": "2CPaqHGhDNQovyguTB7LhfXSuj74dUhquCDKZ3v418FgCRMJ9ujY5uNnDW7QUv6YEBLiFiqffDjBEQJwVAAAb98J",
  "key12": "5nZ7ia1m5P5LfZDzE474aUP2phkwt99HbEGQ9ED1DzZZJGfVojP8woJRtZc2sy4k2WZwabbKRBVTirmj9MRSL6LV",
  "key13": "2CYkVWQgPAzHixrf4urcPSuYXWbW1y9XjUwCfspzMTEmH34RHHX5L33p4amETqNc8dh3mAxektCDKUyn9D6m5SMf",
  "key14": "2VuzZBo1ax6PsQqJrz3zobAZq2BJyhWwzpHXiMwrhpebsb8T1f1cnkmAY21UCJ2kYXQ1LGQzttvwcVQ6Ad4FrFi3",
  "key15": "r7vt7pQgGb7npYzfBLmJxyYgxmy3VFcd44fXEoGwGZMm2URKHatBpLMzo6Eyox3kE7apMHFuBRW7xuRuDSP2W2j",
  "key16": "a2RE5X1GivZHZ8bnSLaUMTKUXh9mJQQT9Ejxvuznh73mcxJbiDJ7GqtNEWDgPncwbdtJi8YpX6Dg8s2qmv4uTMQ",
  "key17": "BNHvBQWwj5Dzpgsv7WTWaQknShGn3LdZCBnFTDjSPnWtn2KR5SAUa5wEZUUAwKtYpWJNGBc8qmzmqYptCD4kqtp",
  "key18": "3nKf2rpUasARsHP5WempGHChCGtaVp4xk1uJdLyt9G47wfEvqbVSPJ5G82f8rdvAacKuvcGny2VMTYYm87bsA5qr",
  "key19": "23KYrNaxjoN4Jn2WiiPUT4BP5tKvu5R1bLhpX25E2Pzsm9r1uSMuMfo1eCU9Wq62XqHGc8aNShMVGR7a1oum41F5",
  "key20": "2j5rXxPBSsPy6qci35r4Sp6FzgedmyMnJvCGfJjL8sVfPVNWR6MuALcaBEiAjGUCuv7KNPRPKFWWpTdLfj2eGj1L",
  "key21": "4vwKw7T5SDwndn2RD4Zc7R5deNuDuenoTit4ezVkjnVzF4wb93jdH8jGJqM7fDwtNJV4mWkapgy1kCDwT3SP7i6y",
  "key22": "3vptMjvbrFXQZAJcfXRbkzUEVwRaG3HbBgLgTfftSiYKXx4Vk6ggEeQHEe5kyW9mZ97JzffqmCxENMGPJXsLAm8w",
  "key23": "4CdgvxqG8QUXS1DWtrpb9YSC6tA4qSb3vs4myReATt8nk5wpHRAEUe2uHRW6Qccp6QtmtY3dBFNpHH26LSzNZkdj",
  "key24": "5brHTt5X6oKbL6rusKSK1HabbcD6StnMJXpPov6S18p5jrSjktQiuySPRBmbAR4yUWvKQyh7uWsM4hYdEjjuadVA",
  "key25": "3hhyE19WyCM3ZqEeMUeHY5v2oT1q8pRXWCo4BCJUEtddhdZhRz98UUsturhmjfpN6DvTRHeqQkVk73XcDhh3B1qt",
  "key26": "kn1Fys2FKqTt3LS7q717AyGFLCpFVPNmihW6qMdrQ23wyH6V8SxPDvjpNZgzkek3F7UochkZLHevWGgdiuLhcmL",
  "key27": "61FCAfp5dYU7P62yKgyJgPQgtyWwYPgXQz4V9SsKkXvYKP8PuxxKFaySf2uDCAVNunhfxM7Zy2kVuZ8B7ujujzQJ",
  "key28": "4Qd3GS2D8GftNVgoGggdjwKsB1JNB4KYSASrKaiGJz2Kbey89Zt7fZpye9rG6ZswCP3Y4SemeHU6KyUzwbxvETxQ",
  "key29": "TF3y1ejSfMnuJivZKBGGATtk1KMCFXRkVaXGXx6aKK8XdwXRrwoDhTzY9BfnVkeRK3YHurGHqnGtTY8y9d7VXMt",
  "key30": "m963zHNQRjBQHd3XmeNALGzDCrXUJPrLdsgMQj1fERycJ2imfuNQWgaTXihi8mJNf9NN4RwBPCNNNxTrN6QRUQt",
  "key31": "2VGB8aYCqcMHLDM9Lr2g8hXDgRa6EesHNW5UTKu5NLvatYhPoWz8mbRYYwJUBRQmhxsgptMvvD6cibFvkHrYGm6Q",
  "key32": "5k7xhrqipDCkRYSmuSCPGTmn6g946ZFmXhHzr8wxdQa65Bj66yFmxvf8uNTvHCM5CNHfqJ5hAfzdzo2yLWf5g9CU",
  "key33": "3ppfATsVZaUuw8u5hJ1oFJtceTBNppf9bZdvNnh9WBuygrmyf1XiseMS56L7oiqst84R1d66UpgUtstsnzVg16iS"
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
