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
    "5PgseZJTbEnCqypZ5o7acwhkL5j6yELQhKDWPVW3R2vHHT2jxwDFeYZgwZLydLJkhNqy1ZgDyHGG2zJtchnmGvzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fost1YEiNkdeza1HTmDoK2BPHn9Zeg5EdR9H22KHcWv3f4FDa4zJ9jdRmk6CW3hL1x7zBvJp1sHSoabD8hudtAW",
  "key1": "5oGUFSwPi3Sx61dQACtzJ9KfWETrxH1bfKDwCRoQjZtxCEPCSqNmMbzGajdHx1R1Jmz8EVrbMLaS4rc6bbKyHqas",
  "key2": "47Ci9nfzvUhAVVGBHvQNpskmAkz3y9YT5LnmyTZBfNfKDA6FM7WMVQCHpg8uXAkuTDqP27RKfHuaDWdAddiFfnNM",
  "key3": "3Sxa1TdaJirXt8dZX2vTC2J9gxQxB7Z42f2RQ1EmnoQ7V6GiAus6k7Q6mZpYbNxQsHxcKMgNJrnRMFdWghjCLJoW",
  "key4": "2H9aeGZNfxcbJk9Q6dzZDebWge3T6SyjWs7mysNWAvQFhhNW4hVdnieKHfvRsyv7iM7NcfXviN6yCtRUEv1AJuwC",
  "key5": "sz5jv3Hzfm49cvRFCJkSXQ5CGKeTW6djAVxwTumtU33SV6c4nR7SQsRzjLnKzmC9iG4LX1XmvHobtjjzwFJieYn",
  "key6": "5MFU2zYHEUAWJRc7C62NkWLyVgVWCfjCQQ7dXMV3P8rs3PQJ7iRfjwdXN8uNsBitnmUMUV6EE3ybGb9WagoRntQY",
  "key7": "3JG5NcHepbJWWFEjB1Ke5kKR4zAjff7DhYHuXEQxUbmeepDvW2RMLrhAn5bjmKTAsoxVr3qSPDQ6wTvvnLUxM32H",
  "key8": "JpHWe9B96htDyLwk7JBoAjbBuPpLvJygCfH2phtqVZSKACzKzbMFUPKQxf9JCSRP7a7UAwMPyoyFkSBJhGQ2RkR",
  "key9": "5QsrWqNr9oTnVuvRZbdERJPx4AAm7t3hS3n6Uifv6RUAuDhrDew3gZWng2z2UxLrnWN961ay5ZNBbWse96Af1po2",
  "key10": "S8fhw3mBZhSSVvQa3Fhd5MKwxzvrUG4HSkGAf47sFFc4hNTUFmShWn5hEMY2qThZBhGGm1hV2FjhVfNKK9oefzE",
  "key11": "4oPC399oa3epSZnE13MCQ8P5B6h7TqFv91Fth4gH2B1BJWVjz4oZr1EUcCuSfv3iCA3osvbsCoRHTG5L4oKLmwK5",
  "key12": "K8xgVAq7Ukj1hmEF2Ad9Hg7KmEvGBgGE2MDiA8GFKn7CsgoTbZKZkPY3TnJFhq72NQtogQG8gVSrUNWUaZWnbv2",
  "key13": "4NomFh2biLaMAZmLM2hQ9aMvPA5Lx9LHEunGSkpkhgbnbRT4EAfaYxEJAVqiwTy2bowpfsCMnBAk6AFj1e887aQZ",
  "key14": "4ip2zEEhQEBzUT3aGqak6qAi8t4CoMNuVu1xLAAfoRoctUFatpH6VfHUarqQbR6RWiiTQQKzH9Lo4afd1rvCDG4N",
  "key15": "5JeSWAc2QGEhP88xG9UuwZG3o1rcm7EGSkrPaCrXf8Z3e3rzY3uAsUhiGcHUo5jTnaVEQ98xvgt2fXRWJdyFXN5o",
  "key16": "4VvKQQBiiTrLm7mwMP4NRthyHn8hPh7V2WznapsuruhcLwBSUQQ3M7gGL8W5mF8TPQRBJN7XZeiYhwGtJD57H6UH",
  "key17": "3D66wyc1W93N8GTAvgUfAjX4zkScZGAnULvuBGNiWCyzzaS9ngoVVCkTN1X94VkCSVJDqsYYpmhCFXJXY3zTL1U3",
  "key18": "3brsRiDuptpryzHeWKHQH3jvmvyUyKPAZkXweBaub4g17bjCaHbYBoLYGri2Cx1kR6q7LQpGoKryksGd9D66GRG4",
  "key19": "5ZSZsKFXpeZjAPBM6BSQT2p6BWAakdHg4jTg2gcJSWtQFy7jx8BoEjQdaCpz972nCENJSr2A2W75XgyKPAqAGcsV",
  "key20": "rArCsovsC4czzGYjvbomeQe6cZ5rQehVWKLGB3MP3s8C7BiGmYvKiQfT5kh2rD9pHmoY3zKwx1CSiu5d52zzWEE",
  "key21": "2rERLcoTaWmG3M9KmEQ8qNAD6XW2c3tvXbdETNT88kWjHroQKn9jsZCFow49qaSEY8owp7kTkMX87vzd1cGGTHmQ",
  "key22": "578M8jEcbwsYmMhm2j2ydJaaRYXFh1ka3PKJzQwigNoDJ52YYmkCBhutpXZm8fhUTUsMH5ujehbUhYTsyxbQRQWK",
  "key23": "25K7GdAEptXiuDECfcD2karZwBbxRN8e3YXPcTokvBYj1gCxLrJz9PzPUj4hbWvbL365sPNTN1EuXXjuF4mxP7jp",
  "key24": "476yKAktpSWzfMWmBcWXGYJJd1TLhBe2uhFDVNv8WqBVUMhont52VQkLqcVdkReLgTQmtk5fWmpBEESqBnfLfKgi",
  "key25": "5a3PkQb3Hd6Ky6VsP17phjy7Btn7PsJYWz5mFeXekTiCSKUcjV7Df1jKigDQMcpLDsKMiZDp8GqWRTsduoJvLuyQ",
  "key26": "5CaN6ic9sWFfGQJnNscgzHYHRtFGfpC2nDGoFxFsXfsJPLans5Pp8u97zjmospN8qfyXNWDaUjpxU9F8Yr5bfQp6",
  "key27": "2Kwt36snkFE49zB1B6SorkMb5wCdf3aHrLVNXxTSDoUNVMSv36yHnZMzXX7KUX6VAxygqSFL1Bzru6X1xPtJ6NBF",
  "key28": "67FQ9joXFAr5jxgkd9SSx983vh17kZYAtz6uAsHSxGC9Pcry1poq4mLzKHXEWGkbmW1mwf7oH3KRH9hFHG1182Di",
  "key29": "KiszJY3QEm4kBhi3VxoCWJsfYd4Qe1GM5ZmuSGQmYqroKxiJBNmBRATWGzaWcgPoa7q1Yn8Du5k5W7yfeZLZM5J",
  "key30": "dKgQHJtmzPx3e4RvNknSyRDCHgJxmbE8cqeVTNwixL5jbT5cMD1kVE14KTGT1MHAsGudmjvxmoJ9TG1CvFkeHGB",
  "key31": "5RtPoMui9qJwgJgB2VfCUbBhi8PjHBfXzRFD2imYU6VRpE61T6H8Ugan5PNDyqKhSrdvwMZg5PDn99cLPiaqZ4k",
  "key32": "5eSRyHNEN5DpH7CjBT1B7nwERGjK6M56gDhWX5it5ydYdWz1oJBoad1nPvJ1A97BEK3SSdJm7ggQVT6fKAhBvXXY",
  "key33": "2nQz16avd1zrQi62U6ScrX5t2votk27KJbGbse2WrwaDaJ6z7euskSTafsFEPm7276TscBzBoqmHEm55wdwjk6jK",
  "key34": "4zYPPgPf47tyZHKNgZYavs851sxvLCnmFo3riynnUfEVZ7mKX56V3NWcAF1ekuYhyeACbDYzx4MLRoGTstTbcnAf",
  "key35": "4k7RXJYMDytSSsGgeQNZL86287nXAsEWGqNxNECGXCkcizggsnPEsjRJyt7HHMCLeTukjGWT8htDWnGS1S3Su57S",
  "key36": "5zmfFB3dgmqUSiQWVHKa1EEQcxksDHWVQsNkbYgMCiReP58wsHHE7Cu7PQj5UytJKJreet7Ga1XDWq8U3Xt3aaXT",
  "key37": "RBukWn3z5MgA4MnQUoFFpiStLNE4PXXxnGNV7bpCq6f6otMEmvyLDbne6ejQ7TDAgjdjT9YdeyYbQzJjax5Fbf8",
  "key38": "3fcVTiEAgqjmuXU4vkjNDL65Pn5EzZfavxJLq6UFMwJYtt5WPAqnv1dxWbTDDDvXG9Um3fqE7dzJqDtrMfuaX2Va",
  "key39": "2BjQB8ac9oZ1Ggu1iAZkfUaXQTfG9MQXFN5h3c1Y8TF7WgBMLFfybY7BJ3M7KRpeEkYfCuDLVZS4GjA57bC7ZJkw",
  "key40": "iHQrnUkfZ4wrCzozDHPF6hU2wu5sAbbQrR3zUdVssFva7VCBzJ7FkjiMu67HuqrkWGDpYafz4wWsyMSWG8QroyA",
  "key41": "54W6gUVZT5arejkSHPcdHZxMDf1UHbPH6Txr75UfEVf5mbXahRuFWsikwydyfHQ1i3y2wqdGDcR43jm97LWUosHn",
  "key42": "3wMBCBSCAX8XoqhsRep5ARdzkWTerwsZZKCgNERGPzr4ynzbCTKt6gQ4WtLhfE59T3xTEQzRPhxyfJR5ERxezVPA"
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
