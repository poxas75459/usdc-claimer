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
    "9LMpGBp1XRPKRxi8JnoNyU5GKMtgAAae6Wvm53fJAywJMeh5jULfFGyKqYwhAPSVhvECqowGhoiYRKsqPi2eeKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gkvchJPTc5SvgDjobJGU43ToxkShGxNmazHjcy4RkzDLQjanKtE5Ao3etzc3CAn7LXD7X9NrN95spvCicmUmiVq",
  "key1": "5bAe5kXS2kE88kH6RsVXqRwvRUiuvR3fudCACbWZ9avjsGbA1ujDTgxKqumxPSZ3w6LHWdbcP7yD6cr7KhPPBF1r",
  "key2": "5pESxZNejwa3f19r2riZYDSy4xvvr76tg4TS3k6kSSnA7PdhogJAcpEfRXpGcG7HJ6JiFkgwcjiuwfaNKmHcVC34",
  "key3": "Bgo6YVZYgxQNVxGy7iQ81PGjnBWHAT8LPL3nNTWdkPY37ggHwzUx7nhFmzmCBv5KkVeRfWNQqxjwYpG3qUSVTKY",
  "key4": "299kXmS96ZMtm1ZLffafN2vmWoSVT9V3YF8M8E3bKwQhYNY7Z2DmSVM7Gd7R1ehJYmqMAMUSm7xsf73tiJR8Fj1n",
  "key5": "2EohnRKuxJn1A76Ednh65wSfmtWWieSMsN2aLGGBac7x7xXpiHqevtXPmsfJ8HRhTwrmuM5D92VcRLq4pbi65eJ5",
  "key6": "5sYGtf4aFHR1XzWFi8fXBNybnga1kZwwmc7zS2jindoKpWoVaCRG7gesroKgPuhC8e6yBfRNV98eK5ouvCGVKKPZ",
  "key7": "4Qe4WpB8QyiG9boJrXNcv43wr3Vkhn9z2JdzhPyP3XxdNfZPDLMyCU7S9VGFW5e1uuvpq9G49X8RRiRdbcoeBU7m",
  "key8": "VdZHWgQq3Fa3fk6YfdPM8MbUWibeN2wvEodFAdkuopz722za8sx58rXiPoh8A79Xxo2rESQnuBMYCCo2AzhL2ER",
  "key9": "2YbJLCMC5KDukFGonJMpzVGHSJCPi12NXgn9Ao7Nvkesym3qRu5Vx4kgkScBSgHTnZSBitm8jVoUbvPHs3CTpzZQ",
  "key10": "5EkmRYhx7F8ytPDjU8kTTNsWbUYHJJ8HmbZt5WmwnUULmwnQvo2YhtMuoSyewpY6chXDvfan2wDMLqp34ARYqNYT",
  "key11": "bjSMfDtyBM6KcozA3AGDUTPgzSJgb6X1eGp9dexT4fUErqEqSU8RFYiZsGp7iS1M34mv8UR3EBYr9yBBZn9WCaN",
  "key12": "B5dka7Weud6qrtNFZ7PVwkDwiQKAdzTFPe51VqPekmdxoxPs3YvG3EjtyqMCoE3PvJ6VRZwkBTg3sKogBaWM8M1",
  "key13": "2hfrjQa73hViHnDBY1ez2xg8mwAxwgGQRgmZKpkiF3rmjcQCt2ERhYNwoJCn3U9Z5JPJvmNddFHkerJ7uAsQWgVT",
  "key14": "5BSXCeHXJe9cuyNVX4eYUjN1hbfKyNU1VDbaYHobLXtNaqWAji3yZAV1tS8CTpCcQ5A3g8GmXPkMSufSRYbVr49Y",
  "key15": "5m5CAhye5v8VrWh8S3vjh1vdEPTYTXRYRY9sS2dgAd4jkYr5zi6ECuQcPMcQgn8zczc6eH5GtCj17E442Hif5xAX",
  "key16": "3YmqETVV3Y5awp3K9B4pCeyKyqsNqFhbKXGrf7ct2MgVX3K9Rk3j2w3m3pyh5BKi4uE6UtY1oRg7tTczYXDVKabf",
  "key17": "2C6WQCQQeGnnCkvbW1qmXNfjz343yuA8M4uaBTNSYWZrQA7iAFTyd5FgZ6uiE1o7xPoLoQyP4sHDaDL9Wc1rdZig",
  "key18": "5tJVjM6TEs6Wg3BWbwUNL9iP7mVQpTikFYV89sD9KeHhtY2mySBHisfFJxUHUBp4o2WLy2DiRYDHmQDM7pFw35K7",
  "key19": "HxGb5bXLrq9gLiskwsrH7bG4UDwjGGp1QBaJ3TseGRSRHqVPxa57gPAD49KXQ9Yhy2fokQszfzygxnFKtEvhWr5",
  "key20": "3UqrwQjUHa9amaRhNe7t5qJouo5JCe9xmrfqELKYt8GY4YEbDLDt53q6U2Bycmp1BBASzGA7Jut8a551zTntr6W7",
  "key21": "21vzMNaHxP68JBzncrRSdSBZA9E9wJqT8X4vwVJd6wHfPVJHmPSFo9KzfUptFNqVC78FJzGT9Fm5njbTfbJaF3Aq",
  "key22": "5jtVpaeZACqHW5SdSUJucjEhSh4c3vuhQjA1V2w1SedjNGab1xYzfkXMgX2w5KTDwiydCY2Pu7FzHN6z4CpfdMgp",
  "key23": "28koW9f46dfeSuJRZmuzhWM2masNXJt5V1mxiyFnrB3APw22n8NvtLkBKJqwCako9iuJJfmdsxGBAiEuGiUZv1Mu",
  "key24": "2gzuHiHSYzuEHMtEExYHrfkNm2VSBqgfzxxeBxQrJ71oCPPepefABQT1ynzJ2Sg85UYEMWsYKbT59LJta4c3JVZE",
  "key25": "3sSKvFjPN2HYrShWYJQexUC9achi8o4DBpDjFwdS3Hu1m9aYaFrQy6GKCNknVask9cgLmEbtsW3HdcmE6gothdT1",
  "key26": "R8tvSmgJXK6k8UbtaY6LCKG4dBhgfZJKyEQE7A2AcGDM6Nuvtnit8d3obYbewDPXD1EPeBVbD8mtrbg6z2rqyuA",
  "key27": "3kBwXgTKy9vCgfDW3cpmcoRhJd9ANrNHni6zF99p65y7RzUm2HBvnr1JBqHR4JH4kxvVAGiz1XJdTUfojxd35isc",
  "key28": "5xnYdYp51JP4XQ8WHEE9id61cPw7h2xjRGThB65Qdhh76XXxswDgcsgXrErVxBgWxTK55YywtwCd97Rmf9jXwFRW",
  "key29": "64aHRvimLE9NyAmqmETCTyNiLdhja6EPxPin8PWx5Uq71cLRrF11pJp9bjWYVB2z4YrkHzrGuYejrYnR6WgyGFcP",
  "key30": "FNjqBUVKKqYkVvJYLEFJsfKsAiHaDRt9VERMVMYfBVFZgN2ceQyBZ1CUsQuu3KDZ2gJVXwFaAZ9vCBRMiihr6E1",
  "key31": "47nnLm1N4hSLV1jcaQ3cHPgjqvb2Eme9jHDCxc5Z3PFBrXTcNSeepnmxfbf9tZPUqibsKWEwEqmDFVBKyW3UQzZ3",
  "key32": "24yuWfvyRcaq1u7kDfa7386YMPQuWaKwa3LEKNEnoexw2fJuyoVsyAVWYDVG8YdDbDmzGDMiqd9ukhooTrQocF6H",
  "key33": "2zCPWQ2VW62YyK6QowpVJ4VmSZzNjwrcE28PneFMEJmeamziRpgWfvKAswVKHjKkET3aMjjjD1FBLbBKrzCxn8Mr",
  "key34": "5S456BG5X4ma3DxTYyTQqoXA8HT8eGpCn7XstRBxRYr3MZsPUgrSNYF922xD5qW1BySeSwhRkC7ss74fTdg8J2XL",
  "key35": "5uuDvdHJgYpzwhni4aNTjt2ic51ya7KiD856g8PwBjN9KBxmtTBwBGJ5NYYLd7q442NTuBe9JZzjLf83uMCxDVom"
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
