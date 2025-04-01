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
    "4Tp1KyV2QLFC5KBaJrpurzKRQbgMunMmZGdKyxxhmeyNX74iGJMqwb4nhAArXniJbno3RaWU3C5uzNy4d3axzNVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rxxXBDNUN9rQM9sWF4dvZhx4Aj21pTA6Ey9Q5XYmwzMiGuK9kT65uLx4eCxuVQXbA6wshtj4XCgoNYL3TcExFB1",
  "key1": "2xRF8kuEZVtDJRHMDARNSK6A6zNb1aFcDxawmRMbxwvjhuM4pHEJRqHwWCdyuz9EUmfBveyXU9GbRmPB3p9rRHrj",
  "key2": "4tt5kWcsuVhnZHHaKfpxa9yrfpH6zq58ZsyYBYsPvroquiWgN1SyW35v7mSxq5drrb2PYnnZuxzLK5zWakwfu6qW",
  "key3": "2ohuzzpTPmy5n93UsXZv64Pe22B7ZNJFh8yozZVZdQ3kXnaeHSMZqLuynwNHJngKoyXrgXGhiMwWcPfDgJPBALSC",
  "key4": "3QSFk5n9kAPFPdYRwqHjNwGuPDBXWmhALhaadETHVoQLrWbAwmSXPAQsok7U6r9GzV3LYZwd2PgJPRUiT6m1Bqk2",
  "key5": "2PpjARVZVu2zMh5RawBGz2wsgTVdnu9eLQ6Q9PLeMh6sE35sGUDuigp3Za1TDrND74KtBcSrFA3wc4MFf8KFq9E1",
  "key6": "3xfvjCcjJuJp9ZMNjAafC2AUV4NFPYa1qfAr7JUKoGEP3fNnxo7Ym7oEspgR4CNQu41c2bdQpJYuH7842BELAzbu",
  "key7": "4rrWbkgd2tLERJgdDnGkhMQMKeN3KhbeVxHf2Vu7sFmMxx1cq5sHce6ayhmrihKi9w9q36W9UrBtvg5rV4Muw4UK",
  "key8": "5NjJ5AZ12nt2haPo84Cwty8rRT3qMw5bmtBLkVnKvsW4NGfahorqi7abexgqHLX1FPcf93GHPUPUug9v5ewmiLLP",
  "key9": "obG4ohQLheSfRF8iYguZMKszeAwhVvSdFrMsD7YPZF6ARVVjW63u6KmpmXBH2gt7Fk2oKJbFeepZhwQyzMcxhmg",
  "key10": "2K3QCsuU2b4SDXZYWghRgejxv9EdTGxReGqFLMnS1SX8qEYVDzFirdKboEe3ziBZ3Mq97vf9j9tmZamQ7af3tcM2",
  "key11": "4fWxzANA8cMEySpwD8YJ7gDBijyyt5Frg5TSpQeyX2ve8vAgw8VGzDbBCocq1ai2NhGpAmRPPFZDSwdpULciS5Tu",
  "key12": "4zhoaVrGFnrQakURP8QZG4gZowdcknXuxyA5A6nunnxKxqyM8CUfgu3YQVocG7V9WjW2WLp7kMSG9MxJUwFw5u2e",
  "key13": "4f7ETRYq5RH8tTh1H4jwUmbgkJU8ytq7Ue4iTMcAf6oBpxS3YNZxVVoVcPnFPj9Fw9BaKCYcR7n5oXZYRFV7mVKx",
  "key14": "btvRGFPZATwFLZEyq8cfsZ5bbhpeJzcLR2gGjnXLAXgnGFY3TYU1vAg7obTxYrkbhPe4yDmf49qw82SJvTyEzFN",
  "key15": "32zFbe84F9hCsvgsBvG9212w8KmANMk5oSo9kfzEkFE3M8TeLHyb4NwG2QgmS4yjgazCBmBeA66RwgJNio7iGonX",
  "key16": "2XgN9Pxp3GmauxFTUEgUKicZD1hWJU7AdjX95pDfPpB6Piy7gh5cAZe9GsP9hQyfNA3TBxGhmnv4nJKyJDz2YMtW",
  "key17": "NZmpZNizq1KHmDdX6G4N1DxQSjmZquDtsa3Kksqtpm14GcUbqqX1EBRGrjpdm2VeoeN5GnNFMqxvgpkU5tsB5ks",
  "key18": "2q4n8on8RxFmC4XCv4axC73tbXb8n2uSwYcV6meALcgSsXdG4fuEGinjhWAW6XH7eraNFbDxRXHyNb96urzsCC8D",
  "key19": "6ou1pCoSQuFZBNqdbmzGQVASgki8B7uh1NxkfgtEZedR1PJf3X4JopRAY2hmHWMoWuGKcsJnPqVovqD3CqLcXPe",
  "key20": "2oW7HBSdWtvtbxBcdWKQFTvQoViNXeH1PmoTQNgjBgFcJZiBneDzPZWhjVWxVC7cGMdr57GmGuF2hzNKfh3EJ1dc",
  "key21": "46Efuxo5KQ6seoPJYdFhgqtSjb5eN9VpRWWKR8mERFjV5fjHLUDJDrmdjB982AHgTNX6MuSicLiGa9Mj3Gb8nRfF",
  "key22": "5pvX1fjED87pAcYeWw36BSQsmqvWL9vT1c9JNFUxDEvg2N6YjYjGNzvzh3PLP97jop9gVvGFxxiCncDr2YJ8RQYV",
  "key23": "5wdYEPBkoitHpiFPTZy4q71sNZeddWqyacDjNji3q5xyoBAWRgVtPU42V4houEzzMhfYt5p58qLQXLRdAuRAwJr4",
  "key24": "5aD9gFmQGgbJWNq6YEJ9aoWgpvqN1hVUtbFqRgjiJJ2SfxaScdyGTEDBytiDHFhmTa3gJqBdWvUitcy6EgSGXCQc",
  "key25": "2Yy4UFSwc3JbD26SBRqWuJBYoSdKaCdA2uV7h11k9Y55m29CNXft1oLqMptprZQc6yz7HG87K7Btyyhy23j3R9Nr",
  "key26": "49UnDomZPu8fnkbNz6mYs4EuyTTysZbRyqDp11wU37TSDhnaXH99YZaEHka8VcHK81W8EJkLtX45qQDTb1SfAiqJ",
  "key27": "4tDRUrW8QgJQyKLsmP4AvDe5xkYUpPpMocHzSuwg4DJY6e7VovKCGPA18q1Rgv8NCQFRewjWNbiwwvC1xsdM1yNf",
  "key28": "444HSQ46UEp9db5UxmbHB6SpLztjAXy7XQxmFeWrfQD9qJWz4FaMAcTFvh4hUKKPvf6Hijk4gasRmcZmt8wAzvSW",
  "key29": "4oixrL5ufQQGbUebfLWuvWZatv7hAMeG7eTT1TMUCHB7WXMB2urBmKvtfLE529fx3XwySiQm18iKwgnXpWaXrGxr",
  "key30": "2BfFMGeJubSviAq69mUuKs9YyV22CSe9okKjmH8sCtaSxzfawUNpH8H2FR8ggynbRnBaz69Pu9RUzvx6SwdL4QbV",
  "key31": "5cAYT4UVABrA8LXYcwcmT5H41YvyhMt3sa7xGKk78Uq3sfbdCSXmoqQhgPuSpAzpShzXvwWJnVVcMYbzoGKd3hop",
  "key32": "5iEyn7brQPEjpjJVTSEgqbpShijWku6sUV1mRnAD38CFPkYbNRZpypK6JWzq1HF5dS4LMy1BWRRCAbtJGSbh88wK",
  "key33": "4K2MnjKyFi5ixyadqLGXov8RgQRNbjnQdGjqPpr2kxLWPyspVbijYTWxG97qpMN5pGJibvFtjKXVaoYS7AFVYP5Y",
  "key34": "4ee1Dii4fSC287r7nd1ZjXDcog3CwzYtCDHwRjH3VQDxtGofgsWs486XzHk2eHpRnzQeR4UNBPYaM4EFAy3LwvJQ",
  "key35": "5gnW88ndftkaV3hKTvVNpe2WnyYRdsFaoEX1aMnkagrichvRR8LTUSxv8VfySJpqBepN9xBTdCDYy8eR5JkwJMTt",
  "key36": "3H2EFHF5SJDZyk57pujy2mvYv1RnFBRumEGqVhkNV2HzuuUtPm2jfx2LLgyiUDq5pMu2ETyGZYTDGDUDAoUUf56M",
  "key37": "34ymMWhcNwgLAprkNzNkardcp3iicG2XQXTFtZYruWWeXVGHQsFraBE9JEjEqzKNs7q7SefHEnpeihTb6w2nWrqq",
  "key38": "2QwrALxdXH81k8BkyUkWR9MWGpgmwuJG1UHEjV7aegR5SLhJCThdUbjWhmuU1rMW1Neu2PoYkA7UyW9vdNHbPuAN",
  "key39": "5qPtWRxjfrtc1UniGDcY4i3orWo6HspyXZiUTFR5cBK5hLFtqtcWbUZuTRoZBsf4w2o5ZdW9DM2scr185Ctt1Yxi",
  "key40": "3GcWFixuqpegFQ3BVTjEUja4AfLVnd14pXZdbNAHdZNK2V71Z1ngc5yAaU1bgzs4sDHFrCrxndofe3xk6cvD5cdp",
  "key41": "N7JtNeHPVKBV2i64AuofJ4JZ7aH6sduJ9wHhSrBrqqvmXhe7L57VY8hdDXQQBgGcDEovRkq31c9fDdG2kcZ7LRN",
  "key42": "5n9vfLCGauzfpYzPEXbw299aNzuHG9R21AVrtKeoag93JYi9a6DyUDEaePrwHvSo9oj3MPKtXuz2rQ5UD7NuBSar",
  "key43": "2ahpr57e7P3DCV7zWTDMeDHY7u381weG7kRtVTnvLi4FCM87bZ5ZEPv9YtKE3aAmexKgEe2XVzoP7YXBvWseNQFu",
  "key44": "34VvrqksrFBWZG9gagfquMSozkdKTros6uANLhJMbVRQYFygbrB9P2ynLHgJ4WcDyoBgDC9EDsauRYKdQ7GNHZNL",
  "key45": "3qQbqTZRq4zqiXrZoAazWLpsoyUuQuRoPsPoqj9NwHswSkdv5TxYxjS3FC8xgBNGSzK2UuH6CsC3R5duZmrJrFCw"
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
