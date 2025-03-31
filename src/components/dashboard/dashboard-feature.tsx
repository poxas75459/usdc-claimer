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
    "3gAcdLoZkJ1NSw7GW44emZh1W6NB2TgCvKSZTh6kmhtXr4dBWhstTt2HVBJaRN4dK3Dv6jWZFXDn6NJJwQCe73Fo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oVUAmstYuWK6Yz6gN8QxHrR6wmbgrFCLmgD1y4y9myKXDDoLanL2qRhDhSiVaVDeNjNUhxBmX3TofZ1MRPPVUW5",
  "key1": "2z1ox6N2Mp7A4cZVCzgdoACzHKXQuCuUJ8sW26oPY5Mjt2K6QJyDr1hs7wRaGMgYYJsksF9TrP8fS91aiYUDkdfm",
  "key2": "38964MkgkhyyGKbUjF4xycmvUpKEFqxEL6P5XBocDhV8BhcSC7hq1mzj3JH42zmF4fA9KdwxeF91vNX7wqf7NrMs",
  "key3": "2pPTgsRWUjJn4dQwU457S9FJBcYvAjFTB3kH21h1d33WSEKQ9uZNegdKBKqNpct5xBWQSw6m6Cfxh31CJYUU8CfC",
  "key4": "49yuGbiQKzAz6rcJtd6QNN5hvscqgRkf6jEx5wcUWCCsJNXnG1FeyoxgmFHQf6xExG7rJMqxZBcZpzm5K7vqJivG",
  "key5": "iByRZWdZWPwPzdXf5kTa8Do8AtKwdE7QGoxCoj6xc9N8q1tPsRRkiF2yYRogi79kUEdLdcTdbTSJNfA2uMECVEt",
  "key6": "4tQAumQB7q7f6rUpkGhRHCk1Ua5W9BymSPYeknZ6F7r5zEoLqCFsZhTLPcnMikMmVB7hHdUPeRc87MoBNuh8aVdr",
  "key7": "3ewmN1pBFPME6pppSuMArr4orXMaad73BnJw6GFGTGWqVntDNQZoZRY5BybbwtAkztT9gAX7qyeKMoM8XmKE5UPM",
  "key8": "D3hkgUH5DmgCxgzgh7eb8hBGWhsFWwFzKEY5WjzNoSPJEZ9dMqCqEJccSM1RBqNk2jTpTwyLAq8BDSa6YLpJtpv",
  "key9": "bUTYvyoRXUvqnPNvwyWmBwbdz6BnKeCZn47rRrQQMaexwQUPsTrX3aVokH2kDPdz6pQHtPvq2AgoHhMH6tEjyYy",
  "key10": "67r1hZtd7vh3KCjvxW6EQLEYRQi3ZV3D2jX996jAmQyQLDvFH1jAgHMhcNKxuXBYeRsMg7yFYa7uzjijTJVeDQa7",
  "key11": "m4iD2WVpSAsQBSonMKVc6JVYkUGAi4L9KzJofa7tuPMJHm5X3KoJXnyB5ZZZofRnv1ngBxxUwkBCGJewmfbuR6T",
  "key12": "2gk4dPi1Js8pcz4v4WvVHVX7FyPgjFs9VpT9EsTFssidBqvjPTf7wzE1VF391smBpLCVVhtCS1sLzjBvoW6JqmRS",
  "key13": "pvJP8fesDdZDzGh4aaNPFqW2wtFRFo1mSi98MDAACmFbFcgERnsoMhdSVemC7zUK2HcTzoY9xvEWGyArGcfieUb",
  "key14": "2aNzdFfwFDRwEqtXh9mrX3s1jKqvjiMx1Wsbpr1R7Dw2UR9aq1HQNKvZkieMNMWsKJGeVujrUHMg1QpWHY6jLyc2",
  "key15": "q5VB94Bx9QkB8WuBh2pu9GkKm7fdsLE78nx6btcPw3CZsg149RAXPRPwFFHB2rWgczGFZgBCya2pq7DfxDvAUZx",
  "key16": "XESQzZi7gEToKCStQoVAuWFSioKgupHmBb2UzH9mwKVDEwJ9EbRU9UAxK4XMJWxxHCrCpY3EuF58nic5nDuh9E9",
  "key17": "47EewmhmSqmwt89Pi4FUgz1iyPnQTyLKj1G9gK7jzgBwjjaEymrZkmJ6mAsLMgYe4mAL9h5HmRWbbtR9nqr9vsGV",
  "key18": "5EaWGsMEQsKj1LBEfU7rGpARG1n3YEADunXcT3R9hKokUTuFJbP1CDzqUr8G9YvETkZmX9oonojQssRfs3PvD9EB",
  "key19": "3DbWStS1CyBbyYBJfCmgakWnwG4W2YvTFWPzcw8fFwVm3ZimpnLW2R95vGRufVe2tWxFqDRz6H9bDkbVpQjNQK5j",
  "key20": "4v6FNNa9qpTqAL2MH8xxzt7adu3mARkdiQz77kkU72pvEsMuhHnwbX5u4EiKtMNwGomjoFK1Licaou4DEyQCUBB4",
  "key21": "594S2YGcoGS3GRt2vnY2mwwQH9VPifS7M7y56kT2wAZGR6vTWKHaKyXtmoaqH1K5H9ipoqDUY1sVHy4s5KhPrkuC",
  "key22": "n3rZgxsQWqtx6G47RMdkrYcmHmmmwWqXvT7Bi8gV2Y8UrNbxJZYnkv7tgkKJ5y2kxQssmuoCoyucmwPevruRieh",
  "key23": "66gs1b9soWzAyagUJv4tTvdFeYzmkVnFf1itKnV15gMtYizPN1ctJsotSzeGH1UdQEG1s5UL3zmuZeJrEbAk4Kjz",
  "key24": "4Hff4usBBrTxhaqDpSmC31Sn4C4jPWtnh3oEu5vYaEGHrArtJgvusYHMcD8nrFKuAFkx1uv8E4Tx4vaCTPnscVTZ",
  "key25": "3rXLAaU7PAP77p1q8Dr8VV4LSG7XnFGUUyRJiPhq8uAJc3uPSjxPYgYgyUutSPGi1nR4Ma9cA94WTwKzLp3iFLJi",
  "key26": "3igUu8JT29PEhbjA8iEFi4hzB3iFQuFqjvUMQfH2PrSnXJuGvo7AUX6MqdsAEErPptDroGLKmUtNQifhDb29aGtS",
  "key27": "4uSQ7Eo9b5XKvK1wbgUPkJTMMzMKdWoW5v35dRzX7ZtLuwNuZydhqEUGxjLR85JjSB4zKxVrpvBNADtksvjKZ2kw",
  "key28": "VKsJqpRPocTt9q4gT4zPySdsR7a1d4KvVaWCZievfYmtuFryTVkdyem68Nm32mK3oMuf2HTiERyyH4f66EKH68Q",
  "key29": "3DSD8jiR43bwsj3L4sDpVheE4jJ9eMCs7o9GidfJwvRL1kRNgXd9RZ6KKJzKrSPyftpM2RoTAjX4KPsFd93XJBBZ",
  "key30": "2MBZnKLx3Uk8waK19sVKvVzrpThEFGGZp6gU2kritrkVSWBhGXfNip3oR3KHfMTz9GQYBHh9Mi1XqGFqnu9CVnra",
  "key31": "EMGQ2Q6owBxRKsaBKYp5V4Gg9ULbWU7efr7nWaJM9tdGbHM7g52oioY2Cj95PmbtVu8vWyxoHuCPgdgmtrLuzk2",
  "key32": "KpKYdFRMtQhe83x6rq1LcfnGikaNaVAJRT6pE2oUfSF5WR6zx8CgtVVkziEq9X1eodUkiYj43QhBok2U64gAnVT",
  "key33": "4DUcjwSNGCjmCC1g25LYSRywby8dWoNkKFUq9ghSVLdG1991mF7VAvrsh39BsTi2r3XmZHRhqxgbPXgnx8ofujPk",
  "key34": "2Sq6LjFDQLPMgkFqwXqrVrx1JejnWbgs5mJtHaEHhC4vDHgncL3koTHm2cVeLNua7oCDJie8G8e2BoonfwmWrraE",
  "key35": "5etaygMonHRGEwsLvnbjFB1nGF7FfiHuWS9B7sdrvR6bt7y9DUjWRurPtNdwa4XEt3kfw1xbuLByqzgbMxQKnwi5",
  "key36": "4PMjcEwSgoHTNkNaBZ82zanCvsNhBxgHoH6pPtGizuFs28Tg1Cax7sEq3cXrJvEZiDLWR5mfZVbYp3ZZJ95ffM8t",
  "key37": "63UJyRwq3bkTuwdiQADa6AZLseQ93pykBAeqUMA1jpJiJfjTAzbv3FgtXUnQkPTjsTwYsWQzdq663r8xDCSa2wun",
  "key38": "3GERSYZaXLewEiuhMkfJb7RPexGq4kGd2AGWeo8Pi9UantHcb6Z62mCagmbyexygV8mbogfiq3ageRuemDVok7xx",
  "key39": "5Cbq7fFeJAATf6bYbUCVdXHUVxKBP78uSNhvBPEUmriywNqHDTfVGqyioqbSetRHojUq4DMB8BzzrsrL5KDFeFSb",
  "key40": "3RZEJ4HX3aQ9ZTpNRD799KPA3Mp3Dru9r9921j43vqNaBhPXJnUFUEHrEQQo3kqo5MSF7aLtk61qYa1nn8mwamEb",
  "key41": "4temcPG7swHc3LyGkALMG6xT3BdDiSi24f1bgeyvSkWBh3zUptqUd7h7AfYgwKJiQLYVzQWyEM4WgogQsREJRtUv",
  "key42": "2YmTkD9M6oNopAJyV1eezMgv6zr3q6h5YwVFQpWGh58sXMmMUJgjh2t5RGv15PmT37DfR9Dt3KK9S1y8tmVVMgwN",
  "key43": "2WAVCSsHMuVfjB1ejwWJsnCNfVowAZJ7Zfj27KvKGUD6ErXK1tjChAVn77sa2K7hJU7MTZcr8ST71oDQwwmh9ky7",
  "key44": "chNALc53WVCjyfGttUAxZxMmoUEz6pWA6p4VS6VtKkj1WZUZ4XkUdsDaevPTH1RDKeUsiSHc2TJmi2fd7xC45UL"
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
