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
    "2xSUtzfa7aEecRzrqQpm4KFx1s9VyKt56f1tooxrmy76Px6A4vseiv2JprwHsy8JPgDZoEKdDmwX64kmqcutPbkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UfWexA43uP42owzjPJ2FaDdLFTM19rUkzWe7SATKNbuShSJCkrXwgU7S5iuejEGUSPmmBVy61v6sJB77Cozgodm",
  "key1": "3oqzjG8NhC3CGfnmK72pZtb4zmwgU3a1iXyMkJrq3eCTkoyUVdbAwgbxme5QJxQGFvCojZe9C4kdp5hC8NFDJv7B",
  "key2": "2iVrqv9Yp5Jar4MfXKm1M9qVTxMATde9uCj2WyFiKdndTH5Mbxe2x5Pop8yAyZKXUysXQPkY8PFEnoMcdrphA4mf",
  "key3": "2PgGDqAD1TBQzbMJKZis5ZY28Tpz47XCJCkErD8CSe9nhy1Q1tR8rQMeW5QCR2FFSFbdnJYkSNG8NSuFX931XNCm",
  "key4": "wBCDi8Af1gkxEgUjUzERi8kLx7Vo9YEBfKV2RkHCNmeC3HW1WyvDajZmrqnewee9o4xn12dLG2uUjPR4Q5nNHLR",
  "key5": "3xowkdtyHKufoApyqkD6mUxMY2iJxgDe2kaL75ayzE4RMzERaYSVbqGFMdKUDUqFawXeUe4xKwZiwpXk1mHLpzKX",
  "key6": "gjqb6ege1mSrHsA3oJh4AcGt4G4MEmwLqEnANfndpPSojZxSPN1Aiu3zLu6iTGFTpWcQw3Cwcz4ESToRH3pW4qj",
  "key7": "5z8yt3oqcW1PqHSnzxQwgHgvmfaGRuryuyQG8QuWTDXYKtk1S2GTkurGLu5Chs9MQy458XJEQrwus9b2xuJBa4uz",
  "key8": "3QRmRDU2Smq3LcyadrUstXZq5sgSq6c6h7DrPH1LqR2g1Sp4EZXrVkpNg8hJYH97C8aSRK5ns3uemiAofF1mmBQe",
  "key9": "4wSVaFwp99e2dAHU9cWX9WqM63WnvNuEc91RmG3PZRxn2dSs8fjfeq9yJWvtxmEf3YBdBcyDoWvtLCUJUFgyyxbr",
  "key10": "2EVik4qxoLikHq2zUAiAUCpT2RVfe4CMNbSmRRRPHwEp7raZp7pSdXKVeNWTv4g55mFLYwYTEtpChX2SDpTNwh8P",
  "key11": "3euX7wsf7qUZCoAauvLBAax6gr6EfqZVY47uqWWsfqKLgdQ7iseE9W4G1DYy3pnW5ynAWMLCHjLodYKh4LQBCcXq",
  "key12": "3biqCpnaUNeDsxdXKdF9MrBPgDSbNLix7XiTn9pJjaSpRNheJyWaFBCAYtqgKCQJmSxcRvce3UQ5ab2mwcktXfGW",
  "key13": "2xH5ieNiaWNKWsSQ8QZpBbhBSRs4bgLXWs1SiDVeS5sWpaS5nSXRtgL47omX7thNfixAd6hhtHmecoSQDG1waXxN",
  "key14": "5gGZYDfnQr4tYVPVccMWR6JXtaMB2BDvhDwiaUyHaqiiW86V6reqqMoMDyFb5qQRPwHJHk3Cz6KLupc7LCMmoCHf",
  "key15": "wtQ5CuWDBRu53V4a6f7XTgYmgxZEdeYR6Ss3xesVbgXX5ZmpSsp7q7XmypqUzcUrgx2Vp1kiz1iBYgsFyadaSgL",
  "key16": "2Xrqak5NPTmmQbHeA8c3VPBC4j6SDkbWU172gYCbMrQCWzuHzVZ8kfdUJvnMt4pr38R8ZQyND8ryiYLfbFzitGEA",
  "key17": "4YLKiCcFiTvfV5BGNPWP8iZRi2btZSLdMvMwGmHRvFTdvQX3n6VFKCs6SVzRxyQ9BZJuSZpZrXgDiZmKbKDhJTS",
  "key18": "5aqgYKkJUYW3Mkht1C3qfHSN7Cv2MsVXPqeDDdpXhkNSQ6wdjKrzLqA1BgXPGYvKzWvCcagdZAofAj1eJR9m5wSJ",
  "key19": "2hJwGq8cjG14hu83RNjNxhorYio4gkXiDygKX9HZBEghow1hntwkASwEAEtwzFLhLV62G8Z62mMvGNHai9qp5ZKP",
  "key20": "4sZjZtEXUoBo9S9D9HSJFGfiJtjep9QCMwkcA9V3Dr9T8eN9CuXPmxBudGWhKsMfZ4fLD6gBoJsU7H6a1xegxGZd",
  "key21": "WEyt3HCQ9CW5zfSe4Pv4259Fv1MfBrn4441WivpBWJ5VyHJhF1UiLBQF7BojHiqMkEHFpGXQdeUKwfFgajuXi5t",
  "key22": "4LjApfbm2VsAdremUgh55w1UPjZWRcB8RoYY25brXoF4nh5VR1gTFRLyBzboX4VA8qPDmMzZadUqLBH5L6cYqt5R",
  "key23": "5P8xWDEyURAEzBW23ArzYDQG43rcN5Mj9sTbJfJdtn4sbafr2KYDUoWtpoNcHMj2crgnjyX3uzSGWvhiwydatJwG",
  "key24": "4or4EumEYWqcvxRJeiUUgeDzG9pGYfpFkbzWyxh64B47J16SqtsTqPMec5e7ereuz1q45nnubu33MX9AoaVMNTP9",
  "key25": "4FJ43chAvse4WMy2BSK7LVMNM2CRGFXpbU5NEFGE5idmNEsaaKQECsEiwS2y7AUA6pDDrCdMeQfrBLAneG34QvAh",
  "key26": "4R54Js3h77cTQzAk1Yc4oCAZuMX7jRKUB1K4MCPAcSz5vYNy7Xd7YvXREa59q5XjJrwA9a89UCmh1Vu9vmoGgfRK",
  "key27": "V9k9YwhMc2HmQfaBiEjxvsQ36szNDfr8eGyG5njyEeSDEzf47FpxcrdzEV8tEvW67f3iw9fCewrh6DBMAtx9ErC",
  "key28": "5gGi548SbKakymfHN7939pDfpoT31ZRW59xtdzPyeVrLn95C6aCoY3znrtnpGPTTfy91LELjL3XrKYCFroM8H2ws",
  "key29": "GWT3NfRExHpLhyg54UXxU4dMb7sYnMeBmG8FihkTnzaNgnQe2a8FQtVD9u4GBVa1KaHqz8KW3PMFozvc3mUi7Mf",
  "key30": "5Naip9uFQdWwrfKYWNpnBwN1SsFdehaNZ12A6Vd7y3MkoTjDnLFut4vSbAmBEpdP2x5Yhig1SqV5fJjHTLvjgECF",
  "key31": "5c67tnPXspZNeSPjGVirozCPx9exh6LaPQdMR1ARxQXcbHcUL44w5V2nUHSYqV3hWvJR9P51gcKdbWR9eXfTwypZ",
  "key32": "3jQbGMAXUGYrd9F4cK3B3S6H5WtZPoKyhBwnKatNG21cuK1spZ3cs7FvdJjbGDTJgiNX15HCZTzGdtz7BtsUxJoU",
  "key33": "JSCeDj7v5aaLc6nf65PngdUdp8sCSBghj3bz4PfoKURixpis6otqHJV8kqi19nXxVY9U1Fz7fA5ZEonAarNcKH9"
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
