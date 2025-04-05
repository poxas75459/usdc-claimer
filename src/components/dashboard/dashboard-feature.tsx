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
    "VKZZ9Rxsp4CtXzDmahAMhw4b3W8tWy7GM6vXAwTowMN8SXSsHgHpqWC2ZntiMPUDTXpNDVdzs761tbtw7GXJEcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NuCnvuRaZQjCPRw3hnibV82JZrtKhfDW8tGqDF7oT9NGmPLGYvD8EonLfmCmaqZUSz2EDE3d4V4usAM3id5b4g",
  "key1": "59b2xF2YDQCbvXuDa6TQBxQq4d52TrjidkNtqJjEDhqzCSFtru3DGpWjgafvhUe6CCPg44C2Et2uocgbzWLjeqmm",
  "key2": "2eqZLvaWJPAo4HBZ7YHaAeFB2aWpAXvuWiUgkfu5pcskqBqBUSmqu6ue5T1Fd4UeP8wFCQf5A4fUVcJDbhWTpBcx",
  "key3": "5Gx4v9ko8pPykAibPza9JjvEmnWgxtSz2A1KBqkbc1CLo3GJhUKgU9vszZQ66et2D8QBiom2c1tHEXzEWjZLg7YQ",
  "key4": "4f7wBiKbvR93CfFeQCpyALjqgkkbLrNehw5x2GWfEhxNgbtgBxVfChWhkLmev9255tBo9ZoqMGivQ47VvsnfaJ6r",
  "key5": "2V2tTAzqSaoK2c4JjTUAacSZbZAXmDwNx5HLG6xZ7R8yBPAAtvmzASwdAanTYsjxb9FH4RRkjRuJ45W5Gd95dhoM",
  "key6": "4WgMGRCWYe1dVJ4N2i1zwXbyho9Sc6WLKGbYvvCn9iE2TuHuBuku3p4gBnxjkPK8UXbc3EYRfFjUkPwmCix7J81r",
  "key7": "zJKg5nEtzVRvL4TfLra54oZCsAXACcDC9mUEGwv7kHKVYH1oUV6js14w9Mi3BmLR9KThpLkrumMyfwcDBRFTc7g",
  "key8": "EqoZ2S28ENoj7r8obNbXm8ZMmFrJ6e54phtUKo8Cssq1ZnuzcFRvzR6nL5SPbLQJXsTNYTYQ6V8s9KwDNT4SLMq",
  "key9": "3vYM6YUYrSCyCqXpNWwoUwyhRsXeTXJbLcx4sCMq9U3x5gNRrPVMGR43ijjFWVrGVEaGW4mXm5YKF3T1MbivSS2F",
  "key10": "DD5EU8SdYBr64UUgQgFXJxV7rapmjnZYoHpfupVeJBgAYs1PiqRmyYXrTqd72p8DzXGeJ5RZd6Jgpp4nRNQZ7EF",
  "key11": "2g8KbC1oLQLPw8JHqdN9CDoV3iq27hbHFuQKj6j9T6kS9wi8CVE9STe5aH1dk3AiXM2VAATZbUMYsnGmx6PWUmXc",
  "key12": "4Q9tDByRWdcDZm3NQCPxwpYgMFMeosUuFP4GjBCG5g2iXAY1neeyPk9nJ7x3BTTN24rVBYGb7LLwncqKzP24u2CQ",
  "key13": "4BP4txSEL3DPWttsGkUcKqx6UbxWvnK3uvyE13wDDQGefarrBeMZB2AcHZb1eQ7DAMYRLECauP7KBB847o3dxK85",
  "key14": "3Ueiczpkur5TpFQSWNAi1BKG1pWCcQBpxPSpRyoEFqnjPSywtsYjBJNPZHQ7NCmhnkCXqTwXYzbHHZZHhneZfBsQ",
  "key15": "2nw4v2awbFaBfr1mqBC9848ABRpsdBnouUz9E5pGMxRwiY9uCWDSFFSX8sEfrqBncFyW9RhzZwq812dNcQ7QoSZa",
  "key16": "35PL7FidybA1PXARYTK3V6rnT1FR3bTtg2vLnrAxXkHX1ujkXMNBqCXVaqa81ArSiB41JqT9azNs4sisGe1qrsw8",
  "key17": "2R98X2rj8kHLVy3vxRi5VeNZi655YY4tQb38gTPUxvY7GqYY56bzFH4RM85GCoTsLsJi9o5wfvX2MNXK84Bnevb",
  "key18": "4rbREnGLCHH1cJ5n6L1qKEvM79BtwfsBiW7sUdm3C3Dr8hBzqkCZr2BQtFBjLXupXcU9B486NPca9ER6EpGWwQez",
  "key19": "G1BLNXnecNirERA4CP117cXDGR4yGrmvia9oGRQkEGAVyNB8EB3Te792DK4tjBSBMSqucvWRLbkHMGCpr152qrF",
  "key20": "34A6sakg64kV8WaAfJArRdA5TNb9FND2m6eFD3LWGCzadtD9DCa1Hkyi5RrqDPVgBz8yYxUELPahUVCMHJfrPZiK",
  "key21": "54fnsPKt4uN9asQzXgVZv5DS85wgw26XUgisyww4tByDxvvXwQgZzPTNhwwHj286xh7kaqzqciNEVfvZgDjjnuxe",
  "key22": "4aW43bard9hDG2Tpa2vwidnjrh23xEaiVi7Sf2GEFTNZPDB1X7iWrKFeHzeX1YJmeZonCcajnoMZCiccgNVHZ5fB",
  "key23": "5gt2ysked9FciNT2MWF1MKgqVirrrgZY4cBCNuVEYwV28Wfx7xx2MyyNfB5y8PKvN8gyCyE5ndKarxzwqtswd7L8",
  "key24": "3LksZvFqwrpoB2SbZRpBZcQdNybg9kY6CaFF4iZBZmpQzF3gRtqDUurnHsmJuogrdy4zmkZe5YnNzCRXQvz7cgr5",
  "key25": "27xHKcZQwNS1gXBcdHWucjQH22XApPyHDsCsYRbTJama1VrGxd3bg2NKnS2jTjpLtv4QDqHT53kM2QyZkrUPWpUs",
  "key26": "4TNLkNEHbmWpG7YbUE2jbDNUnv5jxcsNpvpaRpbUPmearRKYEUDkdJWXMndxRmbsmQq5eSgBbQVBGKfN7xwpdXZn",
  "key27": "3Ms9BhbD7MSa5tnxFd2Hj6q6fh3EB94cKZfcZi9c9P7QSJTkwwp4qLLthrTC5CATdwYTNJKbWdqXFMhECPptfKm3",
  "key28": "3TbQwG4HjHLLJB8xxciRn5JwkFBhYGUeH6FQTmmi8KJ68PjEmuRMtLdv55ENz5iF3ubnsxDY4bMSuDVZ7HZjdD1d",
  "key29": "42qR2jFgZEG4GHefm3GRoErvSdwRpb8r749niqRC3Y3YyLAGrgs83diEdxRt8uEcDvRJSxUxsvjsdbFuwHBN6TbA",
  "key30": "4udz8pRs9sRJBwxnd5tpBiADvGXCJUkdSK4k1fAbHqtRNv9WFMJ6VfZN1aJdgpVyBgx3xh5197inWzZuehZuM78X",
  "key31": "2doWbPXfuRDQchPPkW3GKhJEnqWg9RZJFzxDty4m4MyCQBTFfu9Z8L3xE9NJDFfo5z8rKn8r19o7BVvornyA4YLn",
  "key32": "4heEbMR76ZQLMmqFJNXYRYWxESj1QA21oVNw7Y2V8YFnmiZ8NxYkJZktCQLE2rKbDqvkQg8sqYAYpahSCu1GJnRi"
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
