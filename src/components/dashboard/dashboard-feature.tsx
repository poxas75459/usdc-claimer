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
    "4owj7TuTjeEYXyWXHRxeDVyHgCzfeLoapxqsR3NxApMwbVZJe9SNtnzgR4BsoZ9iZEutxZHA43RYHTj8878gV4NP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rhrxpZerLBYDr9gax8gWsosMtXGJvjGDhVQfQ1YyYCKanz16n9C4nqz2Q2h62rQjE3qAsqRmywnV1Trf5HYLjZz",
  "key1": "3HEhc5ZSDkYCxCszq2FMEXCpX4PNjvGzc8BB2XSatFPRd15DgnKZxbVwsGafr9LvwFbwTQ6XmYBc5vcon1sM55Sq",
  "key2": "4Zr9duX55vMwvX17uZ4vhNGoBimNGsAX7eSUA2LGxrRNAVnThZUkFbUxWFLLsAdjJsYJi94m5uGWMvinQXP7iWC9",
  "key3": "2s15BxWMY9yZpVXQDgwuuHmP2KXwpZ1WLGAjjoDS4KV1b7VbCJcTeY3KDT8KzydvbipXtVehe47YJ6SB3s8JCTAK",
  "key4": "57vbK9S5zwWh9kGNywB1N8ke1Jf65r8UiJXyBME2KuVs9aosgQothbbMkk4PpHXwxKzcpjXQtBEsaW9yLBrvV1tc",
  "key5": "2CDNBjkkqPYmveLdCLoTwLfaEcSMUpdXfsiycX4QqnooGbE2L5azNhA6bXPSPEExFLzyASmS9cmgiruCu5Gkbh5t",
  "key6": "5fpJDzBKvkFggEt1e9DbSib195n68eD4Kxsi5Nx6x5hpHpaz1Y4toT5DScw2AuJShouRfYGzGEVx1Gq5XeN7baat",
  "key7": "34toEsEivMNVn6AtDE441qnB5YKX1kZS6bZoHUX7wA5xHkdPAWF6HPHTbHMnbAxGqvVejNpQD8mzwtbnRWc3vw8C",
  "key8": "4YoWTiiYJnXcuhDYseowoSL9sBWDKKJaj8F5PQm1FNDnJs8KBWSknuEp7NXgMgaKQk27LRGrZbPzWUm1b5PeGjTV",
  "key9": "4kkntSe4k7YP2LbuuR9wNjAjijx4MWPZCPiRSXXfqnk9UTUv8YK2ZimBVGwVT4QumyWUkbPx5bZ8ChckVrdjAwEH",
  "key10": "4y2MFgCiCLKNLJz9mGaR2rNWXECmDjQcsW5NXfUyKTWC4oUY3meeHiKxoV1QuEwLxdWUgJNQNaU8aeDJCKWXADNk",
  "key11": "TAxkgVh7sQ6RTJBYsWdXgbMHA5M1uPUJgnHRdfsRJVHFqNRDNGpKfyWWm9ctJUULezFzo99F4EdGKddbJnMx6Sd",
  "key12": "4qYdSc9rwUFKL87WgcEabNPfdAKPDMTLzgvhnqE3eWNxUXqitTU7SyGmPf7zEPjFRmV573ia1DxTot3x76ycMiip",
  "key13": "55E8eFzUTxzWqr5rxT83SzQ6WwnuNp8w2aXJmECzn3dPvrS2nWyfo5p6KJQwGdW4QLdD7CnLJRsAoV9T6J9oRnXw",
  "key14": "28FwCs188ogtZP7nphtcSuFxFfHKSntNRGGpw95k5AJvhoKNJQLrA5fjqRoGpw1FhF5HbS152SmAtmXaygaLmZYd",
  "key15": "2CzDMBXmcbDNfZEmCwWxaf323fKuEyvubDGyMDJi7Gs5VuBuKFBN7Y2ZgeWV2TvQY8gJJuXYwUq8N9BFLWVPzQS5",
  "key16": "36E6xbwCB5B2UdvMU69744i1D6SiS3YZpr7fVh3bDy6RJiyZAPzEDu3ZkcdtYv4t2FmHhYkLHdKnZz7Xmj6sf2TL",
  "key17": "3GsXJ28uLoF47WoMouUASPXswjBCsoVgVxVUNrFyvLpoXVBKJknh3YxqJWiJx8BfLidguzysSGf1xdEdm1fkkrte",
  "key18": "2WwDxGn6dAxNrGsneQhMNYykq8EJe9dkk8CGCubWqEMMLv9nBHdmDp87b9rjohgZriEfUsQDTu1Exq76CyvdNoCM",
  "key19": "3EaYAsV2wYaCN9SbZBpgXpCMhtDTPc4WzLXBcRpCFHiMLd1UTSyLybFto7cxLe5jKPbkviveiG5BwE5Wy1XnVQqz",
  "key20": "52KuzDx1QFhPoSZcCSMZxZyTdLPR74YZd1LCHipWGdXa3vfB37Y2mH7g9pM8RiTAETgEntXEWMJv1iefUgkoDRNh",
  "key21": "4cPyTrRziUcomrUPhrMYp6XiSP8ALFVuHD9egwsYA3eiKam3nEQ8TU8ScheHcoFYcqm3V7vspzrRQr7LnAMZzWtR",
  "key22": "3jsKXAhPeyfc9DsPkodhaLaLoEZbRJjVaiwJHu1BU4uT9ppbsQYhSrNr15SbVe9DVfsKth5ymhePJTp44CQi78S2",
  "key23": "fYPUtcm2VUkwyEtuUQoTJ3FEKdTitcaYehkfQqvRYMzsJaDkCNTbEitwuUHwngaDxKtHq7ninyTiabhzAxQ2G55",
  "key24": "5BUWgSvn9SyuW55Bv9UHwgmYMp7oCoS5YzUMgUgBunugJCnAF5fMCVe7hciRbBcFAqcGHCGqvE7gyXjFCBGhpbis",
  "key25": "4sr5ou8KbjqPDeMmYFCmPyCLn6Vxp9SPkyJqhpuRnxHpsdF6zEKtqq5NPgNpZj2NQei4wmXaAmy7CWsw82ah6ck7",
  "key26": "3HkjRseLxMNojxfFr4h6RRMMV8fteGpc3NTJoR3HtJFGwD4PA2hj9egMkUxAtsiYDAHL1RWwRVWvX875Tg33A6kT",
  "key27": "3Nc9saqN7zJcweoQ9xbbLCGJn5S3S3MATgjbMQfTGoTuUAAkQUhR2D7akaWu4vt6CcKLqApyCwb7d97gPvv8MxkD",
  "key28": "MT426gbw5M5SUa3D5yrk3gCuXrzeB9Nfkq84TfL8kGcRAG4UCSgZ8m2QxmQwLU47gimcszVTswpRHY9GqVpmTrz"
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
