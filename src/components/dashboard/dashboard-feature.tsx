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
    "5iSHQVwaBccwgKRzKeU3PGv2RRzvtXUX6mnyH3iKFGx3bQa18yoYpUF5GNJrvSYhjfkyvV3L9qiYmCwJZHHZ8Erb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "12cBNNjDRSBBkKGEcL2e537m5xGWkbW4ynx7RrTg14kjpoBCm8x3PLZfNxzkWLYB7PXLyPxHCQVdhXqAnBFEqoP",
  "key1": "22tEcV4i28wT1yFB9bK9uRYUBsQXXBH1hv269QHBeEWHbpDP279ZijCVXxzRsjkU3ePgFgkRVLhrMn1RMpaadBXm",
  "key2": "3k9EV7gLBPbHJK5GUuLKtcztNd6gYfUSavzCu2sU1k1J2y88bMqHF3kzFXBHzNGEmi1vyteGQDUPAGHCxBLxd9bC",
  "key3": "2kVZf3FXkNsYhfzEdD4TbvZ21cGjDhCMZBWc7B3tz88qkvB2Ttbca39mLKF1UYgjKUga8NaFmsHuLAfkiuJWHN5X",
  "key4": "3QxLQddCsCdZPnDAGFCpwedrize39YnLS1AciUapJzN42pi8viSmehqVCE3a2etsuYDhF4ihZ3WkjaTXVsjxyiKu",
  "key5": "xejrr1WmgtefEW7BmxfG6hYSXAmccicVvJyp9YhhVLNdWvVx1JdFDwL23g54CcGEvdB2cmRnabK3Cr8qJRDfpdT",
  "key6": "4Jj7P6aCgMBbxr7A6eQeaHkQynGdrc1dc9WWjZuYKL4EB2FqzR9iAYXraMZbhxdw15UeWgeLYjydYRYVaLDuXdE4",
  "key7": "5y9YVQTm4QXbMpzhNEwP67pxUqJ4HCUEqgSK3wMisjq7d1tbm2KBzxPB1uF7VZH9WPHHraWjAgCnyKRTMLs3LP9Y",
  "key8": "59sNSvnQgf6pwkLCVG3jJwG9MU7QtYxgBh8LzNzdc5VCXVfErevce6ugcBU1N47k7G7hpDREWzoFBgzTmhGFwpZo",
  "key9": "qHaXUkCDAoHwZE7VATX3zsYfiLjphLrf9zTnNBvQnx4a5LFhhXw2AwNUybFZu8jFeEbTFziw7JknydaLBbQbEk2",
  "key10": "21HgJ8QcurfFTR4h7Fpe9WYCEjnJMmW1GzmANAKFakMDi31vJ2Ec1PwzQaFKDW99XrfDZrCfsqMiWymoaKovCHTf",
  "key11": "3rMw1wFDckKPXAePvshZPojh63uwWNsuo6tJwJRMh5sVR2wdzidkmG89nSbU9rpKVW4JKA2MqbR44yXSwRzL3UJj",
  "key12": "2jiDmr8HkMMw6s9gwhrqkQTZEmt2LdGpyHE2FJ8fWFt4nQbNAsdmg1cxqPograjiXqQjbNK53nNBFVtTWNmuNjTf",
  "key13": "4YeatKS5daVPK9C9WkjRZUhxpLuEPM9mqpiMi4aX4LgDQJU7Yx6bcRF7yZtN12wv9iicZ7Psj48aLGvWZYbUNwUN",
  "key14": "4mWWuUobUQ31R6ByQbBzcnDVupwRE986uhkc3wmdnYQmzLXC13CJgb25APRSJRuht99fDbJ53R2xwGCxqNyCbmQz",
  "key15": "D3n9TttwwgsH84G8jmCTNAje2yE5V3VyRVSrMtogbqbyDX8X5mUjGXrdb75ygzShGuGJaeHBYpNpqGPnZUGAfx3",
  "key16": "tw2eY5CENc84bekJKVkHVqFW55W7Qz7eCimPmYsmkgT2yabM1iebmiBcp9eXrH4iHkkrr42HLhGgXuQDDouhGWD",
  "key17": "5BWpebG4SChSAmZ9VypwGTS1LJn1Xh4cChnkYHbkYVxRnpJ4QHwJrYAqTbtDYQPfd1vrKkn8jh1Ws8ZWfKuQMeFy",
  "key18": "5hwEngfqs8jHjR2CCMMBsRPJxCXzioLUrTaFoKFj3sHi659wXTStiCEiNPJc22ktyvFXKjNLggfVGgosjaQn4Eek",
  "key19": "5pf3rtdDhQTWDnJLxZA9GKcEtVKFbY9HHbzeDWmfeBYfscMi3Tjiie8mGWut4t67PWgd1mTvAy31qc3Bng5m4Ehs",
  "key20": "3Nfo7XUJVRMV1WLtpz2X7TX9PYN5EfwtB7GbtPUo3UDUb6HvSQ7czvYmNGrDnrHqWNK9ztBGK1HyP3SwbUjoeHyA",
  "key21": "4gC5ncjkyEY4zWh7PeVkKk3r4a4vFK27VHkoKWgJkPpinsqK3776FSVvynFtEtfs8gqu14ren5YjJN7h5Ba7riC9",
  "key22": "3EUGSHaLns56cfZUHG9kkkSR3EGTKf5Z2DJSJ5ec5TB6u7tUUzWUmZGPxTWMMg34ZL1DR8vg7MVLkC47bVEATJgE",
  "key23": "64AAYkSzbbJfwbKm4P1L3mDBso3pwNbSwmVrRKTo86ybK74LGJcNtdC3bPd3UcVxBP5oEdRTqDvvdVvKvFZihqjC",
  "key24": "54HJqYtC1ktgG2zwwX9daspangE5CQndnzNCg4NxD11Z7cU29hjBnsNF5GMBzKxixeKoUECJRSfcx4wCL6TD47Jg",
  "key25": "43SgsRGrbcAnKjD7CRbUs912nH8ocx6xKZVVMUYScxginainaRJupVzVCch9QFNLBWcqQGU4Qv96MgFMyzqbsSKr",
  "key26": "4bo85DTpGqjeX1bTjDM6CqDSpGSkoQfqi3Bj7RwMPWK724cEmBJJRkDZKZjx1oE95iAUf6iAgmXVkfiMiKZAUvws",
  "key27": "5v1WdsqFN4Lsxo8Lhv98brSUpQ5d1RkeTFdoc4tTzYRhZTiCES6RF8JUN63ow5XwmWcaWPgQoNs4BGZs5jA43iVn",
  "key28": "3d8Q618zHoExJmSkXKuoHPsVBDq1cKgF88A36wiXhmR4i9DoBTRDt3pnyvuhUhwcqwgfpAyTzNbhR3Bxk3dphAUQ",
  "key29": "5wCCrRZK3Gywpjm7Nfy1rdiBhi56TiG7wQaSptCioAKR8MoKnBkETS8yZDGZvHTenRaGBvXnyX11J2kWMzMW5x1V",
  "key30": "5vLkQvWWZPyZcJmaHXJjoLnUHyJj5Jya1Sn6QE4kUrjihEvfN54cqoJJNML3veciKkVZG35Uc8pGSUeViWG4b9gt",
  "key31": "35JBSu2onnoxprWXzUHybuEsETFWjoUZuZPJ6HxHjKfBGeCphMSeVGJEArDoycx3yRMoWCCmBRqRhBriJXT8sokZ",
  "key32": "3qVZyGTzwmXFqhhbGH28SND8B5oTuhzL18fNxBoptgmqGKT5NgBwt8evtrBhgtPtgSgWRVkbQue9BRAzdP741hM2",
  "key33": "YnTgdaYCxJG1JJHK5h1c6ZjwwqLehc39DqSNX8H7FttRX1LxNELx9Pi45kD7Eb33rTCYsxr4a2AdtvVtvjovD2a",
  "key34": "45uzNmZ2GsFWfo5KbrXFjQfZEGEQyjhkRtAMuVB4dHCyQgdoitokPZVdv7npAqAMf7PHYvYyNqUViUMfZUjS1S1o",
  "key35": "pdgM16XRM3dT8B6RNF5jLUGSAxyYdxTyzPpomG6DoWveVNAnHRUpq2gJUyan5pWFRFLUeGYv9eXjWjf6GAn3fgd",
  "key36": "3G3Udgr4bd5nQYfMfRJLcpHUky4HUTRyKNQwiBDXAFJNQemLS3PL4sNs8SKJ5XA7caaeM8jtXhSo8TXVgHYeJk7s",
  "key37": "5WaNF9EWK4Ze1xzAjdJQ1Qpk8ZAj4GdvAxrnppFmeRmjgqg4qkqcnMQjrr4q1PD4u4krDpBGGzt7FbE7834dW5U7",
  "key38": "zdShXkXP1abgT5sMsrHqSQnrVtEqTvFQBuZ3QySc2pSf1A5cTrNX5RddS92XpJyVvdYUZ5MeTMymja9EDaZuh7d",
  "key39": "4NLz3xYaRW6XuKX8boU4sQnEFGFvntskiqwity54g2vxTCE7HSPESqWA52jm3RgS2vAzfnoRfQPEbmxPnwzvA6qN"
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
