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
    "59SdV1t9BWHUrHV95xVHRERo5nU25dVm7zi5R2ZuYg12vDU2C8FBMgWjWoNX2emyyccqjBV4hK5u2QSULtC2YAd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b1ipoG9gB9RfqbgNmy45yZWy9hDQ8DfmUPDQnwr7dLvUbo31AQJ75U2B7ou9wu7axojap6uoGEje14K3yBPoSDZ",
  "key1": "2VRPgcRu8Q9xpdMiru85WTpUfuw1NRaPEE6u82AhHQvztgS7uxQayWKS1hyGrViHHQKWTYHM3YQuztpJV3wRwULv",
  "key2": "3grNaGYGx2jcMJTs6qhqxQJ9LmPsRCPGmNSdb2ubxBqtZ6K7VWwpmeDYStvuFLJVMZLESqUUHUWhxL6srkA8AqAU",
  "key3": "2DAUHFew3Ge6fRHg94ZL6KTJwaX3L6Nha3VqFxS27sdsESy2T71UNuh2cL5GJx7BKDXf2E2smypqp1QDVHiK5uph",
  "key4": "41FTaLrNqFWt9jaBm3c6qG6Ty2Jcaxj3GzgvRfQcVuhdG3gv94jkNQX7qgXW3Xom9v6Eu4oCuwzCJkV5jiFwwNA7",
  "key5": "25wkcT5xWeDrP197bndDreVpa4Vg8M8oKLhUbTvn21bCzmuQdnj68yWQbLqg6PkmEBiWFxUVe97JKfLDsdKtkwEv",
  "key6": "ULh27jwtXMd6ySRDfKzGDZZSchdAGH2YKb4jiPm3GwM56g5yNs55parw1tkiAHwnfHWauEMTHJNn9FS5tKrMVTY",
  "key7": "4517MoSnwYhJ2hqKS9sWME98xsWidhkGUCkxARqg5dhmKCXTuPr9BEgESz32okDa9Zu4p9FyKcTXxnaF69URDJRi",
  "key8": "5Luax6ANUE4jLT8JA6CGGr1kRSeh85DjS7Ko28iUfwV78Qseji5fRsneZvq4RBPMRogFsvcDHbzaoidboKQUUbNk",
  "key9": "2yPDg4H6AWAoXmprSkqsj13HPRTZiR4CE3zmN8pKyi6S7Q6tiyQ9pRWVzc6vk4TB2YmNmBeypjopEsBUCf4vmGG6",
  "key10": "bws51u8X5n5hUnr6qY1FLiQUkFQLWvGPvb1drbM9hepgnTd89SZogi5ZQ46aGXxrKqpofxxN1DwBxZbFtrmHqiv",
  "key11": "65v65oD7PHAxTuoVRDLnocxfvtUove4hy7TEAjYe5q7FX187XNkL4oEbBrvfaDGSmnhvhD9hXwE29LkxGKzv4PTy",
  "key12": "2BLY9LGtBfji2eEgJLaM3DHpj1fePXQtiUPiZLurqB5fr8GTsY9GS8no2VZKbpuhKZ6ZgmTAm85huT7YLPrmgv7G",
  "key13": "4nuBohqRE43Tq2GezVdEprzezgwuVrzVHfiHxPMGc9iYwNh9oeEpZKRSFvA5F7AeLRp6FhJfMtaek8mfsn1yKLTA",
  "key14": "DVi64kutPoFWWDwJWLwY3kudJViodui6wwEJ4a2fkfUk3ZLgYQeC2KcRAvdcd8J7yZZNjHzi1K7yvsTyiH9PP8F",
  "key15": "5zQt4wDexadCp7deJFsCbRH9oLMbCVqUMHLxitNAEQwXe8L9Qa6hQ6GS99wWeWjwNe7c8bJUYRGFKF8GtSjJRZZ6",
  "key16": "5uwXiHe7rAmRYHpUVU1wtkZb6BP5x2Jk5as4FXQSkHf9hv4ZyY1PBiWj12ZhTTgsTr89j32W1BdviEmSFv7fEA62",
  "key17": "aS5Xv2AkcjvM9MZkvL2dGQ9zq8xaMHQyaDJaqoZZJat6PyB5yrG1K6LVQqmMhvdPGXm475c4PEfABMk8iCsmBjx",
  "key18": "3HQuUUoxpHia9JfVNsnztv2d1EgfeySNV5MLty6Z9NiMSNJDynUdyCVPDHBYNdsbYZxhX3ei8nph1KgrNCdASvfB",
  "key19": "2TLyeJhitYrAgtw1M3yPhwwPPTugPMp6axmEX63kkNKb7XU2F9oeurSyyQDHnXLEh2nPpbZTNbBMeBDCLAvHe5za",
  "key20": "MK4PL89Bf9omtSshmVMbBKcMmJoUc7jQopi8f35vMsQtswkMXCQ8spEXc8XuR2Qf4K5CzRtMt1f2mmDFpfLfPNV",
  "key21": "28mxC9sYoHeLtim3fMrYFHrKSshXqpxFn3JpgG2rRMYQSuk1v4yRPfrDKR395M2nfxGU4pH8zeuAQhFoVkqPWngU",
  "key22": "48YjrCkF4ZqRJ4SRaAk3snr3mQhfmiwuQDxSQEVgcEQXNEAtdM7fsVqhMDhZJ6X6xPBb7NjYDDdQ4swx79Wp7kxp",
  "key23": "55z6qDjmXFPJoZwCRoaciPydTXqLfNTSxpJPeqBSYaxbno245bbiCSKJtJkpjLV4CXo7hidnWSgTxHSKavkmpjX5",
  "key24": "5RHxEBokA8BpGWEQQM7EEqQpZi1BgZzZdjAJVQ97ifD85WVd7PV3H9CAXq3akJKrDEwz7EkVF2oSitBGgNN1FEhi",
  "key25": "E4TJeheneGTC13nUYHaTdbdWPjyAqtQ8Cg8U2tQRvFridh1TUGfmb6pfNgv4zsErCaXpYZxjubQvLa5NpMbcaKB",
  "key26": "AXxfdzUR5Uk9cHSebaRqfxhT4GCatYcvGcHP9r2NKUYof2ivUPF6Qmi92pzSeyJsCWHjaCyEZnbNFgSo27crnzN",
  "key27": "46PYv7UzDBLbHunsqfcqjr2UT6uWWpeGxnJiWbmQZLUNucnqWcHXscUJ5akFm7tLJRAFsFBGroUupH51vm3sqvDt"
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
