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
    "3NP4o7mjTEq3yRrGStfUW2GqoWHk37xCBtafrRArXYupwhpHYrqCZBd1JHVArgDMkw3qtPQngmwbZyTsQqaWRhrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U3ywm5wRY5JSoQa31zBK1N9c8dDi6iBAQ2zPDqAJKBggu5aG1PDadE9YVFE3JLCyjUCJ25RiNZEWYcjbVG7fmJU",
  "key1": "AKvEX5tnuAGFGig3iB69QgMmJSYj7nL77FdZD4oBVr2HzfecoLucNUXGgcNTmsz4bNh8qWDg7giJ5eqvd3xurbh",
  "key2": "22BaXjrpUwZbcLGohF533nPrypyYotdk1nGfKBPLtqX4CyuDEGmLuX5L3f1dajSc5Z532Y4XPgP2iTBYzYpPrvvd",
  "key3": "3U75Hvd6c6bF7H5q6eU8Bj3eiMcVuzbwojKjTDqB2h1RxhcE4XhvwposHoZ9HMUF5vapxP7VaqKLZZfegox17g8S",
  "key4": "zCECfDjSZbm9PPmpumoWTUxS12Cvirvqnh33eqstQbLSNV6gszvvyx68LfPXwLKTZcNc5g73NneA4sRHbRaxntk",
  "key5": "pMAJbiCUYvFrUJ2Eo4CwmtLBmx2bUg6n4iJVhdHTbX1D15FykpTqNsnNQEaicpMdb24fi8qrfJ8pe7azarGCwRY",
  "key6": "4Nha1jh92PjJxmaSAkkU5MDZVCL93rxTy9QTZHC4P1aJPyeum5TNGgEBweTiitf6moAayPqPZy8YLK41U2HKG556",
  "key7": "3EBmubxbunygGWBWG8etdW4WC7tRJJ6ZxGAKR5xTh2ZvFbWcGV4MpfuC4ZqG4j4HcGkRwGukM1ds9wGEseAoLo2t",
  "key8": "vWiK15YpLWvWeRZGEtDBDuDEsTg3WWLaqsbMkd8K4LFhM7uyCsPDSD4vU3VWEFTJj8AkpQs45CrDYMHPmkrJUb7",
  "key9": "42tDBKLVMmjGACpgsFcXXPNDDQrkUDw9U75YE4w2CKvj8aHqhynmbPxDDeRJEF8avoDhjdvs8fEfoUiC9DR1VDCF",
  "key10": "2fv3EYa7QaRD2D6Vpt5HZQcxhxcxGdAyGscdNQwfT3TmPStUR1uc7DUnBtWoW8XZGs2S7jy13JnT3ha2JHVxgms7",
  "key11": "eMdKh3SkpYhRzmXqiBKkt6AtENf22p8JH9Wjq96BQN4sgJ8Fz1hn6QfbXZVKjhQUW3d6Px42pcCNos761BKRpjE",
  "key12": "5inBdAuWWEsrGTamhrp5zxe93pnn1XXqXzLFpMLrDWaJSD3oYhdxe8AYVrpC4nUr1Pto7yMahTSdipSE24vh31rN",
  "key13": "Tt2tyk3FP9NuKKJzGFBZx4p3CWiY798ZZN98FbZgFoM2Rf1EVjhfAfvdYzh1xDA8UQGWrvWXCqnLr8P5DcQsfs3",
  "key14": "4Q2HS8KACo5FSydTSQjSiaRvGgvDGo1559WLAHQM5Uj2e6tkN2RzRAzrLRaBKBj9hryWjwXbeT2bxfjVNaXm77Vv",
  "key15": "3qZS286s8cb49LZV6YVywLpm7XWyS3gjD6UPHHzmFoAPru3zcnygXmbv29DRdU5bYBp9sVUfE5EjdvpPkRXLCjYN",
  "key16": "32paLCUTiJJiEdUripJ9DVPchqC7EUbVH5kLbF33UTYrzUgoSjbk3y6cYFPVaoznXrXgnephPyFcwvyasFiPeuyi",
  "key17": "4oNmo3VjAD64gntY9amJxDqFrpYQ6q6efGRS5wf78xpUcNS9txpaZs9bPLB9hXqVoU1JNjp6fy6ZHL5YsXapKWqk",
  "key18": "4Gi5jAQkTkBBpvrspv19wh9CthRESz9BpEDgsZ2iPjeB7C3XCieWn3HioonyDKzESitfSHxKx1GCCqNw5GzVqCPA",
  "key19": "8dBNdHnupyX5SPPvKiTNe1jjoLbSXMcRJtEhL8YsJEGHzYFwkPKzn79SNefqBjefHm9Aoa94wNdmJzKsHtEWYi1",
  "key20": "2qjNkccKsWuBSbRvLgvEVooMxREDsw16Cfd1kMQd6hpqpffVZMj7Fz9S5xGw1MUTAwxbqhSteYTuSJQKftNh5TVy",
  "key21": "sQZpYnY33oYZhr1L4icR9SDeUp29xekwYi3sThzqiF9ZDQBZg4nRcKAeU7KnAe89p8ATYowpDnqVdYUTtmNGBVk",
  "key22": "3gGNoZpY73maQouSs11kQWwKGPMRa3rSWv2svJbKRiNwwZQv5kFo3aYSoGSM1iDdmNrzoEZWz5CoTEMhKqv2Tfcj",
  "key23": "3mX1TTiXGpkZcAr5ro3PVb67usf1NnbevucZc5nvGzgjxkMESBmrqXvP2qXXG1niGHeWQcYFwaEwFxTvjTdLdt88",
  "key24": "3Lp5wG2VcBgfiT4PFLXGSfdrePGWs9aYQRt55nogjW26E44KU4PJf5BaHcrfSp4B5wCyZ7Nnngnmkizhq8BkRRJX",
  "key25": "4H4tkiCJMR1tZ5wk7oUDU2oPPZ9AsvetCo25cCs8S7ox7rdbJ1VLfLL38Keq6va2DyHQ2sGawGHWod3YQyhiS1hq",
  "key26": "5EksFZVYyZmTA1hem98X5K2tp7AzQPF5hBt2karCDJdo4KQuGUcfdR9VYeeU4BeumiRtmHVtGMGfkw5sDYva81oa",
  "key27": "5j77cP676zKSaq8STo26ErP6oPAWxqQjogbNjh4oa3zyg9BSvGNBAzec5qofDR8bwJ8yxdsKtw4dwjZXr6PRSFw4",
  "key28": "DM1L8mGyoxWyuP9ZXRVCuVUuUnWBFnZB8WYgQyGWgNNv3qiL6rnoFvS82eHeB5agwxBEBeWAQ6j6uFdcY9JaLc5",
  "key29": "2vj8dUMie2zXc5SxAohQuK3jrkUh8rjuTEa3Cw2oTFYqk51G96fWWKV4rGa36QcXUVi61SFWgckYCHegRUWpLmN4",
  "key30": "3w7NTN4jqZyAzxxZhEtDvMCmATNg1hzF79zWWgRtJwow6yEwJk651H2T5Z75C1Q1HqdNk1xT1vGNWGv9fDE3rjFg",
  "key31": "wc5vusQBmdSTA8BQsTQR8RPQcNgrpYkxBDYaDwMyUgLWRY5ZMdHSZbidQfmypracwtyCUvXAeTuWz9NHLgJHhXv",
  "key32": "59WjYpnzxGSap2J6QkvGpWeM8skEAGaGF9pJZ1ar6U1vFk9uPtdAktDdSR5R9jEyr2jdptpHRzChE1QRRiGVWRNg",
  "key33": "A2t1ohUTM1FSkBdVLBDc1n8W9DnkJFUeHTV12baC83XuHDVkpmSKhV1JxVXont1gwmxm2wE2VBj6pmnGCXEjWFV",
  "key34": "3qCF7w9AvV1FL8ZJnoKAngKWz7Z86cSCcwpZeqB2SWAC6dccNHMrJbxpWZ8V8xWzLxAw4rPz8wAEsnP5miXEeJvz",
  "key35": "4A9cFXLhr5zYzDFCNf9S7DfN1WWL9eyTyMRmBji9H5TrgLidqzU4FvqzJib9iqkbmigD7kBce6pRPKaz1DK62h2m",
  "key36": "3vifahqMG4YjXTSYYYdEbAfqb3mBCjFH7ELYd8hxuHccBg4Evi3tmt5q4utg9gen2nU8sJTsHiq4NTfH1z7p9zzz",
  "key37": "4nABdsWFi4NXc8hFLzrBCerA6VgSFuDhM9nVsH2QMfhwbDQ6w3b9AusUxGidgtgUxDubUxMxCG4SpwCDdF4viQQe",
  "key38": "51nJQWTB3AwNmL2TQdXd8mMc9iv1QreK9LZUhx7rHvyy3uw8WSEs9QQtL8cjjkub3RAebogBBcQVcwVyrXXnWUdF",
  "key39": "5gsR4Wu76q6frXeqagqKtfXRg7XpKaDps9fMLh7FrYQV63fd7jNhXz2aszLAoFzzn2QEGmiyt1SBAYubZAEvR9ui",
  "key40": "Njui35f6Upv1KM1tvmwsCHNc6rFieZeCL2kJdPtQRmUBkvmRzEvN34o5du3fWLyQYDeH6unFNCoyNJciZ4aB2bh",
  "key41": "3tXeaycmoXS24RLNCwc2JsEJaMMiDtSRwbhKtvFZoHteRpXQp1SKWJuSVs9dMRe6Tjra2yAedekMnht78WzbKE3T"
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
