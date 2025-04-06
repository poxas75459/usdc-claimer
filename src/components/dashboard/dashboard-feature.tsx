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
    "xQ8f7unhqnH7wVt1MsH4uaNVKRUBLup7DN4aaajWppQvptwGVUWwZzAtXCWbCgjTNdLBhBfQZF3u6w3oAiqHxsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xBj5RMxW5HAyJNW89Atj3t8mbg8wxCF85uAgtQfz8kJ3UVBVzhowgM6Ho1LJaMEQ56UJ5JF3zZUQDZjvph4neGi",
  "key1": "n7aSrgpE7yCezSyZfw3mDhm6jWKsPdAFXraSSPCCSTqMXwkLM9CDJEBjZWJrBxmG5f29z1RSE8EvNS7RcXqAJHC",
  "key2": "568MhzCCn4xbMpTKQ3kEXhGWtGV47VRuSCLsBByxK2WQjQHok8eBiu256G1qhVoR69X3SFCAfEDMmdqHx78ETU8Y",
  "key3": "4aWsTBBH4tBzny5qVz5caaKtSQUKubWWhef1rHnv8iS5W7wsgYB1Qk3Un3i9N9ycMmUeHnVerPf5vEXx4AdT9nP3",
  "key4": "2PZbwesYQB43SP15a3yyVXoNYo2AxPHCHkDMPYEYcFWTsPWPvUVsbMH8zELki1jHg6TvWyx5TyVQoQV4rmmuH9Ae",
  "key5": "5tkGZgZm7Bew26JMdWGk6egn2XDTUmER2CtziejJ9qAtGXjZVR26baC3uDbUEvCQ2CfCp3TvaWM3FqtREuda6vpw",
  "key6": "5n5b4zApeNE3GcrnBwZ8sCBqmdkvzixsvBJyxiPBYu3onpuvXfrhrzAh4TyVEjkb3k1T4wmPc45ioYSvpy9Fuxt3",
  "key7": "qqh9Njkanv6FwVdZKAXFamjsHpZYyjF95vRogGWRfd1LbF1DFAvpchLUQH6g9uBZoTHvmzsnpv5aXF4s4pcnDkz",
  "key8": "5XDJkP2s9TnMUTJ9ixk97TPfZW52U2YRCXAGuXmnYqwGBj6beSyzjKczQasCSx3HeVTRGZ6PLcEg14eFDogAwBsY",
  "key9": "5WWydd8kS2zgB7Nipezh1wuig1aUma94aTi3ZLXarheeZ8gmV2KzVNUgog18pioKFGgH1iVwGcgGR4mrkNYLdwCs",
  "key10": "w82p7jhii3Z9ouuSUP7zLi9VjNCz66o9XB8kpyym98mqTa2Xnfs7DuxZTTVKM2NM7DeqGwFCxKgBLjWva6QAwE8",
  "key11": "4jPU767LmHb6BMiza49DkzSjmAt7TSMn6eXmWBUbVJiCSoJukC5fK9mMeRhyrQ9P9YtM68skdoydLjUstDUopMQy",
  "key12": "5feu3BG1kiftj9fBVhPy4ESNvHa9oZNCbkvqZTu7qDG5XWrHXrZ69U13tkqfDdaUbUUismWrSEi1p1hyzn2SGbxu",
  "key13": "zsVAmf2tkGz2JeteRdx16KKVcHiA1BDup17LhFvsDkFXV3mEbngYXWPZ3oJBDh1BGhaAWd5yD9KbKCUbqpjVTHH",
  "key14": "3q8xAqpCG6DGjcQ82ViFptmK9AYPD8g2oMPBGgJaAbhxHXBrVeExq2EHWRQ8zzrt3gJB9ut4fg6n87X7cX1yoAyC",
  "key15": "4Lf9wMxSaNrnjqsxTM6tz1KeNcJvdJH86qmL8zTmYysDEc1F4J2hXEkXdGiLqevj8uwZbuWkBECU7wVT1xijtsDY",
  "key16": "2BGT2mPm9RRm2ZKnZSjYDmUtHQ43zwQbFJmdt1o5pJGoLUZLhKmGS7B7PjXWk4v5DUrLkUBTEZk2JMCvjAjAXxeU",
  "key17": "5qy6MfuFFFv7kSDingWKDjkMZZgJ2piLn1mjbrFFnUwjaYetpkN2kxTYKaLvcDR8TigPwZYJuRPVwn9V1RUZUUrh",
  "key18": "2BGGUbuRUPWyrHhPGxRtakf6EvSnso4WxX5BY5PqUkHqwynCf6rhAGFqWuoQXChcFQ4nGV6q5MuXRP3jP5t2rv8i",
  "key19": "ZF7n5KcY5q3nGVwK3ZWvBZPfdEC9vVnpq3P569tk5CzVk2aa3HAySMwamoBZcpiRqzzVTVtyU4tdE4zEFasgqG9",
  "key20": "2sFpEUzMikpCxwjJAZnDa9jSzGBCGAewShZNvvjFwoDiXq7vBEepqWBFKeaRdhoXiqBCK6dQcpFhy4eyguBib32P",
  "key21": "2661HCUZrGPXoPEPvCb6Bp97UyrUW6jXjS5eKuQNsaT56a3v9XNHeo8cEdtBaZuBdJVGqLBNjBPC1EaeAd2AhyCh",
  "key22": "QKCquiCK3xTE6HPABqAfjE6m9simhNwhpS11XymtPwJLy8Map6A2hoi4hHvCE17egz22HHns2EQR1KT66FYkj3B",
  "key23": "5ELHgjuJwgpcopCCeK8WApBr1wLgJrM7xpMoZRPRK1fukdfcTtbbsZWvbSZzj3wcyRyU9yVa49cZYV3VSiBhxu59",
  "key24": "3vLTF6hQVM5eeaJNzsyNE77UWgVnNkFSSEYu4csbtYxEopqcUCUkWLzVn2FUkMAAWyhgUcyk9XFVakzRuNYkGYBR",
  "key25": "6795wWWaevvux6vfp6LT81fWTTXXMesg9EgkUUcCAo6oJ46WGiFYd1Vd4UNkHPXdeQnuroqPzGG63ECXQYHqJQfs",
  "key26": "4CaxJdeqD3A8qCHXHrCA1X9vBTrMbd6FSyPYSE9kwYeCcap3oGQ6g61otV86mZzvUyS3mP5mZhcUdixivXYQDUpJ",
  "key27": "37sQ3WDtFM9jV6GM2g2zp2ebkEpi74Pioe9v4qsLju45UEUSgS2mxwXocifQdu2NmWvZ2jbkCesQkw2GhNcBZyD6"
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
