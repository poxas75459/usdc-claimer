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
    "5RfKv3RLdD2qcRPoSybVXEk9qDsQfRLWWtzZ1ebcNJog6fzFt6P7HAjYrkULjRJ1eWDyyhwT4LNQFhWyGKXDgRmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PFCnCxWVzdByTjDmSSeriyUkihuPc1cnwW99zFwQ3uNhh237K3Zk1GZFxwLybo8SqGZKakwfjRTuvcgMPkydEQo",
  "key1": "28JRiuFVu1A5w1YEHrj9XbWhG4pmVSwygE7uyW4VNjDJk54vXpQsKS99Ma6MEFWPw9mamxmrZrVxg4x2eNFHiRCS",
  "key2": "5YD4v4gmczojdWDbC18xMrzpWPuDzU1bsnohuKp1HtU6wVkJWy1XKDa4b7H5mahn3QkscDy9bGUJVZaC2Q4zS7bW",
  "key3": "3THWeiEUXwNCtT8QBH9NtjdGgkYUDm8C4V1UWCor9ZXM6irodEjYZY8Ks14CMMiH8VjLxPcbgLWomQAxKoaBic3C",
  "key4": "2UeRVXp3C9zxLADzXYN14hiKEQnvnDVTjHtzBuGSchtz1zHviFkzNgNfq5gG75gr1uZMAEydV7vVB91Asuu71CgT",
  "key5": "CZAM2rU3J7ytejfME1Ts64QkPWVFHKEskRMkP4oAez4Fq1cQkrWyGdPDPRP6XmBRcsCam86zS23XmJS5j41JbWf",
  "key6": "FikfjR5Q9Lfy5f7PLWUhjrEA1F2qvSBsQxYAX5WxqEiDg5UqiH2tJjdeaZ7tu5UkHqypYouXR1ByNGHMjbQj72x",
  "key7": "4UPvU1wK2SbQrRzLnw8vFjd3g2G3v8NcmGnKUtcVCEjxxmdshHRk8nRFTo7FE2kjTzKX7Q6YAZs8eJrskXy6UTJL",
  "key8": "28s85p8M2CvfLaDfQfFDNJbLuKkQaPsUoTUKBWJthEBYREHVXPJAsVHNSuRCPiyN5yQiHptFxaN1uSdzom4D8Bg5",
  "key9": "5r5LGF2BqSkufPm43STYxLfxpsMoN67L1FEgVVekqEnf64Z2U2oY4dPxWce6cwvGruJWKFAViurDvfFKAg3GxaZQ",
  "key10": "5qmiv4ZzCK3hCYPkTuaAjtknzYn4MNC7JzcjhEJ8pktjamPB5prspBf1ETtUR2RHHWdWae6Wzmgj37GYXzHn4iCa",
  "key11": "2eAPJNz6v1owen9ZKhPcbJsq1XyxijfQzkMQnjA7nwKebvWHQH1hk9XgQqk5aKqkuuvfFUygKJFcqbaAGM9MZrTV",
  "key12": "4J976gedTWUGTuarspysiAZPsi4uwDS66iXDcW7MkSTymdxJLDNNm3xx5CTjZ3qU7vYzbRqeLf76uKFEtxuuCxdj",
  "key13": "p3kHgS7ehTqzQhQushcs8RztaxN17sjLWXL1PkgaHzT4cTBF2HMMSdjUVYChSoWmefJUDbekdS64yEuzQCxRWE6",
  "key14": "352wDiRkeL7abZooHBnF8N6FByAgLsGcnx8j8v4gmj8b7MKkjnnznU4k85GL5BDQEjNnbEPMEqERrqFzyKdfxvr5",
  "key15": "2YmFn7Df2G9LxcJQ8Tak8hXhqeHqj4oq1hLDjBCZ2Dr1nHLZGJS8AMLBk12aU2SSqhRtzTeSLfaAHeWFPFfRNH3B",
  "key16": "66o4GQAw5M5X1ySbD4u1FErJx5oURSvC9WBkrEu8X5gaEPTe6B5aqn56riVD9LTS31NSYLkuuw6uQX1Hsmu74nEx",
  "key17": "2NdvCiTj7BZZkV2MSqcKCdq9DUYibdeLUx4YnmpZotx3L1gtrV8qZYp8vGe5Z5iG5VHt6ZeZK7b75hf2Dm74azFF",
  "key18": "fuyoGsuCCWPzsMWPoWSvzw2uEL9h2iHhwmVFHYUUYu4VzNz1HsyPrC5H3Ae39pPosWbyYgR6NWCUotzqmsoLjC7",
  "key19": "3Ja1LRPKwwzWonouqK9hV5TpMPbnnHuFA4FfNNvdYJXVafV4bethGmcv6jU5L3wyqGFYfY4HvPsmXGvG1btrScp1",
  "key20": "4RAsPovzBNprCUqbiuzizpQtj4FkjGAujYaTqcMGTwGbgZ6DYAbaLGweedD6VowrTatZzgid7uN1RfVLeWJDax6e",
  "key21": "4NmuBVgcESd2D7gNABZpnNtaLnMKGUioTbwJULwUHPPjWZbzzqQiChH4m8iyMqEvpiTX4rZeiNJWPCZGyrvQHZpn",
  "key22": "2goxkRdCfH3AUrHqTkUVKYTP8EU2opjNmqs8TnM3wMy6AgUdbFNt9sgmNXEXakPuQ3Mi7sgF1qerPTFmTjizGvf5",
  "key23": "4TFhqoVAb8nETujZTMybpy4wKcZRGp1fwJnDVA2Xf6oVSXk8BZ58kUX362ffqdxpUsUAH5nCjFaEuRzg1Sep9fd5",
  "key24": "3TLCk31M8L7W3n7FmmKUbS5caApSpS9yhQAav2rnDzk2wpE1qMLAMBBugGmo6s2A8m4KwQNtMVrSNeYUY9tgATq6",
  "key25": "3DKoedezR3AwGjTWMW7FR8zfoEcxrs4aqdvhs1Q26GDNrm33GVQPcHN8v5RhWZE86KFcHZpEr6hFyvSvtM768Asx",
  "key26": "3M9iH13cn9LRha6vW4YK1VhJgY4BQ8Vs9UuPZrNkdpBbFA8MKJe1Ka6prsr9UgjufLRxgC12drptLJbFuJFT6hsY",
  "key27": "5bFqYCiYNaRiAtYMTRkKdMcKiFkjrVdamiTck2SKzyBSwbUDsTUT5JbJHXyd8P8ymFbBe8khVtBmyLzPiE2nAMXV",
  "key28": "47LyhoEWmFhitLXaYQ68CtHw71BMwufSzrYpchhyPpXb4rgYfnWMCCVfhpNV6D69ZFKXrKXdBWJ6yzs8tn8qKLQJ",
  "key29": "5TbxgR911qW3U1XvcyqyuF9vphpHvpzJXDHYfvmhjGDanbxdsbtVoKuAwq9vyAKHCeEPrkNGWY611cFstYebo24X",
  "key30": "2UcyKiQCyL6Ux6F5T944Mxk1Dndw3iTi8J5waEEPgwher7sdiSJz1NaggDpdW7SkdFjUYLh1F77F4XYcZesQrzV4",
  "key31": "3qtMRy5Y9f7iKY4CxMgCY1zZaXvcuXuxfqhXvGFGtp55DdLN8Pet44GgTMuHKm4Ewn5dHyTAGwXegKxYsutqG8XT",
  "key32": "5ZroyeCGSk5wWSgRFNS4VinJiadHVE8rFoqyZeqx9JRvRsTKKVFNjCgdN2VNpbnMSBX9BcT32wYVW9eR4fQYnKuh",
  "key33": "59h6j5UDqWwZJYVJ3v6RCWfMq2PgceGKXpLT3spY7eRh1m2LpcYxBSNUhzn4beJAYVAqfj25tSacs8uCezvjEuGo",
  "key34": "ZsUFzdkQAZNyxJ66CjmR56T5DrSHKXyMhgzwRLfmoEGPykkKP8PsUS18tTigwEBrDqD5vhhS96hx9hYPUBVXKNq",
  "key35": "3JfQGnkAoHd4G6FEiwRCVjBfZqJ3kDGGd45T88UT3XW8wFqjzWxHnJR1oR4RZyUtwNZBTAHjLqNcBStD5HJwX2AA",
  "key36": "K9prDyEsDui3BLbo93fUUVE3ji74VuzR17q4BqjdwNm5B1x3eM1epAkMHn8rTjBBdwzgUDBSNq9qNMoniEJ7eAM",
  "key37": "YHjnGwTZcz5TaT2wdqmWScqscj5Uau5dZ1WMq6Nax7DdknAEMWorRuWorUoeei8jSkamfuhmbn9kxv4xijC7NQv",
  "key38": "5Cr4MEnPCQbT2XxL3qod3Vyc6LrMX8j1zBo7uJopgaRhocmbEr6RZZJqMfAwydyR2FLNSAvL5BhqQRg2gPWCaewA",
  "key39": "3K63Xaasxqn6woufz5YxGhqj2WovBGmUkAZiJvfwHKuxGk8s9ew8Akocfzjn82v65XbKK6TbhYJc5Sdqck6B2TG8",
  "key40": "3K1kMZFYAhHXwHrDrmmoa1TFBRVbzJLn2HjEuXwmGZTzoSjgUBcyT8eT6rYaFBNB7JSkH8nhZsbfTXJDqqudBY9u",
  "key41": "3i9DpFJGyGMQ3jeZLHBLG9Hv4H5qQKrDuJUVH6wVTJVbgpDaXyiGH7F4NWGwrYcKdZzAbMeCDVhwB8eCVz64AUbg",
  "key42": "64mtzSgEYJejVFXXCkLTqLEWerGxwtAu8961CWeKsazsp6ZZzQFZwQpFieRrZDDgj8xtADdu35RuGqDKnZt5q2cS",
  "key43": "34R8tqgjhhXibNrnPRN4JKYchMQ3yDe3y6wopW94uFymW11zY7kmSPCZgdVEyWwSpDJxVbuP7HFyoP5N9473EmCy",
  "key44": "5q1sgB8ADUu7cSjq7UVbmooTHrjzHAYKyvkUPUXx9znS4Ycswz8KaH3MiD5TQWSN1Tdneu7fYjjMXHDtwqakZaw7",
  "key45": "EKAUbZK71swU23yKNFLDJKLizpRDeRm78DXCdjeEX1EWWEZTuS3V5M7F6bo8Et7iDhBp5kkLHKQzgQ5Mj4RMqsG",
  "key46": "5WhZKj83YsTaEGJKHxy1MiEgrQA8fuyAZMxNwofzd3YhqHc2dwMANcqPJj71R8Bg6VNrkaACkyFtf8qwGsq2iAyc"
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
