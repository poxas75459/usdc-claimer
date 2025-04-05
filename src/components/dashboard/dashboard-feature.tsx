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
    "2mqyX6WwcQ99fmhQybgYtW9eEnpqMBXXq2an1mrpZUH25LcRwaBBdjQWXUp4fjV2QeqWgZ8HdCBnSAmfWmfUV5K3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24vaabmUNLTWawu5k9R77dXaF236JdwxchiDTRzAVQqkPQegNBDC4zsbV9EJpgqJ92NjPm3pyg6cuhDAJ4mW91jP",
  "key1": "4TrtfrgMaFkyfMV4851U7icpzhWXJYXmB7w2sWkDsD7hTU65rSgD3G8koXbBq45sWTqN2t5PmZ9ddDE13fEc1NGK",
  "key2": "5GTqHzdZmNWvNnugZm43jhsRKMAbvJa71FEjGbeFKHBnNyUDuJzKfUfrhHkbhVModER8xbysPKFe1wLfw6pBzLt",
  "key3": "4cuFuiHNVZKgSrfgKEP9jK2nKsFGkEMrQqxVqYqUziDHe9C5bfspz1FmMUyJGxZEwQLGJ23NcRjm1Sip3MfbBKDS",
  "key4": "5NKe4yD2V17ARZ7bpbZyjJ5SAqdUAKjjjT4tQngjFMpvyufZNExZzspUFijW26k5GJcbE4AbQA16dE7mGsBuKTuC",
  "key5": "2mvN6G5AFESY9FmazmMYAXToCzpUk8ztGTiWryLnAeGPDct7Nn1A2wUNz8VTy4jugbSe4RJvTT9UBRzfrHsLtTbt",
  "key6": "g9rA13YC9Rm8ujdmxnTbZXkGS7RyT6eT1Sn8ze5tyEQsQJDWRQtxpasNpjgP3LQ1asfP7THuGRV6E1Gvt6Bd2Rj",
  "key7": "3fAtKCAKC8QdPA1gnieir2vNXJZzWV5qTH8gAFzRSx4AC9AoCHufBQ2zRFyzKuXnqFvXABsvwQXL9uia8L64v1q",
  "key8": "3hy9xp3jMps2MGnDVYxe2daaa5zxQKhFvNsFyVhmheeMQAhoEzCzFo4RP8QT6KKNQJWYCqiWhozNr6PcHMUQndU9",
  "key9": "5T9zWsTJLcToERopXYTH5hL4EDiD3jcVpr9fn5MfA2pAGskoVtvB6v8E5bLEssnhP8dU37X2skPRKt4QuD7WKcJF",
  "key10": "5VYhPGC4vL6BSTuPgMXPmAk7sJDDDrNNXBm2S1cwYkkscnFJ89SbPkcLoyMrowfBxSnevpzQwSxwrLnKcVEgacyV",
  "key11": "2ExBKqTzfRzcNKSMRuj6BpbCd3gHf9zJuhmg4xoVe8LJXg14UMtLcM1KPMLWiTC42cRUGnmD61Ry8gpUA1Ncodf2",
  "key12": "4ziZd5JxJiVvptqwBMFaJCpPu3bwDURDaiKLRYWNLUzLnWvGKkhQvHNYhumGFrC243ieTWcDG9iZtVkVtAkMSKAd",
  "key13": "2QepeESUB4s2e76U4gfo86VbUeZf9rkXTszjeqFomis8af1q3MVrhcQBqNcmrDUEuJvESU1yhxnAYbPhzkgiNfYb",
  "key14": "3JCoEfPA8Gha2Tyvxhn7paGPhxtghnC7E4tY8Wne8zWJ6xE19c6zfCtcxAMxC9vu2DfgkUkcXKhsVnajyJjnnpDR",
  "key15": "3XLEmfcnsDCRU8BRKd7fTm4ZaE3yrWrb5v6BQH1L2cjP6PqR7K6vHiUjbRkmrjXJ18eMEG99ctAPADevAdo8TRc",
  "key16": "3bYS9WDeuzQDH1kv9be8sfbrfsnu311QUFNnF2K6Pq7owCegecVR7yu6txkWThqDeN4QpopzyaKvvtPw8qf3v8qj",
  "key17": "KcDxFCTbYKH3hxU1pAygbKvzxRFHAiyNGEcYKmzJmNFC9BxbQuED7bvTCJoca7qZY2kRJNs1CrGw6eMJgVDBiWx",
  "key18": "1xsLFRhppgfPQ83LDMA6yfPk5ojEmK7bPnccRuzBrXDTa64wBVDxWbgHsMMeqAa4JiT8rFbupgqRVkGWBa31CZ4",
  "key19": "26pQWRWRSvfeb7vCHxKSBLujT1yHNagv9jVjPfpUjZmyfcjhvyjrWpF5V1rqS8qxmakDVGayQYyPErAZW29SJBio",
  "key20": "gemsQNRrWdZw8hW6jegUmnnsk9WGxVyxKiHUmG3k3JqruSJc9Zqopw7QyKRv8gCdFM6PTJjAujoEKw617Bi7sjf",
  "key21": "E4j81JRRrhJKzSnKBNZsnETiRfgZtweCaW5DkJDvtv5haogBL5dEeiqUf399iHpPKUfikKXD4dEE4jvNnBwi4CB",
  "key22": "8mq9BE7cSzfxMx7b4iqMphnVwpEKh6K787JVuwZnHJBYAHycF7zFaJkUohbGiiwUzDnfRdFqKgR5Z5hNW1euRdM",
  "key23": "wBB12vpfjgJkw2musY7rfKeuDumXgCsMwfNdDRgdX3BFdR3WXHhLsS6zywgeSHdMnwffchvCjZaBptoQRCY4wZZ",
  "key24": "2yNVb8nFaBf6kAYnbyzftqmpoEHxcbNY9nYrL74ht92eMZtcmwL7CQm9mXL3rbyTKRnpeKhtfMzxy16qPHdWSA64",
  "key25": "4bKUWZjGDVYJFiicaBd2LULYm32jc8x9ATTy6dDk8tfjHjgHTaSZATmLo5HcVHKtMiT7QPd6V7Yb8rqo2USwVe9g",
  "key26": "61DWd8DY6x1NdHrFD8V9sQ7zdv6xHgQcfCPchFGn3MSAtyZre3J1f9RvtNkHJsTg63bo4ZkGE463ztNJm1ws6o5Y",
  "key27": "SGmiPizU6wsfRE8Rc6BfxGnmCMtysqKPQ5Y2n39ris6kKvGQ1H8uc99QNueV2dNtMQ7WVgG2FE6zuYWptZSQBig",
  "key28": "4z9tMUB2SYvAsEXswCKW5gUFW4XNJpjjZDi8oo94tdkAK1UbwnLbCKTNfAji8KsasCM8fvaU2hP9GbbWKGXRRYuP",
  "key29": "3TAvW3vTRp4kq9AT1f7YgCi6krxdYNRx32UX4fu1PCGmpyjTGWDTxvZHbK5ErxYfgYh5FRwLpAqAdurj1NAakJpM",
  "key30": "2iRHfHhuLgc3Pxks8wUEZ5KnVXTW28bhLyzwsVb3NFTK3sEyy7BHr2Rr98wsoz7TBb1AiCzfQggVXzfXosqTA9N1",
  "key31": "4k6pog2eA8Wh8JgcKKiG4eef2yogtP73g66yyEhGtcBpL5YejWRPeokigFhEUxk5N5fs9Qw7BkBHZCZRvXeoDVt9",
  "key32": "4gB3FY5mZhA174TrsxziTedbQk94xjc76EHEzmtiZqDEBGcRc9L2x4CvvEPoCVRnLrXwUFrSQjMZ3QKQPVLoVYoK",
  "key33": "3okRVCdHDnyEZDEuA4z9r4BiyEGhYCYW6A7qUfnp4JvbhSS5rzdLCJsUzDiZXbukUh2GgekBds167PWqecFPVxBu",
  "key34": "52geHdZwH7fwKszsDPTYzKGThRsjPjteEqwntgjmLaVRbeWzoCheHHBkeH8pa1adDD88aMpkApxHUzM9EDVbvRN9",
  "key35": "2omHh7mZCg3KQj8wt5kFzKhmySUmSgyoNGFVESLhrWSHfJhF4ozvH5jteCqgdxhiyS5PcXG8JsvyvLoALcSjKdB6"
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
