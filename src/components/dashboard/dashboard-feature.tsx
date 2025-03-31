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
    "5k7kEtAipP2aPrt2dW6nxxKDamDjStGE5EpQN4KKbGrrCeCVj7RkrNDGasFHFaRQRhvLXNywtRshY5DoxPBjV2s2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eQrKV5zScbM2budasrdtFmjAa4Sqrs2mS4VyXKVUE3peQiPwggAPTgAu6dUYbFo1m4VPkY9f9cbvipEa4aWktKs",
  "key1": "2Du6VWaQu4H4NaHrQgQ6VNn5R6ioVhWVYokQ3Kis1GB4wqVncwBxRUoz9pvgeg55YpCk9xTEnxxhShjqGrB54XRb",
  "key2": "5KaTCsoqbwUSB4Z441cEdUxsQKyaSAQRrKonhoCHHvqJh7MJNfEjZVQBR5QFPF6qwvyD6NdT8u1Tsm2ApQWQG6mX",
  "key3": "4gefQo7Uw9XoV3cjgj2Zg2Dwqa2s4hMSJonu1ZVVZNfRgnfJLJ9RnVnkBEkUyNVPvRkT9EKTN9U9NBSbmEDw2MPi",
  "key4": "BQv4pV3XRNrRYscjrcdPWPLfnxjcibThZwqx8gKbvCmEVFxJphGNvYapgfj2Qm5sxAYsM7EKKHiW6rKgL3KvDxv",
  "key5": "5n9nKTxm3XBnHMTzV4y4EaHgFcBrcbsZhyJ1YdM1XvdYSzHACyBYX63PXhqMP9ZqWkKDMumG6NnWCRph5TYb7vBS",
  "key6": "32eWk5G4nbjdz1hYQypwAM5wAjNyQRRorp2FEQNguD41xBec6fazL5vpBazDRxm5VkmurH9j45ZVpPU7w2SMEm9Q",
  "key7": "5Kbk5F468hc1u6AKB6oDDURcV8AVq9Q8P1eEeiXqDxThz61mC9MMMfUdhqwYqdcN5uhBsGdvjjXufEMzLs6KsBqE",
  "key8": "4LfuJognXUZHEogyYi63aM7Y7P983Wp514kG8c4eJdE8noWscfmUyRGPaKMYDh7JJthUorpF2qFrcwQfHnUMd8cU",
  "key9": "2poywepF4cdCV83yqQRcgWrLGDSV8yyr9tkcppgPTCzWE7FhSjQZ5jDsFsdDSLHBwkKYQTLMWmvr5RLWnZSpYZM1",
  "key10": "3pQe6cimjUpr6qwqtZTPcEK5Y4LY3mjgcpM5JZ8EUHBZM1R1erdmMvSZ1kf3f8nY99PyH8kNd4a5AdQL21yz8Pvg",
  "key11": "3Q9Yx1nRhpHfqtyMb2XPMKbvA7LUx7gG43JqPLyZtm1Uscgh774uzgDeE96muemukPrXB43xN3fwAKArtZScMCTy",
  "key12": "4PD8FM1Hkihn5Mp4XmuG4pG5Egj8PDPT1LchhR9DacwmUeHh3Vc8bJobzznY3tFrNknNKb4xkq9rgtwtNcVnVTPF",
  "key13": "125m6C4ABArqWCTQpqED3sZcWZtepa2UGYS8s28cDXzrWH5V13pMW55bgncodBfpsX3UC65YXy6rehmFJpN95Eed",
  "key14": "4JqrSfRVyTwRQCye9rQmjWKgVRcjfSVEA6hu899vtNkHT84w5xtvZmfsewi51pJizNu51nHn1YogFR5UGiN2PCCE",
  "key15": "5gRB8CcLfvomkEzEM4cFnTt4ygUqKjq38WwPvsbdoHxDBpkVzd6n17HsuukNTbwfSfGY94TPgDBc5LsaXxUBHauN",
  "key16": "mJnHw39NYgiAKqP1PLQ2d3iitConxxXGXpRLJWLjdeN98CmFcb44RnJtUK4rQEVugZh5L5JNUpLZSVFZhgzUmow",
  "key17": "4BCa8TzR7uzixDsNE5cKxXsoD178cRSnkwP8GSxEPSqVLV9FL1zcCdVrdVypsnMNVjMLW4URYaELBhcF157GjEy9",
  "key18": "4MfAy6FtbHPBgc8RYAD2V5kV9ua46Qxf4vWgcjRenbYZQPTiDxy5UBu8Gu6xFrrTaXwzZPFyuCvtsbmbjsW8wHMD",
  "key19": "3zSKxhiKeKMEjYYBpNsHppYzpU1sdSXc4WxABt6vZGCiTDFhuWsFTA593G5BkZgDKzARMT5zYU3PVKScVDksfpLJ",
  "key20": "po51h3yJupgs29YZ9tVM6EtRQTmBpGiw6pW1jXLNh3nvopuq6BEjVoKEwt9pYBHfd9kWSsAyJjWCE7wnm5tBTUk",
  "key21": "43Uut18oeS699xwDMKKSD61rkMDnLL7vTnQmKyHN9DsyP5982HQn5XqadPJEM8sCLhM1ZHZmS69nC5ojTpqjyhsQ",
  "key22": "48YtvCMXHoejEdvnrT39Eh3SLAthq5rZVWN2Cq5Gp5NVo1HsxqkvmACd35eBxZKRhv3THM644gzWG51qZSHG7bre",
  "key23": "61WzKuC6KPv5vPmGkRSHRQsbuizaaCpSAxPGT8g4riNbZ77fivYVPkqh4sz33fpPq8EiKuMZ2cWagSa8XwAm33x9",
  "key24": "zrusDBZuJGTHFRr6BfK5iu8JJfrLBwg5cPMSdMArTfkpd3RfQbeotCyBFVbFEYw8yiDjyRtw39S778dm6SN4iSv",
  "key25": "5kNp25KNzFp6unLBewLXUidqYzypho7bt3XLY6PSvobpK5HFHJPTEKxMu7hU7PsGuTejH7gPYhLPbCkUUuej3N6r",
  "key26": "5kRxY2H5i6y5XV21jkhMob39MDf9piSpLGGDjGLyYBvYW1gF2mBZzqUGrozHAtKy6K59v3efc6kCnjBLAh1BaKzJ",
  "key27": "2fh84uvy2HhAa5SGLKd7PDx1SmmsJVhkpMoPVX2XqksMYSZYq1mBFLwemGH2DsCc3v4Vh4odobwQXY9KoWpQuvEp",
  "key28": "3LMfEqRGEGSK6MRdUKtbzaU9V1j4onKHx6UVZsmYperytRexuy5CfB3ciACJ7XjddurceiqnrBUK8E4dtbD4TzwJ",
  "key29": "3kR2txtfQAntEMJ7UYPsPisjB6tZGEZdF4Kzi8hoSHJtcCch48qMmqxvgSuZZ3KrgymGaCTZ3X9E5oMa2vG8dCXC",
  "key30": "i2CPWwhyzk2kmU1eFPKnMUsLjnag6Y6xkDgfpdjmrw5mxx29PuEXLNiAk6gZvwgqYpvCuv5tpSjm5as3XKSsVnz",
  "key31": "3348rMCBhytViNNJoXJCRccYfVTmMn4R3VQS8TMh74LC2KvPV6f8WEvb3NymgFbmEDmhbR4w36KnthRvNFgrJ873",
  "key32": "2gxDMbe5KStgVAm9AVSBHBQ6uny2GCkU8Mjb77dWkjAfRwanJqsHf8WuLjSQt1TvC33Y2WVYzgGSgEKR6wQGtAZq",
  "key33": "3QGwVRFrZMEb8VyY192kkrCh7qea12wBoKsCWZXJNxmBY8rGVxviYZDk1gvaDbfDJcAvncDMjZjqFzzmKSK9YT9D",
  "key34": "2i7HZAgqScs5PXJz6qfB9CxAhMiVfpTPtEjrJzjvx49MMFGiC1Kcmw59pG1AXFk98pHwvboXLiuZSr6EvWvDkMDW"
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
