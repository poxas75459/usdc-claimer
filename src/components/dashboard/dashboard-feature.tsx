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
    "2XCJfKvcgAmaVNgdA4errvFCZpPyGoXVxuTfik7uTmBqe4zyEjS5eVMSadZgqfjg8xnPTyRPV2EyNWp1nbwXBgAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M42q3pqW5fwytm8QfNQotXePkH9aTRDHrsS5i27QsbeZvhqcR3qBWakNzEUHF9GUSLg28fPCrJtFNYX8RP2cBmt",
  "key1": "44X4KR6A6JBbwvDDN58CXB8YSd3jz2VNjDF5XgcuNm3Hz2Ae24F2vt1UqEFcXaVpQN5CpzZKQpe31N5ALzHd22MH",
  "key2": "5xpCc1KqD3HcQRzZvcmrPRAbWybHKzCnNcr7aTU4y1bZD1JAR7bsm5gLPDUtpWN7aSdjwkvARJD2LUaEvCGjCRvX",
  "key3": "2EfpAhJNBXvwJfpxQrnexCzRQWsNzzMzw2Jhff96Zmh9XDcUPngHR5bkrXqbPvxemFfQRzcCgD5dcqtFuQmY4egK",
  "key4": "2XmnZqQzkx14gPoUJVxDqrNN5cfSPwTujrwqdmMiqRQA1FHU1j69AYzj7f2Z7Nb7YRgYiAAPtN1gY5EY7TfKauj7",
  "key5": "3jVWs3Q5Qw3Q2pivrRLXt4hSqeNrSz8SYKMCZ6gg8oTFPhSTJSEsyXF73dYMc75dr3czBf6LDPdefNPotN57wEzu",
  "key6": "9h4ugZPCEYPxouZZaUM6y6mBgyqpLq9Rg5PU918r1UgoADr4VuF16rSDgNfSJVPkwnVU4xErWoyZuE8jQBermhv",
  "key7": "4DjxMZoBbAGeQn4j47Aa3xFXQff4ijJrfvTxjr3Zz3fks3nHfLacbZn5QDsCNtV4KZ6LDpWh1wQ6F8ehkQ5zJaka",
  "key8": "5X5Z39ChkFBumga3DYLNP6saaHGFs7oryWehnv1hukmt8mEnV2AU65rteAWxk2aisZ6sPr2cetXLLLKUfcso5ExJ",
  "key9": "8s2fZZXGXC4djCn3ZDjysHVcDkRBdXgb1UceRhMef6acaCqowcjoxzCjGhq3UHxgKMHMvPkrPYYHb1RQV8E9rxR",
  "key10": "FiQuw491VtviHQ59B84PPQ5hNQRLPnfA7GUyksVmtHvSP6fjz76FLsSqVRjYoGPLs1ebddrSZdXUSHRHUdL5phT",
  "key11": "5RJYkJUGTgg7dUds7S6sPBraEGGvuACVWWnFVFTUQhABqy99vsR1msC4DMbXMsLSpFhXo13PSHjwAP2cZPoihoNa",
  "key12": "PUW6rCpUcHCjALMdbJq9FJSHxkC34W9jJ21DWg3ng8DM45CKi2KvE8iov7YM5BGoBbBbWtL2Lmk5opJ8E98mYZ7",
  "key13": "MyxriF9bnk3bcF9g2PhvDW4zhNmND77mKdppJTyijdrTbc6X3433CKbtFTUY7Ud5BtYcWAbCPaqXKWf63ZuAnRo",
  "key14": "5t7X9um8Sp1scF9wKEZVzdkKztCNSd3cE5vNGWkVKQhrEWEVw8nm7uCdsUtDZeeekzvJLLrU7CM7KHAPMsUT6Q3x",
  "key15": "4G4sVRkQZhbGoUtPrJj5QLNWp7yR8VH37vpCQXMVER69ZPn8isTJHaa5tmiU2wkxKqwmXqyghAm1NtqTzMgFZvH8",
  "key16": "3LCZ22Jm93P4ZKUC1ZyJcfG6nuMetGgb68FescFQtRq2rrKEPntszqKxE47QyCpsW3Rk13cTAm9QwgS6bwwqAfUf",
  "key17": "55ecpZLxJDz4TZCoMZCPsLddbw8wjKbQk1uoQQyUD1mF1ZWRzvUzV4euPcHMGaMDBSwmQySrQr66p5zJvWL3d6oT",
  "key18": "2GbTyYkBAALVgGGaPAHbRHGiRuWtn6XaTudCzwmKcwB2zrRuLkHR7nsjg7AEfB7jYyywqaoAXGoxtr2Md29uH8i8",
  "key19": "2SQ9FHfwQZs2tkZ7wdNEi5jCJFH3Z1oFZzq7Tz4S4JfagYBqRkNhWEQ2WZDK1omtC9jXxpHuNssc9jqgYPDD5TVV",
  "key20": "Pqu24zF6DGLkBoZEjCyWxyZfG281j5BJn8xhfbu2EPmM4sDddngwx2Rk8R38ciwm8aUaCcHbiC5jNKQQs4kLtSQ",
  "key21": "2KDJgv96TXs79Cy1kSYd31fTU364hfLw3r1gG4Ge219MCJFztjxbK5823593i498iHaVgGnLQARbyjJymvMEozXk",
  "key22": "5RhFpXrMemercrdFrahZ3DF9vJ2QPebE5fuoTYnDjay5v79nMeW6S5WT5VGrwG6S8cHcbBCMsfhrZV2QauFjpJoY",
  "key23": "2ydbb6SRGd5izDXNGyfh8XodTk236nhLpm6a9wXv9aiRWXcCCyhoCzQE2jXYoyJM4FrMKxXpMXNKvELkBgKp8ASn",
  "key24": "yLRpLupYUCAiZQbpa34YWA3ioQQbhfgqk269umDtFNmj8W9uK5A4WAVYf4od3jhn4VJ8XonEFaNAU99zMeCt7Mm",
  "key25": "4b5FVHbBFfV9gc75zkNxCD3H2e2oVpa5ZpRo7gGBYg68ZJotNrqgU5o4zXvBAk1NmCpCmD3ujiY23eKcEAuc56pG",
  "key26": "3paCfnG79RAHz8NY4QD1j1ePD5JNTBBu9c4j97CtjrGM8FUh4naCiFQwminpbJSkCbnzURsQrpggcoUzPrRymTzm"
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
