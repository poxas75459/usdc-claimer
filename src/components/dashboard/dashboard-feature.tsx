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
    "SMi6c4KH217zAFLta77ajn1chnckfkbeZA2da6Lua3x7ihHH2Tb8Um6kfBADwbBekbvKoyQNhWmGf4sbtX7RKbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wQzJjKid37Fj6Yhd56qgX88JRbZZoJkHTKiYRTgcEBH34kLgTTxPtx7ioWJi5Lt3K3ximju6f6nzUQwpFT3W6DT",
  "key1": "4znLj8SMhYpXUax9x1q5LeYxViBNSbaLENGnDRQyW7EQ8kKFcJcaK1MvAzaWnPoUCn2GJTXtA8m1N6THgqfrZwN7",
  "key2": "3nTJpeivTsCYJcqv7nLqQkYQqTvSLdvs71SVm3a2WwKaYdyRVyzf252bQ55pugsjTd7nRG6A2M76wzPx4vrkoiR7",
  "key3": "4QzeDWsHakS7X1wBaNWA914E6MnQ6apUCKG4gdeD5gZttBx35Tb9naszNkmLyJqZJPijVWEHWmY1sM8EQ7gWGyvN",
  "key4": "3rB7mFhmYHnbGDVDqbc1YfvGKbv74FUsv8CmeMu6ZHrJgj2xdUsvNTFnS2hmJUtVWKPYMv6SvQr1UYGis2vD6po2",
  "key5": "Sh7jCsjGziDoTJRxLoHeYUoJwFuJHB66NPhRVqoaYcPQmzq47Y1j6PPkPVjGXjuckydQpNw3T7LsR8K6whrF5ib",
  "key6": "2jkuDBVSDrpEAtDTiq27D4xCAddB1SFVAGYvcS8yJziP98sxm34M2BpcFhBBsjP4a8LfvmKKpjmmoPv4nVqqt7Sq",
  "key7": "5hnYe5KopQxvu11sB5qSCHpQwFkRSFPdPHeasdYzvh5zkpQeUFKkdLzsR31oAoYkN9fL811EYYFurPzSf1JaCed",
  "key8": "4S1XGphepz5fwYm9FKy5ALK9rokqnaSdMiG1zH5phz1LchBVymhoxjGSnL6ZqdXQbjXHcCp7wuLwoRvYphCWRu9K",
  "key9": "35So2WvypF2rVpSAJevoK7CndgpMCcBkGAmCymRPazQsrGNCmvwt9mdPB7PEJRathiarwATPdJNQvCSgNxLVqzfr",
  "key10": "hHcA9kb9CEGtJpRA9BBQmALibjPrjw7DgWG3gq5c6Q4QDLgiG3HdmviZ6yDQ1uBCCvQPrsPkrToxk9HLAkbabfX",
  "key11": "RGQTGFQD45uhGYmaVHExFttf4iBzxXJko7giJiBBfGWqa4KBBQJS5eYKF8oFmKPeeyDr8vDbAzcL1nJPXwX7hmK",
  "key12": "SUSypfTtLD2SXi8AfBNC4t6PmkJFy6tkVEmjEzxFNj4pu2DSgz41pGqXk4rxSfBajV1xJAAZE4LLGDnuhUgCdnm",
  "key13": "5H6sb8dTfccqPfUiiXiNJ6eabgboL1fcZ8D8BQY18adsd8v7MiNC7R3ebN4M89RyGNzV6bw4RLrJsa93W9w8QeXj",
  "key14": "5em62scqHQFgZCSu5VAb67D2ihbPACiy8DUx3StPDPhgBsJY99Q3cK4wVj2sEXATupGv6eqqECeGU7xRonYH21R1",
  "key15": "YWwydvT8i6kz5CKj7osZtp99o3rSF9M3d6BdzX98H8ybooMoU64kdKmrpqkiTEuFF5JVHzE817jE835GTYZ1FwQ",
  "key16": "3TVTCcH2sGGHArLjcCHacmEMs8Jq7r7bGKUTksoTL1UYwzkxxqmUxH4BJKnwCu22NmMtFiXtQmpv8UPw67Pypeq8",
  "key17": "33Q986fUgYKfTLUT6mGvBtif6RXPY6NJtqyavQSNqWX3i34geaQr41AecHxTXA3TWLgoE1tuQVVqB8u1TSniSPfS",
  "key18": "4LWvYevNuEX5fFNPHPXKppMvBxDyVvm3DeubaFkT2FhtK1mW5XkDPRN2SVAUN8gpqT5JtpM7ExVJLC4ZwP777uzd",
  "key19": "5F7TJQoWZawUKzkiCq5yDmLEpWd33r4oxN8Qdmczy6m34AesnToNp7PYk83yfj3G4VqZ3PjnUSEcBAuEQdfMAeJT",
  "key20": "56iV74JU6A7G66BLpGg3iYTKY2mUEiGQNXnmqfVGJsGB1JCrCkNFKfgVrAhdD6FkUasoyGHtJXaGXoPjYd9Mi6iq",
  "key21": "5Z4VJ2eZ8WNTuyUpiNoMdqTivm8jazp3U1jM5UYNANGapiNZkZeq3SNgoUjTdWiaThCr7n4MFWsGeJaWeiFMgnwE",
  "key22": "3HgN3cJkokwsr1B2zK8q1zR2SDGnfYwJugvPAy11myXd23BtCH1WreY6461hnx4sL5XQqPTSLrwjiKayYoCSxUum",
  "key23": "3wGJDZwG4jafqeAhYgK33eKUGQqD4DXH2bkFumoa45skeBcf5Ks6cavGkXnPaTPNsF58HFMhpr5Ye2XhzYNCtYoC",
  "key24": "44CWPH3Z2CTzvt9ThpEVFnKdJbTnQoEDwK5egC2rnpvt86KX78eNMXo4wBfeSkqQmrfs9rPdzLGu9WBWnfG18Pr3",
  "key25": "5Krx4CC6cGRJmfAL47JQLtRiHbtW72557UNWLrCsc3erx4tdXGJhNeH3MPUeGtrkqTxULbpjQtyQgUyxbaGWSBX3",
  "key26": "4MhrCYdbFsLmigd6SsaQhzKqLZKGc4HXaBswtuPGau5kLSAzbZJJ8vKghgT9EbmeFiz6wW5cDhPqY1qVhys1AwHp",
  "key27": "3p4xQrFNtv1RyKaXcGoZwA8abhZSno2WHgRWVxohB1Ar6fDNdXppThGDcXLAWyPffKabGgtmgYyqGXzCi5UoMQAb",
  "key28": "55TWdGZqWcw4inwCCHN8uNrmjotuneNqhq6tRw7k5EFoM7rQNU4Zy6FTrMtjHy5F7y8AmBYSQWje3gUwymRDQDSE",
  "key29": "t8zKJm8sXi7hPGeSAHZQ5NMVdSwnbHNbCAQCAV5LmLqB4SGZZSigMt9cFdsKkPypf5msQ579eokjxejAn2Z7xMi",
  "key30": "4nPt8q3HSid4TYod1RhYZoiQae3nNPc4VuWYX6oWpXSN9XCmd3nUBCV41HM92shuHsfyKk2dqprPgoEmWv4f7z4",
  "key31": "ySPxiKJHrByPyyokPquptTry5zMSLHUHBWbRTLXG1Upa44AcfhaQUnVBX8V41vQJABbqj4XQ5DjJ6xMQYCvuWxp",
  "key32": "46FRcZjeLrkzaJquXEfLF9oKNgSLBVXp58J4ZNM1umhCapvz7P1pdBve91GveBCA3HoXCRkrMFsaookzRMt7EpdH",
  "key33": "5ptTEzdY9gXPuy7sUKMhuxr83LcL12DrMNibQLLJfmrviGMMnpyCYzUU5PCpgPoaPRwwmSZF3NP7R35ZytoGAwK5",
  "key34": "4y8bnvfYwrHAe6f2MqrowN6PCgrL43bxnmXNAEUYbVUJa4vxaV1f5ZZAYBpdsy9RSiL5pu64eor8NmonZRpKmFdi",
  "key35": "5JX9ivfQTkqfHmNAgbgFormQbp27LSAJfywAPT1if34h1AfXmf2gkTjYgCXgv3q2sxxWDtVgEZoPLdPEaFPFPb9n",
  "key36": "4jk6BtU5Uq9P1Lwr4FzTkUTjEpoTxSnZbSGsncwbBKZyzjPhgHzCuscpmjUAE9CWLB858hnoQs8RK6YkK429q4sH"
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
