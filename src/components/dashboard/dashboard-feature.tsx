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
    "2fYNfWHHoZNBVai4VQLKoB1pR6yqYcLqKRNaEDhBnkYTpEPrg9CuGin68VbK65Y2B61ueeMBcVjkPdFoYf5He5yS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oPk4LyRdX2r4idkBjaDmForLjvyoPQydbTH8L9AGKTVh39qHMLpdaxytMxkaNj46H1MsHF5EBtF14uD9mow1v2E",
  "key1": "5Z5vWE7NJsTmN7VF8X9ZZvdrHRDxcCnDZKY92dcHQTgpVzrCdLrxxDNKUWkbnDNxb1R6s5hVjYkfiUvaq3ECTtu4",
  "key2": "5Jv2EwYCnHiWXcFu3nif736L6PJjdb7JYusrJQPRwcoVJSGcRoi9rhRBCAp5uUhWM2HX3NMuNxVWpuuscMZBnE5C",
  "key3": "5XCi1anYYofRqoui1gYkYmzhtciQGCVnvT8rZbtjedt955VuheZ2psdgNY6UHEpFYCj4CXLNUdoE7RYH8iYQrXrV",
  "key4": "4WKMH2ogvEdvCapwQsyfC81xVtzwLaYtTvxjvJaGHtFxAHdQqbnw46UTjnjWgoH8MWu9TwPm3t7x9ViqebRuXw9C",
  "key5": "4Wr4ySWw3KXFizChrZfLXqYEST4NnwaYhw9u8yj34HhXoNj6KJAsvNAuFWvgUCiR2SpqcEXhS5nqMTWdREJmekvm",
  "key6": "3bHZ4oobRam5iHGdwEi7eJ9A45DQGh9NtbTNdqvH8vL7KCyzkbJGaSidaCdyKScxUziKcSJ4J9B6JBZr1aiUQk2K",
  "key7": "48YfXzUkCBEHdsfXzSodc7SQTucxzb2GfijnX2X5Ee4VS3etNoBigq4cXiqRzKK7UsAGGXHhH6dHULByui7YABEC",
  "key8": "61nYf9A8BmqRZ94uttJXNzFDTv2AE8p1ZwsysCkoVJRnChJStkf4eRQMTnN4AfiYuu1eCPc4KFoxg7LeChToqw4M",
  "key9": "2WrXbZDu596qdVtjsrtmt7cutqGXfTajoZhY8RF8EBNZPjHxdDomD624z9TzM4n3taAwdjpLBSatATL4Zzw1f77e",
  "key10": "DfRyYiRYobFZ8c1gu6XocWPgJZgRB2Pi8UH24VQ1LBeTX3NBYiM9wfQEn4C9vnSKo7F4uned97fqw3KjPsfgfe2",
  "key11": "F55uaqXxinjGcERFKzanXESYV19784xGESJNwcXjx9r1wgmM2MzjxK98eJrARqDTWC88S7UrmguoBxCypHsudfn",
  "key12": "4dj1zTq9LoCrsqjRkyKTpeqoA8KmwCgD8LqjmraTgcJKCJaEyqAd9RJ5u51BXz9zDZeZaC16birkHhunKgPVZWZ5",
  "key13": "5ZHByjqRsT1qcBAzsvfG3qQDSa5Y3jTKhY5k7u4RC1htrsf7Y7tnwwrVK6XzWqXQwP3jFkm7iDcKSVGoU7fQqihJ",
  "key14": "mBWszJ6RfRjdc2soHbntorJC9WPenrGtWZ6qnoynUBD8HyaCd3wTiWydFfab3aKGoYjXrSA99LLXbubcAPd5trh",
  "key15": "4wVSutfqXBiG6WAh38zgeRW49BWf5VPMKuNtTnoF1rR3vY29Cv5qkrjwCgkJ9k2FoRa1GXTjww7wkRNMf8bPEzTu",
  "key16": "51bp8cP5tezFFxseqTumCLk1pnzPRh2xEfUGG5fijCGme6y4ddqkDJNzRZU6Hj534FDHUMqN5vt6ZASs6gLLEM6F",
  "key17": "5cktorSiUY8mNx4aFqvaLvQCL76LM3a9mdsC4aecVTTSiz8xdJzbv8KAyxUsbEVaMoX7C2SHuV5BqU2wEqESmMQr",
  "key18": "2EpGWN6otCAnQAfVUMdFL7MkHtmUxBfrLkrvmruVsTwUTFnbpyob4i2V37tNQ4ggAT8ruDYAFAc3me5gULfezv5v",
  "key19": "5ULHWGcQDxFDAP1uQUq9ZgaZnznZgbSb7ZtaGPtkn5J5DHDEUFDChGTnjrGuxxqR5M8BMpZbCvPaTAi24FmkoXUg",
  "key20": "3vcMfSBAdTw9xfn28DD1TCCZJLxJEeqFRzGzqEGP1EkJPts4cv8dN6jUShsPNjfHLRrZx9MWEms15X5hvAHQ5iJQ",
  "key21": "67Asi6wwFch7nP9oAfLed37KpEbmYcUV2FuS7rGFi9uTNJbnu7QoL5k1EuXnFUpTUAgjZgGnWgi5i2TQeStRFEPb",
  "key22": "2BhCp2oPVMgYwNQ5N3zBF8Kw3JqqNZVz5FBdAH6ysDzHP8dnMWGZo9JR2JjXtqditEiP9t5TLXmBGnwUTjZEshaR",
  "key23": "3me3H8sBUjWW6weYcgUfyWiiTabH1a3miUgtFtTQ33hdWynS9QxNwFYgG9GDDKiheaUj97rY9enZJcevvxtA6LSY",
  "key24": "2b2XAr1f81BpxzeJu4QknS85Uo7aESL7fS92mnUKFLA6zoWSXxheyWP5ntcQcNY9TcA6C3G6MSN4BZFRGs2zXYy3",
  "key25": "KCBL6WvaBDRGM2AV3iKA2kKjLDLAYEcEUYe1VXwCTfmvGzp4n5J4rqsEJhG5SzqwoPiTtxY2Q9J8t1CjNFSvvMm",
  "key26": "5Q94p9hiWNTp4do48xQfAH4n9RWd7krL4J5AGnNXW1N38ys1YH8Pv1fcmoiP9Wdb6hgWCfpvcV4aKrtfKvNXbt4R",
  "key27": "2knCQ1rQxPjHDfpXivuRp5FWYRZDqa9ARwsbU1CEH3SMYWuBMadCrsY4nW9PD1xA3RXKYtDEBNiUxnRY4XtidBwU",
  "key28": "3WJ8FFHjaaehEqswUJDuNTPNj6XKbM3dDFHoFrpSrm4hEqHrM7eDwnygYFzfyDd4X3xwgtydgnBTPjhqjshzX6wR",
  "key29": "4qPBnvLqrCAip23NrWXg8wpfsbQQpmcujQT4GupLd1dfxzzD5ouukZG92oTEWCgnXBHto4dF6mZi63MtUruoZwU3"
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
