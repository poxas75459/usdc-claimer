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
    "22YXNGCrBvFAids4xnoN4aG13z1N7MoELGJAPGAdnLu9Jmsnpk5ucrnRzkaT351UyYT9WVZeYWQDsMKRvE7HRrtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nz1XZTK9quJzVjt8RgjGpjQTScwTqjWKvEdj2bz9mrtnBZvPV9rdYnbHhkyt4jmBsByEYFwUVx8vbyE4URuPHnE",
  "key1": "AkhC7xebpLghYR2kSE5j63DwiBizgaN2pLK4RU71bDJU7quDCdCtjBKYukqhZkgkAb1PFCjASA3E2UFug66eaBr",
  "key2": "64eSgZHMLazN5bvmS19Gaj9qm6HncmpV7TGx6rmXdU6CJ3vhkXeePqHQw47ueb7nZmQYL2oAEs76fu7BPmFD3UG5",
  "key3": "5xskvDQdmrRahmddQhrvtoE2QbkMXkZ6Td5vpwUWwyzjxPNZS4PXKWBcEJCZoj5RHkeDjdhPHKJ1ycVu5k2dY6zr",
  "key4": "3qsHPid23igLgCNBn8h5o13xEMTkC3RQ1SNGce5YEv2jcwCBwvCU3kgzksdsktzVaacCh8fxt2Gcf6onsPhe27Bi",
  "key5": "dAoYi9ME2pLVqyW3sqcfhTaz4H7RGGvgd7mGyjqZvUcRBLB6YqVEqfTG5Uens8LxwzLzSG4z6g3ogLDxfSiPgo9",
  "key6": "4pb7kFW6ADmmJzvgY8ieWtGPvp8HkY3CkgFHhAtCEhRW9cL49CzuzmyUxeDQwPW5B6vQ4gNX1JS9kq8hdYskfq1g",
  "key7": "5cEShbQt7f9fbtSJF9rLvg9HEftdzY83CALZTLVj1oGonqSRwg6YnuCsc2sWC2J914ts1KsHEWsNR7QAmwagCcC4",
  "key8": "2YZW3P66tzukKABFBo6LVGHfK9HXwquk53BVydaB731g7SS1NDvJTWhpHCT4Z8wSG7AojP2FpfJt1nbkrPGv4HVa",
  "key9": "572DxwMs4Kbcupmf5fPj1bmqgDJdZJ2F2cqi4DiJrQiwCkb25hmryvp5KHH7CerkHfVbjCPQcsVPasAfM5h4fcKC",
  "key10": "tii2UjKVgun6WwHpGbHbZrqVoaLWP7oeoeasb7B59M1G1GBeMNLrPX4pAyLeD6AcUKcTBNyKmYnz5cfc5ABoUxm",
  "key11": "49M3i4qZ1K95474AgPyygJHFQV1YUZaydS32XJGhwJgJRPtAAhVsvtLgNaJvkDiJ1fyVLQ7RodkvGK1H4fE1r6sr",
  "key12": "5RAtj4ksWVtDSK4g5m2UDUQVZDkLJ5dtLDjguMSWasYTDdso7oyHTuMHGUxzSqu9pm9exDSUV66QTFfUgENKADH7",
  "key13": "3hQV79GzEi7ifEjPEQguEb1NgNDYGpQNJzVht9We26S3mbYbfvCFfNvwbsSuoa1bGC6FrCVRffAQGQa3ukMS7Kaw",
  "key14": "2jQFXfDDKNBixsC3JoYwhgzejkjwyZhP6EFm1JGvQ6KzGC42gTVJD37newYCpjKiwibK6oP4JLLZ2Zais6aQCMEH",
  "key15": "3gD3A24f6rYHinQAix8tPRQ7i2Zmo9yeARCdU4RH7r5KjpAAyJ1CZxvash8NoHUYUWUbuf9tUpByVnAuswtPfhTP",
  "key16": "5fVyinXbMGbcKUA84kv2XHJy2aYyYyraxk6NxS67Sd2TfurEnZQGWdotkxtdDptEH5cMf2mfoWX2qKmA94T2Fbk",
  "key17": "577y5NdLmvpgFiZ894ahfCgyem3kFbkmNZo9zRXsNaEmdcKALp8g88YKe7fefWpp1TkEApAjznB1hdGfFkcAwoS7",
  "key18": "4bLKUtTSfyMUUM9ozYXaoGUPewfRVUy1GkHodMNJocRJUmjSLefyLBF8gCywUgNBEBX2kbx8LvWzPUZNDNprAPqw",
  "key19": "5TqeK5WLFHPm5cfxeK4Kb236AkRT3Wect1vVH1YHA5EDpQXg3FJRCbmtGeNX6oBe324ZtC4RdEjjbsU4nszCQhz9",
  "key20": "8eKuFcebYecnD2EvxYxUhYbh2WhGK6AQ5DvuVJfAv7rbg32hyy9mTuuoHZacyBuAZumcNBf9xgJNQwKBhuupnUW",
  "key21": "fB3nsQwUKzi7MjykhG77MSJWMKb5xeKrPpnC8feWX1HayEz46LmU22LZiFhCRQs9cpKwJFe4pwhobArupYKySBL",
  "key22": "4nEseBjZ6qFWuHcKGyBx9SLgeJ7ZmuESxCsEXEKJXveW2kiMu8gAhwMfSmQ16fWZ5jpJQPdE1isBjV2YCrdnLAoH",
  "key23": "qXzwx7T7zFvYJFoQyWownJQXjUBnwSRhiopUjuMm2LyTDKp1ZqVDMXm4fcJCHK5gD5uurVa2T6cGvqWfdvKvWj8",
  "key24": "2njAGXvbK1MeUAa98mUiPWV2yEiPCFPdXYGJoxCD3Wu9vac1Qa5VpRMXz9nSoByCcCYaKEoTZv58AkUWkSLFbutm",
  "key25": "1fU1jPQduSiePReC19deQjZmyuhA7iV4A6KLyMscAEQaC3RUcDYmymry6o9HQMxEtsJu6ag5ExuQtTU1QhUif1u",
  "key26": "haAxa1egME9s3Htr9WSyXbyfbCvWiWEwMV3R3CnLrVBeEBE5D6rUKH1KihYBesXh5m4vbRvhrUvZWR5xPBnpDvV",
  "key27": "5jE4LCWmh5FSJrE8twks2HnGjsa5gFWVD4ToFmiSnGxxkmArFwz3FzBS7iFT36ZoYVorfKDxqAiUJMAFaCZt8Ejs",
  "key28": "2UMChJdoSHFsZpUY9sGRQo2CthKn2zb95hSdhyT1MXEF3zSu9QjMuXAPmMvqf6YbBsKGoWTrLBEc3x9CAXKcPW3b"
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
