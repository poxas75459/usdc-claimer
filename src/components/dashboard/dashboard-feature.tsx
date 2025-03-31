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
    "3wC7vQ2UtgSnoMXpkgQsnpYBmVtFVLE9tSfp3qwbj2b1bubxKgEHF4xsHvjbuUWV9agrN6phpfF4suJ4D2eEogKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sWiHAd32Nz8GV7rapGMtw5wNTKhsAnAZj8SoDAgsJAK7C3g1SejrxuJxee8VMf7CrGfVQkmLeaqoBk4hM9vAwKg",
  "key1": "5g7Wxw9mYiB59KvhcZ4eQGNL4MyFy9Xk2iZ36wXrURsDtKroASpDbCLZLxSiDPcF1NFFBiC6QFSERLm4W27ubyi6",
  "key2": "2DQXQs8bRbmWzJkRTozz472W48PRtMG9b4tkiSY2xR4Lc1W8TNDVGXABE1BXreFiFEkdt5X7w7Gh5P8eSXUWK9wE",
  "key3": "3d7y4ryxGGT4VBnM4iiLHcDasqEMzWrXb1xAWyMtRJHT7DrtnRDDoeWPWRjS9rjosXnpd3o6LpLqpofA8kPNTCuE",
  "key4": "2JdobJ9LZJSnzvHZcc28CNE89thkuwLdMDRtRahR9NUJdWFxwp8mkS61UMeWMNqZVzbudue7tBAnaMe2ACNvdyh1",
  "key5": "4ZPxmqyuZMvN7xJJnE6BF9oJgPCZpDuz52PuEwxjn7oqWwGb4u8wWhhLZCba1mtvccAzcBmMzcaQhfPUc4gGwSDa",
  "key6": "5wfJFDjauW6tzUro4EnLD8sqeyQ9EmmavbBTqKK1wkjReAQTJ5gAx8JhCQHSMr3XQwNja3uam184H2F5nkyUxTp6",
  "key7": "338QHPWHS6T7HiyNDBg6EfJBjf4TrLgySGgcWLo2i4DjRBNCDtWhbPMacnwVLw3gTG9aSg5Fo77g9aaSCcW5ubBX",
  "key8": "h9d144fVVMLMCRyb4GUicYACdxTP9HmxjdP3jKbeuUtNfB7yUgRbP16UhzYww9NaSPfd1kuhZxdPctUjmyKETUF",
  "key9": "36RXPQW27Y4gz1K8q7CAAy6BxD2MCy828khV6PNM9jBecrapUeXoi7aqFdg6EaiUKdTJHV7ocgzaiZak2eRKx6KY",
  "key10": "5gkdqZn7PLMqq5JPSbDc8kmSGMovtBWtae4L998kP7jDPKPbA8xXLdqgruJ19h4QbzqbE229g1YiTCmDqZj8AymA",
  "key11": "3gs6ZnVngdCs3uc3cm78LLeLwPGDHEV1yrZwhUESzVxGbQLCB5FBq17gsjjXsQUh72s7fmqxXcTuwc9cA8kzy7P6",
  "key12": "2cCN3iiftS3yMs7xd9FVhPzGNmbVppCUgfFkCNZmUQnFtsg6isnfgLtw4x8UHJA6xAgGiZfiLqWyURXLruRvztnb",
  "key13": "4rygbwxzdyjM7FjRVriNAbXDVje5yFbS1XtEJ3FUqzLsM39C7CczfEqa9exdaZFxKCPLtYwtKjzCBD9vhbMsU9Ug",
  "key14": "219NRhVm6ReUQr3KRoDTahcUYa7hfo9qPqEZf12DpGATvmJd1QcpxPwaEkoiTmsv85WZkURprgXkKqbSEnkR8XG9",
  "key15": "4kHyaH1KhT7hCLs2E2MMdjhWgmPD3s4skPJ1Fj2C64BJarJHBHmaXhRs2Nnza3rPkBtq75ff4NB62NhfGq315cns",
  "key16": "3MRQR5nogvqPyx4MFNc3S1QoSpZnsyRpetfDfveyLrhPFiCBWzw5cVXqBquEsjRkPS1RA63qgF8qdsTYamwky7DK",
  "key17": "2dUSaS4d2kmWAuGyunVNrcgrhPyEgfPdaM3vtUakcgyTjUDtGpRcoyFQ43KGuredVKQmJbm7Y9aSav4qFbrX7r9Q",
  "key18": "58FuaN51XEm8zEJwBUJCt7XWpfxRc2NRVNZuo5GEbhNYyo3cNPRddNtqJB4Qx7WFFE5Fmb4rLYskhQ6MbFuVKUCE",
  "key19": "pRHUDrDScsWURKVa3bZh7Z8iDAJacxfCDkzV1GFxXjVUEyQW7feWGZ8D344QPVe1h7GdV74y5CUzKRqVBTX2SMM",
  "key20": "8i7W3guw2DcQDQd3ZLEhpYgGUiNWvUrciwVPfvKL12Wr3gkmtGBEfjFMDmdckoMjdTycEqkGVjQmdGZ1fNSRVSm",
  "key21": "gAiH7rCVDTk3UkR5ScQhxaLAMi3D1hzCha5mxNLJmUtxZcfGfLpomJT77JRw46p9NiC8frcf1EHZVvG5UMACWG1",
  "key22": "2JfbqmWsJjbNFGLErWzhPHMKduPvWYbwwCVwyD75Jq1c4S7FGwo55BerrLuiv6e56PMRc51MNoCEBa8VU2xfbsmx",
  "key23": "5SYidr3avCK9Ffr7cXCoLamNT9TkhZQfFEXgZayX1tjmK93jxNSSHYmeEezhia3GrzQrainH16yK4qBS4JFYXGhx",
  "key24": "2LJYEXrNvvByRLbNifCcmE6QFhz3zBxptusSSuP7aVVyUU7FXPuzm5uq4eDxPFcx8qXpJjuTQmKy8d8B1ecFBdn5",
  "key25": "2dYe9jnAibqfx4uat2Af962sxS252mRJX55Ksgr5poXS4Eg7z3S1mH3FrCW9ADkqMKpS62S6sV8v75vF1Qcddue9",
  "key26": "27Qfy7gwEt6Lc41HBRPECwiSeYWhoCyrk8sLf13XfNP37qxFxvrgmgrpRkL6LGUPpQZ3Umc9MHkB2Lt11sMoqJog",
  "key27": "3G8zLWmq3yP7Hp67sq7CyqNzWnjUZvPKkoi8TadEfTt5jg2q3BZaC6VvvVmrRozFxaQSJ2hRxY4UTE7PxUqKdjRC",
  "key28": "5TJbJxjNcaCX4cD5yqCC3V1JRwuVXoRJifb7HzhXb4MayX67wfyXGgPoVYAvskmgLfML6pzRwKqVJHwj1HLMACTo",
  "key29": "4qDGmnKoLyw9DaRaMXAvaC7ei3FKjsFRCzxFX7vtUfZprEAscQdkGzAueucp41Bis3Y43BeZ2tN2VE6wL1khMhvG",
  "key30": "4w19bvz3qfsqs6hyeYx3LPJJFxGvfPdMD8smif3fbduKhge5ZsSq7DBhSLQbf4DDXYVqQMpzLX6P8dHyuxAa6KSJ",
  "key31": "3NGim2T9xpWyEdwmPjNiGqDP32Lm7Yn4wsz138ozhwuoLTvyoX2Akt8GDDuqkzGqhM2qi6S8NZKNqoi7MBoVjV1b",
  "key32": "3Zb3D9zCsAndRXPZaRWtwGyQEMY1VdGQqK3XTz7p5hjK9xQpBbDS5ATCxqGxy9Q2NnvEQvnqmVcWw5JzwSMgRhk4",
  "key33": "4tcXyoWafEo6RVfsu7dJTivHdTxkW6nE6wEm7LAoBfZofikFmjpLzX44aQUVrhmXTwH9yAGXPv7LQnET9bZFUzy7",
  "key34": "4P7Vf8LTM96czbW97gKbcZugaTsrpmnUpRkSu7jGva4VQS5nCTsv2oYA63tgSwF3YGQKMPyMbyvRQwE8ZrZ8E5TT"
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
