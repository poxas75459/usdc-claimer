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
    "2j9xvGCZbdC3iS9QGDXXj36R649oXYUAsRzJPDuFcte6ekxHfG72FgmgUX1BCcjnvxZSzPuZGiRiGQUgk26kQjFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Rj7gkcrTLmCisqk85sffoo95qKxcQ59jH1di8SfBJVPCrvM3fLiAZ9hPcBj9rZ43xmCXmNKNx5Jm7Fpe3sTAdZ",
  "key1": "22yLvDM6Nz3zHM6b7WCW8HBsvYYU873b6AwBEWJRu4VKVw6NaKGsKPXt1NTqpyzFHT4d9UL6feYugZUobso1ASsw",
  "key2": "2X5QdoMyQbpxi3eQhFBxsXWyG4ia5yWM14o25UJftiw8hbwXt2WeSCk8rPMYJQvuYuWULFfGUmizQEf3LAR5MFRa",
  "key3": "4tTgwBjt1djdM1V4LT1oXPUPGSZQa6vCFwEV9jGcJqvuJPsNNrDcB3WEAAnyTXxqBppGujw4N7rEtrqi332kevVM",
  "key4": "35bKH9RTz1qeFMNZdUtETxFtwQ7TrC9Z4spvxGSa6nnxRuzjV3XGTwJYN5bTovUNV6tt9ZaA7G4EUr6ngSEaF8N3",
  "key5": "39Cx5UmhP3wZRNTjFGBz12WrmNERAinSnAJATc4o6T8bSMkJ5sKMZievMZGJo9EzLdi3fuDTSwwTB3FHEY9Kzgna",
  "key6": "4Vmtpp1naSDxNfmoRrradMXtbXnnAbVGsvphs4Lbr4d8mUXLpNt3vVJesNBwaNDiKeGKMTvPsTDgb4gvYYsR2WiV",
  "key7": "5LcKDeucwoXsNV33EoRejjDLx68UUCMeyhXbTNAHSTdWiZeA1UBgMK4eNqnQF9dMVGjygvzufSfmJMsCkBQZbWmL",
  "key8": "2GtqWjQaekHNCAdxmVRib9UyhCfRMG8C1bWAcuvbDcMofg3ZNGfd5ikyL26q6kpa3C5prFGKkqEC7CyKCbuzUMSh",
  "key9": "3xrwMnWDC4oQEDZJF9hMefRWeAy9EnYoXugoz8SEQaeEtGM6oY1UDN2sfg1CTE7HXYKh5Noa6rLYg7v6RAeHvrTg",
  "key10": "2pty2M3Ykg2Tz5EXNFTMtraabSFgtK9Ut9FmXAFCF8H4DK4buwRyDEZtd9rqvQQPwKNmvk56ErHCAcf15AYoK7AT",
  "key11": "5hr2RS2iDvbvV7UkcE8ALGyu93hvYkWDR5kRzZk1kmikosAUodJ55Z9kjVsbF9H5kpFivuG4V75E1aZot3KFUAp",
  "key12": "5Wa5YF1gu9fXBWTi9Nb1HeFPFA71eMmfMD9hPVZwbX9GWxqbUwq1rS6nxTTF4Uo5ct3BxJbpNT4tGPz9Tmj3aNVk",
  "key13": "3ppFLDmawLxP18LbKhbvhQrYDC6ukx13LhnGtnkd1iVpeGQGYBXywHowUScNKKeRmJvQBzRNkFKY49XSUgBfiYrw",
  "key14": "2NNrDRRBek3SyyeV6fMHtM8xSmXaVmBBNGaVxEa1Pr5Dd5w8AzB4jdtkX3cPDzC9NwiBRU8MKF7QcXezWord8uLH",
  "key15": "1ZbLVByLGcA26eSCv83NSWiNx5HiK32gg7wr8eadCMqrykJkcYUWZLSUAc3iHqNaLyVhqwh4vwcxvAMehiBtXpN",
  "key16": "44CqoY8boHd2dcCP6UZwzEcYDsjsSh535MyLPVGLLgnDXT6kbZrABZws4F4VPoJEGLu74H76xUNjN2Bk4F6idcTb",
  "key17": "22Y891iuZXLPZa12NWqJSdxfjE1sc13EqHYvnQhkL8qTtZCzcSoF3tEPwycCKpCqDB6W27VD1pKUMdXHnmeAajKT",
  "key18": "4t2WCso7uzqgt6HaCR7bYozteT72ASAJWbfPsjM5gBKRtsdPnXiT2LeZ6haRRXY961kfFrrUqkhmXUX4J5HKYUSe",
  "key19": "3fdbgFZSmiLcDxnhWgpQrg1bfV4NRWBcg8Rj8MdwvKEemHxYq3EiM5gBtJ6D8x7Uq89ov5jEFcfdKwQo77aoEyia",
  "key20": "vZndNfhb8zctnUa7wFMCZm8M8yRYAMNUfvAmXSPvVG15JbvpKg3RVgRhMFCmNQXN6qCyUiYGYqwEUuGjLQafKnf",
  "key21": "2ftJ6kVSHxjm8m3bfGj1NETFi9YMvs2bLyqs899G1gDyF6Fke6Hij7XxUDtyEwY4pJTjjWNpUPj2KsCn5xu4udFm",
  "key22": "28mJcKA3ZEEeyexQvDwjXN9RgXLzXSrnQEScRekwi6Gs6ENHh73sxPUZyDuGFNWZ25pAKvmFSnhRXHuLBvL4X684",
  "key23": "4BCKvggwPLCyuSnjNeMApibHtwCDd2Kx7KVzX7Gn6hZVnBbRxhSTwpWLKDfvtgY3odovjm9yLr3a4YhpJPGHdV9H",
  "key24": "ZiBtjR5B6WTvN1qBeizoCfAL1wWctR8MCDkkufKtuWLnoE6MdEmtd6xznnDGhfcYxCDNyuHz8BrkmvBSQTr4uA8",
  "key25": "2Qg5cFeew3uK2Z3pDC8rT4hz2ByCGfF12SDE2Gqh9TF8MUatfsD6HCz7wLcu8CYbvgUv2HHcKKqSBqWBJSguzN8u",
  "key26": "3FaasXrtP7yXZixhAgZ5knvWLcNWexebMFRXpUgjzgMw1RjZxqWkewagK1sTfY3ydCtGTqpZLmScLkZLaywf2txf",
  "key27": "5Wz65Jaiy7QSFDsz4NFuq2DCU9J3LBWANx6aozKU19ytzhQfrEUXoNF7v48gQdfb9NM4aoJ4vviLfULLLoWUP588",
  "key28": "64t6SMtJS6BxdHy59DvN8CS6JyPcUVHPJiyTt8CbA2KNK7bScBS1cB21x4gXWYXQbYF97wdV1aXGLSJVTX8hdLkj",
  "key29": "4eHP18Yf99TzsmS2WaNJoVB38zaDHVBCnyR2JgrHwspyaSaE43RGEzmYjX8bmxfGLgnkhNTS4WbGNTkpCAZsEAfK",
  "key30": "62sYXFNWjPjkwwG9DLVHBbK1ovCcuMmeT8YVSnTE5tHiZHqBZaYuf5UvAHFDpHCxVQZGAfY8kwqJweXTETSZUJXA",
  "key31": "2FWhW9rYsb8q6xYo9qPcR8NMk9QxtyvJMLeBjTCmNjg2T2tc5HrzAPU9LFsM7XY4iC1tzMvEaLSFnQTf4zBpSqrF",
  "key32": "xqRWdSwz4EavYjkTR6tM8zpzSAJFFQCAiESB6qEmEqiJ9MAG9h68fpZmaFkeSzJi1GdiC8gdehiJziugXugpDVz",
  "key33": "bGASFvFYPM2innjvZ8sAzRdZZSDncHSnrejrzNtKReL2qDqr6wdXJqbJVYwLJiDLc3wX9SYRecXueGLH5UJtPcE",
  "key34": "JiZqTtJu4rjuFz3pmr4ciQqxUC7wyyzeiLPx9Dne7qxgjUQCdurVb7LbCP74114V7APX5V81Lwg1qRdLMWSeHdF",
  "key35": "koByvyAoeqXFqAkZx2GFx31qimAoM9aZinb7DdPcQWJeUSJ6igABuLD9TQ9iTHK1Du4dCtmq6P4jmQkMtaw9ZjW",
  "key36": "4eTVkV8AjxS7nBEZCcmoVkHpUbPxWmy7bhJijav1gqoGWHqyAes6nit2cY2Qbsvc6iAW1i2sjuLdAET6X2aKionc",
  "key37": "BFTsMFxGJoySfcjJ9fDvPNyqrKg13qbY2f8RUXbgJNz3VbRrGvMSNBmP2YxJcXKtpTsjV9Ch75SCjmAszegBrua",
  "key38": "2i3tucuPwS3cHVrQZYaFAs8CfRQeTio1V9a8KxrSMDwBSmTe2ctc8khiTn16FWyvTaywMyug2HaevbyM2j6zq6uT",
  "key39": "TtnsSgvFqHVykY13rqYi1G3NTCUhWupRJD4XRieKgkYxTwWnA9suTLSFR6MuXZRKXMszdcVxh5UbZ4fNVLT89kH",
  "key40": "2XdZhpQSg7EK7Lzkmove32kaCU9c7tg5Q9RpAFxqBpkoHJjn6ZnEAKvp6nFfntreeFfAoknt8SQZSqUaqP9hinC4",
  "key41": "3mvYSYkLwj22BY1m4zcZDGcaEedg9pFtWWQ5H5JLmN1SFMpFzCQraRP72qjWPnDKntAbAzVPMoVqTB8qA4arMDmr",
  "key42": "2Cgn85jbbvfT12EVY9hKtUKyNHcgb5M97uyj8JULS5szMoAnqNchELPiwFgKac6hJzhZDznqHSwXoxaLwLqXc2mw",
  "key43": "g7hoz4jgzPnpn97uhE2v1bYSsYTvtHnjZLXVf3wjbrVFjHZ3zvj8WSk3CYpHjCuhDpTybEx2UQoQD2gSvWH7BBS",
  "key44": "2Qh17mwnooPvpVhaWyHH3r1hRHQNz9sxSQ6tFybLNZsymzcPtshD2NpYL7twG3nNDrXvXb67kJLxE7UJZ9M2WjUB",
  "key45": "58AoReTAnF6CJPUhxHVAnfybti4bbHV9zEe3KXW7JiREzyMmFghRCh8Rwf3e3CjivQ37gUVPenaLhYQbM1UDKHiA",
  "key46": "dFgLH4d2YgGakW4bgstLdubsCmzjngBURrgU4zJqq7189Vk7siBuAEBpkkKHM75ozHBhuu3922jaoGhoXoDRVzb",
  "key47": "2P2zjxL86YkcbyCwgd8jJp66wUvTuuyFePbpWN3ffJVrwQyafosNYN5tQZWwTWKQXrU82mcJnN37Tkv6Zjw4s5Ye",
  "key48": "5fEnmNM3ePkyN93UMT2KE5C7EWL5VoL91soMw2n7z36azJMDEeyKLgSrR9VyJpD8bEspM7gx78XHNJA5NbaH5USf",
  "key49": "4r4cD1Z1gHxoTrv2g98JcdDnFEDUZuCyMWgykdxLSSrtAYXMdf8e5RrRjkzEb5ovEpUjXWYXPX4fhpqdMPpLqDLc"
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
