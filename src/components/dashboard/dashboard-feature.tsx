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
    "22sJFR6vwCDnDb294oSuV35y17Efv4hPWpS4A1fXXoPXeMVjQDwJBxA3KCwA3Pzoqqxp9nz957T8xsrXzY3ns9bw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QJphpz7hPyuJLajhZydK4FhaQGCBsAaPy3Wg3xcNfNojyd4oWZkg5nXiQFQqDiwo3MQbBMEbhmZ9YYLSvBDcpSi",
  "key1": "46h2xoy78bxrni7KvKsp3EnoJRD6xDvrRt1ezpsSq36M9t5jJEDzCuneWiTsWpEiVb3j1T9rgVFZ5x5y7q6rGPuK",
  "key2": "48a3z5Kw4HSzMN1gM4TjmWasYnTxaTwyf2t7kFCk5nYKrR8o1QSVz7Pr3mXBVACuJVjnhR41ML71hd5RDwfxr9S4",
  "key3": "eLm9nFCyyLddQovi5nsLCE8K43dSCD5FEDr9wG7o6d2Rs9VHHwJxcMhxNEqrpndquuXLuq6gGKbfMeJanm8uqju",
  "key4": "UZdSc4fNG4L2RPdk9NgZggP1vypGkMATHsGbm4aA57BQtRYZ7WNzxXCbfL5A29tKfAsoymcxUFpNnxDhqULviF8",
  "key5": "63a4mTuQHj4Ju9eWiRiHws2Hpp2jaZnrjqnmXSbWTHY9BNxxiBZ8bwHrSKVMNZ4pUJhfizMPnzFTXyFz6N8NmG3E",
  "key6": "5Qd4TnLCF6z1iFVpwn1yXpcYUzNi9P8VMqKz5HX6JMJcprW92c4whgkL5xvGahkJfJn6gxip3eFBbwrumi5VohdS",
  "key7": "833az52wmyDyuiUn21fWsmbAwWbb3gRSbtpB7CasSPydntYqQ4z9PuiKqPGg2mZuMmeAtNbU6Cc5Tb32ZZ1TjkB",
  "key8": "4ASSaDDFrgxFk4ar8tCtH91vseoMv4PfA9mm32iMP2tEEb8DAdW79uw7eVb1apPhZGZQ5mMRwHBG6dQkhCQPdd48",
  "key9": "28YTusqr62WMd67DQm8figGKTRVh7Pf4ky5AiYFx97GWdeYRRZqHfFVvGYP4t3LqQ2ay3UEZJGwUq1pDCArYswmr",
  "key10": "4RzCtJqTmWcNHnLWh6dsVeyXKMoow5EWP6LM3YUqbBcHcY3ZPe53Eavyd8ogAR3qZntMTBWiHES3ns123ST7Ls4h",
  "key11": "2puyHS6dXGLte1ifV9DZaE4PM2CJywT7yC47Dnw11JwbKPGUFGMvpDwBjCtDWVE9uhQQSLiFnreSikgPnbG16jzC",
  "key12": "3px1KFmCLpmxrau7uUmGpn9voGrihX9q1qyAEFcNFhrN8Nja2rRipeq5qykTHxCL6SgGeLUA9ViTJ6WhPAbY1qqy",
  "key13": "4qQxKP6bz1RoMUJb4hrRZdVuLU2xF1dAHWPwkBByFNhBqd4QEY5UPMk7aHAKDUgXzSEd1Mr8JqciX6FpS8p5DssM",
  "key14": "o5JNEabr2heYhkgKjkHX8nAn3ZFbaaPBXbQan8YPiycK3fzRoigx3dRK9YVWyQaPGZcB6MN3SFWCvf8KFU4Mrg7",
  "key15": "2SgjHNUXhKsn9E2Xi8iisKjNNiTZYcRUdTQrQw8SXXpq3kCyByPh7EUMUX1ZgWxtuFiwnq2Z8W5BjpgwH5oaZ3kr",
  "key16": "FFUV29awFSqxYgK2Jgv2CBHvgKnm6srvMnT83eBcX62fLN38maTeSG5CZiENE77aqe7rqSA5ZU1STkGmjYNYkLA",
  "key17": "VkinBH2ieUm1HozLFNWzpUHhMr9TdujksXRSwBMhbqo8BGcdDDcxH9dw5vbTcdBQc4v9m5iGdWezEQJk669RwFd",
  "key18": "L2K2mHrK4qAR4UnsEQRDCP2zSrYo8J2QZPC5EFtUjVaULuHkgfmwUZ3sDhMYhULr43aBcjqXfukBEPEYxg4AVFU",
  "key19": "4sPE92TfoPxbJgqGsuKX4732obN5stmJomLZ2TM1dcLqxxNChswcz6aW98aHVFbknQtDuHVbaf1gTSuPukTNQs9A",
  "key20": "67BHMKmJmR1yunxjPqurt5Q8Dq8f11g7ubqzU1jbWn1gZ797TJCSjSGUd1MKPsT3E4Hx3jDbiZAqpNYAcXCTAqH",
  "key21": "2jNBVVru8w2k2q2ru2o27bWmh7MPH2rD58BC8yBbqwuLku92vGBoHGWMv5XT9ZtVKp7uso15oCR9NX9WoHYazf98",
  "key22": "V2XruhWSvTqwVdGLeKVrdxo1ZEHXqhCPKoJyorjDKjTThAffJrgpMwRBETuEiVHQ5KFVVCq5EAG1uCLQrgQ7Vhx",
  "key23": "3TeMxpE5W9R3QFJAjEzZDGDuii9YHpvFyAEBkcdBosbobvSS2QcWGFTb3fuvKVuAyfP7rEX6xc46BacaTw6DB3Fd",
  "key24": "32NKABH2YyjL56csuR81REH9ovJm7X3Xi3tCnmf3EfhkaD7LRR82KuttUx28hPaRSod8ajUpa3S9TVudEes7CNaN",
  "key25": "3oFvJ1xjWozRd1HLfcAG1mCosh2Ct9pi9QnyGkGcKybNWumzhEtbNM1c5vxKR1UKPtNG6RAm3GodyAUFo5dZNE3K",
  "key26": "3T3HAgLwgq72c4Es5BaMjMBLykV6osocHzzGdTeKpCq3FZSGRTJpmVuRoghKKxxJkCVgqf2bG9SSbA5TTofbsg2w",
  "key27": "3N9KDWyXJ7DXASYiak99nG9xstAB9w1CLdosN8xo2oGvG2FPqp5hAFfHLN8DPzTpVqzibNtQcratCc2uH6pCsoU6",
  "key28": "doLrByT4z1wV9QWiPB41XqL5zwV519yFi7ZDfHFmEf5RSZDmiYwsg1uRrNp74t3qAYNNVwCbX1P6T1Y4C97HAi4",
  "key29": "eNUWzFSd8CqpxXLneCo5vEuw1kXT1GG9Uf45JjBNG1YQduvrPj9SA65NY8r3xJdCorpX2KiPt3Lxz6fjdCnPwWr",
  "key30": "4acW6HB7rDN5MGja97mjRiEr8jMQZiycnZfvpbFkZowe2xu9kDSNS5f28GgWzBbATkz9M8HuyMGdHzBV3oPH2EtS",
  "key31": "53gem715ZcaxgNKkTGWKnHT91sX797S2eUQcHfnF2tVjmHjkqqvE2B9haHQiJCVy6buT6ik2bRunsyNjwpm66gkF",
  "key32": "5pD7XY2u9TnPPF7yJe3FkiN95e4azAtpXGhfgRnMcdGXjAGvwJ7QJRT3frVj7qGTGnUayEx61cvtJ5wP8uBExkVf"
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
