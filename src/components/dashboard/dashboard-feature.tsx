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
    "2QbVC2AzFygbvq5484QFQgGgs1Yxpm5QxvdmFPwpdp1SwVoFYY2c9xDiWJqiRYsvAg2CszY99hXikmuCd2BdM4R7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "au6udp2jtUMjYJngP7GAMo36bRqrk7jrBsgjAmg6NDqBXKPB5br6x1FQxkBypFoLasE9qqRkXwMEfzhgcLQEKcT",
  "key1": "4Bc5Cu6DyF6rHtsmQHkADTFAbHgAvVtkEX6D2EbPf8gZVWKeQXqwmttzVBJRyt5ZPSPEzW5rR1FkSJbE2Gvqu5B4",
  "key2": "4J8YYnaaJrRv55PBXu2J5K9fv3CEGdtiiMN2zsE8GhNX3a3cgSMT414uUL69gGtJaWycifbrQUPEobsyPMvAb6NH",
  "key3": "qag5yUcC3kAWJGPhTNGAccea5oizceJ5FFjGv9patyWEUpiwweUj1dfdLdeT7gjhHfJ4GNVHZqCAWcAT9d1cm3K",
  "key4": "5i1TFTeeAYkDStoFtZ3k5QewfAS7R56zjvbTDxSPDq7Pw85wzDXrXhSwY2B8wtg3QxBbXJihrhwJ4ixi6ybyAaCD",
  "key5": "4qJn2De1gfPk4TzoCoryVbZGVW9q2RjiTGtDbq2zThZSscUX1sWk9tUGN1BCoLyqPQvJKk2PEnZh8yeA8KsaDkhM",
  "key6": "Fha7TZaNhKosXmXvzSwRdNoJTnZsiAEt3ZACroUbiu4XzE1FWRamLAJaKBYtS7DwWo4Sc9j9gVgZhN1KDyeRbDQ",
  "key7": "41EGUo2HsMs1L9cT7Q8oUonkJBUA9mgua9pD2TitQnJ9SCN5Stbr9zbQGBNQVvnsT4qKejo5RFhrb1UQ1H6KprN4",
  "key8": "5CC1gCsP9q5r7P6aqCVHRz56ecmx33qLRafsQaPU6aVi1JYo1u4HiCQfHfHBGXWncgFi7kbxJqVKKU1QNcQFBhK5",
  "key9": "39HksEvi8e6K5JsxSzD8sBcT1XPHNkLyt2h3znn9eKT5Vg12Nb2Fyw44YnLBZeeDbWx1vHqBUtEXuWF27SaK1v1A",
  "key10": "DerNTGa5DhRZsCPLqc6iMRg1oAhybzRPCSVUNLBpDPLpqttZ8pLW3gMjJjNBGbneKG9bUKhcoQaNJmmmQMUqipp",
  "key11": "4WHjF2CvqMK5A6yxixEaDoSA9eRmKZb5cY7G4Es12M431vfC3SYvpzhEfN89dk7N98EQDVhaRVF1nNmnbLEXp3ib",
  "key12": "2xrz7p9Qt5papDaCmjXqnuNS1LUCwoZKRjp4QC1bX1eZscc29wD6e7sjykKe14pjHXjzGYmCsSz2HDaLwJuS2k3v",
  "key13": "5KqpjRsqTnqQRDoPUvnBfSywFrgFu8Hm6kF59szR68rKJ8fJsywY8jH9tVsFfDeX7dZjhEdmmFvts79MwcHuE6Fr",
  "key14": "4XM3ayHJdtg16oWSJ93VM6JJLkhUDVwn4N9sjENt1ZjSLwYZ5WUpmJ8GpneeaS86RVjgMkUS5jp6jH7hkU5RqiNV",
  "key15": "45F2RDLC7fM71xkZkfrn5bEah7coiD18UUA6QLaYbpJXkvJ4itfXtA8LhceVB2dA9Q8fXnqs4GK8Y4LHMj1BQ8JR",
  "key16": "NgsqDnd6kDtmGQtPJq3Qv44FfFzjqW2jb2aqU3QoNSEAbr2oJbD1PpobqV574ibQbiAXxooHL2CCPUmV3afLvU6",
  "key17": "4bi4UwTX4NFtbjsrq4op6shiQxHW9XUJSaV6g4SCA379PUFG4VMHKQ6QH5TYcoZ7UmkoQN52CQhRHxAwmt6MFUus",
  "key18": "5RmqhAHU4wBsnWF4zbtaABTjjGZP8MTPB5FYwRyXcuMPsML5qydf2wZywc4B7rexn4H6MULivvZ3rMfdnrpFnTMH",
  "key19": "2Zbkj7fTkh7dtM11WGVNgJbsmu7WGNSQrF18wV3FPQ1b4jpgiEAAeKpLNFqK7WDycvqjLPLtx3S5aNdrdpoxCFg1",
  "key20": "25pFRyfWmVdiuByqGVsgiz1CSAz8sZaSvvADW4d7wW6VhhN3xDsQ3XQeu623wjLfftniFKQVGjxxzkjMTbb8pKhk",
  "key21": "oiYhhp4ziTz6VWjh5xW1fPiPBmwo1sXfWJHQ4M9X2XrSnKcfFYSrwLpjjYof7KkzZ18pJQM3PM6T4b9oXKHv3cG",
  "key22": "4mayJtSTxXaF7JS7quYKMKHUStcf35hQbAL2ZJdK8dcwSdTjicCUG8534NGSKLtDdgNizZhkmrEPvqR92WyuDD72",
  "key23": "3FMKm8fX6D3sQkhmZPh3YNgJDPvnhkccLHJMEv1HJwgW1F2DaEYkrqiX1mfykPrnW7UxaaTAVkomBJJEA7HCVFGB",
  "key24": "3KSunyn2AUaaxXXZvRRHZNAi3AfwQUzVT289ECbkoTnQsEYNChdxgkMvVTEGMeAoW9UXfz54bBCmF9Ee6bUZsB3u",
  "key25": "2vrkbyAe7V47nK1sowVPgQCB7m3S2G8basg9RHWMHVAYJN44n2mH6FHhycZARQaPRMhxSW5vXjwE7Nuz5bumUnyc",
  "key26": "2tnLJaTA785ytQKUPWe1HK5jCb9eXxakPaxN87nqqtCVLye4ZqP2qhuXEhjNCT1TnPhJrLH8opyjN71Z1dTDxDGf",
  "key27": "2AeRNTxfPUciC6UGprpkgXfHFFcu6j277nVxDPBHRL3JUaZYFgqD7uZRx66edMKpCyB6a3N6iMwUoUmiDetE6EMF",
  "key28": "53uznrc33FxU1VzXoZ7THGv33DDAAC3HhYmDuVEz4CLjNQ2sG11cQZDtZmDJFv9v9DD7PFKVkD1p6V7HVV9jnkzh",
  "key29": "4QTKApzYyjuPrwjmayTMzK2njYyRVzBDmckvrjRhrnhZinGBqho31Qc5su8V4gqXiPY3cBDEvx6Lvq3tVr4Asawx",
  "key30": "2N7LivcUQtuzhDvzjzC5jWURy7vM5ZTmpuiRxTAVLc6Apzbmkj7jWdwLJEvoLRAzuNuBDzv8r1aVTcLbLgrkCDGn",
  "key31": "4EAy1F8gkkcrhS9FxxtNTJcqEGQE9bfjzwzDq1j9GUH6jV2k1Kg6FPX26pTUyUiE7Pg87JLeo7QGG8EaQ6RqtzJZ",
  "key32": "4wuQGKhQr434hDQvazGYzpuME5qe7Nm2PQgee7ksm6DrfZsajNR5oku4R57ybS7m38ynuscmHyjVYoQihJSLUGHj",
  "key33": "2YxYCixPs4668GKTMWYVwDb4TZyDRk2SNHyfBgmjRaFH23sLSrAm6ro2gndBYzr52MLkfCiyoYpZ8MmsCy4iiKM8",
  "key34": "58ybdJ2SQh5XynXuS4gYFFErmdYyqNQjy1L8JWBL2bvuriRUyeQcVSNbgGdeP25dEyYf4NUSmvhgXe3NGUAp8enY",
  "key35": "MNVUSXZkoZGVt9o3BVFrj1vs4zQ95FmHndbPQ9YxnhQucxi257QbYw3AicTCRS2YVyoXyXXWDDBzivT7K6jefgR",
  "key36": "WTy2C1e7F7pTWbo7i2EGX42S6ATMKeVQTU9cKW7GGRW8YAphYkFFFP5d2zhBD6q2Ufu2SYyHHTWkJtZYBNYvm4i"
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
