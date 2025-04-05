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
    "5p7jkh8QrdxWUZvneRh5dYDfR1BVybXZqMiFw4Qjr2puhL9an8TsPwK1R1FHnbCJEcCiwEBsd2YBhhrsgroVu6Eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yQvgxY4Y4TXWduUG1B4D6GcL9By7Jsvn6YtB747GmrfAUnJQxSDuMGAjmXDkjDj9Q4UraxH9F5bVbkzVAdxaM4t",
  "key1": "5gYo55RycaZv6npwTpj3udBX37V4r2eitpQkXNg6YAkqEiBaFsDYYJ8R9YtG3tRDM2VD6qyAjGpdksQc6ciBxAHK",
  "key2": "5Q22qEHGnrcoXRDakqyBggAv6dqMh5KMbiMuYJwj7RK2gfaEz5eC9tY4h4AGpVUBod8LbeUnE5EScbzoRwgw1rZy",
  "key3": "345nhSfuxC73mCRvbGudcGze2EZQJwZvDDSCCEXhUBttxdVWPhaMWpqKQvkh2xSBodpnAeTbsQRk7EmsqpfwzaLH",
  "key4": "LvTVASvicDqMaMPp7PkfowHKagoXxGvqwbmitbbYKzNWx666KbAnemZX5nqBzY5MSDfYVb3B26FCPsXunJP3jgx",
  "key5": "APAfBatU7iN7KzuHL1g4pqNhWYoDV1xPqrQ8uQPQXHC3ChKh3iKZzVpA7EtMoeCG2UUMYt5kFDvA9Q2EYG5KLxJ",
  "key6": "P56jHLcBEHTmCHzYARttDSN5fMmCak3X5SmH7Hd7egtrECmKaiakFjAEqUudFM3aHvBtsYD6ZRuwyqbnrNMtQdU",
  "key7": "5LZrTSm6xuH8DicEetL4oL76gnNVpre9MWJfmPW4ABc6QtGrY9LvbDD7ndSQiDXaex9qGeLKNk7HyUTTQ1j14vL6",
  "key8": "2Bb1q6jrdipWrY2UKwbCY2hmQr5F529dt7Teh36t4gyxNjX6gwvgPCnLD1wxmkEofwQJy4YpyChbPph5y8DrDPNb",
  "key9": "66ahtkD434bU5y5v4qzcs8LrehRSokfFhN5TdrzKRTHG2Nm3g2124BWi2Hv7H4YX16AD5KH4a7kNxwf24B1j3smL",
  "key10": "f67XRbez5wmEMB9cTxiUuanvVJVKuqFQhueyqzziPNPva7nc6jKsqpxE2k9cdThfJYZrLVt6V5hVqSBcN8EPRXP",
  "key11": "gTuVdk9tzHdnrLfthDb7RHSqTfd5DJFdmCC5vUCPCctheLWQX2RhDehoLz1Ci8CHZ75b9WGJEarRDNxEADZrb5T",
  "key12": "5uDY4w7fgZufNjCB3Yv3jmg2Sry1PKKb3WRgGGgT6gvEWNb4FhuQSudNbWSJc7P2y6YRyJ1fmLwiyyhdyUYCLp9q",
  "key13": "3HbL5wgZVQUM6hwuCty21gXMtCWJqfpETtwJsXe5fM9ea5UULHZDuc6bwfisoo2uB1C4ihNjKb381ZLoyGR2gRei",
  "key14": "PzV8HKQm28G9uZQt8knbjAf9QnyWG7sGo7dpPXn8V3Q3quF3eaNdY8SpMnEDWgKcyEjQTDa1PNuXGrV46pAz7fL",
  "key15": "585uvSBmYZpz77btZ1cRGp181WtmThJ3t9WRU36wu5bwxeJVrNi9ZykiTvNyGMTp6JBADtvp9k3boSVA6ki5VzHV",
  "key16": "4Y8a6RmSwzr87GkCarg1kz6ekJoGjRmbSWW6YakZG8DFmDiMoUX6kpkCZwu5xEJQFbNQoasyaSsE1fauuKUZrA5v",
  "key17": "vqL7pMqKKhEEfnPX3hTJJoigV9g1Q17mXBFJF8oGKt3FosiM3GTxZsqz1SikNLRvGtsdBhwpSQv27UfwzVyHtPx",
  "key18": "4LU2BuEF45i64c7RAJK37o8JdmLT8Sj5sBE4ZoEcXQNvQtFHFboRJLdNXWBkWCHzHXUyuwqHsuawWGKPci6zvVmC",
  "key19": "3UoSCFaZt91NDRJXZ8H1fLj9jVELZLbhELpSxUXAojpaXruSrQuoJJMmYvbZBWx9TASkTnWnSMQMhs73kGSi5mWa",
  "key20": "3CXw6sK3sBYqJLGRPvvzhPr9pCZm5QmwHoDKCEdEniD9YV2kgLWrmAyNvsfcF2V3RKSMdhwXntUe4CnfvW8D8k7k",
  "key21": "2EsqPXNCR3UDhn7v6VsY7PLBdKoaBUBEfT5YnnMAyhbVGweHRpiAzKkvZwf4VEL2GSn67W6pCDv4GtTjQL8C5zYE",
  "key22": "z2orqdgBvannAtw3V4vUfP7mSdB6ZYfug5Re6w8gnefTkW1vd7T1cvNW3dmPRvtfVZLicqScBY7o14he3jQkxG2",
  "key23": "3KJcC9NTTVJJbYxrB8x151ZV11FgV3QVoMSEAdRXXnEL8BGt9r2rV76gvJp9aNu2ziVnU7XDEPrfuLPoWpcskxzr",
  "key24": "3orf7JWnoCQGsiHhmgk7q72XcuioXCjtMFr1YvPgebhRRfWBHQchGi2PjSFxyYdmNPkL36sbhnuhrKAgwq7hPJnV",
  "key25": "4DNsm5nYUNGLEzxNS7rH4ikcNTmWmKLB3CFBAPRfbm5LifKhx48YR8adyG2qs1oNqYiNBgge8QsbvWEwQRoBcDw3",
  "key26": "25BrhQ7kAo1iRapHhrcsTeiC3fQCLUHaDX26THRW5uLkVxaXAib2LvU4NbcVUSx5DcRsLrMW9Vzo5EvKxFXZagXK",
  "key27": "dwj7ZxRuiAyueSZG6TNguDg5ZeoHnaEChf5erEzWVrym9vpWK1nEKRAKu1SdgLzXhrkcb7RnmkQPq122x8SU7Dp",
  "key28": "5Xi3XVpewApJvgVU6mGJfcnwyhoWvR1fyPkiwfh8wj6vyEDuMcEH7bRhQWUSyqxDRnjUeKzkjrLKLzKjVKYnfUAd",
  "key29": "245puw2qjUn1ScDk2aMzppyQVxn1FakmnoHzdY8FM7xdaNvCS5CdF2hsZ5T7cshLVMr1DTGtkzxCFAXk775d4FWG"
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
