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
    "3H1pi2eQoty2x8Yh48ACvADbBuxmGeLPwaFkqge3CfshyAauihS1S6mSWFhpo3CoJw4akS6zq7cKdauZdAua7Vio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XGv1HDAGfadEFCpEE3EEbxBjqHb9Z17UeKUKhdU1x94tLq7PaPumwBHciUFnNzzqMF4YWJLZ4VR5asNAXZMEwqr",
  "key1": "2F1m3a7GUgMDUS4hjXH9XYvpuGJjjKCiS21zJ2Y9kWLWQ1yY5jxXEeMRUHQLrqzuSGSKCLRHE5kvBi8uF5goT1uK",
  "key2": "U9KtUgvZwfAnrdm3aEuwthDKfzBLGVDV9EQppKnTQPPda5rNfarqBYaToGtCNvcXvX2EqCJyFYmckgXRiP9RAcj",
  "key3": "4NhNJEAHuBV3hz39soWwvT1VtQEjaAFqbs5PbmUN3k3euezV7cSk7ATEhBWmzJin5AErL2sdyVnRyfeMEH1ajRjk",
  "key4": "2APA4DYKxyAmNsHGNCVfCWxBuyfgL2LUT8qbebXtBPaZ3N3K61ZGYuMXbQVuXBpsYMNkDLUKfCvrJnMENeGWEmRH",
  "key5": "2TXhKrKdvuAYjpEce6qdTwK56qJqhwAKiggNDHGVgN4NJHXLAisLJRd9JG8JZgXxjKVswrs43ME15EiMDLxGafuc",
  "key6": "2J5A2wpFQWFsNKrsSj1PG96A5so1Qg8PQnHrEt7aBpmk9FkxQyoU13jMSY7JGZ65JBQhNc4pMwH41xgMRwPQzp8d",
  "key7": "HwHyNT4pxA6GNhuufWKwpxuXw23RqJZRUgfssJ22bDxDtzrkVYatTqEKL6McoQLvTvC6xv22m4nPd3UgjKbHW6U",
  "key8": "RUogpvipjH6Tqg5xkks37KwUFRKuwzM7U7EUWrCNr7BHNJcuJXGcd3cvwVFG4NM4WdYHeaZz2vWEUrwdda2vMpZ",
  "key9": "2gfsKu6NToGFZgbFvZ9Nscz2GiXfmtfDe1ajJZGB6Na5xRJ8yaMFZDWdGEorN8EorUzdqg7MB7uwmGdj5wZNHmXb",
  "key10": "26abHKdHN1iEAWk9rNawgTs3ZvVXdYLJ6jS916WXCnuEXVAwD67cw2Q2YjdGTDGgAzbLYfsx2b923BTu9r52MaDz",
  "key11": "2H2obuK6waBqpdjTju8fonnLdXEdkbeNNpAJrgqG3na91idUE43RX3WJQPBPXrC6QKGBq4ab1c3EWLF53uvHA6LZ",
  "key12": "5qFeqMRymfSbr5nQkY26mPvxwjC7sGBdyHDjntkqZ6HJRT86Yk6jtQVZDuHRx8rEjuFYJiyRseNCR4JqKvFCqNyM",
  "key13": "5SFSpJpDbphcHSuBMbPKUMVgtEKDfqkYyRdSzkTc9fxuDR2zLj1TVp3TZ5Z7aiJ6oJ8AWxSRR8kTYxiQZwqhqfH6",
  "key14": "2TQ8Yzss2SUUdmT4XMX7DXiwg4MLehto2LBa72AYCQHJZ6qdMp4FaLwn2bDfJfef5wmjqF3E6S5AdLCdjUQr92Ge",
  "key15": "3RFYfprQQbVoB2ML6Yw5WKpgZHuhd62Umo8EEhxKvRp7K88Y7dGujVDmffKREztfduwCmGxua8naFLbAkbuft9Fr",
  "key16": "4XmxFbKp32odVraiKD85hfVEXcfQCyjoigiKS6ihnQgV2gE3Qu94xXhzGgJq8wrEJe2oeTeLsPi5smF271fvU7qe",
  "key17": "p6FDWHR9eRmj1Vz9vXQ22bPLkzRb3ceFfB44zUtCc4qvC92E61mmWBHqstadSzZ4jBa8H1dCnAUUcz7FvtR6a9s",
  "key18": "F9McYXDYR7pHMRiqoi9fboMm41jGWSySd22wTDq24Q5FVMFYY8WiRou1jcdUmYUk1F6p5wo8ivE3Pn6rCoDukbn",
  "key19": "4azobsRiDHjChyEHZTV9X7y4LFJkyuz3FhxNXic8ATHEJhnvqJ7vBBUdpGchXVyYMZcKKHAV2B7oCHZHbrXvdEju",
  "key20": "47kZyWkSnvJqJfwkb1PQPFoHJQAmxqiSGSNP3fwTSKVqRDffpXNMFmasRaKnhqwDB13JDACMhVVKEVFA6vEyJKau",
  "key21": "4xhTWUQZSrJ9st8gsRhJZZDTK6Yku3cLHrjhUe5hMu15BsvksixwoHreVcbbCCnoR2zeb2nMuEYuYZsaX2U8YWCt",
  "key22": "34HHL7LRdEBx14WYXzVdja7Xud5QZz2W9b2X2QojUFnX6fuQCZ28QhRwikeyPyz1Yv5pBmJPJW6U2FSccrYnUjFu",
  "key23": "3du6QD5AyocZEBQwMqs5RHGEGFDok7bGUGdZUyCmJr9LtrJdtFNQjWgVQfBHdaandR2KRrZW5UjRVW8PsReHx15c",
  "key24": "3TVDHUkTJvj3nbP1QgWyh9arkVQ7KSs3AZVhxKmJgERDDPfeMNrZhEW2QKAgBvJHw2UdAy3zyXL96Pyvmi3Bdj9Z"
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
