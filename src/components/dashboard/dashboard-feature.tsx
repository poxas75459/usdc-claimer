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
    "bVoFqT2Hhirac22qWEo2c3KbridTkmzK1H6HAqX4EvXySabMwgBTDBArvmLvnfzVPnsYxA7Ht7v1dVC3iHyZLqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pb4CP4TE42NStcoWYkeMLcf6WvVkZfV9UwbECf8Jnh2eT2d5RHwvnpfqmbz8Y2MPfLbYdv49sEUsbPSp39Tiju8",
  "key1": "f2uTyMjmH58hdULj18vfsipKpXc4GcQ1Mqb5wMkCEfrk6uWxzYtyNYFRq6sVqjHPSj9JfGUhFTq5uNgyA8N5t9U",
  "key2": "2Ka6iYbBK7JwYHGDxgr5Dhfzf5XBnXLu1vvSR1ZFWN8tMdQ2KXAqHCzSMUe9HMketYeZJhqTQThVkTku8bp3EouZ",
  "key3": "UzmtezP1o68uA4k2iPhcyoWjB6pjc45m8RA8zvGMKfoVATYMCyoSjbEt7GaEJsHHmuLjdaxesqQTDHhDWxq2Uza",
  "key4": "5ADj7mc8BNEK4fArxqy8mWRxnoFJBQfkiK39c4jvg5i4ccVg3zQ6bniXoXoauP3ocmkfDocNnJBQCT4muSVaKM8p",
  "key5": "51wUG48gqJf7jhe7zQh6Ub75Vh1FQs25TKZoSKTWKe729KYaK6HF67SY48qCXSx7oExsNLwchNB9njdPp1GULJFw",
  "key6": "58mf4KXW34u7sEUT3ak8ZhsX8Xap3zWe7vEvZmHBRRqGQLcbmeyXQVLHU5p4ME4AwGDZj4du6sjjMhGUjHBjJZgR",
  "key7": "5HMBS6TcowX2X96RSkU3eNfwdwFda8kA7HavNaKH5xPZ2NJR1e5d1wK8sNJHrsMB7RoyUQEtZuXMkn9xECpvBJC7",
  "key8": "4qQvsKFdCcKhof4Mr1E7QsZBDcuP2exKjMEChkrKYsFhCsuQYpHoDBEE3k3KFeDkskHHq4AaCY8x5B4Ffdr9UuMY",
  "key9": "48KqmeV1uH3sPoiZZNV6M4ehJmAVuwUSEqxX3sSCbisXfA1QET7gGurSmPVYTMJdxW7ZHtYR3EedgQUj6TnUUZhk",
  "key10": "25Qk5BeYojrvQ2a9m5yJn5WB6rJG3ezvj5DFH9Sadds17QzoEto7yoejhDdd7iiSfqL3cZDPU95nkQMsqmMsDBK4",
  "key11": "3KUWbsMjDGob4hHft4kCt27deY9wJwLMbCfBZsL6vNLJkTY2tgni5Hucrr9AicaWBxECagwZ4iNAFjKEnUZdBBqu",
  "key12": "48KNQX3kDhZEQKFR9fhx5i53xFC4P19q5KdTNa6wFLrMCF6FD91AabQ57PKfMFePob1eVfPeqFiyopp5di8ecKQm",
  "key13": "CXhhAfQdgGmHQyu4n97eq3TpfA5Zyc75eRzdDPLq4im9u8B4LwHxUBPLpBCAsb8RE6nY621drfDgiMi6miy9HcZ",
  "key14": "vntWkoFcN2Dcc7ngTLm4prtnNnPrar6pitQfrrCnTA4hrbN7CAbJ6rCS8CkQfedmMYuJhm74PMexuZLwyGsbTGj",
  "key15": "4J7FPYrtfSf4oN9RckpiWWogweiuR4Xc7cUgxJgps6pvp3MSw5H49RNR79ydAByk333U16nhXgU4kQTEsEkGTwgQ",
  "key16": "53mPYhaWWhgrtpvRqFTqm9vZDks9STZpj3gojpprLzw5wLsMMZvqhjfdjwsfBi86sPaw6GR7ko9ezyBB65vUrQvr",
  "key17": "2fzWALTiCiVCfVoGa2xGkRgchCZj9c4xpKL1BMdU6axPxt3sk4RLZyM8soR7trWn1YAZvQJFAt4NinKBV7Z454bP",
  "key18": "2geZEGZgeZFuKUzhbSZTJvp2xmqcY7QU93NASQXfVikfiVpNNBrGkRJnVbFdxr1QwBBRSDjdbBpo4m7vTLWQ9CaM",
  "key19": "5ruDsVV9tetyts8SEwdWNr2PMPU55gPmb48Z65cGYbrdLdHiPE62PFt2Zf99Uc3ptCo9E4WbeRwpdfDDEUrAw85R",
  "key20": "2GCQT1a2fnSQAzxQdNBjYg7Ht9mJBJKQW8rRS4zdSyTy3jxbnmWRKRF2EwqrU4EwgRbcwSCewEHMa42WZ4C2xrzN",
  "key21": "2ZowfZnuEBPjP9JzcayQjjLmWJbi9MtiaeLp7pbacF3y1XKCZy5CXJm6hPdcL3Vunn94RKbS2MidrV9AAAB2dSpk",
  "key22": "5QoCrHAYGBihk3MvyfNwt66QK7K463i9WxSyaH8QN1uGcox47xaVTkN8nJ5aZXpPxHYrGiaBFCU5yfxqSiHtprna",
  "key23": "2N5E8hsANhjAMKbxaCKch1TwEoCT5ykByKMg6QzXfAxi2jPhuPPxj1jVzvcNmuJs6CzvaXcmBbk797GmMgv6d1io",
  "key24": "49ZGbASQQkohX88yYpvHBLq7FK4yiVrngGduFWtnujh9eqzTyXkeiGdiwEYVKSbkB34i6r41Mtg2CPQBsGEVrkWh",
  "key25": "4TmkAD1MvN7xvFxZz91g7bsAC2Jhb1zSkCki3XNQbdnrkpgRRwkwAbGZ45pE8KXTab4KPxnY7Et1WdXgRT1WV6Rw",
  "key26": "5ynJVJXCTmwj2uUsNhBUszJWwCPT8qBqKRtmRm3hWsoPP1UBrMkZyupqJqUHs3nyW6KngjbubQLd7RLxXPW4tosy",
  "key27": "2UqhENA8h1nya9UTQwJ5s18Tfsm24EtdjtwcWPWxgLdTfwoBHWebfxjU7AF6m9pRmutS5QGh5bjKsgp29EwUw898",
  "key28": "M2eciD6kty4GFtmB7DJfUnzmN1haPfJuCRURGYXySYgEL4oZYJvrrwU4NcpgTVK2vmwufftAXwhMadYLYEuNdCu",
  "key29": "2VLk934w1o8DLXN7saSJXVZKuP7MEaKaEssjBKsDumwTzivPLA15XsoPzovveayuPqMYMoxvP3Jd7d2xeY5VY98A",
  "key30": "2sepj33hSSNhqikSZUVhQQkarWxeW5Mamg1tcy8KCEbB6GFZVBWfkaCi9A5BxxCgW4GEQn7zotubzK3cJfdRai9c",
  "key31": "57AVT5aNqzKWZ3oWZrkUaACzbWHkDEhy5JG6z5LMbbgzmjRvsa7rzcEGFfkMNMRYScwFwkUXAjwj3fToA6L2Nc29",
  "key32": "Mx7L9LFqeLf3KZN6usp27TqsrECwTXN7En8KTpqhzwrwYUeWwUugbPgUncimWookf3dQYcGGd1a7DdGwqmW1ZGT",
  "key33": "4sYvV4zecTzqG9R295REmeL2tJcgotPjhqj5aYkLg2vj6n4QeN7EvARKTk9hWZzamomS5eALh83ZPP18eKnJwNHR",
  "key34": "2amHjKCVPANjmqLNPsMEtH6EhAKjcErkkheL3wguZKACpt6iLWrn6ySVDUFCENZSDh2sYosJkafMXsWYXjbZps1T",
  "key35": "5veHTZGmYM1QEtJZwJJbZSX8zYVvmeEbeBkrwiSQKyt5KwXQ1swZKr3G7LBLhuByhjWF4u8vwVUbagNQFzt7hbse",
  "key36": "4PoLep2fLVmcF5snyhWbgox3t6vPYSBYw2iztGFWb3FtfZUCB13w3vywCqxjEtTauPYguN8Ej3Z2AwMNrothf7C",
  "key37": "3mXczN2rJHv4UVU1Q5dT4WTbZMYQnSfoZuCreLGozUCuZ7Yyh8shUvtjwUTsihhir6LahPNVN9zXoHthq7oarEMW",
  "key38": "2mtg5wvKhej4fpXV95gcM56UfD1JTFuN3ywcNaCg95Dyum6tQ5VyjUrrGBpR8cS556FaVLpZCTiZYxLUzP3t5EYu"
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
