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
    "4UAxwn94CPEJPPBPyA2LLneLP3xzEsY9jCanXAmEv4NCHXQMT8qSFGATCuXfBcr7f5PG13M6FVCGAyVGaahvKy1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rWFhbwoxgb7jpT1uVUi6n9j7ob93opVQzcLTTMmWUd1gXgAPTJd6hDR6R564gXxwgbP77MhwQVX7HKFdsLEwBxf",
  "key1": "2sxNUHoVGHR2rLL32nmCbUsnE1T9iFNrWi1FQxpMtU8UNm1631uwGjfBwsRF3q1cBJPsuueKnS26c9em25sksUHN",
  "key2": "3so3xG5X9s7ufPQXRurE8uWc9iKJf3exDsbUNGMKjW7UoMq8ZzgRNPpqDqmx7aCPTN9NkPJLZMPg17tRjN5aUnG7",
  "key3": "iCYftZQi2jJCTBKZ45UtuKdjKmprEiSLZXfeXjK1LV5KuXiBAYJAsXAQZiQLGcpXy5KusW8wp3UWcADyeXfpJVa",
  "key4": "3hynkL6CyqrqA3qWmU5RUnHJ69PT8nmaqFYeksDwZNR8r6UWjYzojLxyNtFRFE8NA5b3cRf3xeXztjqYvhyumsMj",
  "key5": "2cxyLEvvU3N2oB8iysi1PnSEQZ5dHbyTM8wqUivqnFb7hQNMYawKgnZYeUZtjhTxo8kdG8eic5xXA5Rj65xaaJZF",
  "key6": "3KpramSM1LKDjgfZhXMTvskHVrsQwEmuPpfjQmmNd3hkpPxatahEpsGFmfJw25Qomf8saFhNCqzEpFhbyZH3k181",
  "key7": "3UiQrzaRNNNQpNsJqVBX15ATBrnLG7syEd9o2vESVaLW7Fy89tfLmsKk7BjXxcxTtTjTkAhDXqT4DF2K6t9qbFM7",
  "key8": "3WJrAw6yMmXjKzsnaMpwVJJQGrkAuqggnk3T8rKuLMsehGtXH23P5mNM6LUsoynLcUMJAoa6zfuG5we6D7CCHUHL",
  "key9": "3jzwDXKqKT4bbrMHCUTTSjYmHkpvPQEGg6uC4NWQivzQn95W7F2U5GTGzdQ3M1uPNUpzqVkU4B9uikKM9aNXTB6F",
  "key10": "51znYJj8zhW9itcDHQ18kka4e7U2vNmzDzZut3sx7NbiKzLxC55Kbwtkznn5RdmadsFv1mBgEuRBFpAgojfaPZ3F",
  "key11": "3A7oopcSG9QgiLPD2Lt9QaeP9YyVGhceXgdx6ofonDdCdjsbd8tnWh48HjNWzyzWYLfippDnN1nJA3oK81n7KiXn",
  "key12": "QDXNhsxTFLVNbmdJhnXme6yfz16A9pJ6nAmDv8X64PnKd7kfvok4gZs7TtNciPysvBMgNwtbTnvLXde1v86ZNG2",
  "key13": "3YwFX51dApii7VX16j5cEH3pTjzNwzhFHSKSuqrgpFyRXupzXGpDjsEqkBHoLuRY58HwTyzomXnf65K5ToyVZuLh",
  "key14": "5Aw1HhiQDSYem8UAyQjTDgV7FhRx23E5ss1BnCCm2G9SL7VVnTvko3YmbtZAFeBNmsPWyZ61XcmqtsTkHkYxU8Xw",
  "key15": "3eDz5XMC3gTasSjJPSD4VMAvqJWoCuEkBtYFVfeqasSmmt4ksF93cf4tLjRG7AUW2BRGjV7MjMPMfcqKEQkoB2s3",
  "key16": "3idBNQ5VuydpndzxDMULps6LG6weLvYZhfDmjY2WLJbzN7kqfrtrAn4kBSHYbJxCXt5ze6DDmThBE1DBdTYjUt4D",
  "key17": "j5BonPMeQntUpDgsqGg5uZi47LBEUPpUF31AzWdxU6qJqpYiojKjUqqNdmf3YYW7LCw2zrrHti4N6T5py893XVm",
  "key18": "4ANBQhghdTpmCHjyp9FS9hB5wg893jneEN8e1yZYgNuNPmGC6W3PFpYnyb2oPYA7wFptfQgHGVqcNwyx5qVoApRi",
  "key19": "5sdmZig7K4FkaLaTCa4wnvTYD5R45YTatqKRuWbTWvmHeXo9eMPnibQEGtGGRe1ffK6b3psLQNk8mbRymxJhu2U9",
  "key20": "3h2nCR4w3LXkEDkRcEaRREHq2CF62Ykufic8nRFxb8yLZS5yNDhbuTLuPjyAVaenrLverWWFjyChCw9RKkp1wRwR",
  "key21": "2YKAv6xFYSp9z8E9d4EvogVoCzXfhogsx6xX4hmeUqpbgvMtrxuBjf1zpCcHoWhukTREwzzEPdXzfiY4WQuD9z2y",
  "key22": "5h5KkLbXFhqLwUf8bnigyaWkuFQ388QJmjKoDcp1etPXbppsJ9tvFMGrsvxt3HEVbpv4pabS1XKo3uPNWQHByYBp",
  "key23": "5WbJjzT2YpzzfYEL1txHKgGSwyMwNzB1xfZ66Bta8aen9NS4rn2asMbhk2yEAxaog535uZo7NpXKq3EgRsVb3hrw",
  "key24": "5Z1uSdTqJkSjuWbQABbQd5enqZgLhhWMtYcVYRsgUMJnanSig3wvjxYbiMVSEQmsqPU7Wp8QXyXvmbVLaDr7Hrk3",
  "key25": "pqdhDa8AVQ1q9fzATD52juQg2s2iudod1EzXe8vhzuGvrhsRUvwr4myAKC2TG9q8ojoespRXBzfqXu3TZL9vDo6",
  "key26": "4TDDG2Rnu1M57gACnP7G2kciLUZ6PRJ9FhgK9W1Joz3Q74TdVCqFjpCNQHk21DBitSc1hXVgsB6k6bAJvt7qJvLV",
  "key27": "3A6FtmZWCQqwpYYS78iChK5mtSQZTHwjC5mBZYM18sPwTA9Z3yVgK5oxGimCkS8e5xTXgxzADnue225a2sM26aeW"
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
