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
    "4yPLqZYSCconDVM9WTpgwez5BbYkZcQJPg44vr2YMZ7ScxVVu6J2xoP1fxQ6CeacHMi7w93xWY8f6H1bHMZtDY4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41QuGxd9Qwa9edVLUzLTWezECLF7Q4zzguyomtnD2idAyBVsWJydcaNC6nryGpKxBhWx3n7tFaHG5CBJx5szFZ3a",
  "key1": "dGFizXNBXDgdDZ5PCoyyhReJgFsHdjcfrR74YiMc5AhJinWeLir6pq3Rq3So3KM6uakddCcVBoqE1EAGCYjBt7N",
  "key2": "4neo3PgpMfGJzwWVKvZ3ZbiyxLgiib4uoyQMDvJ4qnLR3qC9yQgoz5RzpR9LX35i3cA8rqjvMR4uwsdSvMwdSbME",
  "key3": "3MoN4vD1i6j8s31r1ZFPtSP3CYcWHELgSLrACxJ8eLFL5DrBun4VPif4wxd3U9FF8aqWNU9W3hHptRnHQ6DqckJj",
  "key4": "sMyHGL9hvMmrX1tAmufCQyqe3RVYHAjneBvumUUpVKQNemnKgwcyuVbndCy6JtSC4Qz17cR1dXJnyigaWuSDUQ9",
  "key5": "4p3N4KxEEhBHbbG2Ltwf1WaqSQ7dhCF63buXi5hsSRL1Eeh7GWjSLwdrKymVv9LQi28zxD9EZomKYQxayutZotLS",
  "key6": "ax5RovCD5NJiMnkJC5SKchdw7EZuBPGgLnqezMrJUJwoJQrXz7XbZnMDmcAfWoLVfKugHHptQcQwm4qWxfBaU4D",
  "key7": "2kJeAQS6ReCE8gLbneJ2mZCWQTPv49J1ZWeT8AxEJuDymfq6sYJyB2EAn2Mpx8zkzQoQwUDea9PNJFcPheo6DMsL",
  "key8": "4apcpqneg1jN2kHEJpK4JHchyuiLnAjGZ9HJh1ezBnWYbDtHvC4AWLaNpr1arUzff8sFRMHdLusxqnJhn8YYcjen",
  "key9": "3U7QPC22aDGgw99dQbSbNui8jrJy2YjoBShoofcKBk5W3FZsBh7FKb9AEcstvudKfcs55WPKR6H2UzvqVv2jwGJX",
  "key10": "5fnePgoAH5tD6oHTCZcSaK7ysm1ZwUarGw1Z9goFV1a8GUYcUfMWuqe7T1ZHfBkbVkDk5gAc1k2jg3iZbgtx3xu6",
  "key11": "A5wER7hi7cyHdHwhPvPbC56kYLRGWV282qtUtD9PtCeC8oC5j45yqprKErr4APp8noG1pS6WFgKYP9k8Y7ogFJa",
  "key12": "5nv9XMqoDLSybDAPzKrxWtNS3pgxaWGeGXg6A8aAUFgLeLyhE3Z2nHL6jMw7oCEngstZdDbMxMZa7HgJQj6ZvpdQ",
  "key13": "4XtVDsjVCpVFqbJaKy6MN8bUrrjXojbi2wJgABp9zwoD4bAC3NYLQuFnEtVsAdoH4BQNARUaRP6qgiKqJX5uMxFC",
  "key14": "AL9LYs7FmxWqSALdnCdaWZoYgDByH4HFhmDFjtSJCfQqsQHtJVd6UeBf3oAmENExtRYPs11ZNaqbsrunveXshqo",
  "key15": "2FmsNtUT8ZWxt5YA8ETQoC19aL2pYuo4PxUpHBjQ1KXGFcFdBvNhzDcnB8YMWwYDBXcgwVwGuYRRDwXisAnNdsVT",
  "key16": "Sz6yjedYxHFzJ7LhxVG8YTpGBFbGCAfKdvcP7dMTXFjcXSk8CRoYCRb7ZfrABXGmkai1LWeuvJtkUm68hKC5Hfo",
  "key17": "568m1FBCj4CBmppLBDWugamp3C3FtmYKk2G7KULuYGfAi9Qd6RLvG95m3GxeMjmzNZ1BKEVD6psXPdgDwj221A4Z",
  "key18": "459YicY4ejsSt2HphkP5EqYhw21xJ4DUUHVmvH4YbawC4qQTSygCD7QFKyCq4pKpov9NWw6x99PWn1SjckNsADXM",
  "key19": "47PngRdqnjtHN2BaiUu31iFu3Up5XR7XqA7YVehkcbrfing1Kx1grFsp5pdcZp9SwkstgNs4o3x19ZynD2QCnjar",
  "key20": "4MTVxSGotQtJBEgHG2zr6yMfh5y9iby2maYPh3TGRhPBdGDRooCm2VfCEJ872QHJ4bEoePTdppJiYe7BTdbzCR9B",
  "key21": "5nAiiocMwU9A56zQgcoGxVbkSGVSovtmiE3vkQkpDFy2xLpMFjRiSqrcrCzNecfsgPXjxjuuPowRedrmW9ep7XWJ",
  "key22": "2NUKSrfiRCS5oZN8hCtyyfwyWPb3jXaY2gHg38ib2Q1pRjMMPEL8zx4uDNhjuKujoJESyZtDg7RNpgQFVgAhDhkM",
  "key23": "4uvubQxgVzn9eNLgyukS8JeHdFuxURuRo8PKUeSH5jPiJVqb3mPs2p1xgS7FhM5h78EpgsL3bXJThX7UKzStXATC",
  "key24": "2oWpqrfHtP4H1iDiFpgX6rZDWP7USoBzFvoEaPWJtMdbT3QMjfFWcQ6XjtLQT7gA5T6JMDPneUvAu2SiQnh5a4rE",
  "key25": "2wa9LtFW8rJPReXEqQ3ymgqYj1j7owSyeBpmvLTPCmXR1ZwEiAC4wA7JsUaHXv46Pq3ExnpNv3PaCF8uzjkspAQy",
  "key26": "btkYQ36tmRc6ZNo7jHAV3inGk7wVbtUsJr8oW8SaJeSQKP4BZxbpyNEm931inCMyAJwyAmhTFuNkYktjD4YGjWk",
  "key27": "3qn2D7qBamLRRmZNLXBbNMQtRsQRuBYAkVRH2F5ka4d4s3yxACRnyUUquHdKhTqeHPENwjgMZs7mohgriKuT7xtN",
  "key28": "2ZUh5R4DsjcfT4cJE6YdQqzygpqVpJg3G8FJeGdWR6K2TgZb6SGA18vTFkGxbBFbXriwyN1UZmst77uLd6G7nLKa",
  "key29": "5dvTdi89fgXM4JfXykhy4SYHhEhgFVXk8srx16GWJ2DVXmZ5pi3z4gWmDkC8Sq7gMZQf81s5wpLrmrPipfqRmQVP",
  "key30": "2hnRXAg5A2YETw4sLZ4AkUNpNviwR9J6YxjNqkRzbhjKNiXMXikzEaToytqAvXqKWb6V3EH8XbNtKFFVHkKaSizr",
  "key31": "3jvLN9bMmT91VymP3xNjDzT5wtgXJGb25qUDofeQSTdsgzyWeKaVMS4SbMGC4dFMruJS8GYr9aTJXJ3FVR3se4ZS",
  "key32": "VutJ1hwMfcF6VGN1remHajbmu6pYB4ct2e8jer5yMdRHEnVAFXb3kMzHtVJhvUTVm8nfWSTCetaRjgDFqdPPCYV"
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
