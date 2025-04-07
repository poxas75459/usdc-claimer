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
    "2P2xzUK5SbSjHnDzYbnd3zHNARLSB4zsTtEubnA1bBQnA28G5S3hmLsk22kAeXaEk6hpgprZLARbqUUSU9bAoSsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26SE5Xsvq7KrHMCcyYk6NuvUR8JyRASbZv55U8AQT7ZX4j7GrBtsr9whZtiUU5wNWFceBZc98snzyfJpkpj5aLpU",
  "key1": "3Y5cm7rSNa3rVQZYhWyWJuYKiAg4UoSvaQA6gfoKVh469q7t6DFcYU7QuMVx9bTkZ16ExwTugUMUzm9VauV1etnw",
  "key2": "4PJt1Kw6mQZqVaGvBD8edBvQ9njoboCxSYFkNchZYa9p5oPaZfpyEGckbQF516cGigKnx99kG4ZprxSSdFWd2vP8",
  "key3": "3KHm7wH7mY4Tyxv7dwGS8tN1kts2YR75Xh7PJJWJuDdBeAPT8ryCN44ZaDyDexM1GrP897SGp252x1tTELWRQRsP",
  "key4": "2TuKVvQEc1WVystATZSwDf6PXfehJ5ZLJv6MNmSSi5BD81BtdHAePNXn7924FEwXp6AwwnRp99aMxJbxSwZq5hPB",
  "key5": "5hwSocGcxxum4s6Vk5AQsZFzECnWfd5FD9DhUUH2jM78ADS7equkddLQnWAZRsLnEZEZTXGY7fBVocTXgqNVHncM",
  "key6": "2Rnbu4gzMYp2EFjuNQHkobVKUDeXj5nFnDcNrj8dGb1cDPC1VFFFWMtULR7QW5NP5p7psdkobUgrQRgzZkSNvSVE",
  "key7": "2jDzQqod7CnU4PaEdjRBbxcjjmRrcAU29Fcnn9LN9PC35HCwHfBrk5bcjoTP3rqh6yZo8WE3vuC6ZhJHpqyaJrx9",
  "key8": "4mDYdNphQYfctEEYBzRYwXRE3J42wRwu9YUBRzLZRaDt6HDRiY7hpZn27NwbT6tpdLoQmMGtwcY4UQg59zhz1uyY",
  "key9": "wxiEzPAaBeBPx2EHFcqKziFMj6JMvQ4kN2tU7214ajhTTB5kityb9nCoAHTYpo5zGvWhfoWBCsMNA2fXbrM7YaW",
  "key10": "3ixmSKyYknhtqX4ZjNZWkRjjgFjv5EAQ39A9Ae31hjzf2RD8ckiyfgKnhZsSdAgHZM3bbRETT91pBoWWcriNCuen",
  "key11": "3NNxwwEK5avMzSqhAQhV7pjLwtzVQtWzKxrpyrDeF7exHn6CQxtUSKZSzakbXvFwBcd3pPg6nbdQzfQD2HzzuhaU",
  "key12": "4HLvjBsbww1pHveLaKsL5CvhACiMhWVQkEFphk5JAchVAD1XNpoFCYePYKMJhYrnMcuomrbCCmSSDvSATCdBkgyu",
  "key13": "587FCEruYBZYptrYTUugAq2zatjZ71LNvJVGKN5M4tw2ekusMB6ZQYXt3Tty9r5RxnEcdXEFoitDcrFmaaQWa8ct",
  "key14": "ZzymoKQBDfdXpHR453vfZNzYjrGuUFKkH7bdyda9tcKA1cHHpExyagvSNfoSUPhdeiQx8ERqpDV5nyuigwHhPDu",
  "key15": "3RK4ECKDqAN8fwMXPgkgVMBjD9X7JpAKN2UAj2fejisKjFL3AME6CSVwV634TNHHEWt9tKTHStYYygCnUHcqbf4B",
  "key16": "4dqa2aT6wDmSsuQpVR74sMr3T7sDcVjDJteUcMk6P79DVqvTZcGVtTDmTahqVuGDKeF8Jgw2rbkVwJk1YeLxHiVG",
  "key17": "3Vq5RJSFXyyC5hjx2CaPXM2LiEV8C28pWwPy1CEGR9msWGUTCH3zB17BPsYFVG1e2BCDjWLcDctHpPTKdFFrwu83",
  "key18": "j8Pn8e7RMUN13SSpiDB9DxmFkTHkiY1Cz2v9KergwPzvV5asVU6uqZSSQZSVWUVgAncwt1mjQMpweJLJdFreSBd",
  "key19": "mcs4KuooBD4Y4sNmrudhv1iPYXTpBXwzp97qA1QBchHjt2AFFR8zntQKycKc28MmMoqwGd9F2bduhtggpDEq9Yh",
  "key20": "5b5iMpUJXTiJXfE9BAuCXe43TQohKD7R3mTbEGAcXMp7t8PxzRZEqErFL2UQGDwewVfyZb7jcKENSg9vc22tbF9T",
  "key21": "5xDaAocf2VPyJnpbgr5K48qbsQ4Bxn4aDEucknBcXmW2Q4x2oUHiuThk3nuB2auZYyNdoeg4pqGauZL5zvzeH2jH",
  "key22": "3PhFzGnxDywZKbcji5U4bz2ZENJ3bh33G1RgmuNF7WTpB5WwCdFUvyppDXmha5hHFnZsy3BYQ8qaeczpBy6mwVct",
  "key23": "53CsudzXpZPFgvaukbmgsKvZAm3D353xjwJtwDbYTA7Dt3Qczpp4NKkAfwGyaEcq9ubC6mdgjxGBSYmKqDDVLuXF",
  "key24": "5Z61Q2rVt36Ri5bQFGXg65g2vgjgBzBpUKJHPioncLgBtqHnPnGM3q1afELBe8S1zKg34hVJ9LqpVDPuYGRpkbfP",
  "key25": "3p28TZnrQLdgUFDpKjdq9gZpCpVVvo6f72Ypym4RVDNmoZEi9TKGJHsbFgKwyp1mvd628K5zqbP9kCiswgWgkx4v",
  "key26": "61MGKnZQ4Ba3fqKpD47J4yK2GuVK9TWwogBnp5d28cM1WZ4MgwdpYbKXZafSkp6xVqaNVz5QxoTEumpmTUKmuNmG",
  "key27": "2ZHKpAaXuNfCBMHLAaoqCoid8SAnqTpXTLX135uRoXb6jxFXZSU6HQntTFdB8MsX8pervkV7kH2H2NMb4sePSa4o",
  "key28": "yr36Wyhs2dhLk8F5yBXo5bbsH5PB58vUgsHDUda8VpA7NeNS1U5oMSpuFWMGaGzaHDSkaxbsWs6mxU7mzYPcGYX",
  "key29": "f3m3uJVx9RvvkG1Fa3tahRDR8UvTAn4a1svMhveWijKBwy6uUYFJzCwv3HD9hdUzbPppmj9ack22GE9w3ktASY3",
  "key30": "54S2vJuH1xBZeS7vRfF97JFgubMojSsAB93Cs4qzfyU9KQaqzvqN9XgTugBmbn3pypURSzudPLf8CNCbhNtXFYLa",
  "key31": "4Kv6BadccDESaFH8oasiyGedyLjdGBi2JD2ogkswAj553P4d3AKbbYHeVYMMVVsLV7Kn4DBtTww4BkALg8jBLp52",
  "key32": "4EJfaaZTfc5XiqvfY12ixQwNj4XtAT37A6zwQYtYban1DsqGN5Vs7wYAJh2AKckvqhP4h7hfEZe9wJmMVEwR95hZ",
  "key33": "5JAKsYP6kop5WnR4nMB5NYccvVABdkjYYhU37fPQ8ZpZLXbHBP4QMe7tWVNhByZLu7tvL8GrTvCgVqUGcgMr6Zd6"
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
