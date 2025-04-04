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
    "FKT3g9cCTC7zVUxEHJv9TbwinsngUS5VmTFKJea3NvWLKSHrtiv7zgpRXXU4E436q43TwjLUL5jGY3FCTWETYHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oPhHUYw3omePgA2vPXf4rn8BkcB9QPVXg4RNA73d87dcp551FeciMoejZVk5Qi7efMxwa3BatyUxcHED6Vj9qin",
  "key1": "3679pkwXYmp2HVuPeZCBC4RhsvLqZyR4CkHX8WyowHQHh6knURmQCurXHePPfjeF2PhR2YgafWircPkkRZfHb22z",
  "key2": "VKsVg2RW14bfrUKwUvosJXmfcZMZY8RvDQA5JGhYqx2FkvkD99em1DyiTkE4bAJ9fU8mraY9CeXig6zSeA2bJwQ",
  "key3": "mw5gF8saoSbABEJKYPg6DENdK9znmEiEkHJXaHxDpkMMZthKk6bhRKTbFzg86APgo6qnRpRnniZ5hHExJQn7Xfb",
  "key4": "3ugAhP4uySoDAZsTki7EG2VxgdYXg9SzYqyrNSR8qpvaEgXgr4pG6V8va3hyf4MRJNbo6JUa8gB5LVeT8c7gSHnM",
  "key5": "2Es5GteQ9hPtRMv6WUUAgmpkQeU8bCDZ11qi1FSr9HYU3EAMciZjmcWmJgHZzCjquqbqzwmWV6jxmtrZJz2pa5ju",
  "key6": "4NuKDW6GRCLkLuXaeNEHUCq8bhGqQMu1MfQUmGN1SEGHKeuHAJkAuvfJgEAP1ZmAAJNLSmUvDKh5XdLbMcTV7ozt",
  "key7": "n3VT4cSZRRy5B3JXCwzS8cSsvuJbB5W7dj7hRHUhV76p3HQeca7yrxweMHCY63d8TC1arcSGeQj2fEQ8zt8wU83",
  "key8": "NZ9pD4qBMHz2kmuqLFGvKV1S8pEVBq8dqYrwBU4XKWog9zbXKrqpdRSv16Bcf8wQgE317sRDxSvieY1FtQbrJyi",
  "key9": "4NTm32pPG7pMfWQKv9yVncuXDCVpGfMr7ep3cWE7awQKxnBLUwiaMSaT5HpNvZWxvBS9meJfTB1eTdwwNfZuMawP",
  "key10": "3aAXuJmfLMyZDJsvnaYMYVkYGUh6T2HmTfdZ7PMgZg9tpVP4tdW9ydiJrxwXNdTbdtkkUkoZgWFu3uXpaxmhNMXs",
  "key11": "4ME1tUhKQTsqoZ5DcniwGpCweMVEb6zGuGTWq6t64wVuhEbQSjz6tsfT9ArFZh1mm7jGL3UqHB4Sn6EfnZnkBT5F",
  "key12": "2iRQveTccJ48hvpr9EE8fGpRq7A9YwCnGpntUvampxWWUc2qHhHEkvHkKibLoJJgYLDkJTEsS3CgVgtcduekGk17",
  "key13": "658fs5Y7kJ8f2Aimr6taBv6mqwJV33no1TSYAKo2jjhuD8V5jabQU4Q7z8R4q6CfohVCgrieSyERuVp9er3nQ5Rc",
  "key14": "4sYcSibAGwtNmdv4UfCC1Nwf5329SjHVojTBjZqWvsXAJofeeSKJG7JVxpEsvKtYaQZpNjBTuhqLBgyZGp18e4oe",
  "key15": "49rgXeiDX8UtnFMznbFuh43dM5vx1GNQQgRswh79hirFEbGr5ssJBozpb9d1sKUNsKDavKcjuA4UzpMrW9y1gLgY",
  "key16": "4C5WSRLVH8nSWrJWNUwsKb7k36h22otQJEz86fgStSHxHYsoPBFbCBk9BPrcAQsnnCE8fVnfKWoXAp7R7AyrP8X2",
  "key17": "4JUDUW1GoywdLg28mY5WHp72M8WUXiUcruuxaQ571jQZ8tQXFSdHsWsnxDwWmdCwkBpWbriKixBciSkXmGecNYsR",
  "key18": "2zXfwVpGwhcWzBFbEYEHbRgsYpqncGaoG7rM4cGPAnfgyoSXAzTce7KYbgjqfDTh8HmhcAYQ37KrCaczAp7wWnKw",
  "key19": "2Vu9phcVzNrDvG73i47wXKNhTYmXDGuyMhvRvskxYVob8FZTamQuEfWAYyKMrQRodvmmVmBFyRgeGe3zHY35Dm59",
  "key20": "pt3cQzy5VZxJX4PKDYP6yetczuzy4qoM9cagSSnKzm7QE4me9sUQ2AvcMCibaoE6LcLNybeHJZbVfZ1ZPnzCo87",
  "key21": "3mE6miFjVcZ4stU7XejwWQxjaMmcu4xrTn3W86A2ah9BKMzzmeUSrD1nx3RmqnHpMqnkhvefPzT95tCTjcETad1f",
  "key22": "4RUZU4AZyYheAicbek1TYms23sZzabRAvuVTJEsaeW7qamasxJcqZqKBEfnttQJaa2povghnjkqzaBcRdo3CCg9i",
  "key23": "KW2boTBtNcQRAveUsLAK7LQYvF1iGR85yzKuMYLZaKxWkh5saCcM4ug14VxQBwU8WL5JsASz4aYeoCvoTQwiT2L",
  "key24": "2kiE8HzsSTtgCBNRP8HrVZe5iEvbtrNcqXmC9ZbHeNLZywycxQGi24WPaAs498Fj65ENvKGRKDPfpHhEdkppbCjK",
  "key25": "4jXi6q1cQkTtruDzY7B7eszwZsTAmtpEWxjBeCqNPxPrrrrRTDPrUxGaKNYbJdQ3sbRpYQcUzFYd8Y1dtq5dNV2u",
  "key26": "4rHyj1twhtLZohEwkmL4BHRcfaR2f6c6Pa5Af68W2T1reAPGf3VmvsQHgFKo13cJ2Ed62KWGxexHx625ate3GoJg",
  "key27": "3o2KAMVFoFr9nw9fD3uRcRN8jMZ2tTMD78uHmT2Bfm1oq2gVywDXtLE9JwJPSsd7jXvBX7i5VDA2KpZS3GemH9o5",
  "key28": "23e9cW76jemkZryfC1RqzhJqf8UfMN9dU34E3PA3Z7hH8knhz2mjFEv7fKwCJ61tLD5oazUVKXKt21tT9edG4cgS",
  "key29": "4Dzg3KgwQqz4fYV1XCrCabYPq7uQdE21JnCpNZhgXQmXR7xUfY8R1r5VJ2PoD8QjBUQj2kMdCskMnh2GKgUqzbFE",
  "key30": "36GB9hftMiJZ35G2oJ3cr3w5H3WoyTKZQTGJnAEnkX7cjJS4r27y9p6aDGsczbmETv45Fnb8pkorqYbu4UUaKx2j",
  "key31": "65v2oFdePPGzSkHi8dmV5sVEjZZkUXtkJQSG9F3HDyGdEifiLpexnREeLyvGGYBHZKRkJrgAA6KFtHZxHjiuEX3q",
  "key32": "62TWghg4PE3KqNr3foF2exuetbV8MgHJc1JNwoNXhbYcpHK1DXXJKiQLuhHRQnykHoX6qcjh6nBtT3bLUqypNVKd",
  "key33": "MNjBy9pJQA2zPcCXQrihkUtxAUTbKZBDQpt1NbS3RFM28MbgkvW9wyrieTM8uCaPmmV5MxDKY3uRSVVvWSQxYNx",
  "key34": "37cVFdcbnZkx9Aozv8sRD2AppKJTgFEMizKfwDvsVVf8B8grPiwyVD6fvdjwEdD3dodzhjYChwNV2nVfcPF3nRWU",
  "key35": "67hvK8vsk3zCGTUjEQ4Gejs2F49gk7XBdjakg2Ptm95voQo3NHoPwoqVL7JG6SMuxG3yv3oemarDmrwGYedzUE9V",
  "key36": "3tgQa9TTonRVEMFXxo7gQ8Lepa3sd2xfrsBiJqgJC5AqZNF7T33cnHCQntKrbxeoynbZmhuZsXbrHwsVZnxae1g9",
  "key37": "3KR9AuwGCS7ZZBWnhABizFvNCtuvwPP4oRBWLSoCdiYFa7MNKfaa9GRMeWQRqm4472D3rRhASrb3pd76dVEpqb6U",
  "key38": "2oLTHSsua3aE4Eb1n5KWq3WAVZy2M6eBHHkNPdiNtwcHXnTvdcQu3QEeAYkHS5LobPTsCuShJcJKi2Z3P3wMdV3Z",
  "key39": "4p2UF4W6EsiuGFZ3MLMuxAwAfjHFLsFjV7x2sHffQQZV3Uz83LyD5fdVcZn7iZWa4zHVKTLnm3zixZ3Dyui3Lzzz",
  "key40": "3tKDfL1wxxGTZyAnjpB1bnJYejE1Nf3vM7E3FximToxHTvUrBf6PsscN1S2pbX3AbJios7KdpKDiHazokX6ReZga",
  "key41": "3Btk26hEbUqx9H8r4ALtEvhritvbkTf9nWqTB6JvZ9tzwr9YLaA4cC4N9bAXmE4VvxLoLELArzV7astGqjRbaYJ1",
  "key42": "3rdmAU3Gq4RST6ToUk2pscVfT8aaEtSmTXZV3pY1FM8hbPQLLwNesWcY31eRbATvUiaJ1GrPBEWVmkuAq5fxQo7G",
  "key43": "5fckranvJpRzkNp1N2TVWGVG3jd6QHpyEGGvLNx5CX5BytepMPheiyo4UrM3GJYn84b8GooSvSvxta3mYT8WTyho",
  "key44": "5WyHDRuHmiVWs4y5P9R8uEa8o8mUL68peAuTrM6DR73ZupXrvkjoBfpkdmpfaZVf1VbtMHk6ayPu44bbFeALwhcB"
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
