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
    "35PxraQ1NhL2oMtgbuYCSs28ymHKzPX8GP9iiCGEc2ms1sWfNGp27L8oYGNkDMXa74RVGEUi4ZKh3kQNY7AYsPDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U71kn6mKkeXjSzaDse35wMSvLpJgFupnVxVUYvxzT9xAVZwqV4xJf2Jq7GYkb3reiyALSYzWMhtNQ1deULY8Lvg",
  "key1": "5anhpyS4SVWExH43ZjAjVmwY7SJYgsiFaYhxSFhy8KRC17QpL7rk27pHxSs4AWW4oRjnAojmvUGtp2ZmSz5kfsNN",
  "key2": "3ubfjVyHeu7fUvmJCtBiY14rkq31f4iDLTirSaow2J7sGXiuhwgZU1WH27RHkkVuDrMaiHuW14Uqek6TQe7q14jz",
  "key3": "t7bVtnqsuXFd6v9tsA1yF2VhQGajWSzSNTa5JYKvabULSJTSAq1dKNPL4FY2MPqboFnc9yQATWxPxZHZsCTu362",
  "key4": "3bWbzpgAbfexoVtRV6JtSazvEmMEnLyse23yyZzfC7AVPqD2LUzb2o4oYCYFmChhFYUp7Gvt9NnUZgUZhbC5yhXo",
  "key5": "2RSSWbGkaowcDogYej2u6WLQqN6kJ8G2jPVA7WJXBqfqVMLLMqiezSxRw9Tavo196wc1P12Ct31SdG95WQNX1Wse",
  "key6": "TSVbAEf2PsfZbzmj5jpTGQArVy52M47ZR9KxBGjESsUhFCknbyhxaaMFMvJAHwWrAzVbQiFENkzAhjSEJkgxhRS",
  "key7": "2gCw4jCKtvAVPNFQzA7FPuoS8VZWU7ULefDuCx2rLMeUMhDpRCswXpGCs6ymUHe2XK5inD2rwydsDbuyzjUmBavb",
  "key8": "516SfXqhdh7ntDwTNrNsKAhAAT8PdcdiGjfr6WetKXv36AJRHYCkcUWtiFHQy58fmyn8MxSUh7KUVVqgfRQSesM3",
  "key9": "3WF2dT2BckRyESCjWKdQhjSKJhGHf6PTQwCSMcdK7uJWnz5AKg9bkuFyGke4uVD5xYyRouSpLorTi1c2TVGTeUx8",
  "key10": "5EueMwXXcbXqVqvWtbrrHnUhDrmupeSr1B783h1gu1a54KhUjk8f5PnpcsD8bhcAZvy8jx8pDa1nejWd4K8NvzK4",
  "key11": "3NXopQhT27WwxBUr1ev2s7Ytzzdg4HyTuAFkCbGPrQ7VZNGWg6uY5LAH6XYcHVn8j1V6qtUQUv9sqsV4vJNdzwZj",
  "key12": "3qhSwFBVYusNFkraeRkNyu6Qufb9QPhp5Ta8beZ7UL2exTZSnyr8R6QTuUAJ8poiwj1SCn2v2GrsTefo2AQemPRP",
  "key13": "2YQYwiMVxp1FXasj9ESBQ2CaFRT7dr3BYBkXxy4XHBhxyibXMb5GLftG5EFZ8AdjhgC5X3JEXXMMy3bkhqrW94SU",
  "key14": "26TXLSAWZaEwe9Cbs3TwK3GAmTUJjmvUVKcDCs9J7xxfVjsuyqPLVDDknPqKXibhQLacgoe4Np6SUfajJ3EJ754o",
  "key15": "538cDkiQ16BEqZE4JaXAPwTYHFKRdsMpaX78dWWzj4gtmU7Tugt2g641wJTACR7hoawnd4UFJnG2nemqPp8t64sf",
  "key16": "3oQwFGUuWHSzuJfTLQWhD2afxTY2oARCfaGwYEZ1e1siqnxVU7FsmRKpzV8tufML897XCB4spCtaChJ2PgCLsr6m",
  "key17": "4dn2VPZyFf3ez2Q2uFXLpNMPAGrsFUZWWHDjrMJfZW6iCVpA2V7jVz3r2xvKc7VGwJ4wE4rWwQzSTQZjs1in8MdM",
  "key18": "3MiAT8dPV2srpj6iX91H9V4pHosdcCFUGUTJ5SF2zFaq7dwNpfABAKCsMkQJBD5RjwyeGV8eeWa6Mg7PoAZX6aya",
  "key19": "4fxtsqJcMpKiSbvWLfcPyQNhFQvievCs9Z7QUUgQGjaRY3FmQvJEn64wJguWNbyNuH4nKQpGidpy8cK2B5Cy29xE",
  "key20": "kjPwD2nVUzYvhvkMjmvb8hTf7fp9VYPu9GRfw67kTZYRiDr8BSRZ9sfujbN17b8RX32LTDhRc3vPWWPF8VsfhCg",
  "key21": "3M524k9ZsUioExsX7Zm5Md61SKoUi5rB5BecwyocXch6eW6dQzXe1kA7BMh9JT53DAx5qpr2wThVDmMQdH43kBui",
  "key22": "39uSgiZDKHR3MdtwR5xcjdX8C2vqyHQX3u5tGSeSfZWkUNaQ44JQ4pHJHj5ioW1bBKCXf1crWKCtAGa7p4gcyX7p",
  "key23": "4RHJ9daLRCWapL1mfgNg7iuMRii9apFaSGYdWVBYqM8dL8frGMJJouK4ZVfatLEbCLvVcoFWiecbToXn1UTkK7wr",
  "key24": "3KBggGbCP4bp6k8CyZqLYY129cVdkkKPkG31bfvQuPqm1hRqmByENqMPJp9p1eVN1ti8j4PQCpywQUES3AXyDQS8",
  "key25": "3ce35mSLFstGAuQRbzgcYMEr5HGwXkW1dP6cRPB7pbno9gyahbNFJG6k2Rdmhjx86ew4h6mLfvmdeS79YF1M55ia",
  "key26": "2CodC2u4mU3CLZ4FhPa2wbXiPRWTtao7kK1q69JNzQVwMoTCFYaPN9UG95CD4hvtWQbyTmszihFdX1aQg4RBvdRK",
  "key27": "3mLHDDihCPbJWA1czKcTQvAA8bVXG3nhze4dbxCkczVwfSfSktJypZgCEZUtGkw2J4LV28HrCijKJ5wA9mAQvzFH",
  "key28": "5vjtKQkGkQBDBAf5xvncCRgg27fqN6WPayQtLqwfjwjqN3h7gbc96cGWyMtu9DPMV8rUT4pt3Diuf1SrHHFETttY",
  "key29": "3qEY6yivD9mZe5tKTc6zDc4hHnQHw6GRPqsSDzriFhxnDoGWR5rBticSjSkg2dCT8JaKZTMCZZefqKLqTUjEUTw3",
  "key30": "9pGP5ZCuzfspKoSU462FG6R2EDJbgebbQHvC4u3JTXe1ZfipkY3fdmWnxnVNxeb2qTdk98QcnPcWBhdt5rTHVGB",
  "key31": "s6hjeGvnM6kf9kngWLMAFzUAiAx2W2vf32dCq7yo845XgVMeF5o1QobwjD5d3fBy1xWJ27iqKH7DU3qCVEXmxGB",
  "key32": "47799TpKicTEwxcAV3R2ZAhZEAYMJBUxZ6JvAdSFRD8PAB9PNSKqvR5K4jomZPUi1FRNz7BUKzNWitwDzq4Jfga1",
  "key33": "2WqsB51bHNdHK2VHYfswHk4wf4cYt9xBHrfMPL4j7wTv2X542vt4F5HK22eNJjjb1WtezQ9LSZCPw91PrZx6p3bS",
  "key34": "oqSusHoWRVuze5rGnn6huYfByrtkyCKhpciVCamtme3R2h9GGmYrh8cqe5N7s668Y5UJMVyGE8EshX6XNwcmmBa"
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
