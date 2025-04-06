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
    "2aRnCkgSKYt4HPjTBRNzimZUrpJ2fZUuoC9y2XCnMUGKutjgBBDMRxtaruHP792b7oUD5jvaitQAg6HfNAZugvSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aT9WkN9sgw88TcB2Y1BhNNMF76VZkTRizE2LeJxF4zqBYo6yL6JZeUKyaaZC3oqSPZTjq9Cfvy4EqQDn27qPw9o",
  "key1": "Uy8LyYJjREGYqTMMdSPyzYhyrk3W2VPJUdUB6eq4VhDnDn3AmnysA9GUJTfSKbE8Cbn3HXDe5bTKq7BJzbetnbo",
  "key2": "Kt2yoGpYjGEU3NFJvLdrjvJqj9PFZ1de8smwYKN3MxZQ23JqrfB4YYQ9AjR66qSr1RnrkdzU4chXiEPJF44bWwu",
  "key3": "5WWVBLdxgC7gSTQnXghU7ue9uZFhRaJ4TmxzzAaKwxFV96xcUKSmCe4j32Le5msbfA5p1nkccxfv4mJDDnhj4vLs",
  "key4": "5fdSAbfsG74owmWjWfzu61fZDt5QfSXxxvpCzXXMiqYKn5vqAcxqiZrLUfSMNeGu7ipjSSHHbAjCfDudAkAiHyMF",
  "key5": "5iaLSj9PQCcpuMLPWRwubWgdaSzuWU5hmuodcqYbuHqu2wwp7N2cpko3vPw7pQxwVztRo7DsDvPBbJcJSQVfroeF",
  "key6": "2rCnFKcHL2DTHajbXuFup3GALPzFYqZGRDLNoPGadrkgQgPwB4B3hwcYqSfXVfbMS8X5vj7aQmGb8zLhjFKoFUm7",
  "key7": "FqZ5KeNw2KvF3DQUkoq4hCuf3ZiFrAo4UU3omZJ5P1H5xLoddmtE4o6yUH7gD8ojL7m89EwVshf1e6L4nzwNfyF",
  "key8": "5y1UpWE6XJ1haLFpCixAGQuStjn9RRBYUhHicxe6cL534yFGstjcjsz9bLJs2uoKogA3PEDuU2gLYbs9y15apTrG",
  "key9": "4CVz7BXmR2AJsdfgoS3kx7w2WD61GQEKbbNnD4PUum34k69qjhfyyXQZ4uZjvcrgCtbEt8FhvYXKaB1txjBjbT6j",
  "key10": "RwpqXjgJ3Ccx1aXspVH6jieKDzNh7VmuFNvLR7bhV1wBbhceuuT4yFkpeWGLjARP226yWxuSZThaRtojexHFTDW",
  "key11": "uB8qSSzyZzjzYxhMKuYwiUi4ZKEwmxFfwhPNVgiUeaXxRiYmJ1jnXDYWWaw7xwCazx43SR54gUP1AdiuoUwJAH5",
  "key12": "cgwxchCsYUMx6gE6HHuWqYZfGPshSTDKdJQsTXCe2W97dg4dm8FYvYEhofEYA1Ve4DgpefxG2rHpSexhfxNwhQc",
  "key13": "dCcGEEhPRoNLQddfLTA2mtKdqtEDwQEsR4c22htJ6Y3EQQ3tHXvLfHHuiDMhhwcwsASY9nnyooke8DK1CEnT32y",
  "key14": "2SmznhPX7e3VWXQhnqvN3dMdYJWA1PYUdFCEoVta5XnCprpqWbEvM1kitygdEoJDFs2s5S1hoti8CAjZMfEoAXAt",
  "key15": "4PE2riMXB4W6go6NRnbfvCm8AdBo3ty9jEfRTP2zR6iWUMiiv8HNf4VaPCEGb7E92bk91qf8G4VBKZnA3RCG45s6",
  "key16": "5jtWRrMnR3gEvo2cWZvUXLVxQncP5JZyZjGYF2fRtPeEQajDC1UmhL3e4nKjWRvDisDMCssZrpebhA6ugugzZEs6",
  "key17": "3nV89213UZ33zJaCtBfN6pF5yQ4GtK4AbbycxxqZejHKrQNj6EUvF39rNEg3kgYXALcX4Mzq8Cck2ZUKKGUAXqmA",
  "key18": "4wRjMC5P8QEDcRoa8wHaP2FP9kTvSjRpSNDSGHpq7VQuKzewQ4cgzRKzb3WDHoj6Q8R5kFXuivr2xK8R62TNsc3t",
  "key19": "3qtFgJJFTxWd8szpiwsEXdFuPTEoEZVbaLiNXfg29E2KQjKAcf2ThGiSPT5q3djqCHXF7mV4Z5QHmWAGeiUHiWvu",
  "key20": "5RZEYfL2w8o4fYbcYB7fbKfCGDGCcqJUKCiuvGUbBxgDB5mnVZfxbmQvQYXesLub5bwFcYB1BidtbxuPn44povM",
  "key21": "23RKZwhmFzxEEAdtq4chE6ebsQUCxNtLn4FBRG2bJG8jo8EpfbpUhZsK4pyEsapqDDct38f1UbF8wSvYh4uyZFP5",
  "key22": "2JX59tAbyPfm5Pk49rVb4tFuPMZ4fRHgoiHhxfuWReNHz35vwAAykL4hD1mL6qvZewbSVoxCTY5KAmrLecD1PBUu",
  "key23": "2vnS4ADoXGpnWmbciq6n5ZfSJg1ju6witofTrMW6ZEbefANaUwxw2WZWA2y2iKVQVrXf9yGSNHu4PEjmR9nExgUa",
  "key24": "3woXHncfQ2Sw7zaiaxuLoEtWmRA7S4tZyyfi8Dh9LHzdUQ9f62UTXqMSDcYEdBkusujHHtVng7b4rdX7M8HFop4D",
  "key25": "3dNAk85vfHiPhNPwr3rJMqvzFtmzsNYNcVz873HZufNgMonJnhfJqrFVkWynsKpkojataE33VQBxm6HnW3fYAifK",
  "key26": "3No42y7eYoWfJM4BtHQNFreUxdyktnG6aGJQZvWbcH88RekQhmpT2yVBhwLA3rfBva1pTqL5Me6tC2BTvwrCTjps",
  "key27": "3X6ngkFDMvEXiMLex6ToPczbLiFqSWwaYzm4zkhRYPK2auB8jrEXAbdYEC44A5ZmcXbaG6u8UH6cFeQjMYjESBJx",
  "key28": "4Lpe7wCPC9BUhWaqvHacEP55tRSSvMxXtYEvhXeDiMyvzhf6fVzFqz2yHNr2siRs6vExTNGHvv9GT7ZnbeHqxXdH",
  "key29": "3FDsSV47Ubv7YebCqon1VuHutteDUKvubJFcUrX16Yzv6K6h5WxJzPKZfDJXmETtkqWKdYMyMx1Cfk687SjXkkjg",
  "key30": "4H9emmbu1RiinNXWp5oZ28Xp4C9MW927bTPoAKzNTDM4mhZtPvyyiD7mQ4gsQXGeXkkiyUCQZMyS2t5nEhjFLHj4",
  "key31": "51aeKX3Zk6U31cWsYhqHCyAfphcLFYdUHyCcjrBVbJMTd7Qw6gP6JSU312BtuteL7FWeywFCnhsJeFcbvAFZExUz",
  "key32": "5PR3aysFf2UrdHSSJZ65MX826G1dmdBjrNKdFAcpApb1hzqZoR6vhRDrffGstdcMRw9o6aBe9uh1PuWgBvvPTgXH",
  "key33": "3kKbisM8k3mTVbbYSok1bivUou3DSfxs8eQ3A4bCNpKjTGVRe8PUrW1UQxcJBepCLR9uvZ1x6BALHRKiWF85hjwZ",
  "key34": "5RcwiNBf59FPZEGEJpq4i7YWpuiHnQDUFZs6UTbdcbqdrbdp6w3qpBaqa8n1XY171X1pKamNwFUqhfFHZ8WyQaXc",
  "key35": "5enTqmqUuG2DmXn1MgZvbmEdVW4XnFsPrhCENzkiiExtwRVpFJQF7AFgMqHUmAf5aHXKEsgyVvkM1tVdWbGdoQ7F",
  "key36": "2NtTejRaJpa65a8XWDiNpwFPgPDAuECLLDY25xrMtn6wUXYLd2niRw8Pf3ckqy2VSoADAyBVSczQrS34CjEzzMEP",
  "key37": "fTN1H3NEAPEH27hDeWvVvpxU7BuXNsj4k2KLemLvWj1nfvDgk6BkHuCJNj3yjXX5hg1anFeio5SMGeRFF3DLBNR",
  "key38": "5b4SoCNh467bqXW1oUTJgFx6oKbvU3UVj28jixcrBa5UUuYe7BuuuhX9ymvxUrFfFVA6X5CT5M4rK9eny4Ysc8JA",
  "key39": "5fDrmF4wTufmMqamJRZPz3VH31ew874fWT4y3aDZVTPaeMAYKLQoEXhUcSEHThzASsVpxzrb38d8fXocqvZjrcMS",
  "key40": "hURTuirsVgL8Xicu8fEcLrCfTnxZws5agxVpbDbEwGpeP5NxM9s59BvDzoZUqrLxMtsRyLornfK1bbnFc6dkKWr",
  "key41": "2AhHdzGe7etqDsfvsHCs63G2cBYuxDnmeALj8zL2gY4pwbwDn1uuT8PgzTxjoPmQp7P72T9aNJAbtaJEAbJy8JMn",
  "key42": "23KDun2z5RQZj9zd7qGBnLxPLyNKWZLCzkLe6wnr7yeAx5HC2TcNdpRJjitAP9PZze2FFuSEk6gmz3AvG7PE87sE"
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
