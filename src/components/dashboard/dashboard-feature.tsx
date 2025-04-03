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
    "5oSiGAQpSvGBK6zGWbQAD5YtRQuysxSPtBtpM52dMtBe2BQjt8Zd4Ge6GcNLVjUYGgF38SrMrrwvXwSim2SgFchf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34DgyKZ3enLKvg44CdTC2fNWbjktbSVE3a2RuoyaAYRTHkg5c5LKS2ak2BSVWC2dd5fmAFKrDX3BUNzRxdsiUDV1",
  "key1": "4oG13AxzAzRgBRxjUjCauTJdL7EGx6o1sRmPpwXB8ycew3NmDcFrJvdQRoATUMQj7Lh99NDtzFMEr8tzETZ9AffE",
  "key2": "4ZXfDEdSHgHo4ukJUhxB6YsL2CKgmHaDjXkq1nLJYHf5MZmipCuZNe968Axn7FJZroBMJEGBXugXhj2p8sFFs8r1",
  "key3": "tW6CmVz17vpWbKMB5caGSgTxwKz3RRor7inCJpFPucJi6v8uwJMqjq6B1hqpt8RPME1YmaEo9h4HXDgPzqHCmAJ",
  "key4": "4N8YJ298Xbqyp5bdy9zW3WawLaUc6ghj8vzNCvb1v3V9X99mt7mYwe9U5wV2o6sNj9rz5J6AMVwPB8jr41nDxuUq",
  "key5": "4pwyuP2Vc6EEhkqd94YF3MFUacxy96KugpmbmoyefnT1rvdz46BtUgfbzeyWxd3PbDXda87XRLQ4KGjzoWLrAsps",
  "key6": "p4WNAvqN1RypNtscU7mY8nyGH4X1NP3ugbwdKiAKAMeojDhGXEnNigPhfP3ke5tVYdJBgiKMfma3Zg6GgPGMxJN",
  "key7": "xejDarHLbVUbJoGaqxzeiq5hSUEEPFMxsHH54VJ2MyrLFtZJTgFRpp1SKqEpwuBS5jN7CKN6dnHDCvhkUXwcwCP",
  "key8": "3KRmj9wugvDMzSWZtNJNwP2mz5Xk7z3cxmtEZeFr5Bn9wuetZPKCdVRHTqTo21YrRTEYqMWWu9crbT5ueLjnhGNG",
  "key9": "3qK8UeRfBk55LhC6P6EHGpRVS5nGa3HreCRzJ1WZH7czyi7QB5xdMsqFDg7a5xmGG92ZEizFZW6EdHRom7gtS26g",
  "key10": "5tYz24CJCBREpwp1Dw5Le7ja7yxweYEJzD4tSMQQJUgNvB86WSFWaC6n88bGrHgUGqnsmPiSuFFffAWEvYeSUJUf",
  "key11": "59cY793tT9BCcmSvNmzf2XHzVnGwUfaFvaiytmmWxeP8EKdTzCbzkwv1FyQ8vWPJ8frzN9zvbxWYGaiaFGy4A3ZU",
  "key12": "2T83Xy8Ce5NHfz7pXdg8zBcR5xcX6ukkkZ12NuMKFNRPWQ65HSZu8xm56XQUuMKRVheR2PU2LvUEoXPZdHDXUtJ8",
  "key13": "4XXDmLsWNxZJJPxDpMsbJ5RVXTEKHdZuoACyyj6CWyJGS1xQ5PS8cXaBiXS2GfELf3VLVvMLyxaHKxmMKAdCzyUY",
  "key14": "23keZWKU76mG89N8VMPdby5cELbmR9CZG21w9HKgfPZSjNrp7NKV7jAdi3MksgRS7RWJhhW4GzbFhhLzh9vzvhi8",
  "key15": "45R5XZ6B3okD1WqNikL9XvibVkZvvMzMs1Wb2Lb2wWc26PL75tPv32oojofBbUnSUyeB1tJiguS6BDKn5Wdk69LH",
  "key16": "2WYiayRvnDiruMUgjk7qh9SqrAoFdDqXmrVy5rfzkqL6Jk4WKfw4k95MVm6bUHBQ1ZiL92EFAY6wM2odtzxc8nH8",
  "key17": "3ivFFH2ScaXAQnto6rwJDXkKs12JycbJNC69f4MZBsw2JhDzBDogVVKGe4JmxEoHc6WnhiLQG1sJUGrnpyL2bDnD",
  "key18": "AHrHMzskAALyfJwRZVbxhFDXsf9cNe7pztrk6BXU2gaAfWCvXRdT7fZkXqYGQqShVvy2gUXo7QViXHjG8UcZWHt",
  "key19": "4HKzLNTZftzP3hHRwu1z26fRdY8S8iZgiHuqLxSsKHraJsqbLGEs5XdDi1ar2vey5pkzqfiEChnkLHkzRTcMKA4m",
  "key20": "2gSXZDEseZKAWGeQBYPMs8HeoZEAQQy9EhBrSofCZMRx6BfVRWQABphRCGWEs9mJy2z4p2etCicX5y12XDZppEAs",
  "key21": "44SuZVBFohNqmhgxkfC88nvUVSaYgtsj3SfZwuBXeNpiVUvsj6m2hNhQbbchf8DouFnNbaX89AHzs7ZpfLv4c9oP",
  "key22": "iheUnu6sGtjzubTP5N32ATzM31QMUSgw2w2Spus71w47Lrs24mp6vzVVWpmnGV2dpkVTeGGinUbWpd4mENhyHae",
  "key23": "5fBLJCF89ywgmJjRr94UsCN9Q7UfWdPvk1qmxQ36Z6Dwdfqa8PkrA8b3fJgJjAXgK5euzRGBhmRGPYmh34Bkm6XX",
  "key24": "5uHjCmG8ZPUasdftZUFp5DL8Z1yhJPX8YcbJusNkNwteqNJLGs9m5vD6k6Ji6SrKniTUTVjqYtmomEtSMAMBJxhq",
  "key25": "5JtFFNgWU2X2efHyxXBzujsJbyxYEyFpW6tArX7oSrFtSWXGN5UTC7HAp77mUEsA1xKxSc7kAGK4JmkF7Bwy72Fz",
  "key26": "4AvZFZvgQERxMWJQ1qqf7tcQYRE5JwLhPKsfyZcjCmQiNtY13u2gJNxtnLrJbf76od3BHZwRJe1NVTXdc3rPwJVN",
  "key27": "26tZ3uB26iopFzSdTMbeVoYcuLMfeXLqBrACU2oMGL8k9ood8ZPbgKduBeGpBGTdADiXygRsvjse7nxPbiVqFfLF",
  "key28": "58sxS29Bv2X17QQx4hD48XZyfpDBcZ6vLu5hUtCbeUcM9CmYmfQvNWsQ8Usa7ePUPmusjapSmNSh6Gt5S2XkxgH4",
  "key29": "2pB98h8q1eZ4KBd59ifHdaasTKdsQnxVh7HDvooCjik4LQMqaYkFvFo2ydqw42cRaZG1hvPYF1CPcvjjBkEGKaxs",
  "key30": "2Gk1cHKDteGABVPYe4ofu3mZN9TGf6uZJi6UYoGNVy37ohEHw4253WescNMF2BF2hSHKdmGAweMNqmNkfvnoieq6",
  "key31": "ikEkFqZDbQkqMikzLyzmAB1D6wHkK9TGxNwuLm5C4CDJKUUWfFJCn1QL19Kjt19TLGCug62mAWGVmxNXhTm3n8k",
  "key32": "4LLb2hYWgbABNu1GbgpMXSmVMk16Eb43X9pzvPdnFHfBkvy4Nu6PztDP4qQUcSh1h8Xo61mRyz12n7FaUD5PjrCU",
  "key33": "42VAWGbMEAbsHewGAa69i782SN7KA12X5tmyb3ypDr1k3rSkB5CyY4YmPrCScx2Qvpz8hBXoCwnhrSYBZDWCe2HT",
  "key34": "2AYr1Hso2CZSWtmxBKtXWAw88WFSFjUm7FmULqJSVyUcULg29e8A7qcuqDvYxqV5yR5yFpY4xMUkaDPtwEe3M8Yo",
  "key35": "3VaD4ojPn68dAe2m1Gmqj2Sq9Sjz5GGKhs6Xm9hQYxngDpk7cbr6joLKgs1s3Pb1Ys8ojw3WSEg4Pcg5buyPeMAW",
  "key36": "4cfyC22KF4KGrUoZ7jVUeyz1eZynAfYpdfixRpUBbwAXmqCBNp5KbAc3Arw9RnDaTgBe6aJaBHeCiag2115xDzN1",
  "key37": "48rjfY4gg3qbSx8yaiPkBABHpWYcA9u1RUpAyovqFRUqevb7m4MyvZsDt1PTGBkHsmN7NQG2hQ2fpj1WR8H3Jo1n",
  "key38": "5mLiidcHaWGbh42hdVEbGGNDzzGDsBpdvNo9mYPvNxxayiD1ohepYbhQVbwAuuGTaQwKno13ABriAtG51xLeyrmP",
  "key39": "2XCZySNbRQzC3x3o8vmxZ3tfvJU7a7ELf7zpvNfckRHzcx1NjZouufBtrgFrywGK19YLPSRxZHX7ooEuG1V1kF4D",
  "key40": "2uXFiTAb4zGvaYA1KUx6i7hJc2j6iVew1VmtpKTk5LL21AqKGyor1PbRFLT2VYiZjJYJDFX3zfY8PeqBQTgddncm",
  "key41": "3i9niAisgQUyp1wKjys4pnAwzoY1NqDUeYXW49F6ci8CTUoQrV3dEiyT32KSYCZyYM41XDiDtA8v1FzZdEPekbEf",
  "key42": "363i4GBkspa4A7A4wDyQbnyPXjWnPQ6NHeewqRSZd2v2AXzn7no6AoED3gANGDdsJpKUphRtUF1x7xTwD1etoKnC",
  "key43": "4C1NwwoZHDSShMYdLieAEG7DwMVjgW7ZabRNoc4JwRkRYoqAW5bmLDm2wtF7DUvvPjr1TckJuzg6hnPYuYwH9SLJ"
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
