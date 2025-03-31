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
    "2mHNpdE69SSSbQG2EJU8Cfo4JEGd5efiBjYYh3gw1ru6SkmLZ5qKfqWmG1aNjrw4sRtAfLZMxcsXbGLeJaKgrSnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a3uDE3W5PobExBv9WJXjTyD7cW897GyHenFPL69jR18uZk518ZxzDSuchKEgUzx9t9WbRyn7sAFtUEeYfNrzTBv",
  "key1": "5idsaVFSbCCgEy2UsQCu9o8eMMJnVrUt7DEdCQdo4PEgi95dcoDqHgNmvag9RmQFKvbSsQSv5qXNmnmWA8RhDvve",
  "key2": "5sirxSwz4ue4Jgbr3HBtr4NYHLyB36f7ZD1Z7HW6bHpB7y8e4GJtbL5QU1ittzoWzHej2ghKQmCxAcCumwhxt6WG",
  "key3": "5MptYRhAckBdxKNQ3nnKUkZopz5S1b8UD5ECZtUifaWhaYYiSLHNbkCLWyc4tJaPg126GjRzXkJ5jnDKNeadHhzV",
  "key4": "548nL5jGtwviE92P2QxGSL8ix3X1zMsYwtLQQMGwdsHvjkPWU7ryMpsZYpBGERzEENiZ548dsD7ug8L3NQyGjp7A",
  "key5": "4xzvGBUBSQNRWX9voHYcznic7w6e2PRDmsAKH4kCiTLqUFMr26yMLRnsY4mAcTPUtJKUgrqZ4hnYgPriqH9aoH7f",
  "key6": "2kQvGenm1oMs4Et1s4C7YGLP2RjxfZY9y8ZUKxMnuwVfE5WfZrbCipwQNbHsKU2i2WqaQgXqFDrSAuTN56ZApvrx",
  "key7": "5bZdBvjnw564TYR3ZNAm5DPNxw6AHpgQpTUtcdSjrUcWEDnnTFUi6YBdy8P7koscZmu1Ho3YtT9b8HEbKYqnNerA",
  "key8": "4Y6EiXHXt9NZWLA5CTom6ddxUQKmbM2DqhhkdWs72j6FerYM499tbNrRfwgkDbzsT1rdeHraw45xhPN7gHBRY3GJ",
  "key9": "619HRLgNVTkCGjkrzb4qetkHBWdfErkrXmfASFNDhL1sNz7Geojm2B54ZAQbLQe1J3Wu6HU2RYm5vT6XwYuhzsNQ",
  "key10": "23PBYiRnpZSzR7LLRAZR8igFXkY74knfNQNM322turpxngpoiRsQLSAPDBVakgPRg4iRd8vDoBbMzCqPDXh6ewKg",
  "key11": "VGq5k9vFCh9CN5vdHgvd8WAMExMitQCTmkPxTzw9HKhUcLKKsMeq2VX2rs9tZNjC5G4Ua9rmabJXUx5jVb6FHEx",
  "key12": "wefMeJ3GUNynkJ2HxmGv3WYMmWCucbbmxc6Eu6rcsrQJLn35J7HKcGNqNyYT6djaFQA32fYopngT31D1rNc8iN3",
  "key13": "s2BB62CE498nq9fUvisvS9SH26BokCoForAnE9x8RFaAg2FbMfZbRS98sDBGiHbaTZGEo1yd7L6rP28Y9usRgqg",
  "key14": "3FRUxNkfthth6rwVUQGGqCag6vAXaSiwrbkfp42FrTuEKEp77LQTvDb4pWq1Uthui6Fg2E9kpFyd8827YMcToNdX",
  "key15": "ZqHPXrAUZb7ZVYUyTnUYXpBSsiEoQG5pYDGtvQfqTLv5bSa4pM2YEp8sH4Rizby3WY4gGrngwesg3vwMcouyuMC",
  "key16": "3aeweEKMJw1NH66bRRczSrWwMaoprWDeiW4iSWAyPm2JXEkdJF2y36HbjLVfSXQESUhHUH64qoi2Eop3WWbuWtpD",
  "key17": "EaA74vrnXz5JuyX68Pf3RLHwh4NF3j87LzjPY7ih7cLuWjqREmJfSPywFg7rjvdSr8wB19yGQFYB9Yp56bpPHyZ",
  "key18": "4DzugeTwivqRwEozvTMmKUNJjWnnCtxTpaJELNK85cNmAZpX8eWE4EQuicBt574UAUK3ipaCHA1i6La1C12SXWdv",
  "key19": "VJAbVt8fs6wJqXzfcZhga3M1Yz8qkD8U8zG8RB9BLsUzQMPLxg16uY1vtmGB6R5dv8GGAmMkywkK4zFtpXzS19a",
  "key20": "oMAGRcdx5Wyq7RgU16u9xk1gxJBgy7FQmZQuU9XHSsPmSgcHrdpRfqD8mj6FyjhcaGkWDB712r6uVRHRowgtjvG",
  "key21": "Zggk71MHTNXFEk7ygM8jV2VNWpT7hZBLUsjtv4kmyBsNZbLWPj7B84wE4wpDwMmi8XdFPbCnbDpdd785RHsQzty",
  "key22": "BsXpY7ozvRGWCELfuj7xTWizfyjfGJJYX6tF287Xf1vrJaHVCNFQeJ3te5jSktMPEwgP1f84jbdehLWBD5eYPre",
  "key23": "4eUMzmoZVCTSSc1q2WpeNE96yuVTwJNndhNGkuB17JQkQoNQeSynYxFErLUzvXiC3x7SBoAQDSsM9zrt6KUs81rT",
  "key24": "3mEh4hKjFiHRenx2iqL1oVYSyA2RbEZs9pEkg1HjnpjVugJL1VeEvDxNu79xzh5aweu3J55wVYyeVA27MYDWsYzD",
  "key25": "231nyauhyGmJU8kNqRix1KrTRxQ87et2eXS6ACFtL3pL8LsBNu3JnNReJ8cGgtgdMk1AZZARuaqKuk66XVPFzhWy",
  "key26": "N1qVVTXyg2HPxwZUz2Kwr7QYKh1D7ueLwxPZCVXimAcUPqzMkqw4z9d4zEHv9HNzVjxpNpVSvi3z5Tt5jJhyjJZ",
  "key27": "2NLznG1sjek1tZ1Ut4vrmQacTyiyj9LRfZBo9T5tjA7y7XdHQGVNzbZ8Ec7S3VgzcgEojN5LSmJBWHBrmq5BNi1U",
  "key28": "B6wUnhkaHh1bFS59iEuFQYms62Ww8YXqRhaMQLFfzqFLWRc12Waf9Ez3jvpx913odDUELvLHnSAKifA4XFm1GHJ",
  "key29": "3ZtttWmURHAV9AYdm1s9NWDMUCEZ2JLymhotVXfZ4MkkKwMFUkPfg19dqGfxXG8jLmGuBk2hsMrHJpdxgEhEnyke",
  "key30": "4Wpwa5d2Bejh7VcTG4WVyK17qBoiJYHrvRBMkkYwkUGYCCxRrSpA8UrCjSma43sYKkaM6dge1wbBrwRQtUBj6APu"
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
