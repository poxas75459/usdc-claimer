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
    "29QWMdB1UkPDzQU2yJKqjdNP2J8kMGWdwetXrbKSBZpsUuEet4Z5YQEua4EuYWyYHEbQF2udtDaz8BbZgCPMS4x3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UXtz3DXFp2QtQiKeFfhMULdGMVXPfcPbWrMaAeGvz3pXpJyLs4v2MSUTxVL8EqsrtCAi4jzWP7QCverX5qucwCY",
  "key1": "51D83WipnpqeNkYaV6brWAt3EwBYPHfM6wf4tsJ517A78u92XX2v7EVhaZ83aBBg8k9D4Y5h7TRSCNRG3sUe3cF8",
  "key2": "5UcMdJJuRBCWrKnPX2eifvUhCThwTk9qnZYbTtpLQKSpoFfXc2mMWqoRWUiDn5QAt9x6a83oUSHoaELEdbqavLaw",
  "key3": "4fHd9GCHsAU2jkNTf6YagmxbfBfmde4smVaCTjuss4Rjzzk5nH1wCwu6PwUK7M1YgXydTkW432La6tAArDeTnTdE",
  "key4": "5kropoPggatcebFTu1FRF1wwwvqLtfNdpKusEqsLrCvTiVeJP9za2mEVcGadvFg1YgP1YCPpV3BZTvXjtSznbQ38",
  "key5": "5SQzGmg345pKdP6JWXgFfdFNGMWxofgXg83VZtbYrgLsR6YYaGswDJAU2w2aZ7Q8so44TCYzk6TS9EbVMT9ZmTbi",
  "key6": "4yNbrJ5VpR59cfgtsXWdDik4tMsvRVQXsSmHGjSwREVsmf7dYD93GgpiKwbBsxcXuxeyjYHaZPfgmrbj38AnPpt6",
  "key7": "499n3WphYhPEimSRKVMd9wGvPHCsS5dKsazZ6SeFYEV9R6ed9Xz7kfyChVTeiC5Ay1GnkQyzUbXhugyb3oWvsGvv",
  "key8": "2CpmcTjLakSrmpqYWcWgbDfpKXbZTZFsBjDZfqBhWr4nfBxRjXJEJmxYyjGGJYdoAVZW3S1ZxzhtW5hDtPv2jrHE",
  "key9": "grBx5Q9kdKEfUP2zyAs2YeaPeuJy86bdGJnFgQEy7iZK6FgNviNTiVjL5ywyZRGDCQyBkzkNTPxXZYCxMZEQBGE",
  "key10": "35y9NanJaDprtbv4Xfcz1MHTFPBoYRqAEV4nm11zEsiqxzYRuDhcqFJz5KjgkXTtk5W9LnnMXhoGWVCTJGVeQhM3",
  "key11": "4yfmxCiJqiKVqPFzzZk2Xqd6FK63nwP8SAHstNZaRddsMETnV9b4yAZBNXbgppVCzaTse1UxQ7evajPE7F6rPpeV",
  "key12": "4z7k6cE2DPeBuavMe3FB3ffGkrjbnMpryNa5CKouLWR7CMMHjvXg6ftgKCX3JyTLLqMq2oDXDubcoMsGDQmFQghZ",
  "key13": "5zSR1VAAcAWjtYCtfTExW1RZAz1SDDghVf35ie3bAM1WykL4XbDGCy3mSbvifmCo3MxpBAwiSwNZ2Rxx8PBik78a",
  "key14": "2B48GZHax7yisbK72biYXMGhxndM46cMDjKzJ8eaXNPbfRbTrE7FyLGH5gzXMwqMezxH7uH8PuEa9iEDfE9RMzWC",
  "key15": "3ZvqWiJyuUvHanMSq6b5u1RhKdryPQ4nXG4SpDeKymmR1veiEkCmoKFWU4diT8c7EKd658JC5suDKZhg5xB2N2mu",
  "key16": "3ohaQ7WLqusSA6i6dSCQr9Ye3De3eyrhX85R1NpC5yZm6LZ8rEZSaanMCt3JAjC3dxdvopdNZ7pnbuxyMsoes2KG",
  "key17": "5cxsw3w8fk8wXZezRs9iCoyP6FHpT4TXyndQJvHPsSq4vFh4TfdUw3rbbUMkrq7Bo3qyoXFGCsCVmUrjt8e7LAeg",
  "key18": "3gZ1DiJRntxYedDYqmuAG3aRQwRrzJvQQUhXS9531weA8ayntyJckgeitWhWkpz279LZLaZFbCgz8Gh537gALUN6",
  "key19": "25fGhsstNo4RZFgPRKFk8sbCgUg2rvHQmy63qz2PCYoLTND4JSjGxWn8aeAxptrEwgaGXEaswwsfE9zFwQY1yXPr",
  "key20": "3U9NMsohHTWVsxXafryaEx6u85yk9nBrUFnRjLLPfezXstexMN2cDjCLJwBJmtBWeoHMqoKqCqRufCSPv6yFAEJY",
  "key21": "gdnyfVVozLQR7dHgaoGziAGiQSNCT8C96JQ8abUpfSgtvkpUHw7J5G9aGL76NL3t3hvfs8srzmtHAgmJpuhwduG",
  "key22": "CBwueYVAb9Pcgq2ZpxxjGyw42TvrJrLtmwKkPcvZVannsxDeaXk84o7iqmRFKgNkww6YVusj2EawCSvvkKAywg7",
  "key23": "4BXk9ZgoMPAgPAUG9Wv8eqSMwS7JTAvp6Y3cumJ8KrLV1c8fDnYSyRsSXLP3EYnrb28FtVUdzhxgJj7kh336ydYE",
  "key24": "2pZrDoFBaSFbYpPmYkSz9y5METyaZJmfErXVq1xpagcXsKsEC9DHx4oVSfwSAdRD6eeD4YZumwqv5FbjuR1pJB79",
  "key25": "2HuaeZ3B49RqBSXhfgq6AAnVfjHS8D6cdoQ4TY2ScVgMSnyHYA2orjCMzdJEWzPSWr88yWBXTZUFSHzGSSkE2njh",
  "key26": "27KAS7SqM31nERoLqeJJ6aQLS7bg5Y5oAPy7gSM2oEnUQYhuWywEjPEjKPjXxQX59uRHyFd9nMWFK7TAEbQVYv3i",
  "key27": "uTj5RKFQMPVjN81vayene9WcN6qvNv6Bukbcb49r4Qf8St21btT4xckQeKUmVQGdxGW4bSkunqAWugqhQgqUGNv",
  "key28": "66BPN3QQWToX41B3hCGzbx7o4A5PEFNSJZTD5MfsTwzERnFi72hYvFftRjsjrsgpToHXemK6AQQE9VffstoXhpbH",
  "key29": "5PcvpvrzE6mH2cbSGcb1YXfAYTkSZR728TbrpcWhwD9TXF218nW8yiw4A5qddqZfaiv11ECSXH6DdJ6aez4cUxCy",
  "key30": "8kdvWnTfRsKp3Kp7qzsw7C21ses2e4Bjw74GKonqviUYT5whvU9sTMjqf81reQX9o25YJnFAkNLFq6ko45x5DSV",
  "key31": "2pGX5C8g5mS3z6thbBm8xAUoL6V7y5vsTtH7F1SBf5Ac8d9kbLmAWv3kTaYwWzHhfATSLLtCNizsaUTZjBrb7xZz",
  "key32": "3CKPBqVrEiZjkR2pZxDCjtQKm7HCenHtLgK4SYYtUuYhq8qJDYtGGEtmTxBNCYTRAUhqyQ5BFauFnYkDMPpMaMgS"
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
