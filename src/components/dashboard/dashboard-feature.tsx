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
    "FG2jwN1yqCv1dxK9S19QnkXLqn2rzg7EAFMMSRreB6EavwyopJRQUMyLAPvFu7LFAb5Xt51427jRJC68RJWcGmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b6WeNW42WvVxhZU3ieFPsEYnw1ajMFXiaqKk27wJfa4vGZHSjBxmfhVzbXXVbBeLUhYdjheyjfU4eiVcYnwDDSo",
  "key1": "4NjLY1bVdcCEQcWSNHGY86Ny9Z2JPivt6HMkhg6BGoJyGTsM5nJTbcu5gtaFVuamNo4Eeus81xtivvshxbSmCPt3",
  "key2": "3j5429N5gCShiW4Fivc9ZZupFjoNkvT6mkNPiWtEbAfiFfsexYHq3KCuY5eT1WFPnzWrtHuXsQXGd5ecMEgiHfpH",
  "key3": "2zaCnvUQe8s7diLVeh1PpyKzF3oHYezBPLs9sTQrgY16FHfattQqKPzsP4MuppY1RJQUfUqetxgLsyhaLpAFhgSA",
  "key4": "2UM9YYLsQ4Wxz5C21EEpkYjRkULtQZQZh8aGqcp2ky2aUu5j4WdVyHPSXyFTPMEtWwKNwjCPScEh1fiVsP1RYh3P",
  "key5": "3Fm6EjXtNtkgDkSmXxgL1emxKgffHhuA8BY2EpprnE8fiiGUS9d2L2RRtRiBDvbvuk8mUNkHKi1eUBSoKapE7323",
  "key6": "4AyjTrUHHoiN3DcAbL2s5Z3T1L5n4EvEbCrkh1H1xdQ5wKSSEU7FZzmfqzDCP3BUcYkZ9JSKs9fRT9RkcKkC8HrL",
  "key7": "y4uJtAdoyj7mAE6DhrQsQFisWEHpXKut8hV34hnpP2pozeBhfYMMDA3GCr3uNRwUij2Zz7EwEhRbQzQG735eh2a",
  "key8": "2Uwge1s8rYT2ikFrX1Ttb5sj8rgjmd2VKhcL8e1gZgd7qDmf6JPTDnbkbxzLbg2uoBitSS4rzX11jmB4sedB9iaZ",
  "key9": "86PPrvcNhG2H9QUK11dpFP9NK5BvvwKgAo8bhj6oqJW3aXdCzZWiAnvsEN3oMqv3U8YNG4UYmtAwhcmbxpiwDFi",
  "key10": "3mXwe6u89WXqsrdtGwaZchonwNttqpSwTgy68WkoQQhCCUrEvVEjrrwT4EZWmvKJEXCKukYtt9oz71XRGeUFJch8",
  "key11": "aDwJafi9SdYhUT2pqRMFXPGErB2EJ2aKqQwPgmKQNEHfu3dGxq57s5nRnWgNyq3ictZ1csh24aGDQe62irFHpT2",
  "key12": "3BMuGMUY9NBXtfknhhPZbtb6PJVHLFNBgVZ32AhhGH96AX8pwKWfHkNUKePJc47dgBDuHv5noGv8FAVMar5JD6Aq",
  "key13": "RYvSVRzw1drPkE1twySBxegvzAGfua4UZf2UzX59Fn6tByu78fA2V86JBY9C8jhBDftKt7urXCLwPgTwmky7j9y",
  "key14": "4EgY8VddoyfvZT7MX9xBocZTAzzkSrrK8nTHLhzuHjNwfTUoyvJNm14YAbRy4AzezXPyS5hWsmGdJyEx12ox86cM",
  "key15": "59BPTLk7RjozpGBxemMYLBoMEsLXskcXs9wAqAvytBWJvnHPPrwHja2PTWRbn4YKcT7qs2bcVKkNiWF64QBAX7X5",
  "key16": "5VmDPV3vD4hNndGCVsvUdCC9zeooRxPs4amkBeQK1VLuaAcUBVRHH32RtiTRY4NHYX6EKDgvgvTVhKyrwS6osJPM",
  "key17": "3NoQcfkQdUrux4xLEiUhxkscNqoBzYDy7U4QNayT2emHaYdEVxL6FUSCjw8sdES8bAivEYpdubmtZivE4cU2YRkS",
  "key18": "4mf3QRLhXAyj1RSXcPoE9uXQDrKYzRsk9phRt8BMWd1HPNugV3vSiiQVptcPdszQ3tcmBx61LogsqgdCxUVHBdiT",
  "key19": "2QBVvif8aXfhJVq1FhEE3M6nYoYjqFcoy6utbHAV5VdeSiwfh8b5ADDD65fZRPSbECsRUZ34HjARe6RjBLzcrgiB",
  "key20": "2yPK1Fkxjpb1so1cuXs39ToSTEHLu66TrpHivj6BjKwxMjzHRoX2w7RWG1zoAMy6HwppupNCUCmJ4wUMFSBz6VR2",
  "key21": "4Lijoi998jTEJ3ZECZrC6yWJ89AdKAMadSoYrAvKijMizvWTEW6GwbbeezQCKPmUaahPTFsjwGb3kGr1jc3DkQaY",
  "key22": "3Rkr1915C7u1Ha4RrtXHcFC4HFrmnHtz5DdZggzvspDg1gqmvYMSmcTYWBCnSXChjwqLqQLjc6P96Rg64EgYwV8Y",
  "key23": "CKYHFVFSGA49VP1ZXUTLEymxHtFWYMQxahdDgsBNsT8tTxiEVn6fFgdpevvbG47tcnXmy4Xetp6iacPzQEBcrBg",
  "key24": "4CknFvdVdkj1LYvf7Ujp1emWfNmUTXbBBsfnuVy8gWSsCq4jT5hS1anGdW7in5GxqsFr2gjZyHceQ3czRzny3jew",
  "key25": "4WmNN6wXo6N1DFNr7sEHZFKBcHS3oeiytfQ64YXqofuMvjdnfHJbzJgcGTMFEhr8jtVNSfifBbFYKSsQRaWDKByi",
  "key26": "3SHC8aS8eYb6NnZ6rna8KSNjPt37ZL9JcZkggwTRkkU1ezHyeWQs48UwkGiop5Znqhu6aWJvyjMkpiszJdBKGNuA",
  "key27": "4pf7F6SXx9oF6EFguDyWkfNfMxdjobHggH7it1Cr66E67KR6qxk6J6aEp3Kv7ooQGEZMGM46CbesS4waEsXjfQVd",
  "key28": "4i41rAD9eP9Dgh8UZaa3wHq2t8AfERLaoyswHad97RwauhjDbCoHRpU38BYh7c9YovVWMqVMt83KRnV4sGjmWkqT",
  "key29": "5SeqxkKioGRshQr7wecMNJu96B9Thwk6AtXFQdMFDzvS2u3Q8vmycZzG9sJjBNAowqRqHGBTZS3jWWT4sVe6piVC",
  "key30": "5mpCcmWeBuynX3k9t8wBPYqer8v3fergpkXn6bmXM3bk5F3qdGrMauHWFDgr7B9mjYYPSUaiG6k8UdBrHnsKciNc",
  "key31": "5h5yfLagaKWmQpia5pBAiPq4e2CKA4U17jBzLSbXRgXURE9AfD9JvsVqq5UnkDSBn8ED35r6DWfgWei46GYfB37X",
  "key32": "2uskde3dAhJdoLio37bArEfLMg3WjyTmoYPhgmCLVyRcNG7VZafQbVsqstESEBbbwRxyf6B9UsRf7shcahRXEDQe",
  "key33": "3Srexsv5mo8tMBYdU4exepPxrW72JXZgVTCuJxhYnF9bkEt1vLzMouVjgZYpXjMRN1mPKPda1F8LR5LCs7C8MUgS",
  "key34": "42bQg9YhXRdx76Y9xjDXEQJXh2hnHpKw9oXqfCBCte7EPpPxkQbJt3hWvsBwKETY7QnehjgPxa3exGTG2Kt6WRWR",
  "key35": "GAE7bhwaxU2wxxGAf9gv81f1ARetHyDAkngjrAa2uSexngCMSrvEHbhHa1KBgpJxFXu5Mtpoct5hTK87hu74AL8",
  "key36": "3hQXdByfFJhi3x7PiLnB7kH8Aen7botJZg6RbcHGfxraZcBgFGmXLW722AaNZTFqqT9kxk6cZXtA1YABp8F3GuXj",
  "key37": "3amoefumcaH5m4CSXARCWFqxj5iXxBmoGqvRy4hhqv6NgePruqNWzqRpJF8wRhuYkXvVEyzsTuMnWExTQmQj33F4",
  "key38": "26MCVa5AUz1KKZPHhrp41GomQGWGzEtNq3gacpFcxfUEwgZKaTXyRuhDNXW3QK9GMpAyKoPJT8icL52AnPESypaV",
  "key39": "2hdhxf7F9GFdYyNkN6PyY2d26QNq8kHVw8aKPMhWpwnZFGBiCqRW4az2G6h14PhTcmahjDbBnZiTdik4EYg2ZjKU",
  "key40": "fgP5UYvmJFJJssQcDqZ5rw4pEsa5sU5a3uCka7jaQme7nPePAkb9MyWjxPP6zSk2sGtGmLbxLVn8uMH91VKsGcC",
  "key41": "5q2CzaaweoGCLJosxSi7XPisGVjtpkeTpUwkxsDyGZSDnJNJthbQJ3xf9ZfN2T7cDoZ5eMftEQr2AniKWtWubEXo",
  "key42": "B8uAK4CVJahMxgwP2pZymF5z9jDYdxtQZAGR7ycfxYXo7645DEXZvQoq7iV54rxA784qGkB1ZmVFFLeRXdDyGZa",
  "key43": "37Ewoa2bdi36n1D7WnkCve1x88g97SnfUaXfDUy3ak3nwC3Lt8X6nWMMsmEkqevCdpkToWpTRDc8jBJD2SX6f15u",
  "key44": "5Ctqk96XGNRwbGuc5sbD9YSKaTTZWWHYAPh7cJd6zMiXiJLKH7CM9cZYBwbjav9E4naBLfghihGYMqkZ2DsYP1Wm",
  "key45": "2EBUXH7NPmY1eUHdSdMxg1hWS8zBsg5m3Qg8NsVQEGGm8RwBoXvwkTyA5T2FmLjNQQYoxS5r6STgBKcc7R2djNqe",
  "key46": "HmTmf5RSySs2kytGKBiWi1QhWwURuWdQQM74sFhLwyRq54J1WZgZnCq8jomtAwcn1GQ55A9UmqUz8XSmqzCh8WQ",
  "key47": "2MB16nxDyzfxHtEfuKD3PwDqGipFbMQRRLyKnhRA5Sm87JvZsPjBpRbhm37zS2HaJLxucBpQV6W6C6s82gcZXAf1",
  "key48": "5o6n7ErRzK6cvy83qQKKzEyADGGzuqbCU3Fmc7Cvc1fgRnmkbf3pgKoHvyDK8NH7PRJsoiin6WCotsjDjsmKGyNa",
  "key49": "nqTEuFepzbMABYst8UVftRoTUuuNrJr85JgoKWi8tiNkWdg2xtov1DwqQv1hzzzpB6mHFX4URXmPsmYJcraeaBx"
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
