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
    "5vrBjphup75kP2VwEPqy1FFgReo3y8j1Rrm3dAaSTMYwQRvd8A9rCDhEwuaaF7nHRSjBwV1Hzryx636mscvyCGbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rL8qgqQkDdtKTBvf4T6LthNdjLHFT77bA8n3nxvwUT2tM37Ufm3oh3s9jizW1orBeJc4oT5qrCf3F4T8rnoB6Sb",
  "key1": "2tR1ooxVHuM8LCAWkMca2RPXZXTzxcDpb7maTnzMChDNWJAN26nAJZgqb4GzbHDwtvc26HG8Qi89TbcoEJcwvFoZ",
  "key2": "2ETWjV7eeZrWv1gSvR7grmy2rsAMZ91i22sCKoxCazkJoYeR2aZsEYd7f56Vyuh715L4KnhBKvyNxm2SESrhwxXg",
  "key3": "2NaerB1dDEcBtMkBgDv31dNxbXYoyYH4zUbbjthFAyXe2q7XB7mFLfqzC1dAGneMVa4HtoePgunV9HPx6ZAm63RE",
  "key4": "5gmAc11eqpiTrhLtpRb4nid1yFN3Xxk67qBriwUUyP5EHWXUPqoyzAvbgoTq5QDYbUL4wHZgRHDwZBKwoZncGgBb",
  "key5": "4nvvEB2qExCq6XTdYDZ6H97ztjpNxKKqvZTUMGaeKaZLXJKqMWGqoEAMihgJoz3Swzhciz23h45TAZNzFRnuA26G",
  "key6": "2uMcdG6NscxiT8mwjh3a24vpNWoAU283trurcvJqNqufcJbx7VveFfTqhx9t3mPLqHUgQWuRtpfeV2z4AMgBTXdD",
  "key7": "nQYYF7jhb6SwBkRDe63CeuHrV2LHarGFEQfgxW3taNmVuy4NGtwsKJarGKgQaerbF7Xm9bfd4TVkoXGyPT7NSRf",
  "key8": "EmBPqDZFD5ksFgxmZA5jpkatfSc9d8cadrpVa2W8MAz7a4fPGDohzJmMxA6S9PstTaF1igD2wo9HUfVfNqRuqaP",
  "key9": "2wDr3pkvcrtHfNzG3V2ieevUEYbq1K9G1DH9F3omo6e7pASPok1YaYLp7UrKU9s2cHct4JEn4oc23ze1BJGbgYXK",
  "key10": "6UxmqkrkJHkqnurhc6WySjuHmtcVt838AHDYH5EG4zRC9rmzsymDmFk1AiMqHva8mXXGSqRCcEyyb2bknGC9PFQ",
  "key11": "8mycLC9hZC7fAfPdAFwXoonjZqiscYrKQH83AXSYnFnSx3G96RacTKMbsoZ4kPBKfoNSgXC2vS9DfpoFXJ8xu5B",
  "key12": "2gDJBwXN4hCw7vkTkMuncm2uoqmePioLV9B4X6khxuQd1nxtqxyDELAUiaXS2ke7vNTmQqJRDvXB8DEawxTF7ptJ",
  "key13": "PUFwMVPSvmExrsCSLnHXEhhRG2ut6uvjBzc6kDg7payLYgrxySbj4iKnJYFiAQoXKEPRrDmv72A3AHujVL1CKXy",
  "key14": "3Jwc6XS3WAwSeWNtQzThsqe2uvJzqLRTAj7M7wMHfxDFVykoRresH4SMz363a1ZvUz7t7UY1Mp7kGckQdm12nTN4",
  "key15": "55CAYWbUz3bFGpDvT1brrKGoaPDMpaD5vcesGTpm2ETqNYiG7abEWYUsdpq23QqfUc2SUJgrm8iPeFgmu5xpHADs",
  "key16": "4YG9DHQYL6yHC3ABbrXV7WguHJDr4mRD1uJBAmfwAqkoL5oXXA8G2YfGKRYByk9prQSYM111oqMkcfvz73QQXx9Y",
  "key17": "4yRdbAZRSmAjpszsbCgCNCbvT67fZwwsCgG22i7FTGUtSrRU7GfMN54dzu9GUQW3kcXNxMAHk4BZRdKkKh192zHJ",
  "key18": "2GJZMY5xDjSfRp4ZruT9a9MVrJ4fNTBcAP6qAKeYJVasaY1PCYr1fzwgqbtYLMggrZ1pzjBmRtkRHvXsECVyn1AX",
  "key19": "2pgBZGskcE6n6JxFy6tBGjxofhAKJ12XTQqAi445ZgcU7W46sJTGCkPpb3F75LPex17pFFW6NwZs6j8wpW7Eyhna",
  "key20": "4r4vdD3sHJ4YtBVV2GNj1BG1RQNq3NNkUxxxQSL4F7rajifzNedX4bNiK5WWkWMR7gLEZ5uXYyYFAAfEZzvCmpaG",
  "key21": "4JgBMAHuNRP8TS3gYxCKHrbVcTWCc1EDd6N2AYmuDiqvWwynfy61Mg3rzAo6m3rK1upqTdAevRLLfpPsGEz9jEqd",
  "key22": "5WynPGqrzwKWgKY61hf9wS9DqofSQEx67RFzjkG4RikoCyLRWEE4JnG3YnXVPJ2DUWMCGNznhYBTgjud3nEthaLN",
  "key23": "3RrSMsmKRKg3KMsL3e2E2UHBe2pDGJbo9wPYARnf8bhAcWstfHbx1uuZN46ErCosjLNtdfxpRCjXHyRDH7DzQA64",
  "key24": "4TKJmdMGdYr88u4wQgGGuCy8WGyhXp6W1i8n9n3Sk9fcs8MaAgQxFcdveyLmtzBooPVZBXpwGzVsjJ2BGBz6MEkU",
  "key25": "2WPAK6ZsPV5uhvcqwV55Juq2ts9Qkdj79DxqfBHh7UZeFo1HqXgVih1AfoLc6ZM77bM5AZ6Nk1D67DdtHT9ytqjM",
  "key26": "WM18E1dEuJcYENNkqCd2DEq5PEx9fg9CsGKsij2nAaBid1vB4UNW2oKQ9oJugiQba869bRMNHS2mninFZKeXCeq",
  "key27": "4XGqE7FTWU6SCQw56CkKLp7oEF2RJpdzpi5VG22eGCyHYaqtZuk2A96m5YFJWwF27VFnGYMvoHzRvVsZsgxaWHSj",
  "key28": "nSjLVagLe6BZtFb9LQKFbmVeJSNi2R7cSBM9MhPqFumL5gnd2M1dmb5rrEerH4U2aaxS3yre68Ac1Xp3EdoXrmp",
  "key29": "27vbWZ4edHMi6XsWsyvMj8RWLewmeGQCgTarhja3ND1FNjQWgA2HXRL7pP4qKJWki8EuFoRorTBCkmGyjDfRCnM4",
  "key30": "3PFAByqB1BWvhg9oYE9znRsNhRLcnWem7HEk4ZeFrffQnVfwkhVPQSatQNiE2wVvq2Sp4jPqpVGB8neQdkrKTAbp",
  "key31": "5Y9pNt6KSpP7urSfozxPQgbS2AHt9xZGhXih8KVqiEeoiKDKKjPbv3iUiNdpbFrW7fhrcRQ3q3eNmdhATZXzPjsZ"
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
