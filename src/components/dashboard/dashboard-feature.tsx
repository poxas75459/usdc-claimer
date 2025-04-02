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
    "4s3WeT72Ywr1UEzVhNucPwjoP3GU6FzLHcyfinWtB4bPybFe7WctyjX7VHQVReDuvEVCNWZEpwSYp9L6BjUeLPx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SJauDsKPpFef4AZ8FLzhk6q9BVMHtitVCiMq5kqqxAzhBBzVhGeijm986eAt6BeQ6MET1MuK7Q1yHjPSC5BHWMD",
  "key1": "4Y727UxcYaAP1uXg7ZspnjfcUe683ojx1SiPfDHZyKT56FtNnJkPkvS56ap6ycufRQYPTmyF9TcsvFvckMzkYUQv",
  "key2": "2E3cbkiKXNbXD79RapjGVyaauSExgdvCwYBwDaVqgVUE3RQoVamAnWWSNbp5Xmz9UTMYD3HrxuYRLzms1uc9bPex",
  "key3": "4gmpuJGor2joeHb8ycTDav4cM9JkRZxzFDwPByUZznJE42zchkaecZhosmMkbXgCgmK6zf6G1nJA6ukr5x3iU2j8",
  "key4": "4JT26UXTUj7hDnmYPkQnv5eYpMi3cWV3o2KYduxkd5NDomiwu3Beq4WyBGdqxPMbiYwVQHdExS8sn5WWkridkVj2",
  "key5": "5yL4T9bUYZK3ZzXnXjJoBeC9Sxaq3AtvqpjmjTynrKxAbHdkK4dvwRBvNaZTY9iLdCJhzj78fHAPWuss369uypTS",
  "key6": "dLbHjTAotzqneDvtNeqdXjC1cFCiaJGhyAwqu9n8tEEeVKhAms1DA5miReW7DuNK4h6D5RNifFvACn7F47EXiJG",
  "key7": "2SsZteayi3L1jRnGA9Ces4bycE8cHv3MuKvb1m6B8UX571dnP3bbLGDonPYCJ2vUZE3mB1vxGD1hAyDYSe9nXYWJ",
  "key8": "14uyZKFhJ7b2fafNjbHa6K3KdybRcUiT3rxN9SdgH34w2chji7fDkkudeHFz9iP2mfJQ3KFL2J3YLa5meXvv8qa",
  "key9": "4TfVpGcQuQ7eG8tw754NSExS6ibhJARdq5SzUJjLFCnDMWEnfqNZdpgnLh3sohBUW8c1FnAejLkNdMLG5pKD7bMK",
  "key10": "5imd77YWyhaqS5bMACc7MSb6gQ56W8uMowAaxAqEtDLtNoDibF5j75tXR8aom49CBgTQ6dMF9BKwcWscbD5sNAf5",
  "key11": "5yiaE1njCbELdZZ9Q9BYsJA5NnEtFNfGuDmbcKnukbwKraXyoUCWz9gccbnsa3uwMXF4Dhq2WWwKzhphpS8wStpe",
  "key12": "5Vxsk1agQMkA2Z7ayMMnT8aj4FQaHjk2zEVMBFGEeo4JY491E32Sjf5GiwrTHmyHqYNHX9a2ipVR1iqGfb1az4s2",
  "key13": "hiv9ZpY9yR4iEc7Kv5ZvVZ3ZChfp8VGsE9upe1yYcs94bKDL11MeEo4kzNmLSo3rNUbhs9zcQZZDU1JnEYTXqLv",
  "key14": "3tKzEqGRmp1RKR3RYrpUCtNugozXPq6QweuvKrArV6pjG5SqghDeZ8vLKWuoSiTcKrxkUBQ6MY25M29pKuq2AxME",
  "key15": "5ve3J4TiHtyiSdL3euqHu9EBR1cCUSb676YGxdkohwheq1SjG5ecDzWLPxG8SGjBvc3pmBuRLPCFBPc9D4ssZCqi",
  "key16": "51FFNKfhhCX8zgUtNM5D7S3Ds1LyWT8rANR8TYyuYErDhmqgt3bgG3FnH6vmxhWLnkXRkHL4MAzjtZoWFNWUf1Rv",
  "key17": "5x7vDyx5dTDyPhZecJNxZwtycQJfSL3LzuYWNPMTsUkAbDWJKGRhS9JffELH1KoYiWWKAKMESyJuDWtmsdPxGbTh",
  "key18": "28JgpqqzZWkavTnjrmnp21zEcir6X2fBNUqrkKcRUngcktr8ytXnobreCj9hqLhv47ssw8THUN4sziWFycpyodbd",
  "key19": "2Z7hj1SPFF5RKCJmBUQY6zZomrm2AdMQidTKjCLuTiThkTsvoFn44ET8ETdYdr4Z3XaNEEitmMFxisgJRq9HqQmA",
  "key20": "dF4zUHEywqLzGxSNu8NtQizBUimrHDZrWqUtYLP41NiNzYM3BhTe2jFWK4h8U4mSHhpK98Z3vvSwe1qjkk9Lgis",
  "key21": "3N7QkZEc4GfJcyT3mNtfToqhfCBgGwkxSQkuYCaquXJC4ufS9nMuhagdZ9uxgKnp9zHHvCanRpxUwqUr7ocRW3fh",
  "key22": "5cE24ArGdwNFFataHA4976LCT82XLRzrrJjtSzTazP1FK6Dw7FhZJ6tXbJpJsFf4xrK29xNK7SmhFVDSyWKVm99X",
  "key23": "3UnBJUm2dkBCb4i7B99hPhrfSB4ajUgM1NaKZ8MjHUxkkhTWwsVnyeoqzNKNcmbWVYni8SZUQtGtyasvMepbtBWa",
  "key24": "2wNshmwFhZ9SxNL9JGpqCpRyV6m5EBthYdVvdwutfHeGEHLFTQZvHnqZBNRtiNCx6XvgkvvjN94pGygSAAX43rHf",
  "key25": "jLFW4L7pFEMoYf6SYJe1e2SBYwgqwVSKXJqKw74smrkZsdrPhctAKtcmG3nPZ4hqa9bx69CB9pSdRM4eGZv79tA",
  "key26": "2Fjdo5KAUWZ1H35km6gs922ssiVevMEHdmiGLRCDE17Dsm8wSPdSCPMnoYgspgTEL3CbnNPvPkHXCvnbcFsh6Aom",
  "key27": "35LeyBqj8dktVXETDE4jNJgWvqrxJWoedswETb7epZBvNfsk2rbEr3wT77TkcGFtDRtm7AbDJrLkjpRHopVkVp4y",
  "key28": "5ypNxqtxLwewcjroQ5ou5QANcPy9MFSYFAQF1kCQfVnkhKH6hiNgBMtquTEqzsVb2ERXCnP9i9eRGutZNL7JBYXn",
  "key29": "xEAnYnubV81PNPjydV1SHrRbZgZuChMRnyMX49snutGT5WmSAshbHYtqHjVNnFcACxCEFonkSvDNRDVERacF6Uu",
  "key30": "2WqvbVwiHCqnSLx9fzeQ2nKU48ndpzWiE5BhezyFi28BLFciZPZ4oWtg8Tddh7TRSZ5WuaKjihjHZJpwvmrxpn94",
  "key31": "4f5PVhw7aDFTPkM46rw7LRsU4yKBYe6qnRtzPauSVTi9Ga8JAMK48UFzYQ5XBEn3yaJYS87CgkkQXVS563fGSq6e",
  "key32": "4FbW8ibUk2RhKVMxyshfhs3Qeo23f2zx9CsgMZsfy4C2oKD4rTqx7WMT7x3CY9frXE1PJD3UZ9svhBZNmAz3TeTj",
  "key33": "3rEzfFnKaPqJ6vJZPkiNDaQPkZsnyajbGfwd247pgeuHSvRGPUKAF9ivtxA547dsLebEk1RHrggtkd4JygkeLfqE",
  "key34": "2QBjwCw9af1P25PU9HShXB4QeXx7vd9hc5UkEMQhmoj6BNWvYLx7XXScndqsTaFysHHZ6hErdBQ6BzrnvmvRePXs",
  "key35": "5RsWEUFebSFqwuV2jQMWVsfme1naQVqhGAXHajdbAWonaCah4qoEdbTR52Msog9h4cS7shoWwDjtxNdvvM2WfCbY",
  "key36": "2gtamz34k4rRBKsQDFXCyj9JK7iYzfUL7s1aK8LCznKpYcwKmU5dA1vgczqA4ynEe2P4xuvhdq196iv4ybFnYDTs",
  "key37": "5asUBgt46gW79Nu1Dyf8AaeT6En8LDxf24H3PAEF3TJVYyGUkd7J3E6i54TtHYGTNNsZVybDqkxsZjtNp3EQUDiG",
  "key38": "3zAqXASaWXrByjFMc77p3VgtBhysWbAiqqA5ArRRajQqi7pjZeTmewoTQrm5R3ZyFYQssyTWGmb4xsmXYf8gKdNg",
  "key39": "foWE7XjNP7qUEesccKoyhqZ26TQZtPR1ntufVdHBiJbQkUc5PJ69nPtXkKffZw6R6a9XPYgfqXBa4dXqpuaTMtT"
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
