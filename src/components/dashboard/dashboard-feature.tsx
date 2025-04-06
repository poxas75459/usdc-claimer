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
    "58Xz9KV2JZ9BDWaUuY1yp4zicFjvAUhoKpSfMcN4DDtAQ2nRUq8FKc2x9jex7SnMKvnDwxr1zXfiKdqVTo5ZcRyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZDeJVs59NqFU7VYZVvwkn9EPYVi1gkyvXtG6ifPuGxwUQKDJfCjrmVMaoUE1ShhoE8B79uhX3qG9QgGnngzjqKG",
  "key1": "3naVujLTgSAkhu9DccjVcRsh7rgWCxdcvziLH7TmkzMhfaVwC1U9kJ6MfmwMh5TdqUD9Ay2r4s9BQoFAM2kioP6H",
  "key2": "B1bjbJGJbrXCJW4HvAxJqWjpj1LgxktXVeUwA1khwnK6DxupY9YLE8q9JqbhSnwXSQDVMXLgcdP9xckepXsbU9G",
  "key3": "2wZpNQSkmwSvfL8WXnYpzsNLU3bu18w2ypUF2GbVbTLQnZ8rrZ8KHZLm1DsJnU4ojZ6cmYVYM26gbM8u1g1bFBvx",
  "key4": "5Ef2xmBrPRdt2r11FbQEyzptL61ms7nerb7u8pr12qJqLteqvPpgWJJt6AX7DSDFKJUtWN4WfwgU9CEWohqadkZ6",
  "key5": "26RytmK5w95crMLwSpxqmGtvFmFEz61188bmS43QNvLZB7rd66qrBuXKDsVQCF4dWoKu8s6N1BXLNS68v8YEiZxR",
  "key6": "48fX3Fasy6SRGqAumDkSyuwTcg2f9pFe2cxupJu2Un2cBRyjih1Q7SxHRy13rpieEo4G6sC2X7fuxZVDMwPCGuX7",
  "key7": "5rpZNn7BVoRVQzYAKVy4tPiHcQ73huD4j88zaS33H886H8z57Xxxzpane8CzmWZAhDuMPbSfHoawH1wXmiue4i26",
  "key8": "3CwF3p35USoQh1UUkAh2Gjt5XZZrpnr8ckj73x7FaLxVinbRMxMsqw3c1m7rW1mcQ4UkvfZRU4h88zB8Bn9GJZSQ",
  "key9": "5TkdmXTwJuZ7x5bQfvGv94WneWs69Xqian1GLC8gu3LsNsUmv2kQYD5t3vStbPZa4cLPrj3aiSNiss615BmfMKdy",
  "key10": "28TB3QQkbfi4KVHLiJ7eZCwHMexvJnivCAD4Ncs9oUsFB6VTeG1ugxczJabhFnqFRLB5qbpEq3Xf27wHgqXgnHaP",
  "key11": "3UgnwREzYGZwPUyNYqTv9ANiBngirEJ1sUtVqMswD3kKE1q3f4y8xfQtueTgn7ezzNysgbjE5bgW3gSv3oS8CapC",
  "key12": "4yJaxr6rtDqtWdBA6XXKkw17LWxLLfw6AJMESXPKWDV8w1qENjQykYnyeP7KdbUUCjxkMWv6gEw3ttATsQ6jBQKi",
  "key13": "3dCetEu1o7vpqcxQ2bxoEXthW9FM7d33jnMb2DyocJU7XrjBdAWRtBBaBrg43GjPQSnyjo9W7RGDrsBi6R8dAcyp",
  "key14": "5t4ZEmTAWhDd1GbeQsqoNN2bugERco1mCZSJj4eG4y4xfLEhub4E2SyYqBE3Vhc1e7q6Rwp1DY8S8a3dLq4pny6T",
  "key15": "2ePiKnsbjj6GZQvncQCwFcuZB5MkdPd1FGsocno5PkJF2uPR6U4gAU5wvJwmXwEY6EGN7KRRVqz1DMSgubk5kdWF",
  "key16": "EfgKFeNdbD7S6RoZFTAWQnMkxpk74chw2aSSjwzA6ZWabDn1NeVkCzL5gY6CH5RLpvjjVz7yJks6sskvL27gLPT",
  "key17": "R6B3awHys3ZGcjFkPejLjniBjNhRYTV8cHe6EXiXpUbUEbni9gLe578xgfTcrcFs8XCw8DSq2idKjKGmcxWCzjz",
  "key18": "2qwLnQQxF5VyXMKnAc7NUtzhTdJok5Hwk41iv9PEL5ickXpfuJoZB8tRzJ4fEoTLYoLsZmbJiHHdabjiEtPcdWaF",
  "key19": "2Pkgv4eppHejD1wQLd2JUJ3F31pFik3YcTkJqStpraVRT9P8113giYqGExNobacnt1dX5GKvu85ATRwgFXyct2bQ",
  "key20": "Qz1W51JCr6afAoHLjD68aVpfXWv2knyPcgNxiZnDj9tfAFzYHYoHcgNYuUzZEkBqFVG97hBseeVsEtbxjZoand9",
  "key21": "3jZwJbJbDZFhhtJ8pRFwt32Y1965APt8b8xikvM2SWsNf4SiGszimBCk262vE18uoDEVnsn5ud5QtC32i25w3FnE",
  "key22": "53sDVxZvJB2FG8D7oEV8eeXBETCa1xyxzdaepUoSwREcRq33LpDgVMDSM3Tdk4Ejk9G2h5PAiDeLHh7QTMoj19RH",
  "key23": "3cVMfpaoRs4vmwShFqN36wRBiVHXjjxyQYHUgbvgEtzFhcdWmB1HX8eumPNudAZLVg1eJ9fuuy8imKCJTm6Grk5a",
  "key24": "6YiUXg4afLNGs65zdU4ZYKEYXMsrKNefv9GAybhL2YezLNPrZ47wWueZsSkv3VxyRJZ5EL1n9bYJDuotp8JWjv1",
  "key25": "5oPxV7ECEU4krXrkcFSrnwK5atKUcLS7Vt7TTjEYktcfd687q1BYuFr7Uxi8S5atdsQ8m3EJr71BTLz2nSHoKFby",
  "key26": "62Ebk5ouF5vUzFYbCr2F3sDZaJ7m1fr34ZWPg2jyXFDxeJZqF7PcqMHS3gNB2jcZkXqQgzfANYF56a59LJ4aFnya",
  "key27": "39Bwq2qkG5BqnpeTMYoWMQ1Mrwk6c1cBkqvSkNA1etCSfWVxziaDR1shPZVCzVUQLuCMxfszZDgGpa5qVoWirbJR",
  "key28": "4zddyAjmakDi7Jvwj5RrPM3RZ1z93ycrUwbTfkwqUcJkqheGKKkdDCbvHLqVyQgnE4eifinaHrxZsP7iZFUYh49Y",
  "key29": "5RcmLh4VbP23K4M1VngwRkK5kzMJFkS3Z8WbkN4p6MgLHjXCEDAoqCkR3V8UZX7Yu7vURyeYvHAzuPYB7tqwCu3o",
  "key30": "5zG9sbm9KRagQ9HwoC179KzVy3XrMKSmCbYMwUPV5pAYXMEuWyoeGhT3xfiANycae5Z8fyVzLubscN166JdstEDE",
  "key31": "3nTGssvoSdCoUvUEegwQhm69CvtNRRgsUjW1CDUiZ1ATHznAFpUHbcRebbLfeunjPRf33ahuJmUJM4Hye1942M7p",
  "key32": "4rFo4z9rXxFrtewUgPuoLHd4RsQNvjXpErzUxwjd4kSR3BfG5RVHCL6oPdruaMcsrJTTMXSXpGMu2stEUkQDNGqf",
  "key33": "65QzM7S71T5Jf7LRHL77KdGjKKpG2EF8BuH5x4YuWpfNUoZc6USyj6HAbauTWmFzU2XtbGKxmfj8QGN8EnsxPgzT",
  "key34": "464S8U6N4Bz2FRh9bwrbCBUYyS3kmmMNRP77oDYYNSc3SyL2eJS1owJGdSTsvVxeWH6KnoMNmbEZA9SNb3QHWZPb",
  "key35": "2Hr2BozJtdG321yDYvkSNdXhjDatD4Ruw1m6fvNtATBEjkMAReJkWxbhmrhAXGTaxtMzFwnFbqHkH65qt8bixTDg",
  "key36": "5uMbS3xfyUEpYMXeiZLKrAaeGhBZ1XNr27BvBh8MHNMcx5feYTAqPK9UWSRuyVsjV4yitYbV5gKbxYa96zyMHmhn",
  "key37": "4RSxRpc1Fh3u8eGpoZSG1hiU9oWMAZLdsbRDrNczrH2vZkCYsCPrZ28hJF8aex3aaMWXyfZtPX9AD4JxoMj3ispZ",
  "key38": "5pLofaTQPD3oLRF19HngLwsA4WQUcU9EzYzLFpP3PpEVaLNXkCoUCS5U9WMPcA17RZ9JkDVkKG3CZseVaKrQapvf",
  "key39": "2HtTAa2N7Ssc1fJ5cLLZZJUmj2GLG4rEZuo1MW1kTUULbHgQoXxLETZCKsSSNQ8ZNVm1qEnmx9FAyWBegSYzJLgt",
  "key40": "4ytMP2bAazodXjz5N2RTGwyjjqgBsjtFpgi2KfZ6uURAQjvQCDnE8uUZWX2ysBzSk1V5codFLP4KWxCo93JX6mwh",
  "key41": "infEZwSEzJCRJVam5GRynzkh9rwrjXu5PcfJdu5CV1aX1yw2KReo1pn6XY7FzcTP95GbVWo3v8wcxRPSaKEJWp4",
  "key42": "3q59ZnWK84isNzHrBSpaoheipGgLo7TnrNkz36b9hTLD3q6kLvMtMHbjjPX2oUMF9VenGWdLHjQRjPi3HzjzXAqq",
  "key43": "ndz1ivjSkRHjCwmJcYHu2muiEm7zsatpMJ8S8JvcVW4KJPcua6EPmr6kz6R4jM5g3xbq46hipcy1Xaomuho5S7W",
  "key44": "2TycF4vfCWEpBKNfPzNc3m6WPcVq9D4u8Nyqyig7NpnZ8KDjpQx7rpMrqXbsYEWSu8y8YcGKZB9dfq45wRpiphXK"
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
