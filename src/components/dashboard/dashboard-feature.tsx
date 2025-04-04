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
    "3uAi7tr25cJFCBfWRY3nTuLnVeH7kccX7T69bogZhc8JH4pfTdSw1NiUz3fvicEDnEY5PE6rDcGEPHaUsS84yKu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HcYzVtMY5q8yMfsqDRsFskDattoJXzWaSrnCzUSbzfRR4y1mUJmhzD6q22Ymxegbf2wQhtDo2H1hCpnDwcZfUgu",
  "key1": "2wnA2EX2F58jJnykmvFziAsrZeGA1ABCxSmMd22Bxr9ziFUnTwZymHd9obD9h9VoA2B9KCR3dTshNTVf5iHGfhCt",
  "key2": "3FmfdUERnfm6Kye7wuqQMqL3n98f7XaQtNaYfgHC159eFNvcG2qb3iyqeFkZ6c4EDi7Sb5TQfEBq9HFdqYdZsJi9",
  "key3": "57f4AP944AkGaJhYrHaHigEnjzokhdtKfPMWqRBUfzgKXbWrGYtP65zdSqHDUt8min7HR1yLisaRD3VhyRMTWwZS",
  "key4": "2Ed45dmg52A9Yo1bVKzCDSsxPqw2p6RYrqFxWAxsvkekBPRwexo4jo2oztQYPRKWACWcE8Dfcvfxkw5sAKM2TwEX",
  "key5": "3jZHtninB6s9dcLniMUnHkDVDvNU1iv74BPLFq7FNYfcJbU9tssjiTU4jSVAg7mKSFwBxDQC4HiJVa6dKhpci7vf",
  "key6": "4oRQzBKzaLRfoHJn5ZocT5Lj6C9LRQ3jpNT8oJZWsV8CcuyTDZ6DAUPoPndapajWVggzMajLJ8Xh8CQfLYu7u1Yq",
  "key7": "YFyVsiZHeNgVRLnCfFRSuaHJjD7gjSB6QKvoxzKUnpuLiMUSYXN7E6t5mC6qc7FADH9rbBz17jrRyucH29Aibwj",
  "key8": "4s6NAi5edc58rg4u5MBzf9HWgATRJgQskWuwzY6McSZu33uynSf3Zb34fq1hV6eYsy6p51CK7eP6HTZg11cv88Cz",
  "key9": "2yy3mJL4PPBKmtkVUHvjTDyNE7CGvMFKk7dMH2qzEZhjSGTseJeavqivQovrFKtUtVGRJTqwsQut2UfMcMMZXsaS",
  "key10": "5tAC6a1jWdDEPFyivUmarkjQMDuhbo8xzRX8qgUJC5Eskxqxf7GhTtY2BrjLLR9RpMBDXZEfuVasrUAjHMqZXWNe",
  "key11": "3oPuHm4MerBaLohLHjSfM4ESJrHSyXhvGXMnsnVma67eyUX8sy4p5gt2zd3ChPASG6kiWNBZ5Cx1n5Kqj1U8vRqE",
  "key12": "2G2XmNsZwWNinuP7NPrRP7NmPiiMpbbLNTTjpn1RaWbomd8SK5DimrbUxDCg66KU4uCdKbKKcuBtcWjuYXdweVDP",
  "key13": "4drYwd8K665w29zqssNumsaJrwH66W2FmPH4qU6LFkwTc8VX3sVpsmpn1Ms4n345bqpqxnhSR3fPQfcG3yeqNsda",
  "key14": "3ekG82XkoAdWr4EL4HtezjuhWjmqEmuGoFNXxdi7YfJ7tBzRzLWQg3nyBgxTX9jVQ4VYkEp71RvxbvVvAxXd5c9H",
  "key15": "2Gu2N1ZpWhPMmsK3w3roUwZV9xxeAQSRgiZayUHUn6r83Kxuph8b3RrcofaKiMTZ67xdupAXV8DLAg9Y2EWquWzY",
  "key16": "4eGAq5qbANyAvsEp7urJDiRHbt3JkvtrQ66dj8WUwQfwGdiomEhcpR5rc1349DAXbJ89FYSwFJ9bM51P3uEi3qPV",
  "key17": "3QqkeRnrw7BiakUX2d1XuYt47e5WeaRVszCUvDruL18kSS6XWgupkmb7g18YvQrZkA6G11bYFyDCdy5tkfv2jgpB",
  "key18": "8M2wrj3AQNvpCB7rQdkDwznJSraG4rJ1aGcJ3X1KE5tYY4ACa88FpE8N3M2wqjDFfq4GR3fK7mfUUeDz2FjFTaT",
  "key19": "5HJVJJiHmFK7v4FugcjMjuPwU2DSKSjxpLyqPPe8gNRR6pihhCqv1t6ncfA1SWWZXmWZDTerAugmUyizeWpZSRm9",
  "key20": "3xLa6RDoUuG4rVAtEX8Aoe3Yc5ysdqr5Udje2WEJ7AeVjXJsAMq23xo1fYMWFZ9RJtXpWKC2s3Xd9DUTMLuexKt7",
  "key21": "3byp7MdE2o9JDrhVtVX95jQ9QzegJkz5LNh5MziKPd9d8Vi9hbTH9YGP6FxEfNiuWPamSuP7rY34WzTZfswipDHE",
  "key22": "UkRsKWV2SVMRPRejJrsekRi9pYB2SQYcJtBnZwHyii9fUJwCP6hJ5eK7vyM7X7sKWaBhKq4ufw4bLWcfp5e1jU8",
  "key23": "2sNpYR1ouKcGM3qeJffutixgbX1iR9uBdxaS6GoXaANXVbQqGoZ49EMLDEPiC6d1Paf8UBy3d1F611suiYdeSTy5",
  "key24": "5toLKDXzANnfVP3NfUo3rzq1hMiHtfy32nEN7tZ2JRjAFSXJdua5SJonxjL2AkSNbpSNeGayRErf5bFZ5Dixnz3e",
  "key25": "4xeFPBmGgaqWPE2yP8aB4PRWczo85fJxukJ6FhtGsXoagKjDQxh4vPfg5LS7aNFMwXL7RSvwihHzrkSfpTK44gR7",
  "key26": "3DV2Z9JbgmaaDXimEarvfJd4WkBGUtG8dcoKR5TiPUhTuZE9wuZAC5d1AYp1NYLTZYpffY9qnGa8qKs5fAu1KPct",
  "key27": "4CWCcushnNevNe76rmMgJVbV7zEM4Hx2rdMegB8Q7hJDixwjtZumScT83tYXTiNnoHVxmnXtLxS8fUbiYk37XB1s",
  "key28": "4zvsiKZ978tLvPbdg2ndm5B6kH1ffHg5ASbyD3tfuewcX2JTCUL1GhqRJgyjTBy69cdmhNCo368yEWsgxFHEWknp",
  "key29": "5QKbH8TZBZVMUPr5boMGbvHAGsPscpLkVXWy2ZSGS5dkpYuM1W4TCN1Smz4sUdmUgRtvzR91LnA6aQEVQCqjxgD8",
  "key30": "AGsX2MCxYvaiVXYpso7uMSuDS1x2jwftQjgeGGQkWwvVAfGqeKSyQ9dJ1BHC49k1v8TizqJafNnuzpjRmNCx9iF",
  "key31": "3S4sWeQyqMZsNqmvyfhBAXKRk2nPrfYGPMSHvUdw5X81xMdCkH4p1AssEhPe1JQRjmdHHRVpDa3EfYhiVQkTsDCr",
  "key32": "5EKjEK7p4TKWLCuETGdH28a5x4ytqMS1gHTeK43c9zm2JZ9Ya37Q3YFguZofGDQGqF7PG9d3Mcnkf5uRd7C2qGDd",
  "key33": "34joh5gaCpxXf6MkY8pPAM8jaCdQ28gaFH28hfTsS4kEPPU6VrhiC1ob1ETLoZu8dxQ25hgJfP2nVeKhsLDG3DrU",
  "key34": "5W9x42N8M1GUFWHgRT4xkzpGwYg5EQQYEUK6b99KcfD7xQnKEAkHEn67wLUqvK1zPm2vxd7mNssimLw7EqyUt6ps",
  "key35": "4nVy3a6mnrTEdV7u7ZeTTkreHe7fpkjhrfeJNpFzRrNPdMZV4XVZKcseNZHdX5M5pPD1mzZN5W2r3VMHuKbnNjy4",
  "key36": "pXSi7xhuZrt8STBngJ1pEyLmF6VRBDPJkBTeJ7MF3dCY53YcBLRMdNxjXvLNHYeUusDj36wZGTiaP7SqzrHwHx9",
  "key37": "2ntXHxrdUFhYvrSWFE2sSC4qrq8W3moksJjyw8zMgbtd1Gvz9SM1cEE769ZZzvdZuiNFGFNK71xzWDKqQmx8wiuB",
  "key38": "291UEYLyTUnSV5xUhBZivCRsi1pnUBibnC3YspDYd9sFXjiZQ6LeXj2tHniRJGkozQQLvUAhyPnZfGQTF1RDbLRy",
  "key39": "9aMvP2XMZyXiLyrmZKnjtcThZrL2hwcZtMBVLPGDEGoPEsyMUUUqYvoZodvHGK6hB5kN3WdgeFebkJHa3KiybDF",
  "key40": "37sPYpJowAPZEYwppvsTcCmmTjhbrfNf1wJBLkNavTqJZHy4TRy8RPAUZFLkBaTXEXEHfqKCzVdy5BYn7YA8i5x4",
  "key41": "KbM73KLVPo6AdiqiVHWwnwjPe2BgPKCWyoMT4sQEw1PjNrdYUaxKG1cfHFBvwTC7dF7LRz4sQc1F6gTZsgRDioh",
  "key42": "5uCUbQG1CxkvxEDUBZfW5pqHPQTbHNih8HkbdhX4HBjGMf4oiABMjFxNw6QqTtMV2Y2uq3mD1TkXZgns6BbrvhB9",
  "key43": "46otr66hkzG8fb1bo5syt2gDAfMG4yWQbcyqfbCs1WPbuWg6anCKB7CSE5M9Rup9nz1zSP29PfUKBEdBagero1fe",
  "key44": "4dJE84cBZQwFkgBaj5XVQgFmNugrK9PnZW6hXf3dx1TU6tSfxi77yy14Dwgxa1GgN8dQs3HxKZxchjXWhFZddP3y"
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
