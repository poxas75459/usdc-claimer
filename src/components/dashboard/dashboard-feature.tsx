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
    "63Mncg635voAcvSm2mTGHSoKDZHWSPTdxjAji84Wfn4mTu2VexNxssvUDFghdB9t8Q1dtVWPL9p7Gsc5PPCBQtz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S3t2Q6ZTyut5omQRTmgEYw8HVrxYYyw3HzemAmnX9Lxgt9ym7sVhzBQ8eZrmGPLeaL4XRGLP9fP4VmG6mZmiwLw",
  "key1": "39o2GEcVKmjinezVjbfkiCw7pjXvHeVvUvt8UVmFSDrGCRUuwatojPHuN6k6WqnpL5TVyLC7DMYb5PLg8pNRDUUi",
  "key2": "4CFd7R8LQKDB4cgZzWym2frbSD3N71GfxZqCsgJPMoBKTFu2gnxxqBJ5q44mSyV3fxNWZRdtSM5qVaCnptp5kuCs",
  "key3": "1CYCyn49hwLymzA2j9P8HxAwH5KNWn7XpPUiryZQy23s12QLgStAFy6txSct9mNPWHTPjo9qTfEohTfyM5DR3g7",
  "key4": "4kpQi9komhPoAfmabS1NobJ6dxNYyVTVpdCHPUoxUw5gTyS3BCAYxbiM81XmL5SyCGUreRnrQgbPSucVHiogaqsS",
  "key5": "3VzuUW6oJtpmUGbjwVTYnZkeQrufSyk6DF4P3pX5Y5rgucmZV49WyDvW5nfULvn7Sbyh97Kekipne2DBv227AWx2",
  "key6": "3S2nnyBLdzYTALiNrXpPe9H79cSpYENToJJtoF6XTe4FA88f3yKTJEaUbF7nh7FUSyepe1d8HqbEMNPt4CmHVM6G",
  "key7": "4VSu5urfAUBp3UGdqvHYZwcFiDTpWLmRmv5aPQ9RfiBCUtPBo2CQhLKMowgcA9usPQPfJVtS7HrUNcNZY7gUNGyu",
  "key8": "hs49Eg5KY9xmoj8KeA33bpVdejzawhmULAVFQRNRy9QFWt6nDXwGzyXYHDGDShhBQdUstWFtzMyjdHWzV56ZEnj",
  "key9": "3VErRMS8TNZG7qdjrC1LQcigR1WeaLu6mhTzhNCaw28A9bTEWtWpy922o6jH2z63g6fqnqkFhbGweDE1Bs71gsQF",
  "key10": "59wZVTB6b9PT9yrvr4WuS1ohgm4mYNbgBsk15r8Cr7KCP16q1u93ebvXbaUh5udpY3uAjABQVsRQursLDCBeZhfk",
  "key11": "2KWqK6kBhec3RXK2GtWzajd2d1ziyNB6mmFAZba6sGPHhtPuRb3RRMeb8koNgrZqLwpKv1s3EVR8VHHCg5CSdZjN",
  "key12": "8DN5mAmmJ78gFkEfSASew9JXWEAeP7WpXcnDfYe1TGZxz6kuNi7pkfwWxBR3QeaDUN3T1qJJcAHtnSAk7Swe1DD",
  "key13": "5bd8mZbrcSXNVgjXUYf7ea8mvVvS2yviDUFtV9ocrLABWSNh4Civ5Wa6Z3xcCtsebL1uvDZ7bmhiWTj35XHvFPka",
  "key14": "52eBshomyaGtZfbH6VqwFoJLxciTVHjUCi4jCVJNDSdkzCfscGyZgLiubF7GmJCsmGWDuNLUhfR4uCYXxLEwnndc",
  "key15": "5zamHAwXJ5G4mbbUH1nVz8CMBB3oBH8MRUWwGt9J6RyWKTJCnknUKq9GKqTCiGB7mijzTvCWaQzmS867KNDPGz8q",
  "key16": "4kcQ1nqDjLdGXEUrTyBR7U32djJH1tdpqXE3KFEQQC93JYRLJpi1b4gqghhW1UBqnWY82pmGsVzK5ZoT6cNyRput",
  "key17": "5uf39uRbz66qGAE4ykcvHrc3DeBgVGhLVp8zjfJP1DEKJAVXgCx3t23v7wMiqAaVw19nVF6P7irN9p8Edyg6apuP",
  "key18": "5cdTV8UuNAdXsw3UDaZXCXN7rR2932EBma2zuWXLZRMe8nW16zDxs4Y42Udp9Bxiqf5fwQAtbarMBFPHNDv5RcFb",
  "key19": "ThHhPzQcHtQGSr6sC6AgkG68ie9CSWaVpRJDDbiHZwun4SU5xSYF6zRR38TqpsfUzYEHRtygrfuiRWnAMjRWdwo",
  "key20": "67mUo2Vm144nP9QcWEQ4oPdtVDyx6B9RoxpKTjEjq6LvAWEvaa4bNKUZKGTsLCgKLncX8Uxr7ajvhixEa2zoJ23D",
  "key21": "4jmrzhVGESibfQWEzTcAArypJAPtd2Nj6Zf6mFf75ez4vMig826XkQAaPxc9DSa7ZnZiNhWq3vhfuzqR4WDSoceX",
  "key22": "3yEcJoNMdsEEGU3cxMs1s6t4N8ssQeAcKiaJSewp7vMP98sHrspw7RnUuWn8WThE9LiTCrRoRhMgYMKgS4B2CLKJ",
  "key23": "4oDAJbWr8aSsCzjTC84EB4AsHm6TjubmYoWBMZusstnDEnjVh43roKuiDUH2U22HXe4dF7TaAtZjeh5Vtah2MVM5",
  "key24": "2TwwnQkMmqF8cUjDf7mpo6ZGWsyHB5LpVXcmRTXNA7Y6oCeW7MeMqpfYp5pFdibfBA7ZKw8dEFSZDD2sgRHhVZz4",
  "key25": "3JQcwFYmxhGd1NudsW8VZDx35bezgSZUZEzhTRNuhWWQejEhSeZUKrke8yZxaEvT26EEsSXM9ewZsh7Getr8tVSe",
  "key26": "38BWTuuzHKrRwVnGVaYYkok1HWAVcUmKkhqKu7tZVGR5yQVpmRF6DZa3aLi228N3odyAT3DJvtT8cyQAptctuBcR",
  "key27": "5yRDYcVVeZvwkzoLtppXcTWBPpNRkjr7Bsczhh92At4SAEK81pc4GQU83Y94rTqUchUoEVVAoQUfpce3CY2xGkiN",
  "key28": "RjZXQNeppxriosj386SZrPhzJ41Tr4Zi4PtHFw6KQhnsp6tcu2Jc7ixa3BuQRck9nykbrk9jvQi6NHFHft3WweJ"
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
