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
    "5x3NeEZEHb8JRMVJpiCbFwmuPR1GGPBMqmSwohdDdE42z4p8hHNdTPVroUBX4pWTcMztsnCvxE5KfB3rXcYCozD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wq1WHNVmyjkT9xf5F5kQMgFKCz6FhDvHDbMzfkqEwxZFkpbH9RnQGP3VE2boRtSRHHMKpSaaNZWSXVboP1U3s1",
  "key1": "3ZHyhX1YgWV6Aep3n9rPFtJ1ETzL2buroYJboJjLi4YrLQhjC6y5V7S6NmKkfd9pbHvyd5rznw8sRQBFWHeZ6XXh",
  "key2": "5WRnqibzEEgE8RN1XwyVPEGoT6aJW9uBoJzEkoVC7RFdqvcwVoY6cMzvVPJvYZ7yaPv1ebh21m1y19FbUkYbthVi",
  "key3": "3qYBPmQbLsh1bqpLafY7uVCfXe5r2XPcA5YWqa7FzyehuGrHCpNZgg26t8NEK6gRcyJCngVyyYCSXFR6YyKZRDhe",
  "key4": "3QEEX1s31s4uQTqk7zkNrQXbF5zJEQZExaq39owzkSwsrLoXbvcytZUdy32oK13bW1hmexHq7kBWPn1eCwJaeKj5",
  "key5": "43kZWx9arJniNPSQLSakfH49EzapTDmCkJ4TJYHRfkfmrqDstLamciAGg5VHPeaBGDTbxNZubvZ6nERgMavQfEoT",
  "key6": "5KU7jqfvgah3rvCpkEtwCkP4KYDrnNN2hj9NbWpi9NukM8FTs5g6giQM7nWSyTUi4b2G1fKrm3yJfD1NR7Wp2wHs",
  "key7": "5cEegUsGR8q8CL2NwqT5hMvdPN1oEHqW26bBkzKUDhMgUJjaqtGb15fSDPGCaZS9k6CoVEAsPrsAThC4Xy3hV5Di",
  "key8": "4amCw9pynzB2cNYtGFsWXwpwhF4hMzm2jJZReaRBTHN5tsQE1g7tJjXBzsCvQ43CFYXp631KtxLTmBfBaikntqiQ",
  "key9": "JcKZ6X14wHJQH2jVMKsAUjCYZUWWG65WQgs7H5xYryeWJHRSdoSBgN48PMqUKchNWLeVBjPafBv6SXQqY4Anoz7",
  "key10": "3rFkjo5Pdh1m8faQJQ3RV5MZZ9XcMQHnpU2LHcZTk6sW9FQQ2tankjvpF8Xm8fKzMk3XVEfjorBD5ap4jjPgbneT",
  "key11": "a6CJxmTjdxJcHufNDygKywinXAMPJ3FQ8vsLWw2NgE6jwGGrXBVK6XVpbkJdY1EkFbYseTxJB9HKEboEASBHHKW",
  "key12": "4DAQzUJX1fgGVujJauBmeRu5hnaqghztY6xqiGLwQrAc4nuagcJtMKerkvfEsRchWxoJQ85A8zdNhknKRjy1LX7u",
  "key13": "4KGtu4UPRtGcArw33pGxpW38JwhzUxTyCyBPtru5jai8FDfL3XzoJ6eKNs5fsfWCrqmRhwigi9SDkWgmR9GTHGTB",
  "key14": "2jbY4545gmaGwNkQSHi4sFgxzjjBbvpUFjTiXdV5pkng5EuRzRPXt5gqBgcxzN2FZv37TpTgPNrm2nbuMDhvhPxf",
  "key15": "BZWYYQn6BeiaLosVA41gTtRb86wmyLpqfjmoQ8UMrd53oQQUd7qjefgnwo2VdFDjkGERoSwaTPdkyT7ddxsV6jP",
  "key16": "3j14xHgW5ba9nW4Cj9e5CvoL1d46HKmnrpvM5XD1QLCBtNwQZukCnuQqmr3PRSPJLJiKBpJSXnRe8Qx9fGQJS1w6",
  "key17": "5Bq3u56uL9Dg9ngCQ2eLNsFDWJLREfqQw7tWrQERBM1RSS1Tjq7SWGfpkMBFjf8VBsi8WuwoDZb977LNYHnawji3",
  "key18": "2GT6qSFnWeFTXBDSPBrxbH5fWy2sYgTgF3Nh54bsnxLWgdAX2DL5TDNEyTHzArAjJhmd91j8wHPPLJBzsCowLf7e",
  "key19": "4LaoBsmLitm7kQ8153usK5fNyGLYsCeGft6j1wabix4PhfNhmSrLjiErDMGtteV3c9pSmtuZ3S3Z8jRCNvdnhLez",
  "key20": "4FjeEBuAr7eiTu817XUQKiEcZczTXeg15c1TuRHFRNCQnRL1YNjyKZn28qqyq6R8yeBQVziPUSDcTNjz1SfUyT5n",
  "key21": "63qp93hg64uivHV2Ga71igEQ9U2QrSN1HGcHEton4gtTQjJr3f8JJKU3gUv1JTZu1zJTCHgFR5ewwJ2jZe91BArb",
  "key22": "47epsYpPrMeFch8WYEmKXAnaJeYg6G7fnPFa17FspCXTUAd2PSvdowBVaMGgapKtVSGaP1GuwDy9gjC891eQXze8",
  "key23": "5dCKdrRVVZTE5Sixx3GdWwtHCX4aQYNsdigYpp2h4rwzjwMH8GLWKr7mWfZc9rVNTbzGA882KbyHZPvd7wciHgNd",
  "key24": "3mzMoBtakiYjuxKzHLdE4BT86KYJkG7qdvtSmDXr4y1zbeicRVxWCWPndtPdZyqbTDBK2pw1wUgP2C3y1ZWJz2nr",
  "key25": "2GvosuTWRDjgXrLWwCkYwtDuK83eVbrPsrDjViVt3QEjqvpFNsijcUQeP5i7PVQH61UC8FLHKGFUwrLLbHPju139",
  "key26": "5WyX2WXdCpA76a7ezMYbZTHkM12hacUSsuCtbYQJN2Hp1Rer2f8mZ7LdGxWhAtZxCS79LwrkNjsxpDD4JpvvghFC",
  "key27": "5yUGbfZpTHjewU5CFi85f95WG2Upd97AY5ucZTejn6Fd1EZtk6JSqVjMUR52DPp5fsWYSknnfWJNEqtJGWJJCSYB",
  "key28": "52G52G6sY8EZRf6tj9jwwEju2m46n7ppmhYTeqw8PeyAU63T7wD1CiQpGt7hBDZtzvDC4BFaWYyV9REVWFxUruJk",
  "key29": "2fNMbgkEMRTWepJv85Y6L3vSvmodG8Kjdy5QFQPaWxYnDeZU7TExEBmWDQJsAqUtiAsS6rHkLeoHnp9CPAe63t9w",
  "key30": "5HSH6zJVbK7k9eTUAHMjkFaraxg5cLEtGM8oVSVBi8BbyqzTjYrxgVzwn4eq6gVyh7jHDuJJWehycixHsmpuogrh",
  "key31": "4UnxA4zenLnG5BJZxVrZ8NEFnPdmxzssGzrpxihnCkW83j4B4GEHkSh5h7NmK2YiBbHnQjRBRuaPu78kXoxGBKYK",
  "key32": "2myeaNBdecwzjWTaPktPsqwrHJshCFdGz53pdttEyp5xTZNP6gZrFEVqN7yb3f54GJyphj5qLYrKYt63wDRmWsQb",
  "key33": "2cMzc3GcJysMRxRZnxWa8TerYqgTn7QUcAaQcd9QbwBzi8bUsdX3jVsSvof5rkMyGZ7jX7XZZ1FUtcV8Vt3VP3vU",
  "key34": "2uEomFJzFfcgvdYeWP3bHN14dQzE9gdkJ3eKVYdb5iDo5FMD8zkueyFT8goRrj5R4QFH4jxxLvbad5deasL9LmWk",
  "key35": "Ydro3NJrsM9Q7Hd5NNf7t9q6wmEdnfJR6kcweS2ytC8qixX562rf2yshW9EB6xL3sNbmgiUvYhmAFXKHmcdneoQ",
  "key36": "5V4Xi6nMPW19E7EwZ6xi3V9npKgf7u8giSRiq1DPGDD2Dug5Q4X5gASaK4Rs5AJBQ29yw7HE9TV8tTozrrYPG4qr",
  "key37": "4br3hvir2W8hmA6Z8U1BdjnABSYsuFnLibTTkhqqR11U7bVKuLvMLVy2LqdDzNSbfaeW3C4vZUoJvUf12vvKUFcg",
  "key38": "2yPiaNt3ePddpt1muRLaJiR6iymsmJmvuCUVxCdCG6xXqNnBQuXNFYkd7LSDbJQoq4e4MSNZG9fdBXf3gKxesGGS",
  "key39": "3EmzfQGScE1AB6kQmaHYuoLrryYC3VpwnzfniiJxJTFG43RJrcqFPU23HihzUqpUWBTWQzin4nZawrw7yqum2dQF",
  "key40": "3HHh76NGmHvHJKiGEUwX9Md9H5nFJhbgM3Y1ovwR57KEpgvbw3W7sDrRuo4q1u4CtuqKyYE5phcwjaDJ6YknyQHA",
  "key41": "5uTfWH7k16ADpdyzwSn9Za5uEun5Dasy74iZXfkSGkh4to8kXfyiuMZ2vrAx9eqForeeS2c8UWTrcrEt9Eye472u",
  "key42": "2h2KADrcaEr9YJxGzFq78UeRs4fKoKtQgAraMpjNrSXzUpNw1KEMx35LkV5tqcCRGBKSRBye1LNdK2HA5jdGct1a",
  "key43": "2vVVakyGSBPXXpm83zAZjZZdH4AoCmgdnDmGAbchzmCkTgkB93yiiYWX4eSLJUo5z5JS1LJZUWQhUWGw4uUUBFDx",
  "key44": "5kyh6QyKaMWZGfTGqwvw15gTZTGdCf51aHg2zvVz8B2CAnnrMCsb42M2KvxQ7qbvp72orns17K53yam7HKpyKaDP",
  "key45": "2sEC788uepSEtYTKpQsxmayYhh9BnKBMTv4DmBhdVpj9KUStn36Mee2RMeo59RaXqdoSEcZXD4J4xJ249u9jyHCh",
  "key46": "4QfVGvJyJrps86tk8vsWNvFvkNmxdNy4RHBWTuKy3L2t7rzCP6a69b7zcqiKkytWhcNQdpwFRDyd2Gcz1FkyJsV2",
  "key47": "5dz73wXYAoVw5NX6c8A6XSxWUv3odSbQgYNWPQSXEADfT855DUeJwsUcKCynnveiF5AEzLN54wWiAsmPspBbaEd2"
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
