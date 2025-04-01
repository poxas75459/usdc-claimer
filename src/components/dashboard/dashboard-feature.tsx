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
    "5L7uuZYbk5TM83GfnvGwUPjRMKUXMnoMrcUtVwHm7S2ptSSXYpfuZkZm2dBmzSEZwwbfrqdh358H4SE1tWs1FB4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WPfDW8tZs3vRNhpnVCHuXpPxfGvJnEULszhqtbt67tUVLh4JjAXdmPt1RLu6N6yy4zvKbEd9Bg7cpKXxnpAeo1V",
  "key1": "3uXbUYW5yGZeCZqWVPWP2cqpbpmYWwwjURrKUbsN3ijqZCheLWBYreT5LHbAoQ8hWD5kY1wssBVAvp1QDgdZfw8q",
  "key2": "4saXape5aBjoucGFXZktS1kRfK4qxAjoQDXrmZyxqjjquhGye5VFnBhy42rSKSEwEaB4vthXfd6ee3VkY7fsKwK3",
  "key3": "iZXU58cuPWKF7HhcgzfQForVyVccFLBZnRCF9gHp9Ym5Rh2HeU2QpRSBAjL7JMQjajRDBCusDASJp1hkqGxygHA",
  "key4": "hY5b5vHb4UrebBoZyoxXEXo17C3w1BPqtsydvaJZPQpWSwX9Bs6KsrobMqydxE5pKNECCuzA4yrsH3ZBmNWDNLp",
  "key5": "4DFZJQkzdPh6zGyCLSXWyHqr3NLn9jFDWypomi7PJ6fRCd7ASrPvUMEgVtoivGUNp7SatmU1HhrYQFZJ8LJi1GZs",
  "key6": "4KWizGgNRV3KszKFyGQpMpv4AvYzX3NQ4uYNUpiSKNsUR5vhR4ReZ1mFVriocRfVKNgCgvB9NFB8Po2hjVp7LoxP",
  "key7": "ADMvSgdoBNXynoTq6t179e7g5eTi3NfncGgVGpkjkVQSgLJbBwacrHNooR2Nu3t4znV9PjA9ebw52SqzqnynTUE",
  "key8": "49WgshrNn6wcmQxZeH6ggjSjuXQcdV2ZKjyMnk3nLEcN57iuKdh6d4BpqNPM6nXkhVmtiRLZJmddUaVhzs1Emw8D",
  "key9": "5Y4TdCDHx1o84ehbdtSRN1sJRm2Yg5qSxhM37tDPVSUasTtQkzezErCAgGj6RGYwfHe2o5SXzrJUsxqpx3kxHxDJ",
  "key10": "395RVbB4EFkyauGaRfh9h4pHemF9sZJFiZkpnWiP563gLGcx9SErmYdXuYsfvo5oKk2Eyy3pLPgDvA4VpejiE52X",
  "key11": "2hmGfUJf1QiR67fpgwi2vPUoxCXp255Ru7S9NqKYRqjEkZnQ2vpxeeWYCX5fYkT9iEbpH6BTgGWuTeYh5WomVY8e",
  "key12": "4iRb3N2ft8Fbymsr7aG9UAs6H65i6Ry88KjhmWhuWnt1Vcp8sUGiFM9NCQZRY55ZiDEscLK23S7UCzrYSDpESf5V",
  "key13": "5VJvx2PeqHSDsSC5KWrr7dqDMkHw6rtaNRLkwyyprgx6TheYwC4ju8JvZVoP1UTkf3GreiCA9s2PkxR6za3GY3MH",
  "key14": "3TyVSciv2X6h4FyFV4f9Sqc8YMNzuxsHTqWL7BKaHPvcKaNr7qk97NLPrEPJfEED5wubMBXfyZfrh8ZYeKGQecSN",
  "key15": "419XpDJ9UPqT8QznXoCtTYNWawjpQrn5o2M2W8C8kCi6T3uqfHq3mbFc8zCjsJLZiV7iMWvG3xTp9mTg49MtxmXk",
  "key16": "42qYGQy4J6B3J2iQJPRnj7p4ev8HCE11GVwzPdTfGU7gainA5VGmcXu3Sbuufz5Ewwc27jZbG6mV5UEagDgLJx1L",
  "key17": "2ac7Ty95bNptdoyoDwNtMex9yzbY6QPNQMAQXco4TPjno2FsmGfCsnKErdzFKx8TNJizLPw9njYboHBHU8NUCDUW",
  "key18": "2Piij7gYYoa2Wdp6xeiXNgyT77ASwTe6PxZRRhwpDXohiMXDSAePESN7BGw6Wbpi2S5p4XzUqH8rBnFQzHNL6pB7",
  "key19": "4oPNQh3GtTYYnGZrksARPNwCfyW42dwMhdTqN2ysLXJusvKWwC5QjW4oqTJKvgo31bRFqyKXzNZ1SChM56oKq3KP",
  "key20": "4V5TCQk5bveeTR7bbyys57jtV7uyffWGC6xQ5q2iVC34P81RsVwZbEWNwJRwJEvf81dJtoJzMEkTZyWEXcQwEMMS",
  "key21": "2ZRRUJiQ5n9fL6KpryhVSGS9ZnN117zNT6VwUqJwKE4rVzybdEtxfPeRCxXBsVRu1weg46GaQ97yTgovDZcQCTnG",
  "key22": "2AhbKMi5XBMNkTLsCBRoZ6rUKq4aC9BWiTJew6jf4VkKfSiVobtZAqnpUjzY1NUYhScuuJ5hsT8Core1FgwXceEv",
  "key23": "34zdr1LfAeWWSBGe8w4At7DM3n4vodQuoyjYh8R8xFWdVFZN8jRJcosdj8xRZjFQwNE5gnmX9xxyX8uRh4wtJFn1",
  "key24": "45vEXXzrFx9yicdWvHxMrPZ1hYjcG9y7K8xpva9PooSZNPqj98H1H5Er1MQV2CrrocQEWKQjf7Dt9tFoKBMY8ttm",
  "key25": "3W9JCdhHbioY6jA9RoxvcNFt1huZzDZbMR8fLHv9GD3hZaGNnN2U6AbaU8Atm2Yu5iH3TYCzbyPDVWfqkTV1245g",
  "key26": "4bGivp3EHjaMhZcJCiHYKb2NatKkaPtePGjuMR21KF6nejtYnin7cnuNQtZ7CesiJrTJbVgoFaszrhYd88nWYL4Q",
  "key27": "44rjKfgUx3Tr8Gu1cPkoaJtCCXeMnP2PPafxzRU9esYCG74Q9bqnnTcztUzn6dsMqbnYSFm5bTyGTrbMJX2zHcuh",
  "key28": "5RGRWdgKkm6fsmvsqA1LtGwhUUMnKpPSCUuGYkH5haz4gayy1FppbsXbBZ5ybX3LaAkGFQJB3NCVWss6ejCAHbyN",
  "key29": "3X9sH99CzcHs2rmV9m8jNZDZJUJHsbkNbK9KZNLE3BkzZyPynqjcsT3UHayMZPBNzxdz162hkfTwKwJBdQZ3yC8C",
  "key30": "4uY3eQorv8AxUTzU3PbPHCRWQiK23Fvi2vmTUPe55CQTikgjUDsEb32qjSJjUeqqgi6gqWrtfsSaT1qZC9zYWKRd",
  "key31": "5bH1MNQ8FDLxPNZ8FEZfXBQDPdwZVTeDbCiPEC6bqvKyTbtyC6V7MoA5HSfQywqoGsfDdE7Ag5kqFagxHAwaA5oQ",
  "key32": "2EA35PEQXKLXdE2jaftNT4jThpHys96FsmvimgQNMjYo8BzrXJq8qSXcrQ9Z3TaxLYTrDPsbYzVxSuEw1FABfkyL",
  "key33": "4SCDGYLK5hnpXFbriBhXweDfhmptzf7jn2wrbxg8Z7Df9ToQ21i2aaKAToNEsrP29kfscLUgGYU3RefrVP5PRvH6",
  "key34": "4QDGdT9C82ZJkwwvC8RYcK4BvicwPzKymLV4SWQdPj8U7BBLd7sJv5gPnzWUbwA2hBXJ4tWe3uGbCzXwSd4GA8zp",
  "key35": "2cRMRWi1YxyB6mRorjL5hPEnbeFyS4HXthDRqZXooEMxMfFqqg3BifbGDVo2us3z6adLkSn9kbvkbY3uX4udSZVq",
  "key36": "CQduzCAgMrHG8TEjDn9NkBfJEgnC1c6muvLTt4R3YR4mzfw6XRjHHW2BFSzXDvFChT6WXS1334AAr7C1C5ycaok",
  "key37": "2wbyBvhq9fSEEJZYSHD2Sk2RULRR7q81gjMZ35QRFGGGYeikh1WzG9n66xoshrpDjK7iwZwL3fgvUAifrwsjNsWW",
  "key38": "4w5YTYfLD3ApDY3779Ff6FqtHQ3vR4Y8jjbinDZe2Jwm11jSAWr6Qei5QNbkSAUFtEcNFNVX9hVwHst8ea8iKnp9",
  "key39": "45TNJ2rpQYVXY3X5FwUE7FGiqboTSDChz5qeUudtFBCLML9R5jKupiiBAs2pHtTnyU4RjgRWqYCviBzr99nGDHZ6",
  "key40": "3knnnVpssaQNtFRFkHF7unuHEjADbHXQohCgNoXDK4ACiH1bm46ALTtmgwJZaTHKQi32DRPx8JwcTLrRtr2DZYkZ",
  "key41": "2qibXC94Xfz5ubWhEt2MUg47ze6FguBjQXykJ8MvUTanoAtC9zc6iqWPoHXgJWtFgubF72uuWKskjoMFCFzdsbW4"
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
