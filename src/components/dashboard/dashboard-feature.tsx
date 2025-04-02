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
    "5vrgNrK7ws6j8pkF7Zx7cWA1KchBa9ZYE5s4y4DobbHmithGFrwbbNd5LATT1j2P2QFw6zVkg8syyRvt7iqMpdpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GEHqvHoPmXssJpWjSjWQaGuN3D29aznhdNRftKQsXH8XeYmxcMm9kD52RoAvQmYdrwRVzW3vr4g5iKtBPuvXxg",
  "key1": "44nPCA8G5qBq1FgRDsYcG7cGUUkXwArrvNLSkNufkjebjfhr4zisysjpR4YnJrAKBcPtuDyFmkWUgB2Mmb8NUihE",
  "key2": "25Ycrb7Hisfr37gyHRDcHJdBSxUiADmpTB7ZWaobzPos9g1kGXLxG5et5gi2pMMArimFqDsiguUEzqAwJNL5SDMo",
  "key3": "4NdCBYhHeHzTS3PS6XpDaT8Ekxz1KM9URDbZJM6nUaTWi41NyivG2n7fMVExDAp3fhcNDbqV6NMpWLhadKChE2bb",
  "key4": "5WPvoNfTtrqxMngChKxAQZ5AJAfRhwfSHGrFfFAcZPeVDW3fChNSe7159xy6rUgWmGi7ybk9AuVa9wTfW563CNKw",
  "key5": "43vsfQe152o8grGH7GsuFYRL1z4r7K2r8BBPiNNf9xAVfiJDPbftz116C8kyStrQ3FBQCgHh35oLnX83ycJknbVP",
  "key6": "2h6X7WQ9tn5jWwFdYTsP3mKiGJmu9p8vLcWc2vvjB3K9eX6YGzEUvV6ZesXFa9eDL86LDjquJMNaX515ZU1bMmZh",
  "key7": "Ps5PYqo2C9SGzPhDSeyvSwbUFq91YpheQF74HZREpP1pCM9My98W1NHfgqJAnfLsTwGFgyhbgvgKn9cCg4BmsJi",
  "key8": "5MPsN7Tv7ZgxHt4MTy6VXiRxSLpMuXXYYedB9NHJgPhu12RhpYgZmkgdYRHabvJikuWP35ZEYaGxgrr75CsCWRf3",
  "key9": "2fqdiCG7mNYz4ZE3qFpzuHk5QbwEQ3VYTCdD5gn1WquEnxcwzLjrAXZRUm6eVtKf6wNiCAkiVeoH1rydfYPqN8pn",
  "key10": "22NK3NRK4CZUVH1E5JopVpapKZVEdDZeD32faM3kabCbUsBBZWtSr5r5tEimYJUnnD1WpXt8AjUVt5NZXWSxCY8p",
  "key11": "dMTW89dRQ9V1MfK7GY41JYheHW6d3ZCWdqNiZkBKLSQGVDhz3X5dveJgKNYRHYhEbJqozRbRWKiMqhoz7eZ9EsM",
  "key12": "31dZsdcQywm6AHBG45B8PFUcHLqezbah7Xf1QUwwvSifGfmm4FVGn8LPZHhiGDqEYMTPatLc6BgaFJdqkeJMiWXH",
  "key13": "Y5onj1i6JSns7AjGrX1AtHwnaSrTgxyBXNpjbVZCPY64dz1VkXwAoEsgVEJFK3RruYaURTKxYsYGfDGnVG23uwa",
  "key14": "2sPD3zJw1xTAkQCAAesE2ggEm1sAN6Uoxos2CtxWM9EFdGgZo2AQg8o9Zg61VrqCQZvF5hGmE4DKNRd6MRLjDa43",
  "key15": "m2P4djLdzday5p4xYonuLtMU8LGqH6WAjSe8giSccXvXexDuvAF4J1aBKgVJsTf15NkcEGVriD711HKadLXZAbC",
  "key16": "8R3xEvYPaTxdFPwBs4pKD1m6m2M8NUbUzjxES7Zeg1wGxrNXqV43qEnqGA7qxbbfUSUTu71YLxLAykiyb8LA2fh",
  "key17": "3GLT738iZsGJ9oL7pmm8hBok78aVeYGNJsKiSxmZnidLaFm38TBSWG9qWZ3Q1y8EDKsGhzxErDfu33eWJBYJMCGT",
  "key18": "23Pax9CLDCydsLqAh4qVyXpC9NUnA2GPmrjSinKRpgEtCfX6LLsMEr93QgrUAzVgm8vf3zz3rVakXYPyM9q3tsb7",
  "key19": "PkU5y2x6TtqhhdPnNgpYT2m4hLGGHHCM9WoX55SVChvQx7VY1GQj7Ye8nr78y7TuA82NyBnqJyWZ4rwD95rSVwP",
  "key20": "3S3qypXijUbSts3wRqUZqi2HB9dHMMowAC8JwdCZeKoitEEhzFtay2zChMBwMjWhpS1Mc75dsGwxKsPCVyeC9oMD",
  "key21": "34qTJD5Rj6KqKLq3WXCFqHo7PdUT6F7sBEMwYyMHS77en3V9bJZLxjR6NNat5KMg4CYF6dbeByLoLW9jcT5yaEpV",
  "key22": "4pLpnypdGGkycyVP6j5nLiCFCi5HcKgWcd7HgfbELcQTwtKTTcZsJbGL1qiCm3bxhBpi7ias9H2WNupANhBVeDb",
  "key23": "3YiDuTL2NTitv6E2Exju2xvEf7yhBBewUiNNSSTqtuu6sXtvRysqJZPRfPbNitvV9xjDi2fuGvnV9VheBE45ArWi",
  "key24": "5tmVGMS3R4k7srf5QLafGLkDbPD3zM19UJRpVAzp5Zq5q8XBayAcfPt8qiSHXXwj98c6fEsXYK6QWBtSEiwqfg1N",
  "key25": "4k56bYvdpbiBb8r51wguX19VfBsum4tVb2BqG1kWisjv79s5ePNCFChQYDutwm9V6ZvrAXLnTu1bTn3PthBe7FSB",
  "key26": "3mHepCqpWgBieRT6uUeQAYTsdu185m3Lqk7SkTfB4sTXPgRZRG8reY4xCYcBniiTQeVYB6sYGh9sZtTUBDEXyjeH",
  "key27": "3WtAmFqS7iek8Qi9xvzdHJEngX2cJWp8uFkVsxrfKZisWf5pqFqQwC4jWu1zuCYzK9ZhLpuT7uWevD7hzCLTEveU",
  "key28": "477hPRywdVhi6vNmGcmLus8EYZSsamSwtTep2j36iUioLjjcrhPc2ZGSeKLQuzBviJ5hEmbrZuY1RTBAciJz98An",
  "key29": "5xYUQYcANiY6xJa8n6deQBV2sVrBxaz8fBmLNx8KBVrr8fYgxp8TiF2yX8TvcheZCztjbhhHSabNTfiC4XPWJuPm",
  "key30": "2iAQREJWTtaBNcLtAN6G4KWcLoE9mVMJn7ghRVee7wgxYRP2JMUeYHKfCNT8YTVpy3TuiHKbA9oHc8HfPSdcaEZ6",
  "key31": "5dYwG9dUYUUziePwxjt6h9ikDQQuJiZBU8EcqG1ww7abMsDuaNMUb2UweRhwsua7PcwroB7GTJDdzqNM57YK4mDG",
  "key32": "4y9GeBRxXKQX46mNzsgwzvaCjkms8FMz77d56YMPRMrAS2CdjiVFeQwAqGMvUndQqJhmWUAJT72pZSh6UEHaDebK",
  "key33": "3Rt9wqfVxE4LsgciVpiaG1AAU5HeEm7A6fffMb4X3JkZdHRU8BWiqpr6xadGdqmN7Ny1snNcEofmF6Y3BMJsogs2"
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
