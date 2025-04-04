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
    "4G6iExq6hHZDw67TwnnSMF8Y1tfzpZF8aUfqYKJa8vFM92pwCphZfB7qTR1WpWs1XHz3MLacVRAknrxmXoAzBcTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GjjQtZfyhueQuQYHMtwcc8WvcEVP1LVGXFBxANYbZn3M5NfcQ4DcVNKSfMrsjnsUixF1td7UEanethTuEsZdoRc",
  "key1": "5un7tK9PkbkgNKUVAmwJb6uyhY236AtNX9f6SrHWRCHTHRaamaZdkNQ85V1G9AVvibbDrUKQ2EVWYHx4PBPy9E21",
  "key2": "4P6T3BQbFc1wKCDZ6PMQJiJNxcK17cxzsz4ZYA4kvhbRozLZNAjGZZvqn5GzcXpLLE1yMfXUYVrMHHbcv5pNyurd",
  "key3": "4sjedMszpRATBUT9vxdZNfs5aFS6xiTobQWet8hn3MmqH8FHvMHDZagJe2EPV3EHW8adHD1oePRVXf2Saj79LSKv",
  "key4": "345q5SdFszECjWbKK7F5vxtYqAWPLPZYmKa4HuKFrZMa2DiyiqJb1P5thzJpzkDAHif96dfh1CFmmvpHt8wcR3vg",
  "key5": "5NPbmczwUzAx29pddApjVYPVRaSax4Afb1z4GkPX8ZFeg4Ng2FUkR88bLP6FwwDswyE4mp94qc2BbqPiucBXvMnm",
  "key6": "35uXvmLHZEWmapkRxb4Bin6UDep6d4XvJgSokzRT5gabyt6V79ThBARhCwVs7r5NPsvgWbSQCBukwx4M9qwsmEuU",
  "key7": "59qdCH59EpFNzPX8A8z9rpPZGExVTVtVuKwpLkhtGDhKJfNw2XmPpv69Wwq9qwCfggLW5BDwZWxMYfKbreKkKDme",
  "key8": "2FR4Z2ip9h2FeH47JzFsQSJ2aNNfTn54UgZ3YY4d9tiETSvZLi6ZYfPVECWkJ4coTiFVg5Rpbs8nQX4jEaRj1vQL",
  "key9": "5Gmyhefp2Ada94G4Qc3Gx61jrkocuqtDFQkA5itAunyRbrwDbzHY5soLXVwFU5V1zN5Zz9SJhn9inhjAw5FX8JYx",
  "key10": "Uc15DMFz4qmVkSBRCZ4HSHaDhCeP2W8DJjpGYRSTdUTMwe7ZSnabxmXzu6rnpGwT36pgtnPGfiH5vbPuDnNGRZY",
  "key11": "2kxcCuityHWswU9CafwNbRPuke1EszQ2YAz1p3wXyWS3itxkPkWvPfxpKmq9NfCoV2cCkKrcWZAB2i72aApV18ix",
  "key12": "4XvDirYzdwTv961dmbFFmDjM1ojzYtWCqz7wApCE1VdE1CzbaPXrLKH1BwVyPZDqqbS2xc856fxAoJ9bHcvSnrq1",
  "key13": "VNAGhW8xPNfFJn1n1cGuUR8ATF4MWbiHJzdTLBNN5um6ZmKLKBA3gh2b74f6xWzB6kKgnFysBt5FHqiAPdykVnv",
  "key14": "4Hz8JuRSo94mT7p7tsUNUyo9Rp2VoEDSnhLD3dVECZTsBqBVGKoLJVx664hjuWmQanNc8TTbM7xxW1UZ7kaC8XXE",
  "key15": "KKArFCSWe6tegeqo84DtYuUkZByTwLDDhF6FTW6aUmZBvkTsLVED9kJk7Asj9qqkMxtfP1PBwTa18WBh6VkkbhP",
  "key16": "5yRWfwLLNN72ssAZouAu8Snfqq66dar42EUghxnMNzChatBEKXGxqyZSXhUTxqa8Gy4kWEPjhz7ijdeqMwiUVSKB",
  "key17": "4UYkfdMfBD5FCWSR1ewghrxcUnLgxoV1kW3edijEG36zCrYxgRHtue1RQDjHX8BNdwiXoLqXey3PoXq6gcHW9Qyd",
  "key18": "4TRK2XkwWbgCadqFQa9raBjQfQiVpQUacCPvRPtkXAPj5zMyanPuiia41gtGVTfUGUemvmCTZEpUSFrVMsiWeWFr",
  "key19": "4kjohPknJgkcmmtnuJtJ1P1QvLdfb39cNHXfjLhB8K2QPxvWAxAkU4piNxr4miVHudZqyXBLnR1dq4LY44UKyr2b",
  "key20": "uHouNhoHF9ZHxdikCxvgFxwpyyqjQb7fEEYmjntweX75LUffpEVKcCPafPxbnn3rtgawUm51uLAah8121ZYjUpJ",
  "key21": "2AVpDepniu9zHuVr4EDjsKrZYZHNfxZXbcKhXDgUXdWhTrs94Seq5hY74a8LwJayXRLZc6Xng2JfWtsykRpHTEd9",
  "key22": "5kg168VtNDZeEsyd83rBRucH7Ur4kn72Zif28BXwWs797e1fSCTXSHzudr8D9Hk8TiLmaZR2t8VLZ9zZE3hjJbte",
  "key23": "3pk8puomuS4JqUjoe7y7or9jYwzPTnzUWAQTpwYSKrdz1pAPwTR2DQgYoitFnDxmSqBNwrJcDM1pUGGBDb8QdjvV",
  "key24": "4ZWTmTtimELP55Ld446ZyzJp9BhBWah12Wg5WJaVQ8TsSunwX9xwgo11sD8w5C7KrnBhM1mfm8zAkmwpfZZLyPHs",
  "key25": "4D4xgfYw67fGTM9YAbUeeqKCkmmkq6CaDDgyi6ewpgGbv5oUZkxAfTsYS7ppS1qgG3WrjHv9PCq3KaQ6X1n3oza4",
  "key26": "5QwRLtzaLEN126x1xFA5moVvJSfk76EtReARdJyMGhJoYp22ge2vnMZrg4bXwUFCsxPyonwjKv8u7FHdoJcMGaRL",
  "key27": "54Rd7LEQ5ZDnHSbDqhzswNCXnV5w9PsdGhxQoxUzLvey3c97hFjVqfsYdvbXdn9jiQUgc8ueeT3m2WbcTtFW4ZT7",
  "key28": "ASgkRK39yxkT8J5xSMz8PLCrJ8E44wj5CSNr7fzUwiuDHFpWhM3DRn5FtxQuyZDCFWMrJVcaWhcGeWPzRYS8qoa",
  "key29": "2z6HpZJmwGoF9u8Qaf1f18vhGsB9bHBByRQztEV8NeR4H23kBUqw2baGKmtrjr67rrYDszwPiqmi3chiXr4tKLhx",
  "key30": "5RhDS3xTdvHDcqQ4CRXNMRMq3GUc5WDU2QHjRHymw4UN6y3VJBgzYQiePCE9tfQyLVdLcsM5j3fj57pjk8yMFcFk",
  "key31": "5W45vwKWfP3z846LrgQJU3J1bi9qT5YaPxj3BH2TuzZPeQ8an9vzdg28HebGb41Uvch43J9Z8JGKTuqsWEZ4HaMT",
  "key32": "mJaky6hZJFMzXiVNCgX2AmkDAVcw6GAT5QwWjYB1h3RYJSLfDgd7B2eGBWQftt2gromXhuRVgvm2HwcenAHmNWg",
  "key33": "3EtmntwePy7XvZXg84GXwGKccjkUhqSo1DX13hGFYLx8S7j9YjcjvRsNB8g3gA5JYUs2ugiKhXrx5t6z463JjgNe",
  "key34": "tbUPahMVaT3RdHju6SRcgUaQL4wHYqFru6KaAAr4iXCueqL2UYKwXyFmoztkRGBWv2pp6bRoYvEsX4nRy1BPaGW",
  "key35": "HKuu4FRsZogCVRN3HdQk7iuvq7LfGjHQv1BXt5t6tJJLATtexNLJfu1mvtEaUYWUVc1APPJiirQyzz2taUsZ5nr",
  "key36": "4kJX9ofiGMrJgowkdKEzRSLJbVvftxxDXucATx1zBi8MkfeHrk1DuFJxRNVho8i6MuhmBVEkDVkjn6KMQ8wxhbyq",
  "key37": "Xfxcm7PA81NoomQ7fx9E1c6Me2SWPXJWFYu7bDbLCfwyon3oJGUoSTh2HHNNBpesRp1yjrtKrZ8Vs43GWY71NxU",
  "key38": "43MS3E5uKB9kLYbXEjGx4rARN7yzFTLsji9cJWb2XaXn171fmWjp2F6WY1k8uELysb6DqZRGwdF46WYtQQfN91qj",
  "key39": "51Y3qxcZgJKu35o6pDdAxtmbCpv18VDxTYkrfZinPZga59WX8kwaWxBPfNHD79mUJciQvbrJQFhAF5HP5dzqJHmZ",
  "key40": "kwzyZS1DmcqzYpNAVCjgBWkdQXiMsBuoJTNQuAWxgT6dbQkAFvxgFXaQyFyDQuQadE3biLL9JuW3Cxd1zMBewuH",
  "key41": "hrQxVzoN4fhbJQVUyDz7GorBznBsxogJs3kGjWaMg3ZHWGbWDK9cj7CyVuv542vUTDHgFGqheFGPAALuD4TUG2N",
  "key42": "3cUUwrFJXiNrm6drzLYwKJPZCpBqofpVSesKfpyUVnb4xwQz6Jeg2ZhFGpCBadrLj45qfPtH7ybtTruToKXTDTYB",
  "key43": "3sLpVjyqgyxupEyfmEkomc6SBdVe5FUv37QY9jNG8HF2c2B13kGzybDfnGn3QP6mBYuhMfJhUEFs3Z4jBJNNG6Xz",
  "key44": "3peXZ6CgMjfMKPVT42a5c8rQaH9aJGRFuhcmMbtVmvALyRpAXuGhetkp6s8Fyo56uebieR3EKGLDAMcaSCXUsqxe",
  "key45": "3PMohLCSU31HjW2fmjJVjyAzY1uE7zbwqU7Nw1LeTnP1tib7KGQ4RfZSnRaEkAksrwPuNy3FeBjb6jm9vGCzpQsD",
  "key46": "5ZvVaJ1G7CtUeJMN6MUuQaRkZDP6DNjMKHSCjgLC53qoCh5yBnhujEGN4xsKQYYpSPu2UqQZBFiM3eHM3UaPr4jL",
  "key47": "5e3G8pU8LohAeNefPBD39nVVsTqJywLdpPtJe6WiJBSe8EgiTbeQHUnFNfR82kzYM3BCYhd4fFrFPpmXWeK5qNs9"
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
