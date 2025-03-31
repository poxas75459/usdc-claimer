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
    "hykBoig3pFNg8xrb7vAWWamsKKwM5VSqFxBsoF8Edsg1XdkpX75nMLMW6zCf3934WJ3sJfFZK24pi8XLSRT3hSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sxkteJHzmwiBGGit7t4DKqNWpE26N8Ctdb2vBDxaREqzR47hZ6SU3zZkTGnUkZVY9bFFJHokZ66tBMKEGQArgZA",
  "key1": "5mC6TQgYRKnq8yDzs6R36YbnyF2ZZMEv8kA4BFfkQgrvk7R742AA6AkyTuZ4AkTo3YYPPNAjZGmjFWrs1atap6Ye",
  "key2": "3xetWTcj82TX3NiW8izEZrRRTVghx9wVQcW8QxYo3zdg82uss1cPhczFuYW7mKhKvcyKNRkMN4SxidYzKEX7nsb3",
  "key3": "4ena2KfQXUnpRR9p6BeVmEox53wU2jTBV8V2HKGNJyAxWAL4h8kr5cEJTWa87bYHwPem4ko5xk39JfPFPJmAaTV5",
  "key4": "4pgF2qWPXgSaCuXqszgeswUkEW3mipDZYyAyUQkSW93nRknjAcKnm5sxvETGLu7LTKqYkL3ALp2d7rBg9MiZsJZ",
  "key5": "5b5WszvXmboP3kskXnJ6Z3xfbjwuxLpnUiYKjmQeGcCm7QBVD45g9NHkF31MRzSxZks7gJ1QXGGYiaXwpuvUbPFP",
  "key6": "YKXNk4SifUEV1C7sXn8EcYJGmvwAUBeykH4Mh6ZF5chfp6ZVyW49VvooPujXsS2RuWj3KPgmTkh1pzMim8JCPax",
  "key7": "3rgSu742FkZxuyeKjx32efByZfoWHtLm9EfBJWF8i9iutRnQV2y67vVqXpjwXETmzi5EBsT6NJrqZUVnUmQhn5x9",
  "key8": "4PUpLPPv2a5mhYQXE6NJE52odZvUqRNCN6oewJpEmDGCQBfePgBaGMpYcpCVNMdCvHmPnqfy6Hf9D4CNsLHKFaPS",
  "key9": "246Ussa4i5uXD4W3mJ965YtZyGkdsNVegt6qe24AgEPCdyZZwsWDMgRjFSVENSoZePM915WfVUYk5MDSUPnFmHSq",
  "key10": "3jwVqMQAzi71JguHQXhweCE1LYBiXCX3KK32WYazhMJf49KngUZ9L2KdqF7eyyD7zc6kwq8XPrEQmQB5KZfAESkm",
  "key11": "5afPFH1UxyrxiYGhkisQ7oAqEUBfnC3NLTNdW6WTWoXK1voErJpuQkBeNrPikHhdWbUWeYMvSrZTwjCqusvzKHJ9",
  "key12": "bj4jbxSPmjkxxEXC2TZuXv9rNwiq1MQqCDPeafbbYQzWGVFgrBjmZmqZSpdstb6DQF7YGDEkBCBftaCP75wd8A9",
  "key13": "4iRcL9zMHZ6VYhLY1qNkGCqkTSqBPsujza2mzPdpLGJpM44UPsdUw7SptCUS4FBVzHFBK6fRtk9otQjP4BzkUVmn",
  "key14": "htufHckkAggb8pyfZyHfkexWWMUVE8uAzmoqQTWGxCQaM6ZWYjM9bUoBdkTecW9moNV2kaVSrngqFNdpwJrouDd",
  "key15": "65MV7DYiNRamTHGeytTBuBTNaf9z1vZRpZHCAges1CHPGnZZbkdszoQBRJzHBJympVzWiBY88mGZY7KAMtAqLhXR",
  "key16": "2hZLvLGN96dgLgAEfpv1SCodkdmqFwNSE3Eb6ckK5bnkzGug4ZKpdPUKoQxwQ41jHUEgKRWaAh5zAEGsD9TLfijh",
  "key17": "51Zrnn3LYnPCaBifwKUoFvCbxP28oBy3Ef65CBi9nGaai9tQ3V2zy7tKtvA96RviXF6DozUeHEFn1ZuTT5vZ6JYy",
  "key18": "4XKzzeLuRx58sv2mrsnAfLbei3k5LUNfGq7mJykCTMMGzzQ7odt3MKTYiCJpBoh8NJ9t1ZxjqtqnyMoZWYxg77pd",
  "key19": "2Ab1LJzUXsZk1hVj1thA2VHQZefCYEqYHhy8dw9LyVZhyyfGFFmaCRFUqbeYhThoWzAswnrG4fEh3WZDh6ZRtj32",
  "key20": "5ktp3uBiMra3WaHoAwR2RsQm1S8Eu1wo3N17PiyvEjnRtVtyCw1sQwgpWJK7ovkhvrs7b4aUnUEuz71H8hyjBDRk",
  "key21": "mGjPoS6dJaMFXE38M911EZW6XnfKXs6FRw3fv53m7ojuADDRLjTuhZw3X2RyL4jB8A2Y8TV2U64FN6MF7o1HnZJ",
  "key22": "3Bzt94kq72mxztddhdXc8R2waZ8NzbHus8BWYVanURxe8zjVsSK8RbD6XaRM6Wybfvc2m8krno1RuE7r8VvgRGBH",
  "key23": "PrhyJRB4iykVnzFqWFdBCg7yoPQqmeL4bkxE21CbSZ8mSbYzzXzc7gnqMkV2u54bQniS6AocVWGZ2uRKZvGZXFw",
  "key24": "3PA7HtF2nmrcWVfdAoBXnREnjGqEgdM52JZNJgE5yivMsRPkaMDs3YJavWsqAJpEAirgQugpbtZnz98paWD5c1zK",
  "key25": "2hpEd3Gu1NGTYejA1WzoyUbNVa55q8i9rYyNn6jcNWHhaRGCdUWPEyzoCKtf9njN7Teu7FMgXzMGfSUC84vbbsb8",
  "key26": "59wH63xmZvfTbWwSFJ8cxvgwFcsaYyFaYAtEKA9cSzhmckbmwCoPREg8UAeaNmxrYKVmt2KX84bVFbvBA7VNkqJ7",
  "key27": "62tPF86NChDiQJystvq7nGRgfrZERqDGvaxXA84VDBQ3nP6NWMeVRyxMBnQY3MQ3EApomKZNgq2BiRFP1dSLe2PA",
  "key28": "3bPbBkVVH2WDKWKwhqmgvZLnKGrf3UKggiy7kzM7Sv4ByPxq9RguLnvyRYtfTazvL34g7RW7MFjKWE93AgA4xukW",
  "key29": "5uS9NUhWMhykUsUwueAto8VaG51RujpgSecMRUxsEyyrKaa1NB9oMANrtSjodJmJo6DuoqpwudejbiqSqaCMXSg3",
  "key30": "2pukrZfqVWxBWsxEbHhh5Zk9gCzg5XsUAsaT1Tiz8ifjGiaxi1Ac47tLU3RtsUynEfRyLo6Dxzj1MWQZqwnWpkcv",
  "key31": "45NyzT3UAWK7KG9c95gCLbV5eVxwTB3dtQjTanLEDm878gzotfeGtStsBckR9n82KfuYyGnUrq8Ua1erDshfZvrV",
  "key32": "8wnCfyhqDbGemfoHjCZT2Z8od3GA2keAxbLQgqz31xgoC8yDWYSSHQErPiXDQyCHf9o9rT18yWdJkwDAtgNoeQp",
  "key33": "26gbafdyrwX1RPsQjkmfCAm4ebHuvgN1pkFiZdFNQ44iXVebhhen4ioHmnijwGcrVo5yN8P8rjcczasqdn14Sog3",
  "key34": "4JF1AfSrwmfh2yL6vgXJMKRiKxTDERefFPRDtLMDwCzdYG1Ze4ysRjbwaeL4GTByXSAKcNRHLvXecqrKfAwPWzJQ",
  "key35": "4PjjvqSUXYbGT1HHeYX1ViEAWkkyvqkh3Haaaw5W3PWpajjtckHzKJrEDDHL7rmpzVpJEiYCPqkxdJX6eSgDGUrN",
  "key36": "2iCvtEUZ5yxmi5A6mkBJHEHWDnC3jBWHkv4dGLBhwmgE8eb5hN3oPUnShTcyNZko18YNYFag6KXPiPed5EWB7LUC",
  "key37": "4RzPAnarRiKCehXNVGsRxuYqGZxsroyeMXJnpymP6v1C4UBr1BQBCYykfykY25tVscQqTGQGPnSwbqRXaZvZM73Z",
  "key38": "nbLFkRuqGjVKAm3N3BGDNZqTaaZkhw2dsggGUYbUkgRjs6EnJ8GB7hYk8eSe7cBckHt5NGY59vz9UMDXW5QQvow",
  "key39": "1zoCqmQ9x9MYT1jBWyC5Sg49TnYp918CgGnyPec1L2G57oUDiT3YDjwjTj6Ljg6V85HcSSJW8yUMWbyLdxkQWTx",
  "key40": "29pr8UzbGHnLY5g4mdtuckkeiXBaKxVdTAWYKATtgbBS6zuV56jMSzyYMaZNK9m39w1Htb3Cb8Pj6U4uX2jJZMiA",
  "key41": "5PahLzGBnG1rfVuNQGnMHsuETQWr8zDFjAtAinwukND5h7cQxbn7Yn7JqJDjpA8z7bbVCwcHA7CLBbS91Z5VXsdv",
  "key42": "5z7ME6U4UFps7uDEkU6HcNTP2wTFq4FfD6T84kFKnL75B8Kc1yV1p2pwD3GtMEVj6mGJC1X7uESe4dtQqjiE6yhB",
  "key43": "Qiqk4BiazyxdZm8wtrBovqyqwnWHfjYvDZsMAP25hA2mjijGh2S3okMtK7BgiDZzyPiLTuSFJ2rtmt1gLrvtFUe",
  "key44": "K4FJ9jTWFHAjv1u7mGsyQDboTEY12NY2eGm9uAszjvyHLSBRLjkbFkAZ9RBvcMvBSUxrXREYMKF87AZk6vai19W",
  "key45": "5NHGvHfvnTk2PGsCPEnkV6Gon8Mbk7gXy1TVCBBVVLhRLoYVCBM6rRYQLm7H2qp2gBNX18qMieFWYiuPucEwcWZL"
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
