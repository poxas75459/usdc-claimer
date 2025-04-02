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
    "4yq82bgujbhRFq5VJjtsTiBRDhnT9jqztjP4T922Wt2cCR5VHdyWmUX8vHx3fad9VdFj9rhruRWNqrqJzSkZn87U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7UeeCxJujjBt9rSiKRfLF3uaw4Us6h17o9XEMjF6RWDHSbwgRZTPQ98kR4dXibUDwRwHjoepc4n224JtB5ry2ka",
  "key1": "wfMU1keLBMEVYJuGWerMqn7LeMHx8LFHraU455wBnrSVFyquoxL3QuTUW9SSJDeZMaPFyrzn9FL62JmxLLAGePN",
  "key2": "4NA4iATstXyP1GYJo1XLCNjq5Q2iBcLAAJ9ZwogqDEeGQ5Mm8fd5TQBM2uoijET5aTyJCFGvXMcrTNfrGpmETjZc",
  "key3": "2sANd6ks9LkMTWvNG5tEeayJJ3H1d5CbFLbXpK358arWt2Kpp2uYqM97yPuVAHvgRhzXCip3qbWsyuvPZ2ApYTZf",
  "key4": "3yuQSUbLZ3a2F3a7e4UyM5LGHmVVRPURYT4N9fHFsHBmFCEDKZ3aArgJqu7bKpmcWDNoUd6h31bbPANUKJqHQKmj",
  "key5": "RR6yRfUH5nu82dSuHcTkyGjKDdKZCZKqxVpDfxGLb1pESo5xrz4fFXhzsRMUbsfBK2TbHope233eto7bCZknXJB",
  "key6": "3eWT1CXEbMr3ixBzEEdf4EtAS3VB4M2nK2Xy3yd1cjvBFbBKrQSfqMeAn6s8yLhybmcQk8eZmGYFZW9nw9E9U13n",
  "key7": "3CUB8azHPvnkJunPZns8XHqy3eCYHnrAW6oyczSsTZUbTGEUkJPS9Q2mVsS5G8kE8GXrfCniV4Hk9kUXLo5T4QDh",
  "key8": "4yrrYcvevWMG8FeXiJQxiUb2vRSKJa61UuX4oLEMEFv4n6PD56V3kBsh6vGtuJBpmTSVsHDr6uc6wDb7NKHPN42B",
  "key9": "2tpvtxnTavPCySc6Zn6EMpnd84UTzBrYdVKV1ieUhTrbB7KCn3cCLAyUBsxtwyGAiCnvVmHKaMbauvmegeUhivop",
  "key10": "4VwcS5xkp1UaT3MTP9CBpohfVhzRbTPizvQsXBkjahSe9vfiBgvkuDN4JDnBAEfTtqLtCFgD6m99uBfvWFj3yuRo",
  "key11": "5Y45HPT3F68K8WrZoDT3yZX1AH8egjk6N7vHhxwYKUiY1erpdg4NvgXQk1YXK7RZvizEhiXWSAMwDodVeGz8mA5T",
  "key12": "3zPXaqZZW1ksgnvt2Wt5dGTh6Ye3Kmw4bKsFMMz7B9HcSwHCtTEmCgzUwqnFULY6JVYLDvTM8mBJjcKZkusiYWqj",
  "key13": "g372dzpgA31Qe7MHru7n97xeP1D6FGvNhHZgFsR26QNNhReUeY6Bt5xpVjxWDNQEqbmzmig3BYJB7BzDL6ENPjx",
  "key14": "64vk8twKETSYZ7gGxXfnGtZQf7PoLfuwBVUSxRDSPLDGPnBkGsdYc29iSZFFGPQeEbmGe67QzJ2uiT5g8ioCRJCr",
  "key15": "cZRRrV3BpQVNVcJwDDMXSmTDT4N4oswTMBZ65Xd5Waut7AuxZvcWTwwQjjdarMQueyL9U9fynxEiraFPQ9kXCoD",
  "key16": "3YvxWKAL5pt9itzPzWzWbyVXbNGh2aFKWv82XA4cFqMBgeqoUwQeaufH5jb7MkKaefutJikWGRhCA9VX2fz3LGKZ",
  "key17": "gSgJg7HmzEPmtf5SMNX55RdqztpRZGd1zo3zfCDL7j3D2qPCbASLCWSAx6UjHtZXkE2aWw1m8FmuQpUeHgsTQmr",
  "key18": "3fCdSEWv9GH7qS3kujen8mXAyYFDFXJd3NUGReRnSKdH6HQLrDHdhHMkdXmUbAK8qEvVkJTAaFdkyVrdeQob5C49",
  "key19": "jpkkJw1zJrQeM4f5JKWiboz1sDm79BneGRzDNNbGNZ5AA7joqXGWUq1TSzznGQPEKgdQGVJwzckJ65ihZYW315C",
  "key20": "5PuZVendgNLMNsh461qJNdpZ9xtqGdFz2uNRVprbS565B8J1CdE8j2eE3rgaXzSX7tzBUzKdghT2u5sBPtKatnHi",
  "key21": "3DmfpbtPD76bzadbDoSviKHNwuAg3Fu5QMhEx1pNosmHwCV7Xrsga8vXBeZMiZzBoML3q4vsvevt4rpN9ZdCV5hS",
  "key22": "33bQhSSSXAbviE4reHSQMMntBVATcXys7SFxKEpfAxP5p4eRtk4Jroeg2BV61S6VcJZtfs5yUMqxCr3mX5Jf5Nk3",
  "key23": "3tLd5Zq2LfvQVUy7pdeAxfUCiHNMLkxQwKuZtWh4X7oojnW6VdSjdMGyUL3J2SYy2UsqW8hbrcV8Lv9N1WpV3gvj",
  "key24": "4HWLzyKfEH3h1yYaVQqoUtbQPjzmEJTSszBxQBixaUX9HJNpyRyDTrFUzNTeVXs2AY4pwLTN68uL6Y3gk6AuXHxG",
  "key25": "v8fFSHnffxhSy3VBv8aZsWNmCGZ4n6avbLkzGnXLhYRfziHiJiG99zj6BLNrLkcebqJCxQCxSgnxazNuAsdfNGf",
  "key26": "4um4ZFm4sDM28uGphLdWbHqDrPon9bbM51wp77LMiusJypFK4op2igxdRdJELmEPMohumZhhxUWx4ahH1u3KW3Rq",
  "key27": "jdrva6GXfrwMVFN3nSkJfmupBWbmL8sxsWrDNuAT6nUFwUYypvTJdH8USumZcz8pRiWFbkGcZtGNETS7HdWyufF",
  "key28": "5ws5114aaFKa1m1DitpUozp1q5K7rMBqtDJRK3dQ5KGnrriHmwZ2CrtdbGnPw15sGQgZEcqiyUEfsc2BEtL8WTvK",
  "key29": "5Jux3S46vu8iJpYaG6nqf52mg8Z3v6n8WjgzCqJM7dhsVvmtUuzqNEur5o5U9XDgR8yS1hcFcLMHZn3GWoXrkzqT",
  "key30": "3rrszf81rd9KU8ftvzN4e5PuRB4iETiseYHqQxStEc5jknTcpTAerubt3jZAfypp8Po3v7ERQsAdwu31szZUyxKu",
  "key31": "3gwohkQkno2C1n8AALj7rs4gWc9w3oJj61BFHt4oNS79CquSni4MvVemYzDVGYLZPzu7RjZS5wUVzFCNxzLdM33g",
  "key32": "PiMuFwKv2oqY4bWqJNMkbgJLDALq5jvp4mqJkqf8se3S1YPb2oycrJntvkxQzqykras5pmZ9y5GA3aKHLgH9hyJ",
  "key33": "5aU233zbJKMeMQFayKVmHiD3FgPgSooD5HiWJtc8j1Kbrc7ifS8YWdDTrkfTmEKUQMqWv7KN1xFKYzUZW5LhVPuC",
  "key34": "3vPcLHSFMMRJwti6uuX4dJ4ZKNLeAMmYt4UdKjfoM6T2dABiXqFnm4qwRLDhHPMKEuij4B1PpTkw3sh2PyiPbXEk",
  "key35": "aLajV7dk1ArRek7v4MufVQohM8MgMkLoEozNSGGZeXPrnfGcbjrEnZ5qNWppJ1EoHMEAscycoj6WjAFmabcCYqy",
  "key36": "32xRD18TnUgjz39sTyQ7W4A691eiWarFj6eKxkfbQU5u2xy15RZYSyVUMrbMik2toitWdEcZTerS697ZUpC2WMzH",
  "key37": "3WAJPGGDP8nRPLQ89Si39aKoXwfvXRebZXCsStcNqqLbxzfMEQWuNuJDMG26D4nNcd1yaKywWD4r96ecqQCBcg8B",
  "key38": "457wZSg513XspGKTNo1BXF7Ft14GmHgKnpVS2tc9U2xzjH4mxLtQSkb8yV8m4buARi9hTZkF6EtLyFuJ8AxnPMa2",
  "key39": "5ESqavw2eLvKxVN3eyJ5ETivJoETkH2iSepN9W7TQqNtvecf1Ckee6VNzdpfEvva11Dkz7hVsAexb3YEG4uENy35",
  "key40": "2FfVCudfGNHiDwmRq4VqoAZnrnYMtZGS1AowW4fSSPSRVRPESyZEfspdnuVPirHuWWmYBtkFbTyPxE1csPbz24E1",
  "key41": "5FTNFGUDB1VFB5cREmFvZDtoFu1nBz13gbniJAj1JgGggNw1HyHnMCss1dQyQAM8CDZUGsTp4Kzn6CCoaDycGE4m",
  "key42": "W4GfEirj1GXHJCEz2YY52twmdCA9kXz5y8uLjwRQxTGB7GnuUahYTCV1hKXaaeZrTA3BA3ouz4g9gxYmKAe9h5h",
  "key43": "5hJ2WqNkCw7eePSZSAXfbJAnCdZuGB5xrozVWtW9UtVQ2fd2bWUXFsT1UyCymnNTj5WFTNVkSbWxYeFvGZSLWvc3",
  "key44": "3X7JADM7tFuZQTFPYAL4FFmgifLHGaN3kazBjGR7nmE6b3Mrsz61uRw3qHfib63Z7Bw9Pi9CtHRh8ty9NptpsYXm",
  "key45": "3AUA5tLFTERhohTE3wqHU3u1e1m4tdwHsfhXb3Uep5fXm1MgR56dBWd9vXqxeFPKM6bVvzHGc6TH2xiACU69LzRz",
  "key46": "PYjR3pToGqKXiNprCFgTENdMjcZt5GnsaoRfNrBeBzDaNFWT3hQpHwCMj7oq79dRLaeZ3HWwaJMsuWrQpoknu7B",
  "key47": "DD92eKC3n3EySL6ZS1v6aXUVwDp4VYFyxHYmVX4NTC3Zvjgk243ug9CiH2mKPBwq9VGEjJKfcrHyxTejTEmnMu3"
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
