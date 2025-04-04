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
    "4owSLToNm6cPUteeUJz4nN6wUj4T3LavZ7i8dSUu371XxSeRmFoFnK5rQuVWavNeP8ywvatcd9oLc4imXrEkRBNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fHbZSRm2jiNMUp7RQmqzi27tn6BkHtPZHiKKnkS6JXrcFAri91Cm9iVHLMU3MvrBxNY4AxaC2vzQxWR5yaLmBRD",
  "key1": "67g5FDjo1u2tGZMoadAp2LDGtfnpFueVmEeXvMpxubw5q2ErPc6qoik8Db6y9kJ7uFPqfjASFMEWo7gNqCK4jdMM",
  "key2": "3PKe1XwE6mx5S4xHL8Sp39AjL4N7WWbE32EoJ26e1NgCmnRFyZr3hu3keBRda87BLvkJgEEGHuaFkjojbsat1Fcq",
  "key3": "4EXfiM8BUgknPonGwubyvifLYs45ckMn1AL1w9fTBKK62wz3gVV6NG21kL4SYSLZZHFuRDwSP4aFwyMk7W9g4NYE",
  "key4": "8ZvdtzWpLyrafHdjvmgHr1ARiRgg3cNYR8ght1PmGPMdgY8af6RMspNY2Fd16qiFN9v9QycNiKCCaShfoJLcBku",
  "key5": "2rE76Y4TnUppwG2qeDEVtZ1ej4P6T19KtqCHhiHzjxDnVJDPjXUkt4DxXekcfeufbypmFMRbYGu4JYVF2V63qyyB",
  "key6": "gi91HAzrUf4VeZ7Gr1aFNQSDeNeRJtBjE6vJTNjx7XFvfLYwCSP8RFMSUQSUaQ5aR8HQPF7N2qcp9QuKcKsZvT9",
  "key7": "RKDfkNQMu5fc4WKBA8bHfEk1sg48L1kTfYZyM1ZhU8ftH9uZD9qR26v5Uow1kSpaLLNmCw65kevRv8NvDoXSStr",
  "key8": "52AZH7ejjLBHG9L8L1wvAcwU43U1mSTCYriwhAKPhGsLtNwhQScwWgLqg6xMv1Q43GLw23jUaTXvSzfpKUmxLzsk",
  "key9": "4J6SrPtWLJYRHXCnHNrcyYT5gB3uskVjUsT7izYAmb5jxZQqFWkKaxLJVCD4qGy8GRoKeLsTV79aaBG7jHMf84Zu",
  "key10": "669jvLDn4Mc1K9Rnqz9c6BXQKiB9kGokA8hjj9AVuRXZaHa6Auk39d8jpjvPYrRsR1WzR8g2TDnjUE3pomgp6dND",
  "key11": "2DNQJmeXp49aNaFPi1zfsbEPvLftXpgd2jrkVTBjT5TtJuunYjhjBEUczSURg16sdtLByAyG7yqXLF7v7yvJjGGp",
  "key12": "4ctTN61d3AMNLZ76VwAU1Y45v1mvcTcafmVwwYgMfwV6X1QzTW1Pj94cbrA7gY1kokBxUYQMqfhn2SXnXV5zLjHK",
  "key13": "3JDra5n8CmvDzBdkD7kdgq1metXKxj7q3LmTxrtmGNqpRLcD3xSeB8BQccjwa9uTgJajaVsUHitKmvqwqhXv7CLe",
  "key14": "2jKViZBT84pRUsUfjaT3LogALjv3jnZruY8NvTShG6Cfbi43iBtoos8Cq42xH1jzjjyg8FF5S5scFicUuba6zwwP",
  "key15": "5ePxoQaFTp6sUgVNRKJ1hjmmNdEgE3ezCnJpWPTHMUA9LMYTze2QSqmoWbmSBVAhhFpjugBMMXCea45Ze1SLgkTY",
  "key16": "3B5varZKnPD2qqdpcvVmH3E1BZGduTAiD443BXXTDmwPPDnVVE7Kihx31RyrXsJS8t6URu8CrPn84fQge58H9YeV",
  "key17": "cPH3ihio2Pvqd2xkwGjbC6ovz4d5TKyiMHP6UqMbQZHZdVNnQjVvig1vSGJz5kvDvcT5RE9gwJbpafAKDdN18FQ",
  "key18": "5zySQCeQQCHMSSfHbgDjXRhbEiM4NyToxtHrpAHipo18AAonFQv6iJ41iryJ8UobXwc8MNSTScxKksUEgaR7BXgU",
  "key19": "2d3mNpf2vDjSUboygxcRPwEPndvhNi3EkYZ7VmG39sdb5wf4qz5tcMRNjiuPqWJ1WEC9eLu9coKWDSZzZEZoPz1p",
  "key20": "5b9nqH5qXY5q1moDQziKw1Jw8BeAguZWEYMEHZ2JASgGuXczaVTrZj66xyJAKFYEWPxvFadagzfnEZZm74t4avAm",
  "key21": "2LqGtMjfN36X2Kn7sdkg6n4c5Pini8c7EVpnr5f3LTqeRWtMQCd9wRC2kKi8MurxLAUJSCHx5WnGqYcVDMzzYZ2b",
  "key22": "2cJRj5oZpXmpBhyW6AEoYQeriKBPzrWCDvmixmQUnpyyKogSCgiQZ3W4qRqffxB4agVfrAtdGqVohiGPtQ1EaNri",
  "key23": "5U7aioH6ifn8T5Z1qZHCE5SoBBf4Fc4Ka3SAgGBiKCCcpFwxgT3Tfk697Eo5jCsc7uwjAez8JiYie3cvkqs4v8jf",
  "key24": "2or6eii7E2DPEyH3rd2NUXhZyquJgMvfFat5Mw6JqT6dTSi6pvsVN2xbDbugZRgXJG4iZiq251vA4WEwN1hwv1BU",
  "key25": "5pf7hrk7oC7yS4Cp8o9HCE7QGH42NK9JZADnhE6bDLVc8ZLsTNH6cKhbT2P7YuLoXrV4iTyATjfB2KFovRzseSQM",
  "key26": "RXcEr8j9boKhV4zPBSAsJXCUfVN949gPx4HURJfbdZ5hJn8Tc3B4i2aQFQ5mLzfox15Dnc93Ru1xcPznh552stV",
  "key27": "34XqrbwDAfku3tYANT9cS1rhu1PKVeQRdBbjH1J44LjeD92XWPJUv4jaSjcnwPKk6oMgMMeJM1nsxqkfxBmJ3eq7",
  "key28": "2gXov2YT7ui9ZFHxiqmXTF3pPtp3tgaPs5u4sotv21fTSha5UoVqcxoGjRsmzz5LFyADGrLdey3rMMtSSKnQFsvF",
  "key29": "2gZoJu2m42WhzaE8W27LTe2Lh6QFmyRZcRxvvsyRYsMRc1YSaK8xbm9WV6hNFSLbnrKnpfRjLLdR78YGAMp8yzvt"
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
