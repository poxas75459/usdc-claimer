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
    "MS4LvtrpHfHg7PQQVsv9FuhKgnCS2pXUEBbKNQXc4eBxeVnSPak7zNrdAWncVSYWHwgdEG9ueZ8Nqc5uoqYVaXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fxGx96zAh8scmTX35WowPZK7xEeAsdP3kvZsRJsMkKkeWQnwcHLQE3wkfCaR1pytYtKY7R5Vzte83ruYMzRxk52",
  "key1": "3j2sr8kvGGbxZ5FXRcWpJNvUW2SSwot3bPHFB9ibMNyK4Bbb5oSUd8QDHCtam2JsRiDLJUb11h5Q611QNwXenjhS",
  "key2": "61Jpicsbiuuh7V5qkBhximngtTUMAKUGkJBapMjQqscAgbdvRb9JRbDTeyeLPGgbwTwJ7S1mTffE5qZuoU7V1K4t",
  "key3": "38KbPt6S3WKtiy9q5H9zx8bVoc5B1vZnd1G6QqMhn2rDmtLuZsx3UTEdziwxwHW62dq61LN9Y9Dm2SsZaETCAFsf",
  "key4": "5hBdXpk1HWVL7qtw67Kg5WHTXjmHSt2Ffm2xgbFErYSexHPqWpaYEuZ1kX6kBF4bbKdFqgFcVJ45JMFncGXG6dxt",
  "key5": "4FiQ5LcVKpTKqy54HuLV9chaip1mjLEtwJXGikKGchMU8Ue8ACmL7E8G4HkvT982LW4znGDSKmPUpSFpg8XZo2ML",
  "key6": "5KMeuw7DjxBHSKHkwrXQPv4VNMKLTmHmVuhyup6G8babAPs74UzaMxiXtUPnujYhAJExCTuSXvB3bUBcm268gGsg",
  "key7": "5m1kaEgeGPxdZrmAwUtPqEtbSEy4TsVFZ66aykf7UiXvpTNGF6F7dntB8Bpec1eD5KZjR4EyA9xCCPD7sNtwYxSd",
  "key8": "4YeMnRUhq8M5Nxu2dEFo36vg3Qjj4sEVhq6zFfdSfxWuKgfsFvkv4vZV2EKTnTftvyBmakC8tVYudGoPaqkw777d",
  "key9": "5xJxcz5ezBUmQE12ki32HHcn6GLj6UdUQSRKt9Cqih7ubeh5NQTLPfMvHVztHdAThFiFDzi4AWLf28yWqcrFD5K7",
  "key10": "35DgN3DWsRdqJQdWa3DLopiYGWBTBGrXJFLRxvW1sSRd7GENuzaxfdN3M9BQgDaNYMVrpFsSTAZ3JioNwQoW62dQ",
  "key11": "5RsoyoVr5mtfKiBCNLFnhNXxMQHvGeECYKXcJN1h7Pgu8tCExSas6uc1Wig7XQvcAgSSG7GS7btMiebzP5UvF73U",
  "key12": "3bt3Fk3PqvVfbRYqFNgifJTW8XEsfg7dTFi7NmtNYZ6XAXoQuUGn5CaxvV4AR3yYwWQjjSncZuh5BdM1PEVJ7ktn",
  "key13": "4kM4gss5ebFghr5BD1Fwb3YEf2MJCTNhwiECz8UdZEGp5mDxftt7rstQkNTbm2uT6U7D8RGYd6jfqtyoDHVfaE64",
  "key14": "21itkQHELibS5iha2ntgdUfmDJk3jRDAEMod6NeTej6LxtCSnJJShrAxzbgG2HbMhNmqz1oryXVapFsb9cmwx7r1",
  "key15": "n4R9fLW7nw8qBpzjoP5pzhfQyKMNCcq8Vz6M4xZFdyku8SF7MRhmvKKSmXxtdWkMkAuB6a2AwsC4H2AycKKawUZ",
  "key16": "2DCih461bWVrHHrrPHtzepGFPYFLGCpV1qBkJb7GqVQTRbYTEe4E3phR2qQGUL79SMEY2UiwgfwaVCDAbs1Pnnmg",
  "key17": "2GpWh9HRH2eS5PZdQPhpzY17XwZuhHMs8AkZz9F4zdTrqVmyY5wJMGXdk2DJAJ6ADsgXp65nPPDg37RepY58DTdq",
  "key18": "46NXN4W9PjQDgH97fpg6PQixMm65aGK8Xht4syExGyfyxkWhu28k8G4Jr9rEcD4usLi8Jx41Ld7wbvD876b7amCx",
  "key19": "dd7QgHZfBuZXsd3oFi9yQa1bSCXCpZb1X9tJacL6n7BAwMdmDa9F2JusgXupNMa2DR6GqeDWvBKNFDyex7HLuqt",
  "key20": "2HxTd5GyFGuq1xsTCopSFYtynnWxry4oBrCCapRmfiwCJFtjHH1jaNCrvRZLQ2AthcafK4jjNbNup2Z31LRKd8vP",
  "key21": "KgcBzSy5RC5HdHFh6tf17HctQkv6MQFqeqSpriyeWGn37nhNegHTcy92YSyANg7qQvsxjFohARLjPj2r1gB88PL",
  "key22": "5DotoaN2CpG3xAfuUJXEnBQY1tmFVDk9kjCKQ7qwWDcXuTzufAHk9Roz4A2BwBMmaNdFBTzeBZWyBjY3XZUKVHSp",
  "key23": "3Sj1LETTHouvKawixQd3RkrwEfZEE7G2HaZheCD86GED6zLKnFPaPjL8jGaj1TgTubiBRo7Jpe2smNnu5tCGxp8P",
  "key24": "2EhFN2y89WMyaTPEyqM37isEariksjBH131RmvoGwK11sNBtZxv4sG4aq9iQEwDnKC3UVqeauRShRcDP48Mqqkmt",
  "key25": "2HErz2EVcyfyAqCEo1tTufk55vsoViogEt1TR7Y1TcNExAXK2YkkEuY9jhdrSEmr2WD46YKbxmfi2q3DNzYZ5C3A",
  "key26": "4tHk72DaBTJY7o91bzVRf1Dk3TNTrT9rZyAP1YyUobrznoVB45NkE6ZKJuwbkp5iFcxHxa1GxnRA1i5Eon6oEfpz",
  "key27": "4QbcSA9PspopZAQMNzPTdvwXhrtQQjwEWgUbMxBiS6sJ4N3MPvKvMTGFjQfU3sUe7Hj8v12mose8qg9v96N5H3oh",
  "key28": "5R4fLq3vEzDSoubPhKmhpVVv5ZNU2qYPYBrir8hosHppn7VGJpzremtdbye8QDZdACezaaUATNgJ4x8QyHevjM5p"
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
