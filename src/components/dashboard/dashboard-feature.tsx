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
    "CYA5zcnCEPwMFPJ4StDPJnuPX6gXTDqsLhMkfvzNcuhskphsehVce76TjD4LgA7P1PtNuFvNLersPQZnVZotYWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UwLqV7Hij18mXbrrQdV8TVUpd8ZW7NQmtV3CFcHnaaCyq5jAuaULjdtAegJ7e3zmDQHNFrtYhxHYQ9ZQhQL7oUM",
  "key1": "5byrxsm6X5ytm6Vgu7HgVuUEuCCs3PTSXE4RVZS6d2LCHgFFnDSj7SJrpybEaUnVdtjVV99iQWzzijeqQPm8jx6z",
  "key2": "LFvb8Z8MwGiJMhqgyvSmVjsUYd6wRirVGNuFxFosYAQFz9mdWWgGDisuPtnFcx1VbAgFfP8CycwjCtoV368nv3n",
  "key3": "3yEpa7rxtFNwGpjDW8UbmeF9QPzKkEpj5o5EnpDEUv1XCufy8qRgbn2uLbmSgGr3XaWHb8C22JQ25raqVGLf2YXz",
  "key4": "4Bb2RbFSkwVnZrdR4Hamt22Sfh6nw8hCLCsKFJ3KADVtRMyyH9s1A9HtGNyK6DiiB36haZ8Qa7Jit6oV2gjQaXYp",
  "key5": "5Tec8QWePG9Ac3WUyx4MhHDv1qwpHq8eePtrvPeb5r3kzxtGHDsjsuq4VRHyPhxA4SV2oRXVQjAATcJbiRPeb17u",
  "key6": "2P8x5f5GQEWTBDUsNWCxjvDAZQXy6FbaZRQ24qnkFLD7cAFEBRZU6Q4k2eJjHYHAcf84NeTDhEiduPZ87Kpum7rh",
  "key7": "EaoTMMM8SCG6AtPFF2w2WPeqoFP47p4JCgxJZKPEJC7WjNrXD4n8uPzVsFw7Av7K1GmiAmdHuuzVne5JHnhupLp",
  "key8": "4RzVLkrbXShKayf4dvL1nRV6Fhp4MvhLck4hF4GoniSfgRUzErbJHwyaXuRgZgwjKUFuUA7c2pMifCnVZD4PYSfi",
  "key9": "3WGYdPpwHe4PsPPYfy9JYiq2rKwMj4vF7iTqNYhfstWMmtNnEcn2hkeGVRroDinBVxs6EsVbAfr3bKEPaUzMtwe6",
  "key10": "4QjdDEehZgGzTWjFRnBYmBinGJeNBz3zZhJV6FVpUkVkRuvPkXgiUVemUnYUhbtjPVTxXJp8uqYsKZshRwFqQa3s",
  "key11": "tnvHkwGZcHVyNNmWst5mCf1yjuzGGBk4L1ayEdRyRMJXegd6mSZXkmfRMQd2RkmzxJDW9WBeihvRGSnPtsTkMF7",
  "key12": "4kX8Y5ftRfFbpWrTTvbQV5GsyvmDn3SnAbvc9aRX1TxQqRhbxTnfMtN9sgrmWgQ99zYp5X4aj6dX57Z6DB2eCqGA",
  "key13": "3pxfiUVZGqR2aWLrEiqZbgars7ifpPVoeU38kRspfV3WKXBWqnzjgBAZjWWvPnmhwhzbVSUUrt1fvH5Q1RV1UYn4",
  "key14": "4ZkypXJTY7v49ippXtnAibgZZzux4CeT9XKNS1bytvyA6UJ2QXuB4Q33G5oGSTzx6vkUSe7RJJRaVsTrpmi95J3i",
  "key15": "2nkdVqSLshP8uX4LciM5M74Hb18dmUtovty4P8rD2bfPsWVWaTcEb9HMcfySuTwErTtn3bSDmLWtPrmxrHvbRevi",
  "key16": "4YZAUDx9JYxXzDDtEXPh2w28eD74zkHfLWiEz9QfSznCxQ3GSU3xokxVUvdvfvnVdHKJZMp1HRgwyw1HCQVJtCph",
  "key17": "2dc2R7e86p2MccBSy6AaUz2d8RWmXQ3tdtqLtB96HcmbeCBXosd8mYJKumkVcb7cy4aESgrqs8Th1B9n7wMEF6pA",
  "key18": "4dzH5ymdCb5T5V7rQXRVJ2KwAPLGWbHv7VbAvAzxAcjCzjTNxJPNgzgvZowDSYcQDhcLuhHSzkQ7v3hgcyjEKcmk",
  "key19": "4fEiQJMtmzCyjbZyXQEgozVBoXu5QndQkc5P7LDrAsBjBG7K1R8B1SN9svRmRkJt3j16z4ppxvYvLV3TE4M564Y6",
  "key20": "HnHh6kxzkxcR8CRvLtuN6FvRhcpzC37myrUY51FR9jFeL5U8AHNuhAipvSqNAvgctoAzPchebtKd8CDn4QZURR3",
  "key21": "5JnHidrV93BoHqGWXwTfgt6aT7wrvYRPJWRWEqfzyrkyvQv7Li4UETnAuipRm7wDJtWQ7QwgTnQ1AZ1rz72LEP8t",
  "key22": "2cRkvuUfdPz5CH1V1YHnESirv4QAjoAWcRqiNKBSWR7i5SKa1db2CxL8HuMMU1bVJUWCtCbkC8a71Edc9sxk4dLs",
  "key23": "KAsWem3GNrGD6PtJivcGFgTMAZVByvoXfx9A8SXrasMcHKCmQy2S8tgT962sNBhrfmkeT7nSAeyrxVYm639B9qs",
  "key24": "3EwS5XSEp1Fs8QN1vXDatPAWYfh9DqSn9S2nH3bsdXhoA16k5UBe5jey21m5ZZS5ZdBVZ77nWjpyYab9F8L88KRd",
  "key25": "T3v2JzwNa3aoGZq1cx67jBD7Q1JKPNWgkhehHszxgnEc24Zcebypx8PTK744KiPPSuwaZHRFjxkyD7wug5g9wcv",
  "key26": "5rTJBdMp7KUL7yhR5ZebXfivzCz3ja7E7FVTW2G3pXcaUzYW3sR7EobLNVykVyJFt6osUXV15EjuPnxGauNchN2b",
  "key27": "DfjdpYxnFV22RjFRYwGqi1LxCsaTm8yTwCXDrxivGNLMhaG4mTTvFzvSDefqbCmWtgnm649wkwzNdixAjKFqRbG",
  "key28": "3YS6h4KjGVCj52yKHXfQB8RguHGe2RoXqowd1KfW62HJLeJG3oTvSnrC9QBc8mrWR8mDEcn6rhUC19URNQ1zN9Ru",
  "key29": "5EB6cgbSqeyVT9d93VfGrdVTjMxJTao3wkrib97QJAEeQsaGLTUiQ8e9VfoZF83LNzQgjzACxyhSSkwZYdtyPXMW",
  "key30": "3RMvrbWWm4G9PRKceLppCN9BT62jJybdj77vu44UuutKsi3dUS9hmgkwihTCF8AdARfeZ38fgXceaMJWz9avgk1U",
  "key31": "5NGkQmgV2Ljd6Hs1RqHMmFPy82PbkbmBgFRtkqVayAZhR4HgL239LUJSxhirJLjRCygCmbyeLn1vojEKzj1Xz8GB",
  "key32": "4PePYuWXbjq7viyP5NN3QS1WqdgsbJmS9VgLaps3h2DnDJ9j2XmwYY9KHnvt3yravs2ZgzHPbuLkmeaivixUmpFp"
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
