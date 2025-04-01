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
    "AfiGH7v7jytxgLvmgWaUt6DFjLVkQFo1e1dXTQ2govswbz8C9vRDHdaR3TEiY8h6ssRr4wGrfUswCGqYk93jQSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MfRWUwJDzDS2uxWue9m8n4gr5PmFfxFoH2HJReqfZU4i6prgnuEkakfgcMpdQPk9ppCDgxofFz5Am3y3hG78dSw",
  "key1": "59FpxurWV7zkesPyMXKqpDrNEH34odrwSTAEYWiPFRfAaH2uhsxNBcaf3jucYiMBYTydDMYNeCEHTqzFkLMedoJp",
  "key2": "2z5eJ4n2mJuZuUfo1ttvh9RXC3wszpGgniVb9xxFbTTwwbN2UfyvDb3PfFaSM3rpR4AATbSF7w7zoNJVdxn2NXav",
  "key3": "2gcjYrDMFw4Bj8qVmtcWRotjLN6vYCkt7KVMzSacVTmeBMmxS1kTHiFYmUBq7EFNgLmTpobnHUxdvL52CTQoBwb6",
  "key4": "2gfLXDHZFjxFsauBieq4z26pv4d1BftjXdeayAwoC64a3Egehzxr7vtrhxohSrpvbfyLsDtJDEfm8fxG3jq1aCe5",
  "key5": "2SBkPgbZRJS4KJPKdFHpJsgCHPCgZ8thkyrw2iTefnztq7HFxCQJeogzLjpYZPBdVrwxGn3H28dacNcsgcAWrk1U",
  "key6": "3P4tHUGRj1CtjCme2XrCm74wMYbJ71dtfq6m6nRdUUxECoMPmMRnPQcJJZb5mHAU7zTXh2tFfpyEanmJ1P3xXCsh",
  "key7": "4DB9EihXfVoEfkHAH1m261fyoCV8iHYU9DyUUoCX3qAy36HadLZTb1GTWPxNdVjtjyEuxTwYGjR9p6sbuLLwvPH7",
  "key8": "wm2feLFbmLuFymjy9m5mnDgyBWQ8scW5SGP2J3AP17TdMzSLWD9gZ2Wqo4HCDT7bm9Dk54W8iFLr7axH9yW1MW9",
  "key9": "5oHaFmnp75ENNbLXVoe3kbjhSC713xL7vzLUz6Mx9dJkfMmKffv619fGxoG89nWx3fC9eYJnekcH5brjSR9AhPGY",
  "key10": "755K1qTUo2eNghBdGyUx9RHiGHALmZLgyTkjwpKqABvFpJV3F14xZah58rUqWh95Jy88d3aPdTPsg2PBCPqvAfj",
  "key11": "3E2bYsKgUP3ZrPgZAdccQbG9aHsuLp4thd6ZEhJUgeqGUTpU2MKiJ8hB3QwqJPDq5ArAWfKUaegqPKZ4FeZsdHoK",
  "key12": "2AtWVFz8yPuXrP3BiynAHbf67h5HvPuC9iWG5MF2rFJUd1L1FBKSBnHRQ5nU8zBLZvjbkjSnF9TKPAdXMhrm44Gv",
  "key13": "5hcsCppX9rT2DVBiYRqxXVEbnHy6ucK3XMQLbPniSov5TCz9mer9RystoqrSQqBG8yrTin39QA11zSwsY9MheN8J",
  "key14": "39DaZ6yH63Xxog6fDcU8E6nn953pGpQB9CM9wEPiT4wLXCjwvwdeoip1KADG1Mo8jcWzVL1J7bvDcuhYErT2J8sv",
  "key15": "47Ka2gBzeKkpAdxm9gH5GPcWbRkcq2rwkskD7FUq9HkhLZKWQ6TsYHmLgWj7Mi4ESNX8taK8QSgMUG6SeX6ydyjB",
  "key16": "65ZkcNNtszWfZNBmbu4jvdr6ij8qZFTVLy34fdNZzX6HcJcdu3cF4Wt74PeqArrxHqtQu17gLzT8CGN4E4ZnFcXu",
  "key17": "2uKVtkCs7hZiqJBzzke2Je3EPNfbsoc5qyDkSxsLEb9SxyYnw6kbhWczCrpoayC7NW6xLXFqVJF5WJdKJQrnj1GE",
  "key18": "4e98YiMHZyuktRZouvkGWd8Sv9nBypzKfngWFpXivjD5ckU2sKa8gAfnxNFbzgG2EQJhtkEB9fFTn54FHM7MCXWv",
  "key19": "4289W9KpExnbypMAeNbGSDFUwab78nAQ3NAJob7ck9gqXgJ2aLo67bBgbjEcVXPjXWgHg724KciCQakac1zTUG5F",
  "key20": "3zHrgx6JQH1LEj2J6wYmQoH2YTBTGma1Mos3NCJMJ3n5VypaHB3EmRzAoisAQkbGs7Kc1n2ghzvUTrSJfi9Z87hT",
  "key21": "51ohTuBcCr3oXeus42TcHvbtqRQMB4PUjkRwHyAf8JA77qHf2Y3wu5ftqFBxPkLwDHH28MN9f4i32X3r5nviaF7p",
  "key22": "51pe4gqgqh93QeCyZoDwtALbySNvtHo27eREbUzzjrYtSdU98tnQTk6YiQytce1rHp833ipjUwrt4W7c9d99ATxd",
  "key23": "XC1TApVpcBCmnTpyhHQBDKa3pTV5Hmjtz7VSkLNJGoFM7gB6jGe4SZRYqbJ6touCc7Rghne4x2jBr7i3XCueEPs",
  "key24": "3hUf7CTsWcBQVt814S1N9RhPvauvFFPqdcEE1Mj3GxeJ35i4RsTZtTSmZukHhGwg8oXd8t7Ug2VsPjd15NnLZNyw",
  "key25": "35qzkYK6AuuaBuhoSW38LNFLGo5qL2vw6AD5ZBEqyVEgEcsoFQ9uX6vVVctB2U1mu5bznXHMicm3bSQrMS3xg7as",
  "key26": "3dyVJRXET2M3Cr5W1urik4i83vJVbYkQBsFNJ5K6HcynDcqBL1JSPLFkdSrV7u8nW6vxUPbrwMYxFyMJJZP26MCY",
  "key27": "2ca3n27Ymqmb1Rkx2qyyGq36iMUDG6Aimn1veK6TJZnXYkpubztBoGoVFQXcSwE4PWKmmYE3mHtyh2FdLXiVr3PJ",
  "key28": "3s4pN4KF71DQw6dMQjDynDunpEdMDfqk2wiGg9HVWU1y8artL2ETXRF8Lz7oofVgMrvveZ4TdSZZJP3B5SZ9971Y",
  "key29": "46ENAK1X7JMQaSmk5CGxEk6eTRrR3nenUZJftL5XbDTqX3rDYxC4giYVvxYSpJQbZf7Le6krWsqBSwqY6iXhxTY6",
  "key30": "i4F7jvdiWT1uXsk4AMynqjrE13Rw4THkpBCQD5ZFSWVk5sLTJ2rry745t4yYksUZuZE6hM4y4w7g5fnN4zNz2s1",
  "key31": "gr6QtAgjq37kTBzfhw7eBLAYKNJRrTFhsdsXpqKT4dLUhHCrrjDVeWEBqWBjVFYDLVaW5poLVuQ3os7KZRijXse"
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
